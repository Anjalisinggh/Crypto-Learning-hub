"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CourseCard from "@/components/course-card"

import { Search, BookOpen, Award, TrendingUp, Users, ArrowLeft } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Bitcoin Fundamentals",
    description:
      "Learn the basics of Bitcoin, how it works, and why it matters. Perfect for complete beginners to cryptocurrency.",
    duration: "2 hours",
    students: 15420,
    rating: 4.8,
    progress: 0,
    level: "Beginner" as const,
    image: "/placeholder.svg?height=200&width=400",
    category: "basics",
  },
  {
    id: 2,
    title: "Blockchain Technology Deep Dive",
    description:
      "Understand the technical foundations of blockchain technology, consensus mechanisms, and distributed systems.",
    duration: "4 hours",
    students: 8930,
    rating: 4.7,
    progress: 25,
    level: "Intermediate" as const,
    image: "/placeholder.svg?height=200&width=400",
    category: "technical",
  },
  {
    id: 3,
    title: "Cryptocurrency Trading Basics",
    description:
      "Learn fundamental and technical analysis, risk management, and trading strategies for cryptocurrency markets.",
    duration: "3 hours",
    students: 12650,
    rating: 4.6,
    progress: 0,
    level: "Beginner" as const,
    image: "/placeholder.svg?height=200&width=400",
    category: "trading",
  },
  {
    id: 4,
    title: "DeFi Protocols & Yield Farming",
    description: "Explore decentralized finance protocols, liquidity mining, and advanced DeFi strategies.",
    duration: "5 hours",
    students: 6780,
    rating: 4.9,
    progress: 60,
    level: "Advanced" as const,
    image: "/placeholder.svg?height=200&width=400",
    category: "defi",
  },
  {
    id: 5,
    title: "NFTs and Digital Assets",
    description: "Understanding non-fungible tokens, digital ownership, and the NFT ecosystem.",
    duration: "2.5 hours",
    students: 9340,
    rating: 4.5,
    progress: 0,
    level: "Intermediate" as const,
    image: "/placeholder.svg?height=200&width=400",
    category: "nft",
  },
  {
    id: 6,
    title: "Crypto Security & Wallet Management",
    description: "Learn how to secure your cryptocurrency, choose wallets, and protect against common threats.",
    duration: "3 hours",
    students: 11200,
    rating: 4.8,
    progress: 0,
    level: "Beginner" as const,
    image: "/placeholder.svg?height=200&width=400",
    category: "security",
  },
]

const stats = [
  { label: "Total Courses", value: "25+", icon: BookOpen },
  { label: "Students Enrolled", value: "50K+", icon: Users },
  { label: "Completion Rate", value: "89%", icon: TrendingUp },
  { label: "Certificates Issued", value: "12K+", icon: Award },
]

interface CoursesProps {
  onBack?: () => void
  onStartQuiz?: () => void
}

export default function Courses({ onBack, onStartQuiz }: CoursesProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel
    const matchesCategory = activeTab === "all" || course.category === activeTab

    return matchesSearch && matchesLevel && matchesCategory
  })

  const handleStartCourse = (courseId: number) => {
    // Navigate to specific course content
    console.log(`Starting course ${courseId}`)
    // You would implement navigation to the specific course here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <Button variant="ghost" size="sm" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Crypto Learning Courses</h1>
                <p className="text-gray-600 mt-1">Master cryptocurrency from basics to advanced concepts</p>
              </div>
            </div>
            {onStartQuiz && (
              <Button onClick={onStartQuiz} variant="outline">
                <Award className="w-4 h-4 mr-2" />
                Take Quiz
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border rounded-md bg-white"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Course Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="defi">DeFi</TabsTrigger>
            <TabsTrigger value="nft">NFTs</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              students={course.students}
              rating={course.rating}
              progress={course.progress}
              level={course.level}
              image={course.image}
              onStart={() => handleStartCourse(course.id)}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-purple-100 mb-6">
              Take our comprehensive quiz to assess your crypto knowledge and earn certificates
            </p>
            {onStartQuiz && (
              <Button onClick={onStartQuiz} size="lg" variant="secondary">
                <Award className="w-5 h-5 mr-2" />
                Start Knowledge Quiz
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
