import { S as redirect, c as createFileRoute, s as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { Rr as object, Xr as string } from "./_libs/@ai-sdk/anthropic+[...].mjs";
import { a as env$1, o as getORPCClient, v as verifyPrinterToken } from "./_ssr/client-BWxMxJtI.mjs";
import { t as zodValidator } from "./_libs/tanstack__zod-adapter.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_resumeId-Oq5DO-hI.js
var $$splitComponentImporter = () => import("./_resumeId-BzKQBmv3.mjs");
var searchSchema = object({ token: string().catch("") });
var Route = createFileRoute("/printer/$resumeId")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: zodValidator(searchSchema),
	beforeLoad: async ({ params, search }) => {
		if (env$1.FLAG_DEBUG_PRINTER) return;
		try {
			if (verifyPrinterToken(search.token) !== params.resumeId) throw new Error();
		} catch {
			throw redirect({
				to: "/",
				search: {},
				throw: true
			});
		}
	},
	loader: async ({ params }) => {
		return { resume: await getORPCClient().resume.getByIdForPrinter({ id: params.resumeId }) };
	}
});
//#endregion
export { Route as t };
