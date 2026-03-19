import { s as __toESM } from "../_runtime.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { f as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import "../_libs/@aws-sdk/client-s3+[...].mjs";
import { d as ORPCError } from "../_libs/@orpc/client+[...].mjs";
import { d as orpc } from "./client-BWxMxJtI.mjs";
import { t as Input$1 } from "./input-BL08BOA0.mjs";
import { $t as o, Zt as o$1, vt as e } from "../_libs/phosphor-icons__react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { o as useToggle } from "../_libs/usehooks-ts.mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { a as useForm, t as a } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as FormItem, i as FormField, n as FormControl, o as FormLabel, s as FormMessage, t as Form } from "./form-BEU_kK8D.mjs";
import { t as Route } from "./resume-password-B57UT1ih.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-password-UG7HbasF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formSchema = zod_default.object({ password: zod_default.string().min(6).max(64) });
function RouteComponent() {
	const navigate = useNavigate();
	const { redirect } = Route.useSearch();
	const [showPassword, toggleShowPassword] = useToggle(false);
	const { mutate: verifyPassword } = useMutation(orpc.resume.verifyPassword.mutationOptions());
	const [username, slug] = (0, import_react.useMemo)(() => {
		const [username, slug] = redirect.split("/").slice(1);
		if (!username || !slug) throw navigate({ to: "/" });
		return [username, slug];
	}, [redirect, navigate]);
	const form = useForm({
		resolver: a(formSchema),
		defaultValues: { password: "" }
	});
	const onSubmit = async (data) => {
		const toastId = toast.loading(i18n._({ id: "1Qc25t" }));
		verifyPassword({
			username,
			slug,
			password: data.password
		}, {
			onSuccess: () => {
				toast.dismiss(toastId);
				navigate({
					to: redirect,
					replace: true
				});
			},
			onError: (error) => {
				if (error instanceof ORPCError && error.code === "INVALID_PASSWORD") {
					toast.dismiss(toastId);
					form.setError("password", { message: i18n._({ id: "GLlnzI" }) });
				} else toast.error(error.message, { id: toastId });
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-bold text-2xl tracking-tight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "twTgNR" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-muted-foreground leading-relaxed",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "osXzL9" })
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
		...form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-6",
			onSubmit: form.handleSubmit(onSubmit),
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
							autoComplete: "new-password",
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				type: "submit",
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "VAOn4r" })]
			})]
		})
	})] });
}
//#endregion
export { RouteComponent as component };
