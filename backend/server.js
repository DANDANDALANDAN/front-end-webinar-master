const express = require ("express");
const bodyParser = require ("body-parser");

const app = express ();

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

/* Routes */
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

console.log("TitoDev");