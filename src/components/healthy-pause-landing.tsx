import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"
import { cn } from "@/lib/utils"

export function HealthyPauseLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Timer" className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HealthyPause</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Возможности
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Преимущества
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Как работает
              </a>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Скачать приложение
              </Button>
            </nav>
            <button className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Icon name="Sparkles" className="h-4 w-4" />
                Здоровье детей в цифровую эпоху
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Помогаем детям найти{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  баланс
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                HealthyPause — приложение для правильного распределения времени между гаджетами и заботой о здоровье. 
                Физкультминутки, упражнения для глаз и умственное развитие в одном решении.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Download" className="mr-2 h-5 w-5" />
                  Скачать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300">
                  <Icon name="PlayCircle" className="mr-2 h-5 w-5" />
                  Смотреть демо
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-green-400 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Более 5000+ довольных родителей</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Время для паузы!</h3>
                    <Icon name="Timer" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-center py-8">
                    <div className="text-5xl font-bold text-gray-900">05:00</div>
                    <p className="text-sm text-gray-600 mt-2">Осталось времени на отдых</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Icon name="Eye" className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">Гимнастика для глаз</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Icon name="Activity" className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Физкультминутка</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Icon name="Brain" className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium">Развивающее задание</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Всё для здорового развития
            </h2>
            <p className="text-lg text-gray-600">
              Комплексный подход к физическому и интеллектуальному здоровью вашего ребенка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name="Timer" className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Умные паузы</h3>
                <p className="text-gray-600">
                  Автоматическая блокировка устройства после длительного использования. 
                  Интервалы адаптируются под возраст ребенка.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-2 hover:border-green-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="Activity" className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Физкультминутки</h3>
                <p className="text-gray-600">
                  Короткие комплексы упражнений от врачей и тренеров. 
                  Для шеи, спины, плеч и рук — всё, что нужно после экрана.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Icon name="Eye" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Глаза в фокусе</h3>
                <p className="text-gray-600">
                  Специальные упражнения для снятия напряжения глаз: пальминг, 
                  вращения, чередование дальних и ближних объектов.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-2 hover:border-orange-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Icon name="Brain" className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Умственный заряд</h3>
                <p className="text-gray-600">
                  Развивающие тесты и задания для памяти, реакции и скорости мышления. 
                  Выбор уровня сложности для каждого ребенка.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-2 hover:border-pink-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Чтение и развитие</h3>
                <p className="text-gray-600">
                  Литературные фрагменты, научные статьи и познавательные рассказы 
                  для расширения кругозора во время паузы.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-2 hover:border-indigo-200 transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Icon name="Settings" className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Родительский контроль</h3>
                <p className="text-gray-600">
                  Настройка длительности перерывов, сложности упражнений и контента. 
                  Полная статистика активности ребенка.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Преимущества для вашей семьи
            </h2>
            <p className="text-lg text-gray-600">
              Инвестиция в здоровье и будущее вашего ребенка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Сохранение зрения</h3>
                <p className="text-gray-600">
                  Регулярные упражнения для глаз предотвращают развитие близорукости 
                  и снимают усталость от экранов.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Здоровая осанка</h3>
                <p className="text-gray-600">
                  Физкультминутки укрепляют мышцы спины и шеи, формируя правильную осанку 
                  с раннего возраста.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Улучшение концентрации</h3>
                <p className="text-gray-600">
                  Регулярные паузы и упражнения повышают способность к концентрации 
                  и эффективность обучения.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Здоровые привычки</h3>
                <p className="text-gray-600">
                  Формирование ответственного отношения к здоровью и разумного 
                  использования гаджетов на всю жизнь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-gray-600">
              Простая настройка за 3 шага
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Установите приложение</h3>
              <p className="text-gray-600">
                Скачайте HealthyPause на телефон или компьютер ребенка. 
                Поддержка Android, iOS, Windows и macOS.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Настройте параметры</h3>
              <p className="text-gray-600">
                Укажите возраст ребенка и настройте длительность перерывов. 
                Выберите упражнения и контент для пауз.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Следите за прогрессом</h3>
              <p className="text-gray-600">
                Смотрите статистику и прогресс в родительской панели. 
                Корректируйте настройки по мере необходимости.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Начните заботиться о здоровье ребенка уже сегодня
            </h2>
            <p className="text-lg sm:text-xl text-blue-100">
              Присоединяйтесь к тысячам родителей, которые выбрали HealthyPause 
              для здорового развития своих детей
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Input
                type="email"
                placeholder="Введите ваш email"
                className="max-w-sm bg-white/95 border-0 h-12 text-base"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8">
                Получить доступ
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-white/90">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5" />
                <span className="text-sm">Бесплатная пробная версия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5" />
                <span className="text-sm">Без кредитной карты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-5 w-5" />
                <span className="text-sm">Отмена в любой момент</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Timer" className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">HealthyPause</span>
              </div>
              <p className="text-sm">
                Помогаем детям находить баланс между технологиями и здоровьем
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Скачать</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 HealthyPause. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
