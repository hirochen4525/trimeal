"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Send, Paperclip, ImageIcon, TrendingUp, MessageCircle, User, Phone, Video } from "lucide-react"
import Link from "next/link"

// Mock data
const mockTrainer = {
  id: 1,
  name: "佐藤トレーナー",
  avatar: "/trainer-avatar.png",
  status: "online",
  specialization: "栄養指導・ダイエット",
}

const mockMessages = [
  {
    id: 1,
    senderId: "trainer",
    senderName: "佐藤トレーナー",
    message: "おはようございます！昨日の食事記録を確認させていただきました。",
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    type: "text",
  },
  {
    id: 2,
    senderId: "trainer",
    senderName: "佐藤トレーナー",
    message: "夕食のバランスが素晴らしいですね！タンパク質と野菜がしっかり摂れています。この調子で頑張りましょう！",
    timestamp: new Date(Date.now() - 3500000),
    type: "text",
  },
  {
    id: 3,
    senderId: "user",
    senderName: "山田太郎",
    message: "ありがとうございます！質問なのですが、間食におすすめの食品はありますか？",
    timestamp: new Date(Date.now() - 3000000),
    type: "text",
  },
  {
    id: 4,
    senderId: "trainer",
    senderName: "佐藤トレーナー",
    message:
      "良い質問ですね！間食には以下がおすすめです：\n\n• ナッツ類（アーモンド、くるみ）\n• ギリシャヨーグルト\n• ゆで卵\n• フルーツ（りんご、バナナ）\n\nタンパク質が含まれているものを選ぶと満腹感が持続しますよ。",
    timestamp: new Date(Date.now() - 2800000),
    type: "text",
  },
  {
    id: 5,
    senderId: "user",
    senderName: "山田太郎",
    message: "詳しく教えていただき、ありがとうございます！早速試してみます。",
    timestamp: new Date(Date.now() - 1800000),
    type: "text",
  },
  {
    id: 6,
    senderId: "trainer",
    senderName: "佐藤トレーナー",
    message: "それでは、明日の面談でも詳しくお話ししましょう。何か他にご質問があればいつでもお聞かせください！",
    timestamp: new Date(Date.now() - 1200000),
    type: "text",
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      senderId: "user",
      senderName: "山田太郎",
      message: newMessage,
      timestamp: new Date(),
      type: "text" as const,
    }

    setMessages([...messages, message])
    setNewMessage("")

    // Simulate trainer typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      // Add trainer response (in real app, this would come from server)
    }, 2000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ja-JP", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDate = (date: Date) => {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "今日"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "昨日"
    } else {
      return date.toLocaleDateString("ja-JP", {
        month: "short",
        day: "numeric",
      })
    }
  }

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={mockTrainer.avatar || "/placeholder.svg"} />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  {mockTrainer.status === "online" && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
                  )}
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">{mockTrainer.name}</h1>
                  <p className="text-sm text-muted-foreground">{mockTrainer.specialization}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message, index) => {
          const isUser = message.senderId === "user"
          const showDate = index === 0 || formatDate(message.timestamp) !== formatDate(messages[index - 1].timestamp)

          return (
            <div key={message.id}>
              {showDate && (
                <div className="text-center my-4">
                  <Badge variant="secondary" className="text-xs">
                    {formatDate(message.timestamp)}
                  </Badge>
                </div>
              )}
              <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
                <div
                  className={`flex items-end space-x-2 max-w-[80%] ${isUser ? "flex-row-reverse space-x-reverse" : ""}`}
                >
                  {!isUser && (
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarImage src={mockTrainer.avatar || "/placeholder.svg"} />
                      <AvatarFallback>T</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`space-y-1 ${isUser ? "items-end" : "items-start"} flex flex-col`}>
                    <Card
                      className={`p-3 ${
                        isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted text-muted-foreground mr-auto"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                    </Card>
                    <span className="text-xs text-muted-foreground px-1">{formatTime(message.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="flex items-end space-x-2 max-w-[80%]">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={mockTrainer.avatar || "/placeholder.svg"} />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <Card className="bg-muted text-muted-foreground p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </Card>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t border-border bg-background p-4 flex-shrink-0">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <Button type="button" variant="ghost" size="sm">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button type="button" variant="ghost" size="sm">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-1"
          />
          <Button type="submit" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Bottom Navigation */}
      <nav className="border-t border-border bg-background">
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
              <ImageIcon className="h-5 w-5" />
              <span className="text-xs">食事記録</span>
            </Link>
            <Link href="/chat" className="flex flex-col items-center space-y-1 py-2 px-3 text-primary">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs font-medium">チャット</span>
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
