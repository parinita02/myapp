import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import "./style.css";
import EmployeeLogin from '../employee/EmployeeLogin'
import AdminLogin from '../admin/AdminLogin'

export default function MainNavBar({onAdminLogin,onEmployeeLogin}) {


  return (
    <div>
      <nav>
        <ul>
          <div style={{ float: "left" }}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </div>

          <li className="dropdown">
            <Link>🔒Login</Link>
            <div className="dropdown-content">
              <Link to="https://main--elms717381.netlify.app/employeelogin">Employee Login</Link>
              <Link to="https://main--elms717381.netlify.app/adminlogin">Admin Login</Link>
            </div>
          </li>
          
          <div style={{ float: "right" }}>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="nav-link">
               Contact Us 📞
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contactus" element={<ContactUs />} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/employeelogin" element={<EmployeeLogin onEmployeeLogin={onEmployeeLogin}/>} exact />
      </Routes>
    </div>
  );
}