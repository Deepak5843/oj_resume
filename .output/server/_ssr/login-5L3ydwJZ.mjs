import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { f as useNavigate, m as useRouter, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import "../_libs/@aws-sdk/client-s3+[...].mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { $t as o, Ln as r, Zt as o$1 } from "../_libs/phosphor-icons__react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authClient } from "./client-xNbkeDAk.mjs";
import { o as useToggle } from "../_libs/usehooks-ts.mjs";
import { a as useForm, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, r as FormDescription, s as FormMessage, t as Form } from "./form-BEU_kK8D.mjs";
import { t as Route } from "./login-CatIbndc.mjs";
import { t as SocialAuth } from "./social-auth-BckSrxR9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-5L3ydwJZ.js
var import_jsx_runtime = require_jsx_runtime();
var formSchema = zod_default.object({
	identifier: zod_default.string().trim().toLowerCase(),
	password: zod_default.string().trim().min(6).max(64)
});
function RouteComponent() {
	const router = useRouter();
	const navigate = useNavigate();
	const [showPassword, toggleShowPassword] = useToggle(false);
	const { flags } = Route.useRouteContext();
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: {
			identifier: "",
			password: ""
		}
	});
	const onSubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "XOxZT4" }));
		try {
			const result = data.identifier.includes("@") ? await authClient.signIn.email({
				email: data.identifier,
				password: data.password
			}) : await authClient.signIn.username({
				username: data.identifier,
				password: data.password
			});
			if (result.error) {
				toast.error(result.error.message, { id: toastId });
				return;
			}
			if (result.data && typeof result.data === "object" && "twoFactorRedirect" in result.data && result.data.twoFactorRedirect) {
				toast.dismiss(toastId);
				navigate({
					to: "/auth/verify-2fa",
					replace: true
				});
				return;
			}
			await router.invalidate();
			toast.dismiss(toastId);
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch {
			toast.error(i18n._({ id: "oeF+HP" }), { id: toastId });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "NxCJcc" })
			}), !flags.disableSignups && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, {
					id: "XQAxX+",
					components: { 0: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "link",
						nativeButton: false,
						className: "h-auto gap-1.5 px-1! py-0",
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth/register",
							children: ["Create one now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {})]
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
						name: "identifier",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "hzKQCy" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								autoComplete: "section-login username",
								placeholder: "john.doe@example.com",
								className: "lowercase",
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "TNcvC0" }) })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "password",
						render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "8ZsakT" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
									tabIndex: -1,
									variant: "link",
									nativeButton: false,
									className: "h-auto p-0 text-xs leading-none",
									render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/auth/forgot-password",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "jDFIo5" })
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-x-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									min: 6,
									max: 64,
									type: showPassword ? "text" : "password",
									autoComplete: "section-login current-password",
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "5lWFkC" })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialAuth, {})
	] });
}
//#endregion
export { RouteComponent as component };
