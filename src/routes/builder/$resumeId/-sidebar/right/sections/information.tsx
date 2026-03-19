import { Trans } from "@lingui/react/macro";
import { HandHeartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { SectionBase } from "../shared/section-base";

export function InformationSectionBuilder() {
	return (
		<SectionBase type="information" className="space-y-4">
			<div className="space-y-2 rounded-md border bg-sky-600 p-5 text-white dark:bg-sky-700">
				<h4 className="font-medium tracking-tight">
					<Trans>Support the app by doing what you can!</Trans>
				</h4>

				<div className="space-y-2 text-xs leading-normal">
					<Trans>
						<p>
							Thank you for using 1Digit Resume! This app is created by 1Digit Technology to provide
							a private and professional resume building experience.
						</p>
						<p>
							1Digit Resume is committed to maintaining your data privacy and providing the best resume
							building experience possible.
						</p>
					</Trans>
				</div>

				<Button
					size="sm"
					variant="default"
					nativeButton={false}
					className="mt-2 whitespace-normal px-4! text-xs"
					render={
						<a href="https://1digittechnology.com" target="_blank" rel="noopener">
							<HandHeartIcon />
							<span className="truncate">
								<Trans>Visit 1Digit Technology</Trans>
							</span>
						</a>
					}
				/>
			</div>

			<div className="flex flex-wrap gap-0.5">
				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="/docs" target="_blank" rel="noopener">
							<Trans>Documentation</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://1digittechnology.com" target="_blank" rel="noopener">
							<Trans>About 1Digit</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="/contact" target="_blank" rel="noopener">
							<Trans>Contact Support</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="/features" target="_blank" rel="noopener">
							<Trans>Features</Trans>
						</a>
					}
				/>

				<Button
					size="sm"
					variant="link"
					className="text-xs"
					nativeButton={false}
					render={
						<a href="https://1digittechnology.com" target="_blank" rel="noopener">
							<Trans>Company</Trans>
						</a>
					}
				/>
			</div>
		</SectionBase>
	);
}
