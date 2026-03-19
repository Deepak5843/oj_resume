import { i as TSS_SERVER_FUNCTION } from "./esm-m5_tZiEi.mjs";
import { t as getServerFnById } from "../__tanstack-start-server-fn-resolver-BcLDBzBo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/createSsrRpc-CkqvYI0u.js
var createSsrRpc = (functionId, importer) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (importer ? await importer() : await getServerFnById(functionId))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
export { createSsrRpc as t };
