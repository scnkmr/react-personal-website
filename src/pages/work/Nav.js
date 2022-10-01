import {FcExpand, FcHome, FcCheckmark, FcCancel } from "react-icons/fc";
import Robot from './assets/robot.svg';
import Eyes from './Eyes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Nav(props) {
  return (
	<>
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
		<div className="jumbotron text-center" style={{marginbottom:0, backgroundColor:"#f7f8fa",paddingTop:15,paddingBottom:40}}>
	<object type="image/svg+xml" data={Robot} >Sachin Thakur | Web Designer</object>
	
	<br/><br/>	
			  <Link to="/"><button className="btn  blog-btn" id="blog-btn12"><FcHome/></button></Link>
              
			  <Link to="/website-development-cost-in-2021"><button className="btn  blog-btn" id="blog-btn1" title="website development cost in 2021">website development cost in 2021</button></Link>
			  
			  <Link to="/how-long-does-it-take-to-build-a-website"><button className="btn blog-btn" id="blog-btn2" title="How Long Does It Take to Build a Website?">How Long Does It Take to Build a Website?</button></Link>
			  
			  <Link to="/ecommerce-website-development-cost"><button className="btn  blog-btn" id="blog-btn5" title="Ecommerce Website Development - Cost?">Ecommerce Website Development - Cost?</button></Link>
			  
			  <Link to="/how-much-does-it-cost-to-make-an-app"><button className="btn  blog-btn" id="blog-btn4" title="How much does it cost to make an android app?">How much does it cost to make an android app?</button></Link>
			  
			  <Link to="/how-to-choose-world-class-design-for-your-website"><button className="btn  blog-btn" id="blog-btn3" title="How to choose world class design for your website?">How to choose world class design for your website?</button></Link>
 <br/><br/>
 <Routes>
          <Route path="/website-development-cost-in-2021">
            <One />
          </Route>
		  <Route path="/how-long-does-it-take-to-build-a-website">
            <Two />
          </Route>
		  <Route path="/ecommerce-website-development-cost">
            <Three />
          </Route>
		  <Route path="/how-much-does-it-cost-to-make-an-app">
		  <Four />
		  </Route>
		  <Route path="/how-to-choose-world-class-design-for-your-website">
		  <Five />
		  </Route>
		  <Route path="/">
            <Home />
          </Route>
        </Routes>
	<h4>MY WORK</h4>
  <FcExpand/>
</div>
    </>
  );
}

function Home() {
  return<></>;
}

function One() {
  return (<>
  <div className="jumbotron" style={{marginbottom:0, backgroundColor:"#fff",paddingTop:35,paddingBottom:35}}>
  <h2>website development cost in 2021?</h2>
  <h4 className="text-success">Starting @ ₹4999</h4>
  <div className="row">
        <div className="col-md-4">
            <div className="pricing-card p-3 text-center py-5 mt-2">
                <h6 className="mt-3">Static</h6><span className="d-block font-weight-bold mt-3"><small className="text-danger">starting @ </small>₹4,999.00</span><a href="tel:+919810932480"><button className="btn btn-primary shadow mt-4 px-5 rounded-pill" type="button">Call</button></a>
                <div className="mt-3">
				<span className="d-block"><FcCheckmark /> &nbsp;Upto 5-7 Pages</span>
				<span className="d-block"><FcCheckmark /> CMS (Wordpress)</span>
				<span className="d-block"><FcCheckmark /> Responsive Design</span>
				<span className="d-block"><FcCheckmark /> 1 Contact Form</span>
				<span className="d-block"><FcCheckmark /> 1 Business Email</span>
				<span className="d-block"><FcCancel />Ecommerce Functionality</span>
				<span className="d-block"><FcCancel />Database Integration</span>
				</div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="pricing-card p-3 text-center py-5 mt-2">
                <h6 className="mt-3">Ecommerce</h6><span className="d-block font-weight-bold mt-3"><small className="text-danger">starting @ </small>₹19,999.00</span><a href="tel:+919810932480"><button className="btn btn-primary shadow mt-4 px-5 rounded-pill" type="button">Call</button></a>
                <div className="mt-3">
				<span className="d-block"><FcCheckmark /> &nbsp;All Pages Required in Ecommerce</span>
				<span className="d-block"><FcCheckmark /> CMS</span>
				<span className="d-block"><FcCheckmark /> Responsive Design</span>
				<span className="d-block"><FcCheckmark /> 5-10 Contact Form</span>
				<span className="d-block"><FcCheckmark /> 7-10 Business Email</span>
				<span className="d-block"><FcCheckmark /> Ecommerce Functionality</span>
				</div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="pricing-card p-3 text-center py-5 mt-2">
                <h6 className="mt-3">Dynamic</h6><span className="d-block font-weight-bold mt-3"><small className="text-danger">starting @ </small>₹9,999.00</span><a href="tel:+919810932480"><button className="btn btn-primary shadow mt-4 px-5 rounded-pill" type="button">Call</button></a>
                <div className="mt-3">
				<span className="d-block"><FcCheckmark /> &nbsp;As per your Requirement</span>
				<span className="d-block"><FcCheckmark /> &nbsp;Unlimted</span>
				<span className="d-block"><FcCheckmark /> CMS or admin Panel</span>
				<span className="d-block"><FcCheckmark /> Responsive Design</span>
				<span className="d-block"><FcCheckmark /> Multiple Contact Form</span>
				<span className="d-block"><FcCheckmark /> Multiple Business Email</span>
				<span className="d-block"><FcCheckmark />Database Integration</span>
				</div>
            </div>
        </div>
    </div>
  </div>
  <Eyes />
  </>);
}

function Two() {
  return (<><div className="jumbotron" style={{marginbottom:0, backgroundColor:"#fff",paddingTop:35,paddingBottom:35}}>
  <h2>how long does it take to build a website?</h2>
  <h4 className="text-success">2 to 8 Weeks</h4>
  <p>
  Most web projects should allow for 2 to 8 weeks from the time that the project start to the time that the website launches. Where complexity is higher or the scope of the project is particularly large, projects can take 6 months or longer. Yes, completing a project in less time is possible.</p>
  </div>
  <Eyes />
  </>);
}
function Three() {
  return (<>
  <div className="jumbotron" style={{marginbottom:0, backgroundColor:"#fff",paddingTop:35,paddingBottom:35}}>
  <h2>ecommerce website development - Cost?</h2>
  <h4 className="text-success">Starting @ ₹19,999</h4>
  <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
            <div className="pricing-card p-3 text-center py-5 mt-2">
                <h6 className="mt-3">Ecommerce</h6><span className="d-block font-weight-bold mt-3"><small className="text-danger">starting @ </small>₹19,999.00</span><a href="tel:+919810932480"><button className="btn btn-primary shadow mt-4 px-5 rounded-pill" type="button">Call</button></a>
                <div className="mt-3">
				<span className="d-block"><FcCheckmark /> &nbsp;All Pages Required in Ecommerce</span>
				<span className="d-block"><FcCheckmark /> CMS</span>
				<span className="d-block"><FcCheckmark /> Responsive Design</span>
				<span className="d-block"><FcCheckmark /> 5-10 Contact Form</span>
				<span className="d-block"><FcCheckmark /> 7-10 Business Email</span>
				<span className="d-block"><FcCheckmark /> Ecommerce Functionality</span>
				</div>
            </div>
        </div>
        <div className="col-md-4">
        </div>
    </div>
  </div>
  <Eyes />
  </>);
}
function Four() {
  return (<>
  <div className="jumbotron" style={{marginbottom:0, backgroundColor:"#fff",paddingTop:35,paddingBottom:35}}>
  <h2>how much does it cost to make an android app?</h2>
  <h4 className="text-success">Starting @ ₹14,999</h4>
  <div className="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Type of app</th>
        <th>Time to develop</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Simple</td>
        <td>3-6 months</td>
        <td> ₹14,999 - ₹39,999 </td>
      </tr>
      <tr>
        <td>Medium</td>
        <td>6-10 months</td>
        <td>₹24,999 - ₹59,999</td>
      </tr>
      <tr>
        <td>Complex</td>
        <td>10+ months</td>
        <td>₹49,999 - ₹79,000+</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  <Eyes />
  </>);
}
function Five() {
  return (<>
  <div className="jumbotron" style={{marginbottom:0, backgroundColor:"#fff",paddingTop:35,paddingBottom:35}}>
  <h2>how to choose world class design for your website?</h2>
  <h5 className="text-success">ensure the quality of work</h5>
  <h5 className="text-success">quickly review past work</h5>
  <h5 className="text-success">choose designer who think about your customers</h5>
  <br/>
  <a href="https://www.websitebuilderexpert.com/designing-websites/criteria-to-choosing-website-template-design/">
 (Read More) 3 Simple Criteria To Help You Choose Your Website Template Design</a>
  </div>
  <Eyes />
  </>);
}

export default Nav;
