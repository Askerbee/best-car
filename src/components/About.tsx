const About = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(255,248,209)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy-900 mb-8 text-center">
            Best Car — свобода путешествий в каждом километре!
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Мы предоставляем туристам удобные, надежные и доступные автомобили для аренды, 
            чтобы вы могли наслаждаться красотой горных пейзажей без лишних забот.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
              <p className="text-gray-700">
                <span className="font-bold">Широкий выбор авто:</span> от экономичных моделей до мощных внедорожников для горных маршрутов.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
              <p className="text-gray-700">
                <span className="font-bold">Прозрачные условия:</span> никаких скрытых платежей, только честные цены.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
              <p className="text-gray-700">
                <span className="font-bold">Полная безопасность:</span> страховое покрытие и круглосуточная техническая поддержка.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
              <p className="text-gray-700">
                <span className="font-bold">Удобство на первом месте:</span> онлайн-бронирование, быстрая выдача авто и доставка к вашему отелю.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
              <p className="text-gray-700">
                <span className="font-bold">Бонусы для комфорта:</span> GPS, детские кресла и выгодные акции для наших клиентов.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 font-medium text-center">
            С <span className="font-bold">Best Car</span> вы получаете не просто автомобиль, 
            а свободу исследовать самые живописные уголки нашей страны. 
            Горы ждут вас — отправляйтесь в путь с нами!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 