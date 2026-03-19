import { Trans } from "@lingui/react/macro";

export function Footer() {
	return (
		<footer className="border-border border-t bg-background px-6 py-12 md:px-20 lg:px-40">
			<div className="flex flex-col justify-between gap-12 md:flex-row">
				<div className="flex max-w-[300px] flex-col gap-4">
					<div className="flex items-center gap-2 text-primary">
						<span className="material-symbols-outlined">description</span>
						<span className="font-bold text-foreground text-xl">1Digit</span>
					</div>
					<p className="text-muted-foreground text-sm leading-relaxed">
						<Trans>
							A completely private and open-source resume builder for the modern web. Built by developers, for
							developers.
						</Trans>
					</p>
				</div>

				<div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
					<div className="flex flex-col gap-4">
						<h4 className="font-bold text-foreground text-sm uppercase tracking-widest">
							<Trans>Product</Trans>
						</h4>
						<a href="#editor" className="text-muted-foreground text-sm transition-colors hover:text-primary">
							<Trans>Editor</Trans>
						</a>
						<a href="#templates" className="text-muted-foreground text-sm transition-colors hover:text-primary">
							<Trans>Templates</Trans>
						</a>
						<a href="#examples" className="text-muted-foreground text-sm transition-colors hover:text-primary">
							<Trans>Examples</Trans>
						</a>
					</div>

					<div className="flex flex-col gap-4">
						<h4 className="font-bold text-foreground text-sm uppercase tracking-widest">
							<Trans>Legal</Trans>
						</h4>
						<a href="#privacy" className="text-muted-foreground text-sm transition-colors hover:text-primary">
							<Trans>Privacy</Trans>
						</a>
						<a href="#terms" className="text-muted-foreground text-sm transition-colors hover:text-primary">
							<Trans>Terms</Trans>
						</a>
						<a href="#license" className="text-muted-foreground text-sm transition-colors hover:text-primary">
							<Trans>License</Trans>
						</a>
					</div>
				</div>
			</div>

			<div className="mt-12 flex flex-col items-center justify-between gap-4 border-border border-t pt-8 md:flex-row">
				<p className="text-muted-foreground/60 text-xs">
					<Trans>© 2024 1Digit Technology. All rights reserved. Your data is your own.</Trans>
				</p>
			</div>
		</footer>
	);
}
