import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "./-sections/footer";
import { Hero } from "./-sections/hero";
import { Templates } from "./-sections/templates";

export const Route = createFileRoute("/_home/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main id="main-content" className="relative">
			<Hero />
			<Templates />
			<Footer />
		</main>
	);
}
