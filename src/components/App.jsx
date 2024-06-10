import React ,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

import Footer from "./end";


import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";
import OrderNow from "./OrderNow";
import ReviewsPage from "./ReviewsPage";



function App() {
 

  return (
 <Router>
 <div>
 <Header />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/about" element={<About />} />
     <Route path="/menu" element={<Menu />} />
     <Route path="/order-now" element={<OrderNow />} />
     <Route path="/reviews" element={<ReviewsPage />} />
    <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
   </Routes>
   <Footer />
 </div>
</Router>
      
  );
}
export default App;
