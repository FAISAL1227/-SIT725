const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to add two numbers
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).send('Both numbers are required.');
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    res.json({ result: sum });
});

// Endpoint for subtraction
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).send('Both numbers are required.');
    }
    const difference = parseFloat(num1) - parseFloat(num2);
    res.json({ result: difference });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});