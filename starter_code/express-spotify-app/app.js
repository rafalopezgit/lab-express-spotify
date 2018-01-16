const express = require("express");
const app = express();

var SpotifyWebApi = require("spotify-web-api-node");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Remember to paste here your credentials
var clientId = "a279126b80a74118a276f44d8d7bd1be",
  clientSecret = "0aa428f19ae8498a8dbf2d6604e73d7e";

var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function(err) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);

// Iteration 1:
app.get("/", (req, res, next) => {
  res.render("search");
});

// Iteration 2:
app.post("/", (req, res, next) => {
  res.render("artists");
});

// Server Started
app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
