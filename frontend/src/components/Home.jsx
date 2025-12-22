import React from 'react';
import { Phone, MapPin, Smartphone, Battery, Plug, Wrench, Star, Clock, Award, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { businessData, services, whyChooseUs } from '../mock';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${businessData.phone}`;
  };

  const handleDirectionsClick = () => {
    const address = encodeURIComponent(businessData.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const icons = {
      Smartphone: Smartphone,
      Battery: Battery,
      Plug: Plug,
      Wrench: Wrench,
      Star: Star,
      MapPin: MapPin,
      Clock: Clock,
      Award: Award
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-12 h-12" /> : null;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold">{businessData.name}</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-cyan-400 transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">
              Contact
            </button>
          </nav>
          <Button onClick={handleCallClick} className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-lg font-semibold">{businessData.rating}</span>
              <span className="text-gray-400">({businessData.reviewCount} reviews)</span>
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#D4AF37]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {businessData.tagline}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Professional mobile phone repairs in Keynsham. Trusted by hundreds of customers with fast, reliable service.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              onClick={handleCallClick} 
              size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {businessData.phone}
            </Button>
            <Button 
              onClick={handleDirectionsClick} 
              size="lg" 
              variant="outline" 
              className="border-gray-600 hover:bg-gray-800 text-white text-lg px-8 py-6"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </motion.div>
          <motion.button 
            onClick={() => scrollToSection('services')} 
            className="mt-16 inline-flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-sm mb-2">Explore Our Services</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* About Section with Shop Photo */}
      <section className="py-20 px-6 bg-[#0f0f11]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6 text-[#D4AF37]">Your Local Phone Repair Experts</h2>
              <p className="text-gray-300 text-lg mb-6">
                Located in the heart of Keynsham on Temple Street, Fix-A-Fone has been serving the community with professional mobile phone repair services. We also offer vape products, accessories, and buy & sell refurbished phones.
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-cyan-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">All phone models repaired - iPhone, Samsung, Huawei & more</p>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-cyan-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Trade-in your phone for cash or upgrade</p>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-cyan-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Vape kits and accessories available</p>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_phonedoc-keynsham/artifacts/95a9436d_WhatsApp%20Image%202023-02-06%20at%209.29.49%20AM.jpeg"
                  alt="Fix-A-Fone Keynsham Shop Front"
                  className="rounded-lg shadow-2xl w-full h-auto border border-gray-800"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#111113]">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">Our Services</h2>
              <p className="text-gray-400 text-lg">Expert repairs for all your mobile phone needs</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-600 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-20 h-20 bg-cyan-600/10 rounded-lg mb-4 text-cyan-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {getIcon(service.icon)}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-[#D4AF37]">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Our Work */}
      <section className="py-20 px-6 bg-[#0f0f11]">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">Professional Repairs</h2>
              <p className="text-gray-400 text-lg">Quality workmanship on every repair</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "https://customer-assets.emergentagent.com/job_phonedoc-keynsham/artifacts/ytridwge_2023-05-05.jpg",
                title: "Expert Disassembly",
                desc: "Careful component-level repairs"
              },
              {
                src: "https://customer-assets.emergentagent.com/job_phonedoc-keynsham/artifacts/vbogs52z_2023-08-18.jpg",
                title: "Damage Assessment",
                desc: "We repair all types of damage"
              },
              {
                src: "https://customer-assets.emergentagent.com/job_phonedoc-keynsham/artifacts/kulmhe1b_2024-10-14.jpg",
                title: "Precision Repairs",
                desc: "Advanced diagnostic tools"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-cyan-600 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.img 
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">Why Choose Us?</h2>
              <p className="text-gray-400 text-lg">Trusted by the Keynsham community</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-gray-900/30 border-gray-800 hover:border-cyan-600 transition-all duration-300">
                  <CardContent className="p-8 flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-cyan-600/10 rounded-lg flex items-center justify-center text-cyan-400">
                        {getIcon(reason.icon)}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-[#D4AF37]">{reason.title}</h3>
                      <p className="text-gray-400">{reason.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#111113]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">Visit Us Today</h2>
            <p className="text-gray-400 text-lg">Find us in the heart of Keynsham</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.367982!2d-2.4976!3d51.4144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd5455e44c7%3A0x5c5e3b5e5b5e5b5e!2s2a%20Temple%20St%2C%20Keynsham%2C%20Bristol%20BS31%201EG!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fix-A-Fone Keynsham Location"
              />
            </div>
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#D4AF37]">Phone</h3>
                      <a href={`tel:${businessData.phone}`} className="text-cyan-400 hover:text-cyan-300 text-xl">
                        {businessData.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#D4AF37]">Address</h3>
                      <p className="text-gray-300">{businessData.address}</p>
                      <Button 
                        onClick={handleDirectionsClick} 
                        variant="link" 
                        className="text-cyan-400 hover:text-cyan-300 px-0 mt-2"
                      >
                        Get Directions →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#D4AF37]">Opening Hours</h3>
                      <p className="text-gray-300">{businessData.hours.weekdays}</p>
                      <p className="text-gray-300">Sunday: {businessData.hours.sunday}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Smartphone className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold">{businessData.name}</span>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">{businessData.rating} Rating</span>
                <span className="text-gray-400">• {businessData.reviewCount} Reviews</span>
              </div>
              <p className="text-gray-400 text-sm">© 2025 Fix-A-Fone Keynsham. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;