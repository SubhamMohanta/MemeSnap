const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const memedata = require('./data/database');
const cors = require('cors')
app.use(cors())

const { ConnectToDB, stopDatabase, isConnected } = require('./db');
const router = require('./routes/route');
app.use(express.json())

// app.get('/data', (req, res) => {
//   res.send(memedata)
// });

app.use('/api', router);

// Updated home route
app.get('/', async (req, res) => {
  const dbStatus = isConnected() ? 'disconnected' : 'connected';
  res.send({
    message: 'o_O',
    database: dbStatus,
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port} http://localhost:${port}/`);
    ConnectToDB()
  });
}