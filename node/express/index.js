const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
    console.log(`default router reached!`);
    res.send(`Hello from router!`);
})

app.listen(app.get("port"), () => {
    console.log(`express app listening on port ${app.get("port")}`)
})