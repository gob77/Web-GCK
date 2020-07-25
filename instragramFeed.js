function _typeof(a) {
    "@babel/helpers - typeof";
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (a) {
                      return typeof a;
                  }
                : function (a) {
                      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                  }),
        _typeof(a)
    );
}
(function (a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? (module.exports = b()) : (a.InstagramFeed = b());
})(this, function () {
    function a(a) {
        return a.replace(/[&<>"'`=\/]/g, function (a) {
            return d[a];
        });
    }
    var b = { host: "https://www.instagram.com/", username: "", tag: "", container: "", display_profile: !0, display_biography: !0, display_gallery: !0, display_igtv: !1, callback: null, styling: !0, items: 8, items_per_row: 4, margin: 0.5, image_size: 640, lazy_load: !1, on_error: console.error },
        c = { 150: 0, 240: 1, 320: 2, 480: 3, 640: 4 },
        d = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
    return function (d) {
        (this.options = Object.assign({}, b)),
            (this.options = Object.assign(this.options, d)),
            (this.is_tag = "" == this.options.username),
            (this.valid = !0),
            "" == this.options.username && "" == this.options.tag && (this.options.on_error("InstagramFeed: Error, no username or tag defined.", 1), (this.valid = !1)),
            "undefined" != typeof this.options.get_data && console.warn("InstagramFeed: options.get_data is deprecated, options.callback is always called if defined"),
            null == this.options.callback && "" == this.options.container && (this.options.on_error("InstagramFeed: Error, neither container found nor callback defined.", 2), (this.valid = !1)),
            (this.get = function (a) {
                var b = this.is_tag ? this.options.host + "explore/tags/" + this.options.tag + "/" : this.options.host + this.options.username + "/",
                    c = new XMLHttpRequest(),
                    d = this;
                (c.onload = function () {
                    if (4 === c.readyState)
                        if (200 === c.status) {
                            try {
                                var b = c.responseText.split("window._sharedData = ")[1].split("</script>")[0];
                            } catch (a) {
                                return void d.options.on_error("InstagramFeed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26", 3);
                            }
                            if (((b = JSON.parse(b.substr(0, b.length - 1))), (b = b.entry_data.ProfilePage || b.entry_data.TagPage), "undefined" == typeof b)) return void d.options.on_error("InstagramFeed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25", 4);
                            (b = b[0].graphql.user || b[0].graphql.hashtag), a(b, d);
                        } else d.options.on_error("InstagramFeed: Unable to fetch the given user/tag. Instagram responded with the status code: " + c.statusText, 5);
                }),
                    c.open("GET", b, !0),
                    c.send();
            }),
            (this.parse_caption = function (a, b) {
                return "undefined" != typeof a.node.edge_media_to_caption.edges[0] && "undefined" != typeof a.node.edge_media_to_caption.edges[0].node && "undefined" != typeof a.node.edge_media_to_caption.edges[0].node.text && null !== a.node.edge_media_to_caption.edges[0].node.text ? a.node.edge_media_to_caption.edges[0].node.text : "undefined" != typeof a.node.title && null !== a.node.title && 0 != a.node.title.length ? a.node.title : "undefined" != typeof a.node.accessibility_caption && null !== a.node.accessibility_caption && 0 != a.node.accessibility_caption.length ? a.node.accessibility_caption : (this.is_tag ? b.name : b.username) + " image ";
            }),
            (this.display = function (b) {
                if (this.options.styling)
                    var d = (100 - 2 * this.options.margin * this.options.items_per_row) / this.options.items_per_row,
                        e = { profile_container: " style='text-align:center;'", profile_image: " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", profile_name: " style='font-size:1.2em;'", profile_biography: " style='font-size:1em;'", gallery_image: " style='margin:" + this.options.margin + "% " + this.options.margin + "%;width:" + d + "%;float:left;'" };
                else var e = { profile_container: "", profile_image: "", profile_name: "", profile_biography: "", gallery_image: "" };
                var f = "";
                if ((this.options.display_profile && ((f += "<div class='instagram_profile'" + e.profile_container + ">"), (f += "<img class='instagram_profile_image'" + (this.options.lazy_load ? " loading='lazy'" : "") + " src='" + b.profile_pic_url + "' alt='" + (this.is_tag ? b.name + " tag pic" : b.username + " profile pic") + " profile pic'" + e.profile_image + " />"), (f += this.is_tag ? "<p class='instagram_tag'" + e.profile_name + "><a href='https://www.instagram.com/explore/tags/" + this.options.tag + "' rel='noopener' target='_blank'>#" + this.options.tag + "</a></p>" : "<p class='instagram_username'" + e.profile_name + ">@" + b.full_name + " (<a href='https://www.instagram.com/" + this.options.username + "' rel='noopener' target='_blank'>@" + this.options.username + "</a>)</p>"), !this.is_tag && this.options.display_biography && (f += "<p class='instagram_biography'" + e.profile_biography + ">" + b.biography + "</p>"), (f += "</div>")), this.options.display_gallery)) {
                    var g = "undefined" == typeof c[this.options.image_size] ? c[640] : c[this.options.image_size];
                    if ("undefined" != typeof b.is_private && !0 === b.is_private) f += "<p class='instagram_private'><strong>This profile is private</strong></p>";
                    else {
                        var h = (b.edge_owner_to_timeline_media || b.edge_hashtag_to_media).edges;
                        (p = h.length > this.options.items ? this.options.items : h.length), (f += "<div class='instagram_gallery'>");
                        for (var j = 0; j < p; j++) {
                            var k,
                                l,
                                m = "https://www.instagram.com/p/" + h[j].node.shortcode,
                                n = a(this.parse_caption(h[j], b));
                            switch (h[j].node.__typename) {
                                case "GraphSidecar":
                                    (l = "sidecar"), (k = h[j].node.thumbnail_resources[g].src);
                                    break;
                                case "GraphVideo":
                                    (l = "video"), (k = h[j].node.thumbnail_src);
                                    break;
                                default:
                                    (l = "image"), (k = h[j].node.thumbnail_resources[g].src);
                            }
                            this.is_tag && (b.username = ""), (f += "<a href='" + m + "' class='instagram-" + l + "' title='" + n + "' rel='noopener' target='_blank'>"), (f += "<img" + (this.options.lazy_load ? " loading='lazy'" : "") + " src='" + k + "' alt='" + n + "'" + e.gallery_image + " />"), (f += "</a>");
                        }
                        f += "</div>";
                    }
                }
                if (this.options.display_igtv && "undefined" != typeof b.edge_felix_video_timeline) {
                    var o = b.edge_felix_video_timeline.edges,
                        p = o.length > this.options.items ? this.options.items : o.length;
                    if (0 < o.length) {
                        f += "<div class='instagram_igtv'>";
                        for (var j = 0; j < p; j++) {
                            var m = "https://www.instagram.com/p/" + o[j].node.shortcode,
                                n = this.parse_caption(o[j], b);
                            (f += "<a href='" + m + "' rel='noopener' title='" + n + "' target='_blank'>"), (f += "<img" + (this.options.lazy_load ? " loading='lazy'" : "") + " src='" + o[j].node.thumbnail_src + "' alt='" + n + "'" + e.gallery_image + " />"), (f += "</a>");
                        }
                        f += "</div>";
                    }
                }
                this.options.container.innerHTML = f;
            }),
            (this.run = function () {
                this.get(function (a, b) {
                    "" != b.options.container && b.display(a), "function" == typeof b.options.callback && b.options.callback(a);
                });
            }),
            this.valid && this.run();
    };
});
