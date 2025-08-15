import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
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
        <h1 className="text-3xl font-bold text-foreground mb-8">利用規約</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">最終更新日: 2025年1月1日</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第1条（適用）</h2>
            <p className="text-muted-foreground leading-relaxed">
              本規約は、TriMeal（以下「当社」）が提供するオンライン食事指導サービス「TriMeal」（以下「本サービス」）の利用条件を定めるものです。ユーザーは本規約に同意の上、本サービスをご利用いただくものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第2条（利用登録）</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第3条（ユーザーIDおよびパスワードの管理）</h2>
            <p className="text-muted-foreground leading-relaxed">
              ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第4条（料金および支払方法）</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第5条（禁止事項）</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
              <li>
                当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
              </li>
              <li>本サービスによって得られた情報を商業的に利用する行為</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第6条（本サービスの提供の停止等）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第7条（利用制限および登録抹消）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第8条（退会）</h2>
            <p className="text-muted-foreground leading-relaxed">
              ユーザーは、当社の定める退会手続により、本サービスから退会できるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第9条（保証の否認および免責事項）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第10条（サービス内容の変更等）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれに同意するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第11条（利用規約の変更）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲示された時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第12条（個人情報の取扱い）</h2>
            <p className="text-muted-foreground leading-relaxed">
              当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第13条（通知または連絡）</h2>
            <p className="text-muted-foreground leading-relaxed">
              ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第14条（権利義務の譲渡の禁止）</h2>
            <p className="text-muted-foreground leading-relaxed">
              ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">第15条（準拠法・裁判管轄）</h2>
            <p className="text-muted-foreground leading-relaxed">
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              本規約に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
