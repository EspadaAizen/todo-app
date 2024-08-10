require('dotenv').config();  // Ensure this is at the top

const connectToMongo = require('./db'); // Adjust the path as necessary
const express = require('express');
const cors = require('cors');

console.log(`Mongo URI: ${process.env.MONGO_URI}`);  // Log to check if the URI is being read correctly

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`TODO-App listening on port http://localhost:${port}`);
});
