import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import EmpNavBar from './employee/EmpNavBar';

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false);
  

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const employeeLoggedIn = localStorage.getItem('isEmployeeLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsEmployeeLoggedIn(employeeLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onEmployeeLogin = () => {
    localStorage.setItem('isEmloyeeLoggedIn', 'true');
    setIsEmployeeLoggedIn(true);
  };

  return (
    <div className="App">
      <h3 align="center">Employee Leave Management system</h3>
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isEmployeeLoggedIn ? (
          <EmpNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin}
            onEmployeeLogin={onEmployeeLogin}
          />
        )}
      </Router>
    </div>
  );
}