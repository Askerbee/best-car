import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedCars from './components/FeaturedCars';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="pt-16 md:pt-0">
              <Hero />
              <FeaturedCars />
              <Services />
              <Testimonials />
              <ContactForm />
            </main>
          } />
          <Route path="/about" element={<div className="pt-20 md:pt-28"><About /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;