const map = document.getElementById("map");

console.log(map);

function initMap() {
    var uluru = { lat: -31.470556, lng: -64.1875 };
    var map = new google.maps.Map(document.getElementById("map"), { zoom: 18, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}
