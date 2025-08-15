"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Video } from "lucide-react"
import Link from "next/link"

export default function CounselingBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const availableTimes = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "19:00",
    "19:30",
    "20:00",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking submitted:", { selectedDate, selectedTime, formData })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">無料カウンセリングお申し込み</h1>
          <p className="text-lg text-muted-foreground">カレンダーからご希望の日時を選択してください</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>日程を選択</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border w-full max-w-sm"
                />
              </div>
            </CardContent>
          </Card>

          {/* Time Selection & Form */}
          <div className="space-y-6">
            {/* Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>時間を選択</span>
                </CardTitle>
                <CardDescription>
                  {selectedDate && `${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日の空き時間`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className="text-sm"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>お客様情報</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="山田太郎"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="090-1234-5678"
                    />
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">予約内容確認</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月{selectedDate.getDate()}日
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedTime}〜（30分間）</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Video className="h-4 w-4 text-muted-foreground" />
                          <span>オンライン（Zoom）</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                  >
                    予約を確定する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">無料カウンセリングで分かること</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <Badge variant="secondary" className="mx-auto mb-2">
                  分析
                </Badge>
                <CardTitle className="text-lg">現在の食生活診断</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>あなたの食習慣を詳しく分析し、改善ポイントを明確化</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Badge variant="secondary" className="mx-auto mb-2">
                  提案
                </Badge>
                <CardTitle className="text-lg">最適なプラン設計</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>あなたの目標とライフスタイルに合わせたプランをご提案</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardHeader>
                <Badge variant="secondary" className="mx-auto mb-2">
                  体験
                </Badge>
                <CardTitle className="text-lg">AI分析のデモ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>実際のAI食事分析機能をお試しいただけます</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
