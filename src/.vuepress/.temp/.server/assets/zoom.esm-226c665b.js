/*!
 * reveal.js Zoom plugin
 */
const e = { id: "zoom", init: function(e2) {
  e2.getRevealElement().addEventListener("mousedown", function(o) {
    var n = /Linux/.test(window.navigator.platform) ? "ctrl" : "alt", i = (e2.getConfig().zoomKey ? e2.getConfig().zoomKey : n) + "Key", d = e2.getConfig().zoomLevel ? e2.getConfig().zoomLevel : 2;
    o[i] && !e2.isOverview() && (o.preventDefault(), t.to({ x: o.clientX, y: o.clientY, scale: d, pan: false }));
  });
}, destroy: () => {
  t.reset();
} };
var t = function() {
  var e2 = 1, o = 0, n = 0, i = -1, d = -1, l = "transform" in document.body.style;
  function s(t2, o2) {
    var n2 = r();
    if (t2.width = t2.width || 1, t2.height = t2.height || 1, t2.x -= (window.innerWidth - t2.width * o2) / 2, t2.y -= (window.innerHeight - t2.height * o2) / 2, l)
      if (1 === o2)
        document.body.style.transform = "";
      else {
        var i2 = n2.x + "px " + n2.y + "px", d2 = "translate(" + -t2.x + "px," + -t2.y + "px) scale(" + o2 + ")";
        document.body.style.transformOrigin = i2, document.body.style.transform = d2;
      }
    else
      1 === o2 ? (document.body.style.position = "", document.body.style.left = "", document.body.style.top = "", document.body.style.width = "", document.body.style.height = "", document.body.style.zoom = "") : (document.body.style.position = "relative", document.body.style.left = -(n2.x + t2.x) / o2 + "px", document.body.style.top = -(n2.y + t2.y) / o2 + "px", document.body.style.width = 100 * o2 + "%", document.body.style.height = 100 * o2 + "%", document.body.style.zoom = o2);
    e2 = o2, document.documentElement.classList && (1 !== e2 ? document.documentElement.classList.add("zoomed") : document.documentElement.classList.remove("zoomed"));
  }
  function c() {
    var t2 = 0.12 * window.innerWidth, i2 = 0.12 * window.innerHeight, d2 = r();
    n < i2 ? window.scroll(d2.x, d2.y - 14 / e2 * (1 - n / i2)) : n > window.innerHeight - i2 && window.scroll(d2.x, d2.y + (1 - (window.innerHeight - n) / i2) * (14 / e2)), o < t2 ? window.scroll(d2.x - 14 / e2 * (1 - o / t2), d2.y) : o > window.innerWidth - t2 && window.scroll(d2.x + (1 - (window.innerWidth - o) / t2) * (14 / e2), d2.y);
  }
  function r() {
    return { x: void 0 !== window.scrollX ? window.scrollX : window.pageXOffset, y: void 0 !== window.scrollY ? window.scrollY : window.pageYOffset };
  }
  return l && (document.body.style.transition = "transform 0.8s ease"), document.addEventListener("keyup", function(o2) {
    1 !== e2 && 27 === o2.keyCode && t.out();
  }), document.addEventListener("mousemove", function(t2) {
    1 !== e2 && (o = t2.clientX, n = t2.clientY);
  }), { to: function(o2) {
    if (1 !== e2)
      t.out();
    else {
      if (o2.x = o2.x || 0, o2.y = o2.y || 0, o2.element) {
        var n2 = o2.element.getBoundingClientRect();
        o2.x = n2.left - 20, o2.y = n2.top - 20, o2.width = n2.width + 40, o2.height = n2.height + 40;
      }
      void 0 !== o2.width && void 0 !== o2.height && (o2.scale = Math.max(Math.min(window.innerWidth / o2.width, window.innerHeight / o2.height), 1)), o2.scale > 1 && (o2.x *= o2.scale, o2.y *= o2.scale, s(o2, o2.scale), false !== o2.pan && (i = setTimeout(function() {
        d = setInterval(c, 1e3 / 60);
      }, 800)));
    }
  }, out: function() {
    clearTimeout(i), clearInterval(d), s({ x: 0, y: 0 }, 1), e2 = 1;
  }, magnify: function(e3) {
    this.to(e3);
  }, reset: function() {
    this.out();
  }, zoomLevel: function() {
    return e2;
  } };
}();
/*!
 * zoom.js 0.3 (modified for use with reveal.js)
 * http://lab.hakim.se/zoom-js
 * MIT licensed
 *
 * Copyright (C) 2011-2014 Hakim El Hattab, http://hakim.se
 */
const zoom_esm = () => e;
export {
  zoom_esm as default
};
