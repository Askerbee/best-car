import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Функция для прокрутки к разделу с автомобилями
  const scrollToFeaturedCars = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <img
          src="https://i.ibb.co/xt4h3b08/home-site.jpg"
          alt="Роскошный автомобиль премиум класса"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 mt-8 md:mt-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            Найдите свой идеальный автомобиль
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-200">
            Best Car — свобода передвижения и дыхание гор.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
            <button 
              onClick={scrollToFeaturedCars}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Смотреть автомобили <ArrowRight className="h-5 w-5" />
            </button>
            <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 text-center">
              Связаться с нами
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        onClick={scrollToFeaturedCars}
      >
        <div className="w-10 h-16 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-2 h-4 bg-white rounded-full mt-2 animate-scrollDown" />
        </div>
      </div>
    </section>
  );
};

export default Hero;