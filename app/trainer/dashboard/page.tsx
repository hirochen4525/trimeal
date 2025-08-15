"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Users, Calendar, MessageSquare, TrendingUp, Star, Search, Filter, MoreVertical, Video } from "lucide-react"
import Link from "next/link"

export default function TrainerDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const stats = {
    totalClients: 24,
    activeClients: 18,
    todayAppointments: 5,
    pendingMessages: 12,
    monthlyRevenue: 480000,
    averageRating: 4.8,
  }

  const todayAppointments = [
    {
      id: 1,
      client: "田中花子",
      time: "10:00",
      type: "初回カウンセリング",
      status: "confirmed",
      avatar: "/generic-user-avatar.png",
    },
    {
      id: 2,
      client: "佐藤太郎",
      time: "14:00",
      type: "フォローアップ",
      status: "confirmed",
      avatar: "/generic-user-avatar.png",
    },
    {
      id: 3,
      client: "山田美咲",
      time: "16:00",
      type: "進捗確認",
      status: "pending",
      avatar: "/generic-user-avatar.png",
    },
  ]

  const recentClients = [
    {
      id: 1,
      name: "田中花子",
      joinDate: "2024-01-15",
      progress: 78,
      lastActivity: "2時間前",
      status: "active",
      goal: "体重管理",
      avatar: "/generic-user-avatar.png",
    },
    {
      id: 2,
      name: "佐藤太郎",
      joinDate: "2024-01-10",
      progress: 65,
      lastActivity: "1日前",
      status: "active",
      goal: "筋力向上",
      avatar: "/generic-user-avatar.png",
    },
    {
      id: 3,
      name: "山田美咲",
      joinDate: "2024-01-08",
      progress: 45,
      lastActivity: "3日前",
      status: "inactive",
      goal: "栄養改善",
      avatar: "/generic-user-avatar.png",
    },
  ]

  const pendingMessages = [
    {
      id: 1,
      client: "田中花子",
      message: "昨日の食事について質問があります...",
      time: "30分前",
      unread: true,
      avatar: "/generic-user-avatar.png",
    },
    {
      id: 2,
      client: "佐藤太郎",
      message: "プロテインの摂取タイミングについて...",
      time: "2時間前",
      unread: true,
      avatar: "/generic-user-avatar.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
              <Badge variant="secondary">トレーナー</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4" />
                <span className="ml-2 hidden md:inline">メッセージ</span>
                {stats.pendingMessages > 0 && (
                  <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                    {stats.pendingMessages}
                  </Badge>
                )}
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/trainer-avatar.png" alt="トレーナー" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">トレーナーダッシュボード</h1>
          <p className="text-muted-foreground">クライアントの進捗を管理し、サポートを提供しましょう</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalClients}</p>
                  <p className="text-sm text-muted-foreground">総クライアント数</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.activeClients}</p>
                  <p className="text-sm text-muted-foreground">アクティブ</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.todayAppointments}</p>
                  <p className="text-sm text-muted-foreground">今日の予約</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.averageRating}</p>
                  <p className="text-sm text-muted-foreground">平均評価</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="clients">クライアント</TabsTrigger>
            <TabsTrigger value="appointments">予約</TabsTrigger>
            <TabsTrigger value="messages">メッセージ</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Today's Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>今日の予約</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {todayAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.client} />
                          <AvatarFallback>{appointment.client[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{appointment.client}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-foreground">{appointment.time}</p>
                          <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                            {appointment.status === "confirmed" ? "確定" : "保留"}
                          </Badge>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Video className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>未読メッセージ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingMessages.map((message) => (
                      <div key={message.id} className="flex items-start space-x-4 p-3 border rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.client} />
                          <AvatarFallback>{message.client[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-foreground">{message.client}</h3>
                            {message.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{message.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="クライアントを検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                フィルター
              </Button>
            </div>

            {/* Client List */}
            <div className="grid gap-4">
              {recentClients.map((client) => (
                <Card key={client.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                        <AvatarFallback>{client.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-foreground">{client.name}</h3>
                          <Badge variant={client.status === "active" ? "default" : "secondary"}>
                            {client.status === "active" ? "アクティブ" : "非アクティブ"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">目標: {client.goal}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>参加日: {client.joinDate}</span>
                          <span>最終活動: {client.lastActivity}</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>進捗</span>
                            <span>{client.progress}%</span>
                          </div>
                          <Progress value={client.progress} className="h-2" />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Link href={`/trainer/clients/${client.id}`}>
                          <Button size="sm" variant="outline">
                            詳細
                          </Button>
                        </Link>
                        <Button size="sm" variant="ghost">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>予約管理</CardTitle>
                <CardDescription>今後の予約とスケジュール管理</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">カレンダービュー（実装予定）</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>メッセージ管理</CardTitle>
                <CardDescription>クライアントとのコミュニケーション</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">メッセージインターフェース（実装予定）</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
