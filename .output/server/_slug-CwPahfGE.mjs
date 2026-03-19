import { S as redirect, T as notFound, c as createFileRoute, s as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as ORPCError } from "./_libs/@orpc/client+[...].mjs";
import { d as orpc } from "./_ssr/client-BWxMxJtI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CwPahfGE.js
var $$splitComponentImporter = () => import("./_slug-D7EPLfMs.mjs");
var Route = createFileRoute("/$username/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async ({ context, params: { username, slug } }) => {
		if (username === ".well-known") throw notFound();
		return { resume: await context.queryClient.ensureQueryData(orpc.resume.getBySlug.queryOptions({ input: {
			username,
			slug
		} })) };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.resume.name} - Reactive Resume` : "Reactive Resume" }] }),
	onError: (error) => {
		if (error instanceof ORPCError && error.code === "NEED_PASSWORD") {
			const data = error.data;
			const username = data?.username;
			const slug = data?.slug;
			if (username && slug) throw redirect({
				to: "/auth/resume-password",
				search: { redirect: `/${username}/${slug}` }
			});
		}
		throw notFound();
	}
});
//#endregion
export { Route as t };
