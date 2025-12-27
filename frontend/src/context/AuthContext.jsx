import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('worldedge_admin');
        return saved ? JSON.parse(saved) : null;
    });

    const login = (email, password) => {
        // Hardcoded credentials as requested
        if (email === 'team@worldedgeedu.com' && password === 'Admin@worldedgeedu#18767') {
            const adminUser = { email, role: 'admin', name: 'Admin' };
            setUser(adminUser);
            localStorage.setItem('worldedge_admin', JSON.stringify(adminUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('worldedge_admin');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
