const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.json({message:"Hello from Dockers "});
})

app.listen(port, (req, res) => {
    console.log(`Server running at port${port}`);
});