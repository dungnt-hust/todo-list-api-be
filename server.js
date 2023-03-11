const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//Setup server port
const port = process.env.PORT || 5000;

//parse requests
app.use(bodyParser.urlencoded({extended: true}));

//parse requests .... json
app.use(bodyParser.json());

//define a root route
app.get('/', (req, res) => {
    res.send('Welcome to my website');
});

const taskRouter = require('./src/routers/task.route');

app.use('/api/v1/task', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});