import React, { useState,useRef } from 'react';
import axios from 'axios';
import './form.css'
import config from '../config'


export default function RequestLeave() {

  const [formData, setFormData] = useState({
    emp:'employeeid',
    typeofleave: '',
    startdate: '',
    enddate: '',
    reason: '',
    file: null
  });

  const fileInputRef = useRef(null); 
 
   const [message, setMessage] = useState('');
   const [error, setError] = useState('');

   const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const formDataToSend = new FormData();
      formDataToSend.append('emp',formData.emp)
      formDataToSend.append('typeofleave',formData.typeofleave);
      formDataToSend.append('startdate',formData.startdate);
      formDataToSend.append('enddate',formData.enddate);
      formDataToSend.append('reason',formData.reason);
      formDataToSend.append('file',formData.file)

      const response = await axios.post(`${config.url}/applyleave`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setFormData({
          emp:'employeeid',
          typeofleave: '',
          startdate: '',
          enddate: '',
          reason: '',
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
    
    <i>  <h3 align="center"  ><u>Leave Application</u></h3></i>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form id="form" onSubmit={handleSubmit}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <label>Leave Type:</label>
          <select id="typeofleave" value={formData.typeofleave} onChange={handleChange} required>
            <option value="">Select Leave Type</option>
            <option value="vacation">Vacation</option>
            <option value="sick">Sick</option>
            <option value="maternity">Maternity</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" id="startdate" value={formData.startdate} onChange={handleChange} required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" id="enddate" value={formData.enddate} onChange={handleChange} required />
        </div>
        <div>
          <label>Reason:</label>
          <input type="text" id="reason" value={formData.reason} onChange={handleChange} required />
        </div>
        <div>
          <label>Document</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Request</button>
      </form>
    </div>
  )
}
