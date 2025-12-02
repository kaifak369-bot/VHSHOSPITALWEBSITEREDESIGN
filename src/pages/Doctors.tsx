import React, { useState } from 'react';
import { Search, MapPin, Clock, Award } from 'lucide-react';
import { doctors, departments } from '../data/mockData';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Find a Consultant</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search doctor by name..." 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-1/3">
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="All">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.name}>{dept.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
              <div className="flex p-6 gap-4">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-1">{doc.department}</p>
                  <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                    <Award size={12} />
                    {doc.qualification}
                  </p>
                  <p className="text-gray-500 text-xs">Experience: {doc.experience}</p>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Clock size={16} className="text-teal-600" />
                  <span>{doc.timings}</span>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full py-2 text-center bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
