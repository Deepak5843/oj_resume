import { _ as setCookie$1, c as createServerFn, u as getCookie } from "./esm-m5_tZiEi.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-BR3zZJCy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/functions-mN8cbK-8.js
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var getDashboardSidebarServerFn_createServerFn_handler = createServerRpc({
	id: "513aca5e0aecd5ef992128f5d4c9f895e12f04155f3f4abd4b56c78ca99ffe64",
	name: "getDashboardSidebarServerFn",
	filename: "src/routes/dashboard/-components/functions.ts"
}, (opts) => getDashboardSidebarServerFn.__executeServer(opts));
var getDashboardSidebarServerFn = createServerFn({ method: "GET" }).handler(getDashboardSidebarServerFn_createServerFn_handler, async () => {
	return getCookie(SIDEBAR_COOKIE_NAME) !== "false";
});
var setDashboardSidebarServerFn_createServerFn_handler = createServerRpc({
	id: "0a9b531e4949df5a7e5b01de45fa3f757b2e20ce8fda163d34303c4021aaf35e",
	name: "setDashboardSidebarServerFn",
	filename: "src/routes/dashboard/-components/functions.ts"
}, (opts) => setDashboardSidebarServerFn.__executeServer(opts));
var setDashboardSidebarServerFn = createServerFn({ method: "POST" }).inputValidator(zod_default.boolean()).handler(setDashboardSidebarServerFn_createServerFn_handler, async ({ data }) => {
	setCookie$1(SIDEBAR_COOKIE_NAME, data.toString());
});
//#endregion
export { getDashboardSidebarServerFn_createServerFn_handler, setDashboardSidebarServerFn_createServerFn_handler };
