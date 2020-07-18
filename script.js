document.addEventListener("DOMContentLoaded", () => {
    /* const open = document.getElementById("open");
    const close = document.getElementById("close"); */
    const links = document.getElementById("menu-links");
    const productosMenu = document.getElementById("productos-menu");
    const productos = document.getElementById("productos-img");
    const marcas = document.getElementById("marcas-img");

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
