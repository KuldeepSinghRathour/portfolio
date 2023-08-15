import React from 'react'
import { Mail,Linkedin } from 'lucide-react'
import './Contact.css'
import logo from "../components/images/eren.png";

const Contact = () => {
  return (
    <>
    <div className='contact-body'>
      <div className='contact-container'>
        <div className='contact-profile-img'><img src={logo} alt="" /></div>
        <p>Kuldeep Singh</p>
        <p><a href="kuldeepsinghrathour14@gmail.com" target='_blank'><Mail color="#6171e5" /> kuldeepsinghrathour14@gmail.com</a></p>
        <p><Linkedin color="#6171e5" /> www.linkedin.com/in/kuldeep-singh-rathour-46007023b/</p>
      </div>
      </div>
    </>
  )
}

export default Contact
