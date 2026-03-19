import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime, _t as MenuCheckboxItemIndicator, at as Separator, ct as MenuRoot, dt as MenuRadioGroup, ft as MenuPositioner, gt as MenuGroup, ht as MenuItem, it as MenuSubmenuTrigger, lt as MenuRadioItemIndicator, mt as MenuPopup, ot as MenuTrigger, pt as MenuPortal, st as MenuSubmenuRoot, ut as MenuRadioItem, vt as MenuCheckboxItem } from "../_libs/@base-ui/react+[...].mjs";
import { bn as o, wn as e } from "../_libs/phosphor-icons__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dropdown-menu-Bf0lPMdM.js
var import_jsx_runtime = require_jsx_runtime();
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRoot, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTrigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPositioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPopup, {
			"data-slot": "dropdown-menu-content",
			className: cn("data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:fade-in-0 data-open:zoom-in-95 data-closed:fade-out-0 data-closed:zoom-out-95 z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-md bg-popover p-1 text-popover-foreground shadow-md outline-none ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in data-closed:overflow-hidden", className),
			...props
		})
	}) });
}
function DropdownMenuGroup({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuGroup, {
		"data-slot": "dropdown-menu-group",
		...props
	});
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-inset:pl-8 data-[variant=destructive]:text-destructive data-disabled:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
function DropdownMenuSub({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSubmenuRoot, {
		"data-slot": "dropdown-menu-sub",
		...props
	});
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuSubmenuTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": inset,
		className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-open:bg-accent data-popup-open:bg-accent data-inset:pl-8 data-open:text-accent-foreground data-popup-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "ml-auto" })]
	});
}
function DropdownMenuSubContent({ align = "start", alignOffset = -3, side = "right", sideOffset = 0, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: cn("data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:fade-in-0 data-open:zoom-in-95 data-closed:fade-out-0 data-closed:zoom-out-95 w-auto min-w-[96px] rounded-md bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in", className),
		align,
		alignOffset,
		side,
		sideOffset,
		...props
	});
}
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuCheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": inset,
		className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-disabled:pointer-events-none data-inset:pl-8 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
		checked,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCheckboxItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, {}) })
		}), children]
	});
}
function DropdownMenuRadioGroup({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...props
	});
}
function DropdownMenuRadioItem({ className, children, inset, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MenuRadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		"data-inset": inset,
		className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-disabled:pointer-events-none data-inset:pl-8 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-radio-item-indicator",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRadioItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, {}) })
		}), children]
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
//#endregion
export { DropdownMenuItem as a, DropdownMenuSeparator as c, DropdownMenuSubTrigger as d, DropdownMenuTrigger as f, DropdownMenuGroup as i, DropdownMenuSub as l, DropdownMenuCheckboxItem as n, DropdownMenuRadioGroup as o, DropdownMenuContent as r, DropdownMenuRadioItem as s, DropdownMenu as t, DropdownMenuSubContent as u };
