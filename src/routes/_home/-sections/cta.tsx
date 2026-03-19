import { Trans } from "@lingui/react/macro";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function CTA() {
	return (
		<section className="px-6 py-24 md:px-20 lg:px-40">
			<motion.div
				className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[2rem] bg-primary p-8 text-center shadow-xl md:p-16"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				{/* Decorative circles */}
				<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10" />
				<div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5" />

				<motion.h2
					className="z-10 max-w-[700px] font-black text-3xl text-white leading-tight md:text-5xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Trans>Ready to upgrade your career without compromising your privacy?</Trans>
				</motion.h2>

				<motion.p
					className="z-10 max-w-[600px] text-lg text-white/80 md:text-xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<Trans>
						Join thousands of tech professionals who trust 1Digit for their job search. No strings attached.
					</Trans>
				</motion.p>

				<motion.div
					className="z-10 flex flex-wrap justify-center gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<Button
						nativeButton={false}
						className="h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-xl bg-white px-8 font-bold text-base text-primary transition-transform hover:scale-105"
						render={
							<Link to="/dashboard">
								<Trans>Get Started Now</Trans>
							</Link>
						}
					/>

					<a
						href="/docs"
						className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-xl border border-white/30 bg-primary/20 px-8 font-bold text-base text-white transition-all hover:bg-white/10"
					>
						<Trans>Documentation</Trans>
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}
