import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ирина',
    location: 'Казань',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Отдыхали с мужем в Кабардино-Балкарии, арендовали Volkswagen Polo у Best car — всё прошло на высшем уровне. Машину доставили вовремя, в салоне — чисто, приятно пахло, лежали влажные салфетки, бутылочки воды и даже USB-кабель для зарядки. Удивили приятные мелочи и чёткая работа персонала. Рекомендую!'
  },
  {
    id: 2,
    name: 'Андрей',
    location: 'Владивосток',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Сервис как в Европе! Брал Hyundai Solaris — машина в отличном состоянии, менеджер подробно всё объяснил. На борту была зарядка для телефона и вода — как раз после перелёта было кстати. Очень доволен, что выбрал Best car. Спасибо!'
  },
  {
    id: 3,
    name: 'Мария',
    location: 'Екатеринбург',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Арендовали Tiguan на три дня, чтобы покататься по ущельям и озёрам. Машина — огонь, комфортная, чистая. Внутри — салфетки, вода, держатель для телефона, что вообще редкость! Всё прозрачно, быстро, без нервов. Отдельное спасибо менеджеру Тимуру!'
  },
  {
    id: 4,
    name: 'Владислав',
    location: 'Новосибирск',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Идеальный сервис! Заказал Ford Kuga онлайн, через 15 минут перезвонили, всё подтвердили. Машину подали к гостинице вовремя, в салоне порядок, ничего не скрипит, не пахнет. Было приятно обнаружить зарядку Type-C и бутылку воды. 5 из 5!'
  },
  {
    id: 5,
    name: 'Ольга',
    location: 'Сочи',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Это лучший прокат, с которым я сталкивалась! Solaris — свежая, экономичная, чистая. Ещё и с мелочами вроде антисептика, салфеток и зарядки для айфона. Очень порадовало отношение персонала — улыбчивые, доброжелательные ребята!'
  },
  {
    id: 6,
    name: 'Дмитрий',
    location: 'Санкт-Петербург',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Скорость оформления — просто молниеносная. Бронировал Tiguan, приехал — уже всё готово. Прокатились по красивейшим местам Кабардино-Балкарии, ни разу не подвёл. В салоне всё чисто, удобно, вода холодная — мелочь, а приятно.'
  },
  {
    id: 7,
    name: 'Наталья',
    location: 'Тюмень',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Огромная благодарность компании Best car! Взяли машину в аэропорту Нальчика, всё чётко: документы, приём, осмотр. Очень удобно, что сразу в бардачке были салфетки и кабель — пригодилось. Катались по Чегету, всё отлично!'
  },
  {
    id: 8,
    name: 'Георгий',
    location: 'Махачкала',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Первый раз арендовал авто — и всё прошло идеально. Volkswagen Polo оказался очень экономичным, идеальным для горной дороги. А сервис — просто выше всяких похвал. Сотрудник помог всё быстро оформить и даже подсказал хорошие маршруты.'
  },
  {
    id: 9,
    name: 'Алина',
    location: 'Архангельск',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Взяли Ford Kuga на 5 дней — шикарный автомобиль, отлично подходит для поездок по горам. Внутри — порядок, USB-зарядка, салфетки, вода. Отдельно хочется отметить вежливость сотрудников — всё объяснили, показали. Не подвели ни разу.'
  },
  {
    id: 10,
    name: 'Сергей',
    location: 'Пермь',
    image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'Сервис на уровне! Машину подали вовремя, чистую, с полным баком. Очень понравилось, что в салоне лежали не только вода и зарядка, но и небольшой путеводитель по регионам — неожиданно, но круто. Большое спасибо Best car за заботу!'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-16 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Не просто слова. Вот что говорят о нас клиенты, выбравшие Best Car для своих путешествий.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white text-navy-900 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none sm:-translate-x-6"
            onClick={() => {
              prev();
              setAutoplay(false);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white text-navy-900 rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none sm:translate-x-6"
            onClick={() => {
              next();
              setAutoplay(false);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  i === current ? 'bg-red-600' : 'bg-gray-400'
                }`}
                onClick={() => {
                  setCurrent(i);
                  setAutoplay(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;