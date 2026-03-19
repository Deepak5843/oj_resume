import { Trans } from "@lingui/react/macro";
import { cn } from "@/utils/style";

type Props = React.ComponentProps<"div">;

export function Copyright({ className, ...props }: Props) {
	return (
		<div className={cn("text-muted-foreground/80 text-xs leading-relaxed", className)} {...props}>
			<p>
				<Trans>
					Licensed under{" "}
					<a href="#" target="_blank" rel="noopener" className="font-medium underline underline-offset-2">
						MIT
					</a>
					.
				</Trans>
			</p>

			<p>
				<Trans>Private & Professional Resume Builder.</Trans>
			</p>

			<p>
				<Trans>
					Built by{" "}
					<a
						target="_blank"
						rel="noopener"
						href="https://1digit.tech"
						className="font-medium underline underline-offset-2"
					>
						1Digit Technology
					</a>
					.
				</Trans>
			</p>

			<p className="mt-4">1Digit Resume v{__APP_VERSION__}</p>
		</div>
	);
}
