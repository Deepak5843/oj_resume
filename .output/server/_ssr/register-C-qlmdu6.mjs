import { s as __toESM } from "../_runtime.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import "../_libs/@aws-sdk/client-s3+[...].mjs";
import { n as AlertDescription, r as AlertTitle, t as Alert } from "./alert-CTJXrILL.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { $t as o, Ln as r, Zt as o$1 } from "../_libs/phosphor-icons__react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authClient } from "./client-xNbkeDAk.mjs";
import { o as useToggle } from "../_libs/usehooks-ts.mjs";
import { a as useForm, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, s as FormMessage, t as Form } from "./form-BEU_kK8D.mjs";
import { t as SocialAuth } from "./social-auth-BckSrxR9.mjs";
import { t as Route } from "./register-CpBRa_gR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-C-qlmdu6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formSchema = zod_default.object({
	name: zod_default.string().min(3).max(64),
	username: zod_default.string().min(3).max(64).trim().toLowerCase().regex(/^[a-z0-9._-]+$/, { message: "Username can only contain lowercase letters, numbers, dots, hyphens and underscores." }),
	email: zod_default.email().toLowerCase(),
	password: zod_default.string().min(6).max(64)
});
function RouteComponent() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [showPassword, toggleShowPassword] = useToggle(false);
	const { flags } = Route.useRouteContext();
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: ""
		}
	});
	const onSubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "P1wwqN" }));
		const { error } = await authClient.signUp.email({
			name: data.name,
			email: data.email,
			password: data.password,
			username: data.username,
			displayUsername: data.username,
			callbackURL: "/dashboard"
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		setSubmitted(true);
		toast.dismiss(toastId);
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostSignupScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "mpt9T+" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, {
					id: "jwDCxh",
					components: { 0: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "link",
						nativeButton: false,
						className: "h-auto gap-1.5 px-1! py-0",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth/login",
							children: ["Sign in now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {})]
						})
					}) }
				})
			})]
		}),
		!flags.disableEmailAuth && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-6",
				onSubmit: form.handleSubmit(onSubmit),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "name",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "6YtxFj" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								min: 3,
								max: 64,
								autoComplete: "section-register name",
								placeholder: "John Doe",
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "username",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "7sNhEz" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								min: 3,
								max: 64,
								autoComplete: "section-register username",
								placeholder: "john.doe",
								className: "lowercase",
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "email",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hzKQCy" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								type: "email",
								autoComplete: "section-register email",
								placeholder: "john.doe@example.com",
								className: "lowercase",
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
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
									autoComplete: "section-register new-password",
									...field
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									size: "icon",
									variant: "ghost",
									onClick: toggleShowPassword,
									children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(o$1, {})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						className: "w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "e+RpCP" })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialAuth, {})
	] });
}
function PostSignupScreen() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "37ukDF" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "xrssau" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "RqGmBh" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "L15gWt" }) })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
			nativeButton: false,
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/dashboard",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "xGVfLh" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {})
				]
			})
		})
	] });
}
//#endregion
export { RouteComponent as component };
