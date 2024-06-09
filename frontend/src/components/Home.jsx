import React from "react";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Body4 from "./Body4";
import "../css/Home.css"


function Home({ shop }) {
  return (
    <div>
      <Body1 />
      <Body2 /> 
      <div id="mapc">
      <div className="address">
        <h1>{shop.name}</h1>
        <p>{shop.address}</p>
        <p>Phone: {shop.phone}</p>
        <p>Open Hours: {shop.open_hours}</p>
        <div className="map">
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(shop.address)}&output=embed`}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
        </div>
      </div>
      <Body3 />
     <Body4 />
    </div>
  );
}

export default Home;
