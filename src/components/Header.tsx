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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="https://i.ibb.co/chRNm8qs/image-1-1.png"
                alt="Best Car Logo"
                className="h-10 w-auto"
              />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
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
            className={`block md:hidden p-2 ${isScrolled ? 'text-navy-900' : 'text-white'}`}
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-3 space-y-3">
            <MobileNavItem label="Главная" onClick={() => setIsMenuOpen(false)} />
            <button
              onClick={() => {
                scrollToFeaturedCars();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-navy-900 font-medium hover:text-red-600 transition-colors"
            >
              Автомобили
            </button>
            <MobileNavItem label="О нас" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Отзывы" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem label="Контакты" onClick={() => setIsMenuOpen(false)} />
          </div>
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

const MobileNavItem = ({ label, onClick }: { label: string; onClick: () => void }) => {
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
      className="block py-2 text-navy-900 font-medium hover:text-red-600 transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;