import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './EmpNavBar.css'

import Dashboard from './EmpDashboard'
import LeaveHistory from './LeaveHistory'
import MyProfile from './EmpProfile'
import RequestLeave from './RequestLeave'
import ChangeEmpPwd from './ChangeEmpPwd'
import { useNavigate } from 'react-router-dom'


export default function EmpNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isEmployeeLoggedIn');
    localStorage.removeItem('employee');

    navigate('https://elms717381.netlify.app/employeelogin');
    window.location.reload()
  };

  return (
    <div>
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/employee/empdashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/employee/leavehistory">Leave History</Link>
          </li>
          <li>
            <Link to="/employee/requestleave">Request Leave</Link>
          </li>
          <li>
            <Link to="/employee/empprofile">My Profile</Link>
          </li>
          <li>
            <Link to="/employee/changeemppwd">Change Password</Link>
          </li>
        </ul>
        <ul>
          <li style={{ float: "right" }}>
          <button className="submit" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/employee/*" element={<EmpNavBar />} exact />
        <Route path="/employee/empdashboard" element={<Dashboard/>}exact />
        <Route path="/employee/leavehistory" element={<LeaveHistory />}exact  />
        <Route path="/employee/requestleave" element={<RequestLeave />} exact/>
        <Route path="/employee/empprofile" element={<MyProfile />} exact />
        <Route path="/employee/changeemppwd" element={<ChangeEmpPwd />} exact />

      </Routes>
    </div>
  )
}