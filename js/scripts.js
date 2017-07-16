$(document).ready(function(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
latitude = position.coords.latitude;
longitude = position.coords.longitude;
$('#weatherData').html("https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude+"");
    });
} else {
    alert("Geolocation is not enabled on this device")
}

});