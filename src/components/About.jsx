import React from "react";
import Section from "./secabout";
import "../css/About.css";

function About(){
  return (
    <div className="about-page">
      <Section
        imgSrc="/11.jpg"
        title="The origin. An eccentric personality"
        description="The charismatic Kevin Hart inaugurated Mocha delight shortly after the success of his entertainment career as an extension of his vibrant persona: A dynamic space where a diverse and lively crowd of the city's most intriguing individuals from various creative fields congregate to exchange ideas and inspiration beyond the confines of conventional settings."
      />
      <Section
        imgSrc="/cofee.jpg"
        title="The Ambience: A Visual Delight"
        description="Our café is decorated with a vibrant and playful pop art theme that is sure to delight customers of all ages. The walls are adorned with oversized prints of iconic pop art images, creating a lively and engaging atmosphere. The combination of vintage and modern elements creates an interesting contrast that is both playful and sophisticated, offering a unique and captivating experience in the heart of Sector 22, Chandigarh.

"
      />
      <Section
        imgSrc="/cofee2.jpg"
        title="The Menu: A Celebration of Flavors"
        description="We offer a diverse and delightful selection of coffees, cookies, and cakes. We believe that food and drink are universal languages that bring people together, and we celebrate this diversity in every cup and bite. Each item is made with the freshest ingredients and prepared to perfection, showcasing unique flavors and techniques that promise to delight your taste buds."
      />
    </div>
  );
};

export default About;
