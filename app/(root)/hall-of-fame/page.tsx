import dynamic from "next/dynamic"
import { HALL_OF_FAME } from "@/lib/hallOfFameData"

const DynamicHallGrid = dynamic(() => import("@/components/HallOfFameGrid"))

export const metadata = {
	title: 'Hall of Fame',
}

export default function HallOfFamePage() {
	return (
		<main className="min-h-screen py-12 px-6">
			<div className="max-w-6xl mx-auto">
				<header className="mb-8">
					<h1 className="text-3xl font-semibold text-gray-100">Hall of Fame</h1>
					<p className="text-sm text-gray-300 mt-2">Legendary women athletes from our region and beyond. Click a card to read their story.</p>
				</header>

				<section>
					<DynamicHallGrid athletes={HALL_OF_FAME} />
				</section>
			</div>
		</main>
	)
}

