"use client"

import React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Trophy, X } from "lucide-react"
import type { HallAthlete } from "@/lib/hallOfFameData"

export default function HallModal({
  athlete,
  onClose,
}: {
  athlete: HallAthlete | null
  onClose: () => void
}) {
  if (!athlete) return null

  // force motion.div to accept HTML attributes (onClick) in TypeScript
  const MotionDiv = motion.div as any
  const MotionInner = motion.div as any
  const MotionLi = motion.li as any

  // small array of hero images to cycle (fallback to athlete.image)
  const legendImages = [
    '/assets/images/placeholder-athlete.svg',
    '/assets/images/placeholder-athlete.svg',
  ]

  return (
    <AnimatePresence>
      {athlete && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
          aria-hidden={false}
        >
          <MotionInner
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur hover:bg-background"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={athlete.image ?? legendImages[0]}
                alt={athlete.name}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                // use object-top so the top of the image (heads) stays visible when cropped
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="mb-2 text-2xl font-semibold">{athlete.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="inline-flex rounded-full border px-2 py-0.5 text-sm text-accent">{athlete.sport}</span>
                  <span className="text-sm text-muted-foreground">{athlete.years}</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 text-muted-foreground leading-relaxed">{athlete.blurb}</p>

              <h3 className="mb-4">Major Achievements</h3>
              <ul className="space-y-3">
                {athlete.achievements?.map((achievement, index) => (
                  <MotionLi
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-accent p-1 w-5 h-5 flex items-center justify-center">
                      <Trophy className="h-3 w-3 text-accent-foreground" />
                    </div>
                    <span className="text-sm leading-normal">{achievement}</span>
                  </MotionLi>
                ))}
              </ul>
            </div>
          </MotionInner>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
