import { Trans } from "@lingui/react/macro";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative px-6 py-16 md:px-20 md:py-24 lg:px-40">
			<div className="flex flex-col items-center gap-10 lg:flex-row">
				<div className="flex flex-col gap-8 lg:w-1/2">
					<div className="flex flex-col gap-4">
						<Badge
							variant="secondary"
							className="w-fit rounded-full bg-primary/10 px-3 py-1 font-bold text-primary text-xs uppercase tracking-wider"
						>
							OPEN SOURCE & PRIVATE
						</Badge>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h1 className="font-black text-4xl text-foreground leading-[1.1] tracking-tight md:text-6xl">
								Build your resume with complete <span className="text-primary">privacy.</span>
							</h1>
						</motion.div>

						<motion.p
							className="max-w-[540px] font-normal text-lg text-muted-foreground md:text-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<Trans>
								Create professional, high-quality resumes without ever creating an account. Your data stays on your
								device, not our servers.
							</Trans>
						</motion.p>
					</div>

					<motion.div
						className="flex flex-wrap gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Button
							size="lg"
							nativeButton={false}
							className="h-14 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-8 font-bold text-base text-white transition-transform hover:scale-105"
							render={
								<Link to="/dashboard">
									<Trans>Get Started</Trans>
								</Link>
							}
						/>
					</motion.div>
				</div>

				<motion.div
					className="w-full lg:w-1/2"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="relative overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-2xl">
						<img
							alt="Resume Editor Preview"
							className="h-auto w-full rounded-xl"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhWvMkkUVam64SrPKfaWhvLSKylDySgP8AHQVXNZVHmNaF9j9ZYBm5c8yQjAdTvk6afGlm1M6cIACz-Ycy3gHoCBy51EekyHiIzA_U24vtV69o8rYkwfg230BeyreRqfw-nv5EXNPf0_Qoe1gx6YYQoWBgNwvot6mVqvwRDckdQ0LXxKQCnU_y1jG58ARPrx7PDq-2aqkFBYiwq6DYoiKSkueO9MIvK2Fky5R6QayRj4QTBBvrEgDDi1UZbtH0IoCyMs5nowvwPSs"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
