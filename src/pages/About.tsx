import React from 'react';
import { CheckCircle, Award, Users, History } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About VHS Hospital</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A legacy of healing, a future of hope. Learn about our journey, our mission, and the people behind our success.
          </p>
        </div>
      </div>

      {/* History & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
              <History size={20} />
              <span>Our History</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving the Community Since 1985</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              VHS Hospital was founded with a simple yet powerful vision: to provide accessible, high-quality healthcare to everyone. Starting as a small clinic, we have grown into a multi-specialty hospital equipped with advanced medical technology and a team of dedicated professionals.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Over the decades, we have achieved numerous milestones in medical excellence, patient care, and community service. Our commitment to ethical medical practices and patient-centric care remains unwavering.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-gray-700 text-sm">To provide compassionate, affordable, and high-quality healthcare services to all sections of society.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-teal-900 mb-2">Our Vision</h3>
                <p className="text-gray-700 text-sm">To be a trusted leader in healthcare, known for clinical excellence and patient satisfaction.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Hospital Building" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-blue-600">35+</div>
                <div className="text-sm text-gray-600 font-medium">Years of <br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management & Accreditation */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership & Accreditation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by experienced leaders and recognized by national standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Director" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Alan Grant</h3>
              <p className="text-blue-600 text-sm mb-4">Medical Director</p>
              <p className="text-gray-500 text-sm">Leading our medical teams with over 25 years of experience in healthcare administration.</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sarah Connor</h3>
              <p className="text-blue-600 text-sm mb-4">Chief Executive Officer</p>
              <p className="text-gray-500 text-sm">Driving operational excellence and strategic growth for VHS Hospital.</p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" alt="Head of Surgery" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dr. Ian Malcolm</h3>
              <p className="text-blue-600 text-sm mb-4">Head of Surgery</p>
              <p className="text-gray-500 text-sm">Renowned surgeon specializing in complex procedures and patient safety protocols.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accredited & Certified</h3>
                <p className="text-gray-600 mb-6">
                  We adhere to the highest standards of medical care and safety. Our hospital is accredited by major national and international healthcare organizations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>NABH Accredited Hospital</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>ISO 9001:2015 Certified</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-green-500" />
                    <span>NABL Accredited Laboratories</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
                 {/* Placeholders for logos */}
                 <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 border-2 border-gray-200">NABH</div>
                 <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 border-2 border-gray-200">ISO</div>
                 <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 border-2 border-gray-200">NABL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
