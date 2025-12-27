import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, School, BookOpen, LogOut, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cn } from '../lib/utils';
import logo from '../assets/worldedge.png';

const AdminLayout = () => {
    const { logout } = useAuth();
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Universities', path: '/admin/universities', icon: School },
        { name: 'Courses', path: '/admin/courses', icon: BookOpen },
    ];

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 w-auto" />
                    <span className="font-bold text-lg">Admin Panel</span>
                </div>

                <nav className="flex-grow p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                location.pathname === item.path
                                    ? "bg-primary text-white"
                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                            )}
                        >
                            <item.icon size={18} />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 w-full transition-colors"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow overflow-auto p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
