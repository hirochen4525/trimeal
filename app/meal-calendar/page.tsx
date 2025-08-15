"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeft, Camera, TrendingUp, MessageCircle, CalendarIcon } from "lucide-react"
import Link from "next/link"

// Mock data for meal records
const mockMealRecords = {
  "2025-01-15": {
    breakfast: { calories: 450, hasPhoto: true, rating: "good" },
    lunch: { calories: 650, hasPhoto: true, rating: "excellent" },
    dinner: { calories: 550, hasPhoto: false, rating: "good" },
    snack: { calories: 150, hasPhoto: false, rating: "fair" },
  },
  "2025-01-14": {
    breakfast: { calories: 400, hasPhoto: true, rating: "good" },
    lunch: { calories: 700, hasPhoto: true, rating: "good" },
    dinner: { calories: 600, hasPhoto: true, rating: "excellent" },
  },
  "2025-01-13": {
    breakfast: { calories: 500, hasPhoto: false, rating: "fair" },
    lunch: { calories: 680, hasPhoto: true, rating: "good" },
    dinner: { calories: 520, hasPhoto: true, rating: "good" },
    snack: { calories: 200, hasPhoto: false, rating: "fair" },
  },
}

const MEAL_TYPES = [
  { id: "breakfast", label: "朝食", icon: "🌅" },
  { id: "lunch", label: "昼食", icon: "☀️" },
  { id: "dinner", label: "夕食", icon: "🌙" },
  { id: "snack", label: "間食", icon: "🍎" },
]

export default function MealCalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
  }

  const formatDisplayDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  const selectedDateKey = formatDateKey(selectedDate)
  const selectedDayRecords = mockMealRecords[selectedDateKey as keyof typeof mockMealRecords]

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "bg-green-500"
      case "good":
        return "bg-blue-500"
      case "fair":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getRatingText = (rating: string) => {
    switch (rating) {
      case "excellent":
        return "素晴らしい"
      case "good":
        return "良好"
      case "fair":
        return "普通"
      default:
        return "要改善"
    }
  }

  const getTotalCalories = (records: any) => {
    if (!records) return 0
    return Object.values(records).reduce((total: number, meal: any) => total + meal.calories, 0)
  }

  const hasRecordForDate = (date: Date) => {
    const dateKey = formatDateKey(date)
    return mockMealRecords[dateKey as keyof typeof mockMealRecords]
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-foreground">食事記録カレンダー</h1>
                <p className="text-sm text-muted-foreground">過去の記録を確認できます</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/meal-input">
                <Camera className="h-4 w-4 mr-2" />
                記録する
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>カレンダー</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="rounded-md border"
                modifiers={{
                  hasRecord: (date) => hasRecordForDate(date),
                }}
                modifiersStyles={{
                  hasRecord: {
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                    borderRadius: "50%",
                  },
                }}
              />
              <div className="mt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>記録がある日</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Day Details */}
          <Card>
            <CardHeader>
              <CardTitle>{formatDisplayDate(selectedDate)}の記録</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDayRecords ? (
                <div className="space-y-4">
                  {/* Daily Summary */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {getTotalCalories(selectedDayRecords)} kcal
                      </div>
                      <div className="text-sm text-muted-foreground">合計摂取カロリー</div>
                    </div>
                  </div>

                  {/* Meal Records */}
                  <div className="space-y-3">
                    {MEAL_TYPES.map((mealType) => {
                      const record = selectedDayRecords[mealType.id as keyof typeof selectedDayRecords]
                      if (!record) return null

                      return (
                        <div key={mealType.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{mealType.icon}</span>
                            <div>
                              <div className="font-medium text-foreground">{mealType.label}</div>
                              <div className="text-sm text-muted-foreground">{record.calories} kcal</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {record.hasPhoto && (
                              <Badge variant="secondary" className="text-xs">
                                <Camera className="h-3 w-3 mr-1" />
                                写真
                              </Badge>
                            )}
                            <div className={`w-3 h-3 rounded-full ${getRatingColor(record.rating)}`} />
                            <span className="text-xs text-muted-foreground">{getRatingText(record.rating)}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Trainer Feedback */}
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-sm font-medium text-blue-900 mb-1">トレーナーからのコメント</div>
                    <div className="text-sm text-blue-700">
                      バランスの良い食事が続いていますね！この調子で頑張りましょう。
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-muted-foreground mb-4">この日の記録はありません</div>
                  <Button asChild>
                    <Link href="/meal-input">
                      <Camera className="h-4 w-4 mr-2" />
                      食事を記録する
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Weekly Summary */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>今週のサマリー</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground">記録日数</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">1,850</div>
                <div className="text-sm text-muted-foreground">平均カロリー</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-sm text-muted-foreground">目標達成率</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-foreground">18</div>
                <div className="text-sm text-muted-foreground">写真記録数</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>月間トレンド</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">記録継続率</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-muted rounded-full">
                    <div className="w-24 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">平均評価</span>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4].map((star) => (
                    <div key={star} className="w-4 h-4 bg-primary rounded-full"></div>
                  ))}
                  <div className="w-4 h-4 bg-muted rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            <Link
              href="/dashboard"
              className="flex flex-col items-center space-y-1 py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs">ホーム</span>
            </Link>
            <Link href="/meal-calendar" className="flex flex-col items-center space-y-1 py-2 px-3 text-primary">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-xs font-medium">記録履歴</span>
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
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs">マイページ</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
