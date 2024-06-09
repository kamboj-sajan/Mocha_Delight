import React from "react";
import "../css/contact.css"

function Contact() {
  return (
    <div className="contact">
    <h1>CONTACT US</h1>
    <div className="contact2">
      <div className="contact3">
        <h2>Call Us</h2>
        <p>9881111220</p>
        <p>9841112233</p>
      </div>
      <div className="contact3">
        <h2>Our Location</h2>
        <p>Hotel Aquamarine, Ground Floor, Himalaya Marg</p>
        <p>Sector 22C
        Chandigarh, 160022</p>
      </div>
      <div className="contact3">
        <h2>Write To Us</h2>
        <p>mochadelight11@gmail.com</p>
      </div>
      <div className="contact3">
        <h2>Follow Us</h2>
        <p><a href="https://www.instagram.com/">www.instagram.com/Mocha_Delight</a></p>
      </div>
    </div>
  </div>
  );
}

export default Contact;
