import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ExploreUniversities from './pages/ExploreUniversities';
import ExploreCourses from './pages/ExploreCourses';
import About from './pages/About';
import Contact from './pages/Contact';
import UniversityDetails from './pages/UniversityDetails';
import CourseDetails from './pages/CourseDetails';
import { ThemeProvider } from './context/ThemeContext';

import { Outlet, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ManageUniversities from './pages/admin/ManageUniversities';
import ManageCourses from './pages/admin/ManageCourses';
import ProtectedRoute from './components/common/ProtectedRoute';

// Wrapper for Public Layout to use with Outlet
const PublicLayout = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/universities" element={<ExploreUniversities />} />
                        <Route path="/courses" element={<ExploreCourses />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/universities/:id" element={<UniversityDetails />} />
                        <Route path="/courses/:id" element={<CourseDetails />} />
                    </Route>

                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />

                    <Route element={<ProtectedRoute />}>
                        <Route element={<AdminLayout />}>
                            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                            <Route path="/admin/dashboard" element={<Dashboard />} />
                            <Route path="/admin/universities" element={<ManageUniversities />} />
                            <Route path="/admin/courses" element={<ManageCourses />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
