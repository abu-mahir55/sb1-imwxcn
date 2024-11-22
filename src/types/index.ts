export interface Student {
  id: string;
  name: string;
  grade: string;
  class: string;
  rollNumber: string;
  parentEmail: string;
  parentPhone: string;
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  teacher: string;
  totalStudents: number;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
}

export interface DashboardStats {
  totalStudents: number;
  totalClasses: number;
  todayAttendanceRate: number;
  weeklyAttendanceRate: number;
  monthlyAttendanceRate: number;
  recentAbsences: number;
}