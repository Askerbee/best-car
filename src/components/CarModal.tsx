import { X, Star, Phone, Mail } from 'lucide-react';
import { Car } from '../data/cars';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

const CarModal = ({ car, onClose }: CarModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="mt-2">
                  {/* Изображение автомобиля */}
                  <div className="relative h-64 mb-6">
                    <img
                      src={car.images?.[0] || car.image}
                      alt={car.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Основная информация */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">{car.name}</h3>
                    <p className="text-xl font-bold text-red-600 mb-4">{car.price}₽/день</p>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < car.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({car.reviewCount} отзывов)</span>
                    </div>
                  </div>

                  {/* Характеристики */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Тип</p>
                      <p className="font-medium">{
                        {
                          'SUV': 'Внедорожник',
                          'Sedan': 'Седан',
                          'Truck': 'Грузовик',
                          'Construction': 'Строительная техника'
                        }[car.type] || car.type
                      }</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Год выпуска</p>
                      <p className="font-medium">{car.year}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Коробка передач</p>
                      <p className="font-medium">{
                        car.transmission === 'Automatic' ? 'Автомат' : 
                        car.transmission === 'Manual' ? 'Механика' : 
                        car.transmission
                      }</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Тип топлива</p>
                      <p className="font-medium">{
                        car.fuel === 'Gasoline' ? 'Бензин' : 
                        car.fuel === 'Diesel' ? 'Дизель' : 
                        car.fuel === 'Electric' ? 'Электро' : 
                        car.fuel === 'Hybrid' ? 'Гибрид' : 
                        car.fuel
                      }</p>
                    </div>
                  </div>

                  {/* Контактная информация */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-lg mb-4">Забронировать автомобиль</h4>
                    <div className="space-y-3">
                      <a 
                        href="tel:89287115711" 
                        className="flex items-center text-navy-900 hover:text-red-600 transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        <span>8(928) 711-5-711</span>
                      </a>
                      <a 
                        href="mailto:bestcar07@mail.ru" 
                        className="flex items-center text-navy-900 hover:text-red-600 transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        <span>bestcar07@mail.ru</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal; 