import React from "react";
import cafeImage from "./body2.jpg"
import "../css/Body2.css"

function Body2(){
    return (
        <div className="body2">
          <div className="body2_img">
            <img src={cafeImage} alt="Mocha Delight Cafe" />
          </div>
          <div className="body2_txt">
            <h2>The Story</h2>
            <p>
              Established in 2015, Mocha Delight is a cozy cafe nestled in Chandigarh's bustling Sector 22. Our cafe is designed with a warm, welcoming atmosphere featuring comfortable seating and a variety of unique decor elements.
            </p>
            <p>
              We offer a diverse menu that includes delicious coffees, fresh pastries, savory snacks, and healthy salads. Whether you're here for a quick coffee break, a casual meal, or a relaxing evening, Mocha Delight has something to offer everyone.
            </p>
            <p>
              "Mocha Delight is the perfect blend of comfort and cuisine, offering a friendly atmosphere, a diverse menu, and excellent service."
            </p>
           
          </div>
        </div>
      );
    };


export default Body2;    