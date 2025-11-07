"use client"

import React from "react"

type Fact = {
  id?: string
  title: string
  blurb: string
  image?: string
  source?: string
  date?: string
}

export default function FactCard({ fact, animate = false }: { fact: Fact; animate?: boolean }) {
  return (
    <article
      className={`bg-gray-800 rounded-md p-6 text-gray-100 shadow-md transition-transform duration-450 ease-out ${
        animate ? "transform scale-105 opacity-100" : "opacity-100"
      }`}
      aria-live="polite"
    >
      <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{fact.blurb}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
        <div>{fact.source}</div>
        <div>{fact.date}</div>
      </div>
    </article>
  )
}
