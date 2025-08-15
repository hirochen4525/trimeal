"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, User, Target, Activity, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"

const STEPS = [
  { id: 1, title: "基本情報", icon: User },
  { id: 2, title: "目標設定", icon: Target },
  { id: 3, title: "生活習慣", icon: Activity },
  { id: 4, title: "アレルギー・注意事項", icon: AlertTriangle },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    age: "",
    gender: "",
    height: "",
    weight: "",
    // Step 2: Goals
    targetWeight: "",
    targetBodyFat: "",
    primaryGoal: "",
    timeline: "",
    // Step 3: Lifestyle
    activityLevel: "",
    workSchedule: "",
    mealFrequency: "",
    cookingFrequency: "",
    // Step 4: Allergies & Notes
    allergies: [] as string[],
    medicalConditions: "",
    dietaryRestrictions: "",
    additionalNotes: "",
  })

  const progress = (currentStep / STEPS.length) * 100

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      console.log("Onboarding completed:", formData)
      router.push("/dashboard")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAllergyChange = (allergy: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, allergies: [...formData.allergies, allergy] })
    } else {
      setFormData({ ...formData, allergies: formData.allergies.filter((a) => a !== allergy) })
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">年齢</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="30"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">性別</Label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">男性</SelectItem>
                    <SelectItem value="female">女性</SelectItem>
                    <SelectItem value="other">その他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">身長 (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">現在の体重 (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="65"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="targetWeight">目標体重 (kg)</Label>
                <Input
                  id="targetWeight"
                  type="number"
                  placeholder="60"
                  value={formData.targetWeight}
                  onChange={(e) => setFormData({ ...formData, targetWeight: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetBodyFat">目標体脂肪率 (%)</Label>
                <Input
                  id="targetBodyFat"
                  type="number"
                  placeholder="20"
                  value={formData.targetBodyFat}
                  onChange={(e) => setFormData({ ...formData, targetBodyFat: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="primaryGoal">主な目標</Label>
              <Select
                value={formData.primaryGoal}
                onValueChange={(value) => setFormData({ ...formData, primaryGoal: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-loss">体重減少</SelectItem>
                  <SelectItem value="muscle-gain">筋肉増加</SelectItem>
                  <SelectItem value="maintenance">現状維持</SelectItem>
                  <SelectItem value="health-improvement">健康改善</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">目標達成期間</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3ヶ月</SelectItem>
                  <SelectItem value="6months">6ヶ月</SelectItem>
                  <SelectItem value="1year">1年</SelectItem>
                  <SelectItem value="longterm">長期的</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="activityLevel">運動レベル</Label>
              <Select
                value={formData.activityLevel}
                onValueChange={(value) => setFormData({ ...formData, activityLevel: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">ほとんど運動しない</SelectItem>
                  <SelectItem value="light">軽い運動（週1-3回）</SelectItem>
                  <SelectItem value="moderate">中程度の運動（週3-5回）</SelectItem>
                  <SelectItem value="active">活発な運動（週6-7回）</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="workSchedule">勤務形態</Label>
              <Select
                value={formData.workSchedule}
                onValueChange={(value) => setFormData({ ...formData, workSchedule: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">規則的（9-17時など）</SelectItem>
                  <SelectItem value="shift">シフト制</SelectItem>
                  <SelectItem value="irregular">不規則</SelectItem>
                  <SelectItem value="remote">在宅勤務</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mealFrequency">1日の食事回数</Label>
              <Select
                value={formData.mealFrequency}
                onValueChange={(value) => setFormData({ ...formData, mealFrequency: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2meals">2回</SelectItem>
                  <SelectItem value="3meals">3回</SelectItem>
                  <SelectItem value="4meals">4回</SelectItem>
                  <SelectItem value="5meals">5回以上</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cookingFrequency">自炊の頻度</Label>
              <Select
                value={formData.cookingFrequency}
                onValueChange={(value) => setFormData({ ...formData, cookingFrequency: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">毎日</SelectItem>
                  <SelectItem value="often">週4-6回</SelectItem>
                  <SelectItem value="sometimes">週1-3回</SelectItem>
                  <SelectItem value="rarely">ほとんどしない</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              <Label>アレルギー（該当するものをチェック）</Label>
              <div className="grid grid-cols-2 gap-2">
                {["卵", "乳製品", "小麦", "そば", "落花生", "えび", "かに", "その他"].map((allergy) => (
                  <div key={allergy} className="flex items-center space-x-2">
                    <Checkbox
                      id={allergy}
                      checked={formData.allergies.includes(allergy)}
                      onCheckedChange={(checked) => handleAllergyChange(allergy, checked as boolean)}
                    />
                    <Label htmlFor={allergy} className="text-sm">
                      {allergy}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="medicalConditions">既往歴・服薬中の薬</Label>
              <Textarea
                id="medicalConditions"
                placeholder="糖尿病、高血圧など（任意）"
                value={formData.medicalConditions}
                onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dietaryRestrictions">食事制限</Label>
              <Textarea
                id="dietaryRestrictions"
                placeholder="ベジタリアン、ハラル、その他の制限（任意）"
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalNotes">その他ご要望</Label>
              <Textarea
                id="additionalNotes"
                placeholder="トレーナーに伝えたいことがあればご記入ください（任意）"
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TriMeal</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">初期設定</span>
            <span className="text-sm text-muted-foreground">
              {currentStep} / {STEPS.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps Navigation */}
        <div className="flex items-center justify-between mb-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            const isActive = step.id === currentStep
            const isCompleted = step.id < currentStep

            return (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : isCompleted
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                {index < STEPS.length - 1 && <div className="w-8 h-px bg-border mx-2" />}
              </div>
            )
          })}
        </div>

        {/* Current Step */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {React.createElement(STEPS[currentStep - 1].icon, { className: "h-5 w-5" })}
              <span>{STEPS[currentStep - 1].title}</span>
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "基本的な身体情報を入力してください"}
              {currentStep === 2 && "あなたの目標を設定しましょう"}
              {currentStep === 3 && "普段の生活習慣について教えてください"}
              {currentStep === 4 && "アレルギーや注意事項があれば教えてください"}
            </CardDescription>
          </CardHeader>
          <CardContent>{renderStep()}</CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            戻る
          </Button>
          <Button onClick={handleNext}>
            {currentStep === STEPS.length ? "完了" : "次へ"}
            {currentStep < STEPS.length && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
