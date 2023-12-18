const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("../routes/apiRoutes");

const server = express()
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017",{useNewUrlParser: true, useUnifiedTropoly: true})

connectDB();

app.use('/api', apiRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });





