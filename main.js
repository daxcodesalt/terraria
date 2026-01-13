(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const Z of document.querySelectorAll('link[rel="modulepreload"]')) v(Z);
  new MutationObserver((Z) => {
    for (const g of Z)
      if (g.type === "childList")
        for (const f of g.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && v(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(Z) {
    const g = {};
    return (
      Z.integrity && (g.integrity = Z.integrity),
      Z.referrerPolicy && (g.referrerPolicy = Z.referrerPolicy),
      Z.crossOrigin === "use-credentials"
        ? (g.credentials = "include")
        : Z.crossOrigin === "anonymous"
        ? (g.credentials = "omit")
        : (g.credentials = "same-origin"),
      g
    );
  }
  function v(Z) {
    if (Z.ep) return;
    Z.ep = !0;
    const g = m(Z);
    fetch(Z.href, g);
  }
})();
var commonjsGlobal =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function getDefaultExportFromCjs(Q) {
  return Q && Q.__esModule && Object.prototype.hasOwnProperty.call(Q, "default")
    ? Q.default
    : Q;
}
function getAugmentedNamespace(Q) {
  if (Object.prototype.hasOwnProperty.call(Q, "__esModule")) return Q;
  var S = Q.default;
  if (typeof S == "function") {
    var m = function v() {
      return this instanceof v
        ? Reflect.construct(S, arguments, this.constructor)
        : S.apply(this, arguments);
    };
    m.prototype = S.prototype;
  } else m = {};
  return (
    Object.defineProperty(m, "__esModule", { value: !0 }),
    Object.keys(Q).forEach(function (v) {
      var Z = Object.getOwnPropertyDescriptor(Q, v);
      Object.defineProperty(
        m,
        v,
        Z.get
          ? Z
          : {
              enumerable: !0,
              get: function () {
                return Q[v];
              },
            }
      );
    }),
    m
  );
}
var tarStream = {},
  events = { exports: {} },
  hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents) return events.exports;
  hasRequiredEvents = 1;
  var Q = typeof Reflect == "object" ? Reflect : null,
    S =
      Q && typeof Q.apply == "function"
        ? Q.apply
        : function (O, $, o0) {
            return Function.prototype.apply.call(O, $, o0);
          },
    m;
  Q && typeof Q.ownKeys == "function"
    ? (m = Q.ownKeys)
    : Object.getOwnPropertySymbols
    ? (m = function (O) {
        return Object.getOwnPropertyNames(O).concat(
          Object.getOwnPropertySymbols(O)
        );
      })
    : (m = function (O) {
        return Object.getOwnPropertyNames(O);
      });
  function v(W) {
    console && console.warn && console.warn(W);
  }
  var Z =
    Number.isNaN ||
    function (O) {
      return O !== O;
    };
  function g() {
    g.init.call(this);
  }
  (events.exports = g),
    (events.exports.once = b0),
    (g.EventEmitter = g),
    (g.prototype._events = void 0),
    (g.prototype._eventsCount = 0),
    (g.prototype._maxListeners = void 0);
  var f = 10;
  function F(W) {
    if (typeof W != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof W
      );
  }
  Object.defineProperty(g, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return f;
    },
    set: function (W) {
      if (typeof W != "number" || W < 0 || Z(W))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            W +
            "."
        );
      f = W;
    },
  }),
    (g.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (g.prototype.setMaxListeners = function (O) {
      if (typeof O != "number" || O < 0 || Z(O))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            O +
            "."
        );
      return (this._maxListeners = O), this;
    });
  function s(W) {
    return W._maxListeners === void 0 ? g.defaultMaxListeners : W._maxListeners;
  }
  (g.prototype.getMaxListeners = function () {
    return s(this);
  }),
    (g.prototype.emit = function (O) {
      for (var $ = [], o0 = 1; o0 < arguments.length; o0++)
        $.push(arguments[o0]);
      var A0 = O === "error",
        y = this._events;
      if (y !== void 0) A0 = A0 && y.error === void 0;
      else if (!A0) return !1;
      if (A0) {
        var N;
        if (($.length > 0 && (N = $[0]), N instanceof Error)) throw N;
        var G = new Error(
          "Unhandled error." + (N ? " (" + N.message + ")" : "")
        );
        throw ((G.context = N), G);
      }
      var m0 = y[O];
      if (m0 === void 0) return !1;
      if (typeof m0 == "function") S(m0, this, $);
      else
        for (var M0 = m0.length, N0 = p(m0, M0), o0 = 0; o0 < M0; ++o0)
          S(N0[o0], this, $);
      return !0;
    });
  function H(W, O, $, o0) {
    var A0, y, N;
    if (
      (F($),
      (y = W._events),
      y === void 0
        ? ((y = W._events = Object.create(null)), (W._eventsCount = 0))
        : (y.newListener !== void 0 &&
            (W.emit("newListener", O, $.listener ? $.listener : $),
            (y = W._events)),
          (N = y[O])),
      N === void 0)
    )
      (N = y[O] = $), ++W._eventsCount;
    else if (
      (typeof N == "function"
        ? (N = y[O] = o0 ? [$, N] : [N, $])
        : o0
        ? N.unshift($)
        : N.push($),
      (A0 = s(W)),
      A0 > 0 && N.length > A0 && !N.warned)
    ) {
      N.warned = !0;
      var G = new Error(
        "Possible EventEmitter memory leak detected. " +
          N.length +
          " " +
          String(O) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (G.name = "MaxListenersExceededWarning"),
        (G.emitter = W),
        (G.type = O),
        (G.count = N.length),
        v(G);
    }
    return W;
  }
  (g.prototype.addListener = function (O, $) {
    return H(this, O, $, !1);
  }),
    (g.prototype.on = g.prototype.addListener),
    (g.prototype.prependListener = function (O, $) {
      return H(this, O, $, !0);
    });
  function c0() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function d(W, O, $) {
    var o0 = { fired: !1, wrapFn: void 0, target: W, type: O, listener: $ },
      A0 = c0.bind(o0);
    return (A0.listener = $), (o0.wrapFn = A0), A0;
  }
  (g.prototype.once = function (O, $) {
    return F($), this.on(O, d(this, O, $)), this;
  }),
    (g.prototype.prependOnceListener = function (O, $) {
      return F($), this.prependListener(O, d(this, O, $)), this;
    }),
    (g.prototype.removeListener = function (O, $) {
      var o0, A0, y, N, G;
      if ((F($), (A0 = this._events), A0 === void 0)) return this;
      if (((o0 = A0[O]), o0 === void 0)) return this;
      if (o0 === $ || o0.listener === $)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete A0[O],
            A0.removeListener &&
              this.emit("removeListener", O, o0.listener || $));
      else if (typeof o0 != "function") {
        for (y = -1, N = o0.length - 1; N >= 0; N--)
          if (o0[N] === $ || o0[N].listener === $) {
            (G = o0[N].listener), (y = N);
            break;
          }
        if (y < 0) return this;
        y === 0 ? o0.shift() : u(o0, y),
          o0.length === 1 && (A0[O] = o0[0]),
          A0.removeListener !== void 0 &&
            this.emit("removeListener", O, G || $);
      }
      return this;
    }),
    (g.prototype.off = g.prototype.removeListener),
    (g.prototype.removeAllListeners = function (O) {
      var $, o0, A0;
      if (((o0 = this._events), o0 === void 0)) return this;
      if (o0.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : o0[O] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete o0[O]),
          this
        );
      if (arguments.length === 0) {
        var y = Object.keys(o0),
          N;
        for (A0 = 0; A0 < y.length; ++A0)
          (N = y[A0]), N !== "removeListener" && this.removeAllListeners(N);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if ((($ = o0[O]), typeof $ == "function")) this.removeListener(O, $);
      else if ($ !== void 0)
        for (A0 = $.length - 1; A0 >= 0; A0--) this.removeListener(O, $[A0]);
      return this;
    });
  function B(W, O, $) {
    var o0 = W._events;
    if (o0 === void 0) return [];
    var A0 = o0[O];
    return A0 === void 0
      ? []
      : typeof A0 == "function"
      ? $
        ? [A0.listener || A0]
        : [A0]
      : $
      ? j(A0)
      : p(A0, A0.length);
  }
  (g.prototype.listeners = function (O) {
    return B(this, O, !0);
  }),
    (g.prototype.rawListeners = function (O) {
      return B(this, O, !1);
    }),
    (g.listenerCount = function (W, O) {
      return typeof W.listenerCount == "function"
        ? W.listenerCount(O)
        : k.call(W, O);
    }),
    (g.prototype.listenerCount = k);
  function k(W) {
    var O = this._events;
    if (O !== void 0) {
      var $ = O[W];
      if (typeof $ == "function") return 1;
      if ($ !== void 0) return $.length;
    }
    return 0;
  }
  g.prototype.eventNames = function () {
    return this._eventsCount > 0 ? m(this._events) : [];
  };
  function p(W, O) {
    for (var $ = new Array(O), o0 = 0; o0 < O; ++o0) $[o0] = W[o0];
    return $;
  }
  function u(W, O) {
    for (; O + 1 < W.length; O++) W[O] = W[O + 1];
    W.pop();
  }
  function j(W) {
    for (var O = new Array(W.length), $ = 0; $ < O.length; ++$)
      O[$] = W[$].listener || W[$];
    return O;
  }
  function b0(W, O) {
    return new Promise(function ($, o0) {
      function A0(N) {
        W.removeListener(O, y), o0(N);
      }
      function y() {
        typeof W.removeListener == "function" && W.removeListener("error", A0),
          $([].slice.call(arguments));
      }
      h0(W, O, y, { once: !0 }), O !== "error" && g0(W, A0, { once: !0 });
    });
  }
  function g0(W, O, $) {
    typeof W.on == "function" && h0(W, "error", O, $);
  }
  function h0(W, O, $, o0) {
    if (typeof W.on == "function") o0.once ? W.once(O, $) : W.on(O, $);
    else if (typeof W.addEventListener == "function")
      W.addEventListener(O, function A0(y) {
        o0.once && W.removeEventListener(O, A0), $(y);
      });
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof W
      );
  }
  return events.exports;
}
var fixedSize, hasRequiredFixedSize;
function requireFixedSize() {
  return (
    hasRequiredFixedSize ||
      ((hasRequiredFixedSize = 1),
      (fixedSize = class {
        constructor(S) {
          if (!(S > 0) || ((S - 1) & S) !== 0)
            throw new Error(
              "Max size for a FixedFIFO should be a power of two"
            );
          (this.buffer = new Array(S)),
            (this.mask = S - 1),
            (this.top = 0),
            (this.btm = 0),
            (this.next = null);
        }
        clear() {
          (this.top = this.btm = 0),
            (this.next = null),
            this.buffer.fill(void 0);
        }
        push(S) {
          return this.buffer[this.top] !== void 0
            ? !1
            : ((this.buffer[this.top] = S),
              (this.top = (this.top + 1) & this.mask),
              !0);
        }
        shift() {
          const S = this.buffer[this.btm];
          if (S !== void 0)
            return (
              (this.buffer[this.btm] = void 0),
              (this.btm = (this.btm + 1) & this.mask),
              S
            );
        }
        peek() {
          return this.buffer[this.btm];
        }
        isEmpty() {
          return this.buffer[this.btm] === void 0;
        }
      })),
    fixedSize
  );
}
var fastFifo, hasRequiredFastFifo;
function requireFastFifo() {
  if (hasRequiredFastFifo) return fastFifo;
  hasRequiredFastFifo = 1;
  const Q = requireFixedSize();
  return (
    (fastFifo = class {
      constructor(m) {
        (this.hwm = m || 16),
          (this.head = new Q(this.hwm)),
          (this.tail = this.head),
          (this.length = 0);
      }
      clear() {
        (this.head = this.tail), this.head.clear(), (this.length = 0);
      }
      push(m) {
        if ((this.length++, !this.head.push(m))) {
          const v = this.head;
          (this.head = v.next = new Q(2 * this.head.buffer.length)),
            this.head.push(m);
        }
      }
      shift() {
        this.length !== 0 && this.length--;
        const m = this.tail.shift();
        if (m === void 0 && this.tail.next) {
          const v = this.tail.next;
          return (this.tail.next = null), (this.tail = v), this.tail.shift();
        }
        return m;
      }
      peek() {
        const m = this.tail.peek();
        return m === void 0 && this.tail.next ? this.tail.next.peek() : m;
      }
      isEmpty() {
        return this.length === 0;
      }
    }),
    fastFifo
  );
}
var browserDecoder, hasRequiredBrowserDecoder;
function requireBrowserDecoder() {
  return (
    hasRequiredBrowserDecoder ||
      ((hasRequiredBrowserDecoder = 1),
      (browserDecoder = class {
        constructor(S) {
          this.decoder = new TextDecoder(S === "utf16le" ? "utf16-le" : S);
        }
        get remaining() {
          return -1;
        }
        decode(S) {
          return this.decoder.decode(S, { stream: !0 });
        }
        flush() {
          return this.decoder.decode(new Uint8Array(0));
        }
      })),
    browserDecoder
  );
}
var textDecoder, hasRequiredTextDecoder;
function requireTextDecoder() {
  if (hasRequiredTextDecoder) return textDecoder;
  hasRequiredTextDecoder = 1;
  const Q = requireBrowserDecoder(),
    S = requireBrowserDecoder();
  textDecoder = class {
    constructor(Z = "utf8") {
      switch (((this.encoding = m(Z)), this.encoding)) {
        case "utf8":
          this.decoder = new S();
          break;
        case "utf16le":
        case "base64":
          throw new Error("Unsupported encoding: " + this.encoding);
        default:
          this.decoder = new Q(this.encoding);
      }
    }
    get remaining() {
      return this.decoder.remaining;
    }
    push(Z) {
      return typeof Z == "string" ? Z : this.decoder.decode(Z);
    }
    write(Z) {
      return this.push(Z);
    }
    end(Z) {
      let g = "";
      return Z && (g = this.push(Z)), (g += this.decoder.flush()), g;
    }
  };
  function m(v) {
    switch (((v = v.toLowerCase()), v)) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return v;
      default:
        throw new Error("Unknown encoding: " + v);
    }
  }
  return textDecoder;
}
var streamx, hasRequiredStreamx;
function requireStreamx() {
  if (hasRequiredStreamx) return streamx;
  hasRequiredStreamx = 1;
  const { EventEmitter: Q } = requireEvents(),
    S = new Error("Stream was destroyed"),
    m = new Error("Premature close"),
    v = requireFastFifo(),
    Z = requireTextDecoder(),
    g = (1 << 29) - 1,
    f = 1,
    F = 2,
    s = 4,
    H = 8,
    c0 = g ^ f,
    d = g ^ F,
    B = 16,
    k = 32,
    p = 64,
    u = 128,
    j = 256,
    b0 = 512,
    g0 = 1024,
    h0 = 2048,
    W = 4096,
    O = 8192,
    $ = 16384,
    o0 = 32768,
    A0 = 65536,
    y = 131072,
    N = j | b0,
    G = B | A0,
    m0 = p | B,
    M0 = W | u,
    N0 = j | y,
    p0 = g ^ B,
    _0 = g ^ p,
    T0 = g ^ (p | A0),
    y0 = g ^ A0,
    Cn = g ^ j,
    v0 = g ^ (u | O),
    z0 = g ^ g0,
    E0 = g ^ N,
    Hn = g ^ o0,
    Tn = g ^ k,
    Qn = g ^ y,
    Nn = g ^ N0,
    Mn = 1 << 18,
    xn = 2 << 18,
    nn = 4 << 18,
    vn = 8 << 18,
    Jn = 16 << 18,
    an = 32 << 18,
    Ln = 64 << 18,
    D0 = 128 << 18,
    sn = 256 << 18,
    w = 512 << 18,
    V = 1024 << 18,
    K = g ^ (Mn | sn),
    x0 = g ^ nn,
    Q0 = g ^ (Mn | w),
    F0 = g ^ Jn,
    u0 = g ^ vn,
    Fn = g ^ D0,
    P2 = g ^ xn,
    hn = g ^ V,
    t2 = B | Mn,
    I = g ^ t2,
    x = $ | an,
    o = s | H | F,
    M = o | f,
    C = o | x,
    E = x0 & _0,
    X = D0 | o0,
    Z0 = X & I,
    G0 = M | Z0,
    P0 = M | g0 | $,
    H0 = M | $ | u,
    K0 = M | g0 | u,
    u8 = M | W | u | O,
    R8 = M | B | g0 | $ | A0 | y,
    c8 = o | g0 | $,
    x8 = k | M | o0 | p,
    Y8 = o0 | f,
    V8 = M | w | an,
    p8 = vn | Jn,
    o8 = vn | Mn,
    t8 = vn | Jn | M | Mn,
    m8 = M | Mn | vn | V,
    j8 = nn | Mn,
    d8 = Mn | sn,
    G2 = M | w | o8 | an,
    K8 = Jn | o | w | an,
    H2 = xn | M | D0 | nn,
    E8 = w | an | o,
    C2 = Symbol.asyncIterator || Symbol("asyncIterator");
  class A8 {
    constructor(
      l,
      {
        highWaterMark: e0 = 16384,
        map: S0 = null,
        mapWritable: B0,
        byteLength: j0,
        byteLengthWritable: t,
      } = {}
    ) {
      (this.stream = l),
        (this.queue = new v()),
        (this.highWaterMark = e0),
        (this.buffered = 0),
        (this.error = null),
        (this.pipeline = null),
        (this.drains = null),
        (this.byteLength = t || j0 || s2),
        (this.map = B0 || S0),
        (this.afterWrite = a8.bind(this)),
        (this.afterUpdateNextTick = D8.bind(this));
    }
    get ended() {
      return (this.stream._duplexState & an) !== 0;
    }
    push(l) {
      return (this.stream._duplexState & E8) !== 0
        ? !1
        : (this.map !== null && (l = this.map(l)),
          (this.buffered += this.byteLength(l)),
          this.queue.push(l),
          this.buffered < this.highWaterMark
            ? ((this.stream._duplexState |= vn), !0)
            : ((this.stream._duplexState |= p8), !1));
    }
    shift() {
      const l = this.queue.shift();
      return (
        (this.buffered -= this.byteLength(l)),
        this.buffered === 0 && (this.stream._duplexState &= u0),
        l
      );
    }
    end(l) {
      typeof l == "function"
        ? this.stream.once("finish", l)
        : l != null && this.push(l),
        (this.stream._duplexState = (this.stream._duplexState | w) & x0);
    }
    autoBatch(l, e0) {
      const S0 = [],
        B0 = this.stream;
      for (S0.push(l); (B0._duplexState & m8) === o8; )
        S0.push(B0._writableState.shift());
      if ((B0._duplexState & M) !== 0) return e0(null);
      B0._writev(S0, e0);
    }
    update() {
      const l = this.stream;
      l._duplexState |= xn;
      do {
        for (; (l._duplexState & m8) === vn; ) {
          const e0 = this.shift();
          (l._duplexState |= d8), l._write(e0, this.afterWrite);
        }
        (l._duplexState & j8) === 0 && this.updateNonPrimary();
      } while (this.continueUpdate() === !0);
      l._duplexState &= P2;
    }
    updateNonPrimary() {
      const l = this.stream;
      if ((l._duplexState & G2) === w) {
        (l._duplexState = l._duplexState | Mn), l._final(W8.bind(this));
        return;
      }
      if ((l._duplexState & o) === s) {
        (l._duplexState & X) === 0 &&
          ((l._duplexState |= t2), l._destroy(m2.bind(this)));
        return;
      }
      (l._duplexState & G0) === f &&
        ((l._duplexState = (l._duplexState | t2) & c0), l._open(g8.bind(this)));
    }
    continueUpdate() {
      return (this.stream._duplexState & D0) === 0
        ? !1
        : ((this.stream._duplexState &= Fn), !0);
    }
    updateCallback() {
      (this.stream._duplexState & H2) === nn
        ? this.update()
        : this.updateNextTick();
    }
    updateNextTick() {
      (this.stream._duplexState & D0) === 0 &&
        ((this.stream._duplexState |= D0),
        (this.stream._duplexState & xn) === 0 &&
          queueMicrotask(this.afterUpdateNextTick));
    }
  }
  class P8 {
    constructor(
      l,
      {
        highWaterMark: e0 = 16384,
        map: S0 = null,
        mapReadable: B0,
        byteLength: j0,
        byteLengthReadable: t,
      } = {}
    ) {
      (this.stream = l),
        (this.queue = new v()),
        (this.highWaterMark = e0 === 0 ? 1 : e0),
        (this.buffered = 0),
        (this.readAhead = e0 > 0),
        (this.error = null),
        (this.pipeline = null),
        (this.byteLength = t || j0 || s2),
        (this.map = B0 || S0),
        (this.pipeTo = null),
        (this.afterRead = y8.bind(this)),
        (this.afterUpdateNextTick = X8.bind(this));
    }
    get ended() {
      return (this.stream._duplexState & $) !== 0;
    }
    pipe(l, e0) {
      if (this.pipeTo !== null)
        throw new Error("Can only pipe to one destination");
      if (
        (typeof e0 != "function" && (e0 = null),
        (this.stream._duplexState |= b0),
        (this.pipeTo = l),
        (this.pipeline = new H8(this.stream, l, e0)),
        e0 && this.stream.on("error", X2),
        r2(l))
      )
        (l._writableState.pipeline = this.pipeline),
          e0 && l.on("error", X2),
          l.on("finish", this.pipeline.finished.bind(this.pipeline));
      else {
        const S0 = this.pipeline.done.bind(this.pipeline, l),
          B0 = this.pipeline.done.bind(this.pipeline, l, null);
        l.on("error", S0),
          l.on("close", B0),
          l.on("finish", this.pipeline.finished.bind(this.pipeline));
      }
      l.on("drain", O8.bind(this)),
        this.stream.emit("piping", l),
        l.emit("pipe", this.stream);
    }
    push(l) {
      const e0 = this.stream;
      return l === null
        ? ((this.highWaterMark = 0),
          (e0._duplexState = (e0._duplexState | g0) & T0),
          !1)
        : this.map !== null && ((l = this.map(l)), l === null)
        ? ((e0._duplexState &= y0), this.buffered < this.highWaterMark)
        : ((this.buffered += this.byteLength(l)),
          this.queue.push(l),
          (e0._duplexState = (e0._duplexState | u) & y0),
          this.buffered < this.highWaterMark);
    }
    shift() {
      const l = this.queue.shift();
      return (
        (this.buffered -= this.byteLength(l)),
        this.buffered === 0 && (this.stream._duplexState &= v0),
        l
      );
    }
    unshift(l) {
      const e0 = [this.map !== null ? this.map(l) : l];
      for (; this.buffered > 0; ) e0.push(this.shift());
      for (let S0 = 0; S0 < e0.length - 1; S0++) {
        const B0 = e0[S0];
        (this.buffered += this.byteLength(B0)), this.queue.push(B0);
      }
      this.push(e0[e0.length - 1]);
    }
    read() {
      const l = this.stream;
      if ((l._duplexState & H0) === u) {
        const e0 = this.shift();
        return (
          this.pipeTo !== null &&
            this.pipeTo.write(e0) === !1 &&
            (l._duplexState &= E0),
          (l._duplexState & h0) !== 0 && l.emit("data", e0),
          e0
        );
      }
      return (
        this.readAhead === !1 && ((l._duplexState |= y), this.updateNextTick()),
        null
      );
    }
    drain() {
      const l = this.stream;
      for (; (l._duplexState & H0) === u && (l._duplexState & N) !== 0; ) {
        const e0 = this.shift();
        this.pipeTo !== null &&
          this.pipeTo.write(e0) === !1 &&
          (l._duplexState &= E0),
          (l._duplexState & h0) !== 0 && l.emit("data", e0);
      }
    }
    update() {
      const l = this.stream;
      l._duplexState |= k;
      do {
        for (
          this.drain();
          this.buffered < this.highWaterMark && (l._duplexState & R8) === y;

        )
          (l._duplexState |= G), l._read(this.afterRead), this.drain();
        (l._duplexState & u8) === M0 &&
          ((l._duplexState |= O), l.emit("readable")),
          (l._duplexState & m0) === 0 && this.updateNonPrimary();
      } while (this.continueUpdate() === !0);
      l._duplexState &= Tn;
    }
    updateNonPrimary() {
      const l = this.stream;
      if (
        ((l._duplexState & K0) === g0 &&
          ((l._duplexState = (l._duplexState | $) & z0),
          l.emit("end"),
          (l._duplexState & C) === x && (l._duplexState |= s),
          this.pipeTo !== null && this.pipeTo.end()),
        (l._duplexState & o) === s)
      ) {
        (l._duplexState & X) === 0 &&
          ((l._duplexState |= t2), l._destroy(m2.bind(this)));
        return;
      }
      (l._duplexState & G0) === f &&
        ((l._duplexState = (l._duplexState | t2) & c0), l._open(g8.bind(this)));
    }
    continueUpdate() {
      return (this.stream._duplexState & o0) === 0
        ? !1
        : ((this.stream._duplexState &= Hn), !0);
    }
    updateCallback() {
      (this.stream._duplexState & x8) === p
        ? this.update()
        : this.updateNextTick();
    }
    updateNextTickIfOpen() {
      (this.stream._duplexState & Y8) === 0 &&
        ((this.stream._duplexState |= o0),
        (this.stream._duplexState & k) === 0 &&
          queueMicrotask(this.afterUpdateNextTick));
    }
    updateNextTick() {
      (this.stream._duplexState & o0) === 0 &&
        ((this.stream._duplexState |= o0),
        (this.stream._duplexState & k) === 0 &&
          queueMicrotask(this.afterUpdateNextTick));
    }
  }
  class G8 {
    constructor(l) {
      (this.data = null),
        (this.afterTransform = dn.bind(l)),
        (this.afterFinal = null);
    }
  }
  class H8 {
    constructor(l, e0, S0) {
      (this.from = l),
        (this.to = e0),
        (this.afterPipe = S0),
        (this.error = null),
        (this.pipeToFinished = !1);
    }
    finished() {
      this.pipeToFinished = !0;
    }
    done(l, e0) {
      if (
        (e0 && (this.error = e0),
        l === this.to && ((this.to = null), this.from !== null))
      ) {
        ((this.from._duplexState & $) === 0 || !this.pipeToFinished) &&
          this.from.destroy(
            this.error || new Error("Writable stream closed prematurely")
          );
        return;
      }
      if (l === this.from && ((this.from = null), this.to !== null)) {
        (l._duplexState & $) === 0 &&
          this.to.destroy(
            this.error || new Error("Readable stream closed before ending")
          );
        return;
      }
      this.afterPipe !== null && this.afterPipe(this.error),
        (this.to = this.from = this.afterPipe = null);
    }
  }
  function O8() {
    (this.stream._duplexState |= b0), this.updateCallback();
  }
  function W8(t0) {
    const l = this.stream;
    t0 && l.destroy(t0),
      (l._duplexState & o) === 0 && ((l._duplexState |= an), l.emit("finish")),
      (l._duplexState & C) === x && (l._duplexState |= s),
      (l._duplexState &= Q0),
      (l._duplexState & xn) === 0 ? this.update() : this.updateNextTick();
  }
  function m2(t0) {
    const l = this.stream;
    !t0 && this.error !== S && (t0 = this.error),
      t0 && l.emit("error", t0),
      (l._duplexState |= H),
      l.emit("close");
    const e0 = l._readableState,
      S0 = l._writableState;
    if (
      (e0 !== null && e0.pipeline !== null && e0.pipeline.done(l, t0),
      S0 !== null)
    ) {
      for (; S0.drains !== null && S0.drains.length > 0; )
        S0.drains.shift().resolve(!1);
      S0.pipeline !== null && S0.pipeline.done(l, t0);
    }
  }
  function a8(t0) {
    const l = this.stream;
    t0 && l.destroy(t0),
      (l._duplexState &= K),
      this.drains !== null && q8(this.drains),
      (l._duplexState & t8) === Jn &&
        ((l._duplexState &= F0),
        (l._duplexState & Ln) === Ln && l.emit("drain")),
      this.updateCallback();
  }
  function y8(t0) {
    t0 && this.stream.destroy(t0),
      (this.stream._duplexState &= p0),
      this.readAhead === !1 &&
        (this.stream._duplexState & j) === 0 &&
        (this.stream._duplexState &= Qn),
      this.updateCallback();
  }
  function X8() {
    (this.stream._duplexState & k) === 0 &&
      ((this.stream._duplexState &= Hn), this.update());
  }
  function D8() {
    (this.stream._duplexState & xn) === 0 &&
      ((this.stream._duplexState &= Fn), this.update());
  }
  function q8(t0) {
    for (let l = 0; l < t0.length; l++)
      --t0[l].writes === 0 && (t0.shift().resolve(!0), l--);
  }
  function g8(t0) {
    const l = this.stream;
    t0 && l.destroy(t0),
      (l._duplexState & s) === 0 &&
        ((l._duplexState & P0) === 0 && (l._duplexState |= p),
        (l._duplexState & V8) === 0 && (l._duplexState |= nn),
        l.emit("open")),
      (l._duplexState &= I),
      l._writableState !== null && l._writableState.updateCallback(),
      l._readableState !== null && l._readableState.updateCallback();
  }
  function dn(t0, l) {
    l != null && this.push(l), this._writableState.afterWrite(t0);
  }
  function U8(t0) {
    this._readableState !== null &&
      (t0 === "data" &&
        ((this._duplexState |= h0 | N0), this._readableState.updateNextTick()),
      t0 === "readable" &&
        ((this._duplexState |= W), this._readableState.updateNextTick())),
      this._writableState !== null &&
        t0 === "drain" &&
        ((this._duplexState |= Ln), this._writableState.updateNextTick());
  }
  class h2 extends Q {
    constructor(l) {
      super(),
        (this._duplexState = 0),
        (this._readableState = null),
        (this._writableState = null),
        l &&
          (l.open && (this._open = l.open),
          l.destroy && (this._destroy = l.destroy),
          l.predestroy && (this._predestroy = l.predestroy),
          l.signal && l.signal.addEventListener("abort", l8.bind(this))),
        this.on("newListener", U8);
    }
    _open(l) {
      l(null);
    }
    _destroy(l) {
      l(null);
    }
    _predestroy() {}
    get readable() {
      return this._readableState !== null ? !0 : void 0;
    }
    get writable() {
      return this._writableState !== null ? !0 : void 0;
    }
    get destroyed() {
      return (this._duplexState & H) !== 0;
    }
    get destroying() {
      return (this._duplexState & o) !== 0;
    }
    destroy(l) {
      (this._duplexState & o) === 0 &&
        (l || (l = S),
        (this._duplexState = (this._duplexState | s) & E),
        this._readableState !== null &&
          ((this._readableState.highWaterMark = 0),
          (this._readableState.error = l)),
        this._writableState !== null &&
          ((this._writableState.highWaterMark = 0),
          (this._writableState.error = l)),
        (this._duplexState |= F),
        this._predestroy(),
        (this._duplexState &= d),
        this._readableState !== null && this._readableState.updateNextTick(),
        this._writableState !== null && this._writableState.updateNextTick());
    }
  }
  class S2 extends h2 {
    constructor(l) {
      super(l),
        (this._duplexState |= f | an | y),
        (this._readableState = new P8(this, l)),
        l &&
          (this._readableState.readAhead === !1 && (this._duplexState &= Qn),
          l.read && (this._read = l.read),
          l.eagerOpen && this._readableState.updateNextTick(),
          l.encoding && this.setEncoding(l.encoding));
    }
    setEncoding(l) {
      const e0 = new Z(l),
        S0 = this._readableState.map || $8;
      return (this._readableState.map = B0), this;
      function B0(j0) {
        const t = e0.push(j0);
        return t === "" && (j0.byteLength !== 0 || e0.remaining > 0)
          ? null
          : S0(t);
      }
    }
    _read(l) {
      l(null);
    }
    pipe(l, e0) {
      return (
        this._readableState.updateNextTick(), this._readableState.pipe(l, e0), l
      );
    }
    read() {
      return this._readableState.updateNextTick(), this._readableState.read();
    }
    push(l) {
      return (
        this._readableState.updateNextTickIfOpen(), this._readableState.push(l)
      );
    }
    unshift(l) {
      return (
        this._readableState.updateNextTickIfOpen(),
        this._readableState.unshift(l)
      );
    }
    resume() {
      return (
        (this._duplexState |= N0), this._readableState.updateNextTick(), this
      );
    }
    pause() {
      return (
        (this._duplexState &= this._readableState.readAhead === !1 ? Nn : Cn),
        this
      );
    }
    static _fromAsyncIterator(l, e0) {
      let S0;
      const B0 = new S2({
        ...e0,
        read(t) {
          l.next().then(j0).then(t.bind(null, null)).catch(t);
        },
        predestroy() {
          S0 = l.return();
        },
        destroy(t) {
          if (!S0) return t(null);
          S0.then(t.bind(null, null)).catch(t);
        },
      });
      return B0;
      function j0(t) {
        t.done ? B0.push(null) : B0.push(t.value);
      }
    }
    static from(l, e0) {
      if (_8(l)) return l;
      if (l[C2]) return this._fromAsyncIterator(l[C2](), e0);
      Array.isArray(l) || (l = l === void 0 ? [] : [l]);
      let S0 = 0;
      return new S2({
        ...e0,
        read(B0) {
          this.push(S0 === l.length ? null : l[S0++]), B0(null);
        },
      });
    }
    static isBackpressured(l) {
      return (
        (l._duplexState & c8) !== 0 ||
        l._readableState.buffered >= l._readableState.highWaterMark
      );
    }
    static isPaused(l) {
      return (l._duplexState & j) === 0;
    }
    [C2]() {
      const l = this;
      let e0 = null,
        S0 = null,
        B0 = null;
      return (
        this.on("error", (z) => {
          e0 = z;
        }),
        this.on("readable", j0),
        this.on("close", t),
        {
          [C2]() {
            return this;
          },
          next() {
            return new Promise(function (z, D) {
              (S0 = z), (B0 = D);
              const _ = l.read();
              _ !== null ? a(_) : (l._duplexState & H) !== 0 && a(null);
            });
          },
          return() {
            return r(null);
          },
          throw(z) {
            return r(z);
          },
        }
      );
      function j0() {
        S0 !== null && a(l.read());
      }
      function t() {
        S0 !== null && a(null);
      }
      function a(z) {
        B0 !== null &&
          (e0
            ? B0(e0)
            : z === null && (l._duplexState & $) === 0
            ? B0(S)
            : S0({ value: z, done: z === null }),
          (B0 = S0 = null));
      }
      function r(z) {
        return (
          l.destroy(z),
          new Promise((D, _) => {
            if (l._duplexState & H) return D({ value: void 0, done: !0 });
            l.once("close", function () {
              z ? _(z) : D({ value: void 0, done: !0 });
            });
          })
        );
      }
    }
  }
  class I8 extends h2 {
    constructor(l) {
      super(l),
        (this._duplexState |= f | $),
        (this._writableState = new A8(this, l)),
        l &&
          (l.writev && (this._writev = l.writev),
          l.write && (this._write = l.write),
          l.final && (this._final = l.final),
          l.eagerOpen && this._writableState.updateNextTick());
    }
    cork() {
      this._duplexState |= V;
    }
    uncork() {
      (this._duplexState &= hn), this._writableState.updateNextTick();
    }
    _writev(l, e0) {
      e0(null);
    }
    _write(l, e0) {
      this._writableState.autoBatch(l, e0);
    }
    _final(l) {
      l(null);
    }
    static isBackpressured(l) {
      return (l._duplexState & K8) !== 0;
    }
    static drained(l) {
      if (l.destroyed) return Promise.resolve(!1);
      const e0 = l._writableState,
        B0 =
          (Q8(l) ? Math.min(1, e0.queue.length) : e0.queue.length) +
          (l._duplexState & sn ? 1 : 0);
      return B0 === 0
        ? Promise.resolve(!0)
        : (e0.drains === null && (e0.drains = []),
          new Promise((j0) => {
            e0.drains.push({ writes: B0, resolve: j0 });
          }));
    }
    write(l) {
      return this._writableState.updateNextTick(), this._writableState.push(l);
    }
    end(l) {
      return (
        this._writableState.updateNextTick(), this._writableState.end(l), this
      );
    }
  }
  class O2 extends S2 {
    constructor(l) {
      super(l),
        (this._duplexState = f | (this._duplexState & y)),
        (this._writableState = new A8(this, l)),
        l &&
          (l.writev && (this._writev = l.writev),
          l.write && (this._write = l.write),
          l.final && (this._final = l.final));
    }
    cork() {
      this._duplexState |= V;
    }
    uncork() {
      (this._duplexState &= hn), this._writableState.updateNextTick();
    }
    _writev(l, e0) {
      e0(null);
    }
    _write(l, e0) {
      this._writableState.autoBatch(l, e0);
    }
    _final(l) {
      l(null);
    }
    write(l) {
      return this._writableState.updateNextTick(), this._writableState.push(l);
    }
    end(l) {
      return (
        this._writableState.updateNextTick(), this._writableState.end(l), this
      );
    }
  }
  class W2 extends O2 {
    constructor(l) {
      super(l),
        (this._transformState = new G8(this)),
        l &&
          (l.transform && (this._transform = l.transform),
          l.flush && (this._flush = l.flush));
    }
    _write(l, e0) {
      this._readableState.buffered >= this._readableState.highWaterMark
        ? (this._transformState.data = l)
        : this._transform(l, this._transformState.afterTransform);
    }
    _read(l) {
      if (this._transformState.data !== null) {
        const e0 = this._transformState.data;
        (this._transformState.data = null),
          l(null),
          this._transform(e0, this._transformState.afterTransform);
      } else l(null);
    }
    destroy(l) {
      super.destroy(l),
        this._transformState.data !== null &&
          ((this._transformState.data = null),
          this._transformState.afterTransform());
    }
    _transform(l, e0) {
      e0(null, l);
    }
    _flush(l) {
      l(null);
    }
    _final(l) {
      (this._transformState.afterFinal = l), this._flush(h8.bind(this));
    }
  }
  class i8 extends W2 {}
  function h8(t0, l) {
    const e0 = this._transformState.afterFinal;
    if (t0) return e0(t0);
    l != null && this.push(l), this.push(null), e0(null);
  }
  function T8(...t0) {
    return new Promise((l, e0) =>
      gn(...t0, (S0) => {
        if (S0) return e0(S0);
        l();
      })
    );
  }
  function gn(t0, ...l) {
    const e0 = Array.isArray(t0) ? [...t0, ...l] : [t0, ...l],
      S0 =
        e0.length && typeof e0[e0.length - 1] == "function" ? e0.pop() : null;
    if (e0.length < 2) throw new Error("Pipeline requires at least 2 streams");
    let B0 = e0[0],
      j0 = null,
      t = null;
    for (let z = 1; z < e0.length; z++)
      (j0 = e0[z]),
        r2(B0) ? B0.pipe(j0, r) : (a(B0, !0, z > 1, r), B0.pipe(j0)),
        (B0 = j0);
    if (S0) {
      let z = !1;
      const D =
        r2(j0) || !!(j0._writableState && j0._writableState.autoDestroy);
      j0.on("error", (_) => {
        t === null && (t = _);
      }),
        j0.on("finish", () => {
          (z = !0), D || S0(t);
        }),
        D && j0.on("close", () => S0(t || (z ? null : m)));
    }
    return j0;
    function a(z, D, _, a0) {
      z.on("error", a0), z.on("close", i0);
      function i0() {
        if (
          (z._readableState && !z._readableState.ended) ||
          (_ && z._writableState && !z._writableState.ended)
        )
          return a0(m);
      }
    }
    function r(z) {
      if (!(!z || t)) {
        t = z;
        for (const D of e0) D.destroy(z);
      }
    }
  }
  function $8(t0) {
    return t0;
  }
  function r8(t0) {
    return !!t0._readableState || !!t0._writableState;
  }
  function r2(t0) {
    return typeof t0._duplexState == "number" && r8(t0);
  }
  function f2(t0) {
    return !!t0._readableState && t0._readableState.ended;
  }
  function Sn(t0) {
    return !!t0._writableState && t0._writableState.ended;
  }
  function en(t0, l = {}) {
    const e0 =
      (t0._readableState && t0._readableState.error) ||
      (t0._writableState && t0._writableState.error);
    return !l.all && e0 === S ? null : e0;
  }
  function _8(t0) {
    return r2(t0) && t0.readable;
  }
  function y2(t0) {
    return (t0._duplexState & f) !== f || (t0._duplexState & X) !== 0;
  }
  function fn(t0) {
    return (
      typeof t0 == "object" && t0 !== null && typeof t0.byteLength == "number"
    );
  }
  function s2(t0) {
    return fn(t0) ? t0.byteLength : 1024;
  }
  function X2() {}
  function l8() {
    this.destroy(new Error("Stream aborted."));
  }
  function Q8(t0) {
    return (
      t0._writev !== I8.prototype._writev && t0._writev !== O2.prototype._writev
    );
  }
  return (
    (streamx = {
      pipeline: gn,
      pipelinePromise: T8,
      isStream: r8,
      isStreamx: r2,
      isEnded: f2,
      isFinished: Sn,
      isDisturbed: y2,
      getStreamError: en,
      Stream: h2,
      Writable: I8,
      Readable: S2,
      Duplex: O2,
      Transform: W2,
      PassThrough: i8,
    }),
    streamx
  );
}
var browser = { exports: {} },
  ascii,
  hasRequiredAscii;
function requireAscii() {
  if (hasRequiredAscii) return ascii;
  hasRequiredAscii = 1;
  function Q(v) {
    return v.length;
  }
  function S(v) {
    const Z = v.byteLength;
    let g = "";
    for (let f = 0; f < Z; f++) g += String.fromCharCode(v[f]);
    return g;
  }
  function m(v, Z, g = 0, f = Q(Z)) {
    const F = Math.min(f, v.byteLength - g);
    for (let s = 0; s < F; s++) v[g + s] = Z.charCodeAt(s);
    return F;
  }
  return (ascii = { byteLength: Q, toString: S, write: m }), ascii;
}
var base64, hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return base64;
  hasRequiredBase64 = 1;
  const Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    S = new Uint8Array(256);
  for (let g = 0; g < Q.length; g++) S[Q.charCodeAt(g)] = g;
  (S[45] = 62), (S[95] = 63);
  function m(g) {
    let f = g.length;
    return (
      g.charCodeAt(f - 1) === 61 && f--,
      f > 1 && g.charCodeAt(f - 1) === 61 && f--,
      (f * 3) >>> 2
    );
  }
  function v(g) {
    const f = g.byteLength;
    let F = "";
    for (let s = 0; s < f; s += 3)
      F +=
        Q[g[s] >> 2] +
        Q[((g[s] & 3) << 4) | (g[s + 1] >> 4)] +
        Q[((g[s + 1] & 15) << 2) | (g[s + 2] >> 6)] +
        Q[g[s + 2] & 63];
    return (
      f % 3 === 2
        ? (F = F.substring(0, F.length - 1) + "=")
        : f % 3 === 1 && (F = F.substring(0, F.length - 2) + "=="),
      F
    );
  }
  function Z(g, f, F = 0, s = m(f)) {
    const H = Math.min(s, g.byteLength - F);
    for (let c0 = 0, d = 0; d < H; c0 += 4) {
      const B = S[f.charCodeAt(c0)],
        k = S[f.charCodeAt(c0 + 1)],
        p = S[f.charCodeAt(c0 + 2)],
        u = S[f.charCodeAt(c0 + 3)];
      (g[d++] = (B << 2) | (k >> 4)),
        (g[d++] = ((k & 15) << 4) | (p >> 2)),
        (g[d++] = ((p & 3) << 6) | (u & 63));
    }
    return H;
  }
  return (base64 = { byteLength: m, toString: v, write: Z }), base64;
}
var hex, hasRequiredHex;
function requireHex() {
  if (hasRequiredHex) return hex;
  hasRequiredHex = 1;
  function Q(Z) {
    return Z.length >>> 1;
  }
  function S(Z) {
    const g = Z.byteLength;
    Z = new DataView(Z.buffer, Z.byteOffset, g);
    let f = "",
      F = 0;
    for (let s = g - (g % 4); F < s; F += 4)
      f += Z.getUint32(F).toString(16).padStart(8, "0");
    for (; F < g; F++) f += Z.getUint8(F).toString(16).padStart(2, "0");
    return f;
  }
  function m(Z, g, f = 0, F = Q(g)) {
    const s = Math.min(F, Z.byteLength - f);
    for (let H = 0; H < s; H++) {
      const c0 = v(g.charCodeAt(H * 2)),
        d = v(g.charCodeAt(H * 2 + 1));
      if (c0 === void 0 || d === void 0) return Z.subarray(0, H);
      Z[f + H] = (c0 << 4) | d;
    }
    return s;
  }
  hex = { byteLength: Q, toString: S, write: m };
  function v(Z) {
    if (Z >= 48 && Z <= 57) return Z - 48;
    if (Z >= 65 && Z <= 70) return Z - 65 + 10;
    if (Z >= 97 && Z <= 102) return Z - 97 + 10;
  }
  return hex;
}
var utf8, hasRequiredUtf8;
function requireUtf8() {
  if (hasRequiredUtf8) return utf8;
  hasRequiredUtf8 = 1;
  function Q(v) {
    let Z = 0;
    for (let g = 0, f = v.length; g < f; g++) {
      const F = v.charCodeAt(g);
      if (F >= 55296 && F <= 56319 && g + 1 < f) {
        const s = v.charCodeAt(g + 1);
        if (s >= 56320 && s <= 57343) {
          (Z += 4), g++;
          continue;
        }
      }
      F <= 127 ? (Z += 1) : F <= 2047 ? (Z += 2) : (Z += 3);
    }
    return Z;
  }
  let S;
  if (typeof TextDecoder < "u") {
    const v = new TextDecoder();
    S = function (g) {
      return v.decode(g);
    };
  } else
    S = function (Z) {
      const g = Z.byteLength;
      let f = "",
        F = 0;
      for (; F < g; ) {
        let s = Z[F];
        if (s <= 127) {
          (f += String.fromCharCode(s)), F++;
          continue;
        }
        let H = 0,
          c0 = 0;
        if (
          (s <= 223
            ? ((H = 1), (c0 = s & 31))
            : s <= 239
            ? ((H = 2), (c0 = s & 15))
            : s <= 244 && ((H = 3), (c0 = s & 7)),
          g - F - H > 0)
        ) {
          let d = 0;
          for (; d < H; )
            (s = Z[F + d + 1]), (c0 = (c0 << 6) | (s & 63)), (d += 1);
        } else (c0 = 65533), (H = g - F);
        (f += String.fromCodePoint(c0)), (F += H + 1);
      }
      return f;
    };
  let m;
  if (typeof TextEncoder < "u") {
    const v = new TextEncoder();
    m = function (g, f, F = 0, s = Q(f)) {
      const H = Math.min(s, g.byteLength - F);
      return v.encodeInto(f, g.subarray(F, F + H)), H;
    };
  } else
    m = function (Z, g, f = 0, F = Q(g)) {
      const s = Math.min(F, Z.byteLength - f);
      Z = Z.subarray(f, f + s);
      let H = 0,
        c0 = 0;
      for (; H < g.length; ) {
        const d = g.codePointAt(H);
        if (d <= 127) {
          (Z[c0++] = d), H++;
          continue;
        }
        let B = 0,
          k = 0;
        for (
          d <= 2047
            ? ((B = 6), (k = 192))
            : d <= 65535
            ? ((B = 12), (k = 224))
            : d <= 2097151 && ((B = 18), (k = 240)),
            Z[c0++] = k | (d >> B),
            B -= 6;
          B >= 0;

        )
          (Z[c0++] = 128 | ((d >> B) & 63)), (B -= 6);
        H += d >= 65536 ? 2 : 1;
      }
      return s;
    };
  return (utf8 = { byteLength: Q, toString: S, write: m }), utf8;
}
var utf16le, hasRequiredUtf16le;
function requireUtf16le() {
  if (hasRequiredUtf16le) return utf16le;
  hasRequiredUtf16le = 1;
  function Q(v) {
    return v.length * 2;
  }
  function S(v) {
    const Z = v.byteLength;
    let g = "";
    for (let f = 0; f < Z - 1; f += 2)
      g += String.fromCharCode(v[f] + v[f + 1] * 256);
    return g;
  }
  function m(v, Z, g = 0, f = Q(Z)) {
    const F = Math.min(f, v.byteLength - g);
    let s = F;
    for (let H = 0; H < Z.length && !((s -= 2) < 0); ++H) {
      const c0 = Z.charCodeAt(H),
        d = c0 >> 8,
        B = c0 % 256;
      (v[g + H * 2] = B), (v[g + H * 2 + 1] = d);
    }
    return F;
  }
  return (utf16le = { byteLength: Q, toString: S, write: m }), utf16le;
}
var hasRequiredBrowser;
function requireBrowser() {
  return (
    hasRequiredBrowser ||
      ((hasRequiredBrowser = 1),
      (function (Q, S) {
        const m = requireAscii(),
          v = requireBase64(),
          Z = requireHex(),
          g = requireUtf8(),
          f = requireUtf16le(),
          F = new Uint8Array(Uint16Array.of(255).buffer)[0] === 255;
        function s(w) {
          switch (w) {
            case "ascii":
              return m;
            case "base64":
              return v;
            case "hex":
              return Z;
            case "utf8":
            case "utf-8":
            case void 0:
            case null:
              return g;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return f;
            default:
              throw new Error(`Unknown encoding: ${w}`);
          }
        }
        function H(w) {
          return w instanceof Uint8Array;
        }
        function c0(w) {
          try {
            return s(w), !0;
          } catch {
            return !1;
          }
        }
        function d(w, V, K) {
          const x0 = new Uint8Array(w);
          return V !== void 0 && S.fill(x0, V, 0, x0.byteLength, K), x0;
        }
        function B(w) {
          return new Uint8Array(w);
        }
        function k(w) {
          return new Uint8Array(w);
        }
        function p(w, V) {
          return s(V).byteLength(w);
        }
        function u(w, V) {
          if (w === V) return 0;
          const K = Math.min(w.byteLength, V.byteLength);
          (w = new DataView(w.buffer, w.byteOffset, w.byteLength)),
            (V = new DataView(V.buffer, V.byteOffset, V.byteLength));
          let x0 = 0;
          for (let Q0 = K - (K % 4); x0 < Q0; x0 += 4) {
            const F0 = w.getUint32(x0, F),
              u0 = V.getUint32(x0, F);
            if (F0 !== u0) break;
          }
          for (; x0 < K; x0++) {
            const Q0 = w.getUint8(x0),
              F0 = V.getUint8(x0);
            if (Q0 < F0) return -1;
            if (Q0 > F0) return 1;
          }
          return w.byteLength > V.byteLength
            ? 1
            : w.byteLength < V.byteLength
            ? -1
            : 0;
        }
        function j(w, V) {
          V === void 0 && (V = w.reduce((Q0, F0) => Q0 + F0.byteLength, 0));
          const K = new Uint8Array(V);
          let x0 = 0;
          for (const Q0 of w) {
            if (x0 + Q0.byteLength > K.byteLength) {
              const F0 = Q0.subarray(0, K.byteLength - x0);
              return K.set(F0, x0), K;
            }
            K.set(Q0, x0), (x0 += Q0.byteLength);
          }
          return K;
        }
        function b0(w, V, K = 0, x0 = 0, Q0 = w.byteLength) {
          if (
            (Q0 > 0 && Q0 < x0) ||
            Q0 === x0 ||
            w.byteLength === 0 ||
            V.byteLength === 0
          )
            return 0;
          if (K < 0) throw new RangeError("targetStart is out of range");
          if (x0 < 0 || x0 >= w.byteLength)
            throw new RangeError("sourceStart is out of range");
          if (Q0 < 0) throw new RangeError("sourceEnd is out of range");
          K >= V.byteLength && (K = V.byteLength),
            Q0 > w.byteLength && (Q0 = w.byteLength),
            V.byteLength - K < Q0 - x0 && (Q0 = V.length - K + x0);
          const F0 = Q0 - x0;
          return (
            w === V ? V.copyWithin(K, x0, Q0) : V.set(w.subarray(x0, Q0), K), F0
          );
        }
        function g0(w, V) {
          if (w === V) return !0;
          if (w.byteLength !== V.byteLength) return !1;
          const K = w.byteLength;
          (w = new DataView(w.buffer, w.byteOffset, w.byteLength)),
            (V = new DataView(V.buffer, V.byteOffset, V.byteLength));
          let x0 = 0;
          for (let Q0 = K - (K % 4); x0 < Q0; x0 += 4)
            if (w.getUint32(x0, F) !== V.getUint32(x0, F)) return !1;
          for (; x0 < K; x0++) if (w.getUint8(x0) !== V.getUint8(x0)) return !1;
          return !0;
        }
        function h0(w, V, K, x0, Q0) {
          if (
            (typeof V == "string"
              ? typeof K == "string"
                ? ((Q0 = K), (K = 0), (x0 = w.byteLength))
                : typeof x0 == "string" && ((Q0 = x0), (x0 = w.byteLength))
              : typeof V == "number"
              ? (V = V & 255)
              : typeof V == "boolean" && (V = +V),
            K < 0 || w.byteLength < K || w.byteLength < x0)
          )
            throw new RangeError("Out of range index");
          if (
            (K === void 0 && (K = 0),
            x0 === void 0 && (x0 = w.byteLength),
            x0 <= K)
          )
            return w;
          if ((V || (V = 0), typeof V == "number"))
            for (let F0 = K; F0 < x0; ++F0) w[F0] = V;
          else {
            V = H(V) ? V : W(V, Q0);
            const F0 = V.byteLength;
            for (let u0 = 0; u0 < x0 - K; ++u0) w[u0 + K] = V[u0 % F0];
          }
          return w;
        }
        function W(w, V, K) {
          return typeof w == "string"
            ? O(w, V)
            : Array.isArray(w)
            ? $(w)
            : ArrayBuffer.isView(w)
            ? o0(w)
            : A0(w, V, K);
        }
        function O(w, V) {
          const K = s(V),
            x0 = new Uint8Array(K.byteLength(w));
          return K.write(x0, w, 0, x0.byteLength), x0;
        }
        function $(w) {
          const V = new Uint8Array(w.length);
          return V.set(w), V;
        }
        function o0(w) {
          const V = new Uint8Array(w.byteLength);
          return V.set(w), V;
        }
        function A0(w, V, K) {
          return new Uint8Array(w, V, K);
        }
        function y(w, V, K, x0) {
          return G(w, V, K, x0) !== -1;
        }
        function N(w, V, K, x0, Q0) {
          if (w.byteLength === 0) return -1;
          if (
            (typeof K == "string"
              ? ((x0 = K), (K = 0))
              : K === void 0
              ? (K = Q0 ? 0 : w.length - 1)
              : K < 0 && (K += w.byteLength),
            K >= w.byteLength)
          ) {
            if (Q0) return -1;
            K = w.byteLength - 1;
          } else if (K < 0)
            if (Q0) K = 0;
            else return -1;
          if (typeof V == "string") V = W(V, x0);
          else if (typeof V == "number")
            return (V = V & 255), Q0 ? w.indexOf(V, K) : w.lastIndexOf(V, K);
          if (V.byteLength === 0) return -1;
          if (Q0) {
            let F0 = -1;
            for (let u0 = K; u0 < w.byteLength; u0++)
              if (w[u0] === V[F0 === -1 ? 0 : u0 - F0]) {
                if ((F0 === -1 && (F0 = u0), u0 - F0 + 1 === V.byteLength))
                  return F0;
              } else F0 !== -1 && (u0 -= u0 - F0), (F0 = -1);
          } else {
            K + V.byteLength > w.byteLength &&
              (K = w.byteLength - V.byteLength);
            for (let F0 = K; F0 >= 0; F0--) {
              let u0 = !0;
              for (let Fn = 0; Fn < V.byteLength; Fn++)
                if (w[F0 + Fn] !== V[Fn]) {
                  u0 = !1;
                  break;
                }
              if (u0) return F0;
            }
          }
          return -1;
        }
        function G(w, V, K, x0) {
          return N(w, V, K, x0, !0);
        }
        function m0(w, V, K, x0) {
          return N(w, V, K, x0, !1);
        }
        function M0(w, V, K) {
          const x0 = w[V];
          (w[V] = w[K]), (w[K] = x0);
        }
        function N0(w) {
          const V = w.byteLength;
          if (V % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let K = 0; K < V; K += 2) M0(w, K, K + 1);
          return w;
        }
        function p0(w) {
          const V = w.byteLength;
          if (V % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let K = 0; K < V; K += 4) M0(w, K, K + 3), M0(w, K + 1, K + 2);
          return w;
        }
        function _0(w) {
          const V = w.byteLength;
          if (V % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let K = 0; K < V; K += 8)
            M0(w, K, K + 7),
              M0(w, K + 1, K + 6),
              M0(w, K + 2, K + 5),
              M0(w, K + 3, K + 4);
          return w;
        }
        function T0(w) {
          return w;
        }
        function y0(w, V, K = 0, x0 = w.byteLength) {
          const Q0 = w.byteLength;
          return K >= Q0 || x0 <= K
            ? ""
            : (K < 0 && (K = 0),
              x0 > Q0 && (x0 = Q0),
              (K !== 0 || x0 < Q0) && (w = w.subarray(K, x0)),
              s(V).toString(w));
        }
        function Cn(w, V, K, x0, Q0) {
          return (
            K === void 0
              ? (Q0 = "utf8")
              : x0 === void 0 && typeof K == "string"
              ? ((Q0 = K), (K = void 0))
              : Q0 === void 0 &&
                typeof x0 == "string" &&
                ((Q0 = x0), (x0 = void 0)),
            s(Q0).write(w, V, K, x0)
          );
        }
        function v0(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setFloat64(
              K,
              V,
              !0
            ),
            K + 8
          );
        }
        function z0(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setFloat32(
              K,
              V,
              !0
            ),
            K + 4
          );
        }
        function E0(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setUint32(
              K,
              V,
              !0
            ),
            K + 4
          );
        }
        function Hn(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setInt32(
              K,
              V,
              !0
            ),
            K + 4
          );
        }
        function Tn(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getFloat64(V, !0)
          );
        }
        function Qn(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getFloat32(V, !0)
          );
        }
        function Nn(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getUint32(V, !0)
          );
        }
        function Mn(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getInt32(V, !0)
          );
        }
        function xn(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setFloat64(
              K,
              V,
              !1
            ),
            K + 8
          );
        }
        function nn(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setFloat32(
              K,
              V,
              !1
            ),
            K + 4
          );
        }
        function vn(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setUint32(
              K,
              V,
              !1
            ),
            K + 4
          );
        }
        function Jn(w, V, K) {
          return (
            K === void 0 && (K = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).setInt32(
              K,
              V,
              !1
            ),
            K + 4
          );
        }
        function an(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getFloat64(V, !1)
          );
        }
        function Ln(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getFloat32(V, !1)
          );
        }
        function D0(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getUint32(V, !1)
          );
        }
        function sn(w, V) {
          return (
            V === void 0 && (V = 0),
            new DataView(w.buffer, w.byteOffset, w.byteLength).getInt32(V, !1)
          );
        }
        Q.exports = S = {
          isBuffer: H,
          isEncoding: c0,
          alloc: d,
          allocUnsafe: B,
          allocUnsafeSlow: k,
          byteLength: p,
          compare: u,
          concat: j,
          copy: b0,
          equals: g0,
          fill: h0,
          from: W,
          includes: y,
          indexOf: G,
          lastIndexOf: m0,
          swap16: N0,
          swap32: p0,
          swap64: _0,
          toBuffer: T0,
          toString: y0,
          write: Cn,
          writeDoubleLE: v0,
          writeFloatLE: z0,
          writeUInt32LE: E0,
          writeInt32LE: Hn,
          readDoubleLE: Tn,
          readFloatLE: Qn,
          readUInt32LE: Nn,
          readInt32LE: Mn,
          writeDoubleBE: xn,
          writeFloatBE: nn,
          writeUInt32BE: vn,
          writeInt32BE: Jn,
          readDoubleBE: an,
          readFloatBE: Ln,
          readUInt32BE: D0,
          readInt32BE: sn,
        };
      })(browser, browser.exports)),
    browser.exports
  );
}
var headers = {},
  hasRequiredHeaders;
function requireHeaders() {
  if (hasRequiredHeaders) return headers;
  hasRequiredHeaders = 1;
  const Q = requireBrowser(),
    S = "0000000000000000000",
    m = "7777777777777777777",
    v = 48,
    Z = Q.from([117, 115, 116, 97, 114, 0]),
    g = Q.from([v, v]),
    f = Q.from([117, 115, 116, 97, 114, 32]),
    F = Q.from([32, 0]),
    s = 4095,
    H = 257,
    c0 = 263;
  (headers.decodeLongPath = function (N, G) {
    return o0(N, 0, N.length, G);
  }),
    (headers.encodePax = function (N) {
      let G = "";
      N.name &&
        (G += A0(
          " path=" +
            N.name +
            `
`
        )),
        N.linkname &&
          (G += A0(
            " linkpath=" +
              N.linkname +
              `
`
          ));
      const m0 = N.pax;
      if (m0)
        for (const M0 in m0)
          G += A0(
            " " +
              M0 +
              "=" +
              m0[M0] +
              `
`
          );
      return Q.from(G);
    }),
    (headers.decodePax = function (N) {
      const G = {};
      for (; N.length; ) {
        let m0 = 0;
        for (; m0 < N.length && N[m0] !== 32; ) m0++;
        const M0 = parseInt(Q.toString(N.subarray(0, m0)), 10);
        if (!M0) return G;
        const N0 = Q.toString(N.subarray(m0 + 1, M0 - 1)),
          p0 = N0.indexOf("=");
        if (p0 === -1) return G;
        (G[N0.slice(0, p0)] = N0.slice(p0 + 1)), (N = N.subarray(M0));
      }
      return G;
    }),
    (headers.encode = function (N) {
      const G = Q.alloc(512);
      let m0 = N.name,
        M0 = "";
      if (
        (N.typeflag === 5 && m0[m0.length - 1] !== "/" && (m0 += "/"),
        Q.byteLength(m0) !== m0.length)
      )
        return null;
      for (; Q.byteLength(m0) > 100; ) {
        const N0 = m0.indexOf("/");
        if (N0 === -1) return null;
        (M0 += M0 ? "/" + m0.slice(0, N0) : m0.slice(0, N0)),
          (m0 = m0.slice(N0 + 1));
      }
      return Q.byteLength(m0) > 100 ||
        Q.byteLength(M0) > 155 ||
        (N.linkname && Q.byteLength(N.linkname) > 100)
        ? null
        : (Q.write(G, m0),
          Q.write(G, g0(N.mode & s, 6), 100),
          Q.write(G, g0(N.uid, 6), 108),
          Q.write(G, g0(N.gid, 6), 116),
          W(N.size, G, 124),
          Q.write(G, g0((N.mtime.getTime() / 1e3) | 0, 11), 136),
          (G[156] = v + u(N.type)),
          N.linkname && Q.write(G, N.linkname, 157),
          Q.copy(Z, G, H),
          Q.copy(g, G, c0),
          N.uname && Q.write(G, N.uname, 265),
          N.gname && Q.write(G, N.gname, 297),
          Q.write(G, g0(N.devmajor || 0, 6), 329),
          Q.write(G, g0(N.devminor || 0, 6), 337),
          M0 && Q.write(G, M0, 345),
          Q.write(G, g0(b0(G), 6), 148),
          G);
    }),
    (headers.decode = function (N, G, m0) {
      let M0 = N[156] === 0 ? 0 : N[156] - v,
        N0 = o0(N, 0, 100, G);
      const p0 = $(N, 100, 8),
        _0 = $(N, 108, 8),
        T0 = $(N, 116, 8),
        y0 = $(N, 124, 12),
        Cn = $(N, 136, 12),
        v0 = p(M0),
        z0 = N[157] === 0 ? null : o0(N, 157, 100, G),
        E0 = o0(N, 265, 32),
        Hn = o0(N, 297, 32),
        Tn = $(N, 329, 8),
        Qn = $(N, 337, 8),
        Nn = b0(N);
      if (Nn === 8 * 32) return null;
      if (Nn !== $(N, 148, 8))
        throw new Error(
          "Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?"
        );
      if (d(N)) N[345] && (N0 = o0(N, 345, 155, G) + "/" + N0);
      else if (!B(N)) {
        if (!m0) throw new Error("Invalid tar header: unknown format.");
      }
      return (
        M0 === 0 && N0 && N0[N0.length - 1] === "/" && (M0 = 5),
        {
          name: N0,
          mode: p0,
          uid: _0,
          gid: T0,
          size: y0,
          mtime: new Date(1e3 * Cn),
          type: v0,
          linkname: z0,
          uname: E0,
          gname: Hn,
          devmajor: Tn,
          devminor: Qn,
          pax: null,
        }
      );
    });
  function d(y) {
    return Q.equals(Z, y.subarray(H, H + 6));
  }
  function B(y) {
    return (
      Q.equals(f, y.subarray(H, H + 6)) && Q.equals(F, y.subarray(c0, c0 + 2))
    );
  }
  function k(y, N, G) {
    return typeof y != "number"
      ? G
      : ((y = ~~y), y >= N ? N : y >= 0 || ((y += N), y >= 0) ? y : 0);
  }
  function p(y) {
    switch (y) {
      case 0:
        return "file";
      case 1:
        return "link";
      case 2:
        return "symlink";
      case 3:
        return "character-device";
      case 4:
        return "block-device";
      case 5:
        return "directory";
      case 6:
        return "fifo";
      case 7:
        return "contiguous-file";
      case 72:
        return "pax-header";
      case 55:
        return "pax-global-header";
      case 27:
        return "gnu-long-link-path";
      case 28:
      case 30:
        return "gnu-long-path";
    }
    return null;
  }
  function u(y) {
    switch (y) {
      case "file":
        return 0;
      case "link":
        return 1;
      case "symlink":
        return 2;
      case "character-device":
        return 3;
      case "block-device":
        return 4;
      case "directory":
        return 5;
      case "fifo":
        return 6;
      case "contiguous-file":
        return 7;
      case "pax-header":
        return 72;
    }
    return 0;
  }
  function j(y, N, G, m0) {
    for (; G < m0; G++) if (y[G] === N) return G;
    return m0;
  }
  function b0(y) {
    let N = 256;
    for (let G = 0; G < 148; G++) N += y[G];
    for (let G = 156; G < 512; G++) N += y[G];
    return N;
  }
  function g0(y, N) {
    return (
      (y = y.toString(8)),
      y.length > N ? m.slice(0, N) + " " : S.slice(0, N - y.length) + y + " "
    );
  }
  function h0(y, N, G) {
    N[G] = 128;
    for (let m0 = 11; m0 > 0; m0--)
      (N[G + m0] = y & 255), (y = Math.floor(y / 256));
  }
  function W(y, N, G) {
    y.toString(8).length > 11 ? h0(y, N, G) : Q.write(N, g0(y, 11), G);
  }
  function O(y) {
    let N;
    if (y[0] === 128) N = !0;
    else if (y[0] === 255) N = !1;
    else return null;
    const G = [];
    let m0;
    for (m0 = y.length - 1; m0 > 0; m0--) {
      const p0 = y[m0];
      N ? G.push(p0) : G.push(255 - p0);
    }
    let M0 = 0;
    const N0 = G.length;
    for (m0 = 0; m0 < N0; m0++) M0 += G[m0] * Math.pow(256, m0);
    return N ? M0 : -1 * M0;
  }
  function $(y, N, G) {
    if (((y = y.subarray(N, N + G)), (N = 0), y[N] & 128)) return O(y);
    {
      for (; N < y.length && y[N] === 32; ) N++;
      const m0 = k(j(y, 32, N, y.length), y.length, y.length);
      for (; N < m0 && y[N] === 0; ) N++;
      return m0 === N ? 0 : parseInt(Q.toString(y.subarray(N, m0)), 8);
    }
  }
  function o0(y, N, G, m0) {
    return Q.toString(y.subarray(N, j(y, 0, N, N + G)), m0);
  }
  function A0(y) {
    const N = Q.byteLength(y);
    let G = Math.floor(Math.log(N) / Math.log(10)) + 1;
    return N + G >= Math.pow(10, G) && G++, N + G + y;
  }
  return headers;
}
var extract, hasRequiredExtract;
function requireExtract() {
  if (hasRequiredExtract) return extract;
  hasRequiredExtract = 1;
  const { Writable: Q, Readable: S, getStreamError: m } = requireStreamx(),
    v = requireFastFifo(),
    Z = requireBrowser(),
    g = requireHeaders(),
    f = Z.alloc(0);
  class F {
    constructor() {
      (this.buffered = 0),
        (this.shifted = 0),
        (this.queue = new v()),
        (this._offset = 0);
    }
    push(k) {
      (this.buffered += k.byteLength), this.queue.push(k);
    }
    shiftFirst(k) {
      return this._buffered === 0 ? null : this._next(k);
    }
    shift(k) {
      if (k > this.buffered) return null;
      if (k === 0) return f;
      let p = this._next(k);
      if (k === p.byteLength) return p;
      const u = [p];
      for (; (k -= p.byteLength) > 0; ) (p = this._next(k)), u.push(p);
      return Z.concat(u);
    }
    _next(k) {
      const p = this.queue.peek(),
        u = p.byteLength - this._offset;
      if (k >= u) {
        const j = this._offset ? p.subarray(this._offset, p.byteLength) : p;
        return (
          this.queue.shift(),
          (this._offset = 0),
          (this.buffered -= u),
          (this.shifted += u),
          j
        );
      }
      return (
        (this.buffered -= k),
        (this.shifted += k),
        p.subarray(this._offset, (this._offset += k))
      );
    }
  }
  class s extends S {
    constructor(k, p, u) {
      super(), (this.header = p), (this.offset = u), (this._parent = k);
    }
    _read(k) {
      this.header.size === 0 && this.push(null),
        this._parent._stream === this && this._parent._update(),
        k(null);
    }
    _predestroy() {
      this._parent.destroy(m(this));
    }
    _detach() {
      this._parent._stream === this &&
        ((this._parent._stream = null),
        (this._parent._missing = d(this.header.size)),
        this._parent._update());
    }
    _destroy(k) {
      this._detach(), k(null);
    }
  }
  class H extends Q {
    constructor(k) {
      super(k),
        k || (k = {}),
        (this._buffer = new F()),
        (this._offset = 0),
        (this._header = null),
        (this._stream = null),
        (this._missing = 0),
        (this._longHeader = !1),
        (this._callback = c0),
        (this._locked = !1),
        (this._finished = !1),
        (this._pax = null),
        (this._paxGlobal = null),
        (this._gnuLongPath = null),
        (this._gnuLongLinkPath = null),
        (this._filenameEncoding = k.filenameEncoding || "utf-8"),
        (this._allowUnknownFormat = !!k.allowUnknownFormat),
        (this._unlockBound = this._unlock.bind(this));
    }
    _unlock(k) {
      if (((this._locked = !1), k)) {
        this.destroy(k), this._continueWrite(k);
        return;
      }
      this._update();
    }
    _consumeHeader() {
      if (this._locked) return !1;
      this._offset = this._buffer.shifted;
      try {
        this._header = g.decode(
          this._buffer.shift(512),
          this._filenameEncoding,
          this._allowUnknownFormat
        );
      } catch (k) {
        return this._continueWrite(k), !1;
      }
      if (!this._header) return !0;
      switch (this._header.type) {
        case "gnu-long-path":
        case "gnu-long-link-path":
        case "pax-global-header":
        case "pax-header":
          return (
            (this._longHeader = !0), (this._missing = this._header.size), !0
          );
      }
      return (
        (this._locked = !0),
        this._applyLongHeaders(),
        this._header.size === 0 || this._header.type === "directory"
          ? (this.emit(
              "entry",
              this._header,
              this._createStream(),
              this._unlockBound
            ),
            !0)
          : ((this._stream = this._createStream()),
            (this._missing = this._header.size),
            this.emit("entry", this._header, this._stream, this._unlockBound),
            !0)
      );
    }
    _applyLongHeaders() {
      this._gnuLongPath &&
        ((this._header.name = this._gnuLongPath), (this._gnuLongPath = null)),
        this._gnuLongLinkPath &&
          ((this._header.linkname = this._gnuLongLinkPath),
          (this._gnuLongLinkPath = null)),
        this._pax &&
          (this._pax.path && (this._header.name = this._pax.path),
          this._pax.linkpath && (this._header.linkname = this._pax.linkpath),
          this._pax.size && (this._header.size = parseInt(this._pax.size, 10)),
          (this._header.pax = this._pax),
          (this._pax = null));
    }
    _decodeLongHeader(k) {
      switch (this._header.type) {
        case "gnu-long-path":
          this._gnuLongPath = g.decodeLongPath(k, this._filenameEncoding);
          break;
        case "gnu-long-link-path":
          this._gnuLongLinkPath = g.decodeLongPath(k, this._filenameEncoding);
          break;
        case "pax-global-header":
          this._paxGlobal = g.decodePax(k);
          break;
        case "pax-header":
          this._pax =
            this._paxGlobal === null
              ? g.decodePax(k)
              : Object.assign({}, this._paxGlobal, g.decodePax(k));
          break;
      }
    }
    _consumeLongHeader() {
      (this._longHeader = !1), (this._missing = d(this._header.size));
      const k = this._buffer.shift(this._header.size);
      try {
        this._decodeLongHeader(k);
      } catch (p) {
        return this._continueWrite(p), !1;
      }
      return !0;
    }
    _consumeStream() {
      const k = this._buffer.shiftFirst(this._missing);
      if (k === null) return !1;
      this._missing -= k.byteLength;
      const p = this._stream.push(k);
      return this._missing === 0
        ? (this._stream.push(null),
          p && this._stream._detach(),
          p && this._locked === !1)
        : p;
    }
    _createStream() {
      return new s(this, this._header, this._offset);
    }
    _update() {
      for (; this._buffer.buffered > 0 && !this.destroying; ) {
        if (this._missing > 0) {
          if (this._stream !== null) {
            if (this._consumeStream() === !1) return;
            continue;
          }
          if (this._longHeader === !0) {
            if (this._missing > this._buffer.buffered) break;
            if (this._consumeLongHeader() === !1) return !1;
            continue;
          }
          const k = this._buffer.shiftFirst(this._missing);
          k !== null && (this._missing -= k.byteLength);
          continue;
        }
        if (this._buffer.buffered < 512) break;
        if (this._stream !== null || this._consumeHeader() === !1) return;
      }
      this._continueWrite(null);
    }
    _continueWrite(k) {
      const p = this._callback;
      (this._callback = c0), p(k);
    }
    _write(k, p) {
      (this._callback = p), this._buffer.push(k), this._update();
    }
    _final(k) {
      (this._finished = this._missing === 0 && this._buffer.buffered === 0),
        k(this._finished ? null : new Error("Unexpected end of data"));
    }
    _predestroy() {
      this._continueWrite(null);
    }
    _destroy(k) {
      this._stream && this._stream.destroy(m(this)), k(null);
    }
    [Symbol.asyncIterator]() {
      let k = null,
        p = null,
        u = null,
        j = null,
        b0 = null;
      const g0 = this;
      return (
        this.on("entry", O),
        this.on("error", (A0) => {
          k = A0;
        }),
        this.on("close", $),
        {
          [Symbol.asyncIterator]() {
            return this;
          },
          next() {
            return new Promise(W);
          },
          return() {
            return o0(null);
          },
          throw(A0) {
            return o0(A0);
          },
        }
      );
      function h0(A0) {
        if (!b0) return;
        const y = b0;
        (b0 = null), y(A0);
      }
      function W(A0, y) {
        if (k) return y(k);
        if (j) {
          A0({ value: j, done: !1 }), (j = null);
          return;
        }
        (p = A0),
          (u = y),
          h0(null),
          g0._finished && p && (p({ value: void 0, done: !0 }), (p = u = null));
      }
      function O(A0, y, N) {
        (b0 = N),
          y.on("error", c0),
          p ? (p({ value: y, done: !1 }), (p = u = null)) : (j = y);
      }
      function $() {
        h0(k), p && (k ? u(k) : p({ value: void 0, done: !0 }), (p = u = null));
      }
      function o0(A0) {
        return (
          g0.destroy(A0),
          h0(A0),
          new Promise((y, N) => {
            if (g0.destroyed) return y({ value: void 0, done: !0 });
            g0.once("close", function () {
              A0 ? N(A0) : y({ value: void 0, done: !0 });
            });
          })
        );
      }
    }
  }
  extract = function (k) {
    return new H(k);
  };
  function c0() {}
  function d(B) {
    return (B &= 511), B && 512 - B;
  }
  return extract;
}
var constants$2 = { exports: {} };
const empty = {},
  empty$1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: empty },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  require$$0 = getAugmentedNamespace(empty$1);
var hasRequiredConstants$2;
function requireConstants$2() {
  if (hasRequiredConstants$2) return constants$2.exports;
  hasRequiredConstants$2 = 1;
  const Q = {
    S_IFMT: 61440,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
  };
  try {
    constants$2.exports = require$$0.constants || Q;
  } catch {
    constants$2.exports = Q;
  }
  return constants$2.exports;
}
var pack, hasRequiredPack;
function requirePack() {
  if (hasRequiredPack) return pack;
  hasRequiredPack = 1;
  const { Readable: Q, Writable: S, getStreamError: m } = requireStreamx(),
    v = requireBrowser(),
    Z = requireConstants$2(),
    g = requireHeaders(),
    f = 493,
    F = 420,
    s = v.alloc(1024);
  class H extends S {
    constructor(j, b0, g0) {
      super({ mapWritable: p, eagerOpen: !0 }),
        (this.written = 0),
        (this.header = b0),
        (this._callback = g0),
        (this._linkname = null),
        (this._isLinkname = b0.type === "symlink" && !b0.linkname),
        (this._isVoid = b0.type !== "file" && b0.type !== "contiguous-file"),
        (this._finished = !1),
        (this._pack = j),
        (this._openCallback = null),
        this._pack._stream === null
          ? (this._pack._stream = this)
          : this._pack._pending.push(this);
    }
    _open(j) {
      (this._openCallback = j),
        this._pack._stream === this && this._continueOpen();
    }
    _continuePack(j) {
      if (this._callback === null) return;
      const b0 = this._callback;
      (this._callback = null), b0(j);
    }
    _continueOpen() {
      this._pack._stream === null && (this._pack._stream = this);
      const j = this._openCallback;
      if (((this._openCallback = null), j !== null)) {
        if (this._pack.destroying) return j(new Error("pack stream destroyed"));
        if (this._pack._finalized)
          return j(new Error("pack stream is already finalized"));
        (this._pack._stream = this),
          this._isLinkname || this._pack._encode(this.header),
          this._isVoid && (this._finish(), this._continuePack(null)),
          j(null);
      }
    }
    _write(j, b0) {
      if (this._isLinkname)
        return (
          (this._linkname = this._linkname ? v.concat([this._linkname, j]) : j),
          b0(null)
        );
      if (this._isVoid)
        return j.byteLength > 0
          ? b0(new Error("No body allowed for this entry"))
          : b0();
      if (((this.written += j.byteLength), this._pack.push(j))) return b0();
      this._pack._drain = b0;
    }
    _finish() {
      this._finished ||
        ((this._finished = !0),
        this._isLinkname &&
          ((this.header.linkname = this._linkname
            ? v.toString(this._linkname, "utf-8")
            : ""),
          this._pack._encode(this.header)),
        k(this._pack, this.header.size),
        this._pack._done(this));
    }
    _final(j) {
      if (this.written !== this.header.size)
        return j(new Error("Size mismatch"));
      this._finish(), j(null);
    }
    _getError() {
      return m(this) || new Error("tar entry destroyed");
    }
    _predestroy() {
      this._pack.destroy(this._getError());
    }
    _destroy(j) {
      this._pack._done(this),
        this._continuePack(this._finished ? null : this._getError()),
        j();
    }
  }
  class c0 extends Q {
    constructor(j) {
      super(j),
        (this._drain = B),
        (this._finalized = !1),
        (this._finalizing = !1),
        (this._pending = []),
        (this._stream = null);
    }
    entry(j, b0, g0) {
      if (this._finalized || this.destroying)
        throw new Error("already finalized or destroyed");
      typeof b0 == "function" && ((g0 = b0), (b0 = null)),
        g0 || (g0 = B),
        (!j.size || j.type === "symlink") && (j.size = 0),
        j.type || (j.type = d(j.mode)),
        j.mode || (j.mode = j.type === "directory" ? f : F),
        j.uid || (j.uid = 0),
        j.gid || (j.gid = 0),
        j.mtime || (j.mtime = new Date()),
        typeof b0 == "string" && (b0 = v.from(b0));
      const h0 = new H(this, j, g0);
      return v.isBuffer(b0)
        ? ((j.size = b0.byteLength), h0.write(b0), h0.end(), h0)
        : (h0._isVoid, h0);
    }
    finalize() {
      if (this._stream || this._pending.length > 0) {
        this._finalizing = !0;
        return;
      }
      this._finalized ||
        ((this._finalized = !0), this.push(s), this.push(null));
    }
    _done(j) {
      j === this._stream &&
        ((this._stream = null),
        this._finalizing && this.finalize(),
        this._pending.length && this._pending.shift()._continueOpen());
    }
    _encode(j) {
      if (!j.pax) {
        const b0 = g.encode(j);
        if (b0) {
          this.push(b0);
          return;
        }
      }
      this._encodePax(j);
    }
    _encodePax(j) {
      const b0 = g.encodePax({
          name: j.name,
          linkname: j.linkname,
          pax: j.pax,
        }),
        g0 = {
          name: "PaxHeader",
          mode: j.mode,
          uid: j.uid,
          gid: j.gid,
          size: b0.byteLength,
          mtime: j.mtime,
          type: "pax-header",
          linkname: j.linkname && "PaxHeader",
          uname: j.uname,
          gname: j.gname,
          devmajor: j.devmajor,
          devminor: j.devminor,
        };
      this.push(g.encode(g0)),
        this.push(b0),
        k(this, b0.byteLength),
        (g0.size = j.size),
        (g0.type = j.type),
        this.push(g.encode(g0));
    }
    _doDrain() {
      const j = this._drain;
      (this._drain = B), j();
    }
    _predestroy() {
      const j = m(this);
      for (this._stream && this._stream.destroy(j); this._pending.length; ) {
        const b0 = this._pending.shift();
        b0.destroy(j), b0._continueOpen();
      }
      this._doDrain();
    }
    _read(j) {
      this._doDrain(), j();
    }
  }
  pack = function (j) {
    return new c0(j);
  };
  function d(u) {
    switch (u & Z.S_IFMT) {
      case Z.S_IFBLK:
        return "block-device";
      case Z.S_IFCHR:
        return "character-device";
      case Z.S_IFDIR:
        return "directory";
      case Z.S_IFIFO:
        return "fifo";
      case Z.S_IFLNK:
        return "symlink";
    }
    return "file";
  }
  function B() {}
  function k(u, j) {
    (j &= 511), j && u.push(s.subarray(0, 512 - j));
  }
  function p(u) {
    return v.isBuffer(u) ? u : v.from(u);
  }
  return pack;
}
var hasRequiredTarStream;
function requireTarStream() {
  return (
    hasRequiredTarStream ||
      ((hasRequiredTarStream = 1),
      (tarStream.extract = requireExtract()),
      (tarStream.pack = requirePack())),
    tarStream
  );
}
var tarStreamExports = requireTarStream();
const tar = getDefaultExportFromCjs(tarStreamExports);
var streamxExports = requireStreamx();
function fromWeb(Q, S = {}) {
  if (Q instanceof ReadableStream && Q instanceof WritableStream)
    return new DuplexWebStream(Q, Q, S);
  if (Q instanceof ReadableStream) return new ReadableWebStream(Q, S);
  if (Q instanceof WritableStream) return new WritableWebStream(Q, S);
  if (Q.readable && Q.writable)
    return new DuplexWebStream(Q.readable, Q.writable, S);
  if (Q.readable) return new ReadableWebStream(Q.readable, S);
  if (Q.writable) return new WritableWebStream(Q.writable, S);
  throw new Error("fromWeb: Requires at least a readable or writable stream.");
}
class ReadableWebStream extends streamxExports.Readable {
  constructor(S, m) {
    super(m), (this._reader = S.getReader()), this._attachErrorHandler();
  }
  _attachErrorHandler() {
    this._reader.closed.catch((S) => {
      this.destroy(S);
    });
  }
  async _read(S) {
    try {
      const { done: m, value: v } = await this._reader.read();
      m ? this.push(null) : this.push(v), S();
    } catch (m) {
      this.destroy(m), S(m);
    }
  }
  _destroy(S) {
    this._reader.releaseLock(), S();
  }
}
class WritableWebStream extends streamxExports.Writable {
  constructor(S, m) {
    super(m), (this._writer = S.getWriter());
  }
  async _write(S, m) {
    try {
      await this._writer.write(S), m();
    } catch (v) {
      this.destroy(v), m(v);
    }
  }
  async _final(S) {
    try {
      await this._writer.close(), S();
    } catch (m) {
      this.destroy(m), S(m);
    }
  }
  _destroy(S) {
    this._writer.releaseLock(), S();
  }
}
class DuplexWebStream extends streamxExports.Duplex {
  constructor(S, m, v) {
    super(v),
      (this._reader = S.getReader()),
      (this._writer = m.getWriter()),
      this._attachErrorHandler(),
      this._handleCompletion();
  }
  _attachErrorHandler() {
    this._reader.closed.catch((S) => {
      this.destroy(S);
    }),
      this._writer.closed.catch((S) => {
        this.destroy(S);
      });
  }
  async _read(S) {
    try {
      const { done: m, value: v } = await this._reader.read();
      m ? this.push(null) : this.push(v), S();
    } catch (m) {
      this.destroy(m), S(m);
    }
  }
  async _write(S, m) {
    try {
      await this._writer.write(S), m();
    } catch (v) {
      this.destroy(v), m(v);
    }
  }
  async _final(S) {
    try {
      await this._writer.close(), S();
    } catch (m) {
      this.destroy(m), S(m);
    }
  }
  _destroy(S) {
    this._reader.releaseLock(), this._writer.releaseLock(), S();
  }
  _handleCompletion() {
    this.on("finish", () => {
      this.emit("end");
    });
  }
}
function isStreamx(Q) {
  return typeof Q._duplexState == "number" && isStream(Q);
}
function isStream(Q) {
  return !!Q._readableState || !!Q._writableState;
}
function isReadableStream(Q) {
  return !!Q._readableState;
}
function isWritableStream(Q) {
  return !!Q._writableState;
}
const WRITE_WRITING = 256 << 17;
function drained(Q, S = !1) {
  if (Q.destroyed) return Promise.resolve(!1);
  const m = Q._writableState,
    Z =
      (S ? Math.min(1, m.queue.length) : m.queue.length) +
      (Q._duplexState & WRITE_WRITING ? 1 : 0);
  return Z === 0
    ? Promise.resolve(!0)
    : (m.drains === null && (m.drains = []),
      new Promise((g) => {
        m.drains.push({ writes: Z, resolve: g });
      }));
}
var browserExports = requireBrowser();
const b4a = getDefaultExportFromCjs(browserExports);
function handleReadable(Q, S) {
  let m = !1;
  const v = {};
  return new ReadableStream({
    start(Z) {
      (v.data = g), (v.end = f), (v.close = f), (v.error = F);
      for (const H in v) Q.on(H, v[H]);
      Q.pause();
      function g(H) {
        m ||
          (H === null
            ? f()
            : (Z.enqueue(typeof H == "string" ? b4a.from(H) : H), Q.pause()));
      }
      function f() {
        s(), Z.close();
      }
      function F(H) {
        s(), Z.error(H);
      }
      function s() {
        if (!m) {
          m = !0;
          for (const H in v) Q.off(H, v[H]);
        }
      }
    },
    pull() {
      m || Q.resume();
    },
    cancel() {
      m = !0;
      for (const Z in v) Q.off(Z, v[Z]);
      Q.destroy ? Q.destroy() : Q.close && Q.close();
    },
    type: void 0,
  });
}
function handleWritable(Q) {
  return new WritableStream({
    async write(S) {
      try {
        const m = typeof S == "string" ? b4a.from(S) : S;
        Q.write(m) || (await drained(Q, !1));
      } catch (m) {
        Q.destroy(m), setTimeout(() => Q.emit("error", m), 0);
      }
    },
    async close() {
      Q.end && Q.end();
    },
    abort(S) {
      Q.destroy && Q.destroy(S), setTimeout(() => Q.emit("error", S), 0);
    },
  });
}
function toWeb(Q, S) {
  let m;
  if (Q && !isStreamx(Q)) {
    let g;
    ({ readable: Q, writable: m, duplex: g } = Q),
      g && !Q && !m && ((Q = g), (m = g));
  } else
    isReadableStream(Q) && isWritableStream(Q)
      ? (m = Q)
      : isReadableStream(Q)
      ? (m = null)
      : isWritableStream(Q) && ((m = Q), (Q = null));
  if (!Q && !m) {
    const g = "Invalid stream";
    throw new Error(g);
  }
  let v, Z;
  return (
    Q && (v = handleReadable(Q)),
    m && (Z = handleWritable(m)),
    v && Z ? { readable: v, writable: Z } : v || Z
  );
}
let init, instance, heap;
const IMPORT_OBJECT = {
  env: {
    emscripten_notify_memory_growth: function (Q) {
      heap = new Uint8Array(instance.exports.memory.buffer);
    },
  },
};
class ZSTDDecoder {
  init() {
    return (
      init ||
      (init = fetch("main.wasm")
            .then((S) => S.arrayBuffer())
            .then((S) => WebAssembly.instantiate(S, IMPORT_OBJECT))
            .then(this._init))
    );
  }
  _init(S) {
    (instance = S.instance),
      IMPORT_OBJECT.env.emscripten_notify_memory_growth(0);
  }
  decode(S, m = 0) {
    if (!instance)
      throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const v = S.byteLength,
      Z = instance.exports.malloc(v);
    heap.set(S, Z),
      (m = m || Number(instance.exports.ZSTD_findDecompressedSize(Z, v)));
    const g = instance.exports.malloc(m),
      f = instance.exports.ZSTD_decompress(g, m, Z, v),
      F = heap.slice(g, g + f);
    return instance.exports.free(Z), instance.exports.free(g), F;
  }
}
var buffer$a = {},
  base64Js = {},
  hasRequiredBase64Js;
function requireBase64Js() {
  if (hasRequiredBase64Js) return base64Js;
  (hasRequiredBase64Js = 1),
    (base64Js.byteLength = F),
    (base64Js.toByteArray = H),
    (base64Js.fromByteArray = B);
  for (
    var Q = [],
      S = [],
      m = typeof Uint8Array < "u" ? Uint8Array : Array,
      v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Z = 0,
      g = v.length;
    Z < g;
    ++Z
  )
    (Q[Z] = v[Z]), (S[v.charCodeAt(Z)] = Z);
  (S[45] = 62), (S[95] = 63);
  function f(k) {
    var p = k.length;
    if (p % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var u = k.indexOf("=");
    u === -1 && (u = p);
    var j = u === p ? 0 : 4 - (u % 4);
    return [u, j];
  }
  function F(k) {
    var p = f(k),
      u = p[0],
      j = p[1];
    return ((u + j) * 3) / 4 - j;
  }
  function s(k, p, u) {
    return ((p + u) * 3) / 4 - u;
  }
  function H(k) {
    var p,
      u = f(k),
      j = u[0],
      b0 = u[1],
      g0 = new m(s(k, j, b0)),
      h0 = 0,
      W = b0 > 0 ? j - 4 : j,
      O;
    for (O = 0; O < W; O += 4)
      (p =
        (S[k.charCodeAt(O)] << 18) |
        (S[k.charCodeAt(O + 1)] << 12) |
        (S[k.charCodeAt(O + 2)] << 6) |
        S[k.charCodeAt(O + 3)]),
        (g0[h0++] = (p >> 16) & 255),
        (g0[h0++] = (p >> 8) & 255),
        (g0[h0++] = p & 255);
    return (
      b0 === 2 &&
        ((p = (S[k.charCodeAt(O)] << 2) | (S[k.charCodeAt(O + 1)] >> 4)),
        (g0[h0++] = p & 255)),
      b0 === 1 &&
        ((p =
          (S[k.charCodeAt(O)] << 10) |
          (S[k.charCodeAt(O + 1)] << 4) |
          (S[k.charCodeAt(O + 2)] >> 2)),
        (g0[h0++] = (p >> 8) & 255),
        (g0[h0++] = p & 255)),
      g0
    );
  }
  function c0(k) {
    return Q[(k >> 18) & 63] + Q[(k >> 12) & 63] + Q[(k >> 6) & 63] + Q[k & 63];
  }
  function d(k, p, u) {
    for (var j, b0 = [], g0 = p; g0 < u; g0 += 3)
      (j =
        ((k[g0] << 16) & 16711680) +
        ((k[g0 + 1] << 8) & 65280) +
        (k[g0 + 2] & 255)),
        b0.push(c0(j));
    return b0.join("");
  }
  function B(k) {
    for (
      var p, u = k.length, j = u % 3, b0 = [], g0 = 16383, h0 = 0, W = u - j;
      h0 < W;
      h0 += g0
    )
      b0.push(d(k, h0, h0 + g0 > W ? W : h0 + g0));
    return (
      j === 1
        ? ((p = k[u - 1]), b0.push(Q[p >> 2] + Q[(p << 4) & 63] + "=="))
        : j === 2 &&
          ((p = (k[u - 2] << 8) + k[u - 1]),
          b0.push(Q[p >> 10] + Q[(p >> 4) & 63] + Q[(p << 2) & 63] + "=")),
      b0.join("")
    );
  }
  return base64Js;
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var hasRequiredIeee754;
function requireIeee754() {
  return (
    hasRequiredIeee754 ||
      ((hasRequiredIeee754 = 1),
      (ieee754.read = function (Q, S, m, v, Z) {
        var g,
          f,
          F = Z * 8 - v - 1,
          s = (1 << F) - 1,
          H = s >> 1,
          c0 = -7,
          d = m ? Z - 1 : 0,
          B = m ? -1 : 1,
          k = Q[S + d];
        for (
          d += B, g = k & ((1 << -c0) - 1), k >>= -c0, c0 += F;
          c0 > 0;
          g = g * 256 + Q[S + d], d += B, c0 -= 8
        );
        for (
          f = g & ((1 << -c0) - 1), g >>= -c0, c0 += v;
          c0 > 0;
          f = f * 256 + Q[S + d], d += B, c0 -= 8
        );
        if (g === 0) g = 1 - H;
        else {
          if (g === s) return f ? NaN : (k ? -1 : 1) * (1 / 0);
          (f = f + Math.pow(2, v)), (g = g - H);
        }
        return (k ? -1 : 1) * f * Math.pow(2, g - v);
      }),
      (ieee754.write = function (Q, S, m, v, Z, g) {
        var f,
          F,
          s,
          H = g * 8 - Z - 1,
          c0 = (1 << H) - 1,
          d = c0 >> 1,
          B = Z === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          k = v ? 0 : g - 1,
          p = v ? 1 : -1,
          u = S < 0 || (S === 0 && 1 / S < 0) ? 1 : 0;
        for (
          S = Math.abs(S),
            isNaN(S) || S === 1 / 0
              ? ((F = isNaN(S) ? 1 : 0), (f = c0))
              : ((f = Math.floor(Math.log(S) / Math.LN2)),
                S * (s = Math.pow(2, -f)) < 1 && (f--, (s *= 2)),
                f + d >= 1 ? (S += B / s) : (S += B * Math.pow(2, 1 - d)),
                S * s >= 2 && (f++, (s /= 2)),
                f + d >= c0
                  ? ((F = 0), (f = c0))
                  : f + d >= 1
                  ? ((F = (S * s - 1) * Math.pow(2, Z)), (f = f + d))
                  : ((F = S * Math.pow(2, d - 1) * Math.pow(2, Z)), (f = 0)));
          Z >= 8;
          Q[m + k] = F & 255, k += p, F /= 256, Z -= 8
        );
        for (
          f = (f << Z) | F, H += Z;
          H > 0;
          Q[m + k] = f & 255, k += p, f /= 256, H -= 8
        );
        Q[m + k - p] |= u * 128;
      })),
    ieee754
  );
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var hasRequiredBuffer;
function requireBuffer() {
  return (
    hasRequiredBuffer ||
      ((hasRequiredBuffer = 1),
      (function (Q) {
        const S = requireBase64Js(),
          m = requireIeee754(),
          v =
            typeof Symbol == "function" && typeof Symbol.for == "function"
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (Q.Buffer = F), (Q.SlowBuffer = g0), (Q.INSPECT_MAX_BYTES = 50);
        const Z = 2147483647;
        (Q.kMaxLength = Z),
          (F.TYPED_ARRAY_SUPPORT = g()),
          !F.TYPED_ARRAY_SUPPORT &&
            typeof console < "u" &&
            typeof console.error == "function" &&
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            );
        function g() {
          try {
            const I = new Uint8Array(1),
              x = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(x, Uint8Array.prototype),
              Object.setPrototypeOf(I, x),
              I.foo() === 42
            );
          } catch {
            return !1;
          }
        }
        Object.defineProperty(F.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (F.isBuffer(this)) return this.buffer;
          },
        }),
          Object.defineProperty(F.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (F.isBuffer(this)) return this.byteOffset;
            },
          });
        function f(I) {
          if (I > Z)
            throw new RangeError(
              'The value "' + I + '" is invalid for option "size"'
            );
          const x = new Uint8Array(I);
          return Object.setPrototypeOf(x, F.prototype), x;
        }
        function F(I, x, o) {
          if (typeof I == "number") {
            if (typeof x == "string")
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return d(I);
          }
          return s(I, x, o);
        }
        F.poolSize = 8192;
        function s(I, x, o) {
          if (typeof I == "string") return B(I, x);
          if (ArrayBuffer.isView(I)) return p(I);
          if (I == null)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof I
            );
          if (
            u0(I, ArrayBuffer) ||
            (I && u0(I.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < "u" &&
              (u0(I, SharedArrayBuffer) ||
                (I && u0(I.buffer, SharedArrayBuffer))))
          )
            return u(I, x, o);
          if (typeof I == "number")
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          const M = I.valueOf && I.valueOf();
          if (M != null && M !== I) return F.from(M, x, o);
          const C = j(I);
          if (C) return C;
          if (
            typeof Symbol < "u" &&
            Symbol.toPrimitive != null &&
            typeof I[Symbol.toPrimitive] == "function"
          )
            return F.from(I[Symbol.toPrimitive]("string"), x, o);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof I
          );
        }
        (F.from = function (I, x, o) {
          return s(I, x, o);
        }),
          Object.setPrototypeOf(F.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(F, Uint8Array);
        function H(I) {
          if (typeof I != "number")
            throw new TypeError('"size" argument must be of type number');
          if (I < 0)
            throw new RangeError(
              'The value "' + I + '" is invalid for option "size"'
            );
        }
        function c0(I, x, o) {
          return (
            H(I),
            I <= 0
              ? f(I)
              : x !== void 0
              ? typeof o == "string"
                ? f(I).fill(x, o)
                : f(I).fill(x)
              : f(I)
          );
        }
        F.alloc = function (I, x, o) {
          return c0(I, x, o);
        };
        function d(I) {
          return H(I), f(I < 0 ? 0 : b0(I) | 0);
        }
        (F.allocUnsafe = function (I) {
          return d(I);
        }),
          (F.allocUnsafeSlow = function (I) {
            return d(I);
          });
        function B(I, x) {
          if (
            ((typeof x != "string" || x === "") && (x = "utf8"),
            !F.isEncoding(x))
          )
            throw new TypeError("Unknown encoding: " + x);
          const o = h0(I, x) | 0;
          let M = f(o);
          const C = M.write(I, x);
          return C !== o && (M = M.slice(0, C)), M;
        }
        function k(I) {
          const x = I.length < 0 ? 0 : b0(I.length) | 0,
            o = f(x);
          for (let M = 0; M < x; M += 1) o[M] = I[M] & 255;
          return o;
        }
        function p(I) {
          if (u0(I, Uint8Array)) {
            const x = new Uint8Array(I);
            return u(x.buffer, x.byteOffset, x.byteLength);
          }
          return k(I);
        }
        function u(I, x, o) {
          if (x < 0 || I.byteLength < x)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (I.byteLength < x + (o || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let M;
          return (
            x === void 0 && o === void 0
              ? (M = new Uint8Array(I))
              : o === void 0
              ? (M = new Uint8Array(I, x))
              : (M = new Uint8Array(I, x, o)),
            Object.setPrototypeOf(M, F.prototype),
            M
          );
        }
        function j(I) {
          if (F.isBuffer(I)) {
            const x = b0(I.length) | 0,
              o = f(x);
            return o.length === 0 || I.copy(o, 0, 0, x), o;
          }
          if (I.length !== void 0)
            return typeof I.length != "number" || Fn(I.length) ? f(0) : k(I);
          if (I.type === "Buffer" && Array.isArray(I.data)) return k(I.data);
        }
        function b0(I) {
          if (I >= Z)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                Z.toString(16) +
                " bytes"
            );
          return I | 0;
        }
        function g0(I) {
          return +I != I && (I = 0), F.alloc(+I);
        }
        (F.isBuffer = function (x) {
          return x != null && x._isBuffer === !0 && x !== F.prototype;
        }),
          (F.compare = function (x, o) {
            if (
              (u0(x, Uint8Array) && (x = F.from(x, x.offset, x.byteLength)),
              u0(o, Uint8Array) && (o = F.from(o, o.offset, o.byteLength)),
              !F.isBuffer(x) || !F.isBuffer(o))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (x === o) return 0;
            let M = x.length,
              C = o.length;
            for (let E = 0, X = Math.min(M, C); E < X; ++E)
              if (x[E] !== o[E]) {
                (M = x[E]), (C = o[E]);
                break;
              }
            return M < C ? -1 : C < M ? 1 : 0;
          }),
          (F.isEncoding = function (x) {
            switch (String(x).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (F.concat = function (x, o) {
            if (!Array.isArray(x))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (x.length === 0) return F.alloc(0);
            let M;
            if (o === void 0)
              for (o = 0, M = 0; M < x.length; ++M) o += x[M].length;
            const C = F.allocUnsafe(o);
            let E = 0;
            for (M = 0; M < x.length; ++M) {
              let X = x[M];
              if (u0(X, Uint8Array))
                E + X.length > C.length
                  ? (F.isBuffer(X) || (X = F.from(X)), X.copy(C, E))
                  : Uint8Array.prototype.set.call(C, X, E);
              else if (F.isBuffer(X)) X.copy(C, E);
              else
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              E += X.length;
            }
            return C;
          });
        function h0(I, x) {
          if (F.isBuffer(I)) return I.length;
          if (ArrayBuffer.isView(I) || u0(I, ArrayBuffer)) return I.byteLength;
          if (typeof I != "string")
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof I
            );
          const o = I.length,
            M = arguments.length > 2 && arguments[2] === !0;
          if (!M && o === 0) return 0;
          let C = !1;
          for (;;)
            switch (x) {
              case "ascii":
              case "latin1":
              case "binary":
                return o;
              case "utf8":
              case "utf-8":
                return V(I).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return o * 2;
              case "hex":
                return o >>> 1;
              case "base64":
                return Q0(I).length;
              default:
                if (C) return M ? -1 : V(I).length;
                (x = ("" + x).toLowerCase()), (C = !0);
            }
        }
        F.byteLength = h0;
        function W(I, x, o) {
          let M = !1;
          if (
            ((x === void 0 || x < 0) && (x = 0),
            x > this.length ||
              ((o === void 0 || o > this.length) && (o = this.length),
              o <= 0) ||
              ((o >>>= 0), (x >>>= 0), o <= x))
          )
            return "";
          for (I || (I = "utf8"); ; )
            switch (I) {
              case "hex":
                return Cn(this, x, o);
              case "utf8":
              case "utf-8":
                return N0(this, x, o);
              case "ascii":
                return T0(this, x, o);
              case "latin1":
              case "binary":
                return y0(this, x, o);
              case "base64":
                return M0(this, x, o);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return v0(this, x, o);
              default:
                if (M) throw new TypeError("Unknown encoding: " + I);
                (I = (I + "").toLowerCase()), (M = !0);
            }
        }
        F.prototype._isBuffer = !0;
        function O(I, x, o) {
          const M = I[x];
          (I[x] = I[o]), (I[o] = M);
        }
        (F.prototype.swap16 = function () {
          const x = this.length;
          if (x % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let o = 0; o < x; o += 2) O(this, o, o + 1);
          return this;
        }),
          (F.prototype.swap32 = function () {
            const x = this.length;
            if (x % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let o = 0; o < x; o += 4)
              O(this, o, o + 3), O(this, o + 1, o + 2);
            return this;
          }),
          (F.prototype.swap64 = function () {
            const x = this.length;
            if (x % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let o = 0; o < x; o += 8)
              O(this, o, o + 7),
                O(this, o + 1, o + 6),
                O(this, o + 2, o + 5),
                O(this, o + 3, o + 4);
            return this;
          }),
          (F.prototype.toString = function () {
            const x = this.length;
            return x === 0
              ? ""
              : arguments.length === 0
              ? N0(this, 0, x)
              : W.apply(this, arguments);
          }),
          (F.prototype.toLocaleString = F.prototype.toString),
          (F.prototype.equals = function (x) {
            if (!F.isBuffer(x))
              throw new TypeError("Argument must be a Buffer");
            return this === x ? !0 : F.compare(this, x) === 0;
          }),
          (F.prototype.inspect = function () {
            let x = "";
            const o = Q.INSPECT_MAX_BYTES;
            return (
              (x = this.toString("hex", 0, o)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > o && (x += " ... "),
              "<Buffer " + x + ">"
            );
          }),
          v && (F.prototype[v] = F.prototype.inspect),
          (F.prototype.compare = function (x, o, M, C, E) {
            if (
              (u0(x, Uint8Array) && (x = F.from(x, x.offset, x.byteLength)),
              !F.isBuffer(x))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof x
              );
            if (
              (o === void 0 && (o = 0),
              M === void 0 && (M = x ? x.length : 0),
              C === void 0 && (C = 0),
              E === void 0 && (E = this.length),
              o < 0 || M > x.length || C < 0 || E > this.length)
            )
              throw new RangeError("out of range index");
            if (C >= E && o >= M) return 0;
            if (C >= E) return -1;
            if (o >= M) return 1;
            if (((o >>>= 0), (M >>>= 0), (C >>>= 0), (E >>>= 0), this === x))
              return 0;
            let X = E - C,
              Z0 = M - o;
            const G0 = Math.min(X, Z0),
              P0 = this.slice(C, E),
              H0 = x.slice(o, M);
            for (let K0 = 0; K0 < G0; ++K0)
              if (P0[K0] !== H0[K0]) {
                (X = P0[K0]), (Z0 = H0[K0]);
                break;
              }
            return X < Z0 ? -1 : Z0 < X ? 1 : 0;
          });
        function $(I, x, o, M, C) {
          if (I.length === 0) return -1;
          if (
            (typeof o == "string"
              ? ((M = o), (o = 0))
              : o > 2147483647
              ? (o = 2147483647)
              : o < -2147483648 && (o = -2147483648),
            (o = +o),
            Fn(o) && (o = C ? 0 : I.length - 1),
            o < 0 && (o = I.length + o),
            o >= I.length)
          ) {
            if (C) return -1;
            o = I.length - 1;
          } else if (o < 0)
            if (C) o = 0;
            else return -1;
          if ((typeof x == "string" && (x = F.from(x, M)), F.isBuffer(x)))
            return x.length === 0 ? -1 : o0(I, x, o, M, C);
          if (typeof x == "number")
            return (
              (x = x & 255),
              typeof Uint8Array.prototype.indexOf == "function"
                ? C
                  ? Uint8Array.prototype.indexOf.call(I, x, o)
                  : Uint8Array.prototype.lastIndexOf.call(I, x, o)
                : o0(I, [x], o, M, C)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function o0(I, x, o, M, C) {
          let E = 1,
            X = I.length,
            Z0 = x.length;
          if (
            M !== void 0 &&
            ((M = String(M).toLowerCase()),
            M === "ucs2" ||
              M === "ucs-2" ||
              M === "utf16le" ||
              M === "utf-16le")
          ) {
            if (I.length < 2 || x.length < 2) return -1;
            (E = 2), (X /= 2), (Z0 /= 2), (o /= 2);
          }
          function G0(H0, K0) {
            return E === 1 ? H0[K0] : H0.readUInt16BE(K0 * E);
          }
          let P0;
          if (C) {
            let H0 = -1;
            for (P0 = o; P0 < X; P0++)
              if (G0(I, P0) === G0(x, H0 === -1 ? 0 : P0 - H0)) {
                if ((H0 === -1 && (H0 = P0), P0 - H0 + 1 === Z0)) return H0 * E;
              } else H0 !== -1 && (P0 -= P0 - H0), (H0 = -1);
          } else
            for (o + Z0 > X && (o = X - Z0), P0 = o; P0 >= 0; P0--) {
              let H0 = !0;
              for (let K0 = 0; K0 < Z0; K0++)
                if (G0(I, P0 + K0) !== G0(x, K0)) {
                  H0 = !1;
                  break;
                }
              if (H0) return P0;
            }
          return -1;
        }
        (F.prototype.includes = function (x, o, M) {
          return this.indexOf(x, o, M) !== -1;
        }),
          (F.prototype.indexOf = function (x, o, M) {
            return $(this, x, o, M, !0);
          }),
          (F.prototype.lastIndexOf = function (x, o, M) {
            return $(this, x, o, M, !1);
          });
        function A0(I, x, o, M) {
          o = Number(o) || 0;
          const C = I.length - o;
          M ? ((M = Number(M)), M > C && (M = C)) : (M = C);
          const E = x.length;
          M > E / 2 && (M = E / 2);
          let X;
          for (X = 0; X < M; ++X) {
            const Z0 = parseInt(x.substr(X * 2, 2), 16);
            if (Fn(Z0)) return X;
            I[o + X] = Z0;
          }
          return X;
        }
        function y(I, x, o, M) {
          return F0(V(x, I.length - o), I, o, M);
        }
        function N(I, x, o, M) {
          return F0(K(x), I, o, M);
        }
        function G(I, x, o, M) {
          return F0(Q0(x), I, o, M);
        }
        function m0(I, x, o, M) {
          return F0(x0(x, I.length - o), I, o, M);
        }
        (F.prototype.write = function (x, o, M, C) {
          if (o === void 0) (C = "utf8"), (M = this.length), (o = 0);
          else if (M === void 0 && typeof o == "string")
            (C = o), (M = this.length), (o = 0);
          else if (isFinite(o))
            (o = o >>> 0),
              isFinite(M)
                ? ((M = M >>> 0), C === void 0 && (C = "utf8"))
                : ((C = M), (M = void 0));
          else
            throw new Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          const E = this.length - o;
          if (
            ((M === void 0 || M > E) && (M = E),
            (x.length > 0 && (M < 0 || o < 0)) || o > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          C || (C = "utf8");
          let X = !1;
          for (;;)
            switch (C) {
              case "hex":
                return A0(this, x, o, M);
              case "utf8":
              case "utf-8":
                return y(this, x, o, M);
              case "ascii":
              case "latin1":
              case "binary":
                return N(this, x, o, M);
              case "base64":
                return G(this, x, o, M);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return m0(this, x, o, M);
              default:
                if (X) throw new TypeError("Unknown encoding: " + C);
                (C = ("" + C).toLowerCase()), (X = !0);
            }
        }),
          (F.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function M0(I, x, o) {
          return x === 0 && o === I.length
            ? S.fromByteArray(I)
            : S.fromByteArray(I.slice(x, o));
        }
        function N0(I, x, o) {
          o = Math.min(I.length, o);
          const M = [];
          let C = x;
          for (; C < o; ) {
            const E = I[C];
            let X = null,
              Z0 = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
            if (C + Z0 <= o) {
              let G0, P0, H0, K0;
              switch (Z0) {
                case 1:
                  E < 128 && (X = E);
                  break;
                case 2:
                  (G0 = I[C + 1]),
                    (G0 & 192) === 128 &&
                      ((K0 = ((E & 31) << 6) | (G0 & 63)),
                      K0 > 127 && (X = K0));
                  break;
                case 3:
                  (G0 = I[C + 1]),
                    (P0 = I[C + 2]),
                    (G0 & 192) === 128 &&
                      (P0 & 192) === 128 &&
                      ((K0 = ((E & 15) << 12) | ((G0 & 63) << 6) | (P0 & 63)),
                      K0 > 2047 && (K0 < 55296 || K0 > 57343) && (X = K0));
                  break;
                case 4:
                  (G0 = I[C + 1]),
                    (P0 = I[C + 2]),
                    (H0 = I[C + 3]),
                    (G0 & 192) === 128 &&
                      (P0 & 192) === 128 &&
                      (H0 & 192) === 128 &&
                      ((K0 =
                        ((E & 15) << 18) |
                        ((G0 & 63) << 12) |
                        ((P0 & 63) << 6) |
                        (H0 & 63)),
                      K0 > 65535 && K0 < 1114112 && (X = K0));
              }
            }
            X === null
              ? ((X = 65533), (Z0 = 1))
              : X > 65535 &&
                ((X -= 65536),
                M.push(((X >>> 10) & 1023) | 55296),
                (X = 56320 | (X & 1023))),
              M.push(X),
              (C += Z0);
          }
          return _0(M);
        }
        const p0 = 4096;
        function _0(I) {
          const x = I.length;
          if (x <= p0) return String.fromCharCode.apply(String, I);
          let o = "",
            M = 0;
          for (; M < x; )
            o += String.fromCharCode.apply(String, I.slice(M, (M += p0)));
          return o;
        }
        function T0(I, x, o) {
          let M = "";
          o = Math.min(I.length, o);
          for (let C = x; C < o; ++C) M += String.fromCharCode(I[C] & 127);
          return M;
        }
        function y0(I, x, o) {
          let M = "";
          o = Math.min(I.length, o);
          for (let C = x; C < o; ++C) M += String.fromCharCode(I[C]);
          return M;
        }
        function Cn(I, x, o) {
          const M = I.length;
          (!x || x < 0) && (x = 0), (!o || o < 0 || o > M) && (o = M);
          let C = "";
          for (let E = x; E < o; ++E) C += P2[I[E]];
          return C;
        }
        function v0(I, x, o) {
          const M = I.slice(x, o);
          let C = "";
          for (let E = 0; E < M.length - 1; E += 2)
            C += String.fromCharCode(M[E] + M[E + 1] * 256);
          return C;
        }
        F.prototype.slice = function (x, o) {
          const M = this.length;
          (x = ~~x),
            (o = o === void 0 ? M : ~~o),
            x < 0 ? ((x += M), x < 0 && (x = 0)) : x > M && (x = M),
            o < 0 ? ((o += M), o < 0 && (o = 0)) : o > M && (o = M),
            o < x && (o = x);
          const C = this.subarray(x, o);
          return Object.setPrototypeOf(C, F.prototype), C;
        };
        function z0(I, x, o) {
          if (I % 1 !== 0 || I < 0) throw new RangeError("offset is not uint");
          if (I + x > o)
            throw new RangeError("Trying to access beyond buffer length");
        }
        (F.prototype.readUintLE = F.prototype.readUIntLE =
          function (x, o, M) {
            (x = x >>> 0), (o = o >>> 0), M || z0(x, o, this.length);
            let C = this[x],
              E = 1,
              X = 0;
            for (; ++X < o && (E *= 256); ) C += this[x + X] * E;
            return C;
          }),
          (F.prototype.readUintBE = F.prototype.readUIntBE =
            function (x, o, M) {
              (x = x >>> 0), (o = o >>> 0), M || z0(x, o, this.length);
              let C = this[x + --o],
                E = 1;
              for (; o > 0 && (E *= 256); ) C += this[x + --o] * E;
              return C;
            }),
          (F.prototype.readUint8 = F.prototype.readUInt8 =
            function (x, o) {
              return (x = x >>> 0), o || z0(x, 1, this.length), this[x];
            }),
          (F.prototype.readUint16LE = F.prototype.readUInt16LE =
            function (x, o) {
              return (
                (x = x >>> 0),
                o || z0(x, 2, this.length),
                this[x] | (this[x + 1] << 8)
              );
            }),
          (F.prototype.readUint16BE = F.prototype.readUInt16BE =
            function (x, o) {
              return (
                (x = x >>> 0),
                o || z0(x, 2, this.length),
                (this[x] << 8) | this[x + 1]
              );
            }),
          (F.prototype.readUint32LE = F.prototype.readUInt32LE =
            function (x, o) {
              return (
                (x = x >>> 0),
                o || z0(x, 4, this.length),
                (this[x] | (this[x + 1] << 8) | (this[x + 2] << 16)) +
                  this[x + 3] * 16777216
              );
            }),
          (F.prototype.readUint32BE = F.prototype.readUInt32BE =
            function (x, o) {
              return (
                (x = x >>> 0),
                o || z0(x, 4, this.length),
                this[x] * 16777216 +
                  ((this[x + 1] << 16) | (this[x + 2] << 8) | this[x + 3])
              );
            }),
          (F.prototype.readBigUInt64LE = hn(function (x) {
            (x = x >>> 0), Ln(x, "offset");
            const o = this[x],
              M = this[x + 7];
            (o === void 0 || M === void 0) && D0(x, this.length - 8);
            const C =
                o +
                this[++x] * 2 ** 8 +
                this[++x] * 2 ** 16 +
                this[++x] * 2 ** 24,
              E =
                this[++x] +
                this[++x] * 2 ** 8 +
                this[++x] * 2 ** 16 +
                M * 2 ** 24;
            return BigInt(C) + (BigInt(E) << BigInt(32));
          })),
          (F.prototype.readBigUInt64BE = hn(function (x) {
            (x = x >>> 0), Ln(x, "offset");
            const o = this[x],
              M = this[x + 7];
            (o === void 0 || M === void 0) && D0(x, this.length - 8);
            const C =
                o * 2 ** 24 +
                this[++x] * 2 ** 16 +
                this[++x] * 2 ** 8 +
                this[++x],
              E =
                this[++x] * 2 ** 24 +
                this[++x] * 2 ** 16 +
                this[++x] * 2 ** 8 +
                M;
            return (BigInt(C) << BigInt(32)) + BigInt(E);
          })),
          (F.prototype.readIntLE = function (x, o, M) {
            (x = x >>> 0), (o = o >>> 0), M || z0(x, o, this.length);
            let C = this[x],
              E = 1,
              X = 0;
            for (; ++X < o && (E *= 256); ) C += this[x + X] * E;
            return (E *= 128), C >= E && (C -= Math.pow(2, 8 * o)), C;
          }),
          (F.prototype.readIntBE = function (x, o, M) {
            (x = x >>> 0), (o = o >>> 0), M || z0(x, o, this.length);
            let C = o,
              E = 1,
              X = this[x + --C];
            for (; C > 0 && (E *= 256); ) X += this[x + --C] * E;
            return (E *= 128), X >= E && (X -= Math.pow(2, 8 * o)), X;
          }),
          (F.prototype.readInt8 = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 1, this.length),
              this[x] & 128 ? (255 - this[x] + 1) * -1 : this[x]
            );
          }),
          (F.prototype.readInt16LE = function (x, o) {
            (x = x >>> 0), o || z0(x, 2, this.length);
            const M = this[x] | (this[x + 1] << 8);
            return M & 32768 ? M | 4294901760 : M;
          }),
          (F.prototype.readInt16BE = function (x, o) {
            (x = x >>> 0), o || z0(x, 2, this.length);
            const M = this[x + 1] | (this[x] << 8);
            return M & 32768 ? M | 4294901760 : M;
          }),
          (F.prototype.readInt32LE = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 4, this.length),
              this[x] |
                (this[x + 1] << 8) |
                (this[x + 2] << 16) |
                (this[x + 3] << 24)
            );
          }),
          (F.prototype.readInt32BE = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 4, this.length),
              (this[x] << 24) |
                (this[x + 1] << 16) |
                (this[x + 2] << 8) |
                this[x + 3]
            );
          }),
          (F.prototype.readBigInt64LE = hn(function (x) {
            (x = x >>> 0), Ln(x, "offset");
            const o = this[x],
              M = this[x + 7];
            (o === void 0 || M === void 0) && D0(x, this.length - 8);
            const C =
              this[x + 4] +
              this[x + 5] * 2 ** 8 +
              this[x + 6] * 2 ** 16 +
              (M << 24);
            return (
              (BigInt(C) << BigInt(32)) +
              BigInt(
                o +
                  this[++x] * 2 ** 8 +
                  this[++x] * 2 ** 16 +
                  this[++x] * 2 ** 24
              )
            );
          })),
          (F.prototype.readBigInt64BE = hn(function (x) {
            (x = x >>> 0), Ln(x, "offset");
            const o = this[x],
              M = this[x + 7];
            (o === void 0 || M === void 0) && D0(x, this.length - 8);
            const C =
              (o << 24) + this[++x] * 2 ** 16 + this[++x] * 2 ** 8 + this[++x];
            return (
              (BigInt(C) << BigInt(32)) +
              BigInt(
                this[++x] * 2 ** 24 +
                  this[++x] * 2 ** 16 +
                  this[++x] * 2 ** 8 +
                  M
              )
            );
          })),
          (F.prototype.readFloatLE = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 4, this.length),
              m.read(this, x, !0, 23, 4)
            );
          }),
          (F.prototype.readFloatBE = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 4, this.length),
              m.read(this, x, !1, 23, 4)
            );
          }),
          (F.prototype.readDoubleLE = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 8, this.length),
              m.read(this, x, !0, 52, 8)
            );
          }),
          (F.prototype.readDoubleBE = function (x, o) {
            return (
              (x = x >>> 0),
              o || z0(x, 8, this.length),
              m.read(this, x, !1, 52, 8)
            );
          });
        function E0(I, x, o, M, C, E) {
          if (!F.isBuffer(I))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (x > C || x < E)
            throw new RangeError('"value" argument is out of bounds');
          if (o + M > I.length) throw new RangeError("Index out of range");
        }
        (F.prototype.writeUintLE = F.prototype.writeUIntLE =
          function (x, o, M, C) {
            if (((x = +x), (o = o >>> 0), (M = M >>> 0), !C)) {
              const Z0 = Math.pow(2, 8 * M) - 1;
              E0(this, x, o, M, Z0, 0);
            }
            let E = 1,
              X = 0;
            for (this[o] = x & 255; ++X < M && (E *= 256); )
              this[o + X] = (x / E) & 255;
            return o + M;
          }),
          (F.prototype.writeUintBE = F.prototype.writeUIntBE =
            function (x, o, M, C) {
              if (((x = +x), (o = o >>> 0), (M = M >>> 0), !C)) {
                const Z0 = Math.pow(2, 8 * M) - 1;
                E0(this, x, o, M, Z0, 0);
              }
              let E = M - 1,
                X = 1;
              for (this[o + E] = x & 255; --E >= 0 && (X *= 256); )
                this[o + E] = (x / X) & 255;
              return o + M;
            }),
          (F.prototype.writeUint8 = F.prototype.writeUInt8 =
            function (x, o, M) {
              return (
                (x = +x),
                (o = o >>> 0),
                M || E0(this, x, o, 1, 255, 0),
                (this[o] = x & 255),
                o + 1
              );
            }),
          (F.prototype.writeUint16LE = F.prototype.writeUInt16LE =
            function (x, o, M) {
              return (
                (x = +x),
                (o = o >>> 0),
                M || E0(this, x, o, 2, 65535, 0),
                (this[o] = x & 255),
                (this[o + 1] = x >>> 8),
                o + 2
              );
            }),
          (F.prototype.writeUint16BE = F.prototype.writeUInt16BE =
            function (x, o, M) {
              return (
                (x = +x),
                (o = o >>> 0),
                M || E0(this, x, o, 2, 65535, 0),
                (this[o] = x >>> 8),
                (this[o + 1] = x & 255),
                o + 2
              );
            }),
          (F.prototype.writeUint32LE = F.prototype.writeUInt32LE =
            function (x, o, M) {
              return (
                (x = +x),
                (o = o >>> 0),
                M || E0(this, x, o, 4, 4294967295, 0),
                (this[o + 3] = x >>> 24),
                (this[o + 2] = x >>> 16),
                (this[o + 1] = x >>> 8),
                (this[o] = x & 255),
                o + 4
              );
            }),
          (F.prototype.writeUint32BE = F.prototype.writeUInt32BE =
            function (x, o, M) {
              return (
                (x = +x),
                (o = o >>> 0),
                M || E0(this, x, o, 4, 4294967295, 0),
                (this[o] = x >>> 24),
                (this[o + 1] = x >>> 16),
                (this[o + 2] = x >>> 8),
                (this[o + 3] = x & 255),
                o + 4
              );
            });
        function Hn(I, x, o, M, C) {
          an(x, M, C, I, o, 7);
          let E = Number(x & BigInt(4294967295));
          (I[o++] = E),
            (E = E >> 8),
            (I[o++] = E),
            (E = E >> 8),
            (I[o++] = E),
            (E = E >> 8),
            (I[o++] = E);
          let X = Number((x >> BigInt(32)) & BigInt(4294967295));
          return (
            (I[o++] = X),
            (X = X >> 8),
            (I[o++] = X),
            (X = X >> 8),
            (I[o++] = X),
            (X = X >> 8),
            (I[o++] = X),
            o
          );
        }
        function Tn(I, x, o, M, C) {
          an(x, M, C, I, o, 7);
          let E = Number(x & BigInt(4294967295));
          (I[o + 7] = E),
            (E = E >> 8),
            (I[o + 6] = E),
            (E = E >> 8),
            (I[o + 5] = E),
            (E = E >> 8),
            (I[o + 4] = E);
          let X = Number((x >> BigInt(32)) & BigInt(4294967295));
          return (
            (I[o + 3] = X),
            (X = X >> 8),
            (I[o + 2] = X),
            (X = X >> 8),
            (I[o + 1] = X),
            (X = X >> 8),
            (I[o] = X),
            o + 8
          );
        }
        (F.prototype.writeBigUInt64LE = hn(function (x, o = 0) {
          return Hn(this, x, o, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
          (F.prototype.writeBigUInt64BE = hn(function (x, o = 0) {
            return Tn(this, x, o, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (F.prototype.writeIntLE = function (x, o, M, C) {
            if (((x = +x), (o = o >>> 0), !C)) {
              const G0 = Math.pow(2, 8 * M - 1);
              E0(this, x, o, M, G0 - 1, -G0);
            }
            let E = 0,
              X = 1,
              Z0 = 0;
            for (this[o] = x & 255; ++E < M && (X *= 256); )
              x < 0 && Z0 === 0 && this[o + E - 1] !== 0 && (Z0 = 1),
                (this[o + E] = (((x / X) >> 0) - Z0) & 255);
            return o + M;
          }),
          (F.prototype.writeIntBE = function (x, o, M, C) {
            if (((x = +x), (o = o >>> 0), !C)) {
              const G0 = Math.pow(2, 8 * M - 1);
              E0(this, x, o, M, G0 - 1, -G0);
            }
            let E = M - 1,
              X = 1,
              Z0 = 0;
            for (this[o + E] = x & 255; --E >= 0 && (X *= 256); )
              x < 0 && Z0 === 0 && this[o + E + 1] !== 0 && (Z0 = 1),
                (this[o + E] = (((x / X) >> 0) - Z0) & 255);
            return o + M;
          }),
          (F.prototype.writeInt8 = function (x, o, M) {
            return (
              (x = +x),
              (o = o >>> 0),
              M || E0(this, x, o, 1, 127, -128),
              x < 0 && (x = 255 + x + 1),
              (this[o] = x & 255),
              o + 1
            );
          }),
          (F.prototype.writeInt16LE = function (x, o, M) {
            return (
              (x = +x),
              (o = o >>> 0),
              M || E0(this, x, o, 2, 32767, -32768),
              (this[o] = x & 255),
              (this[o + 1] = x >>> 8),
              o + 2
            );
          }),
          (F.prototype.writeInt16BE = function (x, o, M) {
            return (
              (x = +x),
              (o = o >>> 0),
              M || E0(this, x, o, 2, 32767, -32768),
              (this[o] = x >>> 8),
              (this[o + 1] = x & 255),
              o + 2
            );
          }),
          (F.prototype.writeInt32LE = function (x, o, M) {
            return (
              (x = +x),
              (o = o >>> 0),
              M || E0(this, x, o, 4, 2147483647, -2147483648),
              (this[o] = x & 255),
              (this[o + 1] = x >>> 8),
              (this[o + 2] = x >>> 16),
              (this[o + 3] = x >>> 24),
              o + 4
            );
          }),
          (F.prototype.writeInt32BE = function (x, o, M) {
            return (
              (x = +x),
              (o = o >>> 0),
              M || E0(this, x, o, 4, 2147483647, -2147483648),
              x < 0 && (x = 4294967295 + x + 1),
              (this[o] = x >>> 24),
              (this[o + 1] = x >>> 16),
              (this[o + 2] = x >>> 8),
              (this[o + 3] = x & 255),
              o + 4
            );
          }),
          (F.prototype.writeBigInt64LE = hn(function (x, o = 0) {
            return Hn(
              this,
              x,
              o,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (F.prototype.writeBigInt64BE = hn(function (x, o = 0) {
            return Tn(
              this,
              x,
              o,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          }));
        function Qn(I, x, o, M, C, E) {
          if (o + M > I.length) throw new RangeError("Index out of range");
          if (o < 0) throw new RangeError("Index out of range");
        }
        function Nn(I, x, o, M, C) {
          return (
            (x = +x),
            (o = o >>> 0),
            C || Qn(I, x, o, 4),
            m.write(I, x, o, M, 23, 4),
            o + 4
          );
        }
        (F.prototype.writeFloatLE = function (x, o, M) {
          return Nn(this, x, o, !0, M);
        }),
          (F.prototype.writeFloatBE = function (x, o, M) {
            return Nn(this, x, o, !1, M);
          });
        function Mn(I, x, o, M, C) {
          return (
            (x = +x),
            (o = o >>> 0),
            C || Qn(I, x, o, 8),
            m.write(I, x, o, M, 52, 8),
            o + 8
          );
        }
        (F.prototype.writeDoubleLE = function (x, o, M) {
          return Mn(this, x, o, !0, M);
        }),
          (F.prototype.writeDoubleBE = function (x, o, M) {
            return Mn(this, x, o, !1, M);
          }),
          (F.prototype.copy = function (x, o, M, C) {
            if (!F.isBuffer(x))
              throw new TypeError("argument should be a Buffer");
            if (
              (M || (M = 0),
              !C && C !== 0 && (C = this.length),
              o >= x.length && (o = x.length),
              o || (o = 0),
              C > 0 && C < M && (C = M),
              C === M || x.length === 0 || this.length === 0)
            )
              return 0;
            if (o < 0) throw new RangeError("targetStart out of bounds");
            if (M < 0 || M >= this.length)
              throw new RangeError("Index out of range");
            if (C < 0) throw new RangeError("sourceEnd out of bounds");
            C > this.length && (C = this.length),
              x.length - o < C - M && (C = x.length - o + M);
            const E = C - M;
            return (
              this === x && typeof Uint8Array.prototype.copyWithin == "function"
                ? this.copyWithin(o, M, C)
                : Uint8Array.prototype.set.call(x, this.subarray(M, C), o),
              E
            );
          }),
          (F.prototype.fill = function (x, o, M, C) {
            if (typeof x == "string") {
              if (
                (typeof o == "string"
                  ? ((C = o), (o = 0), (M = this.length))
                  : typeof M == "string" && ((C = M), (M = this.length)),
                C !== void 0 && typeof C != "string")
              )
                throw new TypeError("encoding must be a string");
              if (typeof C == "string" && !F.isEncoding(C))
                throw new TypeError("Unknown encoding: " + C);
              if (x.length === 1) {
                const X = x.charCodeAt(0);
                ((C === "utf8" && X < 128) || C === "latin1") && (x = X);
              }
            } else
              typeof x == "number"
                ? (x = x & 255)
                : typeof x == "boolean" && (x = Number(x));
            if (o < 0 || this.length < o || this.length < M)
              throw new RangeError("Out of range index");
            if (M <= o) return this;
            (o = o >>> 0),
              (M = M === void 0 ? this.length : M >>> 0),
              x || (x = 0);
            let E;
            if (typeof x == "number") for (E = o; E < M; ++E) this[E] = x;
            else {
              const X = F.isBuffer(x) ? x : F.from(x, C),
                Z0 = X.length;
              if (Z0 === 0)
                throw new TypeError(
                  'The value "' + x + '" is invalid for argument "value"'
                );
              for (E = 0; E < M - o; ++E) this[E + o] = X[E % Z0];
            }
            return this;
          });
        const xn = {};
        function nn(I, x, o) {
          xn[I] = class extends o {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: x.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${I}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return I;
            }
            set code(C) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: C,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${I}]: ${this.message}`;
            }
          };
        }
        nn(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (I) {
            return I
              ? `${I} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          nn(
            "ERR_INVALID_ARG_TYPE",
            function (I, x) {
              return `The "${I}" argument must be of type number. Received type ${typeof x}`;
            },
            TypeError
          ),
          nn(
            "ERR_OUT_OF_RANGE",
            function (I, x, o) {
              let M = `The value of "${I}" is out of range.`,
                C = o;
              return (
                Number.isInteger(o) && Math.abs(o) > 2 ** 32
                  ? (C = vn(String(o)))
                  : typeof o == "bigint" &&
                    ((C = String(o)),
                    (o > BigInt(2) ** BigInt(32) ||
                      o < -(BigInt(2) ** BigInt(32))) &&
                      (C = vn(C)),
                    (C += "n")),
                (M += ` It must be ${x}. Received ${C}`),
                M
              );
            },
            RangeError
          );
        function vn(I) {
          let x = "",
            o = I.length;
          const M = I[0] === "-" ? 1 : 0;
          for (; o >= M + 4; o -= 3) x = `_${I.slice(o - 3, o)}${x}`;
          return `${I.slice(0, o)}${x}`;
        }
        function Jn(I, x, o) {
          Ln(x, "offset"),
            (I[x] === void 0 || I[x + o] === void 0) &&
              D0(x, I.length - (o + 1));
        }
        function an(I, x, o, M, C, E) {
          if (I > o || I < x) {
            const X = typeof x == "bigint" ? "n" : "";
            let Z0;
            throw (
              (x === 0 || x === BigInt(0)
                ? (Z0 = `>= 0${X} and < 2${X} ** ${(E + 1) * 8}${X}`)
                : (Z0 = `>= -(2${X} ** ${(E + 1) * 8 - 1}${X}) and < 2 ** ${
                    (E + 1) * 8 - 1
                  }${X}`),
              new xn.ERR_OUT_OF_RANGE("value", Z0, I))
            );
          }
          Jn(M, C, E);
        }
        function Ln(I, x) {
          if (typeof I != "number")
            throw new xn.ERR_INVALID_ARG_TYPE(x, "number", I);
        }
        function D0(I, x, o) {
          throw Math.floor(I) !== I
            ? (Ln(I, o), new xn.ERR_OUT_OF_RANGE("offset", "an integer", I))
            : x < 0
            ? new xn.ERR_BUFFER_OUT_OF_BOUNDS()
            : new xn.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${x}`, I);
        }
        const sn = /[^+/0-9A-Za-z-_]/g;
        function w(I) {
          if (
            ((I = I.split("=")[0]),
            (I = I.trim().replace(sn, "")),
            I.length < 2)
          )
            return "";
          for (; I.length % 4 !== 0; ) I = I + "=";
          return I;
        }
        function V(I, x) {
          x = x || 1 / 0;
          let o;
          const M = I.length;
          let C = null;
          const E = [];
          for (let X = 0; X < M; ++X) {
            if (((o = I.charCodeAt(X)), o > 55295 && o < 57344)) {
              if (!C) {
                if (o > 56319) {
                  (x -= 3) > -1 && E.push(239, 191, 189);
                  continue;
                } else if (X + 1 === M) {
                  (x -= 3) > -1 && E.push(239, 191, 189);
                  continue;
                }
                C = o;
                continue;
              }
              if (o < 56320) {
                (x -= 3) > -1 && E.push(239, 191, 189), (C = o);
                continue;
              }
              o = (((C - 55296) << 10) | (o - 56320)) + 65536;
            } else C && (x -= 3) > -1 && E.push(239, 191, 189);
            if (((C = null), o < 128)) {
              if ((x -= 1) < 0) break;
              E.push(o);
            } else if (o < 2048) {
              if ((x -= 2) < 0) break;
              E.push((o >> 6) | 192, (o & 63) | 128);
            } else if (o < 65536) {
              if ((x -= 3) < 0) break;
              E.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (o & 63) | 128);
            } else if (o < 1114112) {
              if ((x -= 4) < 0) break;
              E.push(
                (o >> 18) | 240,
                ((o >> 12) & 63) | 128,
                ((o >> 6) & 63) | 128,
                (o & 63) | 128
              );
            } else throw new Error("Invalid code point");
          }
          return E;
        }
        function K(I) {
          const x = [];
          for (let o = 0; o < I.length; ++o) x.push(I.charCodeAt(o) & 255);
          return x;
        }
        function x0(I, x) {
          let o, M, C;
          const E = [];
          for (let X = 0; X < I.length && !((x -= 2) < 0); ++X)
            (o = I.charCodeAt(X)),
              (M = o >> 8),
              (C = o % 256),
              E.push(C),
              E.push(M);
          return E;
        }
        function Q0(I) {
          return S.toByteArray(w(I));
        }
        function F0(I, x, o, M) {
          let C;
          for (C = 0; C < M && !(C + o >= x.length || C >= I.length); ++C)
            x[C + o] = I[C];
          return C;
        }
        function u0(I, x) {
          return (
            I instanceof x ||
            (I != null &&
              I.constructor != null &&
              I.constructor.name != null &&
              I.constructor.name === x.name)
          );
        }
        function Fn(I) {
          return I !== I;
        }
        const P2 = (function () {
          const I = "0123456789abcdef",
            x = new Array(256);
          for (let o = 0; o < 16; ++o) {
            const M = o * 16;
            for (let C = 0; C < 16; ++C) x[M + C] = I[o] + I[C];
          }
          return x;
        })();
        function hn(I) {
          return typeof BigInt > "u" ? t2 : I;
        }
        function t2() {
          throw new Error("BigInt not supported");
        }
      })(buffer$a)),
    buffer$a
  );
}
var alphabets, hasRequiredAlphabets;
function requireAlphabets() {
  if (hasRequiredAlphabets) return alphabets;
  hasRequiredAlphabets = 1;
  const Q = {},
    S = (m) => {
      var v = {};
      return (
        (v.chars = m),
        (v.enc = Array.from(m)),
        (v.dec = {}),
        v.enc.forEach((Z, g) => {
          v.dec[Z.charCodeAt(0)] = g;
        }),
        v
      );
    };
  return (
    (Q.ascii85 = S(
      "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstu"
    )),
    (Q.btoa = S(
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~"
    )),
    (Q.z85 = S(
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#"
    )),
    (Q.z85pad = Q.z85),
    (Q.a85 = Q.ascii85),
    (Q.ipv6 = Q.btoa),
    (alphabets = Q),
    alphabets
  );
}
var ipAddress = {},
  jsbn$1 = { exports: {} },
  jsbn = jsbn$1.exports,
  hasRequiredJsbn;
function requireJsbn() {
  return (
    hasRequiredJsbn ||
      ((hasRequiredJsbn = 1),
      (function (Q, S) {
        (function () {
          var m,
            v = 0xdeadbeefcafe,
            Z = (v & 16777215) == 15715070;
          function g(t, a, r) {
            t != null &&
              (typeof t == "number"
                ? this.fromNumber(t, a, r)
                : a == null && typeof t != "string"
                ? this.fromString(t, 256)
                : this.fromString(t, a));
          }
          function f() {
            return new g(null);
          }
          function F(t, a, r, z, D, _) {
            for (; --_ >= 0; ) {
              var a0 = a * this[t++] + r[z] + D;
              (D = Math.floor(a0 / 67108864)), (r[z++] = a0 & 67108863);
            }
            return D;
          }
          function s(t, a, r, z, D, _) {
            for (var a0 = a & 32767, i0 = a >> 15; --_ >= 0; ) {
              var q0 = this[t] & 32767,
                In = this[t++] >> 15,
                un = i0 * q0 + In * a0;
              (q0 = a0 * q0 + ((un & 32767) << 15) + r[z] + (D & 1073741823)),
                (D = (q0 >>> 30) + (un >>> 15) + i0 * In + (D >>> 30)),
                (r[z++] = q0 & 1073741823);
            }
            return D;
          }
          function H(t, a, r, z, D, _) {
            for (var a0 = a & 16383, i0 = a >> 14; --_ >= 0; ) {
              var q0 = this[t] & 16383,
                In = this[t++] >> 14,
                un = i0 * q0 + In * a0;
              (q0 = a0 * q0 + ((un & 16383) << 14) + r[z] + D),
                (D = (q0 >> 28) + (un >> 14) + i0 * In),
                (r[z++] = q0 & 268435455);
            }
            return D;
          }
          var c0 = typeof navigator < "u";
          c0 && Z && navigator.appName == "Microsoft Internet Explorer"
            ? ((g.prototype.am = s), (m = 30))
            : c0 && Z && navigator.appName != "Netscape"
            ? ((g.prototype.am = F), (m = 26))
            : ((g.prototype.am = H), (m = 28)),
            (g.prototype.DB = m),
            (g.prototype.DM = (1 << m) - 1),
            (g.prototype.DV = 1 << m);
          var d = 52;
          (g.prototype.FV = Math.pow(2, d)),
            (g.prototype.F1 = d - m),
            (g.prototype.F2 = 2 * m - d);
          var B = "0123456789abcdefghijklmnopqrstuvwxyz",
            k = new Array(),
            p,
            u;
          for (p = 48, u = 0; u <= 9; ++u) k[p++] = u;
          for (p = 97, u = 10; u < 36; ++u) k[p++] = u;
          for (p = 65, u = 10; u < 36; ++u) k[p++] = u;
          function j(t) {
            return B.charAt(t);
          }
          function b0(t, a) {
            var r = k[t.charCodeAt(a)];
            return r ?? -1;
          }
          function g0(t) {
            for (var a = this.t - 1; a >= 0; --a) t[a] = this[a];
            (t.t = this.t), (t.s = this.s);
          }
          function h0(t) {
            (this.t = 1),
              (this.s = t < 0 ? -1 : 0),
              t > 0
                ? (this[0] = t)
                : t < -1
                ? (this[0] = t + this.DV)
                : (this.t = 0);
          }
          function W(t) {
            var a = f();
            return a.fromInt(t), a;
          }
          function O(t, a) {
            var r;
            if (a == 16) r = 4;
            else if (a == 8) r = 3;
            else if (a == 256) r = 8;
            else if (a == 2) r = 1;
            else if (a == 32) r = 5;
            else if (a == 4) r = 2;
            else {
              this.fromRadix(t, a);
              return;
            }
            (this.t = 0), (this.s = 0);
            for (var z = t.length, D = !1, _ = 0; --z >= 0; ) {
              var a0 = r == 8 ? t[z] & 255 : b0(t, z);
              if (a0 < 0) {
                t.charAt(z) == "-" && (D = !0);
                continue;
              }
              (D = !1),
                _ == 0
                  ? (this[this.t++] = a0)
                  : _ + r > this.DB
                  ? ((this[this.t - 1] |=
                      (a0 & ((1 << (this.DB - _)) - 1)) << _),
                    (this[this.t++] = a0 >> (this.DB - _)))
                  : (this[this.t - 1] |= a0 << _),
                (_ += r),
                _ >= this.DB && (_ -= this.DB);
            }
            r == 8 &&
              (t[0] & 128) != 0 &&
              ((this.s = -1),
              _ > 0 && (this[this.t - 1] |= ((1 << (this.DB - _)) - 1) << _)),
              this.clamp(),
              D && g.ZERO.subTo(this, this);
          }
          function $() {
            for (
              var t = this.s & this.DM;
              this.t > 0 && this[this.t - 1] == t;

            )
              --this.t;
          }
          function o0(t) {
            if (this.s < 0) return "-" + this.negate().toString(t);
            var a;
            if (t == 16) a = 4;
            else if (t == 8) a = 3;
            else if (t == 2) a = 1;
            else if (t == 32) a = 5;
            else if (t == 4) a = 2;
            else return this.toRadix(t);
            var r = (1 << a) - 1,
              z,
              D = !1,
              _ = "",
              a0 = this.t,
              i0 = this.DB - ((a0 * this.DB) % a);
            if (a0-- > 0)
              for (
                i0 < this.DB &&
                (z = this[a0] >> i0) > 0 &&
                ((D = !0), (_ = j(z)));
                a0 >= 0;

              )
                i0 < a
                  ? ((z = (this[a0] & ((1 << i0) - 1)) << (a - i0)),
                    (z |= this[--a0] >> (i0 += this.DB - a)))
                  : ((z = (this[a0] >> (i0 -= a)) & r),
                    i0 <= 0 && ((i0 += this.DB), --a0)),
                  z > 0 && (D = !0),
                  D && (_ += j(z));
            return D ? _ : "0";
          }
          function A0() {
            var t = f();
            return g.ZERO.subTo(this, t), t;
          }
          function y() {
            return this.s < 0 ? this.negate() : this;
          }
          function N(t) {
            var a = this.s - t.s;
            if (a != 0) return a;
            var r = this.t;
            if (((a = r - t.t), a != 0)) return this.s < 0 ? -a : a;
            for (; --r >= 0; ) if ((a = this[r] - t[r]) != 0) return a;
            return 0;
          }
          function G(t) {
            var a = 1,
              r;
            return (
              (r = t >>> 16) != 0 && ((t = r), (a += 16)),
              (r = t >> 8) != 0 && ((t = r), (a += 8)),
              (r = t >> 4) != 0 && ((t = r), (a += 4)),
              (r = t >> 2) != 0 && ((t = r), (a += 2)),
              (r = t >> 1) != 0 && ((t = r), (a += 1)),
              a
            );
          }
          function m0() {
            return this.t <= 0
              ? 0
              : this.DB * (this.t - 1) +
                  G(this[this.t - 1] ^ (this.s & this.DM));
          }
          function M0(t, a) {
            var r;
            for (r = this.t - 1; r >= 0; --r) a[r + t] = this[r];
            for (r = t - 1; r >= 0; --r) a[r] = 0;
            (a.t = this.t + t), (a.s = this.s);
          }
          function N0(t, a) {
            for (var r = t; r < this.t; ++r) a[r - t] = this[r];
            (a.t = Math.max(this.t - t, 0)), (a.s = this.s);
          }
          function p0(t, a) {
            var r = t % this.DB,
              z = this.DB - r,
              D = (1 << z) - 1,
              _ = Math.floor(t / this.DB),
              a0 = (this.s << r) & this.DM,
              i0;
            for (i0 = this.t - 1; i0 >= 0; --i0)
              (a[i0 + _ + 1] = (this[i0] >> z) | a0),
                (a0 = (this[i0] & D) << r);
            for (i0 = _ - 1; i0 >= 0; --i0) a[i0] = 0;
            (a[_] = a0), (a.t = this.t + _ + 1), (a.s = this.s), a.clamp();
          }
          function _0(t, a) {
            a.s = this.s;
            var r = Math.floor(t / this.DB);
            if (r >= this.t) {
              a.t = 0;
              return;
            }
            var z = t % this.DB,
              D = this.DB - z,
              _ = (1 << z) - 1;
            a[0] = this[r] >> z;
            for (var a0 = r + 1; a0 < this.t; ++a0)
              (a[a0 - r - 1] |= (this[a0] & _) << D),
                (a[a0 - r] = this[a0] >> z);
            z > 0 && (a[this.t - r - 1] |= (this.s & _) << D),
              (a.t = this.t - r),
              a.clamp();
          }
          function T0(t, a) {
            for (var r = 0, z = 0, D = Math.min(t.t, this.t); r < D; )
              (z += this[r] - t[r]), (a[r++] = z & this.DM), (z >>= this.DB);
            if (t.t < this.t) {
              for (z -= t.s; r < this.t; )
                (z += this[r]), (a[r++] = z & this.DM), (z >>= this.DB);
              z += this.s;
            } else {
              for (z += this.s; r < t.t; )
                (z -= t[r]), (a[r++] = z & this.DM), (z >>= this.DB);
              z -= t.s;
            }
            (a.s = z < 0 ? -1 : 0),
              z < -1 ? (a[r++] = this.DV + z) : z > 0 && (a[r++] = z),
              (a.t = r),
              a.clamp();
          }
          function y0(t, a) {
            var r = this.abs(),
              z = t.abs(),
              D = r.t;
            for (a.t = D + z.t; --D >= 0; ) a[D] = 0;
            for (D = 0; D < z.t; ++D) a[D + r.t] = r.am(0, z[D], a, D, 0, r.t);
            (a.s = 0), a.clamp(), this.s != t.s && g.ZERO.subTo(a, a);
          }
          function Cn(t) {
            for (var a = this.abs(), r = (t.t = 2 * a.t); --r >= 0; ) t[r] = 0;
            for (r = 0; r < a.t - 1; ++r) {
              var z = a.am(r, a[r], t, 2 * r, 0, 1);
              (t[r + a.t] += a.am(
                r + 1,
                2 * a[r],
                t,
                2 * r + 1,
                z,
                a.t - r - 1
              )) >= a.DV && ((t[r + a.t] -= a.DV), (t[r + a.t + 1] = 1));
            }
            t.t > 0 && (t[t.t - 1] += a.am(r, a[r], t, 2 * r, 0, 1)),
              (t.s = 0),
              t.clamp();
          }
          function v0(t, a, r) {
            var z = t.abs();
            if (!(z.t <= 0)) {
              var D = this.abs();
              if (D.t < z.t) {
                a?.fromInt(0), r != null && this.copyTo(r);
                return;
              }
              r == null && (r = f());
              var _ = f(),
                a0 = this.s,
                i0 = t.s,
                q0 = this.DB - G(z[z.t - 1]);
              q0 > 0
                ? (z.lShiftTo(q0, _), D.lShiftTo(q0, r))
                : (z.copyTo(_), D.copyTo(r));
              var In = _.t,
                un = _[In - 1];
              if (un != 0) {
                var Rn =
                    un * (1 << this.F1) + (In > 1 ? _[In - 2] >> this.F2 : 0),
                  A2 = this.FV / Rn,
                  M8 = (1 << this.F1) / Rn,
                  On = 1 << this.F2,
                  Yn = r.t,
                  F8 = Yn - In,
                  l2 = a ?? f();
                for (
                  _.dlShiftTo(F8, l2),
                    r.compareTo(l2) >= 0 && ((r[r.t++] = 1), r.subTo(l2, r)),
                    g.ONE.dlShiftTo(In, l2),
                    l2.subTo(_, _);
                  _.t < In;

                )
                  _[_.t++] = 0;
                for (; --F8 >= 0; ) {
                  var n4 =
                    r[--Yn] == un
                      ? this.DM
                      : Math.floor(r[Yn] * A2 + (r[Yn - 1] + On) * M8);
                  if ((r[Yn] += _.am(0, n4, r, F8, 0, In)) < n4)
                    for (_.dlShiftTo(F8, l2), r.subTo(l2, r); r[Yn] < --n4; )
                      r.subTo(l2, r);
                }
                a != null &&
                  (r.drShiftTo(In, a), a0 != i0 && g.ZERO.subTo(a, a)),
                  (r.t = In),
                  r.clamp(),
                  q0 > 0 && r.rShiftTo(q0, r),
                  a0 < 0 && g.ZERO.subTo(r, r);
              }
            }
          }
          function z0(t) {
            var a = f();
            return (
              this.abs().divRemTo(t, null, a),
              this.s < 0 && a.compareTo(g.ZERO) > 0 && t.subTo(a, a),
              a
            );
          }
          function E0(t) {
            this.m = t;
          }
          function Hn(t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
          }
          function Tn(t) {
            return t;
          }
          function Qn(t) {
            t.divRemTo(this.m, null, t);
          }
          function Nn(t, a, r) {
            t.multiplyTo(a, r), this.reduce(r);
          }
          function Mn(t, a) {
            t.squareTo(a), this.reduce(a);
          }
          (E0.prototype.convert = Hn),
            (E0.prototype.revert = Tn),
            (E0.prototype.reduce = Qn),
            (E0.prototype.mulTo = Nn),
            (E0.prototype.sqrTo = Mn);
          function xn() {
            if (this.t < 1) return 0;
            var t = this[0];
            if ((t & 1) == 0) return 0;
            var a = t & 3;
            return (
              (a = (a * (2 - (t & 15) * a)) & 15),
              (a = (a * (2 - (t & 255) * a)) & 255),
              (a = (a * (2 - (((t & 65535) * a) & 65535))) & 65535),
              (a = (a * (2 - ((t * a) % this.DV))) % this.DV),
              a > 0 ? this.DV - a : -a
            );
          }
          function nn(t) {
            (this.m = t),
              (this.mp = t.invDigit()),
              (this.mpl = this.mp & 32767),
              (this.mph = this.mp >> 15),
              (this.um = (1 << (t.DB - 15)) - 1),
              (this.mt2 = 2 * t.t);
          }
          function vn(t) {
            var a = f();
            return (
              t.abs().dlShiftTo(this.m.t, a),
              a.divRemTo(this.m, null, a),
              t.s < 0 && a.compareTo(g.ZERO) > 0 && this.m.subTo(a, a),
              a
            );
          }
          function Jn(t) {
            var a = f();
            return t.copyTo(a), this.reduce(a), a;
          }
          function an(t) {
            for (; t.t <= this.mt2; ) t[t.t++] = 0;
            for (var a = 0; a < this.m.t; ++a) {
              var r = t[a] & 32767,
                z =
                  (r * this.mpl +
                    (((r * this.mph + (t[a] >> 15) * this.mpl) & this.um) <<
                      15)) &
                  t.DM;
              for (
                r = a + this.m.t, t[r] += this.m.am(0, z, t, a, 0, this.m.t);
                t[r] >= t.DV;

              )
                (t[r] -= t.DV), t[++r]++;
            }
            t.clamp(),
              t.drShiftTo(this.m.t, t),
              t.compareTo(this.m) >= 0 && t.subTo(this.m, t);
          }
          function Ln(t, a) {
            t.squareTo(a), this.reduce(a);
          }
          function D0(t, a, r) {
            t.multiplyTo(a, r), this.reduce(r);
          }
          (nn.prototype.convert = vn),
            (nn.prototype.revert = Jn),
            (nn.prototype.reduce = an),
            (nn.prototype.mulTo = D0),
            (nn.prototype.sqrTo = Ln);
          function sn() {
            return (this.t > 0 ? this[0] & 1 : this.s) == 0;
          }
          function w(t, a) {
            if (t > 4294967295 || t < 1) return g.ONE;
            var r = f(),
              z = f(),
              D = a.convert(this),
              _ = G(t) - 1;
            for (D.copyTo(r); --_ >= 0; )
              if ((a.sqrTo(r, z), (t & (1 << _)) > 0)) a.mulTo(z, D, r);
              else {
                var a0 = r;
                (r = z), (z = a0);
              }
            return a.revert(r);
          }
          function V(t, a) {
            var r;
            return (
              t < 256 || a.isEven() ? (r = new E0(a)) : (r = new nn(a)),
              this.exp(t, r)
            );
          }
          (g.prototype.copyTo = g0),
            (g.prototype.fromInt = h0),
            (g.prototype.fromString = O),
            (g.prototype.clamp = $),
            (g.prototype.dlShiftTo = M0),
            (g.prototype.drShiftTo = N0),
            (g.prototype.lShiftTo = p0),
            (g.prototype.rShiftTo = _0),
            (g.prototype.subTo = T0),
            (g.prototype.multiplyTo = y0),
            (g.prototype.squareTo = Cn),
            (g.prototype.divRemTo = v0),
            (g.prototype.invDigit = xn),
            (g.prototype.isEven = sn),
            (g.prototype.exp = w),
            (g.prototype.toString = o0),
            (g.prototype.negate = A0),
            (g.prototype.abs = y),
            (g.prototype.compareTo = N),
            (g.prototype.bitLength = m0),
            (g.prototype.mod = z0),
            (g.prototype.modPowInt = V),
            (g.ZERO = W(0)),
            (g.ONE = W(1));
          function K() {
            var t = f();
            return this.copyTo(t), t;
          }
          function x0() {
            if (this.s < 0) {
              if (this.t == 1) return this[0] - this.DV;
              if (this.t == 0) return -1;
            } else {
              if (this.t == 1) return this[0];
              if (this.t == 0) return 0;
            }
            return (
              ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
            );
          }
          function Q0() {
            return this.t == 0 ? this.s : (this[0] << 24) >> 24;
          }
          function F0() {
            return this.t == 0 ? this.s : (this[0] << 16) >> 16;
          }
          function u0(t) {
            return Math.floor((Math.LN2 * this.DB) / Math.log(t));
          }
          function Fn() {
            return this.s < 0
              ? -1
              : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
          }
          function P2(t) {
            if ((t == null && (t = 10), this.signum() == 0 || t < 2 || t > 36))
              return "0";
            var a = this.chunkSize(t),
              r = Math.pow(t, a),
              z = W(r),
              D = f(),
              _ = f(),
              a0 = "";
            for (this.divRemTo(z, D, _); D.signum() > 0; )
              (a0 = (r + _.intValue()).toString(t).substr(1) + a0),
                D.divRemTo(z, D, _);
            return _.intValue().toString(t) + a0;
          }
          function hn(t, a) {
            this.fromInt(0), a == null && (a = 10);
            for (
              var r = this.chunkSize(a),
                z = Math.pow(a, r),
                D = !1,
                _ = 0,
                a0 = 0,
                i0 = 0;
              i0 < t.length;
              ++i0
            ) {
              var q0 = b0(t, i0);
              if (q0 < 0) {
                t.charAt(i0) == "-" && this.signum() == 0 && (D = !0);
                continue;
              }
              (a0 = a * a0 + q0),
                ++_ >= r &&
                  (this.dMultiply(z),
                  this.dAddOffset(a0, 0),
                  (_ = 0),
                  (a0 = 0));
            }
            _ > 0 && (this.dMultiply(Math.pow(a, _)), this.dAddOffset(a0, 0)),
              D && g.ZERO.subTo(this, this);
          }
          function t2(t, a, r) {
            if (typeof a == "number")
              if (t < 2) this.fromInt(1);
              else
                for (
                  this.fromNumber(t, r),
                    this.testBit(t - 1) ||
                      this.bitwiseTo(g.ONE.shiftLeft(t - 1), Z0, this),
                    this.isEven() && this.dAddOffset(1, 0);
                  !this.isProbablePrime(a);

                )
                  this.dAddOffset(2, 0),
                    this.bitLength() > t &&
                      this.subTo(g.ONE.shiftLeft(t - 1), this);
            else {
              var z = new Array(),
                D = t & 7;
              (z.length = (t >> 3) + 1),
                a.nextBytes(z),
                D > 0 ? (z[0] &= (1 << D) - 1) : (z[0] = 0),
                this.fromString(z, 256);
            }
          }
          function I() {
            var t = this.t,
              a = new Array();
            a[0] = this.s;
            var r = this.DB - ((t * this.DB) % 8),
              z,
              D = 0;
            if (t-- > 0)
              for (
                r < this.DB &&
                (z = this[t] >> r) != (this.s & this.DM) >> r &&
                (a[D++] = z | (this.s << (this.DB - r)));
                t >= 0;

              )
                r < 8
                  ? ((z = (this[t] & ((1 << r) - 1)) << (8 - r)),
                    (z |= this[--t] >> (r += this.DB - 8)))
                  : ((z = (this[t] >> (r -= 8)) & 255),
                    r <= 0 && ((r += this.DB), --t)),
                  (z & 128) != 0 && (z |= -256),
                  D == 0 && (this.s & 128) != (z & 128) && ++D,
                  (D > 0 || z != this.s) && (a[D++] = z);
            return a;
          }
          function x(t) {
            return this.compareTo(t) == 0;
          }
          function o(t) {
            return this.compareTo(t) < 0 ? this : t;
          }
          function M(t) {
            return this.compareTo(t) > 0 ? this : t;
          }
          function C(t, a, r) {
            var z,
              D,
              _ = Math.min(t.t, this.t);
            for (z = 0; z < _; ++z) r[z] = a(this[z], t[z]);
            if (t.t < this.t) {
              for (D = t.s & this.DM, z = _; z < this.t; ++z)
                r[z] = a(this[z], D);
              r.t = this.t;
            } else {
              for (D = this.s & this.DM, z = _; z < t.t; ++z) r[z] = a(D, t[z]);
              r.t = t.t;
            }
            (r.s = a(this.s, t.s)), r.clamp();
          }
          function E(t, a) {
            return t & a;
          }
          function X(t) {
            var a = f();
            return this.bitwiseTo(t, E, a), a;
          }
          function Z0(t, a) {
            return t | a;
          }
          function G0(t) {
            var a = f();
            return this.bitwiseTo(t, Z0, a), a;
          }
          function P0(t, a) {
            return t ^ a;
          }
          function H0(t) {
            var a = f();
            return this.bitwiseTo(t, P0, a), a;
          }
          function K0(t, a) {
            return t & ~a;
          }
          function u8(t) {
            var a = f();
            return this.bitwiseTo(t, K0, a), a;
          }
          function R8() {
            for (var t = f(), a = 0; a < this.t; ++a) t[a] = this.DM & ~this[a];
            return (t.t = this.t), (t.s = ~this.s), t;
          }
          function c8(t) {
            var a = f();
            return t < 0 ? this.rShiftTo(-t, a) : this.lShiftTo(t, a), a;
          }
          function x8(t) {
            var a = f();
            return t < 0 ? this.lShiftTo(-t, a) : this.rShiftTo(t, a), a;
          }
          function Y8(t) {
            if (t == 0) return -1;
            var a = 0;
            return (
              (t & 65535) == 0 && ((t >>= 16), (a += 16)),
              (t & 255) == 0 && ((t >>= 8), (a += 8)),
              (t & 15) == 0 && ((t >>= 4), (a += 4)),
              (t & 3) == 0 && ((t >>= 2), (a += 2)),
              (t & 1) == 0 && ++a,
              a
            );
          }
          function V8() {
            for (var t = 0; t < this.t; ++t)
              if (this[t] != 0) return t * this.DB + Y8(this[t]);
            return this.s < 0 ? this.t * this.DB : -1;
          }
          function p8(t) {
            for (var a = 0; t != 0; ) (t &= t - 1), ++a;
            return a;
          }
          function o8() {
            for (var t = 0, a = this.s & this.DM, r = 0; r < this.t; ++r)
              t += p8(this[r] ^ a);
            return t;
          }
          function t8(t) {
            var a = Math.floor(t / this.DB);
            return a >= this.t
              ? this.s != 0
              : (this[a] & (1 << t % this.DB)) != 0;
          }
          function m8(t, a) {
            var r = g.ONE.shiftLeft(t);
            return this.bitwiseTo(r, a, r), r;
          }
          function j8(t) {
            return this.changeBit(t, Z0);
          }
          function d8(t) {
            return this.changeBit(t, K0);
          }
          function G2(t) {
            return this.changeBit(t, P0);
          }
          function K8(t, a) {
            for (var r = 0, z = 0, D = Math.min(t.t, this.t); r < D; )
              (z += this[r] + t[r]), (a[r++] = z & this.DM), (z >>= this.DB);
            if (t.t < this.t) {
              for (z += t.s; r < this.t; )
                (z += this[r]), (a[r++] = z & this.DM), (z >>= this.DB);
              z += this.s;
            } else {
              for (z += this.s; r < t.t; )
                (z += t[r]), (a[r++] = z & this.DM), (z >>= this.DB);
              z += t.s;
            }
            (a.s = z < 0 ? -1 : 0),
              z > 0 ? (a[r++] = z) : z < -1 && (a[r++] = this.DV + z),
              (a.t = r),
              a.clamp();
          }
          function H2(t) {
            var a = f();
            return this.addTo(t, a), a;
          }
          function E8(t) {
            var a = f();
            return this.subTo(t, a), a;
          }
          function C2(t) {
            var a = f();
            return this.multiplyTo(t, a), a;
          }
          function A8() {
            var t = f();
            return this.squareTo(t), t;
          }
          function P8(t) {
            var a = f();
            return this.divRemTo(t, a, null), a;
          }
          function G8(t) {
            var a = f();
            return this.divRemTo(t, null, a), a;
          }
          function H8(t) {
            var a = f(),
              r = f();
            return this.divRemTo(t, a, r), new Array(a, r);
          }
          function O8(t) {
            (this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
              ++this.t,
              this.clamp();
          }
          function W8(t, a) {
            if (t != 0) {
              for (; this.t <= a; ) this[this.t++] = 0;
              for (this[a] += t; this[a] >= this.DV; )
                (this[a] -= this.DV),
                  ++a >= this.t && (this[this.t++] = 0),
                  ++this[a];
            }
          }
          function m2() {}
          function a8(t) {
            return t;
          }
          function y8(t, a, r) {
            t.multiplyTo(a, r);
          }
          function X8(t, a) {
            t.squareTo(a);
          }
          (m2.prototype.convert = a8),
            (m2.prototype.revert = a8),
            (m2.prototype.mulTo = y8),
            (m2.prototype.sqrTo = X8);
          function D8(t) {
            return this.exp(t, new m2());
          }
          function q8(t, a, r) {
            var z = Math.min(this.t + t.t, a);
            for (r.s = 0, r.t = z; z > 0; ) r[--z] = 0;
            var D;
            for (D = r.t - this.t; z < D; ++z)
              r[z + this.t] = this.am(0, t[z], r, z, 0, this.t);
            for (D = Math.min(t.t, a); z < D; ++z)
              this.am(0, t[z], r, z, 0, a - z);
            r.clamp();
          }
          function g8(t, a, r) {
            --a;
            var z = (r.t = this.t + t.t - a);
            for (r.s = 0; --z >= 0; ) r[z] = 0;
            for (z = Math.max(a - this.t, 0); z < t.t; ++z)
              r[this.t + z - a] = this.am(a - z, t[z], r, 0, 0, this.t + z - a);
            r.clamp(), r.drShiftTo(1, r);
          }
          function dn(t) {
            (this.r2 = f()),
              (this.q3 = f()),
              g.ONE.dlShiftTo(2 * t.t, this.r2),
              (this.mu = this.r2.divide(t)),
              (this.m = t);
          }
          function U8(t) {
            if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
            if (t.compareTo(this.m) < 0) return t;
            var a = f();
            return t.copyTo(a), this.reduce(a), a;
          }
          function h2(t) {
            return t;
          }
          function S2(t) {
            for (
              t.drShiftTo(this.m.t - 1, this.r2),
                t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
              t.compareTo(this.r2) < 0;

            )
              t.dAddOffset(1, this.m.t + 1);
            for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
              t.subTo(this.m, t);
          }
          function I8(t, a) {
            t.squareTo(a), this.reduce(a);
          }
          function O2(t, a, r) {
            t.multiplyTo(a, r), this.reduce(r);
          }
          (dn.prototype.convert = U8),
            (dn.prototype.revert = h2),
            (dn.prototype.reduce = S2),
            (dn.prototype.mulTo = O2),
            (dn.prototype.sqrTo = I8);
          function W2(t, a) {
            var r = t.bitLength(),
              z,
              D = W(1),
              _;
            if (r <= 0) return D;
            r < 18
              ? (z = 1)
              : r < 48
              ? (z = 3)
              : r < 144
              ? (z = 4)
              : r < 768
              ? (z = 5)
              : (z = 6),
              r < 8
                ? (_ = new E0(a))
                : a.isEven()
                ? (_ = new dn(a))
                : (_ = new nn(a));
            var a0 = new Array(),
              i0 = 3,
              q0 = z - 1,
              In = (1 << z) - 1;
            if (((a0[1] = _.convert(this)), z > 1)) {
              var un = f();
              for (_.sqrTo(a0[1], un); i0 <= In; )
                (a0[i0] = f()), _.mulTo(un, a0[i0 - 2], a0[i0]), (i0 += 2);
            }
            var Rn = t.t - 1,
              A2,
              M8 = !0,
              On = f(),
              Yn;
            for (r = G(t[Rn]) - 1; Rn >= 0; ) {
              for (
                r >= q0
                  ? (A2 = (t[Rn] >> (r - q0)) & In)
                  : ((A2 = (t[Rn] & ((1 << (r + 1)) - 1)) << (q0 - r)),
                    Rn > 0 && (A2 |= t[Rn - 1] >> (this.DB + r - q0))),
                  i0 = z;
                (A2 & 1) == 0;

              )
                (A2 >>= 1), --i0;
              if (((r -= i0) < 0 && ((r += this.DB), --Rn), M8))
                a0[A2].copyTo(D), (M8 = !1);
              else {
                for (; i0 > 1; ) _.sqrTo(D, On), _.sqrTo(On, D), (i0 -= 2);
                i0 > 0 ? _.sqrTo(D, On) : ((Yn = D), (D = On), (On = Yn)),
                  _.mulTo(On, a0[A2], D);
              }
              for (; Rn >= 0 && (t[Rn] & (1 << r)) == 0; )
                _.sqrTo(D, On),
                  (Yn = D),
                  (D = On),
                  (On = Yn),
                  --r < 0 && ((r = this.DB - 1), --Rn);
            }
            return _.revert(D);
          }
          function i8(t) {
            var a = this.s < 0 ? this.negate() : this.clone(),
              r = t.s < 0 ? t.negate() : t.clone();
            if (a.compareTo(r) < 0) {
              var z = a;
              (a = r), (r = z);
            }
            var D = a.getLowestSetBit(),
              _ = r.getLowestSetBit();
            if (_ < 0) return a;
            for (
              D < _ && (_ = D), _ > 0 && (a.rShiftTo(_, a), r.rShiftTo(_, r));
              a.signum() > 0;

            )
              (D = a.getLowestSetBit()) > 0 && a.rShiftTo(D, a),
                (D = r.getLowestSetBit()) > 0 && r.rShiftTo(D, r),
                a.compareTo(r) >= 0
                  ? (a.subTo(r, a), a.rShiftTo(1, a))
                  : (r.subTo(a, r), r.rShiftTo(1, r));
            return _ > 0 && r.lShiftTo(_, r), r;
          }
          function h8(t) {
            if (t <= 0) return 0;
            var a = this.DV % t,
              r = this.s < 0 ? t - 1 : 0;
            if (this.t > 0)
              if (a == 0) r = this[0] % t;
              else
                for (var z = this.t - 1; z >= 0; --z) r = (a * r + this[z]) % t;
            return r;
          }
          function T8(t) {
            var a = t.isEven();
            if ((this.isEven() && a) || t.signum() == 0) return g.ZERO;
            for (
              var r = t.clone(),
                z = this.clone(),
                D = W(1),
                _ = W(0),
                a0 = W(0),
                i0 = W(1);
              r.signum() != 0;

            ) {
              for (; r.isEven(); )
                r.rShiftTo(1, r),
                  a
                    ? ((!D.isEven() || !_.isEven()) &&
                        (D.addTo(this, D), _.subTo(t, _)),
                      D.rShiftTo(1, D))
                    : _.isEven() || _.subTo(t, _),
                  _.rShiftTo(1, _);
              for (; z.isEven(); )
                z.rShiftTo(1, z),
                  a
                    ? ((!a0.isEven() || !i0.isEven()) &&
                        (a0.addTo(this, a0), i0.subTo(t, i0)),
                      a0.rShiftTo(1, a0))
                    : i0.isEven() || i0.subTo(t, i0),
                  i0.rShiftTo(1, i0);
              r.compareTo(z) >= 0
                ? (r.subTo(z, r), a && D.subTo(a0, D), _.subTo(i0, _))
                : (z.subTo(r, z), a && a0.subTo(D, a0), i0.subTo(_, i0));
            }
            if (z.compareTo(g.ONE) != 0) return g.ZERO;
            if (i0.compareTo(t) >= 0) return i0.subtract(t);
            if (i0.signum() < 0) i0.addTo(t, i0);
            else return i0;
            return i0.signum() < 0 ? i0.add(t) : i0;
          }
          var gn = [
              2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
              61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
              137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
              199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271,
              277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353,
              359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
              439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
              521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
              607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677,
              683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769,
              773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859,
              863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
              967, 971, 977, 983, 991, 997,
            ],
            $8 = (1 << 26) / gn[gn.length - 1];
          function r8(t) {
            var a,
              r = this.abs();
            if (r.t == 1 && r[0] <= gn[gn.length - 1]) {
              for (a = 0; a < gn.length; ++a) if (r[0] == gn[a]) return !0;
              return !1;
            }
            if (r.isEven()) return !1;
            for (a = 1; a < gn.length; ) {
              for (var z = gn[a], D = a + 1; D < gn.length && z < $8; )
                z *= gn[D++];
              for (z = r.modInt(z); a < D; ) if (z % gn[a++] == 0) return !1;
            }
            return r.millerRabin(t);
          }
          function r2(t) {
            var a = this.subtract(g.ONE),
              r = a.getLowestSetBit();
            if (r <= 0) return !1;
            var z = a.shiftRight(r);
            (t = (t + 1) >> 1), t > gn.length && (t = gn.length);
            for (var D = f(), _ = 0; _ < t; ++_) {
              D.fromInt(gn[Math.floor(Math.random() * gn.length)]);
              var a0 = D.modPow(z, this);
              if (a0.compareTo(g.ONE) != 0 && a0.compareTo(a) != 0) {
                for (var i0 = 1; i0++ < r && a0.compareTo(a) != 0; )
                  if (((a0 = a0.modPowInt(2, this)), a0.compareTo(g.ONE) == 0))
                    return !1;
                if (a0.compareTo(a) != 0) return !1;
              }
            }
            return !0;
          }
          (g.prototype.chunkSize = u0),
            (g.prototype.toRadix = P2),
            (g.prototype.fromRadix = hn),
            (g.prototype.fromNumber = t2),
            (g.prototype.bitwiseTo = C),
            (g.prototype.changeBit = m8),
            (g.prototype.addTo = K8),
            (g.prototype.dMultiply = O8),
            (g.prototype.dAddOffset = W8),
            (g.prototype.multiplyLowerTo = q8),
            (g.prototype.multiplyUpperTo = g8),
            (g.prototype.modInt = h8),
            (g.prototype.millerRabin = r2),
            (g.prototype.clone = K),
            (g.prototype.intValue = x0),
            (g.prototype.byteValue = Q0),
            (g.prototype.shortValue = F0),
            (g.prototype.signum = Fn),
            (g.prototype.toByteArray = I),
            (g.prototype.equals = x),
            (g.prototype.min = o),
            (g.prototype.max = M),
            (g.prototype.and = X),
            (g.prototype.or = G0),
            (g.prototype.xor = H0),
            (g.prototype.andNot = u8),
            (g.prototype.not = R8),
            (g.prototype.shiftLeft = c8),
            (g.prototype.shiftRight = x8),
            (g.prototype.getLowestSetBit = V8),
            (g.prototype.bitCount = o8),
            (g.prototype.testBit = t8),
            (g.prototype.setBit = j8),
            (g.prototype.clearBit = d8),
            (g.prototype.flipBit = G2),
            (g.prototype.add = H2),
            (g.prototype.subtract = E8),
            (g.prototype.multiply = C2),
            (g.prototype.divide = P8),
            (g.prototype.remainder = G8),
            (g.prototype.divideAndRemainder = H8),
            (g.prototype.modPow = W2),
            (g.prototype.modInverse = T8),
            (g.prototype.pow = D8),
            (g.prototype.gcd = i8),
            (g.prototype.isProbablePrime = r8),
            (g.prototype.square = A8),
            (g.prototype.Barrett = dn);
          var f2, Sn, en;
          function _8(t) {
            (Sn[en++] ^= t & 255),
              (Sn[en++] ^= (t >> 8) & 255),
              (Sn[en++] ^= (t >> 16) & 255),
              (Sn[en++] ^= (t >> 24) & 255),
              en >= j0 && (en -= j0);
          }
          function y2() {
            _8(new Date().getTime());
          }
          if (Sn == null) {
            (Sn = new Array()), (en = 0);
            var fn;
            if (typeof window < "u" && window.crypto) {
              if (window.crypto.getRandomValues) {
                var s2 = new Uint8Array(32);
                for (window.crypto.getRandomValues(s2), fn = 0; fn < 32; ++fn)
                  Sn[en++] = s2[fn];
              } else if (
                navigator.appName == "Netscape" &&
                navigator.appVersion < "5"
              ) {
                var X2 = window.crypto.random(32);
                for (fn = 0; fn < X2.length; ++fn)
                  Sn[en++] = X2.charCodeAt(fn) & 255;
              }
            }
            for (; en < j0; )
              (fn = Math.floor(65536 * Math.random())),
                (Sn[en++] = fn >>> 8),
                (Sn[en++] = fn & 255);
            (en = 0), y2();
          }
          function l8() {
            if (f2 == null) {
              for (y2(), f2 = B0(), f2.init(Sn), en = 0; en < Sn.length; ++en)
                Sn[en] = 0;
              en = 0;
            }
            return f2.next();
          }
          function Q8(t) {
            var a;
            for (a = 0; a < t.length; ++a) t[a] = l8();
          }
          function t0() {}
          t0.prototype.nextBytes = Q8;
          function l() {
            (this.i = 0), (this.j = 0), (this.S = new Array());
          }
          function e0(t) {
            var a, r, z;
            for (a = 0; a < 256; ++a) this.S[a] = a;
            for (r = 0, a = 0; a < 256; ++a)
              (r = (r + this.S[a] + t[a % t.length]) & 255),
                (z = this.S[a]),
                (this.S[a] = this.S[r]),
                (this.S[r] = z);
            (this.i = 0), (this.j = 0);
          }
          function S0() {
            var t;
            return (
              (this.i = (this.i + 1) & 255),
              (this.j = (this.j + this.S[this.i]) & 255),
              (t = this.S[this.i]),
              (this.S[this.i] = this.S[this.j]),
              (this.S[this.j] = t),
              this.S[(t + this.S[this.i]) & 255]
            );
          }
          (l.prototype.init = e0), (l.prototype.next = S0);
          function B0() {
            return new l();
          }
          var j0 = 256;
          Q.exports = { default: g, BigInteger: g, SecureRandom: t0 };
        }).call(jsbn);
      })(jsbn$1)),
    jsbn$1.exports
  );
}
var common = {},
  hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  var Q = (common.falseIfInvalid = function (S) {
    return function () {
      return this.valid ? S.apply(this, arguments) : !1;
    };
  });
  return (
    (common.isInSubnet = Q(function (S) {
      return this.subnetMask < S.subnetMask
        ? !1
        : this.mask(S.subnetMask) === S.mask();
    })),
    (common.isCorrect = function (S) {
      return Q(function () {
        return this.addressMinusSuffix !== this.correctForm()
          ? !1
          : this.subnetMask === S && !this.parsedSubnet
          ? !0
          : this.parsedSubnet === String(this.subnetMask);
      });
    }),
    common
  );
}
var sprintf = {},
  hasRequiredSprintf;
function requireSprintf() {
  return (
    hasRequiredSprintf ||
      ((hasRequiredSprintf = 1),
      (function (Q) {
        (function () {
          var S = {
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder:
              /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/,
          };
          function m(F) {
            return Z(f(F), arguments);
          }
          function v(F, s) {
            return m.apply(null, [F].concat(s || []));
          }
          function Z(F, s) {
            var H = 1,
              c0 = F.length,
              d,
              B = "",
              k,
              p,
              u,
              j,
              b0,
              g0,
              h0,
              W;
            for (k = 0; k < c0; k++)
              if (typeof F[k] == "string") B += F[k];
              else if (typeof F[k] == "object") {
                if (((u = F[k]), u.keys))
                  for (d = s[H], p = 0; p < u.keys.length; p++) {
                    if (d == null)
                      throw new Error(
                        m(
                          '[sprintf] Cannot access property "%s" of undefined value "%s"',
                          u.keys[p],
                          u.keys[p - 1]
                        )
                      );
                    d = d[u.keys[p]];
                  }
                else u.param_no ? (d = s[u.param_no]) : (d = s[H++]);
                if (
                  (S.not_type.test(u.type) &&
                    S.not_primitive.test(u.type) &&
                    d instanceof Function &&
                    (d = d()),
                  S.numeric_arg.test(u.type) &&
                    typeof d != "number" &&
                    isNaN(d))
                )
                  throw new TypeError(
                    m("[sprintf] expecting number but found %T", d)
                  );
                switch ((S.number.test(u.type) && (h0 = d >= 0), u.type)) {
                  case "b":
                    d = parseInt(d, 10).toString(2);
                    break;
                  case "c":
                    d = String.fromCharCode(parseInt(d, 10));
                    break;
                  case "d":
                  case "i":
                    d = parseInt(d, 10);
                    break;
                  case "j":
                    d = JSON.stringify(
                      d,
                      null,
                      u.width ? parseInt(u.width) : 0
                    );
                    break;
                  case "e":
                    d = u.precision
                      ? parseFloat(d).toExponential(u.precision)
                      : parseFloat(d).toExponential();
                    break;
                  case "f":
                    d = u.precision
                      ? parseFloat(d).toFixed(u.precision)
                      : parseFloat(d);
                    break;
                  case "g":
                    d = u.precision
                      ? String(Number(d.toPrecision(u.precision)))
                      : parseFloat(d);
                    break;
                  case "o":
                    d = (parseInt(d, 10) >>> 0).toString(8);
                    break;
                  case "s":
                    (d = String(d)),
                      (d = u.precision ? d.substring(0, u.precision) : d);
                    break;
                  case "t":
                    (d = String(!!d)),
                      (d = u.precision ? d.substring(0, u.precision) : d);
                    break;
                  case "T":
                    (d = Object.prototype.toString
                      .call(d)
                      .slice(8, -1)
                      .toLowerCase()),
                      (d = u.precision ? d.substring(0, u.precision) : d);
                    break;
                  case "u":
                    d = parseInt(d, 10) >>> 0;
                    break;
                  case "v":
                    (d = d.valueOf()),
                      (d = u.precision ? d.substring(0, u.precision) : d);
                    break;
                  case "x":
                    d = (parseInt(d, 10) >>> 0).toString(16);
                    break;
                  case "X":
                    d = (parseInt(d, 10) >>> 0).toString(16).toUpperCase();
                    break;
                }
                S.json.test(u.type)
                  ? (B += d)
                  : (S.number.test(u.type) && (!h0 || u.sign)
                      ? ((W = h0 ? "+" : "-"),
                        (d = d.toString().replace(S.sign, "")))
                      : (W = ""),
                    (b0 = u.pad_char
                      ? u.pad_char === "0"
                        ? "0"
                        : u.pad_char.charAt(1)
                      : " "),
                    (g0 = u.width - (W + d).length),
                    (j = u.width && g0 > 0 ? b0.repeat(g0) : ""),
                    (B += u.align
                      ? W + d + j
                      : b0 === "0"
                      ? W + j + d
                      : j + W + d));
              }
            return B;
          }
          var g = Object.create(null);
          function f(F) {
            if (g[F]) return g[F];
            for (var s = F, H, c0 = [], d = 0; s; ) {
              if ((H = S.text.exec(s)) !== null) c0.push(H[0]);
              else if ((H = S.modulo.exec(s)) !== null) c0.push("%");
              else if ((H = S.placeholder.exec(s)) !== null) {
                if (H[2]) {
                  d |= 1;
                  var B = [],
                    k = H[2],
                    p = [];
                  if ((p = S.key.exec(k)) !== null)
                    for (B.push(p[1]); (k = k.substring(p[0].length)) !== ""; )
                      if ((p = S.key_access.exec(k)) !== null) B.push(p[1]);
                      else if ((p = S.index_access.exec(k)) !== null)
                        B.push(p[1]);
                      else
                        throw new SyntaxError(
                          "[sprintf] failed to parse named argument key"
                        );
                  else
                    throw new SyntaxError(
                      "[sprintf] failed to parse named argument key"
                    );
                  H[2] = B;
                } else d |= 2;
                if (d === 3)
                  throw new Error(
                    "[sprintf] mixing positional and named placeholders is not (yet) supported"
                  );
                c0.push({
                  placeholder: H[0],
                  param_no: H[1],
                  keys: H[2],
                  sign: H[3],
                  pad_char: H[4],
                  align: H[5],
                  width: H[6],
                  precision: H[7],
                  type: H[8],
                });
              } else throw new SyntaxError("[sprintf] unexpected placeholder");
              s = s.substring(H[0].length);
            }
            return (g[F] = c0);
          }
          (Q.sprintf = m),
            (Q.vsprintf = v),
            typeof window < "u" &&
              ((window.sprintf = m), (window.vsprintf = v));
        })();
      })(sprintf)),
    sprintf
  );
}
var lodash$1 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var lodash = lodash$1.exports,
  hasRequiredLodash;
function requireLodash() {
  return (
    hasRequiredLodash ||
      ((hasRequiredLodash = 1),
      (function (Q, S) {
        (function () {
          var m,
            v = "4.17.21",
            Z = 200,
            g =
              "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            f = "Expected a function",
            F = "Invalid `variable` option passed into `_.template`",
            s = "__lodash_hash_undefined__",
            H = 500,
            c0 = "__lodash_placeholder__",
            d = 1,
            B = 2,
            k = 4,
            p = 1,
            u = 2,
            j = 1,
            b0 = 2,
            g0 = 4,
            h0 = 8,
            W = 16,
            O = 32,
            $ = 64,
            o0 = 128,
            A0 = 256,
            y = 512,
            N = 30,
            G = "...",
            m0 = 800,
            M0 = 16,
            N0 = 1,
            p0 = 2,
            _0 = 3,
            T0 = 1 / 0,
            y0 = 9007199254740991,
            Cn = 17976931348623157e292,
            v0 = NaN,
            z0 = 4294967295,
            E0 = z0 - 1,
            Hn = z0 >>> 1,
            Tn = [
              ["ary", o0],
              ["bind", j],
              ["bindKey", b0],
              ["curry", h0],
              ["curryRight", W],
              ["flip", y],
              ["partial", O],
              ["partialRight", $],
              ["rearg", A0],
            ],
            Qn = "[object Arguments]",
            Nn = "[object Array]",
            Mn = "[object AsyncFunction]",
            xn = "[object Boolean]",
            nn = "[object Date]",
            vn = "[object DOMException]",
            Jn = "[object Error]",
            an = "[object Function]",
            Ln = "[object GeneratorFunction]",
            D0 = "[object Map]",
            sn = "[object Number]",
            w = "[object Null]",
            V = "[object Object]",
            K = "[object Promise]",
            x0 = "[object Proxy]",
            Q0 = "[object RegExp]",
            F0 = "[object Set]",
            u0 = "[object String]",
            Fn = "[object Symbol]",
            P2 = "[object Undefined]",
            hn = "[object WeakMap]",
            t2 = "[object WeakSet]",
            I = "[object ArrayBuffer]",
            x = "[object DataView]",
            o = "[object Float32Array]",
            M = "[object Float64Array]",
            C = "[object Int8Array]",
            E = "[object Int16Array]",
            X = "[object Int32Array]",
            Z0 = "[object Uint8Array]",
            G0 = "[object Uint8ClampedArray]",
            P0 = "[object Uint16Array]",
            H0 = "[object Uint32Array]",
            K0 = /\b__p \+= '';/g,
            u8 = /\b(__p \+=) '' \+/g,
            R8 = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            c8 = /&(?:amp|lt|gt|quot|#39);/g,
            x8 = /[&<>"']/g,
            Y8 = RegExp(c8.source),
            V8 = RegExp(x8.source),
            p8 = /<%-([\s\S]+?)%>/g,
            o8 = /<%([\s\S]+?)%>/g,
            t8 = /<%=([\s\S]+?)%>/g,
            m8 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            j8 = /^\w*$/,
            d8 =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            G2 = /[\\^$.*+?()[\]{}|]/g,
            K8 = RegExp(G2.source),
            H2 = /^\s+/,
            E8 = /\s/,
            C2 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            A8 = /\{\n\/\* \[wrapped with (.+)\] \*/,
            P8 = /,? & /,
            G8 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            H8 = /[()=,{}\[\]\/\s]/,
            O8 = /\\(\\)?/g,
            W8 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            m2 = /\w*$/,
            a8 = /^[-+]0x[0-9a-f]+$/i,
            y8 = /^0b[01]+$/i,
            X8 = /^\[object .+?Constructor\]$/,
            D8 = /^0o[0-7]+$/i,
            q8 = /^(?:0|[1-9]\d*)$/,
            g8 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            dn = /($^)/,
            U8 = /['\n\r\u2028\u2029\\]/g,
            h2 = "\\ud800-\\udfff",
            S2 = "\\u0300-\\u036f",
            I8 = "\\ufe20-\\ufe2f",
            O2 = "\\u20d0-\\u20ff",
            W2 = S2 + I8 + O2,
            i8 = "\\u2700-\\u27bf",
            h8 = "a-z\\xdf-\\xf6\\xf8-\\xff",
            T8 = "\\xac\\xb1\\xd7\\xf7",
            gn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            $8 = "\\u2000-\\u206f",
            r8 =
              " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            r2 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            f2 = "\\ufe0e\\ufe0f",
            Sn = T8 + gn + $8 + r8,
            en = "['’]",
            _8 = "[" + h2 + "]",
            y2 = "[" + Sn + "]",
            fn = "[" + W2 + "]",
            s2 = "\\d+",
            X2 = "[" + i8 + "]",
            l8 = "[" + h8 + "]",
            Q8 = "[^" + h2 + Sn + s2 + i8 + h8 + r2 + "]",
            t0 = "\\ud83c[\\udffb-\\udfff]",
            l = "(?:" + fn + "|" + t0 + ")",
            e0 = "[^" + h2 + "]",
            S0 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            B0 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            j0 = "[" + r2 + "]",
            t = "\\u200d",
            a = "(?:" + l8 + "|" + Q8 + ")",
            r = "(?:" + j0 + "|" + Q8 + ")",
            z = "(?:" + en + "(?:d|ll|m|re|s|t|ve))?",
            D = "(?:" + en + "(?:D|LL|M|RE|S|T|VE))?",
            _ = l + "?",
            a0 = "[" + f2 + "]?",
            i0 =
              "(?:" + t + "(?:" + [e0, S0, B0].join("|") + ")" + a0 + _ + ")*",
            q0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            In = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            un = a0 + _ + i0,
            Rn = "(?:" + [X2, S0, B0].join("|") + ")" + un,
            A2 = "(?:" + [e0 + fn + "?", fn, S0, B0, _8].join("|") + ")",
            M8 = RegExp(en, "g"),
            On = RegExp(fn, "g"),
            Yn = RegExp(t0 + "(?=" + t0 + ")|" + A2 + un, "g"),
            F8 = RegExp(
              [
                j0 + "?" + l8 + "+" + z + "(?=" + [y2, j0, "$"].join("|") + ")",
                r + "+" + D + "(?=" + [y2, j0 + a, "$"].join("|") + ")",
                j0 + "?" + a + "+" + z,
                j0 + "+" + D,
                In,
                q0,
                s2,
                Rn,
              ].join("|"),
              "g"
            ),
            l2 = RegExp("[" + t + h2 + W2 + f2 + "]"),
            n4 =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            h3 = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            r3 = -1,
            bn = {};
          (bn[o] =
            bn[M] =
            bn[C] =
            bn[E] =
            bn[X] =
            bn[Z0] =
            bn[G0] =
            bn[P0] =
            bn[H0] =
              !0),
            (bn[Qn] =
              bn[Nn] =
              bn[I] =
              bn[xn] =
              bn[x] =
              bn[nn] =
              bn[Jn] =
              bn[an] =
              bn[D0] =
              bn[sn] =
              bn[V] =
              bn[Q0] =
              bn[F0] =
              bn[u0] =
              bn[hn] =
                !1);
          var $0 = {};
          ($0[Qn] =
            $0[Nn] =
            $0[I] =
            $0[x] =
            $0[xn] =
            $0[nn] =
            $0[o] =
            $0[M] =
            $0[C] =
            $0[E] =
            $0[X] =
            $0[D0] =
            $0[sn] =
            $0[V] =
            $0[Q0] =
            $0[F0] =
            $0[u0] =
            $0[Fn] =
            $0[Z0] =
            $0[G0] =
            $0[P0] =
            $0[H0] =
              !0),
            ($0[Jn] = $0[an] = $0[hn] = !1);
          var l3 = {
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            },
            Q3 = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            },
            M3 = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            },
            F3 = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            S3 = parseFloat,
            f3 = parseInt,
            tb =
              typeof commonjsGlobal == "object" &&
              commonjsGlobal &&
              commonjsGlobal.Object === Object &&
              commonjsGlobal,
            k3 =
              typeof self == "object" && self && self.Object === Object && self,
            Zn = tb || k3 || Function("return this")(),
            b1 = S && !S.nodeType && S,
            D2 = b1 && !0 && Q && !Q.nodeType && Q,
            mb = D2 && D2.exports === b1,
            e1 = mb && tb.process,
            $n = (function () {
              try {
                var R = D2 && D2.require && D2.require("util").types;
                return R || (e1 && e1.binding && e1.binding("util"));
              } catch {}
            })(),
            Ab = $n && $n.isArrayBuffer,
            ab = $n && $n.isDate,
            gb = $n && $n.isMap,
            Ib = $n && $n.isRegExp,
            ib = $n && $n.isSet,
            hb = $n && $n.isTypedArray;
          function Wn(R, q, P) {
            switch (P.length) {
              case 0:
                return R.call(q);
              case 1:
                return R.call(q, P[0]);
              case 2:
                return R.call(q, P[0], P[1]);
              case 3:
                return R.call(q, P[0], P[1], P[2]);
            }
            return R.apply(q, P);
          }
          function L3(R, q, P, r0) {
            for (var J0 = -1, O0 = R == null ? 0 : R.length; ++J0 < O0; ) {
              var rn = R[J0];
              q(r0, rn, P(rn), R);
            }
            return r0;
          }
          function _n(R, q) {
            for (
              var P = -1, r0 = R == null ? 0 : R.length;
              ++P < r0 && q(R[P], P, R) !== !1;

            );
            return R;
          }
          function Z3(R, q) {
            for (
              var P = R == null ? 0 : R.length;
              P-- && q(R[P], P, R) !== !1;

            );
            return R;
          }
          function rb(R, q) {
            for (var P = -1, r0 = R == null ? 0 : R.length; ++P < r0; )
              if (!q(R[P], P, R)) return !1;
            return !0;
          }
          function u2(R, q) {
            for (
              var P = -1, r0 = R == null ? 0 : R.length, J0 = 0, O0 = [];
              ++P < r0;

            ) {
              var rn = R[P];
              q(rn, P, R) && (O0[J0++] = rn);
            }
            return O0;
          }
          function Q4(R, q) {
            var P = R == null ? 0 : R.length;
            return !!P && S8(R, q, 0) > -1;
          }
          function c1(R, q, P) {
            for (var r0 = -1, J0 = R == null ? 0 : R.length; ++r0 < J0; )
              if (P(q, R[r0])) return !0;
            return !1;
          }
          function cn(R, q) {
            for (
              var P = -1, r0 = R == null ? 0 : R.length, J0 = Array(r0);
              ++P < r0;

            )
              J0[P] = q(R[P], P, R);
            return J0;
          }
          function R2(R, q) {
            for (var P = -1, r0 = q.length, J0 = R.length; ++P < r0; )
              R[J0 + P] = q[P];
            return R;
          }
          function x1(R, q, P, r0) {
            var J0 = -1,
              O0 = R == null ? 0 : R.length;
            for (r0 && O0 && (P = R[++J0]); ++J0 < O0; ) P = q(P, R[J0], J0, R);
            return P;
          }
          function z3(R, q, P, r0) {
            var J0 = R == null ? 0 : R.length;
            for (r0 && J0 && (P = R[--J0]); J0--; ) P = q(P, R[J0], J0, R);
            return P;
          }
          function o1(R, q) {
            for (var P = -1, r0 = R == null ? 0 : R.length; ++P < r0; )
              if (q(R[P], P, R)) return !0;
            return !1;
          }
          var N3 = t1("length");
          function v3(R) {
            return R.split("");
          }
          function J3(R) {
            return R.match(G8) || [];
          }
          function lb(R, q, P) {
            var r0;
            return (
              P(R, function (J0, O0, rn) {
                if (q(J0, O0, rn)) return (r0 = O0), !1;
              }),
              r0
            );
          }
          function M4(R, q, P, r0) {
            for (
              var J0 = R.length, O0 = P + (r0 ? 1 : -1);
              r0 ? O0-- : ++O0 < J0;

            )
              if (q(R[O0], O0, R)) return O0;
            return -1;
          }
          function S8(R, q, P) {
            return q === q ? K3(R, q, P) : M4(R, Qb, P);
          }
          function w3(R, q, P, r0) {
            for (var J0 = P - 1, O0 = R.length; ++J0 < O0; )
              if (r0(R[J0], q)) return J0;
            return -1;
          }
          function Qb(R) {
            return R !== R;
          }
          function Mb(R, q) {
            var P = R == null ? 0 : R.length;
            return P ? A1(R, q) / P : v0;
          }
          function t1(R) {
            return function (q) {
              return q == null ? m : q[R];
            };
          }
          function m1(R) {
            return function (q) {
              return R == null ? m : R[q];
            };
          }
          function Fb(R, q, P, r0, J0) {
            return (
              J0(R, function (O0, rn, U0) {
                P = r0 ? ((r0 = !1), O0) : q(P, O0, rn, U0);
              }),
              P
            );
          }
          function B3(R, q) {
            var P = R.length;
            for (R.sort(q); P--; ) R[P] = R[P].value;
            return R;
          }
          function A1(R, q) {
            for (var P, r0 = -1, J0 = R.length; ++r0 < J0; ) {
              var O0 = q(R[r0]);
              O0 !== m && (P = P === m ? O0 : P + O0);
            }
            return P;
          }
          function a1(R, q) {
            for (var P = -1, r0 = Array(R); ++P < R; ) r0[P] = q(P);
            return r0;
          }
          function C3(R, q) {
            return cn(q, function (P) {
              return [P, R[P]];
            });
          }
          function Sb(R) {
            return R && R.slice(0, Zb(R) + 1).replace(H2, "");
          }
          function yn(R) {
            return function (q) {
              return R(q);
            };
          }
          function g1(R, q) {
            return cn(q, function (P) {
              return R[P];
            });
          }
          function b4(R, q) {
            return R.has(q);
          }
          function fb(R, q) {
            for (var P = -1, r0 = R.length; ++P < r0 && S8(q, R[P], 0) > -1; );
            return P;
          }
          function kb(R, q) {
            for (var P = R.length; P-- && S8(q, R[P], 0) > -1; );
            return P;
          }
          function s3(R, q) {
            for (var P = R.length, r0 = 0; P--; ) R[P] === q && ++r0;
            return r0;
          }
          var u3 = m1(l3),
            R3 = m1(Q3);
          function Y3(R) {
            return "\\" + F3[R];
          }
          function V3(R, q) {
            return R == null ? m : R[q];
          }
          function f8(R) {
            return l2.test(R);
          }
          function p3(R) {
            return n4.test(R);
          }
          function j3(R) {
            for (var q, P = []; !(q = R.next()).done; ) P.push(q.value);
            return P;
          }
          function I1(R) {
            var q = -1,
              P = Array(R.size);
            return (
              R.forEach(function (r0, J0) {
                P[++q] = [J0, r0];
              }),
              P
            );
          }
          function Lb(R, q) {
            return function (P) {
              return R(q(P));
            };
          }
          function Y2(R, q) {
            for (var P = -1, r0 = R.length, J0 = 0, O0 = []; ++P < r0; ) {
              var rn = R[P];
              (rn === q || rn === c0) && ((R[P] = c0), (O0[J0++] = P));
            }
            return O0;
          }
          function F4(R) {
            var q = -1,
              P = Array(R.size);
            return (
              R.forEach(function (r0) {
                P[++q] = r0;
              }),
              P
            );
          }
          function d3(R) {
            var q = -1,
              P = Array(R.size);
            return (
              R.forEach(function (r0) {
                P[++q] = [r0, r0];
              }),
              P
            );
          }
          function K3(R, q, P) {
            for (var r0 = P - 1, J0 = R.length; ++r0 < J0; )
              if (R[r0] === q) return r0;
            return -1;
          }
          function E3(R, q, P) {
            for (var r0 = P + 1; r0--; ) if (R[r0] === q) return r0;
            return r0;
          }
          function k8(R) {
            return f8(R) ? G3(R) : N3(R);
          }
          function a2(R) {
            return f8(R) ? H3(R) : v3(R);
          }
          function Zb(R) {
            for (var q = R.length; q-- && E8.test(R.charAt(q)); );
            return q;
          }
          var P3 = m1(M3);
          function G3(R) {
            for (var q = (Yn.lastIndex = 0); Yn.test(R); ) ++q;
            return q;
          }
          function H3(R) {
            return R.match(Yn) || [];
          }
          function O3(R) {
            return R.match(F8) || [];
          }
          var W3 = function R(q) {
              q = q == null ? Zn : L8.defaults(Zn.Object(), q, L8.pick(Zn, h3));
              var P = q.Array,
                r0 = q.Date,
                J0 = q.Error,
                O0 = q.Function,
                rn = q.Math,
                U0 = q.Object,
                i1 = q.RegExp,
                y3 = q.String,
                n2 = q.TypeError,
                S4 = P.prototype,
                X3 = O0.prototype,
                Z8 = U0.prototype,
                f4 = q["__core-js_shared__"],
                k4 = X3.toString,
                X0 = Z8.hasOwnProperty,
                D3 = 0,
                zb = (function () {
                  var n = /[^.]+$/.exec(
                    (f4 && f4.keys && f4.keys.IE_PROTO) || ""
                  );
                  return n ? "Symbol(src)_1." + n : "";
                })(),
                L4 = Z8.toString,
                q3 = k4.call(U0),
                U3 = Zn._,
                T3 = i1(
                  "^" +
                    k4
                      .call(X0)
                      .replace(G2, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                Z4 = mb ? q.Buffer : m,
                V2 = q.Symbol,
                z4 = q.Uint8Array,
                Nb = Z4 ? Z4.allocUnsafe : m,
                N4 = Lb(U0.getPrototypeOf, U0),
                vb = U0.create,
                Jb = Z8.propertyIsEnumerable,
                v4 = S4.splice,
                wb = V2 ? V2.isConcatSpreadable : m,
                e4 = V2 ? V2.iterator : m,
                q2 = V2 ? V2.toStringTag : m,
                J4 = (function () {
                  try {
                    var n = n8(U0, "defineProperty");
                    return n({}, "", {}), n;
                  } catch {}
                })(),
                $3 = q.clearTimeout !== Zn.clearTimeout && q.clearTimeout,
                _3 = r0 && r0.now !== Zn.Date.now && r0.now,
                ne = q.setTimeout !== Zn.setTimeout && q.setTimeout,
                w4 = rn.ceil,
                B4 = rn.floor,
                h1 = U0.getOwnPropertySymbols,
                be = Z4 ? Z4.isBuffer : m,
                Bb = q.isFinite,
                ee = S4.join,
                ce = Lb(U0.keys, U0),
                ln = rn.max,
                wn = rn.min,
                xe = r0.now,
                oe = q.parseInt,
                Cb = rn.random,
                te = S4.reverse,
                r1 = n8(q, "DataView"),
                c4 = n8(q, "Map"),
                l1 = n8(q, "Promise"),
                z8 = n8(q, "Set"),
                x4 = n8(q, "WeakMap"),
                o4 = n8(U0, "create"),
                C4 = x4 && new x4(),
                N8 = {},
                me = b8(r1),
                Ae = b8(c4),
                ae = b8(l1),
                ge = b8(z8),
                Ie = b8(x4),
                s4 = V2 ? V2.prototype : m,
                t4 = s4 ? s4.valueOf : m,
                sb = s4 ? s4.toString : m;
              function i(n) {
                if (tn(n) && !w0(n) && !(n instanceof V0)) {
                  if (n instanceof b2) return n;
                  if (X0.call(n, "__wrapped__")) return u6(n);
                }
                return new b2(n);
              }
              var v8 = (function () {
                function n() {}
                return function (b) {
                  if (!on(b)) return {};
                  if (vb) return vb(b);
                  n.prototype = b;
                  var e = new n();
                  return (n.prototype = m), e;
                };
              })();
              function u4() {}
              function b2(n, b) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__chain__ = !!b),
                  (this.__index__ = 0),
                  (this.__values__ = m);
              }
              (i.templateSettings = {
                escape: p8,
                evaluate: o8,
                interpolate: t8,
                variable: "",
                imports: { _: i },
              }),
                (i.prototype = u4.prototype),
                (i.prototype.constructor = i),
                (b2.prototype = v8(u4.prototype)),
                (b2.prototype.constructor = b2);
              function V0(n) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = z0),
                  (this.__views__ = []);
              }
              function ie() {
                var n = new V0(this.__wrapped__);
                return (
                  (n.__actions__ = Kn(this.__actions__)),
                  (n.__dir__ = this.__dir__),
                  (n.__filtered__ = this.__filtered__),
                  (n.__iteratees__ = Kn(this.__iteratees__)),
                  (n.__takeCount__ = this.__takeCount__),
                  (n.__views__ = Kn(this.__views__)),
                  n
                );
              }
              function he() {
                if (this.__filtered__) {
                  var n = new V0(this);
                  (n.__dir__ = -1), (n.__filtered__ = !0);
                } else (n = this.clone()), (n.__dir__ *= -1);
                return n;
              }
              function re() {
                var n = this.__wrapped__.value(),
                  b = this.__dir__,
                  e = w0(n),
                  c = b < 0,
                  A = e ? n.length : 0,
                  h = vc(0, A, this.__views__),
                  L = h.start,
                  J = h.end,
                  Y = J - L,
                  U = c ? J : L - 1,
                  T = this.__iteratees__,
                  n0 = T.length,
                  I0 = 0,
                  l0 = wn(Y, this.__takeCount__);
                if (!e || (!c && A == Y && l0 == Y))
                  return b6(n, this.__actions__);
                var k0 = [];
                n: for (; Y-- && I0 < l0; ) {
                  U += b;
                  for (var s0 = -1, L0 = n[U]; ++s0 < n0; ) {
                    var Y0 = T[s0],
                      d0 = Y0.iteratee,
                      qn = Y0.type,
                      jn = d0(L0);
                    if (qn == p0) L0 = jn;
                    else if (!jn) {
                      if (qn == N0) continue n;
                      break n;
                    }
                  }
                  k0[I0++] = L0;
                }
                return k0;
              }
              (V0.prototype = v8(u4.prototype)),
                (V0.prototype.constructor = V0);
              function U2(n) {
                var b = -1,
                  e = n == null ? 0 : n.length;
                for (this.clear(); ++b < e; ) {
                  var c = n[b];
                  this.set(c[0], c[1]);
                }
              }
              function le() {
                (this.__data__ = o4 ? o4(null) : {}), (this.size = 0);
              }
              function Qe(n) {
                var b = this.has(n) && delete this.__data__[n];
                return (this.size -= b ? 1 : 0), b;
              }
              function Me(n) {
                var b = this.__data__;
                if (o4) {
                  var e = b[n];
                  return e === s ? m : e;
                }
                return X0.call(b, n) ? b[n] : m;
              }
              function Fe(n) {
                var b = this.__data__;
                return o4 ? b[n] !== m : X0.call(b, n);
              }
              function Se(n, b) {
                var e = this.__data__;
                return (
                  (this.size += this.has(n) ? 0 : 1),
                  (e[n] = o4 && b === m ? s : b),
                  this
                );
              }
              (U2.prototype.clear = le),
                (U2.prototype.delete = Qe),
                (U2.prototype.get = Me),
                (U2.prototype.has = Fe),
                (U2.prototype.set = Se);
              function k2(n) {
                var b = -1,
                  e = n == null ? 0 : n.length;
                for (this.clear(); ++b < e; ) {
                  var c = n[b];
                  this.set(c[0], c[1]);
                }
              }
              function fe() {
                (this.__data__ = []), (this.size = 0);
              }
              function ke(n) {
                var b = this.__data__,
                  e = R4(b, n);
                if (e < 0) return !1;
                var c = b.length - 1;
                return e == c ? b.pop() : v4.call(b, e, 1), --this.size, !0;
              }
              function Le(n) {
                var b = this.__data__,
                  e = R4(b, n);
                return e < 0 ? m : b[e][1];
              }
              function Ze(n) {
                return R4(this.__data__, n) > -1;
              }
              function ze(n, b) {
                var e = this.__data__,
                  c = R4(e, n);
                return (
                  c < 0 ? (++this.size, e.push([n, b])) : (e[c][1] = b), this
                );
              }
              (k2.prototype.clear = fe),
                (k2.prototype.delete = ke),
                (k2.prototype.get = Le),
                (k2.prototype.has = Ze),
                (k2.prototype.set = ze);
              function L2(n) {
                var b = -1,
                  e = n == null ? 0 : n.length;
                for (this.clear(); ++b < e; ) {
                  var c = n[b];
                  this.set(c[0], c[1]);
                }
              }
              function Ne() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new U2(),
                    map: new (c4 || k2)(),
                    string: new U2(),
                  });
              }
              function ve(n) {
                var b = W4(this, n).delete(n);
                return (this.size -= b ? 1 : 0), b;
              }
              function Je(n) {
                return W4(this, n).get(n);
              }
              function we(n) {
                return W4(this, n).has(n);
              }
              function Be(n, b) {
                var e = W4(this, n),
                  c = e.size;
                return e.set(n, b), (this.size += e.size == c ? 0 : 1), this;
              }
              (L2.prototype.clear = Ne),
                (L2.prototype.delete = ve),
                (L2.prototype.get = Je),
                (L2.prototype.has = we),
                (L2.prototype.set = Be);
              function T2(n) {
                var b = -1,
                  e = n == null ? 0 : n.length;
                for (this.__data__ = new L2(); ++b < e; ) this.add(n[b]);
              }
              function Ce(n) {
                return this.__data__.set(n, s), this;
              }
              function se(n) {
                return this.__data__.has(n);
              }
              (T2.prototype.add = T2.prototype.push = Ce),
                (T2.prototype.has = se);
              function g2(n) {
                var b = (this.__data__ = new k2(n));
                this.size = b.size;
              }
              function ue() {
                (this.__data__ = new k2()), (this.size = 0);
              }
              function Re(n) {
                var b = this.__data__,
                  e = b.delete(n);
                return (this.size = b.size), e;
              }
              function Ye(n) {
                return this.__data__.get(n);
              }
              function Ve(n) {
                return this.__data__.has(n);
              }
              function pe(n, b) {
                var e = this.__data__;
                if (e instanceof k2) {
                  var c = e.__data__;
                  if (!c4 || c.length < Z - 1)
                    return c.push([n, b]), (this.size = ++e.size), this;
                  e = this.__data__ = new L2(c);
                }
                return e.set(n, b), (this.size = e.size), this;
              }
              (g2.prototype.clear = ue),
                (g2.prototype.delete = Re),
                (g2.prototype.get = Ye),
                (g2.prototype.has = Ve),
                (g2.prototype.set = pe);
              function ub(n, b) {
                var e = w0(n),
                  c = !e && e8(n),
                  A = !e && !c && E2(n),
                  h = !e && !c && !A && C8(n),
                  L = e || c || A || h,
                  J = L ? a1(n.length, y3) : [],
                  Y = J.length;
                for (var U in n)
                  (b || X0.call(n, U)) &&
                    !(
                      L &&
                      (U == "length" ||
                        (A && (U == "offset" || U == "parent")) ||
                        (h &&
                          (U == "buffer" ||
                            U == "byteLength" ||
                            U == "byteOffset")) ||
                        v2(U, Y))
                    ) &&
                    J.push(U);
                return J;
              }
              function Rb(n) {
                var b = n.length;
                return b ? n[v1(0, b - 1)] : m;
              }
              function je(n, b) {
                return y4(Kn(n), $2(b, 0, n.length));
              }
              function de(n) {
                return y4(Kn(n));
              }
              function Q1(n, b, e) {
                ((e !== m && !I2(n[b], e)) || (e === m && !(b in n))) &&
                  Z2(n, b, e);
              }
              function m4(n, b, e) {
                var c = n[b];
                (!(X0.call(n, b) && I2(c, e)) || (e === m && !(b in n))) &&
                  Z2(n, b, e);
              }
              function R4(n, b) {
                for (var e = n.length; e--; ) if (I2(n[e][0], b)) return e;
                return -1;
              }
              function Ke(n, b, e, c) {
                return (
                  p2(n, function (A, h, L) {
                    b(c, A, e(A), L);
                  }),
                  c
                );
              }
              function Yb(n, b) {
                return n && M2(b, kn(b), n);
              }
              function Ee(n, b) {
                return n && M2(b, Pn(b), n);
              }
              function Z2(n, b, e) {
                b == "__proto__" && J4
                  ? J4(n, b, {
                      configurable: !0,
                      enumerable: !0,
                      value: e,
                      writable: !0,
                    })
                  : (n[b] = e);
              }
              function M1(n, b) {
                for (
                  var e = -1, c = b.length, A = P(c), h = n == null;
                  ++e < c;

                )
                  A[e] = h ? m : T1(n, b[e]);
                return A;
              }
              function $2(n, b, e) {
                return (
                  n === n &&
                    (e !== m && (n = n <= e ? n : e),
                    b !== m && (n = n >= b ? n : b)),
                  n
                );
              }
              function e2(n, b, e, c, A, h) {
                var L,
                  J = b & d,
                  Y = b & B,
                  U = b & k;
                if ((e && (L = A ? e(n, c, A, h) : e(n)), L !== m)) return L;
                if (!on(n)) return n;
                var T = w0(n);
                if (T) {
                  if (((L = wc(n)), !J)) return Kn(n, L);
                } else {
                  var n0 = Bn(n),
                    I0 = n0 == an || n0 == Ln;
                  if (E2(n)) return x6(n, J);
                  if (n0 == V || n0 == Qn || (I0 && !A)) {
                    if (((L = Y || I0 ? {} : Z6(n)), !J))
                      return Y ? Mc(n, Ee(L, n)) : Qc(n, Yb(L, n));
                  } else {
                    if (!$0[n0]) return A ? n : {};
                    L = Bc(n, n0, J);
                  }
                }
                h || (h = new g2());
                var l0 = h.get(n);
                if (l0) return l0;
                h.set(n, L),
                  $6(n)
                    ? n.forEach(function (L0) {
                        L.add(e2(L0, b, e, L0, n, h));
                      })
                    : U6(n) &&
                      n.forEach(function (L0, Y0) {
                        L.set(Y0, e2(L0, b, e, Y0, n, h));
                      });
                var k0 = U ? (Y ? j1 : p1) : Y ? Pn : kn,
                  s0 = T ? m : k0(n);
                return (
                  _n(s0 || n, function (L0, Y0) {
                    s0 && ((Y0 = L0), (L0 = n[Y0])),
                      m4(L, Y0, e2(L0, b, e, Y0, n, h));
                  }),
                  L
                );
              }
              function Pe(n) {
                var b = kn(n);
                return function (e) {
                  return Vb(e, n, b);
                };
              }
              function Vb(n, b, e) {
                var c = e.length;
                if (n == null) return !c;
                for (n = U0(n); c--; ) {
                  var A = e[c],
                    h = b[A],
                    L = n[A];
                  if ((L === m && !(A in n)) || !h(L)) return !1;
                }
                return !0;
              }
              function pb(n, b, e) {
                if (typeof n != "function") throw new n2(f);
                return r4(function () {
                  n.apply(m, e);
                }, b);
              }
              function A4(n, b, e, c) {
                var A = -1,
                  h = Q4,
                  L = !0,
                  J = n.length,
                  Y = [],
                  U = b.length;
                if (!J) return Y;
                e && (b = cn(b, yn(e))),
                  c
                    ? ((h = c1), (L = !1))
                    : b.length >= Z && ((h = b4), (L = !1), (b = new T2(b)));
                n: for (; ++A < J; ) {
                  var T = n[A],
                    n0 = e == null ? T : e(T);
                  if (((T = c || T !== 0 ? T : 0), L && n0 === n0)) {
                    for (var I0 = U; I0--; ) if (b[I0] === n0) continue n;
                    Y.push(T);
                  } else h(b, n0, c) || Y.push(T);
                }
                return Y;
              }
              var p2 = a6(Q2),
                jb = a6(S1, !0);
              function Ge(n, b) {
                var e = !0;
                return (
                  p2(n, function (c, A, h) {
                    return (e = !!b(c, A, h)), e;
                  }),
                  e
                );
              }
              function Y4(n, b, e) {
                for (var c = -1, A = n.length; ++c < A; ) {
                  var h = n[c],
                    L = b(h);
                  if (L != null && (J === m ? L === L && !Dn(L) : e(L, J)))
                    var J = L,
                      Y = h;
                }
                return Y;
              }
              function He(n, b, e, c) {
                var A = n.length;
                for (
                  e = C0(e),
                    e < 0 && (e = -e > A ? 0 : A + e),
                    c = c === m || c > A ? A : C0(c),
                    c < 0 && (c += A),
                    c = e > c ? 0 : n3(c);
                  e < c;

                )
                  n[e++] = b;
                return n;
              }
              function db(n, b) {
                var e = [];
                return (
                  p2(n, function (c, A, h) {
                    b(c, A, h) && e.push(c);
                  }),
                  e
                );
              }
              function zn(n, b, e, c, A) {
                var h = -1,
                  L = n.length;
                for (e || (e = sc), A || (A = []); ++h < L; ) {
                  var J = n[h];
                  b > 0 && e(J)
                    ? b > 1
                      ? zn(J, b - 1, e, c, A)
                      : R2(A, J)
                    : c || (A[A.length] = J);
                }
                return A;
              }
              var F1 = g6(),
                Kb = g6(!0);
              function Q2(n, b) {
                return n && F1(n, b, kn);
              }
              function S1(n, b) {
                return n && Kb(n, b, kn);
              }
              function V4(n, b) {
                return u2(b, function (e) {
                  return J2(n[e]);
                });
              }
              function _2(n, b) {
                b = d2(b, n);
                for (var e = 0, c = b.length; n != null && e < c; )
                  n = n[F2(b[e++])];
                return e && e == c ? n : m;
              }
              function Eb(n, b, e) {
                var c = b(n);
                return w0(n) ? c : R2(c, e(n));
              }
              function Vn(n) {
                return n == null
                  ? n === m
                    ? P2
                    : w
                  : q2 && q2 in U0(n)
                  ? Nc(n)
                  : dc(n);
              }
              function f1(n, b) {
                return n > b;
              }
              function Oe(n, b) {
                return n != null && X0.call(n, b);
              }
              function We(n, b) {
                return n != null && b in U0(n);
              }
              function ye(n, b, e) {
                return n >= wn(b, e) && n < ln(b, e);
              }
              function k1(n, b, e) {
                for (
                  var c = e ? c1 : Q4,
                    A = n[0].length,
                    h = n.length,
                    L = h,
                    J = P(h),
                    Y = 1 / 0,
                    U = [];
                  L--;

                ) {
                  var T = n[L];
                  L && b && (T = cn(T, yn(b))),
                    (Y = wn(T.length, Y)),
                    (J[L] =
                      !e && (b || (A >= 120 && T.length >= 120))
                        ? new T2(L && T)
                        : m);
                }
                T = n[0];
                var n0 = -1,
                  I0 = J[0];
                n: for (; ++n0 < A && U.length < Y; ) {
                  var l0 = T[n0],
                    k0 = b ? b(l0) : l0;
                  if (
                    ((l0 = e || l0 !== 0 ? l0 : 0),
                    !(I0 ? b4(I0, k0) : c(U, k0, e)))
                  ) {
                    for (L = h; --L; ) {
                      var s0 = J[L];
                      if (!(s0 ? b4(s0, k0) : c(n[L], k0, e))) continue n;
                    }
                    I0 && I0.push(k0), U.push(l0);
                  }
                }
                return U;
              }
              function Xe(n, b, e, c) {
                return (
                  Q2(n, function (A, h, L) {
                    b(c, e(A), h, L);
                  }),
                  c
                );
              }
              function a4(n, b, e) {
                (b = d2(b, n)), (n = J6(n, b));
                var c = n == null ? n : n[F2(x2(b))];
                return c == null ? m : Wn(c, n, e);
              }
              function Pb(n) {
                return tn(n) && Vn(n) == Qn;
              }
              function De(n) {
                return tn(n) && Vn(n) == I;
              }
              function qe(n) {
                return tn(n) && Vn(n) == nn;
              }
              function g4(n, b, e, c, A) {
                return n === b
                  ? !0
                  : n == null || b == null || (!tn(n) && !tn(b))
                  ? n !== n && b !== b
                  : Ue(n, b, e, c, g4, A);
              }
              function Ue(n, b, e, c, A, h) {
                var L = w0(n),
                  J = w0(b),
                  Y = L ? Nn : Bn(n),
                  U = J ? Nn : Bn(b);
                (Y = Y == Qn ? V : Y), (U = U == Qn ? V : U);
                var T = Y == V,
                  n0 = U == V,
                  I0 = Y == U;
                if (I0 && E2(n)) {
                  if (!E2(b)) return !1;
                  (L = !0), (T = !1);
                }
                if (I0 && !T)
                  return (
                    h || (h = new g2()),
                    L || C8(n) ? f6(n, b, e, c, A, h) : Zc(n, b, Y, e, c, A, h)
                  );
                if (!(e & p)) {
                  var l0 = T && X0.call(n, "__wrapped__"),
                    k0 = n0 && X0.call(b, "__wrapped__");
                  if (l0 || k0) {
                    var s0 = l0 ? n.value() : n,
                      L0 = k0 ? b.value() : b;
                    return h || (h = new g2()), A(s0, L0, e, c, h);
                  }
                }
                return I0 ? (h || (h = new g2()), zc(n, b, e, c, A, h)) : !1;
              }
              function Te(n) {
                return tn(n) && Bn(n) == D0;
              }
              function L1(n, b, e, c) {
                var A = e.length,
                  h = A,
                  L = !c;
                if (n == null) return !h;
                for (n = U0(n); A--; ) {
                  var J = e[A];
                  if (L && J[2] ? J[1] !== n[J[0]] : !(J[0] in n)) return !1;
                }
                for (; ++A < h; ) {
                  J = e[A];
                  var Y = J[0],
                    U = n[Y],
                    T = J[1];
                  if (L && J[2]) {
                    if (U === m && !(Y in n)) return !1;
                  } else {
                    var n0 = new g2();
                    if (c) var I0 = c(U, T, Y, n, b, n0);
                    if (!(I0 === m ? g4(T, U, p | u, c, n0) : I0)) return !1;
                  }
                }
                return !0;
              }
              function Gb(n) {
                if (!on(n) || Rc(n)) return !1;
                var b = J2(n) ? T3 : X8;
                return b.test(b8(n));
              }
              function $e(n) {
                return tn(n) && Vn(n) == Q0;
              }
              function _e(n) {
                return tn(n) && Bn(n) == F0;
              }
              function nc(n) {
                return tn(n) && $4(n.length) && !!bn[Vn(n)];
              }
              function Hb(n) {
                return typeof n == "function"
                  ? n
                  : n == null
                  ? Gn
                  : typeof n == "object"
                  ? w0(n)
                    ? yb(n[0], n[1])
                    : Wb(n)
                  : I3(n);
              }
              function Z1(n) {
                if (!h4(n)) return ce(n);
                var b = [];
                for (var e in U0(n))
                  X0.call(n, e) && e != "constructor" && b.push(e);
                return b;
              }
              function bc(n) {
                if (!on(n)) return jc(n);
                var b = h4(n),
                  e = [];
                for (var c in n)
                  (c == "constructor" && (b || !X0.call(n, c))) || e.push(c);
                return e;
              }
              function z1(n, b) {
                return n < b;
              }
              function Ob(n, b) {
                var e = -1,
                  c = En(n) ? P(n.length) : [];
                return (
                  p2(n, function (A, h, L) {
                    c[++e] = b(A, h, L);
                  }),
                  c
                );
              }
              function Wb(n) {
                var b = K1(n);
                return b.length == 1 && b[0][2]
                  ? N6(b[0][0], b[0][1])
                  : function (e) {
                      return e === n || L1(e, n, b);
                    };
              }
              function yb(n, b) {
                return P1(n) && z6(b)
                  ? N6(F2(n), b)
                  : function (e) {
                      var c = T1(e, n);
                      return c === m && c === b ? $1(e, n) : g4(b, c, p | u);
                    };
              }
              function p4(n, b, e, c, A) {
                n !== b &&
                  F1(
                    b,
                    function (h, L) {
                      if ((A || (A = new g2()), on(h)))
                        ec(n, b, L, e, p4, c, A);
                      else {
                        var J = c ? c(H1(n, L), h, L + "", n, b, A) : m;
                        J === m && (J = h), Q1(n, L, J);
                      }
                    },
                    Pn
                  );
              }
              function ec(n, b, e, c, A, h, L) {
                var J = H1(n, e),
                  Y = H1(b, e),
                  U = L.get(Y);
                if (U) {
                  Q1(n, e, U);
                  return;
                }
                var T = h ? h(J, Y, e + "", n, b, L) : m,
                  n0 = T === m;
                if (n0) {
                  var I0 = w0(Y),
                    l0 = !I0 && E2(Y),
                    k0 = !I0 && !l0 && C8(Y);
                  (T = Y),
                    I0 || l0 || k0
                      ? w0(J)
                        ? (T = J)
                        : mn(J)
                        ? (T = Kn(J))
                        : l0
                        ? ((n0 = !1), (T = x6(Y, !0)))
                        : k0
                        ? ((n0 = !1), (T = o6(Y, !0)))
                        : (T = [])
                      : l4(Y) || e8(Y)
                      ? ((T = J),
                        e8(J) ? (T = b3(J)) : (!on(J) || J2(J)) && (T = Z6(Y)))
                      : (n0 = !1);
                }
                n0 && (L.set(Y, T), A(T, Y, c, h, L), L.delete(Y)), Q1(n, e, T);
              }
              function Xb(n, b) {
                var e = n.length;
                if (e) return (b += b < 0 ? e : 0), v2(b, e) ? n[b] : m;
              }
              function Db(n, b, e) {
                b.length
                  ? (b = cn(b, function (h) {
                      return w0(h)
                        ? function (L) {
                            return _2(L, h.length === 1 ? h[0] : h);
                          }
                        : h;
                    }))
                  : (b = [Gn]);
                var c = -1;
                b = cn(b, yn(f0()));
                var A = Ob(n, function (h, L, J) {
                  var Y = cn(b, function (U) {
                    return U(h);
                  });
                  return { criteria: Y, index: ++c, value: h };
                });
                return B3(A, function (h, L) {
                  return lc(h, L, e);
                });
              }
              function cc(n, b) {
                return qb(n, b, function (e, c) {
                  return $1(n, c);
                });
              }
              function qb(n, b, e) {
                for (var c = -1, A = b.length, h = {}; ++c < A; ) {
                  var L = b[c],
                    J = _2(n, L);
                  e(J, L) && I4(h, d2(L, n), J);
                }
                return h;
              }
              function xc(n) {
                return function (b) {
                  return _2(b, n);
                };
              }
              function N1(n, b, e, c) {
                var A = c ? w3 : S8,
                  h = -1,
                  L = b.length,
                  J = n;
                for (n === b && (b = Kn(b)), e && (J = cn(n, yn(e))); ++h < L; )
                  for (
                    var Y = 0, U = b[h], T = e ? e(U) : U;
                    (Y = A(J, T, Y, c)) > -1;

                  )
                    J !== n && v4.call(J, Y, 1), v4.call(n, Y, 1);
                return n;
              }
              function Ub(n, b) {
                for (var e = n ? b.length : 0, c = e - 1; e--; ) {
                  var A = b[e];
                  if (e == c || A !== h) {
                    var h = A;
                    v2(A) ? v4.call(n, A, 1) : B1(n, A);
                  }
                }
                return n;
              }
              function v1(n, b) {
                return n + B4(Cb() * (b - n + 1));
              }
              function oc(n, b, e, c) {
                for (
                  var A = -1, h = ln(w4((b - n) / (e || 1)), 0), L = P(h);
                  h--;

                )
                  (L[c ? h : ++A] = n), (n += e);
                return L;
              }
              function J1(n, b) {
                var e = "";
                if (!n || b < 1 || b > y0) return e;
                do b % 2 && (e += n), (b = B4(b / 2)), b && (n += n);
                while (b);
                return e;
              }
              function R0(n, b) {
                return O1(v6(n, b, Gn), n + "");
              }
              function tc(n) {
                return Rb(s8(n));
              }
              function mc(n, b) {
                var e = s8(n);
                return y4(e, $2(b, 0, e.length));
              }
              function I4(n, b, e, c) {
                if (!on(n)) return n;
                b = d2(b, n);
                for (
                  var A = -1, h = b.length, L = h - 1, J = n;
                  J != null && ++A < h;

                ) {
                  var Y = F2(b[A]),
                    U = e;
                  if (
                    Y === "__proto__" ||
                    Y === "constructor" ||
                    Y === "prototype"
                  )
                    return n;
                  if (A != L) {
                    var T = J[Y];
                    (U = c ? c(T, Y, J) : m),
                      U === m && (U = on(T) ? T : v2(b[A + 1]) ? [] : {});
                  }
                  m4(J, Y, U), (J = J[Y]);
                }
                return n;
              }
              var Tb = C4
                  ? function (n, b) {
                      return C4.set(n, b), n;
                    }
                  : Gn,
                Ac = J4
                  ? function (n, b) {
                      return J4(n, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: nb(b),
                        writable: !0,
                      });
                    }
                  : Gn;
              function ac(n) {
                return y4(s8(n));
              }
              function c2(n, b, e) {
                var c = -1,
                  A = n.length;
                b < 0 && (b = -b > A ? 0 : A + b),
                  (e = e > A ? A : e),
                  e < 0 && (e += A),
                  (A = b > e ? 0 : (e - b) >>> 0),
                  (b >>>= 0);
                for (var h = P(A); ++c < A; ) h[c] = n[c + b];
                return h;
              }
              function gc(n, b) {
                var e;
                return (
                  p2(n, function (c, A, h) {
                    return (e = b(c, A, h)), !e;
                  }),
                  !!e
                );
              }
              function j4(n, b, e) {
                var c = 0,
                  A = n == null ? c : n.length;
                if (typeof b == "number" && b === b && A <= Hn) {
                  for (; c < A; ) {
                    var h = (c + A) >>> 1,
                      L = n[h];
                    L !== null && !Dn(L) && (e ? L <= b : L < b)
                      ? (c = h + 1)
                      : (A = h);
                  }
                  return A;
                }
                return w1(n, b, Gn, e);
              }
              function w1(n, b, e, c) {
                var A = 0,
                  h = n == null ? 0 : n.length;
                if (h === 0) return 0;
                b = e(b);
                for (
                  var L = b !== b, J = b === null, Y = Dn(b), U = b === m;
                  A < h;

                ) {
                  var T = B4((A + h) / 2),
                    n0 = e(n[T]),
                    I0 = n0 !== m,
                    l0 = n0 === null,
                    k0 = n0 === n0,
                    s0 = Dn(n0);
                  if (L) var L0 = c || k0;
                  else
                    U
                      ? (L0 = k0 && (c || I0))
                      : J
                      ? (L0 = k0 && I0 && (c || !l0))
                      : Y
                      ? (L0 = k0 && I0 && !l0 && (c || !s0))
                      : l0 || s0
                      ? (L0 = !1)
                      : (L0 = c ? n0 <= b : n0 < b);
                  L0 ? (A = T + 1) : (h = T);
                }
                return wn(h, E0);
              }
              function $b(n, b) {
                for (var e = -1, c = n.length, A = 0, h = []; ++e < c; ) {
                  var L = n[e],
                    J = b ? b(L) : L;
                  if (!e || !I2(J, Y)) {
                    var Y = J;
                    h[A++] = L === 0 ? 0 : L;
                  }
                }
                return h;
              }
              function _b(n) {
                return typeof n == "number" ? n : Dn(n) ? v0 : +n;
              }
              function Xn(n) {
                if (typeof n == "string") return n;
                if (w0(n)) return cn(n, Xn) + "";
                if (Dn(n)) return sb ? sb.call(n) : "";
                var b = n + "";
                return b == "0" && 1 / n == -1 / 0 ? "-0" : b;
              }
              function j2(n, b, e) {
                var c = -1,
                  A = Q4,
                  h = n.length,
                  L = !0,
                  J = [],
                  Y = J;
                if (e) (L = !1), (A = c1);
                else if (h >= Z) {
                  var U = b ? null : kc(n);
                  if (U) return F4(U);
                  (L = !1), (A = b4), (Y = new T2());
                } else Y = b ? [] : J;
                n: for (; ++c < h; ) {
                  var T = n[c],
                    n0 = b ? b(T) : T;
                  if (((T = e || T !== 0 ? T : 0), L && n0 === n0)) {
                    for (var I0 = Y.length; I0--; )
                      if (Y[I0] === n0) continue n;
                    b && Y.push(n0), J.push(T);
                  } else A(Y, n0, e) || (Y !== J && Y.push(n0), J.push(T));
                }
                return J;
              }
              function B1(n, b) {
                return (
                  (b = d2(b, n)),
                  (n = J6(n, b)),
                  n == null || delete n[F2(x2(b))]
                );
              }
              function n6(n, b, e, c) {
                return I4(n, b, e(_2(n, b)), c);
              }
              function d4(n, b, e, c) {
                for (
                  var A = n.length, h = c ? A : -1;
                  (c ? h-- : ++h < A) && b(n[h], h, n);

                );
                return e
                  ? c2(n, c ? 0 : h, c ? h + 1 : A)
                  : c2(n, c ? h + 1 : 0, c ? A : h);
              }
              function b6(n, b) {
                var e = n;
                return (
                  e instanceof V0 && (e = e.value()),
                  x1(
                    b,
                    function (c, A) {
                      return A.func.apply(A.thisArg, R2([c], A.args));
                    },
                    e
                  )
                );
              }
              function C1(n, b, e) {
                var c = n.length;
                if (c < 2) return c ? j2(n[0]) : [];
                for (var A = -1, h = P(c); ++A < c; )
                  for (var L = n[A], J = -1; ++J < c; )
                    J != A && (h[A] = A4(h[A] || L, n[J], b, e));
                return j2(zn(h, 1), b, e);
              }
              function e6(n, b, e) {
                for (
                  var c = -1, A = n.length, h = b.length, L = {};
                  ++c < A;

                ) {
                  var J = c < h ? b[c] : m;
                  e(L, n[c], J);
                }
                return L;
              }
              function s1(n) {
                return mn(n) ? n : [];
              }
              function u1(n) {
                return typeof n == "function" ? n : Gn;
              }
              function d2(n, b) {
                return w0(n) ? n : P1(n, b) ? [n] : s6(W0(n));
              }
              var Ic = R0;
              function K2(n, b, e) {
                var c = n.length;
                return (e = e === m ? c : e), !b && e >= c ? n : c2(n, b, e);
              }
              var c6 =
                $3 ||
                function (n) {
                  return Zn.clearTimeout(n);
                };
              function x6(n, b) {
                if (b) return n.slice();
                var e = n.length,
                  c = Nb ? Nb(e) : new n.constructor(e);
                return n.copy(c), c;
              }
              function R1(n) {
                var b = new n.constructor(n.byteLength);
                return new z4(b).set(new z4(n)), b;
              }
              function ic(n, b) {
                var e = b ? R1(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.byteLength);
              }
              function hc(n) {
                var b = new n.constructor(n.source, m2.exec(n));
                return (b.lastIndex = n.lastIndex), b;
              }
              function rc(n) {
                return t4 ? U0(t4.call(n)) : {};
              }
              function o6(n, b) {
                var e = b ? R1(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.length);
              }
              function t6(n, b) {
                if (n !== b) {
                  var e = n !== m,
                    c = n === null,
                    A = n === n,
                    h = Dn(n),
                    L = b !== m,
                    J = b === null,
                    Y = b === b,
                    U = Dn(b);
                  if (
                    (!J && !U && !h && n > b) ||
                    (h && L && Y && !J && !U) ||
                    (c && L && Y) ||
                    (!e && Y) ||
                    !A
                  )
                    return 1;
                  if (
                    (!c && !h && !U && n < b) ||
                    (U && e && A && !c && !h) ||
                    (J && e && A) ||
                    (!L && A) ||
                    !Y
                  )
                    return -1;
                }
                return 0;
              }
              function lc(n, b, e) {
                for (
                  var c = -1,
                    A = n.criteria,
                    h = b.criteria,
                    L = A.length,
                    J = e.length;
                  ++c < L;

                ) {
                  var Y = t6(A[c], h[c]);
                  if (Y) {
                    if (c >= J) return Y;
                    var U = e[c];
                    return Y * (U == "desc" ? -1 : 1);
                  }
                }
                return n.index - b.index;
              }
              function m6(n, b, e, c) {
                for (
                  var A = -1,
                    h = n.length,
                    L = e.length,
                    J = -1,
                    Y = b.length,
                    U = ln(h - L, 0),
                    T = P(Y + U),
                    n0 = !c;
                  ++J < Y;

                )
                  T[J] = b[J];
                for (; ++A < L; ) (n0 || A < h) && (T[e[A]] = n[A]);
                for (; U--; ) T[J++] = n[A++];
                return T;
              }
              function A6(n, b, e, c) {
                for (
                  var A = -1,
                    h = n.length,
                    L = -1,
                    J = e.length,
                    Y = -1,
                    U = b.length,
                    T = ln(h - J, 0),
                    n0 = P(T + U),
                    I0 = !c;
                  ++A < T;

                )
                  n0[A] = n[A];
                for (var l0 = A; ++Y < U; ) n0[l0 + Y] = b[Y];
                for (; ++L < J; ) (I0 || A < h) && (n0[l0 + e[L]] = n[A++]);
                return n0;
              }
              function Kn(n, b) {
                var e = -1,
                  c = n.length;
                for (b || (b = P(c)); ++e < c; ) b[e] = n[e];
                return b;
              }
              function M2(n, b, e, c) {
                var A = !e;
                e || (e = {});
                for (var h = -1, L = b.length; ++h < L; ) {
                  var J = b[h],
                    Y = c ? c(e[J], n[J], J, e, n) : m;
                  Y === m && (Y = n[J]), A ? Z2(e, J, Y) : m4(e, J, Y);
                }
                return e;
              }
              function Qc(n, b) {
                return M2(n, E1(n), b);
              }
              function Mc(n, b) {
                return M2(n, k6(n), b);
              }
              function K4(n, b) {
                return function (e, c) {
                  var A = w0(e) ? L3 : Ke,
                    h = b ? b() : {};
                  return A(e, n, f0(c, 2), h);
                };
              }
              function J8(n) {
                return R0(function (b, e) {
                  var c = -1,
                    A = e.length,
                    h = A > 1 ? e[A - 1] : m,
                    L = A > 2 ? e[2] : m;
                  for (
                    h = n.length > 3 && typeof h == "function" ? (A--, h) : m,
                      L && pn(e[0], e[1], L) && ((h = A < 3 ? m : h), (A = 1)),
                      b = U0(b);
                    ++c < A;

                  ) {
                    var J = e[c];
                    J && n(b, J, c, h);
                  }
                  return b;
                });
              }
              function a6(n, b) {
                return function (e, c) {
                  if (e == null) return e;
                  if (!En(e)) return n(e, c);
                  for (
                    var A = e.length, h = b ? A : -1, L = U0(e);
                    (b ? h-- : ++h < A) && c(L[h], h, L) !== !1;

                  );
                  return e;
                };
              }
              function g6(n) {
                return function (b, e, c) {
                  for (var A = -1, h = U0(b), L = c(b), J = L.length; J--; ) {
                    var Y = L[n ? J : ++A];
                    if (e(h[Y], Y, h) === !1) break;
                  }
                  return b;
                };
              }
              function Fc(n, b, e) {
                var c = b & j,
                  A = i4(n);
                function h() {
                  var L = this && this !== Zn && this instanceof h ? A : n;
                  return L.apply(c ? e : this, arguments);
                }
                return h;
              }
              function I6(n) {
                return function (b) {
                  b = W0(b);
                  var e = f8(b) ? a2(b) : m,
                    c = e ? e[0] : b.charAt(0),
                    A = e ? K2(e, 1).join("") : b.slice(1);
                  return c[n]() + A;
                };
              }
              function w8(n) {
                return function (b) {
                  return x1(a3(A3(b).replace(M8, "")), n, "");
                };
              }
              function i4(n) {
                return function () {
                  var b = arguments;
                  switch (b.length) {
                    case 0:
                      return new n();
                    case 1:
                      return new n(b[0]);
                    case 2:
                      return new n(b[0], b[1]);
                    case 3:
                      return new n(b[0], b[1], b[2]);
                    case 4:
                      return new n(b[0], b[1], b[2], b[3]);
                    case 5:
                      return new n(b[0], b[1], b[2], b[3], b[4]);
                    case 6:
                      return new n(b[0], b[1], b[2], b[3], b[4], b[5]);
                    case 7:
                      return new n(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
                  }
                  var e = v8(n.prototype),
                    c = n.apply(e, b);
                  return on(c) ? c : e;
                };
              }
              function Sc(n, b, e) {
                var c = i4(n);
                function A() {
                  for (
                    var h = arguments.length, L = P(h), J = h, Y = B8(A);
                    J--;

                  )
                    L[J] = arguments[J];
                  var U = h < 3 && L[0] !== Y && L[h - 1] !== Y ? [] : Y2(L, Y);
                  if (((h -= U.length), h < e))
                    return Q6(n, b, E4, A.placeholder, m, L, U, m, m, e - h);
                  var T = this && this !== Zn && this instanceof A ? c : n;
                  return Wn(T, this, L);
                }
                return A;
              }
              function i6(n) {
                return function (b, e, c) {
                  var A = U0(b);
                  if (!En(b)) {
                    var h = f0(e, 3);
                    (b = kn(b)),
                      (e = function (J) {
                        return h(A[J], J, A);
                      });
                  }
                  var L = n(b, e, c);
                  return L > -1 ? A[h ? b[L] : L] : m;
                };
              }
              function h6(n) {
                return N2(function (b) {
                  var e = b.length,
                    c = e,
                    A = b2.prototype.thru;
                  for (n && b.reverse(); c--; ) {
                    var h = b[c];
                    if (typeof h != "function") throw new n2(f);
                    if (A && !L && O4(h) == "wrapper") var L = new b2([], !0);
                  }
                  for (c = L ? c : e; ++c < e; ) {
                    h = b[c];
                    var J = O4(h),
                      Y = J == "wrapper" ? d1(h) : m;
                    Y &&
                    G1(Y[0]) &&
                    Y[1] == (o0 | h0 | O | A0) &&
                    !Y[4].length &&
                    Y[9] == 1
                      ? (L = L[O4(Y[0])].apply(L, Y[3]))
                      : (L = h.length == 1 && G1(h) ? L[J]() : L.thru(h));
                  }
                  return function () {
                    var U = arguments,
                      T = U[0];
                    if (L && U.length == 1 && w0(T)) return L.plant(T).value();
                    for (
                      var n0 = 0, I0 = e ? b[n0].apply(this, U) : T;
                      ++n0 < e;

                    )
                      I0 = b[n0].call(this, I0);
                    return I0;
                  };
                });
              }
              function E4(n, b, e, c, A, h, L, J, Y, U) {
                var T = b & o0,
                  n0 = b & j,
                  I0 = b & b0,
                  l0 = b & (h0 | W),
                  k0 = b & y,
                  s0 = I0 ? m : i4(n);
                function L0() {
                  for (var Y0 = arguments.length, d0 = P(Y0), qn = Y0; qn--; )
                    d0[qn] = arguments[qn];
                  if (l0)
                    var jn = B8(L0),
                      Un = s3(d0, jn);
                  if (
                    (c && (d0 = m6(d0, c, A, l0)),
                    h && (d0 = A6(d0, h, L, l0)),
                    (Y0 -= Un),
                    l0 && Y0 < U)
                  ) {
                    var An = Y2(d0, jn);
                    return Q6(
                      n,
                      b,
                      E4,
                      L0.placeholder,
                      e,
                      d0,
                      An,
                      J,
                      Y,
                      U - Y0
                    );
                  }
                  var i2 = n0 ? e : this,
                    B2 = I0 ? i2[n] : n;
                  return (
                    (Y0 = d0.length),
                    J ? (d0 = Kc(d0, J)) : k0 && Y0 > 1 && d0.reverse(),
                    T && Y < Y0 && (d0.length = Y),
                    this &&
                      this !== Zn &&
                      this instanceof L0 &&
                      (B2 = s0 || i4(B2)),
                    B2.apply(i2, d0)
                  );
                }
                return L0;
              }
              function r6(n, b) {
                return function (e, c) {
                  return Xe(e, n, b(c), {});
                };
              }
              function P4(n, b) {
                return function (e, c) {
                  var A;
                  if (e === m && c === m) return b;
                  if ((e !== m && (A = e), c !== m)) {
                    if (A === m) return c;
                    typeof e == "string" || typeof c == "string"
                      ? ((e = Xn(e)), (c = Xn(c)))
                      : ((e = _b(e)), (c = _b(c))),
                      (A = n(e, c));
                  }
                  return A;
                };
              }
              function Y1(n) {
                return N2(function (b) {
                  return (
                    (b = cn(b, yn(f0()))),
                    R0(function (e) {
                      var c = this;
                      return n(b, function (A) {
                        return Wn(A, c, e);
                      });
                    })
                  );
                });
              }
              function G4(n, b) {
                b = b === m ? " " : Xn(b);
                var e = b.length;
                if (e < 2) return e ? J1(b, n) : b;
                var c = J1(b, w4(n / k8(b)));
                return f8(b) ? K2(a2(c), 0, n).join("") : c.slice(0, n);
              }
              function fc(n, b, e, c) {
                var A = b & j,
                  h = i4(n);
                function L() {
                  for (
                    var J = -1,
                      Y = arguments.length,
                      U = -1,
                      T = c.length,
                      n0 = P(T + Y),
                      I0 = this && this !== Zn && this instanceof L ? h : n;
                    ++U < T;

                  )
                    n0[U] = c[U];
                  for (; Y--; ) n0[U++] = arguments[++J];
                  return Wn(I0, A ? e : this, n0);
                }
                return L;
              }
              function l6(n) {
                return function (b, e, c) {
                  return (
                    c && typeof c != "number" && pn(b, e, c) && (e = c = m),
                    (b = w2(b)),
                    e === m ? ((e = b), (b = 0)) : (e = w2(e)),
                    (c = c === m ? (b < e ? 1 : -1) : w2(c)),
                    oc(b, e, c, n)
                  );
                };
              }
              function H4(n) {
                return function (b, e) {
                  return (
                    (typeof b == "string" && typeof e == "string") ||
                      ((b = o2(b)), (e = o2(e))),
                    n(b, e)
                  );
                };
              }
              function Q6(n, b, e, c, A, h, L, J, Y, U) {
                var T = b & h0,
                  n0 = T ? L : m,
                  I0 = T ? m : L,
                  l0 = T ? h : m,
                  k0 = T ? m : h;
                (b |= T ? O : $), (b &= ~(T ? $ : O)), b & g0 || (b &= -4);
                var s0 = [n, b, A, l0, n0, k0, I0, J, Y, U],
                  L0 = e.apply(m, s0);
                return G1(n) && w6(L0, s0), (L0.placeholder = c), B6(L0, n, b);
              }
              function V1(n) {
                var b = rn[n];
                return function (e, c) {
                  if (
                    ((e = o2(e)),
                    (c = c == null ? 0 : wn(C0(c), 292)),
                    c && Bb(e))
                  ) {
                    var A = (W0(e) + "e").split("e"),
                      h = b(A[0] + "e" + (+A[1] + c));
                    return (
                      (A = (W0(h) + "e").split("e")),
                      +(A[0] + "e" + (+A[1] - c))
                    );
                  }
                  return b(e);
                };
              }
              var kc =
                z8 && 1 / F4(new z8([, -0]))[1] == T0
                  ? function (n) {
                      return new z8(n);
                    }
                  : cb;
              function M6(n) {
                return function (b) {
                  var e = Bn(b);
                  return e == D0 ? I1(b) : e == F0 ? d3(b) : C3(b, n(b));
                };
              }
              function z2(n, b, e, c, A, h, L, J) {
                var Y = b & b0;
                if (!Y && typeof n != "function") throw new n2(f);
                var U = c ? c.length : 0;
                if (
                  (U || ((b &= -97), (c = A = m)),
                  (L = L === m ? L : ln(C0(L), 0)),
                  (J = J === m ? J : C0(J)),
                  (U -= A ? A.length : 0),
                  b & $)
                ) {
                  var T = c,
                    n0 = A;
                  c = A = m;
                }
                var I0 = Y ? m : d1(n),
                  l0 = [n, b, e, c, A, T, n0, h, L, J];
                if (
                  (I0 && pc(l0, I0),
                  (n = l0[0]),
                  (b = l0[1]),
                  (e = l0[2]),
                  (c = l0[3]),
                  (A = l0[4]),
                  (J = l0[9] =
                    l0[9] === m ? (Y ? 0 : n.length) : ln(l0[9] - U, 0)),
                  !J && b & (h0 | W) && (b &= -25),
                  !b || b == j)
                )
                  var k0 = Fc(n, b, e);
                else
                  b == h0 || b == W
                    ? (k0 = Sc(n, b, J))
                    : (b == O || b == (j | O)) && !A.length
                    ? (k0 = fc(n, b, e, c))
                    : (k0 = E4.apply(m, l0));
                var s0 = I0 ? Tb : w6;
                return B6(s0(k0, l0), n, b);
              }
              function F6(n, b, e, c) {
                return n === m || (I2(n, Z8[e]) && !X0.call(c, e)) ? b : n;
              }
              function S6(n, b, e, c, A, h) {
                return (
                  on(n) &&
                    on(b) &&
                    (h.set(b, n), p4(n, b, m, S6, h), h.delete(b)),
                  n
                );
              }
              function Lc(n) {
                return l4(n) ? m : n;
              }
              function f6(n, b, e, c, A, h) {
                var L = e & p,
                  J = n.length,
                  Y = b.length;
                if (J != Y && !(L && Y > J)) return !1;
                var U = h.get(n),
                  T = h.get(b);
                if (U && T) return U == b && T == n;
                var n0 = -1,
                  I0 = !0,
                  l0 = e & u ? new T2() : m;
                for (h.set(n, b), h.set(b, n); ++n0 < J; ) {
                  var k0 = n[n0],
                    s0 = b[n0];
                  if (c)
                    var L0 = L
                      ? c(s0, k0, n0, b, n, h)
                      : c(k0, s0, n0, n, b, h);
                  if (L0 !== m) {
                    if (L0) continue;
                    I0 = !1;
                    break;
                  }
                  if (l0) {
                    if (
                      !o1(b, function (Y0, d0) {
                        if (!b4(l0, d0) && (k0 === Y0 || A(k0, Y0, e, c, h)))
                          return l0.push(d0);
                      })
                    ) {
                      I0 = !1;
                      break;
                    }
                  } else if (!(k0 === s0 || A(k0, s0, e, c, h))) {
                    I0 = !1;
                    break;
                  }
                }
                return h.delete(n), h.delete(b), I0;
              }
              function Zc(n, b, e, c, A, h, L) {
                switch (e) {
                  case x:
                    if (
                      n.byteLength != b.byteLength ||
                      n.byteOffset != b.byteOffset
                    )
                      return !1;
                    (n = n.buffer), (b = b.buffer);
                  case I:
                    return !(
                      n.byteLength != b.byteLength || !h(new z4(n), new z4(b))
                    );
                  case xn:
                  case nn:
                  case sn:
                    return I2(+n, +b);
                  case Jn:
                    return n.name == b.name && n.message == b.message;
                  case Q0:
                  case u0:
                    return n == b + "";
                  case D0:
                    var J = I1;
                  case F0:
                    var Y = c & p;
                    if ((J || (J = F4), n.size != b.size && !Y)) return !1;
                    var U = L.get(n);
                    if (U) return U == b;
                    (c |= u), L.set(n, b);
                    var T = f6(J(n), J(b), c, A, h, L);
                    return L.delete(n), T;
                  case Fn:
                    if (t4) return t4.call(n) == t4.call(b);
                }
                return !1;
              }
              function zc(n, b, e, c, A, h) {
                var L = e & p,
                  J = p1(n),
                  Y = J.length,
                  U = p1(b),
                  T = U.length;
                if (Y != T && !L) return !1;
                for (var n0 = Y; n0--; ) {
                  var I0 = J[n0];
                  if (!(L ? I0 in b : X0.call(b, I0))) return !1;
                }
                var l0 = h.get(n),
                  k0 = h.get(b);
                if (l0 && k0) return l0 == b && k0 == n;
                var s0 = !0;
                h.set(n, b), h.set(b, n);
                for (var L0 = L; ++n0 < Y; ) {
                  I0 = J[n0];
                  var Y0 = n[I0],
                    d0 = b[I0];
                  if (c)
                    var qn = L
                      ? c(d0, Y0, I0, b, n, h)
                      : c(Y0, d0, I0, n, b, h);
                  if (!(qn === m ? Y0 === d0 || A(Y0, d0, e, c, h) : qn)) {
                    s0 = !1;
                    break;
                  }
                  L0 || (L0 = I0 == "constructor");
                }
                if (s0 && !L0) {
                  var jn = n.constructor,
                    Un = b.constructor;
                  jn != Un &&
                    "constructor" in n &&
                    "constructor" in b &&
                    !(
                      typeof jn == "function" &&
                      jn instanceof jn &&
                      typeof Un == "function" &&
                      Un instanceof Un
                    ) &&
                    (s0 = !1);
                }
                return h.delete(n), h.delete(b), s0;
              }
              function N2(n) {
                return O1(v6(n, m, V6), n + "");
              }
              function p1(n) {
                return Eb(n, kn, E1);
              }
              function j1(n) {
                return Eb(n, Pn, k6);
              }
              var d1 = C4
                ? function (n) {
                    return C4.get(n);
                  }
                : cb;
              function O4(n) {
                for (
                  var b = n.name + "",
                    e = N8[b],
                    c = X0.call(N8, b) ? e.length : 0;
                  c--;

                ) {
                  var A = e[c],
                    h = A.func;
                  if (h == null || h == n) return A.name;
                }
                return b;
              }
              function B8(n) {
                var b = X0.call(i, "placeholder") ? i : n;
                return b.placeholder;
              }
              function f0() {
                var n = i.iteratee || bb;
                return (
                  (n = n === bb ? Hb : n),
                  arguments.length ? n(arguments[0], arguments[1]) : n
                );
              }
              function W4(n, b) {
                var e = n.__data__;
                return uc(b)
                  ? e[typeof b == "string" ? "string" : "hash"]
                  : e.map;
              }
              function K1(n) {
                for (var b = kn(n), e = b.length; e--; ) {
                  var c = b[e],
                    A = n[c];
                  b[e] = [c, A, z6(A)];
                }
                return b;
              }
              function n8(n, b) {
                var e = V3(n, b);
                return Gb(e) ? e : m;
              }
              function Nc(n) {
                var b = X0.call(n, q2),
                  e = n[q2];
                try {
                  n[q2] = m;
                  var c = !0;
                } catch {}
                var A = L4.call(n);
                return c && (b ? (n[q2] = e) : delete n[q2]), A;
              }
              var E1 = h1
                  ? function (n) {
                      return n == null
                        ? []
                        : ((n = U0(n)),
                          u2(h1(n), function (b) {
                            return Jb.call(n, b);
                          }));
                    }
                  : xb,
                k6 = h1
                  ? function (n) {
                      for (var b = []; n; ) R2(b, E1(n)), (n = N4(n));
                      return b;
                    }
                  : xb,
                Bn = Vn;
              ((r1 && Bn(new r1(new ArrayBuffer(1))) != x) ||
                (c4 && Bn(new c4()) != D0) ||
                (l1 && Bn(l1.resolve()) != K) ||
                (z8 && Bn(new z8()) != F0) ||
                (x4 && Bn(new x4()) != hn)) &&
                (Bn = function (n) {
                  var b = Vn(n),
                    e = b == V ? n.constructor : m,
                    c = e ? b8(e) : "";
                  if (c)
                    switch (c) {
                      case me:
                        return x;
                      case Ae:
                        return D0;
                      case ae:
                        return K;
                      case ge:
                        return F0;
                      case Ie:
                        return hn;
                    }
                  return b;
                });
              function vc(n, b, e) {
                for (var c = -1, A = e.length; ++c < A; ) {
                  var h = e[c],
                    L = h.size;
                  switch (h.type) {
                    case "drop":
                      n += L;
                      break;
                    case "dropRight":
                      b -= L;
                      break;
                    case "take":
                      b = wn(b, n + L);
                      break;
                    case "takeRight":
                      n = ln(n, b - L);
                      break;
                  }
                }
                return { start: n, end: b };
              }
              function Jc(n) {
                var b = n.match(A8);
                return b ? b[1].split(P8) : [];
              }
              function L6(n, b, e) {
                b = d2(b, n);
                for (var c = -1, A = b.length, h = !1; ++c < A; ) {
                  var L = F2(b[c]);
                  if (!(h = n != null && e(n, L))) break;
                  n = n[L];
                }
                return h || ++c != A
                  ? h
                  : ((A = n == null ? 0 : n.length),
                    !!A && $4(A) && v2(L, A) && (w0(n) || e8(n)));
              }
              function wc(n) {
                var b = n.length,
                  e = new n.constructor(b);
                return (
                  b &&
                    typeof n[0] == "string" &&
                    X0.call(n, "index") &&
                    ((e.index = n.index), (e.input = n.input)),
                  e
                );
              }
              function Z6(n) {
                return typeof n.constructor == "function" && !h4(n)
                  ? v8(N4(n))
                  : {};
              }
              function Bc(n, b, e) {
                var c = n.constructor;
                switch (b) {
                  case I:
                    return R1(n);
                  case xn:
                  case nn:
                    return new c(+n);
                  case x:
                    return ic(n, e);
                  case o:
                  case M:
                  case C:
                  case E:
                  case X:
                  case Z0:
                  case G0:
                  case P0:
                  case H0:
                    return o6(n, e);
                  case D0:
                    return new c();
                  case sn:
                  case u0:
                    return new c(n);
                  case Q0:
                    return hc(n);
                  case F0:
                    return new c();
                  case Fn:
                    return rc(n);
                }
              }
              function Cc(n, b) {
                var e = b.length;
                if (!e) return n;
                var c = e - 1;
                return (
                  (b[c] = (e > 1 ? "& " : "") + b[c]),
                  (b = b.join(e > 2 ? ", " : " ")),
                  n.replace(
                    C2,
                    `{
/* [wrapped with ` +
                      b +
                      `] */
`
                  )
                );
              }
              function sc(n) {
                return w0(n) || e8(n) || !!(wb && n && n[wb]);
              }
              function v2(n, b) {
                var e = typeof n;
                return (
                  (b = b ?? y0),
                  !!b &&
                    (e == "number" || (e != "symbol" && q8.test(n))) &&
                    n > -1 &&
                    n % 1 == 0 &&
                    n < b
                );
              }
              function pn(n, b, e) {
                if (!on(e)) return !1;
                var c = typeof b;
                return (
                  c == "number"
                    ? En(e) && v2(b, e.length)
                    : c == "string" && b in e
                )
                  ? I2(e[b], n)
                  : !1;
              }
              function P1(n, b) {
                if (w0(n)) return !1;
                var e = typeof n;
                return e == "number" ||
                  e == "symbol" ||
                  e == "boolean" ||
                  n == null ||
                  Dn(n)
                  ? !0
                  : j8.test(n) || !m8.test(n) || (b != null && n in U0(b));
              }
              function uc(n) {
                var b = typeof n;
                return b == "string" ||
                  b == "number" ||
                  b == "symbol" ||
                  b == "boolean"
                  ? n !== "__proto__"
                  : n === null;
              }
              function G1(n) {
                var b = O4(n),
                  e = i[b];
                if (typeof e != "function" || !(b in V0.prototype)) return !1;
                if (n === e) return !0;
                var c = d1(e);
                return !!c && n === c[0];
              }
              function Rc(n) {
                return !!zb && zb in n;
              }
              var Yc = f4 ? J2 : ob;
              function h4(n) {
                var b = n && n.constructor,
                  e = (typeof b == "function" && b.prototype) || Z8;
                return n === e;
              }
              function z6(n) {
                return n === n && !on(n);
              }
              function N6(n, b) {
                return function (e) {
                  return e == null ? !1 : e[n] === b && (b !== m || n in U0(e));
                };
              }
              function Vc(n) {
                var b = U4(n, function (c) {
                    return e.size === H && e.clear(), c;
                  }),
                  e = b.cache;
                return b;
              }
              function pc(n, b) {
                var e = n[1],
                  c = b[1],
                  A = e | c,
                  h = A < (j | b0 | o0),
                  L =
                    (c == o0 && e == h0) ||
                    (c == o0 && e == A0 && n[7].length <= b[8]) ||
                    (c == (o0 | A0) && b[7].length <= b[8] && e == h0);
                if (!(h || L)) return n;
                c & j && ((n[2] = b[2]), (A |= e & j ? 0 : g0));
                var J = b[3];
                if (J) {
                  var Y = n[3];
                  (n[3] = Y ? m6(Y, J, b[4]) : J),
                    (n[4] = Y ? Y2(n[3], c0) : b[4]);
                }
                return (
                  (J = b[5]),
                  J &&
                    ((Y = n[5]),
                    (n[5] = Y ? A6(Y, J, b[6]) : J),
                    (n[6] = Y ? Y2(n[5], c0) : b[6])),
                  (J = b[7]),
                  J && (n[7] = J),
                  c & o0 && (n[8] = n[8] == null ? b[8] : wn(n[8], b[8])),
                  n[9] == null && (n[9] = b[9]),
                  (n[0] = b[0]),
                  (n[1] = A),
                  n
                );
              }
              function jc(n) {
                var b = [];
                if (n != null) for (var e in U0(n)) b.push(e);
                return b;
              }
              function dc(n) {
                return L4.call(n);
              }
              function v6(n, b, e) {
                return (
                  (b = ln(b === m ? n.length - 1 : b, 0)),
                  function () {
                    for (
                      var c = arguments,
                        A = -1,
                        h = ln(c.length - b, 0),
                        L = P(h);
                      ++A < h;

                    )
                      L[A] = c[b + A];
                    A = -1;
                    for (var J = P(b + 1); ++A < b; ) J[A] = c[A];
                    return (J[b] = e(L)), Wn(n, this, J);
                  }
                );
              }
              function J6(n, b) {
                return b.length < 2 ? n : _2(n, c2(b, 0, -1));
              }
              function Kc(n, b) {
                for (var e = n.length, c = wn(b.length, e), A = Kn(n); c--; ) {
                  var h = b[c];
                  n[c] = v2(h, e) ? A[h] : m;
                }
                return n;
              }
              function H1(n, b) {
                if (
                  !(b === "constructor" && typeof n[b] == "function") &&
                  b != "__proto__"
                )
                  return n[b];
              }
              var w6 = C6(Tb),
                r4 =
                  ne ||
                  function (n, b) {
                    return Zn.setTimeout(n, b);
                  },
                O1 = C6(Ac);
              function B6(n, b, e) {
                var c = b + "";
                return O1(n, Cc(c, Ec(Jc(c), e)));
              }
              function C6(n) {
                var b = 0,
                  e = 0;
                return function () {
                  var c = xe(),
                    A = M0 - (c - e);
                  if (((e = c), A > 0)) {
                    if (++b >= m0) return arguments[0];
                  } else b = 0;
                  return n.apply(m, arguments);
                };
              }
              function y4(n, b) {
                var e = -1,
                  c = n.length,
                  A = c - 1;
                for (b = b === m ? c : b; ++e < b; ) {
                  var h = v1(e, A),
                    L = n[h];
                  (n[h] = n[e]), (n[e] = L);
                }
                return (n.length = b), n;
              }
              var s6 = Vc(function (n) {
                var b = [];
                return (
                  n.charCodeAt(0) === 46 && b.push(""),
                  n.replace(d8, function (e, c, A, h) {
                    b.push(A ? h.replace(O8, "$1") : c || e);
                  }),
                  b
                );
              });
              function F2(n) {
                if (typeof n == "string" || Dn(n)) return n;
                var b = n + "";
                return b == "0" && 1 / n == -1 / 0 ? "-0" : b;
              }
              function b8(n) {
                if (n != null) {
                  try {
                    return k4.call(n);
                  } catch {}
                  try {
                    return n + "";
                  } catch {}
                }
                return "";
              }
              function Ec(n, b) {
                return (
                  _n(Tn, function (e) {
                    var c = "_." + e[0];
                    b & e[1] && !Q4(n, c) && n.push(c);
                  }),
                  n.sort()
                );
              }
              function u6(n) {
                if (n instanceof V0) return n.clone();
                var b = new b2(n.__wrapped__, n.__chain__);
                return (
                  (b.__actions__ = Kn(n.__actions__)),
                  (b.__index__ = n.__index__),
                  (b.__values__ = n.__values__),
                  b
                );
              }
              function Pc(n, b, e) {
                (e ? pn(n, b, e) : b === m) ? (b = 1) : (b = ln(C0(b), 0));
                var c = n == null ? 0 : n.length;
                if (!c || b < 1) return [];
                for (var A = 0, h = 0, L = P(w4(c / b)); A < c; )
                  L[h++] = c2(n, A, (A += b));
                return L;
              }
              function Gc(n) {
                for (
                  var b = -1, e = n == null ? 0 : n.length, c = 0, A = [];
                  ++b < e;

                ) {
                  var h = n[b];
                  h && (A[c++] = h);
                }
                return A;
              }
              function Hc() {
                var n = arguments.length;
                if (!n) return [];
                for (var b = P(n - 1), e = arguments[0], c = n; c--; )
                  b[c - 1] = arguments[c];
                return R2(w0(e) ? Kn(e) : [e], zn(b, 1));
              }
              var Oc = R0(function (n, b) {
                  return mn(n) ? A4(n, zn(b, 1, mn, !0)) : [];
                }),
                Wc = R0(function (n, b) {
                  var e = x2(b);
                  return (
                    mn(e) && (e = m),
                    mn(n) ? A4(n, zn(b, 1, mn, !0), f0(e, 2)) : []
                  );
                }),
                yc = R0(function (n, b) {
                  var e = x2(b);
                  return (
                    mn(e) && (e = m), mn(n) ? A4(n, zn(b, 1, mn, !0), m, e) : []
                  );
                });
              function Xc(n, b, e) {
                var c = n == null ? 0 : n.length;
                return c
                  ? ((b = e || b === m ? 1 : C0(b)), c2(n, b < 0 ? 0 : b, c))
                  : [];
              }
              function Dc(n, b, e) {
                var c = n == null ? 0 : n.length;
                return c
                  ? ((b = e || b === m ? 1 : C0(b)),
                    (b = c - b),
                    c2(n, 0, b < 0 ? 0 : b))
                  : [];
              }
              function qc(n, b) {
                return n && n.length ? d4(n, f0(b, 3), !0, !0) : [];
              }
              function Uc(n, b) {
                return n && n.length ? d4(n, f0(b, 3), !0) : [];
              }
              function Tc(n, b, e, c) {
                var A = n == null ? 0 : n.length;
                return A
                  ? (e &&
                      typeof e != "number" &&
                      pn(n, b, e) &&
                      ((e = 0), (c = A)),
                    He(n, b, e, c))
                  : [];
              }
              function R6(n, b, e) {
                var c = n == null ? 0 : n.length;
                if (!c) return -1;
                var A = e == null ? 0 : C0(e);
                return A < 0 && (A = ln(c + A, 0)), M4(n, f0(b, 3), A);
              }
              function Y6(n, b, e) {
                var c = n == null ? 0 : n.length;
                if (!c) return -1;
                var A = c - 1;
                return (
                  e !== m &&
                    ((A = C0(e)), (A = e < 0 ? ln(c + A, 0) : wn(A, c - 1))),
                  M4(n, f0(b, 3), A, !0)
                );
              }
              function V6(n) {
                var b = n == null ? 0 : n.length;
                return b ? zn(n, 1) : [];
              }
              function $c(n) {
                var b = n == null ? 0 : n.length;
                return b ? zn(n, T0) : [];
              }
              function _c(n, b) {
                var e = n == null ? 0 : n.length;
                return e ? ((b = b === m ? 1 : C0(b)), zn(n, b)) : [];
              }
              function nx(n) {
                for (
                  var b = -1, e = n == null ? 0 : n.length, c = {};
                  ++b < e;

                ) {
                  var A = n[b];
                  c[A[0]] = A[1];
                }
                return c;
              }
              function p6(n) {
                return n && n.length ? n[0] : m;
              }
              function bx(n, b, e) {
                var c = n == null ? 0 : n.length;
                if (!c) return -1;
                var A = e == null ? 0 : C0(e);
                return A < 0 && (A = ln(c + A, 0)), S8(n, b, A);
              }
              function ex(n) {
                var b = n == null ? 0 : n.length;
                return b ? c2(n, 0, -1) : [];
              }
              var cx = R0(function (n) {
                  var b = cn(n, s1);
                  return b.length && b[0] === n[0] ? k1(b) : [];
                }),
                xx = R0(function (n) {
                  var b = x2(n),
                    e = cn(n, s1);
                  return (
                    b === x2(e) ? (b = m) : e.pop(),
                    e.length && e[0] === n[0] ? k1(e, f0(b, 2)) : []
                  );
                }),
                ox = R0(function (n) {
                  var b = x2(n),
                    e = cn(n, s1);
                  return (
                    (b = typeof b == "function" ? b : m),
                    b && e.pop(),
                    e.length && e[0] === n[0] ? k1(e, m, b) : []
                  );
                });
              function tx(n, b) {
                return n == null ? "" : ee.call(n, b);
              }
              function x2(n) {
                var b = n == null ? 0 : n.length;
                return b ? n[b - 1] : m;
              }
              function mx(n, b, e) {
                var c = n == null ? 0 : n.length;
                if (!c) return -1;
                var A = c;
                return (
                  e !== m &&
                    ((A = C0(e)), (A = A < 0 ? ln(c + A, 0) : wn(A, c - 1))),
                  b === b ? E3(n, b, A) : M4(n, Qb, A, !0)
                );
              }
              function Ax(n, b) {
                return n && n.length ? Xb(n, C0(b)) : m;
              }
              var ax = R0(j6);
              function j6(n, b) {
                return n && n.length && b && b.length ? N1(n, b) : n;
              }
              function gx(n, b, e) {
                return n && n.length && b && b.length ? N1(n, b, f0(e, 2)) : n;
              }
              function Ix(n, b, e) {
                return n && n.length && b && b.length ? N1(n, b, m, e) : n;
              }
              var ix = N2(function (n, b) {
                var e = n == null ? 0 : n.length,
                  c = M1(n, b);
                return (
                  Ub(
                    n,
                    cn(b, function (A) {
                      return v2(A, e) ? +A : A;
                    }).sort(t6)
                  ),
                  c
                );
              });
              function hx(n, b) {
                var e = [];
                if (!(n && n.length)) return e;
                var c = -1,
                  A = [],
                  h = n.length;
                for (b = f0(b, 3); ++c < h; ) {
                  var L = n[c];
                  b(L, c, n) && (e.push(L), A.push(c));
                }
                return Ub(n, A), e;
              }
              function W1(n) {
                return n == null ? n : te.call(n);
              }
              function rx(n, b, e) {
                var c = n == null ? 0 : n.length;
                return c
                  ? (e && typeof e != "number" && pn(n, b, e)
                      ? ((b = 0), (e = c))
                      : ((b = b == null ? 0 : C0(b)),
                        (e = e === m ? c : C0(e))),
                    c2(n, b, e))
                  : [];
              }
              function lx(n, b) {
                return j4(n, b);
              }
              function Qx(n, b, e) {
                return w1(n, b, f0(e, 2));
              }
              function Mx(n, b) {
                var e = n == null ? 0 : n.length;
                if (e) {
                  var c = j4(n, b);
                  if (c < e && I2(n[c], b)) return c;
                }
                return -1;
              }
              function Fx(n, b) {
                return j4(n, b, !0);
              }
              function Sx(n, b, e) {
                return w1(n, b, f0(e, 2), !0);
              }
              function fx(n, b) {
                var e = n == null ? 0 : n.length;
                if (e) {
                  var c = j4(n, b, !0) - 1;
                  if (I2(n[c], b)) return c;
                }
                return -1;
              }
              function kx(n) {
                return n && n.length ? $b(n) : [];
              }
              function Lx(n, b) {
                return n && n.length ? $b(n, f0(b, 2)) : [];
              }
              function Zx(n) {
                var b = n == null ? 0 : n.length;
                return b ? c2(n, 1, b) : [];
              }
              function zx(n, b, e) {
                return n && n.length
                  ? ((b = e || b === m ? 1 : C0(b)), c2(n, 0, b < 0 ? 0 : b))
                  : [];
              }
              function Nx(n, b, e) {
                var c = n == null ? 0 : n.length;
                return c
                  ? ((b = e || b === m ? 1 : C0(b)),
                    (b = c - b),
                    c2(n, b < 0 ? 0 : b, c))
                  : [];
              }
              function vx(n, b) {
                return n && n.length ? d4(n, f0(b, 3), !1, !0) : [];
              }
              function Jx(n, b) {
                return n && n.length ? d4(n, f0(b, 3)) : [];
              }
              var wx = R0(function (n) {
                  return j2(zn(n, 1, mn, !0));
                }),
                Bx = R0(function (n) {
                  var b = x2(n);
                  return mn(b) && (b = m), j2(zn(n, 1, mn, !0), f0(b, 2));
                }),
                Cx = R0(function (n) {
                  var b = x2(n);
                  return (
                    (b = typeof b == "function" ? b : m),
                    j2(zn(n, 1, mn, !0), m, b)
                  );
                });
              function sx(n) {
                return n && n.length ? j2(n) : [];
              }
              function ux(n, b) {
                return n && n.length ? j2(n, f0(b, 2)) : [];
              }
              function Rx(n, b) {
                return (
                  (b = typeof b == "function" ? b : m),
                  n && n.length ? j2(n, m, b) : []
                );
              }
              function y1(n) {
                if (!(n && n.length)) return [];
                var b = 0;
                return (
                  (n = u2(n, function (e) {
                    if (mn(e)) return (b = ln(e.length, b)), !0;
                  })),
                  a1(b, function (e) {
                    return cn(n, t1(e));
                  })
                );
              }
              function d6(n, b) {
                if (!(n && n.length)) return [];
                var e = y1(n);
                return b == null
                  ? e
                  : cn(e, function (c) {
                      return Wn(b, m, c);
                    });
              }
              var Yx = R0(function (n, b) {
                  return mn(n) ? A4(n, b) : [];
                }),
                Vx = R0(function (n) {
                  return C1(u2(n, mn));
                }),
                px = R0(function (n) {
                  var b = x2(n);
                  return mn(b) && (b = m), C1(u2(n, mn), f0(b, 2));
                }),
                jx = R0(function (n) {
                  var b = x2(n);
                  return (
                    (b = typeof b == "function" ? b : m), C1(u2(n, mn), m, b)
                  );
                }),
                dx = R0(y1);
              function Kx(n, b) {
                return e6(n || [], b || [], m4);
              }
              function Ex(n, b) {
                return e6(n || [], b || [], I4);
              }
              var Px = R0(function (n) {
                var b = n.length,
                  e = b > 1 ? n[b - 1] : m;
                return (
                  (e = typeof e == "function" ? (n.pop(), e) : m), d6(n, e)
                );
              });
              function K6(n) {
                var b = i(n);
                return (b.__chain__ = !0), b;
              }
              function Gx(n, b) {
                return b(n), n;
              }
              function X4(n, b) {
                return b(n);
              }
              var Hx = N2(function (n) {
                var b = n.length,
                  e = b ? n[0] : 0,
                  c = this.__wrapped__,
                  A = function (h) {
                    return M1(h, n);
                  };
                return b > 1 ||
                  this.__actions__.length ||
                  !(c instanceof V0) ||
                  !v2(e)
                  ? this.thru(A)
                  : ((c = c.slice(e, +e + (b ? 1 : 0))),
                    c.__actions__.push({ func: X4, args: [A], thisArg: m }),
                    new b2(c, this.__chain__).thru(function (h) {
                      return b && !h.length && h.push(m), h;
                    }));
              });
              function Ox() {
                return K6(this);
              }
              function Wx() {
                return new b2(this.value(), this.__chain__);
              }
              function yx() {
                this.__values__ === m && (this.__values__ = _6(this.value()));
                var n = this.__index__ >= this.__values__.length,
                  b = n ? m : this.__values__[this.__index__++];
                return { done: n, value: b };
              }
              function Xx() {
                return this;
              }
              function Dx(n) {
                for (var b, e = this; e instanceof u4; ) {
                  var c = u6(e);
                  (c.__index__ = 0),
                    (c.__values__ = m),
                    b ? (A.__wrapped__ = c) : (b = c);
                  var A = c;
                  e = e.__wrapped__;
                }
                return (A.__wrapped__ = n), b;
              }
              function qx() {
                var n = this.__wrapped__;
                if (n instanceof V0) {
                  var b = n;
                  return (
                    this.__actions__.length && (b = new V0(this)),
                    (b = b.reverse()),
                    b.__actions__.push({ func: X4, args: [W1], thisArg: m }),
                    new b2(b, this.__chain__)
                  );
                }
                return this.thru(W1);
              }
              function Ux() {
                return b6(this.__wrapped__, this.__actions__);
              }
              var Tx = K4(function (n, b, e) {
                X0.call(n, e) ? ++n[e] : Z2(n, e, 1);
              });
              function $x(n, b, e) {
                var c = w0(n) ? rb : Ge;
                return e && pn(n, b, e) && (b = m), c(n, f0(b, 3));
              }
              function _x(n, b) {
                var e = w0(n) ? u2 : db;
                return e(n, f0(b, 3));
              }
              var no = i6(R6),
                bo = i6(Y6);
              function eo(n, b) {
                return zn(D4(n, b), 1);
              }
              function co(n, b) {
                return zn(D4(n, b), T0);
              }
              function xo(n, b, e) {
                return (e = e === m ? 1 : C0(e)), zn(D4(n, b), e);
              }
              function E6(n, b) {
                var e = w0(n) ? _n : p2;
                return e(n, f0(b, 3));
              }
              function P6(n, b) {
                var e = w0(n) ? Z3 : jb;
                return e(n, f0(b, 3));
              }
              var oo = K4(function (n, b, e) {
                X0.call(n, e) ? n[e].push(b) : Z2(n, e, [b]);
              });
              function to(n, b, e, c) {
                (n = En(n) ? n : s8(n)), (e = e && !c ? C0(e) : 0);
                var A = n.length;
                return (
                  e < 0 && (e = ln(A + e, 0)),
                  _4(n)
                    ? e <= A && n.indexOf(b, e) > -1
                    : !!A && S8(n, b, e) > -1
                );
              }
              var mo = R0(function (n, b, e) {
                  var c = -1,
                    A = typeof b == "function",
                    h = En(n) ? P(n.length) : [];
                  return (
                    p2(n, function (L) {
                      h[++c] = A ? Wn(b, L, e) : a4(L, b, e);
                    }),
                    h
                  );
                }),
                Ao = K4(function (n, b, e) {
                  Z2(n, e, b);
                });
              function D4(n, b) {
                var e = w0(n) ? cn : Ob;
                return e(n, f0(b, 3));
              }
              function ao(n, b, e, c) {
                return n == null
                  ? []
                  : (w0(b) || (b = b == null ? [] : [b]),
                    (e = c ? m : e),
                    w0(e) || (e = e == null ? [] : [e]),
                    Db(n, b, e));
              }
              var go = K4(
                function (n, b, e) {
                  n[e ? 0 : 1].push(b);
                },
                function () {
                  return [[], []];
                }
              );
              function Io(n, b, e) {
                var c = w0(n) ? x1 : Fb,
                  A = arguments.length < 3;
                return c(n, f0(b, 4), e, A, p2);
              }
              function io(n, b, e) {
                var c = w0(n) ? z3 : Fb,
                  A = arguments.length < 3;
                return c(n, f0(b, 4), e, A, jb);
              }
              function ho(n, b) {
                var e = w0(n) ? u2 : db;
                return e(n, T4(f0(b, 3)));
              }
              function ro(n) {
                var b = w0(n) ? Rb : tc;
                return b(n);
              }
              function lo(n, b, e) {
                (e ? pn(n, b, e) : b === m) ? (b = 1) : (b = C0(b));
                var c = w0(n) ? je : mc;
                return c(n, b);
              }
              function Qo(n) {
                var b = w0(n) ? de : ac;
                return b(n);
              }
              function Mo(n) {
                if (n == null) return 0;
                if (En(n)) return _4(n) ? k8(n) : n.length;
                var b = Bn(n);
                return b == D0 || b == F0 ? n.size : Z1(n).length;
              }
              function Fo(n, b, e) {
                var c = w0(n) ? o1 : gc;
                return e && pn(n, b, e) && (b = m), c(n, f0(b, 3));
              }
              var So = R0(function (n, b) {
                  if (n == null) return [];
                  var e = b.length;
                  return (
                    e > 1 && pn(n, b[0], b[1])
                      ? (b = [])
                      : e > 2 && pn(b[0], b[1], b[2]) && (b = [b[0]]),
                    Db(n, zn(b, 1), [])
                  );
                }),
                q4 =
                  _3 ||
                  function () {
                    return Zn.Date.now();
                  };
              function fo(n, b) {
                if (typeof b != "function") throw new n2(f);
                return (
                  (n = C0(n)),
                  function () {
                    if (--n < 1) return b.apply(this, arguments);
                  }
                );
              }
              function G6(n, b, e) {
                return (
                  (b = e ? m : b),
                  (b = n && b == null ? n.length : b),
                  z2(n, o0, m, m, m, m, b)
                );
              }
              function H6(n, b) {
                var e;
                if (typeof b != "function") throw new n2(f);
                return (
                  (n = C0(n)),
                  function () {
                    return (
                      --n > 0 && (e = b.apply(this, arguments)),
                      n <= 1 && (b = m),
                      e
                    );
                  }
                );
              }
              var X1 = R0(function (n, b, e) {
                  var c = j;
                  if (e.length) {
                    var A = Y2(e, B8(X1));
                    c |= O;
                  }
                  return z2(n, c, b, e, A);
                }),
                O6 = R0(function (n, b, e) {
                  var c = j | b0;
                  if (e.length) {
                    var A = Y2(e, B8(O6));
                    c |= O;
                  }
                  return z2(b, c, n, e, A);
                });
              function W6(n, b, e) {
                b = e ? m : b;
                var c = z2(n, h0, m, m, m, m, m, b);
                return (c.placeholder = W6.placeholder), c;
              }
              function y6(n, b, e) {
                b = e ? m : b;
                var c = z2(n, W, m, m, m, m, m, b);
                return (c.placeholder = y6.placeholder), c;
              }
              function X6(n, b, e) {
                var c,
                  A,
                  h,
                  L,
                  J,
                  Y,
                  U = 0,
                  T = !1,
                  n0 = !1,
                  I0 = !0;
                if (typeof n != "function") throw new n2(f);
                (b = o2(b) || 0),
                  on(e) &&
                    ((T = !!e.leading),
                    (n0 = "maxWait" in e),
                    (h = n0 ? ln(o2(e.maxWait) || 0, b) : h),
                    (I0 = "trailing" in e ? !!e.trailing : I0));
                function l0(An) {
                  var i2 = c,
                    B2 = A;
                  return (c = A = m), (U = An), (L = n.apply(B2, i2)), L;
                }
                function k0(An) {
                  return (U = An), (J = r4(Y0, b)), T ? l0(An) : L;
                }
                function s0(An) {
                  var i2 = An - Y,
                    B2 = An - U,
                    i3 = b - i2;
                  return n0 ? wn(i3, h - B2) : i3;
                }
                function L0(An) {
                  var i2 = An - Y,
                    B2 = An - U;
                  return Y === m || i2 >= b || i2 < 0 || (n0 && B2 >= h);
                }
                function Y0() {
                  var An = q4();
                  if (L0(An)) return d0(An);
                  J = r4(Y0, s0(An));
                }
                function d0(An) {
                  return (J = m), I0 && c ? l0(An) : ((c = A = m), L);
                }
                function qn() {
                  J !== m && c6(J), (U = 0), (c = Y = A = J = m);
                }
                function jn() {
                  return J === m ? L : d0(q4());
                }
                function Un() {
                  var An = q4(),
                    i2 = L0(An);
                  if (((c = arguments), (A = this), (Y = An), i2)) {
                    if (J === m) return k0(Y);
                    if (n0) return c6(J), (J = r4(Y0, b)), l0(Y);
                  }
                  return J === m && (J = r4(Y0, b)), L;
                }
                return (Un.cancel = qn), (Un.flush = jn), Un;
              }
              var ko = R0(function (n, b) {
                  return pb(n, 1, b);
                }),
                Lo = R0(function (n, b, e) {
                  return pb(n, o2(b) || 0, e);
                });
              function Zo(n) {
                return z2(n, y);
              }
              function U4(n, b) {
                if (
                  typeof n != "function" ||
                  (b != null && typeof b != "function")
                )
                  throw new n2(f);
                var e = function () {
                  var c = arguments,
                    A = b ? b.apply(this, c) : c[0],
                    h = e.cache;
                  if (h.has(A)) return h.get(A);
                  var L = n.apply(this, c);
                  return (e.cache = h.set(A, L) || h), L;
                };
                return (e.cache = new (U4.Cache || L2)()), e;
              }
              U4.Cache = L2;
              function T4(n) {
                if (typeof n != "function") throw new n2(f);
                return function () {
                  var b = arguments;
                  switch (b.length) {
                    case 0:
                      return !n.call(this);
                    case 1:
                      return !n.call(this, b[0]);
                    case 2:
                      return !n.call(this, b[0], b[1]);
                    case 3:
                      return !n.call(this, b[0], b[1], b[2]);
                  }
                  return !n.apply(this, b);
                };
              }
              function zo(n) {
                return H6(2, n);
              }
              var No = Ic(function (n, b) {
                  b =
                    b.length == 1 && w0(b[0])
                      ? cn(b[0], yn(f0()))
                      : cn(zn(b, 1), yn(f0()));
                  var e = b.length;
                  return R0(function (c) {
                    for (var A = -1, h = wn(c.length, e); ++A < h; )
                      c[A] = b[A].call(this, c[A]);
                    return Wn(n, this, c);
                  });
                }),
                D1 = R0(function (n, b) {
                  var e = Y2(b, B8(D1));
                  return z2(n, O, m, b, e);
                }),
                D6 = R0(function (n, b) {
                  var e = Y2(b, B8(D6));
                  return z2(n, $, m, b, e);
                }),
                vo = N2(function (n, b) {
                  return z2(n, A0, m, m, m, b);
                });
              function Jo(n, b) {
                if (typeof n != "function") throw new n2(f);
                return (b = b === m ? b : C0(b)), R0(n, b);
              }
              function wo(n, b) {
                if (typeof n != "function") throw new n2(f);
                return (
                  (b = b == null ? 0 : ln(C0(b), 0)),
                  R0(function (e) {
                    var c = e[b],
                      A = K2(e, 0, b);
                    return c && R2(A, c), Wn(n, this, A);
                  })
                );
              }
              function Bo(n, b, e) {
                var c = !0,
                  A = !0;
                if (typeof n != "function") throw new n2(f);
                return (
                  on(e) &&
                    ((c = "leading" in e ? !!e.leading : c),
                    (A = "trailing" in e ? !!e.trailing : A)),
                  X6(n, b, { leading: c, maxWait: b, trailing: A })
                );
              }
              function Co(n) {
                return G6(n, 1);
              }
              function so(n, b) {
                return D1(u1(b), n);
              }
              function uo() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return w0(n) ? n : [n];
              }
              function Ro(n) {
                return e2(n, k);
              }
              function Yo(n, b) {
                return (b = typeof b == "function" ? b : m), e2(n, k, b);
              }
              function Vo(n) {
                return e2(n, d | k);
              }
              function po(n, b) {
                return (b = typeof b == "function" ? b : m), e2(n, d | k, b);
              }
              function jo(n, b) {
                return b == null || Vb(n, b, kn(b));
              }
              function I2(n, b) {
                return n === b || (n !== n && b !== b);
              }
              var Ko = H4(f1),
                Eo = H4(function (n, b) {
                  return n >= b;
                }),
                e8 = Pb(
                  (function () {
                    return arguments;
                  })()
                )
                  ? Pb
                  : function (n) {
                      return (
                        tn(n) && X0.call(n, "callee") && !Jb.call(n, "callee")
                      );
                    },
                w0 = P.isArray,
                Po = Ab ? yn(Ab) : De;
              function En(n) {
                return n != null && $4(n.length) && !J2(n);
              }
              function mn(n) {
                return tn(n) && En(n);
              }
              function Go(n) {
                return n === !0 || n === !1 || (tn(n) && Vn(n) == xn);
              }
              var E2 = be || ob,
                Ho = ab ? yn(ab) : qe;
              function Oo(n) {
                return tn(n) && n.nodeType === 1 && !l4(n);
              }
              function Wo(n) {
                if (n == null) return !0;
                if (
                  En(n) &&
                  (w0(n) ||
                    typeof n == "string" ||
                    typeof n.splice == "function" ||
                    E2(n) ||
                    C8(n) ||
                    e8(n))
                )
                  return !n.length;
                var b = Bn(n);
                if (b == D0 || b == F0) return !n.size;
                if (h4(n)) return !Z1(n).length;
                for (var e in n) if (X0.call(n, e)) return !1;
                return !0;
              }
              function yo(n, b) {
                return g4(n, b);
              }
              function Xo(n, b, e) {
                e = typeof e == "function" ? e : m;
                var c = e ? e(n, b) : m;
                return c === m ? g4(n, b, m, e) : !!c;
              }
              function q1(n) {
                if (!tn(n)) return !1;
                var b = Vn(n);
                return (
                  b == Jn ||
                  b == vn ||
                  (typeof n.message == "string" &&
                    typeof n.name == "string" &&
                    !l4(n))
                );
              }
              function Do(n) {
                return typeof n == "number" && Bb(n);
              }
              function J2(n) {
                if (!on(n)) return !1;
                var b = Vn(n);
                return b == an || b == Ln || b == Mn || b == x0;
              }
              function q6(n) {
                return typeof n == "number" && n == C0(n);
              }
              function $4(n) {
                return typeof n == "number" && n > -1 && n % 1 == 0 && n <= y0;
              }
              function on(n) {
                var b = typeof n;
                return n != null && (b == "object" || b == "function");
              }
              function tn(n) {
                return n != null && typeof n == "object";
              }
              var U6 = gb ? yn(gb) : Te;
              function qo(n, b) {
                return n === b || L1(n, b, K1(b));
              }
              function Uo(n, b, e) {
                return (e = typeof e == "function" ? e : m), L1(n, b, K1(b), e);
              }
              function To(n) {
                return T6(n) && n != +n;
              }
              function $o(n) {
                if (Yc(n)) throw new J0(g);
                return Gb(n);
              }
              function _o(n) {
                return n === null;
              }
              function nt(n) {
                return n == null;
              }
              function T6(n) {
                return typeof n == "number" || (tn(n) && Vn(n) == sn);
              }
              function l4(n) {
                if (!tn(n) || Vn(n) != V) return !1;
                var b = N4(n);
                if (b === null) return !0;
                var e = X0.call(b, "constructor") && b.constructor;
                return (
                  typeof e == "function" && e instanceof e && k4.call(e) == q3
                );
              }
              var U1 = Ib ? yn(Ib) : $e;
              function bt(n) {
                return q6(n) && n >= -9007199254740991 && n <= y0;
              }
              var $6 = ib ? yn(ib) : _e;
              function _4(n) {
                return typeof n == "string" || (!w0(n) && tn(n) && Vn(n) == u0);
              }
              function Dn(n) {
                return typeof n == "symbol" || (tn(n) && Vn(n) == Fn);
              }
              var C8 = hb ? yn(hb) : nc;
              function et(n) {
                return n === m;
              }
              function ct(n) {
                return tn(n) && Bn(n) == hn;
              }
              function xt(n) {
                return tn(n) && Vn(n) == t2;
              }
              var ot = H4(z1),
                tt = H4(function (n, b) {
                  return n <= b;
                });
              function _6(n) {
                if (!n) return [];
                if (En(n)) return _4(n) ? a2(n) : Kn(n);
                if (e4 && n[e4]) return j3(n[e4]());
                var b = Bn(n),
                  e = b == D0 ? I1 : b == F0 ? F4 : s8;
                return e(n);
              }
              function w2(n) {
                if (!n) return n === 0 ? n : 0;
                if (((n = o2(n)), n === T0 || n === -1 / 0)) {
                  var b = n < 0 ? -1 : 1;
                  return b * Cn;
                }
                return n === n ? n : 0;
              }
              function C0(n) {
                var b = w2(n),
                  e = b % 1;
                return b === b ? (e ? b - e : b) : 0;
              }
              function n3(n) {
                return n ? $2(C0(n), 0, z0) : 0;
              }
              function o2(n) {
                if (typeof n == "number") return n;
                if (Dn(n)) return v0;
                if (on(n)) {
                  var b = typeof n.valueOf == "function" ? n.valueOf() : n;
                  n = on(b) ? b + "" : b;
                }
                if (typeof n != "string") return n === 0 ? n : +n;
                n = Sb(n);
                var e = y8.test(n);
                return e || D8.test(n)
                  ? f3(n.slice(2), e ? 2 : 8)
                  : a8.test(n)
                  ? v0
                  : +n;
              }
              function b3(n) {
                return M2(n, Pn(n));
              }
              function mt(n) {
                return n ? $2(C0(n), -9007199254740991, y0) : n === 0 ? n : 0;
              }
              function W0(n) {
                return n == null ? "" : Xn(n);
              }
              var At = J8(function (n, b) {
                  if (h4(b) || En(b)) {
                    M2(b, kn(b), n);
                    return;
                  }
                  for (var e in b) X0.call(b, e) && m4(n, e, b[e]);
                }),
                e3 = J8(function (n, b) {
                  M2(b, Pn(b), n);
                }),
                n1 = J8(function (n, b, e, c) {
                  M2(b, Pn(b), n, c);
                }),
                at = J8(function (n, b, e, c) {
                  M2(b, kn(b), n, c);
                }),
                gt = N2(M1);
              function It(n, b) {
                var e = v8(n);
                return b == null ? e : Yb(e, b);
              }
              var it = R0(function (n, b) {
                  n = U0(n);
                  var e = -1,
                    c = b.length,
                    A = c > 2 ? b[2] : m;
                  for (A && pn(b[0], b[1], A) && (c = 1); ++e < c; )
                    for (
                      var h = b[e], L = Pn(h), J = -1, Y = L.length;
                      ++J < Y;

                    ) {
                      var U = L[J],
                        T = n[U];
                      (T === m || (I2(T, Z8[U]) && !X0.call(n, U))) &&
                        (n[U] = h[U]);
                    }
                  return n;
                }),
                ht = R0(function (n) {
                  return n.push(m, S6), Wn(c3, m, n);
                });
              function rt(n, b) {
                return lb(n, f0(b, 3), Q2);
              }
              function lt(n, b) {
                return lb(n, f0(b, 3), S1);
              }
              function Qt(n, b) {
                return n == null ? n : F1(n, f0(b, 3), Pn);
              }
              function Mt(n, b) {
                return n == null ? n : Kb(n, f0(b, 3), Pn);
              }
              function Ft(n, b) {
                return n && Q2(n, f0(b, 3));
              }
              function St(n, b) {
                return n && S1(n, f0(b, 3));
              }
              function ft(n) {
                return n == null ? [] : V4(n, kn(n));
              }
              function kt(n) {
                return n == null ? [] : V4(n, Pn(n));
              }
              function T1(n, b, e) {
                var c = n == null ? m : _2(n, b);
                return c === m ? e : c;
              }
              function Lt(n, b) {
                return n != null && L6(n, b, Oe);
              }
              function $1(n, b) {
                return n != null && L6(n, b, We);
              }
              var Zt = r6(function (n, b, e) {
                  b != null &&
                    typeof b.toString != "function" &&
                    (b = L4.call(b)),
                    (n[b] = e);
                }, nb(Gn)),
                zt = r6(function (n, b, e) {
                  b != null &&
                    typeof b.toString != "function" &&
                    (b = L4.call(b)),
                    X0.call(n, b) ? n[b].push(e) : (n[b] = [e]);
                }, f0),
                Nt = R0(a4);
              function kn(n) {
                return En(n) ? ub(n) : Z1(n);
              }
              function Pn(n) {
                return En(n) ? ub(n, !0) : bc(n);
              }
              function vt(n, b) {
                var e = {};
                return (
                  (b = f0(b, 3)),
                  Q2(n, function (c, A, h) {
                    Z2(e, b(c, A, h), c);
                  }),
                  e
                );
              }
              function Jt(n, b) {
                var e = {};
                return (
                  (b = f0(b, 3)),
                  Q2(n, function (c, A, h) {
                    Z2(e, A, b(c, A, h));
                  }),
                  e
                );
              }
              var wt = J8(function (n, b, e) {
                  p4(n, b, e);
                }),
                c3 = J8(function (n, b, e, c) {
                  p4(n, b, e, c);
                }),
                Bt = N2(function (n, b) {
                  var e = {};
                  if (n == null) return e;
                  var c = !1;
                  (b = cn(b, function (h) {
                    return (h = d2(h, n)), c || (c = h.length > 1), h;
                  })),
                    M2(n, j1(n), e),
                    c && (e = e2(e, d | B | k, Lc));
                  for (var A = b.length; A--; ) B1(e, b[A]);
                  return e;
                });
              function Ct(n, b) {
                return x3(n, T4(f0(b)));
              }
              var st = N2(function (n, b) {
                return n == null ? {} : cc(n, b);
              });
              function x3(n, b) {
                if (n == null) return {};
                var e = cn(j1(n), function (c) {
                  return [c];
                });
                return (
                  (b = f0(b)),
                  qb(n, e, function (c, A) {
                    return b(c, A[0]);
                  })
                );
              }
              function ut(n, b, e) {
                b = d2(b, n);
                var c = -1,
                  A = b.length;
                for (A || ((A = 1), (n = m)); ++c < A; ) {
                  var h = n == null ? m : n[F2(b[c])];
                  h === m && ((c = A), (h = e)), (n = J2(h) ? h.call(n) : h);
                }
                return n;
              }
              function Rt(n, b, e) {
                return n == null ? n : I4(n, b, e);
              }
              function Yt(n, b, e, c) {
                return (
                  (c = typeof c == "function" ? c : m),
                  n == null ? n : I4(n, b, e, c)
                );
              }
              var o3 = M6(kn),
                t3 = M6(Pn);
              function Vt(n, b, e) {
                var c = w0(n),
                  A = c || E2(n) || C8(n);
                if (((b = f0(b, 4)), e == null)) {
                  var h = n && n.constructor;
                  A
                    ? (e = c ? new h() : [])
                    : on(n)
                    ? (e = J2(h) ? v8(N4(n)) : {})
                    : (e = {});
                }
                return (
                  (A ? _n : Q2)(n, function (L, J, Y) {
                    return b(e, L, J, Y);
                  }),
                  e
                );
              }
              function pt(n, b) {
                return n == null ? !0 : B1(n, b);
              }
              function jt(n, b, e) {
                return n == null ? n : n6(n, b, u1(e));
              }
              function dt(n, b, e, c) {
                return (
                  (c = typeof c == "function" ? c : m),
                  n == null ? n : n6(n, b, u1(e), c)
                );
              }
              function s8(n) {
                return n == null ? [] : g1(n, kn(n));
              }
              function Kt(n) {
                return n == null ? [] : g1(n, Pn(n));
              }
              function Et(n, b, e) {
                return (
                  e === m && ((e = b), (b = m)),
                  e !== m && ((e = o2(e)), (e = e === e ? e : 0)),
                  b !== m && ((b = o2(b)), (b = b === b ? b : 0)),
                  $2(o2(n), b, e)
                );
              }
              function Pt(n, b, e) {
                return (
                  (b = w2(b)),
                  e === m ? ((e = b), (b = 0)) : (e = w2(e)),
                  (n = o2(n)),
                  ye(n, b, e)
                );
              }
              function Gt(n, b, e) {
                if (
                  (e && typeof e != "boolean" && pn(n, b, e) && (b = e = m),
                  e === m &&
                    (typeof b == "boolean"
                      ? ((e = b), (b = m))
                      : typeof n == "boolean" && ((e = n), (n = m))),
                  n === m && b === m
                    ? ((n = 0), (b = 1))
                    : ((n = w2(n)), b === m ? ((b = n), (n = 0)) : (b = w2(b))),
                  n > b)
                ) {
                  var c = n;
                  (n = b), (b = c);
                }
                if (e || n % 1 || b % 1) {
                  var A = Cb();
                  return wn(
                    n + A * (b - n + S3("1e-" + ((A + "").length - 1))),
                    b
                  );
                }
                return v1(n, b);
              }
              var Ht = w8(function (n, b, e) {
                return (b = b.toLowerCase()), n + (e ? m3(b) : b);
              });
              function m3(n) {
                return _1(W0(n).toLowerCase());
              }
              function A3(n) {
                return (n = W0(n)), n && n.replace(g8, u3).replace(On, "");
              }
              function Ot(n, b, e) {
                (n = W0(n)), (b = Xn(b));
                var c = n.length;
                e = e === m ? c : $2(C0(e), 0, c);
                var A = e;
                return (e -= b.length), e >= 0 && n.slice(e, A) == b;
              }
              function Wt(n) {
                return (n = W0(n)), n && V8.test(n) ? n.replace(x8, R3) : n;
              }
              function yt(n) {
                return (n = W0(n)), n && K8.test(n) ? n.replace(G2, "\\$&") : n;
              }
              var Xt = w8(function (n, b, e) {
                  return n + (e ? "-" : "") + b.toLowerCase();
                }),
                Dt = w8(function (n, b, e) {
                  return n + (e ? " " : "") + b.toLowerCase();
                }),
                qt = I6("toLowerCase");
              function Ut(n, b, e) {
                (n = W0(n)), (b = C0(b));
                var c = b ? k8(n) : 0;
                if (!b || c >= b) return n;
                var A = (b - c) / 2;
                return G4(B4(A), e) + n + G4(w4(A), e);
              }
              function Tt(n, b, e) {
                (n = W0(n)), (b = C0(b));
                var c = b ? k8(n) : 0;
                return b && c < b ? n + G4(b - c, e) : n;
              }
              function $t(n, b, e) {
                (n = W0(n)), (b = C0(b));
                var c = b ? k8(n) : 0;
                return b && c < b ? G4(b - c, e) + n : n;
              }
              function _t(n, b, e) {
                return (
                  e || b == null ? (b = 0) : b && (b = +b),
                  oe(W0(n).replace(H2, ""), b || 0)
                );
              }
              function nm(n, b, e) {
                return (
                  (e ? pn(n, b, e) : b === m) ? (b = 1) : (b = C0(b)),
                  J1(W0(n), b)
                );
              }
              function bm() {
                var n = arguments,
                  b = W0(n[0]);
                return n.length < 3 ? b : b.replace(n[1], n[2]);
              }
              var em = w8(function (n, b, e) {
                return n + (e ? "_" : "") + b.toLowerCase();
              });
              function cm(n, b, e) {
                return (
                  e && typeof e != "number" && pn(n, b, e) && (b = e = m),
                  (e = e === m ? z0 : e >>> 0),
                  e
                    ? ((n = W0(n)),
                      n &&
                      (typeof b == "string" || (b != null && !U1(b))) &&
                      ((b = Xn(b)), !b && f8(n))
                        ? K2(a2(n), 0, e)
                        : n.split(b, e))
                    : []
                );
              }
              var xm = w8(function (n, b, e) {
                return n + (e ? " " : "") + _1(b);
              });
              function om(n, b, e) {
                return (
                  (n = W0(n)),
                  (e = e == null ? 0 : $2(C0(e), 0, n.length)),
                  (b = Xn(b)),
                  n.slice(e, e + b.length) == b
                );
              }
              function tm(n, b, e) {
                var c = i.templateSettings;
                e && pn(n, b, e) && (b = m),
                  (n = W0(n)),
                  (b = n1({}, b, c, F6));
                var A = n1({}, b.imports, c.imports, F6),
                  h = kn(A),
                  L = g1(A, h),
                  J,
                  Y,
                  U = 0,
                  T = b.interpolate || dn,
                  n0 = "__p += '",
                  I0 = i1(
                    (b.escape || dn).source +
                      "|" +
                      T.source +
                      "|" +
                      (T === t8 ? W8 : dn).source +
                      "|" +
                      (b.evaluate || dn).source +
                      "|$",
                    "g"
                  ),
                  l0 =
                    "//# sourceURL=" +
                    (X0.call(b, "sourceURL")
                      ? (b.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++r3 + "]") +
                    `
`;
                n.replace(I0, function (L0, Y0, d0, qn, jn, Un) {
                  return (
                    d0 || (d0 = qn),
                    (n0 += n.slice(U, Un).replace(U8, Y3)),
                    Y0 &&
                      ((J = !0),
                      (n0 +=
                        `' +
__e(` +
                        Y0 +
                        `) +
'`)),
                    jn &&
                      ((Y = !0),
                      (n0 +=
                        `';
` +
                        jn +
                        `;
__p += '`)),
                    d0 &&
                      (n0 +=
                        `' +
((__t = (` +
                        d0 +
                        `)) == null ? '' : __t) +
'`),
                    (U = Un + L0.length),
                    L0
                  );
                }),
                  (n0 += `';
`);
                var k0 = X0.call(b, "variable") && b.variable;
                if (!k0)
                  n0 =
                    `with (obj) {
` +
                    n0 +
                    `
}
`;
                else if (H8.test(k0)) throw new J0(F);
                (n0 = (Y ? n0.replace(K0, "") : n0)
                  .replace(u8, "$1")
                  .replace(R8, "$1;")),
                  (n0 =
                    "function(" +
                    (k0 || "obj") +
                    `) {
` +
                    (k0
                      ? ""
                      : `obj || (obj = {});
`) +
                    "var __t, __p = ''" +
                    (J ? ", __e = _.escape" : "") +
                    (Y
                      ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                      : `;
`) +
                    n0 +
                    `return __p
}`);
                var s0 = g3(function () {
                  return O0(h, l0 + "return " + n0).apply(m, L);
                });
                if (((s0.source = n0), q1(s0))) throw s0;
                return s0;
              }
              function mm(n) {
                return W0(n).toLowerCase();
              }
              function Am(n) {
                return W0(n).toUpperCase();
              }
              function am(n, b, e) {
                if (((n = W0(n)), n && (e || b === m))) return Sb(n);
                if (!n || !(b = Xn(b))) return n;
                var c = a2(n),
                  A = a2(b),
                  h = fb(c, A),
                  L = kb(c, A) + 1;
                return K2(c, h, L).join("");
              }
              function gm(n, b, e) {
                if (((n = W0(n)), n && (e || b === m)))
                  return n.slice(0, Zb(n) + 1);
                if (!n || !(b = Xn(b))) return n;
                var c = a2(n),
                  A = kb(c, a2(b)) + 1;
                return K2(c, 0, A).join("");
              }
              function Im(n, b, e) {
                if (((n = W0(n)), n && (e || b === m)))
                  return n.replace(H2, "");
                if (!n || !(b = Xn(b))) return n;
                var c = a2(n),
                  A = fb(c, a2(b));
                return K2(c, A).join("");
              }
              function im(n, b) {
                var e = N,
                  c = G;
                if (on(b)) {
                  var A = "separator" in b ? b.separator : A;
                  (e = "length" in b ? C0(b.length) : e),
                    (c = "omission" in b ? Xn(b.omission) : c);
                }
                n = W0(n);
                var h = n.length;
                if (f8(n)) {
                  var L = a2(n);
                  h = L.length;
                }
                if (e >= h) return n;
                var J = e - k8(c);
                if (J < 1) return c;
                var Y = L ? K2(L, 0, J).join("") : n.slice(0, J);
                if (A === m) return Y + c;
                if ((L && (J += Y.length - J), U1(A))) {
                  if (n.slice(J).search(A)) {
                    var U,
                      T = Y;
                    for (
                      A.global || (A = i1(A.source, W0(m2.exec(A)) + "g")),
                        A.lastIndex = 0;
                      (U = A.exec(T));

                    )
                      var n0 = U.index;
                    Y = Y.slice(0, n0 === m ? J : n0);
                  }
                } else if (n.indexOf(Xn(A), J) != J) {
                  var I0 = Y.lastIndexOf(A);
                  I0 > -1 && (Y = Y.slice(0, I0));
                }
                return Y + c;
              }
              function hm(n) {
                return (n = W0(n)), n && Y8.test(n) ? n.replace(c8, P3) : n;
              }
              var rm = w8(function (n, b, e) {
                  return n + (e ? " " : "") + b.toUpperCase();
                }),
                _1 = I6("toUpperCase");
              function a3(n, b, e) {
                return (
                  (n = W0(n)),
                  (b = e ? m : b),
                  b === m ? (p3(n) ? O3(n) : J3(n)) : n.match(b) || []
                );
              }
              var g3 = R0(function (n, b) {
                  try {
                    return Wn(n, m, b);
                  } catch (e) {
                    return q1(e) ? e : new J0(e);
                  }
                }),
                lm = N2(function (n, b) {
                  return (
                    _n(b, function (e) {
                      (e = F2(e)), Z2(n, e, X1(n[e], n));
                    }),
                    n
                  );
                });
              function Qm(n) {
                var b = n == null ? 0 : n.length,
                  e = f0();
                return (
                  (n = b
                    ? cn(n, function (c) {
                        if (typeof c[1] != "function") throw new n2(f);
                        return [e(c[0]), c[1]];
                      })
                    : []),
                  R0(function (c) {
                    for (var A = -1; ++A < b; ) {
                      var h = n[A];
                      if (Wn(h[0], this, c)) return Wn(h[1], this, c);
                    }
                  })
                );
              }
              function Mm(n) {
                return Pe(e2(n, d));
              }
              function nb(n) {
                return function () {
                  return n;
                };
              }
              function Fm(n, b) {
                return n == null || n !== n ? b : n;
              }
              var Sm = h6(),
                fm = h6(!0);
              function Gn(n) {
                return n;
              }
              function bb(n) {
                return Hb(typeof n == "function" ? n : e2(n, d));
              }
              function km(n) {
                return Wb(e2(n, d));
              }
              function Lm(n, b) {
                return yb(n, e2(b, d));
              }
              var Zm = R0(function (n, b) {
                  return function (e) {
                    return a4(e, n, b);
                  };
                }),
                zm = R0(function (n, b) {
                  return function (e) {
                    return a4(n, e, b);
                  };
                });
              function eb(n, b, e) {
                var c = kn(b),
                  A = V4(b, c);
                e == null &&
                  !(on(b) && (A.length || !c.length)) &&
                  ((e = b), (b = n), (n = this), (A = V4(b, kn(b))));
                var h = !(on(e) && "chain" in e) || !!e.chain,
                  L = J2(n);
                return (
                  _n(A, function (J) {
                    var Y = b[J];
                    (n[J] = Y),
                      L &&
                        (n.prototype[J] = function () {
                          var U = this.__chain__;
                          if (h || U) {
                            var T = n(this.__wrapped__),
                              n0 = (T.__actions__ = Kn(this.__actions__));
                            return (
                              n0.push({ func: Y, args: arguments, thisArg: n }),
                              (T.__chain__ = U),
                              T
                            );
                          }
                          return Y.apply(n, R2([this.value()], arguments));
                        });
                  }),
                  n
                );
              }
              function Nm() {
                return Zn._ === this && (Zn._ = U3), this;
              }
              function cb() {}
              function vm(n) {
                return (
                  (n = C0(n)),
                  R0(function (b) {
                    return Xb(b, n);
                  })
                );
              }
              var Jm = Y1(cn),
                wm = Y1(rb),
                Bm = Y1(o1);
              function I3(n) {
                return P1(n) ? t1(F2(n)) : xc(n);
              }
              function Cm(n) {
                return function (b) {
                  return n == null ? m : _2(n, b);
                };
              }
              var sm = l6(),
                um = l6(!0);
              function xb() {
                return [];
              }
              function ob() {
                return !1;
              }
              function Rm() {
                return {};
              }
              function Ym() {
                return "";
              }
              function Vm() {
                return !0;
              }
              function pm(n, b) {
                if (((n = C0(n)), n < 1 || n > y0)) return [];
                var e = z0,
                  c = wn(n, z0);
                (b = f0(b)), (n -= z0);
                for (var A = a1(c, b); ++e < n; ) b(e);
                return A;
              }
              function jm(n) {
                return w0(n) ? cn(n, F2) : Dn(n) ? [n] : Kn(s6(W0(n)));
              }
              function dm(n) {
                var b = ++D3;
                return W0(n) + b;
              }
              var Km = P4(function (n, b) {
                  return n + b;
                }, 0),
                Em = V1("ceil"),
                Pm = P4(function (n, b) {
                  return n / b;
                }, 1),
                Gm = V1("floor");
              function Hm(n) {
                return n && n.length ? Y4(n, Gn, f1) : m;
              }
              function Om(n, b) {
                return n && n.length ? Y4(n, f0(b, 2), f1) : m;
              }
              function Wm(n) {
                return Mb(n, Gn);
              }
              function ym(n, b) {
                return Mb(n, f0(b, 2));
              }
              function Xm(n) {
                return n && n.length ? Y4(n, Gn, z1) : m;
              }
              function Dm(n, b) {
                return n && n.length ? Y4(n, f0(b, 2), z1) : m;
              }
              var qm = P4(function (n, b) {
                  return n * b;
                }, 1),
                Um = V1("round"),
                Tm = P4(function (n, b) {
                  return n - b;
                }, 0);
              function $m(n) {
                return n && n.length ? A1(n, Gn) : 0;
              }
              function _m(n, b) {
                return n && n.length ? A1(n, f0(b, 2)) : 0;
              }
              return (
                (i.after = fo),
                (i.ary = G6),
                (i.assign = At),
                (i.assignIn = e3),
                (i.assignInWith = n1),
                (i.assignWith = at),
                (i.at = gt),
                (i.before = H6),
                (i.bind = X1),
                (i.bindAll = lm),
                (i.bindKey = O6),
                (i.castArray = uo),
                (i.chain = K6),
                (i.chunk = Pc),
                (i.compact = Gc),
                (i.concat = Hc),
                (i.cond = Qm),
                (i.conforms = Mm),
                (i.constant = nb),
                (i.countBy = Tx),
                (i.create = It),
                (i.curry = W6),
                (i.curryRight = y6),
                (i.debounce = X6),
                (i.defaults = it),
                (i.defaultsDeep = ht),
                (i.defer = ko),
                (i.delay = Lo),
                (i.difference = Oc),
                (i.differenceBy = Wc),
                (i.differenceWith = yc),
                (i.drop = Xc),
                (i.dropRight = Dc),
                (i.dropRightWhile = qc),
                (i.dropWhile = Uc),
                (i.fill = Tc),
                (i.filter = _x),
                (i.flatMap = eo),
                (i.flatMapDeep = co),
                (i.flatMapDepth = xo),
                (i.flatten = V6),
                (i.flattenDeep = $c),
                (i.flattenDepth = _c),
                (i.flip = Zo),
                (i.flow = Sm),
                (i.flowRight = fm),
                (i.fromPairs = nx),
                (i.functions = ft),
                (i.functionsIn = kt),
                (i.groupBy = oo),
                (i.initial = ex),
                (i.intersection = cx),
                (i.intersectionBy = xx),
                (i.intersectionWith = ox),
                (i.invert = Zt),
                (i.invertBy = zt),
                (i.invokeMap = mo),
                (i.iteratee = bb),
                (i.keyBy = Ao),
                (i.keys = kn),
                (i.keysIn = Pn),
                (i.map = D4),
                (i.mapKeys = vt),
                (i.mapValues = Jt),
                (i.matches = km),
                (i.matchesProperty = Lm),
                (i.memoize = U4),
                (i.merge = wt),
                (i.mergeWith = c3),
                (i.method = Zm),
                (i.methodOf = zm),
                (i.mixin = eb),
                (i.negate = T4),
                (i.nthArg = vm),
                (i.omit = Bt),
                (i.omitBy = Ct),
                (i.once = zo),
                (i.orderBy = ao),
                (i.over = Jm),
                (i.overArgs = No),
                (i.overEvery = wm),
                (i.overSome = Bm),
                (i.partial = D1),
                (i.partialRight = D6),
                (i.partition = go),
                (i.pick = st),
                (i.pickBy = x3),
                (i.property = I3),
                (i.propertyOf = Cm),
                (i.pull = ax),
                (i.pullAll = j6),
                (i.pullAllBy = gx),
                (i.pullAllWith = Ix),
                (i.pullAt = ix),
                (i.range = sm),
                (i.rangeRight = um),
                (i.rearg = vo),
                (i.reject = ho),
                (i.remove = hx),
                (i.rest = Jo),
                (i.reverse = W1),
                (i.sampleSize = lo),
                (i.set = Rt),
                (i.setWith = Yt),
                (i.shuffle = Qo),
                (i.slice = rx),
                (i.sortBy = So),
                (i.sortedUniq = kx),
                (i.sortedUniqBy = Lx),
                (i.split = cm),
                (i.spread = wo),
                (i.tail = Zx),
                (i.take = zx),
                (i.takeRight = Nx),
                (i.takeRightWhile = vx),
                (i.takeWhile = Jx),
                (i.tap = Gx),
                (i.throttle = Bo),
                (i.thru = X4),
                (i.toArray = _6),
                (i.toPairs = o3),
                (i.toPairsIn = t3),
                (i.toPath = jm),
                (i.toPlainObject = b3),
                (i.transform = Vt),
                (i.unary = Co),
                (i.union = wx),
                (i.unionBy = Bx),
                (i.unionWith = Cx),
                (i.uniq = sx),
                (i.uniqBy = ux),
                (i.uniqWith = Rx),
                (i.unset = pt),
                (i.unzip = y1),
                (i.unzipWith = d6),
                (i.update = jt),
                (i.updateWith = dt),
                (i.values = s8),
                (i.valuesIn = Kt),
                (i.without = Yx),
                (i.words = a3),
                (i.wrap = so),
                (i.xor = Vx),
                (i.xorBy = px),
                (i.xorWith = jx),
                (i.zip = dx),
                (i.zipObject = Kx),
                (i.zipObjectDeep = Ex),
                (i.zipWith = Px),
                (i.entries = o3),
                (i.entriesIn = t3),
                (i.extend = e3),
                (i.extendWith = n1),
                eb(i, i),
                (i.add = Km),
                (i.attempt = g3),
                (i.camelCase = Ht),
                (i.capitalize = m3),
                (i.ceil = Em),
                (i.clamp = Et),
                (i.clone = Ro),
                (i.cloneDeep = Vo),
                (i.cloneDeepWith = po),
                (i.cloneWith = Yo),
                (i.conformsTo = jo),
                (i.deburr = A3),
                (i.defaultTo = Fm),
                (i.divide = Pm),
                (i.endsWith = Ot),
                (i.eq = I2),
                (i.escape = Wt),
                (i.escapeRegExp = yt),
                (i.every = $x),
                (i.find = no),
                (i.findIndex = R6),
                (i.findKey = rt),
                (i.findLast = bo),
                (i.findLastIndex = Y6),
                (i.findLastKey = lt),
                (i.floor = Gm),
                (i.forEach = E6),
                (i.forEachRight = P6),
                (i.forIn = Qt),
                (i.forInRight = Mt),
                (i.forOwn = Ft),
                (i.forOwnRight = St),
                (i.get = T1),
                (i.gt = Ko),
                (i.gte = Eo),
                (i.has = Lt),
                (i.hasIn = $1),
                (i.head = p6),
                (i.identity = Gn),
                (i.includes = to),
                (i.indexOf = bx),
                (i.inRange = Pt),
                (i.invoke = Nt),
                (i.isArguments = e8),
                (i.isArray = w0),
                (i.isArrayBuffer = Po),
                (i.isArrayLike = En),
                (i.isArrayLikeObject = mn),
                (i.isBoolean = Go),
                (i.isBuffer = E2),
                (i.isDate = Ho),
                (i.isElement = Oo),
                (i.isEmpty = Wo),
                (i.isEqual = yo),
                (i.isEqualWith = Xo),
                (i.isError = q1),
                (i.isFinite = Do),
                (i.isFunction = J2),
                (i.isInteger = q6),
                (i.isLength = $4),
                (i.isMap = U6),
                (i.isMatch = qo),
                (i.isMatchWith = Uo),
                (i.isNaN = To),
                (i.isNative = $o),
                (i.isNil = nt),
                (i.isNull = _o),
                (i.isNumber = T6),
                (i.isObject = on),
                (i.isObjectLike = tn),
                (i.isPlainObject = l4),
                (i.isRegExp = U1),
                (i.isSafeInteger = bt),
                (i.isSet = $6),
                (i.isString = _4),
                (i.isSymbol = Dn),
                (i.isTypedArray = C8),
                (i.isUndefined = et),
                (i.isWeakMap = ct),
                (i.isWeakSet = xt),
                (i.join = tx),
                (i.kebabCase = Xt),
                (i.last = x2),
                (i.lastIndexOf = mx),
                (i.lowerCase = Dt),
                (i.lowerFirst = qt),
                (i.lt = ot),
                (i.lte = tt),
                (i.max = Hm),
                (i.maxBy = Om),
                (i.mean = Wm),
                (i.meanBy = ym),
                (i.min = Xm),
                (i.minBy = Dm),
                (i.stubArray = xb),
                (i.stubFalse = ob),
                (i.stubObject = Rm),
                (i.stubString = Ym),
                (i.stubTrue = Vm),
                (i.multiply = qm),
                (i.nth = Ax),
                (i.noConflict = Nm),
                (i.noop = cb),
                (i.now = q4),
                (i.pad = Ut),
                (i.padEnd = Tt),
                (i.padStart = $t),
                (i.parseInt = _t),
                (i.random = Gt),
                (i.reduce = Io),
                (i.reduceRight = io),
                (i.repeat = nm),
                (i.replace = bm),
                (i.result = ut),
                (i.round = Um),
                (i.runInContext = R),
                (i.sample = ro),
                (i.size = Mo),
                (i.snakeCase = em),
                (i.some = Fo),
                (i.sortedIndex = lx),
                (i.sortedIndexBy = Qx),
                (i.sortedIndexOf = Mx),
                (i.sortedLastIndex = Fx),
                (i.sortedLastIndexBy = Sx),
                (i.sortedLastIndexOf = fx),
                (i.startCase = xm),
                (i.startsWith = om),
                (i.subtract = Tm),
                (i.sum = $m),
                (i.sumBy = _m),
                (i.template = tm),
                (i.times = pm),
                (i.toFinite = w2),
                (i.toInteger = C0),
                (i.toLength = n3),
                (i.toLower = mm),
                (i.toNumber = o2),
                (i.toSafeInteger = mt),
                (i.toString = W0),
                (i.toUpper = Am),
                (i.trim = am),
                (i.trimEnd = gm),
                (i.trimStart = Im),
                (i.truncate = im),
                (i.unescape = hm),
                (i.uniqueId = dm),
                (i.upperCase = rm),
                (i.upperFirst = _1),
                (i.each = E6),
                (i.eachRight = P6),
                (i.first = p6),
                eb(
                  i,
                  (function () {
                    var n = {};
                    return (
                      Q2(i, function (b, e) {
                        X0.call(i.prototype, e) || (n[e] = b);
                      }),
                      n
                    );
                  })(),
                  { chain: !1 }
                ),
                (i.VERSION = v),
                _n(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (n) {
                    i[n].placeholder = i;
                  }
                ),
                _n(["drop", "take"], function (n, b) {
                  (V0.prototype[n] = function (e) {
                    e = e === m ? 1 : ln(C0(e), 0);
                    var c =
                      this.__filtered__ && !b ? new V0(this) : this.clone();
                    return (
                      c.__filtered__
                        ? (c.__takeCount__ = wn(e, c.__takeCount__))
                        : c.__views__.push({
                            size: wn(e, z0),
                            type: n + (c.__dir__ < 0 ? "Right" : ""),
                          }),
                      c
                    );
                  }),
                    (V0.prototype[n + "Right"] = function (e) {
                      return this.reverse()[n](e).reverse();
                    });
                }),
                _n(["filter", "map", "takeWhile"], function (n, b) {
                  var e = b + 1,
                    c = e == N0 || e == _0;
                  V0.prototype[n] = function (A) {
                    var h = this.clone();
                    return (
                      h.__iteratees__.push({ iteratee: f0(A, 3), type: e }),
                      (h.__filtered__ = h.__filtered__ || c),
                      h
                    );
                  };
                }),
                _n(["head", "last"], function (n, b) {
                  var e = "take" + (b ? "Right" : "");
                  V0.prototype[n] = function () {
                    return this[e](1).value()[0];
                  };
                }),
                _n(["initial", "tail"], function (n, b) {
                  var e = "drop" + (b ? "" : "Right");
                  V0.prototype[n] = function () {
                    return this.__filtered__ ? new V0(this) : this[e](1);
                  };
                }),
                (V0.prototype.compact = function () {
                  return this.filter(Gn);
                }),
                (V0.prototype.find = function (n) {
                  return this.filter(n).head();
                }),
                (V0.prototype.findLast = function (n) {
                  return this.reverse().find(n);
                }),
                (V0.prototype.invokeMap = R0(function (n, b) {
                  return typeof n == "function"
                    ? new V0(this)
                    : this.map(function (e) {
                        return a4(e, n, b);
                      });
                })),
                (V0.prototype.reject = function (n) {
                  return this.filter(T4(f0(n)));
                }),
                (V0.prototype.slice = function (n, b) {
                  n = C0(n);
                  var e = this;
                  return e.__filtered__ && (n > 0 || b < 0)
                    ? new V0(e)
                    : (n < 0 ? (e = e.takeRight(-n)) : n && (e = e.drop(n)),
                      b !== m &&
                        ((b = C0(b)),
                        (e = b < 0 ? e.dropRight(-b) : e.take(b - n))),
                      e);
                }),
                (V0.prototype.takeRightWhile = function (n) {
                  return this.reverse().takeWhile(n).reverse();
                }),
                (V0.prototype.toArray = function () {
                  return this.take(z0);
                }),
                Q2(V0.prototype, function (n, b) {
                  var e = /^(?:filter|find|map|reject)|While$/.test(b),
                    c = /^(?:head|last)$/.test(b),
                    A = i[c ? "take" + (b == "last" ? "Right" : "") : b],
                    h = c || /^find/.test(b);
                  A &&
                    (i.prototype[b] = function () {
                      var L = this.__wrapped__,
                        J = c ? [1] : arguments,
                        Y = L instanceof V0,
                        U = J[0],
                        T = Y || w0(L),
                        n0 = function (Y0) {
                          var d0 = A.apply(i, R2([Y0], J));
                          return c && I0 ? d0[0] : d0;
                        };
                      T &&
                        e &&
                        typeof U == "function" &&
                        U.length != 1 &&
                        (Y = T = !1);
                      var I0 = this.__chain__,
                        l0 = !!this.__actions__.length,
                        k0 = h && !I0,
                        s0 = Y && !l0;
                      if (!h && T) {
                        L = s0 ? L : new V0(this);
                        var L0 = n.apply(L, J);
                        return (
                          L0.__actions__.push({
                            func: X4,
                            args: [n0],
                            thisArg: m,
                          }),
                          new b2(L0, I0)
                        );
                      }
                      return k0 && s0
                        ? n.apply(this, J)
                        : ((L0 = this.thru(n0)),
                          k0 ? (c ? L0.value()[0] : L0.value()) : L0);
                    });
                }),
                _n(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (n) {
                    var b = S4[n],
                      e = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                      c = /^(?:pop|shift)$/.test(n);
                    i.prototype[n] = function () {
                      var A = arguments;
                      if (c && !this.__chain__) {
                        var h = this.value();
                        return b.apply(w0(h) ? h : [], A);
                      }
                      return this[e](function (L) {
                        return b.apply(w0(L) ? L : [], A);
                      });
                    };
                  }
                ),
                Q2(V0.prototype, function (n, b) {
                  var e = i[b];
                  if (e) {
                    var c = e.name + "";
                    X0.call(N8, c) || (N8[c] = []),
                      N8[c].push({ name: b, func: e });
                  }
                }),
                (N8[E4(m, b0).name] = [{ name: "wrapper", func: m }]),
                (V0.prototype.clone = ie),
                (V0.prototype.reverse = he),
                (V0.prototype.value = re),
                (i.prototype.at = Hx),
                (i.prototype.chain = Ox),
                (i.prototype.commit = Wx),
                (i.prototype.next = yx),
                (i.prototype.plant = Dx),
                (i.prototype.reverse = qx),
                (i.prototype.toJSON =
                  i.prototype.valueOf =
                  i.prototype.value =
                    Ux),
                (i.prototype.first = i.prototype.head),
                e4 && (i.prototype[e4] = Xx),
                i
              );
            },
            L8 = W3();
          D2 ? (((D2.exports = L8)._ = L8), (b1._ = L8)) : (Zn._ = L8);
        }).call(lodash);
      })(lodash$1, lodash$1.exports)),
    lodash$1.exports
  );
}
var constants$1 = {},
  hasRequiredConstants$1;
function requireConstants$1() {
  return (
    hasRequiredConstants$1 ||
      ((hasRequiredConstants$1 = 1),
      (constants$1.BITS = 32),
      (constants$1.GROUPS = 4),
      (constants$1.RE_ADDRESS =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g),
      (constants$1.RE_SUBNET_STRING = /\/\d{1,2}$/)),
    constants$1
  );
}
var ipv4, hasRequiredIpv4;
function requireIpv4() {
  if (hasRequiredIpv4) return ipv4;
  hasRequiredIpv4 = 1;
  var Q = requireJsbn().BigInteger,
    S = requireCommon(),
    m = requireSprintf().sprintf,
    v = requireLodash(),
    Z = requireConstants$1();
  function g(f) {
    (this.valid = !1),
      (this.address = f),
      (this.groups = Z.GROUPS),
      (this.v4 = !0),
      (this.subnet = "/32"),
      (this.subnetMask = 32);
    var F = Z.RE_SUBNET_STRING.exec(f);
    if (F) {
      if (
        ((this.parsedSubnet = F[0].replace("/", "")),
        (this.subnetMask = parseInt(this.parsedSubnet, 10)),
        (this.subnet = "/" + this.subnetMask),
        this.subnetMask < 0 || this.subnetMask > Z.BITS)
      ) {
        (this.valid = !1), (this.error = "Invalid subnet mask.");
        return;
      }
      f = f.replace(Z.RE_SUBNET_STRING, "");
    }
    (this.addressMinusSuffix = f), (this.parsedAddress = this.parse(f));
  }
  return (
    (g.prototype.parse = function (f) {
      var F = f.split(".");
      return (
        f.match(Z.RE_ADDRESS)
          ? (this.valid = !0)
          : (this.error = "Invalid IPv4 address."),
        F
      );
    }),
    (g.prototype.isValid = function () {
      return this.valid;
    }),
    (g.prototype.correctForm = function () {
      return this.parsedAddress
        .map(function (f) {
          return parseInt(f, 10);
        })
        .join(".");
    }),
    (g.prototype.isCorrect = S.isCorrect(Z.BITS)),
    (g.fromHex = function (f) {
      var F = v.padStart(f.replace(/:/g, ""), 8, "0"),
        s = [],
        H;
      for (H = 0; H < 8; H += 2) {
        var c0 = F.slice(H, H + 2);
        s.push(parseInt(c0, 16));
      }
      return new g(s.join("."));
    }),
    (g.fromInteger = function (f) {
      return g.fromHex(f.toString(16));
    }),
    (g.prototype.toHex = function () {
      return this.parsedAddress
        .map(function (f) {
          return m("%02x", parseInt(f, 10));
        })
        .join(":");
    }),
    (g.prototype.toArray = function () {
      return this.parsedAddress.map(function (f) {
        return parseInt(f, 10);
      });
    }),
    (g.prototype.toGroup6 = function () {
      var f = [],
        F;
      for (F = 0; F < Z.GROUPS; F += 2) {
        var s = m(
          "%02x%02x",
          parseInt(this.parsedAddress[F], 10),
          parseInt(this.parsedAddress[F + 1], 10)
        );
        f.push(m("%x", parseInt(s, 16)));
      }
      return f.join(":");
    }),
    (g.prototype.bigInteger = function () {
      return this.valid
        ? new Q(
            this.parsedAddress
              .map(function (f) {
                return m("%02x", parseInt(f, 10));
              })
              .join(""),
            16
          )
        : null;
    }),
    (g.prototype._startAddress = function () {
      return new Q(this.mask() + v.repeat("0", Z.BITS - this.subnetMask), 2);
    }),
    (g.prototype.startAddress = function () {
      return g.fromBigInteger(this._startAddress());
    }),
    (g.prototype.startAddressExclusive = function () {
      var f = new Q("1");
      return g.fromBigInteger(this._startAddress().add(f));
    }),
    (g.prototype._endAddress = function () {
      return new Q(this.mask() + v.repeat("1", Z.BITS - this.subnetMask), 2);
    }),
    (g.prototype.endAddress = function () {
      return g.fromBigInteger(this._endAddress());
    }),
    (g.prototype.endAddressExclusive = function () {
      var f = new Q("1");
      return g.fromBigInteger(this._endAddress().subtract(f));
    }),
    (g.fromBigInteger = function (f) {
      return g.fromInteger(parseInt(f.toString(), 10));
    }),
    (g.prototype.mask = function (f) {
      return f === void 0 && (f = this.subnetMask), this.getBitsBase2(0, f);
    }),
    (g.prototype.getBitsBase2 = function (f, F) {
      return this.binaryZeroPad().slice(f, F);
    }),
    (g.prototype.isInSubnet = S.isInSubnet),
    (g.prototype.binaryZeroPad = function () {
      return v.padStart(this.bigInteger().toString(2), Z.BITS, "0");
    }),
    (ipv4 = g),
    ipv4
  );
}
var constants = {},
  hasRequiredConstants;
function requireConstants() {
  return (
    hasRequiredConstants ||
      ((hasRequiredConstants = 1),
      (constants.BITS = 128),
      (constants.GROUPS = 8),
      (constants.SCOPES = {
        0: "Reserved",
        1: "Interface local",
        2: "Link local",
        4: "Admin local",
        5: "Site local",
        8: "Organization local",
        14: "Global",
        15: "Reserved",
      }),
      (constants.TYPES = {
        "ff01::1/128": "Multicast (All nodes on this interface)",
        "ff01::2/128": "Multicast (All routers on this interface)",
        "ff02::1/128": "Multicast (All nodes on this link)",
        "ff02::2/128": "Multicast (All routers on this link)",
        "ff05::2/128": "Multicast (All routers in this site)",
        "ff02::5/128": "Multicast (OSPFv3 AllSPF routers)",
        "ff02::6/128": "Multicast (OSPFv3 AllDR routers)",
        "ff02::9/128": "Multicast (RIP routers)",
        "ff02::a/128": "Multicast (EIGRP routers)",
        "ff02::d/128": "Multicast (PIM routers)",
        "ff02::16/128": "Multicast (MLDv2 reports)",
        "ff01::fb/128": "Multicast (mDNSv6)",
        "ff02::fb/128": "Multicast (mDNSv6)",
        "ff05::fb/128": "Multicast (mDNSv6)",
        "ff02::1:2/128":
          "Multicast (All DHCP servers and relay agents on this link)",
        "ff05::1:2/128":
          "Multicast (All DHCP servers and relay agents in this site)",
        "ff02::1:3/128": "Multicast (All DHCP servers on this link)",
        "ff05::1:3/128": "Multicast (All DHCP servers in this site)",
        "::/128": "Unspecified",
        "::1/128": "Loopback",
        "ff00::/8": "Multicast",
        "fe80::/10": "Link-local unicast",
      }),
      (constants.RE_BAD_CHARACTERS = /([^0-9a-f:\/%])/gi),
      (constants.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi),
      (constants.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/),
      (constants.RE_ZONE_STRING = /%.*$/),
      (constants.RE_URL = new RegExp(/^\[{0,1}([0-9a-f:]+)\]{0,1}/)),
      (constants.RE_URL_WITH_PORT = new RegExp(
        /\[([0-9a-f:]+)\]:([0-9]{1,5})/
      ))),
    constants
  );
}
var attributes = {},
  hasRequiredAttributes;
function requireAttributes() {
  if (hasRequiredAttributes) return attributes;
  hasRequiredAttributes = 1;
  var Q = requireCommon(),
    S = requireConstants();
  return (
    (attributes.isValid = function () {
      return this.valid;
    }),
    (attributes.isInSubnet = Q.isInSubnet),
    (attributes.isCorrect = Q.isCorrect(S.BITS)),
    (attributes.isCanonical = Q.falseIfInvalid(function () {
      return this.addressMinusSuffix === this.canonicalForm();
    })),
    (attributes.isLinkLocal = Q.falseIfInvalid(function () {
      return (
        this.getBitsBase2(0, 64) ===
        "1111111010000000000000000000000000000000000000000000000000000000"
      );
    })),
    (attributes.isMulticast = Q.falseIfInvalid(function () {
      return this.getType() === "Multicast";
    })),
    (attributes.is4 = Q.falseIfInvalid(function () {
      return this.v4;
    })),
    (attributes.isTeredo = Q.falseIfInvalid(function () {
      return this.isInSubnet(new this.constructor("2001::/32"));
    })),
    (attributes.is6to4 = Q.falseIfInvalid(function () {
      return this.isInSubnet(new this.constructor("2002::/16"));
    })),
    (attributes.isLoopback = Q.falseIfInvalid(function () {
      return this.getType() === "Loopback";
    })),
    attributes
  );
}
var html = {},
  helpers = {},
  hasRequiredHelpers;
function requireHelpers() {
  if (hasRequiredHelpers) return helpers;
  hasRequiredHelpers = 1;
  var Q = requireSprintf().sprintf,
    S = (helpers.spanAllZeroes = function (v) {
      return v.replace(/(0+)/g, '<span class="zero">$1</span>');
    });
  helpers.spanAll = function (v, Z) {
    Z === void 0 && (Z = 0);
    var g = v.split("");
    return g
      .map(function (f, F) {
        return Q(
          '<span class="digit value-%s position-%d">%s</span>',
          f,
          F + Z,
          S(f)
        );
      })
      .join("");
  };
  function m(v) {
    return v.replace(/^(0+)/, '<span class="zero">$1</span>');
  }
  return (
    (helpers.spanLeadingZeroes = function (v) {
      var Z = v.split(":");
      return Z.map(function (g) {
        return m(g);
      }).join(":");
    }),
    (helpers.simpleGroup = function (v, Z) {
      var g = v.split(":");
      return (
        Z || (Z = 0),
        g
          .map(function (f, F) {
            return /group-v4/.test(f)
              ? f
              : Q('<span class="hover-group group-%d">%s</span>', F + Z, m(f));
          })
          .join(":")
      );
    }),
    helpers
  );
}
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml) return html;
  hasRequiredHtml = 1;
  var Q = requireConstants$1(),
    S = requireHelpers(),
    m = requireSprintf().sprintf;
  return (
    (html.href = function (v) {
      return (
        v === void 0 ? (v = "") : (v = m(":%s", v)),
        m("http://[%s]%s/", this.correctForm(), v)
      );
    }),
    (html.link = function (v) {
      v || (v = {}),
        v.className === void 0 && (v.className = ""),
        v.prefix === void 0 && (v.prefix = "/#address="),
        v.v4 === void 0 && (v.v4 = !1);
      var Z = this.correctForm;
      return (
        v.v4 && (Z = this.to4in6),
        v.className
          ? m(
              '<a href="%1$s%2$s" class="%3$s">%2$s</a>',
              v.prefix,
              Z.call(this),
              v.className
            )
          : m('<a href="%1$s%2$s">%2$s</a>', v.prefix, Z.call(this))
      );
    }),
    (html.group = function () {
      var v = this.address.match(Q.RE_ADDRESS),
        Z;
      if (v) {
        var g = v[0].split(".");
        this.address = this.address.replace(
          Q.RE_ADDRESS,
          m(
            '<span class="hover-group group-v4 group-6">%s</span>.<span class="hover-group group-v4 group-7">%s</span>',
            g.slice(0, 2).join("."),
            g.slice(2, 4).join(".")
          )
        );
      }
      if (this.elidedGroups === 0) return S.simpleGroup(this.address);
      var f = [],
        F = this.address.split("::");
      F[0].length ? f.push(S.simpleGroup(F[0])) : f.push("");
      var s = ["hover-group"];
      for (
        Z = this.elisionBegin;
        Z < this.elisionBegin + this.elidedGroups;
        Z++
      )
        s.push(m("group-%d", Z));
      return (
        f.push(m('<span class="%s"></span>', s.join(" "))),
        F[1].length ? f.push(S.simpleGroup(F[1], this.elisionEnd)) : f.push(""),
        f.join(":")
      );
    }),
    html
  );
}
var regularExpressions = {},
  hasRequiredRegularExpressions;
function requireRegularExpressions() {
  if (hasRequiredRegularExpressions) return regularExpressions;
  hasRequiredRegularExpressions = 1;
  var Q = requireSprintf().sprintf,
    S = requireConstants();
  function m(f) {
    return Q("(%s)", f.join("|"));
  }
  function v(f) {
    return f.length < 4 ? Q("0{0,%d}%s", 4 - f.length, f) : f;
  }
  function Z(f) {
    var F = [];
    f.forEach(function (H, c0) {
      var d = parseInt(H, 16);
      d === 0 && F.push(c0);
    });
    var s = F.map(function (H) {
      return f
        .map(function (c0, d) {
          if (d === H) {
            var B = d === 0 || d === S.GROUPS - 1 ? ":" : "";
            return m([v(c0), B]);
          }
          return v(c0);
        })
        .join(":");
    });
    return s.push(f.map(v).join(":")), m(s);
  }
  function g(f, F, s) {
    var H = F ? "" : ":",
      c0 = s ? "" : ":",
      d = [];
    !F && !s && d.push("::"),
      F && s && d.push(""),
      ((s && !F) || (!s && F)) && d.push(":"),
      d.push(Q("%s(:0{1,4}){1,%d}", H, f - 1)),
      d.push(Q("(0{1,4}:){1,%d}%s", f - 1, c0)),
      d.push(Q("(0{1,4}:){%d}0{1,4}", f - 1));
    for (var B = 1; B < f - 1; B++)
      for (var k = 1; k < f - B; k++)
        d.push(Q("(0{1,4}:){%d}:(0{1,4}:){%d}0{1,4}", k, f - k - B - 1));
    return m(d);
  }
  return (
    (regularExpressions.regularExpressionString = function (f) {
      f === void 0 && (f = !1);
      var F = [],
        s = new this.constructor(this.correctForm());
      if (s.elidedGroups === 0) F.push(Z(s.parsedAddress));
      else if (s.elidedGroups === S.GROUPS) F.push(g(S.GROUPS));
      else {
        var H = s.address.split("::");
        H[0].length && F.push(Z(H[0].split(":"))),
          F.push(g(s.elidedGroups, H[0].length !== 0, H[1].length !== 0)),
          H[1].length && F.push(Z(H[1].split(":"))),
          (F = [F.join(":")]);
      }
      return (
        f || (F = [].concat("(?=^|\\b|[^\\w\\:])(", F, ")(?=[^\\w\\:]|\\b|$)")),
        F.join("")
      );
    }),
    (regularExpressions.regularExpression = function (f) {
      return new RegExp(this.regularExpressionString(f), "i");
    }),
    regularExpressions
  );
}
var ipv6, hasRequiredIpv6;
function requireIpv6() {
  if (hasRequiredIpv6) return ipv6;
  hasRequiredIpv6 = 1;
  var Q = requireJsbn().BigInteger,
    S = requireSprintf().sprintf,
    m = requireLodash(),
    v = requireConstants$1(),
    Z = requireConstants(),
    g = requireIpv4();
  function f(B) {
    for (var k = /(\d+)(\d{3})/; k.test(B); ) B = B.replace(k, "$1,$2");
    return B;
  }
  function F(B) {
    return (
      (B = B.replace(
        /^(0{1,})([1-9]+)$/,
        '<span class="parse-error">$1</span>$2'
      )),
      (B = B.replace(/^(0{1,})(0)$/, '<span class="parse-error">$1</span>$2')),
      B
    );
  }
  function s(B, k) {
    k === void 0 ? (this.groups = Z.GROUPS) : (this.groups = k),
      (this.v4 = !1),
      (this.subnet = "/128"),
      (this.subnetMask = 128),
      (this.zone = ""),
      (this.address = B);
    var p = Z.RE_SUBNET_STRING.exec(B);
    if (p) {
      if (
        ((this.parsedSubnet = p[0].replace("/", "")),
        (this.subnetMask = parseInt(this.parsedSubnet, 10)),
        (this.subnet = "/" + this.subnetMask),
        isNaN(this.subnetMask) ||
          this.subnetMask < 0 ||
          this.subnetMask > Z.BITS)
      ) {
        (this.valid = !1), (this.error = "Invalid subnet mask.");
        return;
      }
      B = B.replace(Z.RE_SUBNET_STRING, "");
    } else if (/\//.test(B)) {
      (this.valid = !1), (this.error = "Invalid subnet mask.");
      return;
    }
    var u = Z.RE_ZONE_STRING.exec(B);
    u && ((this.zone = u[0]), (B = B.replace(Z.RE_ZONE_STRING, ""))),
      (this.addressMinusSuffix = B),
      (this.parsedAddress = this.parse(this.addressMinusSuffix));
  }
  m.merge(s.prototype, requireAttributes()),
    m.merge(s.prototype, requireHtml()),
    m.merge(s.prototype, requireRegularExpressions()),
    (s.fromBigInteger = function (B) {
      var k = m.padStart(B.toString(16), 32, "0"),
        p = [],
        u;
      for (u = 0; u < Z.GROUPS; u++) p.push(k.slice(u * 4, (u + 1) * 4));
      return new s(p.join(":"));
    }),
    (s.fromURL = function (B) {
      var k, p, u;
      if (B.indexOf("[") !== -1 && B.indexOf("]:") !== -1) {
        if (((u = Z.RE_URL_WITH_PORT.exec(B)), u === null))
          return {
            error: "failed to parse address with port",
            address: null,
            port: null,
          };
        (k = u[1]), (p = u[2]);
      } else if (B.indexOf("/") !== -1) {
        if (
          ((B = B.replace(/^[a-z0-9]+:\/\//, "")),
          (u = Z.RE_URL.exec(B)),
          u === null)
        )
          return {
            error: "failed to parse address from URL",
            address: null,
            port: null,
          };
        k = u[1];
      } else k = B;
      return (
        p
          ? ((p = parseInt(p, 10)), (p < 0 || p > 65536) && (p = null))
          : (p = null),
        { address: new s(k), port: p }
      );
    }),
    (s.fromAddress4 = function (k) {
      var k = new g(k),
        p = Z.BITS - (v.BITS - k.subnetMask);
      return new s("::ffff:" + k.correctForm() + "/" + p);
    }),
    (s.fromArpa = function (B) {
      var k = B.replace(/(\.ip6\.arpa)?\.$/, ""),
        p = 7;
      if (k.length !== 63)
        return (k = { error: "Not Valid 'ip6.arpa' form", address: null }), k;
      k = k.split(".").reverse();
      for (var u = p; u > 0; u--) {
        var j = u * 4;
        k.splice(j, 0, ":");
      }
      return (k = k.join("")), new s(k);
    });
  function H(B, k) {
    var p = [],
      u = [],
      j;
    for (j = 0; j < B.length; j++)
      j < k[0] ? p.push(B[j]) : j > k[1] && u.push(B[j]);
    return p.concat(["compact"]).concat(u);
  }
  (s.prototype.microsoftTranscription = function () {
    return S("%s.ipv6-literal.net", this.correctForm().replace(/:/g, "-"));
  }),
    (s.prototype.mask = function (B) {
      return B === void 0 && (B = this.subnetMask), this.getBitsBase2(0, B);
    }),
    (s.prototype.possibleSubnets = function (B) {
      B === void 0 && (B = 128);
      var k = Z.BITS - this.subnetMask,
        p = Math.abs(B - Z.BITS),
        u = k - p;
      return u < 0 ? "0" : f(new Q("2", 10).pow(u).toString(10));
    }),
    (s.prototype._startAddress = function () {
      return new Q(this.mask() + m.repeat("0", Z.BITS - this.subnetMask), 2);
    }),
    (s.prototype.startAddress = function () {
      return s.fromBigInteger(this._startAddress());
    }),
    (s.prototype.startAddressExclusive = function () {
      var B = new Q("1");
      return s.fromBigInteger(this._startAddress().add(B));
    }),
    (s.prototype._endAddress = function () {
      return new Q(this.mask() + m.repeat("1", Z.BITS - this.subnetMask), 2);
    }),
    (s.prototype.endAddress = function () {
      return s.fromBigInteger(this._endAddress());
    }),
    (s.prototype.endAddressExclusive = function () {
      var B = new Q("1");
      return s.fromBigInteger(this._endAddress().subtract(B));
    }),
    (s.prototype.getScope = function () {
      var B = Z.SCOPES[this.getBits(12, 16)];
      return (
        this.getType() === "Global unicast" &&
          B !== "Link local" &&
          (B = "Global"),
        B
      );
    }),
    (s.prototype.getType = function () {
      var B = this;
      function k(p, u) {
        return B.isInSubnet(new s(u));
      }
      return m.find(Z.TYPES, k) || "Global unicast";
    }),
    (s.prototype.getBits = function (B, k) {
      return new Q(this.getBitsBase2(B, k), 2);
    }),
    (s.prototype.getBitsBase2 = function (B, k) {
      return this.binaryZeroPad().slice(B, k);
    }),
    (s.prototype.getBitsBase16 = function (B, k) {
      var p = k - B;
      return p % 4 !== 0
        ? null
        : m.padStart(this.getBits(B, k).toString(16), p / 4, "0");
    }),
    (s.prototype.getBitsPastSubnet = function () {
      return this.getBitsBase2(this.subnetMask, Z.BITS);
    }),
    (s.prototype.reverseForm = function (B) {
      B || (B = {});
      var k = Math.floor(this.subnetMask / 4),
        p = this.canonicalForm()
          .replace(/:/g, "")
          .split("")
          .slice(0, k)
          .reverse()
          .join(".");
      return k > 0
        ? B.omitSuffix
          ? p
          : S("%s.ip6.arpa.", p)
        : B.omitSuffix
        ? ""
        : "ip6.arpa.";
    }),
    (s.prototype.correctForm = function () {
      if (!this.parsedAddress) return null;
      var B,
        k = [],
        p = 0,
        u = [];
      for (B = 0; B < this.parsedAddress.length; B++) {
        var j = parseInt(this.parsedAddress[B], 16);
        j === 0 && p++,
          j !== 0 && p > 0 && (p > 1 && u.push([B - p, B - 1]), (p = 0));
      }
      p > 1 &&
        u.push([this.parsedAddress.length - p, this.parsedAddress.length - 1]);
      var b0 = u.map(function (W) {
        return W[1] - W[0] + 1;
      });
      if (u.length > 0) {
        var g0 = b0.indexOf(m.max(b0));
        k = H(this.parsedAddress, u[g0]);
      } else k = this.parsedAddress;
      for (B = 0; B < k.length; B++)
        k[B] !== "compact" && (k[B] = parseInt(k[B], 16).toString(16));
      var h0 = k.join(":");
      return (
        (h0 = h0.replace(/^compact$/, "::")),
        (h0 = h0.replace(/^compact|compact$/, ":")),
        (h0 = h0.replace(/compact/, "")),
        h0
      );
    }),
    (s.prototype.binaryZeroPad = function () {
      return m.padStart(this.bigInteger().toString(2), Z.BITS, "0");
    }),
    (s.prototype.parse4in6 = function (B) {
      var k = B.split(":"),
        p = k.slice(-1)[0],
        u = p.match(v.RE_ADDRESS);
      if (u) {
        for (var j = new g(u[0]), b0 = 0; b0 < j.groups; b0++)
          if (/^0[0-9]+/.test(j.parsedAddress[b0]))
            return (
              (this.valid = !1),
              (this.error = "IPv4 addresses can not have leading zeroes."),
              (this.parseError = B.replace(
                v.RE_ADDRESS,
                j.parsedAddress.map(F).join(".")
              )),
              null
            );
        (this.v4 = !0), (k[k.length - 1] = j.toGroup6()), (B = k.join(":"));
      }
      return B;
    }),
    (s.prototype.parse = function (B) {
      if (((B = this.parse4in6(B)), this.error)) return null;
      var k = B.match(Z.RE_BAD_CHARACTERS);
      if (k)
        return (
          (this.valid = !1),
          (this.error = S(
            "Bad character%s detected in address: %s",
            k.length > 1 ? "s" : "",
            k.join("")
          )),
          (this.parseError = B.replace(
            Z.RE_BAD_CHARACTERS,
            '<span class="parse-error">$1</span>'
          )),
          null
        );
      var p = B.match(Z.RE_BAD_ADDRESS);
      if (p)
        return (
          (this.valid = !1),
          (this.error = S("Address failed regex: %s", p.join(""))),
          (this.parseError = B.replace(
            Z.RE_BAD_ADDRESS,
            '<span class="parse-error">$1</span>'
          )),
          null
        );
      var u = [],
        j = B.split("::");
      if (j.length === 2) {
        var b0 = j[0].split(":"),
          g0 = j[1].split(":");
        b0.length === 1 && b0[0] === "" && (b0 = []),
          g0.length === 1 && g0[0] === "" && (g0 = []);
        var h0 = this.groups - (b0.length + g0.length);
        if (!h0)
          return (this.valid = !1), (this.error = "Error parsing groups"), null;
        (this.elidedGroups = h0),
          (this.elisionBegin = b0.length),
          (this.elisionEnd = b0.length + this.elidedGroups),
          b0.forEach(function (O) {
            u.push(O);
          });
        for (var W = 0; W < h0; W++) u.push(0);
        g0.forEach(function (O) {
          u.push(O);
        });
      } else if (j.length === 1) (u = B.split(":")), (this.elidedGroups = 0);
      else
        return (
          (this.valid = !1), (this.error = "Too many :: groups found"), null
        );
      return (
        (u = u.map(function (O) {
          return S("%x", parseInt(O, 16));
        })),
        u.length !== this.groups
          ? ((this.valid = !1),
            (this.error = "Incorrect number of groups found"),
            null)
          : ((this.valid = !0), u)
      );
    });
  function c0(B) {
    return S("%04x", parseInt(B, 16));
  }
  (s.prototype.canonicalForm = function () {
    return this.valid ? this.parsedAddress.map(c0).join(":") : null;
  }),
    (s.prototype.decimal = function () {
      return this.valid
        ? this.parsedAddress
            .map(function (B) {
              return S("%05d", parseInt(B, 16));
            })
            .join(":")
        : null;
    }),
    (s.prototype.bigInteger = function () {
      return this.valid ? new Q(this.parsedAddress.map(c0).join(""), 16) : null;
    }),
    (s.prototype.to4 = function () {
      var B = this.binaryZeroPad().split("");
      return g.fromHex(new Q(B.slice(96, 128).join(""), 2).toString(16));
    }),
    (s.prototype.to4in6 = function () {
      var B = this.to4(),
        k = new s(this.parsedAddress.slice(0, 6).join(":"), 6),
        p = k.correctForm(),
        u = "";
      return /:$/.test(p) || (u = ":"), k.correctForm() + u + B.address;
    }),
    (s.prototype.inspectTeredo = function () {
      var B = this.getBitsBase16(0, 32),
        k = this.getBits(80, 96).xor(new Q("ffff", 16)).toString(),
        p = g.fromHex(this.getBitsBase16(32, 64)),
        u = g.fromHex(
          this.getBits(96, 128).xor(new Q("ffffffff", 16)).toString(16)
        ),
        j = this.getBits(64, 80),
        b0 = this.getBitsBase2(64, 80),
        g0 = j.testBit(15),
        h0 = j.testBit(14),
        W = j.testBit(8),
        O = j.testBit(9),
        $ = new Q(b0.slice(2, 6) + b0.slice(8, 16), 2).toString(10);
      return {
        prefix: S("%s:%s", B.slice(0, 4), B.slice(4, 8)),
        server4: p.address,
        client4: u.address,
        flags: b0,
        coneNat: g0,
        microsoft: {
          reserved: h0,
          universalLocal: O,
          groupIndividual: W,
          nonce: $,
        },
        udpPort: k,
      };
    }),
    (s.prototype.inspect6to4 = function () {
      var B = this.getBitsBase16(0, 16),
        k = g.fromHex(this.getBitsBase16(16, 48));
      return { prefix: S("%s", B.slice(0, 4)), gateway: k.address };
    }),
    (s.prototype.to6to4 = function () {
      if (!this.is4()) return null;
      var B = [
        "2002",
        this.getBitsBase16(96, 112),
        this.getBitsBase16(112, 128),
        "",
        "/16",
      ].join(":");
      return new s(B);
    }),
    (s.prototype.toByteArray = function () {
      var B = this.bigInteger().toByteArray();
      return B.length === 17 && B[0] === 0 ? B.slice(1) : B;
    });
  function d(B) {
    return B & 255;
  }
  return (
    (s.prototype.toUnsignedByteArray = function () {
      return this.toByteArray().map(d);
    }),
    (s.fromByteArray = function (B) {
      return this.fromUnsignedByteArray(B.map(d));
    }),
    (s.fromUnsignedByteArray = function (B) {
      for (
        var k = new Q("256", 10),
          p = new Q("0", 10),
          u = new Q("1", 10),
          j = B.length - 1;
        j >= 0;
        j--
      )
        (p = p.add(u.multiply(new Q(B[j].toString(10), 10)))),
          (u = u.multiply(k));
      return s.fromBigInteger(p);
    }),
    (ipv6 = s),
    ipv6
  );
}
var hasRequiredIpAddress;
function requireIpAddress() {
  return (
    hasRequiredIpAddress ||
      ((hasRequiredIpAddress = 1),
      (ipAddress.Address4 = requireIpv4()),
      (ipAddress.Address6 = requireIpv6()),
      (ipAddress.v6 = { helpers: requireHelpers() })),
    ipAddress
  );
}
var base85, hasRequiredBase85;
function requireBase85() {
  if (hasRequiredBase85) return base85;
  hasRequiredBase85 = 1;
  const { Buffer: Q } = requireBuffer(),
    S = requireAlphabets(),
    m = requireIpAddress().Address6,
    v = Math.pow(2, 32) - 1,
    Z = 85 * 85 * 85 * 85,
    g = 85 * 85 * 85,
    f = 85 * 85,
    F = 85,
    s = "z85",
    H = typeof window < "u" ? window.BigInt : commonjsGlobal.BigInt,
    c0 = [9, 10, 11, 12, 13, 32],
    d = "<~",
    B = "~>";
  function k(N) {
    return H("0x" + Q.from(N).toString("hex"));
  }
  function p(N, G) {
    return new Array(1 + N - G.length).join("0") + G;
  }
  function u(N) {
    const G = S.ipv6.enc,
      m0 = [];
    for (let M0 = 1; M0 < 20; ++M0) m0.push(G[Number(N % 85n)]), (N = N / 85n);
    return m0.push(G[Number(N)]), m0.reverse().join("");
  }
  function j(N) {
    return N.length !== 16 ? !1 : u(k(N));
  }
  function b0(N) {
    const G = new m(N);
    if (!G.isValid()) return !1;
    const m0 = G.parsedAddress
        .map(function (N0) {
          return p(4, N0);
        })
        .join(""),
      M0 = H(`0x${m0}`);
    return u(M0);
  }
  function g0(N) {
    if (N.length !== 20) return !1;
    const G = S.ipv6.dec;
    let m0 = 0;
    try {
      const M0 = N.split("").reduceRight(function (N0, p0) {
        const _0 = H(G[p0.charCodeAt(0)]),
          T0 = H(85) ** H(m0++),
          y0 = _0 * T0;
        return N0 + y0;
      }, H(0));
      return m.fromBigInteger(M0).correctForm();
    } catch {
      return !1;
    }
  }
  function h0(N) {
    return g0(N.toString());
  }
  function W(N, G) {
    if (G === "z85" && N.length % 4 !== 0) return !1;
    const m0 = S[G].enc,
      M0 = N.length % 4 === 0 ? 0 : 4 - (N.length % 4);
    let N0 = "";
    for (let p0 = 0; p0 < N.length; p0 += 4) {
      let _0 =
          ((N[p0] << 24) >>> 0) +
          (((p0 + 1 > N.length ? 0 : N[p0 + 1]) << 16) >>> 0) +
          (((p0 + 2 > N.length ? 0 : N[p0 + 2]) << 8) >>> 0) +
          (((p0 + 3 > N.length ? 0 : N[p0 + 3]) << 0) >>> 0),
        T0 = [];
      for (let y0 = 0; y0 < 5; ++y0)
        T0.unshift(m0[_0 % 85]), (_0 = Math.floor(_0 / 85));
      (T0 = T0.join("")),
        T0 === "!!!!!" && G === "ascii85" && (T0 = "z"),
        (N0 += T0);
    }
    return (
      (G === "ascii85" ? d : "") +
      N0.substring(0, N0.length - M0) +
      (G === "ascii85" ? B : "")
    );
  }
  function O(N, G) {
    const m0 = Q.from(N, "utf8");
    return W(m0, G);
  }
  function $(N, G) {
    const m0 = S[G].dec;
    let M0 = N.length;
    if (
      (G === "ascii85" && (M0 -= d.length + B.length),
      G === "z85" && M0 % 5 !== 0)
    )
      return !1;
    let N0 = M0 % 5 === 0 ? 0 : 5 - (M0 % 5);
    const p0 = G === "ascii85" ? d.length : 0,
      _0 = p0 + M0,
      T0 = Q.alloc(4 * Math.ceil((_0 - p0) / 5)),
      y0 = function (v0) {
        if (v0 < _0)
          for (; c0.indexOf(N[v0]) !== -1; ) (N0 = (N0 + 1) % 5), v0++;
        return v0;
      };
    let Cn = 0;
    for (let v0 = p0; v0 < _0; ) {
      let z0 = 0;
      const E0 = v0;
      if (
        ((v0 = y0(v0)),
        (z0 = m0[N[v0]] * Z),
        (v0 = y0(v0 + 1)),
        (z0 += (v0 >= _0 ? 84 : m0[N[v0]]) * g),
        (v0 = y0(v0 + 1)),
        (z0 += (v0 >= _0 ? 84 : m0[N[v0]]) * f),
        (v0 = y0(v0 + 1)),
        (z0 += (v0 >= _0 ? 84 : m0[N[v0]]) * F),
        (v0 = y0(v0 + 1)),
        (z0 += v0 >= _0 ? 84 : m0[N[v0]]),
        (v0 = y0(v0 + 1)),
        (G === "z85" && E0 + 5 !== v0) || z0 > v || z0 < 0)
      )
        return !1;
      T0.writeUInt32BE(z0, Cn), (Cn += 4);
    }
    return T0.slice(0, Cn - N0);
  }
  function o0(N, G) {
    G === "ascii85" && (N = N.replace("z", "!!!!!"));
    let m0 = Q.from(N, "utf8");
    return $(m0, G);
  }
  function A0(N, G) {
    return (
      (G = G || s),
      S.hasOwnProperty(G)
        ? Q.isBuffer(N)
          ? G === "ipv6"
            ? j(N)
            : W(N, G)
          : typeof N == "string"
          ? G === "ipv6"
            ? b0(N)
            : O(N, G)
          : !1
        : !1
    );
  }
  function y(N, G) {
    return (
      (G = G || s),
      S.hasOwnProperty(G)
        ? Q.isBuffer(N)
          ? G === "ipv6"
            ? h0(N)
            : $(N, G)
          : typeof N == "string"
          ? G === "ipv6"
            ? g0(N)
            : o0(N, G)
          : !1
        : !1
    );
  }
  return (base85 = { alphabets: S, encode: A0, decode: y }), base85;
}

const atlas1 = "atlas1.webp",
  atlas1text = `atlas1.txt`;
const atlas2 = "atlas2.webp",
  atlas2text = `atlas2.txt`;
const atlas3 = "atlas3.webp",
  atlas3text = `atlas3.txt`;
const atlas4 = "atlas4.webp",
  atlas4text = `atlas4.txt`;
const atlas5 = "atlas5.webp",
  atlas5text = `atlas5.txt`;
const atlas6 = "atlas6.webp",
  atlas6text = `atlas6.txt`;
const atlas7 = "atlas7.webp",
  atlas7text = `atlas7.txt`;
const atlas8 = "atlas8.webp",
  atlas8text = `atlas8.txt`;
const atlas9 = "atlas9.webp",
  atlas9text = `atlas9.txt`;

let zdecoder = new ZSTDDecoder();
const atlases = [
  [atlas1, atlas1text],
  [atlas2, atlas2text],
  [atlas3, atlas3text],
  [atlas4, atlas4text],
  [atlas5, atlas5text],
  [atlas6, atlas6text],
  [atlas7, atlas7text],
  [atlas8, atlas8text],
  [atlas9, atlas9text],
];
const wasmtarFile = "wasmtar.bin";

console.log("Atlases", atlases);

// Progress tracking
function updateProgress(text) {
  let progressEl = document.getElementById('loading-progress');
  if (!progressEl) {
    progressEl = document.createElement('div');
    progressEl.id = 'loading-progress';
    progressEl.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.8); color: white; padding: 20px 40px; border-radius: 10px; font-family: Arial, sans-serif; font-size: 18px; z-index: 10000; text-align: center;';
    document.body.appendChild(progressEl);
  }
  progressEl.textContent = text;
  console.log('[Progress]', text);
}

function removeProgress() {
  const progressEl = document.getElementById('loading-progress');
  if (progressEl) {
    progressEl.remove();
  }
  console.log('[Progress] Loading complete!');
}

function hookfmod() {
  let Q = [],
    S = AudioContext;
  (AudioContext = function () {
    let m = new S();
    return Q.push(m), m;
  }),
    window.addEventListener("focus", async () => {
      for (let m of Q)
        try {
          await m.resume();
        } catch {}
    }),
    window.addEventListener("blur", async () => {
      for (let m of Q)
        try {
          await m.suspend();
        } catch {}
    });
}
hookfmod();
let exports;
async function preInit() {
  updateProgress('Loading .NET runtime...');
  const wasm = await eval(`import("${netfiles.get("dotnet.js")}")`),
    dotnet = wasm.dotnet;
  (window.wasm = wasm), console.debug("initializing dotnet");
  updateProgress('Configuring runtime...');
  const runtime = await dotnet
    .withConfig({})
    .withRuntimeOptions([
      "--jiterpreter-minimum-trace-hit-count=500",
      "--jiterpreter-trace-monitoring-period=100",
      "--jiterpreter-trace-monitoring-max-average-penalty=150",
      `--jiterpreter-wasm-bytes-limit=${64 * 1024 * 1024}`,
      `--jiterpreter-table-size=${16 * 1024}`,
      "--jiterpreter-stats-enabled",
    ])
    .withEnvironmentVariable("MONO_SLEEP_ABORT_LIMIT", "99999")
    .create();
  console.log(runtime),
    (dotnet.instance.Module.canvas = document.getElementById("canvas"));
  updateProgress('Loading game assemblies...');
  const config = runtime.getConfig();
  (exports = await runtime.getAssemblyExports(config.mainAssemblyName)),
    (window.exports = exports),
    runtime.setModuleImports("interop.js", {
      grabTexture,
      grabTextureDimensions,
    }),
    (self.wasm = {
      Module: dotnet.instance.Module,
      dotnet,
      runtime,
      config,
      exports,
    }),
    console.log("mount fs"),
    updateProgress('Mounting filesystem...'),
    dotnet.instance.Module.FS.analyzePath("/libsdl").path ||
      (dotnet.instance.Module.FS.mkdir("/libsdl", 493),
      dotnet.instance.Module.FS.mount(
        dotnet.instance.Module.FS.filesystems.IDBFS,
        {},
        "/libsdl"
      )),
    await new Promise((Q) => dotnet.instance.Module.FS.syncfs(!0, Q)),
    dotnet.instance.Module.FS.analyzePath("/libsdl/Content/").path ||
      dotnet.instance.Module.FS.mkdir("/libsdl/Content/"),
    console.debug("synced; exposing dotnet FS"),
    console.debug("PreInit..."),
    updateProgress('Initializing game...'),
    await runtime.runMain(),
    await exports.Program.PreInit(),
    console.debug("dotnet initialized");
}
let playing = !1;
async function play() {
  const Q = performance.now();
  console.debug("Init..."),
    await exports.Program.Init(screen.width, screen.height);
  const S = performance.now();
  console.debug(`Init : ${(S - Q).toFixed(2)}ms`),
    navigator.keyboard != null ? navigator.keyboard.lock() : console.log("navigation null"),
    (playing = !0),
    removeProgress(),
    console.debug("MainLoop...");
  const m = async () => {
    performance.now();
    const v = await exports.Program.MainLoop();
    if ((performance.now(), !v)) {
      console.debug("Cleanup..."), await exports.Program.Cleanup();
      return;
    }
    requestAnimationFrame(m);
  };
  requestAnimationFrame(m);
}
document.addEventListener("keydown", (Q) => {
  playing &&
    [
      "Space",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ].includes(Q.code) &&
    Q.preventDefault();
});
const allmaps = new Map();
async function loadAtlas(Q, S) {
  // Fetch the image file
  const imageResponse = await fetch(Q);
  const imageBlob = await imageResponse.blob();
  const m = await createImageBitmap(imageBlob);
  
  // Fetch the text file
  const textResponse = await fetch(S);
  const textContent = await textResponse.text();
  
  let v;
  (v = new OffscreenCanvas(m.width, m.height).getContext("2d")),
    v.drawImage(m, 0, 0);
  for (const Z of textContent.split(`
`)) {
    let g = Z.split("").reverse().join("").split(" "),
      f = g
        .splice(4, g.length - 4)
        .join(" ")
        .split("")
        .reverse()
        .join("");
    const [F, s, H, c0] = g.join(" ").split("").reverse().join("").split(" ");
    f &&
      allmaps.set(f, {
        context: v,
        region: [parseInt(F), parseInt(s), parseInt(H), parseInt(c0)],
      });
  }
  console.log("loaded atlas, triggering gc"), v.getImageData(0, 0, 1, 1);
}
window.am = allmaps;
let fontIdx = 0,
  lastFont = "";
function grabTexture(Q) {
  if (Q.startsWith("Font")) {
    const m = Q.split("/").pop(),
      v = allmaps.get(`${m}_${fontIdx}`);
    return v ? new Uint8Array(v.context.getImageData(...v.region).data) : null;
  }
  const S = allmaps.get(Q.split("/").pop() + ".xnb");
  return S ? new Uint8Array(S.context.getImageData(...S.region).data) : null;
}
function grabTextureDimensions(Q) {
  if (Q.startsWith("Font")) {
    const m = Q.split("/").pop();
    m != lastFont ? ((lastFont = m), (fontIdx = 0)) : fontIdx++;
    const v = allmaps.get(`${m}_${fontIdx}`);
    return v ? [v.region[2], v.region[3]] : [10, 10];
  }
  const S = allmaps.get(Q.split("/").pop() + ".xnb");
  return S ? [S.region[2], S.region[3]] : [10, 10];
}
async function streamToBlob(Q, S) {
  const m = Q.getReader(),
    v = [];
  let Z = 0;
  for (;;) {
    const { done: f, value: F } = await m.read();
    if (f) break;
    v.push(F), (Z += F.length);
  }
  return new Blob(v, { type: S || "application/octet-stream" });
}
function bufferToStream(Q) {
  return new ReadableStream({
    start(m) {
      m.enqueue(Q), m.close();
    },
  });
}
const netfiles = new Map();
async function loadWasm() {
  // Fetch the wasmtar file
  updateProgress('Fetching WASM archive...');
  console.log("fetching wasmtar file");
  const wasmtarResponse = await fetch(wasmtarFile);
  const wasmtarBuffer = await wasmtarResponse.arrayBuffer();
  const wasmtar = new Uint8Array(wasmtarBuffer);
  
  updateProgress('Decompressing WASM...');
  await zdecoder.init(), console.log("starting zstd decode");
  let Q = zdecoder.decode(wasmtar, 84316160);
  Q.length == 0 && console.error("ZSTD decode returned empty buffer, aborting");
  updateProgress('Extracting WASM files...');
  const S = bufferToStream(Q),
    m = fromWeb(S),
    v = tar.extract();
  v.on("entry", async (g, f, F) => {
    const s = toWeb(f);
    async function H() {
      const d = s.getReader();
      for (;;) {
        const { done: B, value: k } = await d.read();
        if (B || !k) break;
      }
    }
    const c0 = g.name.split("/");
    if (c0.length === 0) {
      await H(), F();
      return;
    }
    if (g.type === "file") {
      const d = await streamToBlob(
        s,
        c0[0].endsWith(".wasm")
          ? "application/wasm"
          : c0[0].endsWith(".js")
          ? "application/javascript"
          : null
      );
      netfiles.set(c0[0], URL.createObjectURL(d));
    } else await H();
    F();
  });
  const Z = new Promise((g, f) => {
    v.on("finish", () => g()), v.on("error", (F) => f(F));
  });
  m.pipe(v), await Z;
}
let realfetch = window.fetch;
async function start() {
  updateProgress('Loading atlases... (0/9)');
  let atlasIndex = 0;
  for (let Q of atlases) {
    atlasIndex++;
    updateProgress(`Loading atlases... (${atlasIndex}/9)`);
    console.log("loading atlas");
    await loadAtlas(Q[0], Q[1]);
  }
  updateProgress('Loading WASM...');
  await loadWasm(),
    console.log("wasm load done"),
    updateProgress('Initializing .NET runtime...'),
    (URL = new Proxy(URL, {
      construct(Q, S, m) {
        return (
          S[1].startsWith("blob:") &&
            (S[1] = "https://example.com/_framework/"),
          S[0].endsWith(".js")
            ? new Q(netfiles.get(S[0].split("/").pop()))
            : Reflect.construct(Q, S, m)
        );
      },
    })),
    (window.fetch = (...Q) => {
      let S = new URL(Q[0], "https://example.com").pathname;
      return S.startsWith("/_framework") &&
        ((S = S.replace("/_framework/", "")), netfiles.has(S))
        ? realfetch(netfiles.get(S))
        : realfetch(...Q);
    }),
    await preInit(),
    updateProgress('Starting game...'),
    play();
}
window.s = start;
window.pi = preInit;
window.gtd = grabTextureDimensions;
window.gt = grabTexture;
window.play = play;
window.loadatlasi = async (Q) => {
  let S = atlases[Q];
  console.log("loading atlas");
  await loadAtlas(S[0], S[1]), console.log("atlas loaded, triggering gc");
};
start();