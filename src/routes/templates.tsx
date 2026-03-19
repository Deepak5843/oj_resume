import { Trans } from "@lingui/react/macro";
import { FunnelIcon, PlusIcon } from "@phosphor-icons/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { TemplateCard } from "@/components/templates/template-card";
import { TemplateFilters } from "@/components/templates/template-filters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { templates } from "@/dialogs/resume/template/data";

export const Route = createFileRoute("/templates")({
	component: TemplatesPage,
});

function TemplatesPage() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<"name" | "popularity" | "date">("name");

	// Get custom templates from localStorage
	const customTemplates = useMemo(() => {
		try {
			const stored = localStorage.getItem("custom-templates");
			return stored ? JSON.parse(stored) : [];
		} catch {
			return [];
		}
	}, []);

	// Combine default templates with custom templates
	const allTemplates = useMemo(() => {
		const custom = customTemplates.map((template: any) => ({
			id: template.id,
			metadata: {
				name: template.name,
				description: "Custom template created by user",
				tags: ["Custom"],
				preview: "",
				isCustom: true,
				createdAt: template.createdAt,
			},
		}));

		return { ...templates, ...Object.fromEntries(custom.map((t: any) => [t.id, t.metadata])) };
	}, [customTemplates]);

	// Filter templates based on search and filters
	const filteredTemplates = Object.entries(allTemplates)
		.filter(([_, metadata]) => {
			const meta = metadata as any;
			const matchesSearch =
				meta.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				meta.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

			const matchesFilters =
				selectedFilters.length === 0 || selectedFilters.some((filter) => meta.tags.includes(filter));

			return matchesSearch && matchesFilters;
		})
		.sort(([_, a], [__, b]) => {
			const aMeta = a as any;
			const bMeta = b as any;
			switch (sortBy) {
				case "name":
					return aMeta.name.localeCompare(bMeta.name);
				case "popularity":
					return 0; // TODO: Add popularity tracking
				case "date":
					return 0; // TODO: Add date tracking
				default:
					return 0;
			}
		});

	// Get all unique tags for filters
	const allTags = Array.from(new Set(Object.values(allTemplates).flatMap((template: any) => template.tags))).sort();

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<div className="border-b bg-card">
				<div className="container mx-auto px-6 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col gap-6"
					>
						<div className="flex items-center justify-between">
							<div>
								<h1 className="mb-2 font-bold text-4xl tracking-tight">
									<Trans>Template Gallery</Trans>
								</h1>
								<p className="text-lg text-muted-foreground">
									<Trans>
										Choose from our collection of professional resume templates or create your own custom design.
									</Trans>
								</p>
							</div>

							<Link to="/templates/create">
								<Button size="lg" className="flex items-center gap-2">
									<PlusIcon size={20} />
									<Trans>Create Template</Trans>
								</Button>
							</Link>
						</div>

						{/* Search and Filters */}
						<div className="flex flex-col gap-4 md:flex-row">
							<div className="relative flex-1">
								<FunnelIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" size={20} />
								<Input
									placeholder="Search templates..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="pl-10"
								/>
							</div>

							<TemplateFilters
								allTags={allTags}
								selectedFilters={selectedFilters}
								onFiltersChange={setSelectedFilters}
								sortBy={sortBy}
								onSortChange={setSortBy}
							/>
						</div>

						{/* Active Filters */}
						{selectedFilters.length > 0 && (
							<div className="flex flex-wrap items-center gap-2">
								<span className="text-muted-foreground text-sm">
									<Trans>Active filters:</Trans>
								</span>
								{selectedFilters.map((filter) => (
									<Badge
										key={filter}
										variant="secondary"
										className="cursor-pointer"
										onClick={() => setSelectedFilters((prev) => prev.filter((f) => f !== filter))}
									>
										{filter} ×
									</Badge>
								))}
								<Button variant="ghost" size="sm" onClick={() => setSelectedFilters([])}>
									<Trans>Clear all</Trans>
								</Button>
							</div>
						)}

						{/* Results Count */}
						<div className="text-muted-foreground text-sm">
							<Trans>
								Showing {filteredTemplates.length} of {Object.keys(allTemplates).length} templates
							</Trans>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Templates Grid */}
			<div className="container mx-auto px-6 py-8">
				{filteredTemplates.length === 0 ? (
					<div className="py-20 text-center">
						<div className="mb-4 text-muted-foreground">
							<Trans>No templates found matching your criteria.</Trans>
						</div>
						<Button
							variant="outline"
							onClick={() => {
								setSearchQuery("");
								setSelectedFilters([]);
							}}
						>
							<Trans>Clear filters</Trans>
						</Button>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{filteredTemplates.map(([templateId, metadata], index) => (
							<motion.div
								key={templateId}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="relative"
							>
								<TemplateCard
									id={templateId}
									metadata={metadata as any}
									onSelect={(templateId) => {
										// Navigate to builder with selected template using TanStack Router
										// Create a new resume from template
										router.navigate({ 
											to: `/builder/${templateId}`
										});
									}}
								/>
								{(metadata as any)?.isCustom && (
									<Badge className="absolute top-2 right-2 bg-blue-500">
										<Trans>Custom</Trans>
									</Badge>
								)}
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
