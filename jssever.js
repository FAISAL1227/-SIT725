const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// GET endpoint for adding two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    
    const result = num1 + num2;
    res.json({ result });
});

// POST endpoint for calculator operations
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;

    switch (operation) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            if (parseFloat(num2) === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});