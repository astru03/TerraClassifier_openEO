const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', // Erlaubt Anfragen von Ihrem Frontend
    optionsSuccessStatus: 200 // Für ältere Browser, die nicht standardmäßig 204 senden
  };

app.use(cors(corsOptions));

//Listener
app.listen(port, () => {
    console.log(`Backend Service listening at http://localhost:${port}`)
  });
