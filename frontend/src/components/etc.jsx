import Reviews from "./review";
import addReview from "./addreview";
import axios from "axios";


const [reviews, setReviews] = useState([
    { text: "Amazing coffee! Best mocha I've ever had.", author: "John Doe" },
    { text: "A delightful experience, from the ambiance to the taste.", author: "Jane Smith" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3000/reviews');
      setReviews(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddReview = async (review) => {
    try {
      const response = await axios.post('http://localhost:3000/reviews', review);
      setReviews([...reviews, response.data]);
    } catch (err) {
      console.error(err);
    }
  };
  <div className="App">
  <ReviewSection reviews={reviews} onAddReview={() => setIsModalOpen(true)} />
      <AddReviewModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </div>


import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
const { Pool } = pg;

const app = express();
const port = 3000;

const dbpool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mocha_delight",
    password: "Nova258@",
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.get('/reviews', async (req, res) => {
  try {
    const result = await dbpool.query('SELECT * FROM reviews');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.post('/reviews', async (req, res) => {
  try {
    const { text, author } = req.body;
    const result = await dbpool.query(
      'INSERT INTO reviews (text, author) VALUES ($1, $2) RETURNING *',
      [text, author]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


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

return (<header>
  <div id="headerback">
    <h1 id="header">Mocha Delight</h1>
  </div>
  <nav>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#menu">Menu</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
    <div><a id="signin" href="#signup">Sign in</a></div>      
  </header>
);
<SignUpModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSignUp={handleSignUp}
        />

        userName={userName} onSignUpClick={() => setIsModalOpen(true)} 