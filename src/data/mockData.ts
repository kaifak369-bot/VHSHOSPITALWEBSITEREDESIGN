import { Stethoscope, Heart, Baby, Bone, Brain, Activity, Eye, Scissors, Pill, Ambulance, Microscope, UserPlus } from 'lucide-react';

export const departments = [
  { id: 'gen-med', name: 'General Medicine', icon: Stethoscope, description: 'Comprehensive care for adult diseases.' },
  { id: 'ortho', name: 'Orthopedics', icon: Bone, description: 'Care for bones, joints, ligaments, tendons, and muscles.' },
  { id: 'gynae', name: 'Gynecology', icon: UserPlus, description: 'Health of the female reproductive systems.' },
  { id: 'peds', name: 'Pediatrics', icon: Baby, description: 'Medical care of infants, children, and adolescents.' },
  { id: 'cardio', name: 'Cardiology', icon: Heart, description: 'Diagnosis and treatment of heart conditions.' },
  { id: 'ent', name: 'ENT', icon: Activity, description: 'Ear, Nose, and Throat disorders.' },
  { id: 'derma', name: 'Dermatology', icon: Activity, description: 'Skin, hair, and nail conditions.' }, // Reusing Activity as placeholder if specific icon not avail in basic set
  { id: 'dental', name: 'Dental', icon: Scissors, description: 'Oral health and hygiene.' },
  { id: 'physio', name: 'Physiotherapy', icon: Activity, description: 'Physical rehabilitation and therapy.' },
  { id: 'diag', name: 'Diagnostics', icon: Microscope, description: 'Advanced laboratory and imaging services.' },
];

export const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    qualification: 'MBBS, MD (Cardiology)',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Sat: 10:00 AM - 2:00 PM'
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    department: 'Orthopedics',
    qualification: 'MBBS, MS (Ortho)',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Fri: 9:00 AM - 1:00 PM'
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    department: 'Pediatrics',
    qualification: 'MBBS, DCH',
    experience: '8 Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Sat: 4:00 PM - 8:00 PM'
  },
  {
    id: 4,
    name: 'Dr. Robert Brown',
    department: 'General Medicine',
    qualification: 'MBBS, MD',
    experience: '20 Years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    timings: 'Mon-Sat: 9:00 AM - 5:00 PM'
  }
];

export const services = [
  { title: '24/7 Emergency', icon: Ambulance, desc: 'Round-the-clock emergency care with advanced life support systems.' },
  { title: 'ICU & CCU', icon: Activity, desc: 'State-of-the-art intensive care units for critical patients.' },
  { title: 'Pharmacy', icon: Pill, desc: 'In-house pharmacy open 24/7 for all your medication needs.' },
  { title: 'Laboratory', icon: Microscope, desc: 'Advanced diagnostic lab services with accurate and quick results.' },
  { title: 'Operation Theatre', icon: Scissors, desc: 'Modular operation theatres equipped with the latest technology.' },
  { title: 'Ambulance', icon: Ambulance, desc: 'Fully equipped ACLS ambulances for safe patient transport.' },
];
