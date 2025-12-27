import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import GlassCard from '../../components/ui/GlassCard';
import ThreeDButton from '../../components/ui/ThreeDButton';
import { Lock } from 'lucide-react';
import logo from '../../assets/worldedge.png';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const success = login(email, password);
        if (success) {
            navigate('/admin/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
            <GlassCard className="max-w-md w-full p-8">
                <div className="text-center mb-8">
                    <img src={logo} alt="Logo" className="h-12 w-auto mx-auto mb-4" />
                    <h1 className="text-2xl font-bold">Admin Login</h1>
                    <p className="text-sm text-muted-foreground">Secure access for staff only</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-500 text-sm rounded-lg text-center font-medium">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                            placeholder="team@worldedgeedu.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <ThreeDButton
                        type="submit"
                        className="w-full"
                    >
                        <Lock size={18} className="mr-2" />
                        Login to Dashboard
                    </ThreeDButton>
                </form>
            </GlassCard>
        </div>
    );
};

export default AdminLogin;
