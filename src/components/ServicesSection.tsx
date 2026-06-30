import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, BarChart3, Image, ArrowLeftRight, Package, Bot } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "ИИ-карточки товаров",
    description:
      "Искусственный интеллект пишет SEO-описания и заполняет характеристики с учётом требований конкретной площадки — у Wildberries и Ozon они отличаются. Весь контент в одном окне, без переключения между сервисами.",
  },
  {
    icon: Image,
    title: "Фото и инфографика",
    description:
      "Генерируем студийные фото с белым фоном и создаём инфографику с преимуществами товара прямо в платформе. Больше не нужен отдельный дизайнер и фотограф для красивых карточек.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и финансы",
    description:
      "Автоматически собираем данные по API: продажи, возвраты, комиссии, логистику FBO и FBS, штрафы и рекламу. Считаем реальную прибыль и маржу по каждому товару, помогаем с юнит-экономикой.",
  },
  {
    icon: Package,
    title: "Остатки и поставки",
    description:
      "Проводим ABC-анализ ассортимента, контролируем остатки и помогаем планировать поставки вовремя. Все отчёты можно выгрузить в Excel в пару кликов.",
  },
  {
    icon: ArrowLeftRight,
    title: "Перенос между площадками",
    description:
      "Автоматически перемещайте карточки с Wildberries на Ozon и обратно — все атрибуты товара сохраняются. Выход на новый маркетплейс перестаёт быть ручной работой.",
  },
  {
    icon: Bot,
    title: "Боты-помощники",
    description:
      "В экосистеме есть боты для автоматизации отдельных процессов — например, для проверки реальных рекламных ставок на Wildberries. Меньше ручных проверок — больше времени на продажи.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Возможности платформы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для продаж <span className="text-primary">в одном месте</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Инструменты, которые раньше были доступны только крупным командам — теперь для малого и среднего бизнеса.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}