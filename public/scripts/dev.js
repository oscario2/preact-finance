(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, r3, o3, f3 = {};
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (o3 in l3.defaultProps)
        f3[o3] === void 0 && (f3[o3] = l3.defaultProps[o3]);
    return y(l3, f3, t3, r3, null);
  }
  function y(n2, i3, t3, r3, o3) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o3 == null ? ++u : o3 };
    return o3 == null && l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, r3, o3;
        n3.__d && (r3 = (t3 = (l3 = n3).__v).__e, (o3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i3, l3.__n, o3.ownerSVGElement !== void 0, t3.__h != null ? [r3] : null, u3, r3 == null ? k(t3) : r3, t3.__h), z(u3, t3), t3.__e != r3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, r3, o3, f3, s3, a3) {
    var h3, v3, p3, _3, b3, m3, g4, w4 = i3 && i3.__k || c, A4 = w4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if ((_3 = u3.__k[h3] = (_3 = l3[h3]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u3, _3.__b = u3.__b + 1, (p3 = w4[h3]) === null || p3 && _3.key == p3.key && _3.type === p3.type)
          w4[h3] = void 0;
        else
          for (v3 = 0; v3 < A4; v3++) {
            if ((p3 = w4[v3]) && _3.key == p3.key && _3.type === p3.type) {
              w4[v3] = void 0;
              break;
            }
            p3 = null;
          }
        j(n2, _3, p3 = p3 || e, t3, r3, o3, f3, s3, a3), b3 = _3.__e, (v3 = _3.ref) && p3.ref != v3 && (g4 || (g4 = []), p3.ref && g4.push(p3.ref, null, _3), g4.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k === p3.__k ? _3.__d = s3 = x(_3, s3, n2) : s3 = P(n2, _3, p3, w4, b3, s3), typeof u3.type == "function" && (u3.__d = s3)) : s3 && p3.__e == s3 && s3.parentNode != n2 && (s3 = k(p3));
      }
    for (u3.__e = m3, h3 = A4; h3--; )
      w4[h3] != null && (typeof u3.type == "function" && w4[h3].__e != null && w4[h3].__e == u3.__d && (u3.__d = k(i3, h3 + 1)), N(w4[h3], w4[h3]));
    if (g4)
      for (h3 = 0; h3 < g4.length; h3++)
        M(g4[h3], g4[++h3], g4[++h3]);
  }
  function x(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = typeof i3.type == "function" ? x(i3, l3, u3) : P(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3) {
    return l3 = l3 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      A(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function P(n2, l3, u3, i3, t3, r3) {
    var o3, f3, e3;
    if (l3.__d !== void 0)
      o3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != r3 || t3.parentNode == null)
      n:
        if (r3 == null || r3.parentNode !== n2)
          n2.appendChild(t3), o3 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o3 = r3;
        }
    return o3 !== void 0 ? o3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      r3 === "children" || r3 === "key" || r3 in l3 || H(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && typeof l3[r3] != "function" || r3 === "children" || r3 === "key" || r3 === "value" || r3 === "checked" || u3[r3] === l3[r3] || H(n2, r3, l3[r3], u3[r3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? T : I, r3) : n2.removeEventListener(l3, r3 ? T : I, r3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, r3, o3, f3, e3, c3) {
    var s3, h3, v3, y3, p3, k3, b3, m3, g4, x3, A4, P3 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o3 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if (typeof P3 == "function") {
          if (m3 = u3.props, g4 = (s3 = P3.contextType) && t3[s3.__c], x3 = s3 ? g4 ? g4.props.value : s3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in P3 && P3.prototype.render ? u3.__c = h3 = new P3(m3, x3) : (u3.__c = h3 = new _(m3, x3), h3.constructor = P3, h3.render = O), g4 && g4.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = x3, h3.__n = t3, v3 = h3.__d = true, h3.__h = []), h3.__s == null && (h3.__s = h3.state), P3.getDerivedStateFromProps != null && (h3.__s == h3.state && (h3.__s = a({}, h3.__s)), a(h3.__s, P3.getDerivedStateFromProps(m3, h3.__s))), y3 = h3.props, p3 = h3.state, v3)
            P3.getDerivedStateFromProps == null && h3.componentWillMount != null && h3.componentWillMount(), h3.componentDidMount != null && h3.__h.push(h3.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && m3 !== y3 && h3.componentWillReceiveProps != null && h3.componentWillReceiveProps(m3, x3), !h3.__e && h3.shouldComponentUpdate != null && h3.shouldComponentUpdate(m3, h3.__s, x3) === false || u3.__v === i3.__v) {
              h3.props = m3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            h3.componentWillUpdate != null && h3.componentWillUpdate(m3, h3.__s, x3), h3.componentDidUpdate != null && h3.__h.push(function() {
              h3.componentDidUpdate(y3, p3, k3);
            });
          }
          h3.context = x3, h3.props = m3, h3.state = h3.__s, (s3 = l.__r) && s3(u3), h3.__d = false, h3.__v = u3, h3.__P = n2, s3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s, h3.getChildContext != null && (t3 = a(a({}, t3), h3.getChildContext())), v3 || h3.getSnapshotBeforeUpdate == null || (k3 = h3.getSnapshotBeforeUpdate(y3, p3)), A4 = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A4) ? A4 : [A4], u3, i3, t3, r3, o3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          o3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, r3, o3, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || o3 != null) && (u3.__e = e3, u3.__h = !!c3, o3[o3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, r3, o3, f3, c3) {
    var s3, a3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, _3 = 0;
    if (d3 === "svg" && (r3 = true), o3 != null) {
      for (; _3 < o3.length; _3++)
        if ((s3 = o3[_3]) && (s3 === l3 || (d3 ? s3.localName == d3 : s3.nodeType == 3))) {
          l3 = s3, o3[_3] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d3 === null)
        return document.createTextNode(p3);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), o3 = null, c3 = false;
    }
    if (d3 === null)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (o3 = o3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (o3 != null)
          for (y3 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y3[l3.attributes[_3].name] = l3.attributes[_3].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, r3, c3), v3)
        u3.__k = [];
      else if (_3 = u3.props.children, w(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && d3 !== "foreignObject", o3, f3, o3 ? o3[0] : i3.__k && k(i3, 0), c3), o3 != null)
        for (_3 = o3.length; _3--; )
          o3[_3] != null && h(o3[_3]);
      c3 || ("value" in p3 && (_3 = p3.value) !== void 0 && (_3 !== l3.value || d3 === "progress" && !_3) && H(l3, "value", _3, y3.value, false), "checked" in p3 && (_3 = p3.checked) !== void 0 && _3 !== l3.checked && H(l3, "checked", _3, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && N(t3[r3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var r3, o3, f3;
    l.__ && l.__(u3, i3), o3 = (r3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!r3 && t3 || i3).__k = v(d, null, [u3]), o3 || e, e, i3.ownerSVGElement !== void 0, !r3 && t3 ? [t3] : o3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o3 ? o3.__e : i3.firstChild, r3), z(f3, u3);
  }
  function B(l3, u3, i3) {
    var t3, r3, o3, f3 = a({}, l3.props);
    for (o3 in u3)
      o3 == "key" ? t3 = u3[o3] : o3 == "ref" ? r3 = u3[o3] : f3[o3] = u3[o3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), y(l3.type, f3, t3 || l3.key, r3 || l3.ref, null);
  }
  function D(n2, l3) {
    var u3 = { __c: l3 = "__cC" + f++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(m);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = c.slice, l = { __e: function(n2, l3) {
    for (var u3, i3, t3; l3 = l3.__; )
      if ((u3 = l3.__c) && !u3.__)
        try {
          if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
            return u3.__E = u3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l3) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/preact-router/dist/preact-router.es.js
  var EMPTY$1 = {};
  function assign(obj, props) {
    for (var i3 in props) {
      obj[i3] = props[i3];
    }
    return obj;
  }
  function exec(url, route2, opts) {
    var reg = /(?:\?([^#]*))?(#.*)?$/, c3 = url.match(reg), matches = {}, ret;
    if (c3 && c3[1]) {
      var p3 = c3[1].split("&");
      for (var i3 = 0; i3 < p3.length; i3++) {
        var r3 = p3[i3].split("=");
        matches[decodeURIComponent(r3[0])] = decodeURIComponent(r3.slice(1).join("="));
      }
    }
    url = segmentize(url.replace(reg, ""));
    route2 = segmentize(route2 || "");
    var max = Math.max(url.length, route2.length);
    for (var i$1 = 0; i$1 < max; i$1++) {
      if (route2[i$1] && route2[i$1].charAt(0) === ":") {
        var param = route2[i$1].replace(/(^:|[+*?]+$)/g, ""), flags = (route2[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || "", plus = ~flags.indexOf("+"), star = ~flags.indexOf("*"), val = url[i$1] || "";
        if (!val && !star && (flags.indexOf("?") < 0 || plus)) {
          ret = false;
          break;
        }
        matches[param] = decodeURIComponent(val);
        if (plus || star) {
          matches[param] = url.slice(i$1).map(decodeURIComponent).join("/");
          break;
        }
      } else if (route2[i$1] !== url[i$1]) {
        ret = false;
        break;
      }
    }
    if (opts.default !== true && ret === false) {
      return false;
    }
    return matches;
  }
  function pathRankSort(a3, b3) {
    return a3.rank < b3.rank ? 1 : a3.rank > b3.rank ? -1 : a3.index - b3.index;
  }
  function prepareVNodeForRanking(vnode, index) {
    vnode.index = index;
    vnode.rank = rankChild(vnode);
    return vnode.props;
  }
  function segmentize(url) {
    return url.replace(/(^\/+|\/+$)/g, "").split("/");
  }
  function rankSegment(segment) {
    return segment.charAt(0) == ":" ? 1 + "*+?".indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
  }
  function rank(path) {
    return segmentize(path).map(rankSegment).join("");
  }
  function rankChild(vnode) {
    return vnode.props.default ? 0 : rank(vnode.props.path);
  }
  var customHistory = null;
  var ROUTERS = [];
  var subscribers = [];
  var EMPTY = {};
  function setUrl(url, type) {
    if (type === void 0)
      type = "push";
    if (customHistory && customHistory[type]) {
      customHistory[type](url);
    } else if (typeof history !== "undefined" && history[type + "State"]) {
      history[type + "State"](null, null, url);
    }
  }
  function getCurrentUrl() {
    var url;
    if (customHistory && customHistory.location) {
      url = customHistory.location;
    } else if (customHistory && customHistory.getCurrentLocation) {
      url = customHistory.getCurrentLocation();
    } else {
      url = typeof location !== "undefined" ? location : EMPTY;
    }
    return "" + (url.pathname || "") + (url.search || "");
  }
  function route(url, replace) {
    if (replace === void 0)
      replace = false;
    if (typeof url !== "string" && url.url) {
      replace = url.replace;
      url = url.url;
    }
    if (canRoute(url)) {
      setUrl(url, replace ? "replace" : "push");
    }
    return routeTo(url);
  }
  function canRoute(url) {
    for (var i3 = ROUTERS.length; i3--; ) {
      if (ROUTERS[i3].canRoute(url)) {
        return true;
      }
    }
    return false;
  }
  function routeTo(url) {
    var didRoute = false;
    for (var i3 = 0; i3 < ROUTERS.length; i3++) {
      if (ROUTERS[i3].routeTo(url) === true) {
        didRoute = true;
      }
    }
    for (var i$1 = subscribers.length; i$1--; ) {
      subscribers[i$1](url);
    }
    return didRoute;
  }
  function routeFromLink(node) {
    if (!node || !node.getAttribute) {
      return;
    }
    var href = node.getAttribute("href"), target = node.getAttribute("target");
    if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
      return;
    }
    return route(href);
  }
  function handleLinkClick(e3) {
    if (e3.ctrlKey || e3.metaKey || e3.altKey || e3.shiftKey || e3.button !== 0) {
      return;
    }
    routeFromLink(e3.currentTarget || e3.target || this);
    return prevent(e3);
  }
  function prevent(e3) {
    if (e3) {
      if (e3.stopImmediatePropagation) {
        e3.stopImmediatePropagation();
      }
      if (e3.stopPropagation) {
        e3.stopPropagation();
      }
      e3.preventDefault();
    }
    return false;
  }
  function delegateLinkHandler(e3) {
    if (e3.ctrlKey || e3.metaKey || e3.altKey || e3.shiftKey || e3.button !== 0) {
      return;
    }
    var t3 = e3.target;
    do {
      if (String(t3.nodeName).toUpperCase() === "A" && t3.getAttribute("href")) {
        if (t3.hasAttribute("native")) {
          return;
        }
        if (routeFromLink(t3)) {
          return prevent(e3);
        }
      }
    } while (t3 = t3.parentNode);
  }
  var eventListenersInitialized = false;
  function initEventListeners() {
    if (eventListenersInitialized) {
      return;
    }
    if (typeof addEventListener === "function") {
      if (!customHistory) {
        addEventListener("popstate", function() {
          routeTo(getCurrentUrl());
        });
      }
      addEventListener("click", delegateLinkHandler);
    }
    eventListenersInitialized = true;
  }
  var Router = function(Component$$1) {
    function Router2(props) {
      Component$$1.call(this, props);
      if (props.history) {
        customHistory = props.history;
      }
      this.state = {
        url: props.url || getCurrentUrl()
      };
      initEventListeners();
    }
    if (Component$$1)
      Router2.__proto__ = Component$$1;
    Router2.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Router2.prototype.constructor = Router2;
    Router2.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
      if (props.static !== true) {
        return true;
      }
      return props.url !== this.props.url || props.onChange !== this.props.onChange;
    };
    Router2.prototype.canRoute = function canRoute2(url) {
      var children = A(this.props.children);
      return this.getMatchingChildren(children, url, false).length > 0;
    };
    Router2.prototype.routeTo = function routeTo2(url) {
      this.setState({ url });
      var didRoute = this.canRoute(url);
      if (!this.updating) {
        this.forceUpdate();
      }
      return didRoute;
    };
    Router2.prototype.componentWillMount = function componentWillMount() {
      ROUTERS.push(this);
      this.updating = true;
    };
    Router2.prototype.componentDidMount = function componentDidMount() {
      var this$1 = this;
      if (customHistory) {
        this.unlisten = customHistory.listen(function(location2) {
          this$1.routeTo("" + (location2.pathname || "") + (location2.search || ""));
        });
      }
      this.updating = false;
    };
    Router2.prototype.componentWillUnmount = function componentWillUnmount() {
      if (typeof this.unlisten === "function") {
        this.unlisten();
      }
      ROUTERS.splice(ROUTERS.indexOf(this), 1);
    };
    Router2.prototype.componentWillUpdate = function componentWillUpdate() {
      this.updating = true;
    };
    Router2.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updating = false;
    };
    Router2.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
      return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function(vnode) {
        var matches = exec(url, vnode.props.path, vnode.props);
        if (matches) {
          if (invoke !== false) {
            var newProps = { url, matches };
            assign(newProps, matches);
            delete newProps.ref;
            delete newProps.key;
            return B(vnode, newProps);
          }
          return vnode;
        }
      }).filter(Boolean);
    };
    Router2.prototype.render = function render(ref, ref$1) {
      var children = ref.children;
      var onChange = ref.onChange;
      var url = ref$1.url;
      var active = this.getMatchingChildren(A(children), url, true);
      var current = active[0] || null;
      var previous = this.previousUrl;
      if (url !== previous) {
        this.previousUrl = url;
        if (typeof onChange === "function") {
          onChange({
            router: this,
            url,
            previous,
            active,
            current
          });
        }
      }
      return current;
    };
    return Router2;
  }(_);
  var Link = function(props) {
    return v("a", assign({ onClick: handleLinkClick }, props));
  };
  var Route = function(props) {
    return v(props.component, props);
  };
  Router.subscribers = subscribers;
  Router.getCurrentUrl = getCurrentUrl;
  Router.route = route;
  Router.Router = Router;
  Router.Route = Route;
  Router.Link = Link;
  Router.exec = exec;
  var preact_router_es_default = Router;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function s2(n2) {
    return o2 = 5, A2(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, u3) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u3) && (r3.__ = n2(), r3.__H = u3, r3.__h = n2), r3.__;
  }
  function T2(n2) {
    var r3 = u2.context[n2.__c], o3 = m2(t2++, 9);
    return o3.c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  l.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u3 = function() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = null;
  }, l.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], l.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u3 = t3.__c;
    if (u3 && u3.__H)
      try {
        u3.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u3.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }

  // src/utils/canvas.utils.ts
  var lineY = (n2) => {
    return Math.round(n2) + 0.5;
  };
  var getCanvasContext = (ref) => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    return { canvas, ctx };
  };
  var getCanvasPos = (canvas, e3) => {
    const r3 = canvas.getBoundingClientRect();
    const x3 = e3.clientX - r3.left;
    const y3 = e3.clientY - r3.top;
    return { x: x3, y: y3 };
  };

  // src/utils/math.utils.ts
  var lerp = (x3, y3, a3) => x3 * (1 - a3) + y3 * a3;
  var invlerp = (x3, y3, a3) => clamp((a3 - x3) / (y3 - x3));
  var clamp = (a3, min = 0, max = 1) => Math.min(max, Math.max(min, a3));
  var range = (x1, y1, x22, y22, v3) => lerp(x22, y22, invlerp(x1, y1, v3));

  // src/utils/data.utils.ts
  var getMinMaxMarket = (items) => {
    let minX = items[0];
    let maxX = items[0];
    let minY = items[0];
    let maxY = items[0];
    for (const item of items) {
      if (maxX.openTime < item.openTime)
        maxX = item;
      if (minX.openTime > item.openTime)
        minX = item;
      if (maxY.spark.close < item.spark.close)
        maxY = item;
      if (minY.spark.close > item.spark.close)
        minY = item;
    }
    return { minX, maxX, minY, maxY };
  };
  var getIplMarket = (height, width, items) => {
    const { minX, maxX, minY, maxY } = getMinMaxMarket(items);
    const padX = 0;
    const padY = 0;
    const ipl = items.map((item) => {
      const fit = { ...item };
      fit.spark = { ...item.spark };
      const x3 = range(minX.openTime, maxX.openTime, padX, width - padX, item.openTime);
      fit.openTime = lineY(x3);
      Object.keys(fit.spark).forEach((spark) => {
        const key = spark;
        const y3 = range(minY.spark.low, maxY.spark.high, padY, height - padY, item.spark[key]);
        fit.spark[key] = lineY(height - y3);
      });
      return fit;
    });
    return { ipl, minX, maxX, minY, maxY };
  };
  var getHoverMarket = (moveX, ipl, items) => {
    let iplHover = ipl[0];
    let itemHover = items[0];
    for (let i3 = 0; i3 < ipl.length; i3++) {
      const distanceA = Math.abs(moveX - ipl[i3].openTime);
      const distanceB = Math.abs(moveX - iplHover.openTime);
      if (distanceA < distanceB) {
        iplHover = ipl[i3];
        itemHover = items[i3];
      }
    }
    return { iplHover, itemHover };
  };
  var getMinMaxOrderBook = (items) => {
    let minX = items[0];
    let maxX = items[0];
    let minY = items[0];
    let maxY = items[0];
    for (const item of items) {
      if (maxX.totalVolume < item.totalVolume)
        maxX = item;
      if (minX.totalVolume > item.totalVolume)
        minX = item;
      if (maxY.totalPercent < item.totalPercent)
        maxY = item;
      if (minY.totalPercent > item.totalPercent)
        minY = item;
    }
    return { minX, maxX, minY, maxY };
  };
  var getIplOrderBook = (height, width, items) => {
    const { minX, maxX, minY, maxY } = getMinMaxOrderBook(items);
    const ipl = items.map((item) => {
      const fit = { ...item };
      const x3 = range(minX.totalVolume, maxX.totalVolume, 0, width, item.totalVolume);
      fit.totalVolume = lineY(x3);
      const y3 = range(minY.totalPercent, maxY.totalPercent, 0, height, item.totalPercent);
      fit.totalPercent = lineY(y3);
      return fit;
    });
    return { ipl, minX, maxX, minY, maxY };
  };
  var getHoverOrderBook = (moveY, ipl, items) => {
    let iplHover = ipl[0];
    let itemHover = items[0];
    for (let i3 = 0; i3 < ipl.length; i3++) {
      const distanceA = Math.abs(moveY - ipl[i3].totalPercent);
      const distanceB = Math.abs(moveY - iplHover.totalPercent);
      if (distanceA < distanceB) {
        iplHover = ipl[i3];
        itemHover = items[i3];
      }
    }
    return { iplHover, itemHover };
  };

  // src/utils/number.utils.ts
  var getNDigits = (input, digits = 4) => {
    const base = input.toString().split(".")[0];
    const round = input.toFixed(digits - base.length);
    return round;
  };
  var getDenoted = (n2) => {
    if (n2 < 1e3)
      return n2;
    if (n2 >= 1e3 && n2 < 1e6)
      return +(n2 / 1e3).toFixed(1) + "K";
    if (n2 >= 1e6 && n2 < 1e9)
      return +(n2 / 1e6).toFixed(1) + "M";
    if (n2 >= 1e9 && n2 < 1e12)
      return +(n2 / 1e9).toFixed(1) + "B";
  };

  // src/components/MarketBox/MarketBox.types.ts
  var EMarketTrend;
  (function(EMarketTrend2) {
    EMarketTrend2["Long"] = "long";
    EMarketTrend2["Short"] = "short";
  })(EMarketTrend || (EMarketTrend = {}));

  // src/components/MarketBox/MarketBox.utils.ts
  var getPrice = (price, digits = 6) => {
    return getNDigits(price, digits);
  };
  var getTrend = (first, last) => {
    const change = (last.close - first.close) / first.close * 100;
    const trend = change > 0 ? EMarketTrend.Long : EMarketTrend.Short;
    const percent = `${change > 0 ? "+" : "-"}${Math.abs(change).toFixed(2)}%`;
    return { percent, trend };
  };
  var getVolume = (items) => {
    let volume = 0;
    for (let i3 = 0; i3 < items.length; i3++) {
      volume += items[i3].volume;
    }
    return volume;
  };
  var getMarketInfo = (items) => {
    const { minX, maxX } = getMinMaxMarket(items);
    const price = getPrice(maxX.spark.close);
    const volume = getDenoted(getVolume(items));
    const { percent, trend } = getTrend(minX.spark, maxX.spark);
    const color = `var(--clr-${trend})`;
    return { price, volume, percent, trend, color };
  };

  // src/components/MarketBox/MarketBox.tsx
  var getSvg = (width, height, items) => {
    const { ipl } = getIplMarket(height, width, items);
    return ipl.map((item) => {
      const {
        openTime: x3,
        spark: { close: y3 }
      } = item;
      return x3 + "," + y3;
    }).join(" ");
  };
  var MarketBox = ({ state }) => {
    const { key, name, rank: rank2, items } = state;
    const width = 500;
    const height = 100;
    const viewBox = `0 0 ${width} ${height}`;
    const svg = getSvg(width, height, items);
    const { price, volume, trend, percent, color } = getMarketInfo(items);
    return /* @__PURE__ */ v("div", {
      className: `market-box market-box--${trend}`
    }, /* @__PURE__ */ v("div", {
      className: "market-box__title"
    }, /* @__PURE__ */ v("span", {
      className: "title--token"
    }, name, " (", key, ")"), /* @__PURE__ */ v("span", {
      className: "title--rank",
      style: { color }
    }, "#", rank2)), /* @__PURE__ */ v("div", {
      className: "market-box__price"
    }, /* @__PURE__ */ v("span", {
      className: "price--text"
    }, price), /* @__PURE__ */ v("span", {
      className: "price--change",
      style: { color }
    }, percent)), /* @__PURE__ */ v("div", {
      className: "market-box__volume"
    }, /* @__PURE__ */ v("span", {
      className: "clr-text-weak"
    }, "Volume"), /* @__PURE__ */ v("span", {
      className: "volume--percent"
    }, volume)), /* @__PURE__ */ v("svg", {
      className: "market-box__svg",
      viewBox,
      style: { width: "100%" }
    }, /* @__PURE__ */ v("polyline", {
      fill: "none",
      stroke: color,
      strokeLinejoin: "round",
      "stroke-width": "2",
      points: svg
    })));
  };

  // node_modules/preact/compat/dist/compat.module.js
  function S2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if (e3 !== "__source" && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if (r3 !== "__source" && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  function g3(n2, t3) {
    function e3(n3) {
      var e4 = this.props.ref, r4 = e4 == n3.ref;
      return !r4 && e4 && (e4.call ? e4(null) : e4.current = null), t3 ? !t3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function r3(t4) {
      return this.shouldComponentUpdate = e3, v(n2, t4);
    }
    return r3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r3.prototype.isReactComponent = true, r3.__f = true, r3;
  }
  (E.prototype = new _()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var w3 = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
  };
  var R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var A3 = l.__e;
  l.__e = function(n2, t3, e3) {
    if (n2.then) {
      for (var r3, u3 = t3; u3 = u3.__; )
        if ((r3 = u3.__c) && r3.__c)
          return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), r3.__c(n2, t3);
    }
    A3(n2, t3, e3);
  };
  var O2 = l.unmount;
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__e && t3.__e(n2);
  }
  function M2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O2 && O2(n2);
  }, (L2.prototype = new _()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    r3.t == null && (r3.t = []), r3.t.push(e3);
    var u3 = U(r3.__v), o3 = false, i3 = function() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
    };
    e3.__R = i3;
    var l3 = function() {
      if (!--r3.__u) {
        if (r3.state.__e) {
          var n3 = r3.state.__e;
          r3.__v.__k[0] = function n4(t5, e4, r4) {
            return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
              return n4(t6, e4, r4);
            }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
          }(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __e: r3.__b = null }); t4 = r3.t.pop(); )
          t4.forceUpdate();
      }
    }, c3 = t3.__h === true;
    r3.__u++ || c3 || r3.setState({ __e: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
  }, L2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L2.prototype.render = function(n2, t3) {
    if (this.__b) {
      if (this.__v.__k) {
        var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
        this.__v.__k[0] = function n3(t4, e4, r4) {
          return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
            typeof n4.__c == "function" && n4.__c();
          }), t4.__c.__H = null), (t4 = S2({}, t4)).__c != null && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n3(t5, e4, r4);
          })), t4;
        }(this.__b, e3, r3.__O = r3.__P);
      }
      this.__b = null;
    }
    var u3 = t3.__e && v(d, null, n2.fallback);
    return u3 && (u3.__h = null), [v(d, null, t3.__e ? null : n2.children), u3];
  };
  var T3 = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  (M2.prototype = new _()).__e = function(n2) {
    var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function() {
        t3.props.revealOrder ? (r3.push(u3), T3(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, M2.prototype.render = function(n2) {
    this.u = null, this.o = new Map();
    var t3 = A(n2.children);
    n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      T3(n2, e3, t3);
    });
  };
  var j3 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
  var P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var V = typeof document != "undefined";
  var z2 = function(n2) {
    return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
    Object.defineProperty(_.prototype, n2, { configurable: true, get: function() {
      return this["UNSAFE_" + n2];
    }, set: function(t3) {
      Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
    } });
  });
  var Z = l.event;
  function Y() {
  }
  function $2() {
    return this.cancelBubble;
  }
  function q2() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return Z && (n2 = Z(n2)), n2.persist = Y, n2.isPropagationStopped = $2, n2.isDefaultPrevented = q2, n2.nativeEvent = n2;
  };
  var G;
  var J = { configurable: true, get: function() {
    return this.class;
  } };
  var K = l.vnode;
  l.vnode = function(n2) {
    var t3 = n2.type, e3 = n2.props, r3 = e3;
    if (typeof t3 == "string") {
      var u3 = t3.indexOf("-") === -1;
      for (var o3 in r3 = {}, e3) {
        var i3 = e3[o3];
        V && o3 === "children" && t3 === "noscript" || o3 === "value" && "defaultValue" in e3 && i3 == null || (o3 === "defaultValue" && "value" in e3 && e3.value == null ? o3 = "value" : o3 === "download" && i3 === true ? i3 = "" : /ondoubleclick/i.test(o3) ? o3 = "ondblclick" : /^onchange(textarea|input)/i.test(o3 + t3) && !z2(e3.type) ? o3 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o3) ? o3 = o3.toLowerCase() : u3 && P2.test(o3) ? o3 = o3.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i3 === null && (i3 = void 0), r3[o3] = i3);
      }
      t3 == "select" && r3.multiple && Array.isArray(r3.value) && (r3.value = A(e3.children).forEach(function(n3) {
        n3.props.selected = r3.value.indexOf(n3.props.value) != -1;
      })), t3 == "select" && r3.defaultValue != null && (r3.value = A(e3.children).forEach(function(n3) {
        n3.props.selected = r3.multiple ? r3.defaultValue.indexOf(n3.props.value) != -1 : r3.defaultValue == n3.props.value;
      })), n2.props = r3;
    }
    t3 && e3.class != e3.className && (J.enumerable = "className" in e3, e3.className != null && (r3.class = e3.className), Object.defineProperty(r3, "className", J)), n2.$$typeof = j3, K && K(n2);
  };
  var Q = l.__r;
  l.__r = function(n2) {
    Q && Q(n2), G = n2.__c;
  };

  // src/components/Canvas/Canvas.tsx
  var Canvas = g3(({ id, canvasRef, height, width, events }) => {
    y2(() => {
      const { ctx } = getCanvasContext(canvasRef);
      console.log("[canvas]: mounted", id);
      ctx.translate(0.5, 0.5);
      ctx.translate(-0.5, -0.5);
      if (events?.onLoad)
        events.onLoad();
    });
    return /* @__PURE__ */ v("canvas", {
      id,
      tabIndex: 0,
      height,
      width,
      ref: canvasRef,
      ...events
    });
  }, (prev, next) => {
    return true;
  });

  // src/components/MarketGraph/analytics/onDrawMinMax.ts
  var onDrawMinMax = (ref, min, max, ipl) => {
    const { canvas, ctx } = getCanvasContext(ref);
    [min, max].forEach((item, i3) => {
      const isMax = i3 > 0;
      const fit = ipl[item.index];
      const price = isMax ? item.spark.high : item.spark.low;
      const priceStr = Math.round(price).toString();
      const { width: textWidth } = ctx.measureText(priceStr);
      const padX = 5;
      const padY = canvas.height * 0.1;
      let x3 = fit.openTime;
      x3 = clamp(x3, padX, canvas.width - textWidth - padX);
      let y3 = fit.spark.close;
      y3 = clamp(isMax ? y3 + padY : y3 - padY, 5, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.font = "12px Hack, monospace";
      ctx.fillText(Math.round(price).toString(), x3, y3);
    });
  };

  // src/utils/color.utils.ts
  var colorMap = {};
  var getCssColor = (name) => {
    if (colorMap[name])
      return colorMap[name];
    colorMap[name] = window.getComputedStyle(document.body).getPropertyValue(name);
    return colorMap[name];
  };

  // src/components/MarketGraph/analytics/onDrawTrendBox.ts
  var onDrawTrendBox = (ref, state, moveX, moveY) => {
    const { ctx } = getCanvasContext(ref);
    const clrLongRGBA20 = getCssColor("--clr-rgba-long-20");
    const clrShortRGBA20 = getCssColor("--clr-rgba-short-20");
    const drawCircle = (x3, y3) => {
      ctx.beginPath();
      ctx.strokeStyle = "#cecece";
      ctx.arc(x3, y3, 3, 0, 2 * Math.PI);
      ctx.stroke();
    };
    const { drawActive, drawHistory } = state;
    for (const box of [drawActive, ...drawHistory]) {
      if (box.hidden || !box.start)
        continue;
      const { active, start, end } = box;
      const [x0, y0] = [lineY(start.x), lineY(start.y)];
      const [x1, y1] = [lineY(end.x), lineY(end.y)];
      drawCircle(x0, y0);
      drawCircle(x1, y1);
      if (active) {
        const [w4, h3] = [moveX - x0, moveY - y0];
        ctx.fillStyle = h3 < 0 ? clrLongRGBA20 : clrShortRGBA20;
        ctx.fillRect(x0, y0, w4, h3);
      } else if (!active) {
        const [w4, h3] = [x0 - x1, y0 - y1];
        ctx.fillStyle = h3 > 0 ? clrLongRGBA20 : clrShortRGBA20;
        ctx.fillRect(x1, y1, w4, h3);
      }
    }
  };

  // src/components/MarketGraph/info/onDrawCross.ts
  var onDrawCross = (ref, iplHover, moveY) => {
    if (moveY == 0)
      return;
    const { canvas, ctx } = getCanvasContext(ref);
    const { height, width } = canvas;
    const clrTextBg40 = getCssColor("--clr-text-bg-40");
    const x3 = iplHover.openTime;
    const y3 = lineY(moveY);
    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.lineTo(x3, lineY(height));
    ctx.moveTo(x3, y3);
    ctx.lineTo(0, y3);
    ctx.moveTo(x3, y3);
    ctx.lineTo(x3, 0);
    ctx.moveTo(x3, y3);
    ctx.lineTo(width, y3);
    ctx.strokeStyle = clrTextBg40;
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  // src/components/MarketGraph/info/onDrawGrid.ts
  var onDrawGrid = (ref, ipl) => {
    const { canvas, ctx } = getCanvasContext(ref);
    const clrGuide = getCssColor("--clr-guide");
    const drawGridX = () => {
      for (let i3 = 0; i3 < ipl.length; i3++) {
        ctx.globalCompositeOperation = "destination-over";
        ctx.setLineDash([2, 2]);
        if (i3 !== 0 && i3 % 5 !== 0)
          continue;
        const { openTime: x3 } = ipl[i3];
        ctx.beginPath();
        ctx.moveTo(x3, 0);
        ctx.lineTo(x3, lineY(canvas.height));
        ctx.lineWidth = 1;
        ctx.strokeStyle = clrGuide;
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        ctx.setLineDash([0, 0]);
      }
    };
    const drawGridY = () => {
      for (let i3 = 1; i3 <= 10; i3++) {
        const y3 = lerp(1, canvas.height - 1, i3 / 10);
        ctx.globalCompositeOperation = "destination-over";
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(0, y3);
        ctx.lineTo(canvas.width, lineY(y3));
        ctx.lineWidth = 1;
        ctx.strokeStyle = clrGuide;
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
        ctx.setLineDash([0, 0]);
      }
    };
    drawGridX();
    drawGridY();
  };

  // src/components/MarketGraph/info/onDrawInfo.ts
  var onDrawInfo = (ref, hover) => {
    const { ctx } = getCanvasContext(ref);
    const clrTextWeak = getCssColor("--clr-textWeak");
    const clrTextStrong = getCssColor("--clr-textStrong");
    const drawTime = () => {
      const ts = new Date(hover.openTime).toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
      const { width } = ctx.measureText(ts);
      ctx.fillStyle = "#cecece";
      ctx.font = "12px Hack, monospace";
      ctx.fillText(ts, 0, 20);
      return width;
    };
    const timeWidth = drawTime();
    const drawInfoBar = () => {
      ctx.font = "12px Hack, monospace";
      let infoWidth = 0;
      Object.keys(hover.spark).forEach((k3) => {
        const key = k3;
        const prefix = k3[0].toUpperCase();
        const value = Math.round(hover.spark[key]).toString();
        const line = prefix + value;
        infoWidth += ctx.measureText(line).width + 15;
        ctx.fillStyle = clrTextWeak;
        ctx.fillText(prefix, infoWidth + timeWidth, 20);
        ctx.fillStyle = clrTextStrong;
        ctx.fillText(value, infoWidth + timeWidth + 10, 20);
      });
    };
    drawInfoBar();
  };

  // src/components/MarketGraph/info/onDrawPChange.ts
  var onDrawPChange = (ref, items, itemHover) => {
    const { ctx } = getCanvasContext(ref);
    const clrTextStrong = getCssColor("--clr-textStrong");
    let last = items.indexOf(itemHover);
    last = last == 0 ? items.length - 1 : last - 1;
    const lastClose = items[last].spark.close;
    const thisClose = itemHover.spark.close;
    const change = (thisClose - lastClose) / thisClose;
    const format = (change * 100).toFixed(3).padStart(6, "+") + "%";
    ctx.fillStyle = clrTextStrong;
    ctx.fillText(format, 100 * 5, 20);
  };

  // src/components/MarketGraph/graphs/onDrawCandle.ts
  var onDrawCandle = (ref, state, items, moveX = 0, moveY = 0) => {
    const { canvas, ctx } = getCanvasContext(ref);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const clrShort = getCssColor("--clr-short");
    const clrLong = getCssColor("--clr-long");
    const { ipl, minX, maxX } = getIplMarket(canvas.height, canvas.width, items);
    const iplMap = {};
    ipl.forEach((k3) => iplMap[k3.index] = k3);
    onDrawTrendBox(ref, state, moveX, moveY);
    onDrawMinMax(ref, minX, maxX, iplMap);
    const drawCandle = (item) => {
      const { openTime: x3 } = item;
      const { open, high, low, close } = item.spark;
      ctx.strokeStyle = open < close ? clrShort : clrLong;
      ctx.beginPath();
      ctx.moveTo(x3, high);
      ctx.lineTo(x3, low);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x3, open);
      ctx.lineTo(x3, close);
      ctx.lineWidth = 5;
      ctx.stroke();
    };
    for (let i3 = 0; i3 < ipl.length; i3++) {
      drawCandle(ipl[i3]);
    }
    const { iplHover, itemHover } = getHoverMarket(moveX, ipl, items);
    onDrawCross(ref, iplHover, moveY);
    onDrawInfo(ref, itemHover);
    onDrawGrid(ref, ipl);
    onDrawPChange(ref, items, itemHover);
  };

  // src/components/MarketGraph/MarketGraph.tsx
  var MarketChart = ({ items }) => {
    const ref = s2({});
    const state = {
      drawHistory: [],
      drawActive: {},
      history: 0,
      zoom: 0
    };
    const drawChart = (x3 = 0, y3 = 0) => {
      onDrawCandle(ref, state, items.slice(state.zoom), x3, y3);
    };
    const events = {
      onLoad: function() {
        drawChart();
      },
      onMouseMove: function(e3) {
        const { canvas } = getCanvasContext(ref);
        const { x: x3, y: y3 } = getCanvasPos(canvas, e3);
        drawChart(x3, y3);
      },
      onMouseDown: function(e3) {
        const { canvas } = getCanvasContext(ref);
        const { x: x3, y: y3 } = getCanvasPos(canvas, e3);
        state.drawActive = {
          ...state.drawActive,
          active: true,
          hidden: false,
          start: { x: x3, y: y3 },
          end: { x: 0, y: 0 }
        };
      },
      onMouseUp: function(e3) {
        const { canvas } = getCanvasContext(ref);
        const { x: x3, y: y3 } = getCanvasPos(canvas, e3);
        state.drawActive = {
          ...state.drawActive,
          active: false,
          end: { x: x3, y: y3 }
        };
        state.drawHistory.push(state.drawActive);
        state.history = state.drawHistory.length - 1;
      },
      onWheel: function(e3) {
        e3.preventDefault();
        const speed = 2;
        state.zoom += e3.deltaY < 0 ? speed : -speed;
        const min = 0;
        const max = items.length - 5;
        if (state.zoom < min)
          state.zoom = min;
        else if (state.zoom > max)
          state.zoom = max;
        drawChart();
      },
      onKeyDown: function(e3) {
        if (!e3.ctrlKey)
          return;
        const { history: history2 } = state;
        const max = state.drawHistory.length - 1;
        switch (e3.key) {
          case "z":
            if (history2 >= 0) {
              state.drawHistory[state.history--].hidden = true;
              state.history = history2 == 0 ? 0 : history2 - 1;
            }
            break;
          case "y":
            if (history2 <= max) {
              state.drawHistory[state.history++].hidden = false;
              state.history = history2 == max ? max : history2 + 1;
            }
            break;
        }
        drawChart();
      }
    };
    const eventsMemo = A2(() => events, []);
    return /* @__PURE__ */ v(Canvas, {
      id: "candle-chart",
      height: 300,
      width: 600,
      canvasRef: ref,
      events: eventsMemo
    });
  };

  // src/components/OrderBook/OrderBook.utils.ts
  var setOrderBookInfo = (items, midPoint) => {
    const processed = [];
    let lastPrice = 0;
    let totalPrice = 0;
    let totalVolume = 0;
    for (let i3 = 0; i3 < items.length; i3++) {
      let { price, volume, long } = items[i3];
      totalPrice += price;
      totalVolume += volume;
      const lp = lastPrice.toFixed(1).split("");
      const cp = price.toFixed(1).split("");
      let hlight = 0;
      for (let i4 = 0; i4 < cp.length; i4++) {
        if (lp[i4] !== cp[i4]) {
          hlight = i4;
          break;
        }
      }
      const percent = Math.abs((midPoint - totalPrice) / midPoint);
      processed.push({
        price,
        volume,
        totalPercent: Number(percent.toFixed(8)),
        totalVolume,
        long,
        mirrored: 0,
        significant: volume > 0.15,
        hlight,
        index: i3
      });
      lastPrice = price;
    }
    return processed;
  };
  var setMirrored = (asks, bids) => {
    for (let i3 = 0; i3 < asks.length; i3++) {
      const a3 = asks[i3];
      for (let j4 = 0; j4 < bids.length; j4++) {
        const b3 = bids[i3];
        if (a3.totalPercent >= b3.totalPercent) {
          a3.mirrored = b3.price;
          b3.mirrored = a3.price;
        }
      }
    }
  };

  // src/components/OrderBook/OrderBook.types.ts
  var EOrderBookAction;
  (function(EOrderBookAction2) {
    EOrderBookAction2[EOrderBookAction2["None"] = 0] = "None";
    EOrderBookAction2[EOrderBookAction2["AddOrderBook"] = 1] = "AddOrderBook";
    EOrderBookAction2[EOrderBookAction2["HoverEntry"] = 2] = "HoverEntry";
  })(EOrderBookAction || (EOrderBookAction = {}));
  var EOrderBookSender;
  (function(EOrderBookSender3) {
    EOrderBookSender3[EOrderBookSender3["BookAsks"] = 0] = "BookAsks";
    EOrderBookSender3[EOrderBookSender3["BookBids"] = 1] = "BookBids";
    EOrderBookSender3[EOrderBookSender3["GraphAsks"] = 2] = "GraphAsks";
    EOrderBookSender3[EOrderBookSender3["GraphBids"] = 3] = "GraphBids";
  })(EOrderBookSender || (EOrderBookSender = {}));

  // src/components/OrderBook/OrderBook.reducer.ts
  var orderBookReducer = (state, action) => {
    const { sender } = action;
    switch (action.cmd) {
      case EOrderBookAction.HoverEntry:
        const { hover } = action;
        return { ...state, sender, hover };
      case EOrderBookAction.AddOrderBook:
        const { book } = action;
        return { ...state, sender, book };
    }
  };

  // src/components/OrderBook/OrderBook.store.tsx
  var OrderBookContext = D({});
  var orderBookState = {
    book: {},
    hover: {}
  };
  var OrderBookStore = ({ children }) => {
    const [state, dispatch] = p(orderBookReducer, orderBookState);
    const value = { state, dispatch };
    return /* @__PURE__ */ v(OrderBookContext.Provider, {
      value
    }, children);
  };
  var useOrderBook = () => {
    const context = T2(OrderBookContext);
    if (context === void 0) {
      throw new Error("useOrderBook must be used within <OrderBookStore>");
    }
    return context;
  };

  // src/components/OrderBook/OrderBook.actions.ts
  var useHover = (sender, item) => {
    const { dispatch } = useOrderBook();
    const events = A2(() => ({
      onMouseOver() {
        dispatch({
          cmd: EOrderBookAction.HoverEntry,
          sender,
          hover: item
        });
      }
    }), []);
    return events;
  };

  // src/components/OrderBook/OrderBook.tsx
  var OrderBookItem = ({ sender, item, hover }) => {
    const events = useHover(sender, item);
    const { price, volume, totalVolume, long, hlight, significant } = item;
    const dim = `clr-${long ? "long" : "short"}-fill`;
    const light = `clr-${long ? "long" : "short"}-highlight`;
    const p3 = price.toFixed(1).split("");
    const v3 = volume.toFixed(4);
    const tv = totalVolume.toFixed(4);
    const isHovered = (hover2, price2) => {
      if (!hover2)
        return false;
      return hover2.price === price2 || hover2.mirrored === price2;
    };
    const hoverCls = isHovered(hover, price) ? "order-list-entry--hover" : "";
    const sigCls = significant ? "order-list-entry--significant" : "";
    return /* @__PURE__ */ v("li", {
      ...events,
      className: `order-list-entry ${hoverCls} ${sigCls}`
    }, /* @__PURE__ */ v("div", {
      className: "order-list-entry-price"
    }, /* @__PURE__ */ v("span", {
      className: dim
    }, p3.slice(0, hlight).join("")), /* @__PURE__ */ v("span", {
      className: light
    }, p3.slice(hlight).join(""))), /* @__PURE__ */ v("div", {
      className: "order-list-entry-amount"
    }, /* @__PURE__ */ v("span", {
      className: "clr-text-strong"
    }, v3[0]), /* @__PURE__ */ v("span", {
      className: "clr-text-weak"
    }, v3.slice(1))), /* @__PURE__ */ v("div", {
      className: "order-list-entry-total-amount"
    }, /* @__PURE__ */ v("span", {
      className: "clr-text-weak"
    }, tv[0]), /* @__PURE__ */ v("span", {
      className: "clr-text-strong"
    }, tv.slice(1))));
  };
  var OrderBook = ({ asks, bids }) => {
    const { state } = useOrderBook();
    asks = asks.sort((a3, b3) => a3.price - b3.price);
    bids = bids.sort((a3, b3) => b3.price - a3.price);
    const midPoint = (asks[0].price + bids[0].price) / 2;
    asks = setOrderBookInfo(asks, midPoint).slice(0, 21);
    bids = setOrderBookInfo(bids, midPoint).slice(0, 21);
    setMirrored(asks, bids);
    state.book = { asks: [...asks], bids: [...bids] };
    asks.reverse();
    return /* @__PURE__ */ v("div", {
      className: "order-book"
    }, /* @__PURE__ */ v("div", {
      className: "order-book-list order-book-list--bids"
    }, /* @__PURE__ */ v("ul", null, asks.map((item) => {
      return /* @__PURE__ */ v(OrderBookItem, {
        sender: EOrderBookSender.BookAsks,
        item,
        hover: state.hover
      });
    }))), /* @__PURE__ */ v("div", {
      className: "order-book-last-price"
    }, midPoint), /* @__PURE__ */ v("div", {
      className: "order-book-list order-book-list--asks"
    }, /* @__PURE__ */ v("ul", null, bids.map((item) => {
      return /* @__PURE__ */ v(OrderBookItem, {
        sender: EOrderBookSender.BookBids,
        item,
        hover: state.hover
      });
    }))));
  };

  // src/components/OrderBook/graphs/axis/onDrawAxis.ts
  var onDrawAxis = (ref, items, moveY = 0, hover = {}, invert = false) => {
    const {
      canvas: { height, width },
      ctx
    } = getCanvasContext(ref);
    ctx.clearRect(0, 0, width, height);
    const clrLong = getCssColor("--clr-long");
    const clrShort = getCssColor("--clr-short");
    const clrLongBg50 = getCssColor("--clr-long-bg-50");
    const clrShortBg50 = getCssColor("--clr-short-bg-50");
    const clrRgbaBg50 = getCssColor("--clr-rgba-bg-50");
    const drawSignificant = (ipl, items2) => {
      ctx.beginPath();
      ctx.setLineDash([2, 2]);
      ctx.lineCap = "round";
      ctx.lineWidth = 1;
      for (let i3 = 0; i3 < items2.length; i3++) {
        if (!ipl[i3].significant)
          continue;
        const { totalVolume: x3, totalPercent: y3, long } = ipl[i3];
        ctx.moveTo(0.5, y3);
        ctx.lineTo(long ? width - x3 : x3, lineY(y3));
        ctx.strokeStyle = long ? clrLongBg50 : clrShortBg50;
        ctx.stroke();
      }
      ctx.stroke();
      ctx.setLineDash([0, 0]);
    };
    const drawAxis = (items2) => {
      const { ipl } = getIplOrderBook(height, width, items2);
      let iplHover = {};
      if (Object.keys(hover).length) {
        if (invert)
          iplHover = ipl[ipl.length - 1 - hover.index];
        else
          iplHover = ipl[hover.index];
      }
      if (!iplHover.index)
        iplHover = getHoverOrderBook(moveY, ipl, items2).iplHover;
      const { long } = items2[0];
      const thisX = width - iplHover.totalVolume;
      const thisY = iplHover.totalPercent;
      drawSignificant(ipl, items2);
      const drawAxisLine = (x3, y3, long2) => {
        ctx.beginPath();
        ctx.setLineDash([2, 2]);
        ctx.lineCap = "round";
        ctx.lineWidth = 1;
        ctx.strokeStyle = long2 ? clrLong : clrShort;
        x3 = long2 ? x3 : width - x3;
        ctx.moveTo(x3, y3);
        ctx.lineTo(x3, long2 ? 0.5 : height);
        ctx.moveTo(x3, y3);
        ctx.lineTo(0.5, y3);
        ctx.stroke();
        ctx.setLineDash([0, 0]);
      };
      drawAxisLine(thisX, thisY, long);
      const drawCircle = (x3, y3, long2) => {
        ctx.beginPath();
        x3 = long2 ? x3 : width - x3;
        ctx.lineWidth = 3;
        ctx.fillStyle = long2 ? clrLong : clrShort;
        ctx.arc(x3, y3, 3, 0, 2 * Math.PI);
        ctx.fill();
      };
      drawCircle(thisX, thisY, long);
      const drawShade = (x3, y3, long2) => {
        ctx.beginPath();
        if (long2) {
          ctx.moveTo(width, y3);
          ctx.lineTo(width, lineY(height));
          ctx.lineTo(0, lineY(height));
          ctx.lineTo(0, y3);
        } else {
          ctx.moveTo(width, y3);
          ctx.lineTo(width, 0);
          ctx.lineTo(0, 0);
          ctx.lineTo(0, y3);
        }
        ctx.fillStyle = clrRgbaBg50;
        ctx.fill();
      };
      drawShade(thisX, thisY, long);
      return iplHover;
    };
    return drawAxis(items);
  };

  // src/components/OrderBook/graphs/axis/AxisGraph.tsx
  var AxisGraph = ({ long }) => {
    const { state, dispatch } = useOrderBook();
    const ref = s2({});
    const items = long ? state.book.bids : state.book.asks;
    const context = long ? EOrderBookSender.GraphAsks : EOrderBookSender.GraphBids;
    y2(() => {
      if (state.sender !== context) {
        if (state.hover.long !== long) {
          onDrawAxis(ref, items, 0, state.hover, true);
        } else if (state.hover.long == long) {
          onDrawAxis(ref, items, 0, state.hover, false);
        }
      }
    }, [state.hover]);
    const events = {
      onLoad: function() {
        onDrawAxis(ref, items);
      },
      onMouseMove: function(e3) {
        const { canvas } = getCanvasContext(ref);
        const { y: y3 } = getCanvasPos(canvas, e3);
        const hover = onDrawAxis(ref, items, y3);
        dispatch({
          cmd: EOrderBookAction.HoverEntry,
          sender: context,
          hover
        });
      }
    };
    const eventsMemo = A2(() => events, []);
    return /* @__PURE__ */ v(Canvas, {
      id: "depth-axis",
      height: 400,
      width: 200,
      canvasRef: ref,
      events: eventsMemo
    });
  };

  // src/components/OrderBook/graphs/depth/onDrawDepth.ts
  var onDrawDepth = (ref, items, moveX = 0) => {
    let {
      canvas: { height, width },
      ctx
    } = getCanvasContext(ref);
    ctx.clearRect(0, 0, width, height);
    const clrShort = getCssColor("--clr-short");
    const clrLong = getCssColor("--clr-long");
    const clrShortBg20 = getCssColor("--clr-short-bg-20");
    const clrLongBg20 = getCssColor("--clr-long-bg-20");
    const drawDepth = (items2) => {
      const { ipl } = getIplOrderBook(height, width, items2);
      const { iplHover } = getHoverOrderBook(moveX, ipl, items2);
      const { long } = items2[0];
      for (let i3 = 0; i3 < ipl.length; i3++) {
        if (i3 == 0)
          continue;
        const last = ipl[i3 - 1];
        const next = ipl[i3];
        let lastX = last.totalVolume;
        let nextX = next.totalVolume;
        let lastY = last.totalPercent;
        let nextY = next.totalPercent;
        if (long) {
          lastX = width - lastX;
          nextX = width - nextX;
        }
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(nextX, lastY);
        ctx.lineTo(nextX, nextY);
        ctx.lineWidth = 1;
        ctx.strokeStyle = long ? clrLong : clrShort;
        ctx.stroke();
        ctx.globalCompositeOperation = "destination-over";
        long ? ctx.lineTo(height, height) : ctx.lineTo(height, 0);
        ctx.fillStyle = long ? clrLongBg20 : clrShortBg20;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.stroke();
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.closePath();
      }
      return iplHover;
    };
    return drawDepth(items);
  };

  // src/components/OrderBook/graphs/depth/DepthGraph.tsx
  var DepthGraph = ({ long }) => {
    const {
      state: { book },
      dispatch
    } = useOrderBook();
    const ref = s2({});
    const items = long ? book.bids : book.asks;
    const sender = long ? EOrderBookSender.GraphAsks : EOrderBookSender.GraphBids;
    const events = {
      onLoad: function() {
        onDrawDepth(ref, items);
      },
      onMouseMove: function(e3) {
        const { canvas } = getCanvasContext(ref);
        const { x: x3 } = getCanvasPos(canvas, e3);
        const hover = onDrawDepth(ref, items, x3);
        dispatch({
          cmd: EOrderBookAction.HoverEntry,
          sender,
          hover
        });
      }
    };
    const eventsMemo = A2(() => events, []);
    return /* @__PURE__ */ v(Canvas, {
      id: "depth-graph",
      height: 400,
      width: 200,
      canvasRef: ref,
      events: eventsMemo
    });
  };

  // src/mock/mock.utils.ts
  var getOrderBookFormatted = (items, long) => {
    return items.map((item) => {
      const toNum = item.map((k3) => Number(k3));
      const [price, volume] = toNum;
      return { price, volume, long };
    });
  };

  // src/mock/binance-btcusdt-book.ts
  var binance_btcusdt_book_default = {
    lastUpdateId: 14730815480,
    bids: [
      ["62054.41000000", "0.02967000"],
      ["62052.42000000", "0.01000000"],
      ["62050.11000000", "0.00400000"],
      ["62048.40000000", "0.10057000"],
      ["62048.20000000", "0.18750000"],
      ["62048.15000000", "0.06735000"],
      ["62046.65000000", "0.02000000"],
      ["62046.54000000", "0.00161000"],
      ["62043.56000000", "0.04000000"],
      ["62043.52000000", "0.00032000"],
      ["62043.21000000", "0.04027000"],
      ["62042.37000000", "0.09786000"],
      ["62041.72000000", "0.18750000"],
      ["62041.29000000", "0.23000000"],
      ["62040.65000000", "0.00806000"],
      ["62040.44000000", "0.00032000"],
      ["62040.01000000", "0.06284000"],
      ["62039.54000000", "0.00514000"],
      ["62038.48000000", "0.03000000"],
      ["62037.77000000", "0.05000000"],
      ["62037.36000000", "0.00032000"],
      ["62035.35000000", "0.08053000"],
      ["62034.72000000", "0.51058000"],
      ["62034.28000000", "0.00032000"],
      ["62034.12000000", "0.18750000"],
      ["62032.87000000", "0.03222000"],
      ["62032.15000000", "0.00298000"],
      ["62032.05000000", "0.01829000"],
      ["62031.20000000", "0.00032000"],
      ["62030.35000000", "0.05000000"],
      ["62030.19000000", "0.01318000"],
      ["62029.37000000", "0.21639000"],
      ["62029.13000000", "0.10000000"],
      ["62028.33000000", "0.30810000"],
      ["62028.19000000", "0.18530000"],
      ["62028.12000000", "0.00032000"],
      ["62026.44000000", "0.03130000"],
      ["62025.38000000", "0.23558000"],
      ["62025.37000000", "0.08203000"],
      ["62025.04000000", "0.00032000"],
      ["62024.42000000", "0.18750000"],
      ["62023.51000000", "0.20000000"],
      ["62023.35000000", "0.01000000"],
      ["62022.93000000", "0.10000000"],
      ["62021.96000000", "0.00032000"],
      ["62019.74000000", "0.00295000"],
      ["62018.88000000", "0.00032000"],
      ["62018.21000000", "0.18750000"],
      ["62015.80000000", "0.00032000"],
      ["62014.04000000", "0.00413000"],
      ["62013.41000000", "0.24677000"],
      ["62013.40000000", "0.57941000"],
      ["62012.72000000", "0.00032000"],
      ["62012.53000000", "0.00441000"],
      ["62012.43000000", "0.12081000"],
      ["62011.72000000", "0.20217000"],
      ["62011.46000000", "0.06287000"],
      ["62011.34000000", "0.03439000"],
      ["62011.33000000", "0.18750000"],
      ["62011.20000000", "0.02155000"],
      ["62011.14000000", "0.20000000"],
      ["62011.08000000", "0.04000000"],
      ["62009.64000000", "0.00032000"],
      ["62009.15000000", "0.06287000"],
      ["62008.83000000", "0.40000000"],
      ["62006.57000000", "0.56014000"],
      ["62006.56000000", "1.60032000"],
      ["62006.25000000", "0.04794000"],
      ["62003.48000000", "0.00032000"],
      ["62002.97000000", "0.20000000"],
      ["62002.93000000", "0.18750000"],
      ["62002.54000000", "0.01516000"],
      ["62000.40000000", "0.00032000"],
      ["62000.02000000", "0.26807000"],
      ["62000.01000000", "0.00907000"],
      ["62000.00000000", "0.00090000"],
      ["61999.59000000", "0.57369000"],
      ["61999.57000000", "0.02000000"],
      ["61999.53000000", "0.00100000"],
      ["61999.40000000", "0.16107000"],
      ["61998.54000000", "0.94700000"],
      ["61997.32000000", "0.00032000"],
      ["61995.75000000", "0.00076000"],
      ["61995.54000000", "0.03322000"],
      ["61994.31000000", "0.00413000"],
      ["61994.24000000", "0.00032000"],
      ["61993.79000000", "0.91851000"],
      ["61993.78000000", "0.18750000"],
      ["61992.91000000", "0.02300000"],
      ["61991.16000000", "0.00032000"],
      ["61990.38000000", "2.85000000"],
      ["61989.59000000", "0.00464000"],
      ["61988.08000000", "0.00032000"],
      ["61985.65000000", "0.04840000"],
      ["61985.61000000", "0.25223000"],
      ["61985.60000000", "0.18750000"],
      ["61985.00000000", "0.00032000"],
      ["61984.19000000", "0.69499000"],
      ["61983.79000000", "0.00413000"],
      ["61982.79000000", "0.03150000"]
    ],
    asks: [
      ["62054.42000000", "0.21685000"],
      ["62054.86000000", "0.01379000"],
      ["62057.49000000", "0.14000000"],
      ["62059.03000000", "0.07169000"],
      ["62059.04000000", "0.18000000"],
      ["62060.00000000", "0.10517000"],
      ["62061.21000000", "0.00150000"],
      ["62063.70000000", "0.18750000"],
      ["62065.53000000", "0.00464000"],
      ["62065.84000000", "0.02000000"],
      ["62066.00000000", "0.01000000"],
      ["62066.27000000", "0.02716000"],
      ["62067.99000000", "0.14209000"],
      ["62068.00000000", "0.40538000"],
      ["62068.79000000", "0.00033000"],
      ["62069.06000000", "0.16090000"],
      ["62069.17000000", "0.06284000"],
      ["62069.18000000", "0.00026000"],
      ["62070.00000000", "0.01000000"],
      ["62070.21000000", "0.18750000"],
      ["62070.73000000", "0.02000000"],
      ["62070.86000000", "0.01000000"],
      ["62071.17000000", "0.06287000"],
      ["62071.24000000", "0.00032000"],
      ["62071.99000000", "0.20030000"],
      ["62072.00000000", "0.04000000"],
      ["62072.74000000", "0.24389000"],
      ["62072.78000000", "0.02000000"],
      ["62072.88000000", "0.02000000"],
      ["62072.99000000", "0.22729000"],
      ["62073.00000000", "0.02100000"],
      ["62073.28000000", "0.41063000"],
      ["62073.29000000", "0.57942000"],
      ["62073.85000000", "0.00574000"],
      ["62073.86000000", "0.20000000"],
      ["62073.95000000", "0.20000000"],
      ["62074.32000000", "0.00032000"],
      ["62075.00000000", "0.00080000"],
      ["62075.32000000", "0.00300000"],
      ["62075.47000000", "0.00161000"],
      ["62075.48000000", "0.18532000"],
      ["62075.74000000", "0.00876000"],
      ["62076.14000000", "0.00032000"],
      ["62076.30000000", "0.00322000"],
      ["62077.04000000", "0.03000000"],
      ["62077.10000000", "0.46920000"],
      ["62077.11000000", "0.97814000"],
      ["62077.40000000", "0.00032000"],
      ["62077.85000000", "0.01095000"],
      ["62077.86000000", "0.32693000"],
      ["62077.87000000", "0.00405000"],
      ["62078.89000000", "0.37225000"],
      ["62078.90000000", "0.28123000"],
      ["62079.00000000", "0.04000000"],
      ["62079.21000000", "0.20000000"],
      ["62079.22000000", "0.09765000"],
      ["62079.38000000", "0.25711000"],
      ["62080.07000000", "0.18750000"],
      ["62080.37000000", "0.08053000"],
      ["62080.48000000", "0.00032000"],
      ["62080.83000000", "0.00026000"],
      ["62081.00000000", "0.03000000"],
      ["62081.30000000", "0.22250000"],
      ["62081.53000000", "0.42496000"],
      ["62081.54000000", "0.01988000"],
      ["62081.89000000", "0.98379000"],
      ["62081.90000000", "0.00050000"],
      ["62082.01000000", "0.01000000"],
      ["62082.71000000", "0.20000000"],
      ["62083.31000000", "0.15000000"],
      ["62083.56000000", "0.00032000"],
      ["62085.40000000", "0.00027000"],
      ["62085.42000000", "0.10000000"],
      ["62085.94000000", "0.06620000"],
      ["62086.09000000", "0.70300000"],
      ["62086.26000000", "0.08520000"],
      ["62086.55000000", "0.05787000"],
      ["62086.64000000", "0.00032000"],
      ["62086.94000000", "1.56200000"],
      ["62086.95000000", "0.00017000"],
      ["62087.54000000", "0.00056000"],
      ["62087.60000000", "0.25000000"],
      ["62087.92000000", "0.92687000"],
      ["62087.93000000", "0.18750000"],
      ["62088.00000000", "0.00032000"],
      ["62088.86000000", "0.00242000"],
      ["62088.89000000", "0.07500000"],
      ["62089.72000000", "0.00032000"],
      ["62089.99000000", "0.07035000"],
      ["62090.00000000", "0.84727000"],
      ["62090.48000000", "0.06967000"],
      ["62091.74000000", "0.00363000"],
      ["62091.99000000", "0.09009000"],
      ["62092.19000000", "0.20000000"],
      ["62092.79000000", "0.12930000"],
      ["62092.80000000", "0.00032000"],
      ["62093.17000000", "0.02300000"],
      ["62093.65000000", "0.11224000"],
      ["62094.18000000", "0.05000000"],
      ["62094.79000000", "0.09511000"]
    ]
  };

  // src/types/data.types.ts
  var EMarketKey;
  (function(EMarketKey2) {
    EMarketKey2["BTC"] = "BTC";
    EMarketKey2["ETH"] = "ETH";
  })(EMarketKey || (EMarketKey = {}));

  // src/mock/index.ts
  var getMockOrderBook = (key) => {
    const json = key == EMarketKey.BTC ? binance_btcusdt_book_default : binance_btcusdt_book_default;
    const { asks, bids } = json;
    return {
      asks: getOrderBookFormatted(asks, false),
      bids: getOrderBookFormatted(bids, true)
    };
  };

  // src/utils/http.utils.ts
  var httpPost = async (url, body, headers) => {
    const res = await fetch(url, {
      method: "POST",
      headers: Object.assign({ "content-type": "application/json" }, headers || {}),
      body: JSON.stringify(body)
    });
    return await res.json();
  };

  // src/api/gql.api.ts
  var GqlApi = class {
    isObject(v3) {
      return typeof v3 == "object" && !(v3 instanceof Date) && !Array.isArray(v3) && !(v3 instanceof RegExp);
    }
    process(query, vars) {
      for (const k3 of Object.keys(vars || {})) {
        if (!vars || !vars[k3])
          continue;
        if (this.isObject(vars[k3])) {
          return this.process(query, vars[k3]);
        }
        const v3 = vars[k3];
        query = query.replace("#" + k3, typeof v3 == "string" ? `"${v3}"` : v3);
      }
      return query;
    }
    async request(query, vars) {
      query = this.process(query, vars || {});
      query = query.replace(/[\s\n]+/g, " ");
      const req = {
        query
      };
      return await httpPost("https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph", req);
    }
  };

  // src/api/gql.utils.ts
  var getMarketDataFormatted = (res) => {
    const items = [];
    res.tokenHourDatas.forEach((entry, index) => {
      const { open, high, low, close } = entry;
      const item = {
        index,
        openTime: entry.periodStartUnix * 1e3,
        volume: Number(entry.totalValueLocked),
        spark: {
          open: Number(open),
          high: Number(high),
          low: Number(low),
          close: Number(close)
        }
      };
      items.push(item);
    });
    return items;
  };
  var getStateFromAddress = (address) => {
    switch (address) {
      case "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599":
        return {
          key: EMarketKey.BTC,
          name: "Bitcoin",
          rank: 1,
          items: {}
        };
      case "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2":
        return {
          key: EMarketKey.ETH,
          name: "Ethereum",
          rank: 2,
          items: {}
        };
    }
    return {};
  };

  // src/api/gql.query.ts
  var GqlQuery = class extends GqlApi {
    async getTokenHourlyOHLC(vars) {
      const query = `
        {
            tokenHourDatas(
              first: 100
              skip: 0
              where: {
                  token: #token, 
                  periodStartUnix_gt: #start
              }    
              orderBy: periodStartUnix
              orderDirection: asc
          ) { 
              periodStartUnix
              high
              low
              open
              close
              totalValueLocked
          }  
        }`;
      const res = await this.request(query, vars);
      const state = getStateFromAddress(vars.token);
      state.items = getMarketDataFormatted(res.data);
      return state;
    }
  };

  // src/views/MainView.tsx
  var MainView = () => {
    const [marketState, useMarketStates] = l2({});
    const [bookState, useBookStates] = l2({});
    const onLoadOrderBookData = async () => {
      const state = {
        [EMarketKey.BTC]: await getMockOrderBook(EMarketKey.BTC),
        [EMarketKey.ETH]: await getMockOrderBook(EMarketKey.ETH)
      };
      useBookStates(state);
    };
    const onQueryLocalStorage = async (address, name, start) => {
      const query = new GqlQuery();
      const key = `market-data-${name}`;
      if (!localStorage.hasOwnProperty(key)) {
        const data = await query.getTokenHourlyOHLC({
          token: address,
          start
        });
        localStorage.setItem(key, JSON.stringify(data));
      }
      return JSON.parse(localStorage.getItem(key));
    };
    const onQueryTokenData = async () => {
      const start = Math.round((new Date().getTime() - 24 * 4 * 60 * 60 * 1e3) / 1e3);
      const state = {
        [EMarketKey.BTC]: await onQueryLocalStorage("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", "btc", start),
        [EMarketKey.ETH]: await onQueryLocalStorage("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "eth", start)
      };
      useMarketStates(state);
    };
    y2(() => {
      onLoadOrderBookData();
      onQueryTokenData();
    }, []);
    if (!Object.keys(marketState).length) {
      return /* @__PURE__ */ v("div", null, "Loading...");
    }
    return /* @__PURE__ */ v("div", null, /* @__PURE__ */ v("div", {
      className: "orderbook-component"
    }, /* @__PURE__ */ v(OrderBookStore, null, /* @__PURE__ */ v(OrderBook, {
      asks: bookState.BTC.asks,
      bids: bookState.BTC.bids
    }), /* @__PURE__ */ v("div", {
      className: "depth-chart-grid"
    }, /* @__PURE__ */ v("div", {
      className: "depth-combo"
    }, /* @__PURE__ */ v(DepthGraph, {
      long: false
    }), /* @__PURE__ */ v(AxisGraph, {
      long: false
    })), /* @__PURE__ */ v("div", {
      className: "depth-combo"
    }, /* @__PURE__ */ v(DepthGraph, {
      long: true
    }), /* @__PURE__ */ v(AxisGraph, {
      long: true
    }))))), /* @__PURE__ */ v("div", {
      className: "market-box-grid"
    }, /* @__PURE__ */ v(MarketBox, {
      state: marketState.BTC
    }), /* @__PURE__ */ v(MarketBox, {
      state: marketState.ETH
    })), /* @__PURE__ */ v(MarketChart, {
      items: marketState.BTC.items
    }));
  };

  // src/main.tsx
  var Main = () => /* @__PURE__ */ v(preact_router_es_default, null, /* @__PURE__ */ v(Route, {
    default: true,
    component: MainView
  }));
  S(/* @__PURE__ */ v(MainView, null), document.getElementById("app"));
})();
//# sourceMappingURL=dev.js.map
