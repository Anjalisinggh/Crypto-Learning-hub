"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, RotateCcw, Trophy, BookOpen, Play, Brain, Award, Users, TrendingUp } from "lucide-react"
import Courses from "@/app/Courses/page" // Adjust the import path as necessary

const quizQuestions = [
  {
    id: 1,
    question: "What is Bitcoin?",
    options: [
      "A digital currency that operates on a decentralized network",
      "A traditional bank",
      "A government-issued currency",
      "A credit card company",
    ],
    correctAnswer: 0,
    explanation:
      "Bitcoin is a decentralized digital currency that operates on a peer-to-peer network without the need for intermediaries like banks.",
  },
  {
    id: 2,
    question: "What is blockchain technology?",
    options: ["A type of cryptocurrency", "A distributed ledger technology", "A mining hardware", "A trading platform"],
    correctAnswer: 1,
    explanation:
      "Blockchain is a distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography.",
  },
  {
    id: 3,
    question: "What does 'HODL' mean in crypto?",
    options: [
      "Hold On for Dear Life",
      "High Order Digital Ledger",
      "Hash Output Data Link",
      "Hardware Online Digital Lock",
    ],
    correctAnswer: 0,
    explanation:
      "HODL originated from a misspelled 'hold' in a Bitcoin forum post and now means 'Hold On for Dear Life' - a strategy of holding cryptocurrency long-term.",
  },
  {
    id: 4,
    question: "What is cryptocurrency mining?",
    options: [
      "Digging for physical coins",
      "The process of validating transactions and adding them to the blockchain",
      "Buying cryptocurrency from exchanges",
      "Creating fake cryptocurrencies",
    ],
    correctAnswer: 1,
    explanation:
      "Mining is the computational process of validating transactions and adding new blocks to the blockchain, for which miners are rewarded with cryptocurrency.",
  },
  {
    id: 5,
    question: "What is a crypto wallet?",
    options: [
      "A physical wallet for storing coins",
      "A digital tool for storing and managing cryptocurrency",
      "A bank account for crypto",
      "A mining device",
    ],
    correctAnswer: 1,
    explanation:
      "A crypto wallet is a digital tool that allows you to store, send, and receive cryptocurrency. It stores your private keys that give you access to your crypto.",
  },
]

type AppState = "landing" | "courses" | "quiz" | "quiz-active" | "quiz-completed"

export default function CryptoQuiz() {
  const [appState, setAppState] = useState<AppState>("landing")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newUserAnswers = [...userAnswers, selectedAnswer]
    setUserAnswers(newUserAnswers)

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setShowExplanation(true)
  }

  const handleContinue = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setAppState("quiz-completed")
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setShowExplanation(false)
    setScore(0)
    setAppState("courses")
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 80) return "Excellent! You're a crypto expert! 🚀"
    if (percentage >= 60) return "Good job! You have solid crypto knowledge! 👍"
    if (percentage >= 40) return "Not bad! Keep learning about crypto! 📚"
    return "Keep studying! Crypto knowledge takes time to build! 💪"
  }

  // Landing Page
  if (appState === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Crypto Learning Hub</h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Master cryptocurrency fundamentals through interactive courses, quizzes, and earn your crypto knowledge
              badges
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Brain className="w-8 h-8 mx-auto mb-2 text-purple-300" />
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-purple-200">Courses Available</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-purple-200">Difficulty Levels</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-purple-200">Active Learners</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-300" />
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm text-purple-200">Completion Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Begin Your Crypto Journey</CardTitle>
                <CardDescription className="text-purple-200 text-lg">
                  Start with structured courses or test your knowledge with our comprehensive quiz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>25+ structured courses</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Interactive quizzes</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Progress tracking</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Certificates & badges</span>
                  </div>
                </div>

                {/* Start Learning Button - navigates to courses */}
                <Button
                  onClick={() => setAppState("courses")}
                  className="w-full max-w-md mx-auto h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 hover:from-purple-600 hover:via-purple-500 hover:to-blue-500 border-0 shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>

                <div className="text-center">
                  <p className="text-purple-200 text-sm mb-2">Or jump straight to testing your knowledge</p>
                  <Button
                    onClick={() => setAppState("quiz")}
                    variant="outline"
                    className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    Take Knowledge Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Topics Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Bitcoin & Blockchain</h3>
                <p className="text-purple-200 text-sm">Master the fundamentals of cryptocurrency</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Trading & DeFi</h3>
                <p className="text-purple-200 text-sm">Learn advanced trading and DeFi strategies</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Security & Wallets</h3>
                <p className="text-purple-200 text-sm">Secure your crypto assets properly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Courses Page
  if (appState === "courses") {
    return <Courses onBack={() => setAppState("landing")} onStartQuiz={() => setAppState("quiz")} />
  }

  // Quiz Completed
  if (appState === "quiz-completed") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Quiz Completed!</CardTitle>
              <CardDescription className="text-lg">Here are your results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {score}/{quizQuestions.length}
                </div>
                <div className="text-xl text-gray-600 mb-4">
                  {Math.round((score / quizQuestions.length) * 100)}% Correct
                </div>
                <p className="text-lg font-medium text-gray-700">{getScoreMessage()}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Review Your Answers:</h3>
                {quizQuestions.map((question, index) => (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      {userAnswers[index] === question.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium mb-2">{question.question}</p>
                        <p className="text-sm text-gray-600 mb-1">
                          Your answer: {question.options[userAnswers[index]]}
                        </p>
                        {userAnswers[index] !== question.correctAnswer && (
                          <p className="text-sm text-green-600 mb-2">
                            Correct answer: {question.options[question.correctAnswer]}
                          </p>
                        )}
                        <p className="text-sm text-gray-500">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button onClick={resetQuiz} className="flex-1 bg-transparent" variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={() => setAppState("courses")} className="flex-1">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Quiz Active
  if (appState === "quiz") {
    const currentQ = quizQuestions[currentQuestion]
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-xl font-bold">Crypto Knowledge Quiz</CardTitle>
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              {!showExplanation ? (
                <>
                  <div>
                    <h2 className="text-lg font-semibold mb-4">{currentQ.question}</h2>
                    <RadioGroup
                      value={selectedAnswer?.toString()}
                      onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
                      className="space-y-3"
                    >
                      {currentQ.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer hover:bg-gray-50 ${
                            selectedAnswer === index ? "bg-indigo-50 border-indigo-300" : "border-gray-200"
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <Button onClick={handleNextQuestion} disabled={selectedAnswer === null} className="w-full">
                    Submit Answer
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {selectedAnswer === currentQ.correctAnswer ? (
                        <>
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <span className="text-lg font-semibold text-green-700">Correct!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 text-red-500" />
                          <span className="text-lg font-semibold text-red-700">Incorrect</span>
                        </>
                      )}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Explanation:</h3>
                      <p className="text-gray-700">{currentQ.explanation}</p>
                    </div>

                    {selectedAnswer !== currentQ.correctAnswer && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800">
                          <span className="font-semibold">Correct answer:</span>{" "}
                          {currentQ.options[currentQ.correctAnswer]}
                        </p>
                      </div>
                    )}
                  </div>

                  <Button onClick={handleContinue} className="w-full">
                    {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "View Results"}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return null
}
