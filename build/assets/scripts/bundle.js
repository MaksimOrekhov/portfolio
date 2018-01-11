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
  Object.defineProperty(t, "__esModule", { value: !0 });var n = o(1),
      l = o.n(n),
      r = o(2),
      i = o.n(r),
      s = o(3),
      c = o.n(s),
      a = o(4),
      u = o.n(a),
      d = o(5),
      m = o.n(d),
      _ = o(6),
      f = o.n(_),
      p = o(7),
      y = o.n(p),
      v = o(8),
      b = o.n(v),
      g = o(9),
      w = o.n(g),
      S = o(10),
      L = o.n(S),
      h = o(11),
      q = o.n(h);var x = function x() {
    l()(), i()(), c()(), u()(), m()(), f()(), y()(), b()(), w()(), L()(), q()();
  };if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? x() : document.addEventListener("DOMContentLoaded", x), document.querySelector(".preloader")) {
    var _e = document.querySelector(".preloader"),
        _t = document.querySelector(".preloader__num"),
        _o = 0,
        _n = document.querySelector(".circle-1"),
        _l = document.querySelector(".circle-2"),
        _r = document.querySelector(".circle-3"),
        _i = setInterval(function () {
      _o += 5, document.onmousewheel = function (e) {
        e.preventDefault();
      }, _o >= 100 && (document.onmousewheel = function (e) {}, _t.innerHTML = 100, _o = 100, clearInterval(_i), setTimeout(function () {
        _e.style.opacity = 0, _t.style.opacity = 0;
      }, 500), setTimeout(function () {
        _e.style.opacity = 0, setTimeout(function () {
          _e.style.display = "none";
        }, 800);
      }, 800)), _o > 30 && (_n.style.strokeDashoffset = 440 - 4.4 * (1.3 * _o - 30)), _o > 20 && (_l.style.strokeDashoffset = 350 - 3.5 * (1.2 * _o - 20)), _r.style.strokeDashoffset = 260 - 2.6 * _o, _t.innerHTML = _o;
    }, 100);
  }
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".hamburger")) {
      var _e2 = document.getElementById("hamburger"),
          _t2 = document.querySelector(".fp-menu__container");_e2.onclick = function () {
        _t2.classList.toggle("visible"), _t2.classList.contains("visible") ? document.onmousewheel = function (e) {
          e.preventDefault();
        } : document.onmousewheel = function (e) {};
      };
    }
  };
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".auth__button")) {
      var _e3 = document.querySelector(".auth__button"),
          _t3 = document.querySelector(".rotate__container"),
          o = document.querySelector(".button__back");_e3.onclick = function () {
        _t3.classList.add("active"), _e3.classList.add("auth__button-hidden");
      }, o.onclick = function () {
        _t3.classList.remove("active"), _e3.classList.remove("auth__button-hidden");
      };
    }
  };
}, function (e, t) {
  e.exports = function () {
    if (document.getElementById("map")) {
      var _e4 = new google.maps.Map(document.getElementById("map"), { center: { lat: 53.205, lng: 34.4177 }, zoom: 17, draggable: !1, styles: [{ featureType: "all", elementType: "all", stylers: [{ hue: "#61dac9" }] }, { featureType: "road", elementType: "geometry", stylers: [{ lightness: 80 }, { visibility: "simplified" }] }, { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "labels.text", stylers: [{ visibility: "on" }] }] });new google.maps.Marker({ position: { lat: 53.2051, lng: 34.4215 }, map: _e4, animation: google.maps.Animation.DROP });
    }
  };
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".container__about")) {
      document.querySelector(".footer").classList.add("footer__about");
    }
  };
}, function (e, t) {
  e.exports = function () {
    var e = function () {
      document.querySelectorAll(".circles");var e = document.querySelectorAll(".circle__second"),
          t = window.innerHeight / 3;return { animate: function animate(o) {
          o + t >= 700 && e.forEach(function (e) {
            e.classList.add("circle-50");
          });
        } };
    }();window.onscroll = function () {
      var t = window.pageYOffset;e.animate(t);
    };
  };
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".form__elem")) {
      var _e5 = function () {
        var e = document.querySelector(".form__elem"),
            t = document.querySelector(".form__blur");return { set: function set() {
            var o = document.querySelector(".comments__bg-img").offsetWidth,
                n = -e.offsetLeft,
                l = -e.offsetTop,
                r = t.style;r.backgroundSize = o + "px auto", r.backgroundPosition = n + "px " + l + "px";
          } };
      }();_e5.set(), window.onresize = function () {
        _e5.set();
      };
    }
  };
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".parallax")) {
      var _e6 = document.getElementById("parallax").children;window.addEventListener("mousemove", function (t) {
        var o = window.innerWidth / 2 - t.pageX,
            n = window.innerHeight / 2 - t.pageY;var l = 0;var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _e6[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _t4 = _step.value;
            var _e7 = l / 80,
                r = o * _e7,
                i = n * _e7,
                s = window.innerHeight / 2 * _e7,
                c = _t4.firstElementChild;_t4.style.transform = "translate(" + r + "px, " + i + "px)", c.style.bottom = "-" + s + "px", l++;
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
  };
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".blog__nav")) {
      var _e8 = document.querySelector(".blog__nav-link"),
          _t5 = document.querySelector(".blog__nav");_e8.onclick = function (e) {
        e.preventDefault(), _t5.classList.toggle("blog__nav-active");
      };
    }
  };
}, function (e, t) {
  e.exports = function () {
    document.querySelector(".blog__nav") && (window.onscroll = function () {
      var e = document.querySelector(".blog__nav"),
          t = (document.querySelector(".blog"), window.innerHeight / 3),
          o = window.pageYOffset,
          n = document.querySelector(".blog__articles");o + t >= 700 ? (e.classList.add("blog__nav-fixed"), n.classList.add("blog__articles-fixed")) : (e.classList.remove("blog__nav-fixed"), n.classList.remove("blog__articles-fixed"));
    }, $(window).scroll(function () {
      $(".article__item").each(function (e, t) {
        var o = $(t).offset().top - 100,
            n = o + $(t).height(),
            l = $(window).scrollTop(),
            r = $(t).attr("id");l > o && l < n ? ($(".blog__item").removeClass("blog__item-active"), $('a[href="#' + r + '"]').parent().addClass("blog__item-active")) : $('a[href="#' + r + '"]').parent().removeClass("blog__item-active");
      });
    }), $(".blog__item").on("click", "a", function (e) {
      e.preventDefault();var t = $(this).attr("href"),
          o = $(t).offset().top;$("body,html").animate({ scrollTop: o }, 800);
    }));
  };
}, function (e, t) {
  e.exports = function () {
    $(".go__to-bottom").on("click", function (e) {
      e.preventDefault();var t = $("section")[1],
          o = $(t).offset().top;$("body,html").animate({ scrollTop: o }, 800);
    }), $(".go__to-top").on("click", function (e) {
      e.preventDefault();var t = $("section")[0],
          o = $(t).offset().top;$("body,html").animate({ scrollTop: o }, 800);
    });
  };
}, function (e, t) {
  e.exports = function () {
    if (document.querySelector(".slider")) {
      var _e9 = document.querySelector(".slider__item-overlay__next"),
          _t6 = document.querySelector(".slider__item-overlay__prev"),
          o = document.querySelector(".slider__next-list"),
          n = document.querySelector(".slider__prev-list"),
          l = (document.querySelector(".slider__prev-list"), document.querySelector(".wrapper__slider-item--active")),
          r = (l.nextElementSibling, l.previousElementSibling, document.querySelectorAll(".wrapper__slider-item")),
          i = document.querySelectorAll(".slider__left-item");r.length;var s = 1;n.style.bottom = "100%", o.style.bottom = "0%";var c = 0;_t6.addEventListener("click", function () {
        n.style.bottom = c + "%", o.style.bottom = 100 - c + "%", n.style.bottom <= "0%" && (n.style.bottom = c + "%", c = 300), o.style.bottom < "0%" && (o.style.bottom = c + "%", c = 200), l.classList.remove("wrapper__slider-item--active"), s <= 2 ? (r[s].classList.add("wrapper__slider-item--active"), r[s - 1].classList.remove("wrapper__slider-item--active"), i[s].classList.add("slider__left-item--active"), i[s - 1].classList.remove("slider__left-item--active"), s++) : (r[(s = 1) - 1].classList.add("wrapper__slider-item--active"), r[s + 1].classList.remove("wrapper__slider-item--active"), i[s - 1].classList.add("slider__left-item--active"), i[s + 1].classList.remove("slider__left-item--active")), c -= 100;
      }), _e9.addEventListener("click", function () {
        n.style.bottom = c + "%", o.style.bottom = 100 - c + "%", n.style.bottom <= "0%" && (n.style.bottom = c + "%", c = 300), o.style.bottom >= "200%" && (o.style.bottom = 100 - c + "%", c = 200), o.style.bottom < "0%" && (o.style.bottom = c + "%", c = 200), l.classList.remove("wrapper__slider-item--active"), s <= 2 ? (r[s].classList.add("wrapper__slider-item--active"), r[s - 1].classList.remove("wrapper__slider-item--active"), i[s].classList.add("slider__left-item--active"), i[s - 1].classList.remove("slider__left-item--active"), s++) : (r[(s = 1) - 1].classList.add("wrapper__slider-item--active"), r[s + 1].classList.remove("wrapper__slider-item--active"), i[s - 1].classList.add("slider__left-item--active"), i[s + 1].classList.remove("slider__left-item--active")), c -= 100;
      });
    }
  };
}]);