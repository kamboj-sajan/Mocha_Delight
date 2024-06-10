import React from "react";
import "../css/contact.css";
import axios from "axios";

function Contact() {
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    numberOfPeople: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-one-flame.vercel.app/contact', formData);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

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
          <p>Sector 22C Chandigarh, 160022</p>
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
      <div className="form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name (required)</label>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address (required)</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Subject (required)</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message (required)</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Number of People (Please include number of people if making a booking)</label>
            <select
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
