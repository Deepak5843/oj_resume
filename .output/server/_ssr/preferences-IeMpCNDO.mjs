import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { m as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans, r as useLingui } from "../_libs/lingui__react.mjs";
import { l as motion } from "../_libs/framer-motion.mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import { Bt as o, Ln as r } from "../_libs/phosphor-icons__react.mjs";
import { t as Combobox$1 } from "./combobox-WqHaCr-n.mjs";
import { t as Label } from "./label-B2IowpIJ.mjs";
import { t as Separator$1 } from "./separator-CXxNwIYE.mjs";
import { t as DashboardHeader } from "./header-BKg2LDs7.mjs";
import { a as themeMap, i as setThemeServerFn, o as useTheme, r as isTheme } from "./provider-CcH3jlbD.mjs";
import { t as LocaleCombobox } from "./combobox-DHEOWxpN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/preferences-IeMpCNDO.js
var import_jsx_runtime = require_jsx_runtime();
function ThemeCombobox(props) {
	const router = useRouter();
	const { i18n } = useLingui();
	const { theme, setTheme } = useTheme();
	const options = Object.entries(themeMap).map(([value, label]) => ({
		value,
		label: i18n.t(label),
		keywords: [i18n.t(label)]
	}));
	const onThemeChange = async (value) => {
		if (!value || !isTheme(value)) return;
		await setThemeServerFn({ data: value });
		setTheme(value);
		router.invalidate();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combobox$1, {
		...props,
		showClear: false,
		options,
		defaultValue: theme,
		onValueChange: onThemeChange
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeader, {
				icon: o,
				title: i18n._({ id: "Q6hhn8" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .3 },
				className: "grid max-w-xl gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-0.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "FEr96N" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCombobox, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vXIe7J" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleCombobox, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							size: "sm",
							variant: "link",
							nativeButton: false,
							className: "h-5 justify-start text-muted-foreground text-xs active:scale-100",
							render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://crowdin.com/project/reactive-resume",
								target: "_blank",
								rel: "noopener",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "cLYXFH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { className: "size-3" })]
							})
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { RouteComponent as component };
