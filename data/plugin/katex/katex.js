! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.katex = t() : e.katex = t()
}(this, function() {
  return function(e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var a = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    return r.m = e, r.c = t, r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: n
      })
    }, r.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return r.d(t, "a", t), t
    }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 63)
  }([function(e, t, r) {
    "use strict";
    var n = r(57),
      a = r.n(n),
      i = r(18),
      o = r.n(i),
      s = r(12),
      l = r(30),
      u = r(28),
      c = r(5),
      h = r(13),
      p = r(19),
      m = ["\\imath", "\u0131", "\\jmath", "\u0237", "\\pounds", "\\mathsterling", "\\textsterling", "\xa3"],
      d = function(e, t, r) {
        return u.a[r][e] && u.a[r][e].replace && (e = u.a[r][e].replace), {
          value: e,
          metrics: l.a.getCharacterMetrics(e, t, r)
        }
      },
      f = function(e, t, r, n, a) {
        var i = d(e, t, r),
          o = i.metrics;
        e = i.value;
        var l = void 0;
        if (o) {
          var u = o.italic;
          "text" === r && (u = 0), l = new s.a.symbolNode(e, o.height, o.depth, u, o.skew, o.width, a)
        } else "undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "'"), l = new s.a.symbolNode(e, 0, 0, 0, 0, 0, a);
        if (n) {
          l.maxFontSize = n.sizeMultiplier, n.style.isTight() && l.classes.push("mtight");
          var c = n.getColor();
          c && (l.style.color = c)
        }
        return l
      },
      v = function(e, t, r, n, a) {
        if ("mathord" === a) {
          var i = g(e, t, r, n);
          return f(e, i.fontName, t, r, n.concat([i.fontClass]))
        }
        if ("textord" === a) {
          if ("ams" === (u.a[t][e] && u.a[t][e].font)) {
            var o = x("amsrm", r.fontWeight, r.fontShape);
            return f(e, o, t, r, n.concat("amsrm", r.fontWeight, r.fontShape))
          }
          var s = x("textrm", r.fontWeight, r.fontShape);
          return f(e, s, t, r, n.concat(r.fontWeight, r.fontShape))
        }
        throw new Error("unexpected type: " + a + " in mathDefault")
      },
      g = function(e, t, r, n) {
        return /[0-9]/.test(e.charAt(0)) || c.a.contains(m, e) ? {
          fontName: "Main-Italic",
          fontClass: "mainit"
        } : {
          fontName: "Math-Italic",
          fontClass: "mathit"
        }
      },
      y = function(e) {
        var t = 0,
          r = 0,
          n = 0,
          a = !0,
          i = !1,
          s = void 0;
        try {
          for (var l, u = o()(e.children); !(a = (l = u.next()).done); a = !0) {
            var c = l.value;
            c.height > t && (t = c.height), c.depth > r && (r = c.depth), c.maxFontSize > n && (n = c.maxFontSize)
          }
        } catch (e) {
          i = !0, s = e
        } finally {
          try {
            !a && u.return && u.return()
          } finally {
            if (i) throw s
          }
        }
        e.height = t, e.depth = r, e.maxFontSize = n
      },
      b = function(e, t, r, n) {
        var a = new s.a.span(e, t, r, n);
        return y(a), a
      },
      x = function(e, t, r) {
        return w(e) + "-" + k(t, r)
      },
      w = function(e) {
        var t = "";
        switch (e) {
          case "amsrm":
            t = "AMS";
            break;
          case "textrm":
            t = "Main";
            break;
          case "textsf":
            t = "SansSerif";
            break;
          case "texttt":
            t = "Typewriter";
            break;
          default:
            throw new Error("Invalid font provided: " + e)
        }
        return t
      },
      k = function(e, t) {
        var r = "";
        return "textbf" === e && (r += "Bold"), "textit" === t && (r += "Italic"), r || "Regular"
      },
      M = {
        mathbf: {
          variant: "bold",
          fontName: "Main-Bold"
        },
        mathrm: {
          variant: "normal",
          fontName: "Main-Regular"
        },
        textit: {
          variant: "italic",
          fontName: "Main-Italic"
        },
        mathbb: {
          variant: "double-struck",
          fontName: "AMS-Regular"
        },
        mathcal: {
          variant: "script",
          fontName: "Caligraphic-Regular"
        },
        mathfrak: {
          variant: "fraktur",
          fontName: "Fraktur-Regular"
        },
        mathscr: {
          variant: "script",
          fontName: "Script-Regular"
        },
        mathsf: {
          variant: "sans-serif",
          fontName: "SansSerif-Regular"
        },
        mathtt: {
          variant: "monospace",
          fontName: "Typewriter-Regular"
        }
      },
      S = {
        vec: ["vec", .471, .714]
      };
    t.a = {
      fontMap: M,
      makeSymbol: f,
      mathsym: function(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return r && r.fontFamily && "boldsymbol" === r.fontFamily && d(e, "Main-Bold", t).metrics ? f(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === u.a[t][e].font ? f(e, "Main-Regular", t, r, n) : f(e, "AMS-Regular", t, r, n.concat(["amsrm"]))
      },
      makeSpan: b,
      makeLineSpan: function(e, t) {
        var r = t.fontMetrics().defaultRuleThickness,
          n = h.a.ruleSpan(e, r, t);
        return n.height = r, n.style.height = 5 * n.height + "em", n.maxFontSize = 1, n
      },
      makeAnchor: function(e, t, r, n) {
        var a = new s.a.anchor(e, t, r, n);
        return y(a), a
      },
      makeFragment: function(e) {
        var t = new s.a.documentFragment(e);
        return y(t), t
      },
      makeVList: function(e, t) {
        var r = function(e) {
            if ("individualShift" === e.positionType) {
              for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) {
                var s = -t[i].shift - a - t[i].elem.depth,
                  l = s - (t[i - 1].elem.height + t[i - 1].elem.depth);
                a += s, r.push({
                  type: "kern",
                  size: l
                }), r.push(t[i])
              }
              return {
                children: r,
                depth: n
              }
            }
            var u = void 0;
            if ("top" === e.positionType) {
              var c = e.positionData,
                h = !0,
                p = !1,
                m = void 0;
              try {
                for (var d, f = o()(e.children); !(h = (d = f.next()).done); h = !0) {
                  var v = d.value;
                  c -= "kern" === v.type ? v.size : v.elem.height + v.elem.depth
                }
              } catch (e) {
                p = !0, m = e
              } finally {
                try {
                  !h && f.return && f.return()
                } finally {
                  if (p) throw m
                }
              }
              u = c
            } else if ("bottom" === e.positionType) u = -e.positionData;
            else {
              var g = e.children[0];
              if ("elem" !== g.type) throw new Error('First child must have type "elem".');
              if ("shift" === e.positionType) u = -g.elem.depth - e.positionData;
              else {
                if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                u = -g.elem.depth
              }
            }
            return {
              children: e.children,
              depth: u
            }
          }(e),
          n = r.children,
          a = r.depth,
          i = 0,
          l = !0,
          u = !1,
          c = void 0;
        try {
          for (var h, p = o()(n); !(l = (h = p.next()).done); l = !0) {
            var m = h.value;
            if ("elem" === m.type) {
              var d = m.elem;
              i = Math.max(i, d.maxFontSize, d.height)
            }
          }
        } catch (e) {
          u = !0, c = e
        } finally {
          try {
            !l && p.return && p.return()
          } finally {
            if (u) throw c
          }
        }
        i += 2;
        var f = b(["pstrut"], []);
        f.style.height = i + "em";
        var v = [],
          g = a,
          y = a,
          x = a,
          w = !0,
          k = !1,
          M = void 0;
        try {
          for (var S, z = o()(n); !(w = (S = z.next()).done); w = !0) {
            var O = S.value;
            if ("kern" === O.type) x += O.size;
            else {
              var T = O.elem,
                A = O.wrapperClasses || [],
                N = O.wrapperStyle || {},
                B = b(A, [f, T], void 0, N);
              B.style.top = -i - x - T.depth + "em", O.marginLeft && (B.style.marginLeft = O.marginLeft), O.marginRight && (B.style.marginRight = O.marginRight), v.push(B), x += T.height + T.depth
            }
            g = Math.min(g, x), y = Math.max(y, x)
          }
        } catch (e) {
          k = !0, M = e
        } finally {
          try {
            !w && z.return && z.return()
          } finally {
            if (k) throw M
          }
        }
        var q = b(["vlist"], v);
        q.style.height = y + "em";
        var C = void 0;
        if (g < 0) {
          var E = b(["vlist"], []);
          E.style.height = -g + "em";
          var j = b(["vlist-s"], [new s.a.symbolNode("\u200b")]);
          C = [b(["vlist-r"], [q, j]), b(["vlist-r"], [E])]
        } else C = [b(["vlist-r"], [q])];
        var R = b(["vlist-t"], C);
        return 2 === C.length && R.classes.push("vlist-t2"), R.height = y, R.depth = -g, R
      },
      makeOrd: function(e, t, r) {
        var n = e.mode,
          a = e.value,
          i = ["mord"],
          o = t.fontFamily;
        if (o) {
          var s = void 0,
            l = void 0;
          if ("boldsymbol" === o) {
            var u = d(a, "Math-BoldItalic", n).metrics ? {
              fontName: "Math-BoldItalic",
              fontClass: "boldsymbol"
            } : {
              fontName: "Main-Bold",
              fontClass: "mathbf"
            };
            s = u.fontName, l = [u.fontClass]
          } else if ("mathit" === o || c.a.contains(m, a)) {
            var h = g(a, n, t, i);
            s = h.fontName, l = [h.fontClass]
          } else -1 !== o.indexOf("math") || "math" === n ? (s = M[o].fontName, l = [o]) : (s = x(o, t.fontWeight, t.fontShape), l = [o, t.fontWeight, t.fontShape]);
          return d(a, s, n).metrics ? f(a, s, n, t, i.concat(l)) : v(a, n, t, i, r)
        }
        return v(a, n, t, i, r)
      },
      makeVerb: function(e, t) {
        var r = e.value.body;
        return r = e.value.star ? r.replace(/ /g, "\u2423") : r.replace(/ /g, "\xa0")
      },
      makeGlue: function(e, t) {
        var r = b(["mord", "rule"], [], t),
          n = Object(p.a)(e, t);
        return r.style.marginRight = n + "em", r
      },
      staticSvg: function(e, t) {
        var r = a()(S[e], 3),
          n = r[0],
          i = r[1],
          o = r[2],
          l = new s.a.pathNode(n),
          u = new s.a.svgNode([l], {
            width: i + "em",
            height: o + "em",
            style: "width:" + i + "em",
            viewBox: "0 0 " + 1e3 * i + " " + 1e3 * o,
            preserveAspectRatio: "xMinYMin"
          }),
          c = b(["overlay"], [u], t);
        return c.height = o, c.style.height = o + "em", c.style.width = i + "em", c
      },
      svgData: S,
      tryCombineChars: function(e) {
        for (var t = 0; t < e.length - 1; t++) e[t].tryCombine(e[t + 1]) && (e.splice(t + 1, 1), t--);
        return e
      },
      spacingFunctions: {
        "\\qquad": {
          size: "2em",
          className: "qquad"
        },
        "\\quad": {
          size: "1em",
          className: "quad"
        },
        "\\enspace": {
          size: "0.5em",
          className: "enspace"
        },
        "\\;": {
          size: "0.277778em",
          className: "thickspace"
        },
        "\\:": {
          size: "0.22222em",
          className: "mediumspace"
        },
        "\\,": {
          size: "0.16667em",
          className: "thinspace"
        },
        "\\!": {
          size: "-0.16667em",
          className: "negativethinspace"
        }
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(18),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = r(5),
      c = function() {
        function e(t, r) {
          o()(this, e), this.type = t, this.attributes = {}, this.children = r || []
        }
        return l()(e, [{
          key: "setAttribute",
          value: function(e, t) {
            this.attributes[e] = t
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            var r = !0,
              n = !1,
              i = void 0;
            try {
              for (var o, s = a()(this.children); !(r = (o = s.next()).done); r = !0) {
                var l = o.value;
                e.appendChild(l.toNode())
              }
            } catch (e) {
              n = !0, i = e
            } finally {
              try {
                !r && s.return && s.return()
              } finally {
                if (n) throw i
              }
            }
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<" + this.type;
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += u.a.escape(this.attributes[t]), e += '"');
            e += ">";
            for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
            return e += "</" + this.type + ">"
          }
        }, {
          key: "toText",
          value: function() {
            return "mspace" === this.type ? "0.16667em" === this.attributes.width ? "\u2006" : " " : this.children.map(function(e) {
              return e.toText()
            }).join("")
          }
        }]), e
      }(),
      h = function() {
        function e(t) {
          o()(this, e), this.text = t
        }
        return l()(e, [{
          key: "toNode",
          value: function() {
            return document.createTextNode(this.text)
          }
        }, {
          key: "toMarkup",
          value: function() {
            return u.a.escape(this.text)
          }
        }, {
          key: "toText",
          value: function() {
            return this.text
          }
        }]), e
      }();
    t.a = {
      MathNode: c,
      TextNode: h
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "e", function() {
      return h
    }), r.d(t, "d", function() {
      return m
    }), r.d(t, "a", function() {
      return f
    }), r.d(t, "b", function() {
      return v
    }), t.c = function(e, t, r) {
      var a = f(e, r),
        o = new i.a.MathNode("mrow", a),
        s = new i.a.MathNode("annotation", [new i.a.TextNode(t)]);
      s.setAttribute("encoding", "application/x-tex");
      var l = new i.a.MathNode("semantics", [o, s]),
        u = new i.a.MathNode("math", [l]);
      return n.a.makeSpan(["katex-mathml"], [u])
    };
    var n = r(0),
      a = r(30),
      i = r(1),
      o = r(6),
      s = r(9),
      l = r(28),
      u = r(5),
      c = r(13),
      h = function(e, t) {
        return l.a[t][e] && l.a[t][e].replace && (e = l.a[t][e].replace), new i.a.TextNode(e)
      },
      p = function(e, t) {
        var r = t.fontFamily;
        if (!r) return null;
        var i = e.mode;
        if ("mathit" === r) return "italic";
        if ("boldsymbol" === r) return "bold-italic";
        var o = e.value;
        if (u.a.contains(["\\imath", "\\jmath"], o)) return null;
        l.a[i][o] && l.a[i][o].replace && (o = l.a[i][o].replace);
        var s = n.a.fontMap[r].fontName;
        return a.a.getCharacterMetrics(o, s, i) ? n.a.fontMap[r].variant : null
      },
      m = {},
      d = {
        mi: "italic",
        mn: "normal",
        mtext: "normal"
      };
    m.mathord = function(e, t) {
      var r = new i.a.MathNode("mi", [h(e.value, e.mode)]),
        n = p(e, t) || "italic";
      return n !== d[r.type] && r.setAttribute("mathvariant", n), r
    }, m.textord = function(e, t) {
      var r = h(e.value, e.mode),
        n = p(e, t) || "normal",
        a = void 0;
      return a = "text" === e.mode ? new i.a.MathNode("mtext", [r]) : /[0-9]/.test(e.value) ? new i.a.MathNode("mn", [r]) : "\\prime" === e.value ? new i.a.MathNode("mo", [r]) : new i.a.MathNode("mi", [r]), n !== d[a.type] && a.setAttribute("mathvariant", n), a
    }, m.bin = function(e, t) {
      var r = new i.a.MathNode("mo", [h(e.value, e.mode)]),
        n = p(e, t);
      return "bold-italic" === n && r.setAttribute("mathvariant", n), r
    }, m.rel = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.open = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.close = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.inner = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.punct = function(e) {
      var t = new i.a.MathNode("mo", [h(e.value, e.mode)]);
      return t.setAttribute("separator", "true"), t
    }, m.ordgroup = function(e, t) {
      var r = f(e.value, t);
      return new i.a.MathNode("mrow", r)
    }, m.supsub = function(e, t) {
      var r = !1,
        n = void 0;
      e.value.base && "horizBrace" === e.value.base.value.type && !!e.value.sup === e.value.base.value.isOver && (r = !0, n = e.value.base.value.isOver);
      var a = [v(e.value.base, t, !0)];
      e.value.sub && a.push(v(e.value.sub, t, !0)), e.value.sup && a.push(v(e.value.sup, t, !0));
      var o = void 0;
      if (r) o = n ? "mover" : "munder";
      else if (e.value.sub)
        if (e.value.sup) {
          var l = e.value.base;
          o = l && l.value.limits && t.style === s.a.DISPLAY ? "munderover" : "msubsup"
        } else {
          var u = e.value.base;
          o = u && u.value.limits && t.style === s.a.DISPLAY ? "munder" : "msub"
        }
      else {
        var c = e.value.base;
        o = c && c.value.limits && t.style === s.a.DISPLAY ? "mover" : "msup"
      }
      return new i.a.MathNode(o, a)
    }, m.spacing = function(e) {
      var t = void 0;
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? t = new i.a.MathNode("mtext", [new i.a.TextNode("\xa0")]) : (t = new i.a.MathNode("mspace")).setAttribute("width", n.a.spacingFunctions[e.value].size), t
    }, m.horizBrace = function(e, t) {
      var r = c.a.mathMLnode(e.value.label);
      return new i.a.MathNode(e.value.isOver ? "mover" : "munder", [v(e.value.base, t), r])
    }, m.xArrow = function(e, t) {
      var r = c.a.mathMLnode(e.value.label),
        n = void 0,
        a = void 0;
      if (e.value.body) {
        var o = v(e.value.body, t);
        e.value.below ? (a = v(e.value.below, t), n = new i.a.MathNode("munderover", [r, a, o])) : n = new i.a.MathNode("mover", [r, o])
      } else e.value.below ? (a = v(e.value.below, t), n = new i.a.MathNode("munder", [r, a])) : n = new i.a.MathNode("mover", [r]);
      return n
    }, m.mclass = function(e, t) {
      var r = f(e.value.value, t);
      return new i.a.MathNode("mstyle", r)
    }, m.raisebox = function(e, t) {
      var r = new i.a.MathNode("mpadded", [v(e.value.body, t)]),
        n = e.value.dy.value.number + e.value.dy.value.unit;
      return r.setAttribute("voffset", n), r
    };
    var f = function(e, t) {
        for (var r = [], n = 0; n < e.length; n++) {
          var a = e[n];
          r.push(v(a, t))
        }
        return r
      },
      v = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e) return new i.a.MathNode("mrow");
        if (m[e.type]) {
          var n = m[e.type](e, t);
          return r && "mrow" === n.type && 1 === n.children.length ? n.children[0] : n
        }
        throw new o.a("Got group of unknown type: '" + e.type + "'")
      }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return i
    }), t.b = function(e) {
      for (var t = e.type, r = e.names, o = e.props, s = e.handler, l = e.htmlBuilder, u = e.mathmlBuilder, c = {
          numArgs: o.numArgs,
          argTypes: o.argTypes,
          greediness: void 0 === o.greediness ? 1 : o.greediness,
          allowedInText: !!o.allowedInText,
          allowedInMath: void 0 === o.allowedInMath || o.allowedInMath,
          numOptionalArgs: o.numOptionalArgs || 0,
          infix: !!o.infix,
          handler: s
        }, h = 0; h < r.length; ++h) i[r[h]] = c;
      t && (l && (n.d[t] = l), u && (a.d[t] = u))
    }, r.d(t, "c", function() {
      return o
    });
    var n = r(4),
      a = r(2),
      i = {};
    var o = function(e) {
      return "ordgroup" === e.type ? e.value : [e]
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return g
    }), r.d(t, "e", function() {
      return w
    }), r.d(t, "d", function() {
      return k
    }), r.d(t, "b", function() {
      return M
    }), t.c = function(e, t) {
      e = JSON.parse(a()(e));
      var r = g(e, t, !0),
        n = f(["base"], r, t),
        i = f(["strut"]),
        o = f(["strut", "bottom"]);
      i.style.height = n.height + "em", o.style.height = n.height + n.depth + "em", o.style.verticalAlign = -n.depth + "em";
      var s = f(["katex-html"], [i, o, n]);
      return s.setAttribute("aria-hidden", "true"), s
    };
    var n = r(77),
      a = r.n(n),
      i = r(35),
      o = r.n(i),
      s = r(6),
      l = r(9),
      u = r(0),
      c = r(12),
      h = r(19),
      p = r(5),
      m = r(13),
      d = r(112),
      f = u.a.makeSpan,
      v = {
        display: l.a.DISPLAY,
        text: l.a.TEXT,
        script: l.a.SCRIPT,
        scriptscript: l.a.SCRIPTSCRIPT
      },
      g = function(e, t, r) {
        for (var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [null, null], a = [], i = 0; i < e.length; i++) {
          var s = e[i],
            l = M(s, t);
          l instanceof c.a.documentFragment ? a.push.apply(a, o()(l.children)) : a.push(l)
        }
        for (var h, m, g, w, k = [n[0] && f([n[0]], [], t)].concat(o()(a.filter(function(e) {
            return e && "mspace" !== e.classes[0]
          })), [n[1] && f([n[1]], [], t)]), S = 1; S < k.length - 1; S++) {
          var z = y(k[S], "left");
          "mbin" === z.classes[0] && (g = k[S - 1], w = r, g ? p.a.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], b(g, "right")) : w) && (z.classes[0] = "mord");
          var O = y(k[S], "right");
          "mbin" === O.classes[0] && (h = k[S + 1], m = r, h ? p.a.contains(["mrel", "mclose", "mpunct"], b(h, "left")) : m) && (O.classes[0] = "mord")
        }
        for (var T = [], A = 0, N = 0; N < a.length; N++)
          if (T.push(a[N]), "mspace" !== a[N].classes[0] && A < k.length - 1) {
            0 === A && (T.pop(), N--);
            var B = b(k[A], "right"),
              q = b(k[A + 1], "left");
            if (B && q && r) {
              var C = x(k[A + 1]) ? d.b[B][q] : d.a[B][q];
              if (C) {
                var E = t;
                1 === e.length && ("sizing" === e[0].type ? E = t.havingSize(e[0].value.size) : "styling" === e[0].type && (E = t.havingStyle(v[e[0].value.style]))), T.push(u.a.makeGlue(C, E))
              }
            }
            A++
          }
        for (var j = 0; j < T.length; j++) "\u0338" === T[j].value && (T[j].style.position = "absolute", T[j].style.paddingLeft = "0.8em");
        return T
      },
      y = function e(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
        if ((t instanceof c.a.documentFragment || t instanceof c.a.anchor) && t.children.length) {
          if ("right" === r) return e(t.children[t.children.length - 1]);
          if ("left" === r) return e(t.children[0])
        }
        return t
      },
      b = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
        return e ? (e = y(e, t), p.a.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], e.classes[0]) ? e.classes[0] : null) : null
      },
      x = function(e) {
        return e = y(e, "left"), p.a.contains(e.classes, "mtight")
      },
      w = function(e, t) {
        var r = ["nulldelimiter"].concat(e.baseSizingClasses());
        return f(t.concat(r))
      },
      k = {
        mathord: function(e, t) {
          return u.a.makeOrd(e, t, "mathord")
        },
        textord: function(e, t) {
          return u.a.makeOrd(e, t, "textord")
        },
        bin: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mbin"])
        },
        rel: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mrel"])
        },
        open: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mopen"])
        },
        close: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mclose"])
        },
        inner: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["minner"])
        },
        punct: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mpunct"])
        },
        ordgroup: function(e, t) {
          return f(["mord"], g(e.value, t, !0), t)
        }
      };
    k.supsub = function(e, t) {
      if (function(e, t) {
          if (e.value.base) {
            var r = e.value.base;
            return "op" === r.type ? r.value.limits && (t.style.size === l.a.DISPLAY.size || r.value.alwaysHandleSupSub) : "accent" === r.type ? p.a.isCharacterBox(r.value.base) : "horizBrace" === r.type ? !e.value.sub === r.value.isOver : null
          }
          return !1
        }(e, t)) return k[e.value.base.type](e, t);
      var r = M(e.value.base, t),
        n = void 0,
        a = void 0,
        i = t.fontMetrics(),
        o = void 0,
        s = 0,
        h = 0;
      e.value.sup && (o = t.havingStyle(t.style.sup()), n = M(e.value.sup, o, t), p.a.isCharacterBox(e.value.base) || (s = r.height - o.fontMetrics().supDrop * o.sizeMultiplier / t.sizeMultiplier)), e.value.sub && (o = t.havingStyle(t.style.sub()), a = M(e.value.sub, o, t), p.a.isCharacterBox(e.value.base) || (h = r.depth + o.fontMetrics().subDrop * o.sizeMultiplier / t.sizeMultiplier));
      var m = void 0;
      m = t.style === l.a.DISPLAY ? i.sup1 : t.style.cramped ? i.sup3 : i.sup2;
      var d = t.sizeMultiplier,
        v = .5 / i.ptPerEm / d + "em",
        g = void 0;
      if (e.value.sup)
        if (e.value.sub) {
          s = Math.max(s, m, n.depth + .25 * i.xHeight), h = Math.max(h, i.sub2);
          var y = i.defaultRuleThickness;
          if (s - n.depth - (a.height - h) < 4 * y) {
            h = 4 * y - (s - n.depth) + a.height;
            var x = .8 * i.xHeight - (s - n.depth);
            x > 0 && (s += x, h -= x)
          }
          var w = [{
            type: "elem",
            elem: a,
            shift: h,
            marginRight: v
          }, {
            type: "elem",
            elem: n,
            shift: -s,
            marginRight: v
          }];
          r instanceof c.a.symbolNode && (w[0].marginLeft = -r.italic + "em"), g = u.a.makeVList({
            positionType: "individualShift",
            children: w
          }, t)
        } else s = Math.max(s, m, n.depth + .25 * i.xHeight), g = u.a.makeVList({
          positionType: "shift",
          positionData: -s,
          children: [{
            type: "elem",
            elem: n,
            marginRight: v
          }]
        }, t);
      else {
        h = Math.max(h, i.sub1, a.height - .8 * i.xHeight);
        var S = [{
          type: "elem",
          elem: a,
          marginRight: v
        }];
        r instanceof c.a.symbolNode && (S[0].marginLeft = -r.italic + "em"), g = u.a.makeVList({
          positionType: "shift",
          positionData: h,
          children: S
        }, t)
      }
      var z = b(r) || "mord";
      return f([z], [r, f(["msupsub"], [g])], t)
    }, k.spacing = function(e, t) {
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? "text" === e.mode ? u.a.makeOrd(e, t, "textord") : f(["mspace"], [u.a.mathsym(e.value, e.mode, t)], t) : f(["mspace", u.a.spacingFunctions[e.value].className], [], t)
    }, k.horizBrace = function(e, t) {
      var r = t.style,
        n = "supsub" === e.type,
        a = void 0,
        i = void 0;
      n && (e.value.sup ? (i = t.havingStyle(r.sup()), a = M(e.value.sup, i, t)) : (i = t.havingStyle(r.sub()), a = M(e.value.sub, i, t)), e = e.value.base);
      var o = M(e.value.base, t.havingBaseStyle(l.a.DISPLAY)),
        s = m.a.svgSpan(e, t),
        c = void 0;
      if (e.value.isOver ? (c = u.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: o
          }, {
            type: "kern",
            size: .1
          }, {
            type: "elem",
            elem: s
          }]
        }, t)).children[0].children[0].children[1].classes.push("svg-align") : (c = u.a.makeVList({
          positionType: "bottom",
          positionData: o.depth + .1 + s.height,
          children: [{
            type: "elem",
            elem: s
          }, {
            type: "kern",
            size: .1
          }, {
            type: "elem",
            elem: o
          }]
        }, t)).children[0].children[0].children[0].classes.push("svg-align"), n) {
        var h = f(["mord", e.value.isOver ? "mover" : "munder"], [c], t);
        c = e.value.isOver ? u.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: h
          }, {
            type: "kern",
            size: .2
          }, {
            type: "elem",
            elem: a
          }]
        }, t) : u.a.makeVList({
          positionType: "bottom",
          positionData: h.depth + .2 + a.height,
          children: [{
            type: "elem",
            elem: a
          }, {
            type: "kern",
            size: .2
          }, {
            type: "elem",
            elem: h
          }]
        }, t)
      }
      return f(["mord", e.value.isOver ? "mover" : "munder"], [c], t)
    }, k.xArrow = function(e, t) {
      var r = t.style,
        n = t.havingStyle(r.sup()),
        a = M(e.value.body, n, t);
      a.classes.push("x-arrow-pad");
      var i = void 0;
      e.value.below && (n = t.havingStyle(r.sub()), (i = M(e.value.below, n, t)).classes.push("x-arrow-pad"));
      var o = m.a.svgSpan(e, t),
        s = -t.fontMetrics().axisHeight + .5 * o.height,
        l = -t.fontMetrics().axisHeight - .5 * o.height - .111;
      "\\xleftequilibrium" === e.value.label && (l -= a.depth);
      var c = void 0;
      if (e.value.below) {
        var h = -t.fontMetrics().axisHeight + i.height + .5 * o.height + .111;
        c = u.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: a,
            shift: l
          }, {
            type: "elem",
            elem: o,
            shift: s
          }, {
            type: "elem",
            elem: i,
            shift: h
          }]
        }, t)
      } else c = u.a.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: l
        }, {
          type: "elem",
          elem: o,
          shift: s
        }]
      }, t);
      return c.children[0].children[0].children[1].classes.push("svg-align"), f(["mrel", "x-arrow"], [c], t)
    }, k.mclass = function(e, t) {
      var r = g(e.value.value, t, !0);
      return f([e.value.mclass], r, t)
    }, k.raisebox = function(e, t) {
      var r = k.sizing({
          value: {
            value: [{
              type: "text",
              value: {
                body: e.value.value,
                font: "mathrm"
              }
            }],
            size: 6
          }
        }, t),
        n = Object(h.a)(e.value.dy.value, t);
      return u.a.makeVList({
        positionType: "shift",
        positionData: -n,
        children: [{
          type: "elem",
          elem: r
        }]
      }, t)
    };
    var M = function(e, t, r) {
      if (!e) return f();
      if (k[e.type]) {
        var n = k[e.type](e, t);
        if (r && t.size !== r.size) {
          n = f(t.sizingClasses(r), [n], t);
          var a = t.sizeMultiplier / r.sizeMultiplier;
          n.height *= a, n.depth *= a
        }
        return n
      }
      throw new s.a("Got group of unknown type: '" + e.type + "'")
    }
  }, function(e, t, r) {
    "use strict";
    var n = Array.prototype.indexOf,
      a = function(e, t) {
        if (null == e) return -1;
        if (n && e.indexOf === n) return e.indexOf(t);
        for (var r = e.length, a = 0; a < r; a++)
          if (e[a] === t) return a;
        return -1
      },
      i = /([A-Z])/g,
      o = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
      },
      s = /[&><"']/g;
    var l = void 0;
    if ("undefined" != typeof document) {
      var u = document.createElement("span");
      l = "textContent" in u ? function(e, t) {
        e.textContent = t
      } : function(e, t) {
        e.innerText = t
      }
    }
    var c = function e(t) {
      return !!t && ("ordgroup" === t.type ? 1 === t.value.length ? e(t.value[0]) : t : "color" === t.type ? 1 === t.value.value.length ? e(t.value.value[0]) : t : "font" === t.type ? e(t.value.body) : t)
    };
    t.a = {
      contains: function(e, t) {
        return -1 !== a(e, t)
      },
      deflt: function(e, t) {
        return void 0 === e ? t : e
      },
      escape: function(e) {
        return String(e).replace(s, function(e) {
          return o[e]
        })
      },
      hyphenate: function(e) {
        return e.replace(i, "-$1").toLowerCase()
      },
      indexOf: a,
      setTextContent: l,
      clearNode: function(e) {
        l(e, "")
      },
      getBaseElem: c,
      isCharacterBox: function(e) {
        var t = c(e);
        return "mathord" === t.type || "textord" === t.type || "bin" === t.type || "rel" === t.type || "inner" === t.type || "open" === t.type || "close" === t.type || "punct" === t.type
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = (r(14), r(27), function e(t, r) {
        a()(this, e);
        var n = "KaTeX parse error: " + t,
          i = void 0,
          o = r && r.loc;
        if (o && o.start <= o.end) {
          var s = o.lexer.input;
          i = o.start;
          var l = o.end;
          i === s.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
          var u = s.slice(i, l).replace(/[^]/g, "$&\u0332");
          n += (i > 15 ? "\u2026" + s.slice(i - 15, i) : s.slice(0, i)) + u + (l + 15 < s.length ? s.slice(l, l + 15) + "\u2026" : s.slice(l))
        }
        var c = new Error(n);
        return c.name = "ParseError", c.__proto__ = e.prototype, c.position = i, c
      });
    i.prototype.__proto__ = Error.prototype, t.a = i
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
  }, function(e, t) {
    var r = e.exports = {
      version: "2.4.0"
    };
    "number" == typeof __e && (__e = r)
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = function() {
        function e(t, r, n) {
          a()(this, e), this.id = t, this.size = r, this.cramped = n
        }
        return o()(e, [{
          key: "sup",
          value: function() {
            return l[u[this.id]]
          }
        }, {
          key: "sub",
          value: function() {
            return l[c[this.id]]
          }
        }, {
          key: "fracNum",
          value: function() {
            return l[h[this.id]]
          }
        }, {
          key: "fracDen",
          value: function() {
            return l[p[this.id]]
          }
        }, {
          key: "cramp",
          value: function() {
            return l[m[this.id]]
          }
        }, {
          key: "text",
          value: function() {
            return l[d[this.id]]
          }
        }, {
          key: "isTight",
          value: function() {
            return this.size >= 2
          }
        }]), e
      }(),
      l = [new s(0, 0, !1), new s(1, 0, !0), new s(2, 1, !1), new s(3, 1, !0), new s(4, 2, !1), new s(5, 2, !0), new s(6, 3, !1), new s(7, 3, !0)],
      u = [4, 5, 4, 5, 6, 7, 6, 7],
      c = [5, 5, 5, 5, 7, 7, 7, 7],
      h = [2, 3, 4, 5, 6, 7, 6, 7],
      p = [3, 3, 5, 5, 7, 7, 7, 7],
      m = [1, 1, 3, 3, 5, 5, 7, 7],
      d = [0, 1, 2, 3, 2, 3, 2, 3];
    t.a = {
      DISPLAY: l[0],
      TEXT: l[2],
      SCRIPT: l[4],
      SCRIPTSCRIPT: l[6]
    }
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n, a = r(73),
      i = (n = a) && n.__esModule ? n : {
        default: n
      };
    t.default = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }()
  }, function(e, t, r) {
    var n = r(52)("wks"),
      a = r(32),
      i = r(16).Symbol,
      o = "function" == typeof i;
    (e.exports = function(e) {
      return n[e] || (n[e] = o && i[e] || (o ? i : a)("Symbol." + e))
    }).store = n
  }, function(e, t, r) {
    "use strict";
    var n = r(18),
      a = r.n(n),
      i = r(105),
      o = r.n(i),
      s = r(7),
      l = r.n(s),
      u = r(10),
      c = r.n(u),
      h = r(42),
      p = r(5),
      m = r(111),
      d = function(e) {
        for (var t = (e = e.slice()).length - 1; t >= 0; t--) e[t] || e.splice(t, 1);
        return e.join(" ")
      },
      f = function() {
        function e(t, r, n, a) {
          if (l()(this, e), this.classes = t || [], this.children = r || [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = o()({}, a), this.attributes = {}, n) {
            n.style.isTight() && this.classes.push("mtight");
            var i = n.getColor();
            i && (this.style.color = i)
          }
        }
        return c()(e, [{
          key: "setAttribute",
          value: function(e, t) {
            this.attributes[e] = t
          }
        }, {
          key: "tryCombine",
          value: function(e) {
            return !1
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createElement("span");
            e.className = d(this.classes);
            for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
            for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<span";
            this.classes.length && (e += ' class="', e += p.a.escape(d(this.classes)), e += '"');
            var t = "";
            for (var r in this.style) this.style.hasOwnProperty(r) && (t += p.a.hyphenate(r) + ":" + this.style[r] + ";");
            t && (e += ' style="' + p.a.escape(t) + '"');
            for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="', e += p.a.escape(this.attributes[n]), e += '"');
            e += ">";
            for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
            return e += "</span>"
          }
        }]), e
      }(),
      v = function() {
        function e(t, r, n, a) {
          l()(this, e), this.href = t, this.classes = r, this.children = n, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}, this.attributes = {}, a.style.isTight() && this.classes.push("mtight");
          var i = a.getColor();
          i && (this.style.color = i)
        }
        return c()(e, [{
          key: "setAttribute",
          value: function(e, t) {
            this.attributes[e] = t
          }
        }, {
          key: "tryCombine",
          value: function(e) {
            return !1
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createElement("a");
            e.setAttribute("href", this.href), this.classes.length && (e.className = d(this.classes));
            for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
            for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<a";
            e += 'href="' + (e += p.a.escape(this.href)) + '"', this.classes.length && (e += ' class="' + p.a.escape(d(this.classes)) + '"');
            var t = "";
            for (var r in this.style) this.style.hasOwnProperty(r) && (t += p.a.hyphenate(r) + ":" + this.style[r] + ";");
            t && (e += ' style="' + p.a.escape(t) + '"');
            for (var n in this.attributes) "href" !== n && Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="' + p.a.escape(this.attributes[n]) + '"');
            e += ">";
            var i = !0,
              o = !1,
              s = void 0;
            try {
              for (var l, u = a()(this.children); !(i = (l = u.next()).done); i = !0) {
                e += l.value.toMarkup()
              }
            } catch (e) {
              o = !0, s = e
            } finally {
              try {
                !i && u.return && u.return()
              } finally {
                if (o) throw s
              }
            }
            return e += "</a>"
          }
        }]), e
      }(),
      g = function() {
        function e(t) {
          l()(this, e), this.children = t || [], this.height = 0, this.depth = 0, this.maxFontSize = 0
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
            return e
          }
        }]), e
      }(),
      y = {
        "\xee": "\u0131\u0302",
        "\xef": "\u0131\u0308",
        "\xed": "\u0131\u0301",
        "\xec": "\u0131\u0300"
      },
      b = function() {
        function e(t, r, n, a, i, s, u, c) {
          l()(this, e), this.value = t, this.height = r || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = u || [], this.style = o()({}, c), this.maxFontSize = 0;
          var p = Object(h.a)(this.value.charCodeAt(0));
          p && this.classes.push(p + "_fallback"), /[\xee\xef\xed\xec]/.test(this.value) && (this.value = y[this.value])
        }
        return c()(e, [{
          key: "tryCombine",
          value: function(t) {
            if (!t || !(t instanceof e) || this.italic > 0 || d(this.classes) !== d(t.classes) || this.skew !== t.skew || this.maxFontSize !== t.maxFontSize) return !1;
            for (var r in this.style)
              if (this.style.hasOwnProperty(r) && this.style[r] !== t.style[r]) return !1;
            for (var n in t.style)
              if (t.style.hasOwnProperty(n) && this.style[n] !== t.style[n]) return !1;
            return this.value += t.value, this.height = Math.max(this.height, t.height), this.depth = Math.max(this.depth, t.depth), this.italic = t.italic, !0
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createTextNode(this.value),
              t = null;
            this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement("span")).className = d(this.classes));
            for (var r in this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]);
            return t ? (t.appendChild(e), t) : e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = !1,
              t = "<span";
            this.classes.length && (e = !0, t += ' class="', t += p.a.escape(d(this.classes)), t += '"');
            var r = "";
            this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
            for (var n in this.style) this.style.hasOwnProperty(n) && (r += p.a.hyphenate(n) + ":" + this.style[n] + ";");
            r && (e = !0, t += ' style="' + p.a.escape(r) + '"');
            var a = p.a.escape(this.value);
            return e ? (t += ">", t += a, t += "</span>") : a
          }
        }]), e
      }(),
      x = function() {
        function e(t, r) {
          l()(this, e), this.children = t || [], this.attributes = r || {}, this.height = 0, this.depth = 0, this.maxFontSize = 0
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<svg";
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
            e += ">";
            for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
            return e += "</svg>"
          }
        }]), e
      }(),
      w = function() {
        function e(t, r) {
          l()(this, e), this.pathName = t, this.alternate = r
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", m.a.path[this.pathName]), e
          }
        }, {
          key: "toMarkup",
          value: function() {
            return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + m.a.path[this.pathName] + "'/>"
          }
        }]), e
      }(),
      k = function() {
        function e(t) {
          l()(this, e), this.attributes = t || {}
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<line";
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
            return e += "/>"
          }
        }]), e
      }();
    t.a = {
      span: f,
      anchor: v,
      documentFragment: g,
      symbolNode: b,
      svgNode: x,
      pathNode: w,
      lineNode: k
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(57),
      a = r.n(n),
      i = r(12),
      o = r(0),
      s = r(1),
      l = r(5),
      u = {
        widehat: "^",
        widetilde: "~",
        utilde: "~",
        overleftarrow: "\u2190",
        underleftarrow: "\u2190",
        xleftarrow: "\u2190",
        overrightarrow: "\u2192",
        underrightarrow: "\u2192",
        xrightarrow: "\u2192",
        underbrace: "\u23b5",
        overbrace: "\u23de",
        overleftrightarrow: "\u2194",
        underleftrightarrow: "\u2194",
        xleftrightarrow: "\u2194",
        Overrightarrow: "\u21d2",
        xRightarrow: "\u21d2",
        overleftharpoon: "\u21bc",
        xleftharpoonup: "\u21bc",
        overrightharpoon: "\u21c0",
        xrightharpoonup: "\u21c0",
        xLeftarrow: "\u21d0",
        xLeftrightarrow: "\u21d4",
        xhookleftarrow: "\u21a9",
        xhookrightarrow: "\u21aa",
        xmapsto: "\u21a6",
        xrightharpoondown: "\u21c1",
        xleftharpoondown: "\u21bd",
        xrightleftharpoons: "\u21cc",
        xleftrightharpoons: "\u21cb",
        xtwoheadleftarrow: "\u219e",
        xtwoheadrightarrow: "\u21a0",
        xlongequal: "=",
        xtofrom: "\u21c4",
        xrightleftarrows: "\u21c4",
        xrightequilibrium: "\u21cc",
        xleftequilibrium: "\u21cb"
      },
      c = {
        overrightarrow: [
          ["rightarrow"], .888, 522, "xMaxYMin"
        ],
        overleftarrow: [
          ["leftarrow"], .888, 522, "xMinYMin"
        ],
        underrightarrow: [
          ["rightarrow"], .888, 522, "xMaxYMin"
        ],
        underleftarrow: [
          ["leftarrow"], .888, 522, "xMinYMin"
        ],
        xrightarrow: [
          ["rightarrow"], 1.469, 522, "xMaxYMin"
        ],
        xleftarrow: [
          ["leftarrow"], 1.469, 522, "xMinYMin"
        ],
        Overrightarrow: [
          ["doublerightarrow"], .888, 560, "xMaxYMin"
        ],
        xRightarrow: [
          ["doublerightarrow"], 1.526, 560, "xMaxYMin"
        ],
        xLeftarrow: [
          ["doubleleftarrow"], 1.526, 560, "xMinYMin"
        ],
        overleftharpoon: [
          ["leftharpoon"], .888, 522, "xMinYMin"
        ],
        xleftharpoonup: [
          ["leftharpoon"], .888, 522, "xMinYMin"
        ],
        xleftharpoondown: [
          ["leftharpoondown"], .888, 522, "xMinYMin"
        ],
        overrightharpoon: [
          ["rightharpoon"], .888, 522, "xMaxYMin"
        ],
        xrightharpoonup: [
          ["rightharpoon"], .888, 522, "xMaxYMin"
        ],
        xrightharpoondown: [
          ["rightharpoondown"], .888, 522, "xMaxYMin"
        ],
        xlongequal: [
          ["longequal"], .888, 334, "xMinYMin"
        ],
        xtwoheadleftarrow: [
          ["twoheadleftarrow"], .888, 334, "xMinYMin"
        ],
        xtwoheadrightarrow: [
          ["twoheadrightarrow"], .888, 334, "xMaxYMin"
        ],
        overleftrightarrow: [
          ["leftarrow", "rightarrow"], .888, 522
        ],
        overbrace: [
          ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
        ],
        underbrace: [
          ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
        ],
        underleftrightarrow: [
          ["leftarrow", "rightarrow"], .888, 522
        ],
        xleftrightarrow: [
          ["leftarrow", "rightarrow"], 1.75, 522
        ],
        xLeftrightarrow: [
          ["doubleleftarrow", "doublerightarrow"], 1.75, 560
        ],
        xrightleftharpoons: [
          ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
        ],
        xleftrightharpoons: [
          ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
        ],
        xhookleftarrow: [
          ["leftarrow", "righthook"], 1.08, 522
        ],
        xhookrightarrow: [
          ["lefthook", "rightarrow"], 1.08, 522
        ],
        overlinesegment: [
          ["leftlinesegment", "rightlinesegment"], .888, 522
        ],
        underlinesegment: [
          ["leftlinesegment", "rightlinesegment"], .888, 522
        ],
        overgroup: [
          ["leftgroup", "rightgroup"], .888, 342
        ],
        undergroup: [
          ["leftgroupunder", "rightgroupunder"], .888, 342
        ],
        xmapsto: [
          ["leftmapsto", "rightarrow"], 1.5, 522
        ],
        xtofrom: [
          ["leftToFrom", "rightToFrom"], 1.75, 528
        ],
        xrightleftarrows: [
          ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 667
        ],
        xrightequilibrium: [
          ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
        ],
        xleftequilibrium: [
          ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
        ]
      },
      h = function(e) {
        return "ordgroup" === e.type ? e.value.length : 1
      };
    t.a = {
      encloseSpan: function(e, t, r, n) {
        var a = void 0,
          s = e.height + e.depth + 2 * r;
        if (/fbox|color/.test(t)) {
          if (a = o.a.makeSpan(["stretchy", t], [], n), "fbox" === t) {
            var l = n.color && n.getColor();
            l && (a.style.borderColor = l)
          }
        } else {
          var u = [];
          /^[bx]cancel$/.test(t) && u.push(new i.a.lineNode({
            x1: "0",
            y1: "0",
            x2: "100%",
            y2: "100%",
            "stroke-width": "0.046em"
          })), /^x?cancel$/.test(t) && u.push(new i.a.lineNode({
            x1: "0",
            y1: "100%",
            x2: "100%",
            y2: "0",
            "stroke-width": "0.046em"
          }));
          var c = new i.a.svgNode(u, {
            width: "100%",
            height: s + "em"
          });
          a = o.a.makeSpan([], [c], n)
        }
        return a.height = s, a.style.height = s + "em", a
      },
      mathMLnode: function(e) {
        var t = new s.a.MathNode("mo", [new s.a.TextNode(u[e.substr(1)])]);
        return t.setAttribute("stretchy", "true"), t
      },
      ruleSpan: function(e, t, r) {
        var n = void 0,
          a = void 0,
          s = "stretchy";
        return "vertical-separator" === e ? (n = new i.a.pathNode("vertSeparator"), a = new i.a.svgNode([n], {
          width: "0.25em",
          height: "400em",
          viewBox: "0 0 250 400000",
          preserveAspectRatio: "xMinYMin slice"
        }), s = "vertical-separator") : (n = new i.a.pathNode("stdHorizRule"), a = new i.a.svgNode([n], {
          width: "400em",
          height: 5 * t + "em",
          viewBox: "0 0 400000 200",
          preserveAspectRatio: "xMinYMin slice"
        })), o.a.makeSpan([s], [a], r)
      },
      svgSpan: function(e, t) {
        var r = function() {
            var r = 4e5,
              n = e.value.label.substr(1);
            if (l.a.contains(["widehat", "widetilde", "utilde"], n)) {
              var s = h(e.value.base),
                u = void 0,
                p = void 0,
                m = void 0;
              if (s > 5) u = "widehat" === n ? 420 : 312, r = "widehat" === n ? 2364 : 2340, m = "widehat" === n ? .42 : .34, p = ("widehat" === n ? "widehat" : "tilde") + "4";
              else {
                var d = [1, 1, 2, 2, 3, 3][s];
                "widehat" === n ? (r = [0, 1062, 2364, 2364, 2364][d], u = [0, 239, 300, 360, 420][d], m = [0, .24, .3, .3, .36, .42][d], p = "widehat" + d) : (r = [0, 600, 1033, 2339, 2340][d], u = [0, 260, 286, 306, 312][d], m = [0, .26, .286, .3, .306, .34][d], p = "tilde" + d)
              }
              var f = new i.a.pathNode(p),
                v = new i.a.svgNode([f], {
                  width: "100%",
                  height: m + "em",
                  viewBox: "0 0 " + r + " " + u,
                  preserveAspectRatio: "none"
                });
              return {
                span: o.a.makeSpan([], [v], t),
                minWidth: 0,
                height: m
              }
            }
            var g = [],
              y = a()(c[n], 4),
              b = y[0],
              x = y[1],
              w = y[2],
              k = y[3],
              M = w / 1e3,
              S = b.length,
              z = void 0,
              O = void 0;
            if (1 === S) z = ["hide-tail"], O = [k];
            else if (2 === S) z = ["halfarrow-left", "halfarrow-right"], O = ["xMinYMin", "xMaxYMin"];
            else {
              if (3 !== S) throw new Error("Correct katexImagesData or update code here to support\n                    " + S + " children.");
              z = ["brace-left", "brace-center", "brace-right"], O = ["xMinYMin", "xMidYMin", "xMaxYMin"]
            }
            for (var T = 0; T < S; T++) {
              var A = new i.a.pathNode(b[T]),
                N = new i.a.svgNode([A], {
                  width: "400em",
                  height: M + "em",
                  viewBox: "0 0 " + r + " " + w,
                  preserveAspectRatio: O[T] + " slice"
                }),
                B = o.a.makeSpan([z[T]], [N], t);
              if (1 === S) return {
                span: B,
                minWidth: x,
                height: M
              };
              B.style.height = M + "em", g.push(B)
            }
            return {
              span: o.a.makeSpan(["stretchy"], g, t),
              minWidth: x,
              height: M
            }
          }(),
          n = r.span,
          s = r.minWidth,
          u = r.height;
        return n.height = u, n.style.height = u + "em", s > 0 && (n.style.minWidth = s + "em"), n
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(31);
    t.a = function e(t, r, n, o, s) {
      a()(this, e), this.type = t, this.value = r, this.mode = n, this.loc = i.a.range(o, s)
    }
  }, function(e, t, r) {
    var n = r(22),
      a = r(70),
      i = r(71),
      o = Object.defineProperty;
    t.f = r(23) ? Object.defineProperty : function(e, t, r) {
      if (n(e), t = i(t, !0), n(r), a) try {
        return o(e, t, r)
      } catch (e) {}
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (e[t] = r.value), e
    }
  }, function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, function(e, t) {
    e.exports = {}
  }, function(e, t, r) {
    e.exports = {
      default: r(103),
      __esModule: !0
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "b", function() {
      return o
    }), r.d(t, "a", function() {
      return s
    });
    var n = r(6),
      a = (r(43), {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        in: 72.27,
        bp: 1.00375,
        pc: 12,
        dd: 1238 / 1157,
        cc: 14856 / 1157,
        nd: 685 / 642,
        nc: 1370 / 107,
        sp: 1 / 65536,
        px: 1.00375
      }),
      i = {
        ex: !0,
        em: !0,
        mu: !0
      },
      o = function(e) {
        return "string" != typeof e && (e = e.unit), e in a || e in i || "ex" === e
      },
      s = function(e, t) {
        var r = void 0;
        if (e.unit in a) r = a[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
        else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;
        else {
          var i = void 0;
          if (i = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = i.fontMetrics().xHeight;
          else {
            if ("em" !== e.unit) throw new n.a("Invalid unit: '" + e.unit + "'");
            r = i.fontMetrics().quad
          }
          i !== t && (r *= i.sizeMultiplier / t.sizeMultiplier)
        }
        return Math.min(e.number * r, t.maxSize)
      }
  }, function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return r.call(e, t)
    }
  }, function(e, t, r) {
    var n = r(20);
    e.exports = function(e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function(e, t, r) {
    e.exports = !r(24)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  }, function(e, t, r) {
    var n = r(16),
      a = r(8),
      i = r(47),
      o = r(26),
      s = "prototype",
      l = function(e, t, r) {
        var u, c, h, p = e & l.F,
          m = e & l.G,
          d = e & l.S,
          f = e & l.P,
          v = e & l.B,
          g = e & l.W,
          y = m ? a : a[t] || (a[t] = {}),
          b = y[s],
          x = m ? n : d ? n[t] : (n[t] || {})[s];
        m && (r = t);
        for (u in r)(c = !p && x && void 0 !== x[u]) && u in y || (h = c ? x[u] : r[u], y[u] = m && "function" != typeof x[u] ? r[u] : v && c ? i(h, n) : g && x[u] == h ? function(e) {
          var t = function(t, r, n) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t);
                case 2:
                  return new e(t, r)
              }
              return new e(t, r, n)
            }
            return e.apply(this, arguments)
          };
          return t[s] = e[s], t
        }(h) : f && "function" == typeof h ? i(Function.call, h) : h, f && ((y.virtual || (y.virtual = {}))[u] = h, e & l.R && b && !b[u] && o(b, u, h)))
      };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
  }, function(e, t, r) {
    var n = r(15),
      a = r(33);
    e.exports = r(23) ? function(e, t, r) {
      return n.f(e, t, a(1, r))
    } : function(e, t, r) {
      return e[t] = r, e
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return l
    });
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(31),
      l = function() {
        function e(t, r) {
          a()(this, e), this.text = t, this.loc = r
        }
        return o()(e, [{
          key: "range",
          value: function(t, r) {
            return new e(r, s.a.range(this, t))
          }
        }]), e
      }()
  }, function(e, t, r) {
    "use strict";
    var n = {
      math: {},
      text: {}
    };

    function a(e, t, r, a, i, o) {
      n[e][i] = {
        font: t,
        group: r,
        replace: a
      }, o && a && (n[e][a] = n[e][i])
    }
    t.a = n;
    var i = "math",
      o = "text",
      s = "main",
      l = "ams",
      u = "accent",
      c = "bin",
      h = "close",
      p = "inner",
      m = "mathord",
      d = "op",
      f = "open",
      v = "punct",
      g = "rel",
      y = "spacing",
      b = "textord";
    a(i, s, g, "\u2261", "\\equiv", !0), a(i, s, g, "\u227a", "\\prec", !0), a(i, s, g, "\u227b", "\\succ", !0), a(i, s, g, "\u223c", "\\sim", !0), a(i, s, g, "\u22a5", "\\perp"), a(i, s, g, "\u2aaf", "\\preceq", !0), a(i, s, g, "\u2ab0", "\\succeq", !0), a(i, s, g, "\u2243", "\\simeq", !0), a(i, s, g, "\u2223", "\\mid", !0), a(i, s, g, "\u226a", "\\ll"), a(i, s, g, "\u226b", "\\gg", !0), a(i, s, g, "\u224d", "\\asymp", !0), a(i, s, g, "\u2225", "\\parallel"), a(i, s, g, "\u22c8", "\\bowtie", !0), a(i, s, g, "\u2323", "\\smile", !0), a(i, s, g, "\u2291", "\\sqsubseteq", !0), a(i, s, g, "\u2292", "\\sqsupseteq", !0), a(i, s, g, "\u2250", "\\doteq", !0), a(i, s, g, "\u2322", "\\frown", !0), a(i, s, g, "\u220b", "\\ni", !0), a(i, s, g, "\u221d", "\\propto", !0), a(i, s, g, "\u22a2", "\\vdash", !0), a(i, s, g, "\u22a3", "\\dashv", !0), a(i, s, g, "\u220b", "\\owns"), a(i, s, v, ".", "\\ldotp"), a(i, s, v, "\u22c5", "\\cdotp"), a(i, s, b, "#", "\\#"), a(o, s, b, "#", "\\#"), a(i, s, b, "&", "\\&"), a(o, s, b, "&", "\\&"), a(i, s, b, "\u2135", "\\aleph", !0), a(i, s, b, "\u2200", "\\forall", !0), a(i, s, b, "\u210f", "\\hbar"), a(i, s, b, "\u2203", "\\exists", !0), a(i, s, b, "\u2207", "\\nabla", !0), a(i, s, b, "\u266d", "\\flat", !0), a(i, s, b, "\u2113", "\\ell", !0), a(i, s, b, "\u266e", "\\natural", !0), a(i, s, b, "\u2663", "\\clubsuit", !0), a(i, s, b, "\u2118", "\\wp", !0), a(i, s, b, "\u266f", "\\sharp", !0), a(i, s, b, "\u2662", "\\diamondsuit", !0), a(i, s, b, "\u211c", "\\Re", !0), a(i, s, b, "\u2661", "\\heartsuit", !0), a(i, s, b, "\u2111", "\\Im", !0), a(i, s, b, "\u2660", "\\spadesuit", !0), a(o, s, b, "\xa7", "\\S", !0), a(o, s, b, "\xb6", "\\P", !0), a(i, s, b, "\u2020", "\\dag"), a(o, s, b, "\u2020", "\\dag"), a(o, s, b, "\u2020", "\\textdagger"), a(i, s, b, "\u2021", "\\ddag"), a(o, s, b, "\u2021", "\\ddag"), a(o, s, b, "\u2020", "\\textdaggerdbl"), a(i, s, h, "\u23b1", "\\rmoustache"), a(i, s, f, "\u23b0", "\\lmoustache"), a(i, s, h, "\u27ef", "\\rgroup"), a(i, s, f, "\u27ee", "\\lgroup"), a(i, s, c, "\u2213", "\\mp", !0), a(i, s, c, "\u2296", "\\ominus", !0), a(i, s, c, "\u228e", "\\uplus", !0), a(i, s, c, "\u2293", "\\sqcap", !0), a(i, s, c, "\u2217", "\\ast"), a(i, s, c, "\u2294", "\\sqcup", !0), a(i, s, c, "\u25ef", "\\bigcirc"), a(i, s, c, "\u2219", "\\bullet"), a(i, s, c, "\u2021", "\\ddagger"), a(i, s, c, "\u2240", "\\wr", !0), a(i, s, c, "\u2a3f", "\\amalg"), a(i, s, c, "&", "\\And"), a(i, s, g, "\u27f5", "\\longleftarrow", !0), a(i, s, g, "\u21d0", "\\Leftarrow", !0), a(i, s, g, "\u27f8", "\\Longleftarrow", !0), a(i, s, g, "\u27f6", "\\longrightarrow", !0), a(i, s, g, "\u21d2", "\\Rightarrow", !0), a(i, s, g, "\u27f9", "\\Longrightarrow", !0), a(i, s, g, "\u2194", "\\leftrightarrow", !0), a(i, s, g, "\u27f7", "\\longleftrightarrow", !0), a(i, s, g, "\u21d4", "\\Leftrightarrow", !0), a(i, s, g, "\u27fa", "\\Longleftrightarrow", !0), a(i, s, g, "\u21a6", "\\mapsto", !0), a(i, s, g, "\u27fc", "\\longmapsto", !0), a(i, s, g, "\u2197", "\\nearrow", !0), a(i, s, g, "\u21a9", "\\hookleftarrow", !0), a(i, s, g, "\u21aa", "\\hookrightarrow", !0), a(i, s, g, "\u2198", "\\searrow", !0), a(i, s, g, "\u21bc", "\\leftharpoonup", !0), a(i, s, g, "\u21c0", "\\rightharpoonup", !0), a(i, s, g, "\u2199", "\\swarrow", !0), a(i, s, g, "\u21bd", "\\leftharpoondown", !0), a(i, s, g, "\u21c1", "\\rightharpoondown", !0), a(i, s, g, "\u2196", "\\nwarrow", !0), a(i, s, g, "\u21cc", "\\rightleftharpoons", !0), a(i, l, g, "\u226e", "\\nless", !0), a(i, l, g, "\ue010", "\\nleqslant"), a(i, l, g, "\ue011", "\\nleqq"), a(i, l, g, "\u2a87", "\\lneq", !0), a(i, l, g, "\u2268", "\\lneqq", !0), a(i, l, g, "\ue00c", "\\lvertneqq"), a(i, l, g, "\u22e6", "\\lnsim", !0), a(i, l, g, "\u2a89", "\\lnapprox", !0), a(i, l, g, "\u2280", "\\nprec", !0), a(i, l, g, "\u22e0", "\\npreceq", !0), a(i, l, g, "\u22e8", "\\precnsim", !0), a(i, l, g, "\u2ab9", "\\precnapprox", !0), a(i, l, g, "\u2241", "\\nsim", !0), a(i, l, g, "\ue006", "\\nshortmid"), a(i, l, g, "\u2224", "\\nmid", !0), a(i, l, g, "\u22ac", "\\nvdash", !0), a(i, l, g, "\u22ad", "\\nvDash", !0), a(i, l, g, "\u22ea", "\\ntriangleleft"), a(i, l, g, "\u22ec", "\\ntrianglelefteq", !0), a(i, l, g, "\u228a", "\\subsetneq", !0), a(i, l, g, "\ue01a", "\\varsubsetneq"), a(i, l, g, "\u2acb", "\\subsetneqq", !0), a(i, l, g, "\ue017", "\\varsubsetneqq"), a(i, l, g, "\u226f", "\\ngtr", !0), a(i, l, g, "\ue00f", "\\ngeqslant"), a(i, l, g, "\ue00e", "\\ngeqq"), a(i, l, g, "\u2a88", "\\gneq", !0), a(i, l, g, "\u2269", "\\gneqq", !0), a(i, l, g, "\ue00d", "\\gvertneqq"), a(i, l, g, "\u22e7", "\\gnsim", !0), a(i, l, g, "\u2a8a", "\\gnapprox", !0), a(i, l, g, "\u2281", "\\nsucc", !0), a(i, l, g, "\u22e1", "\\nsucceq", !0), a(i, l, g, "\u22e9", "\\succnsim", !0), a(i, l, g, "\u2aba", "\\succnapprox", !0), a(i, l, g, "\u2246", "\\ncong", !0), a(i, l, g, "\ue007", "\\nshortparallel"), a(i, l, g, "\u2226", "\\nparallel", !0), a(i, l, g, "\u22af", "\\nVDash", !0), a(i, l, g, "\u22eb", "\\ntriangleright"), a(i, l, g, "\u22ed", "\\ntrianglerighteq", !0), a(i, l, g, "\ue018", "\\nsupseteqq"), a(i, l, g, "\u228b", "\\supsetneq", !0), a(i, l, g, "\ue01b", "\\varsupsetneq"), a(i, l, g, "\u2acc", "\\supsetneqq", !0), a(i, l, g, "\ue019", "\\varsupsetneqq"), a(i, l, g, "\u22ae", "\\nVdash", !0), a(i, l, g, "\u2ab5", "\\precneqq", !0), a(i, l, g, "\u2ab6", "\\succneqq", !0), a(i, l, g, "\ue016", "\\nsubseteqq"), a(i, l, c, "\u22b4", "\\unlhd"), a(i, l, c, "\u22b5", "\\unrhd"), a(i, l, g, "\u219a", "\\nleftarrow", !0), a(i, l, g, "\u219b", "\\nrightarrow", !0), a(i, l, g, "\u21cd", "\\nLeftarrow", !0), a(i, l, g, "\u21cf", "\\nRightarrow", !0), a(i, l, g, "\u21ae", "\\nleftrightarrow", !0), a(i, l, g, "\u21ce", "\\nLeftrightarrow", !0), a(i, l, g, "\u25b3", "\\vartriangle"), a(i, l, b, "\u210f", "\\hslash"), a(i, l, b, "\u25bd", "\\triangledown"), a(i, l, b, "\u25ca", "\\lozenge"), a(i, l, b, "\u24c8", "\\circledS"), a(i, l, b, "\xae", "\\circledR"), a(o, l, b, "\xae", "\\circledR"), a(i, l, b, "\u2221", "\\measuredangle", !0), a(i, l, b, "\u2204", "\\nexists"), a(i, l, b, "\u2127", "\\mho"), a(i, l, b, "\u2132", "\\Finv", !0), a(i, l, b, "\u2141", "\\Game", !0), a(i, l, b, "k", "\\Bbbk"), a(i, l, b, "\u2035", "\\backprime"), a(i, l, b, "\u25b2", "\\blacktriangle"), a(i, l, b, "\u25bc", "\\blacktriangledown"), a(i, l, b, "\u25a0", "\\blacksquare"), a(i, l, b, "\u29eb", "\\blacklozenge"), a(i, l, b, "\u2605", "\\bigstar"), a(i, l, b, "\u2222", "\\sphericalangle", !0), a(i, l, b, "\u2201", "\\complement", !0), a(i, l, b, "\xf0", "\\eth", !0), a(i, l, b, "\u2571", "\\diagup"), a(i, l, b, "\u2572", "\\diagdown"), a(i, l, b, "\u25a1", "\\square"), a(i, l, b, "\u25a1", "\\Box"), a(i, l, b, "\u25ca", "\\Diamond"), a(i, l, b, "\xa5", "\\yen", !0), a(i, l, b, "\u2713", "\\checkmark", !0), a(o, l, b, "\u2713", "\\checkmark"), a(i, l, b, "\u2136", "\\beth", !0), a(i, l, b, "\u2138", "\\daleth", !0), a(i, l, b, "\u2137", "\\gimel", !0), a(i, l, b, "\u03dd", "\\digamma"), a(i, l, b, "\u03f0", "\\varkappa"), a(i, l, f, "\u250c", "\\ulcorner"), a(i, l, h, "\u2510", "\\urcorner"), a(i, l, f, "\u2514", "\\llcorner"), a(i, l, h, "\u2518", "\\lrcorner"), a(i, l, g, "\u2266", "\\leqq", !0), a(i, l, g, "\u2a7d", "\\leqslant"), a(i, l, g, "\u2a95", "\\eqslantless", !0), a(i, l, g, "\u2272", "\\lesssim"), a(i, l, g, "\u2a85", "\\lessapprox"), a(i, l, g, "\u224a", "\\approxeq", !0), a(i, l, c, "\u22d6", "\\lessdot"), a(i, l, g, "\u22d8", "\\lll"), a(i, l, g, "\u2276", "\\lessgtr"), a(i, l, g, "\u22da", "\\lesseqgtr"), a(i, l, g, "\u2a8b", "\\lesseqqgtr"), a(i, l, g, "\u2251", "\\doteqdot"), a(i, l, g, "\u2253", "\\risingdotseq", !0), a(i, l, g, "\u2252", "\\fallingdotseq", !0), a(i, l, g, "\u223d", "\\backsim", !0), a(i, l, g, "\u22cd", "\\backsimeq", !0), a(i, l, g, "\u2ac5", "\\subseteqq", !0), a(i, l, g, "\u22d0", "\\Subset", !0), a(i, l, g, "\u228f", "\\sqsubset", !0), a(i, l, g, "\u227c", "\\preccurlyeq", !0), a(i, l, g, "\u22de", "\\curlyeqprec", !0), a(i, l, g, "\u227e", "\\precsim", !0), a(i, l, g, "\u2ab7", "\\precapprox", !0), a(i, l, g, "\u22b2", "\\vartriangleleft"), a(i, l, g, "\u22b4", "\\trianglelefteq"), a(i, l, g, "\u22a8", "\\vDash"), a(i, l, g, "\u22aa", "\\Vvdash", !0), a(i, l, g, "\u2323", "\\smallsmile"), a(i, l, g, "\u2322", "\\smallfrown"), a(i, l, g, "\u224f", "\\bumpeq", !0), a(i, l, g, "\u224e", "\\Bumpeq", !0), a(i, l, g, "\u2267", "\\geqq", !0), a(i, l, g, "\u2a7e", "\\geqslant", !0), a(i, l, g, "\u2a96", "\\eqslantgtr", !0), a(i, l, g, "\u2273", "\\gtrsim", !0), a(i, l, g, "\u2a86", "\\gtrapprox", !0), a(i, l, c, "\u22d7", "\\gtrdot"), a(i, l, g, "\u22d9", "\\ggg", !0), a(i, l, g, "\u2277", "\\gtrless", !0), a(i, l, g, "\u22db", "\\gtreqless", !0), a(i, l, g, "\u2a8c", "\\gtreqqless", !0), a(i, l, g, "\u2256", "\\eqcirc", !0), a(i, l, g, "\u2257", "\\circeq", !0), a(i, l, g, "\u225c", "\\triangleq", !0), a(i, l, g, "\u223c", "\\thicksim"), a(i, l, g, "\u2248", "\\thickapprox"), a(i, l, g, "\u2ac6", "\\supseteqq", !0), a(i, l, g, "\u22d1", "\\Supset", !0), a(i, l, g, "\u2290", "\\sqsupset", !0), a(i, l, g, "\u227d", "\\succcurlyeq", !0), a(i, l, g, "\u22df", "\\curlyeqsucc", !0), a(i, l, g, "\u227f", "\\succsim", !0), a(i, l, g, "\u2ab8", "\\succapprox", !0), a(i, l, g, "\u22b3", "\\vartriangleright"), a(i, l, g, "\u22b5", "\\trianglerighteq"), a(i, l, g, "\u22a9", "\\Vdash", !0), a(i, l, g, "\u2223", "\\shortmid"), a(i, l, g, "\u2225", "\\shortparallel"), a(i, l, g, "\u226c", "\\between", !0), a(i, l, g, "\u22d4", "\\pitchfork", !0), a(i, l, g, "\u221d", "\\varpropto"), a(i, l, g, "\u25c0", "\\blacktriangleleft"), a(i, l, g, "\u2234", "\\therefore", !0), a(i, l, g, "\u220d", "\\backepsilon"), a(i, l, g, "\u25b6", "\\blacktriangleright"), a(i, l, g, "\u2235", "\\because", !0), a(i, l, g, "\u22d8", "\\llless"), a(i, l, g, "\u22d9", "\\gggtr"), a(i, l, c, "\u22b2", "\\lhd"), a(i, l, c, "\u22b3", "\\rhd"), a(i, l, g, "\u2242", "\\eqsim", !0), a(i, s, g, "\u22c8", "\\Join"), a(i, l, g, "\u2251", "\\Doteq", !0), a(i, l, c, "\u2214", "\\dotplus", !0), a(i, l, c, "\u2216", "\\smallsetminus"), a(i, l, c, "\u22d2", "\\Cap", !0), a(i, l, c, "\u22d3", "\\Cup", !0), a(i, l, c, "\u2a5e", "\\doublebarwedge", !0), a(i, l, c, "\u229f", "\\boxminus", !0), a(i, l, c, "\u229e", "\\boxplus", !0), a(i, l, c, "\u22c7", "\\divideontimes", !0), a(i, l, c, "\u22c9", "\\ltimes", !0), a(i, l, c, "\u22ca", "\\rtimes", !0), a(i, l, c, "\u22cb", "\\leftthreetimes", !0), a(i, l, c, "\u22cc", "\\rightthreetimes", !0), a(i, l, c, "\u22cf", "\\curlywedge", !0), a(i, l, c, "\u22ce", "\\curlyvee", !0), a(i, l, c, "\u229d", "\\circleddash", !0), a(i, l, c, "\u229b", "\\circledast", !0), a(i, l, c, "\u22c5", "\\centerdot"), a(i, l, c, "\u22ba", "\\intercal", !0), a(i, l, c, "\u22d2", "\\doublecap"), a(i, l, c, "\u22d3", "\\doublecup"), a(i, l, c, "\u22a0", "\\boxtimes", !0), a(i, l, g, "\u21e2", "\\dashrightarrow", !0), a(i, l, g, "\u21e0", "\\dashleftarrow", !0), a(i, l, g, "\u21c7", "\\leftleftarrows", !0), a(i, l, g, "\u21c6", "\\leftrightarrows", !0), a(i, l, g, "\u21da", "\\Lleftarrow", !0), a(i, l, g, "\u219e", "\\twoheadleftarrow", !0), a(i, l, g, "\u21a2", "\\leftarrowtail", !0), a(i, l, g, "\u21ab", "\\looparrowleft", !0), a(i, l, g, "\u21cb", "\\leftrightharpoons", !0), a(i, l, g, "\u21b6", "\\curvearrowleft", !0), a(i, l, g, "\u21ba", "\\circlearrowleft", !0), a(i, l, g, "\u21b0", "\\Lsh", !0), a(i, l, g, "\u21c8", "\\upuparrows", !0), a(i, l, g, "\u21bf", "\\upharpoonleft", !0), a(i, l, g, "\u21c3", "\\downharpoonleft", !0), a(i, l, g, "\u22b8", "\\multimap", !0), a(i, l, g, "\u21ad", "\\leftrightsquigarrow", !0), a(i, l, g, "\u21c9", "\\rightrightarrows", !0), a(i, l, g, "\u21c4", "\\rightleftarrows", !0), a(i, l, g, "\u21a0", "\\twoheadrightarrow", !0), a(i, l, g, "\u21a3", "\\rightarrowtail", !0), a(i, l, g, "\u21ac", "\\looparrowright", !0), a(i, l, g, "\u21b7", "\\curvearrowright", !0), a(i, l, g, "\u21bb", "\\circlearrowright", !0), a(i, l, g, "\u21b1", "\\Rsh", !0), a(i, l, g, "\u21ca", "\\downdownarrows", !0), a(i, l, g, "\u21be", "\\upharpoonright", !0), a(i, l, g, "\u21c2", "\\downharpoonright", !0), a(i, l, g, "\u21dd", "\\rightsquigarrow", !0), a(i, l, g, "\u21dd", "\\leadsto"), a(i, l, g, "\u21db", "\\Rrightarrow", !0), a(i, l, g, "\u21be", "\\restriction"), a(i, s, b, "\u2018", "`"), a(i, s, b, "$", "\\$"), a(o, s, b, "$", "\\$"), a(o, s, b, "$", "\\textdollar"), a(i, s, b, "%", "\\%"), a(o, s, b, "%", "\\%"), a(i, s, b, "_", "\\_"), a(o, s, b, "_", "\\_"), a(o, s, b, "_", "\\textunderscore"), a(i, s, b, "\u2220", "\\angle", !0), a(i, s, b, "\u221e", "\\infty", !0), a(i, s, b, "\u2032", "\\prime"), a(i, s, b, "\u25b3", "\\triangle"), a(i, s, b, "\u0393", "\\Gamma", !0), a(i, s, b, "\u0394", "\\Delta", !0), a(i, s, b, "\u0398", "\\Theta", !0), a(i, s, b, "\u039b", "\\Lambda", !0), a(i, s, b, "\u039e", "\\Xi", !0), a(i, s, b, "\u03a0", "\\Pi", !0), a(i, s, b, "\u03a3", "\\Sigma", !0), a(i, s, b, "\u03a5", "\\Upsilon", !0), a(i, s, b, "\u03a6", "\\Phi", !0), a(i, s, b, "\u03a8", "\\Psi", !0), a(i, s, b, "\u03a9", "\\Omega", !0), a(i, s, b, "\xac", "\\neg"), a(i, s, b, "\xac", "\\lnot"), a(i, s, b, "\u22a4", "\\top"), a(i, s, b, "\u22a5", "\\bot"), a(i, s, b, "\u2205", "\\emptyset"), a(i, l, b, "\u2205", "\\varnothing"), a(i, s, m, "\u03b1", "\\alpha", !0), a(i, s, m, "\u03b2", "\\beta", !0), a(i, s, m, "\u03b3", "\\gamma", !0), a(i, s, m, "\u03b4", "\\delta", !0), a(i, s, m, "\u03f5", "\\epsilon", !0), a(i, s, m, "\u03b6", "\\zeta", !0), a(i, s, m, "\u03b7", "\\eta", !0), a(i, s, m, "\u03b8", "\\theta", !0), a(i, s, m, "\u03b9", "\\iota", !0), a(i, s, m, "\u03ba", "\\kappa", !0), a(i, s, m, "\u03bb", "\\lambda", !0), a(i, s, m, "\u03bc", "\\mu", !0), a(i, s, m, "\u03bd", "\\nu", !0), a(i, s, m, "\u03be", "\\xi", !0), a(i, s, m, "\u03bf", "\\omicron", !0), a(i, s, m, "\u03c0", "\\pi", !0), a(i, s, m, "\u03c1", "\\rho", !0), a(i, s, m, "\u03c3", "\\sigma", !0), a(i, s, m, "\u03c4", "\\tau", !0), a(i, s, m, "\u03c5", "\\upsilon", !0), a(i, s, m, "\u03d5", "\\phi", !0), a(i, s, m, "\u03c7", "\\chi", !0), a(i, s, m, "\u03c8", "\\psi", !0), a(i, s, m, "\u03c9", "\\omega", !0), a(i, s, m, "\u03b5", "\\varepsilon", !0), a(i, s, m, "\u03d1", "\\vartheta", !0), a(i, s, m, "\u03d6", "\\varpi", !0), a(i, s, m, "\u03f1", "\\varrho", !0), a(i, s, m, "\u03c2", "\\varsigma", !0), a(i, s, m, "\u03c6", "\\varphi", !0), a(i, s, c, "\u2217", "*"), a(i, s, c, "+", "+"), a(i, s, c, "\u2212", "-"), a(i, s, c, "\u22c5", "\\cdot", !0), a(i, s, c, "\u2218", "\\circ"), a(i, s, c, "\xf7", "\\div", !0), a(i, s, c, "\xb1", "\\pm", !0), a(i, s, c, "\xd7", "\\times", !0), a(i, s, c, "\u2229", "\\cap", !0), a(i, s, c, "\u222a", "\\cup", !0), a(i, s, c, "\u2216", "\\setminus"), a(i, s, c, "\u2227", "\\land"), a(i, s, c, "\u2228", "\\lor"), a(i, s, c, "\u2227", "\\wedge", !0), a(i, s, c, "\u2228", "\\vee", !0), a(i, s, b, "\u221a", "\\surd"), a(i, s, f, "(", "("), a(i, s, f, "[", "["), a(i, s, f, "\u27e8", "\\langle", !0), a(i, s, f, "\u2223", "\\lvert"), a(i, s, f, "\u2225", "\\lVert"), a(i, s, h, ")", ")"), a(i, s, h, "]", "]"), a(i, s, h, "?", "?"), a(i, s, h, "!", "!"), a(i, s, h, "\u27e9", "\\rangle", !0), a(i, s, h, "\u2223", "\\rvert"), a(i, s, h, "\u2225", "\\rVert"), a(i, s, g, "=", "="), a(i, s, g, "<", "<"), a(i, s, g, ">", ">"), a(i, s, g, ":", ":"), a(i, s, g, "\u2248", "\\approx", !0), a(i, s, g, "\u2245", "\\cong", !0), a(i, s, g, "\u2265", "\\ge"), a(i, s, g, "\u2265", "\\geq", !0), a(i, s, g, "\u2190", "\\gets"), a(i, s, g, ">", "\\gt"), a(i, s, g, "\u2208", "\\in", !0), a(i, s, g, "\u2209", "\\notin", !0), a(i, s, g, "\u0338", "\\not"), a(i, s, g, "\u2282", "\\subset", !0), a(i, s, g, "\u2283", "\\supset", !0), a(i, s, g, "\u2286", "\\subseteq", !0), a(i, s, g, "\u2287", "\\supseteq", !0), a(i, l, g, "\u2288", "\\nsubseteq", !0), a(i, l, g, "\u2289", "\\nsupseteq", !0), a(i, s, g, "\u22a8", "\\models"), a(i, s, g, "\u2190", "\\leftarrow", !0), a(i, s, g, "\u2264", "\\le"), a(i, s, g, "\u2264", "\\leq", !0), a(i, s, g, "<", "\\lt"), a(i, s, g, "\u2260", "\\ne", !0), a(i, s, g, "\u2260", "\\neq"), a(i, s, g, "\u2192", "\\rightarrow", !0), a(i, s, g, "\u2192", "\\to"), a(i, l, g, "\u2271", "\\ngeq", !0), a(i, l, g, "\u2270", "\\nleq", !0), a(i, s, y, null, "\\!"), a(i, s, y, "\xa0", "\\ "), a(i, s, y, "\xa0", "~"), a(i, s, y, null, "\\,"), a(i, s, y, null, "\\:"), a(i, s, y, null, "\\;"), a(i, s, y, null, "\\enspace"), a(i, s, y, null, "\\qquad"), a(i, s, y, null, "\\quad"), a(i, s, y, "\xa0", "\\space"), a(i, s, y, "\xa0", "\\nobreakspace"), a(o, s, y, null, "\\!"), a(o, s, y, "\xa0", "\\ "), a(o, s, y, "\xa0", "~"), a(o, s, y, null, "\\,"), a(o, s, y, null, "\\:"), a(o, s, y, null, "\\;"), a(o, s, y, null, "\\enspace"), a(o, s, y, null, "\\qquad"), a(o, s, y, null, "\\quad"), a(o, s, y, "\xa0", "\\space"), a(o, s, y, "\xa0", "\\nobreakspace"), a(i, s, v, ",", ","), a(i, s, v, ";", ";"), a(i, s, v, ":", "\\colon"), a(i, l, c, "\u22bc", "\\barwedge", !0), a(i, l, c, "\u22bb", "\\veebar", !0), a(i, s, c, "\u2299", "\\odot", !0), a(i, s, c, "\u2295", "\\oplus", !0), a(i, s, c, "\u2297", "\\otimes", !0), a(i, s, b, "\u2202", "\\partial", !0), a(i, s, c, "\u2298", "\\oslash", !0), a(i, l, c, "\u229a", "\\circledcirc", !0), a(i, l, c, "\u22a1", "\\boxdot", !0), a(i, s, c, "\u25b3", "\\bigtriangleup"), a(i, s, c, "\u25bd", "\\bigtriangledown"), a(i, s, c, "\u2020", "\\dagger"), a(i, s, c, "\u22c4", "\\diamond"), a(i, s, c, "\u22c6", "\\star"), a(i, s, c, "\u25c3", "\\triangleleft"), a(i, s, c, "\u25b9", "\\triangleright"), a(i, s, f, "{", "\\{"), a(o, s, b, "{", "\\{"), a(o, s, b, "{", "\\textbraceleft"), a(i, s, h, "}", "\\}"), a(o, s, b, "}", "\\}"), a(o, s, b, "}", "\\textbraceright"), a(i, s, f, "{", "\\lbrace"), a(i, s, h, "}", "\\rbrace"), a(i, s, f, "[", "\\lbrack"), a(i, s, h, "]", "\\rbrack"), a(o, s, b, "<", "\\textless"), a(o, s, b, ">", "\\textgreater"), a(i, s, f, "\u230a", "\\lfloor"), a(i, s, h, "\u230b", "\\rfloor"), a(i, s, f, "\u2308", "\\lceil"), a(i, s, h, "\u2309", "\\rceil"), a(i, s, b, "\\", "\\backslash"), a(i, s, b, "\u2223", "|"), a(i, s, b, "\u2223", "\\vert"), a(o, s, b, "|", "\\textbar"), a(i, s, b, "\u2225", "\\|"), a(i, s, b, "\u2225", "\\Vert"), a(o, s, b, "\u2225", "\\textbardbl"), a(i, s, g, "\u2191", "\\uparrow", !0), a(i, s, g, "\u21d1", "\\Uparrow", !0), a(i, s, g, "\u2193", "\\downarrow", !0), a(i, s, g, "\u21d3", "\\Downarrow", !0), a(i, s, g, "\u2195", "\\updownarrow", !0), a(i, s, g, "\u21d5", "\\Updownarrow", !0), a(i, s, d, "\u2210", "\\coprod"), a(i, s, d, "\u22c1", "\\bigvee"), a(i, s, d, "\u22c0", "\\bigwedge"), a(i, s, d, "\u2a04", "\\biguplus"), a(i, s, d, "\u22c2", "\\bigcap"), a(i, s, d, "\u22c3", "\\bigcup"), a(i, s, d, "\u222b", "\\int"), a(i, s, d, "\u222b", "\\intop"), a(i, s, d, "\u222c", "\\iint"), a(i, s, d, "\u222d", "\\iiint"), a(i, s, d, "\u220f", "\\prod"), a(i, s, d, "\u2211", "\\sum"), a(i, s, d, "\u2a02", "\\bigotimes"), a(i, s, d, "\u2a01", "\\bigoplus"), a(i, s, d, "\u2a00", "\\bigodot"), a(i, s, d, "\u222e", "\\oint"), a(i, s, d, "\u2a06", "\\bigsqcup"), a(i, s, d, "\u222b", "\\smallint"), a(o, s, p, "\u2026", "\\textellipsis"), a(i, s, p, "\u2026", "\\mathellipsis"), a(o, s, p, "\u2026", "\\ldots", !0), a(i, s, p, "\u2026", "\\ldots", !0), a(i, s, p, "\u22ef", "\\@cdots", !0), a(i, s, p, "\u22f1", "\\ddots", !0), a(i, s, b, "\u22ee", "\\vdots", !0), a(i, s, u, "\u02ca", "\\acute"), a(i, s, u, "\u02cb", "\\grave"), a(i, s, u, "\xa8", "\\ddot"), a(i, s, u, "~", "\\tilde"), a(i, s, u, "\u02c9", "\\bar"), a(i, s, u, "\u02d8", "\\breve"), a(i, s, u, "\u02c7", "\\check"), a(i, s, u, "^", "\\hat"), a(i, s, u, "\u20d7", "\\vec"), a(i, s, u, "\u02d9", "\\dot"), a(i, s, u, "\u02da", "\\mathring"), a(i, s, m, "\u0131", "\\imath", !0), a(i, s, m, "\u0237", "\\jmath", !0), a(o, s, b, "\u0131", "\\i", !0), a(o, s, b, "\u0237", "\\j", !0), a(o, s, b, "\xdf", "\\ss", !0), a(o, s, b, "\xe6", "\\ae", !0), a(o, s, b, "\xe6", "\\ae", !0), a(o, s, b, "\u0153", "\\oe", !0), a(o, s, b, "\xf8", "\\o", !0), a(o, s, b, "\xc6", "\\AE", !0), a(o, s, b, "\u0152", "\\OE", !0), a(o, s, b, "\xd8", "\\O", !0), a(o, s, u, "\u02ca", "\\'"), a(o, s, u, "\u02cb", "\\`"), a(o, s, u, "\u02c6", "\\^"), a(o, s, u, "\u02dc", "\\~"), a(o, s, u, "\u02c9", "\\="), a(o, s, u, "\u02d8", "\\u"), a(o, s, u, "\u02d9", "\\."), a(o, s, u, "\u02da", "\\r"), a(o, s, u, "\u02c7", "\\v"), a(o, s, u, "\xa8", '\\"'), a(o, s, u, "\u02dd", "\\H"), a(o, s, b, "\u2013", "--"), a(o, s, b, "\u2013", "\\textendash"), a(o, s, b, "\u2014", "---"), a(o, s, b, "\u2014", "\\textemdash"), a(o, s, b, "\u2018", "`"), a(o, s, b, "\u2018", "\\textquoteleft"), a(o, s, b, "\u2019", "'"), a(o, s, b, "\u2019", "\\textquoteright"), a(o, s, b, "\u201c", "``"), a(o, s, b, "\u201c", "\\textquotedblleft"), a(o, s, b, "\u201d", "''"), a(o, s, b, "\u201d", "\\textquotedblright"), a(i, s, b, "\xb0", "\\degree"), a(o, s, b, "\xb0", "\\degree"), a(i, s, m, "\xa3", "\\pounds"), a(i, s, m, "\xa3", "\\mathsterling", !0), a(o, s, m, "\xa3", "\\pounds"), a(o, s, m, "\xa3", "\\textsterling", !0), a(i, l, b, "\u2720", "\\maltese"), a(o, l, b, "\u2720", "\\maltese"), a(o, s, y, "\xa0", "\\ "), a(o, s, y, "\xa0", " "), a(o, s, y, "\xa0", "~");
    for (var x = '0123456789/@."', w = 0; w < x.length; w++) {
      var k = x.charAt(w);
      a(i, s, b, k, k)
    }
    for (var M = '0123456789!@*()-=+[]<>|";:?/.,', S = 0; S < M.length; S++) {
      var z = M.charAt(S);
      a(o, s, b, z, z)
    }
    for (var O = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", T = 0; T < O.length; T++) {
      var A = O.charAt(T);
      a(i, s, m, A, A), a(o, s, b, A, A)
    }
    for (var N = 0; N < "\xc7\xd0\xde\xe7\xfe".length; N++) {
      var B = "\xc7\xd0\xde\xe7\xfe".charAt(N);
      a(i, s, m, B, B), a(o, s, b, B, B)
    }
    a(o, s, b, "\xf0", "\xf0"), a(o, s, b, "\u2013", "\u2013"), a(o, s, b, "\u2014", "\u2014"), a(o, s, b, "\u2018", "\u2018"), a(o, s, b, "\u2019", "\u2019"), a(o, s, b, "\u201c", "\u201c"), a(o, s, b, "\u201d", "\u201d")
  }, function(e, t, r) {
    var n = r(38);
    e.exports = function(e) {
      return Object(n(e))
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(42),
      a = r(59),
      i = {
        slant: [.25, .25, .25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [.431, .431, .431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [.677, .732, .925],
        num2: [.394, .384, .387],
        num3: [.444, .471, .504],
        denom1: [.686, .752, 1.025],
        denom2: [.345, .344, .532],
        sup1: [.413, .503, .504],
        sup2: [.363, .431, .404],
        sup3: [.289, .286, .294],
        sub1: [.15, .143, .2],
        sub2: [.247, .286, .4],
        supDrop: [.386, .353, .494],
        subDrop: [.05, .071, .1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [.25, .25, .25],
        defaultRuleThickness: [.04, .049, .049],
        bigOpSpacing1: [.111, .111, .111],
        bigOpSpacing2: [.166, .166, .166],
        bigOpSpacing3: [.2, .2, .2],
        bigOpSpacing4: [.6, .611, .611],
        bigOpSpacing5: [.1, .143, .143],
        sqrtRuleThickness: [.04, .04, .04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [.2, .2, .2]
      },
      o = {
        "\xc5": "A",
        "\xc7": "C",
        "\xd0": "D",
        "\xde": "o",
        "\xe5": "a",
        "\xe7": "c",
        "\xf0": "d",
        "\xfe": "o",
        "\u0410": "A",
        "\u0411": "B",
        "\u0412": "B",
        "\u0413": "F",
        "\u0414": "A",
        "\u0415": "E",
        "\u0416": "K",
        "\u0417": "3",
        "\u0418": "N",
        "\u0419": "N",
        "\u041a": "K",
        "\u041b": "N",
        "\u041c": "M",
        "\u041d": "H",
        "\u041e": "O",
        "\u041f": "N",
        "\u0420": "P",
        "\u0421": "C",
        "\u0422": "T",
        "\u0423": "y",
        "\u0424": "O",
        "\u0425": "X",
        "\u0426": "U",
        "\u0427": "h",
        "\u0428": "W",
        "\u0429": "W",
        "\u042a": "B",
        "\u042b": "X",
        "\u042c": "B",
        "\u042d": "3",
        "\u042e": "X",
        "\u042f": "R",
        "\u0430": "a",
        "\u0431": "b",
        "\u0432": "a",
        "\u0433": "r",
        "\u0434": "y",
        "\u0435": "e",
        "\u0436": "m",
        "\u0437": "e",
        "\u0438": "n",
        "\u0439": "n",
        "\u043a": "n",
        "\u043b": "n",
        "\u043c": "m",
        "\u043d": "n",
        "\u043e": "o",
        "\u043f": "n",
        "\u0440": "p",
        "\u0441": "c",
        "\u0442": "o",
        "\u0443": "y",
        "\u0444": "b",
        "\u0445": "x",
        "\u0446": "n",
        "\u0447": "n",
        "\u0448": "w",
        "\u0449": "w",
        "\u044a": "a",
        "\u044b": "m",
        "\u044c": "a",
        "\u044d": "e",
        "\u044e": "m",
        "\u044f": "r"
      },
      s = {};
    t.a = {
      getFontMetrics: function(e) {
        var t = void 0;
        if (!s[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
          var r = s[t] = {
            cssEmPerMu: i.quad[t] / 18
          };
          for (var n in i) i.hasOwnProperty(n) && (r[n] = i[n][t])
        }
        return s[t]
      },
      getCharacterMetrics: function(e, t, r) {
        if (!a.a[t]) throw new Error("Font metrics not found for font: " + t + ".");
        var i = e.charCodeAt(0);
        e[0] in o && (i = o[e[0]].charCodeAt(0));
        var s = a.a[t][i];
        if (s || "text" !== r || Object(n.b)(i) && (s = a.a[t][77]), s) return {
          depth: s[0],
          height: s[1],
          italic: s[2],
          skew: s[3],
          width: s[4]
        }
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(66),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = function() {
        function e(t, r, n) {
          o()(this, e), this.lexer = t, this.start = r, this.end = n, a()(this)
        }
        return l()(e, null, [{
          key: "range",
          value: function(t, r) {
            return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc
          }
        }]), e
      }();
    t.a = u
  }, function(e, t) {
    var r = 0,
      n = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
    }
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(5);
    t.a = function e(t) {
      a()(this, e), t = t || {}, this.displayMode = i.a.deflt(t.displayMode, !1), this.throwOnError = i.a.deflt(t.throwOnError, !0), this.errorColor = i.a.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.colorIsTextColor = i.a.deflt(t.colorIsTextColor, !1), this.maxSize = Math.max(0, i.a.deflt(t.maxSize, 1 / 0))
    }
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n, a = r(79),
      i = (n = a) && n.__esModule ? n : {
        default: n
      };
    t.default = function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
      return (0, i.default)(e)
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(81)(!0);
    r(48)(String, "String", function(e) {
      this._t = String(e), this._i = 0
    }, function() {
      var e, t = this._t,
        r = this._i;
      return r >= t.length ? {
        value: void 0,
        done: !0
      } : (e = n(t, r), this._i += e.length, {
        value: e,
        done: !1
      })
    })
  }, function(e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
    }
  }, function(e, t) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e
    }
  }, function(e, t, r) {
    var n = r(87),
      a = r(53);
    e.exports = Object.keys || function(e) {
      return n(e, a)
    }
  }, function(e, t, r) {
    var n = r(49),
      a = r(38);
    e.exports = function(e) {
      return n(a(e))
    }
  }, function(e, t, r) {
    var n = r(52)("keys"),
      a = r(32);
    e.exports = function(e) {
      return n[e] || (n[e] = a(e))
    }
  }, function(e, t, r) {
    "use strict";
    t.a = function(e) {
      var t = !0,
        r = !1,
        n = void 0;
      try {
        for (var a, i = o()(s); !(t = (a = i.next()).done); t = !0) {
          var l = a.value,
            u = !0,
            c = !1,
            h = void 0;
          try {
            for (var p, m = o()(l.blocks); !(u = (p = m.next()).done); u = !0) {
              var d = p.value;
              if (e >= d[0] && e <= d[1]) return l.name
            }
          } catch (e) {
            c = !0, h = e
          } finally {
            try {
              !u && m.return && m.return()
            } finally {
              if (c) throw h
            }
          }
        }
      } catch (e) {
        r = !0, n = e
      } finally {
        try {
          !t && i.return && i.return()
        } finally {
          if (r) throw n
        }
      }
      return null
    }, t.b = function(e) {
      for (var t = 0; t < l.length; t += 2)
        if (e >= l[t] && e <= l[t + 1]) return !0;
      return !1
    };
    var n = r(35),
      a = r.n(n),
      i = r(18),
      o = r.n(i),
      s = [{
        name: "latin",
        blocks: [
          [256, 591],
          [768, 879]
        ]
      }, {
        name: "cyrillic",
        blocks: [
          [1024, 1279]
        ]
      }, {
        name: "brahmic",
        blocks: [
          [2304, 4255]
        ]
      }, {
        name: "georgian",
        blocks: [
          [4256, 4351]
        ]
      }, {
        name: "cjk",
        blocks: [
          [12288, 12543],
          [19968, 40879],
          [65280, 65376]
        ]
      }, {
        name: "hangul",
        blocks: [
          [44032, 55215]
        ]
      }];
    var l = [];
    s.forEach(function(e) {
      return e.blocks.forEach(function(e) {
        return l.push.apply(l, a()(e))
      })
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(30),
      l = [
        [1, 1, 1],
        [2, 1, 1],
        [3, 1, 1],
        [4, 2, 1],
        [5, 2, 1],
        [6, 3, 1],
        [7, 4, 2],
        [8, 6, 3],
        [9, 7, 6],
        [10, 8, 7],
        [11, 10, 9]
      ],
      u = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
      c = function(e, t) {
        return t.size < 2 ? e : l[e - 1][t.size - 1]
      },
      h = function() {
        function e(t) {
          a()(this, e), this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.fontFamily = t.fontFamily, this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = u[this.size - 1], this.maxSize = t.maxSize, this._fontMetrics = void 0
        }
        return o()(e, [{
          key: "extend",
          value: function(t) {
            var r = {
              style: this.style,
              size: this.size,
              textSize: this.textSize,
              color: this.color,
              phantom: this.phantom,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
              fontShape: this.fontShape,
              maxSize: this.maxSize
            };
            for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
            return new e(r)
          }
        }, {
          key: "havingStyle",
          value: function(e) {
            return this.style === e ? this : this.extend({
              style: e,
              size: c(this.textSize, e)
            })
          }
        }, {
          key: "havingCrampedStyle",
          value: function() {
            return this.havingStyle(this.style.cramp())
          }
        }, {
          key: "havingSize",
          value: function(e) {
            return this.size === e && this.textSize === e ? this : this.extend({
              style: this.style.text(),
              size: e,
              textSize: e,
              sizeMultiplier: u[e - 1]
            })
          }
        }, {
          key: "havingBaseStyle",
          value: function(t) {
            t = t || this.style.text();
            var r = c(e.BASESIZE, t);
            return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
              style: t,
              size: r
            })
          }
        }, {
          key: "withColor",
          value: function(e) {
            return this.extend({
              color: e
            })
          }
        }, {
          key: "withPhantom",
          value: function() {
            return this.extend({
              phantom: !0
            })
          }
        }, {
          key: "withFontFamily",
          value: function(e) {
            return this.extend({
              fontFamily: e || this.fontFamily
            })
          }
        }, {
          key: "withFontWeight",
          value: function(e) {
            return this.extend({
              fontWeight: e
            })
          }
        }, {
          key: "withFontShape",
          value: function(e) {
            return this.extend({
              fontShape: e
            })
          }
        }, {
          key: "sizingClasses",
          value: function(e) {
            return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
          }
        }, {
          key: "baseSizingClasses",
          value: function() {
            return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : []
          }
        }, {
          key: "fontMetrics",
          value: function() {
            return this._fontMetrics || (this._fontMetrics = s.a.getFontMetrics(this.size)), this._fontMetrics
          }
        }, {
          key: "getColor",
          value: function() {
            return this.phantom ? "transparent" : null != this.color && e.colorMap.hasOwnProperty(this.color) ? e.colorMap[this.color] : this.color
          }
        }]), e
      }();
    h.BASESIZE = 6, h.colorMap = {
      "katex-blue": "#6495ed",
      "katex-orange": "#ffa500",
      "katex-pink": "#ff00af",
      "katex-red": "#df0030",
      "katex-green": "#28ae7b",
      "katex-gray": "gray",
      "katex-purple": "#9d38bd",
      "katex-blueA": "#ccfaff",
      "katex-blueB": "#80f6ff",
      "katex-blueC": "#63d9ea",
      "katex-blueD": "#11accd",
      "katex-blueE": "#0c7f99",
      "katex-tealA": "#94fff5",
      "katex-tealB": "#26edd5",
      "katex-tealC": "#01d1c1",
      "katex-tealD": "#01a995",
      "katex-tealE": "#208170",
      "katex-greenA": "#b6ffb0",
      "katex-greenB": "#8af281",
      "katex-greenC": "#74cf70",
      "katex-greenD": "#1fab54",
      "katex-greenE": "#0d923f",
      "katex-goldA": "#ffd0a9",
      "katex-goldB": "#ffbb71",
      "katex-goldC": "#ff9c39",
      "katex-goldD": "#e07d10",
      "katex-goldE": "#a75a05",
      "katex-redA": "#fca9a9",
      "katex-redB": "#ff8482",
      "katex-redC": "#f9685d",
      "katex-redD": "#e84d39",
      "katex-redE": "#bc2612",
      "katex-maroonA": "#ffbde0",
      "katex-maroonB": "#ff92c6",
      "katex-maroonC": "#ed5fa6",
      "katex-maroonD": "#ca337c",
      "katex-maroonE": "#9e034e",
      "katex-purpleA": "#ddd7ff",
      "katex-purpleB": "#c6b9fc",
      "katex-purpleC": "#aa87ff",
      "katex-purpleD": "#7854ab",
      "katex-purpleE": "#543b78",
      "katex-mintA": "#f5f9e8",
      "katex-mintB": "#edf2df",
      "katex-mintC": "#e0e5cc",
      "katex-grayA": "#f6f7f7",
      "katex-grayB": "#f0f1f2",
      "katex-grayC": "#e3e5e6",
      "katex-grayD": "#d6d8da",
      "katex-grayE": "#babec2",
      "katex-grayF": "#888d93",
      "katex-grayG": "#626569",
      "katex-grayH": "#3b3e40",
      "katex-grayI": "#21242c",
      "katex-kaBlue": "#314453",
      "katex-kaGreen": "#71B307"
    }, t.a = h
  }, function(e, t, r) {
    "use strict";
    var n = r(6),
      a = r(9),
      i = r(12),
      o = r(0),
      s = r(30),
      l = r(28),
      u = r(5),
      c = function(e, t, r) {
        return l.a.math[e] && l.a.math[e].replace ? s.a.getCharacterMetrics(l.a.math[e].replace, t, r) : s.a.getCharacterMetrics(e, t, r)
      },
      h = function(e, t, r, n) {
        var a = r.havingBaseStyle(t),
          i = o.a.makeSpan((n || []).concat(a.sizingClasses(r)), [e], r);
        return i.delimSizeMultiplier = a.sizeMultiplier / r.sizeMultiplier, i.height *= i.delimSizeMultiplier, i.depth *= i.delimSizeMultiplier, i.maxFontSize = a.sizeMultiplier, i
      },
      p = function(e, t, r) {
        var n = t.havingBaseStyle(r),
          a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
        e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a
      },
      m = function(e, t, r, n, i, s) {
        var l, u, c, m, d = (l = e, u = t, c = i, m = n, o.a.makeSymbol(l, "Size" + u + "-Regular", c, m)),
          f = h(o.a.makeSpan(["delimsizing", "size" + t], [d], n), a.a.TEXT, n, s);
        return r && p(f, n, a.a.TEXT), f
      },
      d = function(e, t, r) {
        var n = void 0;
        return "Size1-Regular" === t ? n = "delim-size1" : "Size4-Regular" === t && (n = "delim-size4"), {
          type: "elem",
          elem: o.a.makeSpan(["delimsizinginner", n], [o.a.makeSpan([], [o.a.makeSymbol(e, t, r)])])
        }
      },
      f = function(e, t, r, n, i, s) {
        var l = void 0,
          u = void 0,
          p = void 0,
          m = void 0;
        l = p = m = e, u = null;
        var f = "Size1-Regular";
        "\\uparrow" === e ? p = m = "\u23d0" : "\\Uparrow" === e ? p = m = "\u2016" : "\\downarrow" === e ? l = p = "\u23d0" : "\\Downarrow" === e ? l = p = "\u2016" : "\\updownarrow" === e ? (l = "\\uparrow", p = "\u23d0", m = "\\downarrow") : "\\Updownarrow" === e ? (l = "\\Uparrow", p = "\u2016", m = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (l = "\u23a1", p = "\u23a2", m = "\u23a3", f = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (l = "\u23a4", p = "\u23a5", m = "\u23a6", f = "Size4-Regular") : "\\lfloor" === e ? (p = l = "\u23a2", m = "\u23a3", f = "Size4-Regular") : "\\lceil" === e ? (l = "\u23a1", p = m = "\u23a2", f = "Size4-Regular") : "\\rfloor" === e ? (p = l = "\u23a5", m = "\u23a6", f = "Size4-Regular") : "\\rceil" === e ? (l = "\u23a4", p = m = "\u23a5", f = "Size4-Regular") : "(" === e ? (l = "\u239b", p = "\u239c", m = "\u239d", f = "Size4-Regular") : ")" === e ? (l = "\u239e", p = "\u239f", m = "\u23a0", f = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (l = "\u23a7", u = "\u23a8", m = "\u23a9", p = "\u23aa", f = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (l = "\u23ab", u = "\u23ac", m = "\u23ad", p = "\u23aa", f = "Size4-Regular") : "\\lgroup" === e ? (l = "\u23a7", m = "\u23a9", p = "\u23aa", f = "Size4-Regular") : "\\rgroup" === e ? (l = "\u23ab", m = "\u23ad", p = "\u23aa", f = "Size4-Regular") : "\\lmoustache" === e ? (l = "\u23a7", m = "\u23ad", p = "\u23aa", f = "Size4-Regular") : "\\rmoustache" === e && (l = "\u23ab", m = "\u23a9", p = "\u23aa", f = "Size4-Regular");
        var v = c(l, f, i),
          g = v.height + v.depth,
          y = c(p, f, i),
          b = y.height + y.depth,
          x = c(m, f, i),
          w = x.height + x.depth,
          k = 0,
          M = 1;
        if (null !== u) {
          var S = c(u, f, i);
          k = S.height + S.depth, M = 2
        }
        var z = g + w + k,
          O = Math.ceil((t - z) / (M * b)),
          T = z + O * M * b,
          A = n.fontMetrics().axisHeight;
        r && (A *= n.sizeMultiplier);
        var N = T / 2 - A,
          B = [];
        if (B.push(d(m, f, i)), null === u)
          for (var q = 0; q < O; q++) B.push(d(p, f, i));
        else {
          for (var C = 0; C < O; C++) B.push(d(p, f, i));
          B.push(d(u, f, i));
          for (var E = 0; E < O; E++) B.push(d(p, f, i))
        }
        B.push(d(l, f, i));
        var j = n.havingBaseStyle(a.a.TEXT),
          R = o.a.makeVList({
            positionType: "bottom",
            positionData: N,
            children: B
          }, j);
        return h(o.a.makeSpan(["delimsizing", "mult"], [R], j), a.a.TEXT, n, s)
      },
      v = function(e, t, r, n) {
        var a = void 0;
        "sqrtTall" === e && (a = "M702 80H400000v40H742v" + (r - 54 - 80) + "l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");
        var s = new i.a.pathNode(e, a),
          l = new i.a.svgNode([s], {
            width: "400em",
            height: t + "em",
            viewBox: "0 0 400000 " + r,
            preserveAspectRatio: "xMinYMin slice"
          });
        return o.a.makeSpan(["hide-tail"], [l], n)
      },
      g = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
      y = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
      b = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
      x = [0, 1.2, 1.8, 2.4, 3],
      w = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }],
      k = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "stack"
      }],
      M = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }, {
        type: "stack"
      }],
      S = function(e, t, r, n) {
        for (var a, i = Math.min(2, 3 - n.style.size); i < r.length && "stack" !== r[i].type; i++) {
          var o = c(e, "small" === (a = r[i]).type ? "Main-Regular" : "large" === a.type ? "Size" + a.size + "-Regular" : "stack" === a.type ? "Size4-Regular" : void 0, "math"),
            s = o.height + o.depth;
          if ("small" === r[i].type && (s *= n.havingBaseStyle(r[i].style).sizeMultiplier), s > t) return r[i]
        }
        return r[r.length - 1]
      },
      z = function(e, t, r, n, a, i) {
        "<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle");
        var s = void 0;
        s = u.a.contains(b, e) ? w : u.a.contains(g, e) ? M : k;
        var l, c, d, v, y, x, z, O, T = S(e, t, s, n);
        return "small" === T.type ? (l = e, c = T.style, d = r, v = n, y = a, x = i, z = o.a.makeSymbol(l, "Main-Regular", y, v), O = h(z, c, v, x), d && p(O, v, c), O) : "large" === T.type ? m(e, T.size, r, n, a, i) : f(e, t, r, n, a, i)
      };
    t.a = {
      sqrtImage: function(e, t) {
        var r = S("\\surd", e, M, t),
          n = void 0,
          a = t.sizeMultiplier,
          i = 0,
          o = 0,
          s = 0;
        "small" === r.type ? (s = 1080, o = 1 * (a = t.havingBaseStyle(r.style).sizeMultiplier / t.sizeMultiplier), (n = v("sqrtMain", i = 1.08 * a, s, t)).style.minWidth = "0.853em", n.advanceWidth = .833 * a) : "large" === r.type ? (s = 1080 * x[r.size], o = x[r.size] / a, i = (x[r.size] + .08) / a, (n = v("sqrtSize" + r.size, i, s, t)).style.minWidth = "1.02em", n.advanceWidth = 1 / a) : (i = e / a + .08, o = e / a, s = Math.floor(1e3 * e) + 80, (n = v("sqrtTall", i, s, t)).style.minWidth = "0.742em", n.advanceWidth = 1.056 / a);
        return n.height = o, n.style.height = i + "em", {
          span: n,
          ruleWidth: t.fontMetrics().sqrtRuleThickness * a
        }
      },
      sizedDelim: function(e, t, r, a, i) {
        if ("<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), u.a.contains(g, e) || u.a.contains(b, e)) return m(e, t, !1, r, a, i);
        if (u.a.contains(y, e)) return f(e, x[t], !1, r, a, i);
        throw new n.a("Illegal delimiter: '" + e + "'")
      },
      customSizedDelim: z,
      leftRightDelim: function(e, t, r, n, a, i) {
        var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
          s = 5 / n.fontMetrics().ptPerEm,
          l = Math.max(t - o, r + o),
          u = Math.max(l / 500 * 901, 2 * l - s);
        return z(e, u, !0, n, a, i)
      }
    }
  }, function(e, t, r) {
    var n = r(20),
      a = r(16).document,
      i = n(a) && n(a.createElement);
    e.exports = function(e) {
      return i ? a.createElement(e) : {}
    }
  }, function(e, t, r) {
    var n = r(25),
      a = r(8),
      i = r(24);
    e.exports = function(e, t) {
      var r = (a.Object || {})[e] || Object[e],
        o = {};
      o[e] = t(r), n(n.S + n.F * i(function() {
        r(1)
      }), "Object", o)
    }
  }, function(e, t, r) {
    var n = r(72);
    e.exports = function(e, t, r) {
      if (n(e), void 0 === t) return e;
      switch (r) {
        case 1:
          return function(r) {
            return e.call(t, r)
          };
        case 2:
          return function(r, n) {
            return e.call(t, r, n)
          };
        case 3:
          return function(r, n, a) {
            return e.call(t, r, n, a)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(82),
      a = r(25),
      i = r(83),
      o = r(26),
      s = r(21),
      l = r(17),
      u = r(84),
      c = r(54),
      h = r(91),
      p = r(11)("iterator"),
      m = !([].keys && "next" in [].keys()),
      d = "values",
      f = function() {
        return this
      };
    e.exports = function(e, t, r, v, g, y, b) {
      u(r, t, v);
      var x, w, k, M = function(e) {
          if (!m && e in T) return T[e];
          switch (e) {
            case "keys":
            case d:
              return function() {
                return new r(this, e)
              }
          }
          return function() {
            return new r(this, e)
          }
        },
        S = t + " Iterator",
        z = g == d,
        O = !1,
        T = e.prototype,
        A = T[p] || T["@@iterator"] || g && T[g],
        N = A || M(g),
        B = g ? z ? M("entries") : N : void 0,
        q = "Array" == t && T.entries || A;
      if (q && (k = h(q.call(new e))) !== Object.prototype && (c(k, S, !0), n || s(k, p) || o(k, p, f)), z && A && A.name !== d && (O = !0, N = function() {
          return A.call(this)
        }), n && !b || !m && !O && T[p] || o(T, p, N), l[t] = N, l[S] = f, g)
        if (x = {
            values: z ? N : M(d),
            keys: y ? N : M("keys"),
            entries: B
          }, b)
          for (w in x) w in T || i(T, w, x[w]);
        else a(a.P + a.F * (m || O), t, x);
      return x
    }
  }, function(e, t, r) {
    var n = r(50);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
      return "String" == n(e) ? e.split("") : Object(e)
    }
  }, function(e, t) {
    var r = {}.toString;
    e.exports = function(e) {
      return r.call(e).slice(8, -1)
    }
  }, function(e, t, r) {
    var n = r(37),
      a = Math.min;
    e.exports = function(e) {
      return e > 0 ? a(n(e), 9007199254740991) : 0
    }
  }, function(e, t, r) {
    var n = r(16),
      a = "__core-js_shared__",
      i = n[a] || (n[a] = {});
    e.exports = function(e) {
      return i[e] || (i[e] = {})
    }
  }, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function(e, t, r) {
    var n = r(15).f,
      a = r(21),
      i = r(11)("toStringTag");
    e.exports = function(e, t, r) {
      e && !a(e = r ? e : e.prototype, i) && n(e, i, {
        configurable: !0,
        value: t
      })
    }
  }, function(e, t, r) {
    var n = r(56),
      a = r(11)("iterator"),
      i = r(17);
    e.exports = r(8).getIteratorMethod = function(e) {
      if (void 0 != e) return e[a] || e["@@iterator"] || i[n(e)]
    }
  }, function(e, t, r) {
    var n = r(50),
      a = r(11)("toStringTag"),
      i = "Arguments" == n(function() {
        return arguments
      }());
    e.exports = function(e) {
      var t, r, o;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
        try {
          return e[t]
        } catch (e) {}
      }(t = Object(e), a)) ? r : i ? n(t) : "Object" == (o = n(t)) && "function" == typeof t.callee ? "Arguments" : o
    }
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = i(r(97)),
      a = i(r(18));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.default = function() {
      return function(e, t) {
        if (Array.isArray(e)) return e;
        if ((0, n.default)(Object(e))) return function(e, t) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (var s, l = (0, a.default)(e); !(n = (s = l.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
          } catch (e) {
            i = !0, o = e
          } finally {
            try {
              !n && l.return && l.return()
            } finally {
              if (i) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
  }, function(e, t, r) {
    r(99);
    for (var n = r(16), a = r(26), i = r(17), o = r(11)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
      var u = s[l],
        c = n[u],
        h = c && c.prototype;
      h && !h[o] && a(h, o, u), i[u] = i.Array
    }
  }, function(e, t, r) {
    "use strict";
    t.a = {
      "AMS-Regular": {
        65: [0, .68889, 0, 0, .72222],
        66: [0, .68889, 0, 0, .66667],
        67: [0, .68889, 0, 0, .72222],
        68: [0, .68889, 0, 0, .72222],
        69: [0, .68889, 0, 0, .66667],
        70: [0, .68889, 0, 0, .61111],
        71: [0, .68889, 0, 0, .77778],
        72: [0, .68889, 0, 0, .77778],
        73: [0, .68889, 0, 0, .38889],
        74: [.16667, .68889, 0, 0, .5],
        75: [0, .68889, 0, 0, .77778],
        76: [0, .68889, 0, 0, .66667],
        77: [0, .68889, 0, 0, .94445],
        78: [0, .68889, 0, 0, .72222],
        79: [.16667, .68889, 0, 0, .77778],
        80: [0, .68889, 0, 0, .61111],
        81: [.16667, .68889, 0, 0, .77778],
        82: [0, .68889, 0, 0, .72222],
        83: [0, .68889, 0, 0, .55556],
        84: [0, .68889, 0, 0, .66667],
        85: [0, .68889, 0, 0, .72222],
        86: [0, .68889, 0, 0, .72222],
        87: [0, .68889, 0, 0, 1],
        88: [0, .68889, 0, 0, .72222],
        89: [0, .68889, 0, 0, .72222],
        90: [0, .68889, 0, 0, .66667],
        107: [0, .68889, 0, 0, .55556],
        165: [0, .675, .025, 0, .75],
        174: [.15559, .69224, 0, 0, .94666],
        240: [0, .68889, 0, 0, .55556],
        295: [0, .68889, 0, 0, .54028],
        710: [0, .825, 0, 0, 2.33334],
        732: [0, .9, 0, 0, 2.33334],
        770: [0, .825, 0, 0, 2.33334],
        771: [0, .9, 0, 0, 2.33334],
        989: [.08167, .58167, 0, 0, .77778],
        1008: [0, .43056, .04028, 0, .66667],
        8245: [0, .54986, 0, 0, .275],
        8463: [0, .68889, 0, 0, .54028],
        8487: [0, .68889, 0, 0, .72222],
        8498: [0, .68889, 0, 0, .55556],
        8502: [0, .68889, 0, 0, .66667],
        8503: [0, .68889, 0, 0, .44445],
        8504: [0, .68889, 0, 0, .66667],
        8513: [0, .68889, 0, 0, .63889],
        8592: [-.03598, .46402, 0, 0, .5],
        8594: [-.03598, .46402, 0, 0, .5],
        8602: [-.13313, .36687, 0, 0, 1],
        8603: [-.13313, .36687, 0, 0, 1],
        8606: [.01354, .52239, 0, 0, 1],
        8608: [.01354, .52239, 0, 0, 1],
        8610: [.01354, .52239, 0, 0, 1.11111],
        8611: [.01354, .52239, 0, 0, 1.11111],
        8619: [0, .54986, 0, 0, 1],
        8620: [0, .54986, 0, 0, 1],
        8621: [-.13313, .37788, 0, 0, 1.38889],
        8622: [-.13313, .36687, 0, 0, 1],
        8624: [0, .69224, 0, 0, .5],
        8625: [0, .69224, 0, 0, .5],
        8630: [0, .43056, 0, 0, 1],
        8631: [0, .43056, 0, 0, 1],
        8634: [.08198, .58198, 0, 0, .77778],
        8635: [.08198, .58198, 0, 0, .77778],
        8638: [.19444, .69224, 0, 0, .41667],
        8639: [.19444, .69224, 0, 0, .41667],
        8642: [.19444, .69224, 0, 0, .41667],
        8643: [.19444, .69224, 0, 0, .41667],
        8644: [.1808, .675, 0, 0, 1],
        8646: [.1808, .675, 0, 0, 1],
        8647: [.1808, .675, 0, 0, 1],
        8648: [.19444, .69224, 0, 0, .83334],
        8649: [.1808, .675, 0, 0, 1],
        8650: [.19444, .69224, 0, 0, .83334],
        8651: [.01354, .52239, 0, 0, 1],
        8652: [.01354, .52239, 0, 0, 1],
        8653: [-.13313, .36687, 0, 0, 1],
        8654: [-.13313, .36687, 0, 0, 1],
        8655: [-.13313, .36687, 0, 0, 1],
        8666: [.13667, .63667, 0, 0, 1],
        8667: [.13667, .63667, 0, 0, 1],
        8669: [-.13313, .37788, 0, 0, 1],
        8672: [-.064, .437, 0, 0, 1187],
        8674: [-.064, .437, 0, 0, 1167],
        8705: [0, .825, 0, 0, .5],
        8708: [0, .68889, 0, 0, .55556],
        8709: [.08167, .58167, 0, 0, .77778],
        8717: [0, .43056, 0, 0, .42917],
        8722: [-.03598, .46402, 0, 0, .5],
        8724: [.08198, .69224, 0, 0, .77778],
        8726: [.08167, .58167, 0, 0, .77778],
        8733: [0, .69224, 0, 0, .77778],
        8736: [0, .69224, 0, 0, .72222],
        8737: [0, .69224, 0, 0, .72222],
        8738: [.03517, .52239, 0, 0, .72222],
        8739: [.08167, .58167, 0, 0, .22222],
        8740: [.25142, .74111, 0, 0, .27778],
        8741: [.08167, .58167, 0, 0, .38889],
        8742: [.25142, .74111, 0, 0, .5],
        8756: [0, .69224, 0, 0, .66667],
        8757: [0, .69224, 0, 0, .66667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8765: [-.13313, .37788, 0, 0, .77778],
        8769: [-.13313, .36687, 0, 0, .77778],
        8770: [-.03625, .46375, 0, 0, .77778],
        8774: [.30274, .79383, 0, 0, .77778],
        8776: [-.01688, .48312, 0, 0, .77778],
        8778: [.08167, .58167, 0, 0, .77778],
        8782: [.06062, .54986, 0, 0, .77778],
        8783: [.06062, .54986, 0, 0, .77778],
        8785: [.08198, .58198, 0, 0, .77778],
        8786: [.08198, .58198, 0, 0, .77778],
        8787: [.08198, .58198, 0, 0, .77778],
        8790: [0, .69224, 0, 0, .77778],
        8791: [.22958, .72958, 0, 0, .77778],
        8796: [.08198, .91667, 0, 0, .77778],
        8806: [.25583, .75583, 0, 0, .77778],
        8807: [.25583, .75583, 0, 0, .77778],
        8808: [.25142, .75726, 0, 0, .77778],
        8809: [.25142, .75726, 0, 0, .77778],
        8812: [.25583, .75583, 0, 0, .5],
        8814: [.20576, .70576, 0, 0, .77778],
        8815: [.20576, .70576, 0, 0, .77778],
        8816: [.30274, .79383, 0, 0, .77778],
        8817: [.30274, .79383, 0, 0, .77778],
        8818: [.22958, .72958, 0, 0, .77778],
        8819: [.22958, .72958, 0, 0, .77778],
        8822: [.1808, .675, 0, 0, .77778],
        8823: [.1808, .675, 0, 0, .77778],
        8828: [.13667, .63667, 0, 0, .77778],
        8829: [.13667, .63667, 0, 0, .77778],
        8830: [.22958, .72958, 0, 0, .77778],
        8831: [.22958, .72958, 0, 0, .77778],
        8832: [.20576, .70576, 0, 0, .77778],
        8833: [.20576, .70576, 0, 0, .77778],
        8840: [.30274, .79383, 0, 0, .77778],
        8841: [.30274, .79383, 0, 0, .77778],
        8842: [.13597, .63597, 0, 0, .77778],
        8843: [.13597, .63597, 0, 0, .77778],
        8847: [.03517, .54986, 0, 0, .77778],
        8848: [.03517, .54986, 0, 0, .77778],
        8858: [.08198, .58198, 0, 0, .77778],
        8859: [.08198, .58198, 0, 0, .77778],
        8861: [.08198, .58198, 0, 0, .77778],
        8862: [0, .675, 0, 0, .77778],
        8863: [0, .675, 0, 0, .77778],
        8864: [0, .675, 0, 0, .77778],
        8865: [0, .675, 0, 0, .77778],
        8872: [0, .69224, 0, 0, .61111],
        8873: [0, .69224, 0, 0, .72222],
        8874: [0, .69224, 0, 0, .88889],
        8876: [0, .68889, 0, 0, .61111],
        8877: [0, .68889, 0, 0, .61111],
        8878: [0, .68889, 0, 0, .72222],
        8879: [0, .68889, 0, 0, .72222],
        8882: [.03517, .54986, 0, 0, .77778],
        8883: [.03517, .54986, 0, 0, .77778],
        8884: [.13667, .63667, 0, 0, .77778],
        8885: [.13667, .63667, 0, 0, .77778],
        8888: [0, .54986, 0, 0, 1.11111],
        8890: [.19444, .43056, 0, 0, .55556],
        8891: [.19444, .69224, 0, 0, .61111],
        8892: [.19444, .69224, 0, 0, .61111],
        8901: [0, .54986, 0, 0, .27778],
        8903: [.08167, .58167, 0, 0, .77778],
        8905: [.08167, .58167, 0, 0, .77778],
        8906: [.08167, .58167, 0, 0, .77778],
        8907: [0, .69224, 0, 0, .77778],
        8908: [0, .69224, 0, 0, .77778],
        8909: [-.03598, .46402, 0, 0, .77778],
        8910: [0, .54986, 0, 0, .76042],
        8911: [0, .54986, 0, 0, .76042],
        8912: [.03517, .54986, 0, 0, .77778],
        8913: [.03517, .54986, 0, 0, .77778],
        8914: [0, .54986, 0, 0, .66667],
        8915: [0, .54986, 0, 0, .66667],
        8916: [0, .69224, 0, 0, .66667],
        8918: [.0391, .5391, 0, 0, .77778],
        8919: [.0391, .5391, 0, 0, .77778],
        8920: [.03517, .54986, 0, 0, 1.33334],
        8921: [.03517, .54986, 0, 0, 1.33334],
        8922: [.38569, .88569, 0, 0, .77778],
        8923: [.38569, .88569, 0, 0, .77778],
        8926: [.13667, .63667, 0, 0, .77778],
        8927: [.13667, .63667, 0, 0, .77778],
        8928: [.30274, .79383, 0, 0, .77778],
        8929: [.30274, .79383, 0, 0, .77778],
        8934: [.23222, .74111, 0, 0, .77778],
        8935: [.23222, .74111, 0, 0, .77778],
        8936: [.23222, .74111, 0, 0, .77778],
        8937: [.23222, .74111, 0, 0, .77778],
        8938: [.20576, .70576, 0, 0, .77778],
        8939: [.20576, .70576, 0, 0, .77778],
        8940: [.30274, .79383, 0, 0, .77778],
        8941: [.30274, .79383, 0, 0, .77778],
        8994: [.19444, .69224, 0, 0, .77778],
        8995: [.19444, .69224, 0, 0, .77778],
        9416: [.15559, .69224, 0, 0, .90222],
        9484: [0, .69224, 0, 0, .5],
        9488: [0, .69224, 0, 0, .5],
        9492: [0, .37788, 0, 0, .5],
        9496: [0, .37788, 0, 0, .5],
        9585: [.19444, .68889, 0, 0, .88889],
        9586: [.19444, .74111, 0, 0, .88889],
        9632: [0, .675, 0, 0, .77778],
        9633: [0, .675, 0, 0, .77778],
        9650: [0, .54986, 0, 0, .72222],
        9651: [0, .54986, 0, 0, .72222],
        9654: [.03517, .54986, 0, 0, .77778],
        9660: [0, .54986, 0, 0, .72222],
        9661: [0, .54986, 0, 0, .72222],
        9664: [.03517, .54986, 0, 0, .77778],
        9674: [.11111, .69224, 0, 0, .66667],
        9733: [.19444, .69224, 0, 0, .94445],
        10003: [0, .69224, 0, 0, .83334],
        10016: [0, .69224, 0, 0, .83334],
        10731: [.11111, .69224, 0, 0, .66667],
        10846: [.19444, .75583, 0, 0, .61111],
        10877: [.13667, .63667, 0, 0, .77778],
        10878: [.13667, .63667, 0, 0, .77778],
        10885: [.25583, .75583, 0, 0, .77778],
        10886: [.25583, .75583, 0, 0, .77778],
        10887: [.13597, .63597, 0, 0, .77778],
        10888: [.13597, .63597, 0, 0, .77778],
        10889: [.26167, .75726, 0, 0, .77778],
        10890: [.26167, .75726, 0, 0, .77778],
        10891: [.48256, .98256, 0, 0, .77778],
        10892: [.48256, .98256, 0, 0, .77778],
        10901: [.13667, .63667, 0, 0, .77778],
        10902: [.13667, .63667, 0, 0, .77778],
        10933: [.25142, .75726, 0, 0, .77778],
        10934: [.25142, .75726, 0, 0, .77778],
        10935: [.26167, .75726, 0, 0, .77778],
        10936: [.26167, .75726, 0, 0, .77778],
        10937: [.26167, .75726, 0, 0, .77778],
        10938: [.26167, .75726, 0, 0, .77778],
        10949: [.25583, .75583, 0, 0, .77778],
        10950: [.25583, .75583, 0, 0, .77778],
        10955: [.28481, .79383, 0, 0, .77778],
        10956: [.28481, .79383, 0, 0, .77778],
        57350: [.08167, .58167, 0, 0, .22222],
        57351: [.08167, .58167, 0, 0, .38889],
        57352: [.08167, .58167, 0, 0, .77778],
        57353: [0, .43056, .04028, 0, .66667],
        57356: [.25142, .75726, 0, 0, .77778],
        57357: [.25142, .75726, 0, 0, .77778],
        57358: [.41951, .91951, 0, 0, .77778],
        57359: [.30274, .79383, 0, 0, .77778],
        57360: [.30274, .79383, 0, 0, .77778],
        57361: [.41951, .91951, 0, 0, .77778],
        57366: [.25142, .75726, 0, 0, .77778],
        57367: [.25142, .75726, 0, 0, .77778],
        57368: [.25142, .75726, 0, 0, .77778],
        57369: [.25142, .75726, 0, 0, .77778],
        57370: [.13597, .63597, 0, 0, .77778],
        57371: [.13597, .63597, 0, 0, .77778]
      },
      "Caligraphic-Regular": {
        48: [0, .43056, 0, 0, .5],
        49: [0, .43056, 0, 0, .5],
        50: [0, .43056, 0, 0, .5],
        51: [.19444, .43056, 0, 0, .5],
        52: [.19444, .43056, 0, 0, .5],
        53: [.19444, .43056, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [.19444, .43056, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [.19444, .43056, 0, 0, .5],
        65: [0, .68333, 0, .19445, .79847],
        66: [0, .68333, .03041, .13889, .65681],
        67: [0, .68333, .05834, .13889, .52653],
        68: [0, .68333, .02778, .08334, .77139],
        69: [0, .68333, .08944, .11111, .52778],
        70: [0, .68333, .09931, .11111, .71875],
        71: [.09722, .68333, .0593, .11111, .59487],
        72: [0, .68333, .00965, .11111, .84452],
        73: [0, .68333, .07382, 0, .54452],
        74: [.09722, .68333, .18472, .16667, .67778],
        75: [0, .68333, .01445, .05556, .76195],
        76: [0, .68333, 0, .13889, .68972],
        77: [0, .68333, 0, .13889, 1.2009],
        78: [0, .68333, .14736, .08334, .82049],
        79: [0, .68333, .02778, .11111, .79611],
        80: [0, .68333, .08222, .08334, .69556],
        81: [.09722, .68333, 0, .11111, .81667],
        82: [0, .68333, 0, .08334, .8475],
        83: [0, .68333, .075, .13889, .60556],
        84: [0, .68333, .25417, 0, .54464],
        85: [0, .68333, .09931, .08334, .62583],
        86: [0, .68333, .08222, 0, .61278],
        87: [0, .68333, .08222, .08334, .98778],
        88: [0, .68333, .14643, .13889, .7133],
        89: [.09722, .68333, .08222, .08334, .66834],
        90: [0, .68333, .07944, .13889, .72473]
      },
      "Fraktur-Regular": {
        33: [0, .69141, 0, 0, .29574],
        34: [0, .69141, 0, 0, .21471],
        38: [0, .69141, 0, 0, .73786],
        39: [0, .69141, 0, 0, .21201],
        40: [.24982, .74947, 0, 0, .38865],
        41: [.24982, .74947, 0, 0, .38865],
        42: [0, .62119, 0, 0, .27764],
        43: [.08319, .58283, 0, 0, .75623],
        44: [0, .10803, 0, 0, .27764],
        45: [.08319, .58283, 0, 0, .75623],
        46: [0, .10803, 0, 0, .27764],
        47: [.24982, .74947, 0, 0, .50181],
        48: [0, .47534, 0, 0, .50181],
        49: [0, .47534, 0, 0, .50181],
        50: [0, .47534, 0, 0, .50181],
        51: [.18906, .47534, 0, 0, .50181],
        52: [.18906, .47534, 0, 0, .50181],
        53: [.18906, .47534, 0, 0, .50181],
        54: [0, .69141, 0, 0, .50181],
        55: [.18906, .47534, 0, 0, .50181],
        56: [0, .69141, 0, 0, .50181],
        57: [.18906, .47534, 0, 0, .50181],
        58: [0, .47534, 0, 0, .21606],
        59: [.12604, .47534, 0, 0, .21606],
        61: [-.13099, .36866, 0, 0, .75623],
        63: [0, .69141, 0, 0, .36245],
        65: [0, .69141, 0, 0, .7176],
        66: [0, .69141, 0, 0, .88397],
        67: [0, .69141, 0, 0, .61254],
        68: [0, .69141, 0, 0, .83158],
        69: [0, .69141, 0, 0, .66278],
        70: [.12604, .69141, 0, 0, .61119],
        71: [0, .69141, 0, 0, .78539],
        72: [.06302, .69141, 0, 0, .7203],
        73: [0, .69141, 0, 0, .55448],
        74: [.12604, .69141, 0, 0, .55231],
        75: [0, .69141, 0, 0, .66845],
        76: [0, .69141, 0, 0, .66602],
        77: [0, .69141, 0, 0, 1.04953],
        78: [0, .69141, 0, 0, .83212],
        79: [0, .69141, 0, 0, .82699],
        80: [.18906, .69141, 0, 0, .82753],
        81: [.03781, .69141, 0, 0, .82699],
        82: [0, .69141, 0, 0, .82807],
        83: [0, .69141, 0, 0, .82861],
        84: [0, .69141, 0, 0, .66899],
        85: [0, .69141, 0, 0, .64576],
        86: [0, .69141, 0, 0, .83131],
        87: [0, .69141, 0, 0, 1.04602],
        88: [0, .69141, 0, 0, .71922],
        89: [.18906, .69141, 0, 0, .83293],
        90: [.12604, .69141, 0, 0, .60201],
        91: [.24982, .74947, 0, 0, .27764],
        93: [.24982, .74947, 0, 0, .27764],
        94: [0, .69141, 0, 0, .49965],
        97: [0, .47534, 0, 0, .50046],
        98: [0, .69141, 0, 0, .51315],
        99: [0, .47534, 0, 0, .38946],
        100: [0, .62119, 0, 0, .49857],
        101: [0, .47534, 0, 0, .40053],
        102: [.18906, .69141, 0, 0, .32626],
        103: [.18906, .47534, 0, 0, .5037],
        104: [.18906, .69141, 0, 0, .52126],
        105: [0, .69141, 0, 0, .27899],
        106: [0, .69141, 0, 0, .28088],
        107: [0, .69141, 0, 0, .38946],
        108: [0, .69141, 0, 0, .27953],
        109: [0, .47534, 0, 0, .76676],
        110: [0, .47534, 0, 0, .52666],
        111: [0, .47534, 0, 0, .48885],
        112: [.18906, .52396, 0, 0, .50046],
        113: [.18906, .47534, 0, 0, .48912],
        114: [0, .47534, 0, 0, .38919],
        115: [0, .47534, 0, 0, .44266],
        116: [0, .62119, 0, 0, .33301],
        117: [0, .47534, 0, 0, .5172],
        118: [0, .52396, 0, 0, .5118],
        119: [0, .52396, 0, 0, .77351],
        120: [.18906, .47534, 0, 0, .38865],
        121: [.18906, .47534, 0, 0, .49884],
        122: [.18906, .47534, 0, 0, .39054],
        8216: [0, .69141, 0, 0, .21471],
        8217: [0, .69141, 0, 0, .21471],
        58112: [0, .62119, 0, 0, .49749],
        58113: [0, .62119, 0, 0, .4983],
        58114: [.18906, .69141, 0, 0, .33328],
        58115: [.18906, .69141, 0, 0, .32923],
        58116: [.18906, .47534, 0, 0, .50343],
        58117: [0, .69141, 0, 0, .33301],
        58118: [0, .62119, 0, 0, .33409],
        58119: [0, .47534, 0, 0, .50073]
      },
      "Main-Bold": {
        33: [0, .69444, 0, 0, .35],
        34: [0, .69444, 0, 0, .60278],
        35: [.19444, .69444, 0, 0, .95833],
        36: [.05556, .75, 0, 0, .575],
        37: [.05556, .75, 0, 0, .95833],
        38: [0, .69444, 0, 0, .89444],
        39: [0, .69444, 0, 0, .31944],
        40: [.25, .75, 0, 0, .44722],
        41: [.25, .75, 0, 0, .44722],
        42: [0, .75, 0, 0, .575],
        43: [.13333, .63333, 0, 0, .89444],
        44: [.19444, .15556, 0, 0, .31944],
        45: [0, .44444, 0, 0, .38333],
        46: [0, .15556, 0, 0, .31944],
        47: [.25, .75, 0, 0, .575],
        48: [0, .64444, 0, 0, .575],
        49: [0, .64444, 0, 0, .575],
        50: [0, .64444, 0, 0, .575],
        51: [0, .64444, 0, 0, .575],
        52: [0, .64444, 0, 0, .575],
        53: [0, .64444, 0, 0, .575],
        54: [0, .64444, 0, 0, .575],
        55: [0, .64444, 0, 0, .575],
        56: [0, .64444, 0, 0, .575],
        57: [0, .64444, 0, 0, .575],
        58: [0, .44444, 0, 0, .31944],
        59: [.19444, .44444, 0, 0, .31944],
        60: [.08556, .58556, 0, 0, .89444],
        61: [-.10889, .39111, 0, 0, .89444],
        62: [.08556, .58556, 0, 0, .89444],
        63: [0, .69444, 0, 0, .54305],
        64: [0, .69444, 0, 0, .89444],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, 0, 0, .81805],
        67: [0, .68611, 0, 0, .83055],
        68: [0, .68611, 0, 0, .88194],
        69: [0, .68611, 0, 0, .75555],
        70: [0, .68611, 0, 0, .72361],
        71: [0, .68611, 0, 0, .90416],
        72: [0, .68611, 0, 0, .9],
        73: [0, .68611, 0, 0, .43611],
        74: [0, .68611, 0, 0, .59444],
        75: [0, .68611, 0, 0, .90138],
        76: [0, .68611, 0, 0, .69166],
        77: [0, .68611, 0, 0, 1.09166],
        78: [0, .68611, 0, 0, .9],
        79: [0, .68611, 0, 0, .86388],
        80: [0, .68611, 0, 0, .78611],
        81: [.19444, .68611, 0, 0, .86388],
        82: [0, .68611, 0, 0, .8625],
        83: [0, .68611, 0, 0, .63889],
        84: [0, .68611, 0, 0, .8],
        85: [0, .68611, 0, 0, .88472],
        86: [0, .68611, .01597, 0, .86944],
        87: [0, .68611, .01597, 0, 1.18888],
        88: [0, .68611, 0, 0, .86944],
        89: [0, .68611, .02875, 0, .86944],
        90: [0, .68611, 0, 0, .70277],
        91: [.25, .75, 0, 0, .31944],
        92: [.25, .75, 0, 0, .575],
        93: [.25, .75, 0, 0, .31944],
        94: [0, .69444, 0, 0, .575],
        95: [.31, .13444, .03194, 0, .575],
        97: [0, .44444, 0, 0, .55902],
        98: [0, .69444, 0, 0, .63889],
        99: [0, .44444, 0, 0, .51111],
        100: [0, .69444, 0, 0, .63889],
        101: [0, .44444, 0, 0, .52708],
        102: [0, .69444, .10903, 0, .35139],
        103: [.19444, .44444, .01597, 0, .575],
        104: [0, .69444, 0, 0, .63889],
        105: [0, .69444, 0, 0, .31944],
        106: [.19444, .69444, 0, 0, .35139],
        107: [0, .69444, 0, 0, .60694],
        108: [0, .69444, 0, 0, .31944],
        109: [0, .44444, 0, 0, .95833],
        110: [0, .44444, 0, 0, .63889],
        111: [0, .44444, 0, 0, .575],
        112: [.19444, .44444, 0, 0, .63889],
        113: [.19444, .44444, 0, 0, .60694],
        114: [0, .44444, 0, 0, .47361],
        115: [0, .44444, 0, 0, .45361],
        116: [0, .63492, 0, 0, .44722],
        117: [0, .44444, 0, 0, .63889],
        118: [0, .44444, .01597, 0, .60694],
        119: [0, .44444, .01597, 0, .83055],
        120: [0, .44444, 0, 0, .60694],
        121: [.19444, .44444, .01597, 0, .60694],
        122: [0, .44444, 0, 0, .51111],
        123: [.25, .75, 0, 0, .575],
        124: [.25, .75, 0, 0, .31944],
        125: [.25, .75, 0, 0, .575],
        126: [.35, .34444, 0, 0, .575],
        168: [0, .69444, 0, 0, .575],
        172: [0, .44444, 0, 0, .76666],
        176: [0, .69444, 0, 0, .86944],
        177: [.13333, .63333, 0, 0, .89444],
        198: [0, .68611, 0, 0, 1.04166],
        215: [.13333, .63333, 0, 0, .89444],
        216: [.04861, .73472, 0, 0, .89444],
        223: [0, .69444, 0, 0, .59722],
        230: [0, .44444, 0, 0, .83055],
        247: [.13333, .63333, 0, 0, .89444],
        248: [.09722, .54167, 0, 0, .575],
        305: [0, .44444, 0, 0, .31944],
        338: [0, .68611, 0, 0, 1.16944],
        339: [0, .44444, 0, 0, .89444],
        567: [.19444, .44444, 0, 0, .35139],
        710: [0, .69444, 0, 0, .575],
        711: [0, .63194, 0, 0, .575],
        713: [0, .59611, 0, 0, .575],
        714: [0, .69444, 0, 0, .575],
        715: [0, .69444, 0, 0, .575],
        728: [0, .69444, 0, 0, .575],
        729: [0, .69444, 0, 0, .31944],
        730: [0, .69444, 0, 0, .86944],
        732: [0, .69444, 0, 0, .575],
        733: [0, .69444, 0, 0, .575],
        824: [.19444, .69444, 0, 0, 0],
        915: [0, .68611, 0, 0, .69166],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, 0, 0, .89444],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, 0, 0, .76666],
        928: [0, .68611, 0, 0, .9],
        931: [0, .68611, 0, 0, .83055],
        933: [0, .68611, 0, 0, .89444],
        934: [0, .68611, 0, 0, .83055],
        936: [0, .68611, 0, 0, .89444],
        937: [0, .68611, 0, 0, .83055],
        8211: [0, .44444, .03194, 0, .575],
        8212: [0, .44444, .03194, 0, 1.14999],
        8216: [0, .69444, 0, 0, .31944],
        8217: [0, .69444, 0, 0, .31944],
        8220: [0, .69444, 0, 0, .60278],
        8221: [0, .69444, 0, 0, .60278],
        8224: [.19444, .69444, 0, 0, .51111],
        8225: [.19444, .69444, 0, 0, .51111],
        8242: [0, .55556, 0, 0, .34444],
        8407: [0, .72444, .15486, 0, .575],
        8463: [0, .69444, 0, 0, .66759],
        8465: [0, .69444, 0, 0, .83055],
        8467: [0, .69444, 0, 0, .47361],
        8472: [.19444, .44444, 0, 0, .74027],
        8476: [0, .69444, 0, 0, .83055],
        8501: [0, .69444, 0, 0, .70277],
        8592: [-.10889, .39111, 0, 0, 1.14999],
        8593: [.19444, .69444, 0, 0, .575],
        8594: [-.10889, .39111, 0, 0, 1.14999],
        8595: [.19444, .69444, 0, 0, .575],
        8596: [-.10889, .39111, 0, 0, 1.14999],
        8597: [.25, .75, 0, 0, .575],
        8598: [.19444, .69444, 0, 0, 1.14999],
        8599: [.19444, .69444, 0, 0, 1.14999],
        8600: [.19444, .69444, 0, 0, 1.14999],
        8601: [.19444, .69444, 0, 0, 1.14999],
        8636: [-.10889, .39111, 0, 0, 1.14999],
        8637: [-.10889, .39111, 0, 0, 1.14999],
        8640: [-.10889, .39111, 0, 0, 1.14999],
        8641: [-.10889, .39111, 0, 0, 1.14999],
        8656: [-.10889, .39111, 0, 0, 1.14999],
        8657: [.19444, .69444, 0, 0, .70277],
        8658: [-.10889, .39111, 0, 0, 1.14999],
        8659: [.19444, .69444, 0, 0, .70277],
        8660: [-.10889, .39111, 0, 0, 1.14999],
        8661: [.25, .75, 0, 0, .70277],
        8704: [0, .69444, 0, 0, .63889],
        8706: [0, .69444, .06389, 0, .62847],
        8707: [0, .69444, 0, 0, .63889],
        8709: [.05556, .75, 0, 0, .575],
        8711: [0, .68611, 0, 0, .95833],
        8712: [.08556, .58556, 0, 0, .76666],
        8715: [.08556, .58556, 0, 0, .76666],
        8722: [.13333, .63333, 0, 0, .89444],
        8723: [.13333, .63333, 0, 0, .89444],
        8725: [.25, .75, 0, 0, .575],
        8726: [.25, .75, 0, 0, .575],
        8727: [-.02778, .47222, 0, 0, .575],
        8728: [-.02639, .47361, 0, 0, .575],
        8729: [-.02639, .47361, 0, 0, .575],
        8730: [.18, .82, 0, 0, .95833],
        8733: [0, .44444, 0, 0, .89444],
        8734: [0, .44444, 0, 0, 1.14999],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .31944],
        8741: [.25, .75, 0, 0, .575],
        8743: [0, .55556, 0, 0, .76666],
        8744: [0, .55556, 0, 0, .76666],
        8745: [0, .55556, 0, 0, .76666],
        8746: [0, .55556, 0, 0, .76666],
        8747: [.19444, .69444, .12778, 0, .56875],
        8764: [-.10889, .39111, 0, 0, .89444],
        8768: [.19444, .69444, 0, 0, .31944],
        8771: [.00222, .50222, 0, 0, .89444],
        8776: [.02444, .52444, 0, 0, .89444],
        8781: [.00222, .50222, 0, 0, .89444],
        8801: [.00222, .50222, 0, 0, .89444],
        8804: [.19667, .69667, 0, 0, .89444],
        8805: [.19667, .69667, 0, 0, .89444],
        8810: [.08556, .58556, 0, 0, 1.14999],
        8811: [.08556, .58556, 0, 0, 1.14999],
        8826: [.08556, .58556, 0, 0, .89444],
        8827: [.08556, .58556, 0, 0, .89444],
        8834: [.08556, .58556, 0, 0, .89444],
        8835: [.08556, .58556, 0, 0, .89444],
        8838: [.19667, .69667, 0, 0, .89444],
        8839: [.19667, .69667, 0, 0, .89444],
        8846: [0, .55556, 0, 0, .76666],
        8849: [.19667, .69667, 0, 0, .89444],
        8850: [.19667, .69667, 0, 0, .89444],
        8851: [0, .55556, 0, 0, .76666],
        8852: [0, .55556, 0, 0, .76666],
        8853: [.13333, .63333, 0, 0, .89444],
        8854: [.13333, .63333, 0, 0, .89444],
        8855: [.13333, .63333, 0, 0, .89444],
        8856: [.13333, .63333, 0, 0, .89444],
        8857: [.13333, .63333, 0, 0, .89444],
        8866: [0, .69444, 0, 0, .70277],
        8867: [0, .69444, 0, 0, .70277],
        8868: [0, .69444, 0, 0, .89444],
        8869: [0, .69444, 0, 0, .89444],
        8900: [-.02639, .47361, 0, 0, .575],
        8901: [-.02639, .47361, 0, 0, .31944],
        8902: [-.02778, .47222, 0, 0, .575],
        8968: [.25, .75, 0, 0, .51111],
        8969: [.25, .75, 0, 0, .51111],
        8970: [.25, .75, 0, 0, .51111],
        8971: [.25, .75, 0, 0, .51111],
        8994: [-.13889, .36111, 0, 0, 1.14999],
        8995: [-.13889, .36111, 0, 0, 1.14999],
        9651: [.19444, .69444, 0, 0, 1.02222],
        9657: [-.02778, .47222, 0, 0, .575],
        9661: [.19444, .69444, 0, 0, 1.02222],
        9667: [-.02778, .47222, 0, 0, .575],
        9711: [.19444, .69444, 0, 0, 1.14999],
        9824: [.12963, .69444, 0, 0, .89444],
        9825: [.12963, .69444, 0, 0, .89444],
        9826: [.12963, .69444, 0, 0, .89444],
        9827: [.12963, .69444, 0, 0, .89444],
        9837: [0, .75, 0, 0, .44722],
        9838: [.19444, .69444, 0, 0, .44722],
        9839: [.19444, .69444, 0, 0, .44722],
        10216: [.25, .75, 0, 0, .44722],
        10217: [.25, .75, 0, 0, .44722],
        10815: [0, .68611, 0, 0, .9],
        10927: [.19667, .69667, 0, 0, .89444],
        10928: [.19667, .69667, 0, 0, .89444]
      },
      "Main-BoldItalic": {
        33: [0, .69444, .11417, 0, .38611],
        34: [0, .69444, .07939, 0, .62055],
        35: [.19444, .69444, .06833, 0, .94444],
        37: [.05556, .75, .12861, 0, .94444],
        38: [0, .69444, .08528, 0, .88555],
        39: [0, .69444, .12945, 0, .35555],
        40: [.25, .75, .15806, 0, .47333],
        41: [.25, .75, .03306, 0, .47333],
        42: [0, .75, .14333, 0, .59111],
        43: [.10333, .60333, .03306, 0, .88555],
        44: [.19444, .14722, 0, 0, .35555],
        45: [0, .44444, .02611, 0, .41444],
        46: [0, .14722, 0, 0, .35555],
        47: [.25, .75, .15806, 0, .59111],
        48: [0, .64444, .13167, 0, .59111],
        49: [0, .64444, .13167, 0, .59111],
        50: [0, .64444, .13167, 0, .59111],
        51: [0, .64444, .13167, 0, .59111],
        52: [.19444, .64444, .13167, 0, .59111],
        53: [0, .64444, .13167, 0, .59111],
        54: [0, .64444, .13167, 0, .59111],
        55: [.19444, .64444, .13167, 0, .59111],
        56: [0, .64444, .13167, 0, .59111],
        57: [0, .64444, .13167, 0, .59111],
        58: [0, .44444, .06695, 0, .35555],
        59: [.19444, .44444, .06695, 0, .35555],
        61: [-.10889, .39111, .06833, 0, .88555],
        63: [0, .69444, .11472, 0, .59111],
        64: [0, .69444, .09208, 0, .88555],
        65: [0, .68611, 0, 0, .86555],
        66: [0, .68611, .0992, 0, .81666],
        67: [0, .68611, .14208, 0, .82666],
        68: [0, .68611, .09062, 0, .87555],
        69: [0, .68611, .11431, 0, .75666],
        70: [0, .68611, .12903, 0, .72722],
        71: [0, .68611, .07347, 0, .89527],
        72: [0, .68611, .17208, 0, .8961],
        73: [0, .68611, .15681, 0, .47166],
        74: [0, .68611, .145, 0, .61055],
        75: [0, .68611, .14208, 0, .89499],
        76: [0, .68611, 0, 0, .69777],
        77: [0, .68611, .17208, 0, 1.07277],
        78: [0, .68611, .17208, 0, .8961],
        79: [0, .68611, .09062, 0, .85499],
        80: [0, .68611, .0992, 0, .78721],
        81: [.19444, .68611, .09062, 0, .85499],
        82: [0, .68611, .02559, 0, .85944],
        83: [0, .68611, .11264, 0, .64999],
        84: [0, .68611, .12903, 0, .7961],
        85: [0, .68611, .17208, 0, .88083],
        86: [0, .68611, .18625, 0, .86555],
        87: [0, .68611, .18625, 0, 1.15999],
        88: [0, .68611, .15681, 0, .86555],
        89: [0, .68611, .19803, 0, .86555],
        90: [0, .68611, .14208, 0, .70888],
        91: [.25, .75, .1875, 0, .35611],
        93: [.25, .75, .09972, 0, .35611],
        94: [0, .69444, .06709, 0, .59111],
        95: [.31, .13444, .09811, 0, .59111],
        97: [0, .44444, .09426, 0, .59111],
        98: [0, .69444, .07861, 0, .53222],
        99: [0, .44444, .05222, 0, .53222],
        100: [0, .69444, .10861, 0, .59111],
        101: [0, .44444, .085, 0, .53222],
        102: [.19444, .69444, .21778, 0, .4],
        103: [.19444, .44444, .105, 0, .53222],
        104: [0, .69444, .09426, 0, .59111],
        105: [0, .69326, .11387, 0, .35555],
        106: [.19444, .69326, .1672, 0, .35555],
        107: [0, .69444, .11111, 0, .53222],
        108: [0, .69444, .10861, 0, .29666],
        109: [0, .44444, .09426, 0, .94444],
        110: [0, .44444, .09426, 0, .64999],
        111: [0, .44444, .07861, 0, .59111],
        112: [.19444, .44444, .07861, 0, .59111],
        113: [.19444, .44444, .105, 0, .53222],
        114: [0, .44444, .11111, 0, .50167],
        115: [0, .44444, .08167, 0, .48694],
        116: [0, .63492, .09639, 0, .385],
        117: [0, .44444, .09426, 0, .62055],
        118: [0, .44444, .11111, 0, .53222],
        119: [0, .44444, .11111, 0, .76777],
        120: [0, .44444, .12583, 0, .56055],
        121: [.19444, .44444, .105, 0, .56166],
        122: [0, .44444, .13889, 0, .49055],
        126: [.35, .34444, .11472, 0, .59111],
        163: [0, .69444, 0, 0, .86853],
        168: [0, .69444, .11473, 0, .59111],
        176: [0, .69444, 0, 0, .94888],
        198: [0, .68611, .11431, 0, 1.02277],
        216: [.04861, .73472, .09062, 0, .88555],
        223: [.19444, .69444, .09736, 0, .665],
        230: [0, .44444, .085, 0, .82666],
        248: [.09722, .54167, .09458, 0, .59111],
        305: [0, .44444, .09426, 0, .35555],
        338: [0, .68611, .11431, 0, 1.14054],
        339: [0, .44444, .085, 0, .82666],
        567: [.19444, .44444, .04611, 0, .385],
        710: [0, .69444, .06709, 0, .59111],
        711: [0, .63194, .08271, 0, .59111],
        713: [0, .59444, .10444, 0, .59111],
        714: [0, .69444, .08528, 0, .59111],
        715: [0, .69444, 0, 0, .59111],
        728: [0, .69444, .10333, 0, .59111],
        729: [0, .69444, .12945, 0, .35555],
        730: [0, .69444, 0, 0, .94888],
        732: [0, .69444, .11472, 0, .59111],
        733: [0, .69444, .11472, 0, .59111],
        915: [0, .68611, .12903, 0, .69777],
        916: [0, .68611, 0, 0, .94444],
        920: [0, .68611, .09062, 0, .88555],
        923: [0, .68611, 0, 0, .80666],
        926: [0, .68611, .15092, 0, .76777],
        928: [0, .68611, .17208, 0, .8961],
        931: [0, .68611, .11431, 0, .82666],
        933: [0, .68611, .10778, 0, .88555],
        934: [0, .68611, .05632, 0, .82666],
        936: [0, .68611, .10778, 0, .88555],
        937: [0, .68611, .0992, 0, .82666],
        8211: [0, .44444, .09811, 0, .59111],
        8212: [0, .44444, .09811, 0, 1.18221],
        8216: [0, .69444, .12945, 0, .35555],
        8217: [0, .69444, .12945, 0, .35555],
        8220: [0, .69444, .16772, 0, .62055],
        8221: [0, .69444, .07939, 0, .62055]
      },
      "Main-Italic": {
        33: [0, .69444, .12417, 0, .30667],
        34: [0, .69444, .06961, 0, .51444],
        35: [.19444, .69444, .06616, 0, .81777],
        37: [.05556, .75, .13639, 0, .81777],
        38: [0, .69444, .09694, 0, .76666],
        39: [0, .69444, .12417, 0, .30667],
        40: [.25, .75, .16194, 0, .40889],
        41: [.25, .75, .03694, 0, .40889],
        42: [0, .75, .14917, 0, .51111],
        43: [.05667, .56167, .03694, 0, .76666],
        44: [.19444, .10556, 0, 0, .30667],
        45: [0, .43056, .02826, 0, .35778],
        46: [0, .10556, 0, 0, .30667],
        47: [.25, .75, .16194, 0, .51111],
        48: [0, .64444, .13556, 0, .51111],
        49: [0, .64444, .13556, 0, .51111],
        50: [0, .64444, .13556, 0, .51111],
        51: [0, .64444, .13556, 0, .51111],
        52: [.19444, .64444, .13556, 0, .51111],
        53: [0, .64444, .13556, 0, .51111],
        54: [0, .64444, .13556, 0, .51111],
        55: [.19444, .64444, .13556, 0, .51111],
        56: [0, .64444, .13556, 0, .51111],
        57: [0, .64444, .13556, 0, .51111],
        58: [0, .43056, .0582, 0, .30667],
        59: [.19444, .43056, .0582, 0, .30667],
        61: [-.13313, .36687, .06616, 0, .76666],
        63: [0, .69444, .1225, 0, .51111],
        64: [0, .69444, .09597, 0, .76666],
        65: [0, .68333, 0, 0, .74333],
        66: [0, .68333, .10257, 0, .70389],
        67: [0, .68333, .14528, 0, .71555],
        68: [0, .68333, .09403, 0, .755],
        69: [0, .68333, .12028, 0, .67833],
        70: [0, .68333, .13305, 0, .65277],
        71: [0, .68333, .08722, 0, .77361],
        72: [0, .68333, .16389, 0, .74333],
        73: [0, .68333, .15806, 0, .38555],
        74: [0, .68333, .14028, 0, .525],
        75: [0, .68333, .14528, 0, .76888],
        76: [0, .68333, 0, 0, .62722],
        77: [0, .68333, .16389, 0, .89666],
        78: [0, .68333, .16389, 0, .74333],
        79: [0, .68333, .09403, 0, .76666],
        80: [0, .68333, .10257, 0, .67833],
        81: [.19444, .68333, .09403, 0, .76666],
        82: [0, .68333, .03868, 0, .72944],
        83: [0, .68333, .11972, 0, .56222],
        84: [0, .68333, .13305, 0, .71555],
        85: [0, .68333, .16389, 0, .74333],
        86: [0, .68333, .18361, 0, .74333],
        87: [0, .68333, .18361, 0, .99888],
        88: [0, .68333, .15806, 0, .74333],
        89: [0, .68333, .19383, 0, .74333],
        90: [0, .68333, .14528, 0, .61333],
        91: [.25, .75, .1875, 0, .30667],
        93: [.25, .75, .10528, 0, .30667],
        94: [0, .69444, .06646, 0, .51111],
        95: [.31, .12056, .09208, 0, .51111],
        97: [0, .43056, .07671, 0, .51111],
        98: [0, .69444, .06312, 0, .46],
        99: [0, .43056, .05653, 0, .46],
        100: [0, .69444, .10333, 0, .51111],
        101: [0, .43056, .07514, 0, .46],
        102: [.19444, .69444, .21194, 0, .30667],
        103: [.19444, .43056, .08847, 0, .46],
        104: [0, .69444, .07671, 0, .51111],
        105: [0, .65536, .1019, 0, .30667],
        106: [.19444, .65536, .14467, 0, .30667],
        107: [0, .69444, .10764, 0, .46],
        108: [0, .69444, .10333, 0, .25555],
        109: [0, .43056, .07671, 0, .81777],
        110: [0, .43056, .07671, 0, .56222],
        111: [0, .43056, .06312, 0, .51111],
        112: [.19444, .43056, .06312, 0, .51111],
        113: [.19444, .43056, .08847, 0, .46],
        114: [0, .43056, .10764, 0, .42166],
        115: [0, .43056, .08208, 0, .40889],
        116: [0, .61508, .09486, 0, .33222],
        117: [0, .43056, .07671, 0, .53666],
        118: [0, .43056, .10764, 0, .46],
        119: [0, .43056, .10764, 0, .66444],
        120: [0, .43056, .12042, 0, .46389],
        121: [.19444, .43056, .08847, 0, .48555],
        122: [0, .43056, .12292, 0, .40889],
        126: [.35, .31786, .11585, 0, .51111],
        163: [0, .69444, 0, 0, .76909],
        168: [0, .66786, .10474, 0, .51111],
        176: [0, .69444, 0, 0, .83129],
        198: [0, .68333, .12028, 0, .88277],
        216: [.04861, .73194, .09403, 0, .76666],
        223: [.19444, .69444, .10514, 0, .53666],
        230: [0, .43056, .07514, 0, .71555],
        248: [.09722, .52778, .09194, 0, .51111],
        305: [0, .43056, 0, .02778, .32246],
        338: [0, .68333, .12028, 0, .98499],
        339: [0, .43056, .07514, 0, .71555],
        567: [.19444, .43056, 0, .08334, .38403],
        710: [0, .69444, .06646, 0, .51111],
        711: [0, .62847, .08295, 0, .51111],
        713: [0, .56167, .10333, 0, .51111],
        714: [0, .69444, .09694, 0, .51111],
        715: [0, .69444, 0, 0, .51111],
        728: [0, .69444, .10806, 0, .51111],
        729: [0, .66786, .11752, 0, .30667],
        730: [0, .69444, 0, 0, .83129],
        732: [0, .66786, .11585, 0, .51111],
        733: [0, .69444, .1225, 0, .51111],
        915: [0, .68333, .13305, 0, .62722],
        916: [0, .68333, 0, 0, .81777],
        920: [0, .68333, .09403, 0, .76666],
        923: [0, .68333, 0, 0, .69222],
        926: [0, .68333, .15294, 0, .66444],
        928: [0, .68333, .16389, 0, .74333],
        931: [0, .68333, .12028, 0, .71555],
        933: [0, .68333, .11111, 0, .76666],
        934: [0, .68333, .05986, 0, .71555],
        936: [0, .68333, .11111, 0, .76666],
        937: [0, .68333, .10257, 0, .71555],
        8211: [0, .43056, .09208, 0, .51111],
        8212: [0, .43056, .09208, 0, 1.02222],
        8216: [0, .69444, .12417, 0, .30667],
        8217: [0, .69444, .12417, 0, .30667],
        8220: [0, .69444, .1685, 0, .51444],
        8221: [0, .69444, .06961, 0, .51444],
        8463: [0, .68889, 0, 0, .54028]
      },
      "Main-Regular": {
        32: [0, 0, 0, 0, 0],
        33: [0, .69444, 0, 0, .27778],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .77778],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.19444, .10556, 0, 0, .27778],
        45: [0, .43056, 0, 0, .33333],
        46: [0, .10556, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .64444, 0, 0, .5],
        49: [0, .64444, 0, 0, .5],
        50: [0, .64444, 0, 0, .5],
        51: [0, .64444, 0, 0, .5],
        52: [0, .64444, 0, 0, .5],
        53: [0, .64444, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [0, .64444, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [0, .64444, 0, 0, .5],
        58: [0, .43056, 0, 0, .27778],
        59: [.19444, .43056, 0, 0, .27778],
        60: [.0391, .5391, 0, 0, .77778],
        61: [-.13313, .36687, 0, 0, .77778],
        62: [.0391, .5391, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .77778],
        65: [0, .68333, 0, 0, .75],
        66: [0, .68333, 0, 0, .70834],
        67: [0, .68333, 0, 0, .72222],
        68: [0, .68333, 0, 0, .76389],
        69: [0, .68333, 0, 0, .68056],
        70: [0, .68333, 0, 0, .65278],
        71: [0, .68333, 0, 0, .78472],
        72: [0, .68333, 0, 0, .75],
        73: [0, .68333, 0, 0, .36111],
        74: [0, .68333, 0, 0, .51389],
        75: [0, .68333, 0, 0, .77778],
        76: [0, .68333, 0, 0, .625],
        77: [0, .68333, 0, 0, .91667],
        78: [0, .68333, 0, 0, .75],
        79: [0, .68333, 0, 0, .77778],
        80: [0, .68333, 0, 0, .68056],
        81: [.19444, .68333, 0, 0, .77778],
        82: [0, .68333, 0, 0, .73611],
        83: [0, .68333, 0, 0, .55556],
        84: [0, .68333, 0, 0, .72222],
        85: [0, .68333, 0, 0, .75],
        86: [0, .68333, .01389, 0, .75],
        87: [0, .68333, .01389, 0, 1.02778],
        88: [0, .68333, 0, 0, .75],
        89: [0, .68333, .025, 0, .75],
        90: [0, .68333, 0, 0, .61111],
        91: [.25, .75, 0, 0, .27778],
        92: [.25, .75, 0, 0, .5],
        93: [.25, .75, 0, 0, .27778],
        94: [0, .69444, 0, 0, .5],
        95: [.31, .12056, .02778, 0, .5],
        97: [0, .43056, 0, 0, .5],
        98: [0, .69444, 0, 0, .55556],
        99: [0, .43056, 0, 0, .44445],
        100: [0, .69444, 0, 0, .55556],
        101: [0, .43056, 0, 0, .44445],
        102: [0, .69444, .07778, 0, .30556],
        103: [.19444, .43056, .01389, 0, .5],
        104: [0, .69444, 0, 0, .55556],
        105: [0, .66786, 0, 0, .27778],
        106: [.19444, .66786, 0, 0, .30556],
        107: [0, .69444, 0, 0, .52778],
        108: [0, .69444, 0, 0, .27778],
        109: [0, .43056, 0, 0, .83334],
        110: [0, .43056, 0, 0, .55556],
        111: [0, .43056, 0, 0, .5],
        112: [.19444, .43056, 0, 0, .55556],
        113: [.19444, .43056, 0, 0, .52778],
        114: [0, .43056, 0, 0, .39167],
        115: [0, .43056, 0, 0, .39445],
        116: [0, .61508, 0, 0, .38889],
        117: [0, .43056, 0, 0, .55556],
        118: [0, .43056, .01389, 0, .52778],
        119: [0, .43056, .01389, 0, .72222],
        120: [0, .43056, 0, 0, .52778],
        121: [.19444, .43056, .01389, 0, .52778],
        122: [0, .43056, 0, 0, .44445],
        123: [.25, .75, 0, 0, .5],
        124: [.25, .75, 0, 0, .27778],
        125: [.25, .75, 0, 0, .5],
        126: [.35, .31786, 0, 0, .5],
        160: [0, 0, 0, 0, 0],
        168: [0, .66786, 0, 0, .5],
        172: [0, .43056, 0, 0, .66667],
        176: [0, .69444, 0, 0, .75],
        177: [.08333, .58333, 0, 0, .77778],
        198: [0, .68333, 0, 0, .90278],
        215: [.08333, .58333, 0, 0, .77778],
        216: [.04861, .73194, 0, 0, .77778],
        223: [0, .69444, 0, 0, .5],
        230: [0, .43056, 0, 0, .72222],
        247: [.08333, .58333, 0, 0, .77778],
        248: [.09722, .52778, 0, 0, .5],
        305: [0, .43056, 0, 0, .27778],
        338: [0, .68333, 0, 0, 1.01389],
        339: [0, .43056, 0, 0, .77778],
        567: [.19444, .43056, 0, 0, .30556],
        710: [0, .69444, 0, 0, .5],
        711: [0, .62847, 0, 0, .5],
        713: [0, .56778, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .66786, 0, 0, .27778],
        730: [0, .69444, 0, 0, .75],
        732: [0, .66786, 0, 0, .5],
        733: [0, .69444, 0, 0, .5],
        824: [.19444, .69444, 0, 0, 0],
        915: [0, .68333, 0, 0, .625],
        916: [0, .68333, 0, 0, .83334],
        920: [0, .68333, 0, 0, .77778],
        923: [0, .68333, 0, 0, .69445],
        926: [0, .68333, 0, 0, .66667],
        928: [0, .68333, 0, 0, .75],
        931: [0, .68333, 0, 0, .72222],
        933: [0, .68333, 0, 0, .77778],
        934: [0, .68333, 0, 0, .72222],
        936: [0, .68333, 0, 0, .77778],
        937: [0, .68333, 0, 0, .72222],
        8211: [0, .43056, .02778, 0, .5],
        8212: [0, .43056, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5],
        8224: [.19444, .69444, 0, 0, .44445],
        8225: [.19444, .69444, 0, 0, .44445],
        8230: [0, .12, 0, 0, 1015],
        8242: [0, .55556, 0, 0, .275],
        8407: [0, .71444, .15382, 0, .5],
        8463: [0, .68889, 0, 0, .54028],
        8465: [0, .69444, 0, 0, .72222],
        8467: [0, .69444, 0, .11111, .41667],
        8472: [.19444, .43056, 0, .11111, .63646],
        8476: [0, .69444, 0, 0, .72222],
        8501: [0, .69444, 0, 0, .61111],
        8592: [-.13313, .36687, 0, 0, 1],
        8593: [.19444, .69444, 0, 0, .5],
        8594: [-.13313, .36687, 0, 0, 1],
        8595: [.19444, .69444, 0, 0, .5],
        8596: [-.13313, .36687, 0, 0, 1],
        8597: [.25, .75, 0, 0, .5],
        8598: [.19444, .69444, 0, 0, 1],
        8599: [.19444, .69444, 0, 0, 1],
        8600: [.19444, .69444, 0, 0, 1],
        8601: [.19444, .69444, 0, 0, 1],
        8614: [.011, .511, 0, 0, 889],
        8617: [.011, .511, 0, 0, 1015],
        8618: [.011, .511, 0, 0, 1015],
        8636: [-.13313, .36687, 0, 0, 1],
        8637: [-.13313, .36687, 0, 0, 1],
        8640: [-.13313, .36687, 0, 0, 1],
        8641: [-.13313, .36687, 0, 0, 1],
        8652: [.011, .671, 0, 0, 889],
        8656: [-.13313, .36687, 0, 0, 1],
        8657: [.19444, .69444, 0, 0, .61111],
        8658: [-.13313, .36687, 0, 0, 1],
        8659: [.19444, .69444, 0, 0, .61111],
        8660: [-.13313, .36687, 0, 0, 1],
        8661: [.25, .75, 0, 0, .61111],
        8704: [0, .69444, 0, 0, .55556],
        8706: [0, .69444, .05556, .08334, .5309],
        8707: [0, .69444, 0, 0, .55556],
        8709: [.05556, .75, 0, 0, .5],
        8711: [0, .68333, 0, 0, .83334],
        8712: [.0391, .5391, 0, 0, .66667],
        8715: [.0391, .5391, 0, 0, .66667],
        8722: [.08333, .58333, 0, 0, .77778],
        8723: [.08333, .58333, 0, 0, .77778],
        8725: [.25, .75, 0, 0, .5],
        8726: [.25, .75, 0, 0, .5],
        8727: [-.03472, .46528, 0, 0, .5],
        8728: [-.05555, .44445, 0, 0, .5],
        8729: [-.05555, .44445, 0, 0, .5],
        8730: [.2, .8, 0, 0, .83334],
        8733: [0, .43056, 0, 0, .77778],
        8734: [0, .43056, 0, 0, 1],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .27778],
        8741: [.25, .75, 0, 0, .5],
        8743: [0, .55556, 0, 0, .66667],
        8744: [0, .55556, 0, 0, .66667],
        8745: [0, .55556, 0, 0, .66667],
        8746: [0, .55556, 0, 0, .66667],
        8747: [.19444, .69444, .11111, 0, .41667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8768: [.19444, .69444, 0, 0, .27778],
        8771: [-.03625, .46375, 0, 0, .77778],
        8773: [-.022, .589, 0, 0, 667],
        8776: [-.01688, .48312, 0, 0, .77778],
        8781: [-.03625, .46375, 0, 0, .77778],
        8784: [-.133, .67, 0, 0, 666],
        8800: [.215, .716, 0, 0, 666],
        8801: [-.03625, .46375, 0, 0, .77778],
        8804: [.13597, .63597, 0, 0, .77778],
        8805: [.13597, .63597, 0, 0, .77778],
        8810: [.0391, .5391, 0, 0, 1],
        8811: [.0391, .5391, 0, 0, 1],
        8826: [.0391, .5391, 0, 0, .77778],
        8827: [.0391, .5391, 0, 0, .77778],
        8834: [.0391, .5391, 0, 0, .77778],
        8835: [.0391, .5391, 0, 0, .77778],
        8838: [.13597, .63597, 0, 0, .77778],
        8839: [.13597, .63597, 0, 0, .77778],
        8846: [0, .55556, 0, 0, .66667],
        8849: [.13597, .63597, 0, 0, .77778],
        8850: [.13597, .63597, 0, 0, .77778],
        8851: [0, .55556, 0, 0, .66667],
        8852: [0, .55556, 0, 0, .66667],
        8853: [.08333, .58333, 0, 0, .77778],
        8854: [.08333, .58333, 0, 0, .77778],
        8855: [.08333, .58333, 0, 0, .77778],
        8856: [.08333, .58333, 0, 0, .77778],
        8857: [.08333, .58333, 0, 0, .77778],
        8866: [0, .69444, 0, 0, .61111],
        8867: [0, .69444, 0, 0, .61111],
        8868: [0, .69444, 0, 0, .77778],
        8869: [0, .69444, 0, 0, .77778],
        8872: [.249, .75, 0, 0, 692],
        8900: [-.05555, .44445, 0, 0, .5],
        8901: [-.05555, .44445, 0, 0, .27778],
        8902: [-.03472, .46528, 0, 0, .5],
        8904: [.005, .505, 0, 0, 847],
        8942: [.03, .9, 0, 0, 121],
        8943: [-.19, .31, 0, 0, 1015],
        8945: [-.1, .82, 0, 0, 1015],
        8968: [.25, .75, 0, 0, .44445],
        8969: [.25, .75, 0, 0, .44445],
        8970: [.25, .75, 0, 0, .44445],
        8971: [.25, .75, 0, 0, .44445],
        8994: [-.14236, .35764, 0, 0, 1],
        8995: [-.14236, .35764, 0, 0, 1],
        9136: [.244, .744, 0, 0, 301],
        9137: [.244, .744, 0, 0, 301],
        9651: [.19444, .69444, 0, 0, .88889],
        9657: [-.03472, .46528, 0, 0, .5],
        9661: [.19444, .69444, 0, 0, .88889],
        9667: [-.03472, .46528, 0, 0, .5],
        9711: [.19444, .69444, 0, 0, 1],
        9824: [.12963, .69444, 0, 0, .77778],
        9825: [.12963, .69444, 0, 0, .77778],
        9826: [.12963, .69444, 0, 0, .77778],
        9827: [.12963, .69444, 0, 0, .77778],
        9837: [0, .75, 0, 0, .38889],
        9838: [.19444, .69444, 0, 0, .38889],
        9839: [.19444, .69444, 0, 0, .38889],
        10216: [.25, .75, 0, 0, .38889],
        10217: [.25, .75, 0, 0, .38889],
        10222: [.244, .744, 0, 0, 184],
        10223: [.244, .744, 0, 0, 184],
        10229: [.011, .511, 0, 0, 1470],
        10230: [.011, .511, 0, 0, 1469],
        10231: [.011, .511, 0, 0, 1748],
        10232: [.024, .525, 0, 0, 1497],
        10233: [.024, .525, 0, 0, 1526],
        10234: [.024, .525, 0, 0, 1746],
        10236: [.011, .511, 0, 0, 1498],
        10815: [0, .68333, 0, 0, .75],
        10927: [.13597, .63597, 0, 0, .77778],
        10928: [.13597, .63597, 0, 0, .77778]
      },
      "Math-BoldItalic": {
        47: [.19444, .69444, 0, 0, 0],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, .04835, 0, .8664],
        67: [0, .68611, .06979, 0, .81694],
        68: [0, .68611, .03194, 0, .93812],
        69: [0, .68611, .05451, 0, .81007],
        70: [0, .68611, .15972, 0, .68889],
        71: [0, .68611, 0, 0, .88673],
        72: [0, .68611, .08229, 0, .98229],
        73: [0, .68611, .07778, 0, .51111],
        74: [0, .68611, .10069, 0, .63125],
        75: [0, .68611, .06979, 0, .97118],
        76: [0, .68611, 0, 0, .75555],
        77: [0, .68611, .11424, 0, 1.14201],
        78: [0, .68611, .11424, 0, .95034],
        79: [0, .68611, .03194, 0, .83666],
        80: [0, .68611, .15972, 0, .72309],
        81: [.19444, .68611, 0, 0, .86861],
        82: [0, .68611, .00421, 0, .87235],
        83: [0, .68611, .05382, 0, .69271],
        84: [0, .68611, .15972, 0, .63663],
        85: [0, .68611, .11424, 0, .80027],
        86: [0, .68611, .25555, 0, .67778],
        87: [0, .68611, .15972, 0, 1.09305],
        88: [0, .68611, .07778, 0, .94722],
        89: [0, .68611, .25555, 0, .67458],
        90: [0, .68611, .06979, 0, .77257],
        97: [0, .44444, 0, 0, .63287],
        98: [0, .69444, 0, 0, .52083],
        99: [0, .44444, 0, 0, .51342],
        100: [0, .69444, 0, 0, .60972],
        101: [0, .44444, 0, 0, .55361],
        102: [.19444, .69444, .11042, 0, .56806],
        103: [.19444, .44444, .03704, 0, .5449],
        104: [0, .69444, 0, 0, .66759],
        105: [0, .69326, 0, 0, .4048],
        106: [.19444, .69326, .0622, 0, .47083],
        107: [0, .69444, .01852, 0, .6037],
        108: [0, .69444, .0088, 0, .34815],
        109: [0, .44444, 0, 0, 1.0324],
        110: [0, .44444, 0, 0, .71296],
        111: [0, .44444, 0, 0, .58472],
        112: [.19444, .44444, 0, 0, .60092],
        113: [.19444, .44444, .03704, 0, .54213],
        114: [0, .44444, .03194, 0, .5287],
        115: [0, .44444, 0, 0, .53125],
        116: [0, .63492, 0, 0, .41528],
        117: [0, .44444, 0, 0, .68102],
        118: [0, .44444, .03704, 0, .56666],
        119: [0, .44444, .02778, 0, .83148],
        120: [0, .44444, 0, 0, .65903],
        121: [.19444, .44444, .03704, 0, .59028],
        122: [0, .44444, .04213, 0, .55509],
        915: [0, .68611, .15972, 0, .65694],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, .03194, 0, .86722],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, .07458, 0, .84125],
        928: [0, .68611, .08229, 0, .98229],
        931: [0, .68611, .05451, 0, .88507],
        933: [0, .68611, .15972, 0, .67083],
        934: [0, .68611, 0, 0, .76666],
        936: [0, .68611, .11653, 0, .71402],
        937: [0, .68611, .04835, 0, .8789],
        945: [0, .44444, 0, 0, .76064],
        946: [.19444, .69444, .03403, 0, .65972],
        947: [.19444, .44444, .06389, 0, .59003],
        948: [0, .69444, .03819, 0, .52222],
        949: [0, .44444, 0, 0, .52882],
        950: [.19444, .69444, .06215, 0, .50833],
        951: [.19444, .44444, .03704, 0, .6],
        952: [0, .69444, .03194, 0, .5618],
        953: [0, .44444, 0, 0, .41204],
        954: [0, .44444, 0, 0, .66759],
        955: [0, .69444, 0, 0, .67083],
        956: [.19444, .44444, 0, 0, .70787],
        957: [0, .44444, .06898, 0, .57685],
        958: [.19444, .69444, .03021, 0, .50833],
        959: [0, .44444, 0, 0, .58472],
        960: [0, .44444, .03704, 0, .68241],
        961: [.19444, .44444, 0, 0, .6118],
        962: [.09722, .44444, .07917, 0, .42361],
        963: [0, .44444, .03704, 0, .68588],
        964: [0, .44444, .13472, 0, .52083],
        965: [0, .44444, .03704, 0, .63055],
        966: [.19444, .44444, 0, 0, .74722],
        967: [.19444, .44444, 0, 0, .71805],
        968: [.19444, .69444, .03704, 0, .75833],
        969: [0, .44444, .03704, 0, .71782],
        977: [0, .69444, 0, 0, .69155],
        981: [.19444, .69444, 0, 0, .7125],
        982: [0, .44444, .03194, 0, .975],
        1009: [.19444, .44444, 0, 0, .6118],
        1013: [0, .44444, 0, 0, .48333]
      },
      "Math-Italic": {
        47: [.19444, .69444, 0, 0, 0],
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059]
      },
      "Math-Regular": {
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059]
      },
      "SansSerif-Bold": {
        33: [0, .69444, 0, 0, .36667],
        34: [0, .69444, 0, 0, .55834],
        35: [.19444, .69444, 0, 0, .91667],
        36: [.05556, .75, 0, 0, .55],
        37: [.05556, .75, 0, 0, 1.02912],
        38: [0, .69444, 0, 0, .83056],
        39: [0, .69444, 0, 0, .30556],
        40: [.25, .75, 0, 0, .42778],
        41: [.25, .75, 0, 0, .42778],
        42: [0, .75, 0, 0, .55],
        43: [.11667, .61667, 0, 0, .85556],
        44: [.10556, .13056, 0, 0, .30556],
        45: [0, .45833, 0, 0, .36667],
        46: [0, .13056, 0, 0, .30556],
        47: [.25, .75, 0, 0, .55],
        48: [0, .69444, 0, 0, .55],
        49: [0, .69444, 0, 0, .55],
        50: [0, .69444, 0, 0, .55],
        51: [0, .69444, 0, 0, .55],
        52: [0, .69444, 0, 0, .55],
        53: [0, .69444, 0, 0, .55],
        54: [0, .69444, 0, 0, .55],
        55: [0, .69444, 0, 0, .55],
        56: [0, .69444, 0, 0, .55],
        57: [0, .69444, 0, 0, .55],
        58: [0, .45833, 0, 0, .30556],
        59: [.10556, .45833, 0, 0, .30556],
        61: [-.09375, .40625, 0, 0, .85556],
        63: [0, .69444, 0, 0, .51945],
        64: [0, .69444, 0, 0, .73334],
        65: [0, .69444, 0, 0, .73334],
        66: [0, .69444, 0, 0, .73334],
        67: [0, .69444, 0, 0, .70278],
        68: [0, .69444, 0, 0, .79445],
        69: [0, .69444, 0, 0, .64167],
        70: [0, .69444, 0, 0, .61111],
        71: [0, .69444, 0, 0, .73334],
        72: [0, .69444, 0, 0, .79445],
        73: [0, .69444, 0, 0, .33056],
        74: [0, .69444, 0, 0, .51945],
        75: [0, .69444, 0, 0, .76389],
        76: [0, .69444, 0, 0, .58056],
        77: [0, .69444, 0, 0, .97778],
        78: [0, .69444, 0, 0, .79445],
        79: [0, .69444, 0, 0, .79445],
        80: [0, .69444, 0, 0, .70278],
        81: [.10556, .69444, 0, 0, .79445],
        82: [0, .69444, 0, 0, .70278],
        83: [0, .69444, 0, 0, .61111],
        84: [0, .69444, 0, 0, .73334],
        85: [0, .69444, 0, 0, .76389],
        86: [0, .69444, .01528, 0, .73334],
        87: [0, .69444, .01528, 0, 1.03889],
        88: [0, .69444, 0, 0, .73334],
        89: [0, .69444, .0275, 0, .73334],
        90: [0, .69444, 0, 0, .67223],
        91: [.25, .75, 0, 0, .34306],
        93: [.25, .75, 0, 0, .34306],
        94: [0, .69444, 0, 0, .55],
        95: [.35, .10833, .03056, 0, .55],
        97: [0, .45833, 0, 0, .525],
        98: [0, .69444, 0, 0, .56111],
        99: [0, .45833, 0, 0, .48889],
        100: [0, .69444, 0, 0, .56111],
        101: [0, .45833, 0, 0, .51111],
        102: [0, .69444, .07639, 0, .33611],
        103: [.19444, .45833, .01528, 0, .55],
        104: [0, .69444, 0, 0, .56111],
        105: [0, .69444, 0, 0, .25556],
        106: [.19444, .69444, 0, 0, .28611],
        107: [0, .69444, 0, 0, .53056],
        108: [0, .69444, 0, 0, .25556],
        109: [0, .45833, 0, 0, .86667],
        110: [0, .45833, 0, 0, .56111],
        111: [0, .45833, 0, 0, .55],
        112: [.19444, .45833, 0, 0, .56111],
        113: [.19444, .45833, 0, 0, .56111],
        114: [0, .45833, .01528, 0, .37222],
        115: [0, .45833, 0, 0, .42167],
        116: [0, .58929, 0, 0, .40417],
        117: [0, .45833, 0, 0, .56111],
        118: [0, .45833, .01528, 0, .5],
        119: [0, .45833, .01528, 0, .74445],
        120: [0, .45833, 0, 0, .5],
        121: [.19444, .45833, .01528, 0, .5],
        122: [0, .45833, 0, 0, .47639],
        126: [.35, .34444, 0, 0, .55],
        168: [0, .69444, 0, 0, .55],
        176: [0, .69444, 0, 0, .73334],
        180: [0, .69444, 0, 0, .55],
        305: [0, .45833, 0, 0, .25556],
        567: [.19444, .45833, 0, 0, .28611],
        710: [0, .69444, 0, 0, .55],
        711: [0, .63542, 0, 0, .55],
        713: [0, .63778, 0, 0, .55],
        728: [0, .69444, 0, 0, .55],
        729: [0, .69444, 0, 0, .30556],
        730: [0, .69444, 0, 0, .73334],
        732: [0, .69444, 0, 0, .55],
        733: [0, .69444, 0, 0, .55],
        915: [0, .69444, 0, 0, .58056],
        916: [0, .69444, 0, 0, .91667],
        920: [0, .69444, 0, 0, .85556],
        923: [0, .69444, 0, 0, .67223],
        926: [0, .69444, 0, 0, .73334],
        928: [0, .69444, 0, 0, .79445],
        931: [0, .69444, 0, 0, .79445],
        933: [0, .69444, 0, 0, .85556],
        934: [0, .69444, 0, 0, .79445],
        936: [0, .69444, 0, 0, .85556],
        937: [0, .69444, 0, 0, .79445],
        8211: [0, .45833, .03056, 0, .55],
        8212: [0, .45833, .03056, 0, 1.10001],
        8216: [0, .69444, 0, 0, .30556],
        8217: [0, .69444, 0, 0, .30556],
        8220: [0, .69444, 0, 0, .55834],
        8221: [0, .69444, 0, 0, .55834]
      },
      "SansSerif-Italic": {
        33: [0, .69444, .05733, 0, .31945],
        34: [0, .69444, .00316, 0, .5],
        35: [.19444, .69444, .05087, 0, .83334],
        36: [.05556, .75, .11156, 0, .5],
        37: [.05556, .75, .03126, 0, .83334],
        38: [0, .69444, .03058, 0, .75834],
        39: [0, .69444, .07816, 0, .27778],
        40: [.25, .75, .13164, 0, .38889],
        41: [.25, .75, .02536, 0, .38889],
        42: [0, .75, .11775, 0, .5],
        43: [.08333, .58333, .02536, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, .01946, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, .13164, 0, .5],
        48: [0, .65556, .11156, 0, .5],
        49: [0, .65556, .11156, 0, .5],
        50: [0, .65556, .11156, 0, .5],
        51: [0, .65556, .11156, 0, .5],
        52: [0, .65556, .11156, 0, .5],
        53: [0, .65556, .11156, 0, .5],
        54: [0, .65556, .11156, 0, .5],
        55: [0, .65556, .11156, 0, .5],
        56: [0, .65556, .11156, 0, .5],
        57: [0, .65556, .11156, 0, .5],
        58: [0, .44444, .02502, 0, .27778],
        59: [.125, .44444, .02502, 0, .27778],
        61: [-.13, .37, .05087, 0, .77778],
        63: [0, .69444, .11809, 0, .47222],
        64: [0, .69444, .07555, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, .08293, 0, .66667],
        67: [0, .69444, .11983, 0, .63889],
        68: [0, .69444, .07555, 0, .72223],
        69: [0, .69444, .11983, 0, .59722],
        70: [0, .69444, .13372, 0, .56945],
        71: [0, .69444, .11983, 0, .66667],
        72: [0, .69444, .08094, 0, .70834],
        73: [0, .69444, .13372, 0, .27778],
        74: [0, .69444, .08094, 0, .47222],
        75: [0, .69444, .11983, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, .08094, 0, .875],
        78: [0, .69444, .08094, 0, .70834],
        79: [0, .69444, .07555, 0, .73611],
        80: [0, .69444, .08293, 0, .63889],
        81: [.125, .69444, .07555, 0, .73611],
        82: [0, .69444, .08293, 0, .64584],
        83: [0, .69444, .09205, 0, .55556],
        84: [0, .69444, .13372, 0, .68056],
        85: [0, .69444, .08094, 0, .6875],
        86: [0, .69444, .1615, 0, .66667],
        87: [0, .69444, .1615, 0, .94445],
        88: [0, .69444, .13372, 0, .66667],
        89: [0, .69444, .17261, 0, .66667],
        90: [0, .69444, .11983, 0, .61111],
        91: [.25, .75, .15942, 0, .28889],
        93: [.25, .75, .08719, 0, .28889],
        94: [0, .69444, .0799, 0, .5],
        95: [.35, .09444, .08616, 0, .5],
        97: [0, .44444, .00981, 0, .48056],
        98: [0, .69444, .03057, 0, .51667],
        99: [0, .44444, .08336, 0, .44445],
        100: [0, .69444, .09483, 0, .51667],
        101: [0, .44444, .06778, 0, .44445],
        102: [0, .69444, .21705, 0, .30556],
        103: [.19444, .44444, .10836, 0, .5],
        104: [0, .69444, .01778, 0, .51667],
        105: [0, .67937, .09718, 0, .23889],
        106: [.19444, .67937, .09162, 0, .26667],
        107: [0, .69444, .08336, 0, .48889],
        108: [0, .69444, .09483, 0, .23889],
        109: [0, .44444, .01778, 0, .79445],
        110: [0, .44444, .01778, 0, .51667],
        111: [0, .44444, .06613, 0, .5],
        112: [.19444, .44444, .0389, 0, .51667],
        113: [.19444, .44444, .04169, 0, .51667],
        114: [0, .44444, .10836, 0, .34167],
        115: [0, .44444, .0778, 0, .38333],
        116: [0, .57143, .07225, 0, .36111],
        117: [0, .44444, .04169, 0, .51667],
        118: [0, .44444, .10836, 0, .46111],
        119: [0, .44444, .10836, 0, .68334],
        120: [0, .44444, .09169, 0, .46111],
        121: [.19444, .44444, .10836, 0, .46111],
        122: [0, .44444, .08752, 0, .43472],
        126: [.35, .32659, .08826, 0, .5],
        168: [0, .67937, .06385, 0, .5],
        176: [0, .69444, 0, 0, .73752],
        305: [0, .44444, .04169, 0, .23889],
        567: [.19444, .44444, .04169, 0, .26667],
        710: [0, .69444, .0799, 0, .5],
        711: [0, .63194, .08432, 0, .5],
        713: [0, .60889, .08776, 0, .5],
        714: [0, .69444, .09205, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, .09483, 0, .5],
        729: [0, .67937, .07774, 0, .27778],
        730: [0, .69444, 0, 0, .73752],
        732: [0, .67659, .08826, 0, .5],
        733: [0, .69444, .09205, 0, .5],
        915: [0, .69444, .13372, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, .07555, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, .12816, 0, .66667],
        928: [0, .69444, .08094, 0, .70834],
        931: [0, .69444, .11983, 0, .72222],
        933: [0, .69444, .09031, 0, .77778],
        934: [0, .69444, .04603, 0, .72222],
        936: [0, .69444, .09031, 0, .77778],
        937: [0, .69444, .08293, 0, .72222],
        8211: [0, .44444, .08616, 0, .5],
        8212: [0, .44444, .08616, 0, 1],
        8216: [0, .69444, .07816, 0, .27778],
        8217: [0, .69444, .07816, 0, .27778],
        8220: [0, .69444, .14205, 0, .5],
        8221: [0, .69444, .00316, 0, .5]
      },
      "SansSerif-Regular": {
        33: [0, .69444, 0, 0, .31945],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .75834],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, 0, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .65556, 0, 0, .5],
        49: [0, .65556, 0, 0, .5],
        50: [0, .65556, 0, 0, .5],
        51: [0, .65556, 0, 0, .5],
        52: [0, .65556, 0, 0, .5],
        53: [0, .65556, 0, 0, .5],
        54: [0, .65556, 0, 0, .5],
        55: [0, .65556, 0, 0, .5],
        56: [0, .65556, 0, 0, .5],
        57: [0, .65556, 0, 0, .5],
        58: [0, .44444, 0, 0, .27778],
        59: [.125, .44444, 0, 0, .27778],
        61: [-.13, .37, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, 0, 0, .66667],
        67: [0, .69444, 0, 0, .63889],
        68: [0, .69444, 0, 0, .72223],
        69: [0, .69444, 0, 0, .59722],
        70: [0, .69444, 0, 0, .56945],
        71: [0, .69444, 0, 0, .66667],
        72: [0, .69444, 0, 0, .70834],
        73: [0, .69444, 0, 0, .27778],
        74: [0, .69444, 0, 0, .47222],
        75: [0, .69444, 0, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, 0, 0, .875],
        78: [0, .69444, 0, 0, .70834],
        79: [0, .69444, 0, 0, .73611],
        80: [0, .69444, 0, 0, .63889],
        81: [.125, .69444, 0, 0, .73611],
        82: [0, .69444, 0, 0, .64584],
        83: [0, .69444, 0, 0, .55556],
        84: [0, .69444, 0, 0, .68056],
        85: [0, .69444, 0, 0, .6875],
        86: [0, .69444, .01389, 0, .66667],
        87: [0, .69444, .01389, 0, .94445],
        88: [0, .69444, 0, 0, .66667],
        89: [0, .69444, .025, 0, .66667],
        90: [0, .69444, 0, 0, .61111],
        91: [.25, .75, 0, 0, .28889],
        93: [.25, .75, 0, 0, .28889],
        94: [0, .69444, 0, 0, .5],
        95: [.35, .09444, .02778, 0, .5],
        97: [0, .44444, 0, 0, .48056],
        98: [0, .69444, 0, 0, .51667],
        99: [0, .44444, 0, 0, .44445],
        100: [0, .69444, 0, 0, .51667],
        101: [0, .44444, 0, 0, .44445],
        102: [0, .69444, .06944, 0, .30556],
        103: [.19444, .44444, .01389, 0, .5],
        104: [0, .69444, 0, 0, .51667],
        105: [0, .67937, 0, 0, .23889],
        106: [.19444, .67937, 0, 0, .26667],
        107: [0, .69444, 0, 0, .48889],
        108: [0, .69444, 0, 0, .23889],
        109: [0, .44444, 0, 0, .79445],
        110: [0, .44444, 0, 0, .51667],
        111: [0, .44444, 0, 0, .5],
        112: [.19444, .44444, 0, 0, .51667],
        113: [.19444, .44444, 0, 0, .51667],
        114: [0, .44444, .01389, 0, .34167],
        115: [0, .44444, 0, 0, .38333],
        116: [0, .57143, 0, 0, .36111],
        117: [0, .44444, 0, 0, .51667],
        118: [0, .44444, .01389, 0, .46111],
        119: [0, .44444, .01389, 0, .68334],
        120: [0, .44444, 0, 0, .46111],
        121: [.19444, .44444, .01389, 0, .46111],
        122: [0, .44444, 0, 0, .43472],
        126: [.35, .32659, 0, 0, .5],
        176: [0, .69444, 0, 0, .66667],
        305: [0, .44444, 0, 0, .23889],
        567: [.19444, .44444, 0, 0, .26667],
        710: [0, .69444, 0, 0, .5],
        711: [0, .63194, 0, 0, .5],
        713: [0, .60889, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .67937, 0, 0, .27778],
        730: [0, .69444, 0, 0, .66667],
        733: [0, .69444, 0, 0, .5],
        771: [0, .67659, 0, 0, .5],
        776: [0, .67937, 0, 0, .5],
        915: [0, .69444, 0, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, 0, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, 0, 0, .66667],
        928: [0, .69444, 0, 0, .70834],
        931: [0, .69444, 0, 0, .72222],
        933: [0, .69444, 0, 0, .77778],
        934: [0, .69444, 0, 0, .72222],
        936: [0, .69444, 0, 0, .77778],
        937: [0, .69444, 0, 0, .72222],
        8211: [0, .44444, .02778, 0, .5],
        8212: [0, .44444, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5]
      },
      "Script-Regular": {
        65: [0, .7, .22925, 0, .80253],
        66: [0, .7, .04087, 0, .90757],
        67: [0, .7, .1689, 0, .66619],
        68: [0, .7, .09371, 0, .77443],
        69: [0, .7, .18583, 0, .56162],
        70: [0, .7, .13634, 0, .89544],
        71: [0, .7, .17322, 0, .60961],
        72: [0, .7, .29694, 0, .96919],
        73: [0, .7, .19189, 0, .80907],
        74: [.27778, .7, .19189, 0, 1.05159],
        75: [0, .7, .31259, 0, .91364],
        76: [0, .7, .19189, 0, .87373],
        77: [0, .7, .15981, 0, 1.08031],
        78: [0, .7, .3525, 0, .9015],
        79: [0, .7, .08078, 0, .73787],
        80: [0, .7, .08078, 0, 1.01262],
        81: [0, .7, .03305, 0, .88282],
        82: [0, .7, .06259, 0, .85],
        83: [0, .7, .19189, 0, .86767],
        84: [0, .7, .29087, 0, .74697],
        85: [0, .7, .25815, 0, .79996],
        86: [0, .7, .27523, 0, .62204],
        87: [0, .7, .27523, 0, .80532],
        88: [0, .7, .26006, 0, .94445],
        89: [0, .7, .2939, 0, .70961],
        90: [0, .7, .24037, 0, .8212]
      },
      "Size1-Regular": {
        40: [.35001, .85, 0, 0, .45834],
        41: [.35001, .85, 0, 0, .45834],
        47: [.35001, .85, 0, 0, .57778],
        91: [.35001, .85, 0, 0, .41667],
        92: [.35001, .85, 0, 0, .57778],
        93: [.35001, .85, 0, 0, .41667],
        123: [.35001, .85, 0, 0, .58334],
        125: [.35001, .85, 0, 0, .58334],
        710: [0, .72222, 0, 0, .55556],
        732: [0, .72222, 0, 0, .55556],
        770: [0, .72222, 0, 0, .55556],
        771: [0, .72222, 0, 0, .55556],
        8214: [-99e-5, .601, 0, 0, .77778],
        8593: [1e-5, .6, 0, 0, .66667],
        8595: [1e-5, .6, 0, 0, .66667],
        8657: [1e-5, .6, 0, 0, .77778],
        8659: [1e-5, .6, 0, 0, .77778],
        8719: [.25001, .75, 0, 0, .94445],
        8720: [.25001, .75, 0, 0, .94445],
        8721: [.25001, .75, 0, 0, 1.05556],
        8730: [.35001, .85, 0, 0, 1],
        8739: [-.00599, .606, 0, 0, .33333],
        8741: [-.00599, .606, 0, 0, .55556],
        8747: [.30612, .805, .19445, 0, .47222],
        8748: [.306, .805, .19445, 0, .47222],
        8749: [.306, .805, .19445, 0, .47222],
        8750: [.30612, .805, .19445, 0, .47222],
        8896: [.25001, .75, 0, 0, .83334],
        8897: [.25001, .75, 0, 0, .83334],
        8898: [.25001, .75, 0, 0, .83334],
        8899: [.25001, .75, 0, 0, .83334],
        8968: [.35001, .85, 0, 0, .47222],
        8969: [.35001, .85, 0, 0, .47222],
        8970: [.35001, .85, 0, 0, .47222],
        8971: [.35001, .85, 0, 0, .47222],
        9168: [-99e-5, .601, 0, 0, .66667],
        10216: [.35001, .85, 0, 0, .47222],
        10217: [.35001, .85, 0, 0, .47222],
        10752: [.25001, .75, 0, 0, 1.11111],
        10753: [.25001, .75, 0, 0, 1.11111],
        10754: [.25001, .75, 0, 0, 1.11111],
        10756: [.25001, .75, 0, 0, .83334],
        10758: [.25001, .75, 0, 0, .83334]
      },
      "Size2-Regular": {
        40: [.65002, 1.15, 0, 0, .59722],
        41: [.65002, 1.15, 0, 0, .59722],
        47: [.65002, 1.15, 0, 0, .81111],
        91: [.65002, 1.15, 0, 0, .47222],
        92: [.65002, 1.15, 0, 0, .81111],
        93: [.65002, 1.15, 0, 0, .47222],
        123: [.65002, 1.15, 0, 0, .66667],
        125: [.65002, 1.15, 0, 0, .66667],
        710: [0, .75, 0, 0, 1],
        732: [0, .75, 0, 0, 1],
        770: [0, .75, 0, 0, 1],
        771: [0, .75, 0, 0, 1],
        8719: [.55001, 1.05, 0, 0, 1.27778],
        8720: [.55001, 1.05, 0, 0, 1.27778],
        8721: [.55001, 1.05, 0, 0, 1.44445],
        8730: [.65002, 1.15, 0, 0, 1],
        8747: [.86225, 1.36, .44445, 0, .55556],
        8748: [.862, 1.36, .44445, 0, .55556],
        8749: [.862, 1.36, .44445, 0, .55556],
        8750: [.86225, 1.36, .44445, 0, .55556],
        8896: [.55001, 1.05, 0, 0, 1.11111],
        8897: [.55001, 1.05, 0, 0, 1.11111],
        8898: [.55001, 1.05, 0, 0, 1.11111],
        8899: [.55001, 1.05, 0, 0, 1.11111],
        8968: [.65002, 1.15, 0, 0, .52778],
        8969: [.65002, 1.15, 0, 0, .52778],
        8970: [.65002, 1.15, 0, 0, .52778],
        8971: [.65002, 1.15, 0, 0, .52778],
        10216: [.65002, 1.15, 0, 0, .61111],
        10217: [.65002, 1.15, 0, 0, .61111],
        10752: [.55001, 1.05, 0, 0, 1.51112],
        10753: [.55001, 1.05, 0, 0, 1.51112],
        10754: [.55001, 1.05, 0, 0, 1.51112],
        10756: [.55001, 1.05, 0, 0, 1.11111],
        10758: [.55001, 1.05, 0, 0, 1.11111]
      },
      "Size3-Regular": {
        40: [.95003, 1.45, 0, 0, .73611],
        41: [.95003, 1.45, 0, 0, .73611],
        47: [.95003, 1.45, 0, 0, 1.04445],
        91: [.95003, 1.45, 0, 0, .52778],
        92: [.95003, 1.45, 0, 0, 1.04445],
        93: [.95003, 1.45, 0, 0, .52778],
        123: [.95003, 1.45, 0, 0, .75],
        125: [.95003, 1.45, 0, 0, .75],
        710: [0, .75, 0, 0, 1.44445],
        732: [0, .75, 0, 0, 1.44445],
        770: [0, .75, 0, 0, 1.44445],
        771: [0, .75, 0, 0, 1.44445],
        8730: [.95003, 1.45, 0, 0, 1],
        8968: [.95003, 1.45, 0, 0, .58334],
        8969: [.95003, 1.45, 0, 0, .58334],
        8970: [.95003, 1.45, 0, 0, .58334],
        8971: [.95003, 1.45, 0, 0, .58334],
        10216: [.95003, 1.45, 0, 0, .75],
        10217: [.95003, 1.45, 0, 0, .75]
      },
      "Size4-Regular": {
        40: [1.25003, 1.75, 0, 0, .79167],
        41: [1.25003, 1.75, 0, 0, .79167],
        47: [1.25003, 1.75, 0, 0, 1.27778],
        91: [1.25003, 1.75, 0, 0, .58334],
        92: [1.25003, 1.75, 0, 0, 1.27778],
        93: [1.25003, 1.75, 0, 0, .58334],
        123: [1.25003, 1.75, 0, 0, .80556],
        125: [1.25003, 1.75, 0, 0, .80556],
        710: [0, .825, 0, 0, 1.8889],
        732: [0, .825, 0, 0, 1.8889],
        770: [0, .825, 0, 0, 1.8889],
        771: [0, .825, 0, 0, 1.8889],
        8730: [1.25003, 1.75, 0, 0, 1],
        8968: [1.25003, 1.75, 0, 0, .63889],
        8969: [1.25003, 1.75, 0, 0, .63889],
        8970: [1.25003, 1.75, 0, 0, .63889],
        8971: [1.25003, 1.75, 0, 0, .63889],
        9115: [.64502, 1.155, 0, 0, .875],
        9116: [1e-5, .6, 0, 0, .875],
        9117: [.64502, 1.155, 0, 0, .875],
        9118: [.64502, 1.155, 0, 0, .875],
        9119: [1e-5, .6, 0, 0, .875],
        9120: [.64502, 1.155, 0, 0, .875],
        9121: [.64502, 1.155, 0, 0, .66667],
        9122: [-99e-5, .601, 0, 0, .66667],
        9123: [.64502, 1.155, 0, 0, .66667],
        9124: [.64502, 1.155, 0, 0, .66667],
        9125: [-99e-5, .601, 0, 0, .66667],
        9126: [.64502, 1.155, 0, 0, .66667],
        9127: [1e-5, .9, 0, 0, .88889],
        9128: [.65002, 1.15, 0, 0, .88889],
        9129: [.90001, 0, 0, 0, .88889],
        9130: [0, .3, 0, 0, .88889],
        9131: [1e-5, .9, 0, 0, .88889],
        9132: [.65002, 1.15, 0, 0, .88889],
        9133: [.90001, 0, 0, 0, .88889],
        9143: [.88502, .915, 0, 0, 1.05556],
        10216: [1.25003, 1.75, 0, 0, .80556],
        10217: [1.25003, 1.75, 0, 0, .80556],
        57344: [-.00499, .605, 0, 0, 1.05556],
        57345: [-.00499, .605, 0, 0, 1.05556],
        57680: [0, .12, 0, 0, .45],
        57681: [0, .12, 0, 0, .45],
        57682: [0, .12, 0, 0, .45],
        57683: [0, .12, 0, 0, .45]
      },
      "Typewriter-Regular": {
        33: [0, .61111, 0, 0, .525],
        34: [0, .61111, 0, 0, .525],
        35: [0, .61111, 0, 0, .525],
        36: [.08333, .69444, 0, 0, .525],
        37: [.08333, .69444, 0, 0, .525],
        38: [0, .61111, 0, 0, .525],
        39: [0, .61111, 0, 0, .525],
        40: [.08333, .69444, 0, 0, .525],
        41: [.08333, .69444, 0, 0, .525],
        42: [0, .52083, 0, 0, .525],
        43: [-.08056, .53055, 0, 0, .525],
        44: [.13889, .125, 0, 0, .525],
        45: [-.08056, .53055, 0, 0, .525],
        46: [0, .125, 0, 0, .525],
        47: [.08333, .69444, 0, 0, .525],
        48: [0, .61111, 0, 0, .525],
        49: [0, .61111, 0, 0, .525],
        50: [0, .61111, 0, 0, .525],
        51: [0, .61111, 0, 0, .525],
        52: [0, .61111, 0, 0, .525],
        53: [0, .61111, 0, 0, .525],
        54: [0, .61111, 0, 0, .525],
        55: [0, .61111, 0, 0, .525],
        56: [0, .61111, 0, 0, .525],
        57: [0, .61111, 0, 0, .525],
        58: [0, .43056, 0, 0, .525],
        59: [.13889, .43056, 0, 0, .525],
        60: [-.05556, .55556, 0, 0, .525],
        61: [-.19549, .41562, 0, 0, .525],
        62: [-.05556, .55556, 0, 0, .525],
        63: [0, .61111, 0, 0, .525],
        64: [0, .61111, 0, 0, .525],
        65: [0, .61111, 0, 0, .525],
        66: [0, .61111, 0, 0, .525],
        67: [0, .61111, 0, 0, .525],
        68: [0, .61111, 0, 0, .525],
        69: [0, .61111, 0, 0, .525],
        70: [0, .61111, 0, 0, .525],
        71: [0, .61111, 0, 0, .525],
        72: [0, .61111, 0, 0, .525],
        73: [0, .61111, 0, 0, .525],
        74: [0, .61111, 0, 0, .525],
        75: [0, .61111, 0, 0, .525],
        76: [0, .61111, 0, 0, .525],
        77: [0, .61111, 0, 0, .525],
        78: [0, .61111, 0, 0, .525],
        79: [0, .61111, 0, 0, .525],
        80: [0, .61111, 0, 0, .525],
        81: [.13889, .61111, 0, 0, .525],
        82: [0, .61111, 0, 0, .525],
        83: [0, .61111, 0, 0, .525],
        84: [0, .61111, 0, 0, .525],
        85: [0, .61111, 0, 0, .525],
        86: [0, .61111, 0, 0, .525],
        87: [0, .61111, 0, 0, .525],
        88: [0, .61111, 0, 0, .525],
        89: [0, .61111, 0, 0, .525],
        90: [0, .61111, 0, 0, .525],
        91: [.08333, .69444, 0, 0, .525],
        92: [.08333, .69444, 0, 0, .525],
        93: [.08333, .69444, 0, 0, .525],
        94: [0, .61111, 0, 0, .525],
        95: [.09514, 0, 0, 0, .525],
        96: [0, .61111, 0, 0, .525],
        97: [0, .43056, 0, 0, .525],
        98: [0, .61111, 0, 0, .525],
        99: [0, .43056, 0, 0, .525],
        100: [0, .61111, 0, 0, .525],
        101: [0, .43056, 0, 0, .525],
        102: [0, .61111, 0, 0, .525],
        103: [.22222, .43056, 0, 0, .525],
        104: [0, .61111, 0, 0, .525],
        105: [0, .61111, 0, 0, .525],
        106: [.22222, .61111, 0, 0, .525],
        107: [0, .61111, 0, 0, .525],
        108: [0, .61111, 0, 0, .525],
        109: [0, .43056, 0, 0, .525],
        110: [0, .43056, 0, 0, .525],
        111: [0, .43056, 0, 0, .525],
        112: [.22222, .43056, 0, 0, .525],
        113: [.22222, .43056, 0, 0, .525],
        114: [0, .43056, 0, 0, .525],
        115: [0, .43056, 0, 0, .525],
        116: [0, .55358, 0, 0, .525],
        117: [0, .43056, 0, 0, .525],
        118: [0, .43056, 0, 0, .525],
        119: [0, .43056, 0, 0, .525],
        120: [0, .43056, 0, 0, .525],
        121: [.22222, .43056, 0, 0, .525],
        122: [0, .43056, 0, 0, .525],
        123: [.08333, .69444, 0, 0, .525],
        124: [.08333, .69444, 0, 0, .525],
        125: [.08333, .69444, 0, 0, .525],
        126: [0, .61111, 0, 0, .525],
        127: [0, .61111, 0, 0, .525],
        176: [0, .61111, 0, 0, .525],
        305: [0, .43056, 0, 0, .525],
        567: [.22222, .43056, 0, 0, .525],
        711: [0, .56597, 0, 0, .525],
        713: [0, .56555, 0, 0, .525],
        714: [0, .61111, 0, 0, .525],
        715: [0, .61111, 0, 0, .525],
        728: [0, .61111, 0, 0, .525],
        730: [0, .61111, 0, 0, .525],
        770: [0, .61111, 0, 0, .525],
        771: [0, .61111, 0, 0, .525],
        776: [0, .61111, 0, 0, .525],
        915: [0, .61111, 0, 0, .525],
        916: [0, .61111, 0, 0, .525],
        920: [0, .61111, 0, 0, .525],
        923: [0, .61111, 0, 0, .525],
        926: [0, .61111, 0, 0, .525],
        928: [0, .61111, 0, 0, .525],
        931: [0, .61111, 0, 0, .525],
        933: [0, .61111, 0, 0, .525],
        934: [0, .61111, 0, 0, .525],
        936: [0, .61111, 0, 0, .525],
        937: [0, .61111, 0, 0, .525],
        8216: [0, .61111, 0, 0, .525],
        8217: [0, .61111, 0, 0, .525],
        8242: [0, .61111, 0, 0, .525],
        9251: [.11111, .21944, 0, 0, .525]
      }
    }
  }, function(e, t, r) {
    "use strict";
    t.a = u;
    var n = r(0),
      a = r(3),
      i = r(1),
      o = r(5),
      s = r(4),
      l = r(2);

    function u(e, t, r) {
      for (var a = s.a(e, t, !1), i = t.sizeMultiplier / r.sizeMultiplier, l = 0; l < a.length; l++) {
        var u = o.a.indexOf(a[l].classes, "sizing");
        u < 0 ? Array.prototype.push.apply(a[l].classes, t.sizingClasses(r)) : a[l].classes[u + 1] === "reset-size" + t.size && (a[l].classes[u + 1] = "reset-size" + r.size), a[l].height *= i, a[l].depth *= i
      }
      return n.a.makeFragment(a)
    }
    var c = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
    Object(a.b)({
      type: "sizing",
      names: c,
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = e.breakOnTokenText,
          n = e.funcName,
          a = e.parser;
        a.consumeSpaces();
        var i = a.parseExpression(!1, r);
        return {
          type: "sizing",
          size: o.a.indexOf(c, n) + 1,
          value: i
        }
      },
      htmlBuilder: function(e, t) {
        var r = t.havingSize(e.value.size);
        return u(e.value.value, r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = t.havingSize(e.value.size),
          n = l.a(e.value.value, r),
          a = new i.a.MathNode("mstyle", n);
        return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a
      }
    })
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return i
    }), t.b = function(e) {
      for (var t = e.type, r = e.names, o = e.props, s = e.handler, l = e.htmlBuilder, u = e.mathmlBuilder, c = {
          numArgs: o.numArgs || 0,
          greediness: 1,
          allowedInText: !1,
          numOptionalArgs: 0,
          handler: s
        }, h = 0; h < r.length; ++h) i[r[h]] = c;
      l && (n.d[t] = l);
      u && (a.d[t] = u)
    };
    var n = r(4),
      a = r(2),
      i = (r(43), r(14), {})
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return f
    }), r.d(t, "b", function() {
      return g
    });
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(145),
      l = r.n(s),
      u = r(6),
      c = r(31),
      h = r(27),
      p = "%[^\n]*[\n]",
      m = "\\\\[a-zA-Z@]+",
      d = "[\u0300-\u036f]",
      f = new RegExp(d + "+$"),
      v = new RegExp("([ \r\n\t]+)|(" + p + "|[!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff]" + d + "*|[\ud800-\udbff][\udc00-\udfff]" + d + "*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|" + m + "|\\\\[^\ud800-\udfff])"),
      g = new RegExp("^" + m),
      y = new RegExp("^" + p),
      b = function() {
        function e(t) {
          a()(this, e), this.input = t, this.pos = 0
        }
        return o()(e, [{
          key: "lex",
          value: function() {
            var e = this.input,
              t = this.pos;
            if (t === e.length) return new h.a("EOF", new c.a(this, t, t));
            var r = l()(v, e, t);
            if (null === r) throw new u.a("Unexpected character: '" + e[t] + "'", new h.a(e[t], new c.a(this, t, t + 1)));
            var n = r[2] || " ",
              a = this.pos;
            this.pos += r[0].length;
            var i = this.pos;
            return y.test(n) ? this.lex() : new h.a(n, new c.a(this, a, i))
          }
        }]), e
      }();
    t.c = b
  }, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(64),
      a = (r.n(n), r(65));
    t.default = a.a
  }, function(e, t) {}, function(e, t, r) {
    "use strict";
    var n = r(6),
      a = r(34),
      i = r(76),
      o = r(113),
      s = r(5),
      l = function(e, t, r) {
        s.a.clearNode(t);
        var n = u(e, r).toNode();
        t.appendChild(n)
      };
    "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), l = function() {
      throw new n.a("KaTeX doesn't work in quirks mode.")
    });
    var u = function(e, t) {
      var r = new a.a(t),
        n = Object(o.a)(e, r);
      return Object(i.b)(n, e, r)
    };
    t.a = {
      render: l,
      renderToString: function(e, t) {
        return u(e, t).toMarkup()
      },
      ParseError: n.a,
      __parse: function(e, t) {
        var r = new a.a(t);
        return Object(o.a)(e, r)
      },
      __renderToDomTree: u,
      __renderToHTMLTree: function(e, t) {
        var r = new a.a(t),
          n = Object(o.a)(e, r);
        return Object(i.a)(n, e, r)
      }
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(67),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(68), e.exports = r(8).Object.freeze
  }, function(e, t, r) {
    var n = r(20),
      a = r(69).onFreeze;
    r(46)("freeze", function(e) {
      return function(t) {
        return e && n(t) ? e(a(t)) : t
      }
    })
  }, function(e, t, r) {
    var n = r(32)("meta"),
      a = r(20),
      i = r(21),
      o = r(15).f,
      s = 0,
      l = Object.isExtensible || function() {
        return !0
      },
      u = !r(24)(function() {
        return l(Object.preventExtensions({}))
      }),
      c = function(e) {
        o(e, n, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        })
      },
      h = e.exports = {
        KEY: n,
        NEED: !1,
        fastKey: function(e, t) {
          if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, n)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            c(e)
          }
          return e[n].i
        },
        getWeak: function(e, t) {
          if (!i(e, n)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            c(e)
          }
          return e[n].w
        },
        onFreeze: function(e) {
          return u && h.NEED && l(e) && !i(e, n) && c(e), e
        }
      }
  }, function(e, t, r) {
    e.exports = !r(23) && !r(24)(function() {
      return 7 != Object.defineProperty(r(45)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t) {
      if (!n(e)) return e;
      var r, a;
      if (t && "function" == typeof(r = e.toString) && !n(a = r.call(e))) return a;
      if ("function" == typeof(r = e.valueOf) && !n(a = r.call(e))) return a;
      if (!t && "function" == typeof(r = e.toString) && !n(a = r.call(e))) return a;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(74),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(75);
    var n = r(8).Object;
    e.exports = function(e, t, r) {
      return n.defineProperty(e, t, r)
    }
  }, function(e, t, r) {
    var n = r(25);
    n(n.S + n.F * !r(23), "Object", {
      defineProperty: r(15).f
    })
  }, function(e, t, r) {
    "use strict";
    r.d(t, "b", function() {
      return u
    }), r.d(t, "a", function() {
      return c
    });
    var n = r(4),
      a = r(2),
      i = r(0),
      o = r(43),
      s = (r(34), r(9)),
      l = function(e) {
        return new o.a({
          style: e.displayMode ? s.a.DISPLAY : s.a.TEXT,
          maxSize: e.maxSize
        })
      },
      u = function(e, t, r) {
        var o = l(r),
          s = Object(a.c)(e, t, o),
          u = Object(n.c)(e, o),
          c = i.a.makeSpan(["katex"], [s, u]);
        return r.displayMode ? i.a.makeSpan(["katex-display"], [c]) : c
      },
      c = function(e, t, r) {
        var a = l(r),
          o = Object(n.c)(e, a),
          s = i.a.makeSpan(["katex"], [o]);
        return r.displayMode ? i.a.makeSpan(["katex-display"], [s]) : s
      }
  }, function(e, t, r) {
    e.exports = {
      default: r(78),
      __esModule: !0
    }
  }, function(e, t, r) {
    var n = r(8),
      a = n.JSON || (n.JSON = {
        stringify: JSON.stringify
      });
    e.exports = function(e) {
      return a.stringify.apply(a, arguments)
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(80),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(36), r(92), e.exports = r(8).Array.from
  }, function(e, t, r) {
    var n = r(37),
      a = r(38);
    e.exports = function(e) {
      return function(t, r) {
        var i, o, s = String(a(t)),
          l = n(r),
          u = s.length;
        return l < 0 || l >= u ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : o - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, function(e, t) {
    e.exports = !0
  }, function(e, t, r) {
    e.exports = r(26)
  }, function(e, t, r) {
    "use strict";
    var n = r(85),
      a = r(33),
      i = r(54),
      o = {};
    r(26)(o, r(11)("iterator"), function() {
      return this
    }), e.exports = function(e, t, r) {
      e.prototype = n(o, {
        next: a(1, r)
      }), i(e, t + " Iterator")
    }
  }, function(e, t, r) {
    var n = r(22),
      a = r(86),
      i = r(53),
      o = r(41)("IE_PROTO"),
      s = function() {},
      l = "prototype",
      u = function() {
        var e, t = r(45)("iframe"),
          n = i.length;
        for (t.style.display = "none", r(90).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; n--;) delete u[l][i[n]];
        return u()
      };
    e.exports = Object.create || function(e, t) {
      var r;
      return null !== e ? (s[l] = n(e), r = new s, s[l] = null, r[o] = e) : r = u(), void 0 === t ? r : a(r, t)
    }
  }, function(e, t, r) {
    var n = r(15),
      a = r(22),
      i = r(39);
    e.exports = r(23) ? Object.defineProperties : function(e, t) {
      a(e);
      for (var r, o = i(t), s = o.length, l = 0; s > l;) n.f(e, r = o[l++], t[r]);
      return e
    }
  }, function(e, t, r) {
    var n = r(21),
      a = r(40),
      i = r(88)(!1),
      o = r(41)("IE_PROTO");
    e.exports = function(e, t) {
      var r, s = a(e),
        l = 0,
        u = [];
      for (r in s) r != o && n(s, r) && u.push(r);
      for (; t.length > l;) n(s, r = t[l++]) && (~i(u, r) || u.push(r));
      return u
    }
  }, function(e, t, r) {
    var n = r(40),
      a = r(51),
      i = r(89);
    e.exports = function(e) {
      return function(t, r, o) {
        var s, l = n(t),
          u = a(l.length),
          c = i(o, u);
        if (e && r != r) {
          for (; u > c;)
            if ((s = l[c++]) != s) return !0
        } else
          for (; u > c; c++)
            if ((e || c in l) && l[c] === r) return e || c || 0;
        return !e && -1
      }
    }
  }, function(e, t, r) {
    var n = r(37),
      a = Math.max,
      i = Math.min;
    e.exports = function(e, t) {
      return (e = n(e)) < 0 ? a(e + t, 0) : i(e, t)
    }
  }, function(e, t, r) {
    e.exports = r(16).document && document.documentElement
  }, function(e, t, r) {
    var n = r(21),
      a = r(29),
      i = r(41)("IE_PROTO"),
      o = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
      return e = a(e), n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(47),
      a = r(25),
      i = r(29),
      o = r(93),
      s = r(94),
      l = r(51),
      u = r(95),
      c = r(55);
    a(a.S + a.F * !r(96)(function(e) {
      Array.from(e)
    }), "Array", {
      from: function(e) {
        var t, r, a, h, p = i(e),
          m = "function" == typeof this ? this : Array,
          d = arguments.length,
          f = d > 1 ? arguments[1] : void 0,
          v = void 0 !== f,
          g = 0,
          y = c(p);
        if (v && (f = n(f, d > 2 ? arguments[2] : void 0, 2)), void 0 == y || m == Array && s(y))
          for (r = new m(t = l(p.length)); t > g; g++) u(r, g, v ? f(p[g], g) : p[g]);
        else
          for (h = y.call(p), r = new m; !(a = h.next()).done; g++) u(r, g, v ? o(h, f, [a.value, g], !0) : a.value);
        return r.length = g, r
      }
    })
  }, function(e, t, r) {
    var n = r(22);
    e.exports = function(e, t, r, a) {
      try {
        return a ? t(n(r)[0], r[1]) : t(r)
      } catch (t) {
        var i = e.return;
        throw void 0 !== i && n(i.call(e)), t
      }
    }
  }, function(e, t, r) {
    var n = r(17),
      a = r(11)("iterator"),
      i = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (n.Array === e || i[a] === e)
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(15),
      a = r(33);
    e.exports = function(e, t, r) {
      t in e ? n.f(e, t, a(0, r)) : e[t] = r
    }
  }, function(e, t, r) {
    var n = r(11)("iterator"),
      a = !1;
    try {
      var i = [7][n]();
      i.return = function() {
        a = !0
      }, Array.from(i, function() {
        throw 2
      })
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !a) return !1;
      var r = !1;
      try {
        var i = [7],
          o = i[n]();
        o.next = function() {
          return {
            done: r = !0
          }
        }, i[n] = function() {
          return o
        }, e(i)
      } catch (e) {}
      return r
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(98),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(58), r(36), e.exports = r(102)
  }, function(e, t, r) {
    "use strict";
    var n = r(100),
      a = r(101),
      i = r(17),
      o = r(40);
    e.exports = r(48)(Array, "Array", function(e, t) {
      this._t = o(e), this._i = 0, this._k = t
    }, function() {
      var e = this._t,
        t = this._k,
        r = this._i++;
      return !e || r >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
    }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries")
  }, function(e, t) {
    e.exports = function() {}
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  }, function(e, t, r) {
    var n = r(56),
      a = r(11)("iterator"),
      i = r(17);
    e.exports = r(8).isIterable = function(e) {
      var t = Object(e);
      return void 0 !== t[a] || "@@iterator" in t || i.hasOwnProperty(n(t))
    }
  }, function(e, t, r) {
    r(58), r(36), e.exports = r(104)
  }, function(e, t, r) {
    var n = r(22),
      a = r(55);
    e.exports = r(8).getIterator = function(e) {
      var t = a(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return n(t.call(e))
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(106),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(107), e.exports = r(8).Object.assign
  }, function(e, t, r) {
    var n = r(25);
    n(n.S + n.F, "Object", {
      assign: r(108)
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(39),
      a = r(109),
      i = r(110),
      o = r(29),
      s = r(49),
      l = Object.assign;
    e.exports = !l || r(24)(function() {
      var e = {},
        t = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";
      return e[r] = 7, n.split("").forEach(function(e) {
        t[e] = e
      }), 7 != l({}, e)[r] || Object.keys(l({}, t)).join("") != n
    }) ? function(e, t) {
      for (var r = o(e), l = arguments.length, u = 1, c = a.f, h = i.f; l > u;)
        for (var p, m = s(arguments[u++]), d = c ? n(m).concat(c(m)) : n(m), f = d.length, v = 0; f > v;) h.call(m, p = d[v++]) && (r[p] = m[p]);
      return r
    } : l
  }, function(e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function(e, t) {
    t.f = {}.propertyIsEnumerable
  }, function(e, t, r) {
    "use strict";
    var n = {
      stdHorizRule: "M0 80H400000 v40H0z M0 80H400000 v40H0z",
      vertSeparator: "M100 0h50V400000h-50zM100 0h50V400000h-50z",
      sqrtMain: "M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",
      sqrtSize1: "M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",
      sqrtSize2: "M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",
      sqrtSize3: "M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",
      sqrtSize4: "M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",
      doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
      doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
      leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
      leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
      leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
      leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
      leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
      leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
      leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
      leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
      leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
      lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
      leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
      leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
      leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
      longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
      midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
      midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
      rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
      rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
      rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
      rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
      rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
      rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
      rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
      rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
      rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
      righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
      rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
      rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
      twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
      twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
      tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
      tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
      tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
      tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
      vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
      widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
      widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      baraboveleftarrow: "M1 500c30.67-18 59-41.833 85-71.5s45-61.17 57-94.5h23\nc15.33 0 23 .33 23 1 0 .67-5.33 12.67-16 36-16.67 34.67-39 67.33-67 98l-10 11\nh39904v40H96l9 10c27.33 30.67 50.67 65 70 103l14 33c0 .67-7.67 1-23 1h-22\nC116.67 596.33 69 540.67 1 500z M96 480 H400000 v40 H96z\nM1 147 H399905 v40  H1z M0 147 H399905 v40  H0z",
      rightarrowabovebar: "M400000 167c-70.67 42-118 97.67-142 167h-23c-15.33 0\n-23-.33-23-1 0-1.33 5.33-13.67 16-37 18-35.33 41.33-69 70-101l7-8h-39905\nv-40h39905c-389 0 0 0 0 0l-7-8c-28.67-32-52-65.67-70-101-10.67-23.33-16-35.67\n-16-37 0-.67 7.67-1 23-1h23c11.33 33.33 30 64.833 56 94.5s54.67 53.83 86 72.5z\nM0 147 H399905 v40  H0z M96 480 H400000 v40 H0z M96 480 H400000 v40 H0z",
      baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
      rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
      shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
      shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
    };
    t.a = {
      path: n
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return o
    }), r.d(t, "b", function() {
      return s
    });
    var n = {
        number: 3,
        unit: "mu"
      },
      a = {
        number: 4,
        unit: "mu"
      },
      i = {
        number: 5,
        unit: "mu"
      },
      o = {
        mord: {
          mop: n,
          mbin: a,
          mrel: i,
          minner: n
        },
        mop: {
          mord: n,
          mop: n,
          mrel: i,
          minner: n
        },
        mbin: {
          mord: a,
          mop: a,
          mopen: a,
          minner: a
        },
        mrel: {
          mord: i,
          mop: i,
          mopen: i,
          minner: i
        },
        mopen: {},
        mclose: {
          mop: n,
          mbin: a,
          mrel: i,
          minner: n
        },
        mpunct: {
          mord: n,
          mop: n,
          mrel: i,
          mopen: n,
          mclose: n,
          mpunct: n,
          minner: n
        },
        minner: {
          mord: n,
          mop: n,
          mbin: a,
          mrel: i,
          mopen: n,
          mpunct: n,
          minner: n
        }
      },
      s = {
        mord: {
          mop: n
        },
        mop: {
          mord: n,
          mop: n
        },
        mbin: {},
        mrel: {},
        mopen: {},
        mclose: {
          mop: n
        },
        mpunct: {},
        minner: {
          mop: n
        }
      }
  }, function(e, t, r) {
    "use strict";
    var n = r(114);
    t.a = function(e, t) {
      if (!("string" == typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
      return new n.a(e, t).parse()
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(115),
      l = r(142),
      u = r(144),
      c = r(28),
      h = r(19),
      p = r(42),
      m = r(148),
      d = r.n(m),
      f = r(149),
      v = r(14),
      g = r(6),
      y = r(62);
    r(34), r(27);

    function b(e, t) {
      return {
        type: "arg",
        result: e,
        token: t
      }
    }

    function x(e) {
      if ("$" === e.type) throw new g.a("Unexpected $", e.token);
      return e
    }
    var w = function() {
      function e(t, r) {
        a()(this, e), this.mode = "math", this.gullet = new u.a(t, r.macros, this.mode), r.colorIsTextColor && (this.gullet.macros["\\color"] = "\\textcolor"), this.settings = r, this.leftrightDepth = 0
      }
      return o()(e, [{
        key: "expect",
        value: function(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.nextToken.text !== e) throw new g.a("Expected '" + e + "', got '" + this.nextToken.text + "'", this.nextToken);
          t && this.consume()
        }
      }, {
        key: "consume",
        value: function() {
          this.nextToken = this.gullet.expandNextToken()
        }
      }, {
        key: "switchMode",
        value: function(e) {
          this.mode = e, this.gullet.switchMode(e)
        }
      }, {
        key: "parse",
        value: function() {
          this.consume();
          var e = this.parseInput();
          return e
        }
      }, {
        key: "parseInput",
        value: function() {
          var e = this.parseExpression(!1);
          return this.expect("EOF", !1), e
        }
      }, {
        key: "parseExpression",
        value: function(t, r) {
          for (var n = [];;) {
            "math" === this.mode && this.consumeSpaces();
            var a = this.nextToken;
            if (-1 !== e.endOfExpression.indexOf(a.text)) break;
            if (r && a.text === r) break;
            if (t && s.a[a.text] && s.a[a.text].infix) break;
            var i = this.parseAtom(r);
            if (!i) {
              if (!this.settings.throwOnError && "\\" === a.text[0]) {
                var o = this.handleUnsupportedCmd();
                n.push(o);
                continue
              }
              break
            }
            n.push(i)
          }
          return this.handleInfixNodes(n)
        }
      }, {
        key: "handleInfixNodes",
        value: function(e) {
          for (var t = -1, r = void 0, n = 0; n < e.length; n++) {
            var a = e[n];
            if ("infix" === a.type) {
              if (-1 !== t) throw new g.a("only one infix operator per group", a.value.token);
              t = n, r = a.value.replaceWith
            }
          }
          if (-1 !== t && r) {
            var i = void 0,
              o = void 0,
              s = e.slice(0, t),
              l = e.slice(t + 1);
            i = 1 === s.length && "ordgroup" === s[0].type ? s[0] : new v.a("ordgroup", s, this.mode), o = 1 === l.length && "ordgroup" === l[0].type ? l[0] : new v.a("ordgroup", l, this.mode);
            var u = this.callFunction(r, [i, o], []);
            return [new v.a(u.type, u, this.mode)]
          }
          return e
        }
      }, {
        key: "handleSupSubscript",
        value: function(t) {
          var r = this.nextToken,
            n = r.text;
          this.consume(), this.consumeSpaces();
          var a = this.parseGroup();
          if (!a) {
            if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new g.a("Expected group after '" + n + "'", r);
            return this.handleUnsupportedCmd()
          }
          var i = x(a);
          if ("fn" === i.type) {
            if (s.a[i.result].greediness > e.SUPSUB_GREEDINESS) return this.parseGivenFunction(a);
            throw new g.a("Got function '" + i.result + "' with no arguments as " + t, r)
          }
          return i.result
        }
      }, {
        key: "handleUnsupportedCmd",
        value: function() {
          for (var e = this.nextToken.text, t = [], r = 0; r < e.length; r++) t.push(new v.a("textord", e[r], "text"));
          var n = new v.a("text", {
              body: t,
              type: "text"
            }, this.mode),
            a = new v.a("color", {
              color: this.settings.errorColor,
              value: [n],
              type: "color"
            }, this.mode);
          return this.consume(), a
        }
      }, {
        key: "parseAtom",
        value: function(e) {
          var t = this.parseImplicitGroup(e);
          if ("text" === this.mode) return t;
          for (var r = void 0, n = void 0;;) {
            this.consumeSpaces();
            var a = this.nextToken;
            if ("\\limits" === a.text || "\\nolimits" === a.text) {
              if (!t || "op" !== t.type) throw new g.a("Limit controls must follow a math operator", a);
              var i = "\\limits" === a.text;
              t.value.limits = i, t.value.alwaysHandleSupSub = !0, this.consume()
            } else if ("^" === a.text) {
              if (r) throw new g.a("Double superscript", a);
              r = this.handleSupSubscript("superscript")
            } else if ("_" === a.text) {
              if (n) throw new g.a("Double subscript", a);
              n = this.handleSupSubscript("subscript")
            } else {
              if ("'" !== a.text) break;
              if (r) throw new g.a("Double superscript", a);
              var o = new v.a("textord", "\\prime", this.mode),
                s = [o];
              for (this.consume();
                "'" === this.nextToken.text;) s.push(o), this.consume();
              "^" === this.nextToken.text && s.push(this.handleSupSubscript("superscript")), r = new v.a("ordgroup", s, this.mode)
            }
          }
          return r || n ? new v.a("supsub", {
            base: t,
            sup: r,
            sub: n
          }, this.mode) : t
        }
      }, {
        key: "parseImplicitGroup",
        value: function(e) {
          var t = this.parseSymbol();
          if (null == t) return this.parseFunction();
          if ("arg" === t.type) return this.parseGivenFunction(t);
          var r = t.result;
          if ("$" === r) {
            if ("math" === this.mode) throw new g.a("$ within math mode");
            var n = this.mode;
            this.switchMode("math"), this.consume();
            var a = this.parseExpression(!1, "$");
            return this.expect("$", !1), this.switchMode(n), this.consume(), new v.a("styling", {
              style: "text",
              value: a
            }, "math")
          }
          if ("\\begin" === r) {
            var i = this.parseGivenFunction(t),
              o = i.value.name;
            if (!l.a.hasOwnProperty(o)) throw new g.a("No such environment: " + o, i.value.nameGroup);
            var s = l.a[o],
              u = this.parseArguments("\\begin{" + o + "}", s),
              c = u.args,
              h = u.optArgs,
              p = {
                mode: this.mode,
                envName: o,
                parser: this
              },
              m = s.handler(p, c, h);
            this.expect("\\end", !1);
            var d = this.nextToken,
              f = this.parseFunction();
            if (!f) throw new g.a("failed to parse function after \\end");
            if (f.value.name !== o) throw new g.a("Mismatch: \\begin{" + o + "} matched by \\end{" + f.value.name + "}", d);
            return m
          }
          return this.parseGivenFunction(t, e)
        }
      }, {
        key: "parseFunction",
        value: function() {
          var e = this.parseGroup();
          return e ? this.parseGivenFunction(e) : null
        }
      }, {
        key: "parseGivenFunction",
        value: function(e, t) {
          if ("fn" === (e = x(e)).type) {
            var r = e.result,
              n = s.a[r];
            if ("text" === this.mode && !n.allowedInText) throw new g.a("Can't use function '" + r + "' in text mode", e.token);
            if ("math" === this.mode && !1 === n.allowedInMath) throw new g.a("Can't use function '" + r + "' in math mode", e.token);
            var a = this.parseArguments(r, n),
              i = a.args,
              o = a.optArgs,
              l = e.token,
              u = this.callFunction(r, i, o, l, t);
            return new v.a(u.type, u, this.mode)
          }
          return e.result
        }
      }, {
        key: "callFunction",
        value: function(e, t, r, n, a) {
          var i = {
              funcName: e,
              parser: this,
              token: n,
              breakOnTokenText: a
            },
            o = s.a[e];
          if (o && o.handler) return o.handler(i, t, r);
          throw new g.a("No function handler for " + e)
        }
      }, {
        key: "parseArguments",
        value: function(e, t) {
          var r = t.numArgs + t.numOptionalArgs;
          if (0 === r) return {
            args: [],
            optArgs: []
          };
          for (var n = t.greediness, a = [], i = [], o = 0; o < r; o++) {
            var l = t.argTypes && t.argTypes[o],
              u = o < t.numOptionalArgs;
            o > 0 && !u && this.consumeSpaces(), 0 !== o || u || "math" !== this.mode || this.consumeSpaces();
            var c = this.nextToken,
              h = l ? this.parseGroupOfType(l, u) : this.parseGroup(u);
            if (!h) {
              if (u) {
                i.push(null);
                continue
              }
              if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new g.a("Expected group after '" + e + "'", c);
              h = b(this.handleUnsupportedCmd(), c)
            }
            var p = void 0;
            if ("fn" === (h = x(h)).type) {
              if (!(s.a[h.result].greediness > n)) throw new g.a("Got function '" + h.result + "' as argument to '" + e + "'", c);
              p = this.parseGivenFunction(h)
            } else p = h.result;
            (u ? i : a).push(p)
          }
          return {
            args: a,
            optArgs: i
          }
        }
      }, {
        key: "parseGroupOfType",
        value: function(e, t) {
          return "original" === e && (e = this.mode), "color" === e ? this.parseColorGroup(t) : "size" === e ? this.parseSizeGroup(t) : "url" === e ? this.parseUrlGroup(t) : this.parseGroup(t, e)
        }
      }, {
        key: "consumeSpaces",
        value: function() {
          for (;
            " " === this.nextToken.text;) this.consume()
        }
      }, {
        key: "parseStringGroup",
        value: function(e, t) {
          if (t && "[" !== this.nextToken.text) return null;
          var r = this.mode;
          this.mode = "text", this.expect(t ? "[" : "{");
          for (var n = "", a = this.nextToken, i = a; this.nextToken.text !== (t ? "]" : "}");) {
            if ("EOF" === this.nextToken.text) throw new g.a("Unexpected end of input in " + e, a.range(this.nextToken, n));
            n += (i = this.nextToken).text, this.consume()
          }
          return this.mode = r, this.expect(t ? "]" : "}"), a.range(i, n)
        }
      }, {
        key: "parseStringGroupWithBalancedBraces",
        value: function(e, t) {
          if (t && "[" !== this.nextToken.text) return null;
          var r = this.mode;
          this.mode = "text", this.expect(t ? "[" : "{");
          for (var n = "", a = 0, i = this.nextToken, o = i; a > 0 || this.nextToken.text !== (t ? "]" : "}");) {
            if ("EOF" === this.nextToken.text) throw new g.a("Unexpected end of input in " + e, i.range(this.nextToken, n));
            if (n += (o = this.nextToken).text, "{" === o.text) a += 1;
            else if ("}" === o.text) {
              if (a <= 0) throw new g.a("Unbalanced brace of input in " + e, i.range(this.nextToken, n));
              a -= 1
            }
            this.consume()
          }
          return this.mode = r, this.expect(t ? "]" : "}"), i.range(o, n)
        }
      }, {
        key: "parseRegexGroup",
        value: function(e, t) {
          var r = this.mode;
          this.mode = "text";
          for (var n = this.nextToken, a = n, i = "";
            "EOF" !== this.nextToken.text && e.test(i + this.nextToken.text);) i += (a = this.nextToken).text, this.consume();
          if ("" === i) throw new g.a("Invalid " + t + ": '" + n.text + "'", n);
          return this.mode = r, n.range(a, i)
        }
      }, {
        key: "parseColorGroup",
        value: function(e) {
          var t = this.parseStringGroup("color", e);
          if (!t) return null;
          var r = /^(#[a-f0-9]{3}|#[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
          if (!r) throw new g.a("Invalid color: '" + t.text + "'", t);
          return b(new v.a("color", r[0], this.mode), t)
        }
      }, {
        key: "parseUrlGroup",
        value: function(e) {
          var t = this.parseStringGroupWithBalancedBraces("url", e);
          if (!t) return null;
          var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return b(new v.a("url", r, this.mode), t)
        }
      }, {
        key: "parseSizeGroup",
        value: function(e) {
          var t = void 0;
          if (!(t = e || "{" === this.nextToken.text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
          var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
          if (!r) throw new g.a("Invalid size: '" + t.text + "'", t);
          var n = {
            number: +(r[1] + r[2]),
            unit: r[3]
          };
          if (!Object(h.b)(n)) throw new g.a("Invalid unit: '" + n.unit + "'", t);
          return b(new v.a("size", n, this.mode), t)
        }
      }, {
        key: "parseGroup",
        value: function(e, t) {
          var r = this.mode,
            n = this.nextToken;
          if (this.nextToken.text === (e ? "[" : "{")) {
            t && this.switchMode(t), this.consume();
            var a = this.parseExpression(!1, e ? "]" : "}"),
              i = this.nextToken;
            return t && this.switchMode(r), this.expect(e ? "]" : "}"), "text" === t && this.formLigatures(a), b(new v.a("ordgroup", a, this.mode, n, i), n.range(i, n.text))
          }
          t && this.switchMode(t);
          var o = e ? null : this.parseSymbol();
          return t && this.switchMode(r), o
        }
      }, {
        key: "formLigatures",
        value: function(e) {
          for (var t = e.length - 1, r = 0; r < t; ++r) {
            var n = e[r],
              a = n.value;
            "-" === a && "-" === e[r + 1].value && (r + 1 < t && "-" === e[r + 2].value ? (e.splice(r, 3, new v.a("textord", "---", "text", n, e[r + 2])), t -= 2) : (e.splice(r, 2, new v.a("textord", "--", "text", n, e[r + 1])), t -= 1)), "'" !== a && "`" !== a || e[r + 1].value !== a || (e.splice(r, 2, new v.a("textord", a + a, "text", n, e[r + 1])), t -= 1)
          }
        }
      }, {
        key: "parseSymbol",
        value: function() {
          var e, t = this.nextToken,
            r = t.text;
          if (s.a[r]) return this.consume(), {
            type: "fn",
            result: (e = t).text,
            token: e
          };
          if (/^\\verb[^a-zA-Z]/.test(r)) {
            this.consume();
            var n = r.slice(5),
              a = "*" === n.charAt(0);
            if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)) throw new g.a("\\verb assertion failed --\n                    please report what input caused this bug");
            return n = n.slice(1, -1), b(new v.a("verb", {
              body: n,
              star: a
            }, "text"), t)
          }
          if ("$" === r) return {
            type: "$",
            result: "$",
            token: t
          };
          f.a.hasOwnProperty(r[0]) && !c.a[this.mode][r[0]] && (r = f.a[r[0]] + r.substr(1));
          var i = y.a.exec(r);
          i && ("i" === (r = r.substring(0, i.index)) ? r = "\u0131" : "j" === r && (r = "\u0237"));
          var o = null;
          if (c.a[this.mode][r]) o = new v.a(c.a[this.mode][r].group, r, this.mode, t);
          else {
            if ("text" !== this.mode || !Object(p.b)(r.charCodeAt(0))) return null;
            o = new v.a("textord", r, this.mode, t)
          }
          if (this.consume(), i)
            for (var l = 0; l < i[0].length; l++) {
              var u = i[0][l];
              if (!d.a[u]) throw new g.a("Unknown accent ' " + u + "'", t);
              var h = d.a[u][this.mode];
              if (!h) throw new g.a("Accent " + u + " unsupported in " + this.mode + " mode", t);
              o = new v.a("accent", {
                type: "accent",
                label: h,
                isStretchy: !1,
                isShifty: !0,
                base: o
              }, this.mode, t)
            }
          return b(o, t)
        }
      }]), e
    }();
    w.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"], w.SUPSUB_GREEDINESS = 1, t.a = w
  }, function(e, t, r) {
    "use strict";
    var n = r(6),
      a = r(14),
      i = r(3),
      o = (r(116), r(117), r(118), r(119), r(120), r(121), r(122), r(123), r(124), r(125), r(126), r(127), r(128), r(129), r(130), r(131), r(60), r(132), r(133), r(137), r(138), r(139), r(140), r(141), i.a);
    t.a = o;
    var s = function(e, t, r) {
      Object(i.b)({
        names: e,
        props: t,
        handler: r
      })
    };
    s(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {
      numArgs: 1
    }, function(e, t) {
      var r = t[0];
      return {
        type: "mclass",
        mclass: "m" + e.funcName.substr(5),
        value: Object(i.c)(r)
      }
    }), s(["\\stackrel"], {
      numArgs: 2
    }, function(e, t) {
      var r = t[0],
        n = t[1],
        o = new a.a("op", {
          type: "op",
          limits: !0,
          alwaysHandleSupSub: !0,
          symbol: !1,
          value: Object(i.c)(n)
        }, n.mode);
      return {
        type: "mclass",
        mclass: "mrel",
        value: [new a.a("supsub", {
          base: o,
          sup: r,
          sub: null
        }, r.mode)]
      }
    });
    var l = {
      "\u222b": "\\int",
      "\u222c": "\\iint",
      "\u222d": "\\iiint",
      "\u222e": "\\oint"
    };
    s(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], {
      numArgs: 0
    }, function(e) {
      return {
        type: "op",
        limits: !1,
        symbol: !1,
        body: e.funcName
      }
    }), s(["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], {
      numArgs: 0
    }, function(e) {
      return {
        type: "op",
        limits: !0,
        symbol: !1,
        body: e.funcName
      }
    }), s(["\\int", "\\iint", "\\iiint", "\\oint", "\u222b", "\u222c", "\u222d", "\u222e"], {
      numArgs: 0
    }, function(e) {
      var t = e.funcName;
      return 1 === t.length && (t = l[t]), {
        type: "op",
        limits: !1,
        symbol: !0,
        body: t
      }
    }), s(["\\overbrace", "\\underbrace"], {
      numArgs: 1
    }, function(e, t) {
      var r = t[0];
      return {
        type: "horizBrace",
        label: e.funcName,
        isOver: /^\\over/.test(e.funcName),
        base: r
      }
    }), s(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"], {
      numArgs: 1,
      numOptionalArgs: 1
    }, function(e, t, r) {
      var n = r[0],
        a = t[0];
      return {
        type: "xArrow",
        label: e.funcName,
        body: a,
        below: n
      }
    }), s(["\\over", "\\choose", "\\atop"], {
      numArgs: 0,
      infix: !0
    }, function(e) {
      var t = void 0;
      switch (e.funcName) {
        case "\\over":
          t = "\\frac";
          break;
        case "\\choose":
          t = "\\binom";
          break;
        case "\\atop":
          t = "\\\\atopfrac";
          break;
        default:
          throw new Error("Unrecognized infix genfrac command")
      }
      return {
        type: "infix",
        replaceWith: t,
        token: e.token
      }
    }), s(["\\\\", "\\cr"], {
      numArgs: 0,
      numOptionalArgs: 1,
      argTypes: ["size"]
    }, function(e, t, r) {
      return {
        type: "cr",
        size: r[0]
      }
    }), s(["\\begin", "\\end"], {
      numArgs: 1,
      argTypes: ["text"]
    }, function(e, t) {
      var r = t[0];
      if ("ordgroup" !== r.type) throw new n.a("Invalid environment name", r);
      for (var a = "", i = 0; i < r.value.length; ++i) a += r.value[i].value;
      return {
        type: "environment",
        name: a,
        nameGroup: r
      }
    }), s(["\\raisebox"], {
      numArgs: 2,
      argTypes: ["size", "text"],
      allowedInText: !0
    }, function(e, t) {
      var r = t[0],
        n = t[1];
      return {
        type: "raisebox",
        dy: r,
        body: n,
        value: Object(i.c)(n)
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(12),
      o = r(1),
      s = r(44),
      l = r(9),
      u = r(4),
      c = r(2);
    Object(n.b)({
      type: "sqrt",
      names: ["\\sqrt"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1
      },
      handler: function(e, t, r) {
        var n = r[0];
        return {
          type: "sqrt",
          body: t[0],
          index: n
        }
      },
      htmlBuilder: function(e, t) {
        var r = u.b(e.value.body, t.havingCrampedStyle());
        0 === r.height && (r.height = t.fontMetrics().xHeight), r instanceof i.a.documentFragment && (r = a.a.makeSpan([], [r], t));
        var n = t.fontMetrics().defaultRuleThickness,
          o = n;
        t.style.id < l.a.TEXT.id && (o = t.fontMetrics().xHeight);
        var c = n + o / 4,
          h = (r.height + r.depth + c + n) * t.sizeMultiplier,
          p = s.a.sqrtImage(h, t),
          m = p.span,
          d = p.ruleWidth,
          f = m.height - d;
        f > r.height + r.depth + c && (c = (c + f - r.height - r.depth) / 2);
        var v = m.height - r.height - c - d;
        r.style.paddingLeft = m.advanceWidth + "em";
        var g = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r,
            wrapperClasses: ["svg-align"]
          }, {
            type: "kern",
            size: -(r.height + v)
          }, {
            type: "elem",
            elem: m
          }, {
            type: "kern",
            size: d
          }]
        }, t);
        if (e.value.index) {
          var y = t.havingStyle(l.a.SCRIPTSCRIPT),
            b = u.b(e.value.index, y, t),
            x = .6 * (g.height - g.depth),
            w = a.a.makeVList({
              positionType: "shift",
              positionData: -x,
              children: [{
                type: "elem",
                elem: b
              }]
            }, t),
            k = a.a.makeSpan(["root"], [w]);
          return a.a.makeSpan(["mord", "sqrt"], [k, g], t)
        }
        return a.a.makeSpan(["mord", "sqrt"], [g], t)
      },
      mathmlBuilder: function(e, t) {
        return e.value.index ? new o.a.MathNode("mroot", [c.b(e.value.body, t), c.b(e.value.index, t)]) : new o.a.MathNode("msqrt", [c.b(e.value.body, t)])
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(6),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = s.a(e.value.value, t.withColor(e.value.color), !1);
        return new a.a.makeFragment(r)
      },
      c = function(e, t) {
        var r = l.a(e.value.value, t),
          n = new i.a.MathNode("mstyle", r);
        return n.setAttribute("mathcolor", e.value.color), n
      };
    Object(n.b)({
      type: "color",
      names: ["\\textcolor"],
      props: {
        numArgs: 2,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "original"]
      },
      handler: function(e, t) {
        var r = t[0],
          a = t[1];
        return {
          type: "color",
          color: r.value,
          value: Object(n.c)(a)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "color",
      names: ["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "color",
          color: "katex-" + e.funcName.slice(1),
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "color",
      names: ["\\color"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color"]
      },
      handler: function(e, t) {
        var r = e.parser,
          n = e.breakOnTokenText,
          a = t[0];
        if (!a) throw new o.a("\\color not followed by color");
        var i = r.parseExpression(!0, n);
        return {
          type: "color",
          color: a.value,
          value: i
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2),
      l = {
        "\\text": void 0,
        "\\textrm": "textrm",
        "\\textsf": "textsf",
        "\\texttt": "texttt",
        "\\textnormal": "textrm"
      },
      u = {
        "\\textbf": "textbf"
      },
      c = {
        "\\textit": "textit"
      };
    Object(n.b)({
      type: "text",
      names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"],
      props: {
        numArgs: 1,
        argTypes: ["text"],
        greediness: 2,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "text",
          body: Object(n.c)(r),
          font: e.funcName
        }
      },
      htmlBuilder: function(e, t) {
        var r = e.value.font,
          n = void 0;
        n = l[r] ? t.withFontFamily(l[r]) : u[r] ? t.withFontWeight(u[r]) : t.withFontShape(c[r]);
        var i = o.a(e.value.body, n, !0);
        return a.a.tryCombineChars(i), a.a.makeSpan(["mord", "text"], i, n)
      },
      mathmlBuilder: function(e, t) {
        for (var r = e.value.body, n = [], a = null, o = 0; o < r.length; o++) {
          var l = s.b(r[o], t);
          "mtext" === l.type && null != a ? Array.prototype.push.apply(a.children, l.children) : (n.push(l), "mtext" === l.type && (a = l))
        }
        return 1 === n.length ? n[0] : new i.a.MathNode("mrow", n)
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(5),
      s = r(13),
      l = r(4),
      u = r(2),
      c = function(e, t) {
        var r = l.b(e.value.body, t),
          n = e.value.label.substr(1),
          i = t.sizeMultiplier,
          u = void 0,
          c = 0,
          h = /color/.test(n);
        if ("sout" === n)(u = a.a.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / i, c = -.5 * t.fontMetrics().xHeight;
        else {
          r.classes.push(/cancel/.test(n) ? "cancel-pad" : "boxpad");
          var p = 0;
          p = /box/.test(n) ? "colorbox" === n ? .3 : .34 : o.a.isCharacterBox(e.value.body) ? .2 : 0, u = s.a.encloseSpan(r, n, p, t), c = r.depth + p, h && (u.style.backgroundColor = e.value.backgroundColor.value, "fcolorbox" === n && (u.style.borderColor = e.value.borderColor.value))
        }
        var m = void 0;
        return m = h ? a.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: u,
            shift: c
          }, {
            type: "elem",
            elem: r,
            shift: 0
          }]
        }, t) : a.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: r,
            shift: 0
          }, {
            type: "elem",
            elem: u,
            shift: c,
            wrapperClasses: /cancel/.test(n) ? ["svg-align"] : []
          }]
        }, t), /cancel/.test(n) ? a.a.makeSpan(["mord", "cancel-lap"], [m], t) : a.a.makeSpan(["mord"], [m], t)
      },
      h = function(e, t) {
        var r = new i.a.MathNode("menclose", [u.b(e.value.body, t)]);
        switch (e.value.label) {
          case "\\cancel":
            r.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            r.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\sout":
            r.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            r.setAttribute("notation", "box");
            break;
          case "\\colorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value);
            break;
          case "\\fcolorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value), r.setAttribute("notation", "box");
            break;
          default:
            r.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
        }
        return r
      };
    Object(n.b)({
      type: "enclose",
      names: ["\\colorbox"],
      props: {
        numArgs: 2,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "text"]
      },
      handler: function(e, t, r) {
        var n = t[0],
          a = t[1];
        return {
          type: "enclose",
          label: e.funcName,
          backgroundColor: n,
          body: a
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "enclose",
      names: ["\\fcolorbox"],
      props: {
        numArgs: 3,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "color", "text"]
      },
      handler: function(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2];
        return {
          type: "enclose",
          label: e.funcName,
          backgroundColor: a,
          borderColor: n,
          body: i
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "enclose",
      names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"],
      props: {
        numArgs: 1
      },
      handler: function(e, t, r) {
        var n = t[0];
        return {
          type: "enclose",
          label: e.funcName,
          body: n
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "overline",
      names: ["\\overline"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        return {
          type: "overline",
          body: t[0]
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.b(e.value.body, t.havingCrampedStyle()),
          n = a.a.makeLineSpan("overline-line", t),
          i = a.a.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: r
            }, {
              type: "kern",
              size: n.height
            }, {
              type: "elem",
              elem: n
            }]
          }, t);
        return a.a.makeSpan(["mord", "overline"], [i], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mo", [new i.a.TextNode("\u203e")]);
        r.setAttribute("stretchy", "true");
        var n = new i.a.MathNode("mover", [s.b(e.value.body, t), r]);
        return n.setAttribute("accent", "true"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "underline",
      names: ["\\underline"],
      props: {
        numArgs: 1,
        allowedInText: !0
      },
      handler: function(e, t) {
        return {
          type: "underline",
          body: t[0]
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.b(e.value.body, t),
          n = a.a.makeLineSpan("underline-line", t),
          i = a.a.makeVList({
            positionType: "top",
            positionData: r.height,
            children: [{
              type: "elem",
              elem: n
            }, {
              type: "kern",
              size: 5 * n.height
            }, {
              type: "elem",
              elem: r
            }]
          }, t);
        return a.a.makeSpan(["mord", "underline"], [i], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mo", [new i.a.TextNode("\u203e")]);
        r.setAttribute("stretchy", "true");
        var n = new i.a.MathNode("munder", [s.b(e.value.body, t), r]);
        return n.setAttribute("accentunder", "true"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(0),
      a = r(3),
      i = r(1),
      o = r(19);
    Object(a.b)({
      type: "rule",
      names: ["\\rule"],
      props: {
        numArgs: 2,
        numOptionalArgs: 1,
        argTypes: ["size", "size", "size"]
      },
      handler: function(e, t, r) {
        var n = r[0],
          a = t[0],
          i = t[1];
        return {
          type: "rule",
          shift: n && n.value,
          width: a.value,
          height: i.value
        }
      },
      htmlBuilder: function(e, t) {
        var r = n.a.makeSpan(["mord", "rule"], [], t),
          a = 0;
        e.value.shift && (a = Object(o.a)(e.value.shift, t));
        var i = Object(o.a)(e.value.width, t),
          s = Object(o.a)(e.value.height, t);
        return r.style.borderRightWidth = i + "em", r.style.borderTopWidth = s + "em", r.style.bottom = a + "em", r.width = i, r.height = s + a, r.depth = -a, r.maxFontSize = 1.125 * s * t.sizeMultiplier, r
      },
      mathmlBuilder: function(e, t) {
        return new i.a.MathNode("mrow")
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(19),
      s = r(6);
    Object(n.b)({
      type: "kern",
      names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
      props: {
        numArgs: 1,
        argTypes: ["size"],
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = "m" === e.funcName[1],
          n = "mu" === t[0].value.unit;
        if (r) {
          if (n || "undefined" != typeof console && console.warn("In LaTeX, " + e.funcName + " supports only mu units, not " + t[0].value.unit + " units"), "math" !== e.parser.mode) throw new s.a("Can't use function '" + e.funcName + "' in text mode")
        } else n && "undefined" != typeof console && console.warn("In LaTeX, " + e.funcName + " does not support mu units");
        return {
          type: "kern",
          dimension: t[0].value
        }
      },
      htmlBuilder: function(e, t) {
        return a.a.makeGlue(e.value.dimension, t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mspace"),
          n = Object(o.a)(e.value.dimension, t);
        return r.setAttribute("width", n + "em"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "phantom",
      names: ["\\phantom"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "phantom",
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.a(e.value.value, t.withPhantom(), !1);
        return new a.a.makeFragment(r)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.value, t);
        return new i.a.MathNode("mphantom", r)
      }
    }), Object(n.b)({
      type: "hphantom",
      names: ["\\hphantom"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "hphantom",
          value: Object(n.c)(r),
          body: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = a.a.makeSpan([], [o.b(e.value.body, t.withPhantom())]);
        if (r.height = 0, r.depth = 0, r.children)
          for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
        return r = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r
          }]
        }, t)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.value, t),
          n = new i.a.MathNode("mphantom", r);
        return n.setAttribute("height", "0px"), n
      }
    }), Object(n.b)({
      type: "vphantom",
      names: ["\\vphantom"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "vphantom",
          value: Object(n.c)(r),
          body: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = a.a.makeSpan(["inner"], [o.b(e.value.body, t.withPhantom())]),
          n = a.a.makeSpan(["fix"], []);
        return a.a.makeSpan(["mord", "rlap"], [r, n], t)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.value, t),
          n = new i.a.MathNode("mphantom", r);
        return n.setAttribute("width", "0px"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(9),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = [];
        if ("bmod" === e.value.modType ? t.style.isTight() ? r.push(a.a.makeSpan(["mspace", "thickspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "muspace"], [], t)) : t.style.size === o.a.DISPLAY.size ? r.push(a.a.makeSpan(["mspace", "quad"], [], t)) : "mod" === e.value.modType ? r.push(a.a.makeSpan(["mspace", "twelvemuspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "eightmuspace"], [], t)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(a.a.mathsym("(", e.mode)), "pod" !== e.value.modType) {
          var n = [a.a.mathsym("m", e.mode), a.a.mathsym("o", e.mode), a.a.mathsym("d", e.mode)];
          "bmod" === e.value.modType ? (r.push(a.a.makeSpan(["mbin"], n, t)), t.style.isTight() ? r.push(a.a.makeSpan(["mspace", "thickspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "muspace"], [], t))) : (Array.prototype.push.apply(r, n), r.push(a.a.makeSpan(["mspace", "sixmuspace"], [], t)))
        }
        return e.value.value && Array.prototype.push.apply(r, s.a(e.value.value, t, !1)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(a.a.mathsym(")", e.mode)), a.a.makeFragment(r)
      },
      c = function(e, t) {
        var r = [];
        if ("pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new i.a.MathNode("mo", [l.e("(", e.mode)])), "pod" !== e.value.modType && r.push(new i.a.MathNode("mo", [l.e("mod", e.mode)])), e.value.value) {
          var n = new i.a.MathNode("mspace");
          n.setAttribute("width", "0.333333em"), r.push(n), r = r.concat(l.a(e.value.value, t))
        }
        return "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new i.a.MathNode("mo", [l.e(")", e.mode)])), new i.a.MathNode("mo", r)
      };
    Object(n.b)({
      type: "mod",
      names: ["\\bmod"],
      props: {
        numArgs: 0
      },
      handler: function(e, t) {
        return {
          type: "mod",
          modType: "bmod",
          value: null
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "mod",
      names: ["\\pod", "\\pmod", "\\mod"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "mod",
          modType: e.funcName.substr(1),
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(12),
      o = r(1),
      s = r(5),
      l = r(9),
      u = r(4),
      c = r(2),
      h = function(e, t) {
        var r = void 0,
          n = void 0,
          o = !1;
        "supsub" === e.type && (r = e.value.sup, n = e.value.sub, e = e.value.base, o = !0);
        var c = t.style,
          h = !1;
        c.size === l.a.DISPLAY.size && e.value.symbol && !s.a.contains(["\\smallint"], e.value.body) && (h = !0);
        var p = void 0;
        if (e.value.symbol) {
          var m = h ? "Size2-Regular" : "Size1-Regular";
          p = a.a.makeSymbol(e.value.body, m, "math", t, ["mop", "op-symbol", h ? "large-op" : "small-op"])
        } else if (e.value.value) {
          var d = u.a(e.value.value, t, !0);
          1 === d.length && d[0] instanceof i.a.symbolNode ? (p = d[0]).classes[0] = "mop" : p = a.a.makeSpan(["mop"], d, t)
        } else {
          for (var f = [], v = 1; v < e.value.body.length; v++) f.push(a.a.mathsym(e.value.body[v], e.mode));
          p = a.a.makeSpan(["mop"], f, t)
        }
        var g = 0,
          y = 0;
        if (p instanceof i.a.symbolNode && (g = (p.height - p.depth) / 2 - t.fontMetrics().axisHeight, y = p.italic), o) {
          p = a.a.makeSpan([], [p]);
          var b = void 0,
            x = void 0;
          if (r) {
            var w = u.b(r, t.havingStyle(c.sup()), t);
            x = {
              elem: w,
              kern: Math.max(t.fontMetrics().bigOpSpacing1, t.fontMetrics().bigOpSpacing3 - w.depth)
            }
          }
          if (n) {
            var k = u.b(n, t.havingStyle(c.sub()), t);
            b = {
              elem: k,
              kern: Math.max(t.fontMetrics().bigOpSpacing2, t.fontMetrics().bigOpSpacing4 - k.height)
            }
          }
          var M = void 0;
          if (x && b) {
            var S = t.fontMetrics().bigOpSpacing5 + b.elem.height + b.elem.depth + b.kern + p.depth + g;
            M = a.a.makeVList({
              positionType: "bottom",
              positionData: S,
              children: [{
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: b.elem,
                marginLeft: -y + "em"
              }, {
                type: "kern",
                size: b.kern
              }, {
                type: "elem",
                elem: p
              }, {
                type: "kern",
                size: x.kern
              }, {
                type: "elem",
                elem: x.elem,
                marginLeft: y + "em"
              }, {
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }]
            }, t)
          } else if (b) {
            var z = p.height - g;
            M = a.a.makeVList({
              positionType: "top",
              positionData: z,
              children: [{
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: b.elem,
                marginLeft: -y + "em"
              }, {
                type: "kern",
                size: b.kern
              }, {
                type: "elem",
                elem: p
              }]
            }, t)
          } else {
            if (!x) return p;
            var O = p.depth + g;
            M = a.a.makeVList({
              positionType: "bottom",
              positionData: O,
              children: [{
                type: "elem",
                elem: p
              }, {
                type: "kern",
                size: x.kern
              }, {
                type: "elem",
                elem: x.elem,
                marginLeft: y + "em"
              }, {
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }]
            }, t)
          }
          return a.a.makeSpan(["mop", "op-limits"], [M], t)
        }
        return g && (p.style.position = "relative", p.style.top = g + "em"), p
      },
      p = function(e, t) {
        var r = void 0;
        if (e.value.symbol) r = new o.a.MathNode("mo", [c.e(e.value.body, e.mode)]);
        else {
          if (!e.value.value) {
            r = new o.a.MathNode("mi", [new o.a.TextNode(e.value.body.slice(1))]);
            var n = new o.a.MathNode("mo", [c.e("\u2061", "text")]);
            return new i.a.documentFragment([r, n])
          }
          r = new o.a.MathNode("mo", c.a(e.value.value, t))
        }
        return r
      },
      m = {
        "\u220f": "\\prod",
        "\u2210": "\\coprod",
        "\u2211": "\\sum",
        "\u22c0": "\\bigwedge",
        "\u22c1": "\\bigvee",
        "\u22c2": "\\bigcap",
        "\u22c3": "\\bigcap",
        "\u2a00": "\\bigodot",
        "\u2a01": "\\bigoplus",
        "\u2a02": "\\bigotimes",
        "\u2a04": "\\biguplus",
        "\u2a06": "\\bigsqcup"
      };
    Object(n.b)({
      type: "op",
      names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220f", "\u2210", "\u2211", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06"],
      props: {
        numArgs: 0
      },
      handler: function(e, t) {
        var r = e.funcName;
        return 1 === r.length && (r = m[r]), {
          type: "op",
          limits: !0,
          symbol: !0,
          body: r
        }
      },
      htmlBuilder: h,
      mathmlBuilder: p
    }), Object(n.b)({
      type: "op",
      names: ["\\mathop"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "op",
          limits: !1,
          symbol: !1,
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: h,
      mathmlBuilder: p
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(18),
      a = r.n(n),
      i = r(3),
      o = r(0),
      s = r(1),
      l = r(12),
      u = r(4),
      c = r(2);
    Object(i.b)({
      type: "operatorname",
      names: ["\\operatorname"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "operatorname",
          value: Object(i.c)(r)
        }
      },
      htmlBuilder: function(e, t) {
        var r = [];
        if (e.value.value.length > 0) {
          var n = "",
            i = "",
            s = !0,
            c = !1,
            h = void 0;
          try {
            for (var p, m = a()(e.value.value); !(s = (p = m.next()).done); s = !0) {
              var d = p.value; - 1 !== "*-/:".indexOf(d.value) && (d.type = "textord")
            }
          } catch (e) {
            c = !0, h = e
          } finally {
            try {
              !s && m.return && m.return()
            } finally {
              if (c) throw h
            }
          }
          var f = u.a(e.value.value, t.withFontFamily("mathrm"), !0),
            v = !0,
            g = !1,
            y = void 0;
          try {
            for (var b, x = a()(f); !(v = (b = x.next()).done); v = !0) {
              var w = b.value;
              w instanceof l.a.symbolNode ? (n = (n = (n = w.value).replace(/\u2212/, "-")).replace(/\u2217/, "*"), i = /[\u0391-\u03D7]/.test(n) ? "math" : "text", r.push(o.a.mathsym(n, i))) : r.push(w)
            }
          } catch (e) {
            g = !0, y = e
          } finally {
            try {
              !v && x.return && x.return()
            } finally {
              if (g) throw y
            }
          }
        }
        return o.a.makeSpan(["mop"], r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = [];
        if (e.value.value.length > 0) {
          var n = c.a(e.value.value, t.withFontFamily("mathrm")).map(function(e) {
            return e.toText()
          }).join("");
          n = (n = n.replace(/\u2212/g, "-")).replace(/\u2217/g, "*"), r = [new s.a.TextNode(n)]
        }
        var a = new s.a.MathNode("mi", r);
        a.setAttribute("mathvariant", "normal");
        var i = new s.a.MathNode("mo", [c.e("\u2061", "text")]);
        return new l.a.documentFragment([a, i])
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(44),
      o = r(1),
      s = r(9),
      l = r(4),
      u = r(2);
    Object(n.b)({
      type: "genfrac",
      names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"],
      props: {
        numArgs: 2,
        greediness: 2
      },
      handler: function(e, t) {
        var r = t[0],
          n = t[1],
          a = void 0,
          i = null,
          o = null,
          s = "auto";
        switch (e.funcName) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            a = !0;
            break;
          case "\\\\atopfrac":
            a = !1;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            a = !1, i = "(", o = ")";
            break;
          default:
            throw new Error("Unrecognized genfrac command")
        }
        switch (e.funcName) {
          case "\\dfrac":
          case "\\dbinom":
            s = "display";
            break;
          case "\\tfrac":
          case "\\tbinom":
            s = "text"
        }
        return {
          type: "genfrac",
          numer: r,
          denom: n,
          hasBarLine: a,
          leftDelim: i,
          rightDelim: o,
          size: s
        }
      },
      htmlBuilder: function(e, t) {
        var r = t.style;
        "display" === e.value.size ? r = s.a.DISPLAY : "text" === e.value.size && (r = s.a.TEXT);
        var n = r.fracNum(),
          o = r.fracDen(),
          u = void 0;
        u = t.havingStyle(n);
        var c = l.b(e.value.numer, u, t);
        u = t.havingStyle(o);
        var h = l.b(e.value.denom, u, t),
          p = void 0,
          m = void 0,
          d = void 0;
        e.value.hasBarLine ? (m = (p = a.a.makeLineSpan("frac-line", t)).height, d = p.height) : (p = null, m = 0, d = t.fontMetrics().defaultRuleThickness);
        var f = void 0,
          v = void 0,
          g = void 0;
        r.size === s.a.DISPLAY.size ? (f = t.fontMetrics().num1, v = m > 0 ? 3 * d : 7 * d, g = t.fontMetrics().denom1) : (m > 0 ? (f = t.fontMetrics().num2, v = d) : (f = t.fontMetrics().num3, v = 3 * d), g = t.fontMetrics().denom2);
        var y = void 0;
        if (p) {
          var b = t.fontMetrics().axisHeight;
          f - c.depth - (b + .5 * m) < v && (f += v - (f - c.depth - (b + .5 * m))), b - .5 * m - (h.height - g) < v && (g += v - (b - .5 * m - (h.height - g)));
          var x = -(b - .5 * m);
          y = a.a.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: h,
              shift: g
            }, {
              type: "elem",
              elem: p,
              shift: x + 2 * m
            }, {
              type: "elem",
              elem: c,
              shift: -f
            }]
          }, t)
        } else {
          var w = f - c.depth - (h.height - g);
          w < v && (f += .5 * (v - w), g += .5 * (v - w)), y = a.a.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: h,
              shift: g
            }, {
              type: "elem",
              elem: c,
              shift: -f
            }]
          }, t)
        }
        u = t.havingStyle(r), y.height *= u.sizeMultiplier / t.sizeMultiplier, y.depth *= u.sizeMultiplier / t.sizeMultiplier;
        var k = void 0;
        k = r.size === s.a.DISPLAY.size ? t.fontMetrics().delim1 : t.fontMetrics().delim2;
        var M = void 0,
          S = void 0;
        return M = null == e.value.leftDelim ? l.e(t, ["mopen"]) : i.a.customSizedDelim(e.value.leftDelim, k, !0, t.havingStyle(r), e.mode, ["mopen"]), S = null == e.value.rightDelim ? l.e(t, ["mclose"]) : i.a.customSizedDelim(e.value.rightDelim, k, !0, t.havingStyle(r), e.mode, ["mclose"]), a.a.makeSpan(["mord"].concat(u.sizingClasses(t)), [M, a.a.makeSpan(["mfrac"], [y]), S], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new o.a.MathNode("mfrac", [u.b(e.value.numer, t), u.b(e.value.denom, t)]);
        if (e.value.hasBarLine || r.setAttribute("linethickness", "0px"), null != e.value.leftDelim || null != e.value.rightDelim) {
          var n = [];
          if (null != e.value.leftDelim) {
            var a = new o.a.MathNode("mo", [new o.a.TextNode(e.value.leftDelim)]);
            a.setAttribute("fence", "true"), n.push(a)
          }
          if (n.push(r), null != e.value.rightDelim) {
            var i = new o.a.MathNode("mo", [new o.a.TextNode(e.value.rightDelim)]);
            i.setAttribute("fence", "true"), n.push(i)
          }
          return new o.a.MathNode("mrow", n)
        }
        return r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "lap",
      names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
      props: {
        numArgs: 1,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "lap",
          alignment: e.funcName.slice(5),
          body: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = void 0;
        "clap" === e.value.alignment ? (r = a.a.makeSpan([], [o.b(e.value.body, t)]), r = a.a.makeSpan(["inner"], [r], t)) : r = a.a.makeSpan(["inner"], [o.b(e.value.body, t)]);
        var n = a.a.makeSpan(["fix"], []);
        return a.a.makeSpan(["mord", e.value.alignment], [r, n], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mpadded", [s.b(e.value.body, t)]);
        if ("rlap" !== e.value.alignment) {
          var n = "llap" === e.value.alignment ? "-1" : "-0.5";
          r.setAttribute("lspace", n + "width")
        }
        return r.setAttribute("width", "0px"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "smash",
      names: ["\\smash"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: !0
      },
      handler: function(e, t, r) {
        var n = !1,
          a = !1,
          i = r[0];
        if (i)
          for (var o = "", s = 0; s < i.value.length; ++s)
            if ("t" === (o = i.value[s].value)) n = !0;
            else {
              if ("b" !== o) {
                n = !1, a = !1;
                break
              }
              a = !0
            }
        else n = !0, a = !0;
        return {
          type: "smash",
          body: t[0],
          smashHeight: n,
          smashDepth: a
        }
      },
      htmlBuilder: function(e, t) {
        var r = a.a.makeSpan(["mord"], [o.b(e.value.body, t)]);
        if (!e.value.smashHeight && !e.value.smashDepth) return r;
        if (e.value.smashHeight && (r.height = 0, r.children))
          for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
        if (e.value.smashDepth && (r.depth = 0, r.children))
          for (var i = 0; i < r.children.length; i++) r.children[i].depth = 0;
        return a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r
          }]
        }, t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mpadded", [s.b(e.value.body, t)]);
        return e.value.smashHeight && r.setAttribute("height", "0px"), e.value.smashDepth && r.setAttribute("depth", "0px"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(0),
      a = r(3),
      i = r(44),
      o = r(1),
      s = r(6),
      l = r(5),
      u = r(4),
      c = r(2),
      h = {
        "\\bigl": {
          mclass: "mopen",
          size: 1
        },
        "\\Bigl": {
          mclass: "mopen",
          size: 2
        },
        "\\biggl": {
          mclass: "mopen",
          size: 3
        },
        "\\Biggl": {
          mclass: "mopen",
          size: 4
        },
        "\\bigr": {
          mclass: "mclose",
          size: 1
        },
        "\\Bigr": {
          mclass: "mclose",
          size: 2
        },
        "\\biggr": {
          mclass: "mclose",
          size: 3
        },
        "\\Biggr": {
          mclass: "mclose",
          size: 4
        },
        "\\bigm": {
          mclass: "mrel",
          size: 1
        },
        "\\Bigm": {
          mclass: "mrel",
          size: 2
        },
        "\\biggm": {
          mclass: "mrel",
          size: 3
        },
        "\\Biggm": {
          mclass: "mrel",
          size: 4
        },
        "\\big": {
          mclass: "mord",
          size: 1
        },
        "\\Big": {
          mclass: "mord",
          size: 2
        },
        "\\bigg": {
          mclass: "mord",
          size: 3
        },
        "\\Bigg": {
          mclass: "mord",
          size: 4
        }
      },
      p = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

    function m(e, t) {
      if (l.a.contains(p, e.value)) return e;
      throw new s.a("Invalid delimiter: '" + e.value + "' after '" + t.funcName + "'", e)
    }
    Object(a.b)({
      type: "delimsizing",
      names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = m(t[0], e);
        return {
          type: "delimsizing",
          size: h[e.funcName].size,
          mclass: h[e.funcName].mclass,
          value: r.value
        }
      },
      htmlBuilder: function(e, t) {
        var r = e.value.value;
        return "." === r ? n.a.makeSpan([e.value.mclass]) : i.a.sizedDelim(r, e.value.size, t, e.mode, [e.value.mclass])
      },
      mathmlBuilder: function(e) {
        var t = [];
        "." !== e.value.value && t.push(c.e(e.value.value, e.mode));
        var r = new o.a.MathNode("mo", t);
        return "mopen" === e.value.mclass || "mclose" === e.value.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r
      }
    }), Object(a.b)({
      type: "leftright",
      names: ["\\left", "\\right"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = m(t[0], e);
        if ("\\left" === e.funcName) {
          var n = e.parser;
          ++n.leftrightDepth;
          var a = n.parseExpression(!1);
          --n.leftrightDepth, n.expect("\\right", !1);
          var i = n.parseFunction();
          if (!i) throw new s.a("failed to parse function after \\right");
          return {
            type: "leftright",
            body: a,
            left: r.value,
            right: i.value.value
          }
        }
        return {
          type: "leftright",
          value: r.value
        }
      },
      htmlBuilder: function(e, t) {
        for (var r = u.a(e.value.body, t, !0, [null, "mclose"]), a = 0, o = 0, s = !1, l = 0; l < r.length; l++) r[l].isMiddle ? s = !0 : (a = Math.max(r[l].height, a), o = Math.max(r[l].depth, o));
        a *= t.sizeMultiplier, o *= t.sizeMultiplier;
        var c = void 0;
        if (c = "." === e.value.left ? u.e(t, ["mopen"]) : i.a.leftRightDelim(e.value.left, a, o, t, e.mode, ["mopen"]), r.unshift(c), s)
          for (var h = 1; h < r.length; h++) {
            var p = r[h];
            p.isMiddle && (r[h] = i.a.leftRightDelim(p.isMiddle.value, a, o, p.isMiddle.options, e.mode, []))
          }
        var m = void 0;
        return m = "." === e.value.right ? u.e(t, ["mclose"]) : i.a.leftRightDelim(e.value.right, a, o, t, e.mode, ["mclose"]), r.push(m), n.a.makeSpan(["minner"], r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = c.a(e.value.body, t);
        if ("." !== e.value.left) {
          var n = new o.a.MathNode("mo", [c.e(e.value.left, e.mode)]);
          n.setAttribute("fence", "true"), r.unshift(n)
        }
        if ("." !== e.value.right) {
          var a = new o.a.MathNode("mo", [c.e(e.value.right, e.mode)]);
          a.setAttribute("fence", "true"), r.push(a)
        }
        return new o.a.MathNode("mrow", r)
      }
    }), Object(a.b)({
      type: "middle",
      names: ["\\middle"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = m(t[0], e);
        if (!e.parser.leftrightDepth) throw new s.a("\\middle without preceding \\left", r);
        return {
          type: "middle",
          value: r.value
        }
      },
      htmlBuilder: function(e, t) {
        var r = void 0;
        return "." === e.value.value ? r = u.e(t, []) : (r = i.a.sizedDelim(e.value.value, 1, t, e.mode, [])).isMiddle = {
          value: e.value.value,
          options: t
        }, r
      },
      mathmlBuilder: function(e, t) {
        var r = new o.a.MathNode("mo", [c.e(e.value.middle, e.mode)]);
        return r.setAttribute("fence", "true"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(1),
      i = r(9),
      o = r(60),
      s = r(2),
      l = {
        display: i.a.DISPLAY,
        text: i.a.TEXT,
        script: i.a.SCRIPT,
        scriptscript: i.a.SCRIPTSCRIPT
      };
    Object(n.b)({
      type: "styling",
      names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = e.breakOnTokenText,
          n = e.funcName,
          a = e.parser;
        a.consumeSpaces();
        var i = a.parseExpression(!0, r);
        return {
          type: "styling",
          style: n.slice(1, n.length - 5),
          value: i
        }
      },
      htmlBuilder: function(e, t) {
        var r = l[e.value.style],
          n = t.havingStyle(r);
        return Object(o.a)(e.value.value, n, t)
      },
      mathmlBuilder: function(e, t) {
        var r = {
            display: i.a.DISPLAY,
            text: i.a.TEXT,
            script: i.a.SCRIPT,
            scriptscript: i.a.SCRIPTSCRIPT
          }[e.value.style],
          n = t.havingStyle(r),
          o = s.a(e.value.value, n),
          l = new a.a.MathNode("mstyle", o),
          u = {
            display: ["0", "true"],
            text: ["0", "false"],
            script: ["1", "false"],
            scriptscript: ["2", "false"]
          }[e.value.style];
        return l.setAttribute("scriptlevel", u[0]), l.setAttribute("displaystyle", u[1]), l
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(134),
      a = r.n(n),
      i = r(3),
      o = r(14),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = e.value.font;
        return s.b(e.value.body, t.withFontFamily(r))
      },
      c = function(e, t) {
        var r = e.value.font;
        return l.b(e.value.body, t.withFontFamily(r))
      },
      h = {
        "\\Bbb": "\\mathbb",
        "\\bold": "\\mathbf",
        "\\frak": "\\mathfrak",
        "\\bm": "\\boldsymbol"
      };
    Object(i.b)({
      type: "font",
      names: ["\\mathrm", "\\mathit", "\\mathbf", "\\boldsymbol", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak", "\\bm"],
      props: {
        numArgs: 1,
        greediness: 2
      },
      handler: function(e, t) {
        var r = t[0],
          n = e.funcName;
        return n in h && (n = h[n]), {
          type: "font",
          font: n.slice(1),
          body: r
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    });
    var p = {
      "\\rm": "mathrm",
      "\\sf": "mathsf",
      "\\tt": "mathtt",
      "\\bf": "mathbf",
      "\\it": "mathit"
    };
    Object(i.b)({
      type: "font",
      names: a()(p),
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = e.parser,
          n = e.funcName,
          a = e.breakOnTokenText;
        r.consumeSpaces();
        var i = r.parseExpression(!0, a);
        return {
          type: "font",
          font: p[n],
          body: new o.a("ordgroup", i, r.mode)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    })
  }, function(e, t, r) {
    e.exports = {
      default: r(135),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(136), e.exports = r(8).Object.keys
  }, function(e, t, r) {
    var n = r(29),
      a = r(39);
    r(46)("keys", function() {
      return function(e) {
        return a(n(e))
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(5),
      s = r(13),
      l = r(4),
      u = r(2),
      c = function(e, t) {
        var r = e.value.base,
          n = void 0;
        if ("supsub" === e.type) {
          var i = e;
          r = (e = i.value.base).value.base, i.value.base = r, n = l.b(i, t)
        }
        var u = l.b(r, t.havingCrampedStyle()),
          c = 0;
        if (e.value.isShifty && o.a.isCharacterBox(r)) {
          var h = o.a.getBaseElem(r);
          c = l.b(h, t.havingCrampedStyle()).skew
        }
        var p = Math.min(u.height, t.fontMetrics().xHeight),
          m = void 0;
        if (e.value.isStretchy) m = s.a.svgSpan(e, t), m = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: u
          }, {
            type: "elem",
            elem: m,
            wrapperClasses: ["svg-align"],
            wrapperStyle: c > 0 ? {
              width: "calc(100% - " + 2 * c + "em)",
              marginLeft: 2 * c + "em"
            } : void 0
          }]
        }, t);
        else {
          var d = void 0,
            f = void 0;
          "\\vec" === e.value.label ? (d = a.a.staticSvg("vec", t), f = a.a.svgData.vec[1]) : ((d = a.a.makeSymbol(e.value.label, "Main-Regular", e.mode, t)).italic = 0, f = d.width);
          var v = -f / 2;
          v += c, (m = a.a.makeSpan(["accent-body"], [d])).style.left = v + "em", m = a.a.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: u
            }, {
              type: "kern",
              size: -p
            }, {
              type: "elem",
              elem: m
            }]
          }, t)
        }
        var g = a.a.makeSpan(["mord", "accent"], [m], t);
        return n ? (n.children[0] = g, n.height = Math.max(g.height, n.height), n.classes[0] = "mord", n) : g
      },
      h = function(e, t) {
        var r = void 0;
        r = e.value.isStretchy ? s.a.mathMLnode(e.value.label) : new i.a.MathNode("mo", [u.e(e.value.label, e.mode)]);
        var n = new i.a.MathNode("mover", [u.b(e.value.base, t), r]);
        return n.setAttribute("accent", "true"), n
      },
      p = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(e) {
        return "\\" + e
      }).join("|"));
    Object(n.b)({
      type: "accent",
      names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0],
          n = !p.test(e.funcName),
          a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName;
        return {
          type: "accent",
          label: e.funcName,
          isStretchy: n,
          isShifty: a,
          base: r
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "accent",
      names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        allowedInMath: !1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "accent",
          label: e.funcName,
          isStretchy: !1,
          isShifty: !0,
          base: r
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(13),
      s = r(4),
      l = r(2);
    Object(n.b)({
      type: "accentUnder",
      names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "accentUnder",
          label: e.funcName,
          base: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = s.b(e.value.base, t),
          n = o.a.svgSpan(e, t),
          i = "\\utilde" === e.value.label ? .12 : 0,
          l = a.a.makeVList({
            positionType: "bottom",
            positionData: n.height + i,
            children: [{
              type: "elem",
              elem: n,
              wrapperClasses: ["svg-align"]
            }, {
              type: "kern",
              size: i
            }, {
              type: "elem",
              elem: r
            }]
          }, t);
        return a.a.makeSpan(["mord", "accentunder"], [l], t)
      },
      mathmlBuilder: function(e, t) {
        var r = o.a.mathMLnode(e.value.label),
          n = new i.a.MathNode("munder", [l.b(e.value.body, t), r]);
        return n.setAttribute("accentunder", "true"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(6);
    Object(n.b)({
      type: "verb",
      names: ["\\verb"],
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t, r) {
        throw new o.a("\\verb ended by end of line instead of matching delimiter")
      },
      htmlBuilder: function(e, t) {
        for (var r = a.a.makeVerb(e, t), n = [], i = t.havingStyle(t.style.text()), o = 0; o < r.length; o++)
          if ("\xa0" === r[o]) {
            var s = a.a.makeSpan(["mord", "rule"], [], i);
            s.style.marginLeft = "0.525em", n.push(s)
          } else n.push(a.a.makeSymbol(r[o], "Typewriter-Regular", e.mode, i, ["mathtt"]));
        return a.a.tryCombineChars(n), a.a.makeSpan(["mord", "text"].concat(i.sizingClasses(t)), n, i)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.TextNode(a.a.makeVerb(e, t)),
          n = new i.a.MathNode("mtext", [r]);
        return n.setAttribute("mathvariant", a.a.fontMap.mathtt.variant), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "href",
      names: ["\\href"],
      props: {
        numArgs: 2,
        argTypes: ["url", "original"]
      },
      handler: function(e, t) {
        var r = t[1];
        return {
          type: "href",
          href: t[0].value,
          body: Object(n.c)(r)
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.a(e.value.body, t, !1),
          n = e.value.href;
        return new a.a.makeAnchor(n, [], r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.body, t),
          n = new i.a.MathNode("mrow", r);
        return n.setAttribute("href", e.value.href), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(9),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = t.style;
        return r.size === o.a.DISPLAY.size ? e.value.display : r.size === o.a.TEXT.size ? e.value.text : r.size === o.a.SCRIPT.size ? e.value.script : r.size === o.a.SCRIPTSCRIPT.size ? e.value.scriptscript : e.value.text
      };
    Object(n.b)({
      type: "mathchoice",
      names: ["\\mathchoice"],
      props: {
        numArgs: 4
      },
      handler: function(e, t) {
        return {
          type: "mathchoice",
          display: Object(n.c)(t[0]),
          text: Object(n.c)(t[1]),
          script: Object(n.c)(t[2]),
          scriptscript: Object(n.c)(t[3])
        }
      },
      htmlBuilder: function(e, t) {
        var r = u(e, t),
          n = s.a(r, t, !1);
        return new a.a.makeFragment(n)
      },
      mathmlBuilder: function(e, t) {
        var r = u(e, t),
          n = l.a(r, t, !1);
        return new i.a.MathNode("mrow", n)
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(61),
      a = (r(143), n.a);
    t.a = a
  }, function(e, t, r) {
    "use strict";
    var n = r(0),
      a = r(61),
      i = r(1),
      o = r(6),
      s = r(14),
      l = r(19),
      u = r(5),
      c = r(13),
      h = r(4),
      p = r(2);

    function m(e, t, r) {
      for (var n = [], a = [n], i = [];;) {
        var l = e.parseExpression(!1, void 0);
        l = new s.a("ordgroup", l, e.mode), r && (l = new s.a("styling", {
          style: r,
          value: [l]
        }, e.mode)), n.push(l);
        var u = e.nextToken.text;
        if ("&" === u) e.consume();
        else {
          if ("\\end" === u) {
            var c = a[a.length - 1];
            a.length > 1 && 1 === c.length && 0 === c[0].value.value[0].value.length && a.pop();
            break
          }
          if ("\\\\" !== u && "\\cr" !== u) throw new o.a("Expected & or \\\\ or \\end", e.nextToken);
          var h = e.parseFunction();
          if (!h) throw new o.a("Failed to parse function after " + u);
          i.push(h.value.size), n = [], a.push(n)
        }
      }
      return t.body = a, t.rowGaps = i, new s.a(t.type, t, e.mode)
    }

    function d(e) {
      return "d" === e.substr(0, 1) ? "display" : "text"
    }
    var f = function(e, t) {
        var r = void 0,
          a = void 0,
          i = e.value.body.length,
          s = 0,
          p = new Array(i),
          m = 1 / t.fontMetrics().ptPerEm,
          d = 5 * m,
          f = 12 * m,
          v = 3 * m,
          g = u.a.deflt(e.value.arraystretch, 1) * f,
          y = .7 * g,
          b = .3 * g,
          x = 0;
        for (r = 0; r < e.value.body.length; ++r) {
          var w = e.value.body[r],
            k = y,
            M = b;
          s < w.length && (s = w.length);
          var S = new Array(w.length);
          for (a = 0; a < w.length; ++a) {
            var z = h.b(w[a], t);
            M < z.depth && (M = z.depth), k < z.height && (k = z.height), S[a] = z
          }
          var O = 0;
          e.value.rowGaps[r] && (O = Object(l.a)(e.value.rowGaps[r].value, t)) > 0 && (M < (O += b) && (M = O), O = 0), e.value.addJot && (M += v), S.height = k, S.depth = M, x += k, S.pos = x, x += M + O, p[r] = S
        }
        var T = x / 2 + t.fontMetrics().axisHeight,
          A = e.value.cols || [],
          N = [],
          B = void 0,
          q = void 0;
        for (a = 0, q = 0; a < s || q < A.length; ++a, ++q) {
          for (var C = A[q] || {}, E = !0;
            "separator" === C.type;) {
            if (E || ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = t.fontMetrics().doubleRuleSep + "em", N.push(B)), "|" !== C.separator) throw new o.a("Invalid separator type: " + C.separator);
            var j = c.a.ruleSpan("vertical-separator", .05, t);
            j.style.height = x + "em", j.style.verticalAlign = -(x - T) + "em", N.push(j), C = A[++q] || {}, E = !1
          }
          if (!(a >= s)) {
            var R = void 0;
            (a > 0 || e.value.hskipBeforeAndAfter) && 0 !== (R = u.a.deflt(C.pregap, d)) && ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = R + "em", N.push(B));
            var H = [];
            for (r = 0; r < i; ++r) {
              var I = p[r],
                D = I[a];
              if (D) {
                var L = I.pos - T;
                D.depth = I.depth, D.height = I.height, H.push({
                  type: "elem",
                  elem: D,
                  shift: L
                })
              }
            }
            H = n.a.makeVList({
              positionType: "individualShift",
              children: H
            }, t), H = n.a.makeSpan(["col-align-" + (C.align || "c")], [H]), N.push(H), (a < s - 1 || e.value.hskipBeforeAndAfter) && 0 !== (R = u.a.deflt(C.postgap, d)) && ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = R + "em", N.push(B))
          }
        }
        return p = n.a.makeSpan(["mtable"], N), n.a.makeSpan(["mord"], [p], t)
      },
      v = function(e, t) {
        return new i.a.MathNode("mtable", e.value.body.map(function(e) {
          return new i.a.MathNode("mtr", e.map(function(e) {
            return new i.a.MathNode("mtd", [p.b(e, t)])
          }))
        }))
      },
      g = function(e, t) {
        var r = {
          type: "array",
          cols: [],
          addJot: !0
        };
        r = m(e.parser, r, "display");
        var n = void 0,
          a = 0,
          i = new s.a("ordgroup", [], e.mode);
        if (t[0] && t[0].value) {
          for (var l = "", u = 0; u < t[0].value.length; u++) l += t[0].value[u].value;
          n = Number(l), a = 2 * n
        }
        var c = !a;
        r.value.body.forEach(function(e) {
          for (var t = 1; t < e.length; t += 2) {
            e[t].value.value[0].value.unshift(i)
          }
          if (c) a < e.length && (a = e.length);
          else {
            var r = e.length / 2;
            if (n < r) throw new o.a("Too many math in a row: expected " + n + ", but got " + r, e)
          }
        });
        for (var h = 0; h < a; ++h) {
          var p = "r",
            d = 0;
          h % 2 == 1 ? p = "l" : h > 0 && c && (d = 1), r.value.cols[h] = {
            type: "align",
            align: p,
            pregap: d,
            postgap: 0
          }
        }
        return r
      };
    Object(a.b)({
      type: "array",
      names: ["array", "darray"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0],
          n = {
            type: "array",
            cols: (r = r.value.map ? r.value : [r]).map(function(e) {
              var t = e.value;
              if (-1 !== "lcr".indexOf(t)) return {
                type: "align",
                align: t
              };
              if ("|" === t) return {
                type: "separator",
                separator: "|"
              };
              throw new o.a("Unknown column alignment: " + e.value, e)
            }),
            hskipBeforeAndAfter: !0
          };
        return n = m(e.parser, n, d(e.envName))
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
      props: {
        numArgs: 0
      },
      handler: function(e) {
        var t = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"]
          }[e.envName],
          r = {
            type: "array",
            hskipBeforeAndAfter: !1
          };
        return r = m(e.parser, r, d(e.envName)), t && (r = new s.a("leftright", {
          body: [r],
          left: t[0],
          right: t[1]
        }, e.mode)), r
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["cases", "dcases"],
      props: {
        numArgs: 0
      },
      handler: function(e) {
        var t = {
          type: "array",
          arraystretch: 1.2,
          cols: [{
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 1
          }, {
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 0
          }]
        };
        return t = m(e.parser, t, d(e.envName)), t = new s.a("leftright", {
          body: [t],
          left: "\\{",
          right: "."
        }, e.mode)
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["aligned"],
      props: {
        numArgs: 0
      },
      handler: g,
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["gathered"],
      props: {
        numArgs: 0
      },
      handler: function(e) {
        var t = {
          type: "array",
          cols: [{
            type: "align",
            align: "c"
          }],
          addJot: !0
        };
        return t = m(e.parser, t, "display")
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["alignedat"],
      props: {
        numArgs: 1
      },
      handler: g,
      htmlBuilder: f,
      mathmlBuilder: v
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(35),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = r(62),
      c = r(27),
      h = r(146),
      p = r(6),
      m = r(147),
      d = r.n(m),
      f = function() {
        function e(t, r, n) {
          o()(this, e), this.lexer = new u.c(t), this.macros = d()({}, h.a, r), this.mode = n, this.stack = []
        }
        return l()(e, [{
          key: "switchMode",
          value: function(e) {
            this.mode = e
          }
        }, {
          key: "future",
          value: function() {
            return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
          }
        }, {
          key: "popToken",
          value: function() {
            return this.future(), this.stack.pop()
          }
        }, {
          key: "pushToken",
          value: function(e) {
            this.stack.push(e)
          }
        }, {
          key: "pushTokens",
          value: function(e) {
            var t;
            (t = this.stack).push.apply(t, a()(e))
          }
        }, {
          key: "consumeSpaces",
          value: function() {
            for (;;) {
              if (" " !== this.future().text) break;
              this.stack.pop()
            }
          }
        }, {
          key: "consumeArgs",
          value: function(e) {
            for (var t = [], r = 0; r < e; ++r) {
              this.consumeSpaces();
              var n = this.popToken();
              if ("{" === n.text) {
                for (var a = [], i = 1; 0 !== i;) {
                  var o = this.popToken();
                  if (a.push(o), "{" === o.text) ++i;
                  else if ("}" === o.text) --i;
                  else if ("EOF" === o.text) throw new p.a("End of input in macro argument", n)
                }
                a.pop(), a.reverse(), t[r] = a
              } else {
                if ("EOF" === n.text) throw new p.a("End of input expecting macro argument");
                t[r] = [n]
              }
            }
            return t
          }
        }, {
          key: "expandOnce",
          value: function() {
            var e = this.popToken(),
              t = e.text;
            if ("\\" === t.charAt(0) && u.b.test(t) && this.consumeSpaces(), !this.macros.hasOwnProperty(t)) return this.pushToken(e), e;
            var r = this._getExpansion(t),
              n = r.tokens,
              i = r.numArgs,
              o = n;
            if (i)
              for (var s = this.consumeArgs(i), l = (o = o.slice()).length - 1; l >= 0; --l) {
                var c = o[l];
                if ("#" === c.text) {
                  if (0 === l) throw new p.a("Incomplete placeholder at end of macro body", c);
                  if ("#" === (c = o[--l]).text) o.splice(l + 1, 1);
                  else {
                    if (!/^[1-9]$/.test(c.text)) throw new p.a("Not a valid argument number", c);
                    var h;
                    (h = o).splice.apply(h, [l, 2].concat(a()(s[+c.text - 1])))
                  }
                }
              }
            return this.pushTokens(o), o
          }
        }, {
          key: "expandAfterFuture",
          value: function() {
            return this.expandOnce(), this.future()
          }
        }, {
          key: "expandNextToken",
          value: function() {
            for (;;) {
              var e = this.expandOnce();
              if (e instanceof c.a) {
                if ("\\relax" !== e.text) return this.stack.pop();
                this.stack.pop()
              }
            }
            throw new Error
          }
        }, {
          key: "_getExpansion",
          value: function(e) {
            var t = this.macros[e],
              r = "function" == typeof t ? t(this) : t;
            if ("string" == typeof r) {
              var n = 0;
              if (-1 !== r.indexOf("#"))
                for (var a = r.replace(/##/g, ""); - 1 !== a.indexOf("#" + (n + 1));) ++n;
              for (var i = new u.c(r), o = [], s = i.lex();
                "EOF" !== s.text;) o.push(s), s = i.lex();
              o.reverse();
              var l = {
                tokens: o,
                numArgs: n
              };
              return "function" != typeof t && (this.macros[e] = l), l
            }
            return r
          }
        }]), e
      }();
    t.a = f
  }, function(e, t) {
    e.exports = function(e, t, r) {
      if (e.global || e.sticky) throw new Error("matchAt(...): Only non-global regexes are supported");
      var n = function(e) {
        if (!e.__matchAtRelocatable) {
          var t = e.source + "|()",
            r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
          e.__matchAtRelocatable = new RegExp(t, r)
        }
        return e.__matchAtRelocatable
      }(e);
      n.lastIndex = r;
      var a = n.exec(t);
      return null == a[a.length - 1] ? (a.length = a.length - 1, a) : null
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(59),
      a = r(28),
      i = r(5),
      o = (r(27), {});

    function s(e, t) {
      o[e] = t
    }
    t.a = o, s("\\@firstoftwo", function(e) {
      return {
        tokens: e.consumeArgs(2)[0],
        numArgs: 0
      }
    }), s("\\@secondoftwo", function(e) {
      return {
        tokens: e.consumeArgs(2)[1],
        numArgs: 0
      }
    }), s("\\@ifnextchar", function(e) {
      var t = e.consumeArgs(3),
        r = e.future();
      return 1 === t[0].length && t[0][0].text === r.text ? {
        tokens: t[1],
        numArgs: 0
      } : {
        tokens: t[2],
        numArgs: 0
      }
    }), s("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), s("\\TextOrMath", function(e) {
      var t = e.consumeArgs(2);
      return "text" === e.mode ? {
        tokens: t[0],
        numArgs: 0
      } : {
        tokens: t[1],
        numArgs: 0
      }
    }), s("\\bgroup", "{"), s("\\egroup", "}"), s("\\begingroup", "{"), s("\\endgroup", "}"), s("\\lq", "`"), s("\\rq", "'"), s("\\lbrack", "["), s("\\rbrack", "]"), s("\\aa", "\\r a"), s("\\AA", "\\r A"), s("\u2102", "\\mathbb{C}"), s("\u210d", "\\mathbb{H}"), s("\u2115", "\\mathbb{N}"), s("\u2119", "\\mathbb{P}"), s("\u211a", "\\mathbb{Q}"), s("\u211d", "\\mathbb{R}"), s("\u2124", "\\mathbb{Z}"), s("\xb7", "\\cdotp"), s("\\llap", "\\mathllap{\\textrm{#1}}"), s("\\rlap", "\\mathrlap{\\textrm{#1}}"), s("\\clap", "\\mathclap{\\textrm{#1}}"), s("\\varGamma", "\\mathit{\\Gamma}"), s("\\varDelta", "\\mathit{\\Delta}"), s("\\varTheta", "\\mathit{\\Theta}"), s("\\varLambda", "\\mathit{\\Lambda}"), s("\\varXi", "\\mathit{\\Xi}"), s("\\varPi", "\\mathit{\\Pi}"), s("\\varSigma", "\\mathit{\\Sigma}"), s("\\varUpsilon", "\\mathit{\\Upsilon}"), s("\\varPhi", "\\mathit{\\Phi}"), s("\\varPsi", "\\mathit{\\Psi}"), s("\\varOmega", "\\mathit{\\Omega}"), s("\\overset", "\\mathop{#2}\\limits^{#1}"), s("\\underset", "\\mathop{#2}\\limits_{#1}"), s("\\boxed", "\\fbox{\\displaystyle{#1}}"), s("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), s("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), s("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
    var l = {
      ",": "\\dotsc",
      "\\not": "\\dotsb",
      "+": "\\dotsb",
      "=": "\\dotsb",
      "<": "\\dotsb",
      ">": "\\dotsb",
      "-": "\\dotsb",
      "*": "\\dotsb",
      ":": "\\dotsb",
      "\\DOTSB": "\\dotsb",
      "\\coprod": "\\dotsb",
      "\\bigvee": "\\dotsb",
      "\\bigwedge": "\\dotsb",
      "\\biguplus": "\\dotsb",
      "\\bigcap": "\\dotsb",
      "\\bigcup": "\\dotsb",
      "\\prod": "\\dotsb",
      "\\sum": "\\dotsb",
      "\\bigotimes": "\\dotsb",
      "\\bigoplus": "\\dotsb",
      "\\bigodot": "\\dotsb",
      "\\bigsqcup": "\\dotsb",
      "\\implies": "\\dotsb",
      "\\impliedby": "\\dotsb",
      "\\And": "\\dotsb",
      "\\longrightarrow": "\\dotsb",
      "\\Longrightarrow": "\\dotsb",
      "\\longleftarrow": "\\dotsb",
      "\\Longleftarrow": "\\dotsb",
      "\\longleftrightarrow": "\\dotsb",
      "\\Longleftrightarrow": "\\dotsb",
      "\\mapsto": "\\dotsb",
      "\\longmapsto": "\\dotsb",
      "\\hookrightarrow": "\\dotsb",
      "\\iff": "\\dotsb",
      "\\doteq": "\\dotsb",
      "\\mathbin": "\\dotsb",
      "\\bmod": "\\dotsb",
      "\\mathrel": "\\dotsb",
      "\\relbar": "\\dotsb",
      "\\Relbar": "\\dotsb",
      "\\xrightarrow": "\\dotsb",
      "\\xleftarrow": "\\dotsb",
      "\\DOTSI": "\\dotsi",
      "\\int": "\\dotsi",
      "\\oint": "\\dotsi",
      "\\iint": "\\dotsi",
      "\\iiint": "\\dotsi",
      "\\iiiint": "\\dotsi",
      "\\idotsint": "\\dotsi",
      "\\DOTSX": "\\dotsx"
    };
    s("\\dots", function(e) {
      var t = "\\dotso",
        r = e.expandAfterFuture().text;
      return r in l ? t = l[r] : "\\not" === r.substr(0, 4) ? t = "\\dotsb" : r in a.a.math && i.a.contains(["bin", "rel"], a.a.math[r].group) && (t = "\\dotsb"), t
    });
    var u = {
      ")": !0,
      "]": !0,
      "\\rbrack": !0,
      "\\}": !0,
      "\\rbrace": !0,
      "\\rangle": !0,
      "\\rceil": !0,
      "\\rfloor": !0,
      "\\rgroup": !0,
      "\\rmoustache": !0,
      "\\right": !0,
      "\\bigr": !0,
      "\\biggr": !0,
      "\\Bigr": !0,
      "\\Biggr": !0,
      $: !0,
      ";": !0,
      ".": !0,
      ",": !0
    };
    s("\\dotso", function(e) {
      return e.future().text in u ? "\\ldots\\," : "\\ldots"
    }), s("\\dotsc", function(e) {
      var t = e.future().text;
      return t in u && "," !== t ? "\\ldots\\," : "\\ldots"
    }), s("\\cdots", function(e) {
      return e.future().text in u ? "\\@cdots\\," : "\\@cdots"
    }), s("\\dotsb", "\\cdots"), s("\\dotsm", "\\cdots"), s("\\dotsi", "\\!\\cdots"), s("\\dotsx", "\\ldots\\,"), s("\\DOTSI", "\\relax"), s("\\DOTSB", "\\relax"), s("\\DOTSX", "\\relax"), s("\\thinspace", "\\,"), s("\\medspace", "\\:"), s("\\thickspace", "\\;"), s("\\TeX", "\\textrm{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}");
    var c = n.a["Main-Regular"]["T".charCodeAt(0)][1] - .7 * n.a["Main-Regular"]["A".charCodeAt(0)][1] + "em";
    s("\\LaTeX", "\\textrm{L\\kern-.36em\\raisebox{" + c + "}{\\scriptsize A}\\kern-.15em\\TeX}"), s("\\KaTeX", "\\textrm{K\\kern-.17em\\raisebox{" + c + "}{\\scriptsize A}\\kern-.15em\\TeX}"), s("\\hspace", "\\@ifstar\\kern\\kern"), s("\\ordinarycolon", ":"), s("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), s("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon"), s("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}="), s("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}="), s("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"), s("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"), s("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx"), s("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx"), s("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim"), s("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim"), s("\u2254", "\\coloneqq"), s("\u2255", "\\eqqcolon"), s("\u2a74", "\\Coloneqq"), s("\\ratio", "\\vcentcolon"), s("\\coloncolon", "\\dblcolon"), s("\\colonequals", "\\coloneqq"), s("\\coloncolonequals", "\\Coloneqq"), s("\\equalscolon", "\\eqqcolon"), s("\\equalscoloncolon", "\\Eqqcolon"), s("\\colonminus", "\\coloneq"), s("\\coloncolonminus", "\\Coloneq"), s("\\minuscolon", "\\eqcolon"), s("\\minuscoloncolon", "\\Eqcolon"), s("\\coloncolonapprox", "\\Colonapprox"), s("\\coloncolonsim", "\\Colonsim"), s("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\notni", "\\not\\ni"), s("\\limsup", "\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"), s("\\liminf", "\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits")
  }, function(e, t, r) {
    "use strict";
    var n = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
            return t[e]
          }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          n[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
      } catch (e) {
        return !1
      }
    }() ? Object.assign : function(e, t) {
      for (var r, o, s = function(e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e)
        }(e), l = 1; l < arguments.length; l++) {
        r = Object(arguments[l]);
        for (var u in r) a.call(r, u) && (s[u] = r[u]);
        if (n) {
          o = n(r);
          for (var c = 0; c < o.length; c++) i.call(r, o[c]) && (s[o[c]] = r[o[c]])
        }
      }
      return s
    }
  }, function(e, t) {
    e.exports = {
      "\u0301": {
        text: "\\'",
        math: "\\acute"
      },
      "\u0300": {
        text: "\\`",
        math: "\\grave"
      },
      "\u0308": {
        text: '\\"',
        math: "\\ddot"
      },
      "\u0303": {
        text: "\\~",
        math: "\\tilde"
      },
      "\u0304": {
        text: "\\=",
        math: "\\bar"
      },
      "\u0306": {
        text: "\\u",
        math: "\\breve"
      },
      "\u030c": {
        text: "\\v",
        math: "\\check"
      },
      "\u0302": {
        text: "\\^",
        math: "\\hat"
      },
      "\u0307": {
        text: "\\.",
        math: "\\dot"
      },
      "\u030a": {
        text: "\\r",
        math: "\\mathring"
      },
      "\u030b": {
        text: "\\H"
      }
    }
  }, function(e, t, r) {
    "use strict";
    t.a = {
      "\xe1": "a\u0301",
      "\xe0": "a\u0300",
      "\xe4": "a\u0308",
      "\u01df": "a\u0308\u0304",
      "\xe3": "a\u0303",
      "\u0101": "a\u0304",
      "\u0103": "a\u0306",
      "\u1eaf": "a\u0306\u0301",
      "\u1eb1": "a\u0306\u0300",
      "\u1eb5": "a\u0306\u0303",
      "\u01ce": "a\u030c",
      "\xe2": "a\u0302",
      "\u1ea5": "a\u0302\u0301",
      "\u1ea7": "a\u0302\u0300",
      "\u1eab": "a\u0302\u0303",
      "\u0227": "a\u0307",
      "\u01e1": "a\u0307\u0304",
      "\xe5": "a\u030a",
      "\u01fb": "a\u030a\u0301",
      "\u1e03": "b\u0307",
      "\u0107": "c\u0301",
      "\u010d": "c\u030c",
      "\u0109": "c\u0302",
      "\u010b": "c\u0307",
      "\u010f": "d\u030c",
      "\u1e0b": "d\u0307",
      "\xe9": "e\u0301",
      "\xe8": "e\u0300",
      "\xeb": "e\u0308",
      "\u1ebd": "e\u0303",
      "\u0113": "e\u0304",
      "\u1e17": "e\u0304\u0301",
      "\u1e15": "e\u0304\u0300",
      "\u0115": "e\u0306",
      "\u011b": "e\u030c",
      "\xea": "e\u0302",
      "\u1ebf": "e\u0302\u0301",
      "\u1ec1": "e\u0302\u0300",
      "\u1ec5": "e\u0302\u0303",
      "\u0117": "e\u0307",
      "\u1e1f": "f\u0307",
      "\u01f5": "g\u0301",
      "\u1e21": "g\u0304",
      "\u011f": "g\u0306",
      "\u01e7": "g\u030c",
      "\u011d": "g\u0302",
      "\u0121": "g\u0307",
      "\u1e27": "h\u0308",
      "\u021f": "h\u030c",
      "\u0125": "h\u0302",
      "\u1e23": "h\u0307",
      "\xed": "i\u0301",
      "\xec": "i\u0300",
      "\xef": "i\u0308",
      "\u1e2f": "i\u0308\u0301",
      "\u0129": "i\u0303",
      "\u012b": "i\u0304",
      "\u012d": "i\u0306",
      "\u01d0": "i\u030c",
      "\xee": "i\u0302",
      "\u01f0": "j\u030c",
      "\u0135": "j\u0302",
      "\u1e31": "k\u0301",
      "\u01e9": "k\u030c",
      "\u013a": "l\u0301",
      "\u013e": "l\u030c",
      "\u1e3f": "m\u0301",
      "\u1e41": "m\u0307",
      "\u0144": "n\u0301",
      "\u01f9": "n\u0300",
      "\xf1": "n\u0303",
      "\u0148": "n\u030c",
      "\u1e45": "n\u0307",
      "\xf3": "o\u0301",
      "\xf2": "o\u0300",
      "\xf6": "o\u0308",
      "\u022b": "o\u0308\u0304",
      "\xf5": "o\u0303",
      "\u1e4d": "o\u0303\u0301",
      "\u1e4f": "o\u0303\u0308",
      "\u022d": "o\u0303\u0304",
      "\u014d": "o\u0304",
      "\u1e53": "o\u0304\u0301",
      "\u1e51": "o\u0304\u0300",
      "\u014f": "o\u0306",
      "\u01d2": "o\u030c",
      "\xf4": "o\u0302",
      "\u1ed1": "o\u0302\u0301",
      "\u1ed3": "o\u0302\u0300",
      "\u1ed7": "o\u0302\u0303",
      "\u022f": "o\u0307",
      "\u0231": "o\u0307\u0304",
      "\u0151": "o\u030b",
      "\u1e55": "p\u0301",
      "\u1e57": "p\u0307",
      "\u0155": "r\u0301",
      "\u0159": "r\u030c",
      "\u1e59": "r\u0307",
      "\u015b": "s\u0301",
      "\u1e65": "s\u0301\u0307",
      "\u0161": "s\u030c",
      "\u1e67": "s\u030c\u0307",
      "\u015d": "s\u0302",
      "\u1e61": "s\u0307",
      "\u1e97": "t\u0308",
      "\u0165": "t\u030c",
      "\u1e6b": "t\u0307",
      "\xfa": "u\u0301",
      "\xf9": "u\u0300",
      "\xfc": "u\u0308",
      "\u01d8": "u\u0308\u0301",
      "\u01dc": "u\u0308\u0300",
      "\u01d6": "u\u0308\u0304",
      "\u01da": "u\u0308\u030c",
      "\u0169": "u\u0303",
      "\u1e79": "u\u0303\u0301",
      "\u016b": "u\u0304",
      "\u1e7b": "u\u0304\u0308",
      "\u016d": "u\u0306",
      "\u01d4": "u\u030c",
      "\xfb": "u\u0302",
      "\u016f": "u\u030a",
      "\u0171": "u\u030b",
      "\u1e7d": "v\u0303",
      "\u1e83": "w\u0301",
      "\u1e81": "w\u0300",
      "\u1e85": "w\u0308",
      "\u0175": "w\u0302",
      "\u1e87": "w\u0307",
      "\u1e98": "w\u030a",
      "\u1e8d": "x\u0308",
      "\u1e8b": "x\u0307",
      "\xfd": "y\u0301",
      "\u1ef3": "y\u0300",
      "\xff": "y\u0308",
      "\u1ef9": "y\u0303",
      "\u0233": "y\u0304",
      "\u0177": "y\u0302",
      "\u1e8f": "y\u0307",
      "\u1e99": "y\u030a",
      "\u017a": "z\u0301",
      "\u017e": "z\u030c",
      "\u1e91": "z\u0302",
      "\u017c": "z\u0307",
      "\xc1": "A\u0301",
      "\xc0": "A\u0300",
      "\xc4": "A\u0308",
      "\u01de": "A\u0308\u0304",
      "\xc3": "A\u0303",
      "\u0100": "A\u0304",
      "\u0102": "A\u0306",
      "\u1eae": "A\u0306\u0301",
      "\u1eb0": "A\u0306\u0300",
      "\u1eb4": "A\u0306\u0303",
      "\u01cd": "A\u030c",
      "\xc2": "A\u0302",
      "\u1ea4": "A\u0302\u0301",
      "\u1ea6": "A\u0302\u0300",
      "\u1eaa": "A\u0302\u0303",
      "\u0226": "A\u0307",
      "\u01e0": "A\u0307\u0304",
      "\xc5": "A\u030a",
      "\u01fa": "A\u030a\u0301",
      "\u1e02": "B\u0307",
      "\u0106": "C\u0301",
      "\u010c": "C\u030c",
      "\u0108": "C\u0302",
      "\u010a": "C\u0307",
      "\u010e": "D\u030c",
      "\u1e0a": "D\u0307",
      "\xc9": "E\u0301",
      "\xc8": "E\u0300",
      "\xcb": "E\u0308",
      "\u1ebc": "E\u0303",
      "\u0112": "E\u0304",
      "\u1e16": "E\u0304\u0301",
      "\u1e14": "E\u0304\u0300",
      "\u0114": "E\u0306",
      "\u011a": "E\u030c",
      "\xca": "E\u0302",
      "\u1ebe": "E\u0302\u0301",
      "\u1ec0": "E\u0302\u0300",
      "\u1ec4": "E\u0302\u0303",
      "\u0116": "E\u0307",
      "\u1e1e": "F\u0307",
      "\u01f4": "G\u0301",
      "\u1e20": "G\u0304",
      "\u011e": "G\u0306",
      "\u01e6": "G\u030c",
      "\u011c": "G\u0302",
      "\u0120": "G\u0307",
      "\u1e26": "H\u0308",
      "\u021e": "H\u030c",
      "\u0124": "H\u0302",
      "\u1e22": "H\u0307",
      "\xcd": "I\u0301",
      "\xcc": "I\u0300",
      "\xcf": "I\u0308",
      "\u1e2e": "I\u0308\u0301",
      "\u0128": "I\u0303",
      "\u012a": "I\u0304",
      "\u012c": "I\u0306",
      "\u01cf": "I\u030c",
      "\xce": "I\u0302",
      "\u0130": "I\u0307",
      "\u0134": "J\u0302",
      "\u1e30": "K\u0301",
      "\u01e8": "K\u030c",
      "\u0139": "L\u0301",
      "\u013d": "L\u030c",
      "\u1e3e": "M\u0301",
      "\u1e40": "M\u0307",
      "\u0143": "N\u0301",
      "\u01f8": "N\u0300",
      "\xd1": "N\u0303",
      "\u0147": "N\u030c",
      "\u1e44": "N\u0307",
      "\xd3": "O\u0301",
      "\xd2": "O\u0300",
      "\xd6": "O\u0308",
      "\u022a": "O\u0308\u0304",
      "\xd5": "O\u0303",
      "\u1e4c": "O\u0303\u0301",
      "\u1e4e": "O\u0303\u0308",
      "\u022c": "O\u0303\u0304",
      "\u014c": "O\u0304",
      "\u1e52": "O\u0304\u0301",
      "\u1e50": "O\u0304\u0300",
      "\u014e": "O\u0306",
      "\u01d1": "O\u030c",
      "\xd4": "O\u0302",
      "\u1ed0": "O\u0302\u0301",
      "\u1ed2": "O\u0302\u0300",
      "\u1ed6": "O\u0302\u0303",
      "\u022e": "O\u0307",
      "\u0230": "O\u0307\u0304",
      "\u0150": "O\u030b",
      "\u1e54": "P\u0301",
      "\u1e56": "P\u0307",
      "\u0154": "R\u0301",
      "\u0158": "R\u030c",
      "\u1e58": "R\u0307",
      "\u015a": "S\u0301",
      "\u1e64": "S\u0301\u0307",
      "\u0160": "S\u030c",
      "\u1e66": "S\u030c\u0307",
      "\u015c": "S\u0302",
      "\u1e60": "S\u0307",
      "\u0164": "T\u030c",
      "\u1e6a": "T\u0307",
      "\xda": "U\u0301",
      "\xd9": "U\u0300",
      "\xdc": "U\u0308",
      "\u01d7": "U\u0308\u0301",
      "\u01db": "U\u0308\u0300",
      "\u01d5": "U\u0308\u0304",
      "\u01d9": "U\u0308\u030c",
      "\u0168": "U\u0303",
      "\u1e78": "U\u0303\u0301",
      "\u016a": "U\u0304",
      "\u1e7a": "U\u0304\u0308",
      "\u016c": "U\u0306",
      "\u01d3": "U\u030c",
      "\xdb": "U\u0302",
      "\u016e": "U\u030a",
      "\u0170": "U\u030b",
      "\u1e7c": "V\u0303",
      "\u1e82": "W\u0301",
      "\u1e80": "W\u0300",
      "\u1e84": "W\u0308",
      "\u0174": "W\u0302",
      "\u1e86": "W\u0307",
      "\u1e8c": "X\u0308",
      "\u1e8a": "X\u0307",
      "\xdd": "Y\u0301",
      "\u1ef2": "Y\u0300",
      "\u0178": "Y\u0308",
      "\u1ef8": "Y\u0303",
      "\u0232": "Y\u0304",
      "\u0176": "Y\u0302",
      "\u1e8e": "Y\u0307",
      "\u0179": "Z\u0301",
      "\u017d": "Z\u030c",
      "\u1e90": "Z\u0302",
      "\u017b": "Z\u0307",
      "\u03ac": "\u03b1\u0301",
      "\u1f70": "\u03b1\u0300",
      "\u1fb1": "\u03b1\u0304",
      "\u1fb0": "\u03b1\u0306",
      "\u03ad": "\u03b5\u0301",
      "\u1f72": "\u03b5\u0300",
      "\u03ae": "\u03b7\u0301",
      "\u1f74": "\u03b7\u0300",
      "\u03af": "\u03b9\u0301",
      "\u1f76": "\u03b9\u0300",
      "\u03ca": "\u03b9\u0308",
      "\u0390": "\u03b9\u0308\u0301",
      "\u1fd2": "\u03b9\u0308\u0300",
      "\u1fd1": "\u03b9\u0304",
      "\u1fd0": "\u03b9\u0306",
      "\u03cc": "\u03bf\u0301",
      "\u1f78": "\u03bf\u0300",
      "\u03cd": "\u03c5\u0301",
      "\u1f7a": "\u03c5\u0300",
      "\u03cb": "\u03c5\u0308",
      "\u03b0": "\u03c5\u0308\u0301",
      "\u1fe2": "\u03c5\u0308\u0300",
      "\u1fe1": "\u03c5\u0304",
      "\u1fe0": "\u03c5\u0306",
      "\u03ce": "\u03c9\u0301",
      "\u1f7c": "\u03c9\u0300",
      "\u038e": "\u03a5\u0301",
      "\u1fea": "\u03a5\u0300",
      "\u03ab": "\u03a5\u0308",
      "\u1fe9": "\u03a5\u0304",
      "\u1fe8": "\u03a5\u0306",
      "\u038f": "\u03a9\u0301",
      "\u1ffa": "\u03a9\u0300"
    }
  }]).default
});
! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.katex = t() : e.katex = t()
}(this, function() {
  return function(e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var a = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    return r.m = e, r.c = t, r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: n
      })
    }, r.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return r.d(t, "a", t), t
    }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 63)
  }([function(e, t, r) {
    "use strict";
    var n = r(57),
      a = r.n(n),
      i = r(18),
      o = r.n(i),
      s = r(12),
      l = r(30),
      u = r(28),
      c = r(5),
      h = r(13),
      p = r(19),
      m = ["\\imath", "\u0131", "\\jmath", "\u0237", "\\pounds", "\\mathsterling", "\\textsterling", "\xa3"],
      d = function(e, t, r) {
        return u.a[r][e] && u.a[r][e].replace && (e = u.a[r][e].replace), {
          value: e,
          metrics: l.a.getCharacterMetrics(e, t, r)
        }
      },
      f = function(e, t, r, n, a) {
        var i = d(e, t, r),
          o = i.metrics;
        e = i.value;
        var l = void 0;
        if (o) {
          var u = o.italic;
          "text" === r && (u = 0), l = new s.a.symbolNode(e, o.height, o.depth, u, o.skew, o.width, a)
        } else "undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "'"), l = new s.a.symbolNode(e, 0, 0, 0, 0, 0, a);
        if (n) {
          l.maxFontSize = n.sizeMultiplier, n.style.isTight() && l.classes.push("mtight");
          var c = n.getColor();
          c && (l.style.color = c)
        }
        return l
      },
      v = function(e, t, r, n, a) {
        if ("mathord" === a) {
          var i = g(e, t, r, n);
          return f(e, i.fontName, t, r, n.concat([i.fontClass]))
        }
        if ("textord" === a) {
          if ("ams" === (u.a[t][e] && u.a[t][e].font)) {
            var o = x("amsrm", r.fontWeight, r.fontShape);
            return f(e, o, t, r, n.concat("amsrm", r.fontWeight, r.fontShape))
          }
          var s = x("textrm", r.fontWeight, r.fontShape);
          return f(e, s, t, r, n.concat(r.fontWeight, r.fontShape))
        }
        throw new Error("unexpected type: " + a + " in mathDefault")
      },
      g = function(e, t, r, n) {
        return /[0-9]/.test(e.charAt(0)) || c.a.contains(m, e) ? {
          fontName: "Main-Italic",
          fontClass: "mainit"
        } : {
          fontName: "Math-Italic",
          fontClass: "mathit"
        }
      },
      y = function(e) {
        var t = 0,
          r = 0,
          n = 0,
          a = !0,
          i = !1,
          s = void 0;
        try {
          for (var l, u = o()(e.children); !(a = (l = u.next()).done); a = !0) {
            var c = l.value;
            c.height > t && (t = c.height), c.depth > r && (r = c.depth), c.maxFontSize > n && (n = c.maxFontSize)
          }
        } catch (e) {
          i = !0, s = e
        } finally {
          try {
            !a && u.return && u.return()
          } finally {
            if (i) throw s
          }
        }
        e.height = t, e.depth = r, e.maxFontSize = n
      },
      b = function(e, t, r, n) {
        var a = new s.a.span(e, t, r, n);
        return y(a), a
      },
      x = function(e, t, r) {
        return w(e) + "-" + k(t, r)
      },
      w = function(e) {
        var t = "";
        switch (e) {
          case "amsrm":
            t = "AMS";
            break;
          case "textrm":
            t = "Main";
            break;
          case "textsf":
            t = "SansSerif";
            break;
          case "texttt":
            t = "Typewriter";
            break;
          default:
            throw new Error("Invalid font provided: " + e)
        }
        return t
      },
      k = function(e, t) {
        var r = "";
        return "textbf" === e && (r += "Bold"), "textit" === t && (r += "Italic"), r || "Regular"
      },
      M = {
        mathbf: {
          variant: "bold",
          fontName: "Main-Bold"
        },
        mathrm: {
          variant: "normal",
          fontName: "Main-Regular"
        },
        textit: {
          variant: "italic",
          fontName: "Main-Italic"
        },
        mathbb: {
          variant: "double-struck",
          fontName: "AMS-Regular"
        },
        mathcal: {
          variant: "script",
          fontName: "Caligraphic-Regular"
        },
        mathfrak: {
          variant: "fraktur",
          fontName: "Fraktur-Regular"
        },
        mathscr: {
          variant: "script",
          fontName: "Script-Regular"
        },
        mathsf: {
          variant: "sans-serif",
          fontName: "SansSerif-Regular"
        },
        mathtt: {
          variant: "monospace",
          fontName: "Typewriter-Regular"
        }
      },
      S = {
        vec: ["vec", .471, .714]
      };
    t.a = {
      fontMap: M,
      makeSymbol: f,
      mathsym: function(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return r && r.fontFamily && "boldsymbol" === r.fontFamily && d(e, "Main-Bold", t).metrics ? f(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === u.a[t][e].font ? f(e, "Main-Regular", t, r, n) : f(e, "AMS-Regular", t, r, n.concat(["amsrm"]))
      },
      makeSpan: b,
      makeLineSpan: function(e, t) {
        var r = t.fontMetrics().defaultRuleThickness,
          n = h.a.ruleSpan(e, r, t);
        return n.height = r, n.style.height = 5 * n.height + "em", n.maxFontSize = 1, n
      },
      makeAnchor: function(e, t, r, n) {
        var a = new s.a.anchor(e, t, r, n);
        return y(a), a
      },
      makeFragment: function(e) {
        var t = new s.a.documentFragment(e);
        return y(t), t
      },
      makeVList: function(e, t) {
        var r = function(e) {
            if ("individualShift" === e.positionType) {
              for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) {
                var s = -t[i].shift - a - t[i].elem.depth,
                  l = s - (t[i - 1].elem.height + t[i - 1].elem.depth);
                a += s, r.push({
                  type: "kern",
                  size: l
                }), r.push(t[i])
              }
              return {
                children: r,
                depth: n
              }
            }
            var u = void 0;
            if ("top" === e.positionType) {
              var c = e.positionData,
                h = !0,
                p = !1,
                m = void 0;
              try {
                for (var d, f = o()(e.children); !(h = (d = f.next()).done); h = !0) {
                  var v = d.value;
                  c -= "kern" === v.type ? v.size : v.elem.height + v.elem.depth
                }
              } catch (e) {
                p = !0, m = e
              } finally {
                try {
                  !h && f.return && f.return()
                } finally {
                  if (p) throw m
                }
              }
              u = c
            } else if ("bottom" === e.positionType) u = -e.positionData;
            else {
              var g = e.children[0];
              if ("elem" !== g.type) throw new Error('First child must have type "elem".');
              if ("shift" === e.positionType) u = -g.elem.depth - e.positionData;
              else {
                if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                u = -g.elem.depth
              }
            }
            return {
              children: e.children,
              depth: u
            }
          }(e),
          n = r.children,
          a = r.depth,
          i = 0,
          l = !0,
          u = !1,
          c = void 0;
        try {
          for (var h, p = o()(n); !(l = (h = p.next()).done); l = !0) {
            var m = h.value;
            if ("elem" === m.type) {
              var d = m.elem;
              i = Math.max(i, d.maxFontSize, d.height)
            }
          }
        } catch (e) {
          u = !0, c = e
        } finally {
          try {
            !l && p.return && p.return()
          } finally {
            if (u) throw c
          }
        }
        i += 2;
        var f = b(["pstrut"], []);
        f.style.height = i + "em";
        var v = [],
          g = a,
          y = a,
          x = a,
          w = !0,
          k = !1,
          M = void 0;
        try {
          for (var S, z = o()(n); !(w = (S = z.next()).done); w = !0) {
            var O = S.value;
            if ("kern" === O.type) x += O.size;
            else {
              var T = O.elem,
                A = O.wrapperClasses || [],
                N = O.wrapperStyle || {},
                B = b(A, [f, T], void 0, N);
              B.style.top = -i - x - T.depth + "em", O.marginLeft && (B.style.marginLeft = O.marginLeft), O.marginRight && (B.style.marginRight = O.marginRight), v.push(B), x += T.height + T.depth
            }
            g = Math.min(g, x), y = Math.max(y, x)
          }
        } catch (e) {
          k = !0, M = e
        } finally {
          try {
            !w && z.return && z.return()
          } finally {
            if (k) throw M
          }
        }
        var q = b(["vlist"], v);
        q.style.height = y + "em";
        var C = void 0;
        if (g < 0) {
          var E = b(["vlist"], []);
          E.style.height = -g + "em";
          var j = b(["vlist-s"], [new s.a.symbolNode("\u200b")]);
          C = [b(["vlist-r"], [q, j]), b(["vlist-r"], [E])]
        } else C = [b(["vlist-r"], [q])];
        var R = b(["vlist-t"], C);
        return 2 === C.length && R.classes.push("vlist-t2"), R.height = y, R.depth = -g, R
      },
      makeOrd: function(e, t, r) {
        var n = e.mode,
          a = e.value,
          i = ["mord"],
          o = t.fontFamily;
        if (o) {
          var s = void 0,
            l = void 0;
          if ("boldsymbol" === o) {
            var u = d(a, "Math-BoldItalic", n).metrics ? {
              fontName: "Math-BoldItalic",
              fontClass: "boldsymbol"
            } : {
              fontName: "Main-Bold",
              fontClass: "mathbf"
            };
            s = u.fontName, l = [u.fontClass]
          } else if ("mathit" === o || c.a.contains(m, a)) {
            var h = g(a, n, t, i);
            s = h.fontName, l = [h.fontClass]
          } else -1 !== o.indexOf("math") || "math" === n ? (s = M[o].fontName, l = [o]) : (s = x(o, t.fontWeight, t.fontShape), l = [o, t.fontWeight, t.fontShape]);
          return d(a, s, n).metrics ? f(a, s, n, t, i.concat(l)) : v(a, n, t, i, r)
        }
        return v(a, n, t, i, r)
      },
      makeVerb: function(e, t) {
        var r = e.value.body;
        return r = e.value.star ? r.replace(/ /g, "\u2423") : r.replace(/ /g, "\xa0")
      },
      makeGlue: function(e, t) {
        var r = b(["mord", "rule"], [], t),
          n = Object(p.a)(e, t);
        return r.style.marginRight = n + "em", r
      },
      staticSvg: function(e, t) {
        var r = a()(S[e], 3),
          n = r[0],
          i = r[1],
          o = r[2],
          l = new s.a.pathNode(n),
          u = new s.a.svgNode([l], {
            width: i + "em",
            height: o + "em",
            style: "width:" + i + "em",
            viewBox: "0 0 " + 1e3 * i + " " + 1e3 * o,
            preserveAspectRatio: "xMinYMin"
          }),
          c = b(["overlay"], [u], t);
        return c.height = o, c.style.height = o + "em", c.style.width = i + "em", c
      },
      svgData: S,
      tryCombineChars: function(e) {
        for (var t = 0; t < e.length - 1; t++) e[t].tryCombine(e[t + 1]) && (e.splice(t + 1, 1), t--);
        return e
      },
      spacingFunctions: {
        "\\qquad": {
          size: "2em",
          className: "qquad"
        },
        "\\quad": {
          size: "1em",
          className: "quad"
        },
        "\\enspace": {
          size: "0.5em",
          className: "enspace"
        },
        "\\;": {
          size: "0.277778em",
          className: "thickspace"
        },
        "\\:": {
          size: "0.22222em",
          className: "mediumspace"
        },
        "\\,": {
          size: "0.16667em",
          className: "thinspace"
        },
        "\\!": {
          size: "-0.16667em",
          className: "negativethinspace"
        }
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(18),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = r(5),
      c = function() {
        function e(t, r) {
          o()(this, e), this.type = t, this.attributes = {}, this.children = r || []
        }
        return l()(e, [{
          key: "setAttribute",
          value: function(e, t) {
            this.attributes[e] = t
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            var r = !0,
              n = !1,
              i = void 0;
            try {
              for (var o, s = a()(this.children); !(r = (o = s.next()).done); r = !0) {
                var l = o.value;
                e.appendChild(l.toNode())
              }
            } catch (e) {
              n = !0, i = e
            } finally {
              try {
                !r && s.return && s.return()
              } finally {
                if (n) throw i
              }
            }
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<" + this.type;
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += u.a.escape(this.attributes[t]), e += '"');
            e += ">";
            for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
            return e += "</" + this.type + ">"
          }
        }, {
          key: "toText",
          value: function() {
            return "mspace" === this.type ? "0.16667em" === this.attributes.width ? "\u2006" : " " : this.children.map(function(e) {
              return e.toText()
            }).join("")
          }
        }]), e
      }(),
      h = function() {
        function e(t) {
          o()(this, e), this.text = t
        }
        return l()(e, [{
          key: "toNode",
          value: function() {
            return document.createTextNode(this.text)
          }
        }, {
          key: "toMarkup",
          value: function() {
            return u.a.escape(this.text)
          }
        }, {
          key: "toText",
          value: function() {
            return this.text
          }
        }]), e
      }();
    t.a = {
      MathNode: c,
      TextNode: h
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "e", function() {
      return h
    }), r.d(t, "d", function() {
      return m
    }), r.d(t, "a", function() {
      return f
    }), r.d(t, "b", function() {
      return v
    }), t.c = function(e, t, r) {
      var a = f(e, r),
        o = new i.a.MathNode("mrow", a),
        s = new i.a.MathNode("annotation", [new i.a.TextNode(t)]);
      s.setAttribute("encoding", "application/x-tex");
      var l = new i.a.MathNode("semantics", [o, s]),
        u = new i.a.MathNode("math", [l]);
      return n.a.makeSpan(["katex-mathml"], [u])
    };
    var n = r(0),
      a = r(30),
      i = r(1),
      o = r(6),
      s = r(9),
      l = r(28),
      u = r(5),
      c = r(13),
      h = function(e, t) {
        return l.a[t][e] && l.a[t][e].replace && (e = l.a[t][e].replace), new i.a.TextNode(e)
      },
      p = function(e, t) {
        var r = t.fontFamily;
        if (!r) return null;
        var i = e.mode;
        if ("mathit" === r) return "italic";
        if ("boldsymbol" === r) return "bold-italic";
        var o = e.value;
        if (u.a.contains(["\\imath", "\\jmath"], o)) return null;
        l.a[i][o] && l.a[i][o].replace && (o = l.a[i][o].replace);
        var s = n.a.fontMap[r].fontName;
        return a.a.getCharacterMetrics(o, s, i) ? n.a.fontMap[r].variant : null
      },
      m = {},
      d = {
        mi: "italic",
        mn: "normal",
        mtext: "normal"
      };
    m.mathord = function(e, t) {
      var r = new i.a.MathNode("mi", [h(e.value, e.mode)]),
        n = p(e, t) || "italic";
      return n !== d[r.type] && r.setAttribute("mathvariant", n), r
    }, m.textord = function(e, t) {
      var r = h(e.value, e.mode),
        n = p(e, t) || "normal",
        a = void 0;
      return a = "text" === e.mode ? new i.a.MathNode("mtext", [r]) : /[0-9]/.test(e.value) ? new i.a.MathNode("mn", [r]) : "\\prime" === e.value ? new i.a.MathNode("mo", [r]) : new i.a.MathNode("mi", [r]), n !== d[a.type] && a.setAttribute("mathvariant", n), a
    }, m.bin = function(e, t) {
      var r = new i.a.MathNode("mo", [h(e.value, e.mode)]),
        n = p(e, t);
      return "bold-italic" === n && r.setAttribute("mathvariant", n), r
    }, m.rel = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.open = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.close = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.inner = function(e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)])
    }, m.punct = function(e) {
      var t = new i.a.MathNode("mo", [h(e.value, e.mode)]);
      return t.setAttribute("separator", "true"), t
    }, m.ordgroup = function(e, t) {
      var r = f(e.value, t);
      return new i.a.MathNode("mrow", r)
    }, m.supsub = function(e, t) {
      var r = !1,
        n = void 0;
      e.value.base && "horizBrace" === e.value.base.value.type && !!e.value.sup === e.value.base.value.isOver && (r = !0, n = e.value.base.value.isOver);
      var a = [v(e.value.base, t, !0)];
      e.value.sub && a.push(v(e.value.sub, t, !0)), e.value.sup && a.push(v(e.value.sup, t, !0));
      var o = void 0;
      if (r) o = n ? "mover" : "munder";
      else if (e.value.sub)
        if (e.value.sup) {
          var l = e.value.base;
          o = l && l.value.limits && t.style === s.a.DISPLAY ? "munderover" : "msubsup"
        } else {
          var u = e.value.base;
          o = u && u.value.limits && t.style === s.a.DISPLAY ? "munder" : "msub"
        }
      else {
        var c = e.value.base;
        o = c && c.value.limits && t.style === s.a.DISPLAY ? "mover" : "msup"
      }
      return new i.a.MathNode(o, a)
    }, m.spacing = function(e) {
      var t = void 0;
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? t = new i.a.MathNode("mtext", [new i.a.TextNode("\xa0")]) : (t = new i.a.MathNode("mspace")).setAttribute("width", n.a.spacingFunctions[e.value].size), t
    }, m.horizBrace = function(e, t) {
      var r = c.a.mathMLnode(e.value.label);
      return new i.a.MathNode(e.value.isOver ? "mover" : "munder", [v(e.value.base, t), r])
    }, m.xArrow = function(e, t) {
      var r = c.a.mathMLnode(e.value.label),
        n = void 0,
        a = void 0;
      if (e.value.body) {
        var o = v(e.value.body, t);
        e.value.below ? (a = v(e.value.below, t), n = new i.a.MathNode("munderover", [r, a, o])) : n = new i.a.MathNode("mover", [r, o])
      } else e.value.below ? (a = v(e.value.below, t), n = new i.a.MathNode("munder", [r, a])) : n = new i.a.MathNode("mover", [r]);
      return n
    }, m.mclass = function(e, t) {
      var r = f(e.value.value, t);
      return new i.a.MathNode("mstyle", r)
    }, m.raisebox = function(e, t) {
      var r = new i.a.MathNode("mpadded", [v(e.value.body, t)]),
        n = e.value.dy.value.number + e.value.dy.value.unit;
      return r.setAttribute("voffset", n), r
    };
    var f = function(e, t) {
        for (var r = [], n = 0; n < e.length; n++) {
          var a = e[n];
          r.push(v(a, t))
        }
        return r
      },
      v = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e) return new i.a.MathNode("mrow");
        if (m[e.type]) {
          var n = m[e.type](e, t);
          return r && "mrow" === n.type && 1 === n.children.length ? n.children[0] : n
        }
        throw new o.a("Got group of unknown type: '" + e.type + "'")
      }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return i
    }), t.b = function(e) {
      for (var t = e.type, r = e.names, o = e.props, s = e.handler, l = e.htmlBuilder, u = e.mathmlBuilder, c = {
          numArgs: o.numArgs,
          argTypes: o.argTypes,
          greediness: void 0 === o.greediness ? 1 : o.greediness,
          allowedInText: !!o.allowedInText,
          allowedInMath: void 0 === o.allowedInMath || o.allowedInMath,
          numOptionalArgs: o.numOptionalArgs || 0,
          infix: !!o.infix,
          handler: s
        }, h = 0; h < r.length; ++h) i[r[h]] = c;
      t && (l && (n.d[t] = l), u && (a.d[t] = u))
    }, r.d(t, "c", function() {
      return o
    });
    var n = r(4),
      a = r(2),
      i = {};
    var o = function(e) {
      return "ordgroup" === e.type ? e.value : [e]
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return g
    }), r.d(t, "e", function() {
      return w
    }), r.d(t, "d", function() {
      return k
    }), r.d(t, "b", function() {
      return M
    }), t.c = function(e, t) {
      e = JSON.parse(a()(e));
      var r = g(e, t, !0),
        n = f(["base"], r, t),
        i = f(["strut"]),
        o = f(["strut", "bottom"]);
      i.style.height = n.height + "em", o.style.height = n.height + n.depth + "em", o.style.verticalAlign = -n.depth + "em";
      var s = f(["katex-html"], [i, o, n]);
      return s.setAttribute("aria-hidden", "true"), s
    };
    var n = r(77),
      a = r.n(n),
      i = r(35),
      o = r.n(i),
      s = r(6),
      l = r(9),
      u = r(0),
      c = r(12),
      h = r(19),
      p = r(5),
      m = r(13),
      d = r(112),
      f = u.a.makeSpan,
      v = {
        display: l.a.DISPLAY,
        text: l.a.TEXT,
        script: l.a.SCRIPT,
        scriptscript: l.a.SCRIPTSCRIPT
      },
      g = function(e, t, r) {
        for (var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [null, null], a = [], i = 0; i < e.length; i++) {
          var s = e[i],
            l = M(s, t);
          l instanceof c.a.documentFragment ? a.push.apply(a, o()(l.children)) : a.push(l)
        }
        for (var h, m, g, w, k = [n[0] && f([n[0]], [], t)].concat(o()(a.filter(function(e) {
            return e && "mspace" !== e.classes[0]
          })), [n[1] && f([n[1]], [], t)]), S = 1; S < k.length - 1; S++) {
          var z = y(k[S], "left");
          "mbin" === z.classes[0] && (g = k[S - 1], w = r, g ? p.a.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], b(g, "right")) : w) && (z.classes[0] = "mord");
          var O = y(k[S], "right");
          "mbin" === O.classes[0] && (h = k[S + 1], m = r, h ? p.a.contains(["mrel", "mclose", "mpunct"], b(h, "left")) : m) && (O.classes[0] = "mord")
        }
        for (var T = [], A = 0, N = 0; N < a.length; N++)
          if (T.push(a[N]), "mspace" !== a[N].classes[0] && A < k.length - 1) {
            0 === A && (T.pop(), N--);
            var B = b(k[A], "right"),
              q = b(k[A + 1], "left");
            if (B && q && r) {
              var C = x(k[A + 1]) ? d.b[B][q] : d.a[B][q];
              if (C) {
                var E = t;
                1 === e.length && ("sizing" === e[0].type ? E = t.havingSize(e[0].value.size) : "styling" === e[0].type && (E = t.havingStyle(v[e[0].value.style]))), T.push(u.a.makeGlue(C, E))
              }
            }
            A++
          }
        for (var j = 0; j < T.length; j++) "\u0338" === T[j].value && (T[j].style.position = "absolute", T[j].style.paddingLeft = "0.8em");
        return T
      },
      y = function e(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
        if ((t instanceof c.a.documentFragment || t instanceof c.a.anchor) && t.children.length) {
          if ("right" === r) return e(t.children[t.children.length - 1]);
          if ("left" === r) return e(t.children[0])
        }
        return t
      },
      b = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
        return e ? (e = y(e, t), p.a.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], e.classes[0]) ? e.classes[0] : null) : null
      },
      x = function(e) {
        return e = y(e, "left"), p.a.contains(e.classes, "mtight")
      },
      w = function(e, t) {
        var r = ["nulldelimiter"].concat(e.baseSizingClasses());
        return f(t.concat(r))
      },
      k = {
        mathord: function(e, t) {
          return u.a.makeOrd(e, t, "mathord")
        },
        textord: function(e, t) {
          return u.a.makeOrd(e, t, "textord")
        },
        bin: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mbin"])
        },
        rel: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mrel"])
        },
        open: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mopen"])
        },
        close: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mclose"])
        },
        inner: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["minner"])
        },
        punct: function(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mpunct"])
        },
        ordgroup: function(e, t) {
          return f(["mord"], g(e.value, t, !0), t)
        }
      };
    k.supsub = function(e, t) {
      if (function(e, t) {
          if (e.value.base) {
            var r = e.value.base;
            return "op" === r.type ? r.value.limits && (t.style.size === l.a.DISPLAY.size || r.value.alwaysHandleSupSub) : "accent" === r.type ? p.a.isCharacterBox(r.value.base) : "horizBrace" === r.type ? !e.value.sub === r.value.isOver : null
          }
          return !1
        }(e, t)) return k[e.value.base.type](e, t);
      var r = M(e.value.base, t),
        n = void 0,
        a = void 0,
        i = t.fontMetrics(),
        o = void 0,
        s = 0,
        h = 0;
      e.value.sup && (o = t.havingStyle(t.style.sup()), n = M(e.value.sup, o, t), p.a.isCharacterBox(e.value.base) || (s = r.height - o.fontMetrics().supDrop * o.sizeMultiplier / t.sizeMultiplier)), e.value.sub && (o = t.havingStyle(t.style.sub()), a = M(e.value.sub, o, t), p.a.isCharacterBox(e.value.base) || (h = r.depth + o.fontMetrics().subDrop * o.sizeMultiplier / t.sizeMultiplier));
      var m = void 0;
      m = t.style === l.a.DISPLAY ? i.sup1 : t.style.cramped ? i.sup3 : i.sup2;
      var d = t.sizeMultiplier,
        v = .5 / i.ptPerEm / d + "em",
        g = void 0;
      if (e.value.sup)
        if (e.value.sub) {
          s = Math.max(s, m, n.depth + .25 * i.xHeight), h = Math.max(h, i.sub2);
          var y = i.defaultRuleThickness;
          if (s - n.depth - (a.height - h) < 4 * y) {
            h = 4 * y - (s - n.depth) + a.height;
            var x = .8 * i.xHeight - (s - n.depth);
            x > 0 && (s += x, h -= x)
          }
          var w = [{
            type: "elem",
            elem: a,
            shift: h,
            marginRight: v
          }, {
            type: "elem",
            elem: n,
            shift: -s,
            marginRight: v
          }];
          r instanceof c.a.symbolNode && (w[0].marginLeft = -r.italic + "em"), g = u.a.makeVList({
            positionType: "individualShift",
            children: w
          }, t)
        } else s = Math.max(s, m, n.depth + .25 * i.xHeight), g = u.a.makeVList({
          positionType: "shift",
          positionData: -s,
          children: [{
            type: "elem",
            elem: n,
            marginRight: v
          }]
        }, t);
      else {
        h = Math.max(h, i.sub1, a.height - .8 * i.xHeight);
        var S = [{
          type: "elem",
          elem: a,
          marginRight: v
        }];
        r instanceof c.a.symbolNode && (S[0].marginLeft = -r.italic + "em"), g = u.a.makeVList({
          positionType: "shift",
          positionData: h,
          children: S
        }, t)
      }
      var z = b(r) || "mord";
      return f([z], [r, f(["msupsub"], [g])], t)
    }, k.spacing = function(e, t) {
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? "text" === e.mode ? u.a.makeOrd(e, t, "textord") : f(["mspace"], [u.a.mathsym(e.value, e.mode, t)], t) : f(["mspace", u.a.spacingFunctions[e.value].className], [], t)
    }, k.horizBrace = function(e, t) {
      var r = t.style,
        n = "supsub" === e.type,
        a = void 0,
        i = void 0;
      n && (e.value.sup ? (i = t.havingStyle(r.sup()), a = M(e.value.sup, i, t)) : (i = t.havingStyle(r.sub()), a = M(e.value.sub, i, t)), e = e.value.base);
      var o = M(e.value.base, t.havingBaseStyle(l.a.DISPLAY)),
        s = m.a.svgSpan(e, t),
        c = void 0;
      if (e.value.isOver ? (c = u.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: o
          }, {
            type: "kern",
            size: .1
          }, {
            type: "elem",
            elem: s
          }]
        }, t)).children[0].children[0].children[1].classes.push("svg-align") : (c = u.a.makeVList({
          positionType: "bottom",
          positionData: o.depth + .1 + s.height,
          children: [{
            type: "elem",
            elem: s
          }, {
            type: "kern",
            size: .1
          }, {
            type: "elem",
            elem: o
          }]
        }, t)).children[0].children[0].children[0].classes.push("svg-align"), n) {
        var h = f(["mord", e.value.isOver ? "mover" : "munder"], [c], t);
        c = e.value.isOver ? u.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: h
          }, {
            type: "kern",
            size: .2
          }, {
            type: "elem",
            elem: a
          }]
        }, t) : u.a.makeVList({
          positionType: "bottom",
          positionData: h.depth + .2 + a.height,
          children: [{
            type: "elem",
            elem: a
          }, {
            type: "kern",
            size: .2
          }, {
            type: "elem",
            elem: h
          }]
        }, t)
      }
      return f(["mord", e.value.isOver ? "mover" : "munder"], [c], t)
    }, k.xArrow = function(e, t) {
      var r = t.style,
        n = t.havingStyle(r.sup()),
        a = M(e.value.body, n, t);
      a.classes.push("x-arrow-pad");
      var i = void 0;
      e.value.below && (n = t.havingStyle(r.sub()), (i = M(e.value.below, n, t)).classes.push("x-arrow-pad"));
      var o = m.a.svgSpan(e, t),
        s = -t.fontMetrics().axisHeight + .5 * o.height,
        l = -t.fontMetrics().axisHeight - .5 * o.height - .111;
      "\\xleftequilibrium" === e.value.label && (l -= a.depth);
      var c = void 0;
      if (e.value.below) {
        var h = -t.fontMetrics().axisHeight + i.height + .5 * o.height + .111;
        c = u.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: a,
            shift: l
          }, {
            type: "elem",
            elem: o,
            shift: s
          }, {
            type: "elem",
            elem: i,
            shift: h
          }]
        }, t)
      } else c = u.a.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: l
        }, {
          type: "elem",
          elem: o,
          shift: s
        }]
      }, t);
      return c.children[0].children[0].children[1].classes.push("svg-align"), f(["mrel", "x-arrow"], [c], t)
    }, k.mclass = function(e, t) {
      var r = g(e.value.value, t, !0);
      return f([e.value.mclass], r, t)
    }, k.raisebox = function(e, t) {
      var r = k.sizing({
          value: {
            value: [{
              type: "text",
              value: {
                body: e.value.value,
                font: "mathrm"
              }
            }],
            size: 6
          }
        }, t),
        n = Object(h.a)(e.value.dy.value, t);
      return u.a.makeVList({
        positionType: "shift",
        positionData: -n,
        children: [{
          type: "elem",
          elem: r
        }]
      }, t)
    };
    var M = function(e, t, r) {
      if (!e) return f();
      if (k[e.type]) {
        var n = k[e.type](e, t);
        if (r && t.size !== r.size) {
          n = f(t.sizingClasses(r), [n], t);
          var a = t.sizeMultiplier / r.sizeMultiplier;
          n.height *= a, n.depth *= a
        }
        return n
      }
      throw new s.a("Got group of unknown type: '" + e.type + "'")
    }
  }, function(e, t, r) {
    "use strict";
    var n = Array.prototype.indexOf,
      a = function(e, t) {
        if (null == e) return -1;
        if (n && e.indexOf === n) return e.indexOf(t);
        for (var r = e.length, a = 0; a < r; a++)
          if (e[a] === t) return a;
        return -1
      },
      i = /([A-Z])/g,
      o = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
      },
      s = /[&><"']/g;
    var l = void 0;
    if ("undefined" != typeof document) {
      var u = document.createElement("span");
      l = "textContent" in u ? function(e, t) {
        e.textContent = t
      } : function(e, t) {
        e.innerText = t
      }
    }
    var c = function e(t) {
      return !!t && ("ordgroup" === t.type ? 1 === t.value.length ? e(t.value[0]) : t : "color" === t.type ? 1 === t.value.value.length ? e(t.value.value[0]) : t : "font" === t.type ? e(t.value.body) : t)
    };
    t.a = {
      contains: function(e, t) {
        return -1 !== a(e, t)
      },
      deflt: function(e, t) {
        return void 0 === e ? t : e
      },
      escape: function(e) {
        return String(e).replace(s, function(e) {
          return o[e]
        })
      },
      hyphenate: function(e) {
        return e.replace(i, "-$1").toLowerCase()
      },
      indexOf: a,
      setTextContent: l,
      clearNode: function(e) {
        l(e, "")
      },
      getBaseElem: c,
      isCharacterBox: function(e) {
        var t = c(e);
        return "mathord" === t.type || "textord" === t.type || "bin" === t.type || "rel" === t.type || "inner" === t.type || "open" === t.type || "close" === t.type || "punct" === t.type
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = (r(14), r(27), function e(t, r) {
        a()(this, e);
        var n = "KaTeX parse error: " + t,
          i = void 0,
          o = r && r.loc;
        if (o && o.start <= o.end) {
          var s = o.lexer.input;
          i = o.start;
          var l = o.end;
          i === s.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
          var u = s.slice(i, l).replace(/[^]/g, "$&\u0332");
          n += (i > 15 ? "\u2026" + s.slice(i - 15, i) : s.slice(0, i)) + u + (l + 15 < s.length ? s.slice(l, l + 15) + "\u2026" : s.slice(l))
        }
        var c = new Error(n);
        return c.name = "ParseError", c.__proto__ = e.prototype, c.position = i, c
      });
    i.prototype.__proto__ = Error.prototype, t.a = i
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
  }, function(e, t) {
    var r = e.exports = {
      version: "2.4.0"
    };
    "number" == typeof __e && (__e = r)
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = function() {
        function e(t, r, n) {
          a()(this, e), this.id = t, this.size = r, this.cramped = n
        }
        return o()(e, [{
          key: "sup",
          value: function() {
            return l[u[this.id]]
          }
        }, {
          key: "sub",
          value: function() {
            return l[c[this.id]]
          }
        }, {
          key: "fracNum",
          value: function() {
            return l[h[this.id]]
          }
        }, {
          key: "fracDen",
          value: function() {
            return l[p[this.id]]
          }
        }, {
          key: "cramp",
          value: function() {
            return l[m[this.id]]
          }
        }, {
          key: "text",
          value: function() {
            return l[d[this.id]]
          }
        }, {
          key: "isTight",
          value: function() {
            return this.size >= 2
          }
        }]), e
      }(),
      l = [new s(0, 0, !1), new s(1, 0, !0), new s(2, 1, !1), new s(3, 1, !0), new s(4, 2, !1), new s(5, 2, !0), new s(6, 3, !1), new s(7, 3, !0)],
      u = [4, 5, 4, 5, 6, 7, 6, 7],
      c = [5, 5, 5, 5, 7, 7, 7, 7],
      h = [2, 3, 4, 5, 6, 7, 6, 7],
      p = [3, 3, 5, 5, 7, 7, 7, 7],
      m = [1, 1, 3, 3, 5, 5, 7, 7],
      d = [0, 1, 2, 3, 2, 3, 2, 3];
    t.a = {
      DISPLAY: l[0],
      TEXT: l[2],
      SCRIPT: l[4],
      SCRIPTSCRIPT: l[6]
    }
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n, a = r(73),
      i = (n = a) && n.__esModule ? n : {
        default: n
      };
    t.default = function() {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(e, n.key, n)
        }
      }
      return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t
      }
    }()
  }, function(e, t, r) {
    var n = r(52)("wks"),
      a = r(32),
      i = r(16).Symbol,
      o = "function" == typeof i;
    (e.exports = function(e) {
      return n[e] || (n[e] = o && i[e] || (o ? i : a)("Symbol." + e))
    }).store = n
  }, function(e, t, r) {
    "use strict";
    var n = r(18),
      a = r.n(n),
      i = r(105),
      o = r.n(i),
      s = r(7),
      l = r.n(s),
      u = r(10),
      c = r.n(u),
      h = r(42),
      p = r(5),
      m = r(111),
      d = function(e) {
        for (var t = (e = e.slice()).length - 1; t >= 0; t--) e[t] || e.splice(t, 1);
        return e.join(" ")
      },
      f = function() {
        function e(t, r, n, a) {
          if (l()(this, e), this.classes = t || [], this.children = r || [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = o()({}, a), this.attributes = {}, n) {
            n.style.isTight() && this.classes.push("mtight");
            var i = n.getColor();
            i && (this.style.color = i)
          }
        }
        return c()(e, [{
          key: "setAttribute",
          value: function(e, t) {
            this.attributes[e] = t
          }
        }, {
          key: "tryCombine",
          value: function(e) {
            return !1
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createElement("span");
            e.className = d(this.classes);
            for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
            for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<span";
            this.classes.length && (e += ' class="', e += p.a.escape(d(this.classes)), e += '"');
            var t = "";
            for (var r in this.style) this.style.hasOwnProperty(r) && (t += p.a.hyphenate(r) + ":" + this.style[r] + ";");
            t && (e += ' style="' + p.a.escape(t) + '"');
            for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="', e += p.a.escape(this.attributes[n]), e += '"');
            e += ">";
            for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
            return e += "</span>"
          }
        }]), e
      }(),
      v = function() {
        function e(t, r, n, a) {
          l()(this, e), this.href = t, this.classes = r, this.children = n, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}, this.attributes = {}, a.style.isTight() && this.classes.push("mtight");
          var i = a.getColor();
          i && (this.style.color = i)
        }
        return c()(e, [{
          key: "setAttribute",
          value: function(e, t) {
            this.attributes[e] = t
          }
        }, {
          key: "tryCombine",
          value: function(e) {
            return !1
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createElement("a");
            e.setAttribute("href", this.href), this.classes.length && (e.className = d(this.classes));
            for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
            for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<a";
            e += 'href="' + (e += p.a.escape(this.href)) + '"', this.classes.length && (e += ' class="' + p.a.escape(d(this.classes)) + '"');
            var t = "";
            for (var r in this.style) this.style.hasOwnProperty(r) && (t += p.a.hyphenate(r) + ":" + this.style[r] + ";");
            t && (e += ' style="' + p.a.escape(t) + '"');
            for (var n in this.attributes) "href" !== n && Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="' + p.a.escape(this.attributes[n]) + '"');
            e += ">";
            var i = !0,
              o = !1,
              s = void 0;
            try {
              for (var l, u = a()(this.children); !(i = (l = u.next()).done); i = !0) {
                e += l.value.toMarkup()
              }
            } catch (e) {
              o = !0, s = e
            } finally {
              try {
                !i && u.return && u.return()
              } finally {
                if (o) throw s
              }
            }
            return e += "</a>"
          }
        }]), e
      }(),
      g = function() {
        function e(t) {
          l()(this, e), this.children = t || [], this.height = 0, this.depth = 0, this.maxFontSize = 0
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
            return e
          }
        }]), e
      }(),
      y = {
        "\xee": "\u0131\u0302",
        "\xef": "\u0131\u0308",
        "\xed": "\u0131\u0301",
        "\xec": "\u0131\u0300"
      },
      b = function() {
        function e(t, r, n, a, i, s, u, c) {
          l()(this, e), this.value = t, this.height = r || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = u || [], this.style = o()({}, c), this.maxFontSize = 0;
          var p = Object(h.a)(this.value.charCodeAt(0));
          p && this.classes.push(p + "_fallback"), /[\xee\xef\xed\xec]/.test(this.value) && (this.value = y[this.value])
        }
        return c()(e, [{
          key: "tryCombine",
          value: function(t) {
            if (!t || !(t instanceof e) || this.italic > 0 || d(this.classes) !== d(t.classes) || this.skew !== t.skew || this.maxFontSize !== t.maxFontSize) return !1;
            for (var r in this.style)
              if (this.style.hasOwnProperty(r) && this.style[r] !== t.style[r]) return !1;
            for (var n in t.style)
              if (t.style.hasOwnProperty(n) && this.style[n] !== t.style[n]) return !1;
            return this.value += t.value, this.height = Math.max(this.height, t.height), this.depth = Math.max(this.depth, t.depth), this.italic = t.italic, !0
          }
        }, {
          key: "toNode",
          value: function() {
            var e = document.createTextNode(this.value),
              t = null;
            this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement("span")).className = d(this.classes));
            for (var r in this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]);
            return t ? (t.appendChild(e), t) : e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = !1,
              t = "<span";
            this.classes.length && (e = !0, t += ' class="', t += p.a.escape(d(this.classes)), t += '"');
            var r = "";
            this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
            for (var n in this.style) this.style.hasOwnProperty(n) && (r += p.a.hyphenate(n) + ":" + this.style[n] + ";");
            r && (e = !0, t += ' style="' + p.a.escape(r) + '"');
            var a = p.a.escape(this.value);
            return e ? (t += ">", t += a, t += "</span>") : a
          }
        }]), e
      }(),
      x = function() {
        function e(t, r) {
          l()(this, e), this.children = t || [], this.attributes = r || {}, this.height = 0, this.depth = 0, this.maxFontSize = 0
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<svg";
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
            e += ">";
            for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
            return e += "</svg>"
          }
        }]), e
      }(),
      w = function() {
        function e(t, r) {
          l()(this, e), this.pathName = t, this.alternate = r
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", m.a.path[this.pathName]), e
          }
        }, {
          key: "toMarkup",
          value: function() {
            return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + m.a.path[this.pathName] + "'/>"
          }
        }]), e
      }(),
      k = function() {
        function e(t) {
          l()(this, e), this.attributes = t || {}
        }
        return c()(e, [{
          key: "toNode",
          value: function() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            return e
          }
        }, {
          key: "toMarkup",
          value: function() {
            var e = "<line";
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
            return e += "/>"
          }
        }]), e
      }();
    t.a = {
      span: f,
      anchor: v,
      documentFragment: g,
      symbolNode: b,
      svgNode: x,
      pathNode: w,
      lineNode: k
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(57),
      a = r.n(n),
      i = r(12),
      o = r(0),
      s = r(1),
      l = r(5),
      u = {
        widehat: "^",
        widetilde: "~",
        utilde: "~",
        overleftarrow: "\u2190",
        underleftarrow: "\u2190",
        xleftarrow: "\u2190",
        overrightarrow: "\u2192",
        underrightarrow: "\u2192",
        xrightarrow: "\u2192",
        underbrace: "\u23b5",
        overbrace: "\u23de",
        overleftrightarrow: "\u2194",
        underleftrightarrow: "\u2194",
        xleftrightarrow: "\u2194",
        Overrightarrow: "\u21d2",
        xRightarrow: "\u21d2",
        overleftharpoon: "\u21bc",
        xleftharpoonup: "\u21bc",
        overrightharpoon: "\u21c0",
        xrightharpoonup: "\u21c0",
        xLeftarrow: "\u21d0",
        xLeftrightarrow: "\u21d4",
        xhookleftarrow: "\u21a9",
        xhookrightarrow: "\u21aa",
        xmapsto: "\u21a6",
        xrightharpoondown: "\u21c1",
        xleftharpoondown: "\u21bd",
        xrightleftharpoons: "\u21cc",
        xleftrightharpoons: "\u21cb",
        xtwoheadleftarrow: "\u219e",
        xtwoheadrightarrow: "\u21a0",
        xlongequal: "=",
        xtofrom: "\u21c4",
        xrightleftarrows: "\u21c4",
        xrightequilibrium: "\u21cc",
        xleftequilibrium: "\u21cb"
      },
      c = {
        overrightarrow: [
          ["rightarrow"], .888, 522, "xMaxYMin"
        ],
        overleftarrow: [
          ["leftarrow"], .888, 522, "xMinYMin"
        ],
        underrightarrow: [
          ["rightarrow"], .888, 522, "xMaxYMin"
        ],
        underleftarrow: [
          ["leftarrow"], .888, 522, "xMinYMin"
        ],
        xrightarrow: [
          ["rightarrow"], 1.469, 522, "xMaxYMin"
        ],
        xleftarrow: [
          ["leftarrow"], 1.469, 522, "xMinYMin"
        ],
        Overrightarrow: [
          ["doublerightarrow"], .888, 560, "xMaxYMin"
        ],
        xRightarrow: [
          ["doublerightarrow"], 1.526, 560, "xMaxYMin"
        ],
        xLeftarrow: [
          ["doubleleftarrow"], 1.526, 560, "xMinYMin"
        ],
        overleftharpoon: [
          ["leftharpoon"], .888, 522, "xMinYMin"
        ],
        xleftharpoonup: [
          ["leftharpoon"], .888, 522, "xMinYMin"
        ],
        xleftharpoondown: [
          ["leftharpoondown"], .888, 522, "xMinYMin"
        ],
        overrightharpoon: [
          ["rightharpoon"], .888, 522, "xMaxYMin"
        ],
        xrightharpoonup: [
          ["rightharpoon"], .888, 522, "xMaxYMin"
        ],
        xrightharpoondown: [
          ["rightharpoondown"], .888, 522, "xMaxYMin"
        ],
        xlongequal: [
          ["longequal"], .888, 334, "xMinYMin"
        ],
        xtwoheadleftarrow: [
          ["twoheadleftarrow"], .888, 334, "xMinYMin"
        ],
        xtwoheadrightarrow: [
          ["twoheadrightarrow"], .888, 334, "xMaxYMin"
        ],
        overleftrightarrow: [
          ["leftarrow", "rightarrow"], .888, 522
        ],
        overbrace: [
          ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
        ],
        underbrace: [
          ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
        ],
        underleftrightarrow: [
          ["leftarrow", "rightarrow"], .888, 522
        ],
        xleftrightarrow: [
          ["leftarrow", "rightarrow"], 1.75, 522
        ],
        xLeftrightarrow: [
          ["doubleleftarrow", "doublerightarrow"], 1.75, 560
        ],
        xrightleftharpoons: [
          ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
        ],
        xleftrightharpoons: [
          ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
        ],
        xhookleftarrow: [
          ["leftarrow", "righthook"], 1.08, 522
        ],
        xhookrightarrow: [
          ["lefthook", "rightarrow"], 1.08, 522
        ],
        overlinesegment: [
          ["leftlinesegment", "rightlinesegment"], .888, 522
        ],
        underlinesegment: [
          ["leftlinesegment", "rightlinesegment"], .888, 522
        ],
        overgroup: [
          ["leftgroup", "rightgroup"], .888, 342
        ],
        undergroup: [
          ["leftgroupunder", "rightgroupunder"], .888, 342
        ],
        xmapsto: [
          ["leftmapsto", "rightarrow"], 1.5, 522
        ],
        xtofrom: [
          ["leftToFrom", "rightToFrom"], 1.75, 528
        ],
        xrightleftarrows: [
          ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 667
        ],
        xrightequilibrium: [
          ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
        ],
        xleftequilibrium: [
          ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
        ]
      },
      h = function(e) {
        return "ordgroup" === e.type ? e.value.length : 1
      };
    t.a = {
      encloseSpan: function(e, t, r, n) {
        var a = void 0,
          s = e.height + e.depth + 2 * r;
        if (/fbox|color/.test(t)) {
          if (a = o.a.makeSpan(["stretchy", t], [], n), "fbox" === t) {
            var l = n.color && n.getColor();
            l && (a.style.borderColor = l)
          }
        } else {
          var u = [];
          /^[bx]cancel$/.test(t) && u.push(new i.a.lineNode({
            x1: "0",
            y1: "0",
            x2: "100%",
            y2: "100%",
            "stroke-width": "0.046em"
          })), /^x?cancel$/.test(t) && u.push(new i.a.lineNode({
            x1: "0",
            y1: "100%",
            x2: "100%",
            y2: "0",
            "stroke-width": "0.046em"
          }));
          var c = new i.a.svgNode(u, {
            width: "100%",
            height: s + "em"
          });
          a = o.a.makeSpan([], [c], n)
        }
        return a.height = s, a.style.height = s + "em", a
      },
      mathMLnode: function(e) {
        var t = new s.a.MathNode("mo", [new s.a.TextNode(u[e.substr(1)])]);
        return t.setAttribute("stretchy", "true"), t
      },
      ruleSpan: function(e, t, r) {
        var n = void 0,
          a = void 0,
          s = "stretchy";
        return "vertical-separator" === e ? (n = new i.a.pathNode("vertSeparator"), a = new i.a.svgNode([n], {
          width: "0.25em",
          height: "400em",
          viewBox: "0 0 250 400000",
          preserveAspectRatio: "xMinYMin slice"
        }), s = "vertical-separator") : (n = new i.a.pathNode("stdHorizRule"), a = new i.a.svgNode([n], {
          width: "400em",
          height: 5 * t + "em",
          viewBox: "0 0 400000 200",
          preserveAspectRatio: "xMinYMin slice"
        })), o.a.makeSpan([s], [a], r)
      },
      svgSpan: function(e, t) {
        var r = function() {
            var r = 4e5,
              n = e.value.label.substr(1);
            if (l.a.contains(["widehat", "widetilde", "utilde"], n)) {
              var s = h(e.value.base),
                u = void 0,
                p = void 0,
                m = void 0;
              if (s > 5) u = "widehat" === n ? 420 : 312, r = "widehat" === n ? 2364 : 2340, m = "widehat" === n ? .42 : .34, p = ("widehat" === n ? "widehat" : "tilde") + "4";
              else {
                var d = [1, 1, 2, 2, 3, 3][s];
                "widehat" === n ? (r = [0, 1062, 2364, 2364, 2364][d], u = [0, 239, 300, 360, 420][d], m = [0, .24, .3, .3, .36, .42][d], p = "widehat" + d) : (r = [0, 600, 1033, 2339, 2340][d], u = [0, 260, 286, 306, 312][d], m = [0, .26, .286, .3, .306, .34][d], p = "tilde" + d)
              }
              var f = new i.a.pathNode(p),
                v = new i.a.svgNode([f], {
                  width: "100%",
                  height: m + "em",
                  viewBox: "0 0 " + r + " " + u,
                  preserveAspectRatio: "none"
                });
              return {
                span: o.a.makeSpan([], [v], t),
                minWidth: 0,
                height: m
              }
            }
            var g = [],
              y = a()(c[n], 4),
              b = y[0],
              x = y[1],
              w = y[2],
              k = y[3],
              M = w / 1e3,
              S = b.length,
              z = void 0,
              O = void 0;
            if (1 === S) z = ["hide-tail"], O = [k];
            else if (2 === S) z = ["halfarrow-left", "halfarrow-right"], O = ["xMinYMin", "xMaxYMin"];
            else {
              if (3 !== S) throw new Error("Correct katexImagesData or update code here to support\n                    " + S + " children.");
              z = ["brace-left", "brace-center", "brace-right"], O = ["xMinYMin", "xMidYMin", "xMaxYMin"]
            }
            for (var T = 0; T < S; T++) {
              var A = new i.a.pathNode(b[T]),
                N = new i.a.svgNode([A], {
                  width: "400em",
                  height: M + "em",
                  viewBox: "0 0 " + r + " " + w,
                  preserveAspectRatio: O[T] + " slice"
                }),
                B = o.a.makeSpan([z[T]], [N], t);
              if (1 === S) return {
                span: B,
                minWidth: x,
                height: M
              };
              B.style.height = M + "em", g.push(B)
            }
            return {
              span: o.a.makeSpan(["stretchy"], g, t),
              minWidth: x,
              height: M
            }
          }(),
          n = r.span,
          s = r.minWidth,
          u = r.height;
        return n.height = u, n.style.height = u + "em", s > 0 && (n.style.minWidth = s + "em"), n
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(31);
    t.a = function e(t, r, n, o, s) {
      a()(this, e), this.type = t, this.value = r, this.mode = n, this.loc = i.a.range(o, s)
    }
  }, function(e, t, r) {
    var n = r(22),
      a = r(70),
      i = r(71),
      o = Object.defineProperty;
    t.f = r(23) ? Object.defineProperty : function(e, t, r) {
      if (n(e), t = i(t, !0), n(r), a) try {
        return o(e, t, r)
      } catch (e) {}
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (e[t] = r.value), e
    }
  }, function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, function(e, t) {
    e.exports = {}
  }, function(e, t, r) {
    e.exports = {
      default: r(103),
      __esModule: !0
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "b", function() {
      return o
    }), r.d(t, "a", function() {
      return s
    });
    var n = r(6),
      a = (r(43), {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        in: 72.27,
        bp: 1.00375,
        pc: 12,
        dd: 1238 / 1157,
        cc: 14856 / 1157,
        nd: 685 / 642,
        nc: 1370 / 107,
        sp: 1 / 65536,
        px: 1.00375
      }),
      i = {
        ex: !0,
        em: !0,
        mu: !0
      },
      o = function(e) {
        return "string" != typeof e && (e = e.unit), e in a || e in i || "ex" === e
      },
      s = function(e, t) {
        var r = void 0;
        if (e.unit in a) r = a[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
        else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;
        else {
          var i = void 0;
          if (i = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = i.fontMetrics().xHeight;
          else {
            if ("em" !== e.unit) throw new n.a("Invalid unit: '" + e.unit + "'");
            r = i.fontMetrics().quad
          }
          i !== t && (r *= i.sizeMultiplier / t.sizeMultiplier)
        }
        return Math.min(e.number * r, t.maxSize)
      }
  }, function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return r.call(e, t)
    }
  }, function(e, t, r) {
    var n = r(20);
    e.exports = function(e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function(e, t, r) {
    e.exports = !r(24)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  }, function(e, t, r) {
    var n = r(16),
      a = r(8),
      i = r(47),
      o = r(26),
      s = "prototype",
      l = function(e, t, r) {
        var u, c, h, p = e & l.F,
          m = e & l.G,
          d = e & l.S,
          f = e & l.P,
          v = e & l.B,
          g = e & l.W,
          y = m ? a : a[t] || (a[t] = {}),
          b = y[s],
          x = m ? n : d ? n[t] : (n[t] || {})[s];
        m && (r = t);
        for (u in r)(c = !p && x && void 0 !== x[u]) && u in y || (h = c ? x[u] : r[u], y[u] = m && "function" != typeof x[u] ? r[u] : v && c ? i(h, n) : g && x[u] == h ? function(e) {
          var t = function(t, r, n) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t);
                case 2:
                  return new e(t, r)
              }
              return new e(t, r, n)
            }
            return e.apply(this, arguments)
          };
          return t[s] = e[s], t
        }(h) : f && "function" == typeof h ? i(Function.call, h) : h, f && ((y.virtual || (y.virtual = {}))[u] = h, e & l.R && b && !b[u] && o(b, u, h)))
      };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
  }, function(e, t, r) {
    var n = r(15),
      a = r(33);
    e.exports = r(23) ? function(e, t, r) {
      return n.f(e, t, a(1, r))
    } : function(e, t, r) {
      return e[t] = r, e
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return l
    });
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(31),
      l = function() {
        function e(t, r) {
          a()(this, e), this.text = t, this.loc = r
        }
        return o()(e, [{
          key: "range",
          value: function(t, r) {
            return new e(r, s.a.range(this, t))
          }
        }]), e
      }()
  }, function(e, t, r) {
    "use strict";
    var n = {
      math: {},
      text: {}
    };

    function a(e, t, r, a, i, o) {
      n[e][i] = {
        font: t,
        group: r,
        replace: a
      }, o && a && (n[e][a] = n[e][i])
    }
    t.a = n;
    var i = "math",
      o = "text",
      s = "main",
      l = "ams",
      u = "accent",
      c = "bin",
      h = "close",
      p = "inner",
      m = "mathord",
      d = "op",
      f = "open",
      v = "punct",
      g = "rel",
      y = "spacing",
      b = "textord";
    a(i, s, g, "\u2261", "\\equiv", !0), a(i, s, g, "\u227a", "\\prec", !0), a(i, s, g, "\u227b", "\\succ", !0), a(i, s, g, "\u223c", "\\sim", !0), a(i, s, g, "\u22a5", "\\perp"), a(i, s, g, "\u2aaf", "\\preceq", !0), a(i, s, g, "\u2ab0", "\\succeq", !0), a(i, s, g, "\u2243", "\\simeq", !0), a(i, s, g, "\u2223", "\\mid", !0), a(i, s, g, "\u226a", "\\ll"), a(i, s, g, "\u226b", "\\gg", !0), a(i, s, g, "\u224d", "\\asymp", !0), a(i, s, g, "\u2225", "\\parallel"), a(i, s, g, "\u22c8", "\\bowtie", !0), a(i, s, g, "\u2323", "\\smile", !0), a(i, s, g, "\u2291", "\\sqsubseteq", !0), a(i, s, g, "\u2292", "\\sqsupseteq", !0), a(i, s, g, "\u2250", "\\doteq", !0), a(i, s, g, "\u2322", "\\frown", !0), a(i, s, g, "\u220b", "\\ni", !0), a(i, s, g, "\u221d", "\\propto", !0), a(i, s, g, "\u22a2", "\\vdash", !0), a(i, s, g, "\u22a3", "\\dashv", !0), a(i, s, g, "\u220b", "\\owns"), a(i, s, v, ".", "\\ldotp"), a(i, s, v, "\u22c5", "\\cdotp"), a(i, s, b, "#", "\\#"), a(o, s, b, "#", "\\#"), a(i, s, b, "&", "\\&"), a(o, s, b, "&", "\\&"), a(i, s, b, "\u2135", "\\aleph", !0), a(i, s, b, "\u2200", "\\forall", !0), a(i, s, b, "\u210f", "\\hbar"), a(i, s, b, "\u2203", "\\exists", !0), a(i, s, b, "\u2207", "\\nabla", !0), a(i, s, b, "\u266d", "\\flat", !0), a(i, s, b, "\u2113", "\\ell", !0), a(i, s, b, "\u266e", "\\natural", !0), a(i, s, b, "\u2663", "\\clubsuit", !0), a(i, s, b, "\u2118", "\\wp", !0), a(i, s, b, "\u266f", "\\sharp", !0), a(i, s, b, "\u2662", "\\diamondsuit", !0), a(i, s, b, "\u211c", "\\Re", !0), a(i, s, b, "\u2661", "\\heartsuit", !0), a(i, s, b, "\u2111", "\\Im", !0), a(i, s, b, "\u2660", "\\spadesuit", !0), a(o, s, b, "\xa7", "\\S", !0), a(o, s, b, "\xb6", "\\P", !0), a(i, s, b, "\u2020", "\\dag"), a(o, s, b, "\u2020", "\\dag"), a(o, s, b, "\u2020", "\\textdagger"), a(i, s, b, "\u2021", "\\ddag"), a(o, s, b, "\u2021", "\\ddag"), a(o, s, b, "\u2020", "\\textdaggerdbl"), a(i, s, h, "\u23b1", "\\rmoustache"), a(i, s, f, "\u23b0", "\\lmoustache"), a(i, s, h, "\u27ef", "\\rgroup"), a(i, s, f, "\u27ee", "\\lgroup"), a(i, s, c, "\u2213", "\\mp", !0), a(i, s, c, "\u2296", "\\ominus", !0), a(i, s, c, "\u228e", "\\uplus", !0), a(i, s, c, "\u2293", "\\sqcap", !0), a(i, s, c, "\u2217", "\\ast"), a(i, s, c, "\u2294", "\\sqcup", !0), a(i, s, c, "\u25ef", "\\bigcirc"), a(i, s, c, "\u2219", "\\bullet"), a(i, s, c, "\u2021", "\\ddagger"), a(i, s, c, "\u2240", "\\wr", !0), a(i, s, c, "\u2a3f", "\\amalg"), a(i, s, c, "&", "\\And"), a(i, s, g, "\u27f5", "\\longleftarrow", !0), a(i, s, g, "\u21d0", "\\Leftarrow", !0), a(i, s, g, "\u27f8", "\\Longleftarrow", !0), a(i, s, g, "\u27f6", "\\longrightarrow", !0), a(i, s, g, "\u21d2", "\\Rightarrow", !0), a(i, s, g, "\u27f9", "\\Longrightarrow", !0), a(i, s, g, "\u2194", "\\leftrightarrow", !0), a(i, s, g, "\u27f7", "\\longleftrightarrow", !0), a(i, s, g, "\u21d4", "\\Leftrightarrow", !0), a(i, s, g, "\u27fa", "\\Longleftrightarrow", !0), a(i, s, g, "\u21a6", "\\mapsto", !0), a(i, s, g, "\u27fc", "\\longmapsto", !0), a(i, s, g, "\u2197", "\\nearrow", !0), a(i, s, g, "\u21a9", "\\hookleftarrow", !0), a(i, s, g, "\u21aa", "\\hookrightarrow", !0), a(i, s, g, "\u2198", "\\searrow", !0), a(i, s, g, "\u21bc", "\\leftharpoonup", !0), a(i, s, g, "\u21c0", "\\rightharpoonup", !0), a(i, s, g, "\u2199", "\\swarrow", !0), a(i, s, g, "\u21bd", "\\leftharpoondown", !0), a(i, s, g, "\u21c1", "\\rightharpoondown", !0), a(i, s, g, "\u2196", "\\nwarrow", !0), a(i, s, g, "\u21cc", "\\rightleftharpoons", !0), a(i, l, g, "\u226e", "\\nless", !0), a(i, l, g, "\ue010", "\\nleqslant"), a(i, l, g, "\ue011", "\\nleqq"), a(i, l, g, "\u2a87", "\\lneq", !0), a(i, l, g, "\u2268", "\\lneqq", !0), a(i, l, g, "\ue00c", "\\lvertneqq"), a(i, l, g, "\u22e6", "\\lnsim", !0), a(i, l, g, "\u2a89", "\\lnapprox", !0), a(i, l, g, "\u2280", "\\nprec", !0), a(i, l, g, "\u22e0", "\\npreceq", !0), a(i, l, g, "\u22e8", "\\precnsim", !0), a(i, l, g, "\u2ab9", "\\precnapprox", !0), a(i, l, g, "\u2241", "\\nsim", !0), a(i, l, g, "\ue006", "\\nshortmid"), a(i, l, g, "\u2224", "\\nmid", !0), a(i, l, g, "\u22ac", "\\nvdash", !0), a(i, l, g, "\u22ad", "\\nvDash", !0), a(i, l, g, "\u22ea", "\\ntriangleleft"), a(i, l, g, "\u22ec", "\\ntrianglelefteq", !0), a(i, l, g, "\u228a", "\\subsetneq", !0), a(i, l, g, "\ue01a", "\\varsubsetneq"), a(i, l, g, "\u2acb", "\\subsetneqq", !0), a(i, l, g, "\ue017", "\\varsubsetneqq"), a(i, l, g, "\u226f", "\\ngtr", !0), a(i, l, g, "\ue00f", "\\ngeqslant"), a(i, l, g, "\ue00e", "\\ngeqq"), a(i, l, g, "\u2a88", "\\gneq", !0), a(i, l, g, "\u2269", "\\gneqq", !0), a(i, l, g, "\ue00d", "\\gvertneqq"), a(i, l, g, "\u22e7", "\\gnsim", !0), a(i, l, g, "\u2a8a", "\\gnapprox", !0), a(i, l, g, "\u2281", "\\nsucc", !0), a(i, l, g, "\u22e1", "\\nsucceq", !0), a(i, l, g, "\u22e9", "\\succnsim", !0), a(i, l, g, "\u2aba", "\\succnapprox", !0), a(i, l, g, "\u2246", "\\ncong", !0), a(i, l, g, "\ue007", "\\nshortparallel"), a(i, l, g, "\u2226", "\\nparallel", !0), a(i, l, g, "\u22af", "\\nVDash", !0), a(i, l, g, "\u22eb", "\\ntriangleright"), a(i, l, g, "\u22ed", "\\ntrianglerighteq", !0), a(i, l, g, "\ue018", "\\nsupseteqq"), a(i, l, g, "\u228b", "\\supsetneq", !0), a(i, l, g, "\ue01b", "\\varsupsetneq"), a(i, l, g, "\u2acc", "\\supsetneqq", !0), a(i, l, g, "\ue019", "\\varsupsetneqq"), a(i, l, g, "\u22ae", "\\nVdash", !0), a(i, l, g, "\u2ab5", "\\precneqq", !0), a(i, l, g, "\u2ab6", "\\succneqq", !0), a(i, l, g, "\ue016", "\\nsubseteqq"), a(i, l, c, "\u22b4", "\\unlhd"), a(i, l, c, "\u22b5", "\\unrhd"), a(i, l, g, "\u219a", "\\nleftarrow", !0), a(i, l, g, "\u219b", "\\nrightarrow", !0), a(i, l, g, "\u21cd", "\\nLeftarrow", !0), a(i, l, g, "\u21cf", "\\nRightarrow", !0), a(i, l, g, "\u21ae", "\\nleftrightarrow", !0), a(i, l, g, "\u21ce", "\\nLeftrightarrow", !0), a(i, l, g, "\u25b3", "\\vartriangle"), a(i, l, b, "\u210f", "\\hslash"), a(i, l, b, "\u25bd", "\\triangledown"), a(i, l, b, "\u25ca", "\\lozenge"), a(i, l, b, "\u24c8", "\\circledS"), a(i, l, b, "\xae", "\\circledR"), a(o, l, b, "\xae", "\\circledR"), a(i, l, b, "\u2221", "\\measuredangle", !0), a(i, l, b, "\u2204", "\\nexists"), a(i, l, b, "\u2127", "\\mho"), a(i, l, b, "\u2132", "\\Finv", !0), a(i, l, b, "\u2141", "\\Game", !0), a(i, l, b, "k", "\\Bbbk"), a(i, l, b, "\u2035", "\\backprime"), a(i, l, b, "\u25b2", "\\blacktriangle"), a(i, l, b, "\u25bc", "\\blacktriangledown"), a(i, l, b, "\u25a0", "\\blacksquare"), a(i, l, b, "\u29eb", "\\blacklozenge"), a(i, l, b, "\u2605", "\\bigstar"), a(i, l, b, "\u2222", "\\sphericalangle", !0), a(i, l, b, "\u2201", "\\complement", !0), a(i, l, b, "\xf0", "\\eth", !0), a(i, l, b, "\u2571", "\\diagup"), a(i, l, b, "\u2572", "\\diagdown"), a(i, l, b, "\u25a1", "\\square"), a(i, l, b, "\u25a1", "\\Box"), a(i, l, b, "\u25ca", "\\Diamond"), a(i, l, b, "\xa5", "\\yen", !0), a(i, l, b, "\u2713", "\\checkmark", !0), a(o, l, b, "\u2713", "\\checkmark"), a(i, l, b, "\u2136", "\\beth", !0), a(i, l, b, "\u2138", "\\daleth", !0), a(i, l, b, "\u2137", "\\gimel", !0), a(i, l, b, "\u03dd", "\\digamma"), a(i, l, b, "\u03f0", "\\varkappa"), a(i, l, f, "\u250c", "\\ulcorner"), a(i, l, h, "\u2510", "\\urcorner"), a(i, l, f, "\u2514", "\\llcorner"), a(i, l, h, "\u2518", "\\lrcorner"), a(i, l, g, "\u2266", "\\leqq", !0), a(i, l, g, "\u2a7d", "\\leqslant"), a(i, l, g, "\u2a95", "\\eqslantless", !0), a(i, l, g, "\u2272", "\\lesssim"), a(i, l, g, "\u2a85", "\\lessapprox"), a(i, l, g, "\u224a", "\\approxeq", !0), a(i, l, c, "\u22d6", "\\lessdot"), a(i, l, g, "\u22d8", "\\lll"), a(i, l, g, "\u2276", "\\lessgtr"), a(i, l, g, "\u22da", "\\lesseqgtr"), a(i, l, g, "\u2a8b", "\\lesseqqgtr"), a(i, l, g, "\u2251", "\\doteqdot"), a(i, l, g, "\u2253", "\\risingdotseq", !0), a(i, l, g, "\u2252", "\\fallingdotseq", !0), a(i, l, g, "\u223d", "\\backsim", !0), a(i, l, g, "\u22cd", "\\backsimeq", !0), a(i, l, g, "\u2ac5", "\\subseteqq", !0), a(i, l, g, "\u22d0", "\\Subset", !0), a(i, l, g, "\u228f", "\\sqsubset", !0), a(i, l, g, "\u227c", "\\preccurlyeq", !0), a(i, l, g, "\u22de", "\\curlyeqprec", !0), a(i, l, g, "\u227e", "\\precsim", !0), a(i, l, g, "\u2ab7", "\\precapprox", !0), a(i, l, g, "\u22b2", "\\vartriangleleft"), a(i, l, g, "\u22b4", "\\trianglelefteq"), a(i, l, g, "\u22a8", "\\vDash"), a(i, l, g, "\u22aa", "\\Vvdash", !0), a(i, l, g, "\u2323", "\\smallsmile"), a(i, l, g, "\u2322", "\\smallfrown"), a(i, l, g, "\u224f", "\\bumpeq", !0), a(i, l, g, "\u224e", "\\Bumpeq", !0), a(i, l, g, "\u2267", "\\geqq", !0), a(i, l, g, "\u2a7e", "\\geqslant", !0), a(i, l, g, "\u2a96", "\\eqslantgtr", !0), a(i, l, g, "\u2273", "\\gtrsim", !0), a(i, l, g, "\u2a86", "\\gtrapprox", !0), a(i, l, c, "\u22d7", "\\gtrdot"), a(i, l, g, "\u22d9", "\\ggg", !0), a(i, l, g, "\u2277", "\\gtrless", !0), a(i, l, g, "\u22db", "\\gtreqless", !0), a(i, l, g, "\u2a8c", "\\gtreqqless", !0), a(i, l, g, "\u2256", "\\eqcirc", !0), a(i, l, g, "\u2257", "\\circeq", !0), a(i, l, g, "\u225c", "\\triangleq", !0), a(i, l, g, "\u223c", "\\thicksim"), a(i, l, g, "\u2248", "\\thickapprox"), a(i, l, g, "\u2ac6", "\\supseteqq", !0), a(i, l, g, "\u22d1", "\\Supset", !0), a(i, l, g, "\u2290", "\\sqsupset", !0), a(i, l, g, "\u227d", "\\succcurlyeq", !0), a(i, l, g, "\u22df", "\\curlyeqsucc", !0), a(i, l, g, "\u227f", "\\succsim", !0), a(i, l, g, "\u2ab8", "\\succapprox", !0), a(i, l, g, "\u22b3", "\\vartriangleright"), a(i, l, g, "\u22b5", "\\trianglerighteq"), a(i, l, g, "\u22a9", "\\Vdash", !0), a(i, l, g, "\u2223", "\\shortmid"), a(i, l, g, "\u2225", "\\shortparallel"), a(i, l, g, "\u226c", "\\between", !0), a(i, l, g, "\u22d4", "\\pitchfork", !0), a(i, l, g, "\u221d", "\\varpropto"), a(i, l, g, "\u25c0", "\\blacktriangleleft"), a(i, l, g, "\u2234", "\\therefore", !0), a(i, l, g, "\u220d", "\\backepsilon"), a(i, l, g, "\u25b6", "\\blacktriangleright"), a(i, l, g, "\u2235", "\\because", !0), a(i, l, g, "\u22d8", "\\llless"), a(i, l, g, "\u22d9", "\\gggtr"), a(i, l, c, "\u22b2", "\\lhd"), a(i, l, c, "\u22b3", "\\rhd"), a(i, l, g, "\u2242", "\\eqsim", !0), a(i, s, g, "\u22c8", "\\Join"), a(i, l, g, "\u2251", "\\Doteq", !0), a(i, l, c, "\u2214", "\\dotplus", !0), a(i, l, c, "\u2216", "\\smallsetminus"), a(i, l, c, "\u22d2", "\\Cap", !0), a(i, l, c, "\u22d3", "\\Cup", !0), a(i, l, c, "\u2a5e", "\\doublebarwedge", !0), a(i, l, c, "\u229f", "\\boxminus", !0), a(i, l, c, "\u229e", "\\boxplus", !0), a(i, l, c, "\u22c7", "\\divideontimes", !0), a(i, l, c, "\u22c9", "\\ltimes", !0), a(i, l, c, "\u22ca", "\\rtimes", !0), a(i, l, c, "\u22cb", "\\leftthreetimes", !0), a(i, l, c, "\u22cc", "\\rightthreetimes", !0), a(i, l, c, "\u22cf", "\\curlywedge", !0), a(i, l, c, "\u22ce", "\\curlyvee", !0), a(i, l, c, "\u229d", "\\circleddash", !0), a(i, l, c, "\u229b", "\\circledast", !0), a(i, l, c, "\u22c5", "\\centerdot"), a(i, l, c, "\u22ba", "\\intercal", !0), a(i, l, c, "\u22d2", "\\doublecap"), a(i, l, c, "\u22d3", "\\doublecup"), a(i, l, c, "\u22a0", "\\boxtimes", !0), a(i, l, g, "\u21e2", "\\dashrightarrow", !0), a(i, l, g, "\u21e0", "\\dashleftarrow", !0), a(i, l, g, "\u21c7", "\\leftleftarrows", !0), a(i, l, g, "\u21c6", "\\leftrightarrows", !0), a(i, l, g, "\u21da", "\\Lleftarrow", !0), a(i, l, g, "\u219e", "\\twoheadleftarrow", !0), a(i, l, g, "\u21a2", "\\leftarrowtail", !0), a(i, l, g, "\u21ab", "\\looparrowleft", !0), a(i, l, g, "\u21cb", "\\leftrightharpoons", !0), a(i, l, g, "\u21b6", "\\curvearrowleft", !0), a(i, l, g, "\u21ba", "\\circlearrowleft", !0), a(i, l, g, "\u21b0", "\\Lsh", !0), a(i, l, g, "\u21c8", "\\upuparrows", !0), a(i, l, g, "\u21bf", "\\upharpoonleft", !0), a(i, l, g, "\u21c3", "\\downharpoonleft", !0), a(i, l, g, "\u22b8", "\\multimap", !0), a(i, l, g, "\u21ad", "\\leftrightsquigarrow", !0), a(i, l, g, "\u21c9", "\\rightrightarrows", !0), a(i, l, g, "\u21c4", "\\rightleftarrows", !0), a(i, l, g, "\u21a0", "\\twoheadrightarrow", !0), a(i, l, g, "\u21a3", "\\rightarrowtail", !0), a(i, l, g, "\u21ac", "\\looparrowright", !0), a(i, l, g, "\u21b7", "\\curvearrowright", !0), a(i, l, g, "\u21bb", "\\circlearrowright", !0), a(i, l, g, "\u21b1", "\\Rsh", !0), a(i, l, g, "\u21ca", "\\downdownarrows", !0), a(i, l, g, "\u21be", "\\upharpoonright", !0), a(i, l, g, "\u21c2", "\\downharpoonright", !0), a(i, l, g, "\u21dd", "\\rightsquigarrow", !0), a(i, l, g, "\u21dd", "\\leadsto"), a(i, l, g, "\u21db", "\\Rrightarrow", !0), a(i, l, g, "\u21be", "\\restriction"), a(i, s, b, "\u2018", "`"), a(i, s, b, "$", "\\$"), a(o, s, b, "$", "\\$"), a(o, s, b, "$", "\\textdollar"), a(i, s, b, "%", "\\%"), a(o, s, b, "%", "\\%"), a(i, s, b, "_", "\\_"), a(o, s, b, "_", "\\_"), a(o, s, b, "_", "\\textunderscore"), a(i, s, b, "\u2220", "\\angle", !0), a(i, s, b, "\u221e", "\\infty", !0), a(i, s, b, "\u2032", "\\prime"), a(i, s, b, "\u25b3", "\\triangle"), a(i, s, b, "\u0393", "\\Gamma", !0), a(i, s, b, "\u0394", "\\Delta", !0), a(i, s, b, "\u0398", "\\Theta", !0), a(i, s, b, "\u039b", "\\Lambda", !0), a(i, s, b, "\u039e", "\\Xi", !0), a(i, s, b, "\u03a0", "\\Pi", !0), a(i, s, b, "\u03a3", "\\Sigma", !0), a(i, s, b, "\u03a5", "\\Upsilon", !0), a(i, s, b, "\u03a6", "\\Phi", !0), a(i, s, b, "\u03a8", "\\Psi", !0), a(i, s, b, "\u03a9", "\\Omega", !0), a(i, s, b, "\xac", "\\neg"), a(i, s, b, "\xac", "\\lnot"), a(i, s, b, "\u22a4", "\\top"), a(i, s, b, "\u22a5", "\\bot"), a(i, s, b, "\u2205", "\\emptyset"), a(i, l, b, "\u2205", "\\varnothing"), a(i, s, m, "\u03b1", "\\alpha", !0), a(i, s, m, "\u03b2", "\\beta", !0), a(i, s, m, "\u03b3", "\\gamma", !0), a(i, s, m, "\u03b4", "\\delta", !0), a(i, s, m, "\u03f5", "\\epsilon", !0), a(i, s, m, "\u03b6", "\\zeta", !0), a(i, s, m, "\u03b7", "\\eta", !0), a(i, s, m, "\u03b8", "\\theta", !0), a(i, s, m, "\u03b9", "\\iota", !0), a(i, s, m, "\u03ba", "\\kappa", !0), a(i, s, m, "\u03bb", "\\lambda", !0), a(i, s, m, "\u03bc", "\\mu", !0), a(i, s, m, "\u03bd", "\\nu", !0), a(i, s, m, "\u03be", "\\xi", !0), a(i, s, m, "\u03bf", "\\omicron", !0), a(i, s, m, "\u03c0", "\\pi", !0), a(i, s, m, "\u03c1", "\\rho", !0), a(i, s, m, "\u03c3", "\\sigma", !0), a(i, s, m, "\u03c4", "\\tau", !0), a(i, s, m, "\u03c5", "\\upsilon", !0), a(i, s, m, "\u03d5", "\\phi", !0), a(i, s, m, "\u03c7", "\\chi", !0), a(i, s, m, "\u03c8", "\\psi", !0), a(i, s, m, "\u03c9", "\\omega", !0), a(i, s, m, "\u03b5", "\\varepsilon", !0), a(i, s, m, "\u03d1", "\\vartheta", !0), a(i, s, m, "\u03d6", "\\varpi", !0), a(i, s, m, "\u03f1", "\\varrho", !0), a(i, s, m, "\u03c2", "\\varsigma", !0), a(i, s, m, "\u03c6", "\\varphi", !0), a(i, s, c, "\u2217", "*"), a(i, s, c, "+", "+"), a(i, s, c, "\u2212", "-"), a(i, s, c, "\u22c5", "\\cdot", !0), a(i, s, c, "\u2218", "\\circ"), a(i, s, c, "\xf7", "\\div", !0), a(i, s, c, "\xb1", "\\pm", !0), a(i, s, c, "\xd7", "\\times", !0), a(i, s, c, "\u2229", "\\cap", !0), a(i, s, c, "\u222a", "\\cup", !0), a(i, s, c, "\u2216", "\\setminus"), a(i, s, c, "\u2227", "\\land"), a(i, s, c, "\u2228", "\\lor"), a(i, s, c, "\u2227", "\\wedge", !0), a(i, s, c, "\u2228", "\\vee", !0), a(i, s, b, "\u221a", "\\surd"), a(i, s, f, "(", "("), a(i, s, f, "[", "["), a(i, s, f, "\u27e8", "\\langle", !0), a(i, s, f, "\u2223", "\\lvert"), a(i, s, f, "\u2225", "\\lVert"), a(i, s, h, ")", ")"), a(i, s, h, "]", "]"), a(i, s, h, "?", "?"), a(i, s, h, "!", "!"), a(i, s, h, "\u27e9", "\\rangle", !0), a(i, s, h, "\u2223", "\\rvert"), a(i, s, h, "\u2225", "\\rVert"), a(i, s, g, "=", "="), a(i, s, g, "<", "<"), a(i, s, g, ">", ">"), a(i, s, g, ":", ":"), a(i, s, g, "\u2248", "\\approx", !0), a(i, s, g, "\u2245", "\\cong", !0), a(i, s, g, "\u2265", "\\ge"), a(i, s, g, "\u2265", "\\geq", !0), a(i, s, g, "\u2190", "\\gets"), a(i, s, g, ">", "\\gt"), a(i, s, g, "\u2208", "\\in", !0), a(i, s, g, "\u2209", "\\notin", !0), a(i, s, g, "\u0338", "\\not"), a(i, s, g, "\u2282", "\\subset", !0), a(i, s, g, "\u2283", "\\supset", !0), a(i, s, g, "\u2286", "\\subseteq", !0), a(i, s, g, "\u2287", "\\supseteq", !0), a(i, l, g, "\u2288", "\\nsubseteq", !0), a(i, l, g, "\u2289", "\\nsupseteq", !0), a(i, s, g, "\u22a8", "\\models"), a(i, s, g, "\u2190", "\\leftarrow", !0), a(i, s, g, "\u2264", "\\le"), a(i, s, g, "\u2264", "\\leq", !0), a(i, s, g, "<", "\\lt"), a(i, s, g, "\u2260", "\\ne", !0), a(i, s, g, "\u2260", "\\neq"), a(i, s, g, "\u2192", "\\rightarrow", !0), a(i, s, g, "\u2192", "\\to"), a(i, l, g, "\u2271", "\\ngeq", !0), a(i, l, g, "\u2270", "\\nleq", !0), a(i, s, y, null, "\\!"), a(i, s, y, "\xa0", "\\ "), a(i, s, y, "\xa0", "~"), a(i, s, y, null, "\\,"), a(i, s, y, null, "\\:"), a(i, s, y, null, "\\;"), a(i, s, y, null, "\\enspace"), a(i, s, y, null, "\\qquad"), a(i, s, y, null, "\\quad"), a(i, s, y, "\xa0", "\\space"), a(i, s, y, "\xa0", "\\nobreakspace"), a(o, s, y, null, "\\!"), a(o, s, y, "\xa0", "\\ "), a(o, s, y, "\xa0", "~"), a(o, s, y, null, "\\,"), a(o, s, y, null, "\\:"), a(o, s, y, null, "\\;"), a(o, s, y, null, "\\enspace"), a(o, s, y, null, "\\qquad"), a(o, s, y, null, "\\quad"), a(o, s, y, "\xa0", "\\space"), a(o, s, y, "\xa0", "\\nobreakspace"), a(i, s, v, ",", ","), a(i, s, v, ";", ";"), a(i, s, v, ":", "\\colon"), a(i, l, c, "\u22bc", "\\barwedge", !0), a(i, l, c, "\u22bb", "\\veebar", !0), a(i, s, c, "\u2299", "\\odot", !0), a(i, s, c, "\u2295", "\\oplus", !0), a(i, s, c, "\u2297", "\\otimes", !0), a(i, s, b, "\u2202", "\\partial", !0), a(i, s, c, "\u2298", "\\oslash", !0), a(i, l, c, "\u229a", "\\circledcirc", !0), a(i, l, c, "\u22a1", "\\boxdot", !0), a(i, s, c, "\u25b3", "\\bigtriangleup"), a(i, s, c, "\u25bd", "\\bigtriangledown"), a(i, s, c, "\u2020", "\\dagger"), a(i, s, c, "\u22c4", "\\diamond"), a(i, s, c, "\u22c6", "\\star"), a(i, s, c, "\u25c3", "\\triangleleft"), a(i, s, c, "\u25b9", "\\triangleright"), a(i, s, f, "{", "\\{"), a(o, s, b, "{", "\\{"), a(o, s, b, "{", "\\textbraceleft"), a(i, s, h, "}", "\\}"), a(o, s, b, "}", "\\}"), a(o, s, b, "}", "\\textbraceright"), a(i, s, f, "{", "\\lbrace"), a(i, s, h, "}", "\\rbrace"), a(i, s, f, "[", "\\lbrack"), a(i, s, h, "]", "\\rbrack"), a(o, s, b, "<", "\\textless"), a(o, s, b, ">", "\\textgreater"), a(i, s, f, "\u230a", "\\lfloor"), a(i, s, h, "\u230b", "\\rfloor"), a(i, s, f, "\u2308", "\\lceil"), a(i, s, h, "\u2309", "\\rceil"), a(i, s, b, "\\", "\\backslash"), a(i, s, b, "\u2223", "|"), a(i, s, b, "\u2223", "\\vert"), a(o, s, b, "|", "\\textbar"), a(i, s, b, "\u2225", "\\|"), a(i, s, b, "\u2225", "\\Vert"), a(o, s, b, "\u2225", "\\textbardbl"), a(i, s, g, "\u2191", "\\uparrow", !0), a(i, s, g, "\u21d1", "\\Uparrow", !0), a(i, s, g, "\u2193", "\\downarrow", !0), a(i, s, g, "\u21d3", "\\Downarrow", !0), a(i, s, g, "\u2195", "\\updownarrow", !0), a(i, s, g, "\u21d5", "\\Updownarrow", !0), a(i, s, d, "\u2210", "\\coprod"), a(i, s, d, "\u22c1", "\\bigvee"), a(i, s, d, "\u22c0", "\\bigwedge"), a(i, s, d, "\u2a04", "\\biguplus"), a(i, s, d, "\u22c2", "\\bigcap"), a(i, s, d, "\u22c3", "\\bigcup"), a(i, s, d, "\u222b", "\\int"), a(i, s, d, "\u222b", "\\intop"), a(i, s, d, "\u222c", "\\iint"), a(i, s, d, "\u222d", "\\iiint"), a(i, s, d, "\u220f", "\\prod"), a(i, s, d, "\u2211", "\\sum"), a(i, s, d, "\u2a02", "\\bigotimes"), a(i, s, d, "\u2a01", "\\bigoplus"), a(i, s, d, "\u2a00", "\\bigodot"), a(i, s, d, "\u222e", "\\oint"), a(i, s, d, "\u2a06", "\\bigsqcup"), a(i, s, d, "\u222b", "\\smallint"), a(o, s, p, "\u2026", "\\textellipsis"), a(i, s, p, "\u2026", "\\mathellipsis"), a(o, s, p, "\u2026", "\\ldots", !0), a(i, s, p, "\u2026", "\\ldots", !0), a(i, s, p, "\u22ef", "\\@cdots", !0), a(i, s, p, "\u22f1", "\\ddots", !0), a(i, s, b, "\u22ee", "\\vdots", !0), a(i, s, u, "\u02ca", "\\acute"), a(i, s, u, "\u02cb", "\\grave"), a(i, s, u, "\xa8", "\\ddot"), a(i, s, u, "~", "\\tilde"), a(i, s, u, "\u02c9", "\\bar"), a(i, s, u, "\u02d8", "\\breve"), a(i, s, u, "\u02c7", "\\check"), a(i, s, u, "^", "\\hat"), a(i, s, u, "\u20d7", "\\vec"), a(i, s, u, "\u02d9", "\\dot"), a(i, s, u, "\u02da", "\\mathring"), a(i, s, m, "\u0131", "\\imath", !0), a(i, s, m, "\u0237", "\\jmath", !0), a(o, s, b, "\u0131", "\\i", !0), a(o, s, b, "\u0237", "\\j", !0), a(o, s, b, "\xdf", "\\ss", !0), a(o, s, b, "\xe6", "\\ae", !0), a(o, s, b, "\xe6", "\\ae", !0), a(o, s, b, "\u0153", "\\oe", !0), a(o, s, b, "\xf8", "\\o", !0), a(o, s, b, "\xc6", "\\AE", !0), a(o, s, b, "\u0152", "\\OE", !0), a(o, s, b, "\xd8", "\\O", !0), a(o, s, u, "\u02ca", "\\'"), a(o, s, u, "\u02cb", "\\`"), a(o, s, u, "\u02c6", "\\^"), a(o, s, u, "\u02dc", "\\~"), a(o, s, u, "\u02c9", "\\="), a(o, s, u, "\u02d8", "\\u"), a(o, s, u, "\u02d9", "\\."), a(o, s, u, "\u02da", "\\r"), a(o, s, u, "\u02c7", "\\v"), a(o, s, u, "\xa8", '\\"'), a(o, s, u, "\u02dd", "\\H"), a(o, s, b, "\u2013", "--"), a(o, s, b, "\u2013", "\\textendash"), a(o, s, b, "\u2014", "---"), a(o, s, b, "\u2014", "\\textemdash"), a(o, s, b, "\u2018", "`"), a(o, s, b, "\u2018", "\\textquoteleft"), a(o, s, b, "\u2019", "'"), a(o, s, b, "\u2019", "\\textquoteright"), a(o, s, b, "\u201c", "``"), a(o, s, b, "\u201c", "\\textquotedblleft"), a(o, s, b, "\u201d", "''"), a(o, s, b, "\u201d", "\\textquotedblright"), a(i, s, b, "\xb0", "\\degree"), a(o, s, b, "\xb0", "\\degree"), a(i, s, m, "\xa3", "\\pounds"), a(i, s, m, "\xa3", "\\mathsterling", !0), a(o, s, m, "\xa3", "\\pounds"), a(o, s, m, "\xa3", "\\textsterling", !0), a(i, l, b, "\u2720", "\\maltese"), a(o, l, b, "\u2720", "\\maltese"), a(o, s, y, "\xa0", "\\ "), a(o, s, y, "\xa0", " "), a(o, s, y, "\xa0", "~");
    for (var x = '0123456789/@."', w = 0; w < x.length; w++) {
      var k = x.charAt(w);
      a(i, s, b, k, k)
    }
    for (var M = '0123456789!@*()-=+[]<>|";:?/.,', S = 0; S < M.length; S++) {
      var z = M.charAt(S);
      a(o, s, b, z, z)
    }
    for (var O = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", T = 0; T < O.length; T++) {
      var A = O.charAt(T);
      a(i, s, m, A, A), a(o, s, b, A, A)
    }
    for (var N = 0; N < "\xc7\xd0\xde\xe7\xfe".length; N++) {
      var B = "\xc7\xd0\xde\xe7\xfe".charAt(N);
      a(i, s, m, B, B), a(o, s, b, B, B)
    }
    a(o, s, b, "\xf0", "\xf0"), a(o, s, b, "\u2013", "\u2013"), a(o, s, b, "\u2014", "\u2014"), a(o, s, b, "\u2018", "\u2018"), a(o, s, b, "\u2019", "\u2019"), a(o, s, b, "\u201c", "\u201c"), a(o, s, b, "\u201d", "\u201d")
  }, function(e, t, r) {
    var n = r(38);
    e.exports = function(e) {
      return Object(n(e))
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(42),
      a = r(59),
      i = {
        slant: [.25, .25, .25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [.431, .431, .431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [.677, .732, .925],
        num2: [.394, .384, .387],
        num3: [.444, .471, .504],
        denom1: [.686, .752, 1.025],
        denom2: [.345, .344, .532],
        sup1: [.413, .503, .504],
        sup2: [.363, .431, .404],
        sup3: [.289, .286, .294],
        sub1: [.15, .143, .2],
        sub2: [.247, .286, .4],
        supDrop: [.386, .353, .494],
        subDrop: [.05, .071, .1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [.25, .25, .25],
        defaultRuleThickness: [.04, .049, .049],
        bigOpSpacing1: [.111, .111, .111],
        bigOpSpacing2: [.166, .166, .166],
        bigOpSpacing3: [.2, .2, .2],
        bigOpSpacing4: [.6, .611, .611],
        bigOpSpacing5: [.1, .143, .143],
        sqrtRuleThickness: [.04, .04, .04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [.2, .2, .2]
      },
      o = {
        "\xc5": "A",
        "\xc7": "C",
        "\xd0": "D",
        "\xde": "o",
        "\xe5": "a",
        "\xe7": "c",
        "\xf0": "d",
        "\xfe": "o",
        "\u0410": "A",
        "\u0411": "B",
        "\u0412": "B",
        "\u0413": "F",
        "\u0414": "A",
        "\u0415": "E",
        "\u0416": "K",
        "\u0417": "3",
        "\u0418": "N",
        "\u0419": "N",
        "\u041a": "K",
        "\u041b": "N",
        "\u041c": "M",
        "\u041d": "H",
        "\u041e": "O",
        "\u041f": "N",
        "\u0420": "P",
        "\u0421": "C",
        "\u0422": "T",
        "\u0423": "y",
        "\u0424": "O",
        "\u0425": "X",
        "\u0426": "U",
        "\u0427": "h",
        "\u0428": "W",
        "\u0429": "W",
        "\u042a": "B",
        "\u042b": "X",
        "\u042c": "B",
        "\u042d": "3",
        "\u042e": "X",
        "\u042f": "R",
        "\u0430": "a",
        "\u0431": "b",
        "\u0432": "a",
        "\u0433": "r",
        "\u0434": "y",
        "\u0435": "e",
        "\u0436": "m",
        "\u0437": "e",
        "\u0438": "n",
        "\u0439": "n",
        "\u043a": "n",
        "\u043b": "n",
        "\u043c": "m",
        "\u043d": "n",
        "\u043e": "o",
        "\u043f": "n",
        "\u0440": "p",
        "\u0441": "c",
        "\u0442": "o",
        "\u0443": "y",
        "\u0444": "b",
        "\u0445": "x",
        "\u0446": "n",
        "\u0447": "n",
        "\u0448": "w",
        "\u0449": "w",
        "\u044a": "a",
        "\u044b": "m",
        "\u044c": "a",
        "\u044d": "e",
        "\u044e": "m",
        "\u044f": "r"
      },
      s = {};
    t.a = {
      getFontMetrics: function(e) {
        var t = void 0;
        if (!s[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
          var r = s[t] = {
            cssEmPerMu: i.quad[t] / 18
          };
          for (var n in i) i.hasOwnProperty(n) && (r[n] = i[n][t])
        }
        return s[t]
      },
      getCharacterMetrics: function(e, t, r) {
        if (!a.a[t]) throw new Error("Font metrics not found for font: " + t + ".");
        var i = e.charCodeAt(0);
        e[0] in o && (i = o[e[0]].charCodeAt(0));
        var s = a.a[t][i];
        if (s || "text" !== r || Object(n.b)(i) && (s = a.a[t][77]), s) return {
          depth: s[0],
          height: s[1],
          italic: s[2],
          skew: s[3],
          width: s[4]
        }
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(66),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = function() {
        function e(t, r, n) {
          o()(this, e), this.lexer = t, this.start = r, this.end = n, a()(this)
        }
        return l()(e, null, [{
          key: "range",
          value: function(t, r) {
            return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc
          }
        }]), e
      }();
    t.a = u
  }, function(e, t) {
    var r = 0,
      n = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
    }
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(5);
    t.a = function e(t) {
      a()(this, e), t = t || {}, this.displayMode = i.a.deflt(t.displayMode, !1), this.throwOnError = i.a.deflt(t.throwOnError, !0), this.errorColor = i.a.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.colorIsTextColor = i.a.deflt(t.colorIsTextColor, !1), this.maxSize = Math.max(0, i.a.deflt(t.maxSize, 1 / 0))
    }
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n, a = r(79),
      i = (n = a) && n.__esModule ? n : {
        default: n
      };
    t.default = function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
      return (0, i.default)(e)
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(81)(!0);
    r(48)(String, "String", function(e) {
      this._t = String(e), this._i = 0
    }, function() {
      var e, t = this._t,
        r = this._i;
      return r >= t.length ? {
        value: void 0,
        done: !0
      } : (e = n(t, r), this._i += e.length, {
        value: e,
        done: !1
      })
    })
  }, function(e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
    }
  }, function(e, t) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e
    }
  }, function(e, t, r) {
    var n = r(87),
      a = r(53);
    e.exports = Object.keys || function(e) {
      return n(e, a)
    }
  }, function(e, t, r) {
    var n = r(49),
      a = r(38);
    e.exports = function(e) {
      return n(a(e))
    }
  }, function(e, t, r) {
    var n = r(52)("keys"),
      a = r(32);
    e.exports = function(e) {
      return n[e] || (n[e] = a(e))
    }
  }, function(e, t, r) {
    "use strict";
    t.a = function(e) {
      var t = !0,
        r = !1,
        n = void 0;
      try {
        for (var a, i = o()(s); !(t = (a = i.next()).done); t = !0) {
          var l = a.value,
            u = !0,
            c = !1,
            h = void 0;
          try {
            for (var p, m = o()(l.blocks); !(u = (p = m.next()).done); u = !0) {
              var d = p.value;
              if (e >= d[0] && e <= d[1]) return l.name
            }
          } catch (e) {
            c = !0, h = e
          } finally {
            try {
              !u && m.return && m.return()
            } finally {
              if (c) throw h
            }
          }
        }
      } catch (e) {
        r = !0, n = e
      } finally {
        try {
          !t && i.return && i.return()
        } finally {
          if (r) throw n
        }
      }
      return null
    }, t.b = function(e) {
      for (var t = 0; t < l.length; t += 2)
        if (e >= l[t] && e <= l[t + 1]) return !0;
      return !1
    };
    var n = r(35),
      a = r.n(n),
      i = r(18),
      o = r.n(i),
      s = [{
        name: "latin",
        blocks: [
          [256, 591],
          [768, 879]
        ]
      }, {
        name: "cyrillic",
        blocks: [
          [1024, 1279]
        ]
      }, {
        name: "brahmic",
        blocks: [
          [2304, 4255]
        ]
      }, {
        name: "georgian",
        blocks: [
          [4256, 4351]
        ]
      }, {
        name: "cjk",
        blocks: [
          [12288, 12543],
          [19968, 40879],
          [65280, 65376]
        ]
      }, {
        name: "hangul",
        blocks: [
          [44032, 55215]
        ]
      }];
    var l = [];
    s.forEach(function(e) {
      return e.blocks.forEach(function(e) {
        return l.push.apply(l, a()(e))
      })
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(30),
      l = [
        [1, 1, 1],
        [2, 1, 1],
        [3, 1, 1],
        [4, 2, 1],
        [5, 2, 1],
        [6, 3, 1],
        [7, 4, 2],
        [8, 6, 3],
        [9, 7, 6],
        [10, 8, 7],
        [11, 10, 9]
      ],
      u = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
      c = function(e, t) {
        return t.size < 2 ? e : l[e - 1][t.size - 1]
      },
      h = function() {
        function e(t) {
          a()(this, e), this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.fontFamily = t.fontFamily, this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = u[this.size - 1], this.maxSize = t.maxSize, this._fontMetrics = void 0
        }
        return o()(e, [{
          key: "extend",
          value: function(t) {
            var r = {
              style: this.style,
              size: this.size,
              textSize: this.textSize,
              color: this.color,
              phantom: this.phantom,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
              fontShape: this.fontShape,
              maxSize: this.maxSize
            };
            for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
            return new e(r)
          }
        }, {
          key: "havingStyle",
          value: function(e) {
            return this.style === e ? this : this.extend({
              style: e,
              size: c(this.textSize, e)
            })
          }
        }, {
          key: "havingCrampedStyle",
          value: function() {
            return this.havingStyle(this.style.cramp())
          }
        }, {
          key: "havingSize",
          value: function(e) {
            return this.size === e && this.textSize === e ? this : this.extend({
              style: this.style.text(),
              size: e,
              textSize: e,
              sizeMultiplier: u[e - 1]
            })
          }
        }, {
          key: "havingBaseStyle",
          value: function(t) {
            t = t || this.style.text();
            var r = c(e.BASESIZE, t);
            return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
              style: t,
              size: r
            })
          }
        }, {
          key: "withColor",
          value: function(e) {
            return this.extend({
              color: e
            })
          }
        }, {
          key: "withPhantom",
          value: function() {
            return this.extend({
              phantom: !0
            })
          }
        }, {
          key: "withFontFamily",
          value: function(e) {
            return this.extend({
              fontFamily: e || this.fontFamily
            })
          }
        }, {
          key: "withFontWeight",
          value: function(e) {
            return this.extend({
              fontWeight: e
            })
          }
        }, {
          key: "withFontShape",
          value: function(e) {
            return this.extend({
              fontShape: e
            })
          }
        }, {
          key: "sizingClasses",
          value: function(e) {
            return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
          }
        }, {
          key: "baseSizingClasses",
          value: function() {
            return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : []
          }
        }, {
          key: "fontMetrics",
          value: function() {
            return this._fontMetrics || (this._fontMetrics = s.a.getFontMetrics(this.size)), this._fontMetrics
          }
        }, {
          key: "getColor",
          value: function() {
            return this.phantom ? "transparent" : null != this.color && e.colorMap.hasOwnProperty(this.color) ? e.colorMap[this.color] : this.color
          }
        }]), e
      }();
    h.BASESIZE = 6, h.colorMap = {
      "katex-blue": "#6495ed",
      "katex-orange": "#ffa500",
      "katex-pink": "#ff00af",
      "katex-red": "#df0030",
      "katex-green": "#28ae7b",
      "katex-gray": "gray",
      "katex-purple": "#9d38bd",
      "katex-blueA": "#ccfaff",
      "katex-blueB": "#80f6ff",
      "katex-blueC": "#63d9ea",
      "katex-blueD": "#11accd",
      "katex-blueE": "#0c7f99",
      "katex-tealA": "#94fff5",
      "katex-tealB": "#26edd5",
      "katex-tealC": "#01d1c1",
      "katex-tealD": "#01a995",
      "katex-tealE": "#208170",
      "katex-greenA": "#b6ffb0",
      "katex-greenB": "#8af281",
      "katex-greenC": "#74cf70",
      "katex-greenD": "#1fab54",
      "katex-greenE": "#0d923f",
      "katex-goldA": "#ffd0a9",
      "katex-goldB": "#ffbb71",
      "katex-goldC": "#ff9c39",
      "katex-goldD": "#e07d10",
      "katex-goldE": "#a75a05",
      "katex-redA": "#fca9a9",
      "katex-redB": "#ff8482",
      "katex-redC": "#f9685d",
      "katex-redD": "#e84d39",
      "katex-redE": "#bc2612",
      "katex-maroonA": "#ffbde0",
      "katex-maroonB": "#ff92c6",
      "katex-maroonC": "#ed5fa6",
      "katex-maroonD": "#ca337c",
      "katex-maroonE": "#9e034e",
      "katex-purpleA": "#ddd7ff",
      "katex-purpleB": "#c6b9fc",
      "katex-purpleC": "#aa87ff",
      "katex-purpleD": "#7854ab",
      "katex-purpleE": "#543b78",
      "katex-mintA": "#f5f9e8",
      "katex-mintB": "#edf2df",
      "katex-mintC": "#e0e5cc",
      "katex-grayA": "#f6f7f7",
      "katex-grayB": "#f0f1f2",
      "katex-grayC": "#e3e5e6",
      "katex-grayD": "#d6d8da",
      "katex-grayE": "#babec2",
      "katex-grayF": "#888d93",
      "katex-grayG": "#626569",
      "katex-grayH": "#3b3e40",
      "katex-grayI": "#21242c",
      "katex-kaBlue": "#314453",
      "katex-kaGreen": "#71B307"
    }, t.a = h
  }, function(e, t, r) {
    "use strict";
    var n = r(6),
      a = r(9),
      i = r(12),
      o = r(0),
      s = r(30),
      l = r(28),
      u = r(5),
      c = function(e, t, r) {
        return l.a.math[e] && l.a.math[e].replace ? s.a.getCharacterMetrics(l.a.math[e].replace, t, r) : s.a.getCharacterMetrics(e, t, r)
      },
      h = function(e, t, r, n) {
        var a = r.havingBaseStyle(t),
          i = o.a.makeSpan((n || []).concat(a.sizingClasses(r)), [e], r);
        return i.delimSizeMultiplier = a.sizeMultiplier / r.sizeMultiplier, i.height *= i.delimSizeMultiplier, i.depth *= i.delimSizeMultiplier, i.maxFontSize = a.sizeMultiplier, i
      },
      p = function(e, t, r) {
        var n = t.havingBaseStyle(r),
          a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
        e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a
      },
      m = function(e, t, r, n, i, s) {
        var l, u, c, m, d = (l = e, u = t, c = i, m = n, o.a.makeSymbol(l, "Size" + u + "-Regular", c, m)),
          f = h(o.a.makeSpan(["delimsizing", "size" + t], [d], n), a.a.TEXT, n, s);
        return r && p(f, n, a.a.TEXT), f
      },
      d = function(e, t, r) {
        var n = void 0;
        return "Size1-Regular" === t ? n = "delim-size1" : "Size4-Regular" === t && (n = "delim-size4"), {
          type: "elem",
          elem: o.a.makeSpan(["delimsizinginner", n], [o.a.makeSpan([], [o.a.makeSymbol(e, t, r)])])
        }
      },
      f = function(e, t, r, n, i, s) {
        var l = void 0,
          u = void 0,
          p = void 0,
          m = void 0;
        l = p = m = e, u = null;
        var f = "Size1-Regular";
        "\\uparrow" === e ? p = m = "\u23d0" : "\\Uparrow" === e ? p = m = "\u2016" : "\\downarrow" === e ? l = p = "\u23d0" : "\\Downarrow" === e ? l = p = "\u2016" : "\\updownarrow" === e ? (l = "\\uparrow", p = "\u23d0", m = "\\downarrow") : "\\Updownarrow" === e ? (l = "\\Uparrow", p = "\u2016", m = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (l = "\u23a1", p = "\u23a2", m = "\u23a3", f = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (l = "\u23a4", p = "\u23a5", m = "\u23a6", f = "Size4-Regular") : "\\lfloor" === e ? (p = l = "\u23a2", m = "\u23a3", f = "Size4-Regular") : "\\lceil" === e ? (l = "\u23a1", p = m = "\u23a2", f = "Size4-Regular") : "\\rfloor" === e ? (p = l = "\u23a5", m = "\u23a6", f = "Size4-Regular") : "\\rceil" === e ? (l = "\u23a4", p = m = "\u23a5", f = "Size4-Regular") : "(" === e ? (l = "\u239b", p = "\u239c", m = "\u239d", f = "Size4-Regular") : ")" === e ? (l = "\u239e", p = "\u239f", m = "\u23a0", f = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (l = "\u23a7", u = "\u23a8", m = "\u23a9", p = "\u23aa", f = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (l = "\u23ab", u = "\u23ac", m = "\u23ad", p = "\u23aa", f = "Size4-Regular") : "\\lgroup" === e ? (l = "\u23a7", m = "\u23a9", p = "\u23aa", f = "Size4-Regular") : "\\rgroup" === e ? (l = "\u23ab", m = "\u23ad", p = "\u23aa", f = "Size4-Regular") : "\\lmoustache" === e ? (l = "\u23a7", m = "\u23ad", p = "\u23aa", f = "Size4-Regular") : "\\rmoustache" === e && (l = "\u23ab", m = "\u23a9", p = "\u23aa", f = "Size4-Regular");
        var v = c(l, f, i),
          g = v.height + v.depth,
          y = c(p, f, i),
          b = y.height + y.depth,
          x = c(m, f, i),
          w = x.height + x.depth,
          k = 0,
          M = 1;
        if (null !== u) {
          var S = c(u, f, i);
          k = S.height + S.depth, M = 2
        }
        var z = g + w + k,
          O = Math.ceil((t - z) / (M * b)),
          T = z + O * M * b,
          A = n.fontMetrics().axisHeight;
        r && (A *= n.sizeMultiplier);
        var N = T / 2 - A,
          B = [];
        if (B.push(d(m, f, i)), null === u)
          for (var q = 0; q < O; q++) B.push(d(p, f, i));
        else {
          for (var C = 0; C < O; C++) B.push(d(p, f, i));
          B.push(d(u, f, i));
          for (var E = 0; E < O; E++) B.push(d(p, f, i))
        }
        B.push(d(l, f, i));
        var j = n.havingBaseStyle(a.a.TEXT),
          R = o.a.makeVList({
            positionType: "bottom",
            positionData: N,
            children: B
          }, j);
        return h(o.a.makeSpan(["delimsizing", "mult"], [R], j), a.a.TEXT, n, s)
      },
      v = function(e, t, r, n) {
        var a = void 0;
        "sqrtTall" === e && (a = "M702 80H400000v40H742v" + (r - 54 - 80) + "l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");
        var s = new i.a.pathNode(e, a),
          l = new i.a.svgNode([s], {
            width: "400em",
            height: t + "em",
            viewBox: "0 0 400000 " + r,
            preserveAspectRatio: "xMinYMin slice"
          });
        return o.a.makeSpan(["hide-tail"], [l], n)
      },
      g = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
      y = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
      b = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
      x = [0, 1.2, 1.8, 2.4, 3],
      w = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }],
      k = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "stack"
      }],
      M = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }, {
        type: "stack"
      }],
      S = function(e, t, r, n) {
        for (var a, i = Math.min(2, 3 - n.style.size); i < r.length && "stack" !== r[i].type; i++) {
          var o = c(e, "small" === (a = r[i]).type ? "Main-Regular" : "large" === a.type ? "Size" + a.size + "-Regular" : "stack" === a.type ? "Size4-Regular" : void 0, "math"),
            s = o.height + o.depth;
          if ("small" === r[i].type && (s *= n.havingBaseStyle(r[i].style).sizeMultiplier), s > t) return r[i]
        }
        return r[r.length - 1]
      },
      z = function(e, t, r, n, a, i) {
        "<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle");
        var s = void 0;
        s = u.a.contains(b, e) ? w : u.a.contains(g, e) ? M : k;
        var l, c, d, v, y, x, z, O, T = S(e, t, s, n);
        return "small" === T.type ? (l = e, c = T.style, d = r, v = n, y = a, x = i, z = o.a.makeSymbol(l, "Main-Regular", y, v), O = h(z, c, v, x), d && p(O, v, c), O) : "large" === T.type ? m(e, T.size, r, n, a, i) : f(e, t, r, n, a, i)
      };
    t.a = {
      sqrtImage: function(e, t) {
        var r = S("\\surd", e, M, t),
          n = void 0,
          a = t.sizeMultiplier,
          i = 0,
          o = 0,
          s = 0;
        "small" === r.type ? (s = 1080, o = 1 * (a = t.havingBaseStyle(r.style).sizeMultiplier / t.sizeMultiplier), (n = v("sqrtMain", i = 1.08 * a, s, t)).style.minWidth = "0.853em", n.advanceWidth = .833 * a) : "large" === r.type ? (s = 1080 * x[r.size], o = x[r.size] / a, i = (x[r.size] + .08) / a, (n = v("sqrtSize" + r.size, i, s, t)).style.minWidth = "1.02em", n.advanceWidth = 1 / a) : (i = e / a + .08, o = e / a, s = Math.floor(1e3 * e) + 80, (n = v("sqrtTall", i, s, t)).style.minWidth = "0.742em", n.advanceWidth = 1.056 / a);
        return n.height = o, n.style.height = i + "em", {
          span: n,
          ruleWidth: t.fontMetrics().sqrtRuleThickness * a
        }
      },
      sizedDelim: function(e, t, r, a, i) {
        if ("<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), u.a.contains(g, e) || u.a.contains(b, e)) return m(e, t, !1, r, a, i);
        if (u.a.contains(y, e)) return f(e, x[t], !1, r, a, i);
        throw new n.a("Illegal delimiter: '" + e + "'")
      },
      customSizedDelim: z,
      leftRightDelim: function(e, t, r, n, a, i) {
        var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
          s = 5 / n.fontMetrics().ptPerEm,
          l = Math.max(t - o, r + o),
          u = Math.max(l / 500 * 901, 2 * l - s);
        return z(e, u, !0, n, a, i)
      }
    }
  }, function(e, t, r) {
    var n = r(20),
      a = r(16).document,
      i = n(a) && n(a.createElement);
    e.exports = function(e) {
      return i ? a.createElement(e) : {}
    }
  }, function(e, t, r) {
    var n = r(25),
      a = r(8),
      i = r(24);
    e.exports = function(e, t) {
      var r = (a.Object || {})[e] || Object[e],
        o = {};
      o[e] = t(r), n(n.S + n.F * i(function() {
        r(1)
      }), "Object", o)
    }
  }, function(e, t, r) {
    var n = r(72);
    e.exports = function(e, t, r) {
      if (n(e), void 0 === t) return e;
      switch (r) {
        case 1:
          return function(r) {
            return e.call(t, r)
          };
        case 2:
          return function(r, n) {
            return e.call(t, r, n)
          };
        case 3:
          return function(r, n, a) {
            return e.call(t, r, n, a)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(82),
      a = r(25),
      i = r(83),
      o = r(26),
      s = r(21),
      l = r(17),
      u = r(84),
      c = r(54),
      h = r(91),
      p = r(11)("iterator"),
      m = !([].keys && "next" in [].keys()),
      d = "values",
      f = function() {
        return this
      };
    e.exports = function(e, t, r, v, g, y, b) {
      u(r, t, v);
      var x, w, k, M = function(e) {
          if (!m && e in T) return T[e];
          switch (e) {
            case "keys":
            case d:
              return function() {
                return new r(this, e)
              }
          }
          return function() {
            return new r(this, e)
          }
        },
        S = t + " Iterator",
        z = g == d,
        O = !1,
        T = e.prototype,
        A = T[p] || T["@@iterator"] || g && T[g],
        N = A || M(g),
        B = g ? z ? M("entries") : N : void 0,
        q = "Array" == t && T.entries || A;
      if (q && (k = h(q.call(new e))) !== Object.prototype && (c(k, S, !0), n || s(k, p) || o(k, p, f)), z && A && A.name !== d && (O = !0, N = function() {
          return A.call(this)
        }), n && !b || !m && !O && T[p] || o(T, p, N), l[t] = N, l[S] = f, g)
        if (x = {
            values: z ? N : M(d),
            keys: y ? N : M("keys"),
            entries: B
          }, b)
          for (w in x) w in T || i(T, w, x[w]);
        else a(a.P + a.F * (m || O), t, x);
      return x
    }
  }, function(e, t, r) {
    var n = r(50);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
      return "String" == n(e) ? e.split("") : Object(e)
    }
  }, function(e, t) {
    var r = {}.toString;
    e.exports = function(e) {
      return r.call(e).slice(8, -1)
    }
  }, function(e, t, r) {
    var n = r(37),
      a = Math.min;
    e.exports = function(e) {
      return e > 0 ? a(n(e), 9007199254740991) : 0
    }
  }, function(e, t, r) {
    var n = r(16),
      a = "__core-js_shared__",
      i = n[a] || (n[a] = {});
    e.exports = function(e) {
      return i[e] || (i[e] = {})
    }
  }, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function(e, t, r) {
    var n = r(15).f,
      a = r(21),
      i = r(11)("toStringTag");
    e.exports = function(e, t, r) {
      e && !a(e = r ? e : e.prototype, i) && n(e, i, {
        configurable: !0,
        value: t
      })
    }
  }, function(e, t, r) {
    var n = r(56),
      a = r(11)("iterator"),
      i = r(17);
    e.exports = r(8).getIteratorMethod = function(e) {
      if (void 0 != e) return e[a] || e["@@iterator"] || i[n(e)]
    }
  }, function(e, t, r) {
    var n = r(50),
      a = r(11)("toStringTag"),
      i = "Arguments" == n(function() {
        return arguments
      }());
    e.exports = function(e) {
      var t, r, o;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
        try {
          return e[t]
        } catch (e) {}
      }(t = Object(e), a)) ? r : i ? n(t) : "Object" == (o = n(t)) && "function" == typeof t.callee ? "Arguments" : o
    }
  }, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = i(r(97)),
      a = i(r(18));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.default = function() {
      return function(e, t) {
        if (Array.isArray(e)) return e;
        if ((0, n.default)(Object(e))) return function(e, t) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (var s, l = (0, a.default)(e); !(n = (s = l.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
          } catch (e) {
            i = !0, o = e
          } finally {
            try {
              !n && l.return && l.return()
            } finally {
              if (i) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
  }, function(e, t, r) {
    r(99);
    for (var n = r(16), a = r(26), i = r(17), o = r(11)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
      var u = s[l],
        c = n[u],
        h = c && c.prototype;
      h && !h[o] && a(h, o, u), i[u] = i.Array
    }
  }, function(e, t, r) {
    "use strict";
    t.a = {
      "AMS-Regular": {
        65: [0, .68889, 0, 0, .72222],
        66: [0, .68889, 0, 0, .66667],
        67: [0, .68889, 0, 0, .72222],
        68: [0, .68889, 0, 0, .72222],
        69: [0, .68889, 0, 0, .66667],
        70: [0, .68889, 0, 0, .61111],
        71: [0, .68889, 0, 0, .77778],
        72: [0, .68889, 0, 0, .77778],
        73: [0, .68889, 0, 0, .38889],
        74: [.16667, .68889, 0, 0, .5],
        75: [0, .68889, 0, 0, .77778],
        76: [0, .68889, 0, 0, .66667],
        77: [0, .68889, 0, 0, .94445],
        78: [0, .68889, 0, 0, .72222],
        79: [.16667, .68889, 0, 0, .77778],
        80: [0, .68889, 0, 0, .61111],
        81: [.16667, .68889, 0, 0, .77778],
        82: [0, .68889, 0, 0, .72222],
        83: [0, .68889, 0, 0, .55556],
        84: [0, .68889, 0, 0, .66667],
        85: [0, .68889, 0, 0, .72222],
        86: [0, .68889, 0, 0, .72222],
        87: [0, .68889, 0, 0, 1],
        88: [0, .68889, 0, 0, .72222],
        89: [0, .68889, 0, 0, .72222],
        90: [0, .68889, 0, 0, .66667],
        107: [0, .68889, 0, 0, .55556],
        165: [0, .675, .025, 0, .75],
        174: [.15559, .69224, 0, 0, .94666],
        240: [0, .68889, 0, 0, .55556],
        295: [0, .68889, 0, 0, .54028],
        710: [0, .825, 0, 0, 2.33334],
        732: [0, .9, 0, 0, 2.33334],
        770: [0, .825, 0, 0, 2.33334],
        771: [0, .9, 0, 0, 2.33334],
        989: [.08167, .58167, 0, 0, .77778],
        1008: [0, .43056, .04028, 0, .66667],
        8245: [0, .54986, 0, 0, .275],
        8463: [0, .68889, 0, 0, .54028],
        8487: [0, .68889, 0, 0, .72222],
        8498: [0, .68889, 0, 0, .55556],
        8502: [0, .68889, 0, 0, .66667],
        8503: [0, .68889, 0, 0, .44445],
        8504: [0, .68889, 0, 0, .66667],
        8513: [0, .68889, 0, 0, .63889],
        8592: [-.03598, .46402, 0, 0, .5],
        8594: [-.03598, .46402, 0, 0, .5],
        8602: [-.13313, .36687, 0, 0, 1],
        8603: [-.13313, .36687, 0, 0, 1],
        8606: [.01354, .52239, 0, 0, 1],
        8608: [.01354, .52239, 0, 0, 1],
        8610: [.01354, .52239, 0, 0, 1.11111],
        8611: [.01354, .52239, 0, 0, 1.11111],
        8619: [0, .54986, 0, 0, 1],
        8620: [0, .54986, 0, 0, 1],
        8621: [-.13313, .37788, 0, 0, 1.38889],
        8622: [-.13313, .36687, 0, 0, 1],
        8624: [0, .69224, 0, 0, .5],
        8625: [0, .69224, 0, 0, .5],
        8630: [0, .43056, 0, 0, 1],
        8631: [0, .43056, 0, 0, 1],
        8634: [.08198, .58198, 0, 0, .77778],
        8635: [.08198, .58198, 0, 0, .77778],
        8638: [.19444, .69224, 0, 0, .41667],
        8639: [.19444, .69224, 0, 0, .41667],
        8642: [.19444, .69224, 0, 0, .41667],
        8643: [.19444, .69224, 0, 0, .41667],
        8644: [.1808, .675, 0, 0, 1],
        8646: [.1808, .675, 0, 0, 1],
        8647: [.1808, .675, 0, 0, 1],
        8648: [.19444, .69224, 0, 0, .83334],
        8649: [.1808, .675, 0, 0, 1],
        8650: [.19444, .69224, 0, 0, .83334],
        8651: [.01354, .52239, 0, 0, 1],
        8652: [.01354, .52239, 0, 0, 1],
        8653: [-.13313, .36687, 0, 0, 1],
        8654: [-.13313, .36687, 0, 0, 1],
        8655: [-.13313, .36687, 0, 0, 1],
        8666: [.13667, .63667, 0, 0, 1],
        8667: [.13667, .63667, 0, 0, 1],
        8669: [-.13313, .37788, 0, 0, 1],
        8672: [-.064, .437, 0, 0, 1187],
        8674: [-.064, .437, 0, 0, 1167],
        8705: [0, .825, 0, 0, .5],
        8708: [0, .68889, 0, 0, .55556],
        8709: [.08167, .58167, 0, 0, .77778],
        8717: [0, .43056, 0, 0, .42917],
        8722: [-.03598, .46402, 0, 0, .5],
        8724: [.08198, .69224, 0, 0, .77778],
        8726: [.08167, .58167, 0, 0, .77778],
        8733: [0, .69224, 0, 0, .77778],
        8736: [0, .69224, 0, 0, .72222],
        8737: [0, .69224, 0, 0, .72222],
        8738: [.03517, .52239, 0, 0, .72222],
        8739: [.08167, .58167, 0, 0, .22222],
        8740: [.25142, .74111, 0, 0, .27778],
        8741: [.08167, .58167, 0, 0, .38889],
        8742: [.25142, .74111, 0, 0, .5],
        8756: [0, .69224, 0, 0, .66667],
        8757: [0, .69224, 0, 0, .66667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8765: [-.13313, .37788, 0, 0, .77778],
        8769: [-.13313, .36687, 0, 0, .77778],
        8770: [-.03625, .46375, 0, 0, .77778],
        8774: [.30274, .79383, 0, 0, .77778],
        8776: [-.01688, .48312, 0, 0, .77778],
        8778: [.08167, .58167, 0, 0, .77778],
        8782: [.06062, .54986, 0, 0, .77778],
        8783: [.06062, .54986, 0, 0, .77778],
        8785: [.08198, .58198, 0, 0, .77778],
        8786: [.08198, .58198, 0, 0, .77778],
        8787: [.08198, .58198, 0, 0, .77778],
        8790: [0, .69224, 0, 0, .77778],
        8791: [.22958, .72958, 0, 0, .77778],
        8796: [.08198, .91667, 0, 0, .77778],
        8806: [.25583, .75583, 0, 0, .77778],
        8807: [.25583, .75583, 0, 0, .77778],
        8808: [.25142, .75726, 0, 0, .77778],
        8809: [.25142, .75726, 0, 0, .77778],
        8812: [.25583, .75583, 0, 0, .5],
        8814: [.20576, .70576, 0, 0, .77778],
        8815: [.20576, .70576, 0, 0, .77778],
        8816: [.30274, .79383, 0, 0, .77778],
        8817: [.30274, .79383, 0, 0, .77778],
        8818: [.22958, .72958, 0, 0, .77778],
        8819: [.22958, .72958, 0, 0, .77778],
        8822: [.1808, .675, 0, 0, .77778],
        8823: [.1808, .675, 0, 0, .77778],
        8828: [.13667, .63667, 0, 0, .77778],
        8829: [.13667, .63667, 0, 0, .77778],
        8830: [.22958, .72958, 0, 0, .77778],
        8831: [.22958, .72958, 0, 0, .77778],
        8832: [.20576, .70576, 0, 0, .77778],
        8833: [.20576, .70576, 0, 0, .77778],
        8840: [.30274, .79383, 0, 0, .77778],
        8841: [.30274, .79383, 0, 0, .77778],
        8842: [.13597, .63597, 0, 0, .77778],
        8843: [.13597, .63597, 0, 0, .77778],
        8847: [.03517, .54986, 0, 0, .77778],
        8848: [.03517, .54986, 0, 0, .77778],
        8858: [.08198, .58198, 0, 0, .77778],
        8859: [.08198, .58198, 0, 0, .77778],
        8861: [.08198, .58198, 0, 0, .77778],
        8862: [0, .675, 0, 0, .77778],
        8863: [0, .675, 0, 0, .77778],
        8864: [0, .675, 0, 0, .77778],
        8865: [0, .675, 0, 0, .77778],
        8872: [0, .69224, 0, 0, .61111],
        8873: [0, .69224, 0, 0, .72222],
        8874: [0, .69224, 0, 0, .88889],
        8876: [0, .68889, 0, 0, .61111],
        8877: [0, .68889, 0, 0, .61111],
        8878: [0, .68889, 0, 0, .72222],
        8879: [0, .68889, 0, 0, .72222],
        8882: [.03517, .54986, 0, 0, .77778],
        8883: [.03517, .54986, 0, 0, .77778],
        8884: [.13667, .63667, 0, 0, .77778],
        8885: [.13667, .63667, 0, 0, .77778],
        8888: [0, .54986, 0, 0, 1.11111],
        8890: [.19444, .43056, 0, 0, .55556],
        8891: [.19444, .69224, 0, 0, .61111],
        8892: [.19444, .69224, 0, 0, .61111],
        8901: [0, .54986, 0, 0, .27778],
        8903: [.08167, .58167, 0, 0, .77778],
        8905: [.08167, .58167, 0, 0, .77778],
        8906: [.08167, .58167, 0, 0, .77778],
        8907: [0, .69224, 0, 0, .77778],
        8908: [0, .69224, 0, 0, .77778],
        8909: [-.03598, .46402, 0, 0, .77778],
        8910: [0, .54986, 0, 0, .76042],
        8911: [0, .54986, 0, 0, .76042],
        8912: [.03517, .54986, 0, 0, .77778],
        8913: [.03517, .54986, 0, 0, .77778],
        8914: [0, .54986, 0, 0, .66667],
        8915: [0, .54986, 0, 0, .66667],
        8916: [0, .69224, 0, 0, .66667],
        8918: [.0391, .5391, 0, 0, .77778],
        8919: [.0391, .5391, 0, 0, .77778],
        8920: [.03517, .54986, 0, 0, 1.33334],
        8921: [.03517, .54986, 0, 0, 1.33334],
        8922: [.38569, .88569, 0, 0, .77778],
        8923: [.38569, .88569, 0, 0, .77778],
        8926: [.13667, .63667, 0, 0, .77778],
        8927: [.13667, .63667, 0, 0, .77778],
        8928: [.30274, .79383, 0, 0, .77778],
        8929: [.30274, .79383, 0, 0, .77778],
        8934: [.23222, .74111, 0, 0, .77778],
        8935: [.23222, .74111, 0, 0, .77778],
        8936: [.23222, .74111, 0, 0, .77778],
        8937: [.23222, .74111, 0, 0, .77778],
        8938: [.20576, .70576, 0, 0, .77778],
        8939: [.20576, .70576, 0, 0, .77778],
        8940: [.30274, .79383, 0, 0, .77778],
        8941: [.30274, .79383, 0, 0, .77778],
        8994: [.19444, .69224, 0, 0, .77778],
        8995: [.19444, .69224, 0, 0, .77778],
        9416: [.15559, .69224, 0, 0, .90222],
        9484: [0, .69224, 0, 0, .5],
        9488: [0, .69224, 0, 0, .5],
        9492: [0, .37788, 0, 0, .5],
        9496: [0, .37788, 0, 0, .5],
        9585: [.19444, .68889, 0, 0, .88889],
        9586: [.19444, .74111, 0, 0, .88889],
        9632: [0, .675, 0, 0, .77778],
        9633: [0, .675, 0, 0, .77778],
        9650: [0, .54986, 0, 0, .72222],
        9651: [0, .54986, 0, 0, .72222],
        9654: [.03517, .54986, 0, 0, .77778],
        9660: [0, .54986, 0, 0, .72222],
        9661: [0, .54986, 0, 0, .72222],
        9664: [.03517, .54986, 0, 0, .77778],
        9674: [.11111, .69224, 0, 0, .66667],
        9733: [.19444, .69224, 0, 0, .94445],
        10003: [0, .69224, 0, 0, .83334],
        10016: [0, .69224, 0, 0, .83334],
        10731: [.11111, .69224, 0, 0, .66667],
        10846: [.19444, .75583, 0, 0, .61111],
        10877: [.13667, .63667, 0, 0, .77778],
        10878: [.13667, .63667, 0, 0, .77778],
        10885: [.25583, .75583, 0, 0, .77778],
        10886: [.25583, .75583, 0, 0, .77778],
        10887: [.13597, .63597, 0, 0, .77778],
        10888: [.13597, .63597, 0, 0, .77778],
        10889: [.26167, .75726, 0, 0, .77778],
        10890: [.26167, .75726, 0, 0, .77778],
        10891: [.48256, .98256, 0, 0, .77778],
        10892: [.48256, .98256, 0, 0, .77778],
        10901: [.13667, .63667, 0, 0, .77778],
        10902: [.13667, .63667, 0, 0, .77778],
        10933: [.25142, .75726, 0, 0, .77778],
        10934: [.25142, .75726, 0, 0, .77778],
        10935: [.26167, .75726, 0, 0, .77778],
        10936: [.26167, .75726, 0, 0, .77778],
        10937: [.26167, .75726, 0, 0, .77778],
        10938: [.26167, .75726, 0, 0, .77778],
        10949: [.25583, .75583, 0, 0, .77778],
        10950: [.25583, .75583, 0, 0, .77778],
        10955: [.28481, .79383, 0, 0, .77778],
        10956: [.28481, .79383, 0, 0, .77778],
        57350: [.08167, .58167, 0, 0, .22222],
        57351: [.08167, .58167, 0, 0, .38889],
        57352: [.08167, .58167, 0, 0, .77778],
        57353: [0, .43056, .04028, 0, .66667],
        57356: [.25142, .75726, 0, 0, .77778],
        57357: [.25142, .75726, 0, 0, .77778],
        57358: [.41951, .91951, 0, 0, .77778],
        57359: [.30274, .79383, 0, 0, .77778],
        57360: [.30274, .79383, 0, 0, .77778],
        57361: [.41951, .91951, 0, 0, .77778],
        57366: [.25142, .75726, 0, 0, .77778],
        57367: [.25142, .75726, 0, 0, .77778],
        57368: [.25142, .75726, 0, 0, .77778],
        57369: [.25142, .75726, 0, 0, .77778],
        57370: [.13597, .63597, 0, 0, .77778],
        57371: [.13597, .63597, 0, 0, .77778]
      },
      "Caligraphic-Regular": {
        48: [0, .43056, 0, 0, .5],
        49: [0, .43056, 0, 0, .5],
        50: [0, .43056, 0, 0, .5],
        51: [.19444, .43056, 0, 0, .5],
        52: [.19444, .43056, 0, 0, .5],
        53: [.19444, .43056, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [.19444, .43056, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [.19444, .43056, 0, 0, .5],
        65: [0, .68333, 0, .19445, .79847],
        66: [0, .68333, .03041, .13889, .65681],
        67: [0, .68333, .05834, .13889, .52653],
        68: [0, .68333, .02778, .08334, .77139],
        69: [0, .68333, .08944, .11111, .52778],
        70: [0, .68333, .09931, .11111, .71875],
        71: [.09722, .68333, .0593, .11111, .59487],
        72: [0, .68333, .00965, .11111, .84452],
        73: [0, .68333, .07382, 0, .54452],
        74: [.09722, .68333, .18472, .16667, .67778],
        75: [0, .68333, .01445, .05556, .76195],
        76: [0, .68333, 0, .13889, .68972],
        77: [0, .68333, 0, .13889, 1.2009],
        78: [0, .68333, .14736, .08334, .82049],
        79: [0, .68333, .02778, .11111, .79611],
        80: [0, .68333, .08222, .08334, .69556],
        81: [.09722, .68333, 0, .11111, .81667],
        82: [0, .68333, 0, .08334, .8475],
        83: [0, .68333, .075, .13889, .60556],
        84: [0, .68333, .25417, 0, .54464],
        85: [0, .68333, .09931, .08334, .62583],
        86: [0, .68333, .08222, 0, .61278],
        87: [0, .68333, .08222, .08334, .98778],
        88: [0, .68333, .14643, .13889, .7133],
        89: [.09722, .68333, .08222, .08334, .66834],
        90: [0, .68333, .07944, .13889, .72473]
      },
      "Fraktur-Regular": {
        33: [0, .69141, 0, 0, .29574],
        34: [0, .69141, 0, 0, .21471],
        38: [0, .69141, 0, 0, .73786],
        39: [0, .69141, 0, 0, .21201],
        40: [.24982, .74947, 0, 0, .38865],
        41: [.24982, .74947, 0, 0, .38865],
        42: [0, .62119, 0, 0, .27764],
        43: [.08319, .58283, 0, 0, .75623],
        44: [0, .10803, 0, 0, .27764],
        45: [.08319, .58283, 0, 0, .75623],
        46: [0, .10803, 0, 0, .27764],
        47: [.24982, .74947, 0, 0, .50181],
        48: [0, .47534, 0, 0, .50181],
        49: [0, .47534, 0, 0, .50181],
        50: [0, .47534, 0, 0, .50181],
        51: [.18906, .47534, 0, 0, .50181],
        52: [.18906, .47534, 0, 0, .50181],
        53: [.18906, .47534, 0, 0, .50181],
        54: [0, .69141, 0, 0, .50181],
        55: [.18906, .47534, 0, 0, .50181],
        56: [0, .69141, 0, 0, .50181],
        57: [.18906, .47534, 0, 0, .50181],
        58: [0, .47534, 0, 0, .21606],
        59: [.12604, .47534, 0, 0, .21606],
        61: [-.13099, .36866, 0, 0, .75623],
        63: [0, .69141, 0, 0, .36245],
        65: [0, .69141, 0, 0, .7176],
        66: [0, .69141, 0, 0, .88397],
        67: [0, .69141, 0, 0, .61254],
        68: [0, .69141, 0, 0, .83158],
        69: [0, .69141, 0, 0, .66278],
        70: [.12604, .69141, 0, 0, .61119],
        71: [0, .69141, 0, 0, .78539],
        72: [.06302, .69141, 0, 0, .7203],
        73: [0, .69141, 0, 0, .55448],
        74: [.12604, .69141, 0, 0, .55231],
        75: [0, .69141, 0, 0, .66845],
        76: [0, .69141, 0, 0, .66602],
        77: [0, .69141, 0, 0, 1.04953],
        78: [0, .69141, 0, 0, .83212],
        79: [0, .69141, 0, 0, .82699],
        80: [.18906, .69141, 0, 0, .82753],
        81: [.03781, .69141, 0, 0, .82699],
        82: [0, .69141, 0, 0, .82807],
        83: [0, .69141, 0, 0, .82861],
        84: [0, .69141, 0, 0, .66899],
        85: [0, .69141, 0, 0, .64576],
        86: [0, .69141, 0, 0, .83131],
        87: [0, .69141, 0, 0, 1.04602],
        88: [0, .69141, 0, 0, .71922],
        89: [.18906, .69141, 0, 0, .83293],
        90: [.12604, .69141, 0, 0, .60201],
        91: [.24982, .74947, 0, 0, .27764],
        93: [.24982, .74947, 0, 0, .27764],
        94: [0, .69141, 0, 0, .49965],
        97: [0, .47534, 0, 0, .50046],
        98: [0, .69141, 0, 0, .51315],
        99: [0, .47534, 0, 0, .38946],
        100: [0, .62119, 0, 0, .49857],
        101: [0, .47534, 0, 0, .40053],
        102: [.18906, .69141, 0, 0, .32626],
        103: [.18906, .47534, 0, 0, .5037],
        104: [.18906, .69141, 0, 0, .52126],
        105: [0, .69141, 0, 0, .27899],
        106: [0, .69141, 0, 0, .28088],
        107: [0, .69141, 0, 0, .38946],
        108: [0, .69141, 0, 0, .27953],
        109: [0, .47534, 0, 0, .76676],
        110: [0, .47534, 0, 0, .52666],
        111: [0, .47534, 0, 0, .48885],
        112: [.18906, .52396, 0, 0, .50046],
        113: [.18906, .47534, 0, 0, .48912],
        114: [0, .47534, 0, 0, .38919],
        115: [0, .47534, 0, 0, .44266],
        116: [0, .62119, 0, 0, .33301],
        117: [0, .47534, 0, 0, .5172],
        118: [0, .52396, 0, 0, .5118],
        119: [0, .52396, 0, 0, .77351],
        120: [.18906, .47534, 0, 0, .38865],
        121: [.18906, .47534, 0, 0, .49884],
        122: [.18906, .47534, 0, 0, .39054],
        8216: [0, .69141, 0, 0, .21471],
        8217: [0, .69141, 0, 0, .21471],
        58112: [0, .62119, 0, 0, .49749],
        58113: [0, .62119, 0, 0, .4983],
        58114: [.18906, .69141, 0, 0, .33328],
        58115: [.18906, .69141, 0, 0, .32923],
        58116: [.18906, .47534, 0, 0, .50343],
        58117: [0, .69141, 0, 0, .33301],
        58118: [0, .62119, 0, 0, .33409],
        58119: [0, .47534, 0, 0, .50073]
      },
      "Main-Bold": {
        33: [0, .69444, 0, 0, .35],
        34: [0, .69444, 0, 0, .60278],
        35: [.19444, .69444, 0, 0, .95833],
        36: [.05556, .75, 0, 0, .575],
        37: [.05556, .75, 0, 0, .95833],
        38: [0, .69444, 0, 0, .89444],
        39: [0, .69444, 0, 0, .31944],
        40: [.25, .75, 0, 0, .44722],
        41: [.25, .75, 0, 0, .44722],
        42: [0, .75, 0, 0, .575],
        43: [.13333, .63333, 0, 0, .89444],
        44: [.19444, .15556, 0, 0, .31944],
        45: [0, .44444, 0, 0, .38333],
        46: [0, .15556, 0, 0, .31944],
        47: [.25, .75, 0, 0, .575],
        48: [0, .64444, 0, 0, .575],
        49: [0, .64444, 0, 0, .575],
        50: [0, .64444, 0, 0, .575],
        51: [0, .64444, 0, 0, .575],
        52: [0, .64444, 0, 0, .575],
        53: [0, .64444, 0, 0, .575],
        54: [0, .64444, 0, 0, .575],
        55: [0, .64444, 0, 0, .575],
        56: [0, .64444, 0, 0, .575],
        57: [0, .64444, 0, 0, .575],
        58: [0, .44444, 0, 0, .31944],
        59: [.19444, .44444, 0, 0, .31944],
        60: [.08556, .58556, 0, 0, .89444],
        61: [-.10889, .39111, 0, 0, .89444],
        62: [.08556, .58556, 0, 0, .89444],
        63: [0, .69444, 0, 0, .54305],
        64: [0, .69444, 0, 0, .89444],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, 0, 0, .81805],
        67: [0, .68611, 0, 0, .83055],
        68: [0, .68611, 0, 0, .88194],
        69: [0, .68611, 0, 0, .75555],
        70: [0, .68611, 0, 0, .72361],
        71: [0, .68611, 0, 0, .90416],
        72: [0, .68611, 0, 0, .9],
        73: [0, .68611, 0, 0, .43611],
        74: [0, .68611, 0, 0, .59444],
        75: [0, .68611, 0, 0, .90138],
        76: [0, .68611, 0, 0, .69166],
        77: [0, .68611, 0, 0, 1.09166],
        78: [0, .68611, 0, 0, .9],
        79: [0, .68611, 0, 0, .86388],
        80: [0, .68611, 0, 0, .78611],
        81: [.19444, .68611, 0, 0, .86388],
        82: [0, .68611, 0, 0, .8625],
        83: [0, .68611, 0, 0, .63889],
        84: [0, .68611, 0, 0, .8],
        85: [0, .68611, 0, 0, .88472],
        86: [0, .68611, .01597, 0, .86944],
        87: [0, .68611, .01597, 0, 1.18888],
        88: [0, .68611, 0, 0, .86944],
        89: [0, .68611, .02875, 0, .86944],
        90: [0, .68611, 0, 0, .70277],
        91: [.25, .75, 0, 0, .31944],
        92: [.25, .75, 0, 0, .575],
        93: [.25, .75, 0, 0, .31944],
        94: [0, .69444, 0, 0, .575],
        95: [.31, .13444, .03194, 0, .575],
        97: [0, .44444, 0, 0, .55902],
        98: [0, .69444, 0, 0, .63889],
        99: [0, .44444, 0, 0, .51111],
        100: [0, .69444, 0, 0, .63889],
        101: [0, .44444, 0, 0, .52708],
        102: [0, .69444, .10903, 0, .35139],
        103: [.19444, .44444, .01597, 0, .575],
        104: [0, .69444, 0, 0, .63889],
        105: [0, .69444, 0, 0, .31944],
        106: [.19444, .69444, 0, 0, .35139],
        107: [0, .69444, 0, 0, .60694],
        108: [0, .69444, 0, 0, .31944],
        109: [0, .44444, 0, 0, .95833],
        110: [0, .44444, 0, 0, .63889],
        111: [0, .44444, 0, 0, .575],
        112: [.19444, .44444, 0, 0, .63889],
        113: [.19444, .44444, 0, 0, .60694],
        114: [0, .44444, 0, 0, .47361],
        115: [0, .44444, 0, 0, .45361],
        116: [0, .63492, 0, 0, .44722],
        117: [0, .44444, 0, 0, .63889],
        118: [0, .44444, .01597, 0, .60694],
        119: [0, .44444, .01597, 0, .83055],
        120: [0, .44444, 0, 0, .60694],
        121: [.19444, .44444, .01597, 0, .60694],
        122: [0, .44444, 0, 0, .51111],
        123: [.25, .75, 0, 0, .575],
        124: [.25, .75, 0, 0, .31944],
        125: [.25, .75, 0, 0, .575],
        126: [.35, .34444, 0, 0, .575],
        168: [0, .69444, 0, 0, .575],
        172: [0, .44444, 0, 0, .76666],
        176: [0, .69444, 0, 0, .86944],
        177: [.13333, .63333, 0, 0, .89444],
        198: [0, .68611, 0, 0, 1.04166],
        215: [.13333, .63333, 0, 0, .89444],
        216: [.04861, .73472, 0, 0, .89444],
        223: [0, .69444, 0, 0, .59722],
        230: [0, .44444, 0, 0, .83055],
        247: [.13333, .63333, 0, 0, .89444],
        248: [.09722, .54167, 0, 0, .575],
        305: [0, .44444, 0, 0, .31944],
        338: [0, .68611, 0, 0, 1.16944],
        339: [0, .44444, 0, 0, .89444],
        567: [.19444, .44444, 0, 0, .35139],
        710: [0, .69444, 0, 0, .575],
        711: [0, .63194, 0, 0, .575],
        713: [0, .59611, 0, 0, .575],
        714: [0, .69444, 0, 0, .575],
        715: [0, .69444, 0, 0, .575],
        728: [0, .69444, 0, 0, .575],
        729: [0, .69444, 0, 0, .31944],
        730: [0, .69444, 0, 0, .86944],
        732: [0, .69444, 0, 0, .575],
        733: [0, .69444, 0, 0, .575],
        824: [.19444, .69444, 0, 0, 0],
        915: [0, .68611, 0, 0, .69166],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, 0, 0, .89444],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, 0, 0, .76666],
        928: [0, .68611, 0, 0, .9],
        931: [0, .68611, 0, 0, .83055],
        933: [0, .68611, 0, 0, .89444],
        934: [0, .68611, 0, 0, .83055],
        936: [0, .68611, 0, 0, .89444],
        937: [0, .68611, 0, 0, .83055],
        8211: [0, .44444, .03194, 0, .575],
        8212: [0, .44444, .03194, 0, 1.14999],
        8216: [0, .69444, 0, 0, .31944],
        8217: [0, .69444, 0, 0, .31944],
        8220: [0, .69444, 0, 0, .60278],
        8221: [0, .69444, 0, 0, .60278],
        8224: [.19444, .69444, 0, 0, .51111],
        8225: [.19444, .69444, 0, 0, .51111],
        8242: [0, .55556, 0, 0, .34444],
        8407: [0, .72444, .15486, 0, .575],
        8463: [0, .69444, 0, 0, .66759],
        8465: [0, .69444, 0, 0, .83055],
        8467: [0, .69444, 0, 0, .47361],
        8472: [.19444, .44444, 0, 0, .74027],
        8476: [0, .69444, 0, 0, .83055],
        8501: [0, .69444, 0, 0, .70277],
        8592: [-.10889, .39111, 0, 0, 1.14999],
        8593: [.19444, .69444, 0, 0, .575],
        8594: [-.10889, .39111, 0, 0, 1.14999],
        8595: [.19444, .69444, 0, 0, .575],
        8596: [-.10889, .39111, 0, 0, 1.14999],
        8597: [.25, .75, 0, 0, .575],
        8598: [.19444, .69444, 0, 0, 1.14999],
        8599: [.19444, .69444, 0, 0, 1.14999],
        8600: [.19444, .69444, 0, 0, 1.14999],
        8601: [.19444, .69444, 0, 0, 1.14999],
        8636: [-.10889, .39111, 0, 0, 1.14999],
        8637: [-.10889, .39111, 0, 0, 1.14999],
        8640: [-.10889, .39111, 0, 0, 1.14999],
        8641: [-.10889, .39111, 0, 0, 1.14999],
        8656: [-.10889, .39111, 0, 0, 1.14999],
        8657: [.19444, .69444, 0, 0, .70277],
        8658: [-.10889, .39111, 0, 0, 1.14999],
        8659: [.19444, .69444, 0, 0, .70277],
        8660: [-.10889, .39111, 0, 0, 1.14999],
        8661: [.25, .75, 0, 0, .70277],
        8704: [0, .69444, 0, 0, .63889],
        8706: [0, .69444, .06389, 0, .62847],
        8707: [0, .69444, 0, 0, .63889],
        8709: [.05556, .75, 0, 0, .575],
        8711: [0, .68611, 0, 0, .95833],
        8712: [.08556, .58556, 0, 0, .76666],
        8715: [.08556, .58556, 0, 0, .76666],
        8722: [.13333, .63333, 0, 0, .89444],
        8723: [.13333, .63333, 0, 0, .89444],
        8725: [.25, .75, 0, 0, .575],
        8726: [.25, .75, 0, 0, .575],
        8727: [-.02778, .47222, 0, 0, .575],
        8728: [-.02639, .47361, 0, 0, .575],
        8729: [-.02639, .47361, 0, 0, .575],
        8730: [.18, .82, 0, 0, .95833],
        8733: [0, .44444, 0, 0, .89444],
        8734: [0, .44444, 0, 0, 1.14999],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .31944],
        8741: [.25, .75, 0, 0, .575],
        8743: [0, .55556, 0, 0, .76666],
        8744: [0, .55556, 0, 0, .76666],
        8745: [0, .55556, 0, 0, .76666],
        8746: [0, .55556, 0, 0, .76666],
        8747: [.19444, .69444, .12778, 0, .56875],
        8764: [-.10889, .39111, 0, 0, .89444],
        8768: [.19444, .69444, 0, 0, .31944],
        8771: [.00222, .50222, 0, 0, .89444],
        8776: [.02444, .52444, 0, 0, .89444],
        8781: [.00222, .50222, 0, 0, .89444],
        8801: [.00222, .50222, 0, 0, .89444],
        8804: [.19667, .69667, 0, 0, .89444],
        8805: [.19667, .69667, 0, 0, .89444],
        8810: [.08556, .58556, 0, 0, 1.14999],
        8811: [.08556, .58556, 0, 0, 1.14999],
        8826: [.08556, .58556, 0, 0, .89444],
        8827: [.08556, .58556, 0, 0, .89444],
        8834: [.08556, .58556, 0, 0, .89444],
        8835: [.08556, .58556, 0, 0, .89444],
        8838: [.19667, .69667, 0, 0, .89444],
        8839: [.19667, .69667, 0, 0, .89444],
        8846: [0, .55556, 0, 0, .76666],
        8849: [.19667, .69667, 0, 0, .89444],
        8850: [.19667, .69667, 0, 0, .89444],
        8851: [0, .55556, 0, 0, .76666],
        8852: [0, .55556, 0, 0, .76666],
        8853: [.13333, .63333, 0, 0, .89444],
        8854: [.13333, .63333, 0, 0, .89444],
        8855: [.13333, .63333, 0, 0, .89444],
        8856: [.13333, .63333, 0, 0, .89444],
        8857: [.13333, .63333, 0, 0, .89444],
        8866: [0, .69444, 0, 0, .70277],
        8867: [0, .69444, 0, 0, .70277],
        8868: [0, .69444, 0, 0, .89444],
        8869: [0, .69444, 0, 0, .89444],
        8900: [-.02639, .47361, 0, 0, .575],
        8901: [-.02639, .47361, 0, 0, .31944],
        8902: [-.02778, .47222, 0, 0, .575],
        8968: [.25, .75, 0, 0, .51111],
        8969: [.25, .75, 0, 0, .51111],
        8970: [.25, .75, 0, 0, .51111],
        8971: [.25, .75, 0, 0, .51111],
        8994: [-.13889, .36111, 0, 0, 1.14999],
        8995: [-.13889, .36111, 0, 0, 1.14999],
        9651: [.19444, .69444, 0, 0, 1.02222],
        9657: [-.02778, .47222, 0, 0, .575],
        9661: [.19444, .69444, 0, 0, 1.02222],
        9667: [-.02778, .47222, 0, 0, .575],
        9711: [.19444, .69444, 0, 0, 1.14999],
        9824: [.12963, .69444, 0, 0, .89444],
        9825: [.12963, .69444, 0, 0, .89444],
        9826: [.12963, .69444, 0, 0, .89444],
        9827: [.12963, .69444, 0, 0, .89444],
        9837: [0, .75, 0, 0, .44722],
        9838: [.19444, .69444, 0, 0, .44722],
        9839: [.19444, .69444, 0, 0, .44722],
        10216: [.25, .75, 0, 0, .44722],
        10217: [.25, .75, 0, 0, .44722],
        10815: [0, .68611, 0, 0, .9],
        10927: [.19667, .69667, 0, 0, .89444],
        10928: [.19667, .69667, 0, 0, .89444]
      },
      "Main-BoldItalic": {
        33: [0, .69444, .11417, 0, .38611],
        34: [0, .69444, .07939, 0, .62055],
        35: [.19444, .69444, .06833, 0, .94444],
        37: [.05556, .75, .12861, 0, .94444],
        38: [0, .69444, .08528, 0, .88555],
        39: [0, .69444, .12945, 0, .35555],
        40: [.25, .75, .15806, 0, .47333],
        41: [.25, .75, .03306, 0, .47333],
        42: [0, .75, .14333, 0, .59111],
        43: [.10333, .60333, .03306, 0, .88555],
        44: [.19444, .14722, 0, 0, .35555],
        45: [0, .44444, .02611, 0, .41444],
        46: [0, .14722, 0, 0, .35555],
        47: [.25, .75, .15806, 0, .59111],
        48: [0, .64444, .13167, 0, .59111],
        49: [0, .64444, .13167, 0, .59111],
        50: [0, .64444, .13167, 0, .59111],
        51: [0, .64444, .13167, 0, .59111],
        52: [.19444, .64444, .13167, 0, .59111],
        53: [0, .64444, .13167, 0, .59111],
        54: [0, .64444, .13167, 0, .59111],
        55: [.19444, .64444, .13167, 0, .59111],
        56: [0, .64444, .13167, 0, .59111],
        57: [0, .64444, .13167, 0, .59111],
        58: [0, .44444, .06695, 0, .35555],
        59: [.19444, .44444, .06695, 0, .35555],
        61: [-.10889, .39111, .06833, 0, .88555],
        63: [0, .69444, .11472, 0, .59111],
        64: [0, .69444, .09208, 0, .88555],
        65: [0, .68611, 0, 0, .86555],
        66: [0, .68611, .0992, 0, .81666],
        67: [0, .68611, .14208, 0, .82666],
        68: [0, .68611, .09062, 0, .87555],
        69: [0, .68611, .11431, 0, .75666],
        70: [0, .68611, .12903, 0, .72722],
        71: [0, .68611, .07347, 0, .89527],
        72: [0, .68611, .17208, 0, .8961],
        73: [0, .68611, .15681, 0, .47166],
        74: [0, .68611, .145, 0, .61055],
        75: [0, .68611, .14208, 0, .89499],
        76: [0, .68611, 0, 0, .69777],
        77: [0, .68611, .17208, 0, 1.07277],
        78: [0, .68611, .17208, 0, .8961],
        79: [0, .68611, .09062, 0, .85499],
        80: [0, .68611, .0992, 0, .78721],
        81: [.19444, .68611, .09062, 0, .85499],
        82: [0, .68611, .02559, 0, .85944],
        83: [0, .68611, .11264, 0, .64999],
        84: [0, .68611, .12903, 0, .7961],
        85: [0, .68611, .17208, 0, .88083],
        86: [0, .68611, .18625, 0, .86555],
        87: [0, .68611, .18625, 0, 1.15999],
        88: [0, .68611, .15681, 0, .86555],
        89: [0, .68611, .19803, 0, .86555],
        90: [0, .68611, .14208, 0, .70888],
        91: [.25, .75, .1875, 0, .35611],
        93: [.25, .75, .09972, 0, .35611],
        94: [0, .69444, .06709, 0, .59111],
        95: [.31, .13444, .09811, 0, .59111],
        97: [0, .44444, .09426, 0, .59111],
        98: [0, .69444, .07861, 0, .53222],
        99: [0, .44444, .05222, 0, .53222],
        100: [0, .69444, .10861, 0, .59111],
        101: [0, .44444, .085, 0, .53222],
        102: [.19444, .69444, .21778, 0, .4],
        103: [.19444, .44444, .105, 0, .53222],
        104: [0, .69444, .09426, 0, .59111],
        105: [0, .69326, .11387, 0, .35555],
        106: [.19444, .69326, .1672, 0, .35555],
        107: [0, .69444, .11111, 0, .53222],
        108: [0, .69444, .10861, 0, .29666],
        109: [0, .44444, .09426, 0, .94444],
        110: [0, .44444, .09426, 0, .64999],
        111: [0, .44444, .07861, 0, .59111],
        112: [.19444, .44444, .07861, 0, .59111],
        113: [.19444, .44444, .105, 0, .53222],
        114: [0, .44444, .11111, 0, .50167],
        115: [0, .44444, .08167, 0, .48694],
        116: [0, .63492, .09639, 0, .385],
        117: [0, .44444, .09426, 0, .62055],
        118: [0, .44444, .11111, 0, .53222],
        119: [0, .44444, .11111, 0, .76777],
        120: [0, .44444, .12583, 0, .56055],
        121: [.19444, .44444, .105, 0, .56166],
        122: [0, .44444, .13889, 0, .49055],
        126: [.35, .34444, .11472, 0, .59111],
        163: [0, .69444, 0, 0, .86853],
        168: [0, .69444, .11473, 0, .59111],
        176: [0, .69444, 0, 0, .94888],
        198: [0, .68611, .11431, 0, 1.02277],
        216: [.04861, .73472, .09062, 0, .88555],
        223: [.19444, .69444, .09736, 0, .665],
        230: [0, .44444, .085, 0, .82666],
        248: [.09722, .54167, .09458, 0, .59111],
        305: [0, .44444, .09426, 0, .35555],
        338: [0, .68611, .11431, 0, 1.14054],
        339: [0, .44444, .085, 0, .82666],
        567: [.19444, .44444, .04611, 0, .385],
        710: [0, .69444, .06709, 0, .59111],
        711: [0, .63194, .08271, 0, .59111],
        713: [0, .59444, .10444, 0, .59111],
        714: [0, .69444, .08528, 0, .59111],
        715: [0, .69444, 0, 0, .59111],
        728: [0, .69444, .10333, 0, .59111],
        729: [0, .69444, .12945, 0, .35555],
        730: [0, .69444, 0, 0, .94888],
        732: [0, .69444, .11472, 0, .59111],
        733: [0, .69444, .11472, 0, .59111],
        915: [0, .68611, .12903, 0, .69777],
        916: [0, .68611, 0, 0, .94444],
        920: [0, .68611, .09062, 0, .88555],
        923: [0, .68611, 0, 0, .80666],
        926: [0, .68611, .15092, 0, .76777],
        928: [0, .68611, .17208, 0, .8961],
        931: [0, .68611, .11431, 0, .82666],
        933: [0, .68611, .10778, 0, .88555],
        934: [0, .68611, .05632, 0, .82666],
        936: [0, .68611, .10778, 0, .88555],
        937: [0, .68611, .0992, 0, .82666],
        8211: [0, .44444, .09811, 0, .59111],
        8212: [0, .44444, .09811, 0, 1.18221],
        8216: [0, .69444, .12945, 0, .35555],
        8217: [0, .69444, .12945, 0, .35555],
        8220: [0, .69444, .16772, 0, .62055],
        8221: [0, .69444, .07939, 0, .62055]
      },
      "Main-Italic": {
        33: [0, .69444, .12417, 0, .30667],
        34: [0, .69444, .06961, 0, .51444],
        35: [.19444, .69444, .06616, 0, .81777],
        37: [.05556, .75, .13639, 0, .81777],
        38: [0, .69444, .09694, 0, .76666],
        39: [0, .69444, .12417, 0, .30667],
        40: [.25, .75, .16194, 0, .40889],
        41: [.25, .75, .03694, 0, .40889],
        42: [0, .75, .14917, 0, .51111],
        43: [.05667, .56167, .03694, 0, .76666],
        44: [.19444, .10556, 0, 0, .30667],
        45: [0, .43056, .02826, 0, .35778],
        46: [0, .10556, 0, 0, .30667],
        47: [.25, .75, .16194, 0, .51111],
        48: [0, .64444, .13556, 0, .51111],
        49: [0, .64444, .13556, 0, .51111],
        50: [0, .64444, .13556, 0, .51111],
        51: [0, .64444, .13556, 0, .51111],
        52: [.19444, .64444, .13556, 0, .51111],
        53: [0, .64444, .13556, 0, .51111],
        54: [0, .64444, .13556, 0, .51111],
        55: [.19444, .64444, .13556, 0, .51111],
        56: [0, .64444, .13556, 0, .51111],
        57: [0, .64444, .13556, 0, .51111],
        58: [0, .43056, .0582, 0, .30667],
        59: [.19444, .43056, .0582, 0, .30667],
        61: [-.13313, .36687, .06616, 0, .76666],
        63: [0, .69444, .1225, 0, .51111],
        64: [0, .69444, .09597, 0, .76666],
        65: [0, .68333, 0, 0, .74333],
        66: [0, .68333, .10257, 0, .70389],
        67: [0, .68333, .14528, 0, .71555],
        68: [0, .68333, .09403, 0, .755],
        69: [0, .68333, .12028, 0, .67833],
        70: [0, .68333, .13305, 0, .65277],
        71: [0, .68333, .08722, 0, .77361],
        72: [0, .68333, .16389, 0, .74333],
        73: [0, .68333, .15806, 0, .38555],
        74: [0, .68333, .14028, 0, .525],
        75: [0, .68333, .14528, 0, .76888],
        76: [0, .68333, 0, 0, .62722],
        77: [0, .68333, .16389, 0, .89666],
        78: [0, .68333, .16389, 0, .74333],
        79: [0, .68333, .09403, 0, .76666],
        80: [0, .68333, .10257, 0, .67833],
        81: [.19444, .68333, .09403, 0, .76666],
        82: [0, .68333, .03868, 0, .72944],
        83: [0, .68333, .11972, 0, .56222],
        84: [0, .68333, .13305, 0, .71555],
        85: [0, .68333, .16389, 0, .74333],
        86: [0, .68333, .18361, 0, .74333],
        87: [0, .68333, .18361, 0, .99888],
        88: [0, .68333, .15806, 0, .74333],
        89: [0, .68333, .19383, 0, .74333],
        90: [0, .68333, .14528, 0, .61333],
        91: [.25, .75, .1875, 0, .30667],
        93: [.25, .75, .10528, 0, .30667],
        94: [0, .69444, .06646, 0, .51111],
        95: [.31, .12056, .09208, 0, .51111],
        97: [0, .43056, .07671, 0, .51111],
        98: [0, .69444, .06312, 0, .46],
        99: [0, .43056, .05653, 0, .46],
        100: [0, .69444, .10333, 0, .51111],
        101: [0, .43056, .07514, 0, .46],
        102: [.19444, .69444, .21194, 0, .30667],
        103: [.19444, .43056, .08847, 0, .46],
        104: [0, .69444, .07671, 0, .51111],
        105: [0, .65536, .1019, 0, .30667],
        106: [.19444, .65536, .14467, 0, .30667],
        107: [0, .69444, .10764, 0, .46],
        108: [0, .69444, .10333, 0, .25555],
        109: [0, .43056, .07671, 0, .81777],
        110: [0, .43056, .07671, 0, .56222],
        111: [0, .43056, .06312, 0, .51111],
        112: [.19444, .43056, .06312, 0, .51111],
        113: [.19444, .43056, .08847, 0, .46],
        114: [0, .43056, .10764, 0, .42166],
        115: [0, .43056, .08208, 0, .40889],
        116: [0, .61508, .09486, 0, .33222],
        117: [0, .43056, .07671, 0, .53666],
        118: [0, .43056, .10764, 0, .46],
        119: [0, .43056, .10764, 0, .66444],
        120: [0, .43056, .12042, 0, .46389],
        121: [.19444, .43056, .08847, 0, .48555],
        122: [0, .43056, .12292, 0, .40889],
        126: [.35, .31786, .11585, 0, .51111],
        163: [0, .69444, 0, 0, .76909],
        168: [0, .66786, .10474, 0, .51111],
        176: [0, .69444, 0, 0, .83129],
        198: [0, .68333, .12028, 0, .88277],
        216: [.04861, .73194, .09403, 0, .76666],
        223: [.19444, .69444, .10514, 0, .53666],
        230: [0, .43056, .07514, 0, .71555],
        248: [.09722, .52778, .09194, 0, .51111],
        305: [0, .43056, 0, .02778, .32246],
        338: [0, .68333, .12028, 0, .98499],
        339: [0, .43056, .07514, 0, .71555],
        567: [.19444, .43056, 0, .08334, .38403],
        710: [0, .69444, .06646, 0, .51111],
        711: [0, .62847, .08295, 0, .51111],
        713: [0, .56167, .10333, 0, .51111],
        714: [0, .69444, .09694, 0, .51111],
        715: [0, .69444, 0, 0, .51111],
        728: [0, .69444, .10806, 0, .51111],
        729: [0, .66786, .11752, 0, .30667],
        730: [0, .69444, 0, 0, .83129],
        732: [0, .66786, .11585, 0, .51111],
        733: [0, .69444, .1225, 0, .51111],
        915: [0, .68333, .13305, 0, .62722],
        916: [0, .68333, 0, 0, .81777],
        920: [0, .68333, .09403, 0, .76666],
        923: [0, .68333, 0, 0, .69222],
        926: [0, .68333, .15294, 0, .66444],
        928: [0, .68333, .16389, 0, .74333],
        931: [0, .68333, .12028, 0, .71555],
        933: [0, .68333, .11111, 0, .76666],
        934: [0, .68333, .05986, 0, .71555],
        936: [0, .68333, .11111, 0, .76666],
        937: [0, .68333, .10257, 0, .71555],
        8211: [0, .43056, .09208, 0, .51111],
        8212: [0, .43056, .09208, 0, 1.02222],
        8216: [0, .69444, .12417, 0, .30667],
        8217: [0, .69444, .12417, 0, .30667],
        8220: [0, .69444, .1685, 0, .51444],
        8221: [0, .69444, .06961, 0, .51444],
        8463: [0, .68889, 0, 0, .54028]
      },
      "Main-Regular": {
        32: [0, 0, 0, 0, 0],
        33: [0, .69444, 0, 0, .27778],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .77778],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.19444, .10556, 0, 0, .27778],
        45: [0, .43056, 0, 0, .33333],
        46: [0, .10556, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .64444, 0, 0, .5],
        49: [0, .64444, 0, 0, .5],
        50: [0, .64444, 0, 0, .5],
        51: [0, .64444, 0, 0, .5],
        52: [0, .64444, 0, 0, .5],
        53: [0, .64444, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [0, .64444, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [0, .64444, 0, 0, .5],
        58: [0, .43056, 0, 0, .27778],
        59: [.19444, .43056, 0, 0, .27778],
        60: [.0391, .5391, 0, 0, .77778],
        61: [-.13313, .36687, 0, 0, .77778],
        62: [.0391, .5391, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .77778],
        65: [0, .68333, 0, 0, .75],
        66: [0, .68333, 0, 0, .70834],
        67: [0, .68333, 0, 0, .72222],
        68: [0, .68333, 0, 0, .76389],
        69: [0, .68333, 0, 0, .68056],
        70: [0, .68333, 0, 0, .65278],
        71: [0, .68333, 0, 0, .78472],
        72: [0, .68333, 0, 0, .75],
        73: [0, .68333, 0, 0, .36111],
        74: [0, .68333, 0, 0, .51389],
        75: [0, .68333, 0, 0, .77778],
        76: [0, .68333, 0, 0, .625],
        77: [0, .68333, 0, 0, .91667],
        78: [0, .68333, 0, 0, .75],
        79: [0, .68333, 0, 0, .77778],
        80: [0, .68333, 0, 0, .68056],
        81: [.19444, .68333, 0, 0, .77778],
        82: [0, .68333, 0, 0, .73611],
        83: [0, .68333, 0, 0, .55556],
        84: [0, .68333, 0, 0, .72222],
        85: [0, .68333, 0, 0, .75],
        86: [0, .68333, .01389, 0, .75],
        87: [0, .68333, .01389, 0, 1.02778],
        88: [0, .68333, 0, 0, .75],
        89: [0, .68333, .025, 0, .75],
        90: [0, .68333, 0, 0, .61111],
        91: [.25, .75, 0, 0, .27778],
        92: [.25, .75, 0, 0, .5],
        93: [.25, .75, 0, 0, .27778],
        94: [0, .69444, 0, 0, .5],
        95: [.31, .12056, .02778, 0, .5],
        97: [0, .43056, 0, 0, .5],
        98: [0, .69444, 0, 0, .55556],
        99: [0, .43056, 0, 0, .44445],
        100: [0, .69444, 0, 0, .55556],
        101: [0, .43056, 0, 0, .44445],
        102: [0, .69444, .07778, 0, .30556],
        103: [.19444, .43056, .01389, 0, .5],
        104: [0, .69444, 0, 0, .55556],
        105: [0, .66786, 0, 0, .27778],
        106: [.19444, .66786, 0, 0, .30556],
        107: [0, .69444, 0, 0, .52778],
        108: [0, .69444, 0, 0, .27778],
        109: [0, .43056, 0, 0, .83334],
        110: [0, .43056, 0, 0, .55556],
        111: [0, .43056, 0, 0, .5],
        112: [.19444, .43056, 0, 0, .55556],
        113: [.19444, .43056, 0, 0, .52778],
        114: [0, .43056, 0, 0, .39167],
        115: [0, .43056, 0, 0, .39445],
        116: [0, .61508, 0, 0, .38889],
        117: [0, .43056, 0, 0, .55556],
        118: [0, .43056, .01389, 0, .52778],
        119: [0, .43056, .01389, 0, .72222],
        120: [0, .43056, 0, 0, .52778],
        121: [.19444, .43056, .01389, 0, .52778],
        122: [0, .43056, 0, 0, .44445],
        123: [.25, .75, 0, 0, .5],
        124: [.25, .75, 0, 0, .27778],
        125: [.25, .75, 0, 0, .5],
        126: [.35, .31786, 0, 0, .5],
        160: [0, 0, 0, 0, 0],
        168: [0, .66786, 0, 0, .5],
        172: [0, .43056, 0, 0, .66667],
        176: [0, .69444, 0, 0, .75],
        177: [.08333, .58333, 0, 0, .77778],
        198: [0, .68333, 0, 0, .90278],
        215: [.08333, .58333, 0, 0, .77778],
        216: [.04861, .73194, 0, 0, .77778],
        223: [0, .69444, 0, 0, .5],
        230: [0, .43056, 0, 0, .72222],
        247: [.08333, .58333, 0, 0, .77778],
        248: [.09722, .52778, 0, 0, .5],
        305: [0, .43056, 0, 0, .27778],
        338: [0, .68333, 0, 0, 1.01389],
        339: [0, .43056, 0, 0, .77778],
        567: [.19444, .43056, 0, 0, .30556],
        710: [0, .69444, 0, 0, .5],
        711: [0, .62847, 0, 0, .5],
        713: [0, .56778, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .66786, 0, 0, .27778],
        730: [0, .69444, 0, 0, .75],
        732: [0, .66786, 0, 0, .5],
        733: [0, .69444, 0, 0, .5],
        824: [.19444, .69444, 0, 0, 0],
        915: [0, .68333, 0, 0, .625],
        916: [0, .68333, 0, 0, .83334],
        920: [0, .68333, 0, 0, .77778],
        923: [0, .68333, 0, 0, .69445],
        926: [0, .68333, 0, 0, .66667],
        928: [0, .68333, 0, 0, .75],
        931: [0, .68333, 0, 0, .72222],
        933: [0, .68333, 0, 0, .77778],
        934: [0, .68333, 0, 0, .72222],
        936: [0, .68333, 0, 0, .77778],
        937: [0, .68333, 0, 0, .72222],
        8211: [0, .43056, .02778, 0, .5],
        8212: [0, .43056, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5],
        8224: [.19444, .69444, 0, 0, .44445],
        8225: [.19444, .69444, 0, 0, .44445],
        8230: [0, .12, 0, 0, 1015],
        8242: [0, .55556, 0, 0, .275],
        8407: [0, .71444, .15382, 0, .5],
        8463: [0, .68889, 0, 0, .54028],
        8465: [0, .69444, 0, 0, .72222],
        8467: [0, .69444, 0, .11111, .41667],
        8472: [.19444, .43056, 0, .11111, .63646],
        8476: [0, .69444, 0, 0, .72222],
        8501: [0, .69444, 0, 0, .61111],
        8592: [-.13313, .36687, 0, 0, 1],
        8593: [.19444, .69444, 0, 0, .5],
        8594: [-.13313, .36687, 0, 0, 1],
        8595: [.19444, .69444, 0, 0, .5],
        8596: [-.13313, .36687, 0, 0, 1],
        8597: [.25, .75, 0, 0, .5],
        8598: [.19444, .69444, 0, 0, 1],
        8599: [.19444, .69444, 0, 0, 1],
        8600: [.19444, .69444, 0, 0, 1],
        8601: [.19444, .69444, 0, 0, 1],
        8614: [.011, .511, 0, 0, 889],
        8617: [.011, .511, 0, 0, 1015],
        8618: [.011, .511, 0, 0, 1015],
        8636: [-.13313, .36687, 0, 0, 1],
        8637: [-.13313, .36687, 0, 0, 1],
        8640: [-.13313, .36687, 0, 0, 1],
        8641: [-.13313, .36687, 0, 0, 1],
        8652: [.011, .671, 0, 0, 889],
        8656: [-.13313, .36687, 0, 0, 1],
        8657: [.19444, .69444, 0, 0, .61111],
        8658: [-.13313, .36687, 0, 0, 1],
        8659: [.19444, .69444, 0, 0, .61111],
        8660: [-.13313, .36687, 0, 0, 1],
        8661: [.25, .75, 0, 0, .61111],
        8704: [0, .69444, 0, 0, .55556],
        8706: [0, .69444, .05556, .08334, .5309],
        8707: [0, .69444, 0, 0, .55556],
        8709: [.05556, .75, 0, 0, .5],
        8711: [0, .68333, 0, 0, .83334],
        8712: [.0391, .5391, 0, 0, .66667],
        8715: [.0391, .5391, 0, 0, .66667],
        8722: [.08333, .58333, 0, 0, .77778],
        8723: [.08333, .58333, 0, 0, .77778],
        8725: [.25, .75, 0, 0, .5],
        8726: [.25, .75, 0, 0, .5],
        8727: [-.03472, .46528, 0, 0, .5],
        8728: [-.05555, .44445, 0, 0, .5],
        8729: [-.05555, .44445, 0, 0, .5],
        8730: [.2, .8, 0, 0, .83334],
        8733: [0, .43056, 0, 0, .77778],
        8734: [0, .43056, 0, 0, 1],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .27778],
        8741: [.25, .75, 0, 0, .5],
        8743: [0, .55556, 0, 0, .66667],
        8744: [0, .55556, 0, 0, .66667],
        8745: [0, .55556, 0, 0, .66667],
        8746: [0, .55556, 0, 0, .66667],
        8747: [.19444, .69444, .11111, 0, .41667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8768: [.19444, .69444, 0, 0, .27778],
        8771: [-.03625, .46375, 0, 0, .77778],
        8773: [-.022, .589, 0, 0, 667],
        8776: [-.01688, .48312, 0, 0, .77778],
        8781: [-.03625, .46375, 0, 0, .77778],
        8784: [-.133, .67, 0, 0, 666],
        8800: [.215, .716, 0, 0, 666],
        8801: [-.03625, .46375, 0, 0, .77778],
        8804: [.13597, .63597, 0, 0, .77778],
        8805: [.13597, .63597, 0, 0, .77778],
        8810: [.0391, .5391, 0, 0, 1],
        8811: [.0391, .5391, 0, 0, 1],
        8826: [.0391, .5391, 0, 0, .77778],
        8827: [.0391, .5391, 0, 0, .77778],
        8834: [.0391, .5391, 0, 0, .77778],
        8835: [.0391, .5391, 0, 0, .77778],
        8838: [.13597, .63597, 0, 0, .77778],
        8839: [.13597, .63597, 0, 0, .77778],
        8846: [0, .55556, 0, 0, .66667],
        8849: [.13597, .63597, 0, 0, .77778],
        8850: [.13597, .63597, 0, 0, .77778],
        8851: [0, .55556, 0, 0, .66667],
        8852: [0, .55556, 0, 0, .66667],
        8853: [.08333, .58333, 0, 0, .77778],
        8854: [.08333, .58333, 0, 0, .77778],
        8855: [.08333, .58333, 0, 0, .77778],
        8856: [.08333, .58333, 0, 0, .77778],
        8857: [.08333, .58333, 0, 0, .77778],
        8866: [0, .69444, 0, 0, .61111],
        8867: [0, .69444, 0, 0, .61111],
        8868: [0, .69444, 0, 0, .77778],
        8869: [0, .69444, 0, 0, .77778],
        8872: [.249, .75, 0, 0, 692],
        8900: [-.05555, .44445, 0, 0, .5],
        8901: [-.05555, .44445, 0, 0, .27778],
        8902: [-.03472, .46528, 0, 0, .5],
        8904: [.005, .505, 0, 0, 847],
        8942: [.03, .9, 0, 0, 121],
        8943: [-.19, .31, 0, 0, 1015],
        8945: [-.1, .82, 0, 0, 1015],
        8968: [.25, .75, 0, 0, .44445],
        8969: [.25, .75, 0, 0, .44445],
        8970: [.25, .75, 0, 0, .44445],
        8971: [.25, .75, 0, 0, .44445],
        8994: [-.14236, .35764, 0, 0, 1],
        8995: [-.14236, .35764, 0, 0, 1],
        9136: [.244, .744, 0, 0, 301],
        9137: [.244, .744, 0, 0, 301],
        9651: [.19444, .69444, 0, 0, .88889],
        9657: [-.03472, .46528, 0, 0, .5],
        9661: [.19444, .69444, 0, 0, .88889],
        9667: [-.03472, .46528, 0, 0, .5],
        9711: [.19444, .69444, 0, 0, 1],
        9824: [.12963, .69444, 0, 0, .77778],
        9825: [.12963, .69444, 0, 0, .77778],
        9826: [.12963, .69444, 0, 0, .77778],
        9827: [.12963, .69444, 0, 0, .77778],
        9837: [0, .75, 0, 0, .38889],
        9838: [.19444, .69444, 0, 0, .38889],
        9839: [.19444, .69444, 0, 0, .38889],
        10216: [.25, .75, 0, 0, .38889],
        10217: [.25, .75, 0, 0, .38889],
        10222: [.244, .744, 0, 0, 184],
        10223: [.244, .744, 0, 0, 184],
        10229: [.011, .511, 0, 0, 1470],
        10230: [.011, .511, 0, 0, 1469],
        10231: [.011, .511, 0, 0, 1748],
        10232: [.024, .525, 0, 0, 1497],
        10233: [.024, .525, 0, 0, 1526],
        10234: [.024, .525, 0, 0, 1746],
        10236: [.011, .511, 0, 0, 1498],
        10815: [0, .68333, 0, 0, .75],
        10927: [.13597, .63597, 0, 0, .77778],
        10928: [.13597, .63597, 0, 0, .77778]
      },
      "Math-BoldItalic": {
        47: [.19444, .69444, 0, 0, 0],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, .04835, 0, .8664],
        67: [0, .68611, .06979, 0, .81694],
        68: [0, .68611, .03194, 0, .93812],
        69: [0, .68611, .05451, 0, .81007],
        70: [0, .68611, .15972, 0, .68889],
        71: [0, .68611, 0, 0, .88673],
        72: [0, .68611, .08229, 0, .98229],
        73: [0, .68611, .07778, 0, .51111],
        74: [0, .68611, .10069, 0, .63125],
        75: [0, .68611, .06979, 0, .97118],
        76: [0, .68611, 0, 0, .75555],
        77: [0, .68611, .11424, 0, 1.14201],
        78: [0, .68611, .11424, 0, .95034],
        79: [0, .68611, .03194, 0, .83666],
        80: [0, .68611, .15972, 0, .72309],
        81: [.19444, .68611, 0, 0, .86861],
        82: [0, .68611, .00421, 0, .87235],
        83: [0, .68611, .05382, 0, .69271],
        84: [0, .68611, .15972, 0, .63663],
        85: [0, .68611, .11424, 0, .80027],
        86: [0, .68611, .25555, 0, .67778],
        87: [0, .68611, .15972, 0, 1.09305],
        88: [0, .68611, .07778, 0, .94722],
        89: [0, .68611, .25555, 0, .67458],
        90: [0, .68611, .06979, 0, .77257],
        97: [0, .44444, 0, 0, .63287],
        98: [0, .69444, 0, 0, .52083],
        99: [0, .44444, 0, 0, .51342],
        100: [0, .69444, 0, 0, .60972],
        101: [0, .44444, 0, 0, .55361],
        102: [.19444, .69444, .11042, 0, .56806],
        103: [.19444, .44444, .03704, 0, .5449],
        104: [0, .69444, 0, 0, .66759],
        105: [0, .69326, 0, 0, .4048],
        106: [.19444, .69326, .0622, 0, .47083],
        107: [0, .69444, .01852, 0, .6037],
        108: [0, .69444, .0088, 0, .34815],
        109: [0, .44444, 0, 0, 1.0324],
        110: [0, .44444, 0, 0, .71296],
        111: [0, .44444, 0, 0, .58472],
        112: [.19444, .44444, 0, 0, .60092],
        113: [.19444, .44444, .03704, 0, .54213],
        114: [0, .44444, .03194, 0, .5287],
        115: [0, .44444, 0, 0, .53125],
        116: [0, .63492, 0, 0, .41528],
        117: [0, .44444, 0, 0, .68102],
        118: [0, .44444, .03704, 0, .56666],
        119: [0, .44444, .02778, 0, .83148],
        120: [0, .44444, 0, 0, .65903],
        121: [.19444, .44444, .03704, 0, .59028],
        122: [0, .44444, .04213, 0, .55509],
        915: [0, .68611, .15972, 0, .65694],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, .03194, 0, .86722],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, .07458, 0, .84125],
        928: [0, .68611, .08229, 0, .98229],
        931: [0, .68611, .05451, 0, .88507],
        933: [0, .68611, .15972, 0, .67083],
        934: [0, .68611, 0, 0, .76666],
        936: [0, .68611, .11653, 0, .71402],
        937: [0, .68611, .04835, 0, .8789],
        945: [0, .44444, 0, 0, .76064],
        946: [.19444, .69444, .03403, 0, .65972],
        947: [.19444, .44444, .06389, 0, .59003],
        948: [0, .69444, .03819, 0, .52222],
        949: [0, .44444, 0, 0, .52882],
        950: [.19444, .69444, .06215, 0, .50833],
        951: [.19444, .44444, .03704, 0, .6],
        952: [0, .69444, .03194, 0, .5618],
        953: [0, .44444, 0, 0, .41204],
        954: [0, .44444, 0, 0, .66759],
        955: [0, .69444, 0, 0, .67083],
        956: [.19444, .44444, 0, 0, .70787],
        957: [0, .44444, .06898, 0, .57685],
        958: [.19444, .69444, .03021, 0, .50833],
        959: [0, .44444, 0, 0, .58472],
        960: [0, .44444, .03704, 0, .68241],
        961: [.19444, .44444, 0, 0, .6118],
        962: [.09722, .44444, .07917, 0, .42361],
        963: [0, .44444, .03704, 0, .68588],
        964: [0, .44444, .13472, 0, .52083],
        965: [0, .44444, .03704, 0, .63055],
        966: [.19444, .44444, 0, 0, .74722],
        967: [.19444, .44444, 0, 0, .71805],
        968: [.19444, .69444, .03704, 0, .75833],
        969: [0, .44444, .03704, 0, .71782],
        977: [0, .69444, 0, 0, .69155],
        981: [.19444, .69444, 0, 0, .7125],
        982: [0, .44444, .03194, 0, .975],
        1009: [.19444, .44444, 0, 0, .6118],
        1013: [0, .44444, 0, 0, .48333]
      },
      "Math-Italic": {
        47: [.19444, .69444, 0, 0, 0],
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059]
      },
      "Math-Regular": {
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059]
      },
      "SansSerif-Bold": {
        33: [0, .69444, 0, 0, .36667],
        34: [0, .69444, 0, 0, .55834],
        35: [.19444, .69444, 0, 0, .91667],
        36: [.05556, .75, 0, 0, .55],
        37: [.05556, .75, 0, 0, 1.02912],
        38: [0, .69444, 0, 0, .83056],
        39: [0, .69444, 0, 0, .30556],
        40: [.25, .75, 0, 0, .42778],
        41: [.25, .75, 0, 0, .42778],
        42: [0, .75, 0, 0, .55],
        43: [.11667, .61667, 0, 0, .85556],
        44: [.10556, .13056, 0, 0, .30556],
        45: [0, .45833, 0, 0, .36667],
        46: [0, .13056, 0, 0, .30556],
        47: [.25, .75, 0, 0, .55],
        48: [0, .69444, 0, 0, .55],
        49: [0, .69444, 0, 0, .55],
        50: [0, .69444, 0, 0, .55],
        51: [0, .69444, 0, 0, .55],
        52: [0, .69444, 0, 0, .55],
        53: [0, .69444, 0, 0, .55],
        54: [0, .69444, 0, 0, .55],
        55: [0, .69444, 0, 0, .55],
        56: [0, .69444, 0, 0, .55],
        57: [0, .69444, 0, 0, .55],
        58: [0, .45833, 0, 0, .30556],
        59: [.10556, .45833, 0, 0, .30556],
        61: [-.09375, .40625, 0, 0, .85556],
        63: [0, .69444, 0, 0, .51945],
        64: [0, .69444, 0, 0, .73334],
        65: [0, .69444, 0, 0, .73334],
        66: [0, .69444, 0, 0, .73334],
        67: [0, .69444, 0, 0, .70278],
        68: [0, .69444, 0, 0, .79445],
        69: [0, .69444, 0, 0, .64167],
        70: [0, .69444, 0, 0, .61111],
        71: [0, .69444, 0, 0, .73334],
        72: [0, .69444, 0, 0, .79445],
        73: [0, .69444, 0, 0, .33056],
        74: [0, .69444, 0, 0, .51945],
        75: [0, .69444, 0, 0, .76389],
        76: [0, .69444, 0, 0, .58056],
        77: [0, .69444, 0, 0, .97778],
        78: [0, .69444, 0, 0, .79445],
        79: [0, .69444, 0, 0, .79445],
        80: [0, .69444, 0, 0, .70278],
        81: [.10556, .69444, 0, 0, .79445],
        82: [0, .69444, 0, 0, .70278],
        83: [0, .69444, 0, 0, .61111],
        84: [0, .69444, 0, 0, .73334],
        85: [0, .69444, 0, 0, .76389],
        86: [0, .69444, .01528, 0, .73334],
        87: [0, .69444, .01528, 0, 1.03889],
        88: [0, .69444, 0, 0, .73334],
        89: [0, .69444, .0275, 0, .73334],
        90: [0, .69444, 0, 0, .67223],
        91: [.25, .75, 0, 0, .34306],
        93: [.25, .75, 0, 0, .34306],
        94: [0, .69444, 0, 0, .55],
        95: [.35, .10833, .03056, 0, .55],
        97: [0, .45833, 0, 0, .525],
        98: [0, .69444, 0, 0, .56111],
        99: [0, .45833, 0, 0, .48889],
        100: [0, .69444, 0, 0, .56111],
        101: [0, .45833, 0, 0, .51111],
        102: [0, .69444, .07639, 0, .33611],
        103: [.19444, .45833, .01528, 0, .55],
        104: [0, .69444, 0, 0, .56111],
        105: [0, .69444, 0, 0, .25556],
        106: [.19444, .69444, 0, 0, .28611],
        107: [0, .69444, 0, 0, .53056],
        108: [0, .69444, 0, 0, .25556],
        109: [0, .45833, 0, 0, .86667],
        110: [0, .45833, 0, 0, .56111],
        111: [0, .45833, 0, 0, .55],
        112: [.19444, .45833, 0, 0, .56111],
        113: [.19444, .45833, 0, 0, .56111],
        114: [0, .45833, .01528, 0, .37222],
        115: [0, .45833, 0, 0, .42167],
        116: [0, .58929, 0, 0, .40417],
        117: [0, .45833, 0, 0, .56111],
        118: [0, .45833, .01528, 0, .5],
        119: [0, .45833, .01528, 0, .74445],
        120: [0, .45833, 0, 0, .5],
        121: [.19444, .45833, .01528, 0, .5],
        122: [0, .45833, 0, 0, .47639],
        126: [.35, .34444, 0, 0, .55],
        168: [0, .69444, 0, 0, .55],
        176: [0, .69444, 0, 0, .73334],
        180: [0, .69444, 0, 0, .55],
        305: [0, .45833, 0, 0, .25556],
        567: [.19444, .45833, 0, 0, .28611],
        710: [0, .69444, 0, 0, .55],
        711: [0, .63542, 0, 0, .55],
        713: [0, .63778, 0, 0, .55],
        728: [0, .69444, 0, 0, .55],
        729: [0, .69444, 0, 0, .30556],
        730: [0, .69444, 0, 0, .73334],
        732: [0, .69444, 0, 0, .55],
        733: [0, .69444, 0, 0, .55],
        915: [0, .69444, 0, 0, .58056],
        916: [0, .69444, 0, 0, .91667],
        920: [0, .69444, 0, 0, .85556],
        923: [0, .69444, 0, 0, .67223],
        926: [0, .69444, 0, 0, .73334],
        928: [0, .69444, 0, 0, .79445],
        931: [0, .69444, 0, 0, .79445],
        933: [0, .69444, 0, 0, .85556],
        934: [0, .69444, 0, 0, .79445],
        936: [0, .69444, 0, 0, .85556],
        937: [0, .69444, 0, 0, .79445],
        8211: [0, .45833, .03056, 0, .55],
        8212: [0, .45833, .03056, 0, 1.10001],
        8216: [0, .69444, 0, 0, .30556],
        8217: [0, .69444, 0, 0, .30556],
        8220: [0, .69444, 0, 0, .55834],
        8221: [0, .69444, 0, 0, .55834]
      },
      "SansSerif-Italic": {
        33: [0, .69444, .05733, 0, .31945],
        34: [0, .69444, .00316, 0, .5],
        35: [.19444, .69444, .05087, 0, .83334],
        36: [.05556, .75, .11156, 0, .5],
        37: [.05556, .75, .03126, 0, .83334],
        38: [0, .69444, .03058, 0, .75834],
        39: [0, .69444, .07816, 0, .27778],
        40: [.25, .75, .13164, 0, .38889],
        41: [.25, .75, .02536, 0, .38889],
        42: [0, .75, .11775, 0, .5],
        43: [.08333, .58333, .02536, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, .01946, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, .13164, 0, .5],
        48: [0, .65556, .11156, 0, .5],
        49: [0, .65556, .11156, 0, .5],
        50: [0, .65556, .11156, 0, .5],
        51: [0, .65556, .11156, 0, .5],
        52: [0, .65556, .11156, 0, .5],
        53: [0, .65556, .11156, 0, .5],
        54: [0, .65556, .11156, 0, .5],
        55: [0, .65556, .11156, 0, .5],
        56: [0, .65556, .11156, 0, .5],
        57: [0, .65556, .11156, 0, .5],
        58: [0, .44444, .02502, 0, .27778],
        59: [.125, .44444, .02502, 0, .27778],
        61: [-.13, .37, .05087, 0, .77778],
        63: [0, .69444, .11809, 0, .47222],
        64: [0, .69444, .07555, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, .08293, 0, .66667],
        67: [0, .69444, .11983, 0, .63889],
        68: [0, .69444, .07555, 0, .72223],
        69: [0, .69444, .11983, 0, .59722],
        70: [0, .69444, .13372, 0, .56945],
        71: [0, .69444, .11983, 0, .66667],
        72: [0, .69444, .08094, 0, .70834],
        73: [0, .69444, .13372, 0, .27778],
        74: [0, .69444, .08094, 0, .47222],
        75: [0, .69444, .11983, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, .08094, 0, .875],
        78: [0, .69444, .08094, 0, .70834],
        79: [0, .69444, .07555, 0, .73611],
        80: [0, .69444, .08293, 0, .63889],
        81: [.125, .69444, .07555, 0, .73611],
        82: [0, .69444, .08293, 0, .64584],
        83: [0, .69444, .09205, 0, .55556],
        84: [0, .69444, .13372, 0, .68056],
        85: [0, .69444, .08094, 0, .6875],
        86: [0, .69444, .1615, 0, .66667],
        87: [0, .69444, .1615, 0, .94445],
        88: [0, .69444, .13372, 0, .66667],
        89: [0, .69444, .17261, 0, .66667],
        90: [0, .69444, .11983, 0, .61111],
        91: [.25, .75, .15942, 0, .28889],
        93: [.25, .75, .08719, 0, .28889],
        94: [0, .69444, .0799, 0, .5],
        95: [.35, .09444, .08616, 0, .5],
        97: [0, .44444, .00981, 0, .48056],
        98: [0, .69444, .03057, 0, .51667],
        99: [0, .44444, .08336, 0, .44445],
        100: [0, .69444, .09483, 0, .51667],
        101: [0, .44444, .06778, 0, .44445],
        102: [0, .69444, .21705, 0, .30556],
        103: [.19444, .44444, .10836, 0, .5],
        104: [0, .69444, .01778, 0, .51667],
        105: [0, .67937, .09718, 0, .23889],
        106: [.19444, .67937, .09162, 0, .26667],
        107: [0, .69444, .08336, 0, .48889],
        108: [0, .69444, .09483, 0, .23889],
        109: [0, .44444, .01778, 0, .79445],
        110: [0, .44444, .01778, 0, .51667],
        111: [0, .44444, .06613, 0, .5],
        112: [.19444, .44444, .0389, 0, .51667],
        113: [.19444, .44444, .04169, 0, .51667],
        114: [0, .44444, .10836, 0, .34167],
        115: [0, .44444, .0778, 0, .38333],
        116: [0, .57143, .07225, 0, .36111],
        117: [0, .44444, .04169, 0, .51667],
        118: [0, .44444, .10836, 0, .46111],
        119: [0, .44444, .10836, 0, .68334],
        120: [0, .44444, .09169, 0, .46111],
        121: [.19444, .44444, .10836, 0, .46111],
        122: [0, .44444, .08752, 0, .43472],
        126: [.35, .32659, .08826, 0, .5],
        168: [0, .67937, .06385, 0, .5],
        176: [0, .69444, 0, 0, .73752],
        305: [0, .44444, .04169, 0, .23889],
        567: [.19444, .44444, .04169, 0, .26667],
        710: [0, .69444, .0799, 0, .5],
        711: [0, .63194, .08432, 0, .5],
        713: [0, .60889, .08776, 0, .5],
        714: [0, .69444, .09205, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, .09483, 0, .5],
        729: [0, .67937, .07774, 0, .27778],
        730: [0, .69444, 0, 0, .73752],
        732: [0, .67659, .08826, 0, .5],
        733: [0, .69444, .09205, 0, .5],
        915: [0, .69444, .13372, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, .07555, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, .12816, 0, .66667],
        928: [0, .69444, .08094, 0, .70834],
        931: [0, .69444, .11983, 0, .72222],
        933: [0, .69444, .09031, 0, .77778],
        934: [0, .69444, .04603, 0, .72222],
        936: [0, .69444, .09031, 0, .77778],
        937: [0, .69444, .08293, 0, .72222],
        8211: [0, .44444, .08616, 0, .5],
        8212: [0, .44444, .08616, 0, 1],
        8216: [0, .69444, .07816, 0, .27778],
        8217: [0, .69444, .07816, 0, .27778],
        8220: [0, .69444, .14205, 0, .5],
        8221: [0, .69444, .00316, 0, .5]
      },
      "SansSerif-Regular": {
        33: [0, .69444, 0, 0, .31945],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .75834],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, 0, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .65556, 0, 0, .5],
        49: [0, .65556, 0, 0, .5],
        50: [0, .65556, 0, 0, .5],
        51: [0, .65556, 0, 0, .5],
        52: [0, .65556, 0, 0, .5],
        53: [0, .65556, 0, 0, .5],
        54: [0, .65556, 0, 0, .5],
        55: [0, .65556, 0, 0, .5],
        56: [0, .65556, 0, 0, .5],
        57: [0, .65556, 0, 0, .5],
        58: [0, .44444, 0, 0, .27778],
        59: [.125, .44444, 0, 0, .27778],
        61: [-.13, .37, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, 0, 0, .66667],
        67: [0, .69444, 0, 0, .63889],
        68: [0, .69444, 0, 0, .72223],
        69: [0, .69444, 0, 0, .59722],
        70: [0, .69444, 0, 0, .56945],
        71: [0, .69444, 0, 0, .66667],
        72: [0, .69444, 0, 0, .70834],
        73: [0, .69444, 0, 0, .27778],
        74: [0, .69444, 0, 0, .47222],
        75: [0, .69444, 0, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, 0, 0, .875],
        78: [0, .69444, 0, 0, .70834],
        79: [0, .69444, 0, 0, .73611],
        80: [0, .69444, 0, 0, .63889],
        81: [.125, .69444, 0, 0, .73611],
        82: [0, .69444, 0, 0, .64584],
        83: [0, .69444, 0, 0, .55556],
        84: [0, .69444, 0, 0, .68056],
        85: [0, .69444, 0, 0, .6875],
        86: [0, .69444, .01389, 0, .66667],
        87: [0, .69444, .01389, 0, .94445],
        88: [0, .69444, 0, 0, .66667],
        89: [0, .69444, .025, 0, .66667],
        90: [0, .69444, 0, 0, .61111],
        91: [.25, .75, 0, 0, .28889],
        93: [.25, .75, 0, 0, .28889],
        94: [0, .69444, 0, 0, .5],
        95: [.35, .09444, .02778, 0, .5],
        97: [0, .44444, 0, 0, .48056],
        98: [0, .69444, 0, 0, .51667],
        99: [0, .44444, 0, 0, .44445],
        100: [0, .69444, 0, 0, .51667],
        101: [0, .44444, 0, 0, .44445],
        102: [0, .69444, .06944, 0, .30556],
        103: [.19444, .44444, .01389, 0, .5],
        104: [0, .69444, 0, 0, .51667],
        105: [0, .67937, 0, 0, .23889],
        106: [.19444, .67937, 0, 0, .26667],
        107: [0, .69444, 0, 0, .48889],
        108: [0, .69444, 0, 0, .23889],
        109: [0, .44444, 0, 0, .79445],
        110: [0, .44444, 0, 0, .51667],
        111: [0, .44444, 0, 0, .5],
        112: [.19444, .44444, 0, 0, .51667],
        113: [.19444, .44444, 0, 0, .51667],
        114: [0, .44444, .01389, 0, .34167],
        115: [0, .44444, 0, 0, .38333],
        116: [0, .57143, 0, 0, .36111],
        117: [0, .44444, 0, 0, .51667],
        118: [0, .44444, .01389, 0, .46111],
        119: [0, .44444, .01389, 0, .68334],
        120: [0, .44444, 0, 0, .46111],
        121: [.19444, .44444, .01389, 0, .46111],
        122: [0, .44444, 0, 0, .43472],
        126: [.35, .32659, 0, 0, .5],
        176: [0, .69444, 0, 0, .66667],
        305: [0, .44444, 0, 0, .23889],
        567: [.19444, .44444, 0, 0, .26667],
        710: [0, .69444, 0, 0, .5],
        711: [0, .63194, 0, 0, .5],
        713: [0, .60889, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .67937, 0, 0, .27778],
        730: [0, .69444, 0, 0, .66667],
        733: [0, .69444, 0, 0, .5],
        771: [0, .67659, 0, 0, .5],
        776: [0, .67937, 0, 0, .5],
        915: [0, .69444, 0, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, 0, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, 0, 0, .66667],
        928: [0, .69444, 0, 0, .70834],
        931: [0, .69444, 0, 0, .72222],
        933: [0, .69444, 0, 0, .77778],
        934: [0, .69444, 0, 0, .72222],
        936: [0, .69444, 0, 0, .77778],
        937: [0, .69444, 0, 0, .72222],
        8211: [0, .44444, .02778, 0, .5],
        8212: [0, .44444, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5]
      },
      "Script-Regular": {
        65: [0, .7, .22925, 0, .80253],
        66: [0, .7, .04087, 0, .90757],
        67: [0, .7, .1689, 0, .66619],
        68: [0, .7, .09371, 0, .77443],
        69: [0, .7, .18583, 0, .56162],
        70: [0, .7, .13634, 0, .89544],
        71: [0, .7, .17322, 0, .60961],
        72: [0, .7, .29694, 0, .96919],
        73: [0, .7, .19189, 0, .80907],
        74: [.27778, .7, .19189, 0, 1.05159],
        75: [0, .7, .31259, 0, .91364],
        76: [0, .7, .19189, 0, .87373],
        77: [0, .7, .15981, 0, 1.08031],
        78: [0, .7, .3525, 0, .9015],
        79: [0, .7, .08078, 0, .73787],
        80: [0, .7, .08078, 0, 1.01262],
        81: [0, .7, .03305, 0, .88282],
        82: [0, .7, .06259, 0, .85],
        83: [0, .7, .19189, 0, .86767],
        84: [0, .7, .29087, 0, .74697],
        85: [0, .7, .25815, 0, .79996],
        86: [0, .7, .27523, 0, .62204],
        87: [0, .7, .27523, 0, .80532],
        88: [0, .7, .26006, 0, .94445],
        89: [0, .7, .2939, 0, .70961],
        90: [0, .7, .24037, 0, .8212]
      },
      "Size1-Regular": {
        40: [.35001, .85, 0, 0, .45834],
        41: [.35001, .85, 0, 0, .45834],
        47: [.35001, .85, 0, 0, .57778],
        91: [.35001, .85, 0, 0, .41667],
        92: [.35001, .85, 0, 0, .57778],
        93: [.35001, .85, 0, 0, .41667],
        123: [.35001, .85, 0, 0, .58334],
        125: [.35001, .85, 0, 0, .58334],
        710: [0, .72222, 0, 0, .55556],
        732: [0, .72222, 0, 0, .55556],
        770: [0, .72222, 0, 0, .55556],
        771: [0, .72222, 0, 0, .55556],
        8214: [-99e-5, .601, 0, 0, .77778],
        8593: [1e-5, .6, 0, 0, .66667],
        8595: [1e-5, .6, 0, 0, .66667],
        8657: [1e-5, .6, 0, 0, .77778],
        8659: [1e-5, .6, 0, 0, .77778],
        8719: [.25001, .75, 0, 0, .94445],
        8720: [.25001, .75, 0, 0, .94445],
        8721: [.25001, .75, 0, 0, 1.05556],
        8730: [.35001, .85, 0, 0, 1],
        8739: [-.00599, .606, 0, 0, .33333],
        8741: [-.00599, .606, 0, 0, .55556],
        8747: [.30612, .805, .19445, 0, .47222],
        8748: [.306, .805, .19445, 0, .47222],
        8749: [.306, .805, .19445, 0, .47222],
        8750: [.30612, .805, .19445, 0, .47222],
        8896: [.25001, .75, 0, 0, .83334],
        8897: [.25001, .75, 0, 0, .83334],
        8898: [.25001, .75, 0, 0, .83334],
        8899: [.25001, .75, 0, 0, .83334],
        8968: [.35001, .85, 0, 0, .47222],
        8969: [.35001, .85, 0, 0, .47222],
        8970: [.35001, .85, 0, 0, .47222],
        8971: [.35001, .85, 0, 0, .47222],
        9168: [-99e-5, .601, 0, 0, .66667],
        10216: [.35001, .85, 0, 0, .47222],
        10217: [.35001, .85, 0, 0, .47222],
        10752: [.25001, .75, 0, 0, 1.11111],
        10753: [.25001, .75, 0, 0, 1.11111],
        10754: [.25001, .75, 0, 0, 1.11111],
        10756: [.25001, .75, 0, 0, .83334],
        10758: [.25001, .75, 0, 0, .83334]
      },
      "Size2-Regular": {
        40: [.65002, 1.15, 0, 0, .59722],
        41: [.65002, 1.15, 0, 0, .59722],
        47: [.65002, 1.15, 0, 0, .81111],
        91: [.65002, 1.15, 0, 0, .47222],
        92: [.65002, 1.15, 0, 0, .81111],
        93: [.65002, 1.15, 0, 0, .47222],
        123: [.65002, 1.15, 0, 0, .66667],
        125: [.65002, 1.15, 0, 0, .66667],
        710: [0, .75, 0, 0, 1],
        732: [0, .75, 0, 0, 1],
        770: [0, .75, 0, 0, 1],
        771: [0, .75, 0, 0, 1],
        8719: [.55001, 1.05, 0, 0, 1.27778],
        8720: [.55001, 1.05, 0, 0, 1.27778],
        8721: [.55001, 1.05, 0, 0, 1.44445],
        8730: [.65002, 1.15, 0, 0, 1],
        8747: [.86225, 1.36, .44445, 0, .55556],
        8748: [.862, 1.36, .44445, 0, .55556],
        8749: [.862, 1.36, .44445, 0, .55556],
        8750: [.86225, 1.36, .44445, 0, .55556],
        8896: [.55001, 1.05, 0, 0, 1.11111],
        8897: [.55001, 1.05, 0, 0, 1.11111],
        8898: [.55001, 1.05, 0, 0, 1.11111],
        8899: [.55001, 1.05, 0, 0, 1.11111],
        8968: [.65002, 1.15, 0, 0, .52778],
        8969: [.65002, 1.15, 0, 0, .52778],
        8970: [.65002, 1.15, 0, 0, .52778],
        8971: [.65002, 1.15, 0, 0, .52778],
        10216: [.65002, 1.15, 0, 0, .61111],
        10217: [.65002, 1.15, 0, 0, .61111],
        10752: [.55001, 1.05, 0, 0, 1.51112],
        10753: [.55001, 1.05, 0, 0, 1.51112],
        10754: [.55001, 1.05, 0, 0, 1.51112],
        10756: [.55001, 1.05, 0, 0, 1.11111],
        10758: [.55001, 1.05, 0, 0, 1.11111]
      },
      "Size3-Regular": {
        40: [.95003, 1.45, 0, 0, .73611],
        41: [.95003, 1.45, 0, 0, .73611],
        47: [.95003, 1.45, 0, 0, 1.04445],
        91: [.95003, 1.45, 0, 0, .52778],
        92: [.95003, 1.45, 0, 0, 1.04445],
        93: [.95003, 1.45, 0, 0, .52778],
        123: [.95003, 1.45, 0, 0, .75],
        125: [.95003, 1.45, 0, 0, .75],
        710: [0, .75, 0, 0, 1.44445],
        732: [0, .75, 0, 0, 1.44445],
        770: [0, .75, 0, 0, 1.44445],
        771: [0, .75, 0, 0, 1.44445],
        8730: [.95003, 1.45, 0, 0, 1],
        8968: [.95003, 1.45, 0, 0, .58334],
        8969: [.95003, 1.45, 0, 0, .58334],
        8970: [.95003, 1.45, 0, 0, .58334],
        8971: [.95003, 1.45, 0, 0, .58334],
        10216: [.95003, 1.45, 0, 0, .75],
        10217: [.95003, 1.45, 0, 0, .75]
      },
      "Size4-Regular": {
        40: [1.25003, 1.75, 0, 0, .79167],
        41: [1.25003, 1.75, 0, 0, .79167],
        47: [1.25003, 1.75, 0, 0, 1.27778],
        91: [1.25003, 1.75, 0, 0, .58334],
        92: [1.25003, 1.75, 0, 0, 1.27778],
        93: [1.25003, 1.75, 0, 0, .58334],
        123: [1.25003, 1.75, 0, 0, .80556],
        125: [1.25003, 1.75, 0, 0, .80556],
        710: [0, .825, 0, 0, 1.8889],
        732: [0, .825, 0, 0, 1.8889],
        770: [0, .825, 0, 0, 1.8889],
        771: [0, .825, 0, 0, 1.8889],
        8730: [1.25003, 1.75, 0, 0, 1],
        8968: [1.25003, 1.75, 0, 0, .63889],
        8969: [1.25003, 1.75, 0, 0, .63889],
        8970: [1.25003, 1.75, 0, 0, .63889],
        8971: [1.25003, 1.75, 0, 0, .63889],
        9115: [.64502, 1.155, 0, 0, .875],
        9116: [1e-5, .6, 0, 0, .875],
        9117: [.64502, 1.155, 0, 0, .875],
        9118: [.64502, 1.155, 0, 0, .875],
        9119: [1e-5, .6, 0, 0, .875],
        9120: [.64502, 1.155, 0, 0, .875],
        9121: [.64502, 1.155, 0, 0, .66667],
        9122: [-99e-5, .601, 0, 0, .66667],
        9123: [.64502, 1.155, 0, 0, .66667],
        9124: [.64502, 1.155, 0, 0, .66667],
        9125: [-99e-5, .601, 0, 0, .66667],
        9126: [.64502, 1.155, 0, 0, .66667],
        9127: [1e-5, .9, 0, 0, .88889],
        9128: [.65002, 1.15, 0, 0, .88889],
        9129: [.90001, 0, 0, 0, .88889],
        9130: [0, .3, 0, 0, .88889],
        9131: [1e-5, .9, 0, 0, .88889],
        9132: [.65002, 1.15, 0, 0, .88889],
        9133: [.90001, 0, 0, 0, .88889],
        9143: [.88502, .915, 0, 0, 1.05556],
        10216: [1.25003, 1.75, 0, 0, .80556],
        10217: [1.25003, 1.75, 0, 0, .80556],
        57344: [-.00499, .605, 0, 0, 1.05556],
        57345: [-.00499, .605, 0, 0, 1.05556],
        57680: [0, .12, 0, 0, .45],
        57681: [0, .12, 0, 0, .45],
        57682: [0, .12, 0, 0, .45],
        57683: [0, .12, 0, 0, .45]
      },
      "Typewriter-Regular": {
        33: [0, .61111, 0, 0, .525],
        34: [0, .61111, 0, 0, .525],
        35: [0, .61111, 0, 0, .525],
        36: [.08333, .69444, 0, 0, .525],
        37: [.08333, .69444, 0, 0, .525],
        38: [0, .61111, 0, 0, .525],
        39: [0, .61111, 0, 0, .525],
        40: [.08333, .69444, 0, 0, .525],
        41: [.08333, .69444, 0, 0, .525],
        42: [0, .52083, 0, 0, .525],
        43: [-.08056, .53055, 0, 0, .525],
        44: [.13889, .125, 0, 0, .525],
        45: [-.08056, .53055, 0, 0, .525],
        46: [0, .125, 0, 0, .525],
        47: [.08333, .69444, 0, 0, .525],
        48: [0, .61111, 0, 0, .525],
        49: [0, .61111, 0, 0, .525],
        50: [0, .61111, 0, 0, .525],
        51: [0, .61111, 0, 0, .525],
        52: [0, .61111, 0, 0, .525],
        53: [0, .61111, 0, 0, .525],
        54: [0, .61111, 0, 0, .525],
        55: [0, .61111, 0, 0, .525],
        56: [0, .61111, 0, 0, .525],
        57: [0, .61111, 0, 0, .525],
        58: [0, .43056, 0, 0, .525],
        59: [.13889, .43056, 0, 0, .525],
        60: [-.05556, .55556, 0, 0, .525],
        61: [-.19549, .41562, 0, 0, .525],
        62: [-.05556, .55556, 0, 0, .525],
        63: [0, .61111, 0, 0, .525],
        64: [0, .61111, 0, 0, .525],
        65: [0, .61111, 0, 0, .525],
        66: [0, .61111, 0, 0, .525],
        67: [0, .61111, 0, 0, .525],
        68: [0, .61111, 0, 0, .525],
        69: [0, .61111, 0, 0, .525],
        70: [0, .61111, 0, 0, .525],
        71: [0, .61111, 0, 0, .525],
        72: [0, .61111, 0, 0, .525],
        73: [0, .61111, 0, 0, .525],
        74: [0, .61111, 0, 0, .525],
        75: [0, .61111, 0, 0, .525],
        76: [0, .61111, 0, 0, .525],
        77: [0, .61111, 0, 0, .525],
        78: [0, .61111, 0, 0, .525],
        79: [0, .61111, 0, 0, .525],
        80: [0, .61111, 0, 0, .525],
        81: [.13889, .61111, 0, 0, .525],
        82: [0, .61111, 0, 0, .525],
        83: [0, .61111, 0, 0, .525],
        84: [0, .61111, 0, 0, .525],
        85: [0, .61111, 0, 0, .525],
        86: [0, .61111, 0, 0, .525],
        87: [0, .61111, 0, 0, .525],
        88: [0, .61111, 0, 0, .525],
        89: [0, .61111, 0, 0, .525],
        90: [0, .61111, 0, 0, .525],
        91: [.08333, .69444, 0, 0, .525],
        92: [.08333, .69444, 0, 0, .525],
        93: [.08333, .69444, 0, 0, .525],
        94: [0, .61111, 0, 0, .525],
        95: [.09514, 0, 0, 0, .525],
        96: [0, .61111, 0, 0, .525],
        97: [0, .43056, 0, 0, .525],
        98: [0, .61111, 0, 0, .525],
        99: [0, .43056, 0, 0, .525],
        100: [0, .61111, 0, 0, .525],
        101: [0, .43056, 0, 0, .525],
        102: [0, .61111, 0, 0, .525],
        103: [.22222, .43056, 0, 0, .525],
        104: [0, .61111, 0, 0, .525],
        105: [0, .61111, 0, 0, .525],
        106: [.22222, .61111, 0, 0, .525],
        107: [0, .61111, 0, 0, .525],
        108: [0, .61111, 0, 0, .525],
        109: [0, .43056, 0, 0, .525],
        110: [0, .43056, 0, 0, .525],
        111: [0, .43056, 0, 0, .525],
        112: [.22222, .43056, 0, 0, .525],
        113: [.22222, .43056, 0, 0, .525],
        114: [0, .43056, 0, 0, .525],
        115: [0, .43056, 0, 0, .525],
        116: [0, .55358, 0, 0, .525],
        117: [0, .43056, 0, 0, .525],
        118: [0, .43056, 0, 0, .525],
        119: [0, .43056, 0, 0, .525],
        120: [0, .43056, 0, 0, .525],
        121: [.22222, .43056, 0, 0, .525],
        122: [0, .43056, 0, 0, .525],
        123: [.08333, .69444, 0, 0, .525],
        124: [.08333, .69444, 0, 0, .525],
        125: [.08333, .69444, 0, 0, .525],
        126: [0, .61111, 0, 0, .525],
        127: [0, .61111, 0, 0, .525],
        176: [0, .61111, 0, 0, .525],
        305: [0, .43056, 0, 0, .525],
        567: [.22222, .43056, 0, 0, .525],
        711: [0, .56597, 0, 0, .525],
        713: [0, .56555, 0, 0, .525],
        714: [0, .61111, 0, 0, .525],
        715: [0, .61111, 0, 0, .525],
        728: [0, .61111, 0, 0, .525],
        730: [0, .61111, 0, 0, .525],
        770: [0, .61111, 0, 0, .525],
        771: [0, .61111, 0, 0, .525],
        776: [0, .61111, 0, 0, .525],
        915: [0, .61111, 0, 0, .525],
        916: [0, .61111, 0, 0, .525],
        920: [0, .61111, 0, 0, .525],
        923: [0, .61111, 0, 0, .525],
        926: [0, .61111, 0, 0, .525],
        928: [0, .61111, 0, 0, .525],
        931: [0, .61111, 0, 0, .525],
        933: [0, .61111, 0, 0, .525],
        934: [0, .61111, 0, 0, .525],
        936: [0, .61111, 0, 0, .525],
        937: [0, .61111, 0, 0, .525],
        8216: [0, .61111, 0, 0, .525],
        8217: [0, .61111, 0, 0, .525],
        8242: [0, .61111, 0, 0, .525],
        9251: [.11111, .21944, 0, 0, .525]
      }
    }
  }, function(e, t, r) {
    "use strict";
    t.a = u;
    var n = r(0),
      a = r(3),
      i = r(1),
      o = r(5),
      s = r(4),
      l = r(2);

    function u(e, t, r) {
      for (var a = s.a(e, t, !1), i = t.sizeMultiplier / r.sizeMultiplier, l = 0; l < a.length; l++) {
        var u = o.a.indexOf(a[l].classes, "sizing");
        u < 0 ? Array.prototype.push.apply(a[l].classes, t.sizingClasses(r)) : a[l].classes[u + 1] === "reset-size" + t.size && (a[l].classes[u + 1] = "reset-size" + r.size), a[l].height *= i, a[l].depth *= i
      }
      return n.a.makeFragment(a)
    }
    var c = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
    Object(a.b)({
      type: "sizing",
      names: c,
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = e.breakOnTokenText,
          n = e.funcName,
          a = e.parser;
        a.consumeSpaces();
        var i = a.parseExpression(!1, r);
        return {
          type: "sizing",
          size: o.a.indexOf(c, n) + 1,
          value: i
        }
      },
      htmlBuilder: function(e, t) {
        var r = t.havingSize(e.value.size);
        return u(e.value.value, r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = t.havingSize(e.value.size),
          n = l.a(e.value.value, r),
          a = new i.a.MathNode("mstyle", n);
        return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a
      }
    })
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return i
    }), t.b = function(e) {
      for (var t = e.type, r = e.names, o = e.props, s = e.handler, l = e.htmlBuilder, u = e.mathmlBuilder, c = {
          numArgs: o.numArgs || 0,
          greediness: 1,
          allowedInText: !1,
          numOptionalArgs: 0,
          handler: s
        }, h = 0; h < r.length; ++h) i[r[h]] = c;
      l && (n.d[t] = l);
      u && (a.d[t] = u)
    };
    var n = r(4),
      a = r(2),
      i = (r(43), r(14), {})
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return f
    }), r.d(t, "b", function() {
      return g
    });
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(145),
      l = r.n(s),
      u = r(6),
      c = r(31),
      h = r(27),
      p = "%[^\n]*[\n]",
      m = "\\\\[a-zA-Z@]+",
      d = "[\u0300-\u036f]",
      f = new RegExp(d + "+$"),
      v = new RegExp("([ \r\n\t]+)|(" + p + "|[!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff]" + d + "*|[\ud800-\udbff][\udc00-\udfff]" + d + "*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|" + m + "|\\\\[^\ud800-\udfff])"),
      g = new RegExp("^" + m),
      y = new RegExp("^" + p),
      b = function() {
        function e(t) {
          a()(this, e), this.input = t, this.pos = 0
        }
        return o()(e, [{
          key: "lex",
          value: function() {
            var e = this.input,
              t = this.pos;
            if (t === e.length) return new h.a("EOF", new c.a(this, t, t));
            var r = l()(v, e, t);
            if (null === r) throw new u.a("Unexpected character: '" + e[t] + "'", new h.a(e[t], new c.a(this, t, t + 1)));
            var n = r[2] || " ",
              a = this.pos;
            this.pos += r[0].length;
            var i = this.pos;
            return y.test(n) ? this.lex() : new h.a(n, new c.a(this, a, i))
          }
        }]), e
      }();
    t.c = b
  }, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(64),
      a = (r.n(n), r(65));
    t.default = a.a
  }, function(e, t) {}, function(e, t, r) {
    "use strict";
    var n = r(6),
      a = r(34),
      i = r(76),
      o = r(113),
      s = r(5),
      l = function(e, t, r) {
        s.a.clearNode(t);
        var n = u(e, r).toNode();
        t.appendChild(n)
      };
    "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), l = function() {
      throw new n.a("KaTeX doesn't work in quirks mode.")
    });
    var u = function(e, t) {
      var r = new a.a(t),
        n = Object(o.a)(e, r);
      return Object(i.b)(n, e, r)
    };
    t.a = {
      render: l,
      renderToString: function(e, t) {
        return u(e, t).toMarkup()
      },
      ParseError: n.a,
      __parse: function(e, t) {
        var r = new a.a(t);
        return Object(o.a)(e, r)
      },
      __renderToDomTree: u,
      __renderToHTMLTree: function(e, t) {
        var r = new a.a(t),
          n = Object(o.a)(e, r);
        return Object(i.a)(n, e, r)
      }
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(67),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(68), e.exports = r(8).Object.freeze
  }, function(e, t, r) {
    var n = r(20),
      a = r(69).onFreeze;
    r(46)("freeze", function(e) {
      return function(t) {
        return e && n(t) ? e(a(t)) : t
      }
    })
  }, function(e, t, r) {
    var n = r(32)("meta"),
      a = r(20),
      i = r(21),
      o = r(15).f,
      s = 0,
      l = Object.isExtensible || function() {
        return !0
      },
      u = !r(24)(function() {
        return l(Object.preventExtensions({}))
      }),
      c = function(e) {
        o(e, n, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        })
      },
      h = e.exports = {
        KEY: n,
        NEED: !1,
        fastKey: function(e, t) {
          if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, n)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            c(e)
          }
          return e[n].i
        },
        getWeak: function(e, t) {
          if (!i(e, n)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            c(e)
          }
          return e[n].w
        },
        onFreeze: function(e) {
          return u && h.NEED && l(e) && !i(e, n) && c(e), e
        }
      }
  }, function(e, t, r) {
    e.exports = !r(23) && !r(24)(function() {
      return 7 != Object.defineProperty(r(45)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t) {
      if (!n(e)) return e;
      var r, a;
      if (t && "function" == typeof(r = e.toString) && !n(a = r.call(e))) return a;
      if ("function" == typeof(r = e.valueOf) && !n(a = r.call(e))) return a;
      if (!t && "function" == typeof(r = e.toString) && !n(a = r.call(e))) return a;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(74),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(75);
    var n = r(8).Object;
    e.exports = function(e, t, r) {
      return n.defineProperty(e, t, r)
    }
  }, function(e, t, r) {
    var n = r(25);
    n(n.S + n.F * !r(23), "Object", {
      defineProperty: r(15).f
    })
  }, function(e, t, r) {
    "use strict";
    r.d(t, "b", function() {
      return u
    }), r.d(t, "a", function() {
      return c
    });
    var n = r(4),
      a = r(2),
      i = r(0),
      o = r(43),
      s = (r(34), r(9)),
      l = function(e) {
        return new o.a({
          style: e.displayMode ? s.a.DISPLAY : s.a.TEXT,
          maxSize: e.maxSize
        })
      },
      u = function(e, t, r) {
        var o = l(r),
          s = Object(a.c)(e, t, o),
          u = Object(n.c)(e, o),
          c = i.a.makeSpan(["katex"], [s, u]);
        return r.displayMode ? i.a.makeSpan(["katex-display"], [c]) : c
      },
      c = function(e, t, r) {
        var a = l(r),
          o = Object(n.c)(e, a),
          s = i.a.makeSpan(["katex"], [o]);
        return r.displayMode ? i.a.makeSpan(["katex-display"], [s]) : s
      }
  }, function(e, t, r) {
    e.exports = {
      default: r(78),
      __esModule: !0
    }
  }, function(e, t, r) {
    var n = r(8),
      a = n.JSON || (n.JSON = {
        stringify: JSON.stringify
      });
    e.exports = function(e) {
      return a.stringify.apply(a, arguments)
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(80),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(36), r(92), e.exports = r(8).Array.from
  }, function(e, t, r) {
    var n = r(37),
      a = r(38);
    e.exports = function(e) {
      return function(t, r) {
        var i, o, s = String(a(t)),
          l = n(r),
          u = s.length;
        return l < 0 || l >= u ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : o - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, function(e, t) {
    e.exports = !0
  }, function(e, t, r) {
    e.exports = r(26)
  }, function(e, t, r) {
    "use strict";
    var n = r(85),
      a = r(33),
      i = r(54),
      o = {};
    r(26)(o, r(11)("iterator"), function() {
      return this
    }), e.exports = function(e, t, r) {
      e.prototype = n(o, {
        next: a(1, r)
      }), i(e, t + " Iterator")
    }
  }, function(e, t, r) {
    var n = r(22),
      a = r(86),
      i = r(53),
      o = r(41)("IE_PROTO"),
      s = function() {},
      l = "prototype",
      u = function() {
        var e, t = r(45)("iframe"),
          n = i.length;
        for (t.style.display = "none", r(90).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; n--;) delete u[l][i[n]];
        return u()
      };
    e.exports = Object.create || function(e, t) {
      var r;
      return null !== e ? (s[l] = n(e), r = new s, s[l] = null, r[o] = e) : r = u(), void 0 === t ? r : a(r, t)
    }
  }, function(e, t, r) {
    var n = r(15),
      a = r(22),
      i = r(39);
    e.exports = r(23) ? Object.defineProperties : function(e, t) {
      a(e);
      for (var r, o = i(t), s = o.length, l = 0; s > l;) n.f(e, r = o[l++], t[r]);
      return e
    }
  }, function(e, t, r) {
    var n = r(21),
      a = r(40),
      i = r(88)(!1),
      o = r(41)("IE_PROTO");
    e.exports = function(e, t) {
      var r, s = a(e),
        l = 0,
        u = [];
      for (r in s) r != o && n(s, r) && u.push(r);
      for (; t.length > l;) n(s, r = t[l++]) && (~i(u, r) || u.push(r));
      return u
    }
  }, function(e, t, r) {
    var n = r(40),
      a = r(51),
      i = r(89);
    e.exports = function(e) {
      return function(t, r, o) {
        var s, l = n(t),
          u = a(l.length),
          c = i(o, u);
        if (e && r != r) {
          for (; u > c;)
            if ((s = l[c++]) != s) return !0
        } else
          for (; u > c; c++)
            if ((e || c in l) && l[c] === r) return e || c || 0;
        return !e && -1
      }
    }
  }, function(e, t, r) {
    var n = r(37),
      a = Math.max,
      i = Math.min;
    e.exports = function(e, t) {
      return (e = n(e)) < 0 ? a(e + t, 0) : i(e, t)
    }
  }, function(e, t, r) {
    e.exports = r(16).document && document.documentElement
  }, function(e, t, r) {
    var n = r(21),
      a = r(29),
      i = r(41)("IE_PROTO"),
      o = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
      return e = a(e), n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(47),
      a = r(25),
      i = r(29),
      o = r(93),
      s = r(94),
      l = r(51),
      u = r(95),
      c = r(55);
    a(a.S + a.F * !r(96)(function(e) {
      Array.from(e)
    }), "Array", {
      from: function(e) {
        var t, r, a, h, p = i(e),
          m = "function" == typeof this ? this : Array,
          d = arguments.length,
          f = d > 1 ? arguments[1] : void 0,
          v = void 0 !== f,
          g = 0,
          y = c(p);
        if (v && (f = n(f, d > 2 ? arguments[2] : void 0, 2)), void 0 == y || m == Array && s(y))
          for (r = new m(t = l(p.length)); t > g; g++) u(r, g, v ? f(p[g], g) : p[g]);
        else
          for (h = y.call(p), r = new m; !(a = h.next()).done; g++) u(r, g, v ? o(h, f, [a.value, g], !0) : a.value);
        return r.length = g, r
      }
    })
  }, function(e, t, r) {
    var n = r(22);
    e.exports = function(e, t, r, a) {
      try {
        return a ? t(n(r)[0], r[1]) : t(r)
      } catch (t) {
        var i = e.return;
        throw void 0 !== i && n(i.call(e)), t
      }
    }
  }, function(e, t, r) {
    var n = r(17),
      a = r(11)("iterator"),
      i = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (n.Array === e || i[a] === e)
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(15),
      a = r(33);
    e.exports = function(e, t, r) {
      t in e ? n.f(e, t, a(0, r)) : e[t] = r
    }
  }, function(e, t, r) {
    var n = r(11)("iterator"),
      a = !1;
    try {
      var i = [7][n]();
      i.return = function() {
        a = !0
      }, Array.from(i, function() {
        throw 2
      })
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !a) return !1;
      var r = !1;
      try {
        var i = [7],
          o = i[n]();
        o.next = function() {
          return {
            done: r = !0
          }
        }, i[n] = function() {
          return o
        }, e(i)
      } catch (e) {}
      return r
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(98),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(58), r(36), e.exports = r(102)
  }, function(e, t, r) {
    "use strict";
    var n = r(100),
      a = r(101),
      i = r(17),
      o = r(40);
    e.exports = r(48)(Array, "Array", function(e, t) {
      this._t = o(e), this._i = 0, this._k = t
    }, function() {
      var e = this._t,
        t = this._k,
        r = this._i++;
      return !e || r >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
    }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries")
  }, function(e, t) {
    e.exports = function() {}
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  }, function(e, t, r) {
    var n = r(56),
      a = r(11)("iterator"),
      i = r(17);
    e.exports = r(8).isIterable = function(e) {
      var t = Object(e);
      return void 0 !== t[a] || "@@iterator" in t || i.hasOwnProperty(n(t))
    }
  }, function(e, t, r) {
    r(58), r(36), e.exports = r(104)
  }, function(e, t, r) {
    var n = r(22),
      a = r(55);
    e.exports = r(8).getIterator = function(e) {
      var t = a(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return n(t.call(e))
    }
  }, function(e, t, r) {
    e.exports = {
      default: r(106),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(107), e.exports = r(8).Object.assign
  }, function(e, t, r) {
    var n = r(25);
    n(n.S + n.F, "Object", {
      assign: r(108)
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(39),
      a = r(109),
      i = r(110),
      o = r(29),
      s = r(49),
      l = Object.assign;
    e.exports = !l || r(24)(function() {
      var e = {},
        t = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";
      return e[r] = 7, n.split("").forEach(function(e) {
        t[e] = e
      }), 7 != l({}, e)[r] || Object.keys(l({}, t)).join("") != n
    }) ? function(e, t) {
      for (var r = o(e), l = arguments.length, u = 1, c = a.f, h = i.f; l > u;)
        for (var p, m = s(arguments[u++]), d = c ? n(m).concat(c(m)) : n(m), f = d.length, v = 0; f > v;) h.call(m, p = d[v++]) && (r[p] = m[p]);
      return r
    } : l
  }, function(e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function(e, t) {
    t.f = {}.propertyIsEnumerable
  }, function(e, t, r) {
    "use strict";
    var n = {
      stdHorizRule: "M0 80H400000 v40H0z M0 80H400000 v40H0z",
      vertSeparator: "M100 0h50V400000h-50zM100 0h50V400000h-50z",
      sqrtMain: "M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",
      sqrtSize1: "M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",
      sqrtSize2: "M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",
      sqrtSize3: "M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",
      sqrtSize4: "M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",
      doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
      doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
      leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
      leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
      leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
      leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
      leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
      leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
      leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
      leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
      leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
      lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
      leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
      leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
      leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
      longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
      midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
      midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
      rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
      rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
      rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
      rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
      rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
      rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
      rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
      rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
      rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
      righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
      rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
      rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
      twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
      twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
      tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
      tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
      tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
      tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
      vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
      widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
      widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      baraboveleftarrow: "M1 500c30.67-18 59-41.833 85-71.5s45-61.17 57-94.5h23\nc15.33 0 23 .33 23 1 0 .67-5.33 12.67-16 36-16.67 34.67-39 67.33-67 98l-10 11\nh39904v40H96l9 10c27.33 30.67 50.67 65 70 103l14 33c0 .67-7.67 1-23 1h-22\nC116.67 596.33 69 540.67 1 500z M96 480 H400000 v40 H96z\nM1 147 H399905 v40  H1z M0 147 H399905 v40  H0z",
      rightarrowabovebar: "M400000 167c-70.67 42-118 97.67-142 167h-23c-15.33 0\n-23-.33-23-1 0-1.33 5.33-13.67 16-37 18-35.33 41.33-69 70-101l7-8h-39905\nv-40h39905c-389 0 0 0 0 0l-7-8c-28.67-32-52-65.67-70-101-10.67-23.33-16-35.67\n-16-37 0-.67 7.67-1 23-1h23c11.33 33.33 30 64.833 56 94.5s54.67 53.83 86 72.5z\nM0 147 H399905 v40  H0z M96 480 H400000 v40 H0z M96 480 H400000 v40 H0z",
      baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
      rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
      shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
      shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
    };
    t.a = {
      path: n
    }
  }, function(e, t, r) {
    "use strict";
    r.d(t, "a", function() {
      return o
    }), r.d(t, "b", function() {
      return s
    });
    var n = {
        number: 3,
        unit: "mu"
      },
      a = {
        number: 4,
        unit: "mu"
      },
      i = {
        number: 5,
        unit: "mu"
      },
      o = {
        mord: {
          mop: n,
          mbin: a,
          mrel: i,
          minner: n
        },
        mop: {
          mord: n,
          mop: n,
          mrel: i,
          minner: n
        },
        mbin: {
          mord: a,
          mop: a,
          mopen: a,
          minner: a
        },
        mrel: {
          mord: i,
          mop: i,
          mopen: i,
          minner: i
        },
        mopen: {},
        mclose: {
          mop: n,
          mbin: a,
          mrel: i,
          minner: n
        },
        mpunct: {
          mord: n,
          mop: n,
          mrel: i,
          mopen: n,
          mclose: n,
          mpunct: n,
          minner: n
        },
        minner: {
          mord: n,
          mop: n,
          mbin: a,
          mrel: i,
          mopen: n,
          mpunct: n,
          minner: n
        }
      },
      s = {
        mord: {
          mop: n
        },
        mop: {
          mord: n,
          mop: n
        },
        mbin: {},
        mrel: {},
        mopen: {},
        mclose: {
          mop: n
        },
        mpunct: {},
        minner: {
          mop: n
        }
      }
  }, function(e, t, r) {
    "use strict";
    var n = r(114);
    t.a = function(e, t) {
      if (!("string" == typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
      return new n.a(e, t).parse()
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(115),
      l = r(142),
      u = r(144),
      c = r(28),
      h = r(19),
      p = r(42),
      m = r(148),
      d = r.n(m),
      f = r(149),
      v = r(14),
      g = r(6),
      y = r(62);
    r(34), r(27);

    function b(e, t) {
      return {
        type: "arg",
        result: e,
        token: t
      }
    }

    function x(e) {
      if ("$" === e.type) throw new g.a("Unexpected $", e.token);
      return e
    }
    var w = function() {
      function e(t, r) {
        a()(this, e), this.mode = "math", this.gullet = new u.a(t, r.macros, this.mode), r.colorIsTextColor && (this.gullet.macros["\\color"] = "\\textcolor"), this.settings = r, this.leftrightDepth = 0
      }
      return o()(e, [{
        key: "expect",
        value: function(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.nextToken.text !== e) throw new g.a("Expected '" + e + "', got '" + this.nextToken.text + "'", this.nextToken);
          t && this.consume()
        }
      }, {
        key: "consume",
        value: function() {
          this.nextToken = this.gullet.expandNextToken()
        }
      }, {
        key: "switchMode",
        value: function(e) {
          this.mode = e, this.gullet.switchMode(e)
        }
      }, {
        key: "parse",
        value: function() {
          this.consume();
          var e = this.parseInput();
          return e
        }
      }, {
        key: "parseInput",
        value: function() {
          var e = this.parseExpression(!1);
          return this.expect("EOF", !1), e
        }
      }, {
        key: "parseExpression",
        value: function(t, r) {
          for (var n = [];;) {
            "math" === this.mode && this.consumeSpaces();
            var a = this.nextToken;
            if (-1 !== e.endOfExpression.indexOf(a.text)) break;
            if (r && a.text === r) break;
            if (t && s.a[a.text] && s.a[a.text].infix) break;
            var i = this.parseAtom(r);
            if (!i) {
              if (!this.settings.throwOnError && "\\" === a.text[0]) {
                var o = this.handleUnsupportedCmd();
                n.push(o);
                continue
              }
              break
            }
            n.push(i)
          }
          return this.handleInfixNodes(n)
        }
      }, {
        key: "handleInfixNodes",
        value: function(e) {
          for (var t = -1, r = void 0, n = 0; n < e.length; n++) {
            var a = e[n];
            if ("infix" === a.type) {
              if (-1 !== t) throw new g.a("only one infix operator per group", a.value.token);
              t = n, r = a.value.replaceWith
            }
          }
          if (-1 !== t && r) {
            var i = void 0,
              o = void 0,
              s = e.slice(0, t),
              l = e.slice(t + 1);
            i = 1 === s.length && "ordgroup" === s[0].type ? s[0] : new v.a("ordgroup", s, this.mode), o = 1 === l.length && "ordgroup" === l[0].type ? l[0] : new v.a("ordgroup", l, this.mode);
            var u = this.callFunction(r, [i, o], []);
            return [new v.a(u.type, u, this.mode)]
          }
          return e
        }
      }, {
        key: "handleSupSubscript",
        value: function(t) {
          var r = this.nextToken,
            n = r.text;
          this.consume(), this.consumeSpaces();
          var a = this.parseGroup();
          if (!a) {
            if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new g.a("Expected group after '" + n + "'", r);
            return this.handleUnsupportedCmd()
          }
          var i = x(a);
          if ("fn" === i.type) {
            if (s.a[i.result].greediness > e.SUPSUB_GREEDINESS) return this.parseGivenFunction(a);
            throw new g.a("Got function '" + i.result + "' with no arguments as " + t, r)
          }
          return i.result
        }
      }, {
        key: "handleUnsupportedCmd",
        value: function() {
          for (var e = this.nextToken.text, t = [], r = 0; r < e.length; r++) t.push(new v.a("textord", e[r], "text"));
          var n = new v.a("text", {
              body: t,
              type: "text"
            }, this.mode),
            a = new v.a("color", {
              color: this.settings.errorColor,
              value: [n],
              type: "color"
            }, this.mode);
          return this.consume(), a
        }
      }, {
        key: "parseAtom",
        value: function(e) {
          var t = this.parseImplicitGroup(e);
          if ("text" === this.mode) return t;
          for (var r = void 0, n = void 0;;) {
            this.consumeSpaces();
            var a = this.nextToken;
            if ("\\limits" === a.text || "\\nolimits" === a.text) {
              if (!t || "op" !== t.type) throw new g.a("Limit controls must follow a math operator", a);
              var i = "\\limits" === a.text;
              t.value.limits = i, t.value.alwaysHandleSupSub = !0, this.consume()
            } else if ("^" === a.text) {
              if (r) throw new g.a("Double superscript", a);
              r = this.handleSupSubscript("superscript")
            } else if ("_" === a.text) {
              if (n) throw new g.a("Double subscript", a);
              n = this.handleSupSubscript("subscript")
            } else {
              if ("'" !== a.text) break;
              if (r) throw new g.a("Double superscript", a);
              var o = new v.a("textord", "\\prime", this.mode),
                s = [o];
              for (this.consume();
                "'" === this.nextToken.text;) s.push(o), this.consume();
              "^" === this.nextToken.text && s.push(this.handleSupSubscript("superscript")), r = new v.a("ordgroup", s, this.mode)
            }
          }
          return r || n ? new v.a("supsub", {
            base: t,
            sup: r,
            sub: n
          }, this.mode) : t
        }
      }, {
        key: "parseImplicitGroup",
        value: function(e) {
          var t = this.parseSymbol();
          if (null == t) return this.parseFunction();
          if ("arg" === t.type) return this.parseGivenFunction(t);
          var r = t.result;
          if ("$" === r) {
            if ("math" === this.mode) throw new g.a("$ within math mode");
            var n = this.mode;
            this.switchMode("math"), this.consume();
            var a = this.parseExpression(!1, "$");
            return this.expect("$", !1), this.switchMode(n), this.consume(), new v.a("styling", {
              style: "text",
              value: a
            }, "math")
          }
          if ("\\begin" === r) {
            var i = this.parseGivenFunction(t),
              o = i.value.name;
            if (!l.a.hasOwnProperty(o)) throw new g.a("No such environment: " + o, i.value.nameGroup);
            var s = l.a[o],
              u = this.parseArguments("\\begin{" + o + "}", s),
              c = u.args,
              h = u.optArgs,
              p = {
                mode: this.mode,
                envName: o,
                parser: this
              },
              m = s.handler(p, c, h);
            this.expect("\\end", !1);
            var d = this.nextToken,
              f = this.parseFunction();
            if (!f) throw new g.a("failed to parse function after \\end");
            if (f.value.name !== o) throw new g.a("Mismatch: \\begin{" + o + "} matched by \\end{" + f.value.name + "}", d);
            return m
          }
          return this.parseGivenFunction(t, e)
        }
      }, {
        key: "parseFunction",
        value: function() {
          var e = this.parseGroup();
          return e ? this.parseGivenFunction(e) : null
        }
      }, {
        key: "parseGivenFunction",
        value: function(e, t) {
          if ("fn" === (e = x(e)).type) {
            var r = e.result,
              n = s.a[r];
            if ("text" === this.mode && !n.allowedInText) throw new g.a("Can't use function '" + r + "' in text mode", e.token);
            if ("math" === this.mode && !1 === n.allowedInMath) throw new g.a("Can't use function '" + r + "' in math mode", e.token);
            var a = this.parseArguments(r, n),
              i = a.args,
              o = a.optArgs,
              l = e.token,
              u = this.callFunction(r, i, o, l, t);
            return new v.a(u.type, u, this.mode)
          }
          return e.result
        }
      }, {
        key: "callFunction",
        value: function(e, t, r, n, a) {
          var i = {
              funcName: e,
              parser: this,
              token: n,
              breakOnTokenText: a
            },
            o = s.a[e];
          if (o && o.handler) return o.handler(i, t, r);
          throw new g.a("No function handler for " + e)
        }
      }, {
        key: "parseArguments",
        value: function(e, t) {
          var r = t.numArgs + t.numOptionalArgs;
          if (0 === r) return {
            args: [],
            optArgs: []
          };
          for (var n = t.greediness, a = [], i = [], o = 0; o < r; o++) {
            var l = t.argTypes && t.argTypes[o],
              u = o < t.numOptionalArgs;
            o > 0 && !u && this.consumeSpaces(), 0 !== o || u || "math" !== this.mode || this.consumeSpaces();
            var c = this.nextToken,
              h = l ? this.parseGroupOfType(l, u) : this.parseGroup(u);
            if (!h) {
              if (u) {
                i.push(null);
                continue
              }
              if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new g.a("Expected group after '" + e + "'", c);
              h = b(this.handleUnsupportedCmd(), c)
            }
            var p = void 0;
            if ("fn" === (h = x(h)).type) {
              if (!(s.a[h.result].greediness > n)) throw new g.a("Got function '" + h.result + "' as argument to '" + e + "'", c);
              p = this.parseGivenFunction(h)
            } else p = h.result;
            (u ? i : a).push(p)
          }
          return {
            args: a,
            optArgs: i
          }
        }
      }, {
        key: "parseGroupOfType",
        value: function(e, t) {
          return "original" === e && (e = this.mode), "color" === e ? this.parseColorGroup(t) : "size" === e ? this.parseSizeGroup(t) : "url" === e ? this.parseUrlGroup(t) : this.parseGroup(t, e)
        }
      }, {
        key: "consumeSpaces",
        value: function() {
          for (;
            " " === this.nextToken.text;) this.consume()
        }
      }, {
        key: "parseStringGroup",
        value: function(e, t) {
          if (t && "[" !== this.nextToken.text) return null;
          var r = this.mode;
          this.mode = "text", this.expect(t ? "[" : "{");
          for (var n = "", a = this.nextToken, i = a; this.nextToken.text !== (t ? "]" : "}");) {
            if ("EOF" === this.nextToken.text) throw new g.a("Unexpected end of input in " + e, a.range(this.nextToken, n));
            n += (i = this.nextToken).text, this.consume()
          }
          return this.mode = r, this.expect(t ? "]" : "}"), a.range(i, n)
        }
      }, {
        key: "parseStringGroupWithBalancedBraces",
        value: function(e, t) {
          if (t && "[" !== this.nextToken.text) return null;
          var r = this.mode;
          this.mode = "text", this.expect(t ? "[" : "{");
          for (var n = "", a = 0, i = this.nextToken, o = i; a > 0 || this.nextToken.text !== (t ? "]" : "}");) {
            if ("EOF" === this.nextToken.text) throw new g.a("Unexpected end of input in " + e, i.range(this.nextToken, n));
            if (n += (o = this.nextToken).text, "{" === o.text) a += 1;
            else if ("}" === o.text) {
              if (a <= 0) throw new g.a("Unbalanced brace of input in " + e, i.range(this.nextToken, n));
              a -= 1
            }
            this.consume()
          }
          return this.mode = r, this.expect(t ? "]" : "}"), i.range(o, n)
        }
      }, {
        key: "parseRegexGroup",
        value: function(e, t) {
          var r = this.mode;
          this.mode = "text";
          for (var n = this.nextToken, a = n, i = "";
            "EOF" !== this.nextToken.text && e.test(i + this.nextToken.text);) i += (a = this.nextToken).text, this.consume();
          if ("" === i) throw new g.a("Invalid " + t + ": '" + n.text + "'", n);
          return this.mode = r, n.range(a, i)
        }
      }, {
        key: "parseColorGroup",
        value: function(e) {
          var t = this.parseStringGroup("color", e);
          if (!t) return null;
          var r = /^(#[a-f0-9]{3}|#[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
          if (!r) throw new g.a("Invalid color: '" + t.text + "'", t);
          return b(new v.a("color", r[0], this.mode), t)
        }
      }, {
        key: "parseUrlGroup",
        value: function(e) {
          var t = this.parseStringGroupWithBalancedBraces("url", e);
          if (!t) return null;
          var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return b(new v.a("url", r, this.mode), t)
        }
      }, {
        key: "parseSizeGroup",
        value: function(e) {
          var t = void 0;
          if (!(t = e || "{" === this.nextToken.text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
          var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
          if (!r) throw new g.a("Invalid size: '" + t.text + "'", t);
          var n = {
            number: +(r[1] + r[2]),
            unit: r[3]
          };
          if (!Object(h.b)(n)) throw new g.a("Invalid unit: '" + n.unit + "'", t);
          return b(new v.a("size", n, this.mode), t)
        }
      }, {
        key: "parseGroup",
        value: function(e, t) {
          var r = this.mode,
            n = this.nextToken;
          if (this.nextToken.text === (e ? "[" : "{")) {
            t && this.switchMode(t), this.consume();
            var a = this.parseExpression(!1, e ? "]" : "}"),
              i = this.nextToken;
            return t && this.switchMode(r), this.expect(e ? "]" : "}"), "text" === t && this.formLigatures(a), b(new v.a("ordgroup", a, this.mode, n, i), n.range(i, n.text))
          }
          t && this.switchMode(t);
          var o = e ? null : this.parseSymbol();
          return t && this.switchMode(r), o
        }
      }, {
        key: "formLigatures",
        value: function(e) {
          for (var t = e.length - 1, r = 0; r < t; ++r) {
            var n = e[r],
              a = n.value;
            "-" === a && "-" === e[r + 1].value && (r + 1 < t && "-" === e[r + 2].value ? (e.splice(r, 3, new v.a("textord", "---", "text", n, e[r + 2])), t -= 2) : (e.splice(r, 2, new v.a("textord", "--", "text", n, e[r + 1])), t -= 1)), "'" !== a && "`" !== a || e[r + 1].value !== a || (e.splice(r, 2, new v.a("textord", a + a, "text", n, e[r + 1])), t -= 1)
          }
        }
      }, {
        key: "parseSymbol",
        value: function() {
          var e, t = this.nextToken,
            r = t.text;
          if (s.a[r]) return this.consume(), {
            type: "fn",
            result: (e = t).text,
            token: e
          };
          if (/^\\verb[^a-zA-Z]/.test(r)) {
            this.consume();
            var n = r.slice(5),
              a = "*" === n.charAt(0);
            if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)) throw new g.a("\\verb assertion failed --\n                    please report what input caused this bug");
            return n = n.slice(1, -1), b(new v.a("verb", {
              body: n,
              star: a
            }, "text"), t)
          }
          if ("$" === r) return {
            type: "$",
            result: "$",
            token: t
          };
          f.a.hasOwnProperty(r[0]) && !c.a[this.mode][r[0]] && (r = f.a[r[0]] + r.substr(1));
          var i = y.a.exec(r);
          i && ("i" === (r = r.substring(0, i.index)) ? r = "\u0131" : "j" === r && (r = "\u0237"));
          var o = null;
          if (c.a[this.mode][r]) o = new v.a(c.a[this.mode][r].group, r, this.mode, t);
          else {
            if ("text" !== this.mode || !Object(p.b)(r.charCodeAt(0))) return null;
            o = new v.a("textord", r, this.mode, t)
          }
          if (this.consume(), i)
            for (var l = 0; l < i[0].length; l++) {
              var u = i[0][l];
              if (!d.a[u]) throw new g.a("Unknown accent ' " + u + "'", t);
              var h = d.a[u][this.mode];
              if (!h) throw new g.a("Accent " + u + " unsupported in " + this.mode + " mode", t);
              o = new v.a("accent", {
                type: "accent",
                label: h,
                isStretchy: !1,
                isShifty: !0,
                base: o
              }, this.mode, t)
            }
          return b(o, t)
        }
      }]), e
    }();
    w.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"], w.SUPSUB_GREEDINESS = 1, t.a = w
  }, function(e, t, r) {
    "use strict";
    var n = r(6),
      a = r(14),
      i = r(3),
      o = (r(116), r(117), r(118), r(119), r(120), r(121), r(122), r(123), r(124), r(125), r(126), r(127), r(128), r(129), r(130), r(131), r(60), r(132), r(133), r(137), r(138), r(139), r(140), r(141), i.a);
    t.a = o;
    var s = function(e, t, r) {
      Object(i.b)({
        names: e,
        props: t,
        handler: r
      })
    };
    s(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {
      numArgs: 1
    }, function(e, t) {
      var r = t[0];
      return {
        type: "mclass",
        mclass: "m" + e.funcName.substr(5),
        value: Object(i.c)(r)
      }
    }), s(["\\stackrel"], {
      numArgs: 2
    }, function(e, t) {
      var r = t[0],
        n = t[1],
        o = new a.a("op", {
          type: "op",
          limits: !0,
          alwaysHandleSupSub: !0,
          symbol: !1,
          value: Object(i.c)(n)
        }, n.mode);
      return {
        type: "mclass",
        mclass: "mrel",
        value: [new a.a("supsub", {
          base: o,
          sup: r,
          sub: null
        }, r.mode)]
      }
    });
    var l = {
      "\u222b": "\\int",
      "\u222c": "\\iint",
      "\u222d": "\\iiint",
      "\u222e": "\\oint"
    };
    s(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], {
      numArgs: 0
    }, function(e) {
      return {
        type: "op",
        limits: !1,
        symbol: !1,
        body: e.funcName
      }
    }), s(["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], {
      numArgs: 0
    }, function(e) {
      return {
        type: "op",
        limits: !0,
        symbol: !1,
        body: e.funcName
      }
    }), s(["\\int", "\\iint", "\\iiint", "\\oint", "\u222b", "\u222c", "\u222d", "\u222e"], {
      numArgs: 0
    }, function(e) {
      var t = e.funcName;
      return 1 === t.length && (t = l[t]), {
        type: "op",
        limits: !1,
        symbol: !0,
        body: t
      }
    }), s(["\\overbrace", "\\underbrace"], {
      numArgs: 1
    }, function(e, t) {
      var r = t[0];
      return {
        type: "horizBrace",
        label: e.funcName,
        isOver: /^\\over/.test(e.funcName),
        base: r
      }
    }), s(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"], {
      numArgs: 1,
      numOptionalArgs: 1
    }, function(e, t, r) {
      var n = r[0],
        a = t[0];
      return {
        type: "xArrow",
        label: e.funcName,
        body: a,
        below: n
      }
    }), s(["\\over", "\\choose", "\\atop"], {
      numArgs: 0,
      infix: !0
    }, function(e) {
      var t = void 0;
      switch (e.funcName) {
        case "\\over":
          t = "\\frac";
          break;
        case "\\choose":
          t = "\\binom";
          break;
        case "\\atop":
          t = "\\\\atopfrac";
          break;
        default:
          throw new Error("Unrecognized infix genfrac command")
      }
      return {
        type: "infix",
        replaceWith: t,
        token: e.token
      }
    }), s(["\\\\", "\\cr"], {
      numArgs: 0,
      numOptionalArgs: 1,
      argTypes: ["size"]
    }, function(e, t, r) {
      return {
        type: "cr",
        size: r[0]
      }
    }), s(["\\begin", "\\end"], {
      numArgs: 1,
      argTypes: ["text"]
    }, function(e, t) {
      var r = t[0];
      if ("ordgroup" !== r.type) throw new n.a("Invalid environment name", r);
      for (var a = "", i = 0; i < r.value.length; ++i) a += r.value[i].value;
      return {
        type: "environment",
        name: a,
        nameGroup: r
      }
    }), s(["\\raisebox"], {
      numArgs: 2,
      argTypes: ["size", "text"],
      allowedInText: !0
    }, function(e, t) {
      var r = t[0],
        n = t[1];
      return {
        type: "raisebox",
        dy: r,
        body: n,
        value: Object(i.c)(n)
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(12),
      o = r(1),
      s = r(44),
      l = r(9),
      u = r(4),
      c = r(2);
    Object(n.b)({
      type: "sqrt",
      names: ["\\sqrt"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1
      },
      handler: function(e, t, r) {
        var n = r[0];
        return {
          type: "sqrt",
          body: t[0],
          index: n
        }
      },
      htmlBuilder: function(e, t) {
        var r = u.b(e.value.body, t.havingCrampedStyle());
        0 === r.height && (r.height = t.fontMetrics().xHeight), r instanceof i.a.documentFragment && (r = a.a.makeSpan([], [r], t));
        var n = t.fontMetrics().defaultRuleThickness,
          o = n;
        t.style.id < l.a.TEXT.id && (o = t.fontMetrics().xHeight);
        var c = n + o / 4,
          h = (r.height + r.depth + c + n) * t.sizeMultiplier,
          p = s.a.sqrtImage(h, t),
          m = p.span,
          d = p.ruleWidth,
          f = m.height - d;
        f > r.height + r.depth + c && (c = (c + f - r.height - r.depth) / 2);
        var v = m.height - r.height - c - d;
        r.style.paddingLeft = m.advanceWidth + "em";
        var g = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r,
            wrapperClasses: ["svg-align"]
          }, {
            type: "kern",
            size: -(r.height + v)
          }, {
            type: "elem",
            elem: m
          }, {
            type: "kern",
            size: d
          }]
        }, t);
        if (e.value.index) {
          var y = t.havingStyle(l.a.SCRIPTSCRIPT),
            b = u.b(e.value.index, y, t),
            x = .6 * (g.height - g.depth),
            w = a.a.makeVList({
              positionType: "shift",
              positionData: -x,
              children: [{
                type: "elem",
                elem: b
              }]
            }, t),
            k = a.a.makeSpan(["root"], [w]);
          return a.a.makeSpan(["mord", "sqrt"], [k, g], t)
        }
        return a.a.makeSpan(["mord", "sqrt"], [g], t)
      },
      mathmlBuilder: function(e, t) {
        return e.value.index ? new o.a.MathNode("mroot", [c.b(e.value.body, t), c.b(e.value.index, t)]) : new o.a.MathNode("msqrt", [c.b(e.value.body, t)])
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(6),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = s.a(e.value.value, t.withColor(e.value.color), !1);
        return new a.a.makeFragment(r)
      },
      c = function(e, t) {
        var r = l.a(e.value.value, t),
          n = new i.a.MathNode("mstyle", r);
        return n.setAttribute("mathcolor", e.value.color), n
      };
    Object(n.b)({
      type: "color",
      names: ["\\textcolor"],
      props: {
        numArgs: 2,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "original"]
      },
      handler: function(e, t) {
        var r = t[0],
          a = t[1];
        return {
          type: "color",
          color: r.value,
          value: Object(n.c)(a)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "color",
      names: ["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "color",
          color: "katex-" + e.funcName.slice(1),
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "color",
      names: ["\\color"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color"]
      },
      handler: function(e, t) {
        var r = e.parser,
          n = e.breakOnTokenText,
          a = t[0];
        if (!a) throw new o.a("\\color not followed by color");
        var i = r.parseExpression(!0, n);
        return {
          type: "color",
          color: a.value,
          value: i
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2),
      l = {
        "\\text": void 0,
        "\\textrm": "textrm",
        "\\textsf": "textsf",
        "\\texttt": "texttt",
        "\\textnormal": "textrm"
      },
      u = {
        "\\textbf": "textbf"
      },
      c = {
        "\\textit": "textit"
      };
    Object(n.b)({
      type: "text",
      names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"],
      props: {
        numArgs: 1,
        argTypes: ["text"],
        greediness: 2,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "text",
          body: Object(n.c)(r),
          font: e.funcName
        }
      },
      htmlBuilder: function(e, t) {
        var r = e.value.font,
          n = void 0;
        n = l[r] ? t.withFontFamily(l[r]) : u[r] ? t.withFontWeight(u[r]) : t.withFontShape(c[r]);
        var i = o.a(e.value.body, n, !0);
        return a.a.tryCombineChars(i), a.a.makeSpan(["mord", "text"], i, n)
      },
      mathmlBuilder: function(e, t) {
        for (var r = e.value.body, n = [], a = null, o = 0; o < r.length; o++) {
          var l = s.b(r[o], t);
          "mtext" === l.type && null != a ? Array.prototype.push.apply(a.children, l.children) : (n.push(l), "mtext" === l.type && (a = l))
        }
        return 1 === n.length ? n[0] : new i.a.MathNode("mrow", n)
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(5),
      s = r(13),
      l = r(4),
      u = r(2),
      c = function(e, t) {
        var r = l.b(e.value.body, t),
          n = e.value.label.substr(1),
          i = t.sizeMultiplier,
          u = void 0,
          c = 0,
          h = /color/.test(n);
        if ("sout" === n)(u = a.a.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / i, c = -.5 * t.fontMetrics().xHeight;
        else {
          r.classes.push(/cancel/.test(n) ? "cancel-pad" : "boxpad");
          var p = 0;
          p = /box/.test(n) ? "colorbox" === n ? .3 : .34 : o.a.isCharacterBox(e.value.body) ? .2 : 0, u = s.a.encloseSpan(r, n, p, t), c = r.depth + p, h && (u.style.backgroundColor = e.value.backgroundColor.value, "fcolorbox" === n && (u.style.borderColor = e.value.borderColor.value))
        }
        var m = void 0;
        return m = h ? a.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: u,
            shift: c
          }, {
            type: "elem",
            elem: r,
            shift: 0
          }]
        }, t) : a.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: r,
            shift: 0
          }, {
            type: "elem",
            elem: u,
            shift: c,
            wrapperClasses: /cancel/.test(n) ? ["svg-align"] : []
          }]
        }, t), /cancel/.test(n) ? a.a.makeSpan(["mord", "cancel-lap"], [m], t) : a.a.makeSpan(["mord"], [m], t)
      },
      h = function(e, t) {
        var r = new i.a.MathNode("menclose", [u.b(e.value.body, t)]);
        switch (e.value.label) {
          case "\\cancel":
            r.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            r.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\sout":
            r.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            r.setAttribute("notation", "box");
            break;
          case "\\colorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value);
            break;
          case "\\fcolorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value), r.setAttribute("notation", "box");
            break;
          default:
            r.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
        }
        return r
      };
    Object(n.b)({
      type: "enclose",
      names: ["\\colorbox"],
      props: {
        numArgs: 2,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "text"]
      },
      handler: function(e, t, r) {
        var n = t[0],
          a = t[1];
        return {
          type: "enclose",
          label: e.funcName,
          backgroundColor: n,
          body: a
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "enclose",
      names: ["\\fcolorbox"],
      props: {
        numArgs: 3,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "color", "text"]
      },
      handler: function(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2];
        return {
          type: "enclose",
          label: e.funcName,
          backgroundColor: a,
          borderColor: n,
          body: i
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "enclose",
      names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"],
      props: {
        numArgs: 1
      },
      handler: function(e, t, r) {
        var n = t[0];
        return {
          type: "enclose",
          label: e.funcName,
          body: n
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "overline",
      names: ["\\overline"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        return {
          type: "overline",
          body: t[0]
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.b(e.value.body, t.havingCrampedStyle()),
          n = a.a.makeLineSpan("overline-line", t),
          i = a.a.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: r
            }, {
              type: "kern",
              size: n.height
            }, {
              type: "elem",
              elem: n
            }]
          }, t);
        return a.a.makeSpan(["mord", "overline"], [i], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mo", [new i.a.TextNode("\u203e")]);
        r.setAttribute("stretchy", "true");
        var n = new i.a.MathNode("mover", [s.b(e.value.body, t), r]);
        return n.setAttribute("accent", "true"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "underline",
      names: ["\\underline"],
      props: {
        numArgs: 1,
        allowedInText: !0
      },
      handler: function(e, t) {
        return {
          type: "underline",
          body: t[0]
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.b(e.value.body, t),
          n = a.a.makeLineSpan("underline-line", t),
          i = a.a.makeVList({
            positionType: "top",
            positionData: r.height,
            children: [{
              type: "elem",
              elem: n
            }, {
              type: "kern",
              size: 5 * n.height
            }, {
              type: "elem",
              elem: r
            }]
          }, t);
        return a.a.makeSpan(["mord", "underline"], [i], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mo", [new i.a.TextNode("\u203e")]);
        r.setAttribute("stretchy", "true");
        var n = new i.a.MathNode("munder", [s.b(e.value.body, t), r]);
        return n.setAttribute("accentunder", "true"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(0),
      a = r(3),
      i = r(1),
      o = r(19);
    Object(a.b)({
      type: "rule",
      names: ["\\rule"],
      props: {
        numArgs: 2,
        numOptionalArgs: 1,
        argTypes: ["size", "size", "size"]
      },
      handler: function(e, t, r) {
        var n = r[0],
          a = t[0],
          i = t[1];
        return {
          type: "rule",
          shift: n && n.value,
          width: a.value,
          height: i.value
        }
      },
      htmlBuilder: function(e, t) {
        var r = n.a.makeSpan(["mord", "rule"], [], t),
          a = 0;
        e.value.shift && (a = Object(o.a)(e.value.shift, t));
        var i = Object(o.a)(e.value.width, t),
          s = Object(o.a)(e.value.height, t);
        return r.style.borderRightWidth = i + "em", r.style.borderTopWidth = s + "em", r.style.bottom = a + "em", r.width = i, r.height = s + a, r.depth = -a, r.maxFontSize = 1.125 * s * t.sizeMultiplier, r
      },
      mathmlBuilder: function(e, t) {
        return new i.a.MathNode("mrow")
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(19),
      s = r(6);
    Object(n.b)({
      type: "kern",
      names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
      props: {
        numArgs: 1,
        argTypes: ["size"],
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = "m" === e.funcName[1],
          n = "mu" === t[0].value.unit;
        if (r) {
          if (n || "undefined" != typeof console && console.warn("In LaTeX, " + e.funcName + " supports only mu units, not " + t[0].value.unit + " units"), "math" !== e.parser.mode) throw new s.a("Can't use function '" + e.funcName + "' in text mode")
        } else n && "undefined" != typeof console && console.warn("In LaTeX, " + e.funcName + " does not support mu units");
        return {
          type: "kern",
          dimension: t[0].value
        }
      },
      htmlBuilder: function(e, t) {
        return a.a.makeGlue(e.value.dimension, t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mspace"),
          n = Object(o.a)(e.value.dimension, t);
        return r.setAttribute("width", n + "em"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "phantom",
      names: ["\\phantom"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "phantom",
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.a(e.value.value, t.withPhantom(), !1);
        return new a.a.makeFragment(r)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.value, t);
        return new i.a.MathNode("mphantom", r)
      }
    }), Object(n.b)({
      type: "hphantom",
      names: ["\\hphantom"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "hphantom",
          value: Object(n.c)(r),
          body: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = a.a.makeSpan([], [o.b(e.value.body, t.withPhantom())]);
        if (r.height = 0, r.depth = 0, r.children)
          for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
        return r = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r
          }]
        }, t)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.value, t),
          n = new i.a.MathNode("mphantom", r);
        return n.setAttribute("height", "0px"), n
      }
    }), Object(n.b)({
      type: "vphantom",
      names: ["\\vphantom"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "vphantom",
          value: Object(n.c)(r),
          body: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = a.a.makeSpan(["inner"], [o.b(e.value.body, t.withPhantom())]),
          n = a.a.makeSpan(["fix"], []);
        return a.a.makeSpan(["mord", "rlap"], [r, n], t)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.value, t),
          n = new i.a.MathNode("mphantom", r);
        return n.setAttribute("width", "0px"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(9),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = [];
        if ("bmod" === e.value.modType ? t.style.isTight() ? r.push(a.a.makeSpan(["mspace", "thickspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "muspace"], [], t)) : t.style.size === o.a.DISPLAY.size ? r.push(a.a.makeSpan(["mspace", "quad"], [], t)) : "mod" === e.value.modType ? r.push(a.a.makeSpan(["mspace", "twelvemuspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "eightmuspace"], [], t)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(a.a.mathsym("(", e.mode)), "pod" !== e.value.modType) {
          var n = [a.a.mathsym("m", e.mode), a.a.mathsym("o", e.mode), a.a.mathsym("d", e.mode)];
          "bmod" === e.value.modType ? (r.push(a.a.makeSpan(["mbin"], n, t)), t.style.isTight() ? r.push(a.a.makeSpan(["mspace", "thickspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "muspace"], [], t))) : (Array.prototype.push.apply(r, n), r.push(a.a.makeSpan(["mspace", "sixmuspace"], [], t)))
        }
        return e.value.value && Array.prototype.push.apply(r, s.a(e.value.value, t, !1)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(a.a.mathsym(")", e.mode)), a.a.makeFragment(r)
      },
      c = function(e, t) {
        var r = [];
        if ("pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new i.a.MathNode("mo", [l.e("(", e.mode)])), "pod" !== e.value.modType && r.push(new i.a.MathNode("mo", [l.e("mod", e.mode)])), e.value.value) {
          var n = new i.a.MathNode("mspace");
          n.setAttribute("width", "0.333333em"), r.push(n), r = r.concat(l.a(e.value.value, t))
        }
        return "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new i.a.MathNode("mo", [l.e(")", e.mode)])), new i.a.MathNode("mo", r)
      };
    Object(n.b)({
      type: "mod",
      names: ["\\bmod"],
      props: {
        numArgs: 0
      },
      handler: function(e, t) {
        return {
          type: "mod",
          modType: "bmod",
          value: null
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "mod",
      names: ["\\pod", "\\pmod", "\\mod"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "mod",
          modType: e.funcName.substr(1),
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(12),
      o = r(1),
      s = r(5),
      l = r(9),
      u = r(4),
      c = r(2),
      h = function(e, t) {
        var r = void 0,
          n = void 0,
          o = !1;
        "supsub" === e.type && (r = e.value.sup, n = e.value.sub, e = e.value.base, o = !0);
        var c = t.style,
          h = !1;
        c.size === l.a.DISPLAY.size && e.value.symbol && !s.a.contains(["\\smallint"], e.value.body) && (h = !0);
        var p = void 0;
        if (e.value.symbol) {
          var m = h ? "Size2-Regular" : "Size1-Regular";
          p = a.a.makeSymbol(e.value.body, m, "math", t, ["mop", "op-symbol", h ? "large-op" : "small-op"])
        } else if (e.value.value) {
          var d = u.a(e.value.value, t, !0);
          1 === d.length && d[0] instanceof i.a.symbolNode ? (p = d[0]).classes[0] = "mop" : p = a.a.makeSpan(["mop"], d, t)
        } else {
          for (var f = [], v = 1; v < e.value.body.length; v++) f.push(a.a.mathsym(e.value.body[v], e.mode));
          p = a.a.makeSpan(["mop"], f, t)
        }
        var g = 0,
          y = 0;
        if (p instanceof i.a.symbolNode && (g = (p.height - p.depth) / 2 - t.fontMetrics().axisHeight, y = p.italic), o) {
          p = a.a.makeSpan([], [p]);
          var b = void 0,
            x = void 0;
          if (r) {
            var w = u.b(r, t.havingStyle(c.sup()), t);
            x = {
              elem: w,
              kern: Math.max(t.fontMetrics().bigOpSpacing1, t.fontMetrics().bigOpSpacing3 - w.depth)
            }
          }
          if (n) {
            var k = u.b(n, t.havingStyle(c.sub()), t);
            b = {
              elem: k,
              kern: Math.max(t.fontMetrics().bigOpSpacing2, t.fontMetrics().bigOpSpacing4 - k.height)
            }
          }
          var M = void 0;
          if (x && b) {
            var S = t.fontMetrics().bigOpSpacing5 + b.elem.height + b.elem.depth + b.kern + p.depth + g;
            M = a.a.makeVList({
              positionType: "bottom",
              positionData: S,
              children: [{
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: b.elem,
                marginLeft: -y + "em"
              }, {
                type: "kern",
                size: b.kern
              }, {
                type: "elem",
                elem: p
              }, {
                type: "kern",
                size: x.kern
              }, {
                type: "elem",
                elem: x.elem,
                marginLeft: y + "em"
              }, {
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }]
            }, t)
          } else if (b) {
            var z = p.height - g;
            M = a.a.makeVList({
              positionType: "top",
              positionData: z,
              children: [{
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: b.elem,
                marginLeft: -y + "em"
              }, {
                type: "kern",
                size: b.kern
              }, {
                type: "elem",
                elem: p
              }]
            }, t)
          } else {
            if (!x) return p;
            var O = p.depth + g;
            M = a.a.makeVList({
              positionType: "bottom",
              positionData: O,
              children: [{
                type: "elem",
                elem: p
              }, {
                type: "kern",
                size: x.kern
              }, {
                type: "elem",
                elem: x.elem,
                marginLeft: y + "em"
              }, {
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }]
            }, t)
          }
          return a.a.makeSpan(["mop", "op-limits"], [M], t)
        }
        return g && (p.style.position = "relative", p.style.top = g + "em"), p
      },
      p = function(e, t) {
        var r = void 0;
        if (e.value.symbol) r = new o.a.MathNode("mo", [c.e(e.value.body, e.mode)]);
        else {
          if (!e.value.value) {
            r = new o.a.MathNode("mi", [new o.a.TextNode(e.value.body.slice(1))]);
            var n = new o.a.MathNode("mo", [c.e("\u2061", "text")]);
            return new i.a.documentFragment([r, n])
          }
          r = new o.a.MathNode("mo", c.a(e.value.value, t))
        }
        return r
      },
      m = {
        "\u220f": "\\prod",
        "\u2210": "\\coprod",
        "\u2211": "\\sum",
        "\u22c0": "\\bigwedge",
        "\u22c1": "\\bigvee",
        "\u22c2": "\\bigcap",
        "\u22c3": "\\bigcap",
        "\u2a00": "\\bigodot",
        "\u2a01": "\\bigoplus",
        "\u2a02": "\\bigotimes",
        "\u2a04": "\\biguplus",
        "\u2a06": "\\bigsqcup"
      };
    Object(n.b)({
      type: "op",
      names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220f", "\u2210", "\u2211", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06"],
      props: {
        numArgs: 0
      },
      handler: function(e, t) {
        var r = e.funcName;
        return 1 === r.length && (r = m[r]), {
          type: "op",
          limits: !0,
          symbol: !0,
          body: r
        }
      },
      htmlBuilder: h,
      mathmlBuilder: p
    }), Object(n.b)({
      type: "op",
      names: ["\\mathop"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "op",
          limits: !1,
          symbol: !1,
          value: Object(n.c)(r)
        }
      },
      htmlBuilder: h,
      mathmlBuilder: p
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(18),
      a = r.n(n),
      i = r(3),
      o = r(0),
      s = r(1),
      l = r(12),
      u = r(4),
      c = r(2);
    Object(i.b)({
      type: "operatorname",
      names: ["\\operatorname"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "operatorname",
          value: Object(i.c)(r)
        }
      },
      htmlBuilder: function(e, t) {
        var r = [];
        if (e.value.value.length > 0) {
          var n = "",
            i = "",
            s = !0,
            c = !1,
            h = void 0;
          try {
            for (var p, m = a()(e.value.value); !(s = (p = m.next()).done); s = !0) {
              var d = p.value; - 1 !== "*-/:".indexOf(d.value) && (d.type = "textord")
            }
          } catch (e) {
            c = !0, h = e
          } finally {
            try {
              !s && m.return && m.return()
            } finally {
              if (c) throw h
            }
          }
          var f = u.a(e.value.value, t.withFontFamily("mathrm"), !0),
            v = !0,
            g = !1,
            y = void 0;
          try {
            for (var b, x = a()(f); !(v = (b = x.next()).done); v = !0) {
              var w = b.value;
              w instanceof l.a.symbolNode ? (n = (n = (n = w.value).replace(/\u2212/, "-")).replace(/\u2217/, "*"), i = /[\u0391-\u03D7]/.test(n) ? "math" : "text", r.push(o.a.mathsym(n, i))) : r.push(w)
            }
          } catch (e) {
            g = !0, y = e
          } finally {
            try {
              !v && x.return && x.return()
            } finally {
              if (g) throw y
            }
          }
        }
        return o.a.makeSpan(["mop"], r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = [];
        if (e.value.value.length > 0) {
          var n = c.a(e.value.value, t.withFontFamily("mathrm")).map(function(e) {
            return e.toText()
          }).join("");
          n = (n = n.replace(/\u2212/g, "-")).replace(/\u2217/g, "*"), r = [new s.a.TextNode(n)]
        }
        var a = new s.a.MathNode("mi", r);
        a.setAttribute("mathvariant", "normal");
        var i = new s.a.MathNode("mo", [c.e("\u2061", "text")]);
        return new l.a.documentFragment([a, i])
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(44),
      o = r(1),
      s = r(9),
      l = r(4),
      u = r(2);
    Object(n.b)({
      type: "genfrac",
      names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"],
      props: {
        numArgs: 2,
        greediness: 2
      },
      handler: function(e, t) {
        var r = t[0],
          n = t[1],
          a = void 0,
          i = null,
          o = null,
          s = "auto";
        switch (e.funcName) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            a = !0;
            break;
          case "\\\\atopfrac":
            a = !1;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            a = !1, i = "(", o = ")";
            break;
          default:
            throw new Error("Unrecognized genfrac command")
        }
        switch (e.funcName) {
          case "\\dfrac":
          case "\\dbinom":
            s = "display";
            break;
          case "\\tfrac":
          case "\\tbinom":
            s = "text"
        }
        return {
          type: "genfrac",
          numer: r,
          denom: n,
          hasBarLine: a,
          leftDelim: i,
          rightDelim: o,
          size: s
        }
      },
      htmlBuilder: function(e, t) {
        var r = t.style;
        "display" === e.value.size ? r = s.a.DISPLAY : "text" === e.value.size && (r = s.a.TEXT);
        var n = r.fracNum(),
          o = r.fracDen(),
          u = void 0;
        u = t.havingStyle(n);
        var c = l.b(e.value.numer, u, t);
        u = t.havingStyle(o);
        var h = l.b(e.value.denom, u, t),
          p = void 0,
          m = void 0,
          d = void 0;
        e.value.hasBarLine ? (m = (p = a.a.makeLineSpan("frac-line", t)).height, d = p.height) : (p = null, m = 0, d = t.fontMetrics().defaultRuleThickness);
        var f = void 0,
          v = void 0,
          g = void 0;
        r.size === s.a.DISPLAY.size ? (f = t.fontMetrics().num1, v = m > 0 ? 3 * d : 7 * d, g = t.fontMetrics().denom1) : (m > 0 ? (f = t.fontMetrics().num2, v = d) : (f = t.fontMetrics().num3, v = 3 * d), g = t.fontMetrics().denom2);
        var y = void 0;
        if (p) {
          var b = t.fontMetrics().axisHeight;
          f - c.depth - (b + .5 * m) < v && (f += v - (f - c.depth - (b + .5 * m))), b - .5 * m - (h.height - g) < v && (g += v - (b - .5 * m - (h.height - g)));
          var x = -(b - .5 * m);
          y = a.a.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: h,
              shift: g
            }, {
              type: "elem",
              elem: p,
              shift: x + 2 * m
            }, {
              type: "elem",
              elem: c,
              shift: -f
            }]
          }, t)
        } else {
          var w = f - c.depth - (h.height - g);
          w < v && (f += .5 * (v - w), g += .5 * (v - w)), y = a.a.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: h,
              shift: g
            }, {
              type: "elem",
              elem: c,
              shift: -f
            }]
          }, t)
        }
        u = t.havingStyle(r), y.height *= u.sizeMultiplier / t.sizeMultiplier, y.depth *= u.sizeMultiplier / t.sizeMultiplier;
        var k = void 0;
        k = r.size === s.a.DISPLAY.size ? t.fontMetrics().delim1 : t.fontMetrics().delim2;
        var M = void 0,
          S = void 0;
        return M = null == e.value.leftDelim ? l.e(t, ["mopen"]) : i.a.customSizedDelim(e.value.leftDelim, k, !0, t.havingStyle(r), e.mode, ["mopen"]), S = null == e.value.rightDelim ? l.e(t, ["mclose"]) : i.a.customSizedDelim(e.value.rightDelim, k, !0, t.havingStyle(r), e.mode, ["mclose"]), a.a.makeSpan(["mord"].concat(u.sizingClasses(t)), [M, a.a.makeSpan(["mfrac"], [y]), S], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new o.a.MathNode("mfrac", [u.b(e.value.numer, t), u.b(e.value.denom, t)]);
        if (e.value.hasBarLine || r.setAttribute("linethickness", "0px"), null != e.value.leftDelim || null != e.value.rightDelim) {
          var n = [];
          if (null != e.value.leftDelim) {
            var a = new o.a.MathNode("mo", [new o.a.TextNode(e.value.leftDelim)]);
            a.setAttribute("fence", "true"), n.push(a)
          }
          if (n.push(r), null != e.value.rightDelim) {
            var i = new o.a.MathNode("mo", [new o.a.TextNode(e.value.rightDelim)]);
            i.setAttribute("fence", "true"), n.push(i)
          }
          return new o.a.MathNode("mrow", n)
        }
        return r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "lap",
      names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
      props: {
        numArgs: 1,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "lap",
          alignment: e.funcName.slice(5),
          body: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = void 0;
        "clap" === e.value.alignment ? (r = a.a.makeSpan([], [o.b(e.value.body, t)]), r = a.a.makeSpan(["inner"], [r], t)) : r = a.a.makeSpan(["inner"], [o.b(e.value.body, t)]);
        var n = a.a.makeSpan(["fix"], []);
        return a.a.makeSpan(["mord", e.value.alignment], [r, n], t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mpadded", [s.b(e.value.body, t)]);
        if ("rlap" !== e.value.alignment) {
          var n = "llap" === e.value.alignment ? "-1" : "-0.5";
          r.setAttribute("lspace", n + "width")
        }
        return r.setAttribute("width", "0px"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "smash",
      names: ["\\smash"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: !0
      },
      handler: function(e, t, r) {
        var n = !1,
          a = !1,
          i = r[0];
        if (i)
          for (var o = "", s = 0; s < i.value.length; ++s)
            if ("t" === (o = i.value[s].value)) n = !0;
            else {
              if ("b" !== o) {
                n = !1, a = !1;
                break
              }
              a = !0
            }
        else n = !0, a = !0;
        return {
          type: "smash",
          body: t[0],
          smashHeight: n,
          smashDepth: a
        }
      },
      htmlBuilder: function(e, t) {
        var r = a.a.makeSpan(["mord"], [o.b(e.value.body, t)]);
        if (!e.value.smashHeight && !e.value.smashDepth) return r;
        if (e.value.smashHeight && (r.height = 0, r.children))
          for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
        if (e.value.smashDepth && (r.depth = 0, r.children))
          for (var i = 0; i < r.children.length; i++) r.children[i].depth = 0;
        return a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r
          }]
        }, t)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.MathNode("mpadded", [s.b(e.value.body, t)]);
        return e.value.smashHeight && r.setAttribute("height", "0px"), e.value.smashDepth && r.setAttribute("depth", "0px"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(0),
      a = r(3),
      i = r(44),
      o = r(1),
      s = r(6),
      l = r(5),
      u = r(4),
      c = r(2),
      h = {
        "\\bigl": {
          mclass: "mopen",
          size: 1
        },
        "\\Bigl": {
          mclass: "mopen",
          size: 2
        },
        "\\biggl": {
          mclass: "mopen",
          size: 3
        },
        "\\Biggl": {
          mclass: "mopen",
          size: 4
        },
        "\\bigr": {
          mclass: "mclose",
          size: 1
        },
        "\\Bigr": {
          mclass: "mclose",
          size: 2
        },
        "\\biggr": {
          mclass: "mclose",
          size: 3
        },
        "\\Biggr": {
          mclass: "mclose",
          size: 4
        },
        "\\bigm": {
          mclass: "mrel",
          size: 1
        },
        "\\Bigm": {
          mclass: "mrel",
          size: 2
        },
        "\\biggm": {
          mclass: "mrel",
          size: 3
        },
        "\\Biggm": {
          mclass: "mrel",
          size: 4
        },
        "\\big": {
          mclass: "mord",
          size: 1
        },
        "\\Big": {
          mclass: "mord",
          size: 2
        },
        "\\bigg": {
          mclass: "mord",
          size: 3
        },
        "\\Bigg": {
          mclass: "mord",
          size: 4
        }
      },
      p = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

    function m(e, t) {
      if (l.a.contains(p, e.value)) return e;
      throw new s.a("Invalid delimiter: '" + e.value + "' after '" + t.funcName + "'", e)
    }
    Object(a.b)({
      type: "delimsizing",
      names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = m(t[0], e);
        return {
          type: "delimsizing",
          size: h[e.funcName].size,
          mclass: h[e.funcName].mclass,
          value: r.value
        }
      },
      htmlBuilder: function(e, t) {
        var r = e.value.value;
        return "." === r ? n.a.makeSpan([e.value.mclass]) : i.a.sizedDelim(r, e.value.size, t, e.mode, [e.value.mclass])
      },
      mathmlBuilder: function(e) {
        var t = [];
        "." !== e.value.value && t.push(c.e(e.value.value, e.mode));
        var r = new o.a.MathNode("mo", t);
        return "mopen" === e.value.mclass || "mclose" === e.value.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r
      }
    }), Object(a.b)({
      type: "leftright",
      names: ["\\left", "\\right"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = m(t[0], e);
        if ("\\left" === e.funcName) {
          var n = e.parser;
          ++n.leftrightDepth;
          var a = n.parseExpression(!1);
          --n.leftrightDepth, n.expect("\\right", !1);
          var i = n.parseFunction();
          if (!i) throw new s.a("failed to parse function after \\right");
          return {
            type: "leftright",
            body: a,
            left: r.value,
            right: i.value.value
          }
        }
        return {
          type: "leftright",
          value: r.value
        }
      },
      htmlBuilder: function(e, t) {
        for (var r = u.a(e.value.body, t, !0, [null, "mclose"]), a = 0, o = 0, s = !1, l = 0; l < r.length; l++) r[l].isMiddle ? s = !0 : (a = Math.max(r[l].height, a), o = Math.max(r[l].depth, o));
        a *= t.sizeMultiplier, o *= t.sizeMultiplier;
        var c = void 0;
        if (c = "." === e.value.left ? u.e(t, ["mopen"]) : i.a.leftRightDelim(e.value.left, a, o, t, e.mode, ["mopen"]), r.unshift(c), s)
          for (var h = 1; h < r.length; h++) {
            var p = r[h];
            p.isMiddle && (r[h] = i.a.leftRightDelim(p.isMiddle.value, a, o, p.isMiddle.options, e.mode, []))
          }
        var m = void 0;
        return m = "." === e.value.right ? u.e(t, ["mclose"]) : i.a.leftRightDelim(e.value.right, a, o, t, e.mode, ["mclose"]), r.push(m), n.a.makeSpan(["minner"], r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = c.a(e.value.body, t);
        if ("." !== e.value.left) {
          var n = new o.a.MathNode("mo", [c.e(e.value.left, e.mode)]);
          n.setAttribute("fence", "true"), r.unshift(n)
        }
        if ("." !== e.value.right) {
          var a = new o.a.MathNode("mo", [c.e(e.value.right, e.mode)]);
          a.setAttribute("fence", "true"), r.push(a)
        }
        return new o.a.MathNode("mrow", r)
      }
    }), Object(a.b)({
      type: "middle",
      names: ["\\middle"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = m(t[0], e);
        if (!e.parser.leftrightDepth) throw new s.a("\\middle without preceding \\left", r);
        return {
          type: "middle",
          value: r.value
        }
      },
      htmlBuilder: function(e, t) {
        var r = void 0;
        return "." === e.value.value ? r = u.e(t, []) : (r = i.a.sizedDelim(e.value.value, 1, t, e.mode, [])).isMiddle = {
          value: e.value.value,
          options: t
        }, r
      },
      mathmlBuilder: function(e, t) {
        var r = new o.a.MathNode("mo", [c.e(e.value.middle, e.mode)]);
        return r.setAttribute("fence", "true"), r
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(1),
      i = r(9),
      o = r(60),
      s = r(2),
      l = {
        display: i.a.DISPLAY,
        text: i.a.TEXT,
        script: i.a.SCRIPT,
        scriptscript: i.a.SCRIPTSCRIPT
      };
    Object(n.b)({
      type: "styling",
      names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = e.breakOnTokenText,
          n = e.funcName,
          a = e.parser;
        a.consumeSpaces();
        var i = a.parseExpression(!0, r);
        return {
          type: "styling",
          style: n.slice(1, n.length - 5),
          value: i
        }
      },
      htmlBuilder: function(e, t) {
        var r = l[e.value.style],
          n = t.havingStyle(r);
        return Object(o.a)(e.value.value, n, t)
      },
      mathmlBuilder: function(e, t) {
        var r = {
            display: i.a.DISPLAY,
            text: i.a.TEXT,
            script: i.a.SCRIPT,
            scriptscript: i.a.SCRIPTSCRIPT
          }[e.value.style],
          n = t.havingStyle(r),
          o = s.a(e.value.value, n),
          l = new a.a.MathNode("mstyle", o),
          u = {
            display: ["0", "true"],
            text: ["0", "false"],
            script: ["1", "false"],
            scriptscript: ["2", "false"]
          }[e.value.style];
        return l.setAttribute("scriptlevel", u[0]), l.setAttribute("displaystyle", u[1]), l
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(134),
      a = r.n(n),
      i = r(3),
      o = r(14),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = e.value.font;
        return s.b(e.value.body, t.withFontFamily(r))
      },
      c = function(e, t) {
        var r = e.value.font;
        return l.b(e.value.body, t.withFontFamily(r))
      },
      h = {
        "\\Bbb": "\\mathbb",
        "\\bold": "\\mathbf",
        "\\frak": "\\mathfrak",
        "\\bm": "\\boldsymbol"
      };
    Object(i.b)({
      type: "font",
      names: ["\\mathrm", "\\mathit", "\\mathbf", "\\boldsymbol", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak", "\\bm"],
      props: {
        numArgs: 1,
        greediness: 2
      },
      handler: function(e, t) {
        var r = t[0],
          n = e.funcName;
        return n in h && (n = h[n]), {
          type: "font",
          font: n.slice(1),
          body: r
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    });
    var p = {
      "\\rm": "mathrm",
      "\\sf": "mathsf",
      "\\tt": "mathtt",
      "\\bf": "mathbf",
      "\\it": "mathit"
    };
    Object(i.b)({
      type: "font",
      names: a()(p),
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t) {
        var r = e.parser,
          n = e.funcName,
          a = e.breakOnTokenText;
        r.consumeSpaces();
        var i = r.parseExpression(!0, a);
        return {
          type: "font",
          font: p[n],
          body: new o.a("ordgroup", i, r.mode)
        }
      },
      htmlBuilder: u,
      mathmlBuilder: c
    })
  }, function(e, t, r) {
    e.exports = {
      default: r(135),
      __esModule: !0
    }
  }, function(e, t, r) {
    r(136), e.exports = r(8).Object.keys
  }, function(e, t, r) {
    var n = r(29),
      a = r(39);
    r(46)("keys", function() {
      return function(e) {
        return a(n(e))
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(5),
      s = r(13),
      l = r(4),
      u = r(2),
      c = function(e, t) {
        var r = e.value.base,
          n = void 0;
        if ("supsub" === e.type) {
          var i = e;
          r = (e = i.value.base).value.base, i.value.base = r, n = l.b(i, t)
        }
        var u = l.b(r, t.havingCrampedStyle()),
          c = 0;
        if (e.value.isShifty && o.a.isCharacterBox(r)) {
          var h = o.a.getBaseElem(r);
          c = l.b(h, t.havingCrampedStyle()).skew
        }
        var p = Math.min(u.height, t.fontMetrics().xHeight),
          m = void 0;
        if (e.value.isStretchy) m = s.a.svgSpan(e, t), m = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: u
          }, {
            type: "elem",
            elem: m,
            wrapperClasses: ["svg-align"],
            wrapperStyle: c > 0 ? {
              width: "calc(100% - " + 2 * c + "em)",
              marginLeft: 2 * c + "em"
            } : void 0
          }]
        }, t);
        else {
          var d = void 0,
            f = void 0;
          "\\vec" === e.value.label ? (d = a.a.staticSvg("vec", t), f = a.a.svgData.vec[1]) : ((d = a.a.makeSymbol(e.value.label, "Main-Regular", e.mode, t)).italic = 0, f = d.width);
          var v = -f / 2;
          v += c, (m = a.a.makeSpan(["accent-body"], [d])).style.left = v + "em", m = a.a.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: u
            }, {
              type: "kern",
              size: -p
            }, {
              type: "elem",
              elem: m
            }]
          }, t)
        }
        var g = a.a.makeSpan(["mord", "accent"], [m], t);
        return n ? (n.children[0] = g, n.height = Math.max(g.height, n.height), n.classes[0] = "mord", n) : g
      },
      h = function(e, t) {
        var r = void 0;
        r = e.value.isStretchy ? s.a.mathMLnode(e.value.label) : new i.a.MathNode("mo", [u.e(e.value.label, e.mode)]);
        var n = new i.a.MathNode("mover", [u.b(e.value.base, t), r]);
        return n.setAttribute("accent", "true"), n
      },
      p = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(e) {
        return "\\" + e
      }).join("|"));
    Object(n.b)({
      type: "accent",
      names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0],
          n = !p.test(e.funcName),
          a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName;
        return {
          type: "accent",
          label: e.funcName,
          isStretchy: n,
          isShifty: a,
          base: r
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "accent",
      names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        allowedInMath: !1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "accent",
          label: e.funcName,
          isStretchy: !1,
          isShifty: !0,
          base: r
        }
      },
      htmlBuilder: c,
      mathmlBuilder: h
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(13),
      s = r(4),
      l = r(2);
    Object(n.b)({
      type: "accentUnder",
      names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0];
        return {
          type: "accentUnder",
          label: e.funcName,
          base: r
        }
      },
      htmlBuilder: function(e, t) {
        var r = s.b(e.value.base, t),
          n = o.a.svgSpan(e, t),
          i = "\\utilde" === e.value.label ? .12 : 0,
          l = a.a.makeVList({
            positionType: "bottom",
            positionData: n.height + i,
            children: [{
              type: "elem",
              elem: n,
              wrapperClasses: ["svg-align"]
            }, {
              type: "kern",
              size: i
            }, {
              type: "elem",
              elem: r
            }]
          }, t);
        return a.a.makeSpan(["mord", "accentunder"], [l], t)
      },
      mathmlBuilder: function(e, t) {
        var r = o.a.mathMLnode(e.value.label),
          n = new i.a.MathNode("munder", [l.b(e.value.body, t), r]);
        return n.setAttribute("accentunder", "true"), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(6);
    Object(n.b)({
      type: "verb",
      names: ["\\verb"],
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function(e, t, r) {
        throw new o.a("\\verb ended by end of line instead of matching delimiter")
      },
      htmlBuilder: function(e, t) {
        for (var r = a.a.makeVerb(e, t), n = [], i = t.havingStyle(t.style.text()), o = 0; o < r.length; o++)
          if ("\xa0" === r[o]) {
            var s = a.a.makeSpan(["mord", "rule"], [], i);
            s.style.marginLeft = "0.525em", n.push(s)
          } else n.push(a.a.makeSymbol(r[o], "Typewriter-Regular", e.mode, i, ["mathtt"]));
        return a.a.tryCombineChars(n), a.a.makeSpan(["mord", "text"].concat(i.sizingClasses(t)), n, i)
      },
      mathmlBuilder: function(e, t) {
        var r = new i.a.TextNode(a.a.makeVerb(e, t)),
          n = new i.a.MathNode("mtext", [r]);
        return n.setAttribute("mathvariant", a.a.fontMap.mathtt.variant), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "href",
      names: ["\\href"],
      props: {
        numArgs: 2,
        argTypes: ["url", "original"]
      },
      handler: function(e, t) {
        var r = t[1];
        return {
          type: "href",
          href: t[0].value,
          body: Object(n.c)(r)
        }
      },
      htmlBuilder: function(e, t) {
        var r = o.a(e.value.body, t, !1),
          n = e.value.href;
        return new a.a.makeAnchor(n, [], r, t)
      },
      mathmlBuilder: function(e, t) {
        var r = s.a(e.value.body, t),
          n = new i.a.MathNode("mrow", r);
        return n.setAttribute("href", e.value.href), n
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(9),
      s = r(4),
      l = r(2),
      u = function(e, t) {
        var r = t.style;
        return r.size === o.a.DISPLAY.size ? e.value.display : r.size === o.a.TEXT.size ? e.value.text : r.size === o.a.SCRIPT.size ? e.value.script : r.size === o.a.SCRIPTSCRIPT.size ? e.value.scriptscript : e.value.text
      };
    Object(n.b)({
      type: "mathchoice",
      names: ["\\mathchoice"],
      props: {
        numArgs: 4
      },
      handler: function(e, t) {
        return {
          type: "mathchoice",
          display: Object(n.c)(t[0]),
          text: Object(n.c)(t[1]),
          script: Object(n.c)(t[2]),
          scriptscript: Object(n.c)(t[3])
        }
      },
      htmlBuilder: function(e, t) {
        var r = u(e, t),
          n = s.a(r, t, !1);
        return new a.a.makeFragment(n)
      },
      mathmlBuilder: function(e, t) {
        var r = u(e, t),
          n = l.a(r, t, !1);
        return new i.a.MathNode("mrow", n)
      }
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(61),
      a = (r(143), n.a);
    t.a = a
  }, function(e, t, r) {
    "use strict";
    var n = r(0),
      a = r(61),
      i = r(1),
      o = r(6),
      s = r(14),
      l = r(19),
      u = r(5),
      c = r(13),
      h = r(4),
      p = r(2);

    function m(e, t, r) {
      for (var n = [], a = [n], i = [];;) {
        var l = e.parseExpression(!1, void 0);
        l = new s.a("ordgroup", l, e.mode), r && (l = new s.a("styling", {
          style: r,
          value: [l]
        }, e.mode)), n.push(l);
        var u = e.nextToken.text;
        if ("&" === u) e.consume();
        else {
          if ("\\end" === u) {
            var c = a[a.length - 1];
            a.length > 1 && 1 === c.length && 0 === c[0].value.value[0].value.length && a.pop();
            break
          }
          if ("\\\\" !== u && "\\cr" !== u) throw new o.a("Expected & or \\\\ or \\end", e.nextToken);
          var h = e.parseFunction();
          if (!h) throw new o.a("Failed to parse function after " + u);
          i.push(h.value.size), n = [], a.push(n)
        }
      }
      return t.body = a, t.rowGaps = i, new s.a(t.type, t, e.mode)
    }

    function d(e) {
      return "d" === e.substr(0, 1) ? "display" : "text"
    }
    var f = function(e, t) {
        var r = void 0,
          a = void 0,
          i = e.value.body.length,
          s = 0,
          p = new Array(i),
          m = 1 / t.fontMetrics().ptPerEm,
          d = 5 * m,
          f = 12 * m,
          v = 3 * m,
          g = u.a.deflt(e.value.arraystretch, 1) * f,
          y = .7 * g,
          b = .3 * g,
          x = 0;
        for (r = 0; r < e.value.body.length; ++r) {
          var w = e.value.body[r],
            k = y,
            M = b;
          s < w.length && (s = w.length);
          var S = new Array(w.length);
          for (a = 0; a < w.length; ++a) {
            var z = h.b(w[a], t);
            M < z.depth && (M = z.depth), k < z.height && (k = z.height), S[a] = z
          }
          var O = 0;
          e.value.rowGaps[r] && (O = Object(l.a)(e.value.rowGaps[r].value, t)) > 0 && (M < (O += b) && (M = O), O = 0), e.value.addJot && (M += v), S.height = k, S.depth = M, x += k, S.pos = x, x += M + O, p[r] = S
        }
        var T = x / 2 + t.fontMetrics().axisHeight,
          A = e.value.cols || [],
          N = [],
          B = void 0,
          q = void 0;
        for (a = 0, q = 0; a < s || q < A.length; ++a, ++q) {
          for (var C = A[q] || {}, E = !0;
            "separator" === C.type;) {
            if (E || ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = t.fontMetrics().doubleRuleSep + "em", N.push(B)), "|" !== C.separator) throw new o.a("Invalid separator type: " + C.separator);
            var j = c.a.ruleSpan("vertical-separator", .05, t);
            j.style.height = x + "em", j.style.verticalAlign = -(x - T) + "em", N.push(j), C = A[++q] || {}, E = !1
          }
          if (!(a >= s)) {
            var R = void 0;
            (a > 0 || e.value.hskipBeforeAndAfter) && 0 !== (R = u.a.deflt(C.pregap, d)) && ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = R + "em", N.push(B));
            var H = [];
            for (r = 0; r < i; ++r) {
              var I = p[r],
                D = I[a];
              if (D) {
                var L = I.pos - T;
                D.depth = I.depth, D.height = I.height, H.push({
                  type: "elem",
                  elem: D,
                  shift: L
                })
              }
            }
            H = n.a.makeVList({
              positionType: "individualShift",
              children: H
            }, t), H = n.a.makeSpan(["col-align-" + (C.align || "c")], [H]), N.push(H), (a < s - 1 || e.value.hskipBeforeAndAfter) && 0 !== (R = u.a.deflt(C.postgap, d)) && ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = R + "em", N.push(B))
          }
        }
        return p = n.a.makeSpan(["mtable"], N), n.a.makeSpan(["mord"], [p], t)
      },
      v = function(e, t) {
        return new i.a.MathNode("mtable", e.value.body.map(function(e) {
          return new i.a.MathNode("mtr", e.map(function(e) {
            return new i.a.MathNode("mtd", [p.b(e, t)])
          }))
        }))
      },
      g = function(e, t) {
        var r = {
          type: "array",
          cols: [],
          addJot: !0
        };
        r = m(e.parser, r, "display");
        var n = void 0,
          a = 0,
          i = new s.a("ordgroup", [], e.mode);
        if (t[0] && t[0].value) {
          for (var l = "", u = 0; u < t[0].value.length; u++) l += t[0].value[u].value;
          n = Number(l), a = 2 * n
        }
        var c = !a;
        r.value.body.forEach(function(e) {
          for (var t = 1; t < e.length; t += 2) {
            e[t].value.value[0].value.unshift(i)
          }
          if (c) a < e.length && (a = e.length);
          else {
            var r = e.length / 2;
            if (n < r) throw new o.a("Too many math in a row: expected " + n + ", but got " + r, e)
          }
        });
        for (var h = 0; h < a; ++h) {
          var p = "r",
            d = 0;
          h % 2 == 1 ? p = "l" : h > 0 && c && (d = 1), r.value.cols[h] = {
            type: "align",
            align: p,
            pregap: d,
            postgap: 0
          }
        }
        return r
      };
    Object(a.b)({
      type: "array",
      names: ["array", "darray"],
      props: {
        numArgs: 1
      },
      handler: function(e, t) {
        var r = t[0],
          n = {
            type: "array",
            cols: (r = r.value.map ? r.value : [r]).map(function(e) {
              var t = e.value;
              if (-1 !== "lcr".indexOf(t)) return {
                type: "align",
                align: t
              };
              if ("|" === t) return {
                type: "separator",
                separator: "|"
              };
              throw new o.a("Unknown column alignment: " + e.value, e)
            }),
            hskipBeforeAndAfter: !0
          };
        return n = m(e.parser, n, d(e.envName))
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
      props: {
        numArgs: 0
      },
      handler: function(e) {
        var t = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"]
          }[e.envName],
          r = {
            type: "array",
            hskipBeforeAndAfter: !1
          };
        return r = m(e.parser, r, d(e.envName)), t && (r = new s.a("leftright", {
          body: [r],
          left: t[0],
          right: t[1]
        }, e.mode)), r
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["cases", "dcases"],
      props: {
        numArgs: 0
      },
      handler: function(e) {
        var t = {
          type: "array",
          arraystretch: 1.2,
          cols: [{
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 1
          }, {
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 0
          }]
        };
        return t = m(e.parser, t, d(e.envName)), t = new s.a("leftright", {
          body: [t],
          left: "\\{",
          right: "."
        }, e.mode)
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["aligned"],
      props: {
        numArgs: 0
      },
      handler: g,
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["gathered"],
      props: {
        numArgs: 0
      },
      handler: function(e) {
        var t = {
          type: "array",
          cols: [{
            type: "align",
            align: "c"
          }],
          addJot: !0
        };
        return t = m(e.parser, t, "display")
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["alignedat"],
      props: {
        numArgs: 1
      },
      handler: g,
      htmlBuilder: f,
      mathmlBuilder: v
    })
  }, function(e, t, r) {
    "use strict";
    var n = r(35),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = r(62),
      c = r(27),
      h = r(146),
      p = r(6),
      m = r(147),
      d = r.n(m),
      f = function() {
        function e(t, r, n) {
          o()(this, e), this.lexer = new u.c(t), this.macros = d()({}, h.a, r), this.mode = n, this.stack = []
        }
        return l()(e, [{
          key: "switchMode",
          value: function(e) {
            this.mode = e
          }
        }, {
          key: "future",
          value: function() {
            return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
          }
        }, {
          key: "popToken",
          value: function() {
            return this.future(), this.stack.pop()
          }
        }, {
          key: "pushToken",
          value: function(e) {
            this.stack.push(e)
          }
        }, {
          key: "pushTokens",
          value: function(e) {
            var t;
            (t = this.stack).push.apply(t, a()(e))
          }
        }, {
          key: "consumeSpaces",
          value: function() {
            for (;;) {
              if (" " !== this.future().text) break;
              this.stack.pop()
            }
          }
        }, {
          key: "consumeArgs",
          value: function(e) {
            for (var t = [], r = 0; r < e; ++r) {
              this.consumeSpaces();
              var n = this.popToken();
              if ("{" === n.text) {
                for (var a = [], i = 1; 0 !== i;) {
                  var o = this.popToken();
                  if (a.push(o), "{" === o.text) ++i;
                  else if ("}" === o.text) --i;
                  else if ("EOF" === o.text) throw new p.a("End of input in macro argument", n)
                }
                a.pop(), a.reverse(), t[r] = a
              } else {
                if ("EOF" === n.text) throw new p.a("End of input expecting macro argument");
                t[r] = [n]
              }
            }
            return t
          }
        }, {
          key: "expandOnce",
          value: function() {
            var e = this.popToken(),
              t = e.text;
            if ("\\" === t.charAt(0) && u.b.test(t) && this.consumeSpaces(), !this.macros.hasOwnProperty(t)) return this.pushToken(e), e;
            var r = this._getExpansion(t),
              n = r.tokens,
              i = r.numArgs,
              o = n;
            if (i)
              for (var s = this.consumeArgs(i), l = (o = o.slice()).length - 1; l >= 0; --l) {
                var c = o[l];
                if ("#" === c.text) {
                  if (0 === l) throw new p.a("Incomplete placeholder at end of macro body", c);
                  if ("#" === (c = o[--l]).text) o.splice(l + 1, 1);
                  else {
                    if (!/^[1-9]$/.test(c.text)) throw new p.a("Not a valid argument number", c);
                    var h;
                    (h = o).splice.apply(h, [l, 2].concat(a()(s[+c.text - 1])))
                  }
                }
              }
            return this.pushTokens(o), o
          }
        }, {
          key: "expandAfterFuture",
          value: function() {
            return this.expandOnce(), this.future()
          }
        }, {
          key: "expandNextToken",
          value: function() {
            for (;;) {
              var e = this.expandOnce();
              if (e instanceof c.a) {
                if ("\\relax" !== e.text) return this.stack.pop();
                this.stack.pop()
              }
            }
            throw new Error
          }
        }, {
          key: "_getExpansion",
          value: function(e) {
            var t = this.macros[e],
              r = "function" == typeof t ? t(this) : t;
            if ("string" == typeof r) {
              var n = 0;
              if (-1 !== r.indexOf("#"))
                for (var a = r.replace(/##/g, ""); - 1 !== a.indexOf("#" + (n + 1));) ++n;
              for (var i = new u.c(r), o = [], s = i.lex();
                "EOF" !== s.text;) o.push(s), s = i.lex();
              o.reverse();
              var l = {
                tokens: o,
                numArgs: n
              };
              return "function" != typeof t && (this.macros[e] = l), l
            }
            return r
          }
        }]), e
      }();
    t.a = f
  }, function(e, t) {
    e.exports = function(e, t, r) {
      if (e.global || e.sticky) throw new Error("matchAt(...): Only non-global regexes are supported");
      var n = function(e) {
        if (!e.__matchAtRelocatable) {
          var t = e.source + "|()",
            r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
          e.__matchAtRelocatable = new RegExp(t, r)
        }
        return e.__matchAtRelocatable
      }(e);
      n.lastIndex = r;
      var a = n.exec(t);
      return null == a[a.length - 1] ? (a.length = a.length - 1, a) : null
    }
  }, function(e, t, r) {
    "use strict";
    var n = r(59),
      a = r(28),
      i = r(5),
      o = (r(27), {});

    function s(e, t) {
      o[e] = t
    }
    t.a = o, s("\\@firstoftwo", function(e) {
      return {
        tokens: e.consumeArgs(2)[0],
        numArgs: 0
      }
    }), s("\\@secondoftwo", function(e) {
      return {
        tokens: e.consumeArgs(2)[1],
        numArgs: 0
      }
    }), s("\\@ifnextchar", function(e) {
      var t = e.consumeArgs(3),
        r = e.future();
      return 1 === t[0].length && t[0][0].text === r.text ? {
        tokens: t[1],
        numArgs: 0
      } : {
        tokens: t[2],
        numArgs: 0
      }
    }), s("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), s("\\TextOrMath", function(e) {
      var t = e.consumeArgs(2);
      return "text" === e.mode ? {
        tokens: t[0],
        numArgs: 0
      } : {
        tokens: t[1],
        numArgs: 0
      }
    }), s("\\bgroup", "{"), s("\\egroup", "}"), s("\\begingroup", "{"), s("\\endgroup", "}"), s("\\lq", "`"), s("\\rq", "'"), s("\\lbrack", "["), s("\\rbrack", "]"), s("\\aa", "\\r a"), s("\\AA", "\\r A"), s("\u2102", "\\mathbb{C}"), s("\u210d", "\\mathbb{H}"), s("\u2115", "\\mathbb{N}"), s("\u2119", "\\mathbb{P}"), s("\u211a", "\\mathbb{Q}"), s("\u211d", "\\mathbb{R}"), s("\u2124", "\\mathbb{Z}"), s("\xb7", "\\cdotp"), s("\\llap", "\\mathllap{\\textrm{#1}}"), s("\\rlap", "\\mathrlap{\\textrm{#1}}"), s("\\clap", "\\mathclap{\\textrm{#1}}"), s("\\varGamma", "\\mathit{\\Gamma}"), s("\\varDelta", "\\mathit{\\Delta}"), s("\\varTheta", "\\mathit{\\Theta}"), s("\\varLambda", "\\mathit{\\Lambda}"), s("\\varXi", "\\mathit{\\Xi}"), s("\\varPi", "\\mathit{\\Pi}"), s("\\varSigma", "\\mathit{\\Sigma}"), s("\\varUpsilon", "\\mathit{\\Upsilon}"), s("\\varPhi", "\\mathit{\\Phi}"), s("\\varPsi", "\\mathit{\\Psi}"), s("\\varOmega", "\\mathit{\\Omega}"), s("\\overset", "\\mathop{#2}\\limits^{#1}"), s("\\underset", "\\mathop{#2}\\limits_{#1}"), s("\\boxed", "\\fbox{\\displaystyle{#1}}"), s("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), s("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), s("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
    var l = {
      ",": "\\dotsc",
      "\\not": "\\dotsb",
      "+": "\\dotsb",
      "=": "\\dotsb",
      "<": "\\dotsb",
      ">": "\\dotsb",
      "-": "\\dotsb",
      "*": "\\dotsb",
      ":": "\\dotsb",
      "\\DOTSB": "\\dotsb",
      "\\coprod": "\\dotsb",
      "\\bigvee": "\\dotsb",
      "\\bigwedge": "\\dotsb",
      "\\biguplus": "\\dotsb",
      "\\bigcap": "\\dotsb",
      "\\bigcup": "\\dotsb",
      "\\prod": "\\dotsb",
      "\\sum": "\\dotsb",
      "\\bigotimes": "\\dotsb",
      "\\bigoplus": "\\dotsb",
      "\\bigodot": "\\dotsb",
      "\\bigsqcup": "\\dotsb",
      "\\implies": "\\dotsb",
      "\\impliedby": "\\dotsb",
      "\\And": "\\dotsb",
      "\\longrightarrow": "\\dotsb",
      "\\Longrightarrow": "\\dotsb",
      "\\longleftarrow": "\\dotsb",
      "\\Longleftarrow": "\\dotsb",
      "\\longleftrightarrow": "\\dotsb",
      "\\Longleftrightarrow": "\\dotsb",
      "\\mapsto": "\\dotsb",
      "\\longmapsto": "\\dotsb",
      "\\hookrightarrow": "\\dotsb",
      "\\iff": "\\dotsb",
      "\\doteq": "\\dotsb",
      "\\mathbin": "\\dotsb",
      "\\bmod": "\\dotsb",
      "\\mathrel": "\\dotsb",
      "\\relbar": "\\dotsb",
      "\\Relbar": "\\dotsb",
      "\\xrightarrow": "\\dotsb",
      "\\xleftarrow": "\\dotsb",
      "\\DOTSI": "\\dotsi",
      "\\int": "\\dotsi",
      "\\oint": "\\dotsi",
      "\\iint": "\\dotsi",
      "\\iiint": "\\dotsi",
      "\\iiiint": "\\dotsi",
      "\\idotsint": "\\dotsi",
      "\\DOTSX": "\\dotsx"
    };
    s("\\dots", function(e) {
      var t = "\\dotso",
        r = e.expandAfterFuture().text;
      return r in l ? t = l[r] : "\\not" === r.substr(0, 4) ? t = "\\dotsb" : r in a.a.math && i.a.contains(["bin", "rel"], a.a.math[r].group) && (t = "\\dotsb"), t
    });
    var u = {
      ")": !0,
      "]": !0,
      "\\rbrack": !0,
      "\\}": !0,
      "\\rbrace": !0,
      "\\rangle": !0,
      "\\rceil": !0,
      "\\rfloor": !0,
      "\\rgroup": !0,
      "\\rmoustache": !0,
      "\\right": !0,
      "\\bigr": !0,
      "\\biggr": !0,
      "\\Bigr": !0,
      "\\Biggr": !0,
      $: !0,
      ";": !0,
      ".": !0,
      ",": !0
    };
    s("\\dotso", function(e) {
      return e.future().text in u ? "\\ldots\\," : "\\ldots"
    }), s("\\dotsc", function(e) {
      var t = e.future().text;
      return t in u && "," !== t ? "\\ldots\\," : "\\ldots"
    }), s("\\cdots", function(e) {
      return e.future().text in u ? "\\@cdots\\," : "\\@cdots"
    }), s("\\dotsb", "\\cdots"), s("\\dotsm", "\\cdots"), s("\\dotsi", "\\!\\cdots"), s("\\dotsx", "\\ldots\\,"), s("\\DOTSI", "\\relax"), s("\\DOTSB", "\\relax"), s("\\DOTSX", "\\relax"), s("\\thinspace", "\\,"), s("\\medspace", "\\:"), s("\\thickspace", "\\;"), s("\\TeX", "\\textrm{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}");
    var c = n.a["Main-Regular"]["T".charCodeAt(0)][1] - .7 * n.a["Main-Regular"]["A".charCodeAt(0)][1] + "em";
    s("\\LaTeX", "\\textrm{L\\kern-.36em\\raisebox{" + c + "}{\\scriptsize A}\\kern-.15em\\TeX}"), s("\\KaTeX", "\\textrm{K\\kern-.17em\\raisebox{" + c + "}{\\scriptsize A}\\kern-.15em\\TeX}"), s("\\hspace", "\\@ifstar\\kern\\kern"), s("\\ordinarycolon", ":"), s("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), s("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon"), s("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}="), s("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}="), s("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"), s("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"), s("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx"), s("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx"), s("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim"), s("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim"), s("\u2254", "\\coloneqq"), s("\u2255", "\\eqqcolon"), s("\u2a74", "\\Coloneqq"), s("\\ratio", "\\vcentcolon"), s("\\coloncolon", "\\dblcolon"), s("\\colonequals", "\\coloneqq"), s("\\coloncolonequals", "\\Coloneqq"), s("\\equalscolon", "\\eqqcolon"), s("\\equalscoloncolon", "\\Eqqcolon"), s("\\colonminus", "\\coloneq"), s("\\coloncolonminus", "\\Coloneq"), s("\\minuscolon", "\\eqcolon"), s("\\minuscoloncolon", "\\Eqcolon"), s("\\coloncolonapprox", "\\Colonapprox"), s("\\coloncolonsim", "\\Colonsim"), s("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\notni", "\\not\\ni"), s("\\limsup", "\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"), s("\\liminf", "\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits")
  }, function(e, t, r) {
    "use strict";
    var n = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
            return t[e]
          }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e) {
          n[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
      } catch (e) {
        return !1
      }
    }() ? Object.assign : function(e, t) {
      for (var r, o, s = function(e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e)
        }(e), l = 1; l < arguments.length; l++) {
        r = Object(arguments[l]);
        for (var u in r) a.call(r, u) && (s[u] = r[u]);
        if (n) {
          o = n(r);
          for (var c = 0; c < o.length; c++) i.call(r, o[c]) && (s[o[c]] = r[o[c]])
        }
      }
      return s
    }
  }, function(e, t) {
    e.exports = {
      "\u0301": {
        text: "\\'",
        math: "\\acute"
      },
      "\u0300": {
        text: "\\`",
        math: "\\grave"
      },
      "\u0308": {
        text: '\\"',
        math: "\\ddot"
      },
      "\u0303": {
        text: "\\~",
        math: "\\tilde"
      },
      "\u0304": {
        text: "\\=",
        math: "\\bar"
      },
      "\u0306": {
        text: "\\u",
        math: "\\breve"
      },
      "\u030c": {
        text: "\\v",
        math: "\\check"
      },
      "\u0302": {
        text: "\\^",
        math: "\\hat"
      },
      "\u0307": {
        text: "\\.",
        math: "\\dot"
      },
      "\u030a": {
        text: "\\r",
        math: "\\mathring"
      },
      "\u030b": {
        text: "\\H"
      }
    }
  }, function(e, t, r) {
    "use strict";
    t.a = {
      "\xe1": "a\u0301",
      "\xe0": "a\u0300",
      "\xe4": "a\u0308",
      "\u01df": "a\u0308\u0304",
      "\xe3": "a\u0303",
      "\u0101": "a\u0304",
      "\u0103": "a\u0306",
      "\u1eaf": "a\u0306\u0301",
      "\u1eb1": "a\u0306\u0300",
      "\u1eb5": "a\u0306\u0303",
      "\u01ce": "a\u030c",
      "\xe2": "a\u0302",
      "\u1ea5": "a\u0302\u0301",
      "\u1ea7": "a\u0302\u0300",
      "\u1eab": "a\u0302\u0303",
      "\u0227": "a\u0307",
      "\u01e1": "a\u0307\u0304",
      "\xe5": "a\u030a",
      "\u01fb": "a\u030a\u0301",
      "\u1e03": "b\u0307",
      "\u0107": "c\u0301",
      "\u010d": "c\u030c",
      "\u0109": "c\u0302",
      "\u010b": "c\u0307",
      "\u010f": "d\u030c",
      "\u1e0b": "d\u0307",
      "\xe9": "e\u0301",
      "\xe8": "e\u0300",
      "\xeb": "e\u0308",
      "\u1ebd": "e\u0303",
      "\u0113": "e\u0304",
      "\u1e17": "e\u0304\u0301",
      "\u1e15": "e\u0304\u0300",
      "\u0115": "e\u0306",
      "\u011b": "e\u030c",
      "\xea": "e\u0302",
      "\u1ebf": "e\u0302\u0301",
      "\u1ec1": "e\u0302\u0300",
      "\u1ec5": "e\u0302\u0303",
      "\u0117": "e\u0307",
      "\u1e1f": "f\u0307",
      "\u01f5": "g\u0301",
      "\u1e21": "g\u0304",
      "\u011f": "g\u0306",
      "\u01e7": "g\u030c",
      "\u011d": "g\u0302",
      "\u0121": "g\u0307",
      "\u1e27": "h\u0308",
      "\u021f": "h\u030c",
      "\u0125": "h\u0302",
      "\u1e23": "h\u0307",
      "\xed": "i\u0301",
      "\xec": "i\u0300",
      "\xef": "i\u0308",
      "\u1e2f": "i\u0308\u0301",
      "\u0129": "i\u0303",
      "\u012b": "i\u0304",
      "\u012d": "i\u0306",
      "\u01d0": "i\u030c",
      "\xee": "i\u0302",
      "\u01f0": "j\u030c",
      "\u0135": "j\u0302",
      "\u1e31": "k\u0301",
      "\u01e9": "k\u030c",
      "\u013a": "l\u0301",
      "\u013e": "l\u030c",
      "\u1e3f": "m\u0301",
      "\u1e41": "m\u0307",
      "\u0144": "n\u0301",
      "\u01f9": "n\u0300",
      "\xf1": "n\u0303",
      "\u0148": "n\u030c",
      "\u1e45": "n\u0307",
      "\xf3": "o\u0301",
      "\xf2": "o\u0300",
      "\xf6": "o\u0308",
      "\u022b": "o\u0308\u0304",
      "\xf5": "o\u0303",
      "\u1e4d": "o\u0303\u0301",
      "\u1e4f": "o\u0303\u0308",
      "\u022d": "o\u0303\u0304",
      "\u014d": "o\u0304",
      "\u1e53": "o\u0304\u0301",
      "\u1e51": "o\u0304\u0300",
      "\u014f": "o\u0306",
      "\u01d2": "o\u030c",
      "\xf4": "o\u0302",
      "\u1ed1": "o\u0302\u0301",
      "\u1ed3": "o\u0302\u0300",
      "\u1ed7": "o\u0302\u0303",
      "\u022f": "o\u0307",
      "\u0231": "o\u0307\u0304",
      "\u0151": "o\u030b",
      "\u1e55": "p\u0301",
      "\u1e57": "p\u0307",
      "\u0155": "r\u0301",
      "\u0159": "r\u030c",
      "\u1e59": "r\u0307",
      "\u015b": "s\u0301",
      "\u1e65": "s\u0301\u0307",
      "\u0161": "s\u030c",
      "\u1e67": "s\u030c\u0307",
      "\u015d": "s\u0302",
      "\u1e61": "s\u0307",
      "\u1e97": "t\u0308",
      "\u0165": "t\u030c",
      "\u1e6b": "t\u0307",
      "\xfa": "u\u0301",
      "\xf9": "u\u0300",
      "\xfc": "u\u0308",
      "\u01d8": "u\u0308\u0301",
      "\u01dc": "u\u0308\u0300",
      "\u01d6": "u\u0308\u0304",
      "\u01da": "u\u0308\u030c",
      "\u0169": "u\u0303",
      "\u1e79": "u\u0303\u0301",
      "\u016b": "u\u0304",
      "\u1e7b": "u\u0304\u0308",
      "\u016d": "u\u0306",
      "\u01d4": "u\u030c",
      "\xfb": "u\u0302",
      "\u016f": "u\u030a",
      "\u0171": "u\u030b",
      "\u1e7d": "v\u0303",
      "\u1e83": "w\u0301",
      "\u1e81": "w\u0300",
      "\u1e85": "w\u0308",
      "\u0175": "w\u0302",
      "\u1e87": "w\u0307",
      "\u1e98": "w\u030a",
      "\u1e8d": "x\u0308",
      "\u1e8b": "x\u0307",
      "\xfd": "y\u0301",
      "\u1ef3": "y\u0300",
      "\xff": "y\u0308",
      "\u1ef9": "y\u0303",
      "\u0233": "y\u0304",
      "\u0177": "y\u0302",
      "\u1e8f": "y\u0307",
      "\u1e99": "y\u030a",
      "\u017a": "z\u0301",
      "\u017e": "z\u030c",
      "\u1e91": "z\u0302",
      "\u017c": "z\u0307",
      "\xc1": "A\u0301",
      "\xc0": "A\u0300",
      "\xc4": "A\u0308",
      "\u01de": "A\u0308\u0304",
      "\xc3": "A\u0303",
      "\u0100": "A\u0304",
      "\u0102": "A\u0306",
      "\u1eae": "A\u0306\u0301",
      "\u1eb0": "A\u0306\u0300",
      "\u1eb4": "A\u0306\u0303",
      "\u01cd": "A\u030c",
      "\xc2": "A\u0302",
      "\u1ea4": "A\u0302\u0301",
      "\u1ea6": "A\u0302\u0300",
      "\u1eaa": "A\u0302\u0303",
      "\u0226": "A\u0307",
      "\u01e0": "A\u0307\u0304",
      "\xc5": "A\u030a",
      "\u01fa": "A\u030a\u0301",
      "\u1e02": "B\u0307",
      "\u0106": "C\u0301",
      "\u010c": "C\u030c",
      "\u0108": "C\u0302",
      "\u010a": "C\u0307",
      "\u010e": "D\u030c",
      "\u1e0a": "D\u0307",
      "\xc9": "E\u0301",
      "\xc8": "E\u0300",
      "\xcb": "E\u0308",
      "\u1ebc": "E\u0303",
      "\u0112": "E\u0304",
      "\u1e16": "E\u0304\u0301",
      "\u1e14": "E\u0304\u0300",
      "\u0114": "E\u0306",
      "\u011a": "E\u030c",
      "\xca": "E\u0302",
      "\u1ebe": "E\u0302\u0301",
      "\u1ec0": "E\u0302\u0300",
      "\u1ec4": "E\u0302\u0303",
      "\u0116": "E\u0307",
      "\u1e1e": "F\u0307",
      "\u01f4": "G\u0301",
      "\u1e20": "G\u0304",
      "\u011e": "G\u0306",
      "\u01e6": "G\u030c",
      "\u011c": "G\u0302",
      "\u0120": "G\u0307",
      "\u1e26": "H\u0308",
      "\u021e": "H\u030c",
      "\u0124": "H\u0302",
      "\u1e22": "H\u0307",
      "\xcd": "I\u0301",
      "\xcc": "I\u0300",
      "\xcf": "I\u0308",
      "\u1e2e": "I\u0308\u0301",
      "\u0128": "I\u0303",
      "\u012a": "I\u0304",
      "\u012c": "I\u0306",
      "\u01cf": "I\u030c",
      "\xce": "I\u0302",
      "\u0130": "I\u0307",
      "\u0134": "J\u0302",
      "\u1e30": "K\u0301",
      "\u01e8": "K\u030c",
      "\u0139": "L\u0301",
      "\u013d": "L\u030c",
      "\u1e3e": "M\u0301",
      "\u1e40": "M\u0307",
      "\u0143": "N\u0301",
      "\u01f8": "N\u0300",
      "\xd1": "N\u0303",
      "\u0147": "N\u030c",
      "\u1e44": "N\u0307",
      "\xd3": "O\u0301",
      "\xd2": "O\u0300",
      "\xd6": "O\u0308",
      "\u022a": "O\u0308\u0304",
      "\xd5": "O\u0303",
      "\u1e4c": "O\u0303\u0301",
      "\u1e4e": "O\u0303\u0308",
      "\u022c": "O\u0303\u0304",
      "\u014c": "O\u0304",
      "\u1e52": "O\u0304\u0301",
      "\u1e50": "O\u0304\u0300",
      "\u014e": "O\u0306",
      "\u01d1": "O\u030c",
      "\xd4": "O\u0302",
      "\u1ed0": "O\u0302\u0301",
      "\u1ed2": "O\u0302\u0300",
      "\u1ed6": "O\u0302\u0303",
      "\u022e": "O\u0307",
      "\u0230": "O\u0307\u0304",
      "\u0150": "O\u030b",
      "\u1e54": "P\u0301",
      "\u1e56": "P\u0307",
      "\u0154": "R\u0301",
      "\u0158": "R\u030c",
      "\u1e58": "R\u0307",
      "\u015a": "S\u0301",
      "\u1e64": "S\u0301\u0307",
      "\u0160": "S\u030c",
      "\u1e66": "S\u030c\u0307",
      "\u015c": "S\u0302",
      "\u1e60": "S\u0307",
      "\u0164": "T\u030c",
      "\u1e6a": "T\u0307",
      "\xda": "U\u0301",
      "\xd9": "U\u0300",
      "\xdc": "U\u0308",
      "\u01d7": "U\u0308\u0301",
      "\u01db": "U\u0308\u0300",
      "\u01d5": "U\u0308\u0304",
      "\u01d9": "U\u0308\u030c",
      "\u0168": "U\u0303",
      "\u1e78": "U\u0303\u0301",
      "\u016a": "U\u0304",
      "\u1e7a": "U\u0304\u0308",
      "\u016c": "U\u0306",
      "\u01d3": "U\u030c",
      "\xdb": "U\u0302",
      "\u016e": "U\u030a",
      "\u0170": "U\u030b",
      "\u1e7c": "V\u0303",
      "\u1e82": "W\u0301",
      "\u1e80": "W\u0300",
      "\u1e84": "W\u0308",
      "\u0174": "W\u0302",
      "\u1e86": "W\u0307",
      "\u1e8c": "X\u0308",
      "\u1e8a": "X\u0307",
      "\xdd": "Y\u0301",
      "\u1ef2": "Y\u0300",
      "\u0178": "Y\u0308",
      "\u1ef8": "Y\u0303",
      "\u0232": "Y\u0304",
      "\u0176": "Y\u0302",
      "\u1e8e": "Y\u0307",
      "\u0179": "Z\u0301",
      "\u017d": "Z\u030c",
      "\u1e90": "Z\u0302",
      "\u017b": "Z\u0307",
      "\u03ac": "\u03b1\u0301",
      "\u1f70": "\u03b1\u0300",
      "\u1fb1": "\u03b1\u0304",
      "\u1fb0": "\u03b1\u0306",
      "\u03ad": "\u03b5\u0301",
      "\u1f72": "\u03b5\u0300",
      "\u03ae": "\u03b7\u0301",
      "\u1f74": "\u03b7\u0300",
      "\u03af": "\u03b9\u0301",
      "\u1f76": "\u03b9\u0300",
      "\u03ca": "\u03b9\u0308",
      "\u0390": "\u03b9\u0308\u0301",
      "\u1fd2": "\u03b9\u0308\u0300",
      "\u1fd1": "\u03b9\u0304",
      "\u1fd0": "\u03b9\u0306",
      "\u03cc": "\u03bf\u0301",
      "\u1f78": "\u03bf\u0300",
      "\u03cd": "\u03c5\u0301",
      "\u1f7a": "\u03c5\u0300",
      "\u03cb": "\u03c5\u0308",
      "\u03b0": "\u03c5\u0308\u0301",
      "\u1fe2": "\u03c5\u0308\u0300",
      "\u1fe1": "\u03c5\u0304",
      "\u1fe0": "\u03c5\u0306",
      "\u03ce": "\u03c9\u0301",
      "\u1f7c": "\u03c9\u0300",
      "\u038e": "\u03a5\u0301",
      "\u1fea": "\u03a5\u0300",
      "\u03ab": "\u03a5\u0308",
      "\u1fe9": "\u03a5\u0304",
      "\u1fe8": "\u03a5\u0306",
      "\u038f": "\u03a9\u0301",
      "\u1ffa": "\u03a9\u0300"
    }
  }]).default
});
