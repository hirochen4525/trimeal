"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, Camera, Target, Activity, Calendar, Award, TrendingUp, Settings, Edit3 } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "田中花子",
    email: "hanako@example.com",
    phone: "090-1234-5678",
    age: 28,
    height: 165,
    weight: 58,
    targetWeight: 55,
    bio: "健康的な食生活を目指して頑張っています。特に野菜不足が気になっているので、バランスの良い食事を心がけたいです。",
    goals: ["体重管理", "栄養バランス改善", "食習慣の見直し"],
    allergies: ["えび", "かに"],
    preferences: ["和食中心", "低糖質", "野菜多め"],
  })

  const stats = {
    daysActive: 45,
    mealsLogged: 128,
    goalAchievement: 78,
    weightProgress: 2.5,
  }

  const achievements = [
    { title: "7日連続記録", icon: "🔥", date: "2024-01-15" },
    { title: "目標体重達成", icon: "🎯", date: "2024-01-10" },
    { title: "バランス食達成", icon: "🥗", date: "2024-01-08" },
    { title: "30日継続", icon: "📅", date: "2024-01-05" },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Save profile data
    console.log("Profile saved:", profileData)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">プロフィール</TabsTrigger>
            <TabsTrigger value="progress">進捗</TabsTrigger>
            <TabsTrigger value="achievements">実績</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/generic-user-avatar.png" alt="プロフィール画像" />
                      <AvatarFallback className="text-2xl">田</AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                      <h1 className="text-2xl font-bold text-foreground">{profileData.name}</h1>
                      <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-4">{profileData.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {profileData.goals.map((goal, index) => (
                        <Badge key={index} variant="secondary">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>基本情報</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">年齢</Label>
                      <Input
                        id="age"
                        type="number"
                        value={profileData.age}
                        onChange={(e) => setProfileData({ ...profileData, age: Number.parseInt(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">身長 (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={profileData.height}
                        onChange={(e) => setProfileData({ ...profileData, height: Number.parseInt(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">現在の体重 (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        value={profileData.weight}
                        onChange={(e) => setProfileData({ ...profileData, weight: Number.parseInt(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="targetWeight">目標体重 (kg)</Label>
                      <Input
                        id="targetWeight"
                        type="number"
                        value={profileData.targetWeight}
                        onChange={(e) =>
                          setProfileData({ ...profileData, targetWeight: Number.parseInt(e.target.value) })
                        }
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="bio">自己紹介</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="md:col-span-2 flex space-x-2">
                      <Button onClick={handleSave}>保存</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        キャンセル
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm text-muted-foreground">メールアドレス</Label>
                        <p className="text-foreground">{profileData.email}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">年齢</Label>
                        <p className="text-foreground">{profileData.age}歳</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">身長</Label>
                        <p className="text-foreground">{profileData.height}cm</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm text-muted-foreground">現在の体重</Label>
                        <p className="text-foreground">{profileData.weight}kg</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">目標体重</Label>
                        <p className="text-foreground">{profileData.targetWeight}kg</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">BMI</Label>
                        <p className="text-foreground">
                          {(profileData.weight / Math.pow(profileData.height / 100, 2)).toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Health Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">アレルギー・制限</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm text-muted-foreground">アレルギー</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {profileData.allergies.map((allergy, index) => (
                          <Badge key={index} variant="destructive">
                            {allergy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">食事の好み</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {profileData.preferences.map((pref, index) => (
                          <Badge key={index} variant="outline">
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">目標設定</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>目標体重まで</span>
                        <span>{profileData.weight - profileData.targetWeight}kg</span>
                      </div>
                      <Progress
                        value={
                          ((profileData.weight - profileData.targetWeight) /
                            (profileData.weight - profileData.targetWeight + stats.weightProgress)) *
                          100
                        }
                        className="h-2"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      現在のペースで約{Math.ceil((profileData.weight - profileData.targetWeight) / 0.5)}週間で達成予定
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-4">
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

            {/* Progress Charts */}
            <Card>
              <CardHeader>
                <CardTitle>体重の推移</CardTitle>
                <CardDescription>過去30日間の体重変化</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  体重推移グラフ（実装予定）
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>獲得した実績</span>
                </CardTitle>
                <CardDescription>あなたの頑張りを記録しています</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden">
        <div className="flex justify-around py-2">
          <Link href="/dashboard" className="flex flex-col items-center p-2 text-muted-foreground">
            <Activity className="h-5 w-5" />
            <span className="text-xs mt-1">ホーム</span>
          </Link>
          <Link href="/meal-input" className="flex flex-col items-center p-2 text-muted-foreground">
            <Camera className="h-5 w-5" />
            <span className="text-xs mt-1">記録</span>
          </Link>
          <Link href="/chat" className="flex flex-col items-center p-2 text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">チャット</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2 text-primary">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">プロフィール</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
