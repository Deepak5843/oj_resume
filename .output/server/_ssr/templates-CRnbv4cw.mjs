import { s as __toESM } from "../_runtime.mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { t as Badge } from "./badge-e8wRL4HB.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans, r as useLingui } from "../_libs/lingui__react.mjs";
import { l as motion } from "../_libs/framer-motion.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { $t as o, Ht as o$2, Nt as o$1, Q as e$2, Tn as e, n as e$1, rn as a } from "../_libs/phosphor-icons__react.mjs";
import { a as DropdownMenuItem, f as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-Bf0lPMdM.mjs";
import { n as PopoverContent, r as PopoverTrigger, t as Popover$1 } from "./popover-T1fEOnDQ.mjs";
import { t as templates } from "./data-CLL9cI8g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/templates-CRnbv4cw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TemplateCard({ id, metadata, onSelect, isFavorite = false, onToggleFavorite }) {
	const { i18n } = useLingui();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "group relative bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300",
		whileHover: { y: -4 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "aspect-[3/4] bg-muted relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: metadata.imageUrl,
						alt: metadata.name,
						className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
						onError: (e) => {
							const target = e.target;
							target.src = "/templates/jpg/placeholder.jpg";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
								size: "sm",
								variant: "secondary",
								onClick: () => onSelect(id),
								className: "bg-white/90 hover:bg-white text-black",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "rdUucN" })]
							}), onToggleFavorite && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								size: "sm",
								variant: "secondary",
								onClick: (e) => {
									e.stopPropagation();
									onToggleFavorite(id);
								},
								className: "bg-white/90 hover:bg-white text-black",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$1, {
									size: 16,
									className: cn(isFavorite && "fill-red-500 text-red-500")
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-2 right-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "bg-black/70 text-white text-xs",
							children: [
								metadata.sidebarPosition === "left" && "Left Sidebar",
								metadata.sidebarPosition === "right" && "Right Sidebar",
								metadata.sidebarPosition === "none" && "Single Column"
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg leading-tight mb-1",
						children: metadata.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm line-clamp-2",
						children: i18n.t(metadata.description)
					})] }),
					metadata.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1",
						children: [metadata.tags.slice(0, 3).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "text-xs",
							children: tag
						}, tag)), metadata.tags.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "text-xs",
							children: ["+", metadata.tags.length - 3]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							onClick: () => onSelect(id),
							className: "flex-1",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NUXH2v" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							variant: "outline",
							size: "sm",
							onClick: () => {
								window.open(`/templates/pdf/${id}.pdf`, "_blank");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a, { size: 16 })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium mb-1",
						children: "Quick Preview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs opacity-90 line-clamp-2",
						children: i18n.t(metadata.description)
					})]
				})
			})
		]
	});
}
function TemplateFilters({ allTags, selectedFilters, onFiltersChange, sortBy, onSortChange }) {
	const handleFilterToggle = (tag) => {
		onFiltersChange(selectedFilters.includes(tag) ? selectedFilters.filter((f) => f !== tag) : [...selectedFilters, tag]);
	};
	const clearAllFilters = () => {
		onFiltersChange([]);
	};
	const hasActiveFilters = selectedFilters.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
			variant: "outline",
			className: "w-40 justify-start",
			children: [
				sortBy === "name" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yrpRsQ" }),
				sortBy === "popularity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "DgTQJK" }),
				sortBy === "date" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "+RfVvh" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {
					size: 16,
					className: "ml-auto"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => onSortChange("name"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yrpRsQ" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => onSortChange("popularity"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "DgTQJK" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => onSortChange("date"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "+RfVvh" })
			})
		] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
			variant: "outline",
			className: cn("flex items-center gap-2", hasActiveFilters && "border-primary text-primary"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$2, { size: 16 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "cSev+j" }),
				hasActiveFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "ml-1",
					children: selectedFilters.length
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			className: "w-80",
			align: "start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ym/yoX" })
						}), hasActiveFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							variant: "ghost",
							size: "sm",
							onClick: clearAllFilters,
							className: "text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yYxB17" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-medium text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "n9HJG2" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"Two-column",
									"Single-column",
									"ATS friendly"
								].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: selectedFilters.includes(tag) ? "default" : "outline",
									className: "cursor-pointer",
									onClick: () => handleFilterToggle(tag),
									children: tag
								}, tag))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-medium text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "1CalO6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"Modern",
									"Professional",
									"Creative",
									"Minimal",
									"Clean"
								].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: selectedFilters.includes(tag) ? "default" : "outline",
									className: "cursor-pointer",
									onClick: () => handleFilterToggle(tag),
									children: tag
								}, tag))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-medium text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "S8gy7K" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"Tech",
									"Developer",
									"Corporate",
									"Finance",
									"Legal",
									"Healthcare"
								].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: selectedFilters.includes(tag) ? "default" : "outline",
									className: "cursor-pointer",
									onClick: () => handleFilterToggle(tag),
									children: tag
								}, tag))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-medium text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ZToafP" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"Left Sidebar",
									"Right Sidebar",
									"Single Column"
								].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: selectedFilters.includes(tag) ? "default" : "outline",
									className: "cursor-pointer",
									onClick: () => handleFilterToggle(tag),
									children: tag
								}, tag))
							})] }),
							allTags.filter((tag) => ![
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
								"Single Column"
							].includes(tag)).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-2 font-medium text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/IX/7x" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: allTags.filter((tag) => ![
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
									"Single Column"
								].includes(tag)).slice(0, 10).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: selectedFilters.includes(tag) ? "default" : "outline",
									className: "cursor-pointer",
									onClick: () => handleFilterToggle(tag),
									children: tag
								}, tag))
							})] })
						]
					}),
					hasActiveFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 font-medium text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "GhOy5V" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: selectedFilters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "default",
								className: "cursor-pointer",
								onClick: () => handleFilterToggle(filter),
								children: [filter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$1, {
									size: 12,
									className: "ml-1"
								})]
							}, filter))
						})]
					})
				]
			})
		})] })]
	});
}
function TemplatesPage() {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedFilters, setSelectedFilters] = (0, import_react.useState)([]);
	const [sortBy, setSortBy] = (0, import_react.useState)("name");
	const allTags = Array.from(new Set(Object.values(templates).flatMap((template) => template.tags))).sort();
	const filteredTemplates = Object.entries(templates).filter(([templateId, metadata]) => {
		const matchesSearch = metadata.name.toLowerCase().includes(searchQuery.toLowerCase()) || metadata.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
		const matchesFilters = selectedFilters.length === 0 || selectedFilters.some((filter) => {
			return metadata.tags.includes(filter);
		});
		return matchesSearch && matchesFilters;
	}).sort(([_, a], [__, b]) => {
		switch (sortBy) {
			case "name": return a.name.localeCompare(b.name);
			case "popularity": return 0;
			case "date": return 0;
			default: return 0;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container mx-auto px-6 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mb-2 font-bold text-4xl tracking-tight",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "i8f34V" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "PCQpF9" })
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/templates/create",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
									size: "lg",
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$2, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "s7XwOU" })]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 md:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$2, {
									className: "absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground",
									size: 20
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									placeholder: "Search templates...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "pl-10"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateFilters, {
								allTags,
								selectedFilters,
								onFiltersChange: setSelectedFilters,
								sortBy,
								onSortChange: setSortBy
							})]
						}),
						selectedFilters.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "sTb3Ij" })
								}),
								selectedFilters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "secondary",
									className: "cursor-pointer",
									onClick: () => setSelectedFilters((prev) => prev.filter((f) => f !== filter)),
									children: [filter, " ×"]
								}, filter)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									variant: "ghost",
									size: "sm",
									onClick: () => setSelectedFilters([]),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yYxB17" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, {
								id: "kwTM1A",
								values: {
									0: filteredTemplates.length,
									1: Object.keys(templates).length
								}
							})
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 py-8",
			children: filteredTemplates.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "240fDr" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "outline",
					onClick: () => {
						setSearchQuery("");
						setSelectedFilters([]);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "u8JHrO" })
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: filteredTemplates.map(([templateId, metadata], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: index * .1
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateCard, {
						id: templateId,
						metadata,
						onSelect: (templateId) => {
							window.location.href = `/builder?template=${templateId}`;
						}
					})
				}, templateId))
			})
		})]
	});
}
//#endregion
export { TemplatesPage as component };
