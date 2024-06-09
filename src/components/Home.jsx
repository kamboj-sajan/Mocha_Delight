import React from "react";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";
import Body4 from "./Body4";
import "../css/Home.css"

const shop_name = "Mocha delight";
const shop_address = "Hotel Aquamarine, Ground Floor, Himalaya Marg, Sector 22C, Chandigarh, 160022";
const shop_phone = "+03504555";
const shop_timings = "9:00-20:00";


function Home() {
  return (
     <div>
      <Body1 />
      <Body2 /> 
      <div id="mapc">
      <div className="address">
        <h1>{shop_name}</h1>
        <p>{shop_address}</p>
        <p>Phone: {shop_phone}</p>
        <p>Open Hours: {shop_timings}</p>
        <div className="map">
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(shop_address)}&output=embed`}
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
