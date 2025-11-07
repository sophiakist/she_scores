"use client"

import Image from "next/image"
import React from "react"
import type { HallAthlete } from "@/lib/hallOfFameData"

export default function HallCard({
  athlete,
  onClick,
}: {
  athlete: HallAthlete
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg p-0 bg-transparent rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-magenta-500"
      aria-label={`Open details for ${athlete.name}`}
    >
      {/* Image fills the card */}
      <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-56 bg-gray-700">
        <Image
          src={athlete.image ?? '/assets/images/placeholder-athlete.svg'}
          alt={athlete.name}
          fill
          className="object-cover object-top"
        />

        {/* bottom overlay for white text */}
        <div className="absolute left-0 right-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-4 py-3">
          <div className="text-sm font-semibold text-white leading-tight">{athlete.name}</div>
          <div className="text-xs text-gray-200">{athlete.sport}{athlete.years ? ` — ${athlete.years}` : ''}</div>
        </div>
      </div>
    </button>
  )
}
