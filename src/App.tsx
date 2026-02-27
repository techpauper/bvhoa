import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Users, Home as HomeIcon, TreePine, Info } from 'lucide-react';
import { SUBDIVISIONS, DIRECTORS } from './constants';
import { Subdivision } from './types';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Directors', path: '/directors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-olive/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-brand-sage" />
              <span className="text-2xl font-display font-bold tracking-tight text-brand-olive">Bloom Village</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-brand-sage ${
                  location.pathname === link.path ? 'text-brand-sage' : 'text-brand-olive/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-semibold text-brand-olive/70 hover:text-brand-sage flex items-center">
                Subdivisions <ChevronRight className="ml-1 h-4 w-4 rotate-90" />
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-brand-olive/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {SUBDIVISIONS.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/subdivision/${sub.id}`}
                    className="block px-5 py-3 text-sm font-medium text-brand-olive hover:bg-brand-cream hover:text-brand-sage first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-olive p-2 bg-brand-cream rounded-lg">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-brand-olive/10 shadow-xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-brand-olive hover:bg-brand-cream rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 pb-2 border-t border-brand-olive/5 mt-4">
                <p className="px-4 text-xs font-bold text-brand-olive/30 uppercase tracking-widest mb-2">Subdivisions</p>
                {SUBDIVISIONS.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/subdivision/${sub.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-brand-olive hover:bg-brand-cream rounded-xl"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-olive text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-8">
            <TreePine className="h-8 w-8 text-brand-sage" />
            <span className="text-2xl font-display font-bold">Bloom Village</span>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-md">
            A modern community designed for connection, comfort, and sustainable living. Experience the best of townhome living in Bloom Village.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-wider">Explore</h4>
          <ul className="space-y-4 text-base text-white/50">
            <li><Link to="/" className="hover:text-brand-sage transition-colors">Home</Link></li>
            <li><Link to="/directors" className="hover:text-brand-sage transition-colors">Board of Directors</Link></li>
            <li><Link to="/contact" className="hover:text-brand-sage transition-colors">Request Information</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-4 text-base text-white/50">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-0.5 text-brand-sage" />
              <span>123 Bloom Way, Blossom City, ST 12345</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-brand-sage" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-brand-sage" />
              <span>info@bloomvillage.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-white/5 text-center text-sm text-white/30">
        &copy; {new Date().getFullYear()} Bloom Village HOA. Built for the community.
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
            alt="Modern Townhome Community"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-olive/90 via-brand-olive/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-sage/20 backdrop-blur-md border border-brand-sage/30 rounded-full text-brand-sage text-sm font-bold uppercase tracking-widest mb-8">
              Welcome to the Future of Community
            </div>
            <h1 className="text-7xl md:text-9xl font-display font-extrabold mb-8 leading-[0.9] tracking-tighter">
              BLOOM <br /><span className="text-brand-sage">VILLAGE</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/80 mb-12 leading-relaxed max-w-xl">
              Modern townhome living redefined. Discover five distinct subdivisions crafted for the contemporary lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-brand-sage hover:bg-white hover:text-brand-olive text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-brand-sage/20"
              >
                Get Started
              </Link>
              <Link
                to="/directors"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold transition-all"
              >
                Meet the Board
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subdivisions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-olive mb-6 tracking-tight">Our Neighborhoods</h2>
            <p className="text-brand-earth text-xl">Five unique subdivisions, one unified community. Find the perfect fit for your lifestyle.</p>
          </div>
          <div className="flex space-x-2">
            <div className="h-1 w-12 bg-brand-sage rounded-full"></div>
            <div className="h-1 w-4 bg-brand-olive/10 rounded-full"></div>
            <div className="h-1 w-4 bg-brand-olive/10 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SUBDIVISIONS.map((sub, index) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-olive/5 hover:shadow-brand-sage/10 transition-all border border-brand-olive/5"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                  <HomeIcon className="h-5 w-5 text-brand-sage" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-display font-bold text-brand-olive mb-4 tracking-tight">{sub.name}</h3>
                <p className="text-brand-earth text-base mb-8 leading-relaxed opacity-80">{sub.description}</p>
                <Link
                  to={`/subdivision/${sub.id}`}
                  className="inline-flex items-center justify-center w-full bg-brand-cream hover:bg-brand-sage hover:text-white text-brand-olive font-bold py-4 rounded-2xl transition-all"
                >
                  View Subdivision
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-olive rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-sage/10 skew-x-12 translate-x-1/4"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-8xl font-display font-black text-brand-sage mb-4">05</div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">Subdivisions</h4>
              <p className="text-white/50 text-lg">Expertly planned neighborhoods with distinct architectural styles.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-8xl font-display font-black text-brand-sage mb-4">100%</div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">Community</h4>
              <p className="text-white/50 text-lg">Dedicated to fostering a safe and connected environment for all.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-8xl font-display font-black text-brand-sage mb-4">24/7</div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">Support</h4>
              <p className="text-white/50 text-lg">Our board is always available to assist with resident needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SubdivisionPage = () => {
  const { id } = useParams<{ id: string }>();
  const sub = SUBDIVISIONS.find(s => s.id === id);

  if (!sub) return <div className="py-24 text-center">Subdivision not found.</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-32"
    >
      <div className="h-[70vh] relative overflow-hidden">
        <img
          src={sub.image}
          alt={sub.name}
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-olive/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <Link to="/" className="inline-flex items-center text-brand-sage font-bold mb-8 hover:translate-x-[-4px] transition-transform">
                <ChevronRight className="h-5 w-5 rotate-180 mr-2" /> Back to Overview
              </Link>
              <h1 className="text-7xl md:text-9xl font-display font-black text-white mb-6 tracking-tighter uppercase">{sub.name}</h1>
              <p className="text-2xl text-white/80 font-medium max-w-xl leading-relaxed">Experience modern living in the heart of Bloom Village.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-display font-bold text-brand-olive mb-8 tracking-tight">Neighborhood Profile</h2>
              <p className="text-xl text-brand-earth leading-relaxed opacity-90">
                {sub.description} Bloom Village is proud to feature {sub.name} as one of our cornerstone subdivisions. 
                This area was carefully planned to integrate with the natural landscape while providing modern amenities 
                and a safe, welcoming environment for all residents.
              </p>
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-brand-olive/5 border border-brand-olive/5">
                <h4 className="font-display font-bold text-2xl text-brand-olive mb-8 tracking-tight">Key Features</h4>
                <ul className="space-y-5">
                  {sub.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-brand-earth font-medium">
                      <div className="h-2 w-2 bg-brand-sage rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-sage text-white p-12 rounded-[3rem] shadow-2xl shadow-brand-sage/20">
                <h4 className="font-display font-bold text-2xl mb-8 tracking-tight">Resident Portal</h4>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                  Access documents, pay dues, and stay updated on neighborhood specific news.
                </p>
                <Link to="/contact" className="inline-block bg-white text-brand-olive px-8 py-4 rounded-2xl font-bold hover:bg-brand-olive hover:text-white transition-all">
                  Access Documents
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="bg-brand-olive p-12 rounded-[3rem] shadow-2xl sticky top-32">
              <h3 className="font-display font-bold text-3xl text-white mb-8 tracking-tight">Interested?</h3>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                Join our growing community. Contact the board for availability and guidelines.
              </p>
              <Link
                to="/contact"
                className="block w-full bg-brand-sage text-white text-center py-5 rounded-2xl font-bold hover:bg-white hover:text-brand-olive transition-all shadow-xl shadow-brand-sage/20"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DirectorsPage = () => {
  return (
    <div className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-24">
        <h1 className="text-6xl md:text-8xl font-display font-black text-brand-olive mb-8 tracking-tighter uppercase">The Board</h1>
        <p className="text-xl text-brand-earth leading-relaxed">
          Meet the visionaries and volunteers dedicated to making Bloom Village the premier modern community in the region.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {DIRECTORS.map((director, index) => (
          <motion.div
            key={director.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-olive/5 border border-brand-olive/5"
          >
            <div className="h-96 overflow-hidden relative">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-olive/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-10">
              <div className="mb-6">
                <h3 className="text-3xl font-display font-bold text-brand-olive tracking-tight">{director.name}</h3>
                <p className="text-brand-sage font-bold text-sm uppercase tracking-widest mt-1">{director.role}</p>
              </div>
              <p className="text-brand-earth text-base mb-10 leading-relaxed opacity-80">
                {director.bio}
              </p>
              <div className="pt-8 border-t border-brand-olive/5">
                <a
                  href={`mailto:${director.email}`}
                  className="inline-flex items-center text-brand-olive hover:text-brand-sage transition-colors text-base font-bold"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  Send Message
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 bg-brand-sage rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-olive/10"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase">Join the Leadership</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Help shape the future of Bloom Village. We are always looking for passionate residents to join our committees and board.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-olive text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-brand-olive transition-all shadow-2xl shadow-brand-olive/20"
          >
            Apply for the Board
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div>
          <h1 className="text-6xl md:text-8xl font-display font-black text-brand-olive mb-10 tracking-tighter uppercase">Get in <br /><span className="text-brand-sage">Touch</span></h1>
          <p className="text-xl text-brand-earth mb-16 leading-relaxed opacity-80">
            Have questions about our community? Whether you're a resident or a prospective homeowner, we're here to help.
          </p>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="bg-brand-sage/10 p-4 rounded-2xl">
                <MapPin className="h-8 w-8 text-brand-sage" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-brand-olive mb-2">Location</h4>
                <p className="text-brand-earth text-lg">123 Bloom Way, Blossom City, ST 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-brand-sage/10 p-4 rounded-2xl">
                <Phone className="h-8 w-8 text-brand-sage" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-brand-olive mb-2">Phone</h4>
                <p className="text-brand-earth text-lg">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-brand-sage/10 p-4 rounded-2xl">
                <Mail className="h-8 w-8 text-brand-sage" />
              </div>
              <div>
                <h4 className="font-display font-bold text-2xl text-brand-olive mb-2">Email</h4>
                <p className="text-brand-earth text-lg">info@bloomvillage.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-brand-olive/5">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24"
            >
              <div className="bg-brand-sage/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10">
                <Mail className="h-10 w-10 text-brand-sage" />
              </div>
              <h2 className="text-4xl font-display font-bold text-brand-olive mb-6 tracking-tight">Message Sent</h2>
              <p className="text-brand-earth text-lg mb-12 opacity-70">We've received your request and will get back to you within 48 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-brand-sage font-bold text-lg hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-olive/40 ml-1">First Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-brand-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-sage/50 transition-all font-medium"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-olive/40 ml-1">Last Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-brand-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-sage/50 transition-all font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-olive/40 ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full bg-brand-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-sage/50 transition-all font-medium"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-olive/40 ml-1">Subdivision</label>
                <select className="w-full bg-brand-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-sage/50 transition-all font-medium appearance-none">
                  <option>General Inquiry</option>
                  {SUBDIVISIONS.map(sub => (
                    <option key={sub.id}>{sub.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-olive/40 ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-brand-cream border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-sage/50 transition-all font-medium resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-olive text-white py-6 rounded-2xl font-bold text-lg hover:bg-brand-sage transition-all transform active:scale-[0.98] shadow-2xl shadow-brand-olive/20"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/subdivision/:id" element={<SubdivisionPage />} />
              <Route path="/directors" element={<DirectorsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
