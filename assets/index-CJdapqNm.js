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
      function Re(t, e) {
        for (const x in e) t[x] = e[x];
        return t;
      }
      function Pn(t) {
        return t();
      }
      function Jx() {
        return /* @__PURE__ */ Object.create(null);
      }
      function s0(t) {
        t.forEach(Pn);
      }
      function wx(t) {
        return typeof t == "function";
      }
      function p0(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
      }
      let ye;
      function Wx(t, e) {
        return t === e ? true : (ye || (ye = document.createElement("a")), ye.href = e, t === ye.href);
      }
      function bo(t) {
        return Object.keys(t).length === 0;
      }
      function Tn(t, ...e) {
        if (t == null) {
          for (const n of e) n(void 0);
          return X;
        }
        const x = t.subscribe(...e);
        return x.unsubscribe ? () => x.unsubscribe() : x;
      }
      function yx(t, e, x) {
        t.$$.on_destroy.push(Tn(e, x));
      }
      function a(t, e) {
        t.appendChild(e);
      }
      function T(t, e, x) {
        t.insertBefore(e, x || null);
      }
      function P(t) {
        t.parentNode && t.parentNode.removeChild(t);
      }
      function R0(t, e) {
        for (let x = 0; x < t.length; x += 1) t[x] && t[x].d(e);
      }
      function F(t) {
        return document.createElement(t);
      }
      function R(t) {
        return document.createTextNode(t);
      }
      function y() {
        return R(" ");
      }
      function P0() {
        return R("");
      }
      function z(t, e, x, n) {
        return t.addEventListener(e, x, n), () => t.removeEventListener(e, x, n);
      }
      function z0(t) {
        return function(e) {
          return e.preventDefault(), t.call(this, e);
        };
      }
      function go(t) {
        return function(e) {
          return e.stopPropagation(), t.call(this, e);
        };
      }
      function f(t, e, x) {
        x == null ? t.removeAttribute(e) : t.getAttribute(e) !== x && t.setAttribute(e, x);
      }
      function vo(t) {
        return Array.from(t.childNodes);
      }
      function G(t, e) {
        e = "" + e, t.data !== e && (t.data = e);
      }
      function e0(t, e) {
        t.value = e ?? "";
      }
      function r0(t, e, x) {
        t.classList.toggle(e, !!x);
      }
      function wo(t, e, { bubbles: x = false, cancelable: n = false } = {}) {
        return new CustomEvent(t, {
          detail: e,
          bubbles: x,
          cancelable: n
        });
      }
      function Oe(t, e) {
        return new t(e);
      }
      let pe;
      function Ce(t) {
        pe = t;
      }
      function Qe() {
        if (!pe) throw new Error("Function called outside component initialization");
        return pe;
      }
      function O0(t) {
        Qe().$$.on_mount.push(t);
      }
      function yo(t) {
        Qe().$$.after_update.push(t);
      }
      function Sn(t) {
        Qe().$$.on_destroy.push(t);
      }
      function Po() {
        const t = Qe();
        return (e, x, { cancelable: n = false } = {}) => {
          const o = t.$$.callbacks[e];
          if (o) {
            const r = wo(e, x, {
              cancelable: n
            });
            return o.slice().forEach((l) => {
              l.call(t, r);
            }), !r.defaultPrevented;
          }
          return true;
        };
      }
      function dx(t, e) {
        const x = t.$$.callbacks[e.type];
        x && x.slice().forEach((n) => n.call(this, e));
      }
      const se = [], He = [];
      let le = [];
      const Xx = [], Mn = Promise.resolve();
      let Cx = false;
      function In() {
        Cx || (Cx = true, Mn.then(Nn));
      }
      function Ln() {
        return In(), Mn;
      }
      function Ax(t) {
        le.push(t);
      }
      const rx = /* @__PURE__ */ new Set();
      let te = 0;
      function Nn() {
        if (te !== 0) return;
        const t = pe;
        do {
          try {
            for (; te < se.length; ) {
              const e = se[te];
              te++, Ce(e), To(e.$$);
            }
          } catch (e) {
            throw se.length = 0, te = 0, e;
          }
          for (Ce(null), se.length = 0, te = 0; He.length; ) He.pop()();
          for (let e = 0; e < le.length; e += 1) {
            const x = le[e];
            rx.has(x) || (rx.add(x), x());
          }
          le.length = 0;
        } while (se.length);
        for (; Xx.length; ) Xx.pop()();
        Cx = false, rx.clear(), Ce(t);
      }
      function To(t) {
        if (t.fragment !== null) {
          t.update(), s0(t.before_update);
          const e = t.dirty;
          t.dirty = [
            -1
          ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ax);
        }
      }
      function So(t) {
        const e = [], x = [];
        le.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : x.push(n)), x.forEach((n) => n()), le = e;
      }
      const Ie = /* @__PURE__ */ new Set();
      let Q0;
      function Je() {
        Q0 = {
          r: 0,
          c: [],
          p: Q0
        };
      }
      function We() {
        Q0.r || s0(Q0.c), Q0 = Q0.p;
      }
      function f0(t, e) {
        t && t.i && (Ie.delete(t), t.i(e));
      }
      function d0(t, e, x, n) {
        if (t && t.o) {
          if (Ie.has(t)) return;
          Ie.add(t), Q0.c.push(() => {
            Ie.delete(t), n && (x && t.d(1), n());
          }), t.o(e);
        } else n && n();
      }
      function u0(t) {
        return t?.length !== void 0 ? t : Array.from(t);
      }
      function Ue(t, e) {
        const x = {}, n = {}, o = {
          $$scope: 1
        };
        let r = t.length;
        for (; r--; ) {
          const l = t[r], s = e[r];
          if (s) {
            for (const c in l) c in s || (n[c] = 1);
            for (const c in s) o[c] || (x[c] = s[c], o[c] = 1);
            t[r] = s;
          } else for (const c in l) o[c] = 1;
        }
        for (const l in n) l in x || (x[l] = void 0);
        return x;
      }
      function qe(t) {
        return typeof t == "object" && t !== null ? t : {};
      }
      function g0(t) {
        t && t.c();
      }
      function m0(t, e, x) {
        const { fragment: n, after_update: o } = t.$$;
        n && n.m(e, x), Ax(() => {
          const r = t.$$.on_mount.map(Pn).filter(wx);
          t.$$.on_destroy ? t.$$.on_destroy.push(...r) : s0(r), t.$$.on_mount = [];
        }), o.forEach(Ax);
      }
      function h0(t, e) {
        const x = t.$$;
        x.fragment !== null && (So(x.after_update), s0(x.on_destroy), x.fragment && x.fragment.d(e), x.on_destroy = x.fragment = null, x.ctx = []);
      }
      function Mo(t, e) {
        t.$$.dirty[0] === -1 && (se.push(t), In(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
      }
      function k0(t, e, x, n, o, r, l = null, s = [
        -1
      ]) {
        const c = pe;
        Ce(t);
        const i = t.$$ = {
          fragment: null,
          ctx: [],
          props: r,
          update: X,
          not_equal: o,
          bound: Jx(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (c ? c.$$.context : [])),
          callbacks: Jx(),
          dirty: s,
          skip_bound: false,
          root: e.target || c.$$.root
        };
        l && l(i.root);
        let B = false;
        if (i.ctx = x ? x(t, e.props || {}, (E, u, ...A) => {
          const d = A.length ? A[0] : u;
          return i.ctx && o(i.ctx[E], i.ctx[E] = d) && (!i.skip_bound && i.bound[E] && i.bound[E](d), B && Mo(t, E)), u;
        }) : [], i.update(), B = true, s0(i.before_update), i.fragment = n ? n(i.ctx) : false, e.target) {
          if (e.hydrate) {
            const E = vo(e.target);
            i.fragment && i.fragment.l(E), E.forEach(P);
          } else i.fragment && i.fragment.c();
          e.intro && f0(t.$$.fragment), m0(t, e.target, e.anchor), Nn();
        }
        Ce(c);
      }
      class _0 {
        $$ = void 0;
        $$set = void 0;
        $destroy() {
          h0(this, 1), this.$destroy = X;
        }
        $on(e, x) {
          if (!wx(x)) return X;
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return n.push(x), () => {
            const o = n.indexOf(x);
            o !== -1 && n.splice(o, 1);
          };
        }
        $set(e) {
          this.$$set && !bo(e) && (this.$$.skip_bound = true, this.$$set(e), this.$$.skip_bound = false);
        }
      }
      const Io = "4";
      typeof window < "u" && (window.__svelte || (window.__svelte = {
        v: /* @__PURE__ */ new Set()
      })).v.add(Io);
      const ne = [];
      function Rn(t, e) {
        return {
          subscribe: Xe(t, e).subscribe
        };
      }
      function Xe(t, e = X) {
        let x;
        const n = /* @__PURE__ */ new Set();
        function o(s) {
          if (p0(t, s) && (t = s, x)) {
            const c = !ne.length;
            for (const i of n) i[1](), ne.push(i, t);
            if (c) {
              for (let i = 0; i < ne.length; i += 2) ne[i][0](ne[i + 1]);
              ne.length = 0;
            }
          }
        }
        function r(s) {
          o(s(t));
        }
        function l(s, c = X) {
          const i = [
            s,
            c
          ];
          return n.add(i), n.size === 1 && (x = e(o, r) || X), s(t), () => {
            n.delete(i), n.size === 0 && x && (x(), x = null);
          };
        }
        return {
          set: o,
          update: r,
          subscribe: l
        };
      }
      function On(t, e, x) {
        const n = !Array.isArray(t), o = n ? [
          t
        ] : t;
        if (!o.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
        const r = e.length < 2;
        return Rn(x, (l, s) => {
          let c = false;
          const i = [];
          let B = 0, E = X;
          const u = () => {
            if (B) return;
            E();
            const d = e(n ? i[0] : i, l, s);
            r ? l(d) : E = wx(d) ? d : X;
          }, A = o.map((d, C) => Tn(d, (D) => {
            i[C] = D, B &= ~(1 << C), c && u();
          }, () => {
            B |= 1 << C;
          }));
          return c = true, u(), function() {
            s0(A), E(), c = false;
          };
        });
      }
      function Lo(t, e) {
        if (t instanceof RegExp) return {
          keys: false,
          pattern: t
        };
        var x, n, o, r, l = [], s = "", c = t.split("/");
        for (c[0] || c.shift(); o = c.shift(); ) x = o[0], x === "*" ? (l.push("wild"), s += "/(.*)") : x === ":" ? (n = o.indexOf("?", 1), r = o.indexOf(".", 1), l.push(o.substring(1, ~n ? n : ~r ? r : o.length)), s += ~n && !~r ? "(?:/([^/]+?))?" : "/([^/]+?)", ~r && (s += (~n ? "?" : "") + "\\" + o.substring(r))) : s += "/" + o;
        return {
          keys: l,
          pattern: new RegExp("^" + s + "/?$", "i")
        };
      }
      function No(t) {
        let e, x, n;
        const o = [
          t[2]
        ];
        var r = t[0];
        function l(s, c) {
          let i = {};
          for (let B = 0; B < o.length; B += 1) i = Re(i, o[B]);
          return c !== void 0 && c & 4 && (i = Re(i, Ue(o, [
            qe(s[2])
          ]))), {
            props: i
          };
        }
        return r && (e = Oe(r, l(t)), e.$on("routeEvent", t[7])), {
          c() {
            e && g0(e.$$.fragment), x = P0();
          },
          m(s, c) {
            e && m0(e, s, c), T(s, x, c), n = true;
          },
          p(s, c) {
            if (c & 1 && r !== (r = s[0])) {
              if (e) {
                Je();
                const i = e;
                d0(i.$$.fragment, 1, 0, () => {
                  h0(i, 1);
                }), We();
              }
              r ? (e = Oe(r, l(s, c)), e.$on("routeEvent", s[7]), g0(e.$$.fragment), f0(e.$$.fragment, 1), m0(e, x.parentNode, x)) : e = null;
            } else if (r) {
              const i = c & 4 ? Ue(o, [
                qe(s[2])
              ]) : {};
              e.$set(i);
            }
          },
          i(s) {
            n || (e && f0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && d0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && P(x), e && h0(e, s);
          }
        };
      }
      function Ro(t) {
        let e, x, n;
        const o = [
          {
            params: t[1]
          },
          t[2]
        ];
        var r = t[0];
        function l(s, c) {
          let i = {};
          for (let B = 0; B < o.length; B += 1) i = Re(i, o[B]);
          return c !== void 0 && c & 6 && (i = Re(i, Ue(o, [
            c & 2 && {
              params: s[1]
            },
            c & 4 && qe(s[2])
          ]))), {
            props: i
          };
        }
        return r && (e = Oe(r, l(t)), e.$on("routeEvent", t[6])), {
          c() {
            e && g0(e.$$.fragment), x = P0();
          },
          m(s, c) {
            e && m0(e, s, c), T(s, x, c), n = true;
          },
          p(s, c) {
            if (c & 1 && r !== (r = s[0])) {
              if (e) {
                Je();
                const i = e;
                d0(i.$$.fragment, 1, 0, () => {
                  h0(i, 1);
                }), We();
              }
              r ? (e = Oe(r, l(s, c)), e.$on("routeEvent", s[6]), g0(e.$$.fragment), f0(e.$$.fragment, 1), m0(e, x.parentNode, x)) : e = null;
            } else if (r) {
              const i = c & 6 ? Ue(o, [
                c & 2 && {
                  params: s[1]
                },
                c & 4 && qe(s[2])
              ]) : {};
              e.$set(i);
            }
          },
          i(s) {
            n || (e && f0(e.$$.fragment, s), n = true);
          },
          o(s) {
            e && d0(e.$$.fragment, s), n = false;
          },
          d(s) {
            s && P(x), e && h0(e, s);
          }
        };
      }
      function Oo(t) {
        let e, x, n, o;
        const r = [
          Ro,
          No
        ], l = [];
        function s(c, i) {
          return c[1] ? 0 : 1;
        }
        return e = s(t), x = l[e] = r[e](t), {
          c() {
            x.c(), n = P0();
          },
          m(c, i) {
            l[e].m(c, i), T(c, n, i), o = true;
          },
          p(c, [i]) {
            let B = e;
            e = s(c), e === B ? l[e].p(c, i) : (Je(), d0(l[B], 1, 1, () => {
              l[B] = null;
            }), We(), x = l[e], x ? x.p(c, i) : (x = l[e] = r[e](c), x.c()), f0(x, 1), x.m(n.parentNode, n));
          },
          i(c) {
            o || (f0(x), o = true);
          },
          o(c) {
            d0(x), o = false;
          },
          d(c) {
            c && P(n), l[e].d(c);
          }
        };
      }
      function Zx() {
        const t = window.location.href.indexOf("#/");
        let e = t > -1 ? window.location.href.substr(t + 1) : "/";
        const x = e.indexOf("?");
        let n = "";
        return x > -1 && (n = e.substr(x + 1), e = e.substr(0, x)), {
          location: e,
          querystring: n
        };
      }
      const Px = Rn(null, function(e) {
        e(Zx());
        const x = () => {
          e(Zx());
        };
        return window.addEventListener("hashchange", x, false), function() {
          window.removeEventListener("hashchange", x, false);
        };
      }), Ho = On(Px, (t) => t.location);
      On(Px, (t) => t.querystring);
      const $x = Xe(void 0);
      async function B0(t) {
        if (!t || t.length < 1 || t.charAt(0) != "/" && t.indexOf("#/") !== 0) throw Error("Invalid parameter location");
        await Ln(), history.replaceState({
          ...history.state,
          __svelte_spa_router_scrollX: window.scrollX,
          __svelte_spa_router_scrollY: window.scrollY
        }, void 0), window.location.hash = (t.charAt(0) == "#" ? "" : "#") + t;
      }
      function Uo(t) {
        t ? window.scrollTo(t.__svelte_spa_router_scrollX, t.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
      }
      function qo(t, e, x) {
        let { routes: n = {} } = e, { prefix: o = "" } = e, { restoreScrollState: r = false } = e;
        class l {
          constructor(_, b) {
            if (!b || typeof b != "function" && (typeof b != "object" || b._sveltesparouter !== true)) throw Error("Invalid component object");
            if (!_ || typeof _ == "string" && (_.length < 1 || _.charAt(0) != "/" && _.charAt(0) != "*") || typeof _ == "object" && !(_ instanceof RegExp)) throw Error('Invalid value for "path" argument - strings must start with / or *');
            const { pattern: g, keys: v } = Lo(_);
            this.path = _, typeof b == "object" && b._sveltesparouter === true ? (this.component = b.component, this.conditions = b.conditions || [], this.userData = b.userData, this.props = b.props || {}) : (this.component = () => Promise.resolve(b), this.conditions = [], this.props = {}), this._pattern = g, this._keys = v;
          }
          match(_) {
            if (o) {
              if (typeof o == "string") if (_.startsWith(o)) _ = _.substr(o.length) || "/";
              else return null;
              else if (o instanceof RegExp) {
                const w = _.match(o);
                if (w && w[0]) _ = _.substr(w[0].length) || "/";
                else return null;
              }
            }
            const b = this._pattern.exec(_);
            if (b === null) return null;
            if (this._keys === false) return b;
            const g = {};
            let v = 0;
            for (; v < this._keys.length; ) {
              try {
                g[this._keys[v]] = decodeURIComponent(b[v + 1] || "") || null;
              } catch {
                g[this._keys[v]] = null;
              }
              v++;
            }
            return g;
          }
          async checkConditions(_) {
            for (let b = 0; b < this.conditions.length; b++) if (!await this.conditions[b](_)) return false;
            return true;
          }
        }
        const s = [];
        n instanceof Map ? n.forEach((p, _) => {
          s.push(new l(_, p));
        }) : Object.keys(n).forEach((p) => {
          s.push(new l(p, n[p]));
        });
        let c = null, i = null, B = {};
        const E = Po();
        async function u(p, _) {
          await Ln(), E(p, _);
        }
        let A = null, d = null;
        r && (d = (p) => {
          p.state && (p.state.__svelte_spa_router_scrollY || p.state.__svelte_spa_router_scrollX) ? A = p.state : A = null;
        }, window.addEventListener("popstate", d), yo(() => {
          Uo(A);
        }));
        let C = null, D = null;
        const m = Px.subscribe(async (p) => {
          C = p;
          let _ = 0;
          for (; _ < s.length; ) {
            const b = s[_].match(p.location);
            if (!b) {
              _++;
              continue;
            }
            const g = {
              route: s[_].path,
              location: p.location,
              querystring: p.querystring,
              userData: s[_].userData,
              params: b && typeof b == "object" && Object.keys(b).length ? b : null
            };
            if (!await s[_].checkConditions(g)) {
              x(0, c = null), D = null, u("conditionsFailed", g);
              return;
            }
            u("routeLoading", Object.assign({}, g));
            const v = s[_].component;
            if (D != v) {
              v.loading ? (x(0, c = v.loading), D = v, x(1, i = v.loadingParams), x(2, B = {}), u("routeLoaded", Object.assign({}, g, {
                component: c,
                name: c.name,
                params: i
              }))) : (x(0, c = null), D = null);
              const w = await v();
              if (p != C) return;
              x(0, c = w && w.default || w), D = v;
            }
            b && typeof b == "object" && Object.keys(b).length ? x(1, i = b) : x(1, i = null), x(2, B = s[_].props), u("routeLoaded", Object.assign({}, g, {
              component: c,
              name: c.name,
              params: i
            })).then(() => {
              $x.set(i);
            });
            return;
          }
          x(0, c = null), D = null, $x.set(void 0);
        });
        Sn(() => {
          m(), d && window.removeEventListener("popstate", d);
        });
        function h(p) {
          dx.call(this, t, p);
        }
        function k(p) {
          dx.call(this, t, p);
        }
        return t.$$set = (p) => {
          "routes" in p && x(3, n = p.routes), "prefix" in p && x(4, o = p.prefix), "restoreScrollState" in p && x(5, r = p.restoreScrollState);
        }, t.$$.update = () => {
          t.$$.dirty & 32 && (history.scrollRestoration = r ? "manual" : "auto");
        }, [
          c,
          i,
          B,
          n,
          o,
          r,
          h,
          k
        ];
      }
      class jo extends _0 {
        constructor(e) {
          super(), k0(this, e, qo, Oo, p0, {
            routes: 3,
            prefix: 4,
            restoreScrollState: 5
          });
        }
      }
      const zo = "/assets/peachsafe_core_wasm_bg-BlIpoZNB.wasm", Go = async (t = {}, e) => {
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
      function Ko(t, e) {
        const x = l0.aesGcmDecrypt(t, e);
        if (x[2]) throw C0(x[1]);
        return C0(x[0]);
      }
      function Vo(t, e) {
        const x = l0.aesGcmEncrypt(t, e);
        if (x[2]) throw C0(x[1]);
        return C0(x[0]);
      }
      function Yo(t, e) {
        const x = Sx(t, l0.__wbindgen_malloc, l0.__wbindgen_realloc), n = me, o = l0.argon2idDerive(x, n, e);
        if (o[2]) throw C0(o[1]);
        return C0(o[0]);
      }
      function Qo(t) {
        const e = l0.deriveAlertKey(t);
        if (e[2]) throw C0(e[1]);
        return C0(e[0]);
      }
      function Jo(t, e, x) {
        const n = Sx(x, l0.__wbindgen_malloc, l0.__wbindgen_realloc), o = me, r = l0.deriveEncounterToken(t, e, n, o);
        if (r[2]) throw C0(r[1]);
        return C0(r[0]);
      }
      function Wo(t) {
        const e = l0.ed25519PubkeyFromSeed(t);
        if (e[2]) throw C0(e[1]);
        return C0(e[0]);
      }
      function Xo(t, e) {
        const x = l0.ed25519Sign(t, e);
        if (x[2]) throw C0(x[1]);
        return C0(x[0]);
      }
      function Zo() {
        const t = l0.generateEphemeralKeypair();
        if (t[2]) throw C0(t[1]);
        return C0(t[0]);
      }
      function $o(t) {
        return l0.generateRandomBytes(t);
      }
      function Hn(t) {
        return l0.sha256(t);
      }
      function er(t, e, x) {
        const n = Sx(t, l0.__wbindgen_malloc, l0.__wbindgen_realloc), o = me, r = l0.solvePoW(n, o, e, x);
        if (r[2]) throw C0(r[1]);
        return C0(r[0]);
      }
      function xr(t) {
        return typeof t == "function";
      }
      function tr(t) {
        const e = t;
        return typeof e == "object" && e !== null;
      }
      function nr(t) {
        return typeof t == "string";
      }
      function or(t) {
        return t === void 0;
      }
      function rr(t, e) {
        throw new Error(Un(t, e));
      }
      function sr() {
        return _e(function(t, e, x) {
          return t.call(e, x);
        }, arguments);
      }
      function lr(t) {
        return t.crypto;
      }
      function cr() {
        return _e(function(t, e) {
          t.getRandomValues(e);
        }, arguments);
      }
      function ar(t) {
        return t.length;
      }
      function ir(t) {
        return t.msCrypto;
      }
      function Er() {
        return new Object();
      }
      function ur(t) {
        return new Uint8Array(t >>> 0);
      }
      function fr(t) {
        return t.node;
      }
      function Br(t) {
        return t.process;
      }
      function dr(t, e, x) {
        Uint8Array.prototype.set.call(Tx(t, e), x);
      }
      function Cr() {
        return _e(function(t, e) {
          t.randomFillSync(e);
        }, arguments);
      }
      function Ar() {
        return _e(function() {
          return module.require;
        }, arguments);
      }
      function Fr() {
        return _e(function(t, e, x) {
          return Reflect.set(t, e, x);
        }, arguments);
      }
      function Dr(t, e, x) {
        t.set(Tx(e, x));
      }
      function pr() {
        const t = typeof global > "u" ? null : global;
        return Ze(t) ? 0 : ke(t);
      }
      function mr() {
        const t = typeof globalThis > "u" ? null : globalThis;
        return Ze(t) ? 0 : ke(t);
      }
      function hr() {
        const t = typeof self > "u" ? null : self;
        return Ze(t) ? 0 : ke(t);
      }
      function kr() {
        const t = typeof window > "u" ? null : window;
        return Ze(t) ? 0 : ke(t);
      }
      function _r(t, e, x) {
        return t.subarray(e >>> 0, x >>> 0);
      }
      function br(t) {
        return t.versions;
      }
      function gr(t) {
        return t;
      }
      function vr(t, e) {
        return Tx(t, e);
      }
      function wr(t, e) {
        return Un(t, e);
      }
      function yr() {
        const t = l0.__wbindgen_externrefs, e = t.grow(4);
        t.set(0, void 0), t.set(e + 0, void 0), t.set(e + 1, null), t.set(e + 2, true), t.set(e + 3, false);
      }
      function ke(t) {
        const e = l0.__externref_table_alloc();
        return l0.__wbindgen_externrefs.set(e, t), e;
      }
      function Tx(t, e) {
        return t = t >>> 0, Ae().subarray(t / 1, t / 1 + e);
      }
      function Un(t, e) {
        return t = t >>> 0, Tr(t, e);
      }
      let Pe = null;
      function Ae() {
        return (Pe === null || Pe.byteLength === 0) && (Pe = new Uint8Array(l0.memory.buffer)), Pe;
      }
      function _e(t, e) {
        try {
          return t.apply(this, e);
        } catch (x) {
          const n = ke(x);
          l0.__wbindgen_exn_store(n);
        }
      }
      function Ze(t) {
        return t == null;
      }
      function Sx(t, e, x) {
        if (x === void 0) {
          const s = Fe.encode(t), c = e(s.length, 1) >>> 0;
          return Ae().subarray(c, c + s.length).set(s), me = s.length, c;
        }
        let n = t.length, o = e(n, 1) >>> 0;
        const r = Ae();
        let l = 0;
        for (; l < n; l++) {
          const s = t.charCodeAt(l);
          if (s > 127) break;
          r[o + l] = s;
        }
        if (l !== n) {
          l !== 0 && (t = t.slice(l)), o = x(o, n, n = l + t.length * 3, 1) >>> 0;
          const s = Ae().subarray(o + l, o + n), c = Fe.encodeInto(t, s);
          l += c.written, o = x(o, n, l, 1) >>> 0;
        }
        return me = l, o;
      }
      function C0(t) {
        const e = l0.__wbindgen_externrefs.get(t);
        return l0.__externref_table_dealloc(t), e;
      }
      let Le = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Le.decode();
      const Pr = 2146435072;
      let sx = 0;
      function Tr(t, e) {
        return sx += e, sx >= Pr && (Le = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Le.decode(), sx = e), Le.decode(Ae().subarray(t, t + e));
      }
      const Fe = new TextEncoder();
      "encodeInto" in Fe || (Fe.encodeInto = function(t, e) {
        const x = Fe.encode(t);
        return e.set(x), {
          read: t.length,
          written: x.length
        };
      });
      let me = 0, l0;
      function Sr(t) {
        l0 = t;
      }
      URL = globalThis.URL;
      const Mr = await Go({
        "./peachsafe_core_wasm_bg.js": {
          __wbg_crypto_38df2bab126b63dc: lr,
          __wbg_process_44c7a14e11e9f69e: Br,
          __wbg_versions_276b2795b1c6a219: br,
          __wbg_node_84ea875411254db1: fr,
          __wbg_require_b4edbdcf3e2a1ef0: Ar,
          __wbg_call_a24592a6f349a97e: sr,
          __wbg_msCrypto_bd5a034af96bcba6: ir,
          __wbg_randomFillSync_6c25eac9869eb53c: Cr,
          __wbg_getRandomValues_c44a50d8cfdaebeb: cr,
          __wbg_new_aa8d0fa9762c29bd: Er,
          __wbg_length_9f1775224cf1d815: ar,
          __wbg_prototypesetcall_a6b02eb00b0f4ce2: dr,
          __wbg_new_with_length_8c854e41ea4dae9b: ur,
          __wbg_subarray_f8ca46a25b1f5e0d: _r,
          __wbg_set_3d484eb794afec82: Dr,
          __wbg_static_accessor_GLOBAL_THIS_602256ae5c8f42cf: mr,
          __wbg_static_accessor_SELF_e445c1c7484aecc3: hr,
          __wbg_static_accessor_GLOBAL_8cfadc87a297ca02: pr,
          __wbg_static_accessor_WINDOW_f20e8576ef1e0f17: kr,
          __wbg_set_022bee52d0b05b19: Fr,
          __wbg___wbindgen_throw_6b64449b9b9ed33c: rr,
          __wbg___wbindgen_is_object_63322ec0cd6ea4ef: tr,
          __wbg___wbindgen_is_string_6df3bf7ef1164ed3: nr,
          __wbg___wbindgen_is_function_3baa9db1a987f47d: xr,
          __wbg___wbindgen_is_undefined_29a43b4d42920abd: or,
          __wbindgen_init_externref_table: yr,
          __wbindgen_cast_0000000000000001: gr,
          __wbindgen_cast_0000000000000002: vr,
          __wbindgen_cast_0000000000000003: wr
        }
      }, zo), { memory: Ir, aesGcmDecrypt: Lr, aesGcmEncrypt: Nr, argon2idDerive: Rr, deriveAlertKey: Or, deriveEncounterToken: Hr, ed25519PubkeyFromSeed: Ur, ed25519Sign: qr, ed25519Verify: jr, generateEphemeralKeypair: zr, generateRandomBytes: Gr, generateUserKeypair: Kr, main: Vr, serializePublicKey: Yr, sha256: Qr, solvePoW: Jr, __wbindgen_exn_store: Wr, __externref_table_alloc: Xr, __wbindgen_externrefs: Zr, __externref_table_dealloc: $r, __wbindgen_malloc: es, __wbindgen_realloc: xs, __wbindgen_free: ts, __wbindgen_start: qn } = Mr, ns = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: Xr,
        __externref_table_dealloc: $r,
        __wbindgen_exn_store: Wr,
        __wbindgen_externrefs: Zr,
        __wbindgen_free: ts,
        __wbindgen_malloc: es,
        __wbindgen_realloc: xs,
        __wbindgen_start: qn,
        aesGcmDecrypt: Lr,
        aesGcmEncrypt: Nr,
        argon2idDerive: Rr,
        deriveAlertKey: Or,
        deriveEncounterToken: Hr,
        ed25519PubkeyFromSeed: Ur,
        ed25519Sign: qr,
        ed25519Verify: jr,
        generateEphemeralKeypair: zr,
        generateRandomBytes: Gr,
        generateUserKeypair: Kr,
        main: Vr,
        memory: Ir,
        serializePublicKey: Yr,
        sha256: Qr,
        solvePoW: Jr
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Sr(ns);
      qn();
      let Fx = false;
      async function os() {
        Fx || (Fx = true);
      }
      function w0() {
        if (!Fx) throw new Error("crypto not initialised \u2014 call initCrypto() first");
      }
      function D0(t) {
        const e = new Uint8Array(t.length / 2);
        for (let x = 0; x < t.length; x += 2) e[x / 2] = parseInt(t.slice(x, x + 2), 16);
        return e;
      }
      function Z(t) {
        return Array.from(t).map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function be(t) {
        return w0(), $o(t);
      }
      async function q0(t, e) {
        return w0(), await new Promise((x) => setTimeout(x, 0)), Yo(t, e);
      }
      function ge(t, e) {
        return w0(), Vo(t, e);
      }
      function $e(t, e) {
        return w0(), Ko(t, e);
      }
      function rs() {
        return w0(), Zo();
      }
      function ss(t, e, x) {
        return w0(), Jo(t, e, x);
      }
      function jn(t) {
        return w0(), Wo(t);
      }
      function zn(t, e) {
        return w0(), Xo(t, e);
      }
      function ls(t) {
        return w0(), Hn(t);
      }
      function Gn(t) {
        return w0(), Qo(t);
      }
      function cs(t, e, x) {
        return w0(), er(t, e, x);
      }
      function W0(t) {
        let e = "";
        for (let x = 0; x < t.length; x++) e += String.fromCharCode(t[x]);
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function Kn(t) {
        const x = (t + "===".slice((t.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(atob(x), (n) => n.charCodeAt(0));
      }
      function as(t, e, x, n) {
        const o = n && n.trim() ? encodeURIComponent(n.trim()) : "";
        return `2|${t}|${e}|${x}|${o}`;
      }
      function et(t) {
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
      function J0(t, e, x) {
        w0();
        const n = new Uint8Array(68);
        return n.set(t, 0), n.set(e, 32), n[64] = x >>> 24 & 255, n[65] = x >>> 16 & 255, n[66] = x >>> 8 & 255, n[67] = x & 255, Hn(n);
      }
      const X0 = Xe("ok");
      let Vn = "ok";
      X0.subscribe((t) => {
        Vn = t;
      });
      let je = null;
      function is() {
        clearTimeout(je), X0.set("retrying");
      }
      function Es() {
        Vn !== "ok" && (clearTimeout(je), X0.set("reconnected"), je = setTimeout(() => X0.set("ok"), 3e3));
      }
      function xt() {
        clearTimeout(je), X0.set("down");
      }
      function tt(t) {
        let e;
        function x(r, l) {
          if (r[0] === "retrying") return Bs;
          if (r[0] === "down") return fs;
          if (r[0] === "reconnected") return us;
        }
        let n = x(t), o = n && n(t);
        return {
          c() {
            e = F("div"), o && o.c(), f(e, "class", "banner svelte-69ejub"), f(e, "role", "status"), f(e, "aria-live", "polite"), r0(e, "retrying", t[0] === "retrying"), r0(e, "down", t[0] === "down"), r0(e, "reconnected", t[0] === "reconnected");
          },
          m(r, l) {
            T(r, e, l), o && o.m(e, null);
          },
          p(r, l) {
            n !== (n = x(r)) && (o && o.d(1), o = n && n(r), o && (o.c(), o.m(e, null))), l & 1 && r0(e, "retrying", r[0] === "retrying"), l & 1 && r0(e, "down", r[0] === "down"), l & 1 && r0(e, "reconnected", r[0] === "reconnected");
          },
          d(r) {
            r && P(e), o && o.d();
          }
        };
      }
      function us(t) {
        let e;
        return {
          c() {
            e = R("Reconnected");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function fs(t) {
        let e;
        return {
          c() {
            e = R("Server unavailable. Please try again later.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Bs(t) {
        let e;
        return {
          c() {
            e = R("Server unreachable \u2014 retrying\u2026");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function ds(t) {
        let e, x = t[0] !== "ok" && tt(t);
        return {
          c() {
            x && x.c(), e = P0();
          },
          m(n, o) {
            x && x.m(n, o), T(n, e, o);
          },
          p(n, [o]) {
            n[0] !== "ok" ? x ? x.p(n, o) : (x = tt(n), x.c(), x.m(e.parentNode, e)) : x && (x.d(1), x = null);
          },
          i: X,
          o: X,
          d(n) {
            n && P(e), x && x.d(n);
          }
        };
      }
      function Cs(t, e, x) {
        let n;
        return yx(t, X0, (o) => x(0, n = o)), [
          n
        ];
      }
      class As extends _0 {
        constructor(e) {
          super(), k0(this, e, Cs, ds, p0, {});
        }
      }
      const A0 = "https://dark-danice-dcindustries-b1434ee0.koyeb.app", lx = [
        1e3,
        2e3,
        4e3
      ], nt = /* @__PURE__ */ new Set([
        502,
        503,
        504
      ]);
      async function de(t, e = {}) {
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
            if (!nt.has(o.status) || n >= lx.length) return nt.has(o.status) ? xt() : Es(), o;
          } catch (o) {
            if (n >= lx.length) throw xt(), o;
          }
          is(), await new Promise((o) => setTimeout(o, lx[n]));
        }
      }
      let Z0 = null, Mx = null, Ix = null;
      function H0() {
        return Z0 !== null;
      }
      function Lx(t) {
        Mx = t;
      }
      function $0() {
        return Mx;
      }
      function Yn(t) {
        Ix = t;
      }
      function Fs() {
        return Ix;
      }
      function Ds() {
        Z0 = null, Mx = null, Ix = null;
      }
      async function Nx(t) {
        const e = await de(`${A0}/v1/prelogin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: t
          })
        });
        if (!e.ok) throw new Error(await F0(e));
        return e.json();
      }
      async function ps(t, e, x) {
        const n = await de(`${A0}/v1/signup`, {
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
        if (!n.ok) throw new Error(await F0(n));
        const o = await n.json();
        return Z0 = o.session_token, o;
      }
      async function ot(t, e, x = null) {
        const n = {
          username: t,
          auth_signature: e
        };
        x && (n.otp = x);
        const o = await de(`${A0}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(n)
        });
        if (!o.ok) throw new Error(await F0(o));
        const r = await o.json();
        return r.requires_otp || (Z0 = r.session_token), r;
      }
      async function ms() {
        const t = await y0(`${A0}/v1/web/totp/status`);
        if (!t.ok) throw new Error(await F0(t));
        return t.json();
      }
      async function hs() {
        const t = await y0(`${A0}/v1/web/totp/setup`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await F0(t));
        return t.json();
      }
      async function ks(t, e) {
        const x = await y0(`${A0}/v1/web/totp/confirm`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            secret: t,
            otp: e
          })
        });
        if (!x.ok) throw new Error(await F0(x));
        return x.json();
      }
      async function _s() {
        const t = await y0(`${A0}/v1/web/totp`, {
          method: "DELETE"
        });
        if (!t.ok) throw new Error(await F0(t));
      }
      async function bs() {
        const t = await y0(`${A0}/v1/web/totp/backup-codes/regenerate`, {
          method: "POST"
        });
        if (!t.ok) throw new Error(await F0(t));
        return t.json();
      }
      async function gs() {
        const t = await y0(`${A0}/v1/web/totp/backup-codes/count`);
        if (!t.ok) throw new Error(await F0(t));
        return t.json();
      }
      async function Qn() {
        if (!Z0) return;
        const t = Z0;
        Ds(), fetch(`${A0}/v1/web/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${t}`
          }
        }).catch(() => {
        });
      }
      async function vs() {
        const t = await y0(`${A0}/v1/web/user/blob`);
        if (!t.ok) throw new Error(await F0(t));
        return t.json();
      }
      async function ws(t, e) {
        const x = await y0(`${A0}/v1/web/user/blob`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blob: t,
            expected_version: e
          })
        });
        if (!x.ok) throw new Error(await F0(x));
        return x.json();
      }
      async function ys() {
        const t = await y0(`${A0}/v1/web/user/encounters`);
        if (!t.ok) throw new Error(await F0(t));
        return t.json();
      }
      async function Jn(t, e) {
        const x = await y0(`${A0}/v1/web/user/encounters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: t,
            date: e
          })
        });
        if (!x.ok) throw new Error(await F0(x));
        return x.json();
      }
      async function Ps(t, e, x, n) {
        const o = await y0(`${A0}/v1/web/user/change-password`, {
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
        if (!o.ok) throw new Error(await F0(o));
      }
      async function Ts(t) {
        const e = await de(`${A0}/v1/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            tokens: t
          })
        });
        if (!e.ok) throw new Error(await F0(e));
        return e.json();
      }
      async function Ss(t) {
        const e = await y0(`${A0}/v1/web/user/encounters/by-token/${t}`, {
          method: "DELETE"
        });
        if (!e.ok && e.status !== 404) throw new Error(await F0(e));
      }
      async function Ms(t) {
        const e = await de(`${A0}/v1/submit`, {
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
        const r = await F0(e), l = new Error(r);
        throw l.statusCode = e.status, l.serverTime = x, l.powDifficulty = o, l;
      }
      function y0(t, e = {}) {
        return de(t, {
          ...e,
          headers: {
            Authorization: `Bearer ${Z0}`,
            ...e.headers ?? {}
          }
        });
      }
      async function F0(t) {
        try {
          return (await t.json()).error ?? `HTTP ${t.status}`;
        } catch {
          return `HTTP ${t.status}`;
        }
      }
      const rt = 15 * 60 * 1e3, Is = 2 * 60 * 1e3, Wn = [
        "mousedown",
        "mousemove",
        "keydown",
        "scroll",
        "touchstart",
        "pointerdown"
      ];
      let Dx = null, px = null, Rx = null, Ox = null, ex = false, ve = false;
      function Hx() {
        clearTimeout(Dx), clearTimeout(px), px = setTimeout(() => {
          ve = true, Rx?.();
        }, rt - Is), Dx = setTimeout(() => Ox?.(), rt);
      }
      function Xn() {
        ex && !ve && Hx();
      }
      function Ls({ onWarnCallback: t, onExpiredCallback: e }) {
        mx(), Rx = t, Ox = e, ex = true, ve = false;
        for (const x of Wn) document.addEventListener(x, Xn, {
          passive: true
        });
        Hx();
      }
      function mx() {
        clearTimeout(Dx), clearTimeout(px);
        for (const t of Wn) document.removeEventListener(t, Xn);
        ex = false, ve = false, Rx = null, Ox = null;
      }
      function Ns() {
        ve = false, ex && Hx();
      }
      const Rs = 12 * 1024, Zn = Rs * 0.75, $n = Xe(false), eo = 18262, xo = 65535, Os = 45, N0 = [
        "chlamydia",
        "gonorrhoea",
        "hiv",
        "syphilis",
        "hsv2",
        "hepatitis_b"
      ], Ux = {
        chlamydia: "Chlamydia",
        gonorrhoea: "Gonorrhoea",
        hiv: "HIV",
        syphilis: "Syphilis",
        hsv2: "HSV-2 (Herpes)",
        hepatitis_b: "Hepatitis B"
      }, to = {
        chlamydia: "chl",
        gonorrhoea: "gon",
        hiv: "hiv",
        syphilis: "syp",
        hsv2: "hsv",
        hepatitis_b: "hep"
      };
      function oe(t) {
        const e = (/* @__PURE__ */ new Date(t + "T00:00:00Z")).getTime();
        return Math.floor(e / 864e5) - eo;
      }
      function re(t) {
        const e = (eo + t) * 864e5;
        return new Date(e).toISOString().slice(0, 10);
      }
      const Hs = 393;
      function qx(t) {
        const e = t.encounters, x = t.results || [], n = t.receivedAlerts || [], o = t.relationships || [], r = t.groupEncounters || [], l = e.length, s = x.length, c = n.length, i = o.length, B = r.length, E = new Uint8Array(35 + l * 70 + 2 + s * 4 + 2 + c * 36 + 2 + i * 137 + 2 + B * Hs);
        let u = 0;
        E[u++] = 1, E.set(t.myContactId, u), u += 32, E[u++] = l >> 8 & 255, E[u++] = l & 255;
        for (const d of e) {
          E.set(d.rawToken, u), u += 32, E.set(d.theirContactId, u), u += 32;
          const C = oe(d.date);
          E[u++] = C >> 8 & 255, E[u++] = C & 255, E[u++] = d.queryIndex >> 8 & 255, E[u++] = d.queryIndex & 255, E[u++] = d.submitIndex >> 8 & 255, E[u++] = d.submitIndex & 255;
        }
        E[u++] = s >> 8 & 255, E[u++] = s & 255;
        for (const d of x) {
          const C = oe(d.date);
          E[u++] = C >> 8 & 255, E[u++] = C & 255, E[u++] = d.hasNotified ? 1 : 0;
          let D = 0;
          for (let m = 0; m < N0.length; m++) (d.positiveDiseases || []).includes(N0[m]) && (D |= 1 << m);
          E[u++] = D;
        }
        E[u++] = c >> 8 & 255, E[u++] = c & 255;
        for (const d of n) {
          E.set(d.rawToken, u), u += 32;
          const C = oe(d.testDate);
          E[u++] = C >> 8 & 255, E[u++] = C & 255;
          let D = 0;
          for (let h = 0; h < N0.length; h++) (d.diseases || []).includes(N0[h]) && (D |= 1 << h);
          E[u++] = D;
          let m = 0;
          d.viewed && (m |= 1), d.labVerified && (m |= 2), E[u++] = m;
        }
        E[u++] = i >> 8 & 255, E[u++] = i & 255;
        for (const d of o) {
          E.set(d.rawToken, u), u += 32, E.set(d.theirContactId, u), u += 32;
          const C = oe(d.createdAt);
          E[u++] = C >> 8 & 255, E[u++] = C & 255;
          const D = d.endedAt ? oe(d.endedAt) : xo;
          E[u++] = D >> 8 & 255, E[u++] = D & 255;
          let m = 0;
          d.archived && (m |= 1), E[u++] = m, E[u++] = d.queryIndex >> 8 & 255, E[u++] = d.queryIndex & 255, E[u++] = d.submitIndex >> 8 & 255, E[u++] = d.submitIndex & 255;
          const h = d.name ? new TextEncoder().encode(d.name).slice(0, 64) : new Uint8Array(0);
          E.set(h, u), u += 64;
        }
        E[u++] = B >> 8 & 255, E[u++] = B & 255;
        const A = new TextEncoder();
        for (const d of r) {
          E.set(d.token, u), u += 32;
          const C = oe(d.date);
          E[u++] = C >> 8 & 255, E[u++] = C & 255;
          const D = d.createdAt >>> 0;
          E[u++] = D >>> 24 & 255, E[u++] = D >>> 16 & 255, E[u++] = D >>> 8 & 255, E[u++] = D & 255, E[u++] = d.isHost ? 1 : 0, E[u++] = d.tokenIndex >> 8 & 255, E[u++] = d.tokenIndex & 255, E.set(d.hostContactId, u), u += 32;
          const m = d.name ? A.encode(d.name).slice(0, 64) : new Uint8Array(0);
          E.set(m, u), u += 64;
          const h = d.note ? A.encode(d.note).slice(0, 256) : new Uint8Array(0);
          E.set(h, u), u += 256;
        }
        return E;
      }
      function Us(t) {
        let e = 0;
        const x = t[e++];
        if (x !== 1) throw new Error(`Unknown blob version: ${x}`);
        const n = t.slice(e, e + 32);
        e += 32;
        const o = t[e] << 8 | t[e + 1];
        e += 2;
        const r = [];
        for (let C = 0; C < o; C++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const m = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e] << 8 | t[e + 1];
          e += 2;
          const p = t[e] << 8 | t[e + 1];
          e += 2, r.push({
            rawToken: D,
            theirContactId: m,
            date: re(h),
            queryIndex: k,
            submitIndex: p
          });
        }
        const l = [], s = t[e] << 8 | t[e + 1];
        e += 2;
        for (let C = 0; C < s; C++) {
          const D = t[e] << 8 | t[e + 1];
          e += 2;
          const m = t[e++], h = t[e++], k = !!(m & 1), p = N0.filter((_, b) => h & 1 << b);
          l.push({
            date: re(D),
            hasNotified: k,
            positiveDiseases: p
          });
        }
        const c = [], i = t[e] << 8 | t[e + 1];
        e += 2;
        for (let C = 0; C < i; C++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const h = t[e++], k = t[e++], p = N0.filter((g, v) => h & 1 << v), _ = !!(k & 1), b = !!(k & 2);
          c.push({
            rawToken: D,
            testDate: re(m),
            diseases: p,
            viewed: _,
            labVerified: b
          });
        }
        const B = [], E = t[e] << 8 | t[e + 1];
        e += 2;
        for (let C = 0; C < E; C++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const m = t.slice(e, e + 32);
          e += 32;
          const h = t[e] << 8 | t[e + 1];
          e += 2;
          const k = t[e] << 8 | t[e + 1];
          e += 2;
          const p = t[e++], _ = t[e] << 8 | t[e + 1];
          e += 2;
          const b = t[e] << 8 | t[e + 1];
          e += 2;
          const g = t.slice(e, e + 64);
          e += 64;
          const v = k === xo ? null : re(k), w = !!(p & 1), I = g.indexOf(0), M = I === -1 ? 64 : I, S = M > 0 ? new TextDecoder().decode(g.slice(0, M)) : null;
          B.push({
            rawToken: D,
            theirContactId: m,
            createdAt: re(h),
            endedAt: v,
            archived: w,
            queryIndex: _,
            submitIndex: b,
            name: S
          });
        }
        const u = [], A = t[e] << 8 | t[e + 1];
        e += 2;
        const d = new TextDecoder();
        for (let C = 0; C < A; C++) {
          const D = t.slice(e, e + 32);
          e += 32;
          const m = t[e] << 8 | t[e + 1];
          e += 2;
          const h = (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
          e += 4;
          const k = t[e++], p = t[e] << 8 | t[e + 1];
          e += 2;
          const _ = t.slice(e, e + 32);
          e += 32;
          const b = t.slice(e, e + 64);
          e += 64;
          const g = t.slice(e, e + 256);
          e += 256;
          const v = !!(k & 1), w = b.indexOf(0), I = w === -1 ? 64 : w, M = I > 0 ? d.decode(b.slice(0, I)) : null, S = g.indexOf(0), N = S === -1 ? 256 : S, L = N > 0 ? d.decode(g.slice(0, N)) : null;
          u.push({
            token: D,
            date: re(m),
            createdAt: h,
            isHost: v,
            tokenIndex: p,
            hostContactId: _,
            name: M,
            note: L
          });
        }
        return {
          myContactId: n,
          encounters: r,
          results: l,
          receivedAlerts: c,
          relationships: B,
          groupEncounters: u
        };
      }
      let Y = null, ae = 0, hx = false;
      X0.subscribe((t) => {
        t === "reconnected" && hx && Y && $0() && b0().catch(() => {
        });
      });
      function L0() {
        return Y;
      }
      function ie() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.myContactId;
      }
      function Ne() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.results || [];
      }
      function st() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return (Y.receivedAlerts || []).map(({ testDate: t, diseases: e, viewed: x, labVerified: n }) => ({
          testDate: t,
          diseases: e,
          viewed: x,
          labVerified: n
        }));
      }
      function jx() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.relationships || [];
      }
      function no() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        return Y.groupEncounters || [];
      }
      async function oo() {
        const { blob: t, blob_version: e } = await vs();
        if (!t) {
          Y = {
            myContactId: be(32),
            encounters: [],
            results: [],
            receivedAlerts: [],
            relationships: [],
            groupEncounters: []
          }, ae = 0, await b0();
          return;
        }
        const x = $e($0(), D0(t));
        Y = Us(x), ae = e, await xl();
      }
      async function qs(t, e, x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          encounters: [
            ...Y.encounters,
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
          await b0();
        } catch (n) {
          throw el(t, e, x), n;
        }
      }
      async function js(t, e, x) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          relationships: [
            ...Y.relationships || [],
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
        }, await b0();
      }
      async function ro(t, e, x, n, o) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const r = Math.floor(Date.now() / 1e3);
        Y = {
          ...Y,
          groupEncounters: [
            ...Y.groupEncounters || [],
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
        }, await b0();
      }
      async function lt(t, e) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (Y.groupEncounters || []).map((n) => Z(n.token) === t ? {
          ...n,
          ...e
        } : n);
        Y = {
          ...Y,
          groupEncounters: x
        }, await b0();
      }
      async function zs(t) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = (Y.groupEncounters || []).filter((x) => Z(x.token) !== t);
        Y = {
          ...Y,
          groupEncounters: e
        }, await b0();
      }
      async function Te(t, e) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (Y.relationships || []).map((n) => Z(n.rawToken) === t ? {
          ...n,
          ...e
        } : n);
        Y = {
          ...Y,
          relationships: x
        }, await b0();
      }
      async function Gs(t, e) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const x = (Y.results || []).length;
        return Y = {
          ...Y,
          results: [
            ...Y.results || [],
            {
              date: t,
              positiveDiseases: e,
              hasNotified: false
            }
          ]
        }, await b0(), x;
      }
      async function cx(t) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...Y.results || []
        ];
        if (t >= e.length) throw new Error("Invalid result index");
        e[t] = {
          ...e[t],
          hasNotified: true
        }, Y = {
          ...Y,
          results: e
        }, await b0();
      }
      async function Ks() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        Y = {
          ...Y,
          encounters: Y.encounters.map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          })),
          relationships: (Y.relationships || []).map((t) => ({
            ...t,
            submitIndex: t.submitIndex + 1
          }))
        }, await b0();
      }
      async function Vs(t, e, x, n) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        let o = null;
        const r = Y.encounters.map((c) => Z(c.rawToken) !== t ? c : (o = c.rawToken, {
          ...c,
          queryIndex: c.queryIndex + 1
        })), l = (Y.relationships || []).map((c) => o || Z(c.rawToken) !== t ? c : (o = c.rawToken, {
          ...c,
          queryIndex: c.queryIndex + 1
        }));
        if (!o) throw new Error("Token not found: " + t);
        const s = [
          ...Y.receivedAlerts || [],
          {
            rawToken: o,
            testDate: e,
            diseases: x,
            viewed: false,
            labVerified: !!n
          }
        ];
        Y = {
          ...Y,
          encounters: r,
          relationships: l,
          receivedAlerts: s
        }, await b0();
      }
      async function Ys(t) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = [
          ...Y.receivedAlerts || []
        ];
        if (t >= e.length) throw new Error("Invalid alert index");
        e[t] = {
          ...e[t],
          viewed: true
        }, Y = {
          ...Y,
          receivedAlerts: e
        }, await b0();
      }
      function Qs() {
        if (!Y || qx(Y).byteLength < Zn) return false;
        const e = zx();
        return Y.encounters.filter((x) => x.date < e).length >= 5;
      }
      function Js() {
        if (!Y) return 0;
        const t = zx();
        return Y.encounters.filter((e) => e.date < t).length;
      }
      async function Ws() {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const t = zx();
        Y = {
          ...Y,
          encounters: Y.encounters.filter((e) => e.date >= t)
        }, await b0();
      }
      function zx() {
        const t = /* @__PURE__ */ new Date();
        return t.setUTCFullYear(t.getUTCFullYear() - 1), t.toISOString().slice(0, 10);
      }
      function Xs(t) {
        if (!Y) throw new Error("Blob not loaded \u2014 call loadBlob() after login");
        const e = ge(t, qx(Y));
        return {
          blobHex: Z(e),
          blobVersion: ae
        };
      }
      function Zs(t) {
        ae = t;
      }
      function $s(t, e) {
        if (!t.endedAt || !e) return true;
        const n = (/* @__PURE__ */ new Date(t.endedAt + "T00:00:00Z")).getTime() + Os * 864e5;
        return (/* @__PURE__ */ new Date(e + "T00:00:00Z")).getTime() < n;
      }
      const ce = "peachsafe_pending_encounters";
      async function b0() {
        const t = qx(Y);
        $n.set(t.byteLength >= Zn);
        const e = ge($0(), t);
        try {
          const { blob_version: x } = await ws(Z(e), ae);
          ae = x, hx = false;
          try {
            localStorage.removeItem(ce);
          } catch {
          }
        } catch (x) {
          throw hx = true, x;
        }
      }
      function el(t, e, x) {
        try {
          let n = [];
          const o = localStorage.getItem(ce);
          if (o) try {
            n = JSON.parse(new TextDecoder().decode($e($0(), D0(o))));
          } catch {
            n = [];
          }
          n.push({
            rawTokenHex: Z(t),
            theirContactIdHex: Z(e),
            date: x
          });
          const r = new TextEncoder().encode(JSON.stringify(n));
          localStorage.setItem(ce, Z(ge($0(), r)));
        } catch {
        }
      }
      async function xl() {
        let t;
        try {
          const e = localStorage.getItem(ce);
          if (!e) return;
          t = JSON.parse(new TextDecoder().decode($e($0(), D0(e))));
        } catch {
          try {
            localStorage.removeItem(ce);
          } catch {
          }
          return;
        }
        if (!t.length) {
          try {
            localStorage.removeItem(ce);
          } catch {
          }
          return;
        }
        for (const e of t) Y = {
          ...Y,
          encounters: [
            ...Y.encounters,
            {
              rawToken: D0(e.rawTokenHex),
              theirContactId: D0(e.theirContactIdHex),
              date: e.date,
              queryIndex: 0,
              submitIndex: 0
            }
          ]
        };
        await b0();
      }
      let kx = "/home";
      function tl(t) {
        kx = t;
      }
      function ct() {
        const t = kx;
        return kx = "/home", t;
      }
      const so = "PeachSafe", nl = "peachsafe-backup";
      function ol(t) {
        let e, x, n, o, r, l, s, c, i, B = t[3] ? "Verifying\u2026" : "Verify", E, u, A, d, C, D, m, h = t[4] && at(t);
        return {
          c() {
            e = F("form"), x = F("p"), x.textContent = "Enter the 6-digit code from your authenticator app.", n = y(), o = F("label"), r = R(`Authenticator code
        `), l = F("input"), s = y(), h && h.c(), c = y(), i = F("button"), E = R(B), A = y(), d = F("button"), C = R("Back"), f(x, "class", "otp-prompt svelte-n8ave8"), f(l, "type", "text"), f(l, "inputmode", "numeric"), f(l, "pattern", "[0-9]*"), f(l, "maxlength", "6"), l.required = true, f(l, "autocomplete", "one-time-code"), f(l, "class", "svelte-n8ave8"), f(o, "class", "svelte-n8ave8"), f(i, "type", "submit"), i.disabled = u = t[3] || t[2].length !== 6, f(i, "class", "svelte-n8ave8"), f(d, "type", "button"), f(d, "class", "secondary svelte-n8ave8"), d.disabled = t[3], f(e, "class", "svelte-n8ave8");
          },
          m(k, p) {
            T(k, e, p), a(e, x), a(e, n), a(e, o), a(o, r), a(o, l), e0(l, t[2]), a(e, s), h && h.m(e, null), a(e, c), a(e, i), a(i, E), a(e, A), a(e, d), a(d, C), D || (m = [
              z(l, "input", t[17]),
              z(d, "click", t[14]),
              z(e, "submit", z0(t[11]))
            ], D = true);
          },
          p(k, p) {
            p & 4 && l.value !== k[2] && e0(l, k[2]), k[4] ? h ? h.p(k, p) : (h = at(k), h.c(), h.m(e, c)) : h && (h.d(1), h = null), p & 8 && B !== (B = k[3] ? "Verifying\u2026" : "Verify") && G(E, B), p & 12 && u !== (u = k[3] || k[2].length !== 6) && (i.disabled = u), p & 8 && (d.disabled = k[3]);
          },
          d(k) {
            k && P(e), h && h.d(), D = false, s0(m);
          }
        };
      }
      function rl(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u = t[3] ? "Signing in\u2026" : "Sign in", A, d, C, D = t[4] && it(t);
        return {
          c() {
            e = F("form"), x = F("label"), n = R(`Username
        `), o = F("input"), r = y(), l = F("label"), s = R(`Password
        `), c = F("input"), i = y(), D && D.c(), B = y(), E = F("button"), A = R(u), f(o, "type", "text"), o.required = true, f(o, "autocomplete", "username"), f(o, "class", "svelte-n8ave8"), f(x, "class", "svelte-n8ave8"), f(c, "type", "password"), c.required = true, f(c, "autocomplete", "current-password"), f(c, "class", "svelte-n8ave8"), f(l, "class", "svelte-n8ave8"), f(E, "type", "submit"), E.disabled = t[3], f(E, "class", "svelte-n8ave8"), f(e, "class", "svelte-n8ave8");
          },
          m(m, h) {
            T(m, e, h), a(e, x), a(x, n), a(x, o), e0(o, t[0]), a(e, r), a(e, l), a(l, s), a(l, c), e0(c, t[1]), a(e, i), D && D.m(e, null), a(e, B), a(e, E), a(E, A), d || (C = [
              z(o, "input", t[15]),
              z(c, "input", t[16]),
              z(e, "submit", z0(t[10]))
            ], d = true);
          },
          p(m, h) {
            h & 1 && o.value !== m[0] && e0(o, m[0]), h & 2 && c.value !== m[1] && e0(c, m[1]), m[4] ? D ? D.p(m, h) : (D = it(m), D.c(), D.m(e, B)) : D && (D.d(1), D = null), h & 8 && u !== (u = m[3] ? "Signing in\u2026" : "Sign in") && G(A, u), h & 8 && (E.disabled = m[3]);
          },
          d(m) {
            m && P(e), D && D.d(), d = false, s0(C);
          }
        };
      }
      function at(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[4]), f(e, "class", "error svelte-n8ave8");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o & 16 && G(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function it(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[4]), f(e, "class", "error svelte-n8ave8");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o & 16 && G(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Et(t) {
        let e, x, n;
        return {
          c() {
            e = F("p"), e.innerHTML = 'No account? <a href="#/signup">Sign up</a>', x = y(), n = F("p"), n.textContent = "Your password never leaves your device in plaintext.", f(e, "class", "link svelte-n8ave8"), f(n, "class", "privacy-note svelte-n8ave8");
          },
          m(o, r) {
            T(o, e, r), T(o, x, r), T(o, n, r);
          },
          d(o) {
            o && (P(e), P(x), P(n));
          }
        };
      }
      function ut(t) {
        let e, x, n, o, r, l, s, c, i, B = t[7] === 1 ? "" : "s", E, u, A, d, C, D, m = t[8] ? "Deleting\u2026" : "Delete old encounters", h, k, p, _, b, g, v = t[9] && ft(t);
        return {
          c() {
            e = F("div"), x = F("div"), n = F("h2"), n.textContent = "Free up storage space", o = y(), r = F("p"), l = R(`Your account is using 75% or more of its storage limit.
        You have `), s = F("strong"), c = R(t[7]), i = R(" encounter"), E = R(B), u = R(` older
        than one year. Deleting them will free up space.`), A = y(), v && v.c(), d = y(), C = F("div"), D = F("button"), h = R(m), k = y(), p = F("button"), _ = R("Keep them"), f(n, "id", "cleanup-title"), f(n, "class", "svelte-n8ave8"), f(r, "class", "svelte-n8ave8"), f(D, "class", "btn-primary svelte-n8ave8"), D.disabled = t[8], f(p, "class", "btn-ghost svelte-n8ave8"), p.disabled = t[8], f(C, "class", "cleanup-actions svelte-n8ave8"), f(x, "class", "cleanup-dialog svelte-n8ave8"), f(e, "class", "cleanup-overlay svelte-n8ave8"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "cleanup-title");
          },
          m(w, I) {
            T(w, e, I), a(e, x), a(x, n), a(x, o), a(x, r), a(r, l), a(r, s), a(s, c), a(s, i), a(s, E), a(r, u), a(x, A), v && v.m(x, null), a(x, d), a(x, C), a(C, D), a(D, h), a(C, k), a(C, p), a(p, _), b || (g = [
              z(D, "click", t[12]),
              z(p, "click", t[13])
            ], b = true);
          },
          p(w, I) {
            I & 128 && G(c, w[7]), I & 128 && B !== (B = w[7] === 1 ? "" : "s") && G(E, B), w[9] ? v ? v.p(w, I) : (v = ft(w), v.c(), v.m(x, d)) : v && (v.d(1), v = null), I & 256 && m !== (m = w[8] ? "Deleting\u2026" : "Delete old encounters") && G(h, m), I & 256 && (D.disabled = w[8]), I & 256 && (p.disabled = w[8]);
          },
          d(w) {
            w && P(e), v && v.d(), b = false, s0(g);
          }
        };
      }
      function ft(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[9]), f(e, "class", "cleanup-error svelte-n8ave8");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o & 512 && G(x, n[9]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function sl(t) {
        let e, x, n, o, r, l, s, c;
        function i(d, C) {
          return d[5] ? ol : rl;
        }
        let B = i(t), E = B(t), u = !t[5] && Et(), A = t[6] && ut(t);
        return {
          c() {
            e = F("main"), x = F("h1"), x.textContent = `${so}`, n = y(), o = F("p"), o.textContent = "Anonymous STI notification", r = y(), E.c(), l = y(), u && u.c(), s = y(), A && A.c(), c = P0(), f(x, "class", "svelte-n8ave8"), f(o, "class", "subtitle svelte-n8ave8"), f(e, "class", "svelte-n8ave8");
          },
          m(d, C) {
            T(d, e, C), a(e, x), a(e, n), a(e, o), a(e, r), E.m(e, null), a(e, l), u && u.m(e, null), T(d, s, C), A && A.m(d, C), T(d, c, C);
          },
          p(d, [C]) {
            B === (B = i(d)) && E ? E.p(d, C) : (E.d(1), E = B(d), E && (E.c(), E.m(e, l))), d[5] ? u && (u.d(1), u = null) : u || (u = Et(), u.c(), u.m(e, null)), d[6] ? A ? A.p(d, C) : (A = ut(d), A.c(), A.m(c.parentNode, c)) : A && (A.d(1), A = null);
          },
          i: X,
          o: X,
          d(d) {
            d && (P(e), P(s), P(c)), E.d(), u && u.d(), A && A.d(d);
          }
        };
      }
      function ll(t, e, x) {
        let n = "", o = "", r = "", l = false, s = null, c = false, i = null, B = null, E = false, u = 0, A = "", d = false, C = null;
        async function D() {
          x(4, s = null), x(3, l = true);
          try {
            const { challenge: w, auth_salt: I, enc_salt: M } = await Nx(n), S = await q0(o, D0(I)), N = zn(new TextEncoder().encode(w), S), L = btoa(String.fromCharCode(...N)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
            if ((await ot(n, L)).requires_otp) {
              i = L, B = M, x(5, c = true);
              return;
            }
            await h(M);
          } catch (w) {
            x(4, s = w.message);
          } finally {
            x(3, l = false);
          }
        }
        async function m() {
          x(4, s = null), x(3, l = true);
          try {
            await ot(n, i, r), await h(B);
          } catch (w) {
            x(4, s = w.message);
          } finally {
            x(3, l = false);
          }
        }
        async function h(w) {
          Yn(n);
          const I = await q0(o, D0(w));
          Lx(I), await oo(), Qs() ? (x(7, u = Js()), A = ct(), x(6, E = true)) : B0(ct());
        }
        async function k() {
          x(9, C = null), x(8, d = true);
          try {
            await Ws(), x(6, E = false), B0(A);
          } catch (w) {
            x(9, C = w.message);
          } finally {
            x(8, d = false);
          }
        }
        function p() {
          x(6, E = false), B0(A);
        }
        function _() {
          x(5, c = false), x(2, r = ""), i = null, B = null, x(4, s = null);
        }
        function b() {
          n = this.value, x(0, n);
        }
        function g() {
          o = this.value, x(1, o);
        }
        function v() {
          r = this.value, x(2, r);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          c,
          E,
          u,
          d,
          C,
          D,
          m,
          k,
          p,
          _,
          b,
          g,
          v
        ];
      }
      class cl extends _0 {
        constructor(e) {
          super(), k0(this, e, ll, sl, p0, {});
        }
      }
      function Bt(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[5]), f(e, "class", "error svelte-8n7bf9");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o & 32 && G(x, n[5]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function al(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h, k, p, _, b, g = t[4] ? "Creating account\u2026" : "Create account", v, w, I, M, S, N, L, O = t[5] && Bt(t);
        return {
          c() {
            e = F("main"), x = F("h1"), x.textContent = "Create account", n = y(), o = F("form"), r = F("label"), l = R(`Username
      `), s = F("input"), c = y(), i = F("label"), B = R(`Email
      `), E = F("input"), u = y(), A = F("label"), d = R(`Password
      `), C = F("input"), D = y(), m = F("label"), h = R(`Confirm password
      `), k = F("input"), p = y(), O && O.c(), _ = y(), b = F("button"), v = R(g), w = y(), I = F("div"), I.innerHTML = `<strong class="svelte-8n7bf9">Privacy notice</strong> <p>Your password never leaves your device in plaintext. It is used locally
      to derive your signing key via Argon2id \u2014 the server only ever sees your
      Ed25519 public key and a challenge signature.</p>`, M = y(), S = F("p"), S.innerHTML = '<a href="#/">Already have an account? Sign in</a>', f(x, "class", "svelte-8n7bf9"), f(s, "type", "text"), s.required = true, f(s, "autocomplete", "username"), f(s, "class", "svelte-8n7bf9"), f(r, "class", "svelte-8n7bf9"), f(E, "type", "email"), E.required = true, f(E, "autocomplete", "email"), f(E, "class", "svelte-8n7bf9"), f(i, "class", "svelte-8n7bf9"), f(C, "type", "password"), C.required = true, f(C, "autocomplete", "new-password"), f(C, "minlength", "12"), f(C, "class", "svelte-8n7bf9"), f(A, "class", "svelte-8n7bf9"), f(k, "type", "password"), k.required = true, f(k, "autocomplete", "new-password"), f(k, "class", "svelte-8n7bf9"), f(m, "class", "svelte-8n7bf9"), f(b, "type", "submit"), b.disabled = t[4], f(b, "class", "svelte-8n7bf9"), f(o, "class", "svelte-8n7bf9"), f(I, "class", "privacy-banner svelte-8n7bf9"), f(S, "class", "link svelte-8n7bf9"), f(e, "class", "svelte-8n7bf9");
          },
          m(H, j) {
            T(H, e, j), a(e, x), a(e, n), a(e, o), a(o, r), a(r, l), a(r, s), e0(s, t[0]), a(o, c), a(o, i), a(i, B), a(i, E), e0(E, t[1]), a(o, u), a(o, A), a(A, d), a(A, C), e0(C, t[2]), a(o, D), a(o, m), a(m, h), a(m, k), e0(k, t[3]), a(o, p), O && O.m(o, null), a(o, _), a(o, b), a(b, v), a(e, w), a(e, I), a(e, M), a(e, S), N || (L = [
              z(s, "input", t[7]),
              z(E, "input", t[8]),
              z(C, "input", t[9]),
              z(k, "input", t[10]),
              z(o, "submit", z0(t[6]))
            ], N = true);
          },
          p(H, [j]) {
            j & 1 && s.value !== H[0] && e0(s, H[0]), j & 2 && E.value !== H[1] && e0(E, H[1]), j & 4 && C.value !== H[2] && e0(C, H[2]), j & 8 && k.value !== H[3] && e0(k, H[3]), H[5] ? O ? O.p(H, j) : (O = Bt(H), O.c(), O.m(o, _)) : O && (O.d(1), O = null), j & 16 && g !== (g = H[4] ? "Creating account\u2026" : "Create account") && G(v, g), j & 16 && (b.disabled = H[4]);
          },
          i: X,
          o: X,
          d(H) {
            H && P(e), O && O.d(), N = false, s0(L);
          }
        };
      }
      function il(t, e, x) {
        let n = "", o = "", r = "", l = "", s = false, c = null;
        async function i() {
          if (x(5, c = null), r !== l) {
            x(5, c = "Passwords do not match");
            return;
          }
          if (r.length < 12) {
            x(5, c = "Password must be at least 12 characters");
            return;
          }
          x(4, s = true);
          try {
            const { auth_salt: d, enc_salt: C } = await Nx(n), D = await q0(r, D0(d)), m = Z(jn(D));
            await ps(n, o, m), Yn(n);
            const h = await q0(r, D0(C));
            Lx(h), await oo(), B0("/home");
          } catch (d) {
            x(5, c = d.message);
          } finally {
            x(4, s = false);
          }
        }
        function B() {
          n = this.value, x(0, n);
        }
        function E() {
          o = this.value, x(1, o);
        }
        function u() {
          r = this.value, x(2, r);
        }
        function A() {
          l = this.value, x(3, l);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          c,
          i,
          B,
          E,
          u,
          A
        ];
      }
      class El extends _0 {
        constructor(e) {
          super(), k0(this, e, il, al, p0, {});
        }
      }
      function ul(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h;
        return {
          c() {
            e = F("nav"), x = F("a"), n = F("span"), n.textContent = "eco", o = y(), r = F("span"), r.textContent = `${so}`, l = y(), s = F("div"), c = F("a"), c.innerHTML = '<span class="material-icons svelte-1j68yuc">people</span> <span class="tab-label svelte-1j68yuc">Encounters</span>', i = y(), B = F("a"), B.innerHTML = '<span class="material-icons svelte-1j68yuc">science</span> <span class="tab-label svelte-1j68yuc">Test Results</span>', E = y(), u = F("a"), u.innerHTML = '<span class="material-icons svelte-1j68yuc">notifications</span> <span class="tab-label svelte-1j68yuc">Alerts</span>', A = y(), d = F("a"), d.innerHTML = '<span class="material-icons svelte-1j68yuc">settings</span> <span class="tab-label svelte-1j68yuc">Settings</span>', C = y(), D = F("button"), D.textContent = "Sign out", f(n, "class", "material-icons brand-icon svelte-1j68yuc"), f(r, "class", "brand-label svelte-1j68yuc"), f(x, "href", "#/home"), f(x, "class", "brand svelte-1j68yuc"), f(c, "href", "#/encounters"), f(c, "class", "tab svelte-1j68yuc"), r0(c, "active", t[0] === "/encounters"), f(B, "href", "#/results"), f(B, "class", "tab svelte-1j68yuc"), r0(B, "active", t[0] === "/results"), f(u, "href", "#/alerts"), f(u, "class", "tab svelte-1j68yuc"), r0(u, "active", t[0] === "/alerts"), f(s, "class", "tabs svelte-1j68yuc"), f(d, "href", "#/settings"), f(d, "class", "tab svelte-1j68yuc"), f(d, "title", "Settings"), r0(d, "active", t[0] === "/settings" || t[0] === "/change-password"), f(D, "class", "signout-btn svelte-1j68yuc"), f(e, "class", "svelte-1j68yuc");
          },
          m(k, p) {
            T(k, e, p), a(e, x), a(x, n), a(x, o), a(x, r), a(e, l), a(e, s), a(s, c), a(s, i), a(s, B), a(s, E), a(s, u), a(e, A), a(e, d), a(e, C), a(e, D), m || (h = z(D, "click", t[1]), m = true);
          },
          p(k, [p]) {
            p & 1 && r0(c, "active", k[0] === "/encounters"), p & 1 && r0(B, "active", k[0] === "/results"), p & 1 && r0(u, "active", k[0] === "/alerts"), p & 1 && r0(d, "active", k[0] === "/settings" || k[0] === "/change-password");
          },
          i: X,
          o: X,
          d(k) {
            k && P(e), m = false, h();
          }
        };
      }
      function fl(t, e, x) {
        let n;
        yx(t, Ho, (r) => x(0, n = r));
        async function o() {
          await Qn(), B0("/");
        }
        return [
          n,
          o
        ];
      }
      class G0 extends _0 {
        constructor(e) {
          super(), k0(this, e, fl, ul, p0, {});
        }
      }
      function Bl(t) {
        let e, x, n, o;
        return e = new G0({}), {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), n.innerHTML = `<div class="hero svelte-1np6qbr"><div class="logo-wrap svelte-1np6qbr"><span class="material-icons logo-icon svelte-1np6qbr">local_florist</span></div> <h1 class="app-name svelte-1np6qbr">PeachSafe</h1> <p class="tagline svelte-1np6qbr">Private. Local. Yours.</p></div> <div class="actions svelte-1np6qbr"><a href="#/encounter-exchange" class="btn-filled svelte-1np6qbr"><span class="material-icons svelte-1np6qbr">qr_code</span>
      Log New Encounter</a></div>`, f(n, "class", "svelte-1np6qbr");
          },
          m(r, l) {
            m0(e, r, l), T(r, x, l), T(r, n, l), o = true;
          },
          p: X,
          i(r) {
            o || (f0(e.$$.fragment, r), o = true);
          },
          o(r) {
            d0(e.$$.fragment, r), o = false;
          },
          d(r) {
            r && (P(x), P(n)), h0(e, r);
          }
        };
      }
      function dl(t) {
        return O0(() => {
          if (!H0()) {
            B0("/");
            return;
          }
        }), [];
      }
      class Cl extends _0 {
        constructor(e) {
          super(), k0(this, e, dl, Bl, p0, {});
        }
      }
      function dt(t, e, x) {
        const n = t.slice();
        return n[20] = e[x], n;
      }
      function Ct(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function At(t, e, x) {
        const n = t.slice();
        return n[26] = e[x], n;
      }
      function Ft(t, e, x) {
        const n = t.slice();
        return n[23] = e[x], n;
      }
      function Dt(t) {
        let e, x, n, o, r, l, s, c, i, B, E = t[6] ? "Creating\u2026" : "Group encounter", u, A, d, C, D, m, h, k, p, _ = t[7] && pt(t);
        return {
          c() {
            e = F("div"), x = F("div"), n = F("p"), n.textContent = "New encounter", o = y(), r = F("button"), r.innerHTML = '<span class="material-icons type-icon svelte-1sogysh">person</span> <span class="type-label svelte-1sogysh">1:1 encounter</span> <span class="material-icons type-chevron svelte-1sogysh">chevron_right</span>', l = y(), s = F("button"), c = F("span"), c.textContent = "groups", i = y(), B = F("span"), u = R(E), A = y(), d = F("span"), d.textContent = "chevron_right", C = y(), _ && _.c(), D = y(), m = F("button"), h = R("Cancel"), f(n, "class", "modal-title svelte-1sogysh"), f(r, "class", "type-card svelte-1sogysh"), f(c, "class", "material-icons type-icon svelte-1sogysh"), f(B, "class", "type-label svelte-1sogysh"), f(d, "class", "material-icons type-chevron svelte-1sogysh"), f(s, "class", "type-card svelte-1sogysh"), s.disabled = t[6], f(m, "class", "btn-text cancel-btn svelte-1sogysh"), m.disabled = t[6], f(x, "class", "modal-sheet svelte-1sogysh"), f(e, "class", "modal-backdrop svelte-1sogysh");
          },
          m(b, g) {
            T(b, e, g), a(e, x), a(x, n), a(x, o), a(x, r), a(x, l), a(x, s), a(s, c), a(s, i), a(s, B), a(B, u), a(s, A), a(s, d), a(x, C), _ && _.m(x, null), a(x, D), a(x, m), a(m, h), k || (p = [
              z(r, "click", t[14]),
              z(s, "click", t[10]),
              z(m, "click", t[15]),
              z(x, "click", go(t[12])),
              z(e, "click", t[16])
            ], k = true);
          },
          p(b, g) {
            g & 64 && E !== (E = b[6] ? "Creating\u2026" : "Group encounter") && G(u, E), g & 64 && (s.disabled = b[6]), b[7] ? _ ? _.p(b, g) : (_ = pt(b), _.c(), _.m(x, D)) : _ && (_.d(1), _ = null), g & 64 && (m.disabled = b[6]);
          },
          d(b) {
            b && P(e), _ && _.d(), k = false, s0(p);
          }
        };
      }
      function pt(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[7]), f(e, "class", "modal-error svelte-1sogysh");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o & 128 && G(x, n[7]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function Al(t) {
        let e, x, n, o, r = t[9].length > 0 && mt(t), l = t[1].length > 0 && kt(t), s = t[8].length > 0 && bt(t);
        function c(E, u) {
          return E[0].length === 0 && E[9].length === 0 && E[8].length === 0 && E[1].length === 0 ? hl : E[0].length === 0 ? ml : pl;
        }
        let i = c(t), B = i(t);
        return {
          c() {
            r && r.c(), e = y(), l && l.c(), x = y(), s && s.c(), n = y(), o = F("section"), B.c(), f(o, "class", "card list-card svelte-1sogysh");
          },
          m(E, u) {
            r && r.m(E, u), T(E, e, u), l && l.m(E, u), T(E, x, u), s && s.m(E, u), T(E, n, u), T(E, o, u), B.m(o, null);
          },
          p(E, u) {
            E[9].length > 0 ? r ? r.p(E, u) : (r = mt(E), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), E[1].length > 0 ? l ? l.p(E, u) : (l = kt(E), l.c(), l.m(x.parentNode, x)) : l && (l.d(1), l = null), E[8].length > 0 ? s ? s.p(E, u) : (s = bt(E), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), i === (i = c(E)) && B ? B.p(E, u) : (B.d(1), B = i(E), B && (B.c(), B.m(o, null)));
          },
          d(E) {
            E && (P(e), P(x), P(n), P(o)), r && r.d(E), l && l.d(E), s && s.d(E), B.d();
          }
        };
      }
      function Fl(t) {
        let e, x, n;
        return {
          c() {
            e = F("section"), x = F("p"), n = R(t[3]), f(x, "class", "error svelte-1sogysh"), f(e, "class", "card list-card svelte-1sogysh");
          },
          m(o, r) {
            T(o, e, r), a(e, x), a(x, n);
          },
          p(o, r) {
            r & 8 && G(n, o[3]);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Dl(t) {
        let e;
        return {
          c() {
            e = F("section"), e.innerHTML = '<p class="muted svelte-1sogysh">Loading\u2026</p>', f(e, "class", "card list-card svelte-1sogysh");
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
      function mt(t) {
        let e, x, n, o, r = u0(t[9]), l = [];
        for (let s = 0; s < r.length; s += 1) l[s] = ht(Ft(t, r, s));
        return {
          c() {
            e = F("section"), x = F("div"), x.innerHTML = '<span class="material-icons section-icon svelte-1sogysh">favorite</span> <h2 class="svelte-1sogysh">Ongoing partners</h2>', n = y(), o = F("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            f(x, "class", "section-header svelte-1sogysh"), f(o, "class", "svelte-1sogysh"), f(e, "class", "card list-card svelte-1sogysh");
          },
          m(s, c) {
            T(s, e, c), a(e, x), a(e, n), a(e, o);
            for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, null);
          },
          p(s, c) {
            if (c & 512) {
              r = u0(s[9]);
              let i;
              for (i = 0; i < r.length; i += 1) {
                const B = Ft(s, r, i);
                l[i] ? l[i].p(B, c) : (l[i] = ht(B), l[i].c(), l[i].m(o, null));
              }
              for (; i < l.length; i += 1) l[i].d(1);
              l.length = r.length;
            }
          },
          d(s) {
            s && P(e), R0(l, s);
          }
        };
      }
      function ht(t) {
        let e, x, n, o, r, l, s = ze(t[23]) + "", c, i, B, E = Ge(t[23]) + "", u, A, d, C, D;
        return {
          c() {
            e = F("li"), x = F("a"), n = F("span"), n.textContent = "favorite", o = y(), r = F("span"), l = F("span"), c = R(s), i = y(), B = F("span"), u = R(E), A = y(), d = F("span"), d.textContent = "chevron_right", D = y(), f(n, "class", "material-icons rel-icon active svelte-1sogysh"), f(l, "class", "rel-name svelte-1sogysh"), f(B, "class", "rel-sub svelte-1sogysh"), f(r, "class", "rel-main svelte-1sogysh"), f(d, "class", "material-icons chevron svelte-1sogysh"), f(x, "class", "rel-row svelte-1sogysh"), f(x, "href", C = "#/relationships/" + Z(t[23].rawToken)), f(e, "class", "svelte-1sogysh");
          },
          m(m, h) {
            T(m, e, h), a(e, x), a(x, n), a(x, o), a(x, r), a(r, l), a(l, c), a(r, i), a(r, B), a(B, u), a(x, A), a(x, d), a(e, D);
          },
          p(m, h) {
            h & 512 && s !== (s = ze(m[23]) + "") && G(c, s), h & 512 && E !== (E = Ge(m[23]) + "") && G(u, E), h & 512 && C !== (C = "#/relationships/" + Z(m[23].rawToken)) && f(x, "href", C);
          },
          d(m) {
            m && P(e);
          }
        };
      }
      function kt(t) {
        let e, x, n, o, r = u0(t[1]), l = [];
        for (let s = 0; s < r.length; s += 1) l[s] = _t(At(t, r, s));
        return {
          c() {
            e = F("section"), x = F("div"), x.innerHTML = '<span class="material-icons section-icon svelte-1sogysh">groups</span> <h2 class="svelte-1sogysh">Group encounters</h2>', n = y(), o = F("ul");
            for (let s = 0; s < l.length; s += 1) l[s].c();
            f(x, "class", "section-header svelte-1sogysh"), f(o, "class", "svelte-1sogysh"), f(e, "class", "card list-card svelte-1sogysh");
          },
          m(s, c) {
            T(s, e, c), a(e, x), a(e, n), a(e, o);
            for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(o, null);
          },
          p(s, c) {
            if (c & 2) {
              r = u0(s[1]);
              let i;
              for (i = 0; i < r.length; i += 1) {
                const B = At(s, r, i);
                l[i] ? l[i].p(B, c) : (l[i] = _t(B), l[i].c(), l[i].m(o, null));
              }
              for (; i < l.length; i += 1) l[i].d(1);
              l.length = r.length;
            }
          },
          d(s) {
            s && P(e), R0(l, s);
          }
        };
      }
      function _t(t) {
        let e, x, n, o, r, l, s = yt(t[26]) + "", c, i, B, E = Pt(t[26]) + "", u, A, d, C, D;
        return {
          c() {
            e = F("li"), x = F("a"), n = F("span"), n.textContent = "groups", o = y(), r = F("span"), l = F("span"), c = R(s), i = y(), B = F("span"), u = R(E), A = y(), d = F("span"), d.textContent = "chevron_right", D = y(), f(n, "class", "material-icons rel-icon active svelte-1sogysh"), f(l, "class", "rel-name svelte-1sogysh"), f(B, "class", "rel-sub svelte-1sogysh"), f(r, "class", "rel-main svelte-1sogysh"), f(d, "class", "material-icons chevron svelte-1sogysh"), f(x, "class", "rel-row svelte-1sogysh"), f(x, "href", C = "#/groups/" + Z(t[26].token)), f(e, "class", "svelte-1sogysh");
          },
          m(m, h) {
            T(m, e, h), a(e, x), a(x, n), a(x, o), a(x, r), a(r, l), a(l, c), a(r, i), a(r, B), a(B, u), a(x, A), a(x, d), a(e, D);
          },
          p(m, h) {
            h & 2 && s !== (s = yt(m[26]) + "") && G(c, s), h & 2 && E !== (E = Pt(m[26]) + "") && G(u, E), h & 2 && C !== (C = "#/groups/" + Z(m[26].token)) && f(x, "href", C);
          },
          d(m) {
            m && P(e);
          }
        };
      }
      function bt(t) {
        let e, x, n, o = t[4] ? "expand_less" : "expand_more", r, l, s, c, i = t[8].length + "", B, E, u, A, d, C = t[4] && gt(t);
        return {
          c() {
            e = F("section"), x = F("button"), n = F("span"), r = R(o), l = y(), s = F("span"), c = R("Archived partners ("), B = R(i), E = R(")"), u = y(), C && C.c(), f(n, "class", "material-icons toggle-icon svelte-1sogysh"), f(s, "class", "muted-label svelte-1sogysh"), f(x, "class", "collapse-toggle svelte-1sogysh"), f(e, "class", "card list-card svelte-1sogysh");
          },
          m(D, m) {
            T(D, e, m), a(e, x), a(x, n), a(n, r), a(x, l), a(x, s), a(s, c), a(s, B), a(s, E), a(e, u), C && C.m(e, null), A || (d = z(x, "click", t[17]), A = true);
          },
          p(D, m) {
            m & 16 && o !== (o = D[4] ? "expand_less" : "expand_more") && G(r, o), m & 256 && i !== (i = D[8].length + "") && G(B, i), D[4] ? C ? C.p(D, m) : (C = gt(D), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
          },
          d(D) {
            D && P(e), C && C.d(), A = false, d();
          }
        };
      }
      function gt(t) {
        let e, x = u0(t[8]), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = vt(Ct(t, x, o));
        return {
          c() {
            e = F("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            f(e, "class", "svelte-1sogysh");
          },
          m(o, r) {
            T(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 256) {
              x = u0(o[8]);
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Ct(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = vt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), R0(n, o);
          }
        };
      }
      function vt(t) {
        let e, x, n, o, r, l, s = ze(t[23]) + "", c, i, B, E = Ge(t[23]) + "", u, A, d, C, D;
        return {
          c() {
            e = F("li"), x = F("a"), n = F("span"), n.textContent = "favorite_border", o = y(), r = F("span"), l = F("span"), c = R(s), i = y(), B = F("span"), u = R(E), A = y(), d = F("span"), d.textContent = "chevron_right", D = y(), f(n, "class", "material-icons rel-icon ended svelte-1sogysh"), f(l, "class", "rel-name svelte-1sogysh"), f(B, "class", "rel-sub svelte-1sogysh"), f(r, "class", "rel-main svelte-1sogysh"), f(d, "class", "material-icons chevron svelte-1sogysh"), f(x, "class", "rel-row svelte-1sogysh"), f(x, "href", C = "#/relationships/" + Z(t[23].rawToken)), f(e, "class", "svelte-1sogysh");
          },
          m(m, h) {
            T(m, e, h), a(e, x), a(x, n), a(x, o), a(x, r), a(r, l), a(l, c), a(r, i), a(r, B), a(B, u), a(x, A), a(x, d), a(e, D);
          },
          p(m, h) {
            h & 256 && s !== (s = ze(m[23]) + "") && G(c, s), h & 256 && E !== (E = Ge(m[23]) + "") && G(u, E), h & 256 && C !== (C = "#/relationships/" + Z(m[23].rawToken)) && f(x, "href", C);
          },
          d(m) {
            m && P(e);
          }
        };
      }
      function pl(t) {
        let e, x, n, o = u0(t[0]), r = [];
        for (let l = 0; l < o.length; l += 1) r[l] = wt(dt(t, o, l));
        return {
          c() {
            e = F("div"), e.innerHTML = '<span class="material-icons section-icon svelte-1sogysh">check_circle_outline</span> <h2 class="svelte-1sogysh">One-time encounters</h2>', x = y(), n = F("ul");
            for (let l = 0; l < r.length; l += 1) r[l].c();
            f(e, "class", "section-header svelte-1sogysh"), f(n, "class", "svelte-1sogysh");
          },
          m(l, s) {
            T(l, e, s), T(l, x, s), T(l, n, s);
            for (let c = 0; c < r.length; c += 1) r[c] && r[c].m(n, null);
          },
          p(l, s) {
            if (s & 1) {
              o = u0(l[0]);
              let c;
              for (c = 0; c < o.length; c += 1) {
                const i = dt(l, o, c);
                r[c] ? r[c].p(i, s) : (r[c] = wt(i), r[c].c(), r[c].m(n, null));
              }
              for (; c < r.length; c += 1) r[c].d(1);
              r.length = o.length;
            }
          },
          d(l) {
            l && (P(e), P(x), P(n)), R0(r, l);
          }
        };
      }
      function ml(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "No one-time encounters.", f(e, "class", "muted list-muted svelte-1sogysh");
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
      function hl(t) {
        let e, x, n, o, r, l, s, c;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "people_outline", n = y(), o = F("p"), o.textContent = "No encounters recorded yet.", r = y(), l = F("button"), l.innerHTML = `<span class="material-icons">add</span>
            Add encounter`, f(x, "class", "material-icons empty-icon svelte-1sogysh"), f(o, "class", "svelte-1sogysh"), f(l, "class", "btn-filled svelte-1sogysh"), f(e, "class", "empty-state svelte-1sogysh");
          },
          m(i, B) {
            T(i, e, B), a(e, x), a(e, n), a(e, o), a(e, r), a(e, l), s || (c = z(l, "click", t[18]), s = true);
          },
          p: X,
          d(i) {
            i && P(e), s = false, c();
          }
        };
      }
      function wt(t) {
        let e, x, n, o, r = t[20].date + "", l, s, c, i = t[20].token.slice(0, 12) + "", B, E, u;
        return {
          c() {
            e = F("li"), x = F("span"), x.textContent = "check_circle_outline", n = y(), o = F("span"), l = R(r), s = y(), c = F("span"), B = R(i), E = R("\u2026"), u = y(), f(x, "class", "material-icons list-icon svelte-1sogysh"), f(o, "class", "enc-date svelte-1sogysh"), f(c, "class", "enc-token svelte-1sogysh"), f(e, "class", "svelte-1sogysh");
          },
          m(A, d) {
            T(A, e, d), a(e, x), a(e, n), a(e, o), a(o, l), a(e, s), a(e, c), a(c, B), a(c, E), a(e, u);
          },
          p(A, d) {
            d & 1 && r !== (r = A[20].date + "") && G(l, r), d & 1 && i !== (i = A[20].token.slice(0, 12) + "") && G(B, i);
          },
          d(A) {
            A && P(e);
          }
        };
      }
      function kl(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u;
        e = new G0({});
        let A = t[5] && Dt(t);
        function d(m, h) {
          return m[2] ? Dl : m[3] ? Fl : Al;
        }
        let C = d(t), D = C(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("div"), r = F("h1"), r.textContent = "Encounters", l = y(), s = F("button"), s.innerHTML = '<span class="material-icons">add</span>', c = y(), A && A.c(), i = y(), D.c(), f(r, "class", "svelte-1sogysh"), f(s, "class", "fab svelte-1sogysh"), f(s, "title", "Add encounter"), f(o, "class", "page-header svelte-1sogysh"), f(n, "class", "svelte-1sogysh");
          },
          m(m, h) {
            m0(e, m, h), T(m, x, h), T(m, n, h), a(n, o), a(o, r), a(o, l), a(o, s), a(n, c), A && A.m(n, null), a(n, i), D.m(n, null), B = true, E || (u = z(s, "click", t[13]), E = true);
          },
          p(m, [h]) {
            m[5] ? A ? A.p(m, h) : (A = Dt(m), A.c(), A.m(n, i)) : A && (A.d(1), A = null), C === (C = d(m)) && D ? D.p(m, h) : (D.d(1), D = C(m), D && (D.c(), D.m(n, null)));
          },
          i(m) {
            B || (f0(e.$$.fragment, m), B = true);
          },
          o(m) {
            d0(e.$$.fragment, m), B = false;
          },
          d(m) {
            m && (P(x), P(n)), h0(e, m), A && A.d(), D.d(), E = false, u();
          }
        };
      }
      function ze(t) {
        return t.name ? t.name : t.endedAt ? "Ended partner" : "Active partner";
      }
      function Ge(t) {
        return t.endedAt ? "Ended " + t.endedAt : "Since " + t.createdAt;
      }
      function yt(t) {
        return t.name || "Group encounter";
      }
      function Pt(t) {
        return (t.isHost ? "Host \xB7 " : "") + t.date;
      }
      function _l(t, e, x) {
        let n, o, r = [], l = [], s = [], c = true, i = null, B = false, E = false, u = false, A = null;
        O0(async () => {
          if (!H0()) {
            B0("/");
            return;
          }
          await d();
        });
        async function d() {
          x(2, c = true), x(3, i = null);
          try {
            x(0, r = await ys()), x(11, l = jx()), x(1, s = no());
          } catch (g) {
            x(3, i = g.message);
          } finally {
            x(2, c = false);
          }
        }
        async function C() {
          x(6, u = true), x(7, A = null);
          try {
            const g = be(32), v = ie(), w = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
            await ro(g, w, true, v, null), x(5, E = false), B0("/groups/" + Z(g));
          } catch (g) {
            x(7, A = g.message);
          } finally {
            x(6, u = false);
          }
        }
        function D(g) {
          dx.call(this, t, g);
        }
        const m = () => x(5, E = true), h = () => {
          x(5, E = false), B0("/encounter-exchange");
        }, k = () => x(5, E = false), p = () => {
          u || x(5, E = false);
        }, _ = () => x(4, B = !B), b = () => x(5, E = true);
        return t.$$.update = () => {
          t.$$.dirty & 2048 && x(9, n = l.filter((g) => !g.archived)), t.$$.dirty & 2048 && x(8, o = l.filter((g) => g.archived));
        }, [
          r,
          s,
          c,
          i,
          B,
          E,
          u,
          A,
          o,
          n,
          C,
          l,
          D,
          m,
          h,
          k,
          p,
          _,
          b
        ];
      }
      class bl extends _0 {
        constructor(e) {
          super(), k0(this, e, _l, kl, p0, {});
        }
      }
      function gl(t) {
        let e, x, n, o, r = t[7] ? "favorite" : "favorite_border", l, s, c, i, B = t[7] ? "Active partner" : "Ended", E, u, A, d, C, D, m = Ke(t[0].createdAt) + "", h, k, p, _, b, g, v, w, I, M, S = t[3] && Tt(t), N = t[0].archived && St(), L = t[0].endedAt && Mt(t);
        function O(V, o0) {
          return V[4] ? yl : wl;
        }
        let H = O(t), j = H(t);
        function J(V, o0) {
          return V[7] ? Tl : Pl;
        }
        let U = J(t), q = U(t);
        function K(V, o0) {
          return V[0].archived ? Nl : V[6] === "archive" ? Ll : Il;
        }
        let x0 = K(t), t0 = x0(t);
        return {
          c() {
            S && S.c(), e = y(), x = F("section"), n = F("div"), o = F("span"), l = R(r), s = y(), c = F("div"), i = F("span"), E = R(B), u = y(), N && N.c(), A = y(), d = F("div"), C = F("span"), D = R("Since "), h = R(m), k = y(), L && L.c(), p = y(), _ = F("section"), j.c(), b = y(), g = F("div"), v = y(), q.c(), w = y(), I = F("div"), M = y(), t0.c(), f(o, "class", "material-icons status-icon svelte-qp5tt8"), r0(o, "active", t[7]), r0(o, "ended", !t[7]), f(i, "class", "status-label svelte-qp5tt8"), r0(i, "active", t[7]), f(c, "class", "status-text svelte-qp5tt8"), f(n, "class", "status-row svelte-qp5tt8"), f(d, "class", "dates svelte-qp5tt8"), f(x, "class", "card pad svelte-qp5tt8"), f(g, "class", "divider svelte-qp5tt8"), f(I, "class", "divider svelte-qp5tt8"), f(_, "class", "card svelte-qp5tt8");
          },
          m(V, o0) {
            S && S.m(V, o0), T(V, e, o0), T(V, x, o0), a(x, n), a(n, o), a(o, l), a(n, s), a(n, c), a(c, i), a(i, E), a(c, u), N && N.m(c, null), a(x, A), a(x, d), a(d, C), a(C, D), a(C, h), a(d, k), L && L.m(d, null), T(V, p, o0), T(V, _, o0), j.m(_, null), a(_, b), a(_, g), a(_, v), q.m(_, null), a(_, w), a(_, I), a(_, M), t0.m(_, null);
          },
          p(V, o0) {
            V[3] ? S ? S.p(V, o0) : (S = Tt(V), S.c(), S.m(e.parentNode, e)) : S && (S.d(1), S = null), o0 & 128 && r !== (r = V[7] ? "favorite" : "favorite_border") && G(l, r), o0 & 128 && r0(o, "active", V[7]), o0 & 128 && r0(o, "ended", !V[7]), o0 & 128 && B !== (B = V[7] ? "Active partner" : "Ended") && G(E, B), o0 & 128 && r0(i, "active", V[7]), V[0].archived ? N || (N = St(), N.c(), N.m(c, null)) : N && (N.d(1), N = null), o0 & 1 && m !== (m = Ke(V[0].createdAt) + "") && G(h, m), V[0].endedAt ? L ? L.p(V, o0) : (L = Mt(V), L.c(), L.m(d, null)) : L && (L.d(1), L = null), H === (H = O(V)) && j ? j.p(V, o0) : (j.d(1), j = H(V), j && (j.c(), j.m(_, b))), U === (U = J(V)) && q ? q.p(V, o0) : (q.d(1), q = U(V), q && (q.c(), q.m(_, w))), x0 === (x0 = K(V)) && t0 ? t0.p(V, o0) : (t0.d(1), t0 = x0(V), t0 && (t0.c(), t0.m(_, null)));
          },
          d(V) {
            V && (P(e), P(x), P(p), P(_)), S && S.d(V), N && N.d(), L && L.d(), j.d(), q.d(), t0.d();
          }
        };
      }
      function vl(t) {
        let e;
        return {
          c() {
            e = F("section"), e.innerHTML = '<p class="muted svelte-qp5tt8">This partner could not be found in your blob.</p> <a href="#/encounters" class="btn-text svelte-qp5tt8">\u2190 Back to encounters</a>', f(e, "class", "card pad svelte-qp5tt8");
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
      function Tt(t) {
        let e, x, n, o;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "error_outline", n = y(), o = R(t[3]), f(x, "class", "material-icons svelte-qp5tt8"), f(e, "class", "toast error-toast svelte-qp5tt8");
          },
          m(r, l) {
            T(r, e, l), a(e, x), a(e, n), a(e, o);
          },
          p(r, l) {
            l & 8 && G(o, r[3]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function St(t) {
        let e;
        return {
          c() {
            e = F("span"), e.textContent = "archived", f(e, "class", "badge archived svelte-qp5tt8");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Mt(t) {
        let e, x, n = Ke(t[0].endedAt) + "", o;
        return {
          c() {
            e = F("span"), x = R("Ended "), o = R(n);
          },
          m(r, l) {
            T(r, e, l), a(e, x), a(e, o);
          },
          p(r, l) {
            l & 1 && n !== (n = Ke(r[0].endedAt) + "") && G(o, n);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function wl(t) {
        let e, x, n, o, r = (t[0].name ? t[0].name : "Add nickname") + "", l, s, c, i, B, E, u = t[0].name && It();
        return {
          c() {
            e = F("button"), x = F("span"), x.textContent = "edit", n = y(), o = F("span"), l = R(r), s = y(), u && u.c(), c = y(), i = F("span"), i.textContent = "chevron_right", f(x, "class", "material-icons action-icon svelte-qp5tt8"), f(o, "class", "action-label svelte-qp5tt8"), f(i, "class", "material-icons action-chevron svelte-qp5tt8"), f(e, "class", "action-row svelte-qp5tt8");
          },
          m(A, d) {
            T(A, e, d), a(e, x), a(e, n), a(e, o), a(o, l), a(o, s), u && u.m(o, null), a(e, c), a(e, i), B || (E = z(e, "click", t[13]), B = true);
          },
          p(A, d) {
            d & 1 && r !== (r = (A[0].name ? A[0].name : "Add nickname") + "") && G(l, r), A[0].name ? u || (u = It(), u.c(), u.m(o, null)) : u && (u.d(1), u = null);
          },
          d(A) {
            A && P(e), u && u.d(), B = false, E();
          }
        };
      }
      function yl(t) {
        let e, x, n, o, r, l, s, c, i, B, E = t[2] ? "Saving\u2026" : "Save", u, A, d;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "edit", n = y(), o = F("form"), r = F("input"), l = y(), s = F("div"), c = F("button"), c.textContent = "Cancel", i = y(), B = F("button"), u = R(E), f(x, "class", "material-icons action-icon svelte-qp5tt8"), f(r, "type", "text"), f(r, "placeholder", "Optional nickname"), f(r, "maxlength", "64"), r.autofocus = true, f(r, "class", "svelte-qp5tt8"), f(c, "type", "button"), f(c, "class", "btn-text svelte-qp5tt8"), f(B, "type", "submit"), f(B, "class", "btn-filled-sm svelte-qp5tt8"), B.disabled = t[2], f(s, "class", "name-actions svelte-qp5tt8"), f(o, "class", "name-form svelte-qp5tt8"), f(e, "class", "action-row edit-name-row svelte-qp5tt8");
          },
          m(C, D) {
            T(C, e, D), a(e, x), a(e, n), a(e, o), a(o, r), e0(r, t[5]), a(o, l), a(o, s), a(s, c), a(s, i), a(s, B), a(B, u), r.focus(), A || (d = [
              z(r, "input", t[16]),
              z(c, "click", t[14]),
              z(o, "submit", z0(t[9]))
            ], A = true);
          },
          p(C, D) {
            D & 32 && r.value !== C[5] && e0(r, C[5]), D & 4 && E !== (E = C[2] ? "Saving\u2026" : "Save") && G(u, E), D & 4 && (B.disabled = C[2]);
          },
          d(C) {
            C && P(e), A = false, s0(d);
          }
        };
      }
      function It(t) {
        let e;
        return {
          c() {
            e = F("span"), e.textContent = "Tap to change", f(e, "class", "action-sub svelte-qp5tt8");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Pl(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = F("button"), x = F("span"), x.textContent = "favorite", n = y(), o = F("span"), o.textContent = "Mark as active again", f(x, "class", "material-icons action-icon primary svelte-qp5tt8"), f(o, "class", "action-label primary svelte-qp5tt8"), f(e, "class", "action-row svelte-qp5tt8"), e.disabled = t[2];
          },
          m(s, c) {
            T(s, e, c), a(e, x), a(e, n), a(e, o), r || (l = z(e, "click", t[11]), r = true);
          },
          p(s, c) {
            c & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && P(e), r = false, l();
          }
        };
      }
      function Tl(t) {
        let e;
        function x(r, l) {
          return r[6] === "end" ? Ml : Sl;
        }
        let n = x(t), o = n(t);
        return {
          c() {
            o.c(), e = P0();
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
      function Sl(t) {
        let e, x, n;
        return {
          c() {
            e = F("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-qp5tt8">heart_broken</span> <span class="action-label danger svelte-qp5tt8">Mark as ended</span>', f(e, "class", "action-row svelte-qp5tt8");
          },
          m(o, r) {
            T(o, e, r), x || (n = z(e, "click", t[18]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function Ml(t) {
        let e, x, n, o, r, l, s, c = t[2] ? "Saving\u2026" : "Mark as ended", i, B, E;
        return {
          c() {
            e = F("div"), x = F("p"), x.textContent = "Mark this partnership as ended?", n = y(), o = F("div"), r = F("button"), r.textContent = "Cancel", l = y(), s = F("button"), i = R(c), f(x, "class", "confirm-text svelte-qp5tt8"), f(r, "class", "btn-text svelte-qp5tt8"), f(s, "class", "btn-danger-sm svelte-qp5tt8"), s.disabled = t[2], f(o, "class", "confirm-actions svelte-qp5tt8"), f(e, "class", "confirm-row svelte-qp5tt8");
          },
          m(u, A) {
            T(u, e, A), a(e, x), a(e, n), a(e, o), a(o, r), a(o, l), a(o, s), a(s, i), B || (E = [
              z(r, "click", t[17]),
              z(s, "click", t[10])
            ], B = true);
          },
          p(u, A) {
            A & 4 && c !== (c = u[2] ? "Saving\u2026" : "Mark as ended") && G(i, c), A & 4 && (s.disabled = u[2]);
          },
          d(u) {
            u && P(e), B = false, s0(E);
          }
        };
      }
      function Il(t) {
        let e, x, n;
        return {
          c() {
            e = F("button"), e.innerHTML = '<span class="material-icons action-icon svelte-qp5tt8">archive</span> <span class="action-label svelte-qp5tt8">Archive</span> <span class="action-sub-right svelte-qp5tt8">Hide from main list</span>', f(e, "class", "action-row svelte-qp5tt8");
          },
          m(o, r) {
            T(o, e, r), x || (n = z(e, "click", t[22]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function Ll(t) {
        let e, x, n, o, r, l, s, c = t[2] ? "Saving\u2026" : "Archive", i, B, E;
        return {
          c() {
            e = F("div"), x = F("p"), x.textContent = "Archive this partner? They will be hidden from the main list.", n = y(), o = F("div"), r = F("button"), r.textContent = "Cancel", l = y(), s = F("button"), i = R(c), f(x, "class", "confirm-text svelte-qp5tt8"), f(r, "class", "btn-text svelte-qp5tt8"), f(s, "class", "btn-filled-sm svelte-qp5tt8"), s.disabled = t[2], f(o, "class", "confirm-actions svelte-qp5tt8"), f(e, "class", "confirm-row svelte-qp5tt8");
          },
          m(u, A) {
            T(u, e, A), a(e, x), a(e, n), a(e, o), a(o, r), a(o, l), a(o, s), a(s, i), B || (E = [
              z(r, "click", t[20]),
              z(s, "click", t[21])
            ], B = true);
          },
          p(u, A) {
            A & 4 && c !== (c = u[2] ? "Saving\u2026" : "Archive") && G(i, c), A & 4 && (s.disabled = u[2]);
          },
          d(u) {
            u && P(e), B = false, s0(E);
          }
        };
      }
      function Nl(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = F("button"), x = F("span"), x.textContent = "unarchive", n = y(), o = F("span"), o.textContent = "Unarchive", f(x, "class", "material-icons action-icon primary svelte-qp5tt8"), f(o, "class", "action-label primary svelte-qp5tt8"), f(e, "class", "action-row svelte-qp5tt8"), e.disabled = t[2];
          },
          m(s, c) {
            T(s, e, c), a(e, x), a(e, n), a(e, o), r || (l = z(e, "click", t[19]), r = true);
          },
          p(s, c) {
            c & 4 && (e.disabled = s[2]);
          },
          d(s) {
            s && P(e), r = false, l();
          }
        };
      }
      function Rl(t) {
        let e, x, n, o, r, l, s, c = (t[1] ? "Partner not found" : t[8]) + "", i, B, E;
        e = new G0({});
        function u(C, D) {
          if (C[1]) return vl;
          if (C[0]) return gl;
        }
        let A = u(t), d = A && A(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("div"), r = F("a"), r.innerHTML = '<span class="material-icons svelte-qp5tt8">arrow_back</span>', l = y(), s = F("h1"), i = R(c), B = y(), d && d.c(), f(r, "class", "back-btn svelte-qp5tt8"), f(r, "href", "#/encounters"), f(s, "class", "svelte-qp5tt8"), f(o, "class", "page-header svelte-qp5tt8"), f(n, "class", "svelte-qp5tt8");
          },
          m(C, D) {
            m0(e, C, D), T(C, x, D), T(C, n, D), a(n, o), a(o, r), a(o, l), a(o, s), a(s, i), a(n, B), d && d.m(n, null), E = true;
          },
          p(C, [D]) {
            (!E || D & 258) && c !== (c = (C[1] ? "Partner not found" : C[8]) + "") && G(i, c), A === (A = u(C)) && d ? d.p(C, D) : (d && d.d(1), d = A && A(C), d && (d.c(), d.m(n, null)));
          },
          i(C) {
            E || (f0(e.$$.fragment, C), E = true);
          },
          o(C) {
            d0(e.$$.fragment, C), E = false;
          },
          d(C) {
            C && (P(x), P(n)), h0(e, C), d && d.d();
          }
        };
      }
      function Ke(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function Ol(t, e, x) {
        let n, o, { params: r = {} } = e, l = null, s = false, c = false, i = null, B = false, E = "", u = null;
        O0(() => {
          if (!H0()) {
            B0("/");
            return;
          }
          A();
        });
        function A() {
          const S = jx(), N = r.rawTokenHex;
          x(0, l = S.find((L) => Z(L.rawToken) === N) ?? null), l || x(1, s = true);
        }
        function d() {
          return Z(l.rawToken);
        }
        async function C() {
          if (!c) {
            x(2, c = true), x(3, i = null);
            try {
              const S = E.trim();
              await Te(d(), {
                name: S || null
              }), A(), x(4, B = false);
            } catch (S) {
              x(3, i = S.message);
            } finally {
              x(2, c = false);
            }
          }
        }
        async function D() {
          if (!c) {
            x(2, c = true), x(3, i = null);
            try {
              const S = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
              await Te(d(), {
                endedAt: S
              }), A();
            } catch (S) {
              x(3, i = S.message);
            } finally {
              x(2, c = false), x(6, u = null);
            }
          }
        }
        async function m() {
          if (!c) {
            x(2, c = true), x(3, i = null);
            try {
              await Te(d(), {
                endedAt: null
              }), A();
            } catch (S) {
              x(3, i = S.message);
            } finally {
              x(2, c = false);
            }
          }
        }
        async function h(S) {
          if (!c) {
            x(2, c = true), x(3, i = null);
            try {
              await Te(d(), {
                archived: S
              }), A();
            } catch (N) {
              x(3, i = N.message);
            } finally {
              x(2, c = false), x(6, u = null);
            }
          }
        }
        function k() {
          x(5, E = l.name ?? ""), x(4, B = true), x(3, i = null);
        }
        function p() {
          x(4, B = false), x(3, i = null);
        }
        function _() {
          E = this.value, x(5, E);
        }
        const b = () => x(6, u = null), g = () => x(6, u = "end"), v = () => h(false), w = () => x(6, u = null), I = () => h(true), M = () => x(6, u = "archive");
        return t.$$set = (S) => {
          "params" in S && x(15, r = S.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(8, n = l?.name || (l?.endedAt ? "Ended partner" : "Active partner")), t.$$.dirty & 1 && x(7, o = l && !l.endedAt);
        }, [
          l,
          s,
          c,
          i,
          B,
          E,
          u,
          o,
          n,
          C,
          D,
          m,
          h,
          k,
          p,
          r,
          _,
          b,
          g,
          v,
          w,
          I,
          M
        ];
      }
      class Hl extends _0 {
        constructor(e) {
          super(), k0(this, e, Ol, Rl, p0, {
            params: 15
          });
        }
      }
      function Lt(t, e, x) {
        const n = t.slice();
        n[18] = e[x], n[21] = x;
        const o = n[6].length - 1 - n[21];
        return n[19] = o, n;
      }
      function Nt(t, e, x) {
        const n = t.slice();
        return n[22] = e[x], n[23] = e, n[24] = x, n;
      }
      function Ul(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = `<span class="material-icons svelte-17g38pf">check_circle</span>
      Result saved. (No encounters on record to notify.)`, f(e, "class", "toast success svelte-17g38pf");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function ql(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = `<span class="material-icons svelte-17g38pf">check_circle</span>
      Result saved.`, f(e, "class", "toast success svelte-17g38pf");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function jl(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = `<span class="material-icons svelte-17g38pf">check_circle</span>
      Result saved. Partners notified.`, f(e, "class", "toast success svelte-17g38pf");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Rt(t) {
        let e, x, n, o;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "error_outline", n = y(), o = R(t[5]), f(x, "class", "material-icons svelte-17g38pf"), f(e, "class", "toast error-toast svelte-17g38pf");
          },
          m(r, l) {
            T(r, e, l), a(e, x), a(e, n), a(e, o);
          },
          p(r, l) {
            l & 32 && G(o, r[5]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function Ot(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h, k, p, _ = t[3] && t[4] === "computing" ? "Computing\u2026" : "Save result", b, g, v, w = u0(N0), I = [];
        for (let S = 0; S < w.length; S += 1) I[S] = Ht(Nt(t, w, S));
        let M = t[4] === "computing" && Ut();
        return {
          c() {
            e = F("section"), x = F("h2"), x.textContent = "Record a result", n = y(), o = F("p"), o.textContent = `Mark which conditions tested positive. Leave all unchecked for a fully negative result.
        Positive results will anonymously notify your encounter partners.`, r = y(), l = F("form"), s = F("label"), c = R(`Test date
          `), i = F("input"), B = y(), E = F("fieldset"), u = F("legend"), u.textContent = "Positive results", A = y(), d = F("div");
            for (let S = 0; S < I.length; S += 1) I[S].c();
            C = y(), M && M.c(), D = y(), m = F("div"), h = F("button"), h.textContent = "Cancel", k = y(), p = F("button"), b = R(_), f(x, "class", "svelte-17g38pf"), f(o, "class", "help svelte-17g38pf"), f(i, "type", "date"), i.required = true, f(i, "max", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), f(i, "class", "svelte-17g38pf"), f(s, "class", "svelte-17g38pf"), f(u, "class", "svelte-17g38pf"), f(d, "class", "disease-grid svelte-17g38pf"), f(E, "class", "svelte-17g38pf"), f(h, "type", "button"), f(h, "class", "btn-text svelte-17g38pf"), f(p, "type", "submit"), f(p, "class", "btn-filled svelte-17g38pf"), p.disabled = t[3], f(m, "class", "form-actions svelte-17g38pf"), f(l, "class", "svelte-17g38pf"), f(e, "class", "card form-card svelte-17g38pf");
          },
          m(S, N) {
            T(S, e, N), a(e, x), a(e, n), a(e, o), a(e, r), a(e, l), a(l, s), a(s, c), a(s, i), e0(i, t[0]), a(l, B), a(l, E), a(E, u), a(E, A), a(E, d);
            for (let L = 0; L < I.length; L += 1) I[L] && I[L].m(d, null);
            a(l, C), M && M.m(l, null), a(l, D), a(l, m), a(m, h), a(m, k), a(m, p), a(p, b), g || (v = [
              z(i, "input", t[11]),
              z(h, "click", t[13]),
              z(l, "submit", z0(t[8]))
            ], g = true);
          },
          p(S, N) {
            if (N & 1 && e0(i, S[0]), N & 2) {
              w = u0(N0);
              let L;
              for (L = 0; L < w.length; L += 1) {
                const O = Nt(S, w, L);
                I[L] ? I[L].p(O, N) : (I[L] = Ht(O), I[L].c(), I[L].m(d, null));
              }
              for (; L < I.length; L += 1) I[L].d(1);
              I.length = w.length;
            }
            S[4] === "computing" ? M || (M = Ut(), M.c(), M.m(l, D)) : M && (M.d(1), M = null), N & 24 && _ !== (_ = S[3] && S[4] === "computing" ? "Computing\u2026" : "Save result") && G(b, _), N & 8 && (p.disabled = S[3]);
          },
          d(S) {
            S && P(e), R0(I, S), M && M.d(), g = false, s0(v);
          }
        };
      }
      function Ht(t) {
        let e, x, n, o = Ux[t[22]] + "", r, l, s, c;
        function i() {
          t[12].call(x, t[22]);
        }
        return {
          c() {
            e = F("label"), x = F("input"), n = y(), r = R(o), l = y(), f(x, "type", "checkbox"), f(x, "class", "svelte-17g38pf"), f(e, "class", "checkbox-label svelte-17g38pf");
          },
          m(B, E) {
            T(B, e, E), a(e, x), x.checked = t[1][t[22]], a(e, n), a(e, r), a(e, l), s || (c = z(x, "change", i), s = true);
          },
          p(B, E) {
            t = B, E & 2 && (x.checked = t[1][t[22]]);
          },
          d(B) {
            B && P(e), s = false, c();
          }
        };
      }
      function Ut(t) {
        let e;
        return {
          c() {
            e = F("p"), e.innerHTML = `<span class="material-icons spin svelte-17g38pf">autorenew</span>
            Computing proof of work\u2026`, f(e, "class", "computing-status svelte-17g38pf");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function zl(t) {
        let e, x = u0([
          ...t[6]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = jt(Lt(t, x, o));
        return {
          c() {
            e = F("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            f(e, "class", "svelte-17g38pf");
          },
          m(o, r) {
            T(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 712) {
              x = u0([
                ...o[6]
              ].reverse());
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Lt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = jt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), R0(n, o);
          }
        };
      }
      function Gl(t) {
        let e, x, n, o, r, l, s, c;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "science", n = y(), o = F("p"), o.textContent = "No results recorded yet.", r = y(), l = F("button"), l.innerHTML = `<span class="material-icons">add</span>
          Record first result`, f(x, "class", "material-icons empty-icon svelte-17g38pf"), f(o, "class", "svelte-17g38pf"), f(l, "class", "btn-filled svelte-17g38pf"), f(e, "class", "empty-state svelte-17g38pf");
          },
          m(i, B) {
            T(i, e, B), a(e, x), a(e, n), a(e, o), a(e, r), a(e, l), s || (c = z(l, "click", t[14]), s = true);
          },
          p: X,
          d(i) {
            i && P(e), s = false, c();
          }
        };
      }
      function Kl(t) {
        let e;
        return {
          c() {
            e = F("span"), e.textContent = "Negative", f(e, "class", "badge negative svelte-17g38pf");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Vl(t) {
        let e;
        return {
          c() {
            e = F("span"), e.textContent = "Positive", f(e, "class", "badge positive svelte-17g38pf");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function qt(t) {
        let e, x = t[18].positiveDiseases.map(t[15]).join(", ") + "", n, o, r;
        function l(i, B) {
          return i[18].hasNotified ? Ql : Yl;
        }
        let s = l(t), c = s(t);
        return {
          c() {
            e = F("div"), n = R(x), o = y(), c.c(), r = P0(), f(e, "class", "diseases svelte-17g38pf");
          },
          m(i, B) {
            T(i, e, B), a(e, n), T(i, o, B), c.m(i, B), T(i, r, B);
          },
          p(i, B) {
            B & 64 && x !== (x = i[18].positiveDiseases.map(i[15]).join(", ") + "") && G(n, x), s === (s = l(i)) && c ? c.p(i, B) : (c.d(1), c = s(i), c && (c.c(), c.m(r.parentNode, r)));
          },
          d(i) {
            i && (P(e), P(o), P(r)), c.d(i);
          }
        };
      }
      function Yl(t) {
        let e, x, n, o, r = t[7] === t[19] ? "Computing\u2026" : "Notify now", l, s, c;
        function i() {
          return t[16](t[19], t[18]);
        }
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "Partners not yet notified", n = y(), o = F("button"), l = R(r), f(x, "class", "not-notified svelte-17g38pf"), f(o, "class", "btn-text-small svelte-17g38pf"), o.disabled = t[3], f(e, "class", "notify-row svelte-17g38pf");
          },
          m(B, E) {
            T(B, e, E), a(e, x), a(e, n), a(e, o), a(o, l), s || (c = z(o, "click", i), s = true);
          },
          p(B, E) {
            t = B, E & 192 && r !== (r = t[7] === t[19] ? "Computing\u2026" : "Notify now") && G(l, r), E & 8 && (o.disabled = t[3]);
          },
          d(B) {
            B && P(e), s = false, c();
          }
        };
      }
      function Ql(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = `<span class="material-icons svelte-17g38pf">check</span>
                    Partners notified`, f(e, "class", "notified svelte-17g38pf");
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
      function jt(t) {
        let e, x, n = t[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline", o, r, l, s, c, i = t[18].date + "", B, E, u, A;
        function d(h, k) {
          return h[18].positiveDiseases.length > 0 ? Vl : Kl;
        }
        let C = d(t), D = C(t), m = t[18].positiveDiseases.length > 0 && qt(t);
        return {
          c() {
            e = F("li"), x = F("span"), o = R(n), r = y(), l = F("div"), s = F("div"), c = F("span"), B = R(i), E = y(), D.c(), u = y(), m && m.c(), A = y(), f(x, "class", "material-icons result-icon svelte-17g38pf"), r0(x, "positive", t[18].positiveDiseases.length > 0), r0(x, "negative", t[18].positiveDiseases.length === 0), f(c, "class", "result-date svelte-17g38pf"), f(s, "class", "result-row svelte-17g38pf"), f(l, "class", "result-body svelte-17g38pf"), f(e, "class", "svelte-17g38pf");
          },
          m(h, k) {
            T(h, e, k), a(e, x), a(x, o), a(e, r), a(e, l), a(l, s), a(s, c), a(c, B), a(s, E), D.m(s, null), a(l, u), m && m.m(l, null), a(e, A);
          },
          p(h, k) {
            k & 64 && n !== (n = h[18].positiveDiseases.length > 0 ? "warning_amber" : "check_circle_outline") && G(o, n), k & 64 && r0(x, "positive", h[18].positiveDiseases.length > 0), k & 64 && r0(x, "negative", h[18].positiveDiseases.length === 0), k & 64 && i !== (i = h[18].date + "") && G(B, i), C !== (C = d(h)) && (D.d(1), D = C(h), D && (D.c(), D.m(s, null))), h[18].positiveDiseases.length > 0 ? m ? m.p(h, k) : (m = qt(h), m.c(), m.m(l, null)) : m && (m.d(1), m = null);
          },
          d(h) {
            h && P(e), D.d(), m && m.d();
          }
        };
      }
      function Jl(t) {
        let e, x, n, o, r, l, s, c, i = t[2] ? "close" : "add", B, E, u, A, d, C, D, m, h, k;
        e = new G0({});
        function p(S, N) {
          if (S[4] === "done") return jl;
          if (S[4] === "done_negative") return ql;
          if (S[4] === "done_no_encounters") return Ul;
        }
        let _ = p(t), b = _ && _(t), g = t[5] && Rt(t), v = t[2] && Ot(t);
        function w(S, N) {
          return S[6].length === 0 ? Gl : zl;
        }
        let I = w(t), M = I(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("div"), r = F("h1"), r.textContent = "Test Results", l = y(), s = F("button"), c = F("span"), B = R(i), u = y(), b && b.c(), A = y(), g && g.c(), d = y(), v && v.c(), C = y(), D = F("section"), M.c(), f(r, "class", "svelte-17g38pf"), f(c, "class", "material-icons"), f(s, "class", "fab svelte-17g38pf"), f(s, "title", E = t[2] ? "Cancel" : "Record new result"), f(o, "class", "page-header svelte-17g38pf"), f(D, "class", "card list-card svelte-17g38pf"), f(n, "class", "svelte-17g38pf");
          },
          m(S, N) {
            m0(e, S, N), T(S, x, N), T(S, n, N), a(n, o), a(o, r), a(o, l), a(o, s), a(s, c), a(c, B), a(n, u), b && b.m(n, null), a(n, A), g && g.m(n, null), a(n, d), v && v.m(n, null), a(n, C), a(n, D), M.m(D, null), m = true, h || (k = z(s, "click", t[10]), h = true);
          },
          p(S, [N]) {
            (!m || N & 4) && i !== (i = S[2] ? "close" : "add") && G(B, i), (!m || N & 4 && E !== (E = S[2] ? "Cancel" : "Record new result")) && f(s, "title", E), _ !== (_ = p(S)) && (b && b.d(1), b = _ && _(S), b && (b.c(), b.m(n, A))), S[5] ? g ? g.p(S, N) : (g = Rt(S), g.c(), g.m(n, d)) : g && (g.d(1), g = null), S[2] ? v ? v.p(S, N) : (v = Ot(S), v.c(), v.m(n, C)) : v && (v.d(1), v = null), I === (I = w(S)) && M ? M.p(S, N) : (M.d(1), M = I(S), M && (M.c(), M.m(D, null)));
          },
          i(S) {
            m || (f0(e.$$.fragment, S), m = true);
          },
          o(S) {
            d0(e.$$.fragment, S), m = false;
          },
          d(S) {
            S && (P(x), P(n)), h0(e, S), b && b.d(), g && g.d(), v && v.d(), M.d(), h = false, k();
          }
        };
      }
      const Wl = 23, zt = 50, Xl = 100;
      function Zl(t, e, x) {
        let n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), o = {}, r = false, l = false, s = null, c = null, i = [], B = null;
        O0(() => {
          if (!H0()) {
            B0("/");
            return;
          }
          x(6, i = Ne());
        });
        async function E(_, b) {
          const g = L0(), v = ie(), w = [
            ...g.encounters.map((W) => J0(W.rawToken, W.theirContactId, W.submitIndex)),
            ...(g.relationships || []).map((W) => J0(W.rawToken, W.theirContactId, W.submitIndex))
          ], I = zt + Math.floor(Math.random() * (Xl - zt + 1)), M = [
            ...w
          ];
          for (; M.length < I; ) M.push(be(32));
          for (let W = M.length - 1; W > 0; W--) {
            const Q = Math.floor(Math.random() * (W + 1));
            [M[W], M[Q]] = [
              M[Q],
              M[W]
            ];
          }
          const S = M.map((W) => W0(W)), N = Gn(v), L = _.replace(/-/g, ""), O = b.map((W) => to[W] ?? W).join(""), H = new TextEncoder().encode("1" + L + O), j = ge(N, H), J = W0(j), U = new TextEncoder(), q = JSON.stringify(S), K = U.encode(q).length + U.encode(J).length, x0 = new Uint8Array(K), t0 = U.encode(q), V = U.encode(J);
          x0.set(t0, 0), x0.set(V, t0.length);
          const o0 = ls(x0);
          let E0 = Wl, c0 = (/* @__PURE__ */ new Date()).toISOString();
          for (let W = 0; W < 2; W++) {
            const { nonceHex: Q, counter: $ } = cs(c0, o0, E0), n0 = {
              tokens: S,
              created_at: c0,
              submission_type: "self_reported",
              encrypted_payload: J,
              pow_nonce: Q,
              pow_counter: $
            };
            try {
              await Ms(n0);
              break;
            } catch (a0) {
              if (W === 0 && a0.statusCode === 400) {
                let i0 = false;
                if (a0.powDifficulty && a0.powDifficulty > E0 && (E0 = a0.powDifficulty, i0 = true), a0.serverTime && (c0 = a0.serverTime, i0 = true), i0) continue;
              }
              throw a0;
            }
          }
          await Ks();
        }
        async function u() {
          if (!l) {
            x(3, l = true), x(5, c = null), x(4, s = null);
            try {
              const _ = N0.filter((g) => o[g]), b = await Gs(n, _);
              if (_.length > 0) {
                const g = L0();
                g.encounters.length > 0 || (g.relationships || []).length > 0 ? (x(4, s = "computing"), await new Promise((w) => setTimeout(w, 30)), await E(n, _), await cx(b), x(4, s = "done")) : (await cx(b), x(4, s = "done_no_encounters"));
              } else x(4, s = "done_negative");
              x(1, o = {}), x(0, n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)), x(6, i = Ne()), x(2, r = false);
            } catch (_) {
              x(5, c = _.message), x(4, s = null);
            } finally {
              x(3, l = false);
            }
          }
        }
        async function A(_, b) {
          if (!l) {
            x(3, l = true), x(7, B = _), x(5, c = null);
            try {
              const g = L0();
              if (g.encounters.length === 0 && (g.relationships || []).length === 0) {
                x(5, c = "No encounters or partners recorded \u2014 no one to notify.");
                return;
              }
              await new Promise((v) => setTimeout(v, 30)), await E(b.date, b.positiveDiseases), await cx(_), x(6, i = Ne());
            } catch (g) {
              x(5, c = "Notification failed: " + g.message);
            } finally {
              x(3, l = false), x(7, B = null);
            }
          }
        }
        const d = () => {
          x(2, r = !r), x(5, c = null), x(4, s = null);
        };
        function C() {
          n = this.value, x(0, n);
        }
        function D(_) {
          o[_] = this.checked, x(1, o);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          c,
          i,
          B,
          u,
          A,
          d,
          C,
          D,
          () => {
            x(2, r = false), x(4, s = null), x(5, c = null);
          },
          () => x(2, r = true),
          (_) => Ux[_] ?? _,
          (_, b) => A(_, b)
        ];
      }
      class $l extends _0 {
        constructor(e) {
          super(), k0(this, e, Zl, Jl, p0, {});
        }
      }
      function Gt(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = `<span class="material-icons svelte-1gfet0q">check_circle</span>
      Password changed successfully.`, f(e, "class", "success-banner svelte-1gfet0q");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Kt(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[4]), f(e, "class", "error svelte-1gfet0q");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o & 16 && G(x, n[4]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function e9(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h, k, p, _, b = t[3] ? "Changing password\u2026" : "Change password", g, v, w, I, M, S = t[5] && Gt(), N = t[4] && Kt(t);
        return {
          c() {
            e = F("main"), x = F("a"), x.innerHTML = `<span class="material-icons svelte-1gfet0q">arrow_back</span>
    Back`, n = y(), o = F("h1"), o.textContent = "Change password", r = y(), S && S.c(), l = y(), s = F("form"), c = F("label"), i = R(`Current password
      `), B = F("input"), E = y(), u = F("label"), A = R(`New password
      `), d = F("input"), C = y(), D = F("label"), m = R(`Confirm new password
      `), h = F("input"), k = y(), N && N.c(), p = y(), _ = F("button"), g = R(b), v = y(), w = F("p"), w.textContent = `Your password never leaves your device. The server only receives a
    cryptographic signature proving you know the current password.`, f(x, "href", "#/home"), f(x, "class", "back-link svelte-1gfet0q"), f(o, "class", "svelte-1gfet0q"), f(B, "type", "password"), B.required = true, f(B, "autocomplete", "current-password"), f(B, "class", "svelte-1gfet0q"), f(c, "class", "svelte-1gfet0q"), f(d, "type", "password"), d.required = true, f(d, "autocomplete", "new-password"), f(d, "minlength", "12"), f(d, "class", "svelte-1gfet0q"), f(u, "class", "svelte-1gfet0q"), f(h, "type", "password"), h.required = true, f(h, "autocomplete", "new-password"), f(h, "class", "svelte-1gfet0q"), f(D, "class", "svelte-1gfet0q"), f(_, "type", "submit"), _.disabled = t[3], f(_, "class", "svelte-1gfet0q"), f(s, "class", "svelte-1gfet0q"), f(w, "class", "privacy-note svelte-1gfet0q"), f(e, "class", "svelte-1gfet0q");
          },
          m(L, O) {
            T(L, e, O), a(e, x), a(e, n), a(e, o), a(e, r), S && S.m(e, null), a(e, l), a(e, s), a(s, c), a(c, i), a(c, B), e0(B, t[0]), a(s, E), a(s, u), a(u, A), a(u, d), e0(d, t[1]), a(s, C), a(s, D), a(D, m), a(D, h), e0(h, t[2]), a(s, k), N && N.m(s, null), a(s, p), a(s, _), a(_, g), a(e, v), a(e, w), I || (M = [
              z(B, "input", t[7]),
              z(d, "input", t[8]),
              z(h, "input", t[9]),
              z(s, "submit", z0(t[6]))
            ], I = true);
          },
          p(L, [O]) {
            L[5] ? S || (S = Gt(), S.c(), S.m(e, l)) : S && (S.d(1), S = null), O & 1 && B.value !== L[0] && e0(B, L[0]), O & 2 && d.value !== L[1] && e0(d, L[1]), O & 4 && h.value !== L[2] && e0(h, L[2]), L[4] ? N ? N.p(L, O) : (N = Kt(L), N.c(), N.m(s, p)) : N && (N.d(1), N = null), O & 8 && b !== (b = L[3] ? "Changing password\u2026" : "Change password") && G(g, b), O & 8 && (_.disabled = L[3]);
          },
          i: X,
          o: X,
          d(L) {
            L && P(e), S && S.d(), N && N.d(), I = false, s0(M);
          }
        };
      }
      function x9(t, e, x) {
        let n = "", o = "", r = "", l = false, s = null, c = false;
        O0(() => {
          H0() || B0("/");
        });
        async function i() {
          if (x(4, s = null), x(5, c = false), o !== r) {
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
            const A = Fs(), { challenge: d, auth_salt: C, enc_salt: D } = await Nx(A), m = await q0(n, D0(D)), h = $0();
            if (!h || m.length !== h.length || !m.every((M, S) => M === h[S])) {
              x(4, s = "Current password is incorrect");
              return;
            }
            const k = await q0(n, D0(C)), p = zn(new TextEncoder().encode(d), k), _ = W0(p), b = await q0(o, D0(C)), g = await q0(o, D0(D)), v = Z(jn(b)), { blobHex: w, blobVersion: I } = Xs(g);
            await Ps(_, v, w, I), Lx(g), Zs(I + 1), x(5, c = true), x(0, n = ""), x(1, o = ""), x(2, r = "");
          } catch (A) {
            x(4, s = A.message);
          } finally {
            x(3, l = false);
          }
        }
        function B() {
          n = this.value, x(0, n);
        }
        function E() {
          o = this.value, x(1, o);
        }
        function u() {
          r = this.value, x(2, r);
        }
        return [
          n,
          o,
          r,
          l,
          s,
          c,
          i,
          B,
          E,
          u
        ];
      }
      class t9 extends _0 {
        constructor(e) {
          super(), k0(this, e, x9, e9, p0, {});
        }
      }
      function Vt(t, e, x) {
        const n = t.slice();
        n[8] = e[x], n[11] = x;
        const o = n[0].length - 1 - n[11];
        return n[9] = o, n;
      }
      function n9(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = '<span class="material-icons svelte-1kpz6ew">check_circle_outline</span> <span>No new notifications.</span>', f(e, "class", "status-card ok svelte-1kpz6ew");
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
      function o9(t) {
        let e, x, n, o, r, l, s = t[3] !== 1 ? "s" : "", c, i;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "notifications_active", n = y(), o = F("span"), r = R(t[3]), l = R(" new notification"), c = R(s), i = R(" found."), f(x, "class", "material-icons svelte-1kpz6ew"), f(e, "class", "status-card found svelte-1kpz6ew");
          },
          m(B, E) {
            T(B, e, E), a(e, x), a(e, n), a(e, o), a(o, r), a(o, l), a(o, c), a(o, i);
          },
          p(B, E) {
            E & 8 && G(r, B[3]), E & 8 && s !== (s = B[3] !== 1 ? "s" : "") && G(c, s);
          },
          d(B) {
            B && P(e);
          }
        };
      }
      function r9(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "error_outline", n = y(), o = F("span"), r = R("Could not check for alerts: "), l = R(t[2]), f(x, "class", "material-icons svelte-1kpz6ew"), f(e, "class", "status-card error svelte-1kpz6ew");
          },
          m(s, c) {
            T(s, e, c), a(e, x), a(e, n), a(e, o), a(o, r), a(o, l);
          },
          p(s, c) {
            c & 4 && G(l, s[2]);
          },
          d(s) {
            s && P(e);
          }
        };
      }
      function s9(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = '<span class="material-icons spin svelte-1kpz6ew">sync</span> <span>Checking for notifications\u2026</span>', f(e, "class", "status-card svelte-1kpz6ew");
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
      function l9(t) {
        let e, x = u0([
          ...t[0]
        ].reverse()), n = [];
        for (let o = 0; o < x.length; o += 1) n[o] = Jt(Vt(t, x, o));
        return {
          c() {
            e = F("ul");
            for (let o = 0; o < n.length; o += 1) n[o].c();
            f(e, "class", "svelte-1kpz6ew");
          },
          m(o, r) {
            T(o, e, r);
            for (let l = 0; l < n.length; l += 1) n[l] && n[l].m(e, null);
          },
          p(o, r) {
            if (r & 17) {
              x = u0([
                ...o[0]
              ].reverse());
              let l;
              for (l = 0; l < x.length; l += 1) {
                const s = Vt(o, x, l);
                n[l] ? n[l].p(s, r) : (n[l] = Jt(s), n[l].c(), n[l].m(e, null));
              }
              for (; l < n.length; l += 1) n[l].d(1);
              n.length = x.length;
            }
          },
          d(o) {
            o && P(e), R0(n, o);
          }
        };
      }
      function c9(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "No notifications received yet.", f(e, "class", "muted svelte-1kpz6ew");
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
      function a9(t) {
        let e;
        return {
          c() {
            e = F("span"), e.textContent = "self-reported", f(e, "class", "badge self svelte-1kpz6ew");
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
            e = F("span"), e.textContent = "lab verified", f(e, "class", "badge verified svelte-1kpz6ew");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function Yt(t) {
        let e, x = t[8].diseases.map(t[5]).join(", ") + "", n;
        return {
          c() {
            e = F("div"), n = R(x), f(e, "class", "alert-diseases svelte-1kpz6ew");
          },
          m(o, r) {
            T(o, e, r), a(e, n);
          },
          p(o, r) {
            r & 1 && x !== (x = o[8].diseases.map(o[5]).join(", ") + "") && G(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Qt(t) {
        let e, x, n;
        function o() {
          return t[6](t[9]);
        }
        return {
          c() {
            e = F("button"), e.textContent = "Mark viewed", f(e, "class", "btn-text svelte-1kpz6ew");
          },
          m(r, l) {
            T(r, e, l), x || (n = z(e, "click", o), x = true);
          },
          p(r, l) {
            t = r;
          },
          d(r) {
            r && P(e), x = false, n();
          }
        };
      }
      function Jt(t) {
        let e, x, n, o, r = t[8].labVerified ? "verified" : "report", l, s, c, i, B, E, u, A, d, C = Wt(t[8].testDate) + "", D, m, h, k;
        function p(w, I) {
          return w[8].labVerified ? i9 : a9;
        }
        let _ = p(t), b = _(t), g = t[8].diseases.length > 0 && Yt(t), v = !t[8].viewed && Qt(t);
        return {
          c() {
            e = F("li"), x = F("div"), n = F("div"), o = F("span"), l = R(r), s = y(), c = F("div"), i = F("div"), B = R(`Exposure notification
                    `), b.c(), E = y(), u = F("div"), A = R("Partner's test date: "), d = F("strong"), D = R(C), m = y(), g && g.c(), h = y(), v && v.c(), k = y(), f(o, "class", "material-icons alert-icon svelte-1kpz6ew"), f(i, "class", "alert-title svelte-1kpz6ew"), f(u, "class", "alert-dates svelte-1kpz6ew"), f(n, "class", "alert-meta svelte-1kpz6ew"), f(x, "class", "alert-body svelte-1kpz6ew"), f(e, "class", "svelte-1kpz6ew"), r0(e, "unviewed", !t[8].viewed);
          },
          m(w, I) {
            T(w, e, I), a(e, x), a(x, n), a(n, o), a(o, l), a(n, s), a(n, c), a(c, i), a(i, B), b.m(i, null), a(c, E), a(c, u), a(u, A), a(u, d), a(d, D), a(c, m), g && g.m(c, null), a(x, h), v && v.m(x, null), a(e, k);
          },
          p(w, I) {
            I & 1 && r !== (r = w[8].labVerified ? "verified" : "report") && G(l, r), _ !== (_ = p(w)) && (b.d(1), b = _(w), b && (b.c(), b.m(i, null))), I & 1 && C !== (C = Wt(w[8].testDate) + "") && G(D, C), w[8].diseases.length > 0 ? g ? g.p(w, I) : (g = Yt(w), g.c(), g.m(c, null)) : g && (g.d(1), g = null), w[8].viewed ? v && (v.d(1), v = null) : v ? v.p(w, I) : (v = Qt(w), v.c(), v.m(x, null)), I & 1 && r0(e, "unviewed", !w[8].viewed);
          },
          d(w) {
            w && P(e), b.d(), g && g.d(), v && v.d();
          }
        };
      }
      function E9(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u;
        e = new G0({});
        function A(k, p) {
          return k[1] ? s9 : k[2] ? r9 : k[3] > 0 ? o9 : n9;
        }
        let d = A(t), C = d(t);
        function D(k, p) {
          return k[0].length === 0 ? c9 : l9;
        }
        let m = D(t), h = m(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("div"), o.innerHTML = '<h1 class="svelte-1kpz6ew">Alerts</h1>', r = y(), C.c(), l = y(), s = F("section"), c = F("h2"), c.textContent = "Notification history", i = y(), h.c(), B = y(), E = F("p"), E.textContent = `Notifications are stored only in your encrypted blob \u2014 they are never sent to or stored on
    the server. Logging in via a notification email triggers a fresh query; no alert details
    travel over email.`, f(o, "class", "page-header svelte-1kpz6ew"), f(c, "class", "svelte-1kpz6ew"), f(s, "class", "card svelte-1kpz6ew"), f(E, "class", "privacy-note svelte-1kpz6ew"), f(n, "class", "svelte-1kpz6ew");
          },
          m(k, p) {
            m0(e, k, p), T(k, x, p), T(k, n, p), a(n, o), a(n, r), C.m(n, null), a(n, l), a(n, s), a(s, c), a(s, i), h.m(s, null), a(n, B), a(n, E), u = true;
          },
          p(k, [p]) {
            d === (d = A(k)) && C ? C.p(k, p) : (C.d(1), C = d(k), C && (C.c(), C.m(n, l))), m === (m = D(k)) && h ? h.p(k, p) : (h.d(1), h = m(k), h && (h.c(), h.m(s, null)));
          },
          i(k) {
            u || (f0(e.$$.fragment, k), u = true);
          },
          o(k) {
            d0(e.$$.fragment, k), u = false;
          },
          d(k) {
            k && (P(x), P(n)), h0(e, k), C.d(), h.d();
          }
        };
      }
      function Wt(t) {
        return t ? (/* @__PURE__ */ new Date(t + "T00:00:00Z")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        }) : "\u2014";
      }
      function u9(t, e, x) {
        let n = [], o = true, r = null, l = 0;
        O0(async () => {
          if (!H0()) {
            tl("/alerts"), B0("/");
            return;
          }
          await s(), x(0, n = st());
        });
        async function s() {
          x(1, o = true), x(2, r = null), x(3, l = 0);
          try {
            const E = L0(), u = ie();
            if (!E) return;
            const d = Ne().filter((p) => p.positiveDiseases.length === 0).map((p) => p.date).sort().pop() ?? null, C = /* @__PURE__ */ new Map(), D = [];
            for (const p of E.encounters) {
              const _ = J0(p.rawToken, u, p.queryIndex), b = W0(_);
              C.set(b, {
                rawTokenHex: Z(p.rawToken),
                alertDate: p.date
              }), D.push(b);
            }
            for (const p of E.relationships || []) {
              if (!$s(p, d)) continue;
              const _ = J0(p.rawToken, u, p.queryIndex), b = W0(_);
              C.set(b, {
                rawTokenHex: Z(p.rawToken),
                alertDate: p.createdAt
              }), D.push(b);
            }
            if (D.length === 0) return;
            const m = Math.max(50, D.length * 2), h = [
              ...D
            ];
            for (; h.length < m; ) h.push(W0(be(32)));
            for (let p = h.length - 1; p > 0; p--) {
              const _ = Math.floor(Math.random() * (p + 1));
              [h[p], h[_]] = [
                h[_],
                h[p]
              ];
            }
            const { matches: k } = await Ts(h);
            if (!k || k.length === 0) return;
            for (const p of k) {
              const _ = C.get(p.token);
              if (!_) continue;
              const g = [
                ...L0().encounters || [],
                ...L0().relationships || []
              ].find((U) => Z(U.rawToken) === _.rawTokenHex);
              if (!g) continue;
              const v = Gn(g.theirContactId);
              let w;
              try {
                w = $e(v, Kn(p.encrypted_payload));
              } catch {
                continue;
              }
              const I = new TextDecoder().decode(w), M = I.slice(1, 9), S = `${M.slice(0, 4)}-${M.slice(4, 6)}-${M.slice(6, 8)}`, N = I.length > 9 ? I.slice(9).split(",") : [], L = Object.fromEntries(Object.entries(to).map(([U, q]) => [
                q,
                U
              ])), O = N.map((U) => L[U]).filter(Boolean), H = Z(J0(g.rawToken, u, g.queryIndex));
              await Vs(_.rawTokenHex, S, O, p.verified), x(3, l++, l);
              const j = [
                ...L0().encounters || [],
                ...L0().relationships || []
              ].find((U) => Z(U.rawToken) === _.rawTokenHex), J = Z(J0(g.rawToken, u, j?.queryIndex ?? g.queryIndex + 1));
              try {
                await Jn(J, _.alertDate);
              } catch (U) {
                console.warn("alerts: could not register next query token:", U.message);
              }
              try {
                await Ss(H);
              } catch (U) {
                console.warn("alerts: could not delete old query token:", U.message);
              }
            }
          } catch (E) {
            x(2, r = E.message);
          } finally {
            x(1, o = false);
          }
        }
        async function c(E) {
          await Ys(E), x(0, n = st());
        }
        return [
          n,
          o,
          r,
          l,
          c,
          (E) => Ux[E] ?? E,
          (E) => c(E)
        ];
      }
      class f9 extends _0 {
        constructor(e) {
          super(), k0(this, e, u9, E9, p0, {});
        }
      }
      var B9 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      function d9(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      }
      var ee = {}, C9 = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
      }, lo = {}, v0 = {};
      let Gx;
      const A9 = [
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
      v0.getSymbolSize = function(e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return e * 4 + 17;
      };
      v0.getSymbolTotalCodewords = function(e) {
        return A9[e];
      };
      v0.getBCHDigit = function(t) {
        let e = 0;
        for (; t !== 0; ) e++, t >>>= 1;
        return e;
      };
      v0.setToSJISFunction = function(e) {
        if (typeof e != "function") throw new Error('"toSJISFunc" is not a valid function.');
        Gx = e;
      };
      v0.isKanjiModeEnabled = function() {
        return typeof Gx < "u";
      };
      v0.toSJIS = function(e) {
        return Gx(e);
      };
      var xx = {};
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
      })(xx);
      function co() {
        this.buffer = [], this.length = 0;
      }
      co.prototype = {
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
      var F9 = co;
      function we(t) {
        if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
      }
      we.prototype.set = function(t, e, x, n) {
        const o = t * this.size + e;
        this.data[o] = x, n && (this.reservedBit[o] = true);
      };
      we.prototype.get = function(t, e) {
        return this.data[t * this.size + e];
      };
      we.prototype.xor = function(t, e, x) {
        this.data[t * this.size + e] ^= x;
      };
      we.prototype.isReserved = function(t, e) {
        return this.reservedBit[t * this.size + e];
      };
      var D9 = we, ao = {};
      (function(t) {
        const e = v0.getSymbolSize;
        t.getRowColCoords = function(n) {
          if (n === 1) return [];
          const o = Math.floor(n / 7) + 2, r = e(n), l = r === 145 ? 26 : Math.ceil((r - 13) / (2 * o - 2)) * 2, s = [
            r - 7
          ];
          for (let c = 1; c < o - 1; c++) s[c] = s[c - 1] - l;
          return s.push(6), s.reverse();
        }, t.getPositions = function(n) {
          const o = [], r = t.getRowColCoords(n), l = r.length;
          for (let s = 0; s < l; s++) for (let c = 0; c < l; c++) s === 0 && c === 0 || s === 0 && c === l - 1 || s === l - 1 && c === 0 || o.push([
            r[s],
            r[c]
          ]);
          return o;
        };
      })(ao);
      var io = {};
      const p9 = v0.getSymbolSize, Xt = 7;
      io.getPositions = function(e) {
        const x = p9(e);
        return [
          [
            0,
            0
          ],
          [
            x - Xt,
            0
          ],
          [
            0,
            x - Xt
          ]
        ];
      };
      var Eo = {};
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
          let l = 0, s = 0, c = 0, i = null, B = null;
          for (let E = 0; E < r; E++) {
            s = c = 0, i = B = null;
            for (let u = 0; u < r; u++) {
              let A = o.get(E, u);
              A === i ? s++ : (s >= 5 && (l += e.N1 + (s - 5)), i = A, s = 1), A = o.get(u, E), A === B ? c++ : (c >= 5 && (l += e.N1 + (c - 5)), B = A, c = 1);
            }
            s >= 5 && (l += e.N1 + (s - 5)), c >= 5 && (l += e.N1 + (c - 5));
          }
          return l;
        }, t.getPenaltyN2 = function(o) {
          const r = o.size;
          let l = 0;
          for (let s = 0; s < r - 1; s++) for (let c = 0; c < r - 1; c++) {
            const i = o.get(s, c) + o.get(s, c + 1) + o.get(s + 1, c) + o.get(s + 1, c + 1);
            (i === 4 || i === 0) && l++;
          }
          return l * e.N2;
        }, t.getPenaltyN3 = function(o) {
          const r = o.size;
          let l = 0, s = 0, c = 0;
          for (let i = 0; i < r; i++) {
            s = c = 0;
            for (let B = 0; B < r; B++) s = s << 1 & 2047 | o.get(i, B), B >= 10 && (s === 1488 || s === 93) && l++, c = c << 1 & 2047 | o.get(B, i), B >= 10 && (c === 1488 || c === 93) && l++;
          }
          return l * e.N3;
        }, t.getPenaltyN4 = function(o) {
          let r = 0;
          const l = o.data.length;
          for (let c = 0; c < l; c++) r += o.data[c];
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
          for (let s = 0; s < l; s++) for (let c = 0; c < l; c++) r.isReserved(c, s) || r.xor(c, s, x(o, c, s));
        }, t.getBestMask = function(o, r) {
          const l = Object.keys(t.Patterns).length;
          let s = 0, c = 1 / 0;
          for (let i = 0; i < l; i++) {
            r(i), t.applyMask(i, o);
            const B = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
            t.applyMask(i, o), B < c && (c = B, s = i);
          }
          return s;
        };
      })(Eo);
      var tx = {};
      const j0 = xx, Se = [
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
      ], Me = [
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
      tx.getBlocksCount = function(e, x) {
        switch (x) {
          case j0.L:
            return Se[(e - 1) * 4 + 0];
          case j0.M:
            return Se[(e - 1) * 4 + 1];
          case j0.Q:
            return Se[(e - 1) * 4 + 2];
          case j0.H:
            return Se[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      tx.getTotalCodewordsCount = function(e, x) {
        switch (x) {
          case j0.L:
            return Me[(e - 1) * 4 + 0];
          case j0.M:
            return Me[(e - 1) * 4 + 1];
          case j0.Q:
            return Me[(e - 1) * 4 + 2];
          case j0.H:
            return Me[(e - 1) * 4 + 3];
          default:
            return;
        }
      };
      var uo = {}, nx = {};
      const De = new Uint8Array(512), Ve = new Uint8Array(256);
      (function() {
        let e = 1;
        for (let x = 0; x < 255; x++) De[x] = e, Ve[e] = x, e <<= 1, e & 256 && (e ^= 285);
        for (let x = 255; x < 512; x++) De[x] = De[x - 255];
      })();
      nx.log = function(e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return Ve[e];
      };
      nx.exp = function(e) {
        return De[e];
      };
      nx.mul = function(e, x) {
        return e === 0 || x === 0 ? 0 : De[Ve[e] + Ve[x]];
      };
      (function(t) {
        const e = nx;
        t.mul = function(n, o) {
          const r = new Uint8Array(n.length + o.length - 1);
          for (let l = 0; l < n.length; l++) for (let s = 0; s < o.length; s++) r[l + s] ^= e.mul(n[l], o[s]);
          return r;
        }, t.mod = function(n, o) {
          let r = new Uint8Array(n);
          for (; r.length - o.length >= 0; ) {
            const l = r[0];
            for (let c = 0; c < o.length; c++) r[c] ^= e.mul(o[c], l);
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
      })(uo);
      const fo = uo;
      function Kx(t) {
        this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
      }
      Kx.prototype.initialize = function(e) {
        this.degree = e, this.genPoly = fo.generateECPolynomial(this.degree);
      };
      Kx.prototype.encode = function(e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        const x = new Uint8Array(e.length + this.degree);
        x.set(e);
        const n = fo.mod(x, this.genPoly), o = this.degree - n.length;
        if (o > 0) {
          const r = new Uint8Array(this.degree);
          return r.set(n, o), r;
        }
        return n;
      };
      var m9 = Kx, Bo = {}, K0 = {}, Vx = {};
      Vx.isValid = function(e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
      var U0 = {};
      const Co = "[0-9]+", h9 = "[A-Z $%*+\\-./:]+";
      let he = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      he = he.replace(/u/g, "\\u");
      const k9 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + he + `)(?:.|[\r
]))+`;
      U0.KANJI = new RegExp(he, "g");
      U0.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
      U0.BYTE = new RegExp(k9, "g");
      U0.NUMERIC = new RegExp(Co, "g");
      U0.ALPHANUMERIC = new RegExp(h9, "g");
      const _9 = new RegExp("^" + he + "$"), b9 = new RegExp("^" + Co + "$"), g9 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      U0.testKanji = function(e) {
        return _9.test(e);
      };
      U0.testNumeric = function(e) {
        return b9.test(e);
      };
      U0.testAlphanumeric = function(e) {
        return g9.test(e);
      };
      (function(t) {
        const e = Vx, x = U0;
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
      })(K0);
      (function(t) {
        const e = v0, x = tx, n = xx, o = K0, r = Vx, l = 7973, s = e.getBCHDigit(l);
        function c(u, A, d) {
          for (let C = 1; C <= 40; C++) if (A <= t.getCapacity(C, d, u)) return C;
        }
        function i(u, A) {
          return o.getCharCountIndicator(u, A) + 4;
        }
        function B(u, A) {
          let d = 0;
          return u.forEach(function(C) {
            const D = i(C.mode, A);
            d += D + C.getBitsLength();
          }), d;
        }
        function E(u, A) {
          for (let d = 1; d <= 40; d++) if (B(u, d) <= t.getCapacity(d, A, o.MIXED)) return d;
        }
        t.from = function(A, d) {
          return r.isValid(A) ? parseInt(A, 10) : d;
        }, t.getCapacity = function(A, d, C) {
          if (!r.isValid(A)) throw new Error("Invalid QR Code version");
          typeof C > "u" && (C = o.BYTE);
          const D = e.getSymbolTotalCodewords(A), m = x.getTotalCodewordsCount(A, d), h = (D - m) * 8;
          if (C === o.MIXED) return h;
          const k = h - i(C, A);
          switch (C) {
            case o.NUMERIC:
              return Math.floor(k / 10 * 3);
            case o.ALPHANUMERIC:
              return Math.floor(k / 11 * 2);
            case o.KANJI:
              return Math.floor(k / 13);
            case o.BYTE:
            default:
              return Math.floor(k / 8);
          }
        }, t.getBestVersionForData = function(A, d) {
          let C;
          const D = n.from(d, n.M);
          if (Array.isArray(A)) {
            if (A.length > 1) return E(A, D);
            if (A.length === 0) return 1;
            C = A[0];
          } else C = A;
          return c(C.mode, C.getLength(), D);
        }, t.getEncodedBits = function(A) {
          if (!r.isValid(A) || A < 7) throw new Error("Invalid QR Code version");
          let d = A << 12;
          for (; e.getBCHDigit(d) - s >= 0; ) d ^= l << e.getBCHDigit(d) - s;
          return A << 12 | d;
        };
      })(Bo);
      var Ao = {};
      const _x = v0, Fo = 1335, v9 = 21522, Zt = _x.getBCHDigit(Fo);
      Ao.getEncodedBits = function(e, x) {
        const n = e.bit << 3 | x;
        let o = n << 10;
        for (; _x.getBCHDigit(o) - Zt >= 0; ) o ^= Fo << _x.getBCHDigit(o) - Zt;
        return (n << 10 | o) ^ v9;
      };
      var Do = {};
      const w9 = K0;
      function Ee(t) {
        this.mode = w9.NUMERIC, this.data = t.toString();
      }
      Ee.getBitsLength = function(e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
      };
      Ee.prototype.getLength = function() {
        return this.data.length;
      };
      Ee.prototype.getBitsLength = function() {
        return Ee.getBitsLength(this.data.length);
      };
      Ee.prototype.write = function(e) {
        let x, n, o;
        for (x = 0; x + 3 <= this.data.length; x += 3) n = this.data.substr(x, 3), o = parseInt(n, 10), e.put(o, 10);
        const r = this.data.length - x;
        r > 0 && (n = this.data.substr(x), o = parseInt(n, 10), e.put(o, r * 3 + 1));
      };
      var y9 = Ee;
      const P9 = K0, ax = [
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
      function ue(t) {
        this.mode = P9.ALPHANUMERIC, this.data = t;
      }
      ue.getBitsLength = function(e) {
        return 11 * Math.floor(e / 2) + 6 * (e % 2);
      };
      ue.prototype.getLength = function() {
        return this.data.length;
      };
      ue.prototype.getBitsLength = function() {
        return ue.getBitsLength(this.data.length);
      };
      ue.prototype.write = function(e) {
        let x;
        for (x = 0; x + 2 <= this.data.length; x += 2) {
          let n = ax.indexOf(this.data[x]) * 45;
          n += ax.indexOf(this.data[x + 1]), e.put(n, 11);
        }
        this.data.length % 2 && e.put(ax.indexOf(this.data[x]), 6);
      };
      var T9 = ue;
      const S9 = K0;
      function fe(t) {
        this.mode = S9.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
      }
      fe.getBitsLength = function(e) {
        return e * 8;
      };
      fe.prototype.getLength = function() {
        return this.data.length;
      };
      fe.prototype.getBitsLength = function() {
        return fe.getBitsLength(this.data.length);
      };
      fe.prototype.write = function(t) {
        for (let e = 0, x = this.data.length; e < x; e++) t.put(this.data[e], 8);
      };
      var M9 = fe;
      const I9 = K0, L9 = v0;
      function Be(t) {
        this.mode = I9.KANJI, this.data = t;
      }
      Be.getBitsLength = function(e) {
        return e * 13;
      };
      Be.prototype.getLength = function() {
        return this.data.length;
      };
      Be.prototype.getBitsLength = function() {
        return Be.getBitsLength(this.data.length);
      };
      Be.prototype.write = function(t) {
        let e;
        for (e = 0; e < this.data.length; e++) {
          let x = L9.toSJIS(this.data[e]);
          if (x >= 33088 && x <= 40956) x -= 33088;
          else if (x >= 57408 && x <= 60351) x -= 49472;
          else throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
          x = (x >>> 8 & 255) * 192 + (x & 255), t.put(x, 13);
        }
      };
      var N9 = Be, po = {
        exports: {}
      };
      (function(t) {
        var e = {
          single_source_shortest_paths: function(x, n, o) {
            var r = {}, l = {};
            l[n] = 0;
            var s = e.PriorityQueue.make();
            s.push(n, 0);
            for (var c, i, B, E, u, A, d, C, D; !s.empty(); ) {
              c = s.pop(), i = c.value, E = c.cost, u = x[i] || {};
              for (B in u) u.hasOwnProperty(B) && (A = u[B], d = E + A, C = l[B], D = typeof l[B] > "u", (D || C > d) && (l[B] = d, s.push(B, d), r[B] = i));
            }
            if (typeof o < "u" && typeof l[o] > "u") {
              var m = [
                "Could not find a path from ",
                n,
                " to ",
                o,
                "."
              ].join("");
              throw new Error(m);
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
      })(po);
      var R9 = po.exports;
      (function(t) {
        const e = K0, x = y9, n = T9, o = M9, r = N9, l = U0, s = v0, c = R9;
        function i(m) {
          return unescape(encodeURIComponent(m)).length;
        }
        function B(m, h, k) {
          const p = [];
          let _;
          for (; (_ = m.exec(k)) !== null; ) p.push({
            data: _[0],
            index: _.index,
            mode: h,
            length: _[0].length
          });
          return p;
        }
        function E(m) {
          const h = B(l.NUMERIC, e.NUMERIC, m), k = B(l.ALPHANUMERIC, e.ALPHANUMERIC, m);
          let p, _;
          return s.isKanjiModeEnabled() ? (p = B(l.BYTE, e.BYTE, m), _ = B(l.KANJI, e.KANJI, m)) : (p = B(l.BYTE_KANJI, e.BYTE, m), _ = []), h.concat(k, p, _).sort(function(g, v) {
            return g.index - v.index;
          }).map(function(g) {
            return {
              data: g.data,
              mode: g.mode,
              length: g.length
            };
          });
        }
        function u(m, h) {
          switch (h) {
            case e.NUMERIC:
              return x.getBitsLength(m);
            case e.ALPHANUMERIC:
              return n.getBitsLength(m);
            case e.KANJI:
              return r.getBitsLength(m);
            case e.BYTE:
              return o.getBitsLength(m);
          }
        }
        function A(m) {
          return m.reduce(function(h, k) {
            const p = h.length - 1 >= 0 ? h[h.length - 1] : null;
            return p && p.mode === k.mode ? (h[h.length - 1].data += k.data, h) : (h.push(k), h);
          }, []);
        }
        function d(m) {
          const h = [];
          for (let k = 0; k < m.length; k++) {
            const p = m[k];
            switch (p.mode) {
              case e.NUMERIC:
                h.push([
                  p,
                  {
                    data: p.data,
                    mode: e.ALPHANUMERIC,
                    length: p.length
                  },
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: p.length
                  }
                ]);
                break;
              case e.ALPHANUMERIC:
                h.push([
                  p,
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: p.length
                  }
                ]);
                break;
              case e.KANJI:
                h.push([
                  p,
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: i(p.data)
                  }
                ]);
                break;
              case e.BYTE:
                h.push([
                  {
                    data: p.data,
                    mode: e.BYTE,
                    length: i(p.data)
                  }
                ]);
            }
          }
          return h;
        }
        function C(m, h) {
          const k = {}, p = {
            start: {}
          };
          let _ = [
            "start"
          ];
          for (let b = 0; b < m.length; b++) {
            const g = m[b], v = [];
            for (let w = 0; w < g.length; w++) {
              const I = g[w], M = "" + b + w;
              v.push(M), k[M] = {
                node: I,
                lastCount: 0
              }, p[M] = {};
              for (let S = 0; S < _.length; S++) {
                const N = _[S];
                k[N] && k[N].node.mode === I.mode ? (p[N][M] = u(k[N].lastCount + I.length, I.mode) - u(k[N].lastCount, I.mode), k[N].lastCount += I.length) : (k[N] && (k[N].lastCount = I.length), p[N][M] = u(I.length, I.mode) + 4 + e.getCharCountIndicator(I.mode, h));
              }
            }
            _ = v;
          }
          for (let b = 0; b < _.length; b++) p[_[b]].end = 0;
          return {
            map: p,
            table: k
          };
        }
        function D(m, h) {
          let k;
          const p = e.getBestModeForData(m);
          if (k = e.from(h, p), k !== e.BYTE && k.bit < p.bit) throw new Error('"' + m + '" cannot be encoded with mode ' + e.toString(k) + `.
 Suggested mode is: ` + e.toString(p));
          switch (k === e.KANJI && !s.isKanjiModeEnabled() && (k = e.BYTE), k) {
            case e.NUMERIC:
              return new x(m);
            case e.ALPHANUMERIC:
              return new n(m);
            case e.KANJI:
              return new r(m);
            case e.BYTE:
              return new o(m);
          }
        }
        t.fromArray = function(h) {
          return h.reduce(function(k, p) {
            return typeof p == "string" ? k.push(D(p, null)) : p.data && k.push(D(p.data, p.mode)), k;
          }, []);
        }, t.fromString = function(h, k) {
          const p = E(h, s.isKanjiModeEnabled()), _ = d(p), b = C(_, k), g = c.find_path(b.map, "start", "end"), v = [];
          for (let w = 1; w < g.length - 1; w++) v.push(b.table[g[w]].node);
          return t.fromArray(A(v));
        }, t.rawSplit = function(h) {
          return t.fromArray(E(h, s.isKanjiModeEnabled()));
        };
      })(Do);
      const ox = v0, ix = xx, O9 = F9, H9 = D9, U9 = ao, q9 = io, bx = Eo, gx = tx, j9 = m9, Ye = Bo, z9 = Ao, G9 = K0, Ex = Do;
      function K9(t, e) {
        const x = t.size, n = q9.getPositions(e);
        for (let o = 0; o < n.length; o++) {
          const r = n[o][0], l = n[o][1];
          for (let s = -1; s <= 7; s++) if (!(r + s <= -1 || x <= r + s)) for (let c = -1; c <= 7; c++) l + c <= -1 || x <= l + c || (s >= 0 && s <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && c >= 2 && c <= 4 ? t.set(r + s, l + c, true, true) : t.set(r + s, l + c, false, true));
        }
      }
      function V9(t) {
        const e = t.size;
        for (let x = 8; x < e - 8; x++) {
          const n = x % 2 === 0;
          t.set(x, 6, n, true), t.set(6, x, n, true);
        }
      }
      function Y9(t, e) {
        const x = U9.getPositions(e);
        for (let n = 0; n < x.length; n++) {
          const o = x[n][0], r = x[n][1];
          for (let l = -2; l <= 2; l++) for (let s = -2; s <= 2; s++) l === -2 || l === 2 || s === -2 || s === 2 || l === 0 && s === 0 ? t.set(o + l, r + s, true, true) : t.set(o + l, r + s, false, true);
        }
      }
      function Q9(t, e) {
        const x = t.size, n = Ye.getEncodedBits(e);
        let o, r, l;
        for (let s = 0; s < 18; s++) o = Math.floor(s / 3), r = s % 3 + x - 8 - 3, l = (n >> s & 1) === 1, t.set(o, r, l, true), t.set(r, o, l, true);
      }
      function ux(t, e, x) {
        const n = t.size, o = z9.getEncodedBits(e, x);
        let r, l;
        for (r = 0; r < 15; r++) l = (o >> r & 1) === 1, r < 6 ? t.set(r, 8, l, true) : r < 8 ? t.set(r + 1, 8, l, true) : t.set(n - 15 + r, 8, l, true), r < 8 ? t.set(8, n - r - 1, l, true) : r < 9 ? t.set(8, 15 - r - 1 + 1, l, true) : t.set(8, 15 - r - 1, l, true);
        t.set(n - 8, 8, 1, true);
      }
      function J9(t, e) {
        const x = t.size;
        let n = -1, o = x - 1, r = 7, l = 0;
        for (let s = x - 1; s > 0; s -= 2) for (s === 6 && s--; ; ) {
          for (let c = 0; c < 2; c++) if (!t.isReserved(o, s - c)) {
            let i = false;
            l < e.length && (i = (e[l] >>> r & 1) === 1), t.set(o, s - c, i), r--, r === -1 && (l++, r = 7);
          }
          if (o += n, o < 0 || x <= o) {
            o -= n, n = -n;
            break;
          }
        }
      }
      function W9(t, e, x) {
        const n = new O9();
        x.forEach(function(c) {
          n.put(c.mode.bit, 4), n.put(c.getLength(), G9.getCharCountIndicator(c.mode, t)), c.write(n);
        });
        const o = ox.getSymbolTotalCodewords(t), r = gx.getTotalCodewordsCount(t, e), l = (o - r) * 8;
        for (n.getLengthInBits() + 4 <= l && n.put(0, 4); n.getLengthInBits() % 8 !== 0; ) n.putBit(0);
        const s = (l - n.getLengthInBits()) / 8;
        for (let c = 0; c < s; c++) n.put(c % 2 ? 17 : 236, 8);
        return X9(n, t, e);
      }
      function X9(t, e, x) {
        const n = ox.getSymbolTotalCodewords(e), o = gx.getTotalCodewordsCount(e, x), r = n - o, l = gx.getBlocksCount(e, x), s = n % l, c = l - s, i = Math.floor(n / l), B = Math.floor(r / l), E = B + 1, u = i - B, A = new j9(u);
        let d = 0;
        const C = new Array(l), D = new Array(l);
        let m = 0;
        const h = new Uint8Array(t.buffer);
        for (let g = 0; g < l; g++) {
          const v = g < c ? B : E;
          C[g] = h.slice(d, d + v), D[g] = A.encode(C[g]), d += v, m = Math.max(m, v);
        }
        const k = new Uint8Array(n);
        let p = 0, _, b;
        for (_ = 0; _ < m; _++) for (b = 0; b < l; b++) _ < C[b].length && (k[p++] = C[b][_]);
        for (_ = 0; _ < u; _++) for (b = 0; b < l; b++) k[p++] = D[b][_];
        return k;
      }
      function Z9(t, e, x, n) {
        let o;
        if (Array.isArray(t)) o = Ex.fromArray(t);
        else if (typeof t == "string") {
          let i = e;
          if (!i) {
            const B = Ex.rawSplit(t);
            i = Ye.getBestVersionForData(B, x);
          }
          o = Ex.fromString(t, i || 40);
        } else throw new Error("Invalid data");
        const r = Ye.getBestVersionForData(o, x);
        if (!r) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (!e) e = r;
        else if (e < r) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + r + `.
`);
        const l = W9(e, x, o), s = ox.getSymbolSize(e), c = new H9(s);
        return K9(c, e), V9(c), Y9(c, e), ux(c, x, 0), e >= 7 && Q9(c, e), J9(c, l), isNaN(n) && (n = bx.getBestMask(c, ux.bind(null, c, x))), bx.applyMask(n, c), ux(c, x, n), {
          modules: c,
          version: e,
          errorCorrectionLevel: x,
          maskPattern: n,
          segments: o
        };
      }
      lo.create = function(e, x) {
        if (typeof e > "u" || e === "") throw new Error("No input text");
        let n = ix.M, o, r;
        return typeof x < "u" && (n = ix.from(x.errorCorrectionLevel, ix.M), o = Ye.from(x.version), r = bx.from(x.maskPattern), x.toSJISFunc && ox.setToSJISFunction(x.toSJISFunc)), Z9(e, o, n, r);
      };
      var mo = {}, Yx = {};
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
          const l = o.modules.size, s = o.modules.data, c = t.getScale(l, r), i = Math.floor((l + r.margin * 2) * c), B = r.margin * c, E = [
            r.color.light,
            r.color.dark
          ];
          for (let u = 0; u < i; u++) for (let A = 0; A < i; A++) {
            let d = (u * i + A) * 4, C = r.color.light;
            if (u >= B && A >= B && u < i - B && A < i - B) {
              const D = Math.floor((u - B) / c), m = Math.floor((A - B) / c);
              C = E[s[D * l + m] ? 1 : 0];
            }
            n[d++] = C.r, n[d++] = C.g, n[d++] = C.b, n[d] = C.a;
          }
        };
      })(Yx);
      (function(t) {
        const e = Yx;
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
          let c = s, i = l;
          typeof c > "u" && (!l || !l.getContext) && (c = l, l = void 0), l || (i = n()), c = e.getOptions(c);
          const B = e.getImageWidth(r.modules.size, c), E = i.getContext("2d"), u = E.createImageData(B, B);
          return e.qrToImageData(u.data, r, c), x(E, i, B), E.putImageData(u, 0, 0), i;
        }, t.renderToDataURL = function(r, l, s) {
          let c = s;
          typeof c > "u" && (!l || !l.getContext) && (c = l, l = void 0), c || (c = {});
          const i = t.render(r, l, c), B = c.type || "image/png", E = c.rendererOpts || {};
          return i.toDataURL(B, E.quality);
        };
      })(mo);
      var ho = {};
      const $9 = Yx;
      function $t(t, e) {
        const x = t.a / 255, n = e + '="' + t.hex + '"';
        return x < 1 ? n + " " + e + '-opacity="' + x.toFixed(2).slice(1) + '"' : n;
      }
      function fx(t, e, x) {
        let n = t + e;
        return typeof x < "u" && (n += " " + x), n;
      }
      function e8(t, e, x) {
        let n = "", o = 0, r = false, l = 0;
        for (let s = 0; s < t.length; s++) {
          const c = Math.floor(s % e), i = Math.floor(s / e);
          !c && !r && (r = true), t[s] ? (l++, s > 0 && c > 0 && t[s - 1] || (n += r ? fx("M", c + x, 0.5 + i + x) : fx("m", o, 0), o = 0, r = false), c + 1 < e && t[s + 1] || (n += fx("h", l), l = 0)) : o++;
        }
        return n;
      }
      ho.render = function(e, x, n) {
        const o = $9.getOptions(x), r = e.modules.size, l = e.modules.data, s = r + o.margin * 2, c = o.color.light.a ? "<path " + $t(o.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", i = "<path " + $t(o.color.dark, "stroke") + ' d="' + e8(l, r, o.margin) + '"/>', B = 'viewBox="0 0 ' + s + " " + s + '"', u = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + B + ' shape-rendering="crispEdges">' + c + i + `</svg>
`;
        return typeof n == "function" && n(null, u), u;
      };
      const x8 = C9, vx = lo, ko = mo, t8 = ho;
      function Qx(t, e, x, n, o) {
        const r = [].slice.call(arguments, 1), l = r.length, s = typeof r[l - 1] == "function";
        if (!s && !x8()) throw new Error("Callback required as last argument");
        if (s) {
          if (l < 2) throw new Error("Too few arguments provided");
          l === 2 ? (o = x, x = e, e = n = void 0) : l === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = x, x = e, e = void 0));
        } else {
          if (l < 1) throw new Error("Too few arguments provided");
          return l === 1 ? (x = e, e = n = void 0) : l === 2 && !e.getContext && (n = x, x = e, e = void 0), new Promise(function(c, i) {
            try {
              const B = vx.create(x, n);
              c(t(B, e, n));
            } catch (B) {
              i(B);
            }
          });
        }
        try {
          const c = vx.create(x, n);
          o(null, t(c, e, n));
        } catch (c) {
          o(c);
        }
      }
      ee.create = vx.create;
      ee.toCanvas = Qx.bind(null, ko.render);
      ee.toDataURL = Qx.bind(null, ko.renderToDataURL);
      ee.toString = Qx.bind(null, function(t, e, x) {
        return t8.render(t, x);
      });
      function n8(t) {
        let e, x, n, o, r, l, s = t[0].isHost ? "You started this group" : "Group encounter", c, i, B, E = on(t[0].date) + "", u, A, d, C, D = t[0].isHost && t[11](), m, h, k, p, _, b, g, v, w, I, M = t[3] && en(t);
        function S(q, K) {
          return q[5] ? s8 : r8;
        }
        let N = S(t), L = N(t), O = D && tn(t), H = t[8] && nn();
        function j(q, K) {
          return q[4] ? i8 : a8;
        }
        let J = j(t), U = J(t);
        return {
          c() {
            M && M.c(), e = y(), x = F("section"), n = F("div"), o = F("span"), o.textContent = "groups", r = y(), l = F("span"), c = R(s), i = y(), B = F("p"), u = R(E), A = y(), d = F("section"), L.c(), C = y(), O && O.c(), m = y(), h = F("section"), k = F("div"), k.innerHTML = '<span class="material-icons privacy-icon svelte-uobr18">lock_outline</span> <p class="privacy-text svelte-uobr18">Your note is stored encrypted and never shared.</p>', p = y(), _ = F("textarea"), b = y(), H && H.c(), g = y(), v = F("section"), U.c(), f(o, "class", "material-icons status-icon svelte-uobr18"), f(l, "class", "status-label svelte-uobr18"), f(n, "class", "status-row svelte-uobr18"), f(B, "class", "date svelte-uobr18"), f(x, "class", "card pad svelte-uobr18"), f(d, "class", "card svelte-uobr18"), f(k, "class", "privacy-row svelte-uobr18"), f(_, "placeholder", "Add a private note\u2026"), f(_, "rows", "5"), f(_, "class", "svelte-uobr18"), f(h, "class", "card pad svelte-uobr18"), f(v, "class", "card svelte-uobr18");
          },
          m(q, K) {
            M && M.m(q, K), T(q, e, K), T(q, x, K), a(x, n), a(n, o), a(n, r), a(n, l), a(l, c), a(x, i), a(x, B), a(B, u), T(q, A, K), T(q, d, K), L.m(d, null), T(q, C, K), O && O.m(q, K), T(q, m, K), T(q, h, K), a(h, k), a(h, p), a(h, _), e0(_, t[7]), a(h, b), H && H.m(h, null), T(q, g, K), T(q, v, K), U.m(v, null), w || (I = [
              z(_, "input", t[19]),
              z(_, "input", t[15])
            ], w = true);
          },
          p(q, K) {
            q[3] ? M ? M.p(q, K) : (M = en(q), M.c(), M.m(e.parentNode, e)) : M && (M.d(1), M = null), K & 1 && s !== (s = q[0].isHost ? "You started this group" : "Group encounter") && G(c, s), K & 1 && E !== (E = on(q[0].date) + "") && G(u, E), N === (N = S(q)) && L ? L.p(q, K) : (L.d(1), L = N(q), L && (L.c(), L.m(d, null))), K & 1 && (D = q[0].isHost && q[11]()), D ? O ? O.p(q, K) : (O = tn(q), O.c(), O.m(m.parentNode, m)) : O && (O.d(1), O = null), K & 128 && e0(_, q[7]), q[8] ? H || (H = nn(), H.c(), H.m(h, null)) : H && (H.d(1), H = null), J === (J = j(q)) && U ? U.p(q, K) : (U.d(1), U = J(q), U && (U.c(), U.m(v, null)));
          },
          d(q) {
            q && (P(e), P(x), P(A), P(d), P(C), P(m), P(h), P(g), P(v)), M && M.d(q), L.d(), O && O.d(q), H && H.d(), U.d(), w = false, s0(I);
          }
        };
      }
      function o8(t) {
        let e;
        return {
          c() {
            e = F("section"), e.innerHTML = '<p class="muted svelte-uobr18">This group encounter could not be found.</p> <a href="#/encounters" class="btn-text svelte-uobr18">\u2190 Back to encounters</a>', f(e, "class", "card pad svelte-uobr18");
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
        let e, x, n, o;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "error_outline", n = y(), o = R(t[3]), f(x, "class", "material-icons svelte-uobr18"), f(e, "class", "toast error-toast svelte-uobr18");
          },
          m(r, l) {
            T(r, e, l), a(e, x), a(e, n), a(e, o);
          },
          p(r, l) {
            l & 8 && G(o, r[3]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function r8(t) {
        let e, x, n, o, r = (t[0].name ? t[0].name : "Add group name") + "", l, s, c, i, B, E, u = t[0].name && xn();
        return {
          c() {
            e = F("button"), x = F("span"), x.textContent = "edit", n = y(), o = F("span"), l = R(r), s = y(), u && u.c(), c = y(), i = F("span"), i.textContent = "chevron_right", f(x, "class", "material-icons action-icon svelte-uobr18"), f(o, "class", "action-label svelte-uobr18"), f(i, "class", "material-icons action-chevron svelte-uobr18"), f(e, "class", "action-row svelte-uobr18");
          },
          m(A, d) {
            T(A, e, d), a(e, x), a(e, n), a(e, o), a(o, l), a(o, s), u && u.m(o, null), a(e, c), a(e, i), B || (E = z(e, "click", t[12]), B = true);
          },
          p(A, d) {
            d & 1 && r !== (r = (A[0].name ? A[0].name : "Add group name") + "") && G(l, r), A[0].name ? u || (u = xn(), u.c(), u.m(o, null)) : u && (u.d(1), u = null);
          },
          d(A) {
            A && P(e), u && u.d(), B = false, E();
          }
        };
      }
      function s8(t) {
        let e, x, n, o, r, l, s, c, i, B, E = t[2] ? "Saving\u2026" : "Save", u, A, d;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "edit", n = y(), o = F("form"), r = F("input"), l = y(), s = F("div"), c = F("button"), c.textContent = "Cancel", i = y(), B = F("button"), u = R(E), f(x, "class", "material-icons action-icon svelte-uobr18"), f(r, "type", "text"), f(r, "placeholder", "Optional group name"), f(r, "maxlength", "64"), r.autofocus = true, f(r, "class", "svelte-uobr18"), f(c, "type", "button"), f(c, "class", "btn-text svelte-uobr18"), f(B, "type", "submit"), f(B, "class", "btn-filled-sm svelte-uobr18"), B.disabled = t[2], f(s, "class", "name-actions svelte-uobr18"), f(o, "class", "name-form svelte-uobr18"), f(e, "class", "action-row edit-row svelte-uobr18");
          },
          m(C, D) {
            T(C, e, D), a(e, x), a(e, n), a(e, o), a(o, r), e0(r, t[6]), a(o, l), a(o, s), a(s, c), a(s, i), a(s, B), a(B, u), r.focus(), A || (d = [
              z(r, "input", t[18]),
              z(c, "click", t[13]),
              z(o, "submit", z0(t[14]))
            ], A = true);
          },
          p(C, D) {
            D & 64 && r.value !== C[6] && e0(r, C[6]), D & 4 && E !== (E = C[2] ? "Saving\u2026" : "Save") && G(u, E), D & 4 && (B.disabled = C[2]);
          },
          d(C) {
            C && P(e), A = false, s0(d);
          }
        };
      }
      function xn(t) {
        let e;
        return {
          c() {
            e = F("span"), e.textContent = "Tap to change", f(e, "class", "action-sub svelte-uobr18");
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
        let e, x, n, o, r;
        function l(i, B) {
          return i[9] ? c8 : l8;
        }
        let s = l(t), c = s(t);
        return {
          c() {
            e = F("section"), x = F("p"), x.textContent = "Show this QR for others to join", n = y(), c.c(), o = y(), r = F("p"), r.textContent = "Valid for 24 hours from when you created the group.", f(x, "class", "qr-label svelte-uobr18"), f(r, "class", "qr-hint svelte-uobr18"), f(e, "class", "card pad qr-card svelte-uobr18");
          },
          m(i, B) {
            T(i, e, B), a(e, x), a(e, n), c.m(e, null), a(e, o), a(e, r);
          },
          p(i, B) {
            s === (s = l(i)) && c ? c.p(i, B) : (c.d(1), c = s(i), c && (c.c(), c.m(e, o)));
          },
          d(i) {
            i && P(e), c.d();
          }
        };
      }
      function l8(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Generating QR\u2026", f(e, "class", "muted svelte-uobr18");
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
      function c8(t) {
        let e;
        return {
          c() {
            e = F("div"), f(e, "class", "qr-wrap svelte-uobr18");
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
      function nn(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Saving\u2026", f(e, "class", "save-hint svelte-uobr18");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function a8(t) {
        let e, x, n;
        return {
          c() {
            e = F("button"), e.innerHTML = '<span class="material-icons action-icon danger svelte-uobr18">delete_outline</span> <span class="action-label danger svelte-uobr18">Delete group encounter</span>', f(e, "class", "action-row svelte-uobr18");
          },
          m(o, r) {
            T(o, e, r), x || (n = z(e, "click", t[21]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function i8(t) {
        let e, x, n, o, r, l, s, c = t[2] ? "Deleting\u2026" : "Delete", i, B, E;
        return {
          c() {
            e = F("div"), x = F("p"), x.textContent = "Delete this group encounter? This cannot be undone.", n = y(), o = F("div"), r = F("button"), r.textContent = "Cancel", l = y(), s = F("button"), i = R(c), f(x, "class", "confirm-text svelte-uobr18"), f(r, "class", "btn-text svelte-uobr18"), f(s, "class", "btn-danger-sm svelte-uobr18"), s.disabled = t[2], f(o, "class", "confirm-actions svelte-uobr18"), f(e, "class", "confirm-row svelte-uobr18");
          },
          m(u, A) {
            T(u, e, A), a(e, x), a(e, n), a(e, o), a(o, r), a(o, l), a(o, s), a(s, i), B || (E = [
              z(r, "click", t[20]),
              z(s, "click", t[16])
            ], B = true);
          },
          p(u, A) {
            A & 4 && c !== (c = u[2] ? "Deleting\u2026" : "Delete") && G(i, c), A & 4 && (s.disabled = u[2]);
          },
          d(u) {
            u && P(e), B = false, s0(E);
          }
        };
      }
      function E8(t) {
        let e, x, n, o, r, l, s, c = (t[1] ? "Group not found" : t[10]) + "", i, B, E;
        e = new G0({});
        function u(C, D) {
          if (C[1]) return o8;
          if (C[0]) return n8;
        }
        let A = u(t), d = A && A(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("div"), r = F("a"), r.innerHTML = '<span class="material-icons svelte-uobr18">arrow_back</span>', l = y(), s = F("h1"), i = R(c), B = y(), d && d.c(), f(r, "class", "back-btn svelte-uobr18"), f(r, "href", "#/encounters"), f(s, "class", "svelte-uobr18"), f(o, "class", "page-header svelte-uobr18"), f(n, "class", "svelte-uobr18");
          },
          m(C, D) {
            m0(e, C, D), T(C, x, D), T(C, n, D), a(n, o), a(o, r), a(o, l), a(o, s), a(s, i), a(n, B), d && d.m(n, null), E = true;
          },
          p(C, [D]) {
            (!E || D & 1026) && c !== (c = (C[1] ? "Group not found" : C[10]) + "") && G(i, c), A === (A = u(C)) && d ? d.p(C, D) : (d && d.d(1), d = A && A(C), d && (d.c(), d.m(n, null)));
          },
          i(C) {
            E || (f0(e.$$.fragment, C), E = true);
          },
          o(C) {
            d0(e.$$.fragment, C), E = false;
          },
          d(C) {
            C && (P(x), P(n)), h0(e, C), d && d.d();
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
      function u8(t, e, x) {
        let n, { params: o = {} } = e, r = null, l = false, s = false, c = null, i = false, B = false, E = "", u = "", A = false, d = null, C = null;
        O0(() => {
          if (!H0()) {
            B0("/");
            return;
          }
          D();
        });
        function D() {
          const L = o.tokenHex;
          if (x(0, r = no().find((O) => Z(O.token) === L) ?? null), !r) {
            x(1, l = true);
            return;
          }
          x(7, u = r.note ?? ""), r.isHost && h() && k();
        }
        function m() {
          return Z(r.token);
        }
        function h() {
          return r ? Math.floor(Date.now() / 1e3) - r.createdAt < 86400 : false;
        }
        async function k() {
          ie();
          const L = Math.floor(Date.now() / 1e3), O = as(m(), L, Z(r.hostContactId), r.name);
          try {
            x(9, C = await ee.toString(O, {
              type: "svg",
              margin: 1,
              color: {
                dark: "#006B5F",
                light: "#ffffff"
              }
            }));
          } catch (H) {
            x(3, c = "Could not render QR code: " + H.message);
          }
        }
        function p() {
          x(6, E = r.name ?? ""), x(5, B = true), x(3, c = null);
        }
        function _() {
          x(5, B = false), x(3, c = null);
        }
        async function b() {
          if (!s) {
            x(2, s = true), x(3, c = null);
            try {
              const L = E.trim() || null;
              await lt(m(), {
                name: L
              }), D(), x(5, B = false);
            } catch (L) {
              x(3, c = L.message);
            } finally {
              x(2, s = false);
            }
          }
        }
        function g() {
          x(8, A = u !== (r.note ?? "")), clearTimeout(d), A && (d = setTimeout(v, 1500));
        }
        async function v() {
          if (A) try {
            const L = u.trim() || null;
            await lt(m(), {
              note: L
            }), D(), x(8, A = false);
          } catch (L) {
            x(3, c = L.message);
          }
        }
        async function w() {
          if (!s) {
            x(2, s = true), x(3, c = null);
            try {
              clearTimeout(d), await zs(m()), B0("/encounters");
            } catch (L) {
              x(3, c = L.message), x(2, s = false);
            }
          }
        }
        function I() {
          E = this.value, x(6, E);
        }
        function M() {
          u = this.value, x(7, u);
        }
        const S = () => x(4, i = false), N = () => x(4, i = true);
        return t.$$set = (L) => {
          "params" in L && x(17, o = L.params);
        }, t.$$.update = () => {
          t.$$.dirty & 1 && x(10, n = r?.name || "Group encounter");
        }, [
          r,
          l,
          s,
          c,
          i,
          B,
          E,
          u,
          A,
          C,
          n,
          h,
          p,
          _,
          b,
          g,
          w,
          o,
          I,
          M,
          S,
          N
        ];
      }
      class f8 extends _0 {
        constructor(e) {
          super(), k0(this, e, u8, E8, p0, {
            params: 17
          });
        }
      }
      async function B8(t) {
        const e = L0();
        if (!e) throw new Error("Not logged in \u2014 reload and try again");
        const x = e.encounters.map((B) => ({
          raw_token: Z(B.rawToken),
          date: B.date,
          their_contact_id: Z(B.theirContactId)
        })), n = (e.relationships || []).map((B) => ({
          raw_token: Z(B.rawToken),
          date: B.createdAt,
          their_contact_id: Z(B.theirContactId)
        })), o = (e.results || []).map((B) => {
          const E = {};
          for (const u of N0) E[u] = B.positiveDiseases.includes(u) ? "positive" : "negative";
          return {
            test_date: B.date,
            result_json: JSON.stringify({
              panel: E,
              test_date: B.date,
              submission_type: "self_reported"
            }),
            lab_signature: "",
            user_pubkey: "",
            user_signature: "",
            is_positive: B.positiveDiseases.length > 0 ? 1 : 0,
            submission_type: "self_reported",
            has_notified: B.hasNotified ? 1 : 0,
            note: null
          };
        }), r = new TextEncoder().encode(JSON.stringify({
          version: 1,
          contact_id: Z(e.myContactId),
          encounters: [
            ...x,
            ...n
          ],
          test_results: o
        })), l = be(16), s = await q0(t, l), c = ge(s, r);
        s.fill(0);
        const i = new Uint8Array(16 + c.length);
        return i.set(l, 0), i.set(c, 16), i;
      }
      function rn(t, e, x) {
        const n = t.slice();
        return n[41] = e[x], n;
      }
      function sn(t, e, x) {
        const n = t.slice();
        return n[41] = e[x], n;
      }
      function d8(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m = t[2] ? "verified_user" : "shield", h, k, p = t[2] ? "Enabled" : "Disabled", _, b;
        function g(U, q) {
          return U[22] ? m8 : p8;
        }
        let v = g(t), w = v(t);
        function I(U, q) {
          if (U[18] === "idle") return g8;
          if (U[18] === "entering_pin") return b8;
          if (U[18] === "exporting") return _8;
          if (U[18] === "done") return k8;
          if (U[18] === "error") return h8;
        }
        let M = I(t), S = M && M(t);
        function N(U, q) {
          return U[2] ? w8 : v8;
        }
        let L = N(t), O = L(t);
        function H(U, q) {
          return U[2] ? y8 : P8;
        }
        let j = H(t), J = j(t);
        return {
          c() {
            e = F("section"), e.innerHTML = '<div class="row svelte-cpcxut"><div class="svelte-cpcxut"><h2 class="svelte-cpcxut">Password</h2> <p class="hint svelte-cpcxut">Update your account password.</p></div> <a href="#/change-password" class="btn-outline-sm svelte-cpcxut">Change password</a></div>', x = y(), n = F("section"), o = F("h2"), o.textContent = "Export to mobile", r = y(), w.c(), l = y(), S && S.c(), s = y(), c = F("section"), i = F("div"), B = F("div"), E = F("h2"), E.textContent = "Two-factor authentication", u = y(), A = F("p"), O.c(), d = y(), C = F("div"), D = F("span"), h = R(m), k = y(), _ = R(p), b = y(), J.c(), f(e, "class", "card svelte-cpcxut"), f(o, "class", "svelte-cpcxut"), f(n, "class", "card svelte-cpcxut"), f(E, "class", "svelte-cpcxut"), f(A, "class", "hint svelte-cpcxut"), f(B, "class", "svelte-cpcxut"), f(D, "class", "material-icons svelte-cpcxut"), f(C, "class", "status-badge svelte-cpcxut"), r0(C, "enabled", t[2]), r0(C, "disabled", !t[2]), f(i, "class", "row svelte-cpcxut"), f(c, "class", "card svelte-cpcxut");
          },
          m(U, q) {
            T(U, e, q), T(U, x, q), T(U, n, q), a(n, o), a(n, r), w.m(n, null), a(n, l), S && S.m(n, null), T(U, s, q), T(U, c, q), a(c, i), a(i, B), a(B, E), a(B, u), a(B, A), O.m(A, null), a(i, d), a(i, C), a(C, D), a(D, h), a(C, k), a(C, _), a(c, b), J.m(c, null);
          },
          p(U, q) {
            v !== (v = g(U)) && (w.d(1), w = v(U), w && (w.c(), w.m(n, l))), M === (M = I(U)) && S ? S.p(U, q) : (S && S.d(1), S = M && M(U), S && (S.c(), S.m(n, null))), L !== (L = N(U)) && (O.d(1), O = L(U), O && (O.c(), O.m(A, null))), q[0] & 4 && m !== (m = U[2] ? "verified_user" : "shield") && G(h, m), q[0] & 4 && p !== (p = U[2] ? "Enabled" : "Disabled") && G(_, p), q[0] & 4 && r0(C, "enabled", U[2]), q[0] & 4 && r0(C, "disabled", !U[2]), j === (j = H(U)) && J ? J.p(U, q) : (J.d(1), J = j(U), J && (J.c(), J.m(c, null)));
          },
          d(U) {
            U && (P(e), P(x), P(n), P(s), P(c)), w.d(), S && S.d(), O.d(), J.d();
          }
        };
      }
      function C8(t) {
        let e, x, n, o, r, l, s, c, i, B, E = u0(t[10]), u = [];
        for (let A = 0; A < E.length; A += 1) u[A] = fn(sn(t, E, A));
        return {
          c() {
            e = F("div"), x = F("div"), x.innerHTML = '<span class="material-icons success-icon svelte-cpcxut">check_circle</span> <h2 class="svelte-cpcxut">2FA enabled \u2014 save your backup codes</h2>', n = y(), o = F("p"), o.textContent = `Store these somewhere safe. Each code can be used once if you lose access
        to your authenticator app. They won't be shown again.`, r = y(), l = F("div");
            for (let A = 0; A < u.length; A += 1) u[A].c();
            s = y(), c = F("button"), c.textContent = "I've saved my backup codes", f(x, "class", "codes-header svelte-cpcxut"), f(o, "class", "hint warning svelte-cpcxut"), f(l, "class", "backup-grid svelte-cpcxut"), f(c, "class", "btn-primary svelte-cpcxut"), f(e, "class", "card svelte-cpcxut");
          },
          m(A, d) {
            T(A, e, d), a(e, x), a(e, n), a(e, o), a(e, r), a(e, l);
            for (let C = 0; C < u.length; C += 1) u[C] && u[C].m(l, null);
            a(e, s), a(e, c), i || (B = z(c, "click", t[25]), i = true);
          },
          p(A, d) {
            if (d[0] & 1024) {
              E = u0(A[10]);
              let C;
              for (C = 0; C < E.length; C += 1) {
                const D = sn(A, E, C);
                u[C] ? u[C].p(D, d) : (u[C] = fn(D), u[C].c(), u[C].m(l, null));
              }
              for (; C < u.length; C += 1) u[C].d(1);
              u.length = E.length;
            }
          },
          d(A) {
            A && P(e), R0(u, A), i = false, B();
          }
        };
      }
      function A8(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h, k, p, _, b, g = t[8] ? "Verifying\u2026" : "Enable 2FA", v, w, I, M, S, N, L, O = t[9] && Bn(t);
        return {
          c() {
            e = F("div"), x = F("h2"), x.textContent = "Set up authenticator app", n = y(), o = F("p"), o.textContent = `Scan this QR code with an authenticator app (e.g. Google Authenticator,
        Authy, 1Password), then enter the 6-digit code to confirm.`, r = y(), l = F("div"), s = F("img"), i = y(), B = F("details"), E = F("summary"), E.textContent = "Can't scan? Enter the key manually", u = y(), A = F("code"), d = R(t[5]), C = y(), D = F("form"), m = F("label"), h = R(`Authenticator code
          `), k = F("input"), p = y(), O && O.c(), _ = y(), b = F("button"), v = R(g), I = y(), M = F("button"), S = R("Cancel"), f(x, "class", "svelte-cpcxut"), f(o, "class", "hint svelte-cpcxut"), Wx(s.src, c = t[6]) || f(s, "src", c), f(s, "alt", "TOTP QR code"), f(s, "width", "200"), f(s, "height", "200"), f(s, "class", "svelte-cpcxut"), f(l, "class", "qr-wrap svelte-cpcxut"), f(E, "class", "svelte-cpcxut"), f(A, "class", "secret-key svelte-cpcxut"), f(B, "class", "manual-entry svelte-cpcxut"), f(k, "type", "text"), f(k, "inputmode", "numeric"), f(k, "pattern", "[0-9]*"), f(k, "maxlength", "6"), k.required = true, f(k, "autocomplete", "one-time-code"), f(k, "placeholder", "000000"), f(k, "class", "svelte-cpcxut"), f(m, "class", "svelte-cpcxut"), f(b, "type", "submit"), b.disabled = w = t[8] || t[7].length !== 6, f(M, "type", "button"), f(M, "class", "btn-ghost svelte-cpcxut"), M.disabled = t[8], f(D, "class", "otp-form svelte-cpcxut"), f(e, "class", "card svelte-cpcxut");
          },
          m(H, j) {
            T(H, e, j), a(e, x), a(e, n), a(e, o), a(e, r), a(e, l), a(l, s), a(e, i), a(e, B), a(B, E), a(B, u), a(B, A), a(A, d), a(e, C), a(e, D), a(D, m), a(m, h), a(m, k), e0(k, t[7]), a(D, p), O && O.m(D, null), a(D, _), a(D, b), a(b, v), a(D, I), a(D, M), a(M, S), N || (L = [
              z(k, "input", t[32]),
              z(M, "click", t[26]),
              z(D, "submit", z0(t[24]))
            ], N = true);
          },
          p(H, j) {
            j[0] & 64 && !Wx(s.src, c = H[6]) && f(s, "src", c), j[0] & 32 && G(d, H[5]), j[0] & 128 && k.value !== H[7] && e0(k, H[7]), H[9] ? O ? O.p(H, j) : (O = Bn(H), O.c(), O.m(D, _)) : O && (O.d(1), O = null), j[0] & 256 && g !== (g = H[8] ? "Verifying\u2026" : "Enable 2FA") && G(v, g), j[0] & 384 && w !== (w = H[8] || H[7].length !== 6) && (b.disabled = w), j[0] & 256 && (M.disabled = H[8]);
          },
          d(H) {
            H && P(e), O && O.d(), N = false, s0(L);
          }
        };
      }
      function F8(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[1]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 2 && G(x, n[1]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function D8(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Loading\u2026", f(e, "class", "muted svelte-cpcxut");
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
      function p8(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "The mobile app keeps all data on your device. Export your data to move to mobile.", f(e, "class", "hint svelte-cpcxut");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function m8(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Your data is approaching the web app's storage limit. Export now and switch to the mobile app.", f(e, "class", "hint warning svelte-cpcxut");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function h8(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = F("p"), x = R(t[21]), n = y(), o = F("button"), o.textContent = "Try again", f(e, "class", "error svelte-cpcxut"), f(o, "class", "btn-ghost svelte-cpcxut");
          },
          m(s, c) {
            T(s, e, c), a(e, x), T(s, n, c), T(s, o, c), r || (l = z(o, "click", t[29]), r = true);
          },
          p(s, c) {
            c[0] & 2097152 && G(x, s[21]);
          },
          d(s) {
            s && (P(e), P(n), P(o)), r = false, l();
          }
        };
      }
      function k8(t) {
        let e, x, n, o, r;
        return {
          c() {
            e = F("p"), e.innerHTML = `Backup downloaded. On your phone: open the app, go to
          <strong>Settings \u2192 Restore from backup</strong>, select the file,
          and enter the PIN you set.`, x = y(), n = F("button"), n.textContent = "Done", f(e, "class", "hint svelte-cpcxut"), f(n, "class", "btn-ghost svelte-cpcxut");
          },
          m(l, s) {
            T(l, e, s), T(l, x, s), T(l, n, s), o || (r = z(n, "click", t[29]), o = true);
          },
          p: X,
          d(l) {
            l && (P(e), P(x), P(n)), o = false, r();
          }
        };
      }
      function _8(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Encrypting\u2026", f(e, "class", "hint svelte-cpcxut");
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
      function b8(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h, k = t[21] && ln(t);
        return {
          c() {
            e = F("p"), e.textContent = "Choose a 6-digit PIN to protect this file. You'll enter it when importing on mobile.", x = y(), n = F("div"), o = F("label"), r = R(`PIN
            `), l = F("input"), s = y(), c = F("label"), i = R(`Confirm PIN
            `), B = F("input"), E = y(), k && k.c(), u = y(), A = F("div"), d = F("button"), d.textContent = "Download backup", C = y(), D = F("button"), D.textContent = "Cancel", f(e, "class", "hint svelte-cpcxut"), f(l, "type", "password"), f(l, "inputmode", "numeric"), f(l, "maxlength", "6"), f(l, "placeholder", "6 digits"), f(l, "autocomplete", "new-password"), f(l, "class", "svelte-cpcxut"), f(o, "class", "svelte-cpcxut"), f(B, "type", "password"), f(B, "inputmode", "numeric"), f(B, "maxlength", "6"), f(B, "placeholder", "6 digits"), f(B, "autocomplete", "new-password"), f(B, "class", "svelte-cpcxut"), f(c, "class", "svelte-cpcxut"), f(d, "class", "btn-primary svelte-cpcxut"), f(D, "class", "btn-ghost svelte-cpcxut"), f(A, "class", "export-actions svelte-cpcxut"), f(n, "class", "export-form svelte-cpcxut");
          },
          m(p, _) {
            T(p, e, _), T(p, x, _), T(p, n, _), a(n, o), a(o, r), a(o, l), e0(l, t[19]), a(n, s), a(n, c), a(c, i), a(c, B), e0(B, t[20]), a(n, E), k && k.m(n, null), a(n, u), a(n, A), a(A, d), a(A, C), a(A, D), m || (h = [
              z(l, "input", t[34]),
              z(B, "input", t[35]),
              z(d, "click", t[28]),
              z(D, "click", t[29])
            ], m = true);
          },
          p(p, _) {
            _[0] & 524288 && l.value !== p[19] && e0(l, p[19]), _[0] & 1048576 && B.value !== p[20] && e0(B, p[20]), p[21] ? k ? k.p(p, _) : (k = ln(p), k.c(), k.m(n, u)) : k && (k.d(1), k = null);
          },
          d(p) {
            p && (P(e), P(x), P(n)), k && k.d(), m = false, s0(h);
          }
        };
      }
      function g8(t) {
        let e, x, n;
        return {
          c() {
            e = F("button"), e.textContent = "Export data for mobile app", f(e, "class", "btn-primary svelte-cpcxut");
          },
          m(o, r) {
            T(o, e, r), x || (n = z(e, "click", t[33]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function ln(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[21]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 2097152 && G(x, n[21]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function v8(t) {
        let e;
        return {
          c() {
            e = R("Add an extra layer of security by requiring an authenticator code at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function w8(t) {
        let e;
        return {
          c() {
            e = R("Active \u2014 your account requires a code from your authenticator app at login.");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function y8(t) {
        let e, x, n, o, r, l, s, c = t[3] !== 1 ? "s" : "", i, B, E, u, A, d, C, D, m;
        function h(b, g) {
          return b[17].length > 0 ? S8 : T8;
        }
        let k = h(t), p = k(t), _ = t[13] && En(t);
        return {
          c() {
            e = F("div"), x = F("div"), n = F("span"), n.textContent = "key", o = y(), r = F("span"), l = R(t[3]), s = R(" backup code"), i = R(c), B = R(" remaining"), E = y(), p.c(), u = y(), A = F("div"), _ && _.c(), d = y(), C = F("button"), C.textContent = "Disable 2FA", f(n, "class", "material-icons svelte-cpcxut"), f(x, "class", "backup-count svelte-cpcxut"), f(e, "class", "backup-section svelte-cpcxut"), f(C, "class", "btn-danger svelte-cpcxut"), f(A, "class", "danger-zone svelte-cpcxut");
          },
          m(b, g) {
            T(b, e, g), a(e, x), a(x, n), a(x, o), a(x, r), a(r, l), a(r, s), a(r, i), a(r, B), a(e, E), p.m(e, null), T(b, u, g), T(b, A, g), _ && _.m(A, null), a(A, d), a(A, C), D || (m = z(C, "click", t[37]), D = true);
          },
          p(b, g) {
            g[0] & 8 && G(l, b[3]), g[0] & 8 && c !== (c = b[3] !== 1 ? "s" : "") && G(i, c), k === (k = h(b)) && p ? p.p(b, g) : (p.d(1), p = k(b), p && (p.c(), p.m(e, null))), b[13] ? _ ? _.p(b, g) : (_ = En(b), _.c(), _.m(A, d)) : _ && (_.d(1), _ = null);
          },
          d(b) {
            b && (P(e), P(u), P(A)), p.d(), _ && _.d(), D = false, m();
          }
        };
      }
      function P8(t) {
        let e, x, n = t[8] ? "Generating\u2026" : "Enable 2FA", o, r, l, s = t[9] && un(t);
        return {
          c() {
            s && s.c(), e = y(), x = F("button"), o = R(n), f(x, "class", "btn-primary svelte-cpcxut"), x.disabled = t[8];
          },
          m(c, i) {
            s && s.m(c, i), T(c, e, i), T(c, x, i), a(x, o), r || (l = z(x, "click", t[23]), r = true);
          },
          p(c, i) {
            c[9] ? s ? s.p(c, i) : (s = un(c), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), i[0] & 256 && n !== (n = c[8] ? "Generating\u2026" : "Enable 2FA") && G(o, n), i[0] & 256 && (x.disabled = c[8]);
          },
          d(c) {
            c && (P(e), P(x)), s && s.d(c), r = false, l();
          }
        };
      }
      function T8(t) {
        let e, x, n, o, r, l = t[16] && cn(t);
        return {
          c() {
            l && l.c(), e = y(), x = F("button"), n = R("Regenerate backup codes"), f(x, "class", "btn-outline-sm svelte-cpcxut"), x.disabled = t[15];
          },
          m(s, c) {
            l && l.m(s, c), T(s, e, c), T(s, x, c), a(x, n), o || (r = z(x, "click", t[36]), o = true);
          },
          p(s, c) {
            s[16] ? l ? l.p(s, c) : (l = cn(s), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), c[0] & 32768 && (x.disabled = s[15]);
          },
          d(s) {
            s && (P(e), P(x)), l && l.d(s), o = false, r();
          }
        };
      }
      function S8(t) {
        let e, x, n, o, r, l, s, c = u0(t[17]), i = [];
        for (let B = 0; B < c.length; B += 1) i[B] = an(rn(t, c, B));
        return {
          c() {
            e = F("p"), e.textContent = "New backup codes \u2014 store these safely and discard the old ones:", x = y(), n = F("div");
            for (let B = 0; B < i.length; B += 1) i[B].c();
            o = y(), r = F("button"), r.textContent = "Done", f(e, "class", "hint warning svelte-cpcxut"), f(n, "class", "backup-grid svelte-cpcxut"), f(r, "class", "btn-outline-sm svelte-cpcxut");
          },
          m(B, E) {
            T(B, e, E), T(B, x, E), T(B, n, E);
            for (let u = 0; u < i.length; u += 1) i[u] && i[u].m(n, null);
            T(B, o, E), T(B, r, E), l || (s = z(r, "click", t[31]), l = true);
          },
          p(B, E) {
            if (E[0] & 131072) {
              c = u0(B[17]);
              let u;
              for (u = 0; u < c.length; u += 1) {
                const A = rn(B, c, u);
                i[u] ? i[u].p(A, E) : (i[u] = an(A), i[u].c(), i[u].m(n, null));
              }
              for (; u < i.length; u += 1) i[u].d(1);
              i.length = c.length;
            }
          },
          d(B) {
            B && (P(e), P(x), P(n), P(o), P(r)), R0(i, B), l = false, s();
          }
        };
      }
      function cn(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[16]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 65536 && G(x, n[16]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function an(t) {
        let e, x = t[41] + "", n;
        return {
          c() {
            e = F("code"), n = R(x), f(e, "class", "backup-code svelte-cpcxut");
          },
          m(o, r) {
            T(o, e, r), a(e, n);
          },
          p(o, r) {
            r[0] & 131072 && x !== (x = o[41] + "") && G(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function En(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[13]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 8192 && G(x, n[13]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function un(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[9]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 512 && G(x, n[9]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function fn(t) {
        let e, x = t[41] + "", n;
        return {
          c() {
            e = F("code"), n = R(x), f(e, "class", "backup-code svelte-cpcxut");
          },
          m(o, r) {
            T(o, e, r), a(e, n);
          },
          p(o, r) {
            r[0] & 1024 && x !== (x = o[41] + "") && G(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function Bn(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[9]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 512 && G(x, n[9]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function dn(t) {
        let e, x, n, o, r, l, s, c, i, B = t[12] ? "Disabling\u2026" : "Yes, disable 2FA", E, u, A, d, C, D, m = t[13] && Cn(t);
        return {
          c() {
            e = F("div"), x = F("div"), n = F("h2"), n.textContent = "Disable two-factor authentication?", o = y(), r = F("p"), r.textContent = `Your account will only be protected by your password. You can re-enable
        2FA at any time from Settings.`, l = y(), m && m.c(), s = y(), c = F("div"), i = F("button"), E = R(B), u = y(), A = F("button"), d = R("Cancel"), f(n, "id", "disable-title"), f(n, "class", "svelte-cpcxut"), f(r, "class", "svelte-cpcxut"), f(i, "class", "btn-danger svelte-cpcxut"), i.disabled = t[12], f(A, "class", "btn-ghost svelte-cpcxut"), A.disabled = t[12], f(c, "class", "dialog-actions svelte-cpcxut"), f(x, "class", "dialog svelte-cpcxut"), f(e, "class", "overlay svelte-cpcxut"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "disable-title");
          },
          m(h, k) {
            T(h, e, k), a(e, x), a(x, n), a(x, o), a(x, r), a(x, l), m && m.m(x, null), a(x, s), a(x, c), a(c, i), a(i, E), a(c, u), a(c, A), a(A, d), C || (D = [
              z(i, "click", t[27]),
              z(A, "click", t[38])
            ], C = true);
          },
          p(h, k) {
            h[13] ? m ? m.p(h, k) : (m = Cn(h), m.c(), m.m(x, s)) : m && (m.d(1), m = null), k[0] & 4096 && B !== (B = h[12] ? "Disabling\u2026" : "Yes, disable 2FA") && G(E, B), k[0] & 4096 && (i.disabled = h[12]), k[0] & 4096 && (A.disabled = h[12]);
          },
          d(h) {
            h && P(e), m && m.d(), C = false, s0(D);
          }
        };
      }
      function Cn(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[13]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 8192 && G(x, n[13]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function An(t) {
        let e, x, n, o, r, l, s, c, i, B = t[15] ? "Regenerating\u2026" : "Regenerate", E, u, A, d, C, D, m = t[16] && Fn(t);
        return {
          c() {
            e = F("div"), x = F("div"), n = F("h2"), n.textContent = "Regenerate backup codes?", o = y(), r = F("p"), r.textContent = "All existing backup codes will be permanently invalidated.", l = y(), m && m.c(), s = y(), c = F("div"), i = F("button"), E = R(B), u = y(), A = F("button"), d = R("Cancel"), f(n, "id", "regen-title"), f(n, "class", "svelte-cpcxut"), f(r, "class", "svelte-cpcxut"), f(i, "class", "btn-primary svelte-cpcxut"), i.disabled = t[15], f(A, "class", "btn-ghost svelte-cpcxut"), A.disabled = t[15], f(c, "class", "dialog-actions svelte-cpcxut"), f(x, "class", "dialog svelte-cpcxut"), f(e, "class", "overlay svelte-cpcxut"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "regen-title");
          },
          m(h, k) {
            T(h, e, k), a(e, x), a(x, n), a(x, o), a(x, r), a(x, l), m && m.m(x, null), a(x, s), a(x, c), a(c, i), a(i, E), a(c, u), a(c, A), a(A, d), C || (D = [
              z(i, "click", t[30]),
              z(A, "click", t[39])
            ], C = true);
          },
          p(h, k) {
            h[16] ? m ? m.p(h, k) : (m = Fn(h), m.c(), m.m(x, s)) : m && (m.d(1), m = null), k[0] & 32768 && B !== (B = h[15] ? "Regenerating\u2026" : "Regenerate") && G(E, B), k[0] & 32768 && (i.disabled = h[15]), k[0] & 32768 && (A.disabled = h[15]);
          },
          d(h) {
            h && P(e), m && m.d(), C = false, s0(D);
          }
        };
      }
      function Fn(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[16]), f(e, "class", "error svelte-cpcxut");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 65536 && G(x, n[16]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function M8(t) {
        let e, x, n, o, r, l, s, c, i;
        e = new G0({});
        function B(C, D) {
          return C[0] ? D8 : C[1] ? F8 : C[4] === "scan" ? A8 : C[4] === "codes" ? C8 : d8;
        }
        let E = B(t), u = E(t), A = t[11] && dn(t), d = t[14] && An(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("h1"), o.textContent = "Settings", r = y(), u.c(), l = y(), A && A.c(), s = y(), d && d.c(), c = P0(), f(o, "class", "svelte-cpcxut"), f(n, "class", "svelte-cpcxut");
          },
          m(C, D) {
            m0(e, C, D), T(C, x, D), T(C, n, D), a(n, o), a(n, r), u.m(n, null), T(C, l, D), A && A.m(C, D), T(C, s, D), d && d.m(C, D), T(C, c, D), i = true;
          },
          p(C, D) {
            E === (E = B(C)) && u ? u.p(C, D) : (u.d(1), u = E(C), u && (u.c(), u.m(n, null))), C[11] ? A ? A.p(C, D) : (A = dn(C), A.c(), A.m(s.parentNode, s)) : A && (A.d(1), A = null), C[14] ? d ? d.p(C, D) : (d = An(C), d.c(), d.m(c.parentNode, c)) : d && (d.d(1), d = null);
          },
          i(C) {
            i || (f0(e.$$.fragment, C), i = true);
          },
          o(C) {
            d0(e.$$.fragment, C), i = false;
          },
          d(C) {
            C && (P(x), P(n), P(l), P(s), P(c)), h0(e, C), u.d(), A && A.d(C), d && d.d(C);
          }
        };
      }
      function I8(t, e, x) {
        let n;
        yx(t, $n, (W) => x(22, n = W));
        let o = true, r = null, l = false, s = 0, c = "idle", i = "", B = "", E = "", u = false, A = null, d = [], C = false, D = false, m = null, h = false, k = false, p = null, _ = [];
        O0(async () => {
          if (!H0()) {
            B0("/");
            return;
          }
          await b();
        });
        async function b() {
          x(0, o = true), x(1, r = null);
          try {
            const [W, Q] = await Promise.all([
              ms(),
              gs().catch(() => ({
                remaining: 0
              }))
            ]);
            x(2, l = W.enabled), x(3, s = Q.remaining);
          } catch (W) {
            x(1, r = W.message);
          } finally {
            x(0, o = false);
          }
        }
        async function g() {
          x(9, A = null), x(8, u = true);
          try {
            const { secret: W, uri: Q } = await hs();
            x(5, i = W), x(6, B = await ee.toDataURL(Q, {
              width: 200,
              margin: 1
            })), x(4, c = "scan");
          } catch (W) {
            x(9, A = W.message);
          } finally {
            x(8, u = false);
          }
        }
        async function v() {
          x(9, A = null), x(8, u = true);
          try {
            const { backup_codes: W } = await ks(i, E);
            x(10, d = W), x(4, c = "codes");
          } catch (W) {
            x(9, A = W.message);
          } finally {
            x(8, u = false);
          }
        }
        function w() {
          x(2, l = true), x(3, s = d.length), x(4, c = "idle"), x(5, i = ""), x(6, B = ""), x(7, E = ""), x(10, d = []);
        }
        function I() {
          x(4, c = "idle"), x(5, i = ""), x(6, B = ""), x(7, E = ""), x(9, A = null), x(10, d = []);
        }
        async function M() {
          x(13, m = null), x(12, D = true);
          try {
            await _s(), x(2, l = false), x(3, s = 0), x(11, C = false);
          } catch (W) {
            x(13, m = W.message);
          } finally {
            x(12, D = false);
          }
        }
        let S = "idle", N = "", L = "", O = null;
        async function H() {
          if (x(21, O = null), !/^\d{6}$/.test(N)) {
            x(21, O = "PIN must be exactly 6 digits.");
            return;
          }
          if (N !== L) {
            x(21, O = "PINs do not match.");
            return;
          }
          x(18, S = "exporting");
          try {
            const W = await B8(N), Q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), $ = `${nl}-${Q}.enc`, n0 = new Blob([
              W
            ], {
              type: "application/octet-stream"
            }), a0 = URL.createObjectURL(n0), i0 = document.createElement("a");
            i0.href = a0, i0.download = $, i0.click(), URL.revokeObjectURL(a0), x(18, S = "done");
          } catch (W) {
            x(21, O = W.message), x(18, S = "error");
          }
        }
        function j() {
          x(18, S = "idle"), x(19, N = ""), x(20, L = ""), x(21, O = null);
        }
        async function J() {
          x(16, p = null), x(15, k = true);
          try {
            const { backup_codes: W } = await bs();
            x(17, _ = W), x(3, s = W.length), x(14, h = false);
          } catch (W) {
            x(16, p = W.message);
          } finally {
            x(15, k = false);
          }
        }
        function U() {
          x(17, _ = []);
        }
        function q() {
          E = this.value, x(7, E);
        }
        const K = () => x(18, S = "entering_pin");
        function x0() {
          N = this.value, x(19, N);
        }
        function t0() {
          L = this.value, x(20, L);
        }
        return [
          o,
          r,
          l,
          s,
          c,
          i,
          B,
          E,
          u,
          A,
          d,
          C,
          D,
          m,
          h,
          k,
          p,
          _,
          S,
          N,
          L,
          O,
          n,
          g,
          v,
          w,
          I,
          M,
          H,
          j,
          J,
          U,
          q,
          K,
          x0,
          t0,
          () => {
            x(14, h = true);
          },
          () => {
            x(11, C = true);
          },
          () => {
            x(11, C = false), x(13, m = null);
          },
          () => {
            x(14, h = false), x(16, p = null);
          }
        ];
      }
      class L8 extends _0 {
        constructor(e) {
          super(), k0(this, e, I8, M8, p0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      var _o = {
        exports: {}
      };
      (function(t, e) {
        (function(n, o) {
          t.exports = o();
        })(typeof self < "u" ? self : B9, function() {
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
                function l(s, c) {
                  this.width = c, this.height = s.length / c, this.data = s;
                }
                return l.createEmpty = function(s, c) {
                  return new l(new Uint8ClampedArray(s * c), s);
                }, l.prototype.get = function(s, c) {
                  return s < 0 || s >= this.width || c < 0 || c >= this.height ? false : !!this.data[c * this.width + s];
                }, l.prototype.set = function(s, c, i) {
                  this.data[c * this.width + s] = i ? 1 : 0;
                }, l.prototype.setRegion = function(s, c, i, B, E) {
                  for (var u = c; u < c + B; u++) for (var A = s; A < s + i; A++) this.set(A, u, !!E);
                }, l;
              }();
              n.BitMatrix = r;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(2);
              function l(c, i) {
                return c ^ i;
              }
              n.addOrSubtractGF = l;
              var s = function() {
                function c(i, B, E) {
                  this.primitive = i, this.size = B, this.generatorBase = E, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
                  for (var u = 1, A = 0; A < this.size; A++) this.expTable[A] = u, u = u * 2, u >= this.size && (u = (u ^ this.primitive) & this.size - 1);
                  for (var A = 0; A < this.size - 1; A++) this.logTable[this.expTable[A]] = A;
                  this.zero = new r.default(this, Uint8ClampedArray.from([
                    0
                  ])), this.one = new r.default(this, Uint8ClampedArray.from([
                    1
                  ]));
                }
                return c.prototype.multiply = function(i, B) {
                  return i === 0 || B === 0 ? 0 : this.expTable[(this.logTable[i] + this.logTable[B]) % (this.size - 1)];
                }, c.prototype.inverse = function(i) {
                  if (i === 0) throw new Error("Can't invert 0");
                  return this.expTable[this.size - this.logTable[i] - 1];
                }, c.prototype.buildMonomial = function(i, B) {
                  if (i < 0) throw new Error("Invalid monomial degree less than 0");
                  if (B === 0) return this.zero;
                  var E = new Uint8ClampedArray(i + 1);
                  return E[0] = B, new r.default(this, E);
                }, c.prototype.log = function(i) {
                  if (i === 0) throw new Error("Can't take log(0)");
                  return this.logTable[i];
                }, c.prototype.exp = function(i) {
                  return this.expTable[i];
                }, c;
              }();
              n.default = s;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(1), l = function() {
                function s(c, i) {
                  if (i.length === 0) throw new Error("No coefficients.");
                  this.field = c;
                  var B = i.length;
                  if (B > 1 && i[0] === 0) {
                    for (var E = 1; E < B && i[E] === 0; ) E++;
                    if (E === B) this.coefficients = c.zero.coefficients;
                    else {
                      this.coefficients = new Uint8ClampedArray(B - E);
                      for (var u = 0; u < this.coefficients.length; u++) this.coefficients[u] = i[E + u];
                    }
                  } else this.coefficients = i;
                }
                return s.prototype.degree = function() {
                  return this.coefficients.length - 1;
                }, s.prototype.isZero = function() {
                  return this.coefficients[0] === 0;
                }, s.prototype.getCoefficient = function(c) {
                  return this.coefficients[this.coefficients.length - 1 - c];
                }, s.prototype.addOrSubtract = function(c) {
                  var i;
                  if (this.isZero()) return c;
                  if (c.isZero()) return this;
                  var B = this.coefficients, E = c.coefficients;
                  B.length > E.length && (i = [
                    E,
                    B
                  ], B = i[0], E = i[1]);
                  for (var u = new Uint8ClampedArray(E.length), A = E.length - B.length, d = 0; d < A; d++) u[d] = E[d];
                  for (var d = A; d < E.length; d++) u[d] = r.addOrSubtractGF(B[d - A], E[d]);
                  return new s(this.field, u);
                }, s.prototype.multiply = function(c) {
                  if (c === 0) return this.field.zero;
                  if (c === 1) return this;
                  for (var i = this.coefficients.length, B = new Uint8ClampedArray(i), E = 0; E < i; E++) B[E] = this.field.multiply(this.coefficients[E], c);
                  return new s(this.field, B);
                }, s.prototype.multiplyPoly = function(c) {
                  if (this.isZero() || c.isZero()) return this.field.zero;
                  for (var i = this.coefficients, B = i.length, E = c.coefficients, u = E.length, A = new Uint8ClampedArray(B + u - 1), d = 0; d < B; d++) for (var C = i[d], D = 0; D < u; D++) A[d + D] = r.addOrSubtractGF(A[d + D], this.field.multiply(C, E[D]));
                  return new s(this.field, A);
                }, s.prototype.multiplyByMonomial = function(c, i) {
                  if (c < 0) throw new Error("Invalid degree less than 0");
                  if (i === 0) return this.field.zero;
                  for (var B = this.coefficients.length, E = new Uint8ClampedArray(B + c), u = 0; u < B; u++) E[u] = this.field.multiply(this.coefficients[u], i);
                  return new s(this.field, E);
                }, s.prototype.evaluateAt = function(c) {
                  var i = 0;
                  if (c === 0) return this.getCoefficient(0);
                  var B = this.coefficients.length;
                  if (c === 1) return this.coefficients.forEach(function(u) {
                    i = r.addOrSubtractGF(i, u);
                  }), i;
                  i = this.coefficients[0];
                  for (var E = 1; E < B; E++) i = r.addOrSubtractGF(this.field.multiply(c, i), this.coefficients[E]);
                  return i;
                }, s;
              }();
              n.default = l;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(4), l = o(5), s = o(11), c = o(12);
              function i(u) {
                var A = c.locate(u);
                if (!A) return null;
                for (var d = 0, C = A; d < C.length; d++) {
                  var D = C[d], m = s.extract(u, D), h = l.decode(m.matrix);
                  if (h) return {
                    binaryData: h.bytes,
                    data: h.text,
                    chunks: h.chunks,
                    version: h.version,
                    location: {
                      topRightCorner: m.mappingFunction(D.dimension, 0),
                      topLeftCorner: m.mappingFunction(0, 0),
                      bottomRightCorner: m.mappingFunction(D.dimension, D.dimension),
                      bottomLeftCorner: m.mappingFunction(0, D.dimension),
                      topRightFinderPattern: D.topRight,
                      topLeftFinderPattern: D.topLeft,
                      bottomLeftFinderPattern: D.bottomLeft,
                      bottomRightAlignmentPattern: D.alignmentPattern
                    }
                  };
                }
                return null;
              }
              var B = {
                inversionAttempts: "attemptBoth"
              };
              function E(u, A, d, C) {
                C === void 0 && (C = {});
                var D = B;
                Object.keys(D || {}).forEach(function(g) {
                  D[g] = C[g] || D[g];
                });
                var m = D.inversionAttempts === "attemptBoth" || D.inversionAttempts === "invertFirst", h = D.inversionAttempts === "onlyInvert" || D.inversionAttempts === "invertFirst", k = r.binarize(u, A, d, m), p = k.binarized, _ = k.inverted, b = i(h ? _ : p);
                return !b && (D.inversionAttempts === "attemptBoth" || D.inversionAttempts === "invertFirst") && (b = i(h ? p : _)), b;
              }
              E.default = E, n.default = E;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0), l = 8, s = 24;
              function c(E, u, A) {
                return E < u ? u : E > A ? A : E;
              }
              var i = function() {
                function E(u, A) {
                  this.width = u, this.data = new Uint8ClampedArray(u * A);
                }
                return E.prototype.get = function(u, A) {
                  return this.data[A * this.width + u];
                }, E.prototype.set = function(u, A, d) {
                  this.data[A * this.width + u] = d;
                }, E;
              }();
              function B(E, u, A, d) {
                if (E.length !== u * A * 4) throw new Error("Malformed data passed to binarizer.");
                for (var C = new i(u, A), D = 0; D < u; D++) for (var m = 0; m < A; m++) {
                  var h = E[(m * u + D) * 4 + 0], k = E[(m * u + D) * 4 + 1], p = E[(m * u + D) * 4 + 2];
                  C.set(D, m, 0.2126 * h + 0.7152 * k + 0.0722 * p);
                }
                for (var _ = Math.ceil(u / l), b = Math.ceil(A / l), g = new i(_, b), v = 0; v < b; v++) for (var w = 0; w < _; w++) {
                  for (var I = 0, M = 1 / 0, S = 0, m = 0; m < l; m++) for (var D = 0; D < l; D++) {
                    var N = C.get(w * l + D, v * l + m);
                    I += N, M = Math.min(M, N), S = Math.max(S, N);
                  }
                  var L = I / Math.pow(l, 2);
                  if (S - M <= s && (L = M / 2, v > 0 && w > 0)) {
                    var O = (g.get(w, v - 1) + 2 * g.get(w - 1, v) + g.get(w - 1, v - 1)) / 4;
                    M < O && (L = O);
                  }
                  g.set(w, v, L);
                }
                var H = r.BitMatrix.createEmpty(u, A), j = null;
                d && (j = r.BitMatrix.createEmpty(u, A));
                for (var v = 0; v < b; v++) for (var w = 0; w < _; w++) {
                  for (var J = c(w, 2, _ - 3), U = c(v, 2, b - 3), I = 0, q = -2; q <= 2; q++) for (var K = -2; K <= 2; K++) I += g.get(J + q, U + K);
                  for (var x0 = I / 25, q = 0; q < l; q++) for (var K = 0; K < l; K++) {
                    var D = w * l + q, m = v * l + K, t0 = C.get(D, m);
                    H.set(D, m, t0 <= x0), d && j.set(D, m, !(t0 <= x0));
                  }
                }
                return d ? {
                  binarized: H,
                  inverted: j
                } : {
                  binarized: H
                };
              }
              n.binarize = B;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(0), l = o(6), s = o(9), c = o(10);
              function i(p, _) {
                for (var b = p ^ _, g = 0; b; ) g++, b &= b - 1;
                return g;
              }
              function B(p, _) {
                return _ << 1 | p;
              }
              var E = [
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
              ], u = [
                function(p) {
                  return (p.y + p.x) % 2 === 0;
                },
                function(p) {
                  return p.y % 2 === 0;
                },
                function(p) {
                  return p.x % 3 === 0;
                },
                function(p) {
                  return (p.y + p.x) % 3 === 0;
                },
                function(p) {
                  return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0;
                },
                function(p) {
                  return p.x * p.y % 2 + p.x * p.y % 3 === 0;
                },
                function(p) {
                  return (p.y * p.x % 2 + p.y * p.x % 3) % 2 === 0;
                },
                function(p) {
                  return ((p.y + p.x) % 2 + p.y * p.x % 3) % 2 === 0;
                }
              ];
              function A(p) {
                var _ = 17 + 4 * p.versionNumber, b = r.BitMatrix.createEmpty(_, _);
                b.setRegion(0, 0, 9, 9, true), b.setRegion(_ - 8, 0, 8, 9, true), b.setRegion(0, _ - 8, 9, 8, true);
                for (var g = 0, v = p.alignmentPatternCenters; g < v.length; g++) for (var w = v[g], I = 0, M = p.alignmentPatternCenters; I < M.length; I++) {
                  var S = M[I];
                  w === 6 && S === 6 || w === 6 && S === _ - 7 || w === _ - 7 && S === 6 || b.setRegion(w - 2, S - 2, 5, 5, true);
                }
                return b.setRegion(6, 9, 1, _ - 17, true), b.setRegion(9, 6, _ - 17, 1, true), p.versionNumber > 6 && (b.setRegion(_ - 11, 0, 3, 6, true), b.setRegion(0, _ - 11, 6, 3, true)), b;
              }
              function d(p, _, b) {
                for (var g = u[b.dataMask], v = p.height, w = A(_), I = [], M = 0, S = 0, N = true, L = v - 1; L > 0; L -= 2) {
                  L === 6 && L--;
                  for (var O = 0; O < v; O++) for (var H = N ? v - 1 - O : O, j = 0; j < 2; j++) {
                    var J = L - j;
                    if (!w.get(J, H)) {
                      S++;
                      var U = p.get(J, H);
                      g({
                        y: H,
                        x: J
                      }) && (U = !U), M = B(U, M), S === 8 && (I.push(M), S = 0, M = 0);
                    }
                  }
                  N = !N;
                }
                return I;
              }
              function C(p) {
                var _ = p.height, b = Math.floor((_ - 17) / 4);
                if (b <= 6) return c.VERSIONS[b - 1];
                for (var g = 0, v = 5; v >= 0; v--) for (var w = _ - 9; w >= _ - 11; w--) g = B(p.get(w, v), g);
                for (var I = 0, w = 5; w >= 0; w--) for (var v = _ - 9; v >= _ - 11; v--) I = B(p.get(w, v), I);
                for (var M = 1 / 0, S, N = 0, L = c.VERSIONS; N < L.length; N++) {
                  var O = L[N];
                  if (O.infoBits === g || O.infoBits === I) return O;
                  var H = i(g, O.infoBits);
                  H < M && (S = O, M = H), H = i(I, O.infoBits), H < M && (S = O, M = H);
                }
                if (M <= 3) return S;
              }
              function D(p) {
                for (var _ = 0, b = 0; b <= 8; b++) b !== 6 && (_ = B(p.get(b, 8), _));
                for (var g = 7; g >= 0; g--) g !== 6 && (_ = B(p.get(8, g), _));
                for (var v = p.height, w = 0, g = v - 1; g >= v - 7; g--) w = B(p.get(8, g), w);
                for (var b = v - 8; b < v; b++) w = B(p.get(b, 8), w);
                for (var I = 1 / 0, M = null, S = 0, N = E; S < N.length; S++) {
                  var L = N[S], O = L.bits, H = L.formatInfo;
                  if (O === _ || O === w) return H;
                  var j = i(_, O);
                  j < I && (M = H, I = j), _ !== w && (j = i(w, O), j < I && (M = H, I = j));
                }
                return I <= 3 ? M : null;
              }
              function m(p, _, b) {
                var g = _.errorCorrectionLevels[b], v = [], w = 0;
                if (g.ecBlocks.forEach(function(U) {
                  for (var q = 0; q < U.numBlocks; q++) v.push({
                    numDataCodewords: U.dataCodewordsPerBlock,
                    codewords: []
                  }), w += U.dataCodewordsPerBlock + g.ecCodewordsPerBlock;
                }), p.length < w) return null;
                p = p.slice(0, w);
                for (var I = g.ecBlocks[0].dataCodewordsPerBlock, M = 0; M < I; M++) for (var S = 0, N = v; S < N.length; S++) {
                  var L = N[S];
                  L.codewords.push(p.shift());
                }
                if (g.ecBlocks.length > 1) for (var O = g.ecBlocks[0].numBlocks, H = g.ecBlocks[1].numBlocks, M = 0; M < H; M++) v[O + M].codewords.push(p.shift());
                for (; p.length > 0; ) for (var j = 0, J = v; j < J.length; j++) {
                  var L = J[j];
                  L.codewords.push(p.shift());
                }
                return v;
              }
              function h(p) {
                var _ = C(p);
                if (!_) return null;
                var b = D(p);
                if (!b) return null;
                var g = d(p, _, b), v = m(g, _, b.errorCorrectionLevel);
                if (!v) return null;
                for (var w = v.reduce(function(j, J) {
                  return j + J.numDataCodewords;
                }, 0), I = new Uint8ClampedArray(w), M = 0, S = 0, N = v; S < N.length; S++) {
                  var L = N[S], O = s.decode(L.codewords, L.codewords.length - L.numDataCodewords);
                  if (!O) return null;
                  for (var H = 0; H < L.numDataCodewords; H++) I[M++] = O[H];
                }
                try {
                  return l.decode(I, _.versionNumber);
                } catch {
                  return null;
                }
              }
              function k(p) {
                if (p == null) return null;
                var _ = h(p);
                if (_) return _;
                for (var b = 0; b < p.width; b++) for (var g = b + 1; g < p.height; g++) p.get(b, g) !== p.get(g, b) && (p.set(b, g, !p.get(b, g)), p.set(g, b, !p.get(g, b)));
                return h(p);
              }
              n.decode = k;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = o(7), l = o(8), s;
              (function(C) {
                C.Numeric = "numeric", C.Alphanumeric = "alphanumeric", C.Byte = "byte", C.Kanji = "kanji", C.ECI = "eci";
              })(s = n.Mode || (n.Mode = {}));
              var c;
              (function(C) {
                C[C.Terminator = 0] = "Terminator", C[C.Numeric = 1] = "Numeric", C[C.Alphanumeric = 2] = "Alphanumeric", C[C.Byte = 4] = "Byte", C[C.Kanji = 8] = "Kanji", C[C.ECI = 7] = "ECI";
              })(c || (c = {}));
              function i(C, D) {
                for (var m = [], h = "", k = [
                  10,
                  12,
                  14
                ][D], p = C.readBits(k); p >= 3; ) {
                  var _ = C.readBits(10);
                  if (_ >= 1e3) throw new Error("Invalid numeric value above 999");
                  var b = Math.floor(_ / 100), g = Math.floor(_ / 10) % 10, v = _ % 10;
                  m.push(48 + b, 48 + g, 48 + v), h += b.toString() + g.toString() + v.toString(), p -= 3;
                }
                if (p === 2) {
                  var _ = C.readBits(7);
                  if (_ >= 100) throw new Error("Invalid numeric value above 99");
                  var b = Math.floor(_ / 10), g = _ % 10;
                  m.push(48 + b, 48 + g), h += b.toString() + g.toString();
                } else if (p === 1) {
                  var _ = C.readBits(4);
                  if (_ >= 10) throw new Error("Invalid numeric value above 9");
                  m.push(48 + _), h += _.toString();
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              var B = [
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
              function E(C, D) {
                for (var m = [], h = "", k = [
                  9,
                  11,
                  13
                ][D], p = C.readBits(k); p >= 2; ) {
                  var _ = C.readBits(11), b = Math.floor(_ / 45), g = _ % 45;
                  m.push(B[b].charCodeAt(0), B[g].charCodeAt(0)), h += B[b] + B[g], p -= 2;
                }
                if (p === 1) {
                  var b = C.readBits(6);
                  m.push(B[b].charCodeAt(0)), h += B[b];
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              function u(C, D) {
                for (var m = [], h = "", k = [
                  8,
                  16,
                  16
                ][D], p = C.readBits(k), _ = 0; _ < p; _++) {
                  var b = C.readBits(8);
                  m.push(b);
                }
                try {
                  h += decodeURIComponent(m.map(function(g) {
                    return "%" + ("0" + g.toString(16)).substr(-2);
                  }).join(""));
                } catch {
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              function A(C, D) {
                for (var m = [], h = "", k = [
                  8,
                  10,
                  12
                ][D], p = C.readBits(k), _ = 0; _ < p; _++) {
                  var b = C.readBits(13), g = Math.floor(b / 192) << 8 | b % 192;
                  g < 7936 ? g += 33088 : g += 49472, m.push(g >> 8, g & 255), h += String.fromCharCode(l.shiftJISTable[g]);
                }
                return {
                  bytes: m,
                  text: h
                };
              }
              function d(C, D) {
                for (var m, h, k, p, _ = new r.BitStream(C), b = D <= 9 ? 0 : D <= 26 ? 1 : 2, g = {
                  text: "",
                  bytes: [],
                  chunks: [],
                  version: D
                }; _.available() >= 4; ) {
                  var v = _.readBits(4);
                  if (v === c.Terminator) return g;
                  if (v === c.ECI) _.readBits(1) === 0 ? g.chunks.push({
                    type: s.ECI,
                    assignmentNumber: _.readBits(7)
                  }) : _.readBits(1) === 0 ? g.chunks.push({
                    type: s.ECI,
                    assignmentNumber: _.readBits(14)
                  }) : _.readBits(1) === 0 ? g.chunks.push({
                    type: s.ECI,
                    assignmentNumber: _.readBits(21)
                  }) : g.chunks.push({
                    type: s.ECI,
                    assignmentNumber: -1
                  });
                  else if (v === c.Numeric) {
                    var w = i(_, b);
                    g.text += w.text, (m = g.bytes).push.apply(m, w.bytes), g.chunks.push({
                      type: s.Numeric,
                      text: w.text
                    });
                  } else if (v === c.Alphanumeric) {
                    var I = E(_, b);
                    g.text += I.text, (h = g.bytes).push.apply(h, I.bytes), g.chunks.push({
                      type: s.Alphanumeric,
                      text: I.text
                    });
                  } else if (v === c.Byte) {
                    var M = u(_, b);
                    g.text += M.text, (k = g.bytes).push.apply(k, M.bytes), g.chunks.push({
                      type: s.Byte,
                      bytes: M.bytes,
                      text: M.text
                    });
                  } else if (v === c.Kanji) {
                    var S = A(_, b);
                    g.text += S.text, (p = g.bytes).push.apply(p, S.bytes), g.chunks.push({
                      type: s.Kanji,
                      bytes: S.bytes,
                      text: S.text
                    });
                  }
                }
                if (_.available() === 0 || _.readBits(_.available()) === 0) return g;
              }
              n.decode = d;
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
                  var c = 0;
                  if (this.bitOffset > 0) {
                    var i = 8 - this.bitOffset, B = s < i ? s : i, E = i - B, u = 255 >> 8 - B << E;
                    c = (this.bytes[this.byteOffset] & u) >> E, s -= B, this.bitOffset += B, this.bitOffset === 8 && (this.bitOffset = 0, this.byteOffset++);
                  }
                  if (s > 0) {
                    for (; s >= 8; ) c = c << 8 | this.bytes[this.byteOffset] & 255, this.byteOffset++, s -= 8;
                    if (s > 0) {
                      var E = 8 - s, u = 255 >> E << E;
                      c = c << s | (this.bytes[this.byteOffset] & u) >> E, this.bitOffset += s;
                    }
                  }
                  return c;
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
              function s(E, u, A, d) {
                var C;
                u.degree() < A.degree() && (C = [
                  A,
                  u
                ], u = C[0], A = C[1]);
                for (var D = u, m = A, h = E.zero, k = E.one; m.degree() >= d / 2; ) {
                  var p = D, _ = h;
                  if (D = m, h = k, D.isZero()) return null;
                  m = p;
                  for (var b = E.zero, g = D.getCoefficient(D.degree()), v = E.inverse(g); m.degree() >= D.degree() && !m.isZero(); ) {
                    var w = m.degree() - D.degree(), I = E.multiply(m.getCoefficient(m.degree()), v);
                    b = b.addOrSubtract(E.buildMonomial(w, I)), m = m.addOrSubtract(D.multiplyByMonomial(w, I));
                  }
                  if (k = b.multiplyPoly(h).addOrSubtract(_), m.degree() >= D.degree()) return null;
                }
                var M = k.getCoefficient(0);
                if (M === 0) return null;
                var S = E.inverse(M);
                return [
                  k.multiply(S),
                  m.multiply(S)
                ];
              }
              function c(E, u) {
                var A = u.degree();
                if (A === 1) return [
                  u.getCoefficient(1)
                ];
                for (var d = new Array(A), C = 0, D = 1; D < E.size && C < A; D++) u.evaluateAt(D) === 0 && (d[C] = E.inverse(D), C++);
                return C !== A ? null : d;
              }
              function i(E, u, A) {
                for (var d = A.length, C = new Array(d), D = 0; D < d; D++) {
                  for (var m = E.inverse(A[D]), h = 1, k = 0; k < d; k++) D !== k && (h = E.multiply(h, r.addOrSubtractGF(1, E.multiply(A[k], m))));
                  C[D] = E.multiply(u.evaluateAt(m), E.inverse(h)), E.generatorBase !== 0 && (C[D] = E.multiply(C[D], m));
                }
                return C;
              }
              function B(E, u) {
                var A = new Uint8ClampedArray(E.length);
                A.set(E);
                for (var d = new r.default(285, 256, 0), C = new l.default(d, A), D = new Uint8ClampedArray(u), m = false, h = 0; h < u; h++) {
                  var k = C.evaluateAt(d.exp(h + d.generatorBase));
                  D[D.length - 1 - h] = k, k !== 0 && (m = true);
                }
                if (!m) return A;
                var p = new l.default(d, D), _ = s(d, d.buildMonomial(u, 1), p, u);
                if (_ === null) return null;
                var b = c(d, _[0]);
                if (b == null) return null;
                for (var g = i(d, _[1], b), v = 0; v < b.length; v++) {
                  var w = A.length - 1 - d.log(b[v]);
                  if (w < 0) return null;
                  A[w] = r.addOrSubtractGF(A[w], g[v]);
                }
                return A;
              }
              n.decode = B;
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
              function l(B, E, u, A) {
                var d = B.x - E.x + u.x - A.x, C = B.y - E.y + u.y - A.y;
                if (d === 0 && C === 0) return {
                  a11: E.x - B.x,
                  a12: E.y - B.y,
                  a13: 0,
                  a21: u.x - E.x,
                  a22: u.y - E.y,
                  a23: 0,
                  a31: B.x,
                  a32: B.y,
                  a33: 1
                };
                var D = E.x - u.x, m = A.x - u.x, h = E.y - u.y, k = A.y - u.y, p = D * k - m * h, _ = (d * k - m * C) / p, b = (D * C - d * h) / p;
                return {
                  a11: E.x - B.x + _ * E.x,
                  a12: E.y - B.y + _ * E.y,
                  a13: _,
                  a21: A.x - B.x + b * A.x,
                  a22: A.y - B.y + b * A.y,
                  a23: b,
                  a31: B.x,
                  a32: B.y,
                  a33: 1
                };
              }
              function s(B, E, u, A) {
                var d = l(B, E, u, A);
                return {
                  a11: d.a22 * d.a33 - d.a23 * d.a32,
                  a12: d.a13 * d.a32 - d.a12 * d.a33,
                  a13: d.a12 * d.a23 - d.a13 * d.a22,
                  a21: d.a23 * d.a31 - d.a21 * d.a33,
                  a22: d.a11 * d.a33 - d.a13 * d.a31,
                  a23: d.a13 * d.a21 - d.a11 * d.a23,
                  a31: d.a21 * d.a32 - d.a22 * d.a31,
                  a32: d.a12 * d.a31 - d.a11 * d.a32,
                  a33: d.a11 * d.a22 - d.a12 * d.a21
                };
              }
              function c(B, E) {
                return {
                  a11: B.a11 * E.a11 + B.a21 * E.a12 + B.a31 * E.a13,
                  a12: B.a12 * E.a11 + B.a22 * E.a12 + B.a32 * E.a13,
                  a13: B.a13 * E.a11 + B.a23 * E.a12 + B.a33 * E.a13,
                  a21: B.a11 * E.a21 + B.a21 * E.a22 + B.a31 * E.a23,
                  a22: B.a12 * E.a21 + B.a22 * E.a22 + B.a32 * E.a23,
                  a23: B.a13 * E.a21 + B.a23 * E.a22 + B.a33 * E.a23,
                  a31: B.a11 * E.a31 + B.a21 * E.a32 + B.a31 * E.a33,
                  a32: B.a12 * E.a31 + B.a22 * E.a32 + B.a32 * E.a33,
                  a33: B.a13 * E.a31 + B.a23 * E.a32 + B.a33 * E.a33
                };
              }
              function i(B, E) {
                for (var u = s({
                  x: 3.5,
                  y: 3.5
                }, {
                  x: E.dimension - 3.5,
                  y: 3.5
                }, {
                  x: E.dimension - 6.5,
                  y: E.dimension - 6.5
                }, {
                  x: 3.5,
                  y: E.dimension - 3.5
                }), A = l(E.topLeft, E.topRight, E.alignmentPattern, E.bottomLeft), d = c(A, u), C = r.BitMatrix.createEmpty(E.dimension, E.dimension), D = function(b, g) {
                  var v = d.a13 * b + d.a23 * g + d.a33;
                  return {
                    x: (d.a11 * b + d.a21 * g + d.a31) / v,
                    y: (d.a12 * b + d.a22 * g + d.a32) / v
                  };
                }, m = 0; m < E.dimension; m++) for (var h = 0; h < E.dimension; h++) {
                  var k = h + 0.5, p = m + 0.5, _ = D(k, p);
                  C.set(h, m, B.get(Math.floor(_.x), Math.floor(_.y)));
                }
                return {
                  matrix: C,
                  mappingFunction: D
                };
              }
              n.extract = i;
            },
            function(x, n, o) {
              Object.defineProperty(n, "__esModule", {
                value: true
              });
              var r = 4, l = 0.5, s = 1.5, c = function(k, p) {
                return Math.sqrt(Math.pow(p.x - k.x, 2) + Math.pow(p.y - k.y, 2));
              };
              function i(k) {
                return k.reduce(function(p, _) {
                  return p + _;
                });
              }
              function B(k, p, _) {
                var b, g, v, w, I = c(k, p), M = c(p, _), S = c(k, _), N, L, O;
                return M >= I && M >= S ? (b = [
                  p,
                  k,
                  _
                ], N = b[0], L = b[1], O = b[2]) : S >= M && S >= I ? (g = [
                  k,
                  p,
                  _
                ], N = g[0], L = g[1], O = g[2]) : (v = [
                  k,
                  _,
                  p
                ], N = v[0], L = v[1], O = v[2]), (O.x - L.x) * (N.y - L.y) - (O.y - L.y) * (N.x - L.x) < 0 && (w = [
                  O,
                  N
                ], N = w[0], O = w[1]), {
                  bottomLeft: N,
                  topLeft: L,
                  topRight: O
                };
              }
              function E(k, p, _, b) {
                var g = (i(A(k, _, b, 5)) / 7 + i(A(k, p, b, 5)) / 7 + i(A(_, k, b, 5)) / 7 + i(A(p, k, b, 5)) / 7) / 4;
                if (g < 1) throw new Error("Invalid module size");
                var v = Math.round(c(k, p) / g), w = Math.round(c(k, _) / g), I = Math.floor((v + w) / 2) + 7;
                switch (I % 4) {
                  case 0:
                    I++;
                    break;
                  case 2:
                    I--;
                    break;
                }
                return {
                  dimension: I,
                  moduleSize: g
                };
              }
              function u(k, p, _, b) {
                var g = [
                  {
                    x: Math.floor(k.x),
                    y: Math.floor(k.y)
                  }
                ], v = Math.abs(p.y - k.y) > Math.abs(p.x - k.x), w, I, M, S;
                v ? (w = Math.floor(k.y), I = Math.floor(k.x), M = Math.floor(p.y), S = Math.floor(p.x)) : (w = Math.floor(k.x), I = Math.floor(k.y), M = Math.floor(p.x), S = Math.floor(p.y));
                for (var N = Math.abs(M - w), L = Math.abs(S - I), O = Math.floor(-N / 2), H = w < M ? 1 : -1, j = I < S ? 1 : -1, J = true, U = w, q = I; U !== M + H; U += H) {
                  var K = v ? q : U, x0 = v ? U : q;
                  if (_.get(K, x0) !== J && (J = !J, g.push({
                    x: K,
                    y: x0
                  }), g.length === b + 1)) break;
                  if (O += L, O > 0) {
                    if (q === S) break;
                    q += j, O -= N;
                  }
                }
                for (var t0 = [], V = 0; V < b; V++) g[V] && g[V + 1] ? t0.push(c(g[V], g[V + 1])) : t0.push(0);
                return t0;
              }
              function A(k, p, _, b) {
                var g, v = p.y - k.y, w = p.x - k.x, I = u(k, p, _, Math.ceil(b / 2)), M = u(k, {
                  x: k.x - w,
                  y: k.y - v
                }, _, Math.ceil(b / 2)), S = I.shift() + M.shift() - 1;
                return (g = M.concat(S)).concat.apply(g, I);
              }
              function d(k, p) {
                var _ = i(k) / i(p), b = 0;
                return p.forEach(function(g, v) {
                  b += Math.pow(k[v] - g * _, 2);
                }), {
                  averageSize: _,
                  error: b
                };
              }
              function C(k, p, _) {
                try {
                  var b = A(k, {
                    x: -1,
                    y: k.y
                  }, _, p.length), g = A(k, {
                    x: k.x,
                    y: -1
                  }, _, p.length), v = {
                    x: Math.max(0, k.x - k.y) - 1,
                    y: Math.max(0, k.y - k.x) - 1
                  }, w = A(k, v, _, p.length), I = {
                    x: Math.min(_.width, k.x + k.y) + 1,
                    y: Math.min(_.height, k.y + k.x) + 1
                  }, M = A(k, I, _, p.length), S = d(b, p), N = d(g, p), L = d(w, p), O = d(M, p), H = Math.sqrt(S.error * S.error + N.error * N.error + L.error * L.error + O.error * O.error), j = (S.averageSize + N.averageSize + L.averageSize + O.averageSize) / 4, J = (Math.pow(S.averageSize - j, 2) + Math.pow(N.averageSize - j, 2) + Math.pow(L.averageSize - j, 2) + Math.pow(O.averageSize - j, 2)) / j;
                  return H + J;
                } catch {
                  return 1 / 0;
                }
              }
              function D(k, p) {
                for (var _ = Math.round(p.x); k.get(_, Math.round(p.y)); ) _--;
                for (var b = Math.round(p.x); k.get(b, Math.round(p.y)); ) b++;
                for (var g = (_ + b) / 2, v = Math.round(p.y); k.get(Math.round(g), v); ) v--;
                for (var w = Math.round(p.y); k.get(Math.round(g), w); ) w++;
                var I = (v + w) / 2;
                return {
                  x: g,
                  y: I
                };
              }
              function m(k) {
                for (var p = [], _ = [], b = [], g = [], v = function(K) {
                  for (var x0 = 0, t0 = false, V = [
                    0,
                    0,
                    0,
                    0,
                    0
                  ], o0 = function(c0) {
                    var W = k.get(c0, K);
                    if (W === t0) x0++;
                    else {
                      V = [
                        V[1],
                        V[2],
                        V[3],
                        V[4],
                        x0
                      ], x0 = 1, t0 = W;
                      var Q = i(V) / 7, $ = Math.abs(V[0] - Q) < Q && Math.abs(V[1] - Q) < Q && Math.abs(V[2] - 3 * Q) < 3 * Q && Math.abs(V[3] - Q) < Q && Math.abs(V[4] - Q) < Q && !W, n0 = i(V.slice(-3)) / 3, a0 = Math.abs(V[2] - n0) < n0 && Math.abs(V[3] - n0) < n0 && Math.abs(V[4] - n0) < n0 && W;
                      if ($) {
                        var i0 = c0 - V[3] - V[4], V0 = i0 - V[2], T0 = {
                          startX: V0,
                          endX: i0,
                          y: K
                        }, Y0 = _.filter(function(M0) {
                          return V0 >= M0.bottom.startX && V0 <= M0.bottom.endX || i0 >= M0.bottom.startX && V0 <= M0.bottom.endX || V0 <= M0.bottom.startX && i0 >= M0.bottom.endX && V[2] / (M0.bottom.endX - M0.bottom.startX) < s && V[2] / (M0.bottom.endX - M0.bottom.startX) > l;
                        });
                        Y0.length > 0 ? Y0[0].bottom = T0 : _.push({
                          top: T0,
                          bottom: T0
                        });
                      }
                      if (a0) {
                        var xe = c0 - V[4], S0 = xe - V[3], T0 = {
                          startX: S0,
                          y: K,
                          endX: xe
                        }, Y0 = g.filter(function(I0) {
                          return S0 >= I0.bottom.startX && S0 <= I0.bottom.endX || xe >= I0.bottom.startX && S0 <= I0.bottom.endX || S0 <= I0.bottom.startX && xe >= I0.bottom.endX && V[2] / (I0.bottom.endX - I0.bottom.startX) < s && V[2] / (I0.bottom.endX - I0.bottom.startX) > l;
                        });
                        Y0.length > 0 ? Y0[0].bottom = T0 : g.push({
                          top: T0,
                          bottom: T0
                        });
                      }
                    }
                  }, E0 = -1; E0 <= k.width; E0++) o0(E0);
                  p.push.apply(p, _.filter(function(c0) {
                    return c0.bottom.y !== K && c0.bottom.y - c0.top.y >= 2;
                  })), _ = _.filter(function(c0) {
                    return c0.bottom.y === K;
                  }), b.push.apply(b, g.filter(function(c0) {
                    return c0.bottom.y !== K;
                  })), g = g.filter(function(c0) {
                    return c0.bottom.y === K;
                  });
                }, w = 0; w <= k.height; w++) v(w);
                p.push.apply(p, _.filter(function(K) {
                  return K.bottom.y - K.top.y >= 2;
                })), b.push.apply(b, g);
                var I = p.filter(function(K) {
                  return K.bottom.y - K.top.y >= 2;
                }).map(function(K) {
                  var x0 = (K.top.startX + K.top.endX + K.bottom.startX + K.bottom.endX) / 4, t0 = (K.top.y + K.bottom.y + 1) / 2;
                  if (k.get(Math.round(x0), Math.round(t0))) {
                    var V = [
                      K.top.endX - K.top.startX,
                      K.bottom.endX - K.bottom.startX,
                      K.bottom.y - K.top.y + 1
                    ], o0 = i(V) / V.length, E0 = C({
                      x: Math.round(x0),
                      y: Math.round(t0)
                    }, [
                      1,
                      1,
                      3,
                      1,
                      1
                    ], k);
                    return {
                      score: E0,
                      x: x0,
                      y: t0,
                      size: o0
                    };
                  }
                }).filter(function(K) {
                  return !!K;
                }).sort(function(K, x0) {
                  return K.score - x0.score;
                }).map(function(K, x0, t0) {
                  if (x0 > r) return null;
                  var V = t0.filter(function(E0, c0) {
                    return x0 !== c0;
                  }).map(function(E0) {
                    return {
                      x: E0.x,
                      y: E0.y,
                      score: E0.score + Math.pow(E0.size - K.size, 2) / K.size,
                      size: E0.size
                    };
                  }).sort(function(E0, c0) {
                    return E0.score - c0.score;
                  });
                  if (V.length < 2) return null;
                  var o0 = K.score + V[0].score + V[1].score;
                  return {
                    points: [
                      K
                    ].concat(V.slice(0, 2)),
                    score: o0
                  };
                }).filter(function(K) {
                  return !!K;
                }).sort(function(K, x0) {
                  return K.score - x0.score;
                });
                if (I.length === 0) return null;
                var M = B(I[0].points[0], I[0].points[1], I[0].points[2]), S = M.topRight, N = M.topLeft, L = M.bottomLeft, O = h(k, b, S, N, L), H = [];
                O && H.push({
                  alignmentPattern: {
                    x: O.alignmentPattern.x,
                    y: O.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: L.x,
                    y: L.y
                  },
                  dimension: O.dimension,
                  topLeft: {
                    x: N.x,
                    y: N.y
                  },
                  topRight: {
                    x: S.x,
                    y: S.y
                  }
                });
                var j = D(k, S), J = D(k, N), U = D(k, L), q = h(k, b, j, J, U);
                return q && H.push({
                  alignmentPattern: {
                    x: q.alignmentPattern.x,
                    y: q.alignmentPattern.y
                  },
                  bottomLeft: {
                    x: U.x,
                    y: U.y
                  },
                  topLeft: {
                    x: J.x,
                    y: J.y
                  },
                  topRight: {
                    x: j.x,
                    y: j.y
                  },
                  dimension: q.dimension
                }), H.length === 0 ? null : H;
              }
              n.locate = m;
              function h(k, p, _, b, g) {
                var v, w, I;
                try {
                  v = E(b, _, g, k), w = v.dimension, I = v.moduleSize;
                } catch {
                  return null;
                }
                var M = {
                  x: _.x - b.x + g.x,
                  y: _.y - b.y + g.y
                }, S = (c(b, g) + c(b, _)) / 2 / I, N = 1 - 3 / S, L = {
                  x: b.x + N * (M.x - b.x),
                  y: b.y + N * (M.y - b.y)
                }, O = p.map(function(j) {
                  var J = (j.top.startX + j.top.endX + j.bottom.startX + j.bottom.endX) / 4, U = (j.top.y + j.bottom.y + 1) / 2;
                  if (k.get(Math.floor(J), Math.floor(U))) {
                    var q = [
                      j.top.endX - j.top.startX,
                      j.bottom.endX - j.bottom.startX,
                      j.bottom.y - j.top.y + 1
                    ];
                    i(q) / q.length;
                    var K = C({
                      x: Math.floor(J),
                      y: Math.floor(U)
                    }, [
                      1,
                      1,
                      1
                    ], k), x0 = K + c({
                      x: J,
                      y: U
                    }, L);
                    return {
                      x: J,
                      y: U,
                      score: x0
                    };
                  }
                }).filter(function(j) {
                  return !!j;
                }).sort(function(j, J) {
                  return j.score - J.score;
                }), H = S >= 15 && O.length ? O[0] : L;
                return {
                  alignmentPattern: H,
                  dimension: w
                };
              }
            }
          ]).default;
        });
      })(_o);
      var N8 = _o.exports;
      const R8 = d9(N8);
      function Dn(t, e, x) {
        const n = t.slice();
        return n[42] = e[x], n;
      }
      function O8(t) {
        let e;
        return {
          c() {
            e = F("a"), e.innerHTML = '<span class="material-icons svelte-1kbyai7">arrow_back</span>', f(e, "class", "back-btn svelte-1kbyai7"), f(e, "href", "#/home");
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
      function H8(t) {
        let e, x, n;
        return {
          c() {
            e = F("button"), e.innerHTML = '<span class="material-icons svelte-1kbyai7">arrow_back</span>', f(e, "class", "back-btn svelte-1kbyai7");
          },
          m(o, r) {
            T(o, e, r), x || (n = z(e, "click", t[15]), x = true);
          },
          p: X,
          d(o) {
            o && P(e), x = false, n();
          }
        };
      }
      function U8(t) {
        let e;
        return {
          c() {
            e = R("New encounter");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function q8(t) {
        let e;
        return {
          c() {
            e = R("Encounter saved");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function j8(t) {
        let e;
        return {
          c() {
            e = R("Join group");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function z8(t) {
        let e;
        return {
          c() {
            e = R("Confirm exchange");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function G8(t) {
        let e;
        return {
          c() {
            e = R("Scan their code");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function K8(t) {
        let e, x, n, o, r, l, s, c, i = t[12] ? "Saving\u2026" : "Join group", B, E, u, A, d, C;
        function D(k, p) {
          return k[11]?.name ? ec : $8;
        }
        let m = D(t), h = m(t);
        return {
          c() {
            e = F("section"), x = F("p"), x.textContent = "Join group encounter?", n = y(), h.c(), o = y(), r = F("div"), l = F("button"), s = F("span"), s.textContent = "groups", c = y(), B = R(i), E = y(), u = F("button"), A = R("Cancel"), f(x, "class", "section-label svelte-1kbyai7"), f(s, "class", "material-icons svelte-1kbyai7"), f(l, "class", "btn-filled svelte-1kbyai7"), l.disabled = t[12], f(u, "class", "btn-text svelte-1kbyai7"), u.disabled = t[12], f(r, "class", "ongoing-actions svelte-1kbyai7"), f(e, "class", "card pad svelte-1kbyai7");
          },
          m(k, p) {
            T(k, e, p), a(e, x), a(e, n), h.m(e, null), a(e, o), a(e, r), a(r, l), a(l, s), a(l, c), a(l, B), a(r, E), a(r, u), a(u, A), d || (C = [
              z(l, "click", t[18]),
              z(u, "click", t[15])
            ], d = true);
          },
          p(k, p) {
            m === (m = D(k)) && h ? h.p(k, p) : (h.d(1), h = m(k), h && (h.c(), h.m(e, o))), p[0] & 4096 && i !== (i = k[12] ? "Saving\u2026" : "Join group") && G(B, i), p[0] & 4096 && (l.disabled = k[12]), p[0] & 4096 && (u.disabled = k[12]);
          },
          d(k) {
            k && P(e), h.d(), d = false, s0(C);
          }
        };
      }
      function V8(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D = t[12] && pn();
        return {
          c() {
            e = F("section"), x = F("p"), x.textContent = "Ongoing relationship?", n = y(), o = F("p"), o.textContent = "Looks like you've met this person before. Mark them as an ongoing partner? You won't need to log each session separately \u2014 they'll stay a partner until either of you marks it as over.", r = y(), l = F("div"), s = F("button"), c = F("span"), c.textContent = "favorite", i = R(`
          Yes, ongoing`), B = y(), E = F("button"), u = R("No, one off"), A = y(), D && D.c(), f(x, "class", "section-label svelte-1kbyai7"), f(o, "class", "help-text svelte-1kbyai7"), f(c, "class", "material-icons svelte-1kbyai7"), f(s, "class", "btn-filled svelte-1kbyai7"), s.disabled = t[12], f(E, "class", "btn-outlined svelte-1kbyai7"), E.disabled = t[12], f(l, "class", "ongoing-actions svelte-1kbyai7"), f(e, "class", "card pad svelte-1kbyai7");
          },
          m(m, h) {
            T(m, e, h), a(e, x), a(e, n), a(e, o), a(e, r), a(e, l), a(l, s), a(s, c), a(s, i), a(l, B), a(l, E), a(E, u), a(e, A), D && D.m(e, null), d || (C = [
              z(s, "click", t[25]),
              z(E, "click", t[26])
            ], d = true);
          },
          p(m, h) {
            h[0] & 4096 && (s.disabled = m[12]), h[0] & 4096 && (E.disabled = m[12]), m[12] ? D || (D = pn(), D.c(), D.m(e, null)) : D && (D.d(1), D = null);
          },
          d(m) {
            m && P(e), D && D.d(), d = false, s0(C);
          }
        };
      }
      function Y8(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u, A, d, C, D, m, h, k, p, _, b = u0(t[10]), g = [];
        for (let w = 0; w < b.length; w += 1) g[w] = mn(Dn(t, b, w));
        let v = t[12] && hn();
        return {
          c() {
            e = F("section"), x = F("p"), x.textContent = "Your partner's number", n = y(), o = F("p"), r = R(t[9]), l = y(), s = F("p"), s.textContent = "Ask your partner to confirm this matches their screen.", c = y(), i = F("section"), B = F("p"), B.textContent = "Let your partner scan your code", E = y(), u = F("div"), A = F("div"), d = y(), C = F("section"), D = F("p"), D.textContent = "What is your number?", m = y(), h = F("p"), h.textContent = "Tap the number shown on your screen above.", k = y(), p = F("div");
            for (let w = 0; w < g.length; w += 1) g[w].c();
            _ = y(), v && v.c(), f(x, "class", "section-label svelte-1kbyai7"), f(o, "class", "confirm-number svelte-1kbyai7"), f(s, "class", "help-text svelte-1kbyai7"), f(e, "class", "card pad svelte-1kbyai7"), f(B, "class", "section-label svelte-1kbyai7"), f(A, "class", "qr-inner svelte-1kbyai7"), f(u, "class", "qr-frame svelte-1kbyai7"), f(i, "class", "card pad svelte-1kbyai7"), f(D, "class", "section-label svelte-1kbyai7"), f(h, "class", "help-text svelte-1kbyai7"), f(p, "class", "choices svelte-1kbyai7"), f(C, "class", "card pad svelte-1kbyai7");
          },
          m(w, I) {
            T(w, e, I), a(e, x), a(e, n), a(e, o), a(o, r), a(e, l), a(e, s), T(w, c, I), T(w, i, I), a(i, B), a(i, E), a(i, u), a(u, A), A.innerHTML = t[2], T(w, d, I), T(w, C, I), a(C, D), a(C, m), a(C, h), a(C, k), a(C, p);
            for (let M = 0; M < g.length; M += 1) g[M] && g[M].m(p, null);
            a(C, _), v && v.m(C, null);
          },
          p(w, I) {
            if (I[0] & 512 && G(r, w[9]), I[0] & 4 && (A.innerHTML = w[2]), I[0] & 70656) {
              b = u0(w[10]);
              let M;
              for (M = 0; M < b.length; M += 1) {
                const S = Dn(w, b, M);
                g[M] ? g[M].p(S, I) : (g[M] = mn(S), g[M].c(), g[M].m(p, null));
              }
              for (; M < g.length; M += 1) g[M].d(1);
              g.length = b.length;
            }
            w[12] ? v || (v = hn(), v.c(), v.m(C, null)) : v && (v.d(1), v = null);
          },
          d(w) {
            w && (P(e), P(c), P(i), P(d), P(C)), R0(g, w), v && v.d();
          }
        };
      }
      function Q8(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = F("div"), x = F("video"), n = y(), o = F("canvas"), r = y(), l = F("div"), l.innerHTML = '<div class="scan-box svelte-1kbyai7"></div> <p class="scan-hint svelte-1kbyai7">Point at your partner&#39;s QR code</p>', x.playsInline = true, f(x, "class", "camera-video svelte-1kbyai7"), f(o, "class", "camera-canvas svelte-1kbyai7"), f(l, "class", "scan-overlay svelte-1kbyai7"), f(e, "class", "camera-wrap svelte-1kbyai7");
          },
          m(s, c) {
            T(s, e, c), a(e, x), t[22](x), a(e, n), a(e, o), t[23](o), a(e, r), a(e, l);
          },
          p: X,
          d(s) {
            s && P(e), t[22](null), t[23](null);
          }
        };
      }
      function J8(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u = t[6] ? "Hide" : "Enter code manually", A, d, C, D, m, h = t[5] && kn(t), k = t[8] && _n(t);
        function p(v, w) {
          return v[2] ? tc : xc;
        }
        let _ = p(t), b = _(t), g = t[6] && bn(t);
        return {
          c() {
            h && h.c(), e = y(), k && k.c(), x = y(), n = F("section"), o = F("p"), o.textContent = "Show this to your partner", r = y(), l = F("div"), b.c(), s = y(), c = F("div"), i = F("button"), i.innerHTML = `<span class="material-icons svelte-1kbyai7">qr_code_scanner</span>
        Scan Their Code`, B = y(), E = F("button"), A = R(u), d = y(), g && g.c(), C = P0(), f(o, "class", "section-label svelte-1kbyai7"), f(l, "class", "qr-frame svelte-1kbyai7"), f(n, "class", "card pad svelte-1kbyai7"), f(i, "class", "btn-filled svelte-1kbyai7"), f(E, "class", "btn-text svelte-1kbyai7"), f(c, "class", "scan-actions svelte-1kbyai7");
          },
          m(v, w) {
            h && h.m(v, w), T(v, e, w), k && k.m(v, w), T(v, x, w), T(v, n, w), a(n, o), a(n, r), a(n, l), b.m(l, null), T(v, s, w), T(v, c, w), a(c, i), a(c, B), a(c, E), a(E, A), T(v, d, w), g && g.m(v, w), T(v, C, w), D || (m = [
              z(i, "click", t[13]),
              z(E, "click", t[19])
            ], D = true);
          },
          p(v, w) {
            v[5] ? h ? h.p(v, w) : (h = kn(v), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), v[8] ? k ? k.p(v, w) : (k = _n(v), k.c(), k.m(x.parentNode, x)) : k && (k.d(1), k = null), _ === (_ = p(v)) && b ? b.p(v, w) : (b.d(1), b = _(v), b && (b.c(), b.m(l, null))), w[0] & 64 && u !== (u = v[6] ? "Hide" : "Enter code manually") && G(A, u), v[6] ? g ? g.p(v, w) : (g = bn(v), g.c(), g.m(C.parentNode, C)) : g && (g.d(1), g = null);
          },
          d(v) {
            v && (P(e), P(x), P(n), P(s), P(c), P(d), P(C)), h && h.d(v), k && k.d(v), b.d(), g && g.d(v), D = false, s0(m);
          }
        };
      }
      function W8(t) {
        let e;
        return {
          c() {
            e = F("section"), e.innerHTML = '<span class="material-icons saved-icon svelte-1kbyai7">check_circle</span> <p class="saved-title svelte-1kbyai7">Encounter recorded</p> <p class="muted svelte-1kbyai7">Your encounter has been saved securely.</p> <a href="#/encounters" class="btn-filled svelte-1kbyai7">View encounters</a>', f(e, "class", "card pad saved-card svelte-1kbyai7");
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
      function X8(t) {
        let e, x, n, o, r;
        return {
          c() {
            e = F("section"), x = F("p"), n = R(t[1]), o = y(), r = F("a"), r.textContent = "\u2190 Back", f(x, "class", "error svelte-1kbyai7"), f(r, "href", "#/home"), f(r, "class", "btn-text svelte-1kbyai7"), f(e, "class", "card pad svelte-1kbyai7");
          },
          m(l, s) {
            T(l, e, s), a(e, x), a(x, n), a(e, o), a(e, r);
          },
          p(l, s) {
            s[0] & 2 && G(n, l[1]);
          },
          d(l) {
            l && P(e);
          }
        };
      }
      function Z8(t) {
        let e;
        return {
          c() {
            e = F("div"), e.innerHTML = '<div class="spinner svelte-1kbyai7"></div> <p class="muted svelte-1kbyai7">Generating your code\u2026</p>', f(e, "class", "center-fill svelte-1kbyai7");
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
      function $8(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Unnamed group encounter", f(e, "class", "help-text svelte-1kbyai7");
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
      function ec(t) {
        let e, x = t[11].name + "", n;
        return {
          c() {
            e = F("p"), n = R(x), f(e, "class", "confirm-group-name svelte-1kbyai7");
          },
          m(o, r) {
            T(o, e, r), a(e, n);
          },
          p(o, r) {
            r[0] & 2048 && x !== (x = o[11].name + "") && G(n, x);
          },
          d(o) {
            o && P(e);
          }
        };
      }
      function pn(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Saving\u2026", f(e, "class", "muted saving-hint svelte-1kbyai7");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function mn(t) {
        let e, x = t[42] + "", n, o, r;
        function l() {
          return t[24](t[42]);
        }
        return {
          c() {
            e = F("button"), n = R(x), f(e, "class", "choice-btn svelte-1kbyai7"), e.disabled = t[12];
          },
          m(s, c) {
            T(s, e, c), a(e, n), o || (r = z(e, "click", l), o = true);
          },
          p(s, c) {
            t = s, c[0] & 1024 && x !== (x = t[42] + "") && G(n, x), c[0] & 4096 && (e.disabled = t[12]);
          },
          d(s) {
            s && P(e), o = false, r();
          }
        };
      }
      function hn(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Saving\u2026", f(e, "class", "muted saving-hint svelte-1kbyai7");
          },
          m(x, n) {
            T(x, e, n);
          },
          d(x) {
            x && P(e);
          }
        };
      }
      function kn(t) {
        let e, x, n, o;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "error_outline", n = y(), o = R(t[5]), f(x, "class", "material-icons svelte-1kbyai7"), f(e, "class", "alert-banner svelte-1kbyai7");
          },
          m(r, l) {
            T(r, e, l), a(e, x), a(e, n), a(e, o);
          },
          p(r, l) {
            l[0] & 32 && G(o, r[5]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function _n(t) {
        let e, x, n, o;
        return {
          c() {
            e = F("div"), x = F("span"), x.textContent = "error_outline", n = y(), o = R(t[8]), f(x, "class", "material-icons svelte-1kbyai7"), f(e, "class", "alert-banner svelte-1kbyai7");
          },
          m(r, l) {
            T(r, e, l), a(e, x), a(e, n), a(e, o);
          },
          p(r, l) {
            l[0] & 256 && G(o, r[8]);
          },
          d(r) {
            r && P(e);
          }
        };
      }
      function xc(t) {
        let e;
        return {
          c() {
            e = F("p"), e.textContent = "Generating\u2026", f(e, "class", "muted svelte-1kbyai7");
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
      function tc(t) {
        let e;
        return {
          c() {
            e = F("div"), f(e, "class", "qr-inner svelte-1kbyai7");
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
      function bn(t) {
        let e, x, n, o, r, l, s, c, i, B, E, u = t[8] && gn(t);
        return {
          c() {
            e = F("section"), x = F("p"), x.textContent = "Paste their QR payload", n = y(), o = F("textarea"), r = y(), u && u.c(), l = y(), s = F("button"), c = R("Continue"), f(x, "class", "section-label svelte-1kbyai7"), f(o, "placeholder", "1|ABC\u2026|1234567890|a3f7\u2026 or 2|abc123\u2026"), f(o, "rows", "3"), f(o, "class", "svelte-1kbyai7"), f(s, "class", "btn-filled svelte-1kbyai7"), s.disabled = i = !t[7].trim(), f(e, "class", "card pad svelte-1kbyai7");
          },
          m(A, d) {
            T(A, e, d), a(e, x), a(e, n), a(e, o), e0(o, t[7]), a(e, r), u && u.m(e, null), a(e, l), a(e, s), a(s, c), B || (E = [
              z(o, "input", t[20]),
              z(o, "keydown", t[21]),
              z(s, "click", t[14])
            ], B = true);
          },
          p(A, d) {
            d[0] & 128 && e0(o, A[7]), A[8] ? u ? u.p(A, d) : (u = gn(A), u.c(), u.m(e, l)) : u && (u.d(1), u = null), d[0] & 128 && i !== (i = !A[7].trim()) && (s.disabled = i);
          },
          d(A) {
            A && P(e), u && u.d(), B = false, s0(E);
          }
        };
      }
      function gn(t) {
        let e, x;
        return {
          c() {
            e = F("p"), x = R(t[8]), f(e, "class", "error-text svelte-1kbyai7");
          },
          m(n, o) {
            T(n, e, o), a(e, x);
          },
          p(n, o) {
            o[0] & 256 && G(x, n[8]);
          },
          d(n) {
            n && P(e);
          }
        };
      }
      function nc(t) {
        let e, x, n, o, r, l, s, c;
        e = new G0({});
        function i(h, k) {
          return h[0] === "scanning" || h[0] === "confirm-group" ? H8 : O8;
        }
        let B = i(t), E = B(t);
        function u(h, k) {
          return h[0] === "scanning" ? G8 : h[0] === "confirm" || h[0] === "ongoing?" ? z8 : h[0] === "confirm-group" ? j8 : h[0] === "saved" ? q8 : U8;
        }
        let A = u(t), d = A(t);
        function C(h, k) {
          if (h[0] === "loading") return Z8;
          if (h[0] === "error") return X8;
          if (h[0] === "saved") return W8;
          if (h[0] === "showQR") return J8;
          if (h[0] === "scanning") return Q8;
          if (h[0] === "confirm") return Y8;
          if (h[0] === "ongoing?") return V8;
          if (h[0] === "confirm-group") return K8;
        }
        let D = C(t), m = D && D(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), n = F("main"), o = F("div"), E.c(), r = y(), l = F("h1"), d.c(), s = y(), m && m.c(), f(l, "class", "svelte-1kbyai7"), f(o, "class", "page-header svelte-1kbyai7"), f(n, "class", "svelte-1kbyai7");
          },
          m(h, k) {
            m0(e, h, k), T(h, x, k), T(h, n, k), a(n, o), E.m(o, null), a(o, r), a(o, l), d.m(l, null), a(n, s), m && m.m(n, null), c = true;
          },
          p(h, k) {
            B === (B = i(h)) && E ? E.p(h, k) : (E.d(1), E = B(h), E && (E.c(), E.m(o, r))), A !== (A = u(h)) && (d.d(1), d = A(h), d && (d.c(), d.m(l, null))), D === (D = C(h)) && m ? m.p(h, k) : (m && m.d(1), m = D && D(h), m && (m.c(), m.m(n, null)));
          },
          i(h) {
            c || (f0(e.$$.fragment, h), c = true);
          },
          o(h) {
            d0(e.$$.fragment, h), c = false;
          },
          d(h) {
            h && (P(x), P(n)), h0(e, h), E.d(), d.d(), m && m.d();
          }
        };
      }
      function Bx(t) {
        return 10 + (t[1] * 256 + t[2]) % 90;
      }
      function vn(t) {
        const e = /* @__PURE__ */ new Set([
          t
        ]);
        for (; e.size < 3; ) e.add(10 + Math.floor(Math.random() * 90));
        return [
          ...e
        ].sort((x, n) => x - n);
      }
      function oc(t, e, x) {
        let n = "loading", o = null, r = null, l = "", s = 0, c = "", i = null, B = null, E = null, u = null, A = null, d = false, C = false, D = "", m = null, h = null, k = null, p = 0, _ = [], b = null, g = "", v = null, w = "", I = false;
        O0(async () => {
          if (!H0()) {
            B0("/");
            return;
          }
          try {
            const Q = rs(), $ = ie(), n0 = Math.floor(Date.now() / 1e3);
            r = Q.privateKey, s = Bx(Q.publicKey), l = `1|${W0(Q.publicKey)}|${n0}|${Z($)}`, x(2, c = await ee.toString(l, {
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
        }), Sn(() => {
          S();
        });
        async function M() {
          if (x(5, A = null), d = false, !navigator.mediaDevices?.getUserMedia) {
            x(5, A = "Camera not available. This page must be opened over HTTPS to use the camera."), x(0, n = "showQR");
            return;
          }
          x(0, n = "scanning"), await new Promise((Q) => setTimeout(Q, 50));
          try {
            E = await navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "environment",
                width: {
                  ideal: 1280
                },
                height: {
                  ideal: 720
                }
              }
            }), x(3, i.srcObject = E, i), await i.play(), N();
          } catch (Q) {
            x(5, A = Q.name === "NotAllowedError" ? "Camera permission denied. Please allow camera access and try again." : "Could not access camera: " + Q.message), S(), x(0, n = "showQR");
          }
        }
        function S() {
          u && (cancelAnimationFrame(u), u = null), E && (E.getTracks().forEach((Q) => Q.stop()), E = null), d = false;
        }
        function N() {
          if (!E || !i || i.readyState < 2) {
            u = requestAnimationFrame(N);
            return;
          }
          const Q = i.videoWidth, $ = i.videoHeight;
          if (!Q || !$) {
            u = requestAnimationFrame(N);
            return;
          }
          x(4, B.width = Q, B), x(4, B.height = $, B);
          const n0 = B.getContext("2d");
          n0.drawImage(i, 0, 0, Q, $);
          const a0 = n0.getImageData(0, 0, Q, $), i0 = R8(a0.data, Q, $, {
            inversionAttempts: "dontInvert"
          });
          if (i0 && !d) {
            d = true, O(i0.data);
            return;
          }
          u = requestAnimationFrame(N);
        }
        function L(Q) {
          const $ = Q.trim().split("|"), n0 = parseInt($[0], 10);
          if (!isNaN(n0) && n0 > 1) throw new Error("Your partner has a newer app version. Please update.");
          if ($.length !== 4 || $[0] !== "1") throw new Error("Not a valid encounter QR code.");
          const [, a0, , i0] = $;
          if (!a0 || a0.length < 10) throw new Error("Invalid QR payload");
          if (!i0 || i0.length !== 64) throw new Error("Invalid contact ID in payload");
          return {
            ephemeralPubkeyBytes: Kn(a0),
            contactIdBytes: D0(i0)
          };
        }
        function O(Q) {
          const $ = Q.trim();
          if ($.startsWith("2|")) {
            try {
              const n0 = et($);
              if (!n0) throw new Error("Invalid group QR");
              if (Math.floor(Date.now() / 1e3) - n0.timestamp > 86400) {
                d = false, u = requestAnimationFrame(N);
                return;
              }
              S(), x(11, b = n0), g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group");
            } catch {
              d = false, u = requestAnimationFrame(N);
            }
            return;
          }
          try {
            const { ephemeralPubkeyBytes: n0, contactIdBytes: a0 } = L(Q);
            S(), h = n0, k = a0, x(9, p = Bx(n0)), x(10, _ = vn(s)), x(0, n = "confirm");
          } catch {
            d = false, u = requestAnimationFrame(N);
          }
        }
        function H() {
          x(8, m = null);
          const Q = D.trim();
          try {
            if (Q.startsWith("2|")) {
              const $ = et(Q);
              if (!$) throw new Error("Invalid group QR payload");
              if (Math.floor(Date.now() / 1e3) - $.timestamp > 86400) throw new Error("This QR code has expired (older than 24 hours).");
              x(11, b = $), g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), x(0, n = "confirm-group"), x(6, C = false);
            } else {
              const { ephemeralPubkeyBytes: $, contactIdBytes: n0 } = L(Q);
              h = $, k = n0, x(9, p = Bx($)), x(10, _ = vn(s)), x(0, n = "confirm"), x(6, C = false);
            }
          } catch ($) {
            x(8, m = $.message);
          }
        }
        function j() {
          S(), x(11, b = null), x(0, n = "showQR"), x(6, C = false), x(8, m = null), x(7, D = "");
        }
        async function J(Q) {
          if (Q !== s) {
            x(8, m = "Wrong \u2014 that's not your number. Scan again."), x(0, n = "showQR"), x(6, C = false), x(7, D = ""), h = null, k = null;
            return;
          }
          const $ = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
          v = ss(r, h, $), w = $;
          const i0 = L0()?.encounters || [], V0 = jx(), T0 = Z(k), Y0 = i0.some((S0) => Z(S0.theirContactId) === T0), xe = V0.some((S0) => Z(S0.theirContactId) === T0 && !S0.endedAt);
          Y0 && !xe ? x(0, n = "ongoing?") : await U(false);
        }
        async function U(Q) {
          x(12, I = true);
          try {
            const $ = ie(), n0 = J0(v, $, 0);
            await Jn(Z(n0), w), Q ? await js(v, k, w) : await qs(v, k, w), x(0, n = "saved");
          } catch ($) {
            x(1, o = $.message), x(0, n = "error");
          } finally {
            x(12, I = false);
          }
        }
        async function q() {
          x(12, I = true);
          try {
            const Q = D0(b.groupTokenHex), $ = D0(b.hostContactIdHex);
            await ro(Q, g, false, $, b.name), x(0, n = "saved");
          } catch (Q) {
            x(1, o = Q.message), x(0, n = "error");
          } finally {
            x(12, I = false);
          }
        }
        const K = () => {
          x(6, C = !C), x(8, m = null);
        };
        function x0() {
          D = this.value, x(7, D);
        }
        const t0 = (Q) => Q.key === "Enter" && !Q.shiftKey && (Q.preventDefault(), H());
        function V(Q) {
          He[Q ? "unshift" : "push"](() => {
            i = Q, x(3, i);
          });
        }
        function o0(Q) {
          He[Q ? "unshift" : "push"](() => {
            B = Q, x(4, B);
          });
        }
        return [
          n,
          o,
          c,
          i,
          B,
          A,
          C,
          D,
          m,
          p,
          _,
          b,
          I,
          M,
          H,
          j,
          J,
          U,
          q,
          K,
          x0,
          t0,
          V,
          o0,
          (Q) => J(Q),
          () => U(true),
          () => U(false)
        ];
      }
      class rc extends _0 {
        constructor(e) {
          super(), k0(this, e, oc, nc, p0, {}, null, [
            -1,
            -1
          ]);
        }
      }
      function sc(t) {
        let e, x, n, o, r, l;
        e = new jo({
          props: {
            routes: t[4]
          }
        }), e.$on("routeLoaded", t[7]), n = new As({});
        let s = t[2] && wn(t);
        return {
          c() {
            g0(e.$$.fragment), x = y(), g0(n.$$.fragment), o = y(), s && s.c(), r = P0();
          },
          m(c, i) {
            m0(e, c, i), T(c, x, i), m0(n, c, i), T(c, o, i), s && s.m(c, i), T(c, r, i), l = true;
          },
          p(c, i) {
            c[2] ? s ? s.p(c, i) : (s = wn(c), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null);
          },
          i(c) {
            l || (f0(e.$$.fragment, c), f0(n.$$.fragment, c), l = true);
          },
          o(c) {
            d0(e.$$.fragment, c), d0(n.$$.fragment, c), l = false;
          },
          d(c) {
            c && (P(x), P(o), P(r)), h0(e, c), h0(n, c), s && s.d(c);
          }
        };
      }
      function lc(t) {
        let e;
        return {
          c() {
            e = F("main"), e.textContent = "Loading\u2026", f(e, "class", "loading svelte-of1bod");
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
      function cc(t) {
        let e, x, n, o, r, l;
        return {
          c() {
            e = F("main"), x = F("p"), n = R("Failed to load crypto module: "), o = R(t[1]), r = y(), l = F("p"), l.textContent = "Please try a modern browser (Chrome 90+, Firefox 90+, Safari 15+).", f(e, "class", "error svelte-of1bod");
          },
          m(s, c) {
            T(s, e, c), a(e, x), a(x, n), a(x, o), a(e, r), a(e, l);
          },
          p(s, c) {
            c & 2 && G(o, s[1]);
          },
          i: X,
          o: X,
          d(s) {
            s && P(e);
          }
        };
      }
      function wn(t) {
        let e, x, n, o, r, l, s, c = Math.floor(t[3] / 60) + "", i, B, E = String(t[3] % 60).padStart(2, "0") + "", u, A, d, C, D, m, h, k, p;
        return {
          c() {
            e = F("div"), x = F("div"), n = F("h2"), n.textContent = "Session expiring", o = y(), r = F("p"), l = R(`You'll be logged out in
          `), s = F("strong"), i = R(c), B = R(":"), u = R(E), A = R(`
          due to inactivity.`), d = y(), C = F("div"), D = F("button"), D.textContent = "Stay logged in", m = y(), h = F("button"), h.textContent = "Log out now", f(n, "id", "idle-title"), f(n, "class", "svelte-of1bod"), f(r, "class", "svelte-of1bod"), f(D, "class", "btn-primary svelte-of1bod"), f(h, "class", "btn-ghost svelte-of1bod"), f(C, "class", "idle-actions svelte-of1bod"), f(x, "class", "idle-dialog svelte-of1bod"), f(e, "class", "idle-overlay svelte-of1bod"), f(e, "role", "dialog"), f(e, "aria-modal", "true"), f(e, "aria-labelledby", "idle-title");
          },
          m(_, b) {
            T(_, e, b), a(e, x), a(x, n), a(x, o), a(x, r), a(r, l), a(r, s), a(s, i), a(s, B), a(s, u), a(r, A), a(x, d), a(x, C), a(C, D), a(C, m), a(C, h), k || (p = [
              z(D, "click", t[5]),
              z(h, "click", t[6])
            ], k = true);
          },
          p(_, b) {
            b & 8 && c !== (c = Math.floor(_[3] / 60) + "") && G(i, c), b & 8 && E !== (E = String(_[3] % 60).padStart(2, "0") + "") && G(u, E);
          },
          d(_) {
            _ && P(e), k = false, s0(p);
          }
        };
      }
      function ac(t) {
        let e, x, n, o;
        const r = [
          cc,
          lc,
          sc
        ], l = [];
        function s(c, i) {
          return c[1] ? 0 : c[0] ? 2 : 1;
        }
        return e = s(t), x = l[e] = r[e](t), {
          c() {
            x.c(), n = P0();
          },
          m(c, i) {
            l[e].m(c, i), T(c, n, i), o = true;
          },
          p(c, [i]) {
            let B = e;
            e = s(c), e === B ? l[e].p(c, i) : (Je(), d0(l[B], 1, 1, () => {
              l[B] = null;
            }), We(), x = l[e], x ? x.p(c, i) : (x = l[e] = r[e](c), x.c()), f0(x, 1), x.m(n.parentNode, n));
          },
          i(c) {
            o || (f0(x), o = true);
          },
          o(c) {
            d0(x), o = false;
          },
          d(c) {
            c && P(n), l[e].d(c);
          }
        };
      }
      const yn = 120;
      function ic(t, e, x) {
        const n = {
          "/": cl,
          "/signup": El,
          "/home": Cl,
          "/encounter-exchange": rc,
          "/encounters": bl,
          "/relationships/:rawTokenHex": Hl,
          "/groups/:tokenHex": f8,
          "/results": $l,
          "/change-password": t9,
          "/alerts": f9,
          "/settings": L8
        };
        let o = false, r = null, l = false, s = yn, c = null;
        function i() {
          x(3, s = yn), clearInterval(c), c = setInterval(() => {
            x(3, s -= 1), s <= 0 && clearInterval(c);
          }, 1e3);
        }
        function B() {
          x(2, l = false), clearInterval(c), Ns();
        }
        async function E() {
          x(2, l = false), clearInterval(c), mx(), await Qn(), B0("/");
        }
        function u(A) {
          const d = A.detail.location;
          !(d === "/" || d.startsWith("/signup")) && H0() ? Ls({
            onWarnCallback: () => {
              x(2, l = true), i();
            },
            onExpiredCallback: E
          }) : (mx(), x(2, l = false), clearInterval(c));
        }
        return O0(async () => {
          try {
            await os(), x(0, o = true);
          } catch (A) {
            x(1, r = A.message);
          }
        }), [
          o,
          r,
          l,
          s,
          n,
          B,
          E,
          u
        ];
      }
      class Ec extends _0 {
        constructor(e) {
          super(), k0(this, e, ic, ac, p0, {});
        }
      }
      new Ec({
        target: document.getElementById("app")
      });
    })();
  }
});
export default require_stdin();
