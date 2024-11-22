import React from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="ml-4 text-xl font-bold text-gray-900">EduTrack</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <Bell className="h-5 w-5" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Admin</span>
                </button>
              </div>
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 min-h-screen bg-white shadow-lg">
          <nav className="mt-5 px-2">
            <Link
              to="/"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/classes"
              className={`mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/classes') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Classes
            </Link>
            <Link
              to="/attendance"
              className={`mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/attendance') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Attendance
            </Link>
            <Link
              to="/reports"
              className={`mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/reports') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Reports
            </Link>
            <Link
              to="/settings"
              className={`mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/settings') ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}