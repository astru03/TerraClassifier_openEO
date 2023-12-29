const express = require('express');

const app = express();
const port = process.env.PORT || 8080

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000', // Erlaubt Anfragen von Ihrem Frontend
    optionsSuccessStatus: 200 // Für ältere Browser, die nicht standardmäßig 204 senden
  };
app.use(cors(corsOptions));


// Annahme: Ein einfacher Endpunkt, der die empfangene Zahl verdoppelt und zurückgibt
app.post('/process-number', (req, res) => {
  const receivedNumber = req.body.number;
  const processedNumber = receivedNumber * 2; // Veränderung der empfangenen Zahl

  // Sendet die veränderte Zahl als JSON zurück
  res.json({ result: processedNumber });
});


//Listener
app.listen(port, () => {
    console.log(`Backend Service listening at http://localhost:${port}`)
  });
