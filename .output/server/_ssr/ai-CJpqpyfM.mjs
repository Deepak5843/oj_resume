import { s as __toESM } from "../_runtime.mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { l as motion } from "../_libs/framer-motion.mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import "../_libs/@aws-sdk/client-s3+[...].mjs";
import { d as orpc } from "./client-BWxMxJtI.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { On as r, kt as e, t as o, yn as c } from "../_libs/phosphor-icons__react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as useAIStore } from "./store-BbVpT1Gu.mjs";
import { r as useIsClient } from "../_libs/usehooks-ts.mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as Spinner } from "./spinner-B6ZHxgo7.mjs";
import { t as Combobox$1 } from "./combobox-WqHaCr-n.mjs";
import { t as Label } from "./label-B2IowpIJ.mjs";
import { t as Separator$1 } from "./separator-CXxNwIYE.mjs";
import { t as Switch$1 } from "./switch-DN9D9WhN.mjs";
import { t as DashboardHeader } from "./header-BKg2LDs7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-CJpqpyfM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var providerOptions = [
	{
		value: "openai",
		label: "OpenAI",
		keywords: [
			"openai",
			"gpt",
			"chatgpt"
		],
		defaultBaseURL: "https://api.openai.com/v1"
	},
	{
		value: "ollama",
		label: "Ollama",
		keywords: [
			"ollama",
			"ai",
			"local"
		],
		defaultBaseURL: "http://localhost:11434"
	},
	{
		value: "anthropic",
		label: "Anthropic Claude",
		keywords: [
			"anthropic",
			"claude",
			"ai"
		],
		defaultBaseURL: "https://api.anthropic.com/v1"
	},
	{
		value: "vercel-ai-gateway",
		label: "Vercel AI Gateway",
		keywords: [
			"vercel",
			"gateway",
			"ai"
		],
		defaultBaseURL: "https://ai-gateway.vercel.sh/v1/ai"
	},
	{
		value: "gemini",
		label: "Google Gemini",
		keywords: [
			"gemini",
			"google",
			"bard"
		],
		defaultBaseURL: "https://generativelanguage.googleapis.com/v1beta"
	}
];
function AIForm() {
	const { set, model, apiKey, baseURL, provider, enabled, testStatus } = useAIStore();
	const selectedOption = (0, import_react.useMemo)(() => {
		return providerOptions.find((option) => option.value === provider);
	}, [provider]);
	const { mutate: testConnection, isPending: isTesting } = useMutation(orpc.ai.testConnection.mutationOptions());
	const handleProviderChange = (value) => {
		if (!value) return;
		set((draft) => {
			draft.provider = value;
		});
	};
	const handleModelChange = (value) => {
		set((draft) => {
			draft.model = value;
		});
	};
	const handleApiKeyChange = (value) => {
		set((draft) => {
			draft.apiKey = value;
		});
	};
	const handleBaseURLChange = (value) => {
		set((draft) => {
			draft.baseURL = value;
		});
	};
	const handleTestConnection = () => {
		testConnection({
			provider,
			model,
			apiKey,
			baseURL
		}, {
			onSuccess: (data) => {
				set((draft) => {
					draft.testStatus = data ? "success" : "failure";
				});
			},
			onError: (error) => {
				set((draft) => {
					draft.testStatus = "failure";
				});
				toast.error(error.message);
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "ai-provider",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "aemBRq" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combobox$1, {
					id: "ai-provider",
					value: provider,
					disabled: enabled,
					options: providerOptions,
					onValueChange: handleProviderChange
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "ai-model",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "scu3wk" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					id: "ai-model",
					name: "ai-model",
					type: "text",
					value: model,
					disabled: enabled,
					onChange: (e) => handleModelChange(e.target.value),
					placeholder: "e.g., gpt-4, claude-3-opus, gemini-pro",
					autoCorrect: "off",
					autoComplete: "off",
					spellCheck: "false",
					autoCapitalize: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-y-2 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "ai-api-key",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yRnk5W" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					id: "ai-api-key",
					name: "ai-api-key",
					type: "password",
					value: apiKey,
					disabled: enabled,
					onChange: (e) => handleApiKeyChange(e.target.value),
					autoCorrect: "off",
					autoComplete: "off",
					spellCheck: "false",
					autoCapitalize: "off",
					"data-lpignore": "true",
					"data-bwignore": "true",
					"data-1p-ignore": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-y-2 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "ai-base-url",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "aLSmnC" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
					id: "ai-base-url",
					name: "ai-base-url",
					type: "url",
					value: baseURL,
					disabled: enabled,
					placeholder: selectedOption?.defaultBaseURL,
					onChange: (e) => handleBaseURLChange(e.target.value),
					autoCorrect: "off",
					autoComplete: "off",
					spellCheck: "false",
					autoCapitalize: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				variant: "outline",
				disabled: isTesting || enabled,
				onClick: handleTestConnection,
				children: [isTesting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {}) : testStatus === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { className: "text-success" }) : testStatus === "failure" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, { className: "text-destructive" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "s7uMvM" })]
			}) })
		]
	});
}
function RouteComponent() {
	const isClient = useIsClient();
	const enabled = useAIStore((state) => state.enabled);
	const canEnable = useAIStore((state) => state.canEnable());
	const setEnabled = useAIStore((state) => state.setEnabled);
	if (!isClient) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeader, {
				icon: r,
				title: i18n._({ id: "Jm1U+x" })
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
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 rounded-sm border bg-popover p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-sm bg-primary/10 p-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {
								className: "text-primary",
								size: 24
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "jUBjoD" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/ZWeEA" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator$1, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "enable-ai",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "/Zv/dZ" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
							id: "enable-ai",
							checked: enabled,
							disabled: !canEnable,
							onCheckedChange: setEnabled
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("flex items-center gap-x-2", enabled ? "text-success" : "text-destructive"),
						children: [enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, {}), enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "RxzN1M" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "E/QGRL" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIForm, {})
				]
			})
		]
	});
}
//#endregion
export { RouteComponent as component };
