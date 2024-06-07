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
