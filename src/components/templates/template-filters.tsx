import { Trans } from "@lingui/react/macro";
import { CaretDownIcon, FunnelIcon, XIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/utils/style";

type TemplateFiltersProps = {
	allTags: string[];
	selectedFilters: string[];
	onFiltersChange: (filters: string[]) => void;
	sortBy: "name" | "popularity" | "date";
	onSortChange: (sort: "name" | "popularity" | "date") => void;
};

export function TemplateFilters({
	allTags,
	selectedFilters,
	onFiltersChange,
	sortBy,
	onSortChange,
}: TemplateFiltersProps) {
	const handleFilterToggle = (tag: string) => {
		const newFilters = selectedFilters.includes(tag)
			? selectedFilters.filter((f) => f !== tag)
			: [...selectedFilters, tag];
		onFiltersChange(newFilters);
	};

	const clearAllFilters = () => {
		onFiltersChange([]);
	};

	const hasActiveFilters = selectedFilters.length > 0;

	return (
		<div className="flex items-center gap-2">
			{/* Sort Dropdown */}
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant="outline" className="w-40 justify-start">
						{sortBy === "name" && <Trans>Sort by Name</Trans>}
						{sortBy === "popularity" && <Trans>Most Popular</Trans>}
						{sortBy === "date" && <Trans>Newest First</Trans>}
						<CaretDownIcon size={16} className="ml-auto" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onClick={() => onSortChange("name")}>
						<Trans>Sort by Name</Trans>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => onSortChange("popularity")}>
						<Trans>Most Popular</Trans>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => onSortChange("date")}>
						<Trans>Newest First</Trans>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			{/* Filter Popover */}
			<Popover>
				<PopoverTrigger>
					<Button
						variant="outline"
						className={cn("flex items-center gap-2", hasActiveFilters && "border-primary text-primary")}
					>
						<FunnelIcon size={16} />
						<Trans>Filters</Trans>
						{hasActiveFilters && (
							<Badge variant="secondary" className="ml-1">
								{selectedFilters.length}
							</Badge>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80" align="start">
					<div className="space-y-4">
						{/* Header */}
						<div className="flex items-center justify-between">
							<h3 className="font-semibold">
								<Trans>Filter by Tags</Trans>
							</h3>
							{hasActiveFilters && (
								<Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
									<Trans>Clear all</Trans>
								</Button>
							)}
						</div>

						{/* Tag Categories */}
						<div className="space-y-3">
							{/* Layout Type */}
							<div>
								<h4 className="mb-2 font-medium text-sm">
									<Trans>Layout Type</Trans>
								</h4>
								<div className="flex flex-wrap gap-2">
									{["Two-column", "Single-column", "ATS friendly"].map((tag) => (
										<Badge
											key={tag}
											variant={selectedFilters.includes(tag) ? "default" : "outline"}
											className="cursor-pointer"
											onClick={() => handleFilterToggle(tag)}
										>
											{tag}
										</Badge>
									))}
								</div>
							</div>

							{/* Style */}
							<div>
								<h4 className="mb-2 font-medium text-sm">
									<Trans>Style</Trans>
								</h4>
								<div className="flex flex-wrap gap-2">
									{["Modern", "Professional", "Creative", "Minimal", "Clean"].map((tag) => (
										<Badge
											key={tag}
											variant={selectedFilters.includes(tag) ? "default" : "outline"}
											className="cursor-pointer"
											onClick={() => handleFilterToggle(tag)}
										>
											{tag}
										</Badge>
									))}
								</div>
							</div>

							{/* Industry */}
							<div>
								<h4 className="mb-2 font-medium text-sm">
									<Trans>Industry</Trans>
								</h4>
								<div className="flex flex-wrap gap-2">
									{["Tech", "Developer", "Corporate", "Finance", "Legal", "Healthcare"].map((tag) => (
										<Badge
											key={tag}
											variant={selectedFilters.includes(tag) ? "default" : "outline"}
											className="cursor-pointer"
											onClick={() => handleFilterToggle(tag)}
										>
											{tag}
										</Badge>
									))}
								</div>
							</div>

							{/* Sidebar Position */}
							<div>
								<h4 className="mb-2 font-medium text-sm">
									<Trans>Sidebar Position</Trans>
								</h4>
								<div className="flex flex-wrap gap-2">
									{["Left Sidebar", "Right Sidebar", "Single Column"].map((tag) => (
										<Badge
											key={tag}
											variant={selectedFilters.includes(tag) ? "default" : "outline"}
											className="cursor-pointer"
											onClick={() => handleFilterToggle(tag)}
										>
											{tag}
										</Badge>
									))}
								</div>
							</div>

							{/* Other Tags */}
							{allTags.filter(
								(tag) =>
									![
										"Two-column",
										"Single-column",
										"ATS friendly",
										"Modern",
										"Professional",
										"Creative",
										"Minimal",
										"Clean",
										"Tech",
										"Developer",
										"Corporate",
										"Finance",
										"Legal",
										"Healthcare",
										"Left Sidebar",
										"Right Sidebar",
										"Single Column",
									].includes(tag),
							).length > 0 && (
								<div>
									<h4 className="mb-2 font-medium text-sm">
										<Trans>Other</Trans>
									</h4>
									<div className="flex flex-wrap gap-2">
										{allTags
											.filter(
												(tag) =>
													![
														"Two-column",
														"Single-column",
														"ATS friendly",
														"Modern",
														"Professional",
														"Creative",
														"Minimal",
														"Clean",
														"Tech",
														"Developer",
														"Corporate",
														"Finance",
														"Legal",
														"Healthcare",
														"Left Sidebar",
														"Right Sidebar",
														"Single Column",
													].includes(tag),
											)
											.slice(0, 10)
											.map((tag) => (
												<Badge
													key={tag}
													variant={selectedFilters.includes(tag) ? "default" : "outline"}
													className="cursor-pointer"
													onClick={() => handleFilterToggle(tag)}
												>
													{tag}
												</Badge>
											))}
									</div>
								</div>
							)}
						</div>

						{/* Active Filters */}
						{hasActiveFilters && (
							<div className="border-t pt-3">
								<h4 className="mb-2 font-medium text-sm">
									<Trans>Active Filters</Trans>
								</h4>
								<div className="flex flex-wrap gap-1">
									{selectedFilters.map((filter) => (
										<Badge
											key={filter}
											variant="default"
											className="cursor-pointer"
											onClick={() => handleFilterToggle(filter)}
										>
											{filter}
											<XIcon size={12} className="ml-1" />
										</Badge>
									))}
								</div>
							</div>
						)}
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
