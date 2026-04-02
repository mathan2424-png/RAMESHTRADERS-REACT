import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './index.css'
import logo from './assets/logo.png'
import heroImg from './assets/hero_main.png'
import banner6 from './assets/banner6.png'
import milletImg from './assets/millet.png'
import phoneMockup from './assets/phone_mockup.png'
// Import Category Images
import catOils from './assets/cat_oils_transparent.png'
import catRice from './assets/cat_rice_transparent.png'
import catSpices from './assets/cat_spices_transparent.png'
import catFlour from './assets/cat_flour_transparent.png'
import catBranded from './assets/cat_branded_transparent.png'
// Import App Images
import appWholesaler from './assets/app_wholesaler.jpg'
import appLineman from './assets/app_lineman.jpg'
import appDelivery from './assets/app_delivery.jpg'
import PrivacyPolicy from './PrivacyPolicy'
import TermsConditions from './TermsConditions'
import ShippingPolicy from './ShippingPolicy'
import RefundPolicy from './RefundPolicy'


// --- SCROLL TO TOP HELPER ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- SHARED COMPONENTS ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use this to close menu and ensure we start at top
  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar-premium ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo-box">
          <img src={logo} alt="Ramesh Traders" className="nav-logo" />
        </Link>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <a href="/#about" onClick={handleNavClick}>About Us</a>
          <a href="/#products" onClick={handleNavClick}>Products</a>
          <a href="/#ecosystem" onClick={handleNavClick}>Digital Suite</a>
          <a href="/#contact-us" className="nav-cta" onClick={handleNavClick}>Download Apps</a>
        </div>
        <div className="nav-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer-premium">
    <div className="footer-top-grid">
      <div className="footer-brand-col">
        <div className="footer-logo-wrapper">
          <img src={logo} alt="Ramesh Traders" />
        </div>
        <p className="footer-intro-text">
          Your trusted wholesale partner for over 100 years, now powered by cutting-edge mobile technology.
        </p>
      </div>

      <div className="footer-nav-col">
        <h3>Quick Links</h3>
        <div className="footer-h-line"></div>
        <ul className="footer-nav-list">
          <li><Link to="/">Home</Link></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>
        </ul>
      </div>

      <div className="footer-nav-col">
        <h3>Our Apps</h3>
        <div className="footer-h-line"></div>
        <ul className="footer-nav-list">
          <li><a href="https://play.google.com/store/apps/details?id=com.ocean.ramesh_traders_wholesaler" target="_blank" rel="noopener noreferrer">Wholesaler App</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=com.ocean.ramesh_trader_lineman_app" target="_blank" rel="noopener noreferrer">Lineman App</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=com.ocean.ramesh_trader_deliveryman" target="_blank" rel="noopener noreferrer">Delivery App</a></li>
          <li><a href="#support">Support Center</a></li>
        </ul>
      </div>

      <div className="footer-nav-col contact-details-col">
        <h3>Contact Info</h3>
        <div className="footer-h-line"></div>
        <div className="footer-contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>COIMBATORE - 641001</span>
        </div>
        <div className="footer-contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>PH : 7550223510,11,12,13</span>
        </div>
        <div className="footer-contact-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Mon-Sun: 9 AM - 9 PM</span>
        </div>
      </div>
    </div>

    <div className="footer-legal-bar">
      <div className="legal-links">
        <Link to="/privacy">Privacy Policy</Link>
        <span className="footer-dot">•</span>
        <Link to="/terms">Terms & Conditions</Link>
        <span className="footer-dot">•</span>
        <Link to="/shipping">Shipping Policy</Link>
        <span className="footer-dot">•</span>
        <Link to="/refunds">Cancellation and Refunds</Link>
      </div>
    </div>

    <div className="footer-copyright-row">
      <p>© 2026 Ramesh Traders. All rights reserved. | Developed by <a href="#" className="dev-credit">Ocean Softwares</a></p>
    </div>
  </footer>
);

// --- HOME PAGE COMPONENTS ---
const StatCard = ({ icon, target, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-badge">
      <div className="stat-icon-box">{icon}</div>
      <div className="stat-info">
        <h3>{count}{suffix}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const slidesList = [
    {
      img: heroImg,
      title: (<>A Century of <span style={{ color: '#9c49d6' }}>Trust</span>,<br />Powered by Tech</>),
      subtitle: 'Redefining wholesale business with 103+ years of legacy and modern smart tools since 1923.',
    },
    {
      img: banner6,
      title: (<>Premium Quality <span style={{ color: '#9c49d6' }}>Products</span>,<br />Delivered Fast</>),
      subtitle: 'Sourcing the finest groceries, dry fruits, and essentials directly for your wholesale needs.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slidesList.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-wrapper" id="home">
      {slidesList.map((slide, idx) => (
        <div key={idx} className={`slider-slide ${idx === current ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.img})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-btns">
              <button className="btn-primary">Download App</button>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slidesList.map((_, idx) => (
          <button key={idx} className={`slider-dot ${idx === current ? 'active' : ''}`} onClick={() => setCurrent(idx)} />
        ))}
      </div>
    </div>
  );
};

// --- NEW CATEGORY CAROUSEL ---
const CategoryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const categories = [
    { name: "Cooking Oils", img: catOils },
    { name: "Rice & Grains", img: catRice },
    { name: "Rice & Grains", img: catRice },
    { name: "Spices", img: catSpices },
    { name: "Spices", img: catSpices },
    { name: "Wheat & Flour", img: catFlour },
    { name: "Wheat & Flour", img: catFlour },
    { name: "Branded Foods", img: catBranded }
  ];

  // Logic to show certain number of items per view
  // On desktop 5, tablet 3, mobile 2
  const [itemsPerView, setItemsPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setItemsPerView(2);
      else if (window.innerWidth <= 1024) setItemsPerView(3);
      else setItemsPerView(5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(categories.length / itemsPerView);

  const nextSlide = () => {
    if (categories.length <= itemsPerView) return;
    setCurrentSlide((prev) => (prev >= categories.length - itemsPerView ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (categories.length <= itemsPerView) return;
    setCurrentSlide((prev) => (prev <= 0 ? categories.length - itemsPerView : prev - 1));
  };

  // Auto-scroll loop
  useEffect(() => {
    if (categories.length <= itemsPerView) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [itemsPerView, categories.length]);

  return (
    <div className="cat-carousel-outer">
      <div className="cat-carousel-inner">
        <div 
          className="cat-carousel-track" 
          style={{ 
            transform: `translateX(-${(currentSlide * (100 / itemsPerView))}%)`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {categories.map((cat, i) => (
            <div 
              className="category-item-slide" 
              key={i} 
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <div className="category-img-circle">
                <img src={cat.img} alt={cat.name} />
              </div>
              <h4>{cat.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {categories.length > itemsPerView && (
        <>
          <button className="cat-nav-btn prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button className="cat-nav-btn next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div className="cat-carousel-indicator">
            {categories.slice(0, categories.length - itemsPerView + 1).map((_, i) => (
              <div 
                key={i} 
                className={`cat-dot ${currentSlide === i ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const LandingPage = () => (
  <main>
    <HeroBanner />

    <section className="category-section" id="products">
      <div className="category-header-main">
        <span className="cat-sub">Premium Selection</span>
        <h2 className="cat-main-title">Exquisite Product Categories</h2>
        <div className="cat-underline"></div>
      </div>
      <CategoryCarousel />
    </section>

    <section className="premium-about" id="about" style={{ backgroundImage: `url(${milletImg})` }}>
      <div className="about-overlay"></div>
      <div className="about-card-horizontal">
        <div className="about-card-content">
          <span className="section-tag-gold">Since 1923</span>
          <h2 className="section-title-premium">Established in 1923,<br />Serving with Integrity.</h2>
          <div className="title-underline"></div>
          <p className="premium-desc">
            Ramesh Trader has been a pioneer in the wholesale business offering quality products, fair pricing, and unmatched reliability. Today, we combine a century of experience with technology-driven tools to serve you better.
          </p>

          <div className="integrated-stats-row">
            <StatCard icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>} target={103} suffix="+" label="Years" />
            <StatCard icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ce1c2a" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>} target={10} suffix="K+" label="Clients" />
            <StatCard icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fb8c00" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6"></path></svg>} target={24} suffix="/7" label="Support" />
          </div>
          <button className="btn-gold-border">Read Our Story</button>
        </div>
      </div>
    </section>

    <section className="ecosystem-section" id="ecosystem">
      <div className="ecosystem-header">
         <span className="eco-badge">Digital Suite</span>
         <h2 className="eco-title">Our Wholesale Ecosystem</h2>
         <p className="eco-subtitle">Cutting-edge technology, powering a century of trust across Coimbatore.</p>
      </div>
      <div className="ecosystem-grid">
         {[
           { name: "Wholesaler App", img: appWholesaler },
           { name: "Lineman App", img: appLineman },
           { name: "Deliveryman App", img: appDelivery }
         ].map((app, i) => (
           <div className="eco-card" key={i}>
             <div className="eco-img-mockup">
               <img src={app.img} alt={app.name} />
             </div>
             <h3>{app.name}</h3>
             <p>Optimized digital tools for modern wholesale business fulfillment.</p>
             <button className="eco-btn">Download Now</button>
           </div>
         ))}
      </div>
    </section>

    <section className="app-red-section" id="apps">
      <div className="app-red-container">
        <div className="app-red-visual">
          <div className="app-glow-bg"></div>
          <img src={phoneMockup} alt="App Interface" className="app-mockup-img" />
        </div>
        <div className="app-red-text-area">
          <span className="app-red-label">Established 1923</span>
          <h2 className="app-red-heading">100+ Years of Quality,<br />Now on Your Phone</h2>
          <p className="app-red-subheading">Your trusted wholesale partner for over 100 years, now powered by cutting-edge mobile technology.</p>
          <div className="app-red-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" />
          </div>
        </div>
      </div>
    </section>

    <section className="contact-premium-section" id="contact-us">
      <div className="contact-premium-header">
        <span className="contact-badge-glow">Contact Us</span>
        <h2 className="contact-main-title">Get In Touch With Us</h2>
      </div>
      <div className="contact-split-layout">
        {/* Map Side */}
        <div className="contact-map-card">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.398638927943!2d76.96025!3d11.00065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ab7b587131%3A0xe541940989f66870!2sRangai%20Gowder%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711970000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ramesh Traders Store Location"
          ></iframe>
        </div>

        {/* Info Side */}
        <div className="contact-info-card">
          <div className="info-item">
            <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div>
              <h3>Visit Our Store</h3>
              <p>442, A.V.G. COMPLEX, RANGAI GOWDER STREET,<br />COIMBATORE - 641001, TAMIL NADU</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div>
              <h3>Call Support</h3>
              <p>+91 75502 23510 / 11<br />+91 75502 23512 / 13</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2454a8" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            <div>
              <h3>Operational Hours</h3>
              <p>Mon – Sun: 9:00 AM – 9:00 PM IST<br />(Open 7 Days a week)</p>
            </div>
          </div>
          
          <button className="btn-primary" style={{ marginTop: '20px', width: '100%' }}>Get Directions on Maps</button>
        </div>
      </div>
    </section>
  </main>
);

const AppContent = () => {
  const location = useLocation();
  const isPolicyPage = ['/privacy', '/terms', '/shipping', '/refunds'].includes(location.pathname);

  return (
    <div className="app-outer">
      <ScrollToTop />
      {!isPolicyPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/refunds" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
