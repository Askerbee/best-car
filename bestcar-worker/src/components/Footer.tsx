import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from './ui/Link';

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/chRNm8qs/image-1-1.png"
                alt="Best Car Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Премиальные услуги аренды автомобилей, адаптированные к вашим потребностям. Ощутите роскошь и комфорт в вашем путешествии.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">
                Быстрые ссылки
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Наши автомобили
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Types */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">
                Типы автомобилей
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/vehicles/suv" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Внедорожники
                </Link>
              </li>
              <li>
                <Link href="/vehicles/sedan" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Седаны
                </Link>
              </li>
              <li>
                <Link href="/vehicles/truck" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Грузовики
                </Link>
              </li>
              <li>
                <Link href="/vehicles/luxury" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Строительная техника
                </Link>
              </li>
              <li>
                <Link href="/vehicles/electric" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                  Электромобили
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="after:content-[''] after:absolute after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">
                Рассылка
              </span>
            </h3>
            <p className="text-gray-400 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать обновления и специальные предложения.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Ваш email адрес"
                className="bg-navy-900 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Best Car. Все права защищены.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm">
              Условия использования
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-red-600 transition-colors duration-200 text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;