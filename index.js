import express from 'express';
import bodyParser from 'body-parser';
import productsRouter from "./src/routes/products.js"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/products", productsRouter);

app.listen(port, () => {
    console.log(`Server Running On Port ${port}`);
});