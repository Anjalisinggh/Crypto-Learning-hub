"use client"

import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, Star, BookOpen, Play } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  students: number
  rating: number
  progress?: number
  level: "Beginner" | "Intermediate" | "Advanced"
  image: string
  onStart: () => void
}

export  default function CourseCard({
  title,
  description,
  duration,
  students,
  rating,
  progress = 0,
  level,
  image,
  onStart,
}: CourseCardProps) {
  const levelColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4">
          <Badge className={levelColors[level]}>{level}</Badge>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {students.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              {rating}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <CardDescription className="text-gray-600 mb-4 line-clamp-2">{description}</CardDescription>

        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <Button onClick={onStart} className="w-full">
          {progress > 0 ? (
            <>
              <BookOpen className="w-4 h-4 mr-2" />
              Continue Learning
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Start Course
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
