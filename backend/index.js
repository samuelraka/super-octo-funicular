import express from "express";
import cors from "cors";
import TanyaRoute from "./routes/TanyaRoute.js";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sekarang Anda dapat menggunakan __dirname seperti biasa.

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(TanyaRoute);

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
