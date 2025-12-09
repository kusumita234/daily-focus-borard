"use client"

import { Checkbox } from "@/components/ui/checkbox"
import type { BigRock } from "@/app/page"

interface BigRockListProps {
  rocks: BigRock[]
  onToggleComplete: (index: number) => void
}

export function BigRockList({ rocks, onToggleComplete }: BigRockListProps) {
  return (
    <div className="space-y-4">
      {rocks.map((rock, index) => {
        if (!rock.title.trim()) return null

        return (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <Checkbox
              id={`rock-check-${index}`}
              checked={rock.completed}
              onCheckedChange={() => onToggleComplete(index)}
              className="mt-1"
            />
            <div className="flex-1 space-y-1">
              <label
                htmlFor={`rock-check-${index}`}
                className={`block text-base font-medium cursor-pointer transition-all ${
                  rock.completed ? "text-muted-foreground line-through" : "text-foreground"
                }`}
              >
                {rock.title}
              </label>
              {rock.note && (
                <p
                  className={`text-sm transition-all ${
                    rock.completed ? "text-muted-foreground/60 line-through" : "text-muted-foreground"
                  }`}
                >
                  {rock.note}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
