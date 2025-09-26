'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';

interface Appointment {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  counsellor: {
    _id: string;
    name: string;
    email: string;
    specialization: string;
  };
  date: string;
  time: string;
  duration: number;
  status: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled';
  sessionType: 'video' | 'audio' | 'chat' | 'in-person';
  notes?: string;
  counsellorNotes?: string;
  rejectionReason?: string;
  meetingLink?: string;
  createdAt: string;
  updatedAt: string;
}

interface AppointmentStats {
  total: number;
  pending: number;
  approved: number;
  completed: number;
  rejected: number;
}

export default function CounsellorDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [stats, setStats] = useState<AppointmentStats>({
    total: 0,
    pending: 0,
    approved: 0,
    completed: 0,
    rejected: 0
  });
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionType, setActionType] = useState<'approve' | 'reject' | 'complete'>('approve');
  const [counsellorNotes, setCounsellorNotes] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user?.role === 'counsellor') {
      fetchAppointments();
      fetchStats();
    }
  }, [isAuthenticated, user]);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/appointments/counsellor/all`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setAppointments(data.data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/appointments/counsellor/stats`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleAction = (appointment: Appointment, type: 'approve' | 'reject' | 'complete') => {
    setSelectedAppointment(appointment);
    setActionType(type);
    setCounsellorNotes(appointment.counsellorNotes || '');
    setRejectionReason(appointment.rejectionReason || '');
    setMeetingLink(appointment.meetingLink || '');
    setShowActionModal(true);
  };

  const handleActionSubmit = async () => {
    if (!selectedAppointment) return;

    setActionLoading(true);
    try {
      const token = localStorage.getItem('accessToken');
      const updateData: { status: string; counsellorNotes?: string; rejectionReason?: string; meetingLink?: string } = {
        status: actionType === 'approve' ? 'approved' : actionType === 'reject' ? 'rejected' : 'completed'
      };

      if (counsellorNotes) {
        updateData.counsellorNotes = counsellorNotes;
      }

      if (actionType === 'reject' && rejectionReason) {
        updateData.rejectionReason = rejectionReason;
      }

      if (actionType === 'approve' && meetingLink) {
        updateData.meetingLink = meetingLink;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/appointments/${selectedAppointment._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();
      if (data.success) {
        fetchAppointments();
        fetchStats();
        setShowActionModal(false);
        setSelectedAppointment(null);
        setCounsellorNotes('');
        setRejectionReason('');
        setMeetingLink('');
      } else {
        alert('Failed to update appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
      alert('Error updating appointment. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    if (selectedStatus === 'all') return true;
    return appointment.status === selectedStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated || user?.role !== 'counsellor') {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600">This page is only accessible to counsellors.</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading appointments...</p>
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
              Counsellor Dashboard
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Manage Your
              <span className="block font-medium text-emerald-600">Appointments</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Review and manage your appointment requests from clients
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Appointments</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{stats.pending}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.approved}</div>
              <div className="text-sm text-gray-600">Approved</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.completed}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{stats.rejected}</div>
              <div className="text-sm text-gray-600">Rejected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 sm:mb-0">Appointments</h2>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div className="space-y-6">
            {filteredAppointments.map((appointment) => (
              <div key={appointment._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-lg">
                          {appointment.user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{appointment.user.name}</h3>
                        <p className="text-gray-600">{appointment.user.email}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">
                            {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                          </span>
                          <span className="text-sm text-gray-500">
                            {appointment.duration} minutes
                          </span>
                          <span className="text-sm text-gray-500 capitalize">
                            {appointment.sessionType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Client Notes:</h4>
                        <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">{appointment.notes}</p>
                      </div>
                    )}

                    {appointment.counsellorNotes && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Your Notes:</h4>
                        <p className="text-gray-600 text-sm bg-emerald-50 p-3 rounded-lg">{appointment.counsellorNotes}</p>
                      </div>
                    )}

                    {appointment.meetingLink && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Meeting Link:</h4>
                        <a 
                          href={appointment.meetingLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:text-emerald-700 text-sm"
                        >
                          {appointment.meetingLink}
                        </a>
                      </div>
                    )}

                    {appointment.rejectionReason && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Rejection Reason:</h4>
                        <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{appointment.rejectionReason}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col space-y-3 mt-4 lg:mt-0 lg:ml-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>

                    {appointment.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAction(appointment, 'approve')}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(appointment, 'reject')}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    )}

                    {appointment.status === 'approved' && (
                      <button
                        onClick={() => handleAction(appointment, 'complete')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Mark Complete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredAppointments.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No appointments found</h3>
                <p className="text-gray-600">You don&apos;t have any appointments with the selected status.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Modal */}
      {showActionModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-slate-800">
                  {actionType === 'approve' ? 'Approve' : actionType === 'reject' ? 'Reject' : 'Complete'} Appointment
                </h3>
                <button
                  onClick={() => setShowActionModal(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6 p-4 bg-emerald-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">{selectedAppointment.user.name}</h4>
                <p className="text-sm text-emerald-600">
                  {new Date(selectedAppointment.date).toLocaleDateString()} at {selectedAppointment.time}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Counsellor Notes
                  </label>
                  <textarea
                    value={counsellorNotes}
                    onChange={(e) => setCounsellorNotes(e.target.value)}
                    placeholder="Add any notes for this appointment..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                    rows={3}
                  />
                </div>

                {actionType === 'approve' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Meeting Link (optional)
                    </label>
                    <input
                      type="url"
                      value={meetingLink}
                      onChange={(e) => setMeetingLink(e.target.value)}
                      placeholder="https://meet.google.com/..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                    />
                  </div>
                )}

                {actionType === 'reject' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Rejection Reason
                    </label>
                    <textarea
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="Please provide a reason for rejection..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 bg-white"
                      rows={3}
                      required
                    />
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowActionModal(false)}
                    className="flex-1 px-4 py-3 text-slate-700 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleActionSubmit}
                    disabled={actionLoading || (actionType === 'reject' && !rejectionReason.trim())}
                    className={`flex-1 px-4 py-3 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      actionType === 'approve' ? 'bg-green-600 hover:bg-green-700' :
                      actionType === 'reject' ? 'bg-red-600 hover:bg-red-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {actionLoading ? 'Processing...' : 
                     actionType === 'approve' ? 'Approve' :
                     actionType === 'reject' ? 'Reject' : 'Complete'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Manovridhi</h3>
            <p className="text-gray-400 text-sm">&copy; 2024 Manovridhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
