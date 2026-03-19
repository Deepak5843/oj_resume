import { Trans } from "@lingui/react/macro";
import { ArrowLeftIcon, PlusIcon, SparkleIcon } from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/templates/create")({
	component: CreateTemplatePage,
});

function CreateTemplatePage() {
	const creationMethods = [
		{
			id: "from-scratch",
			title: "Start from Scratch",
			description: "Create a completely custom template with our visual editor",
			icon: PlusIcon,
			href: "/templates/create/builder",
			color: "bg-blue-500",
		},
		{
			id: "from-existing",
			title: "Based on Existing Template",
			description: "Use an existing template as a starting point and customize it",
			icon: SparkleIcon,
			href: "/templates/create/from-existing",
			color: "bg-purple-500",
		},
	];

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
								<Trans>Back to Templates</Trans>
							</Button>
						</Link>

						<div>
							<h1 className="font-bold text-3xl tracking-tight">
								<Trans>Create New Template</Trans>
							</h1>
							<p className="text-muted-foreground">
								<Trans>Choose how you'd like to create your custom resume template</Trans>
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Creation Methods */}
			<div className="container mx-auto px-6 py-8">
				<div className="mx-auto max-w-4xl">
					<div className="grid gap-6 md:grid-cols-2">
						{creationMethods.map((method, index) => (
							<motion.div
								key={method.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<Link to={method.href}>
									<Card className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
										<CardHeader>
											<div className="flex items-center gap-3">
												<div className={`rounded-lg p-2 ${method.color} text-white`}>
													<method.icon size={24} />
												</div>
												<div>
													<CardTitle className="text-xl">{method.title}</CardTitle>
												</div>
											</div>
										</CardHeader>
										<CardContent>
											<CardDescription className="text-base">{method.description}</CardDescription>

											<div className="mt-4 flex items-center text-primary group-hover:underline">
												<Trans>Get Started</Trans>
												<span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
											</div>
										</CardContent>
									</Card>
								</Link>
							</motion.div>
						))}
					</div>

					{/* Coming Soon Features */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="mt-12"
					>
						<Card className="bg-muted/50">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<SparkleIcon size={20} />
									<Trans>Coming Soon</Trans>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4 md:grid-cols-3">
									<div className="p-4 text-center">
										<div className="mb-2 text-2xl">🤖</div>
										<h3 className="mb-1 font-semibold">
											<Trans>AI-Powered Generation</Trans>
										</h3>
										<p className="text-muted-foreground text-sm">
											<Trans>Generate templates using AI based on your preferences</Trans>
										</p>
									</div>
									<div className="p-4 text-center">
										<div className="mb-2 text-2xl">📥</div>
										<h3 className="mb-1 font-semibold">
											<Trans>Import Existing</Trans>
										</h3>
										<p className="text-muted-foreground text-sm">
											<Trans>Import and convert existing resume designs</Trans>
										</p>
									</div>
									<div className="p-4 text-center">
										<div className="mb-2 text-2xl">🌐</div>
										<h3 className="mb-1 font-semibold">
											<Trans>Community Templates</Trans>
										</h3>
										<p className="text-muted-foreground text-sm">
											<Trans>Browse and use templates from the community</Trans>
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
