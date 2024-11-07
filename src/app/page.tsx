import { SearchSection } from "@/components/SearchSection";

export default function Component() {
	return (
		<div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
			<div className="mx-auto max-w-2xl space-y-8">
				<div className="flex items-center gap-2">
					<span className="text-xl font-semibold">Wavy Node</span>
				</div>

				<SearchSection />

				<div className="text-center text-sm text-muted-foreground">@wavynode</div>
			</div>
		</div>
	);
}
