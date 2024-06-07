import React ,{useState,useEffect} from "react";
import Header from "./Header";
import Body1 from "./Body1";
import Body2 from "./Body2";
import MenuList from "./MenuList";
import menuItems from "./menuitems";
import axios from "axios";
import "../css/address.css"
import Footer from "./end";
import Body3 from "./Body3";


function App() {
  const [shop, setShop] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/shop')
      .then(response => {
        setShop(response.data);
      })
      .catch(error => {
        console.error( error);
      });
  }, []);

  if (!shop) return <div>Loading...</div>;
 

  return (
    <div>
      <Header />
      <Body1 />
      <Body2 />
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
    <Body3 />
    <Footer />
      </div>

      
  );
}
export default App;
