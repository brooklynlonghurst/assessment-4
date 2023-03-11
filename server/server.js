const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createFortune, updateFortune, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get('/api/fortune', getFortune)

app.post('/api/fortune', createFortune)

app.put('/api/fortune/:update', updateFortune)

app.delete('/api/fortune/:remove', deleteFortune)



app.listen(4000, () => console.log("Server running on 4000"));
