import { s as __toESM } from "./_runtime.mjs";
import { Nt as require_jsx_runtime } from "./_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "./_libs/@ai-sdk/react+[...].mjs";
import "./_libs/@aws-sdk/client-s3+[...].mjs";
import { d as useResumeStore } from "./_ssr/resume-ChldmFWM.mjs";
import { t as ResumePreview } from "./_ssr/preview-spne3rtR.mjs";
import { t as LoadingScreen } from "./_ssr/loading-screen-CwbgZ59V.mjs";
import { t as Route } from "./_resumeId-Oq5DO-hI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_resumeId-BzKQBmv3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { resume } = Route.useLoaderData();
	const isReady = useResumeStore((state) => state.isReady);
	const initialize = useResumeStore((state) => state.initialize);
	(0, import_react.useEffect)(() => {
		if (!resume) return;
		initialize(resume);
		return () => initialize(null);
	}, [resume, initialize]);
	if (!isReady) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumePreview, { pageClassName: "print:w-full!" });
}
//#endregion
export { RouteComponent as component };
