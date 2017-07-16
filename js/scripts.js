$(document).ready(function(){
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
latitude = position.coords.latitude;
longitude = position.coords.longitude;
    });
} else {
    alert("Geolocation is not enabled on this device")
}

});