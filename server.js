const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

mongoose.connect("mongodb://localhost:27017",{useNewUrlParser: true, useUnifiedTropoly: true})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


