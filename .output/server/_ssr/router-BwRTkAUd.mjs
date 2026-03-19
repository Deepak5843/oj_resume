import { s as __toESM } from "../_runtime.mjs";
import { L as sql } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime, d as PreviewCardPopup, f as PreviewCardPositioner, h as PreviewCardRoot, m as PreviewCardPortal, p as PreviewCardTrigger } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { t as Badge } from "./badge-e8wRL4HB.mjs";
import { S as redirect, a as createRouter, c as createFileRoute, d as useRouteContext, f as useNavigate, l as createRootRouteWithContext, m as useRouter, n as Scripts, r as HeadContent, s as lazyRouteComponent, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans, r as useLingui, t as I18nProvider } from "../_libs/lingui__react.mjs";
import { d as AnimatePresence, i as useDragControls, l as motion, n as ReorderGroup, t as ReorderItem, u as MotionConfig } from "../_libs/framer-motion.mjs";
import { f as getRequestHeaders } from "./esm-m5_tZiEi.mjs";
import { i as slugify, n as generateRandomName, t as generateId } from "./string-DcW5i2yt.mjs";
import { Aa as flattenError, Bn as array, Tr as looseObject, Xr as string, ki as ZodError, nr as email, ui as url } from "../_libs/@ai-sdk/anthropic+[...].mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { C as skillItemSchema, D as volunteerItemSchema, S as sectionTypeSchema, T as templateSchema, _ as profileItemSchema, a as coverLetterItemSchema, b as referenceItemSchema, c as educationItemSchema, d as languageItemSchema, l as experienceItemSchema, o as customSectionSchema, r as certificationItemSchema, s as defaultResumeData, t as awardItemSchema, u as interestItemSchema, v as projectItemSchema, w as summaryItemSchema, x as resumeDataSchema, y as publicationItemSchema } from "./data-CIU9AXln.mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import { a as localeMap, i as loadLocale, n as isLocale, o as setLocaleServerFn, r as isRTL, t as getLocale } from "./locale-Bc_Sesmg.mjs";
import { n as RPCHandler, r as StrictGetMethodPlugin, t as OpenAPIHandler } from "../_libs/@orpc/openapi+[...].mjs";
import "../_libs/@aws-sdk/client-s3+[...].mjs";
import { n as SmartCoercionPlugin, r as OpenAPIGenerator } from "../_libs/@orpc/json-schema+[...].mjs";
import { k as onError, t as StandardRPCJsonSerializer } from "../_libs/@orpc/client+[...].mjs";
import { r as MutationCache, t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as M } from "../_libs/ts-pattern.mjs";
import { a as env$1, c as inferContentType, d as orpc, h as router_default, i as db, l as jsonPatchOperationSchema, m as printerService, n as auth, r as client, s as getStorageService, u as logger$1 } from "./client-BWxMxJtI.mjs";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-CTJXrILL.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { $t as o$8, B as e$14, Bn as r$1, F as e$2, Hn as o$15, J as e$13, Ot as o$5, Q as e$5, R as o$7, Rn as r$2, Tn as e$10, Vt as o$3, W as o$4, Xt as o$13, Y as e, Zt as o$9, a as r$3, at as t, bn as o$1, ct as e$3, d as e$4, et as i, ht as o$12, j as o$11, jn as t$1, jt as o$2, kt as e$6, l as o$14, mt as o, n as e$9, nn as e$11, nt as r$4, ot as e$1, r, s as e$12, t as o$6, tt as o$10, un as e$7, vt as e$8, yn as c, zn as r$5 } from "../_libs/phosphor-icons__react.mjs";
import { a as DropdownMenuItem, f as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-Bf0lPMdM.mjs";
import { a as create } from "../_libs/zustand.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as McpServer, r as ResourceTemplate, t as WebStandardStreamableHTTPServerTransport } from "../_libs/@modelcontextprotocol/sdk+[...].mjs";
import { a as DialogHeader, c as RichInput, d as useResumeStore, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, s as PromptDialogProvider, t as Dialog$1 } from "./resume-ChldmFWM.mjs";
import { r as TooltipProvider } from "./tooltip-BVeYmHHi.mjs";
import { t as authClient } from "./client-xNbkeDAk.mjs";
import { t as useAIStore } from "./store-BbVpT1Gu.mjs";
import { t as ScrollArea$1 } from "./scroll-area-C-yQDAFC.mjs";
import { o as useToggle, t as useCopyToClipboard } from "../_libs/usehooks-ts.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as fe } from "../_libs/react-hotkeys-hook.mjs";
import { t as Spinner } from "./spinner-B6ZHxgo7.mjs";
import { t as LoadingScreen } from "./loading-screen-CwbgZ59V.mjs";
import { t as Route$24 } from "../_resumeId-Oq5DO-hI.mjs";
import { t as Route$25 } from "../_slug-CwPahfGE.mjs";
import { a as InputGroupInput, i as InputGroupButton, n as InputGroup, o as InputGroupText, r as InputGroupAddon, s as useControlledState, t as Combobox$1 } from "./combobox-WqHaCr-n.mjs";
import { t as Switch$1 } from "./switch-DN9D9WhN.mjs";
import { t as useDialogStore } from "./store-D4Vw1pcS.mjs";
import { n as useConfirm, t as ConfirmDialogProvider } from "./use-confirm-b0BEHu4O.mjs";
import { a as useForm, c as useWatch, i as useFieldArray, o as useFormContext, s as useFormState, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form } from "./form-BEU_kK8D.mjs";
import { t as Route$26 } from "./login-CatIbndc.mjs";
import { n as getTheme, o as useTheme, t as ThemeProvider } from "./provider-CcH3jlbD.mjs";
import { t as Route$27 } from "./profile-DjQEpDqA.mjs";
import { t as Route$28 } from "./register-CpBRa_gR.mjs";
import { t as Route$29 } from "./reset-password-DETk9CKZ.mjs";
import { t as Route$30 } from "./resume-password-B57UT1ih.mjs";
import { n as Route$31, t as CometCard } from "./resumes-5G3ERaO_.mjs";
import { t as BrandIcon } from "./brand-icon-B1mfXAHC.mjs";
import { t as Route$32 } from "./route-B_G7cO6r.mjs";
import { a as URLInput, i as Slider$1, n as IconPicker, r as Route$33, t as ButtonGroup } from "./route-BXmIAYzp.mjs";
import { t as templates } from "./data-CLL9cI8g.mjs";
import { a as PointerSensor, g as CSS, h as useSensors, i as KeyboardSensor, m as useSensor, o as closestCenter, t as DndContext } from "../_libs/@dnd-kit/core+[...].mjs";
import { a as useSortable, i as sortableKeyboardCoordinates, r as horizontalListSortingStrategy, t as SortableContext } from "../_libs/dnd-kit__sortable.mjs";
import { t as Kt } from "../_libs/input-otp.mjs";
import { i as InputOTPSlot, n as InputOTPGroup, t as InputOTP } from "./input-otp-BenbZUqn.mjs";
import { t as setupRouterSsrQueryIntegration } from "../_libs/@tanstack/react-router-ssr-query+[...].mjs";
import { n as _e, t as Pe } from "../_libs/cmdk.mjs";
import "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QRCodeSVG } from "../_libs/qrcode.react.mjs";
import { n as RequestHeadersPlugin, t as BatchHandlerPlugin } from "../_libs/orpc__server.mjs";
import { t as ZodToJsonSchemaConverter } from "../_libs/orpc__zod.mjs";
import { createHash } from "node:crypto";
import { basename, extname, normalize } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BwRTkAUd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ErrorScreen({ error, reset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-svh max-w-md flex-col items-center justify-center gap-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
				variant: "logo",
				className: "size-12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "l8BGas" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: error.message })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				onClick: reset,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "lCF0wC" })]
			})
		]
	});
}
function NotFoundScreen({ routeId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-svh max-w-md flex-col items-center justify-center gap-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
				variant: "logo",
				className: "size-12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "l8BGas" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: routeId })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "..",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "sr0UJD" })]
			}) })
		]
	});
}
var getSession = async () => {
	return await auth.api.getSession({ headers: getRequestHeaders() });
};
var serializer = new StandardRPCJsonSerializer();
var getQueryClient = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				gcTime: 300 * 1e3,
				staleTime: 60 * 1e3,
				queryKeyHashFn(queryKey) {
					const [json, meta] = serializer.serialize(queryKey);
					return JSON.stringify({
						json,
						meta
					});
				}
			},
			dehydrate: { serializeData(data) {
				const [json, meta] = serializer.serialize(data);
				return {
					json,
					meta
				};
			} },
			hydrate: { deserializeData(data) {
				return serializer.deserialize(data.json, data.meta);
			} }
		},
		mutationCache: new MutationCache({ onSettled: (_1, _2, _3, _4, _5, context) => {
			if (context?.meta?.noInvalidate) return;
			queryClient.invalidateQueries();
		} })
	});
	return queryClient;
};
function Command$1({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
		"data-slot": "command",
		className: cn("flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground", className),
		...props
	});
}
function CommandInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "command-input-wrapper",
		className: "p-1 pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
			className: "h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
				"data-slot": "command-input",
				className: cn("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
				...props
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { className: "size-4 shrink-0 opacity-50" }) })]
		})
	});
}
function CommandList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
		"data-slot": "command-list",
		className: cn("no-scrollbar max-h-72 scroll-py-1 overflow-y-auto overflow-x-hidden outline-none", className),
		...props
	});
}
function CommandEmpty({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
		"data-slot": "command-empty",
		className: cn("py-6 text-center text-sm", className),
		...props
	});
}
function CommandGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
		"data-slot": "command-group",
		className: cn("overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group-heading]]:text-xs", className),
		...props
	});
}
function CommandItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
		"data-slot": "command-item",
		className: cn("group/command-item relative flex cursor-default select-none items-center gap-2 in-data-[slot=dialog-content]:rounded-lg! rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-selected:bg-muted data-selected:text-foreground data-[disabled=true]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-selected:**:[svg]:text-foreground", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$1, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]
	});
}
function CommandShortcut({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "command-shortcut",
		className: cn("ml-auto text-muted-foreground text-xs tracking-widest group-data-selected/command-item:text-foreground", className),
		...props
	});
}
var initialState = {
	open: false,
	search: "",
	pages: []
};
var useCommandPaletteStore = create((set, get) => ({
	...initialState,
	setOpen: (open) => {
		set({ open });
		if (!open) set(initialState);
	},
	setSearch: (search) => set({ search }),
	peekPage: () => get().pages[get().pages.length - 1],
	pushPage: (page) => set((state) => ({
		pages: [...state.pages, page],
		search: ""
	})),
	popPage: () => set((state) => ({
		pages: state.pages.slice(0, -1),
		search: ""
	})),
	reset: () => set(initialState),
	goBack: () => {
		set((state) => {
			if (state.search.length > 0) return { search: "" };
			if (state.pages.length > 0) return {
				pages: state.pages.slice(0, -1),
				search: ""
			};
			return {
				open: false,
				search: "",
				pages: []
			};
		});
	}
}));
var BaseCommandGroup = ({ page, heading, children }) => {
	const pages = useCommandPaletteStore((state) => state.pages);
	const currentPage = pages[pages.length - 1];
	if (!(0, import_react.useMemo)(() => {
		return currentPage === page;
	}, [currentPage, page])) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
		heading,
		children
	});
};
function NavigationCommandGroup() {
	const navigate = useNavigate();
	const { session } = useRouteContext({ strict: false });
	const reset = useCommandPaletteStore((state) => state.reset);
	const pushPage = useCommandPaletteStore((state) => state.pushPage);
	function onNavigate(path) {
		navigate({ to: path });
		reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BaseCommandGroup, {
		heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "SiM1oz" }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "i0qMbr" })],
				value: "navigation.home",
				onSelect: () => onNavigate("/"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "i0qMbr" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				disabled: !session,
				keywords: [i18n._({ id: "oTBjeH" })],
				value: "navigation.resumes",
				onSelect: () => onNavigate("/dashboard/resumes"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oTBjeH" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				disabled: !session,
				keywords: [i18n._({ id: "Tz0i8g" })],
				value: "navigation.settings",
				onSelect: () => pushPage("settings"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Tz0i8g" })]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BaseCommandGroup, {
		page: "settings",
		heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Tz0i8g" }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "vERlcd" })],
				value: "navigation.settings.profile",
				onSelect: () => onNavigate("/dashboard/settings/profile"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vERlcd" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "Q6hhn8" })],
				value: "navigation.settings.preferences",
				onSelect: () => onNavigate("/dashboard/settings/preferences"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Q6hhn8" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "P8fBlG" })],
				value: "navigation.settings.authentication",
				onSelect: () => onNavigate("/dashboard/settings/authentication"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$4, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "P8fBlG" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "FfSJ1Y" })],
				value: "navigation.settings.api-keys",
				onSelect: () => onNavigate("/dashboard/settings/api-keys"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "FfSJ1Y" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "Jm1U+x" })],
				value: "navigation.settings.ai",
				onSelect: () => onNavigate("/dashboard/settings/ai"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$1, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Jm1U+x" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				keywords: [i18n._({ id: "ZQKLI1" })],
				value: "navigation.settings.danger-zone",
				onSelect: () => onNavigate("/dashboard/settings/danger-zone"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ZQKLI1" })]
			})
		]
	})] });
}
function LanguageCommandPage() {
	const { i18n } = useLingui();
	const handleLocaleChange = async (value) => {
		if (!value || !isLocale(value)) return;
		await Promise.all([loadLocale(value), setLocaleServerFn({ data: value })]);
		window.location.reload();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseCommandGroup, {
		page: "language",
		heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vXIe7J" }),
		children: Object.entries(localeMap).map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			onSelect: () => handleLocaleChange(value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-muted-foreground text-xs",
				children: value
			}), i18n.t(label)]
		}, value))
	});
}
function ThemeCommandPage() {
	const { setTheme } = useTheme();
	const setOpen = useCommandPaletteStore((state) => state.setOpen);
	const handleThemeChange = (theme) => {
		setTheme(theme, { playSound: false });
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BaseCommandGroup, {
		page: "theme",
		heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "FEr96N" }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			value: "light",
			onSelect: () => handleThemeChange("light"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$2, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dPpHZL" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			value: "dark",
			onSelect: () => handleThemeChange("dark"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$3, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "GtpQwI" })]
		})]
	});
}
function PreferencesCommandGroup() {
	const pushPage = useCommandPaletteStore((state) => state.pushPage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BaseCommandGroup, {
			heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Q6hhn8" }),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				onSelect: () => pushPage("theme"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "z7M984" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
				onSelect: () => pushPage("language"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$4, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dWpncY" })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCommandPage, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageCommandPage, {})
	] });
}
function Kbd({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
		"data-slot": "kbd",
		className: cn("pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-sm bg-muted in-data-[slot=tooltip-content]:bg-background/20 px-1 font-medium font-sans in-data-[slot=tooltip-content]:text-background text-muted-foreground text-xs dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3", className),
		...props
	});
}
function ResumesCommandGroup() {
	const navigate = useNavigate();
	const { openDialog } = useDialogStore();
	const { session } = useRouteContext({ strict: false });
	const reset = useCommandPaletteStore((state) => state.reset);
	const peekPage = useCommandPaletteStore((state) => state.peekPage);
	const pushPage = useCommandPaletteStore((state) => state.pushPage);
	const isResumesPage = peekPage() === "resumes";
	const { data: resumes, isLoading } = useQuery(orpc.resume.list.queryOptions({ enabled: !!session && isResumesPage }));
	const onCreate = () => {
		navigate({ to: "/dashboard/resumes" });
		openDialog("resume.create", void 0);
		reset();
	};
	const onNavigate = (path) => {
		navigate({ to: path });
		reset();
	};
	if (!session) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseCommandGroup, {
		heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Q2wk34" }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			keywords: [i18n._({ id: "oTBjeH" })],
			value: "search.resumes",
			onSelect: () => pushPage("resumes"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oTBjeH" })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BaseCommandGroup, {
		page: "resumes",
		heading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oTBjeH" }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			onSelect: onCreate,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "VrBnBN" })]
		}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ABeC9P" }) }) : resumes?.map((resume) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			value: resume.id,
			keywords: [resume.name],
			onSelect: () => onNavigate(`/builder/${resume.id}`),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {}),
				resume.name,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandShortcut, {
					className: "opacity-0 transition-opacity group-data-[selected=true]/command-item:opacity-100",
					children: [
						"Press ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "Enter" }),
						" to open"
					]
				})
			]
		}, resume.id))]
	})] });
}
function CommandPalette() {
	const inputRef = (0, import_react.useRef)(null);
	const { open, search, pages, setOpen, setSearch, goBack } = useCommandPaletteStore();
	const isFirstPage = pages.length === 0;
	const currentPage = pages[pages.length - 1];
	fe(["meta+k", "ctrl+k"], (e) => {
		e.preventDefault();
		setOpen(!open);
	}, {
		preventDefault: true,
		enableOnFormTags: true
	}, [open]);
	fe("backspace", (e) => {
		if (!open) return;
		const input = inputRef.current;
		if (!input) return;
		if (document.activeElement !== input) return;
		if (search.length > 0) return;
		e.preventDefault();
		goBack();
	}, {
		preventDefault: false,
		enableOnFormTags: true
	}, [open, search]);
	fe("escape", () => {
		if (!open) return;
		setOpen(false);
	}, {
		preventDefault: true,
		enableOnFormTags: true
	}, [open]);
	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};
	const handleSearchChange = (value) => {
		setSearch(value);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog$1, {
		open,
		onOpenChange: handleOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
			className: "sr-only print:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "G5KAPr" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "aLB9e4" }) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "overflow-hidden p-0",
			"aria-label": isFirstPage ? "Command Palette" : `Command Palette - ${currentPage}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, {
				loop: true,
				"aria-label": "Command Palette",
				className: "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group]]:px-2 **:[[cmdk-input]]:h-12 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, {
					ref: inputRef,
					value: search,
					onValueChange: handleSearchChange,
					placeholder: isFirstPage ? "Type a command or search..." : "Search...",
					"aria-label": "Search commands"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "H7KFBz" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumesCommandGroup, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferencesCommandGroup, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationCommandGroup, {})
				] })]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme,
		className: "toaster group print:hidden",
		icons: {
			success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { className: "size-4" }),
			info: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$6, { className: "size-4" }),
			warning: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, { className: "size-4" }),
			error: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$6, { className: "size-4" }),
			loading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$7, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		toastOptions: { classNames: {
			toast: "cn-toast",
			content: "space-y-0.5",
			description: "text-muted-foreground opacity-60 text-xs"
		} },
		...props
	});
};
function useFormBlocker(form, options) {
	const confirm = useConfirm();
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const { isDirty, isSubmitting } = form.formState;
	const shouldBlock = (0, import_react.useCallback)(() => {
		if (options?.shouldBlock) return options.shouldBlock();
		return isDirty && !isSubmitting;
	}, [
		options,
		isDirty,
		isSubmitting
	]);
	const requestClose = (0, import_react.useCallback)(async () => {
		if (!shouldBlock()) {
			closeDialog();
			return;
		}
		if (await confirm(i18n._({ id: "GM1Rg+" }), {
			description: i18n._({ id: "LcV6TH" }),
			confirmText: i18n._({ id: "Mv8CyJ" }),
			cancelText: i18n._({ id: "GCJTE0" })
		})) closeDialog();
	}, [
		shouldBlock,
		closeDialog,
		confirm
	]);
	return {
		requestClose,
		blockEvents: {
			onEscapeKeyDown: (event) => {
				if (shouldBlock()) {
					event.preventDefault();
					requestClose();
				}
			},
			onPointerDownOutside: (event) => {
				if (shouldBlock()) {
					event.preventDefault();
					requestClose();
				}
			},
			onInteractOutside: (event) => {
				if (shouldBlock()) event.preventDefault();
			}
		}
	};
}
var formSchema$19 = zod_default.object({
	name: zod_default.string().min(1).max(64),
	expiresIn: zod_default.number().min(1)
});
function CreateApiKeyDialog(_) {
	const [apiKey, setApiKey] = (0, import_react.useState)(null);
	if (apiKey) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyApiKeyForm, { apiKey });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateApiKeyForm, { setApiKey });
}
var CreateApiKeyForm = ({ setApiKey }) => {
	const form = useForm({
		resolver: a(formSchema$19),
		defaultValues: {
			name: "",
			expiresIn: 3600 * 24 * 30
		}
	});
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = async (values) => {
		const toastId = toast.loading(i18n._({ id: "3RUt+p" }));
		const { data, error } = await authClient.apiKey.create({
			name: values.name,
			expiresIn: values.expiresIn
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		setApiKey(data.key);
		toast.dismiss(toastId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "A9WbM0" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ANjiuN" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-6 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "name",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								min: 1,
								max: 64,
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "aE6Nrl" }) })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "expiresIn",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "i9qiyR" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combobox$1, {
								value: field.value,
								onValueChange: (value) => value && field.onChange(Number(value)),
								options: [
									{
										value: 3600 * 24 * 30,
										label: i18n._({ id: "voMgY+" })
									},
									{
										value: 3600 * 24 * 90,
										label: i18n._({ id: "x1VeBD" })
									},
									{
										value: 3600 * 24 * 180,
										label: i18n._({ id: "aQ1pHA" })
									},
									{
										value: 3600 * 24 * 365,
										label: i18n._({ id: "+N7uug" })
									}
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					}) })
				]
			})
		})]
	});
};
var CopyApiKeyForm = ({ apiKey }) => {
	const queryClient = useQueryClient();
	const [_, copyToClipboard] = useCopyToClipboard();
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const onCopy = () => {
		copyToClipboard(apiKey);
		toast.success(i18n._({ id: "H+n8tf" }));
	};
	const onConfirm = () => {
		closeDialog();
		queryClient.invalidateQueries({ queryKey: ["auth", "api-keys"] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$7, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "H4LMgT" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "AhlR5P" }) })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
				value: apiKey,
				readOnly: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
				align: "inline-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupButton, {
					size: "icon-sm",
					onClick: onCopy,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$7, {})
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-muted-foreground text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "0qBIxr" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
			onClick: onConfirm,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7VpPHA" })
		}) })
	] });
};
var formSchema$18 = zod_default.object({
	currentPassword: zod_default.string().min(6).max(64),
	newPassword: zod_default.string().min(6).max(64)
}).refine((data) => data.newPassword !== data.currentPassword, {
	message: "New password cannot be the same as the current password.",
	path: ["newPassword"]
});
function ChangePasswordDialog(_) {
	const queryClient = useQueryClient();
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const [showCurrentPassword, toggleShowCurrentPassword] = useToggle(false);
	const [showNewPassword, toggleShowNewPassword] = useToggle(false);
	const form = useForm({
		resolver: a(formSchema$18),
		defaultValues: {
			currentPassword: "",
			newPassword: ""
		}
	});
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "yh1iSq" }));
		const { error } = await authClient.changePassword({
			currentPassword: data.currentPassword,
			newPassword: data.newPassword
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		toast.success(i18n._({ id: "Ecp9Z/" }), { id: toastId });
		queryClient.invalidateQueries({ queryKey: ["auth", "accounts"] });
		closeDialog();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$4, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vEdQb2" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "jE+jBx" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "currentPassword",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "DCKkhU" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-x-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									min: 6,
									max: 64,
									type: showCurrentPassword ? "text" : "password",
									autoComplete: "current-password",
									...field
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									size: "icon",
									variant: "ghost",
									type: "button",
									onClick: toggleShowCurrentPassword,
									children: showCurrentPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$8, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$9, {})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "newPassword",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7vhWI8" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-x-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									min: 6,
									max: 64,
									type: showNewPassword ? "text" : "password",
									autoComplete: "new-password",
									...field
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									size: "icon",
									variant: "ghost",
									type: "button",
									onClick: toggleShowNewPassword,
									children: showNewPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$8, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$9, {})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "KhtG3o" })
					}) })
				]
			})
		})]
	});
}
var formSchema$17 = zod_default.object({ password: zod_default.string().min(6).max(64) });
function DisableTwoFactorDialog(_) {
	const router = useRouter();
	const [showPassword, toggleShowPassword] = useToggle(false);
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const form = useForm({
		resolver: a(formSchema$17),
		defaultValues: { password: "" }
	});
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "pFPrTN" }));
		const { error } = await authClient.twoFactor.disable({ password: data.password });
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		toast.success(i18n._({ id: "xNGw2q" }), { id: toastId });
		router.invalidate();
		closeDialog();
		form.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$8, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "B4GvqA" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "fJMzvw" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					control: form.control,
					name: "password",
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "8ZsakT" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-x-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								min: 6,
								max: 64,
								type: showPassword ? "text" : "password",
								autoComplete: "current-password",
								...field
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								size: "icon",
								variant: "ghost",
								type: "button",
								onClick: toggleShowPassword,
								children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$8, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$9, {})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					variant: "destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "qERl58" })
				}) })]
			})
		})]
	});
}
var enableFormSchema = zod_default.object({ password: zod_default.string().min(6).max(64) });
var verifyFormSchema = zod_default.object({ code: zod_default.string().length(6, "Code must be 6 digits") });
function EnableTwoFactorDialog(_) {
	const router = useRouter();
	const [totpUri, setTotpUri] = (0, import_react.useState)(null);
	const [backupCodes, setBackupCodes] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)("enable");
	const [showPassword, toggleShowPassword] = useToggle(false);
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const enableForm = useForm({
		resolver: a(enableFormSchema),
		defaultValues: { password: "" }
	});
	const verifyForm = useForm({
		resolver: a(verifyFormSchema),
		defaultValues: { code: "" }
	});
	const enableFormState = enableForm.formState;
	const verifyFormState = verifyForm.formState;
	const { blockEvents, requestClose } = useFormBlocker(enableForm, { shouldBlock: () => {
		if (step === "enable") return enableFormState.isDirty && !enableFormState.isSubmitting;
		if (step === "verify") return verifyFormState.isDirty && !verifyFormState.isSubmitting;
		return false;
	} });
	const onEnableSubmit = async (values) => {
		const toastId = toast.loading(i18n._({ id: "jdIbY9" }));
		const { data, error } = await authClient.twoFactor.enable({
			password: values.password,
			issuer: "Reactive Resume"
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		if (data.totpURI && data.backupCodes) {
			setTotpUri(data.totpURI);
			setBackupCodes(data.backupCodes);
			setStep("verify");
			toast.dismiss(toastId);
		} else toast.error(i18n._({ id: "P5tjK4" }), { id: toastId });
	};
	const onVerifySubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "E09rlM" }));
		const { error } = await authClient.twoFactor.verifyTotp({ code: data.code });
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		toast.dismiss(toastId);
		setStep("backup");
	};
	const onConfirmBackup = () => {
		toast.success(i18n._({ id: "Vg9x3o" }));
		router.invalidate();
		closeDialog();
		onReset();
	};
	const onReset = () => {
		enableForm.reset();
		verifyForm.reset();
		setStep("enable");
		setTotpUri(null);
		setBackupCodes(null);
	};
	const handleCopySecret = async () => {
		if (!totpUri) return;
		const secret = extractSecretFromTotpUri(totpUri);
		if (!secret) return;
		await navigator.clipboard.writeText(secret);
		toast.success(i18n._({ id: "25Imz+" }));
	};
	const handleCopyBackupCodes = async () => {
		if (!backupCodes) return;
		await navigator.clipboard.writeText(backupCodes.join("\n"));
		toast.success(i18n._({ id: "TkSBev" }));
	};
	const handleDownloadBackupCodes = () => {
		if (!backupCodes) return;
		const content = backupCodes.join("\n");
		const blob = new Blob([content], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "reactive-resume_backup-codes.txt";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: "max-w-md",
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: M(step).with("enable", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "qqFgQx" })).with("verify", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "cnxHw9" })).with("backup", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "3ug5/f" })).exhaustive() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: M(step).with("enable", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "SKpfHd" })).with("verify", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "9h2GLM" })).with("backup", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "fE0mvR" })).exhaustive() })] }), M(step).with("enable", () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...enableForm,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: enableForm.handleSubmit(onEnableSubmit),
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					control: enableForm.control,
					name: "password",
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "8ZsakT" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-x-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								min: 6,
								max: 64,
								type: showPassword ? "text" : "password",
								autoComplete: "current-password",
								...field
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								size: "icon",
								variant: "ghost",
								type: "button",
								onClick: toggleShowPassword,
								children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$8, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$9, {})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "xGVfLh" })
				}) })]
			})
		})).with("verify", () => {
			const secret = totpUri ? extractSecretFromTotpUri(totpUri) : null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					totpUri && secret && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							readOnly: true,
							value: secret,
							className: "font-mono text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							size: "icon",
							variant: "ghost",
							type: "button",
							onClick: handleCopySecret,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$7, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TwoFactorQRCode, { totpUri })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "i9M14D" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
						...verifyForm,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: verifyForm.handleSubmit(onVerifySubmit),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								control: verifyForm.control,
								name: "code",
								render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
									maxLength: 6,
									value: field.value,
									onChange: field.onChange,
									pattern: Kt,
									onComplete: verifyForm.handleSubmit(onVerifySubmit),
									pasteTransformer: (pasted) => pasted.replaceAll("-", ""),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputOTPGroup, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
											index: 0,
											className: "size-12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
											index: 1,
											className: "size-12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
											index: 2,
											className: "size-12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
											index: 3,
											className: "size-12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
											index: 4,
											className: "size-12"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
											index: 5,
											className: "size-12"
										})
									] })
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "gap-x-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									type: "button",
									variant: "outline",
									onClick: requestClose,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									type: "submit",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "xGVfLh" })
								})]
							})]
						})
					})
				]
			});
		}).with("backup", () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [backupCodes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: backupCodes.map((code, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md border border-border p-2 text-center font-mono text-sm",
						children: code
					}, index))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-x-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: handleDownloadBackupCodes,
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r$5, { className: "me-2 size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "mzI/c+" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						type: "button",
						variant: "ghost",
						onClick: handleCopyBackupCodes,
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$7, { className: "me-2 size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "he3ygx" })]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				type: "button",
				onClick: onConfirmBackup,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "xGVfLh" })
			}) })]
		})).exhaustive()]
	});
}
function extractSecretFromTotpUri(totpUri) {
	try {
		return new URL(totpUri).searchParams.get("secret");
	} catch {
		return null;
	}
}
function TwoFactorQRCode({ totpUri }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QRCodeSVG, {
		value: totpUri,
		size: 256,
		marginSize: 2,
		className: "rounded-md",
		title: "Two-Factor Authentication QR Code"
	});
}
var RETURN_KEY = "Enter";
var COMMA_KEY = ",";
function ChipItem({ id, chip, index, isEditing, onEdit, onRemove }) {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
	const [isHovered, setIsHovered] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			transform: CSS.Transform.toString(transform),
			transition,
			zIndex: isDragging ? 10 : void 0,
			opacity: isDragging ? .6 : 1
		},
		ref: setNodeRef,
		className: "relative touch-none",
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		...attributes,
		...listeners,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
			variant: "outline",
			className: cn("flex h-7 cursor-grab select-none items-center gap-0 overflow-hidden px-3 active:cursor-grabbing", isEditing && "border-primary ring-1 ring-primary", isDragging && "opacity-80"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "max-w-32 truncate",
				children: chip
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: false,
				animate: {
					width: isHovered ? 40 : 0,
					marginInlineStart: isHovered ? 8 : 0,
					opacity: isHovered ? 1 : 0
				},
				transition: {
					duration: .15,
					ease: "linear"
				},
				className: "flex shrink-0 items-center gap-x-1 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					tabIndex: -1,
					"aria-label": `Edit ${chip}`,
					onClick: (e) => {
						e.stopPropagation();
						onEdit(index);
					},
					className: "rounded-sm p-0.5 hover:bg-secondary hover:text-foreground focus:outline-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$10, { className: "size-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					tabIndex: -1,
					"aria-label": `Remove ${chip}`,
					onClick: (e) => {
						e.stopPropagation();
						onRemove(index);
					},
					className: "rounded-sm p-0.5 hover:bg-destructive/10 hover:text-destructive focus:outline-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$9, { className: "size-3.5" })
				})]
			})]
		})
	});
}
function ChipInput({ value, defaultValue = [], onChange, className, ...props }) {
	const [chips, setChips] = useControlledState({
		value,
		defaultValue,
		onChange
	});
	const [input, setInput] = import_react.useState("");
	const [editingIndex, setEditingIndex] = import_react.useState(null);
	const inputRef = import_react.useRef(null);
	const addChip = import_react.useCallback((chip) => {
		const trimmed = chip.trim();
		if (!trimmed) return;
		setChips(Array.from(new Set([...chips, trimmed])));
	}, [chips, setChips]);
	const updateChip = import_react.useCallback((index, newValue) => {
		const trimmed = newValue.trim();
		if (!trimmed || index < 0 || index >= chips.length) return;
		if (chips.findIndex((c, i) => c === trimmed && i !== index) !== -1) return;
		const newChips = [...chips];
		newChips[index] = trimmed;
		setChips(newChips);
	}, [chips, setChips]);
	const removeChip = import_react.useCallback((index) => {
		if (index < 0 || index >= chips.length) return;
		setChips(chips.slice(0, index).concat(chips.slice(index + 1)));
		if (editingIndex === index) {
			setEditingIndex(null);
			setInput("");
		} else if (editingIndex !== null && editingIndex > index) setEditingIndex(editingIndex - 1);
	}, [
		chips,
		setChips,
		editingIndex
	]);
	const handleEdit = import_react.useCallback((index) => {
		setEditingIndex(index);
		setInput(chips[index]);
		inputRef.current?.focus();
	}, [chips]);
	const handleReorder = import_react.useCallback((newOrder) => {
		if (editingIndex !== null) {
			const editingChip = chips[editingIndex];
			const newIndex = newOrder.indexOf(editingChip);
			if (newIndex !== -1 && newIndex !== editingIndex) setEditingIndex(newIndex);
		}
		setChips(newOrder);
	}, [
		chips,
		editingIndex,
		setChips
	]);
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 3 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));
	const handleDragEnd = import_react.useCallback((event) => {
		const { active, over } = event;
		if (!over || active.id === over.id) return;
		const oldIndex = chips.indexOf(active.id);
		const newIndex = chips.indexOf(over.id);
		if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
			const newOrder = Array.from(chips);
			const [removed] = newOrder.splice(oldIndex, 1);
			newOrder.splice(newIndex, 0, removed);
			handleReorder(newOrder);
		}
	}, [chips, handleReorder]);
	const handleInputChange = import_react.useCallback((e) => {
		const newValue = e.target.value;
		if (editingIndex !== null) {
			if (newValue.includes(",")) {
				updateChip(editingIndex, newValue.replace(",", ""));
				setEditingIndex(null);
				setInput("");
			} else setInput(newValue);
			return;
		}
		if (newValue.includes(",")) {
			const parts = newValue.split(",");
			parts.slice(0, -1).forEach(addChip);
			setInput(parts[parts.length - 1]);
		} else setInput(newValue);
	}, [
		addChip,
		editingIndex,
		updateChip
	]);
	const handleKeyDown = import_react.useCallback((e) => {
		if (e.key === "Enter" || e.key === ",") {
			e.preventDefault();
			if (editingIndex !== null) {
				if (input.trim()) updateChip(editingIndex, input);
				setEditingIndex(null);
				setInput("");
			} else if (input.trim()) {
				addChip(input);
				setInput("");
			}
		} else if (e.key === "Escape" && editingIndex !== null) {
			setEditingIndex(null);
			setInput("");
		}
	}, [
		input,
		addChip,
		editingIndex,
		updateChip
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", className),
		...props,
		children: [chips.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
			sensors,
			collisionDetection: closestCenter,
			onDragEnd: handleDragEnd,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableContext, {
				items: chips,
				strategy: horizontalListSortingStrategy,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: chips.map((chip, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipItem, {
						id: chip,
						chip,
						index: idx,
						isEditing: editingIndex === idx,
						onEdit: handleEdit,
						onRemove: removeChip
					}, `${chip}-${idx}`))
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
				ref: inputRef,
				type: "text",
				value: input,
				autoComplete: "off",
				"aria-label": editingIndex !== null ? "Edit keyword" : "Add keyword",
				placeholder: editingIndex !== null ? "Editing keyword..." : "Add a keyword...",
				onKeyDown: handleKeyDown,
				onChange: handleInputChange
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, {
					id: "GNdJKu",
					values: {
						RETURN_KEY,
						COMMA_KEY
					},
					components: {
						0: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, {}),
						1: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, {})
					}
				})
			})]
		})]
	});
}
var formSchema$16 = zod_default.object({
	id: zod_default.string(),
	name: zod_default.string().min(1).max(64),
	slug: zod_default.string().min(1).max(64).transform(slugify),
	tags: zod_default.array(zod_default.string())
});
function CreateResumeDialog(_) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const { mutate: createResume, isPending } = useMutation(orpc.resume.create.mutationOptions());
	const form = useForm({
		resolver: a(formSchema$16),
		defaultValues: {
			id: generateId(),
			name: "",
			slug: "",
			tags: []
		}
	});
	const name = useWatch({
		control: form.control,
		name: "name"
	});
	(0, import_react.useEffect)(() => {
		form.setValue("slug", slugify(name), { shouldDirty: true });
	}, [form, name]);
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = (data) => {
		const toastId = toast.loading(i18n._({ id: "7HKzmi" }));
		createResume(data, {
			onSuccess: () => {
				toast.success(i18n._({ id: "+Wj2rz" }), { id: toastId });
				closeDialog();
			},
			onError: (error) => {
				if (error.message === "RESUME_SLUG_ALREADY_EXISTS") {
					toast.error(i18n._({ id: "268IGC" }), { id: toastId });
					return;
				}
				toast.error(error.message, { id: toastId });
			}
		});
	};
	const onCreateSampleResume = () => {
		const values = form.getValues();
		const randomName = generateRandomName();
		const data = {
			name: values.name || randomName,
			slug: values.slug || slugify(randomName),
			tags: values.tags,
			withSampleData: true
		};
		const toastId = toast.loading(i18n._({ id: "7HKzmi" }));
		createResume(data, {
			onSuccess: () => {
				toast.success(i18n._({ id: "+Wj2rz" }), { id: toastId });
				closeDialog();
			},
			onError: (error) => {
				toast.error(error.message, { id: toastId });
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "VrBnBN" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "VjesK8" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonGroup, {
					"aria-label": "Create Resume with Options",
					className: "gap-x-px rtl:flex-row-reverse",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: isPending,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						size: "icon",
						disabled: isPending,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$10, {})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
						align: "end",
						className: "w-fit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							onClick: onCreateSampleResume,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$11, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "GbqtVa" })]
						})
					})] })]
				}) })]
			})
		})]
	});
}
function UpdateResumeDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const { mutate: updateResume, isPending } = useMutation(orpc.resume.update.mutationOptions());
	const form = useForm({
		resolver: a(formSchema$16),
		defaultValues: {
			id: data.id,
			name: data.name,
			slug: data.slug,
			tags: data.tags
		}
	});
	const name = useWatch({
		control: form.control,
		name: "name"
	});
	(0, import_react.useEffect)(() => {
		if (!name) return;
		form.setValue("slug", slugify(name), { shouldDirty: true });
	}, [form, name]);
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = (data) => {
		const toastId = toast.loading(i18n._({ id: "rYyCb4" }));
		updateResume(data, {
			onSuccess: () => {
				toast.success(i18n._({ id: "wX/xaI" }), { id: toastId });
				closeDialog();
			},
			onError: (error) => {
				if (error.message === "RESUME_SLUG_ALREADY_EXISTS") {
					toast.error(i18n._({ id: "268IGC" }), { id: toastId });
					return;
				}
				toast.error(error.message, { id: toastId });
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "+0PodC" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "gVkUmh" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: isPending,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
				}) })]
			})
		})]
	});
}
function DuplicateResumeDialog({ data }) {
	const navigate = useNavigate();
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const { mutate: duplicateResume, isPending } = useMutation(orpc.resume.duplicate.mutationOptions());
	const form = useForm({
		resolver: a(formSchema$16),
		defaultValues: {
			id: data.id,
			name: `${data.name} (Copy)`,
			slug: `${data.slug}-copy`,
			tags: data.tags
		}
	});
	const name = useWatch({
		control: form.control,
		name: "name"
	});
	(0, import_react.useEffect)(() => {
		if (!name) return;
		form.setValue("slug", slugify(name), { shouldDirty: true });
	}, [form, name]);
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = (values) => {
		const toastId = toast.loading(i18n._({ id: "3tlS4P" }));
		duplicateResume(values, {
			onSuccess: async (id) => {
				toast.success(i18n._({ id: "LKNBKw" }), { id: toastId });
				closeDialog();
				if (data.shouldRedirect) navigate({
					to: `/builder/$resumeId`,
					params: { resumeId: id }
				});
			},
			onError: (error) => {
				toast.error(error.message, { id: toastId });
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "nfwsru" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "LBosAm" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: isPending,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "euc6Ns" })
				}) })]
			})
		})]
	});
}
function ResumeForm() {
	const form = useFormContext();
	const { data: session } = authClient.useSession();
	const slugPrefix = (0, import_react.useMemo)(() => {
		return `${window.location.origin}/${session?.user.username ?? ""}/`;
	}, [session]);
	const onGenerateName = () => {
		form.setValue("name", generateRandomName(), { shouldDirty: true });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "name",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-x-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
						min: 1,
						max: 64,
						...field
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						size: "icon",
						variant: "outline",
						title: i18n._({ id: "RPSPrr" }),
						onClick: onGenerateName,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$12, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "K5RgPm" }) })
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "slug",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "L85WcV" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
					align: "inline-start",
					className: "hidden sm:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupText, { children: slugPrefix })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, {
					min: 1,
					max: 64,
					className: "ps-0!",
					...field
				})] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7aZukW" }) })
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "tags",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "OYHzN1" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipInput, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "k0rBXO" }) })
			] })
		})
	] });
}
var iso8601 = string().regex(/^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$/, "Must be a valid ISO 8601 date (YYYY, YYYY-MM, or YYYY-MM-DD)");
var locationSchema = looseObject({
	address: string().optional(),
	postalCode: string().optional(),
	city: string().optional(),
	countryCode: string().optional(),
	region: string().optional()
});
var profileSchema = looseObject({
	network: string().optional(),
	username: string().optional(),
	url: url().optional()
});
var basicsSchema = looseObject({
	name: string().optional(),
	label: string().optional(),
	image: string().optional(),
	email: email().optional(),
	phone: string().optional(),
	url: url().optional(),
	summary: string().optional(),
	location: locationSchema.optional(),
	profiles: array(profileSchema).optional()
});
var workSchema = looseObject({
	name: string().optional(),
	location: string().optional(),
	description: string().optional(),
	position: string().optional(),
	url: url().optional(),
	startDate: iso8601.optional(),
	endDate: iso8601.optional(),
	summary: string().optional(),
	highlights: array(string()).optional()
});
var volunteerSchema = looseObject({
	organization: string().optional(),
	position: string().optional(),
	url: url().optional(),
	startDate: iso8601.optional(),
	endDate: iso8601.optional(),
	summary: string().optional(),
	highlights: array(string()).optional()
});
var educationSchema = looseObject({
	institution: string().optional(),
	url: url().optional(),
	area: string().optional(),
	studyType: string().optional(),
	startDate: iso8601.optional(),
	endDate: iso8601.optional(),
	score: string().optional(),
	courses: array(string()).optional()
});
var awardSchema = looseObject({
	title: string().optional(),
	date: iso8601.optional(),
	awarder: string().optional(),
	summary: string().optional()
});
var certificateSchema = looseObject({
	name: string().optional(),
	date: iso8601.optional(),
	url: url().optional(),
	issuer: string().optional()
});
var publicationSchema = looseObject({
	name: string().optional(),
	publisher: string().optional(),
	releaseDate: iso8601.optional(),
	url: url().optional(),
	summary: string().optional()
});
var skillSchema = looseObject({
	name: string().optional(),
	level: string().optional(),
	keywords: array(string()).optional()
});
var languageSchema = looseObject({
	language: string().optional(),
	fluency: string().optional()
});
var interestSchema = looseObject({
	name: string().optional(),
	keywords: array(string()).optional()
});
var referenceSchema = looseObject({
	name: string().optional(),
	reference: string().optional()
});
var projectSchema = looseObject({
	name: string().optional(),
	description: string().optional(),
	highlights: array(string()).optional(),
	keywords: array(string()).optional(),
	startDate: iso8601.optional(),
	endDate: iso8601.optional(),
	url: url().optional(),
	roles: array(string()).optional(),
	entity: string().optional(),
	type: string().optional()
});
var metaSchema = looseObject({
	canonical: url().optional(),
	version: string().optional(),
	lastModified: string().optional()
});
var jsonResumeSchema = looseObject({
	$schema: url().optional(),
	basics: basicsSchema.optional(),
	work: array(workSchema).optional(),
	volunteer: array(volunteerSchema).optional(),
	education: array(educationSchema).optional(),
	awards: array(awardSchema).optional(),
	certificates: array(certificateSchema).optional(),
	publications: array(publicationSchema).optional(),
	skills: array(skillSchema).optional(),
	languages: array(languageSchema).optional(),
	interests: array(interestSchema).optional(),
	references: array(referenceSchema).optional(),
	projects: array(projectSchema).optional(),
	meta: metaSchema.optional()
});
function formatPeriod(startDate, endDate) {
	if (!startDate && !endDate) return "";
	if (!startDate) return endDate || "";
	if (!endDate) return `${startDate} - Present`;
	const formatDate = (date) => {
		const parts = date.split("-");
		if (parts.length === 3) {
			const [year, month] = parts;
			return `${[
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			][parseInt(month, 10) - 1]} ${year}`;
		}
		if (parts.length === 2) {
			const [year, month] = parts;
			return `${[
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			][parseInt(month, 10) - 1]} ${year}`;
		}
		return date;
	};
	return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}
function formatSingleDate(date) {
	if (!date) return "";
	const parts = date.split("-");
	if (parts.length === 3) {
		const [year, month, day] = parts;
		return `${[
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		][parseInt(month, 10) - 1]} ${day}, ${year}`;
	}
	if (parts.length === 2) {
		const [year, month] = parts;
		return `${[
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		][parseInt(month, 10) - 1]} ${year}`;
	}
	return date;
}
function toHtmlDescription(summary, highlights) {
	const parts = [];
	if (summary) parts.push(`<p>${summary}</p>`);
	if (highlights && highlights.length > 0) {
		parts.push("<ul>");
		for (const highlight of highlights) parts.push(`<li>${highlight}</li>`);
		parts.push("</ul>");
	}
	return parts.join("");
}
function arrayToHtmlList(items) {
	if (!items || items.length === 0) return "";
	return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}
function formatLocation(location) {
	if (!location) return "";
	const parts = [];
	if (location.city) parts.push(location.city);
	if (location.region) parts.push(location.region);
	if (location.countryCode) parts.push(location.countryCode);
	return parts.join(", ");
}
function getNetworkIcon(network) {
	if (!network) return "star";
	const networkLower = network.toLowerCase();
	if (networkLower.includes("github")) return "github-logo";
	if (networkLower.includes("linkedin")) return "linkedin-logo";
	if (networkLower.includes("twitter") || networkLower.includes("x.com")) return "twitter-logo";
	if (networkLower.includes("facebook")) return "facebook-logo";
	if (networkLower.includes("instagram")) return "instagram-logo";
	if (networkLower.includes("youtube")) return "youtube-logo";
	if (networkLower.includes("stackoverflow") || networkLower.includes("stack-overflow")) return "stack-overflow-logo";
	if (networkLower.includes("medium")) return "medium-logo";
	if (networkLower.includes("dev.to") || networkLower.includes("devto")) return "code";
	if (networkLower.includes("dribbble")) return "dribbble-logo";
	if (networkLower.includes("behance")) return "behance-logo";
	if (networkLower.includes("gitlab")) return "git-branch";
	if (networkLower.includes("bitbucket")) return "code";
	if (networkLower.includes("codepen")) return "code";
	return "star";
}
function parseLevel(level) {
	if (!level) return 0;
	const levelLower = level.toLowerCase();
	const numeric = parseInt(levelLower, 10);
	if (!Number.isNaN(numeric) && numeric >= 0 && numeric <= 5) return numeric;
	if (levelLower.includes("native") || levelLower.includes("expert") || levelLower.includes("master")) return 5;
	if (levelLower.includes("fluent") || levelLower.includes("advanced") || levelLower.includes("proficient")) return 4;
	if (levelLower.includes("intermediate") || levelLower.includes("conversational")) return 3;
	if (levelLower.includes("beginner") || levelLower.includes("basic") || levelLower.includes("elementary")) return 2;
	if (levelLower.includes("novice")) return 1;
	if (levelLower.includes("c2")) return 5;
	if (levelLower.includes("c1")) return 4;
	if (levelLower.includes("b2")) return 3;
	if (levelLower.includes("b1")) return 2;
	if (levelLower.includes("a2")) return 1;
	if (levelLower.includes("a1")) return 1;
	return 0;
}
function createUrl(url, label) {
	if (!url) return {
		url: "",
		label: ""
	};
	return {
		url,
		label: label || url
	};
}
var JSONResumeImporter = class {
	convert(jsonResume) {
		const result = { ...defaultResumeData };
		if (jsonResume.basics) {
			const basics = jsonResume.basics;
			result.basics = {
				name: basics.name || "",
				headline: basics.label || "",
				email: basics.email || "",
				phone: basics.phone || "",
				location: basics.location ? formatLocation(basics.location) : "",
				website: createUrl(basics.url),
				customFields: []
			};
			if (basics.image) result.picture = {
				...defaultResumeData.picture,
				url: basics.image,
				hidden: false
			};
		}
		if (jsonResume.basics?.summary) result.summary = {
			...defaultResumeData.summary,
			content: `<p>${jsonResume.basics.summary}</p>`,
			hidden: false
		};
		if (jsonResume.work && jsonResume.work.length > 0) result.sections.experience = {
			...defaultResumeData.sections.experience,
			items: jsonResume.work.filter((work) => work.name || work.position).map((work) => ({
				id: generateId(),
				hidden: false,
				company: work.name || "",
				position: work.position || "",
				location: work.location || "",
				period: formatPeriod(work.startDate, work.endDate),
				website: createUrl(work.url),
				roles: [],
				description: toHtmlDescription(work.summary, work.highlights)
			}))
		};
		if (jsonResume.education && jsonResume.education.length > 0) result.sections.education = {
			...defaultResumeData.sections.education,
			items: jsonResume.education.filter((edu) => edu.institution).map((edu) => ({
				id: generateId(),
				hidden: false,
				school: edu.institution || "",
				degree: [edu.studyType, edu.area].filter(Boolean).join(" in ") || "",
				area: edu.area || "",
				grade: edu.score || "",
				location: "",
				period: formatPeriod(edu.startDate, edu.endDate),
				website: createUrl(edu.url),
				description: edu.courses && edu.courses.length > 0 ? arrayToHtmlList(edu.courses) : ""
			}))
		};
		if (jsonResume.projects && jsonResume.projects.length > 0) result.sections.projects = {
			...defaultResumeData.sections.projects,
			items: jsonResume.projects.filter((project) => project.name).map((project) => ({
				id: generateId(),
				hidden: false,
				name: project.name || "",
				period: formatPeriod(project.startDate, project.endDate),
				website: createUrl(project.url),
				description: toHtmlDescription(project.description, project.highlights)
			}))
		};
		if (jsonResume.skills && jsonResume.skills.length > 0) result.sections.skills = {
			...defaultResumeData.sections.skills,
			items: jsonResume.skills.filter((skill) => skill.name).map((skill) => ({
				id: generateId(),
				hidden: false,
				icon: "star",
				name: skill.name || "",
				proficiency: skill.level || "",
				level: parseLevel(skill.level),
				keywords: skill.keywords || []
			}))
		};
		if (jsonResume.languages && jsonResume.languages.length > 0) result.sections.languages = {
			...defaultResumeData.sections.languages,
			items: jsonResume.languages.filter((lang) => lang.language).map((lang) => ({
				id: generateId(),
				hidden: false,
				language: lang.language || "",
				fluency: lang.fluency || "",
				level: parseLevel(lang.fluency)
			}))
		};
		if (jsonResume.interests && jsonResume.interests.length > 0) result.sections.interests = {
			...defaultResumeData.sections.interests,
			items: jsonResume.interests.filter((interest) => interest.name).map((interest) => ({
				id: generateId(),
				hidden: false,
				icon: "star",
				name: interest.name || "",
				keywords: interest.keywords || []
			}))
		};
		if (jsonResume.awards && jsonResume.awards.length > 0) result.sections.awards = {
			...defaultResumeData.sections.awards,
			items: jsonResume.awards.filter((award) => award.title).map((award) => ({
				id: generateId(),
				hidden: false,
				title: award.title || "",
				awarder: award.awarder || "",
				date: formatSingleDate(award.date),
				website: {
					url: "",
					label: ""
				},
				description: award.summary ? `<p>${award.summary}</p>` : ""
			}))
		};
		if (jsonResume.certificates && jsonResume.certificates.length > 0) result.sections.certifications = {
			...defaultResumeData.sections.certifications,
			items: jsonResume.certificates.filter((cert) => cert.name).map((cert) => ({
				id: generateId(),
				hidden: false,
				title: cert.name || "",
				issuer: cert.issuer || "",
				date: formatSingleDate(cert.date),
				website: createUrl(cert.url),
				description: ""
			}))
		};
		if (jsonResume.publications && jsonResume.publications.length > 0) result.sections.publications = {
			...defaultResumeData.sections.publications,
			items: jsonResume.publications.filter((pub) => pub.name).map((pub) => ({
				id: generateId(),
				hidden: false,
				title: pub.name || "",
				publisher: pub.publisher || "",
				date: formatSingleDate(pub.releaseDate),
				website: createUrl(pub.url),
				description: pub.summary ? `<p>${pub.summary}</p>` : ""
			}))
		};
		if (jsonResume.volunteer && jsonResume.volunteer.length > 0) result.sections.volunteer = {
			...defaultResumeData.sections.volunteer,
			items: jsonResume.volunteer.filter((vol) => vol.organization).map((vol) => ({
				id: generateId(),
				hidden: false,
				organization: vol.organization || "",
				location: "",
				period: formatPeriod(vol.startDate, vol.endDate),
				website: createUrl(vol.url),
				description: toHtmlDescription(vol.summary, vol.highlights)
			}))
		};
		if (jsonResume.references && jsonResume.references.length > 0) result.sections.references = {
			...defaultResumeData.sections.references,
			items: jsonResume.references.filter((ref) => ref.name || ref.reference).map((ref) => ({
				id: generateId(),
				hidden: false,
				name: ref.name || "",
				position: "",
				website: {
					url: "",
					label: ""
				},
				phone: "",
				description: ref.reference ? `<p>${ref.reference}</p>` : ""
			}))
		};
		if (jsonResume.basics?.profiles && jsonResume.basics.profiles.length > 0) result.sections.profiles = {
			...defaultResumeData.sections.profiles,
			items: jsonResume.basics.profiles.filter((profile) => profile.network).map((profile) => ({
				id: generateId(),
				hidden: false,
				icon: getNetworkIcon(profile.network),
				network: profile.network || "",
				username: profile.username || "",
				website: createUrl(profile.url, profile.username || profile.network)
			}))
		};
		return resumeDataSchema.parse(result);
	}
	parse(json) {
		try {
			const jsonResume = jsonResumeSchema.parse(JSON.parse(json));
			return this.convert(jsonResume);
		} catch (error) {
			if (error instanceof ZodError) {
				const errors = flattenError(error);
				throw new Error(JSON.stringify(errors));
			}
			throw error;
		}
	}
};
var BUILT_IN_LAYOUT_SECTION_IDS = sectionTypeSchema.options.filter((section) => section !== "cover-letter");
function normalizeBuiltInSectionsInLayout(data) {
	const pages = data.metadata.layout.pages;
	if (pages.length === 0) return {
		...data,
		metadata: {
			...data.metadata,
			layout: {
				...data.metadata.layout,
				pages: [{
					fullWidth: false,
					main: [...BUILT_IN_LAYOUT_SECTION_IDS],
					sidebar: []
				}]
			}
		}
	};
	const existingSectionIds = /* @__PURE__ */ new Set();
	for (const page of pages) {
		for (const sectionId of page.main) existingSectionIds.add(sectionId);
		for (const sectionId of page.sidebar) existingSectionIds.add(sectionId);
	}
	const missingSectionIds = BUILT_IN_LAYOUT_SECTION_IDS.filter((sectionId) => !existingSectionIds.has(sectionId));
	if (missingSectionIds.length === 0) return data;
	const [firstPage, ...restPages] = pages;
	return {
		...data,
		metadata: {
			...data.metadata,
			layout: {
				...data.metadata.layout,
				pages: [{
					...firstPage,
					main: [...firstPage.main, ...missingSectionIds]
				}, ...restPages]
			}
		}
	};
}
var ReactiveResumeJSONImporter = class {
	parse(json) {
		try {
			const parsed = resumeDataSchema.parse(JSON.parse(json));
			return resumeDataSchema.parse(normalizeBuiltInSectionsInLayout(parsed));
		} catch (error) {
			if (error instanceof ZodError) {
				const errors = flattenError(error);
				throw new Error(JSON.stringify(errors));
			}
			throw error;
		}
	}
};
function parseColorString(value) {
	const trimmed = value.trim();
	const rgbMatch = trimmed.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);
	if (rgbMatch) return {
		r: Number.parseInt(rgbMatch[1] ?? "0", 10),
		g: Number.parseInt(rgbMatch[2] ?? "0", 10),
		b: Number.parseInt(rgbMatch[3] ?? "0", 10),
		a: rgbMatch[4] ? Number.parseFloat(rgbMatch[4]) : 1
	};
	if (trimmed.startsWith("#")) {
		const hexMatch = trimmed.match(/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/i);
		if (hexMatch) return {
			r: Number.parseInt(hexMatch[1] ?? "0", 16),
			g: Number.parseInt(hexMatch[2] ?? "0", 16),
			b: Number.parseInt(hexMatch[3] ?? "0", 16),
			a: 1
		};
		const hexMatch3 = trimmed.match(/^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/i);
		if (hexMatch3) return {
			r: Number.parseInt((hexMatch3[1] ?? "0") + (hexMatch3[1] ?? "0"), 16),
			g: Number.parseInt((hexMatch3[2] ?? "0") + (hexMatch3[2] ?? "0"), 16),
			b: Number.parseInt((hexMatch3[3] ?? "0") + (hexMatch3[3] ?? "0"), 16),
			a: 1
		};
	}
	return null;
}
/** biome-ignore-all lint/style/noNonNullAssertion: only used in places where we know the value is not null */
function colorToRgba(color) {
	const parsed = parseColorString(color);
	if (!parsed) return "rgba(0, 0, 0, 1)";
	return `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, ${parsed.a})`;
}
var clamp = (value, min, max) => Math.max(min, Math.min(max, value));
var nonNegative = (value) => Math.max(0, value);
var pxToPt = (px) => px * .75;
var clampPictureSize = (size) => clamp(size, 32, 512);
var clampRotation = (rotation) => clamp(rotation, 0, 360);
var clampAspectRatio = (ratio) => clamp(ratio, .5, 2.5);
var clampBorderRadius = (radius) => clamp(radius, 0, 100);
var clampFontSize = (size) => clamp(size, 6, 24);
var clampLineHeight = (height) => clamp(height, .5, 4);
var clampSidebarWidth = (width) => clamp(width, 10, 50);
var clampLevel = (level) => clamp(level, 0, 5);
var convertAndClampFontSize = (px) => clampFontSize(pxToPt(px));
var isValidEmail = (email) => {
	if (!email) return false;
	return zod_default.email().safeParse(email).success;
};
var sanitizeEmail = (email) => {
	if (!email) return "";
	return isValidEmail(email) ? email : "";
};
var FONT_WEIGHT_MAP = {
	regular: "400",
	italic: "400",
	"100": "100",
	"200": "200",
	"300": "300",
	"400": "400",
	"500": "500",
	"600": "600",
	"700": "700",
	"800": "800",
	"900": "900",
	bold: "700",
	"bold-italic": "700"
};
var convertFontVariantToWeight = (variant, defaultWeight = "400") => FONT_WEIGHT_MAP[variant.toLowerCase()] ?? defaultWeight;
var convertFontVariants = (variants, defaultWeight = "400") => {
	if (!variants || variants.length === 0) return [defaultWeight];
	return variants.map((v) => convertFontVariantToWeight(v, defaultWeight));
};
var convertFontVariantsForHeading = (variants) => {
	const filtered = convertFontVariants(variants, "600").filter((w) => Number.parseInt(w, 10) >= 600);
	return filtered.length > 0 ? filtered : ["600"];
};
var transformLayoutSectionId = (id) => {
	if (id.startsWith("custom.")) return id.slice(7);
	return id;
};
var transformLayoutColumn = (column) => {
	return column.filter((id) => id !== "summary").map(transformLayoutSectionId);
};
var ReactiveResumeV4JSONImporter = class {
	parse(json) {
		try {
			const v4Data = JSON.parse(json);
			const transformed = {
				picture: {
					hidden: v4Data.basics.picture?.effects?.hidden ?? false,
					url: v4Data.basics.picture?.url ?? "",
					size: clampPictureSize(v4Data.basics.picture?.size ?? 80),
					rotation: clampRotation(0),
					aspectRatio: clampAspectRatio(v4Data.basics.picture?.aspectRatio ?? 1),
					borderRadius: clampBorderRadius(v4Data.basics.picture?.borderRadius ?? 0),
					borderColor: v4Data.basics.picture?.effects?.border ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
					borderWidth: nonNegative(v4Data.basics.picture?.effects?.border ? 1 : 0),
					shadowColor: "rgba(0, 0, 0, 0.5)",
					shadowWidth: nonNegative(0)
				},
				basics: {
					name: v4Data.basics.name ?? "",
					headline: v4Data.basics.headline ?? "",
					email: sanitizeEmail(v4Data.basics.email),
					phone: v4Data.basics.phone ?? "",
					location: v4Data.basics.location ?? "",
					website: {
						url: v4Data.basics.url?.href ?? "",
						label: v4Data.basics.url?.label ?? ""
					},
					customFields: (v4Data.basics.customFields ?? []).map((field) => ({
						id: field.id ?? generateId(),
						icon: field.icon ?? "",
						text: field.text ?? "",
						link: ""
					}))
				},
				summary: {
					title: v4Data.sections.summary?.name ?? "",
					columns: v4Data.sections.summary?.columns ?? 1,
					hidden: !(v4Data.sections.summary?.visible ?? true),
					content: v4Data.sections.summary?.content ?? ""
				},
				sections: {
					profiles: {
						title: v4Data.sections.profiles?.name ?? "",
						columns: v4Data.sections.profiles?.columns ?? 1,
						hidden: !(v4Data.sections.profiles?.visible ?? true),
						items: (v4Data.sections.profiles?.items ?? []).filter((item) => item.network && item.network.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							icon: item.icon ?? "",
							network: item.network,
							username: item.username ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							}
						}))
					},
					experience: {
						title: v4Data.sections.experience?.name ?? "",
						columns: v4Data.sections.experience?.columns ?? 1,
						hidden: !(v4Data.sections.experience?.visible ?? true),
						items: (v4Data.sections.experience?.items ?? []).filter((item) => item.company && item.company.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							company: item.company,
							position: item.position ?? "",
							location: item.location ?? "",
							period: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							roles: [],
							description: item.summary ?? ""
						}))
					},
					education: {
						title: v4Data.sections.education?.name ?? "",
						columns: v4Data.sections.education?.columns ?? 1,
						hidden: !(v4Data.sections.education?.visible ?? true),
						items: (v4Data.sections.education?.items ?? []).filter((item) => item.institution && item.institution.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							school: item.institution,
							degree: item.studyType ?? "",
							area: item.area ?? "",
							grade: item.score ?? "",
							location: "",
							period: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? ""
						}))
					},
					projects: {
						title: v4Data.sections.projects?.name ?? "",
						columns: v4Data.sections.projects?.columns ?? 1,
						hidden: !(v4Data.sections.projects?.visible ?? true),
						items: (v4Data.sections.projects?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							name: item.name,
							period: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? item.description ?? ""
						}))
					},
					skills: {
						title: v4Data.sections.skills?.name ?? "",
						columns: v4Data.sections.skills?.columns ?? 1,
						hidden: !(v4Data.sections.skills?.visible ?? true),
						items: (v4Data.sections.skills?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							icon: "",
							name: item.name,
							proficiency: item.description ?? "",
							level: clampLevel(item.level ?? 0),
							keywords: item.keywords ?? []
						}))
					},
					languages: {
						title: v4Data.sections.languages?.name ?? "",
						columns: v4Data.sections.languages?.columns ?? 1,
						hidden: !(v4Data.sections.languages?.visible ?? true),
						items: (v4Data.sections.languages?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							language: item.name,
							fluency: item.description ?? "",
							level: clampLevel(item.level ?? 0)
						}))
					},
					interests: {
						title: v4Data.sections.interests?.name ?? "",
						columns: v4Data.sections.interests?.columns ?? 1,
						hidden: !(v4Data.sections.interests?.visible ?? true),
						items: (v4Data.sections.interests?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							icon: "",
							name: item.name,
							keywords: item.keywords ?? []
						}))
					},
					awards: {
						title: v4Data.sections.awards?.name ?? "",
						columns: v4Data.sections.awards?.columns ?? 1,
						hidden: !(v4Data.sections.awards?.visible ?? true),
						items: (v4Data.sections.awards?.items ?? []).filter((item) => item.title && item.title.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							title: item.title,
							awarder: item.awarder ?? "",
							date: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? ""
						}))
					},
					certifications: {
						title: v4Data.sections.certifications?.name ?? "",
						columns: v4Data.sections.certifications?.columns ?? 1,
						hidden: !(v4Data.sections.certifications?.visible ?? true),
						items: (v4Data.sections.certifications?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							title: item.name,
							issuer: item.issuer ?? "",
							date: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? ""
						}))
					},
					publications: {
						title: v4Data.sections.publications?.name ?? "",
						columns: v4Data.sections.publications?.columns ?? 1,
						hidden: !(v4Data.sections.publications?.visible ?? true),
						items: (v4Data.sections.publications?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							title: item.name,
							publisher: item.publisher ?? "",
							date: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? ""
						}))
					},
					volunteer: {
						title: v4Data.sections.volunteer?.name ?? "",
						columns: v4Data.sections.volunteer?.columns ?? 1,
						hidden: !(v4Data.sections.volunteer?.visible ?? true),
						items: (v4Data.sections.volunteer?.items ?? []).filter((item) => item.organization && item.organization.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							organization: item.organization,
							location: item.location ?? "",
							period: item.date ?? "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? ""
						}))
					},
					references: {
						title: v4Data.sections.references?.name ?? "",
						columns: v4Data.sections.references?.columns ?? 1,
						hidden: !(v4Data.sections.references?.visible ?? true),
						items: (v4Data.sections.references?.items ?? []).filter((item) => item.name && item.name.length > 0).map((item) => ({
							id: item.id ?? generateId(),
							hidden: !(item.visible ?? true),
							name: item.name,
							position: item.description ?? "",
							phone: "",
							website: {
								url: item.url?.href ?? "",
								label: item.url?.label ?? ""
							},
							description: item.summary ?? ""
						}))
					}
				},
				customSections: Object.entries(v4Data.sections.custom ?? {}).map(([sectionId, section]) => ({
					id: section.id || sectionId,
					title: section.name ?? "",
					type: "experience",
					columns: section.columns ?? 1,
					hidden: !(section.visible ?? true),
					items: section.items.filter((item) => item.visible !== false).map((item, index) => ({
						id: item.id || generateId(),
						hidden: !item.visible,
						company: item.name?.trim() || `#${index + 1}`,
						position: item.description ?? "",
						location: item.location ?? "",
						period: item.date ?? "",
						website: {
							url: item.url?.href ?? "",
							label: item.url?.label ?? ""
						},
						roles: [],
						description: item.summary ?? ""
					}))
				})),
				metadata: {
					template: templateSchema.safeParse(v4Data.metadata.template).success ? v4Data.metadata.template : "onyx",
					layout: {
						sidebarWidth: clampSidebarWidth(35),
						pages: (v4Data.metadata.layout ?? []).map((page) => {
							const main = transformLayoutColumn(page[0] ?? []);
							const sidebar = transformLayoutColumn(page[1] ?? []);
							return {
								fullWidth: sidebar.length === 0,
								main,
								sidebar
							};
						})
					},
					css: {
						enabled: v4Data.metadata.css?.visible ?? false,
						value: v4Data.metadata.css?.value ?? ""
					},
					page: {
						gapX: nonNegative(4),
						gapY: nonNegative(6),
						marginX: nonNegative(v4Data.metadata.page?.margin ?? 14),
						marginY: nonNegative(v4Data.metadata.page?.margin ?? 14),
						format: v4Data.metadata.page?.format ?? "a4",
						locale: "en-US",
						hideIcons: v4Data.metadata.typography?.hideIcons ?? false
					},
					design: {
						colors: {
							primary: v4Data.metadata.theme?.primary ? colorToRgba(v4Data.metadata.theme.primary) : "rgba(220, 38, 38, 1)",
							text: v4Data.metadata.theme?.text ? colorToRgba(v4Data.metadata.theme.text) : "rgba(0, 0, 0, 1)",
							background: v4Data.metadata.theme?.background ? colorToRgba(v4Data.metadata.theme.background) : "rgba(255, 255, 255, 1)"
						},
						level: {
							icon: "star",
							type: "circle"
						}
					},
					typography: {
						body: {
							fontFamily: v4Data.metadata.typography?.font?.family ?? "IBM Plex Serif",
							fontWeights: convertFontVariants(v4Data.metadata.typography?.font?.variants),
							fontSize: convertAndClampFontSize(v4Data.metadata.typography?.font?.size ?? 14.67),
							lineHeight: clampLineHeight(v4Data.metadata.typography?.lineHeight ?? 1.5)
						},
						heading: {
							fontFamily: v4Data.metadata.typography?.font?.family ?? "IBM Plex Serif",
							fontWeights: convertFontVariantsForHeading(v4Data.metadata.typography?.font?.variants),
							fontSize: clampFontSize(convertAndClampFontSize(v4Data.metadata.typography?.font?.size ?? 14.67) + 3),
							lineHeight: clampLineHeight(v4Data.metadata.typography?.lineHeight ?? 1.5)
						}
					},
					notes: v4Data.metadata.notes ?? ""
				}
			};
			if (v4Data.sections.summary?.visible && v4Data.sections.summary?.content) {
				if (transformed.metadata.layout.pages.length > 0) transformed.metadata.layout.pages[0].main.unshift("summary");
			}
			return resumeDataSchema.parse(transformed);
		} catch (error) {
			if (error instanceof ZodError) {
				const errors = flattenError(error);
				throw new Error(JSON.stringify(errors));
			}
			throw error;
		}
	}
};
var formSchema$15 = zod_default.discriminatedUnion("type", [
	zod_default.object({ type: zod_default.literal("") }),
	zod_default.object({
		type: zod_default.literal("pdf"),
		file: zod_default.instanceof(File).refine((file) => file.type === "application/pdf", { message: "File must be a PDF" })
	}),
	zod_default.object({
		type: zod_default.literal("docx"),
		file: zod_default.instanceof(File).refine((file) => file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document", { message: "File must be a Microsoft Word document" })
	}),
	zod_default.object({
		type: zod_default.literal("reactive-resume-json"),
		file: zod_default.instanceof(File).refine((file) => file.type === "application/json", { message: "File must be a JSON file" })
	}),
	zod_default.object({
		type: zod_default.literal("reactive-resume-v4-json"),
		file: zod_default.instanceof(File).refine((file) => file.type === "application/json", { message: "File must be a JSON file" })
	}),
	zod_default.object({
		type: zod_default.literal("json-resume-json"),
		file: zod_default.instanceof(File).refine((file) => file.type === "application/json", { message: "File must be a JSON file" })
	})
]);
function fileToBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result;
			resolve(result.split(",")[1]);
		};
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}
function ImportResumeDialog(_) {
	const navigate = useNavigate();
	const { enabled: isAIEnabled, provider, model, apiKey, baseURL } = useAIStore();
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const prevTypeRef = (0, import_react.useRef)("");
	const inputRef = (0, import_react.useRef)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const { mutateAsync: importResume } = useMutation(orpc.resume.import.mutationOptions());
	const form = useForm({
		resolver: a(formSchema$15),
		defaultValues: { type: "" }
	});
	const type = useWatch({
		control: form.control,
		name: "type"
	});
	(0, import_react.useEffect)(() => {
		if (prevTypeRef.current === type) return;
		prevTypeRef.current = type;
		form.resetField("file");
	}, [form.resetField, type]);
	const onSelectFile = () => {
		if (!inputRef.current) return;
		inputRef.current.click();
	};
	const onUploadFile = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		form.setValue("file", file, { shouldDirty: true });
	};
	const { blockEvents } = useFormBlocker(form);
	const onSubmit = async (values) => {
		if (values.type === "") return;
		setIsLoading(true);
		const toastId = toast.loading(i18n._({ id: "PLI0By" }), { description: i18n._({ id: "qMiLNT" }) });
		try {
			let data;
			if (values.type === "json-resume-json") {
				const json = await values.file.text();
				data = new JSONResumeImporter().parse(json);
			}
			if (values.type === "reactive-resume-json") {
				const json = await values.file.text();
				data = new ReactiveResumeJSONImporter().parse(json);
			}
			if (values.type === "reactive-resume-v4-json") {
				const json = await values.file.text();
				data = new ReactiveResumeV4JSONImporter().parse(json);
			}
			if (values.type === "pdf") {
				if (!isAIEnabled) throw new Error(i18n._({ id: "H5xW1Y" }));
				const base64 = await fileToBase64(values.file);
				data = await client.ai.parsePdf({
					provider,
					model,
					apiKey,
					baseURL,
					file: {
						name: values.file.name,
						data: base64
					}
				});
			}
			if (values.type === "docx") {
				if (!isAIEnabled) throw new Error(i18n._({ id: "H5xW1Y" }));
				const base64 = await fileToBase64(values.file);
				const mediaType = values.file.type === "application/msword" ? "application/msword" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
				data = await client.ai.parseDocx({
					provider,
					model,
					apiKey,
					baseURL,
					mediaType,
					file: {
						name: values.file.name,
						data: base64
					}
				});
			}
			if (!data) throw new Error("No data was returned from the AI provider.");
			const id = await importResume({ data });
			toast.success(i18n._({ id: "9GT8s1" }), {
				id: toastId,
				description: null
			});
			closeDialog();
			navigate({
				to: `/builder/$resumeId`,
				params: { resumeId: id }
			});
		} catch (error) {
			if (error instanceof Error) toast.error(error.message, {
				id: toastId,
				description: null
			});
			else toast.error(i18n._({ id: "f8/elA" }), {
				id: toastId,
				description: null
			});
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$11, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "K03OvA" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "nCHk+K" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "type",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "+zy2Nq" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combobox$1, {
								showClear: false,
								value: field.value,
								onValueChange: field.onChange,
								options: [
									{
										value: "reactive-resume-json",
										label: "Reactive Resume (JSON)"
									},
									{
										value: "reactive-resume-v4-json",
										label: "Reactive Resume v4 (JSON)"
									},
									{
										value: "json-resume-json",
										label: "JSON Resume"
									},
									{
										value: "pdf",
										label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-x-2",
											children: ["PDF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: i18n._({ id: "jsQZMk" }) })]
										})
									},
									{
										value: "docx",
										label: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-x-2",
											children: ["Microsoft Word ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: i18n._({ id: "jsQZMk" }) })]
										})
									}
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "file",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
							className: cn(!type && "hidden"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								type: "file",
								className: "hidden",
								ref: inputRef,
								onChange: onUploadFile
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "outline",
								className: "h-auto w-full flex-col border-dashed py-8 font-normal",
								onClick: onSelectFile,
								children: field.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$13, {
									weight: "thin",
									size: 32
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: field.value.name })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$12, {
									weight: "thin",
									size: 32
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "P27Jj3" })] })
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})]
						})
					}, type),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						type: "submit",
						disabled: !type || isLoading,
						children: [isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {}) : null, isLoading ? i18n._({ id: "hdsaJo" }) : i18n._({ id: "l3s5ri" })]
					}) })
				]
			})
		})]
	});
}
var formSchema$14 = awardItemSchema;
function CreateAwardDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$14),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			title: data?.item?.title ?? "",
			awarder: data?.item?.awarder ?? "",
			date: data?.item?.date ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.awards.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "bvAt4a" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateAwardDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$14),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			title: data.item.title,
			awarder: data.item.awarder,
			date: data.item.date,
			website: data.item.website,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.awards.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.awards.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "kKBgmw" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function AwardForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "title",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "MHrjPM" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "awarder",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "I+gIeY" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "date",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "mYGY3B" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
					...field,
					value: field.value,
					onChange: field.onChange,
					hideLabelButton: form.watch("options.showLinkInTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$13 = certificationItemSchema;
function CreateCertificationDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$13),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			title: data?.item?.title ?? "",
			issuer: data?.item?.issuer ?? "",
			date: data?.item?.date ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.certifications.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "8FwfO5" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateCertificationDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$13),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			title: data.item.title,
			issuer: data.item.issuer,
			date: data.item.date,
			website: data.item.website,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.certifications.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.certifications.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7BMaMX" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function CertificationForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "title",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "MHrjPM" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "issuer",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "x2A79O" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "date",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "mYGY3B" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
					...field,
					value: field.value,
					onChange: field.onChange,
					hideLabelButton: form.watch("options.showLinkInTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$12 = coverLetterItemSchema;
function CreateCoverLetterDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$12),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			recipient: data?.item?.recipient ?? "",
			content: data?.item?.content ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "8HGzbV" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverLetterForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					onClick: requestClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: form.formState.isSubmitting,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
				})] })]
			})
		})]
	});
}
function UpdateCoverLetterDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$12),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			recipient: data.item.recipient,
			content: data.item.content
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Fj52/O" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverLetterForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					onClick: requestClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: form.formState.isSubmitting,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
				})] })]
			})
		})]
	});
}
function CoverLetterForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
		control: form.control,
		name: "recipient",
		render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "I3QpvQ" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
				...field,
				value: field.value,
				onChange: field.onChange
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
		control: form.control,
		name: "content",
		render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "4b3oEV" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
				...field,
				value: field.value,
				onChange: field.onChange
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
		] })
	})] });
}
var formSchema$11 = customSectionSchema;
var SECTION_TYPE_OPTIONS = [
	{
		value: "summary",
		label: { id: "dXoieq" }
	},
	{
		value: "experience",
		label: { id: "bKBhgb" }
	},
	{
		value: "education",
		label: { id: "aqxYLv" }
	},
	{
		value: "projects",
		label: { id: "+0B+ue" }
	},
	{
		value: "profiles",
		label: { id: "vrQQgz" }
	},
	{
		value: "skills",
		label: { id: "PCSkw2" }
	},
	{
		value: "languages",
		label: { id: "GAmD3h" }
	},
	{
		value: "interests",
		label: { id: "65VN7K" }
	},
	{
		value: "awards",
		label: { id: "oosprE" }
	},
	{
		value: "certifications",
		label: { id: "DqE4jO" }
	},
	{
		value: "publications",
		label: { id: "XHw75Y" }
	},
	{
		value: "volunteer",
		label: { id: "ylsyyq" }
	},
	{
		value: "references",
		label: { id: "9aloPG" }
	},
	{
		value: "cover-letter",
		label: { id: "Z6ATpr" }
	}
];
function CreateCustomSectionDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$11),
		defaultValues: {
			id: generateId(),
			title: data?.title ?? "",
			type: data?.type ?? "experience",
			columns: data?.columns ?? 1,
			hidden: data?.hidden ?? false,
			items: data?.items ?? []
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			draft.customSections.push(formData);
			const lastPageIndex = draft.metadata.layout.pages.length - 1;
			if (lastPageIndex < 0) return;
			draft.metadata.layout.pages[lastPageIndex].main.push(formData.id);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "cIqpZO" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSectionForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateCustomSectionDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$11),
		defaultValues: {
			id: data.id,
			title: data.title,
			type: data.type,
			columns: data.columns,
			hidden: data.hidden,
			items: data.items
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			const index = draft.customSections.findIndex((item) => item.id === formData.id);
			if (index === -1) return;
			draft.customSections[index] = formData;
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "1nhf0G" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSectionForm, { isUpdate: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function CustomSectionForm({ isUpdate = false }) {
	const { i18n } = useLingui();
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
		control: form.control,
		name: "title",
		render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
			className: "sm:col-span-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "MHrjPM" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
		control: form.control,
		name: "type",
		render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
			className: "sm:col-span-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "2IIOQ3" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combobox$1, {
					...field,
					value: field.value,
					disabled: isUpdate,
					onValueChange: field.onChange,
					options: SECTION_TYPE_OPTIONS.map((option) => ({
						value: option.value,
						label: i18n.t(option.label)
					}))
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			]
		})
	})] });
}
var formSchema$10 = educationItemSchema;
function CreateEducationDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$10),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			school: data?.item?.school ?? "",
			degree: data?.item?.degree ?? "",
			area: data?.item?.area ?? "",
			grade: data?.item?.grade ?? "",
			location: data?.item?.location ?? "",
			period: data?.item?.period ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.education.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dYLm0B" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateEducationDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$10),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			school: data.item.school,
			degree: data.item.degree,
			area: data.item.area,
			grade: data.item.grade,
			location: data.item.location,
			period: data.item.period,
			website: data.item.website,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.education.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.education.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "RkEr9m" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function EducationForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "school",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "77D4QL" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "degree",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "DFxAFd" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "area",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/1xbV1" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "grade",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ZtKYrn" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "location",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "wJijgU" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "period",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NtQvjo" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
						...field,
						value: field.value,
						onChange: field.onChange,
						hideLabelButton: form.watch("options.showLinkInTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2 sm:col-span-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$9 = experienceItemSchema;
function CreateExperienceDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$9),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			company: data?.item?.company ?? "",
			position: data?.item?.position ?? "",
			location: data?.item?.location ?? "",
			period: data?.item?.period ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? "",
			roles: data?.item?.roles ?? []
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.experience.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "nQj0pC" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateExperienceDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$9),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			company: data.item.company,
			position: data.item.position,
			location: data.item.location,
			period: data.item.period,
			website: data.item.website,
			description: data.item.description,
			roles: data.item.roles ?? []
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.experience.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.experience.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "5JwNjE" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function RoleFields({ role, index, onRemove }) {
	const form = useFormContext();
	const controls = useDragControls();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReorderItem, {
		value: role,
		dragListener: false,
		dragControls: controls,
		initial: {
			opacity: 1,
			y: -10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -10
		},
		className: "relative grid rounded border sm:col-span-full sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-full flex items-center justify-between rounded-t bg-border/30 px-2 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				size: "sm",
				variant: "ghost",
				className: "cursor-grab touch-none",
				onPointerDown: (e) => {
					e.preventDefault();
					controls.start(e);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$13, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "toJdZA" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				size: "sm",
				variant: "ghost",
				className: "text-destructive hover:text-destructive",
				onClick: onRemove,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$14, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "t/YqKh" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 p-4 sm:col-span-full sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					control: form.control,
					name: `roles.${index}.position`,
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "p/78dY" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					control: form.control,
					name: `roles.${index}.period`,
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NtQvjo" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					control: form.control,
					name: `roles.${index}.description`,
					render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
						className: "sm:col-span-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
								...field,
								value: field.value,
								onChange: field.onChange
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						]
					})
				})
			]
		})]
	});
}
function ExperienceForm() {
	const form = useFormContext();
	const { fields, append, remove } = useFieldArray({
		name: "roles",
		keyName: "fieldId",
		control: form.control
	});
	const hasRoles = (0, import_react.useMemo)(() => fields.length > 0, [fields]);
	const handleReorderRoles = (newOrder) => {
		form.setValue("roles", newOrder);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "company",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7i8j3G" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "position",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: hasRoles ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IdRsF1" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "p/78dY" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					...field,
					placeholder: hasRoles ? "e.g. Software Engineer → Senior Engineer" : ""
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "location",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "wJijgU" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "period",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: hasRoles ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "UMEePe" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NtQvjo" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					...field,
					placeholder: hasRoles ? "e.g. 2018 – Present" : ""
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
						...field,
						value: field.value,
						onChange: field.onChange,
						hideLabelButton: form.watch("options.showLinkInTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2 sm:col-span-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" }) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between sm:col-span-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Ry+icE" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oP6ZDJ" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				size: "sm",
				variant: "outline",
				className: "shrink-0",
				onClick: () => append({
					id: generateId(),
					position: "",
					period: "",
					description: ""
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NuUsCM" })]
			})]
		}),
		hasRoles && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReorderGroup, {
			axis: "y",
			values: fields,
			onReorder: handleReorderRoles,
			className: "flex flex-col gap-4 sm:col-span-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleFields, {
				role: fields[index],
				index,
				onRemove: () => remove(index)
			}, field.id)) })
		}),
		!hasRoles && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$8 = interestItemSchema;
function CreateInterestDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$8),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			icon: data?.item?.icon ?? "acorn",
			name: data?.item?.name ?? "",
			keywords: data?.item?.keywords ?? []
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.interests.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7CeRuK" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InterestForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateInterestDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$8),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			icon: data.item.icon,
			name: data.item.name,
			keywords: data.item.keywords
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.interests.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.interests.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "69J3xt" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InterestForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function InterestForm() {
	const form = useFormContext();
	const nameState = useFormState({
		control: form.control,
		name: "name"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("col-span-full flex items-end", (0, import_react.useMemo)(() => {
			return nameState.errors && Object.keys(nameState.errors).length > 0;
		}, [nameState]) && "items-center"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "icon",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItem, {
				className: "shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPicker, {
					...field,
					popoverProps: { modal: true },
					className: "rounded-r-none! border-e-0!"
				}) })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "name",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
						className: "rounded-l-none!",
						...field
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
		control: form.control,
		name: "keywords",
		render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
			className: "col-span-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/n/HCO" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipInput, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			]
		})
	})] });
}
var formSchema$7 = languageItemSchema;
function CreateLanguageDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$7),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			language: data?.item?.language ?? "",
			fluency: data?.item?.fluency ?? "",
			level: data?.item?.level ?? 0
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.languages.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "bo35J6" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateLanguageDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$7),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			language: data.item.language,
			fluency: data.item.fluency,
			level: data.item.level
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.languages.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.languages.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "5AbKSS" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function LanguageForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "language",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vXIe7J" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "fluency",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "VELj6Q" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "level",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "gap-4 sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oCHfGC" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider$1, {
						min: 0,
						max: 5,
						step: 1,
						value: [field.value],
						onValueChange: (value) => field.onChange(Array.isArray(value) ? value[0] : value)
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: Number(field.value) === 0 ? i18n._({ id: "D+zLDD" }) : `${field.value} / 5` })
				]
			})
		})
	] });
}
var formSchema$6 = profileItemSchema;
function CreateProfileDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$6),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			icon: data?.item?.icon ?? "acorn",
			network: data?.item?.network ?? "",
			username: data?.item?.username ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			}
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.profiles.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "n2Ez/o" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateProfileDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$6),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			icon: data.item.icon,
			network: data.item.network,
			username: data.item.username,
			website: data.item.website
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.profiles.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.profiles.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "SsCM64" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function ProfileForm() {
	const form = useFormContext();
	const networkState = useFormState({
		control: form.control,
		name: "network"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex items-end", (0, import_react.useMemo)(() => {
				return networkState.errors && Object.keys(networkState.errors).length > 0;
			}, [networkState]) && "items-center"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				control: form.control,
				name: "icon",
				render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItem, {
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPicker, {
						...field,
						popoverProps: { modal: true },
						className: "rounded-r-none! border-e-0!"
					}) })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				control: form.control,
				name: "network",
				render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
					className: "flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "OR475H" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							className: "rounded-l-none!",
							...field
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "username",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7sNhEz" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, {
					align: "inline-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t$1, {}) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupInput, { ...field }) })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
						...field,
						value: field.value,
						onChange: field.onChange,
						hideLabelButton: form.watch("options.showLinkInTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2 sm:col-span-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		})
	] });
}
var formSchema$5 = projectItemSchema;
function CreateProjectDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$5),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			name: data?.item?.name ?? "",
			period: data?.item?.period ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.projects.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "HSIqMX" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateProjectDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$5),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			name: data.item.name,
			period: data.item.period,
			website: data.item.website,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.projects.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.projects.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "XQDpTj" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function ProjectForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "name",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "period",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NtQvjo" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
						...field,
						value: field.value,
						onChange: field.onChange,
						hideLabelButton: form.watch("options.showLinkInTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2 sm:col-span-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$4 = publicationItemSchema;
function CreatePublicationDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$4),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			title: data?.item?.title ?? "",
			publisher: data?.item?.publisher ?? "",
			date: data?.item?.date ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.publications.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "M5ssIO" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdatePublicationDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$4),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			title: data.item.title,
			publisher: data.item.publisher,
			date: data.item.date,
			website: data.item.website,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.publications.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.publications.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "wpFMlV" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicationForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function PublicationForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "title",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "MHrjPM" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "publisher",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/+NDbp" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "date",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "mYGY3B" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
					...field,
					value: field.value,
					onChange: field.onChange,
					hideLabelButton: form.watch("options.showLinkInTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$3 = referenceItemSchema;
function CreateReferenceDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$3),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			name: data?.item?.name ?? "",
			position: data?.item?.position ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			phone: data?.item?.phone ?? "",
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.references.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7q6Gyw" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateReferenceDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$3),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			name: data.item.name,
			position: data.item.position,
			website: data.item.website,
			phone: data.item.phone,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.references.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.references.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nc1Z07" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function ReferenceForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "name",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "position",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "p/78dY" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "phone",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "zmwvG2" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
					...field,
					value: field.value,
					onChange: field.onChange,
					hideLabelButton: form.watch("options.showLinkInTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$2 = skillItemSchema;
function CreateSkillDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$2),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			icon: data?.item?.icon ?? "acorn",
			name: data?.item?.name ?? "",
			proficiency: data?.item?.proficiency ?? "",
			level: data?.item?.level ?? 0,
			keywords: data?.item?.keywords ?? []
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.skills.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "kcOHdy" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateSkillDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$2),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			icon: data.item.icon,
			name: data.item.name,
			proficiency: data.item.proficiency,
			level: data.item.level,
			keywords: data.item.keywords
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.skills.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.skills.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Qz33yd" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function SkillForm() {
	const form = useFormContext();
	const nameState = useFormState({
		control: form.control,
		name: "name"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex items-end", (0, import_react.useMemo)(() => {
				return nameState.errors && Object.keys(nameState.errors).length > 0;
			}, [nameState]) && "items-center"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				control: form.control,
				name: "icon",
				render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItem, {
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPicker, {
						...field,
						popoverProps: { modal: true },
						className: "rounded-r-none! border-e-0!"
					}) })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				control: form.control,
				name: "name",
				render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
					className: "flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							className: "rounded-l-none!",
							...field
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "proficiency",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ahatHh" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "level",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "gap-4 sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oCHfGC" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider$1, {
						min: 0,
						max: 5,
						step: 1,
						value: [field.value],
						onValueChange: (value) => field.onChange(Array.isArray(value) ? value[0] : value)
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: Number(field.value) === 0 ? i18n._({ id: "D+zLDD" }) : `${field.value} / 5` })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "keywords",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/n/HCO" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipInput, { ...field }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
var formSchema$1 = summaryItemSchema;
function CreateSummaryItemDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$1),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			content: data?.item?.content ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "rgb6b/" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItemForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					onClick: requestClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: form.formState.isSubmitting,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
				})] })]
			})
		})]
	});
}
function UpdateSummaryItemDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeStore = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema$1),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			content: data.item.content
		}
	});
	const onSubmit = (formData) => {
		updateResumeStore((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/Fr4Xg" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryItemForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					onClick: requestClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: form.formState.isSubmitting,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
				})] })]
			})
		})]
	});
}
function SummaryItemForm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
		control: useFormContext().control,
		name: "content",
		render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "4b3oEV" }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
				...field,
				value: field.value,
				onChange: field.onChange
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
		] })
	});
}
var formSchema = volunteerItemSchema;
function CreateVolunteerDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			id: generateId(),
			hidden: data?.item?.hidden ?? false,
			options: data?.item?.options ?? { showLinkInTitle: false },
			organization: data?.item?.organization ?? "",
			location: data?.item?.location ?? "",
			period: data?.item?.period ?? "",
			website: data?.item?.website ?? {
				url: "",
				label: ""
			},
			description: data?.item?.description ?? ""
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (section) section.items.push(formData);
			} else draft.sections.volunteer.items.push(formData);
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$5, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IHQBV5" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hYgDIe" })
					})]
				})]
			})
		})]
	});
}
function UpdateVolunteerDialog({ data }) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			id: data.item.id,
			hidden: data.item.hidden,
			options: data.item.options ?? { showLinkInTitle: false },
			organization: data.item.organization,
			location: data.item.location,
			period: data.item.period,
			website: data.item.website,
			description: data.item.description
		}
	});
	const onSubmit = (formData) => {
		updateResumeData((draft) => {
			if (data?.customSectionId) {
				const section = draft.customSections.find((s) => s.id === data.customSectionId);
				if (!section) return;
				const index = section.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) section.items[index] = formData;
			} else {
				const index = draft.sections.volunteer.items.findIndex((item) => item.id === formData.id);
				if (index !== -1) draft.sections.volunteer.items[index] = formData;
			}
		});
		closeDialog();
	};
	const { blockEvents, requestClose } = useFormBlocker(form);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		...blockEvents,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
			className: "flex items-center gap-x-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "K8trJR" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: form.handleSubmit(onSubmit),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "sm:col-span-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						onClick: requestClose,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "dEgA5A" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: form.formState.isSubmitting,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "IUwGEM" })
					})]
				})]
			})
		})]
	});
}
function VolunteerForm() {
	const form = useFormContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "organization",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "ucgZ0o" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "location",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "wJijgU" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "period",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NtQvjo" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, { ...field }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "website",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "On0aF2" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(URLInput, {
					...field,
					value: field.value,
					onChange: field.onChange,
					hideLabelButton: form.watch("options.showLinkInTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "options.showLinkInTitle",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "flex items-center gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
					checked: field.value,
					onCheckedChange: field.onChange
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, {
					className: "mt-0!",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "vdCB9I" })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
			control: form.control,
			name: "description",
			render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, {
				className: "sm:col-span-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Nu4oKW" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichInput, {
						...field,
						value: field.value,
						onChange: field.onChange
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				]
			})
		})
	] });
}
function HoverCard({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCardRoot, {
		"data-slot": "hover-card",
		...props
	});
}
function HoverCardTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCardTrigger, {
		"data-slot": "hover-card-trigger",
		...props
	});
}
function HoverCardContent({ className, side = "bottom", sideOffset = 4, align = "center", alignOffset = 4, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCardPortal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCardPositioner, {
			align,
			alignOffset,
			side,
			sideOffset,
			className: "isolate z-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCardPopup, {
				"data-slot": "hover-card-content",
				className: cn("data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:fade-in-0 data-open:zoom-in-95 data-closed:fade-out-0 data-closed:zoom-out-95 z-50 w-64 origin-(--transform-origin) rounded-lg bg-popover p-4 text-popover-foreground text-sm shadow-md outline-hidden ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in", className),
				...props
			})
		})
	});
}
function TemplateGalleryDialog(_) {
	const closeDialog = useDialogStore((state) => state.closeDialog);
	const selectedTemplate = useResumeStore((state) => state.resume.data.metadata.template);
	const updateResumeData = useResumeStore((state) => state.updateResumeData);
	function onSelectTemplate(template) {
		updateResumeData((draft) => {
			draft.metadata.template = template;
		});
		closeDialog();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: "lg:max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
			className: "gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "flex items-center gap-3 text-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e$14, { size: 20 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "i8f34V" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "leading-relaxed",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "0ktPwY" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea$1, {
			className: "max-h-[80svh] pb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4",
				children: Object.entries(templates).map(([template, metadata]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateCard, {
					metadata,
					id: template,
					isActive: template === selectedTemplate,
					onSelect: onSelectTemplate
				}, template))
			})
		})]
	});
}
function TemplateCard({ id, metadata, isActive, onSelect }) {
	const { i18n } = useLingui();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CometCard, {
		translateDepth: 3,
		rotateDepth: 6,
		glareOpacity: 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				tabIndex: -1,
				onClick: () => onSelect(id),
				className: cn("relative block aspect-page size-full cursor-pointer overflow-hidden rounded-md bg-popover outline-none", isActive && "ring-2 ring-ring ring-offset-4 ring-offset-background"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: metadata.imageUrl,
					alt: metadata.name,
					className: "size-full object-cover"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold leading-loose tracking-tight",
					children: metadata.name
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCardContent, {
				side: "right",
				sideOffset: -32,
				align: "start",
				alignOffset: 32,
				className: "pointer-events-none! flex w-80 flex-col justify-between space-y-6 rounded-md bg-background/80 p-4 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg",
						children: metadata.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: i18n.t(metadata.description)
					})]
				}), metadata.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: metadata.tags.sort((a, b) => a.localeCompare(b)).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "default",
						children: tag
					}, tag))
				})]
			})
		]
	}) });
}
function DialogManager() {
	const { open, activeDialog, onOpenChange } = useDialogStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: M(activeDialog).with({ type: "auth.change-password" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangePasswordDialog, {})).with({ type: "auth.two-factor.enable" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnableTwoFactorDialog, {})).with({ type: "auth.two-factor.disable" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisableTwoFactorDialog, {})).with({ type: "api-key.create" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateApiKeyDialog, {})).with({ type: "resume.create" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateResumeDialog, {})).with({ type: "resume.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateResumeDialog, { data })).with({ type: "resume.duplicate" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DuplicateResumeDialog, { data })).with({ type: "resume.import" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportResumeDialog, {})).with({ type: "resume.template.gallery" }, () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TemplateGalleryDialog, {})).with({ type: "resume.sections.profiles.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateProfileDialog, { data })).with({ type: "resume.sections.profiles.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateProfileDialog, { data })).with({ type: "resume.sections.experience.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateExperienceDialog, { data })).with({ type: "resume.sections.experience.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateExperienceDialog, { data })).with({ type: "resume.sections.education.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateEducationDialog, { data })).with({ type: "resume.sections.education.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateEducationDialog, { data })).with({ type: "resume.sections.skills.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateSkillDialog, { data })).with({ type: "resume.sections.skills.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateSkillDialog, { data })).with({ type: "resume.sections.projects.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateProjectDialog, { data })).with({ type: "resume.sections.projects.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateProjectDialog, { data })).with({ type: "resume.sections.certifications.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateCertificationDialog, { data })).with({ type: "resume.sections.certifications.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateCertificationDialog, { data })).with({ type: "resume.sections.languages.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateLanguageDialog, { data })).with({ type: "resume.sections.languages.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateLanguageDialog, { data })).with({ type: "resume.sections.publications.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePublicationDialog, { data })).with({ type: "resume.sections.publications.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdatePublicationDialog, { data })).with({ type: "resume.sections.awards.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateAwardDialog, { data })).with({ type: "resume.sections.awards.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateAwardDialog, { data })).with({ type: "resume.sections.interests.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateInterestDialog, { data })).with({ type: "resume.sections.interests.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateInterestDialog, { data })).with({ type: "resume.sections.volunteer.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateVolunteerDialog, { data })).with({ type: "resume.sections.volunteer.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateVolunteerDialog, { data })).with({ type: "resume.sections.references.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateReferenceDialog, { data })).with({ type: "resume.sections.references.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateReferenceDialog, { data })).with({ type: "resume.sections.summary.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateSummaryItemDialog, { data })).with({ type: "resume.sections.summary.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateSummaryItemDialog, { data })).with({ type: "resume.sections.cover-letter.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateCoverLetterDialog, { data })).with({ type: "resume.sections.cover-letter.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateCoverLetterDialog, { data })).with({ type: "resume.sections.custom.create" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateCustomSectionDialog, { data })).with({ type: "resume.sections.custom.update" }, ({ data }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateCustomSectionDialog, { data })).otherwise(() => null)
	});
}
var globals_default = "/assets/globals-B2czedNb.css";
var appName = "1Digit";
var title = `${appName} — Private & Professional Resume Builder`;
var description = "1Digit is a completely private and open-source resume builder that helps you create professional resumes without compromising your data privacy.";
await loadLocale(await getLocale());
var Route$23 = createRootRouteWithContext()({
	shellComponent: RootDocument,
	head: () => {
		const appUrl = process.env.APP_URL ?? "https://1digit.tech/";
		return {
			links: [
				{
					rel: "stylesheet",
					href: globals_default
				},
				{
					rel: "icon",
					href: "/favicon.ico",
					type: "image/x-icon",
					sizes: "128x128"
				},
				{
					rel: "icon",
					href: "/favicon.svg",
					type: "image/svg+xml",
					sizes: "256x256 any"
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon-180x180.png",
					type: "image/png",
					sizes: "180x180 any"
				},
				{
					rel: "manifest",
					href: "/manifest.webmanifest",
					crossOrigin: "use-credentials"
				}
			],
			meta: [
				{ title },
				{ charSet: "UTF-8" },
				{
					name: "description",
					content: description
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					property: "twitter:image",
					content: `${appUrl}/opengraph/banner.jpg`
				},
				{
					property: "twitter:card",
					content: "summary_large_image"
				},
				{
					property: "twitter:title",
					content: title
				},
				{
					property: "twitter:description",
					content: description
				},
				{
					property: "og:image",
					content: `${appUrl}/opengraph/banner.jpg`
				},
				{
					property: "og:site_name",
					content: appName
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: appUrl
				}
			],
			scripts: [{ children: `
						if('serviceWorker' in navigator) {
							window.addEventListener('load', () => {
								navigator.serviceWorker.register('/sw.js', { scope: '/' })
							})
						}
					` }]
		};
	},
	beforeLoad: async () => {
		const [theme, locale, session, flags] = await Promise.all([
			getTheme(),
			getLocale(),
			getSession(),
			client.flags.get()
		]);
		return {
			theme,
			locale,
			session,
			flags
		};
	}
});
function RootDocument({ children }) {
	const { theme, locale } = Route$23.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		suppressHydrationWarning: true,
		dir: isRTL(locale) ? "rtl" : "ltr",
		lang: locale,
		className: theme,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionConfig, {
			reducedMotion: "user",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, {
				i18n,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$15.Provider, {
					value: {
						size: 16,
						weight: "regular"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, {
						theme,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialogProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptDialogProvider, { children: [
							children,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogManager, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
								richColors: true,
								position: "bottom-right"
							})
						] }) }) })
					})
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var $$splitComponentImporter$13 = () => import("./templates-CRnbv4cw.mjs");
var Route$22 = createFileRoute("/templates")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
function handler$4() {
	const resumeDataJSONSchema = zod_default.toJSONSchema(resumeDataSchema);
	return Response.json(resumeDataJSONSchema, {
		status: 200,
		headers: {
			"Content-Type": "application/schema+json; charset=utf-8",
			"Cache-Control": "public, max-age=86400, immutable",
			"Surrogate-Control": "max-age=86400",
			"X-Content-Type-Options": "nosniff",
			"X-Robots-Tag": "index, follow",
			ETag: `"v5.0.0"`,
			Vary: "Accept"
		}
	});
}
var Route$21 = createFileRoute("/schema.json")({ server: { handlers: { GET: handler$4 } } });
var $$splitComponentImporter$12 = () => import("./route-DjInC9AI.mjs");
var Route$20 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./route-BUqJ2HJC.mjs");
var Route$19 = createFileRoute("/_home")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var resumeIdArg = zod_default.string().describe("The ID of the resume. Use `list_resumes` to find IDs, or `create_resume` to create a new one first.");
/** Embeds the resume data and JSON schema as context messages. */
function resumeContext(id) {
	return [{
		role: "user",
		content: {
			type: "resource",
			resource: {
				uri: `resume://${id}`,
				mimeType: "application/json",
				text: "Current resume data"
			}
		}
	}, {
		role: "user",
		content: {
			type: "resource",
			resource: {
				uri: "resume://schema",
				mimeType: "application/json",
				text: "Resume data JSON Schema — use this to understand valid paths and types for JSON Patch operations"
			}
		}
	}];
}
var PATCH_REFERENCE = [
	"## JSON Patch Reference",
	"",
	"Use the `patch_resume` tool for every change. Common operations:",
	"",
	"| Action | Operation |",
	"|--------|-----------|",
	"| Change name | `{ \"op\": \"replace\", \"path\": \"/basics/name\", \"value\": \"Jane Doe\" }` |",
	"| Update headline | `{ \"op\": \"replace\", \"path\": \"/basics/headline\", \"value\": \"Senior Engineer\" }` |",
	"| Replace summary | `{ \"op\": \"replace\", \"path\": \"/summary/content\", \"value\": \"<p>Experienced...</p>\" }` |",
	"| Add experience | `{ \"op\": \"add\", \"path\": \"/sections/experience/items/-\", \"value\": { ...full item } }` |",
	"| Remove skill at index 2 | `{ \"op\": \"remove\", \"path\": \"/sections/skills/items/2\" }` |",
	"| Update specific field | `{ \"op\": \"replace\", \"path\": \"/sections/experience/items/0/company\", \"value\": \"New Corp\" }` |",
	"| Change template | `{ \"op\": \"replace\", \"path\": \"/metadata/template\", \"value\": \"bronzor\" }` |",
	"| Change primary color | `{ \"op\": \"replace\", \"path\": \"/metadata/design/colors/primary\", \"value\": \"rgba(37, 99, 235, 1)\" }` |",
	"| Hide a section | `{ \"op\": \"replace\", \"path\": \"/sections/interests/hidden\", \"value\": true }` |",
	"",
	"Rules:",
	"- New item IDs must be valid UUIDs (format: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`).",
	"- HTML content fields (`description`, `summary.content`) must use valid HTML: `<p>`, `<ul>`/`<li>`, `<strong>`, `<em>`.",
	"- Every `website` field is an object: `{ url: string, label: string }`.",
	"- Use `get_resume_screenshot` after making visual changes (template, colors, layout) to verify the result."
].join("\n");
function registerPrompts(server) {
	server.registerPrompt("build_resume", {
		title: "Build Resume",
		description: "Guide the user step-by-step through building a resume from scratch, section by section.",
		argsSchema: { id: resumeIdArg }
	}, async ({ id }) => ({ messages: [...resumeContext(id), {
		role: "user",
		content: {
			type: "text",
			text: [
				"You are an expert resume writer. Help me build my resume step by step.",
				"",
				"## Process",
				"",
				"1. **Basics** — Ask for: full name, headline/job title, email, phone, location, website.",
				"2. **Summary** — Help me write a compelling 2-3 sentence professional summary.",
				"3. **Experience** — Walk through each role: company, position, period, key accomplishments.",
				"4. **Education** — Degree, school, graduation date, relevant coursework/honors.",
				"5. **Skills** — Categorize technical and soft skills with proficiency levels.",
				"6. **Other sections** — Projects, certifications, languages, volunteer work, etc.",
				"7. **Design** — Offer to adjust template, typography, and color scheme.",
				"",
				"For each section, ask targeted questions, draft the content, and wait for my approval before applying.",
				"Do NOT fabricate any information — only use what I provide or explicitly ask you to generate.",
				"",
				PATCH_REFERENCE,
				"",
				"The resume data and schema are attached above. Let's begin!"
			].join("\n")
		}
	}] }));
	server.registerPrompt("improve_resume", {
		title: "Improve Resume",
		description: "Review resume content and suggest concrete improvements to wording, impact, and structure.",
		argsSchema: { id: resumeIdArg }
	}, async ({ id }) => ({ messages: [...resumeContext(id), {
		role: "user",
		content: {
			type: "text",
			text: [
				"You are an expert resume writer and career coach. Review my resume and help me improve it.",
				"",
				"## Analysis Framework",
				"",
				"Go through each section and identify:",
				"- **Weak bullet points** — lacking metrics, impact, or specificity",
				"- **Passive voice** — replace with strong action verbs (Led, Built, Designed, Increased...)",
				"- **Vague descriptions** — make concrete with specific technologies, team sizes, outcomes",
				"- **Missing quantification** — add numbers, percentages, dollar amounts where possible",
				"- **Structural issues** — inconsistent formatting, poor section ordering, missing sections",
				"- **Redundancies** — repetitive content that dilutes impact",
				"",
				"## Process",
				"",
				"1. Start with an **overall assessment** (strengths + key areas to improve).",
				"2. Work through improvements **one section at a time**.",
				"3. For each suggestion, explain the **rationale** and show the before/after.",
				"4. Wait for my **approval** before applying changes via `patch_resume`.",
				"5. Do NOT fabricate information — suggest improvements based on what exists, ask me for missing details.",
				"",
				PATCH_REFERENCE
			].join("\n")
		}
	}] }));
	server.registerPrompt("tailor_resume", {
		title: "Tailor Resume for a Job",
		description: "Adapt a resume to match a specific job description by adjusting keywords, content, and structure for ATS optimization.",
		argsSchema: {
			id: resumeIdArg,
			job_description: zod_default.string().min(1).describe("The full job description or posting to tailor the resume for.")
		}
	}, async ({ id, job_description }) => ({ messages: [...resumeContext(id), {
		role: "user",
		content: {
			type: "text",
			text: [
				"You are an expert resume writer specializing in ATS optimization and job targeting.",
				"",
				"## Target Job Description",
				"",
				job_description,
				"",
				"## Process",
				"",
				"1. **Gap Analysis** — Extract required skills, qualifications, keywords, and technologies from the job description. Compare against my resume and list what's aligned, what's missing, and what's irrelevant.",
				"2. **Headline & Summary** — Suggest adjustments to match the target role.",
				"3. **Experience** — Reword bullet points to highlight relevant accomplishments using keywords from the JD.",
				"4. **Skills** — Update with missing keywords that I actually possess (ask me to confirm).",
				"5. **Section Ordering** — Reorder to put the most relevant sections first.",
				"6. **De-emphasis** — Suggest hiding sections that don't add value for this specific role.",
				"",
				"Present a summary of all proposed changes before applying. Apply via `patch_resume` only after I approve.",
				"Do NOT fabricate experience or skills I don't have — only reframe existing content and ask me about gaps.",
				"",
				PATCH_REFERENCE
			].join("\n")
		}
	}] }));
	server.registerPrompt("review_resume", {
		title: "Review Resume",
		description: "Get a structured, professional critique with a scorecard and prioritized recommendations. Read-only — no changes are made.",
		argsSchema: { id: resumeIdArg }
	}, async ({ id }) => ({ messages: [...resumeContext(id), {
		role: "user",
		content: {
			type: "text",
			text: [
				"You are a professional resume reviewer and career advisor. Provide a thorough critique.",
				"",
				"## Evaluation Dimensions (score each 1-10)",
				"",
				"| Dimension | What to evaluate |",
				"|-----------|-----------------|",
				"| **Completeness** | Are all important sections filled in? Any critical gaps? |",
				"| **Impact** | Do bullet points demonstrate results with metrics and outcomes? |",
				"| **Clarity** | Is the writing clear, concise, and free of unnecessary jargon? |",
				"| **Formatting** | Is the layout consistent? Are sections well-organized? |",
				"| **ATS Compatibility** | Will it parse well through Applicant Tracking Systems? |",
				"| **Keywords** | Are relevant industry keywords present and naturally integrated? |",
				"| **Length** | Is the resume an appropriate length for the experience level? |",
				"",
				"## Output Format",
				"",
				"1. **Scorecard** — Score each dimension (1-10) with a brief justification.",
				"2. **Overall Score** — Weighted average of all dimensions.",
				"3. **Top 5 Recommendations** — Prioritized by impact, with specific actionable suggestions.",
				"4. **Strengths** — What's working well and should be preserved.",
				"",
				"This is a **read-only review**. Do NOT call `patch_resume` or make any changes.",
				"Format the review as a clear, structured report."
			].join("\n")
		}
	}] }));
}
var schema_default = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	type: "object",
	properties: /* @__PURE__ */ JSON.parse("{\"picture\":{\"type\":\"object\",\"properties\":{\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the picture from the resume.\"},\"url\":{\"type\":\"string\",\"description\":\"The URL to the picture to display on the resume. Must be a valid URL with a protocol (http:// or https://).\"},\"size\":{\"type\":\"number\",\"minimum\":32,\"maximum\":512,\"description\":\"The size of the picture to display on the resume, defined in points (pt).\"},\"rotation\":{\"type\":\"number\",\"minimum\":0,\"maximum\":360,\"description\":\"The rotation of the picture to display on the resume, defined in degrees (°).\"},\"aspectRatio\":{\"type\":\"number\",\"minimum\":0.5,\"maximum\":2.5,\"description\":\"The aspect ratio of the picture to display on the resume, defined as width / height (e.g. 1.5 for 1.5:1 or 0.5 for 1:2).\"},\"borderRadius\":{\"type\":\"number\",\"minimum\":0,\"maximum\":100,\"description\":\"The border radius of the picture to display on the resume, defined in points (pt).\"},\"borderColor\":{\"type\":\"string\",\"description\":\"The color of the border of the picture to display on the resume, defined as rgba(r, g, b, a).\"},\"borderWidth\":{\"type\":\"number\",\"minimum\":0,\"description\":\"The width of the border of the picture to display on the resume, defined in points (pt).\"},\"shadowColor\":{\"type\":\"string\",\"description\":\"The color of the shadow of the picture to display on the resume, defined as rgba(r, g, b, a).\"},\"shadowWidth\":{\"type\":\"number\",\"minimum\":0,\"description\":\"The width of the shadow of the picture to display on the resume, defined in points (pt).\"}},\"required\":[\"hidden\",\"url\",\"size\",\"rotation\",\"aspectRatio\",\"borderRadius\",\"borderColor\",\"borderWidth\",\"shadowColor\",\"shadowWidth\"],\"additionalProperties\":false,\"description\":\"Configuration for photograph displayed on the resume\"},\"basics\":{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\",\"description\":\"The full name of the author of the resume.\"},\"headline\":{\"type\":\"string\",\"description\":\"The headline of the author of the resume.\"},\"email\":{\"type\":\"string\",\"description\":\"The email address of the author of the resume.\"},\"phone\":{\"type\":\"string\",\"description\":\"The phone number of the author of the resume.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the author of the resume.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the author of the resume.\"},\"customFields\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the custom field. Usually generated as a UUID.\"},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"text\":{\"type\":\"string\",\"description\":\"The text to display for the custom field.\"},\"link\":{\"default\":\"\",\"type\":\"string\",\"description\":\"If the custom field should be a link, the URL to link to.\"}},\"required\":[\"id\",\"icon\",\"text\",\"link\"],\"additionalProperties\":false},\"description\":\"The custom fields to display on the resume.\"}},\"required\":[\"name\",\"headline\",\"email\",\"phone\",\"location\",\"website\",\"customFields\"],\"additionalProperties\":false,\"description\":\"Basic information about the author, such as name, email, phone, location, and website\"},\"summary\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the summary of the resume.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the summary should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the summary from the resume.\"},\"content\":{\"type\":\"string\",\"description\":\"The content of the summary of the resume. This should be a HTML-formatted string.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"content\"],\"additionalProperties\":false,\"description\":\"Summary section of the resume, useful for a short bio or introduction\"},\"sections\":{\"type\":\"object\",\"properties\":{\"profiles\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"network\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the network or platform.\"},\"username\":{\"type\":\"string\",\"description\":\"The username of the author on the network or platform.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the profile of the author on the network or platform, if any.\"}},\"required\":[\"id\",\"hidden\",\"icon\",\"network\",\"username\",\"website\"],\"additionalProperties\":false},\"description\":\"The items to display in the profiles section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the profiles of the author.\"},\"experience\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"company\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the company or organization.\"},\"position\":{\"type\":\"string\",\"description\":\"The position held at the company or organization.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the company or organization.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the author was employed at the company or organization.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the company or organization, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the experience. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"company\",\"position\",\"location\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the experience section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the experience of the author.\"},\"education\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"school\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the school or institution.\"},\"degree\":{\"type\":\"string\",\"description\":\"The degree or qualification obtained.\"},\"area\":{\"type\":\"string\",\"description\":\"The area of study or specialization.\"},\"grade\":{\"type\":\"string\",\"description\":\"The grade or score achieved.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the school or institution.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the education was obtained over.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the school or institution, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the education. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"school\",\"degree\",\"area\",\"grade\",\"location\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the education section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the education of the author.\"},\"projects\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the project.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the project was worked on.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the project, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the project. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"name\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the projects section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the projects of the author.\"},\"skills\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the skill.\"},\"proficiency\":{\"type\":\"string\",\"description\":\"The proficiency level of the skill. Can be any text, such as 'Beginner', 'Intermediate', 'Advanced', etc.\"},\"level\":{\"default\":0,\"description\":\"The proficiency level of the skill, defined as a number between 0 and 5. If set to 0, the icons displaying the level will be hidden.\",\"type\":\"number\",\"minimum\":0,\"maximum\":5},\"keywords\":{\"default\":[],\"description\":\"The keywords associated with the skill, if any. These are displayed as tags below the name.\",\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"id\",\"hidden\",\"icon\",\"name\",\"proficiency\",\"level\",\"keywords\"],\"additionalProperties\":false},\"description\":\"The items to display in the skills section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the skills of the author.\"},\"languages\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"language\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the language the author knows.\"},\"fluency\":{\"type\":\"string\",\"description\":\"The fluency level of the language. Can be any text, such as 'Native', 'Fluent', 'Conversational', etc. or can also be a CEFR level (A1, A2, B1, B2, C1, C2).\"},\"level\":{\"default\":0,\"description\":\"The proficiency level of the language, defined as a number between 0 and 5. If set to 0, the icons displaying the level will be hidden.\",\"type\":\"number\",\"minimum\":0,\"maximum\":5}},\"required\":[\"id\",\"hidden\",\"language\",\"fluency\",\"level\"],\"additionalProperties\":false},\"description\":\"The items to display in the languages section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the languages of the author.\"},\"interests\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the interest/hobby.\"},\"keywords\":{\"default\":[],\"description\":\"The keywords associated with the interest/hobby, if any. These are displayed as tags below the name.\",\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"id\",\"hidden\",\"icon\",\"name\",\"keywords\"],\"additionalProperties\":false},\"description\":\"The items to display in the interests section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the interests of the author.\"},\"awards\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"title\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The title of the award.\"},\"awarder\":{\"type\":\"string\",\"description\":\"The awarder of the award.\"},\"date\":{\"type\":\"string\",\"description\":\"The date when the award was received.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the award, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the award. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"title\",\"awarder\",\"date\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the awards section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the awards of the author.\"},\"certifications\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"title\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The title of the certification.\"},\"issuer\":{\"type\":\"string\",\"description\":\"The issuer of the certification.\"},\"date\":{\"type\":\"string\",\"description\":\"The date when the certification was received.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the certification, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the certification. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"title\",\"issuer\",\"date\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the certifications section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the certifications of the author.\"},\"publications\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"title\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The title of the publication.\"},\"publisher\":{\"type\":\"string\",\"description\":\"The publisher of the publication.\"},\"date\":{\"type\":\"string\",\"description\":\"The date when the publication was published.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the publication, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the publication. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"title\",\"publisher\",\"date\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the publications section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the publications of the author.\"},\"volunteer\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"organization\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the organization or company.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the organization or company.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the author was volunteered at the organization or company.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the organization or company, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the volunteer experience. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"organization\",\"location\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the volunteer section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the volunteer experience of the author.\"},\"references\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"items\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the reference, or a note such as 'Available upon request'.\"},\"position\":{\"type\":\"string\",\"description\":\"The position or job title of the reference.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website or LinkedIn profile of the reference, if any.\"},\"phone\":{\"type\":\"string\",\"description\":\"The phone number of the reference.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the reference. Can be used to display a quote, a testimonial, etc. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"name\",\"position\",\"website\",\"phone\",\"description\"],\"additionalProperties\":false},\"description\":\"The items to display in the references section.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"items\"],\"additionalProperties\":false,\"description\":\"The section to display the references of the author.\"}},\"required\":[\"profiles\",\"experience\",\"education\",\"projects\",\"skills\",\"languages\",\"interests\",\"awards\",\"certifications\",\"publications\",\"volunteer\",\"references\"],\"additionalProperties\":false,\"description\":\"Various sections of the resume, such as experience, education, projects, etc.\"},\"customSections\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"title\":{\"type\":\"string\",\"description\":\"The title of the section.\"},\"columns\":{\"type\":\"number\",\"description\":\"The number of columns the section should span across.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the section from the resume.\"},\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the custom section. Usually generated as a UUID.\"},\"type\":{\"type\":\"string\",\"enum\":[\"summary\",\"profiles\",\"experience\",\"education\",\"projects\",\"skills\",\"languages\",\"interests\",\"awards\",\"certifications\",\"publications\",\"volunteer\",\"references\",\"cover-letter\"],\"description\":\"The type of items this custom section contains. Determines which item schema and form fields to use.\"},\"items\":{\"type\":\"array\",\"items\":{\"anyOf\":[{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"recipient\":{\"type\":\"string\",\"description\":\"The recipient's address block as HTML (name, title, company, address, email).\"},\"content\":{\"type\":\"string\",\"description\":\"The cover letter body as HTML (salutation, paragraphs, closing, signature).\"}},\"required\":[\"id\",\"hidden\",\"recipient\",\"content\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"content\":{\"type\":\"string\",\"description\":\"The rich text content of the summary item. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"content\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"network\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the network or platform.\"},\"username\":{\"type\":\"string\",\"description\":\"The username of the author on the network or platform.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the profile of the author on the network or platform, if any.\"}},\"required\":[\"id\",\"hidden\",\"icon\",\"network\",\"username\",\"website\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"company\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the company or organization.\"},\"position\":{\"type\":\"string\",\"description\":\"The position held at the company or organization.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the company or organization.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the author was employed at the company or organization.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the company or organization, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the experience. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"company\",\"position\",\"location\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"school\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the school or institution.\"},\"degree\":{\"type\":\"string\",\"description\":\"The degree or qualification obtained.\"},\"area\":{\"type\":\"string\",\"description\":\"The area of study or specialization.\"},\"grade\":{\"type\":\"string\",\"description\":\"The grade or score achieved.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the school or institution.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the education was obtained over.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the school or institution, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the education. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"school\",\"degree\",\"area\",\"grade\",\"location\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the project.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the project was worked on.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the project, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the project. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"name\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the skill.\"},\"proficiency\":{\"type\":\"string\",\"description\":\"The proficiency level of the skill. Can be any text, such as 'Beginner', 'Intermediate', 'Advanced', etc.\"},\"level\":{\"default\":0,\"description\":\"The proficiency level of the skill, defined as a number between 0 and 5. If set to 0, the icons displaying the level will be hidden.\",\"type\":\"number\",\"minimum\":0,\"maximum\":5},\"keywords\":{\"default\":[],\"description\":\"The keywords associated with the skill, if any. These are displayed as tags below the name.\",\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"id\",\"hidden\",\"icon\",\"name\",\"proficiency\",\"level\",\"keywords\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"language\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the language the author knows.\"},\"fluency\":{\"type\":\"string\",\"description\":\"The fluency level of the language. Can be any text, such as 'Native', 'Fluent', 'Conversational', etc. or can also be a CEFR level (A1, A2, B1, B2, C1, C2).\"},\"level\":{\"default\":0,\"description\":\"The proficiency level of the language, defined as a number between 0 and 5. If set to 0, the icons displaying the level will be hidden.\",\"type\":\"number\",\"minimum\":0,\"maximum\":5}},\"required\":[\"id\",\"hidden\",\"language\",\"fluency\",\"level\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the interest/hobby.\"},\"keywords\":{\"default\":[],\"description\":\"The keywords associated with the interest/hobby, if any. These are displayed as tags below the name.\",\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"required\":[\"id\",\"hidden\",\"icon\",\"name\",\"keywords\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"title\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The title of the award.\"},\"awarder\":{\"type\":\"string\",\"description\":\"The awarder of the award.\"},\"date\":{\"type\":\"string\",\"description\":\"The date when the award was received.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the award, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the award. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"title\",\"awarder\",\"date\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"title\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The title of the certification.\"},\"issuer\":{\"type\":\"string\",\"description\":\"The issuer of the certification.\"},\"date\":{\"type\":\"string\",\"description\":\"The date when the certification was received.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website of the certification, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the certification. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"title\",\"issuer\",\"date\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"title\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The title of the publication.\"},\"publisher\":{\"type\":\"string\",\"description\":\"The publisher of the publication.\"},\"date\":{\"type\":\"string\",\"description\":\"The date when the publication was published.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the publication, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the publication. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"title\",\"publisher\",\"date\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"organization\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the organization or company.\"},\"location\":{\"type\":\"string\",\"description\":\"The location of the organization or company.\"},\"period\":{\"type\":\"string\",\"description\":\"The period of time the author was volunteered at the organization or company.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The link to the organization or company, if any.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the volunteer experience. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"organization\",\"location\",\"period\",\"website\",\"description\"],\"additionalProperties\":false},{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\",\"description\":\"The unique identifier for the item. Usually generated as a UUID.\"},\"hidden\":{\"type\":\"boolean\",\"description\":\"Whether to hide the item from the resume.\"},\"options\":{\"description\":\"Display options for this item.\",\"default\":{\"showLinkInTitle\":false},\"type\":\"object\",\"properties\":{\"showLinkInTitle\":{\"default\":false,\"description\":\"If true, the website URL is rendered as a hyperlink on the title instead of a separate link at the bottom.\",\"type\":\"boolean\"}},\"required\":[\"showLinkInTitle\"],\"additionalProperties\":false},\"name\":{\"type\":\"string\",\"minLength\":1,\"description\":\"The name of the reference, or a note such as 'Available upon request'.\"},\"position\":{\"type\":\"string\",\"description\":\"The position or job title of the reference.\"},\"website\":{\"type\":\"object\",\"properties\":{\"url\":{\"type\":\"string\",\"description\":\"The URL to show as a link. Must be a valid URL with a protocol (http:// or https://).\"},\"label\":{\"type\":\"string\",\"description\":\"The label to display for the URL. Leave blank to display the URL as-is.\"}},\"required\":[\"url\",\"label\"],\"additionalProperties\":false,\"description\":\"The website or LinkedIn profile of the reference, if any.\"},\"phone\":{\"type\":\"string\",\"description\":\"The phone number of the reference.\"},\"description\":{\"type\":\"string\",\"description\":\"The description of the reference. Can be used to display a quote, a testimonial, etc. This should be a HTML-formatted string.\"}},\"required\":[\"id\",\"hidden\",\"name\",\"position\",\"website\",\"phone\",\"description\"],\"additionalProperties\":false}]},\"description\":\"The items to display in the custom section. Items follow the schema of the section type.\"}},\"required\":[\"title\",\"columns\",\"hidden\",\"id\",\"type\",\"items\"],\"additionalProperties\":false},\"description\":\"Custom sections of the resume, such as a custom section for notes, etc.\"},\"metadata\":{\"type\":\"object\",\"properties\":{\"template\":{\"default\":\"onyx\",\"description\":\"The template to use for the resume. Determines the overall design and appearance of the resume.\",\"type\":\"string\",\"enum\":[\"azurill\",\"bronzor\",\"chikorita\",\"ditgar\",\"ditto\",\"gengar\",\"glalie\",\"kakuna\",\"lapras\",\"leafish\",\"onyx\",\"pikachu\",\"rhyhorn\"]},\"layout\":{\"type\":\"object\",\"properties\":{\"sidebarWidth\":{\"default\":35,\"description\":\"The width of the sidebar column, defined as a percentage of the page width.\",\"type\":\"number\",\"minimum\":10,\"maximum\":50},\"pages\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"fullWidth\":{\"type\":\"boolean\",\"description\":\"Whether the layout of the page should be full width. If true, the main column will span the entire width of the page. This means that there should be no items in the sidebar column.\"},\"main\":{\"type\":\"array\",\"items\":{\"type\":\"string\"},\"description\":\"The items to display in the main column of the page. A string array of section IDs (experience, education, projects, skills, languages, interests, awards, certifications, publications, volunteer, references, profiles, summary or UUIDs for custom sections).\"},\"sidebar\":{\"type\":\"array\",\"items\":{\"type\":\"string\"},\"description\":\"The items to display in the sidebar column of the page. A string array of section IDs (experience, education, projects, skills, languages, interests, awards, certifications, publications, volunteer, references, profiles, summary or UUIDs for custom sections).\"}},\"required\":[\"fullWidth\",\"main\",\"sidebar\"],\"additionalProperties\":false},\"description\":\"The pages to display in the layout.\"}},\"required\":[\"sidebarWidth\",\"pages\"],\"additionalProperties\":false,\"description\":\"The layout of the resume. Determines the structure and arrangement of the sections on the resume.\"},\"css\":{\"type\":\"object\",\"properties\":{\"enabled\":{\"type\":\"boolean\",\"description\":\"Whether to enable custom CSS for the resume.\"},\"value\":{\"type\":\"string\",\"description\":\"The custom CSS to apply to the resume. This should be a valid CSS string.\"}},\"required\":[\"enabled\",\"value\"],\"additionalProperties\":false,\"description\":\"Custom CSS to apply to the resume. Can be used to override the default styles of the template.\"},\"page\":{\"type\":\"object\",\"properties\":{\"gapX\":{\"type\":\"number\",\"minimum\":0,\"description\":\"The horizontal gap between the sections of the page, defined in points (pt).\"},\"gapY\":{\"type\":\"number\",\"minimum\":0,\"description\":\"The vertical gap between the sections of the page, defined in points (pt).\"},\"marginX\":{\"type\":\"number\",\"minimum\":0,\"description\":\"The horizontal margin of the page, defined in points (pt).\"},\"marginY\":{\"type\":\"number\",\"minimum\":0,\"description\":\"The vertical margin of the page, defined in points (pt).\"},\"format\":{\"default\":\"a4\",\"type\":\"string\",\"enum\":[\"a4\",\"letter\",\"free-form\"],\"description\":\"The format of the page. Can be 'a4', 'letter' or 'free-form'.\"},\"locale\":{\"default\":\"en-US\",\"type\":\"string\",\"description\":\"The locale of the page. Used for displaying pre-translated section headings, if not overridden.\"},\"hideIcons\":{\"default\":false,\"type\":\"boolean\",\"description\":\"Whether to hide the icons of the sections.\"}},\"required\":[\"gapX\",\"gapY\",\"marginX\",\"marginY\",\"format\",\"locale\",\"hideIcons\"],\"additionalProperties\":false,\"description\":\"The page settings of the resume. Determines the margins, format, and locale of the resume.\"},\"design\":{\"type\":\"object\",\"properties\":{\"level\":{\"type\":\"object\",\"properties\":{\"icon\":{\"type\":\"string\",\"description\":\"The icon to display for the custom field. Must be a valid icon name from @phosphor-icons/web icon set, or an empty string to hide. Default to '' (empty string) when unsure which icons are available.\"},\"type\":{\"type\":\"string\",\"enum\":[\"hidden\",\"circle\",\"square\",\"rectangle\",\"rectangle-full\",\"progress-bar\",\"icon\"],\"description\":\"The type of the level design. 'hidden' will hide the level design, 'circle' will display a circle, 'square' will display a square, 'rectangle' will display a rectangle, 'rectangle-full' will display a full rectangle, 'progress-bar' will display a progress bar, and 'icon' will display an icon. If 'icon' is selected, the icon to display should be specified in the 'icon' field.\"}},\"required\":[\"icon\",\"type\"],\"additionalProperties\":false},\"colors\":{\"type\":\"object\",\"properties\":{\"primary\":{\"type\":\"string\",\"description\":\"The primary color of the design, defined as rgba(r, g, b, a).\"},\"text\":{\"type\":\"string\",\"description\":\"The text color of the design, defined as rgba(r, g, b, a). Usually set to black: rgba(0, 0, 0, 1).\"},\"background\":{\"type\":\"string\",\"description\":\"The background color of the design, defined as rgba(r, g, b, a). Usually set to white: rgba(255, 255, 255, 1).\"}},\"required\":[\"primary\",\"text\",\"background\"],\"additionalProperties\":false}},\"required\":[\"level\",\"colors\"],\"additionalProperties\":false,\"description\":\"The design settings of the resume. Determines the colors, level designs, and typography of the resume.\"},\"typography\":{\"type\":\"object\",\"properties\":{\"body\":{\"type\":\"object\",\"properties\":{\"fontFamily\":{\"type\":\"string\",\"description\":\"The family of the font to use. Must be a font that is available on Google Fonts.\"},\"fontWeights\":{\"default\":[\"400\"],\"description\":\"The weight of the font, defined as a number between 100 and 900. Default to 400 when unsure if the weight is available in the font.\",\"type\":\"array\",\"items\":{\"type\":\"string\",\"enum\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}},\"fontSize\":{\"default\":11,\"description\":\"The size of the font to use, defined in points (pt).\",\"type\":\"number\",\"minimum\":6,\"maximum\":24},\"lineHeight\":{\"default\":1.5,\"description\":\"The line height of the font to use, defined as a multiplier of the font size (e.g. 1.5 for 1.5x).\",\"type\":\"number\",\"minimum\":0.5,\"maximum\":4}},\"required\":[\"fontFamily\",\"fontWeights\",\"fontSize\",\"lineHeight\"],\"additionalProperties\":false,\"description\":\"The typography for the body of the resume.\"},\"heading\":{\"type\":\"object\",\"properties\":{\"fontFamily\":{\"type\":\"string\",\"description\":\"The family of the font to use. Must be a font that is available on Google Fonts.\"},\"fontWeights\":{\"default\":[\"400\"],\"description\":\"The weight of the font, defined as a number between 100 and 900. Default to 400 when unsure if the weight is available in the font.\",\"type\":\"array\",\"items\":{\"type\":\"string\",\"enum\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}},\"fontSize\":{\"default\":11,\"description\":\"The size of the font to use, defined in points (pt).\",\"type\":\"number\",\"minimum\":6,\"maximum\":24},\"lineHeight\":{\"default\":1.5,\"description\":\"The line height of the font to use, defined as a multiplier of the font size (e.g. 1.5 for 1.5x).\",\"type\":\"number\",\"minimum\":0.5,\"maximum\":4}},\"required\":[\"fontFamily\",\"fontWeights\",\"fontSize\",\"lineHeight\"],\"additionalProperties\":false,\"description\":\"The typography for the headings of the resume.\"}},\"required\":[\"body\",\"heading\"],\"additionalProperties\":false,\"description\":\"The typography settings of the resume. Determines the fonts and sizes of the body and headings of the resume.\"},\"notes\":{\"type\":\"string\",\"description\":\"Personal notes for the resume. Can be used to add any additional information or instructions for the resume. These notes are not displayed on the resume, they are only visible to the author of the resume when editing the resume. This should be a HTML-formatted string.\"}},\"required\":[\"template\",\"layout\",\"css\",\"page\",\"design\",\"typography\",\"notes\"],\"additionalProperties\":false,\"description\":\"Metadata for the resume, such as template, layout, typography, etc. This section describes the overall design and appearance of the resume.\"}}"),
	required: [
		"picture",
		"basics",
		"summary",
		"sections",
		"customSections",
		"metadata"
	],
	additionalProperties: false
};
function registerResources(server) {
	const resumeTemplate = new ResourceTemplate("resume://{id}", { list: async () => {
		return { resources: (await client.resume.list()).map(({ id, name, slug, tags, isPublic, isLocked, updatedAt }) => ({
			name,
			title: `${name} (${slug})`,
			uri: `resume://${id}`,
			mimeType: "application/json",
			description: [
				isPublic ? "Public" : "Private",
				isLocked ? "Locked" : null,
				tags.length > 0 ? `Tags: ${tags.join(", ")}` : null
			].filter(Boolean).join(" | "),
			annotations: { lastModified: updatedAt.toISOString() }
		})) };
	} });
	server.registerResource("resume", resumeTemplate, {
		title: "Resume Data",
		mimeType: "application/json",
		description: [
			"Full resume data as JSON, including basics, summary, sections, custom sections, and metadata.",
			"Use resume://{id} with an ID from list_resumes.",
			"This is also embedded as context in all MCP prompts (build_resume, improve_resume, etc.)."
		].join(" ")
	}, async (uri) => {
		const id = uri.href.replace(/^resume:\/\//, "");
		if (!id) throw new Error("Invalid resume URI — expected format: resume://{id}");
		const resume = await client.resume.getById({ id });
		return { contents: [{
			uri: uri.href,
			mimeType: "application/json",
			text: JSON.stringify(resume.data, null, 2)
		}] };
	});
	server.registerResource("resume-schema", "resume://schema", {
		title: "Resume Data JSON Schema",
		mimeType: "application/json",
		description: [
			"The JSON Schema describing the complete resume data structure.",
			"Reference this when generating JSON Patch operations to ensure paths and value types are valid.",
			"Covers: basics, summary, picture, sections (experience, education, skills, etc.),",
			"custom sections, and metadata (template, layout, typography, colors, CSS)."
		].join(" ")
	}, async (uri) => ({ contents: [{
		uri: uri.href,
		mimeType: "application/json",
		text: JSON.stringify(schema_default, null, 2)
	}] }));
}
function errorMessage(error) {
	return error instanceof Error ? error.message : String(error);
}
function errorHint(error) {
	const msg = errorMessage(error);
	if (msg.includes("slug already exists")) return "\n\nHint: The slug is already in use. Try a different one.";
	if (msg.includes("locked")) return "\n\nHint: This resume is locked. Use `unlock_resume` first.";
	if (msg.includes("404") || msg.includes("not found")) return "\n\nHint: Resume not found. Use `list_resumes` to find valid IDs.";
	if (msg.includes("400")) return "\n\nHint: Invalid request. Check the input parameters or use `get_resume` to inspect the resume structure.";
	if (msg.includes("403")) return "\n\nHint: Permission denied. The resume may be locked — use `unlock_resume` first.";
	return "";
}
/**
* Wraps an async tool handler with consistent error formatting.
* On success, returns the handler's result directly.
* On failure, returns `{ isError: true, content: [{ type: "text", text }] }` with actionable hints.
*/
function withErrorHandling(label, handler) {
	return async (params) => {
		try {
			return await handler(params);
		} catch (error) {
			return {
				isError: true,
				content: [{
					type: "text",
					text: `Error ${label}: ${errorMessage(error)}${errorHint(error)}`
				}]
			};
		}
	};
}
function text(value) {
	return { content: [{
		type: "text",
		text: value
	}] };
}
var resumeIdSchema = zod_default.string().min(1).describe("Resume ID. Use `list_resumes` to find valid IDs.");
function registerTools(server) {
	server.registerTool("list_resumes", {
		title: "List Resumes",
		description: [
			"List all resumes for the authenticated user.",
			"",
			"Returns an array of resume objects (without full resume data) containing:",
			"id, name, slug, tags, isPublic, isLocked, createdAt, updatedAt.",
			"",
			"Use this tool first to discover resume IDs before calling other tools.",
			"Results can be filtered by tags and sorted by last updated date, creation date, or name."
		].join("\n"),
		inputSchema: zod_default.object({
			tags: zod_default.array(zod_default.string()).optional().default([]).describe("Filter resumes by tags. Only resumes matching ALL specified tags are returned. Default: no filter."),
			sort: zod_default.enum([
				"lastUpdatedAt",
				"createdAt",
				"name"
			]).optional().default("lastUpdatedAt").describe("Sort order for results. Default: lastUpdatedAt.")
		}),
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("listing resumes", async ({ tags, sort }) => {
		const resumes = await client.resume.list({
			tags,
			sort
		});
		if (resumes.length === 0) return text("No resumes found. Use `create_resume` to create one.");
		return text(JSON.stringify(resumes, null, 2));
	}));
	server.registerTool("get_resume", {
		title: "Get Resume",
		description: [
			"Get the full data of a specific resume by its ID.",
			"",
			"Returns the complete resume data as JSON, including: basics (name, headline, email, phone,",
			"location, website), summary, picture settings, all sections (experience, education, skills,",
			"projects, etc.), custom sections, and metadata (template, layout, typography, colors).",
			"",
			"Use `list_resumes` first to find valid IDs.",
			"The `resume://schema` resource describes the full data structure."
		].join("\n"),
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("getting resume", async ({ id }) => {
		const resume = await client.resume.getById({ id });
		return text(JSON.stringify(resume.data, null, 2));
	}));
	server.registerTool("create_resume", {
		title: "Create Resume",
		description: [
			"Create a new, empty resume with a name and URL-friendly slug.",
			"",
			"Returns the ID of the newly created resume.",
			"Set `withSampleData` to true to pre-fill with example content (useful for testing).",
			"After creating, use `get_resume` to view or `patch_resume` to populate it."
		].join("\n"),
		inputSchema: zod_default.object({
			name: zod_default.string().min(1).max(64).describe("Display name for the resume (e.g. 'Software Engineer 2026')"),
			slug: zod_default.string().min(1).max(64).describe("URL-friendly slug, must be unique across your resumes (e.g. 'software-engineer-2026')"),
			tags: zod_default.array(zod_default.string()).optional().default([]).describe("Tags to categorize the resume (e.g. ['tech', 'senior'])"),
			withSampleData: zod_default.boolean().optional().default(false).describe("Pre-fill with sample data. Default: false.")
		}),
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false
		}
	}, withErrorHandling("creating resume", async ({ name, slug, tags, withSampleData }) => {
		return text(`Created resume "${name}" (ID: ${await client.resume.create({
			name,
			slug,
			tags,
			withSampleData
		})}) with slug "${slug}".${withSampleData ? " Pre-filled with sample data." : ""}\n\nNext steps: Use \`get_resume\` to view it, or \`patch_resume\` to start editing.`);
	}));
	server.registerTool("duplicate_resume", {
		title: "Duplicate Resume",
		description: [
			"Create a copy of an existing resume with all its data.",
			"",
			"Returns the ID of the newly duplicated resume.",
			"You must provide a new name and slug for the copy.",
			"Useful for creating job-specific variants of a base resume."
		].join("\n"),
		inputSchema: zod_default.object({
			id: resumeIdSchema.describe("ID of the resume to duplicate"),
			name: zod_default.string().min(1).max(64).describe("Name for the duplicate"),
			slug: zod_default.string().min(1).max(64).describe("URL-friendly slug for the duplicate (must be unique)"),
			tags: zod_default.array(zod_default.string()).optional().default([]).describe("Tags for the duplicate")
		}),
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false
		}
	}, withErrorHandling("duplicating resume", async ({ id, name, slug, tags }) => {
		return text(`Duplicated resume as "${name}" (ID: ${await client.resume.duplicate({
			id,
			name,
			slug,
			tags
		})}) with slug "${slug}".\n\nNext steps: Use \`get_resume\` to view it, or \`patch_resume\` to customize.`);
	}));
	server.registerTool("patch_resume", {
		title: "Patch Resume",
		description: [
			"Apply JSON Patch (RFC 6902) operations to partially update a resume's data.",
			"",
			"This is the primary way to edit resume content. Use `get_resume` first to inspect the",
			"current structure, and `resume://schema` to understand valid paths and types.",
			"",
			"Supported operations: add, remove, replace, move, copy, test.",
			"",
			"Common path examples:",
			"  /basics/name                          — Change the name",
			"  /basics/headline                      — Change the headline",
			"  /summary/content                      — Replace summary (HTML string)",
			"  /sections/experience/items/-           — Append a new experience item",
			"  /sections/experience/items/0/company   — Update first experience's company",
			"  /sections/skills/items/-               — Append a new skill",
			"  /metadata/template                     — Change the template (e.g. 'azurill', 'bronzor', 'onyx')",
			"  /metadata/design/colors/primary        — Change the primary color (rgba string)",
			"  /sections/interests/hidden              — Hide/show a section",
			"",
			"Important: HTML content fields (description, summary.content) must use valid HTML.",
			"New items must include a valid UUID as `id` and `hidden: false`.",
			"Locked resumes cannot be patched — use `unlock_resume` first."
		].join("\n"),
		inputSchema: zod_default.object({
			id: resumeIdSchema,
			operations: zod_default.array(jsonPatchOperationSchema).min(1).describe("Array of JSON Patch (RFC 6902) operations to apply")
		}),
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: false,
			openWorldHint: false
		}
	}, withErrorHandling("patching resume", async ({ id, operations }) => {
		const resume = await client.resume.patch({
			id,
			operations
		});
		const summary = operations.map((op) => `${op.op} ${op.path}`).join(", ");
		return text(`Applied ${operations.length} operation(s) to "${resume.name}": ${summary}`);
	}));
	server.registerTool("delete_resume", {
		title: "Delete Resume",
		description: [
			"Permanently delete a resume and all its associated files (screenshots, PDFs).",
			"",
			"This action is IRREVERSIBLE. Locked resumes cannot be deleted — use `unlock_resume` first.",
			"Consider using `duplicate_resume` to create a backup before deleting."
		].join("\n"),
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: false,
			destructiveHint: true,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("deleting resume", async ({ id }) => {
		await client.resume.delete({ id });
		return text(`Successfully deleted resume (${id}) and all associated files.`);
	}));
	server.registerTool("lock_resume", {
		title: "Lock Resume",
		description: [
			"Lock a resume to prevent any modifications.",
			"",
			"When locked, a resume cannot be edited (patch_resume), updated, or deleted.",
			"Useful for protecting finalized resumes from accidental changes.",
			"Use `unlock_resume` to re-enable editing."
		].join("\n"),
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("locking resume", async ({ id }) => {
		await client.resume.setLocked({
			id,
			isLocked: true
		});
		return text(`Resume (${id}) is now locked. It cannot be edited, patched, or deleted until unlocked.`);
	}));
	server.registerTool("unlock_resume", {
		title: "Unlock Resume",
		description: "Unlock a previously locked resume, re-enabling edits, patches, and deletion.",
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: false,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("unlocking resume", async ({ id }) => {
		await client.resume.setLocked({
			id,
			isLocked: false
		});
		return text(`Resume (${id}) is now unlocked. It can be edited, patched, and deleted.`);
	}));
	server.registerTool("export_resume_pdf", {
		title: "Export Resume as PDF",
		description: [
			"Generate a PDF from the specified resume and return a download URL.",
			"",
			"The PDF is rendered using the resume's current template, layout, and design settings,",
			"then uploaded to storage. The returned URL can be shared or downloaded directly.",
			"PDF generation may take a few seconds depending on the resume's complexity."
		].join("\n"),
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("exporting resume as PDF", async ({ id }) => {
		const { url } = await client.printer.printResumeAsPDF({ id });
		return text(`PDF generated successfully.\n\nDownload URL: ${url}`);
	}));
	server.registerTool("get_resume_screenshot", {
		title: "Get Resume Screenshot",
		description: [
			"Get a visual preview of the resume's first page as a WebP image URL.",
			"",
			"Screenshots are cached for up to 6 hours and regenerated automatically when the resume",
			"is updated. Returns null if the printer service is unavailable.",
			"Use this after making changes to visually verify the result."
		].join("\n"),
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("getting resume screenshot", async ({ id }) => {
		const { url } = await client.printer.getResumeScreenshot({ id });
		if (!url) return text("Screenshot could not be generated. The printer service may be unavailable.");
		return text(`Resume screenshot URL: ${url}\n\nThis is a WebP image of the first page. Open the URL to view the current visual state of the resume.`);
	}));
	server.registerTool("get_resume_statistics", {
		title: "Get Resume Statistics",
		description: [
			"Get view and download statistics for a resume.",
			"",
			"Returns: isPublic (boolean), views (count), downloads (count),",
			"lastViewedAt (timestamp or null), lastDownloadedAt (timestamp or null)."
		].join("\n"),
		inputSchema: zod_default.object({ id: resumeIdSchema }),
		annotations: {
			readOnlyHint: true,
			destructiveHint: false,
			idempotentHint: true,
			openWorldHint: false
		}
	}, withErrorHandling("getting resume statistics", async ({ id }) => {
		const stats = await client.resume.statistics.getById({ id });
		return text(JSON.stringify(stats, null, 2));
	}));
}
function createMcpServer() {
	const server = new McpServer({
		name: "reactive-resume",
		version: "1.0.0",
		title: "Reactive Resume",
		websiteUrl: "https://rxresu.me",
		description: "Reactive Resume is a free and open-source resume builder. Use this MCP server to interact with your resume using an LLM of your choice.",
		icons: [{
			src: "https://rxresu.me/icon/light.svg",
			mimeType: "image/svg+xml",
			theme: "light"
		}, {
			src: "https://rxresu.me/icon/dark.svg",
			mimeType: "image/svg+xml",
			theme: "dark"
		}]
	});
	registerResources(server);
	registerTools(server);
	registerPrompts(server);
	return server;
}
var Route$18 = createFileRoute("/mcp/")({ server: { handlers: { ANY: async ({ request }) => {
	try {
		if (!request.headers.get("x-api-key")) throw new Error("Unauthorized");
		const server = createMcpServer();
		const transport = new WebStandardStreamableHTTPServerTransport({ enableJsonResponse: true });
		await server.connect(transport);
		return await transport.handleRequest(request);
	} catch (error) {
		logger$1.error("MCP request failed", {
			route: "/mcp",
			error
		});
		return Response.json({
			id: null,
			jsonrpc: "2.0",
			error: {
				code: -32603,
				message: `Error handling request: ${error instanceof Error ? error.message : String(error)}`
			}
		});
	}
} } } });
var Route$17 = createFileRoute("/dashboard/")({ beforeLoad: () => {
	throw redirect({
		to: "/dashboard/resumes",
		search: {
			sort: "lastUpdatedAt",
			tags: []
		},
		replace: true
	});
} });
var Route$16 = createFileRoute("/auth/")({ beforeLoad: async ({ context }) => {
	if (context.session) throw redirect({
		to: "/dashboard",
		replace: true
	});
	throw redirect({
		to: "/auth/login",
		replace: true
	});
} });
var $$splitComponentImporter$10 = () => import("../_home-BjjPo2bO.mjs");
var Route$15 = createFileRoute("/_home/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./create-qSiCHgjv.mjs");
var Route$14 = createFileRoute("/templates/create")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./verify-2fa-backup-CkFXxwei.mjs");
var Route$13 = createFileRoute("/auth/verify-2fa-backup")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	beforeLoad: async ({ context }) => {
		if (context.session) throw redirect({
			to: "/dashboard",
			replace: true
		});
	}
});
zod_default.object({ code: zod_default.string().trim() });
var $$splitComponentImporter$7 = () => import("./verify-2fa-Bp8idAtI.mjs");
var Route$12 = createFileRoute("/auth/verify-2fa")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	beforeLoad: async ({ context }) => {
		if (context.session) throw redirect({
			to: "/dashboard",
			replace: true
		});
	}
});
zod_default.object({ code: zod_default.string().length(6, "Code must be 6 digits") });
var $$splitComponentImporter$6 = () => import("./forgot-password-2zDELFpb.mjs");
var Route$11 = createFileRoute("/auth/forgot-password")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	beforeLoad: async ({ context }) => {
		if (context.flags.disableEmailAuth) throw redirect({
			to: "/auth/login",
			replace: true
		});
	}
});
zod_default.object({ email: zod_default.email() });
var HEALTHCHECK_TIMEOUT_MS = 1500;
function getErrorMessage(error) {
	if (error instanceof Error) return error.message;
	return "Unknown error";
}
async function withTimeout(promise, timeoutMs) {
	let timeoutId;
	const timeout = new Promise((_, reject) => {
		timeoutId = setTimeout(() => reject(/* @__PURE__ */ new Error(`Timed out after ${timeoutMs}ms`)), timeoutMs);
	});
	try {
		return await Promise.race([promise, timeout]);
	} finally {
		if (timeoutId) clearTimeout(timeoutId);
	}
}
async function runCheck(check) {
	const startedAt = performance.now();
	try {
		const data = await withTimeout(check(), HEALTHCHECK_TIMEOUT_MS);
		const latencyMs = Math.round(performance.now() - startedAt);
		if (data.status === "unhealthy") return {
			...data,
			status: "unhealthy",
			latencyMs
		};
		return {
			...data,
			status: "healthy",
			latencyMs
		};
	} catch (error) {
		return {
			status: "unhealthy",
			error: getErrorMessage(error),
			latencyMs: Math.round(performance.now() - startedAt)
		};
	}
}
async function healthHandler() {
	const [database, printer, storage] = await Promise.all([
		runCheck(checkDatabase),
		runCheck(checkPrinter),
		runCheck(checkStorage)
	]);
	const status = [
		database,
		printer,
		storage
	].some((check) => check.status === "unhealthy") ? "unhealthy" : "healthy";
	const checks = {
		service: "reactive-resume",
		version: process.env.npm_package_version,
		status,
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		uptime: `${process.uptime().toFixed(2)}s`,
		database,
		printer,
		storage
	};
	if (status === "unhealthy") logger$1.warn("Healthcheck failed", {
		route: "/api/health",
		database,
		printer,
		storage
	});
	const headers = new Headers();
	const body = JSON.stringify(checks);
	headers.set("Content-Type", "application/json; charset=UTF-8");
	headers.set("Content-Length", Buffer.byteLength(body, "utf-8").toString());
	return new Response(body, {
		headers,
		status: checks.status === "unhealthy" ? 503 : 200
	});
}
async function checkDatabase() {
	try {
		await db.execute(sql`SELECT 1`);
		return { status: "healthy" };
	} catch (error) {
		return {
			status: "unhealthy",
			error: error instanceof Error ? error.message : "Unknown error"
		};
	}
}
async function checkPrinter() {
	try {
		return {
			status: "healthy",
			...await printerService.healthcheck()
		};
	} catch (error) {
		return {
			status: "unhealthy",
			error: error instanceof Error ? error.message : "Unknown error"
		};
	}
}
async function checkStorage() {
	try {
		return await getStorageService().healthcheck();
	} catch (error) {
		return {
			status: "unhealthy",
			error: error instanceof Error ? error.message : "Unknown error"
		};
	}
}
var Route$10 = createFileRoute("/api/health")({ server: { handlers: { GET: healthHandler } } });
var $$splitComponentImporter$5 = () => import("../_resumeId-Bo21vHBR.mjs");
var Route$9 = createFileRoute("/builder/$resumeId/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var storageService = getStorageService();
var Route$8 = createFileRoute("/uploads/$userId/$")({ server: { handlers: { GET: handler$3 } } });
/**
* Handler for GET requests to serve uploaded files, supporting ETags, content security, and path validation.
* Handles nested paths like:
* - /uploads/{userId}/pictures/{timestamp}.webp
* - /uploads/{userId}/screenshots/{resumeId}/{timestamp}.webp
* - /uploads/{userId}/pdfs/{resumeId}/{timestamp}.pdf
*/
async function handler$3({ request }) {
	const { userId, filePath } = parseRouteParams(request.url);
	if (!userId || !filePath) return new Response("Bad Request", { status: 400 });
	if (!isValidPath(userId) || !isValidPathSegments(filePath)) return new Response("Forbidden", { status: 403 });
	const key = `uploads/${userId}/${filePath}`;
	const storedFile = await storageService.read(key);
	if (!storedFile) return new Response("Not Found", { status: 404 });
	const filename = filePath.split("/").pop() ?? filePath;
	const ext = extname(filename).toLowerCase();
	const contentType = storedFile.contentType ?? inferContentType(filename);
	const etag = createEtag(storedFile);
	if (isNotModified(request.headers, etag)) return makeNotModifiedResponse(etag);
	const headers = buildResponseHeaders({
		filename,
		storedFile,
		contentType,
		etag,
		shouldForceDownload: [".pdf"].includes(ext)
	});
	const buffer = toArrayBuffer(storedFile.data);
	return new Response(buffer, { headers });
}
/**
* Extracts userId and the remaining file path from the request URL.
*/
function parseRouteParams(url) {
	const pathAfterUploads = new URL(url).pathname.replace("/uploads/", "");
	const firstSlashIndex = pathAfterUploads.indexOf("/");
	if (firstSlashIndex === -1) return {
		userId: pathAfterUploads,
		filePath: void 0
	};
	return {
		userId: pathAfterUploads.slice(0, firstSlashIndex),
		filePath: pathAfterUploads.slice(firstSlashIndex + 1) || void 0
	};
}
/**
* Validates that a path segment does not contain directory traversal attempts.
*/
function isValidPath(segment) {
	return normalize(segment).replace(/^(\.\.(\/|\\|$))+/, "") === segment;
}
/**
* Validates all segments in a path for directory traversal attempts.
*/
function isValidPathSegments(path) {
	return path.split("/").every((segment) => isValidPath(segment));
}
/**
* Checks for ETag match for conditional GET requests.
*/
function isNotModified(headers, etag) {
	return (headers.get("If-None-Match")?.split(",").map((s) => s.trim()) ?? []).includes(etag);
}
/**
* Returns a 304 Not Modified response with caching headers.
*/
function makeNotModifiedResponse(etag) {
	return new Response(null, {
		status: 304,
		headers: {
			ETag: etag,
			"Cache-Control": "public, max-age=31536000, immutable"
		}
	});
}
/**
* Builds all headers for serving the file, including caching, security, and download headers.
*/
function buildResponseHeaders({ filename, storedFile, contentType, etag, shouldForceDownload }) {
	const headers = new Headers();
	headers.set("Content-Type", shouldForceDownload ? "application/octet-stream" : contentType);
	headers.set("Content-Length", storedFile.size.toString());
	if (shouldForceDownload) headers.set("Content-Disposition", `attachment; filename="${encodeURIComponent(basename(filename))}"`);
	headers.set("Cache-Control", "public, max-age=31536000, immutable");
	headers.set("ETag", etag);
	headers.set("X-Content-Type-Options", "nosniff");
	headers.set("X-Robots-Tag", "noindex, nofollow");
	headers.set("Cross-Origin-Resource-Policy", "same-site");
	headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	headers.set("Content-Security-Policy", "default-src 'none'; style-src 'unsafe-inline'; sandbox;");
	headers.set("X-Frame-Options", "DENY");
	headers.set("X-Download-Options", "noopen");
	headers.set("Access-Control-Allow-Origin", env$1.APP_URL);
	return headers;
}
/**
* Converts a Uint8Array to ArrayBuffer efficiently.
*/
function toArrayBuffer(data) {
	return data.byteOffset === 0 && data.byteLength === data.buffer.byteLength ? data.buffer : data.slice().buffer;
}
/**
* Generates or returns the ETag for a stored file.
*/
function createEtag(storedFile) {
	if (storedFile.etag) {
		const tag = storedFile.etag.trim();
		if (tag.startsWith("W/") || tag.startsWith("\"")) return tag;
		return `"${tag}"`;
	}
	const hash = createHash("sha256").update(storedFile.data).digest("hex");
	return `"${storedFile.size}-${hash}"`;
}
var $$splitComponentImporter$4 = () => import("./preferences-IeMpCNDO.mjs");
var Route$7 = createFileRoute("/dashboard/settings/preferences")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./danger-zone-CPZNZClZ.mjs");
var Route$6 = createFileRoute("/dashboard/settings/danger-zone")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./api-keys-BmhNYF7i.mjs");
var Route$5 = createFileRoute("/dashboard/settings/api-keys")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./ai-CJpqpyfM.mjs");
var Route$4 = createFileRoute("/dashboard/settings/ai")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var rpcHandler = new RPCHandler(router_default, {
	plugins: [
		new BatchHandlerPlugin(),
		new RequestHeadersPlugin(),
		new StrictGetMethodPlugin()
	],
	interceptors: [onError((error) => {
		logger$1.error("oRPC server error", {
			route: "/api/rpc",
			error
		});
	})]
});
async function handler$2({ request }) {
	const { response } = await rpcHandler.handle(request, {
		prefix: "/api/rpc",
		context: { locale: await getLocale() }
	});
	if (!response) return new Response("NOT_FOUND", { status: 404 });
	return response;
}
var Route$3 = createFileRoute("/api/rpc/$")({ server: { handlers: { ANY: handler$2 } } });
var openAPIHandler = new OpenAPIHandler(router_default, {
	plugins: [
		new BatchHandlerPlugin(),
		new RequestHeadersPlugin(),
		new StrictGetMethodPlugin(),
		new SmartCoercionPlugin({ schemaConverters: [new ZodToJsonSchemaConverter()] })
	],
	interceptors: [onError((error) => {
		logger$1.error("OpenAPI handler error", {
			route: "/api/openapi",
			error
		});
	})]
});
var openAPIGenerator = new OpenAPIGenerator({ schemaConverters: [new ZodToJsonSchemaConverter()] });
async function handler$1({ request }) {
	const locale = await getLocale();
	if (request.method === "GET" && request.url.endsWith("/spec.json")) {
		const spec = await openAPIGenerator.generate(router_default, {
			info: {
				title: "1Digit Resume",
				version: "1.0.0",
				description: "1Digit Resume API",
				license: { name: "MIT" },
				contact: {
					name: "1Digit Technology",
					email: "contact@1digit.tech",
					url: "https://1digit.tech"
				}
			},
			servers: [{ url: `${env$1.APP_URL}/api/openapi` }],
			externalDocs: {
				url: "/docs",
				description: "1Digit Resume Documentation"
			},
			commonSchemas: { ResumeData: { schema: resumeDataSchema } },
			components: { securitySchemes: { apiKey: {
				type: "apiKey",
				name: "x-api-key",
				in: "header",
				description: "The API key to authenticate requests."
			} } },
			security: [{ apiKey: [] }],
			filter: ({ contract }) => !contract["~orpc"].route.tags?.includes("Internal")
		});
		return Response.json(spec);
	}
	const { response } = await openAPIHandler.handle(request, {
		prefix: "/api/openapi",
		context: {
			locale,
			reqHeaders: request.headers
		}
	});
	if (!response) return new Response("NOT_FOUND", { status: 404 });
	return response;
}
var Route$2 = createFileRoute("/api/openapi/$")({ server: { handlers: { ANY: handler$1 } } });
async function handler({ request }) {
	if (request.method === "GET" && request.url.endsWith("/spec.json")) {
		const spec = await auth.api.generateOpenAPISchema();
		return Response.json(spec);
	}
	return auth.handler(request);
}
var Route$1 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: handler,
	POST: handler
} } });
var $$splitComponentImporter = () => import("./authentication-Csbe3pHK.mjs");
var Route = createFileRoute("/dashboard/settings/authentication/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var TemplatesRoute = Route$22.update({
	id: "/templates",
	path: "/templates",
	getParentRoute: () => Route$23
});
var SchemaDotjsonRoute = Route$21.update({
	id: "/schema.json",
	path: "/schema.json",
	getParentRoute: () => Route$23
});
var DashboardRouteRoute = Route$32.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$23
});
var AuthRouteRoute = Route$20.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$23
});
var HomeRouteRoute = Route$19.update({
	id: "/_home",
	getParentRoute: () => Route$23
});
var McpIndexRoute = Route$18.update({
	id: "/mcp/",
	path: "/mcp/",
	getParentRoute: () => Route$23
});
var DashboardIndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRouteRoute
});
var AuthIndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthRouteRoute
});
var HomeIndexRoute = Route$15.update({
	id: "/",
	path: "/",
	getParentRoute: () => HomeRouteRoute
});
var TemplatesCreateRoute = Route$14.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => TemplatesRoute
});
var PrinterResumeIdRoute = Route$24.update({
	id: "/printer/$resumeId",
	path: "/printer/$resumeId",
	getParentRoute: () => Route$23
});
var AuthVerify2faBackupRoute = Route$13.update({
	id: "/verify-2fa-backup",
	path: "/verify-2fa-backup",
	getParentRoute: () => AuthRouteRoute
});
var AuthVerify2faRoute = Route$12.update({
	id: "/verify-2fa",
	path: "/verify-2fa",
	getParentRoute: () => AuthRouteRoute
});
var AuthResumePasswordRoute = Route$30.update({
	id: "/resume-password",
	path: "/resume-password",
	getParentRoute: () => AuthRouteRoute
});
var AuthResetPasswordRoute = Route$29.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => AuthRouteRoute
});
var AuthRegisterRoute = Route$28.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => AuthRouteRoute
});
var AuthLoginRoute = Route$26.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AuthRouteRoute
});
var AuthForgotPasswordRoute = Route$11.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => AuthRouteRoute
});
var ApiHealthRoute = Route$10.update({
	id: "/api/health",
	path: "/api/health",
	getParentRoute: () => Route$23
});
var UsernameSlugRoute = Route$25.update({
	id: "/$username/$slug",
	path: "/$username/$slug",
	getParentRoute: () => Route$23
});
var BuilderResumeIdRouteRoute = Route$33.update({
	id: "/builder/$resumeId",
	path: "/builder/$resumeId",
	getParentRoute: () => Route$23
});
var DashboardResumesIndexRoute = Route$31.update({
	id: "/resumes/",
	path: "/resumes/",
	getParentRoute: () => DashboardRouteRoute
});
var BuilderResumeIdIndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => BuilderResumeIdRouteRoute
});
var UploadsUserIdSplatRoute = Route$8.update({
	id: "/uploads/$userId/$",
	path: "/uploads/$userId/$",
	getParentRoute: () => Route$23
});
var DashboardSettingsProfileRoute = Route$27.update({
	id: "/settings/profile",
	path: "/settings/profile",
	getParentRoute: () => DashboardRouteRoute
});
var DashboardSettingsPreferencesRoute = Route$7.update({
	id: "/settings/preferences",
	path: "/settings/preferences",
	getParentRoute: () => DashboardRouteRoute
});
var DashboardSettingsDangerZoneRoute = Route$6.update({
	id: "/settings/danger-zone",
	path: "/settings/danger-zone",
	getParentRoute: () => DashboardRouteRoute
});
var DashboardSettingsApiKeysRoute = Route$5.update({
	id: "/settings/api-keys",
	path: "/settings/api-keys",
	getParentRoute: () => DashboardRouteRoute
});
var DashboardSettingsAiRoute = Route$4.update({
	id: "/settings/ai",
	path: "/settings/ai",
	getParentRoute: () => DashboardRouteRoute
});
var ApiRpcSplatRoute = Route$3.update({
	id: "/api/rpc/$",
	path: "/api/rpc/$",
	getParentRoute: () => Route$23
});
var ApiOpenapiSplatRoute = Route$2.update({
	id: "/api/openapi/$",
	path: "/api/openapi/$",
	getParentRoute: () => Route$23
});
var ApiAuthSplatRoute = Route$1.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$23
});
var DashboardSettingsAuthenticationIndexRoute = Route.update({
	id: "/settings/authentication/",
	path: "/settings/authentication/",
	getParentRoute: () => DashboardRouteRoute
});
var HomeRouteRouteChildren = { HomeIndexRoute };
var HomeRouteRouteWithChildren = HomeRouteRoute._addFileChildren(HomeRouteRouteChildren);
var AuthRouteRouteChildren = {
	AuthForgotPasswordRoute,
	AuthLoginRoute,
	AuthRegisterRoute,
	AuthResetPasswordRoute,
	AuthResumePasswordRoute,
	AuthVerify2faRoute,
	AuthVerify2faBackupRoute,
	AuthIndexRoute
};
var AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(AuthRouteRouteChildren);
var DashboardRouteRouteChildren = {
	DashboardIndexRoute,
	DashboardSettingsAiRoute,
	DashboardSettingsApiKeysRoute,
	DashboardSettingsDangerZoneRoute,
	DashboardSettingsPreferencesRoute,
	DashboardSettingsProfileRoute,
	DashboardResumesIndexRoute,
	DashboardSettingsAuthenticationIndexRoute
};
var DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(DashboardRouteRouteChildren);
var TemplatesRouteChildren = { TemplatesCreateRoute };
var TemplatesRouteWithChildren = TemplatesRoute._addFileChildren(TemplatesRouteChildren);
var BuilderResumeIdRouteRouteChildren = { BuilderResumeIdIndexRoute };
var rootRouteChildren = {
	HomeRouteRoute: HomeRouteRouteWithChildren,
	AuthRouteRoute: AuthRouteRouteWithChildren,
	DashboardRouteRoute: DashboardRouteRouteWithChildren,
	SchemaDotjsonRoute,
	TemplatesRoute: TemplatesRouteWithChildren,
	BuilderResumeIdRouteRoute: BuilderResumeIdRouteRoute._addFileChildren(BuilderResumeIdRouteRouteChildren),
	UsernameSlugRoute,
	ApiHealthRoute,
	PrinterResumeIdRoute,
	McpIndexRoute,
	ApiAuthSplatRoute,
	ApiOpenapiSplatRoute,
	ApiRpcSplatRoute,
	UploadsUserIdSplatRoute
};
var routeTree = Route$23._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = async () => {
	const queryClient = getQueryClient();
	const [theme, locale, session, flags] = await Promise.all([
		getTheme(),
		getLocale(),
		getSession(),
		client.flags.get()
	]);
	await loadLocale(locale);
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultViewTransition: true,
		defaultStructuralSharing: true,
		defaultErrorComponent: ErrorScreen,
		defaultPendingComponent: LoadingScreen,
		defaultNotFoundComponent: NotFoundScreen,
		context: {
			orpc,
			queryClient,
			theme,
			locale,
			session,
			flags
		}
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient,
		handleRedirects: true,
		wrapQueryClient: true
	});
	return router;
};
//#endregion
export { getRouter };
