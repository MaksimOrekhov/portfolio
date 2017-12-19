"use strict";

!function (e) {
  function t(o) {
    if (n[o]) return n[o].exports;var c = n[o] = { i: o, l: !1, exports: {} };return e[o].call(c.exports, c, c.exports, t), c.l = !0, c.exports;
  }var n = {};t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 0);
}([function (e, t, n) {
  "use strict";
  if (document.getElementById("hamburger")) {
    var _e = document.getElementById("hamburger"),
        _t = document.querySelector(".fp-menu__container");_e.onclick = function () {
      _t.classList.toggle("visible"), _t.classList.contains("visible") ? document.onmousewheel = function (e) {
        e.preventDefault();
      } : document.onmousewheel = function (e) {};
    };
  }if (document.querySelector(".auth__button")) {
    var _e2 = document.querySelector(".auth__button"),
        _t2 = document.querySelector(".rotate__container"),
        _n = document.querySelector(".button__back");_e2.onclick = function () {
      _t2.classList.add("active"), _e2.classList.add("auth__button-hidden");
    }, _n.onclick = function () {
      _t2.classList.remove("active"), _e2.classList.remove("auth__button-hidden");
    };
  }if (document.getElementById("map")) {
    var _e3 = new google.maps.Map(document.getElementById("map"), { center: { lat: 53.205, lng: 34.4177 }, zoom: 17, draggable: !1, styles: [{ featureType: "all", elementType: "all", stylers: [{ hue: "#61dac9" }] }, { featureType: "road", elementType: "geometry", stylers: [{ lightness: 80 }, { visibility: "simplified" }] }, { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "labels.text", stylers: [{ visibility: "on" }] }] });new google.maps.Marker({ position: { lat: 53.2051, lng: 34.4215 }, map: _e3, animation: google.maps.Animation.DROP });
  }if (document.querySelector(".container__about")) {
    document.querySelector(".footer").classList.add("footer__about");
  }var o = function () {
    document.querySelectorAll(".circles");var e = document.querySelectorAll(".circle__second"),
        t = window.innerHeight / 3;return { animate: function animate(n) {
        n + t >= 700 ? e.forEach(function (e) {
          e.classList.add("circle-50");
        }) : e.forEach(function (e) {
          e.classList.remove("circle-50");
        });
      } };
  }();window.onscroll = function () {
    var e = window.pageYOffset;o.animate(e);
  };
}]);