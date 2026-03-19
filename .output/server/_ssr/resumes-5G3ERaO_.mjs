import { s as __toESM } from "../_runtime.mjs";
import { t as cn } from "./style-Dwb9U8QV.mjs";
import { Nt as require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { s as require_react } from "../_libs/@ai-sdk/react+[...].mjs";
import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as stripSearchParams } from "../_libs/@tanstack/router-core+[...].mjs";
import { a as useSpring, c as useMotionValue, l as motion, o as useTransform, s as useMotionTemplate } from "../_libs/framer-motion.mjs";
import { c as createServerFn } from "./esm-m5_tZiEi.mjs";
import { a as zod_default } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as createSsrRpc } from "./createSsrRpc-CkqvYI0u.mjs";
import { t as zodValidator } from "../_libs/tanstack__zod-adapter.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resumes-5G3ERaO_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CometCard = ({ rotateDepth = 17.5, translateDepth = 20, glareOpacity = .4, scaleFactor = 1.05, className, children }) => {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);
	const rotateX = useTransform(mouseYSpring, [-.5, .5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
	const rotateY = useTransform(mouseXSpring, [-.5, .5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);
	const translateX = useTransform(mouseXSpring, [-.5, .5], [`-${translateDepth}px`, `${translateDepth}px`]);
	const translateY = useTransform(mouseYSpring, [-.5, .5], [`${translateDepth}px`, `-${translateDepth}px`]);
	const glareBackground = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseXSpring, [-.5, .5], [0, 100])}% ${useTransform(mouseYSpring, [-.5, .5], [0, 100])}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;
	const handleMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const xPct = mouseX / width - .5;
		const yPct = mouseY / height - .5;
		x.set(xPct);
		y.set(yPct);
	};
	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("perspective-distant transform-3d", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			initial: {
				scale: 1,
				z: 0
			},
			className: "relative rounded-md",
			style: {
				rotateX,
				rotateY,
				translateX,
				translateY
			},
			whileHover: {
				z: 50,
				scale: scaleFactor,
				transition: { duration: .2 }
			},
			onMouseMove: handleMouseMove,
			onMouseLeave: handleMouseLeave,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				transition: { duration: .2 },
				style: {
					background: glareBackground,
					opacity: glareOpacity
				},
				className: "pointer-events-none absolute inset-0 z-50 h-full w-full rounded-md mix-blend-overlay"
			})]
		})
	});
};
var $$splitComponentImporter = () => import("./resumes-BwBK4DjU.mjs");
var searchSchema = zod_default.object({
	tags: zod_default.array(zod_default.string()).default([]),
	sort: zod_default.enum([
		"lastUpdatedAt",
		"createdAt",
		"name"
	]).default("lastUpdatedAt")
});
var Route = createFileRoute("/dashboard/resumes/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: zodValidator(searchSchema),
	search: { middlewares: [stripSearchParams({
		tags: [],
		sort: "lastUpdatedAt"
	})] },
	loader: async () => {
		return { view: await getViewServerFn() };
	}
});
var getViewServerFn = createServerFn({ method: "GET" }).handler(createSsrRpc("4b20519717d2ba2f6679a73ed58f69487c7fe8e6cc9cbbf048dd213fa980a675"));
//#endregion
export { Route as n, CometCard as t };
