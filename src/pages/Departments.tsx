import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { departments } from '../data/mockData';

const Departments = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Clinical Departments</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Our hospital is organized into specialized departments, each staffed by experts in their respective fields.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <dept.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dept.description} We provide advanced diagnostic and treatment services for all conditions related to {dept.name.toLowerCase()}.
                </p>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Services Include:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Outpatient Consultation</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Inpatient Care</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Specialized Procedures</span>
                    </li>
                  </ul>
                  <Link 
                    to="/doctors" 
                    className="block w-full py-3 text-center bg-gray-50 hover:bg-blue-50 text-blue-700 font-medium rounded-lg transition-colors"
                  >
                    Find a Doctor
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
