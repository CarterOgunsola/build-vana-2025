(function (Fr) {
  typeof define == "function" && define.amd ? define(Fr) : Fr();
})(function () {
  "use strict";
  var Fr = document.createElement("style");
  (Fr.textContent = `body{margin:0;padding:0}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}
`),
    document.head.appendChild(Fr);
  function si(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function no(n, e) {
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e);
  }
  /*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var gt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    fr = { duration: 0.5, overwrite: !1, delay: 0 },
    Cs,
    Ne,
    ae,
    Pt = 1e8,
    ne = 1 / Pt,
    Ps = Math.PI * 2,
    Jc = Ps / 4,
    eu = 0,
    so = Math.sqrt,
    tu = Math.cos,
    iu = Math.sin,
    Pe = function (e) {
      return typeof e == "string";
    },
    fe = function (e) {
      return typeof e == "function";
    },
    ai = function (e) {
      return typeof e == "number";
    },
    Ms = function (e) {
      return typeof e > "u";
    },
    qt = function (e) {
      return typeof e == "object";
    },
    lt = function (e) {
      return e !== !1;
    },
    ks = function () {
      return typeof window < "u";
    },
    Pn = function (e) {
      return fe(e) || Pe(e);
    },
    ao =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Ye = Array.isArray,
    Os = /(?:-?\.?\d|\.)+/gi,
    oo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    pr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Ls = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    lo = /[+-]=-?[.\d]+/,
    co = /[^,'"\[\]\s]+/gi,
    ru = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    le,
    Xt,
    Ds,
    Is,
    mt = {},
    Mn = {},
    uo,
    fo = function (e) {
      return (Mn = Bi(e, mt)) && dt;
    },
    zs = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    Gr = function (e, t) {
      return !t && console.warn(e);
    },
    po = function (e, t) {
      return (e && (mt[e] = t) && Mn && (Mn[e] = t)) || mt;
    },
    Nr = function () {
      return 0;
    },
    nu = { suppressEvents: !0, isStart: !0, kill: !1 },
    kn = { suppressEvents: !0, kill: !1 },
    su = { suppressEvents: !0 },
    Rs = {},
    mi = [],
    Bs = {},
    ho,
    _t = {},
    Fs = {},
    go = 30,
    On = [],
    Gs = "",
    Ns = function (e) {
      var t = e[0],
        i,
        r;
      if ((qt(t) || fe(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = On.length; r-- && !On[r].targetTest(t); );
        i = On[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Ho(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    Ri = function (e) {
      return e._gsap || Ns(Ot(e))[0]._gsap;
    },
    mo = function (e, t, i) {
      return (i = e[t]) && fe(i)
        ? e[t]()
        : (Ms(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    ct = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    ge = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Me = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    hr = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    au = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    Ln = function () {
      var e = mi.length,
        t = mi.slice(0),
        i,
        r;
      for (Bs = {}, mi.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    _o = function (e, t, i, r) {
      mi.length && !Ne && Ln(),
        e.render(t, i, r || (Ne && t < 0 && (e._initted || e._startAt))),
        mi.length && !Ne && Ln();
    },
    vo = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(co).length < 2
        ? t
        : Pe(e)
        ? e.trim()
        : e;
    },
    wo = function (e) {
      return e;
    },
    Mt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    ou = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    Bi = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    yo = function n(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = qt(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Dn = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    Yr = function (e) {
      var t = e.parent || le,
        i = e.keyframes ? ou(Ye(e.keyframes)) : Mt;
      if (lt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    lu = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    bo = function (e, t, i, r, s) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var a = e[r],
        o;
      if (s) for (o = t[s]; a && a[s] > o; ) a = a._prev;
      return (
        a
          ? ((t._next = a._next), (a._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = a),
        (t.parent = t._dp = e),
        t
      );
    },
    In = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        a = t._next;
      s ? (s._next = a) : e[i] === t && (e[i] = a),
        a ? (a._prev = s) : e[r] === t && (e[r] = s),
        (t._next = t._prev = t.parent = null);
    },
    _i = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    Fi = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    cu = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Ys = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ne
          ? e._startAt.revert(kn)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    uu = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    xo = function (e) {
      return e._repeat ? gr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    gr = function (e, t) {
      var i = Math.floor((e /= t));
      return e && i === e ? i - 1 : i;
    },
    zn = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Rn = function (e) {
      return (e._end = Me(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0)
      ));
    },
    Bn = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Me(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Rn(e),
          i._dirty || Fi(i, e)),
        e
      );
    },
    So = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = zn(e.rawTime(), t)),
          (!t._dur || $r(0, t.totalDuration(), i) - t._tTime > ne) &&
            t.render(i, !0)),
        Fi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -ne;
      }
    },
    jt = function (e, t, i, r) {
      return (
        t.parent && _i(t),
        (t._start = Me(
          (ai(i) ? i : i || e !== le ? kt(e, i, t) : e._time) + t._delay
        )),
        (t._end = Me(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        bo(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Vs(t) || (e._recent = t),
        r || So(e, t),
        e._ts < 0 && Bn(e, e._tTime),
        e
      );
    },
    To = function (e, t) {
      return (
        (mt.ScrollTrigger || zs("scrollTrigger", t)) &&
        mt.ScrollTrigger.create(t, e)
      );
    },
    Ao = function (e, t, i, r, s) {
      if ((Zs(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ne &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        ho !== wt.frame
      )
        return mi.push(e), (e._lazy = [s, r]), 1;
    },
    du = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    Vs = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    fu = function (e, t, i, r) {
      var s = e.ratio,
        a =
          t < 0 ||
          (!t &&
            ((!e._start && du(e) && !(!e._initted && Vs(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Vs(e))))
            ? 0
            : 1,
        o = e._rDelay,
        l = 0,
        c,
        u,
        d;
      if (
        (o &&
          e._repeat &&
          ((l = $r(0, e._tDur, t)),
          (u = gr(l, o)),
          e._yoyo && u & 1 && (a = 1 - a),
          u !== gr(e._tTime, o) &&
            ((s = 1 - a),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== s || Ne || r || e._zTime === ne || (!t && e._zTime))
      ) {
        if (!e._initted && Ao(e, t, r, i, l)) return;
        for (
          d = e._zTime,
            e._zTime = t || (i ? ne : 0),
            i || (i = t && !d),
            e.ratio = a,
            e._from && (a = 1 - a),
            e._time = 0,
            e._tTime = l,
            c = e._pt;
          c;

        )
          c.r(a, c.d), (c = c._next);
        t < 0 && Ys(e, t, i, !0),
          e._onUpdate && !i && vt(e, "onUpdate"),
          l && e._repeat && !i && e.parent && vt(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === a &&
            (a && _i(e, 1),
            !i &&
              !Ne &&
              (vt(e, a ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    pu = function (e, t, i) {
      var r;
      if (i > t)
        for (r = e._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > t) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < t) return r;
          r = r._prev;
        }
    },
    mr = function (e, t, i, r) {
      var s = e._repeat,
        a = Me(t) || 0,
        o = e._tTime / e._tDur;
      return (
        o && !r && (e._time *= a / e._dur),
        (e._dur = a),
        (e._tDur = s ? (s < 0 ? 1e10 : Me(a * (s + 1) + e._rDelay * s)) : a),
        o > 0 && !r && Bn(e, (e._tTime = e._tDur * o)),
        e.parent && Rn(e),
        i || Fi(e.parent, e),
        e
      );
    },
    Eo = function (e) {
      return e instanceof Ue ? Fi(e) : mr(e, e._dur);
    },
    hu = { _start: 0, endTime: Nr, totalDuration: Nr },
    kt = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || hu,
        a = e.duration() >= Pt ? s.endTime(!1) : e._dur,
        o,
        l,
        c;
      return Pe(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (c = t.substr(-1) === "%"),
          (o = t.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (c ? (o < 0 ? s : i).totalDuration() / 100 : 1))
            : o < 0
            ? (t in r || (r[t] = a), r[t])
            : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              c && i && (l = (l / 100) * (Ye(i) ? i[0] : i).totalDuration()),
              o > 1 ? n(e, t.substr(0, o - 1), i) + l : a + l))
        : t == null
        ? a
        : +t;
    },
    Vr = function (e, t, i) {
      var r = ai(t[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[s],
        o,
        l;
      if ((r && (a.duration = t[1]), (a.parent = i), e)) {
        for (o = a, l = i; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = lt(l.vars.inherit) && l.parent);
        (a.immediateRender = lt(o.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
      }
      return new ye(t[0], a, t[s + 1]);
    },
    vi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    $r = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    Ve = function (e, t) {
      return !Pe(e) || !(t = ru.exec(e)) ? "" : t[1];
    },
    gu = function (e, t, i) {
      return vi(i, function (r) {
        return $r(e, t, r);
      });
    },
    $s = [].slice,
    Co = function (e, t) {
      return (
        e &&
        qt(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && qt(e[0]))) &&
        !e.nodeType &&
        e !== Xt
      );
    },
    mu = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (Pe(r) && !t) || Co(r, 1)
            ? (s = i).push.apply(s, Ot(r))
            : i.push(r);
        }) || i
      );
    },
    Ot = function (e, t, i) {
      return ae && !t && ae.selector
        ? ae.selector(e)
        : Pe(e) && !i && (Ds || !vr())
        ? $s.call((t || Is).querySelectorAll(e), 0)
        : Ye(e)
        ? mu(e, i)
        : Co(e)
        ? $s.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Hs = function (e) {
      return (
        (e = Ot(e)[0] || Gr("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Ot(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? Gr("Invalid scope") || Is.createElement("div")
              : e
          );
        }
      );
    },
    Po = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Mo = function (e) {
      if (fe(e)) return e;
      var t = qt(e) ? e : { each: e },
        i = Gi(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        a = {},
        o = r > 0 && r < 1,
        l = isNaN(r) || o,
        c = t.axis,
        u = r,
        d = r;
      return (
        Pe(r)
          ? (u = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !o && l && ((u = r[0]), (d = r[1])),
        function (p, f, g) {
          var h = (g || t).length,
            w = a[h],
            b,
            m,
            _,
            v,
            y,
            x,
            S,
            C,
            E;
          if (!w) {
            if (((E = t.grid === "auto" ? 0 : (t.grid || [1, Pt])[1]), !E)) {
              for (
                S = -Pt;
                S < (S = g[E++].getBoundingClientRect().left) && E < h;

              );
              E < h && E--;
            }
            for (
              w = a[h] = [],
                b = l ? Math.min(E, h) * u - 0.5 : r % E,
                m = E === Pt ? 0 : l ? (h * d) / E - 0.5 : (r / E) | 0,
                S = 0,
                C = Pt,
                x = 0;
              x < h;
              x++
            )
              (_ = (x % E) - b),
                (v = m - ((x / E) | 0)),
                (w[x] = y =
                  c ? Math.abs(c === "y" ? v : _) : so(_ * _ + v * v)),
                y > S && (S = y),
                y < C && (C = y);
            r === "random" && Po(w),
              (w.max = S - C),
              (w.min = C),
              (w.v = h =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (E > h
                      ? h - 1
                      : c
                      ? c === "y"
                        ? h / E
                        : E
                      : Math.max(E, h / E)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (w.b = h < 0 ? s - h : s),
              (w.u = Ve(t.amount || t.each) || 0),
              (i = i && h < 0 ? Yo(i) : i);
          }
          return (
            (h = (w[p] - w.min) / w.max || 0),
            Me(w.b + (i ? i(h) : h) * w.v) + w.u
          );
        }
      );
    },
    Ws = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Me(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (ai(i) ? 0 : Ve(i));
      };
    },
    ko = function (e, t) {
      var i = Ye(e),
        r,
        s;
      return (
        !i &&
          qt(e) &&
          ((r = i = e.radius || Pt),
          e.values
            ? ((e = Ot(e.values)), (s = !ai(e[0])) && (r *= r))
            : (e = Ws(e.increment))),
        vi(
          t,
          i
            ? fe(e)
              ? function (a) {
                  return (s = e(a)), Math.abs(s - a) <= r ? s : a;
                }
              : function (a) {
                  for (
                    var o = parseFloat(s ? a.x : a),
                      l = parseFloat(s ? a.y : 0),
                      c = Pt,
                      u = 0,
                      d = e.length,
                      p,
                      f;
                    d--;

                  )
                    s
                      ? ((p = e[d].x - o),
                        (f = e[d].y - l),
                        (p = p * p + f * f))
                      : (p = Math.abs(e[d] - o)),
                      p < c && ((c = p), (u = d));
                  return (
                    (u = !r || c <= r ? e[u] : a),
                    s || u === a || ai(a) ? u : u + Ve(a)
                  );
                }
            : Ws(e)
        )
      );
    },
    Oo = function (e, t, i, r) {
      return vi(Ye(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return Ye(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    _u = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, a) {
          return a(s);
        }, r);
      };
    },
    vu = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || Ve(i));
      };
    },
    wu = function (e, t, i) {
      return Do(e, t, 0, 1, i);
    },
    Lo = function (e, t, i) {
      return vi(i, function (r) {
        return e[~~t(r)];
      });
    },
    yu = function n(e, t, i) {
      var r = t - e;
      return Ye(e)
        ? Lo(e, n(0, e.length), t)
        : vi(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    bu = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return Ye(e)
        ? Lo(e, n(0, e.length - 1), t)
        : vi(i, function (a) {
            return (a = (s + ((a - e) % s)) % s || 0), e + (a > r ? s - a : a);
          });
    },
    Hr = function (e) {
      for (var t = 0, i = "", r, s, a, o; ~(r = e.indexOf("random(", t)); )
        (a = e.indexOf(")", r)),
          (o = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, a - r - 7).match(o ? co : Os)),
          (i +=
            e.substr(t, r - t) +
            Oo(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5)),
          (t = a + 1);
      return i + e.substr(t, e.length - t);
    },
    Do = function (e, t, i, r, s) {
      var a = t - e,
        o = r - i;
      return vi(s, function (l) {
        return i + (((l - e) / a) * o || 0);
      });
    },
    xu = function n(e, t, i, r) {
      var s = isNaN(e + t)
        ? 0
        : function (f) {
            return (1 - f) * e + f * t;
          };
      if (!s) {
        var a = Pe(e),
          o = {},
          l,
          c,
          u,
          d,
          p;
        if ((i === !0 && (r = 1) && (i = null), a))
          (e = { p: e }), (t = { p: t });
        else if (Ye(e) && !Ye(t)) {
          for (u = [], d = e.length, p = d - 2, c = 1; c < d; c++)
            u.push(n(e[c - 1], e[c]));
          d--,
            (s = function (g) {
              g *= d;
              var h = Math.min(p, ~~g);
              return u[h](g - h);
            }),
            (i = t);
        } else r || (e = Bi(Ye(e) ? [] : {}, e));
        if (!u) {
          for (l in t) Us.call(o, e, l, "get", t[l]);
          s = function (g) {
            return ea(g, o) || (a ? e.p : e);
          };
        }
      }
      return vi(i, s);
    },
    Io = function (e, t, i) {
      var r = e.labels,
        s = Pt,
        a,
        o,
        l;
      for (a in r)
        (o = r[a] - t),
          o < 0 == !!i && o && s > (o = Math.abs(o)) && ((l = a), (s = o));
      return l;
    },
    vt = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        a = ae,
        o = e._ctx,
        l,
        c,
        u;
      if (s)
        return (
          (l = r[t + "Params"]),
          (c = r.callbackScope || e),
          i && mi.length && Ln(),
          o && (ae = o),
          (u = l ? s.apply(c, l) : s.call(c)),
          (ae = a),
          u
        );
    },
    Wr = function (e) {
      return (
        _i(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ne),
        e.progress() < 1 && vt(e, "onInterrupt"),
        e
      );
    },
    _r,
    zo = [],
    Ro = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), ks() || e.headless)) {
          var t = e.name,
            i = fe(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Nr,
              render: ea,
              add: Us,
              kill: Fu,
              modifier: Bu,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Js,
              aliases: {},
              register: 0,
            };
          if ((vr(), e !== r)) {
            if (_t[t]) return;
            Mt(r, Mt(Dn(e, s), a)),
              Bi(r.prototype, Bi(s, Dn(e, a))),
              (_t[(r.prop = t)] = r),
              e.targetTest && (On.push(r), (Rs[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          po(t, r), e.register && e.register(dt, r, ut);
        } else zo.push(e);
    },
    te = 255,
    qr = {
      aqua: [0, te, te],
      lime: [0, te, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, te],
      navy: [0, 0, 128],
      white: [te, te, te],
      olive: [128, 128, 0],
      yellow: [te, te, 0],
      orange: [te, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [te, 0, 0],
      pink: [te, 192, 203],
      cyan: [0, te, te],
      transparent: [te, te, te, 0],
    },
    qs = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          te +
          0.5) |
          0
      );
    },
    Bo = function (e, t, i) {
      var r = e ? (ai(e) ? [e >> 16, (e >> 8) & te, e & te] : 0) : qr.black,
        s,
        a,
        o,
        l,
        c,
        u,
        d,
        p,
        f,
        g;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), qr[e]))
          r = qr[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (a = e.charAt(2)),
              (o = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                a +
                a +
                o +
                o +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & te, r & te, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & te, e & te]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = g = e.match(Os)), !t))
            (l = (+r[0] % 360) / 360),
              (c = +r[1] / 100),
              (u = +r[2] / 100),
              (a = u <= 0.5 ? u * (c + 1) : u + c - u * c),
              (s = u * 2 - a),
              r.length > 3 && (r[3] *= 1),
              (r[0] = qs(l + 1 / 3, s, a)),
              (r[1] = qs(l, s, a)),
              (r[2] = qs(l - 1 / 3, s, a));
          else if (~e.indexOf("="))
            return (r = e.match(oo)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Os) || qr.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !g &&
          ((s = r[0] / te),
          (a = r[1] / te),
          (o = r[2] / te),
          (d = Math.max(s, a, o)),
          (p = Math.min(s, a, o)),
          (u = (d + p) / 2),
          d === p
            ? (l = c = 0)
            : ((f = d - p),
              (c = u > 0.5 ? f / (2 - d - p) : f / (d + p)),
              (l =
                d === s
                  ? (a - o) / f + (a < o ? 6 : 0)
                  : d === a
                  ? (o - s) / f + 2
                  : (s - a) / f + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(c * 100 + 0.5)),
          (r[2] = ~~(u * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Fo = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(wi).forEach(function (s) {
          var a = s.match(pr) || [];
          t.push.apply(t, a), i.push((r += a.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Go = function (e, t, i) {
      var r = "",
        s = (e + r).match(wi),
        a = t ? "hsla(" : "rgba(",
        o = 0,
        l,
        c,
        u,
        d;
      if (!s) return e;
      if (
        ((s = s.map(function (p) {
          return (
            (p = Bo(p, t, 1)) &&
            a +
              (t
                ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3]
                : p.join(",")) +
              ")"
          );
        })),
        i && ((u = Fo(e)), (l = i.c), l.join(r) !== u.c.join(r)))
      )
        for (c = e.replace(wi, "1").split(pr), d = c.length - 1; o < d; o++)
          r +=
            c[o] +
            (~l.indexOf(o)
              ? s.shift() || a + "0,0,0,0)"
              : (u.length ? u : s.length ? s : i).shift());
      if (!c)
        for (c = e.split(wi), d = c.length - 1; o < d; o++) r += c[o] + s[o];
      return r + c[d];
    },
    wi = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in qr) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    Su = /hsl[a]?\(/,
    No = function (e) {
      var t = e.join(" "),
        i;
      if (((wi.lastIndex = 0), wi.test(t)))
        return (
          (i = Su.test(t)),
          (e[1] = Go(e[1], i)),
          (e[0] = Go(e[0], i, Fo(e[1]))),
          !0
        );
    },
    Xr,
    wt = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        a = s,
        o = [],
        l,
        c,
        u,
        d,
        p,
        f,
        g = function h(w) {
          var b = n() - r,
            m = w === !0,
            _,
            v,
            y,
            x;
          if (
            ((b > e || b < 0) && (i += b - t),
            (r += b),
            (y = r - i),
            (_ = y - a),
            (_ > 0 || m) &&
              ((x = ++d.frame),
              (p = y - d.time * 1e3),
              (d.time = y = y / 1e3),
              (a += _ + (_ >= s ? 4 : s - _)),
              (v = 1)),
            m || (l = c(h)),
            v)
          )
            for (f = 0; f < o.length; f++) o[f](y, p, x, w);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            g(!0);
          },
          deltaRatio: function (w) {
            return p / (1e3 / (w || 60));
          },
          wake: function () {
            uo &&
              (!Ds &&
                ks() &&
                ((Xt = Ds = window),
                (Is = Xt.document || {}),
                (mt.gsap = dt),
                (Xt.gsapVersions || (Xt.gsapVersions = [])).push(dt.version),
                fo(Mn || Xt.GreenSockGlobals || (!Xt.gsap && Xt) || {}),
                zo.forEach(Ro)),
              (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (c =
                u ||
                function (w) {
                  return setTimeout(w, (a - d.time * 1e3 + 1) | 0);
                }),
              (Xr = 1),
              g(2));
          },
          sleep: function () {
            (u ? cancelAnimationFrame : clearTimeout)(l), (Xr = 0), (c = Nr);
          },
          lagSmoothing: function (w, b) {
            (e = w || 1 / 0), (t = Math.min(b || 33, e));
          },
          fps: function (w) {
            (s = 1e3 / (w || 240)), (a = d.time * 1e3 + s);
          },
          add: function (w, b, m) {
            var _ = b
              ? function (v, y, x, S) {
                  w(v, y, x, S), d.remove(_);
                }
              : w;
            return d.remove(w), o[m ? "unshift" : "push"](_), vr(), _;
          },
          remove: function (w, b) {
            ~(b = o.indexOf(w)) && o.splice(b, 1) && f >= b && f--;
          },
          _listeners: o,
        }),
        d
      );
    })(),
    vr = function () {
      return !Xr && wt.wake();
    },
    j = {},
    Tu = /^[\d.\-M][\d.\-,\s]/,
    Au = /["']/g,
    Eu = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          a = i.length,
          o,
          l,
          c;
        s < a;
        s++
      )
        (l = i[s]),
          (o = s !== a - 1 ? l.lastIndexOf(",") : l.length),
          (c = l.substr(0, o)),
          (t[r] = isNaN(c) ? c.replace(Au, "").trim() : +c),
          (r = l.substr(o + 1).trim());
      return t;
    },
    Cu = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Pu = function (e) {
      var t = (e + "").split("("),
        i = j[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Eu(t[1])] : Cu(e).split(",").map(vo)
          )
        : j._CE && Tu.test(e)
        ? j._CE("", e)
        : i;
    },
    Yo = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Vo = function n(e, t) {
      for (var i = e._first, r; i; )
        i instanceof Ue
          ? n(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? n(i.timeline, t)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = t))),
          (i = i._next);
    },
    Gi = function (e, t) {
      return (e && (fe(e) ? e : j[e] || Pu(e))) || t;
    },
    Ni = function (e, t, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: i, easeInOut: r },
        a;
      return (
        ct(e, function (o) {
          (j[o] = mt[o] = s), (j[(a = o.toLowerCase())] = i);
          for (var l in s)
            j[
              a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = j[o + "." + l] = s[l];
        }),
        s
      );
    },
    $o = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Xs = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        a = (s / Ps) * (Math.asin(1 / r) || 0),
        o = function (u) {
          return u === 1 ? 1 : r * Math.pow(2, -10 * u) * iu((u - a) * s) + 1;
        },
        l =
          e === "out"
            ? o
            : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : $o(o);
      return (
        (s = Ps / s),
        (l.config = function (c, u) {
          return n(e, c, u);
        }),
        l
      );
    },
    js = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (a) {
          return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : $o(i);
      return (
        (r.config = function (s) {
          return n(e, s);
        }),
        r
      );
    };
  ct("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    Ni(
      n + ",Power" + (t - 1),
      e
        ? function (i) {
            return Math.pow(i, t);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, t);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, t) / 2
          : 1 - Math.pow((1 - i) * 2, t) / 2;
      }
    );
  }),
    (j.Linear.easeNone = j.none = j.Linear.easeIn),
    Ni("Elastic", Xs("in"), Xs("out"), Xs()),
    (function (n, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        s = function (o) {
          return o < t
            ? n * o * o
            : o < i
            ? n * Math.pow(o - 1.5 / e, 2) + 0.75
            : o < r
            ? n * (o -= 2.25 / e) * o + 0.9375
            : n * Math.pow(o - 2.625 / e, 2) + 0.984375;
        };
      Ni(
        "Bounce",
        function (a) {
          return 1 - s(1 - a);
        },
        s
      );
    })(7.5625, 2.75),
    Ni("Expo", function (n) {
      return n ? Math.pow(2, 10 * (n - 1)) : 0;
    }),
    Ni("Circ", function (n) {
      return -(so(1 - n * n) - 1);
    }),
    Ni("Sine", function (n) {
      return n === 1 ? 1 : -tu(n * Jc) + 1;
    }),
    Ni("Back", js("in"), js("out"), js()),
    (j.SteppedEase =
      j.steps =
      mt.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              a = 1 - ne;
            return function (o) {
              return (((r * $r(0, a, o)) | 0) + s) * i;
            };
          },
        }),
    (fr.ease = j["quad.out"]),
    ct(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (Gs += n + "," + n + "Params,");
      }
    );
  var Ho = function (e, t) {
      (this.id = eu++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : mo),
        (this.set = t ? t.getSetter : Js);
    },
    jr = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          mr(this, +t.duration, 1, 1),
          (this.data = t.data),
          ae && ((this._ctx = ae), ae.data.push(this)),
          Xr || wt.wake();
      }
      var e = n.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              mr(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((vr(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Bn(this, i), !s._dp || s.parent || So(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              jt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === ne) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), _o(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + xo(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  xo(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? gr(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -ne ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? zn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -ne ? 0 : this._rts),
            this.totalTime($r(-Math.abs(this._delay), this._tDur, s), r !== !1),
            Rn(this),
            cu(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (vr(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== ne &&
                        (this._tTime -= ne)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && jt(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (lt(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? zn(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = su);
          var r = Ne;
          return (
            (Ne = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ne = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Eo(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Eo(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(kt(this, i), lt(r));
        }),
        (e.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, lt(r));
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -ne : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -ne), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - ne)
          );
        }),
        (e.eventCallback = function (i, r, s) {
          var a = this.vars;
          return arguments.length > 1
            ? (r
                ? ((a[i] = r),
                  s && (a[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete a[i],
              this)
            : a[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var a = fe(i) ? i : wo,
              o = function () {
                var c = r.then;
                (r.then = null),
                  fe(a) && (a = a(r)) && (a.then || a === r) && (r.then = c),
                  s(a),
                  (r.then = c);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? o()
              : (r._prom = o);
          });
        }),
        (e.kill = function () {
          Wr(this);
        }),
        n
      );
    })();
  Mt(jr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ne,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ue = (function (n) {
    no(e, n);
    function e(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = n.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = lt(i.sortChildren)),
        le && jt(i.parent || le, si(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && To(si(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, s, a) {
        return Vr(0, arguments, this), this;
      }),
      (t.from = function (r, s, a) {
        return Vr(1, arguments, this), this;
      }),
      (t.fromTo = function (r, s, a, o) {
        return Vr(2, arguments, this), this;
      }),
      (t.set = function (r, s, a) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Yr(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new ye(r, s, kt(this, a), 1),
          this
        );
      }),
      (t.call = function (r, s, a) {
        return jt(this, ye.delayedCall(0, r, s), a);
      }),
      (t.staggerTo = function (r, s, a, o, l, c, u) {
        return (
          (a.duration = s),
          (a.stagger = a.stagger || o),
          (a.onComplete = c),
          (a.onCompleteParams = u),
          (a.parent = this),
          new ye(r, a, kt(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, s, a, o, l, c, u) {
        return (
          (a.runBackwards = 1),
          (Yr(a).immediateRender = lt(a.immediateRender)),
          this.staggerTo(r, s, a, o, l, c, u)
        );
      }),
      (t.staggerFromTo = function (r, s, a, o, l, c, u, d) {
        return (
          (o.startAt = a),
          (Yr(o).immediateRender = lt(o.immediateRender)),
          this.staggerTo(r, s, o, l, c, u, d)
        );
      }),
      (t.render = function (r, s, a) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          c = this._dur,
          u = r <= 0 ? 0 : Me(r),
          d = this._zTime < 0 != r < 0 && (this._initted || !c),
          p,
          f,
          g,
          h,
          w,
          b,
          m,
          _,
          v,
          y,
          x,
          S;
        if (
          (this !== le && u > l && r >= 0 && (u = l),
          u !== this._tTime || a || d)
        ) {
          if (
            (o !== this._time &&
              c &&
              ((u += this._time - o), (r += this._time - o)),
            (p = u),
            (v = this._start),
            (_ = this._ts),
            (b = !_),
            d && (c || (o = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((x = this._yoyo),
              (w = c + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(w * 100 + r, s, a);
            if (
              ((p = Me(u % w)),
              u === l
                ? ((h = this._repeat), (p = c))
                : ((h = ~~(u / w)),
                  h && h === u / w && ((p = c), h--),
                  p > c && (p = c)),
              (y = gr(this._tTime, w)),
              !o &&
                this._tTime &&
                y !== h &&
                this._tTime - y * w - this._dur <= 0 &&
                (y = h),
              x && h & 1 && ((p = c - p), (S = 1)),
              h !== y && !this._lock)
            ) {
              var C = x && y & 1,
                E = C === (x && h & 1);
              if (
                (h < y && (C = !C),
                (o = C ? 0 : u % c ? c : u),
                (this._lock = 1),
                (this.render(o || (S ? 0 : Me(h * w)), s, !c)._lock = 0),
                (this._tTime = u),
                !s && this.parent && vt(this, "onRepeat"),
                this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  b !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((c = this._dur),
                (l = this._tDur),
                E &&
                  ((this._lock = 2),
                  (o = C ? c : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !S && this.invalidate()),
                (this._lock = 0),
                !this._ts && !b)
              )
                return this;
              Vo(this, S);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((m = pu(this, Me(o), Me(p))), m && (u -= p - (p = m._start))),
            (this._tTime = u),
            (this._time = p),
            (this._act = !_),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (o = 0)),
            !o && p && !s && !h && (vt(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (p >= o && r >= 0)
            for (f = this._first; f; ) {
              if (
                ((g = f._next), (f._act || p >= f._start) && f._ts && m !== f)
              ) {
                if (f.parent !== this) return this.render(r, s, a);
                if (
                  (f.render(
                    f._ts > 0
                      ? (p - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (p - f._start) * f._ts,
                    s,
                    a
                  ),
                  p !== this._time || (!this._ts && !b))
                ) {
                  (m = 0), g && (u += this._zTime = -ne);
                  break;
                }
              }
              f = g;
            }
          else {
            f = this._last;
            for (var A = r < 0 ? r : p; f; ) {
              if (
                ((g = f._prev), (f._act || A <= f._end) && f._ts && m !== f)
              ) {
                if (f.parent !== this) return this.render(r, s, a);
                if (
                  (f.render(
                    f._ts > 0
                      ? (A - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (A - f._start) * f._ts,
                    s,
                    a || (Ne && (f._initted || f._startAt))
                  ),
                  p !== this._time || (!this._ts && !b))
                ) {
                  (m = 0), g && (u += this._zTime = A ? -ne : ne);
                  break;
                }
              }
              f = g;
            }
          }
          if (
            m &&
            !s &&
            (this.pause(),
            (m.render(p >= o ? 0 : -ne)._zTime = p >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = v), Rn(this), this.render(r, s, a);
          this._onUpdate && !s && vt(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && o)) &&
              (v === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !c) &&
                  ((u === l && this._ts > 0) || (!u && this._ts < 0)) &&
                  _i(this, 1),
                !s &&
                  !(r < 0 && !o) &&
                  (u || o || !l) &&
                  (vt(
                    this,
                    u === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(u < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, s) {
        var a = this;
        if ((ai(s) || (s = kt(this, s, r)), !(r instanceof jr))) {
          if (Ye(r))
            return (
              r.forEach(function (o) {
                return a.add(o, s);
              }),
              this
            );
          if (Pe(r)) return this.addLabel(r, s);
          if (fe(r)) r = ye.delayedCall(0, r);
          else return this;
        }
        return this !== r ? jt(this, r, s) : this;
      }),
      (t.getChildren = function (r, s, a, o) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          a === void 0 && (a = !0),
          o === void 0 && (o = -Pt);
        for (var l = [], c = this._first; c; )
          c._start >= o &&
            (c instanceof ye
              ? s && l.push(c)
              : (a && l.push(c),
                r && l.push.apply(l, c.getChildren(!0, s, a)))),
            (c = c._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
          if (s[a].vars.id === r) return s[a];
      }),
      (t.remove = function (r) {
        return Pe(r)
          ? this.removeLabel(r)
          : fe(r)
          ? this.killTweensOf(r)
          : (In(this, r),
            r === this._recent && (this._recent = this._last),
            Fi(this));
      }),
      (t.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Me(
                wt.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            n.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, s) {
        return (this.labels[r] = kt(this, s)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, s, a) {
        var o = ye.delayedCall(0, s || Nr, a);
        return (
          (o.data = "isPause"), (this._hasPause = 1), jt(this, o, kt(this, r))
        );
      }),
      (t.removePause = function (r) {
        var s = this._first;
        for (r = kt(this, r); s; )
          s._start === r && s.data === "isPause" && _i(s), (s = s._next);
      }),
      (t.killTweensOf = function (r, s, a) {
        for (var o = this.getTweensOf(r, a), l = o.length; l--; )
          yi !== o[l] && o[l].kill(r, s);
        return this;
      }),
      (t.getTweensOf = function (r, s) {
        for (var a = [], o = Ot(r), l = this._first, c = ai(s), u; l; )
          l instanceof ye
            ? au(l._targets, o) &&
              (c
                ? (!yi || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              a.push(l)
            : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u),
            (l = l._next);
        return a;
      }),
      (t.tweenTo = function (r, s) {
        s = s || {};
        var a = this,
          o = kt(a, r),
          l = s,
          c = l.startAt,
          u = l.onStart,
          d = l.onStartParams,
          p = l.immediateRender,
          f,
          g = ye.to(
            a,
            Mt(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (o - (c && "time" in c ? c.time : a._time)) / a.timeScale()
                  ) ||
                  ne,
                onStart: function () {
                  if ((a.pause(), !f)) {
                    var w =
                      s.duration ||
                      Math.abs(
                        (o - (c && "time" in c ? c.time : a._time)) /
                          a.timeScale()
                      );
                    g._dur !== w && mr(g, w, 0, 1).render(g._time, !0, !0),
                      (f = 1);
                  }
                  u && u.apply(g, d || []);
                },
              },
              s
            )
          );
        return p ? g.render(0) : g;
      }),
      (t.tweenFromTo = function (r, s, a) {
        return this.tweenTo(s, Mt({ startAt: { time: kt(this, r) } }, a));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Io(this, kt(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Io(this, kt(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + ne);
      }),
      (t.shiftChildren = function (r, s, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, l = this.labels, c; o; )
          o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
        if (s) for (c in l) l[c] >= a && (l[c] += r);
        return Fi(this);
      }),
      (t.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return n.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, a; s; )
          (a = s._next), this.remove(s), (s = a);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          Fi(this)
        );
      }),
      (t.totalDuration = function (r) {
        var s = 0,
          a = this,
          o = a._last,
          l = Pt,
          c,
          u,
          d;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -r : r)
          );
        if (a._dirty) {
          for (d = a.parent; o; )
            (c = o._prev),
              o._dirty && o.totalDuration(),
              (u = o._start),
              u > l && a._sort && o._ts && !a._lock
                ? ((a._lock = 1), (jt(a, o, u - o._delay, 1)._lock = 0))
                : (l = u),
              u < 0 &&
                o._ts &&
                ((s -= u),
                ((!d && !a._dp) || (d && d.smoothChildTiming)) &&
                  ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
                a.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              o._end > s && o._ts && (s = o._end),
              (o = c);
          mr(a, a === le && a._time > s ? a._time : s, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((le._ts && (_o(le, zn(r, le)), (ho = wt.frame)), wt.frame >= go)) {
          go += gt.autoSleep || 120;
          var s = le._first;
          if ((!s || !s._ts) && gt.autoSleep && wt._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || wt.sleep();
          }
        }
      }),
      e
    );
  })(jr);
  Mt(Ue.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Mu = function (e, t, i, r, s, a, o) {
      var l = new ut(this._pt, e, t, 0, 1, Qo, null, s),
        c = 0,
        u = 0,
        d,
        p,
        f,
        g,
        h,
        w,
        b,
        m;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (b = ~r.indexOf("random(")) && (r = Hr(r)),
          a && ((m = [i, r]), a(m, e, t), (i = m[0]), (r = m[1])),
          p = i.match(Ls) || [];
        (d = Ls.exec(r));

      )
        (g = d[0]),
          (h = r.substring(c, d.index)),
          f ? (f = (f + 1) % 5) : h.substr(-5) === "rgba(" && (f = 1),
          g !== p[u++] &&
            ((w = parseFloat(p[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: h || u === 1 ? h : ",",
              s: w,
              c: g.charAt(1) === "=" ? hr(w, g) - w : parseFloat(g) - w,
              m: f && f < 4 ? Math.round : 0,
            }),
            (c = Ls.lastIndex));
      return (
        (l.c = c < r.length ? r.substring(c, r.length) : ""),
        (l.fp = o),
        (lo.test(r) || b) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Us = function (e, t, i, r, s, a, o, l, c, u) {
      fe(r) && (r = r(s || 0, e, a));
      var d = e[t],
        p =
          i !== "get"
            ? i
            : fe(d)
            ? c
              ? e[
                  t.indexOf("set") || !fe(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](c)
              : e[t]()
            : d,
        f = fe(d) ? (c ? Iu : jo) : Ks,
        g;
      if (
        (Pe(r) &&
          (~r.indexOf("random(") && (r = Hr(r)),
          r.charAt(1) === "=" &&
            ((g = hr(p, r) + (Ve(p) || 0)), (g || g === 0) && (r = g))),
        !u || p !== r || Qs)
      )
        return !isNaN(p * r) && r !== ""
          ? ((g = new ut(
              this._pt,
              e,
              t,
              +p || 0,
              r - (p || 0),
              typeof d == "boolean" ? Ru : Uo,
              0,
              f
            )),
            c && (g.fp = c),
            o && g.modifier(o, this, e),
            (this._pt = g))
          : (!d && !(t in e) && zs(t, r),
            Mu.call(this, e, t, p, r, f, l || gt.stringFilter, c));
    },
    ku = function (e, t, i, r, s) {
      if (
        (fe(e) && (e = Ur(e, s, t, i, r)),
        !qt(e) || (e.style && e.nodeType) || Ye(e) || ao(e))
      )
        return Pe(e) ? Ur(e, s, t, i, r) : e;
      var a = {},
        o;
      for (o in e) a[o] = Ur(e[o], s, t, i, r);
      return a;
    },
    Wo = function (e, t, i, r, s, a) {
      var o, l, c, u;
      if (
        _t[e] &&
        (o = new _t[e]()).init(
          s,
          o.rawVars ? t[e] : ku(t[e], r, s, a, i),
          i,
          r,
          a
        ) !== !1 &&
        ((i._pt = l = new ut(i._pt, s, e, 0, 1, o.render, o, 0, o.priority)),
        i !== _r)
      )
        for (c = i._ptLookup[i._targets.indexOf(s)], u = o._props.length; u--; )
          c[o._props[u]] = l;
      return o;
    },
    yi,
    Qs,
    Zs = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
        a = r.startAt,
        o = r.immediateRender,
        l = r.lazy,
        c = r.onUpdate,
        u = r.runBackwards,
        d = r.yoyoEase,
        p = r.keyframes,
        f = r.autoRevert,
        g = e._dur,
        h = e._startAt,
        w = e._targets,
        b = e.parent,
        m = b && b.data === "nested" ? b.vars.targets : w,
        _ = e._overwrite === "auto" && !Cs,
        v = e.timeline,
        y,
        x,
        S,
        C,
        E,
        A,
        k,
        M,
        L,
        z,
        B,
        O,
        R;
      if (
        (v && (!p || !s) && (s = "none"),
        (e._ease = Gi(s, fr.ease)),
        (e._yEase = d ? Yo(Gi(d === !0 ? s : d, fr.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !v && !!r.runBackwards),
        !v || (p && !r.stagger))
      ) {
        if (
          ((M = w[0] ? Ri(w[0]).harness : 0),
          (O = M && r[M.prop]),
          (y = Dn(r, Rs)),
          h &&
            (h._zTime < 0 && h.progress(1),
            t < 0 && u && o && !f
              ? h.render(-1, !0)
              : h.revert(u && g ? kn : nu),
            (h._lazy = 0)),
          a)
        ) {
          if (
            (_i(
              (e._startAt = ye.set(
                w,
                Mt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !h && lt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      c &&
                      function () {
                        return vt(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  a
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ne || (!o && !f)) && e._startAt.revert(kn),
            o && g && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (u && g && !h) {
          if (
            (t && (o = !1),
            (S = Mt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !h && lt(l),
                immediateRender: o,
                stagger: 0,
                parent: b,
              },
              y
            )),
            O && (S[M.prop] = O),
            _i((e._startAt = ye.set(w, S))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ne ? e._startAt.revert(kn) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !o)
          )
            n(e._startAt, ne, ne);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (g && lt(l)) || (l && !g), x = 0;
          x < w.length;
          x++
        ) {
          if (
            ((E = w[x]),
            (k = E._gsap || Ns(w)[x]._gsap),
            (e._ptLookup[x] = z = {}),
            Bs[k.id] && mi.length && Ln(),
            (B = m === w ? x : m.indexOf(E)),
            M &&
              (L = new M()).init(E, O || y, e, B, m) !== !1 &&
              ((e._pt = C =
                new ut(e._pt, E, L.name, 0, 1, L.render, L, 0, L.priority)),
              L._props.forEach(function (N) {
                z[N] = C;
              }),
              L.priority && (A = 1)),
            !M || O)
          )
            for (S in y)
              _t[S] && (L = Wo(S, y, e, B, E, m))
                ? L.priority && (A = 1)
                : (z[S] = C =
                    Us.call(e, E, S, "get", y[S], B, m, 0, r.stringFilter));
          e._op && e._op[x] && e.kill(E, e._op[x]),
            _ &&
              e._pt &&
              ((yi = e),
              le.killTweensOf(E, z, e.globalTime(t)),
              (R = !e.parent),
              (yi = 0)),
            e._pt && l && (Bs[k.id] = 1);
        }
        A && Zo(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = c),
        (e._initted = (!e._op || e._pt) && !R),
        p && t <= 0 && v.render(Pt, !0, !0);
    },
    Ou = function (e, t, i, r, s, a, o, l) {
      var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        u,
        d,
        p,
        f;
      if (!c)
        for (
          c = e._ptCache[t] = [], p = e._ptLookup, f = e._targets.length;
          f--;

        ) {
          if (((u = p[f][t]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
          if (!u)
            return (
              (Qs = 1),
              (e.vars[t] = "+=0"),
              Zs(e, o),
              (Qs = 0),
              l ? Gr(t + " not eligible for reset") : 1
            );
          c.push(u);
        }
      for (f = c.length; f--; )
        (d = c[f]),
          (u = d._pt || d),
          (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + a * u.c),
          (u.c = i - u.s),
          d.e && (d.e = ge(i) + Ve(d.e)),
          d.b && (d.b = u.s + Ve(d.b));
    },
    Lu = function (e, t) {
      var i = e[0] ? Ri(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        a,
        o,
        l;
      if (!r) return t;
      s = Bi({}, t);
      for (a in r)
        if (a in s)
          for (l = r[a].split(","), o = l.length; o--; ) s[l[o]] = s[a];
      return s;
    },
    Du = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        a,
        o;
      if (Ye(t))
        (o = i[e] || (i[e] = [])),
          t.forEach(function (l, c) {
            return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (a in t)
          (o = i[a] || (i[a] = [])),
            a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: s });
    },
    Ur = function (e, t, i, r, s) {
      return fe(e)
        ? e.call(t, i, r, s)
        : Pe(e) && ~e.indexOf("random(")
        ? Hr(e)
        : e;
    },
    qo = Gs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Xo = {};
  ct(qo + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (Xo[n] = 1);
  });
  var ye = (function (n) {
    no(e, n);
    function e(i, r, s, a) {
      var o;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (o = n.call(this, a ? r : Yr(r)) || this);
      var l = o.vars,
        c = l.duration,
        u = l.delay,
        d = l.immediateRender,
        p = l.stagger,
        f = l.overwrite,
        g = l.keyframes,
        h = l.defaults,
        w = l.scrollTrigger,
        b = l.yoyoEase,
        m = r.parent || le,
        _ = (Ye(i) || ao(i) ? ai(i[0]) : "length" in r) ? [i] : Ot(i),
        v,
        y,
        x,
        S,
        C,
        E,
        A,
        k;
      if (
        ((o._targets = _.length
          ? Ns(_)
          : Gr(
              "GSAP target " + i + " not found. https://gsap.com",
              !gt.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = f),
        g || p || Pn(c) || Pn(u))
      ) {
        if (
          ((r = o.vars),
          (v = o.timeline =
            new Ue({
              data: "nested",
              defaults: h || {},
              targets: m && m.data === "nested" ? m.vars.targets : _,
            })),
          v.kill(),
          (v.parent = v._dp = si(o)),
          (v._start = 0),
          p || Pn(c) || Pn(u))
        ) {
          if (((S = _.length), (A = p && Mo(p)), qt(p)))
            for (C in p) ~qo.indexOf(C) && (k || (k = {}), (k[C] = p[C]));
          for (y = 0; y < S; y++)
            (x = Dn(r, Xo)),
              (x.stagger = 0),
              b && (x.yoyoEase = b),
              k && Bi(x, k),
              (E = _[y]),
              (x.duration = +Ur(c, si(o), y, E, _)),
              (x.delay = (+Ur(u, si(o), y, E, _) || 0) - o._delay),
              !p &&
                S === 1 &&
                x.delay &&
                ((o._delay = u = x.delay), (o._start += u), (x.delay = 0)),
              v.to(E, x, A ? A(y, E, _) : 0),
              (v._ease = j.none);
          v.duration() ? (c = u = 0) : (o.timeline = 0);
        } else if (g) {
          Yr(Mt(v.vars.defaults, { ease: "none" })),
            (v._ease = Gi(g.ease || r.ease || "none"));
          var M = 0,
            L,
            z,
            B;
          if (Ye(g))
            g.forEach(function (O) {
              return v.to(_, O, ">");
            }),
              v.duration();
          else {
            x = {};
            for (C in g)
              C === "ease" || C === "easeEach" || Du(C, g[C], x, g.easeEach);
            for (C in x)
              for (
                L = x[C].sort(function (O, R) {
                  return O.t - R.t;
                }),
                  M = 0,
                  y = 0;
                y < L.length;
                y++
              )
                (z = L[y]),
                  (B = {
                    ease: z.e,
                    duration: ((z.t - (y ? L[y - 1].t : 0)) / 100) * c,
                  }),
                  (B[C] = z.v),
                  v.to(_, B, M),
                  (M += B.duration);
            v.duration() < c && v.to({}, { duration: c - v.duration() });
          }
        }
        c || o.duration((c = v.duration()));
      } else o.timeline = 0;
      return (
        f === !0 && !Cs && ((yi = si(o)), le.killTweensOf(_), (yi = 0)),
        jt(m, si(o), s),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        (d ||
          (!c &&
            !g &&
            o._start === Me(m._time) &&
            lt(d) &&
            uu(si(o)) &&
            m.data !== "nested")) &&
          ((o._tTime = -ne), o.render(Math.max(0, -u) || 0)),
        w && To(si(o), w),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, s, a) {
        var o = this._time,
          l = this._tDur,
          c = this._dur,
          u = r < 0,
          d = r > l - ne && !u ? l : r < ne ? 0 : r,
          p,
          f,
          g,
          h,
          w,
          b,
          m,
          _,
          v;
        if (!c) fu(this, r, s, a);
        else if (
          d !== this._tTime ||
          !r ||
          a ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== u)
        ) {
          if (((p = d), (_ = this.timeline), this._repeat)) {
            if (((h = c + this._rDelay), this._repeat < -1 && u))
              return this.totalTime(h * 100 + r, s, a);
            if (
              ((p = Me(d % h)),
              d === l
                ? ((g = this._repeat), (p = c))
                : ((g = ~~(d / h)),
                  g && g === Me(d / h) && ((p = c), g--),
                  p > c && (p = c)),
              (b = this._yoyo && g & 1),
              b && ((v = this._yEase), (p = c - p)),
              (w = gr(this._tTime, h)),
              p === o && !a && this._initted && g === w)
            )
              return (this._tTime = d), this;
            g !== w &&
              (_ && this._yEase && Vo(_, b),
              this.vars.repeatRefresh &&
                !b &&
                !this._lock &&
                this._time !== h &&
                this._initted &&
                ((this._lock = a = 1),
                (this.render(Me(h * g), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ao(this, u ? r : p, a, s, d)) return (this._tTime = 0), this;
            if (o !== this._time && !(a && this.vars.repeatRefresh && g !== w))
              return this;
            if (c !== this._dur) return this.render(r, s, a);
          }
          if (
            ((this._tTime = d),
            (this._time = p),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = m = (v || this._ease)(p / c)),
            this._from && (this.ratio = m = 1 - m),
            p && !o && !s && !g && (vt(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(m, f.d), (f = f._next);
          (_ && _.render(r < 0 ? r : _._dur * _._ease(p / this._dur), s, a)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (u && Ys(this, r, s, a), vt(this, "onUpdate")),
            this._repeat &&
              g !== w &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              vt(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (u && !this._onUpdate && Ys(this, r, !0, !0),
              (r || !c) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                _i(this, 1),
              !s &&
                !(u && !o) &&
                (d || o || b) &&
                (vt(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          n.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, s, a, o, l) {
        Xr || wt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || Zs(this, c),
          (u = this._ease(c / this._dur)),
          Ou(this, r, s, a, o, u, c, l)
            ? this.resetTo(r, s, a, o, 1)
            : (Bn(this, 0),
              this.parent ||
                bo(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (this._lazy = this._pt = 0), this.parent ? Wr(this) : this;
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, yi && yi.vars.overwrite !== !0)
              ._first || Wr(this),
            this.parent &&
              a !== this.timeline.totalDuration() &&
              mr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = r ? Ot(r) : o,
          c = this._ptLookup,
          u = this._pt,
          d,
          p,
          f,
          g,
          h,
          w,
          b;
        if ((!s || s === "all") && lu(o, l))
          return s === "all" && (this._pt = 0), Wr(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Pe(s) &&
                ((h = {}),
                ct(s, function (m) {
                  return (h[m] = 1);
                }),
                (s = h)),
              (s = Lu(o, s))),
            b = o.length;
          b--;

        )
          if (~l.indexOf(o[b])) {
            (p = c[b]),
              s === "all"
                ? ((d[b] = s), (g = p), (f = {}))
                : ((f = d[b] = d[b] || {}), (g = s));
            for (h in g)
              (w = p && p[h]),
                w &&
                  ((!("kill" in w.d) || w.d.kill(h) === !0) &&
                    In(this, w, "_pt"),
                  delete p[h]),
                f !== "all" && (f[h] = 1);
          }
        return this._initted && !this._pt && u && Wr(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return Vr(1, arguments);
      }),
      (e.delayedCall = function (r, s, a, o) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: a,
          onReverseCompleteParams: a,
          callbackScope: o,
        });
      }),
      (e.fromTo = function (r, s, a) {
        return Vr(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, a) {
        return le.killTweensOf(r, s, a);
      }),
      e
    );
  })(jr);
  Mt(ye.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    ct("staggerTo,staggerFrom,staggerFromTo", function (n) {
      ye[n] = function () {
        var e = new Ue(),
          t = $s.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var Ks = function (e, t, i) {
      return (e[t] = i);
    },
    jo = function (e, t, i) {
      return e[t](i);
    },
    Iu = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    zu = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Js = function (e, t) {
      return fe(e[t]) ? jo : Ms(e[t]) && e.setAttribute ? zu : Ks;
    },
    Uo = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Ru = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Qo = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    ea = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Bu = function (e, t, i, r) {
      for (var s = this._pt, a; s; )
        (a = s._next), s.p === r && s.modifier(e, t, i), (s = a);
    },
    Fu = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? In(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    Gu = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Zo = function (e) {
      for (var t = e._pt, i, r, s, a; t; ) {
        for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (s = t),
          (t._next = r) ? (r._prev = t) : (a = t),
          (t = i);
      }
      e._pt = s;
    },
    ut = (function () {
      function n(t, i, r, s, a, o, l, c, u) {
        (this.t = i),
          (this.s = s),
          (this.c = a),
          (this.p = r),
          (this.r = o || Uo),
          (this.d = l || this),
          (this.set = c || Ks),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Gu),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  ct(
    Gs +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (Rs[n] = 1);
    }
  ),
    (mt.TweenMax = mt.TweenLite = ye),
    (mt.TimelineLite = mt.TimelineMax = Ue),
    (le = new Ue({
      sortChildren: !1,
      defaults: fr,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (gt.stringFilter = No);
  var Yi = [],
    Fn = {},
    Nu = [],
    Ko = 0,
    Yu = 0,
    ta = function (e) {
      return (Fn[e] || Nu).map(function (t) {
        return t();
      });
    },
    ia = function () {
      var e = Date.now(),
        t = [];
      e - Ko > 2 &&
        (ta("matchMediaInit"),
        Yi.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            a,
            o,
            l,
            c;
          for (o in r)
            (a = Xt.matchMedia(r[o]).matches),
              a && (l = 1),
              a !== s[o] && ((s[o] = a), (c = 1));
          c && (i.revert(), l && t.push(i));
        }),
        ta("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Ko = e),
        ta("matchMedia"));
    },
    Jo = (function () {
      function n(t, i) {
        (this.selector = i && Hs(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Yu++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          fe(i) && ((s = r), (r = i), (i = fe));
          var a = this,
            o = function () {
              var c = ae,
                u = a.selector,
                d;
              return (
                c && c !== a && c.data.push(a),
                s && (a.selector = Hs(s)),
                (ae = a),
                (d = r.apply(a, arguments)),
                fe(d) && a._r.push(d),
                (ae = c),
                (a.selector = u),
                (a.isReverted = !1),
                d
              );
            };
          return (
            (a.last = o),
            i === fe
              ? o(a, function (l) {
                  return a.add(null, l);
                })
              : i
              ? (a[i] = o)
              : o
          );
        }),
        (e.ignore = function (i) {
          var r = ae;
          (ae = null), i(this), (ae = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof n
                ? i.push.apply(i, r.getTweens())
                : r instanceof ye &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var s = this;
          if (
            (i
              ? (function () {
                  for (var o = s.getTweens(), l = s.data.length, c; l--; )
                    (c = s.data[l]),
                      c.data === "isFlip" &&
                        (c.revert(),
                        c.getChildren(!0, !0, !1).forEach(function (u) {
                          return o.splice(o.indexOf(u), 1);
                        }));
                  for (
                    o
                      .map(function (u) {
                        return {
                          g:
                            u._dur ||
                            u._delay ||
                            (u._sat && !u._sat.vars.immediateRender)
                              ? u.globalTime(0)
                              : -1 / 0,
                          t: u,
                        };
                      })
                      .sort(function (u, d) {
                        return d.g - u.g || -1 / 0;
                      })
                      .forEach(function (u) {
                        return u.t.revert(i);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (c = s.data[l]),
                      c instanceof Ue
                        ? c.data !== "nested" &&
                          (c.scrollTrigger && c.scrollTrigger.revert(),
                          c.kill())
                        : !(c instanceof ye) && c.revert && c.revert(i);
                  s._r.forEach(function (u) {
                    return u(i, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (o) {
                  return o.kill && o.kill();
                }),
            this.clear(),
            r)
          )
            for (var a = Yi.length; a--; )
              Yi[a].id === this.id && Yi.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        n
      );
    })(),
    Vu = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t), ae && ae.data.push(this);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          qt(i) || (i = { matches: i });
          var a = new Jo(0, s || this.scope),
            o = (a.conditions = {}),
            l,
            c,
            u;
          ae && !a.selector && (a.selector = ae.selector),
            this.contexts.push(a),
            (r = a.add("onMatch", r)),
            (a.queries = i);
          for (c in i)
            c === "all"
              ? (u = 1)
              : ((l = Xt.matchMedia(i[c])),
                l &&
                  (Yi.indexOf(a) < 0 && Yi.push(a),
                  (o[c] = l.matches) && (u = 1),
                  l.addListener
                    ? l.addListener(ia)
                    : l.addEventListener("change", ia)));
          return (
            u &&
              r(a, function (d) {
                return a.add(null, d);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        n
      );
    })(),
    Gn = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return Ro(r);
        });
      },
      timeline: function (e) {
        return new Ue(e);
      },
      getTweensOf: function (e, t) {
        return le.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Pe(e) && (e = Ot(e)[0]);
        var s = Ri(e || {}).get,
          a = i ? wo : vo;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? a(((_t[t] && _t[t].get) || s)(e, t, i, r))
              : function (o, l, c) {
                  return a(((_t[o] && _t[o].get) || s)(e, o, l, c));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Ot(e)), e.length > 1)) {
          var r = e.map(function (u) {
              return dt.quickSetter(u, t, i);
            }),
            s = r.length;
          return function (u) {
            for (var d = s; d--; ) r[d](u);
          };
        }
        e = e[0] || {};
        var a = _t[t],
          o = Ri(e),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          c = a
            ? function (u) {
                var d = new a();
                (_r._pt = 0),
                  d.init(e, i ? u + i : u, _r, 0, [e]),
                  d.render(1, d),
                  _r._pt && ea(1, _r);
              }
            : o.set(e, l);
        return a
          ? c
          : function (u) {
              return c(e, l, i ? u + i : u, o, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          s = dt.to(
            e,
            Bi(((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          a = function (l, c, u) {
            return s.resetTo(t, l, c, u);
          };
        return (a.tween = s), a;
      },
      isTweening: function (e) {
        return le.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Gi(e.ease, fr.ease)), yo(fr, e || {});
      },
      config: function (e) {
        return yo(gt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          a = e.extendTimeline;
        (r || "").split(",").forEach(function (o) {
          return (
            o &&
            !_t[o] &&
            !mt[o] &&
            Gr(t + " effect requires " + o + " plugin.")
          );
        }),
          (Fs[t] = function (o, l, c) {
            return i(Ot(o), Mt(l || {}, s), c);
          }),
          a &&
            (Ue.prototype[t] = function (o, l, c) {
              return this.add(Fs[t](o, qt(l) ? l : (c = l) && {}, this), c);
            });
      },
      registerEase: function (e, t) {
        j[e] = Gi(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Gi(e, t) : j;
      },
      getById: function (e) {
        return le.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new Ue(e),
          r,
          s;
        for (
          i.smoothChildTiming = lt(e.smoothChildTiming),
            le.remove(i),
            i._dp = 0,
            i._time = i._tTime = le._time,
            r = le._first;
          r;

        )
          (s = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof ye &&
                r.vars.onComplete === r._targets[0]
              )) &&
              jt(i, r, r._start - r._delay),
            (r = s);
        return jt(le, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Jo(e, t) : ae;
      },
      matchMedia: function (e) {
        return new Vu(e);
      },
      matchMediaRefresh: function () {
        return (
          Yi.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || ia()
        );
      },
      addEventListener: function (e, t) {
        var i = Fn[e] || (Fn[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Fn[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: yu,
        wrapYoyo: bu,
        distribute: Mo,
        random: Oo,
        snap: ko,
        normalize: wu,
        getUnit: Ve,
        clamp: gu,
        splitColor: Bo,
        toArray: Ot,
        selector: Hs,
        mapRange: Do,
        pipe: _u,
        unitize: vu,
        interpolate: xu,
        shuffle: Po,
      },
      install: fo,
      effects: Fs,
      ticker: wt,
      updateRoot: Ue.updateRoot,
      plugins: _t,
      globalTimeline: le,
      core: {
        PropTween: ut,
        globals: po,
        Tween: ye,
        Timeline: Ue,
        Animation: jr,
        getCache: Ri,
        _removeLinkedListItem: In,
        reverting: function () {
          return Ne;
        },
        context: function (e) {
          return e && ae && (ae.data.push(e), (e._ctx = ae)), ae;
        },
        suppressOverwrites: function (e) {
          return (Cs = e);
        },
      },
    };
  ct("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Gn[n] = ye[n]);
  }),
    wt.add(Ue.updateRoot),
    (_r = Gn.to({}, { duration: 0 }));
  var $u = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    Hu = function (e, t) {
      var i = e._targets,
        r,
        s,
        a;
      for (r in t)
        for (s = i.length; s--; )
          (a = e._ptLookup[s][r]),
            a &&
              (a = a.d) &&
              (a._pt && (a = $u(a, r)),
              a && a.modifier && a.modifier(t[r], e, i[s], r));
    },
    ra = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, s, a) {
          a._onInit = function (o) {
            var l, c;
            if (
              (Pe(s) &&
                ((l = {}),
                ct(s, function (u) {
                  return (l[u] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (c in s) l[c] = t(s[c]);
              s = l;
            }
            Hu(o, s);
          };
        },
      };
    },
    dt =
      Gn.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, s) {
            var a, o, l;
            this.tween = i;
            for (a in t)
              (l = e.getAttribute(a) || ""),
                (o = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[a],
                  r,
                  s,
                  0,
                  0,
                  a
                )),
                (o.op = a),
                (o.b = l),
                this._props.push(a);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              Ne ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        ra("roundProps", Ws),
        ra("modifiers"),
        ra("snap", ko)
      ) || Gn;
  (ye.version = Ue.version = dt.version = "3.12.5"),
    (uo = 1),
    ks() && vr(),
    j.Power0,
    j.Power1,
    j.Power2,
    j.Power3,
    j.Power4,
    j.Linear,
    j.Quad,
    j.Cubic,
    j.Quart,
    j.Quint,
    j.Strong,
    j.Elastic,
    j.Back,
    j.SteppedEase,
    j.Bounce,
    j.Sine,
    j.Expo,
    j.Circ;
  /*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var el,
    bi,
    wr,
    na,
    Vi,
    tl,
    sa,
    Wu = function () {
      return typeof window < "u";
    },
    oi = {},
    $i = 180 / Math.PI,
    yr = Math.PI / 180,
    br = Math.atan2,
    il = 1e8,
    aa = /([A-Z])/g,
    qu = /(left|right|width|margin|padding|x)/i,
    Xu = /[\s,\(]\S/,
    Ut = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    oa = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    ju = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Uu = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Qu = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    rl = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    nl = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Zu = function (e, t, i) {
      return (e.style[t] = i);
    },
    Ku = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Ju = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    ed = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    td = function (e, t, i, r, s) {
      var a = e._gsap;
      (a.scaleX = a.scaleY = i), a.renderTransform(s, a);
    },
    id = function (e, t, i, r, s) {
      var a = e._gsap;
      (a[t] = i), a.renderTransform(s, a);
    },
    ce = "transform",
    ft = ce + "Origin",
    rd = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style,
        a = r._gsap;
      if (e in oi && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = Ut[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = li(r, o));
                })
              : (this.tfm[e] = a.x ? a[e] : li(r, e)),
            e === ft && (this.tfm.zOrigin = a.zOrigin);
        else
          return Ut.transform.split(",").forEach(function (o) {
            return n.call(i, o, t);
          });
        if (this.props.indexOf(ce) >= 0) return;
        a.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(ft, t, "")),
          (e = ce);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    sl = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    nd = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        s,
        a;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(aa, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (a in this.tfm) r[a] = this.tfm[a];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = sa()),
          (!s || !s.isStart) &&
            !i[ce] &&
            (sl(i),
            r.zOrigin &&
              i[ft] &&
              ((i[ft] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    al = function (e, t) {
      var i = { target: e, props: [], revert: nd, save: rd };
      return (
        e._gsap || dt.core.getCache(e),
        t &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    ol,
    la = function (e, t) {
      var i = bi.createElementNS
        ? bi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : bi.createElement(e);
      return i && i.style ? i : bi.createElement(e);
    },
    Qt = function n(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(aa, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && n(e, xr(t) || t, 1)) ||
        ""
      );
    },
    ll = "O,Moz,ms,Ms,Webkit".split(","),
    xr = function (e, t, i) {
      var r = t || Vi,
        s = r.style,
        a = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        a-- && !(ll[a] + e in s);

      );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? ll[a] : "") + e;
    },
    ca = function () {
      Wu() &&
        window.document &&
        ((el = window),
        (bi = el.document),
        (wr = bi.documentElement),
        (Vi = la("div") || { style: {} }),
        la("div"),
        (ce = xr(ce)),
        (ft = ce + "Origin"),
        (Vi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (ol = !!xr("perspective")),
        (sa = dt.core.reverting),
        (na = 1));
    },
    ua = function n(e) {
      var t = la(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText,
        a;
      if (
        (wr.appendChild(t),
        t.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (a = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = n);
        } catch {}
      else this._gsapBBox && (a = this._gsapBBox());
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        wr.removeChild(t),
        (this.style.cssText = s),
        a
      );
    },
    cl = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    ul = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch {
        t = ua.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === ua ||
          (t = ua.call(e, !0)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +cl(e, ["x", "cx", "x1"]) || 0,
              y: +cl(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    dl = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ul(e));
    },
    Hi = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in oi && t !== ft && (t = ce),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(aa, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    xi = function (e, t, i, r, s, a) {
      var o = new ut(e._pt, t, i, 0, 1, a ? nl : rl);
      return (e._pt = o), (o.b = r), (o.e = s), e._props.push(i), o;
    },
    fl = { deg: 1, rad: 1, turn: 1 },
    sd = { grid: 1, flex: 1 },
    Si = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        a = (i + "").trim().substr((s + "").length) || "px",
        o = Vi.style,
        l = qu.test(t),
        c = e.tagName.toLowerCase() === "svg",
        u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        p = r === "px",
        f = r === "%",
        g,
        h,
        w,
        b;
      if (r === a || !s || fl[r] || fl[a]) return s;
      if (
        (a !== "px" && !p && (s = n(e, t, i, "px")),
        (b = e.getCTM && dl(e)),
        (f || a === "%") && (oi[t] || ~t.indexOf("adius")))
      )
        return (
          (g = b ? e.getBBox()[l ? "width" : "height"] : e[u]),
          ge(f ? (s / g) * d : (s / 100) * g)
        );
      if (
        ((o[l ? "width" : "height"] = d + (p ? a : r)),
        (h =
          ~t.indexOf("adius") || (r === "em" && e.appendChild && !c)
            ? e
            : e.parentNode),
        b && (h = (e.ownerSVGElement || {}).parentNode),
        (!h || h === bi || !h.appendChild) && (h = bi.body),
        (w = h._gsap),
        w && f && w.width && l && w.time === wt.time && !w.uncache)
      )
        return ge((s / w.width) * d);
      if (f && (t === "height" || t === "width")) {
        var m = e.style[t];
        (e.style[t] = d + r), (g = e[u]), m ? (e.style[t] = m) : Hi(e, t);
      } else
        (f || a === "%") &&
          !sd[Qt(h, "display")] &&
          (o.position = Qt(e, "position")),
          h === e && (o.position = "static"),
          h.appendChild(Vi),
          (g = Vi[u]),
          h.removeChild(Vi),
          (o.position = "absolute");
      return (
        l && f && ((w = Ri(h)), (w.time = wt.time), (w.width = h[u])),
        ge(p ? (g * s) / d : g && s ? (d / g) * s : 0)
      );
    },
    li = function (e, t, i, r) {
      var s;
      return (
        na || ca(),
        t in Ut &&
          t !== "transform" &&
          ((t = Ut[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        oi[t] && t !== "transform"
          ? ((s = Zr(e, r)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : Yn(Qt(e, ft)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (Nn[t] && Nn[t](e, t, i)) ||
                Qt(e, t) ||
                mo(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Si(e, t, s, i) + i : s
      );
    },
    ad = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = xr(t, e, 1),
          a = s && Qt(e, s, 1);
        a && a !== i
          ? ((t = s), (i = a))
          : t === "borderColor" && (i = Qt(e, "borderTopColor"));
      }
      var o = new ut(this._pt, e.style, t, 0, 1, Qo),
        l = 0,
        c = 0,
        u,
        d,
        p,
        f,
        g,
        h,
        w,
        b,
        m,
        _,
        v,
        y;
      if (
        ((o.b = i),
        (o.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((h = e.style[t]),
          (e.style[t] = r),
          (r = Qt(e, t) || r),
          h ? (e.style[t] = h) : Hi(e, t)),
        (u = [i, r]),
        No(u),
        (i = u[0]),
        (r = u[1]),
        (p = i.match(pr) || []),
        (y = r.match(pr) || []),
        y.length)
      ) {
        for (; (d = pr.exec(r)); )
          (w = d[0]),
            (m = r.substring(l, d.index)),
            g
              ? (g = (g + 1) % 5)
              : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") &&
                (g = 1),
            w !== (h = p[c++] || "") &&
              ((f = parseFloat(h) || 0),
              (v = h.substr((f + "").length)),
              w.charAt(1) === "=" && (w = hr(f, w) + v),
              (b = parseFloat(w)),
              (_ = w.substr((b + "").length)),
              (l = pr.lastIndex - _.length),
              _ ||
                ((_ = _ || gt.units[t] || v),
                l === r.length && ((r += _), (o.e += _))),
              v !== _ && (f = Si(e, t, h, _) || 0),
              (o._pt = {
                _next: o._pt,
                p: m || c === 1 ? m : ",",
                s: f,
                c: b - f,
                m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
              }));
        o.c = l < r.length ? r.substring(l, r.length) : "";
      } else o.r = t === "display" && r === "none" ? nl : rl;
      return lo.test(r) && (o.e = 0), (this._pt = o), o;
    },
    pl = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    od = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = pl[i] || i),
        (t[1] = pl[r] || r),
        t.join(" ")
      );
    },
    ld = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          a = i._gsap,
          o,
          l,
          c;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), c = s.length; --c > -1; )
            (o = s[c]),
              oi[o] && ((l = 1), (o = o === "transformOrigin" ? ft : ce)),
              Hi(i, o);
        l &&
          (Hi(i, ce),
          a &&
            (a.svg && i.removeAttribute("transform"),
            Zr(i, 1),
            (a.uncache = 1),
            sl(r)));
      }
    },
    Nn = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var a = (e._pt = new ut(e._pt, t, i, 0, 0, ld));
          return (a.u = r), (a.pr = -10), (a.tween = s), e._props.push(i), 1;
        }
      },
    },
    Qr = [1, 0, 0, 1, 0, 0],
    hl = {},
    gl = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    ml = function (e) {
      var t = Qt(e, ce);
      return gl(t) ? Qr : t.substr(7).match(oo).map(ge);
    },
    da = function (e, t) {
      var i = e._gsap || Ri(e),
        r = e.style,
        s = ml(e),
        a,
        o,
        l,
        c;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Qr : s)
        : (s === Qr &&
            !e.offsetParent &&
            e !== wr &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (a = e.parentNode),
            (!a || !e.offsetParent) &&
              ((c = 1), (o = e.nextElementSibling), wr.appendChild(e)),
            (s = ml(e)),
            l ? (r.display = l) : Hi(e, "display"),
            c &&
              (o
                ? a.insertBefore(e, o)
                : a
                ? a.appendChild(e)
                : wr.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    fa = function (e, t, i, r, s, a) {
      var o = e._gsap,
        l = s || da(e, !0),
        c = o.xOrigin || 0,
        u = o.yOrigin || 0,
        d = o.xOffset || 0,
        p = o.yOffset || 0,
        f = l[0],
        g = l[1],
        h = l[2],
        w = l[3],
        b = l[4],
        m = l[5],
        _ = t.split(" "),
        v = parseFloat(_[0]) || 0,
        y = parseFloat(_[1]) || 0,
        x,
        S,
        C,
        E;
      i
        ? l !== Qr &&
          (S = f * w - g * h) &&
          ((C = v * (w / S) + y * (-h / S) + (h * m - w * b) / S),
          (E = v * (-g / S) + y * (f / S) - (f * m - g * b) / S),
          (v = C),
          (y = E))
        : ((x = ul(e)),
          (v = x.x + (~_[0].indexOf("%") ? (v / 100) * x.width : v)),
          (y =
            x.y + (~(_[1] || _[0]).indexOf("%") ? (y / 100) * x.height : y))),
        r || (r !== !1 && o.smooth)
          ? ((b = v - c),
            (m = y - u),
            (o.xOffset = d + (b * f + m * h) - b),
            (o.yOffset = p + (b * g + m * w) - m))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = v),
        (o.yOrigin = y),
        (o.smooth = !!r),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[ft] = "0px 0px"),
        a &&
          (xi(a, o, "xOrigin", c, v),
          xi(a, o, "yOrigin", u, y),
          xi(a, o, "xOffset", d, o.xOffset),
          xi(a, o, "yOffset", p, o.yOffset)),
        e.setAttribute("data-svg-origin", v + " " + y);
    },
    Zr = function (e, t) {
      var i = e._gsap || new Ho(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        a = "px",
        o = "deg",
        l = getComputedStyle(e),
        c = Qt(e, ft) || "0",
        u,
        d,
        p,
        f,
        g,
        h,
        w,
        b,
        m,
        _,
        v,
        y,
        x,
        S,
        C,
        E,
        A,
        k,
        M,
        L,
        z,
        B,
        O,
        R,
        N,
        Z,
        T,
        ie,
        Re,
        Gt,
        pe,
        Be;
      return (
        (u = d = p = h = w = b = m = _ = v = 0),
        (f = g = 1),
        (i.svg = !!(e.getCTM && dl(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[ce] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[ce] !== "none" ? l[ce] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (S = da(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((N = e.getBBox()),
              (c = i.xOrigin - N.x + "px " + (i.yOrigin - N.y) + "px"),
              (R = ""))
            : (R = !t && e.getAttribute("data-svg-origin")),
          fa(e, R || c, !!R || i.originIsAbsolute, i.smooth !== !1, S)),
        (y = i.xOrigin || 0),
        (x = i.yOrigin || 0),
        S !== Qr &&
          ((k = S[0]),
          (M = S[1]),
          (L = S[2]),
          (z = S[3]),
          (u = B = S[4]),
          (d = O = S[5]),
          S.length === 6
            ? ((f = Math.sqrt(k * k + M * M)),
              (g = Math.sqrt(z * z + L * L)),
              (h = k || M ? br(M, k) * $i : 0),
              (m = L || z ? br(L, z) * $i + h : 0),
              m && (g *= Math.abs(Math.cos(m * yr))),
              i.svg && ((u -= y - (y * k + x * L)), (d -= x - (y * M + x * z))))
            : ((Be = S[6]),
              (Gt = S[7]),
              (T = S[8]),
              (ie = S[9]),
              (Re = S[10]),
              (pe = S[11]),
              (u = S[12]),
              (d = S[13]),
              (p = S[14]),
              (C = br(Be, Re)),
              (w = C * $i),
              C &&
                ((E = Math.cos(-C)),
                (A = Math.sin(-C)),
                (R = B * E + T * A),
                (N = O * E + ie * A),
                (Z = Be * E + Re * A),
                (T = B * -A + T * E),
                (ie = O * -A + ie * E),
                (Re = Be * -A + Re * E),
                (pe = Gt * -A + pe * E),
                (B = R),
                (O = N),
                (Be = Z)),
              (C = br(-L, Re)),
              (b = C * $i),
              C &&
                ((E = Math.cos(-C)),
                (A = Math.sin(-C)),
                (R = k * E - T * A),
                (N = M * E - ie * A),
                (Z = L * E - Re * A),
                (pe = z * A + pe * E),
                (k = R),
                (M = N),
                (L = Z)),
              (C = br(M, k)),
              (h = C * $i),
              C &&
                ((E = Math.cos(C)),
                (A = Math.sin(C)),
                (R = k * E + M * A),
                (N = B * E + O * A),
                (M = M * E - k * A),
                (O = O * E - B * A),
                (k = R),
                (B = N)),
              w &&
                Math.abs(w) + Math.abs(h) > 359.9 &&
                ((w = h = 0), (b = 180 - b)),
              (f = ge(Math.sqrt(k * k + M * M + L * L))),
              (g = ge(Math.sqrt(O * O + Be * Be))),
              (C = br(B, O)),
              (m = Math.abs(C) > 2e-4 ? C * $i : 0),
              (v = pe ? 1 / (pe < 0 ? -pe : pe) : 0)),
          i.svg &&
            ((R = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !gl(Qt(e, ce))),
            R && e.setAttribute("transform", R))),
        Math.abs(m) > 90 &&
          Math.abs(m) < 270 &&
          (s
            ? ((f *= -1),
              (m += h <= 0 ? 180 : -180),
              (h += h <= 0 ? 180 : -180))
            : ((g *= -1), (m += m <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          u -
          ((i.xPercent =
            u &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          a),
        (i.y =
          d -
          ((i.yPercent =
            d &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          a),
        (i.z = p + a),
        (i.scaleX = ge(f)),
        (i.scaleY = ge(g)),
        (i.rotation = ge(h) + o),
        (i.rotationX = ge(w) + o),
        (i.rotationY = ge(b) + o),
        (i.skewX = m + o),
        (i.skewY = _ + o),
        (i.transformPerspective = v + a),
        (i.zOrigin = parseFloat(c.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[ft] = Yn(c)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = gt.force3D),
        (i.renderTransform = i.svg ? ud : ol ? _l : cd),
        (i.uncache = 0),
        i
      );
    },
    Yn = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    pa = function (e, t, i) {
      var r = Ve(t);
      return ge(parseFloat(t) + parseFloat(Si(e, "x", i + "px", r))) + r;
    },
    cd = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        _l(e, t);
    },
    Wi = "0deg",
    Kr = "0px",
    qi = ") ",
    _l = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.z,
        c = i.rotation,
        u = i.rotationY,
        d = i.rotationX,
        p = i.skewX,
        f = i.skewY,
        g = i.scaleX,
        h = i.scaleY,
        w = i.transformPerspective,
        b = i.force3D,
        m = i.target,
        _ = i.zOrigin,
        v = "",
        y = (b === "auto" && e && e !== 1) || b === !0;
      if (_ && (d !== Wi || u !== Wi)) {
        var x = parseFloat(u) * yr,
          S = Math.sin(x),
          C = Math.cos(x),
          E;
        (x = parseFloat(d) * yr),
          (E = Math.cos(x)),
          (a = pa(m, a, S * E * -_)),
          (o = pa(m, o, -Math.sin(x) * -_)),
          (l = pa(m, l, C * E * -_ + _));
      }
      w !== Kr && (v += "perspective(" + w + qi),
        (r || s) && (v += "translate(" + r + "%, " + s + "%) "),
        (y || a !== Kr || o !== Kr || l !== Kr) &&
          (v +=
            l !== Kr || y
              ? "translate3d(" + a + ", " + o + ", " + l + ") "
              : "translate(" + a + ", " + o + qi),
        c !== Wi && (v += "rotate(" + c + qi),
        u !== Wi && (v += "rotateY(" + u + qi),
        d !== Wi && (v += "rotateX(" + d + qi),
        (p !== Wi || f !== Wi) && (v += "skew(" + p + ", " + f + qi),
        (g !== 1 || h !== 1) && (v += "scale(" + g + ", " + h + qi),
        (m.style[ce] = v || "translate(0, 0)");
    },
    ud = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        a = i.x,
        o = i.y,
        l = i.rotation,
        c = i.skewX,
        u = i.skewY,
        d = i.scaleX,
        p = i.scaleY,
        f = i.target,
        g = i.xOrigin,
        h = i.yOrigin,
        w = i.xOffset,
        b = i.yOffset,
        m = i.forceCSS,
        _ = parseFloat(a),
        v = parseFloat(o),
        y,
        x,
        S,
        C,
        E;
      (l = parseFloat(l)),
        (c = parseFloat(c)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (c += u), (l += u)),
        l || c
          ? ((l *= yr),
            (c *= yr),
            (y = Math.cos(l) * d),
            (x = Math.sin(l) * d),
            (S = Math.sin(l - c) * -p),
            (C = Math.cos(l - c) * p),
            c &&
              ((u *= yr),
              (E = Math.tan(c - u)),
              (E = Math.sqrt(1 + E * E)),
              (S *= E),
              (C *= E),
              u &&
                ((E = Math.tan(u)),
                (E = Math.sqrt(1 + E * E)),
                (y *= E),
                (x *= E))),
            (y = ge(y)),
            (x = ge(x)),
            (S = ge(S)),
            (C = ge(C)))
          : ((y = d), (C = p), (x = S = 0)),
        ((_ && !~(a + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
          ((_ = Si(f, "x", a, "px")), (v = Si(f, "y", o, "px"))),
        (g || h || w || b) &&
          ((_ = ge(_ + g - (g * y + h * S) + w)),
          (v = ge(v + h - (g * x + h * C) + b))),
        (r || s) &&
          ((E = f.getBBox()),
          (_ = ge(_ + (r / 100) * E.width)),
          (v = ge(v + (s / 100) * E.height))),
        (E =
          "matrix(" +
          y +
          "," +
          x +
          "," +
          S +
          "," +
          C +
          "," +
          _ +
          "," +
          v +
          ")"),
        f.setAttribute("transform", E),
        m && (f.style[ce] = E);
    },
    dd = function (e, t, i, r, s) {
      var a = 360,
        o = Pe(s),
        l = parseFloat(s) * (o && ~s.indexOf("rad") ? $i : 1),
        c = l - r,
        u = r + c + "deg",
        d,
        p;
      return (
        o &&
          ((d = s.split("_")[1]),
          d === "short" &&
            ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
          d === "cw" && c < 0
            ? (c = ((c + a * il) % a) - ~~(c / a) * a)
            : d === "ccw" && c > 0 && (c = ((c - a * il) % a) - ~~(c / a) * a)),
        (e._pt = p = new ut(e._pt, t, i, r, c, ju)),
        (p.e = u),
        (p.u = "deg"),
        e._props.push(i),
        p
      );
    },
    vl = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    fd = function (e, t, i) {
      var r = vl({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        a = i.style,
        o,
        l,
        c,
        u,
        d,
        p,
        f,
        g;
      r.svg
        ? ((c = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (a[ce] = t),
          (o = Zr(i, 1)),
          Hi(i, ce),
          i.setAttribute("transform", c))
        : ((c = getComputedStyle(i)[ce]),
          (a[ce] = t),
          (o = Zr(i, 1)),
          (a[ce] = c));
      for (l in oi)
        (c = r[l]),
          (u = o[l]),
          c !== u &&
            s.indexOf(l) < 0 &&
            ((f = Ve(c)),
            (g = Ve(u)),
            (d = f !== g ? Si(i, l, c, g) : parseFloat(c)),
            (p = parseFloat(u)),
            (e._pt = new ut(e._pt, o, l, d, p - d, oa)),
            (e._pt.u = g || 0),
            e._props.push(l));
      vl(o, r);
    };
  ct("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      a = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
        o
      ) {
        return e < 2 ? n + o : "border" + o + n;
      });
    Nn[e > 1 ? "border" + n : n] = function (o, l, c, u, d) {
      var p, f;
      if (arguments.length < 4)
        return (
          (p = a.map(function (g) {
            return li(o, g, c);
          })),
          (f = p.join(" ")),
          f.split(p[0]).length === 5 ? p[0] : f
        );
      (p = (u + "").split(" ")),
        (f = {}),
        a.forEach(function (g, h) {
          return (f[g] = p[h] = p[h] || p[((h - 1) / 2) | 0]);
        }),
        o.init(l, f, d);
    };
  });
  var wl = {
    name: "css",
    register: ca,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
      var a = this._props,
        o = e.style,
        l = i.vars.startAt,
        c,
        u,
        d,
        p,
        f,
        g,
        h,
        w,
        b,
        m,
        _,
        v,
        y,
        x,
        S,
        C;
      na || ca(),
        (this.styles = this.styles || al(e)),
        (C = this.styles.props),
        (this.tween = i);
      for (h in t)
        if (
          h !== "autoRound" &&
          ((u = t[h]), !(_t[h] && Wo(h, t, i, r, e, s)))
        ) {
          if (
            ((f = typeof u),
            (g = Nn[h]),
            f === "function" && ((u = u.call(i, r, e, s)), (f = typeof u)),
            f === "string" && ~u.indexOf("random(") && (u = Hr(u)),
            g)
          )
            g(this, e, h, u, i) && (S = 1);
          else if (h.substr(0, 2) === "--")
            (c = (getComputedStyle(e).getPropertyValue(h) + "").trim()),
              (u += ""),
              (wi.lastIndex = 0),
              wi.test(c) || ((w = Ve(c)), (b = Ve(u))),
              b ? w !== b && (c = Si(e, h, c, b) + b) : w && (u += w),
              this.add(o, "setProperty", c, u, r, s, 0, 0, h),
              a.push(h),
              C.push(h, 0, o[h]);
          else if (f !== "undefined") {
            if (
              (l && h in l
                ? ((c =
                    typeof l[h] == "function" ? l[h].call(i, r, e, s) : l[h]),
                  Pe(c) && ~c.indexOf("random(") && (c = Hr(c)),
                  Ve(c + "") ||
                    c === "auto" ||
                    (c += gt.units[h] || Ve(li(e, h)) || ""),
                  (c + "").charAt(1) === "=" && (c = li(e, h)))
                : (c = li(e, h)),
              (p = parseFloat(c)),
              (m = f === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              m && (u = u.substr(2)),
              (d = parseFloat(u)),
              h in Ut &&
                (h === "autoAlpha" &&
                  (p === 1 && li(e, "visibility") === "hidden" && d && (p = 0),
                  C.push("visibility", 0, o.visibility),
                  xi(
                    this,
                    o,
                    "visibility",
                    p ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                h !== "scale" &&
                  h !== "transform" &&
                  ((h = Ut[h]), ~h.indexOf(",") && (h = h.split(",")[0]))),
              (_ = h in oi),
              _)
            ) {
              if (
                (this.styles.save(h),
                v ||
                  ((y = e._gsap),
                  (y.renderTransform && !t.parseTransform) ||
                    Zr(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && y.smooth),
                  (v = this._pt =
                    new ut(this._pt, o, ce, 0, 1, y.renderTransform, y, 0, -1)),
                  (v.dep = 1)),
                h === "scale")
              )
                (this._pt = new ut(
                  this._pt,
                  y,
                  "scaleY",
                  y.scaleY,
                  (m ? hr(y.scaleY, m + d) : d) - y.scaleY || 0,
                  oa
                )),
                  (this._pt.u = 0),
                  a.push("scaleY", h),
                  (h += "X");
              else if (h === "transformOrigin") {
                C.push(ft, 0, o[ft]),
                  (u = od(u)),
                  y.svg
                    ? fa(e, u, 0, x, 0, this)
                    : ((b = parseFloat(u.split(" ")[2]) || 0),
                      b !== y.zOrigin && xi(this, y, "zOrigin", y.zOrigin, b),
                      xi(this, o, h, Yn(c), Yn(u)));
                continue;
              } else if (h === "svgOrigin") {
                fa(e, u, 1, x, 0, this);
                continue;
              } else if (h in hl) {
                dd(this, y, h, p, m ? hr(p, m + u) : u);
                continue;
              } else if (h === "smoothOrigin") {
                xi(this, y, "smooth", y.smooth, u);
                continue;
              } else if (h === "force3D") {
                y[h] = u;
                continue;
              } else if (h === "transform") {
                fd(this, u, e);
                continue;
              }
            } else h in o || (h = xr(h) || h);
            if (
              _ ||
              ((d || d === 0) && (p || p === 0) && !Xu.test(u) && h in o)
            )
              (w = (c + "").substr((p + "").length)),
                d || (d = 0),
                (b = Ve(u) || (h in gt.units ? gt.units[h] : w)),
                w !== b && (p = Si(e, h, c, b)),
                (this._pt = new ut(
                  this._pt,
                  _ ? y : o,
                  h,
                  p,
                  (m ? hr(p, m + d) : d) - p,
                  !_ && (b === "px" || h === "zIndex") && t.autoRound !== !1
                    ? Qu
                    : oa
                )),
                (this._pt.u = b || 0),
                w !== b && b !== "%" && ((this._pt.b = c), (this._pt.r = Uu));
            else if (h in o) ad.call(this, e, h, c, m ? m + u : u);
            else if (h in e) this.add(e, h, c || e[h], m ? m + u : u, r, s);
            else if (h !== "parseTransform") {
              zs(h, u);
              continue;
            }
            _ || (h in o ? C.push(h, 0, o[h]) : C.push(h, 1, c || e[h])),
              a.push(h);
          }
        }
      S && Zo(this);
    },
    render: function (e, t) {
      if (t.tween._time || !sa())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: li,
    aliases: Ut,
    getSetter: function (e, t, i) {
      var r = Ut[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in oi && t !== ft && (e._gsap.x || li(e, "x"))
          ? i && tl === i
            ? t === "scale"
              ? ed
              : Ju
            : (tl = i || {}) && (t === "scale" ? td : id)
          : e.style && !Ms(e.style[t])
          ? Zu
          : ~t.indexOf("-")
          ? Ku
          : Js(e, t)
      );
    },
    core: { _removeProperty: Hi, _getMatrix: da },
  };
  (dt.utils.checkPrefix = xr),
    (dt.core.getStyleSaver = al),
    (function (n, e, t, i) {
      var r = ct(n + "," + e + "," + t, function (s) {
        oi[s] = 1;
      });
      ct(e, function (s) {
        (gt.units[s] = "deg"), (hl[s] = 1);
      }),
        (Ut[r[13]] = n + "," + e),
        ct(i, function (s) {
          var a = s.split(":");
          Ut[a[1]] = r[a[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    ct(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        gt.units[n] = "px";
      }
    ),
    dt.registerPlugin(wl);
  var U = dt.registerPlugin(wl) || dt;
  U.core.Tween,
    (function () {
      function n() {
        for (var i = arguments.length, r = 0; r < i; r++) {
          var s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          s.nodeType === 1 || s.nodeType === 11
            ? this.appendChild(s)
            : this.appendChild(document.createTextNode(String(s)));
        }
      }
      function e() {
        for (; this.lastChild; ) this.removeChild(this.lastChild);
        arguments.length && this.append.apply(this, arguments);
      }
      function t() {
        for (
          var i = this.parentNode,
            r = arguments.length,
            s = new Array(r),
            a = 0;
          a < r;
          a++
        )
          s[a] = arguments[a];
        var o = s.length;
        if (i)
          for (o || i.removeChild(this); o--; ) {
            var l = s[o];
            typeof l != "object"
              ? (l = this.ownerDocument.createTextNode(l))
              : l.parentNode && l.parentNode.removeChild(l),
              o
                ? i.insertBefore(this.previousSibling, l)
                : i.replaceChild(l, this);
          }
      }
      typeof Element < "u" &&
        (Element.prototype.append ||
          ((Element.prototype.append = n),
          (DocumentFragment.prototype.append = n)),
        Element.prototype.replaceChildren ||
          ((Element.prototype.replaceChildren = e),
          (DocumentFragment.prototype.replaceChildren = e)),
        Element.prototype.replaceWith ||
          ((Element.prototype.replaceWith = t),
          (DocumentFragment.prototype.replaceWith = t)));
    })();
  function pd(n, e) {
    if (!(n instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function yl(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function bl(n, e, t) {
    return e && yl(n.prototype, e), t && yl(n, t), n;
  }
  function hd(n, e, t) {
    return (
      e in n
        ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (n[e] = t),
      n
    );
  }
  function xl(n, e) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(n);
      e &&
        (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })),
        t.push.apply(t, i);
    }
    return t;
  }
  function Sl(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? xl(Object(t), !0).forEach(function (i) {
            hd(n, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
        : xl(Object(t)).forEach(function (i) {
            Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return n;
  }
  function Tl(n, e) {
    return md(n) || vd(n, e) || Al(n, e) || yd();
  }
  function Qe(n) {
    return gd(n) || _d(n) || Al(n) || wd();
  }
  function gd(n) {
    if (Array.isArray(n)) return ha(n);
  }
  function md(n) {
    if (Array.isArray(n)) return n;
  }
  function _d(n) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(n))
      return Array.from(n);
  }
  function vd(n, e) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(n)))) {
      var t = [],
        i = !0,
        r = !1,
        s = void 0;
      try {
        for (
          var a = n[Symbol.iterator](), o;
          !(i = (o = a.next()).done) &&
          (t.push(o.value), !(e && t.length === e));
          i = !0
        );
      } catch (l) {
        (r = !0), (s = l);
      } finally {
        try {
          !i && a.return != null && a.return();
        } finally {
          if (r) throw s;
        }
      }
      return t;
    }
  }
  function Al(n, e) {
    if (n) {
      if (typeof n == "string") return ha(n, e);
      var t = Object.prototype.toString.call(n).slice(8, -1);
      if (
        (t === "Object" && n.constructor && (t = n.constructor.name),
        t === "Map" || t === "Set")
      )
        return Array.from(n);
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return ha(n, e);
    }
  }
  function ha(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
    return i;
  }
  function wd() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function yd() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Xi(n, e) {
    return Object.getOwnPropertyNames(Object(n)).reduce(function (t, i) {
      var r = Object.getOwnPropertyDescriptor(Object(n), i),
        s = Object.getOwnPropertyDescriptor(Object(e), i);
      return Object.defineProperty(t, i, s || r);
    }, {});
  }
  function Jr(n) {
    return typeof n == "string";
  }
  function ga(n) {
    return Array.isArray(n);
  }
  function Vn() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = Xi(n),
      t;
    return (
      e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
      t !== void 0 &&
        (e.types = (Jr(t) || ga(t) ? String(t) : "")
          .split(",")
          .map(function (i) {
            return String(i).trim();
          })
          .filter(function (i) {
            return /((line)|(word)|(char))/i.test(i);
          })),
      (e.absolute || e.position) &&
        (e.absolute = e.absolute || /absolute/.test(n.position)),
      e
    );
  }
  function ma(n) {
    var e = Jr(n) || ga(n) ? String(n) : "";
    return {
      none: !e,
      lines: /line/i.test(e),
      words: /word/i.test(e),
      chars: /char/i.test(e),
    };
  }
  function $n(n) {
    return n !== null && typeof n == "object";
  }
  function bd(n) {
    return $n(n) && /^(1|3|11)$/.test(n.nodeType);
  }
  function xd(n) {
    return typeof n == "number" && n > -1 && n % 1 === 0;
  }
  function Sd(n) {
    return $n(n) && xd(n.length);
  }
  function ji(n) {
    return ga(n)
      ? n
      : n == null
      ? []
      : Sd(n)
      ? Array.prototype.slice.call(n)
      : [n];
  }
  function El(n) {
    var e = n;
    return (
      Jr(n) &&
        (/^(#[a-z]\w+)$/.test(n.trim())
          ? (e = document.getElementById(n.trim().slice(1)))
          : (e = document.querySelectorAll(n))),
      ji(e).reduce(function (t, i) {
        return [].concat(Qe(t), Qe(ji(i).filter(bd)));
      }, [])
    );
  }
  var Td = Object.entries,
    Hn = "_splittype",
    Rt = {},
    Ad = 0;
  function Zt(n, e, t) {
    if (!$n(n)) return console.warn("[data.set] owner is not an object"), null;
    var i = n[Hn] || (n[Hn] = ++Ad),
      r = Rt[i] || (Rt[i] = {});
    return (
      t === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (Rt[i] = Sl(Sl({}, r), e))
        : e !== void 0 && (r[e] = t),
      t
    );
  }
  function Ui(n, e) {
    var t = $n(n) ? n[Hn] : null,
      i = (t && Rt[t]) || {};
    return e === void 0 ? i : i[e];
  }
  function Cl(n) {
    var e = n && n[Hn];
    e && (delete n[e], delete Rt[e]);
  }
  function Ed() {
    Object.keys(Rt).forEach(function (n) {
      delete Rt[n];
    });
  }
  function Cd() {
    Td(Rt).forEach(function (n) {
      var e = Tl(n, 2),
        t = e[0],
        i = e[1],
        r = i.isRoot,
        s = i.isSplit;
      (!r || !s) && ((Rt[t] = null), delete Rt[t]);
    });
  }
  function Pd(n) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      t = n ? String(n) : "";
    return t.trim().replace(/\s+/g, " ").split(e);
  }
  var _a = "\\ud800-\\udfff",
    Pl = "\\u0300-\\u036f\\ufe20-\\ufe23",
    Ml = "\\u20d0-\\u20f0",
    kl = "\\ufe0e\\ufe0f",
    Md = "[".concat(_a, "]"),
    va = "[".concat(Pl).concat(Ml, "]"),
    wa = "\\ud83c[\\udffb-\\udfff]",
    kd = "(?:".concat(va, "|").concat(wa, ")"),
    Ol = "[^".concat(_a, "]"),
    Ll = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Dl = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Il = "\\u200d",
    zl = "".concat(kd, "?"),
    Rl = "[".concat(kl, "]?"),
    Od = "(?:" + Il + "(?:" + [Ol, Ll, Dl].join("|") + ")" + Rl + zl + ")*",
    Ld = Rl + zl + Od,
    Dd = "(?:".concat(
      ["".concat(Ol).concat(va, "?"), va, Ll, Dl, Md].join("|"),
      `
)`
    ),
    Id = RegExp(
      "".concat(wa, "(?=").concat(wa, ")|").concat(Dd).concat(Ld),
      "g"
    ),
    zd = [Il, _a, Pl, Ml, kl],
    Rd = RegExp("[".concat(zd.join(""), "]"));
  function Bd(n) {
    return n.split("");
  }
  function Bl(n) {
    return Rd.test(n);
  }
  function Fd(n) {
    return n.match(Id) || [];
  }
  function Gd(n) {
    return Bl(n) ? Fd(n) : Bd(n);
  }
  function Nd(n) {
    return n == null ? "" : String(n);
  }
  function Yd(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (n = Nd(n)), n && Jr(n) && !e && Bl(n) ? Gd(n) : n.split(e);
  }
  function ya(n, e) {
    var t = document.createElement(n);
    return (
      e &&
        Object.keys(e).forEach(function (i) {
          var r = e[i],
            s = Jr(r) ? r.trim() : r;
          s === null ||
            s === "" ||
            (i === "children"
              ? t.append.apply(t, Qe(ji(s)))
              : t.setAttribute(i, s));
        }),
      t
    );
  }
  var ba = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function Vd(n, e) {
    e = Xi(ba, e);
    var t = ma(e.types),
      i = e.tagName,
      r = n.nodeValue,
      s = document.createDocumentFragment(),
      a = [],
      o = [];
    return (
      /^\s/.test(r) && s.append(" "),
      (a = Pd(r).reduce(function (l, c, u, d) {
        var p, f;
        return (
          t.chars &&
            (f = Yd(c).map(function (g) {
              var h = ya(i, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: g,
              });
              return Zt(h, "isChar", !0), (o = [].concat(Qe(o), [h])), h;
            })),
          t.words || t.lines
            ? ((p = ya(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  t.words && e.absolute ? "position: relative;" : ""
                ),
                children: t.chars ? f : c,
              })),
              Zt(p, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              s.appendChild(p))
            : f.forEach(function (g) {
                s.appendChild(g);
              }),
          u < d.length - 1 && s.append(" "),
          t.words ? l.concat(p) : l
        );
      }, [])),
      /\s$/.test(r) && s.append(" "),
      n.replaceWith(s),
      { words: a, chars: o }
    );
  }
  function Fl(n, e) {
    var t = n.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(t)) return i;
    if (t === 3 && /\S/.test(n.nodeValue)) return Vd(n, e);
    var r = ji(n.childNodes);
    if (r.length && (Zt(n, "isSplit", !0), !Ui(n).isRoot)) {
      (n.style.display = "inline-block"), (n.style.position = "relative");
      var s = n.nextSibling,
        a = n.previousSibling,
        o = n.textContent || "",
        l = s ? s.textContent : " ",
        c = a ? a.textContent : " ";
      Zt(n, {
        isWordEnd: /\s$/.test(o) || /^\s/.test(l),
        isWordStart: /^\s/.test(o) || /\s$/.test(c),
      });
    }
    return r.reduce(function (u, d) {
      var p = Fl(d, e),
        f = p.words,
        g = p.chars;
      return {
        words: [].concat(Qe(u.words), Qe(f)),
        chars: [].concat(Qe(u.chars), Qe(g)),
      };
    }, i);
  }
  function $d(n, e, t, i) {
    if (!t.absolute) return { top: e ? n.offsetTop : null };
    var r = n.offsetParent,
      s = Tl(i, 2),
      a = s[0],
      o = s[1],
      l = 0,
      c = 0;
    if (r && r !== document.body) {
      var u = r.getBoundingClientRect();
      (l = u.x + a), (c = u.y + o);
    }
    var d = n.getBoundingClientRect(),
      p = d.width,
      f = d.height,
      g = d.x,
      h = d.y,
      w = h + o - c,
      b = g + a - l;
    return { width: p, height: f, top: w, left: b };
  }
  function Gl(n) {
    Ui(n).isWord
      ? (Cl(n), n.replaceWith.apply(n, Qe(n.childNodes)))
      : ji(n.children).forEach(function (e) {
          return Gl(e);
        });
  }
  var Hd = function () {
    return document.createDocumentFragment();
  };
  function Wd(n, e, t) {
    var i = ma(e.types),
      r = e.tagName,
      s = n.getElementsByTagName("*"),
      a = [],
      o = [],
      l = null,
      c,
      u,
      d,
      p = [],
      f = n.parentElement,
      g = n.nextElementSibling,
      h = Hd(),
      w = window.getComputedStyle(n),
      b = w.textAlign,
      m = parseFloat(w.fontSize),
      _ = m * 0.2;
    return (
      e.absolute &&
        ((d = { left: n.offsetLeft, top: n.offsetTop, width: n.offsetWidth }),
        (u = n.offsetWidth),
        (c = n.offsetHeight),
        Zt(n, { cssWidth: n.style.width, cssHeight: n.style.height })),
      ji(s).forEach(function (v) {
        var y = v.parentElement === n,
          x = $d(v, y, e, t),
          S = x.width,
          C = x.height,
          E = x.top,
          A = x.left;
        /^br$/i.test(v.nodeName) ||
          (i.lines &&
            y &&
            ((l === null || E - l >= _) && ((l = E), a.push((o = []))),
            o.push(v)),
          e.absolute && Zt(v, { top: E, left: A, width: S, height: C }));
      }),
      f && f.removeChild(n),
      i.lines &&
        ((p = a.map(function (v) {
          var y = ya(r, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(b, "; width: 100%;"),
          });
          Zt(y, "isLine", !0);
          var x = { height: 0, top: 1e4 };
          return (
            h.appendChild(y),
            v.forEach(function (S, C, E) {
              var A = Ui(S),
                k = A.isWordEnd,
                M = A.top,
                L = A.height,
                z = E[C + 1];
              (x.height = Math.max(x.height, L)),
                (x.top = Math.min(x.top, M)),
                y.appendChild(S),
                k && Ui(z).isWordStart && y.append(" ");
            }),
            e.absolute && Zt(y, { height: x.height, top: x.top }),
            y
          );
        })),
        i.words || Gl(h),
        n.replaceChildren(h)),
      e.absolute &&
        ((n.style.width = "".concat(n.style.width || u, "px")),
        (n.style.height = "".concat(c, "px")),
        ji(s).forEach(function (v) {
          var y = Ui(v),
            x = y.isLine,
            S = y.top,
            C = y.left,
            E = y.width,
            A = y.height,
            k = Ui(v.parentElement),
            M = !x && k.isLine;
          (v.style.top = "".concat(M ? S - k.top : S, "px")),
            (v.style.left = x
              ? "".concat(d.left, "px")
              : "".concat(C - (M ? d.left : 0), "px")),
            (v.style.height = "".concat(A, "px")),
            (v.style.width = x ? "".concat(d.width, "px") : "".concat(E, "px")),
            (v.style.position = "absolute");
        })),
      f && (g ? f.insertBefore(n, g) : f.appendChild(n)),
      p
    );
  }
  var Sr = Xi(ba, {}),
    en = (function () {
      bl(n, null, [
        {
          key: "clearData",
          value: function () {
            Ed();
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            return (Sr = Xi(Sr, Vn(t))), ba;
          },
        },
        {
          key: "revert",
          value: function (t) {
            El(t).forEach(function (i) {
              var r = Ui(i),
                s = r.isSplit,
                a = r.html,
                o = r.cssWidth,
                l = r.cssHeight;
              s &&
                ((i.innerHTML = a),
                (i.style.width = o || ""),
                (i.style.height = l || ""),
                Cl(i));
            });
          },
        },
        {
          key: "create",
          value: function (t, i) {
            return new n(t, i);
          },
        },
        {
          key: "data",
          get: function () {
            return Rt;
          },
        },
        {
          key: "defaults",
          get: function () {
            return Sr;
          },
          set: function (t) {
            Sr = Xi(Sr, Vn(t));
          },
        },
      ]);
      function n(e, t) {
        pd(this, n),
          (this.isSplit = !1),
          (this.settings = Xi(Sr, Vn(t))),
          (this.elements = El(e)),
          this.split();
      }
      return (
        bl(n, [
          {
            key: "split",
            value: function (t) {
              var i = this;
              this.revert(),
                this.elements.forEach(function (a) {
                  Zt(a, "html", a.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              t !== void 0 && (this.settings = Xi(this.settings, Vn(t)));
              var s = ma(this.settings.types);
              s.none ||
                (this.elements.forEach(function (a) {
                  Zt(a, "isRoot", !0);
                  var o = Fl(a, i.settings),
                    l = o.words,
                    c = o.chars;
                  (i.words = [].concat(Qe(i.words), Qe(l))),
                    (i.chars = [].concat(Qe(i.chars), Qe(c)));
                }),
                this.elements.forEach(function (a) {
                  if (s.lines || i.settings.absolute) {
                    var o = Wd(a, i.settings, r);
                    i.lines = [].concat(Qe(i.lines), Qe(o));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                Cd());
            },
          },
          {
            key: "revert",
            value: function () {
              this.isSplit &&
                ((this.lines = null),
                (this.words = null),
                (this.chars = null),
                (this.isSplit = !1)),
                n.revert(this.elements);
            },
          },
        ]),
        n
      );
    })();
  function qd() {
    console.log("Button Animation Loaded");
    const n = {
        shimmer: { duration: 0.1, stagger: 0.03 },
        icon: { duration: 0.6, ease: "expo.out", delay: 0.1 },
      },
      e = document.querySelectorAll('[data-btn="link"]');
    return (
      e.forEach((t) => {
        const i = t.querySelector('[data-btn="text"]'),
          r = t.querySelector('[data-btn="icon-rel"]'),
          s = t.querySelector('[data-btn="icon-ab"]'),
          a = new en(i, { types: "chars" }),
          o = { isHovered: !1, isAnimating: !1, currentAnimation: null };
        U.set(r, { x: 0 }), U.set(s, { x: -100 });
        const l = U.to(a.chars, {
          opacity: 0.2,
          stagger: {
            each: n.shimmer.stagger,
            onComplete: function () {
              U.to(this.targets(), {
                opacity: 1,
                duration: n.shimmer.duration,
              });
            },
          },
          duration: n.shimmer.duration,
          paused: !0,
        });
        function c(g) {
          const h = U.timeline({
            onStart: () => {
              o.isAnimating = !0;
            },
            onComplete: () => {
              (o.isAnimating = !1), o.isHovered !== g && c(!g);
            },
          });
          return (
            h
              .to(
                r,
                {
                  x: g ? 100 : 0,
                  duration: n.icon.duration,
                  ease: n.icon.ease,
                },
                n.icon.delay
              )
              .to(
                s,
                {
                  x: g ? 0 : -100,
                  duration: n.icon.duration,
                  ease: n.icon.ease,
                },
                n.icon.delay
              ),
            h
          );
        }
        function u() {
          o.isHovered ||
            ((o.isHovered = !0),
            l.restart(),
            o.currentAnimation && o.currentAnimation.kill(),
            (o.currentAnimation = c(!0)));
        }
        function d() {
          o.isHovered &&
            ((o.isHovered = !1),
            o.currentAnimation && o.currentAnimation.kill(),
            (o.currentAnimation = c(!1)));
        }
        function p() {
          u();
        }
        function f() {
          d();
        }
        t.addEventListener("mouseenter", p),
          t.addEventListener("mouseleave", f),
          (t.cleanup = () => {
            t.removeEventListener("mouseenter", p),
              t.removeEventListener("mouseleave", f),
              o.currentAnimation && o.currentAnimation.kill(),
              l.kill();
          });
      }),
      function () {
        e.forEach((i) => {
          typeof i.cleanup == "function" && i.cleanup();
        });
      }
    );
  }
  function Xd() {
    const n = document.querySelectorAll('[data-drop-nav="main-wrap"]');
    if (!n.length) return;
    const e = new Map(),
      t = { duration: 0.6, ease: "expo.out", stagger: 0.05 };
    n.forEach((r) => {
      const s = {
        mainWrap: r,
        mainLink: r.querySelector('[data-drop-nav="main-link"]'),
        childWrap: r.querySelector('[data-drop-nav="child-wrap"]'),
        childLinks: r.querySelectorAll('[data-drop-nav="child-link"]'),
      };
      if (!s.mainLink || !s.childWrap || s.childLinks.length === 0) return;
      const a = { isOpen: !1, isAnimating: !1 };
      function o(h) {
        Object.assign(a, h), l();
      }
      function l() {
        s.mainLink &&
          (s.mainLink.setAttribute("aria-expanded", a.isOpen),
          s.childWrap.setAttribute("aria-hidden", !a.isOpen));
      }
      function c() {
        U.set(s.childWrap, {
          y: 50,
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
        }),
          U.set(s.childLinks, { y: 105, opacity: 0 }),
          console.log("About to updateUI"),
          l();
      }
      function u() {
        if (a.isAnimating || a.isOpen) return;
        o({ isAnimating: !0 }),
          U.timeline({ onComplete: () => o({ isAnimating: !1, isOpen: !0 }) })
            .set(s.childWrap, { visibility: "visible", pointerEvents: "auto" })
            .to(s.childWrap, {
              y: 0,
              opacity: 1,
              duration: t.duration,
              ease: t.ease,
            })
            .to(
              s.childLinks,
              {
                y: 0,
                opacity: 1,
                duration: t.duration,
                ease: t.ease,
                stagger: t.stagger,
              },
              "<"
            );
      }
      function d() {
        if (a.isAnimating || !a.isOpen) return;
        o({ isAnimating: !0 }),
          U.timeline({ onComplete: () => o({ isAnimating: !1, isOpen: !1 }) })
            .to(s.childLinks, {
              y: 105,
              opacity: 0,
              duration: t.duration,
              ease: t.ease,
              stagger: -t.stagger,
            })
            .to(
              s.childWrap,
              { y: 50, opacity: 0, duration: t.duration, ease: t.ease },
              "<"
            )
            .set(s.childWrap, { visibility: "hidden", pointerEvents: "none" });
      }
      e.set(r, d);
      function p() {
        a.isOpen ? d() : u();
      }
      function f(h) {
        h.preventDefault(),
          n.forEach((w) => {
            if (w !== r) {
              const b = w.querySelector('[data-drop-nav="main-link"]');
              if (
                (b == null ? void 0 : b.getAttribute("aria-expanded")) ===
                "true"
              ) {
                const v = {
                  elements: {
                    mainWrap: w,
                    mainLink: b,
                    childWrap: w.querySelector('[data-drop-nav="child-wrap"]'),
                    childLinks: w.querySelectorAll(
                      '[data-drop-nav="child-link"]'
                    ),
                  },
                  state: { isOpen: !0, isAnimating: !1 },
                };
                d.call(v);
              }
            }
          }),
          p();
      }
      function g() {
        a.isOpen && d();
      }
      c(),
        s.mainLink.addEventListener("click", f),
        s.mainWrap.addEventListener("mouseleave", g);
    }),
      document.addEventListener("click", (r) => {
        n.forEach((s) => {
          var a;
          if (
            !s.contains(r.target) &&
            ((a = s.querySelector('[data-drop-nav="main-link"]')) == null
              ? void 0
              : a.getAttribute("aria-expanded")) === "true"
          ) {
            const l = e.get(s);
            l && l();
          }
        });
      });
    const i = document.querySelectorAll('[data-nav="link"]');
    return (
      i.forEach((r) => {
        const s = r.querySelector('[data-nav="text"]'),
          a = r.querySelector('[data-nav="line"]'),
          o = new en(s, { types: "chars" });
        U.set(a, { width: "0%" });
        function l() {
          U.to(o.chars, {
            opacity: 0.2,
            stagger: {
              each: 0.03,
              onComplete: function () {
                U.to(this.targets(), { opacity: 1, duration: 0.1 });
              },
            },
            duration: 0.1,
          });
        }
        const c = U.timeline({ paused: !0 });
        c.to(a, { width: "100%", duration: 0.3, ease: "expo.out" }),
          r.addEventListener("mouseenter", () => {
            l(), c.play();
          }),
          r.addEventListener("mouseleave", () => {
            c.reverse();
          });
      }),
      function () {
        n.forEach((s) => {
          const a = {
            mainWrap: s,
            mainLink: s.querySelector('[data-drop-nav="main-link"]'),
            childWrap: s.querySelector('[data-drop-nav="child-wrap"]'),
            childLinks: s.querySelectorAll('[data-drop-nav="child-link"]'),
          };
          a.mainLink.removeEventListener("click", handleMainLinkClick),
            a.mainWrap.removeEventListener("mouseleave", handleMainWrapLeave),
            document.removeEventListener("click", handleDocumentClick),
            a.childLinks.forEach((o) => {
              o.removeEventListener("mouseenter", null),
                o.removeEventListener("mouseleave", null);
            }),
            e.delete(s);
        }),
          i.forEach((s) => {
            s.removeEventListener("mouseenter", null),
              s.removeEventListener("mouseleave", null);
          });
      }
    );
  }
  class jd {
    constructor({ element: e, config: t }) {
      (this.element = e),
        (this.config = {
          root: null,
          margin: (t == null ? void 0 : t.margin) || "10px",
          threshold: (t == null ? void 0 : t.threshold) || 0,
          once: t.once,
        }),
        this.init(),
        this.start();
    }
    init() {
      (this.in = new IntersectionObserver(
        (e) => {
          e.forEach((t) => {
            t.isIntersecting && this.isIn();
          });
        },
        { rootMargin: this.config.margin, threshold: this.config.threshold }
      )),
        (this.out = new IntersectionObserver(
          (e) => {
            e.forEach((t) => {
              t.isIntersecting || this.isOut();
            });
          },
          { rootMargin: "0px", threshold: 0 }
        ));
    }
    start() {
      this.in.observe(this.element), this.out.observe(this.element);
    }
    stop() {
      this.in.unobserve(this.element), this.out.unobserve(this.element);
    }
    isIn() {
      this.animateIn(), this.config.once && this.stop();
    }
    isOut() {
      this.animateOut();
    }
  }
  class Ud extends jd {
    constructor(e) {
      const t = {
        margin: e.dataset.obsM || "10px",
        threshold: +e.dataset.obsT || 0,
        once: e.dataset.obsOnce === "true",
        aSplit: e.dataset.aSplit || "word",
        aDuration: e.dataset.aDuration ?? 1.9,
        aEach: e.dataset.aEach ?? 0.05,
        aDelay: e.dataset.aDelay ?? 0,
        aEase: e.dataset.aEase ?? "expo.out",
        aFrom: e.dataset.aFrom ?? "start",
      };
      super({ element: e, config: t }),
        (this.config = t),
        (this.item = e),
        (this.animated = Zd(e)),
        (this.a = { y: "120%", x: "0%" }),
        U.set(this.animated, { y: this.a.y });
    }
    animateIn() {
      var e;
      (e = this.animation) == null || e.kill(),
        (this.animation = U.to(this.animated, {
          y: "0%",
          delay: this.config.aDelay,
          duration: this.config.aDuration,
          stagger: { each: this.config.aEach, from: this.config.aFrom },
          ease: this.config.aEase,
        }));
    }
    animateOut() {
      var e;
      (e = this.animation) == null || e.kill(),
        (this.animation = U.set(this.animated, { y: this.a.y }));
    }
  }
  class Qd {
    constructor(e) {
      (this.selector = e),
        (this.reference = [...document.querySelectorAll(`[${e}]`)]),
        this.reference && (this.injectCss(), this.init());
    }
    init() {
      this.animations = this.reference.map((e) => new Ud(e));
    }
    injectCss() {
      const e = document.createElement("style"),
        t = `[${this.selector}] > div { overflow: hidden; }`;
      (e.textContent = t), document.head.append(e);
    }
  }
  function Zd(n) {
    switch (n.dataset.aSplit) {
      case "char":
        return Kd(tn(n));
      case "word":
        return tn(tn(n));
      case "line":
        return Nl(Nl(n));
      default:
        return tn(tn(n));
    }
  }
  function Kd(n) {
    return new en(n, { types: "chars" }).chars;
  }
  function tn(n) {
    return new en(n, { types: "words" }).words;
  }
  function Nl(n) {
    return new en(n, { types: "lines" }).lines;
  }
  function Yl(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function Jd(n, e, t) {
    return e && Yl(n.prototype, e), t && Yl(n, t), n;
  }
  /*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ze,
    Wn,
    yt,
    Ti,
    Ai,
    Tr,
    Vl,
    Qi,
    rn,
    $l,
    ci,
    Bt,
    Hl,
    Wl = function () {
      return (
        ze ||
        (typeof window < "u" && (ze = window.gsap) && ze.registerPlugin && ze)
      );
    },
    ql = 1,
    Ar = [],
    q = [],
    Kt = [],
    nn = Date.now,
    xa = function (e, t) {
      return t;
    },
    ef = function () {
      var e = rn.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, q),
        r.push.apply(r, Kt),
        (q = i),
        (Kt = r),
        (xa = function (a, o) {
          return t[a](o);
        });
    },
    Ei = function (e, t) {
      return ~Kt.indexOf(e) && Kt[Kt.indexOf(e) + 1][t];
    },
    sn = function (e) {
      return !!~$l.indexOf(e);
    },
    Ze = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
    },
    Ke = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    qn = "scrollLeft",
    Xn = "scrollTop",
    Sa = function () {
      return (ci && ci.isPressed) || q.cache++;
    },
    jn = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          ql && (yt.history.scrollRestoration = "manual");
          var a = ci && ci.isPressed;
          (s = r.v = Math.round(s) || (ci && ci.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = q.cache),
            a && xa("ss", s);
        } else
          (t || q.cache !== r.cacheID || xa("ref")) &&
            ((r.cacheID = q.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    Je = {
      s: qn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: jn(function (n) {
        return arguments.length
          ? yt.scrollTo(n, Ae.sc())
          : yt.pageXOffset || Ti[qn] || Ai[qn] || Tr[qn] || 0;
      }),
    },
    Ae = {
      s: Xn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Je,
      sc: jn(function (n) {
        return arguments.length
          ? yt.scrollTo(Je.sc(), n)
          : yt.pageYOffset || Ti[Xn] || Ai[Xn] || Tr[Xn] || 0;
      }),
    },
    pt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || ze.utils.toArray)(e)[0] ||
        (typeof e == "string" && ze.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Ci = function (e, t) {
      var i = t.s,
        r = t.sc;
      sn(e) && (e = Ti.scrollingElement || Ai);
      var s = q.indexOf(e),
        a = r === Ae.sc ? 1 : 2;
      !~s && (s = q.push(e) - 1), q[s + a] || Ze(e, "scroll", Sa);
      var o = q[s + a],
        l =
          o ||
          (q[s + a] =
            jn(Ei(e, i), !0) ||
            (sn(e)
              ? r
              : jn(function (c) {
                  return arguments.length ? (e[i] = c) : e[i];
                })));
      return (
        (l.target = e),
        o || (l.smooth = ze.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    Ta = function (e, t, i) {
      var r = e,
        s = e,
        a = nn(),
        o = a,
        l = t || 50,
        c = Math.max(500, l * 3),
        u = function (g, h) {
          var w = nn();
          h || w - a > l
            ? ((s = r), (r = g), (o = a), (a = w))
            : i
            ? (r += g)
            : (r = s + ((g - s) / (w - o)) * (a - o));
        },
        d = function () {
          (s = r = i ? 0 : r), (o = a = 0);
        },
        p = function (g) {
          var h = o,
            w = s,
            b = nn();
          return (
            (g || g === 0) && g !== r && u(g),
            a === o || b - o > c
              ? 0
              : ((r + (i ? w : -w)) / ((i ? b : a) - h)) * 1e3
          );
        };
      return { update: u, reset: d, getVelocity: p };
    },
    an = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    Xl = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    jl = function () {
      (rn = ze.core.globals().ScrollTrigger), rn && rn.core && ef();
    },
    Ul = function (e) {
      return (
        (ze = e || Wl()),
        !Wn &&
          ze &&
          typeof document < "u" &&
          document.body &&
          ((yt = window),
          (Ti = document),
          (Ai = Ti.documentElement),
          (Tr = Ti.body),
          ($l = [yt, Ti, Ai, Tr]),
          ze.utils.clamp,
          (Hl = ze.core.context || function () {}),
          (Qi = "onpointerenter" in Tr ? "pointer" : "mouse"),
          (Vl = me.isTouch =
            yt.matchMedia &&
            yt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in yt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Bt = me.eventTypes =
            (
              "ontouchstart" in Ai
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ai
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (ql = 0);
          }, 500),
          jl(),
          (Wn = 1)),
        Wn
      );
    };
  (Je.op = Ae), (q.cache = 0);
  var me = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (i) {
        Wn || Ul(ze) || console.warn("Please gsap.registerPlugin(Observer)"),
          rn || jl();
        var r = i.tolerance,
          s = i.dragMinimum,
          a = i.type,
          o = i.target,
          l = i.lineHeight,
          c = i.debounce,
          u = i.preventDefault,
          d = i.onStop,
          p = i.onStopDelay,
          f = i.ignore,
          g = i.wheelSpeed,
          h = i.event,
          w = i.onDragStart,
          b = i.onDragEnd,
          m = i.onDrag,
          _ = i.onPress,
          v = i.onRelease,
          y = i.onRight,
          x = i.onLeft,
          S = i.onUp,
          C = i.onDown,
          E = i.onChangeX,
          A = i.onChangeY,
          k = i.onChange,
          M = i.onToggleX,
          L = i.onToggleY,
          z = i.onHover,
          B = i.onHoverEnd,
          O = i.onMove,
          R = i.ignoreCheck,
          N = i.isNormalizer,
          Z = i.onGestureStart,
          T = i.onGestureEnd,
          ie = i.onWheel,
          Re = i.onEnable,
          Gt = i.onDisable,
          pe = i.onClick,
          Be = i.scrollSpeed,
          st = i.capture,
          xe = i.allowClicks,
          at = i.lockAxis,
          We = i.onLockAxis;
        (this.target = o = pt(o) || Ai),
          (this.vars = i),
          f && (f = ze.utils.toArray(f)),
          (r = r || 1e-9),
          (s = s || 0),
          (g = g || 1),
          (Be = Be || 1),
          (a = a || "wheel,touch,pointer"),
          (c = c !== !1),
          l || (l = parseFloat(yt.getComputedStyle(Tr).lineHeight) || 22);
        var ki,
          ot,
          Nt,
          J,
          _e,
          ht,
          At,
          P = this,
          Et = 0,
          pi = 0,
          Oi = i.passive || !u,
          Se = Ci(o, Je),
          Li = Ci(o, Ae),
          or = Se(),
          Ir = Li(),
          De =
            ~a.indexOf("touch") &&
            !~a.indexOf("pointer") &&
            Bt[0] === "pointerdown",
          Di = sn(o),
          ve = o.ownerDocument || Ti,
          Yt = [0, 0, 0],
          zt = [0, 0, 0],
          hi = 0,
          Sn = function () {
            return (hi = nn());
          },
          Te = function (G, ee) {
            return (
              ((P.event = G) && f && ~f.indexOf(G.target)) ||
              (ee && De && G.pointerType !== "touch") ||
              (R && R(G, ee))
            );
          },
          Ts = function () {
            P._vx.reset(), P._vy.reset(), ot.pause(), d && d(P);
          },
          Ii = function () {
            var G = (P.deltaX = Xl(Yt)),
              ee = (P.deltaY = Xl(zt)),
              D = Math.abs(G) >= r,
              $ = Math.abs(ee) >= r;
            k && (D || $) && k(P, G, ee, Yt, zt),
              D &&
                (y && P.deltaX > 0 && y(P),
                x && P.deltaX < 0 && x(P),
                E && E(P),
                M && P.deltaX < 0 != Et < 0 && M(P),
                (Et = P.deltaX),
                (Yt[0] = Yt[1] = Yt[2] = 0)),
              $ &&
                (C && P.deltaY > 0 && C(P),
                S && P.deltaY < 0 && S(P),
                A && A(P),
                L && P.deltaY < 0 != pi < 0 && L(P),
                (pi = P.deltaY),
                (zt[0] = zt[1] = zt[2] = 0)),
              (J || Nt) && (O && O(P), Nt && (m(P), (Nt = !1)), (J = !1)),
              ht && !(ht = !1) && We && We(P),
              _e && (ie(P), (_e = !1)),
              (ki = 0);
          },
          zr = function (G, ee, D) {
            (Yt[D] += G),
              (zt[D] += ee),
              P._vx.update(G),
              P._vy.update(ee),
              c ? ki || (ki = requestAnimationFrame(Ii)) : Ii();
          },
          Rr = function (G, ee) {
            at &&
              !At &&
              ((P.axis = At = Math.abs(G) > Math.abs(ee) ? "x" : "y"),
              (ht = !0)),
              At !== "y" && ((Yt[2] += G), P._vx.update(G, !0)),
              At !== "x" && ((zt[2] += ee), P._vy.update(ee, !0)),
              c ? ki || (ki = requestAnimationFrame(Ii)) : Ii();
          },
          zi = function (G) {
            if (!Te(G, 1)) {
              G = an(G, u);
              var ee = G.clientX,
                D = G.clientY,
                $ = ee - P.x,
                F = D - P.y,
                Y = P.isDragging;
              (P.x = ee),
                (P.y = D),
                (Y ||
                  Math.abs(P.startX - ee) >= s ||
                  Math.abs(P.startY - D) >= s) &&
                  (m && (Nt = !0),
                  Y || (P.isDragging = !0),
                  Rr($, F),
                  Y || (w && w(P)));
            }
          },
          lr = (P.onPress = function (V) {
            Te(V, 1) ||
              (V && V.button) ||
              ((P.axis = At = null),
              ot.pause(),
              (P.isPressed = !0),
              (V = an(V)),
              (Et = pi = 0),
              (P.startX = P.x = V.clientX),
              (P.startY = P.y = V.clientY),
              P._vx.reset(),
              P._vy.reset(),
              Ze(N ? o : ve, Bt[1], zi, Oi, !0),
              (P.deltaX = P.deltaY = 0),
              _ && _(P));
          }),
          X = (P.onRelease = function (V) {
            if (!Te(V, 1)) {
              Ke(N ? o : ve, Bt[1], zi, !0);
              var G = !isNaN(P.y - P.startY),
                ee = P.isDragging,
                D =
                  ee &&
                  (Math.abs(P.x - P.startX) > 3 ||
                    Math.abs(P.y - P.startY) > 3),
                $ = an(V);
              !D &&
                G &&
                (P._vx.reset(),
                P._vy.reset(),
                u &&
                  xe &&
                  ze.delayedCall(0.08, function () {
                    if (nn() - hi > 300 && !V.defaultPrevented) {
                      if (V.target.click) V.target.click();
                      else if (ve.createEvent) {
                        var F = ve.createEvent("MouseEvents");
                        F.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          yt,
                          1,
                          $.screenX,
                          $.screenY,
                          $.clientX,
                          $.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          V.target.dispatchEvent(F);
                      }
                    }
                  })),
                (P.isDragging = P.isGesturing = P.isPressed = !1),
                d && ee && !N && ot.restart(!0),
                b && ee && b(P),
                v && v(P, D);
            }
          }),
          cr = function (G) {
            return (
              G.touches &&
              G.touches.length > 1 &&
              (P.isGesturing = !0) &&
              Z(G, P.isDragging)
            );
          },
          Vt = function () {
            return (P.isGesturing = !1) || T(P);
          },
          $t = function (G) {
            if (!Te(G)) {
              var ee = Se(),
                D = Li();
              zr((ee - or) * Be, (D - Ir) * Be, 1),
                (or = ee),
                (Ir = D),
                d && ot.restart(!0);
            }
          },
          Ht = function (G) {
            if (!Te(G)) {
              (G = an(G, u)), ie && (_e = !0);
              var ee =
                (G.deltaMode === 1
                  ? l
                  : G.deltaMode === 2
                  ? yt.innerHeight
                  : 1) * g;
              zr(G.deltaX * ee, G.deltaY * ee, 0), d && !N && ot.restart(!0);
            }
          },
          ur = function (G) {
            if (!Te(G)) {
              var ee = G.clientX,
                D = G.clientY,
                $ = ee - P.x,
                F = D - P.y;
              (P.x = ee),
                (P.y = D),
                (J = !0),
                d && ot.restart(!0),
                ($ || F) && Rr($, F);
            }
          },
          Br = function (G) {
            (P.event = G), z(P);
          },
          gi = function (G) {
            (P.event = G), B(P);
          },
          Tn = function (G) {
            return Te(G) || (an(G, u) && pe(P));
          };
        (ot = P._dc = ze.delayedCall(p || 0.25, Ts).pause()),
          (P.deltaX = P.deltaY = 0),
          (P._vx = Ta(0, 50, !0)),
          (P._vy = Ta(0, 50, !0)),
          (P.scrollX = Se),
          (P.scrollY = Li),
          (P.isDragging = P.isGesturing = P.isPressed = !1),
          Hl(this),
          (P.enable = function (V) {
            return (
              P.isEnabled ||
                (Ze(Di ? ve : o, "scroll", Sa),
                a.indexOf("scroll") >= 0 &&
                  Ze(Di ? ve : o, "scroll", $t, Oi, st),
                a.indexOf("wheel") >= 0 && Ze(o, "wheel", Ht, Oi, st),
                ((a.indexOf("touch") >= 0 && Vl) ||
                  a.indexOf("pointer") >= 0) &&
                  (Ze(o, Bt[0], lr, Oi, st),
                  Ze(ve, Bt[2], X),
                  Ze(ve, Bt[3], X),
                  xe && Ze(o, "click", Sn, !0, !0),
                  pe && Ze(o, "click", Tn),
                  Z && Ze(ve, "gesturestart", cr),
                  T && Ze(ve, "gestureend", Vt),
                  z && Ze(o, Qi + "enter", Br),
                  B && Ze(o, Qi + "leave", gi),
                  O && Ze(o, Qi + "move", ur)),
                (P.isEnabled = !0),
                V && V.type && lr(V),
                Re && Re(P)),
              P
            );
          }),
          (P.disable = function () {
            P.isEnabled &&
              (Ar.filter(function (V) {
                return V !== P && sn(V.target);
              }).length || Ke(Di ? ve : o, "scroll", Sa),
              P.isPressed &&
                (P._vx.reset(), P._vy.reset(), Ke(N ? o : ve, Bt[1], zi, !0)),
              Ke(Di ? ve : o, "scroll", $t, st),
              Ke(o, "wheel", Ht, st),
              Ke(o, Bt[0], lr, st),
              Ke(ve, Bt[2], X),
              Ke(ve, Bt[3], X),
              Ke(o, "click", Sn, !0),
              Ke(o, "click", Tn),
              Ke(ve, "gesturestart", cr),
              Ke(ve, "gestureend", Vt),
              Ke(o, Qi + "enter", Br),
              Ke(o, Qi + "leave", gi),
              Ke(o, Qi + "move", ur),
              (P.isEnabled = P.isPressed = P.isDragging = !1),
              Gt && Gt(P));
          }),
          (P.kill = P.revert =
            function () {
              P.disable();
              var V = Ar.indexOf(P);
              V >= 0 && Ar.splice(V, 1), ci === P && (ci = 0);
            }),
          Ar.push(P),
          N && sn(o) && (ci = P),
          P.enable(h);
      }),
      Jd(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  (me.version = "3.12.5"),
    (me.create = function (n) {
      return new me(n);
    }),
    (me.register = Ul),
    (me.getAll = function () {
      return Ar.slice();
    }),
    (me.getById = function (n) {
      return Ar.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    Wl() && ze.registerPlugin(me);
  /*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var I,
    Er,
    Q,
    ue,
    Ft,
    se,
    Ql,
    Un,
    on,
    ln,
    cn,
    Qn,
    $e,
    Zn,
    Aa,
    et,
    Zl,
    Kl,
    Cr,
    Jl,
    Ea,
    ec,
    tt,
    Ca,
    tc,
    ic,
    Pi,
    Pa,
    Ma,
    Pr,
    ka,
    Kn,
    Oa,
    La,
    Jn = 1,
    He = Date.now,
    Da = He(),
    Lt = 0,
    un = 0,
    rc = function (e, t, i) {
      var r = bt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    nc = function (e, t) {
      return t && (!bt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    tf = function n() {
      return un && requestAnimationFrame(n);
    },
    sc = function () {
      return (Zn = 1);
    },
    ac = function () {
      return (Zn = 0);
    },
    Jt = function (e) {
      return e;
    },
    dn = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    oc = function () {
      return typeof window < "u";
    },
    lc = function () {
      return I || (oc() && (I = window.gsap) && I.registerPlugin && I);
    },
    Zi = function (e) {
      return !!~Ql.indexOf(e);
    },
    cc = function (e) {
      return (
        (e === "Height" ? ka : Q["inner" + e]) ||
        Ft["client" + e] ||
        se["client" + e]
      );
    },
    uc = function (e) {
      return (
        Ei(e, "getBoundingClientRect") ||
        (Zi(e)
          ? function () {
              return (fs.width = Q.innerWidth), (fs.height = ka), fs;
            }
          : function () {
              return ui(e);
            })
      );
    },
    rf = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        a = i.a;
      return (a = Ei(e, "getBoundingClientRect"))
        ? function () {
            return a()[r];
          }
        : function () {
            return (t ? cc(s) : e["client" + s]) || 0;
          };
    },
    nf = function (e, t) {
      return !t || ~Kt.indexOf(e)
        ? uc(e)
        : function () {
            return fs;
          };
    },
    ei = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        a = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (a = Ei(e, i))
          ? a() - uc(e)()[s]
          : Zi(e)
          ? (Ft[i] || se[i]) - cc(r)
          : e[i] - e["offset" + r]
      );
    },
    es = function (e, t) {
      for (var i = 0; i < Cr.length; i += 3)
        (!t || ~t.indexOf(Cr[i + 1])) && e(Cr[i], Cr[i + 1], Cr[i + 2]);
    },
    bt = function (e) {
      return typeof e == "string";
    },
    it = function (e) {
      return typeof e == "function";
    },
    fn = function (e) {
      return typeof e == "number";
    },
    Ki = function (e) {
      return typeof e == "object";
    },
    pn = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    Ia = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    Mr = Math.abs,
    dc = "left",
    fc = "top",
    za = "right",
    Ra = "bottom",
    Ji = "width",
    er = "height",
    hn = "Right",
    gn = "Left",
    mn = "Top",
    _n = "Bottom",
    be = "padding",
    Dt = "margin",
    kr = "Width",
    Ba = "Height",
    Ee = "px",
    It = function (e) {
      return Q.getComputedStyle(e);
    },
    sf = function (e) {
      var t = It(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    pc = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    ui = function (e, t) {
      var i =
          t &&
          It(e)[Aa] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          I.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    ts = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    hc = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t;
    },
    af = function (e) {
      return function (t) {
        return I.utils.snap(hc(e), t);
      };
    },
    Fa = function (e) {
      var t = I.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o;
            if (!s) return t(r);
            if (s > 0) {
              for (r -= a, o = 0; o < i.length; o++) if (i[o] >= r) return i[o];
              return i[o - 1];
            } else for (o = i.length, r += a; o--; ) if (i[o] <= r) return i[o];
            return i[0];
          }
        : function (r, s, a) {
            a === void 0 && (a = 0.001);
            var o = t(r);
            return !s || Math.abs(o - r) < a || o - r < 0 == s < 0
              ? o
              : t(s < 0 ? r - e : r + e);
          };
    },
    of = function (e) {
      return function (t, i) {
        return Fa(hc(e))(t, i.direction);
      };
    },
    is = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r);
      });
    },
    ke = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    Oe = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    rs = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    gc = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    ns = { toggleActions: "play", anticipatePin: 0 },
    ss = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    as = function (e, t) {
      if (bt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in ss
              ? ss[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    os = function (e, t, i, r, s, a, o, l) {
      var c = s.startColor,
        u = s.endColor,
        d = s.fontSize,
        p = s.indent,
        f = s.fontWeight,
        g = ue.createElement("div"),
        h = Zi(i) || Ei(i, "pinType") === "fixed",
        w = e.indexOf("scroller") !== -1,
        b = h ? se : i,
        m = e.indexOf("start") !== -1,
        _ = m ? c : u,
        v =
          "border-color:" +
          _ +
          ";font-size:" +
          d +
          ";color:" +
          _ +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + ((w || l) && h ? "fixed;" : "absolute;")),
        (w || l || !h) &&
          (v += (r === Ae ? za : Ra) + ":" + (a + parseFloat(p)) + "px;"),
        o &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (g._isStart = m),
        g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (g.style.cssText = v),
        (g.innerText = t || t === 0 ? e + "-" + t : e),
        b.children[0] ? b.insertBefore(g, b.children[0]) : b.appendChild(g),
        (g._offset = g["offset" + r.op.d2]),
        ls(g, 0, r, m),
        g
      );
    },
    ls = function (e, t, i, r) {
      var s = { display: "block" },
        a = i[r ? "os2" : "p2"],
        o = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + a + kr] = 1),
        (s["border" + o + kr] = 0),
        (s[i.p] = t + "px"),
        I.set(e, s);
    },
    W = [],
    Ga = {},
    vn,
    mc = function () {
      return He() - Lt > 34 && (vn || (vn = requestAnimationFrame(di)));
    },
    Or = function () {
      (!tt || !tt.isPressed || tt.startX > se.clientWidth) &&
        (q.cache++,
        tt ? vn || (vn = requestAnimationFrame(di)) : di(),
        Lt || ir("scrollStart"),
        (Lt = He()));
    },
    Na = function () {
      (ic = Q.innerWidth), (tc = Q.innerHeight);
    },
    wn = function () {
      q.cache++,
        !$e &&
          !ec &&
          !ue.fullscreenElement &&
          !ue.webkitFullscreenElement &&
          (!Ca ||
            ic !== Q.innerWidth ||
            Math.abs(Q.innerHeight - tc) > Q.innerHeight * 0.25) &&
          Un.restart(!0);
    },
    tr = {},
    lf = [],
    _c = function n() {
      return Oe(H, "scrollEnd", n) || nr(!0);
    },
    ir = function (e) {
      return (
        (tr[e] &&
          tr[e].map(function (t) {
            return t();
          })) ||
        lf
      );
    },
    xt = [],
    vc = function (e) {
      for (var t = 0; t < xt.length; t += 5)
        (!e || (xt[t + 4] && xt[t + 4].query === e)) &&
          ((xt[t].style.cssText = xt[t + 1]),
          xt[t].getBBox && xt[t].setAttribute("transform", xt[t + 2] || ""),
          (xt[t + 3].uncache = 1));
    },
    Ya = function (e, t) {
      var i;
      for (et = 0; et < W.length; et++)
        (i = W[et]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Kn = !0), t && vc(t), t || ir("revert");
    },
    wc = function (e, t) {
      q.cache++,
        (t || !rt) &&
          q.forEach(function (i) {
            return it(i) && i.cacheID++ && (i.rec = 0);
          }),
        bt(e) && (Q.history.scrollRestoration = Ma = e);
    },
    rt,
    rr = 0,
    yc,
    cf = function () {
      if (yc !== rr) {
        var e = (yc = rr);
        requestAnimationFrame(function () {
          return e === rr && nr(!0);
        });
      }
    },
    bc = function () {
      se.appendChild(Pr),
        (ka = (!tt && Pr.offsetHeight) || Q.innerHeight),
        se.removeChild(Pr);
    },
    xc = function (e) {
      return on(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    nr = function (e, t) {
      if (Lt && !e && !Kn) {
        ke(H, "scrollEnd", _c);
        return;
      }
      bc(),
        (rt = H.isRefreshing = !0),
        q.forEach(function (r) {
          return it(r) && ++r.cacheID && (r.rec = r());
        });
      var i = ir("refreshInit");
      Jl && H.sort(),
        t || Ya(),
        q.forEach(function (r) {
          it(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        W.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Kn = !1),
        W.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - a), r.refresh();
          }
        }),
        (Oa = 1),
        xc(!0),
        W.forEach(function (r) {
          var s = ei(r.scroller, r._dir),
            a = r.vars.end === "max" || (r._endClamp && r.end > s),
            o = r._startClamp && r.start >= s;
          (a || o) &&
            r.setPositions(
              o ? s - 1 : r.start,
              a ? Math.max(o ? s : r.start + 1, s) : r.end,
              !0
            );
        }),
        xc(!1),
        (Oa = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        q.forEach(function (r) {
          it(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        wc(Ma, 1),
        Un.pause(),
        rr++,
        (rt = 2),
        di(2),
        W.forEach(function (r) {
          return it(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (rt = H.isRefreshing = !1),
        ir("refresh");
    },
    Va = 0,
    cs = 1,
    yn,
    di = function (e) {
      if (e === 2 || (!rt && !Kn)) {
        (H.isUpdating = !0), yn && yn.update(0);
        var t = W.length,
          i = He(),
          r = i - Da >= 50,
          s = t && W[0].scroll();
        if (
          ((cs = Va > s ? -1 : 1),
          rt || (Va = s),
          r &&
            (Lt && !Zn && i - Lt > 200 && ((Lt = 0), ir("scrollEnd")),
            (cn = Da),
            (Da = i)),
          cs < 0)
        ) {
          for (et = t; et-- > 0; ) W[et] && W[et].update(0, r);
          cs = 1;
        } else for (et = 0; et < t; et++) W[et] && W[et].update(0, r);
        H.isUpdating = !1;
      }
      vn = 0;
    },
    $a = [
      dc,
      fc,
      Ra,
      za,
      Dt + _n,
      Dt + hn,
      Dt + mn,
      Dt + gn,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    us = $a.concat([
      Ji,
      er,
      "boxSizing",
      "max" + kr,
      "max" + Ba,
      "position",
      Dt,
      be,
      be + mn,
      be + hn,
      be + _n,
      be + gn,
    ]),
    uf = function (e, t, i) {
      Lr(i);
      var r = e._gsap;
      if (r.spacerIsNative) Lr(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Ha = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = $a.length, a = t.style, o = e.style, l; s--; )
          (l = $a[s]), (a[l] = i[l]);
        (a.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (a.display = "inline-block"),
          (o[Ra] = o[za] = "auto"),
          (a.flexBasis = i.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[Ji] = ts(e, Je) + Ee),
          (a[er] = ts(e, Ae) + Ee),
          (a[be] = o[Dt] = o[fc] = o[dc] = "0"),
          Lr(r),
          (o[Ji] = o["max" + kr] = i[Ji]),
          (o[er] = o["max" + Ba] = i[er]),
          (o[be] = i[be]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    df = /([A-Z])/g,
    Lr = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s,
          a;
        for ((e.t._gsap || I.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (a = e[r + 1]),
            (s = e[r]),
            a
              ? (t[s] = a)
              : t[s] && t.removeProperty(s.replace(df, "-$1").toLowerCase());
      }
    },
    ds = function (e) {
      for (var t = us.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(us[s], i[us[s]]);
      return (r.t = e), r;
    },
    ff = function (e, t, i) {
      for (var r = [], s = e.length, a = i ? 8 : 0, o; a < s; a += 2)
        (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
      return (r.t = e.t), r;
    },
    fs = { left: 0, top: 0 },
    Sc = function (e, t, i, r, s, a, o, l, c, u, d, p, f, g) {
      it(e) && (e = e(l)),
        bt(e) &&
          e.substr(0, 3) === "max" &&
          (e = p + (e.charAt(4) === "=" ? as("0" + e.substr(3), i) : 0));
      var h = f ? f.time() : 0,
        w,
        b,
        m;
      if ((f && f.seek(0), isNaN(e) || (e = +e), fn(e)))
        f &&
          (e = I.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            p,
            e
          )),
          o && ls(o, i, r, !0);
      else {
        it(t) && (t = t(l));
        var _ = (e || "0").split(" "),
          v,
          y,
          x,
          S;
        (m = pt(t, l) || se),
          (v = ui(m) || {}),
          (!v || (!v.left && !v.top)) &&
            It(m).display === "none" &&
            ((S = m.style.display),
            (m.style.display = "block"),
            (v = ui(m)),
            S ? (m.style.display = S) : m.style.removeProperty("display")),
          (y = as(_[0], v[r.d])),
          (x = as(_[1] || "0", i)),
          (e = v[r.p] - c[r.p] - u + y + s - x),
          o && ls(o, x, r, i - x < 20 || (o._isStart && x > 20)),
          (i -= i - x);
      }
      if ((g && ((l[g] = e || -0.001), e < 0 && (e = 0)), a)) {
        var C = e + i,
          E = a._isStart;
        (w = "scroll" + r.d2),
          ls(
            a,
            C,
            r,
            (E && C > 20) ||
              (!E && (d ? Math.max(se[w], Ft[w]) : a.parentNode[w]) <= C + 1)
          ),
          d &&
            ((c = ui(o)),
            d && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Ee));
      }
      return (
        f &&
          m &&
          ((w = ui(m)),
          f.seek(p),
          (b = ui(m)),
          (f._caScrollDist = w[r.p] - b[r.p]),
          (e = (e / f._caScrollDist) * p)),
        f && f.seek(h),
        f ? e : Math.round(e)
      );
    },
    pf = /(webkit|moz|length|cssText|inset)/i,
    Tc = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          a,
          o;
        if (t === se) {
          (e._stOrig = s.cssText), (o = It(e));
          for (a in o)
            !+a &&
              !pf.test(a) &&
              o[a] &&
              typeof s[a] == "string" &&
              a !== "0" &&
              (s[a] = o[a]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (I.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    Ac = function (e, t, i) {
      var r = t,
        s = r;
      return function (a) {
        var o = Math.round(e());
        return (
          o !== r &&
            o !== s &&
            Math.abs(o - r) > 3 &&
            Math.abs(o - s) > 3 &&
            ((a = o), i && i()),
          (s = r),
          (r = a),
          a
        );
      };
    },
    ps = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), I.set(e, r);
    },
    Ec = function (e, t) {
      var i = Ci(e, t),
        r = "_scroll" + t.p2,
        s = function a(o, l, c, u, d) {
          var p = a.tween,
            f = l.onComplete,
            g = {};
          c = c || i();
          var h = Ac(i, c, function () {
            p.kill(), (a.tween = 0);
          });
          return (
            (d = (u && d) || 0),
            (u = u || o - c),
            p && p.kill(),
            (l[r] = o),
            (l.inherit = !1),
            (l.modifiers = g),
            (g[r] = function () {
              return h(c + u * p.ratio + d * p.ratio * p.ratio);
            }),
            (l.onUpdate = function () {
              q.cache++, a.tween && di();
            }),
            (l.onComplete = function () {
              (a.tween = 0), f && f.call(p);
            }),
            (p = a.tween = I.to(e, l)),
            p
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        ke(e, "wheel", i.wheelHandler),
        H.isTouch && ke(e, "touchmove", i.wheelHandler),
        s
      );
    },
    H = (function () {
      function n(t, i) {
        Er ||
          n.register(I) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          Pa(this),
          this.init(t, i);
      }
      var e = n.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !un)
          ) {
            this.update = this.refresh = this.kill = Jt;
            return;
          }
          i = pc(bt(i) || fn(i) || i.nodeType ? { trigger: i } : i, ns);
          var s = i,
            a = s.onUpdate,
            o = s.toggleClass,
            l = s.id,
            c = s.onToggle,
            u = s.onRefresh,
            d = s.scrub,
            p = s.trigger,
            f = s.pin,
            g = s.pinSpacing,
            h = s.invalidateOnRefresh,
            w = s.anticipatePin,
            b = s.onScrubComplete,
            m = s.onSnapComplete,
            _ = s.once,
            v = s.snap,
            y = s.pinReparent,
            x = s.pinSpacer,
            S = s.containerAnimation,
            C = s.fastScrollEnd,
            E = s.preventOverlaps,
            A =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? Je
                : Ae,
            k = !d && d !== 0,
            M = pt(i.scroller || Q),
            L = I.core.getCache(M),
            z = Zi(M),
            B =
              ("pinType" in i
                ? i.pinType
                : Ei(M, "pinType") || (z && "fixed")) === "fixed",
            O = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            R = k && i.toggleActions.split(" "),
            N = "markers" in i ? i.markers : ns.markers,
            Z = z ? 0 : parseFloat(It(M)["border" + A.p2 + kr]) || 0,
            T = this,
            ie =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(T);
              },
            Re = rf(M, z, A),
            Gt = nf(M, z),
            pe = 0,
            Be = 0,
            st = 0,
            xe = Ci(M, A),
            at,
            We,
            ki,
            ot,
            Nt,
            J,
            _e,
            ht,
            At,
            P,
            Et,
            pi,
            Oi,
            Se,
            Li,
            or,
            Ir,
            De,
            Di,
            ve,
            Yt,
            zt,
            hi,
            Sn,
            Te,
            Ts,
            Ii,
            zr,
            Rr,
            zi,
            lr,
            X,
            cr,
            Vt,
            $t,
            Ht,
            ur,
            Br,
            gi;
          if (
            ((T._startClamp = T._endClamp = !1),
            (T._dir = A),
            (w *= 45),
            (T.scroller = M),
            (T.scroll = S ? S.time.bind(S) : xe),
            (ot = xe()),
            (T.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Jl = 1), i.refreshPriority === -9999 && (yn = T)),
            (L.tweenScroll = L.tweenScroll || {
              top: Ec(M, Ae),
              left: Ec(M, Je),
            }),
            (T.tweenTo = at = L.tweenScroll[A.p]),
            (T.scrubDuration = function (D) {
              (cr = fn(D) && D),
                cr
                  ? X
                    ? X.duration(D)
                    : (X = I.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: cr,
                        paused: !0,
                        onComplete: function () {
                          return b && b(T);
                        },
                      }))
                  : (X && X.progress(1).kill(), (X = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !T.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (T.animation = r.pause()),
              (r.scrollTrigger = T),
              T.scrubDuration(d),
              (zi = 0),
              l || (l = r.vars.id)),
            v &&
              ((!Ki(v) || v.push) && (v = { snapTo: v }),
              "scrollBehavior" in se.style &&
                I.set(z ? [se, Ft] : M, { scrollBehavior: "auto" }),
              q.forEach(function (D) {
                return (
                  it(D) &&
                  D.target === (z ? ue.scrollingElement || Ft : M) &&
                  (D.smooth = !1)
                );
              }),
              (ki = it(v.snapTo)
                ? v.snapTo
                : v.snapTo === "labels"
                ? af(r)
                : v.snapTo === "labelsDirectional"
                ? of(r)
                : v.directional !== !1
                ? function (D, $) {
                    return Fa(v.snapTo)(D, He() - Be < 500 ? 0 : $.direction);
                  }
                : I.utils.snap(v.snapTo)),
              (Vt = v.duration || { min: 0.1, max: 2 }),
              (Vt = Ki(Vt) ? ln(Vt.min, Vt.max) : ln(Vt, Vt)),
              ($t = I.delayedCall(v.delay || cr / 2 || 0.1, function () {
                var D = xe(),
                  $ = He() - Be < 500,
                  F = at.tween;
                if (
                  ($ || Math.abs(T.getVelocity()) < 10) &&
                  !F &&
                  !Zn &&
                  pe !== D
                ) {
                  var Y = (D - J) / Se,
                    Ie = r && !k ? r.totalProgress() : Y,
                    K = $ ? 0 : ((Ie - lr) / (He() - cn)) * 1e3 || 0,
                    we = I.utils.clamp(-Y, 1 - Y, (Mr(K / 2) * K) / 0.185),
                    qe = Y + (v.inertia === !1 ? 0 : we),
                    he,
                    oe,
                    re = v,
                    Wt = re.onStart,
                    de = re.onInterrupt,
                    Ct = re.onComplete;
                  if (
                    ((he = ki(qe, T)),
                    fn(he) || (he = qe),
                    (oe = Math.round(J + he * Se)),
                    D <= _e && D >= J && oe !== D)
                  ) {
                    if (F && !F._initted && F.data <= Mr(oe - D)) return;
                    v.inertia === !1 && (we = he - Y),
                      at(
                        oe,
                        {
                          duration: Vt(
                            Mr(
                              (Math.max(Mr(qe - Ie), Mr(he - Ie)) * 0.185) /
                                K /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || "power3",
                          data: Mr(oe - D),
                          onInterrupt: function () {
                            return $t.restart(!0) && de && de(T);
                          },
                          onComplete: function () {
                            T.update(),
                              (pe = xe()),
                              r &&
                                (X
                                  ? X.resetTo(
                                      "totalProgress",
                                      he,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(he)),
                              (zi = lr =
                                r && !k ? r.totalProgress() : T.progress),
                              m && m(T),
                              Ct && Ct(T);
                          },
                        },
                        D,
                        we * Se,
                        oe - D - we * Se
                      ),
                      Wt && Wt(T, at.tween);
                  }
                } else T.isActive && pe !== D && $t.restart(!0);
              }).pause())),
            l && (Ga[l] = T),
            (p = T.trigger = pt(p || (f !== !0 && f))),
            (gi = p && p._gsap && p._gsap.stRevert),
            gi && (gi = gi(T)),
            (f = f === !0 ? p : pt(f)),
            bt(o) && (o = { targets: p, className: o }),
            f &&
              (g === !1 ||
                g === Dt ||
                (g =
                  !g &&
                  f.parentNode &&
                  f.parentNode.style &&
                  It(f.parentNode).display === "flex"
                    ? !1
                    : be),
              (T.pin = f),
              (We = I.core.getCache(f)),
              We.spacer
                ? (Li = We.pinState)
                : (x &&
                    ((x = pt(x)),
                    x && !x.nodeType && (x = x.current || x.nativeElement),
                    (We.spacerIsNative = !!x),
                    x && (We.spacerState = ds(x))),
                  (We.spacer = De = x || ue.createElement("div")),
                  De.classList.add("pin-spacer"),
                  l && De.classList.add("pin-spacer-" + l),
                  (We.pinState = Li = ds(f))),
              i.force3D !== !1 && I.set(f, { force3D: !0 }),
              (T.spacer = De = We.spacer),
              (Rr = It(f)),
              (Sn = Rr[g + A.os2]),
              (ve = I.getProperty(f)),
              (Yt = I.quickSetter(f, A.a, Ee)),
              Ha(f, De, Rr),
              (Ir = ds(f))),
            N)
          ) {
            (pi = Ki(N) ? pc(N, gc) : gc),
              (P = os("scroller-start", l, M, A, pi, 0)),
              (Et = os("scroller-end", l, M, A, pi, 0, P)),
              (Di = P["offset" + A.op.d2]);
            var Tn = pt(Ei(M, "content") || M);
            (ht = this.markerStart = os("start", l, Tn, A, pi, Di, 0, S)),
              (At = this.markerEnd = os("end", l, Tn, A, pi, Di, 0, S)),
              S && (Br = I.quickSetter([ht, At], A.a, Ee)),
              !B &&
                !(Kt.length && Ei(M, "fixedMarkers") === !0) &&
                (sf(z ? se : M),
                I.set([P, Et], { force3D: !0 }),
                (Ts = I.quickSetter(P, A.a, Ee)),
                (zr = I.quickSetter(Et, A.a, Ee)));
          }
          if (S) {
            var V = S.vars.onUpdate,
              G = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function () {
              T.update(0, 0, 1), V && V.apply(S, G || []);
            });
          }
          if (
            ((T.previous = function () {
              return W[W.indexOf(T) - 1];
            }),
            (T.next = function () {
              return W[W.indexOf(T) + 1];
            }),
            (T.revert = function (D, $) {
              if (!$) return T.kill(!0);
              var F = D !== !1 || !T.enabled,
                Y = $e;
              F !== T.isReverted &&
                (F &&
                  ((Ht = Math.max(xe(), T.scroll.rec || 0)),
                  (st = T.progress),
                  (ur = r && r.progress())),
                ht &&
                  [ht, At, P, Et].forEach(function (Ie) {
                    return (Ie.style.display = F ? "none" : "block");
                  }),
                F && (($e = T), T.update(F)),
                f &&
                  (!y || !T.isActive) &&
                  (F ? uf(f, De, Li) : Ha(f, De, It(f), Te)),
                F || T.update(F),
                ($e = Y),
                (T.isReverted = F));
            }),
            (T.refresh = function (D, $, F, Y) {
              if (!(($e || !T.enabled) && !$)) {
                if (f && D && Lt) {
                  ke(n, "scrollEnd", _c);
                  return;
                }
                !rt && ie && ie(T),
                  ($e = T),
                  at.tween && !F && (at.tween.kill(), (at.tween = 0)),
                  X && X.pause(),
                  h && r && r.revert({ kill: !1 }).invalidate(),
                  T.isReverted || T.revert(!0, !0),
                  (T._subPinOffset = !1);
                var Ie = Re(),
                  K = Gt(),
                  we = S ? S.duration() : ei(M, A),
                  qe = Se <= 0.01,
                  he = 0,
                  oe = Y || 0,
                  re = Ki(F) ? F.end : i.end,
                  Wt = i.endTrigger || p,
                  de = Ki(F)
                    ? F.start
                    : i.start ||
                      (i.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"),
                  Ct = (T.pinnedContainer =
                    i.pinnedContainer && pt(i.pinnedContainer, T)),
                  ii = (p && Math.max(0, W.indexOf(T))) || 0,
                  Fe = ii,
                  Ge,
                  Xe,
                  dr,
                  As,
                  je,
                  Ce,
                  ri,
                  ro,
                  Kc,
                  An,
                  ni,
                  En,
                  Es;
                for (
                  N &&
                  Ki(F) &&
                  ((En = I.getProperty(P, A.p)), (Es = I.getProperty(Et, A.p)));
                  Fe--;

                )
                  (Ce = W[Fe]),
                    Ce.end || Ce.refresh(0, 1) || ($e = T),
                    (ri = Ce.pin),
                    ri &&
                      (ri === p || ri === f || ri === Ct) &&
                      !Ce.isReverted &&
                      (An || (An = []), An.unshift(Ce), Ce.revert(!0, !0)),
                    Ce !== W[Fe] && (ii--, Fe--);
                for (
                  it(de) && (de = de(T)),
                    de = rc(de, "start", T),
                    J =
                      Sc(
                        de,
                        p,
                        Ie,
                        A,
                        xe(),
                        ht,
                        P,
                        T,
                        K,
                        Z,
                        B,
                        we,
                        S,
                        T._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    it(re) && (re = re(T)),
                    bt(re) &&
                      !re.indexOf("+=") &&
                      (~re.indexOf(" ")
                        ? (re = (bt(de) ? de.split(" ")[0] : "") + re)
                        : ((he = as(re.substr(2), Ie)),
                          (re = bt(de)
                            ? de
                            : (S
                                ? I.utils.mapRange(
                                    0,
                                    S.duration(),
                                    S.scrollTrigger.start,
                                    S.scrollTrigger.end,
                                    J
                                  )
                                : J) + he),
                          (Wt = p))),
                    re = rc(re, "end", T),
                    _e =
                      Math.max(
                        J,
                        Sc(
                          re || (Wt ? "100% 0" : we),
                          Wt,
                          Ie,
                          A,
                          xe() + he,
                          At,
                          Et,
                          T,
                          K,
                          Z,
                          B,
                          we,
                          S,
                          T._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    he = 0,
                    Fe = ii;
                  Fe--;

                )
                  (Ce = W[Fe]),
                    (ri = Ce.pin),
                    ri &&
                      Ce.start - Ce._pinPush <= J &&
                      !S &&
                      Ce.end > 0 &&
                      ((Ge =
                        Ce.end -
                        (T._startClamp ? Math.max(0, Ce.start) : Ce.start)),
                      ((ri === p && Ce.start - Ce._pinPush < J) || ri === Ct) &&
                        isNaN(de) &&
                        (he += Ge * (1 - Ce.progress)),
                      ri === f && (oe += Ge));
                if (
                  ((J += he),
                  (_e += he),
                  T._startClamp && (T._startClamp += he),
                  T._endClamp &&
                    !rt &&
                    ((T._endClamp = _e || -0.001),
                    (_e = Math.min(_e, ei(M, A)))),
                  (Se = _e - J || ((J -= 0.01) && 0.001)),
                  qe &&
                    (st = I.utils.clamp(0, 1, I.utils.normalize(J, _e, Ht))),
                  (T._pinPush = oe),
                  ht &&
                    he &&
                    ((Ge = {}),
                    (Ge[A.a] = "+=" + he),
                    Ct && (Ge[A.p] = "-=" + xe()),
                    I.set([ht, At], Ge)),
                  f && !(Oa && T.end >= ei(M, A)))
                )
                  (Ge = It(f)),
                    (As = A === Ae),
                    (dr = xe()),
                    (zt = parseFloat(ve(A.a)) + oe),
                    !we &&
                      _e > 1 &&
                      ((ni = (z ? ue.scrollingElement || Ft : M).style),
                      (ni = {
                        style: ni,
                        value: ni["overflow" + A.a.toUpperCase()],
                      }),
                      z &&
                        It(se)["overflow" + A.a.toUpperCase()] !== "scroll" &&
                        (ni.style["overflow" + A.a.toUpperCase()] = "scroll")),
                    Ha(f, De, Ge),
                    (Ir = ds(f)),
                    (Xe = ui(f, !0)),
                    (ro = B && Ci(M, As ? Je : Ae)()),
                    g
                      ? ((Te = [g + A.os2, Se + oe + Ee]),
                        (Te.t = De),
                        (Fe = g === be ? ts(f, A) + Se + oe : 0),
                        Fe &&
                          (Te.push(A.d, Fe + Ee),
                          De.style.flexBasis !== "auto" &&
                            (De.style.flexBasis = Fe + Ee)),
                        Lr(Te),
                        Ct &&
                          W.forEach(function (Cn) {
                            Cn.pin === Ct &&
                              Cn.vars.pinSpacing !== !1 &&
                              (Cn._subPinOffset = !0);
                          }),
                        B && xe(Ht))
                      : ((Fe = ts(f, A)),
                        Fe &&
                          De.style.flexBasis !== "auto" &&
                          (De.style.flexBasis = Fe + Ee)),
                    B &&
                      ((je = {
                        top: Xe.top + (As ? dr - J : ro) + Ee,
                        left: Xe.left + (As ? ro : dr - J) + Ee,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (je[Ji] = je["max" + kr] = Math.ceil(Xe.width) + Ee),
                      (je[er] = je["max" + Ba] = Math.ceil(Xe.height) + Ee),
                      (je[Dt] =
                        je[Dt + mn] =
                        je[Dt + hn] =
                        je[Dt + _n] =
                        je[Dt + gn] =
                          "0"),
                      (je[be] = Ge[be]),
                      (je[be + mn] = Ge[be + mn]),
                      (je[be + hn] = Ge[be + hn]),
                      (je[be + _n] = Ge[be + _n]),
                      (je[be + gn] = Ge[be + gn]),
                      (or = ff(Li, je, y)),
                      rt && xe(0)),
                    r
                      ? ((Kc = r._initted),
                        Ea(1),
                        r.render(r.duration(), !0, !0),
                        (hi = ve(A.a) - zt + Se + oe),
                        (Ii = Math.abs(Se - hi) > 1),
                        B && Ii && or.splice(or.length - 2, 2),
                        r.render(0, !0, !0),
                        Kc || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        Ea(0))
                      : (hi = Se),
                    ni &&
                      (ni.value
                        ? (ni.style["overflow" + A.a.toUpperCase()] = ni.value)
                        : ni.style.removeProperty("overflow-" + A.a));
                else if (p && xe() && !S)
                  for (Xe = p.parentNode; Xe && Xe !== se; )
                    Xe._pinOffset &&
                      ((J -= Xe._pinOffset), (_e -= Xe._pinOffset)),
                      (Xe = Xe.parentNode);
                An &&
                  An.forEach(function (Cn) {
                    return Cn.revert(!1, !0);
                  }),
                  (T.start = J),
                  (T.end = _e),
                  (ot = Nt = rt ? Ht : xe()),
                  !S && !rt && (ot < Ht && xe(Ht), (T.scroll.rec = 0)),
                  T.revert(!1, !0),
                  (Be = He()),
                  $t && ((pe = -1), $t.restart(!0)),
                  ($e = 0),
                  r &&
                    k &&
                    (r._initted || ur) &&
                    r.progress() !== ur &&
                    r.progress(ur || 0, !0).render(r.time(), !0, !0),
                  (qe || st !== T.progress || S || h) &&
                    (r &&
                      !k &&
                      r.totalProgress(
                        S && J < -0.001 && !st
                          ? I.utils.normalize(J, _e, 0)
                          : st,
                        !0
                      ),
                    (T.progress = qe || (ot - J) / Se === st ? 0 : st)),
                  f && g && (De._pinOffset = Math.round(T.progress * hi)),
                  X && X.invalidate(),
                  isNaN(En) ||
                    ((En -= I.getProperty(P, A.p)),
                    (Es -= I.getProperty(Et, A.p)),
                    ps(P, A, En),
                    ps(ht, A, En - (Y || 0)),
                    ps(Et, A, Es),
                    ps(At, A, Es - (Y || 0))),
                  qe && !rt && T.update(),
                  u && !rt && !Oi && ((Oi = !0), u(T), (Oi = !1));
              }
            }),
            (T.getVelocity = function () {
              return ((xe() - Nt) / (He() - cn)) * 1e3 || 0;
            }),
            (T.endAnimation = function () {
              pn(T.callbackAnimation),
                r &&
                  (X
                    ? X.progress(1)
                    : r.paused()
                    ? k || pn(r, T.direction < 0, 1)
                    : pn(r, r.reversed()));
            }),
            (T.labelToScroll = function (D) {
              return (
                (r &&
                  r.labels &&
                  (J || T.refresh() || J) +
                    (r.labels[D] / r.duration()) * Se) ||
                0
              );
            }),
            (T.getTrailing = function (D) {
              var $ = W.indexOf(T),
                F = T.direction > 0 ? W.slice(0, $).reverse() : W.slice($ + 1);
              return (
                bt(D)
                  ? F.filter(function (Y) {
                      return Y.vars.preventOverlaps === D;
                    })
                  : F
              ).filter(function (Y) {
                return T.direction > 0 ? Y.end <= J : Y.start >= _e;
              });
            }),
            (T.update = function (D, $, F) {
              if (!(S && !F && !D)) {
                var Y = rt === !0 ? Ht : T.scroll(),
                  Ie = D ? 0 : (Y - J) / Se,
                  K = Ie < 0 ? 0 : Ie > 1 ? 1 : Ie || 0,
                  we = T.progress,
                  qe,
                  he,
                  oe,
                  re,
                  Wt,
                  de,
                  Ct,
                  ii;
                if (
                  ($ &&
                    ((Nt = ot),
                    (ot = S ? xe() : Y),
                    v && ((lr = zi), (zi = r && !k ? r.totalProgress() : K))),
                  w &&
                    f &&
                    !$e &&
                    !Jn &&
                    Lt &&
                    (!K && J < Y + ((Y - Nt) / (He() - cn)) * w
                      ? (K = 1e-4)
                      : K === 1 &&
                        _e > Y + ((Y - Nt) / (He() - cn)) * w &&
                        (K = 0.9999)),
                  K !== we && T.enabled)
                ) {
                  if (
                    ((qe = T.isActive = !!K && K < 1),
                    (he = !!we && we < 1),
                    (de = qe !== he),
                    (Wt = de || !!K != !!we),
                    (T.direction = K > we ? 1 : -1),
                    (T.progress = K),
                    Wt &&
                      !$e &&
                      ((oe = K && !we ? 0 : K === 1 ? 1 : we === 1 ? 2 : 3),
                      k &&
                        ((re =
                          (!de && R[oe + 1] !== "none" && R[oe + 1]) || R[oe]),
                        (ii =
                          r &&
                          (re === "complete" || re === "reset" || re in r)))),
                    E &&
                      (de || ii) &&
                      (ii || d || !r) &&
                      (it(E)
                        ? E(T)
                        : T.getTrailing(E).forEach(function (dr) {
                            return dr.endAnimation();
                          })),
                    k ||
                      (X && !$e && !Jn
                        ? (X._dp._time - X._start !== X._time &&
                            X.render(X._dp._time - X._start),
                          X.resetTo
                            ? X.resetTo("totalProgress", K, r._tTime / r._tDur)
                            : ((X.vars.totalProgress = K),
                              X.invalidate().restart()))
                        : r && r.totalProgress(K, !!($e && (Be || D)))),
                    f)
                  ) {
                    if ((D && g && (De.style[g + A.os2] = Sn), !B))
                      Yt(dn(zt + hi * K));
                    else if (Wt) {
                      if (
                        ((Ct = !D && K > we && _e + 1 > Y && Y + 1 >= ei(M, A)),
                        y)
                      )
                        if (!D && (qe || Ct)) {
                          var Fe = ui(f, !0),
                            Ge = Y - J;
                          Tc(
                            f,
                            se,
                            Fe.top + (A === Ae ? Ge : 0) + Ee,
                            Fe.left + (A === Ae ? 0 : Ge) + Ee
                          );
                        } else Tc(f, De);
                      Lr(qe || Ct ? or : Ir),
                        (Ii && K < 1 && qe) ||
                          Yt(zt + (K === 1 && !Ct ? hi : 0));
                    }
                  }
                  v && !at.tween && !$e && !Jn && $t.restart(!0),
                    o &&
                      (de || (_ && K && (K < 1 || !La))) &&
                      on(o.targets).forEach(function (dr) {
                        return dr.classList[qe || _ ? "add" : "remove"](
                          o.className
                        );
                      }),
                    a && !k && !D && a(T),
                    Wt && !$e
                      ? (k &&
                          (ii &&
                            (re === "complete"
                              ? r.pause().totalProgress(1)
                              : re === "reset"
                              ? r.restart(!0).pause()
                              : re === "restart"
                              ? r.restart(!0)
                              : r[re]()),
                          a && a(T)),
                        (de || !La) &&
                          (c && de && Ia(T, c),
                          O[oe] && Ia(T, O[oe]),
                          _ && (K === 1 ? T.kill(!1, 1) : (O[oe] = 0)),
                          de ||
                            ((oe = K === 1 ? 1 : 3), O[oe] && Ia(T, O[oe]))),
                        C &&
                          !qe &&
                          Math.abs(T.getVelocity()) > (fn(C) ? C : 2500) &&
                          (pn(T.callbackAnimation),
                          X
                            ? X.progress(1)
                            : pn(r, re === "reverse" ? 1 : !K, 1)))
                      : k && a && !$e && a(T);
                }
                if (zr) {
                  var Xe = S ? (Y / S.duration()) * (S._caScrollDist || 0) : Y;
                  Ts(Xe + (P._isFlipped ? 1 : 0)), zr(Xe);
                }
                Br && Br((-Y / S.duration()) * (S._caScrollDist || 0));
              }
            }),
            (T.enable = function (D, $) {
              T.enabled ||
                ((T.enabled = !0),
                ke(M, "resize", wn),
                z || ke(M, "scroll", Or),
                ie && ke(n, "refreshInit", ie),
                D !== !1 && ((T.progress = st = 0), (ot = Nt = pe = xe())),
                $ !== !1 && T.refresh());
            }),
            (T.getTween = function (D) {
              return D && at ? at.tween : X;
            }),
            (T.setPositions = function (D, $, F, Y) {
              if (S) {
                var Ie = S.scrollTrigger,
                  K = S.duration(),
                  we = Ie.end - Ie.start;
                (D = Ie.start + (we * D) / K), ($ = Ie.start + (we * $) / K);
              }
              T.refresh(
                !1,
                !1,
                {
                  start: nc(D, F && !!T._startClamp),
                  end: nc($, F && !!T._endClamp),
                },
                Y
              ),
                T.update();
            }),
            (T.adjustPinSpacing = function (D) {
              if (Te && D) {
                var $ = Te.indexOf(A.d) + 1;
                (Te[$] = parseFloat(Te[$]) + D + Ee),
                  (Te[1] = parseFloat(Te[1]) + D + Ee),
                  Lr(Te);
              }
            }),
            (T.disable = function (D, $) {
              if (
                T.enabled &&
                (D !== !1 && T.revert(!0, !0),
                (T.enabled = T.isActive = !1),
                $ || (X && X.pause()),
                (Ht = 0),
                We && (We.uncache = 1),
                ie && Oe(n, "refreshInit", ie),
                $t &&
                  ($t.pause(), at.tween && at.tween.kill() && (at.tween = 0)),
                !z)
              ) {
                for (var F = W.length; F--; )
                  if (W[F].scroller === M && W[F] !== T) return;
                Oe(M, "resize", wn), z || Oe(M, "scroll", Or);
              }
            }),
            (T.kill = function (D, $) {
              T.disable(D, $), X && !$ && X.kill(), l && delete Ga[l];
              var F = W.indexOf(T);
              F >= 0 && W.splice(F, 1),
                F === et && cs > 0 && et--,
                (F = 0),
                W.forEach(function (Y) {
                  return Y.scroller === T.scroller && (F = 1);
                }),
                F || rt || (T.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  D && r.revert({ kill: !1 }),
                  $ || r.kill()),
                ht &&
                  [ht, At, P, Et].forEach(function (Y) {
                    return Y.parentNode && Y.parentNode.removeChild(Y);
                  }),
                yn === T && (yn = 0),
                f &&
                  (We && (We.uncache = 1),
                  (F = 0),
                  W.forEach(function (Y) {
                    return Y.pin === f && F++;
                  }),
                  F || (We.spacer = 0)),
                i.onKill && i.onKill(T);
            }),
            W.push(T),
            T.enable(!1, !1),
            gi && gi(T),
            r && r.add && !Se)
          ) {
            var ee = T.update;
            (T.update = function () {
              (T.update = ee), J || _e || T.refresh();
            }),
              I.delayedCall(0.01, T.update),
              (Se = 0.01),
              (J = _e = 0);
          } else T.refresh();
          f && cf();
        }),
        (n.register = function (i) {
          return (
            Er ||
              ((I = i || lc()),
              oc() && window.document && n.enable(),
              (Er = un)),
            Er
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) ns[r] = i[r];
          return ns;
        }),
        (n.disable = function (i, r) {
          (un = 0),
            W.forEach(function (a) {
              return a[r ? "kill" : "disable"](i);
            }),
            Oe(Q, "wheel", Or),
            Oe(ue, "scroll", Or),
            clearInterval(Qn),
            Oe(ue, "touchcancel", Jt),
            Oe(se, "touchstart", Jt),
            is(Oe, ue, "pointerdown,touchstart,mousedown", sc),
            is(Oe, ue, "pointerup,touchend,mouseup", ac),
            Un.kill(),
            es(Oe);
          for (var s = 0; s < q.length; s += 3)
            rs(Oe, q[s], q[s + 1]), rs(Oe, q[s], q[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((Q = window),
            (ue = document),
            (Ft = ue.documentElement),
            (se = ue.body),
            I &&
              ((on = I.utils.toArray),
              (ln = I.utils.clamp),
              (Pa = I.core.context || Jt),
              (Ea = I.core.suppressOverwrites || Jt),
              (Ma = Q.history.scrollRestoration || "auto"),
              (Va = Q.pageYOffset),
              I.core.globals("ScrollTrigger", n),
              se))
          ) {
            (un = 1),
              (Pr = document.createElement("div")),
              (Pr.style.height = "100vh"),
              (Pr.style.position = "absolute"),
              bc(),
              tf(),
              me.register(I),
              (n.isTouch = me.isTouch),
              (Pi =
                me.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ca = me.isTouch === 1),
              ke(Q, "wheel", Or),
              (Ql = [Q, ue, Ft, se]),
              I.matchMedia
                ? ((n.matchMedia = function (l) {
                    var c = I.matchMedia(),
                      u;
                    for (u in l) c.add(u, l[u]);
                    return c;
                  }),
                  I.addEventListener("matchMediaInit", function () {
                    return Ya();
                  }),
                  I.addEventListener("matchMediaRevert", function () {
                    return vc();
                  }),
                  I.addEventListener("matchMedia", function () {
                    nr(0, 1), ir("matchMedia");
                  }),
                  I.matchMedia("(orientation: portrait)", function () {
                    return Na(), Na;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Na(),
              ke(ue, "scroll", Or);
            var i = se.style,
              r = i.borderTopStyle,
              s = I.core.Animation.prototype,
              a,
              o;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                a = ui(se),
                Ae.m = Math.round(a.top + Ae.sc()) || 0,
                Je.m = Math.round(a.left + Je.sc()) || 0,
                r
                  ? (i.borderTopStyle = r)
                  : i.removeProperty("border-top-style"),
                Qn = setInterval(mc, 250),
                I.delayedCall(0.5, function () {
                  return (Jn = 0);
                }),
                ke(ue, "touchcancel", Jt),
                ke(se, "touchstart", Jt),
                is(ke, ue, "pointerdown,touchstart,mousedown", sc),
                is(ke, ue, "pointerup,touchend,mouseup", ac),
                Aa = I.utils.checkPrefix("transform"),
                us.push(Aa),
                Er = He(),
                Un = I.delayedCall(0.2, nr).pause(),
                Cr = [
                  ue,
                  "visibilitychange",
                  function () {
                    var l = Q.innerWidth,
                      c = Q.innerHeight;
                    ue.hidden
                      ? ((Zl = l), (Kl = c))
                      : (Zl !== l || Kl !== c) && wn();
                  },
                  ue,
                  "DOMContentLoaded",
                  nr,
                  Q,
                  "load",
                  nr,
                  Q,
                  "resize",
                  wn,
                ],
                es(ke),
                W.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                o = 0;
              o < q.length;
              o += 3
            )
              rs(Oe, q[o], q[o + 1]), rs(Oe, q[o], q[o + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && (La = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(Qn)) || ((Qn = r) && setInterval(mc, r)),
            "ignoreMobileResize" in i &&
              (Ca = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (es(Oe) || es(ke, i.autoRefreshEvents || "none"),
              (ec = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = pt(i),
            a = q.indexOf(s),
            o = Zi(s);
          ~a && q.splice(a, o ? 6 : 2),
            r && (o ? Kt.unshift(Q, r, se, r, Ft, r) : Kt.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          W.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var a = (bt(i) ? pt(i) : i).getBoundingClientRect(),
            o = a[s ? Ji : er] * r || 0;
          return s
            ? a.right - o > 0 && a.left + o < Q.innerWidth
            : a.bottom - o > 0 && a.top + o < Q.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          bt(i) && (i = pt(i));
          var a = i.getBoundingClientRect(),
            o = a[s ? Ji : er],
            l =
              r == null
                ? o / 2
                : r in ss
                ? ss[r] * o
                : ~r.indexOf("%")
                ? (parseFloat(r) * o) / 100
                : parseFloat(r) || 0;
          return s ? (a.left + l) / Q.innerWidth : (a.top + l) / Q.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (W.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = tr.killAll || [];
            (tr = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  (H.version = "3.12.5"),
    (H.saveStyles = function (n) {
      return n
        ? on(n).forEach(function (e) {
            if (e && e.style) {
              var t = xt.indexOf(e);
              t >= 0 && xt.splice(t, 5),
                xt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  I.core.getCache(e),
                  Pa()
                );
            }
          })
        : xt;
    }),
    (H.revert = function (n, e) {
      return Ya(!n, e);
    }),
    (H.create = function (n, e) {
      return new H(n, e);
    }),
    (H.refresh = function (n) {
      return n ? wn() : (Er || H.register()) && nr(!0);
    }),
    (H.update = function (n) {
      return ++q.cache && di(n === !0 ? 2 : 0);
    }),
    (H.clearScrollMemory = wc),
    (H.maxScroll = function (n, e) {
      return ei(n, e ? Je : Ae);
    }),
    (H.getScrollFunc = function (n, e) {
      return Ci(pt(n), e ? Je : Ae);
    }),
    (H.getById = function (n) {
      return Ga[n];
    }),
    (H.getAll = function () {
      return W.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (H.isScrolling = function () {
      return !!Lt;
    }),
    (H.snapDirectional = Fa),
    (H.addEventListener = function (n, e) {
      var t = tr[n] || (tr[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (H.removeEventListener = function (n, e) {
      var t = tr[n],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (H.batch = function (n, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        a = function (c, u) {
          var d = [],
            p = [],
            f = I.delayedCall(r, function () {
              u(d, p), (d = []), (p = []);
            }).pause();
          return function (g) {
            d.length || f.restart(!0),
              d.push(g.trigger),
              p.push(g),
              s <= d.length && f.progress(1);
          };
        },
        o;
      for (o in e)
        i[o] =
          o.substr(0, 2) === "on" && it(e[o]) && o !== "onRefreshInit"
            ? a(o, e[o])
            : e[o];
      return (
        it(s) &&
          ((s = s()),
          ke(H, "refresh", function () {
            return (s = e.batchMax());
          })),
        on(n).forEach(function (l) {
          var c = {};
          for (o in i) c[o] = i[o];
          (c.trigger = l), t.push(H.create(c));
        }),
        t
      );
    });
  var Cc = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    Wa = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (me.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Ft && n(se, t);
    },
    hs = { auto: 1, scroll: 1 },
    hf = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        a = s._gsap || I.core.getCache(s),
        o = He(),
        l;
      if (!a._isScrollT || o - a._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== se &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(hs[(l = It(s)).overflowY] || hs[l.overflowX]));

        )
          s = s.parentNode;
        (a._isScroll =
          s &&
          s !== i &&
          !Zi(s) &&
          (hs[(l = It(s)).overflowY] || hs[l.overflowX])),
          (a._isScrollT = o);
      }
      (a._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Pc = function (e, t, i, r) {
      return me.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && hf),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && ke(ue, me.eventTypes[0], kc, !1, !0);
        },
        onDisable: function () {
          return Oe(ue, me.eventTypes[0], kc, !0);
        },
      });
    },
    gf = /(input|label|select|textarea)/i,
    Mc,
    kc = function (e) {
      var t = gf.test(e.target.tagName);
      (t || Mc) && ((e._gsapAllow = !0), (Mc = t));
    },
    mf = function (e) {
      Ki(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        s = t.allowNestedScroll,
        a = t.onRelease,
        o,
        l,
        c = pt(e.target) || Ft,
        u = I.core.globals().ScrollSmoother,
        d = u && u.get(),
        p =
          Pi &&
          ((e.content && pt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        f = Ci(c, Ae),
        g = Ci(c, Je),
        h = 1,
        w =
          (me.isTouch && Q.visualViewport
            ? Q.visualViewport.scale * Q.visualViewport.width
            : Q.outerWidth) / Q.innerWidth,
        b = 0,
        m = it(r)
          ? function () {
              return r(o);
            }
          : function () {
              return r || 2.8;
            },
        _,
        v,
        y = Pc(c, e.type, !0, s),
        x = function () {
          return (v = !1);
        },
        S = Jt,
        C = Jt,
        E = function () {
          (l = ei(c, Ae)),
            (C = ln(Pi ? 1 : 0, l)),
            i && (S = ln(0, ei(c, Je))),
            (_ = rr);
        },
        A = function () {
          (p._gsap.y = dn(parseFloat(p._gsap.y) + f.offset) + "px"),
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(p._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        k = function () {
          if (v) {
            requestAnimationFrame(x);
            var N = dn(o.deltaY / 2),
              Z = C(f.v - N);
            if (p && Z !== f.v + f.offset) {
              f.offset = Z - f.v;
              var T = dn((parseFloat(p && p._gsap.y) || 0) - f.offset);
              (p.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                T +
                ", 0, 1)"),
                (p._gsap.y = T + "px"),
                (f.cacheID = q.cache),
                di();
            }
            return !0;
          }
          f.offset && A(), (v = !0);
        },
        M,
        L,
        z,
        B,
        O = function () {
          E(),
            M.isActive() &&
              M.vars.scrollY > l &&
              (f() > l ? M.progress(1) && f(l) : M.resetTo("scrollY", l));
        };
      return (
        p && I.set(p, { y: "+=0" }),
        (e.ignoreCheck = function (R) {
          return (
            (Pi && R.type === "touchmove" && k()) ||
            (h > 1.05 && R.type !== "touchstart") ||
            o.isGesturing ||
            (R.touches && R.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          v = !1;
          var R = h;
          (h = dn(((Q.visualViewport && Q.visualViewport.scale) || 1) / w)),
            M.pause(),
            R !== h && Wa(c, h > 1.01 ? !0 : i ? !1 : "x"),
            (L = g()),
            (z = f()),
            E(),
            (_ = rr);
        }),
        (e.onRelease = e.onGestureStart =
          function (R, N) {
            if ((f.offset && A(), !N)) B.restart(!0);
            else {
              q.cache++;
              var Z = m(),
                T,
                ie;
              i &&
                ((T = g()),
                (ie = T + (Z * 0.05 * -R.velocityX) / 0.227),
                (Z *= Cc(g, T, ie, ei(c, Je))),
                (M.vars.scrollX = S(ie))),
                (T = f()),
                (ie = T + (Z * 0.05 * -R.velocityY) / 0.227),
                (Z *= Cc(f, T, ie, ei(c, Ae))),
                (M.vars.scrollY = C(ie)),
                M.invalidate().duration(Z).play(0.01),
                ((Pi && M.vars.scrollY >= l) || T >= l - 1) &&
                  I.to({}, { onUpdate: O, duration: Z });
            }
            a && a(R);
          }),
        (e.onWheel = function () {
          M._ts && M.pause(), He() - b > 1e3 && ((_ = 0), (b = He()));
        }),
        (e.onChange = function (R, N, Z, T, ie) {
          if (
            (rr !== _ && E(),
            N && i && g(S(T[2] === N ? L + (R.startX - R.x) : g() + N - T[1])),
            Z)
          ) {
            f.offset && A();
            var Re = ie[2] === Z,
              Gt = Re ? z + R.startY - R.y : f() + Z - ie[1],
              pe = C(Gt);
            Re && Gt !== pe && (z += pe - Gt), f(pe);
          }
          (Z || N) && di();
        }),
        (e.onEnable = function () {
          Wa(c, i ? !1 : "x"),
            H.addEventListener("refresh", O),
            ke(Q, "resize", O),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = g.smooth = !1)),
            y.enable();
        }),
        (e.onDisable = function () {
          Wa(c, !0),
            Oe(Q, "resize", O),
            H.removeEventListener("refresh", O),
            y.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (o = new me(e)),
        (o.iOS = Pi),
        Pi && !f() && f(1),
        Pi && I.ticker.add(Jt),
        (B = o._dc),
        (M = I.to(o, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Ac(f, f(), function () {
              return M.pause();
            }),
          },
          onUpdate: di,
          onComplete: B.vars.onComplete,
        })),
        o
      );
    };
  (H.sort = function (n) {
    return W.sort(
      n ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            e.start -
            (t.start + (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  }),
    (H.observe = function (n) {
      return new me(n);
    }),
    (H.normalizeScroll = function (n) {
      if (typeof n > "u") return tt;
      if (n === !0 && tt) return tt.enable();
      if (n === !1) {
        tt && tt.kill(), (tt = n);
        return;
      }
      var e = n instanceof me ? n : mf(n);
      return (
        tt && tt.target === e.target && tt.kill(), Zi(e.target) && (tt = e), e
      );
    }),
    (H.core = {
      _getVelocityProp: Ta,
      _inputObserver: Pc,
      _scrollers: q,
      _proxies: Kt,
      bridge: {
        ss: function () {
          Lt || ir("scrollStart"), (Lt = He());
        },
        ref: function () {
          return $e;
        },
      },
    }),
    lc() && I.registerPlugin(H),
    U.registerPlugin(H);
  function _f({
    duration: n = 1,
    ease: e = "power1.inOut",
    staggerAmount: t = 0.2,
    resetOnLeave: i = !0,
    lineSelector: r = '[data-grid="h-line"], [data-grid="v-line"]',
    wrapSelector: s = '[data-grid="line-wrap"]',
  } = {}) {
    U.utils.toArray(r).forEach((a) => {
      const l = a.dataset.grid === "h-line" ? "width" : "height";
      U.set(a, { [l]: 0 }),
        H.create({
          trigger: a,
          start: "top 80%",
          end: "top 20%",
          onEnter: () => {
            U.to(a, { [l]: "100%", duration: n, ease: e });
          },
          onLeaveBack: i
            ? () => U.to(a, { [l]: 0, duration: n, ease: e })
            : null,
        });
    }),
      U.utils.toArray(s).forEach((a) => {
        U.utils.toArray(r, a).forEach((l, c) => {
          const u = l.dataset.grid === "h-line",
            d = u ? "width" : "height",
            p = u
              ? c % 2 === 0
                ? { left: "0%", right: "auto" }
                : { left: "auto", right: "0%" }
              : c % 2 === 0
              ? { top: "0%", bottom: "auto" }
              : { top: "auto", bottom: "0%" };
          U.set(l, { [d]: 0, ...p }),
            H.create({
              trigger: a,
              start: "top 80%",
              end: "top 20%",
              onEnter: () => {
                U.to(l, {
                  [d]: "100%",
                  duration: n,
                  ease: e,
                  stagger: { amount: t },
                });
              },
              onLeaveBack: i
                ? () =>
                    U.to(l, {
                      [d]: 0,
                      duration: n,
                      ease: e,
                      stagger: { amount: t },
                    })
                : null,
            });
        });
      });
  }
  function vf() {
    qd(), Xd(), new Qd("data-a-split"), _f();
  }
  U.registerPlugin(H);
  const wf = () => {
      const n = document.querySelector('[data-strip="main"]'),
        e = document.querySelectorAll('[data-strip="child"]'),
        t = document.querySelectorAll('[data-strip="image"]');
      if (n && e.length > 0) {
        U.set(e, { width: "100%" }), U.set(t, { y: "0%" });
        const i = U.timeline({
          scrollTrigger: {
            trigger: n,
            start: "top 120%",
            end: "bottom 80%",
            scrub: 1,
            markers: !1,
          },
        });
        e.forEach((r, s) => {
          i.to(r, { width: "0%", duration: 2, ease: "power2.inOut" }, s * 0.1);
        }),
          t.forEach((r) => {
            U.from(r, {
              y: "10%",
              scrollTrigger: {
                trigger: n,
                start: "top 120%",
                end: "bottom 80%",
                scrub: 1,
                markers: !1,
              },
            });
          });
      }
    },
    yf = () => {
      wf();
    };
  function bf(n) {
    const e = document.querySelector(
        '[data-event="list-wrap"][data-event-upcoming]'
      ),
      t = document.querySelector('[data-event="list-wrap"][data-event-past]');
    if (!e || !t) {
      console.error("One or both list wrappers not found!");
      return;
    }
    const i = document.querySelector('[data-event="main-card"]');
    if (!i) {
      console.error("Card template not found!");
      return;
    }
    [e, t].forEach((s) => {
      Array.from(s.children).forEach((a) => {
        a.hasAttribute("data-dynamic-event") && a.remove();
      });
    });
    const r = (s) => {
      const a = i.cloneNode(!0);
      (a.style.display = "block"),
        a.setAttribute("data-dynamic-event", "true"),
        s.isPast && a.classList.add("is--past");
      const o = (u, d) => {
        a.querySelectorAll(`[data-event="${u}"]`).forEach((f) => {
          f.textContent = d;
        });
      };
      o("event-name", s.name),
        o("event-date", s.isPast ? `${s.date} (Past Event)` : s.date),
        o("location", s.location),
        o("event-start-time", s.startTime),
        o("event-end-time", s.endTime),
        a.querySelectorAll('[data-event="event-link-url"]').forEach((u) => {
          u.href = s.url;
        });
      const c = a.querySelector('[data-event="event-image"]');
      return c && ((c.src = s.imageUrl), (c.alt = s.name)), a;
    };
    n.upcoming.forEach((s) => {
      const a = r(s);
      e.appendChild(a);
    }),
      n.past.forEach((s) => {
        const a = r(s);
        t.appendChild(a);
      });
  }
  function Oc(n) {
    const e = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return n.toLocaleDateString("en-US", e);
  }
  function Dr(n) {
    return new Date(n).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  class Lc extends Error {
    constructor(e, t) {
      super(e), (this.status = t), (this.name = "APIError");
    }
  }
  const Dc = "lumaEvents",
    xf = 5 * 60 * 1e3;
  function Sf() {
    const n = localStorage.getItem(Dc);
    if (n) {
      const { timestamp: e, events: t } = JSON.parse(n);
      if (Date.now() - e < xf) return t;
    }
    return null;
  }
  function Tf(n) {
    localStorage.setItem(
      Dc,
      JSON.stringify({ timestamp: Date.now(), events: n })
    );
  }
  async function Af(n, e, t = 3) {
    for (let i = 0; i < t; i++)
      try {
        const r = await fetch(n, e);
        if (r.status === 429) {
          const s = parseInt(r.headers.get("Retry-After") || "60", 10);
          console.warn(`Rate limit exceeded. Retrying in ${s} seconds.`),
            await new Promise((a) => setTimeout(a, s * 1e3));
        } else return r;
      } catch (r) {
        if (i === t - 1) throw r;
      }
    throw new Error("Max retries reached");
  }
  async function Ef() {
    const n = "secret-c3K0upXGBuQpYmxX7n7N5YUzD";
    try {
      const e = await Af("https://api.lu.ma/public/v1/calendar/list-events", {
        headers: { "x-luma-api-key": n, "Content-Type": "application/json" },
      });
      if (!e.ok) throw new Lc(`HTTP error! status: ${e.status}`, e.status);
      const t = await e.json();
      if (!t || !Array.isArray(t.entries))
        throw new Error("Invalid API response structure");
      const i = new Date(),
        r = t.entries
          .filter((o) => o.event)
          .map((o) => {
            var u;
            const l = new Date(o.event.start_at),
              c = l < i;
            return {
              name: o.event.name || "Unnamed Event",
              date: l,
              location:
                ((u = o.event.geo_address_json) == null
                  ? void 0
                  : u.full_address) || "Online",
              startTime: Dr(o.event.start_at),
              endTime: Dr(o.event.end_at),
              url: o.event.url || "#",
              imageUrl: o.event.cover_url || "default-image-url.jpg",
              isPast: c,
            };
          }),
        s = r
          .filter((o) => !o.isPast)
          .sort((o, l) => o.date - l.date)
          .map((o) => ({
            ...o,
            date: Oc(o.date),
            startTime: Dr(o.start_at),
            endTime: Dr(o.end_at),
          })),
        a = r
          .filter((o) => o.isPast)
          .sort((o, l) => l.date - o.date)
          .map((o) => ({
            ...o,
            date: Oc(o.date),
            startTime: Dr(o.start_at),
            endTime: Dr(o.end_at),
          }));
      return { upcoming: s, past: a };
    } catch (e) {
      throw (
        (e instanceof Lc && e.status === 429
          ? console.error("Rate limit exceeded. Please try again later.")
          : console.error("Error fetching events:", e),
        e)
      );
    }
  }
  async function Cf() {
    const n = Sf();
    if (n) return n;
    const e = await Ef();
    return Tf(e), e;
  }
  function Ic(n) {
    return (
      n !== null &&
      typeof n == "object" &&
      "constructor" in n &&
      n.constructor === Object
    );
  }
  function qa(n, e) {
    n === void 0 && (n = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((i) => t.indexOf(i) < 0)
      .forEach((i) => {
        typeof n[i] > "u"
          ? (n[i] = e[i])
          : Ic(e[i]) &&
            Ic(n[i]) &&
            Object.keys(e[i]).length > 0 &&
            qa(n[i], e[i]);
      });
  }
  const zc = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function sr() {
    const n = typeof document < "u" ? document : {};
    return qa(n, zc), n;
  }
  const Pf = {
    document: zc,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(n) {
      return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
    },
    cancelAnimationFrame(n) {
      typeof setTimeout > "u" || clearTimeout(n);
    },
  };
  function nt() {
    const n = typeof window < "u" ? window : {};
    return qa(n, Pf), n;
  }
  function Mf(n) {
    return (
      n === void 0 && (n = ""),
      n
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function kf(n) {
    const e = n;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {}
      try {
        delete e[t];
      } catch {}
    });
  }
  function Xa(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e);
  }
  function gs() {
    return Date.now();
  }
  function Of(n) {
    const e = nt();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(n, null)),
      !t && n.currentStyle && (t = n.currentStyle),
      t || (t = n.style),
      t
    );
  }
  function Lf(n, e) {
    e === void 0 && (e = "x");
    const t = nt();
    let i, r, s;
    const a = Of(n);
    return (
      t.WebKitCSSMatrix
        ? ((r = a.transform || a.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((s =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (r = s.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (r = s.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function ms(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      n.constructor &&
      Object.prototype.toString.call(n).slice(8, -1) === "Object"
    );
  }
  function Df(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? n instanceof HTMLElement
      : n && (n.nodeType === 1 || n.nodeType === 11);
  }
  function St() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Df(i)) {
        const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, a = r.length; s < a; s += 1) {
          const o = r[s],
            l = Object.getOwnPropertyDescriptor(i, o);
          l !== void 0 &&
            l.enumerable &&
            (ms(n[o]) && ms(i[o])
              ? i[o].__swiper__
                ? (n[o] = i[o])
                : St(n[o], i[o])
              : !ms(n[o]) && ms(i[o])
              ? ((n[o] = {}), i[o].__swiper__ ? (n[o] = i[o]) : St(n[o], i[o]))
              : (n[o] = i[o]));
        }
      }
    }
    return n;
  }
  function _s(n, e, t) {
    n.style.setProperty(e, t);
  }
  function Rc(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = nt(),
      s = -e.translate;
    let a = null,
      o;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > s ? "next" : "prev",
      u = (p, f) => (c === "next" && p >= f) || (c === "prev" && p <= f),
      d = () => {
        (o = new Date().getTime()), a === null && (a = o);
        const p = Math.max(Math.min((o - a) / l, 1), 0),
          f = 0.5 - Math.cos(p * Math.PI) / 2;
        let g = s + f * (t - s);
        if ((u(g, t) && (g = t), e.wrapperEl.scrollTo({ [i]: g }), u(g, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: g });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(d);
      };
    d();
  }
  function ti(n, e) {
    e === void 0 && (e = "");
    const t = nt(),
      i = [...n.children];
    return (
      t.HTMLSlotElement &&
        n instanceof HTMLSlotElement &&
        i.push(...n.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function If(n, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const i = t.shift();
      if (n === i) return !0;
      t.push(
        ...i.children,
        ...(i.shadowRoot ? i.shadowRoot.children : []),
        ...(i.assignedElements ? i.assignedElements() : [])
      );
    }
  }
  function zf(n, e) {
    const t = nt();
    let i = e.contains(n);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(n)), i || (i = If(n, e))),
      i
    );
  }
  function vs(n) {
    try {
      console.warn(n);
      return;
    } catch {}
  }
  function ws(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...(Array.isArray(e) ? e : Mf(e))), t;
  }
  function Rf(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function Bf(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function Mi(n, e) {
    return nt().getComputedStyle(n, null).getPropertyValue(e);
  }
  function ys(n) {
    let e = n,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Bc(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function ja(n, e, t) {
    const i = nt();
    return t
      ? n[e === "width" ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(n, null)
              .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(n, null)
              .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
          )
      : n.offsetWidth;
  }
  function Le(n) {
    return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
  }
  let Ua;
  function Ff() {
    const n = nt(),
      e = sr();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in n ||
        (n.DocumentTouch && e instanceof n.DocumentTouch)
      ),
    };
  }
  function Fc() {
    return Ua || (Ua = Ff()), Ua;
  }
  let Qa;
  function Gf(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = Fc(),
      i = nt(),
      r = i.navigator.platform,
      s = e || i.navigator.userAgent,
      a = { ios: !1, android: !1 },
      o = i.screen.width,
      l = i.screen.height,
      c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = s.match(/(iPad).*OS\s([\d_]+)/);
    const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      f = r === "Win32";
    let g = r === "MacIntel";
    const h = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !u &&
        g &&
        t.touch &&
        h.indexOf(`${o}x${l}`) >= 0 &&
        ((u = s.match(/(Version)\/([\d.]+)/)),
        u || (u = [0, 1, "13_0_0"]),
        (g = !1)),
      c && !f && ((a.os = "android"), (a.android = !0)),
      (u || p || d) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function Gc(n) {
    return n === void 0 && (n = {}), Qa || (Qa = Gf(n)), Qa;
  }
  let Za;
  function Nf() {
    const n = nt(),
      e = Gc();
    let t = !1;
    function i() {
      const o = n.navigator.userAgent.toLowerCase();
      return (
        o.indexOf("safari") >= 0 &&
        o.indexOf("chrome") < 0 &&
        o.indexOf("android") < 0
      );
    }
    if (i()) {
      const o = String(n.navigator.userAgent);
      if (o.includes("Version/")) {
        const [l, c] = o
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((u) => Number(u));
        t = l < 16 || (l === 16 && c < 2);
      }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        n.navigator.userAgent
      ),
      s = i(),
      a = s || (r && e.ios);
    return {
      isSafari: t || s,
      needPerspectiveFix: t,
      need3dFix: a,
      isWebView: r,
    };
  }
  function Nc() {
    return Za || (Za = Nf()), Za;
  }
  function Yf(n) {
    let { swiper: e, on: t, emit: i } = n;
    const r = nt();
    let s = null,
      a = null;
    const o = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      l = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((d) => {
            a = r.requestAnimationFrame(() => {
              const { width: p, height: f } = e;
              let g = p,
                h = f;
              d.forEach((w) => {
                let { contentBoxSize: b, contentRect: m, target: _ } = w;
                (_ && _ !== e.el) ||
                  ((g = m ? m.width : (b[0] || b).inlineSize),
                  (h = m ? m.height : (b[0] || b).blockSize));
              }),
                (g !== p || h !== f) && o();
            });
          })),
          s.observe(e.el));
      },
      c = () => {
        a && r.cancelAnimationFrame(a),
          s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      u = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", o),
        r.addEventListener("orientationchange", u);
    }),
      t("destroy", () => {
        c(),
          r.removeEventListener("resize", o),
          r.removeEventListener("orientationchange", u);
      });
  }
  function Vf(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = [],
      a = nt(),
      o = function (u, d) {
        d === void 0 && (d = {});
        const p = a.MutationObserver || a.WebkitMutationObserver,
          f = new p((g) => {
            if (e.__preventObserver__) return;
            if (g.length === 1) {
              r("observerUpdate", g[0]);
              return;
            }
            const h = function () {
              r("observerUpdate", g[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(h)
              : a.setTimeout(h, 0);
          });
        f.observe(u, {
          attributes: typeof d.attributes > "u" ? !0 : d.attributes,
          childList:
            e.isElement || (typeof d.childList > "u" ? !0 : d).childList,
          characterData: typeof d.characterData > "u" ? !0 : d.characterData,
        }),
          s.push(f);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const u = Bc(e.hostEl);
            for (let d = 0; d < u.length; d += 1) o(u[d]);
          }
          o(e.hostEl, { childList: e.params.observeSlideChildren }),
            o(e.wrapperEl, { attributes: !1 });
        }
      },
      c = () => {
        s.forEach((u) => {
          u.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", c);
  }
  var $f = {
    on(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = t ? "unshift" : "push";
      return (
        n.split(" ").forEach((s) => {
          i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][r](e);
        }),
        i
      );
    },
    once(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function r() {
        i.off(n, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++)
          a[o] = arguments[o];
        e.apply(i, a);
      }
      return (r.__emitterProxy = e), i.on(n, r, t);
    },
    onAny(n, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
      );
    },
    offAny(n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(n);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(n, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          n.split(" ").forEach((i) => {
            typeof e > "u"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].forEach((r, s) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    t.eventsListeners[i].splice(s, 1);
                });
          }),
        t
      );
    },
    emit() {
      const n = this;
      if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
      let e, t, i;
      for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
        s[a] = arguments[a];
      return (
        typeof s[0] == "string" || Array.isArray(s[0])
          ? ((e = s[0]), (t = s.slice(1, s.length)), (i = n))
          : ((e = s[0].events), (t = s[0].data), (i = s[0].context || n)),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
          n.eventsAnyListeners &&
            n.eventsAnyListeners.length &&
            n.eventsAnyListeners.forEach((c) => {
              c.apply(i, [l, ...t]);
            }),
            n.eventsListeners &&
              n.eventsListeners[l] &&
              n.eventsListeners[l].forEach((c) => {
                c.apply(i, t);
              });
        }),
        n
      );
    },
  };
  function Hf() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null
      ? (e = n.params.width)
      : (e = i.clientWidth),
      typeof n.params.height < "u" && n.params.height !== null
        ? (t = n.params.height)
        : (t = i.clientHeight),
      !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
        ((e =
          e -
          parseInt(Mi(i, "padding-left") || 0, 10) -
          parseInt(Mi(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(Mi(i, "padding-top") || 0, 10) -
          parseInt(Mi(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(n, {
          width: e,
          height: t,
          size: n.isHorizontal() ? e : t,
        }));
  }
  function Wf() {
    const n = this;
    function e(A, k) {
      return parseFloat(A.getPropertyValue(n.getDirectionLabel(k)) || 0);
    }
    const t = n.params,
      { wrapperEl: i, slidesEl: r, size: s, rtlTranslate: a, wrongRTL: o } = n,
      l = n.virtual && t.virtual.enabled,
      c = l ? n.virtual.slides.length : n.slides.length,
      u = ti(r, `.${n.params.slideClass}, swiper-slide`),
      d = l ? n.virtual.slides.length : u.length;
    let p = [];
    const f = [],
      g = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(n));
    let w = t.slidesOffsetAfter;
    typeof w == "function" && (w = t.slidesOffsetAfter.call(n));
    const b = n.snapGrid.length,
      m = n.slidesGrid.length;
    let _ = t.spaceBetween,
      v = -h,
      y = 0,
      x = 0;
    if (typeof s > "u") return;
    typeof _ == "string" && _.indexOf("%") >= 0
      ? (_ = (parseFloat(_.replace("%", "")) / 100) * s)
      : typeof _ == "string" && (_ = parseFloat(_)),
      (n.virtualSize = -_),
      u.forEach((A) => {
        a ? (A.style.marginLeft = "") : (A.style.marginRight = ""),
          (A.style.marginBottom = ""),
          (A.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (_s(i, "--swiper-centered-offset-before", ""),
        _s(i, "--swiper-centered-offset-after", ""));
    const S = t.grid && t.grid.rows > 1 && n.grid;
    S ? n.grid.initSlides(u) : n.grid && n.grid.unsetSlides();
    let C;
    const E =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (A) => typeof t.breakpoints[A].slidesPerView < "u"
      ).length > 0;
    for (let A = 0; A < d; A += 1) {
      C = 0;
      let k;
      if (
        (u[A] && (k = u[A]),
        S && n.grid.updateSlide(A, k, u),
        !(u[A] && Mi(k, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          E && (u[A].style[n.getDirectionLabel("width")] = "");
          const M = getComputedStyle(k),
            L = k.style.transform,
            z = k.style.webkitTransform;
          if (
            (L && (k.style.transform = "none"),
            z && (k.style.webkitTransform = "none"),
            t.roundLengths)
          )
            C = n.isHorizontal() ? ja(k, "width", !0) : ja(k, "height", !0);
          else {
            const B = e(M, "width"),
              O = e(M, "padding-left"),
              R = e(M, "padding-right"),
              N = e(M, "margin-left"),
              Z = e(M, "margin-right"),
              T = M.getPropertyValue("box-sizing");
            if (T && T === "border-box") C = B + N + Z;
            else {
              const { clientWidth: ie, offsetWidth: Re } = k;
              C = B + O + R + N + Z + (Re - ie);
            }
          }
          L && (k.style.transform = L),
            z && (k.style.webkitTransform = z),
            t.roundLengths && (C = Math.floor(C));
        } else
          (C = (s - (t.slidesPerView - 1) * _) / t.slidesPerView),
            t.roundLengths && (C = Math.floor(C)),
            u[A] && (u[A].style[n.getDirectionLabel("width")] = `${C}px`);
        u[A] && (u[A].swiperSlideSize = C),
          g.push(C),
          t.centeredSlides
            ? ((v = v + C / 2 + y / 2 + _),
              y === 0 && A !== 0 && (v = v - s / 2 - _),
              A === 0 && (v = v - s / 2 - _),
              Math.abs(v) < 1 / 1e3 && (v = 0),
              t.roundLengths && (v = Math.floor(v)),
              x % t.slidesPerGroup === 0 && p.push(v),
              f.push(v))
            : (t.roundLengths && (v = Math.floor(v)),
              (x - Math.min(n.params.slidesPerGroupSkip, x)) %
                n.params.slidesPerGroup ===
                0 && p.push(v),
              f.push(v),
              (v = v + C + _)),
          (n.virtualSize += C + _),
          (y = C),
          (x += 1);
      }
    }
    if (
      ((n.virtualSize = Math.max(n.virtualSize, s) + w),
      a &&
        o &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${n.virtualSize + _}px`),
      t.setWrapperSize &&
        (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + _}px`),
      S && n.grid.updateWrapperSize(C, p),
      !t.centeredSlides)
    ) {
      const A = [];
      for (let k = 0; k < p.length; k += 1) {
        let M = p[k];
        t.roundLengths && (M = Math.floor(M)),
          p[k] <= n.virtualSize - s && A.push(M);
      }
      (p = A),
        Math.floor(n.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
          p.push(n.virtualSize - s);
    }
    if (l && t.loop) {
      const A = g[0] + _;
      if (t.slidesPerGroup > 1) {
        const k = Math.ceil(
            (n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup
          ),
          M = A * t.slidesPerGroup;
        for (let L = 0; L < k; L += 1) p.push(p[p.length - 1] + M);
      }
      for (
        let k = 0;
        k < n.virtual.slidesBefore + n.virtual.slidesAfter;
        k += 1
      )
        t.slidesPerGroup === 1 && p.push(p[p.length - 1] + A),
          f.push(f[f.length - 1] + A),
          (n.virtualSize += A);
    }
    if ((p.length === 0 && (p = [0]), _ !== 0)) {
      const A =
        n.isHorizontal() && a
          ? "marginLeft"
          : n.getDirectionLabel("marginRight");
      u.filter((k, M) =>
        !t.cssMode || t.loop ? !0 : M !== u.length - 1
      ).forEach((k) => {
        k.style[A] = `${_}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let A = 0;
      g.forEach((M) => {
        A += M + (_ || 0);
      }),
        (A -= _);
      const k = A > s ? A - s : 0;
      p = p.map((M) => (M <= 0 ? -h : M > k ? k + w : M));
    }
    if (t.centerInsufficientSlides) {
      let A = 0;
      g.forEach((M) => {
        A += M + (_ || 0);
      }),
        (A -= _);
      const k = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (A + k < s) {
        const M = (s - A - k) / 2;
        p.forEach((L, z) => {
          p[z] = L - M;
        }),
          f.forEach((L, z) => {
            f[z] = L + M;
          });
      }
    }
    if (
      (Object.assign(n, {
        slides: u,
        snapGrid: p,
        slidesGrid: f,
        slidesSizesGrid: g,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      _s(i, "--swiper-centered-offset-before", `${-p[0]}px`),
        _s(
          i,
          "--swiper-centered-offset-after",
          `${n.size / 2 - g[g.length - 1] / 2}px`
        );
      const A = -n.snapGrid[0],
        k = -n.slidesGrid[0];
      (n.snapGrid = n.snapGrid.map((M) => M + A)),
        (n.slidesGrid = n.slidesGrid.map((M) => M + k));
    }
    if (
      (d !== c && n.emit("slidesLengthChange"),
      p.length !== b &&
        (n.params.watchOverflow && n.checkOverflow(),
        n.emit("snapGridLengthChange")),
      f.length !== m && n.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && n.updateSlidesOffset(),
      n.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const A = `${t.containerModifierClass}backface-hidden`,
        k = n.el.classList.contains(A);
      d <= t.maxBackfaceHiddenSlides
        ? k || n.el.classList.add(A)
        : k && n.el.classList.remove(A);
    }
  }
  function qf(n) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof n == "number"
      ? e.setTransition(n)
      : n === !0 && e.setTransition(e.params.speed);
    const a = (o) => (i ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((o) => {
          t.push(o);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const o = e.activeIndex + s;
          if (o > e.slides.length && !i) break;
          t.push(a(o));
        }
    else t.push(a(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] < "u") {
        const o = t[s].offsetHeight;
        r = o > r ? o : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function Xf() {
    const n = this,
      e = n.slides,
      t = n.isElement
        ? n.isHorizontal()
          ? n.wrapperEl.offsetLeft
          : n.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset =
        (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
        t -
        n.cssOverflowAdjustment();
  }
  const Yc = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function jf(n) {
    n === void 0 && (n = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -n;
    r && (a = n), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let o = t.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0
      ? (o = (parseFloat(o.replace("%", "")) / 100) * e.size)
      : typeof o == "string" && (o = parseFloat(o));
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l];
      let u = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
      const d =
          (a + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (c.swiperSlideSize + o),
        p =
          (a - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
          (c.swiperSlideSize + o),
        f = -(a - u),
        g = f + e.slidesSizesGrid[l],
        h = f >= 0 && f <= e.size - e.slidesSizesGrid[l],
        w =
          (f >= 0 && f < e.size - 1) ||
          (g > 1 && g <= e.size) ||
          (f <= 0 && g >= e.size);
      w && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l)),
        Yc(c, w, t.slideVisibleClass),
        Yc(c, h, t.slideFullyVisibleClass),
        (c.progress = r ? -d : d),
        (c.originalProgress = r ? -p : p);
    }
  }
  function Uf(n) {
    const e = this;
    if (typeof n > "u") {
      const u = e.rtlTranslate ? -1 : 1;
      n = (e && e.translate && e.translate * u) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: a, progressLoop: o } = e;
    const l = s,
      c = a;
    if (i === 0) (r = 0), (s = !0), (a = !0);
    else {
      r = (n - e.minTranslate()) / i;
      const u = Math.abs(n - e.minTranslate()) < 1,
        d = Math.abs(n - e.maxTranslate()) < 1;
      (s = u || r <= 0), (a = d || r >= 1), u && (r = 0), d && (r = 1);
    }
    if (t.loop) {
      const u = e.getSlideIndexByData(0),
        d = e.getSlideIndexByData(e.slides.length - 1),
        p = e.slidesGrid[u],
        f = e.slidesGrid[d],
        g = e.slidesGrid[e.slidesGrid.length - 1],
        h = Math.abs(n);
      h >= p ? (o = (h - p) / g) : (o = (h + g - f) / g), o > 1 && (o -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: o,
      isBeginning: s,
      isEnd: a,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(n),
      s && !l && e.emit("reachBeginning toEdge"),
      a && !c && e.emit("reachEnd toEdge"),
      ((l && !s) || (c && !a)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Ka = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function Qf() {
    const n = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = n,
      s = n.virtual && t.virtual.enabled,
      a = n.grid && t.grid && t.grid.rows > 1,
      o = (d) => ti(i, `.${t.slideClass}${d}, swiper-slide${d}`)[0];
    let l, c, u;
    if (s)
      if (t.loop) {
        let d = r - n.virtual.slidesBefore;
        d < 0 && (d = n.virtual.slides.length + d),
          d >= n.virtual.slides.length && (d -= n.virtual.slides.length),
          (l = o(`[data-swiper-slide-index="${d}"]`));
      } else l = o(`[data-swiper-slide-index="${r}"]`);
    else
      a
        ? ((l = e.find((d) => d.column === r)),
          (u = e.find((d) => d.column === r + 1)),
          (c = e.find((d) => d.column === r - 1)))
        : (l = e[r]);
    l &&
      (a ||
        ((u = Bf(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u && (u = e[0]),
        (c = Rf(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c === 0 && (c = e[e.length - 1]))),
      e.forEach((d) => {
        Ka(d, d === l, t.slideActiveClass),
          Ka(d, d === u, t.slideNextClass),
          Ka(d, d === c, t.slidePrevClass);
      }),
      n.emitSlidesClasses();
  }
  const bs = (n, e) => {
      if (!n || n.destroyed || !n.params) return;
      const t = () =>
          n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !r &&
          n.isElement &&
          (i.shadowRoot
            ? (r = i.shadowRoot.querySelector(
                `.${n.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((r = i.shadowRoot.querySelector(
                    `.${n.params.lazyPreloaderClass}`
                  )),
                  r && r.remove());
              })),
          r && r.remove();
      }
    },
    Ja = (n, e) => {
      if (!n.slides[e]) return;
      const t = n.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    eo = (n) => {
      if (!n || n.destroyed || !n.params) return;
      let e = n.params.lazyPreloadPrevNext;
      const t = n.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i =
          n.params.slidesPerView === "auto"
            ? n.slidesPerViewDynamic()
            : Math.ceil(n.params.slidesPerView),
        r = n.activeIndex;
      if (n.params.grid && n.params.grid.rows > 1) {
        const a = r,
          o = [a - e];
        o.push(...Array.from({ length: e }).map((l, c) => a + i + c)),
          n.slides.forEach((l, c) => {
            o.includes(l.column) && Ja(n, c);
          });
        return;
      }
      const s = r + i - 1;
      if (n.params.rewind || n.params.loop)
        for (let a = r - e; a <= s + e; a += 1) {
          const o = ((a % t) + t) % t;
          (o < r || o > s) && Ja(n, o);
        }
      else
        for (let a = Math.max(r - e, 0); a <= Math.min(s + e, t - 1); a += 1)
          a !== r && (a > s || a < r) && Ja(n, a);
    };
  function Zf(n) {
    const { slidesGrid: e, params: t } = n,
      i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] < "u"
        ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
          ? (r = s)
          : i >= e[s] && i < e[s + 1] && (r = s + 1)
        : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
  }
  function Kf(n) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: s,
        realIndex: a,
        snapIndex: o,
      } = e;
    let l = n,
      c;
    const u = (f) => {
      let g = f - e.virtual.slidesBefore;
      return (
        g < 0 && (g = e.virtual.slides.length + g),
        g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
        g
      );
    };
    if ((typeof l > "u" && (l = Zf(e)), i.indexOf(t) >= 0)) c = i.indexOf(t);
    else {
      const f = Math.min(r.slidesPerGroupSkip, l);
      c = f + Math.floor((l - f) / r.slidesPerGroup);
    }
    if ((c >= i.length && (c = i.length - 1), l === s && !e.params.loop)) {
      c !== o && ((e.snapIndex = c), e.emit("snapIndexChange"));
      return;
    }
    if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = u(l);
      return;
    }
    const d = e.grid && r.grid && r.grid.rows > 1;
    let p;
    if (e.virtual && r.virtual.enabled && r.loop) p = u(l);
    else if (d) {
      const f = e.slides.find((h) => h.column === l);
      let g = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(f), 0)),
        (p = Math.floor(g / r.grid.rows));
    } else if (e.slides[l]) {
      const f = e.slides[l].getAttribute("data-swiper-slide-index");
      f ? (p = parseInt(f, 10)) : (p = l);
    } else p = l;
    Object.assign(e, {
      previousSnapIndex: o,
      snapIndex: c,
      previousRealIndex: a,
      realIndex: p,
      previousIndex: s,
      activeIndex: l,
    }),
      e.initialized && eo(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (a !== p && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Jf(n, e) {
    const t = this,
      i = t.params;
    let r = n.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(n) &&
      [...e.slice(e.indexOf(n) + 1, e.length)].forEach((o) => {
        !r &&
          o.matches &&
          o.matches(`.${i.slideClass}, swiper-slide`) &&
          (r = o);
      });
    let s = !1,
      a;
    if (r) {
      for (let o = 0; o < t.slides.length; o += 1)
        if (t.slides[o] === r) {
          (s = !0), (a = o);
          break;
        }
    }
    if (r && s)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = a);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var ep = {
    updateSize: Hf,
    updateSlides: Wf,
    updateAutoHeight: qf,
    updateSlidesOffset: Xf,
    updateSlidesProgress: jf,
    updateProgress: Uf,
    updateSlidesClasses: Qf,
    updateActiveIndex: Kf,
    updateClickedSlide: Jf,
  };
  function tp(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let a = Lf(s, n);
    return (a += e.cssOverflowAdjustment()), i && (a = -a), a || 0;
  }
  function ip(n, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: s, progress: a } = t;
    let o = 0,
      l = 0;
    const c = 0;
    t.isHorizontal() ? (o = i ? -n : n) : (l = n),
      r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? o : l),
      r.cssMode
        ? (s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -o
            : -l)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (o -= t.cssOverflowAdjustment())
            : (l -= t.cssOverflowAdjustment()),
          (s.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`));
    let u;
    const d = t.maxTranslate() - t.minTranslate();
    d === 0 ? (u = 0) : (u = (n - t.minTranslate()) / d),
      u !== a && t.updateProgress(n),
      t.emit("setTranslate", t.translate, e);
  }
  function rp() {
    return -this.snapGrid[0];
  }
  function np() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function sp(n, e, t, i, r) {
    n === void 0 && (n = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const s = this,
      { params: a, wrapperEl: o } = s;
    if (s.animating && a.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      c = s.maxTranslate();
    let u;
    if (
      (i && n > l ? (u = l) : i && n < c ? (u = c) : (u = n),
      s.updateProgress(u),
      a.cssMode)
    ) {
      const d = s.isHorizontal();
      if (e === 0) o[d ? "scrollLeft" : "scrollTop"] = -u;
      else {
        if (!s.support.smoothScroll)
          return (
            Rc({ swiper: s, targetPosition: -u, side: d ? "left" : "top" }), !0
          );
        o.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(u),
          t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(u),
          t &&
            (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (p) {
                !s ||
                  s.destroyed ||
                  (p.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    (s.animating = !1),
                    t && s.emit("transitionEnd")));
              }),
            s.wrapperEl.addEventListener(
              "transitionend",
              s.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var ap = {
    getTranslate: tp,
    setTranslate: ip,
    minTranslate: rp,
    maxTranslate: np,
    translateTo: sp,
  };
  function op(n, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${n}ms`),
      (t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
      t.emit("setTransition", n, e);
  }
  function Vc(n) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = n;
    const { activeIndex: s, previousIndex: a } = e;
    let o = i;
    if (
      (o || (s > a ? (o = "next") : s < a ? (o = "prev") : (o = "reset")),
      e.emit(`transition${r}`),
      t && s !== a)
    ) {
      if (o === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        o === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  function lp(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      Vc({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
  }
  function cp(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        Vc({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
  }
  var up = { setTransition: op, transitionStart: lp, transitionEnd: cp };
  function dp(n, e, t, i, r) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let a = n;
    a < 0 && (a = 0);
    const {
      params: o,
      snapGrid: l,
      slidesGrid: c,
      previousIndex: u,
      activeIndex: d,
      rtlTranslate: p,
      wrapperEl: f,
      enabled: g,
    } = s;
    if (
      (!g && !i && !r) ||
      s.destroyed ||
      (s.animating && o.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const h = Math.min(s.params.slidesPerGroupSkip, a);
    let w = h + Math.floor((a - h) / s.params.slidesPerGroup);
    w >= l.length && (w = l.length - 1);
    const b = -l[w];
    if (o.normalizeSlideIndex)
      for (let S = 0; S < c.length; S += 1) {
        const C = -Math.floor(b * 100),
          E = Math.floor(c[S] * 100),
          A = Math.floor(c[S + 1] * 100);
        typeof c[S + 1] < "u"
          ? C >= E && C < A - (A - E) / 2
            ? (a = S)
            : C >= E && C < A && (a = S + 1)
          : C >= E && (a = S);
      }
    if (
      s.initialized &&
      a !== d &&
      ((!s.allowSlideNext &&
        (p
          ? b > s.translate && b > s.minTranslate()
          : b < s.translate && b < s.minTranslate())) ||
        (!s.allowSlidePrev &&
          b > s.translate &&
          b > s.maxTranslate() &&
          (d || 0) !== a))
    )
      return !1;
    a !== (u || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(b);
    let m;
    a > d ? (m = "next") : a < d ? (m = "prev") : (m = "reset");
    const _ = s.virtual && s.params.virtual.enabled;
    if (!(_ && r) && ((p && -b === s.translate) || (!p && b === s.translate)))
      return (
        s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(b),
        m !== "reset" && (s.transitionStart(t, m), s.transitionEnd(t, m)),
        !1
      );
    if (o.cssMode) {
      const S = s.isHorizontal(),
        C = p ? b : -b;
      if (e === 0)
        _ &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          _ && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                f[S ? "scrollLeft" : "scrollTop"] = C;
              }))
            : (f[S ? "scrollLeft" : "scrollTop"] = C),
          _ &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            Rc({ swiper: s, targetPosition: C, side: S ? "left" : "top" }), !0
          );
        f.scrollTo({ [S ? "left" : "top"]: C, behavior: "smooth" });
      }
      return !0;
    }
    const x = Nc().isSafari;
    return (
      _ && !r && x && s.isElement && s.virtual.update(!1, !1, a),
      s.setTransition(e),
      s.setTranslate(b),
      s.updateActiveIndex(a),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, m),
      e === 0
        ? s.transitionEnd(t, m)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (C) {
              !s ||
                s.destroyed ||
                (C.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(t, m)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function fp(n, e, t, i) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const s = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = n;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled) a = a + r.virtual.slidesBefore;
      else {
        let o;
        if (s) {
          const p = a * r.params.grid.rows;
          o = r.slides.find(
            (f) => f.getAttribute("data-swiper-slide-index") * 1 === p
          ).column;
        } else o = r.getSlideIndexByData(a);
        const l = s
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: c } = r.params;
        let u = r.params.slidesPerView;
        u === "auto"
          ? (u = r.slidesPerViewDynamic())
          : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            c && u % 2 === 0 && (u = u + 1));
        let d = l - o < u;
        if (
          (c && (d = d || o < Math.ceil(u / 2)),
          i && c && r.params.slidesPerView !== "auto" && !s && (d = !1),
          d)
        ) {
          const p = c
            ? o < r.activeIndex
              ? "prev"
              : "next"
            : o - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
          r.loopFix({
            direction: p,
            slideTo: !0,
            activeSlideIndex: p === "next" ? o + 1 : o - l + 1,
            slideRealIndex: p === "next" ? r.realIndex : void 0,
          });
        }
        if (s) {
          const p = a * r.params.grid.rows;
          a = r.slides.find(
            (f) => f.getAttribute("data-swiper-slide-index") * 1 === p
          ).column;
        } else a = r.getSlideIndexByData(a);
      }
    return (
      requestAnimationFrame(() => {
        r.slideTo(a, e, t, i);
      }),
      r
    );
  }
  function pp(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: r, params: s, animating: a } = i;
    if (!r || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    let o = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o,
      c = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (a && !c && s.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && s.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, n, e, t);
          }),
          !0
        );
    }
    return s.rewind && i.isEnd
      ? i.slideTo(0, n, e, t)
      : i.slideTo(i.activeIndex + l, n, e, t);
  }
  function hp(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: s,
        slidesGrid: a,
        rtlTranslate: o,
        enabled: l,
        animating: c,
      } = i;
    if (!l || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    const u = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (c && !u && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const d = o ? i.translate : -i.translate;
    function p(m) {
      return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
    }
    const f = p(d),
      g = s.map((m) => p(m)),
      h = r.freeMode && r.freeMode.enabled;
    let w = s[g.indexOf(f) - 1];
    if (typeof w > "u" && (r.cssMode || h)) {
      let m;
      s.forEach((_, v) => {
        f >= _ && (m = v);
      }),
        typeof m < "u" && (w = h ? s[m] : s[m > 0 ? m - 1 : m]);
    }
    let b = 0;
    if (
      (typeof w < "u" &&
        ((b = a.indexOf(w)),
        b < 0 && (b = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((b = b - i.slidesPerViewDynamic("previous", !0) + 1),
          (b = Math.max(b, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const m =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(m, n, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(b, n, e, t);
        }),
        !0
      );
    return i.slideTo(b, n, e, t);
  }
  function gp(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof n > "u" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
      );
  }
  function mp(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof n > "u" && (n = r.params.speed);
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s),
      o = a + Math.floor((s - a) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
      const c = r.snapGrid[o],
        u = r.snapGrid[o + 1];
      l - c > (u - c) * i && (s += r.params.slidesPerGroup);
    } else {
      const c = r.snapGrid[o - 1],
        u = r.snapGrid[o];
      l - c <= (u - c) * i && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, n, e, t)
    );
  }
  function _p() {
    const n = this;
    if (n.destroyed) return;
    const { params: e, slidesEl: t } = n,
      i =
        e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex,
      s;
    const a = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (n.animating) return;
      (s = parseInt(
        n.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? r < n.loopedSlides - i / 2 ||
            r > n.slides.length - n.loopedSlides + i / 2
            ? (n.loopFix(),
              (r = n.getSlideIndex(
                ti(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
              )),
              Xa(() => {
                n.slideTo(r);
              }))
            : n.slideTo(r)
          : r > n.slides.length - i
          ? (n.loopFix(),
            (r = n.getSlideIndex(
              ti(t, `${a}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Xa(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r);
    } else n.slideTo(r);
  }
  var vp = {
    slideTo: dp,
    slideToLoop: fp,
    slideNext: pp,
    slidePrev: hp,
    slideReset: gp,
    slideToClosest: mp,
    slideToClickedSlide: _p,
  };
  function wp(n, e) {
    const t = this,
      { params: i, slidesEl: r } = t;
    if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
    const s = () => {
        ti(r, `.${i.slideClass}, swiper-slide`).forEach((p, f) => {
          p.setAttribute("data-swiper-slide-index", f);
        });
      },
      a = t.grid && i.grid && i.grid.rows > 1,
      o = i.slidesPerGroup * (a ? i.grid.rows : 1),
      l = t.slides.length % o !== 0,
      c = a && t.slides.length % i.grid.rows !== 0,
      u = (d) => {
        for (let p = 0; p < d; p += 1) {
          const f = t.isElement
            ? ws("swiper-slide", [i.slideBlankClass])
            : ws("div", [i.slideClass, i.slideBlankClass]);
          t.slidesEl.append(f);
        }
      };
    if (l) {
      if (i.loopAddBlankSlides) {
        const d = o - (t.slides.length % o);
        u(d), t.recalcSlides(), t.updateSlides();
      } else
        vs(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else if (c) {
      if (i.loopAddBlankSlides) {
        const d = i.grid.rows - (t.slides.length % i.grid.rows);
        u(d), t.recalcSlides(), t.updateSlides();
      } else
        vs(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      s();
    } else s();
    t.loopFix({
      slideRealIndex: n,
      direction: i.centeredSlides ? void 0 : "next",
      initial: e,
    });
  }
  function yp(n) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: s,
      initial: a,
      byController: o,
      byMousewheel: l,
    } = n === void 0 ? {} : n;
    const c = this;
    if (!c.params.loop) return;
    c.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: d,
        allowSlideNext: p,
        slidesEl: f,
        params: g,
      } = c,
      { centeredSlides: h, initialSlide: w } = g;
    if (
      ((c.allowSlidePrev = !0),
      (c.allowSlideNext = !0),
      c.virtual && g.virtual.enabled)
    ) {
      t &&
        (!g.centeredSlides && c.snapIndex === 0
          ? c.slideTo(c.virtual.slides.length, 0, !1, !0)
          : g.centeredSlides && c.snapIndex < g.slidesPerView
          ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
          : c.snapIndex === c.snapGrid.length - 1 &&
            c.slideTo(c.virtual.slidesBefore, 0, !1, !0)),
        (c.allowSlidePrev = d),
        (c.allowSlideNext = p),
        c.emit("loopFix");
      return;
    }
    let b = g.slidesPerView;
    b === "auto"
      ? (b = c.slidesPerViewDynamic())
      : ((b = Math.ceil(parseFloat(g.slidesPerView, 10))),
        h && b % 2 === 0 && (b = b + 1));
    const m = g.slidesPerGroupAuto ? b : g.slidesPerGroup;
    let _ = m;
    _ % m !== 0 && (_ += m - (_ % m)),
      (_ += g.loopAdditionalSlides),
      (c.loopedSlides = _);
    const v = c.grid && g.grid && g.grid.rows > 1;
    u.length < b + _ || (c.params.effect === "cards" && u.length < b + _ * 2)
      ? vs(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : v &&
        g.grid.fill === "row" &&
        vs(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const y = [],
      x = [],
      S = v ? Math.ceil(u.length / g.grid.rows) : u.length,
      C = a && S - w < b && !h;
    let E = C ? w : c.activeIndex;
    typeof s > "u"
      ? (s = c.getSlideIndex(
          u.find((O) => O.classList.contains(g.slideActiveClass))
        ))
      : (E = s);
    const A = i === "next" || !i,
      k = i === "prev" || !i;
    let M = 0,
      L = 0;
    const B = (v ? u[s].column : s) + (h && typeof r > "u" ? -b / 2 + 0.5 : 0);
    if (B < _) {
      M = Math.max(_ - B, m);
      for (let O = 0; O < _ - B; O += 1) {
        const R = O - Math.floor(O / S) * S;
        if (v) {
          const N = S - R - 1;
          for (let Z = u.length - 1; Z >= 0; Z -= 1)
            u[Z].column === N && y.push(Z);
        } else y.push(S - R - 1);
      }
    } else if (B + b > S - _) {
      (L = Math.max(B - (S - _ * 2), m)), C && (L = Math.max(L, b - S + w + 1));
      for (let O = 0; O < L; O += 1) {
        const R = O - Math.floor(O / S) * S;
        v
          ? u.forEach((N, Z) => {
              N.column === R && x.push(Z);
            })
          : x.push(R);
      }
    }
    if (
      ((c.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        c.__preventObserver__ = !1;
      }),
      c.params.effect === "cards" &&
        u.length < b + _ * 2 &&
        (x.includes(s) && x.splice(x.indexOf(s), 1),
        y.includes(s) && y.splice(y.indexOf(s), 1)),
      k &&
        y.forEach((O) => {
          (u[O].swiperLoopMoveDOM = !0),
            f.prepend(u[O]),
            (u[O].swiperLoopMoveDOM = !1);
        }),
      A &&
        x.forEach((O) => {
          (u[O].swiperLoopMoveDOM = !0),
            f.append(u[O]),
            (u[O].swiperLoopMoveDOM = !1);
        }),
      c.recalcSlides(),
      g.slidesPerView === "auto"
        ? c.updateSlides()
        : v &&
          ((y.length > 0 && k) || (x.length > 0 && A)) &&
          c.slides.forEach((O, R) => {
            c.grid.updateSlide(R, O, c.slides);
          }),
      g.watchSlidesProgress && c.updateSlidesOffset(),
      t)
    ) {
      if (y.length > 0 && k) {
        if (typeof e > "u") {
          const O = c.slidesGrid[E],
            N = c.slidesGrid[E + M] - O;
          l
            ? c.setTranslate(c.translate - N)
            : (c.slideTo(E + Math.ceil(M), 0, !1, !0),
              r &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - N),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - N)));
        } else if (r) {
          const O = v ? y.length / g.grid.rows : y.length;
          c.slideTo(c.activeIndex + O, 0, !1, !0),
            (c.touchEventsData.currentTranslate = c.translate);
        }
      } else if (x.length > 0 && A)
        if (typeof e > "u") {
          const O = c.slidesGrid[E],
            N = c.slidesGrid[E - L] - O;
          l
            ? c.setTranslate(c.translate - N)
            : (c.slideTo(E - L, 0, !1, !0),
              r &&
                ((c.touchEventsData.startTranslate =
                  c.touchEventsData.startTranslate - N),
                (c.touchEventsData.currentTranslate =
                  c.touchEventsData.currentTranslate - N)));
        } else {
          const O = v ? x.length / g.grid.rows : x.length;
          c.slideTo(c.activeIndex - O, 0, !1, !0);
        }
    }
    if (
      ((c.allowSlidePrev = d),
      (c.allowSlideNext = p),
      c.controller && c.controller.control && !o)
    ) {
      const O = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(c.controller.control)
        ? c.controller.control.forEach((R) => {
            !R.destroyed &&
              R.params.loop &&
              R.loopFix({
                ...O,
                slideTo: R.params.slidesPerView === g.slidesPerView ? t : !1,
              });
          })
        : c.controller.control instanceof c.constructor &&
          c.controller.control.params.loop &&
          c.controller.control.loopFix({
            ...O,
            slideTo:
              c.controller.control.params.slidesPerView === g.slidesPerView
                ? t
                : !1,
          });
    }
    c.emit("loopFix");
  }
  function bp() {
    const n = this,
      { params: e, slidesEl: t } = n;
    if (!e.loop || !t || (n.virtual && n.params.virtual.enabled)) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach((r) => {
      const s =
        typeof r.swiperSlideIndex > "u"
          ? r.getAttribute("data-swiper-slide-index") * 1
          : r.swiperSlideIndex;
      i[s] = r;
    }),
      n.slides.forEach((r) => {
        r.removeAttribute("data-swiper-slide-index");
      }),
      i.forEach((r) => {
        t.append(r);
      }),
      n.recalcSlides(),
      n.slideTo(n.realIndex, 0);
  }
  var xp = { loopCreate: wp, loopFix: yp, loopDestroy: bp };
  function Sp(n) {
    const e = this;
    if (
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (t.style.cursor = "move"),
      (t.style.cursor = n ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Tp() {
    const n = this;
    (n.params.watchOverflow && n.isLocked) ||
      n.params.cssMode ||
      (n.isElement && (n.__preventObserver__ = !0),
      (n[
        n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      n.isElement &&
        requestAnimationFrame(() => {
          n.__preventObserver__ = !1;
        }));
  }
  var Ap = { setGrabCursor: Sp, unsetGrabCursor: Tp };
  function Ep(n, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === sr() || i === nt()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(n);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function $c(n, e, t) {
    const i = nt(),
      { params: r } = n,
      s = r.edgeSwipeDetection,
      a = r.edgeSwipeThreshold;
    return s && (t <= a || t >= i.innerWidth - a)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Cp(n) {
    const e = this,
      t = sr();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      $c(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: s, touches: a, enabled: o } = e;
    if (
      !o ||
      (!s.simulateTouch && i.pointerType === "mouse") ||
      (e.animating && s.preventInteractionOnTransition)
    )
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = i.target;
    if (
      (s.touchEventsTarget === "wrapper" && !zf(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const c = !!s.noSwipingClass && s.noSwipingClass !== "",
      u = i.composedPath ? i.composedPath() : i.path;
    c && i.target && i.target.shadowRoot && u && (l = u[0]);
    const d = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      p = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (p ? Ep(d, l) : l.closest(d))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (a.currentX = i.pageX), (a.currentY = i.pageY);
    const f = a.currentX,
      g = a.currentY;
    if (!$c(e, i, f)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = f),
      (a.startY = g),
      (r.touchStartTime = gs()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1);
    let h = !0;
    l.matches(r.focusableElements) &&
      ((h = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const w = h && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || w) &&
      !l.isContentEditable &&
      i.preventDefault(),
      s.freeMode &&
        s.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !s.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function Pp(n) {
    const e = sr(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: s, rtlTranslate: a, enabled: o } = t;
    if (!o || (!r.simulateTouch && n.pointerType === "mouse")) return;
    let l = n;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (i.touchId !== null || l.pointerId !== i.pointerId))
    )
      return;
    let c;
    if (l.type === "touchmove") {
      if (
        ((c = [...l.changedTouches].find((x) => x.identifier === i.touchId)),
        !c || c.identifier !== i.touchId)
      )
        return;
    } else c = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const u = c.pageX,
      d = c.pageY;
    if (l.preventedByNestedSwiper) {
      (s.startX = u), (s.startY = d);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: u, startY: d, currentX: u, currentY: d }),
          (i.touchStartTime = gs()));
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop)
      if (t.isVertical()) {
        if (
          (d < s.startY && t.translate <= t.maxTranslate()) ||
          (d > s.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else {
        if (
          a &&
          ((u > s.startX && -t.translate <= t.maxTranslate()) ||
            (u < s.startX && -t.translate >= t.minTranslate()))
        )
          return;
        if (
          !a &&
          ((u < s.startX && t.translate <= t.maxTranslate()) ||
            (u > s.startX && t.translate >= t.minTranslate()))
        )
          return;
      }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
      (s.previousX = s.currentX),
      (s.previousY = s.currentY),
      (s.currentX = u),
      (s.currentY = d);
    const p = s.currentX - s.startX,
      f = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(p ** 2 + f ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let x;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : p * p + f * f >= 25 &&
          ((x = (Math.atan2(Math.abs(f), Math.abs(p)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? x > r.touchAngle
            : 90 - x > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", l),
      typeof i.startMoving > "u" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let g = t.isHorizontal() ? p : f,
      h = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    r.oneWayMovement &&
      ((g = Math.abs(g) * (a ? 1 : -1)), (h = Math.abs(h) * (a ? 1 : -1))),
      (s.diff = g),
      (g *= r.touchRatio),
      a && ((g = -g), (h = -h));
    const w = t.touchesDirection;
    (t.swipeDirection = g > 0 ? "prev" : "next"),
      (t.touchesDirection = h > 0 ? "prev" : "next");
    const b = t.params.loop && !r.cssMode,
      m =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (b && m && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const x = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(x);
      }
      (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l);
    }
    let _;
    if (
      (new Date().getTime(),
      r._loopSwapReset !== !1 &&
        i.isMoved &&
        i.allowThresholdMove &&
        w !== t.touchesDirection &&
        b &&
        m &&
        Math.abs(g) >= 1)
    ) {
      Object.assign(s, {
        startX: u,
        startY: d,
        currentX: u,
        currentY: d,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = g + i.startTranslate);
    let v = !0,
      y = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (y = 0),
      g > 0
        ? (b &&
            m &&
            !_ &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > t.minTranslate() &&
            ((v = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + g) ** y)))
        : g < 0 &&
          (b &&
            m &&
            !_ &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (r.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (r.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < t.maxTranslate() &&
            ((v = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - g) ** y))),
      v && (l.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        !t.allowSlideNext &&
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    )
      if (Math.abs(g) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            (s.diff = t.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !r.followFinger ||
      r.cssMode ||
      (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
        r.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function Mp(n) {
    const e = this,
      t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((y) => y.identifier === t.touchId)),
        !r || r.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      r = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(i.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: a,
      touches: o,
      rtlTranslate: l,
      slidesGrid: c,
      enabled: u,
    } = e;
    if (!u || (!a.simulateTouch && i.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", i),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    ) {
      t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        (t.startMoving = !1);
      return;
    }
    a.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const d = gs(),
      p = d - t.touchStartTime;
    if (e.allowClick) {
      const y = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((y && y[0]) || i.target, y),
        e.emit("tap click", i),
        p < 300 &&
          d - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = gs()),
      Xa(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (o.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
      (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
      return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let f;
    if (
      (a.followFinger
        ? (f = l ? e.translate : -e.translate)
        : (f = -t.currentTranslate),
      a.cssMode)
    )
      return;
    if (a.freeMode && a.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: f });
      return;
    }
    const g = f >= -e.maxTranslate() && !e.params.loop;
    let h = 0,
      w = e.slidesSizesGrid[0];
    for (
      let y = 0;
      y < c.length;
      y += y < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const x = y < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof c[y + x] < "u"
        ? (g || (f >= c[y] && f < c[y + x])) && ((h = y), (w = c[y + x] - c[y]))
        : (g || f >= c[y]) &&
          ((h = y), (w = c[c.length - 1] - c[c.length - 2]));
    }
    let b = null,
      m = null;
    a.rewind &&
      (e.isBeginning
        ? (m =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (b = 0));
    const _ = (f - c[h]) / w,
      v = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (_ >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? b : h + v)
          : e.slideTo(h)),
        e.swipeDirection === "prev" &&
          (_ > 1 - a.longSwipesRatio
            ? e.slideTo(h + v)
            : m !== null && _ < 0 && Math.abs(_) > a.longSwipesRatio
            ? e.slideTo(m)
            : e.slideTo(h));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(h + v)
          : e.slideTo(h)
        : (e.swipeDirection === "next" && e.slideTo(b !== null ? b : h + v),
          e.swipeDirection === "prev" && e.slideTo(m !== null ? m : h));
    }
  }
  function Hc() {
    const n = this,
      { params: e, el: t } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n,
      a = n.virtual && n.params.virtual.enabled;
    (n.allowSlideNext = !0),
      (n.allowSlidePrev = !0),
      n.updateSize(),
      n.updateSlides(),
      n.updateSlidesClasses();
    const o = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides &&
    !o
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.params.loop && !a
      ? n.slideToLoop(n.realIndex, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
      n.autoplay &&
        n.autoplay.running &&
        n.autoplay.paused &&
        (clearTimeout(n.autoplay.resizeTimeout),
        (n.autoplay.resizeTimeout = setTimeout(() => {
          n.autoplay &&
            n.autoplay.running &&
            n.autoplay.paused &&
            n.autoplay.resume();
        }, 500))),
      (n.allowSlidePrev = r),
      (n.allowSlideNext = i),
      n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
  }
  function kp(n) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && n.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (n.stopPropagation(), n.stopImmediatePropagation())));
  }
  function Op() {
    const n = this,
      { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
    if (!i) return;
    (n.previousTranslate = n.translate),
      n.isHorizontal()
        ? (n.translate = -e.scrollLeft)
        : (n.translate = -e.scrollTop),
      n.translate === 0 && (n.translate = 0),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
      r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
      n.emit("setTranslate", n.translate, !1);
  }
  function Lp(n) {
    const e = this;
    bs(e, n.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function Dp() {
    const n = this;
    n.documentTouchHandlerProceeded ||
      ((n.documentTouchHandlerProceeded = !0),
      n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
  }
  const Wc = (n, e) => {
    const t = sr(),
      { params: i, el: r, wrapperEl: s, device: a } = n,
      o = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      c = e;
    !r ||
      typeof r == "string" ||
      (t[l]("touchstart", n.onDocumentTouchStart, { passive: !1, capture: o }),
      r[l]("touchstart", n.onTouchStart, { passive: !1 }),
      r[l]("pointerdown", n.onTouchStart, { passive: !1 }),
      t[l]("touchmove", n.onTouchMove, { passive: !1, capture: o }),
      t[l]("pointermove", n.onTouchMove, { passive: !1, capture: o }),
      t[l]("touchend", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerup", n.onTouchEnd, { passive: !0 }),
      t[l]("pointercancel", n.onTouchEnd, { passive: !0 }),
      t[l]("touchcancel", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerout", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerleave", n.onTouchEnd, { passive: !0 }),
      t[l]("contextmenu", n.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[l]("click", n.onClick, !0),
      i.cssMode && s[l]("scroll", n.onScroll),
      i.updateOnWindowResize
        ? n[c](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Hc,
            !0
          )
        : n[c]("observerUpdate", Hc, !0),
      r[l]("load", n.onLoad, { capture: !0 }));
  };
  function Ip() {
    const n = this,
      { params: e } = n;
    (n.onTouchStart = Cp.bind(n)),
      (n.onTouchMove = Pp.bind(n)),
      (n.onTouchEnd = Mp.bind(n)),
      (n.onDocumentTouchStart = Dp.bind(n)),
      e.cssMode && (n.onScroll = Op.bind(n)),
      (n.onClick = kp.bind(n)),
      (n.onLoad = Lp.bind(n)),
      Wc(n, "on");
  }
  function zp() {
    Wc(this, "off");
  }
  var Rp = { attachEvents: Ip, detachEvents: zp };
  const qc = (n, e) => n.grid && e.grid && e.grid.rows > 1;
  function Bp() {
    const n = this,
      { realIndex: e, initialized: t, params: i, el: r } = n,
      s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const a = sr(),
      o =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      l =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? n.el
          : a.querySelector(i.breakpointsBase),
      c = n.getBreakpoint(s, o, l);
    if (!c || n.currentBreakpoint === c) return;
    const d = (c in s ? s[c] : void 0) || n.originalParams,
      p = qc(n, i),
      f = qc(n, d),
      g = n.params.grabCursor,
      h = d.grabCursor,
      w = i.enabled;
    p && !f
      ? (r.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        n.emitContainerClasses())
      : !p &&
        f &&
        (r.classList.add(`${i.containerModifierClass}grid`),
        ((d.grid.fill && d.grid.fill === "column") ||
          (!d.grid.fill && i.grid.fill === "column")) &&
          r.classList.add(`${i.containerModifierClass}grid-column`),
        n.emitContainerClasses()),
      g && !h ? n.unsetGrabCursor() : !g && h && n.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((x) => {
        if (typeof d[x] > "u") return;
        const S = i[x] && i[x].enabled,
          C = d[x] && d[x].enabled;
        S && !C && n[x].disable(), !S && C && n[x].enable();
      });
    const b = d.direction && d.direction !== i.direction,
      m = i.loop && (d.slidesPerView !== i.slidesPerView || b),
      _ = i.loop;
    b && t && n.changeDirection(), St(n.params, d);
    const v = n.params.enabled,
      y = n.params.loop;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
    }),
      w && !v ? n.disable() : !w && v && n.enable(),
      (n.currentBreakpoint = c),
      n.emit("_beforeBreakpoint", d),
      t &&
        (m
          ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
          : !_ && y
          ? (n.loopCreate(e), n.updateSlides())
          : _ && !y && n.loopDestroy()),
      n.emit("breakpoint", d);
  }
  function Fp(n, e, t) {
    if ((e === void 0 && (e = "window"), !n || (e === "container" && !t)))
      return;
    let i = !1;
    const r = nt(),
      s = e === "window" ? r.innerHeight : t.clientHeight,
      a = Object.keys(n).map((o) => {
        if (typeof o == "string" && o.indexOf("@") === 0) {
          const l = parseFloat(o.substr(1));
          return { value: s * l, point: o };
        }
        return { value: o, point: o };
      });
    a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
      const { point: l, value: c } = a[o];
      e === "window"
        ? r.matchMedia(`(min-width: ${c}px)`).matches && (i = l)
        : c <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var Gp = { setBreakpoint: Bp, getBreakpoint: Fp };
  function Np(n, e) {
    const t = [];
    return (
      n.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && t.push(e + r);
            })
          : typeof i == "string" && t.push(e + i);
      }),
      t
    );
  }
  function Yp() {
    const n = this,
      { classNames: e, params: t, rtl: i, el: r, device: s } = n,
      a = Np(
        [
          "initialized",
          t.direction,
          { "free-mode": n.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...a), r.classList.add(...e), n.emitContainerClasses();
  }
  function Vp() {
    const n = this,
      { el: e, classNames: t } = n;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), n.emitContainerClasses());
  }
  var $p = { addClasses: Yp, removeClasses: Vp };
  function Hp() {
    const n = this,
      { isLocked: e, params: t } = n,
      { slidesOffsetBefore: i } = t;
    if (i) {
      const r = n.slides.length - 1,
        s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
      n.isLocked = n.size > s;
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
      t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
      e && e !== n.isLocked && (n.isEnd = !1),
      e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
  }
  var Wp = { checkOverflow: Hp },
    Xc = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function qp(n, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        St(e, i);
        return;
      }
      if (
        (n[r] === !0 && (n[r] = { enabled: !0 }),
        r === "navigation" &&
          n[r] &&
          n[r].enabled &&
          !n[r].prevEl &&
          !n[r].nextEl &&
          (n[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 &&
          n[r] &&
          n[r].enabled &&
          !n[r].el &&
          (n[r].auto = !0),
        !(r in n && "enabled" in s))
      ) {
        St(e, i);
        return;
      }
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
        n[r] || (n[r] = { enabled: !1 }),
        St(e, i);
    };
  }
  const to = {
      eventsEmitter: $f,
      update: ep,
      translate: ap,
      transition: up,
      slide: vp,
      loop: xp,
      grabCursor: Ap,
      events: Rp,
      breakpoints: Gp,
      checkOverflow: Wp,
      classes: $p,
    },
    io = {};
  class Tt {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = St({}, t)),
        e && !t.el && (t.el = e);
      const a = sr();
      if (
        t.el &&
        typeof t.el == "string" &&
        a.querySelectorAll(t.el).length > 1
      ) {
        const u = [];
        return (
          a.querySelectorAll(t.el).forEach((d) => {
            const p = St({}, t, { el: d });
            u.push(new Tt(p));
          }),
          u
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Fc()),
        (o.device = Gc({ userAgent: t.userAgent })),
        (o.browser = Nc()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const l = {};
      o.modules.forEach((u) => {
        u({
          params: t,
          swiper: o,
          extendParams: qp(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const c = St({}, Xc, l);
      return (
        (o.params = St({}, c, io, t)),
        (o.originalParams = St({}, o.params)),
        (o.passedParams = St({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((u) => {
            o.on(u, o.params.on[u]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return o.params.direction === "horizontal";
          },
          isVertical() {
            return o.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: o.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        r = ti(t, `.${i.slideClass}, swiper-slide`),
        s = ys(r[0]);
      return ys(e) - s;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: i } = e;
      e.slides = ti(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        a = (i.maxTranslate() - r) * e + r;
      i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this,
        {
          params: r,
          slides: s,
          slidesGrid: a,
          slidesSizesGrid: o,
          size: l,
          activeIndex: c,
        } = i;
      let u = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let d = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0,
          p;
        for (let f = c + 1; f < s.length; f += 1)
          s[f] &&
            !p &&
            ((d += Math.ceil(s[f].swiperSlideSize)),
            (u += 1),
            d > l && (p = !0));
        for (let f = c - 1; f >= 0; f -= 1)
          s[f] &&
            !p &&
            ((d += s[f].swiperSlideSize), (u += 1), d > l && (p = !0));
      } else if (e === "current")
        for (let d = c + 1; d < s.length; d += 1)
          (t ? a[d] + o[d] - a[c] < l : a[d] - a[c] < l) && (u += 1);
      else for (let d = c - 1; d >= 0; d -= 1) a[c] - a[d] < l && (u += 1);
      return u;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
          a.complete && bs(e, a);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate,
          o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        r(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const a =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(a.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this,
        r = i.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if ((typeof i == "string" && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          i.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(r())
          : ti(i, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = ws("div", t.params.wrapperClass)),
          i.append(a),
          ti(i, `.${t.params.slideClass}`).forEach((o) => {
            a.append(o);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: a,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : a,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || Mi(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || Mi(i, "direction") === "rtl"),
          wrongRTL: Mi(a, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach((s) => {
          s.complete
            ? bs(t, s)
            : s.addEventListener("load", (a) => {
                bs(t, a.target);
              });
        }),
        eo(t),
        (t.initialized = !0),
        eo(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: r, el: s, wrapperEl: a, slides: o } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s && typeof s != "string" && s.removeAttribute("style"),
            a && a.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((l) => {
                l.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), kf(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      St(io, e);
    }
    static get extendedDefaults() {
      return io;
    }
    static get defaults() {
      return Xc;
    }
    static installModule(e) {
      Tt.prototype.__modules__ || (Tt.prototype.__modules__ = []);
      const t = Tt.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Tt.installModule(t)), Tt)
        : (Tt.installModule(e), Tt);
    }
  }
  Object.keys(to).forEach((n) => {
    Object.keys(to[n]).forEach((e) => {
      Tt.prototype[e] = to[n][e];
    });
  }),
    Tt.use([Yf, Vf]);
  function jc(n, e, t, i) {
    return (
      n.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let s = ti(n.el, `.${i[r]}`)[0];
            s || ((s = ws("div", i[r])), (s.className = i[r]), n.el.append(s)),
              (t[r] = s),
              (e[r] = s);
          }
        }),
      t
    );
  }
  function Xp(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    function s(g) {
      let h;
      return g &&
        typeof g == "string" &&
        e.isElement &&
        ((h = e.el.querySelector(g) || e.hostEl.querySelector(g)), h)
        ? h
        : (g &&
            (typeof g == "string" && (h = [...document.querySelectorAll(g)]),
            e.params.uniqueNavElements &&
            typeof g == "string" &&
            h &&
            h.length > 1 &&
            e.el.querySelectorAll(g).length === 1
              ? (h = e.el.querySelector(g))
              : h && h.length === 1 && (h = h[0])),
          g && !h ? g : h);
    }
    function a(g, h) {
      const w = e.params.navigation;
      (g = Le(g)),
        g.forEach((b) => {
          b &&
            (b.classList[h ? "add" : "remove"](...w.disabledClass.split(" ")),
            b.tagName === "BUTTON" && (b.disabled = h),
            e.params.watchOverflow &&
              e.enabled &&
              b.classList[e.isLocked ? "add" : "remove"](w.lockClass));
        });
    }
    function o() {
      const { nextEl: g, prevEl: h } = e.navigation;
      if (e.params.loop) {
        a(h, !1), a(g, !1);
        return;
      }
      a(h, e.isBeginning && !e.params.rewind),
        a(g, e.isEnd && !e.params.rewind);
    }
    function l(g) {
      g.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function c(g) {
      g.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function u() {
      const g = e.params.navigation;
      if (
        ((e.params.navigation = jc(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(g.nextEl || g.prevEl))
      )
        return;
      let h = s(g.nextEl),
        w = s(g.prevEl);
      Object.assign(e.navigation, { nextEl: h, prevEl: w }),
        (h = Le(h)),
        (w = Le(w));
      const b = (m, _) => {
        m && m.addEventListener("click", _ === "next" ? c : l),
          !e.enabled && m && m.classList.add(...g.lockClass.split(" "));
      };
      h.forEach((m) => b(m, "next")), w.forEach((m) => b(m, "prev"));
    }
    function d() {
      let { nextEl: g, prevEl: h } = e.navigation;
      (g = Le(g)), (h = Le(h));
      const w = (b, m) => {
        b.removeEventListener("click", m === "next" ? c : l),
          b.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      g.forEach((b) => w(b, "next")), h.forEach((b) => w(b, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? f() : (u(), o());
    }),
      i("toEdge fromEdge lock unlock", () => {
        o();
      }),
      i("destroy", () => {
        d();
      }),
      i("enable disable", () => {
        let { nextEl: g, prevEl: h } = e.navigation;
        if (((g = Le(g)), (h = Le(h)), e.enabled)) {
          o();
          return;
        }
        [...g, ...h]
          .filter((w) => !!w)
          .forEach((w) => w.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (g, h) => {
        let { nextEl: w, prevEl: b } = e.navigation;
        (w = Le(w)), (b = Le(b));
        const m = h.target;
        let _ = b.includes(m) || w.includes(m);
        if (e.isElement && !_) {
          const v = h.path || (h.composedPath && h.composedPath());
          v && (_ = v.find((y) => w.includes(y) || b.includes(y)));
        }
        if (e.params.navigation.hideOnClick && !_) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === m || e.pagination.el.contains(m))
          )
            return;
          let v;
          w.length
            ? (v = w[0].classList.contains(e.params.navigation.hiddenClass))
            : b.length &&
              (v = b[0].classList.contains(e.params.navigation.hiddenClass)),
            r(v === !0 ? "navigationShow" : "navigationHide"),
            [...w, ...b]
              .filter((y) => !!y)
              .forEach((y) =>
                y.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const p = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          u(),
          o();
      },
      f = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          d();
      };
    Object.assign(e.navigation, {
      enable: p,
      disable: f,
      update: o,
      init: u,
      destroy: d,
    });
  }
  function bn(n) {
    return (
      n === void 0 && (n = ""),
      `.${n
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function jp(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (m) => m,
        formatFractionTotal: (m) => m,
        bulletClass: `${s}-bullet`,
        bulletActiveClass: `${s}-bullet-active`,
        modifierClass: `${s}-`,
        currentClass: `${s}-current`,
        totalClass: `${s}-total`,
        hiddenClass: `${s}-hidden`,
        progressbarFillClass: `${s}-progressbar-fill`,
        progressbarOppositeClass: `${s}-progressbar-opposite`,
        clickableClass: `${s}-clickable`,
        lockClass: `${s}-lock`,
        horizontalClass: `${s}-horizontal`,
        verticalClass: `${s}-vertical`,
        paginationDisabledClass: `${s}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let a,
      o = 0;
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }
    function c(m, _) {
      const { bulletActiveClass: v } = e.params.pagination;
      m &&
        ((m = m[`${_ === "prev" ? "previous" : "next"}ElementSibling`]),
        m &&
          (m.classList.add(`${v}-${_}`),
          (m = m[`${_ === "prev" ? "previous" : "next"}ElementSibling`]),
          m && m.classList.add(`${v}-${_}-${_}`)));
    }
    function u(m, _, v) {
      if (((m = m % v), (_ = _ % v), _ === m + 1)) return "next";
      if (_ === m - 1) return "previous";
    }
    function d(m) {
      const _ = m.target.closest(bn(e.params.pagination.bulletClass));
      if (!_) return;
      m.preventDefault();
      const v = ys(_) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === v) return;
        const y = u(e.realIndex, v, e.slides.length);
        y === "next"
          ? e.slideNext()
          : y === "previous"
          ? e.slidePrev()
          : e.slideToLoop(v);
      } else e.slideTo(v);
    }
    function p() {
      const m = e.rtl,
        _ = e.params.pagination;
      if (l()) return;
      let v = e.pagination.el;
      v = Le(v);
      let y, x;
      const S =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        C = e.params.loop
          ? Math.ceil(S / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((x = e.previousRealIndex || 0),
            (y =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex < "u"
          ? ((y = e.snapIndex), (x = e.previousSnapIndex))
          : ((x = e.previousIndex || 0), (y = e.activeIndex || 0)),
        _.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const E = e.pagination.bullets;
        let A, k, M;
        if (
          (_.dynamicBullets &&
            ((a = ja(E[0], e.isHorizontal() ? "width" : "height", !0)),
            v.forEach((L) => {
              L.style[e.isHorizontal() ? "width" : "height"] = `${
                a * (_.dynamicMainBullets + 4)
              }px`;
            }),
            _.dynamicMainBullets > 1 &&
              x !== void 0 &&
              ((o += y - (x || 0)),
              o > _.dynamicMainBullets - 1
                ? (o = _.dynamicMainBullets - 1)
                : o < 0 && (o = 0)),
            (A = Math.max(y - o, 0)),
            (k = A + (Math.min(E.length, _.dynamicMainBullets) - 1)),
            (M = (k + A) / 2)),
          E.forEach((L) => {
            const z = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((B) => `${_.bulletActiveClass}${B}`),
            ]
              .map((B) =>
                typeof B == "string" && B.includes(" ") ? B.split(" ") : B
              )
              .flat();
            L.classList.remove(...z);
          }),
          v.length > 1)
        )
          E.forEach((L) => {
            const z = ys(L);
            z === y
              ? L.classList.add(..._.bulletActiveClass.split(" "))
              : e.isElement && L.setAttribute("part", "bullet"),
              _.dynamicBullets &&
                (z >= A &&
                  z <= k &&
                  L.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),
                z === A && c(L, "prev"),
                z === k && c(L, "next"));
          });
        else {
          const L = E[y];
          if (
            (L && L.classList.add(..._.bulletActiveClass.split(" ")),
            e.isElement &&
              E.forEach((z, B) => {
                z.setAttribute("part", B === y ? "bullet-active" : "bullet");
              }),
            _.dynamicBullets)
          ) {
            const z = E[A],
              B = E[k];
            for (let O = A; O <= k; O += 1)
              E[O] &&
                E[O].classList.add(...`${_.bulletActiveClass}-main`.split(" "));
            c(z, "prev"), c(B, "next");
          }
        }
        if (_.dynamicBullets) {
          const L = Math.min(E.length, _.dynamicMainBullets + 4),
            z = (a * L - a) / 2 - M * a,
            B = m ? "right" : "left";
          E.forEach((O) => {
            O.style[e.isHorizontal() ? B : "top"] = `${z}px`;
          });
        }
      }
      v.forEach((E, A) => {
        if (
          (_.type === "fraction" &&
            (E.querySelectorAll(bn(_.currentClass)).forEach((k) => {
              k.textContent = _.formatFractionCurrent(y + 1);
            }),
            E.querySelectorAll(bn(_.totalClass)).forEach((k) => {
              k.textContent = _.formatFractionTotal(C);
            })),
          _.type === "progressbar")
        ) {
          let k;
          _.progressbarOpposite
            ? (k = e.isHorizontal() ? "vertical" : "horizontal")
            : (k = e.isHorizontal() ? "horizontal" : "vertical");
          const M = (y + 1) / C;
          let L = 1,
            z = 1;
          k === "horizontal" ? (L = M) : (z = M),
            E.querySelectorAll(bn(_.progressbarFillClass)).forEach((B) => {
              (B.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${z})`),
                (B.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        _.type === "custom" && _.renderCustom
          ? ((E.innerHTML = _.renderCustom(e, y + 1, C)),
            A === 0 && r("paginationRender", E))
          : (A === 0 && r("paginationRender", E), r("paginationUpdate", E)),
          e.params.watchOverflow &&
            e.enabled &&
            E.classList[e.isLocked ? "add" : "remove"](_.lockClass);
      });
    }
    function f() {
      const m = e.params.pagination;
      if (l()) return;
      const _ =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let v = e.pagination.el;
      v = Le(v);
      let y = "";
      if (m.type === "bullets") {
        let x = e.params.loop
          ? Math.ceil(_ / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && x > _ && (x = _);
        for (let S = 0; S < x; S += 1)
          m.renderBullet
            ? (y += m.renderBullet.call(e, S, m.bulletClass))
            : (y += `<${m.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${m.bulletClass}"></${m.bulletElement}>`);
      }
      m.type === "fraction" &&
        (m.renderFraction
          ? (y = m.renderFraction.call(e, m.currentClass, m.totalClass))
          : (y = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
        m.type === "progressbar" &&
          (m.renderProgressbar
            ? (y = m.renderProgressbar.call(e, m.progressbarFillClass))
            : (y = `<span class="${m.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        v.forEach((x) => {
          m.type !== "custom" && (x.innerHTML = y || ""),
            m.type === "bullets" &&
              e.pagination.bullets.push(
                ...x.querySelectorAll(bn(m.bulletClass))
              );
        }),
        m.type !== "custom" && r("paginationRender", v[0]);
    }
    function g() {
      e.params.pagination = jc(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const m = e.params.pagination;
      if (!m.el) return;
      let _;
      typeof m.el == "string" && e.isElement && (_ = e.el.querySelector(m.el)),
        !_ &&
          typeof m.el == "string" &&
          (_ = [...document.querySelectorAll(m.el)]),
        _ || (_ = m.el),
        !(!_ || _.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof m.el == "string" &&
            Array.isArray(_) &&
            _.length > 1 &&
            ((_ = [...e.el.querySelectorAll(m.el)]),
            _.length > 1 && (_ = _.find((v) => Bc(v, ".swiper")[0] === e.el))),
          Array.isArray(_) && _.length === 1 && (_ = _[0]),
          Object.assign(e.pagination, { el: _ }),
          (_ = Le(_)),
          _.forEach((v) => {
            m.type === "bullets" &&
              m.clickable &&
              v.classList.add(...(m.clickableClass || "").split(" ")),
              v.classList.add(m.modifierClass + m.type),
              v.classList.add(
                e.isHorizontal() ? m.horizontalClass : m.verticalClass
              ),
              m.type === "bullets" &&
                m.dynamicBullets &&
                (v.classList.add(`${m.modifierClass}${m.type}-dynamic`),
                (o = 0),
                m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
              m.type === "progressbar" &&
                m.progressbarOpposite &&
                v.classList.add(m.progressbarOppositeClass),
              m.clickable && v.addEventListener("click", d),
              e.enabled || v.classList.add(m.lockClass);
          }));
    }
    function h() {
      const m = e.params.pagination;
      if (l()) return;
      let _ = e.pagination.el;
      _ &&
        ((_ = Le(_)),
        _.forEach((v) => {
          v.classList.remove(m.hiddenClass),
            v.classList.remove(m.modifierClass + m.type),
            v.classList.remove(
              e.isHorizontal() ? m.horizontalClass : m.verticalClass
            ),
            m.clickable &&
              (v.classList.remove(...(m.clickableClass || "").split(" ")),
              v.removeEventListener("click", d));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((v) =>
            v.classList.remove(...m.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const m = e.params.pagination;
      let { el: _ } = e.pagination;
      (_ = Le(_)),
        _.forEach((v) => {
          v.classList.remove(m.horizontalClass, m.verticalClass),
            v.classList.add(
              e.isHorizontal() ? m.horizontalClass : m.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? b() : (g(), f(), p());
      }),
      i("activeIndexChange", () => {
        typeof e.snapIndex > "u" && p();
      }),
      i("snapIndexChange", () => {
        p();
      }),
      i("snapGridLengthChange", () => {
        f(), p();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { el: m } = e.pagination;
        m &&
          ((m = Le(m)),
          m.forEach((_) =>
            _.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        p();
      }),
      i("click", (m, _) => {
        const v = _.target,
          y = Le(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          y &&
          y.length > 0 &&
          !v.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && v === e.navigation.nextEl) ||
              (e.navigation.prevEl && v === e.navigation.prevEl))
          )
            return;
          const x = y[0].classList.contains(e.params.pagination.hiddenClass);
          r(x === !0 ? "paginationShow" : "paginationHide"),
            y.forEach((S) =>
              S.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const w = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: m } = e.pagination;
        m &&
          ((m = Le(m)),
          m.forEach((_) =>
            _.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          g(),
          f(),
          p();
      },
      b = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: m } = e.pagination;
        m &&
          ((m = Le(m)),
          m.forEach((_) =>
            _.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          h();
      };
    Object.assign(e.pagination, {
      enable: w,
      disable: b,
      render: f,
      update: p,
      init: g,
      destroy: h,
    });
  }
  const Uc = () => {
      document
        .querySelectorAll(".swiper-pagination-bullet-active")
        .forEach(function (n) {
          for (; n.firstChild; )
            n.classList.remove("swiper-pagination-bullet-active");
        });
    },
    Up = () => {
      const n = document.querySelector(".dlp-page-control"),
        e = document.querySelector(".status"),
        t = document.querySelectorAll(".swiper-pagination-bullet");
      U.timeline()
        .to(n, { opacity: 1, y: 0, duration: 1, ease: "expo.out" })
        .to(
          t,
          { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: 0.05 },
          "-=0.8"
        )
        .to(
          e,
          { opacity: 1, scale: 1, duration: 0.8, ease: "expo.out" },
          "-=0.8"
        );
    },
    Qc = () =>
      new Tt(".swiper", {
        spaceBetween: 30,
        effect: "slide",
        autoplay: !0,
        modules: [Xp, jp],
        speed: 700,
        direction: "horizontal",
        pagination: { el: ".swiper-pagination", clickable: !0 },
        allowTouchMove: !1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init: function () {
            Up(), Uc();
          },
          slideChange: function () {
            Uc();
          },
        },
      }),
    xs = {
      "setup-1": { answer: "", value: 0 },
      "setup-2": { answer: "", value: 1 },
      "setup-3": { answer: "", value: 2 },
      "setup-4": { answer: "", value: 3 },
      "plan-1": { answer: "", value: 4 },
      "plan-2": { answer: "", value: 5 },
      "plan-3": { answer: "", value: 6 },
      "plan-4": { answer: "", value: 7 },
      "deploy-1": { answer: "", value: 8 },
      "deploy-2": { answer: "", value: 9 },
      "deploy-3": { answer: "", value: 10 },
      "deploy-4": { answer: "", value: 11 },
    },
    Ss = {
      "setup-1": {
        title: "Transaction hash",
        subText: "Paste the transaction hash below to verify ",
        placeholder: "Enter hash",
        buttonMessage: "Submit",
      },
      "setup-2": {
        title: "Transaction hash",
        subText: "Paste the transaction hash below to verify ",
        placeholder: "Enter hash",
        buttonMessage: "Submit",
      },
      "setup-3": {
        title: "Transaction hash",
        subText: "Paste the transaction hash below to verify ",
        placeholder: "Enter hash",
        buttonMessage: "Submit",
      },
      "setup-4": {
        title: "Transaction hash",
        subText: "Paste the transaction hash below to verify ",
        placeholder: "Enter hash",
        buttonMessage: "Submit",
      },
      "plan-1": {
        title: "Dataset Plan",
        subText: "One of our experts will provide feedback within 48 hours",
        placeholder: "Link to your doc (make sure we can comment on it)",
        buttonMessage: "Submit for Feedback",
      },
      "plan-2": {
        title: "Proof of Contribution",
        subText: "One of our experts will provide feedback within 48 hours",
        placeholder: "Link to your doc (make sure we can comment on it)",
        buttonMessage: "Submit for Feedback",
      },
      "plan-3": {
        title: "Tokenomics Plan",
        subText: "One of our experts will provide feedback within 48 hours",
        placeholder: "Link to your doc (make sure we can comment on it)",
        buttonMessage: "Submit for Feedback",
      },
      "plan-4": {
        title: "GTM Plan",
        subText: "One of our experts will provide feedback within 48 hours",
        placeholder: "Link to your doc (make sure we can comment on it)",
        buttonMessage: "Submit for Feedback",
      },
      "deploy-1": {
        title: "Launch Landing Page",
        subText:
          "Get your landing page featured on the Vana Website by submitting it below:",
        placeholder: "https://",
        buttonMessage: "Submit for a feature",
      },
      "deploy-2": {
        title: "",
        subText: "",
        placeholder: "",
        buttonMessage: "",
      },
      "deploy-3": {
        title: "Build Community",
        subText:
          "Get your community featured in Vana's twitter or discord by sharing a link:",
        placeholder: "https://",
        buttonMessage: "Submit for a feature!",
      },
      "deploy-4": {
        title: "Launch Landing Page",
        subText:
          "Get your landing page featured on the Vana Website by submitting it below:",
        placeholder: "https://",
        buttonMessage: "Submit for a feature",
      },
    };
  let fi = Number(localStorage.getItem("userScore")) || 0;
  const xn = () => {
      let e = window.location.pathname.split("/");
      return e.pop() || e.pop();
    },
    ar = { setup: 3, plan: 3, deploy: 7 },
    Qp = () => {
      localStorage.setItem("userPosition", `${xn().toLowerCase()}-1`);
    },
    Zp = () => {
      const n = Qc();
      Qp();
      const e = document.querySelector('[data-input="field"]'),
        t = document.querySelector('[data-form-btn="submit"]'),
        i = document.querySelector('[data-dlp-trigger="close"]'),
        r = document.querySelectorAll('[data-dlp-trigger="open"]'),
        s = document.querySelectorAll('[data-dlp-trigger="none"]'),
        a = document.querySelector(".submission-status"),
        o = document.querySelector('[data-dlp-slide="action-wrapper"]'),
        l = document.querySelector('[data-dlp-slide="backdrop"]'),
        c = document.querySelector('[data-dlp-form="heading"]'),
        u = document.querySelector('[data-dlp-form="sub-heading"]'),
        d = () => {
          fi++, localStorage.setItem("userScore", fi);
        },
        p = () => {
          a.style.opacity = 1;
          const _ = e.value,
            v = localStorage.getItem("userPosition") || "setup-1",
            y = JSON.parse(localStorage.getItem("stepObj")) || xs;
          y[v].answer || d(),
            (y[v].answer = _),
            localStorage.setItem("stepObj", JSON.stringify(y)),
            setTimeout(() => {
              (a.style.opacity = 0),
                (e.value = ""),
                w(),
                localStorage.getItem("userPosition").split("-")[0] !==
                  xn().toLowerCase() &&
                  (window.location.href = `/dlp/${localStorage
                    .getItem("userPosition")
                    .split("-")[0]
                    .toLowerCase()}`);
            }, 1e3);
        },
        f = () => {
          U.timeline()
            .to(l, { display: "flex", duration: 0 })
            .to(l, { opacity: 1, duration: 0.8, ease: "expo.out" })
            .fromTo(
              o,
              { x: "100%" },
              { x: 0, duration: 1, ease: "expo.out" },
              "-=0.7"
            )
            .to(
              i,
              {
                opacity: 1,
                x: "0vw",
                duration: 0.8,
                ease: "expo.out",
                scale: 1,
              },
              "-=0.8"
            );
          const v = JSON.parse(localStorage.getItem("stepObj")),
            y = localStorage.getItem("userPosition");
          v && y && (e.value = v[y].answer),
            e.value
              ? t.classList.remove("disabled")
              : t.classList.add("disabled"),
            h(),
            e.addEventListener("change", (x) => {
              x.target.value
                ? t.classList.remove("disabled")
                : t.classList.add("disabled");
            }),
            t.addEventListener("click", p);
        },
        g = () => {
          (e.value = ""),
            U.timeline()
              .to(i, {
                opacity: 0,
                x: "-10vw",
                duration: 0.4,
                ease: "expo.out",
                scale: 0,
              })
              .to(o, { x: "100%", duration: 0.8, ease: "expo.out" }, "-=0.3")
              .to(l, { opacity: 0, duration: 0.6, ease: "expo.out" }, "-=0.7")
              .to(l, { display: "none" }, "-=0.1");
        };
      Array.from(r).forEach((_) => {
        _.addEventListener("click", f);
      }),
        s.forEach((_) => {
          _.addEventListener("click", () => {
            (e.value = "pass"), p();
          });
        }),
        i.addEventListener("click", g);
      const h = () => {
          const _ = localStorage.getItem("userPosition");
          (c.textContent = Ss[_].title),
            (u.textContent = Ss[_].subText),
            e.setAttribute("placeholder", Ss[_].placeholder),
            (t.textContent = Ss[_].buttonMessage);
        },
        w = (_) => {
          let v = 0,
            y = "";
          const x = e.value,
            S = localStorage.getItem("userPosition") || "setup-1";
          if (_)
            localStorage.setItem("userPosition", _),
              n.slideTo(Number(_.split("-")[1]) - 1);
          else {
            const C = Object.keys(xs);
            (v = C.indexOf(S) > -1 ? C.indexOf(S) : 0),
              (y = C[v + 1]),
              console.log("steps", C),
              console.log("nextStep", y),
              console.log("_currentStageIndex", v),
              (xs[C[v]].answer = x),
              localStorage.setItem("userPosition", y),
              g(),
              n.slideNext();
          }
          m();
        },
        b = document.querySelectorAll("span.swiper-pagination-bullet");
      b.forEach((_, v) => {
        _.addEventListener("click", () => {
          const y = localStorage.getItem("userPosition").split("-")[0];
          w(`${y}-${v + 1}`);
        });
      });
      const m = () => {
        const _ = document.querySelectorAll("a.swiper-pagination-bullet"),
          v = document.querySelectorAll(".status"),
          y = JSON.parse(localStorage.getItem("stepObj")) || xs,
          x = localStorage.getItem("userPosition") || "setup-1",
          S = x.split("-")[0],
          C = x.split("-")[1] - 1;
        b.forEach((E, A) => {
          !E.classList.contains("swiper-pagination-bullet-active") &&
          y[`${S}-${A + 1}`].answer
            ? E.classList.add("swiper-pagination-bullet__completed")
            : E.classList.remove("swiper-pagination-bullet__completed");
        }),
          y[x].answer
            ? (v[C].classList.remove("incomplete"),
              v[C].classList.add("complete"),
              (v[C].textContent = "Complete"))
            : (v[C].classList.remove("complete"),
              v[C].classList.add("incomplete"),
              (v[C].textContent = "incomplete")),
          (v[C].style.opacity = 1),
          fi > ar.setup &&
            xn().toLowerCase() !== "setup" &&
            _[0].classList.add("swiper-pagination-bullet__completed"),
          xn().toLowerCase() !== "setup"
            ? (fi > ar.plan &&
                _[0].classList.add("swiper-pagination-bullet__completed"),
              fi > ar.deploy &&
                _[1].classList.add("swiper-pagination-bullet__completed"))
            : xn().toLowerCase() !== "plan"
            ? (fi > ar.setup &&
                _[0].classList.add("swiper-pagination-bullet__completed"),
              fi > ar.deploy &&
                _[1].classList.add("swiper-pagination-bullet__completed"))
            : (fi > ar.setup &&
                _[0].classList.add("swiper-pagination-bullet__completed"),
              fi > ar.plan &&
                _[1].classList.add("swiper-pagination-bullet__completed"));
      };
      m();
    },
    Kp = () => {
      document.addEventListener("DOMContentLoaded", () => {
        Qc(), Zp();
      });
    },
    Zc = () =>
      new Tt(".swiper", {
        speed: 400,
        mousewheel: { forceToAxis: !0 },
        keyboard: { enabled: !0 },
        freeMode: !0,
        direction: "horizontal",
        draggable: !0,
        scrollbar: { el: ".swiper-scrollbar", hide: !1, draggable: !0 },
      }),
    Jp = () => {
      console.log("General scripts initialized"), vf();
    },
    eh = async () => {
      try {
        const n = await Cf();
        bf(n);
      } catch (n) {
        console.error("Failed to initialize event list:", n);
        const e = document.querySelector('[data-event="list-wrap"]');
        e &&
          (e.innerHTML =
            "<p>Sorry, we couldn't load the events at this time. Please try again later.</p>");
      }
    },
    th = () => window.location.pathname,
    ih = () => {
      const n = th();
      Jp(),
        n === "/"
          ? (yf(), Zc())
          : n.includes("/aurora-cohorts")
          ? Zc()
          : n.includes("/events")
          ? eh()
          : n.startsWith("/dlp") && Kp();
    };
  function rh() {
    ih();
  }
  function nh(n) {
    document.readyState !== "loading"
      ? n()
      : document.addEventListener("DOMContentLoaded", n);
  }
  nh(rh);
});
