(() => {
  var ks = Object.defineProperty,
    o = (r, e) => ks(r, "name", { value: e, configurable: !0 }),
    Ns = (() => {
      for (var r = new Uint8Array(128), e = 0; e < 64; e++)
        r[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
      return (n) => {
        for (
          var d = n.length,
            p = new Uint8Array(
              (((d - (n[d - 1] == "=") - (n[d - 2] == "=")) * 3) / 4) | 0,
            ),
            V = 0,
            T = 0;
          V < d;

        ) {
          var N = r[n.charCodeAt(V++)],
            K = r[n.charCodeAt(V++)],
            y = r[n.charCodeAt(V++)],
            ee = r[n.charCodeAt(V++)];
          (p[T++] = (N << 2) | (K >> 4)),
            (p[T++] = (K << 4) | (y >> 2)),
            (p[T++] = (y << 6) | ee);
        }
        return p;
      };
    })();
  function Ue(r) {
    return (r * Math.PI) / 180;
  }
  o(Ue, "deg2rad");
  function bt(r) {
    return (r * 180) / Math.PI;
  }
  o(bt, "rad2deg");
  function Ke(r, e, n) {
    return e > n ? Ke(r, n, e) : Math.min(Math.max(r, e), n);
  }
  o(Ke, "clamp");
  function Ye(r, e, n) {
    if (typeof r == "number" && typeof e == "number") return r + (e - r) * n;
    if (
      (r instanceof b && e instanceof b) ||
      (r instanceof re && e instanceof re)
    )
      return r.lerp(e, n);
    throw new Error(
      `Bad value for lerp(): ${r}, ${e}. Only number, Vec2 and Color is supported.`,
    );
  }
  o(Ye, "lerp");
  function Ze(r, e, n, d, p) {
    return d + ((r - e) / (n - e)) * (p - d);
  }
  o(Ze, "map");
  function kn(r, e, n, d, p) {
    return Ke(Ze(r, e, n, d, p), d, p);
  }
  o(kn, "mapc");
  var b = class xe {
    static {
      o(this, "Vec2");
    }
    x = 0;
    y = 0;
    constructor(e = 0, n = e) {
      (this.x = e), (this.y = n);
    }
    static fromAngle(e) {
      let n = Ue(e);
      return new xe(Math.cos(n), Math.sin(n));
    }
    static LEFT = new xe(-1, 0);
    static RIGHT = new xe(1, 0);
    static UP = new xe(0, -1);
    static DOWN = new xe(0, 1);
    clone() {
      return new xe(this.x, this.y);
    }
    add(...e) {
      let n = P(...e);
      return new xe(this.x + n.x, this.y + n.y);
    }
    sub(...e) {
      let n = P(...e);
      return new xe(this.x - n.x, this.y - n.y);
    }
    scale(...e) {
      let n = P(...e);
      return new xe(this.x * n.x, this.y * n.y);
    }
    dist(...e) {
      let n = P(...e);
      return this.sub(n).len();
    }
    sdist(...e) {
      let n = P(...e);
      return this.sub(n).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let e = this.len();
      return e === 0 ? new xe(0) : this.scale(1 / e);
    }
    normal() {
      return new xe(this.y, -this.x);
    }
    reflect(e) {
      return this.sub(e.scale(2 * this.dot(e)));
    }
    project(e) {
      return e.scale(e.dot(this) / e.len());
    }
    reject(e) {
      return this.sub(this.project(e));
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    angle(...e) {
      let n = P(...e);
      return bt(Math.atan2(this.y - n.y, this.x - n.x));
    }
    angleBetween(...e) {
      let n = P(...e);
      return bt(Math.atan2(this.cross(n), this.dot(n)));
    }
    lerp(e, n) {
      return new xe(Ye(this.x, e.x, n), Ye(this.y, e.y, n));
    }
    slerp(e, n) {
      let d = this.dot(e),
        p = this.cross(e),
        V = Math.atan2(p, d);
      return this.scale(Math.sin((1 - n) * V))
        .add(e.scale(Math.sin(n * V)))
        .scale(1 / p);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(e) {
      return new xe(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
    }
    transform(e) {
      return e.multVec2(this);
    }
    eq(e) {
      return this.x === e.x && this.y === e.y;
    }
    bbox() {
      return new ve(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  };
  function P(...r) {
    if (r.length === 1) {
      if (r[0] instanceof b) return new b(r[0].x, r[0].y);
      if (Array.isArray(r[0]) && r[0].length === 2) return new b(...r[0]);
    }
    return new b(...r);
  }
  o(P, "vec2");
  var re = class ue {
    static {
      o(this, "Color");
    }
    r = 255;
    g = 255;
    b = 255;
    constructor(e, n, d) {
      (this.r = Ke(e, 0, 255)),
        (this.g = Ke(n, 0, 255)),
        (this.b = Ke(d, 0, 255));
    }
    static fromArray(e) {
      return new ue(e[0], e[1], e[2]);
    }
    static fromHex(e) {
      if (typeof e == "number")
        return new ue((e >> 16) & 255, (e >> 8) & 255, (e >> 0) & 255);
      if (typeof e == "string") {
        let n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return new ue(
          parseInt(n[1], 16),
          parseInt(n[2], 16),
          parseInt(n[3], 16),
        );
      } else throw new Error("Invalid hex color format");
    }
    static fromHSL(e, n, d) {
      if (n == 0) return new ue(255 * d, 255 * d, 255 * d);
      let p = o(
          (ee, S, B) => (
            B < 0 && (B += 1),
            B > 1 && (B -= 1),
            B < 1 / 6
              ? ee + (S - ee) * 6 * B
              : B < 1 / 2
                ? S
                : B < 2 / 3
                  ? ee + (S - ee) * (2 / 3 - B) * 6
                  : ee
          ),
          "hue2rgb",
        ),
        V = d < 0.5 ? d * (1 + n) : d + n - d * n,
        T = 2 * d - V,
        N = p(T, V, e + 1 / 3),
        K = p(T, V, e),
        y = p(T, V, e - 1 / 3);
      return new ue(
        Math.round(N * 255),
        Math.round(K * 255),
        Math.round(y * 255),
      );
    }
    static RED = new ue(255, 0, 0);
    static GREEN = new ue(0, 255, 0);
    static BLUE = new ue(0, 0, 255);
    static YELLOW = new ue(255, 255, 0);
    static MAGENTA = new ue(255, 0, 255);
    static CYAN = new ue(0, 255, 255);
    static WHITE = new ue(255, 255, 255);
    static BLACK = new ue(0, 0, 0);
    clone() {
      return new ue(this.r, this.g, this.b);
    }
    lighten(e) {
      return new ue(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
      return this.lighten(-e);
    }
    invert() {
      return new ue(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
      return new ue(
        (this.r * e.r) / 255,
        (this.g * e.g) / 255,
        (this.b * e.b) / 255,
      );
    }
    lerp(e, n) {
      return new ue(Ye(this.r, e.r, n), Ye(this.g, e.g, n), Ye(this.b, e.b, n));
    }
    toHSL() {
      let e = this.r / 255,
        n = this.g / 255,
        d = this.b / 255,
        p = Math.max(e, n, d),
        V = Math.min(e, n, d),
        T = (p + V) / 2,
        N = T,
        K = T;
      if (p == V) T = N = 0;
      else {
        let y = p - V;
        switch (((N = K > 0.5 ? y / (2 - p - V) : y / (p + V)), p)) {
          case e:
            T = (n - d) / y + (n < d ? 6 : 0);
            break;
          case n:
            T = (d - e) / y + 2;
            break;
          case d:
            T = (e - n) / y + 4;
            break;
        }
        T /= 6;
      }
      return [T, N, K];
    }
    eq(e) {
      return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return (
        "#" +
        ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
          .toString(16)
          .slice(1)
      );
    }
  };
  function _(...r) {
    if (r.length === 0) return new re(255, 255, 255);
    if (r.length === 1) {
      if (r[0] instanceof re) return r[0].clone();
      if (typeof r[0] == "string") return re.fromHex(r[0]);
      if (Array.isArray(r[0]) && r[0].length === 3) return re.fromArray(r[0]);
    }
    return new re(...r);
  }
  o(_, "rgb");
  var Us = o((r, e, n) => re.fromHSL(r, e, n), "hsl2rgb"),
    ge = class Jr {
      static {
        o(this, "Quad");
      }
      x = 0;
      y = 0;
      w = 1;
      h = 1;
      constructor(e, n, d, p) {
        (this.x = e), (this.y = n), (this.w = d), (this.h = p);
      }
      scale(e) {
        return new Jr(
          this.x + this.w * e.x,
          this.y + this.h * e.y,
          this.w * e.w,
          this.h * e.h,
        );
      }
      pos() {
        return new b(this.x, this.y);
      }
      clone() {
        return new Jr(this.x, this.y, this.w, this.h);
      }
      eq(e) {
        return (
          this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h
        );
      }
      toString() {
        return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
      }
    };
  function he(r, e, n, d) {
    return new ge(r, e, n, d);
  }
  o(he, "quad");
  var Ne = class qe {
    static {
      o(this, "Mat4");
    }
    m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    constructor(e) {
      e && (this.m = e);
    }
    static translate(e) {
      return new qe([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
    }
    static scale(e) {
      return new qe([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(e) {
      e = Ue(-e);
      let n = Math.cos(e),
        d = Math.sin(e);
      return new qe([1, 0, 0, 0, 0, n, -d, 0, 0, d, n, 0, 0, 0, 0, 1]);
    }
    static rotateY(e) {
      e = Ue(-e);
      let n = Math.cos(e),
        d = Math.sin(e);
      return new qe([n, 0, d, 0, 0, 1, 0, 0, -d, 0, n, 0, 0, 0, 0, 1]);
    }
    static rotateZ(e) {
      e = Ue(-e);
      let n = Math.cos(e),
        d = Math.sin(e);
      return new qe([n, -d, 0, 0, d, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(e) {
      return (
        (this.m[12] += this.m[0] * e.x + this.m[4] * e.y),
        (this.m[13] += this.m[1] * e.x + this.m[5] * e.y),
        (this.m[14] += this.m[2] * e.x + this.m[6] * e.y),
        (this.m[15] += this.m[3] * e.x + this.m[7] * e.y),
        this
      );
    }
    scale(e) {
      return (
        (this.m[0] *= e.x),
        (this.m[4] *= e.y),
        (this.m[1] *= e.x),
        (this.m[5] *= e.y),
        (this.m[2] *= e.x),
        (this.m[6] *= e.y),
        (this.m[3] *= e.x),
        (this.m[7] *= e.y),
        this
      );
    }
    rotate(e) {
      e = Ue(-e);
      let n = Math.cos(e),
        d = Math.sin(e),
        p = this.m[0],
        V = this.m[1],
        T = this.m[4],
        N = this.m[5];
      return (
        (this.m[0] = p * n + V * d),
        (this.m[1] = -p * d + V * n),
        (this.m[4] = T * n + N * d),
        (this.m[5] = -T * d + N * n),
        this
      );
    }
    mult(e) {
      let n = [];
      for (let d = 0; d < 4; d++)
        for (let p = 0; p < 4; p++)
          n[d * 4 + p] =
            this.m[0 * 4 + p] * e.m[d * 4 + 0] +
            this.m[1 * 4 + p] * e.m[d * 4 + 1] +
            this.m[2 * 4 + p] * e.m[d * 4 + 2] +
            this.m[3 * 4 + p] * e.m[d * 4 + 3];
      return new qe(n);
    }
    multVec2(e) {
      return new b(
        e.x * this.m[0] + e.y * this.m[4] + this.m[12],
        e.x * this.m[1] + e.y * this.m[5] + this.m[13],
      );
    }
    getTranslation() {
      return new b(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
          n = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new b(n, e / n);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
          n = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new b(e / n, n);
      } else return new b(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return bt(
          this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e),
        );
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return bt(
          Math.PI / 2 -
            (this.m[5] > 0
              ? Math.acos(-this.m[4] / e)
              : -Math.acos(this.m[4] / e)),
        );
      } else return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new b(
          Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e),
          0,
        );
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new b(
          0,
          Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e),
        );
      } else return new b(0, 0);
    }
    invert() {
      let e = [],
        n = this.m[10] * this.m[15] - this.m[14] * this.m[11],
        d = this.m[9] * this.m[15] - this.m[13] * this.m[11],
        p = this.m[9] * this.m[14] - this.m[13] * this.m[10],
        V = this.m[8] * this.m[15] - this.m[12] * this.m[11],
        T = this.m[8] * this.m[14] - this.m[12] * this.m[10],
        N = this.m[8] * this.m[13] - this.m[12] * this.m[9],
        K = this.m[6] * this.m[15] - this.m[14] * this.m[7],
        y = this.m[5] * this.m[15] - this.m[13] * this.m[7],
        ee = this.m[5] * this.m[14] - this.m[13] * this.m[6],
        S = this.m[4] * this.m[15] - this.m[12] * this.m[7],
        B = this.m[4] * this.m[14] - this.m[12] * this.m[6],
        v = this.m[5] * this.m[15] - this.m[13] * this.m[7],
        Q = this.m[4] * this.m[13] - this.m[12] * this.m[5],
        ie = this.m[6] * this.m[11] - this.m[10] * this.m[7],
        Z = this.m[5] * this.m[11] - this.m[9] * this.m[7],
        L = this.m[5] * this.m[10] - this.m[9] * this.m[6],
        ce = this.m[4] * this.m[11] - this.m[8] * this.m[7],
        R = this.m[4] * this.m[10] - this.m[8] * this.m[6],
        Pe = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      (e[0] = this.m[5] * n - this.m[6] * d + this.m[7] * p),
        (e[4] = -(this.m[4] * n - this.m[6] * V + this.m[7] * T)),
        (e[8] = this.m[4] * d - this.m[5] * V + this.m[7] * N),
        (e[12] = -(this.m[4] * p - this.m[5] * T + this.m[6] * N)),
        (e[1] = -(this.m[1] * n - this.m[2] * d + this.m[3] * p)),
        (e[5] = this.m[0] * n - this.m[2] * V + this.m[3] * T),
        (e[9] = -(this.m[0] * d - this.m[1] * V + this.m[3] * N)),
        (e[13] = this.m[0] * p - this.m[1] * T + this.m[2] * N),
        (e[2] = this.m[1] * K - this.m[2] * y + this.m[3] * ee),
        (e[6] = -(this.m[0] * K - this.m[2] * S + this.m[3] * B)),
        (e[10] = this.m[0] * v - this.m[1] * S + this.m[3] * Q),
        (e[14] = -(this.m[0] * ee - this.m[1] * B + this.m[2] * Q)),
        (e[3] = -(this.m[1] * ie - this.m[2] * Z + this.m[3] * L)),
        (e[7] = this.m[0] * ie - this.m[2] * ce + this.m[3] * R),
        (e[11] = -(this.m[0] * Z - this.m[1] * ce + this.m[3] * Pe)),
        (e[15] = this.m[0] * L - this.m[1] * R + this.m[2] * Pe);
      let j =
        this.m[0] * e[0] +
        this.m[1] * e[4] +
        this.m[2] * e[8] +
        this.m[3] * e[12];
      for (let Ee = 0; Ee < 4; Ee++)
        for (let me = 0; me < 4; me++) e[Ee * 4 + me] *= 1 / j;
      return new qe(e);
    }
    clone() {
      return new qe([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  };
  function Xr(r, e, n, d = (p) => -Math.cos(p)) {
    return r + ((d(n) + 1) / 2) * (e - r);
  }
  o(Xr, "wave");
  var Ls = 1103515245,
    Gs = 12345,
    yn = 2147483648,
    Nn = class {
      static {
        o(this, "RNG");
      }
      seed;
      constructor(r) {
        this.seed = r;
      }
      gen() {
        return (this.seed = (Ls * this.seed + Gs) % yn), this.seed / yn;
      }
      genNumber(r, e) {
        return r + this.gen() * (e - r);
      }
      genVec2(r, e) {
        return new b(this.genNumber(r.x, e.x), this.genNumber(r.y, e.y));
      }
      genColor(r, e) {
        return new re(
          this.genNumber(r.r, e.r),
          this.genNumber(r.g, e.g),
          this.genNumber(r.b, e.b),
        );
      }
      genAny(...r) {
        if (r.length === 0) return this.gen();
        if (r.length === 1) {
          if (typeof r[0] == "number") return this.genNumber(0, r[0]);
          if (r[0] instanceof b) return this.genVec2(P(0, 0), r[0]);
          if (r[0] instanceof re) return this.genColor(_(0, 0, 0), r[0]);
        } else if (r.length === 2) {
          if (typeof r[0] == "number" && typeof r[1] == "number")
            return this.genNumber(r[0], r[1]);
          if (r[0] instanceof b && r[1] instanceof b)
            return this.genVec2(r[0], r[1]);
          if (r[0] instanceof re && r[1] instanceof re)
            return this.genColor(r[0], r[1]);
        }
      }
    },
    Wr = new Nn(Date.now());
  function Un(r) {
    return r != null && (Wr.seed = r), Wr.seed;
  }
  o(Un, "randSeed");
  function _t(...r) {
    return Wr.genAny(...r);
  }
  o(_t, "rand");
  function ni(...r) {
    return Math.floor(_t(...r));
  }
  o(ni, "randi");
  function Ln(r) {
    return _t() <= r;
  }
  o(Ln, "chance");
  function Gn(r) {
    return r[ni(r.length)];
  }
  o(Gn, "choose");
  function On(r, e) {
    return (
      r.pos.x + r.width > e.pos.x &&
      r.pos.x < e.pos.x + e.width &&
      r.pos.y + r.height > e.pos.y &&
      r.pos.y < e.pos.y + e.height
    );
  }
  o(On, "testRectRect");
  function Hn(r, e) {
    if (
      (r.p1.x === r.p2.x && r.p1.y === r.p2.y) ||
      (e.p1.x === e.p2.x && e.p1.y === e.p2.y)
    )
      return null;
    let n =
      (e.p2.y - e.p1.y) * (r.p2.x - r.p1.x) -
      (e.p2.x - e.p1.x) * (r.p2.y - r.p1.y);
    if (n === 0) return null;
    let d =
        ((e.p2.x - e.p1.x) * (r.p1.y - e.p1.y) -
          (e.p2.y - e.p1.y) * (r.p1.x - e.p1.x)) /
        n,
      p =
        ((r.p2.x - r.p1.x) * (r.p1.y - e.p1.y) -
          (r.p2.y - r.p1.y) * (r.p1.x - e.p1.x)) /
        n;
    return d < 0 || d > 1 || p < 0 || p > 1 ? null : d;
  }
  o(Hn, "testLineLineT");
  function xt(r, e) {
    let n = Hn(r, e);
    return n
      ? P(r.p1.x + n * (r.p2.x - r.p1.x), r.p1.y + n * (r.p2.y - r.p1.y))
      : null;
  }
  o(xt, "testLineLine");
  function qn(r, e) {
    if ($t(r, e.p1) || $t(r, e.p2)) return !0;
    let n = r.points();
    return (
      !!xt(e, new Et(n[0], n[1])) ||
      !!xt(e, new Et(n[1], n[2])) ||
      !!xt(e, new Et(n[2], n[3])) ||
      !!xt(e, new Et(n[3], n[0]))
    );
  }
  o(qn, "testRectLine");
  function $t(r, e) {
    return (
      e.x > r.pos.x &&
      e.x < r.pos.x + r.width &&
      e.y > r.pos.y &&
      e.y < r.pos.y + r.height
    );
  }
  o($t, "testRectPoint");
  function Kn(r, e) {
    let n = e.sub(r.p1),
      d = r.p2.sub(r.p1);
    if (Math.abs(n.cross(d)) > Number.EPSILON) return !1;
    let p = n.dot(d) / d.dot(d);
    return p >= 0 && p <= 1;
  }
  o(Kn, "testLinePoint");
  function si(r, e) {
    let n = r.p2.sub(r.p1),
      d = n.dot(n),
      p = r.p1.sub(e.center),
      V = 2 * n.dot(p),
      T = p.dot(p) - e.radius * e.radius,
      N = V * V - 4 * d * T;
    if (d <= Number.EPSILON || N < 0) return !1;
    if (N == 0) {
      let K = -V / (2 * d);
      if (K >= 0 && K <= 1) return !0;
    } else {
      let K = (-V + Math.sqrt(N)) / (2 * d),
        y = (-V - Math.sqrt(N)) / (2 * d);
      if ((K >= 0 && K <= 1) || (y >= 0 && y <= 1)) return !0;
    }
    return oi(e, r.p1);
  }
  o(si, "testLineCircle");
  function oi(r, e) {
    return r.center.sdist(e) < r.radius * r.radius;
  }
  o(oi, "testCirclePoint");
  function Yn(r, e) {
    let n = e.pts[e.pts.length - 1];
    for (let d of e.pts) {
      if (si(new Et(n, d), r)) return !0;
      n = d;
    }
    return oi(r, e.pts[0]) ? !0 : ai(e, r.center);
  }
  o(Yn, "testCirclePolygon");
  function ai(r, e) {
    let n = !1,
      d = r.pts;
    for (let p = 0, V = d.length - 1; p < d.length; V = p++)
      d[p].y > e.y != d[V].y > e.y &&
        e.x <
          ((d[V].x - d[p].x) * (e.y - d[p].y)) / (d[V].y - d[p].y) + d[p].x &&
        (n = !n);
    return n;
  }
  o(ai, "testPolygonPoint");
  var Et = class Zr {
      static {
        o(this, "Line");
      }
      p1;
      p2;
      constructor(e, n) {
        (this.p1 = e.clone()), (this.p2 = n.clone());
      }
      transform(e) {
        return new Zr(e.multVec2(this.p1), e.multVec2(this.p2));
      }
      bbox() {
        return ve.fromPoints(this.p1, this.p2);
      }
      area() {
        return this.p1.dist(this.p2);
      }
      clone() {
        return new Zr(this.p1, this.p2);
      }
    },
    ve = class _r {
      static {
        o(this, "Rect");
      }
      pos;
      width;
      height;
      constructor(e, n, d) {
        (this.pos = e.clone()), (this.width = n), (this.height = d);
      }
      static fromPoints(e, n) {
        return new _r(e.clone(), n.x - e.x, n.y - e.y);
      }
      center() {
        return new b(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
      }
      points() {
        return [
          this.pos,
          this.pos.add(this.width, 0),
          this.pos.add(this.width, this.height),
          this.pos.add(0, this.height),
        ];
      }
      transform(e) {
        return new Jt(this.points().map((n) => e.multVec2(n)));
      }
      bbox() {
        return this.clone();
      }
      area() {
        return this.width * this.height;
      }
      clone() {
        return new _r(this.pos.clone(), this.width, this.height);
      }
      distToPoint(e) {
        return Math.sqrt(this.sdistToPoint(e));
      }
      sdistToPoint(e) {
        let n = this.pos,
          d = this.pos.add(this.width, this.height),
          p = Math.max(n.x - e.x, 0, e.x - d.x),
          V = Math.max(n.y - e.y, 0, e.y - d.y);
        return p * p + V * V;
      }
    },
    xn = class jn {
      static {
        o(this, "Circle");
      }
      center;
      radius;
      constructor(e, n) {
        (this.center = e.clone()), (this.radius = n);
      }
      transform(e) {
        return new Os(this.center, this.radius, this.radius).transform(e);
      }
      bbox() {
        return ve.fromPoints(
          this.center.sub(P(this.radius)),
          this.center.add(P(this.radius)),
        );
      }
      area() {
        return this.radius * this.radius * Math.PI;
      }
      clone() {
        return new jn(this.center, this.radius);
      }
    },
    Os = class $r {
      static {
        o(this, "Ellipse");
      }
      center;
      radiusX;
      radiusY;
      constructor(e, n, d) {
        (this.center = e.clone()), (this.radiusX = n), (this.radiusY = d);
      }
      transform(e) {
        return new $r(
          e.multVec2(this.center),
          e.m[0] * this.radiusX,
          e.m[5] * this.radiusY,
        );
      }
      bbox() {
        return ve.fromPoints(
          this.center.sub(P(this.radiusX, this.radiusY)),
          this.center.add(P(this.radiusX, this.radiusY)),
        );
      }
      area() {
        return this.radiusX * this.radiusY * Math.PI;
      }
      clone() {
        return new $r(this.center, this.radiusX, this.radiusY);
      }
    },
    Jt = class ei {
      static {
        o(this, "Polygon");
      }
      pts;
      constructor(e) {
        if (e.length < 3)
          throw new Error("Polygons should have at least 3 vertices");
        this.pts = e;
      }
      transform(e) {
        return new ei(this.pts.map((n) => e.multVec2(n)));
      }
      bbox() {
        let e = P(Number.MAX_VALUE),
          n = P(-Number.MAX_VALUE);
        for (let d of this.pts)
          (e.x = Math.min(e.x, d.x)),
            (n.x = Math.max(n.x, d.x)),
            (e.y = Math.min(e.y, d.y)),
            (n.y = Math.max(n.y, d.y));
        return ve.fromPoints(e, n);
      }
      area() {
        let e = 0,
          n = this.pts.length;
        for (let d = 0; d < n; d++) {
          let p = this.pts[d],
            V = this.pts[(d + 1) % n];
          (e += p.x * V.y * 0.5), (e -= V.x * p.y * 0.5);
        }
        return Math.abs(e);
      }
      clone() {
        return new ei(this.pts.map((e) => e.clone()));
      }
    };
  function Qn(r, e) {
    let n = Number.MAX_VALUE,
      d = P(0);
    for (let p of [r, e])
      for (let V = 0; V < p.pts.length; V++) {
        let T = p.pts[V],
          N = p.pts[(V + 1) % p.pts.length].sub(T).normal().unit(),
          K = Number.MAX_VALUE,
          y = -Number.MAX_VALUE;
        for (let v = 0; v < r.pts.length; v++) {
          let Q = r.pts[v].dot(N);
          (K = Math.min(K, Q)), (y = Math.max(y, Q));
        }
        let ee = Number.MAX_VALUE,
          S = -Number.MAX_VALUE;
        for (let v = 0; v < e.pts.length; v++) {
          let Q = e.pts[v].dot(N);
          (ee = Math.min(ee, Q)), (S = Math.max(S, Q));
        }
        let B = Math.min(y, S) - Math.max(K, ee);
        if (B < 0) return null;
        if (B < Math.abs(n)) {
          let v = S - K,
            Q = ee - y;
          (n = Math.abs(v) < Math.abs(Q) ? v : Q), (d = N.scale(n));
        }
      }
    return d;
  }
  o(Qn, "sat");
  var zn = class extends Map {
      static {
        o(this, "Registry");
      }
      lastID;
      constructor(...r) {
        super(...r), (this.lastID = 0);
      }
      push(r) {
        let e = this.lastID;
        return this.set(e, r), this.lastID++, e;
      }
      pushd(r) {
        let e = this.push(r);
        return () => this.delete(e);
      }
    },
    yt = class Jn {
      static {
        o(this, "EventController");
      }
      paused = !1;
      cancel;
      constructor(e) {
        this.cancel = e;
      }
      static join(e) {
        let n = new Jn(() => e.forEach((d) => d.cancel()));
        return (
          Object.defineProperty(n, "paused", {
            get: () => e[0].paused,
            set: (d) => e.forEach((p) => (p.paused = d)),
          }),
          (n.paused = !1),
          n
        );
      }
    },
    Ie = class {
      static {
        o(this, "Event");
      }
      handlers = new zn();
      add(r) {
        let e = this.handlers.pushd((...d) => {
            n.paused || r(...d);
          }),
          n = new yt(e);
        return n;
      }
      addOnce(r) {
        let e = this.add((...n) => {
          e.cancel(), r(...n);
        });
        return e;
      }
      next() {
        return new Promise((r) => this.addOnce(r));
      }
      trigger(...r) {
        this.handlers.forEach((e) => e(...r));
      }
      numListeners() {
        return this.handlers.size;
      }
      clear() {
        this.handlers.clear();
      }
    },
    Xt = class {
      static {
        o(this, "EventHandler");
      }
      handlers = {};
      on(r, e) {
        return (
          this.handlers[r] || (this.handlers[r] = new Ie()),
          this.handlers[r].add(e)
        );
      }
      onOnce(r, e) {
        let n = this.on(r, (...d) => {
          n.cancel(), e(...d);
        });
        return n;
      }
      next(r) {
        return new Promise((e) => {
          this.onOnce(r, (...n) => e(n[0]));
        });
      }
      trigger(r, ...e) {
        this.handlers[r] && this.handlers[r].trigger(...e);
      }
      remove(r) {
        delete this.handlers[r];
      }
      clear() {
        this.handlers = {};
      }
      numListeners(r) {
        return this.handlers[r]?.numListeners() ?? 0;
      }
    };
  function vr(r, e) {
    if (r === e) return !0;
    let n = typeof r,
      d = typeof e;
    if (n !== d) return !1;
    if (n === "object" && d === "object" && r !== null && e !== null) {
      if (Array.isArray(r) !== Array.isArray(e)) return !1;
      let p = Object.keys(r),
        V = Object.keys(e);
      if (p.length !== V.length) return !1;
      for (let T of p) {
        let N = r[T],
          K = e[T];
        if (!vr(N, K)) return !1;
      }
      return !0;
    }
    return !1;
  }
  o(vr, "deepEq");
  function Xn(r) {
    let e = window.atob(r),
      n = e.length,
      d = new Uint8Array(n);
    for (let p = 0; p < n; p++) d[p] = e.charCodeAt(p);
    return d.buffer;
  }
  o(Xn, "base64ToArrayBuffer");
  function Wn(r) {
    return Xn(r.split(",")[1]);
  }
  o(Wn, "dataURLToArrayBuffer");
  function yr(r, e) {
    let n = document.createElement("a");
    (n.href = e), (n.download = r), n.click();
  }
  o(yr, "download");
  function hi(r, e) {
    yr(r, "data:text/plain;charset=utf-8," + e);
  }
  o(hi, "downloadText");
  function Zn(r, e) {
    hi(r, JSON.stringify(e));
  }
  o(Zn, "downloadJSON");
  function ti(r, e) {
    let n = URL.createObjectURL(e);
    yr(r, n), URL.revokeObjectURL(n);
  }
  o(ti, "downloadBlob");
  var En = o((r) => r.match(/^data:\w+\/\w+;base64,.+/), "isDataURL"),
    Hs = o((r) => r.split(".").slice(0, -1).join("."), "getFileName");
  function Me(r, e) {
    return (...n) => {
      let d = n.length;
      if (d === r.length) return r(...n);
      if (d === e.length) return e(...n);
    };
  }
  o(Me, "overload2");
  var qs = (() => {
      let r = 0;
      return () => r++;
    })(),
    Ks = o(
      (r) => (r instanceof Error ? r.message : String(r)),
      "getErrorMessage",
    ),
    Ys = class {
      static {
        o(this, "BinaryHeap");
      }
      _items;
      _compareFn;
      constructor(r = (e, n) => e < n) {
        (this._compareFn = r), (this._items = []);
      }
      insert(r) {
        this._items.push(r), this.moveUp(this._items.length - 1);
      }
      remove() {
        if (this._items.length === 0) return null;
        let r = this._items[0],
          e = this._items.pop();
        return (
          this._items.length !== 0 && ((this._items[0] = e), this.moveDown(0)),
          r
        );
      }
      clear() {
        this._items.splice(0, this._items.length);
      }
      moveUp(r) {
        for (; r > 0; ) {
          let e = Math.floor((r - 1) / 2);
          if (
            !this._compareFn(this._items[r], this._items[e]) &&
            this._items[r] >= this._items[e]
          )
            break;
          this.swap(r, e), (r = e);
        }
      }
      moveDown(r) {
        for (; r < Math.floor(this._items.length / 2); ) {
          let e = 2 * r + 1;
          if (
            (e < this._items.length - 1 &&
              !this._compareFn(this._items[e], this._items[e + 1]) &&
              ++e,
            this._compareFn(this._items[r], this._items[e]))
          )
            break;
          this.swap(r, e), (r = e);
        }
      }
      swap(r, e) {
        [this._items[r], this._items[e]] = [this._items[e], this._items[r]];
      }
      get length() {
        return this._items.length;
      }
    },
    js = Object.freeze([
      776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449,
      4520,
    ]);
  function _n(r) {
    if (typeof r != "string")
      throw new TypeError("string cannot be undefined or null");
    let e = [],
      n = 0,
      d = 0;
    for (; n < r.length; ) {
      if (
        ((d += $n(n + d, r)),
        os(r[n + d]) && d++,
        is(r[n + d]) && d++,
        ns(r[n + d]) && d++,
        as(r[n + d]))
      ) {
        d++;
        continue;
      }
      e.push(r.substring(n, n + d)), (n += d), (d = 0);
    }
    return e;
  }
  o(_n, "runes");
  function $n(r, e) {
    let n = e[r];
    if (!es(n) || r === e.length - 1) return 1;
    let d = n + e[r + 1],
      p = e.substring(r + 2, r + 5);
    return ri(d) && ri(p)
      ? 4
      : ts(d) && ss(p)
        ? e.slice(r).indexOf(String.fromCodePoint(917631)) + 2
        : rs(p)
          ? 4
          : 2;
  }
  o($n, "nextUnits");
  function es(r) {
    return r && _e(r[0].charCodeAt(0), 55296, 56319);
  }
  o(es, "isFirstOfSurrogatePair");
  function ri(r) {
    return _e(xr(r), 127462, 127487);
  }
  o(ri, "isRegionalIndicator");
  function ts(r) {
    return _e(xr(r), 127988, 127988);
  }
  o(ts, "isSubdivisionFlag");
  function rs(r) {
    return _e(xr(r), 127995, 127999);
  }
  o(rs, "isFitzpatrickModifier");
  function is(r) {
    return typeof r == "string" && _e(r.charCodeAt(0), 65024, 65039);
  }
  o(is, "isVariationSelector");
  function ns(r) {
    return typeof r == "string" && _e(r.charCodeAt(0), 8400, 8447);
  }
  o(ns, "isDiacriticalMark");
  function ss(r) {
    let e = r.codePointAt(0);
    return (
      typeof r == "string" && typeof e == "number" && _e(e, 917504, 917631)
    );
  }
  o(ss, "isSupplementarySpecialpurposePlane");
  function os(r) {
    return typeof r == "string" && js.includes(r.charCodeAt(0));
  }
  o(os, "isGrapheme");
  function as(r) {
    return typeof r == "string" && r.charCodeAt(0) === 8205;
  }
  o(as, "isZeroWidthJoiner");
  function xr(r) {
    let e = r.charCodeAt(0) - 55296,
      n = r.charCodeAt(1) - 56320;
    return (e << 10) + n + 65536;
  }
  o(xr, "codePointFromSurrogatePair");
  function _e(r, e, n) {
    return r >= e && r <= n;
  }
  o(_e, "betweenInclusive");
  var bn = {
      "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": {
        buttons: {
          0: "south",
          1: "east",
          2: "west",
          3: "north",
          4: "lshoulder",
          5: "rshoulder",
          6: "ltrigger",
          7: "rtrigger",
          8: "select",
          9: "start",
          10: "lstick",
          11: "rstick",
          12: "dpad-up",
          13: "dpad-down",
          14: "dpad-left",
          15: "dpad-right",
          16: "home",
          17: "capture",
        },
        sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
      },
      "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": {
        buttons: {
          0: "south",
          1: "east",
          2: "west",
          3: "north",
          4: "lshoulder",
          5: "rshoulder",
          9: "select",
          10: "lstick",
          16: "start",
        },
        sticks: { left: { x: 0, y: 1 } },
      },
      "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": {
        buttons: {
          0: "south",
          1: "east",
          2: "west",
          3: "north",
          4: "lshoulder",
          5: "rshoulder",
          9: "start",
          10: "lstick",
          16: "select",
        },
        sticks: { left: { x: 0, y: 1 } },
      },
      "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": {
        buttons: {
          0: "south",
          1: "east",
          2: "west",
          3: "north",
          4: "lshoulder",
          5: "rshoulder",
          6: "ltrigger",
          7: "rtrigger",
          8: "select",
          9: "start",
          10: "lstick",
          11: "rstick",
          12: "dpad-up",
          13: "dpad-down",
          14: "dpad-left",
          15: "dpad-right",
          16: "home",
          17: "capture",
        },
        sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
      },
      default: {
        buttons: {
          0: "south",
          1: "east",
          2: "west",
          3: "north",
          4: "lshoulder",
          5: "rshoulder",
          6: "ltrigger",
          7: "rtrigger",
          8: "select",
          9: "start",
          10: "lstick",
          11: "rstick",
          12: "dpad-up",
          13: "dpad-down",
          14: "dpad-left",
          15: "dpad-right",
          16: "home",
        },
        sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
      },
    },
    Ar = class {
      static {
        o(this, "ButtonState");
      }
      pressed = new Set([]);
      pressedRepeat = new Set([]);
      released = new Set([]);
      down = new Set([]);
      update() {
        this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
      }
      press(r) {
        this.pressed.add(r), this.pressedRepeat.add(r), this.down.add(r);
      }
      pressRepeat(r) {
        this.pressedRepeat.add(r);
      }
      release(r) {
        this.down.delete(r), this.pressed.delete(r), this.released.add(r);
      }
    },
    Qs = class {
      static {
        o(this, "GamepadState");
      }
      buttonState = new Ar();
      stickState = new Map();
    },
    zs = class {
      static {
        o(this, "FPSCounter");
      }
      dts = [];
      timer = 0;
      fps = 0;
      tick(r) {
        this.dts.push(r),
          (this.timer += r),
          this.timer >= 1 &&
            ((this.timer = 0),
            (this.fps = Math.round(
              1 / (this.dts.reduce((e, n) => e + n) / this.dts.length),
            )),
            (this.dts = []));
      }
    },
    Js = o((r) => {
      if (!r.canvas) throw new Error("Please provide a canvas");
      let e = {
        canvas: r.canvas,
        loopID: null,
        stopped: !1,
        dt: 0,
        time: 0,
        realTime: 0,
        fpsCounter: new zs(),
        timeScale: 1,
        skipTime: !1,
        numFrames: 0,
        mousePos: new b(0),
        mouseDeltaPos: new b(0),
        keyState: new Ar(),
        mouseState: new Ar(),
        mergedGamepadState: new Qs(),
        gamepadStates: new Map(),
        gamepads: [],
        charInputted: [],
        isMouseMoved: !1,
        lastWidth: r.canvas.offsetWidth,
        lastHeight: r.canvas.offsetHeight,
        events: new Xt(),
      };
      function n() {
        return e.dt * e.timeScale;
      }
      o(n, "dt");
      function d() {
        return e.time;
      }
      o(d, "time");
      function p() {
        return e.fpsCounter.fps;
      }
      o(p, "fps");
      function V() {
        return e.numFrames;
      }
      o(V, "numFrames");
      function T() {
        return e.canvas.toDataURL();
      }
      o(T, "screenshot");
      function N(f) {
        e.canvas.style.cursor = f;
      }
      o(N, "setCursor");
      function K() {
        return e.canvas.style.cursor;
      }
      o(K, "getCursor");
      function y(f) {
        if (f)
          try {
            let x = e.canvas.requestPointerLock();
            x.catch && x.catch((M) => console.error(M));
          } catch (x) {
            console.error(x);
          }
        else document.exitPointerLock();
      }
      o(y, "setCursorLocked");
      function ee() {
        return !!document.pointerLockElement;
      }
      o(ee, "isCursorLocked");
      function S(f) {
        f.requestFullscreen
          ? f.requestFullscreen()
          : f.webkitRequestFullscreen && f.webkitRequestFullscreen();
      }
      o(S, "enterFullscreen");
      function B() {
        document.exitFullscreen
          ? document.exitFullscreen()
          : document.webkitExitFullScreen && document.webkitExitFullScreen();
      }
      o(B, "exitFullscreen");
      function v() {
        return document.fullscreenElement || document.webkitFullscreenElement;
      }
      o(v, "getFullscreenElement");
      function Q(f = !0) {
        f ? S(e.canvas) : B();
      }
      o(Q, "setFullscreen");
      function ie() {
        return !!v();
      }
      o(ie, "isFullscreen");
      function Z() {
        e.stopped = !0;
        for (let f in ne) e.canvas.removeEventListener(f, ne[f]);
        for (let f in le) document.removeEventListener(f, le[f]);
        for (let f in oe) window.removeEventListener(f, oe[f]);
        we.disconnect();
      }
      o(Z, "quit");
      function L(f) {
        e.loopID !== null && cancelAnimationFrame(e.loopID);
        let x = 0,
          M = o((Y) => {
            if (e.stopped) return;
            if (document.visibilityState !== "visible") {
              e.loopID = requestAnimationFrame(M);
              return;
            }
            let z = Y / 1e3,
              de = z - e.realTime,
              be = r.maxFPS ? 1 / r.maxFPS : 0;
            (e.realTime = z),
              (x += de),
              x > be &&
                (e.skipTime ||
                  ((e.dt = x), (e.time += n()), e.fpsCounter.tick(e.dt)),
                (x = 0),
                (e.skipTime = !1),
                e.numFrames++,
                it(),
                f(),
                Ut()),
              (e.loopID = requestAnimationFrame(M));
          }, "frame");
        M(0);
      }
      o(L, "run");
      function ce() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
      o(ce, "isTouchscreen");
      function R() {
        return e.mousePos.clone();
      }
      o(R, "mousePos");
      function Pe() {
        return e.mouseDeltaPos.clone();
      }
      o(Pe, "mouseDeltaPos");
      function j(f = "left") {
        return e.mouseState.pressed.has(f);
      }
      o(j, "isMousePressed");
      function Ee(f = "left") {
        return e.mouseState.down.has(f);
      }
      o(Ee, "isMouseDown");
      function me(f = "left") {
        return e.mouseState.released.has(f);
      }
      o(me, "isMouseReleased");
      function ye() {
        return e.isMouseMoved;
      }
      o(ye, "isMouseMoved");
      function je(f) {
        return f === void 0
          ? e.keyState.pressed.size > 0
          : e.keyState.pressed.has(f);
      }
      o(je, "isKeyPressed");
      function St(f) {
        return f === void 0
          ? e.keyState.pressedRepeat.size > 0
          : e.keyState.pressedRepeat.has(f);
      }
      o(St, "isKeyPressedRepeat");
      function ht(f) {
        return f === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(f);
      }
      o(ht, "isKeyDown");
      function lt(f) {
        return f === void 0
          ? e.keyState.released.size > 0
          : e.keyState.released.has(f);
      }
      o(lt, "isKeyReleased");
      function ut(f) {
        return f === void 0
          ? e.mergedGamepadState.buttonState.pressed.size > 0
          : e.mergedGamepadState.buttonState.pressed.has(f);
      }
      o(ut, "isGamepadButtonPressed");
      function Le(f) {
        return f === void 0
          ? e.mergedGamepadState.buttonState.down.size > 0
          : e.mergedGamepadState.buttonState.down.has(f);
      }
      o(Le, "isGamepadButtonDown");
      function Rt(f) {
        return f === void 0
          ? e.mergedGamepadState.buttonState.released.size > 0
          : e.mergedGamepadState.buttonState.released.has(f);
      }
      o(Rt, "isGamepadButtonReleased");
      function Mt(f) {
        return e.events.on("resize", f);
      }
      o(Mt, "onResize");
      let er = Me(
          (f) => e.events.on("keyDown", f),
          (f, x) => e.events.on("keyDown", (M) => M === f && x(f)),
        ),
        tr = Me(
          (f) => e.events.on("keyPress", f),
          (f, x) => e.events.on("keyPress", (M) => M === f && x(f)),
        ),
        rr = Me(
          (f) => e.events.on("keyPressRepeat", f),
          (f, x) => e.events.on("keyPressRepeat", (M) => M === f && x(f)),
        ),
        ir = Me(
          (f) => e.events.on("keyRelease", f),
          (f, x) => e.events.on("keyRelease", (M) => M === f && x(f)),
        ),
        Pt = Me(
          (f) => e.events.on("mouseDown", (x) => f(x)),
          (f, x) => e.events.on("mouseDown", (M) => M === f && x(M)),
        ),
        Tt = Me(
          (f) => e.events.on("mousePress", (x) => f(x)),
          (f, x) => e.events.on("mousePress", (M) => M === f && x(M)),
        ),
        Ft = Me(
          (f) => e.events.on("mouseRelease", (x) => f(x)),
          (f, x) => e.events.on("mouseRelease", (M) => M === f && x(M)),
        );
      function dt(f) {
        return e.events.on("mouseMove", () => f(R(), Pe()));
      }
      o(dt, "onMouseMove");
      function ct(f) {
        return e.events.on("charInput", f);
      }
      o(ct, "onCharInput");
      function Bt(f) {
        return e.events.on("touchStart", f);
      }
      o(Bt, "onTouchStart");
      function $e(f) {
        return e.events.on("touchMove", f);
      }
      o($e, "onTouchMove");
      function Ct(f) {
        return e.events.on("touchEnd", f);
      }
      o(Ct, "onTouchEnd");
      function It(f) {
        return e.events.on("scroll", f);
      }
      o(It, "onScroll");
      function ft(f) {
        return e.events.on("hide", f);
      }
      o(ft, "onHide");
      function Dt(f) {
        return e.events.on("show", f);
      }
      o(Dt, "onShow");
      function pt(f, x) {
        if (typeof f == "function") return e.events.on("gamepadButtonDown", f);
        if (typeof f == "string" && typeof x == "function")
          return e.events.on("gamepadButtonDown", (M) => M === f && x(f));
      }
      o(pt, "onGamepadButtonDown");
      function gt(f, x) {
        if (typeof f == "function") return e.events.on("gamepadButtonPress", f);
        if (typeof f == "string" && typeof x == "function")
          return e.events.on("gamepadButtonPress", (M) => M === f && x(f));
      }
      o(gt, "onGamepadButtonPress");
      function kt(f, x) {
        if (typeof f == "function")
          return e.events.on("gamepadButtonRelease", f);
        if (typeof f == "string" && typeof x == "function")
          return e.events.on("gamepadButtonRelease", (M) => M === f && x(f));
      }
      o(kt, "onGamepadButtonRelease");
      function et(f, x) {
        return e.events.on("gamepadStick", (M, Y) => M === f && x(Y));
      }
      o(et, "onGamepadStick");
      function Nt(f) {
        e.events.on("gamepadConnect", f);
      }
      o(Nt, "onGamepadConnect");
      function tt(f) {
        e.events.on("gamepadDisconnect", f);
      }
      o(tt, "onGamepadDisconnect");
      function Te(f) {
        return e.mergedGamepadState.stickState.get(f) || new b(0);
      }
      o(Te, "getGamepadStick");
      function rt() {
        return [...e.charInputted];
      }
      o(rt, "charInputted");
      function mt() {
        return [...e.gamepads];
      }
      o(mt, "getGamepads");
      function it() {
        e.events.trigger("input"),
          e.keyState.down.forEach((f) => e.events.trigger("keyDown", f)),
          e.mouseState.down.forEach((f) => e.events.trigger("mouseDown", f)),
          De();
      }
      o(it, "processInput");
      function Ut() {
        e.keyState.update(),
          e.mouseState.update(),
          e.mergedGamepadState.buttonState.update(),
          e.mergedGamepadState.stickState.forEach((f, x) => {
            e.mergedGamepadState.stickState.set(x, new b(0));
          }),
          (e.charInputted = []),
          (e.isMouseMoved = !1),
          e.gamepadStates.forEach((f) => {
            f.buttonState.update(),
              f.stickState.forEach((x, M) => {
                f.stickState.set(M, new b(0));
              });
          });
      }
      o(Ut, "resetInput");
      function wt(f) {
        let x = {
          index: f.index,
          isPressed: (M) =>
            e.gamepadStates.get(f.index).buttonState.pressed.has(M),
          isDown: (M) => e.gamepadStates.get(f.index).buttonState.down.has(M),
          isReleased: (M) =>
            e.gamepadStates.get(f.index).buttonState.released.has(M),
          getStick: (M) => e.gamepadStates.get(f.index).stickState.get(M),
        };
        return (
          e.gamepads.push(x),
          e.gamepadStates.set(f.index, {
            buttonState: new Ar(),
            stickState: new Map([
              ["left", new b(0)],
              ["right", new b(0)],
            ]),
          }),
          x
        );
      }
      o(wt, "registerGamepad");
      function te(f) {
        (e.gamepads = e.gamepads.filter((x) => x.index !== f.index)),
          e.gamepadStates.delete(f.index);
      }
      o(te, "removeGamepad");
      function De() {
        for (let f of navigator.getGamepads())
          f && !e.gamepadStates.has(f.index) && wt(f);
        for (let f of e.gamepads) {
          let x = navigator.getGamepads()[f.index],
            M = (r.gamepads ?? {})[x.id] ?? bn[x.id] ?? bn.default,
            Y = e.gamepadStates.get(f.index);
          for (let z = 0; z < x.buttons.length; z++)
            x.buttons[z].pressed
              ? (Y.buttonState.down.has(M.buttons[z]) ||
                  (e.mergedGamepadState.buttonState.press(M.buttons[z]),
                  Y.buttonState.press(M.buttons[z]),
                  e.events.trigger("gamepadButtonPress", M.buttons[z])),
                e.events.trigger("gamepadButtonDown", M.buttons[z]))
              : Y.buttonState.down.has(M.buttons[z]) &&
                (e.mergedGamepadState.buttonState.release(M.buttons[z]),
                Y.buttonState.release(M.buttons[z]),
                e.events.trigger("gamepadButtonRelease", M.buttons[z]));
          for (let z in M.sticks) {
            let de = M.sticks[z],
              be = new b(x.axes[de.x], x.axes[de.y]);
            Y.stickState.set(z, be),
              e.mergedGamepadState.stickState.set(z, be),
              e.events.trigger("gamepadStick", z, be);
          }
        }
      }
      o(De, "processGamepad");
      let ne = {},
        le = {},
        oe = {},
        ke = r.pixelDensity || window.devicePixelRatio || 1;
      ne.mousemove = (f) => {
        let x = new b(f.offsetX, f.offsetY),
          M = new b(f.movementX, f.movementY);
        if (ie()) {
          let Y = e.canvas.width / ke,
            z = e.canvas.height / ke,
            de = window.innerWidth,
            be = window.innerHeight,
            Lt = de / be,
            Gt = Y / z;
          if (Lt > Gt) {
            let Be = be / z,
              Se = (de - Y * Be) / 2;
            (x.x = Ze(f.offsetX - Se, 0, Y * Be, 0, Y)),
              (x.y = Ze(f.offsetY, 0, z * Be, 0, z));
          } else {
            let Be = de / Y,
              Se = (be - z * Be) / 2;
            (x.x = Ze(f.offsetX, 0, Y * Be, 0, Y)),
              (x.y = Ze(f.offsetY - Se, 0, z * Be, 0, z));
          }
        }
        e.events.onOnce("input", () => {
          (e.isMouseMoved = !0),
            (e.mousePos = x),
            (e.mouseDeltaPos = M),
            e.events.trigger("mouseMove");
        });
      };
      let Qe = ["left", "middle", "right", "back", "forward"];
      (ne.mousedown = (f) => {
        e.events.onOnce("input", () => {
          let x = Qe[f.button];
          x && (e.mouseState.press(x), e.events.trigger("mousePress", x));
        });
      }),
        (ne.mouseup = (f) => {
          e.events.onOnce("input", () => {
            let x = Qe[f.button];
            x && (e.mouseState.release(x), e.events.trigger("mouseRelease", x));
          });
        });
      let nr = new Set([
          " ",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Tab",
        ]),
        Ge = {
          ArrowLeft: "left",
          ArrowRight: "right",
          ArrowUp: "up",
          ArrowDown: "down",
          " ": "space",
        };
      (ne.keydown = (f) => {
        nr.has(f.key) && f.preventDefault(),
          e.events.onOnce("input", () => {
            let x = Ge[f.key] || f.key.toLowerCase();
            x.length === 1
              ? (e.events.trigger("charInput", x), e.charInputted.push(x))
              : x === "space" &&
                (e.events.trigger("charInput", " "), e.charInputted.push(" ")),
              f.repeat
                ? (e.keyState.pressRepeat(x),
                  e.events.trigger("keyPressRepeat", x))
                : (e.keyState.press(x),
                  e.events.trigger("keyPressRepeat", x),
                  e.events.trigger("keyPress", x));
          });
      }),
        (ne.keyup = (f) => {
          e.events.onOnce("input", () => {
            let x = Ge[f.key] || f.key.toLowerCase();
            e.keyState.release(x), e.events.trigger("keyRelease", x);
          });
        }),
        (ne.touchstart = (f) => {
          f.preventDefault(),
            e.events.onOnce("input", () => {
              let x = [...f.changedTouches],
                M = e.canvas.getBoundingClientRect();
              r.touchToMouse !== !1 &&
                ((e.mousePos = new b(x[0].clientX - M.x, x[0].clientY - M.y)),
                e.mouseState.press("left"),
                e.events.trigger("mousePress", "left")),
                x.forEach((Y) => {
                  e.events.trigger(
                    "touchStart",
                    new b(Y.clientX - M.x, Y.clientY - M.y),
                    Y,
                  );
                });
            });
        }),
        (ne.touchmove = (f) => {
          f.preventDefault(),
            e.events.onOnce("input", () => {
              let x = [...f.changedTouches],
                M = e.canvas.getBoundingClientRect();
              r.touchToMouse !== !1 &&
                ((e.mousePos = new b(x[0].clientX - M.x, x[0].clientY - M.y)),
                e.events.trigger("mouseMove")),
                x.forEach((Y) => {
                  e.events.trigger(
                    "touchMove",
                    new b(Y.clientX - M.x, Y.clientY - M.y),
                    Y,
                  );
                });
            });
        }),
        (ne.touchend = (f) => {
          e.events.onOnce("input", () => {
            let x = [...f.changedTouches],
              M = e.canvas.getBoundingClientRect();
            r.touchToMouse !== !1 &&
              ((e.mousePos = new b(x[0].clientX - M.x, x[0].clientY - M.y)),
              e.mouseState.release("left"),
              e.events.trigger("mouseRelease", "left")),
              x.forEach((Y) => {
                e.events.trigger(
                  "touchEnd",
                  new b(Y.clientX - M.x, Y.clientY - M.y),
                  Y,
                );
              });
          });
        }),
        (ne.touchcancel = (f) => {
          e.events.onOnce("input", () => {
            let x = [...f.changedTouches],
              M = e.canvas.getBoundingClientRect();
            r.touchToMouse !== !1 &&
              ((e.mousePos = new b(x[0].clientX - M.x, x[0].clientY - M.y)),
              e.mouseState.release("left"),
              e.events.trigger("mouseRelease", "left")),
              x.forEach((Y) => {
                e.events.trigger(
                  "touchEnd",
                  new b(Y.clientX - M.x, Y.clientY - M.y),
                  Y,
                );
              });
          });
        }),
        (ne.wheel = (f) => {
          f.preventDefault(),
            e.events.onOnce("input", () => {
              e.events.trigger("scroll", new b(f.deltaX, f.deltaY));
            });
        }),
        (ne.contextmenu = (f) => f.preventDefault()),
        (le.visibilitychange = () => {
          document.visibilityState === "visible"
            ? ((e.skipTime = !0), e.events.trigger("show"))
            : e.events.trigger("hide");
        }),
        (oe.gamepadconnected = (f) => {
          let x = wt(f.gamepad);
          e.events.onOnce("input", () => {
            e.events.trigger("gamepadConnect", x);
          });
        }),
        (oe.gamepaddisconnected = (f) => {
          let x = mt().filter((M) => M.index === f.gamepad.index)[0];
          te(f.gamepad),
            e.events.onOnce("input", () => {
              e.events.trigger("gamepadDisconnect", x);
            });
        });
      for (let f in ne) e.canvas.addEventListener(f, ne[f]);
      for (let f in le) document.addEventListener(f, le[f]);
      for (let f in oe) window.addEventListener(f, oe[f]);
      let we = new ResizeObserver((f) => {
        for (let x of f)
          if (x.target === e.canvas) {
            if (
              e.lastWidth === e.canvas.offsetWidth &&
              e.lastHeight === e.canvas.offsetHeight
            )
              return;
            (e.lastWidth = e.canvas.offsetWidth),
              (e.lastHeight = e.canvas.offsetHeight),
              e.events.onOnce("input", () => {
                e.events.trigger("resize");
              });
          }
      });
      return (
        we.observe(e.canvas),
        {
          dt: n,
          time: d,
          run: L,
          canvas: e.canvas,
          fps: p,
          numFrames: V,
          quit: Z,
          setFullscreen: Q,
          isFullscreen: ie,
          setCursor: N,
          screenshot: T,
          getGamepads: mt,
          getCursor: K,
          setCursorLocked: y,
          isCursorLocked: ee,
          isTouchscreen: ce,
          mousePos: R,
          mouseDeltaPos: Pe,
          isKeyDown: ht,
          isKeyPressed: je,
          isKeyPressedRepeat: St,
          isKeyReleased: lt,
          isMouseDown: Ee,
          isMousePressed: j,
          isMouseReleased: me,
          isMouseMoved: ye,
          isGamepadButtonPressed: ut,
          isGamepadButtonDown: Le,
          isGamepadButtonReleased: Rt,
          getGamepadStick: Te,
          charInputted: rt,
          onResize: Mt,
          onKeyDown: er,
          onKeyPress: tr,
          onKeyPressRepeat: rr,
          onKeyRelease: ir,
          onMouseDown: Pt,
          onMousePress: Tt,
          onMouseRelease: Ft,
          onMouseMove: dt,
          onCharInput: ct,
          onTouchStart: Bt,
          onTouchMove: $e,
          onTouchEnd: Ct,
          onScroll: It,
          onHide: ft,
          onShow: Dt,
          onGamepadButtonDown: pt,
          onGamepadButtonPress: gt,
          onGamepadButtonRelease: kt,
          onGamepadStick: et,
          onGamepadConnect: Nt,
          onGamepadDisconnect: tt,
          events: e.events,
        }
      );
    }, "default"),
    at = class hs {
      static {
        o(this, "Texture");
      }
      ctx;
      src = null;
      glTex;
      width;
      height;
      constructor(e, n, d, p = {}) {
        this.ctx = e;
        let V = e.gl;
        (this.glTex = e.gl.createTexture()),
          e.onDestroy(() => this.free()),
          (this.width = n),
          (this.height = d);
        let T =
            { linear: V.LINEAR, nearest: V.NEAREST }[
              p.filter ?? e.opts.texFilter
            ] ?? V.NEAREST,
          N =
            { repeat: V.REPEAT, clampToEadge: V.CLAMP_TO_EDGE }[p.wrap] ??
            V.CLAMP_TO_EDGE;
        this.bind(),
          n &&
            d &&
            V.texImage2D(
              V.TEXTURE_2D,
              0,
              V.RGBA,
              n,
              d,
              0,
              V.RGBA,
              V.UNSIGNED_BYTE,
              null,
            ),
          V.texParameteri(V.TEXTURE_2D, V.TEXTURE_MIN_FILTER, T),
          V.texParameteri(V.TEXTURE_2D, V.TEXTURE_MAG_FILTER, T),
          V.texParameteri(V.TEXTURE_2D, V.TEXTURE_WRAP_S, N),
          V.texParameteri(V.TEXTURE_2D, V.TEXTURE_WRAP_T, N),
          this.unbind();
      }
      static fromImage(e, n, d = {}) {
        let p = new hs(e, n.width, n.height, d);
        return p.update(n), (p.src = n), p;
      }
      update(e, n = 0, d = 0) {
        let p = this.ctx.gl;
        this.bind(),
          p.texSubImage2D(p.TEXTURE_2D, 0, n, d, p.RGBA, p.UNSIGNED_BYTE, e),
          this.unbind();
      }
      bind() {
        this.ctx.pushTexture2D(this.glTex);
      }
      unbind() {
        this.ctx.popTexture2D();
      }
      free() {
        this.ctx.gl.deleteTexture(this.glTex);
      }
    },
    dr = class {
      static {
        o(this, "FrameBuffer");
      }
      ctx;
      tex;
      glFramebuffer;
      glRenderbuffer;
      constructor(r, e, n, d = {}) {
        this.ctx = r;
        let p = r.gl;
        r.onDestroy(() => this.free()),
          (this.tex = new at(r, e, n, d)),
          (this.glFramebuffer = p.createFramebuffer()),
          (this.glRenderbuffer = p.createRenderbuffer()),
          this.bind(),
          p.renderbufferStorage(p.RENDERBUFFER, p.DEPTH_STENCIL, e, n),
          p.framebufferTexture2D(
            p.FRAMEBUFFER,
            p.COLOR_ATTACHMENT0,
            p.TEXTURE_2D,
            this.tex.glTex,
            0,
          ),
          p.framebufferRenderbuffer(
            p.FRAMEBUFFER,
            p.DEPTH_STENCIL_ATTACHMENT,
            p.RENDERBUFFER,
            this.glRenderbuffer,
          ),
          this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      toImageData() {
        let r = this.ctx.gl,
          e = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(),
          r.readPixels(
            0,
            0,
            this.width,
            this.height,
            r.RGBA,
            r.UNSIGNED_BYTE,
            e,
          ),
          this.unbind();
        let n = this.width * 4,
          d = new Uint8Array(n);
        for (let p = 0; p < ((this.height / 2) | 0); p++) {
          let V = p * n,
            T = (this.height - p - 1) * n;
          d.set(e.subarray(V, V + n)), e.copyWithin(V, T, T + n), e.set(d, T);
        }
        return new ImageData(e, this.width, this.height);
      }
      toDataURL() {
        let r = document.createElement("canvas"),
          e = r.getContext("2d");
        return (
          (r.width = this.width),
          (r.height = this.height),
          e.putImageData(this.toImageData(), 0, 0),
          r.toDataURL()
        );
      }
      draw(r) {
        this.bind(), r(), this.unbind();
      }
      bind() {
        this.ctx.pushFramebuffer(this.glFramebuffer),
          this.ctx.pushRenderbuffer(this.glRenderbuffer),
          this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
      }
      unbind() {
        this.ctx.popFramebuffer(),
          this.ctx.popRenderbuffer(),
          this.ctx.popViewport();
      }
      free() {
        let r = this.ctx.gl;
        r.deleteFramebuffer(this.glFramebuffer),
          r.deleteRenderbuffer(this.glRenderbuffer),
          this.tex.free();
      }
    },
    Xs = class {
      static {
        o(this, "Shader");
      }
      ctx;
      glProgram;
      constructor(r, e, n, d) {
        (this.ctx = r), r.onDestroy(() => this.free());
        let p = r.gl,
          V = p.createShader(p.VERTEX_SHADER),
          T = p.createShader(p.FRAGMENT_SHADER);
        p.shaderSource(V, e),
          p.shaderSource(T, n),
          p.compileShader(V),
          p.compileShader(T);
        let N = p.createProgram();
        if (
          ((this.glProgram = N),
          p.attachShader(N, V),
          p.attachShader(N, T),
          d.forEach((K, y) => p.bindAttribLocation(N, y, K)),
          p.linkProgram(N),
          !p.getProgramParameter(N, p.LINK_STATUS))
        ) {
          let K = p.getShaderInfoLog(V);
          if (K) throw new Error("VERTEX SHADER " + K);
          let y = p.getShaderInfoLog(T);
          if (y) throw new Error("FRAGMENT SHADER " + y);
        }
        p.deleteShader(V), p.deleteShader(T);
      }
      bind() {
        this.ctx.pushProgram(this.glProgram);
      }
      unbind() {
        this.ctx.popProgram();
      }
      send(r) {
        let e = this.ctx.gl;
        for (let n in r) {
          let d = r[n],
            p = e.getUniformLocation(this.glProgram, n);
          typeof d == "number"
            ? e.uniform1f(p, d)
            : d instanceof Ne
              ? e.uniformMatrix4fv(p, !1, new Float32Array(d.m))
              : d instanceof re
                ? e.uniform3f(p, d.r, d.g, d.b)
                : d instanceof b && e.uniform2f(p, d.x, d.y);
        }
      }
      free() {
        this.ctx.gl.deleteProgram(this.glProgram);
      }
    },
    Ws = class {
      static {
        o(this, "BatchRenderer");
      }
      ctx;
      glVBuf;
      glIBuf;
      vqueue = [];
      iqueue = [];
      stride;
      maxVertices;
      maxIndices;
      vertexFormat;
      numDraws = 0;
      curPrimitive = null;
      curTex = null;
      curShader = null;
      curUniform = {};
      constructor(r, e, n, d) {
        let p = r.gl;
        (this.vertexFormat = e),
          (this.ctx = r),
          (this.stride = e.reduce((V, T) => V + T.size, 0)),
          (this.maxVertices = n),
          (this.maxIndices = d),
          (this.glVBuf = p.createBuffer()),
          r.pushArrayBuffer(this.glVBuf),
          p.bufferData(p.ARRAY_BUFFER, n * 4, p.DYNAMIC_DRAW),
          r.popArrayBuffer(),
          (this.glIBuf = p.createBuffer()),
          r.pushElementArrayBuffer(this.glIBuf),
          p.bufferData(p.ELEMENT_ARRAY_BUFFER, d * 4, p.DYNAMIC_DRAW),
          r.popElementArrayBuffer();
      }
      push(r, e, n, d, p = null, V = {}) {
        (r !== this.curPrimitive ||
          p !== this.curTex ||
          d !== this.curShader ||
          !vr(this.curUniform, V) ||
          this.vqueue.length + e.length * this.stride > this.maxVertices ||
          this.iqueue.length + n.length > this.maxIndices) &&
          this.flush();
        let T = this.vqueue.length / this.stride;
        for (let N of e) this.vqueue.push(N);
        for (let N of n) this.iqueue.push(N + T);
        (this.curPrimitive = r),
          (this.curShader = d),
          (this.curTex = p),
          (this.curUniform = V);
      }
      flush() {
        if (
          !this.curPrimitive ||
          !this.curShader ||
          this.vqueue.length === 0 ||
          this.iqueue.length === 0
        )
          return;
        let r = this.ctx.gl;
        this.ctx.pushArrayBuffer(this.glVBuf),
          r.bufferSubData(r.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)),
          this.ctx.pushElementArrayBuffer(this.glIBuf),
          r.bufferSubData(
            r.ELEMENT_ARRAY_BUFFER,
            0,
            new Uint16Array(this.iqueue),
          ),
          this.ctx.setVertexFormat(this.vertexFormat),
          this.curShader.bind(),
          this.curShader.send(this.curUniform),
          this.curTex?.bind(),
          r.drawElements(
            this.curPrimitive,
            this.iqueue.length,
            r.UNSIGNED_SHORT,
            0,
          ),
          this.curTex?.unbind(),
          this.curShader.unbind(),
          this.ctx.popArrayBuffer(),
          this.ctx.popElementArrayBuffer(),
          (this.vqueue = []),
          (this.iqueue = []),
          this.numDraws++;
      }
      free() {
        let r = this.ctx.gl;
        r.deleteBuffer(this.glVBuf), r.deleteBuffer(this.glIBuf);
      }
    };
  function We(r) {
    let e = [],
      n = o((V) => {
        e.push(V), r(V);
      }, "push"),
      d = o(() => {
        e.pop(), r(p() ?? null);
      }, "pop"),
      p = o(() => e[e.length - 1], "cur");
    return [n, d, p];
  }
  o(We, "genStack");
  function ls(r, e = {}) {
    let n = [];
    function d(j) {
      n.push(j);
    }
    o(d, "onDestroy");
    function p() {
      n.forEach((j) => j()), r.getExtension("WEBGL_lose_context").loseContext();
    }
    o(p, "destroy");
    let V = null;
    function T(j) {
      if (vr(j, V)) return;
      V = j;
      let Ee = j.reduce((me, ye) => me + ye.size, 0);
      j.reduce(
        (me, ye, je) => (
          r.vertexAttribPointer(je, ye.size, r.FLOAT, !1, Ee * 4, me),
          r.enableVertexAttribArray(je),
          me + ye.size * 4
        ),
        0,
      );
    }
    o(T, "setVertexFormat");
    let [N, K] = We((j) => r.bindTexture(r.TEXTURE_2D, j)),
      [y, ee] = We((j) => r.bindBuffer(r.ARRAY_BUFFER, j)),
      [S, B] = We((j) => r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, j)),
      [v, Q] = We((j) => r.bindFramebuffer(r.FRAMEBUFFER, j)),
      [ie, Z] = We((j) => r.bindRenderbuffer(r.RENDERBUFFER, j)),
      [L, ce] = We(({ x: j, y: Ee, w: me, h: ye }) => {
        r.viewport(j, Ee, me, ye);
      }),
      [R, Pe] = We((j) => r.useProgram(j));
    return (
      L({ x: 0, y: 0, w: r.drawingBufferWidth, h: r.drawingBufferHeight }),
      {
        gl: r,
        opts: e,
        onDestroy: d,
        destroy: p,
        pushTexture2D: N,
        popTexture2D: K,
        pushArrayBuffer: y,
        popArrayBuffer: ee,
        pushElementArrayBuffer: S,
        popElementArrayBuffer: B,
        pushFramebuffer: v,
        popFramebuffer: Q,
        pushRenderbuffer: ie,
        popRenderbuffer: Z,
        pushViewport: L,
        popViewport: ce,
        pushProgram: R,
        popProgram: Pe,
        setVertexFormat: T,
      }
    );
  }
  o(ls, "initGfx");
  var Fe = class us {
      static {
        o(this, "Asset");
      }
      loaded = !1;
      data = null;
      error = null;
      onLoadEvents = new Ie();
      onErrorEvents = new Ie();
      onFinishEvents = new Ie();
      constructor(e) {
        e.then((n) => {
          (this.data = n), this.onLoadEvents.trigger(n);
        })
          .catch((n) => {
            if (((this.error = n), this.onErrorEvents.numListeners() > 0))
              this.onErrorEvents.trigger(n);
            else throw n;
          })
          .finally(() => {
            this.onFinishEvents.trigger(), (this.loaded = !0);
          });
      }
      static loaded(e) {
        let n = new us(Promise.resolve(e));
        return (n.data = e), (n.loaded = !0), n;
      }
      onLoad(e) {
        return (
          this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e),
          this
        );
      }
      onError(e) {
        return (
          this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e),
          this
        );
      }
      onFinish(e) {
        return this.loaded ? e() : this.onFinishEvents.add(e), this;
      }
      then(e) {
        return this.onLoad(e);
      }
      catch(e) {
        return this.onError(e);
      }
      finally(e) {
        return this.onFinish(e);
      }
    },
    vt = class {
      static {
        o(this, "AssetBucket");
      }
      assets = new Map();
      lastUID = 0;
      add(r, e) {
        let n = r ?? this.lastUID++ + "",
          d = new Fe(e);
        return this.assets.set(n, d), d;
      }
      addLoaded(r, e) {
        let n = r ?? this.lastUID++ + "",
          d = Fe.loaded(e);
        return this.assets.set(n, d), d;
      }
      get(r) {
        return this.assets.get(r);
      }
      progress() {
        if (this.assets.size === 0) return 1;
        let r = 0;
        return (
          this.assets.forEach((e) => {
            e.loaded && r++;
          }),
          r / this.assets.size
        );
      }
    };
  function Er(r) {
    return fetch(r).then((e) => {
      if (!e.ok) throw new Error(`Failed to fetch "${r}"`);
      return e;
    });
  }
  o(Er, "fetchURL");
  function Wt(r) {
    return Er(r).then((e) => e.json());
  }
  o(Wt, "fetchJSON");
  function ds(r) {
    return Er(r).then((e) => e.text());
  }
  o(ds, "fetchText");
  function cs(r) {
    return Er(r).then((e) => e.arrayBuffer());
  }
  o(cs, "fetchArrayBuffer");
  function Zt(r) {
    let e = new Image();
    return (
      (e.crossOrigin = "anonymous"),
      (e.src = r),
      new Promise((n, d) => {
        (e.onload = () => n(e)),
          (e.onerror = () => d(new Error(`Failed to load image from "${r}"`)));
      })
    );
  }
  o(Zt, "loadImg");
  var cr = 2.5949095,
    Sn = 1.70158 + 1,
    Rn = (2 * Math.PI) / 3,
    Mn = (2 * Math.PI) / 4.5,
    Vr = {
      linear: (r) => r,
      easeInSine: (r) => 1 - Math.cos((r * Math.PI) / 2),
      easeOutSine: (r) => Math.sin((r * Math.PI) / 2),
      easeInOutSine: (r) => -(Math.cos(Math.PI * r) - 1) / 2,
      easeInQuad: (r) => r * r,
      easeOutQuad: (r) => 1 - (1 - r) * (1 - r),
      easeInOutQuad: (r) =>
        r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2,
      easeInCubic: (r) => r * r * r,
      easeOutCubic: (r) => 1 - Math.pow(1 - r, 3),
      easeInOutCubic: (r) =>
        r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2,
      easeInQuart: (r) => r * r * r * r,
      easeOutQuart: (r) => 1 - Math.pow(1 - r, 4),
      easeInOutQuart: (r) =>
        r < 0.5 ? 8 * r * r * r * r : 1 - Math.pow(-2 * r + 2, 4) / 2,
      easeInQuint: (r) => r * r * r * r * r,
      easeOutQuint: (r) => 1 - Math.pow(1 - r, 5),
      easeInOutQuint: (r) =>
        r < 0.5 ? 16 * r * r * r * r * r : 1 - Math.pow(-2 * r + 2, 5) / 2,
      easeInExpo: (r) => (r === 0 ? 0 : Math.pow(2, 10 * r - 10)),
      easeOutExpo: (r) => (r === 1 ? 1 : 1 - Math.pow(2, -10 * r)),
      easeInOutExpo: (r) =>
        r === 0
          ? 0
          : r === 1
            ? 1
            : r < 0.5
              ? Math.pow(2, 20 * r - 10) / 2
              : (2 - Math.pow(2, -20 * r + 10)) / 2,
      easeInCirc: (r) => 1 - Math.sqrt(1 - Math.pow(r, 2)),
      easeOutCirc: (r) => Math.sqrt(1 - Math.pow(r - 1, 2)),
      easeInOutCirc: (r) =>
        r < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * r, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * r + 2, 2)) + 1) / 2,
      easeInBack: (r) => Sn * r * r * r - 1.70158 * r * r,
      easeOutBack: (r) =>
        1 + Sn * Math.pow(r - 1, 3) + 1.70158 * Math.pow(r - 1, 2),
      easeInOutBack: (r) =>
        r < 0.5
          ? (Math.pow(2 * r, 2) * ((cr + 1) * 2 * r - cr)) / 2
          : (Math.pow(2 * r - 2, 2) * ((cr + 1) * (r * 2 - 2) + cr) + 2) / 2,
      easeInElastic: (r) =>
        r === 0
          ? 0
          : r === 1
            ? 1
            : -Math.pow(2, 10 * r - 10) * Math.sin((r * 10 - 10.75) * Rn),
      easeOutElastic: (r) =>
        r === 0
          ? 0
          : r === 1
            ? 1
            : Math.pow(2, -10 * r) * Math.sin((r * 10 - 0.75) * Rn) + 1,
      easeInOutElastic: (r) =>
        r === 0
          ? 0
          : r === 1
            ? 1
            : r < 0.5
              ? -(Math.pow(2, 20 * r - 10) * Math.sin((20 * r - 11.125) * Mn)) /
                2
              : (Math.pow(2, -20 * r + 10) * Math.sin((20 * r - 11.125) * Mn)) /
                  2 +
                1,
      easeInBounce: (r) => 1 - Vr.easeOutBounce(1 - r),
      easeOutBounce: (r) =>
        r < 1 / 2.75
          ? 7.5625 * r * r
          : r < 2 / 2.75
            ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75
            : r < 2.5 / 2.75
              ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375
              : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375,
      easeInOutBounce: (r) =>
        r < 0.5
          ? (1 - Vr.easeOutBounce(1 - 2 * r)) / 2
          : (1 + Vr.easeOutBounce(2 * r - 1)) / 2,
    },
    fr = Vr,
    Zs = class {
      static {
        o(this, "TexPacker");
      }
      textures = [];
      canvas;
      c2d;
      x = 0;
      y = 0;
      curHeight = 0;
      gfx;
      constructor(r, e, n) {
        (this.gfx = r),
          (this.canvas = document.createElement("canvas")),
          (this.canvas.width = e),
          (this.canvas.height = n),
          (this.textures = [at.fromImage(r, this.canvas)]),
          (this.c2d = this.canvas.getContext("2d"));
      }
      add(r) {
        if (r.width > this.canvas.width || r.height > this.canvas.height)
          throw new Error(
            `Texture size (${r.width} x ${r.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`,
          );
        this.x + r.width > this.canvas.width &&
          ((this.x = 0), (this.y += this.curHeight), (this.curHeight = 0)),
          this.y + r.height > this.canvas.height &&
            (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.textures.push(at.fromImage(this.gfx, this.canvas)),
            (this.x = 0),
            (this.y = 0),
            (this.curHeight = 0));
        let e = this.textures[this.textures.length - 1],
          n = new b(this.x, this.y);
        return (
          (this.x += r.width),
          r.height > this.curHeight && (this.curHeight = r.height),
          r instanceof ImageData
            ? this.c2d.putImageData(r, n.x, n.y)
            : this.c2d.drawImage(r, n.x, n.y),
          e.update(this.canvas),
          [
            e,
            new ge(
              n.x / this.canvas.width,
              n.y / this.canvas.height,
              r.width / this.canvas.width,
              r.height / this.canvas.height,
            ),
          ]
        );
      }
      free() {
        for (let r of this.textures) r.free();
      }
    },
    _s =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==",
    $s = Ns(
      "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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",
    ),
    eo =
      "data:image/png;base64,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",
    to =
      "data:image/png;base64,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",
    ro = "3000.1.17",
    Pn =
      " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    pr = "topleft",
    Tn = 64,
    io = "monospace",
    gr = "monospace",
    no = 36,
    mr = 64,
    wr = 256,
    Fn = 2048,
    Bn = 2048,
    Cn = 2048,
    In = 2048,
    Dn = 0.1,
    so = 64,
    jr = "linear",
    oo = 8,
    ao = 4,
    ii = [
      { name: "a_pos", size: 2 },
      { name: "a_uv", size: 2 },
      { name: "a_color", size: 4 },
    ],
    ho = ii.reduce((r, e) => r + e.size, 0),
    fs = 2048,
    lo = fs * 4 * ho,
    uo = fs * 6,
    co = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`,
    fo = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`,
    Qr = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`,
    zr = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`,
    po = new Set(["id", "require"]),
    go = new Set([
      "add",
      "update",
      "draw",
      "destroy",
      "inspect",
      "drawInspect",
    ]);
  function ot(r) {
    switch (r) {
      case "topleft":
        return new b(-1, -1);
      case "top":
        return new b(0, -1);
      case "topright":
        return new b(1, -1);
      case "left":
        return new b(-1, 0);
      case "center":
        return new b(0, 0);
      case "right":
        return new b(1, 0);
      case "botleft":
        return new b(-1, 1);
      case "bot":
        return new b(0, 1);
      case "botright":
        return new b(1, 1);
      default:
        return r;
    }
  }
  o(ot, "anchorPt");
  function ps(r) {
    switch (r) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  o(ps, "alignPt");
  function gs(r) {
    return r.createBuffer(1, 1, 44100);
  }
  o(gs, "createEmptyAudioBuffer");
  var ms = o((r = {}) => {
    let e = r.root ?? document.body;
    e === document.body &&
      ((document.body.style.width = "100%"),
      (document.body.style.height = "100%"),
      (document.body.style.margin = "0px"),
      (document.documentElement.style.width = "100%"),
      (document.documentElement.style.height = "100%"));
    let n =
        r.canvas ??
        (() => {
          let t = document.createElement("canvas");
          return e.appendChild(t), t;
        })(),
      d = r.scale ?? 1,
      p = r.width && r.height && !r.stretch && !r.letterbox;
    p
      ? ((n.width = r.width * d), (n.height = r.height * d))
      : ((n.width = n.parentElement.offsetWidth),
        (n.height = n.parentElement.offsetHeight));
    let V = ["outline: none", "cursor: default"];
    if (p) {
      let t = n.width,
        i = n.height;
      V.push(`width: ${t}px`), V.push(`height: ${i}px`);
    } else V.push("width: 100%"), V.push("height: 100%");
    r.crisp &&
      (V.push("image-rendering: pixelated"),
      V.push("image-rendering: crisp-edges")),
      (n.style.cssText = V.join(";"));
    let T = r.pixelDensity || window.devicePixelRatio;
    (n.width *= T), (n.height *= T), (n.tabIndex = 0);
    let N = document.createElement("canvas");
    (N.width = wr), (N.height = wr);
    let K = N.getContext("2d", { willReadFrequently: !0 }),
      y = Js({
        canvas: n,
        touchToMouse: r.touchToMouse,
        gamepads: r.gamepads,
        pixelDensity: r.pixelDensity,
        maxFPS: r.maxFPS,
      }),
      ee = [],
      S = y.canvas.getContext("webgl", {
        antialias: !0,
        depth: !0,
        stencil: !0,
        alpha: !0,
        preserveDrawingBuffer: !0,
      }),
      B = ls(S, { texFilter: r.texFilter }),
      v = (() => {
        let t = et(Qr, zr),
          i = at.fromImage(
            B,
            new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1),
          ),
          s =
            r.width && r.height
              ? new dr(B, r.width * T * d, r.height * T * d)
              : new dr(B, S.drawingBufferWidth, S.drawingBufferHeight),
          h = null,
          a = 1;
        r.background &&
          ((h = _(r.background)),
          (a = Array.isArray(r.background) ? r.background[3] : 1),
          S.clearColor(h.r / 255, h.g / 255, h.b / 255, a ?? 1)),
          S.enable(S.BLEND),
          S.blendFuncSeparate(
            S.SRC_ALPHA,
            S.ONE_MINUS_SRC_ALPHA,
            S.ONE,
            S.ONE_MINUS_SRC_ALPHA,
          );
        let u = new Ws(B, ii, lo, uo),
          g = at.fromImage(
            B,
            new ImageData(
              new Uint8ClampedArray([
                128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128,
                128, 128, 255,
              ]),
              2,
              2,
            ),
            { wrap: "repeat", filter: "nearest" },
          );
        return {
          lastDrawCalls: 0,
          defShader: t,
          defTex: i,
          frameBuffer: s,
          postShader: null,
          postShaderUniform: null,
          renderer: u,
          transform: new Ne(),
          transformStack: [],
          bgTex: g,
          bgColor: h,
          bgAlpha: a,
          width: r.width ?? S.drawingBufferWidth / T / d,
          height: r.height ?? S.drawingBufferHeight / T / d,
          viewport: {
            x: 0,
            y: 0,
            width: S.drawingBufferWidth,
            height: S.drawingBufferHeight,
          },
          fixed: !1,
        };
      })();
    class Q {
      static {
        o(this, "SpriteData");
      }
      tex;
      frames = [new ge(0, 0, 1, 1)];
      anims = {};
      slice9 = null;
      constructor(i, s, h = {}, a = null) {
        (this.tex = i),
          s && (this.frames = s),
          (this.anims = h),
          (this.slice9 = a);
      }
      get width() {
        return this.tex.width * this.frames[0].w;
      }
      get height() {
        return this.tex.height * this.frames[0].h;
      }
      static from(i, s = {}) {
        return typeof i == "string"
          ? Q.fromURL(i, s)
          : Promise.resolve(Q.fromImage(i, s));
      }
      static fromImage(i, s = {}) {
        let [h, a] = L.packer.add(i),
          u = s.frames
            ? s.frames.map(
                (g) =>
                  new ge(
                    a.x + g.x * a.w,
                    a.y + g.y * a.h,
                    g.w * a.w,
                    g.h * a.h,
                  ),
              )
            : ht(s.sliceX || 1, s.sliceY || 1, a.x, a.y, a.w, a.h);
        return new Q(h, u, s.anims, s.slice9);
      }
      static fromURL(i, s = {}) {
        return Zt(i).then((h) => Q.fromImage(h, s));
      }
    }
    class ie {
      static {
        o(this, "SoundData");
      }
      buf;
      constructor(i) {
        this.buf = i;
      }
      static fromArrayBuffer(i) {
        return new Promise((s, h) => Z.ctx.decodeAudioData(i, s, h)).then(
          (s) => new ie(s),
        );
      }
      static fromURL(i) {
        return En(i)
          ? ie.fromArrayBuffer(Wn(i))
          : cs(i).then((s) => ie.fromArrayBuffer(s));
      }
    }
    let Z = (() => {
        let t = new (window.AudioContext || window.webkitAudioContext)(),
          i = t.createGain();
        i.connect(t.destination);
        let s = new ie(gs(t));
        return (
          t
            .decodeAudioData($s.buffer.slice(0))
            .then((h) => {
              s.buf = h;
            })
            .catch((h) => {
              console.error("Failed to load burp: ", h);
            }),
          { ctx: t, masterNode: i, burpSnd: s }
        );
      })(),
      L = {
        urlPrefix: "",
        sprites: new vt(),
        fonts: new vt(),
        bitmapFonts: new vt(),
        sounds: new vt(),
        shaders: new vt(),
        custom: new vt(),
        packer: new Zs(B, Cn, In),
        loaded: !1,
      };
    function ce(t) {
      return typeof t != "string" || En(t) ? t : L.urlPrefix + t;
    }
    o(ce, "fixURL");
    let R = {
      events: new Xt(),
      objEvents: new Xt(),
      root: sr([]),
      gravity: 0,
      scenes: {},
      logs: [],
      cam: {
        pos: null,
        scale: new b(1),
        angle: 0,
        shake: 0,
        transform: new Ne(),
      },
    };
    R.root.use(hr());
    function Pe(t) {
      return L.custom.add(null, t);
    }
    o(Pe, "load");
    function j() {
      let t = [
        L.sprites,
        L.sounds,
        L.shaders,
        L.fonts,
        L.bitmapFonts,
        L.custom,
      ];
      return t.reduce((i, s) => i + s.progress(), 0) / t.length;
    }
    o(j, "loadProgress");
    function Ee(t) {
      return t !== void 0 && (L.urlPrefix = t), L.urlPrefix;
    }
    o(Ee, "loadRoot");
    function me(t, i) {
      return L.custom.add(t, Wt(i));
    }
    o(me, "loadJSON");
    class ye {
      static {
        o(this, "FontData");
      }
      fontface;
      filter = jr;
      outline = null;
      size = mr;
      constructor(i, s = {}) {
        if (
          ((this.fontface = i),
          (this.filter = s.filter ?? jr),
          (this.size = s.size ?? mr),
          this.size > wr)
        )
          throw new Error(`Max font size: ${wr}`);
        s.outline &&
          ((this.outline = { width: 1, color: _(0, 0, 0) }),
          typeof s.outline == "number"
            ? (this.outline.width = s.outline)
            : typeof s.outline == "object" &&
              (s.outline.width && (this.outline.width = s.outline.width),
              s.outline.color && (this.outline.color = s.outline.color)));
      }
    }
    function je(t, i, s = {}) {
      let h = new FontFace(t, typeof i == "string" ? `url(${i})` : i);
      return (
        document.fonts.add(h),
        L.fonts.add(
          t,
          h
            .load()
            .catch((a) => {
              throw new Error(`Failed to load font from "${i}": ${a}`);
            })
            .then((a) => new ye(a, s)),
        )
      );
    }
    o(je, "loadFont");
    function St(t, i, s, h, a = {}) {
      return L.bitmapFonts.add(
        t,
        Zt(i).then((u) => Nt(at.fromImage(B, u, a), s, h, a.chars ?? Pn)),
      );
    }
    o(St, "loadBitmapFont");
    function ht(t = 1, i = 1, s = 0, h = 0, a = 1, u = 1) {
      let g = [],
        A = a / t,
        m = u / i;
      for (let c = 0; c < i; c++)
        for (let w = 0; w < t; w++) g.push(new ge(s + w * A, h + c * m, A, m));
      return g;
    }
    o(ht, "slice");
    function lt(t, i) {
      return (
        (t = ce(t)),
        Pe(
          typeof i == "string"
            ? new Promise((s, h) => {
                Wt(i).then((a) => {
                  lt(t, a).then(s).catch(h);
                });
              })
            : Q.from(t).then((s) => {
                let h = {};
                for (let a in i) {
                  let u = i[a],
                    g = s.frames[0],
                    A = Cn * g.w,
                    m = In * g.h,
                    c = u.frames
                      ? u.frames.map(
                          (F) =>
                            new ge(
                              g.x + ((u.x + F.x) / A) * g.w,
                              g.y + ((u.y + F.y) / m) * g.h,
                              (F.w / A) * g.w,
                              (F.h / m) * g.h,
                            ),
                        )
                      : ht(
                          u.sliceX || 1,
                          u.sliceY || 1,
                          g.x + (u.x / A) * g.w,
                          g.y + (u.y / m) * g.h,
                          (u.width / A) * g.w,
                          (u.height / m) * g.h,
                        ),
                    w = new Q(s.tex, c, u.anims);
                  L.sprites.addLoaded(a, w), (h[a] = w);
                }
                return h;
              }),
        )
      );
    }
    o(lt, "loadSpriteAtlas");
    function ut(t, i = {}) {
      let s = document.createElement("canvas"),
        h = t[0].width,
        a = t[0].height;
      (s.width = h * t.length), (s.height = a);
      let u = s.getContext("2d");
      t.forEach((A, m) => {
        A instanceof ImageData
          ? u.putImageData(A, m * h, 0)
          : u.drawImage(A, m * h, 0);
      });
      let g = u.getImageData(0, 0, t.length * h, a);
      return Q.fromImage(g, { ...i, sliceX: t.length, sliceY: 1 });
    }
    o(ut, "createSpriteSheet");
    function Le(t, i, s = { sliceX: 1, sliceY: 1, anims: {} }) {
      return (
        (i = ce(i)),
        Array.isArray(i)
          ? i.some((h) => typeof h == "string")
            ? L.sprites.add(
                t,
                Promise.all(
                  i.map((h) =>
                    typeof h == "string" ? Zt(h) : Promise.resolve(h),
                  ),
                ).then((h) => ut(h, s)),
              )
            : L.sprites.addLoaded(t, ut(i, s))
          : typeof i == "string"
            ? L.sprites.add(t, Q.from(i, s))
            : L.sprites.addLoaded(t, Q.fromImage(i, s))
      );
    }
    o(Le, "loadSprite");
    function Rt(t, i) {
      return (
        (i = ce(i)),
        L.sprites.add(
          t,
          new Promise(async (s) => {
            let h = typeof i == "string" ? await Wt(i) : i,
              a = await Promise.all(h.frames.map(Zt)),
              u = document.createElement("canvas");
            (u.width = h.width), (u.height = h.height * h.frames.length);
            let g = u.getContext("2d");
            a.forEach((m, c) => {
              g.drawImage(m, 0, c * h.height);
            });
            let A = await Le(null, u, {
              sliceY: h.frames.length,
              anims: h.anims,
            });
            s(A);
          }),
        )
      );
    }
    o(Rt, "loadPedit");
    function Mt(t, i, s) {
      (i = ce(i)),
        (s = ce(s)),
        typeof i == "string" && !s && (s = Hs(i) + ".json");
      let h = typeof s == "string" ? Wt(s) : Promise.resolve(s);
      return L.sprites.add(
        t,
        h.then((a) => {
          let u = a.meta.size,
            g = a.frames.map(
              (m) =>
                new ge(
                  m.frame.x / u.w,
                  m.frame.y / u.h,
                  m.frame.w / u.w,
                  m.frame.h / u.h,
                ),
            ),
            A = {};
          for (let m of a.meta.frameTags)
            m.from === m.to
              ? (A[m.name] = m.from)
              : (A[m.name] = {
                  from: m.from,
                  to: m.to,
                  speed: 10,
                  loop: !0,
                  pingpong: m.direction === "pingpong",
                });
          return Q.from(i, { frames: g, anims: A });
        }),
      );
    }
    o(Mt, "loadAseprite");
    function er(t, i, s) {
      return L.shaders.addLoaded(t, et(i, s));
    }
    o(er, "loadShader");
    function tr(t, i, s) {
      (i = ce(i)), (s = ce(s));
      let h = o((u) => (u ? ds(u) : Promise.resolve(null)), "resolveUrl"),
        a = Promise.all([h(i), h(s)]).then(([u, g]) => et(u, g));
      return L.shaders.add(t, a);
    }
    o(tr, "loadShaderURL");
    function rr(t, i) {
      return (
        (i = ce(i)),
        L.sounds.add(
          t,
          typeof i == "string" ? ie.fromURL(i) : ie.fromArrayBuffer(i),
        )
      );
    }
    o(rr, "loadSound");
    function ir(t = "bean") {
      return Le(t, _s);
    }
    o(ir, "loadBean");
    function Pt(t) {
      return L.sprites.get(t);
    }
    o(Pt, "getSprite");
    function Tt(t) {
      return L.sounds.get(t);
    }
    o(Tt, "getSound");
    function Ft(t) {
      return L.fonts.get(t);
    }
    o(Ft, "getFont");
    function dt(t) {
      return L.bitmapFonts.get(t);
    }
    o(dt, "getBitmapFont");
    function ct(t) {
      return L.shaders.get(t);
    }
    o(ct, "getShader");
    function Bt(t) {
      return L.custom.get(t);
    }
    o(Bt, "getAsset");
    function $e(t) {
      if (typeof t == "string") {
        let i = Pt(t);
        if (i) return i;
        if (j() < 1) return null;
        throw new Error(`Sprite not found: ${t}`);
      } else {
        if (t instanceof Q) return Fe.loaded(t);
        if (t instanceof Fe) return t;
        throw new Error(`Invalid sprite: ${t}`);
      }
    }
    o($e, "resolveSprite");
    function Ct(t) {
      if (typeof t == "string") {
        let i = Tt(t);
        if (i) return i;
        if (j() < 1) return null;
        throw new Error(`Sound not found: ${t}`);
      } else {
        if (t instanceof ie) return Fe.loaded(t);
        if (t instanceof Fe) return t;
        throw new Error(`Invalid sound: ${t}`);
      }
    }
    o(Ct, "resolveSound");
    function It(t) {
      if (!t) return v.defShader;
      if (typeof t == "string") {
        let i = ct(t);
        if (i) return i.data ?? i;
        if (j() < 1) return null;
        throw new Error(`Shader not found: ${t}`);
      } else if (t instanceof Fe) return t.data ? t.data : t;
      return t;
    }
    o(It, "resolveShader");
    function ft(t) {
      if (!t) return ft(r.font ?? io);
      if (typeof t == "string") {
        let i = dt(t),
          s = Ft(t);
        if (i) return i.data ?? i;
        if (s) return s.data ?? s;
        if (document.fonts.check(`${mr}px ${t}`)) return t;
        if (j() < 1) return null;
        throw new Error(`Font not found: ${t}`);
      } else if (t instanceof Fe) return t.data ? t.data : t;
      return t;
    }
    o(ft, "resolveFont");
    function Dt(t) {
      return (
        t !== void 0 && (Z.masterNode.gain.value = t), Z.masterNode.gain.value
      );
    }
    o(Dt, "volume");
    function pt(t, i = {}) {
      let s = Z.ctx,
        h = i.paused ?? !1,
        a = s.createBufferSource(),
        u = new Ie(),
        g = s.createGain(),
        A = i.seek ?? 0,
        m = 0,
        c = 0,
        w = !1;
      (a.loop = !!i.loop),
        (a.detune.value = i.detune ?? 0),
        (a.playbackRate.value = i.speed ?? 1),
        a.connect(g),
        (a.onended = () => {
          O() >= a.buffer?.duration && u.trigger();
        }),
        g.connect(Z.masterNode),
        (g.gain.value = i.volume ?? 1);
      let F = o((k) => {
          (a.buffer = k.buf),
            h || ((m = s.currentTime), a.start(0, A), (w = !0));
        }, "start"),
        C = Ct(t);
      C instanceof Fe && C.onLoad(F);
      let O = o(() => {
          if (!a.buffer) return 0;
          let k = h ? c - m : s.currentTime - m,
            G = a.buffer.duration;
          return a.loop ? k % G : Math.min(k, G);
        }, "getTime"),
        H = o((k) => {
          let G = s.createBufferSource();
          return (
            (G.buffer = k.buffer),
            (G.loop = k.loop),
            (G.playbackRate.value = k.playbackRate.value),
            (G.detune.value = k.detune.value),
            (G.onended = k.onended),
            G.connect(g),
            G
          );
        }, "cloneNode");
      return {
        stop() {
          (this.paused = !0), this.seek(0);
        },
        set paused(k) {
          if (h !== k)
            if (((h = k), k)) w && (a.stop(), (w = !1)), (c = s.currentTime);
            else {
              a = H(a);
              let G = c - m;
              a.start(0, G), (w = !0), (m = s.currentTime - G), (c = 0);
            }
        },
        get paused() {
          return h;
        },
        play(k = 0) {
          this.seek(k), (this.paused = !1);
        },
        seek(k) {
          a.buffer?.duration &&
            (k > a.buffer.duration ||
              (h
                ? ((a = H(a)), (m = c - k))
                : (a.stop(),
                  (a = H(a)),
                  (m = s.currentTime - k),
                  a.start(0, k),
                  (w = !0),
                  (c = 0))));
        },
        set speed(k) {
          a.playbackRate.value = k;
        },
        get speed() {
          return a.playbackRate.value;
        },
        set detune(k) {
          a.detune.value = k;
        },
        get detune() {
          return a.detune.value;
        },
        set volume(k) {
          g.gain.value = Math.max(k, 0);
        },
        get volume() {
          return g.gain.value;
        },
        set loop(k) {
          a.loop = k;
        },
        get loop() {
          return a.loop;
        },
        duration() {
          return a.buffer?.duration ?? 0;
        },
        time() {
          return O() % this.duration();
        },
        onEnd(k) {
          return u.add(k);
        },
        then(k) {
          return this.onEnd(k);
        },
      };
    }
    o(pt, "play");
    function gt(t) {
      return pt(Z.burpSnd, t);
    }
    o(gt, "burp");
    function kt(t, i) {
      return new dr(B, t, i);
    }
    o(kt, "makeCanvas");
    function et(t = Qr, i = zr) {
      let s = co.replace("{{user}}", t ?? Qr),
        h = fo.replace("{{user}}", i ?? zr);
      try {
        return new Xs(
          B,
          s,
          h,
          ii.map((a) => a.name),
        );
      } catch (a) {
        let u = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/,
          g = Ks(a).match(u),
          A = Number(g.groups.line) - 14,
          m = g.groups.msg.trim(),
          c = g.groups.type.toLowerCase();
        throw new Error(`${c} shader line ${A}: ${m}`);
      }
    }
    o(et, "makeShader");
    function Nt(t, i, s, h) {
      let a = t.width / i,
        u = {},
        g = h.split("").entries();
      for (let [A, m] of g)
        u[m] = new ge((A % a) * i, Math.floor(A / a) * s, i, s);
      return { tex: t, map: u, size: s };
    }
    o(Nt, "makeFont");
    function tt(t, i, s, h = v.defTex, a = v.defShader, u = {}) {
      let g = It(a);
      if (!g || g instanceof Fe) return;
      let A = v.fixed || s ? v.transform : R.cam.transform.mult(v.transform),
        m = [];
      for (let c of t) {
        let w = Ut(A.multVec2(c.pos));
        m.push(
          w.x,
          w.y,
          c.uv.x,
          c.uv.y,
          c.color.r / 255,
          c.color.g / 255,
          c.color.b / 255,
          c.opacity,
        );
      }
      v.renderer.push(S.TRIANGLES, m, i, g, h, u);
    }
    o(tt, "drawRaw");
    function Te() {
      v.renderer.flush();
    }
    o(Te, "flush");
    function rt() {
      S.clear(S.COLOR_BUFFER_BIT),
        v.frameBuffer.bind(),
        S.clear(S.COLOR_BUFFER_BIT),
        v.bgColor ||
          Se(() => {
            ke({
              width: Ae(),
              height: Ve(),
              quad: new ge(0, 0, Ae() / Tn, Ve() / Tn),
              tex: v.bgTex,
              fixed: !0,
            });
          }),
        (v.renderer.numDraws = 0),
        (v.fixed = !1),
        (v.transformStack.length = 0),
        (v.transform = new Ne());
    }
    o(rt, "frameStart");
    function mt(t, i) {
      (v.postShader = t), (v.postShaderUniform = i ?? null);
    }
    o(mt, "usePostEffect");
    function it() {
      Te(),
        (v.lastDrawCalls = v.renderer.numDraws),
        v.frameBuffer.unbind(),
        S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
      let t = v.width,
        i = v.height;
      (v.width = S.drawingBufferWidth / T),
        (v.height = S.drawingBufferHeight / T),
        Qe({
          flipY: !0,
          tex: v.frameBuffer.tex,
          pos: new b(v.viewport.x, v.viewport.y),
          width: v.viewport.width,
          height: v.viewport.height,
          shader: v.postShader,
          uniform:
            typeof v.postShaderUniform == "function"
              ? v.postShaderUniform()
              : v.postShaderUniform,
          fixed: !0,
        }),
        Te(),
        (v.width = t),
        (v.height = i);
    }
    o(it, "frameEnd");
    function Ut(t) {
      return new b((t.x / Ae()) * 2 - 1, (-t.y / Ve()) * 2 + 1);
    }
    o(Ut, "screen2ndc");
    function wt(t) {
      v.transform = t.clone();
    }
    o(wt, "pushMatrix");
    function te(...t) {
      if (t[0] === void 0) return;
      let i = P(...t);
      (i.x === 0 && i.y === 0) || v.transform.translate(i);
    }
    o(te, "pushTranslate");
    function De(...t) {
      if (t[0] === void 0) return;
      let i = P(...t);
      (i.x === 1 && i.y === 1) || v.transform.scale(i);
    }
    o(De, "pushScale");
    function ne(t) {
      t && v.transform.rotate(t);
    }
    o(ne, "pushRotate");
    function le() {
      v.transformStack.push(v.transform.clone());
    }
    o(le, "pushTransform");
    function oe() {
      v.transformStack.length > 0 && (v.transform = v.transformStack.pop());
    }
    o(oe, "popTransform");
    function ke(t) {
      if (t.width === void 0 || t.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0) return;
      let i = t.width,
        s = t.height,
        h = ot(t.anchor || pr).scale(new b(i, s).scale(-0.5)),
        a = t.quad || new ge(0, 0, 1, 1),
        u = t.color || _(255, 255, 255),
        g = t.opacity ?? 1,
        A = t.tex ? Dn / t.tex.width : 0,
        m = t.tex ? Dn / t.tex.height : 0,
        c = a.x + A,
        w = a.y + m,
        F = a.w - A * 2,
        C = a.h - m * 2;
      le(),
        te(t.pos),
        ne(t.angle),
        De(t.scale),
        te(h),
        tt(
          [
            {
              pos: new b(-i / 2, s / 2),
              uv: new b(t.flipX ? c + F : c, t.flipY ? w : w + C),
              color: u,
              opacity: g,
            },
            {
              pos: new b(-i / 2, -s / 2),
              uv: new b(t.flipX ? c + F : c, t.flipY ? w + C : w),
              color: u,
              opacity: g,
            },
            {
              pos: new b(i / 2, -s / 2),
              uv: new b(t.flipX ? c : c + F, t.flipY ? w + C : w),
              color: u,
              opacity: g,
            },
            {
              pos: new b(i / 2, s / 2),
              uv: new b(t.flipX ? c : c + F, t.flipY ? w : w + C),
              color: u,
              opacity: g,
            },
          ],
          [0, 1, 3, 1, 2, 3],
          t.fixed,
          t.tex,
          t.shader,
          t.uniform,
        ),
        oe();
    }
    o(ke, "drawUVQuad");
    function Qe(t) {
      if (!t.tex) throw new Error('drawTexture() requires property "tex".');
      let i = t.quad ?? new ge(0, 0, 1, 1),
        s = t.tex.width * i.w,
        h = t.tex.height * i.h,
        a = new b(1);
      if (t.tiled) {
        let u = Math.ceil((t.width || s) / s),
          g = Math.ceil((t.height || h) / h),
          A = ot(t.anchor || pr)
            .add(new b(1, 1))
            .scale(0.5)
            .scale(u * s, g * h);
        for (let m = 0; m < u; m++)
          for (let c = 0; c < g; c++)
            ke(
              Object.assign({}, t, {
                pos: (t.pos || new b(0)).add(new b(s * m, h * c)).sub(A),
                scale: a.scale(t.scale || new b(1)),
                tex: t.tex,
                quad: i,
                width: s,
                height: h,
                anchor: "topleft",
              }),
            );
      } else
        t.width && t.height
          ? ((a.x = t.width / s), (a.y = t.height / h))
          : t.width
            ? ((a.x = t.width / s), (a.y = a.x))
            : t.height && ((a.y = t.height / h), (a.x = a.y)),
          ke(
            Object.assign({}, t, {
              scale: a.scale(t.scale || new b(1)),
              tex: t.tex,
              quad: i,
              width: s,
              height: h,
            }),
          );
    }
    o(Qe, "drawTexture");
    function nr(t) {
      if (!t.sprite) throw new Error('drawSprite() requires property "sprite"');
      let i = $e(t.sprite);
      if (!i || !i.data) return;
      let s = i.data.frames[t.frame ?? 0];
      if (!s) throw new Error(`Frame not found: ${t.frame ?? 0}`);
      Qe(
        Object.assign({}, t, {
          tex: i.data.tex,
          quad: s.scale(t.quad ?? new ge(0, 0, 1, 1)),
        }),
      );
    }
    o(nr, "drawSprite");
    function Ge(t, i, s, h, a, u = 1) {
      (h = Ue(h % 360)), (a = Ue(a % 360)), a <= h && (a += Math.PI * 2);
      let g = [],
        A = Math.ceil(((a - h) / Ue(8)) * u),
        m = (a - h) / A;
      for (let c = h; c < a; c += m)
        g.push(t.add(i * Math.cos(c), s * Math.sin(c)));
      return g.push(t.add(i * Math.cos(a), s * Math.sin(a))), g;
    }
    o(Ge, "getArcPts");
    function we(t) {
      if (t.width === void 0 || t.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0) return;
      let i = t.width,
        s = t.height,
        h = ot(t.anchor || pr)
          .add(1, 1)
          .scale(new b(i, s).scale(-0.5)),
        a = [new b(0, 0), new b(i, 0), new b(i, s), new b(0, s)];
      if (t.radius) {
        let u = Math.min(Math.min(i, s) / 2, t.radius);
        a = [
          new b(u, 0),
          new b(i - u, 0),
          ...Ge(new b(i - u, u), u, u, 270, 360),
          new b(i, u),
          new b(i, s - u),
          ...Ge(new b(i - u, s - u), u, u, 0, 90),
          new b(i - u, s),
          new b(u, s),
          ...Ge(new b(u, s - u), u, u, 90, 180),
          new b(0, s - u),
          new b(0, u),
          ...Ge(new b(u, u), u, u, 180, 270),
        ];
      }
      de(
        Object.assign({}, t, {
          offset: h,
          pts: a,
          ...(t.gradient
            ? {
                colors: t.horizontal
                  ? [t.gradient[0], t.gradient[1], t.gradient[1], t.gradient[0]]
                  : [
                      t.gradient[0],
                      t.gradient[0],
                      t.gradient[1],
                      t.gradient[1],
                    ],
              }
            : {}),
        }),
      );
    }
    o(we, "drawRect");
    function f(t) {
      let { p1: i, p2: s } = t;
      if (!i || !s)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let h = t.width || 1,
        a = s
          .sub(i)
          .unit()
          .normal()
          .scale(h * 0.5),
        u = [i.sub(a), i.add(a), s.add(a), s.sub(a)].map((g) => ({
          pos: new b(g.x, g.y),
          uv: new b(0),
          color: t.color ?? re.WHITE,
          opacity: t.opacity ?? 1,
        }));
      tt(u, [0, 1, 3, 1, 2, 3], t.fixed, v.defTex, t.shader, t.uniform);
    }
    o(f, "drawLine");
    function x(t) {
      let i = t.pts;
      if (!i) throw new Error('drawLines() requires property "pts".');
      if (!(i.length < 2))
        if (t.radius && i.length >= 3) {
          let s = i[0].sdist(i[1]);
          for (let a = 1; a < i.length - 1; a++)
            s = Math.min(i[a].sdist(i[a + 1]), s);
          let h = Math.min(t.radius, Math.sqrt(s) / 2);
          f(Object.assign({}, t, { p1: i[0], p2: i[1] }));
          for (let a = 1; a < i.length - 2; a++) {
            let u = i[a],
              g = i[a + 1];
            f(Object.assign({}, t, { p1: u, p2: g }));
          }
          f(Object.assign({}, t, { p1: i[i.length - 2], p2: i[i.length - 1] }));
        } else
          for (let s = 0; s < i.length - 1; s++)
            f(Object.assign({}, t, { p1: i[s], p2: i[s + 1] })),
              t.join !== "none" &&
                Y(Object.assign({}, t, { pos: i[s], radius: t.width / 2 }));
    }
    o(x, "drawLines");
    function M(t) {
      if (!t.p1 || !t.p2 || !t.p3)
        throw new Error(
          'drawTriangle() requires properties "p1", "p2" and "p3".',
        );
      return de(Object.assign({}, t, { pts: [t.p1, t.p2, t.p3] }));
    }
    o(M, "drawTriangle");
    function Y(t) {
      if (typeof t.radius != "number")
        throw new Error('drawCircle() requires property "radius".');
      t.radius !== 0 &&
        z(
          Object.assign({}, t, {
            radiusX: t.radius,
            radiusY: t.radius,
            angle: 0,
          }),
        );
    }
    o(Y, "drawCircle");
    function z(t) {
      if (t.radiusX === void 0 || t.radiusY === void 0)
        throw new Error(
          'drawEllipse() requires properties "radiusX" and "radiusY".',
        );
      if (t.radiusX === 0 || t.radiusY === 0) return;
      let i = t.start ?? 0,
        s = t.end ?? 360,
        h = ot(t.anchor ?? "center").scale(new b(-t.radiusX, -t.radiusY)),
        a = Ge(h, t.radiusX, t.radiusY, i, s, t.resolution);
      a.unshift(h);
      let u = Object.assign({}, t, {
        pts: a,
        radius: 0,
        ...(t.gradient
          ? {
              colors: [
                t.gradient[0],
                ...Array(a.length - 1).fill(t.gradient[1]),
              ],
            }
          : {}),
      });
      if (s - i >= 360 && t.outline) {
        t.fill !== !1 && de(Object.assign(u, { outline: null })),
          de(Object.assign(u, { pts: a.slice(1), fill: !1 }));
        return;
      }
      de(u);
    }
    o(z, "drawEllipse");
    function de(t) {
      if (!t.pts) throw new Error('drawPolygon() requires property "pts".');
      let i = t.pts.length;
      if (!(i < 3)) {
        if (
          (le(),
          te(t.pos),
          De(t.scale),
          ne(t.angle),
          te(t.offset),
          t.fill !== !1)
        ) {
          let s = t.color ?? re.WHITE,
            h = t.pts.map((u, g) => ({
              pos: new b(u.x, u.y),
              uv: new b(0, 0),
              color: t.colors && t.colors[g] ? t.colors[g].mult(s) : s,
              opacity: t.opacity ?? 1,
            })),
            a = [...Array(i - 2).keys()].map((u) => [0, u + 1, u + 2]).flat();
          tt(h, t.indices ?? a, t.fixed, v.defTex, t.shader, t.uniform);
        }
        t.outline &&
          x({
            pts: [...t.pts, t.pts[0]],
            radius: t.radius,
            width: t.outline.width,
            color: t.outline.color,
            join: t.outline.join,
            uniform: t.uniform,
            fixed: t.fixed,
            opacity: t.opacity,
          }),
          oe();
      }
    }
    o(de, "drawPolygon");
    function be(t, i, s) {
      Te(),
        S.clear(S.STENCIL_BUFFER_BIT),
        S.enable(S.STENCIL_TEST),
        S.stencilFunc(S.NEVER, 1, 255),
        S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE),
        i(),
        Te(),
        S.stencilFunc(s, 1, 255),
        S.stencilOp(S.KEEP, S.KEEP, S.KEEP),
        t(),
        Te(),
        S.disable(S.STENCIL_TEST);
    }
    o(be, "drawStenciled");
    function Lt(t, i) {
      be(t, i, S.EQUAL);
    }
    o(Lt, "drawMasked");
    function Gt(t, i) {
      be(t, i, S.NOTEQUAL);
    }
    o(Gt, "drawSubtracted");
    function Be() {
      return (v.viewport.width + v.viewport.height) / (v.width + v.height);
    }
    o(Be, "getViewportScale");
    function Se(t) {
      Te();
      let i = v.width,
        s = v.height;
      (v.width = v.viewport.width),
        (v.height = v.viewport.height),
        t(),
        Te(),
        (v.width = i),
        (v.height = s);
    }
    o(Se, "drawUnscaled");
    function br(t, i) {
      i.pos && (t.pos = t.pos.add(i.pos)),
        i.scale && (t.scale = t.scale.scale(P(i.scale))),
        i.angle && (t.angle += i.angle),
        i.color && t.ch.length === 1 && (t.color = t.color.mult(i.color)),
        i.opacity && (t.opacity *= i.opacity);
    }
    o(br, "applyCharTransform");
    let li = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
    function ui(t) {
      let i = {},
        s = t.replace(li, "$2"),
        h = 0;
      for (let a of t.matchAll(li)) {
        let u = a.index - h;
        for (let g = 0; g < a.groups.text.length; g++)
          i[g + u] = [a.groups.style];
        h += a[0].length - a.groups.text.length;
      }
      return { charStyleMap: i, text: s };
    }
    o(ui, "compileStyledText");
    let Sr = {};
    function ze(t) {
      if (t.text === void 0)
        throw new Error('formatText() requires property "text".');
      let i = ft(t.font);
      if (t.text === "" || i instanceof Fe || !i)
        return { width: 0, height: 0, chars: [], opt: t };
      let { charStyleMap: s, text: h } = ui(t.text + ""),
        a = _n(h);
      if (i instanceof ye || typeof i == "string") {
        let J = i instanceof ye ? i.fontface.family : i,
          X =
            i instanceof ye
              ? { outline: i.outline, filter: i.filter }
              : { outline: null, filter: jr },
          q = Sr[J] ?? {
            font: {
              tex: new at(B, Fn, Bn, { filter: X.filter }),
              map: {},
              size: mr,
            },
            cursor: new b(0),
            outline: X.outline,
          };
        Sr[J] || (Sr[J] = q), (i = q.font);
        for (let fe of a)
          if (!q.font.map[fe]) {
            let E = K;
            E.clearRect(0, 0, N.width, N.height),
              (E.font = `${i.size}px ${J}`),
              (E.textBaseline = "top"),
              (E.textAlign = "left"),
              (E.fillStyle = "#ffffff");
            let I = E.measureText(fe),
              D = Math.ceil(I.width),
              U = i.size;
            q.outline &&
              ((E.lineJoin = "round"),
              (E.lineWidth = q.outline.width * 2),
              (E.strokeStyle = q.outline.color.toHex()),
              E.strokeText(fe, q.outline.width, q.outline.width),
              (D += q.outline.width * 2),
              (U += q.outline.width * 3)),
              E.fillText(fe, q.outline?.width ?? 0, q.outline?.width ?? 0);
            let W = E.getImageData(0, 0, D, U);
            if (
              q.cursor.x + D > Fn &&
              ((q.cursor.x = 0), (q.cursor.y += U), q.cursor.y > Bn)
            )
              throw new Error("Font atlas exceeds character limit");
            i.tex.update(W, q.cursor.x, q.cursor.y),
              (i.map[fe] = new ge(q.cursor.x, q.cursor.y, D, U)),
              (q.cursor.x += D);
          }
      }
      let u = t.size || i.size,
        g = P(t.scale ?? 1).scale(u / i.size),
        A = t.lineSpacing ?? 0,
        m = t.letterSpacing ?? 0,
        c = 0,
        w = 0,
        F = 0,
        C = [],
        O = [],
        H = 0,
        k = null,
        G = null;
      for (; H < a.length; ) {
        let J = a[H];
        if (
          J ===
          `
`
        )
          (F += u + A),
            C.push({ width: c - m, chars: O }),
            (k = null),
            (G = null),
            (c = 0),
            (O = []);
        else {
          let X = i.map[J];
          if (X) {
            let q = X.w * g.x;
            t.width &&
              c + q > t.width &&
              ((F += u + A),
              k != null &&
                ((H -= O.length - k),
                (J = a[H]),
                (X = i.map[J]),
                (q = X.w * g.x),
                (O = O.slice(0, k - 1)),
                (c = G)),
              (k = null),
              (G = null),
              C.push({ width: c - m, chars: O }),
              (c = 0),
              (O = [])),
              O.push({
                tex: i.tex,
                width: X.w,
                height: X.h,
                quad: new ge(
                  X.x / i.tex.width,
                  X.y / i.tex.height,
                  X.w / i.tex.width,
                  X.h / i.tex.height,
                ),
                ch: J,
                pos: new b(c, F),
                opacity: t.opacity ?? 1,
                color: t.color ?? re.WHITE,
                scale: P(g),
                angle: 0,
              }),
              J === " " && ((k = O.length), (G = c)),
              (c += q),
              (w = Math.max(w, c)),
              (c += m);
          }
        }
        H++;
      }
      C.push({ width: c - m, chars: O }), (F += u), t.width && (w = t.width);
      let Re = [];
      for (let J of C) {
        let X = (w - J.width) * ps(t.align ?? "left");
        for (let q of J.chars) {
          let fe = i.map[q.ch],
            E = Re.length;
          if (
            ((q.pos = q.pos.add(X, 0).add(fe.w * g.x * 0.5, fe.h * g.y * 0.5)),
            t.transform)
          ) {
            let I =
              typeof t.transform == "function"
                ? t.transform(E, q.ch)
                : t.transform;
            I && br(q, I);
          }
          if (s[E]) {
            let I = s[E];
            for (let D of I) {
              let U = t.styles[D],
                W = typeof U == "function" ? U(E, q.ch) : U;
              W && br(q, W);
            }
          }
          Re.push(q);
        }
      }
      return { width: w, height: F, chars: Re, opt: t };
    }
    o(ze, "formatText");
    function Rr(t) {
      Je(ze(t));
    }
    o(Rr, "drawText");
    function Je(t) {
      le(),
        te(t.opt.pos),
        ne(t.opt.angle),
        te(
          ot(t.opt.anchor ?? "topleft")
            .add(1, 1)
            .scale(t.width, t.height)
            .scale(-0.5),
        ),
        t.chars.forEach((i) => {
          ke({
            tex: i.tex,
            width: i.width,
            height: i.height,
            pos: i.pos,
            scale: i.scale,
            angle: i.angle,
            color: i.color,
            opacity: i.opacity,
            quad: i.quad,
            anchor: "center",
            uniform: t.opt.uniform,
            shader: t.opt.shader,
            fixed: t.opt.fixed,
          });
        }),
        oe();
    }
    o(Je, "drawFormattedText");
    function Ae() {
      return v.width;
    }
    o(Ae, "width");
    function Ve() {
      return v.height;
    }
    o(Ve, "height");
    function di(t) {
      return new b(
        ((t.x - v.viewport.x) * Ae()) / v.viewport.width,
        ((t.y - v.viewport.y) * Ve()) / v.viewport.height,
      );
    }
    o(di, "windowToContent");
    function ci(t) {
      return new b(
        (t.x * v.viewport.width) / v.width,
        (t.y * v.viewport.height) / v.height,
      );
    }
    o(ci, "contentToView");
    function Ot() {
      return di(y.mousePos());
    }
    o(Ot, "mousePos");
    let fi = !1,
      se = {
        inspect: !1,
        timeScale: 1,
        showLog: !0,
        fps: () => y.fps(),
        numFrames: () => y.numFrames(),
        stepFrame: Ur,
        drawCalls: () => v.lastDrawCalls,
        clearLog: () => (R.logs = []),
        log: (t) => {
          let i = r.logMax ?? oo;
          R.logs.unshift({ msg: t, time: y.time() }),
            R.logs.length > i && (R.logs = R.logs.slice(0, i));
        },
        error: (t) => se.log(new Error(t.toString ? t.toString() : t)),
        curRecording: null,
        numObjects: () => Dr("*", { recursive: !0 }).length,
        get paused() {
          return fi;
        },
        set paused(t) {
          (fi = t), t ? Z.ctx.suspend() : Z.ctx.resume();
        },
      };
    function Ce() {
      return y.dt() * se.timeScale;
    }
    o(Ce, "dt");
    function pi(...t) {
      return (
        t.length > 0 && (R.cam.pos = P(...t)),
        R.cam.pos ? R.cam.pos.clone() : jt()
      );
    }
    o(pi, "camPos");
    function gi(...t) {
      return t.length > 0 && (R.cam.scale = P(...t)), R.cam.scale.clone();
    }
    o(gi, "camScale");
    function mi(t) {
      return t !== void 0 && (R.cam.angle = t), R.cam.angle;
    }
    o(mi, "camRot");
    function wi(t = 12) {
      R.cam.shake += t;
    }
    o(wi, "shake");
    function Mr(t) {
      return R.cam.transform.multVec2(t);
    }
    o(Mr, "toScreen");
    function Pr(t) {
      return R.cam.transform.invert().multVec2(t);
    }
    o(Pr, "toWorld");
    function Ht(t) {
      let i = new Ne();
      return (
        t.pos && i.translate(t.pos),
        t.scale && i.scale(t.scale),
        t.angle && i.rotate(t.angle),
        t.parent ? i.mult(t.parent.transform) : i
      );
    }
    o(Ht, "calcTransform");
    function sr(t = []) {
      let i = new Map(),
        s = {},
        h = new Xt(),
        a = [],
        u = null,
        g = !1,
        A = {
          id: qs(),
          hidden: !1,
          transform: new Ne(),
          children: [],
          parent: null,
          set paused(c) {
            if (c !== g) {
              g = c;
              for (let w of a) w.paused = c;
            }
          },
          get paused() {
            return g;
          },
          add(c = []) {
            let w = Array.isArray(c) ? sr(c) : c;
            if (w.parent)
              throw new Error(
                "Cannot add a game obj that already has a parent.",
              );
            return (
              (w.parent = this),
              (w.transform = Ht(w)),
              this.children.push(w),
              w.trigger("add", w),
              R.events.trigger("add", w),
              w
            );
          },
          readd(c) {
            let w = this.children.indexOf(c);
            return (
              w !== -1 && (this.children.splice(w, 1), this.children.push(c)), c
            );
          },
          remove(c) {
            let w = this.children.indexOf(c);
            if (w !== -1) {
              (c.parent = null), this.children.splice(w, 1);
              let F = o((C) => {
                C.trigger("destroy"),
                  R.events.trigger("destroy", C),
                  C.children.forEach((O) => F(O));
              }, "trigger");
              F(c);
            }
          },
          removeAll(c) {
            if (c) this.get(c).forEach((w) => this.remove(w));
            else for (let w of [...this.children]) this.remove(w);
          },
          update() {
            this.paused ||
              (this.children
                .sort((c, w) => (c.z ?? 0) - (w.z ?? 0))
                .forEach((c) => c.update()),
              this.trigger("update"));
          },
          draw() {
            if (this.hidden) return;
            this.canvas && this.canvas.bind();
            let c = v.fixed;
            this.fixed && (v.fixed = !0),
              le(),
              te(this.pos),
              De(this.scale),
              ne(this.angle);
            let w = this.children.sort((F, C) => (F.z ?? 0) - (C.z ?? 0));
            if (this.mask) {
              let F = { intersect: Lt, subtract: Gt }[this.mask];
              if (!F) throw new Error(`Invalid mask func: "${this.mask}"`);
              F(
                () => {
                  w.forEach((C) => C.draw());
                },
                () => {
                  this.trigger("draw");
                },
              );
            } else this.trigger("draw"), w.forEach((F) => F.draw());
            oe(), (v.fixed = c), this.canvas && this.canvas.unbind();
          },
          drawInspect() {
            this.hidden ||
              (le(),
              te(this.pos),
              De(this.scale),
              ne(this.angle),
              this.children
                .sort((c, w) => (c.z ?? 0) - (w.z ?? 0))
                .forEach((c) => c.drawInspect()),
              this.trigger("drawInspect"),
              oe());
          },
          use(c) {
            if (!c) return;
            if (typeof c == "string") return this.use({ id: c });
            let w = [];
            c.id &&
              (this.unuse(c.id), (s[c.id] = []), (w = s[c.id]), i.set(c.id, c));
            for (let C in c) {
              if (po.has(C)) continue;
              let O = Object.getOwnPropertyDescriptor(c, C);
              if (
                (typeof O.value == "function" && (c[C] = c[C].bind(this)),
                O.set && Object.defineProperty(c, C, { set: O.set.bind(this) }),
                O.get && Object.defineProperty(c, C, { get: O.get.bind(this) }),
                go.has(C))
              ) {
                let H =
                  C === "add"
                    ? () => {
                        (u = o((k) => w.push(k), "onCurCompCleanup")),
                          c[C](),
                          (u = null);
                      }
                    : c[C];
                w.push(this.on(C, H).cancel);
              } else if (this[C] === void 0)
                Object.defineProperty(this, C, {
                  get: () => c[C],
                  set: (H) => (c[C] = H),
                  configurable: !0,
                  enumerable: !0,
                }),
                  w.push(() => delete this[C]);
              else throw new Error(`Duplicate component property: "${C}"`);
            }
            let F = o(() => {
              if (c.require) {
                for (let C of c.require)
                  if (!this.c(C))
                    throw new Error(
                      `Component "${c.id}" requires component "${C}"`,
                    );
              }
            }, "checkDeps");
            c.destroy && w.push(c.destroy.bind(this)),
              this.exists()
                ? (F(),
                  c.add &&
                    ((u = o((C) => w.push(C), "onCurCompCleanup")),
                    c.add.call(this),
                    (u = null)))
                : c.require && w.push(this.on("add", F).cancel);
          },
          unuse(c) {
            s[c] && (s[c].forEach((w) => w()), delete s[c]),
              i.has(c) && i.delete(c);
          },
          c(c) {
            return i.get(c);
          },
          get(c, w = {}) {
            let F = w.recursive
              ? this.children.flatMap(
                  o(function C(O) {
                    return [O, ...O.children.flatMap(C)];
                  }, "recurse"),
                )
              : this.children;
            if (((F = F.filter((C) => (c ? C.is(c) : !0))), w.liveUpdate)) {
              let C = o(
                  (H) =>
                    w.recursive ? this.isAncestorOf(H) : H.parent === this,
                  "isChild",
                ),
                O = [];
              O.push(
                Tr((H) => {
                  C(H) && H.is(c) && F.push(H);
                }),
              ),
                O.push(
                  Ai((H) => {
                    if (C(H) && H.is(c)) {
                      let k = F.findIndex((G) => G.id === H.id);
                      k !== -1 && F.splice(k, 1);
                    }
                  }),
                ),
                this.onDestroy(() => {
                  for (let H of O) H.cancel();
                });
            }
            return F;
          },
          isAncestorOf(c) {
            return c.parent
              ? c.parent === this || this.isAncestorOf(c.parent)
              : !1;
          },
          exists() {
            return R.root.isAncestorOf(this);
          },
          is(c) {
            if (c === "*") return !0;
            if (Array.isArray(c)) {
              for (let w of c) if (!this.c(w)) return !1;
              return !0;
            } else return this.c(c) != null;
          },
          on(c, w) {
            let F = h.on(c, w.bind(this));
            return u && u(() => F.cancel()), F;
          },
          trigger(c, ...w) {
            h.trigger(c, ...w), R.objEvents.trigger(c, this, ...w);
          },
          destroy() {
            this.parent && this.parent.remove(this);
          },
          inspect() {
            let c = {};
            for (let [w, F] of i) c[w] = F.inspect ? F.inspect() : null;
            return c;
          },
          onAdd(c) {
            return this.on("add", c);
          },
          onUpdate(c) {
            return this.on("update", c);
          },
          onDraw(c) {
            return this.on("draw", c);
          },
          onDestroy(c) {
            return this.on("destroy", c);
          },
          clearEvents() {
            h.clear();
          },
        },
        m = [
          "onKeyPress",
          "onKeyPressRepeat",
          "onKeyDown",
          "onKeyRelease",
          "onMousePress",
          "onMouseDown",
          "onMouseRelease",
          "onMouseMove",
          "onCharInput",
          "onMouseMove",
          "onTouchStart",
          "onTouchMove",
          "onTouchEnd",
          "onScroll",
          "onGamepadButtonPress",
          "onGamepadButtonDown",
          "onGamepadButtonRelease",
          "onGamepadStick",
        ];
      for (let c of m)
        A[c] = (...w) => {
          let F = y[c](...w);
          return a.push(F), A.onDestroy(() => F.cancel()), F;
        };
      for (let c of t) A.use(c);
      return A;
    }
    o(sr, "make");
    function Oe(t, i, s) {
      return (
        R.objEvents[t] || (R.objEvents[t] = new zn()),
        R.objEvents.on(t, (h, ...a) => {
          h.is(i) && s(h, ...a);
        })
      );
    }
    o(Oe, "on");
    let xs = Me(
        (t) => {
          let i = Qt([{ update: t }]);
          return {
            get paused() {
              return i.paused;
            },
            set paused(s) {
              i.paused = s;
            },
            cancel: () => i.destroy(),
          };
        },
        (t, i) => Oe("update", t, i),
      ),
      Es = Me(
        (t) => {
          let i = Qt([{ draw: t }]);
          return {
            get paused() {
              return i.hidden;
            },
            set paused(s) {
              i.hidden = s;
            },
            cancel: () => i.destroy(),
          };
        },
        (t, i) => Oe("draw", t, i),
      ),
      Tr = Me(
        (t) => R.events.on("add", t),
        (t, i) => Oe("add", t, i),
      ),
      Ai = Me(
        (t) => R.events.on("destroy", t),
        (t, i) => Oe("destroy", t, i),
      );
    function Vi(t, i, s) {
      return Oe("collide", t, (h, a, u) => a.is(i) && s(h, a, u));
    }
    o(Vi, "onCollide");
    function vi(t, i, s) {
      return Oe("collideUpdate", t, (h, a, u) => a.is(i) && s(h, a, u));
    }
    o(vi, "onCollideUpdate");
    function yi(t, i, s) {
      return Oe("collideEnd", t, (h, a, u) => a.is(i) && s(h, a, u));
    }
    o(yi, "onCollideEnd");
    function qt(t, i) {
      Dr(t, { recursive: !0 }).forEach(i), Tr(t, i);
    }
    o(qt, "forAllCurrentAndFuture");
    let bs = Me(
      (t) => y.onMousePress(t),
      (t, i) => {
        let s = [];
        return (
          qt(t, (h) => {
            if (!h.area)
              throw new Error(
                "onClick() requires the object to have area() component",
              );
            s.push(h.onClick(() => i(h)));
          }),
          yt.join(s)
        );
      },
    );
    function xi(t, i) {
      let s = [];
      return (
        qt(t, (h) => {
          if (!h.area)
            throw new Error(
              "onHover() requires the object to have area() component",
            );
          s.push(h.onHover(() => i(h)));
        }),
        yt.join(s)
      );
    }
    o(xi, "onHover");
    function Ei(t, i) {
      let s = [];
      return (
        qt(t, (h) => {
          if (!h.area)
            throw new Error(
              "onHoverUpdate() requires the object to have area() component",
            );
          s.push(h.onHoverUpdate(() => i(h)));
        }),
        yt.join(s)
      );
    }
    o(Ei, "onHoverUpdate");
    function bi(t, i) {
      let s = [];
      return (
        qt(t, (h) => {
          if (!h.area)
            throw new Error(
              "onHoverEnd() requires the object to have area() component",
            );
          s.push(h.onHoverEnd(() => i(h)));
        }),
        yt.join(s)
      );
    }
    o(bi, "onHoverEnd");
    function Si(t) {
      R.gravity = t;
    }
    o(Si, "setGravity");
    function Ri() {
      return R.gravity;
    }
    o(Ri, "getGravity");
    function Mi(...t) {
      t.length === 1 || t.length === 2
        ? ((v.bgColor = _(t[0])), t[1] && (v.bgAlpha = t[1]))
        : (t.length === 3 || t.length === 4) &&
          ((v.bgColor = _(t[0], t[1], t[2])), t[3] && (v.bgAlpha = t[3])),
        S.clearColor(
          v.bgColor.r / 255,
          v.bgColor.g / 255,
          v.bgColor.b / 255,
          v.bgAlpha,
        );
    }
    o(Mi, "setBackground");
    function Pi() {
      return v.bgColor.clone();
    }
    o(Pi, "getBackground");
    function Kt(...t) {
      return {
        id: "pos",
        pos: P(...t),
        moveBy(...i) {
          this.pos = this.pos.add(P(...i));
        },
        move(...i) {
          this.moveBy(P(...i).scale(Ce()));
        },
        moveTo(...i) {
          if (typeof i[0] == "number" && typeof i[1] == "number")
            return this.moveTo(P(i[0], i[1]), i[2]);
          let s = i[0],
            h = i[1];
          if (h === void 0) {
            this.pos = P(s);
            return;
          }
          let a = s.sub(this.pos);
          if (a.len() <= h * Ce()) {
            this.pos = P(s);
            return;
          }
          this.move(a.unit().scale(h));
        },
        worldPos() {
          return this.parent
            ? this.parent.transform.multVec2(this.pos)
            : this.pos;
        },
        screenPos() {
          let i = this.worldPos();
          return Vt(this) ? i : Mr(i);
        },
        inspect() {
          return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
        },
        drawInspect() {
          Y({ color: _(255, 0, 0), radius: 4 / Be() });
        },
      };
    }
    o(Kt, "pos");
    function Yt(...t) {
      return t.length === 0
        ? Yt(1)
        : {
            id: "scale",
            scale: P(...t),
            scaleTo(...i) {
              this.scale = P(...i);
            },
            scaleBy(...i) {
              this.scale.scale(P(...i));
            },
            inspect() {
              return `(${At(this.scale.x, 2)}, ${At(this.scale.y, 2)})`;
            },
          };
    }
    o(Yt, "scale");
    function Ti(t) {
      return {
        id: "rotate",
        angle: t ?? 0,
        rotateBy(i) {
          this.angle += i;
        },
        rotateTo(i) {
          this.angle = i;
        },
        inspect() {
          return `${Math.round(this.angle)}`;
        },
      };
    }
    o(Ti, "rotate");
    function Fi(...t) {
      return {
        id: "color",
        color: _(...t),
        inspect() {
          return this.color.toString();
        },
      };
    }
    o(Fi, "color");
    function At(t, i) {
      return Number(t.toFixed(i));
    }
    o(At, "toFixed");
    function Bi(t) {
      return {
        id: "opacity",
        opacity: t ?? 1,
        inspect() {
          return `${At(this.opacity, 1)}`;
        },
        fadeOut(i = 1, s = fr.linear) {
          return kr(this.opacity, 0, i, (h) => (this.opacity = h), s);
        },
      };
    }
    o(Bi, "opacity");
    function or(t) {
      if (!t) throw new Error("Please define an anchor");
      return {
        id: "anchor",
        anchor: t,
        inspect() {
          return typeof this.anchor == "string"
            ? this.anchor
            : this.anchor.toString();
        },
      };
    }
    o(or, "anchor");
    function Ci(t) {
      return {
        id: "z",
        z: t,
        inspect() {
          return `${this.z}`;
        },
      };
    }
    o(Ci, "z");
    function Ii(t, i) {
      return {
        id: "follow",
        require: ["pos"],
        follow: { obj: t, offset: i ?? P(0) },
        add() {
          t.exists() &&
            (this.pos = this.follow.obj.pos.add(this.follow.offset));
        },
        update() {
          t.exists() &&
            (this.pos = this.follow.obj.pos.add(this.follow.offset));
        },
      };
    }
    o(Ii, "follow");
    function Di(t, i) {
      let s = typeof t == "number" ? b.fromAngle(t) : t.unit();
      return {
        id: "move",
        require: ["pos"],
        update() {
          this.move(s.scale(i));
        },
      };
    }
    o(Di, "move");
    let Ss = 200;
    function ki(t = {}) {
      let i = t.distance ?? Ss,
        s = !1;
      return {
        id: "offscreen",
        require: ["pos"],
        isOffScreen() {
          let h = this.screenPos(),
            a = new ve(P(0), Ae(), Ve());
          return !$t(a, h) && a.sdistToPoint(h) > i * i;
        },
        onExitScreen(h) {
          return this.on("exitView", h);
        },
        onEnterScreen(h) {
          return this.on("enterView", h);
        },
        update() {
          this.isOffScreen()
            ? (s || (this.trigger("exitView"), (s = !0)),
              t.hide && (this.hidden = !0),
              t.pause && (this.paused = !0),
              t.destroy && this.destroy())
            : (s && (this.trigger("enterView"), (s = !1)),
              t.hide && (this.hidden = !1),
              t.pause && (this.paused = !1));
        },
      };
    }
    o(ki, "offscreen");
    function Vt(t) {
      return t.fixed ? !0 : t.parent ? Vt(t.parent) : !1;
    }
    o(Vt, "isFixed");
    function Ni(t = {}) {
      let i = {},
        s = new Set();
      return {
        id: "area",
        collisionIgnore: t.collisionIgnore ?? [],
        add() {
          this.area.cursor && this.onHover(() => y.setCursor(this.area.cursor)),
            this.onCollideUpdate((h, a) => {
              i[h.id] || this.trigger("collide", h, a),
                (i[h.id] = a),
                s.add(h.id);
            });
        },
        update() {
          for (let h in i)
            s.has(Number(h)) ||
              (this.trigger("collideEnd", i[h].target), delete i[h]);
          s.clear();
        },
        drawInspect() {
          let h = this.localArea();
          le(), De(this.area.scale), te(this.area.offset);
          let a = {
            outline: { width: 4 / Be(), color: _(0, 0, 255) },
            anchor: this.anchor,
            fill: !1,
            fixed: Vt(this),
          };
          h instanceof ve
            ? we({ ...a, pos: h.pos, width: h.width, height: h.height })
            : h instanceof Jt
              ? de({ ...a, pts: h.pts })
              : h instanceof xn && Y({ ...a, pos: h.center, radius: h.radius }),
            oe();
        },
        area: {
          shape: t.shape ?? null,
          scale: t.scale ? P(t.scale) : P(1),
          offset: t.offset ?? P(0),
          cursor: t.cursor ?? null,
        },
        isClicked() {
          return y.isMousePressed() && this.isHovering();
        },
        isHovering() {
          let h = Vt(this) ? Ot() : Pr(Ot());
          return this.hasPoint(h);
        },
        checkCollision(h) {
          return i[h.id] ?? null;
        },
        getCollisions() {
          return Object.values(i);
        },
        isColliding(h) {
          return !!i[h.id];
        },
        isOverlapping(h) {
          let a = i[h.id];
          return a && a.hasOverlap();
        },
        onClick(h) {
          let a = y.onMousePress("left", () => {
            this.isHovering() && h();
          });
          return this.onDestroy(() => a.cancel()), a;
        },
        onHover(h) {
          let a = !1;
          return this.onUpdate(() => {
            a ? (a = this.isHovering()) : this.isHovering() && ((a = !0), h());
          });
        },
        onHoverUpdate(h) {
          return this.onUpdate(() => {
            this.isHovering() && h();
          });
        },
        onHoverEnd(h) {
          let a = !1;
          return this.onUpdate(() => {
            a ? this.isHovering() || ((a = !1), h()) : (a = this.isHovering());
          });
        },
        onCollide(h, a) {
          if (typeof h == "function" && a === void 0)
            return this.on("collide", h);
          if (typeof h == "string")
            return this.onCollide((u, g) => {
              u.is(h) && a(u, g);
            });
        },
        onCollideUpdate(h, a) {
          if (typeof h == "function" && a === void 0)
            return this.on("collideUpdate", h);
          if (typeof h == "string")
            return this.on("collideUpdate", (u, g) => u.is(h) && a(u, g));
        },
        onCollideEnd(h, a) {
          if (typeof h == "function" && a === void 0)
            return this.on("collideEnd", h);
          if (typeof h == "string")
            return this.on("collideEnd", (u) => u.is(h) && a(u));
        },
        hasPoint(h) {
          return ai(this.worldArea(), h);
        },
        resolveCollision(h) {
          let a = this.checkCollision(h);
          a &&
            !a.resolved &&
            ((this.pos = this.pos.add(a.displacement)), (a.resolved = !0));
        },
        localArea() {
          return this.area.shape ? this.area.shape : this.renderArea();
        },
        worldArea() {
          let h = this.localArea();
          if (!(h instanceof Jt || h instanceof ve))
            throw new Error("Only support polygon and rect shapes for now");
          let a = this.transform
            .clone()
            .scale(P(this.area.scale ?? 1))
            .translate(this.area.offset);
          if (h instanceof ve) {
            let u = ot(this.anchor || pr)
              .add(1, 1)
              .scale(-0.5)
              .scale(h.width, h.height);
            a.translate(u);
          }
          return h.transform(a);
        },
        screenArea() {
          let h = this.worldArea();
          return Vt(this) ? h : h.transform(R.cam.transform);
        },
      };
    }
    o(Ni, "area");
    function Xe(t) {
      return {
        color: t.color,
        opacity: t.opacity,
        anchor: t.anchor,
        outline: t.outline,
        shader: t.shader,
        uniform: t.uniform,
      };
    }
    o(Xe, "getRenderProps");
    function ar(t, i = {}) {
      let s = null,
        h = null,
        a = null,
        u = new Ie();
      if (!t)
        throw new Error("Please pass the resource name or data to sprite()");
      let g = o((A, m, c, w) => {
        let F = P(1, 1);
        return (
          c && w
            ? ((F.x = c / (A.width * m.w)), (F.y = w / (A.height * m.h)))
            : c
              ? ((F.x = c / (A.width * m.w)), (F.y = F.x))
              : w && ((F.y = w / (A.height * m.h)), (F.x = F.y)),
          F
        );
      }, "calcTexScale");
      return {
        id: "sprite",
        width: 0,
        height: 0,
        frame: i.frame || 0,
        quad: i.quad || new ge(0, 0, 1, 1),
        animSpeed: i.animSpeed ?? 1,
        flipX: i.flipX ?? !1,
        flipY: i.flipY ?? !1,
        draw() {
          if (!s) return;
          let A = s.frames[this.frame ?? 0];
          if (!A) throw new Error(`Frame not found: ${this.frame ?? 0}`);
          if (s.slice9) {
            let { left: m, right: c, top: w, bottom: F } = s.slice9,
              C = s.tex.width * A.w,
              O = s.tex.height * A.h,
              H = this.width - m - c,
              k = this.height - w - F,
              G = m / C,
              Re = c / C,
              J = 1 - G - Re,
              X = w / O,
              q = F / O,
              fe = 1 - X - q,
              E = [
                he(0, 0, G, X),
                he(G, 0, J, X),
                he(G + J, 0, Re, X),
                he(0, X, G, fe),
                he(G, X, J, fe),
                he(G + J, X, Re, fe),
                he(0, X + fe, G, q),
                he(G, X + fe, J, q),
                he(G + J, X + fe, Re, q),
                he(0, 0, m, w),
                he(m, 0, H, w),
                he(m + H, 0, c, w),
                he(0, w, m, k),
                he(m, w, H, k),
                he(m + H, w, c, k),
                he(0, w + k, m, F),
                he(m, w + k, H, F),
                he(m + H, w + k, c, F),
              ];
            for (let I = 0; I < 9; I++) {
              let D = E[I],
                U = E[I + 9];
              Qe(
                Object.assign(Xe(this), {
                  pos: U.pos(),
                  tex: s.tex,
                  quad: A.scale(D),
                  flipX: this.flipX,
                  flipY: this.flipY,
                  tiled: i.tiled,
                  width: U.w,
                  height: U.h,
                }),
              );
            }
          } else
            Qe(
              Object.assign(Xe(this), {
                tex: s.tex,
                quad: A.scale(this.quad ?? new ge(0, 0, 1, 1)),
                flipX: this.flipX,
                flipY: this.flipY,
                tiled: i.tiled,
                width: this.width,
                height: this.height,
              }),
            );
        },
        add() {
          let A = o((c) => {
              let w = c.frames[0].clone();
              i.quad && (w = w.scale(i.quad));
              let F = g(c.tex, w, i.width, i.height);
              (this.width = c.tex.width * w.w * F.x),
                (this.height = c.tex.height * w.h * F.y),
                i.anim && this.play(i.anim),
                (s = c),
                u.trigger(s);
            }, "setSpriteData"),
            m = $e(t);
          m ? m.onLoad(A) : lr(() => A($e(t).data));
        },
        update() {
          if (!h) return;
          let A = s.anims[h.name];
          if (typeof A == "number") {
            this.frame = A;
            return;
          }
          if (A.speed === 0) throw new Error("Sprite anim speed cannot be 0");
          (h.timer += Ce() * this.animSpeed),
            h.timer >= 1 / h.speed &&
              ((h.timer = 0),
              (this.frame += a),
              (this.frame < Math.min(A.from, A.to) ||
                this.frame > Math.max(A.from, A.to)) &&
                (h.loop
                  ? h.pingpong
                    ? ((this.frame -= a), (a *= -1), (this.frame += a))
                    : (this.frame = A.from)
                  : ((this.frame = A.to), h.onEnd(), this.stop())));
        },
        play(A, m = {}) {
          if (!s) {
            u.add(() => this.play(A, m));
            return;
          }
          let c = s.anims[A];
          if (c === void 0) throw new Error(`Anim not found: ${A}`);
          h && this.stop(),
            (h =
              typeof c == "number"
                ? {
                    name: A,
                    timer: 0,
                    loop: !1,
                    pingpong: !1,
                    speed: 0,
                    onEnd: () => {},
                  }
                : {
                    name: A,
                    timer: 0,
                    loop: m.loop ?? c.loop ?? !1,
                    pingpong: m.pingpong ?? c.pingpong ?? !1,
                    speed: m.speed ?? c.speed ?? 10,
                    onEnd: m.onEnd ?? (() => {}),
                  }),
            (a = typeof c == "number" ? null : c.from < c.to ? 1 : -1),
            (this.frame = typeof c == "number" ? c : c.from),
            this.trigger("animStart", A);
        },
        stop() {
          if (!h) return;
          let A = h.name;
          (h = null), this.trigger("animEnd", A);
        },
        numFrames() {
          return s?.frames.length ?? 0;
        },
        curAnim() {
          return h?.name;
        },
        onAnimEnd(A) {
          return this.on("animEnd", A);
        },
        onAnimStart(A) {
          return this.on("animStart", A);
        },
        renderArea() {
          return new ve(P(0), this.width, this.height);
        },
        inspect() {
          if (typeof t == "string") return `"${t}"`;
        },
      };
    }
    o(ar, "sprite");
    function Ui(t, i = {}) {
      function s(a) {
        let u = ze(
          Object.assign(Xe(a), {
            text: a.text + "",
            size: a.textSize,
            font: a.font,
            width: i.width && a.width,
            align: a.align,
            letterSpacing: a.letterSpacing,
            lineSpacing: a.lineSpacing,
            transform: a.textTransform,
            styles: a.textStyles,
          }),
        );
        return (
          i.width || (a.width = u.width / (a.scale?.x || 1)),
          (a.height = u.height / (a.scale?.y || 1)),
          u
        );
      }
      o(s, "update");
      let h = {
        id: "text",
        set text(a) {
          (t = a), s(this);
        },
        get text() {
          return t;
        },
        textSize: i.size ?? no,
        font: i.font,
        width: i.width ?? 0,
        height: 0,
        align: i.align,
        lineSpacing: i.lineSpacing,
        letterSpacing: i.letterSpacing,
        textTransform: i.transform,
        textStyles: i.styles,
        add() {
          lr(() => s(this));
        },
        draw() {
          Je(s(this));
        },
        renderArea() {
          return new ve(P(0), this.width, this.height);
        },
      };
      return s(h), h;
    }
    o(Ui, "text");
    function Li(t, i = {}) {
      if (t.length < 3)
        throw new Error(
          `Polygon's need more than two points, ${t.length} points provided`,
        );
      return {
        id: "polygon",
        pts: t,
        colors: i.colors,
        radius: i.radius,
        draw() {
          de(
            Object.assign(Xe(this), {
              pts: this.pts,
              colors: this.colors,
              radius: this.radius,
              fill: i.fill,
            }),
          );
        },
        renderArea() {
          return new Jt(this.pts);
        },
        inspect() {
          return this.pts.map((s) => `[${s.x},${s.y}]`).join(",");
        },
      };
    }
    o(Li, "polygon");
    function Gi(t, i, s = {}) {
      return {
        id: "rect",
        width: t,
        height: i,
        radius: s.radius || 0,
        draw() {
          we(
            Object.assign(Xe(this), {
              width: this.width,
              height: this.height,
              radius: this.radius,
              fill: s.fill,
            }),
          );
        },
        renderArea() {
          return new ve(P(0), this.width, this.height);
        },
        inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        },
      };
    }
    o(Gi, "rect");
    function Oi(t, i) {
      return {
        id: "rect",
        width: t,
        height: i,
        draw() {
          ke(
            Object.assign(Xe(this), { width: this.width, height: this.height }),
          );
        },
        renderArea() {
          return new ve(P(0), this.width, this.height);
        },
        inspect() {
          return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
        },
      };
    }
    o(Oi, "uvquad");
    function Hi(t, i = {}) {
      return {
        id: "circle",
        radius: t,
        draw() {
          Y(Object.assign(Xe(this), { radius: this.radius, fill: i.fill }));
        },
        renderArea() {
          return new ve(
            new b(this.anchor ? 0 : -this.radius),
            this.radius * 2,
            this.radius * 2,
          );
        },
        inspect() {
          return `${Math.ceil(this.radius)}`;
        },
      };
    }
    o(Hi, "circle");
    function qi(t = 1, i = _(0, 0, 0)) {
      return { id: "outline", outline: { width: t, color: i } };
    }
    o(qi, "outline");
    function hr() {
      return {
        id: "timer",
        wait(t, i) {
          let s = [];
          i && s.push(i);
          let h = 0,
            a = this.onUpdate(() => {
              (h += Ce()), h >= t && (s.forEach((u) => u()), a.cancel());
            });
          return {
            get paused() {
              return a.paused;
            },
            set paused(u) {
              a.paused = u;
            },
            cancel: a.cancel,
            onEnd(u) {
              s.push(u);
            },
            then(u) {
              return this.onEnd(u), this;
            },
          };
        },
        loop(t, i) {
          let s = null,
            h = o(() => {
              (s = this.wait(t, h)), i();
            }, "newAction");
          return (
            (s = this.wait(0, h)),
            {
              get paused() {
                return s.paused;
              },
              set paused(a) {
                s.paused = a;
              },
              cancel: () => s.cancel(),
            }
          );
        },
        tween(t, i, s, h, a = fr.linear) {
          let u = 0,
            g = [],
            A = this.onUpdate(() => {
              u += Ce();
              let m = Math.min(u / s, 1);
              h(Ye(t, i, a(m))),
                m === 1 && (A.cancel(), h(i), g.forEach((c) => c()));
            });
          return {
            get paused() {
              return A.paused;
            },
            set paused(m) {
              A.paused = m;
            },
            onEnd(m) {
              g.push(m);
            },
            then(m) {
              return this.onEnd(m), this;
            },
            cancel() {
              A.cancel();
            },
            finish() {
              A.cancel(), h(i), g.forEach((m) => m());
            },
          };
        },
      };
    }
    o(hr, "timer");
    let Rs = 640,
      Ms = 65536;
    function Ki(t = {}) {
      let i = null,
        s = null,
        h = !1;
      return {
        id: "body",
        require: ["pos", "area"],
        vel: new b(0),
        jumpForce: t.jumpForce ?? Rs,
        gravityScale: t.gravityScale ?? 1,
        isStatic: t.isStatic ?? !1,
        mass: t.mass ?? 1,
        add() {
          if (this.mass === 0) throw new Error("Can't set body mass to 0");
          this.onCollideUpdate((a, u) => {
            if (
              a.is("body") &&
              !u.resolved &&
              (this.trigger("beforePhysicsResolve", u),
              a.trigger("beforePhysicsResolve", u.reverse()),
              !u.resolved && !(this.isStatic && a.isStatic))
            ) {
              if (!this.isStatic && !a.isStatic) {
                let g = this.mass + a.mass;
                (this.pos = this.pos.add(u.displacement.scale(a.mass / g))),
                  (a.pos = a.pos.add(u.displacement.scale(-this.mass / g))),
                  (this.transform = Ht(this)),
                  (a.transform = Ht(a));
              } else {
                let g = !this.isStatic && a.isStatic ? u : u.reverse();
                (g.source.pos = g.source.pos.add(g.displacement)),
                  (g.source.transform = Ht(g.source));
              }
              (u.resolved = !0),
                this.trigger("physicsResolve", u),
                a.trigger("physicsResolve", u.reverse());
            }
          }),
            this.onPhysicsResolve((a) => {
              R.gravity &&
                (a.isBottom() && this.isFalling()
                  ? ((this.vel.y = 0),
                    (i = a.target),
                    (s = a.target.pos),
                    h ? (h = !1) : this.trigger("ground", i))
                  : a.isTop() &&
                    this.isJumping() &&
                    ((this.vel.y = 0), this.trigger("headbutt", a.target)));
            });
        },
        update() {
          if (!R.gravity || this.isStatic) return;
          if (
            (h && ((i = null), (s = null), this.trigger("fallOff"), (h = !1)),
            i)
          )
            if (!this.isColliding(i) || !i.exists() || !i.is("body")) h = !0;
            else {
              !i.pos.eq(s) &&
                t.stickToPlatform !== !1 &&
                this.moveBy(i.pos.sub(s)),
                (s = i.pos);
              return;
            }
          let a = this.vel.y;
          (this.vel.y += R.gravity * this.gravityScale * Ce()),
            (this.vel.y = Math.min(this.vel.y, t.maxVelocity ?? Ms)),
            a < 0 && this.vel.y >= 0 && this.trigger("fall"),
            this.move(this.vel);
        },
        onPhysicsResolve(a) {
          return this.on("physicsResolve", a);
        },
        onBeforePhysicsResolve(a) {
          return this.on("beforePhysicsResolve", a);
        },
        curPlatform() {
          return i;
        },
        isGrounded() {
          return i !== null;
        },
        isFalling() {
          return this.vel.y > 0;
        },
        isJumping() {
          return this.vel.y < 0;
        },
        jump(a) {
          (i = null), (s = null), (this.vel.y = -a || -this.jumpForce);
        },
        onGround(a) {
          return this.on("ground", a);
        },
        onFall(a) {
          return this.on("fall", a);
        },
        onFallOff(a) {
          return this.on("fallOff", a);
        },
        onHeadbutt(a) {
          return this.on("headbutt", a);
        },
      };
    }
    o(Ki, "body");
    function Yi(t = 2) {
      let i = t;
      return {
        id: "doubleJump",
        require: ["body"],
        numJumps: t,
        add() {
          this.onGround(() => {
            i = this.numJumps;
          });
        },
        doubleJump(s) {
          i <= 0 ||
            (i < this.numJumps && this.trigger("doubleJump"),
            i--,
            this.jump(s));
        },
        onDoubleJump(s) {
          return this.on("doubleJump", s);
        },
        inspect() {
          return `${i}`;
        },
      };
    }
    o(Yi, "doubleJump");
    function ji(t, i) {
      return {
        id: "shader",
        shader: t,
        ...(typeof i == "function"
          ? {
              uniform: i(),
              update() {
                this.uniform = i();
              },
            }
          : { uniform: i }),
      };
    }
    o(ji, "shader");
    function Qi() {
      return { id: "fixed", fixed: !0 };
    }
    o(Qi, "fixed");
    function Fr(t) {
      return { id: "stay", stay: !0, scenesToStay: t };
    }
    o(Fr, "stay");
    function zi(t, i) {
      if (t == null)
        throw new Error("health() requires the initial amount of hp");
      return {
        id: "health",
        hurt(s = 1) {
          this.setHP(t - s), this.trigger("hurt", s);
        },
        heal(s = 1) {
          let h = t;
          this.setHP(t + s), this.trigger("heal", t - h);
        },
        hp() {
          return t;
        },
        maxHP() {
          return i ?? null;
        },
        setMaxHP(s) {
          i = s;
        },
        setHP(s) {
          (t = i ? Math.min(i, s) : s), t <= 0 && this.trigger("death");
        },
        onHurt(s) {
          return this.on("hurt", s);
        },
        onHeal(s) {
          return this.on("heal", s);
        },
        onDeath(s) {
          return this.on("death", s);
        },
        inspect() {
          return `${t}`;
        },
      };
    }
    o(zi, "health");
    function Ji(t, i = {}) {
      if (t == null) throw new Error("lifespan() requires time");
      let s = i.fade ?? 0;
      return {
        id: "lifespan",
        async add() {
          await ln(t),
            s > 0 &&
              this.opacity &&
              (await kr(
                this.opacity,
                0,
                s,
                (h) => (this.opacity = h),
                fr.linear,
              )),
            this.destroy();
        },
      };
    }
    o(Ji, "lifespan");
    function Xi(t, i, s) {
      if (!t) throw new Error("state() requires an initial state");
      let h = {};
      function a(m) {
        h[m] ||
          (h[m] = {
            enter: new Ie(),
            end: new Ie(),
            update: new Ie(),
            draw: new Ie(),
          });
      }
      o(a, "initStateEvents");
      function u(m, c, w) {
        return a(c), h[c][m].add(w);
      }
      o(u, "on");
      function g(m, c, ...w) {
        a(c), h[c][m].trigger(...w);
      }
      o(g, "trigger");
      let A = !1;
      return {
        id: "state",
        state: t,
        enterState(m, ...c) {
          if (((A = !0), i && !i.includes(m)))
            throw new Error(`State not found: ${m}`);
          let w = this.state;
          if (s) {
            if (!s?.[w]) return;
            let F = typeof s[w] == "string" ? [s[w]] : s[w];
            if (!F.includes(m))
              throw new Error(
                `Cannot transition state from "${w}" to "${m}". Available transitions: ${F.map((C) => `"${C}"`).join(", ")}`,
              );
          }
          g("end", w, ...c),
            (this.state = m),
            g("enter", m, ...c),
            g("enter", `${w} -> ${m}`, ...c);
        },
        onStateTransition(m, c, w) {
          return u("enter", `${m} -> ${c}`, w);
        },
        onStateEnter(m, c) {
          return u("enter", m, c);
        },
        onStateUpdate(m, c) {
          return u("update", m, c);
        },
        onStateDraw(m, c) {
          return u("draw", m, c);
        },
        onStateEnd(m, c) {
          return u("end", m, c);
        },
        update() {
          A || (g("enter", t), (A = !0)), g("update", this.state);
        },
        draw() {
          g("draw", this.state);
        },
        inspect() {
          return this.state;
        },
      };
    }
    o(Xi, "state");
    function Wi(t = 1) {
      let i = 0,
        s = !1;
      return {
        require: ["opacity"],
        add() {
          this.opacity = 0;
        },
        update() {
          s ||
            ((i += Ce()),
            (this.opacity = Ze(i, 0, t, 0, 1)),
            i >= t && ((this.opacity = 1), (s = !0)));
        },
      };
    }
    o(Wi, "fadeIn");
    function Zi(t = "intersect") {
      return { id: "mask", mask: t };
    }
    o(Zi, "mask");
    function _i(t) {
      return {
        add() {
          this.canvas = t;
        },
      };
    }
    o(_i, "drawon");
    function lr(t) {
      L.loaded ? t() : R.events.on("load", t);
    }
    o(lr, "onLoad");
    function $i(t, i) {
      R.scenes[t] = i;
    }
    o($i, "scene");
    function en(t, ...i) {
      if (!R.scenes[t]) throw new Error(`Scene not found: ${t}`);
      R.events.onOnce("frameEnd", () => {
        R.events.trigger("sceneLeave", t),
          y.events.clear(),
          R.events.clear(),
          R.objEvents.clear(),
          [...R.root.children].forEach((s) => {
            (!s.stay || (s.scenesToStay && !s.scenesToStay.includes(t))) &&
              R.root.remove(s);
          }),
          R.root.clearEvents(),
          Hr(),
          (R.cam = {
            pos: null,
            scale: P(1),
            angle: 0,
            shake: 0,
            transform: new Ne(),
          }),
          R.scenes[t](...i);
      });
    }
    o(en, "go");
    function tn(t) {
      return R.events.on("sceneLeave", t);
    }
    o(tn, "onSceneLeave");
    function rn(t, i) {
      try {
        return JSON.parse(window.localStorage[t]);
      } catch {
        return i ? (Br(t, i), i) : null;
      }
    }
    o(rn, "getData");
    function Br(t, i) {
      window.localStorage[t] = JSON.stringify(i);
    }
    o(Br, "setData");
    function Cr(t, ...i) {
      let s = t(nt),
        h;
      typeof s == "function" ? (h = s(...i)(nt)) : (h = s);
      for (let a in h) (nt[a] = h[a]), r.global !== !1 && (window[a] = h[a]);
      return nt;
    }
    o(Cr, "plug");
    function jt() {
      return P(Ae() / 2, Ve() / 2);
    }
    o(jt, "center");
    let Ps;
    ((t) => (
      (t[(t.None = 0)] = "None"),
      (t[(t.Left = 1)] = "Left"),
      (t[(t.Top = 2)] = "Top"),
      (t[(t.LeftTop = 3)] = "LeftTop"),
      (t[(t.Right = 4)] = "Right"),
      (t[(t.Horizontal = 5)] = "Horizontal"),
      (t[(t.RightTop = 6)] = "RightTop"),
      (t[(t.HorizontalTop = 7)] = "HorizontalTop"),
      (t[(t.Bottom = 8)] = "Bottom"),
      (t[(t.LeftBottom = 9)] = "LeftBottom"),
      (t[(t.Vertical = 10)] = "Vertical"),
      (t[(t.LeftVertical = 11)] = "LeftVertical"),
      (t[(t.RightBottom = 12)] = "RightBottom"),
      (t[(t.HorizontalBottom = 13)] = "HorizontalBottom"),
      (t[(t.RightVertical = 14)] = "RightVertical"),
      (t[(t.All = 15)] = "All")
    ))((Ps ||= {}));
    function Ir(t = {}) {
      let i = P(0),
        s = t.isObstacle ?? !1,
        h = t.cost ?? 0,
        a = t.edges ?? [],
        u = o(() => {
          let A = { left: 1, top: 2, right: 4, bottom: 8 };
          return a.map((m) => A[m] || 0).reduce((m, c) => m | c, 0);
        }, "getEdgeMask"),
        g = u();
      return {
        id: "tile",
        tilePosOffset: t.offset ?? P(0),
        set tilePos(A) {
          let m = this.getLevel();
          (i = A.clone()),
            (this.pos = P(
              this.tilePos.x * m.tileWidth(),
              this.tilePos.y * m.tileHeight(),
            ).add(this.tilePosOffset));
        },
        get tilePos() {
          return i;
        },
        set isObstacle(A) {
          s !== A && ((s = A), this.getLevel().invalidateNavigationMap());
        },
        get isObstacle() {
          return s;
        },
        set cost(A) {
          h !== A && ((h = A), this.getLevel().invalidateNavigationMap());
        },
        get cost() {
          return h;
        },
        set edges(A) {
          (a = A), (g = u()), this.getLevel().invalidateNavigationMap();
        },
        get edges() {
          return a;
        },
        get edgeMask() {
          return g;
        },
        getLevel() {
          return this.parent;
        },
        moveLeft() {
          this.tilePos = this.tilePos.add(P(-1, 0));
        },
        moveRight() {
          this.tilePos = this.tilePos.add(P(1, 0));
        },
        moveUp() {
          this.tilePos = this.tilePos.add(P(0, -1));
        },
        moveDown() {
          this.tilePos = this.tilePos.add(P(0, 1));
        },
      };
    }
    o(Ir, "tile");
    function nn(t, i) {
      if (!i.tileWidth || !i.tileHeight)
        throw new Error("Must provide tileWidth and tileHeight.");
      let s = Qt([Kt(i.pos ?? P(0))]),
        h = t.length,
        a = 0,
        u = null,
        g = null,
        A = null,
        m = null,
        c = o((E) => E.x + E.y * a, "tile2Hash"),
        w = o((E) => P(Math.floor(E % a), Math.floor(E / a)), "hash2Tile"),
        F = o(() => {
          u = [];
          for (let E of s.children) C(E);
        }, "createSpatialMap"),
        C = o((E) => {
          let I = c(E.tilePos);
          u[I] ? u[I].push(E) : (u[I] = [E]);
        }, "insertIntoSpatialMap"),
        O = o((E) => {
          let I = c(E.tilePos);
          if (u[I]) {
            let D = u[I].indexOf(E);
            D >= 0 && u[I].splice(D, 1);
          }
        }, "removeFromSpatialMap"),
        H = o(() => {
          let E = !1;
          for (let I of s.children) {
            let D = s.pos2Tile(I.pos);
            (I.tilePos.x != D.x || I.tilePos.y != D.y) &&
              ((E = !0), O(I), (I.tilePos.x = D.x), (I.tilePos.y = D.y), C(I));
          }
          E && s.trigger("spatial_map_changed");
        }, "updateSpatialMap"),
        k = o(() => {
          let E = s.getSpatialMap(),
            I = s.numRows() * s.numColumns();
          g ? (g.length = I) : (g = new Array(I)), g.fill(1, 0, I);
          for (let D = 0; D < E.length; D++) {
            let U = E[D];
            if (U) {
              let W = 0;
              for (let $ of U)
                if ($.isObstacle) {
                  W = 1 / 0;
                  break;
                } else W += $.cost;
              g[D] = W || 1;
            }
          }
        }, "createCostMap"),
        G = o(() => {
          let E = s.getSpatialMap(),
            I = s.numRows() * s.numColumns();
          A ? (A.length = I) : (A = new Array(I)), A.fill(15, 0, I);
          for (let D = 0; D < E.length; D++) {
            let U = E[D];
            if (U) {
              let W = U.length,
                $ = 15;
              for (let ae = 0; ae < W; ae++) $ |= U[ae].edgeMask;
              A[D] = $;
            }
          }
        }, "createEdgeMap"),
        Re = o(() => {
          let E = s.numRows() * s.numColumns(),
            I = o((U, W) => {
              let $ = [];
              for ($.push(U); $.length > 0; ) {
                let ae = $.pop();
                q(ae).forEach((pe) => {
                  m[pe] < 0 && ((m[pe] = W), $.push(pe));
                });
              }
            }, "traverse");
          m ? (m.length = E) : (m = new Array(E)), m.fill(-1, 0, E);
          let D = 0;
          for (let U = 0; U < g.length; U++) {
            if (m[U] >= 0) {
              D++;
              continue;
            }
            I(U, D), D++;
          }
        }, "createConnectivityMap"),
        J = o((E, I) => g[I], "getCost"),
        X = o((E, I) => {
          let D = w(E),
            U = w(I);
          return D.dist(U);
        }, "getHeuristic"),
        q = o((E, I) => {
          let D = [],
            U = Math.floor(E % a),
            W = U > 0 && A[E] & 1 && g[E - 1] !== 1 / 0,
            $ = E >= a && A[E] & 2 && g[E - a] !== 1 / 0,
            ae = U < a - 1 && A[E] & 4 && g[E + 1] !== 1 / 0,
            pe = E < a * h - a - 1 && A[E] & 8 && g[E + a] !== 1 / 0;
          return (
            I
              ? (W &&
                  ($ && D.push(E - a - 1),
                  D.push(E - 1),
                  pe && D.push(E + a - 1)),
                $ && D.push(E - a),
                ae &&
                  ($ && D.push(E - a + 1),
                  D.push(E + 1),
                  pe && D.push(E + a + 1)),
                pe && D.push(E + a))
              : (W && D.push(E - 1),
                $ && D.push(E - a),
                ae && D.push(E + 1),
                pe && D.push(E + a)),
            D
          );
        }, "getNeighbours"),
        fe = {
          id: "level",
          tileWidth() {
            return i.tileWidth;
          },
          tileHeight() {
            return i.tileHeight;
          },
          spawn(E, ...I) {
            let D = P(...I),
              U = (() => {
                if (typeof E == "string") {
                  if (i.tiles[E]) {
                    if (typeof i.tiles[E] != "function")
                      throw new Error(
                        "Level symbol def must be a function returning a component list",
                      );
                    return i.tiles[E](D);
                  } else if (i.wildcardTile) return i.wildcardTile(E, D);
                } else {
                  if (Array.isArray(E)) return E;
                  throw new Error("Expected a symbol or a component list");
                }
              })();
            if (!U) return null;
            let W = !1,
              $ = !1;
            for (let pe of U)
              pe.id === "tile" && ($ = !0), pe.id === "pos" && (W = !0);
            W || U.push(Kt()), $ || U.push(Ir());
            let ae = s.add(U);
            return (
              W && (ae.tilePosOffset = ae.pos.clone()),
              (ae.tilePos = D),
              u &&
                (C(ae),
                this.trigger("spatial_map_changed"),
                this.trigger("navigation_map_invalid")),
              ae
            );
          },
          numColumns() {
            return a;
          },
          numRows() {
            return h;
          },
          levelWidth() {
            return a * this.tileWidth();
          },
          levelHeight() {
            return h * this.tileHeight();
          },
          tile2Pos(...E) {
            return P(...E).scale(this.tileWidth(), this.tileHeight());
          },
          pos2Tile(...E) {
            let I = P(...E);
            return P(
              Math.floor(I.x / this.tileWidth()),
              Math.floor(I.y / this.tileHeight()),
            );
          },
          getSpatialMap() {
            return u || F(), u;
          },
          onSpatialMapChanged(E) {
            return this.on("spatial_map_changed", E);
          },
          onNavigationMapInvalid(E) {
            return this.on("navigation_map_invalid", E);
          },
          getAt(E) {
            u || F();
            let I = c(E);
            return u[I] || [];
          },
          update() {
            u && H();
          },
          invalidateNavigationMap() {
            (g = null), (A = null), (m = null);
          },
          onNavigationMapChanged(E) {
            return this.on("navigation_map_changed", E);
          },
          getTilePath(E, I, D = {}) {
            if (
              (g || k(),
              A || G(),
              m || Re(),
              E.x < 0 ||
                E.x >= a ||
                E.y < 0 ||
                E.y >= h ||
                I.x < 0 ||
                I.x >= a ||
                I.y < 0 ||
                I.y >= h)
            )
              return null;
            let U = c(E),
              W = c(I);
            if (g[W] === 1 / 0) return null;
            if (U === W) return [];
            if (m[U] != -1 && m[U] !== m[W]) return null;
            let $ = new Ys((He, Kr) => He.cost < Kr.cost);
            $.insert({ cost: 0, node: U });
            let ae = new Map();
            ae.set(U, U);
            let pe = new Map();
            for (pe.set(U, 0); $.length !== 0; ) {
              let He = $.remove()?.node;
              if (He === W) break;
              let Kr = q(He, D.allowDiagonals);
              for (let st of Kr) {
                let Yr = (pe.get(He) || 0) + J(He, st) + X(st, W);
                (!pe.has(st) || Yr < pe.get(st)) &&
                  (pe.set(st, Yr),
                  $.insert({ cost: Yr, node: st }),
                  ae.set(st, He));
              }
            }
            let qr = [],
              zt = W,
              Ds = w(zt);
            for (qr.push(Ds); zt !== U; ) {
              zt = ae.get(zt);
              let He = w(zt);
              qr.push(He);
            }
            return qr.reverse();
          },
          getPath(E, I, D = {}) {
            let U = this.tileWidth(),
              W = this.tileHeight(),
              $ = this.getTilePath(this.pos2Tile(E), this.pos2Tile(I), D);
            return $
              ? [
                  E,
                  ...$.slice(1, -1).map((ae) =>
                    ae.scale(U, W).add(U / 2, W / 2),
                  ),
                  I,
                ]
              : null;
          },
        };
      return (
        s.use(fe),
        s.onNavigationMapInvalid(() => {
          s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
        }),
        t.forEach((E, I) => {
          let D = E.split("");
          (a = Math.max(D.length, a)),
            D.forEach((U, W) => {
              s.spawn(U, P(W, I));
            });
        }),
        s
      );
    }
    o(nn, "addLevel");
    function sn(t = {}) {
      let i = null,
        s = null,
        h = null,
        a = null;
      return {
        id: "agent",
        require: ["pos", "tile"],
        agentSpeed: t.speed ?? 100,
        allowDiagonals: t.allowDiagonals ?? !0,
        getDistanceToTarget() {
          return i ? this.pos.dist(i) : 0;
        },
        getNextLocation() {
          return s && h ? s[h] : null;
        },
        getPath() {
          return s ? s.slice() : null;
        },
        getTarget() {
          return i;
        },
        isNavigationFinished() {
          return s ? h === null : !0;
        },
        isTargetReachable() {
          return s !== null;
        },
        isTargetReached() {
          return i ? this.pos.eq(i) : !0;
        },
        setTarget(u) {
          (i = u),
            (s = this.getLevel().getPath(this.pos, i, {
              allowDiagonals: this.allowDiagonals,
            })),
            (h = s ? 0 : null),
            s
              ? (a ||
                  ((a = this.getLevel().onNavigationMapChanged(() => {
                    s &&
                      h !== null &&
                      ((s = this.getLevel().getPath(this.pos, i, {
                        allowDiagonals: this.allowDiagonals,
                      })),
                      (h = s ? 0 : null),
                      s
                        ? this.trigger("navigation-next", this, s[h])
                        : this.trigger("navigation-ended", this));
                  })),
                  this.onDestroy(() => a.cancel())),
                this.trigger("navigation-started", this),
                this.trigger("navigation-next", this, s[h]))
              : this.trigger("navigation-ended", this);
        },
        update() {
          if (s && h !== null) {
            if (this.pos.sdist(s[h]) < 2)
              if (h === s.length - 1) {
                (this.pos = i.clone()),
                  (h = null),
                  this.trigger("navigation-ended", this),
                  this.trigger("target-reached", this);
                return;
              } else h++, this.trigger("navigation-next", this, s[h]);
            this.moveTo(s[h], this.agentSpeed);
          }
        },
        onNavigationStarted(u) {
          return this.on("navigation-started", u);
        },
        onNavigationNext(u) {
          return this.on("navigation-next", u);
        },
        onNavigationEnded(u) {
          return this.on("navigation-ended", u);
        },
        onTargetReached(u) {
          return this.on("target-reached", u);
        },
        inspect() {
          return JSON.stringify({
            target: JSON.stringify(i),
            path: JSON.stringify(s),
          });
        },
      };
    }
    o(sn, "agent");
    function on(t) {
      let i = y.canvas.captureStream(t),
        s = Z.ctx.createMediaStreamDestination();
      Z.masterNode.connect(s);
      let h = new MediaRecorder(i),
        a = [];
      return (
        (h.ondataavailable = (u) => {
          u.data.size > 0 && a.push(u.data);
        }),
        (h.onerror = () => {
          Z.masterNode.disconnect(s), i.getTracks().forEach((u) => u.stop());
        }),
        h.start(),
        {
          resume() {
            h.resume();
          },
          pause() {
            h.pause();
          },
          stop() {
            return (
              h.stop(),
              Z.masterNode.disconnect(s),
              i.getTracks().forEach((u) => u.stop()),
              new Promise((u) => {
                h.onstop = () => {
                  u(new Blob(a, { type: "video/mp4" }));
                };
              })
            );
          },
          download(u = "kaboom.mp4") {
            this.stop().then((g) => ti(u, g));
          },
        }
      );
    }
    o(on, "record");
    function an() {
      return document.activeElement === y.canvas;
    }
    o(an, "isFocused");
    function hn(t) {
      t.destroy();
    }
    o(hn, "destroy");
    let Qt = R.root.add.bind(R.root),
      Ts = R.root.readd.bind(R.root),
      Fs = R.root.removeAll.bind(R.root),
      Dr = R.root.get.bind(R.root),
      ln = R.root.wait.bind(R.root),
      Bs = R.root.loop.bind(R.root),
      kr = R.root.tween.bind(R.root);
    function Nr(t = 2, i = 1) {
      let s = 0;
      return {
        require: ["scale"],
        update() {
          let h = Math.sin(s * t) * i;
          h < 0 && this.destroy(), (this.scale = P(h)), (s += Ce());
        },
      };
    }
    o(Nr, "boom");
    let Cs = Le(null, eo),
      Is = Le(null, to);
    function un(t, i = {}) {
      let s = Qt([Kt(t), Fr()]),
        h = (i.speed || 1) * 5,
        a = i.scale || 1;
      s.add([ar(Is), Yt(0), or("center"), Nr(h, a), ...(i.comps ?? [])]);
      let u = s.add([ar(Cs), Yt(0), or("center"), hr(), ...(i.comps ?? [])]);
      return (
        u.wait(0.4 / h, () => u.use(Nr(h, a))),
        u.onDestroy(() => s.destroy()),
        s
      );
    }
    o(un, "addKaboom");
    function Ur() {
      R.root.update();
    }
    o(Ur, "updateFrame");
    class Lr {
      static {
        o(this, "Collision");
      }
      source;
      target;
      displacement;
      resolved = !1;
      constructor(i, s, h, a = !1) {
        (this.source = i),
          (this.target = s),
          (this.displacement = h),
          (this.resolved = a);
      }
      reverse() {
        return new Lr(
          this.target,
          this.source,
          this.displacement.scale(-1),
          this.resolved,
        );
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = !0;
      }
    }
    function dn() {
      let t = {},
        i = r.hashGridSize || so,
        s = new Ne(),
        h = [];
      function a(u) {
        if (
          (h.push(s.clone()),
          u.pos && s.translate(u.pos),
          u.scale && s.scale(u.scale),
          u.angle && s.rotate(u.angle),
          (u.transform = s.clone()),
          u.c("area") && !u.paused)
        ) {
          let g = u,
            A = g.worldArea().bbox(),
            m = Math.floor(A.pos.x / i),
            c = Math.floor(A.pos.y / i),
            w = Math.ceil((A.pos.x + A.width) / i),
            F = Math.ceil((A.pos.y + A.height) / i),
            C = new Set();
          for (let O = m; O <= w; O++)
            for (let H = c; H <= F; H++)
              if (!t[O]) (t[O] = {}), (t[O][H] = [g]);
              else if (!t[O][H]) t[O][H] = [g];
              else {
                let k = t[O][H];
                e: for (let G of k) {
                  if (G.paused || !G.exists() || C.has(G.id)) continue;
                  for (let J of g.collisionIgnore) if (G.is(J)) continue e;
                  for (let J of G.collisionIgnore) if (g.is(J)) continue e;
                  let Re = Qn(g.worldArea(), G.worldArea());
                  if (Re) {
                    let J = new Lr(g, G, Re);
                    g.trigger("collideUpdate", G, J);
                    let X = J.reverse();
                    (X.resolved = J.resolved), G.trigger("collideUpdate", g, X);
                  }
                  C.add(G.id);
                }
                k.push(g);
              }
        }
        u.children.forEach(a), (s = h.pop());
      }
      o(a, "checkObj"), a(R.root);
    }
    o(dn, "checkFrame");
    function cn() {
      let t = R.cam,
        i = b.fromAngle(_t(0, 360)).scale(t.shake);
      (t.shake = Ye(t.shake, 0, 5 * Ce())),
        (t.transform = new Ne()
          .translate(jt())
          .scale(t.scale)
          .rotate(t.angle)
          .translate((t.pos ?? jt()).scale(-1).add(i))),
        R.root.draw(),
        Te();
    }
    o(cn, "drawFrame");
    function fn() {
      let t = j();
      R.events.numListeners("loading") > 0
        ? R.events.trigger("loading", t)
        : Se(() => {
            let i = Ae() / 2,
              s = 24,
              h = P(Ae() / 2, Ve() / 2).sub(P(i / 2, s / 2));
            we({ pos: P(0), width: Ae(), height: Ve(), color: _(0, 0, 0) }),
              we({
                pos: h,
                width: i,
                height: s,
                fill: !1,
                outline: { width: 4 },
              }),
              we({ pos: h, width: i * t, height: s });
          });
    }
    o(fn, "drawLoadScreen");
    function Gr(t, i) {
      Se(() => {
        let s = P(8);
        le(), te(t);
        let h = ze({
            text: i,
            font: gr,
            size: 16,
            pos: s,
            color: _(255, 255, 255),
            fixed: !0,
          }),
          a = h.width + s.x * 2,
          u = h.height + s.x * 2;
        t.x + a >= Ae() && te(P(-a, 0)),
          t.y + u >= Ve() && te(P(0, -u)),
          we({
            width: a,
            height: u,
            color: _(0, 0, 0),
            radius: 4,
            opacity: 0.8,
            fixed: !0,
          }),
          Je(h),
          oe();
      });
    }
    o(Gr, "drawInspectText");
    function pn() {
      if (se.inspect) {
        let t = null;
        for (let i of R.root.get("*", { recursive: !0 }))
          if (i.c("area") && i.isHovering()) {
            t = i;
            break;
          }
        if ((R.root.drawInspect(), t)) {
          let i = [],
            s = t.inspect();
          for (let h in s) s[h] ? i.push(`${h}: ${s[h]}`) : i.push(`${h}`);
          Gr(
            ci(Ot()),
            i.join(`
`),
          );
        }
        Gr(P(8), `FPS: ${se.fps()}`);
      }
      se.paused &&
        Se(() => {
          le(), te(Ae(), 0), te(-8, 8);
          let t = 32;
          we({
            width: t,
            height: t,
            anchor: "topright",
            color: _(0, 0, 0),
            opacity: 0.8,
            radius: 4,
            fixed: !0,
          });
          for (let i = 1; i <= 2; i++)
            we({
              width: 4,
              height: t * 0.6,
              anchor: "center",
              pos: P((-t / 3) * i, t * 0.5),
              color: _(255, 255, 255),
              radius: 2,
              fixed: !0,
            });
          oe();
        }),
        se.timeScale !== 1 &&
          Se(() => {
            le(), te(Ae(), Ve()), te(-8, -8);
            let t = 8,
              i = ze({
                text: se.timeScale.toFixed(1),
                font: gr,
                size: 16,
                color: _(255, 255, 255),
                pos: P(-t),
                anchor: "botright",
                fixed: !0,
              });
            we({
              width: i.width + t * 2 + t * 4,
              height: i.height + t * 2,
              anchor: "botright",
              color: _(0, 0, 0),
              opacity: 0.8,
              radius: 4,
              fixed: !0,
            });
            for (let s = 0; s < 2; s++) {
              let h = se.timeScale < 1;
              M({
                p1: P(-i.width - t * (h ? 2 : 3.5), -t),
                p2: P(-i.width - t * (h ? 2 : 3.5), -t - i.height),
                p3: P(-i.width - t * (h ? 3.5 : 2), -t - i.height / 2),
                pos: P(-s * t * 1 + (h ? -t * 0.5 : 0), 0),
                color: _(255, 255, 255),
                fixed: !0,
              });
            }
            Je(i), oe();
          }),
        se.curRecording &&
          Se(() => {
            le(),
              te(0, Ve()),
              te(24, -24),
              Y({
                radius: 12,
                color: _(255, 0, 0),
                opacity: Xr(0, 1, y.time() * 4),
                fixed: !0,
              }),
              oe();
          }),
        se.showLog &&
          R.logs.length > 0 &&
          Se(() => {
            le(), te(0, Ve()), te(8, -8);
            let t = 8,
              i = [];
            for (let h of R.logs) {
              let a = "",
                u = h.msg instanceof Error ? "error" : "info";
              (a += `[time]${h.time.toFixed(2)}[/time]`),
                (a += " "),
                (a += `[${u}]${h.msg?.toString ? h.msg.toString() : h.msg}[/${u}]`),
                i.push(a);
            }
            R.logs = R.logs.filter(
              (h) => y.time() - h.time < (r.logTime || ao),
            );
            let s = ze({
              text: i.join(`
`),
              font: gr,
              pos: P(t, -t),
              anchor: "botleft",
              size: 16,
              width: Ae() * 0.6,
              lineSpacing: t / 2,
              fixed: !0,
              styles: {
                time: { color: _(127, 127, 127) },
                info: { color: _(255, 255, 255) },
                error: { color: _(255, 0, 127) },
              },
            });
            we({
              width: s.width + t * 2,
              height: s.height + t * 2,
              anchor: "botleft",
              color: _(0, 0, 0),
              radius: 4,
              opacity: 0.8,
              fixed: !0,
            }),
              Je(s),
              oe();
          });
    }
    o(pn, "drawDebug");
    function gn(t) {
      R.events.on("loading", t);
    }
    o(gn, "onLoading");
    function mn(t) {
      y.onResize(t);
    }
    o(mn, "onResize");
    function wn(t) {
      R.events.on("error", t);
    }
    o(wn, "onError");
    function An(t) {
      console.error(t),
        Z.ctx.suspend(),
        y.run(() => {
          rt(),
            Se(() => {
              let i = Ae(),
                s = Ve(),
                h = {
                  size: 36,
                  width: i - 32 * 2,
                  letterSpacing: 4,
                  lineSpacing: 4,
                  font: gr,
                  fixed: !0,
                };
              we({ width: i, height: s, color: _(0, 0, 255), fixed: !0 });
              let a = ze({
                ...h,
                text: "Error",
                pos: P(32),
                color: _(255, 128, 0),
                fixed: !0,
              });
              Je(a),
                Rr({
                  ...h,
                  text: t.message,
                  pos: P(32, 32 + a.height + 16),
                  fixed: !0,
                }),
                oe(),
                R.events.trigger("error", t);
            }),
            it();
        });
    }
    o(An, "handleErr");
    function Vn(t) {
      ee.push(t);
    }
    o(Vn, "onCleanup");
    function vn() {
      R.events.onOnce("frameEnd", () => {
        y.quit(),
          S.clear(
            S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT,
          );
        let t = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
        for (let i = 0; i < t; i++)
          S.activeTexture(S.TEXTURE0 + i),
            S.bindTexture(S.TEXTURE_2D, null),
            S.bindTexture(S.TEXTURE_CUBE_MAP, null);
        S.bindBuffer(S.ARRAY_BUFFER, null),
          S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null),
          S.bindRenderbuffer(S.RENDERBUFFER, null),
          S.bindFramebuffer(S.FRAMEBUFFER, null),
          B.destroy(),
          ee.forEach((i) => i());
      });
    }
    o(vn, "quit");
    let ur = !0;
    y.run(() => {
      try {
        L.loaded ||
          (j() === 1 && !ur && ((L.loaded = !0), R.events.trigger("load"))),
          (!L.loaded && r.loadingScreen !== !1) || ur
            ? (rt(), fn(), it())
            : (se.paused || Ur(),
              dn(),
              rt(),
              cn(),
              r.debug !== !1 && pn(),
              it()),
          ur && (ur = !1),
          R.events.trigger("frameEnd");
      } catch (t) {
        An(t);
      }
    });
    function Or() {
      let t = T,
        i = S.drawingBufferWidth / t,
        s = S.drawingBufferHeight / t;
      if (r.letterbox) {
        if (!r.width || !r.height)
          throw new Error("Letterboxing requires width and height defined.");
        let h = i / s,
          a = r.width / r.height;
        if (h > a) {
          let u = s * a,
            g = (i - u) / 2;
          v.viewport = { x: g, y: 0, width: u, height: s };
        } else {
          let u = i / a,
            g = (s - u) / 2;
          v.viewport = { x: 0, y: g, width: i, height: u };
        }
        return;
      }
      if (r.stretch && (!r.width || !r.height))
        throw new Error("Stretching requires width and height defined.");
      v.viewport = { x: 0, y: 0, width: i, height: s };
    }
    o(Or, "updateViewport");
    function Hr() {
      y.onHide(() => {
        r.backgroundAudio || Z.ctx.suspend();
      }),
        y.onShow(() => {
          !r.backgroundAudio && !se.paused && Z.ctx.resume();
        }),
        y.onResize(() => {
          if (y.isFullscreen()) return;
          let t = r.width && r.height;
          (t && !r.stretch && !r.letterbox) ||
            ((n.width = n.offsetWidth * T),
            (n.height = n.offsetHeight * T),
            Or(),
            t ||
              (v.frameBuffer.free(),
              (v.frameBuffer = new dr(
                B,
                S.drawingBufferWidth,
                S.drawingBufferHeight,
              )),
              (v.width = S.drawingBufferWidth / T),
              (v.height = S.drawingBufferHeight / T)));
        }),
        r.debug !== !1 &&
          (y.onKeyPress("f1", () => (se.inspect = !se.inspect)),
          y.onKeyPress("f2", () => se.clearLog()),
          y.onKeyPress("f8", () => (se.paused = !se.paused)),
          y.onKeyPress("f7", () => {
            se.timeScale = At(Ke(se.timeScale - 0.2, 0, 2), 1);
          }),
          y.onKeyPress("f9", () => {
            se.timeScale = At(Ke(se.timeScale + 0.2, 0, 2), 1);
          }),
          y.onKeyPress("f10", () => se.stepFrame())),
        r.burp && y.onKeyPress("b", () => gt());
    }
    o(Hr, "initEvents"), Or(), Hr();
    let nt = {
      VERSION: ro,
      loadRoot: Ee,
      loadProgress: j,
      loadSprite: Le,
      loadSpriteAtlas: lt,
      loadSound: rr,
      loadBitmapFont: St,
      loadFont: je,
      loadShader: er,
      loadShaderURL: tr,
      loadAseprite: Mt,
      loadPedit: Rt,
      loadBean: ir,
      loadJSON: me,
      load: Pe,
      getSprite: Pt,
      getSound: Tt,
      getFont: Ft,
      getBitmapFont: dt,
      getShader: ct,
      getAsset: Bt,
      Asset: Fe,
      SpriteData: Q,
      SoundData: ie,
      width: Ae,
      height: Ve,
      center: jt,
      dt: Ce,
      time: y.time,
      screenshot: y.screenshot,
      record: on,
      isFocused: an,
      setCursor: y.setCursor,
      getCursor: y.getCursor,
      setCursorLocked: y.setCursorLocked,
      isCursorLocked: y.isCursorLocked,
      setFullscreen: y.setFullscreen,
      isFullscreen: y.isFullscreen,
      isTouchscreen: y.isTouchscreen,
      onLoad: lr,
      onLoading: gn,
      onResize: mn,
      onGamepadConnect: y.onGamepadConnect,
      onGamepadDisconnect: y.onGamepadDisconnect,
      onError: wn,
      onCleanup: Vn,
      camPos: pi,
      camScale: gi,
      camRot: mi,
      shake: wi,
      toScreen: Mr,
      toWorld: Pr,
      setGravity: Si,
      getGravity: Ri,
      setBackground: Mi,
      getBackground: Pi,
      getGamepads: y.getGamepads,
      add: Qt,
      make: sr,
      destroy: hn,
      destroyAll: Fs,
      get: Dr,
      readd: Ts,
      pos: Kt,
      scale: Yt,
      rotate: Ti,
      color: Fi,
      opacity: Bi,
      anchor: or,
      area: Ni,
      sprite: ar,
      text: Ui,
      polygon: Li,
      rect: Gi,
      circle: Hi,
      uvquad: Oi,
      outline: qi,
      body: Ki,
      doubleJump: Yi,
      shader: ji,
      timer: hr,
      fixed: Qi,
      stay: Fr,
      health: zi,
      lifespan: Ji,
      z: Ci,
      move: Di,
      offscreen: ki,
      follow: Ii,
      state: Xi,
      fadeIn: Wi,
      mask: Zi,
      drawon: _i,
      tile: Ir,
      agent: sn,
      on: Oe,
      onUpdate: xs,
      onDraw: Es,
      onAdd: Tr,
      onDestroy: Ai,
      onClick: bs,
      onCollide: Vi,
      onCollideUpdate: vi,
      onCollideEnd: yi,
      onHover: xi,
      onHoverUpdate: Ei,
      onHoverEnd: bi,
      onKeyDown: y.onKeyDown,
      onKeyPress: y.onKeyPress,
      onKeyPressRepeat: y.onKeyPressRepeat,
      onKeyRelease: y.onKeyRelease,
      onMouseDown: y.onMouseDown,
      onMousePress: y.onMousePress,
      onMouseRelease: y.onMouseRelease,
      onMouseMove: y.onMouseMove,
      onCharInput: y.onCharInput,
      onTouchStart: y.onTouchStart,
      onTouchMove: y.onTouchMove,
      onTouchEnd: y.onTouchEnd,
      onScroll: y.onScroll,
      onHide: y.onHide,
      onShow: y.onShow,
      onGamepadButtonDown: y.onGamepadButtonDown,
      onGamepadButtonPress: y.onGamepadButtonPress,
      onGamepadButtonRelease: y.onGamepadButtonRelease,
      onGamepadStick: y.onGamepadStick,
      mousePos: Ot,
      mouseDeltaPos: y.mouseDeltaPos,
      isKeyDown: y.isKeyDown,
      isKeyPressed: y.isKeyPressed,
      isKeyPressedRepeat: y.isKeyPressedRepeat,
      isKeyReleased: y.isKeyReleased,
      isMouseDown: y.isMouseDown,
      isMousePressed: y.isMousePressed,
      isMouseReleased: y.isMouseReleased,
      isMouseMoved: y.isMouseMoved,
      isGamepadButtonPressed: y.isGamepadButtonPressed,
      isGamepadButtonDown: y.isGamepadButtonDown,
      isGamepadButtonReleased: y.isGamepadButtonReleased,
      getGamepadStick: y.getGamepadStick,
      charInputted: y.charInputted,
      loop: Bs,
      wait: ln,
      play: pt,
      volume: Dt,
      burp: gt,
      audioCtx: Z.ctx,
      Line: Et,
      Rect: ve,
      Circle: xn,
      Polygon: Jt,
      Vec2: b,
      Color: re,
      Mat4: Ne,
      Quad: ge,
      RNG: Nn,
      rand: _t,
      randi: ni,
      randSeed: Un,
      vec2: P,
      rgb: _,
      hsl2rgb: Us,
      quad: he,
      choose: Gn,
      chance: Ln,
      lerp: Ye,
      tween: kr,
      easings: fr,
      map: Ze,
      mapc: kn,
      wave: Xr,
      deg2rad: Ue,
      rad2deg: bt,
      clamp: Ke,
      testLineLine: xt,
      testRectRect: On,
      testRectLine: qn,
      testRectPoint: $t,
      testCirclePolygon: Yn,
      testLinePoint: Kn,
      testLineCircle: si,
      drawSprite: nr,
      drawText: Rr,
      formatText: ze,
      drawRect: we,
      drawLine: f,
      drawLines: x,
      drawTriangle: M,
      drawCircle: Y,
      drawEllipse: z,
      drawUVQuad: ke,
      drawPolygon: de,
      drawFormattedText: Je,
      drawMasked: Lt,
      drawSubtracted: Gt,
      pushTransform: le,
      popTransform: oe,
      pushTranslate: te,
      pushScale: De,
      pushRotate: ne,
      pushMatrix: wt,
      usePostEffect: mt,
      makeCanvas: kt,
      debug: se,
      scene: $i,
      go: en,
      onSceneLeave: tn,
      addLevel: nn,
      getData: rn,
      setData: Br,
      download: yr,
      downloadJSON: Zn,
      downloadText: hi,
      downloadBlob: ti,
      plug: Cr,
      ASCII_CHARS: Pn,
      canvas: y.canvas,
      addKaboom: un,
      LEFT: b.LEFT,
      RIGHT: b.RIGHT,
      UP: b.UP,
      DOWN: b.DOWN,
      RED: re.RED,
      GREEN: re.GREEN,
      BLUE: re.BLUE,
      YELLOW: re.YELLOW,
      MAGENTA: re.MAGENTA,
      CYAN: re.CYAN,
      WHITE: re.WHITE,
      BLACK: re.BLACK,
      quit: vn,
      Event: Ie,
      EventHandler: Xt,
      EventController: yt,
    };
    if ((r.plugins && r.plugins.forEach(Cr), r.global !== !1))
      for (let t in nt) window[t] = nt[t];
    return r.focus !== !1 && y.canvas.focus(), nt;
  }, "default");
  function ws({ k: r, maxPlatforms: e }) {
    let n = [];
    for (let d = 0; d < e; d++) {
      let p = mo(r, d > 0 ? n[d - 1] : null);
      n.push(p);
    }
    return n;
  }
  function mo(r, e) {
    let n = Vs(r, e?.x),
      d = As(r, e?.y),
      p = wo(r),
      V = Ao(),
      T = e?.number + 1 || 1;
    return { x: n, y: d, width: p, height: V, number: T };
  }
  function As(r, e) {
    let n = r.center().y + 100,
      d = Math.floor((e || n) - Math.random() * 250);
    return e && e - d < 200 ? As(r, e) : d;
  }
  function Vs(r, e) {
    let n = Math.floor(Math.random() * r.width());
    return Math.abs((e || r.center().x, 10 - n)) < 100 ? Vs(r, e) : n;
  }
  function wo(r) {
    let e = Math.random() * (r.width() / 5);
    return e < r.width() / 8 && (e = r.width() / 5), e;
  }
  function Ao() {
    return 10;
  }
  var vs = 400,
    ys = 1e3,
    Vo = 5;
  function vo(r, e, n, d, p = !0) {
    let V = r - n,
      T = e - d,
      K = (Math.atan2(T, V) * 180) / Math.PI - 90;
    return p && (K = (K + 360) % 360), K;
  }
  function yo(r) {
    return l.choose([
      l.rand(l.vec2(0), l.vec2(l.width(), 0)),
      l.rand(l.vec2(0), l.vec2(0, r)),
      l.rand(l.vec2(0, r), l.vec2(l.width(), r)),
      l.rand(l.vec2(l.width(), 0), l.vec2(l.width(), r)),
    ]);
  }
  var l = ms({
    width: 1200,
    height: 1200,
    global: !1,
    scale: 1,
    touchToMouse: !0,
    background: [100, 100, 255],
  });
  l.debug.inspect = !1;
  l.loadSprite("bean", "/jumpyfrog/sprites/bean.png");
  l.loadSprite("piranha", "/jumpyfrog/sprites/piranha.png");
  l.scene("main", () => {
    l.setGravity(500);
    let r = l.add([
        l.rect(l.width(), 100),
        l.pos(0, l.height() - 100),
        l.area(),
        l.body({ isStatic: !0 }),
        l.color(l.Color.fromHex("#00ff23")),
        "groundPlatform",
      ]),
      e = ws({ k: l, maxPlatforms: 10 }).map((B) =>
        l.add([
          l.rect(B.width, B.height),
          l.pos(B.x, B.y),
          l.area(),
          l.body({ isStatic: !0 }),
          l.color(l.Color.fromHex("#ff9000")),
          "passThroughPlatform",
          { number: B.number },
        ]),
      ),
      n = l.add([
        l.pos(l.width() / 2 - 10, l.height() - 180),
        l.sprite("bean"),
        l.area(),
        l.body(),
        l.anchor("center"),
        l.health(3),
        "player",
        {
          speed: 10,
          targetJumpForce: 0,
          velocity: 0,
          direction: l.RIGHT,
          currentPlatform: 0,
          isDead: !1,
          invincible: !1,
          attacking: !1,
        },
      ]),
      d = (B) =>
        l.make([
          l.rect(5, 300),
          l.area(),
          l.rotate(B),
          l.color(l.Color.fromHex("#ffcccc")),
          "tongue",
        ]),
      p = () => {
        let B = e.sort((Z, L) => (Z.pos.y > L.pos.y ? 1 : 0)),
          v = B[B.length - 1].pos.y,
          Q = yo(v);
        return l.add([
          l.outline(),
          l.sprite("piranha"),
          l.area(),
          l.anchor("center"),
          l.pos(Q),
          "piranha",
          { speed: l.rand(25, 100), initializing: !0 },
        ]);
      },
      V = [];
    for (let B = 0; B < Vo; B++) {
      let v = p();
      V.push(v);
    }
    n.onBeforePhysicsResolve((B) => {
      if (B.target.is("piranha")) {
        B.preventResolution();
        return;
      }
      if (B.target.is("passThroughPlatform")) {
        if (n.isJumping()) B.preventResolution();
        else if (n.isGrounded()) {
          let v = B.target;
          n.currentPlatform = v.number;
        }
        return;
      }
      if (B.target.is("groundPlatform") && n.isGrounded()) {
        n.currentPlatform = 0;
        return;
      }
    }),
      l.onMouseDown(() => {
        n.isGrounded() &&
          ((n.targetJumpForce += 10),
          n.targetJumpForce > ys && (n.targetJumpForce = ys),
          (n.velocity = Math.floor(
            Math.abs(l.toWorld(l.mousePos()).x - n.pos.x),
          )),
          n.velocity > vs && (n.velocity = vs),
          l.toWorld(l.mousePos()).x < n.pos.x
            ? ((n.direction = l.LEFT), (n.flipX = !0))
            : ((n.direction = l.RIGHT), (n.flipX = !1)));
      }),
      l.onMouseRelease(() => {
        n.isGrounded() &&
          (n.attacking || (n.jump(n.targetJumpForce), (n.targetJumpForce = 0)));
      }),
      l.onClick("piranha", (B) => {
        if (n.attacking) return;
        n.attacking = !0;
        let v = n.pos,
          Q = vo(B.pos.x, B.pos.y, v.x, v.y),
          ie = d(Q);
        n.add(ie),
          ie.onCollide("piranha", (Z) => {
            l.destroy(Z);
            let L = p();
            V.push(L);
          }),
          l.wait(0.25, () => {
            l.destroy(ie), (n.attacking = !1);
          });
      });
    let T = l.add([
        l.text(`Jump force: ${n.targetJumpForce}`),
        l.pos(25, 40),
        l.color(l.Color.fromHex("#ffffff")),
        l.fixed(),
      ]),
      N = l.add([
        l.text(`Direction: ${n.direction === l.LEFT ? "Left" : "Right"}`),
        l.pos(25, 75),
        l.color(l.Color.fromHex("#ffffff")),
        l.fixed(),
      ]),
      K = l.add([
        l.text(`Velocity: ${n.velocity}`),
        l.pos(25, 110),
        l.color(l.Color.fromHex("#ffffff")),
        l.fixed(),
      ]),
      y = l.add([
        l.text(`Platform #${n.currentPlatform}`),
        l.pos(25, 145),
        l.color(l.Color.fromHex("#ffffff")),
        l.fixed(),
      ]),
      ee = l.add([
        l.text(`Health #${n.hp()}`),
        l.pos(25, 180),
        l.color(l.Color.fromHex("#ffffff")),
        l.fixed(),
      ]);
    l.onUpdate(() => {
      if (n.pos.x >= (l.width() / 8) * 5) {
        let B = (l.width() / 8) * 5;
        l.camPos(l.vec2(B, n.pos.y));
        return;
      }
      if (n.pos.x <= (l.width() / 8) * 3) {
        let B = (l.width() / 8) * 3;
        l.camPos(l.vec2(B, n.pos.y));
        return;
      }
      l.camPos(n.pos);
    }),
      l.onUpdate(() => {
        (T.text = `Jump force: ${n.targetJumpForce.toString()}`),
          (N.text = `Direction: ${n.direction === l.LEFT ? "Left" : "Right"}`),
          (K.text = `Velocity: ${n.velocity}`),
          (y.text = `Platform #${n.currentPlatform}`),
          (ee.text = `Health #${n.hp()}`);
      }),
      l.onUpdate(() => {
        if (!n.isGrounded()) {
          let B =
            (n.speed * (n.direction === l.LEFT ? -1 : 1) * n.velocity) / 10;
          n.move(B, 0);
        }
      }),
      l.onUpdate(() => {
        (n.isJumping() || n.isFalling()) &&
          (n.pos.x <= 0
            ? ((n.direction = l.RIGHT), (n.velocity = 100))
            : n.pos.x >= l.width() &&
              ((n.direction = l.LEFT), (n.velocity = 100)));
      }),
      l.onUpdate(() => {
        V.forEach((B) => {
          B.moveTo(n.pos, B.speed);
        });
      }),
      n.onCollide("piranha", () => {
        n.invincible ||
          (n.hurt(1),
          (n.invincible = !0),
          l.wait(3, () => (n.invincible = !1)),
          (n.isJumping() || n.isFalling()) &&
            (n.direction == l.LEFT
              ? ((n.direction = l.RIGHT), (n.velocity = 100))
              : ((n.direction = l.LEFT), (n.velocity = 100))));
      }),
      n.onDeath(() => {
        S(), l.go("lose");
      }),
      l.onUpdate(() => {
        n.pos.y > l.height() && (S(), l.go("lose"));
      }),
      l.onUpdate(() => {
        n.currentPlatform === 10 && n.isGrounded() && (S(), l.go("win"));
      });
    let S = () => {
      V.forEach((B) => l.destroy(B)),
        l.destroy(n),
        l.destroy(r),
        e.forEach((B) => l.destroy(B));
    };
  });
  l.scene("lose", () => {
    l.add([
      l.sprite("bean"),
      l.pos(l.width() / 2, l.height() / 2 - 80),
      l.scale(2),
      l.anchor("center"),
    ]),
      l.add([
        l.text("You died! press to continue"),
        l.pos(l.width() / 2, l.height() / 2 + 80),
        l.scale(2),
        l.anchor("center"),
      ]),
      l.onKeyPress("space", () => l.go("main")),
      l.onClick(() => l.go("main"));
  });
  l.scene("win", () => {
    l.add([
      l.sprite("bean"),
      l.pos(l.width() / 2, l.height() / 2 - 80),
      l.scale(2),
      l.anchor("center"),
    ]),
      l.add([
        l.text("You escaped the"),
        l.pos(l.width() / 2, l.height() / 2 + 40),
        l.scale(2),
        l.anchor("center"),
      ]),
      l.add([
        l.text("pond of death!"),
        l.pos(l.width() / 2, l.height() / 2 + 110),
        l.scale(2),
        l.anchor("center"),
      ]),
      l.add([
        l.text("Well done \u{1F438}"),
        l.pos(l.width() / 2, l.height() / 2 + 180),
        l.scale(2),
        l.anchor("center"),
      ]),
      l.add([
        l.text("Press to restart"),
        l.pos(l.width() / 2, l.height() / 2 + 280),
        l.scale(1),
        l.anchor("center"),
      ]),
      l.onKeyPress("space", () => l.go("main")),
      l.onClick(() => l.go("main"));
  });
  l.scene("intro", () => {
    l.add([
      l.sprite("bean"),
      l.pos(l.width() / 2, l.height() / 2 - 80),
      l.scale(2),
      l.anchor("center"),
    ]),
      l.add([
        l.text("You are a frog at the bottom"),
        l.pos(l.width() / 2, l.height() / 2 + 40),
        l.anchor("center"),
      ]),
      l.add([
        l.text("of the pond of death."),
        l.pos(l.width() / 2, l.height() / 2 + 110),
        l.scale(2),
        l.anchor("center"),
      ]),
      l.add([
        l.text("You must escape by jumping up"),
        l.pos(l.width() / 2, l.height() / 2 + 180),
        l.scale(2),
        l.anchor("center"),
      ]),
      l.add([
        l.text("and out of the pond."),
        l.pos(l.width() / 2, l.height() / 2 + 280),
        l.scale(1),
        l.anchor("center"),
      ]),
      l.add([
        l.text("\u{1F449} Press and hold to set jump force."),
        l.pos(l.width() / 2, l.height() / 2 + 310),
        l.scale(1),
        l.anchor("center"),
      ]),
      l.add([
        l.text(
          "\u{1F449} Change direction by pressing either side of the screen.",
        ),
        l.pos(l.width() / 2, l.height() / 2 + 340),
        l.scale(1),
        l.anchor("center"),
      ]),
      l.onKeyPress("space", () => l.go("main")),
      l.onClick(() => l.go("main"));
  });
  l.go("intro");
})();
