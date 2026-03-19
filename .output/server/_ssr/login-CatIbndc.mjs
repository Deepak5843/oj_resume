import { S as redirect, c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CatIbndc.js
var $$splitComponentImporter = () => import("./login-5L3ydwJZ.mjs");
var Route = createFileRoute("/auth/login")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	beforeLoad: async ({ context }) => {
		if (context.session) throw redirect({
			to: "/dashboard",
			replace: true
		});
		return { session: null };
	}
});
zod_default.object({
	identifier: zod_default.string().trim().toLowerCase(),
	password: zod_default.string().trim().min(6).max(64)
});
//#endregion
export { Route as t };
