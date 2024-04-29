import React from 'react';
import { Route, Routes, Link ,useNavigate} from 'react-router-dom';
import './Admin.css';

import Dashboard from './AdminDashboard.js';
import  LeaveRequests from './LeaveRequests.js'
import ViewEmployees from './ViewEmployees.js';
import Registration from './Registration.js';
import AdminProfile from './AdminProfile.js';

const deploymentUrl = 'https://elms717381.netlify.app';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate(`${deploymentUrl}/adminlogin`);
    window.location.reload()
  };

  return (
    <div>
      <nav className="nav-container">
        <ul>
          <li>
            <Link to={`${deploymentUrl}/admin/admindashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${deploymentUrl}/admin/registration`}>Registration</Link>
          </li>
          <li>
            <Link to={`${deploymentUrl}/admin/leaverequests`}>Leave Requests</Link>
          </li>
          <li>
            <Link to={`${deploymentUrl}/admin/viewemployees`}>Employees List</Link>
          </li>
          <li>
            <Link to={`${deploymentUrl}/admin/adminprofile`}>My Profile</Link>
          </li>
          <li style={{ float:"right"}}>
            <button className="submit" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path={`${deploymentUrl}/admin/*`} element={<AdminNavBar/>}/>
        <Route path={`${deploymentUrl}/admin/admindashboard`} element={<Dashboard />} />
        <Route path={`${deploymentUrl}/admin/registration`} element={<Registration/>}/>
        <Route path={`${deploymentUrl}/admin/leaverequests`} element={<LeaveRequests/>}  />
        <Route path={`${deploymentUrl}/admin/viewemployees`} element={<ViewEmployees/>}  />
        <Route path={`${deploymentUrl}/admin/adminprofile`} element={<AdminProfile/>}/>
      </Routes>
    </div>
  );
}
