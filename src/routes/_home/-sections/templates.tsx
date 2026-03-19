import { Trans } from "@lingui/react/macro";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export function Templates() {
	const templates = [
		{
			title: "The Minimalist",
			description: "Clean, white-space focused, and highly efficient.",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFOwCiNiS1xQjpPyAvH-brgGsdqg9AHrXkP8o6HfwPbYKGGK3DAU8oHr4OXLRVeJpZNljtpKkYdeQFKyIjfCtP-K0zXkAyCpkeBLE0gYgQ0BkRkemb0JmCuijfIbpGbkZo9vnnFW4CKhWuye_zAbyuKSIjiX3n1hAWHkzQJAcnRwbkVZwrxKg5XpvaU1PZy96V9yY_WZ7lI_WFWJHg4RyFXar4pmZNlVGqhwunP_exHmRJ9sr8AJISlHHKeMkGQJICkyulFp-7Qz0"
		},
		{
			title: "The Executive",
			description: "Bold, structured, and authoritative design.",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqwKMpC7xP2P_NkQmlYjhY8JGKwRUceiHyJWYtkSwlAs5aXmG4_dnDWv59aH7bdfgBe7gF3cp6tlNH-iOEmfzYtY3MLRaemROwLPUGQoskstW2YrN1QVAXOxu9s_4m9roXaIH_GlQ5zYfnFdPasNMx3eVQVw8JNM1iG_ccAovakbdrpQouYmBAZTI5N3E3432vGLvosp6ynoaCMN53z2OUrEwlhf8N-NDrto68PFZHJb3QWIG-sQIuJWo8ZtbrUXmzFIDX9b6rgE"
		},
		{
			title: "The Developer",
			description: "Optimized for skills, projects, and tech stack.",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI0BYdjpwLw6Ec0pTMgc29Zoc6Nm1jcu4WE43oDh_CmJ0cE1tcFk_OiVCL3PqCpPoXhqhBUPmh5Zq_xoKGv2sFJ5FPSA6p_ze83qY-GdFP6xCiyQ88JEx8G8A2giLFtYX1jfZjnLLTGgBF6aPGEWthBfI9mx7T0X7GFtyK6duoIxKP-0hG18UFIViWIAYrAcwtqt3oeUzdRlaIVc-kxIkc5-JlWGOeIW1CcqDKWx30oTN8-V8hH2o2EPCOXN0IflOxJxknJ3n7oWc"
		}
	];

	return (
		<section id="templates" className="px-6 md:px-20 lg:px-40 py-20">
			<div className="flex flex-col gap-10">
				<motion.div 
					className="flex items-end justify-between"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className="flex flex-col gap-2">
						<h2 className="text-foreground text-3xl font-bold tracking-tight">
							<Trans>Professional Templates</Trans>
						</h2>
						<p className="text-muted-foreground">
							<Trans>Battle-tested designs that pass ATS filters.</Trans>
						</p>
					</div>
					<Link 
						to="/dashboard"
						className="text-primary font-bold flex items-center gap-1 hover:underline"
					>
						<Trans>View All</Trans>
						<span className="material-symbols-outlined text-sm">chevron_right</span>
					</Link>
				</motion.div>
				
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{templates.map((template, index) => (
						<motion.div
							key={template.title}
							className="group flex flex-col gap-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<div className="aspect-[3/4] rounded-2xl bg-muted overflow-hidden relative shadow-md">
								<img 
									alt={template.title}
									className="w-full h-full object-cover transition-transform group-hover:scale-105"
									src={template.image}
								/>
								<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
							</div>
							<div className="flex flex-col">
								<h4 className="text-foreground font-bold text-lg">{template.title}</h4>
								<p className="text-muted-foreground text-sm">{template.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
