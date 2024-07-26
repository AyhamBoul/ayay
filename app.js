const express = require('express');
const app = express();
const registerRouter = require('./api/register');

app.use(express.json());
app.use('/api', registerRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});