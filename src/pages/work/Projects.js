import { FcCamcorderPro } from "react-icons/fc";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import TheTypers from './assets/thetypers.png';
import YoutubeThumbnail from './assets/yt.png';
import PhpLibrary from './assets/phplibrary.jpg';
import WebScrapping from './assets/webscrapping.jpg';
import Selenium from './assets/selenium.jpg';



function Projects(props) {
  return (
	<>
		<br/>
        <div className="row" >
            <div className="col-6">
                <h5 className="mb-3">Some awesome projects </h5>
            </div>
            <div className="col-6 text-right">
                <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <FaArrowLeft/>
                </a>
                <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
					<FaArrowRight/>
                </a>
            </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={TheTypers} />
                                        <div className="card-body">
                                            <h5 className="card-title">Typing Software</h5>
                                            <p className="card-text">The software help you to learn fast Typing with amazing experience.
											<p style={{color:"#fff", fontSize:"18px"}}><span className="badge bg-info">Ajax</span> <span className="badge bg-info">PHP</span> <span className="badge bg-info">JS</span></p>
											</p>
											
											<button className="btn btn-sm">Visit Website</button>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={YoutubeThumbnail} />
                                        <div className="card-body">
                                            <h5 className="card-title">YT Thumbnail Editor</h5>
                                            <p className="card-text">The software help you to design new youtube thumbnails.
											<p style={{color:"#fff", fontSize:"16px"}}><span className="badge bg-info">FabricJS</span> <span className="badge bg-info">Jquery</span> <span className="badge bg-info">ES6</span></p>
											</p>
											<button className="btn btn-sm">Visit Website</button>
                                        </div>
                                    </div>
                                </div>
								
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={PhpLibrary} />
                                        <div className="card-body">
                                            <h5 className="card-title">PHP Library</h5>
                                            <p className="card-text">PHP Library to make connection and perform various database functions
											<p style={{color:"#fff", fontSize:"16px"}}><span className="badge bg-info">PHP</span> <span className="badge bg-info">MySQL</span></p>
											</p>
											<a href="https://github.com/scnkmr/sql_database_connection_php_library" target="_blank"><button className="btn btn-sm">Github</button></a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={WebScrapping} />
                                        <div className="card-body">
                                            <h5 className="card-title">Web Scrapping</h5>
                                            <p className="card-text">Web Scrapping Using Python and BeautifulSoup Library.
											<p style={{color:"#fff", fontSize:"16px"}}><span className="badge bg-info">Python</span> <span className="badge bg-info">BeautifulSoup</span></p>
											</p>
											
											<a href="https://github.com/scnkmr/flipkart_iphone" target="_blank"><button className="btn btn-sm">Github</button></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src={Selenium} />
                                        <div className="card-body">
                                            <h5 className="card-title">Selenium Automation</h5>
                                            <p className="card-text">Application Send Automated Whatsapp Messages using Selenium.
												<p style={{color:"#fff", fontSize:"16px"}}><span className="badge bg-info">Python</span> <span className="badge bg-info">Selenium</span></p>
											</p>
											<a href="https://github.com/scnkmr/selenium_whatsapp_automation" target="_blank"><button className="btn btn-sm">Github</button></a>

                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Projects;
