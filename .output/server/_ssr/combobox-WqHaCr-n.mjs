import { s as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { A as ComboboxClear$1, D as ComboboxPositioner, E as ComboboxPopup, M as ComboboxTrigger$1, N as useComboboxFilter, Nt as require_jsx_runtime, O as ComboboxPortal, T as ComboboxItem$1, b as ComboboxRoot$1, j as ComboboxInput, k as ComboboxList$1, v as ComboboxItemIndicator, w as ComboboxEmpty$1, y as ComboboxValue$1 } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { Tn as e, bn as o, n as e$1 } from "../_libs/phosphor-icons__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/combobox-WqHaCr-n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "input-group",
		role: "group",
		className: cn("group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:h-auto has-[>textarea]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:flex-col has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
		...props
	});
}
var inputGroupAddonVariants = cva("flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 font-medium text-muted-foreground text-sm group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:-mr-1 has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
var inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		type,
		"data-size": size,
		variant,
		className: cn(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupText({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none", className),
		...props
	});
}
function InputGroupInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
		"data-slot": "input-group-control",
		className: cn("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent", className),
		...props
	});
}
function useControlledState(props) {
	const { value, defaultValue, onChange } = props;
	const [state, setInternalState] = (0, import_react.useState)(value !== void 0 ? value : defaultValue);
	(0, import_react.useEffect)(() => {
		if (value !== void 0) setInternalState(value);
	}, [value]);
	return [state, (0, import_react.useCallback)((next, ...args) => {
		setInternalState(next);
		onChange?.(next, ...args);
	}, [onChange])];
}
var ComboboxRoot = ComboboxRoot$1;
function ComboboxValue({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxValue$1, {
		"data-slot": "combobox-value",
		...props
	});
}
function ComboboxTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComboboxTrigger$1, {
		"data-slot": "combobox-trigger",
		className: cn("shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "pointer-events-none size-4 text-muted-foreground" })]
	});
}
function ComboboxClear({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxClear$1, {
		"data-slot": "combobox-clear",
		className: cn(className),
		...props,
		render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
			variant: "ghost",
			size: "icon-xs",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$1, { className: "pointer-events-none" })
		})
	});
}
function ComboboxContent({ className, side = "bottom", sideOffset = 6, align = "start", alignOffset = 0, anchor, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxPositioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		anchor,
		className: "isolate z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxPopup, {
			"data-slot": "combobox-content",
			"data-chips": !!anchor,
			className: cn("data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 group/combobox-content relative max-h-(--available-height) w-(--anchor-width) min-w-60 max-w-(--available-width) origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-closed:animate-out data-open:animate-in *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none", className),
			...props
		})
	}) });
}
function ComboboxList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxList$1, {
		"data-slot": "combobox-list",
		className: cn("no-scrollbar max-h-80 scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0", className),
		...props
	});
}
function ComboboxItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComboboxItem$1, {
		"data-slot": "combobox-item",
		className: cn("relative flex w-full cursor-default select-none items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxItemIndicator, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { className: "pointer-events-none" })
		}) })]
	});
}
function ComboboxEmpty({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxEmpty$1, {
		"data-slot": "combobox-empty",
		className: cn("hidden w-full justify-center py-2 text-center text-muted-foreground text-sm group-data-empty/combobox-content:flex", className),
		...props
	});
}
function Combobox$1(props) {
	const { options, multiple = false, disabled = false, showClear = false, placeholder, searchPlaceholder, emptyMessage, className, id, name, render } = props;
	const { contains } = useComboboxFilter();
	const optionMap = import_react.useMemo(() => new Map(options.map((opt) => [String(opt.value), opt])), [options]);
	const findOption = import_react.useCallback((v) => {
		if (multiple) {
			if (!v || !Array.isArray(v)) return [];
			return v.map((item) => optionMap.get(String(item)) ?? null).filter(Boolean);
		} else {
			if (v == null) return null;
			return optionMap.get(String(v)) ?? null;
		}
	}, [optionMap, multiple]);
	const rawValueKey = props.value !== void 0 ? JSON.stringify(props.value) : void 0;
	const resolvedValue = import_react.useMemo(() => props.value !== void 0 ? findOption(props.value) : void 0, [rawValueKey, optionMap]);
	const rawDefaultKey = props.defaultValue !== void 0 ? JSON.stringify(props.defaultValue) : void 0;
	const [selectedValue, setSelectedValue] = useControlledState({
		value: resolvedValue,
		defaultValue: import_react.useMemo(() => props.defaultValue !== void 0 ? findOption(props.defaultValue) : void 0, [rawDefaultKey, optionMap]),
		onChange: import_react.useCallback((option) => {
			if (multiple) {
				const arrOpt = Array.isArray(option) ? option : option ? [option] : [];
				props.onValueChange?.(arrOpt.length > 0 ? arrOpt.map((opt) => opt.value) : []);
			} else {
				const value = option && !Array.isArray(option) ? option.value : null;
				const cb = props.onValueChange;
				cb?.(value ?? null);
			}
		}, [props, multiple])
	});
	const itemToStringLabel = import_react.useCallback((item) => typeof item.label === "string" ? item.label : String(item.value), []);
	const isItemEqualToValue = import_react.useCallback((a, b) => String(a.value) === String(b.value), []);
	const filter = import_react.useCallback((item, query) => {
		if (contains(typeof item.label === "string" ? item.label : String(item.value), query)) return true;
		return item.keywords?.some((kw) => contains(kw, query)) ?? false;
	}, [contains]);
	const listContent = (item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxItem, {
		value: item,
		disabled: item.disabled,
		children: item.label
	}, String(item.value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComboboxRoot, {
		name,
		items: options,
		filter,
		disabled,
		value: selectedValue,
		onValueChange: setSelectedValue,
		itemToStringLabel,
		isItemEqualToValue,
		...multiple ? { multiple: true } : {},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComboboxTrigger, {
			id,
			disabled,
			render: render ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "outline",
				className: cn("justify-start text-left font-normal hover:bg-muted/20", className)
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxValue, { placeholder: placeholder ?? i18n._({ id: "O/7I0o" }) })
			}), showClear && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxClear, { disabled })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComboboxContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxInput, {
				placeholder: searchPlaceholder ?? placeholder ?? i18n._({ id: "YIix5Y" }),
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					disabled,
					className: "rounded-b-none focus-visible:ring-0"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxEmpty, { children: emptyMessage ?? i18n._({ id: "MZbQHL" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComboboxList, { children: listContent })
		] })]
	});
}
//#endregion
export { InputGroupInput as a, InputGroupButton as i, InputGroup as n, InputGroupText as o, InputGroupAddon as r, useControlledState as s, Combobox$1 as t };
