"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
  ArrowLeft,
  Moon,
  Sun,
  Globe,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    mealReminders: true,
    trainerMessages: true,
    weeklyReports: true,
    appointments: true,
    marketing: false,
  })

  const [preferences, setPreferences] = useState({
    theme: "system",
    language: "ja",
    timezone: "Asia/Tokyo",
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/profile" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">設定</h1>
            <p className="text-muted-foreground">アプリの設定を管理します</p>
          </div>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>通知設定</span>
              </CardTitle>
              <CardDescription>受け取りたい通知を選択してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="meal-reminders" className="text-sm font-medium">
                    食事記録リマインダー
                  </Label>
                  <p className="text-sm text-muted-foreground">食事の記録を忘れないようにお知らせします</p>
                </div>
                <Switch
                  id="meal-reminders"
                  checked={notifications.mealReminders}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, mealReminders: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="trainer-messages" className="text-sm font-medium">
                    トレーナーからのメッセージ
                  </Label>
                  <p className="text-sm text-muted-foreground">担当トレーナーからの新しいメッセージ</p>
                </div>
                <Switch
                  id="trainer-messages"
                  checked={notifications.trainerMessages}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, trainerMessages: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-reports" className="text-sm font-medium">
                    週次レポート
                  </Label>
                  <p className="text-sm text-muted-foreground">週間の食事記録サマリー</p>
                </div>
                <Switch
                  id="weekly-reports"
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="appointments" className="text-sm font-medium">
                    予約リマインダー
                  </Label>
                  <p className="text-sm text-muted-foreground">カウンセリング予約の前日・当日通知</p>
                </div>
                <Switch
                  id="appointments"
                  checked={notifications.appointments}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, appointments: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing" className="text-sm font-medium">
                    お知らせ・キャンペーン
                  </Label>
                  <p className="text-sm text-muted-foreground">新機能やキャンペーンのお知らせ</p>
                </div>
                <Switch
                  id="marketing"
                  checked={notifications.marketing}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* App Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <span>アプリ設定</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">テーマ</Label>
                <Select
                  value={preferences.theme}
                  onValueChange={(value) => setPreferences({ ...preferences, theme: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4" />
                        <span>ライト</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center space-x-2">
                        <Moon className="h-4 w-4" />
                        <span>ダーク</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center space-x-2">
                        <Settings className="h-4 w-4" />
                        <span>システム設定に従う</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">言語</Label>
                <Select
                  value={preferences.language}
                  onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ja">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span>日本語</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="en">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <span>English</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Account & Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>アカウント・セキュリティ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Shield className="h-4 w-4 mr-2" />
                パスワードを変更
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Smartphone className="h-4 w-4 mr-2" />
                二段階認証設定
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Globe className="h-4 w-4 mr-2" />
                連携アカウント管理
              </Button>
            </CardContent>
          </Card>

          {/* Billing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>お支払い・プラン</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">現在のプラン</span>
                  <span className="text-primary font-semibold">スタンダード</span>
                </div>
                <p className="text-sm text-muted-foreground">次回更新: 2024年2月15日</p>
              </div>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <CreditCard className="h-4 w-4 mr-2" />
                お支払い方法を管理
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                プランを変更
              </Button>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="h-5 w-5" />
                <span>サポート</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <HelpCircle className="h-4 w-4 mr-2" />
                よくある質問
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <HelpCircle className="h-4 w-4 mr-2" />
                お問い合わせ
              </Button>
              <Link href="/terms">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="h-4 w-4 mr-2" />
                  利用規約
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="h-4 w-4 mr-2" />
                  プライバシーポリシー
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive hover:text-destructive bg-transparent"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  ログアウト
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-destructive hover:text-destructive bg-transparent"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  アカウントを削除
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
