const mapa = document.getElementById("map");

function initMap() {
    var karabitian = { lat: -31.470556, lng: -64.1875 };
    var map = new google.maps.Map(mapa, { zoom: 16, center: karabitian });
    var marker = new google.maps.Marker({ position: karabitian, map: map });
}
