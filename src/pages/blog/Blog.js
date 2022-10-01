import {Link, useParams, Navigate} from 'react-router-dom';
import { FcBusinessman, FcCalendar} from "react-icons/fc";
import { FaSpinner} from "react-icons/fa";
import ReactHtmlParser from 'react-html-parser'
import React, { useState, useEffect } from 'react';
import useDocumentTitle from '../components/useDocumentTitle';

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
	useDocumentTitle(props.title, props.image, props.seoDesc, props.date);
	return(
		<>
		<div className="container">
			<h1 className="mt-4">{props.title} </h1>
			<span> <FcBusinessman /> {props.author}  |  <FcCalendar /> {props.date}</span>
			<img className="p-2 card-img-top mt-3 mb-3" src={props.image} alt="Blog Featured Image" style={{width:"100%"}} />
			<div> {ReactHtmlParser(props.desc)}</div>
		</div>
		</>
	);
}
const Blog = ()=>{
	const [blogs, setBlogs] = useState({});
	const [loader, setLoader] = useState(true);
	const {slug} = useParams();
	
	useEffect(() => {
		var starCountRef = firebase.database().ref('blogs/');
		starCountRef.orderByChild('slug').equalTo(slug).on("value", function(snapshot){
			console.log(snapshot.val());
			setBlogs(snapshot.val());
		});
		
		starCountRef.on('value', function(snapshot) {
		//console.log( snapshot.val());
		//setBlogs(snapshot.val());
		setLoader(false);
		});
  },[]);
  
  
  if(!blogs){
	  return( <Navigate to="/" />);
  }
  else{
	  if(loader!=true){
		  return(
		<>
			{Object.keys(blogs).map(key =>
					<BlogElement 
					title={blogs[key].Title} 
					image={blogs[key].img}
					link={blogs[key].slug}
					author={blogs[key].Author["Name"]}
					date = {blogs[key].date}
					desc={blogs[key].content}
					seoDesc={blogs[key].desc}

					/>
				)}			        
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
} 
export default Blog;