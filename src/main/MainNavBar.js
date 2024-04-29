import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import "./style.css";
import EmployeeLogin from '../employee/EmployeeLogin'
import AdminLogin from '../admin/AdminLogin'

const deploymentUrl = 'https://elms717381.netlify.app';

export default function MainNavBar({onAdminLogin, onEmployeeLogin}) {

  return (
    <div>
      <nav>
        <ul>
          <div style={{ float: "left" }}>
            <li>
              <Link to={`${deploymentUrl}/`} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          <li className="dropdown">
            <Link>🔒Login</Link>
            <div className="dropdown-content">
              <Link to={`${deploymentUrl}/employeelogin`}>Employee Login</Link>
              <Link to={`${deploymentUrl}/adminlogin`}>Admin Login</Link>
            </div>
          </li>
          
          <div style={{ float: "right" }}>
            <li>
              <Link to={`${deploymentUrl}/about`} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to={`${deploymentUrl}/contactus`} className="nav-link">
               Contact Us 📞
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path={`${deploymentUrl}/`} element={<Home />} exact />
        <Route path={`${deploymentUrl}/about`} element={<About />} exact />
        <Route path={`${deploymentUrl}/contactus`} element={<ContactUs />} exact />
        <Route path={`${deploymentUrl}/adminlogin`} element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path={`${deploymentUrl}/employeelogin`} element={<EmployeeLogin onEmployeeLogin={onEmployeeLogin}/>} exact />
      </Routes>
    </div>
  );
}
