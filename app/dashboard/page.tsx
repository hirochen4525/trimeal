"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, MessageCircle, Calendar, User, Camera, TrendingUp, Clock, Video, Bell, Menu } from "lucide-react"
import Link from "next/link"

// Mock data
const mockUser = {
  name: "山田太郎",
  avatar: "/generic-user-avatar.png",
}

const mockTodayMeals = {
  calories: { consumed: 1800, target: 2000 },
  protein: { consumed: 100, target: 120 },
  fat: { consumed: 60, target: 70 },
  carbs: { consumed: 150, target: 180 },
}

const mockNotifications = [
  {
    id: 1,
    type: "trainer",
    message: "昨日の夕食、素晴らしいですね！この調子で頑張りましょう！",
    trainer: "佐藤トレーナー",
    time: "2時間前",
    unread: true,
  },
  {
    id: 2,
    type: "reminder",
    message: "今日の昼食の記録をお忘れなく",
    time: "30分前",
    unread: true,
  },
]

const mockUpcomingAppointment = {
  date: "2025年10月17日",
  day: "金",
  time: "19:00",
  trainer: "佐藤トレーナー",
  zoomLink: "https://zoom.us/j/123456789",
}

export default function DashboardPage() {
  const [currentDate] = useState(new Date())

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500"
    if (percentage >= 70) return "bg-primary"
    if (percentage >= 50) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-foreground">こんにちは、{mockUser.name}さん！</h1>
            <Badge variant="secondary">{formatDate(currentDate)}</Badge>
          </div>
          <p className="text-muted-foreground">今日も健康的な食生活を続けましょう</p>
        </div>

        {/* Today's Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>今日の食事サマリー</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Calories */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">摂取カロリー</span>
                <span className="text-sm text-muted-foreground">
                  {mockTodayMeals.calories.consumed} / {mockTodayMeals.calories.target} kcal
                </span>
              </div>
              <Progress
                value={(mockTodayMeals.calories.consumed / mockTodayMeals.calories.target) * 100}
                className="h-3"
              />
            </div>

            {/* PFC Balance */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-600">P (タンパク質)</span>
                  <span className="text-xs text-muted-foreground">{mockTodayMeals.protein.consumed}g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min((mockTodayMeals.protein.consumed / mockTodayMeals.protein.target) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-yellow-600">F (脂質)</span>
                  <span className="text-xs text-muted-foreground">{mockTodayMeals.fat.consumed}g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min((mockTodayMeals.fat.consumed / mockTodayMeals.fat.target) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-green-600">C (炭水化物)</span>
                  <span className="text-xs text-muted-foreground">{mockTodayMeals.carbs.consumed}g</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min((mockTodayMeals.carbs.consumed / mockTodayMeals.carbs.target) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <Button asChild className="w-full" size="lg">
              <Link href="/meal-input">
                <Plus className="h-4 w-4 mr-2" />
                今日の食事を記録する
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Trainer Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>トレーナーからのお知らせ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/trainer-avatar.png" />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      {notification.trainer && (
                        <span className="text-sm font-medium text-foreground">{notification.trainer}</span>
                      )}
                      {notification.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/chat">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  チャットを開く
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Next Appointment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>次回の面談予定</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {mockUpcomingAppointment.date} ({mockUpcomingAppointment.day})
                </div>
                <div className="text-lg text-primary font-semibold mb-2">{mockUpcomingAppointment.time}〜</div>
                <div className="text-sm text-muted-foreground mb-3">担当: {mockUpcomingAppointment.trainer}</div>
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link href={mockUpcomingAppointment.zoomLink} target="_blank">
                      <Video className="h-4 w-4 mr-2" />
                      Zoomリンク
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/appointments">
                      <Clock className="h-4 w-4 mr-2" />
                      日程を変更する
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>クイックアクション</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
                <Link href="/meal-input">
                  <Camera className="h-6 w-6" />
                  <span className="text-sm">食事記録</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
                <Link href="/meal-calendar">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm">記録履歴</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
                <Link href="/chat">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-sm">チャット</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
                <Link href="/profile">
                  <User className="h-6 w-6" />
                  <span className="text-sm">マイページ</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            <Link href="/dashboard" className="flex flex-col items-center space-y-1 py-2 px-3 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs font-medium">ホーム</span>
            </Link>
            <Link
              href="/meal-input"
              className="flex flex-col items-center space-y-1 py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <Plus className="h-5 w-5" />
              <span className="text-xs">食事記録</span>
            </Link>
            <Link
              href="/chat"
              className="flex flex-col items-center space-y-1 py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs">チャット</span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col items-center space-y-1 py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <User className="h-5 w-5" />
              <span className="text-xs">マイページ</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
