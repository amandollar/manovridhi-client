'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';

interface Counsellor {
  _id: string;
  name: string;
  email: string;
  portfolio: string;
  degree: string;
  isVerified: boolean;
  createdAt: string;
}

interface BookingData {
  counsellorId: string;
  date: string;
  time: string;
  duration: number;
  sessionType: 'video' | 'audio' | 'chat' | 'in-person';
  notes?: string;
}

export default function ConnectPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [counsellors, setCounsellors] = useState<Counsellor[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedCounsellor, setSelectedCounsellor] = useState<Counsellor | null>(null);
  const [bookingData, setBookingData] = useState<BookingData>({
    counsellorId: '',
    date: '',
    time: '',
    duration: 60,
    sessionType: 'video',
    notes: ''
  });
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [bookingLoading, setBookingLoading] = useState(false);
  const { isAuthenticated, user, getValidToken } = useAuth();

  const categories = [
    { id: 'all', name: 'All Counsellors', count: counsellors.length },
    { id: 'anxiety', name: 'Anxiety & Depression', count: counsellors.filter(c => c.portfolio.toLowerCase().includes('anxiety')).length },
    { id: 'trauma', name: 'Trauma & PTSD', count: counsellors.filter(c => c.portfolio.toLowerCase().includes('trauma')).length },
    { id: 'relationships', name: 'Relationships', count: counsellors.filter(c => c.portfolio.toLowerCase().includes('relationship')).length },
    { id: 'addiction', name: 'Addiction Recovery', count: counsellors.filter(c => c.portfolio.toLowerCase().includes('addiction')).length },
  ];

  // Fetch counsellors from API
  useEffect(() => {
    fetchCounsellors();
  }, []);

  const fetchCounsellors = async () => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/counsellors/verified`;
      console.log('Fetching counsellors from:', apiUrl);
      
      const response = await fetch(apiUrl);
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('API response data:', data);
      
      if (data.counsellors) {
        console.log('Counsellors found:', data.counsellors?.length || 0);
        setCounsellors(data.counsellors || []);
      } else {
        console.error('No counsellors in response:', data);
      }
    } catch (error) {
      console.error('Error fetching counsellors:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableTimeSlots = async (counsellorId: string, date: string) => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/appointments/time-slots/available?counsellorId=${counsellorId}&date=${date}`;
      console.log('Fetching time slots from:', apiUrl);
      
      const response = await fetch(apiUrl);
      console.log('Time slots response status:', response.status);
      
      const data = await response.json();
      console.log('Time slots API response:', data);
      
      if (data.success) {
        console.log('Time slots found:', data.data.timeSlots?.length || 0);
        setAvailableTimeSlots(data.data.timeSlots || []);
      } else {
        console.error('Time slots API returned success: false', data);
        console.error('Error message:', data.message);
        console.error('Full response:', response.status, response.statusText);
        setAvailableTimeSlots([]);
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
      setAvailableTimeSlots([]);
    }
  };

  const handleBookSession = (counsellor: Counsellor) => {
    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    
    setSelectedCounsellor(counsellor);
    setBookingData({
      ...bookingData,
      counsellorId: counsellor._id
    });
    setShowBookingModal(true);
  };

  const handleDateChange = (date: string) => {
    setBookingData({ ...bookingData, date, time: '' });
    if (selectedCounsellor) {
      console.log('Date changed, fetching time slots for:', selectedCounsellor._id, date);
      fetchAvailableTimeSlots(selectedCounsellor._id, date);
    } else {
      console.log('No selected counsellor, cannot fetch time slots');
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated || !user) {
      alert('Please log in to book an appointment.');
      return;
    }

    setBookingLoading(true);
    try {
      const token = getValidToken();
      if (!token) {
        alert('Your session has expired. Please log in again.');
        return;
      }

      console.log('Booking appointment with data:', bookingData);
      console.log('Using valid token');
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...bookingData,
          counsellor: bookingData.counsellorId // Map counsellorId to counsellor
        })
      });

      console.log('Appointment booking response status:', response.status);
      const data = await response.json();
      console.log('Appointment booking response data:', data);

      if (data.success) {
        alert('Appointment booked successfully! The counsellor will review and approve your request.');
        setShowBookingModal(false);
        setBookingData({
          counsellorId: '',
          date: '',
          time: '',
          duration: 60,
          sessionType: 'video',
          notes: ''
        });
      } else {
        console.error('Appointment booking failed:', data);
        if (data.message && data.message.includes('token')) {
          alert('Your session has expired. Please log in again.');
        } else {
          alert(`Failed to book appointment: ${data.message || 'Please try again.'}`);
        }
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  const filteredCounsellors = counsellors.filter(counsellor => {
    const matchesSearch = counsellor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         counsellor.portfolio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           counsellor.portfolio.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading counsellors...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Professional Counsellors
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Connect with
              <span className="block font-medium text-emerald-600">Counsellors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-8">
              Find the right mental health professional for your needs. Our verified counsellors are here to support you on your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-sm text-gray-500">
                <span className="font-medium text-emerald-600">{counsellors.length}</span> verified counsellors available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              Find Your Counsellor
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Search & Filter
              <span className="font-medium text-emerald-600"> Counsellors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Use our search and filter tools to find the perfect counsellor for your needs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search counsellors by name or specialization..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-80">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counsellors Grid Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Professionals
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Available
              <span className="font-medium text-emerald-600"> Counsellors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Connect with licensed mental health professionals who are ready to support you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCounsellors.map((counsellor) => (
              <div key={counsellor._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold text-lg">
                        {counsellor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{counsellor.name}</h3>
                      <p className="text-emerald-600 font-medium text-sm mb-1">{counsellor.portfolio}</p>
                      <p className="text-sm text-gray-500">{counsellor.degree}</p>
                      {counsellor.isVerified && (
                        <div className="flex items-center mt-1">
                          <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-green-600 font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                    Professional counsellor specializing in {counsellor.portfolio.toLowerCase()}. 
                    Available for online and in-person sessions.
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">4.8</span>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-100 text-green-800">
                      Available
                    </span>
                  </div>

                  {isAuthenticated ? (
                    <button 
                      onClick={() => handleBookSession(counsellor)}
                      className="w-full bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Book Session
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-3 font-light">Sign in to book a session</p>
                      <Link 
                        href="/login"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors"
                      >
                        Sign in
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Loading counsellors...</h3>
              <p className="text-gray-600 font-light">Please wait while we fetch available counsellors.</p>
            </div>
          ) : filteredCounsellors.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {counsellors.length === 0 ? 'No counsellors available' : 'No counsellors found'}
              </h3>
              <p className="text-gray-600 font-light">
                {counsellors.length === 0 
                  ? 'There are currently no verified counsellors available. Please check back later.' 
                  : 'Try adjusting your search or filter criteria.'
                }
              </p>
              {counsellors.length === 0 && (
                <div className="mt-4 text-sm text-gray-500">
                  <p>Debug info: Total counsellors fetched: {counsellors.length}</p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Manovridhi</h3>
            <p className="text-gray-400 text-sm">&copy; 2024 Manovridhi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingModal && selectedCounsellor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-slate-800">Book Session</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6 p-4 bg-emerald-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">{selectedCounsellor.name}</h4>
                <p className="text-sm text-emerald-600">{selectedCounsellor.portfolio}</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleDateChange(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Time
                  </label>
                  <select
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                    required
                    disabled={!bookingData.date}
                  >
                    <option value="">Select time slot</option>
                    {availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {!bookingData.date && (
                    <p className="text-sm text-slate-600 mt-1">Please select a date first</p>
                  )}
                  {bookingData.date && availableTimeSlots.length === 0 && (
                    <p className="text-sm text-slate-600 mt-1">No available time slots for this date</p>
                  )}
                  {bookingData.date && availableTimeSlots.length > 0 && (
                    <p className="text-sm text-emerald-600 mt-1">{availableTimeSlots.length} time slots available</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Session Type
                  </label>
                  <select
                    value={bookingData.sessionType}
                        onChange={(e) => setBookingData({ ...bookingData, sessionType: e.target.value as 'video' | 'audio' | 'chat' | 'in-person' })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                  >
                    <option value="video">Video Call</option>
                    <option value="audio">Audio Call</option>
                    <option value="chat">Chat Session</option>
                    <option value="in-person">In-Person</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Duration (minutes)
                  </label>
                  <select
                    value={bookingData.duration}
                    onChange={(e) => setBookingData({ ...bookingData, duration: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                  >
                    <option value={30}>30 minutes</option>
                    <option value={60}>60 minutes</option>
                    <option value={90}>90 minutes</option>
                    <option value={120}>120 minutes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Notes (optional)
                  </label>
                  <textarea
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                    placeholder="Any specific concerns or topics you'd like to discuss..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                    rows={3}
                    maxLength={500}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1 px-4 py-3 text-slate-700 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={bookingLoading || !bookingData.time}
                    className="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {bookingLoading ? 'Booking...' : 'Book Session'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
