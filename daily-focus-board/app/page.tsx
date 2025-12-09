"use client"

import { useState, useEffect } from "react"
import { BigRockForm } from "@/components/big-rock-form"
import { BigRockList } from "@/components/big-rock-list"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

export interface BigRock {
  title: string
  note: string
  completed: boolean
}

const STORAGE_KEY = "daily-big-rocks"

export default function HomePage() {
  const [rocks, setRocks] = useState<BigRock[]>([
    { title: "", note: "", completed: false },
    { title: "", note: "", completed: false },
    { title: "", note: "", completed: false },
  ])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setRocks(parsed)
      } catch (e) {
        console.error("Failed to parse stored rocks:", e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever rocks change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(rocks))
    }
  }, [rocks, isLoaded])

  const handleSave = (newRocks: BigRock[]) => {
    setRocks(newRocks)
  }

  const handleToggleComplete = (index: number) => {
    const updated = [...rocks]
    updated[index].completed = !updated[index].completed
    setRocks(updated)
  }

  const handleReset = () => {
    const resetRocks = [
      { title: "", note: "", completed: false },
      { title: "", note: "", completed: false },
      { title: "", note: "", completed: false },
    ]
    setRocks(resetRocks)
    localStorage.removeItem(STORAGE_KEY)
  }

  const completedCount = rocks.filter((r) => r.completed).length
  const allCompleted = completedCount === 3 && rocks.every((r) => r.title.trim())

  // Format today's date
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 animate-gradient" />

      <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden opacity-30">
        <img src="/cherry-blossoms-and-spring-flowers-vibrant-pink.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/50 to-pink-100" />
      </div>

      <div className="relative z-10 py-8 px-4 sm:py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Header */}
          <header className="text-center space-y-4 pt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Make Today Count</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent text-balance leading-tight">
              Today&apos;s 3 Big Rocks
            </h1>
            <p className="text-xl text-gray-700 font-medium text-pretty">Choose what really matters today.</p>
            <p className="text-sm text-gray-600 font-medium bg-white/60 backdrop-blur-sm inline-block px-4 py-2 rounded-full">
              {formattedDate}
            </p>
          </header>

          {/* Task Entry Section */}
          <BigRockForm rocks={rocks} onSave={handleSave} />

          {/* Focus Board Section */}
          {rocks.some((r) => r.title.trim()) && (
            <Card className="p-6 space-y-6 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-pink-200">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Your Focus Today
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-600">{completedCount}/3 Complete</p>
                  <button
                    onClick={handleReset}
                    className="text-xs text-gray-500 hover:text-pink-600 transition-colors underline font-medium"
                  >
                    Reset today
                  </button>
                </div>
              </div>

              <BigRockList rocks={rocks} onToggleComplete={handleToggleComplete} />

              {/* Success State */}
              {allCompleted && (
                <div className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-lg">
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                  <p className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Amazing! You crushed your 3 Big Rocks today!
                  </p>
                </div>
              )}
            </Card>
          )}

          {!rocks.some((r) => r.title.trim()) && (
            <Card className="p-8 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white shadow-2xl border-0">
              <div className="space-y-4 text-center">
                <Sparkles className="h-12 w-12 mx-auto" />
                <blockquote className="text-2xl font-bold text-balance">
                  &quot;The key is not to prioritize what&apos;s on your schedule, but to schedule your
                  priorities.&quot;
                </blockquote>
                <p className="text-white/90 font-medium">— Stephen Covey</p>
              </div>
            </Card>
          )}

          {/* Footer */}
          <footer className="text-center">
            <p className="text-xs text-gray-600 bg-white/60 backdrop-blur-sm inline-block px-4 py-2 rounded-full">
              Your tasks are saved only in this browser.
            </p>
          </footer>
        </div>
      </div>
    </main>
  )
}
