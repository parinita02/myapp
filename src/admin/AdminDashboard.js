import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css'
import config from '../config'

const deploymentUrl = 'https://elms717381.netlify.app';

export default function AdminDashboard() {
  const [adminData, setAdminData] = useState("");
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${deploymentUrl}/analysis`);
      setCounts(response.data);
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };
  

  return (
    <div>
      {adminData && (
        <div style={{ alignContent: "center" }}>
          <h2>
            Welcome <span style={{ color: '#753BBD' }}>{adminData.username},</span>
          </h2>
          {counts ? (
            <div>
              <section className="page-contain">
                <a href={`${deploymentUrl}/admin/viewemployees`} className="data-card">
                  <h3>{counts.employeesCount}</h3>
                  <h4>Employees</h4>
                  <span className="link-text">
                    View Information
                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
                    </svg>
                  </span>
                </a>
              </section>
            </div>
          ) : (
            <p>Loading counts...</p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}
