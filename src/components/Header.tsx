import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFeaturedCars = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/chRNm8qs/image-1-1.png"
              alt="Best Car Logo"
              className="h-10 md:h-16 w-auto"
            />
            <span className={`text-xl md:text-4xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Best Car
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItem label="Главная" isScrolled={isScrolled} />
          <button
            onClick={scrollToFeaturedCars}
            className={`font-medium hover:text-red-600 transition-colors ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            Автомобили
          </button>
          <NavItem label="О нас" isScrolled={isScrolled} />
          <NavItem label="Отзывы" isScrolled={isScrolled} />
          <NavItem label="Контакты" isScrolled={isScrolled} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 focus:outline-none ${isScrolled ? 'text-navy-900' : 'text-white'}`}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[52px] left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavItem label="Главная" />
          <button
            onClick={scrollToFeaturedCars}
            className="block w-full text-left py-2 text-navy-900 font-medium"
          >
            Автомобили
          </button>
          <MobileNavItem label="О нас" />
          <MobileNavItem label="Отзывы" />
          <MobileNavItem label="Контакты" />
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ label, isScrolled }: { label: string; isScrolled: boolean }) => {
  const getPath = (label: string) => {
    switch(label) {
      case 'Главная':
        return '/';
      case 'О нас':
        return '/about';
      case 'Отзывы':
        return '/reviews';
      case 'Контакты':
        return '/#contact';
      default:
        return `/${label.toLowerCase()}`;
    }
  };

  return (
    <Link
      href={getPath(label)}
      className={`font-medium hover:text-red-600 transition-colors ${
        isScrolled ? 'text-navy-900' : 'text-white'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavItem = ({ label }: { label: string }) => {
  const getPath = (label: string) => {
    switch(label) {
      case 'Главная':
        return '/';
      case 'О нас':
        return '/about';
      case 'Отзывы':
        return '/reviews';
      case 'Контакты':
        return '/#contact';
      default:
        return `/${label.toLowerCase()}`;
    }
  };

  return (
    <Link 
      href={getPath(label)} 
      className="block py-2 text-navy-900 font-medium"
    >
      {label}
    </Link>
  );
};

export default Header;