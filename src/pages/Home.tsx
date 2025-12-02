import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Activity, Users, Clock } from 'lucide-react';
import { departments, doctors } from '../data/mockData';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000" 
                alt="Hospital Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Healthcare <br />
              <span className="text-blue-400">For Your Family</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              VHS Hospital provides world-class medical services with state-of-the-art facilities and compassionate care. Your health is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link 
                to="/doctors" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Find a Doctor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold">Emergency Cases</h3>
            </div>
            <p className="text-blue-100 mb-4">
              24/7 emergency support with rapid response teams and advanced life support ambulances.
            </p>
            <p className="text-2xl font-bold">+1 (555) 123-4567</p>
          </div>

          <div className="bg-teal-600 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold">Doctors Timetable</h3>
            </div>
            <p className="text-teal-100 mb-4">
              Qualified doctors available for consultation. Check the schedule for your preferred specialist.
            </p>
            <Link to="/doctors" className="inline-flex items-center gap-2 font-semibold hover:text-teal-200">
              View Schedule <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-indigo-600 p-8 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-lg">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Opening Hours</h3>
            </div>
            <ul className="space-y-2 text-indigo-100">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 - 21:00</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>9:00 - 14:00</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of specialized medical services to cater to all your health needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.slice(0, 4).map((dept) => (
              <div key={dept.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <dept.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-500 mb-4 text-sm">{dept.description}</p>
                <Link to="/departments" className="text-blue-600 font-medium text-sm hover:underline">Learn More</Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/departments" className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View All Departments <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialists</h2>
              <p className="text-gray-600 max-w-2xl">
                Meet our team of experienced doctors and consultants dedicated to your well-being.
              </p>
            </div>
            <Link to="/doctors" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
              View All Doctors <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.slice(0, 4).map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-sm font-semibold mb-1">{doc.department}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{doc.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{doc.qualification}</p>
                  <Link to="/contact" className="block w-full py-2 text-center border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Emergency Care?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our emergency department is open 24/7. If you are experiencing a medical emergency, please call us immediately or visit our hospital.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+15551234567" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
              <Phone size={24} />
              Call +1 (555) 123-4567
            </a>
            <Link to="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
