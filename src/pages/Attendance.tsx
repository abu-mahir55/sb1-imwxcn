import React, { useState } from 'react';
import { Check, X, Clock, AlertCircle } from 'lucide-react';
import { Student, AttendanceRecord } from '../types';

// Mock data for demonstration
const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    grade: '10',
    class: 'A',
    rollNumber: '101',
    parentEmail: 'parent@example.com',
    parentPhone: '1234567890',
  },
  // Add more mock students as needed
];

const mockClasses = [
  { id: '1', name: '10-A' },
  { id: '2', name: '10-B' },
  { id: '3', name: '11-A' },
];

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState<Record<string, AttendanceRecord>>({});
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAttendanceChange = (studentId: string, status: AttendanceRecord['status']) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: {
        id: `${date}-${studentId}`,
        studentId,
        date,
        status,
      },
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting attendance:', attendance);
    // Handle submission logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Attendance Management</h2>
        <div className="flex space-x-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select Class</option>
            {mockClasses.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedClass && (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.rollNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleAttendanceChange(student.id, 'present')}
                        className={`p-2 rounded-full ${
                          attendance[student.id]?.status === 'present'
                            ? 'bg-green-100 text-green-600'
                            : 'hover:bg-gray-100 text-gray-400'
                        }`}
                      >
                        <Check className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleAttendanceChange(student.id, 'absent')}
                        className={`p-2 rounded-full ${
                          attendance[student.id]?.status === 'absent'
                            ? 'bg-red-100 text-red-600'
                            : 'hover:bg-gray-100 text-gray-400'
                        }`}
                      >
                        <X className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleAttendanceChange(student.id, 'late')}
                        className={`p-2 rounded-full ${
                          attendance[student.id]?.status === 'late'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'hover:bg-gray-100 text-gray-400'
                        }`}
                      >
                        <Clock className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleAttendanceChange(student.id, 'excused')}
                        className={`p-2 rounded-full ${
                          attendance[student.id]?.status === 'excused'
                            ? 'bg-blue-100 text-blue-600'
                            : 'hover:bg-gray-100 text-gray-400'
                        }`}
                      >
                        <AlertCircle className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-gray-50">
            <button
              onClick={handleSubmit}
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  );
}