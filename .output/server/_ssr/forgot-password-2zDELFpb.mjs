import { s as __toESM } from "../_runtime.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { Ln as r } from "../_libs/phosphor-icons__react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authClient } from "./client-xNbkeDAk.mjs";
import { a as useForm, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, s as FormMessage, t as Form } from "./form-BEU_kK8D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-2zDELFpb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formSchema = zod_default.object({ email: zod_default.email() });
function RouteComponent() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: { email: "" }
	});
	const onSubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "fGKKVV" }));
		const { error } = await authClient.requestPasswordReset({
			email: data.email,
			redirectTo: "/auth/reset-password"
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		setSubmitted(true);
		toast.dismiss(toastId);
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostForgotPasswordScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-bold text-2xl tracking-tight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "glx6on" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, {
				id: "8FLkpW",
				components: { 0: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "link",
					className: "h-auto gap-1.5 px-1! py-0",
					nativeButton: false,
					render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/auth/login",
						children: ["Sign in now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {})]
					})
				}) }
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
		...form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-6",
			onSubmit: form.handleSubmit(onSubmit),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				control: form.control,
				name: "email",
				render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hzKQCy" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
						type: "email",
						autoComplete: "email",
						placeholder: "john.doe@example.com",
						...field
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				type: "submit",
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "oAkefL" })
			})]
		})
	})] });
}
function PostForgotPasswordScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-bold text-2xl tracking-tight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "37ukDF" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "Mp92ys" })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		nativeButton: false,
		render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "mailto:",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "yDsjJE" })
		})
	})] });
}
//#endregion
export { RouteComponent as component };
