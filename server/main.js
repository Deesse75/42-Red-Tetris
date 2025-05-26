const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, World via the back!');
}
);

app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
}
);
