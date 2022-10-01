import { FcCamcorderPro } from "react-icons/fc";



function Work(props) {
  return (
	<>
      <h2><FcCamcorderPro/> | {props.title}</h2>
	  <img src={props.singleImage} className="work-img"/>
      <br/><br/>
      <p>{props.desc}</p>
      <hr/>
    </>
  );
}

export default Work;
