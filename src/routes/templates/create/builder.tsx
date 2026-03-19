import { Trans } from "@lingui/react/macro";
import { ArrowLeftIcon, ArrowRightIcon, DownloadSimpleIcon, EyeIcon } from "@phosphor-icons/react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

type LayoutOption = "left-sidebar" | "right-sidebar" | "single-column";

interface TemplateData {
	name: string;
	email: string;
	phone: string;
	location: string;
	summary: string;
	workExperience: Array<{
		company: string;
		position: string;
		startDate: string;
		endDate: string;
		description: string;
	}>;
	education: Array<{
		school: string;
		degree: string;
		startDate: string;
		endDate: string;
	}>;
	skills: string[];
}

export const Route = createFileRoute("/templates/create/builder")({
	component: CreateTemplateBuilderPage,
});

function CreateTemplateBuilderPage() {
	const router = useRouter();
	const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
	const [selectedLayout, setSelectedLayout] = useState<LayoutOption>("single-column");
	const [templateName, setTemplateName] = useState("");

	const [templateData, setTemplateData] = useState<TemplateData>({
		name: "",
		email: "",
		phone: "",
		location: "",
		summary: "",
		workExperience: [],
		education: [],
		skills: [],
	});

	const layouts = [
		{
			id: "left-sidebar" as LayoutOption,
			name: "Left Sidebar",
			description: "Contact info and skills on the left, main content on the right",
			preview: "┌─────┬─────────┐\n│Info │ Content │\n│     │         │\n│Skills│         │\n└─────┴─────────┘",
		},
		{
			id: "right-sidebar" as LayoutOption,
			name: "Right Sidebar",
			description: "Main content on the left, contact info and skills on the right",
			preview: "┌─────────┬─────┐\n│ Content │Info │\n│         │     │\n│         │Skills│\n└─────────┴─────┘",
		},
		{
			id: "single-column" as LayoutOption,
			name: "Single Column",
			description: "Traditional single-column layout for all content",
			preview:
				"┌─────────────┐\n│   Header    │\n├─────────────┤\n│   Content    │\n│              │\n├─────────────┤\n│   Skills     │\n└─────────────┘",
		},
	];

	const addWorkExperience = () => {
		setTemplateData((prev) => ({
			...prev,
			workExperience: [
				...prev.workExperience,
				{
					company: "",
					position: "",
					startDate: "",
					endDate: "",
					description: "",
				},
			],
		}));
	};

	const updateWorkExperience = (index: number, field: string, value: string) => {
		setTemplateData((prev) => ({
			...prev,
			workExperience: prev.workExperience.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp)),
		}));
	};

	const removeWorkExperience = (index: number) => {
		setTemplateData((prev) => ({
			...prev,
			workExperience: prev.workExperience.filter((_, i) => i !== index),
		}));
	};

	const addEducation = () => {
		setTemplateData((prev) => ({
			...prev,
			education: [
				...prev.education,
				{
					school: "",
					degree: "",
					startDate: "",
					endDate: "",
				},
			],
		}));
	};

	const updateEducation = (index: number, field: string, value: string) => {
		setTemplateData((prev) => ({
			...prev,
			education: prev.education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu)),
		}));
	};

	const removeEducation = (index: number) => {
		setTemplateData((prev) => ({
			...prev,
			education: prev.education.filter((_, i) => i !== index),
		}));
	};

	const addSkill = () => {
		const skillInput = document.getElementById("new-skill") as HTMLInputElement;
		const skill = skillInput?.value.trim();
		if (skill && !templateData.skills.includes(skill)) {
			setTemplateData((prev) => ({
				...prev,
				skills: [...prev.skills, skill],
			}));
			if (skillInput) skillInput.value = "";
		}
	};

	const removeSkill = (skill: string) => {
		setTemplateData((prev) => ({
			...prev,
			skills: prev.skills.filter((s) => s !== skill),
		}));
	};

	const saveTemplate = () => {
		const templateId = `custom-${Date.now()}`;
		const customTemplates = JSON.parse(localStorage.getItem("custom-templates") || "[]");

		const newTemplate = {
			id: templateId,
			name: templateName || "Custom Template",
			layout: selectedLayout,
			data: templateData,
			createdAt: new Date().toISOString(),
			isCustom: true,
		};

		customTemplates.push(newTemplate);
		localStorage.setItem("custom-templates", JSON.stringify(customTemplates));

		router.navigate({ to: "/templates" });
	};

	const nextStep = () => {
		if (currentStep < 3) setCurrentStep((currentStep + 1) as 2 | 3);
	};

	const prevStep = () => {
		if (currentStep > 1) setCurrentStep((currentStep - 1) as 1 | 2);
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<div className="border-b bg-card">
				<div className="container mx-auto px-6 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex items-center justify-between"
					>
						<div className="flex items-center gap-4">
							<Link to="/templates/create">
								<Button variant="ghost" size="sm" className="flex items-center gap-2">
									<ArrowLeftIcon size={16} />
									<Trans>Back</Trans>
								</Button>
							</Link>
							<div>
								<h1 className="font-bold text-3xl tracking-tight">
									<Trans>Create Custom Template</Trans>
								</h1>
								<p className="text-muted-foreground">
									<Trans>Step {currentStep} of 3</Trans>
								</p>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<div className="flex items-center gap-2 text-muted-foreground text-sm">
								<div
									className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
								>
									1
								</div>
								<div
									className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
								>
									2
								</div>
								<div
									className={`flex h-8 w-8 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
								>
									3
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-6 py-8">
				<div className="grid gap-8 lg:grid-cols-2">
					{/* Left Column - Form */}
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
						{currentStep === 1 && (
							<div className="space-y-6">
								<div>
									<h2 className="mb-4 font-semibold text-xl">
										<Trans>Choose Layout</Trans>
									</h2>
									{layouts.map((layout) => (
										<Card
											key={layout.id}
											className={`cursor-pointer transition-all hover:shadow-md ${selectedLayout === layout.id ? "ring-2 ring-primary" : ""}`}
											onClick={() => setSelectedLayout(layout.id)}
										>
											<CardHeader>
												<div className="flex items-start gap-3">
													<div
														className={`h-4 w-4 rounded-full border-2 ${selectedLayout === layout.id ? "border-primary bg-primary" : "border-muted"}`}
													>
														{selectedLayout === layout.id && (
															<div className="m-auto mt-0.5 h-2 w-2 rounded-full bg-primary-foreground" />
														)}
													</div>
													<div className="flex-1">
														<CardTitle className="text-lg">{layout.name}</CardTitle>
														<CardDescription>{layout.description}</CardDescription>
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<pre className="text-muted-foreground text-xs">{layout.preview}</pre>
											</CardContent>
										</Card>
									))}
								</div>

								<div className="flex justify-end">
									<Button onClick={nextStep} className="flex items-center gap-2">
										<Trans>Next</Trans>
										<ArrowRightIcon size={16} />
									</Button>
								</div>
							</div>
						)}

						{currentStep === 2 && (
							<div className="space-y-6">
								<div>
									<h2 className="mb-4 font-semibold text-xl">
										<Trans>Template Information</Trans>
									</h2>
									<div className="space-y-4">
										<div>
											<Label htmlFor="template-name">
												<Trans>Template Name</Trans>
											</Label>
											<Input
												id="template-name"
												value={templateName}
												onChange={(e) => setTemplateName(e.target.value)}
												placeholder="My Custom Template"
											/>
										</div>

										<Separator />

										<div>
											<h3 className="mb-3 font-medium">
												<Trans>Personal Information</Trans>
											</h3>
											<div className="space-y-3">
												<div>
													<Label htmlFor="name">
														<Trans>Name</Trans>
													</Label>
													<Input
														id="name"
														value={templateData.name}
														onChange={(e) => setTemplateData((prev) => ({ ...prev, name: e.target.value }))}
														placeholder="John Doe"
													/>
												</div>
												<div className="grid gap-3 md:grid-cols-2">
													<div>
														<Label htmlFor="email">
															<Trans>Email</Trans>
														</Label>
														<Input
															id="email"
															type="email"
															value={templateData.email}
															onChange={(e) => setTemplateData((prev) => ({ ...prev, email: e.target.value }))}
															placeholder="john@example.com"
														/>
													</div>
													<div>
														<Label htmlFor="phone">
															<Trans>Phone</Trans>
														</Label>
														<Input
															id="phone"
															value={templateData.phone}
															onChange={(e) => setTemplateData((prev) => ({ ...prev, phone: e.target.value }))}
															placeholder="+1 (555) 123-4567"
														/>
													</div>
												</div>
												<div>
													<Label htmlFor="location">
														<Trans>Location</Trans>
													</Label>
													<Input
														id="location"
														value={templateData.location}
														onChange={(e) => setTemplateData((prev) => ({ ...prev, location: e.target.value }))}
														placeholder="New York, NY"
													/>
												</div>
												<div>
													<Label htmlFor="summary">
														<Trans>Professional Summary</Trans>
													</Label>
													<Textarea
														id="summary"
														value={templateData.summary}
														onChange={(e) => setTemplateData((prev) => ({ ...prev, summary: e.target.value }))}
														placeholder="Experienced professional with a proven track record..."
														rows={3}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="flex justify-between">
									<Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
										<ArrowLeftIcon size={16} />
										<Trans>Previous</Trans>
									</Button>
									<Button onClick={nextStep} className="flex items-center gap-2">
										<Trans>Next</Trans>
										<ArrowRightIcon size={16} />
									</Button>
								</div>
							</div>
						)}

						{currentStep === 3 && (
							<div className="space-y-6">
								<div>
									<h2 className="mb-4 font-semibold text-xl">
										<Trans>Experience & Skills</Trans>
									</h2>

									{/* Work Experience */}
									<div className="mb-6">
										<div className="mb-3 flex items-center justify-between">
											<h3 className="font-medium">
												<Trans>Work Experience</Trans>
											</h3>
											<Button size="sm" onClick={addWorkExperience}>
												<Trans>Add Experience</Trans>
											</Button>
										</div>
										<div className="space-y-3">
											{templateData.workExperience.map((exp, index) => (
												<Card key={index}>
													<CardHeader>
														<div className="flex items-center justify-between">
															<h4 className="font-medium text-sm">
																<Trans>Experience {index + 1}</Trans>
															</h4>
															<Button size="sm" variant="outline" onClick={() => removeWorkExperience(index)}>
																<Trans>Remove</Trans>
															</Button>
														</div>
													</CardHeader>
													<CardContent>
														<div className="space-y-3">
															<div className="grid gap-3 md:grid-cols-2">
																<div>
																	<Label>
																		<Trans>Company</Trans>
																	</Label>
																	<Input
																		value={exp.company}
																		onChange={(e) => updateWorkExperience(index, "company", e.target.value)}
																		placeholder="Company Name"
																	/>
																</div>
																<div>
																	<Label>
																		<Trans>Position</Trans>
																	</Label>
																	<Input
																		value={exp.position}
																		onChange={(e) => updateWorkExperience(index, "position", e.target.value)}
																		placeholder="Job Title"
																	/>
																</div>
															</div>
															<div className="grid gap-3 md:grid-cols-2">
																<div>
																	<Label>
																		<Trans>Start Date</Trans>
																	</Label>
																	<Input
																		value={exp.startDate}
																		onChange={(e) => updateWorkExperience(index, "startDate", e.target.value)}
																		placeholder="Jan 2020"
																	/>
																</div>
																<div>
																	<Label>
																		<Trans>End Date</Trans>
																	</Label>
																	<Input
																		value={exp.endDate}
																		onChange={(e) => updateWorkExperience(index, "endDate", e.target.value)}
																		placeholder="Present"
																	/>
																</div>
															</div>
															<div>
																<Label>
																	<Trans>Description</Trans>
																</Label>
																<Textarea
																	value={exp.description}
																	onChange={(e) => updateWorkExperience(index, "description", e.target.value)}
																	placeholder="Describe your role and achievements..."
																	rows={2}
																/>
															</div>
														</div>
													</CardContent>
												</Card>
											))}
											{templateData.workExperience.length === 0 && (
												<p className="py-4 text-center text-muted-foreground">
													<Trans>No work experience added yet</Trans>
												</p>
											)}
										</div>
									</div>

									<Separator />

									{/* Education */}
									<div className="mb-6">
										<div className="mb-3 flex items-center justify-between">
											<h3 className="font-medium">
												<Trans>Education</Trans>
											</h3>
											<Button size="sm" onClick={addEducation}>
												<Trans>Add Education</Trans>
											</Button>
										</div>
										<div className="space-y-3">
											{templateData.education.map((edu, index) => (
												<Card key={index}>
													<CardHeader>
														<div className="flex items-center justify-between">
															<h4 className="font-medium text-sm">
																<Trans>Education {index + 1}</Trans>
															</h4>
															<Button size="sm" variant="outline" onClick={() => removeEducation(index)}>
																<Trans>Remove</Trans>
															</Button>
														</div>
													</CardHeader>
													<CardContent>
														<div className="space-y-3">
															<div className="grid gap-3 md:grid-cols-2">
																<div>
																	<Label>
																		<Trans>School</Trans>
																	</Label>
																	<Input
																		value={edu.school}
																		onChange={(e) => updateEducation(index, "school", e.target.value)}
																		placeholder="University Name"
																	/>
																</div>
																<div>
																	<Label>
																		<Trans>Degree</Trans>
																	</Label>
																	<Input
																		value={edu.degree}
																		onChange={(e) => updateEducation(index, "degree", e.target.value)}
																		placeholder="Bachelor of Science"
																	/>
																</div>
															</div>
															<div className="grid gap-3 md:grid-cols-2">
																<div>
																	<Label>
																		<Trans>Start Date</Trans>
																	</Label>
																	<Input
																		value={edu.startDate}
																		onChange={(e) => updateEducation(index, "startDate", e.target.value)}
																		placeholder="2016"
																	/>
																</div>
																<div>
																	<Label>
																		<Trans>End Date</Trans>
																	</Label>
																	<Input
																		value={edu.endDate}
																		onChange={(e) => updateEducation(index, "endDate", e.target.value)}
																		placeholder="2020"
																	/>
																</div>
															</div>
														</div>
													</CardContent>
												</Card>
											))}
											{templateData.education.length === 0 && (
												<p className="py-4 text-center text-muted-foreground">
													<Trans>No education added yet</Trans>
												</p>
											)}
										</div>
									</div>

									<Separator />

									{/* Skills */}
									<div>
										<div className="mb-3">
											<h3 className="font-medium">
												<Trans>Skills</Trans>
											</h3>
										</div>
										<div className="space-y-3">
											<div className="flex gap-2">
												<Input
													id="new-skill"
													placeholder="Add a skill..."
													onKeyPress={(e) => e.key === "Enter" && addSkill()}
												/>
												<Button onClick={addSkill}>
													<Trans>Add</Trans>
												</Button>
											</div>
											<div className="flex flex-wrap gap-2">
												{templateData.skills.map((skill) => (
													<Badge
														key={skill}
														variant="secondary"
														className="cursor-pointer"
														onClick={() => removeSkill(skill)}
													>
														{skill} ×
													</Badge>
												))}
											</div>
											{templateData.skills.length === 0 && (
												<p className="py-4 text-center text-muted-foreground">
													<Trans>No skills added yet</Trans>
												</p>
											)}
										</div>
									</div>
								</div>

								<div className="flex justify-between">
									<Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
										<ArrowLeftIcon size={16} />
										<Trans>Previous</Trans>
									</Button>
									<Button onClick={saveTemplate} className="flex items-center gap-2">
										<DownloadSimpleIcon size={16} />
										<Trans>Save Template</Trans>
									</Button>
								</div>
							</div>
						)}
					</motion.div>

					{/* Right Column - Preview */}
					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
						<div className="sticky top-8">
							<div className="mb-4 flex items-center gap-2">
								<EyeIcon size={20} />
								<h3 className="font-semibold text-lg">
									<Trans>Live Preview</Trans>
								</h3>
							</div>
							<Card>
								<CardContent className="p-6">
									<div className="origin-top scale-50 rounded border border-gray-200 bg-white p-4">
										<div className="text-center">
											<h3 className="font-bold text-lg">{templateData.name || "Your Name"}</h3>
											<p className="text-gray-600 text-sm">
												{templateData.email} • {templateData.phone}
											</p>
											<p className="text-gray-600 text-sm">{templateData.location}</p>
										</div>
										{templateData.summary && (
											<div className="mt-4">
												<h4 className="font-semibold">Professional Summary</h4>
												<p className="mt-1 text-sm">{templateData.summary}</p>
											</div>
										)}
										{templateData.workExperience.length > 0 && (
											<div className="mt-4">
												<h4 className="font-semibold">Work Experience</h4>
												{templateData.workExperience.map((exp, index) => (
													<div key={index} className="mt-2">
														<p className="font-medium">
															{exp.position} at {exp.company}
														</p>
														<p className="text-gray-600 text-sm">
															{exp.startDate} - {exp.endDate}
														</p>
													</div>
												))}
											</div>
										)}
										{templateData.skills.length > 0 && (
											<div className="mt-4">
												<h4 className="font-semibold">Skills</h4>
												<div className="mt-1 flex flex-wrap gap-1">
													{templateData.skills.map((skill) => (
														<span key={skill} className="rounded bg-gray-100 px-2 py-1 text-xs">
															{skill}
														</span>
													))}
												</div>
											</div>
										)}
									</div>
								</CardContent>
							</Card>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
