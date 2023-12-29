const express = require('express');
const app = express()
const port = process.env.PORT || 3000



//Folders
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

//Gets
app.get("/", (req, res) => { res.sendFile(__dirname + "/public/startseite.html"); });
app.get("/klassifikation", (req, res) => { res.sendFile(__dirname + "/public/klassifikation.html"); });



//Listener
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})