"use strict";

!function (e) {
  function t(n) {
    if (o[n]) return o[n].exports;var l = o[n] = { i: n, l: !1, exports: {} };return e[n].call(l.exports, l, l.exports, t), l.l = !0, l.exports;
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
          var o = document.querySelector(".comments__bg-img").offsetWidth,
              n = -e.offsetLeft,
              l = -e.offsetTop,
              r = t.style;r.backgroundSize = o + "px auto", r.backgroundPosition = n + "px " + l + "px";
        } };
    }();_e4.set(), window.onresize = function () {
      _e4.set();
    };
  }if (document.querySelector(".parallax")) {
    var _e5 = document.getElementById("parallax").children;window.addEventListener("mousemove", function (t) {
      var o = window.innerWidth / 2 - t.pageX,
          n = window.innerHeight / 2 - t.pageY;var l = 0;var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _e5[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _t3 = _step.value;
          var _e6 = l / 80,
              r = o * _e6,
              c = n * _e6,
              i = window.innerHeight / 2 * _e6,
              u = _t3.firstElementChild;_t3.style.transform = "translate(" + r + "px, " + c + "px)", u.style.bottom = "-" + i + "px", l++;
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
  }if (document.querySelector(".preloader")) {
    var _e7 = document.querySelector(".preloader"),
        _t4 = document.querySelector(".preloader__num"),
        _o2 = 0,
        _n = document.querySelector(".circle-1"),
        l = document.querySelector(".circle-2"),
        r = document.querySelector(".circle-3"),
        c = setInterval(function () {
      _o2 += 5, document.onmousewheel = function (e) {
        e.preventDefault();
      }, _o2 >= 100 && (document.onmousewheel = function (e) {}, _t4.innerHTML = 100, _o2 = 100, clearInterval(c), setTimeout(function () {
        _e7.style.opacity = 0, _t4.style.opacity = 0;
      }, 500), setTimeout(function () {
        _e7.style.opacity = 0, setTimeout(function () {
          _e7.style.display = "none";
        }, 1e3);
      }, 1e3)), _o2 > 30 && (_n.style.strokeDashoffset = 440 - 4.4 * (1.3 * _o2 - 30)), _o2 > 20 && (l.style.strokeDashoffset = 350 - 3.5 * (1.2 * _o2 - 20)), r.style.strokeDashoffset = 260 - 2.6 * _o2, _t4.innerHTML = _o2;
    }, 100);
  }if (document.querySelector(".blog__nav")) {
    var _e8 = document.querySelector(".blog__nav-link"),
        _t5 = document.querySelector(".blog__nav");_e8.onclick = function (e) {
      e.preventDefault(), _t5.classList.toggle("blog__nav-active");
    };
  }if (document.querySelector(".blog__nav")) {
    (function () {
      window.onscroll = function () {
        var e = document.querySelector(".blog__nav"),
            t = (document.querySelector(".blog"), window.innerHeight / 3),
            o = window.pageYOffset,
            n = document.querySelector(".blog__articles");o + t >= 700 ? (e.classList.add("blog__nav-fixed"), n.classList.add("blog__articles-fixed")) : (e.classList.remove("blog__nav-fixed"), n.classList.remove("blog__articles-fixed"));
      };var e = document.querySelectorAll('[href^="#article"]'),
          t = .5;for (var _o3 = 0; _o3 < e.length; _o3++) {
        e[_o3].addEventListener("click", function (e) {
          function o(e) {
            null === c && (c = e);var i = e - c,
                u = r < 0 ? Math.max(n - i / t, n + r) : Math.min(n + i / t, n + r);window.scrollTo(0, u), u != n + r ? requestAnimationFrame(o) : location.hash = l;
          }e.preventDefault();var n = window.pageYOffset,
              l = this.href.replace(/[^#]*(.*)/, "$1"),
              r = document.querySelector(l).getBoundingClientRect().top,
              c = null;requestAnimationFrame(o);
        }, !1);
      }document.querySelectorAll(".blog__item"), document.querySelectorAll('[href^="#article"]');document.querySelectorAll('[id^="#article"]').forEach(function (e) {
        0 == e.getBoundingClientRect().top && e.classList.add("active");
      });
    })();
  }
}]);