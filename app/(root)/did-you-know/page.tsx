import dynamic from "next/dynamic"
const DynamicFactGenerator = dynamic(() => import("@/components/FactGenerator"))
import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Did You Know?',
}

type Fact = {
  id: string
  title: string
  blurb: string
  image?: string
  source?: string
  tags?: string[]
  date?: string
}

const sampleFacts: Fact[] = [
  {
    id: 'f1',
    title: 'Lincoln High produced a pro player',
    blurb:
      'In 1998 a Lincoln High graduate signed a professional contract, inspiring a generation of local girls to pursue soccer.',
    image: '/assets/images/placeholder-athlete.svg',
    source: 'Lincoln Times',
    tags: ['history', 'soccer'],
    date: '1998-05-12',
  },
  {
    id: 'f2',
    title: 'Local record attendance',
    blurb: 'The state championship saw a record number of spectators in 2015.',
    source: 'State Sports Archive',
    tags: ['attendance'],
    date: '2015-11-02',
  },
  {
    id: 'f3',
    title: 'Youngest MVP',
    blurb: 'A 16-year-old earned tournament MVP honors in 2019.',
    source: 'Tournament Records',
    tags: ['achievement'],
    date: '2019-07-20',
  },
]

export default function DidYouKnowPage() {
  const featured = sampleFacts[0]
  const others = sampleFacts.slice(1)

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-100">Did You Know?</h1>
          <p className="text-sm text-gray-300 mt-2">
            Short, surprising facts about local athletes, teams, and history.
          </p>
        </header>

        {/* Interactive fact generator / carousel */}
        <div className="mb-8">
          {/* Dynamically load client-side generator to keep this page a server component */}
          {/* This avoids accidental client/server mismatch and keeps initial HTML renderable. */}
          <DynamicFactGenerator facts={sampleFacts} />
        </div>

        {/* Keep a grid of other facts for browsing */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {others.length ? (
            others.map((f) => (
              <article
                key={f.id}
                className="bg-gray-800 rounded-md p-4 text-gray-100 hover:bg-gray-750 transition"
                aria-labelledby={`fact-${f.id}-title`}
              >
                <h3 id={`fact-${f.id}-title`} className="font-semibold">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2" style={{ maxHeight: '4.5rem', overflow: 'hidden' }}>
                  {f.blurb}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                  <div>{f.source}</div>
                  <div>{f.date}</div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full bg-gray-800 rounded-md p-6 text-gray-300">
              No facts found. Be the first to <Button variant="ghost">Submit a fact</Button>.
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
