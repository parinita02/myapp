import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Admin.css'
import config from '../config'

import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import image1 from "../main/image1.png"


export default function AdminLogin({ onAdminLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) 
      {
        onAdminLogin(); 

        localStorage.setItem('admin', JSON.stringify(response.data));
        
        navigate("/admin/admindashboard");
      } 
      else 
      {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (

    <StyledContainer>
    <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
            <img src={image1} alt="image" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
                <StyledTitle>
                <div  className="main" >
      <h3 className ="sign" align="center">Admin Login</h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit} class="form1">
        <div>
          <label>Username</label>
          <input className="un" type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input className="pass" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit" align="center" >Login</button>
      </form>
    </div>
                </StyledTitle>
             </StyledPaper>
        </Grid>
    </Grid>
</StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  font-size: 1.0999999rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;