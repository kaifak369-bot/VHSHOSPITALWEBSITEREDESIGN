import React from 'react';
import { FileText, Clock, Shield, AlertCircle, Download } from 'lucide-react';

const PatientInfo = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Information</h1>

        <div className="space-y-6">
          {/* Admission */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Admission Procedure</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We strive to make your admission process as smooth as possible. Please bring your ID proof, insurance card, and any previous medical records.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                  <li>Report to the admission desk at least 30 minutes before scheduled time.</li>
                  <li>Complete the registration forms.</li>
                  <li>Pay the initial deposit if applicable.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Visiting Hours</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">General Wards</h3>
                    <p className="text-gray-600 text-sm">Morning: 10:00 AM - 11:00 AM</p>
                    <p className="text-gray-600 text-sm">Evening: 5:00 PM - 7:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">ICU / CCU</h3>
                    <p className="text-gray-600 text-sm">Morning: 11:00 AM - 12:00 PM</p>
                    <p className="text-gray-600 text-sm">Evening: 6:00 PM - 7:00 PM</p>
                    <p className="text-xs text-red-500 mt-1">*Only one attendant allowed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Insurance & TPA</h2>
                <p className="text-gray-600 mb-4">
                  We accept all major insurance providers and Third Party Administrators (TPA). Please contact our insurance desk for cashless hospitalization queries.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Star Health</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">HDFC Ergo</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">ICICI Lombard</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Max Bupa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-lg shrink-0">
                <Download size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Download Forms</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium">
                    <FileText size={16} /> Patient Registration Form
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium">
                    <FileText size={16} /> Insurance Claim Form
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium">
                    <FileText size={16} /> Feedback Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
