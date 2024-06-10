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
         <li><Link to="/menu">Cafe-menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/order-now">Order</Link></li>
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

    </footer>
  );
};

export default Footer;
