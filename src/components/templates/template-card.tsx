import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { DownloadIcon, EyeIcon, HeartIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { TemplateMetadata } from "@/dialogs/resume/template/data";
import { cn } from "@/utils/style";

type TemplateCardProps = {
	id: string;
	metadata: TemplateMetadata;
	onSelect: (templateId: string) => void;
	isFavorite?: boolean;
	onToggleFavorite?: (templateId: string) => void;
};

export function TemplateCard({ id, metadata, onSelect, isFavorite = false, onToggleFavorite }: TemplateCardProps) {
	const { i18n } = useLingui();

	const handleSelect = () => {
		try {
			onSelect(id);
		} catch (error) {
			console.error("Error selecting template:", error);
		}
	};

	const handleToggleFavorite = (e: React.MouseEvent) => {
		try {
			e.stopPropagation();
			onToggleFavorite?.(id);
		} catch (error) {
			console.error("Error toggling favorite:", error);
		}
	};

	const handleDownload = () => {
		try {
			window.open(`/templates/pdf/${id}.pdf`, "_blank");
		} catch (error) {
			console.error("Error downloading template:", error);
		}
	};

	return (
		<motion.div
			className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-lg"
			whileHover={{ y: -4 }}
		>
			{/* Template Preview */}
			<div className="relative aspect-[3/4] overflow-hidden bg-muted">
				<img
					src={metadata.imageUrl}
					alt={metadata.name}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					onError={(e) => {
						// Fallback for missing images
						const target = e.target as HTMLImageElement;
						target.src = "/templates/jpg/placeholder.jpg";
					}}
				/>

				{/* Overlay Actions */}
				<div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-colors duration-300 group-hover:bg-black/20 group-hover:opacity-100">
					<div className="flex gap-2">
						<Button
							size="sm"
							variant="secondary"
							onClick={handleSelect}
							className="bg-white/90 text-black hover:bg-white"
						>
							<EyeIcon size={16} />
							<Trans>Preview</Trans>
						</Button>

						{onToggleFavorite && (
							<Button
								size="sm"
								variant="secondary"
								onClick={handleToggleFavorite}
								className="bg-white/90 text-black hover:bg-white"
							>
								<HeartIcon size={16} className={cn(isFavorite && "fill-red-500 text-red-500")} />
							</Button>
						)}
					</div>
				</div>

				{/* Sidebar Position Badge */}
				<div className="absolute top-2 right-2">
					<Badge variant="secondary" className="bg-black/70 text-white text-xs">
						{metadata.sidebarPosition === "left" && "Left Sidebar"}
						{metadata.sidebarPosition === "right" && "Right Sidebar"}
						{metadata.sidebarPosition === "none" && "Single Column"}
					</Badge>
				</div>
			</div>

			{/* Template Info */}
			<div className="space-y-3 p-4">
				<div>
					<h3 className="mb-1 font-semibold text-lg leading-tight">{metadata.name}</h3>
					<p className="line-clamp-2 text-muted-foreground text-sm">{i18n.t(metadata.description)}</p>
				</div>

				{/* Tags */}
				{metadata.tags.length > 0 && (
					<div className="flex flex-wrap gap-1">
						{metadata.tags.slice(0, 3).map((tag) => (
							<Badge key={tag} variant="outline" className="text-xs">
								{tag}
							</Badge>
						))}
						{metadata.tags.length > 3 && (
							<Badge variant="outline" className="text-xs">
								+{metadata.tags.length - 3}
							</Badge>
						)}
					</div>
				)}

				{/* Action Buttons */}
				<div className="flex gap-2 pt-2">
					<Button
						onClick={handleSelect}
						className="flex-1"
						size="sm"
					>
						<Trans>Use Template</Trans>
					</Button>
					
					<Button
						variant="outline"
						size="sm"
						onClick={handleDownload}
					>
						<DownloadIcon size={16} />
					</Button>
				</div>
			</div>

			{/* Quick Preview on Hover */}
			<div className="absolute right-0 bottom-0 left-0 translate-y-full transform bg-black/80 p-3 text-white transition-transform duration-300 group-hover:translate-y-0">
				<div className="text-sm">
					<div className="mb-1 font-medium">Quick Preview</div>
					<div className="line-clamp-2 text-xs opacity-90">{i18n.t(metadata.description)}</div>
				</div>
			</div>
		</motion.div>
	);
}
