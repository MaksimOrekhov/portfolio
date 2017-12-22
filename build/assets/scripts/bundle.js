"use strict";

!function (e) {
  function t(o) {
    if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
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
  }();if (window.onscroll = function () {
    var e = window.pageYOffset;o.animate(e);
  }, document.querySelector(".form__elem")) {
    var _e4 = function () {
      var e = document.querySelector(".form__elem"),
          t = document.querySelector(".form__blur");return { set: function set() {
          var n = document.querySelector(".comments__bg").offsetWidth,
              o = -e.offsetLeft,
              r = -e.offsetTop,
              c = t.style;c.backgroundSize = n + "px auto", c.backgroundPosition = o + "px " + r + "px";
        } };
    }();_e4.set(), window.onresize = function () {
      _e4.set();
    };
  }if (document.querySelector(".parallax")) {
    var _e5 = document.getElementById("parallax").children;window.addEventListener("mousemove", function (t) {
      var n = window.innerWidth / 2 - t.pageX,
          o = window.innerHeight / 2 - t.pageY;var r = 0;var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _e5[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _t3 = _step.value;
          var _e6 = r / 80,
              c = n * _e6,
              i = o * _e6,
              l = window.innerHeight / 2 * _e6,
              s = _t3.firstElementChild;_t3.style.transform = "translate(" + c + "px, " + i + "px)", s.style.bottom = "-" + l + "px", r++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }
}]);