"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function WorkflowComments() {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Please review this training plan for Sarah's upcoming marathon.",
      user: {
        name: "Coach Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "CJ",
      },
      timestamp: "May 2, 2025 at 10:30 AM",
    },
    {
      id: 2,
      text: "I'll take a look at it today. Do you have any specific concerns about the mileage progression?",
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      timestamp: "May 3, 2025 at 9:20 AM",
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!comment.trim()) return

    const newComment = {
      id: comments.length + 1,
      text: comment,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      timestamp: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    }

    setComments([...comments, newComment])
    setComment("")
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
              <AvatarFallback>{comment.user.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{comment.user.name}</span>
                <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
              </div>
              <p className="text-sm mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!comment.trim()}>
            Add Comment
          </Button>
        </div>
      </form>
    </div>
  )
}
