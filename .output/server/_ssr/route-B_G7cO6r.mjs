import { S as redirect, c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn } from "./esm-m5_tZiEi.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createSsrRpc } from "./createSsrRpc-CkqvYI0u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-B_G7cO6r.js
var getDashboardSidebarServerFn = createServerFn({ method: "GET" }).handler(createSsrRpc("513aca5e0aecd5ef992128f5d4c9f895e12f04155f3f4abd4b56c78ca99ffe64"));
var setDashboardSidebarServerFn = createServerFn({ method: "POST" }).inputValidator(zod_default.boolean()).handler(createSsrRpc("0a9b531e4949df5a7e5b01de45fa3f757b2e20ce8fda163d34303c4021aaf35e"));
var $$splitComponentImporter = () => import("./route-Bh4-_WF0.mjs");
var Route = createFileRoute("/dashboard")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	beforeLoad: async ({ context }) => {
		if (!context.session) throw redirect({
			to: "/auth/login",
			replace: true
		});
		return { session: context.session };
	},
	loader: async () => {
		return { sidebarState: await getDashboardSidebarServerFn() };
	}
});
//#endregion
export { setDashboardSidebarServerFn as n, Route as t };
