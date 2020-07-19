document.addEventListener("DOMContentLoaded", () => {
    /* const open = document.getElementById("open");
    const close = document.getElementById("close"); */
    const links = document.getElementById("menu-links");
    const productosMenu = document.getElementById("productos-menu");
    const productos = document.getElementById("productos-img");
    const marcas = document.getElementById("marcas-img");
    const map = document.getElementById("map");

    /* open.addEventListener("click", () => {
        links.style.right = "0";
        open.style.display = "none";
        close.style.display = "inline";
    });
    
    close.addEventListener("click", () => {
        links.style.right = "-200px";
        open.style.display = "inline";
        close.style.display = "none";
    }); */

    /* productosMenu.addEventListener("click", (event) => {
        let target = event.target;
        if (target.id === "marcas") {
            marcas.style.display = "flex";
            productos.style.display = "none";
        } else if (target.id === "productos") {
            marcas.style.display = "none";
            productos.style.display = "flex";
        }
    }); */

    function initMap() {
        var uluru = { lat: -25.344, lng: 131.036 };
        var map = new google.maps.Map(document.getElementById("map"), { zoom: 4, center: uluru });
        var marker = new google.maps.Marker({ position: uluru, map: map });
    }

    /* function testingMap() {
        var karabitian = {
            lat: -31.470551,
            lon: -64.1896887,
        };
        
        let map = new google.maps.Map(document.getElementById("map"), { zoom: 7, center: karabitian });
        
        let marker = new google.maps.Marker({ position: karabitian, map: map });
    } */
    initMap();
});
