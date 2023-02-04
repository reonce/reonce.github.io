/*!
* reveal.js 4.4.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/
const e = (e2, t2) => {
  for (let i2 in t2)
    e2[i2] = t2[i2];
  return e2;
}, t = (e2, t2) => Array.from(e2.querySelectorAll(t2)), i = (e2, t2, i2) => {
  i2 ? e2.classList.add(t2) : e2.classList.remove(t2);
}, a = (e2) => {
  if ("string" == typeof e2) {
    if ("null" === e2)
      return null;
    if ("true" === e2)
      return true;
    if ("false" === e2)
      return false;
    if (e2.match(/^-?[\d\.]+$/))
      return parseFloat(e2);
  }
  return e2;
}, s = (e2, t2) => {
  e2.style.transform = t2;
}, n = (e2, t2) => {
  let i2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector;
  return !(!i2 || !i2.call(e2, t2));
}, r = (e2, t2) => {
  if ("function" == typeof e2.closest)
    return e2.closest(t2);
  for (; e2; ) {
    if (n(e2, t2))
      return e2;
    e2 = e2.parentNode;
  }
  return null;
}, o = (e2, t2, i2, a2 = "") => {
  let s2 = e2.querySelectorAll("." + i2);
  for (let t3 = 0; t3 < s2.length; t3++) {
    let i3 = s2[t3];
    if (i3.parentNode === e2)
      return i3;
  }
  let n2 = document.createElement(t2);
  return n2.className = i2, n2.innerHTML = a2, e2.appendChild(n2), n2;
}, l = (e2) => {
  let t2 = document.createElement("style");
  return t2.type = "text/css", e2 && e2.length > 0 && (t2.styleSheet ? t2.styleSheet.cssText = e2 : t2.appendChild(document.createTextNode(e2))), document.head.appendChild(t2), t2;
}, d = () => {
  let e2 = {};
  location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t2) => {
    e2[t2.split("=").shift()] = t2.split("=").pop();
  });
  for (let t2 in e2) {
    let i2 = e2[t2];
    e2[t2] = a(unescape(i2));
  }
  return void 0 !== e2.dependencies && delete e2.dependencies, e2;
}, c = (e2, t2 = 0) => {
  if (e2) {
    let i2, a2 = e2.style.height;
    return e2.style.height = "0px", e2.parentNode.style.height = "auto", i2 = t2 - e2.parentNode.offsetHeight, e2.style.height = a2 + "px", e2.parentNode.style.removeProperty("height"), i2;
  }
  return t2;
}, h = { mp4: "video/mp4", m4a: "video/mp4", ogv: "video/ogg", mpeg: "video/mpeg", webm: "video/webm" }, u = navigator.userAgent, g = /(iphone|ipod|ipad|android)/gi.test(u) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
const v = /android/gi.test(u);
var p = {};
Object.defineProperty(p, "__esModule", { value: true });
var m = Object.assign || function(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var i2 = arguments[t2];
    for (var a2 in i2)
      Object.prototype.hasOwnProperty.call(i2, a2) && (e2[a2] = i2[a2]);
  }
  return e2;
}, f = p.default = function(e2) {
  if (e2) {
    var t2 = function(e3) {
      return [].slice.call(e3);
    }, i2 = 0, a2 = 1, s2 = 2, n2 = 3, r2 = [], o2 = null, l2 = "requestAnimationFrame" in e2 ? function() {
      e2.cancelAnimationFrame(o2), o2 = e2.requestAnimationFrame(function() {
        return c2(r2.filter(function(e3) {
          return e3.dirty && e3.active;
        }));
      });
    } : function() {
    }, d2 = function(e3) {
      return function() {
        r2.forEach(function(t3) {
          return t3.dirty = e3;
        }), l2();
      };
    }, c2 = function(e3) {
      e3.filter(function(e4) {
        return !e4.styleComputed;
      }).forEach(function(e4) {
        e4.styleComputed = v2(e4);
      }), e3.filter(p2).forEach(f2);
      var t3 = e3.filter(g2);
      t3.forEach(u2), t3.forEach(function(e4) {
        f2(e4), h2(e4);
      }), t3.forEach(b2);
    }, h2 = function(e3) {
      return e3.dirty = i2;
    }, u2 = function(e3) {
      e3.availableWidth = e3.element.parentNode.clientWidth, e3.currentWidth = e3.element.scrollWidth, e3.previousFontSize = e3.currentFontSize, e3.currentFontSize = Math.min(Math.max(e3.minSize, e3.availableWidth / e3.currentWidth * e3.previousFontSize), e3.maxSize), e3.whiteSpace = e3.multiLine && e3.currentFontSize === e3.minSize ? "normal" : "nowrap";
    }, g2 = function(e3) {
      return e3.dirty !== s2 || e3.dirty === s2 && e3.element.parentNode.clientWidth !== e3.availableWidth;
    }, v2 = function(t3) {
      var i3 = e2.getComputedStyle(t3.element, null);
      t3.currentFontSize = parseFloat(i3.getPropertyValue("font-size")), t3.display = i3.getPropertyValue("display"), t3.whiteSpace = i3.getPropertyValue("white-space");
    }, p2 = function(e3) {
      var t3 = false;
      return !e3.preStyleTestCompleted && (/inline-/.test(e3.display) || (t3 = true, e3.display = "inline-block"), "nowrap" !== e3.whiteSpace && (t3 = true, e3.whiteSpace = "nowrap"), e3.preStyleTestCompleted = true, t3);
    }, f2 = function(e3) {
      e3.element.style.whiteSpace = e3.whiteSpace, e3.element.style.display = e3.display, e3.element.style.fontSize = e3.currentFontSize + "px";
    }, b2 = function(e3) {
      e3.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e3.previousFontSize, newValue: e3.currentFontSize, scaleFactor: e3.currentFontSize / e3.previousFontSize } }));
    }, y2 = function(e3, t3) {
      return function() {
        e3.dirty = t3, e3.active && l2();
      };
    }, w2 = function(e3) {
      return function() {
        r2 = r2.filter(function(t3) {
          return t3.element !== e3.element;
        }), e3.observeMutations && e3.observer.disconnect(), e3.element.style.whiteSpace = e3.originalStyle.whiteSpace, e3.element.style.display = e3.originalStyle.display, e3.element.style.fontSize = e3.originalStyle.fontSize;
      };
    }, E2 = function(e3) {
      return function() {
        e3.active || (e3.active = true, l2());
      };
    }, R2 = function(e3) {
      return function() {
        return e3.active = false;
      };
    }, S2 = function(e3) {
      e3.observeMutations && (e3.observer = new MutationObserver(y2(e3, a2)), e3.observer.observe(e3.element, e3.observeMutations));
    }, A2 = { minSize: 16, maxSize: 512, multiLine: true, observeMutations: "MutationObserver" in e2 && { subtree: true, childList: true, characterData: true } }, k2 = null, L2 = function() {
      e2.clearTimeout(k2), k2 = e2.setTimeout(d2(s2), P2.observeWindowDelay);
    }, C2 = ["resize", "orientationchange"];
    return Object.defineProperty(P2, "observeWindow", { set: function(t3) {
      var i3 = (t3 ? "add" : "remove") + "EventListener";
      C2.forEach(function(t4) {
        e2[i3](t4, L2);
      });
    } }), P2.observeWindow = true, P2.observeWindowDelay = 100, P2.fitAll = d2(n2), P2;
  }
  function x2(e3, t3) {
    var i3 = m({}, A2, t3), a3 = e3.map(function(e4) {
      var t4 = m({}, i3, { element: e4, active: true });
      return function(e5) {
        e5.originalStyle = { whiteSpace: e5.element.style.whiteSpace, display: e5.element.style.display, fontSize: e5.element.style.fontSize }, S2(e5), e5.newbie = true, e5.dirty = true, r2.push(e5);
      }(t4), { element: e4, fit: y2(t4, n2), unfreeze: E2(t4), freeze: R2(t4), unsubscribe: w2(t4) };
    });
    return l2(), a3;
  }
  function P2(e3) {
    var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return "string" == typeof e3 ? x2(t2(document.querySelectorAll(e3)), i3) : x2([e3], i3)[0];
  }
}("undefined" == typeof window ? null : window);
class b {
  constructor(e2) {
    this.Reveal = e2, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
  }
  shouldPreload(e2) {
    let t2 = this.Reveal.getConfig().preloadIframes;
    return "boolean" != typeof t2 && (t2 = e2.hasAttribute("data-preload")), t2;
  }
  load(e2, i2 = {}) {
    e2.style.display = this.Reveal.getConfig().display, t(e2, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e3) => {
      ("IFRAME" !== e3.tagName || this.shouldPreload(e3)) && (e3.setAttribute("src", e3.getAttribute("data-src")), e3.setAttribute("data-lazy-loaded", ""), e3.removeAttribute("data-src"));
    }), t(e2, "video, audio").forEach((e3) => {
      let i3 = 0;
      t(e3, "source[data-src]").forEach((e4) => {
        e4.setAttribute("src", e4.getAttribute("data-src")), e4.removeAttribute("data-src"), e4.setAttribute("data-lazy-loaded", ""), i3 += 1;
      }), g && "VIDEO" === e3.tagName && e3.setAttribute("playsinline", ""), i3 > 0 && e3.load();
    });
    let a2 = e2.slideBackgroundElement;
    if (a2) {
      a2.style.display = "block";
      let t2 = e2.slideBackgroundContentElement, s2 = e2.getAttribute("data-background-iframe");
      if (false === a2.hasAttribute("data-loaded")) {
        a2.setAttribute("data-loaded", "true");
        let n3 = e2.getAttribute("data-background-image"), r2 = e2.getAttribute("data-background-video"), o2 = e2.hasAttribute("data-background-video-loop"), l2 = e2.hasAttribute("data-background-video-muted");
        if (n3)
          /^data:/.test(n3.trim()) ? t2.style.backgroundImage = `url(${n3.trim()})` : t2.style.backgroundImage = n3.split(",").map((e3) => `url(${encodeURI(e3.trim())})`).join(",");
        else if (r2 && !this.Reveal.isSpeakerNotes()) {
          let e3 = document.createElement("video");
          o2 && e3.setAttribute("loop", ""), l2 && (e3.muted = true), g && (e3.muted = true, e3.setAttribute("playsinline", "")), r2.split(",").forEach((t3) => {
            let i3 = ((e4 = "") => h[e4.split(".").pop()])(t3);
            e3.innerHTML += i3 ? `<source src="${t3}" type="${i3}">` : `<source src="${t3}">`;
          }), t2.appendChild(e3);
        } else if (s2 && true !== i2.excludeIframes) {
          let e3 = document.createElement("iframe");
          e3.setAttribute("allowfullscreen", ""), e3.setAttribute("mozallowfullscreen", ""), e3.setAttribute("webkitallowfullscreen", ""), e3.setAttribute("allow", "autoplay"), e3.setAttribute("data-src", s2), e3.style.width = "100%", e3.style.height = "100%", e3.style.maxHeight = "100%", e3.style.maxWidth = "100%", t2.appendChild(e3);
        }
      }
      let n2 = t2.querySelector("iframe[data-src]");
      n2 && this.shouldPreload(a2) && !/autoplay=(1|true|yes)/gi.test(s2) && n2.getAttribute("src") !== s2 && n2.setAttribute("src", s2);
    }
    this.layout(e2);
  }
  layout(e2) {
    Array.from(e2.querySelectorAll(".r-fit-text")).forEach((e3) => {
      f(e3, { minSize: 24, maxSize: 0.8 * this.Reveal.getConfig().height, observeMutations: false, observeWindow: false });
    });
  }
  unload(e2) {
    e2.style.display = "none";
    let i2 = this.Reveal.getSlideBackground(e2);
    i2 && (i2.style.display = "none", t(i2, "iframe[src]").forEach((e3) => {
      e3.removeAttribute("src");
    })), t(e2, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e3) => {
      e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
    }), t(e2, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e3) => {
      e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
    });
  }
  formatEmbeddedContent() {
    let e2 = (e3, i2, a2) => {
      t(this.Reveal.getSlidesElement(), "iframe[" + e3 + '*="' + i2 + '"]').forEach((t2) => {
        let i3 = t2.getAttribute(e3);
        i3 && -1 === i3.indexOf(a2) && t2.setAttribute(e3, i3 + (/\?/.test(i3) ? "&" : "?") + a2);
      });
    };
    e2("src", "youtube.com/embed/", "enablejsapi=1"), e2("data-src", "youtube.com/embed/", "enablejsapi=1"), e2("src", "player.vimeo.com/", "api=1"), e2("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e2) {
    e2 && !this.Reveal.isSpeakerNotes() && (t(e2, 'img[src$=".gif"]').forEach((e3) => {
      e3.setAttribute("src", e3.getAttribute("src"));
    }), t(e2, "video, audio").forEach((e3) => {
      if (r(e3, ".fragment") && !r(e3, ".fragment.visible"))
        return;
      let t2 = this.Reveal.getConfig().autoPlayMedia;
      if ("boolean" != typeof t2 && (t2 = e3.hasAttribute("data-autoplay") || !!r(e3, ".slide-background")), t2 && "function" == typeof e3.play)
        if (e3.readyState > 1)
          this.startEmbeddedMedia({ target: e3 });
        else if (g) {
          let t3 = e3.play();
          t3 && "function" == typeof t3.catch && false === e3.controls && t3.catch(() => {
            e3.controls = true, e3.addEventListener("play", () => {
              e3.controls = false;
            });
          });
        } else
          e3.removeEventListener("loadeddata", this.startEmbeddedMedia), e3.addEventListener("loadeddata", this.startEmbeddedMedia);
    }), t(e2, "iframe[src]").forEach((e3) => {
      r(e3, ".fragment") && !r(e3, ".fragment.visible") || this.startEmbeddedIframe({ target: e3 });
    }), t(e2, "iframe[data-src]").forEach((e3) => {
      r(e3, ".fragment") && !r(e3, ".fragment.visible") || e3.getAttribute("src") !== e3.getAttribute("data-src") && (e3.removeEventListener("load", this.startEmbeddedIframe), e3.addEventListener("load", this.startEmbeddedIframe), e3.setAttribute("src", e3.getAttribute("data-src")));
    }));
  }
  startEmbeddedMedia(e2) {
    let t2 = !!r(e2.target, "html"), i2 = !!r(e2.target, ".present");
    t2 && i2 && (e2.target.currentTime = 0, e2.target.play()), e2.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  startEmbeddedIframe(e2) {
    let t2 = e2.target;
    if (t2 && t2.contentWindow) {
      let i2 = !!r(e2.target, "html"), a2 = !!r(e2.target, ".present");
      if (i2 && a2) {
        let e3 = this.Reveal.getConfig().autoPlayMedia;
        "boolean" != typeof e3 && (e3 = t2.hasAttribute("data-autoplay") || !!r(t2, ".slide-background")), /youtube\.com\/embed\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"method":"play"}', "*") : t2.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(i2, a2 = {}) {
    a2 = e({ unloadIframes: true }, a2), i2 && i2.parentNode && (t(i2, "video, audio").forEach((e2) => {
      e2.hasAttribute("data-ignore") || "function" != typeof e2.pause || (e2.setAttribute("data-paused-by-reveal", ""), e2.pause());
    }), t(i2, "iframe").forEach((e2) => {
      e2.contentWindow && e2.contentWindow.postMessage("slide:stop", "*"), e2.removeEventListener("load", this.startEmbeddedIframe);
    }), t(i2, 'iframe[src*="youtube.com/embed/"]').forEach((e2) => {
      !e2.hasAttribute("data-ignore") && e2.contentWindow && "function" == typeof e2.contentWindow.postMessage && e2.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }), t(i2, 'iframe[src*="player.vimeo.com/"]').forEach((e2) => {
      !e2.hasAttribute("data-ignore") && e2.contentWindow && "function" == typeof e2.contentWindow.postMessage && e2.contentWindow.postMessage('{"method":"pause"}', "*");
    }), true === a2.unloadIframes && t(i2, "iframe[data-src]").forEach((e2) => {
      e2.setAttribute("src", "about:blank"), e2.removeAttribute("src");
    }));
  }
}
class y {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e2, t2) {
    let i2 = "none";
    e2.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e2.showSlideNumber || "speaker" === e2.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i2 = "block"), this.element.style.display = i2;
  }
  update() {
    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e2 = this.Reveal.getCurrentSlide()) {
    let t2, i2 = this.Reveal.getConfig(), a2 = "h.v";
    if ("function" == typeof i2.slideNumber)
      t2 = i2.slideNumber(e2);
    else {
      "string" == typeof i2.slideNumber && (a2 = i2.slideNumber), /c/.test(a2) || 1 !== this.Reveal.getHorizontalSlides().length || (a2 = "c");
      let s3 = e2 && "uncounted" === e2.dataset.visibility ? 0 : 1;
      switch (t2 = [], a2) {
        case "c":
          t2.push(this.Reveal.getSlidePastCount(e2) + s3);
          break;
        case "c/t":
          t2.push(this.Reveal.getSlidePastCount(e2) + s3, "/", this.Reveal.getTotalSlides());
          break;
        default:
          let i3 = this.Reveal.getIndices(e2);
          t2.push(i3.h + s3);
          let n2 = "h/v" === a2 ? "/" : ".";
          this.Reveal.isVerticalSlide(e2) && t2.push(n2, i3.v + 1);
      }
    }
    let s2 = "#" + this.Reveal.location.getHash(e2);
    return this.formatNumber(t2[0], t2[1], t2[2], s2);
  }
  formatNumber(e2, t2, i2, a2 = "#" + this.Reveal.location.getHash()) {
    return "number" != typeof i2 || isNaN(i2) ? `<a href="${a2}">
					<span class="slide-number-a">${e2}</span>
					</a>` : `<a href="${a2}">
					<span class="slide-number-a">${e2}</span>
					<span class="slide-number-delimiter">${t2}</span>
					<span class="slide-number-b">${i2}</span>
					</a>`;
  }
  destroy() {
    this.element.remove();
  }
}
const w = (e2) => {
  let t2 = e2.match(/^#([0-9a-f]{3})$/i);
  if (t2 && t2[1])
    return t2 = t2[1], { r: 17 * parseInt(t2.charAt(0), 16), g: 17 * parseInt(t2.charAt(1), 16), b: 17 * parseInt(t2.charAt(2), 16) };
  let i2 = e2.match(/^#([0-9a-f]{6})$/i);
  if (i2 && i2[1])
    return i2 = i2[1], { r: parseInt(i2.slice(0, 2), 16), g: parseInt(i2.slice(2, 4), 16), b: parseInt(i2.slice(4, 6), 16) };
  let a2 = e2.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (a2)
    return { r: parseInt(a2[1], 10), g: parseInt(a2[2], 10), b: parseInt(a2[3], 10) };
  let s2 = e2.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return s2 ? { r: parseInt(s2[1], 10), g: parseInt(s2[2], 10), b: parseInt(s2[3], 10), a: parseFloat(s2[4]) } : null;
};
class E {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e2) => {
      let i2 = this.createBackground(e2, this.element);
      t(e2, "section").forEach((e3) => {
        this.createBackground(e3, i2), i2.classList.add("stack");
      });
    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
      this.Reveal.getRevealElement().classList.add("has-parallax-background");
    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
  }
  createBackground(e2, t2) {
    let i2 = document.createElement("div");
    i2.className = "slide-background " + e2.className.replace(/present|past|future/, "");
    let a2 = document.createElement("div");
    return a2.className = "slide-background-content", i2.appendChild(a2), t2.appendChild(i2), e2.slideBackgroundElement = i2, e2.slideBackgroundContentElement = a2, this.sync(e2), i2;
  }
  sync(e2) {
    const t2 = e2.slideBackgroundElement, i2 = e2.slideBackgroundContentElement, a2 = { background: e2.getAttribute("data-background"), backgroundSize: e2.getAttribute("data-background-size"), backgroundImage: e2.getAttribute("data-background-image"), backgroundVideo: e2.getAttribute("data-background-video"), backgroundIframe: e2.getAttribute("data-background-iframe"), backgroundColor: e2.getAttribute("data-background-color"), backgroundGradient: e2.getAttribute("data-background-gradient"), backgroundRepeat: e2.getAttribute("data-background-repeat"), backgroundPosition: e2.getAttribute("data-background-position"), backgroundTransition: e2.getAttribute("data-background-transition"), backgroundOpacity: e2.getAttribute("data-background-opacity") }, s2 = e2.hasAttribute("data-preload");
    e2.classList.remove("has-dark-background"), e2.classList.remove("has-light-background"), t2.removeAttribute("data-loaded"), t2.removeAttribute("data-background-hash"), t2.removeAttribute("data-background-size"), t2.removeAttribute("data-background-transition"), t2.style.backgroundColor = "", i2.style.backgroundSize = "", i2.style.backgroundRepeat = "", i2.style.backgroundPosition = "", i2.style.backgroundImage = "", i2.style.opacity = "", i2.innerHTML = "", a2.background && (/^(http|file|\/\/)/gi.test(a2.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(a2.background) ? e2.setAttribute("data-background-image", a2.background) : t2.style.background = a2.background), (a2.background || a2.backgroundColor || a2.backgroundGradient || a2.backgroundImage || a2.backgroundVideo || a2.backgroundIframe) && t2.setAttribute("data-background-hash", a2.background + a2.backgroundSize + a2.backgroundImage + a2.backgroundVideo + a2.backgroundIframe + a2.backgroundColor + a2.backgroundGradient + a2.backgroundRepeat + a2.backgroundPosition + a2.backgroundTransition + a2.backgroundOpacity), a2.backgroundSize && t2.setAttribute("data-background-size", a2.backgroundSize), a2.backgroundColor && (t2.style.backgroundColor = a2.backgroundColor), a2.backgroundGradient && (t2.style.backgroundImage = a2.backgroundGradient), a2.backgroundTransition && t2.setAttribute("data-background-transition", a2.backgroundTransition), s2 && t2.setAttribute("data-preload", ""), a2.backgroundSize && (i2.style.backgroundSize = a2.backgroundSize), a2.backgroundRepeat && (i2.style.backgroundRepeat = a2.backgroundRepeat), a2.backgroundPosition && (i2.style.backgroundPosition = a2.backgroundPosition), a2.backgroundOpacity && (i2.style.opacity = a2.backgroundOpacity);
    let n2 = a2.backgroundColor;
    if (!n2 || !w(n2)) {
      let e3 = window.getComputedStyle(t2);
      e3 && e3.backgroundColor && (n2 = e3.backgroundColor);
    }
    if (n2) {
      const t3 = w(n2);
      t3 && 0 !== t3.a && ("string" == typeof (r2 = n2) && (r2 = w(r2)), (r2 ? (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 : null) < 128 ? e2.classList.add("has-dark-background") : e2.classList.add("has-light-background"));
    }
    var r2;
  }
  update(e2 = false) {
    let i2 = this.Reveal.getCurrentSlide(), a2 = this.Reveal.getIndices(), s2 = null, n2 = this.Reveal.getConfig().rtl ? "future" : "past", r2 = this.Reveal.getConfig().rtl ? "past" : "future";
    if (Array.from(this.element.childNodes).forEach((i3, o2) => {
      i3.classList.remove("past", "present", "future"), o2 < a2.h ? i3.classList.add(n2) : o2 > a2.h ? i3.classList.add(r2) : (i3.classList.add("present"), s2 = i3), (e2 || o2 === a2.h) && t(i3, ".slide-background").forEach((e3, t2) => {
        e3.classList.remove("past", "present", "future"), t2 < a2.v ? e3.classList.add("past") : t2 > a2.v ? e3.classList.add("future") : (e3.classList.add("present"), o2 === a2.h && (s2 = e3));
      });
    }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, { unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground) }), s2) {
      this.Reveal.slideContent.startEmbeddedContent(s2);
      let e3 = s2.querySelector(".slide-background-content");
      if (e3) {
        let t3 = e3.style.backgroundImage || "";
        /\.gif/i.test(t3) && (e3.style.backgroundImage = "", window.getComputedStyle(e3).opacity, e3.style.backgroundImage = t3);
      }
      let t2 = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, i3 = s2.getAttribute("data-background-hash");
      i3 && i3 === t2 && s2 !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = s2;
    }
    i2 && ["has-light-background", "has-dark-background"].forEach((e3) => {
      i2.classList.contains(e3) ? this.Reveal.getRevealElement().classList.add(e3) : this.Reveal.getRevealElement().classList.remove(e3);
    }, this), setTimeout(() => {
      this.element.classList.remove("no-transition");
    }, 1);
  }
  updateParallax() {
    let e2 = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t2, i2, a2 = this.Reveal.getHorizontalSlides(), s2 = this.Reveal.getVerticalSlides(), n2 = this.element.style.backgroundSize.split(" ");
      1 === n2.length ? t2 = i2 = parseInt(n2[0], 10) : (t2 = parseInt(n2[0], 10), i2 = parseInt(n2[1], 10));
      let r2, o2, l2 = this.element.offsetWidth, d2 = a2.length;
      r2 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d2 > 1 ? (t2 - l2) / (d2 - 1) : 0, o2 = r2 * e2.h * -1;
      let c2, h2, u2 = this.element.offsetHeight, g2 = s2.length;
      c2 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i2 - u2) / (g2 - 1), h2 = g2 > 0 ? c2 * e2.v : 0, this.element.style.backgroundPosition = o2 + "px " + -h2 + "px";
    }
  }
  destroy() {
    this.element.remove();
  }
}
const R = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/, S = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
let A = 0;
class k {
  constructor(e2) {
    this.Reveal = e2;
  }
  run(e2, t2) {
    this.reset();
    let i2 = this.Reveal.getSlides(), a2 = i2.indexOf(t2), s2 = i2.indexOf(e2);
    if (e2.hasAttribute("data-auto-animate") && t2.hasAttribute("data-auto-animate") && e2.getAttribute("data-auto-animate-id") === t2.getAttribute("data-auto-animate-id") && !(a2 > s2 ? t2 : e2).hasAttribute("data-auto-animate-restart")) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
      let i3 = this.getAutoAnimateOptions(t2);
      e2.dataset.autoAnimate = "pending", t2.dataset.autoAnimate = "pending", i3.slideDirection = a2 > s2 ? "forward" : "backward";
      let n2 = "none" === e2.style.display;
      n2 && (e2.style.display = this.Reveal.getConfig().display);
      let r2 = this.getAutoAnimatableElements(e2, t2).map((e3) => this.autoAnimateElements(e3.from, e3.to, e3.options || {}, i3, A++));
      if (n2 && (e2.style.display = "none"), "false" !== t2.dataset.autoAnimateUnmatched && true === this.Reveal.getConfig().autoAnimateUnmatched) {
        let e3 = 0.8 * i3.duration, a3 = 0.2 * i3.duration;
        this.getUnmatchedAutoAnimateElements(t2).forEach((e4) => {
          let t3 = this.getAutoAnimateOptions(e4, i3), a4 = "unmatched";
          t3.duration === i3.duration && t3.delay === i3.delay || (a4 = "unmatched-" + A++, r2.push(`[data-auto-animate="running"] [data-auto-animate-target="${a4}"] { transition: opacity ${t3.duration}s ease ${t3.delay}s; }`)), e4.dataset.autoAnimateTarget = a4;
        }, this), r2.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e3}s ease ${a3}s; }`);
      }
      this.autoAnimateStyleSheet.innerHTML = r2.join(""), requestAnimationFrame(() => {
        this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t2.dataset.autoAnimate = "running");
      }), this.Reveal.dispatchEvent({ type: "autoanimate", data: { fromSlide: e2, toSlide: t2, sheet: this.autoAnimateStyleSheet } });
    }
  }
  reset() {
    t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e2) => {
      e2.dataset.autoAnimate = "";
    }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e2) => {
      delete e2.dataset.autoAnimateTarget;
    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
  }
  autoAnimateElements(e2, t2, i2, a2, s2) {
    e2.dataset.autoAnimateTarget = "", t2.dataset.autoAnimateTarget = s2;
    let n2 = this.getAutoAnimateOptions(t2, a2);
    void 0 !== i2.delay && (n2.delay = i2.delay), void 0 !== i2.duration && (n2.duration = i2.duration), void 0 !== i2.easing && (n2.easing = i2.easing);
    let r2 = this.getAutoAnimatableProperties("from", e2, i2), o2 = this.getAutoAnimatableProperties("to", t2, i2);
    if (t2.classList.contains("fragment") && (delete o2.styles.opacity, e2.classList.contains("fragment"))) {
      (e2.className.match(S) || [""])[0] === (t2.className.match(S) || [""])[0] && "forward" === a2.slideDirection && t2.classList.add("visible", "disabled");
    }
    if (false !== i2.translate || false !== i2.scale) {
      let e3 = this.Reveal.getScale(), t3 = { x: (r2.x - o2.x) / e3, y: (r2.y - o2.y) / e3, scaleX: r2.width / o2.width, scaleY: r2.height / o2.height };
      t3.x = Math.round(1e3 * t3.x) / 1e3, t3.y = Math.round(1e3 * t3.y) / 1e3, t3.scaleX = Math.round(1e3 * t3.scaleX) / 1e3, t3.scaleX = Math.round(1e3 * t3.scaleX) / 1e3;
      let a3 = false !== i2.translate && (0 !== t3.x || 0 !== t3.y), s3 = false !== i2.scale && (0 !== t3.scaleX || 0 !== t3.scaleY);
      if (a3 || s3) {
        let e4 = [];
        a3 && e4.push(`translate(${t3.x}px, ${t3.y}px)`), s3 && e4.push(`scale(${t3.scaleX}, ${t3.scaleY})`), r2.styles.transform = e4.join(" "), r2.styles["transform-origin"] = "top left", o2.styles.transform = "none";
      }
    }
    for (let e3 in o2.styles) {
      const t3 = o2.styles[e3], i3 = r2.styles[e3];
      t3 === i3 ? delete o2.styles[e3] : (true === t3.explicitValue && (o2.styles[e3] = t3.value), true === i3.explicitValue && (r2.styles[e3] = i3.value));
    }
    let l2 = "", d2 = Object.keys(o2.styles);
    if (d2.length > 0) {
      r2.styles.transition = "none", o2.styles.transition = `all ${n2.duration}s ${n2.easing} ${n2.delay}s`, o2.styles["transition-property"] = d2.join(", "), o2.styles["will-change"] = d2.join(", "), l2 = '[data-auto-animate-target="' + s2 + '"] {' + Object.keys(r2.styles).map((e3) => e3 + ": " + r2.styles[e3] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + s2 + '"] {' + Object.keys(o2.styles).map((e3) => e3 + ": " + o2.styles[e3] + " !important;").join("") + "}";
    }
    return l2;
  }
  getAutoAnimateOptions(t2, i2) {
    let a2 = { easing: this.Reveal.getConfig().autoAnimateEasing, duration: this.Reveal.getConfig().autoAnimateDuration, delay: 0 };
    if (a2 = e(a2, i2), t2.parentNode) {
      let e2 = r(t2.parentNode, "[data-auto-animate-target]");
      e2 && (a2 = this.getAutoAnimateOptions(e2, a2));
    }
    return t2.dataset.autoAnimateEasing && (a2.easing = t2.dataset.autoAnimateEasing), t2.dataset.autoAnimateDuration && (a2.duration = parseFloat(t2.dataset.autoAnimateDuration)), t2.dataset.autoAnimateDelay && (a2.delay = parseFloat(t2.dataset.autoAnimateDelay)), a2;
  }
  getAutoAnimatableProperties(e2, t2, i2) {
    let a2 = this.Reveal.getConfig(), s2 = { styles: [] };
    if (false !== i2.translate || false !== i2.scale) {
      let e3;
      if ("function" == typeof i2.measure)
        e3 = i2.measure(t2);
      else if (a2.center)
        e3 = t2.getBoundingClientRect();
      else {
        let i3 = this.Reveal.getScale();
        e3 = { x: t2.offsetLeft * i3, y: t2.offsetTop * i3, width: t2.offsetWidth * i3, height: t2.offsetHeight * i3 };
      }
      s2.x = e3.x, s2.y = e3.y, s2.width = e3.width, s2.height = e3.height;
    }
    const n2 = getComputedStyle(t2);
    return (i2.styles || a2.autoAnimateStyles).forEach((t3) => {
      let i3;
      "string" == typeof t3 && (t3 = { property: t3 }), void 0 !== t3.from && "from" === e2 ? i3 = { value: t3.from, explicitValue: true } : void 0 !== t3.to && "to" === e2 ? i3 = { value: t3.to, explicitValue: true } : ("line-height" === t3.property && (i3 = parseFloat(n2["line-height"]) / parseFloat(n2["font-size"])), isNaN(i3) && (i3 = n2[t3.property])), "" !== i3 && (s2.styles[t3.property] = i3);
    }), s2;
  }
  getAutoAnimatableElements(e2, t2) {
    let i2 = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e2, t2), a2 = [];
    return i2.filter((e3, t3) => {
      if (-1 === a2.indexOf(e3.to))
        return a2.push(e3.to), true;
    });
  }
  getAutoAnimatePairs(e2, t2) {
    let i2 = [];
    const a2 = "h1, h2, h3, h4, h5, h6, p, li";
    return this.findAutoAnimateMatches(i2, e2, t2, "[data-id]", (e3) => e3.nodeName + ":::" + e3.getAttribute("data-id")), this.findAutoAnimateMatches(i2, e2, t2, a2, (e3) => e3.nodeName + ":::" + e3.innerText), this.findAutoAnimateMatches(i2, e2, t2, "img, video, iframe", (e3) => e3.nodeName + ":::" + (e3.getAttribute("src") || e3.getAttribute("data-src"))), this.findAutoAnimateMatches(i2, e2, t2, "pre", (e3) => e3.nodeName + ":::" + e3.innerText), i2.forEach((e3) => {
      n(e3.from, a2) ? e3.options = { scale: false } : n(e3.from, "pre") && (e3.options = { scale: false, styles: ["width", "height"] }, this.findAutoAnimateMatches(i2, e3.from, e3.to, ".hljs .hljs-ln-code", (e4) => e4.textContent, { scale: false, styles: [], measure: this.getLocalBoundingBox.bind(this) }), this.findAutoAnimateMatches(i2, e3.from, e3.to, ".hljs .hljs-ln-line[data-line-number]", (e4) => e4.getAttribute("data-line-number"), { scale: false, styles: ["width"], measure: this.getLocalBoundingBox.bind(this) }));
    }, this), i2;
  }
  getLocalBoundingBox(e2) {
    const t2 = this.Reveal.getScale();
    return { x: Math.round(e2.offsetLeft * t2 * 100) / 100, y: Math.round(e2.offsetTop * t2 * 100) / 100, width: Math.round(e2.offsetWidth * t2 * 100) / 100, height: Math.round(e2.offsetHeight * t2 * 100) / 100 };
  }
  findAutoAnimateMatches(e2, t2, i2, a2, s2, n2) {
    let r2 = {}, o2 = {};
    [].slice.call(t2.querySelectorAll(a2)).forEach((e3, t3) => {
      const i3 = s2(e3);
      "string" == typeof i3 && i3.length && (r2[i3] = r2[i3] || [], r2[i3].push(e3));
    }), [].slice.call(i2.querySelectorAll(a2)).forEach((t3, i3) => {
      const a3 = s2(t3);
      let l2;
      if (o2[a3] = o2[a3] || [], o2[a3].push(t3), r2[a3]) {
        const e3 = o2[a3].length - 1, t4 = r2[a3].length - 1;
        r2[a3][e3] ? (l2 = r2[a3][e3], r2[a3][e3] = null) : r2[a3][t4] && (l2 = r2[a3][t4], r2[a3][t4] = null);
      }
      l2 && e2.push({ from: l2, to: t3, options: n2 });
    });
  }
  getUnmatchedAutoAnimateElements(e2) {
    return [].slice.call(e2.children).reduce((e3, t2) => {
      const i2 = t2.querySelector("[data-auto-animate-target]");
      return t2.hasAttribute("data-auto-animate-target") || i2 || e3.push(t2), t2.querySelector("[data-auto-animate-target]") && (e3 = e3.concat(this.getUnmatchedAutoAnimateElements(t2))), e3;
    }, []);
  }
}
class L {
  constructor(e2) {
    this.Reveal = e2;
  }
  configure(e2, t2) {
    false === e2.fragments ? this.disable() : false === t2.fragments && this.enable();
  }
  disable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
      e2.classList.add("visible"), e2.classList.remove("current-fragment");
    });
  }
  enable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
      e2.classList.remove("visible"), e2.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e2 = this.Reveal.getCurrentSlide();
    if (e2 && this.Reveal.getConfig().fragments) {
      let t2 = e2.querySelectorAll(".fragment:not(.disabled)"), i2 = e2.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return { prev: t2.length - i2.length > 0, next: !!i2.length };
    }
    return { prev: false, next: false };
  }
  sort(e2, t2 = false) {
    e2 = Array.from(e2);
    let i2 = [], a2 = [], s2 = [];
    e2.forEach((e3) => {
      if (e3.hasAttribute("data-fragment-index")) {
        let t3 = parseInt(e3.getAttribute("data-fragment-index"), 10);
        i2[t3] || (i2[t3] = []), i2[t3].push(e3);
      } else
        a2.push([e3]);
    }), i2 = i2.concat(a2);
    let n2 = 0;
    return i2.forEach((e3) => {
      e3.forEach((e4) => {
        s2.push(e4), e4.setAttribute("data-fragment-index", n2);
      }), n2++;
    }), true === t2 ? i2 : s2;
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach((e2) => {
      let i2 = t(e2, "section");
      i2.forEach((e3, t2) => {
        this.sort(e3.querySelectorAll(".fragment"));
      }, this), 0 === i2.length && this.sort(e2.querySelectorAll(".fragment"));
    });
  }
  update(e2, t2) {
    let i2 = { shown: [], hidden: [] }, a2 = this.Reveal.getCurrentSlide();
    if (a2 && this.Reveal.getConfig().fragments && (t2 = t2 || this.sort(a2.querySelectorAll(".fragment"))).length) {
      let s2 = 0;
      if ("number" != typeof e2) {
        let t3 = this.sort(a2.querySelectorAll(".fragment.visible")).pop();
        t3 && (e2 = parseInt(t3.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t2).forEach((t3, a3) => {
        if (t3.hasAttribute("data-fragment-index") && (a3 = parseInt(t3.getAttribute("data-fragment-index"), 10)), s2 = Math.max(s2, a3), a3 <= e2) {
          let s3 = t3.classList.contains("visible");
          t3.classList.add("visible"), t3.classList.remove("current-fragment"), a3 === e2 && (this.Reveal.announceStatus(this.Reveal.getStatusText(t3)), t3.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t3)), s3 || (i2.shown.push(t3), this.Reveal.dispatchEvent({ target: t3, type: "visible", bubbles: false }));
        } else {
          let e3 = t3.classList.contains("visible");
          t3.classList.remove("visible"), t3.classList.remove("current-fragment"), e3 && (this.Reveal.slideContent.stopEmbeddedContent(t3), i2.hidden.push(t3), this.Reveal.dispatchEvent({ target: t3, type: "hidden", bubbles: false }));
        }
      }), e2 = "number" == typeof e2 ? e2 : -1, e2 = Math.max(Math.min(e2, s2), -1), a2.setAttribute("data-fragment", e2);
    }
    return i2;
  }
  sync(e2 = this.Reveal.getCurrentSlide()) {
    return this.sort(e2.querySelectorAll(".fragment"));
  }
  goto(e2, t2 = 0) {
    let i2 = this.Reveal.getCurrentSlide();
    if (i2 && this.Reveal.getConfig().fragments) {
      let a2 = this.sort(i2.querySelectorAll(".fragment:not(.disabled)"));
      if (a2.length) {
        if ("number" != typeof e2) {
          let t3 = this.sort(i2.querySelectorAll(".fragment:not(.disabled).visible")).pop();
          e2 = t3 ? parseInt(t3.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e2 += t2;
        let s2 = this.update(e2, a2);
        return s2.hidden.length && this.Reveal.dispatchEvent({ type: "fragmenthidden", data: { fragment: s2.hidden[0], fragments: s2.hidden } }), s2.shown.length && this.Reveal.dispatchEvent({ type: "fragmentshown", data: { fragment: s2.shown[0], fragments: s2.shown } }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!s2.shown.length && !s2.hidden.length);
      }
    }
    return false;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
}
class C {
  constructor(e2) {
    this.Reveal = e2, this.active = false, this.onSlideClicked = this.onSlideClicked.bind(this);
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.isActive()) {
      this.active = true, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), ".slides section").forEach((e3) => {
        e3.classList.contains("stack") || e3.addEventListener("click", this.onSlideClicked, true);
      });
      const e2 = 70, i2 = this.Reveal.getComputedSlideSize();
      this.overviewSlideWidth = i2.width + e2, this.overviewSlideHeight = i2.height + e2, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
      const a2 = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({ type: "overviewshown", data: { indexh: a2.h, indexv: a2.v, currentSlide: this.Reveal.getCurrentSlide() } });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e2, i2) => {
      e2.setAttribute("data-index-h", i2), s(e2, "translate3d(" + i2 * this.overviewSlideWidth + "px, 0, 0)"), e2.classList.contains("stack") && t(e2, "section").forEach((e3, t2) => {
        e3.setAttribute("data-index-h", i2), e3.setAttribute("data-index-v", t2), s(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
      });
    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e2, i2) => {
      s(e2, "translate3d(" + i2 * this.overviewSlideWidth + "px, 0, 0)"), t(e2, ".slide-background").forEach((e3, t2) => {
        s(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
      });
    });
  }
  update() {
    const e2 = Math.min(window.innerWidth, window.innerHeight), t2 = Math.max(e2 / 5, 150) / e2, i2 = this.Reveal.getIndices();
    this.Reveal.transformSlides({ overview: ["scale(" + t2 + ")", "translateX(" + -i2.h * this.overviewSlideWidth + "px)", "translateY(" + -i2.v * this.overviewSlideHeight + "px)"].join(" ") });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      this.active = false, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
        this.Reveal.getRevealElement().classList.remove("overview-deactivating");
      }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), ".slides section").forEach((e3) => {
        s(e3, ""), e3.removeEventListener("click", this.onSlideClicked, true);
      }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e3) => {
        s(e3, "");
      }), this.Reveal.transformSlides({ overview: "" });
      const e2 = this.Reveal.getIndices();
      this.Reveal.slide(e2.h, e2.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({ type: "overviewhidden", data: { indexh: e2.h, indexv: e2.v, currentSlide: this.Reveal.getCurrentSlide() } });
    }
  }
  toggle(e2) {
    "boolean" == typeof e2 ? e2 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e2) {
    if (this.isActive()) {
      e2.preventDefault();
      let t2 = e2.target;
      for (; t2 && !t2.nodeName.match(/section/gi); )
        t2 = t2.parentNode;
      if (t2 && !t2.classList.contains("disabled") && (this.deactivate(), t2.nodeName.match(/section/gi))) {
        let e3 = parseInt(t2.getAttribute("data-index-h"), 10), i2 = parseInt(t2.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e3, i2);
      }
    }
  }
}
class x {
  constructor(e2) {
    this.Reveal = e2, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
  }
  configure(e2, t2) {
    "linear" === e2.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview";
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, false), document.addEventListener("keypress", this.onDocumentKeyPress, false);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, false), document.removeEventListener("keypress", this.onDocumentKeyPress, false);
  }
  addKeyBinding(e2, t2) {
    "object" == typeof e2 && e2.keyCode ? this.bindings[e2.keyCode] = { callback: t2, key: e2.key, description: e2.description } : this.bindings[e2] = { callback: t2, key: null, description: null };
  }
  removeKeyBinding(e2) {
    delete this.bindings[e2];
  }
  triggerKey(e2) {
    this.onDocumentKeyDown({ keyCode: e2 });
  }
  registerKeyboardShortcut(e2, t2) {
    this.shortcuts[e2] = t2;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyPress(e2) {
    e2.shiftKey && 63 === e2.charCode && this.Reveal.toggleHelp();
  }
  onDocumentKeyDown(e2) {
    let t2 = this.Reveal.getConfig();
    if ("function" == typeof t2.keyboardCondition && false === t2.keyboardCondition(e2))
      return true;
    if ("focused" === t2.keyboardCondition && !this.Reveal.isFocused())
      return true;
    let i2 = e2.keyCode, a2 = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e2);
    let s2 = document.activeElement && true === document.activeElement.isContentEditable, n2 = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), r2 = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), o2 = !(-1 !== [32, 37, 38, 39, 40, 78, 80].indexOf(e2.keyCode) && e2.shiftKey || e2.altKey) && (e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey);
    if (s2 || n2 || r2 || o2)
      return;
    let l2, d2 = [66, 86, 190, 191];
    if ("object" == typeof t2.keyboard)
      for (l2 in t2.keyboard)
        "togglePause" === t2.keyboard[l2] && d2.push(parseInt(l2, 10));
    if (this.Reveal.isPaused() && -1 === d2.indexOf(i2))
      return false;
    let c2 = "linear" === t2.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), h2 = false;
    if ("object" == typeof t2.keyboard) {
      for (l2 in t2.keyboard)
        if (parseInt(l2, 10) === i2) {
          let i3 = t2.keyboard[l2];
          "function" == typeof i3 ? i3.apply(null, [e2]) : "string" == typeof i3 && "function" == typeof this.Reveal[i3] && this.Reveal[i3].call(), h2 = true;
        }
    }
    if (false === h2) {
      for (l2 in this.bindings)
        if (parseInt(l2, 10) === i2) {
          let t3 = this.bindings[l2].callback;
          "function" == typeof t3 ? t3.apply(null, [e2]) : "string" == typeof t3 && "function" == typeof this.Reveal[t3] && this.Reveal[t3].call(), h2 = true;
        }
    }
    false === h2 && (h2 = true, 80 === i2 || 33 === i2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : 78 === i2 || 34 === i2 ? this.Reveal.next({ skipFragments: e2.altKey }) : 72 === i2 || 37 === i2 ? e2.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.left({ skipFragments: e2.altKey }) : 76 === i2 || 39 === i2 ? e2.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.right({ skipFragments: e2.altKey }) : 75 === i2 || 38 === i2 ? e2.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.up({ skipFragments: e2.altKey }) : 74 === i2 || 40 === i2 ? e2.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.down({ skipFragments: e2.altKey }) : 36 === i2 ? this.Reveal.slide(0) : 35 === i2 ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === i2 ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e2.shiftKey ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.next({ skipFragments: e2.altKey })) : 58 === i2 || 59 === i2 || 66 === i2 || 86 === i2 || 190 === i2 || 191 === i2 ? this.Reveal.togglePause() : 70 === i2 ? ((e3) => {
      let t3 = (e3 = e3 || document.documentElement).requestFullscreen || e3.webkitRequestFullscreen || e3.webkitRequestFullScreen || e3.mozRequestFullScreen || e3.msRequestFullscreen;
      t3 && t3.apply(e3);
    })(t2.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i2 ? t2.autoSlideStoppable && this.Reveal.toggleAutoSlide(a2) : h2 = false), h2 ? e2.preventDefault && e2.preventDefault() : 27 !== i2 && 79 !== i2 || (false === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e2.preventDefault && e2.preventDefault()), this.Reveal.cueAutoSlide();
  }
}
class P {
  constructor(e2) {
    var t2, i2, a2;
    a2 = 1e3, (i2 = "MAX_REPLACE_STATE_FREQUENCY") in (t2 = this) ? Object.defineProperty(t2, i2, { value: a2, enumerable: true, configurable: true, writable: true }) : t2[i2] = a2, this.Reveal = e2, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, false);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, false);
  }
  getIndicesFromHash(e2 = window.location.hash) {
    let t2 = e2.replace(/^#\/?/, ""), i2 = t2.split("/");
    if (/^[0-9]*$/.test(i2[0]) || !t2.length) {
      const e3 = this.Reveal.getConfig();
      let t3, a2 = e3.hashOneBasedIndex ? 1 : 0, s2 = parseInt(i2[0], 10) - a2 || 0, n2 = parseInt(i2[1], 10) - a2 || 0;
      return e3.fragmentInURL && (t3 = parseInt(i2[2], 10), isNaN(t3) && (t3 = void 0)), { h: s2, v: n2, f: t3 };
    }
    {
      let e3, i3;
      /\/[-\d]+$/g.test(t2) && (i3 = parseInt(t2.split("/").pop(), 10), i3 = isNaN(i3) ? void 0 : i3, t2 = t2.split("/").shift());
      try {
        e3 = document.getElementById(decodeURIComponent(t2));
      } catch (e4) {
      }
      if (e3)
        return { ...this.Reveal.getIndices(e3), f: i3 };
    }
    return null;
  }
  readURL() {
    const e2 = this.Reveal.getIndices(), t2 = this.getIndicesFromHash();
    t2 ? t2.h === e2.h && t2.v === e2.v && void 0 === t2.f || this.Reveal.slide(t2.h, t2.v, t2.f) : this.Reveal.slide(e2.h || 0, e2.v || 0);
  }
  writeURL(e2) {
    let t2 = this.Reveal.getConfig(), i2 = this.Reveal.getCurrentSlide();
    if (clearTimeout(this.writeURLTimeout), "number" == typeof e2)
      this.writeURLTimeout = setTimeout(this.writeURL, e2);
    else if (i2) {
      let e3 = this.getHash();
      t2.history ? window.location.hash = e3 : t2.hash && ("/" === e3 ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e3));
    }
  }
  replaceState(e2) {
    window.history.replaceState(null, null, e2), this.replaceStateTimestamp = Date.now();
  }
  debouncedReplaceState(e2) {
    clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e2) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e2), this.MAX_REPLACE_STATE_FREQUENCY);
  }
  getHash(e2) {
    let t2 = "/", i2 = e2 || this.Reveal.getCurrentSlide(), a2 = i2 ? i2.getAttribute("id") : null;
    a2 && (a2 = encodeURIComponent(a2));
    let s2 = this.Reveal.getIndices(e2);
    if (this.Reveal.getConfig().fragmentInURL || (s2.f = void 0), "string" == typeof a2 && a2.length)
      t2 = "/" + a2, s2.f >= 0 && (t2 += "/" + s2.f);
    else {
      let e3 = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (s2.h > 0 || s2.v > 0 || s2.f >= 0) && (t2 += s2.h + e3), (s2.v > 0 || s2.f >= 0) && (t2 += "/" + (s2.v + e3)), s2.f >= 0 && (t2 += "/" + s2.f);
    }
    return t2;
  }
  onWindowHashChange(e2) {
    this.readURL();
  }
}
class N {
  constructor(e2) {
    this.Reveal = e2, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
  }
  render() {
    const e2 = this.Reveal.getConfig().rtl, i2 = this.Reveal.getRevealElement();
    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e2 ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e2 ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i2, ".navigate-left"), this.controlsRight = t(i2, ".navigate-right"), this.controlsUp = t(i2, ".navigate-up"), this.controlsDown = t(i2, ".navigate-down"), this.controlsPrev = t(i2, ".navigate-prev"), this.controlsNext = t(i2, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
  }
  configure(e2, t2) {
    this.element.style.display = e2.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e2.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e2.controlsBackArrows);
  }
  bind() {
    let e2 = ["touchstart", "click"];
    v && (e2 = ["touchstart"]), e2.forEach((e3) => {
      this.controlsLeft.forEach((t2) => t2.addEventListener(e3, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.addEventListener(e3, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.addEventListener(e3, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.addEventListener(e3, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.addEventListener(e3, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.addEventListener(e3, this.onNavigateNextClicked, false));
    });
  }
  unbind() {
    ["touchstart", "click"].forEach((e2) => {
      this.controlsLeft.forEach((t2) => t2.removeEventListener(e2, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.removeEventListener(e2, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.removeEventListener(e2, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.removeEventListener(e2, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.removeEventListener(e2, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.removeEventListener(e2, this.onNavigateNextClicked, false));
    });
  }
  update() {
    let e2 = this.Reveal.availableRoutes();
    [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach((e3) => {
      e3.classList.remove("enabled", "fragmented"), e3.setAttribute("disabled", "disabled");
    }), e2.left && this.controlsLeft.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.right && this.controlsRight.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.up && this.controlsUp.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.down && this.controlsDown.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), (e2.left || e2.up) && this.controlsPrev.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), (e2.right || e2.down) && this.controlsNext.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    });
    let t2 = this.Reveal.getCurrentSlide();
    if (t2) {
      let e3 = this.Reveal.fragments.availableRoutes();
      e3.prev && this.controlsPrev.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsNext.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), this.Reveal.isVerticalSlide(t2) ? (e3.prev && this.controlsUp.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsDown.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      })) : (e3.prev && this.controlsLeft.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsRight.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t3 = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e2.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e2.left && 0 === t3.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e2.right && 0 === t3.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  destroy() {
    this.unbind(), this.element.remove();
  }
  onNavigateLeftClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
  }
  onNavigateRightClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
  }
  onNavigateUpClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
}
class M {
  constructor(e2) {
    this.Reveal = e2, this.onProgressClicked = this.onProgressClicked.bind(this);
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
  }
  configure(e2, t2) {
    this.element.style.display = e2.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, false);
  }
  unbind() {
    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, false);
  }
  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e2 = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e2 = 0), this.bar.style.transform = "scaleX(" + e2 + ")";
    }
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e2) {
    this.Reveal.onUserInput(e2), e2.preventDefault();
    let t2 = this.Reveal.getSlides(), i2 = t2.length, a2 = Math.floor(e2.clientX / this.getMaxWidth() * i2);
    this.Reveal.getConfig().rtl && (a2 = i2 - a2);
    let s2 = this.Reveal.getIndices(t2[a2]);
    this.Reveal.slide(s2.h, s2.v);
  }
  destroy() {
    this.element.remove();
  }
}
class D {
  constructor(e2) {
    this.Reveal = e2, this.lastMouseWheelStep = 0, this.cursorHidden = false, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
  }
  configure(e2, t2) {
    e2.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.addEventListener("mousewheel", this.onDocumentMouseScroll, false)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, false)), e2.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, false), document.addEventListener("mousedown", this.onDocumentCursorActive, false)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false));
  }
  showCursor() {
    this.cursorHidden && (this.cursorHidden = false, this.Reveal.getRevealElement().style.cursor = "");
  }
  hideCursor() {
    false === this.cursorHidden && (this.cursorHidden = true, this.Reveal.getRevealElement().style.cursor = "none");
  }
  destroy() {
    this.showCursor(), document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, false), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false);
  }
  onDocumentCursorActive(e2) {
    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
  }
  onDocumentMouseScroll(e2) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t2 = e2.detail || -e2.wheelDelta;
      t2 > 0 ? this.Reveal.next() : t2 < 0 && this.Reveal.prev();
    }
  }
}
const I = (e2, t2) => {
  const i2 = document.createElement("script");
  i2.type = "text/javascript", i2.async = false, i2.defer = false, i2.src = e2, "function" == typeof t2 && (i2.onload = i2.onreadystatechange = (e3) => {
    ("load" === e3.type || /loaded|complete/.test(i2.readyState)) && (i2.onload = i2.onreadystatechange = i2.onerror = null, t2());
  }, i2.onerror = (e3) => {
    i2.onload = i2.onreadystatechange = i2.onerror = null, t2(new Error("Failed loading script: " + i2.src + "\n" + e3));
  });
  const a2 = document.querySelector("head");
  a2.insertBefore(i2, a2.lastChild);
};
class T {
  constructor(e2) {
    this.Reveal = e2, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
  }
  load(e2, t2) {
    return this.state = "loading", e2.forEach(this.registerPlugin.bind(this)), new Promise((e3) => {
      let i2 = [], a2 = 0;
      if (t2.forEach((e4) => {
        e4.condition && !e4.condition() || (e4.async ? this.asyncDependencies.push(e4) : i2.push(e4));
      }), i2.length) {
        a2 = i2.length;
        const t3 = (t4) => {
          t4 && "function" == typeof t4.callback && t4.callback(), 0 == --a2 && this.initPlugins().then(e3);
        };
        i2.forEach((e4) => {
          "string" == typeof e4.id ? (this.registerPlugin(e4), t3(e4)) : "string" == typeof e4.src ? I(e4.src, () => t3(e4)) : (console.warn("Unrecognized plugin format", e4), t3());
        });
      } else
        this.initPlugins().then(e3);
    });
  }
  initPlugins() {
    return new Promise((e2) => {
      let t2 = Object.values(this.registeredPlugins), i2 = t2.length;
      if (0 === i2)
        this.loadAsync().then(e2);
      else {
        let a2, s2 = () => {
          0 == --i2 ? this.loadAsync().then(e2) : a2();
        }, n2 = 0;
        a2 = () => {
          let e3 = t2[n2++];
          if ("function" == typeof e3.init) {
            let t3 = e3.init(this.Reveal);
            t3 && "function" == typeof t3.then ? t3.then(s2) : s2();
          } else
            s2();
        }, a2();
      }
    });
  }
  loadAsync() {
    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e2) => {
      I(e2.src, e2.callback);
    }), Promise.resolve();
  }
  registerPlugin(e2) {
    2 === arguments.length && "string" == typeof arguments[0] ? (e2 = arguments[1]).id = arguments[0] : "function" == typeof e2 && (e2 = e2());
    let t2 = e2.id;
    "string" != typeof t2 ? console.warn("Unrecognized plugin format; can't find plugin.id", e2) : void 0 === this.registeredPlugins[t2] ? (this.registeredPlugins[t2] = e2, "loaded" === this.state && "function" == typeof e2.init && e2.init(this.Reveal)) : console.warn('reveal.js: "' + t2 + '" plugin has already been registered');
  }
  hasPlugin(e2) {
    return !!this.registeredPlugins[e2];
  }
  getPlugin(e2) {
    return this.registeredPlugins[e2];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
  destroy() {
    Object.values(this.registeredPlugins).forEach((e2) => {
      "function" == typeof e2.destroy && e2.destroy();
    }), this.registeredPlugins = {}, this.asyncDependencies = [];
  }
}
class F {
  constructor(e2) {
    this.Reveal = e2;
  }
  async setupPDF() {
    const e2 = this.Reveal.getConfig(), i2 = t(this.Reveal.getRevealElement(), ".slides section"), a2 = e2.slideNumber && /all|print/i.test(e2.showSlideNumber), s2 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n2 = Math.floor(s2.width * (1 + e2.margin)), r2 = Math.floor(s2.height * (1 + e2.margin)), o2 = s2.width, d2 = s2.height;
    await new Promise(requestAnimationFrame), l("@page{size:" + n2 + "px " + r2 + "px; margin: 0px;}"), l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + o2 + "px; max-height:" + d2 + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = n2 + "px", document.body.style.height = r2 + "px";
    const c2 = document.querySelector(".reveal-viewport");
    let h2;
    if (c2) {
      const e3 = window.getComputedStyle(c2);
      e3 && e3.background && (h2 = e3.background);
    }
    await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(o2, d2), await new Promise(requestAnimationFrame);
    const u2 = i2.map((e3) => e3.scrollHeight), g2 = [], v2 = i2[0].parentNode;
    let p2 = 1;
    i2.forEach(function(i3, s3) {
      if (false === i3.classList.contains("stack")) {
        let l2 = (n2 - o2) / 2, c3 = (r2 - d2) / 2;
        const v3 = u2[s3];
        let m2 = Math.max(Math.ceil(v3 / r2), 1);
        m2 = Math.min(m2, e2.pdfMaxPagesPerSlide), (1 === m2 && e2.center || i3.classList.contains("center")) && (c3 = Math.max((r2 - v3) / 2, 0));
        const f2 = document.createElement("div");
        if (g2.push(f2), f2.className = "pdf-page", f2.style.height = (r2 + e2.pdfPageHeightOffset) * m2 + "px", h2 && (f2.style.background = h2), f2.appendChild(i3), i3.style.left = l2 + "px", i3.style.top = c3 + "px", i3.style.width = o2 + "px", this.Reveal.slideContent.layout(i3), i3.slideBackgroundElement && f2.insertBefore(i3.slideBackgroundElement, i3), e2.showNotes) {
          const t2 = this.Reveal.getSlideNotes(i3);
          if (t2) {
            const i4 = 8, a3 = "string" == typeof e2.showNotes ? e2.showNotes : "inline", s4 = document.createElement("div");
            s4.classList.add("speaker-notes"), s4.classList.add("speaker-notes-pdf"), s4.setAttribute("data-layout", a3), s4.innerHTML = t2, "separate-page" === a3 ? g2.push(s4) : (s4.style.left = i4 + "px", s4.style.bottom = i4 + "px", s4.style.width = n2 - 2 * i4 + "px", f2.appendChild(s4));
          }
        }
        if (a2) {
          const e3 = document.createElement("div");
          e3.classList.add("slide-number"), e3.classList.add("slide-number-pdf"), e3.innerHTML = p2++, f2.appendChild(e3);
        }
        if (e2.pdfSeparateFragments) {
          const e3 = this.Reveal.fragments.sort(f2.querySelectorAll(".fragment"), true);
          let t2;
          e3.forEach(function(e4, i4) {
            t2 && t2.forEach(function(e5) {
              e5.classList.remove("current-fragment");
            }), e4.forEach(function(e5) {
              e5.classList.add("visible", "current-fragment");
            }, this);
            const s4 = f2.cloneNode(true);
            if (a2) {
              const e5 = i4 + 1;
              s4.querySelector(".slide-number-pdf").innerHTML += "." + e5;
            }
            g2.push(s4), t2 = e4;
          }, this), e3.forEach(function(e4) {
            e4.forEach(function(e5) {
              e5.classList.remove("visible", "current-fragment");
            });
          });
        } else
          t(f2, ".fragment:not(.fade-out)").forEach(function(e3) {
            e3.classList.add("visible");
          });
      }
    }, this), await new Promise(requestAnimationFrame), g2.forEach((e3) => v2.appendChild(e3)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.dispatchEvent({ type: "pdf-ready" });
  }
  isPrintingPDF() {
    return /print-pdf/gi.test(window.location.search);
  }
}
class z {
  constructor(e2) {
    this.Reveal = e2, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = false, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  bind() {
    let e2 = this.Reveal.getRevealElement();
    "onpointerdown" in window ? (e2.addEventListener("pointerdown", this.onPointerDown, false), e2.addEventListener("pointermove", this.onPointerMove, false), e2.addEventListener("pointerup", this.onPointerUp, false)) : window.navigator.msPointerEnabled ? (e2.addEventListener("MSPointerDown", this.onPointerDown, false), e2.addEventListener("MSPointerMove", this.onPointerMove, false), e2.addEventListener("MSPointerUp", this.onPointerUp, false)) : (e2.addEventListener("touchstart", this.onTouchStart, false), e2.addEventListener("touchmove", this.onTouchMove, false), e2.addEventListener("touchend", this.onTouchEnd, false));
  }
  unbind() {
    let e2 = this.Reveal.getRevealElement();
    e2.removeEventListener("pointerdown", this.onPointerDown, false), e2.removeEventListener("pointermove", this.onPointerMove, false), e2.removeEventListener("pointerup", this.onPointerUp, false), e2.removeEventListener("MSPointerDown", this.onPointerDown, false), e2.removeEventListener("MSPointerMove", this.onPointerMove, false), e2.removeEventListener("MSPointerUp", this.onPointerUp, false), e2.removeEventListener("touchstart", this.onTouchStart, false), e2.removeEventListener("touchmove", this.onTouchMove, false), e2.removeEventListener("touchend", this.onTouchEnd, false);
  }
  isSwipePrevented(e2) {
    if (n(e2, "video, audio"))
      return true;
    for (; e2 && "function" == typeof e2.hasAttribute; ) {
      if (e2.hasAttribute("data-prevent-swipe"))
        return true;
      e2 = e2.parentNode;
    }
    return false;
  }
  onTouchStart(e2) {
    if (this.isSwipePrevented(e2.target))
      return true;
    this.touchStartX = e2.touches[0].clientX, this.touchStartY = e2.touches[0].clientY, this.touchStartCount = e2.touches.length;
  }
  onTouchMove(e2) {
    if (this.isSwipePrevented(e2.target))
      return true;
    let t2 = this.Reveal.getConfig();
    if (this.touchCaptured)
      v && e2.preventDefault();
    else {
      this.Reveal.onUserInput(e2);
      let i2 = e2.touches[0].clientX, a2 = e2.touches[0].clientY;
      if (1 === e2.touches.length && 2 !== this.touchStartCount) {
        let s2 = this.Reveal.availableRoutes({ includeFragments: true }), n2 = i2 - this.touchStartX, r2 = a2 - this.touchStartY;
        n2 > 40 && Math.abs(n2) > Math.abs(r2) ? (this.touchCaptured = true, "linear" === t2.navigationMode ? t2.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : n2 < -40 && Math.abs(n2) > Math.abs(r2) ? (this.touchCaptured = true, "linear" === t2.navigationMode ? t2.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r2 > 40 && s2.up ? (this.touchCaptured = true, "linear" === t2.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : r2 < -40 && s2.down && (this.touchCaptured = true, "linear" === t2.navigationMode ? this.Reveal.next() : this.Reveal.down()), t2.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e2.preventDefault() : e2.preventDefault();
      }
    }
  }
  onTouchEnd(e2) {
    this.touchCaptured = false;
  }
  onPointerDown(e2) {
    e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && "touch" !== e2.pointerType || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchStart(e2));
  }
  onPointerMove(e2) {
    e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && "touch" !== e2.pointerType || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchMove(e2));
  }
  onPointerUp(e2) {
    e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && "touch" !== e2.pointerType || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchEnd(e2));
  }
}
class H {
  constructor(e2) {
    this.Reveal = e2, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
  }
  configure(e2, t2) {
    e2.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, false);
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, false), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false);
  }
  focus() {
    "focus" !== this.state && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = "focus";
  }
  blur() {
    "blur" !== this.state && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = "blur";
  }
  isFocused() {
    return "focus" === this.state;
  }
  destroy() {
    this.Reveal.getRevealElement().classList.remove("focused");
  }
  onRevealPointerDown(e2) {
    this.focus();
  }
  onDocumentPointerDown(e2) {
    let t2 = r(e2.target, ".reveal");
    t2 && t2 === this.Reveal.getRevealElement() || this.blur();
  }
}
class q {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e2, t2) {
    e2.showNotes && this.element.setAttribute("data-layout", "string" == typeof e2.showNotes ? e2.showNotes : "inline");
  }
  update() {
    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e2 = this.Reveal.getCurrentSlide()) {
    if (e2.hasAttribute("data-notes"))
      return e2.getAttribute("data-notes");
    let t2 = e2.querySelectorAll("aside.notes");
    return t2 ? Array.from(t2).map((e3) => e3.innerHTML).join("\n") : null;
  }
  destroy() {
    this.element.remove();
  }
}
class B {
  constructor(e2, t2) {
    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = false, this.progress = 0, this.progressOffset = 1, this.container = e2, this.progressCheck = t2, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
  }
  setPlaying(e2) {
    const t2 = this.playing;
    this.playing = e2, !t2 && this.playing ? this.animate() : this.render();
  }
  animate() {
    const e2 = this.progress;
    this.progress = this.progressCheck(), e2 > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e2 = this.playing ? this.progress : 0, t2 = this.diameter2 - this.thickness, i2 = this.diameter2, a2 = this.diameter2, s2 = 28;
    this.progressOffset += 0.1 * (1 - this.progressOffset);
    const n2 = -Math.PI / 2 + e2 * (2 * Math.PI), r2 = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i2, a2, t2 + 4, 0, 2 * Math.PI, false), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i2, a2, t2, 0, 2 * Math.PI, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i2, a2, t2, r2, n2, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i2 - 14, a2 - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, s2), this.context.fillRect(18, 0, 10, s2)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, s2), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
  }
  on(e2, t2) {
    this.canvas.addEventListener(e2, t2, false);
  }
  off(e2, t2) {
    this.canvas.removeEventListener(e2, t2, false);
  }
  destroy() {
    this.playing = false, this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
}
var O = { width: 960, height: 700, margin: 0.04, minScale: 0.2, maxScale: 2, controls: true, controlsTutorial: true, controlsLayout: "bottom-right", controlsBackArrows: "faded", progress: true, slideNumber: false, showSlideNumber: "all", hashOneBasedIndex: false, hash: false, respondToHashChanges: true, history: false, keyboard: true, keyboardCondition: null, disableLayout: false, overview: true, center: true, touch: true, loop: false, rtl: false, navigationMode: "default", shuffle: false, fragments: true, fragmentInURL: true, embedded: false, help: true, pause: true, showNotes: false, showHiddenSlides: false, autoPlayMedia: null, preloadIframes: null, autoAnimate: true, autoAnimateMatcher: null, autoAnimateEasing: "ease", autoAnimateDuration: 1, autoAnimateUnmatched: true, autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"], autoSlide: 0, autoSlideStoppable: true, autoSlideMethod: null, defaultTiming: null, mouseWheel: false, previewLinks: false, postMessage: true, postMessageEvents: false, focusBodyOnPageVisibilityChange: true, transition: "slide", transitionSpeed: "default", backgroundTransition: "fade", parallaxBackgroundImage: "", parallaxBackgroundSize: "", parallaxBackgroundRepeat: "", parallaxBackgroundPosition: "", parallaxBackgroundHorizontal: null, parallaxBackgroundVertical: null, pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY, pdfSeparateFragments: true, pdfPageHeightOffset: -1, viewDistance: 3, mobileViewDistance: 2, display: "block", hideInactiveCursor: true, hideCursorTime: 5e3, dependencies: [], plugins: [] };
function U(n2, l2) {
  arguments.length < 2 && (l2 = arguments[0], n2 = document.querySelector(".reveal"));
  const h2 = {};
  let u2, v2, p2, m2, f2, w2 = {}, S2 = false, A2 = { hasNavigatedHorizontally: false, hasNavigatedVertically: false }, I2 = [], U2 = 1, W2 = { layout: "", overview: "" }, K2 = {}, V = "idle", $ = 0, j = 0, X = -1, Y = false, _ = new b(h2), G = new y(h2), J = new k(h2), Q = new E(h2), Z = new L(h2), ee = new C(h2), te = new x(h2), ie = new P(h2), ae = new N(h2), se = new M(h2), ne = new D(h2), re = new T(h2), oe = new F(h2), le = new H(h2), de = new z(h2), ce = new q(h2);
  function he(e2) {
    if (!n2)
      throw 'Unable to find presentation root (<div class="reveal">).';
    if (K2.wrapper = n2, K2.slides = n2.querySelector(".slides"), !K2.slides)
      throw 'Unable to find slides container (<div class="slides">).';
    return w2 = { ...O, ...w2, ...l2, ...e2, ...d() }, ue(), window.addEventListener("load", He, false), re.load(w2.plugins, w2.dependencies).then(ge), new Promise((e3) => h2.on("ready", e3));
  }
  function ue() {
    true === w2.embedded ? K2.viewport = r(n2, ".reveal-viewport") || n2 : (K2.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), K2.viewport.classList.add("reveal-viewport");
  }
  function ge() {
    S2 = true, ve(), pe(), Ee(), ye(), we(), tt(), Re(), ie.readURL(), Q.update(true), setTimeout(() => {
      K2.slides.classList.remove("no-transition"), K2.wrapper.classList.add("ready"), Pe({ type: "ready", data: { indexh: u2, indexv: v2, currentSlide: m2 } });
    }, 1), oe.isPrintingPDF() && (Ae(), "complete" === document.readyState ? oe.setupPDF() : window.addEventListener("load", () => {
      oe.setupPDF();
    }));
  }
  function ve() {
    w2.showHiddenSlides || t(K2.wrapper, 'section[data-visibility="hidden"]').forEach((e2) => {
      e2.parentNode.removeChild(e2);
    });
  }
  function pe() {
    K2.slides.classList.add("no-transition"), g ? K2.wrapper.classList.add("no-hover") : K2.wrapper.classList.remove("no-hover"), Q.render(), G.render(), ae.render(), se.render(), ce.render(), K2.pauseOverlay = o(K2.wrapper, "div", "pause-overlay", w2.controls ? '<button class="resume-button">Resume presentation</button>' : null), K2.statusElement = me(), K2.wrapper.setAttribute("role", "application");
  }
  function me() {
    let e2 = K2.wrapper.querySelector(".aria-status");
    return e2 || (e2 = document.createElement("div"), e2.style.position = "absolute", e2.style.height = "1px", e2.style.width = "1px", e2.style.overflow = "hidden", e2.style.clip = "rect( 1px, 1px, 1px, 1px )", e2.classList.add("aria-status"), e2.setAttribute("aria-live", "polite"), e2.setAttribute("aria-atomic", "true"), K2.wrapper.appendChild(e2)), e2;
  }
  function fe(e2) {
    K2.statusElement.textContent = e2;
  }
  function be(e2) {
    let t2 = "";
    if (3 === e2.nodeType)
      t2 += e2.textContent;
    else if (1 === e2.nodeType) {
      let i2 = e2.getAttribute("aria-hidden"), a2 = "none" === window.getComputedStyle(e2).display;
      "true" === i2 || a2 || Array.from(e2.childNodes).forEach((e3) => {
        t2 += be(e3);
      });
    }
    return t2 = t2.trim(), "" === t2 ? "" : t2 + " ";
  }
  function ye() {
    setInterval(() => {
      0 === K2.wrapper.scrollTop && 0 === K2.wrapper.scrollLeft || (K2.wrapper.scrollTop = 0, K2.wrapper.scrollLeft = 0);
    }, 1e3);
  }
  function we() {
    document.addEventListener("fullscreenchange", Bt), document.addEventListener("webkitfullscreenchange", Bt);
  }
  function Ee() {
    w2.postMessage && window.addEventListener("message", Tt, false);
  }
  function Re(t2) {
    const a2 = { ...w2 };
    if ("object" == typeof t2 && e(w2, t2), false === h2.isReady())
      return;
    const s2 = K2.wrapper.querySelectorAll(".slides section").length;
    K2.wrapper.classList.remove(a2.transition), K2.wrapper.classList.add(w2.transition), K2.wrapper.setAttribute("data-transition-speed", w2.transitionSpeed), K2.wrapper.setAttribute("data-background-transition", w2.backgroundTransition), K2.viewport.style.setProperty("--slide-width", w2.width + "px"), K2.viewport.style.setProperty("--slide-height", w2.height + "px"), w2.shuffle && it(), i(K2.wrapper, "embedded", w2.embedded), i(K2.wrapper, "rtl", w2.rtl), i(K2.wrapper, "center", w2.center), false === w2.pause && Xe(), w2.previewLinks ? (Me(), De("[data-preview-link=false]")) : (De(), Me("[data-preview-link]:not([data-preview-link=false])")), J.reset(), f2 && (f2.destroy(), f2 = null), s2 > 1 && w2.autoSlide && w2.autoSlideStoppable && (f2 = new B(K2.wrapper, () => Math.min(Math.max((Date.now() - X) / $, 0), 1)), f2.on("click", Ut), Y = false), "default" !== w2.navigationMode ? K2.wrapper.setAttribute("data-navigation-mode", w2.navigationMode) : K2.wrapper.removeAttribute("data-navigation-mode"), ce.configure(w2, a2), le.configure(w2, a2), ne.configure(w2, a2), ae.configure(w2, a2), se.configure(w2, a2), te.configure(w2, a2), Z.configure(w2, a2), G.configure(w2, a2), Ze();
  }
  function Se() {
    window.addEventListener("resize", Ht, false), w2.touch && de.bind(), w2.keyboard && te.bind(), w2.progress && se.bind(), w2.respondToHashChanges && ie.bind(), ae.bind(), le.bind(), K2.slides.addEventListener("click", zt, false), K2.slides.addEventListener("transitionend", Ft, false), K2.pauseOverlay.addEventListener("click", Xe, false), w2.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", qt, false);
  }
  function Ae() {
    de.unbind(), le.unbind(), te.unbind(), ae.unbind(), se.unbind(), ie.unbind(), window.removeEventListener("resize", Ht, false), K2.slides.removeEventListener("click", zt, false), K2.slides.removeEventListener("transitionend", Ft, false), K2.pauseOverlay.removeEventListener("click", Xe, false);
  }
  function ke() {
    Ae(), At(), De(), ce.destroy(), le.destroy(), re.destroy(), ne.destroy(), ae.destroy(), se.destroy(), Q.destroy(), G.destroy(), document.removeEventListener("fullscreenchange", Bt), document.removeEventListener("webkitfullscreenchange", Bt), document.removeEventListener("visibilitychange", qt, false), window.removeEventListener("message", Tt, false), window.removeEventListener("load", He, false), K2.pauseOverlay && K2.pauseOverlay.remove(), K2.statusElement && K2.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), K2.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), K2.wrapper.removeAttribute("data-transition-speed"), K2.wrapper.removeAttribute("data-background-transition"), K2.viewport.classList.remove("reveal-viewport"), K2.viewport.style.removeProperty("--slide-width"), K2.viewport.style.removeProperty("--slide-height"), K2.slides.style.removeProperty("width"), K2.slides.style.removeProperty("height"), K2.slides.style.removeProperty("zoom"), K2.slides.style.removeProperty("left"), K2.slides.style.removeProperty("top"), K2.slides.style.removeProperty("bottom"), K2.slides.style.removeProperty("right"), K2.slides.style.removeProperty("transform"), Array.from(K2.wrapper.querySelectorAll(".slides section")).forEach((e2) => {
      e2.style.removeProperty("display"), e2.style.removeProperty("top"), e2.removeAttribute("hidden"), e2.removeAttribute("aria-hidden");
    });
  }
  function Le(e2, t2, i2) {
    n2.addEventListener(e2, t2, i2);
  }
  function Ce(e2, t2, i2) {
    n2.removeEventListener(e2, t2, i2);
  }
  function xe(e2) {
    "string" == typeof e2.layout && (W2.layout = e2.layout), "string" == typeof e2.overview && (W2.overview = e2.overview), W2.layout ? s(K2.slides, W2.layout + " " + W2.overview) : s(K2.slides, W2.overview);
  }
  function Pe({ target: t2 = K2.wrapper, type: i2, data: a2, bubbles: s2 = true }) {
    let n3 = document.createEvent("HTMLEvents", 1, 2);
    return n3.initEvent(i2, s2, true), e(n3, a2), t2.dispatchEvent(n3), t2 === K2.wrapper && Ne(i2), n3;
  }
  function Ne(t2, i2) {
    if (w2.postMessageEvents && window.parent !== window.self) {
      let a2 = { namespace: "reveal", eventName: t2, state: Et() };
      e(a2, i2), window.parent.postMessage(JSON.stringify(a2), "*");
    }
  }
  function Me(e2 = "a") {
    Array.from(K2.wrapper.querySelectorAll(e2)).forEach((e3) => {
      /^(http|www)/gi.test(e3.getAttribute("href")) && e3.addEventListener("click", Ot, false);
    });
  }
  function De(e2 = "a") {
    Array.from(K2.wrapper.querySelectorAll(e2)).forEach((e3) => {
      /^(http|www)/gi.test(e3.getAttribute("href")) && e3.removeEventListener("click", Ot, false);
    });
  }
  function Ie(e2) {
    ze(), K2.overlay = document.createElement("div"), K2.overlay.classList.add("overlay"), K2.overlay.classList.add("overlay-preview"), K2.wrapper.appendChild(K2.overlay), K2.overlay.innerHTML = `<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${e2}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${e2}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`, K2.overlay.querySelector("iframe").addEventListener("load", (e3) => {
      K2.overlay.classList.add("loaded");
    }, false), K2.overlay.querySelector(".close").addEventListener("click", (e3) => {
      ze(), e3.preventDefault();
    }, false), K2.overlay.querySelector(".external").addEventListener("click", (e3) => {
      ze();
    }, false);
  }
  function Te(e2) {
    "boolean" == typeof e2 ? e2 ? Fe() : ze() : K2.overlay ? ze() : Fe();
  }
  function Fe() {
    if (w2.help) {
      ze(), K2.overlay = document.createElement("div"), K2.overlay.classList.add("overlay"), K2.overlay.classList.add("overlay-help"), K2.wrapper.appendChild(K2.overlay);
      let e2 = '<p class="title">Keyboard Shortcuts</p><br/>', t2 = te.getShortcuts(), i2 = te.getBindings();
      e2 += "<table><th>KEY</th><th>ACTION</th>";
      for (let i3 in t2)
        e2 += `<tr><td>${i3}</td><td>${t2[i3]}</td></tr>`;
      for (let t3 in i2)
        i2[t3].key && i2[t3].description && (e2 += `<tr><td>${i2[t3].key}</td><td>${i2[t3].description}</td></tr>`);
      e2 += "</table>", K2.overlay.innerHTML = `
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${e2}</div>
				</div>
			`, K2.overlay.querySelector(".close").addEventListener("click", (e3) => {
        ze(), e3.preventDefault();
      }, false);
    }
  }
  function ze() {
    return !!K2.overlay && (K2.overlay.parentNode.removeChild(K2.overlay), K2.overlay = null, true);
  }
  function He() {
    if (K2.wrapper && !oe.isPrintingPDF()) {
      if (!w2.disableLayout) {
        g && !w2.embedded && document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
        const e2 = Be(), t2 = U2;
        qe(w2.width, w2.height), K2.slides.style.width = e2.width + "px", K2.slides.style.height = e2.height + "px", U2 = Math.min(e2.presentationWidth / e2.width, e2.presentationHeight / e2.height), U2 = Math.max(U2, w2.minScale), U2 = Math.min(U2, w2.maxScale), 1 === U2 ? (K2.slides.style.zoom = "", K2.slides.style.left = "", K2.slides.style.top = "", K2.slides.style.bottom = "", K2.slides.style.right = "", xe({ layout: "" })) : (K2.slides.style.zoom = "", K2.slides.style.left = "50%", K2.slides.style.top = "50%", K2.slides.style.bottom = "auto", K2.slides.style.right = "auto", xe({ layout: "translate(-50%, -50%) scale(" + U2 + ")" }));
        const i2 = Array.from(K2.wrapper.querySelectorAll(".slides section"));
        for (let t3 = 0, a2 = i2.length; t3 < a2; t3++) {
          const a3 = i2[t3];
          "none" !== a3.style.display && (w2.center || a3.classList.contains("center") ? a3.classList.contains("stack") ? a3.style.top = 0 : a3.style.top = Math.max((e2.height - a3.scrollHeight) / 2, 0) + "px" : a3.style.top = "");
        }
        t2 !== U2 && Pe({ type: "resize", data: { oldScale: t2, scale: U2, size: e2 } });
      }
      K2.viewport.style.setProperty("--slide-scale", U2), se.update(), Q.updateParallax(), ee.isActive() && ee.update();
    }
  }
  function qe(e2, i2) {
    t(K2.slides, "section > .stretch, section > .r-stretch").forEach((t2) => {
      let a2 = c(t2, i2);
      if (/(img|video)/gi.test(t2.nodeName)) {
        const i3 = t2.naturalWidth || t2.videoWidth, s2 = t2.naturalHeight || t2.videoHeight, n3 = Math.min(e2 / i3, a2 / s2);
        t2.style.width = i3 * n3 + "px", t2.style.height = s2 * n3 + "px";
      } else
        t2.style.width = e2 + "px", t2.style.height = a2 + "px";
    });
  }
  function Be(e2, t2) {
    const i2 = { width: w2.width, height: w2.height, presentationWidth: e2 || K2.wrapper.offsetWidth, presentationHeight: t2 || K2.wrapper.offsetHeight };
    return i2.presentationWidth -= i2.presentationWidth * w2.margin, i2.presentationHeight -= i2.presentationHeight * w2.margin, "string" == typeof i2.width && /%$/.test(i2.width) && (i2.width = parseInt(i2.width, 10) / 100 * i2.presentationWidth), "string" == typeof i2.height && /%$/.test(i2.height) && (i2.height = parseInt(i2.height, 10) / 100 * i2.presentationHeight), i2;
  }
  function Oe(e2, t2) {
    "object" == typeof e2 && "function" == typeof e2.setAttribute && e2.setAttribute("data-previous-indexv", t2 || 0);
  }
  function Ue(e2) {
    if ("object" == typeof e2 && "function" == typeof e2.setAttribute && e2.classList.contains("stack")) {
      const t2 = e2.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e2.getAttribute(t2) || 0, 10);
    }
    return 0;
  }
  function We(e2 = m2) {
    return e2 && e2.parentNode && !!e2.parentNode.nodeName.match(/section/i);
  }
  function Ke() {
    return !(!m2 || !We(m2)) && !m2.nextElementSibling;
  }
  function Ve() {
    return 0 === u2 && 0 === v2;
  }
  function $e() {
    return !!m2 && (!m2.nextElementSibling && (!We(m2) || !m2.parentNode.nextElementSibling));
  }
  function je() {
    if (w2.pause) {
      const e2 = K2.wrapper.classList.contains("paused");
      At(), K2.wrapper.classList.add("paused"), false === e2 && Pe({ type: "paused" });
    }
  }
  function Xe() {
    const e2 = K2.wrapper.classList.contains("paused");
    K2.wrapper.classList.remove("paused"), St(), e2 && Pe({ type: "resumed" });
  }
  function Ye(e2) {
    "boolean" == typeof e2 ? e2 ? je() : Xe() : _e() ? Xe() : je();
  }
  function _e() {
    return K2.wrapper.classList.contains("paused");
  }
  function Ge(e2) {
    "boolean" == typeof e2 ? e2 ? Lt() : kt() : Y ? Lt() : kt();
  }
  function Je() {
    return !(!$ || Y);
  }
  function Qe(e2, t2, i2, a2) {
    if (Pe({ type: "beforeslidechange", data: { indexh: void 0 === e2 ? u2 : e2, indexv: void 0 === t2 ? v2 : t2, origin: a2 } }).defaultPrevented)
      return;
    p2 = m2;
    const s2 = K2.wrapper.querySelectorAll(".slides>section");
    if (0 === s2.length)
      return;
    void 0 !== t2 || ee.isActive() || (t2 = Ue(s2[e2])), p2 && p2.parentNode && p2.parentNode.classList.contains("stack") && Oe(p2.parentNode, v2);
    const n3 = I2.concat();
    I2.length = 0;
    let r2 = u2 || 0, o2 = v2 || 0;
    u2 = at(".slides>section", void 0 === e2 ? u2 : e2), v2 = at(".slides>section.present>section", void 0 === t2 ? v2 : t2);
    let l3 = u2 !== r2 || v2 !== o2;
    l3 || (p2 = null);
    let d2 = s2[u2], c2 = d2.querySelectorAll("section");
    m2 = c2[v2] || d2;
    let h3 = false;
    l3 && p2 && m2 && !ee.isActive() && (p2.hasAttribute("data-auto-animate") && m2.hasAttribute("data-auto-animate") && p2.getAttribute("data-auto-animate-id") === m2.getAttribute("data-auto-animate-id") && !(u2 > r2 || v2 > o2 ? m2 : p2).hasAttribute("data-auto-animate-restart") && (h3 = true, K2.slides.classList.add("disable-slide-transitions")), V = "running"), rt(), He(), ee.isActive() && ee.update(), void 0 !== i2 && Z.goto(i2), p2 && p2 !== m2 && (p2.classList.remove("present"), p2.setAttribute("aria-hidden", "true"), Ve() && setTimeout(() => {
      vt().forEach((e3) => {
        Oe(e3, 0);
      });
    }, 0));
    e:
      for (let e3 = 0, t3 = I2.length; e3 < t3; e3++) {
        for (let t4 = 0; t4 < n3.length; t4++)
          if (n3[t4] === I2[e3]) {
            n3.splice(t4, 1);
            continue e;
          }
        K2.viewport.classList.add(I2[e3]), Pe({ type: I2[e3] });
      }
    for (; n3.length; )
      K2.viewport.classList.remove(n3.pop());
    l3 && Pe({ type: "slidechanged", data: { indexh: u2, indexv: v2, previousSlide: p2, currentSlide: m2, origin: a2 } }), !l3 && p2 || (_.stopEmbeddedContent(p2), _.startEmbeddedContent(m2)), requestAnimationFrame(() => {
      fe(be(m2));
    }), se.update(), ae.update(), ce.update(), Q.update(), Q.updateParallax(), G.update(), Z.update(), ie.writeURL(), St(), h3 && (setTimeout(() => {
      K2.slides.classList.remove("disable-slide-transitions");
    }, 0), w2.autoAnimate && J.run(p2, m2));
  }
  function Ze() {
    Ae(), Se(), He(), $ = w2.autoSlide, St(), Q.create(), ie.writeURL(), Z.sortAll(), ae.update(), se.update(), rt(), ce.update(), ce.updateVisibility(), Q.update(true), G.update(), _.formatEmbeddedContent(), false === w2.autoPlayMedia ? _.stopEmbeddedContent(m2, { unloadIframes: false }) : _.startEmbeddedContent(m2), ee.isActive() && ee.layout();
  }
  function et(e2 = m2) {
    Q.sync(e2), Z.sync(e2), _.load(e2), Q.update(), ce.update();
  }
  function tt() {
    ut().forEach((e2) => {
      t(e2, "section").forEach((e3, t2) => {
        t2 > 0 && (e3.classList.remove("present"), e3.classList.remove("past"), e3.classList.add("future"), e3.setAttribute("aria-hidden", "true"));
      });
    });
  }
  function it(e2 = ut()) {
    e2.forEach((t2, i2) => {
      let a2 = e2[Math.floor(Math.random() * e2.length)];
      a2.parentNode === t2.parentNode && t2.parentNode.insertBefore(t2, a2);
      let s2 = t2.querySelectorAll("section");
      s2.length && it(s2);
    });
  }
  function at(e2, i2) {
    let a2 = t(K2.wrapper, e2), s2 = a2.length, n3 = oe.isPrintingPDF(), r2 = false, o2 = false;
    if (s2) {
      w2.loop && (i2 >= s2 && (r2 = true), (i2 %= s2) < 0 && (i2 = s2 + i2, o2 = true)), i2 = Math.max(Math.min(i2, s2 - 1), 0);
      for (let e4 = 0; e4 < s2; e4++) {
        let t3 = a2[e4], s3 = w2.rtl && !We(t3);
        t3.classList.remove("past"), t3.classList.remove("present"), t3.classList.remove("future"), t3.setAttribute("hidden", ""), t3.setAttribute("aria-hidden", "true"), t3.querySelector("section") && t3.classList.add("stack"), n3 ? t3.classList.add("present") : e4 < i2 ? (t3.classList.add(s3 ? "future" : "past"), w2.fragments && st(t3)) : e4 > i2 ? (t3.classList.add(s3 ? "past" : "future"), w2.fragments && nt(t3)) : e4 === i2 && w2.fragments && (r2 ? nt(t3) : o2 && st(t3));
      }
      let e3 = a2[i2], t2 = e3.classList.contains("present");
      e3.classList.add("present"), e3.removeAttribute("hidden"), e3.removeAttribute("aria-hidden"), t2 || Pe({ target: e3, type: "visible", bubbles: false });
      let l3 = e3.getAttribute("data-state");
      l3 && (I2 = I2.concat(l3.split(" ")));
    } else
      i2 = 0;
    return i2;
  }
  function st(e2) {
    t(e2, ".fragment").forEach((e3) => {
      e3.classList.add("visible"), e3.classList.remove("current-fragment");
    });
  }
  function nt(e2) {
    t(e2, ".fragment.visible").forEach((e3) => {
      e3.classList.remove("visible", "current-fragment");
    });
  }
  function rt() {
    let e2, i2, a2 = ut(), s2 = a2.length;
    if (s2 && void 0 !== u2) {
      let n3 = ee.isActive() ? 10 : w2.viewDistance;
      g && (n3 = ee.isActive() ? 6 : w2.mobileViewDistance), oe.isPrintingPDF() && (n3 = Number.MAX_VALUE);
      for (let r2 = 0; r2 < s2; r2++) {
        let o2 = a2[r2], l3 = t(o2, "section"), d2 = l3.length;
        if (e2 = Math.abs((u2 || 0) - r2) || 0, w2.loop && (e2 = Math.abs(((u2 || 0) - r2) % (s2 - n3)) || 0), e2 < n3 ? _.load(o2) : _.unload(o2), d2) {
          let t2 = Ue(o2);
          for (let a3 = 0; a3 < d2; a3++) {
            let s3 = l3[a3];
            i2 = r2 === (u2 || 0) ? Math.abs((v2 || 0) - a3) : Math.abs(a3 - t2), e2 + i2 < n3 ? _.load(s3) : _.unload(s3);
          }
        }
      }
      mt() ? K2.wrapper.classList.add("has-vertical-slides") : K2.wrapper.classList.remove("has-vertical-slides"), pt() ? K2.wrapper.classList.add("has-horizontal-slides") : K2.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function ot({ includeFragments: e2 = false } = {}) {
    let t2 = K2.wrapper.querySelectorAll(".slides>section"), i2 = K2.wrapper.querySelectorAll(".slides>section.present>section"), a2 = { left: u2 > 0, right: u2 < t2.length - 1, up: v2 > 0, down: v2 < i2.length - 1 };
    if (w2.loop && (t2.length > 1 && (a2.left = true, a2.right = true), i2.length > 1 && (a2.up = true, a2.down = true)), t2.length > 1 && "linear" === w2.navigationMode && (a2.right = a2.right || a2.down, a2.left = a2.left || a2.up), true === e2) {
      let e3 = Z.availableRoutes();
      a2.left = a2.left || e3.prev, a2.up = a2.up || e3.prev, a2.down = a2.down || e3.next, a2.right = a2.right || e3.next;
    }
    if (w2.rtl) {
      let e3 = a2.left;
      a2.left = a2.right, a2.right = e3;
    }
    return a2;
  }
  function lt(e2 = m2) {
    let t2 = ut(), i2 = 0;
    e:
      for (let a2 = 0; a2 < t2.length; a2++) {
        let s2 = t2[a2], n3 = s2.querySelectorAll("section");
        for (let t3 = 0; t3 < n3.length; t3++) {
          if (n3[t3] === e2)
            break e;
          "uncounted" !== n3[t3].dataset.visibility && i2++;
        }
        if (s2 === e2)
          break;
        false === s2.classList.contains("stack") && "uncounted" !== s2.dataset.visibility && i2++;
      }
    return i2;
  }
  function dt() {
    let e2 = bt(), t2 = lt();
    if (m2) {
      let e3 = m2.querySelectorAll(".fragment");
      if (e3.length > 0) {
        let i2 = 0.9;
        t2 += m2.querySelectorAll(".fragment.visible").length / e3.length * i2;
      }
    }
    return Math.min(t2 / (e2 - 1), 1);
  }
  function ct(e2) {
    let i2, a2 = u2, s2 = v2;
    if (e2) {
      let i3 = We(e2), n3 = i3 ? e2.parentNode : e2, r2 = ut();
      a2 = Math.max(r2.indexOf(n3), 0), s2 = void 0, i3 && (s2 = Math.max(t(e2.parentNode, "section").indexOf(e2), 0));
    }
    if (!e2 && m2) {
      if (m2.querySelectorAll(".fragment").length > 0) {
        let e3 = m2.querySelector(".current-fragment");
        i2 = e3 && e3.hasAttribute("data-fragment-index") ? parseInt(e3.getAttribute("data-fragment-index"), 10) : m2.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return { h: a2, v: s2, f: i2 };
  }
  function ht() {
    return t(K2.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])');
  }
  function ut() {
    return t(K2.wrapper, ".slides>section");
  }
  function gt() {
    return t(K2.wrapper, ".slides>section>section");
  }
  function vt() {
    return t(K2.wrapper, ".slides>section.stack");
  }
  function pt() {
    return ut().length > 1;
  }
  function mt() {
    return gt().length > 1;
  }
  function ft() {
    return ht().map((e2) => {
      let t2 = {};
      for (let i2 = 0; i2 < e2.attributes.length; i2++) {
        let a2 = e2.attributes[i2];
        t2[a2.name] = a2.value;
      }
      return t2;
    });
  }
  function bt() {
    return ht().length;
  }
  function yt(e2, t2) {
    let i2 = ut()[e2], a2 = i2 && i2.querySelectorAll("section");
    return a2 && a2.length && "number" == typeof t2 ? a2 ? a2[t2] : void 0 : i2;
  }
  function wt(e2, t2) {
    let i2 = "number" == typeof e2 ? yt(e2, t2) : e2;
    if (i2)
      return i2.slideBackgroundElement;
  }
  function Et() {
    let e2 = ct();
    return { indexh: e2.h, indexv: e2.v, indexf: e2.f, paused: _e(), overview: ee.isActive() };
  }
  function Rt(e2) {
    if ("object" == typeof e2) {
      Qe(a(e2.indexh), a(e2.indexv), a(e2.indexf));
      let t2 = a(e2.paused), i2 = a(e2.overview);
      "boolean" == typeof t2 && t2 !== _e() && Ye(t2), "boolean" == typeof i2 && i2 !== ee.isActive() && ee.toggle(i2);
    }
  }
  function St() {
    if (At(), m2 && false !== w2.autoSlide) {
      let e2 = m2.querySelector(".current-fragment");
      e2 || (e2 = m2.querySelector(".fragment"));
      let i2 = e2 ? e2.getAttribute("data-autoslide") : null, a2 = m2.parentNode ? m2.parentNode.getAttribute("data-autoslide") : null, s2 = m2.getAttribute("data-autoslide");
      i2 ? $ = parseInt(i2, 10) : s2 ? $ = parseInt(s2, 10) : a2 ? $ = parseInt(a2, 10) : ($ = w2.autoSlide, 0 === m2.querySelectorAll(".fragment").length && t(m2, "video, audio").forEach((e3) => {
        e3.hasAttribute("data-autoplay") && $ && 1e3 * e3.duration / e3.playbackRate > $ && ($ = 1e3 * e3.duration / e3.playbackRate + 1e3);
      })), !$ || Y || _e() || ee.isActive() || $e() && !Z.availableRoutes().next && true !== w2.loop || (j = setTimeout(() => {
        "function" == typeof w2.autoSlideMethod ? w2.autoSlideMethod() : Dt(), St();
      }, $), X = Date.now()), f2 && f2.setPlaying(-1 !== j);
    }
  }
  function At() {
    clearTimeout(j), j = -1;
  }
  function kt() {
    $ && !Y && (Y = true, Pe({ type: "autoslidepaused" }), clearTimeout(j), f2 && f2.setPlaying(false));
  }
  function Lt() {
    $ && Y && (Y = false, Pe({ type: "autoslideresumed" }), St());
  }
  function Ct({ skipFragments: e2 = false } = {}) {
    A2.hasNavigatedHorizontally = true, w2.rtl ? (ee.isActive() || e2 || false === Z.next()) && ot().left && Qe(u2 + 1, "grid" === w2.navigationMode ? v2 : void 0) : (ee.isActive() || e2 || false === Z.prev()) && ot().left && Qe(u2 - 1, "grid" === w2.navigationMode ? v2 : void 0);
  }
  function xt({ skipFragments: e2 = false } = {}) {
    A2.hasNavigatedHorizontally = true, w2.rtl ? (ee.isActive() || e2 || false === Z.prev()) && ot().right && Qe(u2 - 1, "grid" === w2.navigationMode ? v2 : void 0) : (ee.isActive() || e2 || false === Z.next()) && ot().right && Qe(u2 + 1, "grid" === w2.navigationMode ? v2 : void 0);
  }
  function Pt({ skipFragments: e2 = false } = {}) {
    (ee.isActive() || e2 || false === Z.prev()) && ot().up && Qe(u2, v2 - 1);
  }
  function Nt({ skipFragments: e2 = false } = {}) {
    A2.hasNavigatedVertically = true, (ee.isActive() || e2 || false === Z.next()) && ot().down && Qe(u2, v2 + 1);
  }
  function Mt({ skipFragments: e2 = false } = {}) {
    if (e2 || false === Z.prev())
      if (ot().up)
        Pt({ skipFragments: e2 });
      else {
        let i2;
        if (i2 = w2.rtl ? t(K2.wrapper, ".slides>section.future").pop() : t(K2.wrapper, ".slides>section.past").pop(), i2 && i2.classList.contains("stack")) {
          let e3 = i2.querySelectorAll("section").length - 1 || void 0;
          Qe(u2 - 1, e3);
        } else
          Ct({ skipFragments: e2 });
      }
  }
  function Dt({ skipFragments: e2 = false } = {}) {
    if (A2.hasNavigatedHorizontally = true, A2.hasNavigatedVertically = true, e2 || false === Z.next()) {
      let t2 = ot();
      t2.down && t2.right && w2.loop && Ke() && (t2.down = false), t2.down ? Nt({ skipFragments: e2 }) : w2.rtl ? Ct({ skipFragments: e2 }) : xt({ skipFragments: e2 });
    }
  }
  function It(e2) {
    w2.autoSlideStoppable && kt();
  }
  function Tt(e2) {
    let t2 = e2.data;
    if ("string" == typeof t2 && "{" === t2.charAt(0) && "}" === t2.charAt(t2.length - 1) && (t2 = JSON.parse(t2), t2.method && "function" == typeof h2[t2.method]))
      if (false === R.test(t2.method)) {
        const e3 = h2[t2.method].apply(h2, t2.args);
        Ne("callback", { method: t2.method, result: e3 });
      } else
        console.warn('reveal.js: "' + t2.method + '" is is blacklisted from the postMessage API');
  }
  function Ft(e2) {
    "running" === V && /section/gi.test(e2.target.nodeName) && (V = "idle", Pe({ type: "slidetransitionend", data: { indexh: u2, indexv: v2, previousSlide: p2, currentSlide: m2 } }));
  }
  function zt(e2) {
    const t2 = r(e2.target, 'a[href^="#"]');
    if (t2) {
      const i2 = t2.getAttribute("href"), a2 = ie.getIndicesFromHash(i2);
      a2 && (h2.slide(a2.h, a2.v, a2.f), e2.preventDefault());
    }
  }
  function Ht(e2) {
    He();
  }
  function qt(e2) {
    false === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
  }
  function Bt(e2) {
    (document.fullscreenElement || document.webkitFullscreenElement) === K2.wrapper && (e2.stopImmediatePropagation(), setTimeout(() => {
      h2.layout(), h2.focus.focus();
    }, 1));
  }
  function Ot(e2) {
    if (e2.currentTarget && e2.currentTarget.hasAttribute("href")) {
      let t2 = e2.currentTarget.getAttribute("href");
      t2 && (Ie(t2), e2.preventDefault());
    }
  }
  function Ut(e2) {
    $e() && false === w2.loop ? (Qe(0, 0), Lt()) : Y ? Lt() : kt();
  }
  const Wt = { VERSION: "4.4.0", initialize: he, configure: Re, destroy: ke, sync: Ze, syncSlide: et, syncFragments: Z.sync.bind(Z), slide: Qe, left: Ct, right: xt, up: Pt, down: Nt, prev: Mt, next: Dt, navigateLeft: Ct, navigateRight: xt, navigateUp: Pt, navigateDown: Nt, navigatePrev: Mt, navigateNext: Dt, navigateFragment: Z.goto.bind(Z), prevFragment: Z.prev.bind(Z), nextFragment: Z.next.bind(Z), on: Le, off: Ce, addEventListener: Le, removeEventListener: Ce, layout: He, shuffle: it, availableRoutes: ot, availableFragments: Z.availableRoutes.bind(Z), toggleHelp: Te, toggleOverview: ee.toggle.bind(ee), togglePause: Ye, toggleAutoSlide: Ge, isFirstSlide: Ve, isLastSlide: $e, isLastVerticalSlide: Ke, isVerticalSlide: We, isPaused: _e, isAutoSliding: Je, isSpeakerNotes: ce.isSpeakerNotesWindow.bind(ce), isOverview: ee.isActive.bind(ee), isFocused: le.isFocused.bind(le), isPrintingPDF: oe.isPrintingPDF.bind(oe), isReady: () => S2, loadSlide: _.load.bind(_), unloadSlide: _.unload.bind(_), showPreview: Ie, hidePreview: ze, addEventListeners: Se, removeEventListeners: Ae, dispatchEvent: Pe, getState: Et, setState: Rt, getProgress: dt, getIndices: ct, getSlidesAttributes: ft, getSlidePastCount: lt, getTotalSlides: bt, getSlide: yt, getPreviousSlide: () => p2, getCurrentSlide: () => m2, getSlideBackground: wt, getSlideNotes: ce.getSlideNotes.bind(ce), getSlides: ht, getHorizontalSlides: ut, getVerticalSlides: gt, hasHorizontalSlides: pt, hasVerticalSlides: mt, hasNavigatedHorizontally: () => A2.hasNavigatedHorizontally, hasNavigatedVertically: () => A2.hasNavigatedVertically, addKeyBinding: te.addKeyBinding.bind(te), removeKeyBinding: te.removeKeyBinding.bind(te), triggerKey: te.triggerKey.bind(te), registerKeyboardShortcut: te.registerKeyboardShortcut.bind(te), getComputedSlideSize: Be, getScale: () => U2, getConfig: () => w2, getQueryHash: d, getSlidePath: ie.getHash.bind(ie), getRevealElement: () => n2, getSlidesElement: () => K2.slides, getViewportElement: () => K2.viewport, getBackgroundsElement: () => Q.element, registerPlugin: re.registerPlugin.bind(re), hasPlugin: re.hasPlugin.bind(re), getPlugin: re.getPlugin.bind(re), getPlugins: re.getRegisteredPlugins.bind(re) };
  return e(h2, { ...Wt, announceStatus: fe, getStatusText: be, print: oe, focus: le, progress: se, controls: ae, location: ie, overview: ee, fragments: Z, slideContent: _, slideNumber: G, onUserInput: It, closeOverlay: ze, updateSlidesVisibility: rt, layoutSlideContents: qe, transformSlides: xe, cueAutoSlide: St, cancelAutoSlide: At }), Wt;
}
let W = U, K = [];
W.initialize = (e2) => (Object.assign(W, new U(document.querySelector(".reveal"), e2)), K.map((e3) => e3(W)), W.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach((e2) => {
  W[e2] = (...t2) => {
    K.push((i2) => i2[e2].call(null, ...t2));
  };
}), W.isReady = () => false, W.VERSION = "4.4.0";
export {
  W as default
};
