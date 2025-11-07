import { Button } from "@/components/ui/button"
import { ATHLETES } from "@/lib/athleteData"
import Image from "next/image"

// // Revalidate this page once per week so the featured athlete rotates for ISR
// export const revalidate = 60 * 60 * 24 * 7 // one week

// function getWeekIndex(date = new Date(), count = 1) {
//   // simple week index since start of year (0-based)
//   const startOfYear = new Date(date.getFullYear(), 0, 1)
//   const diff = date.getTime() - startOfYear.getTime()
//   const week = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) // 0-based week
//   // map week to athlete index
//   return week % count
// }

export const metadata = {
  title: 'Athlete of the Week',
}

export default function AthleteOfTheWeek() {
  // // pick one athlete based on the current week
  // const athlete = (ATHLETES && ATHLETES.length > 0) ? ATHLETES[getWeekIndex(new Date(), ATHLETES.length)] : null

  const athlete = (ATHLETES && ATHLETES.length > 0) ? ATHLETES[0] : null

  if (!athlete) {
    return (
      <div className="min-h-screen py-12 px-6">
        <div className="max-w-4xl mx-auto rounded-lg p-8 text-gray-100">No athlete data available.</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-12 px-6">
			<div className="max-w-6xl mx-auto">
				<header className="mb-8">
					<h1 className="text-3xl font-semibold text-gray-100">Athlete of the Week</h1>
					<p className="text-sm text-gray-300 mt-2">Highlighting a new women athlete each week.</p>
				</header>

        <section>
          {/* Bento-style grid: Row 1 = text (spans 2 cols) + image (1 col). Row 2 flips: image (1 col) + text (spans 2 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 - text wide */}
            <div className="md:col-span-2 bg-gray-800 rounded-md p-6 shadow-md text-gray-100">
              <h2 className="text-xl font-semibold mb-2">{athlete.name}</h2>
              <div className="text-sm text-gray-300 mb-4">{athlete.sport} — {athlete.team}</div>
              <p className="text-gray-200 leading-relaxed">{athlete.blurb}</p>

              <div className="mt-4 flex gap-3">
                <Button>Read full feature</Button>
                <Button variant="ghost">Share</Button>
              </div>
            </div>

            {/* Row 1 - photo (right) */}
            <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden bg-gray-700">
              <Image
                src={athlete.image}
                alt={athlete.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Row 2 - photo (left) - same sizing as the other photo so the grid looks balanced */}
            <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden bg-gray-700">
              <Image
                src={athlete.image}
                alt={`${athlete.name} action shot`}
                fill
                className="object-cover"
              />
            </div>

            {/* Row 2 - text wide (right) */}
            <div className="md:col-span-2 bg-gray-800 rounded-md p-6 shadow-md text-gray-100">
              <h3 className="text-lg font-semibold mb-2">Season Highlights</h3>
              <ul className="list-disc list-inside text-gray-200">
                {/* Example highlights - reuse stats as simple highlights for now */}
                {athlete.stats.map((s) => (
                  <li key={s.label} className="text-sm">{s.label}: {s.value}</li>
                ))}
              </ul>

              <div className="mt-4">
                <Button>View full profile</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
