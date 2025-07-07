"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Brain,
  Trophy,
  Play,
  CheckCircle,
  Star,
  Bitcoin,
  Coins,
  TrendingUp,
  Shield,
  Zap,
  Users,
} from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Bitcoin Basics",
    description: "Learn the fundamentals of Bitcoin and how it works",
    icon: Bitcoin,
    difficulty: "Beginner",
    duration: "30 min",
    progress: 75,
    lessons: 8,
    completed: 6,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 2,
    title: "Understanding NFTs",
    description: "Explore the world of Non-Fungible Tokens",
    icon: Star,
    difficulty: "Beginner",
    duration: "25 min",
    progress: 40,
    lessons: 6,
    completed: 2,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "DeFi Fundamentals",
    description: "Decentralized Finance explained simply",
    icon: TrendingUp,
    difficulty: "Intermediate",
    duration: "45 min",
    progress: 20,
    lessons: 10,
    completed: 2,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Crypto Security",
    description: "Keep your digital assets safe",
    icon: Shield,
    difficulty: "Beginner",
    duration: "20 min",
    progress: 0,
    lessons: 5,
    completed: 0,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 5,
    title: "Trading Basics",
    description: "Introduction to cryptocurrency trading",
    icon: Zap,
    difficulty: "Intermediate",
    duration: "40 min",
    progress: 0,
    lessons: 9,
    completed: 0,
    color: "from-red-400 to-red-600",
  },
  {
    id: 6,
    title: "Blockchain Technology",
    description: "How blockchain works under the hood",
    icon: Coins,
    difficulty: "Advanced",
    duration: "60 min",
    progress: 0,
    lessons: 12,
    completed: 0,
    color: "from-indigo-400 to-indigo-600",
  },
]

const quizQuestions = [
  {
    question: "What is Bitcoin?",
    options: ["A digital currency", "A physical coin", "A bank", "A website"],
    correct: 0,
  },
  {
    question: "What does 'decentralized' mean in crypto?",
    options: ["Controlled by one company", "No single point of control", "Very expensive", "Only for experts"],
    correct: 1,
  },
  {
    question: "What is an NFT?",
    options: ["A type of cryptocurrency", "A unique digital asset", "A trading platform", "A wallet"],
    correct: 1,
  },
]

export default function CryptoLearningHub() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [activeTab, setActiveTab] = useState("courses")

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    if (answerIndex === quizQuestions[currentQuiz].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuiz < quizQuestions.length - 1) {
        setCurrentQuiz(currentQuiz + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuiz(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Crypto Learning Hub</h1>
                  <p className="text-purple-200 text-sm">Master crypto, one lesson at a time</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                  <Users className="w-4 h-4 mr-1" />
                  10,000+ Learners
                </Badge>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Learn Crypto the
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Smart Way
                </span>
              </h2>
              <p className="text-xl text-purple-200 mb-8 leading-relaxed">
                Master Bitcoin, NFTs, DeFi, and blockchain technology with our interactive courses, quizzes, and
                animated explainers designed for complete beginners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-200 hover:bg-purple-500/10 bg-transparent"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Take Quiz
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12 bg-white/10 backdrop-blur-sm">
                <TabsTrigger
                  value="courses"
                  className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Courses
                </TabsTrigger>
                <TabsTrigger value="quiz" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                  <Brain className="w-4 h-4 mr-2" />
                  Quiz
                </TabsTrigger>
                <TabsTrigger
                  value="progress"
                  className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Progress
                </TabsTrigger>
              </TabsList>

              <TabsContent value="courses">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => {
                    const IconComponent = course.icon
                    return (
                      <Card
                        key={course.id}
                        className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group"
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            >
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-purple-500/20 text-purple-200 border-purple-500/30"
                            >
                              {course.difficulty}
                            </Badge>
                          </div>
                          <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                          <CardDescription className="text-purple-200">{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between text-sm text-purple-200">
                              <span>
                                {course.completed}/{course.lessons} lessons
                              </span>
                              <span>{course.duration}</span>
                            </div>
                            <Progress value={course.progress} className="h-2 bg-white/20" />
                            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                              {course.progress > 0 ? "Continue" : "Start Course"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="quiz">
                <div className="max-w-2xl mx-auto">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white text-2xl">Crypto Knowledge Quiz</CardTitle>
                      <CardDescription className="text-purple-200">
                        Test your understanding with our interactive quiz
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {currentQuiz < quizQuestions.length ? (
                        <div className="space-y-6">
                          <div className="text-center">
                            <Badge
                              variant="secondary"
                              className="bg-purple-500/20 text-purple-200 border-purple-500/30"
                            >
                              Question {currentQuiz + 1} of {quizQuestions.length}
                            </Badge>
                          </div>

                          <h3 className="text-xl font-semibold text-white text-center">
                            {quizQuestions[currentQuiz].question}
                          </h3>

                          <div className="grid gap-3">
                            {quizQuestions[currentQuiz].options.map((option, index) => (
                              <Button
                                key={index}
                                variant="outline"
                                className={`p-4 h-auto text-left justify-start border-white/20 text-white hover:bg-white/10 ${
                                  showResult
                                    ? index === quizQuestions[currentQuiz].correct
                                      ? "bg-green-500/20 border-green-500"
                                      : selectedAnswer === index
                                        ? "bg-red-500/20 border-red-500"
                                        : ""
                                    : ""
                                }`}
                                onClick={() => !showResult && handleQuizAnswer(index)}
                                disabled={showResult}
                              >
                                {option}
                                {showResult && index === quizQuestions[currentQuiz].correct && (
                                  <CheckCircle className="w-5 h-5 ml-auto text-green-400" />
                                )}
                              </Button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-6">
                          <Trophy className="w-16 h-16 text-yellow-400 mx-auto" />
                          <h3 className="text-2xl font-bold text-white">Quiz Complete!</h3>
                          <p className="text-purple-200">
                            You scored {score} out of {quizQuestions.length}
                          </p>
                          <Button
                            onClick={resetQuiz}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                          >
                            Take Quiz Again
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="progress">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6 text-center">
                        <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <h3 className="text-2xl font-bold text-white">6</h3>
                        <p className="text-purple-200">Courses Available</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6 text-center">
                        <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                        <h3 className="text-2xl font-bold text-white">8</h3>
                        <p className="text-purple-200">Lessons Completed</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6 text-center">
                        <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <h3 className="text-2xl font-bold text-white">3</h3>
                        <p className="text-purple-200">Quizzes Taken</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardHeader>
                      <CardTitle className="text-white">Learning Progress</CardTitle>
                      <CardDescription className="text-purple-200">
                        Track your progress across all courses
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {courses.map((course) => (
                          <div key={course.id} className="flex items-center space-x-4">
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                            >
                              <course.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-white font-medium">{course.title}</span>
                                <span className="text-purple-200 text-sm">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2 bg-white/20" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-purple-200">© 2024 Crypto Learning Hub. Start your crypto journey today! 🚀</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
