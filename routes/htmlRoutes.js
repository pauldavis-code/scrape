const axios = require("axios");
const cheerio = require("cheerio")

module.exports = function(app) {
  app.get("/", function(req, res) {
    axios.get("https://www.billboard.com/charts/hot-100")
      .then(function(response) {
        const $ = cheerio.load(response.data);
        let songData = [];

        $("div.chart-list")
          .children("div.chart-list-item").each(function(i, element) {
            // console.log($(this).attr("data-title"));
            // console.log($(this).attr("data-artist"));
            songData.push({
              title: $(this).attr("data-title"),
              artist: $(this).attr("data-artist")
            });
            // console.log(songData)
          });
          res.render("test", {songData: songData}) 
      });
  });
};