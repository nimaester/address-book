const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const connectDb = require('./config/db');
const path = require('path');

connectDb();

app.use(express.json({extended: false}));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});


