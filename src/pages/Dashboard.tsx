import React from 'react';
import { Users, GraduationCap, UserCheck, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';

const mockStats = {
  totalStudents: 1250,
  totalClasses: 45,
  todayAttendanceRate: 95.8,
  weeklyAttendanceRate: 94.2,
  monthlyAttendanceRate: 93.5,
  recentAbsences: 12,
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Take Attendance
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={mockStats.totalStudents}
          icon={Users}
          trend={{ value: 2.5, isPositive: true }}
        />
        <StatCard
          title="Total Classes"
          value={mockStats.totalClasses}
          icon={GraduationCap}
        />
        <StatCard
          title="Today's Attendance"
          value={`${mockStats.todayAttendanceRate}%`}
          icon={UserCheck}
          trend={{ value: 1.2, isPositive: true }}
        />
        <StatCard
          title="Recent Absences"
          value={mockStats.recentAbsences}
          icon={Clock}
          trend={{ value: 0.8, isPositive: false }}
        />
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="bg-white shadow-sm rounded-lg">
          <div className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="p-4 hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      Class 10-A attendance marked
                    </p>
                    <p className="text-sm text-gray-500">
                      35 students present, 2 absent
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">
                    2 hours ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}