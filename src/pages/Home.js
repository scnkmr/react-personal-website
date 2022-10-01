import {Link} from 'react-router-dom';
import Hero3D from './assets/hero-3d.webp';
import GoalImage from './assets/goal.webp';
import Me from './assets/me.webp';
import AnalyticsImage from './assets/analytics.webp';
import "./assets/css/Home.css";
import {FaHandshake, FaWpexplorer, FaLaravel, FaWordpress, FaBootstrap, FaReact, FaHtml5, FaPhp, FaShopify } from 'react-icons/fa';
import { FcFlowChart, FcGoogle, FcLockLandscape, FcMultipleDevices, FcShop, FcSms, FcFeedback, FcCollaboration, FcRules } from "react-icons/fc";
import { SiJavascript, SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import {useEffect} from 'react';
import 'animate.css';
import useDocumentTitle from './components/useDocumentTitle';

const Home = () => {
	  useDocumentTitle('#1 Web Developer Company in Gurgaon | Top Freelancer Web Developer in Gurugram','https://www.sachinthakur.in/me.webp' ,`Sachin Arayans is India's No 1 Web Development Company 100% Trusted Web Company. We Provide Unique and Best quality Websites at a Very Affordable Price. Starting From Rs 4499. 100+ Happy Clients. Custom & Dynamic Website. Free Website Support. Free Consultation`);
  
	return(
	<>
		<div className="container mt-3">
		<marquee><b>क्या आप जानते हैं? 40% उपभोक्ता अभी भी अपने आस पास के व्यपार को गूगल पर खोजते हैं।   मेरे साथ लायें अपने व्यपार को दुनिया के सामने।   बनवाये अपनी Website और देखें अपने व्यपार को गूगल पर। </b></marquee>
			<div className="row">
				<div className="col-sm-6 text-center" style={{padding:"70px 0px"}}>
					<h1>Website <span className="bg-y" >Designing</span> Company in Gurgaon</h1>
					<p>I am an Expert Web Developer who offer custom and creative service to ultimate increase your business performance by building high quality Websites.</p>
					<Link to="/contact"><button className="y-btn"><FaHandshake /> Get in Touch</button></Link>
				</div>
				<div className="col-sm-6 order-first order-md-last">
					<div className="hero-bg">
						<img src={Hero3D} width="100%" className="animate__animated animate__slideInDown animate__faster" style={{marginTop:"-70px"}} alt="web developer 3d image icon, working on desktop icon" />
					</div>
				</div>
			</div>
			</div>
					
			<div style={{backgroundColor:"#fff"}}>
			<div className="container">
			<div className="row mt-5">
				<div className="col-sm-4">
					<div className="fakeimg ctoa"><img src={Me} alt="Sachin Thakur freelancer Web Developer" style={{width:'100%', marginTop: '-30px'}} className="img-rounded" /></div>
				</div>
				<div className="col-sm-8 pt-5 pb-5 text-center text-sm-left">
					<h2 style={{fontSize:"15px"}}>BEST FREELANCER WEB DEVELOPER IN GURGAON</h2>
					<h3 style={{lineHeight:"45px"}}>
						I Have Been Doing This For More Than <span className="bg-y">5</span> <span className="bg-y">Years</span>.
					</h3>
					<p>
						I started designing website from 2018 and since then I have developed more than 100 websites. Some of my best works are mentioned below.
					</p>
					<Link to="/work"><button className="y-btn"><FaWpexplorer /> Explore My Work</button></Link>
				</div>
			</div>
			</div>
			</div>
			
		<div className="container">
			<div className="row mt-5">
				<div className="col-sm-6 text-center">
					<img src={GoalImage} className="animate__animated animate__bounce" width="80%" alt="Goal Icon 3d, Best Web Developer Gurgaon" />
				</div>
				<div className="col-sm-6">
					<h2>Cutting Edge <span className="bg-y">Features</span> Provided by me</h2>
					<p>In order to ensure best Service I always provide these features to all clients. </p>
					<ul className="feature">
						<li><FcFlowChart /> User Friendly Navigation</li>
						<li><FcFeedback /> Business Emails</li>
						<li><FcGoogle /> SEO Friendly Website Design</li>
						<li><FcShop /> Business Localisation Connectivity</li>
						<li><FcCollaboration /> Social Media Connectivity</li>
						<li><FcSms /> Live Chat</li>
						<li><FcRules /> Website Content</li>
						<li><FcLockLandscape /> Website Security SSL Ready</li>
						<li> <FcMultipleDevices /> Responsive Design </li>
					</ul>
				</div>
			</div>
			</div>
			
			<div className="mt-5" style={{backgroundColor: "#fff"}}>
			<div className="container pl-5 pt-5 pb-5">
				<h2>How Do I Work With <span className="bg-y">Clients</span></h2>
				<p>As a client you are looking for the solution that require no technical things. This where we provide you software to handle the backend concepts and content you post on your website. We provide you admin panel so that you can manage and add content easily.</p>
				<div className="row">
					<div className="how-i-work col-sm-3">
						<span className="counting">1.</span>
						<h3> Quotation</h3>
						<p>Discuss your requirents with me. I will give you Cost of your Website according to your requirments, and time frame in which I am going to deliver you your website.</p>
					</div>
					<div className="how-i-work col-sm-3">
						<span className="counting">2.</span>
						<h3>Strategy</h3>
						<p>To make you website I will make a strategy with you. So that I can provide what you are expecting from me. I will also tell you about the technologies and alternates of technologies. We will select suitable method.</p>
					</div>
					<div className="how-i-work col-sm-3">
						<span className="counting">3.</span>
						<h3>Development</h3>
						<p>Once we are clear with the strategy, I will start Development. In Development time We make your project live so that you can track the website on server.</p>
					</div>
					<div className="how-i-work col-sm-3">
						<span className="counting">4.</span>
						<h3>Delivery</h3>
						<p>After Development I will test you website, If I found any bug I will fix. After that I will deliver you website to you. After Delivery you can test you website and ask for changes if any.</p>
					</div>
				</div>
			</div>
		</div>
		
		<div style={{backgroundColor: "#000", padding:"50px 0px", color: "#fff"}}>
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<h2><span className="bg-y" style={{color: "#000"}}> <SiGoogleanalytics/></span> Google Analytics Integration <small className="bg-y" style={{color: "#000"}}>(Free)</small></h2>
						<p>With every website I create, I integrate Google Analytics. Integration with Google Analytics is a mandatory task for me and my team. With Google Analytics clients can get their website report. They can track the following parameter and information.</p>
						<ul>
							<li>Traffic Information</li>
							<li>Demographic Information (Visitor Locations)</li>
							<li>Real-time Traffic on your Website.</li>
							<li>Search Query</li>
							<li>User Session</li>
							<li>New user & Returing Users</li>
							<li>Page Visits</li>
							<li>Sales Conversion</li>
							<li> And Much More...</li>
						</ul>
					</div>
					<div className="col-sm-6 order-first order-md-last text-center">
						<img src={AnalyticsImage} width="80%" alt="Google Analytics 3d Icon Web Developer Gurgaon" />
					</div>
				</div>
			</div>
		</div>
		
		<div className="container">
			
			<div className="row mt-5">
				<div className="col-12 text-center">
					<h2> Technologies We use for Website Design and Development</h2>
					<p>As a full stack developer in Gurgaon, I know all the technologies which  is required to make your business Online. I have expericen on all these technologies to work.</p>
				</div>
			</div>
			<div class="tech-used flex-container">
			  <div><FaLaravel />Laravel</div>  
			  <div><FaWordpress />WordPress</div>
			  <div><FaBootstrap />Bootstrap</div>
			  <div><FaReact />React</div>  
			  <div><FaHtml5 />HTML5</div>
			  <div><FaPhp />PHP</div>
			  <div><FaShopify />Shopify</div>  
			  <div><SiGoogleads />GoogleAds</div>
			  <div><SiJavascript />JavaScript</div>
			</div>
			
			<div className="row mt-5">
				<div className="col-sm-12 why-web-imp">
					<h2>Why is Website <span className="bg-y" style={{color:"#000"}}>Important</span></h2>
					<p>Having a website #1 influencing factor for customers. You can have the most beautiful and great business in you locality, but if you dont have online presence you are losing 40% of your customers.
					</p>
					<p>
						My Website Designing and other services help manage that entire process with a focus on high quality website and Search Appearance.
					</p>
				</div>
			</div>
		</div>		
		<div className="container home-cta">
			<div class="flex-container">
			  <Link to="/work"><div> <FaWpexplorer /> See My Work	</div></Link>
			</div>
		</div>
		
		<div className="container mt-5 text-center">
			<h2>Frequently Asked Questions</h2>
			  <Link to="/website-development-cost-in-2021"><button className="btn  blog-btn" id="blog-btn1" title="website development cost in 2021">website development cost in 2022</button></Link>
			  
			  <Link to="/how-long-does-it-take-to-build-a-website"><button className="btn blog-btn" id="blog-btn2" title="How Long Does It Take to Build a Website?">How Long Does It Take to Build a Website?</button></Link>
			  
			  <Link to="/ecommerce-website-development-cost"><button className="btn  blog-btn" id="blog-btn5" title="Ecommerce Website Development - Cost?">Ecommerce Website Development - Cost?</button></Link>
			  
			  <Link to="/how-much-does-it-cost-to-make-an-app"><button className="btn  blog-btn" id="blog-btn4" title="How much does it cost to make an android app?">How much does it cost to make an android app?</button></Link>
			  
			  <Link to="/how-to-choose-world-class-design-for-your-website"><button className="btn  blog-btn" id="blog-btn3" title="How to choose world class design for your website?">How to choose world class design for your website?</button></Link>
		</div>
	</>
	);
}
export default Home;