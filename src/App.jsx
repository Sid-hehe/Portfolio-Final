import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Scene from './components/Scene';
import CreativeBackground from './components/CreativeBackground';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Services from './components/Services';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Refund from './components/Refund';
import Cookies from './components/Cookies';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll>
        {/* Dynamic creative background layers */}
        <CreativeBackground />

        {/* 3D Scene stays rendered across all routes */}
        <Scene />

        {/* UI Elements */}
        <div className="page">
          <Navbar />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
