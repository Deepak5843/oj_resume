import { Trans } from "@lingui/react/macro";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@/components/theme/provider";
import { Button } from "@/components/ui/button";

export function Header() {
	const { theme, setTheme } = useTheme();

	return (
		<header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-border border-b border-solid bg-background/80 px-6 py-4 backdrop-blur-md md:px-20 lg:px-40">
			<div className="flex items-center gap-3 text-primary">
				<h2 className="font-bold text-foreground text-xl leading-tight tracking-tight">1Digit</h2>
			</div>

			<div className="flex flex-1 items-center justify-end gap-8">
				<nav className="hidden items-center gap-8 md:flex">
					{/* <a
						href="#features"
						className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
					>
						<Trans>Features</Trans>
					</a> */}
					<a
						href="#templates"
						className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
					>
						<Trans>Templates</Trans>
					</a>
					<a
						href="https://1digittechnology.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
					>
						<Trans>1Digit Technology</Trans>
					</a>
				</nav>

				{/* Single Theme Toggle Button */}
				<div className="border-border border-r pr-4">
					<button
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
						className="group/button inline-flex size-9 shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-clip-padding font-medium text-sm outline-none transition-all hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
						aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
					>
						{theme === "light" ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 256 256"
								aria-hidden="true"
							>
								<path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 256 256"
								aria-hidden="true"
							>
								<path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
							</svg>
						)}
					</button>
				</div>

				<Button
					nativeButton={false}
					className="h-10 min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 font-bold text-sm text-white transition-all hover:bg-primary/90"
					render={
						<Link to="/dashboard">
							<Trans>Get Started</Trans>
						</Link>
					}
				/>
			</div>
		</header>
	);
}
