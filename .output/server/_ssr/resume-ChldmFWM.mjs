import { s as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Ct as DialogClose, Nt as require_jsx_runtime, St as DialogDescription$1, bt as DialogPortal$1, nt as Toggle, rt as DialogRoot, wt as DialogBackdrop, xt as DialogPopup, yt as DialogTitle$1 } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { n as Trans, r as useLingui } from "../_libs/lingui__react.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import { r as isRTL } from "./locale-Bc_Sesmg.mjs";
import { t as M } from "../_libs/ts-pattern.mjs";
import { n as debounce } from "../_libs/es-toolkit.mjs";
import { _ as sanitizeHtml, d as orpc } from "./client-BWxMxJtI.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog$1 } from "./alert-dialog-D7HiPloB.mjs";
import { A as t$1, C as o$2, D as e$5, Dt as o$11, E as o, K as s$1, Mt as r$2, N as o$9, Nn as r$1, O as t, Pn as r, Q as e$11, S as o$5, T as o$4, Tt as e$9, _ as e$8, b as e$3, bt as o$6, fn as s, g as e$2, gn as e$10, hn as o$8, k as e$6, l as o$10, lt as e$13, m as o$1, n as e, pn as e$12, q as t$3, rt as r$3, v as e$1, w as e$4, wt as o$7, x as o$3, xt as e$7, y as t$2 } from "../_libs/phosphor-icons__react.mjs";
import { a as DropdownMenuItem, c as DropdownMenuSeparator, f as DropdownMenuTrigger, n as DropdownMenuCheckboxItem, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-Bf0lPMdM.mjs";
import { t as temporal } from "../_libs/zundo+zustand.mjs";
import { a as create, i as immer, r as useStoreWithEqualityFn } from "../_libs/zustand.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as current } from "../_libs/immer.mjs";
import { t as index_default } from "../_libs/tiptap__extension-highlight.mjs";
import { t as TableKit } from "../_libs/@tiptap/extension-table+[...].mjs";
import { t as index_default$1 } from "../_libs/tiptap__extension-text-align.mjs";
import { i as useEditorState, n as EditorContext, r as useEditor, t as EditorContent } from "../_libs/fast-equals+tiptap__react.mjs";
import { t as index_default$2 } from "../_libs/tiptap__starter-kit.mjs";
import { i as require_fast_deep_equal } from "../_libs/@modelcontextprotocol/sdk+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-ChldmFWM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_fast_deep_equal = /* @__PURE__ */ __toESM(require_fast_deep_equal());
function Dialog$1({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogRoot, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogBackdrop, {
		"data-slot": "dialog-overlay",
		className: cn("data-open:fade-in-0 data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/10 duration-100 data-closed:animate-out data-open:animate-in supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function DialogContent({ className, children, showClose = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPopup, {
		"data-slot": "dialog-content",
		className: cn("data-open:fade-in-0 data-open:zoom-in-95 data-closed:fade-out-0 data-closed:zoom-out-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-background p-6 text-sm outline-none ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in sm:max-w-2xl", className),
		...props,
		children: [children, showClose && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "ghost",
				className: "absolute top-4 right-4",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yz7wBu" })
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
function DialogFooter({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-footer",
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props,
		children
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn("font-medium leading-none", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn("text-muted-foreground text-sm *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
var PromptContext = import_react.createContext(null);
function PromptDialogProvider({ children }) {
	const inputRef = import_react.useRef(null);
	const [state, setState] = import_react.useState({
		open: false,
		resolve: null,
		title: "",
		value: "",
		description: void 0,
		defaultValue: void 0,
		confirmText: void 0,
		cancelText: void 0,
		inputProps: void 0
	});
	const cancelText = state.cancelText ?? i18n._({ id: "dEgA5A" });
	const confirmText = state.confirmText ?? i18n._({ id: "7VpPHA" });
	import_react.useEffect(() => {
		if (!state.open) return;
		setTimeout(() => {
			if (!inputRef.current) return;
			inputRef.current.focus();
		}, 0);
	}, [state.open]);
	const prompt = import_react.useCallback(async (title, options) => {
		return new Promise((resolve) => {
			setState({
				open: true,
				resolve,
				title,
				value: options?.defaultValue ?? "",
				description: options?.description,
				defaultValue: options?.defaultValue,
				confirmText: options?.confirmText,
				cancelText: options?.cancelText,
				inputProps: options?.inputProps
			});
		});
	}, []);
	const handleConfirm = import_react.useCallback(() => {
		if (state.resolve) state.resolve(state.value);
		setState((prev) => ({
			...prev,
			open: false,
			resolve: null
		}));
	}, [state.resolve, state.value]);
	const handleCancel = import_react.useCallback(() => {
		if (state.resolve) state.resolve(null);
		setState((prev) => ({
			...prev,
			open: false,
			resolve: null
		}));
	}, [state.resolve]);
	const handleValueChange = import_react.useCallback((e) => {
		setState((prev) => ({
			...prev,
			value: e.target.value
		}));
	}, []);
	const handleKeyDown = import_react.useCallback((e) => {
		if (e.key === "Enter") handleConfirm();
	}, [handleConfirm]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptContext.Provider, {
		value: { prompt },
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog$1, {
			open: state.open,
			onOpenChange: (open) => !open && handleCancel(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: state.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
					className: cn(!state.description && "sr-only"),
					children: state.description
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					ref: inputRef,
					value: state.value,
					onKeyDown: handleKeyDown,
					onChange: handleValueChange,
					...state.inputProps
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
					onClick: handleCancel,
					children: cancelText
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
					onClick: handleConfirm,
					children: confirmText
				})] })
			] })
		})]
	});
}
function usePrompt() {
	const context = import_react.useContext(PromptContext);
	if (!context) throw new Error("usePrompt must be used within a <PromptDialogProvider />.");
	return context.prompt;
}
var toggleVariants = cva("group/toggle inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-[color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-muted aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-xs hover:bg-muted"
		},
		size: {
			default: "h-9 min-w-9 px-2",
			sm: "h-8 min-w-8 px-1.5",
			lg: "h-10 min-w-10 px-2.5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Toggle$1({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
		"data-slot": "toggle",
		className: cn(toggleVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var rich_input_module_default = {
	tiptap_content: "_tiptap_content_x7fby_1",
	editor_content: "_editor_content_x7fby_239"
};
var extensions = [
	index_default$2.configure({
		heading: { levels: [
			1,
			2,
			3,
			4,
			5,
			6
		] },
		codeBlock: { enableTabIndentation: true },
		link: {
			openOnClick: false,
			enableClickSelection: true,
			defaultProtocol: "https",
			protocols: ["http", "https"]
		}
	}),
	index_default.configure({ HTMLAttributes: { class: "rounded-md px-0.5 py-px" } }),
	index_default$1.configure({ types: [
		"heading",
		"paragraph",
		"listItem"
	] }),
	TableKit.configure()
];
function RichInput({ value, onChange, style, className, editorClassName, ...options }) {
	const { i18n: i18n$1 } = useLingui();
	const textDirection = isRTL(i18n$1.locale) ? "rtl" : void 0;
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	const editor = useEditor({
		...options,
		extensions,
		textDirection,
		content: value,
		immediatelyRender: false,
		shouldRerenderOnTransaction: false,
		editorProps: { attributes: {
			spellcheck: "false",
			"data-editor": "true",
			"data-fullscreen": isFullscreen ? "true" : "false",
			class: cn("group/editor overflow-y-auto p-3 pb-4", "rounded-md rounded-t-none border outline-none focus-visible:border-ring", "[td:has(.selectedCell)]:bg-primary", "data-[fullscreen=false]:max-h-[400px] data-[fullscreen=false]:min-h-[100px]", "data-[fullscreen=true]:max-h-none data-[fullscreen=true]:min-h-full", rich_input_module_default.tiptap_content, rich_input_module_default.editor_content, editorClassName)
		} },
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
		}
	});
	const providerValue = (0, import_react.useMemo)(() => ({ editor }), [editor]);
	if (!editor) return null;
	const editorElement = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorToolbar, {
				editor,
				isFullscreen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContent, { editor }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: "icon",
				variant: "secondary",
				className: "absolute right-2 bottom-2 size-7",
				title: isFullscreen ? i18n._({ id: "M+rHQO" }) : i18n._({ id: "3qkggm" }),
				onClick: () => setIsFullscreen(!isFullscreen),
				children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$1, { className: "size-4" })
			})
		]
	});
	if (isFullscreen) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EditorContext, {
		value: providerValue,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("rounded-md", className),
			style,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[200px] rounded-md border border-dashed" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
			open: isFullscreen,
			onOpenChange: setIsFullscreen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "flex h-[95svh] max-h-none! w-[95svw] max-w-none! flex-col p-4 sm:max-w-none! 2xl:max-w-none!",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sr-only",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Fullscreen Editor" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Edit content in fullscreen mode" })]
				}), editorElement]
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContext, {
		value: providerValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("rounded-md", className),
			style,
			children: editorElement
		})
	});
}
function EditorToolbar({ editor, isFullscreen }) {
	const prompt = usePrompt();
	const state = useEditorState({
		editor,
		selector: (ctx) => {
			return {
				isBold: ctx.editor.isActive("bold") ?? false,
				canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
				toggleBold: () => ctx.editor.chain().focus().toggleBold().run(),
				isItalic: ctx.editor.isActive("italic") ?? false,
				canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
				toggleItalic: () => ctx.editor.chain().focus().toggleItalic().run(),
				isUnderline: ctx.editor.isActive("underline") ?? false,
				canUnderline: ctx.editor.can().chain().toggleUnderline().run() ?? false,
				toggleUnderline: () => ctx.editor.chain().focus().toggleUnderline().run(),
				isStrike: ctx.editor.isActive("strike") ?? false,
				canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
				toggleStrike: () => ctx.editor.chain().focus().toggleStrike().run(),
				isHighlight: ctx.editor.isActive("highlight") ?? false,
				canHighlight: ctx.editor.can().chain().toggleHighlight().run() ?? false,
				toggleHighlight: () => ctx.editor.chain().focus().toggleHighlight().run(),
				isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
				canHeading1: ctx.editor.can().chain().toggleHeading({ level: 1 }).run() ?? false,
				toggleHeading1: () => ctx.editor.chain().focus().toggleHeading({ level: 1 }).run(),
				isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
				canHeading2: ctx.editor.can().chain().toggleHeading({ level: 2 }).run() ?? false,
				toggleHeading2: () => ctx.editor.chain().focus().toggleHeading({ level: 2 }).run(),
				isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
				canHeading3: ctx.editor.can().chain().toggleHeading({ level: 3 }).run() ?? false,
				toggleHeading3: () => ctx.editor.chain().focus().toggleHeading({ level: 3 }).run(),
				isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
				canHeading4: ctx.editor.can().chain().toggleHeading({ level: 4 }).run() ?? false,
				toggleHeading4: () => ctx.editor.chain().focus().toggleHeading({ level: 4 }).run(),
				isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
				canHeading5: ctx.editor.can().chain().toggleHeading({ level: 5 }).run() ?? false,
				toggleHeading5: () => ctx.editor.chain().focus().toggleHeading({ level: 5 }).run(),
				isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
				canHeading6: ctx.editor.can().chain().toggleHeading({ level: 6 }).run() ?? false,
				toggleHeading6: () => ctx.editor.chain().focus().toggleHeading({ level: 6 }).run(),
				isParagraph: ctx.editor.isActive("paragraph") ?? false,
				canParagraph: ctx.editor.can().chain().setParagraph().run() ?? false,
				setParagraph: () => ctx.editor.chain().focus().setParagraph().run(),
				isLeftAlign: ctx.editor.isActive({ textAlign: "left" }) ?? false,
				canLeftAlign: ctx.editor.can().chain().toggleTextAlign("left").run() ?? false,
				toggleLeftAlign: () => ctx.editor.chain().focus().toggleTextAlign("left").run(),
				isCenterAlign: ctx.editor.isActive({ textAlign: "center" }) ?? false,
				canCenterAlign: ctx.editor.can().chain().toggleTextAlign("center").run() ?? false,
				toggleCenterAlign: () => ctx.editor.chain().focus().toggleTextAlign("center").run(),
				isRightAlign: ctx.editor.isActive({ textAlign: "right" }) ?? false,
				canRightAlign: ctx.editor.can().chain().toggleTextAlign("right").run() ?? false,
				toggleRightAlign: () => ctx.editor.chain().focus().toggleTextAlign("right").run(),
				isJustifyAlign: ctx.editor.isActive({ textAlign: "justify" }) ?? false,
				canJustifyAlign: ctx.editor.can().chain().toggleTextAlign("justify").run() ?? false,
				toggleJustifyAlign: () => ctx.editor.chain().focus().toggleTextAlign("justify").run(),
				isBulletList: ctx.editor.isActive("bulletList") ?? false,
				canBulletList: ctx.editor.can().chain().toggleBulletList().run() ?? false,
				toggleBulletList: () => ctx.editor.chain().focus().toggleBulletList().run(),
				isOrderedList: ctx.editor.isActive("orderedList") ?? false,
				canOrderedList: ctx.editor.can().chain().toggleOrderedList().run() ?? false,
				toggleOrderedList: () => ctx.editor.chain().focus().toggleOrderedList().run(),
				canLiftListItem: ctx.editor.can().chain().liftListItem("listItem").run() ?? false,
				liftListItem: () => ctx.editor.chain().focus().liftListItem("listItem").run(),
				canSinkListItem: ctx.editor.can().chain().sinkListItem("listItem").run() ?? false,
				sinkListItem: () => ctx.editor.chain().focus().sinkListItem("listItem").run(),
				isLink: ctx.editor.isActive("link") ?? false,
				setLink: async () => {
					const url = await prompt(i18n._({ id: "tvk4tC" }), { defaultValue: "https://" });
					if (!url || url.trim() === "") {
						ctx.editor.chain().focus().unsetLink().run();
						return;
					}
					if (!zod_default.url({ protocol: /^https?$/ }).safeParse(url).success) {
						toast.error(i18n._({ id: "qsxoyW" }), { description: i18n._({ id: "cDPBeJ" }) });
						return;
					}
					ctx.editor.chain().focus().setLink({
						href: url,
						target: "_blank",
						rel: "noopener nofollow"
					}).run();
				},
				unsetLink: () => ctx.editor.chain().focus().unsetLink().run(),
				isInlineCode: ctx.editor.isActive("code") ?? false,
				canInlineCode: ctx.editor.can().chain().toggleCode().run() ?? false,
				toggleInlineCode: () => ctx.editor.chain().focus().toggleCode().run(),
				isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
				canCodeBlock: ctx.editor.can().chain().toggleCodeBlock().run() ?? false,
				toggleCodeBlock: () => ctx.editor.chain().focus().toggleCodeBlock().run(),
				insertTable: () => ctx.editor.chain().focus().insertTable({
					rows: 3,
					cols: 3,
					withHeaderRow: true
				}).run(),
				canInsertTable: ctx.editor.can().chain().insertTable().run() ?? false,
				addColumnBefore: () => ctx.editor.chain().focus().addColumnBefore().run(),
				canAddColumnBefore: ctx.editor.can().chain().addColumnBefore().run() ?? false,
				addColumnAfter: () => ctx.editor.chain().focus().addColumnAfter().run(),
				canAddColumnAfter: ctx.editor.can().chain().addColumnAfter().run() ?? false,
				addRowBefore: () => ctx.editor.chain().focus().addRowBefore().run(),
				canAddRowBefore: ctx.editor.can().chain().addRowBefore().run() ?? false,
				addRowAfter: () => ctx.editor.chain().focus().addRowAfter().run(),
				canAddRowAfter: ctx.editor.can().chain().addRowAfter().run() ?? false,
				deleteColumn: () => ctx.editor.chain().focus().deleteColumn().run(),
				canDeleteColumn: ctx.editor.can().chain().deleteColumn().run() ?? false,
				deleteRow: () => ctx.editor.chain().focus().deleteRow().run(),
				canDeleteRow: ctx.editor.can().chain().deleteRow().run() ?? false,
				deleteTable: () => ctx.editor.chain().focus().deleteTable().run(),
				canDeleteTable: ctx.editor.can().chain().deleteTable().run() ?? false,
				setHardBreak: () => ctx.editor.chain().focus().setHardBreak().run(),
				setHorizontalRule: () => ctx.editor.chain().focus().setHorizontalRule().run()
			};
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-y-0.5 rounded-md rounded-b-none border border-b-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "KmydK6" }),
				pressed: state.isBold,
				disabled: !state.canBold,
				onPressedChange: state.toggleBold,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "pzutoc" }),
				pressed: state.isItalic,
				disabled: !state.canItalic,
				onPressedChange: state.toggleItalic,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$1, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "YyXtnN" }),
				pressed: state.isUnderline,
				disabled: !state.canUnderline,
				onPressedChange: state.toggleUnderline,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$1, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "/HJXi4" }),
				pressed: state.isStrike,
				disabled: !state.canStrike,
				onPressedChange: state.toggleStrike,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$2, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "gtEbeW" }),
				pressed: state.isHighlight,
				disabled: !state.canHighlight,
				onPressedChange: state.toggleHighlight,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$2, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-5 w-px bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				children: M(state).with({ isParagraph: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$3, { className: "size-3.5" })).with({ isHeading1: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$2, { className: "size-3.5" })).with({ isHeading2: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$3, { className: "size-3.5" })).with({ isHeading3: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$3, { className: "size-3.5" })).with({ isHeading4: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$4, { className: "size-3.5" })).with({ isHeading5: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$4, { className: "size-3.5" })).with({ isHeading6: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$5, { className: "size-3.5" })).otherwise(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$3, { className: "size-3.5" }))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canParagraph,
					checked: state.isParagraph,
					onCheckedChange: state.setParagraph,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "bkQRMh" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canHeading1,
					checked: state.isHeading1,
					onCheckedChange: state.toggleHeading1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "lXKZGw" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canHeading2,
					checked: state.isHeading2,
					onCheckedChange: state.toggleHeading2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "El7NbA" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canHeading3,
					checked: state.isHeading3,
					onCheckedChange: state.toggleHeading3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "SFN6dN" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canHeading4,
					checked: state.isHeading4,
					onCheckedChange: state.toggleHeading4,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "nJeKmw" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canHeading5,
					checked: state.isHeading5,
					onCheckedChange: state.toggleHeading5,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/zXDjr" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canHeading6,
					checked: state.isHeading6,
					onCheckedChange: state.toggleHeading6,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "YpCHKo" })
				})
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				children: M(state).with({ isLeftAlign: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { className: "size-3.5" })).with({ isCenterAlign: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t$1, { className: "size-3.5" })).with({ isRightAlign: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, { className: "size-3.5" })).with({ isJustifyAlign: true }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$6, { className: "size-3.5" })).otherwise(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, { className: "size-3.5" }))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canLeftAlign,
					checked: state.isLeftAlign,
					onCheckedChange: state.toggleLeftAlign,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NQxKCQ" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canCenterAlign,
					checked: state.isCenterAlign,
					onCheckedChange: state.toggleCenterAlign,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "QQWIWG" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canRightAlign,
					checked: state.isRightAlign,
					onCheckedChange: state.toggleRightAlign,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "xV4gjr" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
					disabled: !state.canJustifyAlign,
					checked: state.isJustifyAlign,
					onCheckedChange: state.toggleJustifyAlign,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "QscRsp" })
				})
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-5 w-px bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "s1c0ja" }),
				pressed: state.isBulletList,
				disabled: !state.canBulletList,
				onPressedChange: state.toggleBulletList,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$7, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "Uci+Ph" }),
				pressed: state.isOrderedList,
				disabled: !state.canOrderedList,
				onPressedChange: state.toggleOrderedList,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$6, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				disabled: !state.canLiftListItem,
				onClick: state.liftListItem,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$8, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				disabled: !state.canSinkListItem,
				onClick: state.sinkListItem,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t$2, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-5 w-px bg-border" }),
			state.isLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				onClick: state.unsetLink,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$7, { className: "size-3.5" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				onClick: state.setLink,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$9, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "5Q/DQ6" }),
				pressed: state.isInlineCode,
				disabled: !state.canInlineCode,
				onPressedChange: state.toggleInlineCode,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$8, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				className: "rounded-none",
				title: i18n._({ id: "N2eHWq" }),
				pressed: state.isCodeBlock,
				disabled: !state.canCodeBlock,
				onPressedChange: state.toggleCodeBlock,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$10, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				title: i18n._({ id: "4hJhzz" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$9, { className: "size-3.5" })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canInsertTable,
					onClick: state.insertTable,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$11, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "qH7MLH" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canAddColumnBefore,
					onClick: state.addColumnBefore,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$12, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "F5uDfu" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canAddColumnAfter,
					onClick: state.addColumnAfter,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "F3rB0I" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canAddRowBefore,
					onClick: state.addRowBefore,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "AONP5V" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canAddRowAfter,
					onClick: state.addRowAfter,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t$3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hEyqeR" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canDeleteColumn,
					onClick: state.deleteColumn,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$10, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "EhADgB" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					disabled: !state.canDeleteRow,
					onClick: state.deleteRow,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$10, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "f2AJjl" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					variant: "destructive",
					disabled: !state.canDeleteTable,
					onClick: state.deleteTable,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$10, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "WG8Qgt" })]
				})
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				title: i18n._({ id: "jGblxu" }),
				onClick: state.setHardBreak,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$11, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				size: isFullscreen ? "lg" : "sm",
				tabIndex: -1,
				variant: "ghost",
				className: "rounded-none",
				title: i18n._({ id: "yLq4w4" }),
				onClick: state.setHorizontalRule,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$13, { className: "size-3.5" })
			})
		]
	});
}
function TiptapContent({ content, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dangerouslySetInnerHTML: { __html: (0, import_react.useMemo)(() => sanitizeHtml(content), [content]) },
		className: cn(rich_input_module_default.tiptap_content, className),
		...props
	});
}
var signal = new AbortController().signal;
var _syncResume = (resume) => {
	orpc.resume.update.call({
		id: resume.id,
		data: resume.data
	}, { signal });
};
var syncResume = debounce(_syncResume, 500, { signal });
var errorToastId;
var useResumeStore = create()(temporal(immer((set) => ({
	resume: null,
	isReady: false,
	initialize: (resume) => {
		set((state) => {
			state.resume = resume;
			state.isReady = resume !== null;
			useResumeStore.temporal.getState().clear();
		});
	},
	updateResumeData: (fn) => {
		set((state) => {
			if (!state.resume) return state;
			if (state.resume.isLocked) {
				errorToastId = toast.error(i18n._({ id: "NAJr4V" }), { id: errorToastId });
				return state;
			}
			fn(state.resume.data);
			syncResume(current(state.resume));
		});
	}
})), {
	partialize: (state) => ({ resume: state.resume }),
	equality: (pastState, currentState) => (0, import_fast_deep_equal.default)(pastState, currentState),
	limit: 100
}));
function useTemporalStore(selector) {
	return useStoreWithEqualityFn(useResumeStore.temporal, selector);
}
//#endregion
export { DialogHeader as a, RichInput as c, useResumeStore as d, useTemporalStore as f, DialogFooter as i, TiptapContent as l, DialogContent as n, DialogTitle as o, DialogDescription as r, PromptDialogProvider as s, Dialog$1 as t, usePrompt as u };
