(function () {
    new InstagramFeed({
        username: "grupocarloskarabitian",
        container: document.getElementById("gck__feed"),
        display_profile: false,
        display_biography: false,
        display_gallery: true,
        callback: null,
        styling: true,
        items: 5,
        items_per_row: 5,
        margin: 0.1,
    });
})();
