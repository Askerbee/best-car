import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Executive',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'I had an amazing experience with Storletcar! The BMW X5 I rented was in perfect condition and made my business trip so much more comfortable. The staff was professional and the pickup process was seamless.'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Travel Blogger',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4,
    text: 'As someone who travels frequently, I\'ve used many car rental services, but Storletcar stands out for their exceptional fleet and customer service. The Tesla Model Y was a dream to drive around the city.'
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Photographer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 5,
    text: 'The SUV I rented from Storletcar was perfect for my photography road trip. Plenty of space for equipment and great fuel efficiency. Will definitely be using their services again for my next adventure!'
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
          <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Storletcar.
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
                        <p className="text-gray-600">{testimonial.role}</p>
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