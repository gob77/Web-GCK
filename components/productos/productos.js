document.addEventListener("DOMContentLoaded", () => {
    const productos = document.getElementById("productos-img");
    const marcas = document.getElementById("marcas-img");
    const productosMenu = document.getElementById("productos-menu");

    productosMenu.addEventListener("click", (event) => {
        let target = event.target;
        if (target.id === "marcas") {
            marcas.style.display = "flex";
            productos.style.display = "none";
        } else if (target.id === "productos") {
            marcas.style.display = "none";
            productos.style.display = "flex";
        }
    });
});
