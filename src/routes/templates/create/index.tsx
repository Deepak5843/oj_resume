import { Trans } from "@lingui/react/macro";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/templates/create/")({
	component: CreateTemplateLandingPage,
});

function CreateTemplateLandingPage() {
	const navigate = useNavigate();

	const layoutOptions = [
		{
			id: "left-sidebar",
			name: "Left Sidebar",
			description: "Contact info and skills on the left, main content on the right",
			preview: "┌─────┬─────────┐\n│Info │ Content │\n│     │         │\n│Skills│         │\n└─────┴─────────┘",
		},
		{
			id: "right-sidebar",
			name: "Right Sidebar",
			description: "Main content on the left, contact info and skills on the right",
			preview: "┌─────────┬─────┐\n│ Content │Info │\n│         │     │\n│         │Skills│\n└─────────┴─────┘",
		},
		{
			id: "single-column",
			name: "Single Column",
			description: "Traditional single-column layout for all content",
			preview: "┌─────────────┐\n│   Header    │\n├─────────────┤\n│   Content    │\n│              │\n├─────────────┤\n│   Skills     │\n└─────────────┘",
		},
	]

	const handleStartBuilding = (layoutId: string) => {
		navigate({ 
			to: "/templates/create/builder",
			search: { layout: layoutId }
		})
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<div className="border-b bg-card">
				<div className="container mx-auto px-6 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex items-center gap-4"
					>
						<Link to="/templates">
							<Button variant="ghost" size="sm" className="flex items-center gap-2">
								<ArrowLeftIcon size={16} />
								<Trans>Back to Gallery</Trans>
							</Button>
						</Link>

						<div>
							<h1 className="font-bold text-3xl tracking-tight">
								<Trans>Create Your Template</Trans>
							</h1>
							<p className="text-muted-foreground">
								<Trans>Choose a layout to get started with your custom resume template</Trans>
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Layout Options */}
			<div className="container mx-auto px-6 py-8">
				<div className="mx-auto max-w-4xl">
					<div className="grid gap-6 md:grid-cols-3">
						{layoutOptions.map((layout, index) => (
							<motion.div
								key={layout.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Card className="h-full transition-all duration-300 hover:shadow-lg">
									<CardHeader>
										<CardTitle className="text-xl">{layout.name}</CardTitle>
										<CardDescription>{layout.description}</CardDescription>
									</CardHeader>
									<CardContent className="flex flex-col h-full">
										<pre className="text-xs text-muted-foreground mb-4 flex-1">
											{layout.preview}
										</pre>
										<Button 
											onClick={() => handleStartBuilding(layout.id)}
											className="w-full"
										>
											<Trans>Start Building</Trans>
											<ArrowRightIcon size={16} className="ml-2" />
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
