var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
        new MutationObserver((o) => {
          for (const r of o) if (r.type === "childList") for (const l of r.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function x(o) {
          const r = {};
          return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
        }
        function n(o) {
          if (o.ep) return;
          o.ep = true;
          const r = x(o);
          fetch(o.href, r);
        }
      })();
      function X() {
      }
      function He(t, e) {
        for (const x in e) t[x] = e[x];
        return t;
      }
      function Hn(t) {
        return t();
      }
      function $x() {
        return /* @__PURE__ */ Object.create(null);
      }
      function a0(t) {
        t.forEach(Hn);
      }
      function Ix(t) {
        return typeof t == "function";
      }
      function F0(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let Me;
      function et(t, e) {
        return t === e ? true : (Me || (Me = document.createElement("a")), Me.href = e, t === Me.href);
      }
      function Ro(t) {
        return Object.keys(t).length === 0;
      }
      function Un(t, ...e) {
        if (t == null) {
          for (const n of e) n(void 0);
          return X;
        }
        const x = t.subscribe(...e);
        return x.unsubscribe ? () => x.unsubscribe() : x;
      }
      function z0(t, e, x) {
        t.$$.on_destroy.push(Un(e, x));
      }
      function i(t, e) {
        t.appendChild(e);
      }
      function T(t, e, x) {
        t.insertBefore(e, x || null);
      }
      function P(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function O0(t, e) {
        for (let x = 0; x < t.length; x += 1) t[x] && t[x].d(e);
      }
      function d(t) {
        return document.createElement(t);
      }
      function j(t) {
        return document.createTextNode(t);
      }
      function g() {
        return j(" ");
      }
      function I0() {
        return j("");
      }
      function H(t, e, x, n) {
        return t.addEventListener(e, x, n), () => t.removeEventListener(e, x, n);
      }
      function V0(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function Oo(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function u(t, e, x) {
        x == null ? t.removeAttribute(e) : t.getAttribute(e) !== x && t.setAttribute(e, x);
      }
      function Ho(t) {
        return Array.from(t.childNodes);
      }
      function z(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function t0(t, e) {
        t.value = e ?? "";
      }
      function o0(t, e, x) {
        t.classList.toggle(e, !!x);
      }
      function Uo(t, e, { bubbles: x = false, cancelable: n = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: x,
          cancelable: n
        });
      }
      function Ue(t, e) {
        return new t(e);
      }
      let ke;
      function De(t) {
        ke = t;
      }
      function $e() {
        if (!ke) throw new Error("Function called outside component initialization");
        return ke;
      }
      function y0(t) {
        $e().$$.on_mount.push(t);
      }
      function zo(t) {
        $e().$$.after_update.push(t);
      }
      function zn(t) {
        $e().$$.on_destroy.push(t);
      }
      function Go() {
        const t = $e();
        return (e, x, { cancelable: n = false } = {}) => {
          const o = t.$$.callbacks[e];
          if (o) {
            const r = Uo(e, x, {
              cancelable: n
            });
            return o.slice().forEach((l) => {
              l.call(t, r);
            }), !r.defaultPrevented;
          }
          return true;
        };
      }
      function mx(t, e) {
        const x = t.$$.callbacks[e.type];
        x && x.slice().forEach((n) => n.call(this, e));
      }
      const ce = [], ze = [];
      let Ee = [];
      const xt = [], Gn = Promise.resolve();
      let hx = false;
      function Vn() {
        hx || (hx = true, Gn.then(Yn));
      }
      function Kn() {
        return Vn(), Gn;
      }
      function vx(t) {
        Ee.push(t);
      }
      const cx = /* @__PURE__ */ new Set();
      let le = 0;
      function Yn() {
        if (le !== 0) return;
        const t = ke;
        do {
          try {
            for (; le < ce.length; ) {
              const e = ce[le];
              le++, De(e), Vo(e.$$);
            }
          } catch (e) {
            throw ce.length = 0, le = 0, e;
          }
          for (De(null), ce.length = 0, le = 0; ze.length; ) ze.pop()();
          for (let e = 0; e < Ee.length; e += 1) {
            const x = Ee[e];
            cx.has(x) || (cx.add(x), x());
          }
          Ee.length = 0;
        } while (ce.length);
        for (; xt.length; ) xt.pop()();
        hx = false, cx.clear(), De(t);
      }
      function Vo(t) {
        if (t.fragment !== null) {
          t.update(), a0(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(vx);
        }
      }
      function Ko(t) {
        const e = [], x = [];
        Ee.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : x.push(n)), x.forEach((n) => n()), Ee = e;
      }
      const qe = /* @__PURE__ */ new Set();
      let X0;
      function ex() {
        X0 = {
          r: 0,
          c: [],
          p: X0
        };
      }
      function xx() {
        X0.r || a0(X0.c), X0 = X0.p;
      }
      function d0(t, e) {
        t && t.i && (qe.delete(t), t.i(e));
      }
      function C0(t, e, x, n) {
        if (t && t.o) {
          if (qe.has(t)) return;
          qe.add(t), X0.c.push(() => {
            qe.delete(t), n && (x && t.d(1), n());
          }), t.o(e);
        } else n && n();
      }
      function A0(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function Ge(t, e) {
        const x = {}, n = {}, o = {
          $$scope: 1
        };
        let r = t.length;
        for (; r--; ) {
          const l = t[r], s = e[r];
          if (s) {
            for (const a in l) a in s || (n[a] = 1);
            for (const a in s) o[a] || (x[a] = s[a], o[a] = 1);
            t[r] = s;
          } else for (const a in l) o[a] = 1;
        }
        for (const l in n) l in x || (x[l] = void 0);
        return x;
      }
      function Ve(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function w0(t) {
        t && t.c();
      }
      function k0(t, e, x) {
        const { fragment: n, after_update: o } = t.$$;
        n && n.m(e, x), vx(() => {
          const r = t.$$.on_mount.map(Hn).filter(Ix);
          t.$$.on_destroy ? t.$$.on_destroy.push(...r) : a0(r), t.$$.on_mount = [];
        }), o.forEach(vx);
      }
      function _0(t, e) {
        const x = t.$$;
        x.fragment !== null && (Ko(x.after_update), a0(x.on_destroy), x.fragment && x.fragment.d(e), x.on_destroy = x.fragment = null, x.ctx = []);
      }
      function Yo(t, e) {
        t.$$.dirty[0] === -1 && (ce.push(t), Vn(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function p0(t, e, x, n, o, r, l = null, s = [
        -1
      ]) {
        const a = ke;
        De(t);
        const c = t.$$ = {
          fragment: null,
          ctx: [],
          props: r,
          update: X,
          not_equal: o,
          bound: $x(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (a ? a.$$.context : [])),
          callbacks: $x(),
          dirty: s,
          skip_bound: false,
          root: e.target || a.$$.root
        };
        l && l(c.root);
        let E = false;
        if (c.ctx = x ? x(t, e.props || {}, (f, A, ...C) => {
          const F = C.length ? C[0] : A;
          return c.ctx && o(c.ctx[f], c.ctx[f] = F) && (!c.skip_bound && c.bound[f] && c.bound[f](F), E && Yo(t, f)), A;
        }) : [], c.update(), E = true, a0(c.before_update), c.fragment = n ? n(c.ctx) : false, e.target) {
          if (e.hydrate) {
            const f = Ho(e.target);
            c.fragment && c.fragment.l(f), f.forEach(P);
          } else c.fragment && c.fragment.c();
          e.intro && d0(t.$$.fragment), k0(t, e.target, e.anchor), Yn();
        }
        De(a);
      }
      class m0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          _0(this, 1), this.$destroy = X;
        }
        $on(e, x) {
          if (!Ix(x)) return X;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(x), () => {
            const o = n.indexOf(x);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !Ro(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const Wo = "4";
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(Wo);
      const se = [];
      function Wn(t, e) {
        return {
          subscribe: Y0(t, e).subscribe
        };
      }
      function Y0(t, e = X) {
        let x;
        const n = /* @__PURE__ */ new Set();
        function o(s) {
          if (F0(t, s) && (t = s, x)) {
            const a = !se.length;
            for (const c of n) c[1](), se.push(c, t);
            if (a) {
              for (let c = 0; c < se.length; c += 2) se[c][0](se[c + 1]);
              se.length = 0;
            }
          }
        }
        function r(s) {
          o(s(t));
        }
        function l(s, a = X) {
          const c = [
            s,
            a
          ];
          return n.add(c), n.size === 1 && (x = e(o, r) || X), s(t), () => {
            n.delete(c), n.size === 0 && x && (x(), x = null);
          };
        }
        return {
          set: o,
          update: r,
          subscribe: l
        };
      }
      function Qn(t, e, x) {
        const n = !Array.isArray(t), o = n ? [
          t
        ] : t;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const r = e.length < 2;
        return Wn(x, (l, s) => {
          let a = false;
          const c = [];
          let E = 0, f = X;
          const A = () => {
            if (E) return;
            f();
            const F = e(n ? c[0] : c, l, s);
            r ? l(F) : f = Ix(F) ? F : X;
          }, C = o.map((F, B) => Un(F, (p) => {
            c[B] = p, E &= ~(1 << B), a && A();
          }, () => {
            E |= 1 << B;
          }));
          return a = true, A(), function() {
            a0(C), f(), a = false;
          };
        });
      }
      function Qo(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var x, n, o, r, l = [], s = "", a = t.split("/");
        for (a[0] || a.shift(); o = a.shift(); ) x = o[0], x === "*" ? (l.push("wild"), s += "/(.*)") : x === ":" ? (n = o.indexOf("?", 1), r = o.indexOf(".", 1), l.push(o.substring(1, ~n ? n : ~r ? r : o.length)), s += ~n && !~r ? "(?:/([^/]+?))?" : "/([^/]+?)", ~r && (s += (~n ? "?" : "") + "\\" + o.substring(r))) : s += "/" + o;
        return {
          keys: l,
          pattern: new RegExp("^" + s + "/?$", "i")
        };
      }
      function Jo(t) {
        let e, x, n;
        const o = [
          t[2]
        ];
        var r = t[0];
        function l(s, a) {
          let c = {};
          for (let E = 0; E < o.length; E += 1) c = He(c, o[E]);
          return a !== void 0 && a & 4 && (c = He(c, Ge(o, [
            Ve(s[2])
          ]))), {
            props: c
          };
        }
        return r && (e = Ue(r, l(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && w0(e.$$.fragment), x = I0();
          },
          m(s, a) {
            e && k0(e, s, a), T(s, x, a), n = true;
          },
          p(s, a) {
            if (a & 1 && r !== (r = s[0])) {
              if (e) {
                ex();
                const c = e;
                C0(c.$$.fragment, 1, 0, () => {
                  _0(c, 1);
                }), xx();
              }
              r ? (e = Ue(r, l(s, a)), e.$on("routeEvent", s[7]), w0(e.$$.fragment), d0(e.$$.fragment, 1), k0(e, x.parentNode, x)) : e = null;
            } else if (r) {
              const c = a & 4 ? Ge(o, [
                Ve(s[2])
              ]) : {};
              e.$set(c);
            }
          },
          i(s) {
            n || (e && d0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && C0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && P(x), e && _0(e, s);
          }
        };
      }
      function Xo(t) {
        let e, x, n;
        const o = [
          {
            params: t[1]
          },
          t[2]
        ];
        var r = t[0];
        function l(s, a) {
          let c = {};
          for (let E = 0; E < o.length; E += 1) c = He(c, o[E]);
          return a !== void 0 && a & 6 && (c = He(c, Ge(o, [
            a & 2 && {
              params: s[1]
            },
            a & 4 && Ve(s[2])
          ]))), {
            props: c
          };
        }
        return r && (e = Ue(r, l(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && w0(e.$$.fragment), x = I0();
          },
          m(s, a) {
            e && k0(e, s, a), T(s, x, a), n = true;
          },
          p(s, a) {
            if (a & 1 && r !== (r = s[0])) {
              if (e) {
                ex();
                const c = e;
                C0(c.$$.fragment, 1, 0, () => {
                  _0(c, 1);
                }), xx();
              }
              r ? (e = Ue(r, l(s, a)), e.$on("routeEvent", s[6]), w0(e.$$.fragment), d0(e.$$.fragment, 1), k0(e, x.parentNode, x)) : e = null;
            } else if (r) {
              const c = a & 6 ? Ge(o, [
                a & 2 && {
                  params: s[1]
                },
                a & 4 && Ve(s[2])
              ]) : {};
              e.$set(c);
            }
          },
          i(s) {
            n || (e && d0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && C0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && P(x), e && _0(e, s);
          }
        };
      }
      function Zo(t) {
        let e, x, n, o;
        const r = [
          Xo,
          Jo
        ], l = [];
        function s(a, c) {
          return a[1] ? 0 : 1;
        }
        return e = s(t), x = l[e] = r[e](t), {
          c() {
            x.c(), n = I0();
          },
          m(a, c) {
            l[e].m(a, c), T(a, n, c), o = true;
          },
          p(a, [c]) {
            let E = e;
            e = s(a), e === E ? l[e].p(a, c) : (ex(), C0(l[E], 1, 1, () => {
              l[E] = null;
            }), xx(), x = l[e], x ? x.p(a, c) : (x = l[e] = r[e](a), x.c()), d0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (d0(x), o = true);
          },
          o(a) {
            C0(x), o = false;
          },
          d(a) {
            a && P(n), l[e].d(a);
          }
        };
      }
      function tt() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const x = e.indexOf("?");
        let n = "";
        return x > -1 && (n = e.substr(x + 1), e = e.substr(0, x)), {
          location: e,
          querystring: n
        };
      }
      const Lx = Wn(null, function(e) {
        e(tt());
        const x = () => {
          e(tt());
        };
        return window.addEventListener("hashchange", x, false), function() {
          window.removeEventListener("hashchange", x, false);
        };
      }), $o = Qn(Lx, (t) => t.location);
      Qn(Lx, (t) => t.querystring);
      const nt = Y0(void 0);
      async function E0(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await Kn(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function er(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function xr(t, e, x) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: r = false } = e;
        class l {
          constructor(D, v) {
            if (!v || typeof v != "function" && (typeof v != "object" || v._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!D || typeof D == "string" && (D.length < 1 || D.charAt(0) != "/" && D.charAt(0) != "*") || typeof D == "object" && !(D instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: _, keys: w } = Qo(D);
            this.path = D, typeof v == "object" && v._sveltesparouter === true ? (this.component = v.component, this.conditions = v.conditions || [], this.userData = v.userData, this.props = v.props || {}) : (this.component = () => Promise.resolve(v), this.conditions = [], this.props = {}), this._pattern = _, this._keys = w;
          }
          match(D) {
            if (o) {
              if (typeof o == "string") if (D.startsWith(o)) D = D.substr(o.length) || "/";
              else return null;
              else if (o instanceof RegExp) {
                const y = D.match(o);
                if (y && y[0]) D = D.substr(y[0].length) || "/";
                else return null;
              }
            }
            const v = this._pattern.exec(D);
            if (v === null) return null;
            if (this._keys === false) return v;
            const _ = {};
            let w = 0;
            for (; w < this._keys.length; ) {
              try {
                _[this._keys[w]] = decodeURIComponent(v[w + 1] || "") || null;
              } catch {
                _[this._keys[w]] = null;
              }
              w++;
            }
            return _;
          }
          async checkConditions(D) {
            for (let v = 0; v < this.conditions.length; v++) if (!await this.conditions[v](D)) return false;
            return true;
          }
        }
        const s = [];
        n instanceof Map ? n.forEach((m, D) => {
          s.push(new l(D, m));
        }) : Object.keys(n).forEach((m) => {
          s.push(new l(m, n[m]));
        });
        let a = null, c = null, E = {};
        const f = Go();
        async function A(m, D) {
          await Kn(), f(m, D);
        }
        let C = null, F = null;
        r && (F = (m) => {
          m.state && (m.state.__svelte_spa_router_scrollY || m.state.__svelte_spa_router_scrollX) ? C = m.state : C = null;
        }, window.addEventListener("popstate", F), zo(() => {
          er(C);
        }));
        let B = null, p = null;
        const h = Lx.subscribe(async (m) => {
          B = m;
          let D = 0;
          for (; D < s.length; ) {
            const v = s[D].match(m.location);
            if (!v) {
              D++;
              continue;
            }
            const _ = {
              route: s[D].path,
              location: m.location,
              querystring: m.querystring,
              userData: s[D].userData,
              params: v && typeof v == "object" && Object.keys(v).length ? v : null
            };
            if (!await s[D].checkConditions(_)) {
              x(0, a = null), p = null, A("conditionsFailed", _);
              return;
            }
            A("routeLoading", Object.assign({}, _));
            const w = s[D].component;
            if (p != w) {
              w.loading ? (x(0, a = w.loading), p = w, x(1, c = w.loadingParams), x(2, E = {}), A("routeLoaded", Object.assign({}, _, {
                component: a,
                name: a.name,
                params: c
              }))) : (x(0, a = null), p = null);
              const y = await w();
              if (m != B) return;
              x(0, a = y && y.default || y), p = w;
            }
            v && typeof v == "object" && Object.keys(v).length ? x(1, c = v) : x(1, c = null), x(2, E = s[D].props), A("routeLoaded", Object.assign({}, _, {
              component: a,
              name: a.name,
              params: c
            })).then(() => {
              nt.set(c);
            });
            return;
          }
          x(0, a = null), p = null, nt.set(void 0);
        });
        zn(() => {
          h(), F && window.removeEventListener("popstate", F);
        });
        function k(m) {
          mx.call(this, t, m);
        }
        function b(m) {
          mx.call(this, t, m);
        }
        return t.$$set = (m) => {
          "routes" in m && x(3, n = m.routes), "prefix" in m && x(4, o = m.prefix), "restoreScrollState" in m && x(5, r = m.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = r ? "manual" : "auto");
        }, [
          a,
          c,
          E,
          n,
          o,
          r,
          k,
          b
        ];
      }
      class tr extends m0 {
        constructor(e) {
          super(), p0(this, e, xr, Zo, F0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const nr = "/assets/peachsafe_core_wasm_bg-C8H6g175.wasm", or = async (t = {}, e) => {
        let x;
        if (e.startsWith("data:")) {
          const n = e.replace(/^data:.*?base64,/, "");
          let o;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const r = atob(n);
            o = new Uint8Array(r.length);
            for (let l = 0; l < r.length; l++) o[l] = r.charCodeAt(l);
          } else throw new Error("Cannot decode base64-encoded data URL");
          x = await WebAssembly.instantiate(o, t);
        } else {
          const n = await fetch(e), o = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) x = await WebAssembly.instantiateStreaming(n, t);
          else {
            const r = await n.arrayBuffer();
            x = await WebAssembly.instantiate(r, t);
          }
        }
        return x.instance.exports;
      };
      function rr(t, e) {
        const x = f0.aesGcmDecrypt(t, e);
        if (x[2]) throw v0(x[1]);
        return v0(x[0]);
      }
      function lr(t, e) {
        const x = f0.aesGcmEncrypt(t, e);
        if (x[2]) throw v0(x[1]);
        return v0(x[0]);
      }
      function sr(t, e) {
        const x = Zn(t, f0.__wbindgen_malloc, f0.__wbindgen_realloc), n = Ke, o = f0.argon2idDerive(x, n, e);
        if (o[2]) throw v0(o[1]);
        return v0(o[0]);
      }
      function ar(t) {
        const e = f0.deriveAlertKey(t);
        if (e[2]) throw v0(e[1]);
        return v0(e[0]);
      }
      function ir(t, e) {
        const x = f0.deriveEncounterToken(t, e);
        if (x[2]) throw v0(x[1]);
        return v0(x[0]);
      }
      function cr(t) {
        const e = f0.ed25519PubkeyFromSeed(t);
        if (e[2]) throw v0(e[1]);
        return v0(e[0]);
      }
      function Er(t, e) {
        const x = f0.ed25519Sign(t, e);
        if (x[2]) throw v0(x[1]);
        return v0(x[0]);
      }
      function ur() {
        const t = f0.generateEphemeralKeypair();
        if (t[2]) throw v0(t[1]);
        return v0(t[0]);
      }
      function fr(t) {
        return f0.generateRandomBytes(t);
      }
      function Jn(t) {
        return f0.sha256(t);
      }
      function dr(t, e, x) {
        const n = Zn(t, f0.__wbindgen_malloc, f0.__wbindgen_realloc), o = Ke, r = f0.solvePoW(n, o, e, x);
        if (r[2]) throw v0(r[1]);
        return v0(r[0]);
      }
      function Br(t) {
        return typeof t == "function";
      }
      function Cr(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function Ar(t) {
        return typeof t == "string";
      }
      function Fr(t) {
        return t === void 0;
      }
      function Dr(t, e) {
        throw new Error(Xn(t, e));
      }
      function pr() {
        return ge(function(t, e, x) {
          return t.call(e, x);
        }, arguments);
      }
      function mr(t) {
        return t.crypto;
      }
      function hr() {
        return ge(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function vr(t) {
        return t.length;
      }
      function kr(t) {
        return t.msCrypto;
      }
      function _r() {
        return new Object();
      }
      function br(t) {
        return new Uint8Array(t >>> 0);
      }
      function wr(t) {
        return t.node;
      }
      function gr(t) {
        return t.process;
      }
      function yr(t, e, x) {
        Uint8Array.prototype.set.call(jx(t, e), x);
      }
      function Pr() {
        return ge(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function Tr() {
        return ge(function() {
          return module.require;
        }, arguments);
      }
      function Sr() {
        return ge(function(t, e, x) {
          return Reflect.set(t, e, x);
        }, arguments);
      }
      function Mr(t, e, x) {
        t.set(jx(e, x));
      }
      function Ir() {
        const t = typeof global > "u" ? null : global;
        return tx(t) ? 0 : we(t);
      }
      function Lr() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return tx(t) ? 0 : we(t);
      }
      function jr() {
        const t = typeof self > "u" ? null : self;
        return tx(t) ? 0 : we(t);
      }
      function Nr() {
        const t = typeof window > "u" ? null : window;
        return tx(t) ? 0 : we(t);
      }
      function qr(t, e, x) {
        return t.subarray(e >>> 0, x >>> 0);
      }
      function Rr(t) {
        return t.versions;
      }
      function Or(t) {
        return t;
      }
      function Hr(t, e) {
        return jx(t, e);
      }
      function Ur(t, e) {
        return Xn(t, e);
      }
      function zr() {
        const t = f0.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function we(t) {
        const e = f0.__externref_table_alloc();
        return f0.__wbindgen_externrefs.set(e, t), e;
      }
      function jx(t, e) {
        return t = t >>> 0, pe().subarray(t / 1, t / 1 + e);
      }
      function Xn(t, e) {
        return t = t >>> 0, Vr(t, e);
      }
      let Ie = null;
      function pe() {
        return (Ie === null || Ie.byteLength === 0) && (Ie = new Uint8Array(f0.memory.buffer)), Ie;
      }
      function ge(t, e) {
        try {
          return t.apply(this, e);
        } catch (x) {
          const n = we(x);
          f0.__wbindgen_exn_store(n);
        }
      }
      function tx(t) {
        return t == null;
      }
      function Zn(t, e, x) {
        if (x === void 0) {
          const s = me.encode(t), a = e(s.length, 1) >>> 0;
          return pe().subarray(a, a + s.length).set(s), Ke = s.length, a;
        }
        let n = t.length, o = e(n, 1) >>> 0;
        const r = pe();
        let l = 0;
        for (; l < n; l++) {
          const s = t.charCodeAt(l);
          if (s > 127) break;
          r[o + l] = s;
        }
        if (l !== n) {
          l !== 0 && (t = t.slice(l)), o = x(o, n, n = l + t.length * 3, 1) >>> 0;
          const s = pe().subarray(o + l, o + n), a = me.encodeInto(t, s);
          l += a.written, o = x(o, n, l, 1) >>> 0;
        }
        return Ke = l, o;
      }
      function v0(t) {
        const e = f0.__wbindgen_externrefs.get(t);
        return f0.__externref_table_dealloc(t), e;
      }
      let Re = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Re.decode();
      const Gr = 2146435072;
      let Ex = 0;
      function Vr(t, e) {
        return Ex += e, Ex >= Gr && (Re = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Re.decode(), Ex = e), Re.decode(pe().subarray(t, t + e));
      }
      const me = new TextEncoder();
      "encodeInto" in me || (me.encodeInto = function(t, e) {
        const x = me.encode(t);
        return e.set(x), {
          read: t.length,
          written: x.length
        };
      });
      let Ke = 0, f0;
      function Kr(t) {
        f0 = t;
      }
      URL = globalThis.URL;
      const Yr = await or({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: mr,
          __wbg_process_44c7a14e11e9f69e: gr,
          __wbg_versions_276b2795b1c6a219: Rr,
          __wbg_node_84ea875411254db1: wr,
          __wbg_require_b4edbdcf3e2a1ef0: Tr,
          __wbg_call_a24592a6f349a97e: pr,
          __wbg_msCrypto_bd5a034af96bcba6: kr,
          __wbg_randomFillSync_6c25eac9869eb53c: Pr,
          __wbg_getRandomValues_c44a50d8cfdaebeb: hr,
          __wbg_new_aa8d0fa9762c29bd: _r,
          __wbg_length_9f1775224cf1d815: vr,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: yr,
          __wbg_new_with_length_8c854e41ea4dae9b: br,
          __wbg_subarray_f8ca46a25b1f5e0d: qr,
          __wbg_set_3d484eb794afec82: Mr,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: Lr,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: jr,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: Ir,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: Nr,
          __wbg_set_022bee52d0b05b19: Sr,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: Dr,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: Cr,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: Ar,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: Br,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: Fr,
          __wbindgen_init_externref_table: zr,
          __wbindgen_cast_0000000000000001: Or,
          __wbindgen_cast_0000000000000002: Hr,
          __wbindgen_cast_0000000000000003: Ur
        }
      }, nr), { memory: Wr, aesGcmDecrypt: Qr, aesGcmEncrypt: Jr, argon2idDerive: Xr, deriveAlertKey: Zr, deriveEncounterToken: $r, ed25519PubkeyFromSeed: el, ed25519Sign: xl, ed25519Verify: tl, generateEphemeralKeypair: nl, generateRandomBytes: ol, generateUserKeypair: rl, main: ll, serializePublicKey: sl, sha256: al, solvePoW: il, __wbindgen_exn_store: cl, __externref_table_alloc: El, __wbindgen_externrefs: ul, __externref_table_dealloc: fl, __wbindgen_malloc: dl, __wbindgen_realloc: Bl, __wbindgen_free: Cl, __wbindgen_start: $n } = Yr, Al = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: El,
        __externref_table_dealloc: fl,
        __wbindgen_exn_store: cl,
        __wbindgen_externrefs: ul,
        __wbindgen_free: Cl,
        __wbindgen_malloc: dl,
        __wbindgen_realloc: Bl,
        __wbindgen_start: $n,
        aesGcmDecrypt: Qr,
        aesGcmEncrypt: Jr,
        argon2idDerive: Xr,
        deriveAlertKey: Zr,
        deriveEncounterToken: $r,
        ed25519PubkeyFromSeed: el,
        ed25519Sign: xl,
        ed25519Verify: tl,
        generateEphemeralKeypair: nl,
        generateRandomBytes: ol,
        generateUserKeypair: rl,
        main: ll,
        memory: Wr,
        serializePublicKey: sl,
        sha256: al,
        solvePoW: il
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Kr(Al);
      $n();
      let kx = false;
      async function Fl() {
        kx || (kx = true);
      }
      function M0() {
        if (!kx) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function b0(t) {
        const e = new Uint8Array(t.length / 2);
        for (let x = 0; x < t.length; x += 2) e[x / 2] = parseInt(t.slice(x, x + 2), 16);
        return e;
      }
      function e0(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function ye(t) {
        return M0(), fr(t);
      }
      async function G0(t, e) {
        return M0(), await new Promise((x) => setTimeout(x, 0)), sr(t, e);
      }
      function Pe(t, e) {
        return M0(), lr(t, e);
      }
      function nx(t, e) {
        return M0(), rr(t, e);
      }
      function Dl() {
        return M0(), ur();
      }
      function pl(t, e) {
        return M0(), ir(t, e);
      }
      function eo(t) {
        return M0(), cr(t);
      }
      function xo(t, e) {
        return M0(), Er(t, e);
      }
      function ml(t) {
        return M0(), Jn(t);
      }
      function to(t) {
        return M0(), ar(t);
      }
      function hl(t, e, x) {
        return M0(), dr(t, e, x);
      }
      function $0(t) {
        let e = "";
        for (let x = 0; x < t.length; x++) e += String.fromCharCode(t[x]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function no(t) {
        const x = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(x), (n) => n.charCodeAt(0));
      }
      function vl(t, e, x, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${t}|${e}|${x}|${o}`;
      }
      function ot(t) {
        const e = t.split("|");
        if (!e.length || e[0] !== "2") return null;
        if (e.length < 4 || e.length > 5) throw new Error("Invalid group QR payload");
        const x = e[1], n = parseInt(e[2], 10), o = e[3], r = e.length === 5 && e[4] ? decodeURIComponent(e[4]) : null;
        if (isNaN(n) || x.length !== 64 || o.length !== 64) throw new Error("Invalid group QR payload");
        return {
          groupTokenHex: x,
          timestamp: n,
          hostContactIdHex: o,
          name: r
        };
      }
      function Z0(t, e, x) {
        M0();
        const n = new Uint8Array(68);
        return n.set(t, 0), n.set(e, 32), n[64] = x >>> 24 & 255, n[65] = x >>> 16 & 255, n[66] = x >>> 8 & 255, n[67] = x & 255, Jn(n);
      }
      const ee = Y0("ok");
      let oo = "ok";
      ee.subscribe((t) => {
        oo = t;
      });
      let Ye = null;
      function kl() {
        clearTimeout(Ye), ee.set("retrying");
      }
      function _l() {
        oo !== "ok" && (clearTimeout(Ye), ee.set("reconnected"), Ye = setTimeout(() => ee.set("ok"), 3e3));
      }
      function rt() {
        clearTimeout(Ye), ee.set("down");
      }
      function lt(t) {
        let e;
        function x(r, l) {
          if (r[0] === "retrying") return gl;
          if (r[0] === "down") return wl;
          if (r[0] === "reconnected") return bl;
        }
        let n = x(t), o = n && n(t);
        return {
          c() {
            e = d("div"), o && o.c(), u(e, "class", "banner svelte-1fvcw45"), u(e, "role", "status"), u(e, "aria-live", "polite"), o0(e, "retrying", t[0] === "retrying"), o0(e, "down", t[0] === "down"), o0(e, "reconnected", t[0] === "reconnected");
          },
          m(r, l) {
            T(r, e, l), o && o.m(e, null);
          },
          p(r, l) {
            n !== (n = x(r)) && (o && o.d(1), o = n && n(r), o && (o.c(), o.m(e, null))), l & 1 && o0(e, "retrying", r[0] === "retrying"), l & 1 && o0(e, "down", r[0] === "down"), l & 1 && o0(e, "reconnected", r[0] === "reconnected");
          },
          d(r) {
            r && P(e), o && o.d();
          }
        };
      }
      function bl(t) {
        let e;
        return {
          c() {
            e = j("Reconnected");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function wl(t) {
        let e;
        return {
          c() {
            e = j("Server unavailable. Please try again later.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function gl(t) {
        let e;
        return {
          c() {
            e = j("Server unreachable \u2014 retrying\u2026");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function yl(t) {
        let e, x = t[0] !== "ok" && lt(t);
        return {
          c() {
            x && x.c(), e = I0();
          },
          m(n, o) {
            x && x.m(n, o), T(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? x ? x.p(n, o) : (x = lt(n), x.c(), x.m(e.parentNode, e)) : x && (x.d(1), x = null);
          },
          i: X,
          o: X,
          d(n) {
            n && P(e), x && x.d(n);
          }
        };
      }
      function Pl(t, e, x) {
        let n;
        return z0(t, ee, (o) => x(0, n = o)), [
          n
        ];
      }
      class Tl extends m0 {
        constructor(e) {
          super(), p0(this, e, Pl, yl, F0, {});
        }
      }
      const D0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", ux = [
        1e3,
        2e3,
        4e3
      ], st = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function W0(t, e = {}) {
        const x = {
          ...e,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            ...e.headers ?? {}
          }
        };
        for (let n = 0; ; n++) {
          try {
            const o = await fetch(t, x);
            if (!st.has(o.status) || n >= ux.length) return st.has(o.status) ? rt() : _l(), o;
          } catch (o) {
            if (n >= ux.length) throw rt(), o;
          }
          kl(), await new Promise((o) => setTimeout(o, ux[n]));
        }
      }
      let xe = null, Nx = null, qx = null;
      const ne = Y0(null), ox = Y0(null), _e = Y0(null);
      function P0() {
        return xe !== null;
      }
      function Rx(t) {
        Nx = t;
      }
      function te() {
        return Nx;
      }
      function ro(t) {
        qx = t;
      }
      function Sl() {
        return qx;
      }
      function Ml() {
        xe = null, Nx = null, qx = null, ne.set(null), ox.set(null), _e.set(null);
      }
      async function Il() {
        try {
          const t = await Ll();
          ne.set(t.verified);
        } catch {
        }
      }
      async function Ll() {
        const t = await T0(`${D0}/v1/web/user/email`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function jl(t) {
        const e = await T0(`${D0}/v1/web/user/request-email-change`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            new_email: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
      }
      async function Nl() {
        const t = await T0(`${D0}/v1/web/user/resend-verification`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function ql(t) {
        const e = await W0(`${D0}/v1/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        ne.set(true);
      }
      async function Ox(t) {
        const e = await W0(`${D0}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        return e.json();
      }
      async function Rl(t, e, x) {
        const n = await W0(`${D0}/v1/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t,
            email: e,
            public_key: x
          })
        });
        if (!n.ok) throw new Error(await h0(n));
        const o = await n.json();
        return xe = o.session_token, ne.set(false), o;
      }
      async function at(t, e, x = null) {
        const n = {
          username: t,
          auth_signature: e
        };
        x && (n.otp = x);
        const o = await W0(`${D0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(n)
        });
        if (!o.ok) throw new Error(await h0(o));
        const r = await o.json();
        return r.requires_otp || (xe = r.session_token, r.bootstrap ? (ne.set(r.bootstrap.email_verified), ox.set(r.bootstrap.email), _e.set(r.bootstrap.totp_enabled)) : Il()), r;
      }
      async function Ol() {
        const t = await T0(`${D0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Hl(t, e) {
        const x = await T0(`${D0}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: t,
            otp: e
          })
        });
        if (!x.ok) throw new Error(await h0(x));
        return x.json();
      }
      async function Ul() {
        const t = await T0(`${D0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await h0(t));
      }
      async function zl() {
        const t = await T0(`${D0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Gl() {
        const t = await T0(`${D0}/v1/web/totp/backup-codes/count`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function lo() {
        if (!xe) return;
        const t = xe;
        Ml(), W0(`${D0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function Vl() {
        const t = await T0(`${D0}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await h0(t));
        return t.json();
      }
      async function Kl(t, e) {
        const x = await T0(`${D0}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: t,
            expected_version: e
          })
        });
        if (!x.ok) throw new Error(await h0(x));
        return x.json();
      }
      async function so(t, e) {
        const x = await T0(`${D0}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t,
            date: e
          })
        });
        if (!x.ok) throw new Error(await h0(x));
        return x.json();
      }
      async function Yl(t, e, x, n) {
        const o = await T0(`${D0}/v1/web/user/change-password`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            auth_signature: t,
            new_public_key: e,
            new_blob: x,
            expected_blob_version: n
          })
        });
        if (!o.ok) throw new Error(await h0(o));
      }
      async function Wl(t) {
        const e = await W0(`${D0}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: t
          })
        });
        if (!e.ok) throw new Error(await h0(e));
        return e.json();
      }
      async function Ql(t) {
        const e = await T0(`${D0}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await h0(e));
      }
      async function Jl(t) {
        const e = await W0(`${D0}/v1/submit`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(t)
        }), x = e.headers.get("x-server-time"), n = e.headers.get("x-pow-difficulty"), o = n ? parseInt(n, 10) : null;
        if (e.status === 202) return {
          serverTime: x,
          powDifficulty: o
        };
        const r = await h0(e), l = new Error(r);
        throw l.statusCode = e.status, l.serverTime = x, l.powDifficulty = o, l;
      }
      function T0(t, e = {}) {
        return W0(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${xe}`,
            ...e.headers ?? {}
          }
        });
      }
      async function h0(t) {
        try {
          return (await t.json()).error ?? `HTTP ${t.status}`;
        } catch {
          return `HTTP ${t.status}`;
        }
      }
      const it = 15 * 60 * 1e3, Xl = 2 * 60 * 1e3, ao = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let _x = null, bx = null, Hx = null, Ux = null, rx = false, Te = false;
      function zx() {
        clearTimeout(_x), clearTimeout(bx), bx = setTimeout(() => {
          Te = true, Hx?.();
        }, it - Xl), _x = setTimeout(() => Ux?.(), it);
      }
      function io() {
        rx && !Te && zx();
      }
      function Zl({ onWarnCallback: t, onExpiredCallback: e }) {
        wx(), Hx = t, Ux = e, rx = true, Te = false;
        for (const x of ao) document.addEventListener(x, io, {
          passive: true
        });
        zx();
      }
      function wx() {
        clearTimeout(_x), clearTimeout(bx);
        for (const t of ao) document.removeEventListener(t, io);
        rx = false, Te = false, Hx = null, Ux = null;
      }
      function $l() {
        Te = false, rx && zx();
      }
      const co = Y0(false);
      function Gx() {
        co.set((K?.receivedAlerts || []).some((t) => !t.viewed));
      }
      const es = 12 * 1024, Eo = es * 0.75, uo = Y0(false), fo = 18262, Bo = 65535, xs = 45, R0 = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], he = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, Co = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function ae(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - fo;
      }
      function ie(t) {
        const e = (fo + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      function Vx(t) {
        const e = t.encounters, x = t.results || [], n = t.receivedAlerts || [], o = t.relationships || [], r = t.groupEncounters || [], l = e.length, s = x.length, a = n.length, c = o.length, E = r.length, f = new TextEncoder(), A = (v) => v ? f.encode(v).slice(0, 255) : new Uint8Array(0), C = e.map((v) => A(v.note)), F = o.map((v) => A(v.name)), B = r.map((v) => A(v.name)), p = r.map((v) => A(v.note)), h = e.reduce((v, _, w) => v + 70 + 1 + C[w].length, 0), k = o.reduce((v, _, w) => v + 73 + 1 + F[w].length, 0), b = r.reduce((v, _, w) => v + 73 + 1 + B[w].length + 1 + p[w].length, 0), m = new Uint8Array(35 + h + 2 + s * 4 + 2 + a * 36 + 2 + k + 2 + b);
        let D = 0;
        m[D++] = 1, m.set(t.myContactId, D), D += 32, m[D++] = l >> 8 & 255, m[D++] = l & 255;
        for (let v = 0; v < l; v++) {
          const _ = e[v];
          m.set(_.rawToken, D), D += 32, m.set(_.theirContactId, D), D += 32;
          const w = ae(_.date);
          m[D++] = w >> 8 & 255, m[D++] = w & 255, m[D++] = _.queryIndex >> 8 & 255, m[D++] = _.queryIndex & 255, m[D++] = _.submitIndex >> 8 & 255, m[D++] = _.submitIndex & 255, m[D++] = C[v].length, m.set(C[v], D), D += C[v].length;
        }
        m[D++] = s >> 8 & 255, m[D++] = s & 255;
        for (const v of x) {
          const _ = ae(v.date);
          m[D++] = _ >> 8 & 255, m[D++] = _ & 255, m[D++] = v.hasNotified ? 1 : 0;
          let w = 0;
          for (let y = 0; y < R0.length; y++) (v.positiveDiseases || []).includes(R0[y]) && (w |= 1 << y);
          m[D++] = w;
        }
        m[D++] = a >> 8 & 255, m[D++] = a & 255;
        for (const v of n) {
          m.set(v.rawToken, D), D += 32;
          const _ = ae(v.testDate);
          m[D++] = _ >> 8 & 255, m[D++] = _ & 255;
          let w = 0;
          for (let M = 0; M < R0.length; M++) (v.diseases || []).includes(R0[M]) && (w |= 1 << M);
          m[D++] = w;
          let y = 0;
          v.viewed && (y |= 1), v.labVerified && (y |= 2), m[D++] = y;
        }
        m[D++] = c >> 8 & 255, m[D++] = c & 255;
        for (let v = 0; v < c; v++) {
          const _ = o[v];
          m.set(_.rawToken, D), D += 32, m.set(_.theirContactId, D), D += 32;
          const w = ae(_.createdAt);
          m[D++] = w >> 8 & 255, m[D++] = w & 255;
          const y = _.endedAt ? ae(_.endedAt) : Bo;
          m[D++] = y >> 8 & 255, m[D++] = y & 255;
          let M = 0;
          _.archived && (M |= 1), m[D++] = M, m[D++] = _.queryIndex >> 8 & 255, m[D++] = _.queryIndex & 255, m[D++] = _.submitIndex >> 8 & 255, m[D++] = _.submitIndex & 255, m[D++] = F[v].length, m.set(F[v], D), D += F[v].length;
        }
        m[D++] = E >> 8 & 255, m[D++] = E & 255;
        for (let v = 0; v < E; v++) {
          const _ = r[v];
          m.set(_.token, D), D += 32;
          const w = ae(_.date);
          m[D++] = w >> 8 & 255, m[D++] = w & 255;
          const y = _.createdAt >>> 0;
          m[D++] = y >>> 24 & 255, m[D++] = y >>> 16 & 255, m[D++] = y >>> 8 & 255, m[D++] = y & 255, m[D++] = _.isHost ? 1 : 0, m[D++] = _.tokenIndex >> 8 & 255, m[D++] = _.tokenIndex & 255, m.set(_.hostContactId, D), D += 32, m[D++] = B[v].length, m.set(B[v], D), D += B[v].length, m[D++] = p[v].length, m.set(p[v], D), D += p[v].length;
        }
        return m;
      }
      function ts(t) {
        let e = 0;
        const x = t[e++];
        if (x !== 1) throw new Error(`Unknown blob version: ${x}`);
        const n = t.slice(e, e + 32);
        e += 32;
        const o = t[e] << 8 | t[e + 1];
        e += 2;
        const r = [];
        for (let B = 0; B < o; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const h = t.slice(e, e + 32);
          e += 32;
          const k = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const D = t[e++], v = D > 0 ? new TextDecoder().decode(t.slice(e, e + D)) : null;
          e += D, r.push({
            rawToken: p,
            theirContactId: h,
            date: ie(k),
            queryIndex: b,
            submitIndex: m,
            note: v
          });
        }
        const l = [], s = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < s; B++) {
          const p = t[e] << 8 | t[e + 1];
          e += 2;
          const h = t[e++], k = t[e++], b = !!(h & 1), m = R0.filter((D, v) => k & 1 << v);
          l.push({
            date: ie(p),
            hasNotified: b,
            positiveDiseases: m
          });
        }
        const a = [], c = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < c; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e++], b = t[e++], m = R0.filter((_, w) => k & 1 << w), D = !!(b & 1), v = !!(b & 2);
          a.push({
            rawToken: p,
            testDate: ie(h),
            diseases: m,
            viewed: D,
            labVerified: v
          });
        }
        const E = [], f = t[e] << 8 | t[e + 1];
        e += 2;
        for (let B = 0; B < f; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const h = t.slice(e, e + 32);
          e += 32;
          const k = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e++], D = t[e] << 8 | t[e + 1];
          e += 2;
          const v = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t[e++], w = _ > 0 ? new TextDecoder().decode(t.slice(e, e + _)) : null;
          e += _;
          const y = b === Bo ? null : ie(b), M = !!(m & 1);
          E.push({
            rawToken: p,
            theirContactId: h,
            createdAt: ie(k),
            endedAt: y,
            archived: M,
            queryIndex: D,
            submitIndex: v,
            name: w
          });
        }
        const A = [], C = t[e] << 8 | t[e + 1];
        e += 2;
        const F = new TextDecoder();
        for (let B = 0; B < C; B++) {
          const p = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const k = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const b = t[e++], m = t[e] << 8 | t[e + 1];
          e += 2;
          const D = t.slice(e, e + 32);
          e += 32;
          const v = t[e++], _ = v > 0 ? F.decode(t.slice(e, e + v)) : null;
          e += v;
          const w = t[e++], y = w > 0 ? F.decode(t.slice(e, e + w)) : null;
          e += w;
          const M = !!(b & 1);
          A.push({
            token: p,
            date: ie(h),
            createdAt: k,
            isHost: M,
            tokenIndex: m,
            hostContactId: D,
            name: _,
            note: y
          });
        }
        return {
          myContactId: n,
          encounters: r,
          results: l,
          receivedAlerts: a,
          relationships: E,
          groupEncounters: A
        };
      }
      let K = null, fe = 0, gx = false;
      ee.subscribe((t) => {
        t === "reconnected" && gx && K && te() && g0().catch(() => {
        });
      });
      function q0() {
        return K;
      }
      function de() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.myContactId;
      }
      function Oe() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.results || [];
      }
      function fx() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (K.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: x, labVerified: n }) => ({
          testDate: t,
          diseases: e,
          viewed: x,
          labVerified: n
        }));
      }
      function Ao() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.encounters || [];
      }
      function Kx() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.relationships || [];
      }
      function Fo() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return K.groupEncounters || [];
      }
      async function Do(t = null) {
        const { blob: e, blob_version: x } = t ?? await Vl();
        if (!e) {
          K = {
            myContactId: ye(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: []
          }, fe = 0, await g0();
          return;
        }
        const n = nx(te(), b0(e));
        K = ts(n), fe = x, await Fs(), Gx();
      }
      async function ns(t, e, x) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          encounters: [
            ...K.encounters,
            {
              rawToken: t,
              theirContactId: e,
              date: x,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        try {
          await g0();
        } catch (n) {
          throw As(t, e, x), n;
        }
      }
      async function os(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (K.encounters || []).map((n) => e0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        K = {
          ...K,
          encounters: x
        }, await g0();
      }
      async function rs(t, e, x) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          relationships: [
            ...K.relationships || [],
            {
              rawToken: t,
              theirContactId: e,
              createdAt: x,
              endedAt: null,
              name: null,
              archived: false,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        }, await g0();
      }
      async function po(t, e, x, n, o) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const r = Math.floor(Date.now() / 1e3);
        K = {
          ...K,
          groupEncounters: [
            ...K.groupEncounters || [],
            {
              token: t,
              date: e,
              createdAt: r,
              isHost: x,
              tokenIndex: 0,
              hostContactId: n,
              name: o || null,
              note: null
            }
          ]
        }, await g0();
      }
      async function ct(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (K.groupEncounters || []).map((n) => e0(n.token) === t ? {
          ...n,
          ...e
        } : n);
        K = {
          ...K,
          groupEncounters: x
        }, await g0();
      }
      async function ls(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (K.groupEncounters || []).filter((x) => e0(x.token) !== t);
        K = {
          ...K,
          groupEncounters: e
        }, await g0();
      }
      async function Le(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (K.relationships || []).map((n) => e0(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        K = {
          ...K,
          relationships: x
        }, await g0();
      }
      async function ss(t, e) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (K.results || []).length;
        return K = {
          ...K,
          results: [
            ...K.results || [],
            {
              date: t,
              positiveDiseases: e,
              hasNotified: false
            }
          ]
        }, await g0(), x;
      }
      async function dx(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...K.results || []
        ];
        if (t >= e.length) throw new Error("Invalid result index");
        e[t] = {
          ...e[t],
          hasNotified: true
        }, K = {
          ...K,
          results: e
        }, await g0();
      }
      async function as() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        K = {
          ...K,
          encounters: K.encounters.map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          })),
          relationships: (K.relationships || []).map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          }))
        }, await g0();
      }
      async function is(t, e, x, n) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const r = K.encounters.map((a) => e0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        })), l = (K.relationships || []).map((a) => o || e0(a.rawToken) !== t ? a : (o = a.rawToken, {
          ...a,
          queryIndex: a.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + t);
        const s = [
          ...K.receivedAlerts || [],
          {
            rawToken: o,
            testDate: e,
            diseases: x,
            viewed: false,
            labVerified: !!n
          }
        ];
        K = {
          ...K,
          encounters: r,
          relationships: l,
          receivedAlerts: s
        }, await g0(), Gx();
      }
      async function cs(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...K.receivedAlerts || []
        ];
        if (t >= e.length) throw new Error("Invalid alert index");
        e[t] = {
          ...e[t],
          viewed: true
        }, K = {
          ...K,
          receivedAlerts: e
        }, await g0(), Gx();
      }
      function Es() {
        if (!K || Vx(K).byteLength < Eo) return false;
        const e = Yx();
        return K.encounters.filter((x) => x.date < e).length >= 5;
      }
      function us() {
        if (!K) return 0;
        const t = Yx();
        return K.encounters.filter((e) => e.date < t).length;
      }
      async function fs() {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = Yx();
        K = {
          ...K,
          encounters: K.encounters.filter((e) => e.date >= t)
        }, await g0();
      }
      function Yx() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function ds(t) {
        if (!K) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = Pe(t, Vx(K));
        return {
          blobHex: e0(e),
          blobVersion: fe
        };
      }
      function Bs(t) {
        fe = t;
      }
      function Cs(t, e) {
        if (!t.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + xs * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const ue = "peachsafe_pending_encounters";
      async function g0() {
        const t = Vx(K);
        uo.set(t.byteLength >= Eo);
        const e = Pe(te(), t);
        try {
          const { blob_version: x } = await Kl(e0(e), fe);
          fe = x, gx = false;
          try {
            localStorage.removeItem(ue);
          } catch {
          }
        } catch (x) {
          throw gx = true, x;
        }
      }
      function As(t, e, x) {
        try {
          let n = [];
          const o = localStorage.getItem(ue);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode(nx(te(), b0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: e0(t),
            theirContactIdHex: e0(e),
            date: x
          });
          const r = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(ue, e0(Pe(te(), r)));
        } catch {
        }
      }
      async function Fs() {
        let t;
        try {
          const e = localStorage.getItem(ue);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode(nx(te(), b0(e))));
        } catch {
          try {
            localStorage.removeItem(ue);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(ue);
          } catch {
          }
          return;
        }
        for (const e of t) K = {
          ...K,
          encounters: [
            ...K.encounters,
            {
              rawToken: b0(e.rawTokenHex),
              theirContactId: b0(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        await g0();
      }
      async function mo() {
        const t = q0(), e = de();
        if (!t) return 0;
        const n = Oe().filter((E) => E.positiveDiseases.length === 0).map((E) => E.date).sort().pop() ?? null, o = /* @__PURE__ */ new Map(), r = [];
        for (const E of t.encounters) {
          const f = Z0(E.rawToken, e, E.queryIndex), A = $0(f);
          o.set(A, {
            rawTokenHex: e0(E.rawToken),
            alertDate: E.date
          }), r.push(A);
        }
        for (const E of t.relationships || []) {
          if (!Cs(E, n)) continue;
          const f = Z0(E.rawToken, e, E.queryIndex), A = $0(f);
          o.set(A, {
            rawTokenHex: e0(E.rawToken),
            alertDate: E.createdAt
          }), r.push(A);
        }
        if (r.length === 0) return 0;
        const l = Math.max(50, r.length * 2), s = [
          ...r
        ];
        for (; s.length < l; ) s.push($0(ye(32)));
        for (let E = s.length - 1; E > 0; E--) {
          const f = Math.floor(Math.random() * (E + 1));
          [s[E], s[f]] = [
            s[f],
            s[E]
          ];
        }
        const { matches: a } = await Wl(s);
        if (!a || a.length === 0) return 0;
        let c = 0;
        for (const E of a) {
          const f = o.get(E.token);
          if (!f) continue;
          const C = [
            ...q0().encounters || [],
            ...q0().relationships || []
          ].find((y) => e0(y.rawToken) === f.rawTokenHex);
          if (!C) continue;
          const F = to(C.theirContactId);
          let B;
          try {
            B = nx(F, no(E.encrypted_payload));
          } catch {
            continue;
          }
          const p = new TextDecoder().decode(B), h = p.slice(1, 9), k = `${h.slice(0, 4)}-${h.slice(4, 6)}-${h.slice(6, 8)}`, b = p.length > 9 ? p.slice(9).split(",") : [], m = Object.fromEntries(Object.entries(Co).map(([y, M]) => [
            M,
            y
          ])), D = b.map((y) => m[y]).filter(Boolean), v = e0(Z0(C.rawToken, e, C.queryIndex));
          await is(f.rawTokenHex, k, D, E.verified), c++;
          const _ = [
            ...q0().encounters || [],
            ...q0().relationships || []
          ].find((y) => e0(y.rawToken) === f.rawTokenHex), w = e0(Z0(C.rawToken, e, _?.queryIndex ?? C.queryIndex + 1));
          try {
            await so(w, f.alertDate);
          } catch (y) {
            console.warn("alerts: could not register next query token:", y.message);
          }
          try {
            await Ql(v);
          } catch (y) {
            console.warn("alerts: could not delete old query token:", y.message);
          }
        }
        return c;
      }
      let yx = "/home";
      function Ds(t) {
        yx = t;
      }
      function Et() {
        const t = yx;
        return yx = "/home", t;
      }
      function ps(t) {
        let e, x, n, o, r, l, s, a, c, E, f = t[3] ? "Verifying\u2026" : "Verify", A, C, F, B, p = t[6] ? "Use authenticator app instead" : "Use a backup code instead", h, k, b;
        function m(w, y) {
          return w[6] ? vs : hs;
        }
        let D = m(t), v = D(t), _ = t[4] && ut(t);
        return {
          c() {
            e = d("div"), x = d("button"), n = d("span"), n.textContent = "arrow_back", o = g(), r = d("span"), r.textContent = "Two-factor auth", l = g(), s = d("form"), v.c(), a = g(), _ && _.c(), c = g(), E = d("button"), A = j(f), F = g(), B = d("button"), h = j(p), u(n, "class", "material-icons svelte-qjpbsq"), u(x, "type", "button"), u(x, "class", "back-btn svelte-qjpbsq"), x.disabled = t[3], u(r, "class", "otp-title svelte-qjpbsq"), u(e, "class", "otp-header svelte-qjpbsq"), u(E, "type", "submit"), E.disabled = C = t[3] || !t[6] && t[2].length !== 6 || t[6] && t[2].length !== 14, u(E, "class", "svelte-qjpbsq"), u(B, "type", "button"), u(B, "class", "backup-toggle svelte-qjpbsq"), B.disabled = t[3], u(s, "class", "svelte-qjpbsq");
          },
          m(w, y) {
            T(w, e, y), i(e, x), i(x, n), i(e, o), i(e, r), T(w, l, y), T(w, s, y), v.m(s, null), i(s, a), _ && _.m(s, null), i(s, c), i(s, E), i(E, A), i(s, F), i(s, B), i(B, h), k || (b = [
              H(x, "click", t[15]),
              H(B, "click", t[16]),
              H(s, "submit", V0(t[12]))
            ], k = true);
          },
          p(w, y) {
            y & 8 && (x.disabled = w[3]), D === (D = m(w)) && v ? v.p(w, y) : (v.d(1), v = D(w), v && (v.c(), v.m(s, a))), w[4] ? _ ? _.p(w, y) : (_ = ut(w), _.c(), _.m(s, c)) : _ && (_.d(1), _ = null), y & 8 && f !== (f = w[3] ? "Verifying\u2026" : "Verify") && z(A, f), y & 76 && C !== (C = w[3] || !w[6] && w[2].length !== 6 || w[6] && w[2].length !== 14) && (E.disabled = C), y & 64 && p !== (p = w[6] ? "Use authenticator app instead" : "Use a backup code instead") && z(h, p), y & 8 && (B.disabled = w[3]);
          },
          d(w) {
            w && (P(e), P(l), P(s)), v.d(), _ && _.d(), k = false, a0(b);
          }
        };
      }
      function ms(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F = t[3] ? "Signing in\u2026" : "Sign in", B, p, h, k = t[4] && ft(t);
        return {
          c() {
            e = d("div"), e.innerHTML = '<a href="#/" class="tab active svelte-qjpbsq">Sign in</a> <a href="#/signup" class="tab svelte-qjpbsq">Create account</a>', x = g(), n = d("form"), o = d("label"), r = j(`Username
          `), l = d("input"), s = g(), a = d("label"), c = j(`Password
          `), E = d("input"), f = g(), k && k.c(), A = g(), C = d("button"), B = j(F), u(e, "class", "tabs svelte-qjpbsq"), u(l, "type", "text"), l.required = true, u(l, "autocomplete", "username"), u(l, "class", "svelte-qjpbsq"), u(o, "class", "svelte-qjpbsq"), u(E, "type", "password"), E.required = true, u(E, "autocomplete", "current-password"), u(E, "class", "svelte-qjpbsq"), u(a, "class", "svelte-qjpbsq"), u(C, "type", "submit"), C.disabled = t[3], u(C, "class", "svelte-qjpbsq"), u(n, "class", "svelte-qjpbsq");
          },
          m(b, m) {
            T(b, e, m), T(b, x, m), T(b, n, m), i(n, o), i(o, r), i(o, l), t0(l, t[0]), i(n, s), i(n, a), i(a, c), i(a, E), t0(E, t[1]), i(n, f), k && k.m(n, null), i(n, A), i(n, C), i(C, B), p || (h = [
              H(l, "input", t[17]),
              H(E, "input", t[18]),
              H(n, "submit", V0(t[11]))
            ], p = true);
          },
          p(b, m) {
            m & 1 && l.value !== b[0] && t0(l, b[0]), m & 2 && E.value !== b[1] && t0(E, b[1]), b[4] ? k ? k.p(b, m) : (k = ft(b), k.c(), k.m(n, A)) : k && (k.d(1), k = null), m & 8 && F !== (F = b[3] ? "Signing in\u2026" : "Sign in") && z(B, F), m & 8 && (C.disabled = b[3]);
          },
          d(b) {
            b && (P(e), P(x), P(n)), k && k.d(), p = false, a0(h);
          }
        };
      }
      function hs(t) {
        let e, x, n, o, r, l, s;
        return {
          c() {
            e = d("p"), e.textContent = "Enter the 6-digit code from your authenticator app.", x = g(), n = d("label"), o = j(`Authenticator code
            `), r = d("input"), u(e, "class", "otp-prompt svelte-qjpbsq"), u(r, "type", "text"), u(r, "inputmode", "numeric"), u(r, "pattern", "[0-9]*"), u(r, "maxlength", "6"), r.required = true, u(r, "autocomplete", "one-time-code"), u(r, "class", "svelte-qjpbsq"), u(n, "class", "svelte-qjpbsq");
          },
          m(a, c) {
            T(a, e, c), T(a, x, c), T(a, n, c), i(n, o), i(n, r), t0(r, t[2]), l || (s = H(r, "input", t[20]), l = true);
          },
          p(a, c) {
            c & 4 && r.value !== a[2] && t0(r, a[2]);
          },
          d(a) {
            a && (P(e), P(x), P(n)), l = false, s();
          }
        };
      }
      function vs(t) {
        let e, x, n, o, r, l, s;
        return {
          c() {
            e = d("p"), e.textContent = "Enter one of your backup codes (xxxx-xxxx-xxxx).", x = g(), n = d("label"), o = j(`Backup code
            `), r = d("input"), u(e, "class", "otp-prompt svelte-qjpbsq"), u(r, "type", "text"), u(r, "inputmode", "text"), u(r, "maxlength", "14"), r.required = true, u(r, "autocomplete", "off"), u(r, "placeholder", "xxxx-xxxx-xxxx"), u(r, "class", "svelte-qjpbsq"), u(n, "class", "svelte-qjpbsq");
          },
          m(a, c) {
            T(a, e, c), T(a, x, c), T(a, n, c), i(n, o), i(n, r), t0(r, t[2]), l || (s = H(r, "input", t[19]), l = true);
          },
          p(a, c) {
            c & 4 && r.value !== a[2] && t0(r, a[2]);
          },
          d(a) {
            a && (P(e), P(x), P(n)), l = false, s();
          }
        };
      }
      function ut(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[4]), u(e, "class", "error svelte-qjpbsq");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && z(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ft(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[4]), u(e, "class", "error svelte-qjpbsq");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && z(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function dt(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Your password never leaves your device in plaintext.", u(e, "class", "privacy-note svelte-qjpbsq");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Bt(t) {
        let e, x, n, o, r, l, s, a, c, E = t[8] === 1 ? "" : "s", f, A, C, F, B, p, h = t[9] ? "Deleting\u2026" : "Delete old encounters", k, b, m, D, v, _, w = t[10] && Ct(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Free up storage space", o = g(), r = d("p"), l = j(`Your account is using 75% or more of its storage limit.
        You have `), s = d("strong"), a = j(t[8]), c = j(" encounter"), f = j(E), A = j(` older
        than one year. Deleting them will free up space.`), C = g(), w && w.c(), F = g(), B = d("div"), p = d("button"), k = j(h), b = g(), m = d("button"), D = j("Keep them"), u(n, "id", "cleanup-title"), u(n, "class", "svelte-qjpbsq"), u(r, "class", "svelte-qjpbsq"), u(p, "class", "btn-primary svelte-qjpbsq"), p.disabled = t[9], u(m, "class", "btn-ghost svelte-qjpbsq"), m.disabled = t[9], u(B, "class", "cleanup-actions svelte-qjpbsq"), u(x, "class", "cleanup-dialog svelte-qjpbsq"), u(e, "class", "cleanup-overlay svelte-qjpbsq"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "cleanup-title");
          },
          m(y, M) {
            T(y, e, M), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(r, s), i(s, a), i(s, c), i(s, f), i(r, A), i(x, C), w && w.m(x, null), i(x, F), i(x, B), i(B, p), i(p, k), i(B, b), i(B, m), i(m, D), v || (_ = [
              H(p, "click", t[13]),
              H(m, "click", t[14])
            ], v = true);
          },
          p(y, M) {
            M & 256 && z(a, y[8]), M & 256 && E !== (E = y[8] === 1 ? "" : "s") && z(f, E), y[10] ? w ? w.p(y, M) : (w = Ct(y), w.c(), w.m(x, F)) : w && (w.d(1), w = null), M & 512 && h !== (h = y[9] ? "Deleting\u2026" : "Delete old encounters") && z(k, h), M & 512 && (p.disabled = y[9]), M & 512 && (m.disabled = y[9]);
          },
          d(y) {
            y && P(e), w && w.d(), v = false, a0(_);
          }
        };
      }
      function Ct(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[10]), u(e, "class", "cleanup-error svelte-qjpbsq");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 1024 && z(x, n[10]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ks(t) {
        let e, x, n, o, r, l, s;
        function a(C, F) {
          return C[5] ? ps : ms;
        }
        let c = a(t), E = c(t), f = !t[5] && dt(), A = t[7] && Bt(t);
        return {
          c() {
            e = d("main"), x = d("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-qjpbsq"/> <h1 class="svelte-qjpbsq"><span class="brand-peach svelte-qjpbsq">Peach</span><span class="brand-safe svelte-qjpbsq">Safe</span></h1>', n = g(), o = d("div"), E.c(), r = g(), f && f.c(), l = g(), A && A.c(), s = I0(), u(x, "class", "brand svelte-qjpbsq"), u(o, "class", "card svelte-qjpbsq"), u(e, "class", "svelte-qjpbsq");
          },
          m(C, F) {
            T(C, e, F), i(e, x), i(e, n), i(e, o), E.m(o, null), i(e, r), f && f.m(e, null), T(C, l, F), A && A.m(C, F), T(C, s, F);
          },
          p(C, [F]) {
            c === (c = a(C)) && E ? E.p(C, F) : (E.d(1), E = c(C), E && (E.c(), E.m(o, null))), C[5] ? f && (f.d(1), f = null) : f || (f = dt(), f.c(), f.m(e, null)), C[7] ? A ? A.p(C, F) : (A = Bt(C), A.c(), A.m(s.parentNode, s)) : A && (A.d(1), A = null);
          },
          i: X,
          o: X,
          d(C) {
            C && (P(e), P(l), P(s)), E.d(), f && f.d(), A && A.d(C);
          }
        };
      }
      function _s(t, e, x) {
        let n = "", o = "", r = "", l = false, s = null, a = false, c = false, E = null, f = null, A = false, C = 0, F = "", B = false, p = null;
        async function h() {
          x(4, s = null), x(3, l = true);
          try {
            const { challenge: S, auth_salt: N, enc_salt: I } = await Ox(n), q = await G0(o, b0(N)), G = xo(new TextEncoder().encode(S), q), U = btoa(String.fromCharCode(...G)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), W = await at(n, U);
            if (W.requires_otp) {
              E = U, f = I, x(5, a = true);
              return;
            }
            await b(I, W);
          } catch (S) {
            x(4, s = S.message);
          } finally {
            x(3, l = false);
          }
        }
        async function k() {
          x(4, s = null), x(3, l = true);
          try {
            const S = await at(n, E, r);
            await b(f, S);
          } catch (S) {
            x(4, s = S.message);
          } finally {
            x(3, l = false);
          }
        }
        async function b(S, N) {
          ro(n);
          const I = await G0(o, b0(S));
          Rx(I), await Do(N.bootstrap ?? null), mo().catch(() => {
          }), Es() ? (x(8, C = us()), F = Et(), x(7, A = true)) : E0(Et());
        }
        async function m() {
          x(10, p = null), x(9, B = true);
          try {
            await fs(), x(7, A = false), E0(F);
          } catch (S) {
            x(10, p = S.message);
          } finally {
            x(9, B = false);
          }
        }
        function D() {
          x(7, A = false), E0(F);
        }
        function v() {
          x(5, a = false), x(2, r = ""), E = null, f = null, x(4, s = null), x(6, c = false);
        }
        function _() {
          x(6, c = !c), x(2, r = ""), x(4, s = null);
        }
        function w() {
          n = this.value, x(0, n);
        }
        function y() {
          o = this.value, x(1, o);
        }
        function M() {
          r = this.value, x(2, r);
        }
        function L() {
          r = this.value, x(2, r);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          A,
          C,
          B,
          p,
          h,
          k,
          m,
          D,
          v,
          _,
          w,
          y,
          M,
          L
        ];
      }
      class bs extends m0 {
        constructor(e) {
          super(), p0(this, e, _s, ks, F0, {});
        }
      }
      function At(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[6]), u(e, "class", "error svelte-oivphc");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && z(x, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ws(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b, m, D, v, _, w, y, M, L, S, N, I = t[5] ? "Creating account\u2026" : "Create account", q, G, U, W, Y, O = t[6] && At(t);
        return {
          c() {
            e = d("main"), x = d("div"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="PeachSafe" class="brand-icon svelte-oivphc"/> <h1 class="svelte-oivphc"><span class="brand-peach svelte-oivphc">Peach</span><span class="brand-safe svelte-oivphc">Safe</span></h1>', n = g(), o = d("div"), r = d("div"), r.innerHTML = '<a href="#/" class="tab svelte-oivphc">Sign in</a> <a href="#/signup" class="tab active svelte-oivphc">Create account</a>', l = g(), s = d("form"), a = d("label"), c = j(`Beta code
        `), E = d("input"), f = g(), A = d("label"), C = j(`Username
        `), F = d("input"), B = g(), p = d("label"), h = j(`Email
        `), k = d("input"), b = g(), m = d("label"), D = j(`Password
        `), v = d("input"), _ = g(), w = d("label"), y = j(`Confirm password
        `), M = d("input"), L = g(), O && O.c(), S = g(), N = d("button"), q = j(I), G = g(), U = d("p"), U.textContent = "Your password never leaves your device in plaintext.", u(x, "class", "brand svelte-oivphc"), u(r, "class", "tabs svelte-oivphc"), u(E, "type", "text"), E.required = true, u(E, "autocomplete", "off"), u(E, "class", "svelte-oivphc"), u(a, "class", "svelte-oivphc"), u(F, "type", "text"), F.required = true, u(F, "autocomplete", "username"), u(F, "class", "svelte-oivphc"), u(A, "class", "svelte-oivphc"), u(k, "type", "email"), k.required = true, u(k, "autocomplete", "email"), u(k, "class", "svelte-oivphc"), u(p, "class", "svelte-oivphc"), u(v, "type", "password"), v.required = true, u(v, "autocomplete", "new-password"), u(v, "minlength", "12"), u(v, "class", "svelte-oivphc"), u(m, "class", "svelte-oivphc"), u(M, "type", "password"), M.required = true, u(M, "autocomplete", "new-password"), u(M, "class", "svelte-oivphc"), u(w, "class", "svelte-oivphc"), u(N, "type", "submit"), N.disabled = t[5], u(N, "class", "svelte-oivphc"), u(s, "class", "svelte-oivphc"), u(o, "class", "card svelte-oivphc"), u(U, "class", "privacy-note svelte-oivphc"), u(e, "class", "svelte-oivphc");
          },
          m(R, $) {
            T(R, e, $), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, a), i(a, c), i(a, E), t0(E, t[4]), i(s, f), i(s, A), i(A, C), i(A, F), t0(F, t[0]), i(s, B), i(s, p), i(p, h), i(p, k), t0(k, t[1]), i(s, b), i(s, m), i(m, D), i(m, v), t0(v, t[2]), i(s, _), i(s, w), i(w, y), i(w, M), t0(M, t[3]), i(s, L), O && O.m(s, null), i(s, S), i(s, N), i(N, q), i(e, G), i(e, U), W || (Y = [
              H(E, "input", t[8]),
              H(F, "input", t[9]),
              H(k, "input", t[10]),
              H(v, "input", t[11]),
              H(M, "input", t[12]),
              H(s, "submit", V0(t[7]))
            ], W = true);
          },
          p(R, [$]) {
            $ & 16 && E.value !== R[4] && t0(E, R[4]), $ & 1 && F.value !== R[0] && t0(F, R[0]), $ & 2 && k.value !== R[1] && t0(k, R[1]), $ & 4 && v.value !== R[2] && t0(v, R[2]), $ & 8 && M.value !== R[3] && t0(M, R[3]), R[6] ? O ? O.p(R, $) : (O = At(R), O.c(), O.m(s, S)) : O && (O.d(1), O = null), $ & 32 && I !== (I = R[5] ? "Creating account\u2026" : "Create account") && z(q, I), $ & 32 && (N.disabled = R[5]);
          },
          i: X,
          o: X,
          d(R) {
            R && P(e), O && O.d(), W = false, a0(Y);
          }
        };
      }
      const gs = "psbeta";
      function ys(t, e, x) {
        let n = "", o = "", r = "", l = "", s = "", a = false, c = null;
        async function E() {
          if (x(6, c = null), s !== gs) {
            x(6, c = "Sorry, we're in closed beta at the moment");
            return;
          }
          if (r !== l) {
            x(6, c = "Passwords do not match");
            return;
          }
          if (r.length < 12) {
            x(6, c = "Password must be at least 12 characters");
            return;
          }
          x(5, a = true);
          try {
            const { auth_salt: p, enc_salt: h } = await Ox(n), k = await G0(r, b0(p)), b = e0(eo(k));
            await Rl(n, o, b), ro(n);
            const m = await G0(r, b0(h));
            Rx(m), await Do(), E0("/home");
          } catch (p) {
            x(6, c = p.message);
          } finally {
            x(5, a = false);
          }
        }
        function f() {
          s = this.value, x(4, s);
        }
        function A() {
          n = this.value, x(0, n);
        }
        function C() {
          o = this.value, x(1, o);
        }
        function F() {
          r = this.value, x(2, r);
        }
        function B() {
          l = this.value, x(3, l);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          E,
          f,
          A,
          C,
          F,
          B
        ];
      }
      class Ps extends m0 {
        constructor(e) {
          super(), p0(this, e, ys, ws, F0, {});
        }
      }
      function Ft(t) {
        let e;
        return {
          c() {
            e = d("span"), u(e, "class", "unread-dot svelte-16jfgnj");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ts(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A = t[1] ? "notifications_active" : "notifications", C, F, B, p, h, k, b, m, D, v, _ = t[1] && Ft();
        return {
          c() {
            e = d("nav"), x = d("a"), x.innerHTML = '<img src="/android-chrome-192x192.png" alt="" class="brand-icon svelte-16jfgnj"/> <span class="brand-label svelte-16jfgnj"><span class="brand-peach svelte-16jfgnj">Peach</span><span class="brand-safe svelte-16jfgnj">Safe</span></span>', n = g(), o = d("div"), r = d("a"), r.innerHTML = '<span class="material-icons svelte-16jfgnj">people</span> <span class="tab-label svelte-16jfgnj">Encounters</span>', l = g(), s = d("a"), s.innerHTML = '<span class="material-icons svelte-16jfgnj">science</span> <span class="tab-label svelte-16jfgnj">Test Results</span>', a = g(), c = d("a"), E = d("span"), f = d("span"), C = j(A), F = g(), _ && _.c(), B = g(), p = d("span"), p.textContent = "Alerts", h = g(), k = d("a"), k.innerHTML = '<span class="material-icons svelte-16jfgnj">settings</span> <span class="tab-label svelte-16jfgnj">Settings</span>', b = g(), m = d("button"), m.textContent = "Sign out", u(x, "href", "#/home"), u(x, "class", "brand svelte-16jfgnj"), u(r, "href", "#/encounters"), u(r, "class", "tab svelte-16jfgnj"), o0(r, "active", t[0] === "/encounters"), u(s, "href", "#/results"), u(s, "class", "tab svelte-16jfgnj"), o0(s, "active", t[0] === "/results"), u(f, "class", "material-icons svelte-16jfgnj"), u(E, "class", "icon-wrap svelte-16jfgnj"), u(p, "class", "tab-label svelte-16jfgnj"), u(c, "href", "#/alerts"), u(c, "class", "tab svelte-16jfgnj"), o0(c, "active", t[0] === "/alerts"), o0(c, "has-unread", t[1]), u(o, "class", "tabs svelte-16jfgnj"), u(k, "href", "#/settings"), u(k, "class", "tab settings-tab svelte-16jfgnj"), u(k, "title", "Settings"), o0(k, "active", t[0] === "/settings" || t[0] === "/change-password" || t[0] === "/settings/2fa-setup"), u(m, "class", "signout-btn svelte-16jfgnj"), u(e, "class", "svelte-16jfgnj");
          },
          m(w, y) {
            T(w, e, y), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(o, a), i(o, c), i(c, E), i(E, f), i(f, C), i(E, F), _ && _.m(E, null), i(c, B), i(c, p), i(e, h), i(e, k), i(e, b), i(e, m), D || (v = H(m, "click", t[2]), D = true);
          },
          p(w, [y]) {
            y & 1 && o0(r, "active", w[0] === "/encounters"), y & 1 && o0(s, "active", w[0] === "/results"), y & 2 && A !== (A = w[1] ? "notifications_active" : "notifications") && z(C, A), w[1] ? _ || (_ = Ft(), _.c(), _.m(E, null)) : _ && (_.d(1), _ = null), y & 1 && o0(c, "active", w[0] === "/alerts"), y & 2 && o0(c, "has-unread", w[1]), y & 1 && o0(k, "active", w[0] === "/settings" || w[0] === "/change-password" || w[0] === "/settings/2fa-setup");
          },
          i: X,
          o: X,
          d(w) {
            w && P(e), _ && _.d(), D = false, v();
          }
        };
      }
      function Ss(t, e, x) {
        let n, o;
        z0(t, $o, (l) => x(0, n = l)), z0(t, co, (l) => x(1, o = l));
        async function r() {
          await lo(), E0("/");
        }
        return [
          n,
          o,
          r
        ];
      }
      class H0 extends m0 {
        constructor(e) {
          super(), p0(this, e, Ss, Ts, F0, {});
        }
      }
      function Ms(t) {
        let e, x, n, o;
        return e = new H0({}), {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), n.innerHTML = `<div class="hero svelte-1yyph4d"><div class="logo-wrap svelte-1yyph4d"><img src="/android-chrome-192x192.png" alt="PeachSafe" class="logo-img svelte-1yyph4d"/></div> <h1 class="app-name svelte-1yyph4d"><span class="brand-peach svelte-1yyph4d">Peach</span><span class="brand-safe svelte-1yyph4d">Safe</span></h1> <p class="tagline svelte-1yyph4d">Private. Local. Yours.</p></div> <div class="actions svelte-1yyph4d"><a href="#/encounter-exchange" class="btn-filled svelte-1yyph4d"><span class="material-icons svelte-1yyph4d">qr_code</span>
      Log New Encounter</a></div>`, u(n, "class", "svelte-1yyph4d");
          },
          m(r, l) {
            k0(e, r, l), T(r, x, l), T(r, n, l), o = true;
          },
          p: X,
          i(r) {
            o || (d0(e.$$.fragment, r), o = true);
          },
          o(r) {
            C0(e.$$.fragment, r), o = false;
          },
          d(r) {
            r && (P(x), P(n)), _0(e, r);
          }
        };
      }
      function Is(t) {
        return y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
        }), [];
      }
      class Ls extends m0 {
        constructor(e) {
          super(), p0(this, e, Is, Ms, F0, {});
        }
      }
      function Dt(t, e, x) {
        const n = t.slice();
        return n[20] = e[x], n;
      }
      function pt(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function mt(t, e, x) {
        const n = t.slice();
        return n[26] = e[x], n;
      }
      function ht(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function vt(t) {
        let e, x, n, o, r, l, s, a, c, E, f = t[6] ? "Creating\u2026" : "Group encounter", A, C, F, B, p, h, k, b, m, D = t[7] && kt(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("p"), n.textContent = "New encounter", o = g(), r = d("button"), r.innerHTML = '<span class="material-icons type-icon svelte-1vdpm8p">person</span> <span class="type-label svelte-1vdpm8p">1:1 encounter</span> <span class="material-icons type-chevron svelte-1vdpm8p">chevron_right</span>', l = g(), s = d("button"), a = d("span"), a.textContent = "groups", c = g(), E = d("span"), A = j(f), C = g(), F = d("span"), F.textContent = "chevron_right", B = g(), D && D.c(), p = g(), h = d("button"), k = j("Cancel"), u(n, "class", "modal-title svelte-1vdpm8p"), u(r, "class", "type-card svelte-1vdpm8p"), u(a, "class", "material-icons type-icon svelte-1vdpm8p"), u(E, "class", "type-label svelte-1vdpm8p"), u(F, "class", "material-icons type-chevron svelte-1vdpm8p"), u(s, "class", "type-card svelte-1vdpm8p"), s.disabled = t[6], u(h, "class", "btn-text cancel-btn svelte-1vdpm8p"), h.disabled = t[6], u(x, "class", "modal-sheet svelte-1vdpm8p"), u(e, "class", "modal-backdrop svelte-1vdpm8p");
          },
          m(v, _) {
            T(v, e, _), i(e, x), i(x, n), i(x, o), i(x, r), i(x, l), i(x, s), i(s, a), i(s, c), i(s, E), i(E, A), i(s, C), i(s, F), i(x, B), D && D.m(x, null), i(x, p), i(x, h), i(h, k), b || (m = [
              H(r, "click", t[14]),
              H(s, "click", t[10]),
              H(h, "click", t[15]),
              H(x, "click", Oo(t[12])),
              H(e, "click", t[16])
            ], b = true);
          },
          p(v, _) {
            _ & 64 && f !== (f = v[6] ? "Creating\u2026" : "Group encounter") && z(A, f), _ & 64 && (s.disabled = v[6]), v[7] ? D ? D.p(v, _) : (D = kt(v), D.c(), D.m(x, p)) : D && (D.d(1), D = null), _ & 64 && (h.disabled = v[6]);
          },
          d(v) {
            v && P(e), D && D.d(), b = false, a0(m);
          }
        };
      }
      function kt(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[7]), u(e, "class", "modal-error svelte-1vdpm8p");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 128 && z(x, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function js(t) {
        let e, x, n, o, r = t[9].length > 0 && _t(t), l = t[1].length > 0 && wt(t), s = t[8].length > 0 && yt(t);
        function a(f, A) {
          return f[0].length === 0 && f[9].length === 0 && f[8].length === 0 && f[1].length === 0 ? Hs : f[0].length === 0 ? Os : Rs;
        }
        let c = a(t), E = c(t);
        return {
          c() {
            r && r.c(), e = g(), l && l.c(), x = g(), s && s.c(), n = g(), o = d("section"), E.c(), u(o, "class", "card list-card svelte-1vdpm8p");
          },
          m(f, A) {
            r && r.m(f, A), T(f, e, A), l && l.m(f, A), T(f, x, A), s && s.m(f, A), T(f, n, A), T(f, o, A), E.m(o, null);
          },
          p(f, A) {
            f[9].length > 0 ? r ? r.p(f, A) : (r = _t(f), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), f[1].length > 0 ? l ? l.p(f, A) : (l = wt(f), l.c(), l.m(x.parentNode, x)) : l && (l.d(1), l = null), f[8].length > 0 ? s ? s.p(f, A) : (s = yt(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), c === (c = a(f)) && E ? E.p(f, A) : (E.d(1), E = c(f), E && (E.c(), E.m(o, null)));
          },
          d(f) {
            f && (P(e), P(x), P(n), P(o)), r && r.d(f), l && l.d(f), s && s.d(f), E.d();
          }
        };
      }
      function Ns(t) {
        let e, x, n;
        return {
          c() {
            e = d("section"), x = d("p"), n = j(t[3]), u(x, "class", "error svelte-1vdpm8p"), u(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(o, r) {
            T(o, e, r), i(e, x), i(x, n);
          },
          p(o, r) {
            r & 8 && z(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function qs(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-1vdpm8p">Loading\u2026</p>', u(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function _t(t) {
        let e, x, n, o, r = A0(t[9]), l = [];
        for (let s = 0; s < r.length; s += 1) l[s] = bt(ht(t, r, s));
        return {
          c() {
            e = d("section"), x = d("div"), x.innerHTML = '<span class="material-icons section-icon svelte-1vdpm8p">favorite</span> <h2 class="svelte-1vdpm8p">Ongoing partners</h2>', n = g(), o = d("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            u(x, "class", "section-header svelte-1vdpm8p"), u(o, "class", "svelte-1vdpm8p"), u(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o);
            for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(o, null);
          },
          p(s, a) {
            if (a & 512) {
              r = A0(s[9]);
              let c;
              for (c = 0; c < r.length; c += 1) {
                const E = ht(s, r, c);
                l[c] ? l[c].p(E, a) : (l[c] = bt(E), l[c].c(), l[c].m(o, null));
              }
              for (; c < l.length; c += 1) l[c].d(1);
              l.length = r.length;
            }
          },
          d(s) {
            s && P(e), O0(l, s);
          }
        };
      }
      function bt(t) {
        let e, x, n, o, r, l, s = We(t[23]) + "", a, c, E, f = Qe(t[23]) + "", A, C, F, B, p;
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "favorite", o = g(), r = d("span"), l = d("span"), a = j(s), c = g(), E = d("span"), A = j(f), C = g(), F = d("span"), F.textContent = "chevron_right", p = g(), u(n, "class", "material-icons rel-icon active svelte-1vdpm8p"), u(l, "class", "rel-name svelte-1vdpm8p"), u(E, "class", "rel-sub svelte-1vdpm8p"), u(r, "class", "rel-main svelte-1vdpm8p"), u(F, "class", "material-icons chevron svelte-1vdpm8p"), u(x, "class", "rel-row svelte-1vdpm8p"), u(x, "href", B = "#/relationships/" + e0(t[23].rawToken)), u(e, "class", "svelte-1vdpm8p");
          },
          m(h, k) {
            T(h, e, k), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), i(r, E), i(E, A), i(x, C), i(x, F), i(e, p);
          },
          p(h, k) {
            k & 512 && s !== (s = We(h[23]) + "") && z(a, s), k & 512 && f !== (f = Qe(h[23]) + "") && z(A, f), k & 512 && B !== (B = "#/relationships/" + e0(h[23].rawToken)) && u(x, "href", B);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function wt(t) {
        let e, x, n, o, r = A0(t[1]), l = [];
        for (let s = 0; s < r.length; s += 1) l[s] = gt(mt(t, r, s));
        return {
          c() {
            e = d("section"), x = d("div"), x.innerHTML = '<span class="material-icons section-icon svelte-1vdpm8p">groups</span> <h2 class="svelte-1vdpm8p">Group encounters</h2>', n = g(), o = d("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            u(x, "class", "section-header svelte-1vdpm8p"), u(o, "class", "svelte-1vdpm8p"), u(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o);
            for (let c = 0; c < l.length; c += 1) l[c] && l[c].m(o, null);
          },
          p(s, a) {
            if (a & 2) {
              r = A0(s[1]);
              let c;
              for (c = 0; c < r.length; c += 1) {
                const E = mt(s, r, c);
                l[c] ? l[c].p(E, a) : (l[c] = gt(E), l[c].c(), l[c].m(o, null));
              }
              for (; c < l.length; c += 1) l[c].d(1);
              l.length = r.length;
            }
          },
          d(s) {
            s && P(e), O0(l, s);
          }
        };
      }
      function gt(t) {
        let e, x, n, o, r, l, s = Mt(t[26]) + "", a, c, E, f = It(t[26]) + "", A, C, F, B, p;
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "groups", o = g(), r = d("span"), l = d("span"), a = j(s), c = g(), E = d("span"), A = j(f), C = g(), F = d("span"), F.textContent = "chevron_right", p = g(), u(n, "class", "material-icons rel-icon active svelte-1vdpm8p"), u(l, "class", "rel-name svelte-1vdpm8p"), u(E, "class", "rel-sub svelte-1vdpm8p"), u(r, "class", "rel-main svelte-1vdpm8p"), u(F, "class", "material-icons chevron svelte-1vdpm8p"), u(x, "class", "rel-row svelte-1vdpm8p"), u(x, "href", B = "#/groups/" + e0(t[26].token)), u(e, "class", "svelte-1vdpm8p");
          },
          m(h, k) {
            T(h, e, k), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), i(r, E), i(E, A), i(x, C), i(x, F), i(e, p);
          },
          p(h, k) {
            k & 2 && s !== (s = Mt(h[26]) + "") && z(a, s), k & 2 && f !== (f = It(h[26]) + "") && z(A, f), k & 2 && B !== (B = "#/groups/" + e0(h[26].token)) && u(x, "href", B);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function yt(t) {
        let e, x, n, o = t[4] ? "expand_less" : "expand_more", r, l, s, a, c = t[8].length + "", E, f, A, C, F, B = t[4] && Pt(t);
        return {
          c() {
            e = d("section"), x = d("button"), n = d("span"), r = j(o), l = g(), s = d("span"), a = j("Archived partners ("), E = j(c), f = j(")"), A = g(), B && B.c(), u(n, "class", "material-icons toggle-icon svelte-1vdpm8p"), u(s, "class", "muted-label svelte-1vdpm8p"), u(x, "class", "collapse-toggle svelte-1vdpm8p"), u(e, "class", "card list-card svelte-1vdpm8p");
          },
          m(p, h) {
            T(p, e, h), i(e, x), i(x, n), i(n, r), i(x, l), i(x, s), i(s, a), i(s, E), i(s, f), i(e, A), B && B.m(e, null), C || (F = H(x, "click", t[17]), C = true);
          },
          p(p, h) {
            h & 16 && o !== (o = p[4] ? "expand_less" : "expand_more") && z(r, o), h & 256 && c !== (c = p[8].length + "") && z(E, c), p[4] ? B ? B.p(p, h) : (B = Pt(p), B.c(), B.m(e, null)) : B && (B.d(1), B = null);
          },
          d(p) {
            p && P(e), B && B.d(), C = false, F();
          }
        };
      }
      function Pt(t) {
        let e, x = A0(t[8]), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = Tt(pt(t, x, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            u(e, "class", "svelte-1vdpm8p");
          },
          m(o, r) {
            T(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 256) {
              x = A0(o[8]);
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = pt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = Tt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), O0(n, o);
          }
        };
      }
      function Tt(t) {
        let e, x, n, o, r, l, s = We(t[23]) + "", a, c, E, f = Qe(t[23]) + "", A, C, F, B, p;
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "favorite_border", o = g(), r = d("span"), l = d("span"), a = j(s), c = g(), E = d("span"), A = j(f), C = g(), F = d("span"), F.textContent = "chevron_right", p = g(), u(n, "class", "material-icons rel-icon ended svelte-1vdpm8p"), u(l, "class", "rel-name svelte-1vdpm8p"), u(E, "class", "rel-sub svelte-1vdpm8p"), u(r, "class", "rel-main svelte-1vdpm8p"), u(F, "class", "material-icons chevron svelte-1vdpm8p"), u(x, "class", "rel-row svelte-1vdpm8p"), u(x, "href", B = "#/relationships/" + e0(t[23].rawToken)), u(e, "class", "svelte-1vdpm8p");
          },
          m(h, k) {
            T(h, e, k), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), i(r, E), i(E, A), i(x, C), i(x, F), i(e, p);
          },
          p(h, k) {
            k & 256 && s !== (s = We(h[23]) + "") && z(a, s), k & 256 && f !== (f = Qe(h[23]) + "") && z(A, f), k & 256 && B !== (B = "#/relationships/" + e0(h[23].rawToken)) && u(x, "href", B);
          },
          d(h) {
            h && P(e);
          }
        };
      }
      function Rs(t) {
        let e, x, n, o = A0(t[0]), r = [];
        for (let l = 0; l < o.length; l += 1) r[l] = St(Dt(t, o, l));
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons section-icon svelte-1vdpm8p">check_circle_outline</span> <h2 class="svelte-1vdpm8p">One-time encounters</h2>', x = g(), n = d("ul");
            for (let l = 0; l < r.length; l += 1) r[l].c();
            u(e, "class", "section-header svelte-1vdpm8p"), u(n, "class", "svelte-1vdpm8p");
          },
          m(l, s) {
            T(l, e, s), T(l, x, s), T(l, n, s);
            for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(n, null);
          },
          p(l, s) {
            if (s & 1) {
              o = A0(l[0]);
              let a;
              for (a = 0; a < o.length; a += 1) {
                const c = Dt(l, o, a);
                r[a] ? r[a].p(c, s) : (r[a] = St(c), r[a].c(), r[a].m(n, null));
              }
              for (; a < r.length; a += 1) r[a].d(1);
              r.length = o.length;
            }
          },
          d(l) {
            l && (P(e), P(x), P(n)), O0(r, l);
          }
        };
      }
      function Os(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "No one-time encounters.", u(e, "class", "muted list-muted svelte-1vdpm8p");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Hs(t) {
        let e, x, n, o, r, l, s, a;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "people_outline", n = g(), o = d("p"), o.textContent = "No encounters recorded yet.", r = g(), l = d("button"), l.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, u(x, "class", "material-icons empty-icon svelte-1vdpm8p"), u(o, "class", "svelte-1vdpm8p"), u(l, "class", "btn-filled svelte-1vdpm8p"), u(e, "class", "empty-state svelte-1vdpm8p");
          },
          m(c, E) {
            T(c, e, E), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), s || (a = H(l, "click", t[18]), s = true);
          },
          p: X,
          d(c) {
            c && P(e), s = false, a();
          }
        };
      }
      function Us(t) {
        let e, x = e0(t[20].rawToken).slice(0, 12) + "", n, o;
        return {
          c() {
            e = d("span"), n = j(x), o = j("\u2026"), u(e, "class", "rel-sub enc-token svelte-1vdpm8p");
          },
          m(r, l) {
            T(r, e, l), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 1 && x !== (x = e0(r[20].rawToken).slice(0, 12) + "") && z(n, x);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function zs(t) {
        let e, x = t[20].note + "", n;
        return {
          c() {
            e = d("span"), n = j(x), u(e, "class", "rel-sub enc-note svelte-1vdpm8p");
          },
          m(o, r) {
            T(o, e, r), i(e, n);
          },
          p(o, r) {
            r & 1 && x !== (x = o[20].note + "") && z(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function St(t) {
        let e, x, n, o, r, l, s = t[20].date + "", a, c, E, f, A, C;
        function F(h, k) {
          return h[20].note ? zs : Us;
        }
        let B = F(t), p = B(t);
        return {
          c() {
            e = d("li"), x = d("a"), n = d("span"), n.textContent = "check_circle_outline", o = g(), r = d("span"), l = d("span"), a = j(s), c = g(), p.c(), E = g(), f = d("span"), f.textContent = "chevron_right", C = g(), u(n, "class", "material-icons rel-icon active svelte-1vdpm8p"), u(l, "class", "rel-name svelte-1vdpm8p"), u(r, "class", "rel-main svelte-1vdpm8p"), u(f, "class", "material-icons chevron svelte-1vdpm8p"), u(x, "class", "rel-row svelte-1vdpm8p"), u(x, "href", A = "#/encounters/" + e0(t[20].rawToken)), u(e, "class", "svelte-1vdpm8p");
          },
          m(h, k) {
            T(h, e, k), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(l, a), i(r, c), p.m(r, null), i(x, E), i(x, f), i(e, C);
          },
          p(h, k) {
            k & 1 && s !== (s = h[20].date + "") && z(a, s), B === (B = F(h)) && p ? p.p(h, k) : (p.d(1), p = B(h), p && (p.c(), p.m(r, null))), k & 1 && A !== (A = "#/encounters/" + e0(h[20].rawToken)) && u(x, "href", A);
          },
          d(h) {
            h && P(e), p.d();
          }
        };
      }
      function Gs(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A;
        e = new H0({});
        let C = t[5] && vt(t);
        function F(h, k) {
          return h[2] ? qs : h[3] ? Ns : js;
        }
        let B = F(t), p = B(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), r = d("h1"), r.textContent = "Encounters", l = g(), s = d("button"), s.innerHTML = '<span class="material-icons">add</span>', a = g(), C && C.c(), c = g(), p.c(), u(r, "class", "svelte-1vdpm8p"), u(s, "class", "fab svelte-1vdpm8p"), u(s, "title", "Add encounter"), u(o, "class", "page-header svelte-1vdpm8p"), u(n, "class", "svelte-1vdpm8p");
          },
          m(h, k) {
            k0(e, h, k), T(h, x, k), T(h, n, k), i(n, o), i(o, r), i(o, l), i(o, s), i(n, a), C && C.m(n, null), i(n, c), p.m(n, null), E = true, f || (A = H(s, "click", t[13]), f = true);
          },
          p(h, [k]) {
            h[5] ? C ? C.p(h, k) : (C = vt(h), C.c(), C.m(n, c)) : C && (C.d(1), C = null), B === (B = F(h)) && p ? p.p(h, k) : (p.d(1), p = B(h), p && (p.c(), p.m(n, null)));
          },
          i(h) {
            E || (d0(e.$$.fragment, h), E = true);
          },
          o(h) {
            C0(e.$$.fragment, h), E = false;
          },
          d(h) {
            h && (P(x), P(n)), _0(e, h), C && C.d(), p.d(), f = false, A();
          }
        };
      }
      function We(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function Qe(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function Mt(t) {
        return t.name || "Group encounter";
      }
      function It(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function Vs(t, e, x) {
        let n, o, r = [], l = [], s = [], a = true, c = null, E = false, f = false, A = false, C = null;
        y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
          F();
        });
        function F() {
          x(2, a = true), x(3, c = null);
          try {
            x(0, r = Ao()), x(11, l = Kx()), x(1, s = Fo());
          } catch (_) {
            x(3, c = _.message);
          } finally {
            x(2, a = false);
          }
        }
        async function B() {
          x(6, A = true), x(7, C = null);
          try {
            const _ = ye(32), w = de(), y = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await po(_, y, true, w, null), x(5, f = false), E0("/groups/" + e0(_));
          } catch (_) {
            x(7, C = _.message);
          } finally {
            x(6, A = false);
          }
        }
        function p(_) {
          mx.call(this, t, _);
        }
        const h = () => x(5, f = true), k = () => {
          x(5, f = false), E0("/encounter-exchange");
        }, b = () => x(5, f = false), m = () => {
          A || x(5, f = false);
        }, D = () => x(4, E = !E), v = () => x(5, f = true);
        return t.$$.update = () => {
          t.$$.dirty & 2048 && x(9, n = l.filter((_) => !_.archived)), t.$$.dirty & 2048 && x(8, o = l.filter((_) => _.archived));
        }, [
          r,
          s,
          a,
          c,
          E,
          f,
          A,
          C,
          o,
          n,
          B,
          l,
          p,
          h,
          k,
          b,
          m,
          D,
          v
        ];
      }
      class Ks extends m0 {
        constructor(e) {
          super(), p0(this, e, Vs, Gs, F0, {});
        }
      }
      function Ys(t) {
        let e, x, n, o, r = t[7] ? "favorite" : "favorite_border", l, s, a, c, E = t[7] ? "Active partner" : "Ended", f, A, C, F, B, p, h = Je(t[0].createdAt) + "", k, b, m, D, v, _, w, y, M, L, S = t[3] && Lt(t), N = t[0].archived && jt(), I = t[0].endedAt && Nt(t);
        function q(V, l0) {
          return V[4] ? Js : Qs;
        }
        let G = q(t), U = G(t);
        function W(V, l0) {
          return V[7] ? Zs : Xs;
        }
        let Y = W(t), O = Y(t);
        function R(V, l0) {
          return V[0].archived ? n9 : V[6] === "archive" ? t9 : x9;
        }
        let $ = R(t), J = $(t);
        return {
          c() {
            S && S.c(), e = g(), x = d("section"), n = d("div"), o = d("span"), l = j(r), s = g(), a = d("div"), c = d("span"), f = j(E), A = g(), N && N.c(), C = g(), F = d("div"), B = d("span"), p = j("Since "), k = j(h), b = g(), I && I.c(), m = g(), D = d("section"), U.c(), v = g(), _ = d("div"), w = g(), O.c(), y = g(), M = d("div"), L = g(), J.c(), u(o, "class", "material-icons status-icon svelte-dnij8l"), o0(o, "active", t[7]), o0(o, "ended", !t[7]), u(c, "class", "status-label svelte-dnij8l"), o0(c, "active", t[7]), u(a, "class", "status-text svelte-dnij8l"), u(n, "class", "status-row svelte-dnij8l"), u(F, "class", "dates svelte-dnij8l"), u(x, "class", "card pad svelte-dnij8l"), u(_, "class", "divider svelte-dnij8l"), u(M, "class", "divider svelte-dnij8l"), u(D, "class", "card svelte-dnij8l");
          },
          m(V, l0) {
            S && S.m(V, l0), T(V, e, l0), T(V, x, l0), i(x, n), i(n, o), i(o, l), i(n, s), i(n, a), i(a, c), i(c, f), i(a, A), N && N.m(a, null), i(x, C), i(x, F), i(F, B), i(B, p), i(B, k), i(F, b), I && I.m(F, null), T(V, m, l0), T(V, D, l0), U.m(D, null), i(D, v), i(D, _), i(D, w), O.m(D, null), i(D, y), i(D, M), i(D, L), J.m(D, null);
          },
          p(V, l0) {
            V[3] ? S ? S.p(V, l0) : (S = Lt(V), S.c(), S.m(e.parentNode, e)) : S && (S.d(1), S = null), l0 & 128 && r !== (r = V[7] ? "favorite" : "favorite_border") && z(l, r), l0 & 128 && o0(o, "active", V[7]), l0 & 128 && o0(o, "ended", !V[7]), l0 & 128 && E !== (E = V[7] ? "Active partner" : "Ended") && z(f, E), l0 & 128 && o0(c, "active", V[7]), V[0].archived ? N || (N = jt(), N.c(), N.m(a, null)) : N && (N.d(1), N = null), l0 & 1 && h !== (h = Je(V[0].createdAt) + "") && z(k, h), V[0].endedAt ? I ? I.p(V, l0) : (I = Nt(V), I.c(), I.m(F, null)) : I && (I.d(1), I = null), G === (G = q(V)) && U ? U.p(V, l0) : (U.d(1), U = G(V), U && (U.c(), U.m(D, v))), Y === (Y = W(V)) && O ? O.p(V, l0) : (O.d(1), O = Y(V), O && (O.c(), O.m(D, y))), $ === ($ = R(V)) && J ? J.p(V, l0) : (J.d(1), J = $(V), J && (J.c(), J.m(D, null)));
          },
          d(V) {
            V && (P(e), P(x), P(m), P(D)), S && S.d(V), N && N.d(), I && I.d(), U.d(), O.d(), J.d();
          }
        };
      }
      function Ws(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-dnij8l">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-dnij8l">\u2190 Back to encounters</a>', u(e, "class", "card pad svelte-dnij8l");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Lt(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = g(), o = j(t[3]), u(x, "class", "material-icons svelte-dnij8l"), u(e, "class", "toast error-toast svelte-dnij8l");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 8 && z(o, r[3]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function jt(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "archived", u(e, "class", "badge archived svelte-dnij8l");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Nt(t) {
        let e, x, n = Je(t[0].endedAt) + "", o;
        return {
          c() {
            e = d("span"), x = j("Ended "), o = j(n);
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, o);
          },
          p(r, l) {
            l & 1 && n !== (n = Je(r[0].endedAt) + "") && z(o, n);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function Qs(t) {
        let e, x, n, o, r = (t[0].name ? t[0].name : "Add nickname") + "", l, s, a, c, E, f, A = t[0].name && qt();
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "edit", n = g(), o = d("span"), l = j(r), s = g(), A && A.c(), a = g(), c = d("span"), c.textContent = "chevron_right", u(x, "class", "material-icons action-icon svelte-dnij8l"), u(o, "class", "action-label svelte-dnij8l"), u(c, "class", "material-icons action-chevron svelte-dnij8l"), u(e, "class", "action-row svelte-dnij8l");
          },
          m(C, F) {
            T(C, e, F), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), A && A.m(o, null), i(e, a), i(e, c), E || (f = H(e, "click", t[13]), E = true);
          },
          p(C, F) {
            F & 1 && r !== (r = (C[0].name ? C[0].name : "Add nickname") + "") && z(l, r), C[0].name ? A || (A = qt(), A.c(), A.m(o, null)) : A && (A.d(1), A = null);
          },
          d(C) {
            C && P(e), A && A.d(), E = false, f();
          }
        };
      }
      function Js(t) {
        let e, x, n, o, r, l, s, a, c, E, f = t[2] ? "Saving\u2026" : "Save", A, C, F;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "edit", n = g(), o = d("form"), r = d("input"), l = g(), s = d("div"), a = d("button"), a.textContent = "Cancel", c = g(), E = d("button"), A = j(f), u(x, "class", "material-icons action-icon svelte-dnij8l"), u(r, "type", "text"), u(r, "placeholder", "Optional nickname"), u(r, "maxlength", "64"), r.autofocus = true, u(r, "class", "svelte-dnij8l"), u(a, "type", "button"), u(a, "class", "btn-text svelte-dnij8l"), u(E, "type", "submit"), u(E, "class", "btn-filled-sm svelte-dnij8l"), E.disabled = t[2], u(s, "class", "name-actions svelte-dnij8l"), u(o, "class", "name-form svelte-dnij8l"), u(e, "class", "action-row edit-name-row svelte-dnij8l");
          },
          m(B, p) {
            T(B, e, p), i(e, x), i(e, n), i(e, o), i(o, r), t0(r, t[5]), i(o, l), i(o, s), i(s, a), i(s, c), i(s, E), i(E, A), r.focus(), C || (F = [
              H(r, "input", t[16]),
              H(a, "click", t[14]),
              H(o, "submit", V0(t[9]))
            ], C = true);
          },
          p(B, p) {
            p & 32 && r.value !== B[5] && t0(r, B[5]), p & 4 && f !== (f = B[2] ? "Saving\u2026" : "Save") && z(A, f), p & 4 && (E.disabled = B[2]);
          },
          d(B) {
            B && P(e), C = false, a0(F);
          }
        };
      }
      function qt(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Tap to change", u(e, "class", "action-sub svelte-dnij8l");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Xs(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "favorite", n = g(), o = d("span"), o.textContent = "Mark as active again", u(x, "class", "material-icons action-icon primary svelte-dnij8l"), u(o, "class", "action-label primary svelte-dnij8l"), u(e, "class", "action-row svelte-dnij8l"), e.disabled = t[2];
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o), r || (l = H(e, "click", t[11]), r = true);
          },
          p(s, a) {
            a & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && P(e), r = false, l();
          }
        };
      }
      function Zs(t) {
        let e;
        function x(r, l) {
          return r[6] === "end" ? e9 : $s;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            o.c(), e = I0();
          },
          m(r, l) {
            o.m(r, l), T(r, e, l);
          },
          p(r, l) {
            n === (n = x(r)) && o ? o.p(r, l) : (o.d(1), o = n(r), o && (o.c(), o.m(e.parentNode, e)));
          },
          d(r) {
            r && P(e), o.d(r);
          }
        };
      }
      function $s(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-dnij8l">heart_broken</span> <span class="action-label danger svelte-dnij8l">Mark as ended</span>', u(e, "class", "action-row svelte-dnij8l");
          },
          m(o, r) {
            T(o, e, r), x || (n = H(e, "click", t[18]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function e9(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Saving\u2026" : "Mark as ended", c, E, f;
        return {
          c() {
            e = d("div"), x = d("p"), x.textContent = "Mark this partnership as ended?", n = g(), o = d("div"), r = d("button"), r.textContent = "Cancel", l = g(), s = d("button"), c = j(a), u(x, "class", "confirm-text svelte-dnij8l"), u(r, "class", "btn-text svelte-dnij8l"), u(s, "class", "btn-danger-sm svelte-dnij8l"), s.disabled = t[2], u(o, "class", "confirm-actions svelte-dnij8l"), u(e, "class", "confirm-row svelte-dnij8l");
          },
          m(A, C) {
            T(A, e, C), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, c), E || (f = [
              H(r, "click", t[17]),
              H(s, "click", t[10])
            ], E = true);
          },
          p(A, C) {
            C & 4 && a !== (a = A[2] ? "Saving\u2026" : "Mark as ended") && z(c, a), C & 4 && (s.disabled = A[2]);
          },
          d(A) {
            A && P(e), E = false, a0(f);
          }
        };
      }
      function x9(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon svelte-dnij8l">archive</span> <span class="action-label svelte-dnij8l">Archive</span> <span class="action-sub-right svelte-dnij8l">Hide from main list</span>', u(e, "class", "action-row svelte-dnij8l");
          },
          m(o, r) {
            T(o, e, r), x || (n = H(e, "click", t[22]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function t9(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Saving\u2026" : "Archive", c, E, f;
        return {
          c() {
            e = d("div"), x = d("p"), x.textContent = "Archive this partner? They will be hidden from the main list.", n = g(), o = d("div"), r = d("button"), r.textContent = "Cancel", l = g(), s = d("button"), c = j(a), u(x, "class", "confirm-text svelte-dnij8l"), u(r, "class", "btn-text svelte-dnij8l"), u(s, "class", "btn-filled-sm svelte-dnij8l"), s.disabled = t[2], u(o, "class", "confirm-actions svelte-dnij8l"), u(e, "class", "confirm-row svelte-dnij8l");
          },
          m(A, C) {
            T(A, e, C), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, c), E || (f = [
              H(r, "click", t[20]),
              H(s, "click", t[21])
            ], E = true);
          },
          p(A, C) {
            C & 4 && a !== (a = A[2] ? "Saving\u2026" : "Archive") && z(c, a), C & 4 && (s.disabled = A[2]);
          },
          d(A) {
            A && P(e), E = false, a0(f);
          }
        };
      }
      function n9(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "unarchive", n = g(), o = d("span"), o.textContent = "Unarchive", u(x, "class", "material-icons action-icon primary svelte-dnij8l"), u(o, "class", "action-label primary svelte-dnij8l"), u(e, "class", "action-row svelte-dnij8l"), e.disabled = t[2];
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(e, n), i(e, o), r || (l = H(e, "click", t[19]), r = true);
          },
          p(s, a) {
            a & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && P(e), r = false, l();
          }
        };
      }
      function o9(t) {
        let e, x, n, o, r, l, s, a = (t[1] ? "Partner not found" : t[8]) + "", c, E, f;
        e = new H0({});
        function A(B, p) {
          if (B[1]) return Ws;
          if (B[0]) return Ys;
        }
        let C = A(t), F = C && C(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), r = d("a"), r.innerHTML = '<span class="material-icons svelte-dnij8l">arrow_back</span>', l = g(), s = d("h1"), c = j(a), E = g(), F && F.c(), u(r, "class", "back-btn svelte-dnij8l"), u(r, "href", "#/encounters"), u(s, "class", "svelte-dnij8l"), u(o, "class", "page-header svelte-dnij8l"), u(n, "class", "svelte-dnij8l");
          },
          m(B, p) {
            k0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(o, r), i(o, l), i(o, s), i(s, c), i(n, E), F && F.m(n, null), f = true;
          },
          p(B, [p]) {
            (!f || p & 258) && a !== (a = (B[1] ? "Partner not found" : B[8]) + "") && z(c, a), C === (C = A(B)) && F ? F.p(B, p) : (F && F.d(1), F = C && C(B), F && (F.c(), F.m(n, null)));
          },
          i(B) {
            f || (d0(e.$$.fragment, B), f = true);
          },
          o(B) {
            C0(e.$$.fragment, B), f = false;
          },
          d(B) {
            B && (P(x), P(n)), _0(e, B), F && F.d();
          }
        };
      }
      function Je(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function r9(t, e, x) {
        let n, o, { params: r = {} } = e, l = null, s = false, a = false, c = null, E = false, f = "", A = null;
        y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
          C();
        });
        function C() {
          const S = Kx(), N = r.rawTokenHex;
          x(0, l = S.find((I) => e0(I.rawToken) === N) ?? null), l || x(1, s = true);
        }
        function F() {
          return e0(l.rawToken);
        }
        async function B() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              const S = f.trim();
              await Le(F(), {
                name: S || null
              }), C(), x(4, E = false);
            } catch (S) {
              x(3, c = S.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function p() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              const S = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Le(F(), {
                endedAt: S
              }), C();
            } catch (S) {
              x(3, c = S.message);
            } finally {
              x(2, a = false), x(6, A = null);
            }
          }
        }
        async function h() {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              await Le(F(), {
                endedAt: null
              }), C();
            } catch (S) {
              x(3, c = S.message);
            } finally {
              x(2, a = false);
            }
          }
        }
        async function k(S) {
          if (!a) {
            x(2, a = true), x(3, c = null);
            try {
              await Le(F(), {
                archived: S
              }), C();
            } catch (N) {
              x(3, c = N.message);
            } finally {
              x(2, a = false), x(6, A = null);
            }
          }
        }
        function b() {
          x(5, f = l.name ?? ""), x(4, E = true), x(3, c = null);
        }
        function m() {
          x(4, E = false), x(3, c = null);
        }
        function D() {
          f = this.value, x(5, f);
        }
        const v = () => x(6, A = null), _ = () => x(6, A = "end"), w = () => k(false), y = () => x(6, A = null), M = () => k(true), L = () => x(6, A = "archive");
        return t.$$set = (S) => {
          "params" in S && x(15, r = S.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(8, n = l?.name || (l?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && x(7, o = l && !l.endedAt);
        }, [
          l,
          s,
          a,
          c,
          E,
          f,
          A,
          o,
          n,
          B,
          p,
          h,
          k,
          b,
          m,
          r,
          D,
          v,
          _,
          w,
          y,
          M,
          L
        ];
      }
      class l9 extends m0 {
        constructor(e) {
          super(), p0(this, e, r9, o9, F0, {
            params: 15
          });
        }
      }
      function Rt(t, e, x) {
        const n = t.slice();
        n[18] = e[x], n[21] = x;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function Ot(t, e, x) {
        const n = t.slice();
        return n[22] = e[x], n[23] = e, n[24] = x, n;
      }
      function s9(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved. (No encounters on record to notify.)`, u(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function a9(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved.`, u(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function i9(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check_circle</span>
      Result saved. Partners notified.`, u(e, "class", "toast success svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ht(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = g(), o = j(t[5]), u(x, "class", "material-icons svelte-8u23ha"), u(e, "class", "toast error-toast svelte-8u23ha");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 32 && z(o, r[5]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function Ut(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b, m, D = t[3] && t[4] === "computing" ? "Saving\u2026" : "Save result", v, _, w, y = A0(R0), M = [];
        for (let S = 0; S < y.length; S += 1) M[S] = zt(Ot(t, y, S));
        let L = t[4] === "computing" && Gt();
        return {
          c() {
            e = d("section"), x = d("h2"), x.textContent = "Record a result", n = g(), o = d("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, r = g(), l = d("form"), s = d("label"), a = j(`Test date
          `), c = d("input"), E = g(), f = d("fieldset"), A = d("legend"), A.textContent = "Positive results", C = g(), F = d("div");
            for (let S = 0; S < M.length; S += 1) M[S].c();
            B = g(), L && L.c(), p = g(), h = d("div"), k = d("button"), k.textContent = "Cancel", b = g(), m = d("button"), v = j(D), u(x, "class", "svelte-8u23ha"), u(o, "class", "help svelte-8u23ha"), u(c, "type", "date"), c.required = true, u(c, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), u(c, "class", "svelte-8u23ha"), u(s, "class", "svelte-8u23ha"), u(A, "class", "svelte-8u23ha"), u(F, "class", "disease-grid svelte-8u23ha"), u(f, "class", "svelte-8u23ha"), u(k, "type", "button"), u(k, "class", "btn-text svelte-8u23ha"), u(m, "type", "submit"), u(m, "class", "btn-filled svelte-8u23ha"), m.disabled = t[3], u(h, "class", "form-actions svelte-8u23ha"), u(l, "class", "svelte-8u23ha"), u(e, "class", "card form-card svelte-8u23ha");
          },
          m(S, N) {
            T(S, e, N), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), i(l, s), i(s, a), i(s, c), t0(c, t[0]), i(l, E), i(l, f), i(f, A), i(f, C), i(f, F);
            for (let I = 0; I < M.length; I += 1) M[I] && M[I].m(F, null);
            i(l, B), L && L.m(l, null), i(l, p), i(l, h), i(h, k), i(h, b), i(h, m), i(m, v), _ || (w = [
              H(c, "input", t[11]),
              H(k, "click", t[13]),
              H(l, "submit", V0(t[8]))
            ], _ = true);
          },
          p(S, N) {
            if (N & 1 && t0(c, S[0]), N & 2) {
              y = A0(R0);
              let I;
              for (I = 0; I < y.length; I += 1) {
                const q = Ot(S, y, I);
                M[I] ? M[I].p(q, N) : (M[I] = zt(q), M[I].c(), M[I].m(F, null));
              }
              for (; I < M.length; I += 1) M[I].d(1);
              M.length = y.length;
            }
            S[4] === "computing" ? L || (L = Gt(), L.c(), L.m(l, p)) : L && (L.d(1), L = null), N & 24 && D !== (D = S[3] && S[4] === "computing" ? "Saving\u2026" : "Save result") && z(v, D), N & 8 && (m.disabled = S[3]);
          },
          d(S) {
            S && P(e), O0(M, S), L && L.d(), _ = false, a0(w);
          }
        };
      }
      function zt(t) {
        let e, x, n, o = he[t[22]] + "", r, l, s, a;
        function c() {
          t[12].call(x, t[22]);
        }
        return {
          c() {
            e = d("label"), x = d("input"), n = g(), r = j(o), l = g(), u(x, "type", "checkbox"), u(x, "class", "svelte-8u23ha"), u(e, "class", "checkbox-label svelte-8u23ha");
          },
          m(E, f) {
            T(E, e, f), i(e, x), x.checked = t[1][t[22]], i(e, n), i(e, r), i(e, l), s || (a = H(x, "change", c), s = true);
          },
          p(E, f) {
            t = E, f & 2 && (x.checked = t[1][t[22]]);
          },
          d(E) {
            E && P(e), s = false, a();
          }
        };
      }
      function Gt(t) {
        let e;
        return {
          c() {
            e = d("p"), e.innerHTML = `<span class="material-icons spin svelte-8u23ha">autorenew</span>
            Notifying\u2026`, u(e, "class", "computing-status svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function c9(t) {
        let e, x = A0([
          ...t[6]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = Kt(Rt(t, x, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            u(e, "class", "svelte-8u23ha");
          },
          m(o, r) {
            T(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 712) {
              x = A0([
                ...o[6]
              ].reverse());
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Rt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = Kt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), O0(n, o);
          }
        };
      }
      function E9(t) {
        let e, x, n, o, r, l, s, a;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "science", n = g(), o = d("p"), o.textContent = "No results recorded yet.", r = g(), l = d("button"), l.innerHTML = `<span class="material-icons">add</span>
          Record first result`, u(x, "class", "material-icons empty-icon svelte-8u23ha"), u(o, "class", "svelte-8u23ha"), u(l, "class", "btn-filled svelte-8u23ha"), u(e, "class", "empty-state svelte-8u23ha");
          },
          m(c, E) {
            T(c, e, E), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), s || (a = H(l, "click", t[14]), s = true);
          },
          p: X,
          d(c) {
            c && P(e), s = false, a();
          }
        };
      }
      function u9(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Negative", u(e, "class", "badge negative svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function f9(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Positive", u(e, "class", "badge positive svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Vt(t) {
        let e, x = t[18].positiveDiseases.map(t[15]).join(", ") + "", n, o, r;
        function l(c, E) {
          return c[18].hasNotified ? B9 : d9;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = d("div"), n = j(x), o = g(), a.c(), r = I0(), u(e, "class", "diseases svelte-8u23ha");
          },
          m(c, E) {
            T(c, e, E), i(e, n), T(c, o, E), a.m(c, E), T(c, r, E);
          },
          p(c, E) {
            E & 64 && x !== (x = c[18].positiveDiseases.map(c[15]).join(", ") + "") && z(n, x), s === (s = l(c)) && a ? a.p(c, E) : (a.d(1), a = s(c), a && (a.c(), a.m(r.parentNode, r)));
          },
          d(c) {
            c && (P(e), P(o), P(r)), a.d(c);
          }
        };
      }
      function d9(t) {
        let e, x, n, o, r = t[7] === t[19] ? "Notifying\u2026" : "Notify now", l, s, a;
        function c() {
          return t[16](t[19], t[18]);
        }
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "Partners not yet notified", n = g(), o = d("button"), l = j(r), u(x, "class", "not-notified svelte-8u23ha"), u(o, "class", "btn-text-small svelte-8u23ha"), o.disabled = t[3], u(e, "class", "notify-row svelte-8u23ha");
          },
          m(E, f) {
            T(E, e, f), i(e, x), i(e, n), i(e, o), i(o, l), s || (a = H(o, "click", c), s = true);
          },
          p(E, f) {
            t = E, f & 192 && r !== (r = t[7] === t[19] ? "Notifying\u2026" : "Notify now") && z(l, r), f & 8 && (o.disabled = t[3]);
          },
          d(E) {
            E && P(e), s = false, a();
          }
        };
      }
      function B9(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-8u23ha">check</span>
                    Partners notified`, u(e, "class", "notified svelte-8u23ha");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Kt(t) {
        let e, x, n = t[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, r, l, s, a, c = t[18].date + "", E, f, A, C;
        function F(k, b) {
          return k[18].positiveDiseases.length > 0 ? f9 : u9;
        }
        let B = F(t), p = B(t), h = t[18].positiveDiseases.length > 0 && Vt(t);
        return {
          c() {
            e = d("li"), x = d("span"), o = j(n), r = g(), l = d("div"), s = d("div"), a = d("span"), E = j(c), f = g(), p.c(), A = g(), h && h.c(), C = g(), u(x, "class", "material-icons result-icon svelte-8u23ha"), o0(x, "positive", t[18].positiveDiseases.length > 0), o0(x, "negative", t[18].positiveDiseases.length === 0), u(a, "class", "result-date svelte-8u23ha"), u(s, "class", "result-row svelte-8u23ha"), u(l, "class", "result-body svelte-8u23ha"), u(e, "class", "svelte-8u23ha");
          },
          m(k, b) {
            T(k, e, b), i(e, x), i(x, o), i(e, r), i(e, l), i(l, s), i(s, a), i(a, E), i(s, f), p.m(s, null), i(l, A), h && h.m(l, null), i(e, C);
          },
          p(k, b) {
            b & 64 && n !== (n = k[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && z(o, n), b & 64 && o0(x, "positive", k[18].positiveDiseases.length > 0), b & 64 && o0(x, "negative", k[18].positiveDiseases.length === 0), b & 64 && c !== (c = k[18].date + "") && z(E, c), B !== (B = F(k)) && (p.d(1), p = B(k), p && (p.c(), p.m(s, null))), k[18].positiveDiseases.length > 0 ? h ? h.p(k, b) : (h = Vt(k), h.c(), h.m(l, null)) : h && (h.d(1), h = null);
          },
          d(k) {
            k && P(e), p.d(), h && h.d();
          }
        };
      }
      function C9(t) {
        let e, x, n, o, r, l, s, a, c = t[2] ? "close" : "add", E, f, A, C, F, B, p, h, k, b;
        e = new H0({});
        function m(S, N) {
          if (S[4] === "done") return i9;
          if (S[4] === "done_negative") return a9;
          if (S[4] === "done_no_encounters") return s9;
        }
        let D = m(t), v = D && D(t), _ = t[5] && Ht(t), w = t[2] && Ut(t);
        function y(S, N) {
          return S[6].length === 0 ? E9 : c9;
        }
        let M = y(t), L = M(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), r = d("h1"), r.textContent = "Test Results", l = g(), s = d("button"), a = d("span"), E = j(c), A = g(), v && v.c(), C = g(), _ && _.c(), F = g(), w && w.c(), B = g(), p = d("section"), L.c(), u(r, "class", "svelte-8u23ha"), u(a, "class", "material-icons"), u(s, "class", "fab svelte-8u23ha"), u(s, "title", f = t[2] ? "Cancel" : "Record new result"), u(o, "class", "page-header svelte-8u23ha"), u(p, "class", "card list-card svelte-8u23ha"), u(n, "class", "svelte-8u23ha");
          },
          m(S, N) {
            k0(e, S, N), T(S, x, N), T(S, n, N), i(n, o), i(o, r), i(o, l), i(o, s), i(s, a), i(a, E), i(n, A), v && v.m(n, null), i(n, C), _ && _.m(n, null), i(n, F), w && w.m(n, null), i(n, B), i(n, p), L.m(p, null), h = true, k || (b = H(s, "click", t[10]), k = true);
          },
          p(S, [N]) {
            (!h || N & 4) && c !== (c = S[2] ? "close" : "add") && z(E, c), (!h || N & 4 && f !== (f = S[2] ? "Cancel" : "Record new result")) && u(s, "title", f), D !== (D = m(S)) && (v && v.d(1), v = D && D(S), v && (v.c(), v.m(n, C))), S[5] ? _ ? _.p(S, N) : (_ = Ht(S), _.c(), _.m(n, F)) : _ && (_.d(1), _ = null), S[2] ? w ? w.p(S, N) : (w = Ut(S), w.c(), w.m(n, B)) : w && (w.d(1), w = null), M === (M = y(S)) && L ? L.p(S, N) : (L.d(1), L = M(S), L && (L.c(), L.m(p, null)));
          },
          i(S) {
            h || (d0(e.$$.fragment, S), h = true);
          },
          o(S) {
            C0(e.$$.fragment, S), h = false;
          },
          d(S) {
            S && (P(x), P(n)), _0(e, S), v && v.d(), _ && _.d(), w && w.d(), L.d(), k = false, b();
          }
        };
      }
      const A9 = 20, Yt = 50, F9 = 100;
      function D9(t, e, x) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, r = false, l = false, s = null, a = null, c = [], E = null;
        y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
          x(6, c = Oe());
        });
        async function f(D, v) {
          const _ = q0(), w = de(), y = [
            ..._.encounters.map((s0) => Z0(s0.rawToken, s0.theirContactId, s0.submitIndex)),
            ...(_.relationships || []).map((s0) => Z0(s0.rawToken, s0.theirContactId, s0.submitIndex))
          ], M = Yt + Math.floor(Math.random() * (F9 - Yt + 1)), L = [
            ...y
          ];
          for (; L.length < M; ) L.push(ye(32));
          for (let s0 = L.length - 1; s0 > 0; s0--) {
            const Q = Math.floor(Math.random() * (s0 + 1));
            [L[s0], L[Q]] = [
              L[Q],
              L[s0]
            ];
          }
          const S = L.map((s0) => $0(s0)), N = to(w), I = D.replace(/-/g, ""), q = v.map((s0) => Co[s0] ?? s0).join(""), G = new TextEncoder().encode("1" + I + q), U = Pe(N, G), W = $0(U), Y = new TextEncoder(), O = JSON.stringify(S), R = Y.encode(O).length + Y.encode(W).length, $ = new Uint8Array(R), J = Y.encode(O), V = Y.encode(W);
          $.set(J, 0), $.set(V, J.length);
          const l0 = ml($);
          let c0 = A9, n0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let s0 = 0; s0 < 2; s0++) {
            const { counter: Q } = hl(n0, l0, c0), x0 = {
              tokens: S,
              created_at: n0,
              submission_type: "self_reported",
              encrypted_payload: W,
              pow_counter: Q
            };
            try {
              await Jl(x0);
              break;
            } catch (r0) {
              if (s0 === 0 && r0.statusCode === 400) {
                let B0 = false;
                if (r0.powDifficulty && r0.powDifficulty > c0 && (c0 = r0.powDifficulty, B0 = true), r0.serverTime && (n0 = r0.serverTime, B0 = true), B0) continue;
              }
              throw r0;
            }
          }
          await as();
        }
        async function A() {
          if (!l) {
            x(3, l = true), x(5, a = null), x(4, s = null);
            try {
              const D = R0.filter((_) => o[_]), v = await ss(n, D);
              if (D.length > 0) {
                const _ = q0();
                _.encounters.length > 0 || (_.relationships || []).length > 0 ? (x(4, s = "computing"), await new Promise((y) => setTimeout(y, 30)), await f(n, D), await dx(v), x(4, s = "done")) : (await dx(v), x(4, s = "done_no_encounters"));
              } else x(4, s = "done_negative");
              x(1, o = {}), x(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), x(6, c = Oe()), x(2, r = false);
            } catch (D) {
              x(5, a = D.message), x(4, s = null);
            } finally {
              x(3, l = false);
            }
          }
        }
        async function C(D, v) {
          if (!l) {
            x(3, l = true), x(7, E = D), x(5, a = null);
            try {
              const _ = q0();
              if (_.encounters.length === 0 && (_.relationships || []).length === 0) {
                x(5, a = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((w) => setTimeout(w, 30)), await f(v.date, v.positiveDiseases), await dx(D), x(6, c = Oe());
            } catch (_) {
              x(5, a = "Notification failed: " + _.message);
            } finally {
              x(3, l = false), x(7, E = null);
            }
          }
        }
        const F = () => {
          x(2, r = !r), x(5, a = null), x(4, s = null);
        };
        function B() {
          n = this.value, x(0, n);
        }
        function p(D) {
          o[D] = this.checked, x(1, o);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          E,
          A,
          C,
          F,
          B,
          p,
          () => {
            x(2, r = false), x(4, s = null), x(5, a = null);
          },
          () => x(2, r = true),
          (D) => he[D] ?? D,
          (D, v) => C(D, v)
        ];
      }
      class p9 extends m0 {
        constructor(e) {
          super(), p0(this, e, D9, C9, F0, {});
        }
      }
      function Wt(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = `<span class="material-icons svelte-zjyqy2">check_circle</span>
      Password changed successfully.`, u(e, "class", "success-banner svelte-zjyqy2");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Qt(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[4]), u(e, "class", "error svelte-zjyqy2");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 16 && z(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function m9(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b, m, D, v = t[3] ? "Changing password\u2026" : "Change password", _, w, y, M, L, S = t[5] && Wt(), N = t[4] && Qt(t);
        return {
          c() {
            e = d("main"), x = d("a"), x.innerHTML = `<span class="material-icons svelte-zjyqy2">arrow_back</span>
    Back`, n = g(), o = d("h1"), o.textContent = "Change password", r = g(), S && S.c(), l = g(), s = d("form"), a = d("label"), c = j(`Current password
      `), E = d("input"), f = g(), A = d("label"), C = j(`New password
      `), F = d("input"), B = g(), p = d("label"), h = j(`Confirm new password
      `), k = d("input"), b = g(), N && N.c(), m = g(), D = d("button"), _ = j(v), w = g(), y = d("p"), y.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, u(x, "href", "#/home"), u(x, "class", "back-link svelte-zjyqy2"), u(o, "class", "svelte-zjyqy2"), u(E, "type", "password"), E.required = true, u(E, "autocomplete", "current-password"), u(E, "class", "svelte-zjyqy2"), u(a, "class", "svelte-zjyqy2"), u(F, "type", "password"), F.required = true, u(F, "autocomplete", "new-password"), u(F, "minlength", "12"), u(F, "class", "svelte-zjyqy2"), u(A, "class", "svelte-zjyqy2"), u(k, "type", "password"), k.required = true, u(k, "autocomplete", "new-password"), u(k, "class", "svelte-zjyqy2"), u(p, "class", "svelte-zjyqy2"), u(D, "type", "submit"), D.disabled = t[3], u(D, "class", "svelte-zjyqy2"), u(s, "class", "svelte-zjyqy2"), u(y, "class", "privacy-note svelte-zjyqy2"), u(e, "class", "svelte-zjyqy2");
          },
          m(I, q) {
            T(I, e, q), i(e, x), i(e, n), i(e, o), i(e, r), S && S.m(e, null), i(e, l), i(e, s), i(s, a), i(a, c), i(a, E), t0(E, t[0]), i(s, f), i(s, A), i(A, C), i(A, F), t0(F, t[1]), i(s, B), i(s, p), i(p, h), i(p, k), t0(k, t[2]), i(s, b), N && N.m(s, null), i(s, m), i(s, D), i(D, _), i(e, w), i(e, y), M || (L = [
              H(E, "input", t[7]),
              H(F, "input", t[8]),
              H(k, "input", t[9]),
              H(s, "submit", V0(t[6]))
            ], M = true);
          },
          p(I, [q]) {
            I[5] ? S || (S = Wt(), S.c(), S.m(e, l)) : S && (S.d(1), S = null), q & 1 && E.value !== I[0] && t0(E, I[0]), q & 2 && F.value !== I[1] && t0(F, I[1]), q & 4 && k.value !== I[2] && t0(k, I[2]), I[4] ? N ? N.p(I, q) : (N = Qt(I), N.c(), N.m(s, m)) : N && (N.d(1), N = null), q & 8 && v !== (v = I[3] ? "Changing password\u2026" : "Change password") && z(_, v), q & 8 && (D.disabled = I[3]);
          },
          i: X,
          o: X,
          d(I) {
            I && P(e), S && S.d(), N && N.d(), M = false, a0(L);
          }
        };
      }
      function h9(t, e, x) {
        let n = "", o = "", r = "", l = false, s = null, a = false;
        y0(() => {
          P0() || E0("/");
        });
        async function c() {
          if (x(4, s = null), x(5, a = false), o !== r) {
            x(4, s = "New passwords do not match");
            return;
          }
          if (o.length < 12) {
            x(4, s = "New password must be at least 12 characters");
            return;
          }
          if (o === n) {
            x(4, s = "New password must differ from the current password");
            return;
          }
          x(3, l = true);
          try {
            const C = Sl(), { challenge: F, auth_salt: B, enc_salt: p } = await Ox(C), h = await G0(n, b0(p)), k = te();
            if (!k || h.length !== k.length || !h.every((L, S) => L === k[S])) {
              x(4, s = "Current password is incorrect");
              return;
            }
            const b = await G0(n, b0(B)), m = xo(new TextEncoder().encode(F), b), D = $0(m), v = await G0(o, b0(B)), _ = await G0(o, b0(p)), w = e0(eo(v)), { blobHex: y, blobVersion: M } = ds(_);
            await Yl(D, w, y, M), Rx(_), Bs(M + 1), x(5, a = true), x(0, n = ""), x(1, o = ""), x(2, r = "");
          } catch (C) {
            x(4, s = C.message);
          } finally {
            x(3, l = false);
          }
        }
        function E() {
          n = this.value, x(0, n);
        }
        function f() {
          o = this.value, x(1, o);
        }
        function A() {
          r = this.value, x(2, r);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          E,
          f,
          A
        ];
      }
      class v9 extends m0 {
        constructor(e) {
          super(), p0(this, e, h9, m9, F0, {});
        }
      }
      function k9(t) {
        let e, x, n, o, r, l, s, a, c, E = t[2] ? "Sending\u2026" : "Send verification link", f, A, C, F, B = t[0] && Jt(t), p = t[3] && Xt(t);
        return {
          c() {
            e = d("div"), B && B.c(), x = g(), n = d("form"), o = d("label"), r = j(`New email address
          `), l = d("input"), s = g(), p && p.c(), a = g(), c = d("button"), f = j(E), u(l, "type", "email"), l.required = true, u(l, "autocomplete", "email"), u(l, "placeholder", "you@example.com"), u(l, "class", "svelte-19jh4z3"), u(o, "class", "svelte-19jh4z3"), u(c, "type", "submit"), c.disabled = A = t[2] || !t[1], u(c, "class", "svelte-19jh4z3"), u(n, "class", "svelte-19jh4z3"), u(e, "class", "card svelte-19jh4z3");
          },
          m(h, k) {
            T(h, e, k), B && B.m(e, null), i(e, x), i(e, n), i(n, o), i(o, r), i(o, l), t0(l, t[1]), i(n, s), p && p.m(n, null), i(n, a), i(n, c), i(c, f), C || (F = [
              H(l, "input", t[6]),
              H(n, "submit", V0(t[5]))
            ], C = true);
          },
          p(h, k) {
            h[0] ? B ? B.p(h, k) : (B = Jt(h), B.c(), B.m(e, x)) : B && (B.d(1), B = null), k & 2 && l.value !== h[1] && t0(l, h[1]), h[3] ? p ? p.p(h, k) : (p = Xt(h), p.c(), p.m(n, a)) : p && (p.d(1), p = null), k & 4 && E !== (E = h[2] ? "Sending\u2026" : "Send verification link") && z(f, E), k & 6 && A !== (A = h[2] || !h[1]) && (c.disabled = A);
          },
          d(h) {
            h && P(e), B && B.d(), p && p.d(), C = false, a0(F);
          }
        };
      }
      function _9(t) {
        let e, x, n, o, r, l, s, a, c, E;
        return {
          c() {
            e = d("div"), x = d("div"), x.innerHTML = '<span class="material-icons success-icon svelte-19jh4z3">mark_email_read</span> <h2 class="svelte-19jh4z3">Check your inbox</h2>', n = g(), o = d("p"), r = j("We've sent a verification link to "), l = d("strong"), s = j(t[4]), a = j(`.
        Click the link to confirm the change. Your email won't update until you verify it.`), c = g(), E = d("a"), E.textContent = "Done", u(x, "class", "success-row svelte-19jh4z3"), u(o, "class", "hint svelte-19jh4z3"), u(E, "href", "#/settings"), u(E, "class", "btn-primary svelte-19jh4z3"), u(e, "class", "card svelte-19jh4z3");
          },
          m(f, A) {
            T(f, e, A), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(l, s), i(o, a), i(e, c), i(e, E);
          },
          p(f, A) {
            A & 16 && z(s, f[4]);
          },
          d(f) {
            f && P(e);
          }
        };
      }
      function Jt(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("p"), x = j("Current email: "), n = d("strong"), o = j(t[0]), u(e, "class", "current-email svelte-19jh4z3");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(n, o);
          },
          p(r, l) {
            l & 1 && z(o, r[0]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function Xt(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[3]), u(e, "class", "error svelte-19jh4z3");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 8 && z(x, n[3]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function b9(t) {
        let e, x, n, o, r;
        function l(c, E) {
          return c[4] ? _9 : k9;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = d("main"), x = d("a"), x.innerHTML = `<span class="material-icons svelte-19jh4z3">arrow_back</span>
    Back to settings`, n = g(), o = d("h1"), o.textContent = "Change email", r = g(), a.c(), u(x, "href", "#/settings"), u(x, "class", "back-link svelte-19jh4z3"), u(o, "class", "svelte-19jh4z3"), u(e, "class", "svelte-19jh4z3");
          },
          m(c, E) {
            T(c, e, E), i(e, x), i(e, n), i(e, o), i(e, r), a.m(e, null);
          },
          p(c, [E]) {
            s === (s = l(c)) && a ? a.p(c, E) : (a.d(1), a = s(c), a && (a.c(), a.m(e, null)));
          },
          i: X,
          o: X,
          d(c) {
            c && P(e), a.d();
          }
        };
      }
      function w9(t, e, x) {
        let n;
        z0(t, ox, (f) => x(7, n = f));
        let o = "", r = "", l = false, s = null, a = null;
        y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
          x(0, o = n ?? "");
        });
        async function c() {
          x(3, s = null), x(2, l = true);
          try {
            await jl(r), x(4, a = r);
          } catch (f) {
            x(3, s = f.message);
          } finally {
            x(2, l = false);
          }
        }
        function E() {
          r = this.value, x(1, r);
        }
        return [
          o,
          r,
          l,
          s,
          a,
          c,
          E
        ];
      }
      class g9 extends m0 {
        constructor(e) {
          super(), p0(this, e, w9, b9, F0, {});
        }
      }
      function y9(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons svelte-1lli505">error_outline</span>', x = g(), n = d("h1"), n.textContent = "Verification failed", o = g(), r = d("p"), l = j(t[1]), s = g(), a = d("p"), a.textContent = "The link may have expired or already been used. You can request a new one from your account settings.", c = g(), E = d("button"), E.textContent = "Go to settings", u(e, "class", "icon-wrap error svelte-1lli505"), u(n, "class", "svelte-1lli505"), u(r, "class", "message error svelte-1lli505"), u(a, "class", "hint svelte-1lli505"), u(E, "class", "btn-primary svelte-1lli505");
          },
          m(C, F) {
            T(C, e, F), T(C, x, F), T(C, n, F), T(C, o, F), T(C, r, F), i(r, l), T(C, s, F), T(C, a, F), T(C, c, F), T(C, E, F), f || (A = H(E, "click", t[4]), f = true);
          },
          p(C, F) {
            F & 2 && z(l, C[1]);
          },
          d(C) {
            C && (P(e), P(x), P(n), P(o), P(r), P(s), P(a), P(c), P(E)), f = false, A();
          }
        };
      }
      function P9(t) {
        let e, x, n, o, r, l, s, a, c;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons svelte-1lli505">check_circle</span>', x = g(), n = d("h1"), n.textContent = "Email verified", o = g(), r = d("p"), r.textContent = "Your email address has been verified successfully.", l = g(), s = d("button"), s.textContent = "Go to settings", u(e, "class", "icon-wrap success svelte-1lli505"), u(n, "class", "svelte-1lli505"), u(r, "class", "message svelte-1lli505"), u(s, "class", "btn-primary svelte-1lli505");
          },
          m(E, f) {
            T(E, e, f), T(E, x, f), T(E, n, f), T(E, o, f), T(E, r, f), T(E, l, f), T(E, s, f), a || (c = H(s, "click", t[3]), a = true);
          },
          p: X,
          d(E) {
            E && (P(e), P(x), P(n), P(o), P(r), P(l), P(s)), a = false, c();
          }
        };
      }
      function T9(t) {
        let e, x, n;
        return {
          c() {
            e = d("div"), e.innerHTML = '<span class="material-icons spinning svelte-1lli505">sync</span>', x = g(), n = d("p"), n.textContent = "Verifying your email\u2026", u(e, "class", "icon-wrap svelte-1lli505"), u(n, "class", "message svelte-1lli505");
          },
          m(o, r) {
            T(o, e, r), T(o, x, r), T(o, n, r);
          },
          p: X,
          d(o) {
            o && (P(e), P(x), P(n));
          }
        };
      }
      function S9(t) {
        let e;
        function x(r, l) {
          return r[0] === "verifying" ? T9 : r[0] === "success" ? P9 : y9;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = d("main"), o.c(), u(e, "class", "svelte-1lli505");
          },
          m(r, l) {
            T(r, e, l), o.m(e, null);
          },
          p(r, [l]) {
            n === (n = x(r)) && o ? o.p(r, l) : (o.d(1), o = n(r), o && (o.c(), o.m(e, null)));
          },
          i: X,
          o: X,
          d(r) {
            r && P(e), o.d();
          }
        };
      }
      function M9(t, e, x) {
        let { params: n = {} } = e, o = "verifying", r = null;
        y0(async () => {
          const a = n.token;
          if (!a) {
            x(1, r = "No verification token found in link."), x(0, o = "error");
            return;
          }
          try {
            await ql(a), x(0, o = "success");
          } catch (c) {
            x(1, r = c.message), x(0, o = "error");
          }
        });
        const l = () => E0("/settings"), s = () => E0("/settings");
        return t.$$set = (a) => {
          "params" in a && x(2, n = a.params);
        }, [
          o,
          r,
          n,
          l,
          s
        ];
      }
      class I9 extends m0 {
        constructor(e) {
          super(), p0(this, e, M9, S9, F0, {
            params: 2
          });
        }
      }
      function Zt(t, e, x) {
        const n = t.slice();
        n[7] = e[x], n[10] = x;
        const o = n[0].length - 1 - n[10];
        return n[8] = o, n;
      }
      function $t(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Checking for new alerts\u2026", u(e, "class", "muted checking svelte-kp4xpu");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function L9(t) {
        let e, x = A0([
          ...t[0]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = nn(Zt(t, x, o));
        return {
          c() {
            e = d("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            u(e, "class", "svelte-kp4xpu");
          },
          m(o, r) {
            T(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 5) {
              x = A0([
                ...o[0]
              ].reverse());
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Zt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = nn(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), O0(n, o);
          }
        };
      }
      function j9(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "No notifications received yet.", u(e, "class", "muted svelte-kp4xpu");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function en(t) {
        let e;
        function x(r, l) {
          return r[7].labVerified ? q9 : N9;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            e = d("div"), o.c(), u(e, "class", "alert-message svelte-kp4xpu");
          },
          m(r, l) {
            T(r, e, l), o.m(e, null);
          },
          p(r, l) {
            n === (n = x(r)) && o ? o.p(r, l) : (o.d(1), o = n(r), o && (o.c(), o.m(e, null)));
          },
          d(r) {
            r && P(e), o.d();
          }
        };
      }
      function N9(t) {
        let e, x = t[7].diseases.map(t[4]).join(", ") + "", n, o;
        return {
          c() {
            e = j("Someone you've interacted with self-reported testing positive for "), n = j(x), o = j(" (unverified).");
          },
          m(r, l) {
            T(r, e, l), T(r, n, l), T(r, o, l);
          },
          p(r, l) {
            l & 1 && x !== (x = r[7].diseases.map(r[4]).join(", ") + "") && z(n, x);
          },
          d(r) {
            r && (P(e), P(n), P(o));
          }
        };
      }
      function q9(t) {
        let e, x = t[7].diseases.map(t[3]).join(", ") + "", n, o;
        return {
          c() {
            e = j("Someone you've interacted with has tested positive for "), n = j(x), o = j(".");
          },
          m(r, l) {
            T(r, e, l), T(r, n, l), T(r, o, l);
          },
          p(r, l) {
            l & 1 && x !== (x = r[7].diseases.map(r[3]).join(", ") + "") && z(n, x);
          },
          d(r) {
            r && (P(e), P(n), P(o));
          }
        };
      }
      function xn(t) {
        let e;
        return {
          c() {
            e = d("div"), e.textContent = "We have not verified this result. Get a lab test to confirm.", u(e, "class", "unverified-note svelte-kp4xpu");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function tn(t) {
        let e, x, n;
        function o() {
          return t[6](t[8]);
        }
        return {
          c() {
            e = d("button"), e.textContent = "Mark viewed", u(e, "class", "btn-text svelte-kp4xpu");
          },
          m(r, l) {
            T(r, e, l), x || (n = H(e, "click", o), x = true);
          },
          p(r, l) {
            t = r;
          },
          d(r) {
            r && P(e), x = false, n();
          }
        };
      }
      function nn(t) {
        let e, x, n, o, r = t[7].labVerified ? "warning_amber" : "info_outline", l, s, a, c, E = t[7].labVerified ? "Health alert" : "Unverified health alert", f, A, C, F, B, p, h = on(t[7].testDate) + "", k, b, m, D, v, _, w = (t[7].diseases.length > 0 ? t[7].diseases.map(t[5]).join(", ") : "the relevant STI") + "", y, M, L, S, N = t[7].diseases.length > 0 && en(t), I = !t[7].labVerified && xn(), q = !t[7].viewed && tn(t);
        return {
          c() {
            e = d("li"), x = d("div"), n = d("div"), o = d("span"), l = j(r), s = g(), a = d("div"), c = d("div"), f = j(E), A = g(), N && N.c(), C = g(), F = d("div"), B = j("Their sample was taken around "), p = d("strong"), k = j(h), b = j("."), m = g(), I && I.c(), D = g(), v = d("div"), _ = j("Get tested for "), y = j(w), M = j(". Ask for a full STI panel."), L = g(), q && q.c(), S = g(), u(o, "class", "material-icons alert-icon svelte-kp4xpu"), o0(o, "verified", t[7].labVerified), o0(o, "unverified", !t[7].labVerified), u(c, "class", "alert-title svelte-kp4xpu"), o0(c, "verified", t[7].labVerified), o0(c, "unverified", !t[7].labVerified), u(F, "class", "alert-dates svelte-kp4xpu"), u(v, "class", "get-tested svelte-kp4xpu"), u(n, "class", "alert-meta svelte-kp4xpu"), u(x, "class", "alert-body svelte-kp4xpu"), u(e, "class", "svelte-kp4xpu"), o0(e, "unviewed", !t[7].viewed);
          },
          m(G, U) {
            T(G, e, U), i(e, x), i(x, n), i(n, o), i(o, l), i(n, s), i(n, a), i(a, c), i(c, f), i(a, A), N && N.m(a, null), i(a, C), i(a, F), i(F, B), i(F, p), i(p, k), i(F, b), i(a, m), I && I.m(a, null), i(a, D), i(a, v), i(v, _), i(v, y), i(v, M), i(x, L), q && q.m(x, null), i(e, S);
          },
          p(G, U) {
            U & 1 && r !== (r = G[7].labVerified ? "warning_amber" : "info_outline") && z(l, r), U & 1 && o0(o, "verified", G[7].labVerified), U & 1 && o0(o, "unverified", !G[7].labVerified), U & 1 && E !== (E = G[7].labVerified ? "Health alert" : "Unverified health alert") && z(f, E), U & 1 && o0(c, "verified", G[7].labVerified), U & 1 && o0(c, "unverified", !G[7].labVerified), G[7].diseases.length > 0 ? N ? N.p(G, U) : (N = en(G), N.c(), N.m(a, C)) : N && (N.d(1), N = null), U & 1 && h !== (h = on(G[7].testDate) + "") && z(k, h), G[7].labVerified ? I && (I.d(1), I = null) : I || (I = xn(), I.c(), I.m(a, D)), U & 1 && w !== (w = (G[7].diseases.length > 0 ? G[7].diseases.map(G[5]).join(", ") : "the relevant STI") + "") && z(y, w), G[7].viewed ? q && (q.d(1), q = null) : q ? q.p(G, U) : (q = tn(G), q.c(), q.m(x, null)), U & 1 && o0(e, "unviewed", !G[7].viewed);
          },
          d(G) {
            G && P(e), N && N.d(), I && I.d(), q && q.d();
          }
        };
      }
      function R9(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A;
        e = new H0({});
        let C = t[1] && $t();
        function F(h, k) {
          return h[0].length === 0 && !h[1] ? j9 : L9;
        }
        let B = F(t), p = B(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), o.innerHTML = '<h1 class="svelte-kp4xpu">Alerts</h1>', r = g(), l = d("section"), s = d("h2"), s.textContent = "Notification history", a = g(), C && C.c(), c = g(), p.c(), E = g(), f = d("p"), f.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, u(o, "class", "page-header svelte-kp4xpu"), u(s, "class", "svelte-kp4xpu"), u(l, "class", "card svelte-kp4xpu"), u(f, "class", "privacy-note svelte-kp4xpu"), u(n, "class", "svelte-kp4xpu");
          },
          m(h, k) {
            k0(e, h, k), T(h, x, k), T(h, n, k), i(n, o), i(n, r), i(n, l), i(l, s), i(l, a), C && C.m(l, null), i(l, c), p.m(l, null), i(n, E), i(n, f), A = true;
          },
          p(h, [k]) {
            h[1] ? C || (C = $t(), C.c(), C.m(l, c)) : C && (C.d(1), C = null), B === (B = F(h)) && p ? p.p(h, k) : (p.d(1), p = B(h), p && (p.c(), p.m(l, null)));
          },
          i(h) {
            A || (d0(e.$$.fragment, h), A = true);
          },
          o(h) {
            C0(e.$$.fragment, h), A = false;
          },
          d(h) {
            h && (P(x), P(n)), _0(e, h), C && C.d(), p.d();
          }
        };
      }
      function on(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function O9(t, e, x) {
        let n = [], o = false;
        y0(async () => {
          if (!P0()) {
            Ds("/alerts"), E0("/");
            return;
          }
          x(0, n = fx()), x(1, o = true);
          try {
            await mo(), x(0, n = fx());
          } catch {
          } finally {
            x(1, o = false);
          }
        });
        async function r(E) {
          await cs(E), x(0, n = fx());
        }
        return [
          n,
          o,
          r,
          (E) => he[E] ?? E,
          (E) => he[E] ?? E,
          (E) => he[E] ?? E,
          (E) => r(E)
        ];
      }
      class H9 extends m0 {
        constructor(e) {
          super(), p0(this, e, O9, R9, F0, {});
        }
      }
      var U9 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function z9(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var oe = {}, G9 = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, ho = {}, S0 = {};
      let Wx;
      const V9 = [
        0,
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706
      ];
      S0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      S0.getSymbolTotalCodewords = function(e) {
        return V9[e];
      };
      S0.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0; ) e++, t >>>= 1;
        return e;
      };
      S0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Wx = e;
      };
      S0.isKanjiModeEnabled = function() {
        return typeof Wx < "u";
      };
      S0.toSJIS = function(e) {
        return Wx(e);
      };
      var lx = {};
      (function(t) {
        t.L = {
          bit: 1
        }, t.M = {
          bit: 0
        }, t.Q = {
          bit: 3
        }, t.H = {
          bit: 2
        };
        function e(x) {
          if (typeof x != "string") throw new Error("Param is not a string");
          switch (x.toLowerCase()) {
            case "l":
            case "low":
              return t.L;
            case "m":
            case "medium":
              return t.M;
            case "q":
            case "quartile":
              return t.Q;
            case "h":
            case "high":
              return t.H;
            default:
              throw new Error("Unknown EC Level: " + x);
          }
        }
        t.isValid = function(n) {
          return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
        }, t.from = function(n, o) {
          if (t.isValid(n)) return n;
          try {
            return e(n);
          } catch {
            return o;
          }
        };
      })(lx);
      function vo() {
        this.buffer = [], this.length = 0;
      }
      vo.prototype = {
        get: function(t) {
          const e = Math.floor(t / 8);
          return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
        },
        put: function(t, e) {
          for (let x = 0; x < e; x++) this.putBit((t >>> e - x - 1 & 1) === 1);
        },
        getLengthInBits: function() {
          return this.length;
        },
        putBit: function(t) {
          const e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
        }
      };
      var K9 = vo;
      function Se(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
      }
      Se.prototype.set = function(t, e, x, n) {
        const o = t * this.size + e;
        this.data[o] = x, n && (this.reservedBit[o] = true);
      };
      Se.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      };
      Se.prototype.xor = function(t, e, x) {
        this.data[t * this.size + e] ^= x;
      };
      Se.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      };
      var Y9 = Se, ko = {};
      (function(t) {
        const e = S0.getSymbolSize;
        t.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, r = e(n), l = r === 145 ? 26 : Math.ceil((r - 13) / (2 * o - 2)) * 2, s = [
            r - 7
          ];
          for (let a = 1; a < o - 1; a++) s[a] = s[a - 1] - l;
          return s.push(6), s.reverse();
        }, t.getPositions = function(n) {
          const o = [], r = t.getRowColCoords(n), l = r.length;
          for (let s = 0; s < l; s++) for (let a = 0; a < l; a++) s === 0 && a === 0 || s === 0 && a === l - 1 || s === l - 1 && a === 0 || o.push([
            r[s],
            r[a]
          ]);
          return o;
        };
      })(ko);
      var _o = {};
      const W9 = S0.getSymbolSize, rn = 7;
      _o.getPositions = function(e) {
        const x = W9(e);
        return [
          [
            0,
            0
          ],
          [
            x - rn,
            0
          ],
          [
            0,
            x - rn
          ]
        ];
      };
      var bo = {};
      (function(t) {
        t.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        };
        const e = {
          N1: 3,
          N2: 3,
          N3: 40,
          N4: 10
        };
        t.isValid = function(o) {
          return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
        }, t.from = function(o) {
          return t.isValid(o) ? parseInt(o, 10) : void 0;
        }, t.getPenaltyN1 = function(o) {
          const r = o.size;
          let l = 0, s = 0, a = 0, c = null, E = null;
          for (let f = 0; f < r; f++) {
            s = a = 0, c = E = null;
            for (let A = 0; A < r; A++) {
              let C = o.get(f, A);
              C === c ? s++ : (s >= 5 && (l += e.N1 + (s - 5)), c = C, s = 1), C = o.get(A, f), C === E ? a++ : (a >= 5 && (l += e.N1 + (a - 5)), E = C, a = 1);
            }
            s >= 5 && (l += e.N1 + (s - 5)), a >= 5 && (l += e.N1 + (a - 5));
          }
          return l;
        }, t.getPenaltyN2 = function(o) {
          const r = o.size;
          let l = 0;
          for (let s = 0; s < r - 1; s++) for (let a = 0; a < r - 1; a++) {
            const c = o.get(s, a) + o.get(s, a + 1) + o.get(s + 1, a) + o.get(s + 1, a + 1);
            (c === 4 || c === 0) && l++;
          }
          return l * e.N2;
        }, t.getPenaltyN3 = function(o) {
          const r = o.size;
          let l = 0, s = 0, a = 0;
          for (let c = 0; c < r; c++) {
            s = a = 0;
            for (let E = 0; E < r; E++) s = s << 1 & 2047 | o.get(c, E), E >= 10 && (s === 1488 || s === 93) && l++, a = a << 1 & 2047 | o.get(E, c), E >= 10 && (a === 1488 || a === 93) && l++;
          }
          return l * e.N3;
        }, t.getPenaltyN4 = function(o) {
          let r = 0;
          const l = o.data.length;
          for (let a = 0; a < l; a++) r += o.data[a];
          return Math.abs(Math.ceil(r * 100 / l / 5) - 10) * e.N4;
        };
        function x(n, o, r) {
          switch (n) {
            case t.Patterns.PATTERN000:
              return (o + r) % 2 === 0;
            case t.Patterns.PATTERN001:
              return o % 2 === 0;
            case t.Patterns.PATTERN010:
              return r % 3 === 0;
            case t.Patterns.PATTERN011:
              return (o + r) % 3 === 0;
            case t.Patterns.PATTERN100:
              return (Math.floor(o / 2) + Math.floor(r / 3)) % 2 === 0;
            case t.Patterns.PATTERN101:
              return o * r % 2 + o * r % 3 === 0;
            case t.Patterns.PATTERN110:
              return (o * r % 2 + o * r % 3) % 2 === 0;
            case t.Patterns.PATTERN111:
              return (o * r % 3 + (o + r) % 2) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + n);
          }
        }
        t.applyMask = function(o, r) {
          const l = r.size;
          for (let s = 0; s < l; s++) for (let a = 0; a < l; a++) r.isReserved(a, s) || r.xor(a, s, x(o, a, s));
        }, t.getBestMask = function(o, r) {
          const l = Object.keys(t.Patterns).length;
          let s = 0, a = 1 / 0;
          for (let c = 0; c < l; c++) {
            r(c), t.applyMask(c, o);
            const E = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
            t.applyMask(c, o), E < a && (a = E, s = c);
          }
          return s;
        };
      })(bo);
      var sx = {};
      const K0 = lx, je = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81
      ], Ne = [
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430
      ];
      sx.getBlocksCount = function(e, x) {
        switch (x) {
          case K0.L:
            return je[(e - 1) * 4 + 0];
          case K0.M:
            return je[(e - 1) * 4 + 1];
          case K0.Q:
            return je[(e - 1) * 4 + 2];
          case K0.H:
            return je[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      sx.getTotalCodewordsCount = function(e, x) {
        switch (x) {
          case K0.L:
            return Ne[(e - 1) * 4 + 0];
          case K0.M:
            return Ne[(e - 1) * 4 + 1];
          case K0.Q:
            return Ne[(e - 1) * 4 + 2];
          case K0.H:
            return Ne[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var wo = {}, ax = {};
      const ve = new Uint8Array(512), Xe = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let x = 0; x < 255; x++) ve[x] = e, Xe[e] = x, e <<= 1, e & 256 && (e ^= 285);
        for (let x = 255; x < 512; x++) ve[x] = ve[x - 255];
      })();
      ax.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Xe[e];
      };
      ax.exp = function(e) {
        return ve[e];
      };
      ax.mul = function(e, x) {
        return e === 0 || x === 0 ? 0 : ve[Xe[e] + Xe[x]];
      };
      (function(t) {
        const e = ax;
        t.mul = function(n, o) {
          const r = new Uint8Array(n.length + o.length - 1);
          for (let l = 0; l < n.length; l++) for (let s = 0; s < o.length; s++) r[l + s] ^= e.mul(n[l], o[s]);
          return r;
        }, t.mod = function(n, o) {
          let r = new Uint8Array(n);
          for (; r.length - o.length >= 0; ) {
            const l = r[0];
            for (let a = 0; a < o.length; a++) r[a] ^= e.mul(o[a], l);
            let s = 0;
            for (; s < r.length && r[s] === 0; ) s++;
            r = r.slice(s);
          }
          return r;
        }, t.generateECPolynomial = function(n) {
          let o = new Uint8Array([
            1
          ]);
          for (let r = 0; r < n; r++) o = t.mul(o, new Uint8Array([
            1,
            e.exp(r)
          ]));
          return o;
        };
      })(wo);
      const go = wo;
      function Qx(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
      }
      Qx.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = go.generateECPolynomial(this.degree);
      };
      Qx.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const x = new Uint8Array(e.length + this.degree);
        x.set(e);
        const n = go.mod(x, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const r = new Uint8Array(this.degree);
          return r.set(n, o), r;
        }
        return n;
      };
      var Q9 = Qx, yo = {}, Q0 = {}, Jx = {};
      Jx.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var U0 = {};
      const Po = "[0-9]+", J9 = "[A-Z $%*+\\-./:]+";
      let be = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      be = be.replace(/u/g, "\\u");
      const X9 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + be + `)(?:.|[\r
]))+`;
      U0.KANJI = new RegExp(be, "g");
      U0.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      U0.BYTE = new RegExp(X9, "g");
      U0.NUMERIC = new RegExp(Po, "g");
      U0.ALPHANUMERIC = new RegExp(J9, "g");
      const Z9 = new RegExp("^" + be + "$"), $9 = new RegExp("^" + Po + "$"), ea = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      U0.testKanji = function(e) {
        return Z9.test(e);
      };
      U0.testNumeric = function(e) {
        return $9.test(e);
      };
      U0.testAlphanumeric = function(e) {
        return ea.test(e);
      };
      (function(t) {
        const e = Jx, x = U0;
        t.NUMERIC = {
          id: "Numeric",
          bit: 1,
          ccBits: [
            10,
            12,
            14
          ]
        }, t.ALPHANUMERIC = {
          id: "Alphanumeric",
          bit: 2,
          ccBits: [
            9,
            11,
            13
          ]
        }, t.BYTE = {
          id: "Byte",
          bit: 4,
          ccBits: [
            8,
            16,
            16
          ]
        }, t.KANJI = {
          id: "Kanji",
          bit: 8,
          ccBits: [
            8,
            10,
            12
          ]
        }, t.MIXED = {
          bit: -1
        }, t.getCharCountIndicator = function(r, l) {
          if (!r.ccBits) throw new Error("Invalid mode: " + r);
          if (!e.isValid(l)) throw new Error("Invalid version: " + l);
          return l >= 1 && l < 10 ? r.ccBits[0] : l < 27 ? r.ccBits[1] : r.ccBits[2];
        }, t.getBestModeForData = function(r) {
          return x.testNumeric(r) ? t.NUMERIC : x.testAlphanumeric(r) ? t.ALPHANUMERIC : x.testKanji(r) ? t.KANJI : t.BYTE;
        }, t.toString = function(r) {
          if (r && r.id) return r.id;
          throw new Error("Invalid mode");
        }, t.isValid = function(r) {
          return r && r.bit && r.ccBits;
        };
        function n(o) {
          if (typeof o != "string") throw new Error("Param is not a string");
          switch (o.toLowerCase()) {
            case "numeric":
              return t.NUMERIC;
            case "alphanumeric":
              return t.ALPHANUMERIC;
            case "kanji":
              return t.KANJI;
            case "byte":
              return t.BYTE;
            default:
              throw new Error("Unknown mode: " + o);
          }
        }
        t.from = function(r, l) {
          if (t.isValid(r)) return r;
          try {
            return n(r);
          } catch {
            return l;
          }
        };
      })(Q0);
      (function(t) {
        const e = S0, x = sx, n = lx, o = Q0, r = Jx, l = 7973, s = e.getBCHDigit(l);
        function a(A, C, F) {
          for (let B = 1; B <= 40; B++) if (C <= t.getCapacity(B, F, A)) return B;
        }
        function c(A, C) {
          return o.getCharCountIndicator(A, C) + 4;
        }
        function E(A, C) {
          let F = 0;
          return A.forEach(function(B) {
            const p = c(B.mode, C);
            F += p + B.getBitsLength();
          }), F;
        }
        function f(A, C) {
          for (let F = 1; F <= 40; F++) if (E(A, F) <= t.getCapacity(F, C, o.MIXED)) return F;
        }
        t.from = function(C, F) {
          return r.isValid(C) ? parseInt(C, 10) : F;
        }, t.getCapacity = function(C, F, B) {
          if (!r.isValid(C)) throw new Error("Invalid QR Code version");
          typeof B > "u" && (B = o.BYTE);
          const p = e.getSymbolTotalCodewords(C), h = x.getTotalCodewordsCount(C, F), k = (p - h) * 8;
          if (B === o.MIXED) return k;
          const b = k - c(B, C);
          switch (B) {
            case o.NUMERIC:
              return Math.floor(b / 10 * 3);
            case o.ALPHANUMERIC:
              return Math.floor(b / 11 * 2);
            case o.KANJI:
              return Math.floor(b / 13);
            case o.BYTE:
            default:
              return Math.floor(b / 8);
          }
        }, t.getBestVersionForData = function(C, F) {
          let B;
          const p = n.from(F, n.M);
          if (Array.isArray(C)) {
            if (C.length > 1) return f(C, p);
            if (C.length === 0) return 1;
            B = C[0];
          } else B = C;
          return a(B.mode, B.getLength(), p);
        }, t.getEncodedBits = function(C) {
          if (!r.isValid(C) || C < 7) throw new Error("Invalid QR Code version");
          let F = C << 12;
          for (; e.getBCHDigit(F) - s >= 0; ) F ^= l << e.getBCHDigit(F) - s;
          return C << 12 | F;
        };
      })(yo);
      var To = {};
      const Px = S0, So = 1335, xa = 21522, ln = Px.getBCHDigit(So);
      To.getEncodedBits = function(e, x) {
        const n = e.bit << 3 | x;
        let o = n << 10;
        for (; Px.getBCHDigit(o) - ln >= 0; ) o ^= So << Px.getBCHDigit(o) - ln;
        return (n << 10 | o) ^ xa;
      };
      var Mo = {};
      const ta = Q0;
      function Be(t) {
        this.mode = ta.NUMERIC, this.data = t.toString();
      }
      Be.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      Be.prototype.getLength = function() {
        return this.data.length;
      };
      Be.prototype.getBitsLength = function() {
        return Be.getBitsLength(this.data.length);
      };
      Be.prototype.write = function(e) {
        let x, n, o;
        for (x = 0; x + 3 <= this.data.length; x += 3) n = this.data.substr(x, 3), o = parseInt(n, 10), e.put(o, 10);
        const r = this.data.length - x;
        r > 0 && (n = this.data.substr(x), o = parseInt(n, 10), e.put(o, r * 3 + 1));
      };
      var na = Be;
      const oa = Q0, Bx = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        " ",
        "$",
        "%",
        "*",
        "+",
        "-",
        ".",
        "/",
        ":"
      ];
      function Ce(t) {
        this.mode = oa.ALPHANUMERIC, this.data = t;
      }
      Ce.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      Ce.prototype.getLength = function() {
        return this.data.length;
      };
      Ce.prototype.getBitsLength = function() {
        return Ce.getBitsLength(this.data.length);
      };
      Ce.prototype.write = function(e) {
        let x;
        for (x = 0; x + 2 <= this.data.length; x += 2) {
          let n = Bx.indexOf(this.data[x]) * 45;
          n += Bx.indexOf(this.data[x + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(Bx.indexOf(this.data[x]), 6);
      };
      var ra = Ce;
      const la = Q0;
      function Ae(t) {
        this.mode = la.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
      }
      Ae.getBitsLength = function(e) {
        return e * 8;
      };
      Ae.prototype.getLength = function() {
        return this.data.length;
      };
      Ae.prototype.getBitsLength = function() {
        return Ae.getBitsLength(this.data.length);
      };
      Ae.prototype.write = function(t) {
        for (let e = 0, x = this.data.length; e < x; e++) t.put(this.data[e], 8);
      };
      var sa = Ae;
      const aa = Q0, ia = S0;
      function Fe(t) {
        this.mode = aa.KANJI, this.data = t;
      }
      Fe.getBitsLength = function(e) {
        return e * 13;
      };
      Fe.prototype.getLength = function() {
        return this.data.length;
      };
      Fe.prototype.getBitsLength = function() {
        return Fe.getBitsLength(this.data.length);
      };
      Fe.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let x = ia.toSJIS(this.data[e]);
          if (x >= 33088 && x <= 40956) x -= 33088;
          else if (x >= 57408 && x <= 60351) x -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          x = (x >>> 8 & 255) * 192 + (x & 255), t.put(x, 13);
        }
      };
      var ca = Fe, Io = {
        exports: {}
      };
      (function(t) {
        var e = {
          single_source_shortest_paths: function(x, n, o) {
            var r = {}, l = {};
            l[n] = 0;
            var s = e.PriorityQueue.make();
            s.push(n, 0);
            for (var a, c, E, f, A, C, F, B, p; !s.empty(); ) {
              a = s.pop(), c = a.value, f = a.cost, A = x[c] || {};
              for (E in A) A.hasOwnProperty(E) && (C = A[E], F = f + C, B = l[E], p = typeof l[E] > "u", (p || B > F) && (l[E] = F, s.push(E, F), r[E] = c));
            }
            if (typeof o < "u" && typeof l[o] > "u") {
              var h = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(h);
            }
            return r;
          },
          extract_shortest_path_from_predecessor_list: function(x, n) {
            for (var o = [], r = n; r; ) o.push(r), x[r], r = x[r];
            return o.reverse(), o;
          },
          find_path: function(x, n, o) {
            var r = e.single_source_shortest_paths(x, n, o);
            return e.extract_shortest_path_from_predecessor_list(r, o);
          },
          PriorityQueue: {
            make: function(x) {
              var n = e.PriorityQueue, o = {}, r;
              x = x || {};
              for (r in n) n.hasOwnProperty(r) && (o[r] = n[r]);
              return o.queue = [], o.sorter = x.sorter || n.default_sorter, o;
            },
            default_sorter: function(x, n) {
              return x.cost - n.cost;
            },
            push: function(x, n) {
              var o = {
                value: x,
                cost: n
              };
              this.queue.push(o), this.queue.sort(this.sorter);
            },
            pop: function() {
              return this.queue.shift();
            },
            empty: function() {
              return this.queue.length === 0;
            }
          }
        };
        t.exports = e;
      })(Io);
      var Ea = Io.exports;
      (function(t) {
        const e = Q0, x = na, n = ra, o = sa, r = ca, l = U0, s = S0, a = Ea;
        function c(h) {
          return unescape(encodeURIComponent(h)).length;
        }
        function E(h, k, b) {
          const m = [];
          let D;
          for (; (D = h.exec(b)) !== null; ) m.push({
            data: D[0],
            index: D.index,
            mode: k,
            length: D[0].length
          });
          return m;
        }
        function f(h) {
          const k = E(l.NUMERIC, e.NUMERIC, h), b = E(l.ALPHANUMERIC, e.ALPHANUMERIC, h);
          let m, D;
          return s.isKanjiModeEnabled() ? (m = E(l.BYTE, e.BYTE, h), D = E(l.KANJI, e.KANJI, h)) : (m = E(l.BYTE_KANJI, e.BYTE, h), D = []), k.concat(b, m, D).sort(function(_, w) {
            return _.index - w.index;
          }).map(function(_) {
            return {
              data: _.data,
              mode: _.mode,
              length: _.length
            };
          });
        }
        function A(h, k) {
          switch (k) {
            case e.NUMERIC:
              return x.getBitsLength(h);
            case e.ALPHANUMERIC:
              return n.getBitsLength(h);
            case e.KANJI:
              return r.getBitsLength(h);
            case e.BYTE:
              return o.getBitsLength(h);
          }
        }
        function C(h) {
          return h.reduce(function(k, b) {
            const m = k.length - 1 >= 0 ? k[k.length - 1] : null;
            return m && m.mode === b.mode ? (k[k.length - 1].data += b.data, k) : (k.push(b), k);
          }, []);
        }
        function F(h) {
          const k = [];
          for (let b = 0; b < h.length; b++) {
            const m = h[b];
            switch (m.mode) {
              case e.NUMERIC:
                k.push([
                  m,
                  {
                    data: m.data,
                    mode: e.ALPHANUMERIC,
                    length: m.length
                  },
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: m.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                k.push([
                  m,
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: m.length
                  }
                ]);
                break;
              case e.KANJI:
                k.push([
                  m,
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: c(m.data)
                  }
                ]);
                break;
              case e.BYTE:
                k.push([
                  {
                    data: m.data,
                    mode: e.BYTE,
                    length: c(m.data)
                  }
                ]);
            }
          }
          return k;
        }
        function B(h, k) {
          const b = {}, m = {
            start: {}
          };
          let D = [
            "start"
          ];
          for (let v = 0; v < h.length; v++) {
            const _ = h[v], w = [];
            for (let y = 0; y < _.length; y++) {
              const M = _[y], L = "" + v + y;
              w.push(L), b[L] = {
                node: M,
                lastCount: 0
              }, m[L] = {};
              for (let S = 0; S < D.length; S++) {
                const N = D[S];
                b[N] && b[N].node.mode === M.mode ? (m[N][L] = A(b[N].lastCount + M.length, M.mode) - A(b[N].lastCount, M.mode), b[N].lastCount += M.length) : (b[N] && (b[N].lastCount = M.length), m[N][L] = A(M.length, M.mode) + 4 + e.getCharCountIndicator(M.mode, k));
              }
            }
            D = w;
          }
          for (let v = 0; v < D.length; v++) m[D[v]].end = 0;
          return {
            map: m,
            table: b
          };
        }
        function p(h, k) {
          let b;
          const m = e.getBestModeForData(h);
          if (b = e.from(k, m), b !== e.BYTE && b.bit < m.bit) throw new Error('"' + h + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(m));
          switch (b === e.KANJI && !s.isKanjiModeEnabled() && (b = e.BYTE), b) {
            case e.NUMERIC:
              return new x(h);
            case e.ALPHANUMERIC:
              return new n(h);
            case e.KANJI:
              return new r(h);
            case e.BYTE:
              return new o(h);
          }
        }
        t.fromArray = function(k) {
          return k.reduce(function(b, m) {
            return typeof m == "string" ? b.push(p(m, null)) : m.data && b.push(p(m.data, m.mode)), b;
          }, []);
        }, t.fromString = function(k, b) {
          const m = f(k, s.isKanjiModeEnabled()), D = F(m), v = B(D, b), _ = a.find_path(v.map, "start", "end"), w = [];
          for (let y = 1; y < _.length - 1; y++) w.push(v.table[_[y]].node);
          return t.fromArray(C(w));
        }, t.rawSplit = function(k) {
          return t.fromArray(f(k, s.isKanjiModeEnabled()));
        };
      })(Mo);
      const ix = S0, Cx = lx, ua = K9, fa = Y9, da = ko, Ba = _o, Tx = bo, Sx = sx, Ca = Q9, Ze = yo, Aa = To, Fa = Q0, Ax = Mo;
      function Da(t, e) {
        const x = t.size, n = Ba.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const r = n[o][0], l = n[o][1];
          for (let s = -1; s <= 7; s++) if (!(r + s <= -1 || x <= r + s)) for (let a = -1; a <= 7; a++) l + a <= -1 || x <= l + a || (s >= 0 && s <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && a >= 2 && a <= 4 ? t.set(r + s, l + a, true, true) : t.set(r + s, l + a, false, true));
        }
      }
      function pa(t) {
        const e = t.size;
        for (let x = 8; x < e - 8; x++) {
          const n = x % 2 === 0;
          t.set(x, 6, n, true), t.set(6, x, n, true);
        }
      }
      function ma(t, e) {
        const x = da.getPositions(e);
        for (let n = 0; n < x.length; n++) {
          const o = x[n][0], r = x[n][1];
          for (let l = -2; l <= 2; l++) for (let s = -2; s <= 2; s++) l === -2 || l === 2 || s === -2 || s === 2 || l === 0 && s === 0 ? t.set(o + l, r + s, true, true) : t.set(o + l, r + s, false, true);
        }
      }
      function ha(t, e) {
        const x = t.size, n = Ze.getEncodedBits(e);
        let o, r, l;
        for (let s = 0; s < 18; s++) o = Math.floor(s / 3), r = s % 3 + x - 8 - 3, l = (n >> s & 1) === 1, t.set(o, r, l, true), t.set(r, o, l, true);
      }
      function Fx(t, e, x) {
        const n = t.size, o = Aa.getEncodedBits(e, x);
        let r, l;
        for (r = 0; r < 15; r++) l = (o >> r & 1) === 1, r < 6 ? t.set(r, 8, l, true) : r < 8 ? t.set(r + 1, 8, l, true) : t.set(n - 15 + r, 8, l, true), r < 8 ? t.set(8, n - r - 1, l, true) : r < 9 ? t.set(8, 15 - r - 1 + 1, l, true) : t.set(8, 15 - r - 1, l, true);
        t.set(n - 8, 8, 1, true);
      }
      function va(t, e) {
        const x = t.size;
        let n = -1, o = x - 1, r = 7, l = 0;
        for (let s = x - 1; s > 0; s -= 2) for (s === 6 && s--; ; ) {
          for (let a = 0; a < 2; a++) if (!t.isReserved(o, s - a)) {
            let c = false;
            l < e.length && (c = (e[l] >>> r & 1) === 1), t.set(o, s - a, c), r--, r === -1 && (l++, r = 7);
          }
          if (o += n, o < 0 || x <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function ka(t, e, x) {
        const n = new ua();
        x.forEach(function(a) {
          n.put(a.mode.bit, 4), n.put(a.getLength(), Fa.getCharCountIndicator(a.mode, t)), a.write(n);
        });
        const o = ix.getSymbolTotalCodewords(t), r = Sx.getTotalCodewordsCount(t, e), l = (o - r) * 8;
        for (n.getLengthInBits() + 4 <= l && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const s = (l - n.getLengthInBits()) / 8;
        for (let a = 0; a < s; a++) n.put(a % 2 ? 17 : 236, 8);
        return _a(n, t, e);
      }
      function _a(t, e, x) {
        const n = ix.getSymbolTotalCodewords(e), o = Sx.getTotalCodewordsCount(e, x), r = n - o, l = Sx.getBlocksCount(e, x), s = n % l, a = l - s, c = Math.floor(n / l), E = Math.floor(r / l), f = E + 1, A = c - E, C = new Ca(A);
        let F = 0;
        const B = new Array(l), p = new Array(l);
        let h = 0;
        const k = new Uint8Array(t.buffer);
        for (let _ = 0; _ < l; _++) {
          const w = _ < a ? E : f;
          B[_] = k.slice(F, F + w), p[_] = C.encode(B[_]), F += w, h = Math.max(h, w);
        }
        const b = new Uint8Array(n);
        let m = 0, D, v;
        for (D = 0; D < h; D++) for (v = 0; v < l; v++) D < B[v].length && (b[m++] = B[v][D]);
        for (D = 0; D < A; D++) for (v = 0; v < l; v++) b[m++] = p[v][D];
        return b;
      }
      function ba(t, e, x, n) {
        let o;
        if (Array.isArray(t)) o = Ax.fromArray(t);
        else if (typeof t == "string") {
          let c = e;
          if (!c) {
            const E = Ax.rawSplit(t);
            c = Ze.getBestVersionForData(E, x);
          }
          o = Ax.fromString(t, c || 40);
        } else throw new Error("Invalid data");
        const r = Ze.getBestVersionForData(o, x);
        if (!r) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = r;
        else if (e < r) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + r + `.
`);
        const l = ka(e, x, o), s = ix.getSymbolSize(e), a = new fa(s);
        return Da(a, e), pa(a), ma(a, e), Fx(a, x, 0), e >= 7 && ha(a, e), va(a, l), isNaN(n) && (n = Tx.getBestMask(a, Fx.bind(null, a, x))), Tx.applyMask(n, a), Fx(a, x, n), {
          modules: a,
          version: e,
          errorCorrectionLevel: x,
          maskPattern: n,
          segments: o
        };
      }
      ho.create = function(e, x) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = Cx.M, o, r;
        return typeof x < "u" && (n = Cx.from(x.errorCorrectionLevel, Cx.M), o = Ze.from(x.version), r = Tx.from(x.maskPattern), x.toSJISFunc && ix.setToSJISFunction(x.toSJISFunc)), ba(e, o, n, r);
      };
      var Lo = {}, Xx = {};
      (function(t) {
        function e(x) {
          if (typeof x == "number" && (x = x.toString()), typeof x != "string") throw new Error("Color should be defined as hex string");
          let n = x.slice().replace("#", "").split("");
          if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + x);
          (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(r) {
            return [
              r,
              r
            ];
          }))), n.length === 6 && n.push("F", "F");
          const o = parseInt(n.join(""), 16);
          return {
            r: o >> 24 & 255,
            g: o >> 16 & 255,
            b: o >> 8 & 255,
            a: o & 255,
            hex: "#" + n.slice(0, 6).join("")
          };
        }
        t.getOptions = function(n) {
          n || (n = {}), n.color || (n.color = {});
          const o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, r = n.width && n.width >= 21 ? n.width : void 0, l = n.scale || 4;
          return {
            width: r,
            scale: r ? 4 : l,
            margin: o,
            color: {
              dark: e(n.color.dark || "#000000ff"),
              light: e(n.color.light || "#ffffffff")
            },
            type: n.type,
            rendererOpts: n.rendererOpts || {}
          };
        }, t.getScale = function(n, o) {
          return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
        }, t.getImageWidth = function(n, o) {
          const r = t.getScale(n, o);
          return Math.floor((n + o.margin * 2) * r);
        }, t.qrToImageData = function(n, o, r) {
          const l = o.modules.size, s = o.modules.data, a = t.getScale(l, r), c = Math.floor((l + r.margin * 2) * a), E = r.margin * a, f = [
            r.color.light,
            r.color.dark
          ];
          for (let A = 0; A < c; A++) for (let C = 0; C < c; C++) {
            let F = (A * c + C) * 4, B = r.color.light;
            if (A >= E && C >= E && A < c - E && C < c - E) {
              const p = Math.floor((A - E) / a), h = Math.floor((C - E) / a);
              B = f[s[p * l + h] ? 1 : 0];
            }
            n[F++] = B.r, n[F++] = B.g, n[F++] = B.b, n[F] = B.a;
          }
        };
      })(Xx);
      (function(t) {
        const e = Xx;
        function x(o, r, l) {
          o.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = l, r.width = l, r.style.height = l + "px", r.style.width = l + "px";
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        t.render = function(r, l, s) {
          let a = s, c = l;
          typeof a > "u" && (!l || !l.getContext) && (a = l, l = void 0), l || (c = n()), a = e.getOptions(a);
          const E = e.getImageWidth(r.modules.size, a), f = c.getContext("2d"), A = f.createImageData(E, E);
          return e.qrToImageData(A.data, r, a), x(f, c, E), f.putImageData(A, 0, 0), c;
        }, t.renderToDataURL = function(r, l, s) {
          let a = s;
          typeof a > "u" && (!l || !l.getContext) && (a = l, l = void 0), a || (a = {});
          const c = t.render(r, l, a), E = a.type || "image/png", f = a.rendererOpts || {};
          return c.toDataURL(E, f.quality);
        };
      })(Lo);
      var jo = {};
      const wa = Xx;
      function sn(t, e) {
        const x = t.a / 255, n = e + '="' + t.hex + '"';
        return x < 1 ? n + " " + e + '-opacity="' + x.toFixed(2).slice(1) + '"' : n;
      }
      function Dx(t, e, x) {
        let n = t + e;
        return typeof x < "u" && (n += " " + x), n;
      }
      function ga(t, e, x) {
        let n = "", o = 0, r = false, l = 0;
        for (let s = 0; s < t.length; s++) {
          const a = Math.floor(s % e), c = Math.floor(s / e);
          !a && !r && (r = true), t[s] ? (l++, s > 0 && a > 0 && t[s - 1] || (n += r ? Dx("M", a + x, 0.5 + c + x) : Dx("m", o, 0), o = 0, r = false), a + 1 < e && t[s + 1] || (n += Dx("h", l), l = 0)) : o++;
        }
        return n;
      }
      jo.render = function(e, x, n) {
        const o = wa.getOptions(x), r = e.modules.size, l = e.modules.data, s = r + o.margin * 2, a = o.color.light.a ? "<path " + sn(o.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", c = "<path " + sn(o.color.dark, "stroke") + ' d="' + ga(l, r, o.margin) + '"/>', E = 'viewBox="0 0 ' + s + " " + s + '"', A = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + E + ' shape-rendering="crispEdges">' + a + c + `</svg>
`;
        return typeof n == "function" && n(null, A), A;
      };
      const ya = G9, Mx = ho, No = Lo, Pa = jo;
      function Zx(t, e, x, n, o) {
        const r = [].slice.call(arguments, 1), l = r.length, s = typeof r[l - 1] == "function";
        if (!s && !ya()) throw new Error("Callback required as last argument");
        if (s) {
          if (l < 2) throw new Error("Too few arguments provided");
          l === 2 ? (o = x, x = e, e = n = void 0) : l === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = x, x = e, e = void 0));
        } else {
          if (l < 1) throw new Error("Too few arguments provided");
          return l === 1 ? (x = e, e = n = void 0) : l === 2 && !e.getContext && (n = x, x = e, e = void 0), new Promise(function(a, c) {
            try {
              const E = Mx.create(x, n);
              a(t(E, e, n));
            } catch (E) {
              c(E);
            }
          });
        }
        try {
          const a = Mx.create(x, n);
          o(null, t(a, e, n));
        } catch (a) {
          o(a);
        }
      }
      oe.create = Mx.create;
      oe.toCanvas = Zx.bind(null, No.render);
      oe.toDataURL = Zx.bind(null, No.renderToDataURL);
      oe.toString = Zx.bind(null, function(t, e, x) {
        return Pa.render(t, x);
      });
      function Ta(t) {
        let e, x, n, o, r, l, s = t[0].isHost ? "You started this group" : "Group encounter", a, c, E, f = fn(t[0].date) + "", A, C, F, B, p = t[0].isHost && t[11](), h, k, b, m, D, v, _, w, y, M, L = t[3] && an(t);
        function S(O, R) {
          return O[5] ? Ia : Ma;
        }
        let N = S(t), I = N(t), q = p && En(t), G = t[8] && un();
        function U(O, R) {
          return O[4] ? qa : Na;
        }
        let W = U(t), Y = W(t);
        return {
          c() {
            L && L.c(), e = g(), x = d("section"), n = d("div"), o = d("span"), o.textContent = "groups", r = g(), l = d("span"), a = j(s), c = g(), E = d("p"), A = j(f), C = g(), F = d("section"), I.c(), B = g(), q && q.c(), h = g(), k = d("section"), b = d("div"), b.innerHTML = '<span class="material-icons privacy-icon svelte-ctgveb">lock_outline</span> <p class="privacy-text svelte-ctgveb">Your note is stored encrypted and never shared.</p>', m = g(), D = d("textarea"), v = g(), G && G.c(), _ = g(), w = d("section"), Y.c(), u(o, "class", "material-icons status-icon svelte-ctgveb"), u(l, "class", "status-label svelte-ctgveb"), u(n, "class", "status-row svelte-ctgveb"), u(E, "class", "date svelte-ctgveb"), u(x, "class", "card pad svelte-ctgveb"), u(F, "class", "card svelte-ctgveb"), u(b, "class", "privacy-row svelte-ctgveb"), u(D, "placeholder", "Add a private note\u2026"), u(D, "rows", "5"), u(D, "class", "svelte-ctgveb"), u(k, "class", "card pad svelte-ctgveb"), u(w, "class", "card svelte-ctgveb");
          },
          m(O, R) {
            L && L.m(O, R), T(O, e, R), T(O, x, R), i(x, n), i(n, o), i(n, r), i(n, l), i(l, a), i(x, c), i(x, E), i(E, A), T(O, C, R), T(O, F, R), I.m(F, null), T(O, B, R), q && q.m(O, R), T(O, h, R), T(O, k, R), i(k, b), i(k, m), i(k, D), t0(D, t[7]), i(k, v), G && G.m(k, null), T(O, _, R), T(O, w, R), Y.m(w, null), y || (M = [
              H(D, "input", t[19]),
              H(D, "input", t[15])
            ], y = true);
          },
          p(O, R) {
            O[3] ? L ? L.p(O, R) : (L = an(O), L.c(), L.m(e.parentNode, e)) : L && (L.d(1), L = null), R & 1 && s !== (s = O[0].isHost ? "You started this group" : "Group encounter") && z(a, s), R & 1 && f !== (f = fn(O[0].date) + "") && z(A, f), N === (N = S(O)) && I ? I.p(O, R) : (I.d(1), I = N(O), I && (I.c(), I.m(F, null))), R & 1 && (p = O[0].isHost && O[11]()), p ? q ? q.p(O, R) : (q = En(O), q.c(), q.m(h.parentNode, h)) : q && (q.d(1), q = null), R & 128 && t0(D, O[7]), O[8] ? G || (G = un(), G.c(), G.m(k, null)) : G && (G.d(1), G = null), W === (W = U(O)) && Y ? Y.p(O, R) : (Y.d(1), Y = W(O), Y && (Y.c(), Y.m(w, null)));
          },
          d(O) {
            O && (P(e), P(x), P(C), P(F), P(B), P(h), P(k), P(_), P(w)), L && L.d(O), I.d(), q && q.d(O), G && G.d(), Y.d(), y = false, a0(M);
          }
        };
      }
      function Sa(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-ctgveb">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-ctgveb">\u2190 Back to encounters</a>', u(e, "class", "card pad svelte-ctgveb");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function an(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = g(), o = j(t[3]), u(x, "class", "material-icons svelte-ctgveb"), u(e, "class", "toast error-toast svelte-ctgveb");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 8 && z(o, r[3]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function Ma(t) {
        let e, x, n, o, r = (t[0].name ? t[0].name : "Add group name") + "", l, s, a, c, E, f, A = t[0].name && cn();
        return {
          c() {
            e = d("button"), x = d("span"), x.textContent = "edit", n = g(), o = d("span"), l = j(r), s = g(), A && A.c(), a = g(), c = d("span"), c.textContent = "chevron_right", u(x, "class", "material-icons action-icon svelte-ctgveb"), u(o, "class", "action-label svelte-ctgveb"), u(c, "class", "material-icons action-chevron svelte-ctgveb"), u(e, "class", "action-row svelte-ctgveb");
          },
          m(C, F) {
            T(C, e, F), i(e, x), i(e, n), i(e, o), i(o, l), i(o, s), A && A.m(o, null), i(e, a), i(e, c), E || (f = H(e, "click", t[12]), E = true);
          },
          p(C, F) {
            F & 1 && r !== (r = (C[0].name ? C[0].name : "Add group name") + "") && z(l, r), C[0].name ? A || (A = cn(), A.c(), A.m(o, null)) : A && (A.d(1), A = null);
          },
          d(C) {
            C && P(e), A && A.d(), E = false, f();
          }
        };
      }
      function Ia(t) {
        let e, x, n, o, r, l, s, a, c, E, f = t[2] ? "Saving\u2026" : "Save", A, C, F;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "edit", n = g(), o = d("form"), r = d("input"), l = g(), s = d("div"), a = d("button"), a.textContent = "Cancel", c = g(), E = d("button"), A = j(f), u(x, "class", "material-icons action-icon svelte-ctgveb"), u(r, "type", "text"), u(r, "placeholder", "Optional group name"), u(r, "maxlength", "64"), r.autofocus = true, u(r, "class", "svelte-ctgveb"), u(a, "type", "button"), u(a, "class", "btn-text svelte-ctgveb"), u(E, "type", "submit"), u(E, "class", "btn-filled-sm svelte-ctgveb"), E.disabled = t[2], u(s, "class", "name-actions svelte-ctgveb"), u(o, "class", "name-form svelte-ctgveb"), u(e, "class", "action-row edit-row svelte-ctgveb");
          },
          m(B, p) {
            T(B, e, p), i(e, x), i(e, n), i(e, o), i(o, r), t0(r, t[6]), i(o, l), i(o, s), i(s, a), i(s, c), i(s, E), i(E, A), r.focus(), C || (F = [
              H(r, "input", t[18]),
              H(a, "click", t[13]),
              H(o, "submit", V0(t[14]))
            ], C = true);
          },
          p(B, p) {
            p & 64 && r.value !== B[6] && t0(r, B[6]), p & 4 && f !== (f = B[2] ? "Saving\u2026" : "Save") && z(A, f), p & 4 && (E.disabled = B[2]);
          },
          d(B) {
            B && P(e), C = false, a0(F);
          }
        };
      }
      function cn(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Tap to change", u(e, "class", "action-sub svelte-ctgveb");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function En(t) {
        let e, x, n, o, r;
        function l(c, E) {
          return c[9] ? ja : La;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Show this QR for others to join", n = g(), a.c(), o = g(), r = d("p"), r.textContent = "Valid for 24 hours from when you created the group.", u(x, "class", "qr-label svelte-ctgveb"), u(r, "class", "qr-hint svelte-ctgveb"), u(e, "class", "card pad qr-card svelte-ctgveb");
          },
          m(c, E) {
            T(c, e, E), i(e, x), i(e, n), a.m(e, null), i(e, o), i(e, r);
          },
          p(c, E) {
            s === (s = l(c)) && a ? a.p(c, E) : (a.d(1), a = s(c), a && (a.c(), a.m(e, o)));
          },
          d(c) {
            c && P(e), a.d();
          }
        };
      }
      function La(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Generating QR\u2026", u(e, "class", "muted svelte-ctgveb");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function ja(t) {
        let e;
        return {
          c() {
            e = d("div"), u(e, "class", "qr-wrap svelte-ctgveb");
          },
          m(x, n) {
            T(x, e, n), e.innerHTML = t[9];
          },
          p(x, n) {
            n & 512 && (e.innerHTML = x[9]);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function un(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", u(e, "class", "save-hint svelte-ctgveb");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Na(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-ctgveb">delete_outline</span> <span class="action-label danger svelte-ctgveb">Delete group encounter</span>', u(e, "class", "action-row svelte-ctgveb");
          },
          m(o, r) {
            T(o, e, r), x || (n = H(e, "click", t[21]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function qa(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Deleting\u2026" : "Delete", c, E, f;
        return {
          c() {
            e = d("div"), x = d("p"), x.textContent = "Delete this group encounter? This cannot be undone.", n = g(), o = d("div"), r = d("button"), r.textContent = "Cancel", l = g(), s = d("button"), c = j(a), u(x, "class", "confirm-text svelte-ctgveb"), u(r, "class", "btn-text svelte-ctgveb"), u(s, "class", "btn-danger-sm svelte-ctgveb"), s.disabled = t[2], u(o, "class", "confirm-actions svelte-ctgveb"), u(e, "class", "confirm-row svelte-ctgveb");
          },
          m(A, C) {
            T(A, e, C), i(e, x), i(e, n), i(e, o), i(o, r), i(o, l), i(o, s), i(s, c), E || (f = [
              H(r, "click", t[20]),
              H(s, "click", t[16])
            ], E = true);
          },
          p(A, C) {
            C & 4 && a !== (a = A[2] ? "Deleting\u2026" : "Delete") && z(c, a), C & 4 && (s.disabled = A[2]);
          },
          d(A) {
            A && P(e), E = false, a0(f);
          }
        };
      }
      function Ra(t) {
        let e, x, n, o, r, l, s, a = (t[1] ? "Group not found" : t[10]) + "", c, E, f;
        e = new H0({});
        function A(B, p) {
          if (B[1]) return Sa;
          if (B[0]) return Ta;
        }
        let C = A(t), F = C && C(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), r = d("a"), r.innerHTML = '<span class="material-icons svelte-ctgveb">arrow_back</span>', l = g(), s = d("h1"), c = j(a), E = g(), F && F.c(), u(r, "class", "back-btn svelte-ctgveb"), u(r, "href", "#/encounters"), u(s, "class", "svelte-ctgveb"), u(o, "class", "page-header svelte-ctgveb"), u(n, "class", "svelte-ctgveb");
          },
          m(B, p) {
            k0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(o, r), i(o, l), i(o, s), i(s, c), i(n, E), F && F.m(n, null), f = true;
          },
          p(B, [p]) {
            (!f || p & 1026) && a !== (a = (B[1] ? "Group not found" : B[10]) + "") && z(c, a), C === (C = A(B)) && F ? F.p(B, p) : (F && F.d(1), F = C && C(B), F && (F.c(), F.m(n, null)));
          },
          i(B) {
            f || (d0(e.$$.fragment, B), f = true);
          },
          o(B) {
            C0(e.$$.fragment, B), f = false;
          },
          d(B) {
            B && (P(x), P(n)), _0(e, B), F && F.d();
          }
        };
      }
      function fn(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Oa(t, e, x) {
        let n, { params: o = {} } = e, r = null, l = false, s = false, a = null, c = false, E = false, f = "", A = "", C = false, F = null, B = null;
        y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
          p();
        });
        function p() {
          const I = o.tokenHex;
          if (x(0, r = Fo().find((q) => e0(q.token) === I) ?? null), !r) {
            x(1, l = true);
            return;
          }
          x(7, A = r.note ?? ""), r.isHost && k() && b();
        }
        function h() {
          return e0(r.token);
        }
        function k() {
          return r ? Math.floor(Date.now() / 1e3) - r.createdAt < 86400 : false;
        }
        async function b() {
          de();
          const I = Math.floor(Date.now() / 1e3), q = vl(h(), I, e0(r.hostContactId), r.name);
          try {
            x(9, B = await oe.toString(q, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#1a1a1a",
                light: "#ffffff"
              }
            }));
          } catch (G) {
            x(3, a = "Could not render QR code: " + G.message);
          }
        }
        function m() {
          x(6, f = r.name ?? ""), x(5, E = true), x(3, a = null);
        }
        function D() {
          x(5, E = false), x(3, a = null);
        }
        async function v() {
          if (!s) {
            x(2, s = true), x(3, a = null);
            try {
              const I = f.trim() || null;
              await ct(h(), {
                name: I
              }), p(), x(5, E = false);
            } catch (I) {
              x(3, a = I.message);
            } finally {
              x(2, s = false);
            }
          }
        }
        function _() {
          x(8, C = A !== (r.note ?? "")), clearTimeout(F), C && (F = setTimeout(w, 1500));
        }
        async function w() {
          if (C) try {
            const I = A.trim() || null;
            await ct(h(), {
              note: I
            }), p(), x(8, C = false);
          } catch (I) {
            x(3, a = I.message);
          }
        }
        async function y() {
          if (!s) {
            x(2, s = true), x(3, a = null);
            try {
              clearTimeout(F), await ls(h()), E0("/encounters");
            } catch (I) {
              x(3, a = I.message), x(2, s = false);
            }
          }
        }
        function M() {
          f = this.value, x(6, f);
        }
        function L() {
          A = this.value, x(7, A);
        }
        const S = () => x(4, c = false), N = () => x(4, c = true);
        return t.$$set = (I) => {
          "params" in I && x(17, o = I.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(10, n = r?.name || "Group encounter");
        }, [
          r,
          l,
          s,
          a,
          c,
          E,
          f,
          A,
          C,
          B,
          n,
          k,
          m,
          D,
          v,
          _,
          y,
          o,
          M,
          L,
          S,
          N
        ];
      }
      class Ha extends m0 {
        constructor(e) {
          super(), p0(this, e, Oa, Ra, F0, {
            params: 17
          });
        }
      }
      async function Ua(t) {
        const e = q0();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const x = e.encounters.map((E) => ({
          raw_token: e0(E.rawToken),
          date: E.date,
          their_contact_id: e0(E.theirContactId)
        })), n = (e.relationships || []).map((E) => ({
          raw_token: e0(E.rawToken),
          date: E.createdAt,
          their_contact_id: e0(E.theirContactId)
        })), o = (e.results || []).map((E) => {
          const f = {};
          for (const A of R0) f[A] = E.positiveDiseases.includes(A) ? "positive" : "negative";
          return {
            test_date: E.date,
            result_json: JSON.stringify({
              panel: f,
              test_date: E.date,
              submission_type: "self_reported"
            }),
            lab_signature: "",
            user_pubkey: "",
            user_signature: "",
            is_positive: E.positiveDiseases.length > 0 ? 1 : 0,
            submission_type: "self_reported",
            has_notified: E.hasNotified ? 1 : 0,
            note: null
          };
        }), r = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: e0(e.myContactId),
          encounters: [
            ...x,
            ...n
          ],
          test_results: o
        })), l = ye(16), s = await G0(t, l), a = Pe(s, r);
        s.fill(0);
        const c = new Uint8Array(16 + a.length);
        return c.set(l, 0), c.set(a, 16), c;
      }
      const za = "peachsafe-backup";
      function dn(t, e, x) {
        const n = t.slice();
        return n[36] = e[x], n;
      }
      function Ga(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b, m, D, v, _, w, y, M, L = t[4] ? "verified_user" : "shield", S, N, I = t[4] ? "Enabled" : "Disabled", q, G, U, W;
        function Y(Z, i0) {
          return Z[3] ? Wa : Ya;
        }
        let O = Y(t), R = O(t);
        function $(Z, i0) {
          return Z[17] ? Ja : Qa;
        }
        let J = $(t), V = J(t);
        function l0(Z, i0) {
          if (Z[13] === "idle") return xi;
          if (Z[13] === "entering_pin") return ei;
          if (Z[13] === "exporting") return $a;
          if (Z[13] === "done") return Za;
          if (Z[13] === "error") return Xa;
        }
        let c0 = l0(t), n0 = c0 && c0(t);
        function s0(Z, i0) {
          return Z[4] ? ni : ti;
        }
        let Q = s0(t), x0 = Q(t);
        function r0(Z, i0) {
          return Z[4] ? oi : ri;
        }
        let B0 = r0(t), u0 = B0(t);
        return {
          c() {
            e = d("section"), x = d("div"), n = d("div"), o = d("h2"), o.textContent = "Email", r = g(), l = d("div"), s = d("span"), a = j(t[2]), c = g(), R.c(), E = g(), f = d("a"), f.textContent = "Change email", A = g(), C = d("section"), C.innerHTML = '<div class="row svelte-1pt6t4n"><div class="svelte-1pt6t4n"><h2 class="svelte-1pt6t4n">Password</h2> <p class="hint svelte-1pt6t4n">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-1pt6t4n">Change password</a></div>', F = g(), B = d("section"), p = d("h2"), p.textContent = "Export to mobile", h = g(), V.c(), k = g(), n0 && n0.c(), b = g(), m = d("section"), D = d("div"), v = d("div"), _ = d("h2"), _.textContent = "Two-factor authentication", w = g(), y = d("span"), M = d("span"), S = j(L), N = g(), q = j(I), G = g(), U = d("p"), x0.c(), W = g(), u0.c(), u(o, "class", "svelte-1pt6t4n"), u(s, "class", "hint email-value svelte-1pt6t4n"), u(l, "class", "email-meta svelte-1pt6t4n"), u(n, "class", "svelte-1pt6t4n"), u(f, "href", "#/change-email"), u(f, "class", "btn-outline-sm svelte-1pt6t4n"), u(x, "class", "row svelte-1pt6t4n"), u(e, "class", "card svelte-1pt6t4n"), u(C, "class", "card svelte-1pt6t4n"), u(p, "class", "svelte-1pt6t4n"), u(B, "class", "card svelte-1pt6t4n"), u(_, "class", "svelte-1pt6t4n"), u(M, "class", "material-icons svelte-1pt6t4n"), u(y, "class", "status-badge svelte-1pt6t4n"), o0(y, "enabled", t[4]), o0(y, "disabled", !t[4]), u(v, "class", "totp-heading svelte-1pt6t4n"), u(U, "class", "hint svelte-1pt6t4n"), u(m, "class", "card svelte-1pt6t4n");
          },
          m(Z, i0) {
            T(Z, e, i0), i(e, x), i(x, n), i(n, o), i(n, r), i(n, l), i(l, s), i(s, a), i(l, c), R.m(l, null), i(x, E), i(x, f), T(Z, A, i0), T(Z, C, i0), T(Z, F, i0), T(Z, B, i0), i(B, p), i(B, h), V.m(B, null), i(B, k), n0 && n0.m(B, null), T(Z, b, i0), T(Z, m, i0), i(m, D), i(D, v), i(v, _), i(v, w), i(v, y), i(y, M), i(M, S), i(y, N), i(y, q), i(D, G), i(D, U), x0.m(U, null), i(m, W), u0.m(m, null);
          },
          p(Z, i0) {
            i0[0] & 4 && z(a, Z[2]), O !== (O = Y(Z)) && (R.d(1), R = O(Z), R && (R.c(), R.m(l, null))), J !== (J = $(Z)) && (V.d(1), V = J(Z), V && (V.c(), V.m(B, k))), c0 === (c0 = l0(Z)) && n0 ? n0.p(Z, i0) : (n0 && n0.d(1), n0 = c0 && c0(Z), n0 && (n0.c(), n0.m(B, null))), i0[0] & 16 && L !== (L = Z[4] ? "verified_user" : "shield") && z(S, L), i0[0] & 16 && I !== (I = Z[4] ? "Enabled" : "Disabled") && z(q, I), i0[0] & 16 && o0(y, "enabled", Z[4]), i0[0] & 16 && o0(y, "disabled", !Z[4]), Q !== (Q = s0(Z)) && (x0.d(1), x0 = Q(Z), x0 && (x0.c(), x0.m(U, null))), B0 === (B0 = r0(Z)) && u0 ? u0.p(Z, i0) : (u0.d(1), u0 = B0(Z), u0 && (u0.c(), u0.m(m, null)));
          },
          d(Z) {
            Z && (P(e), P(A), P(C), P(F), P(B), P(b), P(m)), R.d(), V.d(), n0 && n0.d(), x0.d(), u0.d();
          }
        };
      }
      function Va(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[1]), u(e, "class", "error svelte-1pt6t4n");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2 && z(x, n[1]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Ka(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Loading\u2026", u(e, "class", "muted svelte-1pt6t4n");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Ya(t) {
        let e;
        return {
          c() {
            e = d("span"), e.innerHTML = `<span class="material-icons svelte-1pt6t4n">warning</span>
                Unverified`, u(e, "class", "unverified-badge svelte-1pt6t4n");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Wa(t) {
        let e;
        return {
          c() {
            e = d("span"), e.innerHTML = `<span class="material-icons svelte-1pt6t4n">verified</span>
                Verified`, u(e, "class", "verified-badge svelte-1pt6t4n");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Qa(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", u(e, "class", "hint svelte-1pt6t4n");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Ja(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", u(e, "class", "hint warning svelte-1pt6t4n");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Xa(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = d("p"), x = j(t[16]), n = g(), o = d("button"), o.textContent = "Try again", u(e, "class", "error svelte-1pt6t4n"), u(o, "class", "btn-ghost svelte-1pt6t4n");
          },
          m(s, a) {
            T(s, e, a), i(e, x), T(s, n, a), T(s, o, a), r || (l = H(o, "click", t[20]), r = true);
          },
          p(s, a) {
            a[0] & 65536 && z(x, s[16]);
          },
          d(s) {
            s && (P(e), P(n), P(o)), r = false, l();
          }
        };
      }
      function Za(t) {
        let e, x, n, o, r;
        return {
          c() {
            e = d("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, x = g(), n = d("button"), n.textContent = "Done", u(e, "class", "hint svelte-1pt6t4n"), u(n, "class", "btn-ghost svelte-1pt6t4n");
          },
          m(l, s) {
            T(l, e, s), T(l, x, s), T(l, n, s), o || (r = H(n, "click", t[20]), o = true);
          },
          p: X,
          d(l) {
            l && (P(e), P(x), P(n)), o = false, r();
          }
        };
      }
      function $a(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Encrypting\u2026", u(e, "class", "hint svelte-1pt6t4n");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function ei(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b = t[16] && Bn(t);
        return {
          c() {
            e = d("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", x = g(), n = d("div"), o = d("label"), r = j(`PIN
            `), l = d("input"), s = g(), a = d("label"), c = j(`Confirm PIN
            `), E = d("input"), f = g(), b && b.c(), A = g(), C = d("div"), F = d("button"), F.textContent = "Download backup", B = g(), p = d("button"), p.textContent = "Cancel", u(e, "class", "hint svelte-1pt6t4n"), u(l, "type", "password"), u(l, "inputmode", "numeric"), u(l, "maxlength", "6"), u(l, "placeholder", "6 digits"), u(l, "autocomplete", "new-password"), u(E, "type", "password"), u(E, "inputmode", "numeric"), u(E, "maxlength", "6"), u(E, "placeholder", "6 digits"), u(E, "autocomplete", "new-password"), u(F, "class", "btn-primary svelte-1pt6t4n"), u(p, "class", "btn-ghost svelte-1pt6t4n"), u(C, "class", "export-actions svelte-1pt6t4n"), u(n, "class", "export-form svelte-1pt6t4n");
          },
          m(m, D) {
            T(m, e, D), T(m, x, D), T(m, n, D), i(n, o), i(o, r), i(o, l), t0(l, t[14]), i(n, s), i(n, a), i(a, c), i(a, E), t0(E, t[15]), i(n, f), b && b.m(n, null), i(n, A), i(n, C), i(C, F), i(C, B), i(C, p), h || (k = [
              H(l, "input", t[24]),
              H(E, "input", t[25]),
              H(F, "click", t[19]),
              H(p, "click", t[20])
            ], h = true);
          },
          p(m, D) {
            D[0] & 16384 && l.value !== m[14] && t0(l, m[14]), D[0] & 32768 && E.value !== m[15] && t0(E, m[15]), m[16] ? b ? b.p(m, D) : (b = Bn(m), b.c(), b.m(n, A)) : b && (b.d(1), b = null);
          },
          d(m) {
            m && (P(e), P(x), P(n)), b && b.d(), h = false, a0(k);
          }
        };
      }
      function xi(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.textContent = "Export data for mobile app", u(e, "class", "btn-primary svelte-1pt6t4n");
          },
          m(o, r) {
            T(o, e, r), x || (n = H(e, "click", t[23]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function Bn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[16]), u(e, "class", "error svelte-1pt6t4n");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 65536 && z(x, n[16]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ti(t) {
        let e;
        return {
          c() {
            e = j("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function ni(t) {
        let e;
        return {
          c() {
            e = j("Your account requires a code from your authenticator app at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function oi(t) {
        let e, x, n, o, r, l, s, a = t[5] !== 1 ? "s" : "", c, E, f, A, C, F, B, p, h;
        function k(v, _) {
          return v[12].length > 0 ? si : li;
        }
        let b = k(t), m = b(t), D = t[8] && Fn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("span"), n.textContent = "key", o = g(), r = d("span"), l = j(t[5]), s = j(" backup code"), c = j(a), E = j(" remaining"), f = g(), m.c(), A = g(), C = d("div"), D && D.c(), F = g(), B = d("button"), B.textContent = "Disable 2FA", u(n, "class", "material-icons svelte-1pt6t4n"), u(x, "class", "backup-count svelte-1pt6t4n"), u(e, "class", "backup-section svelte-1pt6t4n"), u(B, "class", "btn-danger svelte-1pt6t4n"), u(C, "class", "danger-zone svelte-1pt6t4n");
          },
          m(v, _) {
            T(v, e, _), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(r, s), i(r, c), i(r, E), i(e, f), m.m(e, null), T(v, A, _), T(v, C, _), D && D.m(C, null), i(C, F), i(C, B), p || (h = H(B, "click", t[29]), p = true);
          },
          p(v, _) {
            _[0] & 32 && z(l, v[5]), _[0] & 32 && a !== (a = v[5] !== 1 ? "s" : "") && z(c, a), b === (b = k(v)) && m ? m.p(v, _) : (m.d(1), m = b(v), m && (m.c(), m.m(e, null))), v[8] ? D ? D.p(v, _) : (D = Fn(v), D.c(), D.m(C, F)) : D && (D.d(1), D = null);
          },
          d(v) {
            v && (P(e), P(A), P(C)), m.d(), D && D.d(), p = false, h();
          }
        };
      }
      function ri(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.textContent = "Enable 2FA", u(e, "class", "btn-primary svelte-1pt6t4n");
          },
          m(o, r) {
            T(o, e, r), x || (n = H(e, "click", t[26]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function li(t) {
        let e, x, n, o, r, l = t[11] && Cn(t);
        return {
          c() {
            l && l.c(), e = g(), x = d("button"), n = j("Regenerate backup codes"), u(x, "class", "btn-outline-sm svelte-1pt6t4n"), x.disabled = t[10];
          },
          m(s, a) {
            l && l.m(s, a), T(s, e, a), T(s, x, a), i(x, n), o || (r = H(x, "click", t[28]), o = true);
          },
          p(s, a) {
            s[11] ? l ? l.p(s, a) : (l = Cn(s), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), a[0] & 1024 && (x.disabled = s[10]);
          },
          d(s) {
            s && (P(e), P(x)), l && l.d(s), o = false, r();
          }
        };
      }
      function si(t) {
        let e, x, n, o, r, l, s, a, c, E, f = A0(t[12]), A = [];
        for (let C = 0; C < f.length; C += 1) A[C] = An(dn(t, f, C));
        return {
          c() {
            e = d("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", x = g(), n = d("div");
            for (let C = 0; C < A.length; C += 1) A[C].c();
            o = g(), r = d("div"), l = d("button"), l.innerHTML = `<span class="material-icons svelte-1pt6t4n">download</span>
                Download`, s = g(), a = d("button"), a.textContent = "Done", u(e, "class", "hint warning svelte-1pt6t4n"), u(n, "class", "backup-grid"), u(l, "class", "btn-outline-sm dl-btn svelte-1pt6t4n"), u(a, "class", "btn-outline-sm svelte-1pt6t4n"), u(r, "class", "regen-code-actions svelte-1pt6t4n");
          },
          m(C, F) {
            T(C, e, F), T(C, x, F), T(C, n, F);
            for (let B = 0; B < A.length; B += 1) A[B] && A[B].m(n, null);
            T(C, o, F), T(C, r, F), i(r, l), i(r, s), i(r, a), c || (E = [
              H(l, "click", t[27]),
              H(a, "click", t[22])
            ], c = true);
          },
          p(C, F) {
            if (F[0] & 4096) {
              f = A0(C[12]);
              let B;
              for (B = 0; B < f.length; B += 1) {
                const p = dn(C, f, B);
                A[B] ? A[B].p(p, F) : (A[B] = An(p), A[B].c(), A[B].m(n, null));
              }
              for (; B < A.length; B += 1) A[B].d(1);
              A.length = f.length;
            }
          },
          d(C) {
            C && (P(e), P(x), P(n), P(o), P(r)), O0(A, C), c = false, a0(E);
          }
        };
      }
      function Cn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[11]), u(e, "class", "error svelte-1pt6t4n");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && z(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function An(t) {
        let e, x = t[36] + "", n;
        return {
          c() {
            e = d("code"), n = j(x), u(e, "class", "backup-code");
          },
          m(o, r) {
            T(o, e, r), i(e, n);
          },
          p(o, r) {
            r[0] & 4096 && x !== (x = o[36] + "") && z(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Fn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[8]), u(e, "class", "error svelte-1pt6t4n");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 256 && z(x, n[8]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Dn(t) {
        let e, x, n, o, r, l, s, a, c, E = t[7] ? "Disabling\u2026" : "Yes, disable 2FA", f, A, C, F, B, p, h = t[8] && pn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Disable two-factor authentication?", o = g(), r = d("p"), r.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, l = g(), h && h.c(), s = g(), a = d("div"), c = d("button"), f = j(E), A = g(), C = d("button"), F = j("Cancel"), u(n, "id", "disable-title"), u(n, "class", "svelte-1pt6t4n"), u(r, "class", "svelte-1pt6t4n"), u(c, "class", "btn-danger svelte-1pt6t4n"), c.disabled = t[7], u(C, "class", "btn-ghost svelte-1pt6t4n"), C.disabled = t[7], u(a, "class", "dialog-actions svelte-1pt6t4n"), u(x, "class", "dialog svelte-1pt6t4n"), u(e, "class", "overlay svelte-1pt6t4n"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "disable-title");
          },
          m(k, b) {
            T(k, e, b), i(e, x), i(x, n), i(x, o), i(x, r), i(x, l), h && h.m(x, null), i(x, s), i(x, a), i(a, c), i(c, f), i(a, A), i(a, C), i(C, F), B || (p = [
              H(c, "click", t[18]),
              H(C, "click", t[30])
            ], B = true);
          },
          p(k, b) {
            k[8] ? h ? h.p(k, b) : (h = pn(k), h.c(), h.m(x, s)) : h && (h.d(1), h = null), b[0] & 128 && E !== (E = k[7] ? "Disabling\u2026" : "Yes, disable 2FA") && z(f, E), b[0] & 128 && (c.disabled = k[7]), b[0] & 128 && (C.disabled = k[7]);
          },
          d(k) {
            k && P(e), h && h.d(), B = false, a0(p);
          }
        };
      }
      function pn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[8]), u(e, "class", "error svelte-1pt6t4n");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 256 && z(x, n[8]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function mn(t) {
        let e, x, n, o, r, l, s, a, c, E = t[10] ? "Regenerating\u2026" : "Regenerate", f, A, C, F, B, p, h = t[11] && hn(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Regenerate backup codes?", o = g(), r = d("p"), r.textContent = "All existing backup codes will be permanently invalidated.", l = g(), h && h.c(), s = g(), a = d("div"), c = d("button"), f = j(E), A = g(), C = d("button"), F = j("Cancel"), u(n, "id", "regen-title"), u(n, "class", "svelte-1pt6t4n"), u(r, "class", "svelte-1pt6t4n"), u(c, "class", "btn-primary svelte-1pt6t4n"), c.disabled = t[10], u(C, "class", "btn-ghost svelte-1pt6t4n"), C.disabled = t[10], u(a, "class", "dialog-actions svelte-1pt6t4n"), u(x, "class", "dialog svelte-1pt6t4n"), u(e, "class", "overlay svelte-1pt6t4n"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "regen-title");
          },
          m(k, b) {
            T(k, e, b), i(e, x), i(x, n), i(x, o), i(x, r), i(x, l), h && h.m(x, null), i(x, s), i(x, a), i(a, c), i(c, f), i(a, A), i(a, C), i(C, F), B || (p = [
              H(c, "click", t[21]),
              H(C, "click", t[31])
            ], B = true);
          },
          p(k, b) {
            k[11] ? h ? h.p(k, b) : (h = hn(k), h.c(), h.m(x, s)) : h && (h.d(1), h = null), b[0] & 1024 && E !== (E = k[10] ? "Regenerating\u2026" : "Regenerate") && z(f, E), b[0] & 1024 && (c.disabled = k[10]), b[0] & 1024 && (C.disabled = k[10]);
          },
          d(k) {
            k && P(e), h && h.d(), B = false, a0(p);
          }
        };
      }
      function hn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[11]), u(e, "class", "error svelte-1pt6t4n");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 2048 && z(x, n[11]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function ai(t) {
        let e, x, n, o, r, l, s, a, c;
        e = new H0({});
        function E(B, p) {
          return B[0] ? Ka : B[1] ? Va : Ga;
        }
        let f = E(t), A = f(t), C = t[6] && Dn(t), F = t[9] && mn(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("h1"), o.textContent = "Settings", r = g(), A.c(), l = g(), C && C.c(), s = g(), F && F.c(), a = I0(), u(o, "class", "svelte-1pt6t4n"), u(n, "class", "svelte-1pt6t4n");
          },
          m(B, p) {
            k0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(n, r), A.m(n, null), T(B, l, p), C && C.m(B, p), T(B, s, p), F && F.m(B, p), T(B, a, p), c = true;
          },
          p(B, p) {
            f === (f = E(B)) && A ? A.p(B, p) : (A.d(1), A = f(B), A && (A.c(), A.m(n, null))), B[6] ? C ? C.p(B, p) : (C = Dn(B), C.c(), C.m(s.parentNode, s)) : C && (C.d(1), C = null), B[9] ? F ? F.p(B, p) : (F = mn(B), F.c(), F.m(a.parentNode, a)) : F && (F.d(1), F = null);
          },
          i(B) {
            c || (d0(e.$$.fragment, B), c = true);
          },
          o(B) {
            C0(e.$$.fragment, B), c = false;
          },
          d(B) {
            B && (P(x), P(n), P(l), P(s), P(a)), _0(e, B), A.d(), C && C.d(B), F && F.d(B);
          }
        };
      }
      function ii(t) {
        const e = t.join(`
`), x = new Blob([
          e
        ], {
          type: "text/plain"
        }), n = URL.createObjectURL(x), o = document.createElement("a");
        o.href = n, o.download = "backup-codes.txt", o.click(), URL.revokeObjectURL(n);
      }
      function ci(t, e, x) {
        let n, o, r, l;
        z0(t, _e, (J) => x(32, n = J)), z0(t, ne, (J) => x(33, o = J)), z0(t, ox, (J) => x(34, r = J)), z0(t, uo, (J) => x(17, l = J));
        let s = true, a = null, c = "", E = false, f = false, A = 0, C = false, F = false, B = null, p = false, h = false, k = null, b = [];
        y0(async () => {
          if (!P0()) {
            E0("/");
            return;
          }
          await m();
        });
        async function m() {
          x(0, s = true), x(1, a = null);
          try {
            if (x(2, c = r ?? ""), x(3, E = o ?? false), x(4, f = n ?? false), f) {
              const J = await Gl();
              x(5, A = J.remaining);
            }
          } catch (J) {
            x(1, a = J.message);
          } finally {
            x(0, s = false);
          }
        }
        async function D() {
          x(8, B = null), x(7, F = true);
          try {
            await Ul(), x(4, f = false), _e.set(false), x(5, A = 0), x(6, C = false);
          } catch (J) {
            x(8, B = J.message);
          } finally {
            x(7, F = false);
          }
        }
        let v = "idle", _ = "", w = "", y = null;
        async function M() {
          if (x(16, y = null), !/^\d{6}$/.test(_)) {
            x(16, y = "PIN must be exactly 6 digits.");
            return;
          }
          if (_ !== w) {
            x(16, y = "PINs do not match.");
            return;
          }
          x(13, v = "exporting");
          try {
            const J = await Ua(_), V = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), l0 = `${za}-${V}.enc`, c0 = new Blob([
              J
            ], {
              type: "application/octet-stream"
            }), n0 = URL.createObjectURL(c0), s0 = document.createElement("a");
            s0.href = n0, s0.download = l0, s0.click(), URL.revokeObjectURL(n0), x(13, v = "done");
          } catch (J) {
            x(16, y = J.message), x(13, v = "error");
          }
        }
        function L() {
          x(13, v = "idle"), x(14, _ = ""), x(15, w = ""), x(16, y = null);
        }
        async function S() {
          x(11, k = null), x(10, h = true);
          try {
            const { backup_codes: J } = await zl();
            x(12, b = J), x(5, A = J.length), x(9, p = false);
          } catch (J) {
            x(11, k = J.message);
          } finally {
            x(10, h = false);
          }
        }
        function N() {
          x(12, b = []);
        }
        const I = () => x(13, v = "entering_pin");
        function q() {
          _ = this.value, x(14, _);
        }
        function G() {
          w = this.value, x(15, w);
        }
        return [
          s,
          a,
          c,
          E,
          f,
          A,
          C,
          F,
          B,
          p,
          h,
          k,
          b,
          v,
          _,
          w,
          y,
          l,
          D,
          M,
          L,
          S,
          N,
          I,
          q,
          G,
          () => E0("/settings/2fa-setup"),
          () => ii(b),
          () => {
            x(9, p = true);
          },
          () => {
            x(6, C = true);
          },
          () => {
            x(6, C = false), x(8, B = null);
          },
          () => {
            x(9, p = false), x(11, k = null);
          }
        ];
      }
      class Ei extends m0 {
        constructor(e) {
          super(), p0(this, e, ci, ai, F0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function vn(t, e, x) {
        const n = t.slice();
        return n[12] = e[x], n;
      }
      function ui(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F = A0(t[4]), B = [];
        for (let p = 0; p < F.length; p += 1) B[p] = kn(vn(t, F, p));
        return {
          c() {
            e = d("div"), x = d("div"), x.innerHTML = '<span class="material-icons success-icon svelte-ks8vck">check_circle</span> <h1 class="svelte-ks8vck">2FA enabled \u2014 save your backup codes</h1>', n = g(), o = d("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, r = g(), l = d("div");
            for (let p = 0; p < B.length; p += 1) B[p].c();
            s = g(), a = d("div"), c = d("button"), c.innerHTML = `<span class="material-icons svelte-ks8vck">download</span>
          Download as text file`, E = g(), f = d("button"), f.textContent = "I've saved my backup codes", u(x, "class", "codes-header svelte-ks8vck"), u(o, "class", "hint warning svelte-ks8vck"), u(l, "class", "backup-grid svelte-ks8vck"), u(c, "class", "btn-ghost svelte-ks8vck"), u(f, "class", "btn-primary svelte-ks8vck"), u(a, "class", "codes-actions svelte-ks8vck"), u(e, "class", "card svelte-ks8vck");
          },
          m(p, h) {
            T(p, e, h), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l);
            for (let k = 0; k < B.length; k += 1) B[k] && B[k].m(l, null);
            i(e, s), i(e, a), i(a, c), i(a, E), i(a, f), A || (C = [
              H(c, "click", t[8]),
              H(f, "click", t[9])
            ], A = true);
          },
          p(p, h) {
            if (h & 16) {
              F = A0(p[4]);
              let k;
              for (k = 0; k < F.length; k += 1) {
                const b = vn(p, F, k);
                B[k] ? B[k].p(b, h) : (B[k] = kn(b), B[k].c(), B[k].m(l, null));
              }
              for (; k < B.length; k += 1) B[k].d(1);
              B.length = F.length;
            }
          },
          d(p) {
            p && P(e), O0(B, p), A = false, a0(C);
          }
        };
      }
      function fi(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b, m, D, v, _, w, y, M = t[5] ? "Verifying\u2026" : "Enable 2FA", L, S, N, I, q, G, U, W = t[6] && _n(t);
        return {
          c() {
            e = d("div"), x = d("div"), n = d("button"), n.innerHTML = '<span class="material-icons svelte-ks8vck">arrow_back</span>', o = g(), r = d("h1"), r.textContent = "Set up authenticator app", l = g(), s = d("p"), s.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, a = g(), c = d("div"), E = d("img"), A = g(), C = d("details"), F = d("summary"), F.textContent = "Can't scan? Enter the key manually", B = g(), p = d("code"), h = j(t[1]), k = g(), b = d("form"), m = d("label"), D = j(`Authenticator code
          `), v = d("input"), _ = g(), W && W.c(), w = g(), y = d("button"), L = j(M), N = g(), I = d("button"), q = j("Cancel"), u(n, "class", "back-btn svelte-ks8vck"), u(n, "type", "button"), u(r, "class", "svelte-ks8vck"), u(x, "class", "card-header svelte-ks8vck"), u(s, "class", "hint svelte-ks8vck"), et(E.src, f = t[2]) || u(E, "src", f), u(E, "alt", "TOTP QR code"), u(E, "width", "200"), u(E, "height", "200"), u(E, "class", "svelte-ks8vck"), u(c, "class", "qr-wrap svelte-ks8vck"), u(F, "class", "svelte-ks8vck"), u(p, "class", "secret-key svelte-ks8vck"), u(C, "class", "manual-entry svelte-ks8vck"), u(v, "type", "text"), u(v, "inputmode", "numeric"), u(v, "pattern", "[0-9]*"), u(v, "maxlength", "6"), v.required = true, u(v, "autocomplete", "one-time-code"), u(v, "placeholder", "000000"), u(v, "class", "svelte-ks8vck"), u(m, "class", "svelte-ks8vck"), u(y, "type", "submit"), u(y, "class", "btn-primary svelte-ks8vck"), y.disabled = S = t[5] || t[3].length !== 6, u(I, "type", "button"), u(I, "class", "btn-ghost svelte-ks8vck"), I.disabled = t[5], u(b, "class", "otp-form svelte-ks8vck"), u(e, "class", "card svelte-ks8vck");
          },
          m(Y, O) {
            T(Y, e, O), i(e, x), i(x, n), i(x, o), i(x, r), i(e, l), i(e, s), i(e, a), i(e, c), i(c, E), i(e, A), i(e, C), i(C, F), i(C, B), i(C, p), i(p, h), i(e, k), i(e, b), i(b, m), i(m, D), i(m, v), t0(v, t[3]), i(b, _), W && W.m(b, null), i(b, w), i(b, y), i(y, L), i(b, N), i(b, I), i(I, q), G || (U = [
              H(n, "click", t[10]),
              H(v, "input", t[11]),
              H(I, "click", t[10]),
              H(b, "submit", V0(t[7]))
            ], G = true);
          },
          p(Y, O) {
            O & 4 && !et(E.src, f = Y[2]) && u(E, "src", f), O & 2 && z(h, Y[1]), O & 8 && v.value !== Y[3] && t0(v, Y[3]), Y[6] ? W ? W.p(Y, O) : (W = _n(Y), W.c(), W.m(b, w)) : W && (W.d(1), W = null), O & 32 && M !== (M = Y[5] ? "Verifying\u2026" : "Enable 2FA") && z(L, M), O & 40 && S !== (S = Y[5] || Y[3].length !== 6) && (y.disabled = S), O & 32 && (I.disabled = Y[5]);
          },
          d(Y) {
            Y && P(e), W && W.d(), G = false, a0(U);
          }
        };
      }
      function di(t) {
        let e, x, n, o, r, l, s;
        return {
          c() {
            e = d("div"), x = d("p"), n = j(t[6]), o = g(), r = d("button"), r.textContent = "Back to Settings", u(x, "class", "error svelte-ks8vck"), u(r, "class", "btn-ghost svelte-ks8vck"), u(e, "class", "card svelte-ks8vck");
          },
          m(a, c) {
            T(a, e, c), i(e, x), i(x, n), i(e, o), i(e, r), l || (s = H(r, "click", t[10]), l = true);
          },
          p(a, c) {
            c & 64 && z(n, a[6]);
          },
          d(a) {
            a && P(e), l = false, s();
          }
        };
      }
      function Bi(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Setting up\u2026", u(e, "class", "muted svelte-ks8vck");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function kn(t) {
        let e, x = t[12] + "", n;
        return {
          c() {
            e = d("code"), n = j(x), u(e, "class", "backup-code svelte-ks8vck");
          },
          m(o, r) {
            T(o, e, r), i(e, n);
          },
          p(o, r) {
            r & 16 && x !== (x = o[12] + "") && z(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function _n(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[6]), u(e, "class", "error svelte-ks8vck");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o & 64 && z(x, n[6]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Ci(t) {
        let e, x, n, o;
        e = new H0({});
        function r(a, c) {
          if (a[0] === "loading") return Bi;
          if (a[0] === "error") return di;
          if (a[0] === "scan") return fi;
          if (a[0] === "codes") return ui;
        }
        let l = r(t), s = l && l(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), s && s.c(), u(n, "class", "svelte-ks8vck");
          },
          m(a, c) {
            k0(e, a, c), T(a, x, c), T(a, n, c), s && s.m(n, null), o = true;
          },
          p(a, [c]) {
            l === (l = r(a)) && s ? s.p(a, c) : (s && s.d(1), s = l && l(a), s && (s.c(), s.m(n, null)));
          },
          i(a) {
            o || (d0(e.$$.fragment, a), o = true);
          },
          o(a) {
            C0(e.$$.fragment, a), o = false;
          },
          d(a) {
            a && (P(x), P(n)), _0(e, a), s && s.d();
          }
        };
      }
      function Ai(t, e, x) {
        let n = "loading", o = "", r = "", l = "", s = [], a = false, c = null;
        y0(async () => {
          if (!P0()) {
            E0("/");
            return;
          }
          try {
            const { secret: B, uri: p } = await Ol();
            x(1, o = B), x(2, r = await oe.toDataURL(p, {
              width: 200,
              margin: 1
            })), x(0, n = "scan");
          } catch (B) {
            x(6, c = B.message), x(0, n = "error");
          }
        });
        async function E() {
          x(6, c = null), x(5, a = true);
          try {
            const { backup_codes: B } = await Hl(o, l);
            x(4, s = B), _e.set(true), x(0, n = "codes");
          } catch (B) {
            x(6, c = B.message);
          } finally {
            x(5, a = false);
          }
        }
        function f() {
          const B = s.join(`
`), p = new Blob([
            B
          ], {
            type: "text/plain"
          }), h = URL.createObjectURL(p), k = document.createElement("a");
          k.href = h, k.download = "backup-codes.txt", k.click(), URL.revokeObjectURL(h);
        }
        function A() {
          E0("/settings");
        }
        function C() {
          E0("/settings");
        }
        function F() {
          l = this.value, x(3, l);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          a,
          c,
          E,
          f,
          A,
          C,
          F
        ];
      }
      class Fi extends m0 {
        constructor(e) {
          super(), p0(this, e, Ai, Ci, F0, {});
        }
      }
      var qo = {
        exports: {}
      };
      (function(t, e) {
        (function(n, o) {
          t.exports = o();
        })(typeof self < "u" ? self : U9, function() {
          return function(x) {
            var n = {};
            function o(r) {
              if (n[r]) return n[r].exports;
              var l = n[r] = {
                i: r,
                l: false,
                exports: {}
              };
              return x[r].call(l.exports, l, l.exports, o), l.l = true, l.exports;
            }
            return o.m = x, o.c = n, o.d = function(r, l, s) {
              o.o(r, l) || Object.defineProperty(r, l, {
                configurable: false,
                enumerable: true,
                get: s
              });
            }, o.n = function(r) {
              var l = r && r.__esModule ? function() {
                return r.default;
              } : function() {
                return r;
              };
              return o.d(l, "a", l), l;
            }, o.o = function(r, l) {
              return Object.prototype.hasOwnProperty.call(r, l);
            }, o.p = "", o(o.s = 3);
          }([
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = function() {
                function l(s, a) {
                  this.width = a, this.height = s.length / a, this.data = s;
                }
                return l.createEmpty = function(s, a) {
                  return new l(new Uint8ClampedArray(s * a), s);
                }, l.prototype.get = function(s, a) {
                  return s < 0 || s >= this.width || a < 0 || a >= this.height ? false : !!this.data[a * this.width + s];
                }, l.prototype.set = function(s, a, c) {
                  this.data[a * this.width + s] = c ? 1 : 0;
                }, l.prototype.setRegion = function(s, a, c, E, f) {
                  for (var A = a; A < a + E; A++) for (var C = s; C < s + c; C++) this.set(C, A, !!f);
                }, l;
              }();
              n.BitMatrix = r;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(2);
              function l(a, c) {
                return a ^ c;
              }
              n.addOrSubtractGF = l;
              var s = function() {
                function a(c, E, f) {
                  this.primitive = c, this.size = E, this.generatorBase = f, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var A = 1, C = 0; C < this.size; C++) this.expTable[C] = A, A = A * 2, A >= this.size && (A = (A ^ this.primitive) & this.size - 1);
                  for (var C = 0; C < this.size - 1; C++) this.logTable[this.expTable[C]] = C;
                  this.zero = new r.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new r.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return a.prototype.multiply = function(c, E) {
                  return c === 0 || E === 0 ? 0 : this.expTable[(this.logTable[c] + this.logTable[E]) % (this.size - 1)];
                }, a.prototype.inverse = function(c) {
                  if (c === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[c] - 1];
                }, a.prototype.buildMonomial = function(c, E) {
                  if (c < 0) throw new Error("Invalid monomial degree less than 0");
                  if (E === 0) return this.zero;
                  var f = new Uint8ClampedArray(c + 1);
                  return f[0] = E, new r.default(this, f);
                }, a.prototype.log = function(c) {
                  if (c === 0) throw new Error("Can't take log(0)");
                  return this.logTable[c];
                }, a.prototype.exp = function(c) {
                  return this.expTable[c];
                }, a;
              }();
              n.default = s;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(1), l = function() {
                function s(a, c) {
                  if (c.length === 0) throw new Error("No coefficients.");
                  this.field = a;
                  var E = c.length;
                  if (E > 1 && c[0] === 0) {
                    for (var f = 1; f < E && c[f] === 0; ) f++;
                    if (f === E) this.coefficients = a.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(E - f);
                      for (var A = 0; A < this.coefficients.length; A++) this.coefficients[A] = c[f + A];
                    }
                  } else this.coefficients = c;
                }
                return s.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, s.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, s.prototype.getCoefficient = function(a) {
                  return this.coefficients[this.coefficients.length - 1 - a];
                }, s.prototype.addOrSubtract = function(a) {
                  var c;
                  if (this.isZero()) return a;
                  if (a.isZero()) return this;
                  var E = this.coefficients, f = a.coefficients;
                  E.length > f.length && (c = [
                    f,
                    E
                  ], E = c[0], f = c[1]);
                  for (var A = new Uint8ClampedArray(f.length), C = f.length - E.length, F = 0; F < C; F++) A[F] = f[F];
                  for (var F = C; F < f.length; F++) A[F] = r.addOrSubtractGF(E[F - C], f[F]);
                  return new s(this.field, A);
                }, s.prototype.multiply = function(a) {
                  if (a === 0) return this.field.zero;
                  if (a === 1) return this;
                  for (var c = this.coefficients.length, E = new Uint8ClampedArray(c), f = 0; f < c; f++) E[f] = this.field.multiply(this.coefficients[f], a);
                  return new s(this.field, E);
                }, s.prototype.multiplyPoly = function(a) {
                  if (this.isZero() || a.isZero()) return this.field.zero;
                  for (var c = this.coefficients, E = c.length, f = a.coefficients, A = f.length, C = new Uint8ClampedArray(E + A - 1), F = 0; F < E; F++) for (var B = c[F], p = 0; p < A; p++) C[F + p] = r.addOrSubtractGF(C[F + p], this.field.multiply(B, f[p]));
                  return new s(this.field, C);
                }, s.prototype.multiplyByMonomial = function(a, c) {
                  if (a < 0) throw new Error("Invalid degree less than 0");
                  if (c === 0) return this.field.zero;
                  for (var E = this.coefficients.length, f = new Uint8ClampedArray(E + a), A = 0; A < E; A++) f[A] = this.field.multiply(this.coefficients[A], c);
                  return new s(this.field, f);
                }, s.prototype.evaluateAt = function(a) {
                  var c = 0;
                  if (a === 0) return this.getCoefficient(0);
                  var E = this.coefficients.length;
                  if (a === 1) return this.coefficients.forEach(function(A) {
                    c = r.addOrSubtractGF(c, A);
                  }), c;
                  c = this.coefficients[0];
                  for (var f = 1; f < E; f++) c = r.addOrSubtractGF(this.field.multiply(a, c), this.coefficients[f]);
                  return c;
                }, s;
              }();
              n.default = l;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(4), l = o(5), s = o(11), a = o(12);
              function c(A) {
                var C = a.locate(A);
                if (!C) return null;
                for (var F = 0, B = C; F < B.length; F++) {
                  var p = B[F], h = s.extract(A, p), k = l.decode(h.matrix);
                  if (k) return {
                    binaryData: k.bytes,
                    data: k.text,
                    chunks: k.chunks,
                    version: k.version,
                    location: {
                      topRightCorner: h.mappingFunction(p.dimension, 0),
                      topLeftCorner: h.mappingFunction(0, 0),
                      bottomRightCorner: h.mappingFunction(p.dimension, p.dimension),
                      bottomLeftCorner: h.mappingFunction(0, p.dimension),
                      topRightFinderPattern: p.topRight,
                      topLeftFinderPattern: p.topLeft,
                      bottomLeftFinderPattern: p.bottomLeft,
                      bottomRightAlignmentPattern: p.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var E = {
                inversionAttempts: "attemptBoth"
              };
              function f(A, C, F, B) {
                B === void 0 && (B = {});
                var p = E;
                Object.keys(p || {}).forEach(function(_) {
                  p[_] = B[_] || p[_];
                });
                var h = p.inversionAttempts === "attemptBoth" || p.inversionAttempts === "invertFirst", k = p.inversionAttempts === "onlyInvert" || p.inversionAttempts === "invertFirst", b = r.binarize(A, C, F, h), m = b.binarized, D = b.inverted, v = c(k ? D : m);
                return !v && (p.inversionAttempts === "attemptBoth" || p.inversionAttempts === "invertFirst") && (v = c(k ? m : D)), v;
              }
              f.default = f, n.default = f;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0), l = 8, s = 24;
              function a(f, A, C) {
                return f < A ? A : f > C ? C : f;
              }
              var c = function() {
                function f(A, C) {
                  this.width = A, this.data = new Uint8ClampedArray(A * C);
                }
                return f.prototype.get = function(A, C) {
                  return this.data[C * this.width + A];
                }, f.prototype.set = function(A, C, F) {
                  this.data[C * this.width + A] = F;
                }, f;
              }();
              function E(f, A, C, F) {
                if (f.length !== A * C * 4) throw new Error("Malformed data passed to binarizer.");
                for (var B = new c(A, C), p = 0; p < A; p++) for (var h = 0; h < C; h++) {
                  var k = f[(h * A + p) * 4 + 0], b = f[(h * A + p) * 4 + 1], m = f[(h * A + p) * 4 + 2];
                  B.set(p, h, 0.2126 * k + 0.7152 * b + 0.0722 * m);
                }
                for (var D = Math.ceil(A / l), v = Math.ceil(C / l), _ = new c(D, v), w = 0; w < v; w++) for (var y = 0; y < D; y++) {
                  for (var M = 0, L = 1 / 0, S = 0, h = 0; h < l; h++) for (var p = 0; p < l; p++) {
                    var N = B.get(y * l + p, w * l + h);
                    M += N, L = Math.min(L, N), S = Math.max(S, N);
                  }
                  var I = M / Math.pow(l, 2);
                  if (S - L <= s && (I = L / 2, w > 0 && y > 0)) {
                    var q = (_.get(y, w - 1) + 2 * _.get(y - 1, w) + _.get(y - 1, w - 1)) / 4;
                    L < q && (I = q);
                  }
                  _.set(y, w, I);
                }
                var G = r.BitMatrix.createEmpty(A, C), U = null;
                F && (U = r.BitMatrix.createEmpty(A, C));
                for (var w = 0; w < v; w++) for (var y = 0; y < D; y++) {
                  for (var W = a(y, 2, D - 3), Y = a(w, 2, v - 3), M = 0, O = -2; O <= 2; O++) for (var R = -2; R <= 2; R++) M += _.get(W + O, Y + R);
                  for (var $ = M / 25, O = 0; O < l; O++) for (var R = 0; R < l; R++) {
                    var p = y * l + O, h = w * l + R, J = B.get(p, h);
                    G.set(p, h, J <= $), F && U.set(p, h, !(J <= $));
                  }
                }
                return F ? {
                  binarized: G,
                  inverted: U
                } : {
                  binarized: G
                };
              }
              n.binarize = E;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0), l = o(6), s = o(9), a = o(10);
              function c(m, D) {
                for (var v = m ^ D, _ = 0; v; ) _++, v &= v - 1;
                return _;
              }
              function E(m, D) {
                return D << 1 | m;
              }
              var f = [
                {
                  bits: 21522,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 0
                  }
                },
                {
                  bits: 20773,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 1
                  }
                },
                {
                  bits: 24188,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 2
                  }
                },
                {
                  bits: 23371,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 3
                  }
                },
                {
                  bits: 17913,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 4
                  }
                },
                {
                  bits: 16590,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 5
                  }
                },
                {
                  bits: 20375,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 6
                  }
                },
                {
                  bits: 19104,
                  formatInfo: {
                    errorCorrectionLevel: 1,
                    dataMask: 7
                  }
                },
                {
                  bits: 30660,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 0
                  }
                },
                {
                  bits: 29427,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 1
                  }
                },
                {
                  bits: 32170,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 2
                  }
                },
                {
                  bits: 30877,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 3
                  }
                },
                {
                  bits: 26159,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 4
                  }
                },
                {
                  bits: 25368,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 5
                  }
                },
                {
                  bits: 27713,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 6
                  }
                },
                {
                  bits: 26998,
                  formatInfo: {
                    errorCorrectionLevel: 0,
                    dataMask: 7
                  }
                },
                {
                  bits: 5769,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 0
                  }
                },
                {
                  bits: 5054,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 1
                  }
                },
                {
                  bits: 7399,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 2
                  }
                },
                {
                  bits: 6608,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 3
                  }
                },
                {
                  bits: 1890,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 4
                  }
                },
                {
                  bits: 597,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 5
                  }
                },
                {
                  bits: 3340,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 6
                  }
                },
                {
                  bits: 2107,
                  formatInfo: {
                    errorCorrectionLevel: 3,
                    dataMask: 7
                  }
                },
                {
                  bits: 13663,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 0
                  }
                },
                {
                  bits: 12392,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 1
                  }
                },
                {
                  bits: 16177,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 2
                  }
                },
                {
                  bits: 14854,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 3
                  }
                },
                {
                  bits: 9396,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 4
                  }
                },
                {
                  bits: 8579,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 5
                  }
                },
                {
                  bits: 11994,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 6
                  }
                },
                {
                  bits: 11245,
                  formatInfo: {
                    errorCorrectionLevel: 2,
                    dataMask: 7
                  }
                }
              ], A = [
                function(m) {
                  return (m.y + m.x) % 2 === 0;
                },
                function(m) {
                  return m.y % 2 === 0;
                },
                function(m) {
                  return m.x % 3 === 0;
                },
                function(m) {
                  return (m.y + m.x) % 3 === 0;
                },
                function(m) {
                  return (Math.floor(m.y / 2) + Math.floor(m.x / 3)) % 2 === 0;
                },
                function(m) {
                  return m.x * m.y % 2 + m.x * m.y % 3 === 0;
                },
                function(m) {
                  return (m.y * m.x % 2 + m.y * m.x % 3) % 2 === 0;
                },
                function(m) {
                  return ((m.y + m.x) % 2 + m.y * m.x % 3) % 2 === 0;
                }
              ];
              function C(m) {
                var D = 17 + 4 * m.versionNumber, v = r.BitMatrix.createEmpty(D, D);
                v.setRegion(0, 0, 9, 9, true), v.setRegion(D - 8, 0, 8, 9, true), v.setRegion(0, D - 8, 9, 8, true);
                for (var _ = 0, w = m.alignmentPatternCenters; _ < w.length; _++) for (var y = w[_], M = 0, L = m.alignmentPatternCenters; M < L.length; M++) {
                  var S = L[M];
                  y === 6 && S === 6 || y === 6 && S === D - 7 || y === D - 7 && S === 6 || v.setRegion(y - 2, S - 2, 5, 5, true);
                }
                return v.setRegion(6, 9, 1, D - 17, true), v.setRegion(9, 6, D - 17, 1, true), m.versionNumber > 6 && (v.setRegion(D - 11, 0, 3, 6, true), v.setRegion(0, D - 11, 6, 3, true)), v;
              }
              function F(m, D, v) {
                for (var _ = A[v.dataMask], w = m.height, y = C(D), M = [], L = 0, S = 0, N = true, I = w - 1; I > 0; I -= 2) {
                  I === 6 && I--;
                  for (var q = 0; q < w; q++) for (var G = N ? w - 1 - q : q, U = 0; U < 2; U++) {
                    var W = I - U;
                    if (!y.get(W, G)) {
                      S++;
                      var Y = m.get(W, G);
                      _({
                        y: G,
                        x: W
                      }) && (Y = !Y), L = E(Y, L), S === 8 && (M.push(L), S = 0, L = 0);
                    }
                  }
                  N = !N;
                }
                return M;
              }
              function B(m) {
                var D = m.height, v = Math.floor((D - 17) / 4);
                if (v <= 6) return a.VERSIONS[v - 1];
                for (var _ = 0, w = 5; w >= 0; w--) for (var y = D - 9; y >= D - 11; y--) _ = E(m.get(y, w), _);
                for (var M = 0, y = 5; y >= 0; y--) for (var w = D - 9; w >= D - 11; w--) M = E(m.get(y, w), M);
                for (var L = 1 / 0, S, N = 0, I = a.VERSIONS; N < I.length; N++) {
                  var q = I[N];
                  if (q.infoBits === _ || q.infoBits === M) return q;
                  var G = c(_, q.infoBits);
                  G < L && (S = q, L = G), G = c(M, q.infoBits), G < L && (S = q, L = G);
                }
                if (L <= 3) return S;
              }
              function p(m) {
                for (var D = 0, v = 0; v <= 8; v++) v !== 6 && (D = E(m.get(v, 8), D));
                for (var _ = 7; _ >= 0; _--) _ !== 6 && (D = E(m.get(8, _), D));
                for (var w = m.height, y = 0, _ = w - 1; _ >= w - 7; _--) y = E(m.get(8, _), y);
                for (var v = w - 8; v < w; v++) y = E(m.get(v, 8), y);
                for (var M = 1 / 0, L = null, S = 0, N = f; S < N.length; S++) {
                  var I = N[S], q = I.bits, G = I.formatInfo;
                  if (q === D || q === y) return G;
                  var U = c(D, q);
                  U < M && (L = G, M = U), D !== y && (U = c(y, q), U < M && (L = G, M = U));
                }
                return M <= 3 ? L : null;
              }
              function h(m, D, v) {
                var _ = D.errorCorrectionLevels[v], w = [], y = 0;
                if (_.ecBlocks.forEach(function(Y) {
                  for (var O = 0; O < Y.numBlocks; O++) w.push({
                    numDataCodewords: Y.dataCodewordsPerBlock,
                    codewords: []
                  }), y += Y.dataCodewordsPerBlock + _.ecCodewordsPerBlock;
                }), m.length < y) return null;
                m = m.slice(0, y);
                for (var M = _.ecBlocks[0].dataCodewordsPerBlock, L = 0; L < M; L++) for (var S = 0, N = w; S < N.length; S++) {
                  var I = N[S];
                  I.codewords.push(m.shift());
                }
                if (_.ecBlocks.length > 1) for (var q = _.ecBlocks[0].numBlocks, G = _.ecBlocks[1].numBlocks, L = 0; L < G; L++) w[q + L].codewords.push(m.shift());
                for (; m.length > 0; ) for (var U = 0, W = w; U < W.length; U++) {
                  var I = W[U];
                  I.codewords.push(m.shift());
                }
                return w;
              }
              function k(m) {
                var D = B(m);
                if (!D) return null;
                var v = p(m);
                if (!v) return null;
                var _ = F(m, D, v), w = h(_, D, v.errorCorrectionLevel);
                if (!w) return null;
                for (var y = w.reduce(function(U, W) {
                  return U + W.numDataCodewords;
                }, 0), M = new Uint8ClampedArray(y), L = 0, S = 0, N = w; S < N.length; S++) {
                  var I = N[S], q = s.decode(I.codewords, I.codewords.length - I.numDataCodewords);
                  if (!q) return null;
                  for (var G = 0; G < I.numDataCodewords; G++) M[L++] = q[G];
                }
                try {
                  return l.decode(M, D.versionNumber);
                } catch {
                  return null;
                }
              }
              function b(m) {
                if (m == null) return null;
                var D = k(m);
                if (D) return D;
                for (var v = 0; v < m.width; v++) for (var _ = v + 1; _ < m.height; _++) m.get(v, _) !== m.get(_, v) && (m.set(v, _, !m.get(v, _)), m.set(_, v, !m.get(_, v)));
                return k(m);
              }
              n.decode = b;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(7), l = o(8), s;
              (function(B) {
                B.Numeric = "numeric", B.Alphanumeric = "alphanumeric", B.Byte = "byte", B.Kanji = "kanji", B.ECI = "eci";
              })(s = n.Mode || (n.Mode = {}));
              var a;
              (function(B) {
                B[B.Terminator = 0] = "Terminator", B[B.Numeric = 1] = "Numeric", B[B.Alphanumeric = 2] = "Alphanumeric", B[B.Byte = 4] = "Byte", B[B.Kanji = 8] = "Kanji", B[B.ECI = 7] = "ECI";
              })(a || (a = {}));
              function c(B, p) {
                for (var h = [], k = "", b = [
                  10,
                  12,
                  14
                ][p], m = B.readBits(b); m >= 3; ) {
                  var D = B.readBits(10);
                  if (D >= 1e3) throw new Error("Invalid numeric value above 999");
                  var v = Math.floor(D / 100), _ = Math.floor(D / 10) % 10, w = D % 10;
                  h.push(48 + v, 48 + _, 48 + w), k += v.toString() + _.toString() + w.toString(), m -= 3;
                }
                if (m === 2) {
                  var D = B.readBits(7);
                  if (D >= 100) throw new Error("Invalid numeric value above 99");
                  var v = Math.floor(D / 10), _ = D % 10;
                  h.push(48 + v, 48 + _), k += v.toString() + _.toString();
                } else if (m === 1) {
                  var D = B.readBits(4);
                  if (D >= 10) throw new Error("Invalid numeric value above 9");
                  h.push(48 + D), k += D.toString();
                }
                return {
                  bytes: h,
                  text: k
                };
              }
              var E = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                " ",
                "$",
                "%",
                "*",
                "+",
                "-",
                ".",
                "/",
                ":"
              ];
              function f(B, p) {
                for (var h = [], k = "", b = [
                  9,
                  11,
                  13
                ][p], m = B.readBits(b); m >= 2; ) {
                  var D = B.readBits(11), v = Math.floor(D / 45), _ = D % 45;
                  h.push(E[v].charCodeAt(0), E[_].charCodeAt(0)), k += E[v] + E[_], m -= 2;
                }
                if (m === 1) {
                  var v = B.readBits(6);
                  h.push(E[v].charCodeAt(0)), k += E[v];
                }
                return {
                  bytes: h,
                  text: k
                };
              }
              function A(B, p) {
                for (var h = [], k = "", b = [
                  8,
                  16,
                  16
                ][p], m = B.readBits(b), D = 0; D < m; D++) {
                  var v = B.readBits(8);
                  h.push(v);
                }
                try {
                  k += decodeURIComponent(h.map(function(_) {
                    return "%" + ("0" + _.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: h,
                  text: k
                };
              }
              function C(B, p) {
                for (var h = [], k = "", b = [
                  8,
                  10,
                  12
                ][p], m = B.readBits(b), D = 0; D < m; D++) {
                  var v = B.readBits(13), _ = Math.floor(v / 192) << 8 | v % 192;
                  _ < 7936 ? _ += 33088 : _ += 49472, h.push(_ >> 8, _ & 255), k += String.fromCharCode(l.shiftJISTable[_]);
                }
                return {
                  bytes: h,
                  text: k
                };
              }
              function F(B, p) {
                for (var h, k, b, m, D = new r.BitStream(B), v = p <= 9 ? 0 : p <= 26 ? 1 : 2, _ = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: p
                }; D.available() >= 4; ) {
                  var w = D.readBits(4);
                  if (w === a.Terminator) return _;
                  if (w === a.ECI) D.readBits(1) === 0 ? _.chunks.push({
                    type: s.ECI,
                    assignmentNumber: D.readBits(7)
                  }) : D.readBits(1) === 0 ? _.chunks.push({
                    type: s.ECI,
                    assignmentNumber: D.readBits(14)
                  }) : D.readBits(1) === 0 ? _.chunks.push({
                    type: s.ECI,
                    assignmentNumber: D.readBits(21)
                  }) : _.chunks.push({
                    type: s.ECI,
                    assignmentNumber: -1
                  });
                  else if (w === a.Numeric) {
                    var y = c(D, v);
                    _.text += y.text, (h = _.bytes).push.apply(h, y.bytes), _.chunks.push({
                      type: s.Numeric,
                      text: y.text
                    });
                  } else if (w === a.Alphanumeric) {
                    var M = f(D, v);
                    _.text += M.text, (k = _.bytes).push.apply(k, M.bytes), _.chunks.push({
                      type: s.Alphanumeric,
                      text: M.text
                    });
                  } else if (w === a.Byte) {
                    var L = A(D, v);
                    _.text += L.text, (b = _.bytes).push.apply(b, L.bytes), _.chunks.push({
                      type: s.Byte,
                      bytes: L.bytes,
                      text: L.text
                    });
                  } else if (w === a.Kanji) {
                    var S = C(D, v);
                    _.text += S.text, (m = _.bytes).push.apply(m, S.bytes), _.chunks.push({
                      type: s.Kanji,
                      bytes: S.bytes,
                      text: S.text
                    });
                  }
                }
                if (D.available() === 0 || D.readBits(D.available()) === 0) return _;
              }
              n.decode = F;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = function() {
                function l(s) {
                  this.byteOffset = 0, this.bitOffset = 0, this.bytes = s;
                }
                return l.prototype.readBits = function(s) {
                  if (s < 1 || s > 32 || s > this.available()) throw new Error("Cannot read " + s.toString() + " bits");
                  var a = 0;
                  if (this.bitOffset > 0) {
                    var c = 8 - this.bitOffset, E = s < c ? s : c, f = c - E, A = 255 >> 8 - E << f;
                    a = (this.bytes[this.byteOffset] & A) >> f, s -= E, this.bitOffset += E, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (s > 0) {
                    for (; s >= 8; ) a = a << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, s -= 8;
                    if (s > 0) {
                      var f = 8 - s, A = 255 >> f << f;
                      a = a << s | (this.bytes[this.byteOffset] & A) >> f, this.bitOffset += s;
                    }
                  }
                  return a;
                }, l.prototype.available = function() {
                  return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
                }, l;
              }();
              n.BitStream = r;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              }), n.shiftJISTable = {
                32: 32,
                33: 33,
                34: 34,
                35: 35,
                36: 36,
                37: 37,
                38: 38,
                39: 39,
                40: 40,
                41: 41,
                42: 42,
                43: 43,
                44: 44,
                45: 45,
                46: 46,
                47: 47,
                48: 48,
                49: 49,
                50: 50,
                51: 51,
                52: 52,
                53: 53,
                54: 54,
                55: 55,
                56: 56,
                57: 57,
                58: 58,
                59: 59,
                60: 60,
                61: 61,
                62: 62,
                63: 63,
                64: 64,
                65: 65,
                66: 66,
                67: 67,
                68: 68,
                69: 69,
                70: 70,
                71: 71,
                72: 72,
                73: 73,
                74: 74,
                75: 75,
                76: 76,
                77: 77,
                78: 78,
                79: 79,
                80: 80,
                81: 81,
                82: 82,
                83: 83,
                84: 84,
                85: 85,
                86: 86,
                87: 87,
                88: 88,
                89: 89,
                90: 90,
                91: 91,
                92: 165,
                93: 93,
                94: 94,
                95: 95,
                96: 96,
                97: 97,
                98: 98,
                99: 99,
                100: 100,
                101: 101,
                102: 102,
                103: 103,
                104: 104,
                105: 105,
                106: 106,
                107: 107,
                108: 108,
                109: 109,
                110: 110,
                111: 111,
                112: 112,
                113: 113,
                114: 114,
                115: 115,
                116: 116,
                117: 117,
                118: 118,
                119: 119,
                120: 120,
                121: 121,
                122: 122,
                123: 123,
                124: 124,
                125: 125,
                126: 8254,
                33088: 12288,
                33089: 12289,
                33090: 12290,
                33091: 65292,
                33092: 65294,
                33093: 12539,
                33094: 65306,
                33095: 65307,
                33096: 65311,
                33097: 65281,
                33098: 12443,
                33099: 12444,
                33100: 180,
                33101: 65344,
                33102: 168,
                33103: 65342,
                33104: 65507,
                33105: 65343,
                33106: 12541,
                33107: 12542,
                33108: 12445,
                33109: 12446,
                33110: 12291,
                33111: 20189,
                33112: 12293,
                33113: 12294,
                33114: 12295,
                33115: 12540,
                33116: 8213,
                33117: 8208,
                33118: 65295,
                33119: 92,
                33120: 12316,
                33121: 8214,
                33122: 65372,
                33123: 8230,
                33124: 8229,
                33125: 8216,
                33126: 8217,
                33127: 8220,
                33128: 8221,
                33129: 65288,
                33130: 65289,
                33131: 12308,
                33132: 12309,
                33133: 65339,
                33134: 65341,
                33135: 65371,
                33136: 65373,
                33137: 12296,
                33138: 12297,
                33139: 12298,
                33140: 12299,
                33141: 12300,
                33142: 12301,
                33143: 12302,
                33144: 12303,
                33145: 12304,
                33146: 12305,
                33147: 65291,
                33148: 8722,
                33149: 177,
                33150: 215,
                33152: 247,
                33153: 65309,
                33154: 8800,
                33155: 65308,
                33156: 65310,
                33157: 8806,
                33158: 8807,
                33159: 8734,
                33160: 8756,
                33161: 9794,
                33162: 9792,
                33163: 176,
                33164: 8242,
                33165: 8243,
                33166: 8451,
                33167: 65509,
                33168: 65284,
                33169: 162,
                33170: 163,
                33171: 65285,
                33172: 65283,
                33173: 65286,
                33174: 65290,
                33175: 65312,
                33176: 167,
                33177: 9734,
                33178: 9733,
                33179: 9675,
                33180: 9679,
                33181: 9678,
                33182: 9671,
                33183: 9670,
                33184: 9633,
                33185: 9632,
                33186: 9651,
                33187: 9650,
                33188: 9661,
                33189: 9660,
                33190: 8251,
                33191: 12306,
                33192: 8594,
                33193: 8592,
                33194: 8593,
                33195: 8595,
                33196: 12307,
                33208: 8712,
                33209: 8715,
                33210: 8838,
                33211: 8839,
                33212: 8834,
                33213: 8835,
                33214: 8746,
                33215: 8745,
                33224: 8743,
                33225: 8744,
                33226: 172,
                33227: 8658,
                33228: 8660,
                33229: 8704,
                33230: 8707,
                33242: 8736,
                33243: 8869,
                33244: 8978,
                33245: 8706,
                33246: 8711,
                33247: 8801,
                33248: 8786,
                33249: 8810,
                33250: 8811,
                33251: 8730,
                33252: 8765,
                33253: 8733,
                33254: 8757,
                33255: 8747,
                33256: 8748,
                33264: 8491,
                33265: 8240,
                33266: 9839,
                33267: 9837,
                33268: 9834,
                33269: 8224,
                33270: 8225,
                33271: 182,
                33276: 9711,
                33359: 65296,
                33360: 65297,
                33361: 65298,
                33362: 65299,
                33363: 65300,
                33364: 65301,
                33365: 65302,
                33366: 65303,
                33367: 65304,
                33368: 65305,
                33376: 65313,
                33377: 65314,
                33378: 65315,
                33379: 65316,
                33380: 65317,
                33381: 65318,
                33382: 65319,
                33383: 65320,
                33384: 65321,
                33385: 65322,
                33386: 65323,
                33387: 65324,
                33388: 65325,
                33389: 65326,
                33390: 65327,
                33391: 65328,
                33392: 65329,
                33393: 65330,
                33394: 65331,
                33395: 65332,
                33396: 65333,
                33397: 65334,
                33398: 65335,
                33399: 65336,
                33400: 65337,
                33401: 65338,
                33409: 65345,
                33410: 65346,
                33411: 65347,
                33412: 65348,
                33413: 65349,
                33414: 65350,
                33415: 65351,
                33416: 65352,
                33417: 65353,
                33418: 65354,
                33419: 65355,
                33420: 65356,
                33421: 65357,
                33422: 65358,
                33423: 65359,
                33424: 65360,
                33425: 65361,
                33426: 65362,
                33427: 65363,
                33428: 65364,
                33429: 65365,
                33430: 65366,
                33431: 65367,
                33432: 65368,
                33433: 65369,
                33434: 65370,
                33439: 12353,
                33440: 12354,
                33441: 12355,
                33442: 12356,
                33443: 12357,
                33444: 12358,
                33445: 12359,
                33446: 12360,
                33447: 12361,
                33448: 12362,
                33449: 12363,
                33450: 12364,
                33451: 12365,
                33452: 12366,
                33453: 12367,
                33454: 12368,
                33455: 12369,
                33456: 12370,
                33457: 12371,
                33458: 12372,
                33459: 12373,
                33460: 12374,
                33461: 12375,
                33462: 12376,
                33463: 12377,
                33464: 12378,
                33465: 12379,
                33466: 12380,
                33467: 12381,
                33468: 12382,
                33469: 12383,
                33470: 12384,
                33471: 12385,
                33472: 12386,
                33473: 12387,
                33474: 12388,
                33475: 12389,
                33476: 12390,
                33477: 12391,
                33478: 12392,
                33479: 12393,
                33480: 12394,
                33481: 12395,
                33482: 12396,
                33483: 12397,
                33484: 12398,
                33485: 12399,
                33486: 12400,
                33487: 12401,
                33488: 12402,
                33489: 12403,
                33490: 12404,
                33491: 12405,
                33492: 12406,
                33493: 12407,
                33494: 12408,
                33495: 12409,
                33496: 12410,
                33497: 12411,
                33498: 12412,
                33499: 12413,
                33500: 12414,
                33501: 12415,
                33502: 12416,
                33503: 12417,
                33504: 12418,
                33505: 12419,
                33506: 12420,
                33507: 12421,
                33508: 12422,
                33509: 12423,
                33510: 12424,
                33511: 12425,
                33512: 12426,
                33513: 12427,
                33514: 12428,
                33515: 12429,
                33516: 12430,
                33517: 12431,
                33518: 12432,
                33519: 12433,
                33520: 12434,
                33521: 12435,
                33600: 12449,
                33601: 12450,
                33602: 12451,
                33603: 12452,
                33604: 12453,
                33605: 12454,
                33606: 12455,
                33607: 12456,
                33608: 12457,
                33609: 12458,
                33610: 12459,
                33611: 12460,
                33612: 12461,
                33613: 12462,
                33614: 12463,
                33615: 12464,
                33616: 12465,
                33617: 12466,
                33618: 12467,
                33619: 12468,
                33620: 12469,
                33621: 12470,
                33622: 12471,
                33623: 12472,
                33624: 12473,
                33625: 12474,
                33626: 12475,
                33627: 12476,
                33628: 12477,
                33629: 12478,
                33630: 12479,
                33631: 12480,
                33632: 12481,
                33633: 12482,
                33634: 12483,
                33635: 12484,
                33636: 12485,
                33637: 12486,
                33638: 12487,
                33639: 12488,
                33640: 12489,
                33641: 12490,
                33642: 12491,
                33643: 12492,
                33644: 12493,
                33645: 12494,
                33646: 12495,
                33647: 12496,
                33648: 12497,
                33649: 12498,
                33650: 12499,
                33651: 12500,
                33652: 12501,
                33653: 12502,
                33654: 12503,
                33655: 12504,
                33656: 12505,
                33657: 12506,
                33658: 12507,
                33659: 12508,
                33660: 12509,
                33661: 12510,
                33662: 12511,
                33664: 12512,
                33665: 12513,
                33666: 12514,
                33667: 12515,
                33668: 12516,
                33669: 12517,
                33670: 12518,
                33671: 12519,
                33672: 12520,
                33673: 12521,
                33674: 12522,
                33675: 12523,
                33676: 12524,
                33677: 12525,
                33678: 12526,
                33679: 12527,
                33680: 12528,
                33681: 12529,
                33682: 12530,
                33683: 12531,
                33684: 12532,
                33685: 12533,
                33686: 12534,
                33695: 913,
                33696: 914,
                33697: 915,
                33698: 916,
                33699: 917,
                33700: 918,
                33701: 919,
                33702: 920,
                33703: 921,
                33704: 922,
                33705: 923,
                33706: 924,
                33707: 925,
                33708: 926,
                33709: 927,
                33710: 928,
                33711: 929,
                33712: 931,
                33713: 932,
                33714: 933,
                33715: 934,
                33716: 935,
                33717: 936,
                33718: 937,
                33727: 945,
                33728: 946,
                33729: 947,
                33730: 948,
                33731: 949,
                33732: 950,
                33733: 951,
                33734: 952,
                33735: 953,
                33736: 954,
                33737: 955,
                33738: 956,
                33739: 957,
                33740: 958,
                33741: 959,
                33742: 960,
                33743: 961,
                33744: 963,
                33745: 964,
                33746: 965,
                33747: 966,
                33748: 967,
                33749: 968,
                33750: 969,
                33856: 1040,
                33857: 1041,
                33858: 1042,
                33859: 1043,
                33860: 1044,
                33861: 1045,
                33862: 1025,
                33863: 1046,
                33864: 1047,
                33865: 1048,
                33866: 1049,
                33867: 1050,
                33868: 1051,
                33869: 1052,
                33870: 1053,
                33871: 1054,
                33872: 1055,
                33873: 1056,
                33874: 1057,
                33875: 1058,
                33876: 1059,
                33877: 1060,
                33878: 1061,
                33879: 1062,
                33880: 1063,
                33881: 1064,
                33882: 1065,
                33883: 1066,
                33884: 1067,
                33885: 1068,
                33886: 1069,
                33887: 1070,
                33888: 1071,
                33904: 1072,
                33905: 1073,
                33906: 1074,
                33907: 1075,
                33908: 1076,
                33909: 1077,
                33910: 1105,
                33911: 1078,
                33912: 1079,
                33913: 1080,
                33914: 1081,
                33915: 1082,
                33916: 1083,
                33917: 1084,
                33918: 1085,
                33920: 1086,
                33921: 1087,
                33922: 1088,
                33923: 1089,
                33924: 1090,
                33925: 1091,
                33926: 1092,
                33927: 1093,
                33928: 1094,
                33929: 1095,
                33930: 1096,
                33931: 1097,
                33932: 1098,
                33933: 1099,
                33934: 1100,
                33935: 1101,
                33936: 1102,
                33937: 1103,
                33951: 9472,
                33952: 9474,
                33953: 9484,
                33954: 9488,
                33955: 9496,
                33956: 9492,
                33957: 9500,
                33958: 9516,
                33959: 9508,
                33960: 9524,
                33961: 9532,
                33962: 9473,
                33963: 9475,
                33964: 9487,
                33965: 9491,
                33966: 9499,
                33967: 9495,
                33968: 9507,
                33969: 9523,
                33970: 9515,
                33971: 9531,
                33972: 9547,
                33973: 9504,
                33974: 9519,
                33975: 9512,
                33976: 9527,
                33977: 9535,
                33978: 9501,
                33979: 9520,
                33980: 9509,
                33981: 9528,
                33982: 9538,
                34975: 20124,
                34976: 21782,
                34977: 23043,
                34978: 38463,
                34979: 21696,
                34980: 24859,
                34981: 25384,
                34982: 23030,
                34983: 36898,
                34984: 33909,
                34985: 33564,
                34986: 31312,
                34987: 24746,
                34988: 25569,
                34989: 28197,
                34990: 26093,
                34991: 33894,
                34992: 33446,
                34993: 39925,
                34994: 26771,
                34995: 22311,
                34996: 26017,
                34997: 25201,
                34998: 23451,
                34999: 22992,
                35e3: 34427,
                35001: 39156,
                35002: 32098,
                35003: 32190,
                35004: 39822,
                35005: 25110,
                35006: 31903,
                35007: 34999,
                35008: 23433,
                35009: 24245,
                35010: 25353,
                35011: 26263,
                35012: 26696,
                35013: 38343,
                35014: 38797,
                35015: 26447,
                35016: 20197,
                35017: 20234,
                35018: 20301,
                35019: 20381,
                35020: 20553,
                35021: 22258,
                35022: 22839,
                35023: 22996,
                35024: 23041,
                35025: 23561,
                35026: 24799,
                35027: 24847,
                35028: 24944,
                35029: 26131,
                35030: 26885,
                35031: 28858,
                35032: 30031,
                35033: 30064,
                35034: 31227,
                35035: 32173,
                35036: 32239,
                35037: 32963,
                35038: 33806,
                35039: 34915,
                35040: 35586,
                35041: 36949,
                35042: 36986,
                35043: 21307,
                35044: 20117,
                35045: 20133,
                35046: 22495,
                35047: 32946,
                35048: 37057,
                35049: 30959,
                35050: 19968,
                35051: 22769,
                35052: 28322,
                35053: 36920,
                35054: 31282,
                35055: 33576,
                35056: 33419,
                35057: 39983,
                35058: 20801,
                35059: 21360,
                35060: 21693,
                35061: 21729,
                35062: 22240,
                35063: 23035,
                35064: 24341,
                35065: 39154,
                35066: 28139,
                35067: 32996,
                35068: 34093,
                35136: 38498,
                35137: 38512,
                35138: 38560,
                35139: 38907,
                35140: 21515,
                35141: 21491,
                35142: 23431,
                35143: 28879,
                35144: 32701,
                35145: 36802,
                35146: 38632,
                35147: 21359,
                35148: 40284,
                35149: 31418,
                35150: 19985,
                35151: 30867,
                35152: 33276,
                35153: 28198,
                35154: 22040,
                35155: 21764,
                35156: 27421,
                35157: 34074,
                35158: 39995,
                35159: 23013,
                35160: 21417,
                35161: 28006,
                35162: 29916,
                35163: 38287,
                35164: 22082,
                35165: 20113,
                35166: 36939,
                35167: 38642,
                35168: 33615,
                35169: 39180,
                35170: 21473,
                35171: 21942,
                35172: 23344,
                35173: 24433,
                35174: 26144,
                35175: 26355,
                35176: 26628,
                35177: 27704,
                35178: 27891,
                35179: 27945,
                35180: 29787,
                35181: 30408,
                35182: 31310,
                35183: 38964,
                35184: 33521,
                35185: 34907,
                35186: 35424,
                35187: 37613,
                35188: 28082,
                35189: 30123,
                35190: 30410,
                35191: 39365,
                35192: 24742,
                35193: 35585,
                35194: 36234,
                35195: 38322,
                35196: 27022,
                35197: 21421,
                35198: 20870,
                35200: 22290,
                35201: 22576,
                35202: 22852,
                35203: 23476,
                35204: 24310,
                35205: 24616,
                35206: 25513,
                35207: 25588,
                35208: 27839,
                35209: 28436,
                35210: 28814,
                35211: 28948,
                35212: 29017,
                35213: 29141,
                35214: 29503,
                35215: 32257,
                35216: 33398,
                35217: 33489,
                35218: 34199,
                35219: 36960,
                35220: 37467,
                35221: 40219,
                35222: 22633,
                35223: 26044,
                35224: 27738,
                35225: 29989,
                35226: 20985,
                35227: 22830,
                35228: 22885,
                35229: 24448,
                35230: 24540,
                35231: 25276,
                35232: 26106,
                35233: 27178,
                35234: 27431,
                35235: 27572,
                35236: 29579,
                35237: 32705,
                35238: 35158,
                35239: 40236,
                35240: 40206,
                35241: 40644,
                35242: 23713,
                35243: 27798,
                35244: 33659,
                35245: 20740,
                35246: 23627,
                35247: 25014,
                35248: 33222,
                35249: 26742,
                35250: 29281,
                35251: 20057,
                35252: 20474,
                35253: 21368,
                35254: 24681,
                35255: 28201,
                35256: 31311,
                35257: 38899,
                35258: 19979,
                35259: 21270,
                35260: 20206,
                35261: 20309,
                35262: 20285,
                35263: 20385,
                35264: 20339,
                35265: 21152,
                35266: 21487,
                35267: 22025,
                35268: 22799,
                35269: 23233,
                35270: 23478,
                35271: 23521,
                35272: 31185,
                35273: 26247,
                35274: 26524,
                35275: 26550,
                35276: 27468,
                35277: 27827,
                35278: 28779,
                35279: 29634,
                35280: 31117,
                35281: 31166,
                35282: 31292,
                35283: 31623,
                35284: 33457,
                35285: 33499,
                35286: 33540,
                35287: 33655,
                35288: 33775,
                35289: 33747,
                35290: 34662,
                35291: 35506,
                35292: 22057,
                35293: 36008,
                35294: 36838,
                35295: 36942,
                35296: 38686,
                35297: 34442,
                35298: 20420,
                35299: 23784,
                35300: 25105,
                35301: 29273,
                35302: 30011,
                35303: 33253,
                35304: 33469,
                35305: 34558,
                35306: 36032,
                35307: 38597,
                35308: 39187,
                35309: 39381,
                35310: 20171,
                35311: 20250,
                35312: 35299,
                35313: 22238,
                35314: 22602,
                35315: 22730,
                35316: 24315,
                35317: 24555,
                35318: 24618,
                35319: 24724,
                35320: 24674,
                35321: 25040,
                35322: 25106,
                35323: 25296,
                35324: 25913,
                35392: 39745,
                35393: 26214,
                35394: 26800,
                35395: 28023,
                35396: 28784,
                35397: 30028,
                35398: 30342,
                35399: 32117,
                35400: 33445,
                35401: 34809,
                35402: 38283,
                35403: 38542,
                35404: 35997,
                35405: 20977,
                35406: 21182,
                35407: 22806,
                35408: 21683,
                35409: 23475,
                35410: 23830,
                35411: 24936,
                35412: 27010,
                35413: 28079,
                35414: 30861,
                35415: 33995,
                35416: 34903,
                35417: 35442,
                35418: 37799,
                35419: 39608,
                35420: 28012,
                35421: 39336,
                35422: 34521,
                35423: 22435,
                35424: 26623,
                35425: 34510,
                35426: 37390,
                35427: 21123,
                35428: 22151,
                35429: 21508,
                35430: 24275,
                35431: 25313,
                35432: 25785,
                35433: 26684,
                35434: 26680,
                35435: 27579,
                35436: 29554,
                35437: 30906,
                35438: 31339,
                35439: 35226,
                35440: 35282,
                35441: 36203,
                35442: 36611,
                35443: 37101,
                35444: 38307,
                35445: 38548,
                35446: 38761,
                35447: 23398,
                35448: 23731,
                35449: 27005,
                35450: 38989,
                35451: 38990,
                35452: 25499,
                35453: 31520,
                35454: 27179,
                35456: 27263,
                35457: 26806,
                35458: 39949,
                35459: 28511,
                35460: 21106,
                35461: 21917,
                35462: 24688,
                35463: 25324,
                35464: 27963,
                35465: 28167,
                35466: 28369,
                35467: 33883,
                35468: 35088,
                35469: 36676,
                35470: 19988,
                35471: 39993,
                35472: 21494,
                35473: 26907,
                35474: 27194,
                35475: 38788,
                35476: 26666,
                35477: 20828,
                35478: 31427,
                35479: 33970,
                35480: 37340,
                35481: 37772,
                35482: 22107,
                35483: 40232,
                35484: 26658,
                35485: 33541,
                35486: 33841,
                35487: 31909,
                35488: 21e3,
                35489: 33477,
                35490: 29926,
                35491: 20094,
                35492: 20355,
                35493: 20896,
                35494: 23506,
                35495: 21002,
                35496: 21208,
                35497: 21223,
                35498: 24059,
                35499: 21914,
                35500: 22570,
                35501: 23014,
                35502: 23436,
                35503: 23448,
                35504: 23515,
                35505: 24178,
                35506: 24185,
                35507: 24739,
                35508: 24863,
                35509: 24931,
                35510: 25022,
                35511: 25563,
                35512: 25954,
                35513: 26577,
                35514: 26707,
                35515: 26874,
                35516: 27454,
                35517: 27475,
                35518: 27735,
                35519: 28450,
                35520: 28567,
                35521: 28485,
                35522: 29872,
                35523: 29976,
                35524: 30435,
                35525: 30475,
                35526: 31487,
                35527: 31649,
                35528: 31777,
                35529: 32233,
                35530: 32566,
                35531: 32752,
                35532: 32925,
                35533: 33382,
                35534: 33694,
                35535: 35251,
                35536: 35532,
                35537: 36011,
                35538: 36996,
                35539: 37969,
                35540: 38291,
                35541: 38289,
                35542: 38306,
                35543: 38501,
                35544: 38867,
                35545: 39208,
                35546: 33304,
                35547: 20024,
                35548: 21547,
                35549: 23736,
                35550: 24012,
                35551: 29609,
                35552: 30284,
                35553: 30524,
                35554: 23721,
                35555: 32747,
                35556: 36107,
                35557: 38593,
                35558: 38929,
                35559: 38996,
                35560: 39e3,
                35561: 20225,
                35562: 20238,
                35563: 21361,
                35564: 21916,
                35565: 22120,
                35566: 22522,
                35567: 22855,
                35568: 23305,
                35569: 23492,
                35570: 23696,
                35571: 24076,
                35572: 24190,
                35573: 24524,
                35574: 25582,
                35575: 26426,
                35576: 26071,
                35577: 26082,
                35578: 26399,
                35579: 26827,
                35580: 26820,
                35648: 27231,
                35649: 24112,
                35650: 27589,
                35651: 27671,
                35652: 27773,
                35653: 30079,
                35654: 31048,
                35655: 23395,
                35656: 31232,
                35657: 32e3,
                35658: 24509,
                35659: 35215,
                35660: 35352,
                35661: 36020,
                35662: 36215,
                35663: 36556,
                35664: 36637,
                35665: 39138,
                35666: 39438,
                35667: 39740,
                35668: 20096,
                35669: 20605,
                35670: 20736,
                35671: 22931,
                35672: 23452,
                35673: 25135,
                35674: 25216,
                35675: 25836,
                35676: 27450,
                35677: 29344,
                35678: 30097,
                35679: 31047,
                35680: 32681,
                35681: 34811,
                35682: 35516,
                35683: 35696,
                35684: 25516,
                35685: 33738,
                35686: 38816,
                35687: 21513,
                35688: 21507,
                35689: 21931,
                35690: 26708,
                35691: 27224,
                35692: 35440,
                35693: 30759,
                35694: 26485,
                35695: 40653,
                35696: 21364,
                35697: 23458,
                35698: 33050,
                35699: 34384,
                35700: 36870,
                35701: 19992,
                35702: 20037,
                35703: 20167,
                35704: 20241,
                35705: 21450,
                35706: 21560,
                35707: 23470,
                35708: 24339,
                35709: 24613,
                35710: 25937,
                35712: 26429,
                35713: 27714,
                35714: 27762,
                35715: 27875,
                35716: 28792,
                35717: 29699,
                35718: 31350,
                35719: 31406,
                35720: 31496,
                35721: 32026,
                35722: 31998,
                35723: 32102,
                35724: 26087,
                35725: 29275,
                35726: 21435,
                35727: 23621,
                35728: 24040,
                35729: 25298,
                35730: 25312,
                35731: 25369,
                35732: 28192,
                35733: 34394,
                35734: 35377,
                35735: 36317,
                35736: 37624,
                35737: 28417,
                35738: 31142,
                35739: 39770,
                35740: 20136,
                35741: 20139,
                35742: 20140,
                35743: 20379,
                35744: 20384,
                35745: 20689,
                35746: 20807,
                35747: 31478,
                35748: 20849,
                35749: 20982,
                35750: 21332,
                35751: 21281,
                35752: 21375,
                35753: 21483,
                35754: 21932,
                35755: 22659,
                35756: 23777,
                35757: 24375,
                35758: 24394,
                35759: 24623,
                35760: 24656,
                35761: 24685,
                35762: 25375,
                35763: 25945,
                35764: 27211,
                35765: 27841,
                35766: 29378,
                35767: 29421,
                35768: 30703,
                35769: 33016,
                35770: 33029,
                35771: 33288,
                35772: 34126,
                35773: 37111,
                35774: 37857,
                35775: 38911,
                35776: 39255,
                35777: 39514,
                35778: 20208,
                35779: 20957,
                35780: 23597,
                35781: 26241,
                35782: 26989,
                35783: 23616,
                35784: 26354,
                35785: 26997,
                35786: 29577,
                35787: 26704,
                35788: 31873,
                35789: 20677,
                35790: 21220,
                35791: 22343,
                35792: 24062,
                35793: 37670,
                35794: 26020,
                35795: 27427,
                35796: 27453,
                35797: 29748,
                35798: 31105,
                35799: 31165,
                35800: 31563,
                35801: 32202,
                35802: 33465,
                35803: 33740,
                35804: 34943,
                35805: 35167,
                35806: 35641,
                35807: 36817,
                35808: 37329,
                35809: 21535,
                35810: 37504,
                35811: 20061,
                35812: 20534,
                35813: 21477,
                35814: 21306,
                35815: 29399,
                35816: 29590,
                35817: 30697,
                35818: 33510,
                35819: 36527,
                35820: 39366,
                35821: 39368,
                35822: 39378,
                35823: 20855,
                35824: 24858,
                35825: 34398,
                35826: 21936,
                35827: 31354,
                35828: 20598,
                35829: 23507,
                35830: 36935,
                35831: 38533,
                35832: 20018,
                35833: 27355,
                35834: 37351,
                35835: 23633,
                35836: 23624,
                35904: 25496,
                35905: 31391,
                35906: 27795,
                35907: 38772,
                35908: 36705,
                35909: 31402,
                35910: 29066,
                35911: 38536,
                35912: 31874,
                35913: 26647,
                35914: 32368,
                35915: 26705,
                35916: 37740,
                35917: 21234,
                35918: 21531,
                35919: 34219,
                35920: 35347,
                35921: 32676,
                35922: 36557,
                35923: 37089,
                35924: 21350,
                35925: 34952,
                35926: 31041,
                35927: 20418,
                35928: 20670,
                35929: 21009,
                35930: 20804,
                35931: 21843,
                35932: 22317,
                35933: 29674,
                35934: 22411,
                35935: 22865,
                35936: 24418,
                35937: 24452,
                35938: 24693,
                35939: 24950,
                35940: 24935,
                35941: 25001,
                35942: 25522,
                35943: 25658,
                35944: 25964,
                35945: 26223,
                35946: 26690,
                35947: 28179,
                35948: 30054,
                35949: 31293,
                35950: 31995,
                35951: 32076,
                35952: 32153,
                35953: 32331,
                35954: 32619,
                35955: 33550,
                35956: 33610,
                35957: 34509,
                35958: 35336,
                35959: 35427,
                35960: 35686,
                35961: 36605,
                35962: 38938,
                35963: 40335,
                35964: 33464,
                35965: 36814,
                35966: 39912,
                35968: 21127,
                35969: 25119,
                35970: 25731,
                35971: 28608,
                35972: 38553,
                35973: 26689,
                35974: 20625,
                35975: 27424,
                35976: 27770,
                35977: 28500,
                35978: 31348,
                35979: 32080,
                35980: 34880,
                35981: 35363,
                35982: 26376,
                35983: 20214,
                35984: 20537,
                35985: 20518,
                35986: 20581,
                35987: 20860,
                35988: 21048,
                35989: 21091,
                35990: 21927,
                35991: 22287,
                35992: 22533,
                35993: 23244,
                35994: 24314,
                35995: 25010,
                35996: 25080,
                35997: 25331,
                35998: 25458,
                35999: 26908,
                36e3: 27177,
                36001: 29309,
                36002: 29356,
                36003: 29486,
                36004: 30740,
                36005: 30831,
                36006: 32121,
                36007: 30476,
                36008: 32937,
                36009: 35211,
                36010: 35609,
                36011: 36066,
                36012: 36562,
                36013: 36963,
                36014: 37749,
                36015: 38522,
                36016: 38997,
                36017: 39443,
                36018: 40568,
                36019: 20803,
                36020: 21407,
                36021: 21427,
                36022: 24187,
                36023: 24358,
                36024: 28187,
                36025: 28304,
                36026: 29572,
                36027: 29694,
                36028: 32067,
                36029: 33335,
                36030: 35328,
                36031: 35578,
                36032: 38480,
                36033: 20046,
                36034: 20491,
                36035: 21476,
                36036: 21628,
                36037: 22266,
                36038: 22993,
                36039: 23396,
                36040: 24049,
                36041: 24235,
                36042: 24359,
                36043: 25144,
                36044: 25925,
                36045: 26543,
                36046: 28246,
                36047: 29392,
                36048: 31946,
                36049: 34996,
                36050: 32929,
                36051: 32993,
                36052: 33776,
                36053: 34382,
                36054: 35463,
                36055: 36328,
                36056: 37431,
                36057: 38599,
                36058: 39015,
                36059: 40723,
                36060: 20116,
                36061: 20114,
                36062: 20237,
                36063: 21320,
                36064: 21577,
                36065: 21566,
                36066: 23087,
                36067: 24460,
                36068: 24481,
                36069: 24735,
                36070: 26791,
                36071: 27278,
                36072: 29786,
                36073: 30849,
                36074: 35486,
                36075: 35492,
                36076: 35703,
                36077: 37264,
                36078: 20062,
                36079: 39881,
                36080: 20132,
                36081: 20348,
                36082: 20399,
                36083: 20505,
                36084: 20502,
                36085: 20809,
                36086: 20844,
                36087: 21151,
                36088: 21177,
                36089: 21246,
                36090: 21402,
                36091: 21475,
                36092: 21521,
                36160: 21518,
                36161: 21897,
                36162: 22353,
                36163: 22434,
                36164: 22909,
                36165: 23380,
                36166: 23389,
                36167: 23439,
                36168: 24037,
                36169: 24039,
                36170: 24055,
                36171: 24184,
                36172: 24195,
                36173: 24218,
                36174: 24247,
                36175: 24344,
                36176: 24658,
                36177: 24908,
                36178: 25239,
                36179: 25304,
                36180: 25511,
                36181: 25915,
                36182: 26114,
                36183: 26179,
                36184: 26356,
                36185: 26477,
                36186: 26657,
                36187: 26775,
                36188: 27083,
                36189: 27743,
                36190: 27946,
                36191: 28009,
                36192: 28207,
                36193: 28317,
                36194: 30002,
                36195: 30343,
                36196: 30828,
                36197: 31295,
                36198: 31968,
                36199: 32005,
                36200: 32024,
                36201: 32094,
                36202: 32177,
                36203: 32789,
                36204: 32771,
                36205: 32943,
                36206: 32945,
                36207: 33108,
                36208: 33167,
                36209: 33322,
                36210: 33618,
                36211: 34892,
                36212: 34913,
                36213: 35611,
                36214: 36002,
                36215: 36092,
                36216: 37066,
                36217: 37237,
                36218: 37489,
                36219: 30783,
                36220: 37628,
                36221: 38308,
                36222: 38477,
                36224: 38917,
                36225: 39321,
                36226: 39640,
                36227: 40251,
                36228: 21083,
                36229: 21163,
                36230: 21495,
                36231: 21512,
                36232: 22741,
                36233: 25335,
                36234: 28640,
                36235: 35946,
                36236: 36703,
                36237: 40633,
                36238: 20811,
                36239: 21051,
                36240: 21578,
                36241: 22269,
                36242: 31296,
                36243: 37239,
                36244: 40288,
                36245: 40658,
                36246: 29508,
                36247: 28425,
                36248: 33136,
                36249: 29969,
                36250: 24573,
                36251: 24794,
                36252: 39592,
                36253: 29403,
                36254: 36796,
                36255: 27492,
                36256: 38915,
                36257: 20170,
                36258: 22256,
                36259: 22372,
                36260: 22718,
                36261: 23130,
                36262: 24680,
                36263: 25031,
                36264: 26127,
                36265: 26118,
                36266: 26681,
                36267: 26801,
                36268: 28151,
                36269: 30165,
                36270: 32058,
                36271: 33390,
                36272: 39746,
                36273: 20123,
                36274: 20304,
                36275: 21449,
                36276: 21766,
                36277: 23919,
                36278: 24038,
                36279: 24046,
                36280: 26619,
                36281: 27801,
                36282: 29811,
                36283: 30722,
                36284: 35408,
                36285: 37782,
                36286: 35039,
                36287: 22352,
                36288: 24231,
                36289: 25387,
                36290: 20661,
                36291: 20652,
                36292: 20877,
                36293: 26368,
                36294: 21705,
                36295: 22622,
                36296: 22971,
                36297: 23472,
                36298: 24425,
                36299: 25165,
                36300: 25505,
                36301: 26685,
                36302: 27507,
                36303: 28168,
                36304: 28797,
                36305: 37319,
                36306: 29312,
                36307: 30741,
                36308: 30758,
                36309: 31085,
                36310: 25998,
                36311: 32048,
                36312: 33756,
                36313: 35009,
                36314: 36617,
                36315: 38555,
                36316: 21092,
                36317: 22312,
                36318: 26448,
                36319: 32618,
                36320: 36001,
                36321: 20916,
                36322: 22338,
                36323: 38442,
                36324: 22586,
                36325: 27018,
                36326: 32948,
                36327: 21682,
                36328: 23822,
                36329: 22524,
                36330: 30869,
                36331: 40442,
                36332: 20316,
                36333: 21066,
                36334: 21643,
                36335: 25662,
                36336: 26152,
                36337: 26388,
                36338: 26613,
                36339: 31364,
                36340: 31574,
                36341: 32034,
                36342: 37679,
                36343: 26716,
                36344: 39853,
                36345: 31545,
                36346: 21273,
                36347: 20874,
                36348: 21047,
                36416: 23519,
                36417: 25334,
                36418: 25774,
                36419: 25830,
                36420: 26413,
                36421: 27578,
                36422: 34217,
                36423: 38609,
                36424: 30352,
                36425: 39894,
                36426: 25420,
                36427: 37638,
                36428: 39851,
                36429: 30399,
                36430: 26194,
                36431: 19977,
                36432: 20632,
                36433: 21442,
                36434: 23665,
                36435: 24808,
                36436: 25746,
                36437: 25955,
                36438: 26719,
                36439: 29158,
                36440: 29642,
                36441: 29987,
                36442: 31639,
                36443: 32386,
                36444: 34453,
                36445: 35715,
                36446: 36059,
                36447: 37240,
                36448: 39184,
                36449: 26028,
                36450: 26283,
                36451: 27531,
                36452: 20181,
                36453: 20180,
                36454: 20282,
                36455: 20351,
                36456: 21050,
                36457: 21496,
                36458: 21490,
                36459: 21987,
                36460: 22235,
                36461: 22763,
                36462: 22987,
                36463: 22985,
                36464: 23039,
                36465: 23376,
                36466: 23629,
                36467: 24066,
                36468: 24107,
                36469: 24535,
                36470: 24605,
                36471: 25351,
                36472: 25903,
                36473: 23388,
                36474: 26031,
                36475: 26045,
                36476: 26088,
                36477: 26525,
                36478: 27490,
                36480: 27515,
                36481: 27663,
                36482: 29509,
                36483: 31049,
                36484: 31169,
                36485: 31992,
                36486: 32025,
                36487: 32043,
                36488: 32930,
                36489: 33026,
                36490: 33267,
                36491: 35222,
                36492: 35422,
                36493: 35433,
                36494: 35430,
                36495: 35468,
                36496: 35566,
                36497: 36039,
                36498: 36060,
                36499: 38604,
                36500: 39164,
                36501: 27503,
                36502: 20107,
                36503: 20284,
                36504: 20365,
                36505: 20816,
                36506: 23383,
                36507: 23546,
                36508: 24904,
                36509: 25345,
                36510: 26178,
                36511: 27425,
                36512: 28363,
                36513: 27835,
                36514: 29246,
                36515: 29885,
                36516: 30164,
                36517: 30913,
                36518: 31034,
                36519: 32780,
                36520: 32819,
                36521: 33258,
                36522: 33940,
                36523: 36766,
                36524: 27728,
                36525: 40575,
                36526: 24335,
                36527: 35672,
                36528: 40235,
                36529: 31482,
                36530: 36600,
                36531: 23437,
                36532: 38635,
                36533: 19971,
                36534: 21489,
                36535: 22519,
                36536: 22833,
                36537: 23241,
                36538: 23460,
                36539: 24713,
                36540: 28287,
                36541: 28422,
                36542: 30142,
                36543: 36074,
                36544: 23455,
                36545: 34048,
                36546: 31712,
                36547: 20594,
                36548: 26612,
                36549: 33437,
                36550: 23649,
                36551: 34122,
                36552: 32286,
                36553: 33294,
                36554: 20889,
                36555: 23556,
                36556: 25448,
                36557: 36198,
                36558: 26012,
                36559: 29038,
                36560: 31038,
                36561: 32023,
                36562: 32773,
                36563: 35613,
                36564: 36554,
                36565: 36974,
                36566: 34503,
                36567: 37034,
                36568: 20511,
                36569: 21242,
                36570: 23610,
                36571: 26451,
                36572: 28796,
                36573: 29237,
                36574: 37196,
                36575: 37320,
                36576: 37675,
                36577: 33509,
                36578: 23490,
                36579: 24369,
                36580: 24825,
                36581: 20027,
                36582: 21462,
                36583: 23432,
                36584: 25163,
                36585: 26417,
                36586: 27530,
                36587: 29417,
                36588: 29664,
                36589: 31278,
                36590: 33131,
                36591: 36259,
                36592: 37202,
                36593: 39318,
                36594: 20754,
                36595: 21463,
                36596: 21610,
                36597: 23551,
                36598: 25480,
                36599: 27193,
                36600: 32172,
                36601: 38656,
                36602: 22234,
                36603: 21454,
                36604: 21608,
                36672: 23447,
                36673: 23601,
                36674: 24030,
                36675: 20462,
                36676: 24833,
                36677: 25342,
                36678: 27954,
                36679: 31168,
                36680: 31179,
                36681: 32066,
                36682: 32333,
                36683: 32722,
                36684: 33261,
                36685: 33311,
                36686: 33936,
                36687: 34886,
                36688: 35186,
                36689: 35728,
                36690: 36468,
                36691: 36655,
                36692: 36913,
                36693: 37195,
                36694: 37228,
                36695: 38598,
                36696: 37276,
                36697: 20160,
                36698: 20303,
                36699: 20805,
                36700: 21313,
                36701: 24467,
                36702: 25102,
                36703: 26580,
                36704: 27713,
                36705: 28171,
                36706: 29539,
                36707: 32294,
                36708: 37325,
                36709: 37507,
                36710: 21460,
                36711: 22809,
                36712: 23487,
                36713: 28113,
                36714: 31069,
                36715: 32302,
                36716: 31899,
                36717: 22654,
                36718: 29087,
                36719: 20986,
                36720: 34899,
                36721: 36848,
                36722: 20426,
                36723: 23803,
                36724: 26149,
                36725: 30636,
                36726: 31459,
                36727: 33308,
                36728: 39423,
                36729: 20934,
                36730: 24490,
                36731: 26092,
                36732: 26991,
                36733: 27529,
                36734: 28147,
                36736: 28310,
                36737: 28516,
                36738: 30462,
                36739: 32020,
                36740: 24033,
                36741: 36981,
                36742: 37255,
                36743: 38918,
                36744: 20966,
                36745: 21021,
                36746: 25152,
                36747: 26257,
                36748: 26329,
                36749: 28186,
                36750: 24246,
                36751: 32210,
                36752: 32626,
                36753: 26360,
                36754: 34223,
                36755: 34295,
                36756: 35576,
                36757: 21161,
                36758: 21465,
                36759: 22899,
                36760: 24207,
                36761: 24464,
                36762: 24661,
                36763: 37604,
                36764: 38500,
                36765: 20663,
                36766: 20767,
                36767: 21213,
                36768: 21280,
                36769: 21319,
                36770: 21484,
                36771: 21736,
                36772: 21830,
                36773: 21809,
                36774: 22039,
                36775: 22888,
                36776: 22974,
                36777: 23100,
                36778: 23477,
                36779: 23558,
                36780: 23567,
                36781: 23569,
                36782: 23578,
                36783: 24196,
                36784: 24202,
                36785: 24288,
                36786: 24432,
                36787: 25215,
                36788: 25220,
                36789: 25307,
                36790: 25484,
                36791: 25463,
                36792: 26119,
                36793: 26124,
                36794: 26157,
                36795: 26230,
                36796: 26494,
                36797: 26786,
                36798: 27167,
                36799: 27189,
                36800: 27836,
                36801: 28040,
                36802: 28169,
                36803: 28248,
                36804: 28988,
                36805: 28966,
                36806: 29031,
                36807: 30151,
                36808: 30465,
                36809: 30813,
                36810: 30977,
                36811: 31077,
                36812: 31216,
                36813: 31456,
                36814: 31505,
                36815: 31911,
                36816: 32057,
                36817: 32918,
                36818: 33750,
                36819: 33931,
                36820: 34121,
                36821: 34909,
                36822: 35059,
                36823: 35359,
                36824: 35388,
                36825: 35412,
                36826: 35443,
                36827: 35937,
                36828: 36062,
                36829: 37284,
                36830: 37478,
                36831: 37758,
                36832: 37912,
                36833: 38556,
                36834: 38808,
                36835: 19978,
                36836: 19976,
                36837: 19998,
                36838: 20055,
                36839: 20887,
                36840: 21104,
                36841: 22478,
                36842: 22580,
                36843: 22732,
                36844: 23330,
                36845: 24120,
                36846: 24773,
                36847: 25854,
                36848: 26465,
                36849: 26454,
                36850: 27972,
                36851: 29366,
                36852: 30067,
                36853: 31331,
                36854: 33976,
                36855: 35698,
                36856: 37304,
                36857: 37664,
                36858: 22065,
                36859: 22516,
                36860: 39166,
                36928: 25325,
                36929: 26893,
                36930: 27542,
                36931: 29165,
                36932: 32340,
                36933: 32887,
                36934: 33394,
                36935: 35302,
                36936: 39135,
                36937: 34645,
                36938: 36785,
                36939: 23611,
                36940: 20280,
                36941: 20449,
                36942: 20405,
                36943: 21767,
                36944: 23072,
                36945: 23517,
                36946: 23529,
                36947: 24515,
                36948: 24910,
                36949: 25391,
                36950: 26032,
                36951: 26187,
                36952: 26862,
                36953: 27035,
                36954: 28024,
                36955: 28145,
                36956: 30003,
                36957: 30137,
                36958: 30495,
                36959: 31070,
                36960: 31206,
                36961: 32051,
                36962: 33251,
                36963: 33455,
                36964: 34218,
                36965: 35242,
                36966: 35386,
                36967: 36523,
                36968: 36763,
                36969: 36914,
                36970: 37341,
                36971: 38663,
                36972: 20154,
                36973: 20161,
                36974: 20995,
                36975: 22645,
                36976: 22764,
                36977: 23563,
                36978: 29978,
                36979: 23613,
                36980: 33102,
                36981: 35338,
                36982: 36805,
                36983: 38499,
                36984: 38765,
                36985: 31525,
                36986: 35535,
                36987: 38920,
                36988: 37218,
                36989: 22259,
                36990: 21416,
                36992: 36887,
                36993: 21561,
                36994: 22402,
                36995: 24101,
                36996: 25512,
                36997: 27700,
                36998: 28810,
                36999: 30561,
                37e3: 31883,
                37001: 32736,
                37002: 34928,
                37003: 36930,
                37004: 37204,
                37005: 37648,
                37006: 37656,
                37007: 38543,
                37008: 29790,
                37009: 39620,
                37010: 23815,
                37011: 23913,
                37012: 25968,
                37013: 26530,
                37014: 36264,
                37015: 38619,
                37016: 25454,
                37017: 26441,
                37018: 26905,
                37019: 33733,
                37020: 38935,
                37021: 38592,
                37022: 35070,
                37023: 28548,
                37024: 25722,
                37025: 23544,
                37026: 19990,
                37027: 28716,
                37028: 30045,
                37029: 26159,
                37030: 20932,
                37031: 21046,
                37032: 21218,
                37033: 22995,
                37034: 24449,
                37035: 24615,
                37036: 25104,
                37037: 25919,
                37038: 25972,
                37039: 26143,
                37040: 26228,
                37041: 26866,
                37042: 26646,
                37043: 27491,
                37044: 28165,
                37045: 29298,
                37046: 29983,
                37047: 30427,
                37048: 31934,
                37049: 32854,
                37050: 22768,
                37051: 35069,
                37052: 35199,
                37053: 35488,
                37054: 35475,
                37055: 35531,
                37056: 36893,
                37057: 37266,
                37058: 38738,
                37059: 38745,
                37060: 25993,
                37061: 31246,
                37062: 33030,
                37063: 38587,
                37064: 24109,
                37065: 24796,
                37066: 25114,
                37067: 26021,
                37068: 26132,
                37069: 26512,
                37070: 30707,
                37071: 31309,
                37072: 31821,
                37073: 32318,
                37074: 33034,
                37075: 36012,
                37076: 36196,
                37077: 36321,
                37078: 36447,
                37079: 30889,
                37080: 20999,
                37081: 25305,
                37082: 25509,
                37083: 25666,
                37084: 25240,
                37085: 35373,
                37086: 31363,
                37087: 31680,
                37088: 35500,
                37089: 38634,
                37090: 32118,
                37091: 33292,
                37092: 34633,
                37093: 20185,
                37094: 20808,
                37095: 21315,
                37096: 21344,
                37097: 23459,
                37098: 23554,
                37099: 23574,
                37100: 24029,
                37101: 25126,
                37102: 25159,
                37103: 25776,
                37104: 26643,
                37105: 26676,
                37106: 27849,
                37107: 27973,
                37108: 27927,
                37109: 26579,
                37110: 28508,
                37111: 29006,
                37112: 29053,
                37113: 26059,
                37114: 31359,
                37115: 31661,
                37116: 32218,
                37184: 32330,
                37185: 32680,
                37186: 33146,
                37187: 33307,
                37188: 33337,
                37189: 34214,
                37190: 35438,
                37191: 36046,
                37192: 36341,
                37193: 36984,
                37194: 36983,
                37195: 37549,
                37196: 37521,
                37197: 38275,
                37198: 39854,
                37199: 21069,
                37200: 21892,
                37201: 28472,
                37202: 28982,
                37203: 20840,
                37204: 31109,
                37205: 32341,
                37206: 33203,
                37207: 31950,
                37208: 22092,
                37209: 22609,
                37210: 23720,
                37211: 25514,
                37212: 26366,
                37213: 26365,
                37214: 26970,
                37215: 29401,
                37216: 30095,
                37217: 30094,
                37218: 30990,
                37219: 31062,
                37220: 31199,
                37221: 31895,
                37222: 32032,
                37223: 32068,
                37224: 34311,
                37225: 35380,
                37226: 38459,
                37227: 36961,
                37228: 40736,
                37229: 20711,
                37230: 21109,
                37231: 21452,
                37232: 21474,
                37233: 20489,
                37234: 21930,
                37235: 22766,
                37236: 22863,
                37237: 29245,
                37238: 23435,
                37239: 23652,
                37240: 21277,
                37241: 24803,
                37242: 24819,
                37243: 25436,
                37244: 25475,
                37245: 25407,
                37246: 25531,
                37248: 25805,
                37249: 26089,
                37250: 26361,
                37251: 24035,
                37252: 27085,
                37253: 27133,
                37254: 28437,
                37255: 29157,
                37256: 20105,
                37257: 30185,
                37258: 30456,
                37259: 31379,
                37260: 31967,
                37261: 32207,
                37262: 32156,
                37263: 32865,
                37264: 33609,
                37265: 33624,
                37266: 33900,
                37267: 33980,
                37268: 34299,
                37269: 35013,
                37270: 36208,
                37271: 36865,
                37272: 36973,
                37273: 37783,
                37274: 38684,
                37275: 39442,
                37276: 20687,
                37277: 22679,
                37278: 24974,
                37279: 33235,
                37280: 34101,
                37281: 36104,
                37282: 36896,
                37283: 20419,
                37284: 20596,
                37285: 21063,
                37286: 21363,
                37287: 24687,
                37288: 25417,
                37289: 26463,
                37290: 28204,
                37291: 36275,
                37292: 36895,
                37293: 20439,
                37294: 23646,
                37295: 36042,
                37296: 26063,
                37297: 32154,
                37298: 21330,
                37299: 34966,
                37300: 20854,
                37301: 25539,
                37302: 23384,
                37303: 23403,
                37304: 23562,
                37305: 25613,
                37306: 26449,
                37307: 36956,
                37308: 20182,
                37309: 22810,
                37310: 22826,
                37311: 27760,
                37312: 35409,
                37313: 21822,
                37314: 22549,
                37315: 22949,
                37316: 24816,
                37317: 25171,
                37318: 26561,
                37319: 33333,
                37320: 26965,
                37321: 38464,
                37322: 39364,
                37323: 39464,
                37324: 20307,
                37325: 22534,
                37326: 23550,
                37327: 32784,
                37328: 23729,
                37329: 24111,
                37330: 24453,
                37331: 24608,
                37332: 24907,
                37333: 25140,
                37334: 26367,
                37335: 27888,
                37336: 28382,
                37337: 32974,
                37338: 33151,
                37339: 33492,
                37340: 34955,
                37341: 36024,
                37342: 36864,
                37343: 36910,
                37344: 38538,
                37345: 40667,
                37346: 39899,
                37347: 20195,
                37348: 21488,
                37349: 22823,
                37350: 31532,
                37351: 37261,
                37352: 38988,
                37353: 40441,
                37354: 28381,
                37355: 28711,
                37356: 21331,
                37357: 21828,
                37358: 23429,
                37359: 25176,
                37360: 25246,
                37361: 25299,
                37362: 27810,
                37363: 28655,
                37364: 29730,
                37365: 35351,
                37366: 37944,
                37367: 28609,
                37368: 35582,
                37369: 33592,
                37370: 20967,
                37371: 34552,
                37372: 21482,
                37440: 21481,
                37441: 20294,
                37442: 36948,
                37443: 36784,
                37444: 22890,
                37445: 33073,
                37446: 24061,
                37447: 31466,
                37448: 36799,
                37449: 26842,
                37450: 35895,
                37451: 29432,
                37452: 40008,
                37453: 27197,
                37454: 35504,
                37455: 20025,
                37456: 21336,
                37457: 22022,
                37458: 22374,
                37459: 25285,
                37460: 25506,
                37461: 26086,
                37462: 27470,
                37463: 28129,
                37464: 28251,
                37465: 28845,
                37466: 30701,
                37467: 31471,
                37468: 31658,
                37469: 32187,
                37470: 32829,
                37471: 32966,
                37472: 34507,
                37473: 35477,
                37474: 37723,
                37475: 22243,
                37476: 22727,
                37477: 24382,
                37478: 26029,
                37479: 26262,
                37480: 27264,
                37481: 27573,
                37482: 30007,
                37483: 35527,
                37484: 20516,
                37485: 30693,
                37486: 22320,
                37487: 24347,
                37488: 24677,
                37489: 26234,
                37490: 27744,
                37491: 30196,
                37492: 31258,
                37493: 32622,
                37494: 33268,
                37495: 34584,
                37496: 36933,
                37497: 39347,
                37498: 31689,
                37499: 30044,
                37500: 31481,
                37501: 31569,
                37502: 33988,
                37504: 36880,
                37505: 31209,
                37506: 31378,
                37507: 33590,
                37508: 23265,
                37509: 30528,
                37510: 20013,
                37511: 20210,
                37512: 23449,
                37513: 24544,
                37514: 25277,
                37515: 26172,
                37516: 26609,
                37517: 27880,
                37518: 34411,
                37519: 34935,
                37520: 35387,
                37521: 37198,
                37522: 37619,
                37523: 39376,
                37524: 27159,
                37525: 28710,
                37526: 29482,
                37527: 33511,
                37528: 33879,
                37529: 36015,
                37530: 19969,
                37531: 20806,
                37532: 20939,
                37533: 21899,
                37534: 23541,
                37535: 24086,
                37536: 24115,
                37537: 24193,
                37538: 24340,
                37539: 24373,
                37540: 24427,
                37541: 24500,
                37542: 25074,
                37543: 25361,
                37544: 26274,
                37545: 26397,
                37546: 28526,
                37547: 29266,
                37548: 30010,
                37549: 30522,
                37550: 32884,
                37551: 33081,
                37552: 33144,
                37553: 34678,
                37554: 35519,
                37555: 35548,
                37556: 36229,
                37557: 36339,
                37558: 37530,
                37559: 38263,
                37560: 38914,
                37561: 40165,
                37562: 21189,
                37563: 25431,
                37564: 30452,
                37565: 26389,
                37566: 27784,
                37567: 29645,
                37568: 36035,
                37569: 37806,
                37570: 38515,
                37571: 27941,
                37572: 22684,
                37573: 26894,
                37574: 27084,
                37575: 36861,
                37576: 37786,
                37577: 30171,
                37578: 36890,
                37579: 22618,
                37580: 26626,
                37581: 25524,
                37582: 27131,
                37583: 20291,
                37584: 28460,
                37585: 26584,
                37586: 36795,
                37587: 34086,
                37588: 32180,
                37589: 37716,
                37590: 26943,
                37591: 28528,
                37592: 22378,
                37593: 22775,
                37594: 23340,
                37595: 32044,
                37596: 29226,
                37597: 21514,
                37598: 37347,
                37599: 40372,
                37600: 20141,
                37601: 20302,
                37602: 20572,
                37603: 20597,
                37604: 21059,
                37605: 35998,
                37606: 21576,
                37607: 22564,
                37608: 23450,
                37609: 24093,
                37610: 24213,
                37611: 24237,
                37612: 24311,
                37613: 24351,
                37614: 24716,
                37615: 25269,
                37616: 25402,
                37617: 25552,
                37618: 26799,
                37619: 27712,
                37620: 30855,
                37621: 31118,
                37622: 31243,
                37623: 32224,
                37624: 33351,
                37625: 35330,
                37626: 35558,
                37627: 36420,
                37628: 36883,
                37696: 37048,
                37697: 37165,
                37698: 37336,
                37699: 40718,
                37700: 27877,
                37701: 25688,
                37702: 25826,
                37703: 25973,
                37704: 28404,
                37705: 30340,
                37706: 31515,
                37707: 36969,
                37708: 37841,
                37709: 28346,
                37710: 21746,
                37711: 24505,
                37712: 25764,
                37713: 36685,
                37714: 36845,
                37715: 37444,
                37716: 20856,
                37717: 22635,
                37718: 22825,
                37719: 23637,
                37720: 24215,
                37721: 28155,
                37722: 32399,
                37723: 29980,
                37724: 36028,
                37725: 36578,
                37726: 39003,
                37727: 28857,
                37728: 20253,
                37729: 27583,
                37730: 28593,
                37731: 3e4,
                37732: 38651,
                37733: 20814,
                37734: 21520,
                37735: 22581,
                37736: 22615,
                37737: 22956,
                37738: 23648,
                37739: 24466,
                37740: 26007,
                37741: 26460,
                37742: 28193,
                37743: 30331,
                37744: 33759,
                37745: 36077,
                37746: 36884,
                37747: 37117,
                37748: 37709,
                37749: 30757,
                37750: 30778,
                37751: 21162,
                37752: 24230,
                37753: 22303,
                37754: 22900,
                37755: 24594,
                37756: 20498,
                37757: 20826,
                37758: 20908,
                37760: 20941,
                37761: 20992,
                37762: 21776,
                37763: 22612,
                37764: 22616,
                37765: 22871,
                37766: 23445,
                37767: 23798,
                37768: 23947,
                37769: 24764,
                37770: 25237,
                37771: 25645,
                37772: 26481,
                37773: 26691,
                37774: 26812,
                37775: 26847,
                37776: 30423,
                37777: 28120,
                37778: 28271,
                37779: 28059,
                37780: 28783,
                37781: 29128,
                37782: 24403,
                37783: 30168,
                37784: 31095,
                37785: 31561,
                37786: 31572,
                37787: 31570,
                37788: 31958,
                37789: 32113,
                37790: 21040,
                37791: 33891,
                37792: 34153,
                37793: 34276,
                37794: 35342,
                37795: 35588,
                37796: 35910,
                37797: 36367,
                37798: 36867,
                37799: 36879,
                37800: 37913,
                37801: 38518,
                37802: 38957,
                37803: 39472,
                37804: 38360,
                37805: 20685,
                37806: 21205,
                37807: 21516,
                37808: 22530,
                37809: 23566,
                37810: 24999,
                37811: 25758,
                37812: 27934,
                37813: 30643,
                37814: 31461,
                37815: 33012,
                37816: 33796,
                37817: 36947,
                37818: 37509,
                37819: 23776,
                37820: 40199,
                37821: 21311,
                37822: 24471,
                37823: 24499,
                37824: 28060,
                37825: 29305,
                37826: 30563,
                37827: 31167,
                37828: 31716,
                37829: 27602,
                37830: 29420,
                37831: 35501,
                37832: 26627,
                37833: 27233,
                37834: 20984,
                37835: 31361,
                37836: 26932,
                37837: 23626,
                37838: 40182,
                37839: 33515,
                37840: 23493,
                37841: 37193,
                37842: 28702,
                37843: 22136,
                37844: 23663,
                37845: 24775,
                37846: 25958,
                37847: 27788,
                37848: 35930,
                37849: 36929,
                37850: 38931,
                37851: 21585,
                37852: 26311,
                37853: 37389,
                37854: 22856,
                37855: 37027,
                37856: 20869,
                37857: 20045,
                37858: 20970,
                37859: 34201,
                37860: 35598,
                37861: 28760,
                37862: 25466,
                37863: 37707,
                37864: 26978,
                37865: 39348,
                37866: 32260,
                37867: 30071,
                37868: 21335,
                37869: 26976,
                37870: 36575,
                37871: 38627,
                37872: 27741,
                37873: 20108,
                37874: 23612,
                37875: 24336,
                37876: 36841,
                37877: 21250,
                37878: 36049,
                37879: 32905,
                37880: 34425,
                37881: 24319,
                37882: 26085,
                37883: 20083,
                37884: 20837,
                37952: 22914,
                37953: 23615,
                37954: 38894,
                37955: 20219,
                37956: 22922,
                37957: 24525,
                37958: 35469,
                37959: 28641,
                37960: 31152,
                37961: 31074,
                37962: 23527,
                37963: 33905,
                37964: 29483,
                37965: 29105,
                37966: 24180,
                37967: 24565,
                37968: 25467,
                37969: 25754,
                37970: 29123,
                37971: 31896,
                37972: 20035,
                37973: 24316,
                37974: 20043,
                37975: 22492,
                37976: 22178,
                37977: 24745,
                37978: 28611,
                37979: 32013,
                37980: 33021,
                37981: 33075,
                37982: 33215,
                37983: 36786,
                37984: 35223,
                37985: 34468,
                37986: 24052,
                37987: 25226,
                37988: 25773,
                37989: 35207,
                37990: 26487,
                37991: 27874,
                37992: 27966,
                37993: 29750,
                37994: 30772,
                37995: 23110,
                37996: 32629,
                37997: 33453,
                37998: 39340,
                37999: 20467,
                38e3: 24259,
                38001: 25309,
                38002: 25490,
                38003: 25943,
                38004: 26479,
                38005: 30403,
                38006: 29260,
                38007: 32972,
                38008: 32954,
                38009: 36649,
                38010: 37197,
                38011: 20493,
                38012: 22521,
                38013: 23186,
                38014: 26757,
                38016: 26995,
                38017: 29028,
                38018: 29437,
                38019: 36023,
                38020: 22770,
                38021: 36064,
                38022: 38506,
                38023: 36889,
                38024: 34687,
                38025: 31204,
                38026: 30695,
                38027: 33833,
                38028: 20271,
                38029: 21093,
                38030: 21338,
                38031: 25293,
                38032: 26575,
                38033: 27850,
                38034: 30333,
                38035: 31636,
                38036: 31893,
                38037: 33334,
                38038: 34180,
                38039: 36843,
                38040: 26333,
                38041: 28448,
                38042: 29190,
                38043: 32283,
                38044: 33707,
                38045: 39361,
                38046: 40614,
                38047: 20989,
                38048: 31665,
                38049: 30834,
                38050: 31672,
                38051: 32903,
                38052: 31560,
                38053: 27368,
                38054: 24161,
                38055: 32908,
                38056: 30033,
                38057: 30048,
                38058: 20843,
                38059: 37474,
                38060: 28300,
                38061: 30330,
                38062: 37271,
                38063: 39658,
                38064: 20240,
                38065: 32624,
                38066: 25244,
                38067: 31567,
                38068: 38309,
                38069: 40169,
                38070: 22138,
                38071: 22617,
                38072: 34532,
                38073: 38588,
                38074: 20276,
                38075: 21028,
                38076: 21322,
                38077: 21453,
                38078: 21467,
                38079: 24070,
                38080: 25644,
                38081: 26001,
                38082: 26495,
                38083: 27710,
                38084: 27726,
                38085: 29256,
                38086: 29359,
                38087: 29677,
                38088: 30036,
                38089: 32321,
                38090: 33324,
                38091: 34281,
                38092: 36009,
                38093: 31684,
                38094: 37318,
                38095: 29033,
                38096: 38930,
                38097: 39151,
                38098: 25405,
                38099: 26217,
                38100: 30058,
                38101: 30436,
                38102: 30928,
                38103: 34115,
                38104: 34542,
                38105: 21290,
                38106: 21329,
                38107: 21542,
                38108: 22915,
                38109: 24199,
                38110: 24444,
                38111: 24754,
                38112: 25161,
                38113: 25209,
                38114: 25259,
                38115: 26e3,
                38116: 27604,
                38117: 27852,
                38118: 30130,
                38119: 30382,
                38120: 30865,
                38121: 31192,
                38122: 32203,
                38123: 32631,
                38124: 32933,
                38125: 34987,
                38126: 35513,
                38127: 36027,
                38128: 36991,
                38129: 38750,
                38130: 39131,
                38131: 27147,
                38132: 31800,
                38133: 20633,
                38134: 23614,
                38135: 24494,
                38136: 26503,
                38137: 27608,
                38138: 29749,
                38139: 30473,
                38140: 32654,
                38208: 40763,
                38209: 26570,
                38210: 31255,
                38211: 21305,
                38212: 30091,
                38213: 39661,
                38214: 24422,
                38215: 33181,
                38216: 33777,
                38217: 32920,
                38218: 24380,
                38219: 24517,
                38220: 30050,
                38221: 31558,
                38222: 36924,
                38223: 26727,
                38224: 23019,
                38225: 23195,
                38226: 32016,
                38227: 30334,
                38228: 35628,
                38229: 20469,
                38230: 24426,
                38231: 27161,
                38232: 27703,
                38233: 28418,
                38234: 29922,
                38235: 31080,
                38236: 34920,
                38237: 35413,
                38238: 35961,
                38239: 24287,
                38240: 25551,
                38241: 30149,
                38242: 31186,
                38243: 33495,
                38244: 37672,
                38245: 37618,
                38246: 33948,
                38247: 34541,
                38248: 39981,
                38249: 21697,
                38250: 24428,
                38251: 25996,
                38252: 27996,
                38253: 28693,
                38254: 36007,
                38255: 36051,
                38256: 38971,
                38257: 25935,
                38258: 29942,
                38259: 19981,
                38260: 20184,
                38261: 22496,
                38262: 22827,
                38263: 23142,
                38264: 23500,
                38265: 20904,
                38266: 24067,
                38267: 24220,
                38268: 24598,
                38269: 25206,
                38270: 25975,
                38272: 26023,
                38273: 26222,
                38274: 28014,
                38275: 29238,
                38276: 31526,
                38277: 33104,
                38278: 33178,
                38279: 33433,
                38280: 35676,
                38281: 36e3,
                38282: 36070,
                38283: 36212,
                38284: 38428,
                38285: 38468,
                38286: 20398,
                38287: 25771,
                38288: 27494,
                38289: 33310,
                38290: 33889,
                38291: 34154,
                38292: 37096,
                38293: 23553,
                38294: 26963,
                38295: 39080,
                38296: 33914,
                38297: 34135,
                38298: 20239,
                38299: 21103,
                38300: 24489,
                38301: 24133,
                38302: 26381,
                38303: 31119,
                38304: 33145,
                38305: 35079,
                38306: 35206,
                38307: 28149,
                38308: 24343,
                38309: 25173,
                38310: 27832,
                38311: 20175,
                38312: 29289,
                38313: 39826,
                38314: 20998,
                38315: 21563,
                38316: 22132,
                38317: 22707,
                38318: 24996,
                38319: 25198,
                38320: 28954,
                38321: 22894,
                38322: 31881,
                38323: 31966,
                38324: 32027,
                38325: 38640,
                38326: 25991,
                38327: 32862,
                38328: 19993,
                38329: 20341,
                38330: 20853,
                38331: 22592,
                38332: 24163,
                38333: 24179,
                38334: 24330,
                38335: 26564,
                38336: 20006,
                38337: 34109,
                38338: 38281,
                38339: 38491,
                38340: 31859,
                38341: 38913,
                38342: 20731,
                38343: 22721,
                38344: 30294,
                38345: 30887,
                38346: 21029,
                38347: 30629,
                38348: 34065,
                38349: 31622,
                38350: 20559,
                38351: 22793,
                38352: 29255,
                38353: 31687,
                38354: 32232,
                38355: 36794,
                38356: 36820,
                38357: 36941,
                38358: 20415,
                38359: 21193,
                38360: 23081,
                38361: 24321,
                38362: 38829,
                38363: 20445,
                38364: 33303,
                38365: 37610,
                38366: 22275,
                38367: 25429,
                38368: 27497,
                38369: 29995,
                38370: 35036,
                38371: 36628,
                38372: 31298,
                38373: 21215,
                38374: 22675,
                38375: 24917,
                38376: 25098,
                38377: 26286,
                38378: 27597,
                38379: 31807,
                38380: 33769,
                38381: 20515,
                38382: 20472,
                38383: 21253,
                38384: 21574,
                38385: 22577,
                38386: 22857,
                38387: 23453,
                38388: 23792,
                38389: 23791,
                38390: 23849,
                38391: 24214,
                38392: 25265,
                38393: 25447,
                38394: 25918,
                38395: 26041,
                38396: 26379,
                38464: 27861,
                38465: 27873,
                38466: 28921,
                38467: 30770,
                38468: 32299,
                38469: 32990,
                38470: 33459,
                38471: 33804,
                38472: 34028,
                38473: 34562,
                38474: 35090,
                38475: 35370,
                38476: 35914,
                38477: 37030,
                38478: 37586,
                38479: 39165,
                38480: 40179,
                38481: 40300,
                38482: 20047,
                38483: 20129,
                38484: 20621,
                38485: 21078,
                38486: 22346,
                38487: 22952,
                38488: 24125,
                38489: 24536,
                38490: 24537,
                38491: 25151,
                38492: 26292,
                38493: 26395,
                38494: 26576,
                38495: 26834,
                38496: 20882,
                38497: 32033,
                38498: 32938,
                38499: 33192,
                38500: 35584,
                38501: 35980,
                38502: 36031,
                38503: 37502,
                38504: 38450,
                38505: 21536,
                38506: 38956,
                38507: 21271,
                38508: 20693,
                38509: 21340,
                38510: 22696,
                38511: 25778,
                38512: 26420,
                38513: 29287,
                38514: 30566,
                38515: 31302,
                38516: 37350,
                38517: 21187,
                38518: 27809,
                38519: 27526,
                38520: 22528,
                38521: 24140,
                38522: 22868,
                38523: 26412,
                38524: 32763,
                38525: 20961,
                38526: 30406,
                38528: 25705,
                38529: 30952,
                38530: 39764,
                38531: 40635,
                38532: 22475,
                38533: 22969,
                38534: 26151,
                38535: 26522,
                38536: 27598,
                38537: 21737,
                38538: 27097,
                38539: 24149,
                38540: 33180,
                38541: 26517,
                38542: 39850,
                38543: 26622,
                38544: 40018,
                38545: 26717,
                38546: 20134,
                38547: 20451,
                38548: 21448,
                38549: 25273,
                38550: 26411,
                38551: 27819,
                38552: 36804,
                38553: 20397,
                38554: 32365,
                38555: 40639,
                38556: 19975,
                38557: 24930,
                38558: 28288,
                38559: 28459,
                38560: 34067,
                38561: 21619,
                38562: 26410,
                38563: 39749,
                38564: 24051,
                38565: 31637,
                38566: 23724,
                38567: 23494,
                38568: 34588,
                38569: 28234,
                38570: 34001,
                38571: 31252,
                38572: 33032,
                38573: 22937,
                38574: 31885,
                38575: 27665,
                38576: 30496,
                38577: 21209,
                38578: 22818,
                38579: 28961,
                38580: 29279,
                38581: 30683,
                38582: 38695,
                38583: 40289,
                38584: 26891,
                38585: 23167,
                38586: 23064,
                38587: 20901,
                38588: 21517,
                38589: 21629,
                38590: 26126,
                38591: 30431,
                38592: 36855,
                38593: 37528,
                38594: 40180,
                38595: 23018,
                38596: 29277,
                38597: 28357,
                38598: 20813,
                38599: 26825,
                38600: 32191,
                38601: 32236,
                38602: 38754,
                38603: 40634,
                38604: 25720,
                38605: 27169,
                38606: 33538,
                38607: 22916,
                38608: 23391,
                38609: 27611,
                38610: 29467,
                38611: 30450,
                38612: 32178,
                38613: 32791,
                38614: 33945,
                38615: 20786,
                38616: 26408,
                38617: 40665,
                38618: 30446,
                38619: 26466,
                38620: 21247,
                38621: 39173,
                38622: 23588,
                38623: 25147,
                38624: 31870,
                38625: 36016,
                38626: 21839,
                38627: 24758,
                38628: 32011,
                38629: 38272,
                38630: 21249,
                38631: 20063,
                38632: 20918,
                38633: 22812,
                38634: 29242,
                38635: 32822,
                38636: 37326,
                38637: 24357,
                38638: 30690,
                38639: 21380,
                38640: 24441,
                38641: 32004,
                38642: 34220,
                38643: 35379,
                38644: 36493,
                38645: 38742,
                38646: 26611,
                38647: 34222,
                38648: 37971,
                38649: 24841,
                38650: 24840,
                38651: 27833,
                38652: 30290,
                38720: 35565,
                38721: 36664,
                38722: 21807,
                38723: 20305,
                38724: 20778,
                38725: 21191,
                38726: 21451,
                38727: 23461,
                38728: 24189,
                38729: 24736,
                38730: 24962,
                38731: 25558,
                38732: 26377,
                38733: 26586,
                38734: 28263,
                38735: 28044,
                38736: 29494,
                38737: 29495,
                38738: 30001,
                38739: 31056,
                38740: 35029,
                38741: 35480,
                38742: 36938,
                38743: 37009,
                38744: 37109,
                38745: 38596,
                38746: 34701,
                38747: 22805,
                38748: 20104,
                38749: 20313,
                38750: 19982,
                38751: 35465,
                38752: 36671,
                38753: 38928,
                38754: 20653,
                38755: 24188,
                38756: 22934,
                38757: 23481,
                38758: 24248,
                38759: 25562,
                38760: 25594,
                38761: 25793,
                38762: 26332,
                38763: 26954,
                38764: 27096,
                38765: 27915,
                38766: 28342,
                38767: 29076,
                38768: 29992,
                38769: 31407,
                38770: 32650,
                38771: 32768,
                38772: 33865,
                38773: 33993,
                38774: 35201,
                38775: 35617,
                38776: 36362,
                38777: 36965,
                38778: 38525,
                38779: 39178,
                38780: 24958,
                38781: 25233,
                38782: 27442,
                38784: 27779,
                38785: 28020,
                38786: 32716,
                38787: 32764,
                38788: 28096,
                38789: 32645,
                38790: 34746,
                38791: 35064,
                38792: 26469,
                38793: 33713,
                38794: 38972,
                38795: 38647,
                38796: 27931,
                38797: 32097,
                38798: 33853,
                38799: 37226,
                38800: 20081,
                38801: 21365,
                38802: 23888,
                38803: 27396,
                38804: 28651,
                38805: 34253,
                38806: 34349,
                38807: 35239,
                38808: 21033,
                38809: 21519,
                38810: 23653,
                38811: 26446,
                38812: 26792,
                38813: 29702,
                38814: 29827,
                38815: 30178,
                38816: 35023,
                38817: 35041,
                38818: 37324,
                38819: 38626,
                38820: 38520,
                38821: 24459,
                38822: 29575,
                38823: 31435,
                38824: 33870,
                38825: 25504,
                38826: 30053,
                38827: 21129,
                38828: 27969,
                38829: 28316,
                38830: 29705,
                38831: 30041,
                38832: 30827,
                38833: 31890,
                38834: 38534,
                38835: 31452,
                38836: 40845,
                38837: 20406,
                38838: 24942,
                38839: 26053,
                38840: 34396,
                38841: 20102,
                38842: 20142,
                38843: 20698,
                38844: 20001,
                38845: 20940,
                38846: 23534,
                38847: 26009,
                38848: 26753,
                38849: 28092,
                38850: 29471,
                38851: 30274,
                38852: 30637,
                38853: 31260,
                38854: 31975,
                38855: 33391,
                38856: 35538,
                38857: 36988,
                38858: 37327,
                38859: 38517,
                38860: 38936,
                38861: 21147,
                38862: 32209,
                38863: 20523,
                38864: 21400,
                38865: 26519,
                38866: 28107,
                38867: 29136,
                38868: 29747,
                38869: 33256,
                38870: 36650,
                38871: 38563,
                38872: 40023,
                38873: 40607,
                38874: 29792,
                38875: 22593,
                38876: 28057,
                38877: 32047,
                38878: 39006,
                38879: 20196,
                38880: 20278,
                38881: 20363,
                38882: 20919,
                38883: 21169,
                38884: 23994,
                38885: 24604,
                38886: 29618,
                38887: 31036,
                38888: 33491,
                38889: 37428,
                38890: 38583,
                38891: 38646,
                38892: 38666,
                38893: 40599,
                38894: 40802,
                38895: 26278,
                38896: 27508,
                38897: 21015,
                38898: 21155,
                38899: 28872,
                38900: 35010,
                38901: 24265,
                38902: 24651,
                38903: 24976,
                38904: 28451,
                38905: 29001,
                38906: 31806,
                38907: 32244,
                38908: 32879,
                38976: 34030,
                38977: 36899,
                38978: 37676,
                38979: 21570,
                38980: 39791,
                38981: 27347,
                38982: 28809,
                38983: 36034,
                38984: 36335,
                38985: 38706,
                38986: 21172,
                38987: 23105,
                38988: 24266,
                38989: 24324,
                38990: 26391,
                38991: 27004,
                38992: 27028,
                38993: 28010,
                38994: 28431,
                38995: 29282,
                38996: 29436,
                38997: 31725,
                38998: 32769,
                38999: 32894,
                39e3: 34635,
                39001: 37070,
                39002: 20845,
                39003: 40595,
                39004: 31108,
                39005: 32907,
                39006: 37682,
                39007: 35542,
                39008: 20525,
                39009: 21644,
                39010: 35441,
                39011: 27498,
                39012: 36036,
                39013: 33031,
                39014: 24785,
                39015: 26528,
                39016: 40434,
                39017: 20121,
                39018: 20120,
                39019: 39952,
                39020: 35435,
                39021: 34241,
                39022: 34152,
                39023: 26880,
                39024: 28286,
                39025: 30871,
                39026: 33109,
                39071: 24332,
                39072: 19984,
                39073: 19989,
                39074: 20010,
                39075: 20017,
                39076: 20022,
                39077: 20028,
                39078: 20031,
                39079: 20034,
                39080: 20054,
                39081: 20056,
                39082: 20098,
                39083: 20101,
                39084: 35947,
                39085: 20106,
                39086: 33298,
                39087: 24333,
                39088: 20110,
                39089: 20126,
                39090: 20127,
                39091: 20128,
                39092: 20130,
                39093: 20144,
                39094: 20147,
                39095: 20150,
                39096: 20174,
                39097: 20173,
                39098: 20164,
                39099: 20166,
                39100: 20162,
                39101: 20183,
                39102: 20190,
                39103: 20205,
                39104: 20191,
                39105: 20215,
                39106: 20233,
                39107: 20314,
                39108: 20272,
                39109: 20315,
                39110: 20317,
                39111: 20311,
                39112: 20295,
                39113: 20342,
                39114: 20360,
                39115: 20367,
                39116: 20376,
                39117: 20347,
                39118: 20329,
                39119: 20336,
                39120: 20369,
                39121: 20335,
                39122: 20358,
                39123: 20374,
                39124: 20760,
                39125: 20436,
                39126: 20447,
                39127: 20430,
                39128: 20440,
                39129: 20443,
                39130: 20433,
                39131: 20442,
                39132: 20432,
                39133: 20452,
                39134: 20453,
                39135: 20506,
                39136: 20520,
                39137: 20500,
                39138: 20522,
                39139: 20517,
                39140: 20485,
                39141: 20252,
                39142: 20470,
                39143: 20513,
                39144: 20521,
                39145: 20524,
                39146: 20478,
                39147: 20463,
                39148: 20497,
                39149: 20486,
                39150: 20547,
                39151: 20551,
                39152: 26371,
                39153: 20565,
                39154: 20560,
                39155: 20552,
                39156: 20570,
                39157: 20566,
                39158: 20588,
                39159: 20600,
                39160: 20608,
                39161: 20634,
                39162: 20613,
                39163: 20660,
                39164: 20658,
                39232: 20681,
                39233: 20682,
                39234: 20659,
                39235: 20674,
                39236: 20694,
                39237: 20702,
                39238: 20709,
                39239: 20717,
                39240: 20707,
                39241: 20718,
                39242: 20729,
                39243: 20725,
                39244: 20745,
                39245: 20737,
                39246: 20738,
                39247: 20758,
                39248: 20757,
                39249: 20756,
                39250: 20762,
                39251: 20769,
                39252: 20794,
                39253: 20791,
                39254: 20796,
                39255: 20795,
                39256: 20799,
                39257: 20800,
                39258: 20818,
                39259: 20812,
                39260: 20820,
                39261: 20834,
                39262: 31480,
                39263: 20841,
                39264: 20842,
                39265: 20846,
                39266: 20864,
                39267: 20866,
                39268: 22232,
                39269: 20876,
                39270: 20873,
                39271: 20879,
                39272: 20881,
                39273: 20883,
                39274: 20885,
                39275: 20886,
                39276: 20900,
                39277: 20902,
                39278: 20898,
                39279: 20905,
                39280: 20906,
                39281: 20907,
                39282: 20915,
                39283: 20913,
                39284: 20914,
                39285: 20912,
                39286: 20917,
                39287: 20925,
                39288: 20933,
                39289: 20937,
                39290: 20955,
                39291: 20960,
                39292: 34389,
                39293: 20969,
                39294: 20973,
                39296: 20976,
                39297: 20981,
                39298: 20990,
                39299: 20996,
                39300: 21003,
                39301: 21012,
                39302: 21006,
                39303: 21031,
                39304: 21034,
                39305: 21038,
                39306: 21043,
                39307: 21049,
                39308: 21071,
                39309: 21060,
                39310: 21067,
                39311: 21068,
                39312: 21086,
                39313: 21076,
                39314: 21098,
                39315: 21108,
                39316: 21097,
                39317: 21107,
                39318: 21119,
                39319: 21117,
                39320: 21133,
                39321: 21140,
                39322: 21138,
                39323: 21105,
                39324: 21128,
                39325: 21137,
                39326: 36776,
                39327: 36775,
                39328: 21164,
                39329: 21165,
                39330: 21180,
                39331: 21173,
                39332: 21185,
                39333: 21197,
                39334: 21207,
                39335: 21214,
                39336: 21219,
                39337: 21222,
                39338: 39149,
                39339: 21216,
                39340: 21235,
                39341: 21237,
                39342: 21240,
                39343: 21241,
                39344: 21254,
                39345: 21256,
                39346: 30008,
                39347: 21261,
                39348: 21264,
                39349: 21263,
                39350: 21269,
                39351: 21274,
                39352: 21283,
                39353: 21295,
                39354: 21297,
                39355: 21299,
                39356: 21304,
                39357: 21312,
                39358: 21318,
                39359: 21317,
                39360: 19991,
                39361: 21321,
                39362: 21325,
                39363: 20950,
                39364: 21342,
                39365: 21353,
                39366: 21358,
                39367: 22808,
                39368: 21371,
                39369: 21367,
                39370: 21378,
                39371: 21398,
                39372: 21408,
                39373: 21414,
                39374: 21413,
                39375: 21422,
                39376: 21424,
                39377: 21430,
                39378: 21443,
                39379: 31762,
                39380: 38617,
                39381: 21471,
                39382: 26364,
                39383: 29166,
                39384: 21486,
                39385: 21480,
                39386: 21485,
                39387: 21498,
                39388: 21505,
                39389: 21565,
                39390: 21568,
                39391: 21548,
                39392: 21549,
                39393: 21564,
                39394: 21550,
                39395: 21558,
                39396: 21545,
                39397: 21533,
                39398: 21582,
                39399: 21647,
                39400: 21621,
                39401: 21646,
                39402: 21599,
                39403: 21617,
                39404: 21623,
                39405: 21616,
                39406: 21650,
                39407: 21627,
                39408: 21632,
                39409: 21622,
                39410: 21636,
                39411: 21648,
                39412: 21638,
                39413: 21703,
                39414: 21666,
                39415: 21688,
                39416: 21669,
                39417: 21676,
                39418: 21700,
                39419: 21704,
                39420: 21672,
                39488: 21675,
                39489: 21698,
                39490: 21668,
                39491: 21694,
                39492: 21692,
                39493: 21720,
                39494: 21733,
                39495: 21734,
                39496: 21775,
                39497: 21780,
                39498: 21757,
                39499: 21742,
                39500: 21741,
                39501: 21754,
                39502: 21730,
                39503: 21817,
                39504: 21824,
                39505: 21859,
                39506: 21836,
                39507: 21806,
                39508: 21852,
                39509: 21829,
                39510: 21846,
                39511: 21847,
                39512: 21816,
                39513: 21811,
                39514: 21853,
                39515: 21913,
                39516: 21888,
                39517: 21679,
                39518: 21898,
                39519: 21919,
                39520: 21883,
                39521: 21886,
                39522: 21912,
                39523: 21918,
                39524: 21934,
                39525: 21884,
                39526: 21891,
                39527: 21929,
                39528: 21895,
                39529: 21928,
                39530: 21978,
                39531: 21957,
                39532: 21983,
                39533: 21956,
                39534: 21980,
                39535: 21988,
                39536: 21972,
                39537: 22036,
                39538: 22007,
                39539: 22038,
                39540: 22014,
                39541: 22013,
                39542: 22043,
                39543: 22009,
                39544: 22094,
                39545: 22096,
                39546: 29151,
                39547: 22068,
                39548: 22070,
                39549: 22066,
                39550: 22072,
                39552: 22123,
                39553: 22116,
                39554: 22063,
                39555: 22124,
                39556: 22122,
                39557: 22150,
                39558: 22144,
                39559: 22154,
                39560: 22176,
                39561: 22164,
                39562: 22159,
                39563: 22181,
                39564: 22190,
                39565: 22198,
                39566: 22196,
                39567: 22210,
                39568: 22204,
                39569: 22209,
                39570: 22211,
                39571: 22208,
                39572: 22216,
                39573: 22222,
                39574: 22225,
                39575: 22227,
                39576: 22231,
                39577: 22254,
                39578: 22265,
                39579: 22272,
                39580: 22271,
                39581: 22276,
                39582: 22281,
                39583: 22280,
                39584: 22283,
                39585: 22285,
                39586: 22291,
                39587: 22296,
                39588: 22294,
                39589: 21959,
                39590: 22300,
                39591: 22310,
                39592: 22327,
                39593: 22328,
                39594: 22350,
                39595: 22331,
                39596: 22336,
                39597: 22351,
                39598: 22377,
                39599: 22464,
                39600: 22408,
                39601: 22369,
                39602: 22399,
                39603: 22409,
                39604: 22419,
                39605: 22432,
                39606: 22451,
                39607: 22436,
                39608: 22442,
                39609: 22448,
                39610: 22467,
                39611: 22470,
                39612: 22484,
                39613: 22482,
                39614: 22483,
                39615: 22538,
                39616: 22486,
                39617: 22499,
                39618: 22539,
                39619: 22553,
                39620: 22557,
                39621: 22642,
                39622: 22561,
                39623: 22626,
                39624: 22603,
                39625: 22640,
                39626: 27584,
                39627: 22610,
                39628: 22589,
                39629: 22649,
                39630: 22661,
                39631: 22713,
                39632: 22687,
                39633: 22699,
                39634: 22714,
                39635: 22750,
                39636: 22715,
                39637: 22712,
                39638: 22702,
                39639: 22725,
                39640: 22739,
                39641: 22737,
                39642: 22743,
                39643: 22745,
                39644: 22744,
                39645: 22757,
                39646: 22748,
                39647: 22756,
                39648: 22751,
                39649: 22767,
                39650: 22778,
                39651: 22777,
                39652: 22779,
                39653: 22780,
                39654: 22781,
                39655: 22786,
                39656: 22794,
                39657: 22800,
                39658: 22811,
                39659: 26790,
                39660: 22821,
                39661: 22828,
                39662: 22829,
                39663: 22834,
                39664: 22840,
                39665: 22846,
                39666: 31442,
                39667: 22869,
                39668: 22864,
                39669: 22862,
                39670: 22874,
                39671: 22872,
                39672: 22882,
                39673: 22880,
                39674: 22887,
                39675: 22892,
                39676: 22889,
                39744: 22904,
                39745: 22913,
                39746: 22941,
                39747: 20318,
                39748: 20395,
                39749: 22947,
                39750: 22962,
                39751: 22982,
                39752: 23016,
                39753: 23004,
                39754: 22925,
                39755: 23001,
                39756: 23002,
                39757: 23077,
                39758: 23071,
                39759: 23057,
                39760: 23068,
                39761: 23049,
                39762: 23066,
                39763: 23104,
                39764: 23148,
                39765: 23113,
                39766: 23093,
                39767: 23094,
                39768: 23138,
                39769: 23146,
                39770: 23194,
                39771: 23228,
                39772: 23230,
                39773: 23243,
                39774: 23234,
                39775: 23229,
                39776: 23267,
                39777: 23255,
                39778: 23270,
                39779: 23273,
                39780: 23254,
                39781: 23290,
                39782: 23291,
                39783: 23308,
                39784: 23307,
                39785: 23318,
                39786: 23346,
                39787: 23248,
                39788: 23338,
                39789: 23350,
                39790: 23358,
                39791: 23363,
                39792: 23365,
                39793: 23360,
                39794: 23377,
                39795: 23381,
                39796: 23386,
                39797: 23387,
                39798: 23397,
                39799: 23401,
                39800: 23408,
                39801: 23411,
                39802: 23413,
                39803: 23416,
                39804: 25992,
                39805: 23418,
                39806: 23424,
                39808: 23427,
                39809: 23462,
                39810: 23480,
                39811: 23491,
                39812: 23495,
                39813: 23497,
                39814: 23508,
                39815: 23504,
                39816: 23524,
                39817: 23526,
                39818: 23522,
                39819: 23518,
                39820: 23525,
                39821: 23531,
                39822: 23536,
                39823: 23542,
                39824: 23539,
                39825: 23557,
                39826: 23559,
                39827: 23560,
                39828: 23565,
                39829: 23571,
                39830: 23584,
                39831: 23586,
                39832: 23592,
                39833: 23608,
                39834: 23609,
                39835: 23617,
                39836: 23622,
                39837: 23630,
                39838: 23635,
                39839: 23632,
                39840: 23631,
                39841: 23409,
                39842: 23660,
                39843: 23662,
                39844: 20066,
                39845: 23670,
                39846: 23673,
                39847: 23692,
                39848: 23697,
                39849: 23700,
                39850: 22939,
                39851: 23723,
                39852: 23739,
                39853: 23734,
                39854: 23740,
                39855: 23735,
                39856: 23749,
                39857: 23742,
                39858: 23751,
                39859: 23769,
                39860: 23785,
                39861: 23805,
                39862: 23802,
                39863: 23789,
                39864: 23948,
                39865: 23786,
                39866: 23819,
                39867: 23829,
                39868: 23831,
                39869: 23900,
                39870: 23839,
                39871: 23835,
                39872: 23825,
                39873: 23828,
                39874: 23842,
                39875: 23834,
                39876: 23833,
                39877: 23832,
                39878: 23884,
                39879: 23890,
                39880: 23886,
                39881: 23883,
                39882: 23916,
                39883: 23923,
                39884: 23926,
                39885: 23943,
                39886: 23940,
                39887: 23938,
                39888: 23970,
                39889: 23965,
                39890: 23980,
                39891: 23982,
                39892: 23997,
                39893: 23952,
                39894: 23991,
                39895: 23996,
                39896: 24009,
                39897: 24013,
                39898: 24019,
                39899: 24018,
                39900: 24022,
                39901: 24027,
                39902: 24043,
                39903: 24050,
                39904: 24053,
                39905: 24075,
                39906: 24090,
                39907: 24089,
                39908: 24081,
                39909: 24091,
                39910: 24118,
                39911: 24119,
                39912: 24132,
                39913: 24131,
                39914: 24128,
                39915: 24142,
                39916: 24151,
                39917: 24148,
                39918: 24159,
                39919: 24162,
                39920: 24164,
                39921: 24135,
                39922: 24181,
                39923: 24182,
                39924: 24186,
                39925: 40636,
                39926: 24191,
                39927: 24224,
                39928: 24257,
                39929: 24258,
                39930: 24264,
                39931: 24272,
                39932: 24271,
                4e4: 24278,
                40001: 24291,
                40002: 24285,
                40003: 24282,
                40004: 24283,
                40005: 24290,
                40006: 24289,
                40007: 24296,
                40008: 24297,
                40009: 24300,
                40010: 24305,
                40011: 24307,
                40012: 24304,
                40013: 24308,
                40014: 24312,
                40015: 24318,
                40016: 24323,
                40017: 24329,
                40018: 24413,
                40019: 24412,
                40020: 24331,
                40021: 24337,
                40022: 24342,
                40023: 24361,
                40024: 24365,
                40025: 24376,
                40026: 24385,
                40027: 24392,
                40028: 24396,
                40029: 24398,
                40030: 24367,
                40031: 24401,
                40032: 24406,
                40033: 24407,
                40034: 24409,
                40035: 24417,
                40036: 24429,
                40037: 24435,
                40038: 24439,
                40039: 24451,
                40040: 24450,
                40041: 24447,
                40042: 24458,
                40043: 24456,
                40044: 24465,
                40045: 24455,
                40046: 24478,
                40047: 24473,
                40048: 24472,
                40049: 24480,
                40050: 24488,
                40051: 24493,
                40052: 24508,
                40053: 24534,
                40054: 24571,
                40055: 24548,
                40056: 24568,
                40057: 24561,
                40058: 24541,
                40059: 24755,
                40060: 24575,
                40061: 24609,
                40062: 24672,
                40064: 24601,
                40065: 24592,
                40066: 24617,
                40067: 24590,
                40068: 24625,
                40069: 24603,
                40070: 24597,
                40071: 24619,
                40072: 24614,
                40073: 24591,
                40074: 24634,
                40075: 24666,
                40076: 24641,
                40077: 24682,
                40078: 24695,
                40079: 24671,
                40080: 24650,
                40081: 24646,
                40082: 24653,
                40083: 24675,
                40084: 24643,
                40085: 24676,
                40086: 24642,
                40087: 24684,
                40088: 24683,
                40089: 24665,
                40090: 24705,
                40091: 24717,
                40092: 24807,
                40093: 24707,
                40094: 24730,
                40095: 24708,
                40096: 24731,
                40097: 24726,
                40098: 24727,
                40099: 24722,
                40100: 24743,
                40101: 24715,
                40102: 24801,
                40103: 24760,
                40104: 24800,
                40105: 24787,
                40106: 24756,
                40107: 24560,
                40108: 24765,
                40109: 24774,
                40110: 24757,
                40111: 24792,
                40112: 24909,
                40113: 24853,
                40114: 24838,
                40115: 24822,
                40116: 24823,
                40117: 24832,
                40118: 24820,
                40119: 24826,
                40120: 24835,
                40121: 24865,
                40122: 24827,
                40123: 24817,
                40124: 24845,
                40125: 24846,
                40126: 24903,
                40127: 24894,
                40128: 24872,
                40129: 24871,
                40130: 24906,
                40131: 24895,
                40132: 24892,
                40133: 24876,
                40134: 24884,
                40135: 24893,
                40136: 24898,
                40137: 24900,
                40138: 24947,
                40139: 24951,
                40140: 24920,
                40141: 24921,
                40142: 24922,
                40143: 24939,
                40144: 24948,
                40145: 24943,
                40146: 24933,
                40147: 24945,
                40148: 24927,
                40149: 24925,
                40150: 24915,
                40151: 24949,
                40152: 24985,
                40153: 24982,
                40154: 24967,
                40155: 25004,
                40156: 24980,
                40157: 24986,
                40158: 24970,
                40159: 24977,
                40160: 25003,
                40161: 25006,
                40162: 25036,
                40163: 25034,
                40164: 25033,
                40165: 25079,
                40166: 25032,
                40167: 25027,
                40168: 25030,
                40169: 25018,
                40170: 25035,
                40171: 32633,
                40172: 25037,
                40173: 25062,
                40174: 25059,
                40175: 25078,
                40176: 25082,
                40177: 25076,
                40178: 25087,
                40179: 25085,
                40180: 25084,
                40181: 25086,
                40182: 25088,
                40183: 25096,
                40184: 25097,
                40185: 25101,
                40186: 25100,
                40187: 25108,
                40188: 25115,
                40256: 25118,
                40257: 25121,
                40258: 25130,
                40259: 25134,
                40260: 25136,
                40261: 25138,
                40262: 25139,
                40263: 25153,
                40264: 25166,
                40265: 25182,
                40266: 25187,
                40267: 25179,
                40268: 25184,
                40269: 25192,
                40270: 25212,
                40271: 25218,
                40272: 25225,
                40273: 25214,
                40274: 25234,
                40275: 25235,
                40276: 25238,
                40277: 25300,
                40278: 25219,
                40279: 25236,
                40280: 25303,
                40281: 25297,
                40282: 25275,
                40283: 25295,
                40284: 25343,
                40285: 25286,
                40286: 25812,
                40287: 25288,
                40288: 25308,
                40289: 25292,
                40290: 25290,
                40291: 25282,
                40292: 25287,
                40293: 25243,
                40294: 25289,
                40295: 25356,
                40296: 25326,
                40297: 25329,
                40298: 25383,
                40299: 25346,
                40300: 25352,
                40301: 25327,
                40302: 25333,
                40303: 25424,
                40304: 25406,
                40305: 25421,
                40306: 25628,
                40307: 25423,
                40308: 25494,
                40309: 25486,
                40310: 25472,
                40311: 25515,
                40312: 25462,
                40313: 25507,
                40314: 25487,
                40315: 25481,
                40316: 25503,
                40317: 25525,
                40318: 25451,
                40320: 25449,
                40321: 25534,
                40322: 25577,
                40323: 25536,
                40324: 25542,
                40325: 25571,
                40326: 25545,
                40327: 25554,
                40328: 25590,
                40329: 25540,
                40330: 25622,
                40331: 25652,
                40332: 25606,
                40333: 25619,
                40334: 25638,
                40335: 25654,
                40336: 25885,
                40337: 25623,
                40338: 25640,
                40339: 25615,
                40340: 25703,
                40341: 25711,
                40342: 25718,
                40343: 25678,
                40344: 25898,
                40345: 25749,
                40346: 25747,
                40347: 25765,
                40348: 25769,
                40349: 25736,
                40350: 25788,
                40351: 25818,
                40352: 25810,
                40353: 25797,
                40354: 25799,
                40355: 25787,
                40356: 25816,
                40357: 25794,
                40358: 25841,
                40359: 25831,
                40360: 33289,
                40361: 25824,
                40362: 25825,
                40363: 25260,
                40364: 25827,
                40365: 25839,
                40366: 25900,
                40367: 25846,
                40368: 25844,
                40369: 25842,
                40370: 25850,
                40371: 25856,
                40372: 25853,
                40373: 25880,
                40374: 25884,
                40375: 25861,
                40376: 25892,
                40377: 25891,
                40378: 25899,
                40379: 25908,
                40380: 25909,
                40381: 25911,
                40382: 25910,
                40383: 25912,
                40384: 30027,
                40385: 25928,
                40386: 25942,
                40387: 25941,
                40388: 25933,
                40389: 25944,
                40390: 25950,
                40391: 25949,
                40392: 25970,
                40393: 25976,
                40394: 25986,
                40395: 25987,
                40396: 35722,
                40397: 26011,
                40398: 26015,
                40399: 26027,
                40400: 26039,
                40401: 26051,
                40402: 26054,
                40403: 26049,
                40404: 26052,
                40405: 26060,
                40406: 26066,
                40407: 26075,
                40408: 26073,
                40409: 26080,
                40410: 26081,
                40411: 26097,
                40412: 26482,
                40413: 26122,
                40414: 26115,
                40415: 26107,
                40416: 26483,
                40417: 26165,
                40418: 26166,
                40419: 26164,
                40420: 26140,
                40421: 26191,
                40422: 26180,
                40423: 26185,
                40424: 26177,
                40425: 26206,
                40426: 26205,
                40427: 26212,
                40428: 26215,
                40429: 26216,
                40430: 26207,
                40431: 26210,
                40432: 26224,
                40433: 26243,
                40434: 26248,
                40435: 26254,
                40436: 26249,
                40437: 26244,
                40438: 26264,
                40439: 26269,
                40440: 26305,
                40441: 26297,
                40442: 26313,
                40443: 26302,
                40444: 26300,
                40512: 26308,
                40513: 26296,
                40514: 26326,
                40515: 26330,
                40516: 26336,
                40517: 26175,
                40518: 26342,
                40519: 26345,
                40520: 26352,
                40521: 26357,
                40522: 26359,
                40523: 26383,
                40524: 26390,
                40525: 26398,
                40526: 26406,
                40527: 26407,
                40528: 38712,
                40529: 26414,
                40530: 26431,
                40531: 26422,
                40532: 26433,
                40533: 26424,
                40534: 26423,
                40535: 26438,
                40536: 26462,
                40537: 26464,
                40538: 26457,
                40539: 26467,
                40540: 26468,
                40541: 26505,
                40542: 26480,
                40543: 26537,
                40544: 26492,
                40545: 26474,
                40546: 26508,
                40547: 26507,
                40548: 26534,
                40549: 26529,
                40550: 26501,
                40551: 26551,
                40552: 26607,
                40553: 26548,
                40554: 26604,
                40555: 26547,
                40556: 26601,
                40557: 26552,
                40558: 26596,
                40559: 26590,
                40560: 26589,
                40561: 26594,
                40562: 26606,
                40563: 26553,
                40564: 26574,
                40565: 26566,
                40566: 26599,
                40567: 27292,
                40568: 26654,
                40569: 26694,
                40570: 26665,
                40571: 26688,
                40572: 26701,
                40573: 26674,
                40574: 26702,
                40576: 26803,
                40577: 26667,
                40578: 26713,
                40579: 26723,
                40580: 26743,
                40581: 26751,
                40582: 26783,
                40583: 26767,
                40584: 26797,
                40585: 26772,
                40586: 26781,
                40587: 26779,
                40588: 26755,
                40589: 27310,
                40590: 26809,
                40591: 26740,
                40592: 26805,
                40593: 26784,
                40594: 26810,
                40595: 26895,
                40596: 26765,
                40597: 26750,
                40598: 26881,
                40599: 26826,
                40600: 26888,
                40601: 26840,
                40602: 26914,
                40603: 26918,
                40604: 26849,
                40605: 26892,
                40606: 26829,
                40607: 26836,
                40608: 26855,
                40609: 26837,
                40610: 26934,
                40611: 26898,
                40612: 26884,
                40613: 26839,
                40614: 26851,
                40615: 26917,
                40616: 26873,
                40617: 26848,
                40618: 26863,
                40619: 26920,
                40620: 26922,
                40621: 26906,
                40622: 26915,
                40623: 26913,
                40624: 26822,
                40625: 27001,
                40626: 26999,
                40627: 26972,
                40628: 27e3,
                40629: 26987,
                40630: 26964,
                40631: 27006,
                40632: 26990,
                40633: 26937,
                40634: 26996,
                40635: 26941,
                40636: 26969,
                40637: 26928,
                40638: 26977,
                40639: 26974,
                40640: 26973,
                40641: 27009,
                40642: 26986,
                40643: 27058,
                40644: 27054,
                40645: 27088,
                40646: 27071,
                40647: 27073,
                40648: 27091,
                40649: 27070,
                40650: 27086,
                40651: 23528,
                40652: 27082,
                40653: 27101,
                40654: 27067,
                40655: 27075,
                40656: 27047,
                40657: 27182,
                40658: 27025,
                40659: 27040,
                40660: 27036,
                40661: 27029,
                40662: 27060,
                40663: 27102,
                40664: 27112,
                40665: 27138,
                40666: 27163,
                40667: 27135,
                40668: 27402,
                40669: 27129,
                40670: 27122,
                40671: 27111,
                40672: 27141,
                40673: 27057,
                40674: 27166,
                40675: 27117,
                40676: 27156,
                40677: 27115,
                40678: 27146,
                40679: 27154,
                40680: 27329,
                40681: 27171,
                40682: 27155,
                40683: 27204,
                40684: 27148,
                40685: 27250,
                40686: 27190,
                40687: 27256,
                40688: 27207,
                40689: 27234,
                40690: 27225,
                40691: 27238,
                40692: 27208,
                40693: 27192,
                40694: 27170,
                40695: 27280,
                40696: 27277,
                40697: 27296,
                40698: 27268,
                40699: 27298,
                40700: 27299,
                40768: 27287,
                40769: 34327,
                40770: 27323,
                40771: 27331,
                40772: 27330,
                40773: 27320,
                40774: 27315,
                40775: 27308,
                40776: 27358,
                40777: 27345,
                40778: 27359,
                40779: 27306,
                40780: 27354,
                40781: 27370,
                40782: 27387,
                40783: 27397,
                40784: 34326,
                40785: 27386,
                40786: 27410,
                40787: 27414,
                40788: 39729,
                40789: 27423,
                40790: 27448,
                40791: 27447,
                40792: 30428,
                40793: 27449,
                40794: 39150,
                40795: 27463,
                40796: 27459,
                40797: 27465,
                40798: 27472,
                40799: 27481,
                40800: 27476,
                40801: 27483,
                40802: 27487,
                40803: 27489,
                40804: 27512,
                40805: 27513,
                40806: 27519,
                40807: 27520,
                40808: 27524,
                40809: 27523,
                40810: 27533,
                40811: 27544,
                40812: 27541,
                40813: 27550,
                40814: 27556,
                40815: 27562,
                40816: 27563,
                40817: 27567,
                40818: 27570,
                40819: 27569,
                40820: 27571,
                40821: 27575,
                40822: 27580,
                40823: 27590,
                40824: 27595,
                40825: 27603,
                40826: 27615,
                40827: 27628,
                40828: 27627,
                40829: 27635,
                40830: 27631,
                40832: 40638,
                40833: 27656,
                40834: 27667,
                40835: 27668,
                40836: 27675,
                40837: 27684,
                40838: 27683,
                40839: 27742,
                40840: 27733,
                40841: 27746,
                40842: 27754,
                40843: 27778,
                40844: 27789,
                40845: 27802,
                40846: 27777,
                40847: 27803,
                40848: 27774,
                40849: 27752,
                40850: 27763,
                40851: 27794,
                40852: 27792,
                40853: 27844,
                40854: 27889,
                40855: 27859,
                40856: 27837,
                40857: 27863,
                40858: 27845,
                40859: 27869,
                40860: 27822,
                40861: 27825,
                40862: 27838,
                40863: 27834,
                40864: 27867,
                40865: 27887,
                40866: 27865,
                40867: 27882,
                40868: 27935,
                40869: 34893,
                40870: 27958,
                40871: 27947,
                40872: 27965,
                40873: 27960,
                40874: 27929,
                40875: 27957,
                40876: 27955,
                40877: 27922,
                40878: 27916,
                40879: 28003,
                40880: 28051,
                40881: 28004,
                40882: 27994,
                40883: 28025,
                40884: 27993,
                40885: 28046,
                40886: 28053,
                40887: 28644,
                40888: 28037,
                40889: 28153,
                40890: 28181,
                40891: 28170,
                40892: 28085,
                40893: 28103,
                40894: 28134,
                40895: 28088,
                40896: 28102,
                40897: 28140,
                40898: 28126,
                40899: 28108,
                40900: 28136,
                40901: 28114,
                40902: 28101,
                40903: 28154,
                40904: 28121,
                40905: 28132,
                40906: 28117,
                40907: 28138,
                40908: 28142,
                40909: 28205,
                40910: 28270,
                40911: 28206,
                40912: 28185,
                40913: 28274,
                40914: 28255,
                40915: 28222,
                40916: 28195,
                40917: 28267,
                40918: 28203,
                40919: 28278,
                40920: 28237,
                40921: 28191,
                40922: 28227,
                40923: 28218,
                40924: 28238,
                40925: 28196,
                40926: 28415,
                40927: 28189,
                40928: 28216,
                40929: 28290,
                40930: 28330,
                40931: 28312,
                40932: 28361,
                40933: 28343,
                40934: 28371,
                40935: 28349,
                40936: 28335,
                40937: 28356,
                40938: 28338,
                40939: 28372,
                40940: 28373,
                40941: 28303,
                40942: 28325,
                40943: 28354,
                40944: 28319,
                40945: 28481,
                40946: 28433,
                40947: 28748,
                40948: 28396,
                40949: 28408,
                40950: 28414,
                40951: 28479,
                40952: 28402,
                40953: 28465,
                40954: 28399,
                40955: 28466,
                40956: 28364,
                161: 65377,
                162: 65378,
                163: 65379,
                164: 65380,
                165: 65381,
                166: 65382,
                167: 65383,
                168: 65384,
                169: 65385,
                170: 65386,
                171: 65387,
                172: 65388,
                173: 65389,
                174: 65390,
                175: 65391,
                176: 65392,
                177: 65393,
                178: 65394,
                179: 65395,
                180: 65396,
                181: 65397,
                182: 65398,
                183: 65399,
                184: 65400,
                185: 65401,
                186: 65402,
                187: 65403,
                188: 65404,
                189: 65405,
                190: 65406,
                191: 65407,
                192: 65408,
                193: 65409,
                194: 65410,
                195: 65411,
                196: 65412,
                197: 65413,
                198: 65414,
                199: 65415,
                200: 65416,
                201: 65417,
                202: 65418,
                203: 65419,
                204: 65420,
                205: 65421,
                206: 65422,
                207: 65423,
                208: 65424,
                209: 65425,
                210: 65426,
                211: 65427,
                212: 65428,
                213: 65429,
                214: 65430,
                215: 65431,
                216: 65432,
                217: 65433,
                218: 65434,
                219: 65435,
                220: 65436,
                221: 65437,
                222: 65438,
                223: 65439,
                57408: 28478,
                57409: 28435,
                57410: 28407,
                57411: 28550,
                57412: 28538,
                57413: 28536,
                57414: 28545,
                57415: 28544,
                57416: 28527,
                57417: 28507,
                57418: 28659,
                57419: 28525,
                57420: 28546,
                57421: 28540,
                57422: 28504,
                57423: 28558,
                57424: 28561,
                57425: 28610,
                57426: 28518,
                57427: 28595,
                57428: 28579,
                57429: 28577,
                57430: 28580,
                57431: 28601,
                57432: 28614,
                57433: 28586,
                57434: 28639,
                57435: 28629,
                57436: 28652,
                57437: 28628,
                57438: 28632,
                57439: 28657,
                57440: 28654,
                57441: 28635,
                57442: 28681,
                57443: 28683,
                57444: 28666,
                57445: 28689,
                57446: 28673,
                57447: 28687,
                57448: 28670,
                57449: 28699,
                57450: 28698,
                57451: 28532,
                57452: 28701,
                57453: 28696,
                57454: 28703,
                57455: 28720,
                57456: 28734,
                57457: 28722,
                57458: 28753,
                57459: 28771,
                57460: 28825,
                57461: 28818,
                57462: 28847,
                57463: 28913,
                57464: 28844,
                57465: 28856,
                57466: 28851,
                57467: 28846,
                57468: 28895,
                57469: 28875,
                57470: 28893,
                57472: 28889,
                57473: 28937,
                57474: 28925,
                57475: 28956,
                57476: 28953,
                57477: 29029,
                57478: 29013,
                57479: 29064,
                57480: 29030,
                57481: 29026,
                57482: 29004,
                57483: 29014,
                57484: 29036,
                57485: 29071,
                57486: 29179,
                57487: 29060,
                57488: 29077,
                57489: 29096,
                57490: 29100,
                57491: 29143,
                57492: 29113,
                57493: 29118,
                57494: 29138,
                57495: 29129,
                57496: 29140,
                57497: 29134,
                57498: 29152,
                57499: 29164,
                57500: 29159,
                57501: 29173,
                57502: 29180,
                57503: 29177,
                57504: 29183,
                57505: 29197,
                57506: 29200,
                57507: 29211,
                57508: 29224,
                57509: 29229,
                57510: 29228,
                57511: 29232,
                57512: 29234,
                57513: 29243,
                57514: 29244,
                57515: 29247,
                57516: 29248,
                57517: 29254,
                57518: 29259,
                57519: 29272,
                57520: 29300,
                57521: 29310,
                57522: 29314,
                57523: 29313,
                57524: 29319,
                57525: 29330,
                57526: 29334,
                57527: 29346,
                57528: 29351,
                57529: 29369,
                57530: 29362,
                57531: 29379,
                57532: 29382,
                57533: 29380,
                57534: 29390,
                57535: 29394,
                57536: 29410,
                57537: 29408,
                57538: 29409,
                57539: 29433,
                57540: 29431,
                57541: 20495,
                57542: 29463,
                57543: 29450,
                57544: 29468,
                57545: 29462,
                57546: 29469,
                57547: 29492,
                57548: 29487,
                57549: 29481,
                57550: 29477,
                57551: 29502,
                57552: 29518,
                57553: 29519,
                57554: 40664,
                57555: 29527,
                57556: 29546,
                57557: 29544,
                57558: 29552,
                57559: 29560,
                57560: 29557,
                57561: 29563,
                57562: 29562,
                57563: 29640,
                57564: 29619,
                57565: 29646,
                57566: 29627,
                57567: 29632,
                57568: 29669,
                57569: 29678,
                57570: 29662,
                57571: 29858,
                57572: 29701,
                57573: 29807,
                57574: 29733,
                57575: 29688,
                57576: 29746,
                57577: 29754,
                57578: 29781,
                57579: 29759,
                57580: 29791,
                57581: 29785,
                57582: 29761,
                57583: 29788,
                57584: 29801,
                57585: 29808,
                57586: 29795,
                57587: 29802,
                57588: 29814,
                57589: 29822,
                57590: 29835,
                57591: 29854,
                57592: 29863,
                57593: 29898,
                57594: 29903,
                57595: 29908,
                57596: 29681,
                57664: 29920,
                57665: 29923,
                57666: 29927,
                57667: 29929,
                57668: 29934,
                57669: 29938,
                57670: 29936,
                57671: 29937,
                57672: 29944,
                57673: 29943,
                57674: 29956,
                57675: 29955,
                57676: 29957,
                57677: 29964,
                57678: 29966,
                57679: 29965,
                57680: 29973,
                57681: 29971,
                57682: 29982,
                57683: 29990,
                57684: 29996,
                57685: 30012,
                57686: 30020,
                57687: 30029,
                57688: 30026,
                57689: 30025,
                57690: 30043,
                57691: 30022,
                57692: 30042,
                57693: 30057,
                57694: 30052,
                57695: 30055,
                57696: 30059,
                57697: 30061,
                57698: 30072,
                57699: 30070,
                57700: 30086,
                57701: 30087,
                57702: 30068,
                57703: 30090,
                57704: 30089,
                57705: 30082,
                57706: 30100,
                57707: 30106,
                57708: 30109,
                57709: 30117,
                57710: 30115,
                57711: 30146,
                57712: 30131,
                57713: 30147,
                57714: 30133,
                57715: 30141,
                57716: 30136,
                57717: 30140,
                57718: 30129,
                57719: 30157,
                57720: 30154,
                57721: 30162,
                57722: 30169,
                57723: 30179,
                57724: 30174,
                57725: 30206,
                57726: 30207,
                57728: 30204,
                57729: 30209,
                57730: 30192,
                57731: 30202,
                57732: 30194,
                57733: 30195,
                57734: 30219,
                57735: 30221,
                57736: 30217,
                57737: 30239,
                57738: 30247,
                57739: 30240,
                57740: 30241,
                57741: 30242,
                57742: 30244,
                57743: 30260,
                57744: 30256,
                57745: 30267,
                57746: 30279,
                57747: 30280,
                57748: 30278,
                57749: 30300,
                57750: 30296,
                57751: 30305,
                57752: 30306,
                57753: 30312,
                57754: 30313,
                57755: 30314,
                57756: 30311,
                57757: 30316,
                57758: 30320,
                57759: 30322,
                57760: 30326,
                57761: 30328,
                57762: 30332,
                57763: 30336,
                57764: 30339,
                57765: 30344,
                57766: 30347,
                57767: 30350,
                57768: 30358,
                57769: 30355,
                57770: 30361,
                57771: 30362,
                57772: 30384,
                57773: 30388,
                57774: 30392,
                57775: 30393,
                57776: 30394,
                57777: 30402,
                57778: 30413,
                57779: 30422,
                57780: 30418,
                57781: 30430,
                57782: 30433,
                57783: 30437,
                57784: 30439,
                57785: 30442,
                57786: 34351,
                57787: 30459,
                57788: 30472,
                57789: 30471,
                57790: 30468,
                57791: 30505,
                57792: 30500,
                57793: 30494,
                57794: 30501,
                57795: 30502,
                57796: 30491,
                57797: 30519,
                57798: 30520,
                57799: 30535,
                57800: 30554,
                57801: 30568,
                57802: 30571,
                57803: 30555,
                57804: 30565,
                57805: 30591,
                57806: 30590,
                57807: 30585,
                57808: 30606,
                57809: 30603,
                57810: 30609,
                57811: 30624,
                57812: 30622,
                57813: 30640,
                57814: 30646,
                57815: 30649,
                57816: 30655,
                57817: 30652,
                57818: 30653,
                57819: 30651,
                57820: 30663,
                57821: 30669,
                57822: 30679,
                57823: 30682,
                57824: 30684,
                57825: 30691,
                57826: 30702,
                57827: 30716,
                57828: 30732,
                57829: 30738,
                57830: 31014,
                57831: 30752,
                57832: 31018,
                57833: 30789,
                57834: 30862,
                57835: 30836,
                57836: 30854,
                57837: 30844,
                57838: 30874,
                57839: 30860,
                57840: 30883,
                57841: 30901,
                57842: 30890,
                57843: 30895,
                57844: 30929,
                57845: 30918,
                57846: 30923,
                57847: 30932,
                57848: 30910,
                57849: 30908,
                57850: 30917,
                57851: 30922,
                57852: 30956,
                57920: 30951,
                57921: 30938,
                57922: 30973,
                57923: 30964,
                57924: 30983,
                57925: 30994,
                57926: 30993,
                57927: 31001,
                57928: 31020,
                57929: 31019,
                57930: 31040,
                57931: 31072,
                57932: 31063,
                57933: 31071,
                57934: 31066,
                57935: 31061,
                57936: 31059,
                57937: 31098,
                57938: 31103,
                57939: 31114,
                57940: 31133,
                57941: 31143,
                57942: 40779,
                57943: 31146,
                57944: 31150,
                57945: 31155,
                57946: 31161,
                57947: 31162,
                57948: 31177,
                57949: 31189,
                57950: 31207,
                57951: 31212,
                57952: 31201,
                57953: 31203,
                57954: 31240,
                57955: 31245,
                57956: 31256,
                57957: 31257,
                57958: 31264,
                57959: 31263,
                57960: 31104,
                57961: 31281,
                57962: 31291,
                57963: 31294,
                57964: 31287,
                57965: 31299,
                57966: 31319,
                57967: 31305,
                57968: 31329,
                57969: 31330,
                57970: 31337,
                57971: 40861,
                57972: 31344,
                57973: 31353,
                57974: 31357,
                57975: 31368,
                57976: 31383,
                57977: 31381,
                57978: 31384,
                57979: 31382,
                57980: 31401,
                57981: 31432,
                57982: 31408,
                57984: 31414,
                57985: 31429,
                57986: 31428,
                57987: 31423,
                57988: 36995,
                57989: 31431,
                57990: 31434,
                57991: 31437,
                57992: 31439,
                57993: 31445,
                57994: 31443,
                57995: 31449,
                57996: 31450,
                57997: 31453,
                57998: 31457,
                57999: 31458,
                58e3: 31462,
                58001: 31469,
                58002: 31472,
                58003: 31490,
                58004: 31503,
                58005: 31498,
                58006: 31494,
                58007: 31539,
                58008: 31512,
                58009: 31513,
                58010: 31518,
                58011: 31541,
                58012: 31528,
                58013: 31542,
                58014: 31568,
                58015: 31610,
                58016: 31492,
                58017: 31565,
                58018: 31499,
                58019: 31564,
                58020: 31557,
                58021: 31605,
                58022: 31589,
                58023: 31604,
                58024: 31591,
                58025: 31600,
                58026: 31601,
                58027: 31596,
                58028: 31598,
                58029: 31645,
                58030: 31640,
                58031: 31647,
                58032: 31629,
                58033: 31644,
                58034: 31642,
                58035: 31627,
                58036: 31634,
                58037: 31631,
                58038: 31581,
                58039: 31641,
                58040: 31691,
                58041: 31681,
                58042: 31692,
                58043: 31695,
                58044: 31668,
                58045: 31686,
                58046: 31709,
                58047: 31721,
                58048: 31761,
                58049: 31764,
                58050: 31718,
                58051: 31717,
                58052: 31840,
                58053: 31744,
                58054: 31751,
                58055: 31763,
                58056: 31731,
                58057: 31735,
                58058: 31767,
                58059: 31757,
                58060: 31734,
                58061: 31779,
                58062: 31783,
                58063: 31786,
                58064: 31775,
                58065: 31799,
                58066: 31787,
                58067: 31805,
                58068: 31820,
                58069: 31811,
                58070: 31828,
                58071: 31823,
                58072: 31808,
                58073: 31824,
                58074: 31832,
                58075: 31839,
                58076: 31844,
                58077: 31830,
                58078: 31845,
                58079: 31852,
                58080: 31861,
                58081: 31875,
                58082: 31888,
                58083: 31908,
                58084: 31917,
                58085: 31906,
                58086: 31915,
                58087: 31905,
                58088: 31912,
                58089: 31923,
                58090: 31922,
                58091: 31921,
                58092: 31918,
                58093: 31929,
                58094: 31933,
                58095: 31936,
                58096: 31941,
                58097: 31938,
                58098: 31960,
                58099: 31954,
                58100: 31964,
                58101: 31970,
                58102: 39739,
                58103: 31983,
                58104: 31986,
                58105: 31988,
                58106: 31990,
                58107: 31994,
                58108: 32006,
                58176: 32002,
                58177: 32028,
                58178: 32021,
                58179: 32010,
                58180: 32069,
                58181: 32075,
                58182: 32046,
                58183: 32050,
                58184: 32063,
                58185: 32053,
                58186: 32070,
                58187: 32115,
                58188: 32086,
                58189: 32078,
                58190: 32114,
                58191: 32104,
                58192: 32110,
                58193: 32079,
                58194: 32099,
                58195: 32147,
                58196: 32137,
                58197: 32091,
                58198: 32143,
                58199: 32125,
                58200: 32155,
                58201: 32186,
                58202: 32174,
                58203: 32163,
                58204: 32181,
                58205: 32199,
                58206: 32189,
                58207: 32171,
                58208: 32317,
                58209: 32162,
                58210: 32175,
                58211: 32220,
                58212: 32184,
                58213: 32159,
                58214: 32176,
                58215: 32216,
                58216: 32221,
                58217: 32228,
                58218: 32222,
                58219: 32251,
                58220: 32242,
                58221: 32225,
                58222: 32261,
                58223: 32266,
                58224: 32291,
                58225: 32289,
                58226: 32274,
                58227: 32305,
                58228: 32287,
                58229: 32265,
                58230: 32267,
                58231: 32290,
                58232: 32326,
                58233: 32358,
                58234: 32315,
                58235: 32309,
                58236: 32313,
                58237: 32323,
                58238: 32311,
                58240: 32306,
                58241: 32314,
                58242: 32359,
                58243: 32349,
                58244: 32342,
                58245: 32350,
                58246: 32345,
                58247: 32346,
                58248: 32377,
                58249: 32362,
                58250: 32361,
                58251: 32380,
                58252: 32379,
                58253: 32387,
                58254: 32213,
                58255: 32381,
                58256: 36782,
                58257: 32383,
                58258: 32392,
                58259: 32393,
                58260: 32396,
                58261: 32402,
                58262: 32400,
                58263: 32403,
                58264: 32404,
                58265: 32406,
                58266: 32398,
                58267: 32411,
                58268: 32412,
                58269: 32568,
                58270: 32570,
                58271: 32581,
                58272: 32588,
                58273: 32589,
                58274: 32590,
                58275: 32592,
                58276: 32593,
                58277: 32597,
                58278: 32596,
                58279: 32600,
                58280: 32607,
                58281: 32608,
                58282: 32616,
                58283: 32617,
                58284: 32615,
                58285: 32632,
                58286: 32642,
                58287: 32646,
                58288: 32643,
                58289: 32648,
                58290: 32647,
                58291: 32652,
                58292: 32660,
                58293: 32670,
                58294: 32669,
                58295: 32666,
                58296: 32675,
                58297: 32687,
                58298: 32690,
                58299: 32697,
                58300: 32686,
                58301: 32694,
                58302: 32696,
                58303: 35697,
                58304: 32709,
                58305: 32710,
                58306: 32714,
                58307: 32725,
                58308: 32724,
                58309: 32737,
                58310: 32742,
                58311: 32745,
                58312: 32755,
                58313: 32761,
                58314: 39132,
                58315: 32774,
                58316: 32772,
                58317: 32779,
                58318: 32786,
                58319: 32792,
                58320: 32793,
                58321: 32796,
                58322: 32801,
                58323: 32808,
                58324: 32831,
                58325: 32827,
                58326: 32842,
                58327: 32838,
                58328: 32850,
                58329: 32856,
                58330: 32858,
                58331: 32863,
                58332: 32866,
                58333: 32872,
                58334: 32883,
                58335: 32882,
                58336: 32880,
                58337: 32886,
                58338: 32889,
                58339: 32893,
                58340: 32895,
                58341: 32900,
                58342: 32902,
                58343: 32901,
                58344: 32923,
                58345: 32915,
                58346: 32922,
                58347: 32941,
                58348: 20880,
                58349: 32940,
                58350: 32987,
                58351: 32997,
                58352: 32985,
                58353: 32989,
                58354: 32964,
                58355: 32986,
                58356: 32982,
                58357: 33033,
                58358: 33007,
                58359: 33009,
                58360: 33051,
                58361: 33065,
                58362: 33059,
                58363: 33071,
                58364: 33099,
                58432: 38539,
                58433: 33094,
                58434: 33086,
                58435: 33107,
                58436: 33105,
                58437: 33020,
                58438: 33137,
                58439: 33134,
                58440: 33125,
                58441: 33126,
                58442: 33140,
                58443: 33155,
                58444: 33160,
                58445: 33162,
                58446: 33152,
                58447: 33154,
                58448: 33184,
                58449: 33173,
                58450: 33188,
                58451: 33187,
                58452: 33119,
                58453: 33171,
                58454: 33193,
                58455: 33200,
                58456: 33205,
                58457: 33214,
                58458: 33208,
                58459: 33213,
                58460: 33216,
                58461: 33218,
                58462: 33210,
                58463: 33225,
                58464: 33229,
                58465: 33233,
                58466: 33241,
                58467: 33240,
                58468: 33224,
                58469: 33242,
                58470: 33247,
                58471: 33248,
                58472: 33255,
                58473: 33274,
                58474: 33275,
                58475: 33278,
                58476: 33281,
                58477: 33282,
                58478: 33285,
                58479: 33287,
                58480: 33290,
                58481: 33293,
                58482: 33296,
                58483: 33302,
                58484: 33321,
                58485: 33323,
                58486: 33336,
                58487: 33331,
                58488: 33344,
                58489: 33369,
                58490: 33368,
                58491: 33373,
                58492: 33370,
                58493: 33375,
                58494: 33380,
                58496: 33378,
                58497: 33384,
                58498: 33386,
                58499: 33387,
                58500: 33326,
                58501: 33393,
                58502: 33399,
                58503: 33400,
                58504: 33406,
                58505: 33421,
                58506: 33426,
                58507: 33451,
                58508: 33439,
                58509: 33467,
                58510: 33452,
                58511: 33505,
                58512: 33507,
                58513: 33503,
                58514: 33490,
                58515: 33524,
                58516: 33523,
                58517: 33530,
                58518: 33683,
                58519: 33539,
                58520: 33531,
                58521: 33529,
                58522: 33502,
                58523: 33542,
                58524: 33500,
                58525: 33545,
                58526: 33497,
                58527: 33589,
                58528: 33588,
                58529: 33558,
                58530: 33586,
                58531: 33585,
                58532: 33600,
                58533: 33593,
                58534: 33616,
                58535: 33605,
                58536: 33583,
                58537: 33579,
                58538: 33559,
                58539: 33560,
                58540: 33669,
                58541: 33690,
                58542: 33706,
                58543: 33695,
                58544: 33698,
                58545: 33686,
                58546: 33571,
                58547: 33678,
                58548: 33671,
                58549: 33674,
                58550: 33660,
                58551: 33717,
                58552: 33651,
                58553: 33653,
                58554: 33696,
                58555: 33673,
                58556: 33704,
                58557: 33780,
                58558: 33811,
                58559: 33771,
                58560: 33742,
                58561: 33789,
                58562: 33795,
                58563: 33752,
                58564: 33803,
                58565: 33729,
                58566: 33783,
                58567: 33799,
                58568: 33760,
                58569: 33778,
                58570: 33805,
                58571: 33826,
                58572: 33824,
                58573: 33725,
                58574: 33848,
                58575: 34054,
                58576: 33787,
                58577: 33901,
                58578: 33834,
                58579: 33852,
                58580: 34138,
                58581: 33924,
                58582: 33911,
                58583: 33899,
                58584: 33965,
                58585: 33902,
                58586: 33922,
                58587: 33897,
                58588: 33862,
                58589: 33836,
                58590: 33903,
                58591: 33913,
                58592: 33845,
                58593: 33994,
                58594: 33890,
                58595: 33977,
                58596: 33983,
                58597: 33951,
                58598: 34009,
                58599: 33997,
                58600: 33979,
                58601: 34010,
                58602: 34e3,
                58603: 33985,
                58604: 33990,
                58605: 34006,
                58606: 33953,
                58607: 34081,
                58608: 34047,
                58609: 34036,
                58610: 34071,
                58611: 34072,
                58612: 34092,
                58613: 34079,
                58614: 34069,
                58615: 34068,
                58616: 34044,
                58617: 34112,
                58618: 34147,
                58619: 34136,
                58620: 34120,
                58688: 34113,
                58689: 34306,
                58690: 34123,
                58691: 34133,
                58692: 34176,
                58693: 34212,
                58694: 34184,
                58695: 34193,
                58696: 34186,
                58697: 34216,
                58698: 34157,
                58699: 34196,
                58700: 34203,
                58701: 34282,
                58702: 34183,
                58703: 34204,
                58704: 34167,
                58705: 34174,
                58706: 34192,
                58707: 34249,
                58708: 34234,
                58709: 34255,
                58710: 34233,
                58711: 34256,
                58712: 34261,
                58713: 34269,
                58714: 34277,
                58715: 34268,
                58716: 34297,
                58717: 34314,
                58718: 34323,
                58719: 34315,
                58720: 34302,
                58721: 34298,
                58722: 34310,
                58723: 34338,
                58724: 34330,
                58725: 34352,
                58726: 34367,
                58727: 34381,
                58728: 20053,
                58729: 34388,
                58730: 34399,
                58731: 34407,
                58732: 34417,
                58733: 34451,
                58734: 34467,
                58735: 34473,
                58736: 34474,
                58737: 34443,
                58738: 34444,
                58739: 34486,
                58740: 34479,
                58741: 34500,
                58742: 34502,
                58743: 34480,
                58744: 34505,
                58745: 34851,
                58746: 34475,
                58747: 34516,
                58748: 34526,
                58749: 34537,
                58750: 34540,
                58752: 34527,
                58753: 34523,
                58754: 34543,
                58755: 34578,
                58756: 34566,
                58757: 34568,
                58758: 34560,
                58759: 34563,
                58760: 34555,
                58761: 34577,
                58762: 34569,
                58763: 34573,
                58764: 34553,
                58765: 34570,
                58766: 34612,
                58767: 34623,
                58768: 34615,
                58769: 34619,
                58770: 34597,
                58771: 34601,
                58772: 34586,
                58773: 34656,
                58774: 34655,
                58775: 34680,
                58776: 34636,
                58777: 34638,
                58778: 34676,
                58779: 34647,
                58780: 34664,
                58781: 34670,
                58782: 34649,
                58783: 34643,
                58784: 34659,
                58785: 34666,
                58786: 34821,
                58787: 34722,
                58788: 34719,
                58789: 34690,
                58790: 34735,
                58791: 34763,
                58792: 34749,
                58793: 34752,
                58794: 34768,
                58795: 38614,
                58796: 34731,
                58797: 34756,
                58798: 34739,
                58799: 34759,
                58800: 34758,
                58801: 34747,
                58802: 34799,
                58803: 34802,
                58804: 34784,
                58805: 34831,
                58806: 34829,
                58807: 34814,
                58808: 34806,
                58809: 34807,
                58810: 34830,
                58811: 34770,
                58812: 34833,
                58813: 34838,
                58814: 34837,
                58815: 34850,
                58816: 34849,
                58817: 34865,
                58818: 34870,
                58819: 34873,
                58820: 34855,
                58821: 34875,
                58822: 34884,
                58823: 34882,
                58824: 34898,
                58825: 34905,
                58826: 34910,
                58827: 34914,
                58828: 34923,
                58829: 34945,
                58830: 34942,
                58831: 34974,
                58832: 34933,
                58833: 34941,
                58834: 34997,
                58835: 34930,
                58836: 34946,
                58837: 34967,
                58838: 34962,
                58839: 34990,
                58840: 34969,
                58841: 34978,
                58842: 34957,
                58843: 34980,
                58844: 34992,
                58845: 35007,
                58846: 34993,
                58847: 35011,
                58848: 35012,
                58849: 35028,
                58850: 35032,
                58851: 35033,
                58852: 35037,
                58853: 35065,
                58854: 35074,
                58855: 35068,
                58856: 35060,
                58857: 35048,
                58858: 35058,
                58859: 35076,
                58860: 35084,
                58861: 35082,
                58862: 35091,
                58863: 35139,
                58864: 35102,
                58865: 35109,
                58866: 35114,
                58867: 35115,
                58868: 35137,
                58869: 35140,
                58870: 35131,
                58871: 35126,
                58872: 35128,
                58873: 35148,
                58874: 35101,
                58875: 35168,
                58876: 35166,
                58944: 35174,
                58945: 35172,
                58946: 35181,
                58947: 35178,
                58948: 35183,
                58949: 35188,
                58950: 35191,
                58951: 35198,
                58952: 35203,
                58953: 35208,
                58954: 35210,
                58955: 35219,
                58956: 35224,
                58957: 35233,
                58958: 35241,
                58959: 35238,
                58960: 35244,
                58961: 35247,
                58962: 35250,
                58963: 35258,
                58964: 35261,
                58965: 35263,
                58966: 35264,
                58967: 35290,
                58968: 35292,
                58969: 35293,
                58970: 35303,
                58971: 35316,
                58972: 35320,
                58973: 35331,
                58974: 35350,
                58975: 35344,
                58976: 35340,
                58977: 35355,
                58978: 35357,
                58979: 35365,
                58980: 35382,
                58981: 35393,
                58982: 35419,
                58983: 35410,
                58984: 35398,
                58985: 35400,
                58986: 35452,
                58987: 35437,
                58988: 35436,
                58989: 35426,
                58990: 35461,
                58991: 35458,
                58992: 35460,
                58993: 35496,
                58994: 35489,
                58995: 35473,
                58996: 35493,
                58997: 35494,
                58998: 35482,
                58999: 35491,
                59e3: 35524,
                59001: 35533,
                59002: 35522,
                59003: 35546,
                59004: 35563,
                59005: 35571,
                59006: 35559,
                59008: 35556,
                59009: 35569,
                59010: 35604,
                59011: 35552,
                59012: 35554,
                59013: 35575,
                59014: 35550,
                59015: 35547,
                59016: 35596,
                59017: 35591,
                59018: 35610,
                59019: 35553,
                59020: 35606,
                59021: 35600,
                59022: 35607,
                59023: 35616,
                59024: 35635,
                59025: 38827,
                59026: 35622,
                59027: 35627,
                59028: 35646,
                59029: 35624,
                59030: 35649,
                59031: 35660,
                59032: 35663,
                59033: 35662,
                59034: 35657,
                59035: 35670,
                59036: 35675,
                59037: 35674,
                59038: 35691,
                59039: 35679,
                59040: 35692,
                59041: 35695,
                59042: 35700,
                59043: 35709,
                59044: 35712,
                59045: 35724,
                59046: 35726,
                59047: 35730,
                59048: 35731,
                59049: 35734,
                59050: 35737,
                59051: 35738,
                59052: 35898,
                59053: 35905,
                59054: 35903,
                59055: 35912,
                59056: 35916,
                59057: 35918,
                59058: 35920,
                59059: 35925,
                59060: 35938,
                59061: 35948,
                59062: 35960,
                59063: 35962,
                59064: 35970,
                59065: 35977,
                59066: 35973,
                59067: 35978,
                59068: 35981,
                59069: 35982,
                59070: 35988,
                59071: 35964,
                59072: 35992,
                59073: 25117,
                59074: 36013,
                59075: 36010,
                59076: 36029,
                59077: 36018,
                59078: 36019,
                59079: 36014,
                59080: 36022,
                59081: 36040,
                59082: 36033,
                59083: 36068,
                59084: 36067,
                59085: 36058,
                59086: 36093,
                59087: 36090,
                59088: 36091,
                59089: 36100,
                59090: 36101,
                59091: 36106,
                59092: 36103,
                59093: 36111,
                59094: 36109,
                59095: 36112,
                59096: 40782,
                59097: 36115,
                59098: 36045,
                59099: 36116,
                59100: 36118,
                59101: 36199,
                59102: 36205,
                59103: 36209,
                59104: 36211,
                59105: 36225,
                59106: 36249,
                59107: 36290,
                59108: 36286,
                59109: 36282,
                59110: 36303,
                59111: 36314,
                59112: 36310,
                59113: 36300,
                59114: 36315,
                59115: 36299,
                59116: 36330,
                59117: 36331,
                59118: 36319,
                59119: 36323,
                59120: 36348,
                59121: 36360,
                59122: 36361,
                59123: 36351,
                59124: 36381,
                59125: 36382,
                59126: 36368,
                59127: 36383,
                59128: 36418,
                59129: 36405,
                59130: 36400,
                59131: 36404,
                59132: 36426,
                59200: 36423,
                59201: 36425,
                59202: 36428,
                59203: 36432,
                59204: 36424,
                59205: 36441,
                59206: 36452,
                59207: 36448,
                59208: 36394,
                59209: 36451,
                59210: 36437,
                59211: 36470,
                59212: 36466,
                59213: 36476,
                59214: 36481,
                59215: 36487,
                59216: 36485,
                59217: 36484,
                59218: 36491,
                59219: 36490,
                59220: 36499,
                59221: 36497,
                59222: 36500,
                59223: 36505,
                59224: 36522,
                59225: 36513,
                59226: 36524,
                59227: 36528,
                59228: 36550,
                59229: 36529,
                59230: 36542,
                59231: 36549,
                59232: 36552,
                59233: 36555,
                59234: 36571,
                59235: 36579,
                59236: 36604,
                59237: 36603,
                59238: 36587,
                59239: 36606,
                59240: 36618,
                59241: 36613,
                59242: 36629,
                59243: 36626,
                59244: 36633,
                59245: 36627,
                59246: 36636,
                59247: 36639,
                59248: 36635,
                59249: 36620,
                59250: 36646,
                59251: 36659,
                59252: 36667,
                59253: 36665,
                59254: 36677,
                59255: 36674,
                59256: 36670,
                59257: 36684,
                59258: 36681,
                59259: 36678,
                59260: 36686,
                59261: 36695,
                59262: 36700,
                59264: 36706,
                59265: 36707,
                59266: 36708,
                59267: 36764,
                59268: 36767,
                59269: 36771,
                59270: 36781,
                59271: 36783,
                59272: 36791,
                59273: 36826,
                59274: 36837,
                59275: 36834,
                59276: 36842,
                59277: 36847,
                59278: 36999,
                59279: 36852,
                59280: 36869,
                59281: 36857,
                59282: 36858,
                59283: 36881,
                59284: 36885,
                59285: 36897,
                59286: 36877,
                59287: 36894,
                59288: 36886,
                59289: 36875,
                59290: 36903,
                59291: 36918,
                59292: 36917,
                59293: 36921,
                59294: 36856,
                59295: 36943,
                59296: 36944,
                59297: 36945,
                59298: 36946,
                59299: 36878,
                59300: 36937,
                59301: 36926,
                59302: 36950,
                59303: 36952,
                59304: 36958,
                59305: 36968,
                59306: 36975,
                59307: 36982,
                59308: 38568,
                59309: 36978,
                59310: 36994,
                59311: 36989,
                59312: 36993,
                59313: 36992,
                59314: 37002,
                59315: 37001,
                59316: 37007,
                59317: 37032,
                59318: 37039,
                59319: 37041,
                59320: 37045,
                59321: 37090,
                59322: 37092,
                59323: 25160,
                59324: 37083,
                59325: 37122,
                59326: 37138,
                59327: 37145,
                59328: 37170,
                59329: 37168,
                59330: 37194,
                59331: 37206,
                59332: 37208,
                59333: 37219,
                59334: 37221,
                59335: 37225,
                59336: 37235,
                59337: 37234,
                59338: 37259,
                59339: 37257,
                59340: 37250,
                59341: 37282,
                59342: 37291,
                59343: 37295,
                59344: 37290,
                59345: 37301,
                59346: 37300,
                59347: 37306,
                59348: 37312,
                59349: 37313,
                59350: 37321,
                59351: 37323,
                59352: 37328,
                59353: 37334,
                59354: 37343,
                59355: 37345,
                59356: 37339,
                59357: 37372,
                59358: 37365,
                59359: 37366,
                59360: 37406,
                59361: 37375,
                59362: 37396,
                59363: 37420,
                59364: 37397,
                59365: 37393,
                59366: 37470,
                59367: 37463,
                59368: 37445,
                59369: 37449,
                59370: 37476,
                59371: 37448,
                59372: 37525,
                59373: 37439,
                59374: 37451,
                59375: 37456,
                59376: 37532,
                59377: 37526,
                59378: 37523,
                59379: 37531,
                59380: 37466,
                59381: 37583,
                59382: 37561,
                59383: 37559,
                59384: 37609,
                59385: 37647,
                59386: 37626,
                59387: 37700,
                59388: 37678,
                59456: 37657,
                59457: 37666,
                59458: 37658,
                59459: 37667,
                59460: 37690,
                59461: 37685,
                59462: 37691,
                59463: 37724,
                59464: 37728,
                59465: 37756,
                59466: 37742,
                59467: 37718,
                59468: 37808,
                59469: 37804,
                59470: 37805,
                59471: 37780,
                59472: 37817,
                59473: 37846,
                59474: 37847,
                59475: 37864,
                59476: 37861,
                59477: 37848,
                59478: 37827,
                59479: 37853,
                59480: 37840,
                59481: 37832,
                59482: 37860,
                59483: 37914,
                59484: 37908,
                59485: 37907,
                59486: 37891,
                59487: 37895,
                59488: 37904,
                59489: 37942,
                59490: 37931,
                59491: 37941,
                59492: 37921,
                59493: 37946,
                59494: 37953,
                59495: 37970,
                59496: 37956,
                59497: 37979,
                59498: 37984,
                59499: 37986,
                59500: 37982,
                59501: 37994,
                59502: 37417,
                59503: 38e3,
                59504: 38005,
                59505: 38007,
                59506: 38013,
                59507: 37978,
                59508: 38012,
                59509: 38014,
                59510: 38017,
                59511: 38015,
                59512: 38274,
                59513: 38279,
                59514: 38282,
                59515: 38292,
                59516: 38294,
                59517: 38296,
                59518: 38297,
                59520: 38304,
                59521: 38312,
                59522: 38311,
                59523: 38317,
                59524: 38332,
                59525: 38331,
                59526: 38329,
                59527: 38334,
                59528: 38346,
                59529: 28662,
                59530: 38339,
                59531: 38349,
                59532: 38348,
                59533: 38357,
                59534: 38356,
                59535: 38358,
                59536: 38364,
                59537: 38369,
                59538: 38373,
                59539: 38370,
                59540: 38433,
                59541: 38440,
                59542: 38446,
                59543: 38447,
                59544: 38466,
                59545: 38476,
                59546: 38479,
                59547: 38475,
                59548: 38519,
                59549: 38492,
                59550: 38494,
                59551: 38493,
                59552: 38495,
                59553: 38502,
                59554: 38514,
                59555: 38508,
                59556: 38541,
                59557: 38552,
                59558: 38549,
                59559: 38551,
                59560: 38570,
                59561: 38567,
                59562: 38577,
                59563: 38578,
                59564: 38576,
                59565: 38580,
                59566: 38582,
                59567: 38584,
                59568: 38585,
                59569: 38606,
                59570: 38603,
                59571: 38601,
                59572: 38605,
                59573: 35149,
                59574: 38620,
                59575: 38669,
                59576: 38613,
                59577: 38649,
                59578: 38660,
                59579: 38662,
                59580: 38664,
                59581: 38675,
                59582: 38670,
                59583: 38673,
                59584: 38671,
                59585: 38678,
                59586: 38681,
                59587: 38692,
                59588: 38698,
                59589: 38704,
                59590: 38713,
                59591: 38717,
                59592: 38718,
                59593: 38724,
                59594: 38726,
                59595: 38728,
                59596: 38722,
                59597: 38729,
                59598: 38748,
                59599: 38752,
                59600: 38756,
                59601: 38758,
                59602: 38760,
                59603: 21202,
                59604: 38763,
                59605: 38769,
                59606: 38777,
                59607: 38789,
                59608: 38780,
                59609: 38785,
                59610: 38778,
                59611: 38790,
                59612: 38795,
                59613: 38799,
                59614: 38800,
                59615: 38812,
                59616: 38824,
                59617: 38822,
                59618: 38819,
                59619: 38835,
                59620: 38836,
                59621: 38851,
                59622: 38854,
                59623: 38856,
                59624: 38859,
                59625: 38876,
                59626: 38893,
                59627: 40783,
                59628: 38898,
                59629: 31455,
                59630: 38902,
                59631: 38901,
                59632: 38927,
                59633: 38924,
                59634: 38968,
                59635: 38948,
                59636: 38945,
                59637: 38967,
                59638: 38973,
                59639: 38982,
                59640: 38991,
                59641: 38987,
                59642: 39019,
                59643: 39023,
                59644: 39024,
                59712: 39025,
                59713: 39028,
                59714: 39027,
                59715: 39082,
                59716: 39087,
                59717: 39089,
                59718: 39094,
                59719: 39108,
                59720: 39107,
                59721: 39110,
                59722: 39145,
                59723: 39147,
                59724: 39171,
                59725: 39177,
                59726: 39186,
                59727: 39188,
                59728: 39192,
                59729: 39201,
                59730: 39197,
                59731: 39198,
                59732: 39204,
                59733: 39200,
                59734: 39212,
                59735: 39214,
                59736: 39229,
                59737: 39230,
                59738: 39234,
                59739: 39241,
                59740: 39237,
                59741: 39248,
                59742: 39243,
                59743: 39249,
                59744: 39250,
                59745: 39244,
                59746: 39253,
                59747: 39319,
                59748: 39320,
                59749: 39333,
                59750: 39341,
                59751: 39342,
                59752: 39356,
                59753: 39391,
                59754: 39387,
                59755: 39389,
                59756: 39384,
                59757: 39377,
                59758: 39405,
                59759: 39406,
                59760: 39409,
                59761: 39410,
                59762: 39419,
                59763: 39416,
                59764: 39425,
                59765: 39439,
                59766: 39429,
                59767: 39394,
                59768: 39449,
                59769: 39467,
                59770: 39479,
                59771: 39493,
                59772: 39490,
                59773: 39488,
                59774: 39491,
                59776: 39486,
                59777: 39509,
                59778: 39501,
                59779: 39515,
                59780: 39511,
                59781: 39519,
                59782: 39522,
                59783: 39525,
                59784: 39524,
                59785: 39529,
                59786: 39531,
                59787: 39530,
                59788: 39597,
                59789: 39600,
                59790: 39612,
                59791: 39616,
                59792: 39631,
                59793: 39633,
                59794: 39635,
                59795: 39636,
                59796: 39646,
                59797: 39647,
                59798: 39650,
                59799: 39651,
                59800: 39654,
                59801: 39663,
                59802: 39659,
                59803: 39662,
                59804: 39668,
                59805: 39665,
                59806: 39671,
                59807: 39675,
                59808: 39686,
                59809: 39704,
                59810: 39706,
                59811: 39711,
                59812: 39714,
                59813: 39715,
                59814: 39717,
                59815: 39719,
                59816: 39720,
                59817: 39721,
                59818: 39722,
                59819: 39726,
                59820: 39727,
                59821: 39730,
                59822: 39748,
                59823: 39747,
                59824: 39759,
                59825: 39757,
                59826: 39758,
                59827: 39761,
                59828: 39768,
                59829: 39796,
                59830: 39827,
                59831: 39811,
                59832: 39825,
                59833: 39830,
                59834: 39831,
                59835: 39839,
                59836: 39840,
                59837: 39848,
                59838: 39860,
                59839: 39872,
                59840: 39882,
                59841: 39865,
                59842: 39878,
                59843: 39887,
                59844: 39889,
                59845: 39890,
                59846: 39907,
                59847: 39906,
                59848: 39908,
                59849: 39892,
                59850: 39905,
                59851: 39994,
                59852: 39922,
                59853: 39921,
                59854: 39920,
                59855: 39957,
                59856: 39956,
                59857: 39945,
                59858: 39955,
                59859: 39948,
                59860: 39942,
                59861: 39944,
                59862: 39954,
                59863: 39946,
                59864: 39940,
                59865: 39982,
                59866: 39963,
                59867: 39973,
                59868: 39972,
                59869: 39969,
                59870: 39984,
                59871: 40007,
                59872: 39986,
                59873: 40006,
                59874: 39998,
                59875: 40026,
                59876: 40032,
                59877: 40039,
                59878: 40054,
                59879: 40056,
                59880: 40167,
                59881: 40172,
                59882: 40176,
                59883: 40201,
                59884: 40200,
                59885: 40171,
                59886: 40195,
                59887: 40198,
                59888: 40234,
                59889: 40230,
                59890: 40367,
                59891: 40227,
                59892: 40223,
                59893: 40260,
                59894: 40213,
                59895: 40210,
                59896: 40257,
                59897: 40255,
                59898: 40254,
                59899: 40262,
                59900: 40264,
                59968: 40285,
                59969: 40286,
                59970: 40292,
                59971: 40273,
                59972: 40272,
                59973: 40281,
                59974: 40306,
                59975: 40329,
                59976: 40327,
                59977: 40363,
                59978: 40303,
                59979: 40314,
                59980: 40346,
                59981: 40356,
                59982: 40361,
                59983: 40370,
                59984: 40388,
                59985: 40385,
                59986: 40379,
                59987: 40376,
                59988: 40378,
                59989: 40390,
                59990: 40399,
                59991: 40386,
                59992: 40409,
                59993: 40403,
                59994: 40440,
                59995: 40422,
                59996: 40429,
                59997: 40431,
                59998: 40445,
                59999: 40474,
                6e4: 40475,
                60001: 40478,
                60002: 40565,
                60003: 40569,
                60004: 40573,
                60005: 40577,
                60006: 40584,
                60007: 40587,
                60008: 40588,
                60009: 40594,
                60010: 40597,
                60011: 40593,
                60012: 40605,
                60013: 40613,
                60014: 40617,
                60015: 40632,
                60016: 40618,
                60017: 40621,
                60018: 38753,
                60019: 40652,
                60020: 40654,
                60021: 40655,
                60022: 40656,
                60023: 40660,
                60024: 40668,
                60025: 40670,
                60026: 40669,
                60027: 40672,
                60028: 40677,
                60029: 40680,
                60030: 40687,
                60032: 40692,
                60033: 40694,
                60034: 40695,
                60035: 40697,
                60036: 40699,
                60037: 40700,
                60038: 40701,
                60039: 40711,
                60040: 40712,
                60041: 30391,
                60042: 40725,
                60043: 40737,
                60044: 40748,
                60045: 40766,
                60046: 40778,
                60047: 40786,
                60048: 40788,
                60049: 40803,
                60050: 40799,
                60051: 40800,
                60052: 40801,
                60053: 40806,
                60054: 40807,
                60055: 40812,
                60056: 40810,
                60057: 40823,
                60058: 40818,
                60059: 40822,
                60060: 40853,
                60061: 40860,
                60062: 40864,
                60063: 22575,
                60064: 27079,
                60065: 36953,
                60066: 29796,
                60067: 20956,
                60068: 29081
              };
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(1), l = o(2);
              function s(f, A, C, F) {
                var B;
                A.degree() < C.degree() && (B = [
                  C,
                  A
                ], A = B[0], C = B[1]);
                for (var p = A, h = C, k = f.zero, b = f.one; h.degree() >= F / 2; ) {
                  var m = p, D = k;
                  if (p = h, k = b, p.isZero()) return null;
                  h = m;
                  for (var v = f.zero, _ = p.getCoefficient(p.degree()), w = f.inverse(_); h.degree() >= p.degree() && !h.isZero(); ) {
                    var y = h.degree() - p.degree(), M = f.multiply(h.getCoefficient(h.degree()), w);
                    v = v.addOrSubtract(f.buildMonomial(y, M)), h = h.addOrSubtract(p.multiplyByMonomial(y, M));
                  }
                  if (b = v.multiplyPoly(k).addOrSubtract(D), h.degree() >= p.degree()) return null;
                }
                var L = b.getCoefficient(0);
                if (L === 0) return null;
                var S = f.inverse(L);
                return [
                  b.multiply(S),
                  h.multiply(S)
                ];
              }
              function a(f, A) {
                var C = A.degree();
                if (C === 1) return [
                  A.getCoefficient(1)
                ];
                for (var F = new Array(C), B = 0, p = 1; p < f.size && B < C; p++) A.evaluateAt(p) === 0 && (F[B] = f.inverse(p), B++);
                return B !== C ? null : F;
              }
              function c(f, A, C) {
                for (var F = C.length, B = new Array(F), p = 0; p < F; p++) {
                  for (var h = f.inverse(C[p]), k = 1, b = 0; b < F; b++) p !== b && (k = f.multiply(k, r.addOrSubtractGF(1, f.multiply(C[b], h))));
                  B[p] = f.multiply(A.evaluateAt(h), f.inverse(k)), f.generatorBase !== 0 && (B[p] = f.multiply(B[p], h));
                }
                return B;
              }
              function E(f, A) {
                var C = new Uint8ClampedArray(f.length);
                C.set(f);
                for (var F = new r.default(285, 256, 0), B = new l.default(F, C), p = new Uint8ClampedArray(A), h = false, k = 0; k < A; k++) {
                  var b = B.evaluateAt(F.exp(k + F.generatorBase));
                  p[p.length - 1 - k] = b, b !== 0 && (h = true);
                }
                if (!h) return C;
                var m = new l.default(F, p), D = s(F, F.buildMonomial(A, 1), m, A);
                if (D === null) return null;
                var v = a(F, D[0]);
                if (v == null) return null;
                for (var _ = c(F, D[1], v), w = 0; w < v.length; w++) {
                  var y = C.length - 1 - F.log(v[w]);
                  if (y < 0) return null;
                  C[y] = r.addOrSubtractGF(C[y], _[w]);
                }
                return C;
              }
              n.decode = E;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              }), n.VERSIONS = [
                {
                  infoBits: null,
                  versionNumber: 1,
                  alignmentPatternCenters: [],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 7,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 19
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 10,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 13,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 17,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 9
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 2,
                  alignmentPatternCenters: [
                    6,
                    18
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 10,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 34
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 16,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 28
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 22
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 3,
                  alignmentPatternCenters: [
                    6,
                    22
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 15,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 55
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 44
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 4,
                  alignmentPatternCenters: [
                    6,
                    26
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 80
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 32
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 24
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 16,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 9
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 5,
                  alignmentPatternCenters: [
                    6,
                    30
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 108
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 43
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 11
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 12
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: null,
                  versionNumber: 6,
                  alignmentPatternCenters: [
                    6,
                    34
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 68
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 16,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 27
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 19
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 31892,
                  versionNumber: 7,
                  alignmentPatternCenters: [
                    6,
                    22,
                    38
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 78
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 31
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 13
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 14
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 34236,
                  versionNumber: 8,
                  alignmentPatternCenters: [
                    6,
                    24,
                    42
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 97
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 38
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 39
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 18
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 19
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 39577,
                  versionNumber: 9,
                  alignmentPatternCenters: [
                    6,
                    26,
                    46
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 36
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 37
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 42195,
                  versionNumber: 10,
                  alignmentPatternCenters: [
                    6,
                    28,
                    50
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 18,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 68
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 69
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 43
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 44
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 19
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 20
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 48118,
                  versionNumber: 11,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 81
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 50
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 51
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 51042,
                  versionNumber: 12,
                  alignmentPatternCenters: [
                    6,
                    32,
                    58
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 92
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 93
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 36
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 37
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 20
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 21
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 55367,
                  versionNumber: 13,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 107
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 37
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 38
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 20
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 21
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 11
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 12
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 58893,
                  versionNumber: 14,
                  alignmentPatternCenters: [
                    6,
                    26,
                    46,
                    66
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 40
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 41
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 20,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 63784,
                  versionNumber: 15,
                  alignmentPatternCenters: [
                    6,
                    26,
                    48,
                    70
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 22,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 87
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 88
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 41
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 42
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 12
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 68472,
                  versionNumber: 16,
                  alignmentPatternCenters: [
                    6,
                    26,
                    50,
                    74
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 98
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 99
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 19
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 20
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 70749,
                  versionNumber: 17,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    78
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 107
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 108
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 76311,
                  versionNumber: 18,
                  alignmentPatternCenters: [
                    6,
                    30,
                    56,
                    82
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 120
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 121
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 9,
                          dataCodewordsPerBlock: 43
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 44
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 14
                        },
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 15
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 79154,
                  versionNumber: 19,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 113
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 114
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 44
                        },
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 45
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 21
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 22
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 9,
                          dataCodewordsPerBlock: 13
                        },
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 14
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 84390,
                  versionNumber: 20,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62,
                    90
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 107
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 108
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 41
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 42
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 87683,
                  versionNumber: 21,
                  alignmentPatternCenters: [
                    6,
                    28,
                    50,
                    72,
                    94
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 116
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 117
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 42
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 92361,
                  versionNumber: 22,
                  alignmentPatternCenters: [
                    6,
                    26,
                    50,
                    74,
                    98
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 111
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 112
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 24,
                      ecBlocks: [
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 13
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 96236,
                  versionNumber: 23,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    74,
                    102
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 121
                        },
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 122
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 102084,
                  versionNumber: 24,
                  alignmentPatternCenters: [
                    6,
                    28,
                    54,
                    80,
                    106
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 117
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 118
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 16,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 30,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 102881,
                  versionNumber: 25,
                  alignmentPatternCenters: [
                    6,
                    32,
                    58,
                    84,
                    110
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 26,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 106
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 107
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 110507,
                  versionNumber: 26,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86,
                    114
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 114
                        },
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 115
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 28,
                          dataCodewordsPerBlock: 22
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 23
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 33,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 110734,
                  versionNumber: 27,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62,
                    90,
                    118
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 122
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 123
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 8,
                          dataCodewordsPerBlock: 23
                        },
                        {
                          numBlocks: 26,
                          dataCodewordsPerBlock: 24
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 28,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 117786,
                  versionNumber: 28,
                  alignmentPatternCenters: [
                    6,
                    26,
                    50,
                    74,
                    98,
                    122
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 117
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 118
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 31,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 31,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 119615,
                  versionNumber: 29,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 116
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 117
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 21,
                          dataCodewordsPerBlock: 45
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 46
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 23
                        },
                        {
                          numBlocks: 37,
                          dataCodewordsPerBlock: 24
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 26,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 126325,
                  versionNumber: 30,
                  alignmentPatternCenters: [
                    6,
                    26,
                    52,
                    78,
                    104,
                    130
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 5,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 15,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 25,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 25,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 127568,
                  versionNumber: 31,
                  alignmentPatternCenters: [
                    6,
                    30,
                    56,
                    82,
                    108,
                    134
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 3,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 29,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 42,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 28,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 133589,
                  versionNumber: 32,
                  alignmentPatternCenters: [
                    6,
                    34,
                    60,
                    86,
                    112,
                    138
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 115
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 35,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 35,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 136944,
                  versionNumber: 33,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 21,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 29,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 11,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 46,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 141498,
                  versionNumber: 34,
                  alignmentPatternCenters: [
                    6,
                    34,
                    62,
                    90,
                    118,
                    146
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 115
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 116
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 23,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 44,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 59,
                          dataCodewordsPerBlock: 16
                        },
                        {
                          numBlocks: 1,
                          dataCodewordsPerBlock: 17
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 145311,
                  versionNumber: 35,
                  alignmentPatternCenters: [
                    6,
                    30,
                    54,
                    78,
                    102,
                    126,
                    150
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 121
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 122
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 12,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 26,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 39,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 41,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 150283,
                  versionNumber: 36,
                  alignmentPatternCenters: [
                    6,
                    24,
                    50,
                    76,
                    102,
                    128,
                    154
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 121
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 122
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 46,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 2,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 64,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 152622,
                  versionNumber: 37,
                  alignmentPatternCenters: [
                    6,
                    28,
                    54,
                    80,
                    106,
                    132,
                    158
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 17,
                          dataCodewordsPerBlock: 122
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 123
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 29,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 49,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 24,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 46,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 158308,
                  versionNumber: 38,
                  alignmentPatternCenters: [
                    6,
                    32,
                    58,
                    84,
                    110,
                    136,
                    162
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 122
                        },
                        {
                          numBlocks: 18,
                          dataCodewordsPerBlock: 123
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 13,
                          dataCodewordsPerBlock: 46
                        },
                        {
                          numBlocks: 32,
                          dataCodewordsPerBlock: 47
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 48,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 14,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 42,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 32,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 161089,
                  versionNumber: 39,
                  alignmentPatternCenters: [
                    6,
                    26,
                    54,
                    82,
                    110,
                    138,
                    166
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 20,
                          dataCodewordsPerBlock: 117
                        },
                        {
                          numBlocks: 4,
                          dataCodewordsPerBlock: 118
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 40,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 7,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 43,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 22,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 10,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 67,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                },
                {
                  infoBits: 167017,
                  versionNumber: 40,
                  alignmentPatternCenters: [
                    6,
                    30,
                    58,
                    86,
                    114,
                    142,
                    170
                  ],
                  errorCorrectionLevels: [
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 19,
                          dataCodewordsPerBlock: 118
                        },
                        {
                          numBlocks: 6,
                          dataCodewordsPerBlock: 119
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 28,
                      ecBlocks: [
                        {
                          numBlocks: 18,
                          dataCodewordsPerBlock: 47
                        },
                        {
                          numBlocks: 31,
                          dataCodewordsPerBlock: 48
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 24
                        },
                        {
                          numBlocks: 34,
                          dataCodewordsPerBlock: 25
                        }
                      ]
                    },
                    {
                      ecCodewordsPerBlock: 30,
                      ecBlocks: [
                        {
                          numBlocks: 20,
                          dataCodewordsPerBlock: 15
                        },
                        {
                          numBlocks: 61,
                          dataCodewordsPerBlock: 16
                        }
                      ]
                    }
                  ]
                }
              ];
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0);
              function l(E, f, A, C) {
                var F = E.x - f.x + A.x - C.x, B = E.y - f.y + A.y - C.y;
                if (F === 0 && B === 0) return {
                  a11: f.x - E.x,
                  a12: f.y - E.y,
                  a13: 0,
                  a21: A.x - f.x,
                  a22: A.y - f.y,
                  a23: 0,
                  a31: E.x,
                  a32: E.y,
                  a33: 1
                };
                var p = f.x - A.x, h = C.x - A.x, k = f.y - A.y, b = C.y - A.y, m = p * b - h * k, D = (F * b - h * B) / m, v = (p * B - F * k) / m;
                return {
                  a11: f.x - E.x + D * f.x,
                  a12: f.y - E.y + D * f.y,
                  a13: D,
                  a21: C.x - E.x + v * C.x,
                  a22: C.y - E.y + v * C.y,
                  a23: v,
                  a31: E.x,
                  a32: E.y,
                  a33: 1
                };
              }
              function s(E, f, A, C) {
                var F = l(E, f, A, C);
                return {
                  a11: F.a22 * F.a33 - F.a23 * F.a32,
                  a12: F.a13 * F.a32 - F.a12 * F.a33,
                  a13: F.a12 * F.a23 - F.a13 * F.a22,
                  a21: F.a23 * F.a31 - F.a21 * F.a33,
                  a22: F.a11 * F.a33 - F.a13 * F.a31,
                  a23: F.a13 * F.a21 - F.a11 * F.a23,
                  a31: F.a21 * F.a32 - F.a22 * F.a31,
                  a32: F.a12 * F.a31 - F.a11 * F.a32,
                  a33: F.a11 * F.a22 - F.a12 * F.a21
                };
              }
              function a(E, f) {
                return {
                  a11: E.a11 * f.a11 + E.a21 * f.a12 + E.a31 * f.a13,
                  a12: E.a12 * f.a11 + E.a22 * f.a12 + E.a32 * f.a13,
                  a13: E.a13 * f.a11 + E.a23 * f.a12 + E.a33 * f.a13,
                  a21: E.a11 * f.a21 + E.a21 * f.a22 + E.a31 * f.a23,
                  a22: E.a12 * f.a21 + E.a22 * f.a22 + E.a32 * f.a23,
                  a23: E.a13 * f.a21 + E.a23 * f.a22 + E.a33 * f.a23,
                  a31: E.a11 * f.a31 + E.a21 * f.a32 + E.a31 * f.a33,
                  a32: E.a12 * f.a31 + E.a22 * f.a32 + E.a32 * f.a33,
                  a33: E.a13 * f.a31 + E.a23 * f.a32 + E.a33 * f.a33
                };
              }
              function c(E, f) {
                for (var A = s({
                  x: 3.5,
                  y: 3.5
                }, {
                  x: f.dimension - 3.5,
                  y: 3.5
                }, {
                  x: f.dimension - 6.5,
                  y: f.dimension - 6.5
                }, {
                  x: 3.5,
                  y: f.dimension - 3.5
                }), C = l(f.topLeft, f.topRight, f.alignmentPattern, f.bottomLeft), F = a(C, A), B = r.BitMatrix.createEmpty(f.dimension, f.dimension), p = function(v, _) {
                  var w = F.a13 * v + F.a23 * _ + F.a33;
                  return {
                    x: (F.a11 * v + F.a21 * _ + F.a31) / w,
                    y: (F.a12 * v + F.a22 * _ + F.a32) / w
                  };
                }, h = 0; h < f.dimension; h++) for (var k = 0; k < f.dimension; k++) {
                  var b = k + 0.5, m = h + 0.5, D = p(b, m);
                  B.set(k, h, E.get(Math.floor(D.x), Math.floor(D.y)));
                }
                return {
                  matrix: B,
                  mappingFunction: p
                };
              }
              n.extract = c;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = 4, l = 0.5, s = 1.5, a = function(b, m) {
                return Math.sqrt(Math.pow(m.x - b.x, 2) + Math.pow(m.y - b.y, 2));
              };
              function c(b) {
                return b.reduce(function(m, D) {
                  return m + D;
                });
              }
              function E(b, m, D) {
                var v, _, w, y, M = a(b, m), L = a(m, D), S = a(b, D), N, I, q;
                return L >= M && L >= S ? (v = [
                  m,
                  b,
                  D
                ], N = v[0], I = v[1], q = v[2]) : S >= L && S >= M ? (_ = [
                  b,
                  m,
                  D
                ], N = _[0], I = _[1], q = _[2]) : (w = [
                  b,
                  D,
                  m
                ], N = w[0], I = w[1], q = w[2]), (q.x - I.x) * (N.y - I.y) - (q.y - I.y) * (N.x - I.x) < 0 && (y = [
                  q,
                  N
                ], N = y[0], q = y[1]), {
                  bottomLeft: N,
                  topLeft: I,
                  topRight: q
                };
              }
              function f(b, m, D, v) {
                var _ = (c(C(b, D, v, 5)) / 7 + c(C(b, m, v, 5)) / 7 + c(C(D, b, v, 5)) / 7 + c(C(m, b, v, 5)) / 7) / 4;
                if (_ < 1) throw new Error("Invalid module size");
                var w = Math.round(a(b, m) / _), y = Math.round(a(b, D) / _), M = Math.floor((w + y) / 2) + 7;
                switch (M % 4) {
                  case 0:
                    M++;
                    break;
                  case 2:
                    M--;
                    break;
                }
                return {
                  dimension: M,
                  moduleSize: _
                };
              }
              function A(b, m, D, v) {
                var _ = [
                  {
                    x: Math.floor(b.x),
                    y: Math.floor(b.y)
                  }
                ], w = Math.abs(m.y - b.y) > Math.abs(m.x - b.x), y, M, L, S;
                w ? (y = Math.floor(b.y), M = Math.floor(b.x), L = Math.floor(m.y), S = Math.floor(m.x)) : (y = Math.floor(b.x), M = Math.floor(b.y), L = Math.floor(m.x), S = Math.floor(m.y));
                for (var N = Math.abs(L - y), I = Math.abs(S - M), q = Math.floor(-N / 2), G = y < L ? 1 : -1, U = M < S ? 1 : -1, W = true, Y = y, O = M; Y !== L + G; Y += G) {
                  var R = w ? O : Y, $ = w ? Y : O;
                  if (D.get(R, $) !== W && (W = !W, _.push({
                    x: R,
                    y: $
                  }), _.length === v + 1)) break;
                  if (q += I, q > 0) {
                    if (O === S) break;
                    O += U, q -= N;
                  }
                }
                for (var J = [], V = 0; V < v; V++) _[V] && _[V + 1] ? J.push(a(_[V], _[V + 1])) : J.push(0);
                return J;
              }
              function C(b, m, D, v) {
                var _, w = m.y - b.y, y = m.x - b.x, M = A(b, m, D, Math.ceil(v / 2)), L = A(b, {
                  x: b.x - y,
                  y: b.y - w
                }, D, Math.ceil(v / 2)), S = M.shift() + L.shift() - 1;
                return (_ = L.concat(S)).concat.apply(_, M);
              }
              function F(b, m) {
                var D = c(b) / c(m), v = 0;
                return m.forEach(function(_, w) {
                  v += Math.pow(b[w] - _ * D, 2);
                }), {
                  averageSize: D,
                  error: v
                };
              }
              function B(b, m, D) {
                try {
                  var v = C(b, {
                    x: -1,
                    y: b.y
                  }, D, m.length), _ = C(b, {
                    x: b.x,
                    y: -1
                  }, D, m.length), w = {
                    x: Math.max(0, b.x - b.y) - 1,
                    y: Math.max(0, b.y - b.x) - 1
                  }, y = C(b, w, D, m.length), M = {
                    x: Math.min(D.width, b.x + b.y) + 1,
                    y: Math.min(D.height, b.y + b.x) + 1
                  }, L = C(b, M, D, m.length), S = F(v, m), N = F(_, m), I = F(y, m), q = F(L, m), G = Math.sqrt(S.error * S.error + N.error * N.error + I.error * I.error + q.error * q.error), U = (S.averageSize + N.averageSize + I.averageSize + q.averageSize) / 4, W = (Math.pow(S.averageSize - U, 2) + Math.pow(N.averageSize - U, 2) + Math.pow(I.averageSize - U, 2) + Math.pow(q.averageSize - U, 2)) / U;
                  return G + W;
                } catch {
                  return 1 / 0;
                }
              }
              function p(b, m) {
                for (var D = Math.round(m.x); b.get(D, Math.round(m.y)); ) D--;
                for (var v = Math.round(m.x); b.get(v, Math.round(m.y)); ) v++;
                for (var _ = (D + v) / 2, w = Math.round(m.y); b.get(Math.round(_), w); ) w--;
                for (var y = Math.round(m.y); b.get(Math.round(_), y); ) y++;
                var M = (w + y) / 2;
                return {
                  x: _,
                  y: M
                };
              }
              function h(b) {
                for (var m = [], D = [], v = [], _ = [], w = function(R) {
                  for (var $ = 0, J = false, V = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], l0 = function(n0) {
                    var s0 = b.get(n0, R);
                    if (s0 === J) $++;
                    else {
                      V = [
                        V[1],
                        V[2],
                        V[3],
                        V[4],
                        $
                      ], $ = 1, J = s0;
                      var Q = c(V) / 7, x0 = Math.abs(V[0] - Q) < Q && Math.abs(V[1] - Q) < Q && Math.abs(V[2] - 3 * Q) < 3 * Q && Math.abs(V[3] - Q) < Q && Math.abs(V[4] - Q) < Q && !s0, r0 = c(V.slice(-3)) / 3, B0 = Math.abs(V[2] - r0) < r0 && Math.abs(V[3] - r0) < r0 && Math.abs(V[4] - r0) < r0 && s0;
                      if (x0) {
                        var u0 = n0 - V[3] - V[4], Z = u0 - V[2], i0 = {
                          startX: Z,
                          endX: u0,
                          y: R
                        }, J0 = D.filter(function(j0) {
                          return Z >= j0.bottom.startX && Z <= j0.bottom.endX || u0 >= j0.bottom.startX && Z <= j0.bottom.endX || Z <= j0.bottom.startX && u0 >= j0.bottom.endX && V[2] / (j0.bottom.endX - j0.bottom.startX) < s && V[2] / (j0.bottom.endX - j0.bottom.startX) > l;
                        });
                        J0.length > 0 ? J0[0].bottom = i0 : D.push({
                          top: i0,
                          bottom: i0
                        });
                      }
                      if (B0) {
                        var re = n0 - V[4], L0 = re - V[3], i0 = {
                          startX: L0,
                          y: R,
                          endX: re
                        }, J0 = _.filter(function(N0) {
                          return L0 >= N0.bottom.startX && L0 <= N0.bottom.endX || re >= N0.bottom.startX && L0 <= N0.bottom.endX || L0 <= N0.bottom.startX && re >= N0.bottom.endX && V[2] / (N0.bottom.endX - N0.bottom.startX) < s && V[2] / (N0.bottom.endX - N0.bottom.startX) > l;
                        });
                        J0.length > 0 ? J0[0].bottom = i0 : _.push({
                          top: i0,
                          bottom: i0
                        });
                      }
                    }
                  }, c0 = -1; c0 <= b.width; c0++) l0(c0);
                  m.push.apply(m, D.filter(function(n0) {
                    return n0.bottom.y !== R && n0.bottom.y - n0.top.y >= 2;
                  })), D = D.filter(function(n0) {
                    return n0.bottom.y === R;
                  }), v.push.apply(v, _.filter(function(n0) {
                    return n0.bottom.y !== R;
                  })), _ = _.filter(function(n0) {
                    return n0.bottom.y === R;
                  });
                }, y = 0; y <= b.height; y++) w(y);
                m.push.apply(m, D.filter(function(R) {
                  return R.bottom.y - R.top.y >= 2;
                })), v.push.apply(v, _);
                var M = m.filter(function(R) {
                  return R.bottom.y - R.top.y >= 2;
                }).map(function(R) {
                  var $ = (R.top.startX + R.top.endX + R.bottom.startX + R.bottom.endX) / 4, J = (R.top.y + R.bottom.y + 1) / 2;
                  if (b.get(Math.round($), Math.round(J))) {
                    var V = [
                      R.top.endX - R.top.startX,
                      R.bottom.endX - R.bottom.startX,
                      R.bottom.y - R.top.y + 1
                    ], l0 = c(V) / V.length, c0 = B({
                      x: Math.round($),
                      y: Math.round(J)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], b);
                    return {
                      score: c0,
                      x: $,
                      y: J,
                      size: l0
                    };
                  }
                }).filter(function(R) {
                  return !!R;
                }).sort(function(R, $) {
                  return R.score - $.score;
                }).map(function(R, $, J) {
                  if ($ > r) return null;
                  var V = J.filter(function(c0, n0) {
                    return $ !== n0;
                  }).map(function(c0) {
                    return {
                      x: c0.x,
                      y: c0.y,
                      score: c0.score + Math.pow(c0.size - R.size, 2) / R.size,
                      size: c0.size
                    };
                  }).sort(function(c0, n0) {
                    return c0.score - n0.score;
                  });
                  if (V.length < 2) return null;
                  var l0 = R.score + V[0].score + V[1].score;
                  return {
                    points: [
                      R
                    ].concat(V.slice(0, 2)),
                    score: l0
                  };
                }).filter(function(R) {
                  return !!R;
                }).sort(function(R, $) {
                  return R.score - $.score;
                });
                if (M.length === 0) return null;
                var L = E(M[0].points[0], M[0].points[1], M[0].points[2]), S = L.topRight, N = L.topLeft, I = L.bottomLeft, q = k(b, v, S, N, I), G = [];
                q && G.push({
                  alignmentPattern: {
                    x: q.alignmentPattern.x,
                    y: q.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: I.x,
                    y: I.y
                  },
                  dimension: q.dimension,
                  topLeft: {
                    x: N.x,
                    y: N.y
                  },
                  topRight: {
                    x: S.x,
                    y: S.y
                  }
                });
                var U = p(b, S), W = p(b, N), Y = p(b, I), O = k(b, v, U, W, Y);
                return O && G.push({
                  alignmentPattern: {
                    x: O.alignmentPattern.x,
                    y: O.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: Y.x,
                    y: Y.y
                  },
                  topLeft: {
                    x: W.x,
                    y: W.y
                  },
                  topRight: {
                    x: U.x,
                    y: U.y
                  },
                  dimension: O.dimension
                }), G.length === 0 ? null : G;
              }
              n.locate = h;
              function k(b, m, D, v, _) {
                var w, y, M;
                try {
                  w = f(v, D, _, b), y = w.dimension, M = w.moduleSize;
                } catch {
                  return null;
                }
                var L = {
                  x: D.x - v.x + _.x,
                  y: D.y - v.y + _.y
                }, S = (a(v, _) + a(v, D)) / 2 / M, N = 1 - 3 / S, I = {
                  x: v.x + N * (L.x - v.x),
                  y: v.y + N * (L.y - v.y)
                }, q = m.map(function(U) {
                  var W = (U.top.startX + U.top.endX + U.bottom.startX + U.bottom.endX) / 4, Y = (U.top.y + U.bottom.y + 1) / 2;
                  if (b.get(Math.floor(W), Math.floor(Y))) {
                    var O = [
                      U.top.endX - U.top.startX,
                      U.bottom.endX - U.bottom.startX,
                      U.bottom.y - U.top.y + 1
                    ];
                    c(O) / O.length;
                    var R = B({
                      x: Math.floor(W),
                      y: Math.floor(Y)
                    }, [
                      1,
                      1,
                      1
                    ], b), $ = R + a({
                      x: W,
                      y: Y
                    }, I);
                    return {
                      x: W,
                      y: Y,
                      score: $
                    };
                  }
                }).filter(function(U) {
                  return !!U;
                }).sort(function(U, W) {
                  return U.score - W.score;
                }), G = S >= 15 && q.length ? q[0] : I;
                return {
                  alignmentPattern: G,
                  dimension: y
                };
              }
            }
          ]).default;
        });
      })(qo);
      var Di = qo.exports;
      const pi = z9(Di);
      function bn(t, e, x) {
        const n = t.slice();
        return n[42] = e[x], n;
      }
      function mi(t) {
        let e;
        return {
          c() {
            e = d("a"), e.innerHTML = '<span class="material-icons svelte-dewqnh">arrow_back</span>', u(e, "class", "back-btn svelte-dewqnh"), u(e, "href", "#/home");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function hi(t) {
        let e, x, n;
        return {
          c() {
            e = d("button"), e.innerHTML = '<span class="material-icons svelte-dewqnh">arrow_back</span>', u(e, "class", "back-btn svelte-dewqnh");
          },
          m(o, r) {
            T(o, e, r), x || (n = H(e, "click", t[15]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function vi(t) {
        let e;
        return {
          c() {
            e = j("New encounter");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function ki(t) {
        let e;
        return {
          c() {
            e = j("Encounter saved");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function _i(t) {
        let e;
        return {
          c() {
            e = j("Join group");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function bi(t) {
        let e;
        return {
          c() {
            e = j("Confirm exchange");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function wi(t) {
        let e;
        return {
          c() {
            e = j("Scan their code");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function gi(t) {
        let e, x, n, o, r, l, s, a, c = t[12] ? "Saving\u2026" : "Join group", E, f, A, C, F, B;
        function p(b, m) {
          return b[11]?.name ? Ni : ji;
        }
        let h = p(t), k = h(t);
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Join group encounter?", n = g(), k.c(), o = g(), r = d("div"), l = d("button"), s = d("span"), s.textContent = "groups", a = g(), E = j(c), f = g(), A = d("button"), C = j("Cancel"), u(x, "class", "section-label svelte-dewqnh"), u(s, "class", "material-icons svelte-dewqnh"), u(l, "class", "btn-filled svelte-dewqnh"), l.disabled = t[12], u(A, "class", "btn-text svelte-dewqnh"), A.disabled = t[12], u(r, "class", "ongoing-actions svelte-dewqnh"), u(e, "class", "card pad svelte-dewqnh");
          },
          m(b, m) {
            T(b, e, m), i(e, x), i(e, n), k.m(e, null), i(e, o), i(e, r), i(r, l), i(l, s), i(l, a), i(l, E), i(r, f), i(r, A), i(A, C), F || (B = [
              H(l, "click", t[18]),
              H(A, "click", t[15])
            ], F = true);
          },
          p(b, m) {
            h === (h = p(b)) && k ? k.p(b, m) : (k.d(1), k = h(b), k && (k.c(), k.m(e, o))), m[0] & 4096 && c !== (c = b[12] ? "Saving\u2026" : "Join group") && z(E, c), m[0] & 4096 && (l.disabled = b[12]), m[0] & 4096 && (A.disabled = b[12]);
          },
          d(b) {
            b && P(e), k.d(), F = false, a0(B);
          }
        };
      }
      function yi(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p = t[12] && wn();
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Ongoing relationship?", n = g(), o = d("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", r = g(), l = d("div"), s = d("button"), a = d("span"), a.textContent = "favorite", c = j(`
          Yes, ongoing`), E = g(), f = d("button"), A = j("No, one off"), C = g(), p && p.c(), u(x, "class", "section-label svelte-dewqnh"), u(o, "class", "help-text svelte-dewqnh"), u(a, "class", "material-icons svelte-dewqnh"), u(s, "class", "btn-filled svelte-dewqnh"), s.disabled = t[12], u(f, "class", "btn-outlined svelte-dewqnh"), f.disabled = t[12], u(l, "class", "ongoing-actions svelte-dewqnh"), u(e, "class", "card pad svelte-dewqnh");
          },
          m(h, k) {
            T(h, e, k), i(e, x), i(e, n), i(e, o), i(e, r), i(e, l), i(l, s), i(s, a), i(s, c), i(l, E), i(l, f), i(f, A), i(e, C), p && p.m(e, null), F || (B = [
              H(s, "click", t[25]),
              H(f, "click", t[26])
            ], F = true);
          },
          p(h, k) {
            k[0] & 4096 && (s.disabled = h[12]), k[0] & 4096 && (f.disabled = h[12]), h[12] ? p || (p = wn(), p.c(), p.m(e, null)) : p && (p.d(1), p = null);
          },
          d(h) {
            h && P(e), p && p.d(), F = false, a0(B);
          }
        };
      }
      function Pi(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A, C, F, B, p, h, k, b, m, D, v = A0(t[10]), _ = [];
        for (let y = 0; y < v.length; y += 1) _[y] = gn(bn(t, v, y));
        let w = t[12] && yn();
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Your partner's number", n = g(), o = d("p"), r = j(t[9]), l = g(), s = d("p"), s.textContent = "Ask your partner to confirm this matches their screen.", a = g(), c = d("section"), E = d("p"), E.textContent = "Let your partner scan your code", f = g(), A = d("div"), C = d("div"), F = g(), B = d("section"), p = d("p"), p.textContent = "What is your number?", h = g(), k = d("p"), k.textContent = "Tap the number shown on your screen above.", b = g(), m = d("div");
            for (let y = 0; y < _.length; y += 1) _[y].c();
            D = g(), w && w.c(), u(x, "class", "section-label svelte-dewqnh"), u(o, "class", "confirm-number svelte-dewqnh"), u(s, "class", "help-text svelte-dewqnh"), u(e, "class", "card pad svelte-dewqnh"), u(E, "class", "section-label svelte-dewqnh"), u(C, "class", "qr-inner svelte-dewqnh"), u(A, "class", "qr-frame svelte-dewqnh"), u(c, "class", "card pad svelte-dewqnh"), u(p, "class", "section-label svelte-dewqnh"), u(k, "class", "help-text svelte-dewqnh"), u(m, "class", "choices svelte-dewqnh"), u(B, "class", "card pad svelte-dewqnh");
          },
          m(y, M) {
            T(y, e, M), i(e, x), i(e, n), i(e, o), i(o, r), i(e, l), i(e, s), T(y, a, M), T(y, c, M), i(c, E), i(c, f), i(c, A), i(A, C), C.innerHTML = t[2], T(y, F, M), T(y, B, M), i(B, p), i(B, h), i(B, k), i(B, b), i(B, m);
            for (let L = 0; L < _.length; L += 1) _[L] && _[L].m(m, null);
            i(B, D), w && w.m(B, null);
          },
          p(y, M) {
            if (M[0] & 512 && z(r, y[9]), M[0] & 4 && (C.innerHTML = y[2]), M[0] & 70656) {
              v = A0(y[10]);
              let L;
              for (L = 0; L < v.length; L += 1) {
                const S = bn(y, v, L);
                _[L] ? _[L].p(S, M) : (_[L] = gn(S), _[L].c(), _[L].m(m, null));
              }
              for (; L < _.length; L += 1) _[L].d(1);
              _.length = v.length;
            }
            y[12] ? w || (w = yn(), w.c(), w.m(B, null)) : w && (w.d(1), w = null);
          },
          d(y) {
            y && (P(e), P(a), P(c), P(F), P(B)), O0(_, y), w && w.d();
          }
        };
      }
      function Ti(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = d("div"), x = d("video"), n = g(), o = d("canvas"), r = g(), l = d("div"), l.innerHTML = '<div class="scan-box svelte-dewqnh"></div> <p class="scan-hint svelte-dewqnh">Point at your partner&#39;s QR code</p>', x.playsInline = true, u(x, "class", "camera-video svelte-dewqnh"), u(o, "class", "camera-canvas svelte-dewqnh"), u(l, "class", "scan-overlay svelte-dewqnh"), u(e, "class", "camera-wrap svelte-dewqnh");
          },
          m(s, a) {
            T(s, e, a), i(e, x), t[22](x), i(e, n), i(e, o), t[23](o), i(e, r), i(e, l);
          },
          p: X,
          d(s) {
            s && P(e), t[22](null), t[23](null);
          }
        };
      }
      function Si(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A = t[6] ? "Hide" : "Enter code manually", C, F, B, p, h, k = t[5] && Pn(t), b = t[8] && Tn(t);
        function m(w, y) {
          return w[2] ? Ri : qi;
        }
        let D = m(t), v = D(t), _ = t[6] && Sn(t);
        return {
          c() {
            k && k.c(), e = g(), b && b.c(), x = g(), n = d("section"), o = d("p"), o.textContent = "Show this to your partner", r = g(), l = d("div"), v.c(), s = g(), a = d("div"), c = d("button"), c.innerHTML = `<span class="material-icons svelte-dewqnh">qr_code_scanner</span>
        Scan Their Code`, E = g(), f = d("button"), C = j(A), F = g(), _ && _.c(), B = I0(), u(o, "class", "section-label svelte-dewqnh"), u(l, "class", "qr-frame svelte-dewqnh"), u(n, "class", "card pad svelte-dewqnh"), u(c, "class", "btn-filled svelte-dewqnh"), u(f, "class", "btn-text svelte-dewqnh"), u(a, "class", "scan-actions svelte-dewqnh");
          },
          m(w, y) {
            k && k.m(w, y), T(w, e, y), b && b.m(w, y), T(w, x, y), T(w, n, y), i(n, o), i(n, r), i(n, l), v.m(l, null), T(w, s, y), T(w, a, y), i(a, c), i(a, E), i(a, f), i(f, C), T(w, F, y), _ && _.m(w, y), T(w, B, y), p || (h = [
              H(c, "click", t[13]),
              H(f, "click", t[19])
            ], p = true);
          },
          p(w, y) {
            w[5] ? k ? k.p(w, y) : (k = Pn(w), k.c(), k.m(e.parentNode, e)) : k && (k.d(1), k = null), w[8] ? b ? b.p(w, y) : (b = Tn(w), b.c(), b.m(x.parentNode, x)) : b && (b.d(1), b = null), D === (D = m(w)) && v ? v.p(w, y) : (v.d(1), v = D(w), v && (v.c(), v.m(l, null))), y[0] & 64 && A !== (A = w[6] ? "Hide" : "Enter code manually") && z(C, A), w[6] ? _ ? _.p(w, y) : (_ = Sn(w), _.c(), _.m(B.parentNode, B)) : _ && (_.d(1), _ = null);
          },
          d(w) {
            w && (P(e), P(x), P(n), P(s), P(a), P(F), P(B)), k && k.d(w), b && b.d(w), v.d(), _ && _.d(w), p = false, a0(h);
          }
        };
      }
      function Mi(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-dewqnh">check_circle</span> <p class="saved-title svelte-dewqnh">Encounter recorded</p> <p class="muted svelte-dewqnh">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-dewqnh">View encounters</a>', u(e, "class", "card pad saved-card svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Ii(t) {
        let e, x, n, o, r;
        return {
          c() {
            e = d("section"), x = d("p"), n = j(t[1]), o = g(), r = d("a"), r.textContent = "\u2190 Back", u(x, "class", "error svelte-dewqnh"), u(r, "href", "#/home"), u(r, "class", "btn-text svelte-dewqnh"), u(e, "class", "card pad svelte-dewqnh");
          },
          m(l, s) {
            T(l, e, s), i(e, x), i(x, n), i(e, o), i(e, r);
          },
          p(l, s) {
            s[0] & 2 && z(n, l[1]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Li(t) {
        let e;
        return {
          c() {
            e = d("div"), e.innerHTML = '<div class="spinner svelte-dewqnh"></div> <p class="muted svelte-dewqnh">Generating your code\u2026</p>', u(e, "class", "center-fill svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function ji(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Unnamed group encounter", u(e, "class", "help-text svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Ni(t) {
        let e, x = t[11].name + "", n;
        return {
          c() {
            e = d("p"), n = j(x), u(e, "class", "confirm-group-name svelte-dewqnh");
          },
          m(o, r) {
            T(o, e, r), i(e, n);
          },
          p(o, r) {
            r[0] & 2048 && x !== (x = o[11].name + "") && z(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function wn(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", u(e, "class", "muted saving-hint svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function gn(t) {
        let e, x = t[42] + "", n, o, r;
        function l() {
          return t[24](t[42]);
        }
        return {
          c() {
            e = d("button"), n = j(x), u(e, "class", "choice-btn svelte-dewqnh"), e.disabled = t[12];
          },
          m(s, a) {
            T(s, e, a), i(e, n), o || (r = H(e, "click", l), o = true);
          },
          p(s, a) {
            t = s, a[0] & 1024 && x !== (x = t[42] + "") && z(n, x), a[0] & 4096 && (e.disabled = t[12]);
          },
          d(s) {
            s && P(e), o = false, r();
          }
        };
      }
      function yn(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", u(e, "class", "muted saving-hint svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Pn(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = g(), o = j(t[5]), u(x, "class", "material-icons svelte-dewqnh"), u(e, "class", "alert-banner svelte-dewqnh");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l[0] & 32 && z(o, r[5]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function Tn(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = g(), o = j(t[8]), u(x, "class", "material-icons svelte-dewqnh"), u(e, "class", "alert-banner svelte-dewqnh");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l[0] & 256 && z(o, r[8]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function qi(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Generating\u2026", u(e, "class", "muted svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Ri(t) {
        let e;
        return {
          c() {
            e = d("div"), u(e, "class", "qr-inner svelte-dewqnh");
          },
          m(x, n) {
            T(x, e, n), e.innerHTML = t[2];
          },
          p(x, n) {
            n[0] & 4 && (e.innerHTML = x[2]);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Sn(t) {
        let e, x, n, o, r, l, s, a, c, E, f, A = t[8] && Mn(t);
        return {
          c() {
            e = d("section"), x = d("p"), x.textContent = "Paste their QR payload", n = g(), o = d("textarea"), r = g(), A && A.c(), l = g(), s = d("button"), a = j("Continue"), u(x, "class", "section-label svelte-dewqnh"), u(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), u(o, "rows", "3"), u(o, "class", "svelte-dewqnh"), u(s, "class", "btn-filled svelte-dewqnh"), s.disabled = c = !t[7].trim(), u(e, "class", "card pad svelte-dewqnh");
          },
          m(C, F) {
            T(C, e, F), i(e, x), i(e, n), i(e, o), t0(o, t[7]), i(e, r), A && A.m(e, null), i(e, l), i(e, s), i(s, a), E || (f = [
              H(o, "input", t[20]),
              H(o, "keydown", t[21]),
              H(s, "click", t[14])
            ], E = true);
          },
          p(C, F) {
            F[0] & 128 && t0(o, C[7]), C[8] ? A ? A.p(C, F) : (A = Mn(C), A.c(), A.m(e, l)) : A && (A.d(1), A = null), F[0] & 128 && c !== (c = !C[7].trim()) && (s.disabled = c);
          },
          d(C) {
            C && P(e), A && A.d(), E = false, a0(f);
          }
        };
      }
      function Mn(t) {
        let e, x;
        return {
          c() {
            e = d("p"), x = j(t[8]), u(e, "class", "error-text svelte-dewqnh");
          },
          m(n, o) {
            T(n, e, o), i(e, x);
          },
          p(n, o) {
            o[0] & 256 && z(x, n[8]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Oi(t) {
        let e, x, n, o, r, l, s, a;
        e = new H0({});
        function c(k, b) {
          return k[0] === "scanning" || k[0] === "confirm-group" ? hi : mi;
        }
        let E = c(t), f = E(t);
        function A(k, b) {
          return k[0] === "scanning" ? wi : k[0] === "confirm" || k[0] === "ongoing?" ? bi : k[0] === "confirm-group" ? _i : k[0] === "saved" ? ki : vi;
        }
        let C = A(t), F = C(t);
        function B(k, b) {
          if (k[0] === "loading") return Li;
          if (k[0] === "error") return Ii;
          if (k[0] === "saved") return Mi;
          if (k[0] === "showQR") return Si;
          if (k[0] === "scanning") return Ti;
          if (k[0] === "confirm") return Pi;
          if (k[0] === "ongoing?") return yi;
          if (k[0] === "confirm-group") return gi;
        }
        let p = B(t), h = p && p(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), f.c(), r = g(), l = d("h1"), F.c(), s = g(), h && h.c(), u(l, "class", "svelte-dewqnh"), u(o, "class", "page-header svelte-dewqnh"), u(n, "class", "svelte-dewqnh");
          },
          m(k, b) {
            k0(e, k, b), T(k, x, b), T(k, n, b), i(n, o), f.m(o, null), i(o, r), i(o, l), F.m(l, null), i(n, s), h && h.m(n, null), a = true;
          },
          p(k, b) {
            E === (E = c(k)) && f ? f.p(k, b) : (f.d(1), f = E(k), f && (f.c(), f.m(o, r))), C !== (C = A(k)) && (F.d(1), F = C(k), F && (F.c(), F.m(l, null))), p === (p = B(k)) && h ? h.p(k, b) : (h && h.d(1), h = p && p(k), h && (h.c(), h.m(n, null)));
          },
          i(k) {
            a || (d0(e.$$.fragment, k), a = true);
          },
          o(k) {
            C0(e.$$.fragment, k), a = false;
          },
          d(k) {
            k && (P(x), P(n)), _0(e, k), f.d(), F.d(), h && h.d();
          }
        };
      }
      function px(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function In(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((x, n) => x - n);
      }
      function Hi(t, e, x) {
        let n = "loading", o = null, r = null, l = "", s = 0, a = "", c = null, E = null, f = null, A = null, C = null, F = false, B = false, p = "", h = null, k = null, b = null, m = 0, D = [], v = null, _ = "", w = null, y = "", M = false;
        y0(async () => {
          if (!P0()) {
            E0("/");
            return;
          }
          try {
            const Q = Dl(), x0 = de(), r0 = Math.floor(Date.now() / 1e3);
            r = Q.privateKey, s = px(Q.publicKey), l = `1|${$0(Q.publicKey)}|${r0}|${e0(x0)}`, x(2, a = await oe.toString(l, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#000000",
                light: "#ffffff"
              }
            })), x(0, n = "showQR");
          } catch (Q) {
            x(1, o = Q.message), x(0, n = "error");
          }
        }), zn(() => {
          S();
        });
        async function L() {
          if (x(5, C = null), F = false, !navigator.mediaDevices?.getUserMedia) {
            x(5, C = "Camera not available. This page must be opened over HTTPS to use the camera."), x(0, n = "showQR");
            return;
          }
          x(0, n = "scanning"), await new Promise((Q) => setTimeout(Q, 50));
          try {
            f = await navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "environment",
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              }
            }), x(3, c.srcObject = f, c), await c.play(), N();
          } catch (Q) {
            x(5, C = Q.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + Q.message), S(), x(0, n = "showQR");
          }
        }
        function S() {
          A && (cancelAnimationFrame(A), A = null), f && (f.getTracks().forEach((Q) => Q.stop()), f = null), F = false;
        }
        function N() {
          if (!f || !c || c.readyState < 2) {
            A = requestAnimationFrame(N);
            return;
          }
          const Q = c.videoWidth, x0 = c.videoHeight;
          if (!Q || !x0) {
            A = requestAnimationFrame(N);
            return;
          }
          x(4, E.width = Q, E), x(4, E.height = x0, E);
          const r0 = E.getContext("2d");
          r0.drawImage(c, 0, 0, Q, x0);
          const B0 = r0.getImageData(0, 0, Q, x0), u0 = pi(B0.data, Q, x0, {
            inversionAttempts: "dontInvert"
          });
          if (u0 && !F) {
            F = true, q(u0.data);
            return;
          }
          A = requestAnimationFrame(N);
        }
        function I(Q) {
          const x0 = Q.trim().split("|"), r0 = parseInt(x0[0], 10);
          if (!isNaN(r0) && r0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if (x0.length !== 4 || x0[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, B0, , u0] = x0;
          if (!B0 || B0.length < 10) throw new Error("Invalid QR payload");
          if (!u0 || u0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: no(B0),
            contactIdBytes: b0(u0)
          };
        }
        function q(Q) {
          const x0 = Q.trim();
          if (x0.startsWith("2|")) {
            try {
              const r0 = ot(x0);
              if (!r0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - r0.timestamp > 86400) {
                F = false, A = requestAnimationFrame(N);
                return;
              }
              S(), x(11, v = r0), _ = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group");
            } catch {
              F = false, A = requestAnimationFrame(N);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: r0, contactIdBytes: B0 } = I(Q);
            S(), k = r0, b = B0, x(9, m = px(r0)), x(10, D = In(s)), x(0, n = "confirm");
          } catch {
            F = false, A = requestAnimationFrame(N);
          }
        }
        function G() {
          x(8, h = null);
          const Q = p.trim();
          try {
            if (Q.startsWith("2|")) {
              const x0 = ot(Q);
              if (!x0) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - x0.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              x(11, v = x0), _ = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group"), x(6, B = false);
            } else {
              const { ephemeralPubkeyBytes: x0, contactIdBytes: r0 } = I(Q);
              k = x0, b = r0, x(9, m = px(x0)), x(10, D = In(s)), x(0, n = "confirm"), x(6, B = false);
            }
          } catch (x0) {
            x(8, h = x0.message);
          }
        }
        function U() {
          S(), x(11, v = null), x(0, n = "showQR"), x(6, B = false), x(8, h = null), x(7, p = "");
        }
        async function W(Q) {
          if (Q !== s) {
            x(8, h = "Wrong \u2014 that's not your number. Scan again."), x(0, n = "showQR"), x(6, B = false), x(7, p = ""), k = null, b = null;
            return;
          }
          const x0 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          w = pl(r, k), y = x0;
          const u0 = q0()?.encounters || [], Z = Kx(), i0 = e0(b), J0 = u0.some((L0) => e0(L0.theirContactId) === i0), re = Z.some((L0) => e0(L0.theirContactId) === i0 && !L0.endedAt);
          J0 && !re ? x(0, n = "ongoing?") : await Y(false);
        }
        async function Y(Q) {
          x(12, M = true);
          try {
            const x0 = de(), r0 = Z0(w, x0, 0);
            await so(e0(r0), y), Q ? await rs(w, b, y) : await ns(w, b, y), x(0, n = "saved");
          } catch (x0) {
            x(1, o = x0.message), x(0, n = "error");
          } finally {
            x(12, M = false);
          }
        }
        async function O() {
          x(12, M = true);
          try {
            const Q = b0(v.groupTokenHex), x0 = b0(v.hostContactIdHex);
            await po(Q, _, false, x0, v.name), x(0, n = "saved");
          } catch (Q) {
            x(1, o = Q.message), x(0, n = "error");
          } finally {
            x(12, M = false);
          }
        }
        const R = () => {
          x(6, B = !B), x(8, h = null);
        };
        function $() {
          p = this.value, x(7, p);
        }
        const J = (Q) => Q.key === "Enter" && !Q.shiftKey && (Q.preventDefault(), G());
        function V(Q) {
          ze[Q ? "unshift" : "push"](() => {
            c = Q, x(3, c);
          });
        }
        function l0(Q) {
          ze[Q ? "unshift" : "push"](() => {
            E = Q, x(4, E);
          });
        }
        return [
          n,
          o,
          a,
          c,
          E,
          C,
          B,
          p,
          h,
          m,
          D,
          v,
          M,
          L,
          G,
          U,
          W,
          Y,
          O,
          R,
          $,
          J,
          V,
          l0,
          (Q) => W(Q),
          () => Y(true),
          () => Y(false)
        ];
      }
      class Ui extends m0 {
        constructor(e) {
          super(), p0(this, e, Hi, Oi, F0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function zi(t) {
        let e, x, n, o, r, l = Nn(t[1].date) + "", s, a, c, E = t[0].rawTokenHex.slice(0, 12) + "", f, A, C, F, B, p, h, k, b, m, D = t[3] && Ln(t), v = t[5] && jn();
        return {
          c() {
            D && D.c(), e = g(), x = d("section"), n = d("div"), n.innerHTML = '<span class="material-icons status-icon svelte-1j7fwkt">check_circle_outline</span> <span class="status-label svelte-1j7fwkt">One-time encounter</span>', o = g(), r = d("p"), s = j(l), a = g(), c = d("p"), f = j(E), A = j("\u2026"), C = g(), F = d("section"), B = d("div"), B.innerHTML = '<span class="material-icons privacy-icon svelte-1j7fwkt">lock_outline</span> <p class="privacy-text svelte-1j7fwkt">Your note is stored encrypted and never shared.</p>', p = g(), h = d("textarea"), k = g(), v && v.c(), u(n, "class", "status-row svelte-1j7fwkt"), u(r, "class", "date svelte-1j7fwkt"), u(c, "class", "token svelte-1j7fwkt"), u(x, "class", "card pad svelte-1j7fwkt"), u(B, "class", "privacy-row svelte-1j7fwkt"), u(h, "placeholder", "Add a private note\u2026"), u(h, "rows", "5"), u(h, "class", "svelte-1j7fwkt"), u(F, "class", "card pad svelte-1j7fwkt");
          },
          m(_, w) {
            D && D.m(_, w), T(_, e, w), T(_, x, w), i(x, n), i(x, o), i(x, r), i(r, s), i(x, a), i(x, c), i(c, f), i(c, A), T(_, C, w), T(_, F, w), i(F, B), i(F, p), i(F, h), t0(h, t[4]), i(F, k), v && v.m(F, null), b || (m = [
              H(h, "input", t[7]),
              H(h, "input", t[6])
            ], b = true);
          },
          p(_, w) {
            _[3] ? D ? D.p(_, w) : (D = Ln(_), D.c(), D.m(e.parentNode, e)) : D && (D.d(1), D = null), w & 2 && l !== (l = Nn(_[1].date) + "") && z(s, l), w & 1 && E !== (E = _[0].rawTokenHex.slice(0, 12) + "") && z(f, E), w & 16 && t0(h, _[4]), _[5] ? v || (v = jn(), v.c(), v.m(F, null)) : v && (v.d(1), v = null);
          },
          d(_) {
            _ && (P(e), P(x), P(C), P(F)), D && D.d(_), v && v.d(), b = false, a0(m);
          }
        };
      }
      function Gi(t) {
        let e;
        return {
          c() {
            e = d("section"), e.innerHTML = '<p class="muted svelte-1j7fwkt">This encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-1j7fwkt">\u2190 Back to encounters</a>', u(e, "class", "card pad svelte-1j7fwkt");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Ln(t) {
        let e, x, n, o;
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "error_outline", n = g(), o = j(t[3]), u(x, "class", "material-icons svelte-1j7fwkt"), u(e, "class", "toast error-toast svelte-1j7fwkt");
          },
          m(r, l) {
            T(r, e, l), i(e, x), i(e, n), i(e, o);
          },
          p(r, l) {
            l & 8 && z(o, r[3]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function jn(t) {
        let e;
        return {
          c() {
            e = d("p"), e.textContent = "Saving\u2026", u(e, "class", "save-hint svelte-1j7fwkt");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Vi(t) {
        let e, x, n, o, r, l, s, a = t[2] ? "Not found" : "Encounter", c, E, f;
        e = new H0({});
        function A(B, p) {
          if (B[2]) return Gi;
          if (B[1]) return zi;
        }
        let C = A(t), F = C && C(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), n = d("main"), o = d("div"), r = d("a"), r.innerHTML = '<span class="material-icons svelte-1j7fwkt">arrow_back</span>', l = g(), s = d("h1"), c = j(a), E = g(), F && F.c(), u(r, "class", "back-btn svelte-1j7fwkt"), u(r, "href", "#/encounters"), u(s, "class", "svelte-1j7fwkt"), u(o, "class", "page-header svelte-1j7fwkt"), u(n, "class", "svelte-1j7fwkt");
          },
          m(B, p) {
            k0(e, B, p), T(B, x, p), T(B, n, p), i(n, o), i(o, r), i(o, l), i(o, s), i(s, c), i(n, E), F && F.m(n, null), f = true;
          },
          p(B, [p]) {
            (!f || p & 4) && a !== (a = B[2] ? "Not found" : "Encounter") && z(c, a), C === (C = A(B)) && F ? F.p(B, p) : (F && F.d(1), F = C && C(B), F && (F.c(), F.m(n, null)));
          },
          i(B) {
            f || (d0(e.$$.fragment, B), f = true);
          },
          o(B) {
            C0(e.$$.fragment, B), f = false;
          },
          d(B) {
            B && (P(x), P(n)), _0(e, B), F && F.d();
          }
        };
      }
      function Nn(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ki(t, e, x) {
        let { params: n = {} } = e, o = null, r = false, l = null, s = "", a = false, c = null;
        y0(() => {
          if (!P0()) {
            E0("/");
            return;
          }
          E();
        });
        function E() {
          const F = n.rawTokenHex;
          if (x(1, o = Ao().find((B) => e0(B.rawToken) === F) ?? null), !o) {
            x(2, r = true);
            return;
          }
          x(4, s = o.note ?? "");
        }
        function f() {
          x(5, a = s !== (o.note ?? "")), clearTimeout(c), a && (c = setTimeout(A, 1500));
        }
        async function A() {
          if (a) try {
            const F = s.trim() || null;
            await os(n.rawTokenHex, {
              note: F
            }), E(), x(5, a = false);
          } catch (F) {
            x(3, l = F.message);
          }
        }
        function C() {
          s = this.value, x(4, s);
        }
        return t.$$set = (F) => {
          "params" in F && x(0, n = F.params);
        }, [
          n,
          o,
          r,
          l,
          s,
          a,
          f,
          C
        ];
      }
      class Yi extends m0 {
        constructor(e) {
          super(), p0(this, e, Ki, Vi, F0, {
            params: 0
          });
        }
      }
      function Wi(t) {
        let e, x, n, o, r, l, s;
        e = new tr({
          props: {
            routes: t[7]
          }
        }), e.$on("routeLoaded", t[11]), n = new Tl({});
        let a = t[6] === false && qn(t), c = t[4] && Rn(t);
        return {
          c() {
            w0(e.$$.fragment), x = g(), w0(n.$$.fragment), o = g(), a && a.c(), r = g(), c && c.c(), l = I0();
          },
          m(E, f) {
            k0(e, E, f), T(E, x, f), k0(n, E, f), T(E, o, f), a && a.m(E, f), T(E, r, f), c && c.m(E, f), T(E, l, f), s = true;
          },
          p(E, f) {
            E[6] === false ? a ? a.p(E, f) : (a = qn(E), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), E[4] ? c ? c.p(E, f) : (c = Rn(E), c.c(), c.m(l.parentNode, l)) : c && (c.d(1), c = null);
          },
          i(E) {
            s || (d0(e.$$.fragment, E), d0(n.$$.fragment, E), s = true);
          },
          o(E) {
            C0(e.$$.fragment, E), C0(n.$$.fragment, E), s = false;
          },
          d(E) {
            E && (P(x), P(o), P(r), P(l)), _0(e, E), _0(n, E), a && a.d(E), c && c.d(E);
          }
        };
      }
      function Qi(t) {
        let e;
        return {
          c() {
            e = d("main"), e.textContent = "Loading\u2026", u(e, "class", "loading svelte-p13mf5");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          i: X,
          o: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Ji(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = d("main"), x = d("p"), n = j("Failed to load crypto module: "), o = j(t[3]), r = g(), l = d("p"), l.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", u(e, "class", "error svelte-p13mf5");
          },
          m(s, a) {
            T(s, e, a), i(e, x), i(x, n), i(x, o), i(e, r), i(e, l);
          },
          p(s, a) {
            a & 8 && z(o, s[3]);
          },
          i: X,
          o: X,
          d(s) {
            s && P(e);
          }
        };
      }
      function qn(t) {
        let e, x, n, o, r;
        function l(c, E) {
          return c[1] ? Zi : Xi;
        }
        let s = l(t), a = s(t);
        return {
          c() {
            e = d("div"), x = d("span"), x.textContent = "mail_outline", n = g(), o = d("span"), o.textContent = "Please verify your email address. Check your inbox for a verification link.", r = g(), a.c(), u(x, "class", "material-icons svelte-p13mf5"), u(o, "class", "verify-text svelte-p13mf5"), u(e, "class", "verify-banner svelte-p13mf5");
          },
          m(c, E) {
            T(c, e, E), i(e, x), i(e, n), i(e, o), i(e, r), a.m(e, null);
          },
          p(c, E) {
            s === (s = l(c)) && a ? a.p(c, E) : (a.d(1), a = s(c), a && (a.c(), a.m(e, null)));
          },
          d(c) {
            c && P(e), a.d();
          }
        };
      }
      function Xi(t) {
        let e, x = t[0] ? "Sending\u2026" : "Resend", n, o, r;
        return {
          c() {
            e = d("button"), n = j(x), u(e, "class", "resend-btn svelte-p13mf5"), e.disabled = t[0];
          },
          m(l, s) {
            T(l, e, s), i(e, n), o || (r = H(e, "click", t[8]), o = true);
          },
          p(l, s) {
            s & 1 && x !== (x = l[0] ? "Sending\u2026" : "Resend") && z(n, x), s & 1 && (e.disabled = l[0]);
          },
          d(l) {
            l && P(e), o = false, r();
          }
        };
      }
      function Zi(t) {
        let e;
        return {
          c() {
            e = d("span"), e.textContent = "Sent!", u(e, "class", "resend-sent svelte-p13mf5");
          },
          m(x, n) {
            T(x, e, n);
          },
          p: X,
          d(x) {
            x && P(e);
          }
        };
      }
      function Rn(t) {
        let e, x, n, o, r, l, s, a = Math.floor(t[5] / 60) + "", c, E, f = String(t[5] % 60).padStart(2, "0") + "", A, C, F, B, p, h, k, b, m;
        return {
          c() {
            e = d("div"), x = d("div"), n = d("h2"), n.textContent = "Session expiring", o = g(), r = d("p"), l = j(`You'll be logged out in
          `), s = d("strong"), c = j(a), E = j(":"), A = j(f), C = j(`
          due to inactivity.`), F = g(), B = d("div"), p = d("button"), p.textContent = "Stay logged in", h = g(), k = d("button"), k.textContent = "Log out now", u(n, "id", "idle-title"), u(n, "class", "svelte-p13mf5"), u(r, "class", "svelte-p13mf5"), u(p, "class", "btn-primary svelte-p13mf5"), u(k, "class", "btn-ghost svelte-p13mf5"), u(B, "class", "idle-actions svelte-p13mf5"), u(x, "class", "idle-dialog svelte-p13mf5"), u(e, "class", "idle-overlay svelte-p13mf5"), u(e, "role", "dialog"), u(e, "aria-modal", "true"), u(e, "aria-labelledby", "idle-title");
          },
          m(D, v) {
            T(D, e, v), i(e, x), i(x, n), i(x, o), i(x, r), i(r, l), i(r, s), i(s, c), i(s, E), i(s, A), i(r, C), i(x, F), i(x, B), i(B, p), i(B, h), i(B, k), b || (m = [
              H(p, "click", t[9]),
              H(k, "click", t[10])
            ], b = true);
          },
          p(D, v) {
            v & 32 && a !== (a = Math.floor(D[5] / 60) + "") && z(c, a), v & 32 && f !== (f = String(D[5] % 60).padStart(2, "0") + "") && z(A, f);
          },
          d(D) {
            D && P(e), b = false, a0(m);
          }
        };
      }
      function $i(t) {
        let e, x, n, o;
        const r = [
          Ji,
          Qi,
          Wi
        ], l = [];
        function s(a, c) {
          return a[3] ? 0 : a[2] ? 2 : 1;
        }
        return e = s(t), x = l[e] = r[e](t), {
          c() {
            x.c(), n = I0();
          },
          m(a, c) {
            l[e].m(a, c), T(a, n, c), o = true;
          },
          p(a, [c]) {
            let E = e;
            e = s(a), e === E ? l[e].p(a, c) : (ex(), C0(l[E], 1, 1, () => {
              l[E] = null;
            }), xx(), x = l[e], x ? x.p(a, c) : (x = l[e] = r[e](a), x.c()), d0(x, 1), x.m(n.parentNode, n));
          },
          i(a) {
            o || (d0(x), o = true);
          },
          o(a) {
            C0(x), o = false;
          },
          d(a) {
            a && P(n), l[e].d(a);
          }
        };
      }
      const On = 120;
      function ec(t, e, x) {
        let n;
        z0(t, ne, (h) => x(6, n = h));
        const o = {
          "/": bs,
          "/signup": Ps,
          "/home": Ls,
          "/encounter-exchange": Ui,
          "/encounters": Ks,
          "/encounters/:rawTokenHex": Yi,
          "/relationships/:rawTokenHex": l9,
          "/groups/:tokenHex": Ha,
          "/results": p9,
          "/change-password": v9,
          "/change-email": g9,
          "/verify-email/:token": I9,
          "/alerts": H9,
          "/settings": Ei,
          "/settings/2fa-setup": Fi
        };
        let r = false, l = false;
        async function s() {
          x(0, r = true);
          try {
            await Nl(), x(1, l = true);
          } catch {
          } finally {
            x(0, r = false);
          }
        }
        let a = false, c = null, E = false, f = On, A = null;
        function C() {
          x(5, f = On), clearInterval(A), A = setInterval(() => {
            x(5, f -= 1), f <= 0 && clearInterval(A);
          }, 1e3);
        }
        function F() {
          x(4, E = false), clearInterval(A), $l();
        }
        async function B() {
          x(4, E = false), clearInterval(A), wx(), await lo(), E0("/");
        }
        function p(h) {
          const k = h.detail.location;
          !(k === "/" || k.startsWith("/signup")) && P0() ? Zl({
            onWarnCallback: () => {
              x(4, E = true), C();
            },
            onExpiredCallback: B
          }) : (wx(), x(4, E = false), clearInterval(A));
        }
        return y0(async () => {
          try {
            await Fl(), x(2, a = true);
          } catch (h) {
            x(3, c = h.message);
          }
        }), [
          r,
          l,
          a,
          c,
          E,
          f,
          n,
          o,
          s,
          F,
          B,
          p
        ];
      }
      class xc extends m0 {
        constructor(e) {
          super(), p0(this, e, ec, $i, F0, {});
        }
      }
      "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
      new xc({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
