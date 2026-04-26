import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog"

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Radix UI + CVA + Tailwind Demo
        </h1>

        {/* Карточка с кнопками разных вариантов */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Кнопки с CVA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button>Default Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            
            <div className="flex gap-4 flex-wrap items-center">
              <Button size="sm">Small Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </CardContent>
        </Card>

        {/* Карточка с диалогом */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Radix UI Dialog</CardTitle>
          </CardHeader>
          <CardContent>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button>Открыть диалог</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Привет от Radix UI!</DialogTitle>
                  <DialogDescription>
                    Это модальное окно создано с помощью Radix UI Dialog.
                    Оно полностью доступно и стилизовано с Tailwind CSS.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => setIsOpen(false)}>Закрыть</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Пример с разными комбинациями классов */}
        <Card>
          <CardHeader>
            <CardTitle>Tailwind Merge в действии</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Кастомный цвет (переопределяет default)
              </Button>
              <Button variant="outline" className="border-green-500 text-green-600">
                Outline с кастомным цветом
              </Button>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 Все классы автоматически мержатся с помощью tailwind-merge,
                  конфликты разрешаются в пользу последних указанных классов
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TestPage