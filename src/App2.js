import React, { useState, useEffect } from 'react';
import './App.css';
import Work from './Work';
import Projects from './Projects';
import About from './About';
import Nav from './Nav';
import image_loader from './assets/LoadingAnimation.gif';

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

function App() {
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
  if(loader!=true){
  return (
    <>
	<Nav/>
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

export default App;
