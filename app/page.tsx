import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Brain, Trophy, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TriMeal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                TriMealとは
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                お客様の声
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                料金
              </Link>
              <Button asChild>
                <Link href="/counseling">無料カウンセリング</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            AI × 専属トレーナーによる食事改善プログラム
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            食べる力を、
            <br />
            <span className="text-primary">一生の力に</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            95%がリバウンドするダイエットからの卒業を、あなたに。
            <br />
            AIによる食事分析と認定トレーナーの伴走で、体系的な食リテラシーを習得
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/counseling">
              無料カウンセリングはこちら
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">こんな悩みはありませんか？</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground">カロリー計算が続かない...</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground">何が正しい食事か分からない...</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground">ダイエットしてもリバウンドしてしまう...</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground">食事制限がストレスになる...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">TriMealが選ばれる3つの理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">AI × 専属トレーナー</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  AIによる精密な栄養分析と、認定トレーナーによる個別指導で、あなたに最適な食事改善をサポート
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">体系的プログラム</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  3〜6ヶ月間の段階的なカリキュラムで、食の知識とスキルを体系的に習得できる
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">卒業できる</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  一生モノの食リテラシーを身につけ、ダイエットに頼らない健康的な食生活を実現
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">お客様の声・実績</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">A.S</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">30代女性・会社員</CardTitle>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  「3ヶ月で-8kg達成！何より食事の知識が身について、リバウンドの心配がなくなりました。トレーナーさんのサポートが心強かったです。」
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">T.K</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">40代男性・管理職</CardTitle>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  「忙しい中でも続けられる食事改善法を学べました。AIの分析が的確で、自分の食事の問題点がよく分かりました。」
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">ご利用の流れ</h2>
          </div>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">無料カウンセリング</h3>
                <p className="text-muted-foreground">現在の食生活や目標をヒアリングし、最適なプランをご提案</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">プログラム開始</h3>
                <p className="text-muted-foreground">専属トレーナーとの面談、食事記録の開始</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">継続サポート</h3>
                <p className="text-muted-foreground">週1回の面談とAI分析で、着実に食リテラシーを向上</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">料金プラン</h2>
          <Card className="max-w-md mx-auto p-8">
            <CardHeader>
              <CardTitle className="text-2xl">スタンダードプラン</CardTitle>
              <div className="text-4xl font-bold text-primary">
                ¥33,000
                <span className="text-lg text-muted-foreground font-normal">/月</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>専属トレーナーによる個別指導</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>AIによる食事分析</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>週1回のオンライン面談</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>24時間チャットサポート</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>学習コンテンツ見放題</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">まずは無料で現状分析から</h2>
          <p className="text-xl text-muted-foreground mb-8">
            あなたの食生活の課題を明確にし、最適な改善プランをご提案します
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/counseling">
              無料カウンセリングはこちら
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-foreground">TriMeal</span>
              </div>
              <p className="text-muted-foreground">食べる力を、一生の力に</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">サービス</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground transition-colors">
                    TriMealとは
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="/counseling" className="hover:text-foreground transition-colors">
                    無料カウンセリング
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">サポート</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    ヘルプ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">法的情報</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 TriMeal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
