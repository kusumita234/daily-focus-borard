"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Target, Lightbulb, Zap } from "lucide-react"
import type { BigRock } from "@/app/page"

interface BigRockFormProps {
  rocks: BigRock[]
  onSave: (rocks: BigRock[]) => void
}

export function BigRockForm({ rocks, onSave }: BigRockFormProps) {
  const [formRocks, setFormRocks] = useState<BigRock[]>(rocks)

  const handleChange = (index: number, field: "title" | "note", value: string) => {
    const updated = [...formRocks]
    updated[index][field] = value
    setFormRocks(updated)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Only save rocks that have a title
    const rocksToSave = formRocks.map((rock) => ({
      ...rock,
      title: rock.title.trim(),
      note: rock.note.trim(),
    }))
    onSave(rocksToSave)
  }

  const icons = [
    { icon: Target, color: "text-pink-500" },
    { icon: Lightbulb, color: "text-rose-500" },
    { icon: Zap, color: "text-red-500" },
  ]

  return (
    <Card className="p-6 space-y-6 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-pink-200">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Choose Your Big Rocks
        </h2>
        <p className="text-base text-gray-700 font-semibold italic bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
          ✨ Focus on three important tasks that will make today meaningful. ✨
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {formRocks.map((rock, index) => {
          const Icon = icons[index].icon
          return (
            <div
              key={index}
              className="space-y-3 p-5 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg bg-white shadow-sm ${icons[index].color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <Label htmlFor={`rock-${index}-title`} className="text-base font-bold text-gray-800">
                  Big Rock #{index + 1}
                </Label>
              </div>
              <div className="space-y-2">
                <Input
                  id={`rock-${index}-title`}
                  value={rock.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  placeholder="What needs to get done?"
                  className="bg-white border-2 border-pink-200 focus:border-pink-400 text-base font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`rock-${index}-note`} className="text-sm font-semibold text-gray-700">
                  Why it matters (optional)
                </Label>
                <Textarea
                  id={`rock-${index}-note`}
                  value={rock.note}
                  onChange={(e) => handleChange(index, "note", e.target.value)}
                  placeholder="Add context or motivation..."
                  rows={2}
                  className="bg-white border-2 border-pink-200 focus:border-pink-400 resize-none"
                />
              </div>
            </div>
          )
        })}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          Save Today&apos;s Big Rocks
        </Button>
      </form>
    </Card>
  )
}
