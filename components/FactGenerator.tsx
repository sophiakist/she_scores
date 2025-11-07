"use client"

import React, { useEffect, useState, useRef } from "react"
import FactCard from "@/components/FactCard"

type Fact = {
  id?: string
  title: string
  blurb: string
  image?: string
  source?: string
  date?: string
}

export default function FactGenerator({ facts }: { facts: Fact[] }) {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [])

  const showIndex = (i: number) => {
    setAnimating(true)
    setIndex(i)
    window.setTimeout(() => setAnimating(false), 420)
  }

  const randomFact = () => {
    if (!facts.length) return
    let next = Math.floor(Math.random() * facts.length)
    // avoid same index when possible
    if (next === index && facts.length > 1) next = (next + 1) % facts.length
    showIndex(next)
  }

  const next = () => showIndex((index + 1) % facts.length)
  const prev = () => showIndex((index - 1 + facts.length) % facts.length)

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length)
    }, 4000) as unknown as number
  }

  if (!facts || facts.length === 0) {
    return (
      <div className="bg-gray-800 rounded-md p-6 text-gray-300">No facts available.</div>
    )
  }

  return (
    <section aria-label="Did you know generator" className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-6 items-start">
        <div>
          <FactCard fact={facts[index]} animate={animating} />

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setAnimating(true)
                prev()
                setTimeout(() => setAnimating(false), 420)
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700 text-sm text-gray-200 hover:bg-gray-600"
            >
              ◀ Prev
            </button>

            <button
              onClick={() => {
                setAnimating(true)
                next()
                setTimeout(() => setAnimating(false), 420)
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700 text-sm text-gray-200 hover:bg-gray-600"
            >
              Next ▶
            </button>

            <button
              onClick={() => {
                setAnimating(true)
                randomFact()
                setTimeout(() => setAnimating(false), 420)
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow-500 text-sm text-gray-900 hover:opacity-90"
            >
              🎲 Surprise me
            </button>

            <button
              onClick={togglePlay}
              className={`ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${
                isPlaying ? "bg-red-600 text-white" : "bg-gray-700 text-gray-200"
              }`}
            >
              {isPlaying ? "Pause" : "Auto-play"}
            </button>
          </div>
        </div>

        <aside className="hidden sm:block">
          <div className="bg-gray-800 rounded-md p-4 text-gray-300 sticky top-24">
            <h4 className="text-sm font-semibold mb-2">Quick Facts</h4>
            <ul className="text-sm space-y-2">
              {facts.map((f, i) => (
                <li key={f.id || i}>
                  <button
                    onClick={() => showIndex(i)}
                    className={`text-left w-full text-sm hover:text-yellow-500 ${i === index ? 'text-gray-100 font-medium' : 'text-gray-300'}`}
                  >
                    {f.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
