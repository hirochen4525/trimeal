"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Camera, Upload, Sparkles, TrendingUp, MessageCircle, Save, Clock } from "lucide-react"
import Link from "next/link"

const MEAL_TYPES = [
  { id: "breakfast", label: "朝食", icon: "🌅" },
  { id: "lunch", label: "昼食", icon: "☀️" },
  { id: "dinner", label: "夕食", icon: "🌙" },
  { id: "snack", label: "間食", icon: "🍎" },
]

export default function MealInputPage() {
  const [selectedMealType, setSelectedMealType] = useState("breakfast")
  const [inputMethod, setInputMethod] = useState<"photo" | "text">("photo")
  const [mealData, setMealData] = useState({
    photo: null as File | null,
    description: "",
    notes: "",
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [currentDate] = useState(new Date())

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setMealData({ ...mealData, photo: file })
    }
  }

  const handleAnalyze = async () => {
    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        calories: 650,
        protein: 35,
        fat: 25,
        carbs: 75,
        feedback: "バランスの良い食事ですね！タンパク質が豊富で、野菜もしっかり摂れています。",
        suggestions: ["野菜の量を少し増やすとより良いバランスになります", "塩分が少し多めかもしれません"],
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const handleSave = () => {
    console.log("Saving meal:", { selectedMealType, mealData, analysisResult })
    // Handle save logic
    alert("食事記録を保存しました！")
  }

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
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
                <h1 className="text-lg font-semibold text-foreground">食事の記録</h1>
                <p className="text-sm text-muted-foreground">{formatDate(currentDate)}</p>
              </div>
            </div>
            <Button onClick={handleSave} disabled={!mealData.description && !mealData.photo}>
              <Save className="h-4 w-4 mr-2" />
              保存
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Meal Type Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>食事の種類を選択</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2">
              {MEAL_TYPES.map((meal) => (
                <Button
                  key={meal.id}
                  variant={selectedMealType === meal.id ? "default" : "outline"}
                  className="h-16 flex-col space-y-1"
                  onClick={() => setSelectedMealType(meal.id)}
                >
                  <span className="text-lg">{meal.icon}</span>
                  <span className="text-xs">{meal.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Input Method Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>記録方法</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={inputMethod} onValueChange={(value) => setInputMethod(value as "photo" | "text")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="photo" className="flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>写真で記録</span>
                </TabsTrigger>
                <TabsTrigger value="text" className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>テキストで記録</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photo" className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  {mealData.photo ? (
                    <div className="space-y-4">
                      <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">写真がアップロードされました</p>
                      <Button variant="outline" onClick={() => setMealData({ ...mealData, photo: null })}>
                        写真を変更
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                      <div>
                        <p className="text-lg font-medium text-foreground mb-2">写真をアップロード</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          食事の写真を撮影またはアップロードしてください
                        </p>
                        <div className="space-y-2">
                          <Button asChild>
                            <label htmlFor="photo-upload" className="cursor-pointer">
                              <Camera className="h-4 w-4 mr-2" />
                              写真を選択
                            </label>
                          </Button>
                          <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="text" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">食事内容</Label>
                  <Textarea
                    id="description"
                    placeholder="例: ご飯、味噌汁、焼き鮭、ほうれん草のお浸し、納豆"
                    value={mealData.description}
                    onChange={(e) => setMealData({ ...mealData, description: e.target.value })}
                    rows={4}
                  />
                </div>
              </TabsContent>
            </Tabs>

            {/* Notes Section */}
            <div className="space-y-2 mt-4">
              <Label htmlFor="notes">メモ（任意）</Label>
              <Textarea
                id="notes"
                placeholder="食事の感想や気づいたことがあれば記入してください"
                value={mealData.notes}
                onChange={(e) => setMealData({ ...mealData, notes: e.target.value })}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* AI Analysis Button */}
        {(mealData.photo || mealData.description) && !analysisResult && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <Button onClick={handleAnalyze} disabled={isAnalyzing} className="w-full" size="lg">
                {isAnalyzing ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    AI分析中...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    AIで栄養分析する
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* AI Analysis Results */}
        {analysisResult && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>AI分析結果</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Nutritional Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-foreground">{analysisResult.calories}</div>
                  <div className="text-sm text-muted-foreground">kcal</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600">P (タンパク質)</span>
                    <span className="text-sm font-medium">{analysisResult.protein}g</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-yellow-600">F (脂質)</span>
                    <span className="text-sm font-medium">{analysisResult.fat}g</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">C (炭水化物)</span>
                    <span className="text-sm font-medium">{analysisResult.carbs}g</span>
                  </div>
                </div>
              </div>

              {/* AI Feedback */}
              <Alert>
                <TrendingUp className="h-4 w-4" />
                <AlertDescription>
                  <strong>AIからのフィードバック:</strong>
                  <br />
                  {analysisResult.feedback}
                </AlertDescription>
              </Alert>

              {/* Suggestions */}
              {analysisResult.suggestions && analysisResult.suggestions.length > 0 && (
                <div>
                  <h4 className="font-medium text-foreground mb-2">改善提案</h4>
                  <ul className="space-y-1">
                    {analysisResult.suggestions.map((suggestion: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Badge variant="secondary" className="w-fit">
                トレーナーにも共有されます
              </Badge>
            </CardContent>
          </Card>
        )}

        {/* Quick Tips */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">記録のコツ</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>写真は料理全体が見えるように撮影してください</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>調理方法（焼く、煮る、揚げるなど）も記載すると分析精度が向上します</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>飲み物や調味料も忘れずに記録しましょう</span>
              </li>
            </ul>
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
            <Link href="/meal-input" className="flex flex-col items-center space-y-1 py-2 px-3 text-primary">
              <Camera className="h-5 w-5" />
              <span className="text-xs font-medium">食事記録</span>
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
