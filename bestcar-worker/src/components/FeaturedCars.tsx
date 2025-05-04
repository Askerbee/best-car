import { useState } from 'react';
import { Star, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { carData } from '../data/cars';
import CarModal from './CarModal';

// Компонент карусели для изображений
const ImageCarousel = ({ images, name }: { images: string[], name: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <div className="relative h-60">
      <img
        src={images[currentIndex]}
        alt={`${name} - изображение ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FeaturedCars = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCar, setSelectedCar] = useState<typeof carData[0] | null>(null);

  const filters = ['Все', 'Внедорожник', 'Седан', 'Грузовик', 'Строительная техника'];

  const filteredCars = activeFilter === 'Все' 
    ? carData 
    : carData.filter(car => {
        const typeMap: {[key: string]: string} = {
          'Внедорожник': 'SUV',
          'Седан': 'Sedan',
          'Грузовик': 'Truck',
          'Строительная техника': 'Construction'
        };
        return car.type === typeMap[activeFilter];
      });

  return (
    <section className="py-16 bg-gray-50" id="featured">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Популярные автомобили</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Изучите наш выбор премиальных автомобилей. Каждый автомобиль прошел тщательную проверку, чтобы обеспечить качество и надежность.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center mb-10 space-y-4 md:space-y-0">
          <div className="md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md"
            >
              <span className="flex items-center">
                <Filter className="h-4 w-4 mr-2" /> {activeFilter}
              </span>
              <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            {showFilters && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setShowFilters(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      activeFilter === filter ? 'bg-gray-100 text-red-600' : ''
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden md:flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-red-600 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                {car.images && car.images.length > 0 ? (
                  <ImageCarousel images={car.images} name={car.name} />
                ) : (
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                )}
                {car.featured && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Популярный
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy-900">{car.name}</h3>
                  <p className="text-lg font-bold text-red-600">{car.price}₽/день</p>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < car.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({car.reviewCount} отзывов)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Тип:</span>
                    <span className="ml-1">{
                      {
                        'SUV': 'Внедорожник',
                        'Sedan': 'Седан',
                        'Truck': 'Грузовик',
                        'Construction': 'Строительная техника'
                      }[car.type] || car.type
                    }</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Год:</span>
                    <span className="ml-1">{car.year}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Коробка:</span>
                    <span className="ml-1">{
                      car.transmission === 'Automatic' ? 'Автомат' : 
                      car.transmission === 'Manual' ? 'Механика' : 
                      car.transmission
                    }</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Топливо:</span>
                    <span className="ml-1">{
                      car.fuel === 'Gasoline' ? 'Бензин' : 
                      car.fuel === 'Diesel' ? 'Дизель' : 
                      car.fuel === 'Electric' ? 'Электро' : 
                      car.fuel === 'Hybrid' ? 'Гибрид' : 
                      car.fuel
                    }</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCar(car)}
                  className="w-full bg-navy-800 hover:bg-navy-900 text-white font-medium py-2 rounded-md transition-colors duration-200"
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setActiveFilter('Все')}
            className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
          >
            Посмотреть все автомобили
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </section>
  );
};

export default FeaturedCars;