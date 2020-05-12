$(document).ready(function() {
    function buildQueryURL() {
    
        const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?appid=9c1480bb07587e3a3255beba58c2b60d"
    
        const cityEl = $("#cityID");
        console.log(cityEl.val());
    
        const cityToSearch = "&q=" +'orlando'
    
        const finalUlr = baseUrl + cityToSearch;
        
        console.log(finalUlr);

        $.ajax({
            url: finalUlr,
            method: "GET"
          }).then(function(response) {

            for (var i = 0; i < response.list.length; i++) {
                //console.log(response.list[i])
                console.log(response.list[i].main);
                console.log(response.list[i].weather);
                console.log(response.list[i].wind);  

            }
            const cityEl = $("<city>");
            $("<city>").text("city: ", cityEl);
            $(cityEl).append(".city");
            console.log(cityEl);

            const dateEl = $("<date>");
            $("<date>").text("date: ", response.list[i]);
            

            $(".temp").text("temp: ", response.list[i]);
            $(".wind").text("wind speed: ", response.list[i]);
              
          });
    }
    
    buildQueryURL()
});
