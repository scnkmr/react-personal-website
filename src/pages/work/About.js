import { FcBriefcase} from "react-icons/fc";
import { FaGithub,FaLinkedinIn,FaInstagram,FaEnvelope } from "react-icons/fa";
import SimpleForm from "../components/chatbot/SimpleForm";
function About(props) {
  return (
	<>
		<div className="col-sm-4" >
		<center>
		  <div className="fakeimg ctoa"><img src={props.img} alt="Sachin Thakur" style={{width:'100%', marginTop: '-30px'}} className="img-rounded" /></div>
		  <br/>
		  <h3 className="gradient-text">{props.name}</h3>
		  <h6 style={{fontFamily:"Pacifico"}}><FcBriefcase/> <small> {props.position}</small></h6>
		  <p className="desc">{props.desc}</p>
		  
		  <div className="social-icon">
		  <a href="https://github.com/scnkmr" style={{backgroundColor:"#333"}}><FaGithub/></a>
		  <a href="https://www.linkedin.com/in/sachinarayans/" style={{backgroundColor:"#0e76a8"}}><FaLinkedinIn/></a>
		  <a href="https://www.instagram.com/sachinarayans/" style={{backgroundColor:"#c13584"}}><FaInstagram/></a>
		  <a href="mailto:sachinarayans.com" style={{backgroundColor:"#ea4335"}}><FaEnvelope/></a>
		  </div>
		  
		  </center>
		  <div className="sticky-top">
		  <br/>
		  <SimpleForm/>
		  <br/>
			<h2 style={{color:"#232320"}}>I'm currently <span className="bg-y">available</span> for freelance work.</h2>
			<p>Have an exciting project where you need some help?
Send me over a message, and <a href="https://api.whatsapp.com/send?phone=+919810932480&text=Hello%20Sachin!%20I%20just%20Visited%20Your%20Site%20www.sachinthakur.in">let's chat</a>.</p>
		  </div>
		  <hr/>
		</div>
    </>
  );
}

export default About;
