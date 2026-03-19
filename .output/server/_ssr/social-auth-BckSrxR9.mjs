import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { t as Button$1 } from "./button-C8loFr-r.mjs";
import { m as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Trans } from "../_libs/lingui__react.mjs";
import { t as i18n } from "../_libs/lingui__core.mjs";
import { d as orpc } from "./client-BWxMxJtI.mjs";
import { Lt as e, i as t, zt as t$1 } from "../_libs/phosphor-icons__react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as authClient } from "./client-xNbkeDAk.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/social-auth-BckSrxR9.js
var import_jsx_runtime = require_jsx_runtime();
function SocialAuth() {
	const router = useRouter();
	const { data: authProviders = {} } = useQuery(orpc.auth.providers.list.queryOptions());
	const handleSocialLogin = async (provider) => {
		const toastId = toast.loading(i18n._({ id: "XOxZT4" }));
		const { error } = await authClient.signIn.social({
			provider,
			callbackURL: "/dashboard"
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		toast.dismiss(toastId);
		router.invalidate();
	};
	const handleOAuthLogin = async () => {
		const toastId = toast.loading(i18n._({ id: "XOxZT4" }));
		const { error } = await authClient.signIn.oauth2({
			providerId: "custom",
			callbackURL: "/dashboard"
		});
		if (error) {
			toast.error(error.message, { id: toastId });
			return;
		}
		toast.dismiss(toastId);
		router.invalidate();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-x-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "flex-1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-xs tracking-wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trans, { id: "3BEoB6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "flex-1" })
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-2 gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				variant: "secondary",
				onClick: handleOAuthLogin,
				className: cn("hidden", "custom" in authProviders && "inline-flex"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t, {}), authProviders.custom]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				onClick: () => handleSocialLogin("google"),
				className: cn("hidden flex-1 bg-[#4285F4] text-white hover:bg-[#4285F4]/80", "google" in authProviders && "inline-flex"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, {}), "Google"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				onClick: () => handleSocialLogin("github"),
				className: cn("hidden flex-1 bg-[#2b3137] text-white hover:bg-[#2b3137]/80", "github" in authProviders && "inline-flex"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t$1, {}), "GitHub"]
			})
		]
	}) })] });
}
//#endregion
export { SocialAuth as t };
