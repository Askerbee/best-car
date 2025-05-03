import { Shield, Clock, Gift, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Защита автомобиля',
      description: 'Все наши автомобили поставляются с комплексным страховым покрытием, чтобы обеспечить вашу безопасность на дороге.'
    },
    {
      icon: <Clock className="h-12 w-12 text-red-600" />,
      title: 'Поддержка 24/7',
      description: 'Наша команда обслуживания клиентов доступна круглосуточно, чтобы помочь вам с любыми вопросами.'
    },
    {
      icon: <Gift className="h-12 w-12 text-red-600" />,
      title: 'Специальные предложения',
      description: 'Получите эксклюзивные скидки на долгосрочную аренду и дополнительные преимущества для постоянных клиентов.'
    },
    {
      icon: <Truck className="h-12 w-12 text-red-600" />,
      title: 'Бесплатная доставка',
      description: 'Мы предлагаем бесплатную доставку автомобиля в любую точку города для вашего удобства.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Почему выбирают Best Car</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы стремимся предоставлять исключительный сервис и премиальные автомобили, чтобы ваше путешествие было комфортным и беззаботным.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;