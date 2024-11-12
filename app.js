const express = require('express');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // Serve static files

// Redirect back to home 
app.get('/', (req, res) => {
  res.redirect('/home');
});

// GET data from each html page within the 'public' folder
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/Home.html'); // send HTML file on GET request
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/About.html'); // send HTML file on GET request
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/Contact.html'); // send HTML file on GET request
});


app.post('/submit-form', (req, res) => {
    const fname = req.body.fname; // access form data
    const lname = req.body.lname;
    const email = req.body.email;
    // Add validation logic here
    res.send(`Firstname: ${fname} Password: ${lname} Email:${email}`);});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
 
});