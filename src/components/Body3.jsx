import React from 'react';
import "../css/Body3.css";
import backgroundImage from "../Body3.jpg";

function Body3(){
  return (
     <div className="body3" style={{ backgroundImage: `url(${backgroundImage})` }}>
     <div className="overlay">
       <div className="content">
         <p>FIND US ON SOCIAL</p>
         <h1>@Mocha_Delight</h1>
         <div className="icons">
           <a href="#"><i className="fab fa-instagram"></i></a>
           <a href="#"><i className="fab fa-twitter"></i></a>
           <a href="#"><i className="fab fa-facebook-f"></i></a>
         </div>
       </div>
     </div>
   </div>
  );
};

export default Body3;
