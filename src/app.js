const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const routes = require("./routes/routes");
app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
