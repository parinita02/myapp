import React from 'react'
import './adminprofile.css'
import profile from './image1.jpg'
import AdminNavBar from './AdminNavBar'

export default function AdminProfile() {
 
    return <div>
      <div className='card'>
       <img src={profile} alt='profile' width="50%"/>    
      <h4>NAME:Jake Henderson</h4>
      <h5>Gender: MALE</h5>  
      <p style={{fontSize:"10pt",color:"blue"}}>Admin</p>
      <i>jakehenderson@gmail.com</i><br/>
      <i>7019341513</i>
      </div>
    </div>
}