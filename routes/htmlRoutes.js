const axios = require("axios");
const cheerio = require("cheerio")

module.exports = function(app) {
  app.get("/", function(req, res) {
    axios.get("https://www.billboard.com/charts/hot-100")
      .then(function(response) {
        const $ = cheerio.load(response.data);

        $("div.chart-list")
          .children("div.chart-list-item").each(function(i, element) {
            // console.log($(this).children("div.chart-list-item__first-row").children("div.chart-list-item__text-wrapper").children("div.chart-list-item__text").children("div.chart-list-item__title").text())
            console.log($(this).attr("data-artist"));
            console.log($(this).attr("data-title"));
          }); 
      });
  });
};