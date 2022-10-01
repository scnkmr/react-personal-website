import {Outlet, Link, NavLink} from 'react-router-dom';
import "./assets/css/Layout.css";
import Footer3D from "./work/assets/footer-3D.webp";
import { FaBars, FaHandshake, FaArrowAltCircleUp } from 'react-icons/fa';
import Eyes from './work/Eyes';

const Layout = () => {
	const showMenu = () => {
		var x = document.getElementById("myTopnav");
		  if (x.className === "topnav") {
			x.className += " responsive";
		  } else {
			x.className = "topnav";
		  }
  }
	const backToTop = () =>{
		// 👇️ scroll to top on page load
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}
	return(
	<>
	<nav>
	<div className="topnav" id="myTopnav">
		<NavLink to="/">SachinThakur.in</NavLink>
  
		<Link to="/">Home</Link>
  
  <NavLink to="/work">Work</NavLink>
  
  <Link to="/">
  <Eyes />
		<div style={{display:"flex", justifyContent:"center"}} className="notch-container">
		<div className="eye-container" style={{
			
		}}>
			<div className="c-logo">
			  <div className="c-logo__eye" style={{transform: "rotate(102.478deg)"}}>
				<div className="c-logo__iris"></div>
			  </div>
			</div>
		</div>
		</div>
  
  </Link>
  
  <NavLink to="/contact">Contact</NavLink>
  
  <NavLink to="/blog">Blog</NavLink>
  <a href="javascript:void(0);" className="icon" onClick={showMenu}>
    <FaBars />
  </a>
</div>
</nav>
<div id="top">
</div>
		<Outlet/>
		
		<div className="ctoa">
	<table>
	<tbody>
    	<tr>
        	<td width="40%">
				<img src={Footer3D} style={{width:"100%",marginTop:"-30px"}} />
			</td>
            <td>
            	<h2>I occasionally take on freelance opportunities.</h2>
                <p>Have an exciting project where you need some help?<br/>
Send me over a message, and let's chat.</p>
				<Link to="/contact" className="y-btn"> <FaHandshake /> Get in Touch</Link>
            </td>
        </tr>
		</tbody>
    </table>
</div>
<div className="container text-center">
&copy; Do Not copy; All Rights Reserved by Sachin Arayans.
<button onClick={backToTop} style={{float:"right"}}><FaArrowAltCircleUp />Back to Top</button>
</div>

	</>
	);
}

export default Layout;	