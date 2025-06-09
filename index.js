const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hii baby ga love you soo much [D2W LB]');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

