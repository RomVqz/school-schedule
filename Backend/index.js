const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const canisterUrl = process.env.CANISTER_URL;

app.use(bodyParser.json());

app.get('/api/schedules', async (req, res) => {
    try {
        const response = await axios.post(canisterUrl, {
            method: 'listEntries',
            args: []
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.post('/api/schedules', async (req, res) => {
    try {
        const entry = req.body;
        const response = await axios.post(canisterUrl, {
            method: 'addEntry',
            args: [entry]
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
