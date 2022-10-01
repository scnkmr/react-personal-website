import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import myDp from './me.jpg'

const theme = {
  background: '#f7f8fa',
  fontFamily: 'Calibri',
  headerBgColor: '#222',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#fefaf6',
  botFontColor: '#4a4a4a',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
let config={
	botAvatar:myDp,
	headerTitle:"👦 Let's Talk!",
};
if(window.screen.width<620){
	config ={
	  floating: true,
	  	botAvatar:myDp,
		headerTitle:"👦 Let's Talk!",
	  /*floatingStyle:{left: "0px	"},*/
	};
}
class SimpleForm extends Component {
  render() {
    return (
      <div>
	  <ThemeProvider theme={theme}>
	  <ChatBot
	  steps={[
            {
              id:'intro', 
              message:'Hi! I’m Sachin\'s Bot 👀 ', 
              trigger:'intro-user',
            },
			{
				id:'intro-user',
				message: 'I’m just like Sachin, but a far better conversationalist 😉',
				trigger:'intro2',
			},
			{
				id:'intro2',
				message:'How can I help you today?',
				trigger:'menu',
			},
            {
              id:'menu', 
              options:[
              {value:'mentorship', label:'🎓 Interested in mentorship', trigger:'trigger_mentorship'},
              {value:'oldsite', label:'🌐 Looking for your old site', trigger:'trigger_oldsite'},
			  {value:'hireme', label:"🏆 I'd like to hire you!", trigger:'trigger_hireme'},
			  {value:'hi', label:'👋 I just wanted to say hello', trigger:'trigger_hi'},{
				  value:'whaticando', label:'What you can do for me?', trigger:'whaticando',
			  }
              ] 
            },
            {
              id:'trigger_mentorship', 
              message:'Great! There is a Computer Academy run by me.', 
              trigger:'admission',
            },
			{
				id:'admission',
				component: (
        <span> You can take admission there <br/><a href="https://gfca.in" target="_blank">www.gfca.in <br/>Know More!</a></span>
      ),
      asMessage: true,
	  trigger:'menu',
			},
            {
              id:'trigger_oldsite', 
              component: (
        <span> <a href="https://sachin-arayans.web.app/" target="_blank">Click Here</a></span>
      ),
      asMessage: true,
	  trigger:'menu',
            },
			{
              id:'trigger_hireme', 
              message:'Ok, great!', 
			  trigger: 'hireme2',
            },
			{
				id:'hireme2',
				message:'Exciting times',
				trigger:'hireme3',
			},
			{
				id:'hireme3',
				message:'Send me a message and lets chat further!',
				trigger:'callme',
			},
			{
				id:'whatsappme',
				component: (
					<span> <a href="https://api.whatsapp.com/send?phone=+919810932480&text=I%27d%20Like%20to%20hire%20you" target="_blank">WhatsApp!</a></span>
				  ),
				asMessage: true,
				trigger: 'menu',
			},
			{
				id:'callme',
				component: (
					<span> <a href="tel:+919810932480" target="_blank">Call me!</a></span>
				  ),
				asMessage: true,
				trigger: 'whatsappme',
			},
			{
              id:'trigger_hi', 
              message:'Hello!', 
              trigger:'hi2',
            },
			{
				id:'hi2',
				message:'Thanks for saying hi 😁',
				trigger:'hi3',
			},
			{
				id:'hi3',
				message:'I hope you\'ve enjoyed browsing my work',
				trigger:'hi4',
			},
			{
				id:'hi4',
				message:'Can I help you with anything else?',
				trigger:'menu',
			},
			{
				id:'whaticando',
				message:'I can make All type of Website with Beautiful User Interface for your Business.',
				trigger:'menu',
			},
         ]}
		 {...config}
		 />
		 </ThemeProvider>
      </div>
    );
  }
       
}

export default SimpleForm;