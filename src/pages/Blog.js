import {Link} from 'react-router-dom';
import { FcBusinessman, FcCalendar} from "react-icons/fc";
import { FaSpinner} from "react-icons/fa";
import ReactHtmlParser from 'react-html-parser'
import React, { useState, useEffect } from 'react';
import useDocumentTitle from './components/useDocumentTitle';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
//import * as firebase from 'firebase';
// Add the Firebase services that you want to use
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

 var database = firebase.database();
 
const BlogElement = (props) =>{
	return(
		<>
			<div className="col-md-6 col-xl-4" style={{marginBottom:"20px"}}>
					<div className="card" style={{width:"400px"}}>
<img className="card-img-top" src={props.image} alt="Blog Featured Image" style={{width:"100%"}} />
						<div className="card-body">
						  <h2 className="card-title">{props.title}</h2>
						  <p className="card-text"> <FcBusinessman /> {props.author}  |  <FcCalendar /> {props.date}</p>
						  <a href={"/blog/"+props.link} className="btn btn-primary stretched-link">Read More</a>
						</div>
					  </div>
				</div>
		</>
	);
}
const Blog = ()=>{
	const [blogs, setBlogs] = useState({});
	const [loader, setLoader] = useState(true);
	
	useEffect(() => {
		var starCountRef = firebase.database().ref('blogs/');
		starCountRef.on('value', function(snapshot) {
		console.log( snapshot.val());
		setBlogs(snapshot.val());
		setLoader(false);
		});
  },[]);
  
  useDocumentTitle('Blogs, Business Case Studies','https://www.sachinthakur.in/me.webp' ,'Business Case Study, Startup Blogs, Economic blogs, Sachin Thakur Blogs, Sachin Arayans Freelance Web Developer\'s Blog');
  
  if(loader!=true){
	  return(
		<>
		<div className="container">
			<h2 className="text-center"> Blog </h2>
			<div className="row">
				{Object.keys(blogs).map(key =>
					<BlogElement 
					title={blogs[key].Title} 
					image={blogs[key].img}
					link={blogs[key].slug}
					author={blogs[key].Author["Name"]}
					date = {blogs[key].date}

					/>
				)}
				
			</div>
		</div>			        
		</>
	);
  }
  else{
	  return(
	  <>
		<div className="container text-center p-5">
			<FaSpinner className="icon_pulse" style={{fontSize:"50px"}} />
		</div>
	  </>
	  );
  }
	
} 
export default Blog;