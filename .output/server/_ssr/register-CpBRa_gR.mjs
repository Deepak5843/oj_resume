import { S as redirect, c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-CpBRa_gR.js
var $$splitComponentImporter = () => import("./register-C-qlmdu6.mjs");
var Route = createFileRoute("/auth/register")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	beforeLoad: async ({ context }) => {
		if (context.session) throw redirect({
			to: "/dashboard",
			replace: true
		});
		if (context.flags.disableSignups) throw redirect({
			to: "/auth/login",
			replace: true
		});
		return { session: null };
	}
});
zod_default.object({
	name: zod_default.string().min(3).max(64),
	username: zod_default.string().min(3).max(64).trim().toLowerCase().regex(/^[a-z0-9._-]+$/, { message: "Username can only contain lowercase letters, numbers, dots, hyphens and underscores." }),
	email: zod_default.email().toLowerCase(),
	password: zod_default.string().min(6).max(64)
});
//#endregion
export { Route as t };
