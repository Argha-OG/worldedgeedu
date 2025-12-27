import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { DataProvider } from './context/DataContext'
import { AuthProvider } from './context/AuthContext'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <DataProvider>
                    <App />
                </DataProvider>
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
