import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Карточки товаров с ИИ",
    category: "Контент",
    image: "https://cdn.poehali.dev/projects/48930893-94bf-49f3-9ab3-0f21d6ce0c1d/files/112ae8f5-dc48-40ee-909a-477d091d9d0e.jpg",
    description:
      "ИИ пишет SEO-описания, заполняет характеристики под требования площадки, генерирует студийные фото с белым фоном и инфографику с преимуществами товара.",
    tags: ["SEO-тексты", "Фото", "Инфографика", "Характеристики"],
  },
  {
    title: "Аналитика и реальная прибыль",
    category: "Финансы",
    image: "https://cdn.poehali.dev/projects/48930893-94bf-49f3-9ab3-0f21d6ce0c1d/files/53ae9d98-06f0-4078-9f74-4a4b55a75f67.jpg",
    description:
      "Сервис собирает данные по API и считает чистую прибыль и маржу по каждому товару с учётом комиссий, логистики, штрафов и рекламы. Отчёты выгружаются в Excel.",
    tags: ["Прибыль", "Маржа", "ABC-анализ", "Excel"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Платформа в действии</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Посмотрите, как выглядит работа с карточками и аналитикой в одном окне — без переключения между сервисами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}