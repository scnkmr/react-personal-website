import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Work.css';
import Work from './Works';
import Projects from './Projects';
import About from './About';
//import Nav from './Nav';
import image_loader from './assets/LoadingAnimation.gif';
import Robot from './assets/robot.svg';
import useDocumentTitle from '../components/useDocumentTitle';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
//import * as firebase from 'firebase';

// Add the Firebase services that you want to use
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1L1vKHL2t3KtYwTZ_wA5j2N5IcUhHSnY",
  authDomain: "my-work-55b9f.firebaseapp.com",
  databaseURL: "https://my-work-55b9f.firebaseio.com",
  projectId: "my-work-55b9f",
  storageBucket: "my-work-55b9f.appspot.com",
  messagingSenderId: "555358678978",
  appId: "1:555358678978:web:e267e1d006fdb3b118305b",
  measurementId: "G-SGX8RF91R2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 var database = firebase.database();

function Workp() {
	const [projects, setProjects] = useState({});
	const [abouts, setAbouts] = useState({});
	const [loader, setLoader] = useState(true);
	
	useEffect(() => {
		var starCountRef = firebase.database().ref('projects/');
		starCountRef.on('value', function(snapshot) {
		//console.log( snapshot.val());
		setProjects(snapshot.val());
		});
		var about = firebase.database().ref('me/');
		about.on('value', function(snapshot) {
		//console.log( snapshot.val());
		setAbouts(snapshot.val());
		setLoader(false);
		});
  },[]);
  
  useDocumentTitle('Recent Works | Portfolio', 'https://www.sachinthakur.in/me.webp', 'Hi, I"m Sachin Thakur. Freelance Web Developer and Programmer, Lives in Gurgaon. Now availabe for you. You can Explore my recent work here.');
  
  if(loader!=true){
  return (
    <>
	<div className="jumbotron text-center" style={{marginbottom:0, backgroundColor:"#f7f8fa",paddingTop:15,paddingBottom:40}}>
	<object type="image/svg+xml" data={Robot} >Sachin Thakur | Web Designer</object>
	</div>
<div className="container" style={{margintop:30}}>
  <div className="row">
	<About 
	name={abouts.name}
	img={abouts.img}
	desc={abouts.desc}
	position={abouts.position}
	/>   
	<div className="col-sm-8">
      {Object.keys(projects).map(key => 
			<Work 
			title={projects[key].title} 
			images={projects[key].images}
			singleImage={projects[key].screenShot}
			caption="This is caption" 
			desc={projects[key].desc}
			key={[key]}
			/>
		)}
		
		<Projects title="This is Title"/>
    </div>
  </div>
</div>	
    </>
  );
  }
  else{
	  return(
	  <>
	  <div style={{background:`url(${image_loader})`, backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'center' ,width:'100%',height:'100vh'}}></div>
	</>
	  );
  }
}

export default Workp;
