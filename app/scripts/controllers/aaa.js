/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" !== c && !n.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
    }

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    function D(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;) ;
        return a
    }

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
            try {
                c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c)
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Fa(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; e--;) if ((b = Ea[e] + c) in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), "inline" === ("none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j) && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        var e = {}, f = a === mb;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                break
            }
            if (!0 !== g) if (g && a.throws) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty,
        k = {}, l = a.document, m = "2.1.4", n = function (a, b) {
            return new n.fn.init(a, b)
        }, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" === n.type(a) && !a.nodeType && !n.isWindow(a) && !(a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            (a = n.trim(a)) && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) for (; f > e && !1 !== b.apply(a[e], c); e++) ; else for (e in a) if (!1 === b.apply(a[e], c)) break
            } else if (g) for (; f > e && !1 !== b.call(a[e], e, a[e]); e++) ; else for (e in a) if (!1 === b.call(a[e], e, a[e])) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var e = [], f = 0, g = a.length, h = !c; g > f; f++) !b(a[f], f) !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (; g > f; f++) null != (d = b(a[f], f, c)) && i.push(d); else for (f in a) null != (d = b(a[f], f, c)) && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function (a) {
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (!(h = b.getElementById(j)) || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; l--;) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            var a = [];
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            for (var c = a.split("|"), e = a.length; e--;) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && void 0 !== a.getElementsByTagName && a
        }

        function qa() {
        }

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = va(r, n), d(j, [], h, i), k = j.length; k--;) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        for (m = 0; o = a[m++];) if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    for (m = 0; o = b[m++];) o(r, s, g, h);
                    if (f) {
                        if (p > 0) for (; q--;) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P),
            W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                    a.length = c - 1
                }
            }
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (void 0 !== b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else for (; b = a[d++];) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l !== b));) ;
                            return (m -= e) === d || m % d == 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                        } while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return !1 === a.disabled
                }, disabled: function (a) {
                    return !0 === a.disabled
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = function (a) {
            return function (b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }(b);
        for (b in{submit: !0, reset: !0}) d.pseudos[b] = function (a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }(b);
        return qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        }, h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (!(b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0])) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);) if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                    if (j.splice(i, 1), !(a = f.length && ra(j))) return H.apply(e, f), e;
                    break
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (n.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (!(c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a)) || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    }).prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};
    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (!1 === h[g].apply(l[0], l[1]) && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    for (var c; (c = n.inArray(b, h, c)) > -1;) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var i, j, k, b = 0, c = d.call(arguments), e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                };
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    }), n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (void 0 !== (c = M.get(f, a))) return c;
                    if (void 0 !== (c = M.get(f, d))) return c;
                    if (void 0 !== (c = P(f, d, void 0))) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) (c = L.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(E) || [""], j = b.length; j--;) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && n.expr.match.needsContext.test(e),
                namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, p, g) || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(E) || [""], j = b.length; j--;) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || !1 !== o.trigger.apply(d, c))) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = p[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), (m = k && g[k]) && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && !1 !== o._default.apply(p.pop(), c) || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, void 0 !== (e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = e) && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (!0 !== i.disabled || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td, n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m]) || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e); else if (ca.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) for (j = 0; e = f[j++];) fa.test(e.type || "") && c.push(e);
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando]) && (b = L.cache[e])) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    ja(this, a).appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {}, ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function () {
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
        }

        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f), a.getComputedStyle && n.extend(k, {
            pixelPosition: function () {
                return g(), b
            }, boxSizingReliable: function () {
                return null == c && g(), c
            }, reliableMarginRight: function () {
                var b, c = f.appendChild(l.createElement("div"));
                return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
            }
        }))
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {position: "absolute", visibility: "hidden", display: "block"},
        Da = {letterSpacing: "0", fontWeight: "400"}, Ea = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), !0 === c || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xa, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Ja(this, !0)
        }, hide: function () {
            return Ja(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = Ka, Ka.prototype = {
        constructor: Ka, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/, Qa = [Va], Ra = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        h = h || ".5", g /= h, n.style(c.elem, a, g + f)
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || !0 === d.queue) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                ;
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) (a = c[b])() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : void 0)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return !1 === b ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {for: "htmlFor", class: "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(/\r/g, "") : null == c ? "" : c)) : void 0
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"),
        ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), (w = v.getResponseHeader("etag")) && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(),
                p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) for (f = {}; b = gb.exec(e);) f[b[1].toLowerCase()] = b[2];
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(/#.*$/, "").replace(/^\/\//, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), !1 === k.cache && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && !1 !== k.contentType || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (!1 === k.beforeSend.call(l, v, k) || 2 === t)) return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1}) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var wb = /\[\]$/, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(/%20/g, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(/\r?\n/g, "\r\n")}
                }) : {name: b.name, value: c.replace(/\r?\n/g, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {0: 200, 1223: 204}, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = !1 !== b.jsonp && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : !1 !== b.jsonp && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Ib; a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (!0 === d || !0 === e ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
}), function (C) {
    "use strict";

    function N(a) {
        return function () {
            var d, b = arguments[0];
            for (d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.8/" + (a ? a + "/" : "") + b, b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var e, c = encodeURIComponent;
                e = arguments[b], e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : void 0 === e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e, d += c(e)
            }
            return Error(d)
        }
    }

    function ta(a) {
        if (null == a || Va(a)) return !1;
        if (L(a) || G(a) || F && a instanceof F) return !0;
        var b = "length" in Object(a) && a.length;
        return T(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function q(a, b, d) {
        var c, e;
        if (a) if (z(a)) for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a); else if (L(a) || ta(a)) {
            var f = "object" != typeof a;
            for (c = 0, e = a.length; c < e; c++) (f || c in a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a); else if (sc(a)) for (c in a) b.call(d, a[c], c, a); else if ("function" == typeof a.hasOwnProperty) for (c in a) a.hasOwnProperty(c) && b.call(d, a[c], c, a); else for (c in a) ua.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function tc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);
        return c
    }

    function uc(a) {
        return function (b, d) {
            a(d, b)
        }
    }

    function Yd() {
        return ++pb
    }

    function Pb(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (D(g) || z(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k], n = g[m];
                d && D(n) ? da(n) ? a[m] = new Date(n.valueOf()) : Wa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Qb(n) ? a[m] = n.clone() : (D(a[m]) || (a[m] = L(n) ? [] : {}), Pb(a[m], [n], !0)) : a[m] = n
            }
        }
        return c ? a.$$hashKey = c : delete a.$$hashKey, a
    }

    function S(a) {
        return Pb(a, va.call(arguments, 1), !1)
    }

    function Zd(a) {
        return Pb(a, va.call(arguments, 1), !0)
    }

    function Z(a) {
        return parseInt(a, 10)
    }

    function Rb(a, b) {
        return S(Object.create(a), b)
    }

    function A() {
    }

    function Xa(a) {
        return a
    }

    function ha(a) {
        return function () {
            return a
        }
    }

    function vc(a) {
        return z(a.toString) && a.toString !== ma
    }

    function y(a) {
        return void 0 === a
    }

    function w(a) {
        return void 0 !== a
    }

    function D(a) {
        return null !== a && "object" == typeof a
    }

    function sc(a) {
        return null !== a && "object" == typeof a && !wc(a)
    }

    function G(a) {
        return "string" == typeof a
    }

    function T(a) {
        return "number" == typeof a
    }

    function da(a) {
        return "[object Date]" === ma.call(a)
    }

    function z(a) {
        return "function" == typeof a
    }

    function Wa(a) {
        return "[object RegExp]" === ma.call(a)
    }

    function Va(a) {
        return a && a.window === a
    }

    function Ya(a) {
        return a && a.$evalAsync && a.$watch
    }

    function Ga(a) {
        return "boolean" == typeof a
    }

    function $d(a) {
        return a && T(a.length) && ae.test(ma.call(a))
    }

    function Qb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function be(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++) b[a[d]] = !0;
        return b
    }

    function wa(a) {
        return Q(a.nodeName || a[0] && a[0].nodeName)
    }

    function Za(a, b) {
        var d = a.indexOf(b);
        return 0 <= d && a.splice(d, 1), d
    }

    function pa(a, b) {
        function d(a, b) {
            var e, d = b.$$hashKey;
            if (L(a)) {
                e = 0;
                for (var f = a.length; e < f; e++) b.push(c(a[e]))
            } else if (sc(a)) for (e in a) b[e] = c(a[e]); else if (a && "function" == typeof a.hasOwnProperty) for (e in a) a.hasOwnProperty(e) && (b[e] = c(a[e])); else for (e in a) ua.call(a, e) && (b[e] = c(a[e]));
            return d ? b.$$hashKey = d : delete b.$$hashKey, b
        }

        function c(a) {
            if (!D(a)) return a;
            var b = f.indexOf(a);
            if (-1 !== b) return g[b];
            if (Va(a) || Ya(a)) throw xa("cpws");
            var b = !1, c = e(a);
            return void 0 === c && (c = L(a) ? [] : Object.create(wc(a)), b = !0), f.push(a), g.push(c), b ? d(a, c) : c
        }

        function e(a) {
            switch (ma.call(a)) {
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return new a.constructor(c(a.buffer), a.byteOffset, a.length);
                case"[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        return new Uint8Array(b).set(new Uint8Array(a)), b
                    }
                    return a.slice(0);
                case"[object Boolean]":
                case"[object Number]":
                case"[object String]":
                case"[object Date]":
                    return new a.constructor(a.valueOf());
                case"[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                case"[object Blob]":
                    return new a.constructor([a], {type: a.type})
            }
            if (z(a.cloneNode)) return a.cloneNode(!0)
        }

        var f = [], g = [];
        if (b) {
            if ($d(b) || "[object ArrayBuffer]" === ma.call(b)) throw xa("cpta");
            if (a === b) throw xa("cpi");
            return L(b) ? b.length = 0 : q(b, function (a, d) {
                "$$hashKey" !== d && delete b[d]
            }), f.push(a), g.push(b), d(a, b)
        }
        return c(a)
    }

    function na(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var c, d = typeof a;
        if (d == typeof b && "object" == d) {
            if (!L(a)) {
                if (da(a)) return !!da(b) && na(a.getTime(), b.getTime());
                if (Wa(a)) return !!Wa(b) && a.toString() == b.toString();
                if (Ya(a) || Ya(b) || Va(a) || Va(b) || L(b) || da(b) || Wa(b)) return !1;
                d = U();
                for (c in a) if ("$" !== c.charAt(0) && !z(a[c])) {
                    if (!na(a[c], b[c])) return !1;
                    d[c] = !0
                }
                for (c in b) if (!(c in d) && "$" !== c.charAt(0) && w(b[c]) && !z(b[c])) return !1;
                return !0
            }
            if (!L(b)) return !1;
            if ((d = a.length) == b.length) {
                for (c = 0; c < d; c++) if (!na(a[c], b[c])) return !1;
                return !0
            }
        }
        return !1
    }

    function $a(a, b, d) {
        return a.concat(va.call(b, d))
    }

    function ab(a, b) {
        var d = 2 < arguments.length ? va.call(arguments, 2) : [];
        return !z(b) || b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, $a(d, arguments, 0)) : b.apply(a, d)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function ce(a, b) {
        var d = b;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Va(b) ? d = "$WINDOW" : b && C.document === b ? d = "$DOCUMENT" : Ya(b) && (d = "$SCOPE"), d
    }

    function bb(a, b) {
        if (!y(a)) return T(b) || (b = b ? 2 : null), JSON.stringify(a, ce, b)
    }

    function xc(a) {
        return G(a) ? JSON.parse(a) : a
    }

    function yc(a, b) {
        a = a.replace(de, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(d) ? b : d
    }

    function Sb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        return b = yc(b, c), d *= b - c, a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + d), a
    }

    function ya(a) {
        a = F(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var d = F("<div>").append(a).html();
        try {
            return a[0].nodeType === Ma ? Q(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + Q(b)
            })
        } catch (c) {
            return Q(d)
        }
    }

    function zc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function Ac(a) {
        var b = {};
        return q((a || "").split("&"), function (a) {
            var c, e, f;
            a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = zc(e), w(e) && (f = !w(f) || zc(f), ua.call(b, e) ? L(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
        }), b
    }

    function Tb(a) {
        var b = [];
        return q(a, function (a, c) {
            L(a) ? q(a, function (a) {
                b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)))
            }) : b.push(ea(c, !0) + (!0 === a ? "" : "=" + ea(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function qb(a) {
        return ea(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ea(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ee(a, b) {
        var d, c, e = Na.length;
        for (c = 0; c < e; ++c) if (d = Na[c] + b, G(d = a.getAttribute(d))) return d;
        return null
    }

    function fe(a, b) {
        var d, c, e = {};
        q(Na, function (b) {
            b += "app", !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        }), q(Na, function (b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b))
        }), d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e))
    }

    function Bc(a, b, d) {
        D(d) || (d = {}), d = S({strictDi: !1}, d);
        var c = function () {
            if (a = F(a), a.injector()) {
                var c = a[0] === C.document ? "document" : ya(a);
                throw xa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return b = b || [], b.unshift(["$provide", function (b) {
                b.value("$rootElement", a)
            }]), d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]), b.unshift("ng"), c = cb(b, d.strictDi), c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d), c(b)(a)
                })
            }]), c
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        if (C && e.test(C.name) && (d.debugInfoEnabled = !0, C.name = C.name.replace(e, "")), C && !f.test(C.name)) return c();
        C.name = C.name.replace(f, ""), ca.resumeBootstrap = function (a) {
            return q(a, function (a) {
                b.push(a)
            }), c()
        }, z(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()
    }

    function ge() {
        C.name = "NG_ENABLE_DEBUG_INFO!" + C.name, C.location.reload()
    }

    function he(a) {
        if (!(a = ca.element(a).injector())) throw xa("test");
        return a.get("$$testability")
    }

    function Cc(a, b) {
        return b = b || "_", a.replace(ie, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function sb(a, b, d) {
        if (!a) throw xa("areq", b || "?", d || "required");
        return a
    }

    function Pa(a, b, d) {
        return d && L(a) && (a = a[a.length - 1]), sb(z(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function Qa(a, b) {
        if ("hasOwnProperty" === a) throw xa("badname", b)
    }

    function Ec(a, b, d) {
        if (!b) return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++) c = b[g], a && (a = (e = a)[c]);
        return !d && z(a) ? ab(e, a) : a
    }

    function tb(a) {
        for (var c, b = a[0], d = a[a.length - 1], e = 1; b !== d && (b = b.nextSibling); e++) (c || a[e] !== b) && (c || (c = F(va.call(a, 0, e))), c.push(b));
        return c || a
    }

    function U() {
        return Object.create(null)
    }

    function ke(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var d = N("$injector"), c = N("ng");
        return a = b(a, "angular", Object), a.$$minErr = a.$$minErr || N, b(a, "module", function () {
            var a = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f) throw c("badname", "module");
                return g && a.hasOwnProperty(f) && (a[f] = null), b(a, f, function () {
                    function a(b, d, e, f) {
                        return f || (f = c), function () {
                            return f[e || "push"]([b, d, arguments]), R
                        }
                    }

                    function b(a, d) {
                        return function (b, e) {
                            return e && z(e) && (e.$$moduleName = f), c.push([a, d, arguments]), R
                        }
                    }

                    if (!g) throw d("nomod", f);
                    var c = [], e = [], p = [], u = a("$injector", "invoke", "push", e), R = {
                        _invokeQueue: c,
                        _configBlocks: e,
                        _runBlocks: p,
                        requires: g,
                        name: f,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: b("$compileProvider", "component"),
                        config: u,
                        run: function (a) {
                            return p.push(a), this
                        }
                    };
                    return h && u(h), R
                })
            }
        })
    }

    function ia(a, b) {
        if (L(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++) b[d] = a[d]
        } else if (D(a)) for (d in b = b || {}, a) "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d]);
        return b || a
    }

    function db(a) {
        return a.replace(Kf, function (a, d, c, e) {
            return e ? c.toUpperCase() : c
        }).replace(Lf, "Moz$1")
    }

    function Nc(a) {
        return 1 === (a = a.nodeType) || !a || 9 === a
    }

    function Oc(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (Vb.test(a)) {
            for (d = e.appendChild(b.createElement("div")), c = (Mf.exec(a) || ["", ""])[1].toLowerCase(), c = ja[c] || ja._default, d.innerHTML = c[1] + a.replace(Nf, "<$1></$2>") + c[2], c = c[0]; c--;) d = d.lastChild;
            f = $a(f, d.childNodes), d = e.firstChild, d.textContent = ""
        } else f.push(b.createTextNode(a));
        return e.textContent = "", e.innerHTML = "", q(f, function (a) {
            e.appendChild(a)
        }), e
    }

    function Pc(a, b) {
        var d = a.parentNode;
        d && d.replaceChild(b, a), b.appendChild(a)
    }

    function O(a) {
        if (a instanceof O) return a;
        var b;
        if (G(a) && (a = W(a), b = !0), !(this instanceof O)) {
            if (b && "<" != a.charAt(0)) throw Wb("nosel");
            return new O(a)
        }
        if (b) {
            b = C.document;
            var d;
            a = (d = Of.exec(a)) ? [b.createElement(d[1])] : (d = Oc(a, b)) ? d.childNodes : []
        }
        Qc(this, a)
    }

    function Xb(a) {
        return a.cloneNode(!0)
    }

    function wb(a, b) {
        if (b || eb(a), a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) eb(d[c])
    }

    function Rc(a, b, d, c) {
        if (w(c)) throw Wb("offargs");
        var e = (c = xb(a)) && c.events, f = c && c.handle;
        if (f) if (b) {
            var g = function (b) {
                var c = e[b];
                w(d) && Za(c || [], d), w(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b])
            };
            q(b.split(" "), function (a) {
                g(a), yb[a] && g(yb[a])
            })
        } else for (b in e) "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
    }

    function eb(a, b) {
        var d = a.ng339, c = d && fb[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Rc(a)), delete fb[d], a.ng339 = void 0))
    }

    function xb(a, b) {
        var d = a.ng339, d = d && fb[d];
        return b && !d && (a.ng339 = d = ++Pf, d = fb[d] = {events: {}, data: {}, handle: void 0}), d
    }

    function Yb(a, b, d) {
        if (Nc(a)) {
            var c = w(d), e = !c && b && !D(b), f = !b;
            if (a = (a = xb(a, !e)) && a.data, c) a[b] = d; else {
                if (f) return a;
                if (e) return a && a[b];
                S(a, b)
            }
        }
    }

    function zb(a, b) {
        return !!a.getAttribute && -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ")
    }

    function Ab(a, b) {
        b && a.setAttribute && q(b.split(" "), function (b) {
            a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")))
        })
    }

    function Bb(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function (a) {
                a = W(a), -1 === d.indexOf(" " + a + " ") && (d += a + " ")
            }), a.setAttribute("class", W(d))
        }
    }

    function Qc(a, b) {
        if (b) if (b.nodeType) a[a.length++] = b; else {
            var d = b.length;
            if ("number" == typeof d && b.window !== b) {
                if (d) for (var c = 0; c < d; c++) a[a.length++] = b[c]
            } else a[a.length++] = b
        }
    }

    function Sc(a, b) {
        return Cb(a, "$" + (b || "ngController") + "Controller")
    }

    function Cb(a, b, d) {
        for (9 == a.nodeType && (a = a.documentElement), b = L(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++) if (w(d = F.data(a, b[c]))) return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function Tc(a) {
        for (wb(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Db(a, b) {
        b || wb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function Qf(a, b) {
        b = b || C, "complete" === b.document.readyState ? b.setTimeout(a) : F(b).on("load", a)
    }

    function Uc(a, b) {
        var d = Eb[b.toLowerCase()];
        return d && Vc[wa(a)] && d
    }

    function Rf(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f = b[d || c.type], g = f ? f.length : 0;
            if (g) {
                if (y(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                var k = f.specialHandlerWrapper || Sf;
                1 < g && (f = ia(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l])
            }
        };
        return d.elem = a, d
    }

    function Sf(a, b, d) {
        d.call(a, b)
    }

    function Tf(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || Uf.call(a, c)) || d.call(a, b)
    }

    function Hf() {
        this.$get = function () {
            return S(O, {
                hasClass: function (a, b) {
                    return a.attr && (a = a[0]), zb(a, b)
                }, addClass: function (a, b) {
                    return a.attr && (a = a[0]), Bb(a, b)
                }, removeClass: function (a, b) {
                    return a.attr && (a = a[0]), Ab(a, b)
                }
            })
        }
    }

    function Ca(a, b) {
        var d = a && a.$$hashKey;
        return d ? ("function" == typeof d && (d = a.$$hashKey()), d) : (d = typeof a, d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a)
    }

    function Ra(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function () {
                return ++d
            }
        }
        q(a, this.put, this)
    }

    function Wc(a) {
        return a = (Function.prototype.toString.call(a) + " ").replace(Vf, ""), a.match(Wf) || a.match(Xf)
    }

    function Yf(a) {
        return (a = Wc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function cb(a, b) {
        function d(a) {
            return function (b, c) {
                if (!D(b)) return a(b, c);
                q(b, uc(a))
            }
        }

        function c(a, b) {
            if (Qa(a, "service"), (z(b) || L(b)) && (b = p.instantiate(b)), !b.$get) throw Ha("pget", a);
            return n[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = B.invoke(b, this);
                if (y(c)) throw Ha("undef", a);
                return c
            }
        }

        function f(a, b, d) {
            return c(a, {$get: !1 !== d ? e(a, b) : b})
        }

        function g(a) {
            sb(y(a) || L(a), "modulesToLoad", "not an array");
            var c, b = [];
            return q(a, function (a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; b < c; b++) {
                        var e = a[b], f = p.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        G(a) ? (c = Ub(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : z(a) ? b.push(p.invoke(a)) : L(a) ? b.push(p.invoke(a)) : Pa(a, "module")
                    } catch (e) {
                        throw L(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e)
                    }
                }
            }), b
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e)
                } catch (f) {
                    throw a[b] === k && delete a[b], f
                } finally {
                    l.shift()
                }
            }

            function e(a, c, f) {
                var g = [];
                a = cb.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" != typeof l) throw Ha("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f))
                }
                return g
            }

            return {
                invoke: function (a, b, c, d) {
                    return "string" == typeof c && (d = c, c = null), c = e(a, c, d), L(a) && (a = a[a.length - 1]), d = !(11 >= Ea) && ("function" == typeof a && /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a) + " ")), d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                }, instantiate: function (a, b, c) {
                    var d = L(a) ? a[a.length - 1] : a;
                    return a = e(a, b, c), a.unshift(null), new (Function.prototype.bind.apply(d, a))
                }, get: d, annotate: cb.$$annotate, has: function (b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }

        b = !0 === b;
        var k = {}, l = [], m = new Ra([], !0), n = {
            $provide: {
                provider: d(c), factory: d(f), service: d(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }), value: d(function (a, b) {
                    return f(a, ha(b), !1)
                }), constant: d(function (a, b) {
                    Qa(a, "constant"), n[a] = b, u[a] = b
                }), decorator: function (a, b) {
                    var c = p.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = B.invoke(d, c);
                        return B.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, p = n.$injector = h(n, function (a, b) {
            throw ca.isString(b) && l.push(b), Ha("unpr", l.join(" <- "))
        }), u = {}, R = h(u, function (a, b) {
            var c = p.get(a + "Provider", b);
            return B.invoke(c.$get, c, void 0, a)
        }), B = R;
        n.$injectorProvider = {$get: ha(R)};
        var r = g(a), B = R.get("$injector");
        return B.strictDi = b, q(r, function (a) {
            a && B.invoke(a)
        }), B
    }

    function Xe() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function (a) {
                    if ("a" === wa(a)) return b = a, !0
                }), b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset, z(c) ? c = c() : Qb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : T(c) || (c = 0), c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = G(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = b.document;
            return a && c.$watch(function () {
                return d.hash()
            }, function (a, b) {
                a === b && "" === a || Qf(function () {
                    c.$evalAsync(g)
                })
            }), g
        }]
    }

    function gb(a, b) {
        return a || b ? a ? b ? (L(a) && (a = a.join(" ")), L(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function Zf(a) {
        G(a) && (a = a.split(" "));
        var b = U();
        return q(a, function (a) {
            a.length && (b[a] = !0)
        }), b
    }

    function Ia(a) {
        return D(a) ? a : {}
    }

    function $f(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, va.call(arguments, 1))
            } finally {
                if (0 === --R) for (; B.length;) try {
                    B.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function f() {
            t = null, g(), h()
        }

        function g() {
            r = K(), r = y(r) ? null : r, na(r, E) && (r = E), E = r
        }

        function h() {
            v === k.url() && J === r || (v = k.url(), J = r, q(M, function (a) {
                a(k.url(), r)
            }))
        }

        var k = this, l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, u = {};
        k.isMock = !1;
        var R = 0, B = [];
        k.$$completeOutstandingRequest = e, k.$$incOutstandingRequestCount = function () {
            R++
        }, k.notifyWhenNoOutstandingRequests = function (a) {
            0 === R ? a() : B.push(a)
        };
        var r, J, v = l.href, fa = b.find("base"), t = null, K = c.history ? function () {
            try {
                return m.state
            } catch (a) {
            }
        } : A;
        g(), J = r, k.url = function (b, d, e) {
            if (y(e) && (e = null), l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
                var f = J === e;
                if (v === b && (!c.history || f)) return k;
                var h = v && Ja(v) === Ja(b);
                return v = b, J = e, !c.history || h && f ? (h || (t = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (t = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), J = r), t && (t = b), k
            }
            return t || l.href.replace(/%27/g, "'")
        }, k.state = function () {
            return r
        };
        var M = [], H = !1, E = null;
        k.onUrlChange = function (b) {
            return H || (c.history && F(a).on("popstate", f), F(a).on("hashchange", f), H = !0), M.push(b), b
        }, k.$$applicationDestroyed = function () {
            F(a).off("hashchange popstate", f)
        }, k.$$checkUrlChange = h, k.baseHref = function () {
            var a = fa.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, k.defer = function (a, b) {
            var c;
            return R++, c = n(function () {
                delete u[c], e(a)
            }, b || 0), u[c] = !0, c
        }, k.defer.cancel = function (a) {
            return !!u[a] && (delete u[a], p(a), e(A), !0)
        }
    }

    function df() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new $f(a, c, b, d)
        }]
    }

    function ef() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b) throw N("$cacheFactory")("iid", a);
                var g = 0, h = S({}, c, {id: a}), k = U(), l = c && c.capacity || Number.MAX_VALUE, m = U(), n = null,
                    p = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!y(b)) {
                            if (l < Number.MAX_VALUE) {
                                e(m[a] || (m[a] = {key: a}))
                            }
                            return a in k || g++, k[a] = b, g > l && this.remove(p.key), b
                        }
                    }, get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            e(b)
                        }
                        return k[a]
                    }, remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b == n && (n = b.p), b == p && (p = b.n), f(b.n, b.p), delete m[a]
                        }
                        a in k && (delete k[a], g--)
                    }, removeAll: function () {
                        k = U(), g = 0, m = U(), n = p = null
                    }, destroy: function () {
                        m = h = k = null, delete b[a]
                    }, info: function () {
                        return S({}, h, {size: g})
                    }
                }
            }

            var b = {};
            return a.info = function () {
                var a = {};
                return q(b, function (b, e) {
                    a[e] = b.info()
                }), a
            }, a.get = function (a) {
                return b[a]
            }, a
        }
    }

    function Bf() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Fc(a, b) {
        function d(a, b, c) {
            var e = U();
            return q(a, function (a, f) {
                if (a in n) e[f] = n[a]; else {
                    var g = a.match(/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/);
                    if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {
                        mode: g[1][0],
                        collection: "*" === g[2],
                        optional: "?" === g[3],
                        attrName: g[4] || f
                    }, g[4] && (n[a] = e[f])
                }
            }), e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== Q(b)) throw ga("baddir", a);
            if (a !== a.trim()) throw ga("baddir", a)
        }

        function e(a) {
            var b = a.require || a.controller && a.name;
            return !L(b) && D(b) && q(b, function (a, c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c)
            }), b
        }

        var f = {}, g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            k = be("ngSrc,ngSrcset,src,srcset"), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, m = /^(on[a-z]+|formaction)$/,
            n = U();
        this.directive = function B(b, d) {
            return Qa(b, "directive"), G(b) ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                return q(f[b], function (f, g) {
                    try {
                        var h = a.invoke(f);
                        z(h) ? h = {compile: ha(h)} : !h.compile && h.link && (h.compile = ha(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = e(h), h.restrict = h.restrict || "EA", h.$$moduleName = f.$$moduleName, d.push(h)
                    } catch (k) {
                        c(k)
                    }
                }), d
            }])), f[b].push(d)) : q(b, uc(B)), this
        }, this.component = function (a, b) {
            function c(a) {
                function e(b) {
                    return z(b) || L(b) ? function (c, d) {
                        return a.invoke(b, this, {$element: c, $attrs: d})
                    } : b
                }

                var f = b.template || b.templateUrl ? b.template : "", g = {
                    controller: d,
                    controllerAs: Xc(b.controller) || b.controllerAs || "$ctrl",
                    template: e(f),
                    templateUrl: e(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                };
                return q(b, function (a, b) {
                    "$" === b.charAt(0) && (g[b] = a)
                }), g
            }

            var d = b.controller || function () {
            };
            return q(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a, z(d) && (d[b] = a))
            }), c.$inject = ["$injector"], this.directive(a, c)
        }, this.aHrefSanitizationWhitelist = function (a) {
            return w(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return w(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
        };
        var p = !0;
        this.debugInfoEnabled = function (a) {
            return w(a) ? (p = a, this) : p
        };
        var u = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (u = a, this) : u
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, t, K, M, H, E) {
            function I() {
                try {
                    if (!--qa) throw Y = void 0, ga("infchng", u);
                    K.$apply(function () {
                        for (var a = [], b = 0, c = Y.length; b < c; ++b) try {
                            Y[b]()
                        } catch (d) {
                            a.push(d)
                        }
                        if (Y = void 0, a.length) throw a
                    })
                } finally {
                    qa++
                }
            }

            function Da(a, b) {
                if (b) {
                    var d, e, f, c = Object.keys(b);
                    for (d = 0, e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            }

            function P(a, b, c) {
                pa.innerHTML = "<span " + b + ">", b = pa.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name), d.value = c, a.attributes.setNamedItem(d)
            }

            function x(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function aa(a, b, c, d, e) {
                a instanceof F || (a = F(a));
                for (var g = 0, h = a.length; g < h; g++) {
                    var k = a[g];
                    k.nodeType === Ma && k.nodeValue.match(/\S+/) && Pc(k, a[g] = C.document.createElement("span"))
                }
                var l = s(a, b, a, c, d, e);
                aa.$$addScopeClass(a);
                var m = null;
                return function (b, c, d) {
                    sb(b, "scope"), e && e.needsNewScope && (b = b.$parent.$new()), d = d || {};
                    var f = d.parentBoundTranscludeFn, g = d.transcludeControllers;
                    if (d = d.futureParentElement, f && f.$$boundTransclude && (f = f.$$boundTransclude), m || (m = (d = d && d[0]) && "foreignobject" !== wa(d) && ma.call(d).match(/SVG/) ? "svg" : "html"), d = "html" !== m ? F(da(m, F("<div>").append(a).html())) : c ? Oa.clone.call(a) : a, g) for (var h in g) d.data("$" + h + "Controller", g[h].instance);
                    return aa.$$addScopeInfo(d, b), c && c(d, b), l && l(b, d, d, f), d
                }
            }

            function s(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, p, r, v;
                    if (n) for (v = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], v[f] = c[f]; else v = c;
                    for (m = 0, p = h.length; m < p;) k = v[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(F(k), l)) : l = a, r = c.transcludeOnThisElement ? za(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? za(a, b) : null, c(f, l, k, d, r)) : f && f(a, k.childNodes, void 0, e)
                }

                for (var k, l, m, p, n, h = [], r = 0; r < a.length; r++) k = new Da, l = $b(a[r], [], k, 0 === r ? d : void 0, e), (f = l.length ? oa(l, a[r], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element), k = f && f.terminal || !(m = a[r].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), (f || k) && (h.push(r, f, k), p = !0, n = n || f), f = null;
                return p ? g : null
            }

            function za(a, b, c) {
                function d(e, f, g, h, k) {
                    return e || (e = a.$new(!1, k), e.$$transcluded = !0), b(e, f, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: g,
                        futureParentElement: h
                    })
                }

                var f, e = d.$$slots = U();
                for (f in b.$$slots) e[f] = b.$$slots[f] ? za(a, b.$$slots[f], c) : null;
                return d
            }

            function $b(a, b, c, d, e) {
                var f = c.$attr;
                switch (a.nodeType) {
                    case 1:
                        O(b, Aa(wa(a)), "E", d, e);
                        for (var g, k, l, m, p = a.attributes, n = 0, r = p && p.length; n < r; n++) {
                            var v = !1, u = !1;
                            g = p[n], k = g.name, l = W(g.value), g = Aa(k), (m = Ba.test(g)) && (k = k.replace(Yc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            })), (g = g.match(Ca)) && V(g[1]) && (v = k, u = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), g = Aa(k.toLowerCase()), f[g] = k, !m && c.hasOwnProperty(g) || (c[g] = l, Uc(a, g) && (c[g] = !0)), ia(a, b, l, g, m), O(b, g, "A", d, e, v, u)
                        }
                        if (f = a.className, D(f) && (f = f.animVal), G(f) && "" !== f) for (; a = h.exec(f);) g = Aa(a[2]), O(b, g, "C", d, e) && (c[g] = W(a[3])), f = f.substr(a.index + a[0].length);
                        break;
                    case Ma:
                        if (11 === Ea) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Ma;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        ca(b, a.nodeValue);
                        break;
                    case 8:
                        hb(a, b, c, d, e)
                }
                return b.sort(Z), b
            }

            function hb(a, b, c, d, e) {
                try {
                    var f = g.exec(a.nodeValue);
                    if (f) {
                        var h = Aa(f[1]);
                        O(b, h, "M", d, e) && (c[h] = W(f[2]))
                    }
                } catch (k) {
                }
            }

            function N(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) do {
                    if (!a) throw ga("uterdir", b, c);
                    1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                } while (0 < e); else d.push(a);
                return F(d)
            }

            function Zc(a, b, c) {
                return function (d, e, f, g, h) {
                    return e = N(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function ac(a, b, c, d, e, f) {
                var g;
                return a ? aa(b, c, d, e, f) : function () {
                    return g || (g = aa(b, c, d, e, f), b = c = f = null), g.apply(this, arguments)
                }
            }

            function oa(a, b, d, e, f, g, h, k, l) {
                function m(a, b, c, d) {
                    a && (c && (a = Zc(a, c, d)), a.require = x.require, a.directiveName = I, (u === x || x.$$isolateScope) && (a = ja(a, {isolateScope: !0})), h.push(a)), b && (c && (b = Zc(b, c, d)), b.require = x.require, b.directiveName = I, (u === x || x.$$isolateScope) && (b = ja(b, {isolateScope: !0})), k.push(b))
                }

                function p(a, e, f, g, l) {
                    function m(a, b, c, d) {
                        var e;
                        if (Ya(a) || (d = c, c = b, b = a, a = void 0), fa && (e = t), c || (c = fa ? I.parent() : I), !d) return l(a, b, e, c, s);
                        var f = l.$$slots[d];
                        if (f) return f(a, b, e, c, s);
                        if (y(f)) throw ga("noslot", d, ya(I))
                    }

                    var n, E, x, M, B, t, P, I;
                    b === f ? (g = d, I = d.$$element) : (I = F(f), g = new Da(I, d)), B = e, u ? M = e.$new(!0) : r && (B = e.$parent), l && (P = m, P.$$boundTransclude = l, P.isSlotFilled = function (a) {
                        return !!l.$$slots[a]
                    }), v && (t = ag(I, g, P, v, M, e, u)), u && (aa.$$addScopeInfo(I, M, !0, !(H && (H === u || H === u.$$originalDirective))), aa.$$addScopeClass(I, !0), M.$$isolateBindings = u.$$isolateBindings, E = ka(e, g, M, M.$$isolateBindings, u), E.removeWatches && M.$on("$destroy", E.removeWatches));
                    for (n in t) {
                        E = v[n], x = t[n];
                        var Zb = E.$$bindings.bindToController;
                        x.bindingInfo = x.identifier && Zb ? ka(B, g, x.instance, Zb, E) : {};
                        var K = x();
                        K !== x.instance && (x.instance = K, I.data("$" + E.name + "Controller", K), x.bindingInfo.removeWatches && x.bindingInfo.removeWatches(), x.bindingInfo = ka(B, g, x.instance, Zb, E))
                    }
                    for (q(v, function (a, b) {
                        var c = a.require;
                        a.bindToController && !L(c) && D(c) && S(t[b].instance, ib(b, c, I, t))
                    }), q(t, function (a) {
                        var b = a.instance;
                        if (z(b.$onChanges)) try {
                            b.$onChanges(a.bindingInfo.initialChanges)
                        } catch (d) {
                            c(d)
                        }
                        if (z(b.$onInit)) try {
                            b.$onInit()
                        } catch (e) {
                            c(e)
                        }
                        z(b.$doCheck) && (B.$watch(function () {
                            b.$doCheck()
                        }), b.$doCheck()), z(b.$onDestroy) && B.$on("$destroy", function () {
                            b.$onDestroy()
                        })
                    }), n = 0, E = h.length; n < E; n++) x = h[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
                    var s = e;
                    for (u && (u.template || null === u.templateUrl) && (s = M), a && a(s, f.childNodes, void 0, l), n = k.length - 1; 0 <= n; n--) x = k[n], la(x, x.isolateScope ? M : e, I, g, x.require && ib(x.directiveName, x.require, I, t), P);
                    q(t, function (a) {
                        a = a.instance, z(a.$postLink) && a.$postLink()
                    })
                }

                l = l || {};
                for (var x, I, P, s, w, n = -Number.MAX_VALUE, r = l.newScopeDirective, v = l.controllerDirectives, u = l.newIsolateScopeDirective, H = l.templateDirective, E = l.nonTlbTranscludeDirective, M = !1, B = !1, fa = l.hasElementTranscludeDirective, t = d.$$element = F(b), K = e, Fa = !1, za = !1, A = 0, C = a.length; A < C; A++) {
                    x = a[A];
                    var G = x.$$start, hb = x.$$end;
                    if (G && (t = N(b, G, hb)), P = void 0, n > x.priority) break;
                    if ((w = x.scope) && (x.templateUrl || (D(w) ? (X("new/isolated scope", u || r, x, t), u = x) : X("new/isolated scope", u, x, t)), r = r || x), I = x.name, !Fa && (x.replace && (x.templateUrl || x.template) || x.transclude && !x.$$tlb)) {
                        for (w = A + 1; Fa = a[w++];) if (Fa.transclude && !Fa.$$tlb || Fa.replace && (Fa.templateUrl || Fa.template)) {
                            za = !0;
                            break
                        }
                        Fa = !0
                    }
                    if (!x.templateUrl && x.controller && (w = x.controller, v = v || U(), X("'" + I + "' controller", v[I], x, t), v[I] = x), w = x.transclude) if (M = !0, x.$$tlb || (X("transclusion", E, x, t), E = x), "element" == w) fa = !0, n = x.priority, P = t, t = d.$$element = F(aa.$$createComment(I, d[I])), b = t[0], ea(f, va.call(P, 0), b), P[0].$$parentNode = P[0].parentNode, K = ac(za, P, e, n, g && g.name, {nonTlbTranscludeDirective: E}); else {
                        var oa = U();
                        if (P = F(Xb(b)).contents(), D(w)) {
                            P = [];
                            var Q = U(), O = U();
                            q(w, function (a, b) {
                                var c = "?" === a.charAt(0);
                                a = c ? a.substring(1) : a, Q[a] = b, oa[b] = null, O[b] = c
                            }), q(t.contents(), function (a) {
                                var b = Q[Aa(wa(a))];
                                b ? (O[b] = !0, oa[b] = oa[b] || [], oa[b].push(a)) : P.push(a)
                            }), q(O, function (a, b) {
                                if (!a) throw ga("reqslot", b)
                            });
                            for (var V in oa) oa[V] && (oa[V] = ac(za, oa[V], e))
                        }
                        t.empty(), K = ac(za, P, e, void 0, void 0, {needsNewScope: x.$$isolateScope || x.$$newScope}), K.$$slots = oa
                    }
                    if (x.template) if (B = !0, X("template", H, x, t), H = x, w = z(x.template) ? x.template(t, d) : x.template, w = xa(w), x.replace) {
                        if (g = x, P = Vb.test(w) ? $c(da(x.templateNamespace, W(w))) : [], b = P[0], 1 != P.length || 1 !== b.nodeType) throw ga("tplrt", I, "");
                        ea(f, t, b), C = {$attr: {}}, w = $b(b, [], C);
                        var Z = a.splice(A + 1, a.length - (A + 1));
                        (u || r) && T(w, u, r), a = a.concat(w).concat(Z), $(d, C), C = a.length
                    } else t.html(w);
                    if (x.templateUrl) B = !0, X("template", H, x, t), H = x, x.replace && (g = x), p = ba(a.splice(A, a.length - A), t, d, f, M && K, h, k, {
                        controllerDirectives: v,
                        newScopeDirective: r !== x && r,
                        newIsolateScopeDirective: u,
                        templateDirective: H,
                        nonTlbTranscludeDirective: E
                    }), C = a.length; else if (x.compile) try {
                        s = x.compile(t, d, K);
                        var Y = x.$$originalDirective || x;
                        z(s) ? m(null, ab(Y, s), G, hb) : s && m(ab(Y, s.pre), ab(Y, s.post), G, hb)
                    } catch (ca) {
                        c(ca, ya(t))
                    }
                    x.terminal && (p.terminal = !0, n = Math.max(n, x.priority))
                }
                return p.scope = r && !0 === r.scope, p.transcludeOnThisElement = M, p.templateOnThisElement = B, p.transclude = K, l.hasElementTranscludeDirective = fa, p
            }

            function ib(a, b, c, d) {
                var e;
                if (G(b)) {
                    var f = b.match(l);
                    b = b.substring(f[0].length);
                    var g = f[1] || f[3], f = "?" === f[2];
                    if ("^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance, !e) {
                        var h = "$" + b + "Controller";
                        e = g ? c.inheritedData(h) : c.data(h)
                    }
                    if (!e && !f) throw ga("ctreq", b, a)
                } else if (L(b)) for (e = [], g = 0, f = b.length; g < f; g++) e[g] = ib(a, b[g], c, d); else D(b) && (e = {}, q(b, function (b, f) {
                    e[f] = ib(a, b, c, d)
                }));
                return e || null
            }

            function ag(a, b, c, d, e, f, g) {
                var k, h = U();
                for (k in d) {
                    var l = d[k],
                        m = {$scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c},
                        p = l.controller;
                    "@" == p && (p = b[l.name]), m = t(p, m, !0, l.controllerAs), h[l.name] = m, a.data("$" + l.name + "Controller", m.instance)
                }
                return h
            }

            function T(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d] = Rb(a[d], {$$isolateScope: b, $$newScope: c})
            }

            function O(b, e, g, h, k, l, m) {
                if (e === k) return null;
                if (k = null, f.hasOwnProperty(e)) {
                    var p;
                    e = a.get(e + "Directive");
                    for (var n = 0, r = e.length; n < r; n++) try {
                        if (p = e[n], (y(h) || h > p.priority) && -1 != p.restrict.indexOf(g)) {
                            if (l && (p = Rb(p, {$$start: l, $$end: m})), !p.$$bindings) {
                                var u = p, v = p, x = p.name, H = {isolateScope: null, bindToController: null};
                                if (D(v.scope) && (!0 === v.bindToController ? (H.bindToController = d(v.scope, x, !0), H.isolateScope = {}) : H.isolateScope = d(v.scope, x, !1)), D(v.bindToController) && (H.bindToController = d(v.bindToController, x, !0)), D(H.bindToController)) {
                                    var E = v.controller, M = v.controllerAs;
                                    if (!E) throw ga("noctrl", x);
                                    if (!Xc(E, M)) throw ga("noident", x)
                                }
                                var t = u.$$bindings = H;
                                D(t.isolateScope) && (p.$$isolateBindings = t.isolateScope)
                            }
                            b.push(p), k = p
                        }
                    } catch (I) {
                        c(I)
                    }
                }
                return k
            }

            function V(b) {
                if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) if (b = c[d], b.multiElement) return !0;
                return !1
            }

            function $(a, b) {
                var c = b.$attr, d = a.$attr;
                q(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), q(b, function (b, e) {
                    a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]))
                })
            }

            function ba(a, b, c, d, f, g, h, k) {
                var m, p, l = [], n = b[0], r = a.shift(),
                    u = Rb(r, {templateUrl: null, transclude: null, replace: null, $$originalDirective: r}),
                    H = z(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl, E = r.templateNamespace;
                return b.empty(), e(H).then(function (e) {
                    var v, M;
                    if (e = xa(e), r.replace) {
                        if (e = Vb.test(e) ? $c(da(E, W(e))) : [], v = e[0], 1 != e.length || 1 !== v.nodeType) throw ga("tplrt", r.name, H);
                        e = {$attr: {}}, ea(d, b, v);
                        var B = $b(v, [], e);
                        D(r.scope) && T(B, !0), a = B.concat(a), $(c, e)
                    } else v = n, b.html(e);
                    for (a.unshift(u), m = oa(a, v, c, f, b, r, g, h, k), q(d, function (a, c) {
                        a == v && (d[c] = b[0])
                    }), p = s(b[0].childNodes, f); l.length;) {
                        e = l.shift(), M = l.shift();
                        var t = l.shift(), I = l.shift(), B = b[0];
                        if (!e.$$destroyed) {
                            if (M !== n) {
                                var P = M.className;
                                k.hasElementTranscludeDirective && r.replace || (B = Xb(v)), ea(t, F(M), B), x(F(B), P)
                            }
                            M = m.transcludeOnThisElement ? za(e, m.transclude, I) : I, m(p, e, B, d, M)
                        }
                    }
                    l = null
                }), function (a, b, c, d, e) {
                    a = e, b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = za(b, m.transclude, e)), m(p, b, c, d, a)))
                }
            }

            function Z(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function X(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }

                if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ya(d))
            }

            function ca(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        return b && aa.$$addBindingClass(a), function (a, c) {
                            var e = c.parent();
                            b || aa.$$addBindingClass(e), aa.$$addBindingInfo(e, d.expressions), a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function da(a, b) {
                switch (a = Q(a || "html")) {
                    case"svg":
                    case"math":
                        var c = C.document.createElement("div");
                        return c.innerHTML = "<" + a + ">" + b + "</" + a + ">", c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function ha(a, b) {
                if ("srcdoc" == b) return M.HTML;
                var c = wa(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? M.RESOURCE_URL : void 0
            }

            function ia(a, c, d, e, f) {
                var g = ha(a, e);
                f = k[e] || f;
                var h = b(d, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === wa(a)) throw ga("selmulti", ya(a));
                    c.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, c, k) {
                                    if (c = k.$$observers || (k.$$observers = U()), m.test(e)) throw ga("nodomevents");
                                    var l = k[e];
                                    l !== d && (h = l && b(l, !0, g, f), d = l), h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
                                        "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ea(a, b, c) {
                var g, h, d = b[0], e = b.length, f = d.parentNode;
                if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
                    a[g++] = c, h = g + e - 1;
                    for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1, a.context === d && (a.context = c);
                    break
                }
                for (f && f.replaceChild(c, d), a = C.document.createDocumentFragment(), g = 0; g < e; g++) a.appendChild(b[g]);
                for (F.hasData(d) && (F.data(c, F.data(d)), F(d).off("$destroy")), F.cleanData(a.querySelectorAll("*")), g = 1; g < e; g++) delete b[g];
                b[0] = c, b.length = 1
            }

            function ja(a, b) {
                return S(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function la(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, ya(d))
                }
            }

            function ka(a, c, d, e, f) {
                function g(b, c, e) {
                    z(d.$onChanges) && c !== e && (Y || (a.$$postDigest(I), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Fb(e, c))
                }

                function h() {
                    d.$onChanges(m), m = void 0
                }

                var m, k = [], l = {};
                return q(e, function (e, h) {
                    var v, u, x, H, m = e.attrName, p = e.optional;
                    switch (e.mode) {
                        case"@":
                            p || ua.call(c, m) || (d[h] = c[m] = void 0), c.$observe(m, function (a) {
                                (G(a) || Ga(a)) && (g(h, a, d[h]), d[h] = a)
                            }), c.$$observers[m].$$scope = a, v = c[m], G(v) ? d[h] = b(v)(a) : Ga(v) && (d[h] = v), l[h] = new Fb(bc, d[h]);
                            break;
                        case"=":
                            if (!ua.call(c, m)) {
                                if (p) break;
                                c[m] = void 0
                            }
                            if (p && !c[m]) break;
                            u = n(c[m]), H = u.literal ? na : function (a, b) {
                                return a === b || a !== a && b !== b
                            }, x = u.assign || function () {
                                throw v = d[h] = u(a), ga("nonassign", c[m], m, f.name)
                            }, v = d[h] = u(a), p = function (b) {
                                return H(b, d[h]) || (H(b, v) ? x(a, b = d[h]) : d[h] = b), v = b
                            }, p.$stateful = !0, p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, u.literal), k.push(p);
                            break;
                        case"<":
                            if (!ua.call(c, m)) {
                                if (p) break;
                                c[m] = void 0
                            }
                            if (p && !c[m]) break;
                            u = n(c[m]);
                            var E = d[h] = u(a);
                            l[h] = new Fb(bc, d[h]), p = a.$watch(u, function (a, b) {
                                if (b === a) {
                                    if (b === E) return;
                                    b = E
                                }
                                g(h, a, b), d[h] = a
                            }, u.literal), k.push(p);
                            break;
                        case"&":
                            if ((u = c.hasOwnProperty(m) ? n(c[m]) : A) === A && p) break;
                            d[h] = function (b) {
                                return u(a, b)
                            }
                    }
                }), {
                    initialChanges: l, removeWatches: k.length && function () {
                        for (var a = 0, b = k.length; a < b; ++a) k[a]()
                    }
                }
            }

            var Y, ta = /^\w/, pa = C.document.createElement("div"), qa = u;
            Da.prototype = {
                $normalize: Aa, $addClass: function (a) {
                    a && 0 < a.length && H.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && 0 < a.length && H.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = ad(a, b);
                    c && c.length && H.addClass(this.$$element, c), (c = ad(b, a)) && c.length && H.removeClass(this.$$element, c)
                }, $set: function (a, b, d, e) {
                    var f = Uc(this.$$element[0], a), g = bd[a], h = a;
                    if (f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Cc(a, "-")), "a" === (f = wa(this.$$element)) && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = E(b, "src" === a); else if ("img" === f && "srcset" === a && w(b)) {
                        for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l, f = f + E(W(g[m]), !0), f = f + " " + W(g[m + 1]);
                        g = W(g[2 * l]).split(/\s/), f += E(W(g[0]), !0), 2 === g.length && (f += " " + W(g[1])), this[a] = b = f
                    }
                    !1 !== d && (null === b || y(b) ? this.$$element.removeAttr(e) : ta.test(e) ? this.$$element.attr(e, b) : P(this.$$element[0], e, b)), (a = this.$$observers) && q(a[h], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = U()), e = d[a] || (d[a] = []);
                    return e.push(b), K.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || y(c[a]) || b(c[a])
                    }), function () {
                        Za(e, b)
                    }
                }
            };
            var ra = b.startSymbol(), sa = b.endSymbol(), xa = "{{" == ra && "}}" == sa ? Xa : function (a) {
                return a.replace(/\{\{/g, ra).replace(/}}/g, sa)
            }, Ba = /^ngAttr[A-Z]/, Ca = /^(.+)Start$/;
            return aa.$$addBindingInfo = p ? function (a, b) {
                var c = a.data("$binding") || [];
                L(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : A, aa.$$addBindingClass = p ? function (a) {
                x(a, "ng-binding")
            } : A, aa.$$addScopeInfo = p ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : A, aa.$$addScopeClass = p ? function (a, b) {
                x(a, b ? "ng-isolate-scope" : "ng-scope")
            } : A, aa.$$createComment = function (a, b) {
                var c = "";
                return p && (c = " " + (a || "") + ": ", b && (c += b + " ")), C.document.createComment(c)
            }, aa
        }]
    }

    function Fb(a, b) {
        this.previousValue = a, this.currentValue = b
    }

    function Aa(a) {
        return db(a.replace(Yc, ""))
    }

    function ad(a, b) {
        var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a:for (; f < c.length; f++) {
            for (var g = c[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function $c(a) {
        a = F(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) 8 === a[b].nodeType && bg.call(a, b, 1);
        return a
    }

    function Xc(a, b) {
        if (b && G(b)) return b;
        if (G(a)) {
            var d = cd.exec(a);
            if (d) return d[3]
        }
    }

    function ff() {
        var a = {}, b = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b)
        }, this.register = function (b, c) {
            Qa(b, "controller"), D(b) ? S(a, b) : a[b] = c
        }, this.allowGlobals = function () {
            b = !0
        }, this.$get = ["$injector", "$window", function (d, c) {
            function e(a, b, c, d) {
                if (!a || !D(a.$scope)) throw N("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (f, g, h, k) {
                var l, m, n;
                if (h = !0 === h, k && G(k) && (n = k), G(f)) {
                    if (!(k = f.match(cd))) throw cg("ctrlfmt", f);
                    m = k[1], n = n || k[3], f = a.hasOwnProperty(m) ? a[m] : Ec(g.$scope, m, !0) || (b ? Ec(c, m, !0) : void 0), Pa(f, m, !0)
                }
                return h ? (h = (L(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
                    var a = d.invoke(f, l, g, m);
                    return a !== l && (D(a) || z(a)) && (l = a, n && e(g, n, l, m || f.name)), l
                }, {instance: l, identifier: n})) : (l = d.instantiate(f, g, m), n && e(g, n, l, m || f.name), l)
            }
        }]
    }

    function gf() {
        this.$get = ["$window", function (a) {
            return F(a.document)
        }]
    }

    function hf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function cc(a) {
        return D(a) ? da(a) ? a.toISOString() : bb(a) : a
    }

    function nf() {
        this.$get = function () {
            return function (a) {
                if (!a) return "";
                var b = [];
                return tc(a, function (a, c) {
                    null === a || y(a) || (L(a) ? q(a, function (a) {
                        b.push(ea(c) + "=" + ea(cc(a)))
                    }) : b.push(ea(c) + "=" + ea(cc(a))))
                }), b.join("&")
            }
        }
    }

    function of() {
        this.$get = function () {
            return function (a) {
                function b(a, e, f) {
                    null === a || y(a) || (L(a) ? q(a, function (a, c) {
                        b(a, e + "[" + (D(a) ? c : "") + "]")
                    }) : D(a) && !da(a) ? tc(a, function (a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
                    }) : d.push(ea(e) + "=" + ea(cc(a))))
                }

                if (!a) return "";
                var d = [];
                return b(a, "", !0), d.join("&")
            }
        }
    }

    function dc(a, b) {
        if (G(a)) {
            var d = a.replace(dg, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(eg)) && fg[c[0]].test(d)), c && (a = xc(d))
            }
        }
        return a
    }

    function ed(a) {
        var d, b = U();
        return G(a) ? q(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var e = Q(W(a.substr(0, d)));
            a = W(a.substr(d + 1)), e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : D(a) && q(a, function (a, d) {
            var f = Q(d), g = W(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g)
        }), b
    }

    function fd(a) {
        var b;
        return function (d) {
            return b || (b = ed(a)), d ? (d = b[Q(d)], void 0 === d && (d = null), d) : b
        }
    }

    function gd(a, b, d, c) {
        return z(c) ? c(a, b, d) : (q(c, function (c) {
            a = c(a, b, d)
        }), a)
    }

    function mf() {
        var a = this.defaults = {
            transformResponse: [dc],
            transformRequest: [function (a) {
                return D(a) && "[object File]" !== ma.call(a) && "[object Blob]" !== ma.call(a) && "[object FormData]" !== ma.call(a) ? bb(a) : a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: ia(ec), put: ia(ec), patch: ia(ec)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, b = !1;
        this.useApplyAsync = function (a) {
            return w(a) ? (b = !!a, this) : b
        };
        var d = !0;
        this.useLegacyPromiseExtensions = function (a) {
            return w(a) ? (d = !!a, this) : d
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
            function m(b) {
                function c(a, b) {
                    for (var d = 0, e = b.length; d < e;) {
                        var f = b[d++], g = b[d++];
                        a = a.then(f, g)
                    }
                    return b.length = 0, a
                }

                function e(a, b) {
                    var c, d = {};
                    return q(a, function (a, e) {
                        z(a) ? null != (c = a(b)) && (d[e] = c) : d[e] = a
                    }), d
                }

                function f(a) {
                    var b = S({}, a);
                    return b.data = gd(a.data, a.headers, a.status, g.transformResponse), a = a.status, 200 <= a && 300 > a ? b : k.reject(b)
                }

                if (!D(b)) throw N("$http")("badreq", b);
                if (!G(b.url)) throw N("$http")("badreq", b.url);
                var g = S({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                g.headers = function (b) {
                    var f, g, h, c = a.headers, d = S({}, b.headers), c = S({}, c.common, c[Q(b.method)]);
                    a:for (f in c) {
                        g = Q(f);
                        for (h in d) if (Q(h) === g) continue a;
                        d[f] = c[f]
                    }
                    return e(d, ia(b))
                }(b), g.method = ub(g.method), g.paramSerializer = G(g.paramSerializer) ? l.get(g.paramSerializer) : g.paramSerializer;
                var h = [], m = [], p = k.when(g);
                return q(R, function (a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError), (a.response || a.responseError) && m.push(a.response, a.responseError)
                }), p = c(p, h), p = p.then(function (b) {
                    var c = b.headers, d = gd(b.data, fd(c), void 0, b.transformRequest);
                    return y(d) && q(c, function (a, b) {
                        "content-type" === Q(b) && delete c[b]
                    }), y(b.withCredentials) && !y(a.withCredentials) && (b.withCredentials = a.withCredentials), n(b, d).then(f, f)
                }), p = c(p, m), d ? (p.success = function (a) {
                    return Pa(a, "fn"), p.then(function (b) {
                        a(b.data, b.status, b.headers, g)
                    }), p
                }, p.error = function (a) {
                    return Pa(a, "fn"), p.then(null, function (b) {
                        a(b.data, b.status, b.headers, g)
                    }), p
                }) : (p.success = hd("success"), p.error = hd("error")), p
            }

            function n(c, d) {
                function g(a) {
                    if (a) {
                        var c = {};
                        return q(a, function (a, d) {
                            c[d] = function (c) {
                                function d() {
                                    a(c)
                                }

                                b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d)
                            }
                        }), c
                    }
                }

                function l(a, c, d, e) {
                    function f() {
                        n(c, a, d, e)
                    }

                    E && (200 <= a && 300 > a ? E.put(P, [a, c, ed(d), e]) : E.remove(P)), b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
                }

                function n(a, b, d, e) {
                    b = -1 <= b ? b : 0, (200 <= b && 300 > b ? M.resolve : M.reject)({
                        data: a,
                        status: b,
                        headers: fd(d),
                        config: c,
                        statusText: e
                    })
                }

                function t(a) {
                    n(a.data, a.status, ia(a.headers()), a.statusText)
                }

                function R() {
                    var a = m.pendingRequests.indexOf(c);
                    -1 !== a && m.pendingRequests.splice(a, 1)
                }

                var E, I, M = k.defer(), H = M.promise, Da = c.headers, P = p(c.url, c.paramSerializer(c.params));
                return m.pendingRequests.push(c), H.then(R, R), !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (E = D(c.cache) ? c.cache : D(a.cache) ? a.cache : u), E && (I = E.get(P), w(I) ? I && z(I.then) ? I.then(t, t) : L(I) ? n(I[1], I[0], ia(I[2]), I[3]) : n(I, 200, {}, "OK") : E.put(P, H)), y(I) && ((I = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Da[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, P, d, l, Da, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers))), H
            }

            function p(a, b) {
                return 0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            }

            var u = g("$http");
            a.paramSerializer = G(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var R = [];
            return q(c, function (a) {
                R.unshift(G(a) ? l.get(a) : l.invoke(a))
            }), m.pendingRequests = [], function (a) {
                q(arguments, function (a) {
                    m[a] = function (b, c) {
                        return m(S({}, c || {}, {method: a, url: b}))
                    }
                })
            }("get", "delete", "head", "jsonp"), function (a) {
                q(arguments, function (a) {
                    m[a] = function (b, c, d) {
                        return m(S({}, d || {}, {method: a, url: b, data: c}))
                    }
                })
            }("post", "put", "patch"), m.defaults = a, m
        }]
    }

    function qf() {
        this.$get = function () {
            return function () {
                return new C.XMLHttpRequest
            }
        }
    }

    function pf() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
            return gg(a, c, a.defer, b, d[0])
        }]
    }

    function gg(a, b, d, c, e) {
        function f(a, b, d) {
            a = a.replace("JSON_CALLBACK", b);
            var f = e.createElement("script"), m = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, m = function (a) {
                f.removeEventListener("load", m, !1), f.removeEventListener("error", m, !1), e.body.removeChild(f), f = null;
                var g = -1, u = "unknown";
                a && ("load" !== a.type || c.wasCalled(b) || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200), d && d(g, u)
            }, f.addEventListener("load", m, !1), f.addEventListener("error", m, !1), e.body.appendChild(f), m
        }

        return function (e, h, k, l, m, n, p, u, R, B) {
            function r() {
                fa && fa(), t && t.abort()
            }

            function J(b, c, e, f, g) {
                w(M) && d.cancel(M), fa = t = null, b(c, e, f, g), a.$$completeOutstandingRequest(A)
            }

            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" === Q(e)) var v = c.createCallback(h),
                fa = f(h, v, function (a, b) {
                    var d = 200 === a && c.getResponse(v);
                    J(l, a, d, "", b), c.removeCallback(v)
                }); else {
                var t = b(e, h);
                if (t.open(e, h, !0), q(m, function (a, b) {
                        w(a) && t.setRequestHeader(b, a)
                    }), t.onload = function () {
                        var a = t.statusText || "", b = "response" in t ? t.response : t.responseText,
                            c = 1223 === t.status ? 204 : t.status;
                        0 === c && (c = b ? 200 : "file" == Y(h).protocol ? 404 : 0), J(l, c, b, t.getAllResponseHeaders(), a)
                    }, e = function () {
                        J(l, -1, null, null, "")
                    }, t.onerror = e, t.onabort = e, q(R, function (a, b) {
                        t.addEventListener(b, a)
                    }), q(B, function (a, b) {
                        t.upload.addEventListener(b, a)
                    }), p && (t.withCredentials = !0), u) try {
                    t.responseType = u
                } catch (K) {
                    if ("json" !== u) throw K
                }
                t.send(y(k) ? null : k)
            }
            if (0 < n) var M = d(r, n); else n && z(n.then) && n.then(r)
        }
    }

    function kf() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(n, a).replace(p, b)
            }

            function h(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return e(), d(a)
                }, b, c)
            }

            function k(f, k, p, n) {
                function J(a) {
                    try {
                        var b = a;
                        a = p ? e.getTrusted(p, b) : e.valueOf(b);
                        var d;
                        if (n && !w(a)) d = a; else if (null == a) d = ""; else {
                            switch (typeof a) {
                                case"string":
                                    break;
                                case"number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = bb(a)
                            }
                            d = a
                        }
                        return d
                    } catch (g) {
                        c(Ka.interr(f, g))
                    }
                }

                if (!f.length || -1 === f.indexOf(a)) {
                    var v;
                    return k || (k = g(f), v = ha(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h), v
                }
                n = !!n;
                var q, t, K = 0, M = [], H = [];
                v = f.length;
                for (var E = [], I = []; K < v;) {
                    if (-1 == (q = f.indexOf(a, K)) || -1 == (t = f.indexOf(b, q + l))) {
                        K !== v && E.push(g(f.substring(K)));
                        break
                    }
                    K !== q && E.push(g(f.substring(K, q))), K = f.substring(q + l, t), M.push(K), H.push(d(K, J)), K = t + m, I.push(E.length), E.push("")
                }
                if (p && 1 < E.length && Ka.throwNoconcat(f), !k || M.length) {
                    var Da = function (a) {
                        for (var b = 0, c = M.length; b < c; b++) {
                            if (n && y(a[b])) return;
                            E[I[b]] = a[b]
                        }
                        return E.join("")
                    };
                    return S(function (a) {
                        var b = 0, d = M.length, e = Array(d);
                        try {
                            for (; b < d; b++) e[b] = H[b](a);
                            return Da(e)
                        } catch (g) {
                            c(Ka.interr(f, g))
                        }
                    }, {
                        exp: f, expressions: M, $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(H, function (d, e) {
                                var f = Da(d);
                                z(b) && b.call(this, f, d !== e ? c : f, a), c = f
                            })
                        }
                    })
                }
            }

            var l = a.length, m = b.length, n = new RegExp(a.replace(/./g, f), "g"),
                p = new RegExp(b.replace(/./g, f), "g");
            return k.startSymbol = function () {
                return a
            }, k.endSymbol = function () {
                return b
            }, k
        }]
    }

    function lf() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
            function f(f, k, l, m) {
                function n() {
                    p ? f.apply(null, u) : f(r)
                }

                var p = 4 < arguments.length, u = p ? va.call(arguments, 4) : [], R = b.setInterval,
                    q = b.clearInterval, r = 0, J = w(m) && !m, v = (J ? c : d).defer(), fa = v.promise;
                return l = w(l) ? l : 0, fa.$$intervalId = R(function () {
                    J ? e.defer(n) : a.$evalAsync(n), v.notify(r++), 0 < l && r >= l && (v.resolve(r), q(fa.$$intervalId), delete g[fa.$$intervalId]), J || a.$apply()
                }, k), g[fa.$$intervalId] = v, fa
            }

            var g = {};
            return f.cancel = function (a) {
                return !!(a && a.$$intervalId in g) && (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0)
            }, f
        }]
    }

    function fc(a) {
        a = a.split("/");
        for (var b = a.length; b--;) a[b] = qb(a[b]);
        return a.join("/")
    }

    function jd(a, b) {
        var d = Y(a);
        b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = Z(d.port) || hg[d.protocol] || null
    }

    function kd(a, b) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = Y(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname), b.$$search = Ac(c.search), b.$$hash = decodeURIComponent(c.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function ka(a, b) {
        if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length)
    }

    function Ja(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function jb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function gc(a, b, d) {
        this.$$html5 = !0, d = d || "", jd(a, this), this.$$parse = function (a) {
            var d = ka(b, a);
            if (!G(d)) throw Gb("ipthprfx", a, b);
            kd(d, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var a = Tb(this.$$search), d = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d, this.$$absUrl = b + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return w(f = ka(a, c)) ? (g = f, g = w(f = ka(d, f)) ? b + (ka("/", f) || f) : a + g) : w(f = ka(b, c)) ? g = b + f : b == c + "/" && (g = b), g && this.$$parse(g), !!g
        }
    }

    function hc(a, b, d) {
        jd(a, this), this.$$parse = function (c) {
            var f, e = ka(a, c) || ka(b, c);
            y(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", y(e) && (a = c, this.replace())) : (f = ka(d, e), y(f) && (f = e)), kd(f, this), c = this.$$path;
            var e = a, g = /^\/[A-Z]:(\/.*)/;
            0 === f.lastIndexOf(e, 0) && (f = f.replace(e, "")), g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c), this.$$path = c, this.$$compose()
        }, this.$$compose = function () {
            var b = Tb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e, this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        }, this.$$parseLinkUrl = function (b, d) {
            return Ja(a) == Ja(b) && (this.$$parse(b), !0)
        }
    }

    function ld(a, b, d) {
        this.$$html5 = !0, hc.apply(this, arguments), this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == Ja(c) ? f = c : (g = ka(b, c)) ? f = a + d + g : b === c + "/" && (f = b), f && this.$$parse(f), !!f
        }, this.$$compose = function () {
            var b = Tb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e, this.$$absUrl = a + d + this.$$url
        }
    }

    function Hb(a) {
        return function () {
            return this[a]
        }
    }

    function md(a, b) {
        return function (d) {
            return y(d) ? this[a] : (this[a] = b(d), this.$$compose(), this)
        }
    }

    function sf() {
        var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return w(b) ? (a = b, this) : a
        }, this.html5Mode = function (a) {
            return Ga(a) ? (b.enabled = a, this) : D(a) ? (Ga(a.enabled) && (b.enabled = a.enabled), Ga(a.requireBase) && (b.requireBase = a.requireBase), Ga(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
            function h(a, b, d) {
                var e = l.url(), f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (g) {
                    throw l.url(e), l.$$state = f, g
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }

            var l, m;
            m = c.baseHref();
            var p, n = c.url();
            if (b.enabled) {
                if (!m && b.requireBase) throw Gb("nobase");
                p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/"), m = e.history ? gc : ld
            } else p = Ja(n), m = hc;
            var u = p.substr(0, Ja(p).lastIndexOf("/") + 1);
            l = new m(p, u, "#" + a), l.$$parseLinkUrl(n, n), l.$$state = c.state();
            var R = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = F(a.target); "a" !== wa(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
                    D(h) && "[object SVGAnimatedString]" === h.toString() && (h = Y(h.animVal).href), R.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), jb(l.absUrl()) != jb(n) && c.url(l.absUrl(), !0);
            var q = !0;
            return c.onUrlChange(function (a, b) {
                y(ka(u, a)) ? g.location.href = a : (d.$evalAsync(function () {
                    var f, c = l.absUrl(), e = l.$$state;
                    a = jb(a), l.$$parse(a), l.$$state = b, f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented, l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (q = !1, k(c, e)))
                }), d.$$phase || d.$digest())
            }), d.$watch(function () {
                var a = jb(c.url()), b = jb(l.absUrl()), f = c.state(), g = l.$$replace,
                    m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                (q || m) && (q = !1, d.$evalAsync(function () {
                    var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
                })), l.$$replace = !1
            }), l
        }]
    }

    function tf() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return w(b) ? (a = b, this) : a
        }, this.$get = ["$window", function (d) {
            function c(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = d.console || {}, e = b[a] || b.log || A;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {
                }
                return a ? function () {
                    var a = [];
                    return q(arguments, function (b) {
                        a.push(c(b))
                    }), e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Sa(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw X("isecfld", b);
        return a
    }

    function ig(a) {
        return a + ""
    }

    function ra(a, b) {
        if (a) {
            if (a.constructor === a) throw X("isecfn", b);
            if (a.window === a) throw X("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw X("isecdom", b);
            if (a === Object) throw X("isecobj", b)
        }
        return a
    }

    function nd(a, b) {
        if (a) {
            if (a.constructor === a) throw X("isecfn", b);
            if (a === jg || a === kg || a === lg) throw X("isecff", b)
        }
    }

    function Ib(a, b) {
        if (a && (a === (0).constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw X("isecaf", b)
    }

    function mg(a, b) {
        return void 0 !== a ? a : b
    }

    function od(a, b) {
        return void 0 === a ? b : void 0 === b ? a : a + b
    }

    function V(a, b) {
        var d, c;
        switch (a.type) {
            case s.Program:
                d = !0, q(a.body, function (a) {
                    V(a.expression, b), d = d && a.expression.constant
                }), a.constant = d;
                break;
            case s.Literal:
                a.constant = !0, a.toWatch = [];
                break;
            case s.UnaryExpression:
                V(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
                break;
            case s.BinaryExpression:
                V(a.left, b), V(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case s.LogicalExpression:
                V(a.left, b), V(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case s.ConditionalExpression:
                V(a.test, b), V(a.alternate, b), V(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case s.Identifier:
                a.constant = !1, a.toWatch = [a];
                break;
            case s.MemberExpression:
                V(a.object, b), a.computed && V(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
                break;
            case s.CallExpression:
                d = !!a.filter && !b(a.callee.name).$stateful, c = [], q(a.arguments, function (a) {
                    V(a, b), d = d && a.constant, a.constant || c.push.apply(c, a.toWatch)
                }), a.constant = d, a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
                break;
            case s.AssignmentExpression:
                V(a.left, b), V(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
                break;
            case s.ArrayExpression:
                d = !0, c = [], q(a.elements, function (a) {
                    V(a, b), d = d && a.constant, a.constant || c.push.apply(c, a.toWatch)
                }), a.constant = d, a.toWatch = c;
                break;
            case s.ObjectExpression:
                d = !0, c = [], q(a.properties, function (a) {
                    V(a.value, b), d = d && a.value.constant && !a.computed, a.value.constant || c.push.apply(c, a.value.toWatch)
                }), a.constant = d, a.toWatch = c;
                break;
            case s.ThisExpression:
                a.constant = !1, a.toWatch = [];
                break;
            case s.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function pd(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0
        }
    }

    function qd(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression
    }

    function rd(a) {
        if (1 === a.body.length && qd(a.body[0].expression)) return {
            type: s.AssignmentExpression,
            left: a.body[0].expression,
            right: {type: s.NGValueParameter},
            operator: "="
        }
    }

    function sd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
    }

    function td(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function ud(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function Jb(a) {
        return "constructor" == a
    }

    function ic(a) {
        return z(a.valueOf) ? a.valueOf() : ng.call(a)
    }

    function uf() {
        var c, e, a = U(), b = U(), d = {true: !0, false: !1, null: null, undefined: void 0};
        this.addLiteral = function (a, b) {
            d[a] = b
        }, this.setIdentifierFns = function (a, b) {
            return c = a, e = b, this
        }, this.$get = ["$filter", function (f) {
            function g(c, d, e) {
                var g, k, H;
                switch (e = e || J, typeof c) {
                    case"string":
                        H = c = c.trim();
                        var E = e ? b : a;
                        if (!(g = E[H])) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0, c = c.substring(2)), g = e ? r : B;
                            var q = new jc(g);
                            g = new kc(q, f, g).parse(c), g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l), e && (g = h(g)), E[H] = g
                        }
                        return u(g, d);
                    case"function":
                        return u(c, d);
                    default:
                        return u(A, d)
                }
            }

            function h(a) {
                function b(c, d, e, f) {
                    var g = J;
                    J = !0;
                    try {
                        return a(c, d, e, f)
                    } finally {
                        J = g
                    }
                }

                if (!a) return a;
                b.$$watchDelegate = a.$$watchDelegate, b.assign = h(a.assign), b.constant = a.constant, b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c) a.inputs[c] = h(a.inputs[c]);
                return b.inputs = a.inputs, b
            }

            function k(a, b) {
                return null == a || null == b ? a === b : ("object" != typeof a || "object" != typeof(a = ic(a))) && (a === b || a !== a && b !== b)
            }

            function l(a, b, c, d, e) {
                var g, f = d.inputs;
                if (1 === f.length) {
                    var h = k, f = f[0];
                    return a.$watch(function (a) {
                        var b = f(a);
                        return k(b, h) || (g = d(a, void 0, void 0, [b]), h = b && ic(b)), g
                    }, b, c, e)
                }
                for (var l = [], m = [], p = 0, n = f.length; p < n; p++) l[p] = k, m[p] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, e = f.length; c < e; c++) {
                        var h = f[c](a);
                        (b || (b = !k(h, l[c]))) && (m[c] = h, l[c] = h && ic(h))
                    }
                    return b && (g = d(a, void 0, void 0, m)), g
                }, b, c, e)
            }

            function m(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a, z(b) && b.apply(this, arguments), w(a) && d.$$postDigest(function () {
                        w(f) && e()
                    })
                }, c)
            }

            function n(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return q(a, function (a) {
                        w(a) || (b = !1)
                    }), b
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a, z(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }

            function p(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return e(), d(a)
                }, b, c)
            }

            function u(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, d = !1, c = c !== n && c !== m ? function (c, e, f, g) {
                    return f = d && g ? g[0] : a(c, e, f, g), b(f, c, e)
                } : function (c, d, e, f) {
                    return e = a(c, d, e, f), c = b(e, c, d), w(e) ? c : e
                };
                return a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]), c
            }

            var R = Ba().noUnsafeEval, B = {
                csp: R,
                expensiveChecks: !1,
                literals: pa(d),
                isIdentifierStart: z(c) && c,
                isIdentifierContinue: z(e) && e
            }, r = {
                csp: R,
                expensiveChecks: !0,
                literals: pa(d),
                isIdentifierStart: z(c) && c,
                isIdentifierContinue: z(e) && e
            }, J = !1;
            return g.$$runningExpensiveChecks = function () {
                return J
            }, g
        }]
    }

    function wf() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return vd(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function xf() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return vd(function (b) {
                a.defer(b)
            }, b)
        }]
    }

    function vd(a, b) {
        function d() {
            this.$$state = {status: 0}
        }

        function c(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function e(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
                var a, d, e;
                e = c.pending, c.processScheduled = !1, c.pending = void 0;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0], a = e[f][c.status];
                    try {
                        z(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), b(h)
                    }
                }
            }))
        }

        function f() {
            this.promise = new d
        }

        var g = N("$q", TypeError), h = function () {
            var a = new f;
            return a.resolve = c(a, a.resolve), a.reject = c(a, a.reject), a.notify = c(a, a.notify), a
        };
        S(d.prototype, {
            then: function (a, b, c) {
                if (y(a) && y(b) && y(c)) return this;
                var d = new f;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), 0 < this.$$state.status && e(this.$$state), d.promise
            }, catch: function (a) {
                return this.then(null, a)
            }, finally: function (a, b) {
                return this.then(function (b) {
                    return l(b, !0, a)
                }, function (b) {
                    return l(b, !1, a)
                }, b)
            }
        }), S(f.prototype, {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (a) {
                function d(a) {
                    k || (k = !0, h.$$resolve(a))
                }

                function f(a) {
                    k || (k = !0, h.$$reject(a))
                }

                var g, h = this, k = !1;
                try {
                    (D(a) || z(a)) && (g = a && a.then), z(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state))
                } catch (l) {
                    f(l), b(l)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, e(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(z(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var k = function (a, b) {
            var c = new f;
            return b ? c.resolve(a) : c.reject(a), c.promise
        }, l = function (a, b, c) {
            var d = null;
            try {
                z(c) && (d = c())
            } catch (e) {
                return k(e, !1)
            }
            return d && z(d.then) ? d.then(function () {
                return k(a, b)
            }, function (a) {
                return k(a, !1)
            }) : k(a, b)
        }, m = function (a, b, c, d) {
            var e = new f;
            return e.resolve(a), e.promise.then(b, c, d)
        }, n = function (a) {
            if (!z(a)) throw g("norslvr", a);
            var b = new f;
            return a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            }), b.promise
        };
        return n.prototype = d.prototype, n.defer = h, n.reject = function (a) {
            var b = new f;
            return b.reject(a), b.promise
        }, n.when = m, n.resolve = m, n.all = function (a) {
            var b = new f, c = 0, d = L(a) ? [] : {};
            return q(a, function (a, e) {
                c++, m(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }, n.race = function (a) {
            var b = h();
            return q(a, function (a) {
                m(a).then(b.resolve, b.reject)
            }), b.promise
        }, n
    }

    function Gf() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!d, f = e ? function (a) {
                    var b = d(a);
                    return function () {
                        c(b)
                    }
                } : function (a) {
                    var c = b(a, 16.66, !1);
                    return function () {
                        b.cancel(c)
                    }
                };
            return f.supported = e, f
        }]
    }

    function vf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++pb, this.$$ChildScope = null
            }

            return b.prototype = a, b
        }

        var b = 10, d = N("$rootScope"), c = null, e = null;
        this.digestTtl = function (a) {
            return arguments.length && (b = a), b
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === Ea && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling)), a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++pb, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function n(a) {
                if (J.$$phase) throw d("inprog", J.$$phase);
                J.$$phase = a
            }

            function p(a, b) {
                do {
                    a.$$watchersCount += b
                } while (a = a.$parent)
            }

            function u(a, b, c) {
                do {
                    a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]
                } while (a = a.$parent)
            }

            function s() {
            }

            function B() {
                for (; t.length;) try {
                    t.shift()()
                } catch (a) {
                    f(a)
                }
                e = null
            }

            function r() {
                null === e && (e = h.defer(function () {
                    J.$apply(B)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (b, c) {
                    var d;
                    return c = c || this, b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", k), d
                }, $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
                    var h = this, k = h.$$watchers, l = {fn: b, last: s, get: f, exp: e || a, eq: !!d};
                    return c = null, z(b) || (l.fn = A), k || (k = h.$$watchers = []), k.unshift(l), p(this, 1), function () {
                        0 <= Za(k, l) && p(h, -1), c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1, k ? (k = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        return g.$evalAsync(function () {
                            l && b(e, e, g)
                        }), function () {
                            l = !1
                        }
                    }
                    return 1 === a.length ? this.$watch(a[0], function (a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (q(a, function (a, b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a, d[b] = f, h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(k)
                    }), function () {
                        for (; f.length;) f.shift()()
                    })
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, g, h;
                        if (!y(e)) {
                            if (D(e)) if (ta(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], h !== h && g !== g || h === g || (l++, f[b] = g); else {
                                f !== p && (f = p = {}, u = 0, l++), a = 0;
                                for (b in e) ua.call(e, b) && (a++, g = e[b], h = f[b], b in f ? h !== h && g !== g || h === g || (l++, f[b] = g) : (u++, f[b] = g, l++));
                                if (u > a) for (b in l++, f) ua.call(e, b) || (u--, delete f[b])
                            } else f !== e && (f = e, l++);
                            return l
                        }
                    }

                    c.$stateful = !0;
                    var e, f, h, d = this, k = 1 < b.length, l = 0, m = g(a, c), n = [], p = {}, r = !0, u = 0;
                    return this.$watch(m, function () {
                        if (r ? (r = !1, b(e, e, d)) : b(e, h, d), k) if (D(e)) if (ta(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++) h[a] = e[a]
                        } else for (a in h = {}, e) ua.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var a, g, k, l, m, p, u, r, t, A, C, q = b, y = [];
                    n("$digest"), h.$$checkUrlChange(), this === J && null !== e && (h.defer.cancel(e), B()), c = null;
                    do {
                        for (r = !1, t = this, p = 0; p < v.length; p++) {
                            try {
                                C = v[p], C.scope.$eval(C.expression, C.locals)
                            } catch (F) {
                                f(F)
                            }
                            c = null
                        }
                        v.length = 0;
                        a:do {
                            if (p = t.$$watchers) for (u = p.length; u--;) try {
                                if (a = p[u]) if (m = a.get, (g = m(t)) === (k = a.last) || (a.eq ? na(g, k) : "number" == typeof g && "number" == typeof k && isNaN(g) && isNaN(k))) {
                                    if (a === c) {
                                        r = !1;
                                        break a
                                    }
                                } else r = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, t), 5 > q && (A = 4 - q, y[A] || (y[A] = []), y[A].push({
                                    msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: g,
                                    oldVal: k
                                }))
                            } catch (G) {
                                f(G)
                            }
                            if (!(p = t.$$watchersCount && t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(p = t.$$nextSibling);) t = t.$parent
                        } while (t = p);
                        if ((r || v.length) && !q--) throw J.$$phase = null, d("infdig", b, y)
                    } while (r || v.length);
                    for (J.$$phase = null; K < w.length;) try {
                        w[K++]()
                    } catch (D) {
                        f(D)
                    }
                    w.length = K = 0
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === J && h.$$applicationDestroyed(), p(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) u(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = A, this.$on = this.$watch = this.$watchGroup = function () {
                            return A
                        }, this.$$listeners = {}, this.$$nextSibling = null, l(this)
                    }
                }, $eval: function (a, b) {
                    return g(a)(this, b)
                }, $evalAsync: function (a, b) {
                    J.$$phase || v.length || h.defer(function () {
                        v.length && J.$digest()
                    }), v.push({scope: this, expression: g(a), locals: b})
                }, $$postDigest: function (a) {
                    w.push(a)
                }, $apply: function (a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            J.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            J.$digest()
                        } catch (c) {
                            throw f(c), c
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && t.push(b), a = g(a), r()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do {
                        d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++
                    } while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, u(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var d, l, m, c = [], e = this, g = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = $a([h], arguments, 1);
                    do {
                        for (d = e.$$listeners[a] || c, h.currentScope = e, l = 0, m = d.length; l < m; l++) if (d[l]) try {
                            d[l].apply(null, k)
                        } catch (n) {
                            f(n)
                        } else d.splice(l, 1), l--, m--;
                        if (g) return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    return h.currentScope = null, h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return e;
                    for (var h, k, g = $a([e], arguments, 1); c = d;) {
                        for (e.currentScope = c, d = c.$$listeners[a] || [], h = 0, k = d.length; h < k; h++) if (d[h]) try {
                            d[h].apply(null, g)
                        } catch (l) {
                            f(l)
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    return e.currentScope = null, e
                }
            };
            var J = new m, v = J.$$asyncQueue = [], w = J.$$postDigestQueue = [], t = J.$$applyAsyncQueue = [], K = 0;
            return J
        }]
    }

    function ne() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return w(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function (a) {
            return w(a) ? (b = a, this) : b
        }, this.$get = function () {
            return function (d, c) {
                var f, e = c ? b : a;
                return f = Y(d).href, "" === f || f.match(e) ? d : "unsafe:" + f
            }
        }
    }

    function og(a) {
        if ("self" === a) return a;
        if (G(a)) {
            if (-1 < a.indexOf("***")) throw sa("iwcard", a);
            return a = wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (Wa(a)) return new RegExp("^" + a.source + "$");
        throw sa("imatcher")
    }

    function xd(a) {
        var b = [];
        return w(a) && q(a, function (a) {
            b.push(og(a))
        }), b
    }

    function zf() {
        this.SCE_CONTEXTS = la;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            return arguments.length && (a = xd(b)), a
        }, this.resourceUrlBlacklist = function (a) {
            return arguments.length && (b = xd(a)), b
        }, this.$get = ["$injector", function (d) {
            function c(a, b) {
                return "self" === a ? id(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }

            var f = function (a) {
                throw sa("unsafe")
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(), h = {};
            return h[la.HTML] = e(g), h[la.CSS] = e(g), h[la.URL] = e(g), h[la.JS] = e(g), h[la.RESOURCE_URL] = e(h[la.URL]), {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw sa("icontext", a, b);
                    if (null === b || y(b) || "" === b) return b;
                    if ("string" != typeof b) throw sa("itype", a);
                    return new c(b)
                }, getTrusted: function (d, e) {
                    if (null === e || y(e) || "" === e) return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (d === la.RESOURCE_URL) {
                        var n, p, g = Y(e.toString()), u = !1;
                        for (n = 0, p = a.length; n < p; n++) if (c(a[n], g)) {
                            u = !0;
                            break
                        }
                        if (u) for (n = 0, p = b.length; n < p; n++) if (c(b[n], g)) {
                            u = !1;
                            break
                        }
                        if (u) return e;
                        throw sa("insecurl", e.toString())
                    }
                    if (d === la.HTML) return f(e);
                    throw sa("unsafe")
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function yf() {
        var a = !0;
        this.enabled = function (b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > Ea) throw sa("iequirks");
            var c = ia(la);
            c.isEnabled = function () {
                return a
            }, c.trustAs = d.trustAs, c.getTrusted = d.getTrusted, c.valueOf = d.valueOf, a || (c.trustAs = c.getTrusted = function (a, b) {
                return b
            }, c.valueOf = Xa), c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            };
            var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
            return q(la, function (a, b) {
                var d = Q(b);
                c[db("parse_as_" + d)] = function (b) {
                    return e(a, b)
                }, c[db("get_trusted_" + d)] = function (b) {
                    return f(a, b)
                }, c[db("trust_as_" + d)] = function (b) {
                    return g(a, b)
                }
            }), c
        }]
    }

    function Af() {
        this.$get = ["$window", "$document", function (a, b) {
            var h, d = {}, c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
                e = Z((/android (\d+)/.exec(Q((a.navigator || {}).userAgent)) || [])[1]),
                f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, k = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = g.body && g.body.style, m = !1, n = !1;
            if (l) {
                for (var p in l) if (m = k.exec(p)) {
                    h = m[0], h = h[0].toUpperCase() + h.substr(1);
                    break
                }
                h || (h = "WebkitOpacity" in l && "webkit"), m = !!("transition" in l || h + "Transition" in l), n = !!("animation" in l || h + "Animation" in l), !e || m && n || (m = G(l.webkitTransition), n = G(l.webkitAnimation))
            }
            return {
                history: !(!c || 4 > e || f), hasEvent: function (a) {
                    if ("input" === a && 11 >= Ea) return !1;
                    if (y(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                }, csp: Ba(), vendorPrefix: h, transitions: m, animations: n, android: e
            }
        }]
    }

    function Cf() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
            function f(g, h) {
                f.totalPendingRequests++, G(g) && !y(b.get(g)) || (g = e.getTrustedResourceUrl(g));
                var k = d.defaults && d.defaults.transformResponse;
                return L(k) ? k = k.filter(function (a) {
                    return a !== dc
                }) : k === dc && (k = null), d.get(g, S({cache: b, transformResponse: k}, a)).finally(function () {
                    f.totalPendingRequests--
                }).then(function (a) {
                    return b.put(g, a.data), a.data
                }, function (a) {
                    if (!h) throw pg("tpload", g, a.status, a.statusText);
                    return c.reject(a)
                })
            }

            return f.totalPendingRequests = 0, f
        }]
    }

    function Df() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    return q(a, function (a) {
                        var c = ca.element(a).data("$binding");
                        c && q(c, function (c) {
                            d ? new RegExp("(^|\\s)" + wd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
                        })
                    }), g
                }, findModels: function (a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length) return k
                    }
                }, getLocation: function () {
                    return d.url()
                }, setLocation: function (b) {
                    b !== d.url() && (d.url(b), a.$digest())
                }, whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Ef() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
            function f(f, k, l) {
                z(f) || (l = k, k = f, f = A);
                var q, m = va.call(arguments, 3), n = w(l) && !l, p = (n ? c : d).defer(), u = p.promise;
                return q = b.defer(function () {
                    try {
                        p.resolve(f.apply(null, m))
                    } catch (b) {
                        p.reject(b), e(b)
                    } finally {
                        delete g[u.$$timeoutId]
                    }
                    n || a.$apply()
                }, k), u.$$timeoutId = q, g[q] = p, u
            }

            var g = {};
            return f.cancel = function (a) {
                return !!(a && a.$$timeoutId in g) && (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId))
            }, f
        }]
    }

    function Y(a) {
        return Ea && ($.setAttribute("href", a), a = $.href), $.setAttribute("href", a), {
            href: $.href,
            protocol: $.protocol ? $.protocol.replace(/:$/, "") : "",
            host: $.host,
            search: $.search ? $.search.replace(/^\?/, "") : "",
            hash: $.hash ? $.hash.replace(/^#/, "") : "",
            hostname: $.hostname,
            port: $.port,
            pathname: "/" === $.pathname.charAt(0) ? $.pathname : "/" + $.pathname
        }
    }

    function id(a) {
        return a = G(a) ? Y(a) : a, a.protocol === yd.protocol && a.host === yd.host
    }

    function Ff() {
        this.$get = ha(C)
    }

    function zd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var d = a[0] || {}, c = {}, e = "";
        return function () {
            var a, g, h, k, l;
            if ((a = d.cookie || "") !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], 0 < (k = g.indexOf("=")) && (l = b(g.substring(0, k)), y(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c
        }
    }

    function Jf() {
        this.$get = zd
    }

    function Mc(a) {
        function b(d, c) {
            if (D(d)) {
                var e = {};
                return q(d, function (a, c) {
                    e[c] = b(c, a)
                }), e
            }
            return a.factory(d + "Filter", c)
        }

        this.register = b, this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }], b("currency", Ad), b("date", Bd), b("filter", qg), b("json", rg), b("limitTo", sg), b("lowercase", tg), b("number", Cd), b("orderBy", Dd), b("uppercase", ug)
    }

    function qg() {
        return function (a, b, d, c) {
            if (!ta(a)) {
                if (null == a) return a;
                throw N("filter")("notarray", a)
            }
            c = c || "$";
            var e;
            switch (lc(b)) {
                case"function":
                    break;
                case"boolean":
                case"null":
                case"number":
                case"string":
                    e = !0;
                case"object":
                    b = vg(b, d, c, e);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function vg(a, b, d, c) {
        var e = D(a) && d in a;
        return !0 === b ? b = na : z(b) || (b = function (a, b) {
            return !y(a) && (null === a || null === b ? a === b : !(D(b) || D(a) && !vc(a)) && (a = Q("" + a), b = Q("" + b), -1 !== a.indexOf(b)))
        }), function (f) {
            return e && !D(f) ? La(f, a[d], b, d, !1) : La(f, a, b, d, c)
        }
    }

    function La(a, b, d, c, e, f) {
        var g = lc(a), h = lc(b);
        if ("string" === h && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c, e);
        if (L(a)) return a.some(function (a) {
            return La(a, b, d, c, e)
        });
        switch (g) {
            case"object":
                var k;
                if (e) {
                    for (k in a) if ("$" !== k.charAt(0) && La(a[k], b, d, c, !0)) return !0;
                    return !f && La(a, b, d, c, !1)
                }
                if ("object" === h) {
                    for (k in b) if (f = b[k], !z(f) && !y(f) && (g = k === c, !La(g ? a : a[k], f, d, c, g, g))) return !1;
                    return !0
                }
                return d(a, b);
            case"function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function lc(a) {
        return null === a ? "null" : typeof a
    }

    function Ad(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, e) {
            return y(c) && (c = b.CURRENCY_SYM), y(e) && (e = b.PATTERNS[1].maxFrac), null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }

    function Cd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function wg(a) {
        var d, c, e, f, g, b = 0;
        for (-1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, "")), 0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length), e = 0; a.charAt(e) == mc; e++) ;
        if (e == (g = a.length)) d = [0], c = 1; else {
            for (g--; a.charAt(g) == mc;) g--;
            for (c -= e, d = [], f = 0; e <= g; e++, f++) d[f] = +a.charAt(e)
        }
        return c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1), {d: d, e: b, i: c}
    }

    function xg(a, b, d, c) {
        var e = a.d, f = e.length - a.i;
        if (b = y(b) ? Math.min(Math.max(d, f), c) : +b, d = b + a.i, c = e[d], 0 < d) {
            e.splice(Math.max(a.i, d));
            for (var g = d; g < e.length; g++) e[g] = 0
        } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) e[g] = 0;
        if (5 <= c) if (0 > d - 1) {
            for (c = 0; c > d; c--) e.unshift(0), a.i++;
            e.unshift(1), a.i++
        } else e[d - 1]++;
        for (; f < Math.max(0, b); f++) e.push(0);
        (b = e.reduceRight(function (a, b, c, d) {
            return b += a, d[c] = b % 10, Math.floor(b / 10)
        }, 0)) && (e.unshift(b), a.i++)
    }

    function Ed(a, b, d, c, e) {
        if (!G(a) && !T(a) || isNaN(a)) return "";
        var f = !isFinite(a), g = !1, h = Math.abs(a) + "", k = "";
        if (f) k = "∞"; else {
            for (g = wg(h), xg(g, e, b.minFrac, b.maxFrac), k = g.d, h = g.i, e = g.e, f = [], g = k.reduce(function (a, b) {
                return a && !b
            }, !0); 0 > h;) k.unshift(0), h++;
            for (0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]), h = [], k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));
            k.length && h.unshift(k.join("")), k = h.join(d), f.length && (k += c + f.join("")), e && (k += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }

    function Kb(a, b, d, c) {
        var e = "";
        for ((0 > a || c && 0 >= a) && (c ? a = 1 - a : (a = -a, e = "-")), a = "" + a; a.length < b;) a = mc + a;
        return d && (a = a.substr(a.length - b)), e + a
    }

    function ba(a, b, d, c, e) {
        return d = d || 0, function (f) {
            return f = f["get" + a](), (0 < d || f > -d) && (f += d), 0 === f && -12 == d && (f = 12), Kb(f, b, c, e)
        }
    }

    function kb(a, b, d) {
        return function (c, e) {
            var f = c["get" + a]();
            return e[ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a)][f]
        }
    }

    function Hd(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Id(a) {
        return function (b) {
            var d = Hd(b.getFullYear());
            return b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d, b = 1 + Math.round(b / 6048e5), Kb(b, a)
        }
    }

    function nc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function Bd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11])), h.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3])), f = Z(b[4] || 0) - f, g = Z(b[5] || 0) - g, h = Z(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), k.call(a, f, g, h, b)
            }
            return a
        }

        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, f) {
            var k, l, g = "", h = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, G(c) && (c = yg.test(c) ? Z(c) : b(c)), T(c) && (c = new Date(c)), !da(c) || !isFinite(c.getTime())) return c;
            for (; d;) (l = zg.exec(d)) ? (h = $a(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            return f && (m = yc(f, m), c = Sb(c, f, !0)), q(h, function (b) {
                k = Ag[b], g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), g
        }
    }

    function rg() {
        return function (a, b) {
            return y(b) && (b = 2), bb(a, b)
        }
    }

    function sg() {
        return function (a, b, d) {
            return b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : Z(b), isNaN(b) ? a : (T(a) && (a = a.toString()), ta(a) ? (d = !d || isNaN(d) ? 0 : Z(d), d = 0 > d ? Math.max(0, a.length + d) : d, 0 <= b ? oc(a, d, d + b) : 0 === d ? oc(a, b, a.length) : oc(a, Math.max(0, d + b), d)) : a)
        }
    }

    function oc(a, b, d) {
        return G(a) ? a.slice(b, d) : va.call(a, b, d)
    }

    function Dd(a) {
        function b(b) {
            return b.map(function (b) {
                var c = 1, d = Xa;
                if (z(b)) d = b; else if (G(b) && ("+" != b.charAt(0) && "-" != b.charAt(0) || (c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (d = a(b), d.constant))) var e = d(),
                    d = function (a) {
                        return a[e]
                    };
                return {get: d, descending: c}
            })
        }

        function d(a) {
            switch (typeof a) {
                case"number":
                case"boolean":
                case"string":
                    return !0;
                default:
                    return !1
            }
        }

        function c(a, b) {
            var c = 0, d = a.type, k = b.type;
            if (d === k) {
                var k = a.value, l = b.value;
                "string" === d ? (k = k.toLowerCase(), l = l.toLowerCase()) : "object" === d && (D(k) && (k = a.index), D(l) && (l = b.index)), k !== l && (c = k < l ? -1 : 1)
            } else c = d < k ? -1 : 1;
            return c
        }

        return function (a, f, g, h) {
            if (null == a) return a;
            if (!ta(a)) throw N("orderBy")("notarray", a);
            L(f) || (f = [f]), 0 === f.length && (f = ["+"]);
            var k = b(f), l = g ? -1 : 1, m = z(h) ? h : c;
            return a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a,
                    tieBreaker: {value: b, type: "number", index: b},
                    predicateValues: k.map(function (c) {
                        var e = c.get(a);
                        return c = typeof e, null === e ? (c = "string", e = "null") : "object" === c && (z(e.valueOf) && (e = e.valueOf(), d(e)) || vc(e) && (e = e.toString(), d(e))), {
                            value: e,
                            type: c,
                            index: b
                        }
                    })
                }
            }), a.sort(function (a, b) {
                for (var c = 0, d = k.length; c < d; c++) {
                    var e = m(a.predicateValues[c], b.predicateValues[c]);
                    if (e) return e * k[c].descending * l
                }
                return m(a.tieBreaker, b.tieBreaker) * l
            }), a = a.map(function (a) {
                return a.value
            })
        }
    }

    function Ta(a) {
        return z(a) && (a = {link: a}), a.restrict = a.restrict || "AC", ha(a)
    }

    function Jd(a, b, d, c, e) {
        var f = this, g = [];
        f.$error = {}, f.$$success = {}, f.$pending = void 0, f.$name = e(b.name || b.ngForm || "")(d), f.$dirty = !1, f.$pristine = !0, f.$valid = !0, f.$invalid = !1, f.$submitted = !1, f.$$parentForm = Lb, f.$rollbackViewValue = function () {
            q(g, function (a) {
                a.$rollbackViewValue()
            })
        }, f.$commitViewValue = function () {
            q(g, function (a) {
                a.$commitViewValue()
            })
        }, f.$addControl = function (a) {
            Qa(a.$name, "input"), g.push(a), a.$name && (f[a.$name] = a), a.$$parentForm = f
        }, f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c], f[b] = a, a.$name = b
        }, f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name], q(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            }), q(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            }), q(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            }), Za(g, a), a.$$parentForm = Lb
        }, Kd({
            ctrl: this, $element: a, set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (Za(d, c), 0 === d.length && delete a[b])
            }, $animate: c
        }), f.$setDirty = function () {
            c.removeClass(a, Ua), c.addClass(a, Mb), f.$dirty = !0, f.$pristine = !1, f.$$parentForm.$setDirty()
        }, f.$setPristine = function () {
            c.setClass(a, Ua, Mb + " ng-submitted"), f.$dirty = !1, f.$pristine = !0, f.$submitted = !1, q(g, function (a) {
                a.$setPristine()
            })
        }, f.$setUntouched = function () {
            q(g, function (a) {
                a.$setUntouched()
            })
        }, f.$setSubmitted = function () {
            c.addClass(a, "ng-submitted"), f.$submitted = !0, f.$$parentForm.$setSubmitted()
        }
    }

    function pc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function lb(a, b, d, c, e, f) {
        var g = Q(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function () {
                h = !0
            }), b.on("compositionend", function () {
                h = !1, l()
            })
        }
        var k, l = function (a) {
            if (k && (f.defer.cancel(k), k = null), !h) {
                var e = b.val();
                a = a && a.type, "password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e)), (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input")) b.on("input", l); else {
            var m = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null, b && b.value === c || l(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", m)
        }
        b.on("change", l), Ld[g] && c.$$hasNativeValidators && g === d.type && b.on("keydown wheel mousedown", function (a) {
            if (!k) {
                var b = this.validity, c = b.badInput, d = b.typeMismatch;
                k = f.defer(function () {
                    k = null, b.badInput === c && b.typeMismatch === d || l(a)
                })
            }
        }), c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Nb(a, b) {
        return function (d, c) {
            var e, f;
            if (da(d)) return d;
            if (G(d)) {
                if ('"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1)), Bg.test(d)) return new Date(d);
                if (a.lastIndex = 0, e = a.exec(d)) return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, q(e, function (a, c) {
                    c < b.length && (f[b[c]] = +a)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1e3 * f.sss || 0)
            }
            return NaN
        }
    }

    function mb(a, b, d, c) {
        return function (e, f, g, h, k, l, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function p(a) {
                return w(a) && !da(a) ? d(a) || void 0 : a
            }

            Md(e, f, g, h), lb(e, f, g, h, k, l);
            var q, u = h && h.$options && h.$options.timezone;
            if (h.$$parserName = a, h.$parsers.push(function (a) {
                    return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, q), u && (a = Sb(a, u)), a) : void 0
                }), h.$formatters.push(function (a) {
                    if (a && !da(a)) throw nb("datefmt", a);
                    return n(a) ? ((q = a) && u && (q = Sb(q, u, !0)), m("date")(a, c, u)) : (q = null, "")
                }), w(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function (a) {
                    return !n(a) || y(s) || d(a) >= s
                }, g.$observe("min", function (a) {
                    s = p(a), h.$validate()
                })
            }
            if (w(g.max) || g.ngMax) {
                var r;
                h.$validators.max = function (a) {
                    return !n(a) || y(r) || d(a) <= r
                }, g.$observe("max", function (a) {
                    r = p(a), h.$validate()
                })
            }
        }
    }

    function Md(a, b, d, c) {
        (c.$$hasNativeValidators = D(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a
        })
    }

    function Nd(a, b, d, c, e) {
        if (w(c)) {
            if (a = a(c), !a.constant) throw nb("constexpr", d, c);
            return a(b)
        }
        return e
    }

    function qc(a, b) {
        return a = "ngClass" + a, ["$animate", function (d) {
            function c(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return L(a) ? (q(a, function (a) {
                    b = b.concat(e(a))
                }), b) : G(a) ? a.split(" ") : D(a) ? (q(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }

            return {
                restrict: "AC", link: function (f, g, h) {
                    function k(a) {
                        a = l(a, 1), h.$addClass(a)
                    }

                    function l(a, b) {
                        var c = g.data("$classCounts") || U(), d = [];
                        return q(a, function (a) {
                            (0 < b || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a))
                        }), g.data("$classCounts", c), d.join(" ")
                    }

                    function m(a, b) {
                        var e = c(b, a), f = c(a, b), e = l(e, 1), f = l(f, -1);
                        e && e.length && d.addClass(g, e), f && f.length && d.removeClass(g, f)
                    }

                    function n(a) {
                        if (!0 === b || (1 & f.$index) === b) {
                            var c = e(a || []);
                            if (p) {
                                if (!na(a, p)) {
                                    var d = e(p);
                                    m(d, c)
                                }
                            } else k(c)
                        }
                        p = L(a) ? a.map(function (a) {
                            return ia(a)
                        }) : ia(a)
                    }

                    var p;
                    f.$watch(h[a], n, !0), h.$observe("class", function (b) {
                        n(f.$eval(h[a]))
                    }), "ngClass" !== a && f.$watch("$index", function (c, d) {
                        var g = 1 & c;
                        if (g !== (1 & d)) {
                            var m = e(f.$eval(h[a]));
                            g === b ? k(m) : (g = l(m, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function Kd(a) {
        function b(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + Cc(a, "-") : "", b(ob + a, !0 === c), b(Od + a, !1 === c)
        }

        var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
        f[Od] = !(f[ob] = e.hasClass(ob)), c.$setValidity = function (a, e, f) {
            y(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0)), Ga(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f)), c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid)), e = c.$pending && c.$pending[a] ? void 0 : !c.$error[a] && (!!c.$$success[a] || null), d(a, e), c.$$parentForm.$setValidity(a, e, c)
        }
    }

    function Pd(a) {
        if (a) for (var b in a) if (a.hasOwnProperty(b)) return !1;
        return !0
    }

    var Ea, F, qa, Ub, ua = Object.prototype.hasOwnProperty, Q = function (a) {
            return G(a) ? a.toLowerCase() : a
        }, ub = function (a) {
            return G(a) ? a.toUpperCase() : a
        }, va = [].slice, bg = [].splice, Dg = [].push, ma = Object.prototype.toString, wc = Object.getPrototypeOf,
        xa = N("ng"), ca = C.angular || (C.angular = {}), pb = 0;
    Ea = C.document.documentMode, A.$inject = [], Xa.$inject = [];
    var L = Array.isArray,
        ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        W = function (a) {
            return G(a) ? a.trim() : a
        }, wd = function (a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, Ba = function () {
            if (!w(Ba.rules)) {
                var a = C.document.querySelector("[ng-csp]") || C.document.querySelector("[data-ng-csp]");
                if (a) {
                    var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                    Ba.rules = {
                        noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                        noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                    }
                } else {
                    a = Ba;
                    try {
                        new Function(""), b = !1
                    } catch (d) {
                        b = !0
                    }
                    a.rules = {noUnsafeEval: b, noInlineStyle: !1}
                }
            }
            return Ba.rules
        }, rb = function () {
            if (w(rb.name_)) return rb.name_;
            var a, b, c, e, d = Na.length;
            for (b = 0; b < d; ++b) if (c = Na[b], a = C.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
                e = a.getAttribute(c + "jq");
                break
            }
            return rb.name_ = e
        }, de = /:/g, Na = ["ng-", "data-ng-", "ng:", "x-ng-"], ie = /[A-Z]/g, Dc = !1, Ma = 3,
        me = {full: "1.5.8", major: 1, minor: 5, dot: 8, codeName: "arbitrary-fallbacks"};
    O.expando = "ng339";
    var fb = O.cache = {}, Pf = 1;
    O._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var Kf = /([\:\-\_]+(.))/g, Lf = /^moz([A-Z])/, yb = {mouseleave: "mouseout", mouseenter: "mouseover"},
        Wb = N("jqLite"), Of = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Vb = /<|&#?\w+;/, Mf = /<([\w:-]+)/,
        Nf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ja = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ja.optgroup = ja.option, ja.tbody = ja.tfoot = ja.colgroup = ja.caption = ja.thead, ja.th = ja.td;
    var Uf = C.Node.prototype.contains || function (a) {
        return !!(16 & this.compareDocumentPosition(a))
    }, Oa = O.prototype = {
        ready: function (a) {
            function b() {
                d || (d = !0, a())
            }

            var d = !1;
            "complete" === C.document.readyState ? C.setTimeout(b) : (this.on("DOMContentLoaded", b), O(C).on("load", b))
        }, toString: function () {
            var a = [];
            return q(this, function (b) {
                a.push("" + b)
            }), "[" + a.join(", ") + "]"
        }, eq: function (a) {
            return F(0 <= a ? this[a] : this[this.length + a])
        }, length: 0, push: Dg, sort: [].sort, splice: [].splice
    }, Eb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Eb[Q(a)] = a
    });
    var Vc = {};
    q("input select option textarea button form details".split(" "), function (a) {
        Vc[a] = !0
    });
    var bd = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    q({
        data: Yb, removeData: eb, hasData: function (a) {
            for (var b in fb[a.ng339]) return !0;
            return !1
        }, cleanData: function (a) {
            for (var b = 0, d = a.length; b < d; b++) eb(a[b])
        }
    }, function (a, b) {
        O[b] = a
    }), q({
        data: Yb, inheritedData: Cb, scope: function (a) {
            return F.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return F.data(a, "$isolateScope") || F.data(a, "$isolateScopeNoTemplate")
        }, controller: Sc, injector: function (a) {
            return Cb(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: zb, css: function (a, b, d) {
            if (b = db(b), !w(d)) return a.style[b];
            a.style[b] = d
        }, attr: function (a, b, d) {
            var c = a.nodeType;
            if (c !== Ma && 2 !== c && 8 !== c) if (c = Q(b), Eb[c]) {
                if (!w(d)) return a[b] || (a.attributes.getNamedItem(b) || A).specified ? c : void 0;
                d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c))
            } else if (w(d)) a.setAttribute(b, d); else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a
        }, prop: function (a, b, d) {
            if (!w(d)) return a[b];
            a[b] = d
        }, text: function () {
            function a(a, d) {
                if (y(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Ma ? a.textContent : ""
                }
                a.textContent = d
            }

            return a.$dv = "", a
        }(), val: function (a, b) {
            if (y(b)) {
                if (a.multiple && "select" === wa(a)) {
                    var d = [];
                    return q(a.options, function (a) {
                        a.selected && d.push(a.value || a.text)
                    }), 0 === d.length ? null : d
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            if (y(b)) return a.innerHTML;
            wb(a, !0), a.innerHTML = b
        }, empty: Tc
    }, function (a, b) {
        O.prototype[b] = function (b, c) {
            var e, f, g = this.length;
            if (a !== Tc && y(2 == a.length && a !== zb && a !== Sc ? b : c)) {
                if (D(b)) {
                    for (e = 0; e < g; e++) if (a === Yb) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (e = a.$dv, g = y(e) ? Math.min(g, 1) : g, f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) a(this[e], b, c);
            return this
        }
    }), q({
        removeData: eb, on: function (a, b, d, c) {
            if (w(c)) throw Wb("onargs");
            if (Nc(a)) {
                c = xb(a, !0);
                var e = c.events, f = c.handle;
                f || (f = c.handle = Rf(a, e)), c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function (b, c, g) {
                    var h = e[b];
                    h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1)), h.push(d)
                }; g--;) b = c[g], yb[b] ? (h(yb[b], Tf), h(b, void 0, !0)) : h(b)
            }
        }, off: Rc, one: function (a, b, d) {
            a = F(a), a.on(b, function e() {
                a.off(b, d), a.off(b, e)
            }), a.on(b, d)
        }, replaceWith: function (a, b) {
            var d, c = a.parentNode;
            wb(a), q(new O(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a), d = b
            })
        }, children: function (a) {
            var b = [];
            return q(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            }), b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new O(b);
                for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d])
            }
        }, prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new O(b), function (b) {
                    a.insertBefore(b, d)
                })
            }
        }, wrap: function (a, b) {
            Pc(a, F(b).eq(0).clone()[0])
        }, remove: Db, detach: function (a) {
            Db(a, !0)
        }, after: function (a, b) {
            var d = a, c = a.parentNode;
            b = new O(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling), d = g
            }
        }, addClass: Bb, removeClass: Ab, toggleClass: function (a, b, d) {
            b && q(b.split(" "), function (b) {
                var e = d;
                y(e) && (e = !zb(a, b)), (e ? Bb : Ab)(a, b)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: Xb, triggerHandler: function (a, b, d) {
            var c, e, f = b.type || b, g = xb(a);
            (g = (g = g && g.events) && g[f]) && (c = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: A, type: f, target: a
            }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
                c.isImmediatePropagationStopped() || b.apply(a, e)
            }))
        }
    }, function (a, b) {
        O.prototype[b] = function (b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++) y(f) ? (f = a(this[g], b, c, e), w(f) && (f = F(f))) : Qc(f, a(this[g], b, c, e));
            return w(f) ? f : this
        }, O.prototype.bind = O.prototype.on, O.prototype.unbind = O.prototype.off
    }), Ra.prototype = {
        put: function (a, b) {
            this[Ca(a, this.nextUid)] = b
        }, get: function (a) {
            return this[Ca(a, this.nextUid)]
        }, remove: function (a) {
            var b = this[a = Ca(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var If = [function () {
            this.$get = [function () {
                return Ra
            }]
        }], Wf = /^([^\(]+?)=>/, Xf = /^[^\(]*\(\s*([^\)]*)\)/m, Vf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Ha = N("$injector");
    cb.$$annotate = function (a, b, d) {
        var c;
        if ("function" == typeof a) {
            if (!(c = a.$inject)) {
                if (c = [], a.length) {
                    if (b) throw G(d) && d || (d = a.name || Yf(a)), Ha("strictdi", d);
                    b = Wc(a), q(b[1].split(/,/), function (a) {
                        a.replace(/^\s*(_?)(\S+?)\1\s*$/, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else L(a) ? (b = a.length - 1, Pa(a[b], "fn"), c = a.slice(0, b)) : Pa(a, "fn", !0);
        return c
    };
    var Rd = N("$animate"), $e = function () {
        this.$get = A
    }, af = function () {
        var a = new Ra, b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
            function e(a, b, c) {
                var d = !1;
                return b && (b = G(b) ? b.split(" ") : L(b) ? b : [], q(b, function (b) {
                    b && (d = !0, a[b] = c)
                })), d
            }

            function f() {
                q(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = Zf(b.attr("class")), e = "", f = "";
                        q(c, function (a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                        }), q(b, function (a) {
                            e && Bb(a, e), f && Ab(a, f)
                        }), a.remove(b)
                    }
                }), b.length = 0
            }

            return {
                enabled: A, on: A, off: A, pin: A, push: function (g, h, k, l) {
                    return l && l(), k = k || {}, k.from && g.css(k.from), k.to && g.css(k.to), (k.addClass || k.removeClass) && (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), (h || l) && (a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f))), g = new d, g.complete(), g
                }
            }
        }]
    }, Ye = ["$provide", function (a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function (d, c) {
            if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);
            var e = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] = e, a.factory(e, c)
        }, this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");
            return this.$$classNameFilter
        }, this.$get = ["$$animateQueue", function (a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a:{
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a
                            }
                        }
                        h = void 0
                    }
                    !h || h.parentNode || h.previousElementSibling || (d = null)
                }
                d ? d.after(a) : c.prepend(a)
            }

            return {
                on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                    a.end && a.end()
                }, enter: function (e, f, g, h) {
                    return f = f && F(f), g = g && F(g), f = f || g.parent(), b(e, f, g), a.push(e, "enter", Ia(h))
                }, move: function (e, f, g, h) {
                    return f = f && F(f), g = g && F(g), f = f || g.parent(), b(e, f, g), a.push(e, "move", Ia(h))
                }, leave: function (b, c) {
                    return a.push(b, "leave", Ia(c), function () {
                        b.remove()
                    })
                }, addClass: function (b, c, g) {
                    return g = Ia(g), g.addClass = gb(g.addclass, c), a.push(b, "addClass", g)
                }, removeClass: function (b, c, g) {
                    return g = Ia(g), g.removeClass = gb(g.removeClass, c), a.push(b, "removeClass", g)
                }, setClass: function (b, c, g, h) {
                    return h = Ia(h), h.addClass = gb(h.addClass, c), h.removeClass = gb(h.removeClass, g), a.push(b, "setClass", h)
                }, animate: function (b, c, g, h, k) {
                    return k = Ia(k), k.from = k.from ? S(k.from, c) : c, k.to = k.to ? S(k.to, g) : g, k.tempClasses = gb(k.tempClasses, h || "ng-inline-animate"), a.push(b, "animate", k)
                }
            }
        }]
    }], cf = function () {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                d.push(b), 1 < d.length || a(function () {
                    for (var a = 0; a < d.length; a++) d[a]();
                    d = []
                })
            }

            var d = [];
            return function () {
                var a = !1;
                return b(function () {
                    a = !0
                }), function (d) {
                    a ? d() : b(d)
                }
            }
        }]
    }, bf = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
            function f(a) {
                this.setHost(a);
                var b = d();
                this._doneCallbacks = [], this._tick = function (a) {
                    var d = c[0];
                    d && d.hidden ? e(a, 0, !1) : b(a)
                }, this._state = 0
            }

            return f.chain = function (a, b) {
                function c() {
                    d === a.length ? b(!0) : a[d](function (a) {
                        !1 === a ? b(!1) : (d++, c())
                    })
                }

                var d = 0;
                c()
            }, f.all = function (a, b) {
                function c(f) {
                    e = e && f, ++d === a.length && b(e)
                }

                var d = 0, e = !0;
                q(a, function (a) {
                    a.done(c)
                })
            }, f.prototype = {
                setHost: function (a) {
                    this.host = a || {}
                }, done: function (a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a)
                }, progress: A, getPromise: function () {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                !1 === b ? c() : a()
                            })
                        })
                    }
                    return this.promise
                }, then: function (a, b) {
                    return this.getPromise().then(a, b)
                }, catch: function (a) {
                    return this.getPromise().catch(a)
                }, finally: function (a) {
                    return this.getPromise().finally(a)
                }, pause: function () {
                    this.host.pause && this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end(), this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel(), this._resolve(!1)
                }, complete: function (a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._tick(function () {
                        b._resolve(a)
                    }))
                }, _resolve: function (a) {
                    2 !== this._state && (q(this._doneCallbacks, function (b) {
                        b(a)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            }, f
        }]
    }, Ze = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
            return function (b, e) {
                function f() {
                    return a(function () {
                        g.addClass && (b.addClass(g.addClass), g.addClass = null), g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null), g.to && (b.css(g.to), g.to = null), h || k.complete(), h = !0
                    }), k
                }

                var g = e || {};
                g.$$prepared || (g = pa(g)), g.cleanupStyles && (g.from = g.to = null), g.from && (b.css(g.from), g.from = null);
                var h, k = new d;
                return {start: f, end: f}
            }
        }]
    }, ga = N("$compile"), bc = new function () {
    };
    Fc.$inject = ["$provide", "$$sanitizeUriProvider"], Fb.prototype.isFirstChange = function () {
        return this.previousValue === bc
    };
    var Yc = /^((?:x|data)[\:\-_])/i, cg = N("$controller"), cd = /^(\S+)(\s+as\s+([\w$]+))?$/, jf = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    return b ? !b.nodeType && b instanceof F && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
                }
            }]
        }, dd = "application/json", ec = {"Content-Type": dd + ";charset=utf-8"}, eg = /^\[|^\{(?!\{)/,
        fg = {"[": /]$/, "{": /}$/}, dg = /^\)\]\}',?\n/, Gg = N("$http"), hd = function (a) {
            return function () {
                throw Gg("legacy", a)
            }
        }, Ka = ca.$interpolateMinErr = N("$interpolate");
    Ka.throwNoconcat = function (a) {
        throw Ka("noconcat", a)
    }, Ka.interr = function (a, b) {
        return Ka("interr", a, b.toString())
    };
    var rf = function () {
        this.$get = ["$window", function (a) {
            function b(a) {
                var b = function (a) {
                    b.data = a, b.called = !0
                };
                return b.id = a, b
            }

            var d = a.angular.callbacks, c = {};
            return {
                createCallback: function (a) {
                    a = "_" + (d.$$counter++).toString(36);
                    var f = "angular.callbacks." + a, g = b(a);
                    return c[f] = d[a] = g, f
                }, wasCalled: function (a) {
                    return c[a].called
                }, getResponse: function (a) {
                    return c[a].data
                }, removeCallback: function (a) {
                    delete d[c[a].id], delete c[a]
                }
            }
        }]
    }, Hg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, hg = {http: 80, https: 443, ftp: 21}, Gb = N("$location"), Ig = {
        $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Hb("$$absUrl"), url: function (a) {
            if (y(a)) return this.$$url;
            var b = Hg.exec(a);
            return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
        }, protocol: Hb("$$protocol"), host: Hb("$$host"), port: Hb("$$port"), path: md("$$path", function (a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (G(a) || T(a)) a = a.toString(), this.$$search = Ac(a); else {
                        if (!D(a)) throw Gb("isrcharg");
                        a = pa(a, {}), q(a, function (b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a
                    }
                    break;
                default:
                    y(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            return this.$$compose(), this
        }, hash: md("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            return this.$$replace = !0, this
        }
    };
    q([ld, hc, gc], function (a) {
        a.prototype = Object.create(Ig), a.prototype.state = function (b) {
            if (!arguments.length) return this.$$state;
            if (a !== gc || !this.$$html5) throw Gb("nostate");
            return this.$$state = y(b) ? null : b, this
        }
    });
    var X = N("$parse"), jg = Function.prototype.call, kg = Function.prototype.apply, lg = Function.prototype.bind,
        Ob = U();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Ob[a] = !0
    });
    var Jg = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, jc = function (a) {
        this.options = a
    };
    jc.prototype = {
        constructor: jc, lex: function (a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) if ('"' === (a = this.text.charAt(this.index)) || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Ob[b], e = Ob[d];
                Ob[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, b) {
            return -1 !== b.indexOf(a)
        }, peek: function (a) {
            return a = a || 1, this.index + a < this.text.length && this.text.charAt(this.index + a)
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" == typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a
        }, isIdentifierStart: function (a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
        }, isValidIdentifierStart: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isIdentifierContinue: function (a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
        }, isValidIdentifierContinue: function (a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a)
        }, codePointAt: function (a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
            var a = this.text.charAt(this.index), b = this.peek();
            if (!b) return a;
            var d = a.charCodeAt(0), c = b.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, d) {
            throw d = d || this.index, b = w(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d, X("lexerr", a, b, this.text)
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = Q(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var c = this.peek();
                    if ("e" == d && this.isExpOperator(c)) a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d; else {
                        if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b)) break;
                this.index += b.length
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index), c = c + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Jg[f] || f, e = !1; else if ("\\" === f) e = !0; else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: c,
                        constant: !0,
                        value: d
                    });
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var s = function (a, b) {
        this.lexer = a, this.options = b
    };
    s.Program = "Program", s.ExpressionStatement = "ExpressionStatement", s.AssignmentExpression = "AssignmentExpression", s.ConditionalExpression = "ConditionalExpression", s.LogicalExpression = "LogicalExpression", s.BinaryExpression = "BinaryExpression", s.UnaryExpression = "UnaryExpression", s.CallExpression = "CallExpression", s.MemberExpression = "MemberExpression", s.Identifier = "Identifier", s.Literal = "Literal", s.ArrayExpression = "ArrayExpression", s.Property = "Property", s.ObjectExpression = "ObjectExpression", s.ThisExpression = "ThisExpression", s.LocalsExpression = "LocalsExpression", s.NGValueParameter = "NGValueParameter", s.prototype = {
        ast: function (a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), a
        }, program: function () {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                type: s.Program,
                body: a
            }
        }, expressionStatement: function () {
            return {type: s.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: s.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a
        }, ternary: function () {
            var b, d, a = this.logicalOR();
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: s.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        }, logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: s.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        }, logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");) a = {
                type: s.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        }, equality: function () {
            for (var b, a = this.relational(); b = this.expect("==", "!=", "===", "!==");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        }, relational: function () {
            for (var b, a = this.additive(); b = this.expect("<", ">", "<=", ">=");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a
        }, additive: function () {
            for (var b, a = this.multiplicative(); b = this.expect("+", "-");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        }, multiplicative: function () {
            for (var b, a = this.unary(); b = this.expect("*", "/", "%");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        }, unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                type: s.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: s.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: s.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: s.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        }, filter: function (a) {
            a = [a];
            for (var b = {
                type: s.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");) a.push(this.expression());
            return b
        }, parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) do {
                a.push(this.filterChain())
            } while (this.expect(","));
            return a
        }, identifier: function () {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {type: s.Identifier, name: a.text}
        }, constant: function () {
            return {type: s.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), {type: s.ArrayExpression, elements: a}
        }, object: function () {
            var b, a = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                b = {
                    type: s.Property,
                    kind: "init"
                }, this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek()), a.push(b)
            } while (this.expect(","));
            return this.consume("}"), {type: s.ObjectExpression, properties: a}
        }, throwError: function (a, b) {
            throw X("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        }, consume: function (a) {
            if (0 === this.tokens.length) throw X("ueoe", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        }, peekToken: function () {
            if (0 === this.tokens.length) throw X("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        }, peekAhead: function (a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a
            }
            return !1
        }, expect: function (a, b, d, c) {
            return !!(a = this.peek(a, b, d, c)) && (this.tokens.shift(), a)
        }, selfReferential: {this: {type: s.ThisExpression}, $locals: {type: s.LocalsExpression}}
    }, td.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            }, V(c, d.$filter);
            var f, e = "";
            return this.stage = "assign", (f = rd(c)) && (this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l")), f = pd(c.body), d.stage = "inputs", q(f, function (a, b) {
                var c = "fn" + b;
                d.state[c] = {vars: [], body: [], own: {}}, d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
            }), this.state.computing = "fn", this.stage = "main", this.recurse(c), e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;", e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Sa, ra, nd, ig, Ib, mg, od, a), this.state = this.stage = void 0, e.literal = sd(c), e.constant = c.constant, e
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], b = this.state.inputs, d = this;
            return q(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"))
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        }, generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        }, filterPrefix: function () {
            var a = [], b = this;
            return q(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            }), a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, b, d, c, e, f) {
            var g, h, l, m, n, k = this;
            if (c = c || A, !f && w(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0)); else switch (a.type) {
                case s.Program:
                    q(a.body, function (b, c) {
                        k.recurse(b.expression, void 0, void 0, function (a) {
                            h = a
                        }), c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                    });
                    break;
                case s.Literal:
                    m = this.escape(a.value), this.assign(b, m), c(m);
                    break;
                case s.UnaryExpression:
                    this.recurse(a.argument, void 0, void 0, function (a) {
                        h = a
                    }), m = a.operator + "(" + this.ifDefined(h, 0) + ")", this.assign(b, m), c(m);
                    break;
                case s.BinaryExpression:
                    this.recurse(a.left, void 0, void 0, function (a) {
                        g = a
                    }), this.recurse(a.right, void 0, void 0, function (a) {
                        h = a
                    }), m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")", this.assign(b, m), c(m);
                    break;
                case s.LogicalExpression:
                    b = b || this.nextId(), k.recurse(a.left, b), k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b)), c(b);
                    break;
                case s.ConditionalExpression:
                    b = b || this.nextId(), k.recurse(a.test, b), k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b)), c(b);
                    break;
                case s.Identifier:
                    b = b || this.nextId(), d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Sa(a.name), k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if_("inputs" === k.stage || "s", function () {
                            e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}")), k.assign(b, k.nonComputedMember("s", a.name))
                        })
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name))), (k.state.expensiveChecks || Jb(a.name)) && k.addEnsureSafeObject(b), c(b);
                    break;
                case s.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), k.recurse(a.object, g, void 0, function () {
                        k.if_(k.notNull(g), function () {
                            e && 1 !== e && k.addEnsureSafeAssignContext(g), a.computed ? (h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h)) : (Sa(a.property.name), e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}")), m = k.nonComputedMember(g, a.property.name), (k.state.expensiveChecks || Jb(a.property.name)) && (m = k.ensureSafeObject(m)), k.assign(b, m), d && (d.computed = !1, d.name = a.property.name))
                        }, function () {
                            k.assign(b, "undefined")
                        }), c(b)
                    }, !!e);
                    break;
                case s.CallExpression:
                    b = b || this.nextId(), a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
                        var b = k.nextId();
                        k.recurse(a, b), l.push(b)
                    }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                        k.if_(k.notNull(h), function () {
                            k.addEnsureSafeFunction(h), q(a.arguments, function (a) {
                                k.recurse(a, k.nextId(), void 0, function (a) {
                                    l.push(k.ensureSafeObject(a))
                                })
                            }), g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")", m = k.ensureSafeObject(m), k.assign(b, m)
                        }, function () {
                            k.assign(b, "undefined")
                        }), c(b)
                    }));
                    break;
                case s.AssignmentExpression:
                    if (h = this.nextId(), g = {}, !qd(a.left)) throw X("lval");
                    this.recurse(a.left, void 0, g, function () {
                        k.if_(k.notNull(g.context), function () {
                            k.recurse(a.right, h), k.addEnsureSafeObject(k.member(g.context, g.name, g.computed)), k.addEnsureSafeAssignContext(g.context), m = k.member(g.context, g.name, g.computed) + a.operator + h, k.assign(b, m), c(b || m)
                        })
                    }, 1);
                    break;
                case s.ArrayExpression:
                    l = [], q(a.elements, function (a) {
                        k.recurse(a, k.nextId(), void 0, function (a) {
                            l.push(a)
                        })
                    }), m = "[" + l.join(",") + "]", this.assign(b, m), c(m);
                    break;
                case s.ObjectExpression:
                    l = [], n = !1, q(a.properties, function (a) {
                        a.computed && (n = !0)
                    }), n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
                        a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value, h = k.nextId(), k.recurse(a.value, h), k.assign(k.member(b, g, a.computed), h)
                    })) : (q(a.properties, function (b) {
                        k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
                            l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
                        })
                    }), m = "{" + l.join(",") + "}", this.assign(b, m)), c(b || m);
                    break;
                case s.ThisExpression:
                    this.assign(b, "s"), c("s");
                    break;
                case s.LocalsExpression:
                    this.assign(b, "l"), c("l");
                    break;
                case s.NGValueParameter:
                    this.assign(b, "v"), c("v")
            }
        }, getHasOwnProperty: function (a, b) {
            var d = a + "." + b, c = this.current().own;
            return c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), c[d]
        }, assign: function (a, b) {
            if (a) return this.current().body.push(a, "=", b, ";"), a
        }, filter: function (a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        }, ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        }, plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        }, return_: function (a) {
            this.current().body.push("return ", a, ";")
        }, if_: function (a, b, d) {
            if (!0 === a) b(); else {
                var c = this.current().body;
                c.push("if(", a, "){"), b(), c.push("}"), d && (c.push("else{"), d(), c.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a, b) {
            return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(/[^$_a-zA-Z0-9]/g, this.stringEscapeFn) + '"]'
        }, computedMember: function (a, b) {
            return a + "[" + b + "]"
        }, member: function (a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        }, addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        }, addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        }, addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        }, addEnsureSafeAssignContext: function (a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        }, ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        }, ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        }, ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        }, getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        }, ensureSafeAssignContext: function (a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        }, lazyRecurse: function (a, b, d, c, e, f) {
            var g = this;
            return function () {
                g.recurse(a, b, d, c, e, f)
            }
        }, lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a, b)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (G(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (T(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if (void 0 === a) return "undefined";
            throw X("esc")
        }, nextId: function (a, b) {
            var d = "v" + this.state.nextId++;
            return a || this.current().vars.push(d + (b ? "=" + b : "")), d
        }, current: function () {
            return this.state[this.state.computing]
        }
    }, ud.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, V(c, d.$filter);
            var e, f;
            (e = rd(c)) && (f = this.recurse(e)), e = pd(c.body);
            var g;
            e && (g = [], q(e, function (a, b) {
                var c = d.recurse(a);
                a.input = c, g.push(c), a.watchId = b
            }));
            var h = [];
            return q(c.body, function (a) {
                h.push(d.recurse(a.expression))
            }), e = 0 === c.body.length ? A : 1 === c.body.length ? h[0] : function (a, b) {
                var c;
                return q(h, function (d) {
                    c = d(a, b)
                }), c
            }, f && (e.assign = function (a, b, c) {
                return f(a, c, b)
            }), g && (e.inputs = g), e.literal = sd(c), e.constant = c.constant, e
        }, recurse: function (a, b, d) {
            var c, e, g, f = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case s.Literal:
                    return this.value(a.value, b);
                case s.UnaryExpression:
                    return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
                case s.BinaryExpression:
                case s.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case s.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case s.Identifier:
                    return Sa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Jb(a.name), b, d, f.expression);
                case s.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (Sa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
                case s.CallExpression:
                    return g = [], q(a.arguments, function (a) {
                        g.push(f.recurse(a))
                    }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
                        for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, f));
                        return a = e.apply(void 0, n, f), b ? {context: void 0, name: void 0, value: a} : a
                    } : function (a, c, d, m) {
                        var p, n = e(a, c, d, m);
                        if (null != n.value) {
                            ra(n.context, f.expression), nd(n.value, f.expression), p = [];
                            for (var q = 0; q < g.length; ++q) p.push(ra(g[q](a, c, d, m), f.expression));
                            p = ra(n.value.apply(n.context, p), f.expression)
                        }
                        return b ? {value: p} : p
                    };
                case s.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
                        var n = c(a, d, g, m);
                        return a = e(a, d, g, m), ra(n.value, f.expression), Ib(n.context), n.context[n.name] = a, b ? {value: a} : a
                    };
                case s.ArrayExpression:
                    return g = [], q(a.elements, function (a) {
                        g.push(f.recurse(a))
                    }), function (a, c, d, e) {
                        for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));
                        return b ? {value: f} : f
                    };
                case s.ObjectExpression:
                    return g = [], q(a.properties, function (a) {
                        a.computed ? g.push({
                            key: f.recurse(a.key),
                            computed: !0,
                            value: f.recurse(a.value)
                        }) : g.push({
                            key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                            computed: !1,
                            value: f.recurse(a.value)
                        })
                    }), function (a, c, d, e) {
                        for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
                        return b ? {value: f} : f
                    };
                case s.ThisExpression:
                    return function (a) {
                        return b ? {value: a} : a
                    };
                case s.LocalsExpression:
                    return function (a, c) {
                        return b ? {value: c} : c
                    };
                case s.NGValueParameter:
                    return function (a, c, d) {
                        return b ? {value: d} : d
                    }
            }
        }, "unary+": function (a, b) {
            return function (d, c, e, f) {
                return d = a(d, c, e, f), d = w(d) ? +d : 0, b ? {value: d} : d
            }
        }, "unary-": function (a, b) {
            return function (d, c, e, f) {
                return d = a(d, c, e, f), d = w(d) ? -d : 0, b ? {value: d} : d
            }
        }, "unary!": function (a, b) {
            return function (d, c, e, f) {
                return d = !a(d, c, e, f), b ? {value: d} : d
            }
        }, "binary+": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                return c = b(c, e, f, g), h = od(h, c), d ? {value: h} : h
            }
        }, "binary-": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                return c = b(c, e, f, g), h = (w(h) ? h : 0) - (w(c) ? c : 0), d ? {value: h} : h
            }
        }, "binary*": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) * b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary/": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) / b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary%": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) % b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary===": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) === b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary!==": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) !== b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary==": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) == b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary!=": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) != b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary<": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) < b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary>": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) > b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary<=": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) <= b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary>=": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) >= b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary&&": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) && b(c, e, f, g), d ? {value: c} : c
            }
        }, "binary||": function (a, b, d) {
            return function (c, e, f, g) {
                return c = a(c, e, f, g) || b(c, e, f, g), d ? {value: c} : c
            }
        }, "ternary?:": function (a, b, d, c) {
            return function (e, f, g, h) {
                return e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h), c ? {value: e} : e
            }
        }, value: function (a, b) {
            return function () {
                return b ? {context: void 0, name: void 0, value: a} : a
            }
        }, identifier: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                return f = g && a in g ? g : f, c && 1 !== c && f && !f[a] && (f[a] = {}), g = f ? f[a] : void 0, b && ra(g, e), d ? {
                    context: f,
                    name: a,
                    value: g
                } : g
            }
        }, computedMember: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                var m, n, l = a(f, g, h, k);
                return null != l && (m = b(f, g, h, k), m += "", Sa(m, e), c && 1 !== c && (Ib(l), l && !l[m] && (l[m] = {})), n = l[m], ra(n, e)), d ? {
                    context: l,
                    name: m,
                    value: n
                } : n
            }
        }, nonComputedMember: function (a, b, d, c, e, f) {
            return function (g, h, k, l) {
                return g = a(g, h, k, l), e && 1 !== e && (Ib(g), g && !g[b] && (g[b] = {})), h = null != g ? g[b] : void 0, (d || Jb(b)) && ra(h, f), c ? {
                    context: g,
                    name: b,
                    value: h
                } : h
            }
        }, inputs: function (a, b) {
            return function (d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    var kc = function (a, b, d) {
        this.lexer = a, this.$filter = b, this.options = d, this.ast = new s(a, d), this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b)
    };
    kc.prototype = {
        constructor: kc, parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var ng = Object.prototype.valueOf, sa = N("$sce"),
        la = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, pg = N("$compile"),
        $ = C.document.createElement("a"), yd = Y(C.location.href);
    zd.$inject = ["$document"], Mc.$inject = ["$provide"];
    var Gd = 22, Fd = ".", mc = "0";
    Ad.$inject = ["$locale"], Cd.$inject = ["$locale"];
    var Ag = {
        yyyy: ba("FullYear", 4, 0, !1, !0),
        yy: ba("FullYear", 2, 0, !0, !0),
        y: ba("FullYear", 1, 0, !1, !0),
        MMMM: kb("Month"),
        MMM: kb("Month", !0),
        MM: ba("Month", 2, 1),
        M: ba("Month", 1, 1),
        LLLL: kb("Month", !1, !0),
        dd: ba("Date", 2),
        d: ba("Date", 1),
        HH: ba("Hours", 2),
        H: ba("Hours", 1),
        hh: ba("Hours", 2, -12),
        h: ba("Hours", 1, -12),
        mm: ba("Minutes", 2),
        m: ba("Minutes", 1),
        ss: ba("Seconds", 2),
        s: ba("Seconds", 1),
        sss: ba("Milliseconds", 3),
        EEEE: kb("Day"),
        EEE: kb("Day", !0),
        a: function (a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
        },
        Z: function (a, b, d) {
            return a = -1 * d, a = (0 <= a ? "+" : "") + (Kb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Kb(Math.abs(a % 60), 2))
        },
        ww: Id(2),
        w: Id(1),
        G: nc,
        GG: nc,
        GGG: nc,
        GGGG: function (a, b) {
            return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
        }
    }, zg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, yg = /^\-?\d+$/;
    Bd.$inject = ["$locale"];
    var tg = ha(Q), ug = ha(ub);
    Dd.$inject = ["$parse"];
    var oe = ha({
        restrict: "E", compile: function (a, b) {
            if (!b.href && !b.xlinkHref) return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var e = "[object SVGAnimatedString]" === ma.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(e) || a.preventDefault()
                    })
                }
            }
        }
    }), vb = {};
    q(Eb, function (a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function (a) {
                e.$set(b, !!a)
            })
        }

        if ("multiple" != a) {
            var c = Aa("ng-" + b), e = d;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[c] && d(a, b, e)
            }), vb[c] = function () {
                return {restrict: "A", priority: 100, link: e}
            }
        }
    }), q(bd, function (a, b) {
        vb[b] = function () {
            return {
                priority: 100, link: function (a, c, e) {
                    if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(/^\/(.+)\/([a-z]*)$/))) return void e.$set("ngPattern", new RegExp(c[1], c[2]));
                    a.$watch(e[b], function (a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    }), q(["src", "srcset", "href"], function (a) {
        var b = Aa("ng-" + a);
        vb[b] = function () {
            return {
                priority: 99, link: function (d, c, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === ma.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function (b) {
                        b ? (e.$set(g, b), Ea && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Lb = {
        $addControl: A, $$renameControl: function (a, b) {
            a.$name = b
        }, $removeControl: A, $setValidity: A, $setDirty: A, $setPristine: A, $setSubmitted: A
    };
    Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Sd = function (a) {
            return ["$timeout", "$parse", function (b, d) {
                function c(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || A
                }

                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Jd,
                    compile: function (d, f) {
                        d.addClass(Ua).addClass(ob);
                        var g = f.name ? "name" : !(!a || !f.ngForm) && "ngForm";
                        return {
                            pre: function (a, d, e, f) {
                                var n = f[0];
                                if (!("action" in e)) {
                                    var p = function (b) {
                                        a.$apply(function () {
                                            n.$commitViewValue(), n.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", p, !1), d.on("$destroy", function () {
                                        b(function () {
                                            d[0].removeEventListener("submit", p, !1)
                                        }, 0, !1)
                                    })
                                }
                                (f[1] || n.$$parentForm).$addControl(n);
                                var q = g ? c(n.$name) : A;
                                g && (q(a, n), e.$observe(g, function (b) {
                                    n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), (q = c(n.$name))(a, n))
                                })), d.on("$destroy", function () {
                                    n.$$parentForm.$removeControl(n), q(a, void 0), S(n, Lb)
                                })
                            }
                        }
                    }
                }
            }]
        }, pe = Sd(), Ce = Sd(!0), Bg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Kg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Lg = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Mg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Td = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, rc = /^(\d{4,})-W(\d\d)$/,
        Vd = /^(\d{4,})-(\d\d)$/, Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Ld = U();
    q(["date", "datetime-local", "month", "time", "week"], function (a) {
        Ld[a] = !0
    });
    var Xd = {
        text: function (a, b, d, c, e, f) {
            lb(a, b, d, c, e, f), pc(c)
        },
        date: mb("date", Td, Nb(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": mb("datetimelocal", Ud, Nb(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: mb("time", Wd, Nb(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: mb("week", rc, function (a, b) {
            if (da(a)) return a;
            if (G(a)) {
                rc.lastIndex = 0;
                var d = rc.exec(a);
                if (d) {
                    var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Hd(c), e = 7 * (e - 1);
                    return b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds()), new Date(c, 0, k.getDate() + e, d, f, g, h)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: mb("month", Vd, Nb(Vd, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (a, b, d, c, e, f) {
            if (Md(a, b, d, c), lb(a, b, d, c, e, f), c.$$parserName = "number", c.$parsers.push(function (a) {
                    return c.$isEmpty(a) ? null : Mg.test(a) ? parseFloat(a) : void 0
                }), c.$formatters.push(function (a) {
                    if (!c.$isEmpty(a)) {
                        if (!T(a)) throw nb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                }), w(d.min) || d.ngMin) {
                var g;
                c.$validators.min = function (a) {
                    return c.$isEmpty(a) || y(g) || a >= g
                }, d.$observe("min", function (a) {
                    w(a) && !T(a) && (a = parseFloat(a)), g = T(a) && !isNaN(a) ? a : void 0, c.$validate()
                })
            }
            if (w(d.max) || d.ngMax) {
                var h;
                c.$validators.max = function (a) {
                    return c.$isEmpty(a) || y(h) || a <= h
                }, d.$observe("max", function (a) {
                    w(a) && !T(a) && (a = parseFloat(a)), h = T(a) && !isNaN(a) ? a : void 0, c.$validate()
                })
            }
        },
        url: function (a, b, d, c, e, f) {
            lb(a, b, d, c, e, f), pc(c), c.$$parserName = "url", c.$validators.url = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Kg.test(d)
            }
        },
        email: function (a, b, d, c, e, f) {
            lb(a, b, d, c, e, f), pc(c), c.$$parserName = "email", c.$validators.email = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Lg.test(d)
            }
        },
        radio: function (a, b, d, c) {
            y(d.name) && b.attr("name", ++pb), b.on("click", function (a) {
                b[0].checked && c.$setViewValue(d.value, a && a.type)
            }), c.$render = function () {
                b[0].checked = d.value == c.$viewValue
            }, d.$observe("value", c.$render)
        },
        checkbox: function (a, b, d, c, e, f, g, h) {
            var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0), l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function (a) {
                c.$setViewValue(b[0].checked, a && a.type)
            }), c.$render = function () {
                b[0].checked = c.$viewValue
            }, c.$isEmpty = function (a) {
                return !1 === a
            }, c.$formatters.push(function (a) {
                return na(a, k)
            }), c.$parsers.push(function (a) {
                return a ? k : l
            })
        },
        hidden: A,
        button: A,
        submit: A,
        reset: A,
        file: A
    }, Gc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (e, f, g, h) {
                    h[0] && (Xd[Q(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c)
                }
            }
        }
    }], Ng = /^(true|false|\d+)$/, Ue = function () {
        return {
            restrict: "A", priority: 100, compile: function (a, b) {
                return Ng.test(b.ngValue) ? function (a, b, e) {
                    e.$set("value", a.$eval(e.ngValue))
                } : function (a, b, e) {
                    a.$watch(e.ngValue, function (a) {
                        e.$set("value", a)
                    })
                }
            }
        }
    }, ue = ["$compile", function (a) {
        return {
            restrict: "AC", compile: function (b) {
                return a.$$addBindingClass(b), function (b, c, e) {
                    a.$$addBindingInfo(c, e.ngBind), c = c[0], b.$watch(e.ngBind, function (a) {
                        c.textContent = y(a) ? "" : a
                    })
                }
            }
        }
    }], we = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function (d) {
                return b.$$addBindingClass(d), function (c, d, f) {
                    c = a(d.attr(f.$attr.ngBindTemplate)), b.$$addBindingInfo(d, c.expressions), d = d[0], f.$observe("ngBindTemplate", function (a) {
                        d.textContent = y(a) ? "" : a
                    })
                }
            }
        }
    }], ve = ["$sce", "$parse", "$compile", function (a, b, d) {
        return {
            restrict: "A", compile: function (c, e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (b) {
                    return a.valueOf(b)
                });
                return d.$$addBindingClass(c), function (b, c, e) {
                    d.$$addBindingInfo(c, e.ngBindHtml), b.$watch(g, function () {
                        var d = f(b);
                        c.html(a.getTrustedHtml(d) || "")
                    })
                }
            }
        }
    }], Te = ha({
        restrict: "A", require: "ngModel", link: function (a, b, d, c) {
            c.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }
    }), xe = qc("", !0), ze = qc("Odd", 0), ye = qc("Even", 1), Ae = Ta({
        compile: function (a, b) {
            b.$set("ngCloak", void 0), a.removeClass("ng-cloak")
        }
    }), Be = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], Lc = {}, Og = {blur: !0, focus: !0};
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = Aa("ng-" + a);
        Lc[b] = ["$parse", "$rootScope", function (d, c) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = d(f[b], null, !0);
                    return function (b, d) {
                        d.on(a, function (d) {
                            var e = function () {
                                g(b, {$event: d})
                            };
                            Og[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Ee = ["$animate", "$compile", function (a, b) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (d, c, e, f, g) {
                    var h, k, l;
                    d.$watch(e.ngIf, function (d) {
                        d ? k || g(function (d, f) {
                            k = f, d[d.length++] = b.$$createComment("end ngIf", e.ngIf), h = {clone: d}, a.enter(d, c.parent(), c)
                        }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function () {
                            l = null
                        }), h = null))
                    })
                }
            }
        }], Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ca.noop,
                compile: function (c, e) {
                    var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                    return function (c, e, m, n, p) {
                        var s, B, r, q = 0, y = function () {
                            B && (B.remove(), B = null), s && (s.$destroy(), s = null), r && (d.leave(r).then(function () {
                                B = null
                            }), B = r, r = null)
                        };
                        c.$watch(f, function (f) {
                            var m = function () {
                                !w(h) || h && !c.$eval(h) || b()
                            }, t = ++q;
                            f ? (a(f, !0).then(function (a) {
                                if (!c.$$destroyed && t === q) {
                                    var b = c.$new();
                                    n.template = a, a = p(b, function (a) {
                                        y(), d.enter(a, null, e).then(m)
                                    }), s = b, r = a, s.$emit("$includeContentLoaded", f), c.$eval(g)
                                }
                            }, function () {
                                c.$$destroyed || t !== q || (y(), c.$emit("$includeContentError", f))
                            }), c.$emit("$includeContentRequested", f)) : (y(), n.template = null)
                        })
                    }
                }
            }
        }], We = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (b, d, c, e) {
                    ma.call(d[0]).match(/SVG/) ? (d.empty(), a(Oc(e.template, C.document).childNodes)(b, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b))
                }
            }
        }], Ge = Ta({
            priority: 450, compile: function () {
                return {
                    pre: function (a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }), Se = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, c) {
                    var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? W(e) : e;
                    c.$parsers.push(function (a) {
                        if (!y(a)) {
                            var b = [];
                            return a && q(a.split(g), function (a) {
                                a && b.push(f ? W(a) : a)
                            }), b
                        }
                    }), c.$formatters.push(function (a) {
                        if (L(a)) return a.join(e)
                    }), c.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, ob = "ng-valid", Od = "ng-invalid", Ua = "ng-pristine", Mb = "ng-dirty", Qd = "ng-pending", nb = N("ngModel"),
        Pg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = l(d.name || "", !1)(a), this.$$parentForm = Lb;
            var B, m = e(d.ngModel), n = m.assign, p = m, u = n, s = null, r = this;
            this.$$setOptions = function (a) {
                if ((r.$options = a) && a.getterSetter) {
                    var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
                    p = function (a) {
                        var c = m(a);
                        return z(c) && (c = b(a)), c
                    }, u = function (a, b) {
                        z(m(a)) ? f(a, {$$$p: b}) : n(a, b)
                    }
                } else if (!m.assign) throw nb("nonassign", d.ngModel, ya(c))
            }, this.$render = A, this.$isEmpty = function (a) {
                return y(a) || "" === a || null === a || a !== a
            }, this.$$updateEmptyClasses = function (a) {
                r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"))
            };
            var J = 0;
            Kd({
                ctrl: this, $element: c, set: function (a, b) {
                    a[b] = !0
                }, unset: function (a, b) {
                    delete a[b]
                }, $animate: f
            }), this.$setPristine = function () {
                r.$dirty = !1, r.$pristine = !0, f.removeClass(c, Mb), f.addClass(c, Ua)
            }, this.$setDirty = function () {
                r.$dirty = !0, r.$pristine = !1, f.removeClass(c, Ua), f.addClass(c, Mb), r.$$parentForm.$setDirty()
            }, this.$setUntouched = function () {
                r.$touched = !1, r.$untouched = !0, f.setClass(c, "ng-untouched", "ng-touched")
            }, this.$setTouched = function () {
                r.$touched = !0, r.$untouched = !1, f.setClass(c, "ng-touched", "ng-untouched")
            }, this.$rollbackViewValue = function () {
                g.cancel(s), r.$viewValue = r.$$lastCommittedViewValue, r.$render()
            }, this.$validate = function () {
                if (!T(r.$modelValue) || !isNaN(r.$modelValue)) {
                    var a = r.$$rawModelValue, b = r.$valid, c = r.$modelValue,
                        d = r.$options && r.$options.allowInvalid;
                    r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
                        d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (a, b, c) {
                function f(a, b) {
                    h === J && r.$setValidity(a, b)
                }

                function g(a) {
                    h === J && c(a)
                }

                J++;
                var h = J;
                !function () {
                    var a = r.$$parserName || "parse"
                    ;
                    return y(B) ? (f(a, null), !0) : (B || (q(r.$validators, function (a, b) {
                        f(b, null)
                    }), q(r.$asyncValidators, function (a, b) {
                        f(b, null)
                    })), f(a, B), B)
                }() ? g(!1) : function () {
                    var c = !0;
                    return q(r.$validators, function (d, e) {
                        var g = d(a, b);
                        c = c && g, f(e, g)
                    }), !!c || (q(r.$asyncValidators, function (a, b) {
                        f(b, null)
                    }), !1)
                }() ? function () {
                    var c = [], d = !0;
                    q(r.$asyncValidators, function (e, g) {
                        var h = e(a, b);
                        if (!h || !z(h.then)) throw nb("nopromise", h);
                        f(g, void 0), c.push(h.then(function () {
                            f(g, !0)
                        }, function () {
                            d = !1, f(g, !1)
                        }))
                    }), c.length ? k.all(c).then(function () {
                        g(d)
                    }, A) : g(!0)
                }() : g(!1)
            }, this.$commitViewValue = function () {
                var a = r.$viewValue;
                g.cancel(s), (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) && (r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                var b = r.$$lastCommittedViewValue;
                if (B = !y(b) || void 0) for (var c = 0; c < r.$parsers.length; c++) if (b = r.$parsers[c](b), y(b)) {
                    B = !1;
                    break
                }
                T(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));
                var d = r.$modelValue, e = r.$options && r.$options.allowInvalid;
                r.$$rawModelValue = b, e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope()), r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
                    e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope())
                })
            }, this.$$writeModelToScope = function () {
                u(a, r.$modelValue), q(r.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function (a, b) {
                r.$viewValue = a, r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function (b) {
                var c = 0, d = r.$options;
                d && w(d.debounce) && (d = d.debounce, T(d) ? c = d : T(d[b]) ? c = d[b] : T(d.default) && (c = d.default)), g.cancel(s), c ? s = g(function () {
                    r.$commitViewValue()
                }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
                    r.$commitViewValue()
                })
            }, a.$watch(function () {
                var b = p(a);
                if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
                    r.$modelValue = r.$$rawModelValue = b, B = void 0;
                    for (var c = r.$formatters, d = c.length, e = b; d--;) e = c[d](e);
                    r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, A))
                }
                return b
            })
        }], Re = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Pg,
                priority: 1,
                compile: function (b) {
                    return b.addClass(Ua).addClass("ng-untouched").addClass(ob), {
                        pre: function (a, b, e, f) {
                            var g = f[0];
                            b = f[1] || g.$$parentForm, g.$$setOptions(f[2] && f[2].$options), b.$addControl(g), e.$observe("name", function (a) {
                                g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                            }), a.$on("$destroy", function () {
                                g.$$parentForm.$removeControl(g)
                            })
                        }, post: function (b, c, e, f) {
                            var g = f[0];
                            g.$options && g.$options.updateOn && c.on(g.$options.updateOn, function (a) {
                                g.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function () {
                                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                            })
                        }
                    }
                }
            }
        }], Ve = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
                    var d = this;
                    this.$options = pa(a.$eval(b.ngModelOptions)), w(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(/(\s+|^)default(\s+|$)/, function () {
                        return d.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, He = Ta({terminal: !0, priority: 1e3}), Rg = N("ngOptions"),
        Sg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Pe = ["$compile", "$document", "$parse", function (a, b, d) {
            function c(a, b, c) {
                function e(a, b, c, d, f) {
                    this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = f
                }

                function f(a) {
                    var b;
                    if (!q && ta(a)) b = a; else {
                        b = [];
                        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }

                var n = a.match(Sg);
                if (!n) throw Rg("iexp", a, ya(b));
                var p = n[5] || n[7], q = n[6];
                a = / as /.test(n[0]) && n[1];
                var s = n[9];
                b = d(n[2] ? n[1] : p);
                var w = a && d(a) || b, r = s && d(s), y = s ? function (a, b) {
                        return r(c, b)
                    } : function (a) {
                        return Ca(a)
                    }, v = function (a, b) {
                        return y(a, E(a, b))
                    }, A = d(n[2] || n[1]), t = d(n[3] || ""), K = d(n[4] || ""), z = d(n[8]), H = {},
                    E = q ? function (a, b) {
                        return H[q] = b, H[p] = a, H
                    } : function (a) {
                        return H[p] = a, H
                    };
                return {
                    trackBy: s, getTrackByValue: v, getWatchables: d(z, function (a) {
                        var b = [];
                        a = a || [];
                        for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                            var h = a === d ? g : d[g], l = a[h], h = E(l, h), l = y(l, h);
                            b.push(l), (n[2] || n[1]) && (l = A(c, h), b.push(l)), n[4] && (h = K(c, h), b.push(h))
                        }
                        return b
                    }), getOptions: function () {
                        for (var a = [], b = {}, d = z(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                            var p = d === g ? n : g[n], q = E(d[p], p), r = w(c, q), p = y(r, q), u = A(c, q),
                                H = t(c, q), q = K(c, q), r = new e(p, r, u, H, q);
                            a.push(r), b[p] = r
                        }
                        return {
                            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
                                return b[v(a)]
                            }, getViewValueFromOption: function (a) {
                                return s ? ca.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            var e = C.document.createElement("option"), f = C.document.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = A
                    }, post: function (d, h, k, l) {
                        function m(a, b) {
                            a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
                        }

                        function n() {
                            var a = t && p.readValue();
                            if (t) for (var b = t.items.length - 1; 0 <= b; b--) {
                                var c = t.items[b];
                                Db(w(c.group) ? c.element.parentNode : c.element)
                            }
                            t = K.getOptions();
                            var d = {};
                            v && h.prepend(B), t.items.forEach(function (a) {
                                var b;
                                if (w(a.group)) {
                                    b = d[a.group], b || (b = f.cloneNode(!1), C.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);
                                    var c = e.cloneNode(!1)
                                } else b = C, c = e.cloneNode(!1);
                                b.appendChild(c), m(a, c)
                            }), h[0].appendChild(C), s.$render(), s.$isEmpty(a) || (b = p.readValue(), (K.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()))
                        }

                        var B, p = l[0], s = l[1], y = k.multiple;
                        l = 0;
                        for (var r = h.children(), A = r.length; l < A; l++) if ("" === r[l].value) {
                            B = r.eq(l);
                            break
                        }
                        var v = !!B, z = F(e.cloneNode(!1));
                        z.val("?");
                        var t, K = c(k.ngOptions, h, d), C = b[0].createDocumentFragment();
                        y ? (s.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }, p.writeValue = function (a) {
                            t.items.forEach(function (a) {
                                a.element.selected = !1
                            }), a && a.forEach(function (a) {
                                (a = t.getOptionFromViewValue(a)) && (a.element.selected = !0)
                            })
                        }, p.readValue = function () {
                            var a = h.val() || [], b = [];
                            return q(a, function (a) {
                                (a = t.selectValueMap[a]) && !a.disabled && b.push(t.getViewValueFromOption(a))
                            }), b
                        }, K.trackBy && d.$watchCollection(function () {
                            if (L(s.$viewValue)) return s.$viewValue.map(function (a) {
                                return K.getTrackByValue(a)
                            })
                        }, function () {
                            s.$render()
                        })) : (p.writeValue = function (a) {
                            var b = t.getOptionFromViewValue(a);
                            b ? (h[0].value !== b.selectValue && (z.remove(), v || B.remove(), h[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (z.remove(), v || h.prepend(B), h.val(""), B.prop("selected", !0), B.attr("selected", !0)) : (v || B.remove(), h.prepend(z), h.val("?"), z.prop("selected", !0), z.attr("selected", !0))
                        }, p.readValue = function () {
                            var a = t.selectValueMap[h.val()];
                            return a && !a.disabled ? (v || B.remove(), z.remove(), t.getViewValueFromOption(a)) : null
                        }, K.trackBy && d.$watch(function () {
                            return K.getTrackByValue(s.$viewValue)
                        }, function () {
                            s.$render()
                        })), v ? (B.remove(), a(B)(d), B.removeClass("ng-scope")) : B = F(e.cloneNode(!1)), h.empty(), n(), d.$watchCollection(K.getWatchables, n)
                    }
                }
            }
        }], Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
            var e = /^when(Minus)?(.+)$/;
            return {
                link: function (f, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }

                    var v, l = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, p = f.$eval(m) || {},
                        s = {}, w = b.startSymbol(), B = b.endSymbol(), r = w + l + "-" + n + B, z = ca.noop;
                    q(h, function (a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + Q(c[2]), p[c] = g.attr(h.$attr[b]))
                    }), q(p, function (a, d) {
                        s[d] = b(a.replace(/{}/g, r))
                    }), f.$watch(l, function (b) {
                        var c = parseFloat(b), e = isNaN(c);
                        e || c in p || (c = a.pluralCat(c - n)), c === v || e && T(v) && isNaN(v) || (z(), e = s[c], y(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), z = A, k()) : z = f.$watch(e, k), v = c)
                    })
                }
            }
        }], Je = ["$parse", "$animate", "$compile", function (a, b, d) {
            var c = N("ngRepeat"), e = function (a, b, c, d, e, m, n) {
                a[c] = d, e && (a[e] = m), a.$index = b, a.$first = 0 === b, a.$last = b === n - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 == (1 & b))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var h = g.ngRepeat, k = d.$$createComment("end ngRepeat", h),
                        l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l) throw c("iexp", h);
                    var m = l[1], n = l[2], p = l[3], s = l[4],
                        l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!l) throw c("iidexp", m);
                    var w = l[3] || l[1], y = l[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
                    var r, z, v, A, t = {$id: Ca};
                    return s ? r = a(s) : (v = function (a, b) {
                        return Ca(b)
                    }, A = function (a) {
                        return a
                    }), function (a, d, f, g, l) {
                        r && (z = function (b, c, d) {
                            return y && (t[y] = b), t[w] = c, t.$index = d, r(a, t)
                        });
                        var m = U();
                        a.$watchCollection(n, function (f) {
                            var g, n, s, t, C, F, E, G, D, H, r = d[0], u = U();
                            if (p && (a[p] = f), ta(f)) G = f, n = z || v; else for (H in n = z || A, G = [], f) ua.call(f, H) && "$" !== H.charAt(0) && G.push(H);
                            for (t = G.length, H = Array(t), g = 0; g < t; g++) if (C = f === G ? g : G[g], F = f[C], E = n(C, F, g), m[E]) D = m[E], delete m[E], u[E] = D, H[g] = D; else {
                                if (u[E]) throw q(H, function (a) {
                                    a && a.scope && (m[a.id] = a)
                                }), c("dupes", h, E, F);
                                H[g] = {id: E, scope: void 0, clone: void 0}, u[E] = !0
                            }
                            for (s in m) {
                                if (D = m[s], E = tb(D.clone), b.leave(E), E[0].parentNode) for (g = 0, n = E.length; g < n; g++) E[g].$$NG_REMOVED = !0;
                                D.scope.$destroy()
                            }
                            for (g = 0; g < t; g++) if (C = f === G ? g : G[g], F = f[C], D = H[g], D.scope) {
                                s = r;
                                do {
                                    s = s.nextSibling
                                } while (s && s.$$NG_REMOVED);
                                D.clone[0] != s && b.move(tb(D.clone), null, r), r = D.clone[D.clone.length - 1], e(D.scope, g, w, F, y, C, t)
                            } else l(function (a, c) {
                                D.scope = c;
                                var d = k.cloneNode(!1);
                                a[a.length++] = d, b.enter(a, null, r), r = d, D.clone = a, u[D.id] = D, e(D.scope, g, w, F, y, C, t)
                            });
                            m = u
                        })
                    }
                }
            }
        }], Ke = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], De = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], Le = Ta(function (a, b, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && q(d, function (a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }), Me = ["$animate", "$compile", function (a, b) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (d, c, e, f) {
                    var g = [], h = [], k = [], l = [], m = function (a, b) {
                        return function () {
                            a.splice(b, 1)
                        }
                    };
                    d.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        for (d = 0, e = k.length; d < e; ++d) a.cancel(k[d]);
                        for (d = k.length = 0, e = l.length; d < e; ++d) {
                            var s = tb(h[d].clone);
                            l[d].$destroy(), (k[d] = a.leave(s)).then(m(k, d))
                        }
                        h.length = 0, l.length = 0, (g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen"), h.push({clone: d}), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], Ne = Ta({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [], c.cases["!" + d.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }), Oe = Ta({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [], c.cases["?"].push({transclude: e, element: b})
            }
        }), Tg = N("ngTransclude"), Qe = ["$compile", function (a) {
            return {
                restrict: "EAC", terminal: !0, compile: function (b) {
                    var d = a(b.contents());
                    return b.empty(), function (a, b, f, g, h) {
                        function k() {
                            d(a, function (a) {
                                b.append(a)
                            })
                        }

                        if (!h) throw Tg("orphan", ya(b));
                        f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = ""), f = f.ngTransclude || f.ngTranscludeSlot, h(function (a, c) {
                            a.length ? b.append(a) : (k(), c.$destroy())
                        }, null, f), f && !h.isSlotFilled(f) && k()
                    }
                }
            }
        }], qe = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, d) {
                    "text/ng-template" == d.type && a.put(d.id, b[0].text)
                }
            }
        }], Ug = {$setViewValue: A, $render: A}, Vg = ["$element", "$scope", function (a, b) {
            var d = this, c = new Ra;
            d.ngModelCtrl = Ug, d.unknownOption = F(C.document.createElement("option")), d.renderUnknownOption = function (b) {
                b = "? " + Ca(b) + " ?", d.unknownOption.val(b), a.prepend(d.unknownOption), a.val(b)
            }, b.$on("$destroy", function () {
                d.renderUnknownOption = A
            }), d.removeUnknownOption = function () {
                d.unknownOption.parent() && d.unknownOption.remove()
            }, d.readValue = function () {
                return d.removeUnknownOption(), a.val()
            }, d.writeValue = function (b) {
                d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b)
            }, d.addOption = function (a, b) {
                if (8 !== b[0].nodeType) {
                    Qa(a, '"option value"'), "" === a && (d.emptyOption = b);
                    var g = c.get(a) || 0;
                    c.put(a, g + 1), d.ngModelCtrl.$render(), b[0].hasAttribute("selected") && (b[0].selected = !0)
                }
            }, d.removeOption = function (a) {
                var b = c.get(a);
                b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1))
            }, d.hasOption = function (a) {
                return !!c.get(a)
            }, d.registerOption = function (a, b, c, h, k) {
                if (h) {
                    var l;
                    c.$observe("value", function (a) {
                        w(l) && d.removeOption(l), l = a, d.addOption(a, b)
                    })
                } else k ? a.$watch(k, function (a, e) {
                    c.$set("value", a), e !== a && d.removeOption(e), d.addOption(a, b)
                }) : d.addOption(c.value, b);
                b.on("$destroy", function () {
                    d.removeOption(c.value), d.ngModelCtrl.$render()
                })
            }
        }], re = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Vg,
                priority: 1,
                link: {
                    pre: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            if (f.ngModelCtrl = e, b.on("change", function () {
                                    a.$apply(function () {
                                        e.$setViewValue(f.readValue())
                                    })
                                }), d.multiple) {
                                f.readValue = function () {
                                    var a = [];
                                    return q(b.find("option"), function (b) {
                                        b.selected && a.push(b.value)
                                    }), a
                                }, f.writeValue = function (a) {
                                    var c = new Ra(a);
                                    q(b.find("option"), function (a) {
                                        a.selected = w(c.get(a.value))
                                    })
                                };
                                var g, h = NaN;
                                a.$watch(function () {
                                    h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render()), h = e.$viewValue
                                }), e.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    }, post: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            e.$render = function () {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        }, te = ["$interpolate", function (a) {
            return {
                restrict: "E", priority: 100, compile: function (b, d) {
                    if (w(d.value)) var c = a(d.value, !0); else {
                        var e = a(b.text(), !0);
                        e || d.$set("value", b.text())
                    }
                    return function (a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
                    }
                }
            }
        }], se = ha({restrict: "E", terminal: !1}), Ic = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    c && (d.required = !0, c.$validators.required = function (a, b) {
                        return !d.required || !c.$isEmpty(b)
                    }, d.$observe("required", function () {
                        c.$validate()
                    }))
                }
            }
        }, Hc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            if (G(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw N("ngPattern")("noregexp", f, a, ya(b));
                            e = a || void 0, c.$validate()
                        }), c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || y(e) || e.test(b)
                        }
                    }
                }
            }
        }, Kc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function (a) {
                            a = Z(a), e = isNaN(a) ? -1 : a, c.$validate()
                        }), c.$validators.maxlength = function (a, b) {
                            return 0 > e || c.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        }, Jc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function (a) {
                            e = Z(a) || 0, c.$validate()
                        }), c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    C.angular.bootstrap ? C.console && console.log("WARNING: Tried to load angular more than once.") : (function () {
        var a;
        if (!Dc) {
            var b = rb();
            (qa = y(b) ? C.jQuery : b ? C[b] : void 0) && qa.fn.on ? (F = qa, S(qa.fn, {
                scope: Oa.scope,
                isolateScope: Oa.isolateScope,
                controller: Oa.controller,
                injector: Oa.injector,
                inheritedData: Oa.inheritedData
            }), a = qa.cleanData, qa.cleanData = function (b) {
                for (var c, f, e = 0; null != (f = b[e]); e++) (c = qa._data(f, "events")) && c.$destroy && qa(f).triggerHandler("$destroy");
                a(b)
            }) : F = O, ca.element = F, Dc = !0
        }
    }(), function (a) {
        S(a, {
            bootstrap: Bc,
            copy: pa,
            extend: S,
            merge: Zd,
            equals: na,
            element: F,
            forEach: q,
            injector: cb,
            noop: A,
            bind: ab,
            toJson: bb,
            fromJson: xc,
            identity: Xa,
            isUndefined: y,
            isDefined: w,
            isString: G,
            isFunction: z,
            isObject: D,
            isNumber: T,
            isElement: Qb,
            isArray: L,
            version: me,
            isDate: da,
            lowercase: Q,
            uppercase: ub,
            callbacks: {$$counter: 0},
            getTestability: he,
            $$minErr: N,
            $$csp: Ba,
            reloadWithDebugInfo: ge
        }), (Ub = ke(C))("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: ne}), a.provider("$compile", Fc).directive({
                a: oe,
                input: Gc,
                textarea: Gc,
                form: pe,
                script: qe,
                select: re,
                style: se,
                option: te,
                ngBind: ue,
                ngBindHtml: ve,
                ngBindTemplate: we,
                ngClass: xe,
                ngClassEven: ye,
                ngClassOdd: ze,
                ngCloak: Ae,
                ngController: Be,
                ngForm: Ce,
                ngHide: De,
                ngIf: Ee,
                ngInclude: Fe,
                ngInit: Ge,
                ngNonBindable: He,
                ngPluralize: Ie,
                ngRepeat: Je,
                ngShow: Ke,
                ngStyle: Le,
                ngSwitch: Me,
                ngSwitchWhen: Ne,
                ngSwitchDefault: Oe,
                ngOptions: Pe,
                ngTransclude: Qe,
                ngModel: Re,
                ngList: Se,
                ngChange: Te,
                pattern: Hc,
                ngPattern: Hc,
                required: Ic,
                ngRequired: Ic,
                minlength: Jc,
                ngMinlength: Jc,
                maxlength: Kc,
                ngMaxlength: Kc,
                ngValue: Ue,
                ngModelOptions: Ve
            }).directive({ngInclude: We}).directive(vb).directive(Lc), a.provider({
                $anchorScroll: Xe,
                $animate: Ye,
                $animateCss: Ze,
                $$animateJs: $e,
                $$animateQueue: af,
                $$AnimateRunner: bf,
                $$animateAsyncRun: cf,
                $browser: df,
                $cacheFactory: ef,
                $controller: ff,
                $document: gf,
                $exceptionHandler: hf,
                $filter: Mc,
                $$forceReflow: jf,
                $interpolate: kf,
                $interval: lf,
                $http: mf,
                $httpParamSerializer: nf,
                $httpParamSerializerJQLike: of,
                $httpBackend: pf,
                $xhrFactory: qf,
                $jsonpCallbacks: rf,
                $location: sf,
                $log: tf,
                $parse: uf,
                $rootScope: vf,
                $q: wf,
                $$q: xf,
                $sce: yf,
                $sceDelegate: zf,
                $sniffer: Af,
                $templateCache: Bf,
                $templateRequest: Cf,
                $$testability: Df,
                $timeout: Ef,
                $window: Ff,
                $$rAF: Gf,
                $$jqLite: Hf,
                $$HashMap: If,
                $$cookieReader: Jf
            })
        }])
    }(ca), ca.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }

        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (a, c) {
                var e = 0 | a, f = c;
                return void 0 === f && (f = Math.min(b(a), 3)), Math.pow(10, f), 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]), F(C.document).ready(function () {
        fe(C.document, Bc)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), function (window, angular) {
    "use strict";

    function isValidDottedPath(path) {
        return null != path && "" !== path && "hasOwnProperty" !== path && MEMBER_NAME_REGEX.test("." + path)
    }

    function lookupDottedPath(obj, path) {
        if (!isValidDottedPath(path)) throw $resourceMinErr("badmember", 'Dotted member path "@{0}" is invalid.', path);
        for (var keys = path.split("."), i = 0, ii = keys.length; i < ii && angular.isDefined(obj); i++) {
            var key = keys[i];
            obj = null !== obj ? obj[key] : void 0
        }
        return obj
    }

    function shallowClearAndCopy(src, dst) {
        dst = dst || {}, angular.forEach(dst, function (value, key) {
            delete dst[key]
        });
        for (var key in src) !src.hasOwnProperty(key) || "$" === key.charAt(0) && "$" === key.charAt(1) || (dst[key] = src[key]);
        return dst
    }

    var $resourceMinErr = angular.$$minErr("$resource"), MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    angular.module("ngResource", ["ng"]).provider("$resource", function () {
        var provider = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            cancellable: !1,
            actions: {
                get: {method: "GET"},
                save: {method: "POST"},
                query: {method: "GET", isArray: !0},
                remove: {method: "DELETE"},
                delete: {method: "DELETE"}
            }
        }, this.$get = ["$http", "$log", "$q", "$timeout", function ($http, $log, $q, $timeout) {
            function encodeUriSegment(val) {
                return encodeUriQuery(val, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }

            function encodeUriQuery(val, pctEncodeSpaces) {
                return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, pctEncodeSpaces ? "%20" : "+")
            }

            function Route(template, defaults) {
                this.template = template, this.defaults = extend({}, provider.defaults, defaults), this.urlParams = {}
            }

            function resourceFactory(url, paramDefaults, actions, options) {
                function extractParams(data, actionParams) {
                    var ids = {};
                    return actionParams = extend({}, paramDefaults, actionParams), forEach(actionParams, function (value, key) {
                        isFunction(value) && (value = value(data)), ids[key] = value && value.charAt && "@" == value.charAt(0) ? lookupDottedPath(data, value.substr(1)) : value
                    }), ids
                }

                function defaultResponseInterceptor(response) {
                    return response.resource
                }

                function Resource(value) {
                    shallowClearAndCopy(value || {}, this)
                }

                var route = new Route(url, options);
                return actions = extend({}, provider.defaults.actions, actions), Resource.prototype.toJSON = function () {
                    var data = extend({}, this);
                    return delete data.$promise, delete data.$resolved, data
                }, forEach(actions, function (action, name) {
                    var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method), numericTimeout = action.timeout,
                        cancellable = angular.isDefined(action.cancellable) ? action.cancellable : options && angular.isDefined(options.cancellable) ? options.cancellable : provider.defaults.cancellable;
                    numericTimeout && !angular.isNumber(numericTimeout) && ($log.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."), delete action.timeout, numericTimeout = null), Resource[name] = function (a1, a2, a3, a4) {
                        var data, success, error, params = {};
                        switch (arguments.length) {
                            case 4:
                                error = a4, success = a3;
                            case 3:
                            case 2:
                                if (!isFunction(a2)) {
                                    params = a1, data = a2, success = a3;
                                    break
                                }
                                if (isFunction(a1)) {
                                    success = a1, error = a2;
                                    break
                                }
                                success = a2, error = a3;
                            case 1:
                                isFunction(a1) ? success = a1 : hasBody ? data = a1 : params = a1;
                                break;
                            case 0:
                                break;
                            default:
                                throw $resourceMinErr("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                        }
                        var timeoutDeferred, numericTimeoutPromise, isInstanceCall = this instanceof Resource,
                            value = isInstanceCall ? data : action.isArray ? [] : new Resource(data), httpConfig = {},
                            responseInterceptor = action.interceptor && action.interceptor.response || defaultResponseInterceptor,
                            responseErrorInterceptor = action.interceptor && action.interceptor.responseError || void 0;
                        forEach(action, function (value, key) {
                            switch (key) {
                                default:
                                    httpConfig[key] = copy(value);
                                    break;
                                case"params":
                                case"isArray":
                                case"interceptor":
                                case"cancellable":
                            }
                        }), !isInstanceCall && cancellable && (timeoutDeferred = $q.defer(), httpConfig.timeout = timeoutDeferred.promise, numericTimeout && (numericTimeoutPromise = $timeout(timeoutDeferred.resolve, numericTimeout))), hasBody && (httpConfig.data = data), route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);
                        var promise = $http(httpConfig).then(function (response) {
                            var data = response.data;
                            if (data) {
                                if (angular.isArray(data) !== !!action.isArray) throw $resourceMinErr("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", name, action.isArray ? "array" : "object", angular.isArray(data) ? "array" : "object", httpConfig.method, httpConfig.url);
                                if (action.isArray) value.length = 0, forEach(data, function (item) {
                                    "object" == typeof item ? value.push(new Resource(item)) : value.push(item)
                                }); else {
                                    var promise = value.$promise;
                                    shallowClearAndCopy(data, value), value.$promise = promise
                                }
                            }
                            return response.resource = value, response
                        }, function (response) {
                            return (error || noop)(response), $q.reject(response)
                        });
                        return promise.finally(function () {
                            value.$resolved = !0, !isInstanceCall && cancellable && (value.$cancelRequest = angular.noop, $timeout.cancel(numericTimeoutPromise), timeoutDeferred = numericTimeoutPromise = httpConfig.timeout = null)
                        }), promise = promise.then(function (response) {
                            var value = responseInterceptor(response);
                            return (success || noop)(value, response.headers), value
                        }, responseErrorInterceptor), isInstanceCall ? promise : (value.$promise = promise, value.$resolved = !1, cancellable && (value.$cancelRequest = timeoutDeferred.resolve), value)
                    }, Resource.prototype["$" + name] = function (params, success, error) {
                        isFunction(params) && (error = success, success = params, params = {});
                        var result = Resource[name].call(this, params, this, success, error);
                        return result.$promise || result
                    }
                }), Resource.bind = function (additionalParamDefaults) {
                    return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions)
                }, Resource
            }

            var noop = angular.noop, forEach = angular.forEach, extend = angular.extend, copy = angular.copy,
                isFunction = angular.isFunction;
            return Route.prototype = {
                setUrlParams: function (config, params, actionUrl) {
                    var val, encodedVal, self = this, url = actionUrl || self.template, protocolAndDomain = "",
                        urlParams = self.urlParams = {};
                    forEach(url.split(/\W/), function (param) {
                        if ("hasOwnProperty" === param) throw $resourceMinErr("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(param) && param && new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url) && (urlParams[param] = {isQueryParamValue: new RegExp("\\?.*=:" + param + "(?:\\W|$)").test(url)})
                    }), url = url.replace(/\\:/g, ":"), url = url.replace(/^https?:\/\/[^\/]*/, function (match) {
                        return protocolAndDomain = match, ""
                    }), params = params || {}, forEach(self.urlParams, function (paramInfo, urlParam) {
                        val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam], angular.isDefined(val) && null !== val ? (encodedVal = paramInfo.isQueryParamValue ? encodeUriQuery(val, !0) : encodeUriSegment(val), url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), function (match, p1) {
                            return encodedVal + p1
                        })) : url = url.replace(new RegExp("(/?):" + urlParam + "(\\W|$)", "g"), function (match, leadingSlashes, tail) {
                            return "/" == tail.charAt(0) ? tail : leadingSlashes + tail
                        })
                    }), self.defaults.stripTrailingSlashes && (url = url.replace(/\/+$/, "") || "/"), url = url.replace(/\/\.(?=\w+($|\?))/, "."), config.url = protocolAndDomain + url.replace(/\/\\\./, "/."), forEach(params, function (value, key) {
                        self.urlParams[key] || (config.params = config.params || {}, config.params[key] = value)
                    })
                }
            }, resourceFactory
        }]
    })
}(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
    "use strict";

    function d(a, b) {
        return R(new (R(function () {
        }, {prototype: a})), b)
    }

    function e(a) {
        return Q(arguments, function (b) {
            b !== a && Q(b, function (b, c) {
                a.hasOwnProperty(c) || (a[c] = b)
            })
        }), a
    }

    function f(a, b) {
        var c = [];
        for (var d in a.path) {
            if (a.path[d] !== b.path[d]) break;
            c.push(a.path[d])
        }
        return c
    }

    function g(a) {
        if (Object.keys) return Object.keys(a);
        var b = [];
        return Q(a, function (a, c) {
            b.push(c)
        }), b
    }

    function h(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
        var c = a.length >>> 0, d = Number(arguments[2]) || 0;
        for (0 > (d = 0 > d ? Math.ceil(d) : Math.floor(d)) && (d += c); c > d; d++) if (d in a && a[d] === b) return d;
        return -1
    }

    function i(a, b, c, d) {
        var e, i = f(c, d), j = {}, k = [];
        for (var l in i) if (i[l] && i[l].params && (e = g(i[l].params), e.length)) for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
        return R({}, j, b)
    }

    function j(a, b, c) {
        if (!c) {
            c = [];
            for (var d in a) c.push(d)
        }
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (a[f] != b[f]) return !1
        }
        return !0
    }

    function k(a, b) {
        var c = {};
        return Q(a, function (a) {
            c[a] = b[a]
        }), c
    }

    function l(a) {
        var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        return Q(c, function (c) {
            c in a && (b[c] = a[c])
        }), b
    }

    function m(a) {
        var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var d in a) -1 == h(c, d) && (b[d] = a[d]);
        return b
    }

    function n(a, b) {
        var c = P(a), d = c ? [] : {};
        return Q(a, function (a, e) {
            b(a, e) && (d[c ? d.length : e] = a)
        }), d
    }

    function o(a, b) {
        var c = P(a) ? [] : {};
        return Q(a, function (a, d) {
            c[d] = b(a, d)
        }), c
    }

    function p(a, b) {
        var d = 1, f = 2, i = {}, j = [], k = i, l = R(a.when(i), {$$promises: i, $$values: i});
        this.study = function (i) {
            function n(a, c) {
                if (s[c] !== f) {
                    if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                    if (s[c] = d, N(a)) q.push(c, [function () {
                        return b.get(a)
                    }], j); else {
                        var e = b.annotate(a);
                        Q(e, function (a) {
                            a !== c && i.hasOwnProperty(a) && n(i[a], a)
                        }), q.push(c, a, e)
                    }
                    r.pop(), s[c] = f
                }
            }

            function o(a) {
                return O(a) && a.then && a.$$promises
            }

            if (!O(i)) throw new Error("'invocables' must be an object");
            var p = g(i || {}), q = [], r = [], s = {};
            return Q(i, n), i = r = s = null, function (d, f, g) {
                function h() {
                    --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
                }

                function i(a) {
                    r.$$failure = a, n.reject(a)
                }

                if (o(d) && g === c && (g = f, f = d, d = null), d) {
                    if (!O(d)) throw new Error("'locals' must be an object")
                } else d = k;
                if (f) {
                    if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else f = l;
                var n = a.defer(), r = n.promise, s = r.$$promises = {}, t = R({}, d), u = 1 + q.length / 3, v = !1;
                if (L(f.$$failure)) return i(f.$$failure), r;
                f.$$inheritedValues && e(t, m(f.$$inheritedValues, p)), R(s, f.$$promises), f.$$values ? (v = e(t, m(f.$$values, p)), r.$$inheritedValues = m(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = m(f.$$inheritedValues, p)), f.then(h, i));
                for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : function (c, e, f) {
                    function j(a) {
                        l.reject(a), i(a)
                    }

                    function k() {
                        if (!L(r.$$failure)) try {
                            l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                                t[c] = a, h()
                            }, j)
                        } catch (a) {
                            j(a)
                        }
                    }

                    var l = a.defer(), m = 0;
                    Q(f, function (a) {
                        s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
                            t[a] = b, --m || k()
                        }, j))
                    }), m || k(), s[c] = l.promise
                }(q[w], q[w + 1], q[w + 2]);
                return r
            }
        }, this.resolve = function (a, b, c, d) {
            return this.study(a)(b, c, d)
        }
    }

    function q(a, b, c) {
        this.fromConfig = function (a, b, c) {
            return L(a.template) ? this.fromString(a.template, b) : L(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : L(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
        }, this.fromString = function (a, b) {
            return M(a) ? a(b) : a
        }, this.fromUrl = function (c, d) {
            return M(c) && (c = c(d)), null == c ? null : a.get(c, {
                cache: b,
                headers: {Accept: "text/html"}
            }).then(function (a) {
                return a.data
            })
        }, this.fromProvider = function (a, b, d) {
            return c.invoke(a, null, d || {params: b})
        }
    }

    function r(a, b, e) {
        function f(b, c, d, e) {
            if (q.push(b), o[b]) return o[b];
            if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
            if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
            return p[b] = new U.Param(b, c, d, e), p[b]
        }

        function g(a, b, c, d) {
            var e = ["", ""], f = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!b) return f;
            switch (c) {
                case!1:
                    e = ["(", ")" + (d ? "?" : "")];
                    break;
                case!0:
                    f = f.replace(/\/$/, ""), e = ["(?:/(", ")|/)?"];
                    break;
                default:
                    e = ["(" + c + "|", ")?"]
            }
            return f + e[0] + b + e[1]
        }

        function h(e, f) {
            var g, h, i, j, k;
            return g = e[2] || e[3], k = b.params[g], i = a.substring(m, e.index), h = f ? e[4] : e[4] || ("*" == e[1] ? ".*" : null), h && (j = U.type(h) || d(U.type("string"), {pattern: new RegExp(h, b.caseInsensitive ? "i" : c)})), {
                id: g,
                regexp: h,
                segment: i,
                type: j,
                cfg: k
            }
        }

        b = R({params: {}}, O(b) ? b : {});
        var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            k = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, l = "^",
            m = 0, n = this.segments = [], o = e ? e.params : {},
            p = this.params = e ? e.params.$$new() : new U.ParamSet, q = [];
        this.source = a;
        for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash, s.isOptional), n.push(r.segment), m = j.lastIndex;
        t = a.substring(m);
        var u = t.indexOf("?");
        if (u >= 0) {
            var v = this.sourceSearch = t.substring(u);
            if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
        } else this.sourcePath = a, this.sourceSearch = "";
        l += g(t) + (!1 === b.strict ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
    }

    function s(a) {
        R(this, a)
    }

    function t() {
        function a(a) {
            return null != a ? a.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : a
        }

        function e(a) {
            return null != a ? a.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : a
        }

        function f() {
            return {strict: p, caseInsensitive: m}
        }

        function i(a) {
            return M(a) || P(a) && M(a[a.length - 1])
        }

        function j() {
            for (; w.length;) {
                var a = w.shift();
                if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                b.extend(u[a.name], l.invoke(a.def))
            }
        }

        function k(a) {
            R(this, a || {})
        }

        U = this;
        var l, m = !1, p = !0, q = !1, u = {}, v = !0, w = [], x = {
            string: {
                encode: a, decode: e, is: function (a) {
                    return null == a || !L(a) || "string" == typeof a
                }, pattern: /[^\/]*/
            },
            int: {
                encode: a, decode: function (a) {
                    return parseInt(a, 10)
                }, is: function (a) {
                    return L(a) && this.decode(a.toString()) === a
                }, pattern: /\d+/
            },
            bool: {
                encode: function (a) {
                    return a ? 1 : 0
                }, decode: function (a) {
                    return 0 !== parseInt(a, 10)
                }, is: function (a) {
                    return !0 === a || !1 === a
                }, pattern: /0|1/
            },
            date: {
                encode: function (a) {
                    return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
                },
                decode: function (a) {
                    if (this.is(a)) return a;
                    var b = this.capture.exec(a);
                    return b ? new Date(b[1], b[2] - 1, b[3]) : c
                },
                is: function (a) {
                    return a instanceof Date && !isNaN(a.valueOf())
                },
                equals: function (a, b) {
                    return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^\/]*/},
            any: {encode: b.identity, decode: b.identity, equals: b.equals, pattern: /.*/}
        };
        t.$$getDefaultValue = function (a) {
            if (!i(a.value)) return a.value;
            if (!l) throw new Error("Injectable functions cannot be called at configuration time");
            return l.invoke(a.value)
        }, this.caseInsensitive = function (a) {
            return L(a) && (m = a), m
        }, this.strictMode = function (a) {
            return L(a) && (p = a), p
        }, this.defaultSquashPolicy = function (a) {
            if (!L(a)) return q;
            if (!0 !== a && !1 !== a && !N(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
            return q = a, a
        }, this.compile = function (a, b) {
            return new r(a, R(f(), b))
        }, this.isMatcher = function (a) {
            if (!O(a)) return !1;
            var b = !0;
            return Q(r.prototype, function (c, d) {
                M(c) && (b = b && L(a[d]) && M(a[d]))
            }), b
        }, this.type = function (a, b, c) {
            if (!L(b)) return u[a];
            if (u.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
            return u[a] = new s(R({name: a}, b)), c && (w.push({name: a, def: c}), v || j()), this
        }, Q(x, function (a, b) {
            u[b] = new s(R({name: b}, a))
        }), u = d(u, {}), this.$get = ["$injector", function (a) {
            return l = a, v = !1, j(), Q(x, function (a, b) {
                u[b] || (u[b] = new s(a))
            }), this
        }], this.Param = function (a, d, e, f) {
            function t() {
                if (!l) throw new Error("Injectable functions cannot be called at configuration time");
                var a = l.invoke(e.$$fn);
                if (null !== a && a !== c && !x.type.is(a)) throw new Error("Default value (" + a + ") for parameter '" + x.id + "' is not an instance of Type (" + x.type.name + ")");
                return a
            }

            function v(a) {
                function b(a) {
                    return function (b) {
                        return b.from === a
                    }
                }

                return a = function (a) {
                    var c = o(n(x.replace, b(a)), function (a) {
                        return a.to
                    });
                    return c.length ? c[0] : a
                }(a), L(a) ? x.type.$normalize(a) : t()
            }

            function w() {
                return "{Param:" + a + " " + d + " squash: '" + A + "' optional: " + z + "}"
            }

            var x = this;
            e = function (a) {
                var b = O(a) ? g(a) : [];
                return -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array") && (a = {value: a}), a.$$fn = i(a.value) ? a.value : function () {
                    return a.value
                }, a
            }(e), d = function (c, d, e) {
                if (c.type && d) throw new Error("Param '" + a + "' has two type configurations.");
                return d || (c.type ? b.isString(c.type) ? u[c.type] : c.type instanceof s ? c.type : new s(c.type) : "config" === e ? u.any : u.string)
            }(e, d, f);
            var y = function () {
                var b = {array: "search" === f && "auto"}, c = a.match(/\[\]$/) ? {array: !0} : {};
                return R(b, c, e).array
            }();
            d = y ? d.$asArray(y, "search" === f) : d, "string" !== d.name || y || "path" !== f || e.value !== c || (e.value = "");
            var z = e.value !== c, A = function (a, b) {
                var c = a.squash;
                if (!b || !1 === c) return !1;
                if (!L(c) || null == c) return q;
                if (!0 === c || N(c)) return c;
                throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
            }(e, z), B = function (a, b, d, e) {
                var f, g, i = [{from: "", to: d || b ? c : ""}, {from: null, to: d || b ? c : ""}];
                return f = P(a.replace) ? a.replace : [], N(e) && f.push({from: e, to: c}), g = o(f, function (a) {
                    return a.from
                }), n(i, function (a) {
                    return -1 === h(g, a.from)
                }).concat(f)
            }(e, y, z, A);
            R(this, {
                id: a,
                type: d,
                location: f,
                array: y,
                squash: A,
                replace: B,
                isOptional: z,
                value: v,
                dynamic: c,
                config: e,
                toString: w
            })
        }, k.prototype = {
            $$new: function () {
                return d(this, R(new k, {$$parent: this}))
            }, $$keys: function () {
                for (var a = [], b = [], c = this, d = g(k.prototype); c;) b.push(c), c = c.$$parent;
                return b.reverse(), Q(b, function (b) {
                    Q(g(b), function (b) {
                        -1 === h(a, b) && -1 === h(d, b) && a.push(b)
                    })
                }), a
            }, $$values: function (a) {
                var b = {}, c = this;
                return Q(c.$$keys(), function (d) {
                    b[d] = c[d].value(a && a[d])
                }), b
            }, $$equals: function (a, b) {
                var c = !0, d = this;
                return Q(d.$$keys(), function (e) {
                    var f = a && a[e], g = b && b[e];
                    d[e].type.equals(f, g) || (c = !1)
                }), c
            }, $$validates: function (a) {
                var d, e, f, g, h, i = this.$$keys();
                for (d = 0; d < i.length && (e = this[i[d]], (f = a[i[d]]) !== c && null !== f || !e.isOptional); d++) {
                    if (g = e.type.$normalize(f), !e.type.is(g)) return !1;
                    if (h = e.type.encode(g), b.isString(h) && !e.type.pattern.exec(h)) return !1
                }
                return !0
            }, $$parent: c
        }, this.ParamSet = k
    }

    function u(a, d) {
        function e(a) {
            var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
            return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
        }

        function f(a, b) {
            return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
                return b["$" === c ? 0 : Number(c)]
            })
        }

        function g(a, b, c) {
            if (!c) return !1;
            var d = a.invoke(b, b, {$match: c});
            return !L(d) || d
        }

        function h(d, e, f, g, h) {
            function m(a, b, c) {
                return "/" === q ? a : b ? q.slice(0, -1) + a : c ? q.slice(1) + a : a
            }

            function n(a) {
                function b(a) {
                    var b = a(f, d);
                    return !!b && (N(b) && d.replace().url(b), !0)
                }

                if (!a || !a.defaultPrevented) {
                    p && d.url(), p = c;
                    var e, g = j.length;
                    for (e = 0; g > e; e++) if (b(j[e])) return;
                    k && b(k)
                }
            }

            function o() {
                return i = i || e.$on("$locationChangeSuccess", n)
            }

            var p, q = g.baseHref(), r = d.url();
            return l || o(), {
                sync: function () {
                    n()
                }, listen: function () {
                    return o()
                }, update: function (a) {
                    return a ? void(r = d.url()) : void(d.url() !== r && (d.url(r), d.replace()))
                }, push: function (a, b, e) {
                    var f = a.format(b || {});
                    null !== f && b && b["#"] && (f += "#" + b["#"]), d.url(f), p = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
                }, href: function (c, e, f) {
                    if (!c.validates(e)) return null;
                    var g = a.html5Mode();
                    b.isObject(g) && (g = g.enabled), g = g && h.history;
                    var i = c.format(e);
                    if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), null !== i && e && e["#"] && (i += "#" + e["#"]), i = m(i, g, f.absolute), !f.absolute || !i) return i;
                    var j = !g && i ? "/" : "", k = d.port();
                    return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
                }
            }
        }

        var i, j = [], k = null, l = !1;
        this.rule = function (a) {
            if (!M(a)) throw new Error("'rule' must be a function");
            return j.push(a), this
        }, this.otherwise = function (a) {
            if (N(a)) {
                var b = a;
                a = function () {
                    return b
                }
            } else if (!M(a)) throw new Error("'rule' must be a function");
            return k = a, this
        }, this.when = function (a, b) {
            var c, h = N(b);
            if (N(a) && (a = d.compile(a)), !h && !M(b) && !P(b)) throw new Error("invalid 'handler' in when()");
            var i = {
                matcher: function (a, b) {
                    return h && (c = d.compile(b), b = ["$match", function (a) {
                        return c.format(a)
                    }]), R(function (c, d) {
                        return g(c, b, a.exec(d.path(), d.search()))
                    }, {prefix: N(a.prefix) ? a.prefix : ""})
                }, regex: function (a, b) {
                    if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
                    return h && (c = b, b = ["$match", function (a) {
                        return f(c, a)
                    }]), R(function (c, d) {
                        return g(c, b, a.exec(d.path()))
                    }, {prefix: e(a)})
                }
            }, j = {matcher: d.isMatcher(a), regex: a instanceof RegExp};
            for (var k in j) if (j[k]) return this.rule(i[k](a, b));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (a) {
            a === c && (a = !0), l = a
        }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
    }

    function v(a, e) {
        function f(a) {
            return 0 === a.indexOf(".") || 0 === a.indexOf("^")
        }

        function m(a, b) {
            if (!a) return c;
            var d = N(a), e = d ? a : a.name;
            if (f(e)) {
                if (!b) throw new Error("No reference point given for path '" + e + "'");
                b = m(b);
                for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) if ("" !== h[i] || 0 !== i) {
                    if ("^" !== h[i]) break;
                    if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                    k = k.parent
                } else k = b;
                h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
            }
            var l = z[e];
            return !l || !d && (d || l !== a && l.self !== a) ? c : l
        }

        function n(a, b) {
            A[a] || (A[a] = []), A[a].push(b)
        }

        function p(a) {
            for (var b = A[a] || []; b.length;) q(b.shift())
        }

        function q(b) {
            b = d(b, {
                self: b, resolve: b.resolve || {}, toString: function () {
                    return this.name
                }
            });
            var c = b.name;
            if (!N(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
            if (z.hasOwnProperty(c)) throw new Error("State '" + c + "' is already defined");
            var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : N(b.parent) ? b.parent : O(b.parent) && N(b.parent.name) ? b.parent.name : "";
            if (e && !z[e]) return n(e, b.self);
            for (var f in C) M(C[f]) && (b[f] = C[f](b, C.$delegates[f]));
            return z[c] = b, !b[B] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
                y.$current.navigable == b && j(a, c) || y.transitionTo(b, a, {inherit: !0, location: !1})
            }]), p(c), b
        }

        function r(a) {
            return a.indexOf("*") > -1
        }

        function s(a) {
            for (var b = a.split("."), c = y.$current.name.split("."), d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
            return "**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length == c.length && c.join("") === b.join("")
        }

        function t(a, b) {
            return N(a) && !L(b) ? C[a] : M(b) && N(a) ? (C[a] && !C.$delegates[a] && (C.$delegates[a] = C[a]), C[a] = b, this) : this
        }

        function u(a, b) {
            return O(a) ? b = a : b.name = a, q(b), this
        }

        function v(a, e, f, h, l, n, p, q, t) {
            function u(b, c, d, f) {
                var g = a.$broadcast("$stateNotFound", b, c, d);
                if (g.defaultPrevented) return p.update(), D;
                if (!g.retry) return null;
                if (f.$retry) return p.update(), E;
                var h = y.transition = e.when(g.retry);
                return h.then(function () {
                    return h !== y.transition ? A : (b.options.$retry = !0, y.transitionTo(b.to, b.toParams, b.options))
                }, function () {
                    return D
                }), p.update(), h
            }

            function v(a, c, d, g, i, j) {
                function m() {
                    var c = [];
                    return Q(a.views, function (d, e) {
                        var g = d.resolve && d.resolve !== a.resolve ? d.resolve : {};
                        g.$template = [function () {
                            return f.load(e, {view: d, locals: i.globals, params: n, notify: j.notify}) || ""
                        }], c.push(l.resolve(g, i.globals, i.resolve, a).then(function (c) {
                            if (M(d.controllerProvider) || P(d.controllerProvider)) {
                                var f = b.extend({}, g, i.globals);
                                c.$$controller = h.invoke(d.controllerProvider, null, f)
                            } else c.$$controller = d.controller;
                            c.$$state = a, c.$$controllerAs = d.controllerAs, c.$$resolveAs = d.resolveAs, i[e] = c
                        }))
                    }), e.all(c).then(function () {
                        return i.globals
                    })
                }

                var n = d ? c : k(a.params.$$keys(), c), o = {$stateParams: n};
                i.resolve = l.resolve(a.resolve, o, i.resolve, a);
                var p = [i.resolve.then(function (a) {
                    i.globals = a
                })];
                return g && p.push(g), e.all(p).then(m).then(function (a) {
                    return i
                })
            }

            var A = e.reject(new Error("transition superseded")), C = e.reject(new Error("transition prevented")),
                D = e.reject(new Error("transition aborted")), E = e.reject(new Error("transition failed"));
            return x.locals = {resolve: null, globals: {$stateParams: {}}}, y = {
                params: {},
                current: x.self,
                $current: x,
                transition: null
            }, y.reload = function (a) {
                return y.transitionTo(y.current, n, {reload: a || !0, inherit: !1, notify: !0})
            }, y.go = function (a, b, c) {
                return y.transitionTo(a, b, R({inherit: !0, relative: y.$current}, c))
            }, y.transitionTo = function (b, c, f) {
                c = c || {}, f = R({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, f || {});
                var g, j = y.$current, l = y.params, o = j.path, q = m(b, f.relative), r = c["#"];
                if (!L(q)) {
                    var s = {to: b, toParams: c, options: f}, t = u(s, j.self, l, f);
                    if (t) return t;
                    if (b = s.to, c = s.toParams, f = s.options, q = m(b, f.relative), !L(q)) {
                        if (!f.relative) throw new Error("No such state '" + b + "'");
                        throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                    }
                }
                if (q[B]) throw new Error("Cannot transition to abstract state '" + b + "'");
                if (f.inherit && (c = i(n, c || {}, y.$current, q)), !q.params.$$validates(c)) return E;
                c = q.params.$$values(c), b = q;
                var z = b.path, D = 0, F = z[D], G = x.locals, H = [];
                if (f.reload) {
                    if (N(f.reload) || O(f.reload)) {
                        if (O(f.reload) && !f.reload.name) throw new Error("Invalid reload state object");
                        var I = !0 === f.reload ? o[0] : m(f.reload);
                        if (f.reload && !I) throw new Error("No such reload state '" + (N(f.reload) ? f.reload : f.reload.name) + "'");
                        for (; F && F === o[D] && F !== I;) G = H[D] = F.locals, D++, F = z[D]
                    }
                } else for (; F && F === o[D] && F.ownParams.$$equals(c, l);) G = H[D] = F.locals, D++, F = z[D];
                if (w(b, c, j, l, G, f)) return r && (c["#"] = r), y.params = c, S(y.params, n), S(k(b.params.$$keys(), n), b.locals.globals.$stateParams), f.location && b.navigable && b.navigable.url && (p.push(b.navigable.url, c, {
                    $$avoidResync: !0,
                    replace: "replace" === f.location
                }), p.update(!0)), y.transition = null, e.when(y.current);
                if (c = k(b.params.$$keys(), c || {}), r && (c["#"] = r), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, l, f).defaultPrevented) return a.$broadcast("$stateChangeCancel", b.self, c, j.self, l), null == y.transition && p.update(), C;
                for (var J = e.when(G), K = D; K < z.length; K++, F = z[K]) G = H[K] = d(G), J = v(F, c, F === b, J, G, f);
                var M = y.transition = J.then(function () {
                    var d, e, g;
                    if (y.transition !== M) return A;
                    for (d = o.length - 1; d >= D; d--) g = o[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                    for (d = D; d < z.length; d++) e = z[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                    return y.transition !== M ? A : (y.$current = b, y.current = b.self, y.params = c, S(y.params, n), y.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === f.location
                    }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, l), p.update(!0), y.current)
                }).then(null, function (d) {
                    return y.transition !== M ? A : (y.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, l, d), g.defaultPrevented || p.update(), e.reject(d))
                });
                return M
            }, y.is = function (a, b, d) {
                d = R({relative: y.$current}, d || {});
                var e = m(a, d.relative);
                return L(e) ? y.$current === e && (!b || j(e.params.$$values(b), n)) : c
            }, y.includes = function (a, b, d) {
                if (d = R({relative: y.$current}, d || {}), N(a) && r(a)) {
                    if (!s(a)) return !1;
                    a = y.$current.name
                }
                var e = m(a, d.relative);
                return L(e) ? !!L(y.$current.includes[e.name]) && (!b || j(e.params.$$values(b), n, g(b))) : c
            }, y.href = function (a, b, d) {
                d = R({lossy: !0, inherit: !0, absolute: !1, relative: y.$current}, d || {});
                var e = m(a, d.relative);
                if (!L(e)) return null;
                d.inherit && (b = i(n, b || {}, y.$current, e));
                var f = e && d.lossy ? e.navigable : e;
                return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys().concat("#"), b || {}), {absolute: d.absolute}) : null
            }, y.get = function (a, b) {
                if (0 === arguments.length) return o(g(z), function (a) {
                    return z[a].self
                });
                var c = m(a, b || y.$current);
                return c && c.self ? c.self : null
            }, y
        }

        function w(a, b, c, d, e, f) {
            return !(f.reload || a !== c || !(e === c.locals || !1 === a.self.reloadOnSearch && function (a, b, c) {
                function d(b) {
                    return "search" != a.params[b].location
                }

                var e = a.params.$$keys().filter(d), f = l.apply({}, [a.params].concat(e));
                return new U.ParamSet(f).$$equals(b, c)
            }(c, d, b))) || void 0
        }

        var x, y, z = {}, A = {}, B = "abstract", C = {
            parent: function (a) {
                if (L(a.parent) && a.parent) return m(a.parent);
                var b = /^(.+)\.[^.]+$/.exec(a.name);
                return b ? m(b[1]) : x
            }, data: function (a) {
                return a.parent && a.parent.data && (a.data = a.self.data = d(a.parent.data, a.data)), a.data
            }, url: function (a) {
                var b = a.url, c = {params: a.params || {}};
                if (N(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || x).url.concat(b, c);
                if (!b || e.isMatcher(b)) return b;
                throw new Error("Invalid url '" + b + "' in state '" + a + "'")
            }, navigable: function (a) {
                return a.url ? a : a.parent ? a.parent.navigable : null
            }, ownParams: function (a) {
                var b = a.url && a.url.params || new U.ParamSet;
                return Q(a.params || {}, function (a, c) {
                    b[c] || (b[c] = new U.Param(c, null, a, "config"))
                }), b
            }, params: function (a) {
                var b = l(a.ownParams, a.ownParams.$$keys());
                return a.parent && a.parent.params ? R(a.parent.params.$$new(), b) : new U.ParamSet
            }, views: function (a) {
                var b = {};
                return Q(L(a.views) ? a.views : {"": a}, function (c, d) {
                    d.indexOf("@") < 0 && (d += "@" + a.parent.name), c.resolveAs = c.resolveAs || a.resolveAs || "$resolve", b[d] = c
                }), b
            }, path: function (a) {
                return a.parent ? a.parent.path.concat(a) : []
            }, includes: function (a) {
                var b = a.parent ? R({}, a.parent.includes) : {};
                return b[a.name] = !0, b
            }, $delegates: {}
        };
        x = q({
            name: "",
            url: "^",
            views: null,
            abstract: !0
        }), x.navigable = null, this.decorator = t, this.state = u, this.$get = v, v.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function w() {
        function a(a, b) {
            return {
                load: function (a, c) {
                    var d;
                    return c = R({
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    }, c), c.view && (d = b.fromConfig(c.view, c.params, c.locals)), d
                }
            }
        }

        this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
    }

    function x() {
        var a = !1;
        this.useAnchorScroll = function () {
            a = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
            return a ? b : function (a) {
                return c(function () {
                    a[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function y(a, c, d, e, f) {
        function h(a, c) {
            if (k) return {
                enter: function (a, c, d) {
                    b.version.minor > 2 ? k.enter(a, null, c).then(d) : k.enter(a, null, c, d)
                }, leave: function (a, c) {
                    b.version.minor > 2 ? k.leave(a).then(c) : k.leave(a, c)
                }
            };
            if (j) {
                var e = j && j(c, a);
                return {
                    enter: function (a, b, c) {
                        e.enter(a, null, b), c()
                    }, leave: function (a, b) {
                        e.leave(a), b()
                    }
                }
            }
            return function () {
                return {
                    enter: function (a, b, c) {
                        b.after(a), c()
                    }, leave: function (a, b) {
                        a.remove(), b()
                    }
                }
            }()
        }

        var i = function () {
            return c.has ? function (a) {
                return c.has(a) ? c.get(a) : null
            } : function (a) {
                try {
                    return c.get(a)
                } catch (b) {
                    return null
                }
            }
        }(), j = i("$animator"), k = i("$animate");
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function (c, g, i) {
                return function (c, g, j) {
                    function k() {
                        if (m && (m.remove(), m = null), o && (o.$destroy(), o = null), n) {
                            var a = n.data("$uiViewAnim");
                            s.leave(n, function () {
                                a.$$animLeave.resolve(), m = null
                            }), m = n, n = null
                        }
                    }

                    function l(h) {
                        var l, m = A(c, j, g, e), t = m && a.$current && a.$current.locals[m];
                        if (h || t !== p) {
                            l = c.$new(), p = a.$current.locals[m], l.$emit("$viewContentLoading", m);
                            var u = i(l, function (a) {
                                var e = f.defer(), h = f.defer(),
                                    i = {$animEnter: e.promise, $animLeave: h.promise, $$animLeave: h};
                                a.data("$uiViewAnim", i), s.enter(a, g, function () {
                                    e.resolve(), o && o.$emit("$viewContentAnimationEnded"), (b.isDefined(r) && !r || c.$eval(r)) && d(a)
                                }), k()
                            });
                            n = u, o = l, o.$emit("$viewContentLoaded", m), o.$eval(q)
                        }
                    }

                    var m, n, o, p, q = j.onload || "", r = j.autoscroll, s = h(j, c);
                    g.inheritedData("$uiView"), c.$on("$stateChangeSuccess", function () {
                        l(!1)
                    }), l(!0)
                }
            }
        }
    }

    function z(a, c, d, e) {
        return {
            restrict: "ECA", priority: -400, compile: function (f) {
                var g = f.html();
                return function (f, h, i) {
                    var j = d.$current, k = A(f, i, h, e), l = j && j.locals[k];
                    if (l) {
                        h.data("$uiView", {name: k, state: l.$$state}), h.html(l.$template ? l.$template : g);
                        var m = b.extend({}, l);
                        f[l.$$resolveAs] = m;
                        var n = a(h.contents());
                        if (l.$$controller) {
                            l.$scope = f, l.$element = h;
                            var o = c(l.$$controller, l);
                            l.$$controllerAs && (f[l.$$controllerAs] = o, f[l.$$controllerAs][l.$$resolveAs] = m), M(o.$onInit) && o.$onInit(), h.data("$ngControllerController", o), h.children().data("$ngControllerController", o)
                        }
                        n(f)
                    }
                }
            }
        }
    }

    function A(a, b, c, d) {
        var e = d(b.uiView || b.name || "")(a), f = c.inheritedData("$uiView");
        return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
    }

    function B(a, b) {
        var c, d = a.match(/^\s*({[^}]*})\s*$/);
        if (d && (a = b + "(" + d[1] + ")"), !(c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/)) || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
        return {state: c[1], paramExpr: c[3] || null}
    }

    function C(a) {
        var b = a.parent().inheritedData("$uiView");
        return b && b.state && b.state.name ? b.state : void 0
    }

    function D(a) {
        var b = "[object SVGAnimatedString]" === Object.prototype.toString.call(a.prop("href")),
            c = "FORM" === a[0].nodeName;
        return {
            attr: c ? "action" : b ? "xlink:href" : "href",
            isAnchor: "A" === a.prop("tagName").toUpperCase(),
            clickable: !c
        }
    }

    function E(a, b, c, d, e) {
        return function (f) {
            var g = f.which || f.button, h = e();
            if (!(g > 1 || f.ctrlKey || f.metaKey || f.shiftKey || a.attr("target"))) {
                var i = c(function () {
                    b.go(h.state, h.params, h.options)
                });
                f.preventDefault();
                var j = d.isAnchor && !h.href ? 1 : 0;
                f.preventDefault = function () {
                    j-- <= 0 && c.cancel(i)
                }
            }
        }
    }

    function F(a, b) {
        return {relative: C(a) || b.$current, inherit: !0}
    }

    function G(a, c) {
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (d, e, f, g) {
                var h, i = B(f.uiSref, a.current.name), j = {state: i.state, href: null, params: null}, k = D(e),
                    l = g[1] || g[0], m = null;
                j.options = R(F(e, a), f.uiSrefOpts ? d.$eval(f.uiSrefOpts) : {});
                var n = function (c) {
                    c && (j.params = b.copy(c)), j.href = a.href(i.state, j.params, j.options), m && m(), l && (m = l.$$addStateInfo(i.state, j.params)), null !== j.href && f.$set(k.attr, j.href)
                };
                i.paramExpr && (d.$watch(i.paramExpr, function (a) {
                    a !== j.params && n(a)
                }, !0), j.params = b.copy(d.$eval(i.paramExpr))), n(), k.clickable && (h = E(e, a, c, k, function () {
                    return j
                }), e.bind("click", h), d.$on("$destroy", function () {
                    e.unbind("click", h)
                }))
            }
        }
    }

    function H(a, b) {
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (c, d, e, f) {
                function g(b) {
                    m.state = b[0], m.params = b[1], m.options = b[2], m.href = a.href(m.state, m.params, m.options), n && n(), j && (n = j.$$addStateInfo(m.state, m.params)), m.href && e.$set(i.attr, m.href)
                }

                var h, i = D(d), j = f[1] || f[0], k = [e.uiState, e.uiStateParams || null, e.uiStateOpts || null],
                    l = "[" + k.map(function (a) {
                        return a || "null"
                    }).join(", ") + "]", m = {state: null, params: null, options: null, href: null}, n = null;
                c.$watch(l, g, !0), g(c.$eval(l)), i.clickable && (h = E(d, a, b, i, function () {
                    return m
                }), d.bind("click", h), c.$on("$destroy", function () {
                    d.unbind("click", h)
                }))
            }
        }
    }

    function I(a, b, c) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (b, d, e, f) {
                function g(b, c, e) {
                    var f = a.get(b, C(d)), g = h(b, c), i = {state: f || {name: b}, params: c, hash: g};
                    return p.push(i), q[g] = e, function () {
                        var a = p.indexOf(i);
                        -1 !== a && p.splice(a, 1)
                    }
                }

                function h(a, c) {
                    if (!N(a)) throw new Error("state should be a string");
                    return O(c) ? a + T(c) : (c = b.$eval(c), O(c) ? a + T(c) : a)
                }

                function i() {
                    for (var a = 0; a < p.length; a++) l(p[a].state, p[a].params) ? j(d, q[p[a].hash]) : k(d, q[p[a].hash]), m(p[a].state, p[a].params) ? j(d, n) : k(d, n)
                }

                function j(a, b) {
                    f(function () {
                        a.addClass(b)
                    })
                }

                function k(a, b) {
                    a.removeClass(b)
                }

                function l(b, c) {
                    return a.includes(b.name, c)
                }

                function m(b, c) {
                    return a.is(b.name, c)
                }

                var n, o, p = [], q = {};
                n = c(e.uiSrefActiveEq || "", !1)(b);
                try {
                    o = b.$eval(e.uiSrefActive)
                } catch (r) {
                }
                o = o || c(e.uiSrefActive || "", !1)(b), O(o) && Q(o, function (c, d) {
                    if (N(c)) {
                        var e = B(c, a.current.name);
                        g(e.state, b.$eval(e.paramExpr), d)
                    }
                }), this.$$addStateInfo = function (a, b) {
                    if (!(O(o) && p.length > 0)) {
                        var c = g(a, b, o);
                        return i(), c
                    }
                }, b.$on("$stateChangeSuccess", i), i()
            }]
        }
    }

    function J(a) {
        var b = function (b, c) {
            return a.is(b, c)
        };
        return b.$stateful = !0, b
    }

    function K(a) {
        var b = function (b, c, d) {
            return a.includes(b, c, d)
        };
        return b.$stateful = !0, b
    }

    var L = b.isDefined, M = b.isFunction, N = b.isString, O = b.isObject, P = b.isArray, Q = b.forEach, R = b.extend,
        S = b.copy, T = b.toJson;
    b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), p.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", p), q.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", q);
    var U;
    r.prototype.concat = function (a, b) {
        var c = {caseInsensitive: U.caseInsensitive(), strict: U.strictMode(), squash: U.defaultSquashPolicy()};
        return new r(this.sourcePath + a + this.sourceSearch, R(c, b), this)
    }, r.prototype.toString = function () {
        return this.source
    }, r.prototype.exec = function (a, b) {
        var d = this.regexp.exec(a);
        if (!d) return null;
        b = b || {};
        var e, f, g, h = this.parameters(), i = h.length, j = this.segments.length - 1, k = {};
        if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
        var l, m;
        for (e = 0; j > e; e++) {
            for (g = h[e], l = this.params[g], m = d[e + 1], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
            m && !0 === l.array && (m = function (a) {
                function b(a) {
                    return a.split("").reverse().join("")
                }

                function c(a) {
                    return a.replace(/\\-/g, "-")
                }

                return o(o(b(a).split(/-(?!\\)/), b), c).reverse()
            }(m)), L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
        }
        for (; i > e; e++) {
            for (g = h[e], k[g] = this.params[g].value(b[g]), l = this.params[g], m = b[g], f = 0; f < l.replace.length; f++) l.replace[f].from === m && (m = l.replace[f].to);
            L(m) && (m = l.type.decode(m)), k[g] = l.value(m)
        }
        return k
    }, r.prototype.parameters = function (a) {
        return L(a) ? this.params[a] || null : this.$$paramNames
    }, r.prototype.validates = function (a) {
        return this.params.$$validates(a)
    }, r.prototype.format = function (a) {
        function b(a) {
            return encodeURIComponent(a).replace(/-/g, function (a) {
                return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        a = a || {};
        var c = this.segments, d = this.parameters(), e = this.params;
        if (!this.validates(a)) return null;
        var f, g = !1, h = c.length - 1, i = d.length, j = c[0];
        for (f = 0; i > f; f++) {
            var k = h > f, l = d[f], m = e[l], n = m.value(a[l]), p = m.isOptional && m.type.equals(m.value(), n),
                q = !!p && m.squash, r = m.type.encode(n);
            if (k) {
                var s = c[f + 1], t = f + 1 === h;
                if (!1 === q) null != r && (j += P(r) ? o(r, b).join("-") : encodeURIComponent(r)), j += s; else if (!0 === q) {
                    var u = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    j += s.match(u)[1]
                } else N(q) && (j += q + s);
                t && !0 === m.squash && "/" === j.slice(-1) && (j = j.slice(0, -1))
            } else {
                if (null == r || p && !1 !== q) continue;
                if (P(r) || (r = [r]), 0 === r.length) continue;
                r = o(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + l + "=" + r, g = !0
            }
        }
        return j
    }, s.prototype.is = function (a, b) {
        return !0
    }, s.prototype.encode = function (a, b) {
        return a
    }, s.prototype.decode = function (a, b) {
        return a
    }, s.prototype.equals = function (a, b) {
        return a == b
    }, s.prototype.$subPattern = function () {
        var a = this.pattern.toString();
        return a.substr(1, a.length - 2)
    }, s.prototype.pattern = /.*/, s.prototype.toString = function () {
        return "{Type:" + this.name + "}"
    }, s.prototype.$normalize = function (a) {
        return this.is(a) ? a : this.decode(a)
    }, s.prototype.$asArray = function (a, b) {
        function d(a, b) {
            function d(a, b) {
                return function () {
                    return a[b].apply(a, arguments)
                }
            }

            function e(a) {
                return P(a) ? a : L(a) ? [a] : []
            }

            function f(a) {
                switch (a.length) {
                    case 0:
                        return c;
                    case 1:
                        return "auto" === b ? a[0] : a;
                    default:
                        return a
                }
            }

            function g(a) {
                return !a
            }

            function h(a, b) {
                return function (c) {
                    if (P(c) && 0 === c.length) return c;
                    c = e(c);
                    var d = o(c, a);
                    return !0 === b ? 0 === n(d, g).length : f(d)
                }
            }

            this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = function (a) {
                return function (b, c) {
                    var d = e(b), f = e(c);
                    if (d.length !== f.length) return !1;
                    for (var g = 0; g < d.length; g++) if (!a(d[g], f[g])) return !1;
                    return !0
                }
            }(d(a, "equals")), this.pattern = a.pattern, this.$normalize = h(d(a, "$normalize")), this.name = a.name, this.$arrayMode = b
        }

        if (!a) return this;
        if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
        return new d(this, a)
    }, b.module("ui.router.util").provider("$urlMatcherFactory", t), b.module("ui.router.util").run(["$urlMatcherFactory", function (a) {
    }]), u.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", u), v.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").factory("$stateParams", function () {
        return {}
    }).constant("$state.runtime", {autoinject: !0}).provider("$state", v).run(["$injector", function (a) {
        a.get("$state.runtime").autoinject && a.get("$state")
    }]), w.$inject = [], b.module("ui.router.state").provider("$view", w), b.module("ui.router.state").provider("$uiViewScroll", x), y.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], z.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", y), b.module("ui.router.state").directive("uiView", z), G.$inject = ["$state", "$timeout"], H.$inject = ["$state", "$timeout"], I.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", G).directive("uiSrefActive", I).directive("uiSrefActiveEq", I).directive("uiState", H), J.$inject = ["$state"], K.$inject = ["$state"], b.module("ui.router.state").filter("isState", J).filter("includedByState", K)
}(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.collapse", "ui.bootstrap.tabindex", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.datepicker", "ui.bootstrap.position", "ui.bootstrap.datepickerPopup", "ui.bootstrap.debounce", "ui.bootstrap.multiMap", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function ($animate, $q, $parse, $injector) {
    var $animateCss = $injector.has("$animateCss") ? $injector.get("$animateCss") : null;
    return {
        link: function (scope, element, attrs) {
            function getScrollFromElement(element) {
                return horizontal ? {width: element.scrollWidth + "px"} : {height: element.scrollHeight + "px"}
            }

            function expand() {
                element.hasClass("collapse") && element.hasClass("in") || $q.resolve(expandingExpr(scope)).then(function () {
                    element.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), $animateCss ? $animateCss(element, {
                        addClass: "in",
                        easing: "ease",
                        css: {overflow: "hidden"},
                        to: getScrollFromElement(element[0])
                    }).start().finally(expandDone) : $animate.addClass(element, "in", {
                        css: {overflow: "hidden"},
                        to: getScrollFromElement(element[0])
                    }).then(expandDone)
                }, angular.noop)
            }

            function expandDone() {
                element.removeClass("collapsing").addClass("collapse").css(css), expandedExpr(scope)
            }

            function collapse() {
                if (!element.hasClass("collapse") && !element.hasClass("in")) return collapseDone();
                $q.resolve(collapsingExpr(scope)).then(function () {
                    element.css(getScrollFromElement(element[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), $animateCss ? $animateCss(element, {
                        removeClass: "in",
                        to: cssTo
                    }).start().finally(collapseDone) : $animate.removeClass(element, "in", {to: cssTo}).then(collapseDone)
                }, angular.noop)
            }

            function collapseDone() {
                element.css(cssTo), element.removeClass("collapsing").addClass("collapse"), collapsedExpr(scope)
            }

            var expandingExpr = $parse(attrs.expanding), expandedExpr = $parse(attrs.expanded),
                collapsingExpr = $parse(attrs.collapsing), collapsedExpr = $parse(attrs.collapsed), horizontal = !1,
                css = {}, cssTo = {};
            !function () {
                horizontal = !!("horizontal" in attrs), horizontal ? (css = {width: ""}, cssTo = {width: "0"}) : (css = {height: ""}, cssTo = {height: "0"}), scope.$eval(attrs.uibCollapse) || element.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css(css)
            }(), scope.$watch(attrs.uibCollapse, function (shouldCollapse) {
                shouldCollapse ? collapse() : expand()
            })
        }
    }
}]), angular.module("ui.bootstrap.tabindex", []).directive("uibTabindexToggle", function () {
    return {
        restrict: "A", link: function (scope, elem, attrs) {
            attrs.$observe("disabled", function (disabled) {
                attrs.$set("tabindex", disabled ? -1 : null)
            })
        }
    }
}), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse", "ui.bootstrap.tabindex"]).constant("uibAccordionConfig", {closeOthers: !0}).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function ($scope, $attrs, accordionConfig) {
    this.groups = [], this.closeOthers = function (openGroup) {
        (angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers) && angular.forEach(this.groups, function (group) {
            group !== openGroup && (group.isOpen = !1)
        })
    }, this.addGroup = function (groupScope) {
        var that = this;
        this.groups.push(groupScope), groupScope.$on("$destroy", function (event) {
            that.removeGroup(groupScope)
        })
    }, this.removeGroup = function (group) {
        var index = this.groups.indexOf(group);
        -1 !== index && this.groups.splice(index, 1)
    }
}]).directive("uibAccordion", function () {
    return {
        controller: "UibAccordionController",
        controllerAs: "accordion",
        transclude: !0,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/accordion/accordion.html"
        }
    }
}).directive("uibAccordionGroup", function () {
    return {
        require: "^uibAccordion", transclude: !0, restrict: "A", templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/accordion/accordion-group.html"
        }, scope: {heading: "@", panelClass: "@?", isOpen: "=?", isDisabled: "=?"}, controller: function () {
            this.setHeading = function (element) {
                this.heading = element
            }
        }, link: function (scope, element, attrs, accordionCtrl) {
            element.addClass("panel"), accordionCtrl.addGroup(scope), scope.openClass = attrs.openClass || "panel-open", scope.panelClass = attrs.panelClass || "panel-default", scope.$watch("isOpen", function (value) {
                element.toggleClass(scope.openClass, !!value), value && accordionCtrl.closeOthers(scope)
            }),
                scope.toggleOpen = function ($event) {
                    scope.isDisabled || $event && 32 !== $event.which || (scope.isOpen = !scope.isOpen)
                };
            var id = "accordiongroup-" + scope.$id + "-" + Math.floor(1e4 * Math.random());
            scope.headingId = id + "-tab", scope.panelId = id + "-panel"
        }
    }
}).directive("uibAccordionHeading", function () {
    return {
        transclude: !0,
        template: "",
        replace: !0,
        require: "^uibAccordionGroup",
        link: function (scope, element, attrs, accordionGroupCtrl, transclude) {
            accordionGroupCtrl.setHeading(transclude(scope, angular.noop))
        }
    }
}).directive("uibAccordionTransclude", function () {
    return {
        require: "^uibAccordionGroup", link: function (scope, element, attrs, controller) {
            scope.$watch(function () {
                return controller[attrs.uibAccordionTransclude]
            }, function (heading) {
                if (heading) {
                    var elem = angular.element(element[0].querySelector("uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"));
                    elem.html(""), elem.append(heading)
                }
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$element", "$attrs", "$interpolate", "$timeout", function ($scope, $element, $attrs, $interpolate, $timeout) {
    $scope.closeable = !!$attrs.close, $element.addClass("alert"), $attrs.$set("role", "alert"), $scope.closeable && $element.addClass("alert-dismissible");
    var dismissOnTimeout = angular.isDefined($attrs.dismissOnTimeout) ? $interpolate($attrs.dismissOnTimeout)($scope.$parent) : null;
    dismissOnTimeout && $timeout(function () {
        $scope.close()
    }, parseInt(dismissOnTimeout, 10))
}]).directive("uibAlert", function () {
    return {
        controller: "UibAlertController",
        controllerAs: "alert",
        restrict: "A",
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/alert/alert.html"
        },
        transclude: !0,
        scope: {close: "&"}
    }
}), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("UibButtonsController", ["uibButtonConfig", function (buttonConfig) {
    this.activeClass = buttonConfig.activeClass || "active", this.toggleEvent = buttonConfig.toggleEvent || "click"
}]).directive("uibBtnRadio", ["$parse", function ($parse) {
    return {
        require: ["uibBtnRadio", "ngModel"],
        controller: "UibButtonsController",
        controllerAs: "buttons",
        link: function (scope, element, attrs, ctrls) {
            var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1], uncheckableExpr = $parse(attrs.uibUncheckable);
            element.find("input").css({display: "none"}), ngModelCtrl.$render = function () {
                element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.uibBtnRadio)))
            }, element.on(buttonsCtrl.toggleEvent, function () {
                if (!attrs.disabled) {
                    var isActive = element.hasClass(buttonsCtrl.activeClass);
                    isActive && !angular.isDefined(attrs.uncheckable) || scope.$apply(function () {
                        ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.uibBtnRadio)), ngModelCtrl.$render()
                    })
                }
            }), attrs.uibUncheckable && scope.$watch(uncheckableExpr, function (uncheckable) {
                attrs.$set("uncheckable", uncheckable ? "" : void 0)
            })
        }
    }
}]).directive("uibBtnCheckbox", function () {
    return {
        require: ["uibBtnCheckbox", "ngModel"],
        controller: "UibButtonsController",
        controllerAs: "button",
        link: function (scope, element, attrs, ctrls) {
            function getTrueValue() {
                return getCheckboxValue(attrs.btnCheckboxTrue, !0)
            }

            function getFalseValue() {
                return getCheckboxValue(attrs.btnCheckboxFalse, !1)
            }

            function getCheckboxValue(attribute, defaultValue) {
                return angular.isDefined(attribute) ? scope.$eval(attribute) : defaultValue
            }

            var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            element.find("input").css({display: "none"}), ngModelCtrl.$render = function () {
                element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()))
            }, element.on(buttonsCtrl.toggleEvent, function () {
                attrs.disabled || scope.$apply(function () {
                    ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue()), ngModelCtrl.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function ($scope, $element, $interval, $timeout, $animate) {
    function setActive(index) {
        for (var i = 0; i < slides.length; i++) slides[i].slide.active = i === index
    }

    function goNext(slide, index, direction) {
        if (!destroyed) {
            if (angular.extend(slide, {direction: direction}), angular.extend(slides[currentIndex].slide || {}, {direction: direction}), $animate.enabled($element) && !$scope.$currentTransition && slides[index].element && self.slides.length > 1) {
                slides[index].element.data(SLIDE_DIRECTION, slide.direction);
                var currentIdx = self.getCurrentIndex();
                angular.isNumber(currentIdx) && slides[currentIdx].element && slides[currentIdx].element.data(SLIDE_DIRECTION, slide.direction), $scope.$currentTransition = !0, $animate.on("addClass", slides[index].element, function (element, phase) {
                    "close" === phase && ($scope.$currentTransition = null, $animate.off("addClass", element))
                })
            }
            $scope.active = slide.index, currentIndex = slide.index, setActive(index), restartTimer()
        }
    }

    function findSlideIndex(slide) {
        for (var i = 0; i < slides.length; i++) if (slides[i].slide === slide) return i
    }

    function resetTimer() {
        currentInterval && ($interval.cancel(currentInterval), currentInterval = null)
    }

    function resetTransition(slides) {
        slides.length || ($scope.$currentTransition = null)
    }

    function restartTimer() {
        resetTimer();
        var interval = +$scope.interval;
        !isNaN(interval) && interval > 0 && (currentInterval = $interval(timerFn, interval))
    }

    function timerFn() {
        var interval = +$scope.interval;
        isPlaying && !isNaN(interval) && interval > 0 && slides.length ? $scope.next() : $scope.pause()
    }

    var currentInterval, isPlaying, self = this, slides = self.slides = $scope.slides = [],
        SLIDE_DIRECTION = "uib-slideDirection", currentIndex = $scope.active, destroyed = !1;
    $element.addClass("carousel"), self.addSlide = function (slide, element) {
        slides.push({slide: slide, element: element}), slides.sort(function (a, b) {
            return +a.slide.index - +b.slide.index
        }), (slide.index === $scope.active || 1 === slides.length && !angular.isNumber($scope.active)) && ($scope.$currentTransition && ($scope.$currentTransition = null), currentIndex = slide.index, $scope.active = slide.index, setActive(currentIndex), self.select(slides[findSlideIndex(slide)]), 1 === slides.length && $scope.play())
    }, self.getCurrentIndex = function () {
        for (var i = 0; i < slides.length; i++) if (slides[i].slide.index === currentIndex) return i
    }, self.next = $scope.next = function () {
        var newIndex = (self.getCurrentIndex() + 1) % slides.length;
        return 0 === newIndex && $scope.noWrap() ? void $scope.pause() : self.select(slides[newIndex], "next")
    }, self.prev = $scope.prev = function () {
        var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;
        return $scope.noWrap() && newIndex === slides.length - 1 ? void $scope.pause() : self.select(slides[newIndex], "prev")
    }, self.removeSlide = function (slide) {
        var index = findSlideIndex(slide);
        slides.splice(index, 1), slides.length > 0 && currentIndex === index ? index >= slides.length ? (currentIndex = slides.length - 1, $scope.active = currentIndex, setActive(currentIndex), self.select(slides[slides.length - 1])) : (currentIndex = index, $scope.active = currentIndex, setActive(currentIndex), self.select(slides[index])) : currentIndex > index && (currentIndex--, $scope.active = currentIndex), 0 === slides.length && (currentIndex = null, $scope.active = null)
    }, self.select = $scope.select = function (nextSlide, direction) {
        var nextIndex = findSlideIndex(nextSlide.slide);
        void 0 === direction && (direction = nextIndex > self.getCurrentIndex() ? "next" : "prev"), nextSlide.slide.index === currentIndex || $scope.$currentTransition || goNext(nextSlide.slide, nextIndex, direction)
    }, $scope.indexOfSlide = function (slide) {
        return +slide.slide.index
    }, $scope.isActive = function (slide) {
        return $scope.active === slide.slide.index
    }, $scope.isPrevDisabled = function () {
        return 0 === $scope.active && $scope.noWrap()
    }, $scope.isNextDisabled = function () {
        return $scope.active === slides.length - 1 && $scope.noWrap()
    }, $scope.pause = function () {
        $scope.noPause || (isPlaying = !1, resetTimer())
    }, $scope.play = function () {
        isPlaying || (isPlaying = !0, restartTimer())
    }, $element.on("mouseenter", $scope.pause), $element.on("mouseleave", $scope.play), $scope.$on("$destroy", function () {
        destroyed = !0, resetTimer()
    }), $scope.$watch("noTransition", function (noTransition) {
        $animate.enabled($element, !noTransition)
    }), $scope.$watch("interval", restartTimer), $scope.$watchCollection("slides", resetTransition), $scope.$watch("active", function (index) {
        if (angular.isNumber(index) && currentIndex !== index) {
            for (var i = 0; i < slides.length; i++) if (slides[i].slide.index === index) {
                index = i;
                break
            }
            slides[index] && (setActive(index), self.select(slides[index]), currentIndex = index)
        }
    })
}]).directive("uibCarousel", function () {
    return {
        transclude: !0,
        controller: "UibCarouselController",
        controllerAs: "carousel",
        restrict: "A",
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/carousel/carousel.html"
        },
        scope: {active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&"}
    }
}).directive("uibSlide", ["$animate", function ($animate) {
    return {
        require: "^uibCarousel", restrict: "A", transclude: !0, templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/carousel/slide.html"
        }, scope: {actual: "=?", index: "=?"}, link: function (scope, element, attrs, carouselCtrl) {
            element.addClass("item"), carouselCtrl.addSlide(scope, element), scope.$on("$destroy", function () {
                carouselCtrl.removeSlide(scope)
            }), scope.$watch("active", function (active) {
                $animate[active ? "addClass" : "removeClass"](element, "active")
            })
        }
    }
}]).animation(".item", ["$animateCss", function ($animateCss) {
    function removeClass(element, className, callback) {
        element.removeClass(className), callback && callback()
    }

    return {
        beforeAddClass: function (element, className, done) {
            if ("active" === className) {
                var stopped = !1, direction = element.data("uib-slideDirection"),
                    directionClass = "next" === direction ? "left" : "right",
                    removeClassFn = removeClass.bind(this, element, directionClass + " " + direction, done);
                return element.addClass(direction), $animateCss(element, {addClass: directionClass}).start().done(removeClassFn), function () {
                    stopped = !0
                }
            }
            done()
        }, beforeRemoveClass: function (element, className, done) {
            if ("active" === className) {
                var stopped = !1, direction = element.data("uib-slideDirection"),
                    directionClass = "next" === direction ? "left" : "right",
                    removeClassFn = removeClass.bind(this, element, directionClass, done);
                return $animateCss(element, {addClass: directionClass}).start().done(removeClassFn), function () {
                    stopped = !0
                }
            }
            done()
        }
    }
}]), angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "dateFilter", "orderByFilter", "filterFilter", function ($log, $locale, dateFilter, orderByFilter, filterFilter) {
    function getFormatCodeToRegex(key) {
        return filterFilter(formatCodeToRegex, {key: key}, !0)[0]
    }

    function createParser(format) {
        var map = [], regex = format.split(""), quoteIndex = format.indexOf("'");
        if (quoteIndex > -1) {
            var inLiteral = !1;
            format = format.split("");
            for (var i = quoteIndex; i < format.length; i++) inLiteral ? ("'" === format[i] && (i + 1 < format.length && "'" === format[i + 1] ? (format[i + 1] = "$", regex[i + 1] = "") : (regex[i] = "", inLiteral = !1)), format[i] = "$") : "'" === format[i] && (format[i] = "$", regex[i] = "", inLiteral = !0);
            format = format.join("")
        }
        return angular.forEach(formatCodeToRegex, function (data) {
            var index = format.indexOf(data.key);
            if (index > -1) {
                format = format.split(""), regex[index] = "(" + data.regex + ")", format[index] = "$";
                for (var i = index + 1, n = index + data.key.length; i < n; i++) regex[i] = "", format[i] = "$";
                format = format.join(""), map.push({
                    index: index,
                    key: data.key,
                    apply: data.apply,
                    matcher: data.regex
                })
            }
        }), {regex: new RegExp("^" + regex.join("") + "$"), map: orderByFilter(map, "index")}
    }

    function createFormatter(format) {
        for (var formatter, literalIdx, formatters = [], i = 0; i < format.length;) if (angular.isNumber(literalIdx)) {
            if ("'" === format.charAt(i)) (i + 1 >= format.length || "'" !== format.charAt(i + 1)) && (formatters.push(constructLiteralFormatter(format, literalIdx, i)), literalIdx = null); else if (i === format.length) for (; literalIdx < format.length;) formatter = constructFormatterFromIdx(format, literalIdx), formatters.push(formatter), literalIdx = formatter.endIdx;
            i++
        } else "'" !== format.charAt(i) ? (formatter = constructFormatterFromIdx(format, i), formatters.push(formatter.parser), i = formatter.endIdx) : (literalIdx = i, i++);
        return formatters
    }

    function constructLiteralFormatter(format, literalIdx, endIdx) {
        return function () {
            return format.substr(literalIdx + 1, endIdx - literalIdx - 1)
        }
    }

    function constructFormatterFromIdx(format, i) {
        for (var currentPosStr = format.substr(i), j = 0; j < formatCodeToRegex.length; j++) if (new RegExp("^" + formatCodeToRegex[j].key).test(currentPosStr)) {
            var data = formatCodeToRegex[j];
            return {endIdx: i + data.key.length, parser: data.formatter}
        }
        return {
            endIdx: i + 1, parser: function () {
                return currentPosStr.charAt(0)
            }
        }
    }

    function isValid(year, month, date) {
        return !(date < 1) && (1 === month && date > 28 ? 29 === date && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) : 3 !== month && 5 !== month && 8 !== month && 10 !== month || date < 31)
    }

    function toInt(str) {
        return parseInt(str, 10)
    }

    function toTimezone(date, timezone) {
        return date && timezone ? convertTimezoneToLocal(date, timezone) : date
    }

    function fromTimezone(date, timezone) {
        return date && timezone ? convertTimezoneToLocal(date, timezone, !0) : date
    }

    function timezoneToOffset(timezone, fallback) {
        timezone = timezone.replace(/:/g, "");
        var requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset
    }

    function addDateMinutes(date, minutes) {
        return date = new Date(date.getTime()), date.setMinutes(date.getMinutes() + minutes), date
    }

    function convertTimezoneToLocal(date, timezone, reverse) {
        reverse = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset();
        return addDateMinutes(date, reverse * (timezoneToOffset(timezone, dateTimezoneOffset) - dateTimezoneOffset))
    }

    var localeId, formatCodeToRegex;
    this.init = function () {
        localeId = $locale.id, this.parsers = {}, this.formatters = {}, formatCodeToRegex = [{
            key: "yyyy",
            regex: "\\d{4}",
            apply: function (value) {
                this.year = +value
            },
            formatter: function (date) {
                var _date = new Date;
                return _date.setFullYear(Math.abs(date.getFullYear())), dateFilter(_date, "yyyy")
            }
        }, {
            key: "yy", regex: "\\d{2}", apply: function (value) {
                value = +value, this.year = value < 69 ? value + 2e3 : value + 1900
            }, formatter: function (date) {
                var _date = new Date;
                return _date.setFullYear(Math.abs(date.getFullYear())), dateFilter(_date, "yy")
            }
        }, {
            key: "y", regex: "\\d{1,4}", apply: function (value) {
                this.year = +value
            }, formatter: function (date) {
                var _date = new Date;
                return _date.setFullYear(Math.abs(date.getFullYear())), dateFilter(_date, "y")
            }
        }, {
            key: "M!", regex: "0?[1-9]|1[0-2]", apply: function (value) {
                this.month = value - 1
            }, formatter: function (date) {
                return /^[0-9]$/.test(date.getMonth()) ? dateFilter(date, "MM") : dateFilter(date, "M")
            }
        }, {
            key: "MMMM", regex: $locale.DATETIME_FORMATS.MONTH.join("|"), apply: function (value) {
                this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value)
            }, formatter: function (date) {
                return dateFilter(date, "MMMM")
            }
        }, {
            key: "MMM", regex: $locale.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (value) {
                this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value)
            }, formatter: function (date) {
                return dateFilter(date, "MMM")
            }
        }, {
            key: "MM", regex: "0[1-9]|1[0-2]", apply: function (value) {
                this.month = value - 1
            }, formatter: function (date) {
                return dateFilter(date, "MM")
            }
        }, {
            key: "M", regex: "[1-9]|1[0-2]", apply: function (value) {
                this.month = value - 1
            }, formatter: function (date) {
                return dateFilter(date, "M")
            }
        }, {
            key: "d!", regex: "[0-2]?[0-9]{1}|3[0-1]{1}", apply: function (value) {
                this.date = +value
            }, formatter: function (date) {
                return /^[1-9]$/.test(date.getDate()) ? dateFilter(date, "dd") : dateFilter(date, "d")
            }
        }, {
            key: "dd", regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (value) {
                this.date = +value
            }, formatter: function (date) {
                return dateFilter(date, "dd")
            }
        }, {
            key: "d", regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (value) {
                this.date = +value
            }, formatter: function (date) {
                return dateFilter(date, "d")
            }
        }, {
            key: "EEEE", regex: $locale.DATETIME_FORMATS.DAY.join("|"), formatter: function (date) {
                return dateFilter(date, "EEEE")
            }
        }, {
            key: "EEE", regex: $locale.DATETIME_FORMATS.SHORTDAY.join("|"), formatter: function (date) {
                return dateFilter(date, "EEE")
            }
        }, {
            key: "HH", regex: "(?:0|1)[0-9]|2[0-3]", apply: function (value) {
                this.hours = +value
            }, formatter: function (date) {
                return dateFilter(date, "HH")
            }
        }, {
            key: "hh", regex: "0[0-9]|1[0-2]", apply: function (value) {
                this.hours = +value
            }, formatter: function (date) {
                return dateFilter(date, "hh")
            }
        }, {
            key: "H", regex: "1?[0-9]|2[0-3]", apply: function (value) {
                this.hours = +value
            }, formatter: function (date) {
                return dateFilter(date, "H")
            }
        }, {
            key: "h", regex: "[0-9]|1[0-2]", apply: function (value) {
                this.hours = +value
            }, formatter: function (date) {
                return dateFilter(date, "h")
            }
        }, {
            key: "mm", regex: "[0-5][0-9]", apply: function (value) {
                this.minutes = +value
            }, formatter: function (date) {
                return dateFilter(date, "mm")
            }
        }, {
            key: "m", regex: "[0-9]|[1-5][0-9]", apply: function (value) {
                this.minutes = +value
            }, formatter: function (date) {
                return dateFilter(date, "m")
            }
        }, {
            key: "sss", regex: "[0-9][0-9][0-9]", apply: function (value) {
                this.milliseconds = +value
            }, formatter: function (date) {
                return dateFilter(date, "sss")
            }
        }, {
            key: "ss", regex: "[0-5][0-9]", apply: function (value) {
                this.seconds = +value
            }, formatter: function (date) {
                return dateFilter(date, "ss")
            }
        }, {
            key: "s", regex: "[0-9]|[1-5][0-9]", apply: function (value) {
                this.seconds = +value
            }, formatter: function (date) {
                return dateFilter(date, "s")
            }
        }, {
            key: "a", regex: $locale.DATETIME_FORMATS.AMPMS.join("|"), apply: function (value) {
                12 === this.hours && (this.hours = 0), "PM" === value && (this.hours += 12)
            }, formatter: function (date) {
                return dateFilter(date, "a")
            }
        }, {
            key: "Z", regex: "[+-]\\d{4}", apply: function (value) {
                var matches = value.match(/([+-])(\d{2})(\d{2})/), sign = matches[1], hours = matches[2],
                    minutes = matches[3];
                this.hours += toInt(sign + hours), this.minutes += toInt(sign + minutes)
            }, formatter: function (date) {
                return dateFilter(date, "Z")
            }
        }, {
            key: "ww", regex: "[0-4][0-9]|5[0-3]", formatter: function (date) {
                return dateFilter(date, "ww")
            }
        }, {
            key: "w", regex: "[0-9]|[1-4][0-9]|5[0-3]", formatter: function (date) {
                return dateFilter(date, "w")
            }
        }, {
            key: "GGGG",
            regex: $locale.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g, "\\s"),
            formatter: function (date) {
                return dateFilter(date, "GGGG")
            }
        }, {
            key: "GGG", regex: $locale.DATETIME_FORMATS.ERAS.join("|"), formatter: function (date) {
                return dateFilter(date, "GGG")
            }
        }, {
            key: "GG", regex: $locale.DATETIME_FORMATS.ERAS.join("|"), formatter: function (date) {
                return dateFilter(date, "GG")
            }
        }, {
            key: "G", regex: $locale.DATETIME_FORMATS.ERAS.join("|"), formatter: function (date) {
                return dateFilter(date, "G")
            }
        }], angular.version.major >= 1 && angular.version.minor > 4 && formatCodeToRegex.push({
            key: "LLLL",
            regex: $locale.DATETIME_FORMATS.STANDALONEMONTH.join("|"),
            apply: function (value) {
                this.month = $locale.DATETIME_FORMATS.STANDALONEMONTH.indexOf(value)
            },
            formatter: function (date) {
                return dateFilter(date, "LLLL")
            }
        })
    }, this.init(), this.getParser = function (key) {
        var f = getFormatCodeToRegex(key);
        return f && f.apply || null
    }, this.overrideParser = function (key, parser) {
        var f = getFormatCodeToRegex(key);
        f && angular.isFunction(parser) && (this.parsers = {}, f.apply = parser)
    }.bind(this), this.filter = function (date, format) {
        return angular.isDate(date) && !isNaN(date) && format ? (format = $locale.DATETIME_FORMATS[format] || format, $locale.id !== localeId && this.init(), this.formatters[format] || (this.formatters[format] = createFormatter(format)), this.formatters[format].reduce(function (str, formatter) {
            return str + formatter(date)
        }, "")) : ""
    }, this.parse = function (input, format, baseDate) {
        if (!angular.isString(input) || !format) return input;
        format = $locale.DATETIME_FORMATS[format] || format, format = format.replace(/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, "\\$&"), $locale.id !== localeId && this.init(), this.parsers[format] || (this.parsers[format] = createParser(format));
        var parser = this.parsers[format], regex = parser.regex, map = parser.map, results = input.match(regex),
            tzOffset = !1;
        if (results && results.length) {
            var fields, dt;
            angular.isDate(baseDate) && !isNaN(baseDate.getTime()) ? fields = {
                year: baseDate.getFullYear(),
                month: baseDate.getMonth(),
                date: baseDate.getDate(),
                hours: baseDate.getHours(),
                minutes: baseDate.getMinutes(),
                seconds: baseDate.getSeconds(),
                milliseconds: baseDate.getMilliseconds()
            } : (baseDate && $log.warn("dateparser:", "baseDate is not a valid date"), fields = {
                year: 1900,
                month: 0,
                date: 1,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            });
            for (var i = 1, n = results.length; i < n; i++) {
                var mapper = map[i - 1];
                "Z" === mapper.matcher && (tzOffset = !0), mapper.apply && mapper.apply.call(fields, results[i])
            }
            var datesetter = tzOffset ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear,
                timesetter = tzOffset ? Date.prototype.setUTCHours : Date.prototype.setHours;
            return isValid(fields.year, fields.month, fields.date) && (!angular.isDate(baseDate) || isNaN(baseDate.getTime()) || tzOffset ? (dt = new Date(0), datesetter.call(dt, fields.year, fields.month, fields.date), timesetter.call(dt, fields.hours || 0, fields.minutes || 0, fields.seconds || 0, fields.milliseconds || 0)) : (dt = new Date(baseDate), datesetter.call(dt, fields.year, fields.month, fields.date), timesetter.call(dt, fields.hours, fields.minutes, fields.seconds, fields.milliseconds))), dt
        }
    }, this.toTimezone = toTimezone, this.fromTimezone = fromTimezone, this.timezoneToOffset = timezoneToOffset, this.addDateMinutes = addDateMinutes, this.convertTimezoneToLocal = convertTimezoneToLocal
}]), angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", ["$animate", function ($animate) {
    var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
    return {
        restrict: "A", compile: function (tElement, tAttrs) {
            function linkFn(scope, element, attrs) {
                linkedScopes.push(scope), instances.push({
                    scope: scope,
                    element: element
                }), exps.forEach(function (exp, k) {
                    addForExp(exp, scope)
                }), scope.$on("$destroy", removeScope)
            }

            function addForExp(exp, scope) {
                var matches = exp.match(IS_REGEXP), clazz = scope.$eval(matches[1]), compareWithExp = matches[2],
                    data = expToData[exp];
                if (!data) {
                    var watchFn = function (compareWithVal) {
                        var newActivated = null;
                        instances.some(function (instance) {
                            if (instance.scope.$eval(onExp) === compareWithVal) return newActivated = instance, !0
                        }), data.lastActivated !== newActivated && (data.lastActivated && $animate.removeClass(data.lastActivated.element, clazz), newActivated && $animate.addClass(newActivated.element, clazz), data.lastActivated = newActivated)
                    };
                    expToData[exp] = data = {
                        lastActivated: null,
                        scope: scope,
                        watchFn: watchFn,
                        compareWithExp: compareWithExp,
                        watcher: scope.$watch(compareWithExp, watchFn)
                    }
                }
                data.watchFn(scope.$eval(compareWithExp))
            }

            function removeScope(e) {
                var removedScope = e.targetScope, index = linkedScopes.indexOf(removedScope);
                if (linkedScopes.splice(index, 1), instances.splice(index, 1), linkedScopes.length) {
                    var newWatchScope = linkedScopes[0];
                    angular.forEach(expToData, function (data) {
                        data.scope === removedScope && (data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn), data.scope = newWatchScope)
                    })
                } else expToData = {}
            }

            var linkedScopes = [], instances = [], expToData = {},
                onExpMatches = tAttrs.uibIsClass.match(/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/), onExp = onExpMatches[2],
                expsStr = onExpMatches[1], exps = expsStr.split(",");
            return linkFn
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.isClass"]).value("$datepickerSuppressError", !1).value("$datepickerLiteralWarning", !0).constant("uibDatepickerConfig", {
    datepickerMode: "day",
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    maxDate: null,
    maxMode: "year",
    minDate: null,
    minMode: "day",
    monthColumns: 3,
    ngModelOptions: {},
    shortcutPropagation: !1,
    showWeeks: !0,
    yearColumns: 5,
    yearRows: 4
}).controller("UibDatepickerController", ["$scope", "$element", "$attrs", "$parse", "$interpolate", "$locale", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerLiteralWarning", "$datepickerSuppressError", "uibDateParser", function ($scope, $element, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
    function setMode(mode) {
        $scope.datepickerMode = mode, $scope.datepickerOptions.datepickerMode = mode
    }

    function extractOptions(ngModelCtrl) {
        var ngModelOptions;
        if (angular.version.minor < 6) ngModelOptions = ngModelCtrl.$options || $scope.datepickerOptions.ngModelOptions || datepickerConfig.ngModelOptions || {}, ngModelOptions.getOption = function (key) {
            return ngModelOptions[key]
        }; else {
            var timezone = ngModelCtrl.$options.getOption("timezone") || ($scope.datepickerOptions.ngModelOptions ? $scope.datepickerOptions.ngModelOptions.timezone : null) || (datepickerConfig.ngModelOptions ? datepickerConfig.ngModelOptions.timezone : null);
            ngModelOptions = ngModelCtrl.$options.createChild(datepickerConfig.ngModelOptions).createChild($scope.datepickerOptions.ngModelOptions).createChild(ngModelCtrl.$options).createChild({timezone: timezone})
        }
        return ngModelOptions
    }

    var self = this, ngModelCtrl = {$setViewValue: angular.noop}, ngModelOptions = {}, watchListeners = [];
    $element.addClass("uib-datepicker"), $attrs.$set("role", "application"), $scope.datepickerOptions || ($scope.datepickerOptions = {}), this.modes = ["day", "month", "year"], ["customClass", "dateDisabled", "datepickerMode", "formatDay", "formatDayHeader", "formatDayTitle", "formatMonth", "formatMonthTitle", "formatYear", "maxDate", "maxMode", "minDate", "minMode", "monthColumns", "showWeeks", "shortcutPropagation", "startingDay", "yearColumns", "yearRows"].forEach(function (key) {
        switch (key) {
            case"customClass":
            case"dateDisabled":
                $scope[key] = $scope.datepickerOptions[key] || angular.noop;
                break;
            case"datepickerMode":
                $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ? $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
                break;
            case"formatDay":
            case"formatDayHeader":
            case"formatDayTitle":
            case"formatMonth":
            case"formatMonthTitle":
            case"formatYear":
                self[key] = angular.isDefined($scope.datepickerOptions[key]) ? $interpolate($scope.datepickerOptions[key])($scope.$parent) : datepickerConfig[key];
                break;
            case"monthColumns":
            case"showWeeks":
            case"shortcutPropagation":
            case"yearColumns":
            case"yearRows":
                self[key] = angular.isDefined($scope.datepickerOptions[key]) ? $scope.datepickerOptions[key] : datepickerConfig[key];
                break;
            case"startingDay":
                angular.isDefined($scope.datepickerOptions.startingDay) ? self.startingDay = $scope.datepickerOptions.startingDay : angular.isNumber(datepickerConfig.startingDay) ? self.startingDay = datepickerConfig.startingDay : self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
                break;
            case"maxDate":
            case"minDate":
                $scope.$watch("datepickerOptions." + key, function (value) {
                    value ? angular.isDate(value) ? self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.getOption("timezone")) : ($datepickerLiteralWarning && $log.warn("Literal date support has been deprecated, please switch to date object usage"), self[key] = new Date(dateFilter(value, "medium"))) : self[key] = datepickerConfig[key] ? dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.getOption("timezone")) : null, self.refreshView()
                });
                break;
            case"maxMode":
            case"minMode":
                $scope.datepickerOptions[key] ? $scope.$watch(function () {
                    return $scope.datepickerOptions[key]
                }, function (value) {
                    self[key] = $scope[key] = angular.isDefined(value) ? value : $scope.datepickerOptions[key], ("minMode" === key && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) || "maxMode" === key && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) && ($scope.datepickerMode = self[key], $scope.datepickerOptions.datepickerMode = self[key])
                }) : self[key] = $scope[key] = datepickerConfig[key] || null
        }
    }), $scope.uniqueId = "datepicker-" + $scope.$id + "-" + Math.floor(1e4 * Math.random()), $scope.disabled = angular.isDefined($attrs.disabled) || !1, angular.isDefined($attrs.ngDisabled) && watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function (disabled) {
        $scope.disabled = disabled, self.refreshView()
    })), $scope.isActive = function (dateObject) {
        return 0 === self.compare(dateObject.date, self.activeDate) && ($scope.activeDateId = dateObject.uid, !0)
    }, this.init = function (ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_, ngModelOptions = extractOptions(ngModelCtrl), $scope.datepickerOptions.initDate ? (self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.getOption("timezone")) || new Date, $scope.$watch("datepickerOptions.initDate", function (initDate) {
            initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid) && (self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.getOption("timezone")), self.refreshView())
        })) : self.activeDate = new Date;
        var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date;
        this.activeDate = isNaN(date) ? dateParser.fromTimezone(new Date, ngModelOptions.getOption("timezone")) : dateParser.fromTimezone(date, ngModelOptions.getOption("timezone")), ngModelCtrl.$render = function () {
            self.render()
        }
    }, this.render = function () {
        if (ngModelCtrl.$viewValue) {
            var date = new Date(ngModelCtrl.$viewValue);
            !isNaN(date) ? this.activeDate = dateParser.fromTimezone(date, ngModelOptions.getOption("timezone")) : $datepickerSuppressError || $log.error('Datepicker directive: "ng-model" value must be a Date object')
        }
        this.refreshView()
    }, this.refreshView = function () {
        if (this.element) {
            $scope.selectedDt = null, this._refreshView(), $scope.activeDt && ($scope.activeDateId = $scope.activeDt.uid);
            var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
            date = dateParser.fromTimezone(date, ngModelOptions.getOption("timezone")), ngModelCtrl.$setValidity("dateDisabled", !date || this.element && !this.isDisabled(date))
        }
    }, this.createDateObject = function (date, format) {
        var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
        model = dateParser.fromTimezone(model, ngModelOptions.getOption("timezone"));
        var today = new Date;
        today = dateParser.fromTimezone(today, ngModelOptions.getOption("timezone"));
        var time = this.compare(date, today), dt = {
            date: date,
            label: dateParser.filter(date, format),
            selected: model && 0 === this.compare(date, model),
            disabled: this.isDisabled(date),
            past: time < 0,
            current: 0 === time,
            future: time > 0,
            customClass: this.customClass(date) || null
        };
        return model && 0 === this.compare(date, model) && ($scope.selectedDt = dt), self.activeDate && 0 === this.compare(dt.date, self.activeDate) && ($scope.activeDt = dt), dt
    }, this.isDisabled = function (date) {
        return $scope.disabled || this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0 || $scope.dateDisabled && $scope.dateDisabled({
            date: date,
            mode: $scope.datepickerMode
        })
    }, this.customClass = function (date) {
        return $scope.customClass({date: date, mode: $scope.datepickerMode})
    }, this.split = function (arr, size) {
        for (var arrays = []; arr.length > 0;) arrays.push(arr.splice(0, size));
        return arrays
    }, $scope.select = function (date) {
        if ($scope.datepickerMode === self.minMode) {
            var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.getOption("timezone")) : new Date(0, 0, 0, 0, 0, 0, 0);
            dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate()), dt = dateParser.toTimezone(dt, ngModelOptions.getOption("timezone")), ngModelCtrl.$setViewValue(dt), ngModelCtrl.$render()
        } else self.activeDate = date, setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]), $scope.$emit("uib:datepicker.mode");
        $scope.$broadcast("uib:datepicker.focus")
    }, $scope.move = function (direction) {
        var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
            month = self.activeDate.getMonth() + direction * (self.step.months || 0);
        self.activeDate.setFullYear(year, month, 1), self.refreshView()
    }, $scope.toggleMode = function (direction) {
        direction = direction || 1, $scope.datepickerMode === self.maxMode && 1 === direction || $scope.datepickerMode === self.minMode && -1 === direction || (setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]), $scope.$emit("uib:datepicker.mode"))
    }, $scope.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var focusElement = function () {
        self.element[0].focus()
    };
    $scope.$on("uib:datepicker.focus", focusElement), $scope.keydown = function (evt) {
        var key = $scope.keys[evt.which];
        if (key && !evt.shiftKey && !evt.altKey && !$scope.disabled) if (evt.preventDefault(), self.shortcutPropagation || evt.stopPropagation(), "enter" === key || "space" === key) {
            if (self.isDisabled(self.activeDate)) return;
            $scope.select(self.activeDate)
        } else !evt.ctrlKey || "up" !== key && "down" !== key ? (self.handleKeyDown(key, evt), self.refreshView()) : $scope.toggleMode("up" === key ? 1 : -1)
    }, $element.on("keydown", function (evt) {
        $scope.$apply(function () {
            $scope.keydown(evt)
        })
    }), $scope.$on("$destroy", function () {
        for (; watchListeners.length;) watchListeners.shift()()
    })
}]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function (scope, $element, dateFilter) {
    function getDaysInMonth(year, month) {
        return 1 !== month || year % 4 != 0 || year % 100 == 0 && year % 400 != 0 ? DAYS_IN_MONTH[month] : 29
    }

    function getISO8601WeekNumber(date) {
        var checkDate = new Date(date)
        ;checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        return checkDate.setMonth(0), checkDate.setDate(1), Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1
    }

    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.step = {months: 1}, this.element = $element, this.init = function (ctrl) {
        angular.extend(ctrl, this), scope.showWeeks = ctrl.showWeeks, ctrl.refreshView()
    }, this.getDates = function (startDate, n) {
        for (var date, dates = new Array(n), current = new Date(startDate), i = 0; i < n;) date = new Date(current), dates[i++] = date, current.setDate(current.getDate() + 1);
        return dates
    }, this._refreshView = function () {
        var year = this.activeDate.getFullYear(), month = this.activeDate.getMonth(),
            firstDayOfMonth = new Date(this.activeDate);
        firstDayOfMonth.setFullYear(year, month, 1);
        var difference = this.startingDay - firstDayOfMonth.getDay(),
            numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference,
            firstDate = new Date(firstDayOfMonth);
        numDisplayedFromPreviousMonth > 0 && firstDate.setDate(1 - numDisplayedFromPreviousMonth);
        for (var days = this.getDates(firstDate, 42), i = 0; i < 42; i++) days[i] = angular.extend(this.createDateObject(days[i], this.formatDay), {
            secondary: days[i].getMonth() !== month,
            uid: scope.uniqueId + "-" + i
        });
        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) scope.labels[j] = {
            abbr: dateFilter(days[j].date, this.formatDayHeader),
            full: dateFilter(days[j].date, "EEEE")
        };
        if (scope.title = dateFilter(this.activeDate, this.formatDayTitle), scope.rows = this.split(days, 7), scope.showWeeks) {
            scope.weekNumbers = [];
            for (var thursdayIndex = (11 - this.startingDay) % 7, numWeeks = scope.rows.length, curWeek = 0; curWeek < numWeeks; curWeek++) scope.weekNumbers.push(getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date))
        }
    }, this.compare = function (date1, date2) {
        var _date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()),
            _date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        return _date1.setFullYear(date1.getFullYear()), _date2.setFullYear(date2.getFullYear()), _date1 - _date2
    }, this.handleKeyDown = function (key, evt) {
        var date = this.activeDate.getDate();
        if ("left" === key) date -= 1; else if ("up" === key) date -= 7; else if ("right" === key) date += 1; else if ("down" === key) date += 7; else if ("pageup" === key || "pagedown" === key) {
            var month = this.activeDate.getMonth() + ("pageup" === key ? -1 : 1);
            this.activeDate.setMonth(month, 1), date = Math.min(getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()), date)
        } else "home" === key ? date = 1 : "end" === key && (date = getDaysInMonth(this.activeDate.getFullYear(), this.activeDate.getMonth()));
        this.activeDate.setDate(date)
    }
}]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function (scope, $element, dateFilter) {
    this.step = {years: 1}, this.element = $element, this.init = function (ctrl) {
        angular.extend(ctrl, this), ctrl.refreshView()
    }, this._refreshView = function () {
        for (var date, months = new Array(12), year = this.activeDate.getFullYear(), i = 0; i < 12; i++) date = new Date(this.activeDate), date.setFullYear(year, i, 1), months[i] = angular.extend(this.createDateObject(date, this.formatMonth), {uid: scope.uniqueId + "-" + i});
        scope.title = dateFilter(this.activeDate, this.formatMonthTitle), scope.rows = this.split(months, this.monthColumns), scope.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1
    }, this.compare = function (date1, date2) {
        var _date1 = new Date(date1.getFullYear(), date1.getMonth()),
            _date2 = new Date(date2.getFullYear(), date2.getMonth());
        return _date1.setFullYear(date1.getFullYear()), _date2.setFullYear(date2.getFullYear()), _date1 - _date2
    }, this.handleKeyDown = function (key, evt) {
        var date = this.activeDate.getMonth();
        if ("left" === key) date -= 1; else if ("up" === key) date -= this.monthColumns; else if ("right" === key) date += 1; else if ("down" === key) date += this.monthColumns; else if ("pageup" === key || "pagedown" === key) {
            var year = this.activeDate.getFullYear() + ("pageup" === key ? -1 : 1);
            this.activeDate.setFullYear(year)
        } else "home" === key ? date = 0 : "end" === key && (date = 11);
        this.activeDate.setMonth(date)
    }
}]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function (scope, $element, dateFilter) {
    function getStartingYear(year) {
        return parseInt((year - 1) / range, 10) * range + 1
    }

    var columns, range;
    this.element = $element, this.yearpickerInit = function () {
        columns = this.yearColumns, range = this.yearRows * columns, this.step = {years: range}
    }, this._refreshView = function () {
        for (var date, years = new Array(range), i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) date = new Date(this.activeDate), date.setFullYear(start + i, 0, 1), years[i] = angular.extend(this.createDateObject(date, this.formatYear), {uid: scope.uniqueId + "-" + i});
        scope.title = [years[0].label, years[range - 1].label].join(" - "), scope.rows = this.split(years, columns), scope.columns = columns
    }, this.compare = function (date1, date2) {
        return date1.getFullYear() - date2.getFullYear()
    }, this.handleKeyDown = function (key, evt) {
        var date = this.activeDate.getFullYear();
        "left" === key ? date -= 1 : "up" === key ? date -= columns : "right" === key ? date += 1 : "down" === key ? date += columns : "pageup" === key || "pagedown" === key ? date += ("pageup" === key ? -1 : 1) * range : "home" === key ? date = getStartingYear(this.activeDate.getFullYear()) : "end" === key && (date = getStartingYear(this.activeDate.getFullYear()) + range - 1), this.activeDate.setFullYear(date)
    }
}]).directive("uibDatepicker", function () {
    return {
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/datepicker/datepicker.html"
        },
        scope: {datepickerOptions: "=?"},
        require: ["uibDatepicker", "^ngModel"],
        restrict: "A",
        controller: "UibDatepickerController",
        controllerAs: "datepicker",
        link: function (scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            datepickerCtrl.init(ngModelCtrl)
        }
    }
}).directive("uibDaypicker", function () {
    return {
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/datepicker/day.html"
        },
        require: ["^uibDatepicker", "uibDaypicker"],
        restrict: "A",
        controller: "UibDaypickerController",
        link: function (scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0];
            ctrls[1].init(datepickerCtrl)
        }
    }
}).directive("uibMonthpicker", function () {
    return {
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/datepicker/month.html"
        },
        require: ["^uibDatepicker", "uibMonthpicker"],
        restrict: "A",
        controller: "UibMonthpickerController",
        link: function (scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0];
            ctrls[1].init(datepickerCtrl)
        }
    }
}).directive("uibYearpicker", function () {
    return {
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/datepicker/year.html"
        },
        require: ["^uibDatepicker", "uibYearpicker"],
        restrict: "A",
        controller: "UibYearpickerController",
        link: function (scope, element, attrs, ctrls) {
            var ctrl = ctrls[0];
            angular.extend(ctrl, ctrls[1]), ctrl.yearpickerInit(), ctrl.refreshView()
        }
    }
}), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function ($document, $window) {
    var SCROLLBAR_WIDTH, BODY_SCROLLBAR_WIDTH,
        OVERFLOW_REGEX = {normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/}, PLACEMENT_REGEX = {
            auto: /\s?auto?\s?/i,
            primary: /^(top|bottom|left|right)$/,
            secondary: /^(top|bottom|left|right|center)$/,
            vertical: /^(top|bottom)$/
        }, BODY_REGEX = /(HTML|BODY)/;
    return {
        getRawNode: function (elem) {
            return elem.nodeName ? elem : elem[0] || elem
        }, parseStyle: function (value) {
            return value = parseFloat(value), isFinite(value) ? value : 0
        }, offsetParent: function (elem) {
            elem = this.getRawNode(elem);
            for (var offsetParent = elem.offsetParent || $document[0].documentElement; offsetParent && offsetParent !== $document[0].documentElement && function (el) {
                return "static" === ($window.getComputedStyle(el).position || "static")
            }(offsetParent);) offsetParent = offsetParent.offsetParent;
            return offsetParent || $document[0].documentElement
        }, scrollbarWidth: function (isBody) {
            if (isBody) {
                if (angular.isUndefined(BODY_SCROLLBAR_WIDTH)) {
                    var bodyElem = $document.find("body");
                    bodyElem.addClass("uib-position-body-scrollbar-measure"), BODY_SCROLLBAR_WIDTH = $window.innerWidth - bodyElem[0].clientWidth, BODY_SCROLLBAR_WIDTH = isFinite(BODY_SCROLLBAR_WIDTH) ? BODY_SCROLLBAR_WIDTH : 0, bodyElem.removeClass("uib-position-body-scrollbar-measure")
                }
                return BODY_SCROLLBAR_WIDTH
            }
            if (angular.isUndefined(SCROLLBAR_WIDTH)) {
                var scrollElem = angular.element('<div class="uib-position-scrollbar-measure"></div>');
                $document.find("body").append(scrollElem), SCROLLBAR_WIDTH = scrollElem[0].offsetWidth - scrollElem[0].clientWidth, SCROLLBAR_WIDTH = isFinite(SCROLLBAR_WIDTH) ? SCROLLBAR_WIDTH : 0, scrollElem.remove()
            }
            return SCROLLBAR_WIDTH
        }, scrollbarPadding: function (elem) {
            elem = this.getRawNode(elem);
            var elemStyle = $window.getComputedStyle(elem), paddingRight = this.parseStyle(elemStyle.paddingRight),
                paddingBottom = this.parseStyle(elemStyle.paddingBottom),
                scrollParent = this.scrollParent(elem, !1, !0),
                scrollbarWidth = this.scrollbarWidth(BODY_REGEX.test(scrollParent.tagName));
            return {
                scrollbarWidth: scrollbarWidth,
                widthOverflow: scrollParent.scrollWidth > scrollParent.clientWidth,
                right: paddingRight + scrollbarWidth,
                originalRight: paddingRight,
                heightOverflow: scrollParent.scrollHeight > scrollParent.clientHeight,
                bottom: paddingBottom + scrollbarWidth,
                originalBottom: paddingBottom
            }
        }, isScrollable: function (elem, includeHidden) {
            elem = this.getRawNode(elem);
            var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal,
                elemStyle = $window.getComputedStyle(elem);
            return overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)
        }, scrollParent: function (elem, includeHidden, includeSelf) {
            elem = this.getRawNode(elem);
            var overflowRegex = includeHidden ? OVERFLOW_REGEX.hidden : OVERFLOW_REGEX.normal,
                documentEl = $document[0].documentElement, elemStyle = $window.getComputedStyle(elem);
            if (includeSelf && overflowRegex.test(elemStyle.overflow + elemStyle.overflowY + elemStyle.overflowX)) return elem;
            var excludeStatic = "absolute" === elemStyle.position, scrollParent = elem.parentElement || documentEl;
            if (scrollParent === documentEl || "fixed" === elemStyle.position) return documentEl;
            for (; scrollParent.parentElement && scrollParent !== documentEl;) {
                var spStyle = $window.getComputedStyle(scrollParent);
                if (excludeStatic && "static" !== spStyle.position && (excludeStatic = !1), !excludeStatic && overflowRegex.test(spStyle.overflow + spStyle.overflowY + spStyle.overflowX)) break;
                scrollParent = scrollParent.parentElement
            }
            return scrollParent
        }, position: function (elem, includeMagins) {
            elem = this.getRawNode(elem);
            var elemOffset = this.offset(elem);
            if (includeMagins) {
                var elemStyle = $window.getComputedStyle(elem);
                elemOffset.top -= this.parseStyle(elemStyle.marginTop), elemOffset.left -= this.parseStyle(elemStyle.marginLeft)
            }
            var parent = this.offsetParent(elem), parentOffset = {top: 0, left: 0};
            return parent !== $document[0].documentElement && (parentOffset = this.offset(parent), parentOffset.top += parent.clientTop - parent.scrollTop, parentOffset.left += parent.clientLeft - parent.scrollLeft), {
                width: Math.round(angular.isNumber(elemOffset.width) ? elemOffset.width : elem.offsetWidth),
                height: Math.round(angular.isNumber(elemOffset.height) ? elemOffset.height : elem.offsetHeight),
                top: Math.round(elemOffset.top - parentOffset.top),
                left: Math.round(elemOffset.left - parentOffset.left)
            }
        }, offset: function (elem) {
            elem = this.getRawNode(elem);
            var elemBCR = elem.getBoundingClientRect();
            return {
                width: Math.round(angular.isNumber(elemBCR.width) ? elemBCR.width : elem.offsetWidth),
                height: Math.round(angular.isNumber(elemBCR.height) ? elemBCR.height : elem.offsetHeight),
                top: Math.round(elemBCR.top + ($window.pageYOffset || $document[0].documentElement.scrollTop)),
                left: Math.round(elemBCR.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft))
            }
        }, viewportOffset: function (elem, useDocument, includePadding) {
            elem = this.getRawNode(elem), includePadding = !1 !== includePadding;
            var elemBCR = elem.getBoundingClientRect(), offsetBCR = {top: 0, left: 0, bottom: 0, right: 0},
                offsetParent = useDocument ? $document[0].documentElement : this.scrollParent(elem),
                offsetParentBCR = offsetParent.getBoundingClientRect();
            if (offsetBCR.top = offsetParentBCR.top + offsetParent.clientTop, offsetBCR.left = offsetParentBCR.left + offsetParent.clientLeft, offsetParent === $document[0].documentElement && (offsetBCR.top += $window.pageYOffset, offsetBCR.left += $window.pageXOffset), offsetBCR.bottom = offsetBCR.top + offsetParent.clientHeight, offsetBCR.right = offsetBCR.left + offsetParent.clientWidth, includePadding) {
                var offsetParentStyle = $window.getComputedStyle(offsetParent);
                offsetBCR.top += this.parseStyle(offsetParentStyle.paddingTop), offsetBCR.bottom -= this.parseStyle(offsetParentStyle.paddingBottom), offsetBCR.left += this.parseStyle(offsetParentStyle.paddingLeft), offsetBCR.right -= this.parseStyle(offsetParentStyle.paddingRight)
            }
            return {
                top: Math.round(elemBCR.top - offsetBCR.top),
                bottom: Math.round(offsetBCR.bottom - elemBCR.bottom),
                left: Math.round(elemBCR.left - offsetBCR.left),
                right: Math.round(offsetBCR.right - elemBCR.right)
            }
        }, parsePlacement: function (placement) {
            var autoPlace = PLACEMENT_REGEX.auto.test(placement);
            return autoPlace && (placement = placement.replace(PLACEMENT_REGEX.auto, "")), placement = placement.split("-"), placement[0] = placement[0] || "top", PLACEMENT_REGEX.primary.test(placement[0]) || (placement[0] = "top"), placement[1] = placement[1] || "center", PLACEMENT_REGEX.secondary.test(placement[1]) || (placement[1] = "center"), placement[2] = !!autoPlace, placement
        }, positionElements: function (hostElem, targetElem, placement, appendToBody) {
            hostElem = this.getRawNode(hostElem), targetElem = this.getRawNode(targetElem);
            var targetWidth = angular.isDefined(targetElem.offsetWidth) ? targetElem.offsetWidth : targetElem.prop("offsetWidth"),
                targetHeight = angular.isDefined(targetElem.offsetHeight) ? targetElem.offsetHeight : targetElem.prop("offsetHeight");
            placement = this.parsePlacement(placement);
            var hostElemPos = appendToBody ? this.offset(hostElem) : this.position(hostElem),
                targetElemPos = {top: 0, left: 0, placement: ""};
            if (placement[2]) {
                var viewportOffset = this.viewportOffset(hostElem, appendToBody),
                    targetElemStyle = $window.getComputedStyle(targetElem), adjustedSize = {
                        width: targetWidth + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginLeft) + this.parseStyle(targetElemStyle.marginRight))),
                        height: targetHeight + Math.round(Math.abs(this.parseStyle(targetElemStyle.marginTop) + this.parseStyle(targetElemStyle.marginBottom)))
                    };
                if (placement[0] = "top" === placement[0] && adjustedSize.height > viewportOffset.top && adjustedSize.height <= viewportOffset.bottom ? "bottom" : "bottom" === placement[0] && adjustedSize.height > viewportOffset.bottom && adjustedSize.height <= viewportOffset.top ? "top" : "left" === placement[0] && adjustedSize.width > viewportOffset.left && adjustedSize.width <= viewportOffset.right ? "right" : "right" === placement[0] && adjustedSize.width > viewportOffset.right && adjustedSize.width <= viewportOffset.left ? "left" : placement[0], placement[1] = "top" === placement[1] && adjustedSize.height - hostElemPos.height > viewportOffset.bottom && adjustedSize.height - hostElemPos.height <= viewportOffset.top ? "bottom" : "bottom" === placement[1] && adjustedSize.height - hostElemPos.height > viewportOffset.top && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? "top" : "left" === placement[1] && adjustedSize.width - hostElemPos.width > viewportOffset.right && adjustedSize.width - hostElemPos.width <= viewportOffset.left ? "right" : "right" === placement[1] && adjustedSize.width - hostElemPos.width > viewportOffset.left && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? "left" : placement[1], "center" === placement[1]) if (PLACEMENT_REGEX.vertical.test(placement[0])) {
                    var xOverflow = hostElemPos.width / 2 - targetWidth / 2;
                    viewportOffset.left + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.right ? placement[1] = "left" : viewportOffset.right + xOverflow < 0 && adjustedSize.width - hostElemPos.width <= viewportOffset.left && (placement[1] = "right")
                } else {
                    var yOverflow = hostElemPos.height / 2 - adjustedSize.height / 2;
                    viewportOffset.top + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.bottom ? placement[1] = "top" : viewportOffset.bottom + yOverflow < 0 && adjustedSize.height - hostElemPos.height <= viewportOffset.top && (placement[1] = "bottom")
                }
            }
            switch (placement[0]) {
                case"top":
                    targetElemPos.top = hostElemPos.top - targetHeight;
                    break;
                case"bottom":
                    targetElemPos.top = hostElemPos.top + hostElemPos.height;
                    break;
                case"left":
                    targetElemPos.left = hostElemPos.left - targetWidth;
                    break;
                case"right":
                    targetElemPos.left = hostElemPos.left + hostElemPos.width
            }
            switch (placement[1]) {
                case"top":
                    targetElemPos.top = hostElemPos.top;
                    break;
                case"bottom":
                    targetElemPos.top = hostElemPos.top + hostElemPos.height - targetHeight;
                    break;
                case"left":
                    targetElemPos.left = hostElemPos.left;
                    break;
                case"right":
                    targetElemPos.left = hostElemPos.left + hostElemPos.width - targetWidth;
                    break;
                case"center":
                    PLACEMENT_REGEX.vertical.test(placement[0]) ? targetElemPos.left = hostElemPos.left + hostElemPos.width / 2 - targetWidth / 2 : targetElemPos.top = hostElemPos.top + hostElemPos.height / 2 - targetHeight / 2
            }
            return targetElemPos.top = Math.round(targetElemPos.top), targetElemPos.left = Math.round(targetElemPos.left), targetElemPos.placement = "center" === placement[1] ? placement[0] : placement[0] + "-" + placement[1], targetElemPos
        }, adjustTop: function (placementClasses, containerPosition, initialHeight, currentHeight) {
            if (-1 !== placementClasses.indexOf("top") && initialHeight !== currentHeight) return {top: containerPosition.top - currentHeight + "px"}
        }, positionArrow: function (elem, placement) {
            elem = this.getRawNode(elem);
            var innerElem = elem.querySelector(".tooltip-inner, .popover-inner");
            if (innerElem) {
                var isTooltip = angular.element(innerElem).hasClass("tooltip-inner"),
                    arrowElem = isTooltip ? elem.querySelector(".tooltip-arrow") : elem.querySelector(".arrow");
                if (arrowElem) {
                    var arrowCss = {top: "", bottom: "", left: "", right: ""};
                    if (placement = this.parsePlacement(placement), "center" === placement[1]) return void angular.element(arrowElem).css(arrowCss);
                    var borderProp = "border-" + placement[0] + "-width",
                        borderWidth = $window.getComputedStyle(arrowElem)[borderProp], borderRadiusProp = "border-";
                    PLACEMENT_REGEX.vertical.test(placement[0]) ? borderRadiusProp += placement[0] + "-" + placement[1] : borderRadiusProp += placement[1] + "-" + placement[0], borderRadiusProp += "-radius";
                    var borderRadius = $window.getComputedStyle(isTooltip ? innerElem : elem)[borderRadiusProp];
                    switch (placement[0]) {
                        case"top":
                            arrowCss.bottom = isTooltip ? "0" : "-" + borderWidth;
                            break;
                        case"bottom":
                            arrowCss.top = isTooltip ? "0" : "-" + borderWidth;
                            break;
                        case"left":
                            arrowCss.right = isTooltip ? "0" : "-" + borderWidth;
                            break;
                        case"right":
                            arrowCss.left = isTooltip ? "0" : "-" + borderWidth
                    }
                    arrowCss[placement[1]] = borderRadius, angular.element(arrowElem).css(arrowCss)
                }
            }
        }
    }
}]), angular.module("ui.bootstrap.datepickerPopup", ["ui.bootstrap.datepicker", "ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning", !0).constant("uibDatepickerPopupConfig", {
    altInputFormats: [],
    appendToBody: !1,
    clearText: "Clear",
    closeOnDateSelection: !0,
    closeText: "Done",
    currentText: "Today",
    datepickerPopup: "yyyy-MM-dd",
    datepickerPopupTemplateUrl: "uib/template/datepickerPopup/popup.html",
    datepickerTemplateUrl: "uib/template/datepicker/datepicker.html",
    html5Types: {date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM"},
    onOpenFocus: !0,
    showButtonBar: !0,
    placement: "auto bottom-left"
}).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$log", "$parse", "$window", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", "uibDatepickerConfig", "$datepickerPopupLiteralWarning", function ($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning) {
    function parseDateString(viewValue) {
        var date = dateParser.parse(viewValue, dateFormat, $scope.date);
        if (isNaN(date)) for (var i = 0; i < altInputFormats.length; i++) if (date = dateParser.parse(viewValue, altInputFormats[i], $scope.date), !isNaN(date)) return date;
        return date
    }

    function parseDate(viewValue) {
        if (angular.isNumber(viewValue) && (viewValue = new Date(viewValue)), !viewValue) return null;
        if (angular.isDate(viewValue) && !isNaN(viewValue)) return viewValue;
        if (angular.isString(viewValue)) {
            var date = parseDateString(viewValue);
            if (!isNaN(date)) return dateParser.toTimezone(date, ngModelOptions.getOption("timezone"))
        }
        return ngModelOptions.getOption("allowInvalid") ? viewValue : void 0
    }

    function validator(modelValue, viewValue) {
        var value = modelValue || viewValue;
        return !$attrs.ngRequired && !value || (angular.isNumber(value) && (value = new Date(value)), !value || (!(!angular.isDate(value) || isNaN(value)) || !!angular.isString(value) && !isNaN(parseDateString(value))))
    }

    function documentClickBind(event) {
        if ($scope.isOpen || !$scope.disabled) {
            var popup = $popup[0], dpContainsTarget = $element[0].contains(event.target),
                popupContainsTarget = void 0 !== popup.contains && popup.contains(event.target);
            !$scope.isOpen || dpContainsTarget || popupContainsTarget || $scope.$apply(function () {
                $scope.isOpen = !1
            })
        }
    }

    function inputKeydownBind(evt) {
        27 === evt.which && $scope.isOpen ? (evt.preventDefault(), evt.stopPropagation(), $scope.$apply(function () {
            $scope.isOpen = !1
        }), $element[0].focus()) : 40 !== evt.which || $scope.isOpen || (evt.preventDefault(), evt.stopPropagation(), $scope.$apply(function () {
            $scope.isOpen = !0
        }))
    }

    function positionPopup() {
        if ($scope.isOpen) {
            var dpElement = angular.element($popup[0].querySelector(".uib-datepicker-popup")),
                placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement,
                position = $position.positionElements($element, dpElement, placement, appendToBody);
            dpElement.css({
                top: position.top + "px",
                left: position.left + "px"
            }), dpElement.hasClass("uib-position-measure") && dpElement.removeClass("uib-position-measure")
        }
    }

    function extractOptions(ngModelCtrl) {
        var ngModelOptions;
        return angular.version.minor < 6 ? (ngModelOptions = angular.isObject(ngModelCtrl.$options) ? ngModelCtrl.$options : {timezone: null}, ngModelOptions.getOption = function (key) {
            return ngModelOptions[key]
        }) : ngModelOptions = ngModelCtrl.$options, ngModelOptions
    }

    var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus, datepickerPopupTemplateUrl, datepickerTemplateUrl,
        popupEl, datepickerEl, scrollParentEl, ngModel, ngModelOptions, $popup, altInputFormats, isHtml5DateInput = !1,
        watchListeners = [];
    this.init = function (_ngModel_) {
        if (ngModel = _ngModel_, ngModelOptions = extractOptions(ngModel), closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ? $scope.$parent.$eval($attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection, appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ? $scope.$parent.$eval($attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody, onOpenFocus = angular.isDefined($attrs.onOpenFocus) ? $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus, datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ? $attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl, datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ? $attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl, altInputFormats = angular.isDefined($attrs.altInputFormats) ? $scope.$parent.$eval($attrs.altInputFormats) : datepickerPopupConfig.altInputFormats, $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ? $scope.$parent.$eval($attrs.showButtonBar) : datepickerPopupConfig.showButtonBar, datepickerPopupConfig.html5Types[$attrs.type] ? (dateFormat = datepickerPopupConfig.html5Types[$attrs.type], isHtml5DateInput = !0) : (dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup, $attrs.$observe("uibDatepickerPopup", function (value, oldValue) {
                var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
                if (newDateFormat !== dateFormat && (dateFormat = newDateFormat, ngModel.$modelValue = null, !dateFormat)) throw new Error("uibDatepickerPopup must have a date format specified.")
            })), !dateFormat) throw new Error("uibDatepickerPopup must have a date format specified.");
        if (isHtml5DateInput && $attrs.uibDatepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
        popupEl = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), popupEl.attr({
            "ng-model": "date",
            "ng-change": "dateSelection(date)",
            "template-url": datepickerPopupTemplateUrl
        }), datepickerEl = angular.element(popupEl.children()[0]), datepickerEl.attr("template-url", datepickerTemplateUrl), $scope.datepickerOptions || ($scope.datepickerOptions = {}), isHtml5DateInput && "month" === $attrs.type && ($scope.datepickerOptions.datepickerMode = "month", $scope.datepickerOptions.minMode = "month"), datepickerEl.attr("datepicker-options", "datepickerOptions"), isHtml5DateInput ? ngModel.$formatters.push(function (value) {
            return $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption("timezone")), value
        }) : (ngModel.$$parserName = "date", ngModel.$validators.date = validator, ngModel.$parsers.unshift(parseDate), ngModel.$formatters.push(function (value) {
            return ngModel.$isEmpty(value) ? ($scope.date = value, value) : (angular.isNumber(value) && (value = new Date(value)), $scope.date = dateParser.fromTimezone(value, ngModelOptions.getOption("timezone")), dateParser.filter($scope.date, dateFormat))
        })), ngModel.$viewChangeListeners.push(function () {
            $scope.date = parseDateString(ngModel.$viewValue)
        }), $element.on("keydown", inputKeydownBind), $popup = $compile(popupEl)($scope), popupEl.remove(), appendToBody ? $document.find("body").append($popup) : $element.after($popup), $scope.$on("$destroy", function () {
            for (!0 === $scope.isOpen && ($rootScope.$$phase || $scope.$apply(function () {
                $scope.isOpen = !1
            })), $popup.remove(), $element.off("keydown", inputKeydownBind), $document.off("click", documentClickBind), scrollParentEl && scrollParentEl.off("scroll", positionPopup), angular.element($window).off("resize", positionPopup); watchListeners.length;) watchListeners.shift()()
        })
    }, $scope.getText = function (key) {
        return $scope[key + "Text"] || datepickerPopupConfig[key + "Text"]
    }, $scope.isDisabled = function (date) {
        "today" === date && (date = dateParser.fromTimezone(new Date, ngModelOptions.getOption("timezone")));
        var dates = {};
        return angular.forEach(["minDate", "maxDate"], function (key) {
            $scope.datepickerOptions[key] ? angular.isDate($scope.datepickerOptions[key]) ? dates[key] = new Date($scope.datepickerOptions[key]) : ($datepickerPopupLiteralWarning && $log.warn("Literal date support has been deprecated, please switch to date object usage"), dates[key] = new Date(dateFilter($scope.datepickerOptions[key], "medium"))) : dates[key] = null
        }), $scope.datepickerOptions && dates.minDate && $scope.compare(date, dates.minDate) < 0 || dates.maxDate && $scope.compare(date, dates.maxDate) > 0
    }, $scope.compare = function (date1, date2) {
        return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
    }, $scope.dateSelection = function (dt) {
        $scope.date = dt;
        var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null;
        $element.val(date), ngModel.$setViewValue(date), closeOnDateSelection && ($scope.isOpen = !1, $element[0].focus())
    }, $scope.keydown = function (evt) {
        27 === evt.which && (evt.stopPropagation(), $scope.isOpen = !1, $element[0].focus())
    }, $scope.select = function (date, evt) {
        if (evt.stopPropagation(), "today" === date) {
            var today = new Date;
            angular.isDate($scope.date) ? (date = new Date($scope.date), date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate())) : (date = dateParser.fromTimezone(today, ngModelOptions.getOption("timezone")), date.setHours(0, 0, 0, 0))
        }
        $scope.dateSelection(date)
    }, $scope.close = function (evt) {
        evt.stopPropagation(), $scope.isOpen = !1, $element[0].focus()
    }, $scope.disabled = angular.isDefined($attrs.disabled) || !1, $attrs.ngDisabled && watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function (disabled) {
        $scope.disabled = disabled
    })), $scope.$watch("isOpen", function (value) {
        value ? $scope.disabled ? $scope.isOpen = !1 : $timeout(function () {
            positionPopup(), onOpenFocus && $scope.$broadcast("uib:datepicker.focus"), $document.on("click", documentClickBind);
            var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
            appendToBody || $position.parsePlacement(placement)[2] ? (scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element))) && scrollParentEl.on("scroll", positionPopup) : scrollParentEl = null, angular.element($window).on("resize", positionPopup)
        }, 0, !1) : ($document.off("click", documentClickBind), scrollParentEl && scrollParentEl.off("scroll", positionPopup), angular.element($window).off("resize", positionPopup))
    }), $scope.$on("uib:datepicker.mode", function () {
        $timeout(positionPopup, 0, !1)
    })
}]).directive("uibDatepickerPopup", function () {
    return {
        require: ["ngModel", "uibDatepickerPopup"],
        controller: "UibDatepickerPopupController",
        scope: {datepickerOptions: "=?", isOpen: "=?", currentText: "@", clearText: "@", closeText: "@"},
        link: function (scope, element, attrs, ctrls) {
            var ngModel = ctrls[0];
            ctrls[1].init(ngModel)
        }
    }
}).directive("uibDatepickerPopupWrap", function () {
    return {
        restrict: "A", transclude: !0, templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/datepickerPopup/popup.html"
        }
    }
}), angular.module("ui.bootstrap.debounce", []).factory("$$debounce", ["$timeout", function ($timeout) {
    return function (callback, debounceTime) {
        var timeoutPromise;
        return function () {
            var self = this, args = Array.prototype.slice.call(arguments);
            timeoutPromise && $timeout.cancel(timeoutPromise), timeoutPromise = $timeout(function () {
                callback.apply(self, args)
            }, debounceTime)
        }
    }
}]), angular.module("ui.bootstrap.multiMap", []).factory("$$multiMap", function () {
    return {
        createNew: function () {
            var map = {};
            return {
                entries: function () {
                    return Object.keys(map).map(function (key) {
                        return {key: key, value: map[key]}
                    })
                }, get: function (key) {
                    return map[key]
                }, hasKey: function (key) {
                    return !!map[key]
                }, keys: function () {
                    return Object.keys(map)
                }, put: function (key, value) {
                    map[key] || (map[key] = []), map[key].push(value)
                }, remove: function (key, value) {
                    var values = map[key];
                    if (values) {
                        var idx = values.indexOf(value);
                        -1 !== idx && values.splice(idx, 1), values.length || delete map[key]
                    }
                }
            }
        }
    }
}), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.multiMap", "ui.bootstrap.position"]).constant("uibDropdownConfig", {
    appendToOpenClass: "uib-dropdown-open",
    openClass: "open"
}).service("uibDropdownService", ["$document", "$rootScope", "$$multiMap", function ($document, $rootScope, $$multiMap) {
    var openScope = null, openedContainers = $$multiMap.createNew();
    this.isOnlyOpen = function (dropdownScope, appendTo) {
        var openedDropdowns = openedContainers.get(appendTo);
        if (openedDropdowns) {
            if (openedDropdowns.reduce(function (toClose, dropdown) {
                    return dropdown.scope === dropdownScope ? dropdown : toClose
                }, {})) return 1 === openedDropdowns.length
        }
        return !1
    }, this.open = function (dropdownScope, element, appendTo) {
        if (openScope || $document.on("click", closeDropdown), openScope && openScope !== dropdownScope && (openScope.isOpen = !1), openScope = dropdownScope, appendTo) {
            var openedDropdowns = openedContainers.get(appendTo);
            if (openedDropdowns) {
                -1 === openedDropdowns.map(function (dropdown) {
                    return dropdown.scope
                }).indexOf(dropdownScope) && openedContainers.put(appendTo, {scope: dropdownScope})
            } else openedContainers.put(appendTo, {scope: dropdownScope})
        }
    }, this.close = function (dropdownScope, element, appendTo) {
        if (openScope === dropdownScope && ($document.off("click", closeDropdown), $document.off("keydown", this.keybindFilter), openScope = null), appendTo) {
            var openedDropdowns = openedContainers.get(appendTo);
            if (openedDropdowns) {
                var dropdownToClose = openedDropdowns.reduce(function (toClose, dropdown) {
                    return dropdown.scope === dropdownScope ? dropdown : toClose
                }, {});
                dropdownToClose && openedContainers.remove(appendTo, dropdownToClose)
            }
        }
    };
    var closeDropdown = function (evt) {
        if (openScope && openScope.isOpen && !(evt && "disabled" === openScope.getAutoClose() || evt && 3 === evt.which)) {
            var toggleElement = openScope.getToggleElement();
            if (!(evt && toggleElement && toggleElement[0].contains(evt.target))) {
                var dropdownElement = openScope.getDropdownElement();
                evt && "outsideClick" === openScope.getAutoClose() && dropdownElement && dropdownElement[0].contains(evt.target) || (openScope.focusToggleElement(), openScope.isOpen = !1, $rootScope.$$phase || openScope.$apply())
            }
        }
    };
    this.keybindFilter = function (evt) {
        if (openScope) {
            var dropdownElement = openScope.getDropdownElement(), toggleElement = openScope.getToggleElement(),
                dropdownElementTargeted = dropdownElement && dropdownElement[0].contains(evt.target),
                toggleElementTargeted = toggleElement && toggleElement[0].contains(evt.target);
            27 === evt.which ? (evt.stopPropagation(), openScope.focusToggleElement(), closeDropdown()) : openScope.isKeynavEnabled() && -1 !== [38, 40].indexOf(evt.which) && openScope.isOpen && (dropdownElementTargeted || toggleElementTargeted) && (evt.preventDefault(), evt.stopPropagation(), openScope.focusDropdownEntry(evt.which))
        }
    }
}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function ($scope, $element, $attrs, $parse, dropdownConfig, uibDropdownService, $animate, $position, $document, $compile, $templateRequest) {
    function removeDropdownMenu() {
        $element.append(self.dropdownMenu)
    }

    var templateScope, getIsOpen, self = this, scope = $scope.$new(),
        appendToOpenClass = dropdownConfig.appendToOpenClass, openClass = dropdownConfig.openClass,
        setIsOpen = angular.noop, toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
        keynavEnabled = !1, body = $document.find("body");
    $element.addClass("dropdown"), this.init = function () {
        $attrs.isOpen && (getIsOpen = $parse($attrs.isOpen), setIsOpen = getIsOpen.assign, $scope.$watch(getIsOpen, function (value) {
            scope.isOpen = !!value
        })), keynavEnabled = angular.isDefined($attrs.keyboardNav)
    }, this.toggle = function (open) {
        return scope.isOpen = arguments.length ? !!open : !scope.isOpen, angular.isFunction(setIsOpen) && setIsOpen(scope, scope.isOpen), scope.isOpen
    }, this.isOpen = function () {
        return scope.isOpen
    }, scope.getToggleElement = function () {
        return self.toggleElement
    }, scope.getAutoClose = function () {
        return $attrs.autoClose || "always"
    }, scope.getElement = function () {
        return $element
    }, scope.isKeynavEnabled = function () {
        return keynavEnabled
    }, scope.focusDropdownEntry = function (keyCode) {
        var elems = self.dropdownMenu ? angular.element(self.dropdownMenu).find("a") : $element.find("ul").eq(0).find("a");
        switch (keyCode) {
            case 40:
                angular.isNumber(self.selectedOption) ? self.selectedOption = self.selectedOption === elems.length - 1 ? self.selectedOption : self.selectedOption + 1 : self.selectedOption = 0;
                break;
            case 38:
                angular.isNumber(self.selectedOption) ? self.selectedOption = 0 === self.selectedOption ? 0 : self.selectedOption - 1 : self.selectedOption = elems.length - 1
        }
        elems[self.selectedOption].focus()
    }, scope.getDropdownElement = function () {
        return self.dropdownMenu
    }, scope.focusToggleElement = function () {
        self.toggleElement && self.toggleElement[0].focus()
    }, scope.$watch("isOpen", function (isOpen, wasOpen) {
        var appendTo = null, appendToBody = !1;
        if (angular.isDefined($attrs.dropdownAppendTo)) {
            var appendToEl = $parse($attrs.dropdownAppendTo)(scope);
            appendToEl && (appendTo = angular.element(appendToEl))
        }
        if (angular.isDefined($attrs.dropdownAppendToBody)) {
            !1 !== $parse($attrs.dropdownAppendToBody)(scope) && (appendToBody = !0)
        }
        if (appendToBody && !appendTo && (appendTo = body), appendTo && self.dropdownMenu && (isOpen ? (appendTo.append(self.dropdownMenu), $element.on("$destroy", removeDropdownMenu)) : ($element.off("$destroy", removeDropdownMenu), removeDropdownMenu())), appendTo && self.dropdownMenu) {
            var css, rightalign, scrollbarPadding,
                pos = $position.positionElements($element, self.dropdownMenu, "bottom-left", !0), scrollbarWidth = 0;
            if (css = {
                    top: pos.top + "px",
                    display: isOpen ? "block" : "none"
                }, rightalign = self.dropdownMenu.hasClass("dropdown-menu-right"), rightalign ? (css.left = "auto", scrollbarPadding = $position.scrollbarPadding(appendTo), scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth && (scrollbarWidth = scrollbarPadding.scrollbarWidth), css.right = window.innerWidth - scrollbarWidth - (pos.left + $element.prop("offsetWidth")) + "px") : (css.left = pos.left + "px", css.right = "auto"), !appendToBody) {
                var appendOffset = $position.offset(appendTo);
                css.top = pos.top - appendOffset.top + "px", rightalign ? css.right = window.innerWidth - (pos.left - appendOffset.left + $element.prop("offsetWidth")) + "px" : css.left = pos.left - appendOffset.left + "px"
            }
            self.dropdownMenu.css(css)
        }
        var openContainer = appendTo || $element, dropdownOpenClass = appendTo ? appendToOpenClass : openClass,
            hasOpenClass = openContainer.hasClass(dropdownOpenClass),
            isOnlyOpen = uibDropdownService.isOnlyOpen($scope, appendTo);
        if (hasOpenClass === !isOpen) {
            var toggleClass;
            toggleClass = appendTo ? isOnlyOpen ? "removeClass" : "addClass" : isOpen ? "addClass" : "removeClass", $animate[toggleClass](openContainer, dropdownOpenClass).then(function () {
                angular.isDefined(isOpen) && isOpen !== wasOpen && toggleInvoker($scope, {open: !!isOpen})
            })
        }
        if (isOpen) self.dropdownMenuTemplateUrl ? $templateRequest(self.dropdownMenuTemplateUrl).then(function (tplContent) {
            templateScope = scope.$new(), $compile(tplContent.trim())(templateScope, function (dropdownElement) {
                var newEl = dropdownElement;
                self.dropdownMenu.replaceWith(newEl), self.dropdownMenu = newEl, $document.on("keydown", uibDropdownService.keybindFilter)
            })
        }) : $document.on("keydown", uibDropdownService.keybindFilter), scope.focusToggleElement(), uibDropdownService.open(scope, $element, appendTo); else {
            if (uibDropdownService.close(scope, $element, appendTo), self.dropdownMenuTemplateUrl) {
                templateScope && templateScope.$destroy();
                var newEl = angular.element('<ul class="dropdown-menu"></ul>');
                self.dropdownMenu.replaceWith(newEl), self.dropdownMenu = newEl
            }
            self.selectedOption = null
        }
        angular.isFunction(setIsOpen) && setIsOpen($scope, isOpen)
    })
}]).directive("uibDropdown", function () {
    return {
        controller: "UibDropdownController", link: function (scope, element, attrs, dropdownCtrl) {
            dropdownCtrl.init()
        }
    }
}).directive("uibDropdownMenu", function () {
    return {
        restrict: "A", require: "?^uibDropdown", link: function (scope, element, attrs, dropdownCtrl) {
            if (dropdownCtrl && !angular.isDefined(attrs.dropdownNested)) {
                element.addClass("dropdown-menu");
                var tplUrl = attrs.templateUrl;
                tplUrl && (dropdownCtrl.dropdownMenuTemplateUrl = tplUrl), dropdownCtrl.dropdownMenu || (dropdownCtrl.dropdownMenu = element)
            }
        }
    }
}).directive("uibDropdownToggle", function () {
    return {
        require: "?^uibDropdown", link: function (scope, element, attrs, dropdownCtrl) {
            if (dropdownCtrl) {
                element.addClass("dropdown-toggle"), dropdownCtrl.toggleElement = element;
                var toggleDropdown = function (event) {
                    event.preventDefault(), element.hasClass("disabled") || attrs.disabled || scope.$apply(function () {
                        dropdownCtrl.toggle()
                    })
                };
                element.on("click", toggleDropdown), element.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
                    element.attr("aria-expanded", !!isOpen)
                }), scope.$on("$destroy", function () {
                    element.off("click", toggleDropdown)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var stack = [];
            return {
                add: function (key, value) {
                    stack.push({key: key, value: value})
                }, get: function (key) {
                    for (var i = 0; i < stack.length; i++) if (key === stack[i].key) return stack[i]
                }, keys: function () {
                    for (var keys = [], i = 0; i < stack.length; i++) keys.push(stack[i].key);
                    return keys
                }, top: function () {
                    return stack[stack.length - 1]
                }, remove: function (key) {
                    for (var idx = -1, i = 0; i < stack.length; i++) if (key === stack[i].key) {
                        idx = i;
                        break
                    }
                    return stack.splice(idx, 1)[0]
                }, removeTop: function () {
                    return stack.pop()
                }, length: function () {
                    return stack.length
                }
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.multiMap", "ui.bootstrap.stackedMap", "ui.bootstrap.position"]).provider("$uibResolve", function () {
    var resolve = this;
    this.resolver = null, this.setResolver = function (resolver) {
        this.resolver = resolver
    }, this.$get = ["$injector", "$q", function ($injector, $q) {
        var resolver = resolve.resolver ? $injector.get(resolve.resolver) : null;
        return {
            resolve: function (invocables, locals, parent, self) {
                if (resolver) return resolver.resolve(invocables, locals, parent, self);
                var promises = [];
                return angular.forEach(invocables, function (value) {
                    angular.isFunction(value) || angular.isArray(value) ? promises.push($q.resolve($injector.invoke(value))) : angular.isString(value) ? promises.push($q.resolve($injector.get(value))) : promises.push($q.resolve(value))
                }), $q.all(promises).then(function (resolves) {
                    var resolveObj = {}, resolveIter = 0;
                    return angular.forEach(invocables, function (value, key) {
                        resolveObj[key] = resolves[resolveIter++]
                    }), resolveObj
                })
            }
        }
    }]
}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function ($animate, $injector, $modalStack) {
    function linkFn(scope, element, attrs) {
        attrs.modalInClass && ($animate.addClass(element, attrs.modalInClass), scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
            var done = setIsAsync();
            scope.modalOptions.animation ? $animate.removeClass(element, attrs.modalInClass).then(done) : done()
        }))
    }

    return {
        restrict: "A", compile: function (tElement, tAttrs) {
            return tElement.addClass(tAttrs.backdropClass), linkFn
        }
    }
}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function ($modalStack, $q, $animateCss, $document) {
    return {
        scope: {index: "@"}, restrict: "A", transclude: !0, templateUrl: function (tElement, tAttrs) {
            return tAttrs.templateUrl || "uib/template/modal/window.html"
        }, link: function (scope, element, attrs) {
            element.addClass(attrs.windowTopClass || ""), scope.size = attrs.size, scope.close = function (evt) {
                var modal = $modalStack.getTop();
                modal && modal.value.backdrop && "static" !== modal.value.backdrop && evt.target === evt.currentTarget && (evt.preventDefault(), evt.stopPropagation(), $modalStack.dismiss(modal.key, "backdrop click"))
            }, element.on("click", scope.close), scope.$isRendered = !0;
            var modalRenderDeferObj = $q.defer();
            scope.$$postDigest(function () {
                modalRenderDeferObj.resolve()
            }), modalRenderDeferObj.promise.then(function () {
                var animationPromise = null;
                attrs.modalInClass && (animationPromise = $animateCss(element, {addClass: attrs.modalInClass}).start(), scope.$on($modalStack.NOW_CLOSING_EVENT, function (e, setIsAsync) {
                    var done = setIsAsync();
                    $animateCss(element, {removeClass: attrs.modalInClass}).start().then(done)
                })), $q.when(animationPromise).then(function () {
                    var modal = $modalStack.getTop();
                    if (modal && $modalStack.modalRendered(modal.key), !$document[0].activeElement || !element[0].contains($document[0].activeElement)) {
                        var inputWithAutofocus = element[0].querySelector("[autofocus]");
                        inputWithAutofocus ? inputWithAutofocus.focus() : element[0].focus()
                    }
                })
            })
        }
    }
}]).directive("uibModalAnimationClass", function () {
    return {
        compile: function (tElement, tAttrs) {
            tAttrs.modalAnimation && tElement.addClass(tAttrs.uibModalAnimationClass)
        }
    }
}).directive("uibModalTransclude", ["$animate", function ($animate) {
    return {
        link: function (scope, element, attrs, controller, transclude) {
            transclude(scope.$parent, function (clone) {
                element.empty(), $animate.enter(clone, element)
            })
        }
    }
}]).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function ($animate, $animateCss, $document, $compile, $rootScope, $q, $$multiMap, $$stackedMap, $uibPosition) {
    function snake_case(name) {
        return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
            return (pos ? "-" : "") + letter.toLowerCase()
        })
    }

    function isVisible(element) {
        return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
    }

    function backdropIndex() {
        for (var topBackdropIndex = -1, opened = openedWindows.keys(), i = 0; i < opened.length; i++) openedWindows.get(opened[i]).value.backdrop && (topBackdropIndex = i);
        return topBackdropIndex > -1 && topBackdropIndex < topModalIndex && (topBackdropIndex = topModalIndex), topBackdropIndex
    }

    function removeModalWindow(modalInstance, elementToReceiveFocus) {
        var modalWindow = openedWindows.get(modalInstance).value, appendToElement = modalWindow.appendTo;
        openedWindows.remove(modalInstance), previousTopOpenedModal = openedWindows.top(), previousTopOpenedModal && (topModalIndex = parseInt(previousTopOpenedModal.value.modalDomEl.attr("index"), 10)), removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function () {
            var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
            openedClasses.remove(modalBodyClass, modalInstance);
            var areAnyOpen = openedClasses.hasKey(modalBodyClass);
            appendToElement.toggleClass(modalBodyClass, areAnyOpen), !areAnyOpen && scrollbarPadding && scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth && (scrollbarPadding.originalRight ? appendToElement.css({paddingRight: scrollbarPadding.originalRight + "px"}) : appendToElement.css({paddingRight: ""}), scrollbarPadding = null), toggleTopWindowClass(!0)
        }, modalWindow.closedDeferred), checkRemoveBackdrop(), elementToReceiveFocus && elementToReceiveFocus.focus ? elementToReceiveFocus.focus() : appendToElement.focus && appendToElement.focus()
    }

    function toggleTopWindowClass(toggleSwitch) {
        var modalWindow;
        openedWindows.length() > 0 && (modalWindow = openedWindows.top().value, modalWindow.modalDomEl.toggleClass(modalWindow.windowTopClass || "", toggleSwitch))
    }

    function checkRemoveBackdrop() {
        if (backdropDomEl && -1 === backdropIndex()) {
            var backdropScopeRef = backdropScope;
            removeAfterAnimate(backdropDomEl, backdropScope, function () {
                backdropScopeRef = null
            }), backdropDomEl = void 0, backdropScope = void 0
        }
    }

    function removeAfterAnimate(domEl, scope, done, closedDeferred) {
        function afterAnimating() {
            afterAnimating.done || (afterAnimating.done = !0, $animate.leave(domEl).then(function () {
                done && done(), domEl.remove(), closedDeferred && closedDeferred.resolve()
            }), scope.$destroy())
        }

        var asyncDeferred, asyncPromise = null, setIsAsync = function () {
            return asyncDeferred || (asyncDeferred = $q.defer(), asyncPromise = asyncDeferred.promise), function () {
                asyncDeferred.resolve()
            }
        };
        return scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync), $q.when(asyncPromise).then(afterAnimating)
    }

    function keydownListener(evt) {
        if (evt.isDefaultPrevented()) return evt;
        var modal = openedWindows.top();
        if (modal) switch (evt.which) {
            case 27:
                modal.value.keyboard && (evt.preventDefault(), $rootScope.$apply(function () {
                    $modalStack.dismiss(modal.key, "escape key press")
                }));
                break;
            case 9:
                var list = $modalStack.loadFocusElementList(modal), focusChanged = !1;
                evt.shiftKey ? ($modalStack.isFocusInFirstItem(evt, list) || $modalStack.isModalFocused(evt, modal)) && (focusChanged = $modalStack.focusLastFocusableElement(list)) : $modalStack.isFocusInLastItem(evt, list) && (focusChanged = $modalStack.focusFirstFocusableElement(list)), focusChanged && (evt.preventDefault(), evt.stopPropagation())
        }
    }

    function broadcastClosing(modalWindow, resultOrReason, closing) {
        return !modalWindow.value.modalScope.$broadcast("modal.closing", resultOrReason, closing).defaultPrevented
    }

    function unhideBackgroundElements() {
        Array.prototype.forEach.call(document.querySelectorAll("[" + ARIA_HIDDEN_ATTRIBUTE_NAME + "]"), function (hiddenEl) {
            var ariaHiddenCount = parseInt(hiddenEl.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10),
                newHiddenCount = ariaHiddenCount - 1;
            hiddenEl.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, newHiddenCount), newHiddenCount || (hiddenEl.removeAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), hiddenEl.removeAttribute("aria-hidden"))
        })
    }

    var backdropDomEl, backdropScope, scrollbarPadding, OPENED_MODAL_CLASS = "modal-open",
        openedWindows = $$stackedMap.createNew(), openedClasses = $$multiMap.createNew(),
        $modalStack = {NOW_CLOSING_EVENT: "modal.stack.now-closing"}, topModalIndex = 0, previousTopOpenedModal = null,
        ARIA_HIDDEN_ATTRIBUTE_NAME = "data-bootstrap-modal-aria-hidden-count", SNAKE_CASE_REGEXP = /[A-Z]/g;
    return $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
        backdropScope && (backdropScope.index = newBackdropIndex)
    }), $document.on("keydown", keydownListener), $rootScope.$on("$destroy", function () {
        $document.off("keydown", keydownListener)
    }), $modalStack.open = function (modalInstance, modal) {
        function applyAriaHidden(el) {
            if (el && "BODY" !== el[0].tagName) return function (el) {
                var children = el.parent() ? el.parent().children() : [];
                return Array.prototype.filter.call(children, function (child) {
                    return child !== el[0]
                })
            }(el).forEach(function (sibling) {
                var elemIsAlreadyHidden = "true" === sibling.getAttribute("aria-hidden"),
                    ariaHiddenCount = parseInt(sibling.getAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME), 10);
                ariaHiddenCount || (ariaHiddenCount = elemIsAlreadyHidden ? 1 : 0), sibling.setAttribute(ARIA_HIDDEN_ATTRIBUTE_NAME, ariaHiddenCount + 1), sibling.setAttribute("aria-hidden", "true")
            }), applyAriaHidden(el.parent())
        }

        var modalOpener = $document[0].activeElement, modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;
        toggleTopWindowClass(!1), previousTopOpenedModal = openedWindows.top(), openedWindows.add(modalInstance, {
            deferred: modal.deferred,
            renderDeferred: modal.renderDeferred,
            closedDeferred: modal.closedDeferred,
            modalScope: modal.scope,
            backdrop: modal.backdrop,
            keyboard: modal.keyboard,
            openedClass: modal.openedClass,
            windowTopClass: modal.windowTopClass,
            animation: modal.animation,
            appendTo: modal.appendTo
        }), openedClasses.put(modalBodyClass, modalInstance);
        var appendToElement = modal.appendTo, currBackdropIndex = backdropIndex();
        currBackdropIndex >= 0 && !backdropDomEl && (backdropScope = $rootScope.$new(!0), backdropScope.modalOptions = modal, backdropScope.index = currBackdropIndex, backdropDomEl = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), backdropDomEl.attr({
            class: "modal-backdrop",
            "ng-style": "{'z-index': 1040 + (index && 1 || 0) + index*10}",
            "uib-modal-animation-class": "fade",
            "modal-in-class": "in"
        }), modal.backdropClass && backdropDomEl.addClass(modal.backdropClass), modal.animation && backdropDomEl.attr("modal-animation", "true"), $compile(backdropDomEl)(backdropScope), $animate.enter(backdropDomEl, appendToElement), $uibPosition.isScrollable(appendToElement) && (scrollbarPadding = $uibPosition.scrollbarPadding(appendToElement), scrollbarPadding.heightOverflow && scrollbarPadding.scrollbarWidth && appendToElement.css({paddingRight: scrollbarPadding.right + "px"})));
        var content;
        modal.component ? (content = document.createElement(snake_case(modal.component.name)), content = angular.element(content), content.attr({
            resolve: "$resolve",
            "modal-instance": "$uibModalInstance",
            close: "$close($value)",
            dismiss: "$dismiss($value)"
        })) : content = modal.content, topModalIndex = previousTopOpenedModal ? parseInt(previousTopOpenedModal.value.modalDomEl.attr("index"), 10) + 1 : 0;
        var angularDomEl = angular.element('<div uib-modal-window="modal-window"></div>');
        angularDomEl.attr({
            class: "modal",
            "template-url": modal.windowTemplateUrl,
            "window-top-class": modal.windowTopClass,
            role: "dialog",
            "aria-labelledby": modal.ariaLabelledBy,
            "aria-describedby": modal.ariaDescribedBy,
            size: modal.size,
            index: topModalIndex,
            animate: "animate",
            "ng-style": "{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",
            tabindex: -1,
            "uib-modal-animation-class": "fade",
            "modal-in-class": "in"
        }).append(content), modal.windowClass && angularDomEl.addClass(modal.windowClass), modal.animation && angularDomEl.attr("modal-animation", "true"), appendToElement.addClass(modalBodyClass), modal.scope && (modal.scope.$$topModalIndex = topModalIndex), $animate.enter($compile(angularDomEl)(modal.scope), appendToElement), openedWindows.top().value.modalDomEl = angularDomEl, openedWindows.top().value.modalOpener = modalOpener, applyAriaHidden(angularDomEl)
    }, $modalStack.close = function (modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        return unhideBackgroundElements(), modalWindow && broadcastClosing(modalWindow, result, !0) ? (modalWindow.value.modalScope.$$uibDestructionScheduled = !0, modalWindow.value.deferred.resolve(result), removeModalWindow(modalInstance, modalWindow.value.modalOpener), !0) : !modalWindow
    }, $modalStack.dismiss = function (modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        return unhideBackgroundElements(), modalWindow && broadcastClosing(modalWindow, reason, !1) ? (modalWindow.value.modalScope.$$uibDestructionScheduled = !0, modalWindow.value.deferred.reject(reason), removeModalWindow(modalInstance, modalWindow.value.modalOpener), !0) : !modalWindow
    }, $modalStack.dismissAll = function (reason) {
        for (var topModal = this.getTop(); topModal && this.dismiss(topModal.key, reason);) topModal = this.getTop()
    }, $modalStack.getTop = function () {
        return openedWindows.top()
    }, $modalStack.modalRendered = function (modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        modalWindow && modalWindow.value.renderDeferred.resolve()
    }, $modalStack.focusFirstFocusableElement = function (list) {
        return list.length > 0 && (list[0].focus(), !0)
    }, $modalStack.focusLastFocusableElement = function (list) {
        return list.length > 0 && (list[list.length - 1].focus(), !0)
    }, $modalStack.isModalFocused = function (evt, modalWindow) {
        if (evt && modalWindow) {
            var modalDomEl = modalWindow.value.modalDomEl;
            if (modalDomEl && modalDomEl.length) return (evt.target || evt.srcElement) === modalDomEl[0]
        }
        return !1
    }, $modalStack.isFocusInFirstItem = function (evt, list) {
        return list.length > 0 && (evt.target || evt.srcElement) === list[0]
    }, $modalStack.isFocusInLastItem = function (evt, list) {
        return list.length > 0 && (evt.target || evt.srcElement) === list[list.length - 1]
    }, $modalStack.loadFocusElementList = function (modalWindow) {
        if (modalWindow) {
            var modalDomE1 = modalWindow.value.modalDomEl;
            if (modalDomE1 && modalDomE1.length) {
                var elements = modalDomE1[0].querySelectorAll("a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]");
                return elements ? Array.prototype.filter.call(elements, function (element) {
                    return isVisible(element)
                }) : elements
            }
        }
    }, $modalStack
}]).provider("$uibModal", function () {
    var $modalProvider = {
        options: {animation: !0, backdrop: !0, keyboard: !0},
        $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function ($rootScope, $q, $document, $templateRequest, $controller, $uibResolve, $modalStack) {
            function getTemplatePromise(options) {
                return options.template ? $q.when(options.template) : $templateRequest(angular.isFunction(options.templateUrl) ? options.templateUrl() : options.templateUrl)
            }

            var $modal = {}, promiseChain = null;
            return $modal.getPromiseChain = function () {
                return promiseChain
            }, $modal.open = function (modalOptions) {
                function resolveWithTemplate() {
                    return templateAndResolvePromise
                }

                var modalResultDeferred = $q.defer(), modalOpenedDeferred = $q.defer(),
                    modalClosedDeferred = $q.defer(), modalRenderDeferred = $q.defer(), modalInstance = {
                        result: modalResultDeferred.promise,
                        opened: modalOpenedDeferred.promise,
                        closed: modalClosedDeferred.promise,
                        rendered: modalRenderDeferred.promise,
                        close: function (result) {
                            return $modalStack.close(modalInstance, result)
                        },
                        dismiss: function (reason) {
                            return $modalStack.dismiss(modalInstance, reason)
                        }
                    };
                if (modalOptions = angular.extend({}, $modalProvider.options, modalOptions), modalOptions.resolve = modalOptions.resolve || {}, modalOptions.appendTo = modalOptions.appendTo || $document.find("body").eq(0), !modalOptions.appendTo.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");
                if (!modalOptions.component && !modalOptions.template && !modalOptions.templateUrl) throw new Error("One of component or template or templateUrl options is required.");
                var templateAndResolvePromise;
                templateAndResolvePromise = modalOptions.component ? $q.when($uibResolve.resolve(modalOptions.resolve, {}, null, null)) : $q.all([getTemplatePromise(modalOptions), $uibResolve.resolve(modalOptions.resolve, {}, null, null)]);
                var samePromise;
                return samePromise = promiseChain = $q.all([promiseChain]).then(resolveWithTemplate, resolveWithTemplate).then(function (tplAndVars) {
                    function constructLocals(obj, template, instanceOnScope, injectable) {
                        obj.$scope = modalScope, obj.$scope.$resolve = {}, instanceOnScope ? obj.$scope.$uibModalInstance = modalInstance : obj.$uibModalInstance = modalInstance;
                        var resolves = template ? tplAndVars[1] : tplAndVars;
                        angular.forEach(resolves, function (value, key) {
                            injectable && (obj[key] = value), obj.$scope.$resolve[key] = value
                        })
                    }

                    var providedScope = modalOptions.scope || $rootScope, modalScope = providedScope.$new();
                    modalScope.$close = modalInstance.close, modalScope.$dismiss = modalInstance.dismiss, modalScope.$on("$destroy", function () {
                        modalScope.$$uibDestructionScheduled || modalScope.$dismiss("$uibUnscheduledDestruction")
                    });
                    var ctrlInstance, ctrlInstantiate, modal = {
                        scope: modalScope,
                        deferred: modalResultDeferred,
                        renderDeferred: modalRenderDeferred,
                        closedDeferred: modalClosedDeferred,
                        animation: modalOptions.animation,
                        backdrop: modalOptions.backdrop,
                        keyboard: modalOptions.keyboard,
                        backdropClass: modalOptions.backdropClass,
                        windowTopClass: modalOptions.windowTopClass,
                        windowClass: modalOptions.windowClass,
                        windowTemplateUrl: modalOptions.windowTemplateUrl,
                        ariaLabelledBy: modalOptions.ariaLabelledBy,
                        ariaDescribedBy: modalOptions.ariaDescribedBy,
                        size: modalOptions.size,
                        openedClass: modalOptions.openedClass,
                        appendTo: modalOptions.appendTo
                    }, component = {}, ctrlLocals = {};
                    modalOptions.component ? (constructLocals(component, !1, !0, !1), component.name = modalOptions.component, modal.component = component) : modalOptions.controller && (constructLocals(ctrlLocals, !0, !1, !0), ctrlInstantiate = $controller(modalOptions.controller, ctrlLocals, !0, modalOptions.controllerAs), modalOptions.controllerAs && modalOptions.bindToController && (ctrlInstance = ctrlInstantiate.instance, ctrlInstance.$close = modalScope.$close, ctrlInstance.$dismiss = modalScope.$dismiss, angular.extend(ctrlInstance, {$resolve: ctrlLocals.$scope.$resolve}, providedScope)), ctrlInstance = ctrlInstantiate(), angular.isFunction(ctrlInstance.$onInit) && ctrlInstance.$onInit()), modalOptions.component || (modal.content = tplAndVars[0]), $modalStack.open(modalInstance, modal), modalOpenedDeferred.resolve(!0)
                }, function (reason) {
                    modalOpenedDeferred.reject(reason), modalResultDeferred.reject(reason)
                }).finally(function () {
                    promiseChain === samePromise && (promiseChain = null)
                }), modalInstance
            }, $modal
        }]
    };
    return $modalProvider
}), angular.module("ui.bootstrap.paging", []).factory("uibPaging", ["$parse", function ($parse) {
    return {
        create: function (ctrl, $scope, $attrs) {
            ctrl.setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop, ctrl.ngModelCtrl = {$setViewValue: angular.noop}, ctrl._watchers = [], ctrl.init = function (ngModelCtrl, config) {
                ctrl.ngModelCtrl = ngModelCtrl, ctrl.config = config, ngModelCtrl.$render = function () {
                    ctrl.render()
                }, $attrs.itemsPerPage ? ctrl._watchers.push($scope.$parent.$watch($attrs.itemsPerPage, function (value) {
                    ctrl.itemsPerPage = parseInt(value, 10), $scope.totalPages = ctrl.calculateTotalPages(), ctrl.updatePage()
                })) : ctrl.itemsPerPage = config.itemsPerPage, $scope.$watch("totalItems", function (newTotal, oldTotal) {
                    (angular.isDefined(newTotal) || newTotal !== oldTotal) && ($scope.totalPages = ctrl.calculateTotalPages(), ctrl.updatePage())
                })
            }, ctrl.calculateTotalPages = function () {
                var totalPages = ctrl.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / ctrl.itemsPerPage);
                return Math.max(totalPages || 0, 1)
            }, ctrl.render = function () {
                $scope.page = parseInt(ctrl.ngModelCtrl.$viewValue, 10) || 1
            }, $scope.selectPage = function (page, evt) {
                evt && evt.preventDefault(), (!$scope.ngDisabled || !evt) && $scope.page !== page && page > 0 && page <= $scope.totalPages && (evt && evt.target && evt.target.blur(), ctrl.ngModelCtrl.$setViewValue(page), ctrl.ngModelCtrl.$render())
            }, $scope.getText = function (key) {
                return $scope[key + "Text"] || ctrl.config[key + "Text"]
            }, $scope.noPrevious = function () {
                return 1 === $scope.page
            }, $scope.noNext = function () {
                return $scope.page === $scope.totalPages
            }, ctrl.updatePage = function () {
                ctrl.setNumPages($scope.$parent, $scope.totalPages), $scope.page > $scope.totalPages ? $scope.selectPage($scope.totalPages) : ctrl.ngModelCtrl.$render()
            }, $scope.$on("$destroy", function () {
                for (; ctrl._watchers.length;) ctrl._watchers.shift()()
            })
        }
    }
}]), angular.module("ui.bootstrap.pager", ["ui.bootstrap.paging", "ui.bootstrap.tabindex"]).controller("UibPagerController", ["$scope", "$attrs", "uibPaging", "uibPagerConfig", function ($scope, $attrs, uibPaging, uibPagerConfig) {
    $scope.align = angular.isDefined($attrs.align) ? $scope.$parent.$eval($attrs.align) : uibPagerConfig.align, uibPaging.create(this, $scope, $attrs)
}]).constant("uibPagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("uibPager", ["uibPagerConfig", function (uibPagerConfig) {
    return {
        scope: {totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "="},
        require: ["uibPager", "?ngModel"],
        restrict: "A",
        controller: "UibPagerController",
        controllerAs: "pager",
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/pager/pager.html"
        },
        link: function (scope, element, attrs, ctrls) {
            element.addClass("pager");
            var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && paginationCtrl.init(ngModelCtrl, uibPagerConfig)
        }
    }
}]), angular.module("ui.bootstrap.pagination", ["ui.bootstrap.paging", "ui.bootstrap.tabindex"]).controller("UibPaginationController", ["$scope", "$attrs", "$parse", "uibPaging", "uibPaginationConfig", function ($scope, $attrs, $parse, uibPaging, uibPaginationConfig) {
    function makePage(number, text, isActive) {
        return {number: number, text: text, active: isActive}
    }

    function getPages(currentPage, totalPages) {
        var pages = [], startPage = 1, endPage = totalPages,
            isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
        isMaxSized && (rotate ? (startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1), (endPage = startPage + maxSize - 1) > totalPages && (endPage = totalPages, startPage = endPage - maxSize + 1)) : (startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1, endPage = Math.min(startPage + maxSize - 1, totalPages)));
        for (var number = startPage; number <= endPage; number++) {
            var page = makePage(number, pageLabel(number), number === currentPage);
            pages.push(page)
        }
        if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
            if (startPage > 1) {
                if (!boundaryLinkNumbers || startPage > 3) {
                    var previousPageSet = makePage(startPage - 1, "...", !1);
                    pages.unshift(previousPageSet)
                }
                if (boundaryLinkNumbers) {
                    if (3 === startPage) {
                        var secondPageLink = makePage(2, "2", !1);
                        pages.unshift(secondPageLink)
                    }
                    var firstPageLink = makePage(1, "1", !1);
                    pages.unshift(firstPageLink)
                }
            }
            if (endPage < totalPages) {
                if (!boundaryLinkNumbers || endPage < totalPages - 2) {
                    var nextPageSet = makePage(endPage + 1, "...", !1);
                    pages.push(nextPageSet)
                }
                if (boundaryLinkNumbers) {
                    if (endPage === totalPages - 2) {
                        var secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, !1);
                        pages.push(secondToLastPageLink)
                    }
                    var lastPageLink = makePage(totalPages, totalPages, !1);
                    pages.push(lastPageLink)
                }
            }
        }
        return pages
    }

    var ctrl = this,
        maxSize = angular.isDefined($attrs.maxSize) ? $scope.$parent.$eval($attrs.maxSize) : uibPaginationConfig.maxSize,
        rotate = angular.isDefined($attrs.rotate) ? $scope.$parent.$eval($attrs.rotate) : uibPaginationConfig.rotate,
        forceEllipses = angular.isDefined($attrs.forceEllipses) ? $scope.$parent.$eval($attrs.forceEllipses) : uibPaginationConfig.forceEllipses,
        boundaryLinkNumbers = angular.isDefined($attrs.boundaryLinkNumbers) ? $scope.$parent.$eval($attrs.boundaryLinkNumbers) : uibPaginationConfig.boundaryLinkNumbers,
        pageLabel = angular.isDefined($attrs.pageLabel) ? function (idx) {
            return $scope.$parent.$eval($attrs.pageLabel, {$page: idx})
        } : angular.identity;
    $scope.boundaryLinks = angular.isDefined($attrs.boundaryLinks) ? $scope.$parent.$eval($attrs.boundaryLinks) : uibPaginationConfig.boundaryLinks, $scope.directionLinks = angular.isDefined($attrs.directionLinks) ? $scope.$parent.$eval($attrs.directionLinks) : uibPaginationConfig.directionLinks, $attrs.$set("role", "menu"), uibPaging.create(this, $scope, $attrs), $attrs.maxSize && ctrl._watchers.push($scope.$parent.$watch($parse($attrs.maxSize), function (value) {
        maxSize = parseInt(value, 10), ctrl.render()
    }));
    var originalRender = this.render;
    this.render = function () {
        originalRender(), $scope.page > 0 && $scope.page <= $scope.totalPages && ($scope.pages = getPages($scope.page, $scope.totalPages))
    }
}]).constant("uibPaginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    boundaryLinkNumbers: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0,
    forceEllipses: !1
}).directive("uibPagination", ["$parse", "uibPaginationConfig", function ($parse, uibPaginationConfig) {
    return {
        scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@", ngDisabled: "="},
        require: ["uibPagination", "?ngModel"],
        restrict: "A",
        controller: "UibPaginationController",
        controllerAs: "pagination",
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/pagination/pagination.html"
        },
        link: function (scope, element, attrs, ctrls) {
            element.addClass("pagination");
            var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && paginationCtrl.init(ngModelCtrl, uibPaginationConfig)
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
    function snake_case(name) {
        return name.replace(/[A-Z]/g, function (letter, pos) {
            return (pos ? "-" : "") + letter.toLowerCase()
        })
    }

    var defaultOptions = {
            placement: "top",
            placementClassPrefix: "",
            animation: !0,
            popupDelay: 0,
            popupCloseDelay: 0,
            useContentExp: !1
        }, triggerMap = {mouseenter: "mouseleave", click: "click", outsideClick: "outsideClick", focus: "blur", none: ""},
        globalOptions = {};
    this.options = function (value) {
        angular.extend(globalOptions, value)
    }, this.setTriggers = function (triggers) {
        angular.extend(triggerMap, triggers)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function ($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse, $$stackedMap) {
        function keypressListener(e) {
            if (27 === e.which) {
                var last = openedTooltips.top();
                last && (last.value.close(), last = null)
            }
        }

        var openedTooltips = $$stackedMap.createNew();
        return $document.on("keyup", keypressListener),
            $rootScope.$on("$destroy", function () {
                $document.off("keyup", keypressListener)
            }), function (ttType, prefix, defaultTriggerShow, options) {
            function getTriggers(trigger) {
                var show = (trigger || options.trigger || defaultTriggerShow).split(" ");
                return {
                    show: show, hide: show.map(function (trigger) {
                        return triggerMap[trigger] || trigger
                    })
                }
            }

            options = angular.extend({}, defaultOptions, globalOptions, options);
            var directiveName = snake_case(ttType), startSym = $interpolate.startSymbol(),
                endSym = $interpolate.endSymbol(),
                template = "<div " + directiveName + '-popup uib-title="' + startSym + "title" + endSym + '" ' + (options.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + startSym + "content" + endSym + '" ') + 'origin-scope="origScope" class="uib-position-measure ' + prefix + '" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';
            return {
                compile: function (tElem, tAttrs) {
                    var tooltipLinker = $compile(template);
                    return function (scope, element, attrs, tooltipCtrl) {
                        function toggleTooltipBind() {
                            ttScope.isOpen ? hideTooltipBind() : showTooltipBind()
                        }

                        function showTooltipBind() {
                            hasEnableExp && !scope.$eval(attrs[prefix + "Enable"]) || (cancelHide(), prepareTooltip(), ttScope.popupDelay ? showTimeout || (showTimeout = $timeout(show, ttScope.popupDelay, !1)) : show())
                        }

                        function hideTooltipBind() {
                            cancelShow(), ttScope.popupCloseDelay ? hideTimeout || (hideTimeout = $timeout(hide, ttScope.popupCloseDelay, !1)) : hide()
                        }

                        function show() {
                            if (cancelShow(), cancelHide(), !ttScope.content) return angular.noop;
                            createTooltip(), ttScope.$evalAsync(function () {
                                ttScope.isOpen = !0, assignIsOpen(!0), positionTooltip()
                            })
                        }

                        function cancelShow() {
                            showTimeout && ($timeout.cancel(showTimeout), showTimeout = null), positionTimeout && ($timeout.cancel(positionTimeout), positionTimeout = null)
                        }

                        function hide() {
                            ttScope && ttScope.$evalAsync(function () {
                                ttScope && (ttScope.isOpen = !1, assignIsOpen(!1), ttScope.animation ? transitionTimeout || (transitionTimeout = $timeout(removeTooltip, 150, !1)) : removeTooltip())
                            })
                        }

                        function cancelHide() {
                            hideTimeout && ($timeout.cancel(hideTimeout), hideTimeout = null), transitionTimeout && ($timeout.cancel(transitionTimeout), transitionTimeout = null)
                        }

                        function createTooltip() {
                            tooltip || (tooltipLinkedScope = ttScope.$new(), tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
                                appendToBody ? $document.find("body").append(tooltip) : element.after(tooltip)
                            }), openedTooltips.add(ttScope, {close: hide}), prepObservers())
                        }

                        function removeTooltip() {
                            cancelShow(), cancelHide(), unregisterObservers(), tooltip && (tooltip.remove(), tooltip = null, adjustmentTimeout && $timeout.cancel(adjustmentTimeout)), openedTooltips.remove(ttScope), tooltipLinkedScope && (tooltipLinkedScope.$destroy(), tooltipLinkedScope = null)
                        }

                        function prepareTooltip() {
                            ttScope.title = attrs[prefix + "Title"], ttScope.content = contentParse ? contentParse(scope) : attrs[ttType], ttScope.popupClass = attrs[prefix + "Class"], ttScope.placement = angular.isDefined(attrs[prefix + "Placement"]) ? attrs[prefix + "Placement"] : options.placement;
                            var placement = $position.parsePlacement(ttScope.placement);
                            lastPlacement = placement[1] ? placement[0] + "-" + placement[1] : placement[0];
                            var delay = parseInt(attrs[prefix + "PopupDelay"], 10),
                                closeDelay = parseInt(attrs[prefix + "PopupCloseDelay"], 10);
                            ttScope.popupDelay = isNaN(delay) ? options.popupDelay : delay, ttScope.popupCloseDelay = isNaN(closeDelay) ? options.popupCloseDelay : closeDelay
                        }

                        function assignIsOpen(isOpen) {
                            isOpenParse && angular.isFunction(isOpenParse.assign) && isOpenParse.assign(scope, isOpen)
                        }

                        function prepObservers() {
                            observers.length = 0, contentParse ? (observers.push(scope.$watch(contentParse, function (val) {
                                ttScope.content = val, !val && ttScope.isOpen && hide()
                            })), observers.push(tooltipLinkedScope.$watch(function () {
                                repositionScheduled || (repositionScheduled = !0, tooltipLinkedScope.$$postDigest(function () {
                                    repositionScheduled = !1, ttScope && ttScope.isOpen && positionTooltip()
                                }))
                            }))) : observers.push(attrs.$observe(ttType, function (val) {
                                ttScope.content = val, !val && ttScope.isOpen ? hide() : positionTooltip()
                            })), observers.push(attrs.$observe(prefix + "Title", function (val) {
                                ttScope.title = val, ttScope.isOpen && positionTooltip()
                            })), observers.push(attrs.$observe(prefix + "Placement", function (val) {
                                ttScope.placement = val || options.placement, ttScope.isOpen && positionTooltip()
                            }))
                        }

                        function unregisterObservers() {
                            observers.length && (angular.forEach(observers, function (observer) {
                                observer()
                            }), observers.length = 0)
                        }

                        function bodyHideTooltipBind(e) {
                            ttScope && ttScope.isOpen && tooltip && (element[0].contains(e.target) || tooltip[0].contains(e.target) || hideTooltipBind())
                        }

                        function hideOnEscapeKey(e) {
                            27 === e.which && hideTooltipBind()
                        }

                        var tooltip, tooltipLinkedScope, transitionTimeout, showTimeout, hideTimeout, positionTimeout,
                            adjustmentTimeout, lastPlacement,
                            appendToBody = !!angular.isDefined(options.appendToBody) && options.appendToBody,
                            triggers = getTriggers(void 0), hasEnableExp = angular.isDefined(attrs[prefix + "Enable"]),
                            ttScope = scope.$new(!0), repositionScheduled = !1,
                            isOpenParse = !!angular.isDefined(attrs[prefix + "IsOpen"]) && $parse(attrs[prefix + "IsOpen"]),
                            contentParse = !!options.useContentExp && $parse(attrs[ttType]), observers = [],
                            positionTooltip = function () {
                                tooltip && tooltip.html() && (positionTimeout || (positionTimeout = $timeout(function () {
                                    var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody),
                                        initialHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop("offsetHeight"),
                                        elementPos = appendToBody ? $position.offset(element) : $position.position(element);
                                    tooltip.css({top: ttPosition.top + "px", left: ttPosition.left + "px"});
                                    var placementClasses = ttPosition.placement.split("-");
                                    tooltip.hasClass(placementClasses[0]) || (tooltip.removeClass(lastPlacement.split("-")[0]), tooltip.addClass(placementClasses[0])), tooltip.hasClass(options.placementClassPrefix + ttPosition.placement) || (tooltip.removeClass(options.placementClassPrefix + lastPlacement), tooltip.addClass(options.placementClassPrefix + ttPosition.placement)), adjustmentTimeout = $timeout(function () {
                                        var currentHeight = angular.isDefined(tooltip.offsetHeight) ? tooltip.offsetHeight : tooltip.prop("offsetHeight"),
                                            adjustment = $position.adjustTop(placementClasses, elementPos, initialHeight, currentHeight);
                                        adjustment && tooltip.css(adjustment), adjustmentTimeout = null
                                    }, 0, !1), tooltip.hasClass("uib-position-measure") ? ($position.positionArrow(tooltip, ttPosition.placement), tooltip.removeClass("uib-position-measure")) : lastPlacement !== ttPosition.placement && $position.positionArrow(tooltip, ttPosition.placement), lastPlacement = ttPosition.placement, positionTimeout = null
                                }, 0, !1)))
                            };
                        ttScope.origScope = scope, ttScope.isOpen = !1, ttScope.contentExp = function () {
                            return ttScope.content
                        }, attrs.$observe("disabled", function (val) {
                            val && cancelShow(), val && ttScope.isOpen && hide()
                        }), isOpenParse && scope.$watch(isOpenParse, function (val) {
                            ttScope && !val === ttScope.isOpen && toggleTooltipBind()
                        });
                        var unregisterTriggers = function () {
                            triggers.show.forEach(function (trigger) {
                                "outsideClick" === trigger ? element.off("click", toggleTooltipBind) : (element.off(trigger, showTooltipBind), element.off(trigger, toggleTooltipBind)), element.off("keypress", hideOnEscapeKey)
                            }), triggers.hide.forEach(function (trigger) {
                                "outsideClick" === trigger ? $document.off("click", bodyHideTooltipBind) : element.off(trigger, hideTooltipBind)
                            })
                        };
                        !function () {
                            var showTriggers = [], hideTriggers = [], val = scope.$eval(attrs[prefix + "Trigger"]);
                            unregisterTriggers(), angular.isObject(val) ? (Object.keys(val).forEach(function (key) {
                                showTriggers.push(key), hideTriggers.push(val[key])
                            }), triggers = {
                                show: showTriggers,
                                hide: hideTriggers
                            }) : triggers = getTriggers(val), "none" !== triggers.show && triggers.show.forEach(function (trigger, idx) {
                                "outsideClick" === trigger ? (element.on("click", toggleTooltipBind), $document.on("click", bodyHideTooltipBind)) : trigger === triggers.hide[idx] ? element.on(trigger, toggleTooltipBind) : trigger && (element.on(trigger, showTooltipBind), element.on(triggers.hide[idx], hideTooltipBind)), element.on("keypress", hideOnEscapeKey)
                            })
                        }();
                        var animation = scope.$eval(attrs[prefix + "Animation"]);
                        ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
                        var appendToBodyVal, appendKey = prefix + "AppendToBody";
                        appendToBodyVal = appendKey in attrs && void 0 === attrs[appendKey] || scope.$eval(attrs[appendKey]), appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody, scope.$on("$destroy", function () {
                            unregisterTriggers(), removeTooltip(), ttScope = null
                        })
                    }
                }
            }
        }
    }]
}).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function ($animate, $sce, $compile, $templateRequest) {
    return {
        link: function (scope, elem, attrs) {
            var currentScope, previousElement, currentElement,
                origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope), changeCounter = 0,
                cleanupLastIncludeContent = function () {
                    previousElement && (previousElement.remove(), previousElement = null), currentScope && (currentScope.$destroy(), currentScope = null), currentElement && ($animate.leave(currentElement).then(function () {
                        previousElement = null
                    }), previousElement = currentElement, currentElement = null)
                };
            scope.$watch($sce.parseAsResourceUrl(attrs.uibTooltipTemplateTransclude), function (src) {
                var thisChangeId = ++changeCounter;
                src ? ($templateRequest(src, !0).then(function (response) {
                    if (thisChangeId === changeCounter) {
                        var newScope = origScope.$new(), template = response,
                            clone = $compile(template)(newScope, function (clone) {
                                cleanupLastIncludeContent(), $animate.enter(clone, elem)
                            });
                        currentScope = newScope, currentElement = clone, currentScope.$emit("$includeContentLoaded", src)
                    }
                }, function () {
                    thisChangeId === changeCounter && (cleanupLastIncludeContent(), scope.$emit("$includeContentError", src))
                }), scope.$emit("$includeContentRequested", src)) : cleanupLastIncludeContent()
            }), scope.$on("$destroy", cleanupLastIncludeContent)
        }
    }
}]).directive("uibTooltipClasses", ["$uibPosition", function ($uibPosition) {
    return {
        restrict: "A", link: function (scope, element, attrs) {
            if (scope.placement) {
                var position = $uibPosition.parsePlacement(scope.placement);
                element.addClass(position[0])
            }
            scope.popupClass && element.addClass(scope.popupClass), scope.animation && element.addClass(attrs.tooltipAnimationClass)
        }
    }
}]).directive("uibTooltipPopup", function () {
    return {restrict: "A", scope: {content: "@"}, templateUrl: "uib/template/tooltip/tooltip-popup.html"}
}).directive("uibTooltip", ["$uibTooltip", function ($uibTooltip) {
    return $uibTooltip("uibTooltip", "tooltip", "mouseenter")
}]).directive("uibTooltipTemplatePopup", function () {
    return {
        restrict: "A",
        scope: {contentExp: "&", originScope: "&"},
        templateUrl: "uib/template/tooltip/tooltip-template-popup.html"
    }
}).directive("uibTooltipTemplate", ["$uibTooltip", function ($uibTooltip) {
    return $uibTooltip("uibTooltipTemplate", "tooltip", "mouseenter", {useContentExp: !0})
}]).directive("uibTooltipHtmlPopup", function () {
    return {restrict: "A", scope: {contentExp: "&"}, templateUrl: "uib/template/tooltip/tooltip-html-popup.html"}
}).directive("uibTooltipHtml", ["$uibTooltip", function ($uibTooltip) {
    return $uibTooltip("uibTooltipHtml", "tooltip", "mouseenter", {useContentExp: !0})
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
    return {
        restrict: "A",
        scope: {uibTitle: "@", contentExp: "&", originScope: "&"},
        templateUrl: "uib/template/popover/popover-template.html"
    }
}).directive("uibPopoverTemplate", ["$uibTooltip", function ($uibTooltip) {
    return $uibTooltip("uibPopoverTemplate", "popover", "click", {useContentExp: !0})
}]).directive("uibPopoverHtmlPopup", function () {
    return {
        restrict: "A",
        scope: {contentExp: "&", uibTitle: "@"},
        templateUrl: "uib/template/popover/popover-html.html"
    }
}).directive("uibPopoverHtml", ["$uibTooltip", function ($uibTooltip) {
    return $uibTooltip("uibPopoverHtml", "popover", "click", {useContentExp: !0})
}]).directive("uibPopoverPopup", function () {
    return {restrict: "A", scope: {uibTitle: "@", content: "@"}, templateUrl: "uib/template/popover/popover.html"}
}).directive("uibPopover", ["$uibTooltip", function ($uibTooltip) {
    return $uibTooltip("uibPopover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", {
    animate: !0,
    max: 100
}).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function ($scope, $attrs, progressConfig) {
    function getMaxOrDefault() {
        return angular.isDefined($scope.maxParam) ? $scope.maxParam : progressConfig.max
    }

    var self = this,
        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
    this.bars = [], $scope.max = getMaxOrDefault(), this.addBar = function (bar, element, attrs) {
        animate || element.css({transition: "none"}), this.bars.push(bar), bar.max = getMaxOrDefault(), bar.title = attrs && angular.isDefined(attrs.title) ? attrs.title : "progressbar", bar.$watch("value", function (value) {
            bar.recalculatePercentage()
        }), bar.recalculatePercentage = function () {
            var totalPercentage = self.bars.reduce(function (total, bar) {
                return bar.percent = +(100 * bar.value / bar.max).toFixed(2), total + bar.percent
            }, 0);
            totalPercentage > 100 && (bar.percent -= totalPercentage - 100)
        }, bar.$on("$destroy", function () {
            element = null, self.removeBar(bar)
        })
    }, this.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1), this.bars.forEach(function (bar) {
            bar.recalculatePercentage()
        })
    }, $scope.$watch("maxParam", function (maxParam) {
        self.bars.forEach(function (bar) {
            bar.max = getMaxOrDefault(), bar.recalculatePercentage()
        })
    })
}]).directive("uibProgress", function () {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        require: "uibProgress",
        scope: {maxParam: "=?max"},
        templateUrl: "uib/template/progressbar/progress.html"
    }
}).directive("uibBar", function () {
    return {
        replace: !0,
        transclude: !0,
        require: "^uibProgress",
        scope: {value: "=", type: "@"},
        templateUrl: "uib/template/progressbar/bar.html",
        link: function (scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, element, attrs)
        }
    }
}).directive("uibProgressbar", function () {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        scope: {value: "=", maxParam: "=?max", type: "@"},
        templateUrl: "uib/template/progressbar/progressbar.html",
        link: function (scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, angular.element(element.children()[0]), {title: attrs.title})
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null,
    enableReset: !0,
    titles: ["one", "two", "three", "four", "five"]
}).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function ($scope, $attrs, ratingConfig) {
    var ngModelCtrl = {$setViewValue: angular.noop}, self = this;
    this.init = function (ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_, ngModelCtrl.$render = this.render, ngModelCtrl.$formatters.push(function (value) {
            return angular.isNumber(value) && value << 0 !== value && (value = Math.round(value)), value
        }), this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn, this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff, this.enableReset = angular.isDefined($attrs.enableReset) ? $scope.$parent.$eval($attrs.enableReset) : ratingConfig.enableReset;
        var tmpTitles = angular.isDefined($attrs.titles) ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles;
        this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ? tmpTitles : ratingConfig.titles;
        var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
        $scope.range = this.buildTemplateObjects(ratingStates)
    }, this.buildTemplateObjects = function (states) {
        for (var i = 0, n = states.length; i < n; i++) states[i] = angular.extend({index: i}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff,
            title: this.getTitle(i)
        }, states[i]);
        return states
    }, this.getTitle = function (index) {
        return index >= this.titles.length ? index + 1 : this.titles[index]
    }, $scope.rate = function (value) {
        if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
            var newViewValue = self.enableReset && ngModelCtrl.$viewValue === value ? 0 : value;
            ngModelCtrl.$setViewValue(newViewValue), ngModelCtrl.$render()
        }
    }, $scope.enter = function (value) {
        $scope.readonly || ($scope.value = value), $scope.onHover({value: value})
    }, $scope.reset = function () {
        $scope.value = ngModelCtrl.$viewValue, $scope.onLeave()
    }, $scope.onKeydown = function (evt) {
        /(37|38|39|40)/.test(evt.which) && (evt.preventDefault(), evt.stopPropagation(), $scope.rate($scope.value + (38 === evt.which || 39 === evt.which ? 1 : -1)))
    }, this.render = function () {
        $scope.value = ngModelCtrl.$viewValue, $scope.title = self.getTitle($scope.value - 1)
    }
}]).directive("uibRating", function () {
    return {
        require: ["uibRating", "ngModel"],
        restrict: "A",
        scope: {readonly: "=?readOnly", onHover: "&", onLeave: "&"},
        controller: "UibRatingController",
        templateUrl: "uib/template/rating/rating.html",
        link: function (scope, element, attrs, ctrls) {
            var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ratingCtrl.init(ngModelCtrl)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function ($scope) {
    function findTabIndex(index) {
        for (var i = 0; i < ctrl.tabs.length; i++) if (ctrl.tabs[i].index === index) return i
    }

    var oldIndex, ctrl = this;
    ctrl.tabs = [], ctrl.select = function (index, evt) {
        if (!destroyed) {
            var previousIndex = findTabIndex(oldIndex), previousSelected = ctrl.tabs[previousIndex];
            if (previousSelected) {
                if (previousSelected.tab.onDeselect({
                        $event: evt,
                        $selectedIndex: index
                    }), evt && evt.isDefaultPrevented()) return;
                previousSelected.tab.active = !1
            }
            var selected = ctrl.tabs[index];
            selected ? (selected.tab.onSelect({$event: evt}), selected.tab.active = !0, ctrl.active = selected.index, oldIndex = selected.index) : !selected && angular.isDefined(oldIndex) && (ctrl.active = null, oldIndex = null)
        }
    }, ctrl.addTab = function (tab) {
        if (ctrl.tabs.push({tab: tab, index: tab.index}), ctrl.tabs.sort(function (t1, t2) {
                return t1.index > t2.index ? 1 : t1.index < t2.index ? -1 : 0
            }), tab.index === ctrl.active || !angular.isDefined(ctrl.active) && 1 === ctrl.tabs.length) {
            var newActiveIndex = findTabIndex(tab.index);
            ctrl.select(newActiveIndex)
        }
    }, ctrl.removeTab = function (tab) {
        for (var index, i = 0; i < ctrl.tabs.length; i++) if (ctrl.tabs[i].tab === tab) {
            index = i;
            break
        }
        if (ctrl.tabs[index].index === ctrl.active) {
            var newActiveTabIndex = index === ctrl.tabs.length - 1 ? index - 1 : index + 1 % ctrl.tabs.length;
            ctrl.select(newActiveTabIndex)
        }
        ctrl.tabs.splice(index, 1)
    }, $scope.$watch("tabset.active", function (val) {
        angular.isDefined(val) && val !== oldIndex && ctrl.select(findTabIndex(val))
    });
    var destroyed;
    $scope.$on("$destroy", function () {
        destroyed = !0
    })
}]).directive("uibTabset", function () {
    return {
        transclude: !0,
        replace: !0,
        scope: {},
        bindToController: {active: "=?", type: "@"},
        controller: "UibTabsetController",
        controllerAs: "tabset",
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/tabs/tabset.html"
        },
        link: function (scope, element, attrs) {
            scope.vertical = !!angular.isDefined(attrs.vertical) && scope.$parent.$eval(attrs.vertical), scope.justified = !!angular.isDefined(attrs.justified) && scope.$parent.$eval(attrs.justified)
        }
    }
}).directive("uibTab", ["$parse", function ($parse) {
    return {
        require: "^uibTabset",
        replace: !0,
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || "uib/template/tabs/tab.html"
        },
        transclude: !0,
        scope: {heading: "@", index: "=?", classes: "@?", onSelect: "&select", onDeselect: "&deselect"},
        controller: function () {
        },
        controllerAs: "tab",
        link: function (scope, elm, attrs, tabsetCtrl, transclude) {
            scope.disabled = !1, attrs.disable && scope.$parent.$watch($parse(attrs.disable), function (value) {
                scope.disabled = !!value
            }), angular.isUndefined(attrs.index) && (tabsetCtrl.tabs && tabsetCtrl.tabs.length ? scope.index = Math.max.apply(null, tabsetCtrl.tabs.map(function (t) {
                return t.index
            })) + 1 : scope.index = 0), angular.isUndefined(attrs.classes) && (scope.classes = ""), scope.select = function (evt) {
                if (!scope.disabled) {
                    for (var index, i = 0; i < tabsetCtrl.tabs.length; i++) if (tabsetCtrl.tabs[i].tab === scope) {
                        index = i;
                        break
                    }
                    tabsetCtrl.select(index, evt)
                }
            }, tabsetCtrl.addTab(scope), scope.$on("$destroy", function () {
                tabsetCtrl.removeTab(scope)
            }), scope.$transcludeFn = transclude
        }
    }
}]).directive("uibTabHeadingTransclude", function () {
    return {
        restrict: "A", require: "^uibTab", link: function (scope, elm) {
            scope.$watch("headingElement", function (heading) {
                heading && (elm.html(""), elm.append(heading))
            })
        }
    }
}).directive("uibTabContentTransclude", function () {
    function isTabHeading(node) {
        return node.tagName && (node.hasAttribute("uib-tab-heading") || node.hasAttribute("data-uib-tab-heading") || node.hasAttribute("x-uib-tab-heading") || "uib-tab-heading" === node.tagName.toLowerCase() || "data-uib-tab-heading" === node.tagName.toLowerCase() || "x-uib-tab-heading" === node.tagName.toLowerCase() || "uib:tab-heading" === node.tagName.toLowerCase())
    }

    return {
        restrict: "A", require: "^uibTabset", link: function (scope, elm, attrs) {
            var tab = scope.$eval(attrs.uibTabContentTransclude).tab;
            tab.$transcludeFn(tab.$parent, function (contents) {
                angular.forEach(contents, function (node) {
                    isTabHeading(node) ? tab.headingElement = node : elm.append(node)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    showMeridian: !0,
    showSeconds: !1,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0,
    showSpinners: !0,
    templateUrl: "uib/template/timepicker/timepicker.html"
}).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function ($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig) {
    function getHoursFromTemplate() {
        var hours = +$scope.hours;
        if (($scope.showMeridian ? hours > 0 && hours < 13 : hours >= 0 && hours < 24) && "" !== $scope.hours) return $scope.showMeridian && (12 === hours && (hours = 0), $scope.meridian === meridians[1] && (hours += 12)), hours
    }

    function getMinutesFromTemplate() {
        var minutes = +$scope.minutes;
        if (minutes >= 0 && minutes < 60 && "" !== $scope.minutes) return minutes
    }

    function getSecondsFromTemplate() {
        var seconds = +$scope.seconds;
        return seconds >= 0 && seconds < 60 ? seconds : void 0
    }

    function pad(value, noPad) {
        return null === value ? "" : angular.isDefined(value) && value.toString().length < 2 && !noPad ? "0" + value : value.toString()
    }

    function refresh(keyboardChange) {
        makeValid(), ngModelCtrl.$setViewValue(new Date(selected)), updateTemplate(keyboardChange)
    }

    function makeValid() {
        hoursModelCtrl && hoursModelCtrl.$setValidity("hours", !0), minutesModelCtrl && minutesModelCtrl.$setValidity("minutes", !0), secondsModelCtrl && secondsModelCtrl.$setValidity("seconds", !0), ngModelCtrl.$setValidity("time", !0), $scope.invalidHours = !1, $scope.invalidMinutes = !1, $scope.invalidSeconds = !1
    }

    function updateTemplate(keyboardChange) {
        if (ngModelCtrl.$modelValue) {
            var hours = selected.getHours(), minutes = selected.getMinutes(), seconds = selected.getSeconds();
            $scope.showMeridian && (hours = 0 === hours || 12 === hours ? 12 : hours % 12), $scope.hours = "h" === keyboardChange ? hours : pad(hours, !padHours), "m" !== keyboardChange && ($scope.minutes = pad(minutes)), $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1], "s" !== keyboardChange && ($scope.seconds = pad(seconds)), $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1]
        } else $scope.hours = null, $scope.minutes = null, $scope.seconds = null, $scope.meridian = meridians[0]
    }

    function addSecondsToSelected(seconds) {
        selected = addSeconds(selected, seconds), refresh()
    }

    function addMinutes(selected, minutes) {
        return addSeconds(selected, 60 * minutes)
    }

    function addSeconds(date, seconds) {
        var dt = new Date(date.getTime() + 1e3 * seconds), newDate = new Date(date);
        return newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds()), newDate
    }

    function modelIsEmpty() {
        return (null === $scope.hours || "" === $scope.hours) && (null === $scope.minutes || "" === $scope.minutes) && (!$scope.showSeconds || $scope.showSeconds && (null === $scope.seconds || "" === $scope.seconds))
    }

    var hoursModelCtrl, minutesModelCtrl, secondsModelCtrl, selected = new Date, watchers = [],
        ngModelCtrl = {$setViewValue: angular.noop},
        meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
        padHours = !angular.isDefined($attrs.padHours) || $scope.$parent.$eval($attrs.padHours);
    $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0, $element.removeAttr("tabindex"), this.init = function (ngModelCtrl_, inputs) {
        ngModelCtrl = ngModelCtrl_, ngModelCtrl.$render = this.render, ngModelCtrl.$formatters.unshift(function (modelValue) {
            return modelValue ? new Date(modelValue) : null
        });
        var hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1), secondsInputEl = inputs.eq(2);
        hoursModelCtrl = hoursInputEl.controller("ngModel"), minutesModelCtrl = minutesInputEl.controller("ngModel"), secondsModelCtrl = secondsInputEl.controller("ngModel"), (angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel) && this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl), (angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys) && this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl), $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput, this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl)
    };
    var hourStep = timepickerConfig.hourStep;
    $attrs.hourStep && watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function (value) {
        hourStep = +value
    }));
    var minuteStep = timepickerConfig.minuteStep;
    $attrs.minuteStep && watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function (value) {
        minuteStep = +value
    }));
    var min;
    watchers.push($scope.$parent.$watch($parse($attrs.min), function (value) {
        var dt = new Date(value);
        min = isNaN(dt) ? void 0 : dt
    }));
    var max;
    watchers.push($scope.$parent.$watch($parse($attrs.max), function (value) {
        var dt = new Date(value);
        max = isNaN(dt) ? void 0 : dt
    }));
    var disabled = !1;
    $attrs.ngDisabled && watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function (value) {
        disabled = value
    })), $scope.noIncrementHours = function () {
        var incrementedSelected = addMinutes(selected, 60 * hourStep);
        return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min
    }, $scope.noDecrementHours = function () {
        var decrementedSelected = addMinutes(selected, 60 * -hourStep);
        return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max
    }, $scope.noIncrementMinutes = function () {
        var incrementedSelected = addMinutes(selected, minuteStep);
        return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min
    }, $scope.noDecrementMinutes = function () {
        var decrementedSelected = addMinutes(selected, -minuteStep);
        return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max
    }, $scope.noIncrementSeconds = function () {
        var incrementedSelected = addSeconds(selected, secondStep);
        return disabled || incrementedSelected > max || incrementedSelected < selected && incrementedSelected < min
    }, $scope.noDecrementSeconds = function () {
        var decrementedSelected = addSeconds(selected, -secondStep);
        return disabled || decrementedSelected < min || decrementedSelected > selected && decrementedSelected > max
    }, $scope.noToggleMeridian = function () {
        return selected.getHours() < 12 ? disabled || addMinutes(selected, 720) > max : disabled || addMinutes(selected, -720) < min
    };
    var secondStep = timepickerConfig.secondStep;
    $attrs.secondStep && watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function (value) {
        secondStep = +value
    })), $scope.showSeconds = timepickerConfig.showSeconds, $attrs.showSeconds && watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function (value) {
        $scope.showSeconds = !!value
    })), $scope.showMeridian = timepickerConfig.showMeridian, $attrs.showMeridian && watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function (value) {
        if ($scope.showMeridian = !!value, ngModelCtrl.$error.time) {
            var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
            angular.isDefined(hours) && angular.isDefined(minutes) && (selected.setHours(hours), refresh())
        } else updateTemplate()
    })), this.setupMousewheelEvents = function (hoursInputEl, minutesInputEl, secondsInputEl) {
        var isScrollingUp = function (e) {
            e.originalEvent && (e = e.originalEvent);
            var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
            return e.detail || delta > 0
        };
        hoursInputEl.on("mousewheel wheel", function (e) {
            disabled || $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours()), e.preventDefault()
        }), minutesInputEl.on("mousewheel wheel", function (e) {
            disabled || $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes()), e.preventDefault()
        }), secondsInputEl.on("mousewheel wheel", function (e) {
            disabled || $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds()), e.preventDefault()
        })
    }, this.setupArrowkeyEvents = function (hoursInputEl, minutesInputEl, secondsInputEl) {
        hoursInputEl.on("keydown", function (e) {
            disabled || (38 === e.which ? (e.preventDefault(), $scope.incrementHours(), $scope.$apply()) : 40 === e.which && (e.preventDefault(), $scope.decrementHours(), $scope.$apply()))
        }), minutesInputEl.on("keydown", function (e) {
            disabled || (38 === e.which ? (e.preventDefault(), $scope.incrementMinutes(), $scope.$apply()) : 40 === e.which && (e.preventDefault(), $scope.decrementMinutes(), $scope.$apply()))
        }), secondsInputEl.on("keydown", function (e) {
            disabled || (38 === e.which ? (e.preventDefault(), $scope.incrementSeconds(), $scope.$apply()) : 40 === e.which && (e.preventDefault(), $scope.decrementSeconds(), $scope.$apply()))
        })
    }, this.setupInputEvents = function (hoursInputEl, minutesInputEl, secondsInputEl) {
        if ($scope.readonlyInput) return $scope.updateHours = angular.noop, $scope.updateMinutes = angular.noop, void($scope.updateSeconds = angular.noop);
        var invalidate = function (invalidHours, invalidMinutes, invalidSeconds) {
            ngModelCtrl.$setViewValue(null), ngModelCtrl.$setValidity("time", !1), angular.isDefined(invalidHours) && ($scope.invalidHours = invalidHours, hoursModelCtrl && hoursModelCtrl.$setValidity("hours", !1)), angular.isDefined(invalidMinutes) && ($scope.invalidMinutes = invalidMinutes, minutesModelCtrl && minutesModelCtrl.$setValidity("minutes", !1)), angular.isDefined(invalidSeconds) && ($scope.invalidSeconds = invalidSeconds, secondsModelCtrl && secondsModelCtrl.$setValidity("seconds", !1))
        };
        $scope.updateHours = function () {
            var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
            ngModelCtrl.$setDirty(), angular.isDefined(hours) && angular.isDefined(minutes) ? (selected.setHours(hours), selected.setMinutes(minutes), selected < min || selected > max ? invalidate(!0) : refresh("h")) : invalidate(!0)
        }, hoursInputEl.on("blur", function (e) {
            ngModelCtrl.$setTouched(), modelIsEmpty() ? makeValid() : null === $scope.hours || "" === $scope.hours ? invalidate(!0) : !$scope.invalidHours && $scope.hours < 10 && $scope.$apply(function () {
                $scope.hours = pad($scope.hours, !padHours)
            })
        }), $scope.updateMinutes = function () {
            var minutes = getMinutesFromTemplate(), hours = getHoursFromTemplate();
            ngModelCtrl.$setDirty(), angular.isDefined(minutes) && angular.isDefined(hours) ? (selected.setHours(hours), selected.setMinutes(minutes), selected < min || selected > max ? invalidate(void 0, !0) : refresh("m")) : invalidate(void 0, !0)
        }, minutesInputEl.on("blur", function (e) {
            ngModelCtrl.$setTouched(), modelIsEmpty() ? makeValid() : null === $scope.minutes ? invalidate(void 0, !0) : !$scope.invalidMinutes && $scope.minutes < 10 && $scope.$apply(function () {
                $scope.minutes = pad($scope.minutes)
            })
        }), $scope.updateSeconds = function () {
            var seconds = getSecondsFromTemplate();
            ngModelCtrl.$setDirty(), angular.isDefined(seconds) ? (selected.setSeconds(seconds), refresh("s")) : invalidate(void 0, void 0, !0)
        }, secondsInputEl.on("blur", function (e) {
            modelIsEmpty() ? makeValid() : !$scope.invalidSeconds && $scope.seconds < 10 && $scope.$apply(function () {
                $scope.seconds = pad($scope.seconds)
            })
        })
    }, this.render = function () {
        var date = ngModelCtrl.$viewValue;
        isNaN(date) ? (ngModelCtrl.$setValidity("time", !1), $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (date && (selected = date), selected < min || selected > max ? (ngModelCtrl.$setValidity("time", !1), $scope.invalidHours = !0, $scope.invalidMinutes = !0) : makeValid(), updateTemplate())
    }, $scope.showSpinners = angular.isDefined($attrs.showSpinners) ? $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners, $scope.incrementHours = function () {
        $scope.noIncrementHours() || addSecondsToSelected(60 * hourStep * 60)
    }, $scope.decrementHours = function () {
        $scope.noDecrementHours() || addSecondsToSelected(60 * -hourStep * 60)
    }, $scope.incrementMinutes = function () {
        $scope.noIncrementMinutes() || addSecondsToSelected(60 * minuteStep)
    }, $scope.decrementMinutes = function () {
        $scope.noDecrementMinutes() || addSecondsToSelected(60 * -minuteStep)
    }, $scope.incrementSeconds = function () {
        $scope.noIncrementSeconds() || addSecondsToSelected(secondStep)
    }, $scope.decrementSeconds = function () {
        $scope.noDecrementSeconds() || addSecondsToSelected(-secondStep)
    }, $scope.toggleMeridian = function () {
        var minutes = getMinutesFromTemplate(), hours = getHoursFromTemplate();
        $scope.noToggleMeridian() || (angular.isDefined(minutes) && angular.isDefined(hours) ? addSecondsToSelected(720 * (selected.getHours() < 12 ? 60 : -60)) : $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0])
    }, $scope.blur = function () {
        ngModelCtrl.$setTouched()
    }, $scope.$on("$destroy", function () {
        for (; watchers.length;) watchers.shift()()
    })
}]).directive("uibTimepicker", ["uibTimepickerConfig", function (uibTimepickerConfig) {
    return {
        require: ["uibTimepicker", "?^ngModel"],
        restrict: "A",
        controller: "UibTimepickerController",
        controllerAs: "timepicker",
        scope: {},
        templateUrl: function (element, attrs) {
            return attrs.templateUrl || uibTimepickerConfig.templateUrl
        },
        link: function (scope, element, attrs, ctrls) {
            var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && timepickerCtrl.init(ngModelCtrl, element.find("input"))
        }
    }
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.debounce", "ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function ($parse) {
    return {
        parse: function (input) {
            var match = input.match(/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/);
            if (!match) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + input + '".');
            return {
                itemName: match[3],
                source: $parse(match[4]),
                viewMapper: $parse(match[2] || match[1]),
                modelMapper: $parse(match[1])
            }
        }
    }
}]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$$debounce", "$uibPosition", "uibTypeaheadParser", function (originalScope, element, attrs, $compile, $parse, $q, $timeout, $document, $window, $rootScope, $$debounce, $position, typeaheadParser) {
    function fireRecalculating() {
        scope.moveInProgress || (scope.moveInProgress = !0, scope.$digest()), debouncedRecalculate()
    }

    function recalculatePosition() {
        scope.position = appendToBody ? $position.offset(element) : $position.position(element), scope.position.top += element.prop("offsetHeight")
    }

    function extractOptions(ngModelCtrl) {
        var ngModelOptions;
        return angular.version.minor < 6 ? (ngModelOptions = ngModelCtrl.$options || {}, ngModelOptions.getOption = function (key) {
            return ngModelOptions[key]
        }) : ngModelOptions = ngModelCtrl.$options, ngModelOptions
    }

    var modelCtrl, ngModelOptions, HOT_KEYS = [9, 13, 27, 38, 40],
        minLength = originalScope.$eval(attrs.typeaheadMinLength);
    minLength || 0 === minLength || (minLength = 1), originalScope.$watch(attrs.typeaheadMinLength, function (newVal) {
        minLength = newVal || 0 === newVal ? newVal : 1
    });
    var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0,
        isEditable = !1 !== originalScope.$eval(attrs.typeaheadEditable);
    originalScope.$watch(attrs.typeaheadEditable, function (newVal) {
        isEditable = !1 !== newVal
    });
    var hasFocus, selected, isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop,
        isSelectEvent = attrs.typeaheadShouldSelect ? $parse(attrs.typeaheadShouldSelect) : function (scope, vals) {
            var evt = vals.$event;
            return 13 === evt.which || 9 === evt.which
        }, onSelectCallback = $parse(attrs.typeaheadOnSelect),
        isSelectOnBlur = !!angular.isDefined(attrs.typeaheadSelectOnBlur) && originalScope.$eval(attrs.typeaheadSelectOnBlur),
        isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop,
        inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : void 0,
        appendToBody = !!attrs.typeaheadAppendToBody && originalScope.$eval(attrs.typeaheadAppendToBody),
        appendTo = attrs.typeaheadAppendTo ? originalScope.$eval(attrs.typeaheadAppendTo) : null,
        focusFirst = !1 !== originalScope.$eval(attrs.typeaheadFocusFirst),
        selectOnExact = !!attrs.typeaheadSelectOnExact && originalScope.$eval(attrs.typeaheadSelectOnExact),
        isOpenSetter = $parse(attrs.typeaheadIsOpen).assign || angular.noop,
        showHint = originalScope.$eval(attrs.typeaheadShowHint) || !1, parsedModel = $parse(attrs.ngModel),
        invokeModelSetter = $parse(attrs.ngModel + "($$$p)"), $setModelValue = function (scope, newValue) {
            return angular.isFunction(parsedModel(originalScope)) && ngModelOptions.getOption("getterSetter") ? invokeModelSetter(scope, {$$$p: newValue}) : parsedModel.assign(scope, newValue)
        }, parserResult = typeaheadParser.parse(attrs.uibTypeahead), scope = originalScope.$new(),
        offDestroy = originalScope.$on("$destroy", function () {
            scope.$destroy()
        });
    scope.$on("$destroy", offDestroy);
    var popupId = "typeahead-" + scope.$id + "-" + Math.floor(1e4 * Math.random());
    element.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": popupId});
    var inputsContainer, hintInputElem;
    showHint && (inputsContainer = angular.element("<div></div>"), inputsContainer.css("position", "relative"), element.after(inputsContainer), hintInputElem = element.clone(), hintInputElem.attr("placeholder", ""), hintInputElem.attr("tabindex", "-1"), hintInputElem.val(""), hintInputElem.css({
        position: "absolute",
        top: "0px",
        left: "0px",
        "border-color": "transparent",
        "box-shadow": "none",
        opacity: 1,
        background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
        color: "#999"
    }), element.css({
        position: "relative",
        "vertical-align": "top",
        "background-color": "transparent"
    }), hintInputElem.attr("id") && hintInputElem.removeAttr("id"), inputsContainer.append(hintInputElem), hintInputElem.after(element));
    var popUpEl = angular.element("<div uib-typeahead-popup></div>");
    popUpEl.attr({
        id: popupId,
        matches: "matches",
        active: "activeIdx",
        select: "select(activeIdx, evt)",
        "move-in-progress": "moveInProgress",
        query: "query",
        position: "position",
        "assign-is-open": "assignIsOpen(isOpen)",
        debounce: "debounceUpdate"
    }), angular.isDefined(attrs.typeaheadTemplateUrl) && popUpEl.attr("template-url", attrs.typeaheadTemplateUrl), angular.isDefined(attrs.typeaheadPopupTemplateUrl) && popUpEl.attr("popup-template-url", attrs.typeaheadPopupTemplateUrl);
    var resetHint = function () {
        showHint && hintInputElem.val("")
    }, resetMatches = function () {
        scope.matches = [], scope.activeIdx = -1, element.attr("aria-expanded", !1), resetHint()
    }, getMatchId = function (index) {
        return popupId + "-option-" + index
    };
    scope.$watch("activeIdx", function (index) {
        index < 0 ? element.removeAttr("aria-activedescendant") : element.attr("aria-activedescendant", getMatchId(index))
    });
    var inputIsExactMatch = function (inputValue, index) {
        return !!(scope.matches.length > index && inputValue) && inputValue.toUpperCase() === scope.matches[index].label.toUpperCase()
    }, getMatchesAsync = function (inputValue, evt) {
        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, !0), isNoResultsSetter(originalScope, !1), $q.when(parserResult.source(originalScope, locals)).then(function (matches) {
            var onCurrentRequest = inputValue === modelCtrl.$viewValue;
            if (onCurrentRequest && hasFocus) if (matches && matches.length > 0) {
                scope.activeIdx = focusFirst ? 0 : -1, isNoResultsSetter(originalScope, !1), scope.matches.length = 0;
                for (var i = 0; i < matches.length; i++) locals[parserResult.itemName] = matches[i], scope.matches.push({
                    id: getMatchId(i),
                    label: parserResult.viewMapper(scope, locals),
                    model: matches[i]
                });
                if (scope.query = inputValue, recalculatePosition(), element.attr("aria-expanded", !0), selectOnExact && 1 === scope.matches.length && inputIsExactMatch(inputValue, 0) && (angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate) ? $$debounce(function () {
                        scope.select(0, evt)
                    }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate.default) : scope.select(0, evt)), showHint) {
                    var firstLabel = scope.matches[0].label;
                    angular.isString(inputValue) && inputValue.length > 0 && firstLabel.slice(0, inputValue.length).toUpperCase() === inputValue.toUpperCase() ? hintInputElem.val(inputValue + firstLabel.slice(inputValue.length)) : hintInputElem.val("")
                }
            } else resetMatches(), isNoResultsSetter(originalScope, !0);
            onCurrentRequest && isLoadingSetter(originalScope, !1)
        }, function () {
            resetMatches(), isLoadingSetter(originalScope, !1), isNoResultsSetter(originalScope, !0)
        })
    };
    appendToBody && (angular.element($window).on("resize", fireRecalculating), $document.find("body").on("scroll", fireRecalculating));
    var debouncedRecalculate = $$debounce(function () {
        scope.matches.length && recalculatePosition(), scope.moveInProgress = !1
    }, 200);
    scope.moveInProgress = !1, scope.query = void 0;
    var timeoutPromise, scheduleSearchWithTimeout = function (inputValue) {
        timeoutPromise = $timeout(function () {
            getMatchesAsync(inputValue)
        }, waitTime)
    }, cancelPreviousTimeout = function () {
        timeoutPromise && $timeout.cancel(timeoutPromise)
    };
    resetMatches(), scope.assignIsOpen = function (isOpen) {
        isOpenSetter(originalScope, isOpen)
    }, scope.select = function (activeIdx, evt) {
        var model, item, locals = {};
        selected = !0, locals[parserResult.itemName] = item = scope.matches[activeIdx].model, model = parserResult.modelMapper(originalScope, locals), $setModelValue(originalScope, model), modelCtrl.$setValidity("editable", !0), modelCtrl.$setValidity("parse", !0), onSelectCallback(originalScope, {
            $item: item,
            $model: model,
            $label: parserResult.viewMapper(originalScope, locals),
            $event: evt
        }), resetMatches(), !1 !== scope.$eval(attrs.typeaheadFocusOnSelect) && $timeout(function () {
            element[0].focus()
        }, 0, !1)
    }, element.on("keydown", function (evt) {
        if (0 !== scope.matches.length && -1 !== HOT_KEYS.indexOf(evt.which)) {
            var shouldSelect = isSelectEvent(originalScope, {$event: evt});
            if (-1 === scope.activeIdx && shouldSelect || 9 === evt.which && evt.shiftKey) return resetMatches(), void scope.$digest();
            evt.preventDefault();
            var target;
            switch (evt.which) {
                case 27:
                    evt.stopPropagation(), resetMatches(), originalScope.$digest();
                    break;
                case 38:
                    scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1, scope.$digest(), target = popUpEl[0].querySelectorAll(".uib-typeahead-match")[scope.activeIdx], target.parentNode.scrollTop = target.offsetTop;
                    break;
                case 40:
                    scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length, scope.$digest(), target = popUpEl[0].querySelectorAll(".uib-typeahead-match")[scope.activeIdx], target.parentNode.scrollTop = target.offsetTop;
                    break;
                default:
                    shouldSelect && scope.$apply(function () {
                        angular.isNumber(scope.debounceUpdate) || angular.isObject(scope.debounceUpdate) ? $$debounce(function () {
                            scope.select(scope.activeIdx, evt)
                        }, angular.isNumber(scope.debounceUpdate) ? scope.debounceUpdate : scope.debounceUpdate.default) : scope.select(scope.activeIdx, evt)
                    })
            }
        }
    }), element.on("focus", function (evt) {
        hasFocus = !0, 0 !== minLength || modelCtrl.$viewValue || $timeout(function () {
            getMatchesAsync(modelCtrl.$viewValue, evt)
        }, 0)
    }), element.on("blur", function (evt) {
        isSelectOnBlur && scope.matches.length && -1 !== scope.activeIdx && !selected && (selected = !0, scope.$apply(function () {
            angular.isObject(scope.debounceUpdate) && angular.isNumber(scope.debounceUpdate.blur) ? $$debounce(function () {
                scope.select(scope.activeIdx, evt)
            }, scope.debounceUpdate.blur) : scope.select(scope.activeIdx, evt)
        })), !isEditable && modelCtrl.$error.editable && (modelCtrl.$setViewValue(), scope.$apply(function () {
            modelCtrl.$setValidity("editable", !0), modelCtrl.$setValidity("parse", !0)
        }), element.val("")), hasFocus = !1, selected = !1
    });
    var dismissClickHandler = function (evt) {
        element[0] !== evt.target && 3 !== evt.which && 0 !== scope.matches.length && (resetMatches(), $rootScope.$$phase || originalScope.$digest())
    };
    $document.on("click", dismissClickHandler), originalScope.$on("$destroy", function () {
        $document.off("click", dismissClickHandler), (appendToBody || appendTo) && $popup.remove(), appendToBody && (angular.element($window).off("resize", fireRecalculating), $document.find("body").off("scroll", fireRecalculating)), popUpEl.remove(), showHint && inputsContainer.remove()
    });
    var $popup = $compile(popUpEl)(scope);
    appendToBody ? $document.find("body").append($popup) : appendTo ? angular.element(appendTo).eq(0).append($popup) : element.after($popup), this.init = function (_modelCtrl) {
        modelCtrl = _modelCtrl, ngModelOptions = extractOptions(modelCtrl), scope.debounceUpdate = $parse(ngModelOptions.getOption("debounce"))(originalScope), modelCtrl.$parsers.unshift(function (inputValue) {
            return hasFocus = !0, 0 === minLength || inputValue && inputValue.length >= minLength ? waitTime > 0 ? (cancelPreviousTimeout(), scheduleSearchWithTimeout(inputValue)) : getMatchesAsync(inputValue) : (isLoadingSetter(originalScope, !1), cancelPreviousTimeout(), resetMatches()), isEditable ? inputValue : inputValue ? void modelCtrl.$setValidity("editable", !1) : (modelCtrl.$setValidity("editable", !0), null)
        }), modelCtrl.$formatters.push(function (modelValue) {
            var candidateViewValue, emptyViewValue, locals = {};
            return isEditable || modelCtrl.$setValidity("editable", !0), inputFormatter ? (locals.$model = modelValue, inputFormatter(originalScope, locals)) : (locals[parserResult.itemName] = modelValue, candidateViewValue = parserResult.viewMapper(originalScope, locals), locals[parserResult.itemName] = void 0, emptyViewValue = parserResult.viewMapper(originalScope, locals), candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue)
        })
    }
}]).directive("uibTypeahead", function () {
    return {
        controller: "UibTypeaheadController",
        require: ["ngModel", "uibTypeahead"],
        link: function (originalScope, element, attrs, ctrls) {
            ctrls[1].init(ctrls[0])
        }
    }
}).directive("uibTypeaheadPopup", ["$$debounce", function ($$debounce) {
    return {
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "&",
            moveInProgress: "=",
            select: "&",
            assignIsOpen: "&",
            debounce: "&"
        }, replace: !0, templateUrl: function (element, attrs) {
            return attrs.popupTemplateUrl || "uib/template/typeahead/typeahead-popup.html"
        }, link: function (scope, element, attrs) {
            scope.templateUrl = attrs.templateUrl, scope.isOpen = function () {
                var isDropdownOpen = scope.matches.length > 0;
                return scope.assignIsOpen({isOpen: isDropdownOpen}), isDropdownOpen
            }, scope.isActive = function (matchIdx) {
                return scope.active === matchIdx
            }, scope.selectActive = function (matchIdx) {
                scope.active = matchIdx
            }, scope.selectMatch = function (activeIdx, evt) {
                var debounce = scope.debounce();
                angular.isNumber(debounce) || angular.isObject(debounce) ? $$debounce(function () {
                    scope.select({activeIdx: activeIdx, evt: evt})
                }, angular.isNumber(debounce) ? debounce : debounce.default) : scope.select({
                    activeIdx: activeIdx,
                    evt: evt
                })
            }
        }
    }
}]).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function ($templateRequest, $compile, $parse) {
    return {
        scope: {index: "=", match: "=", query: "="}, link: function (scope, element, attrs) {
            var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || "uib/template/typeahead/typeahead-match.html";
            $templateRequest(tplUrl).then(function (tplContent) {
                var tplEl = angular.element(tplContent.trim());
                element.replaceWith(tplEl), $compile(tplEl)(scope)
            })
        }
    }
}]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function ($sce, $injector, $log) {
    function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    function containsHtml(matchItem) {
        return /<.*>/g.test(matchItem)
    }

    var isSanitizePresent;
    return isSanitizePresent = $injector.has("$sanitize"), function (matchItem, query) {
        return !isSanitizePresent && containsHtml(matchItem) && $log.warn("Unsafe use of typeahead please use ngSanitize"), matchItem = query ? ("" + matchItem).replace(new RegExp(escapeRegexp(query), "gi"), "<strong>$&</strong>") : matchItem, isSanitizePresent || (matchItem = $sce.trustAsHtml(matchItem)), matchItem
    }
}]), angular.module("ui.bootstrap.carousel").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0
}), angular.module("ui.bootstrap.datepicker").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'), angular.$$uibDatepickerCss = !0
}), angular.module("ui.bootstrap.position").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0
}), angular.module("ui.bootstrap.datepickerPopup").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'), angular.$$uibDatepickerpopupCss = !0
}), angular.module("ui.bootstrap.tooltip").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'), angular.$$uibTooltipCss = !0
}), angular.module("ui.bootstrap.timepicker").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'), angular.$$uibTimepickerCss = !0
}), angular.module("ui.bootstrap.typeahead").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'), angular.$$uibTypeaheadCss = !0
}), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.tabindex", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.isClass", "ui.bootstrap.datepicker", "ui.bootstrap.position", "ui.bootstrap.datepickerPopup", "ui.bootstrap.debounce", "ui.bootstrap.dropdown", "ui.bootstrap.stackedMap", "ui.bootstrap.modal", "ui.bootstrap.paging", "ui.bootstrap.pager", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["uib/template/accordion/accordion-group.html", "uib/template/accordion/accordion.html", "uib/template/alert/alert.html", "uib/template/carousel/carousel.html", "uib/template/carousel/slide.html", "uib/template/datepicker/datepicker.html", "uib/template/datepicker/day.html", "uib/template/datepicker/month.html", "uib/template/datepicker/year.html", "uib/template/datepickerPopup/popup.html", "uib/template/modal/window.html", "uib/template/pager/pager.html", "uib/template/pagination/pagination.html", "uib/template/tooltip/tooltip-html-popup.html", "uib/template/tooltip/tooltip-popup.html", "uib/template/tooltip/tooltip-template-popup.html", "uib/template/popover/popover-html.html", "uib/template/popover/popover-template.html", "uib/template/popover/popover.html", "uib/template/progressbar/bar.html", "uib/template/progressbar/progress.html", "uib/template/progressbar/progressbar.html", "uib/template/rating/rating.html", "uib/template/tabs/tab.html", "uib/template/tabs/tabset.html", "uib/template/timepicker/timepicker.html", "uib/template/typeahead/typeahead-match.html", "uib/template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("uibCollapse", ["$animate", "$q", "$parse", "$injector", function (a, b, c, d) {
    var e = d.has("$animateCss") ? d.get("$animateCss") : null;
    return {
        link: function (d, f, g) {
            function i(a) {
                return r ? {width: a.scrollWidth + "px"} : {height: a.scrollHeight + "px"}
            }

            function j() {
                f.hasClass("collapse") && f.hasClass("in") || b.resolve(n(d)).then(function () {
                    f.removeClass("collapse").addClass("collapsing").attr("aria-expanded", !0).attr("aria-hidden", !1), e ? e(f, {
                        addClass: "in",
                        easing: "ease",
                        css: {overflow: "hidden"},
                        to: i(f[0])
                    }).start().finally(k) : a.addClass(f, "in", {css: {overflow: "hidden"}, to: i(f[0])}).then(k)
                })
            }

            function k() {
                f.removeClass("collapsing").addClass("collapse").css(s), o(d)
            }

            function l() {
                return f.hasClass("collapse") || f.hasClass("in") ? void b.resolve(p(d)).then(function () {
                    f.css(i(f[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded", !1).attr("aria-hidden", !0), e ? e(f, {
                        removeClass: "in",
                        to: t
                    }).start().finally(m) : a.removeClass(f, "in", {to: t}).then(m)
                }) : m()
            }

            function m() {
                f.css(t), f.removeClass("collapsing").addClass("collapse"), q(d)
            }

            var n = c(g.expanding), o = c(g.expanded), p = c(g.collapsing), q = c(g.collapsed), r = !1, s = {}, t = {};
            (function () {
                r = !!("horizontal" in g), r ? (s = {width: ""}, t = {width: "0"}) : (s = {height: ""}, t = {height: "0"}), d.$eval(g.uibCollapse) || f.addClass("in").addClass("collapse").attr("aria-expanded", !0).attr("aria-hidden", !1).css(s)
            })(), d.$watch(g.uibCollapse, function (a) {
                a ? l() : j()
            })
        }
    }
}]), angular.module("ui.bootstrap.tabindex", []).directive("uibTabindexToggle", function () {
    return {
        restrict: "A", link: function (a, b, c) {
            c.$observe("disabled", function (a) {
                c.$set("tabindex", a ? -1 : null)
            })
        }
    }
}), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse", "ui.bootstrap.tabindex"]).constant("uibAccordionConfig", {closeOthers: !0}).controller("UibAccordionController", ["$scope", "$attrs", "uibAccordionConfig", function (a, b, c) {
    this.groups = [], this.closeOthers = function (d) {
        (angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers) && angular.forEach(this.groups, function (a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function (a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function (c) {
            b.removeGroup(a)
        })
    }, this.removeGroup = function (a) {
        var b = this.groups.indexOf(a);
        -1 !== b && this.groups.splice(b, 1)
    }
}]).directive("uibAccordion", function () {
    return {
        controller: "UibAccordionController",
        controllerAs: "accordion",
        transclude: !0,
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/accordion/accordion.html"
        }
    }
}).directive("uibAccordionGroup", function () {
    return {
        require: "^uibAccordion", transclude: !0, restrict: "A", templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/accordion/accordion-group.html"
        }, scope: {heading: "@", panelClass: "@?", isOpen: "=?", isDisabled: "=?"}, controller: function () {
            this.setHeading = function (a) {
                this.heading = a
            }
        }, link: function (a, b, c, d) {
            b.addClass("panel"), d.addGroup(a), a.openClass = c.openClass || "panel-open", a.panelClass = c.panelClass || "panel-default", a.$watch("isOpen", function (c) {
                b.toggleClass(a.openClass, !!c), c && d.closeOthers(a)
            }), a.toggleOpen = function (b) {
                a.isDisabled || b && 32 !== b.which || (a.isOpen = !a.isOpen)
            };
            var e = "accordiongroup-" + a.$id + "-" + Math.floor(1e4 * Math.random());
            a.headingId = e + "-tab", a.panelId = e + "-panel"
        }
    }
}).directive("uibAccordionHeading", function () {
    return {
        transclude: !0, template: "", replace: !0, require: "^uibAccordionGroup", link: function (a, b, c, d, e) {
            d.setHeading(e(a, angular.noop))
        }
    }
}).directive("uibAccordionTransclude", function () {
    return {
        require: "^uibAccordionGroup", link: function (b, c, d, e) {
            b.$watch(function () {
                return e[d.uibAccordionTransclude]
            }, function (b) {
                if (b) {
                    var d = angular.element(c[0].querySelector("uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"));
                    d.html(""), d.append(b)
                }
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("UibAlertController", ["$scope", "$element", "$attrs", "$interpolate", "$timeout", function (a, b, c, d, e) {
    a.closeable = !!c.close, b.addClass("alert"), c.$set("role", "alert"), a.closeable && b.addClass("alert-dismissible");
    var f = angular.isDefined(c.dismissOnTimeout) ? d(c.dismissOnTimeout)(a.$parent) : null;
    f && e(function () {
        a.close()
    }, parseInt(f, 10))
}]).directive("uibAlert", function () {
    return {
        controller: "UibAlertController", controllerAs: "alert", restrict: "A", templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/alert/alert.html"
        }, transclude: !0, scope: {close: "&"}
    }
}), angular.module("ui.bootstrap.buttons", []).constant("uibButtonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("UibButtonsController", ["uibButtonConfig", function (a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("uibBtnRadio", ["$parse", function (a) {
    return {
        require: ["uibBtnRadio", "ngModel"],
        controller: "UibButtonsController",
        controllerAs: "buttons",
        link: function (b, c, d, e) {
            var f = e[0], g = e[1], h = a(d.uibUncheckable);
            c.find("input").css({display: "none"}), g.$render = function () {
                c.toggleClass(f.activeClass, angular.equals(g.$modelValue, b.$eval(d.uibBtnRadio)))
            }, c.on(f.toggleEvent, function () {
                if (!d.disabled) {
                    var a = c.hasClass(f.activeClass);
                    a && !angular.isDefined(d.uncheckable) || b.$apply(function () {
                        g.$setViewValue(a ? null : b.$eval(d.uibBtnRadio)), g.$render()
                    })
                }
            }), d.uibUncheckable && b.$watch(h, function (a) {
                d.$set("uncheckable", a ? "" : void 0)
            })
        }
    }
}]).directive("uibBtnCheckbox", function () {
    return {
        require: ["uibBtnCheckbox", "ngModel"],
        controller: "UibButtonsController",
        controllerAs: "button",
        link: function (a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                return angular.isDefined(b) ? a.$eval(b) : c
            }

            var h = d[0], i = d[1];
            b.find("input").css({display: "none"}), i.$render = function () {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.on(h.toggleEvent, function () {
                c.disabled || a.$apply(function () {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", []).controller("UibCarouselController", ["$scope", "$element", "$interval", "$timeout", "$animate", function (a, b, c, d, e) {
    function f() {
        for (; t.length;) t.shift()
    }

    function g(a) {
        for (var b = 0; b < q.length; b++) q[b].slide.active = b === a
    }

    function h(c, d, i) {
        if (!u) {
            if (angular.extend(c, {direction: i}), angular.extend(q[s].slide || {}, {direction: i}), e.enabled(b) && !a.$currentTransition && q[d].element && p.slides.length > 1) {
                q[d].element.data(r, c.direction);
                var j = p.getCurrentIndex();
                angular.isNumber(j) && q[j].element && q[j].element.data(r, c.direction), a.$currentTransition = !0, e.on("addClass", q[d].element, function (b, c) {
                    if ("close" === c && (a.$currentTransition = null, e.off("addClass", b), t.length)) {
                        var d = t.pop().slide, g = d.index, i = g > p.getCurrentIndex() ? "next" : "prev";
                        f(), h(d, g, i)
                    }
                })
            }
            a.active = c.index, s = c.index, g(d), l()
        }
    }

    function i(a) {
        for (var b = 0; b < q.length; b++) if (q[b].slide === a) return b
    }

    function j() {
        n && (c.cancel(n), n = null)
    }

    function k(b) {
        b.length || (a.$currentTransition = null, f())
    }

    function l() {
        j();
        var b = +a.interval;
        !isNaN(b) && b > 0 && (n = c(m, b))
    }

    function m() {
        var b = +a.interval;
        o && !isNaN(b) && b > 0 && q.length ? a.next() : a.pause()
    }

    var n, o, p = this, q = p.slides = a.slides = [], r = "uib-slideDirection", s = a.active, t = [], u = !1;
    b.addClass("carousel"), p.addSlide = function (b, c) {
        q.push({slide: b, element: c}), q.sort(function (a, b) {
            return +a.slide.index - +b.slide.index
        }), (b.index === a.active || 1 === q.length && !angular.isNumber(a.active)) && (a.$currentTransition && (a.$currentTransition = null), s = b.index, a.active = b.index, g(s), p.select(q[i(b)]), 1 === q.length && a.play())
    }, p.getCurrentIndex = function () {
        for (var a = 0; a < q.length; a++) if (q[a].slide.index === s) return a
    }, p.next = a.next = function () {
        var b = (p.getCurrentIndex() + 1) % q.length;
        return 0 === b && a.noWrap() ? void a.pause() : p.select(q[b], "next")
    }, p.prev = a.prev = function () {
        var b = p.getCurrentIndex() - 1 < 0 ? q.length - 1 : p.getCurrentIndex() - 1;
        return a.noWrap() && b === q.length - 1 ? void a.pause() : p.select(q[b], "prev")
    }, p.removeSlide = function (b) {
        var c = i(b), d = t.indexOf(q[c]);
        -1 !== d && t.splice(d, 1), q.splice(c, 1), q.length > 0 && s === c ? c >= q.length ? (s = q.length - 1, a.active = s, g(s), p.select(q[q.length - 1])) : (s = c, a.active = s, g(s), p.select(q[c])) : s > c && (s--, a.active = s), 0 === q.length && (s = null, a.active = null, f())
    }, p.select = a.select = function (b, c) {
        var d = i(b.slide);
        void 0 === c && (c = d > p.getCurrentIndex() ? "next" : "prev"), b.slide.index === s || a.$currentTransition ? b && b.slide.index !== s && a.$currentTransition && t.push(q[d]) : h(b.slide, d, c)
    }, a.indexOfSlide = function (a) {
        return +a.slide.index
    }, a.isActive = function (b) {
        return a.active === b.slide.index
    }, a.isPrevDisabled = function () {
        return 0 === a.active && a.noWrap()
    }, a.isNextDisabled = function () {
        return a.active === q.length - 1 && a.noWrap()
    }, a.pause = function () {
        a.noPause || (o = !1, j())
    }, a.play = function () {
        o || (o = !0, l())
    }, b.on("mouseenter", a.pause), b.on("mouseleave", a.play), a.$on("$destroy", function () {
        u = !0, j()
    }), a.$watch("noTransition", function (a) {
        e.enabled(b, !a)
    }), a.$watch("interval", l), a.$watchCollection("slides", k), a.$watch("active", function (a) {
        if (angular.isNumber(a) && s !== a) {
            for (var b = 0; b < q.length; b++) if (q[b].slide.index === a) {
                a = b;
                break
            }
            q[a] && (g(a), p.select(q[a]), s = a)
        }
    })
}]).directive("uibCarousel", function () {
    return {
        transclude: !0,
        controller: "UibCarouselController",
        controllerAs: "carousel",
        restrict: "A",
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/carousel/carousel.html"
        },
        scope: {active: "=", interval: "=", noTransition: "=", noPause: "=", noWrap: "&"}
    }
}).directive("uibSlide", ["$animate", function (a) {
    return {
        require: "^uibCarousel", restrict: "A", transclude: !0, templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/carousel/slide.html"
        }, scope: {actual: "=?", index: "=?"}, link: function (b, c, d, e) {
            c.addClass("item"), e.addSlide(b, c), b.$on("$destroy", function () {
                e.removeSlide(b)
            }), b.$watch("active", function (b) {
                a[b ? "addClass" : "removeClass"](c, "active")
            })
        }
    }
}]).animation(".item", ["$animateCss", function (a) {
    function b(a, b, c) {
        a.removeClass(b), c && c()
    }

    var c = "uib-slideDirection";
    return {
        beforeAddClass: function (d, e, f) {
            if ("active" === e) {
                var g = !1, h = d.data(c), i = "next" === h ? "left" : "right", j = b.bind(this, d, i + " " + h, f);
                return d.addClass(h), a(d, {addClass: i}).start().done(j), function () {
                    g = !0
                }
            }
            f()
        }, beforeRemoveClass: function (d, e, f) {
            if ("active" === e) {
                var g = !1, h = d.data(c), i = "next" === h ? "left" : "right", j = b.bind(this, d, i, f);
                return a(d, {addClass: i}).start().done(j), function () {
                    g = !0
                }
            }
            f()
        }
    }
}]),
    angular.module("ui.bootstrap.dateparser", []).service("uibDateParser", ["$log", "$locale", "dateFilter", "orderByFilter", function (a, b, c, d) {
        function e(a) {
            var b = [], c = a.split(""), e = a.indexOf("'");
            if (e > -1) {
                var f = !1;
                a = a.split("");
                for (var g = e; g < a.length; g++) f ? ("'" === a[g] && (g + 1 < a.length && "'" === a[g + 1] ? (a[g + 1] = "$", c[g + 1] = "") : (c[g] = "", f = !1)), a[g] = "$") : "'" === a[g] && (a[g] = "$", c[g] = "", f = !0);
                a = a.join("")
            }
            return angular.forEach(q, function (d) {
                var e = a.indexOf(d.key);
                if (e > -1) {
                    a = a.split(""), c[e] = "(" + d.regex + ")", a[e] = "$";
                    for (var f = e + 1, g = e + d.key.length; g > f; f++) c[f] = "", a[f] = "$";
                    a = a.join(""), b.push({index: e, key: d.key, apply: d.apply, matcher: d.regex})
                }
            }), {regex: new RegExp("^" + c.join("") + "$"), map: d(b, "index")}
        }

        function f(a) {
            for (var b, c, d = [], e = 0; e < a.length;) if (angular.isNumber(c)) {
                if ("'" === a.charAt(e)) (e + 1 >= a.length || "'" !== a.charAt(e + 1)) && (d.push(g(a, c, e)), c = null); else if (e === a.length) for (; c < a.length;) b = h(a, c), d.push(b), c = b.endIdx;
                e++
            } else "'" !== a.charAt(e) ? (b = h(a, e), d.push(b.parser), e = b.endIdx) : (c = e, e++);
            return d
        }

        function g(a, b, c) {
            return function () {
                return a.substr(b + 1, c - b - 1)
            }
        }

        function h(a, b) {
            for (var c = a.substr(b), d = 0; d < q.length; d++) if (new RegExp("^" + q[d].key).test(c)) {
                var e = q[d];
                return {endIdx: b + e.key.length, parser: e.formatter}
            }
            return {
                endIdx: b + 1, parser: function () {
                    return c.charAt(0)
                }
            }
        }

        function i(a, b, c) {
            return !(1 > c) && (1 === b && c > 28 ? 29 === c && (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) : 3 !== b && 5 !== b && 8 !== b && 10 !== b || 31 > c)
        }

        function j(a) {
            return parseInt(a, 10)
        }

        function k(a, b) {
            return a && b ? o(a, b) : a
        }

        function l(a, b) {
            return a && b ? o(a, b, !0) : a
        }

        function m(a, b) {
            a = a.replace(/:/g, "");
            var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
            return isNaN(c) ? b : c
        }

        function n(a, b) {
            return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
        }

        function o(a, b, c) {
            c = c ? -1 : 1;
            var d = a.getTimezoneOffset();
            return n(a, c * (m(b, d) - d))
        }

        var p, q;
        this.init = function () {
            p = b.id, this.parsers = {}, this.formatters = {}, q = [{
                key: "yyyy", regex: "\\d{4}", apply: function (a) {
                    this.year = +a
                }, formatter: function (a) {
                    var b = new Date;
                    return b.setFullYear(Math.abs(a.getFullYear())), c(b, "yyyy")
                }
            }, {
                key: "yy", regex: "\\d{2}", apply: function (a) {
                    a = +a, this.year = 69 > a ? a + 2e3 : a + 1900
                }, formatter: function (a) {
                    var b = new Date;
                    return b.setFullYear(Math.abs(a.getFullYear())), c(b, "yy")
                }
            }, {
                key: "y", regex: "\\d{1,4}", apply: function (a) {
                    this.year = +a
                }, formatter: function (a) {
                    var b = new Date;
                    return b.setFullYear(Math.abs(a.getFullYear())), c(b, "y")
                }
            }, {
                key: "M!", regex: "0?[1-9]|1[0-2]", apply: function (a) {
                    this.month = a - 1
                }, formatter: function (a) {
                    return /^[0-9]$/.test(a.getMonth()) ? c(a, "MM") : c(a, "M")
                }
            }, {
                key: "MMMM", regex: b.DATETIME_FORMATS.MONTH.join("|"), apply: function (a) {
                    this.month = b.DATETIME_FORMATS.MONTH.indexOf(a)
                }, formatter: function (a) {
                    return c(a, "MMMM")
                }
            }, {
                key: "MMM", regex: b.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (a) {
                    this.month = b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)
                }, formatter: function (a) {
                    return c(a, "MMM")
                }
            }, {
                key: "MM", regex: "0[1-9]|1[0-2]", apply: function (a) {
                    this.month = a - 1
                }, formatter: function (a) {
                    return c(a, "MM")
                }
            }, {
                key: "M", regex: "[1-9]|1[0-2]", apply: function (a) {
                    this.month = a - 1
                }, formatter: function (a) {
                    return c(a, "M")
                }
            }, {
                key: "d!", regex: "[0-2]?[0-9]{1}|3[0-1]{1}", apply: function (a) {
                    this.date = +a
                }, formatter: function (a) {
                    return /^[1-9]$/.test(a.getDate()) ? c(a, "dd") : c(a, "d")
                }
            }, {
                key: "dd", regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (a) {
                    this.date = +a
                }, formatter: function (a) {
                    return c(a, "dd")
                }
            }, {
                key: "d", regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (a) {
                    this.date = +a
                }, formatter: function (a) {
                    return c(a, "d")
                }
            }, {
                key: "EEEE", regex: b.DATETIME_FORMATS.DAY.join("|"), formatter: function (a) {
                    return c(a, "EEEE")
                }
            }, {
                key: "EEE", regex: b.DATETIME_FORMATS.SHORTDAY.join("|"), formatter: function (a) {
                    return c(a, "EEE")
                }
            }, {
                key: "HH", regex: "(?:0|1)[0-9]|2[0-3]", apply: function (a) {
                    this.hours = +a
                }, formatter: function (a) {
                    return c(a, "HH")
                }
            }, {
                key: "hh", regex: "0[0-9]|1[0-2]", apply: function (a) {
                    this.hours = +a
                }, formatter: function (a) {
                    return c(a, "hh")
                }
            }, {
                key: "H", regex: "1?[0-9]|2[0-3]", apply: function (a) {
                    this.hours = +a
                }, formatter: function (a) {
                    return c(a, "H")
                }
            }, {
                key: "h", regex: "[0-9]|1[0-2]", apply: function (a) {
                    this.hours = +a
                }, formatter: function (a) {
                    return c(a, "h")
                }
            }, {
                key: "mm", regex: "[0-5][0-9]", apply: function (a) {
                    this.minutes = +a
                }, formatter: function (a) {
                    return c(a, "mm")
                }
            }, {
                key: "m", regex: "[0-9]|[1-5][0-9]", apply: function (a) {
                    this.minutes = +a
                }, formatter: function (a) {
                    return c(a, "m")
                }
            }, {
                key: "sss", regex: "[0-9][0-9][0-9]", apply: function (a) {
                    this.milliseconds = +a
                }, formatter: function (a) {
                    return c(a, "sss")
                }
            }, {
                key: "ss", regex: "[0-5][0-9]", apply: function (a) {
                    this.seconds = +a
                }, formatter: function (a) {
                    return c(a, "ss")
                }
            }, {
                key: "s", regex: "[0-9]|[1-5][0-9]", apply: function (a) {
                    this.seconds = +a
                }, formatter: function (a) {
                    return c(a, "s")
                }
            }, {
                key: "a", regex: b.DATETIME_FORMATS.AMPMS.join("|"), apply: function (a) {
                    12 === this.hours && (this.hours = 0), "PM" === a && (this.hours += 12)
                }, formatter: function (a) {
                    return c(a, "a")
                }
            }, {
                key: "Z", regex: "[+-]\\d{4}", apply: function (a) {
                    var b = a.match(/([+-])(\d{2})(\d{2})/), c = b[1], d = b[2], e = b[3];
                    this.hours += j(c + d), this.minutes += j(c + e)
                }, formatter: function (a) {
                    return c(a, "Z")
                }
            }, {
                key: "ww", regex: "[0-4][0-9]|5[0-3]", formatter: function (a) {
                    return c(a, "ww")
                }
            }, {
                key: "w", regex: "[0-9]|[1-4][0-9]|5[0-3]", formatter: function (a) {
                    return c(a, "w")
                }
            }, {
                key: "GGGG",
                regex: b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g, "\\s"),
                formatter: function (a) {
                    return c(a, "GGGG")
                }
            }, {
                key: "GGG", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function (a) {
                    return c(a, "GGG")
                }
            }, {
                key: "GG", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function (a) {
                    return c(a, "GG")
                }
            }, {
                key: "G", regex: b.DATETIME_FORMATS.ERAS.join("|"), formatter: function (a) {
                    return c(a, "G")
                }
            }]
        }, this.init(), this.filter = function (a, c) {
            return angular.isDate(a) && !isNaN(a) && c ? (c = b.DATETIME_FORMATS[c] || c, b.id !== p && this.init(), this.formatters[c] || (this.formatters[c] = f(c)), this.formatters[c].reduce(function (b, c) {
                return b + c(a)
            }, "")) : ""
        }, this.parse = function (c, d, f) {
            if (!angular.isString(c) || !d) return c;
            d = b.DATETIME_FORMATS[d] || d, d = d.replace(/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, "\\$&"), b.id !== p && this.init(), this.parsers[d] || (this.parsers[d] = e(d));
            var g = this.parsers[d], h = g.regex, j = g.map, k = c.match(h), l = !1;
            if (k && k.length) {
                var m, n;
                angular.isDate(f) && !isNaN(f.getTime()) ? m = {
                    year: f.getFullYear(),
                    month: f.getMonth(),
                    date: f.getDate(),
                    hours: f.getHours(),
                    minutes: f.getMinutes(),
                    seconds: f.getSeconds(),
                    milliseconds: f.getMilliseconds()
                } : (f && a.warn("dateparser:", "baseDate is not a valid date"), m = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0
                });
                for (var o = 1, q = k.length; q > o; o++) {
                    var s = j[o - 1];
                    "Z" === s.matcher && (l = !0), s.apply && s.apply.call(m, k[o])
                }
                var t = l ? Date.prototype.setUTCFullYear : Date.prototype.setFullYear,
                    u = l ? Date.prototype.setUTCHours : Date.prototype.setHours;
                return i(m.year, m.month, m.date) && (!angular.isDate(f) || isNaN(f.getTime()) || l ? (n = new Date(0), t.call(n, m.year, m.month, m.date), u.call(n, m.hours || 0, m.minutes || 0, m.seconds || 0, m.milliseconds || 0)) : (n = new Date(f), t.call(n, m.year, m.month, m.date), u.call(n, m.hours, m.minutes, m.seconds, m.milliseconds))), n
            }
        }, this.toTimezone = k, this.fromTimezone = l, this.timezoneToOffset = m, this.addDateMinutes = n, this.convertTimezoneToLocal = o
    }]), angular.module("ui.bootstrap.isClass", []).directive("uibIsClass", ["$animate", function (a) {
    var c = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;
    return {
        restrict: "A", compile: function (d, e) {
            function f(a, b, c) {
                i.push(a), j.push({scope: a, element: b}), o.forEach(function (b, c) {
                    g(b, a)
                }), a.$on("$destroy", h)
            }

            function g(b, d) {
                var e = b.match(c), f = d.$eval(e[1]), g = e[2], h = k[b];
                if (!h) {
                    var i = function (b) {
                        var c = null;
                        j.some(function (a) {
                            return a.scope.$eval(m) === b ? (c = a, !0) : void 0
                        }), h.lastActivated !== c && (h.lastActivated && a.removeClass(h.lastActivated.element, f), c && a.addClass(c.element, f), h.lastActivated = c)
                    };
                    k[b] = h = {lastActivated: null, scope: d, watchFn: i, compareWithExp: g, watcher: d.$watch(g, i)}
                }
                h.watchFn(d.$eval(g))
            }

            function h(a) {
                var b = a.targetScope, c = i.indexOf(b);
                if (i.splice(c, 1), j.splice(c, 1), i.length) {
                    var d = i[0];
                    angular.forEach(k, function (a) {
                        a.scope === b && (a.watcher = d.$watch(a.compareWithExp, a.watchFn), a.scope = d)
                    })
                } else k = {}
            }

            var i = [], j = [], k = {}, l = e.uibIsClass.match(/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/), m = l[2],
                n = l[1], o = n.split(",");
            return f
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.isClass"]).value("$datepickerSuppressError", !1).value("$datepickerLiteralWarning", !0).constant("uibDatepickerConfig", {
    datepickerMode: "day",
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    maxDate: null,
    maxMode: "year",
    minDate: null,
    minMode: "day",
    monthColumns: 3,
    ngModelOptions: {},
    shortcutPropagation: !1,
    showWeeks: !0,
    yearColumns: 5,
    yearRows: 4
}).controller("UibDatepickerController", ["$scope", "$element", "$attrs", "$parse", "$interpolate", "$locale", "$log", "dateFilter", "uibDatepickerConfig", "$datepickerLiteralWarning", "$datepickerSuppressError", "uibDateParser", function (a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(b) {
        a.datepickerMode = b, a.datepickerOptions.datepickerMode = b
    }

    var n = this, o = {$setViewValue: angular.noop}, p = {}, q = [];
    b.addClass("uib-datepicker"), c.$set("role", "application"), a.datepickerOptions || (a.datepickerOptions = {}), this.modes = ["day", "month", "year"], ["customClass", "dateDisabled", "datepickerMode", "formatDay", "formatDayHeader", "formatDayTitle", "formatMonth", "formatMonthTitle", "formatYear", "maxDate", "maxMode", "minDate", "minMode", "monthColumns", "showWeeks", "shortcutPropagation", "startingDay", "yearColumns", "yearRows"].forEach(function (b) {
        switch (b) {
            case"customClass":
            case"dateDisabled":
                a[b] = a.datepickerOptions[b] || angular.noop;
                break;
            case"datepickerMode":
                a.datepickerMode = angular.isDefined(a.datepickerOptions.datepickerMode) ? a.datepickerOptions.datepickerMode : i.datepickerMode;
                break;
            case"formatDay":
            case"formatDayHeader":
            case"formatDayTitle":
            case"formatMonth":
            case"formatMonthTitle":
            case"formatYear":
                n[b] = angular.isDefined(a.datepickerOptions[b]) ? e(a.datepickerOptions[b])(a.$parent) : i[b];
                break;
            case"monthColumns":
            case"showWeeks":
            case"shortcutPropagation":
            case"yearColumns":
            case"yearRows":
                n[b] = angular.isDefined(a.datepickerOptions[b]) ? a.datepickerOptions[b] : i[b];
                break;
            case"startingDay":
                angular.isDefined(a.datepickerOptions.startingDay) ? n.startingDay = a.datepickerOptions.startingDay : angular.isNumber(i.startingDay) ? n.startingDay = i.startingDay : n.startingDay = (f.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
                break;
            case"maxDate":
            case"minDate":
                a.$watch("datepickerOptions." + b, function (a) {
                    a ? angular.isDate(a) ? n[b] = l.fromTimezone(new Date(a), p.timezone) : (j && g.warn("Literal date support has been deprecated, please switch to date object usage"), n[b] = new Date(h(a, "medium"))) : n[b] = i[b] ? l.fromTimezone(new Date(i[b]), p.timezone) : null, n.refreshView()
                });
                break;
            case"maxMode":
            case"minMode":
                a.datepickerOptions[b] ? a.$watch(function () {
                    return a.datepickerOptions[b]
                }, function (c) {
                    n[b] = a[b] = angular.isDefined(c) ? c : a.datepickerOptions[b], ("minMode" === b && n.modes.indexOf(a.datepickerOptions.datepickerMode) < n.modes.indexOf(n[b]) || "maxMode" === b && n.modes.indexOf(a.datepickerOptions.datepickerMode) > n.modes.indexOf(n[b])) && (a.datepickerMode = n[b], a.datepickerOptions.datepickerMode = n[b])
                }) : n[b] = a[b] = i[b] || null
        }
    }), a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), a.disabled = angular.isDefined(c.disabled) || !1, angular.isDefined(c.ngDisabled) && q.push(a.$parent.$watch(c.ngDisabled, function (b) {
        a.disabled = b, n.refreshView()
    })), a.isActive = function (b) {
        return 0 === n.compare(b.date, n.activeDate) && (a.activeDateId = b.uid, !0)
    }, this.init = function (b) {
        o = b, p = b.$options || a.datepickerOptions.ngModelOptions || i.ngModelOptions, a.datepickerOptions.initDate ? (n.activeDate = l.fromTimezone(a.datepickerOptions.initDate, p.timezone) || new Date, a.$watch("datepickerOptions.initDate", function (a) {
            a && (o.$isEmpty(o.$modelValue) || o.$invalid) && (n.activeDate = l.fromTimezone(a, p.timezone), n.refreshView())
        })) : n.activeDate = new Date;
        var c = o.$modelValue ? new Date(o.$modelValue) : new Date;
        this.activeDate = isNaN(c) ? l.fromTimezone(new Date, p.timezone) : l.fromTimezone(c, p.timezone), o.$render = function () {
            n.render()
        }
    }, this.render = function () {
        if (o.$viewValue) {
            var a = new Date(o.$viewValue);
            !isNaN(a) ? this.activeDate = l.fromTimezone(a, p.timezone) : k || g.error('Datepicker directive: "ng-model" value must be a Date object')
        }
        this.refreshView()
    }, this.refreshView = function () {
        if (this.element) {
            a.selectedDt = null, this._refreshView(), a.activeDt && (a.activeDateId = a.activeDt.uid);
            var b = o.$viewValue ? new Date(o.$viewValue) : null;
            b = l.fromTimezone(b, p.timezone), o.$setValidity("dateDisabled", !b || this.element && !this.isDisabled(b))
        }
    }, this.createDateObject = function (b, c) {
        var d = o.$viewValue ? new Date(o.$viewValue) : null;
        d = l.fromTimezone(d, p.timezone);
        var e = new Date;
        e = l.fromTimezone(e, p.timezone);
        var f = this.compare(b, e), g = {
            date: b,
            label: l.filter(b, c),
            selected: d && 0 === this.compare(b, d),
            disabled: this.isDisabled(b),
            past: 0 > f,
            current: 0 === f,
            future: f > 0,
            customClass: this.customClass(b) || null
        };
        return d && 0 === this.compare(b, d) && (a.selectedDt = g), n.activeDate && 0 === this.compare(g.date, n.activeDate) && (a.activeDt = g), g
    }, this.isDisabled = function (b) {
        return a.disabled || this.minDate && this.compare(b, this.minDate) < 0 || this.maxDate && this.compare(b, this.maxDate) > 0 || a.dateDisabled && a.dateDisabled({
            date: b,
            mode: a.datepickerMode
        })
    }, this.customClass = function (b) {
        return a.customClass({date: b, mode: a.datepickerMode})
    }, this.split = function (a, b) {
        for (var c = []; a.length > 0;) c.push(a.splice(0, b));
        return c
    }, a.select = function (b) {
        if (a.datepickerMode === n.minMode) {
            var c = o.$viewValue ? l.fromTimezone(new Date(o.$viewValue), p.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), c = l.toTimezone(c, p.timezone), o.$setViewValue(c), o.$render()
        } else n.activeDate = b, m(n.modes[n.modes.indexOf(a.datepickerMode) - 1]), a.$emit("uib:datepicker.mode");
        a.$broadcast("uib:datepicker.focus")
    }, a.move = function (a) {
        var b = n.activeDate.getFullYear() + a * (n.step.years || 0),
            c = n.activeDate.getMonth() + a * (n.step.months || 0);
        n.activeDate.setFullYear(b, c, 1), n.refreshView()
    }, a.toggleMode = function (b) {
        b = b || 1, a.datepickerMode === n.maxMode && 1 === b || a.datepickerMode === n.minMode && -1 === b || (m(n.modes[n.modes.indexOf(a.datepickerMode) + b]), a.$emit("uib:datepicker.mode"))
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var r = function () {
        n.element[0].focus()
    };
    a.$on("uib:datepicker.focus", r), a.keydown = function (b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey && !a.disabled) if (b.preventDefault(), n.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
            if (n.isDisabled(n.activeDate)) return;
            a.select(n.activeDate)
        } else !b.ctrlKey || "up" !== c && "down" !== c ? (n.handleKeyDown(c, b), n.refreshView()) : a.toggleMode("up" === c ? 1 : -1)
    }, b.on("keydown", function (b) {
        a.$apply(function () {
            a.keydown(b)
        })
    }), a.$on("$destroy", function () {
        for (; q.length;) q.shift()()
    })
}]).controller("UibDaypickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
    function d(a, b) {
        return 1 !== b || a % 4 != 0 || a % 100 == 0 && a % 400 != 0 ? f[b] : 29
    }

    function e(a) {
        var b = new Date(a);
        b.setDate(b.getDate() + 4 - (b.getDay() || 7));
        var c = b.getTime();
        return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
    }

    var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.step = {months: 1}, this.element = b, this.init = function (b) {
        angular.extend(b, this), a.showWeeks = b.showWeeks, b.refreshView()
    }, this.getDates = function (a, b) {
        for (var c, d = new Array(b), e = new Date(a), f = 0; b > f;) c = new Date(e), d[f++] = c, e.setDate(e.getDate() + 1);
        return d
    }, this._refreshView = function () {
        var b = this.activeDate.getFullYear(), d = this.activeDate.getMonth(), f = new Date(this.activeDate);
        f.setFullYear(b, d, 1);
        var g = this.startingDay - f.getDay(), h = g > 0 ? 7 - g : -g, i = new Date(f);
        h > 0 && i.setDate(1 - h);
        for (var j = this.getDates(i, 42), k = 0; 42 > k; k++) j[k] = angular.extend(this.createDateObject(j[k], this.formatDay), {
            secondary: j[k].getMonth() !== d,
            uid: a.uniqueId + "-" + k
        });
        a.labels = new Array(7);
        for (var l = 0; 7 > l; l++) a.labels[l] = {
            abbr: c(j[l].date, this.formatDayHeader),
            full: c(j[l].date, "EEEE")
        };
        if (a.title = c(this.activeDate, this.formatDayTitle), a.rows = this.split(j, 7), a.showWeeks) {
            a.weekNumbers = [];
            for (var m = (11 - this.startingDay) % 7, n = a.rows.length, o = 0; n > o; o++) a.weekNumbers.push(e(a.rows[o][m].date))
        }
    }, this.compare = function (a, b) {
        var c = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
            d = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        return c.setFullYear(a.getFullYear()), d.setFullYear(b.getFullYear()), c - d
    }, this.handleKeyDown = function (a, b) {
        var c = this.activeDate.getDate();
        if ("left" === a) c -= 1; else if ("up" === a) c -= 7; else if ("right" === a) c += 1; else if ("down" === a) c += 7; else if ("pageup" === a || "pagedown" === a) {
            var e = this.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
            this.activeDate.setMonth(e, 1), c = Math.min(d(this.activeDate.getFullYear(), this.activeDate.getMonth()), c)
        } else "home" === a ? c = 1 : "end" === a && (c = d(this.activeDate.getFullYear(), this.activeDate.getMonth()));
        this.activeDate.setDate(c)
    }
}]).controller("UibMonthpickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
    this.step = {years: 1}, this.element = b, this.init = function (a) {
        angular.extend(a, this), a.refreshView()
    }, this._refreshView = function () {
        for (var b, d = new Array(12), e = this.activeDate.getFullYear(), f = 0; 12 > f; f++) b = new Date(this.activeDate), b.setFullYear(e, f, 1), d[f] = angular.extend(this.createDateObject(b, this.formatMonth), {uid: a.uniqueId + "-" + f});
        a.title = c(this.activeDate, this.formatMonthTitle), a.rows = this.split(d, this.monthColumns), a.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1
    }, this.compare = function (a, b) {
        var c = new Date(a.getFullYear(), a.getMonth()), d = new Date(b.getFullYear(), b.getMonth());
        return c.setFullYear(a.getFullYear()), d.setFullYear(b.getFullYear()), c - d
    }, this.handleKeyDown = function (a, b) {
        var c = this.activeDate.getMonth();
        if ("left" === a) c -= 1; else if ("up" === a) c -= this.monthColumns; else if ("right" === a) c += 1; else if ("down" === a) c += this.monthColumns; else if ("pageup" === a || "pagedown" === a) {
            var d = this.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
            this.activeDate.setFullYear(d)
        } else "home" === a ? c = 0 : "end" === a && (c = 11);
        this.activeDate.setMonth(c)
    }
}]).controller("UibYearpickerController", ["$scope", "$element", "dateFilter", function (a, b, c) {
    function d(a) {
        return parseInt((a - 1) / f, 10) * f + 1
    }

    var e, f;
    this.element = b, this.yearpickerInit = function () {
        e = this.yearColumns, f = this.yearRows * e, this.step = {years: f}
    }, this._refreshView = function () {
        for (var b, c = new Array(f), g = 0, h = d(this.activeDate.getFullYear()); f > g; g++) b = new Date(this.activeDate), b.setFullYear(h + g, 0, 1), c[g] = angular.extend(this.createDateObject(b, this.formatYear), {uid: a.uniqueId + "-" + g});
        a.title = [c[0].label, c[f - 1].label].join(" - "), a.rows = this.split(c, e), a.columns = e
    }, this.compare = function (a, b) {
        return a.getFullYear() - b.getFullYear()
    }, this.handleKeyDown = function (a, b) {
        var c = this.activeDate.getFullYear();
        "left" === a ? c -= 1 : "up" === a ? c -= e : "right" === a ? c += 1 : "down" === a ? c += e : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * f : "home" === a ? c = d(this.activeDate.getFullYear()) : "end" === a && (c = d(this.activeDate.getFullYear()) + f - 1), this.activeDate.setFullYear(c)
    }
}]).directive("uibDatepicker", function () {
    return {
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/datepicker/datepicker.html"
        },
        scope: {datepickerOptions: "=?"},
        require: ["uibDatepicker", "^ngModel"],
        restrict: "A",
        controller: "UibDatepickerController",
        controllerAs: "datepicker",
        link: function (a, b, c, d) {
            var e = d[0], f = d[1];
            e.init(f)
        }
    }
}).directive("uibDaypicker", function () {
    return {
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/datepicker/day.html"
        },
        require: ["^uibDatepicker", "uibDaypicker"],
        restrict: "A",
        controller: "UibDaypickerController",
        link: function (a, b, c, d) {
            var e = d[0];
            d[1].init(e)
        }
    }
}).directive("uibMonthpicker", function () {
    return {
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/datepicker/month.html"
        },
        require: ["^uibDatepicker", "uibMonthpicker"],
        restrict: "A",
        controller: "UibMonthpickerController",
        link: function (a, b, c, d) {
            var e = d[0];
            d[1].init(e)
        }
    }
}).directive("uibYearpicker", function () {
    return {
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/datepicker/year.html"
        },
        require: ["^uibDatepicker", "uibYearpicker"],
        restrict: "A",
        controller: "UibYearpickerController",
        link: function (a, b, c, d) {
            var e = d[0];
            angular.extend(e, d[1]), e.yearpickerInit(), e.refreshView()
        }
    }
}), angular.module("ui.bootstrap.position", []).factory("$uibPosition", ["$document", "$window", function (a, b) {
    var c, d, e = {normal: /(auto|scroll)/, hidden: /(auto|scroll|hidden)/}, f = {
        auto: /\s?auto?\s?/i,
        primary: /^(top|bottom|left|right)$/,
        secondary: /^(top|bottom|left|right|center)$/,
        vertical: /^(top|bottom)$/
    }, g = /(HTML|BODY)/;
    return {
        getRawNode: function (a) {
            return a.nodeName ? a : a[0] || a
        }, parseStyle: function (a) {
            return a = parseFloat(a), isFinite(a) ? a : 0
        }, offsetParent: function (c) {
            c = this.getRawNode(c);
            for (var e = c.offsetParent || a[0].documentElement; e && e !== a[0].documentElement && function (a) {
                return "static" === (b.getComputedStyle(a).position || "static")
            }(e);) e = e.offsetParent;
            return e || a[0].documentElement
        }, scrollbarWidth: function (e) {
            if (e) {
                if (angular.isUndefined(d)) {
                    var f = a.find("body");
                    f.addClass("uib-position-body-scrollbar-measure"), d = b.innerWidth - f[0].clientWidth, d = isFinite(d) ? d : 0, f.removeClass("uib-position-body-scrollbar-measure")
                }
                return d
            }
            if (angular.isUndefined(c)) {
                var g = angular.element('<div class="uib-position-scrollbar-measure"></div>');
                a.find("body").append(g), c = g[0].offsetWidth - g[0].clientWidth, c = isFinite(c) ? c : 0, g.remove()
            }
            return c
        }, scrollbarPadding: function (a) {
            a = this.getRawNode(a);
            var c = b.getComputedStyle(a), d = this.parseStyle(c.paddingRight), e = this.parseStyle(c.paddingBottom),
                f = this.scrollParent(a, !1, !0), h = this.scrollbarWidth(g.test(f.tagName));
            return {
                scrollbarWidth: h,
                widthOverflow: f.scrollWidth > f.clientWidth,
                right: d + h,
                originalRight: d,
                heightOverflow: f.scrollHeight > f.clientHeight,
                bottom: e + h,
                originalBottom: e
            }
        }, isScrollable: function (a, c) {
            a = this.getRawNode(a);
            var d = c ? e.hidden : e.normal, f = b.getComputedStyle(a);
            return d.test(f.overflow + f.overflowY + f.overflowX)
        }, scrollParent: function (c, d, f) {
            c = this.getRawNode(c);
            var g = d ? e.hidden : e.normal, h = a[0].documentElement, i = b.getComputedStyle(c);
            if (f && g.test(i.overflow + i.overflowY + i.overflowX)) return c;
            var j = "absolute" === i.position, k = c.parentElement || h;
            if (k === h || "fixed" === i.position) return h;
            for (; k.parentElement && k !== h;) {
                var l = b.getComputedStyle(k);
                if (j && "static" !== l.position && (j = !1), !j && g.test(l.overflow + l.overflowY + l.overflowX)) break;
                k = k.parentElement
            }
            return k
        }, position: function (c, d) {
            c = this.getRawNode(c);
            var e = this.offset(c);
            if (d) {
                var f = b.getComputedStyle(c);
                e.top -= this.parseStyle(f.marginTop), e.left -= this.parseStyle(f.marginLeft)
            }
            var g = this.offsetParent(c), h = {top: 0, left: 0};
            return g !== a[0].documentElement && (h = this.offset(g), h.top += g.clientTop - g.scrollTop, h.left += g.clientLeft - g.scrollLeft), {
                width: Math.round(angular.isNumber(e.width) ? e.width : c.offsetWidth),
                height: Math.round(angular.isNumber(e.height) ? e.height : c.offsetHeight),
                top: Math.round(e.top - h.top),
                left: Math.round(e.left - h.left)
            }
        }, offset: function (c) {
            c = this.getRawNode(c);
            var d = c.getBoundingClientRect();
            return {
                width: Math.round(angular.isNumber(d.width) ? d.width : c.offsetWidth),
                height: Math.round(angular.isNumber(d.height) ? d.height : c.offsetHeight),
                top: Math.round(d.top + (b.pageYOffset || a[0].documentElement.scrollTop)),
                left: Math.round(d.left + (b.pageXOffset || a[0].documentElement.scrollLeft))
            }
        }, viewportOffset: function (c, d, e) {
            c = this.getRawNode(c), e = !1 !== e;
            var f = c.getBoundingClientRect(), g = {top: 0, left: 0, bottom: 0, right: 0},
                h = d ? a[0].documentElement : this.scrollParent(c), i = h.getBoundingClientRect();
            if (g.top = i.top + h.clientTop, g.left = i.left + h.clientLeft, h === a[0].documentElement && (g.top += b.pageYOffset, g.left += b.pageXOffset), g.bottom = g.top + h.clientHeight, g.right = g.left + h.clientWidth, e) {
                var j = b.getComputedStyle(h);
                g.top += this.parseStyle(j.paddingTop), g.bottom -= this.parseStyle(j.paddingBottom), g.left += this.parseStyle(j.paddingLeft), g.right -= this.parseStyle(j.paddingRight)
            }
            return {
                top: Math.round(f.top - g.top),
                bottom: Math.round(g.bottom - f.bottom),
                left: Math.round(f.left - g.left),
                right: Math.round(g.right - f.right)
            }
        }, parsePlacement: function (a) {
            var b = f.auto.test(a);
            return b && (a = a.replace(f.auto, "")), a = a.split("-"), a[0] = a[0] || "top", f.primary.test(a[0]) || (a[0] = "top"), a[1] = a[1] || "center", f.secondary.test(a[1]) || (a[1] = "center"), a[2] = !!b, a
        }, positionElements: function (a, c, d, e) {
            a = this.getRawNode(a), c = this.getRawNode(c);
            var g = angular.isDefined(c.offsetWidth) ? c.offsetWidth : c.prop("offsetWidth"),
                h = angular.isDefined(c.offsetHeight) ? c.offsetHeight : c.prop("offsetHeight");
            d = this.parsePlacement(d);
            var i = e ? this.offset(a) : this.position(a), j = {top: 0, left: 0, placement: ""};
            if (d[2]) {
                var k = this.viewportOffset(a, e), l = b.getComputedStyle(c), m = {
                    width: g + Math.round(Math.abs(this.parseStyle(l.marginLeft) + this.parseStyle(l.marginRight))),
                    height: h + Math.round(Math.abs(this.parseStyle(l.marginTop) + this.parseStyle(l.marginBottom)))
                };
                if (d[0] = "top" === d[0] && m.height > k.top && m.height <= k.bottom ? "bottom" : "bottom" === d[0] && m.height > k.bottom && m.height <= k.top ? "top" : "left" === d[0] && m.width > k.left && m.width <= k.right ? "right" : "right" === d[0] && m.width > k.right && m.width <= k.left ? "left" : d[0], d[1] = "top" === d[1] && m.height - i.height > k.bottom && m.height - i.height <= k.top ? "bottom" : "bottom" === d[1] && m.height - i.height > k.top && m.height - i.height <= k.bottom ? "top" : "left" === d[1] && m.width - i.width > k.right && m.width - i.width <= k.left ? "right" : "right" === d[1] && m.width - i.width > k.left && m.width - i.width <= k.right ? "left" : d[1], "center" === d[1]) if (f.vertical.test(d[0])) {
                    var n = i.width / 2 - g / 2;
                    k.left + n < 0 && m.width - i.width <= k.right ? d[1] = "left" : k.right + n < 0 && m.width - i.width <= k.left && (d[1] = "right")
                } else {
                    var o = i.height / 2 - m.height / 2;
                    k.top + o < 0 && m.height - i.height <= k.bottom ? d[1] = "top" : k.bottom + o < 0 && m.height - i.height <= k.top && (d[1] = "bottom")
                }
            }
            switch (d[0]) {
                case"top":
                    j.top = i.top - h;
                    break;
                case"bottom":
                    j.top = i.top + i.height;
                    break;
                case"left":
                    j.left = i.left - g;
                    break;
                case"right":
                    j.left = i.left + i.width
            }
            switch (d[1]) {
                case"top":
                    j.top = i.top;
                    break;
                case"bottom":
                    j.top = i.top + i.height - h;
                    break;
                case"left":
                    j.left = i.left;
                    break;
                case"right":
                    j.left = i.left + i.width - g;
                    break;
                case"center":
                    f.vertical.test(d[0]) ? j.left = i.left + i.width / 2 - g / 2 : j.top = i.top + i.height / 2 - h / 2
            }
            return j.top = Math.round(j.top), j.left = Math.round(j.left), j.placement = "center" === d[1] ? d[0] : d[0] + "-" + d[1], j
        }, adjustTop: function (a, b, c, d) {
            return -1 !== a.indexOf("top") && c !== d ? {top: b.top - d + "px"} : void 0
        }, positionArrow: function (a, c) {
            a = this.getRawNode(a);
            var d = a.querySelector(".tooltip-inner, .popover-inner");
            if (d) {
                var e = angular.element(d).hasClass("tooltip-inner"),
                    g = e ? a.querySelector(".tooltip-arrow") : a.querySelector(".arrow");
                if (g) {
                    var h = {top: "", bottom: "", left: "", right: ""};
                    if (c = this.parsePlacement(c), "center" === c[1]) return void angular.element(g).css(h);
                    var i = "border-" + c[0] + "-width", j = b.getComputedStyle(g)[i], k = "border-";
                    k += f.vertical.test(c[0]) ? c[0] + "-" + c[1] : c[1] + "-" + c[0], k += "-radius";
                    var l = b.getComputedStyle(e ? d : a)[k];
                    switch (c[0]) {
                        case"top":
                            h.bottom = e ? "0" : "-" + j;
                            break;
                        case"bottom":
                            h.top = e ? "0" : "-" + j;
                            break;
                        case"left":
                            h.right = e ? "0" : "-" + j;
                            break;
                        case"right":
                            h.left = e ? "0" : "-" + j
                    }
                    h[c[1]] = l, angular.element(g).css(h)
                }
            }
        }
    }
}]), angular.module("ui.bootstrap.datepickerPopup", ["ui.bootstrap.datepicker", "ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning", !0).constant("uibDatepickerPopupConfig", {
    altInputFormats: [],
    appendToBody: !1,
    clearText: "Clear",
    closeOnDateSelection: !0,
    closeText: "Done",
    currentText: "Today",
    datepickerPopup: "yyyy-MM-dd",
    datepickerPopupTemplateUrl: "uib/template/datepickerPopup/popup.html",
    datepickerTemplateUrl: "uib/template/datepicker/datepicker.html",
    html5Types: {date: "yyyy-MM-dd", "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss", month: "yyyy-MM"},
    onOpenFocus: !0,
    showButtonBar: !0,
    placement: "auto bottom-left"
}).controller("UibDatepickerPopupController", ["$scope", "$element", "$attrs", "$compile", "$log", "$parse", "$window", "$document", "$rootScope", "$uibPosition", "dateFilter", "uibDateParser", "uibDatepickerPopupConfig", "$timeout", "uibDatepickerConfig", "$datepickerPopupLiteralWarning", function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    function q(b) {
        var c = l.parse(b, w, a.date);
        if (isNaN(c)) for (var d = 0; d < I.length; d++) if (c = l.parse(b, I[d], a.date), !isNaN(c)) return c;
        return c
    }

    function r(a) {
        if (angular.isNumber(a) && (a = new Date(a)), !a) return null;
        if (angular.isDate(a) && !isNaN(a)) return a;
        if (angular.isString(a)) {
            var b = q(a);
            if (!isNaN(b)) return l.fromTimezone(b, G.timezone)
        }
        return F.$options && F.$options.allowInvalid ? a : void 0
    }

    function s(a, b) {
        var d = a || b;
        return !c.ngRequired && !d || (angular.isNumber(d) && (d = new Date(d)), !d || (!(!angular.isDate(d) || isNaN(d)) || !!angular.isString(d) && !isNaN(q(d))))
    }

    function t(c) {
        if (a.isOpen || !a.disabled) {
            var d = H[0], e = b[0].contains(c.target), f = void 0 !== d.contains && d.contains(c.target);
            !a.isOpen || e || f || a.$apply(function () {
                a.isOpen = !1
            })
        }
    }

    function u(c) {
        27 === c.which && a.isOpen ? (c.preventDefault(), c.stopPropagation(), a.$apply(function () {
            a.isOpen = !1
        }), b[0].focus()) : 40 !== c.which || a.isOpen || (c.preventDefault(), c.stopPropagation(), a.$apply(function () {
            a.isOpen = !0
        }))
    }

    function v() {
        if (a.isOpen) {
            var d = angular.element(H[0].querySelector(".uib-datepicker-popup")),
                e = c.popupPlacement ? c.popupPlacement : m.placement, f = j.positionElements(b, d, e, y);
            d.css({
                top: f.top + "px",
                left: f.left + "px"
            }), d.hasClass("uib-position-measure") && d.removeClass("uib-position-measure")
        }
    }

    var w, x, y, z, A, B, C, D, E, F, G, H, I, J = !1, K = [];
    this.init = function (e) {
        if (F = e, G = angular.isObject(e.$options) ? e.$options : {timezone: null}, x = angular.isDefined(c.closeOnDateSelection) ? a.$parent.$eval(c.closeOnDateSelection) : m.closeOnDateSelection, y = angular.isDefined(c.datepickerAppendToBody) ? a.$parent.$eval(c.datepickerAppendToBody) : m.appendToBody, z = angular.isDefined(c.onOpenFocus) ? a.$parent.$eval(c.onOpenFocus) : m.onOpenFocus, A = angular.isDefined(c.datepickerPopupTemplateUrl) ? c.datepickerPopupTemplateUrl : m.datepickerPopupTemplateUrl, B = angular.isDefined(c.datepickerTemplateUrl) ? c.datepickerTemplateUrl : m.datepickerTemplateUrl, I = angular.isDefined(c.altInputFormats) ? a.$parent.$eval(c.altInputFormats) : m.altInputFormats, a.showButtonBar = angular.isDefined(c.showButtonBar) ? a.$parent.$eval(c.showButtonBar) : m.showButtonBar, m.html5Types[c.type] ? (w = m.html5Types[c.type], J = !0) : (w = c.uibDatepickerPopup || m.datepickerPopup, c.$observe("uibDatepickerPopup", function (a, b) {
                var c = a || m.datepickerPopup;
                if (c !== w && (w = c, F.$modelValue = null, !w)) throw new Error("uibDatepickerPopup must have a date format specified.")
            })), !w) throw new Error("uibDatepickerPopup must have a date format specified.");
        if (J && c.uibDatepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
        C = angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"), C.attr({
            "ng-model": "date",
            "ng-change": "dateSelection(date)",
            "template-url": A
        }), D = angular.element(C.children()[0]), D.attr("template-url", B), a.datepickerOptions || (a.datepickerOptions = {}), J && "month" === c.type && (a.datepickerOptions.datepickerMode = "month", a.datepickerOptions.minMode = "month"), D.attr("datepicker-options", "datepickerOptions"), J ? F.$formatters.push(function (b) {
            return a.date = l.fromTimezone(b, G.timezone), b
        }) : (F.$$parserName = "date", F.$validators.date = s, F.$parsers.unshift(r), F.$formatters.push(function (b) {
            return F.$isEmpty(b) ? (a.date = b, b) : (angular.isNumber(b) && (b = new Date(b)), a.date = l.fromTimezone(b, G.timezone), l.filter(a.date, w))
        })), F.$viewChangeListeners.push(function () {
            a.date = q(F.$viewValue)
        }), b.on("keydown", u), H = d(C)(a), C.remove(), y ? h.find("body").append(H) : b.after(H), a.$on("$destroy", function () {
            for (!0 === a.isOpen && (i.$$phase || a.$apply(function () {
                a.isOpen = !1
            })), H.remove(), b.off("keydown", u), h.off("click", t), E && E.off("scroll", v), angular.element(g).off("resize", v); K.length;) K.shift()()
        })
    }, a.getText = function (b) {
        return a[b + "Text"] || m[b + "Text"]
    }, a.isDisabled = function (b) {
        "today" === b && (b = l.fromTimezone(new Date, G.timezone));
        var c = {};
        return angular.forEach(["minDate", "maxDate"], function (b) {
            a.datepickerOptions[b] ? angular.isDate(a.datepickerOptions[b]) ? c[b] = new Date(a.datepickerOptions[b]) : (p && e.warn("Literal date support has been deprecated, please switch to date object usage"), c[b] = new Date(k(a.datepickerOptions[b], "medium"))) : c[b] = null
        }), a.datepickerOptions && c.minDate && a.compare(b, c.minDate) < 0 || c.maxDate && a.compare(b, c.maxDate) > 0
    }, a.compare = function (a, b) {
        return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
    }, a.dateSelection = function (c) {
        a.date = c;
        var d = a.date ? l.filter(a.date, w) : null;
        b.val(d), F.$setViewValue(d), x && (a.isOpen = !1, b[0].focus())
    }, a.keydown = function (c) {
        27 === c.which && (c.stopPropagation(), a.isOpen = !1, b[0].focus())
    }, a.select = function (b, c) {
        if (c.stopPropagation(), "today" === b) {
            var d = new Date
            ;angular.isDate(a.date) ? (b = new Date(a.date), b.setFullYear(d.getFullYear(), d.getMonth(), d.getDate())) : (b = l.fromTimezone(d, G.timezone), b.setHours(0, 0, 0, 0))
        }
        a.dateSelection(b)
    }, a.close = function (c) {
        c.stopPropagation(), a.isOpen = !1, b[0].focus()
    }, a.disabled = angular.isDefined(c.disabled) || !1, c.ngDisabled && K.push(a.$parent.$watch(f(c.ngDisabled), function (b) {
        a.disabled = b
    })), a.$watch("isOpen", function (d) {
        d ? a.disabled ? a.isOpen = !1 : n(function () {
            v(), z && a.$broadcast("uib:datepicker.focus"), h.on("click", t);
            var d = c.popupPlacement ? c.popupPlacement : m.placement;
            y || j.parsePlacement(d)[2] ? (E = E || angular.element(j.scrollParent(b))) && E.on("scroll", v) : E = null, angular.element(g).on("resize", v)
        }, 0, !1) : (h.off("click", t), E && E.off("scroll", v), angular.element(g).off("resize", v))
    }), a.$on("uib:datepicker.mode", function () {
        n(v, 0, !1)
    })
}]).directive("uibDatepickerPopup", function () {
    return {
        require: ["ngModel", "uibDatepickerPopup"],
        controller: "UibDatepickerPopupController",
        scope: {datepickerOptions: "=?", isOpen: "=?", currentText: "@", clearText: "@", closeText: "@"},
        link: function (a, b, c, d) {
            var e = d[0];
            d[1].init(e)
        }
    }
}).directive("uibDatepickerPopupWrap", function () {
    return {
        restrict: "A", transclude: !0, templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/datepickerPopup/popup.html"
        }
    }
}), angular.module("ui.bootstrap.debounce", []).factory("$$debounce", ["$timeout", function (a) {
    return function (b, c) {
        var d;
        return function () {
            var e = this, f = Array.prototype.slice.call(arguments);
            d && a.cancel(d), d = a(function () {
                b.apply(e, f)
            }, c)
        }
    }
}]), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("uibDropdownConfig", {
    appendToOpenClass: "uib-dropdown-open",
    openClass: "open"
}).service("uibDropdownService", ["$document", "$rootScope", function (a, b) {
    var c = null;
    this.open = function (b, e) {
        c || a.on("click", d), c && c !== b && (c.isOpen = !1), c = b
    }, this.close = function (b, e) {
        c === b && (a.off("click", d), a.off("keydown", this.keybindFilter), c = null)
    };
    var d = function (a) {
        if (c && !(a && "disabled" === c.getAutoClose() || a && 3 === a.which)) {
            var d = c.getToggleElement();
            if (!(a && d && d[0].contains(a.target))) {
                var e = c.getDropdownElement();
                a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.focusToggleElement(), c.isOpen = !1, b.$$phase || c.$apply())
            }
        }
    };
    this.keybindFilter = function (a) {
        if (c) {
            var b = c.getDropdownElement(), e = c.getToggleElement(), f = b && b[0].contains(a.target),
                g = e && e[0].contains(a.target);
            27 === a.which ? (a.stopPropagation(), c.focusToggleElement(), d()) : c.isKeynavEnabled() && -1 !== [38, 40].indexOf(a.which) && c.isOpen && (f || g) && (a.preventDefault(), a.stopPropagation(), c.focusDropdownEntry(a.which))
        }
    }
}]).controller("UibDropdownController", ["$scope", "$element", "$attrs", "$parse", "uibDropdownConfig", "uibDropdownService", "$animate", "$uibPosition", "$document", "$compile", "$templateRequest", function (a, b, c, d, e, f, g, h, i, j, k) {
    var l, m, n = this, o = a.$new(), p = e.appendToOpenClass, q = e.openClass, r = angular.noop,
        s = c.onToggle ? d(c.onToggle) : angular.noop, t = !1, u = null, v = !1, w = i.find("body");
    b.addClass("dropdown"), this.init = function () {
        if (c.isOpen && (m = d(c.isOpen), r = m.assign, a.$watch(m, function (a) {
                o.isOpen = !!a
            })), angular.isDefined(c.dropdownAppendTo)) {
            var e = d(c.dropdownAppendTo)(o);
            e && (u = angular.element(e))
        }
        t = angular.isDefined(c.dropdownAppendToBody), v = angular.isDefined(c.keyboardNav), t && !u && (u = w), u && n.dropdownMenu && (u.append(n.dropdownMenu), b.on("$destroy", function () {
            n.dropdownMenu.remove()
        }))
    }, this.toggle = function (a) {
        return o.isOpen = arguments.length ? !!a : !o.isOpen, angular.isFunction(r) && r(o, o.isOpen), o.isOpen
    }, this.isOpen = function () {
        return o.isOpen
    }, o.getToggleElement = function () {
        return n.toggleElement
    }, o.getAutoClose = function () {
        return c.autoClose || "always"
    }, o.getElement = function () {
        return b
    }, o.isKeynavEnabled = function () {
        return v
    }, o.focusDropdownEntry = function (a) {
        var c = n.dropdownMenu ? angular.element(n.dropdownMenu).find("a") : b.find("ul").eq(0).find("a");
        switch (a) {
            case 40:
                angular.isNumber(n.selectedOption) ? n.selectedOption = n.selectedOption === c.length - 1 ? n.selectedOption : n.selectedOption + 1 : n.selectedOption = 0;
                break;
            case 38:
                angular.isNumber(n.selectedOption) ? n.selectedOption = 0 === n.selectedOption ? 0 : n.selectedOption - 1 : n.selectedOption = c.length - 1
        }
        c[n.selectedOption].focus()
    }, o.getDropdownElement = function () {
        return n.dropdownMenu
    }, o.focusToggleElement = function () {
        n.toggleElement && n.toggleElement[0].focus()
    }, o.$watch("isOpen", function (c, d) {
        if (u && n.dropdownMenu) {
            var e, m, v, w = h.positionElements(b, n.dropdownMenu, "bottom-left", !0), x = 0;
            if (e = {
                    top: w.top + "px",
                    display: c ? "block" : "none"
                }, m = n.dropdownMenu.hasClass("dropdown-menu-right"), m ? (e.left = "auto", v = h.scrollbarPadding(u), v.heightOverflow && v.scrollbarWidth && (x = v.scrollbarWidth), e.right = window.innerWidth - x - (w.left + b.prop("offsetWidth")) + "px") : (e.left = w.left + "px", e.right = "auto"), !t) {
                var y = h.offset(u);
                e.top = w.top - y.top + "px", m ? e.right = window.innerWidth - (w.left - y.left + b.prop("offsetWidth")) + "px" : e.left = w.left - y.left + "px"
            }
            n.dropdownMenu.css(e)
        }
        var z = u || b;
        if (z.hasClass(u ? p : q) === !c && g[c ? "addClass" : "removeClass"](z, u ? p : q).then(function () {
                angular.isDefined(c) && c !== d && s(a, {open: !!c})
            }), c) n.dropdownMenuTemplateUrl ? k(n.dropdownMenuTemplateUrl).then(function (a) {
            l = o.$new(), j(a.trim())(l, function (a) {
                var b = a;
                n.dropdownMenu.replaceWith(b), n.dropdownMenu = b, i.on("keydown", f.keybindFilter)
            })
        }) : i.on("keydown", f.keybindFilter), o.focusToggleElement(), f.open(o, b); else {
            if (f.close(o, b), n.dropdownMenuTemplateUrl) {
                l && l.$destroy();
                var B = angular.element('<ul class="dropdown-menu"></ul>');
                n.dropdownMenu.replaceWith(B), n.dropdownMenu = B
            }
            n.selectedOption = null
        }
        angular.isFunction(r) && r(a, c)
    })
}]).directive("uibDropdown", function () {
    return {
        controller: "UibDropdownController", link: function (a, b, c, d) {
            d.init()
        }
    }
}).directive("uibDropdownMenu", function () {
    return {
        restrict: "A", require: "?^uibDropdown", link: function (a, b, c, d) {
            if (d && !angular.isDefined(c.dropdownNested)) {
                b.addClass("dropdown-menu");
                var e = c.templateUrl;
                e && (d.dropdownMenuTemplateUrl = e), d.dropdownMenu || (d.dropdownMenu = b)
            }
        }
    }
}).directive("uibDropdownToggle", function () {
    return {
        require: "?^uibDropdown", link: function (a, b, c, d) {
            if (d) {
                b.addClass("dropdown-toggle"), d.toggleElement = b;
                var e = function (e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function (a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function () {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.stackedMap", []).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var a = [];
            return {
                add: function (b, c) {
                    a.push({key: b, value: c})
                }, get: function (b) {
                    for (var c = 0; c < a.length; c++) if (b === a[c].key) return a[c]
                }, keys: function () {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                }, top: function () {
                    return a[a.length - 1]
                }, remove: function (b) {
                    for (var c = -1, d = 0; d < a.length; d++) if (b === a[d].key) {
                        c = d;
                        break
                    }
                    return a.splice(c, 1)[0]
                }, removeTop: function () {
                    return a.pop()
                }, length: function () {
                    return a.length
                }
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.stackedMap", "ui.bootstrap.position"]).factory("$$multiMap", function () {
    return {
        createNew: function () {
            var a = {};
            return {
                entries: function () {
                    return Object.keys(a).map(function (b) {
                        return {key: b, value: a[b]}
                    })
                }, get: function (b) {
                    return a[b]
                }, hasKey: function (b) {
                    return !!a[b]
                }, keys: function () {
                    return Object.keys(a)
                }, put: function (b, c) {
                    a[b] || (a[b] = []), a[b].push(c)
                }, remove: function (b, c) {
                    var d = a[b];
                    if (d) {
                        var e = d.indexOf(c);
                        -1 !== e && d.splice(e, 1), d.length || delete a[b]
                    }
                }
            }
        }
    }
}).provider("$uibResolve", function () {
    var a = this;
    this.resolver = null, this.setResolver = function (a) {
        this.resolver = a
    }, this.$get = ["$injector", "$q", function (b, c) {
        var d = a.resolver ? b.get(a.resolver) : null;
        return {
            resolve: function (a, e, f, g) {
                if (d) return d.resolve(a, e, f, g);
                var h = [];
                return angular.forEach(a, function (a) {
                    angular.isFunction(a) || angular.isArray(a) ? h.push(c.resolve(b.invoke(a))) : angular.isString(a) ? h.push(c.resolve(b.get(a))) : h.push(c.resolve(a))
                }), c.all(h).then(function (b) {
                    var c = {}, d = 0;
                    return angular.forEach(a, function (a, e) {
                        c[e] = b[d++]
                    }), c
                })
            }
        }
    }]
}).directive("uibModalBackdrop", ["$animate", "$injector", "$uibModalStack", function (a, b, c) {
    function d(b, d, e) {
        e.modalInClass && (a.addClass(d, e.modalInClass), b.$on(c.NOW_CLOSING_EVENT, function (c, f) {
            var g = f();
            b.modalOptions.animation ? a.removeClass(d, e.modalInClass).then(g) : g()
        }))
    }

    return {
        restrict: "A", compile: function (a, b) {
            return a.addClass(b.backdropClass), d
        }
    }
}]).directive("uibModalWindow", ["$uibModalStack", "$q", "$animateCss", "$document", function (a, b, c, d) {
    return {
        scope: {index: "@"}, restrict: "A", transclude: !0, templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/modal/window.html"
        }, link: function (e, f, g) {
            f.addClass(g.windowTopClass || ""), e.size = g.size, e.close = function (b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" !== c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
            }, f.on("click", e.close), e.$isRendered = !0;
            var h = b.defer();
            e.$$postDigest(function () {
                h.resolve()
            }), h.promise.then(function () {
                var h = null;
                g.modalInClass && (h = c(f, {addClass: g.modalInClass}).start(), e.$on(a.NOW_CLOSING_EVENT, function (a, b) {
                    var d = b();
                    c(f, {removeClass: g.modalInClass}).start().then(d)
                })), b.when(h).then(function () {
                    var b = a.getTop();
                    if (b && a.modalRendered(b.key), !d[0].activeElement || !f[0].contains(d[0].activeElement)) {
                        var c = f[0].querySelector("[autofocus]");
                        c ? c.focus() : f[0].focus()
                    }
                })
            })
        }
    }
}]).directive("uibModalAnimationClass", function () {
    return {
        compile: function (a, b) {
            b.modalAnimation && a.addClass(b.uibModalAnimationClass)
        }
    }
}).directive("uibModalTransclude", ["$animate", function (a) {
    return {
        link: function (b, c, d, e, f) {
            f(b.$parent, function (b) {
                c.empty(), a.enter(b, c)
            })
        }
    }
}]).factory("$uibModalStack", ["$animate", "$animateCss", "$document", "$compile", "$rootScope", "$q", "$$multiMap", "$$stackedMap", "$uibPosition", function (a, b, c, d, e, f, g, h, i) {
    function j(a) {
        return a.replace(E, function (a, c) {
            return (c ? "-" : "") + a.toLowerCase()
        })
    }

    function k(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }

    function l() {
        for (var a = -1, b = x.keys(), c = 0; c < b.length; c++) x.get(b[c]).value.backdrop && (a = c);
        return a > -1 && A > a && (a = A), a
    }

    function m(a, b) {
        var c = x.get(a).value, d = c.appendTo;
        x.remove(a), B = x.top(), B && (A = parseInt(B.value.modalDomEl.attr("index"), 10)), p(c.modalDomEl, c.modalScope, function () {
            var b = c.openedClass || w;
            y.remove(b, a);
            var e = y.hasKey(b);
            d.toggleClass(b, e), !e && v && v.heightOverflow && v.scrollbarWidth && (v.originalRight ? d.css({paddingRight: v.originalRight + "px"}) : d.css({paddingRight: ""}), v = null), n(!0)
        }, c.closedDeferred), o(), b && b.focus ? b.focus() : d.focus && d.focus()
    }

    function n(a) {
        var b;
        x.length() > 0 && (b = x.top().value, b.modalDomEl.toggleClass(b.windowTopClass || "", a))
    }

    function o() {
        if (t && -1 === l()) {
            var a = u;
            p(t, u, function () {
                a = null
            }), t = void 0, u = void 0
        }
    }

    function p(b, c, d, e) {
        function g() {
            g.done || (g.done = !0, a.leave(b).then(function () {
                d && d(), b.remove(), e && e.resolve()
            }), c.$destroy())
        }

        var h, i = null, j = function () {
            return h || (h = f.defer(), i = h.promise), function () {
                h.resolve()
            }
        };
        return c.$broadcast(z.NOW_CLOSING_EVENT, j), f.when(i).then(g)
    }

    function q(a) {
        if (a.isDefaultPrevented()) return a;
        var b = x.top();
        if (b) switch (a.which) {
            case 27:
                b.value.keyboard && (a.preventDefault(), e.$apply(function () {
                    z.dismiss(b.key, "escape key press")
                }));
                break;
            case 9:
                var c = z.loadFocusElementList(b), d = !1;
                a.shiftKey ? (z.isFocusInFirstItem(a, c) || z.isModalFocused(a, b)) && (d = z.focusLastFocusableElement(c)) : z.isFocusInLastItem(a, c) && (d = z.focusFirstFocusableElement(c)), d && (a.preventDefault(), a.stopPropagation())
        }
    }

    function r(a, b, c) {
        return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented
    }

    function s() {
        Array.prototype.forEach.call(document.querySelectorAll("[" + C + "]"), function (a) {
            var b = parseInt(a.getAttribute(C), 10), c = b - 1;
            a.setAttribute(C, c), c || (a.removeAttribute(C), a.removeAttribute("aria-hidden"))
        })
    }

    var t, u, v, w = "modal-open", x = h.createNew(), y = g.createNew(),
        z = {NOW_CLOSING_EVENT: "modal.stack.now-closing"}, A = 0, B = null,
        C = "data-bootstrap-modal-aria-hidden-count", E = /[A-Z]/g;
    return e.$watch(l, function (a) {
        u && (u.index = a)
    }), c.on("keydown", q), e.$on("$destroy", function () {
        c.off("keydown", q)
    }), z.open = function (b, f) {
        function g(a) {
            if (a && "BODY" !== a[0].tagName) return function (a) {
                var b = a.parent() ? a.parent().children() : [];
                return Array.prototype.filter.call(b, function (b) {
                    return b !== a[0]
                })
            }(a).forEach(function (a) {
                var b = "true" === a.getAttribute("aria-hidden"), c = parseInt(a.getAttribute(C), 10);
                c || (c = b ? 1 : 0), a.setAttribute(C, c + 1), a.setAttribute("aria-hidden", "true")
            }), g(a.parent())
        }

        var h = c[0].activeElement, k = f.openedClass || w;
        n(!1), B = x.top(), x.add(b, {
            deferred: f.deferred,
            renderDeferred: f.renderDeferred,
            closedDeferred: f.closedDeferred,
            modalScope: f.scope,
            backdrop: f.backdrop,
            keyboard: f.keyboard,
            openedClass: f.openedClass,
            windowTopClass: f.windowTopClass,
            animation: f.animation,
            appendTo: f.appendTo
        }), y.put(k, b);
        var m = f.appendTo, o = l();
        if (!m.length) throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");
        o >= 0 && !t && (u = e.$new(!0), u.modalOptions = f, u.index = o, t = angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'), t.attr({
            class: "modal-backdrop",
            "ng-style": "{'z-index': 1040 + (index && 1 || 0) + index*10}",
            "uib-modal-animation-class": "fade",
            "modal-in-class": "in"
        }), f.backdropClass && t.addClass(f.backdropClass), f.animation && t.attr("modal-animation", "true"), d(t)(u), a.enter(t, m), i.isScrollable(m) && (v = i.scrollbarPadding(m), v.heightOverflow && v.scrollbarWidth && m.css({paddingRight: v.right + "px"})));
        var p;
        f.component ? (p = document.createElement(j(f.component.name)), p = angular.element(p), p.attr({
            resolve: "$resolve",
            "modal-instance": "$uibModalInstance",
            close: "$close($value)",
            dismiss: "$dismiss($value)"
        })) : p = f.content, A = B ? parseInt(B.value.modalDomEl.attr("index"), 10) + 1 : 0;
        var q = angular.element('<div uib-modal-window="modal-window"></div>');
        q.attr({
            class: "modal",
            "template-url": f.windowTemplateUrl,
            "window-top-class": f.windowTopClass,
            role: "dialog",
            "aria-labelledby": f.ariaLabelledBy,
            "aria-describedby": f.ariaDescribedBy,
            size: f.size,
            index: A,
            animate: "animate",
            "ng-style": "{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",
            tabindex: -1,
            "uib-modal-animation-class": "fade",
            "modal-in-class": "in"
        }).append(p), f.windowClass && q.addClass(f.windowClass), f.animation && q.attr("modal-animation", "true"), m.addClass(k), f.scope && (f.scope.$$topModalIndex = A), a.enter(d(q)(f.scope), m), x.top().value.modalDomEl = q, x.top().value.modalOpener = h, g(q)
    }, z.close = function (a, b) {
        var c = x.get(a);
        return s(), c && r(c, b, !0) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.resolve(b), m(a, c.value.modalOpener), !0) : !c
    }, z.dismiss = function (a, b) {
        var c = x.get(a);
        return s(), c && r(c, b, !1) ? (c.value.modalScope.$$uibDestructionScheduled = !0, c.value.deferred.reject(b), m(a, c.value.modalOpener), !0) : !c
    }, z.dismissAll = function (a) {
        for (var b = this.getTop(); b && this.dismiss(b.key, a);) b = this.getTop()
    }, z.getTop = function () {
        return x.top()
    }, z.modalRendered = function (a) {
        var b = x.get(a);
        z.focusFirstFocusableElement(z.loadFocusElementList(b)), b && b.value.renderDeferred.resolve()
    }, z.focusFirstFocusableElement = function (a) {
        return a.length > 0 && (a[0].focus(), !0)
    }, z.focusLastFocusableElement = function (a) {
        return a.length > 0 && (a[a.length - 1].focus(), !0)
    }, z.isModalFocused = function (a, b) {
        if (a && b) {
            var c = b.value.modalDomEl;
            if (c && c.length) return (a.target || a.srcElement) === c[0]
        }
        return !1
    }, z.isFocusInFirstItem = function (a, b) {
        return b.length > 0 && (a.target || a.srcElement) === b[0]
    }, z.isFocusInLastItem = function (a, b) {
        return b.length > 0 && (a.target || a.srcElement) === b[b.length - 1]
    }, z.loadFocusElementList = function (a) {
        if (a) {
            var b = a.value.modalDomEl;
            if (b && b.length) {
                var c = b[0].querySelectorAll("a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]");
                return c ? Array.prototype.filter.call(c, function (a) {
                    return k(a)
                }) : c
            }
        }
    }, z
}]).provider("$uibModal", function () {
    var a = {
        options: {animation: !0, backdrop: !0, keyboard: !0},
        $get: ["$rootScope", "$q", "$document", "$templateRequest", "$controller", "$uibResolve", "$uibModalStack", function (b, c, d, e, f, g, h) {
            function i(a) {
                return a.template ? c.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl)
            }

            var j = {}, k = null;
            return j.getPromiseChain = function () {
                return k
            }, j.open = function (e) {
                function j() {
                    return q
                }

                var l = c.defer(), m = c.defer(), n = c.defer(), o = c.defer(), p = {
                    result: l.promise,
                    opened: m.promise,
                    closed: n.promise,
                    rendered: o.promise,
                    close: function (a) {
                        return h.close(p, a)
                    },
                    dismiss: function (a) {
                        return h.dismiss(p, a)
                    }
                };
                if (e = angular.extend({}, a.options, e), e.resolve = e.resolve || {}, e.appendTo = e.appendTo || d.find("body").eq(0), !e.component && !e.template && !e.templateUrl) throw new Error("One of component or template or templateUrl options is required.");
                var q;
                q = e.component ? c.when(g.resolve(e.resolve, {}, null, null)) : c.all([i(e), g.resolve(e.resolve, {}, null, null)]);
                var r;
                return r = k = c.all([k]).then(j, j).then(function (a) {
                    function c(b, c, d, e) {
                        b.$scope = g, b.$scope.$resolve = {}, d ? b.$scope.$uibModalInstance = p : b.$uibModalInstance = p;
                        var f = c ? a[1] : a;
                        angular.forEach(f, function (a, c) {
                            e && (b[c] = a), b.$scope.$resolve[c] = a
                        })
                    }

                    var d = e.scope || b, g = d.$new();
                    g.$close = p.close, g.$dismiss = p.dismiss, g.$on("$destroy", function () {
                        g.$$uibDestructionScheduled || g.$dismiss("$uibUnscheduledDestruction")
                    });
                    var i, j, k = {
                        scope: g,
                        deferred: l,
                        renderDeferred: o,
                        closedDeferred: n,
                        animation: e.animation,
                        backdrop: e.backdrop,
                        keyboard: e.keyboard,
                        backdropClass: e.backdropClass,
                        windowTopClass: e.windowTopClass,
                        windowClass: e.windowClass,
                        windowTemplateUrl: e.windowTemplateUrl,
                        ariaLabelledBy: e.ariaLabelledBy,
                        ariaDescribedBy: e.ariaDescribedBy,
                        size: e.size,
                        openedClass: e.openedClass,
                        appendTo: e.appendTo
                    }, q = {}, r = {};
                    e.component ? (c(q, !1, !0, !1), q.name = e.component, k.component = q) : e.controller && (c(r, !0, !1, !0), j = f(e.controller, r, !0, e.controllerAs), e.controllerAs && e.bindToController && (i = j.instance, i.$close = g.$close, i.$dismiss = g.$dismiss, angular.extend(i, {$resolve: r.$scope.$resolve}, d)), i = j(), angular.isFunction(i.$onInit) && i.$onInit()), e.component || (k.content = a[0]), h.open(p, k), m.resolve(!0)
                }, function (a) {
                    m.reject(a), l.reject(a)
                }).finally(function () {
                    k === r && (k = null)
                }), p
            }, j
        }]
    };
    return a
}), angular.module("ui.bootstrap.paging", []).factory("uibPaging", ["$parse", function (a) {
    return {
        create: function (b, c, d) {
            b.setNumPages = d.numPages ? a(d.numPages).assign : angular.noop, b.ngModelCtrl = {$setViewValue: angular.noop}, b._watchers = [], b.init = function (a, e) {
                b.ngModelCtrl = a, b.config = e, a.$render = function () {
                    b.render()
                }, d.itemsPerPage ? b._watchers.push(c.$parent.$watch(d.itemsPerPage, function (a) {
                    b.itemsPerPage = parseInt(a, 10), c.totalPages = b.calculateTotalPages(), b.updatePage()
                })) : b.itemsPerPage = e.itemsPerPage, c.$watch("totalItems", function (a, d) {
                    (angular.isDefined(a) || a !== d) && (c.totalPages = b.calculateTotalPages(), b.updatePage())
                })
            }, b.calculateTotalPages = function () {
                var a = b.itemsPerPage < 1 ? 1 : Math.ceil(c.totalItems / b.itemsPerPage);
                return Math.max(a || 0, 1)
            }, b.render = function () {
                c.page = parseInt(b.ngModelCtrl.$viewValue, 10) || 1
            }, c.selectPage = function (a, d) {
                d && d.preventDefault(), (!c.ngDisabled || !d) && c.page !== a && a > 0 && a <= c.totalPages && (d && d.target && d.target.blur(), b.ngModelCtrl.$setViewValue(a), b.ngModelCtrl.$render())
            }, c.getText = function (a) {
                return c[a + "Text"] || b.config[a + "Text"]
            }, c.noPrevious = function () {
                return 1 === c.page
            }, c.noNext = function () {
                return c.page === c.totalPages
            }, b.updatePage = function () {
                b.setNumPages(c.$parent, c.totalPages), c.page > c.totalPages ? c.selectPage(c.totalPages) : b.ngModelCtrl.$render()
            }, c.$on("$destroy", function () {
                for (; b._watchers.length;) b._watchers.shift()()
            })
        }
    }
}]), angular.module("ui.bootstrap.pager", ["ui.bootstrap.paging", "ui.bootstrap.tabindex"]).controller("UibPagerController", ["$scope", "$attrs", "uibPaging", "uibPagerConfig", function (a, b, c, d) {
    a.align = angular.isDefined(b.align) ? a.$parent.$eval(b.align) : d.align, c.create(this, a, b)
}]).constant("uibPagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("uibPager", ["uibPagerConfig", function (a) {
    return {
        scope: {totalItems: "=", previousText: "@", nextText: "@", ngDisabled: "="},
        require: ["uibPager", "?ngModel"],
        restrict: "A",
        controller: "UibPagerController",
        controllerAs: "pager",
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/pager/pager.html"
        },
        link: function (b, c, d, e) {
            c.addClass("pager");
            var f = e[0], g = e[1];
            g && f.init(g, a)
        }
    }
}]), angular.module("ui.bootstrap.pagination", ["ui.bootstrap.paging", "ui.bootstrap.tabindex"]).controller("UibPaginationController", ["$scope", "$attrs", "$parse", "uibPaging", "uibPaginationConfig", function (a, b, c, d, e) {
    function f(a, b, c) {
        return {number: a, text: b, active: c}
    }

    function g(a, b) {
        var c = [], d = 1, e = b, g = angular.isDefined(i) && b > i;
        g && (j ? (d = Math.max(a - Math.floor(i / 2), 1), (e = d + i - 1) > b && (e = b, d = e - i + 1)) : (d = (Math.ceil(a / i) - 1) * i + 1, e = Math.min(d + i - 1, b)));
        for (var h = d; e >= h; h++) {
            var n = f(h, m(h), h === a);
            c.push(n)
        }
        if (g && i > 0 && (!j || k || l)) {
            if (d > 1) {
                if (!l || d > 3) {
                    var o = f(d - 1, "...", !1);
                    c.unshift(o)
                }
                if (l) {
                    if (3 === d) {
                        var p = f(2, "2", !1);
                        c.unshift(p)
                    }
                    var q = f(1, "1", !1);
                    c.unshift(q)
                }
            }
            if (b > e) {
                if (!l || b - 2 > e) {
                    var r = f(e + 1, "...", !1);
                    c.push(r)
                }
                if (l) {
                    if (e === b - 2) {
                        var s = f(b - 1, b - 1, !1);
                        c.push(s)
                    }
                    var t = f(b, b, !1);
                    c.push(t)
                }
            }
        }
        return c
    }

    var h = this, i = angular.isDefined(b.maxSize) ? a.$parent.$eval(b.maxSize) : e.maxSize,
        j = angular.isDefined(b.rotate) ? a.$parent.$eval(b.rotate) : e.rotate,
        k = angular.isDefined(b.forceEllipses) ? a.$parent.$eval(b.forceEllipses) : e.forceEllipses,
        l = angular.isDefined(b.boundaryLinkNumbers) ? a.$parent.$eval(b.boundaryLinkNumbers) : e.boundaryLinkNumbers,
        m = angular.isDefined(b.pageLabel) ? function (c) {
            return a.$parent.$eval(b.pageLabel, {$page: c})
        } : angular.identity;
    a.boundaryLinks = angular.isDefined(b.boundaryLinks) ? a.$parent.$eval(b.boundaryLinks) : e.boundaryLinks, a.directionLinks = angular.isDefined(b.directionLinks) ? a.$parent.$eval(b.directionLinks) : e.directionLinks, d.create(this, a, b), b.maxSize && h._watchers.push(a.$parent.$watch(c(b.maxSize), function (a) {
        i = parseInt(a, 10), h.render()
    }));
    var n = this.render;
    this.render = function () {
        n(), a.page > 0 && a.page <= a.totalPages && (a.pages = g(a.page, a.totalPages))
    }
}]).constant("uibPaginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    boundaryLinkNumbers: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0,
    forceEllipses: !1
}).directive("uibPagination", ["$parse", "uibPaginationConfig", function (a, b) {
    return {
        scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@", ngDisabled: "="},
        require: ["uibPagination", "?ngModel"],
        restrict: "A",
        controller: "UibPaginationController",
        controllerAs: "pagination",
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/pagination/pagination.html"
        },
        link: function (a, c, d, e) {
            c.addClass("pagination");
            var f = e[0], g = e[1];
            g && f.init(g, b)
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.stackedMap"]).provider("$uibTooltip", function () {
    function a(a) {
        return a.replace(/[A-Z]/g, function (a, b) {
            return (b ? "-" : "") + a.toLowerCase()
        })
    }

    var b = {
        placement: "top",
        placementClassPrefix: "",
        animation: !0,
        popupDelay: 0,
        popupCloseDelay: 0,
        useContentExp: !1
    }, c = {mouseenter: "mouseleave", click: "click", outsideClick: "outsideClick", focus: "blur", none: ""}, d = {};
    this.options = function (a) {
        angular.extend(d, a)
    }, this.setTriggers = function (a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$uibPosition", "$interpolate", "$rootScope", "$parse", "$$stackedMap", function (e, f, g, h, i, j, k, l, m) {
        function n(a) {
            if (27 === a.which) {
                var b = o.top();
                b && (b.value.close(), b = null)
            }
        }

        var o = m.createNew();
        return h.on("keyup", n), k.$on("$destroy", function () {
            h.off("keyup", n)
        }), function (e, k, m, n) {
            function p(a) {
                var b = (a || n.trigger || m).split(" ");
                return {
                    show: b, hide: b.map(function (a) {
                        return c[a] || a
                    })
                }
            }

            n = angular.extend({}, b, d, n);
            var q = a(e), r = j.startSymbol(), s = j.endSymbol(),
                t = "<div " + q + '-popup uib-title="' + r + "title" + s + '" ' + (n.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + r + "content" + s + '" ') + 'origin-scope="origScope" class="uib-position-measure ' + k + '" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';
            return {
                compile: function (a, b) {
                    var c = f(t);
                    return function (a, b, d, f) {
                        function j() {
                            O.isOpen ? q() : m()
                        }

                        function m() {
                            N && !a.$eval(d[k + "Enable"]) || (u(), x(), O.popupDelay ? G || (G = g(r, O.popupDelay, !1)) : r())
                        }

                        function q() {
                            s(), O.popupCloseDelay ? H || (H = g(t, O.popupCloseDelay, !1)) : t()
                        }

                        function r() {
                            return s(), u(), O.content ? (v(), void O.$evalAsync(function () {
                                O.isOpen = !0, y(!0), T()
                            })) : angular.noop
                        }

                        function s() {
                            G && (g.cancel(G), G = null), I && (g.cancel(I), I = null)
                        }

                        function t() {
                            O && O.$evalAsync(function () {
                                O && (O.isOpen = !1, y(!1), O.animation ? F || (F = g(w, 150, !1)) : w())
                            })
                        }

                        function u() {
                            H && (g.cancel(H), H = null), F && (g.cancel(F), F = null)
                        }

                        function v() {
                            D || (E = O.$new(), D = c(E, function (a) {
                                L ? h.find("body").append(a) : b.after(a)
                            }), o.add(O, {close: t}), z())
                        }

                        function w() {
                            s(), u(), A(), D && (D.remove(), D = null, J && g.cancel(J)), o.remove(O), E && (E.$destroy(), E = null)
                        }

                        function x() {
                            O.title = d[k + "Title"], O.content = R ? R(a) : d[e], O.popupClass = d[k + "Class"], O.placement = angular.isDefined(d[k + "Placement"]) ? d[k + "Placement"] : n.placement;
                            var b = i.parsePlacement(O.placement);
                            K = b[1] ? b[0] + "-" + b[1] : b[0];
                            var c = parseInt(d[k + "PopupDelay"], 10), f = parseInt(d[k + "PopupCloseDelay"], 10);
                            O.popupDelay = isNaN(c) ? n.popupDelay : c, O.popupCloseDelay = isNaN(f) ? n.popupCloseDelay : f
                        }

                        function y(b) {
                            Q && angular.isFunction(Q.assign) && Q.assign(a, b)
                        }

                        function z() {
                            S.length = 0, R ? (S.push(a.$watch(R, function (a) {
                                O.content = a, !a && O.isOpen && t()
                            })), S.push(E.$watch(function () {
                                P || (P = !0, E.$$postDigest(function () {
                                    P = !1, O && O.isOpen && T()
                                }))
                            }))) : S.push(d.$observe(e, function (a) {
                                O.content = a, !a && O.isOpen ? t() : T()
                            })), S.push(d.$observe(k + "Title", function (a) {
                                O.title = a, O.isOpen && T()
                            })), S.push(d.$observe(k + "Placement", function (a) {
                                O.placement = a || n.placement, O.isOpen && T()
                            }))
                        }

                        function A() {
                            S.length && (angular.forEach(S, function (a) {
                                a()
                            }), S.length = 0)
                        }

                        function B(a) {
                            O && O.isOpen && D && (b[0].contains(a.target) || D[0].contains(a.target) || q())
                        }

                        var D, E, F, G, H, I, J, K, L = !!angular.isDefined(n.appendToBody) && n.appendToBody,
                            M = p(void 0), N = angular.isDefined(d[k + "Enable"]), O = a.$new(!0), P = !1,
                            Q = !!angular.isDefined(d[k + "IsOpen"]) && l(d[k + "IsOpen"]),
                            R = !!n.useContentExp && l(d[e]), S = [], T = function () {
                                D && D.html() && (I || (I = g(function () {
                                    var a = i.positionElements(b, D, O.placement, L),
                                        c = angular.isDefined(D.offsetHeight) ? D.offsetHeight : D.prop("offsetHeight"),
                                        d = L ? i.offset(b) : i.position(b);
                                    D.css({top: a.top + "px", left: a.left + "px"});
                                    var e = a.placement.split("-");
                                    D.hasClass(e[0]) || (D.removeClass(K.split("-")[0]), D.addClass(e[0])), D.hasClass(n.placementClassPrefix + a.placement) || (D.removeClass(n.placementClassPrefix + K), D.addClass(n.placementClassPrefix + a.placement)), J = g(function () {
                                        var a = angular.isDefined(D.offsetHeight) ? D.offsetHeight : D.prop("offsetHeight"),
                                            b = i.adjustTop(e, d, c, a);
                                        b && D.css(b), J = null
                                    }, 0, !1), D.hasClass("uib-position-measure") ? (i.positionArrow(D, a.placement), D.removeClass("uib-position-measure")) : K !== a.placement && i.positionArrow(D, a.placement), K = a.placement, I = null
                                }, 0, !1)))
                            };
                        O.origScope = a, O.isOpen = !1, O.contentExp = function () {
                            return O.content
                        }, d.$observe("disabled", function (a) {
                            a && s(), a && O.isOpen && t()
                        }), Q && a.$watch(Q, function (a) {
                            O && !a === O.isOpen && j()
                        });
                        var U = function () {
                            M.show.forEach(function (a) {
                                "outsideClick" === a ? b.off("click", j) : (b.off(a, m), b.off(a, j))
                            }), M.hide.forEach(function (a) {
                                "outsideClick" === a ? h.off("click", B) : b.off(a, q)
                            })
                        };
                        !function () {
                            var c = [], e = [], f = a.$eval(d[k + "Trigger"]);
                            U(), angular.isObject(f) ? (Object.keys(f).forEach(function (a) {
                                c.push(a), e.push(f[a])
                            }), M = {
                                show: c,
                                hide: e
                            }) : M = p(f), "none" !== M.show && M.show.forEach(function (a, c) {
                                "outsideClick" === a ? (b.on("click", j), h.on("click", B)) : a === M.hide[c] ? b.on(a, j) : a && (b.on(a, m), b.on(M.hide[c], q)), b.on("keypress", function (a) {
                                    27 === a.which && q()
                                })
                            })
                        }();
                        var V = a.$eval(d[k + "Animation"]);
                        O.animation = angular.isDefined(V) ? !!V : n.animation;
                        var W, X = k + "AppendToBody";
                        W = X in d && void 0 === d[X] || a.$eval(d[X]), L = angular.isDefined(W) ? W : L, a.$on("$destroy", function () {
                            U(), w(), O = null
                        })
                    }
                }
            }
        }
    }]
}).directive("uibTooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function (a, b, c, d) {
    return {
        link: function (e, f, g) {
            var h, i, j, k = e.$eval(g.tooltipTemplateTranscludeScope), l = 0, m = function () {
                i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function () {
                    i = null
                }), i = j, j = null)
            };
            e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude), function (b) {
                var g = ++l;
                b ? (d(b, !0).then(function (d) {
                    if (g === l) {
                        var e = k.$new(), i = d, n = c(i)(e, function (b) {
                            m(), a.enter(b, f)
                        });
                        h = e, j = n, h.$emit("$includeContentLoaded", b)
                    }
                }, function () {
                    g === l && (m(), e.$emit("$includeContentError", b))
                }), e.$emit("$includeContentRequested", b)) : m()
            }), e.$on("$destroy", m)
        }
    }
}]).directive("uibTooltipClasses", ["$uibPosition", function (a) {
    return {
        restrict: "A", link: function (b, c, d) {
            if (b.placement) {
                var e = a.parsePlacement(b.placement);
                c.addClass(e[0])
            }
            b.popupClass && c.addClass(b.popupClass), b.animation && c.addClass(d.tooltipAnimationClass)
        }
    }
}]).directive("uibTooltipPopup", function () {
    return {restrict: "A", scope: {content: "@"}, templateUrl: "uib/template/tooltip/tooltip-popup.html"}
}).directive("uibTooltip", ["$uibTooltip", function (a) {
    return a("uibTooltip", "tooltip", "mouseenter")
}]).directive("uibTooltipTemplatePopup", function () {
    return {
        restrict: "A",
        scope: {contentExp: "&", originScope: "&"},
        templateUrl: "uib/template/tooltip/tooltip-template-popup.html"
    }
}).directive("uibTooltipTemplate", ["$uibTooltip", function (a) {
    return a("uibTooltipTemplate", "tooltip", "mouseenter", {useContentExp: !0})
}]).directive("uibTooltipHtmlPopup", function () {
    return {restrict: "A", scope: {contentExp: "&"}, templateUrl: "uib/template/tooltip/tooltip-html-popup.html"}
}).directive("uibTooltipHtml", ["$uibTooltip", function (a) {
    return a("uibTooltipHtml", "tooltip", "mouseenter", {useContentExp: !0})
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup", function () {
    return {
        restrict: "A",
        scope: {uibTitle: "@", contentExp: "&", originScope: "&"},
        templateUrl: "uib/template/popover/popover-template.html"
    }
}).directive("uibPopoverTemplate", ["$uibTooltip", function (a) {
    return a("uibPopoverTemplate", "popover", "click", {useContentExp: !0})
}]).directive("uibPopoverHtmlPopup", function () {
    return {
        restrict: "A",
        scope: {contentExp: "&", uibTitle: "@"},
        templateUrl: "uib/template/popover/popover-html.html"
    }
}).directive("uibPopoverHtml", ["$uibTooltip", function (a) {
    return a("uibPopoverHtml", "popover", "click", {useContentExp: !0})
}]).directive("uibPopoverPopup", function () {
    return {restrict: "A", scope: {uibTitle: "@", content: "@"}, templateUrl: "uib/template/popover/popover.html"}
}).directive("uibPopover", ["$uibTooltip", function (a) {
    return a("uibPopover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("uibProgressConfig", {
    animate: !0,
    max: 100
}).controller("UibProgressController", ["$scope", "$attrs", "uibProgressConfig", function (a, b, c) {
    function d() {
        return angular.isDefined(a.maxParam) ? a.maxParam : c.max
    }

    var e = this, f = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = d(), this.addBar = function (a, b, c) {
        f || b.css({transition: "none"}), this.bars.push(a), a.max = d(), a.title = c && angular.isDefined(c.title) ? c.title : "progressbar", a.$watch("value", function (b) {
            a.recalculatePercentage()
        }), a.recalculatePercentage = function () {
            var b = e.bars.reduce(function (a, b) {
                return b.percent = +(100 * b.value / b.max).toFixed(2), a + b.percent
            }, 0);
            b > 100 && (a.percent -= b - 100)
        }, a.$on("$destroy", function () {
            b = null, e.removeBar(a)
        })
    }, this.removeBar = function (a) {
        this.bars.splice(this.bars.indexOf(a), 1), this.bars.forEach(function (a) {
            a.recalculatePercentage()
        })
    }, a.$watch("maxParam", function (a) {
        e.bars.forEach(function (a) {
            a.max = d(), a.recalculatePercentage()
        })
    })
}]).directive("uibProgress", function () {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        require: "uibProgress",
        scope: {maxParam: "=?max"},
        templateUrl: "uib/template/progressbar/progress.html"
    }
}).directive("uibBar", function () {
    return {
        replace: !0,
        transclude: !0,
        require: "^uibProgress",
        scope: {value: "=", type: "@"},
        templateUrl: "uib/template/progressbar/bar.html",
        link: function (a, b, c, d) {
            d.addBar(a, b, c)
        }
    }
}).directive("uibProgressbar", function () {
    return {
        replace: !0,
        transclude: !0,
        controller: "UibProgressController",
        scope: {value: "=", maxParam: "=?max", type: "@"},
        templateUrl: "uib/template/progressbar/progressbar.html",
        link: function (a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]), {title: c.title})
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("uibRatingConfig", {
    max: 5, stateOn: null, stateOff: null, enableReset: !0, titles: ["one", "two", "three", "four", "five"]
}).controller("UibRatingController", ["$scope", "$attrs", "uibRatingConfig", function (a, b, c) {
    var d = {$setViewValue: angular.noop}, e = this;
    this.init = function (e) {
        d = e, d.$render = this.render, d.$formatters.push(function (a) {
            return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a
        }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff, this.enableReset = angular.isDefined(b.enableReset) ? a.$parent.$eval(b.enableReset) : c.enableReset;
        var f = angular.isDefined(b.titles) ? a.$parent.$eval(b.titles) : c.titles;
        this.titles = angular.isArray(f) && f.length > 0 ? f : c.titles;
        var g = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(g)
    }, this.buildTemplateObjects = function (a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({index: b}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff,
            title: this.getTitle(b)
        }, a[b]);
        return a
    }, this.getTitle = function (a) {
        return a >= this.titles.length ? a + 1 : this.titles[a]
    }, a.rate = function (b) {
        if (!a.readonly && b >= 0 && b <= a.range.length) {
            var c = e.enableReset && d.$viewValue === b ? 0 : b;
            d.$setViewValue(c), d.$render()
        }
    }, a.enter = function (b) {
        a.readonly || (a.value = b), a.onHover({value: b})
    }, a.reset = function () {
        a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function (b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function () {
        a.value = d.$viewValue, a.title = e.getTitle(a.value - 1)
    }
}]).directive("uibRating", function () {
    return {
        require: ["uibRating", "ngModel"],
        restrict: "A",
        scope: {readonly: "=?readOnly", onHover: "&", onLeave: "&"},
        controller: "UibRatingController",
        templateUrl: "uib/template/rating/rating.html",
        link: function (a, b, c, d) {
            var e = d[0], f = d[1];
            e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("UibTabsetController", ["$scope", function (a) {
    function b(a) {
        for (var b = 0; b < d.tabs.length; b++) if (d.tabs[b].index === a) return b
    }

    var c, d = this;
    d.tabs = [], d.select = function (a, f) {
        if (!e) {
            var g = b(c), h = d.tabs[g];
            if (h) {
                if (h.tab.onDeselect({$event: f, $selectedIndex: a}), f && f.isDefaultPrevented()) return;
                h.tab.active = !1
            }
            var i = d.tabs[a];
            i ? (i.tab.onSelect({$event: f}), i.tab.active = !0, d.active = i.index, c = i.index) : !i && angular.isDefined(c) && (d.active = null, c = null)
        }
    }, d.addTab = function (a) {
        if (d.tabs.push({tab: a, index: a.index}), d.tabs.sort(function (a, b) {
                return a.index > b.index ? 1 : a.index < b.index ? -1 : 0
            }), a.index === d.active || !angular.isDefined(d.active) && 1 === d.tabs.length) {
            var c = b(a.index);
            d.select(c)
        }
    }, d.removeTab = function (a) {
        for (var b, c = 0; c < d.tabs.length; c++) if (d.tabs[c].tab === a) {
            b = c;
            break
        }
        if (d.tabs[b].index === d.active) {
            var e = b === d.tabs.length - 1 ? b - 1 : b + 1 % d.tabs.length;
            d.select(e)
        }
        d.tabs.splice(b, 1)
    }, a.$watch("tabset.active", function (a) {
        angular.isDefined(a) && a !== c && d.select(b(a))
    });
    var e;
    a.$on("$destroy", function () {
        e = !0
    })
}]).directive("uibTabset", function () {
    return {
        transclude: !0,
        replace: !0,
        scope: {},
        bindToController: {active: "=?", type: "@"},
        controller: "UibTabsetController",
        controllerAs: "tabset",
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/tabs/tabset.html"
        },
        link: function (a, b, c) {
            a.vertical = !!angular.isDefined(c.vertical) && a.$parent.$eval(c.vertical), a.justified = !!angular.isDefined(c.justified) && a.$parent.$eval(c.justified)
        }
    }
}).directive("uibTab", ["$parse", function (a) {
    return {
        require: "^uibTabset",
        replace: !0,
        templateUrl: function (a, b) {
            return b.templateUrl || "uib/template/tabs/tab.html"
        },
        transclude: !0,
        scope: {heading: "@", index: "=?", classes: "@?", onSelect: "&select", onDeselect: "&deselect"},
        controller: function () {
        },
        controllerAs: "tab",
        link: function (b, c, d, e, f) {
            b.disabled = !1, d.disable && b.$parent.$watch(a(d.disable), function (a) {
                b.disabled = !!a
            }), angular.isUndefined(d.index) && (e.tabs && e.tabs.length ? b.index = Math.max.apply(null, e.tabs.map(function (a) {
                return a.index
            })) + 1 : b.index = 0), angular.isUndefined(d.classes) && (b.classes = ""), b.select = function (a) {
                if (!b.disabled) {
                    for (var c, d = 0; d < e.tabs.length; d++) if (e.tabs[d].tab === b) {
                        c = d;
                        break
                    }
                    e.select(c, a)
                }
            }, e.addTab(b), b.$on("$destroy", function () {
                e.removeTab(b)
            }), b.$transcludeFn = f
        }
    }
}]).directive("uibTabHeadingTransclude", function () {
    return {
        restrict: "A", require: "^uibTab", link: function (a, b) {
            a.$watch("headingElement", function (a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}).directive("uibTabContentTransclude", function () {
    function a(a) {
        return a.tagName && (a.hasAttribute("uib-tab-heading") || a.hasAttribute("data-uib-tab-heading") || a.hasAttribute("x-uib-tab-heading") || "uib-tab-heading" === a.tagName.toLowerCase() || "data-uib-tab-heading" === a.tagName.toLowerCase() || "x-uib-tab-heading" === a.tagName.toLowerCase() || "uib:tab-heading" === a.tagName.toLowerCase())
    }

    return {
        restrict: "A", require: "^uibTabset", link: function (b, c, d) {
            var e = b.$eval(d.uibTabContentTransclude).tab;
            e.$transcludeFn(e.$parent, function (b) {
                angular.forEach(b, function (b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("uibTimepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    showMeridian: !0,
    showSeconds: !1,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0,
    showSpinners: !0,
    templateUrl: "uib/template/timepicker/timepicker.html"
}).controller("UibTimepickerController", ["$scope", "$element", "$attrs", "$parse", "$log", "$locale", "uibTimepickerConfig", function (a, b, c, d, e, f, g) {
    function h() {
        var b = +a.hours;
        return (a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b) && "" !== a.hours ? (a.showMeridian && (12 === b && (b = 0), a.meridian === y[1] && (b += 12)), b) : void 0
    }

    function i() {
        var b = +a.minutes;
        return b >= 0 && 60 > b && "" !== a.minutes ? b : void 0
    }

    function j() {
        var b = +a.seconds;
        return b >= 0 && 60 > b ? b : void 0
    }

    function k(a, b) {
        return null === a ? "" : angular.isDefined(a) && a.toString().length < 2 && !b ? "0" + a : a.toString()
    }

    function l(a) {
        m(), x.$setViewValue(new Date(v)), n(a)
    }

    function m() {
        s && s.$setValidity("hours", !0), t && t.$setValidity("minutes", !0), u && u.$setValidity("seconds", !0), x.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1, a.invalidSeconds = !1
    }

    function n(b) {
        if (x.$modelValue) {
            var c = v.getHours(), d = v.getMinutes(), e = v.getSeconds();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : k(c, !z), "m" !== b && (a.minutes = k(d)), a.meridian = v.getHours() < 12 ? y[0] : y[1], "s" !== b && (a.seconds = k(e)), a.meridian = v.getHours() < 12 ? y[0] : y[1]
        } else a.hours = null, a.minutes = null, a.seconds = null, a.meridian = y[0]
    }

    function o(a) {
        v = q(v, a), l()
    }

    function p(a, b) {
        return q(a, 60 * b)
    }

    function q(a, b) {
        var c = new Date(a.getTime() + 1e3 * b), d = new Date(a);
        return d.setHours(c.getHours(), c.getMinutes(), c.getSeconds()), d
    }

    function r() {
        return (null === a.hours || "" === a.hours) && (null === a.minutes || "" === a.minutes) && (!a.showSeconds || a.showSeconds && (null === a.seconds || "" === a.seconds))
    }

    var s, t, u, v = new Date, w = [], x = {$setViewValue: angular.noop},
        y = angular.isDefined(c.meridians) ? a.$parent.$eval(c.meridians) : g.meridians || f.DATETIME_FORMATS.AMPMS,
        z = !angular.isDefined(c.padHours) || a.$parent.$eval(c.padHours);
    a.tabindex = angular.isDefined(c.tabindex) ? c.tabindex : 0, b.removeAttr("tabindex"), this.init = function (b, d) {
        x = b, x.$render = this.render, x.$formatters.unshift(function (a) {
            return a ? new Date(a) : null
        });
        var e = d.eq(0), f = d.eq(1), h = d.eq(2);
        s = e.controller("ngModel"), t = f.controller("ngModel"), u = h.controller("ngModel"), (angular.isDefined(c.mousewheel) ? a.$parent.$eval(c.mousewheel) : g.mousewheel) && this.setupMousewheelEvents(e, f, h), (angular.isDefined(c.arrowkeys) ? a.$parent.$eval(c.arrowkeys) : g.arrowkeys) && this.setupArrowkeyEvents(e, f, h), a.readonlyInput = angular.isDefined(c.readonlyInput) ? a.$parent.$eval(c.readonlyInput) : g.readonlyInput, this.setupInputEvents(e, f, h)
    };
    var A = g.hourStep;
    c.hourStep && w.push(a.$parent.$watch(d(c.hourStep), function (a) {
        A = +a
    }));
    var B = g.minuteStep;
    c.minuteStep && w.push(a.$parent.$watch(d(c.minuteStep), function (a) {
        B = +a
    }));
    var C;
    w.push(a.$parent.$watch(d(c.min), function (a) {
        var b = new Date(a);
        C = isNaN(b) ? void 0 : b
    }));
    var D;
    w.push(a.$parent.$watch(d(c.max), function (a) {
        var b = new Date(a);
        D = isNaN(b) ? void 0 : b
    }));
    var E = !1;
    c.ngDisabled && w.push(a.$parent.$watch(d(c.ngDisabled), function (a) {
        E = a
    })), a.noIncrementHours = function () {
        var a = p(v, 60 * A);
        return E || a > D || v > a && C > a
    }, a.noDecrementHours = function () {
        var a = p(v, 60 * -A);
        return E || C > a || a > v && a > D
    }, a.noIncrementMinutes = function () {
        var a = p(v, B);
        return E || a > D || v > a && C > a
    }, a.noDecrementMinutes = function () {
        var a = p(v, -B);
        return E || C > a || a > v && a > D
    }, a.noIncrementSeconds = function () {
        var a = q(v, F);
        return E || a > D || v > a && C > a
    }, a.noDecrementSeconds = function () {
        var a = q(v, -F);
        return E || C > a || a > v && a > D
    }, a.noToggleMeridian = function () {
        return v.getHours() < 12 ? E || p(v, 720) > D : E || p(v, -720) < C
    };
    var F = g.secondStep;
    c.secondStep && w.push(a.$parent.$watch(d(c.secondStep), function (a) {
        F = +a
    })), a.showSeconds = g.showSeconds, c.showSeconds && w.push(a.$parent.$watch(d(c.showSeconds), function (b) {
        a.showSeconds = !!b
    })), a.showMeridian = g.showMeridian, c.showMeridian && w.push(a.$parent.$watch(d(c.showMeridian), function (b) {
        if (a.showMeridian = !!b, x.$error.time) {
            var c = h(), d = i();
            angular.isDefined(c) && angular.isDefined(d) && (v.setHours(c), l())
        } else n()
    })), this.setupMousewheelEvents = function (b, c, d) {
        var e = function (a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0
        };
        b.bind("mousewheel wheel", function (b) {
            E || a.$apply(e(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
        }), c.bind("mousewheel wheel", function (b) {
            E || a.$apply(e(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
        }), d.bind("mousewheel wheel", function (b) {
            E || a.$apply(e(b) ? a.incrementSeconds() : a.decrementSeconds()), b.preventDefault()
        })
    }, this.setupArrowkeyEvents = function (b, c, d) {
        b.bind("keydown", function (b) {
            E || (38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply()))
        }), c.bind("keydown", function (b) {
            E || (38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply()))
        }), d.bind("keydown", function (b) {
            E || (38 === b.which ? (b.preventDefault(), a.incrementSeconds(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementSeconds(), a.$apply()))
        })
    }, this.setupInputEvents = function (b, c, d) {
        if (a.readonlyInput) return a.updateHours = angular.noop, a.updateMinutes = angular.noop, void(a.updateSeconds = angular.noop);
        var e = function (b, c, d) {
            x.$setViewValue(null), x.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b, s && s.$setValidity("hours", !1)), angular.isDefined(c) && (a.invalidMinutes = c, t && t.$setValidity("minutes", !1)), angular.isDefined(d) && (a.invalidSeconds = d, u && u.$setValidity("seconds", !1))
        };
        a.updateHours = function () {
            var a = h(), b = i();
            x.$setDirty(), angular.isDefined(a) && angular.isDefined(b) ? (v.setHours(a), v.setMinutes(b), C > v || v > D ? e(!0) : l("h")) : e(!0)
        }, b.bind("blur", function (b) {
            x.$setTouched(), r() ? m() : null === a.hours || "" === a.hours ? e(!0) : !a.invalidHours && a.hours < 10 && a.$apply(function () {
                a.hours = k(a.hours, !z)
            })
        }), a.updateMinutes = function () {
            var a = i(), b = h();
            x.$setDirty(), angular.isDefined(a) && angular.isDefined(b) ? (v.setHours(b), v.setMinutes(a), C > v || v > D ? e(void 0, !0) : l("m")) : e(void 0, !0)
        }, c.bind("blur", function (b) {
            x.$setTouched(), r() ? m() : null === a.minutes ? e(void 0, !0) : !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
                a.minutes = k(a.minutes)
            })
        }), a.updateSeconds = function () {
            var a = j();
            x.$setDirty(), angular.isDefined(a) ? (v.setSeconds(a), l("s")) : e(void 0, void 0, !0)
        }, d.bind("blur", function (b) {
            r() ? m() : !a.invalidSeconds && a.seconds < 10 && a.$apply(function () {
                a.seconds = k(a.seconds)
            })
        })
    }, this.render = function () {
        var b = x.$viewValue;
        isNaN(b) ? (x.$setValidity("time", !1), e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (b && (v = b), C > v || v > D ? (x.$setValidity("time", !1), a.invalidHours = !0, a.invalidMinutes = !0) : m(), n())
    }, a.showSpinners = angular.isDefined(c.showSpinners) ? a.$parent.$eval(c.showSpinners) : g.showSpinners, a.incrementHours = function () {
        a.noIncrementHours() || o(60 * A * 60)
    }, a.decrementHours = function () {
        a.noDecrementHours() || o(60 * -A * 60)
    }, a.incrementMinutes = function () {
        a.noIncrementMinutes() || o(60 * B)
    }, a.decrementMinutes = function () {
        a.noDecrementMinutes() || o(60 * -B)
    }, a.incrementSeconds = function () {
        a.noIncrementSeconds() || o(F)
    }, a.decrementSeconds = function () {
        a.noDecrementSeconds() || o(-F)
    }, a.toggleMeridian = function () {
        var b = i(), c = h();
        a.noToggleMeridian() || (angular.isDefined(b) && angular.isDefined(c) ? o(720 * (v.getHours() < 12 ? 60 : -60)) : a.meridian = a.meridian === y[0] ? y[1] : y[0])
    }, a.blur = function () {
        x.$setTouched()
    }, a.$on("$destroy", function () {
        for (; w.length;) w.shift()()
    })
}]).directive("uibTimepicker", ["uibTimepickerConfig", function (a) {
    return {
        require: ["uibTimepicker", "?^ngModel"],
        restrict: "A",
        controller: "UibTimepickerController",
        controllerAs: "timepicker",
        scope: {},
        templateUrl: function (b, c) {
            return c.templateUrl || a.templateUrl
        },
        link: function (a, b, c, d) {
            var e = d[0], f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.debounce", "ui.bootstrap.position"]).factory("uibTypeaheadParser", ["$parse", function (a) {
    return {
        parse: function (c) {
            var d = c.match(/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/);
            if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
            return {itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1])}
        }
    }
}]).controller("UibTypeaheadController", ["$scope", "$element", "$attrs", "$compile", "$parse", "$q", "$timeout", "$document", "$window", "$rootScope", "$$debounce", "$uibPosition", "uibTypeaheadParser", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n() {
        O.moveInProgress || (O.moveInProgress = !0, O.$digest()), Z()
    }

    function o() {
        O.position = E ? l.offset(b) : l.position(b), O.position.top += b.prop("offsetHeight")
    }

    var p, q, r = [9, 13, 27, 38, 40], t = a.$eval(c.typeaheadMinLength);
    t || 0 === t || (t = 1), a.$watch(c.typeaheadMinLength, function (a) {
        t = a || 0 === a ? a : 1
    });
    var u = a.$eval(c.typeaheadWaitMs) || 0, v = !1 !== a.$eval(c.typeaheadEditable);
    a.$watch(c.typeaheadEditable, function (a) {
        v = !1 !== a
    });
    var w, x, y = e(c.typeaheadLoading).assign || angular.noop,
        z = c.typeaheadShouldSelect ? e(c.typeaheadShouldSelect) : function (a, b) {
            var c = b.$event;
            return 13 === c.which || 9 === c.which
        }, A = e(c.typeaheadOnSelect),
        B = !!angular.isDefined(c.typeaheadSelectOnBlur) && a.$eval(c.typeaheadSelectOnBlur),
        C = e(c.typeaheadNoResults).assign || angular.noop,
        D = c.typeaheadInputFormatter ? e(c.typeaheadInputFormatter) : void 0,
        E = !!c.typeaheadAppendToBody && a.$eval(c.typeaheadAppendToBody),
        F = c.typeaheadAppendTo ? a.$eval(c.typeaheadAppendTo) : null, G = !1 !== a.$eval(c.typeaheadFocusFirst),
        H = !!c.typeaheadSelectOnExact && a.$eval(c.typeaheadSelectOnExact),
        I = e(c.typeaheadIsOpen).assign || angular.noop, J = a.$eval(c.typeaheadShowHint) || !1, K = e(c.ngModel),
        L = e(c.ngModel + "($$$p)"), M = function (b, c) {
            return angular.isFunction(K(a)) && q && q.$options && q.$options.getterSetter ? L(b, {$$$p: c}) : K.assign(b, c)
        }, N = m.parse(c.uibTypeahead), O = a.$new(), P = a.$on("$destroy", function () {
            O.$destroy()
        });
    O.$on("$destroy", P);
    var Q = "typeahead-" + O.$id + "-" + Math.floor(1e4 * Math.random());
    b.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": Q});
    var R, S;
    J && (R = angular.element("<div></div>"), R.css("position", "relative"), b.after(R), S = b.clone(), S.attr("placeholder", ""), S.attr("tabindex", "-1"), S.val(""), S.css({
        position: "absolute",
        top: "0px",
        left: "0px",
        "border-color": "transparent",
        "box-shadow": "none",
        opacity: 1,
        background: "none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
        color: "#999"
    }), b.css({
        position: "relative",
        "vertical-align": "top",
        "background-color": "transparent"
    }), S.attr("id") && S.removeAttr("id"), R.append(S), S.after(b));
    var T = angular.element("<div uib-typeahead-popup></div>");
    T.attr({
        id: Q,
        matches: "matches",
        active: "activeIdx",
        select: "select(activeIdx, evt)",
        "move-in-progress": "moveInProgress",
        query: "query",
        position: "position",
        "assign-is-open": "assignIsOpen(isOpen)",
        debounce: "debounceUpdate"
    }), angular.isDefined(c.typeaheadTemplateUrl) && T.attr("template-url", c.typeaheadTemplateUrl), angular.isDefined(c.typeaheadPopupTemplateUrl) && T.attr("popup-template-url", c.typeaheadPopupTemplateUrl);
    var U = function () {
        J && S.val("")
    }, V = function () {
        O.matches = [], O.activeIdx = -1, b.attr("aria-expanded", !1), U()
    }, W = function (a) {
        return Q + "-option-" + a
    };
    O.$watch("activeIdx", function (a) {
        0 > a ? b.removeAttr("aria-activedescendant") : b.attr("aria-activedescendant", W(a))
    });
    var X = function (a, b) {
        return !!(O.matches.length > b && a) && a.toUpperCase() === O.matches[b].label.toUpperCase()
    }, Y = function (c, d) {
        var e = {$viewValue: c};
        y(a, !0), C(a, !1), f.when(N.source(a, e)).then(function (f) {
            var g = c === p.$viewValue;
            if (g && w) if (f && f.length > 0) {
                O.activeIdx = G ? 0 : -1, C(a, !1), O.matches.length = 0;
                for (var h = 0; h < f.length; h++) e[N.itemName] = f[h], O.matches.push({
                    id: W(h),
                    label: N.viewMapper(O, e),
                    model: f[h]
                });
                if (O.query = c, o(), b.attr("aria-expanded", !0), H && 1 === O.matches.length && X(c, 0) && (angular.isNumber(O.debounceUpdate) || angular.isObject(O.debounceUpdate) ? k(function () {
                        O.select(0, d)
                    }, angular.isNumber(O.debounceUpdate) ? O.debounceUpdate : O.debounceUpdate.default) : O.select(0, d)), J) {
                    var i = O.matches[0].label;
                    angular.isString(c) && c.length > 0 && i.slice(0, c.length).toUpperCase() === c.toUpperCase() ? S.val(c + i.slice(c.length)) : S.val("")
                }
            } else V(), C(a, !0);
            g && y(a, !1)
        }, function () {
            V(), y(a, !1), C(a, !0)
        })
    };
    E && (angular.element(i).on("resize", n), h.find("body").on("scroll", n));
    var Z = k(function () {
        O.matches.length && o(), O.moveInProgress = !1
    }, 200);
    O.moveInProgress = !1, O.query = void 0;
    var $, _ = function (a) {
        $ = g(function () {
            Y(a)
        }, u)
    }, aa = function () {
        $ && g.cancel($)
    };
    V(), O.assignIsOpen = function (b) {
        I(a, b)
    }, O.select = function (d, e) {
        var f, h, i = {};
        x = !0, i[N.itemName] = h = O.matches[d].model, f = N.modelMapper(a, i), M(a, f), p.$setValidity("editable", !0), p.$setValidity("parse", !0), A(a, {
            $item: h,
            $model: f,
            $label: N.viewMapper(a, i),
            $event: e
        }), V(), !1 !== O.$eval(c.typeaheadFocusOnSelect) && g(function () {
            b[0].focus()
        }, 0, !1)
    }, b.on("keydown", function (b) {
        if (0 !== O.matches.length && -1 !== r.indexOf(b.which)) {
            var c = z(a, {$event: b});
            if (-1 === O.activeIdx && c || 9 === b.which && b.shiftKey) return V(), void O.$digest();
            b.preventDefault();
            var d;
            switch (b.which) {
                case 27:
                    b.stopPropagation(), V(), a.$digest();
                    break;
                case 38:
                    O.activeIdx = (O.activeIdx > 0 ? O.activeIdx : O.matches.length) - 1, O.$digest(), d = T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx], d.parentNode.scrollTop = d.offsetTop;
                    break;
                case 40:
                    O.activeIdx = (O.activeIdx + 1) % O.matches.length, O.$digest(), d = T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx], d.parentNode.scrollTop = d.offsetTop;
                    break;
                default:
                    c && O.$apply(function () {
                        angular.isNumber(O.debounceUpdate) || angular.isObject(O.debounceUpdate) ? k(function () {
                            O.select(O.activeIdx, b)
                        }, angular.isNumber(O.debounceUpdate) ? O.debounceUpdate : O.debounceUpdate.default) : O.select(O.activeIdx, b)
                    })
            }
        }
    }), b.bind("focus", function (a) {
        w = !0, 0 !== t || p.$viewValue || g(function () {
            Y(p.$viewValue, a)
        }, 0)
    }), b.bind("blur", function (a) {
        B && O.matches.length && -1 !== O.activeIdx && !x && (x = !0, O.$apply(function () {
            angular.isObject(O.debounceUpdate) && angular.isNumber(O.debounceUpdate.blur) ? k(function () {
                O.select(O.activeIdx, a)
            }, O.debounceUpdate.blur) : O.select(O.activeIdx, a)
        })), !v && p.$error.editable && (p.$setViewValue(), O.$apply(function () {
            p.$setValidity("editable", !0), p.$setValidity("parse", !0)
        }), b.val("")), w = !1, x = !1
    });
    var ba = function (c) {
        b[0] !== c.target && 3 !== c.which && 0 !== O.matches.length && (V(), j.$$phase || a.$digest())
    };
    h.on("click", ba), a.$on("$destroy", function () {
        h.off("click", ba), (E || F) && ca.remove(), E && (angular.element(i).off("resize", n), h.find("body").off("scroll", n)), T.remove(), J && R.remove()
    });
    var ca = d(T)(O);
    E ? h.find("body").append(ca) : F ? angular.element(F).eq(0).append(ca) : b.after(ca), this.init = function (b, c) {
        p = b, q = c, O.debounceUpdate = p.$options && e(p.$options.debounce)(a), p.$parsers.unshift(function (b) {
            return w = !0, 0 === t || b && b.length >= t ? u > 0 ? (aa(), _(b)) : Y(b) : (y(a, !1), aa(), V()), v ? b : b ? void p.$setValidity("editable", !1) : (p.$setValidity("editable", !0), null)
        }), p.$formatters.push(function (b) {
            var c, d, e = {};
            return v || p.$setValidity("editable", !0), D ? (e.$model = b, D(a, e)) : (e[N.itemName] = b, c = N.viewMapper(a, e), e[N.itemName] = void 0, d = N.viewMapper(a, e), c !== d ? c : b)
        })
    }
}]).directive("uibTypeahead", function () {
    return {
        controller: "UibTypeaheadController",
        require: ["ngModel", "^?ngModelOptions", "uibTypeahead"],
        link: function (a, b, c, d) {
            d[2].init(d[0], d[1])
        }
    }
}).directive("uibTypeaheadPopup", ["$$debounce", function (a) {
    return {
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "&",
            moveInProgress: "=",
            select: "&",
            assignIsOpen: "&",
            debounce: "&"
        }, replace: !0, templateUrl: function (a, b) {
            return b.popupTemplateUrl || "uib/template/typeahead/typeahead-popup.html"
        }, link: function (b, c, d) {
            b.templateUrl = d.templateUrl, b.isOpen = function () {
                var a = b.matches.length > 0;
                return b.assignIsOpen({isOpen: a}), a
            }, b.isActive = function (a) {
                return b.active === a
            }, b.selectActive = function (a) {
                b.active = a
            }, b.selectMatch = function (c, d) {
                var e = b.debounce();
                angular.isNumber(e) || angular.isObject(e) ? a(function () {
                    b.select({activeIdx: c, evt: d})
                }, angular.isNumber(e) ? e : e.default) : b.select({activeIdx: c, evt: d})
            }
        }
    }
}]).directive("uibTypeaheadMatch", ["$templateRequest", "$compile", "$parse", function (a, b, c) {
    return {
        scope: {index: "=", match: "=", query: "="}, link: function (d, e, f) {
            var g = c(f.templateUrl)(d.$parent) || "uib/template/typeahead/typeahead-match.html";
            a(g).then(function (a) {
                var c = angular.element(a.trim());
                e.replaceWith(c), b(c)(d)
            })
        }
    }
}]).filter("uibTypeaheadHighlight", ["$sce", "$injector", "$log", function (a, b, c) {
    function d(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    function e(a) {
        return /<.*>/g.test(a)
    }

    var f;
    return f = b.has("$sanitize"), function (b, g) {
        return !f && e(b) && c.warn("Unsafe use of typeahead please use ngSanitize"), b = g ? ("" + b).replace(new RegExp(d(g), "gi"), "<strong>$&</strong>") : b, f || (b = a.trustAsHtml(b)), b
    }
}]), angular.module("uib/template/accordion/accordion-group.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/accordion/accordion-group.html", '<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')
}]), angular.module("uib/template/accordion/accordion.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/accordion/accordion.html", '<div role="tablist" class="panel-group" ng-transclude></div>')
}]), angular.module("uib/template/alert/alert.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/alert/alert.html", '<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n')
}]), angular.module("uib/template/carousel/carousel.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/carousel/carousel.html", '<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n')
}]), angular.module("uib/template/carousel/slide.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/carousel/slide.html", '<div class="text-center" ng-transclude></div>\n')
}]), angular.module("uib/template/datepicker/datepicker.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/datepicker/datepicker.html", '<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n')
}]), angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/datepicker/day.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/datepicker/month.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/datepicker/month.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/datepicker/year.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/datepicker/year.html", '<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">previous</span></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i aria-hidden="true" class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">next</span></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/datepickerPopup/popup.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/datepickerPopup/popup.html", '<ul role="presentation" class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')
}]), angular.module("uib/template/modal/window.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/modal/window.html", "<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")
}]), angular.module("uib/template/pager/pager.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/pager/pager.html", '<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n')
}]), angular.module("uib/template/pagination/pagination.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/pagination/pagination.html", '<li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n')
}]), angular.module("uib/template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/tooltip/tooltip-html-popup.html", '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')
}]), angular.module("uib/template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/tooltip/tooltip-popup.html", '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')
}]), angular.module("uib/template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/tooltip/tooltip-template-popup.html", '<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')
}]), angular.module("uib/template/popover/popover-html.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/popover/popover-html.html", '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')
}]), angular.module("uib/template/popover/popover-template.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/popover/popover-template.html", '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]), angular.module("uib/template/popover/popover.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/popover/popover.html", '<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')
}]), angular.module("uib/template/progressbar/bar.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')
}]), angular.module("uib/template/progressbar/progress.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/progressbar/progress.html", '<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')
}]), angular.module("uib/template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')
}]), angular.module("uib/template/rating/rating.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')
}]), angular.module("uib/template/tabs/tab.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/tabs/tab.html", '<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("uib/template/tabs/tabset.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("uib/template/timepicker/timepicker.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/timepicker/timepicker.html", '<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("uib/template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/typeahead/typeahead-match.html", '<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')
}]), angular.module("uib/template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
    a.put("uib/template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]), angular.module("ui.bootstrap.carousel").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibCarouselCss && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'), angular.$$uibCarouselCss = !0
}), angular.module("ui.bootstrap.datepicker").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'), angular.$$uibDatepickerCss = !0
}), angular.module("ui.bootstrap.position").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibPositionCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'), angular.$$uibPositionCss = !0
}), angular.module("ui.bootstrap.datepickerPopup").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibDatepickerpopupCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'), angular.$$uibDatepickerpopupCss = !0
}), angular.module("ui.bootstrap.tooltip").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTooltipCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'), angular.$$uibTooltipCss = !0
}), angular.module("ui.bootstrap.timepicker").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTimepickerCss && angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'), angular.$$uibTimepickerCss = !0
}),angular.module("ui.bootstrap.typeahead").run(function () {
    !angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'), angular.$$uibTypeaheadCss = !0
}),function (a) {
    function b(b, c) {
        var d = "ezfb-social-plugin-wrap", f = ["fbPage", "fbComments"], g = function (a) {
            return a.wrap('<span class="' + d + '" style="display: inline-block; width: 0; height: 0; overflow: hidden;">').parent()
        }, h = function (a) {
            return a.wrap('<div class="' + d + '">').parent()
        }, i = function (a) {
            return a.parent().hasClass(d)
        }, j = function (a) {
            return a.parent().after(a).remove(), a
        };
        a.directive(c, ["ezfb", "$q", "$document", function (a, d, e) {
            var k = f.indexOf(c) >= 0, l = c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            return {
                restrict: "EC", require: "?^ezfbXfbml", compile: function (c, d) {
                    return c.removeClass(l), function (c, d, e, f) {
                        function m(a) {
                            return function () {
                                var b;
                                n && a === o && (b = e.onrender, b && c.$eval(b), n = !1, j(d))
                            }
                        }

                        if (!f) {
                            var n = !1, o = 0;
                            a.$rendered().then(function () {
                                d.addClass(l), c.$watch(function () {
                                    var a = [];
                                    return angular.forEach(b, function (b) {
                                        a.push(e[b])
                                    }), a
                                }, function (b) {
                                    var c;
                                    o++, n ? a.XFBML.parse(d.parent()[0], m(o)) : (n = !0, c = k ? h : g, a.XFBML.parse(c(d)[0], m(o)))
                                }, !0)
                            }), d.bind("$destroy", function () {
                                i(d) && j(d)
                            })
                        }
                    }
                }
            }
        }])
    }

    a.provider("ezfb", function () {
        function a(a, b) {
            return angular.isObject(b) ? void angular.extend(a, b) : angular.copy(a)
        }

        function b(a, b, c) {
            return function () {
                return a.apply(b, c)
            }
        }

        var c = {
                COMPLETED_REGISTRATION: "fb_mobile_complete_registration",
                VIEWED_CONTENT: "fb_mobile_content_view",
                SEARCHED: "fb_mobile_search",
                RATED: "fb_mobile_rate",
                COMPLETED_TUTORIAL: "fb_mobile_tutorial_completion",
                ADDED_TO_CART: "fb_mobile_add_to_cart",
                ADDED_TO_WISHLIST: "fb_mobile_add_to_wishlist",
                INITIATED_CHECKOUT: "fb_mobile_initiated_checkout",
                ADDED_PAYMENT_INFO: "fb_mobile_add_payment_info",
                ACHIEVED_LEVEL: "fb_mobile_level_achieved",
                UNLOCKED_ACHIEVEMENT: "fb_mobile_achievement_unlocked",
                SPENT_CREDITS: "fb_mobile_spent_credits"
            }, d = {
                CURRENCY: "fb_currency",
                REGISTRATION_METHOD: "fb_registration_method",
                CONTENT_TYPE: "fb_content_type",
                CONTENT_ID: "fb_content_id",
                SEARCH_STRING: "fb_search_string",
                SUCCESS: "fb_success",
                MAX_RATING_VALUE: "fb_max_rating_value",
                PAYMENT_INFO_AVAILABLE: "fb_payment_info_available",
                NUM_ITEMS: "fb_num_items",
                LEVEL: "fb_level",
                DESCRIPTION: "fb_description"
            }, e = -1, f = {
                api: [1, 2, 3],
                ui: 1,
                getAuthResponse: e,
                getLoginStatus: 0,
                login: 0,
                logout: 0,
                "Event.subscribe": 1,
                "Event.unsubscribe": 1,
                "XFBML.parse": 1,
                "Canvas.Prefetcher.addStaticResource": e,
                "Canvas.Prefetcher.setCollectionMode": e,
                "Canvas.getPageInfo": 0,
                "Canvas.hideFlashElement": e,
                "Canvas.scrollTo": e,
                "Canvas.setAutoGrow": e,
                "Canvas.setDoneLoading": 0,
                "Canvas.setSize": e,
                "Canvas.setUrlHandler": 0,
                "Canvas.showFlashElement": e,
                "Canvas.startTimer": e,
                "Canvas.stopTimer": 0,
                "AppEvents.logEvent": e,
                "AppEvents.logPurchase": e,
                "AppEvents.activateApp": e
            }, g = "en_US", h = {status: !0, cookie: !0, xfbml: !0, version: "v2.6"},
            i = ["$window", "$document", "$timeout", "ezfbAsyncInit", "ezfbLocale", function (a, b, c, d, e) {
                !function (a) {
                    c(function () {
                        var b, c = "facebook-jssdk", d = a.getElementsByTagName("script")[0];
                        a.getElementById(c) || (b = a.createElement("script"), b.id = c, b.async = !0, b.src = "//connect.facebook.net/" + e + "/sdk.js", d.parentNode.insertBefore(b, d))
                    }, 0, !1)
                }(b[0]), a.fbAsyncInit = d
            }], j = i, k = ["$window", "ezfbInitParams", function (a, b) {
                a.FB.init(b)
            }], l = k;
        return {
            setInitParams: function (b) {
                a(h, b)
            },
            getInitParams: function () {
                return a(h)
            },
            setLocale: function (a) {
                g = a
            },
            getLocale: function () {
                return g
            },
            setLoadSDKFunction: function (a) {
                if (!angular.isArray(a) && !angular.isFunction(a)) throw new Error("Init function type error.");
                j = a
            },
            getLoadSDKFunction: function () {
                return j
            },
            setInitFunction: function (a) {
                if (!angular.isArray(a) && !angular.isFunction(a)) throw new Error("Init function type error.");
                l = a
            },
            getInitFunction: function () {
                return l
            },
            $get: ["$window", "$q", "$document", "$parse", "$rootScope", "$injector", "$timeout", function (i, m, n, o, p, q, r) {
                var s, t, u, v, w, x;
                return v = {}, w = m.defer(), (h.appId || l !== k) && w.resolve(), s = m.defer(), t = m.defer(), n[0].getElementById("fb-root") || n.find("body").append('<div id="fb-root"></div>'), x = function () {
                    w.promise.then(function () {
                        if (h.xfbml) {
                            var a = function () {
                                u.$$xfbmlRendered = !0, r(function () {
                                    t.resolve(!0)
                                }), u.Event.unsubscribe("xfbml.render", a)
                            };
                            u.Event.subscribe("xfbml.render", a)
                        } else r(function () {
                            t.resolve(!1)
                        });
                        q.invoke(l, null, {ezfbInitParams: h}), u.$$ready = !0, s.resolve()
                    })
                }, q.invoke(j, null, {ezfbAsyncInit: x, ezfbLocale: g}), u = {
                    $$ready: !1,
                    $$xfbmlRendered: !1,
                    $ready: function (a) {
                        return angular.isFunction(a) && s.promise.then(a), s.promise
                    },
                    $rendered: function (a) {
                        return angular.isFunction(a) && t.promise.then(a), t.promise
                    },
                    init: function (b) {
                        a(h, b), w.resolve()
                    },
                    AppEvents: {EventNames: c, ParameterNames: d}
                }, angular.forEach(f, function (a, c) {
                    var d = o(c);
                    (0, d.assign)(u, function () {
                        var f = b(function (b) {
                            var f, g;
                            if (f = m.defer(), g = function (a) {
                                    var d, e;
                                    for (d = angular.isFunction(b[a]) ? b[a] : angular.noop, e = function () {
                                        var a = Array.prototype.slice.call(arguments);
                                        p.$$phase ? (d.apply(null, a), f.resolve.apply(f, a)) : p.$apply(function () {
                                            d.apply(null, a), f.resolve.apply(f, a)
                                        })
                                    }; b.length <= a;) b.push(null);
                                    var g;
                                    if ("Event.subscribe" === c) g = b[0], angular.isUndefined(v[g]) && (v[g] = []), v[g].push({
                                        original: d,
                                        wrapped: e
                                    }); else if ("Event.unsubscribe" === c && (g = b[0], angular.isArray(v[g]))) {
                                        var h, i, j = v[g].length;
                                        for (h = 0; j > h; h++) if (i = v[g][h], i.original === d) {
                                            e = i.wrapped, v[g].splice(h, 1);
                                            break
                                        }
                                    }
                                    b[a] = e
                                }, a !== e) if (angular.isNumber(a)) g(a); else if (angular.isArray(a)) {
                                var h, j;
                                for (h = 0; h < a.length; h++) if (j = a[h], b.length == j || b.length == j + 1 && angular.isFunction(b[j])) {
                                    g(j);
                                    break
                                }
                            }
                            var k = d(i.FB);
                            if (!k) throw new Error("Facebook API `FB." + c + "` doesn't exist.");
                            return k.apply(i.FB, b), f.promise
                        }, null, [Array.prototype.slice.call(arguments)]);
                        if ("getAuthResponse" === c) {
                            if (angular.isUndefined(i.FB)) throw new Error("`FB` is not ready.");
                            return i.FB.getAuthResponse()
                        }
                        return a !== e ? s.promise.then(f) : void s.promise.then(f)
                    })
                }), u
            }]
        }
    }).directive("ezfbXfbml", ["ezfb", "$parse", "$compile", "$timeout", function (a, b, c, d) {
        return {
            restrict: "EAC", controller: function () {
            }, compile: function (e, f) {
                var g = e.html();
                return function (e, f, h) {
                    var i = !0, j = h.onrender, k = function () {
                        i && (j && e.$eval(j), i = !1)
                    };
                    a.XFBML.parse(f[0], k);
                    var l = b(h.ezfbXfbml).assign;
                    e.$watch(h.ezfbXfbml, function (b) {
                        b && (i = !0, f.html(g), c(f.contents())(e), d(function () {
                            a.XFBML.parse(f[0], k)
                        }), (l || angular.noop)(e, !1))
                    }, !0)
                }
            }
        }
    }]);
    var c = {
        fbLike: ["action", "colorscheme", "href", "kidDirectedSite", "layout", "ref", "share", "showFaces", "width"],
        fbShareButton: ["href", "layout", "width"],
        fbSend: ["colorscheme", "href", "kidDirectedSite", "ref"],
        fbPost: ["href", "width"],
        fbFollow: ["colorscheme", "href", "kidDirectedSite", "layout", "showFaces", "width"],
        fbComments: ["colorscheme", "href", "mobile", "numPosts", "orderBy", "width"],
        fbCommentsCount: ["href"],
        fbActivity: ["action", "appId", "colorscheme", "filter", "header", "height", "linktarget", "maxAge", "recommendations", "ref", "site", "width"],
        fbRecommendations: ["action", "appId", "colorscheme", "header", "height", "linktarget", "maxAge", "ref", "site", "width"],
        fbRecommendationsBar: ["action", "href", "maxAge", "numRecommendations", "readTime", "ref", "side", "site", "trigger"],
        fbLikeBox: ["colorscheme", "forceWall", "header", "height", "href", "showBorder", "showFaces", "stream", "width"],
        fbFacepile: ["action", "appId", "colorscheme", "href", "maxRows", "size", "width"],
        fbPage: ["href", "width", "height", "hideCover", "showFacepile", "showPosts"],
        fbVideo: ["href", "width", "allowfullscreen"],
        fbAdPreview: ["adAccountId", "adgroupId", "creative", "creativeId", "adFormat", "pageType", "targeting", "post"],
        fbSendToMessenger: ["messengerAppId", "pageId", "ref", "color", "size"],
        fbMessengermessageus: ["messengerAppId", "pageId", "color", "size"]
    };
    angular.forEach(c, b)
}(angular.module("ezfb", [])),angular.module("infinite-scroll", []).value("THROTTLE_MILLISECONDS", null).directive("infiniteScroll", ["$rootScope", "$window", "$interval", "THROTTLE_MILLISECONDS", function (a, b, c, d) {
    return {
        scope: {
            infiniteScroll: "&",
            infiniteScrollContainer: "=",
            infiniteScrollDistance: "=",
            infiniteScrollDisabled: "=",
            infiniteScrollUseDocumentBottom: "=",
            infiniteScrollListenForEvent: "@"
        }, link: function (e, f, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
            return z = angular.element(b), u = null, v = null, j = null, k = null, r = !0, y = !1, x = null, i = !1, q = function (a) {
                return a = a[0] || a, isNaN(a.offsetHeight) ? a.document.documentElement.clientHeight : a.offsetHeight
            }, s = function (a) {
                if (a[0].getBoundingClientRect && !a.css("none")) return a[0].getBoundingClientRect().top + t(a)
            }, t = function (a) {
                return a = a[0] || a, isNaN(window.pageYOffset) ? a.document.documentElement.scrollTop : a.ownerDocument.defaultView.pageYOffset
            }, p = function () {
                var b, d, g, h, l;
                return k === z ? (b = q(k) + t(k[0].document.documentElement), g = s(f) + q(f)) : (b = q(k), d = 0, void 0 !== s(k) && (d = s(k)), g = s(f) - d + q(f)), y && (g = q((f[0].ownerDocument || f[0].document).documentElement)), h = g - b, l = h <= q(k) * u + 1, l ? (j = !0, v ? e.$$phase || a.$$phase ? e.infiniteScroll() : e.$apply(e.infiniteScroll) : void 0) : (i && c.cancel(i), j = !1)
            }, w = function (a, b) {
                var d, e, f;
                return f = null, e = 0, d = function () {
                    return e = (new Date).getTime(), c.cancel(f), f = null, a.call()
                }, function () {
                    var g, h;
                    return g = (new Date).getTime(), h = b - (g - e), h <= 0 ? (c.cancel(f), f = null, e = g, a.call()) : f ? void 0 : f = c(d, h, 1)
                }
            }, null != d && (p = w(p, d)), e.$on("$destroy", function () {
                if (k.unbind("scroll", p), null != x && (x(), x = null), i) return c.cancel(i)
            }), n = function (a) {
                return u = parseFloat(a) || 0
            }, e.$watch("infiniteScrollDistance", n), n(e.infiniteScrollDistance), m = function (a) {
                if ((v = !a) && j) return j = !1, p()
            }, e.$watch("infiniteScrollDisabled", m), m(e.infiniteScrollDisabled), o = function (a) {
                return y = a
            }, e.$watch("infiniteScrollUseDocumentBottom", o), o(e.infiniteScrollUseDocumentBottom), h = function (a) {
                if (null != k && k.unbind("scroll", p), k = a, null != a) return k.bind("scroll", p)
            }, h(z), e.infiniteScrollListenForEvent && (x = a.$on(e.infiniteScrollListenForEvent, p)), l = function (a) {
                if (null != a && 0 !== a.length) {
                    if (a.nodeType && 1 === a.nodeType ? a = angular.element(a) : "function" == typeof a.append ? a = angular.element(a[a.length - 1]) : "string" == typeof a && (a = angular.element(document.querySelector(a))), null != a) return h(a);
                    throw new Error("invalid infinite-scroll-container attribute.")
                }
            }, e.$watch("infiniteScrollContainer", l), l(e.infiniteScrollContainer || []), null != g.infiniteScrollParent && h(angular.element(f.parent())), null != g.infiniteScrollImmediateCheck && (r = e.$eval(g.infiniteScrollImmediateCheck)), i = c(function () {
                return r && p(), c.cancel(i)
            })
        }
    }
}]),"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "infinite-scroll"),function (s, g) {
    "use strict";

    function H(g) {
        var l = [];
        return t(l, A).chars(g), l.join("")
    }

    var C, l, D, E, q, A, F, t, B = g.$$minErr("$sanitize");
    g.module("ngSanitize", []).provider("$sanitize", function () {
        function k(a, e) {
            var h, b = {}, c = a.split(",");
            for (h = 0; h < c.length; h++) b[e ? q(c[h]) : c[h]] = !0;
            return b
        }

        function I(a) {
            for (var e = {}, b = 0, c = a.length; b < c; b++) {
                var h = a[b];
                e[h.name] = h.value
            }
            return e
        }

        function G(a) {
            return a.replace(/&/g, "&amp;").replace(J, function (a) {
                var b = a.charCodeAt(0);
                return a = a.charCodeAt(1), "&#" + (1024 * (b - 55296) + (a - 56320) + 65536) + ";"
            }).replace(K, function (a) {
                return "&#" + a.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function u(a) {
            if (a.nodeType === s.Node.ELEMENT_NODE) for (var e = a.attributes, b = 0, c = e.length; b < c; b++) {
                var h = e[b], d = h.name.toLowerCase();
                "xmlns:ns1" !== d && 0 !== d.lastIndexOf("ns1:", 0) || (a.removeAttributeNode(h), b--, c--)
            }
            (e = a.firstChild) && u(e), (e = a.nextSibling) && u(e)
        }

        var v = !1;
        this.$get = ["$$sanitizeUri", function (a) {
            return v && l(w, x), function (e) {
                var b = [];
                return F(e, t(b, function (b, h) {
                    return !/^unsafe:/.test(a(b, h))
                })), b.join("")
            }
        }], this.enableSvg = function (a) {
            return E(a) ? (v = a, this) : v
        }, C = g.bind, l = g.extend, D = g.forEach, E = g.isDefined, q = g.lowercase, A = g.noop, F = function (a, e) {
            null === a || void 0 === a ? a = "" : "string" != typeof a && (a = "" + a), f.innerHTML = a;
            var b = 5;
            do {
                if (0 === b) throw B("uinput");
                b--, s.document.documentMode && u(f), a = f.innerHTML, f.innerHTML = a
            } while (a !== f.innerHTML);
            for (b = f.firstChild; b;) {
                switch (b.nodeType) {
                    case 1:
                        e.start(b.nodeName.toLowerCase(), I(b.attributes));
                        break;
                    case 3:
                        e.chars(b.textContent)
                }
                var c;
                if (!((c = b.firstChild) || (1 == b.nodeType && e.end(b.nodeName.toLowerCase()), c = b.nextSibling))) for (; null == c && (b = b.parentNode) !== f;) c = b.nextSibling, 1 == b.nodeType && e.end(b.nodeName.toLowerCase());
                b = c
            }
            for (; b = f.firstChild;) f.removeChild(b)
        }, t = function (a, e) {
            var b = !1, c = C(a, a.push);
            return {
                start: function (a, d) {
                    a = q(a), !b && z[a] && (b = a), b || !0 !== w[a] || (c("<"), c(a), D(d, function (b, d) {
                        var f = q(d), g = "img" === a && "src" === f || "background" === f;
                        !0 !== m[f] || !0 === n[f] && !e(b, g) || (c(" "), c(d), c('="'), c(G(b)), c('"'))
                    }), c(">"))
                }, end: function (a) {
                    a = q(a), b || !0 !== w[a] || !0 === y[a] || (c("</"), c(a), c(">")), a == b && (b = !1)
                }, chars: function (a) {
                    b || c(G(a))
                }
            }
        };
        var f, J = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, K = /([^\#-~ |!])/g, y = k("area,br,col,hr,img,wbr"),
            d = k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), r = k("rp,rt"), p = l({}, r, d),
            d = l({}, d, k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
            r = l({}, r, k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            x = k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
            z = k("script,style"), w = l({}, y, d, r, p), n = k("background,cite,href,longdesc,src,xlink:href"),
            p = k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            r = k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            m = l({}, n, r, p);
        !function (a) {
            if (!a.document || !a.document.implementation) throw B("noinert");
            a = a.document.implementation.createHTMLDocument("inert");
            var e = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");
            1 === e.length ? f = e[0] : (e = a.createElement("html"), f = a.createElement("body"), e.appendChild(f), a.appendChild(e))
        }(s)
    }), g.module("ngSanitize").filter("linky", ["$sanitize", function (k) {
        var u = g.$$minErr("linky"), v = g.isDefined, s = g.isFunction, t = g.isObject, y = g.isString;
        return function (d, g, p) {
            function x(a) {
                a && m.push(H(a))
            }

            if (null == d || "" === d) return d;
            if (!y(d)) throw u("notstring", d);
            for (var f, a, w = s(p) ? p : t(p) ? function () {
                return p
            } : function () {
                return {}
            }, n = d, m = []; d = n.match(/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i);) f = d[0], d[2] || d[4] || (f = (d[3] ? "http://" : "mailto:") + f), a = d.index, x(n.substr(0, a)), function (a, b) {
                var c, d = w(a);
                m.push("<a ");
                for (c in d) m.push(c + '="' + d[c] + '" ');
                !v(g) || "target" in d || m.push('target="', g, '" '), m.push('href="', a.replace(/"/g, "&quot;"), '">'), x(b), m.push("</a>")
            }(f, d[0].replace(/^mailto:/i, "")), n = n.substring(a + d[0].length);
            return x(n), k(m.join(""))
        }
    }])
}(window, window.angular),function (R, B) {
    "use strict";

    function Da(a, b, c) {
        if (!a) throw Ma("areq", b || "?", c || "required");
        return a
    }

    function Ea(a, b) {
        return a || b ? a ? b ? (Y(a) && (a = a.join(" ")), Y(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function Na(a) {
        var b = {};
        return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
    }

    function Z(a, b, c) {
        var d = "";
        return a = Y(a) ? a : a && G(a) && a.length ? a.split(/\s+/) : [], s(a, function (a, l) {
            a && 0 < a.length && (d += 0 < l ? " " : "", d += c ? b + a : a + b)
        }), d
    }

    function Oa(a) {
        if (a instanceof F) switch (a.length) {
            case 0:
                return a;
            case 1:
                if (1 === a[0].nodeType) return a;
                break;
            default:
                return F(ta(a))
        }
        if (1 === a.nodeType) return F(a)
    }

    function ta(a) {
        if (!a[0]) return a;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (1 == c.nodeType) return c
        }
    }

    function Pa(a, b, c) {
        s(b, function (b) {
            a.addClass(b, c)
        })
    }

    function Qa(a, b, c) {
        s(b, function (b) {
            a.removeClass(b, c)
        })
    }

    function V(a) {
        return function (b, c) {
            c.addClass && (Pa(a, b, c.addClass), c.addClass = null), c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null)
        }
    }

    function oa(a) {
        if (a = a || {}, !a.$$prepared) {
            var b = a.domOperation || P;
            a.domOperation = function () {
                a.$$domOperationFired = !0, b(), b = P
            }, a.$$prepared = !0
        }
        return a
    }

    function ha(a, b) {
        Fa(a, b), Ga(a, b)
    }

    function Fa(a, b) {
        b.from && (a.css(b.from), b.from = null)
    }

    function Ga(a, b) {
        b.to && (a.css(b.to), b.to = null)
    }

    function W(a, b, c) {
        var d = b.options || {};
        c = c.options || {};
        var e = (d.addClass || "") + " " + (c.addClass || ""), l = (d.removeClass || "") + " " + (c.removeClass || "");
        return a = Ra(a.attr("class"), e, l), c.preparationClasses && (d.preparationClasses = $(c.preparationClasses, d.preparationClasses), delete c.preparationClasses), e = d.domOperation !== P ? d.domOperation : null, ua(d, c), e && (d.domOperation = e), d.addClass = a.addClass ? a.addClass : null, d.removeClass = a.removeClass ? a.removeClass : null, b.addClass = d.addClass, b.removeClass = d.removeClass, d
    }

    function Ra(a, b, c) {
        function d(a) {
            G(a) && (a = a.split(" "));
            var b = {};
            return s(a, function (a) {
                a.length && (b[a] = !0)
            }), b
        }

        var e = {};
        a = d(a), b = d(b), s(b, function (a, b) {
            e[b] = 1
        }), c = d(c), s(c, function (a, b) {
            e[b] = 1 === e[b] ? null : -1
        });
        var l = {addClass: "", removeClass: ""};
        return s(e, function (b, c) {
            var d, e;
            1 === b ? (d = "addClass", e = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", e = a[c] || a[c + "-add"]), e && (l[d].length && (l[d] += " "), l[d] += c)
        }), l
    }

    function y(a) {
        return a instanceof F ? a[0] : a
    }

    function Sa(a, b, c) {
        var d = "";
        b && (d = Z(b, "ng-", !0)), c.addClass && (d = $(d, Z(c.addClass, "-add"))), c.removeClass && (d = $(d, Z(c.removeClass, "-remove"))), d.length && (c.preparationClasses = d, a.addClass(d))
    }

    function pa(a, b) {
        var c = b ? "-" + b + "s" : "";
        return la(a, [ma, c]), [ma, c]
    }

    function va(a, b) {
        var c = b ? "paused" : "", d = aa + "PlayState";
        return la(a, [d, c]), [d, c]
    }

    function la(a, b) {
        a.style[b[0]] = b[1]
    }

    function $(a, b) {
        return a ? b ? a + " " + b : a : b
    }

    function Ha(a, b, c) {
        var d = Object.create(null), e = a.getComputedStyle(b) || {};
        return s(c, function (a, b) {
            var c = e[a];
            if (c) {
                var g = c.charAt(0);
                ("-" === g || "+" === g || 0 <= g) && (c = Ta(c)), 0 === c && (c = null), d[b] = c
            }
        }), d
    }

    function Ta(a) {
        var b = 0;
        return a = a.split(/\s*,\s*/), s(a, function (a) {
            "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
        }), b
    }

    function wa(a) {
        return 0 === a || null != a
    }

    function Ia(a, b) {
        var c = S, d = a + "s";
        return b ? c += "Duration" : d += " linear all", [c, d]
    }

    function Ja() {
        var a = Object.create(null);
        return {
            flush: function () {
                a = Object.create(null)
            }, count: function (b) {
                return (b = a[b]) ? b.total : 0
            }, get: function (b) {
                return (b = a[b]) && b.value
            }, put: function (b, c) {
                a[b] ? a[b].total++ : a[b] = {total: 1, value: c}
            }
        }
    }

    function Ka(a, b, c) {
        s(c, function (c) {
            a[c] = xa(a[c]) ? a[c] : b.style.getPropertyValue(c)
        })
    }

    var S, ya, aa, za;
    void 0 === R.ontransitionend && void 0 !== R.onwebkittransitionend ? (S = "WebkitTransition", ya = "webkitTransitionEnd transitionend") : (S = "transition", ya = "transitionend"), void 0 === R.onanimationend && void 0 !== R.onwebkitanimationend ? (aa = "WebkitAnimation", za = "webkitAnimationEnd animationend") : (aa = "animation", za = "animationend");
    var Ba, ua, s, Y, xa, ea, Ca, ba, G, J, F, P, qa = aa + "Delay", Aa = aa + "Duration", ma = S + "Delay",
        La = S + "Duration", Ma = B.$$minErr("ng"), Ua = {
            transitionDuration: La,
            transitionDelay: ma,
            transitionProperty: S + "Property",
            animationDuration: Aa,
            animationDelay: qa,
            animationIterationCount: aa + "IterationCount"
        }, Va = {transitionDuration: La, transitionDelay: ma, animationDuration: Aa, animationDelay: qa};
    B.module("ngAnimate", [], function () {
        P = B.noop, Ba = B.copy, ua = B.extend, F = B.element, s = B.forEach, Y = B.isArray, G = B.isString, ba = B.isObject, J = B.isUndefined, xa = B.isDefined, Ca = B.isFunction, ea = B.isElement
    }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
        return {
            restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function (b, d, e, l, n) {
                var I, g;
                b.$watchCollection(e.ngAnimateSwap || e.for, function (e) {
                    I && a.leave(I), g && (g.$destroy(), g = null), (e || 0 === e) && (g = b.$new(), n(g, function (b) {
                        I = b, a.enter(b, null, d)
                    }))
                })
            }
        }
    }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
        return {
            link: function (b, c, d) {
                function e(a) {
                    c.data("$$ngAnimateChildren", "on" === a || "true" === a)
                }

                var l = d.ngAnimateChildren;
                G(l) && 0 === l.length ? c.data("$$ngAnimateChildren", !0) : (e(a(l)(b)), d.$observe("ngAnimateChildren", e))
            }
        }
    }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
        function b(a) {
            d = d.concat(a), c()
        }

        function c() {
            if (d.length) {
                for (var b = d.shift(), n = 0; n < b.length; n++) b[n]();
                e || a(function () {
                    e || c()
                })
            }
        }

        var d, e;
        return d = b.queue = [], b.waitUntilQuiet = function (b) {
            e && e(), e = a(function () {
                e = null, b(), c()
            })
        }, b
    }]).provider("$$animateQueue", ["$animateProvider", function (a) {
        function b(a) {
            if (!a) return null;
            a = a.split(" ");
            var b = Object.create(null);
            return s(a, function (a) {
                b[a] = !0
            }), b
        }

        function c(a, c) {
            if (a && c) {
                var d = b(c);
                return a.split(" ").some(function (a) {
                    return d[a]
                })
            }
        }

        function d(a, b, c, d) {
            return l[a].some(function (a) {
                return a(b, c, d)
            })
        }

        function e(a, b) {
            var c = 0 < (a.addClass || "").length, d = 0 < (a.removeClass || "").length;
            return b ? c && d : c || d
        }

        var l = this.rules = {skip: [], cancel: [], join: []};
        l.join.push(function (a, b, c) {
            return !b.structural && e(b)
        }), l.skip.push(function (a, b, c) {
            return !b.structural && !e(b)
        }), l.skip.push(function (a, b, c) {
            return "leave" == c.event && b.structural
        }), l.skip.push(function (a, b, c) {
            return c.structural && 2 === c.state && !b.structural
        }), l.cancel.push(function (a, b, c) {
            return c.structural && b.structural
        }), l.cancel.push(function (a, b, c) {
            return 2 === c.state && b.structural
        }), l.cancel.push(function (a, b, d) {
            if (d.structural) return !1;
            a = b.addClass, b = b.removeClass;
            var e = d.addClass;
            return d = d.removeClass, !(J(a) && J(b) || J(e) && J(d)) && (c(a, d) || c(b, e))
        }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, g, l, C, Wa, Q, t, H, T) {
            function O() {
                var a = !1;
                return function (b) {
                    a ? b() : c.$$postDigest(function () {
                        a = !0, b()
                    })
                }
            }

            function x(a, b, c) {
                var f = y(b), d = y(a), N = [];
                return (a = h[c]) && s(a, function (a) {
                    w.call(a.node, f) ? N.push(a.callback) : "leave" === c && w.call(a.node, d) && N.push(a.callback)
                }), N
            }

            function r(a, b, c) {
                var f = ta(b);
                return a.filter(function (a) {
                    return !(a.node === f && (!c || a.callback === c))
                })
            }

            function p(a, h, v) {
                function r(c, f, d, h) {
                    sa(function () {
                        var c = x(T, a, f);
                        c.length ? b(function () {
                            s(c, function (b) {
                                b(a, d, h)
                            }), "close" !== d || a[0].parentNode || ra.off(a)
                        }) : "close" !== d || a[0].parentNode || ra.off(a)
                    }), c.progress(f, d, h)
                }

                function k(b) {
                    var c = a, f = m;
                    f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null), f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null), E(a, m), ha(a, m), m.domOperation(), A.complete(!b)
                }

                var p, T, m = Ba(v);
                (a = Oa(a)) && (p = y(a), T = a.parent());
                var m = oa(m), A = new Q, sa = O();
                if (Y(m.addClass) && (m.addClass = m.addClass.join(" ")), m.addClass && !G(m.addClass) && (m.addClass = null), Y(m.removeClass) && (m.removeClass = m.removeClass.join(" ")), m.removeClass && !G(m.removeClass) && (m.removeClass = null), m.from && !ba(m.from) && (m.from = null), m.to && !ba(m.to) && (m.to = null), !p) return k(), A;
                if (v = [p.className, m.addClass, m.removeClass].join(" "), !Xa(v)) return k(), A;
                var g = 0 <= ["enter", "move", "leave"].indexOf(h), w = l[0].hidden, t = !f || w || N.get(p);
                v = !t && z.get(p) || {};
                var H = !!v.state;
                if (t || H && 1 == v.state || (t = !M(a, T, h)), t) return w && r(A, h, "start"), k(), w && r(A, h, "close"), A;
                if (g && K(a), w = {
                        structural: g,
                        element: a,
                        event: h,
                        addClass: m.addClass,
                        removeClass: m.removeClass,
                        close: k,
                        options: m,
                        runner: A
                    }, H) {
                    if (d("skip", a, w, v)) return 2 === v.state ? (k(), A) : (W(a, v, w), v.runner);
                    if (d("cancel", a, w, v)) if (2 === v.state) v.runner.end(); else {
                        if (!v.structural) return W(a, v, w), v.runner;
                        v.close()
                    } else if (d("join", a, w, v)) {
                        if (2 !== v.state) return Sa(a, g ? h : null, m), h = w.event = v.event, m = W(a, v, w), v.runner;
                        W(a, w, {})
                    }
                } else W(a, w, {});
                if ((H = w.structural) || (H = "animate" === w.event && 0 < Object.keys(w.options.to || {}).length || e(w)), !H) return k(), ka(a), A;
                var C = (v.counter || 0) + 1;
                return w.counter = C, L(a, 1, w), c.$$postDigest(function () {
                    var b = z.get(p), c = !b, b = b || {},
                        f = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));
                    c || b.counter !== C || !f ? (c && (E(a, m), ha(a, m)), (c || g && b.event !== h) && (m.domOperation(), A.end()), f || ka(a)) : (h = !b.structural && e(b, !0) ? "setClass" : b.event, L(a, 2), b = Wa(a, h, b.options), A.setHost(b), r(A, h, "start", {}), b.done(function (b) {
                        k(!b), (b = z.get(p)) && b.counter === C && ka(y(a)), r(A, h, "close", {})
                    }))
                }), A
            }

            function K(a) {
                a = y(a).querySelectorAll("[data-ng-animate]"), s(a, function (a) {
                    var b = parseInt(a.getAttribute("data-ng-animate")), c = z.get(a);
                    if (c) switch (b) {
                        case 2:
                            c.runner.end();
                        case 1:
                            z.remove(a)
                    }
                })
            }

            function ka(a) {
                a = y(a), a.removeAttribute("data-ng-animate"), z.remove(a)
            }

            function k(a, b) {
                return y(a) === y(b)
            }

            function M(a, b, c) {
                c = F(l[0].body);
                var r, f = k(a, c) || "HTML" === a[0].nodeName, d = k(a, g), h = !1, e = N.get(y(a));
                for ((a = F.data(a[0], "$ngAnimatePin")) && (b = a), b = y(b); b && (d || (d = k(b, g)), 1 === b.nodeType);) {
                    if (a = z.get(b) || {}, !h) {
                        var p = N.get(b);
                        if (!0 === p && !1 !== e) {
                            e = !0;
                            break
                        }
                        !1 === p && (e = !1), h = a.structural
                    }
                    if ((J(r) || !0 === r) && (a = F.data(b, "$$ngAnimateChildren"), xa(a) && (r = a)), h && !1 === r) break;
                    if (f || (f = k(b, c)), f && d) break;
                    b = d || !(a = F.data(b, "$ngAnimatePin")) ? b.parentNode : y(a)
                }
                return (!h || r) && !0 !== e && d && f
            }

            function L(a, b, c) {
                c = c || {}, c.state = b, a = y(a), a.setAttribute("data-ng-animate", b), c = (b = z.get(a)) ? ua(b, c) : c, z.put(a, c)
            }

            var z = new C, N = new C, f = null, A = c.$watch(function () {
                return 0 === t.totalPendingRequests
            }, function (a) {
                a && (A(), c.$$postDigest(function () {
                    c.$$postDigest(function () {
                        null === f && (f = !0)
                    })
                }))
            }), h = Object.create(null), sa = a.classNameFilter(), Xa = sa ? function (a) {
                return sa.test(a)
            } : function () {
                return !0
            }, E = V(H), w = R.Node.prototype.contains || function (a) {
                return this === a || !!(16 & this.compareDocumentPosition(a))
            }, ra = {
                on: function (a, b, c) {
                    var f = ta(b);
                    h[a] = h[a] || [], h[a].push({node: f, callback: c}), F(b).on("$destroy", function () {
                        z.get(f) || ra.off(a, b, c)
                    })
                }, off: function (a, b, c) {
                    if (1 !== arguments.length || G(arguments[0])) {
                        var f = h[a];
                        f && (h[a] = 1 === arguments.length ? null : r(f, b, c))
                    } else for (f in b = arguments[0], h) h[f] = r(h[f], b)
                }, pin: function (a, b) {
                    Da(ea(a), "element", "not an element"), Da(ea(b), "parentElement", "not an element"), a.data("$ngAnimatePin", b)
                }, push: function (a, b, c, f) {
                    return c = c || {}, c.domOperation = f, p(a, b, c)
                }, enabled: function (a, b) {
                    var c = arguments.length;
                    if (0 === c) b = !!f; else if (ea(a)) {
                        var d = y(a);
                        1 === c ? b = !N.get(d) : N.put(d, !b)
                    } else b = f = !!a;
                    return b
                }
            };
            return ra
        }]
    }]).provider("$$animation", ["$animateProvider", function (a) {
        var b = this.drivers = [];
        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, e, l, n, I) {
            function g(a) {
                function b(a) {
                    if (a.processed) return a;
                    a.processed = !0;
                    var d = a.domNode, p = d.parentNode;
                    e.put(d, a);
                    for (var K; p;) {
                        if (K = e.get(p)) {
                            K.processed || (K = b(K));
                            break
                        }
                        p = p.parentNode
                    }
                    return (K || c).children.push(a), a
                }

                var d, c = {children: []}, e = new n;
                for (d = 0; d < a.length; d++) {
                    var g = a[d];
                    e.put(g.domNode, a[d] = {domNode: g.domNode, fn: g.fn, children: []})
                }
                for (d = 0; d < a.length; d++) b(a[d]);
                return function (a) {
                    var d, b = [], c = [];
                    for (d = 0; d < a.children.length; d++) c.push(a.children[d]);
                    a = c.length;
                    var e = 0, k = [];
                    for (d = 0; d < c.length; d++) {
                        var g = c[d];
                        0 >= a && (a = e, e = 0, b.push(k), k = []), k.push(g.fn), g.children.forEach(function (a) {
                            e++, c.push(a)
                        }), a--
                    }
                    return k.length && b.push(k), b
                }(c)
            }

            var u = [], C = V(a);
            return function (n, Q, t) {
                function H(a) {
                    a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
                    var b = [];
                    return s(a, function (a) {
                        var c = a.getAttribute("ng-animate-ref");
                        c && c.length && b.push(a)
                    }), b
                }

                function T(a) {
                    var b = [], c = {};
                    s(a, function (a, d) {
                        var h = y(a.element), e = 0 <= ["enter", "move"].indexOf(a.event), h = a.structural ? H(h) : [];
                        if (h.length) {
                            var k = e ? "to" : "from";
                            s(h, function (a) {
                                var b = a.getAttribute("ng-animate-ref");
                                c[b] = c[b] || {}, c[b][k] = {animationID: d, element: F(a)}
                            })
                        } else b.push(a)
                    });
                    var d = {}, e = {};
                    return s(c, function (c, k) {
                        var r = c.from, p = c.to;
                        if (r && p) {
                            var z = a[r.animationID], g = a[p.animationID], A = r.animationID.toString();
                            if (!e[A]) {
                                var n = e[A] = {
                                    structural: !0, beforeStart: function () {
                                        z.beforeStart(), g.beforeStart()
                                    }, close: function () {
                                        z.close(), g.close()
                                    }, classes: O(z.classes, g.classes), from: z, to: g, anchors: []
                                };
                                n.classes.length ? b.push(n) : (b.push(z), b.push(g))
                            }
                            e[A].anchors.push({out: r.element, in: p.element})
                        } else r = r ? r.animationID : p.animationID, p = r.toString(), d[p] || (d[p] = !0, b.push(a[r]))
                    }), b
                }

                function O(a, b) {
                    a = a.split(" "), b = b.split(" ");
                    for (var c = [], d = 0; d < a.length; d++) {
                        var e = a[d];
                        if ("ng-" !== e.substring(0, 3)) for (var r = 0; r < b.length; r++) if (e === b[r]) {
                            c.push(e);
                            break
                        }
                    }
                    return c.join(" ")
                }

                function x(a) {
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = e.get(b[c])(a);
                        if (d) return d
                    }
                }

                function r(a, b) {
                    function c(a) {
                        (a = a.data("$$animationRunner")) && a.setHost(b)
                    }

                    a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
                }

                function p() {
                    var a = n.data("$$animationRunner");
                    !a || "leave" === Q && t.$$domOperationFired || a.end()
                }

                function K(b) {
                    n.off("$destroy", p), n.removeData("$$animationRunner"), C(n, t), ha(n, t), t.domOperation(), L && a.removeClass(n, L), n.removeClass("ng-animate"), k.complete(!b)
                }

                t = oa(t);
                var ka = 0 <= ["enter", "move", "leave"].indexOf(Q), k = new l({
                    end: function () {
                        K()
                    }, cancel: function () {
                        K(!0)
                    }
                });
                if (!b.length) return K(), k;
                n.data("$$animationRunner", k);
                var M = Ea(n.attr("class"), Ea(t.addClass, t.removeClass)), L = t.tempClasses;
                L && (M += " " + L, t.tempClasses = null);
                var z;
                return ka && (z = "ng-" + Q + "-prepare", a.addClass(n, z)), u.push({
                    element: n,
                    classes: M,
                    event: Q,
                    structural: ka,
                    options: t,
                    beforeStart: function () {
                        n.addClass("ng-animate"), L && a.addClass(n, L), z && (a.removeClass(n, z), z = null)
                    },
                    close: K
                }), n.on("$destroy", p), 1 < u.length ? k : (d.$$postDigest(function () {
                    var a = [];
                    s(u, function (b) {
                        b.element.data("$$animationRunner") ? a.push(b) : b.close()
                    }), u.length = 0;
                    var b = T(a), c = [];
                    s(b, function (a) {
                        c.push({
                            domNode: y(a.from ? a.from.element : a.element), fn: function () {
                                a.beforeStart();
                                var b, c = a.close;
                                if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                                    var d = x(a);
                                    d && (b = d.start)
                                }
                                b ? (b = b(), b.done(function (a) {
                                    c(!a)
                                }), r(a, b)) : c()
                            }
                        })
                    }), I(g(c))
                }), k)
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function (a) {
        var b = Ja(), c = Ja();
        this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, l, n, I, g, u, C) {
            function B(a, b) {
                var c = a.parentNode;
                return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++O)) + "-" + a.getAttribute("class") + "-" + b
            }

            function Q(r, p, g, n) {
                var k;
                return 0 < b.count(g) && ((k = c.get(g)) || (p = Z(p, "-stagger"), e.addClass(r, p), k = Ha(a, r, n), k.animationDuration = Math.max(k.animationDuration, 0), k.transitionDuration = Math.max(k.transitionDuration, 0), e.removeClass(r, p), c.put(g, k))), k || {}
            }

            function t(a) {
                x.push(a), u.waitUntilQuiet(function () {
                    b.flush(), c.flush();
                    for (var a = I(), d = 0; d < x.length; d++) x[d](a);
                    x.length = 0
                })
            }

            function H(c, e, g) {
                return e = b.get(g), e || (e = Ha(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1)), b.put(g, e), c = e, g = c.animationDelay, e = c.transitionDelay, c.maxDelay = g && e ? Math.max(g, e) : g || e, c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration), c
            }

            var T = V(e), O = 0, x = [];
            return function (a, c) {
                function d() {
                    k()
                }

                function u() {
                    k(!0)
                }

                function k(b) {
                    if (!(w || F && O)) {
                        w = !0, O = !1, f.$$skipPreparationClasses || e.removeClass(a, ga), e.removeClass(a, ea), va(h, !1), pa(h, !1), s(x, function (a) {
                            h.style[a[0]] = ""
                        }), T(a, f), ha(a, f), Object.keys(A).length && s(A, function (a, b) {
                            a ? h.style.setProperty(b, a) : h.style.removeProperty(b)
                        }), f.onDone && f.onDone(), fa && fa.length && a.off(fa.join(" "), z);
                        var c = a.data("$$animateCss");
                        c && (n.cancel(c[0].timer), a.removeData("$$animateCss")), G && G.complete(!b)
                    }
                }

                function M(a) {
                    q.blockTransition && pa(h, a), q.blockKeyframeAnimation && va(h, !!a)
                }

                function L() {
                    return G = new l({end: d, cancel: u}), t(P), k(), {
                        $$willAnimate: !1, start: function () {
                            return G
                        }, end: d
                    }
                }

                function z(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || Date.now(), b = parseFloat(b.elapsedTime.toFixed(3)), Math.max(a - W, 0) >= R && b >= m && (F = !0, k())
                }

                function N() {
                    function b() {
                        if (!w) {
                            if (M(!1), s(x, function (a) {
                                    h.style[a[0]] = a[1]
                                }), T(a, f), e.addClass(a, ea), q.recalculateTimingStyles) {
                                if (na = h.className + " " + ga, ia = B(h, na), D = H(h, na, ia), ca = D.maxDelay, J = Math.max(ca, 0), 0 === (m = D.maxDuration)) return void k();
                                q.hasTransitions = 0 < D.transitionDuration, q.hasAnimations = 0 < D.animationDuration
                            }
                            if (q.applyAnimationDelay && (ca = "boolean" != typeof f.delay && wa(f.delay) ? parseFloat(f.delay) : ca, J = Math.max(ca, 0), D.animationDelay = ca, da = [qa, ca + "s"], x.push(da), h.style[da[0]] = da[1]), R = 1e3 * J, V = 1e3 * m, f.easing) {
                                var d, g = f.easing;
                                q.hasTransitions && (d = S + "TimingFunction", x.push([d, g]), h.style[d] = g), q.hasAnimations && (d = aa + "TimingFunction", x.push([d, g]), h.style[d] = g)
                            }
                            D.transitionDuration && fa.push(ya), D.animationDuration && fa.push(za), W = Date.now();
                            var p = R + 1.5 * V;
                            d = W + p;
                            var g = a.data("$$animateCss") || [], N = !0;
                            if (g.length) {
                                var l = g[0];
                                (N = d > l.expectedEndTime) ? n.cancel(l.timer) : g.push(k)
                            }
                            N && (p = n(c, p, !1), g[0] = {
                                timer: p,
                                expectedEndTime: d
                            }, g.push(k), a.data("$$animateCss", g)), fa.length && a.on(fa.join(" "), z), f.to && (f.cleanupStyles && Ka(A, h, Object.keys(f.to)), Ga(a, f))
                        }
                    }

                    function c() {
                        var b = a.data("$$animateCss");
                        if (b) {
                            for (var d = 1; d < b.length; d++) b[d]();
                            a.removeData("$$animateCss")
                        }
                    }

                    if (!w) if (h.parentNode) {
                        var d = function (a) {
                                if (F) O && a && (O = !1, k()); else if (O = !a, D.animationDuration) if (a = va(h, O), O) x.push(a); else {
                                    var b = x, c = b.indexOf(a);
                                    0 <= a && b.splice(c, 1)
                                }
                            },
                            g = 0 < ba && (D.transitionDuration && 0 === X.transitionDuration || D.animationDuration && 0 === X.animationDuration) && Math.max(X.animationDelay, X.transitionDelay);
                        g ? n(b, Math.floor(g * ba * 1e3), !1) : b(), v.resume = function () {
                            d(!0)
                        }, v.pause = function () {
                            d(!1)
                        }
                    } else k()
                }

                var f = c || {};
                f.$$prepared || (f = oa(Ba(f)));
                var A = {}, h = y(a);
                if (!h || !h.parentNode || !C.enabled()) return L();
                var w, O, F, G, v, J, R, m, V, W, x = [], I = a.attr("class"), E = Na(f), fa = [];
                if (0 === f.duration || !g.animations && !g.transitions) return L();
                var ja = f.event && Y(f.event) ? f.event.join(" ") : f.event, $ = "", U = "";
                ja && f.structural ? $ = Z(ja, "ng-", !0) : ja && ($ = ja), f.addClass && (U += Z(f.addClass, "-add")), f.removeClass && (U.length && (U += " "), U += Z(f.removeClass, "-remove")), f.applyClassesEarly && U.length && T(a, f);
                var ga = [$, U].join(" ").trim(), na = I + " " + ga, ea = Z(ga, "-active"),
                    I = E.to && 0 < Object.keys(E.to).length;
                if (!(0 < (f.keyframeStyle || "").length || I || ga)) return L();
                var ia, X;
                0 < f.stagger ? (E = parseFloat(f.stagger), X = {
                    transitionDelay: E,
                    animationDelay: E,
                    transitionDuration: 0,
                    animationDuration: 0
                }) : (ia = B(h, na), X = Q(h, ga, ia, Va)), f.$$skipPreparationClasses || e.addClass(a, ga), f.transitionStyle && (E = [S, f.transitionStyle], la(h, E), x.push(E)), 0 <= f.duration && (E = 0 < h.style[S].length, E = Ia(f.duration, E), la(h, E), x.push(E)), f.keyframeStyle && (E = [aa, f.keyframeStyle], la(h, E), x.push(E));
                var ba = X ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ia) : 0;
                (ja = 0 === ba) && !f.skipBlocking && pa(h, 9999);
                var D = H(h, na, ia), ca = D.maxDelay;
                J = Math.max(ca, 0), m = D.maxDuration;
                var q = {};
                if (q.hasTransitions = 0 < D.transitionDuration, q.hasAnimations = 0 < D.animationDuration, q.hasTransitionAll = q.hasTransitions && "all" == D.transitionProperty, q.applyTransitionDuration = I && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions), q.applyAnimationDuration = f.duration && q.hasAnimations, q.applyTransitionDelay = wa(f.delay) && (q.applyTransitionDuration || q.hasTransitions), q.applyAnimationDelay = wa(f.delay) && q.hasAnimations, q.recalculateTimingStyles = 0 < U.length, (q.applyTransitionDuration || q.applyAnimationDuration) && (m = f.duration ? parseFloat(f.duration) : m, q.applyTransitionDuration && (q.hasTransitions = !0, D.transitionDuration = m, E = 0 < h.style[S + "Property"].length, x.push(Ia(m, E))), q.applyAnimationDuration && (q.hasAnimations = !0, D.animationDuration = m, x.push([Aa, m + "s"]))), 0 === m && !q.recalculateTimingStyles) return L();
                if (null != f.delay) {
                    var da;
                    "boolean" != typeof f.delay && (da = parseFloat(f.delay), J = Math.max(da, 0)), q.applyTransitionDelay && x.push([ma, da + "s"]), q.applyAnimationDelay && x.push([qa, da + "s"])
                }
                return null == f.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ja), R = 1e3 * J, V = 1e3 * m, f.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < X.animationDelay && 0 === X.animationDuration), f.from && (f.cleanupStyles && Ka(A, h, Object.keys(f.from)), Fa(a, f)), q.blockTransition || q.blockKeyframeAnimation ? M(m) : f.skipBlocking || pa(h, !1), {
                    $$willAnimate: !0,
                    end: d,
                    start: function () {
                        if (!w) return v = {end: d, cancel: u, resume: null, pause: null}, G = new l(v), t(N), G
                    }
                }
            }
        }]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateCssDriver"), this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, l, n, I) {
            function g(a) {
                return a.replace(/\bng-\S+\b/g, "")
            }

            function u(a, b) {
                return G(a) && (a = a.split(" ")), G(b) && (b = b.split(" ")), a.filter(function (a) {
                    return -1 === b.indexOf(a)
                }).join(" ")
            }

            function C(c, e, n) {
                function l(a) {
                    var b = {}, c = y(a).getBoundingClientRect();
                    return s(["width", "height", "top", "left"], function (a) {
                        var d = c[a];
                        switch (a) {
                            case"top":
                                d += t.scrollTop;
                                break;
                            case"left":
                                d += t.scrollLeft
                        }
                        b[a] = Math.floor(d) + "px"
                    }), b
                }

                function p() {
                    var c = g(n.attr("class") || ""), d = u(c, k), c = u(k, c), d = a(C, {
                        to: l(n),
                        addClass: "ng-anchor-in " + d,
                        removeClass: "ng-anchor-out " + c,
                        delay: !0
                    });
                    return d.$$willAnimate ? d : null
                }

                function I() {
                    C.remove(), e.removeClass("ng-animate-shim"), n.removeClass("ng-animate-shim")
                }

                var C = F(y(e).cloneNode(!0)), k = g(C.attr("class") || "");
                e.addClass("ng-animate-shim"), n.addClass("ng-animate-shim"), C.addClass("ng-anchor"), H.append(C);
                var M;
                if (!(c = function () {
                        var c = a(C, {addClass: "ng-anchor-out", delay: !0, from: l(e)});
                        return c.$$willAnimate ? c : null
                    }()) && !(M = p())) return I();
                var L = c || M;
                return {
                    start: function () {
                        function a() {
                            c && c.end()
                        }

                        var b, c = L.start();
                        return c.done(function () {
                            if (c = null, !M && (M = p())) return c = M.start(), c.done(function () {
                                c = null, I(), b.complete()
                            }), c;
                            I(), b.complete()
                        }), b = new d({end: a, cancel: a})
                    }
                }
            }

            function B(a, b, c, e) {
                var g = Q(a), n = Q(b), l = [];
                if (s(e, function (a) {
                        (a = C(c, a.out, a.in)) && l.push(a)
                    }), g || n || 0 !== l.length) return {
                    start: function () {
                        function a() {
                            s(b, function (a) {
                                a.end()
                            })
                        }

                        var b = [];
                        g && b.push(g.start()), n && b.push(n.start()), s(l, function (a) {
                            b.push(a.start())
                        });
                        var c = new d({end: a, cancel: a});
                        return d.all(b, function (a) {
                            c.complete(a)
                        }), c
                    }
                }
            }

            function Q(c) {
                var d = c.element, e = c.options || {};
                return c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation)), e.preparationClasses && (e.event = $(e.event, e.preparationClasses)), c = a(d, e), c.$$willAnimate ? c : null
            }

            if (!l.animations && !l.transitions) return P;
            var t = I[0].body;
            c = y(e);
            var H = F(c.parentNode && 11 === c.parentNode.nodeType || t.contains(c) ? c : t);
            return V(n), function (a) {
                return a.from && a.to ? B(a.from, a.to, a.classes, a.anchors) : Q(a)
            }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function (a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
            function e(c) {
                c = Y(c) ? c : c.split(" ");
                for (var d = [], e = {}, l = 0; l < c.length; l++) {
                    var s = c[l], B = a.$$registeredAnimations[s];
                    B && !e[s] && (d.push(b.get(B)), e[s] = !0)
                }
                return d
            }

            var l = V(d);
            return function (a, b, d, u) {
                function C() {
                    u.domOperation(), l(a, u)
                }

                function B(a, b, d, e, f) {
                    switch (d) {
                        case"animate":
                            b = [b, e.from, e.to, f];
                            break;
                        case"setClass":
                            b = [b, F, G, f];
                            break;
                        case"addClass":
                            b = [b, F, f];
                            break;
                        case"removeClass":
                            b = [b, G, f];
                            break;
                        default:
                            b = [b, f]
                    }
                    if (b.push(e), a = a.apply(a, b)) if (Ca(a.start) && (a = a.start()), a instanceof c) a.done(f); else if (Ca(a)) return a;
                    return P
                }

                function y(a, b, d, e, f) {
                    var g = [];
                    return s(e, function (e) {
                        var k = e[f];
                        k && g.push(function () {
                            var e, f, g = !1, h = function (a) {
                                g || (g = !0, (f || P)(a), e.complete(!a))
                            };
                            return e = new c({
                                end: function () {
                                    h()
                                }, cancel: function () {
                                    h(!0)
                                }
                            }), f = B(k, a, b, d, function (a) {
                                h(!1 === a)
                            }), e
                        })
                    }), g
                }

                function t(a, b, d, e, f) {
                    var g = y(a, b, d, e, f);
                    if (0 === g.length) {
                        var h, k;
                        "beforeSetClass" === f ? (h = y(a, "removeClass", d, e, "beforeRemoveClass"), k = y(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = y(a, "removeClass", d, e, "removeClass"), k = y(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), k && (g = g.concat(k))
                    }
                    if (0 !== g.length) return function (a) {
                        var b = [];
                        return g.length && s(g, function (a) {
                            b.push(a())
                        }), b.length ? c.all(b, a) : a(), function (a) {
                            s(b, function (b) {
                                a ? b.cancel() : b.end()
                            })
                        }
                    }
                }

                var H = !1;
                3 === arguments.length && ba(d) && (u = d, d = null), u = oa(u), d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));
                var r, p, F = u.addClass, G = u.removeClass, x = e(d);
                if (x.length) {
                    var K, J;
                    "leave" == b ? (J = "leave", K = "afterLeave") : (J = "before" + b.charAt(0).toUpperCase() + b.substr(1), K = b), "enter" !== b && "move" !== b && (r = t(a, b, u, x, J)), p = t(a, b, u, x, K)
                }
                if (r || p) {
                    var k;
                    return {
                        $$willAnimate: !0, end: function () {
                            return k ? k.end() : (H = !0, C(), ha(a, u), k = new c, k.complete(!0)), k
                        }, start: function () {
                            function b(c) {
                                H = !0, C(), ha(a, u), k.complete(c)
                            }

                            if (k) return k;
                            k = new c;
                            var d, e = [];
                            return r && e.push(function (a) {
                                d = r(a)
                            }), e.length ? e.push(function (a) {
                                C(), a(!0)
                            }) : C(), p && e.push(function (a) {
                                d = p(a)
                            }), k.setHost({
                                end: function () {
                                    H || ((d || P)(void 0), b(void 0))
                                }, cancel: function () {
                                    H || ((d || P)(!0), b(!0))
                                }
                            }), c.chain(e, b), k
                        }
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
        a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
            function d(c) {
                return a(c.element, c.event, c.classes, c.options)
            }

            return function (a) {
                if (!a.from || !a.to) return d(a);
                var b = d(a.from), n = d(a.to);
                return b || n ? {
                    start: function () {
                        function a() {
                            return function () {
                                s(d, function (a) {
                                    a.end()
                                })
                            }
                        }

                        var d = [];
                        b && d.push(b.start()), n && d.push(n.start()), c.all(d, function (a) {
                            e.complete(a)
                        });
                        var e = new c({end: a(), cancel: a()});
                        return e
                    }
                } : void 0
            }
        }]
    }])
}(window, window.angular);
var app = angular.module("myApp", ["ui.router", "ngResource", "ui.bootstrap", "infinite-scroll", "ngSanitize", "ezfb"]);
app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "ezfbProvider", function ($stateProvider, $urlRouterProvider, $locationProvider, ezfbProvider) {
    $urlRouterProvider.otherwise("/"), $stateProvider.state("home", {
        url: "/",
        templateUrl: "views/home.html"
    }).state("category", {url: "/:type", templateUrl: "views/category.view.html"}).state("quiz", {
        url: "/quiz",
        templateUrl: "views/quiz.view.html"
    }).state("list", {url: "/list", templateUrl: "views/list.view.html"}).state("quiziq", {
        url: "/quiziq",
        templateUrl: "views/quiziq.view.html"
    }).state("listview", {
        url: "/list/:listkey",
        templateUrl: "views/list.details.html"
    }).state("quizview", {
        url: "/quiz/:quizkey",
        templateUrl: "views/quiz.details.html"
    }).state("quiziqview", {
        url: "/quiz/iq/:quiziqkey",
        templateUrl: "views/quiziq.details.html"
    }), $locationProvider.html5Mode({
        enabled: !0,
        requireBase: !1
    }), ezfbProvider.setInitParams({appId: "1241557305921100", version: "v2.8"}), ezfbProvider.setLocale("en_EN")
}]), app.run(["$rootScope", "$location", "$window", function ($rootScope, $location, $window) {
    $window.ga("create", "UA-51655784-5", "auto"), $rootScope.$on("$stateChangeSuccess", function (event) {
        $window.ga("send", "pageview", $location.url())
    })
}]), angular.element(document).ready(function () {
    angular.bootstrap(document, ["myApp"])
}), function () {
    app.service("urlSer", [function () {
        this.converturl = function (id, title) {
            title = angular.lowercase(title), title = title.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"), title = title.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"), title = title.replace(/ì|í|ị|ỉ|ĩ/g, "i"), title = title.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"), title = title.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"), title = title.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"), title = title.replace(/đ/g, "d"), title = title.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|\-|,|\.|\:|\'|\"|\&|\#|\[|\]|~/g, "");
            var i = 0, titleLength = title.length;
            for (i; i < titleLength; i++) title = title.replace(" ", "-");
            return id + "-" + title + ".html"
        }
    }]), app.filter("slice", function () {
        return function (arr, start) {
            return arr.slice(start)
        }
    })
}(), function () {
    app.controller("homeController", function ($scope, $http, $state, $filter) {
        $scope.post = {}, $scope.post.after = 2, $scope.post.busy = !1, $scope.post.items = [], $http.get("http://en.topquiz.co/view/loadmore/1").success(function (response) {
            "" == response.error ? $scope.post.items = [] : $scope.post.items = response.data
        }), $scope.nextPage = function () {
            $scope.post.busy || ($scope.post.busy = !0, $http.get("http://en.topquiz.co/view/loadmore/" + $scope.post.after).success(function (datas) {
                if ("" == datas.error || "" == datas.data) ; else for (var _items = datas.data, i = 0; i < _items.length; i++) $scope.post.items.push(_items[i])
            }).finally(function () {
                $scope.post.busy = !1
            }), $scope.post.after += 1)
        }
    })
}(), function () {
    app.controller("listDetailController", function ($scope, $http, $state, $filter, $stateParams) {
        var id = $stateParams.listkey;
        $scope.listDetail = [], $http.get("http://en.topquiz.co/list/getData/One/" + id).success(function (response) {
            "" !== response.error ? $scope.listDetail = response : $scope.listDetail = [], $scope.urlFB = window.location.href, $scope.urlFB = $scope.urlFB.split("?")[0], $scope.shareFB = function () {
                FB.ui({
                    method: "feed",
                    name: $scope.listDetail[0].title,
                    picture: $scope.listDetail[0].thumb.large,
                    link: $scope.urlFB,
                    description: $scope.listDetail[0].description
                }, function (response) {
                })
            }
        }), $scope.recommend = [], $http.get("http://en.topquiz.co/view/hot").success(function (response) {
            "" !== response.error ? $scope.recommend = response : $scope.recommend = []
        }), $scope.suggest = [], $http.get("http://en.topquiz.co/view/get/3").success(function (response) {
            "" == response.error ? $scope.suggest = [] : $scope.suggest = response
        })
    })
}(), function () {
    app.controller("quizDetailController", function ($scope, $http, $state, $filter, $stateParams, ezfb) {
        function indexOfMax(arr) {
            if (0 === arr.length) return -1;
            for (var max = arr[0], maxIndex = 0, i = 1; i < arr.length; i++) arr[i] > max && (maxIndex = i, max = arr[i]);
            return maxIndex
        }

        requestAds();
        var id = $stateParams.quizkey;
        $scope.id_quiz = id, $scope.quizDetail = [], $scope.multipleQues = [], $scope.multipleResult = [], $scope.indexStt = 0, $scope.maxSize = 2, $scope.currentPage = 1, $scope.entrylimit = 1, $scope.filteredItems = "", $scope.totalItems = "", $http.get("http://en.topquiz.co/quiz/" + id).success(function (response) {
            "" !== response.error ? $scope.quizDetail = response : $scope.quizDetail = [], $scope.multipleQues = $scope.quizDetail[0].details, $scope.multipleResult = $scope.quizDetail[0].results, $scope.urlFB = window.location.href, document.title = $scope.quizDetail[0].title, $scope.titleShare = $scope.quizDetail[0].title, $scope.desShare = $scope.quizDetail[0].description, $scope.thumbShare = $scope.quizDetail[0].thumb.large, $scope.shareFB = function () {
                console.log("test 1");
                var no = 1, callback = function (res) {
                    console.log("FB.ui callback execution", no++), console.log("response:", res)
                };
                ezfb.ui({
                    method: "feed",
                    name: $scope.titleShare,
                    picture: $scope.thumbShare,
                    link: $scope.urlFB + "?ref=share",
                    description: $scope.desShare
                }, callback).then(callback), console.log("test 2")
            }, $scope.check_video = 1, $scope.choingay = function () {
                $("show-first").css("display", "none"), $("show-seccond").css("display", "block"), $(".show-second").css("opacity", "1"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && ($(".header-title").css("display", "none"), $scope.check_video = 2)
            }, $scope.filteredItems = $scope.multipleQues.length, $scope.totalItems = $scope.multipleQues.length, $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo
            };
            var selected = [];
            $scope.chooseAns = function (index, answer) {
                if ($("#adContainer div").css("display", "none"), selected.push($scope.multipleQues[$scope.indexStt].answers[index].point), $scope.indexStt < $scope.totalItems - 1) {
                    if ($scope.currentPage++, $scope.indexStt++, $(".question-number>.pagination>li[data-lp=1]:not(.prev,.next)").addClass("active"), 4 == $scope.currentPage) {
                        channel_id = "3290166774";
                        url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-5477307030870200&description_url=http://en.topquiz.co/views/template/Find-Cheap-Used-Cars.html&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000", $("#adContainer").css("display", "block"), $("#xemcautiep").css("display", "block"), requestAds();
                        var randomAds = Math.floor(5 * Math.random());
                        1 == randomAds && (document.getElementById("adContainer").style.opacity = 0, setTimeout(function () {
                            document.getElementById("adContainer").style.opacity = 1
                        }, 3e3))
                    }
                } else {
                    for (var totalpoint = [], i = 0; i < $scope.multipleResult.length; i++) totalpoint.push(0);
                    selected.forEach(function (point) {
                        for (var i = 0; i < totalpoint.length; i++) point[i].value || "" != point[i].value ? totalpoint[i] = totalpoint[i] + parseInt(point[i].value) : (point[i].value = 0, totalpoint[i] = totalpoint[i] + parseInt(point[i].value))
                    });
                    var ind = indexOfMax(totalpoint);
                    $scope.desShare = $scope.des = $scope.multipleResult[ind].description, $scope.thumbShare = $scope.files = $scope.multipleResult[ind].image, $scope.title = $scope.multipleResult[ind].caption, $scope.titleShare = $scope.quizDetail[0].title + " - " + $scope.title,
                        $(".show-second").css("display", "none"), $(".show-result").css("display", "block"), $(".show-result").css("opacity", "1"), setTimeout(function () {
                        document.getElementById("xemketqua").style.display = "block"
                    }, 200), setTimeout(function () {
                        document.getElementById("adContainer").style.display = "block", channel_id = "2963511176";
                        url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-5477307030870200&description_url=http://en.topquiz.co/views/template/Find-Cheap-Used-Cars.html&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000", requestAds()
                    }, 500), $scope.close = function () {
                        document.getElementById("sharefacebook").style.display = "none"
                    }, $scope.shareFB = function () {
                        document.getElementById("sharefacebook").style.display = "none";
                        var no = 1, callback = function (res) {
                            console.log("FB.ui callback execution", no++), console.log("response:", res)
                        };
                        ezfb.ui({
                            method: "feed",
                            name: $scope.titleShare,
                            picture: $scope.thumbShare,
                            link: $scope.urlFB + "?ref=share",
                            description: $scope.desShare
                        }, callback).then(callback)
                    }
                }
            }
        }), $scope.recommend = [], $http.get("http://en.topquiz.co/view/loadmore/1").success(function (response) {
            "" !== response.error ? $scope.recommend = response.data : $scope.recommend = []
        }), $scope.suggest = [], $http.get("http://en.topquiz.co/view/recommend/q/2").success(function (response) {
            "" == response.error ? $scope.suggest = [] : ($scope.suggest = response, document.getElementById("linkchoi").innerHTML = $scope.suggest[2].pid + "-" + $scope.suggest[2].type)
        })
    })
}(), function () {
    app.directive("itemRecommend", function () {
        return {
            restrict: "AE",
            templateUrl: "views/recommend.view.html",
            scope: {item: "=", index: "="},
            controller: ["$scope", "$location", function ($scope, $location) {
            }]
        }
    })
}(), function () {
    app.directive("itemSuggest", function () {
        return {
            restrict: "AE",
            templateUrl: "views/suggest.view.html",
            scope: {item: "=", index: "="},
            controller: ["$scope", "$location", function ($scope, $location) {
            }]
        }
    })
}(), function () {
    app.controller("listCatController", function ($scope, $http) {
        $scope.list = [], $http.get("http://en.topquiz.co/list/api/10").success(function (response) {
            "" !== response.error ? $scope.list = response : $scope.list = []
        }), $scope.recommend = [], $http.get("http://en.topquiz.co/view/hot").success(function (response) {
            "" !== response.error ? $scope.recommend = response : $scope.recommend = []
        })
    })
}(), function () {
    app.controller("quizCatController", function ($scope, $http) {
        $scope.quiz = [], $http.get("http://en.topquiz.co/quizz/api/10").success(function (response) {
            "" !== response.error ? $scope.quiz = response : $scope.quiz = []
        }), $scope.recommend = [], $http.get("http://en.topquiz.co/view/hot").success(function (response) {
            "" !== response.error ? $scope.recommend = response : $scope.recommend = []
        })
    })
}(), function () {
    app.controller("quiziqCatController", function ($scope, $http) {
        $scope.quiz = [], $http.get("http://en.topquiz.co/quiz/api/10").success(function (response) {
            "" !== response.error ? $scope.quiz = response : $scope.quiz = []
        }), $scope.recommend = [], $http.get("http://en.topquiz.co/view/hot").success(function (response) {
            "" !== response.error ? $scope.recommend = response : $scope.recommend = []
        })
    })
}(), function () {
    app.controller("quiziqDetailController", function ($scope, $http, $state, $filter, $stateParams, $timeout, ezfb) {
        function indexOfMax(arr) {
            if (0 === arr.length) return -1;
            for (var min = arr[0], minIndex = 0, i = 1; i < arr.length; i++) arr[i] < min && (minIndex = i, min = arr[i]);
            return minIndex
        }

        requestAds();
        var id = $stateParams.quiziqkey;
        $scope.id_quiz = id, $scope.quiziqDetail = [], $scope.multipleQues = [], $scope.multipleResult = [], $scope.indexStt = 0, $scope.maxSize = 2, $scope.currentPage = 1, $scope.entrylimit = 1, $scope.filteredItems = "", $scope.totalItems = "", $scope.corrects = 0, $scope.check_play = 0;
        var score = 0, tylescore = 0, check_click = !1;
        $http.get("http://en.topquiz.co/quiz/iq/" + id).success(function (response) {
            "" !== response.error ? ($scope.quiziqDetail = response, console.log($scope.quiziqDetail)) : $scope.quiziqDetail = [], $scope.multipleQues = $scope.quiziqDetail[0].details, $scope.multipleResult = $scope.quiziqDetail[0].results, $scope.urlFB = window.location.href, document.title = $scope.quiziqDetail[0].title, $scope.titleShare = $scope.quiziqDetail[0].title, $scope.desShare = $scope.quiziqDetail[0].description, $scope.thumbShare = $scope.quiziqDetail[0].thumb.large, $scope.shareFB = function () {
                var no = 1, callback = function (res) {
                    console.log("FB.ui callback execution", no++), console.log("response:", res)
                };
                ezfb.ui({
                    method: "feed",
                    name: $scope.titleShare,
                    picture: $scope.thumbShare,
                    link: $scope.urlFB + "?ref=share",
                    description: $scope.desShare
                }, callback).then(callback)
            }, $scope.choingay = function () {
                $("show-first").css("display", "none"), $("show-seccond").css("display", "block"), $(".show-second").css("opacity", "1"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".header-title").css("display", "none"), $scope.data = {progress: 100}, function progress() {
                    if ($scope.data.progress > 0) {
                        var id = $timeout(function () {
                            $scope.data.progress -= 1, progress()
                        }, 11 * $scope.multipleQues[$scope.indexStt].time, 1);
                        $scope.filteredItems = $scope.multipleQues.length, $scope.totalItems = $scope.multipleQues.length, $scope.setPage = function (pageNo) {
                            $scope.currentPage = pageNo
                        }, $scope.chooseAns = function (index, answer) {
                            $timeout.cancel(id), $scope.data = {progress: .1}, $("#adContainer div").css("display", "none"), $scope.indexStt <= $scope.totalItems - 1 && (0 == check_click && (1 == $scope.multipleQues[$scope.indexStt].answers[index].bool && (score += 1), $timeout(function () {
                                for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) 1 == $scope.multipleQues[$scope.indexStt].answers[i].bool && ($(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").addClass("true"), $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").addClass("true"))
                            }, 200), $timeout(function () {
                                for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) 1 == $scope.multipleQues[$scope.indexStt].answers[i].bool && ($(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").removeClass("true"), $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").removeClass("true"))
                            }, 1300), $timeout(function () {
                                if ($scope.currentPage++, $scope.indexStt++, $(".question-number>.pagination>li[data-lp=1]:not(.prev,.next)").addClass("active"), check_click = !1, 4 == $scope.indexStt) {
                                    channel_id = "3290166774";
                                    url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-5477307030870200&description_url=http://en.topquiz.co/views/template/Find-Cheap-Used-Cars.html&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000", $("#adContainer").css("display", "block"), $("#xemcautiep").css("display", "block"), requestAds();
                                    1 == Math.floor(5 * Math.random()) && (document.getElementById("adContainer").style.opacity = 0, setTimeout(function () {
                                        document.getElementById("adContainer").style.opacity = 1
                                    }, 3e3))
                                }
                                if ($scope.indexStt == $scope.totalItems) {
                                    $(".show-second").css("display", "none"), $(".show-result").css("display", "block"), $(".show-result").css("opacity", "1"), tylescore = score / $scope.totalItems * 100;
                                    for (var a = [], n = 0; n < $scope.multipleResult.length; n++) a[n] = Math.abs($scope.multipleResult[n].percent - tylescore);
                                    var ind = indexOfMax(a);
                                    $scope.desShare = $scope.des = $scope.multipleResult[ind].description, $scope.thumbShare = $scope.files = $scope.multipleResult[ind].image, $scope.title = score + "/" + $scope.totalItems + " " + $scope.multipleResult[ind].caption, $scope.titleShare = $scope.quiziqDetail[0].title + " - " + $scope.title, setTimeout(function () {
                                        document.getElementById("xemketqua").style.display = "block"
                                    }, 200), setTimeout(function () {
                                        document.getElementById("adContainer").style.display = "block", channel_id = "2963511176";
                                        url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-5477307030870200&description_url=http://en.topquiz.co/views/template/Find-Cheap-Used-Cars.html&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000", requestAds()
                                    }, 500), $scope.close = function () {
                                        document.getElementById("sharefacebook").style.display = "none"
                                    }, $scope.shareFB = function () {
                                        document.getElementById("sharefacebook").style.display = "none";
                                        var no = 1, callback = function (res) {
                                            console.log("FB.ui callback execution", no++), console.log("response:", res)
                                        };
                                        ezfb.ui({
                                            method: "feed",
                                            name: $scope.titleShare,
                                            picture: $scope.thumbShare,
                                            link: $scope.urlFB + "?ref=share",
                                            description: $scope.desShare
                                        }, callback).then(callback)
                                    }
                                } else $scope.data = {progress: 100}, progress()
                            }, 1500)), check_click = !0)
                        }
                    } else $timeout.cancel(id), $timeout(function () {
                        for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) 1 == $scope.multipleQues[$scope.indexStt].answers[i].bool && ($(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").addClass("true"), $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").addClass("true"))
                    }, 200), $timeout(function () {
                        for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) 1 == $scope.multipleQues[$scope.indexStt].answers[i].bool && ($(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").removeClass("true"), $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").removeClass("true"))
                    }, 1300), $timeout(function () {
                        if ($scope.currentPage++, $scope.indexStt++, $(".question-number>.pagination>li[data-lp=1]:not(.prev,.next)").addClass("active"), check_click = !1, 4 == $scope.indexStt) {
                            channel_id = "3290166774";
                            url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-5477307030870200&description_url=http://en.topquiz.co/views/template/Find-Cheap-Used-Cars.html&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000", $("#adContainer").css("display", "block"), $("#xemcautiep").css("display", "block"), requestAds();
                            1 == Math.floor(5 * Math.random()) && (document.getElementById("adContainer").style.opacity = 0, setTimeout(function () {
                                document.getElementById("adContainer").style.opacity = 1
                            }, 3e3))
                        }
                        if ($scope.indexStt == $scope.totalItems) {
                            $(".show-second").css("display", "none"), $(".show-result").css("display", "block"), $(".show-result").css("opacity", "1"), tylescore = score / $scope.totalItems * 100;
                            for (var a = [], n = 0; n < $scope.multipleResult.length; n++) a[n] = Math.abs($scope.multipleResult[n].percent - tylescore);
                            var ind = indexOfMax(a);
                            $scope.desShare = $scope.des = $scope.multipleResult[ind].description, $scope.thumbShare = $scope.files = $scope.multipleResult[ind].image, $scope.title = score + "/" + $scope.totalItems + " " + $scope.multipleResult[ind].caption, $scope.titleShare = $scope.quiziqDetail[0].title + " - " + $scope.title, setTimeout(function () {
                                document.getElementById("xemketqua").style.display = "block"
                            }, 200), setTimeout(function () {
                                document.getElementById("adContainer").style.display = "block", channel_id = "2963511176";
                                url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-5477307030870200&description_url=http://en.topquiz.co/views/template/Find-Cheap-Used-Cars.html&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000", requestAds()
                            }, 500), $scope.shareFB = function () {
                                document.getElementById("sharefacebook").style.display = "none";
                                var no = 1, callback = function (res) {
                                    console.log("FB.ui callback execution", no++), console.log("response:", res)
                                };
                                ezfb.ui({
                                    method: "feed",
                                    name: $scope.titleShare,
                                    picture: $scope.thumbShare,
                                    link: $scope.urlFB + "?ref=share",
                                    description: $scope.desShare
                                }, callback).then(callback)
                            }
                        } else $scope.data = {progress: 100}, progress()
                    }, 1500)
                }()
            }
        }), $scope.recommend = [], $http.get("http://en.topquiz.co/view/loadmore/1").success(function (response) {
            "" !== response.error ? $scope.recommend = response.data : $scope.recommend = []
        }), $scope.suggest = [], $http.get("http://en.topquiz.co/view/recommend/q/2").success(function (response) {
            "" == response.error ? $scope.suggest = [] : ($scope.suggest = response, document.getElementById("linkchoi").innerHTML = $scope.suggest[2].pid + "-" + $scope.suggest[2].type)
        })
    })
}(), function () {
    app.directive("ngEnter", function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                13 === event.which && (scope.$apply(function () {
                    scope.$eval(attrs.ngEnter)
                }), event.preventDefault())
            })
        }
    }), app.controller("headerCtrl", function ($scope, $http, $state, $filter, $stateParams, $window) {
        $scope.post = [], $scope.checkClick = !0, $scope.search = function () {
            $scope.checkClick = !0;
            var key = $scope.keysearch;
            "" == key || $http.get("http://en.topquiz.co/quiz/search/" + key).success(function (response) {
                "" == response.error || 0 == response.items.length ? $http.get("http://en.topquiz.co/view/hot").success(function (response) {
                    "" !== response.error ? $scope.post = response : $scope.post = []
                }) : $scope.post = response.items
            }), angular.element($window).on("click", function (e) {
                $scope.checkClick = !1
            })
        }
    })
}();
//# sourceMappingURL=app_client.min.js.map