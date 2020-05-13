$(document).ready(function () {
  function buildQueryURL() {

    const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?appid=9c1480bb07587e3a3255beba58c2b60d"

    const cityEl = $("#cityID")
      .val()
      .trim();

    const cityToSearch = "&q=" + cityEl;

    const finalUlr = baseUrl + cityToSearch;

    console.log(finalUlr);

    $.ajax({
      url: finalUlr,
      method: "GET"
    }).then(function (response) {

      const res = response.list;

      for (var i = 0; i < res.length; i++) {
        //console.log(response.list[i])
        console.log("TEMP", res[i].main.temp);
        console.log("HUMIDITY", res[i].main.humidity);
        console.log("WIND", res[i].wind.speed);

        const cityEl = $("<h2>").text("city: " + cityID);
        $(".weatherCards").append(cityEl);

        const dateEl = $("<h3>").text("date: " + res[i].dt_txt);
        $(".weatherCards").append(dateEl);

        const tempEl = $("<h4>").text("temp: " + res[i].main.temp);
        $(".weatherCards").append(tempEl);

        const windEl = $("<p>").text("wind speed: " + res[i].wind.speed);
        $(".weatherCards").append(windEl);
      }

    });
  }

  $("#searchCity").on("click", function (event) {
    event.preventDefault();

    buildQueryURL();
  })
});
