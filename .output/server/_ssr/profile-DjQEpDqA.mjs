import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DjQEpDqA.js
var $$splitComponentImporter = () => import("./profile-BgkCbvam.mjs");
var Route = createFileRoute("/dashboard/settings/profile")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
zod_default.object({
	name: zod_default.string().trim().min(1).max(64),
	username: zod_default.string().trim().min(1).max(64).regex(/^[a-z0-9._-]+$/, { message: "Username can only contain lowercase letters, numbers, dots, hyphens and underscores." }),
	email: zod_default.email().trim()
});
//#endregion
export { Route as t };
