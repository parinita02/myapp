import React from 'react';
import { Route, Routes, Link ,useNavigate} from 'react-router-dom';
import './Admin.css';

import Dashboard from './AdminDashboard.js';
import  LeaveRequests from './LeaveRequests.js'
import ViewEmployees from './ViewEmployees.js';
import Registration from './Registration.js';
import AdminProfile from './AdminProfile.js';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('https://main--elms717381.netlify.app/adminlogin');
    window.location.reload()
  };

  return (
    <div>
      <nav className="nav-container">
      <ul>
          <li>
            <Link to="/admin/admindashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/registration">Registration</Link>
          </li>
          <li>
            <Link to="/admin/leaverequests">LeaveRequests</Link>
          </li>
          <li>
            <Link to="/admin/viewemployees">Employees List</Link>
          </li>
          <li>
            <Link to="/admin/adminprofile">MyProfile</Link>
          </li>
          <li style={{ float:"right"}}><button className="submit" onClick={handleLogout}>Logout</button></li>
         
        </ul>
      </nav>

      <Routes >
       <Route path='/admin/*' element={<AdminNavBar/>}/>
        <Route path="/admin/admindashboard" element={<Dashboard />} />
        <Route path="/admin/registration" element={<Registration/>}/>
        <Route path="/admin/leaverequests" element={<LeaveRequests/>}  />
        <Route path="/admin/viewemployees" element={<ViewEmployees/>}  />
        <Route path="/admin/adminprofile" element={<AdminProfile/>}/>
      </Routes>
    </div>
  );
}