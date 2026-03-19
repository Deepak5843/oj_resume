import { S as redirect, _ as SearchParamError, c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as zodValidator } from "../_libs/tanstack__zod-adapter.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-password-B57UT1ih.js
var $$splitComponentImporter = () => import("./resume-password-UG7HbasF.mjs");
var searchSchema = zod_default.object({ redirect: zod_default.string().min(1).regex(/^\/[^/]+\/[^/]+$/) });
var Route = createFileRoute("/auth/resume-password")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: zodValidator(searchSchema),
	onError: (error) => {
		if (error instanceof SearchParamError) throw redirect({ to: "/" });
	}
});
zod_default.object({ password: zod_default.string().min(6).max(64) });
//#endregion
export { Route as t };
