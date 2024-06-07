import React from 'react';
import "../css/ffooter.css"

function Footer(){
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Mocha Delight</h2>
      </div>
      <div className="footer-section">
        <h3>NAVIGATE</h3>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Catering</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Order</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>LOCATIONS</h3>
        <p>Hotel Aquamarine, Ground Floor,<br/>
        Himalaya Marg, Sector 22C<br/>
        Chandigarh, 160022<br/>
        +03504555
        </p>
      </div>
      <div className="footer-section">
        <h3>HOURS</h3>
        <p>Mon 7am-6pm<br/>
           Tue-Fri 7am-8pm<br/>
           Weekends: 7:30am-6pm
        </p>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
      </div>
      <div className="footer-legal">
        <p>&copy; 2023 Little Collins. <a href="#">Legal</a>. Website by <a href="#">Headword</a>!</p>
      </div>
    </footer>
  );
};

export default Footer;
