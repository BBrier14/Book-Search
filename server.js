//-----Requirements-----//
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

//-----Port-----//
const PORT = process.env.PORT || 3001;

//-----Body Parsing for AJAX requests-----//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//-----Allowing Routes-----//
app.use(routes);

//-----MongoDB Connect-----// 
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

//-----Listener-----//
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);