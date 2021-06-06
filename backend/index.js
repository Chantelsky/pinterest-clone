// TODO: Set up backend to hide API key
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hellos World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
