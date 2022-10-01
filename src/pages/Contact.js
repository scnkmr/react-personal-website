import {Link} from 'react-router-dom';
import "./assets/css/Contact.css";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import {useEffect} from 'react';
import useDocumentTitle from './components/useDocumentTitle';
const Contact = ()=>{
	useDocumentTitle('Contact Sachin Arayans','https://www.sachinthakur.in/me.webp', 'Sachin Arayans Contact, Phone no, Appointment, Free Website Development consultation, Social Handle, Linkedin, Instagram');  
	return(
		<>
		<div className="container">
			<div className="contact-container mt-5">
			  <a href="https://www.linkedin.com/in/sachinarayans/" className="btn in">
				<FaLinkedin />
			  </a>
			  <a href="https://twitter.com/sachinarayans" className="btn tw">
				<FaTwitter />
			  </a>
			  <a href="https://github.com/scnkmr" className="btn gh">
				<FaGithub />
			  </a>
			  <a href="https://www.instagram.com/sachinarayans/" className="btn ig">
				<FaInstagram />
			  </a>
			  <a href="#"  className="btn yt">
				<FaYoutube />
			  </a>
			</div>
			<h2 className="text-center mb-5 mt-1">sachinarayans@gmail.com</h2>
		</div>
		</>
	);
} 
export default Contact;