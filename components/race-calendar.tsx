"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function RaceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample race events
  const raceEvents = [
    { date: new Date(2025, 4, 15), title: "City Marathon" },
    { date: new Date(2025, 5, 5), title: "Charity 10K Run" },
    { date: new Date(2025, 5, 20), title: "Trail Half Marathon" },
    { date: new Date(2025, 6, 10), title: "Corporate 5K Challenge" },
  ]

  // Function to highlight dates with races
  const isDayWithRace = (day: Date) => {
    return raceEvents.some(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    )
  }

  // Get events for selected date
  const getEventsForDate = (selectedDate: Date) => {
    return raceEvents.filter(
      (event) =>
        event.date.getDate() === selectedDate.getDate() &&
        event.date.getMonth() === selectedDate.getMonth() &&
        event.date.getFullYear() === selectedDate.getFullYear(),
    )
  }

  const selectedDateEvents = date ? getEventsForDate(date) : []

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border rounded-md"
        modifiers={{
          race: (date) => isDayWithRace(date),
        }}
        modifiersClassNames={{
          race: "bg-primary/20 font-bold text-primary",
        }}
      />
      <Card className="flex-1">
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">
            {date
              ? date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
              : "Select a date"}
          </h3>
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-2">
              {selectedDateEvents.map((event, index) => (
                <div key={index} className="p-2 border rounded-md">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.date.toLocaleDateString("en-US", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No races scheduled for this date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
