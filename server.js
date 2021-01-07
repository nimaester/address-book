const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require('./config/db');
const path = require('path');

connectDb();

app.use(express.json({extended: false}));

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => (
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  ))
}
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});


