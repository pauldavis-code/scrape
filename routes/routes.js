const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    axios.get("https://www.billboard.com/charts/hot-100")
      .then(function(response) {
        const $ = cheerio.load(response.data);
        let songData = [];

        $("div.chart-list").find("div.chart-list-item").each(function(i, element) {
            // console.log($(this).attr("data-title"));
            // console.log($(this).attr("data-artist"));
            console.log($(this).find("div.chart-list-item__image-wrapper").find("img").attr("src"))
            songData.push({
              title: $(this).attr("data-title"),
              artist: $(this).attr("data-artist")
              // picture: $(this).children("div.chart-list-item__image-wrapper").find("img").attr("src")
            });
            // console.log(songData)
          });
          res.render("test", {songData: songData}) 
      });
  });

  app.get("/song/:selected", function(req, res) {
    let selected = req.params.selected;
    console.log(selected)
    db.Comment.find({song: selected})
      .then(function(comments) {
      console.log(comments)
      const data = {
        song: selected,
        comments: comments
      };

      res.render("selectedComments", {data: data});
    }).catch(function(error) {
      console.log(error)
    });
  })

  app.post("/api/:song", function(req, res) {
    let song = req.params.song;

    db.Comment.create(req.body)
      .then(function(data) {
        res.json(data)
      })
      .catch(function(error) {
        res.json(error);
      })
  })
};
