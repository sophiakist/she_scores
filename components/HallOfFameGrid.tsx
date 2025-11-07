"use client"

import React, { useMemo, useState } from "react"
import type { HallAthlete } from "@/lib/hallOfFameData"
import HallCard from "@/components/HallCard"
import HallModal from "@/components/HallModal"

export default function HallOfFameGrid({ athletes }: { athletes: HallAthlete[] }) {
  const [selected, setSelected] = useState<HallAthlete | null>(null)
  
  // sort athletes by sport (alphabetical), then by name as a tiebreaker
  const sorted = useMemo(() => {
    return [...athletes].sort((a, b) => {
      const sportCmp = (a.sport || '').localeCompare(b.sport || '', undefined, { sensitivity: 'base' })
      if (sportCmp !== 0) return sportCmp
      return (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
    })
  }, [athletes])

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sorted.map((a) => (
          <HallCard key={a.id} athlete={a} onClick={() => setSelected(a)} />
        ))}
      </div>

      <HallModal athlete={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
