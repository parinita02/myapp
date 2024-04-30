import React, { useState, useRef } from 'react';
import axios from 'axios';
import './form.css';
import config from '../config'


export default function Registration() {
  const [formData, setFormData] = useState({ 
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: '',
    qualification: '',
    workexperience: '',
    employeeid: '',
    file: null,
  }); 
  
  const fileInputRef = useRef(null); // Ref for the file input element 
 
  const [message, setMessage] = useState(''); 
  const [error, setError] = useState(''); 
 
  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.id]: e.target.value }); 
  }; 
 
  const handleFileChange = (e) => { 
    setFormData({ ...formData, file: e.target.files[0] }); 
  }; 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      const formDataToSend = new FormData(); 
      formDataToSend.append('fullname', formData.fullname);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('dateofbirth', formData.dateofbirth);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('contact', formData.contact);
      formDataToSend.append('qualification', formData.qualification);
      formDataToSend.append('workexperience', formData.workexperience);
      formDataToSend.append('employeeid', formData.employeeid);
      formDataToSend.append('file', formData.file); // Append the file object // Append the file object 
 
      const response = await axios.post(`${config.url}/insert`, formDataToSend, { 
        headers: { 
          'Content-Type': 'multipart/form-data' // Set content type for FormData 
        } 
      }); 
 
      if (response.status === 200) { 
        setFormData({ 
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: '',
          qualification: '',
          workexperience: '',
          employeeid: '',
         file: null 
        }); 
        fileInputRef.current.value = ''; 
      } 
      setMessage(response.data); 
      setError(''); 
    }  
    catch (error)  
    { 
      setError(error.response.data); 
      setMessage(''); 
    } 
  }; 
 
  return ( 
    <div> 
      <h3 align="center"><u>Registration</u></h3> 
      {message ? <h4 align="center">{message}</h4> : null} 
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null} 
      <form id="form" onSubmit={handleSubmit}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label><input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <div>
          <label>Qualification</label>
          <input type="text" id="qualification" value={formData.qualification} onChange={handleChange} required />
        </div>
        <div>
          <label>Work Experience</label>
          <input type="text" id="workexperience" value={formData.workexperience} onChange={handleChange} required />
        </div>
        <div>
          <label>Employee ID</label>
          <input type="number" id="employeeid" value={formData.employeeid} onChange={handleChange} required />
        </div>
        <div>
          <label>Image</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}