$(document).ready(function() {
  //Check if location data is available
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      //Cusotmize apt to use current lat and long
      var api =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "";
      //JSON call from api set to variables
      $.getJSON(api, function(wdat) {
        var weather = wdat.weather[0].main;
        var description = wdat.weather[0].description;
        var icon = wdat.weather[0].icon;
        var windSpeed = wdat.wind.speed;
        var windDir = wdat.wind.deg;
        var celsius = wdat.main.temp;
        var fahrenheit = Math.round(celsius * 9 / 5 + 32);
        //Add data elements to page by ID
        $("#icon").html('<img src="' + icon + '">');
        $("#temp").html(fahrenheit);
        $("#description").html(description);
        $("#tempChanger").html('<b>&#8457;</b> | <i>&#8451;</i>');
        $("#tempChanger").click(function(){
            if(tempChanger === false){
                $("#temp").html(fahrenheit);
                $("#tempChanger").html('<b>&#8457;</b> | <i>&#8451;</i>');
                tempChanger = true;
            }
            else {
                $("#temp").html(celsius);
                 $("#tempChanger").html('<b>&#8451;</b> | <i>&#8457;</i>');
                 tempChanger = false;
            }
        });
      });
    });
    //Error alert if location data is unavaialble
  } else {
    alert("Geolocation is not enabled on this device");
  }
});
