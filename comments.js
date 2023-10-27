// Create web server// Import required modules
import express from 'express';

// Create an instance of express
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
