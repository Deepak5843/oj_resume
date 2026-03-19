import { s as __toESM } from "../_runtime.mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { l as motion } from "../_libs/framer-motion.mjs";
import { Q as e, Rn as r, z as o } from "../_libs/phosphor-icons__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-qSiCHgjv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	ref,
	className: cn("text-2xl font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
function CreateTemplatePage() {
	const creationMethods = [{
		id: "from-scratch",
		title: "Start from Scratch",
		description: "Create a completely custom template with our visual editor",
		icon: e,
		href: "/templates/create/builder",
		color: "bg-blue-500"
	}, {
		id: "from-existing",
		title: "Based on Existing Template",
		description: "Use an existing template as a starting point and customize it",
		icon: o,
		href: "/templates/create/from-existing",
		color: "bg-purple-500"
	}];
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
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/templates",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
							variant: "ghost",
							size: "sm",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "P3spiP" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-bold text-3xl tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "rjAxgX" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "cna22G" })
					})] })]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: creationMethods.map((method, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: method.href,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "group h-full cursor-pointer transition-all duration-300 hover:shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `rounded-lg p-2 ${method.color} text-white`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(method.icon, { size: 24 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-xl",
										children: method.title
									}) })]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									className: "text-base",
									children: method.description
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center text-primary group-hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "c3b0B0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "material-symbols-outlined ml-1 text-sm",
										children: "arrow_forward"
									})]
								})] })]
							})
						})
					}, method.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
						delay: .3
					},
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-muted/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "VZeG/A" })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-2 text-2xl",
											children: "🤖"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-1 font-semibold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hKJFIj" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "tCsGiJ" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-2 text-2xl",
											children: "📥"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-1 font-semibold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "4WLV0r" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "1waxr3" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-2 text-2xl",
											children: "🌐"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mb-1 font-semibold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "XhmtrB" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "wR/NEu" })
										})
									]
								})
							]
						}) })]
					})
				})]
			})
		})]
	});
}
//#endregion
export { CreateTemplatePage as component };
