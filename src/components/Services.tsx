import { Clock, Shield, Gift } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Наши услуги</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-50 p-8 rounded-lg flex items-start">
            <Clock className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Быстрота</h3>
              <p className="text-gray-600">
                Оформление аренды и страхования проходит быстро и без лишних задержек. Онлайн-бронирование, мгновенная подача автомобиля и круглосуточная поддержка.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg flex items-start">
            <Shield className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Надёжность</h3>
              <p className="text-gray-600">
                Весь автопарк проходит регулярное техобслуживание, а страховые пакеты защищают от непредвиденных ситуаций. Вы можете быть уверены: мы всегда на вашей стороне.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg flex items-start">
            <Gift className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">Сервис</h3>
              <p className="text-gray-600">
                Вежливые сотрудники, прозрачные условия и индивидуальный подход. Мы сопровождаем вас на каждом этапе — от первого клика до возврата автомобиля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;