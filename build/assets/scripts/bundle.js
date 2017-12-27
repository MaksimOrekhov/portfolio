"use strict";

!function (e) {
  function t(n) {
    if (o[n]) return o[n].exports;var r = o[n] = { i: n, l: !1, exports: {} };return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }var o = {};t.m = e, t.c = o, t.d = function (e, o, n) {
    t.o(e, o) || Object.defineProperty(e, o, { configurable: !1, enumerable: !0, get: n });
  }, t.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(o, "a", o), o;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 0);
}([function (e, t, o) {
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
        _o = document.querySelector(".button__back");_e2.onclick = function () {
      _t2.classList.add("active"), _e2.classList.add("auth__button-hidden");
    }, _o.onclick = function () {
      _t2.classList.remove("active"), _e2.classList.remove("auth__button-hidden");
    };
  }if (document.getElementById("map")) {
    var _e3 = new google.maps.Map(document.getElementById("map"), { center: { lat: 53.205, lng: 34.4177 }, zoom: 17, draggable: !1, styles: [{ featureType: "all", elementType: "all", stylers: [{ hue: "#61dac9" }] }, { featureType: "road", elementType: "geometry", stylers: [{ lightness: 80 }, { visibility: "simplified" }] }, { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "labels.text", stylers: [{ visibility: "on" }] }] });new google.maps.Marker({ position: { lat: 53.2051, lng: 34.4215 }, map: _e3, animation: google.maps.Animation.DROP });
  }if (document.querySelector(".container__about")) {
    document.querySelector(".footer").classList.add("footer__about");
  }var n = function () {
    document.querySelectorAll(".circles");var e = document.querySelectorAll(".circle__second"),
        t = window.innerHeight / 3;return { animate: function animate(o) {
        o + t >= 700 && e.forEach(function (e) {
          e.classList.add("circle-50");
        });
      } };
  }();if (window.onscroll = function () {
    var e = window.pageYOffset;n.animate(e);
  }, document.querySelector(".form__elem")) {
    var _e4 = function () {
      var e = document.querySelector(".form__elem"),
          t = document.querySelector(".form__blur");return { set: function set() {
          var o = document.querySelector(".comments__bg-img").naturalWidth,
              n = -e.offsetLeft,
              r = -e.offsetTop,
              c = t.style;c.backgroundSize = o + "px auto", c.backgroundPosition = n + "px " + r + "px";
        } };
    }();_e4.set(), window.onresize = function () {
      _e4.set();
    };
  }if (document.querySelector(".parallax")) {
    var _e5 = document.getElementById("parallax").children;window.addEventListener("mousemove", function (t) {
      var o = window.innerWidth / 2 - t.pageX,
          n = window.innerHeight / 2 - t.pageY;var r = 0;var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _e5[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _t3 = _step.value;
          var _e6 = r / 80,
              _c = o * _e6,
              _l = n * _e6,
              _i = window.innerHeight / 2 * _e6,
              _u = _t3.firstElementChild;_t3.style.transform = "translate(" + _c + "px, " + _l + "px)", _u.style.bottom = "-" + _i + "px", r++;
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
  }var r = document.querySelector(".preloader"),
      c = document.querySelector(".preloader__num"),
      l = 0,
      i = document.querySelector(".circle-1"),
      u = document.querySelector(".circle-2"),
      s = document.querySelector(".circle-3"),
      a = setInterval(function () {
    l += 5, document.onmousewheel = function (e) {
      e.preventDefault();
    }, l >= 100 && (document.onmousewheel = function (e) {}, c.innerHTML = 100, l = 100, clearInterval(a), setTimeout(function () {
      r.style.opacity = 0, c.style.opacity = 0;
    }, 500), setTimeout(function () {
      r.style.opacity = 0, setTimeout(function () {
        r.style.display = "none";
      }, 1500);
    }, 1e3)), l > 30 && (i.style.strokeDashoffset = 440 - 4.4 * (1.3 * l - 30)), l > 20 && (u.style.strokeDashoffset = 350 - 3.5 * (1.2 * l - 20)), s.style.strokeDashoffset = 260 - 2.6 * l, c.innerHTML = l;
  }, 100);
}]);