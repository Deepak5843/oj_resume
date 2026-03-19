import { Nt as require_jsx_runtime } from "./_libs/@base-ui/react+[...].mjs";
import { t as Button$1 } from "./_ssr/button-C8loFr-r.mjs";
import { t as Badge } from "./_ssr/badge-e8wRL4HB.mjs";
import { u as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "./_libs/lingui__react.mjs";
import { l as motion } from "./_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_home-BjjPo2bO.js
var import_jsx_runtime = require_jsx_runtime();
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-border border-t bg-background px-6 py-12 md:px-20 lg:px-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-between gap-12 md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-w-[300px] flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined",
						children: "description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-foreground text-xl",
						children: "1Digit"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm leading-relaxed",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "nSdzlg" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-12 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-foreground text-sm uppercase tracking-widest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "K47k8R" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#editor",
							className: "text-muted-foreground text-sm transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "uBAxNB" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#templates",
							className: "text-muted-foreground text-sm transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "iTylMl" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#examples",
							className: "text-muted-foreground text-sm transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hFthoo" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-foreground text-sm uppercase tracking-widest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vifyyw" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#privacy",
							className: "text-muted-foreground text-sm transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "rjGI/Q" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#terms",
							className: "text-muted-foreground text-sm transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "4Y5H+g" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#license",
							className: "text-muted-foreground text-sm transition-colors hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "iQmbPb" })
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 flex flex-col items-center justify-between gap-4 border-border border-t pt-8 md:flex-row",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground/60 text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "HMHsVE" })
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative px-6 py-16 md:px-20 md:py-24 lg:px-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-10 lg:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 lg:w-1/2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "w-fit rounded-full bg-primary/10 px-3 py-1 font-bold text-primary text-xs uppercase tracking-wider",
							children: "OPEN SOURCE & PRIVATE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
								delay: .2
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-black text-4xl text-foreground leading-[1.1] tracking-tight md:text-6xl",
								children: ["Build your resume with complete ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "privacy."
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "max-w-[540px] font-normal text-lg text-muted-foreground md:text-xl",
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
								delay: .4
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "8zLP3m" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex flex-wrap gap-4",
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
						delay: .6
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						size: "lg",
						nativeButton: false,
						className: "h-14 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-8 font-bold text-base text-white transition-transform hover:scale-105",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "c3b0B0" })
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "w-full lg:w-1/2",
				initial: {
					opacity: 0,
					x: 50
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .8,
					delay: .4
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						alt: "Resume Editor Preview",
						className: "h-auto w-full rounded-xl",
						src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhWvMkkUVam64SrPKfaWhvLSKylDySgP8AHQVXNZVHmNaF9j9ZYBm5c8yQjAdTvk6afGlm1M6cIACz-Ycy3gHoCBy51EekyHiIzA_U24vtV69o8rYkwfg230BeyreRqfw-nv5EXNPf0_Qoe1gx6YYQoWBgNwvot6mVqvwRDckdQ0LXxKQCnU_y1jG58ARPrx7PDq-2aqkFBYiwq6DYoiKSkueO9MIvK2Fky5R6QayRj4QTBBvrEgDDi1UZbtH0IoCyMs5nowvwPSs"
					})
				})
			})]
		})
	});
}
function Templates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "templates",
		className: "px-6 py-20 md:px-20 lg:px-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "flex items-end justify-between",
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				viewport: { once: true },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bold text-3xl text-foreground tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "bqh9BR" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "F0EYu9" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/templates",
					className: "flex items-center gap-1 font-bold text-primary hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "p5nYkr" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined text-sm",
						children: "chevron_right"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						title: "The Minimalist",
						description: "Clean, white-space focused, and highly efficient.",
						image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFOwCiNiS1xQjpPyAvH-brgGsdqg9AHrXkP8o6HfwPbYKGGK3DAU8oHr4OXLRVeJpZNljtpKkYdeQFKyIjfCtP-K0zXkAyCpkeBLE0gYgQ0BkRkemb0JmCuijfIbpGbkZo9vnnFW4CKhWuye_zAbyuKSIjiX3n1hAWHkzQJAcnRwbkVZwrxKg5XpvaU1PZy96V9yY_WZ7lI_WFWJHg4RyFXar4pmZNlVGqhwunP_exHmRJ9sr8AJISlHHKeMkGQJICkyulFp-7Qz0"
					},
					{
						title: "The Executive",
						description: "Bold, structured, and authoritative design.",
						image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqwKMpC7xP2P_NkQmlYjhY8JGKwRUceiHyJWYtkSwlAs5aXmG4_dnDWv59aH7bdfgBe7gF3cp6tlNH-iOEmfzYtY3MLRaemROwLPUGQoskstW2YrN1QVAXOxu9s_4m9roXaIH_GlQ5zYfnFdPasNMx3eVQVw8JNM1iG_ccAovakbdrpQouYmBAZTI5N3E3432vGLvosp6ynoaCMN53z2OUrEwlhf8N-NDrto68PFZHJb3QWIG-sQIuJWo8ZtbrUXmzFIDX9b6rgE"
					},
					{
						title: "The Developer",
						description: "Optimized for skills, projects, and tech stack.",
						image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI0BYdjpwLw6Ec0pTMgc29Zoc6Nm1jcu4WE43oDh_CmJ0cE1tcFk_OiVCL3PqCpPoXhqhBUPmh5Zq_xoKGv2sFJ5FPSA6p_ze83qY-GdFP6xCiyQ88JEx8G8A2giLFtYX1jfZjnLLTGgBF6aPGEWthBfI9mx7T0X7GFtyK6duoIxKP-0hG18UFIViWIAYrAcwtqt3oeUzdRlaIVc-kxIkc5-JlWGOeIW1CcqDKWx30oTN8-V8hH2o2EPCOXN0IflOxJxknJ3n7oWc"
					}
				].map((template, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "group flex flex-col gap-4",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: index * .1
					},
					viewport: { once: true },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-3/4 overflow-hidden rounded-2xl bg-muted shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							alt: template.title,
							className: "h-full w-full object-cover transition-transform group-hover:scale-105",
							src: template.image
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/10" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-foreground text-lg",
							children: template.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: template.description
						})]
					})]
				}, template.title))
			})]
		})
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main-content",
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Templates, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { RouteComponent as component };
