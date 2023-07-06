const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, () => {
  console.log('sucessfully listening on port 3000');
});