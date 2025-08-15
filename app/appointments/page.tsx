"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  CalendarIcon,
  Clock,
  Video,
  User,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

// Mock data
const mockTrainer = {
  id: 1,
  name: "佐藤トレーナー",
  avatar: "/trainer-avatar.png",
  specialization: "栄養指導・ダイエット",
}

const mockUpcomingAppointments = [
  {
    id: 1,
    date: new Date(2025, 0, 17), // January 17, 2025
    time: "19:00",
    duration: 30,
    status: "confirmed",
    zoomLink: "https://zoom.us/j/123456789",
    notes: "今週の食事記録の振り返りと来週の目標設定",
  },
  {
    id: 2,
    date: new Date(2025, 0, 24), // January 24, 2025
    time: "19:00",
    duration: 30,
    status: "confirmed",
    zoomLink: "https://zoom.us/j/987654321",
    notes: "",
  },
]

const mockAvailableSlots = [
  { time: "10:00", available: true },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "14:00", available: false },
  { time: "14:30", available: true },
  { time: "15:00", available: true },
  { time: "15:30", available: false },
  { time: "19:00", available: true },
  { time: "19:30", available: true },
  { time: "20:00", available: true },
]

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [isBooking, setIsBooking] = useState(false)

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  const formatDay = (date: Date) => {
    const days = ["日", "月", "火", "水", "木", "金", "土"]
    return days[date.getDay()]
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge variant="default" className="bg-green-500">
            <CheckCircle className="h-3 w-3 mr-1" />
            確定
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            調整中
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="destructive">
            <AlertCircle className="h-3 w-3 mr-1" />
            キャンセル
          </Badge>
        )
      default:
        return null
    }
  }

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) return

    setIsBooking(true)
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      alert("面談の予約が完了しました！")
      setSelectedTime("")
    }, 2000)
  }

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    const dayOfWeek = date.getDay()
    // Disable past dates and weekends
    return date < today || dayOfWeek === 0 || dayOfWeek === 6
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
                <h1 className="text-lg font-semibold text-foreground">面談予約</h1>
                <p className="text-sm text-muted-foreground">週1回の個別面談を予約・管理できます</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Trainer Info */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={mockTrainer.avatar || "/placeholder.svg"} />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold text-foreground">{mockTrainer.name}</h2>
                <p className="text-muted-foreground">{mockTrainer.specialization}</p>
                <Badge variant="secondary" className="mt-2">
                  担当トレーナー
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5" />
              <span>予定されている面談</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockUpcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">{appointment.date.getDate()}</div>
                      <div className="text-sm text-muted-foreground">{appointment.date.getMonth() + 1}月</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {formatDate(appointment.date)} ({formatDay(appointment.date)})
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.time}〜 ({appointment.duration}分間)
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>

                {appointment.notes && (
                  <div className="mb-3 p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">{appointment.notes}</p>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Button size="sm" asChild>
                    <Link href={appointment.zoomLink} target="_blank">
                      <Video className="h-4 w-4 mr-2" />
                      Zoomリンク
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Clock className="h-4 w-4 mr-2" />
                    日程変更
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* New Appointment Booking */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>新しい面談を予約</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Calendar */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">日程を選択</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={isDateDisabled}
                  className="rounded-md border"
                />
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>面談は平日のみ予約可能です。土日祝日は選択できません。</AlertDescription>
                </Alert>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  時間を選択
                  {selectedDate && (
                    <span className="text-sm text-muted-foreground ml-2">({formatDate(selectedDate)})</span>
                  )}
                </h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {mockAvailableSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="sm"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className="text-sm"
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>

                {selectedDate && selectedTime && (
                  <div className="p-4 bg-muted/30 rounded-lg mb-4">
                    <h4 className="font-semibold text-foreground mb-2">予約内容確認</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {formatDate(selectedDate)} ({formatDay(selectedDate)})
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedTime}〜 (30分間)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>オンライン面談 (Zoom)</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleBookAppointment}
                  disabled={!selectedDate || !selectedTime || isBooking}
                  className="w-full"
                  size="lg"
                >
                  {isBooking ? "予約中..." : "面談を予約する"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>面談について</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">面談の流れ</h4>
                <ul className="space-y-1">
                  <li>• 前週の食事記録の振り返り</li>
                  <li>• 目標達成度の確認</li>
                  <li>• 次週の食事プランの相談</li>
                  <li>• 質問・相談タイム</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">注意事項</h4>
                <ul className="space-y-1">
                  <li>• 面談開始時刻の5分前にはZoomに参加してください</li>
                  <li>• キャンセルは24時間前までにお願いします</li>
                  <li>• 遅刻の場合は事前にチャットでご連絡ください</li>
                  <li>• 面談中は静かな環境でご参加ください</li>
                </ul>
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
            <Link
              href="/meal-input"
              className="flex flex-col items-center space-y-1 py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <CalendarIcon className="h-5 w-5" />
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
