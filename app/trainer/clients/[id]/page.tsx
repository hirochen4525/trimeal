"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Target, Activity, Calendar, TrendingUp, Star, Send, Phone, Video, Mail } from "lucide-react"
import Link from "next/link"

export default function ClientDetailPage() {
  const [feedback, setFeedback] = useState("")

  // Mock client data
  const client = {
    id: 1,
    name: "田中花子",
    email: "hanako@example.com",
    phone: "090-1234-5678",
    age: 28,
    height: 165,
    weight: 58,
    targetWeight: 55,
    joinDate: "2024-01-15",
    lastActivity: "2時間前",
    status: "active",
    goals: ["体重管理", "栄養バランス改善"],
    allergies: ["えび", "かに"],
    preferences: ["和食中心", "低糖質"],
    avatar: "/generic-user-avatar.png",
  }

  const stats = {
    daysActive: 45,
    mealsLogged: 128,
    goalAchievement: 78,
    weightProgress: 2.5,
    averageCalories: 1650,
    proteinIntake: 85,
  }

  const recentMeals = [
    {
      id: 1,
      date: "2024-01-20",
      meal: "朝食",
      description: "オートミール、バナナ、アーモンドミルク",
      calories: 320,
      rating: 4,
      feedback: "バランスが良いです！",
      image: "/healthy-oatmeal.png",
    },
    {
      id: 2,
      date: "2024-01-20",
      meal: "昼食",
      description: "サラダボウル、グリルチキン、玄米",
      calories: 450,
      rating: 5,
      feedback: "完璧な栄養バランス",
      image: "/healthy-chicken-salad-bowl.png",
    },
    {
      id: 3,
      date: "2024-01-19",
      meal: "夕食",
      description: "焼き魚、野菜炒め、味噌汁",
      calories: 380,
      rating: 4,
      feedback: "和食で理想的",
      image: "/japanese-dinner-fish-vegetables.png",
    },
  ]

  const appointments = [
    {
      id: 1,
      date: "2024-01-25",
      time: "14:00",
      type: "フォローアップ",
      status: "scheduled",
    },
    {
      id: 2,
      date: "2024-01-18",
      time: "10:00",
      type: "初回カウンセリング",
      status: "completed",
    },
  ]

  const handleSendFeedback = () => {
    console.log("Sending feedback:", feedback)
    setFeedback("")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/trainer/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Client Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                <AvatarFallback className="text-xl">{client.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <h1 className="text-2xl font-bold text-foreground">{client.name}</h1>
                  <Badge variant={client.status === "active" ? "default" : "secondary"}>
                    {client.status === "active" ? "アクティブ" : "非アクティブ"}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">年齢</p>
                    <p className="font-medium">{client.age}歳</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">身長</p>
                    <p className="font-medium">{client.height}cm</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">体重</p>
                    <p className="font-medium">{client.weight}kg</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">目標</p>
                    <p className="font-medium">{client.targetWeight}kg</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {client.goals.map((goal, index) => (
                    <Badge key={index} variant="secondary">
                      {goal}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="meals">食事記録</TabsTrigger>
            <TabsTrigger value="progress">進捗</TabsTrigger>
            <TabsTrigger value="communication">コミュニケーション</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.daysActive}</p>
                      <p className="text-sm text-muted-foreground">継続日数</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.mealsLogged}</p>
                      <p className="text-sm text-muted-foreground">記録した食事</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.goalAchievement}%</p>
                      <p className="text-sm text-muted-foreground">目標達成率</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">-{stats.weightProgress}kg</p>
                      <p className="text-sm text-muted-foreground">体重変化</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>最近の食事記録</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMeals.slice(0, 3).map((meal) => (
                      <div key={meal.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                        <img
                          src={meal.image || "/placeholder.svg"}
                          alt={meal.description}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-foreground">{meal.meal}</h3>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${i < meal.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{meal.description}</p>
                          <p className="text-xs text-muted-foreground">{meal.calories}kcal</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>予約履歴</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h3 className="font-semibold text-foreground">{appointment.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            {appointment.date} {appointment.time}
                          </p>
                        </div>
                        <Badge variant={appointment.status === "completed" ? "default" : "secondary"}>
                          {appointment.status === "completed" ? "完了" : "予定"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="meals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>食事記録一覧</CardTitle>
                <CardDescription>クライアントの食事記録とフィードバック</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentMeals.map((meal) => (
                    <div key={meal.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={meal.image || "/placeholder.svg"}
                          alt={meal.description}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-foreground">{meal.meal}</h3>
                            <Badge variant="outline">{meal.date}</Badge>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < meal.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">{meal.description}</p>
                          <p className="text-sm font-medium text-foreground">{meal.calories}kcal</p>
                          {meal.feedback && (
                            <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                              <p className="text-sm text-foreground">
                                <span className="font-medium">フィードバック: </span>
                                {meal.feedback}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>進捗チャート</CardTitle>
                <CardDescription>体重と栄養バランスの推移</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  進捗グラフ（実装予定）
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>フィードバック送信</CardTitle>
                <CardDescription>クライアントにメッセージを送信</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="feedback">メッセージ</Label>
                    <Textarea
                      id="feedback"
                      placeholder="クライアントへのフィードバックやアドバイスを入力してください..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <Button onClick={handleSendFeedback} disabled={!feedback.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    送信
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>メッセージ履歴</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">メッセージ履歴（実装予定）</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
