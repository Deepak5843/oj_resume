import { S as redirect, _ as SearchParamError, c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as zodValidator } from "../_libs/tanstack__zod-adapter.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-DETk9CKZ.js
var $$splitComponentImporter = () => import("./reset-password-CkitlbiQ.mjs");
var searchSchema = zod_default.object({ token: zod_default.string().min(1) });
var Route = createFileRoute("/auth/reset-password")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: zodValidator(searchSchema),
	beforeLoad: async ({ context }) => {
		if (context.flags.disableEmailAuth) throw redirect({
			to: "/auth/login",
			replace: true
		});
	},
	onError: (error) => {
		if (error instanceof SearchParamError) throw redirect({ to: "/auth/login" });
	}
});
zod_default.object({ password: zod_default.string().min(6).max(64) });
//#endregion
export { Route as t };
