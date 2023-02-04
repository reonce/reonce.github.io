var Ri = function() {
  var t11 = function(b, p, m, y) {
    for (m = m || {}, y = b.length; y--; m[b[y]] = p)
      ;
    return m;
  }, e = [1, 7], r = [1, 9], n = [1, 10], a = [1, 14], i = [1, 13], s = [1, 19], o = [1, 20], u = [6, 9], l = [1, 7, 12, 13, 16, 19], f = [1, 28], c = [1, 29], v = [1, 6, 7, 9, 12, 13, 16, 19], h = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, MINDMAP: 4, document: 5, NL: 6, SPACELIST: 7, stop: 8, EOF: 9, statement: 10, node: 11, ICON: 12, CLASS: 13, nodeWithId: 14, nodeWithoutId: 15, NODE_DSTART: 16, NODE_DESCR: 17, NODE_DEND: 18, NODE_ID: 19, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "MINDMAP", 6: "NL", 7: "SPACELIST", 9: "EOF", 12: "ICON", 13: "CLASS", 16: "NODE_DSTART", 17: "NODE_DESCR", 18: "NODE_DEND", 19: "NODE_ID" },
    productions_: [0, [3, 2], [3, 3], [3, 3], [8, 1], [8, 1], [8, 2], [8, 2], [5, 3], [5, 2], [10, 2], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 1], [11, 1], [11, 1], [15, 3], [14, 1], [14, 4]],
    performAction: function(p, m, y, E, C, D, w) {
      var T = D.length - 1;
      switch (C) {
        case 1:
        case 2:
        case 3:
          return E;
        case 4:
          E.getLogger().trace("Stop NL ");
          break;
        case 5:
          E.getLogger().trace("Stop EOF ");
          break;
        case 6:
          E.getLogger().trace("Stop NL2 ");
          break;
        case 7:
          E.getLogger().trace("Stop EOF2 ");
          break;
        case 10:
          E.getLogger().trace("Node: ", D[T].id), E.addNode(D[T - 1].length, D[T].id, D[T].descr, D[T].type);
          break;
        case 11:
          E.getLogger().trace("Icon: ", D[T]), E.decorateNode({ icon: D[T] });
          break;
        case 12:
        case 15:
          E.decorateNode({ class: D[T] });
          break;
        case 13:
          E.getLogger().trace("Node: ", D[T].id), E.addNode(0, D[T].id, D[T].descr, D[T].type);
          break;
        case 14:
          E.decorateNode({ icon: D[T] });
          break;
        case 19:
          E.getLogger().trace("node found ..", D[T - 2]), this.$ = { id: D[T - 1], descr: D[T - 1], type: E.getType(D[T - 2], D[T]) };
          break;
        case 20:
          this.$ = { id: D[T], descr: D[T], type: E.nodeType.DEFAULT };
          break;
        case 21:
          E.getLogger().trace("node found ..", D[T - 3]), this.$ = { id: D[T - 3], descr: D[T - 1], type: E.getType(D[T - 2], D[T]) };
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2], 7: [1, 3] }, { 1: [3] }, { 5: 4, 6: [1, 5], 7: e, 10: 6, 11: 8, 12: r, 13: n, 14: 11, 15: 12, 16: a, 19: i }, { 4: [1, 15] }, { 1: [2, 1], 7: e, 10: 16, 11: 8, 12: r, 13: n, 14: 11, 15: 12, 16: a, 19: i }, { 5: 17, 7: e, 10: 6, 11: 8, 12: r, 13: n, 14: 11, 15: 12, 16: a, 19: i }, { 6: s, 8: 18, 9: o }, t11(u, [2, 16], { 14: 11, 15: 12, 11: 21, 12: [1, 22], 13: [1, 23], 16: a, 19: i }), t11(u, [2, 13]), t11(u, [2, 14]), t11(u, [2, 15]), t11(u, [2, 17]), t11(u, [2, 18]), t11(u, [2, 20], { 16: [1, 24] }), { 17: [1, 25] }, { 5: 26, 7: e, 10: 6, 11: 8, 12: r, 13: n, 14: 11, 15: 12, 16: a, 19: i }, { 6: s, 8: 27, 9: o }, { 1: [2, 2], 7: e, 10: 16, 11: 8, 12: r, 13: n, 14: 11, 15: 12, 16: a, 19: i }, t11(l, [2, 9], { 6: f, 9: c }), t11(v, [2, 4]), t11(v, [2, 5]), t11(u, [2, 10]), t11(u, [2, 11]), t11(u, [2, 12]), { 17: [1, 30] }, { 18: [1, 31] }, { 1: [2, 3], 7: e, 10: 16, 11: 8, 12: r, 13: n, 14: 11, 15: 12, 16: a, 19: i }, t11(l, [2, 8], { 6: f, 9: c }), t11(v, [2, 6]), t11(v, [2, 7]), { 18: [1, 32] }, t11(u, [2, 19]), t11(u, [2, 21])],
    defaultActions: {},
    parseError: function(p, m) {
      if (m.recoverable)
        this.trace(p);
      else {
        var y = new Error(p);
        throw y.hash = m, y;
      }
    },
    parse: function(p) {
      var m = this, y = [0], E = [], C = [null], D = [], w = this.table, T = "", x = 0, S = 0, L = 2, A = 1, O = D.slice.call(arguments, 1), N = Object.create(this.lexer), R = { yy: {} };
      for (var I in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, I) && (R.yy[I] = this.yy[I]);
      N.setInput(p, R.yy), R.yy.lexer = N, R.yy.parser = this, typeof N.yylloc > "u" && (N.yylloc = {});
      var k = N.yylloc;
      D.push(k);
      var P = N.options && N.options.ranges;
      typeof R.yy.parseError == "function" ? this.parseError = R.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function B() {
        var Z;
        return Z = E.pop() || N.lex() || A, typeof Z != "number" && (Z instanceof Array && (E = Z, Z = E.pop()), Z = m.symbols_[Z] || Z), Z;
      }
      for (var _, F, G, z, V = {}, U, Y, $, X; ; ) {
        if (F = y[y.length - 1], this.defaultActions[F] ? G = this.defaultActions[F] : ((_ === null || typeof _ > "u") && (_ = B()), G = w[F] && w[F][_]), typeof G > "u" || !G.length || !G[0]) {
          var K = "";
          X = [];
          for (U in w[F])
            this.terminals_[U] && U > L && X.push("'" + this.terminals_[U] + "'");
          N.showPosition ? K = "Parse error on line " + (x + 1) + `:
` + N.showPosition() + `
Expecting ` + X.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : K = "Parse error on line " + (x + 1) + ": Unexpected " + (_ == A ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(K, {
            text: N.match,
            token: this.terminals_[_] || _,
            line: N.yylineno,
            loc: k,
            expected: X
          });
        }
        if (G[0] instanceof Array && G.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + F + ", token: " + _);
        switch (G[0]) {
          case 1:
            y.push(_), C.push(N.yytext), D.push(N.yylloc), y.push(G[1]), _ = null, S = N.yyleng, T = N.yytext, x = N.yylineno, k = N.yylloc;
            break;
          case 2:
            if (Y = this.productions_[G[1]][1], V.$ = C[C.length - Y], V._$ = {
              first_line: D[D.length - (Y || 1)].first_line,
              last_line: D[D.length - 1].last_line,
              first_column: D[D.length - (Y || 1)].first_column,
              last_column: D[D.length - 1].last_column
            }, P && (V._$.range = [
              D[D.length - (Y || 1)].range[0],
              D[D.length - 1].range[1]
            ]), z = this.performAction.apply(V, [
              T,
              S,
              x,
              R.yy,
              G[1],
              C,
              D
            ].concat(O)), typeof z < "u")
              return z;
            Y && (y = y.slice(0, -1 * Y * 2), C = C.slice(0, -1 * Y), D = D.slice(0, -1 * Y)), y.push(this.productions_[G[1]][0]), C.push(V.$), D.push(V._$), $ = w[y[y.length - 2]][y[y.length - 1]], y.push($);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, d = function() {
    var b = {
      EOF: 1,
      parseError: function(m, y) {
        if (this.yy.parser)
          this.yy.parser.parseError(m, y);
        else
          throw new Error(m);
      },
      setInput: function(p, m) {
        return this.yy = m || this.yy || {}, this._input = p, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      input: function() {
        var p = this._input[0];
        this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
        var m = p.match(/(?:\r\n?|\n).*/g);
        return m ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
      },
      unput: function(p) {
        var m = p.length, y = p.split(/(?:\r\n?|\n)/g);
        this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - m), this.offset -= m;
        var E = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
        var C = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: y ? (y.length === E.length ? this.yylloc.first_column : 0) + E[E.length - y.length].length - y[0].length : this.yylloc.first_column - m
        }, this.options.ranges && (this.yylloc.range = [C[0], C[0] + this.yyleng - m]), this.yyleng = this.yytext.length, this;
      },
      more: function() {
        return this._more = true, this;
      },
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      less: function(p) {
        this.unput(this.match.slice(p));
      },
      pastInput: function() {
        var p = this.matched.substr(0, this.matched.length - this.match.length);
        return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
      },
      upcomingInput: function() {
        var p = this.match;
        return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      showPosition: function() {
        var p = this.pastInput(), m = new Array(p.length + 1).join("-");
        return p + this.upcomingInput() + `
` + m + "^";
      },
      test_match: function(p, m) {
        var y, E, C;
        if (this.options.backtrack_lexer && (C = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (C.yylloc.range = this.yylloc.range.slice(0))), E = p[0].match(/(?:\r\n?|\n).*/g), E && (this.yylineno += E.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: E ? E[E.length - 1].length - E[E.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + p[0].length
        }, this.yytext += p[0], this.match += p[0], this.matches = p, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(p[0].length), this.matched += p[0], y = this.performAction.call(this, this.yy, this, m, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), y)
          return y;
        if (this._backtrack) {
          for (var D in C)
            this[D] = C[D];
          return false;
        }
        return false;
      },
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var p, m, y, E;
        this._more || (this.yytext = "", this.match = "");
        for (var C = this._currentRules(), D = 0; D < C.length; D++)
          if (y = this._input.match(this.rules[C[D]]), y && (!m || y[0].length > m[0].length)) {
            if (m = y, E = D, this.options.backtrack_lexer) {
              if (p = this.test_match(y, C[D]), p !== false)
                return p;
              if (this._backtrack) {
                m = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return m ? (p = this.test_match(m, C[E]), p !== false ? p : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      lex: function() {
        var m = this.next();
        return m || this.lex();
      },
      begin: function(m) {
        this.conditionStack.push(m);
      },
      popState: function() {
        var m = this.conditionStack.length - 1;
        return m > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      topState: function(m) {
        return m = this.conditionStack.length - 1 - Math.abs(m || 0), m >= 0 ? this.conditionStack[m] : "INITIAL";
      },
      pushState: function(m) {
        this.begin(m);
      },
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(m, y, E, C) {
        switch (E) {
          case 0:
            m.getLogger().trace("Found comment", y.yytext);
            break;
          case 1:
            return 4;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 13;
          case 4:
            this.popState();
            break;
          case 5:
            m.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return 6;
          case 7:
            return 12;
          case 8:
            m.getLogger().trace("end icon"), this.popState();
            break;
          case 9:
            return m.getLogger().trace("Exploding node"), this.begin("NODE"), 16;
          case 10:
            return m.getLogger().trace("Cloud"), this.begin("NODE"), 16;
          case 11:
            return m.getLogger().trace("Explosion Bang"), this.begin("NODE"), 16;
          case 12:
            return m.getLogger().trace("Cloud Bang"), this.begin("NODE"), 16;
          case 13:
            return this.begin("NODE"), 16;
          case 14:
            return this.begin("NODE"), 16;
          case 15:
            return this.begin("NODE"), 16;
          case 16:
            return this.begin("NODE"), 16;
          case 17:
            return 7;
          case 18:
            return 19;
          case 19:
            return 9;
          case 20:
            m.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 21:
            return m.getLogger().trace("description:", y.yytext), "NODE_DESCR";
          case 22:
            this.popState();
            break;
          case 23:
            return this.popState(), m.getLogger().trace("node end ))"), "NODE_DEND";
          case 24:
            return this.popState(), m.getLogger().trace("node end )"), "NODE_DEND";
          case 25:
            return this.popState(), m.getLogger().trace("node end ...", y.yytext), "NODE_DEND";
          case 26:
            return this.popState(), m.getLogger().trace("node end (("), "NODE_DEND";
          case 27:
            return this.popState(), m.getLogger().trace("node end (-"), "NODE_DEND";
          case 28:
            return this.popState(), m.getLogger().trace("node end (-"), "NODE_DEND";
          case 29:
            return this.popState(), m.getLogger().trace("node end (("), "NODE_DEND";
          case 30:
            return this.popState(), m.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return m.getLogger().trace("Long description:", y.yytext), 17;
          case 32:
            return m.getLogger().trace("Long description:", y.yytext), 17;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\-\)\{\}]+)/i, /^(?:$)/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: false }, ICON: { rules: [7, 8], inclusive: false }, NSTR: { rules: [21, 22], inclusive: false }, NODE: { rules: [20, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], inclusive: false }, INITIAL: { rules: [0, 1, 2, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], inclusive: true } }
    };
    return b;
  }();
  h.lexer = d;
  function g() {
    this.yy = {};
  }
  return g.prototype = h, h.Parser = g, new g();
}();
Ri.parser = Ri;
const Jf = Ri, Nr = (t11) => {
  console.error("Log function was called before initialization", t11);
}, vt = {
  trace: Nr,
  debug: Nr,
  info: Nr,
  warn: Nr,
  error: Nr,
  fatal: Nr
};
let Cn, Dn, wu;
const jf = (t11, e, r, n, a) => {
  t11.info("Mermaid utils injected"), vt.trace = t11.trace, vt.debug = t11.debug, vt.info = t11.info, vt.warn = t11.warn, vt.error = t11.error, vt.fatal = t11.fatal, Cn = r, Dn = n, wu = a;
};
let wt = [], Eu = 0, ts = {};
const ec = () => {
  wt = [], Eu = 0, ts = {};
}, tc = function(t11) {
  for (let e = wt.length - 1; e >= 0; e--)
    if (wt[e].level < t11)
      return wt[e];
  return null;
}, rc = () => wt.length > 0 ? wt[0] : null, nc = (t11, e, r, n) => {
  vt.info("addNode", t11, e, r, n);
  const a = Cn(), i = {
    id: Eu++,
    nodeId: Dn(e),
    level: t11,
    descr: Dn(r),
    type: n,
    children: [],
    width: Cn().mindmap.maxNodeWidth
  };
  switch (i.type) {
    case Ie.ROUNDED_RECT:
      i.padding = 2 * a.mindmap.padding;
      break;
    case Ie.RECT:
      i.padding = 2 * a.mindmap.padding;
      break;
    case Ie.HEXAGON:
      i.padding = 2 * a.mindmap.padding;
      break;
    default:
      i.padding = a.mindmap.padding;
  }
  const s = tc(t11);
  if (s)
    s.children.push(i), wt.push(i);
  else if (wt.length === 0)
    wt.push(i);
  else {
    let o = new Error(
      'There can be only one root. No parent could be found for ("' + i.descr + '")'
    );
    throw o.hash = {
      text: "branch " + name,
      token: "branch " + name,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + name + '"']
    }, o;
  }
}, Ie = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, ac = (t11, e) => {
  switch (vt.debug("In get type", t11, e), t11) {
    case "[":
      return Ie.RECT;
    case "(":
      return e === ")" ? Ie.ROUNDED_RECT : Ie.CLOUD;
    case "((":
      return Ie.CIRCLE;
    case ")":
      return Ie.CLOUD;
    case "))":
      return Ie.BANG;
    case "{{":
      return Ie.HEXAGON;
    default:
      return Ie.DEFAULT;
  }
}, xu = (t11, e) => {
  ts[t11] = e;
}, ic = (t11) => {
  const e = wt[wt.length - 1];
  t11 && t11.icon && (e.icon = Dn(t11.icon)), t11 && t11.class && (e.class = Dn(t11.class));
}, Cr = (t11) => {
  switch (t11) {
    case Ie.DEFAULT:
      return "no-border";
    case Ie.RECT:
      return "rect";
    case Ie.ROUNDED_RECT:
      return "rounded-rect";
    case Ie.CIRCLE:
      return "circle";
    case Ie.CLOUD:
      return "cloud";
    case Ie.BANG:
      return "bang";
    case Ie.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
};
let Tu;
const sc = (t11) => {
  Tu = t11;
}, oc = () => vt, uc = (t11) => wt[t11], rs = (t11) => ts[t11], lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: ec,
  getMindmap: rc,
  addNode: nc,
  nodeType: Ie,
  getType: ac,
  setElementForId: xu,
  decorateNode: ic,
  type2Str: Cr,
  get parseError() {
    return Tu;
  },
  setErrorHandler: sc,
  getLogger: oc,
  getNodeById: uc,
  getElementById: rs
}, Symbol.toStringTag, { value: "Module" }));
var fc = { value: () => {
} };
function Cu() {
  for (var t11 = 0, e = arguments.length, r = {}, n; t11 < e; ++t11) {
    if (!(n = arguments[t11] + "") || n in r || /[\s.]/.test(n))
      throw new Error("illegal type: " + n);
    r[n] = [];
  }
  return new ba(r);
}
function ba(t11) {
  this._ = t11;
}
function cc(t11, e) {
  return t11.trim().split(/^|\s+/).map(function(r) {
    var n = "", a = r.indexOf(".");
    if (a >= 0 && (n = r.slice(a + 1), r = r.slice(0, a)), r && !e.hasOwnProperty(r))
      throw new Error("unknown type: " + r);
    return { type: r, name: n };
  });
}
ba.prototype = Cu.prototype = {
  constructor: ba,
  on: function(t11, e) {
    var r = this._, n = cc(t11 + "", r), a, i = -1, s = n.length;
    if (arguments.length < 2) {
      for (; ++i < s; )
        if ((a = (t11 = n[i]).type) && (a = hc(r[a], t11.name)))
          return a;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++i < s; )
      if (a = (t11 = n[i]).type)
        r[a] = _s(r[a], t11.name, e);
      else if (e == null)
        for (a in r)
          r[a] = _s(r[a], t11.name, null);
    return this;
  },
  copy: function() {
    var t11 = {}, e = this._;
    for (var r in e)
      t11[r] = e[r].slice();
    return new ba(t11);
  },
  call: function(t11, e) {
    if ((a = arguments.length - 2) > 0)
      for (var r = new Array(a), n = 0, a, i; n < a; ++n)
        r[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(t11))
      throw new Error("unknown type: " + t11);
    for (i = this._[t11], n = 0, a = i.length; n < a; ++n)
      i[n].value.apply(e, r);
  },
  apply: function(t11, e, r) {
    if (!this._.hasOwnProperty(t11))
      throw new Error("unknown type: " + t11);
    for (var n = this._[t11], a = 0, i = n.length; a < i; ++a)
      n[a].value.apply(e, r);
  }
};
function hc(t11, e) {
  for (var r = 0, n = t11.length, a; r < n; ++r)
    if ((a = t11[r]).name === e)
      return a.value;
}
function _s(t11, e, r) {
  for (var n = 0, a = t11.length; n < a; ++n)
    if (t11[n].name === e) {
      t11[n] = fc, t11 = t11.slice(0, n).concat(t11.slice(n + 1));
      break;
    }
  return r != null && t11.push({ name: e, value: r }), t11;
}
var Pi = "http://www.w3.org/1999/xhtml";
const $s = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pi,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function qa(t11) {
  var e = t11 += "", r = e.indexOf(":");
  return r >= 0 && (e = t11.slice(0, r)) !== "xmlns" && (t11 = t11.slice(r + 1)), $s.hasOwnProperty(e) ? { space: $s[e], local: t11 } : t11;
}
function vc(t11) {
  return function() {
    var e = this.ownerDocument, r = this.namespaceURI;
    return r === Pi && e.documentElement.namespaceURI === Pi ? e.createElement(t11) : e.createElementNS(r, t11);
  };
}
function dc(t11) {
  return function() {
    return this.ownerDocument.createElementNS(t11.space, t11.local);
  };
}
function Du(t11) {
  var e = qa(t11);
  return (e.local ? dc : vc)(e);
}
function gc() {
}
function ns(t11) {
  return t11 == null ? gc : function() {
    return this.querySelector(t11);
  };
}
function pc(t11) {
  typeof t11 != "function" && (t11 = ns(t11));
  for (var e = this._groups, r = e.length, n = new Array(r), a = 0; a < r; ++a)
    for (var i = e[a], s = i.length, o = n[a] = new Array(s), u, l, f = 0; f < s; ++f)
      (u = i[f]) && (l = t11.call(u, u.__data__, f, i)) && ("__data__" in u && (l.__data__ = u.__data__), o[f] = l);
  return new gt(n, this._parents);
}
function yc(t11) {
  return t11 == null ? [] : Array.isArray(t11) ? t11 : Array.from(t11);
}
function mc() {
  return [];
}
function Su(t11) {
  return t11 == null ? mc : function() {
    return this.querySelectorAll(t11);
  };
}
function bc(t11) {
  return function() {
    return yc(t11.apply(this, arguments));
  };
}
function wc(t11) {
  typeof t11 == "function" ? t11 = bc(t11) : t11 = Su(t11);
  for (var e = this._groups, r = e.length, n = [], a = [], i = 0; i < r; ++i)
    for (var s = e[i], o = s.length, u, l = 0; l < o; ++l)
      (u = s[l]) && (n.push(t11.call(u, u.__data__, l, s)), a.push(u));
  return new gt(n, a);
}
function Lu(t11) {
  return function() {
    return this.matches(t11);
  };
}
function Au(t11) {
  return function(e) {
    return e.matches(t11);
  };
}
var Ec = Array.prototype.find;
function xc(t11) {
  return function() {
    return Ec.call(this.children, t11);
  };
}
function Tc() {
  return this.firstElementChild;
}
function Cc(t11) {
  return this.select(t11 == null ? Tc : xc(typeof t11 == "function" ? t11 : Au(t11)));
}
var Dc = Array.prototype.filter;
function Sc() {
  return Array.from(this.children);
}
function Lc(t11) {
  return function() {
    return Dc.call(this.children, t11);
  };
}
function Ac(t11) {
  return this.selectAll(t11 == null ? Sc : Lc(typeof t11 == "function" ? t11 : Au(t11)));
}
function Nc(t11) {
  typeof t11 != "function" && (t11 = Lu(t11));
  for (var e = this._groups, r = e.length, n = new Array(r), a = 0; a < r; ++a)
    for (var i = e[a], s = i.length, o = n[a] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && t11.call(u, u.__data__, l, i) && o.push(u);
  return new gt(n, this._parents);
}
function Nu(t11) {
  return new Array(t11.length);
}
function Mc() {
  return new gt(this._enter || this._groups.map(Nu), this._parents);
}
function Ia(t11, e) {
  this.ownerDocument = t11.ownerDocument, this.namespaceURI = t11.namespaceURI, this._next = null, this._parent = t11, this.__data__ = e;
}
Ia.prototype = {
  constructor: Ia,
  appendChild: function(t11) {
    return this._parent.insertBefore(t11, this._next);
  },
  insertBefore: function(t11, e) {
    return this._parent.insertBefore(t11, e);
  },
  querySelector: function(t11) {
    return this._parent.querySelector(t11);
  },
  querySelectorAll: function(t11) {
    return this._parent.querySelectorAll(t11);
  }
};
function Oc(t11) {
  return function() {
    return t11;
  };
}
function Ic(t11, e, r, n, a, i) {
  for (var s = 0, o, u = e.length, l = i.length; s < l; ++s)
    (o = e[s]) ? (o.__data__ = i[s], n[s] = o) : r[s] = new Ia(t11, i[s]);
  for (; s < u; ++s)
    (o = e[s]) && (a[s] = o);
}
function kc(t11, e, r, n, a, i, s) {
  var o, u, l = /* @__PURE__ */ new Map(), f = e.length, c = i.length, v = new Array(f), h;
  for (o = 0; o < f; ++o)
    (u = e[o]) && (v[o] = h = s.call(u, u.__data__, o, e) + "", l.has(h) ? a[o] = u : l.set(h, u));
  for (o = 0; o < c; ++o)
    h = s.call(t11, i[o], o, i) + "", (u = l.get(h)) ? (n[o] = u, u.__data__ = i[o], l.delete(h)) : r[o] = new Ia(t11, i[o]);
  for (o = 0; o < f; ++o)
    (u = e[o]) && l.get(v[o]) === u && (a[o] = u);
}
function Rc(t11) {
  return t11.__data__;
}
function Pc(t11, e) {
  if (!arguments.length)
    return Array.from(this, Rc);
  var r = e ? kc : Ic, n = this._parents, a = this._groups;
  typeof t11 != "function" && (t11 = Oc(t11));
  for (var i = a.length, s = new Array(i), o = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var f = n[l], c = a[l], v = c.length, h = Bc(t11.call(f, f && f.__data__, l, n)), d = h.length, g = o[l] = new Array(d), b = s[l] = new Array(d), p = u[l] = new Array(v);
    r(f, c, g, b, p, h, e);
    for (var m = 0, y = 0, E, C; m < d; ++m)
      if (E = g[m]) {
        for (m >= y && (y = m + 1); !(C = b[y]) && ++y < d; )
          ;
        E._next = C || null;
      }
  }
  return s = new gt(s, n), s._enter = o, s._exit = u, s;
}
function Bc(t11) {
  return typeof t11 == "object" && "length" in t11 ? t11 : Array.from(t11);
}
function Fc() {
  return new gt(this._exit || this._groups.map(Nu), this._parents);
}
function _c(t11, e, r) {
  var n = this.enter(), a = this, i = this.exit();
  return typeof t11 == "function" ? (n = t11(n), n && (n = n.selection())) : n = n.append(t11 + ""), e != null && (a = e(a), a && (a = a.selection())), r == null ? i.remove() : r(i), n && a ? n.merge(a).order() : a;
}
function $c(t11) {
  for (var e = t11.selection ? t11.selection() : t11, r = this._groups, n = e._groups, a = r.length, i = n.length, s = Math.min(a, i), o = new Array(a), u = 0; u < s; ++u)
    for (var l = r[u], f = n[u], c = l.length, v = o[u] = new Array(c), h, d = 0; d < c; ++d)
      (h = l[d] || f[d]) && (v[d] = h);
  for (; u < a; ++u)
    o[u] = r[u];
  return new gt(o, this._parents);
}
function Gc() {
  for (var t11 = this._groups, e = -1, r = t11.length; ++e < r; )
    for (var n = t11[e], a = n.length - 1, i = n[a], s; --a >= 0; )
      (s = n[a]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function zc(t11) {
  t11 || (t11 = Hc);
  function e(c, v) {
    return c && v ? t11(c.__data__, v.__data__) : !c - !v;
  }
  for (var r = this._groups, n = r.length, a = new Array(n), i = 0; i < n; ++i) {
    for (var s = r[i], o = s.length, u = a[i] = new Array(o), l, f = 0; f < o; ++f)
      (l = s[f]) && (u[f] = l);
    u.sort(e);
  }
  return new gt(a, this._parents).order();
}
function Hc(t11, e) {
  return t11 < e ? -1 : t11 > e ? 1 : t11 >= e ? 0 : NaN;
}
function Vc() {
  var t11 = arguments[0];
  return arguments[0] = this, t11.apply(null, arguments), this;
}
function Yc() {
  return Array.from(this);
}
function Uc() {
  for (var t11 = this._groups, e = 0, r = t11.length; e < r; ++e)
    for (var n = t11[e], a = 0, i = n.length; a < i; ++a) {
      var s = n[a];
      if (s)
        return s;
    }
  return null;
}
function Xc() {
  let t11 = 0;
  for (const e of this)
    ++t11;
  return t11;
}
function qc() {
  return !this.node();
}
function Wc(t11) {
  for (var e = this._groups, r = 0, n = e.length; r < n; ++r)
    for (var a = e[r], i = 0, s = a.length, o; i < s; ++i)
      (o = a[i]) && t11.call(o, o.__data__, i, a);
  return this;
}
function Kc(t11) {
  return function() {
    this.removeAttribute(t11);
  };
}
function Zc(t11) {
  return function() {
    this.removeAttributeNS(t11.space, t11.local);
  };
}
function Qc(t11, e) {
  return function() {
    this.setAttribute(t11, e);
  };
}
function Jc(t11, e) {
  return function() {
    this.setAttributeNS(t11.space, t11.local, e);
  };
}
function jc(t11, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttribute(t11) : this.setAttribute(t11, r);
  };
}
function eh(t11, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.removeAttributeNS(t11.space, t11.local) : this.setAttributeNS(t11.space, t11.local, r);
  };
}
function th(t11, e) {
  var r = qa(t11);
  if (arguments.length < 2) {
    var n = this.node();
    return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r);
  }
  return this.each((e == null ? r.local ? Zc : Kc : typeof e == "function" ? r.local ? eh : jc : r.local ? Jc : Qc)(r, e));
}
function Mu(t11) {
  return t11.ownerDocument && t11.ownerDocument.defaultView || t11.document && t11 || t11.defaultView;
}
function rh(t11) {
  return function() {
    this.style.removeProperty(t11);
  };
}
function nh(t11, e, r) {
  return function() {
    this.style.setProperty(t11, e, r);
  };
}
function ah(t11, e, r) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.style.removeProperty(t11) : this.style.setProperty(t11, n, r);
  };
}
function ih(t11, e, r) {
  return arguments.length > 1 ? this.each((e == null ? rh : typeof e == "function" ? ah : nh)(t11, e, r == null ? "" : r)) : Yr(this.node(), t11);
}
function Yr(t11, e) {
  return t11.style.getPropertyValue(e) || Mu(t11).getComputedStyle(t11, null).getPropertyValue(e);
}
function sh(t11) {
  return function() {
    delete this[t11];
  };
}
function oh(t11, e) {
  return function() {
    this[t11] = e;
  };
}
function uh(t11, e) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? delete this[t11] : this[t11] = r;
  };
}
function lh(t11, e) {
  return arguments.length > 1 ? this.each((e == null ? sh : typeof e == "function" ? uh : oh)(t11, e)) : this.node()[t11];
}
function Ou(t11) {
  return t11.trim().split(/^|\s+/);
}
function as(t11) {
  return t11.classList || new Iu(t11);
}
function Iu(t11) {
  this._node = t11, this._names = Ou(t11.getAttribute("class") || "");
}
Iu.prototype = {
  add: function(t11) {
    var e = this._names.indexOf(t11);
    e < 0 && (this._names.push(t11), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t11) {
    var e = this._names.indexOf(t11);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t11) {
    return this._names.indexOf(t11) >= 0;
  }
};
function ku(t11, e) {
  for (var r = as(t11), n = -1, a = e.length; ++n < a; )
    r.add(e[n]);
}
function Ru(t11, e) {
  for (var r = as(t11), n = -1, a = e.length; ++n < a; )
    r.remove(e[n]);
}
function fh(t11) {
  return function() {
    ku(this, t11);
  };
}
function ch(t11) {
  return function() {
    Ru(this, t11);
  };
}
function hh(t11, e) {
  return function() {
    (e.apply(this, arguments) ? ku : Ru)(this, t11);
  };
}
function vh(t11, e) {
  var r = Ou(t11 + "");
  if (arguments.length < 2) {
    for (var n = as(this.node()), a = -1, i = r.length; ++a < i; )
      if (!n.contains(r[a]))
        return false;
    return true;
  }
  return this.each((typeof e == "function" ? hh : e ? fh : ch)(r, e));
}
function dh() {
  this.textContent = "";
}
function gh(t11) {
  return function() {
    this.textContent = t11;
  };
}
function ph(t11) {
  return function() {
    var e = t11.apply(this, arguments);
    this.textContent = e == null ? "" : e;
  };
}
function yh(t11) {
  return arguments.length ? this.each(t11 == null ? dh : (typeof t11 == "function" ? ph : gh)(t11)) : this.node().textContent;
}
function mh() {
  this.innerHTML = "";
}
function bh(t11) {
  return function() {
    this.innerHTML = t11;
  };
}
function wh(t11) {
  return function() {
    var e = t11.apply(this, arguments);
    this.innerHTML = e == null ? "" : e;
  };
}
function Eh(t11) {
  return arguments.length ? this.each(t11 == null ? mh : (typeof t11 == "function" ? wh : bh)(t11)) : this.node().innerHTML;
}
function xh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Th() {
  return this.each(xh);
}
function Ch() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Dh() {
  return this.each(Ch);
}
function Sh(t11) {
  var e = typeof t11 == "function" ? t11 : Du(t11);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Lh() {
  return null;
}
function Ah(t11, e) {
  var r = typeof t11 == "function" ? t11 : Du(t11), n = e == null ? Lh : typeof e == "function" ? e : ns(e);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null);
  });
}
function Nh() {
  var t11 = this.parentNode;
  t11 && t11.removeChild(this);
}
function Mh() {
  return this.each(Nh);
}
function Oh() {
  var t11 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t11, this.nextSibling) : t11;
}
function Ih() {
  var t11 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t11, this.nextSibling) : t11;
}
function kh(t11) {
  return this.select(t11 ? Ih : Oh);
}
function Rh(t11) {
  return arguments.length ? this.property("__data__", t11) : this.node().__data__;
}
function Ph(t11) {
  return function(e) {
    t11.call(this, e, this.__data__);
  };
}
function Bh(t11) {
  return t11.trim().split(/^|\s+/).map(function(e) {
    var r = "", n = e.indexOf(".");
    return n >= 0 && (r = e.slice(n + 1), e = e.slice(0, n)), { type: e, name: r };
  });
}
function Fh(t11) {
  return function() {
    var e = this.__on;
    if (!!e) {
      for (var r = 0, n = -1, a = e.length, i; r < a; ++r)
        i = e[r], (!t11.type || i.type === t11.type) && i.name === t11.name ? this.removeEventListener(i.type, i.listener, i.options) : e[++n] = i;
      ++n ? e.length = n : delete this.__on;
    }
  };
}
function _h(t11, e, r) {
  return function() {
    var n = this.__on, a, i = Ph(e);
    if (n) {
      for (var s = 0, o = n.length; s < o; ++s)
        if ((a = n[s]).type === t11.type && a.name === t11.name) {
          this.removeEventListener(a.type, a.listener, a.options), this.addEventListener(a.type, a.listener = i, a.options = r), a.value = e;
          return;
        }
    }
    this.addEventListener(t11.type, i, r), a = { type: t11.type, name: t11.name, value: e, listener: i, options: r }, n ? n.push(a) : this.__on = [a];
  };
}
function $h(t11, e, r) {
  var n = Bh(t11 + ""), a, i = n.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var u = 0, l = o.length, f; u < l; ++u)
        for (a = 0, f = o[u]; a < i; ++a)
          if ((s = n[a]).type === f.type && s.name === f.name)
            return f.value;
    }
    return;
  }
  for (o = e ? _h : Fh, a = 0; a < i; ++a)
    this.each(o(n[a], e, r));
  return this;
}
function Pu(t11, e, r) {
  var n = Mu(t11), a = n.CustomEvent;
  typeof a == "function" ? a = new a(e, r) : (a = n.document.createEvent("Event"), r ? (a.initEvent(e, r.bubbles, r.cancelable), a.detail = r.detail) : a.initEvent(e, false, false)), t11.dispatchEvent(a);
}
function Gh(t11, e) {
  return function() {
    return Pu(this, t11, e);
  };
}
function zh(t11, e) {
  return function() {
    return Pu(this, t11, e.apply(this, arguments));
  };
}
function Hh(t11, e) {
  return this.each((typeof e == "function" ? zh : Gh)(t11, e));
}
function* Vh() {
  for (var t11 = this._groups, e = 0, r = t11.length; e < r; ++e)
    for (var n = t11[e], a = 0, i = n.length, s; a < i; ++a)
      (s = n[a]) && (yield s);
}
var Bu = [null];
function gt(t11, e) {
  this._groups = t11, this._parents = e;
}
function Gn() {
  return new gt([[document.documentElement]], Bu);
}
function Yh() {
  return this;
}
gt.prototype = Gn.prototype = {
  constructor: gt,
  select: pc,
  selectAll: wc,
  selectChild: Cc,
  selectChildren: Ac,
  filter: Nc,
  data: Pc,
  enter: Mc,
  exit: Fc,
  join: _c,
  merge: $c,
  selection: Yh,
  order: Gc,
  sort: zc,
  call: Vc,
  nodes: Yc,
  node: Uc,
  size: Xc,
  empty: qc,
  each: Wc,
  attr: th,
  style: ih,
  property: lh,
  classed: vh,
  text: yh,
  html: Eh,
  raise: Th,
  lower: Dh,
  append: Sh,
  insert: Ah,
  remove: Mh,
  clone: kh,
  datum: Rh,
  on: $h,
  dispatch: Hh,
  [Symbol.iterator]: Vh
};
function wn(t11) {
  return typeof t11 == "string" ? new gt([[document.querySelector(t11)]], [document.documentElement]) : new gt([[t11]], Bu);
}
function is(t11, e, r) {
  t11.prototype = e.prototype = r, r.constructor = t11;
}
function Fu(t11, e) {
  var r = Object.create(t11.prototype);
  for (var n in e)
    r[n] = e[n];
  return r;
}
function zn() {
}
var Sn = 0.7, ka = 1 / Sn, $r = "\\s*([+-]?\\d+)\\s*", Ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Uh = /^#([0-9a-f]{3,8})$/, Xh = new RegExp(`^rgb\\(${$r},${$r},${$r}\\)$`), qh = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`), Wh = new RegExp(`^rgba\\(${$r},${$r},${$r},${Ln}\\)$`), Kh = new RegExp(`^rgba\\(${kt},${kt},${kt},${Ln}\\)$`), Zh = new RegExp(`^hsl\\(${Ln},${kt},${kt}\\)$`), Qh = new RegExp(`^hsla\\(${Ln},${kt},${kt},${Ln}\\)$`), Gs = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
is(zn, An, {
  copy(t11) {
    return Object.assign(new this.constructor(), this, t11);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: zs,
  formatHex: zs,
  formatHex8: Jh,
  formatHsl: jh,
  formatRgb: Hs,
  toString: Hs
});
function zs() {
  return this.rgb().formatHex();
}
function Jh() {
  return this.rgb().formatHex8();
}
function jh() {
  return _u(this).formatHsl();
}
function Hs() {
  return this.rgb().formatRgb();
}
function An(t11) {
  var e, r;
  return t11 = (t11 + "").trim().toLowerCase(), (e = Uh.exec(t11)) ? (r = e[1].length, e = parseInt(e[1], 16), r === 6 ? Vs(e) : r === 3 ? new ct(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : r === 8 ? na(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? na(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Xh.exec(t11)) ? new ct(e[1], e[2], e[3], 1) : (e = qh.exec(t11)) ? new ct(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Wh.exec(t11)) ? na(e[1], e[2], e[3], e[4]) : (e = Kh.exec(t11)) ? na(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Zh.exec(t11)) ? Xs(e[1], e[2] / 100, e[3] / 100, 1) : (e = Qh.exec(t11)) ? Xs(e[1], e[2] / 100, e[3] / 100, e[4]) : Gs.hasOwnProperty(t11) ? Vs(Gs[t11]) : t11 === "transparent" ? new ct(NaN, NaN, NaN, 0) : null;
}
function Vs(t11) {
  return new ct(t11 >> 16 & 255, t11 >> 8 & 255, t11 & 255, 1);
}
function na(t11, e, r, n) {
  return n <= 0 && (t11 = e = r = NaN), new ct(t11, e, r, n);
}
function ev(t11) {
  return t11 instanceof zn || (t11 = An(t11)), t11 ? (t11 = t11.rgb(), new ct(t11.r, t11.g, t11.b, t11.opacity)) : new ct();
}
function Bi(t11, e, r, n) {
  return arguments.length === 1 ? ev(t11) : new ct(t11, e, r, n == null ? 1 : n);
}
function ct(t11, e, r, n) {
  this.r = +t11, this.g = +e, this.b = +r, this.opacity = +n;
}
is(ct, Bi, Fu(zn, {
  brighter(t11) {
    return t11 = t11 == null ? ka : Math.pow(ka, t11), new ct(this.r * t11, this.g * t11, this.b * t11, this.opacity);
  },
  darker(t11) {
    return t11 = t11 == null ? Sn : Math.pow(Sn, t11), new ct(this.r * t11, this.g * t11, this.b * t11, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ct(pr(this.r), pr(this.g), pr(this.b), Ra(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ys,
  formatHex: Ys,
  formatHex8: tv,
  formatRgb: Us,
  toString: Us
}));
function Ys() {
  return `#${dr(this.r)}${dr(this.g)}${dr(this.b)}`;
}
function tv() {
  return `#${dr(this.r)}${dr(this.g)}${dr(this.b)}${dr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Us() {
  const t11 = Ra(this.opacity);
  return `${t11 === 1 ? "rgb(" : "rgba("}${pr(this.r)}, ${pr(this.g)}, ${pr(this.b)}${t11 === 1 ? ")" : `, ${t11})`}`;
}
function Ra(t11) {
  return isNaN(t11) ? 1 : Math.max(0, Math.min(1, t11));
}
function pr(t11) {
  return Math.max(0, Math.min(255, Math.round(t11) || 0));
}
function dr(t11) {
  return t11 = pr(t11), (t11 < 16 ? "0" : "") + t11.toString(16);
}
function Xs(t11, e, r, n) {
  return n <= 0 ? t11 = e = r = NaN : r <= 0 || r >= 1 ? t11 = e = NaN : e <= 0 && (t11 = NaN), new Lt(t11, e, r, n);
}
function _u(t11) {
  if (t11 instanceof Lt)
    return new Lt(t11.h, t11.s, t11.l, t11.opacity);
  if (t11 instanceof zn || (t11 = An(t11)), !t11)
    return new Lt();
  if (t11 instanceof Lt)
    return t11;
  t11 = t11.rgb();
  var e = t11.r / 255, r = t11.g / 255, n = t11.b / 255, a = Math.min(e, r, n), i = Math.max(e, r, n), s = NaN, o = i - a, u = (i + a) / 2;
  return o ? (e === i ? s = (r - n) / o + (r < n) * 6 : r === i ? s = (n - e) / o + 2 : s = (e - r) / o + 4, o /= u < 0.5 ? i + a : 2 - i - a, s *= 60) : o = u > 0 && u < 1 ? 0 : s, new Lt(s, o, u, t11.opacity);
}
function rv(t11, e, r, n) {
  return arguments.length === 1 ? _u(t11) : new Lt(t11, e, r, n == null ? 1 : n);
}
function Lt(t11, e, r, n) {
  this.h = +t11, this.s = +e, this.l = +r, this.opacity = +n;
}
is(Lt, rv, Fu(zn, {
  brighter(t11) {
    return t11 = t11 == null ? ka : Math.pow(ka, t11), new Lt(this.h, this.s, this.l * t11, this.opacity);
  },
  darker(t11) {
    return t11 = t11 == null ? Sn : Math.pow(Sn, t11), new Lt(this.h, this.s, this.l * t11, this.opacity);
  },
  rgb() {
    var t11 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t11) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * e, a = 2 * r - n;
    return new ct(
      yi(t11 >= 240 ? t11 - 240 : t11 + 120, a, n),
      yi(t11, a, n),
      yi(t11 < 120 ? t11 + 240 : t11 - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Lt(qs(this.h), aa(this.s), aa(this.l), Ra(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t11 = Ra(this.opacity);
    return `${t11 === 1 ? "hsl(" : "hsla("}${qs(this.h)}, ${aa(this.s) * 100}%, ${aa(this.l) * 100}%${t11 === 1 ? ")" : `, ${t11})`}`;
  }
}));
function qs(t11) {
  return t11 = (t11 || 0) % 360, t11 < 0 ? t11 + 360 : t11;
}
function aa(t11) {
  return Math.max(0, Math.min(1, t11 || 0));
}
function yi(t11, e, r) {
  return (t11 < 60 ? e + (r - e) * t11 / 60 : t11 < 180 ? r : t11 < 240 ? e + (r - e) * (240 - t11) / 60 : e) * 255;
}
const $u = (t11) => () => t11;
function nv(t11, e) {
  return function(r) {
    return t11 + r * e;
  };
}
function av(t11, e, r) {
  return t11 = Math.pow(t11, r), e = Math.pow(e, r) - t11, r = 1 / r, function(n) {
    return Math.pow(t11 + n * e, r);
  };
}
function iv(t11) {
  return (t11 = +t11) == 1 ? Gu : function(e, r) {
    return r - e ? av(e, r, t11) : $u(isNaN(e) ? r : e);
  };
}
function Gu(t11, e) {
  var r = e - t11;
  return r ? nv(t11, r) : $u(isNaN(t11) ? e : t11);
}
const Ws = function t(e) {
  var r = iv(e);
  function n(a, i) {
    var s = r((a = Bi(a)).r, (i = Bi(i)).r), o = r(a.g, i.g), u = r(a.b, i.b), l = Gu(a.opacity, i.opacity);
    return function(f) {
      return a.r = s(f), a.g = o(f), a.b = u(f), a.opacity = l(f), a + "";
    };
  }
  return n.gamma = t, n;
}(1);
function Qt(t11, e) {
  return t11 = +t11, e = +e, function(r) {
    return t11 * (1 - r) + e * r;
  };
}
var Fi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, mi = new RegExp(Fi.source, "g");
function sv(t11) {
  return function() {
    return t11;
  };
}
function ov(t11) {
  return function(e) {
    return t11(e) + "";
  };
}
function uv(t11, e) {
  var r = Fi.lastIndex = mi.lastIndex = 0, n, a, i, s = -1, o = [], u = [];
  for (t11 = t11 + "", e = e + ""; (n = Fi.exec(t11)) && (a = mi.exec(e)); )
    (i = a.index) > r && (i = e.slice(r, i), o[s] ? o[s] += i : o[++s] = i), (n = n[0]) === (a = a[0]) ? o[s] ? o[s] += a : o[++s] = a : (o[++s] = null, u.push({ i: s, x: Qt(n, a) })), r = mi.lastIndex;
  return r < e.length && (i = e.slice(r), o[s] ? o[s] += i : o[++s] = i), o.length < 2 ? u[0] ? ov(u[0].x) : sv(e) : (e = u.length, function(l) {
    for (var f = 0, c; f < e; ++f)
      o[(c = u[f]).i] = c.x(l);
    return o.join("");
  });
}
var Ks = 180 / Math.PI, _i = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function zu(t11, e, r, n, a, i) {
  var s, o, u;
  return (s = Math.sqrt(t11 * t11 + e * e)) && (t11 /= s, e /= s), (u = t11 * r + e * n) && (r -= t11 * u, n -= e * u), (o = Math.sqrt(r * r + n * n)) && (r /= o, n /= o, u /= o), t11 * n < e * r && (t11 = -t11, e = -e, u = -u, s = -s), {
    translateX: a,
    translateY: i,
    rotate: Math.atan2(e, t11) * Ks,
    skewX: Math.atan(u) * Ks,
    scaleX: s,
    scaleY: o
  };
}
var ia;
function lv(t11) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t11 + "");
  return e.isIdentity ? _i : zu(e.a, e.b, e.c, e.d, e.e, e.f);
}
function fv(t11) {
  return t11 == null || (ia || (ia = document.createElementNS("http://www.w3.org/2000/svg", "g")), ia.setAttribute("transform", t11), !(t11 = ia.transform.baseVal.consolidate())) ? _i : (t11 = t11.matrix, zu(t11.a, t11.b, t11.c, t11.d, t11.e, t11.f));
}
function Hu(t11, e, r, n) {
  function a(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, f, c, v, h, d) {
    if (l !== c || f !== v) {
      var g = h.push("translate(", null, e, null, r);
      d.push({ i: g - 4, x: Qt(l, c) }, { i: g - 2, x: Qt(f, v) });
    } else
      (c || v) && h.push("translate(" + c + e + v + r);
  }
  function s(l, f, c, v) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), v.push({ i: c.push(a(c) + "rotate(", null, n) - 2, x: Qt(l, f) })) : f && c.push(a(c) + "rotate(" + f + n);
  }
  function o(l, f, c, v) {
    l !== f ? v.push({ i: c.push(a(c) + "skewX(", null, n) - 2, x: Qt(l, f) }) : f && c.push(a(c) + "skewX(" + f + n);
  }
  function u(l, f, c, v, h, d) {
    if (l !== c || f !== v) {
      var g = h.push(a(h) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: Qt(l, c) }, { i: g - 2, x: Qt(f, v) });
    } else
      (c !== 1 || v !== 1) && h.push(a(h) + "scale(" + c + "," + v + ")");
  }
  return function(l, f) {
    var c = [], v = [];
    return l = t11(l), f = t11(f), i(l.translateX, l.translateY, f.translateX, f.translateY, c, v), s(l.rotate, f.rotate, c, v), o(l.skewX, f.skewX, c, v), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, c, v), l = f = null, function(h) {
      for (var d = -1, g = v.length, b; ++d < g; )
        c[(b = v[d]).i] = b.x(h);
      return c.join("");
    };
  };
}
var cv = Hu(lv, "px, ", "px)", "deg)"), hv = Hu(fv, ", ", ")", ")"), Ur = 0, dn = 0, un = 0, Vu = 1e3, Pa, gn, Ba = 0, yr = 0, Wa = 0, Nn = typeof performance == "object" && performance.now ? performance : Date, Yu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t11) {
  setTimeout(t11, 17);
};
function ss() {
  return yr || (Yu(vv), yr = Nn.now() + Wa);
}
function vv() {
  yr = 0;
}
function Fa() {
  this._call = this._time = this._next = null;
}
Fa.prototype = Uu.prototype = {
  constructor: Fa,
  restart: function(t11, e, r) {
    if (typeof t11 != "function")
      throw new TypeError("callback is not a function");
    r = (r == null ? ss() : +r) + (e == null ? 0 : +e), !this._next && gn !== this && (gn ? gn._next = this : Pa = this, gn = this), this._call = t11, this._time = r, $i();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, $i());
  }
};
function Uu(t11, e, r) {
  var n = new Fa();
  return n.restart(t11, e, r), n;
}
function dv() {
  ss(), ++Ur;
  for (var t11 = Pa, e; t11; )
    (e = yr - t11._time) >= 0 && t11._call.call(void 0, e), t11 = t11._next;
  --Ur;
}
function Zs() {
  yr = (Ba = Nn.now()) + Wa, Ur = dn = 0;
  try {
    dv();
  } finally {
    Ur = 0, pv(), yr = 0;
  }
}
function gv() {
  var t11 = Nn.now(), e = t11 - Ba;
  e > Vu && (Wa -= e, Ba = t11);
}
function pv() {
  for (var t11, e = Pa, r, n = 1 / 0; e; )
    e._call ? (n > e._time && (n = e._time), t11 = e, e = e._next) : (r = e._next, e._next = null, e = t11 ? t11._next = r : Pa = r);
  gn = t11, $i(n);
}
function $i(t11) {
  if (!Ur) {
    dn && (dn = clearTimeout(dn));
    var e = t11 - yr;
    e > 24 ? (t11 < 1 / 0 && (dn = setTimeout(Zs, t11 - Nn.now() - Wa)), un && (un = clearInterval(un))) : (un || (Ba = Nn.now(), un = setInterval(gv, Vu)), Ur = 1, Yu(Zs));
  }
}
function Qs(t11, e, r) {
  var n = new Fa();
  return e = e == null ? 0 : +e, n.restart((a) => {
    n.stop(), t11(a + e);
  }, e, r), n;
}
var yv = Cu("start", "end", "cancel", "interrupt"), mv = [], Xu = 0, Js = 1, Gi = 2, wa = 3, js = 4, zi = 5, Ea = 6;
function Ka(t11, e, r, n, a, i) {
  var s = t11.__transition;
  if (!s)
    t11.__transition = {};
  else if (r in s)
    return;
  bv(t11, r, {
    name: e,
    index: n,
    group: a,
    on: yv,
    tween: mv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Xu
  });
}
function os(t11, e) {
  var r = Nt(t11, e);
  if (r.state > Xu)
    throw new Error("too late; already scheduled");
  return r;
}
function Pt(t11, e) {
  var r = Nt(t11, e);
  if (r.state > wa)
    throw new Error("too late; already running");
  return r;
}
function Nt(t11, e) {
  var r = t11.__transition;
  if (!r || !(r = r[e]))
    throw new Error("transition not found");
  return r;
}
function bv(t11, e, r) {
  var n = t11.__transition, a;
  n[e] = r, r.timer = Uu(i, 0, r.time);
  function i(l) {
    r.state = Js, r.timer.restart(s, r.delay, r.time), r.delay <= l && s(l - r.delay);
  }
  function s(l) {
    var f, c, v, h;
    if (r.state !== Js)
      return u();
    for (f in n)
      if (h = n[f], h.name === r.name) {
        if (h.state === wa)
          return Qs(s);
        h.state === js ? (h.state = Ea, h.timer.stop(), h.on.call("interrupt", t11, t11.__data__, h.index, h.group), delete n[f]) : +f < e && (h.state = Ea, h.timer.stop(), h.on.call("cancel", t11, t11.__data__, h.index, h.group), delete n[f]);
      }
    if (Qs(function() {
      r.state === wa && (r.state = js, r.timer.restart(o, r.delay, r.time), o(l));
    }), r.state = Gi, r.on.call("start", t11, t11.__data__, r.index, r.group), r.state === Gi) {
      for (r.state = wa, a = new Array(v = r.tween.length), f = 0, c = -1; f < v; ++f)
        (h = r.tween[f].value.call(t11, t11.__data__, r.index, r.group)) && (a[++c] = h);
      a.length = c + 1;
    }
  }
  function o(l) {
    for (var f = l < r.duration ? r.ease.call(null, l / r.duration) : (r.timer.restart(u), r.state = zi, 1), c = -1, v = a.length; ++c < v; )
      a[c].call(t11, f);
    r.state === zi && (r.on.call("end", t11, t11.__data__, r.index, r.group), u());
  }
  function u() {
    r.state = Ea, r.timer.stop(), delete n[e];
    for (var l in n)
      return;
    delete t11.__transition;
  }
}
function wv(t11, e) {
  var r = t11.__transition, n, a, i = true, s;
  if (!!r) {
    e = e == null ? null : e + "";
    for (s in r) {
      if ((n = r[s]).name !== e) {
        i = false;
        continue;
      }
      a = n.state > Gi && n.state < zi, n.state = Ea, n.timer.stop(), n.on.call(a ? "interrupt" : "cancel", t11, t11.__data__, n.index, n.group), delete r[s];
    }
    i && delete t11.__transition;
  }
}
function Ev(t11) {
  return this.each(function() {
    wv(this, t11);
  });
}
function xv(t11, e) {
  var r, n;
  return function() {
    var a = Pt(this, t11), i = a.tween;
    if (i !== r) {
      n = r = i;
      for (var s = 0, o = n.length; s < o; ++s)
        if (n[s].name === e) {
          n = n.slice(), n.splice(s, 1);
          break;
        }
    }
    a.tween = n;
  };
}
function Tv(t11, e, r) {
  var n, a;
  if (typeof r != "function")
    throw new Error();
  return function() {
    var i = Pt(this, t11), s = i.tween;
    if (s !== n) {
      a = (n = s).slice();
      for (var o = { name: e, value: r }, u = 0, l = a.length; u < l; ++u)
        if (a[u].name === e) {
          a[u] = o;
          break;
        }
      u === l && a.push(o);
    }
    i.tween = a;
  };
}
function Cv(t11, e) {
  var r = this._id;
  if (t11 += "", arguments.length < 2) {
    for (var n = Nt(this.node(), r).tween, a = 0, i = n.length, s; a < i; ++a)
      if ((s = n[a]).name === t11)
        return s.value;
    return null;
  }
  return this.each((e == null ? xv : Tv)(r, t11, e));
}
function us(t11, e, r) {
  var n = t11._id;
  return t11.each(function() {
    var a = Pt(this, n);
    (a.value || (a.value = {}))[e] = r.apply(this, arguments);
  }), function(a) {
    return Nt(a, n).value[e];
  };
}
function qu(t11, e) {
  var r;
  return (typeof e == "number" ? Qt : e instanceof An ? Ws : (r = An(e)) ? (e = r, Ws) : uv)(t11, e);
}
function Dv(t11) {
  return function() {
    this.removeAttribute(t11);
  };
}
function Sv(t11) {
  return function() {
    this.removeAttributeNS(t11.space, t11.local);
  };
}
function Lv(t11, e, r) {
  var n, a = r + "", i;
  return function() {
    var s = this.getAttribute(t11);
    return s === a ? null : s === n ? i : i = e(n = s, r);
  };
}
function Av(t11, e, r) {
  var n, a = r + "", i;
  return function() {
    var s = this.getAttributeNS(t11.space, t11.local);
    return s === a ? null : s === n ? i : i = e(n = s, r);
  };
}
function Nv(t11, e, r) {
  var n, a, i;
  return function() {
    var s, o = r(this), u;
    return o == null ? void this.removeAttribute(t11) : (s = this.getAttribute(t11), u = o + "", s === u ? null : s === n && u === a ? i : (a = u, i = e(n = s, o)));
  };
}
function Mv(t11, e, r) {
  var n, a, i;
  return function() {
    var s, o = r(this), u;
    return o == null ? void this.removeAttributeNS(t11.space, t11.local) : (s = this.getAttributeNS(t11.space, t11.local), u = o + "", s === u ? null : s === n && u === a ? i : (a = u, i = e(n = s, o)));
  };
}
function Ov(t11, e) {
  var r = qa(t11), n = r === "transform" ? hv : qu;
  return this.attrTween(t11, typeof e == "function" ? (r.local ? Mv : Nv)(r, n, us(this, "attr." + t11, e)) : e == null ? (r.local ? Sv : Dv)(r) : (r.local ? Av : Lv)(r, n, e));
}
function Iv(t11, e) {
  return function(r) {
    this.setAttribute(t11, e.call(this, r));
  };
}
function kv(t11, e) {
  return function(r) {
    this.setAttributeNS(t11.space, t11.local, e.call(this, r));
  };
}
function Rv(t11, e) {
  var r, n;
  function a() {
    var i = e.apply(this, arguments);
    return i !== n && (r = (n = i) && kv(t11, i)), r;
  }
  return a._value = e, a;
}
function Pv(t11, e) {
  var r, n;
  function a() {
    var i = e.apply(this, arguments);
    return i !== n && (r = (n = i) && Iv(t11, i)), r;
  }
  return a._value = e, a;
}
function Bv(t11, e) {
  var r = "attr." + t11;
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  var n = qa(t11);
  return this.tween(r, (n.local ? Rv : Pv)(n, e));
}
function Fv(t11, e) {
  return function() {
    os(this, t11).delay = +e.apply(this, arguments);
  };
}
function _v(t11, e) {
  return e = +e, function() {
    os(this, t11).delay = e;
  };
}
function $v(t11) {
  var e = this._id;
  return arguments.length ? this.each((typeof t11 == "function" ? Fv : _v)(e, t11)) : Nt(this.node(), e).delay;
}
function Gv(t11, e) {
  return function() {
    Pt(this, t11).duration = +e.apply(this, arguments);
  };
}
function zv(t11, e) {
  return e = +e, function() {
    Pt(this, t11).duration = e;
  };
}
function Hv(t11) {
  var e = this._id;
  return arguments.length ? this.each((typeof t11 == "function" ? Gv : zv)(e, t11)) : Nt(this.node(), e).duration;
}
function Vv(t11, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    Pt(this, t11).ease = e;
  };
}
function Yv(t11) {
  var e = this._id;
  return arguments.length ? this.each(Vv(e, t11)) : Nt(this.node(), e).ease;
}
function Uv(t11, e) {
  return function() {
    var r = e.apply(this, arguments);
    if (typeof r != "function")
      throw new Error();
    Pt(this, t11).ease = r;
  };
}
function Xv(t11) {
  if (typeof t11 != "function")
    throw new Error();
  return this.each(Uv(this._id, t11));
}
function qv(t11) {
  typeof t11 != "function" && (t11 = Lu(t11));
  for (var e = this._groups, r = e.length, n = new Array(r), a = 0; a < r; ++a)
    for (var i = e[a], s = i.length, o = n[a] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && t11.call(u, u.__data__, l, i) && o.push(u);
  return new zt(n, this._parents, this._name, this._id);
}
function Wv(t11) {
  if (t11._id !== this._id)
    throw new Error();
  for (var e = this._groups, r = t11._groups, n = e.length, a = r.length, i = Math.min(n, a), s = new Array(n), o = 0; o < i; ++o)
    for (var u = e[o], l = r[o], f = u.length, c = s[o] = new Array(f), v, h = 0; h < f; ++h)
      (v = u[h] || l[h]) && (c[h] = v);
  for (; o < n; ++o)
    s[o] = e[o];
  return new zt(s, this._parents, this._name, this._id);
}
function Kv(t11) {
  return (t11 + "").trim().split(/^|\s+/).every(function(e) {
    var r = e.indexOf(".");
    return r >= 0 && (e = e.slice(0, r)), !e || e === "start";
  });
}
function Zv(t11, e, r) {
  var n, a, i = Kv(e) ? os : Pt;
  return function() {
    var s = i(this, t11), o = s.on;
    o !== n && (a = (n = o).copy()).on(e, r), s.on = a;
  };
}
function Qv(t11, e) {
  var r = this._id;
  return arguments.length < 2 ? Nt(this.node(), r).on.on(t11) : this.each(Zv(r, t11, e));
}
function Jv(t11) {
  return function() {
    var e = this.parentNode;
    for (var r in this.__transition)
      if (+r !== t11)
        return;
    e && e.removeChild(this);
  };
}
function jv() {
  return this.on("end.remove", Jv(this._id));
}
function ed(t11) {
  var e = this._name, r = this._id;
  typeof t11 != "function" && (t11 = ns(t11));
  for (var n = this._groups, a = n.length, i = new Array(a), s = 0; s < a; ++s)
    for (var o = n[s], u = o.length, l = i[s] = new Array(u), f, c, v = 0; v < u; ++v)
      (f = o[v]) && (c = t11.call(f, f.__data__, v, o)) && ("__data__" in f && (c.__data__ = f.__data__), l[v] = c, Ka(l[v], e, r, v, l, Nt(f, r)));
  return new zt(i, this._parents, e, r);
}
function td(t11) {
  var e = this._name, r = this._id;
  typeof t11 != "function" && (t11 = Su(t11));
  for (var n = this._groups, a = n.length, i = [], s = [], o = 0; o < a; ++o)
    for (var u = n[o], l = u.length, f, c = 0; c < l; ++c)
      if (f = u[c]) {
        for (var v = t11.call(f, f.__data__, c, u), h, d = Nt(f, r), g = 0, b = v.length; g < b; ++g)
          (h = v[g]) && Ka(h, e, r, g, v, d);
        i.push(v), s.push(f);
      }
  return new zt(i, s, e, r);
}
var rd = Gn.prototype.constructor;
function nd() {
  return new rd(this._groups, this._parents);
}
function ad(t11, e) {
  var r, n, a;
  return function() {
    var i = Yr(this, t11), s = (this.style.removeProperty(t11), Yr(this, t11));
    return i === s ? null : i === r && s === n ? a : a = e(r = i, n = s);
  };
}
function Wu(t11) {
  return function() {
    this.style.removeProperty(t11);
  };
}
function id(t11, e, r) {
  var n, a = r + "", i;
  return function() {
    var s = Yr(this, t11);
    return s === a ? null : s === n ? i : i = e(n = s, r);
  };
}
function sd(t11, e, r) {
  var n, a, i;
  return function() {
    var s = Yr(this, t11), o = r(this), u = o + "";
    return o == null && (u = o = (this.style.removeProperty(t11), Yr(this, t11))), s === u ? null : s === n && u === a ? i : (a = u, i = e(n = s, o));
  };
}
function od(t11, e) {
  var r, n, a, i = "style." + e, s = "end." + i, o;
  return function() {
    var u = Pt(this, t11), l = u.on, f = u.value[i] == null ? o || (o = Wu(e)) : void 0;
    (l !== r || a !== f) && (n = (r = l).copy()).on(s, a = f), u.on = n;
  };
}
function ud(t11, e, r) {
  var n = (t11 += "") == "transform" ? cv : qu;
  return e == null ? this.styleTween(t11, ad(t11, n)).on("end.style." + t11, Wu(t11)) : typeof e == "function" ? this.styleTween(t11, sd(t11, n, us(this, "style." + t11, e))).each(od(this._id, t11)) : this.styleTween(t11, id(t11, n, e), r).on("end.style." + t11, null);
}
function ld(t11, e, r) {
  return function(n) {
    this.style.setProperty(t11, e.call(this, n), r);
  };
}
function fd(t11, e, r) {
  var n, a;
  function i() {
    var s = e.apply(this, arguments);
    return s !== a && (n = (a = s) && ld(t11, s, r)), n;
  }
  return i._value = e, i;
}
function cd(t11, e, r) {
  var n = "style." + (t11 += "");
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(n, fd(t11, e, r == null ? "" : r));
}
function hd(t11) {
  return function() {
    this.textContent = t11;
  };
}
function vd(t11) {
  return function() {
    var e = t11(this);
    this.textContent = e == null ? "" : e;
  };
}
function dd(t11) {
  return this.tween("text", typeof t11 == "function" ? vd(us(this, "text", t11)) : hd(t11 == null ? "" : t11 + ""));
}
function gd(t11) {
  return function(e) {
    this.textContent = t11.call(this, e);
  };
}
function pd(t11) {
  var e, r;
  function n() {
    var a = t11.apply(this, arguments);
    return a !== r && (e = (r = a) && gd(a)), e;
  }
  return n._value = t11, n;
}
function yd(t11) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t11 == null)
    return this.tween(e, null);
  if (typeof t11 != "function")
    throw new Error();
  return this.tween(e, pd(t11));
}
function md() {
  for (var t11 = this._name, e = this._id, r = Ku(), n = this._groups, a = n.length, i = 0; i < a; ++i)
    for (var s = n[i], o = s.length, u, l = 0; l < o; ++l)
      if (u = s[l]) {
        var f = Nt(u, e);
        Ka(u, t11, r, l, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new zt(n, this._parents, t11, r);
}
function bd() {
  var t11, e, r = this, n = r._id, a = r.size();
  return new Promise(function(i, s) {
    var o = { value: s }, u = { value: function() {
      --a === 0 && i();
    } };
    r.each(function() {
      var l = Pt(this, n), f = l.on;
      f !== t11 && (e = (t11 = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(u)), l.on = e;
    }), a === 0 && i();
  });
}
var wd = 0;
function zt(t11, e, r, n) {
  this._groups = t11, this._parents = e, this._name = r, this._id = n;
}
function Ku() {
  return ++wd;
}
var $t = Gn.prototype;
zt.prototype = {
  constructor: zt,
  select: ed,
  selectAll: td,
  selectChild: $t.selectChild,
  selectChildren: $t.selectChildren,
  filter: qv,
  merge: Wv,
  selection: nd,
  transition: md,
  call: $t.call,
  nodes: $t.nodes,
  node: $t.node,
  size: $t.size,
  empty: $t.empty,
  each: $t.each,
  on: Qv,
  attr: Ov,
  attrTween: Bv,
  style: ud,
  styleTween: cd,
  text: dd,
  textTween: yd,
  remove: jv,
  tween: Cv,
  delay: $v,
  duration: Hv,
  ease: Yv,
  easeVarying: Xv,
  end: bd,
  [Symbol.iterator]: $t[Symbol.iterator]
};
function Ed(t11) {
  return ((t11 *= 2) <= 1 ? t11 * t11 * t11 : (t11 -= 2) * t11 * t11 + 2) / 2;
}
var xd = {
  time: null,
  delay: 0,
  duration: 250,
  ease: Ed
};
function Td(t11, e) {
  for (var r; !(r = t11.__transition) || !(r = r[e]); )
    if (!(t11 = t11.parentNode))
      throw new Error(`transition ${e} not found`);
  return r;
}
function Cd(t11) {
  var e, r;
  t11 instanceof zt ? (e = t11._id, t11 = t11._name) : (e = Ku(), (r = xd).time = ss(), t11 = t11 == null ? null : t11 + "");
  for (var n = this._groups, a = n.length, i = 0; i < a; ++i)
    for (var s = n[i], o = s.length, u, l = 0; l < o; ++l)
      (u = s[l]) && Ka(u, t11, e, l, s, r || Td(u, e));
  return new zt(n, this._parents, t11, e);
}
Gn.prototype.interrupt = Ev;
Gn.prototype.transition = Cd;
function Pr(t11, e, r) {
  this.k = t11, this.x = e, this.y = r;
}
Pr.prototype = {
  constructor: Pr,
  scale: function(t11) {
    return t11 === 1 ? this : new Pr(this.k * t11, this.x, this.y);
  },
  translate: function(t11, e) {
    return t11 === 0 & e === 0 ? this : new Pr(this.k, this.x + this.k * t11, this.y + this.k * e);
  },
  apply: function(t11) {
    return [t11[0] * this.k + this.x, t11[1] * this.k + this.y];
  },
  applyX: function(t11) {
    return t11 * this.k + this.x;
  },
  applyY: function(t11) {
    return t11 * this.k + this.y;
  },
  invert: function(t11) {
    return [(t11[0] - this.x) / this.k, (t11[1] - this.y) / this.k];
  },
  invertX: function(t11) {
    return (t11 - this.x) / this.k;
  },
  invertY: function(t11) {
    return (t11 - this.y) / this.k;
  },
  rescaleX: function(t11) {
    return t11.copy().domain(t11.range().map(this.invertX, this).map(t11.invert, t11));
  },
  rescaleY: function(t11) {
    return t11.copy().domain(t11.range().map(this.invertY, this).map(t11.invert, t11));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
new Pr(1, 0, 0);
Pr.prototype;
const Zu = 12;
function Dd(t11, e) {
  t11.each(function() {
    var r = wn(this), n = r.text().split(/(\s+|<br>)/).reverse(), a, i = [], s = 1.1, o = r.attr("y"), u = parseFloat(r.attr("dy")), l = r.text(null).append("tspan").attr("x", 0).attr("y", o).attr("dy", u + "em");
    for (let f = 0; f < n.length; f++)
      a = n[n.length - 1 - f], i.push(a), l.text(i.join(" ").trim()), (l.node().getComputedTextLength() > e || a === "<br>") && (i.pop(), l.text(i.join(" ").trim()), a === "<br>" ? i = [""] : i = [a], l = r.append("tspan").attr("x", 0).attr("y", o).attr("dy", s + "em").text(a));
  });
}
const Sd = function(t11, e, r) {
  t11.append("path").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + Cr(e.type)).attr(
    "d",
    `M0 ${e.height - 5} v${-e.height + 2 * 5} q0,-5 5,-5 h${e.width - 2 * 5} q5,0 5,5 v${e.height - 5} H0 Z`
  ), t11.append("line").attr("class", "node-line-" + r).attr("x1", 0).attr("y1", e.height).attr("x2", e.width).attr("y2", e.height);
}, Ld = function(t11, e) {
  t11.append("rect").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + Cr(e.type)).attr("height", e.height).attr("width", e.width);
}, Ad = function(t11, e) {
  const r = e.width, n = e.height, a = 0.15 * r, i = 0.25 * r, s = 0.35 * r, o = 0.2 * r;
  t11.append("path").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + Cr(e.type)).attr(
    "d",
    `M0 0 a${a},${a} 0 0,1 ${r * 0.25},${-1 * r * 0.1}
      a${s},${s} 1 0,1 ${r * 0.4},${-1 * r * 0.1}
      a${i},${i} 1 0,1 ${r * 0.35},${1 * r * 0.2}

      a${a},${a} 1 0,1 ${r * 0.15},${1 * n * 0.35}
      a${o},${o} 1 0,1 ${-1 * r * 0.15},${1 * n * 0.65}

      a${i},${a} 1 0,1 ${-1 * r * 0.25},${r * 0.15}
      a${s},${s} 1 0,1 ${-1 * r * 0.5},${0}
      a${a},${a} 1 0,1 ${-1 * r * 0.25},${-1 * r * 0.15}

      a${a},${a} 1 0,1 ${-1 * r * 0.1},${-1 * n * 0.35}
      a${o},${o} 1 0,1 ${r * 0.1},${-1 * n * 0.65}

    H0 V0 Z`
  );
}, Nd = function(t11, e) {
  const r = e.width, n = e.height, a = 0.15 * r;
  t11.append("path").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + Cr(e.type)).attr(
    "d",
    `M0 0 a${a},${a} 1 0,0 ${r * 0.25},${-1 * n * 0.1}
      a${a},${a} 1 0,0 ${r * 0.25},${0}
      a${a},${a} 1 0,0 ${r * 0.25},${0}
      a${a},${a} 1 0,0 ${r * 0.25},${1 * n * 0.1}

      a${a},${a} 1 0,0 ${r * 0.15},${1 * n * 0.33}
      a${a * 0.8},${a * 0.8} 1 0,0 ${0},${1 * n * 0.34}
      a${a},${a} 1 0,0 ${-1 * r * 0.15},${1 * n * 0.33}

      a${a},${a} 1 0,0 ${-1 * r * 0.25},${n * 0.15}
      a${a},${a} 1 0,0 ${-1 * r * 0.25},${0}
      a${a},${a} 1 0,0 ${-1 * r * 0.25},${0}
      a${a},${a} 1 0,0 ${-1 * r * 0.25},${-1 * n * 0.15}

      a${a},${a} 1 0,0 ${-1 * r * 0.1},${-1 * n * 0.33}
      a${a * 0.8},${a * 0.8} 1 0,0 ${0},${-1 * n * 0.34}
      a${a},${a} 1 0,0 ${r * 0.1},${-1 * n * 0.33}

    H0 V0 Z`
  );
}, Md = function(t11, e) {
  t11.append("circle").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + Cr(e.type)).attr("r", e.width / 2);
};
function Od(t11, e, r, n, a) {
  return t11.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("transform", "translate(" + (a.width - e) / 2 + ", " + r + ")");
}
const Id = function(t11, e) {
  const r = e.height, a = r / 4, i = e.width - e.padding + 2 * a, s = [
    { x: a, y: 0 },
    { x: i - a, y: 0 },
    { x: i, y: -r / 2 },
    { x: i - a, y: -r },
    { x: a, y: -r },
    { x: 0, y: -r / 2 }
  ];
  Od(t11, i, r, s, e);
}, kd = function(t11, e) {
  t11.append("rect").attr("id", "node-" + e.id).attr("class", "node-bkg node-" + Cr(e.type)).attr("height", e.height).attr("rx", e.padding).attr("ry", e.padding).attr("width", e.width);
}, Rd = function(t11, e, r, n) {
  const a = r % Zu - 1, i = t11.append("g");
  e.section = a, i.attr(
    "class",
    (e.class ? e.class + " " : "") + "mindmap-node " + (a < 0 ? "section-root" : "section-" + a)
  );
  const s = i.append("g"), o = i.append("g"), l = o.append("text").text(e.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(Dd, e.width).node().getBBox(), f = n.fontSize.replace ? n.fontSize.replace("px", "") : n.fontSize;
  if (e.height = l.height + f * 1.1 * 0.5 + e.padding, e.width = l.width + 2 * e.padding, e.icon)
    if (e.type === Ie.CIRCLE)
      e.height += 50, e.width += 50, i.append("foreignObject").attr("height", "50px").attr("width", e.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + a + " " + e.icon), o.attr(
        "transform",
        "translate(" + e.width / 2 + ", " + (e.height / 2 - 1.5 * e.padding) + ")"
      );
    else {
      e.width += 50;
      const c = e.height;
      e.height = Math.max(c, 60);
      const v = Math.abs(e.height - c);
      i.append("foreignObject").attr("width", "60px").attr("height", e.height).attr("style", "text-align: center;margin-top:" + v / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + a + " " + e.icon), o.attr(
        "transform",
        "translate(" + (25 + e.width / 2) + ", " + (v / 2 + e.padding / 2) + ")"
      );
    }
  else
    o.attr("transform", "translate(" + e.width / 2 + ", " + e.padding / 2 + ")");
  switch (e.type) {
    case Ie.DEFAULT:
      Sd(s, e, a);
      break;
    case Ie.ROUNDED_RECT:
      kd(s, e);
      break;
    case Ie.RECT:
      Ld(s, e);
      break;
    case Ie.CIRCLE:
      s.attr("transform", "translate(" + e.width / 2 + ", " + +e.height / 2 + ")"), Md(s, e);
      break;
    case Ie.CLOUD:
      Ad(s, e);
      break;
    case Ie.BANG:
      Nd(s, e);
      break;
    case Ie.HEXAGON:
      Id(s, e);
      break;
  }
  return xu(e.id, i), e.height;
}, Pd = function(e, r, n, a, i) {
  const s = i % Zu - 1, o = n.x + n.width / 2, u = n.y + n.height / 2, l = r.x + r.width / 2, f = r.y + r.height / 2, c = l > o ? o + Math.abs(o - l) / 2 : o - Math.abs(o - l) / 2, v = f > u ? u + Math.abs(u - f) / 2 : u - Math.abs(u - f) / 2, h = l > o ? Math.abs(o - c) / 2 + o : -Math.abs(o - c) / 2 + o, d = f > u ? Math.abs(u - v) / 2 + u : -Math.abs(u - v) / 2 + u;
  e.append("path").attr(
    "d",
    n.direction === "TB" || n.direction === "BT" ? `M${o},${u} Q${o},${d} ${c},${v} T${l},${f}` : `M${o},${u} Q${h},${u} ${c},${v} T${l},${f}`
  ).attr("class", "edge section-edge-" + s + " edge-depth-" + a);
}, Bd = function(t11) {
  const e = rs(t11.id), r = t11.x || 0, n = t11.y || 0;
  e.attr("transform", "translate(" + r + "," + n + ")");
}, Qu = { drawNode: Rd, positionNode: Bd, drawEdge: Pd };
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fd(t11) {
  return t11 && t11.__esModule && Object.prototype.hasOwnProperty.call(t11, "default") ? t11.default : t11;
}
function _d(t11) {
  var e = typeof t11;
  return t11 != null && (e == "object" || e == "function");
}
var Hn = _d, $d = typeof jt == "object" && jt && jt.Object === Object && jt, Gd = $d, zd = Gd, Hd = typeof self == "object" && self && self.Object === Object && self, Vd = zd || Hd || Function("return this")(), Za = Vd, Yd = Za, Ud = function() {
  return Yd.Date.now();
}, Xd = Ud, qd = /\s/;
function Wd(t11) {
  for (var e = t11.length; e-- && qd.test(t11.charAt(e)); )
    ;
  return e;
}
var Kd = Wd, Zd = Kd, Qd = /^\s+/;
function Jd(t11) {
  return t11 && t11.slice(0, Zd(t11) + 1).replace(Qd, "");
}
var jd = Jd, eg = Za, tg = eg.Symbol, ls = tg, eo = ls, Ju = Object.prototype, rg = Ju.hasOwnProperty, ng = Ju.toString, ln = eo ? eo.toStringTag : void 0;
function ag(t11) {
  var e = rg.call(t11, ln), r = t11[ln];
  try {
    t11[ln] = void 0;
    var n = true;
  } catch {
  }
  var a = ng.call(t11);
  return n && (e ? t11[ln] = r : delete t11[ln]), a;
}
var ig = ag, sg = Object.prototype, og = sg.toString;
function ug(t11) {
  return og.call(t11);
}
var lg = ug, to = ls, fg = ig, cg = lg, hg = "[object Null]", vg = "[object Undefined]", ro = to ? to.toStringTag : void 0;
function dg(t11) {
  return t11 == null ? t11 === void 0 ? vg : hg : ro && ro in Object(t11) ? fg(t11) : cg(t11);
}
var ju = dg;
function gg(t11) {
  return t11 != null && typeof t11 == "object";
}
var pg = gg, yg = ju, mg = pg, bg = "[object Symbol]";
function wg(t11) {
  return typeof t11 == "symbol" || mg(t11) && yg(t11) == bg;
}
var Vn = wg, Eg = jd, no = Hn, xg = Vn, ao = 0 / 0, Tg = /^[-+]0x[0-9a-f]+$/i, Cg = /^0b[01]+$/i, Dg = /^0o[0-7]+$/i, Sg = parseInt;
function Lg(t11) {
  if (typeof t11 == "number")
    return t11;
  if (xg(t11))
    return ao;
  if (no(t11)) {
    var e = typeof t11.valueOf == "function" ? t11.valueOf() : t11;
    t11 = no(e) ? e + "" : e;
  }
  if (typeof t11 != "string")
    return t11 === 0 ? t11 : +t11;
  t11 = Eg(t11);
  var r = Cg.test(t11);
  return r || Dg.test(t11) ? Sg(t11.slice(2), r ? 2 : 8) : Tg.test(t11) ? ao : +t11;
}
var Ag = Lg, Ng = Hn, bi = Xd, io = Ag, Mg = "Expected a function", Og = Math.max, Ig = Math.min;
function kg(t11, e, r) {
  var n, a, i, s, o, u, l = 0, f = false, c = false, v = true;
  if (typeof t11 != "function")
    throw new TypeError(Mg);
  e = io(e) || 0, Ng(r) && (f = !!r.leading, c = "maxWait" in r, i = c ? Og(io(r.maxWait) || 0, e) : i, v = "trailing" in r ? !!r.trailing : v);
  function h(D) {
    var w = n, T = a;
    return n = a = void 0, l = D, s = t11.apply(T, w), s;
  }
  function d(D) {
    return l = D, o = setTimeout(p, e), f ? h(D) : s;
  }
  function g(D) {
    var w = D - u, T = D - l, x = e - w;
    return c ? Ig(x, i - T) : x;
  }
  function b(D) {
    var w = D - u, T = D - l;
    return u === void 0 || w >= e || w < 0 || c && T >= i;
  }
  function p() {
    var D = bi();
    if (b(D))
      return m(D);
    o = setTimeout(p, g(D));
  }
  function m(D) {
    return o = void 0, v && n ? h(D) : (n = a = void 0, s);
  }
  function y() {
    o !== void 0 && clearTimeout(o), l = 0, n = u = a = o = void 0;
  }
  function E() {
    return o === void 0 ? s : m(bi());
  }
  function C() {
    var D = bi(), w = b(D);
    if (n = arguments, a = this, u = D, w) {
      if (o === void 0)
        return d(u);
      if (c)
        return clearTimeout(o), o = setTimeout(p, e), h(u);
    }
    return o === void 0 && (o = setTimeout(p, e)), s;
  }
  return C.cancel = y, C.flush = E, C;
}
var Rg = kg, el = { exports: {} }, tl = { exports: {} };
(function(t11, e) {
  (function() {
    var r, n, a, i, s, o, u, l, f, c, v, h, d, g, b;
    a = Math.floor, c = Math.min, n = function(p, m) {
      return p < m ? -1 : p > m ? 1 : 0;
    }, f = function(p, m, y, E, C) {
      var D;
      if (y == null && (y = 0), C == null && (C = n), y < 0)
        throw new Error("lo must be non-negative");
      for (E == null && (E = p.length); y < E; )
        D = a((y + E) / 2), C(m, p[D]) < 0 ? E = D : y = D + 1;
      return [].splice.apply(p, [y, y - y].concat(m)), m;
    }, o = function(p, m, y) {
      return y == null && (y = n), p.push(m), g(p, 0, p.length - 1, y);
    }, s = function(p, m) {
      var y, E;
      return m == null && (m = n), y = p.pop(), p.length ? (E = p[0], p[0] = y, b(p, 0, m)) : E = y, E;
    }, l = function(p, m, y) {
      var E;
      return y == null && (y = n), E = p[0], p[0] = m, b(p, 0, y), E;
    }, u = function(p, m, y) {
      var E;
      return y == null && (y = n), p.length && y(p[0], m) < 0 && (E = [p[0], m], m = E[0], p[0] = E[1], b(p, 0, y)), m;
    }, i = function(p, m) {
      var y, E, C, D, w, T;
      for (m == null && (m = n), D = function() {
        T = [];
        for (var x = 0, S = a(p.length / 2); 0 <= S ? x < S : x > S; 0 <= S ? x++ : x--)
          T.push(x);
        return T;
      }.apply(this).reverse(), w = [], E = 0, C = D.length; E < C; E++)
        y = D[E], w.push(b(p, y, m));
      return w;
    }, d = function(p, m, y) {
      var E;
      if (y == null && (y = n), E = p.indexOf(m), E !== -1)
        return g(p, 0, E, y), b(p, E, y);
    }, v = function(p, m, y) {
      var E, C, D, w, T;
      if (y == null && (y = n), C = p.slice(0, m), !C.length)
        return C;
      for (i(C, y), T = p.slice(m), D = 0, w = T.length; D < w; D++)
        E = T[D], u(C, E, y);
      return C.sort(y).reverse();
    }, h = function(p, m, y) {
      var E, C, D, w, T, x, S, L, A;
      if (y == null && (y = n), m * 10 <= p.length) {
        if (D = p.slice(0, m).sort(y), !D.length)
          return D;
        for (C = D[D.length - 1], S = p.slice(m), w = 0, x = S.length; w < x; w++)
          E = S[w], y(E, C) < 0 && (f(D, E, 0, null, y), D.pop(), C = D[D.length - 1]);
        return D;
      }
      for (i(p, y), A = [], T = 0, L = c(m, p.length); 0 <= L ? T < L : T > L; 0 <= L ? ++T : --T)
        A.push(s(p, y));
      return A;
    }, g = function(p, m, y, E) {
      var C, D, w;
      for (E == null && (E = n), C = p[y]; y > m; ) {
        if (w = y - 1 >> 1, D = p[w], E(C, D) < 0) {
          p[y] = D, y = w;
          continue;
        }
        break;
      }
      return p[y] = C;
    }, b = function(p, m, y) {
      var E, C, D, w, T;
      for (y == null && (y = n), C = p.length, T = m, D = p[m], E = 2 * m + 1; E < C; )
        w = E + 1, w < C && !(y(p[E], p[w]) < 0) && (E = w), p[m] = p[E], m = E, E = 2 * m + 1;
      return p[m] = D, g(p, T, m, y);
    }, r = function() {
      p.push = o, p.pop = s, p.replace = l, p.pushpop = u, p.heapify = i, p.updateItem = d, p.nlargest = v, p.nsmallest = h;
      function p(m) {
        this.cmp = m != null ? m : n, this.nodes = [];
      }
      return p.prototype.push = function(m) {
        return o(this.nodes, m, this.cmp);
      }, p.prototype.pop = function() {
        return s(this.nodes, this.cmp);
      }, p.prototype.peek = function() {
        return this.nodes[0];
      }, p.prototype.contains = function(m) {
        return this.nodes.indexOf(m) !== -1;
      }, p.prototype.replace = function(m) {
        return l(this.nodes, m, this.cmp);
      }, p.prototype.pushpop = function(m) {
        return u(this.nodes, m, this.cmp);
      }, p.prototype.heapify = function() {
        return i(this.nodes, this.cmp);
      }, p.prototype.updateItem = function(m) {
        return d(this.nodes, m, this.cmp);
      }, p.prototype.clear = function() {
        return this.nodes = [];
      }, p.prototype.empty = function() {
        return this.nodes.length === 0;
      }, p.prototype.size = function() {
        return this.nodes.length;
      }, p.prototype.clone = function() {
        var m;
        return m = new p(), m.nodes = this.nodes.slice(0), m;
      }, p.prototype.toArray = function() {
        return this.nodes.slice(0);
      }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
    }(), function(p, m) {
      return t11.exports = m();
    }(this, function() {
      return r;
    });
  }).call(jt);
})(tl);
(function(t11) {
  t11.exports = tl.exports;
})(el);
var Pg = Array.isArray, Qa = Pg, Bg = Qa, Fg = Vn, _g = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $g = /^\w*$/;
function Gg(t11, e) {
  if (Bg(t11))
    return false;
  var r = typeof t11;
  return r == "number" || r == "symbol" || r == "boolean" || t11 == null || Fg(t11) ? true : $g.test(t11) || !_g.test(t11) || e != null && t11 in Object(e);
}
var zg = Gg, Hg = ju, Vg = Hn, Yg = "[object AsyncFunction]", Ug = "[object Function]", Xg = "[object GeneratorFunction]", qg = "[object Proxy]";
function Wg(t11) {
  if (!Vg(t11))
    return false;
  var e = Hg(t11);
  return e == Ug || e == Xg || e == Yg || e == qg;
}
var Kg = Wg, Zg = Za, Qg = Zg["__core-js_shared__"], Jg = Qg, wi = Jg, so = function() {
  var t11 = /[^.]+$/.exec(wi && wi.keys && wi.keys.IE_PROTO || "");
  return t11 ? "Symbol(src)_1." + t11 : "";
}();
function jg(t11) {
  return !!so && so in t11;
}
var ep = jg, tp = Function.prototype, rp = tp.toString;
function np(t11) {
  if (t11 != null) {
    try {
      return rp.call(t11);
    } catch {
    }
    try {
      return t11 + "";
    } catch {
    }
  }
  return "";
}
var ap = np, ip = Kg, sp = ep, op = Hn, up = ap, lp = /[\\^$.*+?()[\]{}|]/g, fp = /^\[object .+?Constructor\]$/, cp = Function.prototype, hp = Object.prototype, vp = cp.toString, dp = hp.hasOwnProperty, gp = RegExp(
  "^" + vp.call(dp).replace(lp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pp(t11) {
  if (!op(t11) || sp(t11))
    return false;
  var e = ip(t11) ? gp : fp;
  return e.test(up(t11));
}
var yp = pp;
function mp(t11, e) {
  return t11 == null ? void 0 : t11[e];
}
var bp = mp, wp = yp, Ep = bp;
function xp(t11, e) {
  var r = Ep(t11, e);
  return wp(r) ? r : void 0;
}
var fs = xp, Tp = fs, Cp = Tp(Object, "create"), Ja = Cp, oo = Ja;
function Dp() {
  this.__data__ = oo ? oo(null) : {}, this.size = 0;
}
var Sp = Dp;
function Lp(t11) {
  var e = this.has(t11) && delete this.__data__[t11];
  return this.size -= e ? 1 : 0, e;
}
var Ap = Lp, Np = Ja, Mp = "__lodash_hash_undefined__", Op = Object.prototype, Ip = Op.hasOwnProperty;
function kp(t11) {
  var e = this.__data__;
  if (Np) {
    var r = e[t11];
    return r === Mp ? void 0 : r;
  }
  return Ip.call(e, t11) ? e[t11] : void 0;
}
var Rp = kp, Pp = Ja, Bp = Object.prototype, Fp = Bp.hasOwnProperty;
function _p(t11) {
  var e = this.__data__;
  return Pp ? e[t11] !== void 0 : Fp.call(e, t11);
}
var $p = _p, Gp = Ja, zp = "__lodash_hash_undefined__";
function Hp(t11, e) {
  var r = this.__data__;
  return this.size += this.has(t11) ? 0 : 1, r[t11] = Gp && e === void 0 ? zp : e, this;
}
var Vp = Hp, Yp = Sp, Up = Ap, Xp = Rp, qp = $p, Wp = Vp;
function Kr(t11) {
  var e = -1, r = t11 == null ? 0 : t11.length;
  for (this.clear(); ++e < r; ) {
    var n = t11[e];
    this.set(n[0], n[1]);
  }
}
Kr.prototype.clear = Yp;
Kr.prototype.delete = Up;
Kr.prototype.get = Xp;
Kr.prototype.has = qp;
Kr.prototype.set = Wp;
var Kp = Kr;
function Zp() {
  this.__data__ = [], this.size = 0;
}
var Qp = Zp;
function Jp(t11, e) {
  return t11 === e || t11 !== t11 && e !== e;
}
var rl = Jp, jp = rl;
function ey(t11, e) {
  for (var r = t11.length; r--; )
    if (jp(t11[r][0], e))
      return r;
  return -1;
}
var ja = ey, ty = ja, ry = Array.prototype, ny = ry.splice;
function ay(t11) {
  var e = this.__data__, r = ty(e, t11);
  if (r < 0)
    return false;
  var n = e.length - 1;
  return r == n ? e.pop() : ny.call(e, r, 1), --this.size, true;
}
var iy = ay, sy = ja;
function oy(t11) {
  var e = this.__data__, r = sy(e, t11);
  return r < 0 ? void 0 : e[r][1];
}
var uy = oy, ly = ja;
function fy(t11) {
  return ly(this.__data__, t11) > -1;
}
var cy = fy, hy = ja;
function vy(t11, e) {
  var r = this.__data__, n = hy(r, t11);
  return n < 0 ? (++this.size, r.push([t11, e])) : r[n][1] = e, this;
}
var dy = vy, gy = Qp, py = iy, yy = uy, my = cy, by = dy;
function Zr(t11) {
  var e = -1, r = t11 == null ? 0 : t11.length;
  for (this.clear(); ++e < r; ) {
    var n = t11[e];
    this.set(n[0], n[1]);
  }
}
Zr.prototype.clear = gy;
Zr.prototype.delete = py;
Zr.prototype.get = yy;
Zr.prototype.has = my;
Zr.prototype.set = by;
var wy = Zr, Ey = fs, xy = Za, Ty = Ey(xy, "Map"), Cy = Ty, uo = Kp, Dy = wy, Sy = Cy;
function Ly() {
  this.size = 0, this.__data__ = {
    hash: new uo(),
    map: new (Sy || Dy)(),
    string: new uo()
  };
}
var Ay = Ly;
function Ny(t11) {
  var e = typeof t11;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t11 !== "__proto__" : t11 === null;
}
var My = Ny, Oy = My;
function Iy(t11, e) {
  var r = t11.__data__;
  return Oy(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
var ei = Iy, ky = ei;
function Ry(t11) {
  var e = ky(this, t11).delete(t11);
  return this.size -= e ? 1 : 0, e;
}
var Py = Ry, By = ei;
function Fy(t11) {
  return By(this, t11).get(t11);
}
var _y = Fy, $y = ei;
function Gy(t11) {
  return $y(this, t11).has(t11);
}
var zy = Gy, Hy = ei;
function Vy(t11, e) {
  var r = Hy(this, t11), n = r.size;
  return r.set(t11, e), this.size += r.size == n ? 0 : 1, this;
}
var Yy = Vy, Uy = Ay, Xy = Py, qy = _y, Wy = zy, Ky = Yy;
function Qr(t11) {
  var e = -1, r = t11 == null ? 0 : t11.length;
  for (this.clear(); ++e < r; ) {
    var n = t11[e];
    this.set(n[0], n[1]);
  }
}
Qr.prototype.clear = Uy;
Qr.prototype.delete = Xy;
Qr.prototype.get = qy;
Qr.prototype.has = Wy;
Qr.prototype.set = Ky;
var Zy = Qr, nl = Zy, Qy = "Expected a function";
function cs(t11, e) {
  if (typeof t11 != "function" || e != null && typeof e != "function")
    throw new TypeError(Qy);
  var r = function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var s = t11.apply(this, n);
    return r.cache = i.set(a, s) || i, s;
  };
  return r.cache = new (cs.Cache || nl)(), r;
}
cs.Cache = nl;
var Jy = cs, jy = Jy, e0 = 500;
function t0(t11) {
  var e = jy(t11, function(n) {
    return r.size === e0 && r.clear(), n;
  }), r = e.cache;
  return e;
}
var r0 = t0, n0 = r0, a0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i0 = /\\(\\)?/g, s0 = n0(function(t11) {
  var e = [];
  return t11.charCodeAt(0) === 46 && e.push(""), t11.replace(a0, function(r, n, a, i) {
    e.push(a ? i.replace(i0, "$1") : n || r);
  }), e;
}), al = s0;
function o0(t11, e) {
  for (var r = -1, n = t11 == null ? 0 : t11.length, a = Array(n); ++r < n; )
    a[r] = e(t11[r], r, t11);
  return a;
}
var il = o0, lo = ls, u0 = il, l0 = Qa, f0 = Vn, c0 = 1 / 0, fo = lo ? lo.prototype : void 0, co = fo ? fo.toString : void 0;
function sl(t11) {
  if (typeof t11 == "string")
    return t11;
  if (l0(t11))
    return u0(t11, sl) + "";
  if (f0(t11))
    return co ? co.call(t11) : "";
  var e = t11 + "";
  return e == "0" && 1 / t11 == -c0 ? "-0" : e;
}
var h0 = sl, v0 = h0;
function d0(t11) {
  return t11 == null ? "" : v0(t11);
}
var ol = d0, g0 = Qa, p0 = zg, y0 = al, m0 = ol;
function b0(t11, e) {
  return g0(t11) ? t11 : p0(t11, e) ? [t11] : y0(m0(t11));
}
var ul = b0, w0 = Vn, E0 = 1 / 0;
function x0(t11) {
  if (typeof t11 == "string" || w0(t11))
    return t11;
  var e = t11 + "";
  return e == "0" && 1 / t11 == -E0 ? "-0" : e;
}
var hs = x0, T0 = ul, C0 = hs;
function D0(t11, e) {
  e = T0(e, t11);
  for (var r = 0, n = e.length; t11 != null && r < n; )
    t11 = t11[C0(e[r++])];
  return r && r == n ? t11 : void 0;
}
var S0 = D0, L0 = S0;
function A0(t11, e, r) {
  var n = t11 == null ? void 0 : L0(t11, e);
  return n === void 0 ? r : n;
}
var N0 = A0, M0 = fs, O0 = function() {
  try {
    var t11 = M0(Object, "defineProperty");
    return t11({}, "", {}), t11;
  } catch {
  }
}(), I0 = O0, ho = I0;
function k0(t11, e, r) {
  e == "__proto__" && ho ? ho(t11, e, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : t11[e] = r;
}
var R0 = k0, P0 = R0, B0 = rl, F0 = Object.prototype, _0 = F0.hasOwnProperty;
function $0(t11, e, r) {
  var n = t11[e];
  (!(_0.call(t11, e) && B0(n, r)) || r === void 0 && !(e in t11)) && P0(t11, e, r);
}
var G0 = $0, z0 = 9007199254740991, H0 = /^(?:0|[1-9]\d*)$/;
function V0(t11, e) {
  var r = typeof t11;
  return e = e == null ? z0 : e, !!e && (r == "number" || r != "symbol" && H0.test(t11)) && t11 > -1 && t11 % 1 == 0 && t11 < e;
}
var Y0 = V0, U0 = G0, X0 = ul, q0 = Y0, vo = Hn, W0 = hs;
function K0(t11, e, r, n) {
  if (!vo(t11))
    return t11;
  e = X0(e, t11);
  for (var a = -1, i = e.length, s = i - 1, o = t11; o != null && ++a < i; ) {
    var u = W0(e[a]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t11;
    if (a != s) {
      var f = o[u];
      l = n ? n(f, u, o) : void 0, l === void 0 && (l = vo(f) ? f : q0(e[a + 1]) ? [] : {});
    }
    U0(o, u, l), o = o[u];
  }
  return t11;
}
var Z0 = K0, Q0 = Z0;
function J0(t11, e, r) {
  return t11 == null ? t11 : Q0(t11, e, r);
}
var j0 = J0;
function em(t11, e) {
  var r = -1, n = t11.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t11[r];
  return e;
}
var tm = em, rm = il, nm = tm, am = Qa, im = Vn, sm = al, om = hs, um = ol;
function lm(t11) {
  return am(t11) ? rm(t11, om) : im(t11) ? [t11] : nm(sm(um(t11)));
}
var fm = lm, cm = Rg, hm = el.exports, vm = N0, dm = j0, gm = fm;
function Yn(t11) {
  return t11 && typeof t11 == "object" && "default" in t11 ? t11 : { default: t11 };
}
var ti = /* @__PURE__ */ Yn(cm), Un = /* @__PURE__ */ Yn(hm), pm = /* @__PURE__ */ Yn(vm), ym = /* @__PURE__ */ Yn(dm), mm = /* @__PURE__ */ Yn(gm);
function Ve(t11) {
  return Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ve(t11);
}
function vs(t11, e) {
  if (!(t11 instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function go(t11, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t11, n.key, n);
  }
}
function ds(t11, e, r) {
  return e && go(t11.prototype, e), r && go(t11, r), Object.defineProperty(t11, "prototype", {
    writable: false
  }), t11;
}
function ll(t11, e, r) {
  return e in t11 ? Object.defineProperty(t11, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t11[e] = r, t11;
}
function Gt(t11, e) {
  return bm(t11) || wm(t11, e) || Em(t11, e) || xm();
}
function bm(t11) {
  if (Array.isArray(t11))
    return t11;
}
function wm(t11, e) {
  var r = t11 == null ? null : typeof Symbol < "u" && t11[Symbol.iterator] || t11["@@iterator"];
  if (r != null) {
    var n = [], a = true, i = false, s, o;
    try {
      for (r = r.call(t11); !(a = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); a = true)
        ;
    } catch (u) {
      i = true, o = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw o;
      }
    }
    return n;
  }
}
function Em(t11, e) {
  if (!!t11) {
    if (typeof t11 == "string")
      return po(t11, e);
    var r = Object.prototype.toString.call(t11).slice(8, -1);
    if (r === "Object" && t11.constructor && (r = t11.constructor.name), r === "Map" || r === "Set")
      return Array.from(t11);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return po(t11, e);
  }
}
function po(t11, e) {
  (e == null || e > t11.length) && (e = t11.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t11[r];
  return n;
}
function xm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Fe = typeof window > "u" ? null : window, yo = Fe ? Fe.navigator : null;
Fe && Fe.document;
var Tm = Ve(""), fl = Ve({}), Cm = Ve(function() {
}), Dm = typeof HTMLElement > "u" ? "undefined" : Ve(HTMLElement), Xn = function(e) {
  return e && e.instanceString && _e(e.instanceString) ? e.instanceString() : null;
}, le = function(e) {
  return e != null && Ve(e) == Tm;
}, _e = function(e) {
  return e != null && Ve(e) === Cm;
}, ke = function(e) {
  return !dt(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, Ce = function(e) {
  return e != null && Ve(e) === fl && !ke(e) && e.constructor === Object;
}, Sm = function(e) {
  return e != null && Ve(e) === fl;
}, ne = function(e) {
  return e != null && Ve(e) === Ve(1) && !isNaN(e);
}, Lm = function(e) {
  return ne(e) && Math.floor(e) === e;
}, _a = function(e) {
  if (Dm !== "undefined")
    return e != null && e instanceof HTMLElement;
}, dt = function(e) {
  return qn(e) || cl(e);
}, qn = function(e) {
  return Xn(e) === "collection" && e._private.single;
}, cl = function(e) {
  return Xn(e) === "collection" && !e._private.single;
}, gs = function(e) {
  return Xn(e) === "core";
}, hl = function(e) {
  return Xn(e) === "stylesheet";
}, Am = function(e) {
  return Xn(e) === "event";
}, nr = function(e) {
  return e == null ? true : !!(e === "" || e.match(/^\s+$/));
}, Nm = function(e) {
  return typeof HTMLElement > "u" ? false : e instanceof HTMLElement;
}, Mm = function(e) {
  return Ce(e) && ne(e.x1) && ne(e.x2) && ne(e.y1) && ne(e.y2);
}, Om = function(e) {
  return Sm(e) && _e(e.then);
}, Im = function() {
  return yo && yo.userAgent.match(/msie|trident|edge/i);
}, Mn = function(e, r) {
  r || (r = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var i = [], s = 0; s < arguments.length; s++)
      i.push(arguments[s]);
    return i.join("$");
  });
  var n = function a() {
    var i = this, s = arguments, o, u = r.apply(i, s), l = a.cache;
    return (o = l[u]) || (o = l[u] = e.apply(i, s)), o;
  };
  return n.cache = {}, n;
}, ps = Mn(function(t11) {
  return t11.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), ri = Mn(function(t11) {
  return t11.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), vl = Mn(function(t11, e) {
  return t11 + e[0].toUpperCase() + e.substring(1);
}, function(t11, e) {
  return t11 + "$" + e;
}), mo = function(e) {
  return nr(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, He = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", km = "rgb[a]?\\((" + He + "[%]?)\\s*,\\s*(" + He + "[%]?)\\s*,\\s*(" + He + "[%]?)(?:\\s*,\\s*(" + He + "))?\\)", Rm = "rgb[a]?\\((?:" + He + "[%]?)\\s*,\\s*(?:" + He + "[%]?)\\s*,\\s*(?:" + He + "[%]?)(?:\\s*,\\s*(?:" + He + "))?\\)", Pm = "hsl[a]?\\((" + He + ")\\s*,\\s*(" + He + "[%])\\s*,\\s*(" + He + "[%])(?:\\s*,\\s*(" + He + "))?\\)", Bm = "hsl[a]?\\((?:" + He + ")\\s*,\\s*(?:" + He + "[%])\\s*,\\s*(?:" + He + "[%])(?:\\s*,\\s*(?:" + He + "))?\\)", Fm = "\\#[0-9a-fA-F]{3}", _m = "\\#[0-9a-fA-F]{6}", dl = function(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}, $m = function(e, r) {
  return -1 * dl(e, r);
}, he = Object.assign != null ? Object.assign.bind(Object) : function(t11) {
  for (var e = arguments, r = 1; r < e.length; r++) {
    var n = e[r];
    if (n != null)
      for (var a = Object.keys(n), i = 0; i < a.length; i++) {
        var s = a[i];
        t11[s] = n[s];
      }
  }
  return t11;
}, Gm = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var r = e.length === 4, n, a, i, s = 16;
    return r ? (n = parseInt(e[1] + e[1], s), a = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (n = parseInt(e[1] + e[2], s), a = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [n, a, i];
  }
}, zm = function(e) {
  var r, n, a, i, s, o, u, l;
  function f(d, g, b) {
    return b < 0 && (b += 1), b > 1 && (b -= 1), b < 1 / 6 ? d + (g - d) * 6 * b : b < 1 / 2 ? g : b < 2 / 3 ? d + (g - d) * (2 / 3 - b) * 6 : d;
  }
  var c = new RegExp("^" + Pm + "$").exec(e);
  if (c) {
    if (n = parseInt(c[1]), n < 0 ? n = (360 - -1 * n % 360) % 360 : n > 360 && (n = n % 360), n /= 360, a = parseFloat(c[2]), a < 0 || a > 100 || (a = a / 100, i = parseFloat(c[3]), i < 0 || i > 100) || (i = i / 100, s = c[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
      return;
    if (a === 0)
      o = u = l = Math.round(i * 255);
    else {
      var v = i < 0.5 ? i * (1 + a) : i + a - i * a, h = 2 * i - v;
      o = Math.round(255 * f(h, v, n + 1 / 3)), u = Math.round(255 * f(h, v, n)), l = Math.round(255 * f(h, v, n - 1 / 3));
    }
    r = [o, u, l, s];
  }
  return r;
}, Hm = function(e) {
  var r, n = new RegExp("^" + km + "$").exec(e);
  if (n) {
    r = [];
    for (var a = [], i = 1; i <= 3; i++) {
      var s = n[i];
      if (s[s.length - 1] === "%" && (a[i] = true), s = parseFloat(s), a[i] && (s = s / 100 * 255), s < 0 || s > 255)
        return;
      r.push(Math.floor(s));
    }
    var o = a[1] || a[2] || a[3], u = a[1] && a[2] && a[3];
    if (o && !u)
      return;
    var l = n[4];
    if (l !== void 0) {
      if (l = parseFloat(l), l < 0 || l > 1)
        return;
      r.push(l);
    }
  }
  return r;
}, Vm = function(e) {
  return Um[e.toLowerCase()];
}, Ym = function(e) {
  return (ke(e) ? e : null) || Vm(e) || Gm(e) || Hm(e) || zm(e);
}, Um = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, gl = function(e) {
  for (var r = e.map, n = e.keys, a = n.length, i = 0; i < a; i++) {
    var s = n[i];
    if (Ce(s))
      throw Error("Tried to set map with object key");
    i < n.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
  }
}, pl = function(e) {
  for (var r = e.map, n = e.keys, a = n.length, i = 0; i < a; i++) {
    var s = n[i];
    if (Ce(s))
      throw Error("Tried to get map with object key");
    if (r = r[s], r == null)
      return r;
  }
  return r;
}, Ei = Fe ? Fe.performance : null, yl = Ei && Ei.now ? function() {
  return Ei.now();
} : function() {
  return Date.now();
}, Xm = function() {
  if (Fe) {
    if (Fe.requestAnimationFrame)
      return function(t11) {
        Fe.requestAnimationFrame(t11);
      };
    if (Fe.mozRequestAnimationFrame)
      return function(t11) {
        Fe.mozRequestAnimationFrame(t11);
      };
    if (Fe.webkitRequestAnimationFrame)
      return function(t11) {
        Fe.webkitRequestAnimationFrame(t11);
      };
    if (Fe.msRequestAnimationFrame)
      return function(t11) {
        Fe.msRequestAnimationFrame(t11);
      };
  }
  return function(t11) {
    t11 && setTimeout(function() {
      t11(yl());
    }, 1e3 / 60);
  };
}(), $a = function(e) {
  return Xm(e);
}, Ht = yl, Br = 9261, ml = 65599, pn = 5381, bl = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Br, n = r, a; a = e.next(), !a.done; )
    n = n * ml + a.value | 0;
  return n;
}, On = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Br;
  return r * ml + e | 0;
}, In = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pn;
  return (r << 5) + r + e | 0;
}, qm = function(e, r) {
  return e * 2097152 + r;
}, Wt = function(e) {
  return e[0] * 2097152 + e[1];
}, sa = function(e, r) {
  return [On(e[0], r[0]), In(e[1], r[1])];
}, Wm = function(e, r) {
  var n = {
    value: 0,
    done: false
  }, a = 0, i = e.length, s = {
    next: function() {
      return a < i ? n.value = e[a++] : n.done = true, n;
    }
  };
  return bl(s, r);
}, mr = function(e, r) {
  var n = {
    value: 0,
    done: false
  }, a = 0, i = e.length, s = {
    next: function() {
      return a < i ? n.value = e.charCodeAt(a++) : n.done = true, n;
    }
  };
  return bl(s, r);
}, wl = function() {
  return Km(arguments);
}, Km = function(e) {
  for (var r, n = 0; n < e.length; n++) {
    var a = e[n];
    n === 0 ? r = mr(a) : r = mr(a, r);
  }
  return r;
}, bo = true, Zm = console.warn != null, Qm = console.trace != null, ys = Number.MAX_SAFE_INTEGER || 9007199254740991, El = function() {
  return true;
}, Ga = function() {
  return false;
}, wo = function() {
  return 0;
}, ms = function() {
}, Ge = function(e) {
  throw new Error(e);
}, xl = function(e) {
  if (e !== void 0)
    bo = !!e;
  else
    return bo;
}, Ne = function(e) {
  !xl() || (Zm ? console.warn(e) : (console.log(e), Qm && console.trace()));
}, Jm = function(e) {
  return he({}, e);
}, Ot = function(e) {
  return e == null ? e : ke(e) ? e.slice() : Ce(e) ? Jm(e) : e;
}, jm = function(e) {
  return e.slice();
}, Tl = function(e, r) {
  for (r = e = ""; e++ < 36; r += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-")
    ;
  return r;
}, e1 = {}, Cl = function() {
  return e1;
}, Qe = function(e) {
  var r = Object.keys(e);
  return function(n) {
    for (var a = {}, i = 0; i < r.length; i++) {
      var s = r[i], o = n == null ? void 0 : n[s];
      a[s] = o === void 0 ? e[s] : o;
    }
    return a;
  };
}, ar = function(e, r, n) {
  for (var a = e.length - 1; a >= 0 && !(e[a] === r && (e.splice(a, 1), n)); a--)
    ;
}, bs = function(e) {
  e.splice(0, e.length);
}, t1 = function(e, r) {
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    e.push(a);
  }
}, St = function(e, r, n) {
  return n && (r = vl(n, r)), e[r];
}, Jt = function(e, r, n, a) {
  n && (r = vl(n, r)), e[r] = a;
}, r1 = /* @__PURE__ */ function() {
  function t11() {
    vs(this, t11), this._obj = {};
  }
  return ds(t11, [{
    key: "set",
    value: function(r, n) {
      return this._obj[r] = n, this;
    }
  }, {
    key: "delete",
    value: function(r) {
      return this._obj[r] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] !== void 0;
    }
  }, {
    key: "get",
    value: function(r) {
      return this._obj[r];
    }
  }]), t11;
}(), It = typeof Map < "u" ? Map : r1, n1 = "undefined", a1 = /* @__PURE__ */ function() {
  function t11(e) {
    if (vs(this, t11), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var r;
      e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
      for (var n = 0; n < r.length; n++)
        this.add(r[n]);
    }
  }
  return ds(t11, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(r) {
      var n = this._obj;
      n[r] !== 1 && (n[r] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = this._obj;
      n[r] === 1 && (n[r] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(r) {
      return this._obj[r] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var r = this;
      return Object.keys(this._obj).filter(function(n) {
        return r.has(n);
      });
    }
  }, {
    key: "forEach",
    value: function(r, n) {
      return this.toArray().forEach(r, n);
    }
  }]), t11;
}(), Jr = (typeof Set > "u" ? "undefined" : Ve(Set)) !== n1 ? Set : a1, ni = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (e === void 0 || r === void 0 || !gs(e)) {
    Ge("An element must have a core reference and parameters set");
    return;
  }
  var a = r.group;
  if (a == null && (r.data && r.data.source != null && r.data.target != null ? a = "edges" : a = "nodes"), a !== "nodes" && a !== "edges") {
    Ge("An element must be of type `nodes` or `edges`; you specified `" + a + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i = this._private = {
    cy: e,
    single: true,
    data: r.data || {},
    position: r.position || {
      x: 0,
      y: 0
    },
    autoWidth: void 0,
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: false,
    listeners: [],
    group: a,
    style: {},
    rstyle: {},
    styleCxts: [],
    styleKeys: {},
    removed: true,
    selected: !!r.selected,
    selectable: r.selectable === void 0 ? true : !!r.selectable,
    locked: !!r.locked,
    grabbed: false,
    grabbable: r.grabbable === void 0 ? true : !!r.grabbable,
    pannable: r.pannable === void 0 ? a === "edges" : !!r.pannable,
    active: false,
    classes: new Jr(),
    animation: {
      current: [],
      queue: []
    },
    rscratch: {},
    scratch: r.scratch || {},
    edges: [],
    children: [],
    parent: r.parent && r.parent.isNode() ? r.parent : null,
    traversalCache: {},
    backgrounding: false,
    bbCache: null,
    bbCacheShift: {
      x: 0,
      y: 0
    },
    bodyBounds: null,
    overlayBounds: null,
    labelBounds: {
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
    var s = r.renderedPosition, o = e.pan(), u = e.zoom();
    i.position = {
      x: (s.x - o.x) / u,
      y: (s.y - o.y) / u
    };
  }
  var l = [];
  ke(r.classes) ? l = r.classes : le(r.classes) && (l = r.classes.split(/\s+/));
  for (var f = 0, c = l.length; f < c; f++) {
    var v = l[f];
    !v || v === "" || i.classes.add(v);
  }
  this.createEmitter();
  var h = r.style || r.css;
  h && (Ne("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h)), (n === void 0 || n) && this.restore();
}, Eo = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(n, a, i) {
    var s;
    Ce(n) && !dt(n) && (s = n, n = s.roots || s.root, a = s.visit, i = s.directed), i = arguments.length === 2 && !_e(a) ? a : i, a = _e(a) ? a : function() {
    };
    for (var o = this._private.cy, u = n = le(n) ? this.filter(n) : n, l = [], f = [], c = {}, v = {}, h = {}, d = 0, g, b = this.byGroup(), p = b.nodes, m = b.edges, y = 0; y < u.length; y++) {
      var E = u[y], C = E.id();
      E.isNode() && (l.unshift(E), e.bfs && (h[C] = true, f.push(E)), v[C] = 0);
    }
    for (var D = function() {
      var O = e.bfs ? l.shift() : l.pop(), N = O.id();
      if (e.dfs) {
        if (h[N])
          return "continue";
        h[N] = true, f.push(O);
      }
      var R = v[N], I = c[N], k = I != null ? I.source() : null, P = I != null ? I.target() : null, B = I == null ? void 0 : O.same(k) ? P[0] : k[0], _ = void 0;
      if (_ = a(O, I, B, d++, R), _ === true)
        return g = O, "break";
      if (_ === false)
        return "break";
      for (var F = O.connectedEdges().filter(function(Y) {
        return (!i || Y.source().same(O)) && m.has(Y);
      }), G = 0; G < F.length; G++) {
        var z = F[G], V = z.connectedNodes().filter(function(Y) {
          return !Y.same(O) && p.has(Y);
        }), U = V.id();
        V.length !== 0 && !h[U] && (V = V[0], l.push(V), e.bfs && (h[U] = true, f.push(V)), c[U] = z, v[U] = v[N] + 1);
      }
    }; l.length !== 0; ) {
      var w = D();
      if (w !== "continue" && w === "break")
        break;
    }
    for (var T = o.collection(), x = 0; x < f.length; x++) {
      var S = f[x], L = c[S.id()];
      L != null && T.push(L), T.push(S);
    }
    return {
      path: o.collection(T),
      found: o.collection(g)
    };
  };
}, kn = {
  breadthFirstSearch: Eo({
    bfs: true
  }),
  depthFirstSearch: Eo({
    dfs: true
  })
};
kn.bfs = kn.breadthFirstSearch;
kn.dfs = kn.depthFirstSearch;
var i1 = Qe({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: false
}), s1 = {
  dijkstra: function(e) {
    if (!Ce(e)) {
      var r = arguments;
      e = {
        root: r[0],
        weight: r[1],
        directed: r[2]
      };
    }
    var n = i1(e), a = n.root, i = n.weight, s = n.directed, o = this, u = i, l = le(a) ? this.filter(a)[0] : a[0], f = {}, c = {}, v = {}, h = this.byGroup(), d = h.nodes, g = h.edges;
    g.unmergeBy(function(R) {
      return R.isLoop();
    });
    for (var b = function(I) {
      return f[I.id()];
    }, p = function(I, k) {
      f[I.id()] = k, m.updateItem(I);
    }, m = new Un.default(function(R, I) {
      return b(R) - b(I);
    }), y = 0; y < d.length; y++) {
      var E = d[y];
      f[E.id()] = E.same(l) ? 0 : 1 / 0, m.push(E);
    }
    for (var C = function(I, k) {
      for (var P = (s ? I.edgesTo(k) : I.edgesWith(k)).intersect(g), B = 1 / 0, _, F = 0; F < P.length; F++) {
        var G = P[F], z = u(G);
        (z < B || !_) && (B = z, _ = G);
      }
      return {
        edge: _,
        dist: B
      };
    }; m.size() > 0; ) {
      var D = m.pop(), w = b(D), T = D.id();
      if (v[T] = w, w !== 1 / 0)
        for (var x = D.neighborhood().intersect(d), S = 0; S < x.length; S++) {
          var L = x[S], A = L.id(), O = C(D, L), N = w + O.dist;
          N < b(L) && (p(L, N), c[A] = {
            node: D,
            edge: O.edge
          });
        }
    }
    return {
      distanceTo: function(I) {
        var k = le(I) ? d.filter(I)[0] : I[0];
        return v[k.id()];
      },
      pathTo: function(I) {
        var k = le(I) ? d.filter(I)[0] : I[0], P = [], B = k, _ = B.id();
        if (k.length > 0)
          for (P.unshift(k); c[_]; ) {
            var F = c[_];
            P.unshift(F.edge), P.unshift(F.node), B = F.node, _ = B.id();
          }
        return o.spawn(P);
      }
    };
  }
}, o1 = {
  kruskal: function(e) {
    e = e || function(y) {
      return 1;
    };
    for (var r = this.byGroup(), n = r.nodes, a = r.edges, i = n.length, s = new Array(i), o = n, u = function(E) {
      for (var C = 0; C < s.length; C++) {
        var D = s[C];
        if (D.has(E))
          return C;
      }
    }, l = 0; l < i; l++)
      s[l] = this.spawn(n[l]);
    for (var f = a.sort(function(y, E) {
      return e(y) - e(E);
    }), c = 0; c < f.length; c++) {
      var v = f[c], h = v.source()[0], d = v.target()[0], g = u(h), b = u(d), p = s[g], m = s[b];
      g !== b && (o.merge(v), p.merge(m), s.splice(b, 1));
    }
    return o;
  }
}, u1 = Qe({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: false
}), l1 = {
  aStar: function(e) {
    var r = this.cy(), n = u1(e), a = n.root, i = n.goal, s = n.heuristic, o = n.directed, u = n.weight;
    a = r.collection(a)[0], i = r.collection(i)[0];
    var l = a.id(), f = i.id(), c = {}, v = {}, h = {}, d = new Un.default(function(_, F) {
      return v[_.id()] - v[F.id()];
    }), g = new Jr(), b = {}, p = {}, m = function(F, G) {
      d.push(F), g.add(G);
    }, y, E, C = function() {
      y = d.pop(), E = y.id(), g.delete(E);
    }, D = function(F) {
      return g.has(F);
    };
    m(a, l), c[l] = 0, v[l] = s(a);
    for (var w = 0; d.size() > 0; ) {
      if (C(), w++, E === f) {
        for (var T = [], x = i, S = f, L = p[S]; T.unshift(x), L != null && T.unshift(L), x = b[S], x != null; )
          S = x.id(), L = p[S];
        return {
          found: true,
          distance: c[E],
          path: this.spawn(T),
          steps: w
        };
      }
      h[E] = true;
      for (var A = y._private.edges, O = 0; O < A.length; O++) {
        var N = A[O];
        if (!!this.hasElementWithId(N.id()) && !(o && N.data("source") !== E)) {
          var R = N.source(), I = N.target(), k = R.id() !== E ? R : I, P = k.id();
          if (!!this.hasElementWithId(P) && !h[P]) {
            var B = c[E] + u(N);
            if (!D(P)) {
              c[P] = B, v[P] = B + s(k), m(k, P), b[P] = y, p[P] = N;
              continue;
            }
            B < c[P] && (c[P] = B, v[P] = B + s(k), b[P] = y, p[P] = N);
          }
        }
      }
    }
    return {
      found: false,
      distance: void 0,
      path: void 0,
      steps: w
    };
  }
}, f1 = Qe({
  weight: function(e) {
    return 1;
  },
  directed: false
}), c1 = {
  floydWarshall: function(e) {
    for (var r = this.cy(), n = f1(e), a = n.weight, i = n.directed, s = a, o = this.byGroup(), u = o.nodes, l = o.edges, f = u.length, c = f * f, v = function(z) {
      return u.indexOf(z);
    }, h = function(z) {
      return u[z];
    }, d = new Array(c), g = 0; g < c; g++) {
      var b = g % f, p = (g - b) / f;
      p === b ? d[g] = 0 : d[g] = 1 / 0;
    }
    for (var m = new Array(c), y = new Array(c), E = 0; E < l.length; E++) {
      var C = l[E], D = C.source()[0], w = C.target()[0];
      if (D !== w) {
        var T = v(D), x = v(w), S = T * f + x, L = s(C);
        if (d[S] > L && (d[S] = L, m[S] = x, y[S] = C), !i) {
          var A = x * f + T;
          !i && d[A] > L && (d[A] = L, m[A] = T, y[A] = C);
        }
      }
    }
    for (var O = 0; O < f; O++)
      for (var N = 0; N < f; N++)
        for (var R = N * f + O, I = 0; I < f; I++) {
          var k = N * f + I, P = O * f + I;
          d[R] + d[P] < d[k] && (d[k] = d[R] + d[P], m[k] = m[R]);
        }
    var B = function(z) {
      return (le(z) ? r.filter(z) : z)[0];
    }, _ = function(z) {
      return v(B(z));
    }, F = {
      distance: function(z, V) {
        var U = _(z), Y = _(V);
        return d[U * f + Y];
      },
      path: function(z, V) {
        var U = _(z), Y = _(V), $ = h(U);
        if (U === Y)
          return $.collection();
        if (m[U * f + Y] == null)
          return r.collection();
        var X = r.collection(), K = U, Z;
        for (X.merge($); U !== Y; )
          K = U, U = m[U * f + Y], Z = y[K * f + U], X.merge(Z), X.merge(h(U));
        return X;
      }
    };
    return F;
  }
}, h1 = Qe({
  weight: function(e) {
    return 1;
  },
  directed: false,
  root: null
}), v1 = {
  bellmanFord: function(e) {
    var r = this, n = h1(e), a = n.weight, i = n.directed, s = n.root, o = a, u = this, l = this.cy(), f = this.byGroup(), c = f.edges, v = f.nodes, h = v.length, d = new It(), g = false, b = [];
    s = l.collection(s)[0], c.unmergeBy(function(se) {
      return se.isLoop();
    });
    for (var p = c.length, m = function(ae) {
      var ue = d.get(ae.id());
      return ue || (ue = {}, d.set(ae.id(), ue)), ue;
    }, y = function(ae) {
      return (le(ae) ? l.$(ae) : ae)[0];
    }, E = function(ae) {
      return m(y(ae)).dist;
    }, C = function(ae) {
      for (var ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, Ee = y(ae), ge = [], ce = Ee; ; ) {
        if (ce == null)
          return r.spawn();
        var J = m(ce), M = J.edge, H = J.pred;
        if (ge.unshift(ce[0]), ce.same(ue) && ge.length > 0)
          break;
        M != null && ge.unshift(M), ce = H;
      }
      return u.spawn(ge);
    }, D = 0; D < h; D++) {
      var w = v[D], T = m(w);
      w.same(s) ? T.dist = 0 : T.dist = 1 / 0, T.pred = null, T.edge = null;
    }
    for (var x = false, S = function(ae, ue, Ee, ge, ce, J) {
      var M = ge.dist + J;
      M < ce.dist && !Ee.same(ge.edge) && (ce.dist = M, ce.pred = ae, ce.edge = Ee, x = true);
    }, L = 1; L < h; L++) {
      x = false;
      for (var A = 0; A < p; A++) {
        var O = c[A], N = O.source(), R = O.target(), I = o(O), k = m(N), P = m(R);
        S(N, R, O, k, P, I), i || S(R, N, O, P, k, I);
      }
      if (!x)
        break;
    }
    if (x)
      for (var B = [], _ = 0; _ < p; _++) {
        var F = c[_], G = F.source(), z = F.target(), V = o(F), U = m(G).dist, Y = m(z).dist;
        if (U + V < Y || !i && Y + V < U)
          if (g || (Ne("Graph contains a negative weight cycle for Bellman-Ford"), g = true), e.findNegativeWeightCycles !== false) {
            var $ = [];
            U + V < Y && $.push(G), !i && Y + V < U && $.push(z);
            for (var X = $.length, K = 0; K < X; K++) {
              var Z = $[K], te = [Z];
              te.push(m(Z).edge);
              for (var ve = m(Z).pred; te.indexOf(ve) === -1; )
                te.push(ve), te.push(m(ve).edge), ve = m(ve).pred;
              te = te.slice(te.indexOf(ve));
              for (var de = te[0].id(), re = 0, ee = 2; ee < te.length; ee += 2)
                te[ee].id() < de && (de = te[ee].id(), re = ee);
              te = te.slice(re).concat(te.slice(0, re)), te.push(te[0]);
              var fe = te.map(function(se) {
                return se.id();
              }).join(",");
              B.indexOf(fe) === -1 && (b.push(u.spawn(te)), B.push(fe));
            }
          } else
            break;
      }
    return {
      distanceTo: E,
      pathTo: C,
      hasNegativeWeightCycle: g,
      negativeWeightCycles: b
    };
  }
}, d1 = Math.sqrt(2), g1 = function(e, r, n) {
  n.length === 0 && Ge("Karger-Stein must be run on a connected (sub)graph");
  for (var a = n[e], i = a[1], s = a[2], o = r[i], u = r[s], l = n, f = l.length - 1; f >= 0; f--) {
    var c = l[f], v = c[1], h = c[2];
    (r[v] === o && r[h] === u || r[v] === u && r[h] === o) && l.splice(f, 1);
  }
  for (var d = 0; d < l.length; d++) {
    var g = l[d];
    g[1] === u ? (l[d] = g.slice(), l[d][1] = o) : g[2] === u && (l[d] = g.slice(), l[d][2] = o);
  }
  for (var b = 0; b < r.length; b++)
    r[b] === u && (r[b] = o);
  return l;
}, xi = function(e, r, n, a) {
  for (; n > a; ) {
    var i = Math.floor(Math.random() * r.length);
    r = g1(i, e, r), n--;
  }
  return r;
}, p1 = {
  kargerStein: function() {
    var e = this, r = this.byGroup(), n = r.nodes, a = r.edges;
    a.unmergeBy(function(P) {
      return P.isLoop();
    });
    var i = n.length, s = a.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / d1);
    if (i < 2) {
      Ge("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var l = [], f = 0; f < s; f++) {
      var c = a[f];
      l.push([f, n.indexOf(c.source()), n.indexOf(c.target())]);
    }
    for (var v = 1 / 0, h = [], d = new Array(i), g = new Array(i), b = new Array(i), p = function(B, _) {
      for (var F = 0; F < i; F++)
        _[F] = B[F];
    }, m = 0; m <= o; m++) {
      for (var y = 0; y < i; y++)
        g[y] = y;
      var E = xi(g, l.slice(), i, u), C = E.slice();
      p(g, b);
      var D = xi(g, E, u, 2), w = xi(b, C, u, 2);
      D.length <= w.length && D.length < v ? (v = D.length, h = D, p(g, d)) : w.length <= D.length && w.length < v && (v = w.length, h = w, p(b, d));
    }
    for (var T = this.spawn(h.map(function(P) {
      return a[P[0]];
    })), x = this.spawn(), S = this.spawn(), L = d[0], A = 0; A < d.length; A++) {
      var O = d[A], N = n[A];
      O === L ? x.merge(N) : S.merge(N);
    }
    var R = function(B) {
      var _ = e.spawn();
      return B.forEach(function(F) {
        _.merge(F), F.connectedEdges().forEach(function(G) {
          e.contains(G) && !T.contains(G) && _.merge(G);
        });
      }), _;
    }, I = [R(x), R(S)], k = {
      cut: T,
      components: I,
      partition1: x,
      partition2: S
    };
    return k;
  }
}, y1 = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, ai = function(e, r, n) {
  return {
    x: e.x * r + n.x,
    y: e.y * r + n.y
  };
}, Dl = function(e, r, n) {
  return {
    x: (e.x - n.x) / r,
    y: (e.y - n.y) / r
  };
}, Fr = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, m1 = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = 1 / 0, i = r; i < n; i++) {
    var s = e[i];
    isFinite(s) && (a = Math.min(s, a));
  }
  return a;
}, b1 = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = -1 / 0, i = r; i < n; i++) {
    var s = e[i];
    isFinite(s) && (a = Math.max(s, a));
  }
  return a;
}, w1 = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = 0, i = 0, s = r; s < n; s++) {
    var o = e[s];
    isFinite(o) && (a += o, i++);
  }
  return a / i;
}, E1 = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true;
  a ? e = e.slice(r, n) : (n < e.length && e.splice(n, e.length - n), r > 0 && e.splice(0, r));
  for (var o = 0, u = e.length - 1; u >= 0; u--) {
    var l = e[u];
    s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
  }
  i && e.sort(function(v, h) {
    return v - h;
  });
  var f = e.length, c = Math.floor(f / 2);
  return f % 2 !== 0 ? e[c + 1 + o] : (e[c - 1 + o] + e[c + o]) / 2;
}, x1 = function(e) {
  return Math.PI * e / 180;
}, oa = function(e, r) {
  return Math.atan2(r, e) - Math.PI / 2;
}, ws = Math.log2 || function(t11) {
  return Math.log(t11) / Math.log(2);
}, Sl = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, br = function(e, r) {
  return Math.sqrt(hr(e, r));
}, hr = function(e, r) {
  var n = r.x - e.x, a = r.y - e.y;
  return n * n + a * a;
}, T1 = function(e) {
  for (var r = e.length, n = 0, a = 0; a < r; a++)
    n += e[a];
  for (var i = 0; i < r; i++)
    e[i] = e[i] / n;
  return e;
}, Ue = function(e, r, n, a) {
  return (1 - a) * (1 - a) * e + 2 * (1 - a) * a * r + a * a * n;
}, Gr = function(e, r, n, a) {
  return {
    x: Ue(e.x, r.x, n.x, a),
    y: Ue(e.y, r.y, n.y, a)
  };
}, C1 = function(e, r, n, a) {
  var i = {
    x: r.x - e.x,
    y: r.y - e.y
  }, s = br(e, r), o = {
    x: i.x / s,
    y: i.y / s
  };
  return n = n == null ? 0 : n, a = a != null ? a : n * s, {
    x: e.x + o.x * a,
    y: e.y + o.y * a
  };
}, Rn = function(e, r, n) {
  return Math.max(e, Math.min(n, r));
}, ht = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
}, D1 = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, S1 = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, L1 = function(e, r) {
  e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
}, A1 = function(e, r, n) {
  e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, n), e.y2 = Math.max(e.y2, n), e.h = e.y2 - e.y1;
}, xa = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, Ti = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], n, a, i, s;
  if (r.length === 1)
    n = a = i = s = r[0];
  else if (r.length === 2)
    n = i = r[0], s = a = r[1];
  else if (r.length === 4) {
    var o = Gt(r, 4);
    n = o[0], a = o[1], i = o[2], s = o[3];
  }
  return e.x1 -= s, e.x2 += a, e.y1 -= n, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, xo = function(e, r) {
  e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, Es = function(e, r) {
  return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
}, Xr = function(e, r, n) {
  return e.x1 <= r && r <= e.x2 && e.y1 <= n && n <= e.y2;
}, N1 = function(e, r) {
  return Xr(e, r.x, r.y);
}, Ll = function(e, r) {
  return Xr(e, r.x1, r.y1) && Xr(e, r.x2, r.y2);
}, Al = function(e, r, n, a, i, s, o) {
  var u = Wn(i, s), l = i / 2, f = s / 2, c;
  {
    var v = n - l + u - o, h = a - f - o, d = n + l - u + o, g = h;
    if (c = er(e, r, n, a, v, h, d, g, false), c.length > 0)
      return c;
  }
  {
    var b = n + l + o, p = a - f + u - o, m = b, y = a + f - u + o;
    if (c = er(e, r, n, a, b, p, m, y, false), c.length > 0)
      return c;
  }
  {
    var E = n - l + u - o, C = a + f + o, D = n + l - u + o, w = C;
    if (c = er(e, r, n, a, E, C, D, w, false), c.length > 0)
      return c;
  }
  {
    var T = n - l - o, x = a - f + u - o, S = T, L = a + f - u + o;
    if (c = er(e, r, n, a, T, x, S, L, false), c.length > 0)
      return c;
  }
  var A;
  {
    var O = n - l + u, N = a - f + u;
    if (A = yn(e, r, n, a, O, N, u + o), A.length > 0 && A[0] <= O && A[1] <= N)
      return [A[0], A[1]];
  }
  {
    var R = n + l - u, I = a - f + u;
    if (A = yn(e, r, n, a, R, I, u + o), A.length > 0 && A[0] >= R && A[1] <= I)
      return [A[0], A[1]];
  }
  {
    var k = n + l - u, P = a + f - u;
    if (A = yn(e, r, n, a, k, P, u + o), A.length > 0 && A[0] >= k && A[1] >= P)
      return [A[0], A[1]];
  }
  {
    var B = n - l + u, _ = a + f - u;
    if (A = yn(e, r, n, a, B, _, u + o), A.length > 0 && A[0] <= B && A[1] >= _)
      return [A[0], A[1]];
  }
  return [];
}, M1 = function(e, r, n, a, i, s, o) {
  var u = o, l = Math.min(n, i), f = Math.max(n, i), c = Math.min(a, s), v = Math.max(a, s);
  return l - u <= e && e <= f + u && c - u <= r && r <= v + u;
}, O1 = function(e, r, n, a, i, s, o, u, l) {
  var f = {
    x1: Math.min(n, o, i) - l,
    x2: Math.max(n, o, i) + l,
    y1: Math.min(a, u, s) - l,
    y2: Math.max(a, u, s) + l
  };
  return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
}, I1 = function(e, r, n, a) {
  n -= a;
  var i = r * r - 4 * e * n;
  if (i < 0)
    return [];
  var s = Math.sqrt(i), o = 2 * e, u = (-r + s) / o, l = (-r - s) / o;
  return [u, l];
}, k1 = function(e, r, n, a, i) {
  var s = 1e-5;
  e === 0 && (e = s), r /= e, n /= e, a /= e;
  var o, u, l, f, c, v, h, d;
  if (u = (3 * n - r * r) / 9, l = -(27 * a) + r * (9 * n - 2 * (r * r)), l /= 54, o = u * u * u + l * l, i[1] = 0, h = r / 3, o > 0) {
    c = l + Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), v = l - Math.sqrt(o), v = v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3), i[0] = -h + c + v, h += (c + v) / 2, i[4] = i[2] = -h, h = Math.sqrt(3) * (-v + c) / 2, i[3] = h, i[5] = -h;
    return;
  }
  if (i[5] = i[3] = 0, o === 0) {
    d = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -h + 2 * d, i[4] = i[2] = -(d + h);
    return;
  }
  u = -u, f = u * u * u, f = Math.acos(l / Math.sqrt(f)), d = 2 * Math.sqrt(u), i[0] = -h + d * Math.cos(f / 3), i[2] = -h + d * Math.cos((f + 2 * Math.PI) / 3), i[4] = -h + d * Math.cos((f + 4 * Math.PI) / 3);
}, R1 = function(e, r, n, a, i, s, o, u) {
  var l = 1 * n * n - 4 * n * i + 2 * n * o + 4 * i * i - 4 * i * o + o * o + a * a - 4 * a * s + 2 * a * u + 4 * s * s - 4 * s * u + u * u, f = 1 * 9 * n * i - 3 * n * n - 3 * n * o - 6 * i * i + 3 * i * o + 9 * a * s - 3 * a * a - 3 * a * u - 6 * s * s + 3 * s * u, c = 1 * 3 * n * n - 6 * n * i + n * o - n * e + 2 * i * i + 2 * i * e - o * e + 3 * a * a - 6 * a * s + a * u - a * r + 2 * s * s + 2 * s * r - u * r, v = 1 * n * i - n * n + n * e - i * e + a * s - a * a + a * r - s * r, h = [];
  k1(l, f, c, v, h);
  for (var d = 1e-7, g = [], b = 0; b < 6; b += 2)
    Math.abs(h[b + 1]) < d && h[b] >= 0 && h[b] <= 1 && g.push(h[b]);
  g.push(1), g.push(0);
  for (var p = -1, m, y, E, C = 0; C < g.length; C++)
    m = Math.pow(1 - g[C], 2) * n + 2 * (1 - g[C]) * g[C] * i + g[C] * g[C] * o, y = Math.pow(1 - g[C], 2) * a + 2 * (1 - g[C]) * g[C] * s + g[C] * g[C] * u, E = Math.pow(m - e, 2) + Math.pow(y - r, 2), p >= 0 ? E < p && (p = E) : p = E;
  return p;
}, P1 = function(e, r, n, a, i, s) {
  var o = [e - n, r - a], u = [i - n, s - a], l = u[0] * u[0] + u[1] * u[1], f = o[0] * o[0] + o[1] * o[1], c = o[0] * u[0] + o[1] * u[1], v = c * c / l;
  return c < 0 ? f : v > l ? (e - i) * (e - i) + (r - s) * (r - s) : f - v;
}, ft = function(e, r, n) {
  for (var a, i, s, o, u, l = 0, f = 0; f < n.length / 2; f++)
    if (a = n[f * 2], i = n[f * 2 + 1], f + 1 < n.length / 2 ? (s = n[(f + 1) * 2], o = n[(f + 1) * 2 + 1]) : (s = n[(f + 1 - n.length / 2) * 2], o = n[(f + 1 - n.length / 2) * 2 + 1]), !(a == e && s == e))
      if (a >= e && e >= s || a <= e && e <= s)
        u = (e - a) / (s - a) * (o - i) + i, u > r && l++;
      else
        continue;
  return l % 2 !== 0;
}, Vt = function(e, r, n, a, i, s, o, u, l) {
  var f = new Array(n.length), c;
  u[0] != null ? (c = Math.atan(u[1] / u[0]), u[0] < 0 ? c = c + Math.PI / 2 : c = -c - Math.PI / 2) : c = u;
  for (var v = Math.cos(-c), h = Math.sin(-c), d = 0; d < f.length / 2; d++)
    f[d * 2] = s / 2 * (n[d * 2] * v - n[d * 2 + 1] * h), f[d * 2 + 1] = o / 2 * (n[d * 2 + 1] * v + n[d * 2] * h), f[d * 2] += a, f[d * 2 + 1] += i;
  var g;
  if (l > 0) {
    var b = Ml(f, -l);
    g = Nl(b);
  } else
    g = f;
  return ft(e, r, g);
}, B1 = function(e, r, n, a, i, s, o) {
  for (var u = new Array(n.length), l = s / 2, f = o / 2, c = xs(s, o), v = c * c, h = 0; h < n.length / 4; h++) {
    var d = void 0, g = void 0;
    h === 0 ? d = n.length - 2 : d = h * 4 - 2, g = h * 4 + 2;
    var b = a + l * n[h * 4], p = i + f * n[h * 4 + 1], m = -n[d] * n[g] - n[d + 1] * n[g + 1], y = c / Math.tan(Math.acos(m) / 2), E = b - y * n[d], C = p - y * n[d + 1], D = b + y * n[g], w = p + y * n[g + 1];
    u[h * 4] = E, u[h * 4 + 1] = C, u[h * 4 + 2] = D, u[h * 4 + 3] = w;
    var T = n[d + 1], x = -n[d], S = T * n[g] + x * n[g + 1];
    S < 0 && (T *= -1, x *= -1);
    var L = E + T * c, A = C + x * c, O = Math.pow(L - e, 2) + Math.pow(A - r, 2);
    if (O <= v)
      return true;
  }
  return ft(e, r, u);
}, Nl = function(e) {
  for (var r = new Array(e.length / 2), n, a, i, s, o, u, l, f, c = 0; c < e.length / 4; c++) {
    n = e[c * 4], a = e[c * 4 + 1], i = e[c * 4 + 2], s = e[c * 4 + 3], c < e.length / 4 - 1 ? (o = e[(c + 1) * 4], u = e[(c + 1) * 4 + 1], l = e[(c + 1) * 4 + 2], f = e[(c + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], f = e[3]);
    var v = er(n, a, i, s, o, u, l, f, true);
    r[c * 2] = v[0], r[c * 2 + 1] = v[1];
  }
  return r;
}, Ml = function(e, r) {
  for (var n = new Array(e.length * 2), a, i, s, o, u = 0; u < e.length / 2; u++) {
    a = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
    var l = o - i, f = -(s - a), c = Math.sqrt(l * l + f * f), v = l / c, h = f / c;
    n[u * 4] = a + v * r, n[u * 4 + 1] = i + h * r, n[u * 4 + 2] = s + v * r, n[u * 4 + 3] = o + h * r;
  }
  return n;
}, F1 = function(e, r, n, a, i, s) {
  var o = n - e, u = a - r;
  o /= i, u /= s;
  var l = Math.sqrt(o * o + u * u), f = l - 1;
  if (f < 0)
    return [];
  var c = f / l;
  return [(n - e) * c + e, (a - r) * c + r];
}, gr = function(e, r, n, a, i, s, o) {
  return e -= i, r -= s, e /= n / 2 + o, r /= a / 2 + o, e * e + r * r <= 1;
}, yn = function(e, r, n, a, i, s, o) {
  var u = [n - e, a - r], l = [e - i, r - s], f = u[0] * u[0] + u[1] * u[1], c = 2 * (l[0] * u[0] + l[1] * u[1]), v = l[0] * l[0] + l[1] * l[1] - o * o, h = c * c - 4 * f * v;
  if (h < 0)
    return [];
  var d = (-c + Math.sqrt(h)) / (2 * f), g = (-c - Math.sqrt(h)) / (2 * f), b = Math.min(d, g), p = Math.max(d, g), m = [];
  if (b >= 0 && b <= 1 && m.push(b), p >= 0 && p <= 1 && m.push(p), m.length === 0)
    return [];
  var y = m[0] * u[0] + e, E = m[0] * u[1] + r;
  if (m.length > 1) {
    if (m[0] == m[1])
      return [y, E];
    var C = m[1] * u[0] + e, D = m[1] * u[1] + r;
    return [y, E, C, D];
  } else
    return [y, E];
}, Ci = function(e, r, n) {
  return r <= e && e <= n || n <= e && e <= r ? e : e <= r && r <= n || n <= r && r <= e ? r : n;
}, er = function(e, r, n, a, i, s, o, u, l) {
  var f = e - i, c = n - e, v = o - i, h = r - s, d = a - r, g = u - s, b = v * h - g * f, p = c * h - d * f, m = g * c - v * d;
  if (m !== 0) {
    var y = b / m, E = p / m, C = 1e-3, D = 0 - C, w = 1 + C;
    return D <= y && y <= w && D <= E && E <= w ? [e + y * c, r + y * d] : l ? [e + y * c, r + y * d] : [];
  } else
    return b === 0 || p === 0 ? Ci(e, n, o) === o ? [o, u] : Ci(e, n, i) === i ? [i, s] : Ci(i, o, n) === n ? [n, a] : [] : [];
}, Pn = function(e, r, n, a, i, s, o, u) {
  var l = [], f, c = new Array(n.length), v = true;
  s == null && (v = false);
  var h;
  if (v) {
    for (var d = 0; d < c.length / 2; d++)
      c[d * 2] = n[d * 2] * s + a, c[d * 2 + 1] = n[d * 2 + 1] * o + i;
    if (u > 0) {
      var g = Ml(c, -u);
      h = Nl(g);
    } else
      h = c;
  } else
    h = n;
  for (var b, p, m, y, E = 0; E < h.length / 2; E++)
    b = h[E * 2], p = h[E * 2 + 1], E < h.length / 2 - 1 ? (m = h[(E + 1) * 2], y = h[(E + 1) * 2 + 1]) : (m = h[0], y = h[1]), f = er(e, r, a, i, b, p, m, y), f.length !== 0 && l.push(f[0], f[1]);
  return l;
}, _1 = function(e, r, n, a, i, s, o, u) {
  for (var l = [], f, c = new Array(n.length), v = s / 2, h = o / 2, d = xs(s, o), g = 0; g < n.length / 4; g++) {
    var b = void 0, p = void 0;
    g === 0 ? b = n.length - 2 : b = g * 4 - 2, p = g * 4 + 2;
    var m = a + v * n[g * 4], y = i + h * n[g * 4 + 1], E = -n[b] * n[p] - n[b + 1] * n[p + 1], C = d / Math.tan(Math.acos(E) / 2), D = m - C * n[b], w = y - C * n[b + 1], T = m + C * n[p], x = y + C * n[p + 1];
    g === 0 ? (c[n.length - 2] = D, c[n.length - 1] = w) : (c[g * 4 - 2] = D, c[g * 4 - 1] = w), c[g * 4] = T, c[g * 4 + 1] = x;
    var S = n[b + 1], L = -n[b], A = S * n[p] + L * n[p + 1];
    A < 0 && (S *= -1, L *= -1);
    var O = D + S * d, N = w + L * d;
    f = yn(e, r, a, i, O, N, d), f.length !== 0 && l.push(f[0], f[1]);
  }
  for (var R = 0; R < c.length / 4; R++)
    f = er(e, r, a, i, c[R * 4], c[R * 4 + 1], c[R * 4 + 2], c[R * 4 + 3], false), f.length !== 0 && l.push(f[0], f[1]);
  if (l.length > 2) {
    for (var I = [l[0], l[1]], k = Math.pow(I[0] - e, 2) + Math.pow(I[1] - r, 2), P = 1; P < l.length / 2; P++) {
      var B = Math.pow(l[P * 2] - e, 2) + Math.pow(l[P * 2 + 1] - r, 2);
      B <= k && (I[0] = l[P * 2], I[1] = l[P * 2 + 1], k = B);
    }
    return I;
  }
  return l;
}, ua = function(e, r, n) {
  var a = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(a[0] * a[0] + a[1] * a[1]), s = (i - n) / i;
  return s < 0 && (s = 1e-5), [r[0] + s * a[0], r[1] + s * a[1]];
}, st = function(e, r) {
  var n = Hi(e, r);
  return n = Ol(n), n;
}, Ol = function(e) {
  for (var r, n, a = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < a; l++)
    r = e[2 * l], n = e[2 * l + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, n), u = Math.max(u, n);
  for (var f = 2 / (o - i), c = 2 / (u - s), v = 0; v < a; v++)
    r = e[2 * v] = e[2 * v] * f, n = e[2 * v + 1] = e[2 * v + 1] * c, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, n), u = Math.max(u, n);
  if (s < -1)
    for (var h = 0; h < a; h++)
      n = e[2 * h + 1] = e[2 * h + 1] + (-1 - s);
  return e;
}, Hi = function(e, r) {
  var n = 1 / e * 2 * Math.PI, a = e % 2 === 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
  a += r;
  for (var i = new Array(e * 2), s, o = 0; o < e; o++)
    s = o * n + a, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
  return i;
}, Wn = function(e, r) {
  return Math.min(e / 4, r / 4, 8);
}, xs = function(e, r) {
  return Math.min(e / 10, r / 10, 8);
}, Il = function() {
  return 8;
}, $1 = function(e, r, n) {
  return [e - 2 * r + n, 2 * (r - e), e];
}, Vi = function(e, r) {
  return {
    heightOffset: Math.min(15, 0.05 * r),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
}, G1 = Qe({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), z1 = {
  pageRank: function(e) {
    for (var r = G1(e), n = r.dampingFactor, a = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, f = u.edges, c = l.length, v = c * c, h = f.length, d = new Array(v), g = new Array(c), b = (1 - n) / c, p = 0; p < c; p++) {
      for (var m = 0; m < c; m++) {
        var y = p * c + m;
        d[y] = 0;
      }
      g[p] = 0;
    }
    for (var E = 0; E < h; E++) {
      var C = f[E], D = C.data("source"), w = C.data("target");
      if (D !== w) {
        var T = l.indexOfId(D), x = l.indexOfId(w), S = s(C), L = x * c + T;
        d[L] += S, g[T] += S;
      }
    }
    for (var A = 1 / c + b, O = 0; O < c; O++)
      if (g[O] === 0)
        for (var N = 0; N < c; N++) {
          var R = N * c + O;
          d[R] = A;
        }
      else
        for (var I = 0; I < c; I++) {
          var k = I * c + O;
          d[k] = d[k] / g[O] + b;
        }
    for (var P = new Array(c), B = new Array(c), _, F = 0; F < c; F++)
      P[F] = 1;
    for (var G = 0; G < i; G++) {
      for (var z = 0; z < c; z++)
        B[z] = 0;
      for (var V = 0; V < c; V++)
        for (var U = 0; U < c; U++) {
          var Y = V * c + U;
          B[V] += d[Y] * P[U];
        }
      T1(B), _ = P, P = B, B = _;
      for (var $ = 0, X = 0; X < c; X++) {
        var K = _[X] - P[X];
        $ += K * K;
      }
      if ($ < a)
        break;
    }
    var Z = {
      rank: function(ve) {
        return ve = o.collection(ve)[0], P[l.indexOf(ve)];
      }
    };
    return Z;
  }
}, To = Qe({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: false,
  alpha: 0
}), zr = {
  degreeCentralityNormalized: function(e) {
    e = To(e);
    var r = this.cy(), n = this.nodes(), a = n.length;
    if (e.directed) {
      for (var f = {}, c = {}, v = 0, h = 0, d = 0; d < a; d++) {
        var g = n[d], b = g.id();
        e.root = g;
        var p = this.degreeCentrality(e);
        v < p.indegree && (v = p.indegree), h < p.outdegree && (h = p.outdegree), f[b] = p.indegree, c[b] = p.outdegree;
      }
      return {
        indegree: function(y) {
          return v == 0 ? 0 : (le(y) && (y = r.filter(y)), f[y.id()] / v);
        },
        outdegree: function(y) {
          return h === 0 ? 0 : (le(y) && (y = r.filter(y)), c[y.id()] / h);
        }
      };
    } else {
      for (var i = {}, s = 0, o = 0; o < a; o++) {
        var u = n[o];
        e.root = u;
        var l = this.degreeCentrality(e);
        s < l.degree && (s = l.degree), i[u.id()] = l.degree;
      }
      return {
        degree: function(y) {
          return s === 0 ? 0 : (le(y) && (y = r.filter(y)), i[y.id()] / s);
        }
      };
    }
  },
  degreeCentrality: function(e) {
    e = To(e);
    var r = this.cy(), n = this, a = e, i = a.root, s = a.weight, o = a.directed, u = a.alpha;
    if (i = r.collection(i)[0], o) {
      for (var h = i.connectedEdges(), d = h.filter(function(D) {
        return D.target().same(i) && n.has(D);
      }), g = h.filter(function(D) {
        return D.source().same(i) && n.has(D);
      }), b = d.length, p = g.length, m = 0, y = 0, E = 0; E < d.length; E++)
        m += s(d[E]);
      for (var C = 0; C < g.length; C++)
        y += s(g[C]);
      return {
        indegree: Math.pow(b, 1 - u) * Math.pow(m, u),
        outdegree: Math.pow(p, 1 - u) * Math.pow(y, u)
      };
    } else {
      for (var l = i.connectedEdges().intersection(n), f = l.length, c = 0, v = 0; v < l.length; v++)
        c += s(l[v]);
      return {
        degree: Math.pow(f, 1 - u) * Math.pow(c, u)
      };
    }
  }
};
zr.dc = zr.degreeCentrality;
zr.dcn = zr.degreeCentralityNormalised = zr.degreeCentralityNormalized;
var Co = Qe({
  harmonic: true,
  weight: function() {
    return 1;
  },
  directed: false,
  root: null
}), Hr = {
  closenessCentralityNormalized: function(e) {
    for (var r = Co(e), n = r.harmonic, a = r.weight, i = r.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), f = this.floydWarshall({
      weight: a,
      directed: i
    }), c = 0; c < l.length; c++) {
      for (var v = 0, h = l[c], d = 0; d < l.length; d++)
        if (c !== d) {
          var g = f.distance(h, l[d]);
          n ? v += 1 / g : v += g;
        }
      n || (v = 1 / v), u < v && (u = v), o[h.id()] = v;
    }
    return {
      closeness: function(p) {
        return u == 0 ? 0 : (le(p) ? p = s.filter(p)[0].id() : p = p.id(), o[p] / u);
      }
    };
  },
  closenessCentrality: function(e) {
    var r = Co(e), n = r.root, a = r.weight, i = r.directed, s = r.harmonic;
    n = this.filter(n)[0];
    for (var o = this.dijkstra({
      root: n,
      weight: a,
      directed: i
    }), u = 0, l = this.nodes(), f = 0; f < l.length; f++) {
      var c = l[f];
      if (!c.same(n)) {
        var v = o.distanceTo(c);
        s ? u += 1 / v : u += v;
      }
    }
    return s ? u : 1 / u;
  }
};
Hr.cc = Hr.closenessCentrality;
Hr.ccn = Hr.closenessCentralityNormalised = Hr.closenessCentralityNormalized;
var H1 = Qe({
  weight: null,
  directed: false
}), Yi = {
  betweennessCentrality: function(e) {
    for (var r = H1(e), n = r.directed, a = r.weight, i = a != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, f = 0, c = {
      set: function(y, E) {
        l[y] = E, E > f && (f = E);
      },
      get: function(y) {
        return l[y];
      }
    }, v = 0; v < o.length; v++) {
      var h = o[v], d = h.id();
      n ? u[d] = h.outgoers().nodes() : u[d] = h.openNeighborhood().nodes(), c.set(d, 0);
    }
    for (var g = function(y) {
      for (var E = o[y].id(), C = [], D = {}, w = {}, T = {}, x = new Un.default(function(U, Y) {
        return T[U] - T[Y];
      }), S = 0; S < o.length; S++) {
        var L = o[S].id();
        D[L] = [], w[L] = 0, T[L] = 1 / 0;
      }
      for (w[E] = 1, T[E] = 0, x.push(E); !x.empty(); ) {
        var A = x.pop();
        if (C.push(A), i)
          for (var O = 0; O < u[A].length; O++) {
            var N = u[A][O], R = s.getElementById(A), I = void 0;
            R.edgesTo(N).length > 0 ? I = R.edgesTo(N)[0] : I = N.edgesTo(R)[0];
            var k = a(I);
            N = N.id(), T[N] > T[A] + k && (T[N] = T[A] + k, x.nodes.indexOf(N) < 0 ? x.push(N) : x.updateItem(N), w[N] = 0, D[N] = []), T[N] == T[A] + k && (w[N] = w[N] + w[A], D[N].push(A));
          }
        else
          for (var P = 0; P < u[A].length; P++) {
            var B = u[A][P].id();
            T[B] == 1 / 0 && (x.push(B), T[B] = T[A] + 1), T[B] == T[A] + 1 && (w[B] = w[B] + w[A], D[B].push(A));
          }
      }
      for (var _ = {}, F = 0; F < o.length; F++)
        _[o[F].id()] = 0;
      for (; C.length > 0; ) {
        for (var G = C.pop(), z = 0; z < D[G].length; z++) {
          var V = D[G][z];
          _[V] = _[V] + w[V] / w[G] * (1 + _[G]);
        }
        G != o[y].id() && c.set(G, c.get(G) + _[G]);
      }
    }, b = 0; b < o.length; b++)
      g(b);
    var p = {
      betweenness: function(y) {
        var E = s.collection(y).id();
        return c.get(E);
      },
      betweennessNormalized: function(y) {
        if (f == 0)
          return 0;
        var E = s.collection(y).id();
        return c.get(E) / f;
      }
    };
    return p.betweennessNormalised = p.betweennessNormalized, p;
  }
};
Yi.bc = Yi.betweennessCentrality;
var V1 = Qe({
  expandFactor: 2,
  inflateFactor: 2,
  multFactor: 1,
  maxIterations: 20,
  attributes: [
    function(t11) {
      return 1;
    }
  ]
}), Y1 = function(e) {
  return V1(e);
}, U1 = function(e, r) {
  for (var n = 0, a = 0; a < r.length; a++)
    n += r[a](e);
  return n;
}, X1 = function(e, r, n) {
  for (var a = 0; a < r; a++)
    e[a * r + a] = n;
}, kl = function(e, r) {
  for (var n, a = 0; a < r; a++) {
    n = 0;
    for (var i = 0; i < r; i++)
      n += e[i * r + a];
    for (var s = 0; s < r; s++)
      e[s * r + a] = e[s * r + a] / n;
  }
}, q1 = function(e, r, n) {
  for (var a = new Array(n * n), i = 0; i < n; i++) {
    for (var s = 0; s < n; s++)
      a[i * n + s] = 0;
    for (var o = 0; o < n; o++)
      for (var u = 0; u < n; u++)
        a[i * n + u] += e[i * n + o] * r[o * n + u];
  }
  return a;
}, W1 = function(e, r, n) {
  for (var a = e.slice(0), i = 1; i < n; i++)
    e = q1(e, a, r);
  return e;
}, K1 = function(e, r, n) {
  for (var a = new Array(r * r), i = 0; i < r * r; i++)
    a[i] = Math.pow(e[i], n);
  return kl(a, r), a;
}, Z1 = function(e, r, n, a) {
  for (var i = 0; i < n; i++) {
    var s = Math.round(e[i] * Math.pow(10, a)) / Math.pow(10, a), o = Math.round(r[i] * Math.pow(10, a)) / Math.pow(10, a);
    if (s !== o)
      return false;
  }
  return true;
}, Q1 = function(e, r, n, a) {
  for (var i = [], s = 0; s < r; s++) {
    for (var o = [], u = 0; u < r; u++)
      Math.round(e[s * r + u] * 1e3) / 1e3 > 0 && o.push(n[u]);
    o.length !== 0 && i.push(a.collection(o));
  }
  return i;
}, J1 = function(e, r) {
  for (var n = 0; n < e.length; n++)
    if (!r[n] || e[n].id() !== r[n].id())
      return false;
  return true;
}, j1 = function(e) {
  for (var r = 0; r < e.length; r++)
    for (var n = 0; n < e.length; n++)
      r != n && J1(e[r], e[n]) && e.splice(n, 1);
  return e;
}, Do = function(e) {
  for (var r = this.nodes(), n = this.edges(), a = this.cy(), i = Y1(e), s = {}, o = 0; o < r.length; o++)
    s[r[o].id()] = o;
  for (var u = r.length, l = u * u, f = new Array(l), c, v = 0; v < l; v++)
    f[v] = 0;
  for (var h = 0; h < n.length; h++) {
    var d = n[h], g = s[d.source().id()], b = s[d.target().id()], p = U1(d, i.attributes);
    f[g * u + b] += p, f[b * u + g] += p;
  }
  X1(f, u, i.multFactor), kl(f, u);
  for (var m = true, y = 0; m && y < i.maxIterations; )
    m = false, c = W1(f, u, i.expandFactor), f = K1(c, u, i.inflateFactor), Z1(f, c, l, 4) || (m = true), y++;
  var E = Q1(f, u, r, a);
  return E = j1(E), E;
}, eb = {
  markovClustering: Do,
  mcl: Do
}, tb = function(e) {
  return e;
}, Rl = function(e, r) {
  return Math.abs(r - e);
}, So = function(e, r, n) {
  return e + Rl(r, n);
}, Lo = function(e, r, n) {
  return e + Math.pow(n - r, 2);
}, rb = function(e) {
  return Math.sqrt(e);
}, nb = function(e, r, n) {
  return Math.max(e, Rl(r, n));
}, fn = function(e, r, n, a, i) {
  for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : tb, o = a, u, l, f = 0; f < e; f++)
    u = r(f), l = n(f), o = i(o, u, l);
  return s(o);
}, qr = {
  euclidean: function(e, r, n) {
    return e >= 2 ? fn(e, r, n, 0, Lo, rb) : fn(e, r, n, 0, So);
  },
  squaredEuclidean: function(e, r, n) {
    return fn(e, r, n, 0, Lo);
  },
  manhattan: function(e, r, n) {
    return fn(e, r, n, 0, So);
  },
  max: function(e, r, n) {
    return fn(e, r, n, -1 / 0, nb);
  }
};
qr["squared-euclidean"] = qr.squaredEuclidean;
qr.squaredeuclidean = qr.squaredEuclidean;
function ii(t11, e, r, n, a, i) {
  var s;
  return _e(t11) ? s = t11 : s = qr[t11] || qr.euclidean, e === 0 && _e(t11) ? s(a, i) : s(e, r, n, a, i);
}
var ab = Qe({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: false,
  testCentroids: null
}), Ts = function(e) {
  return ab(e);
}, za = function(e, r, n, a, i) {
  var s = i !== "kMedoids", o = s ? function(c) {
    return n[c];
  } : function(c) {
    return a[c](n);
  }, u = function(v) {
    return a[v](r);
  }, l = n, f = r;
  return ii(e, a.length, o, u, l, f);
}, Di = function(e, r, n) {
  for (var a = n.length, i = new Array(a), s = new Array(a), o = new Array(r), u = null, l = 0; l < a; l++)
    i[l] = e.min(n[l]).value, s[l] = e.max(n[l]).value;
  for (var f = 0; f < r; f++) {
    u = [];
    for (var c = 0; c < a; c++)
      u[c] = Math.random() * (s[c] - i[c]) + i[c];
    o[f] = u;
  }
  return o;
}, Pl = function(e, r, n, a, i) {
  for (var s = 1 / 0, o = 0, u = 0; u < r.length; u++) {
    var l = za(n, e, r[u], a, i);
    l < s && (s = l, o = u);
  }
  return o;
}, Bl = function(e, r, n) {
  for (var a = [], i = null, s = 0; s < r.length; s++)
    i = r[s], n[i.id()] === e && a.push(i);
  return a;
}, ib = function(e, r, n) {
  return Math.abs(r - e) <= n;
}, sb = function(e, r, n) {
  for (var a = 0; a < e.length; a++)
    for (var i = 0; i < e[a].length; i++) {
      var s = Math.abs(e[a][i] - r[a][i]);
      if (s > n)
        return false;
    }
  return true;
}, ob = function(e, r, n) {
  for (var a = 0; a < n; a++)
    if (e === r[a])
      return true;
  return false;
}, Ao = function(e, r) {
  var n = new Array(r);
  if (e.length < 50)
    for (var a = 0; a < r; a++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; ob(i, n, a); )
        i = e[Math.floor(Math.random() * e.length)];
      n[a] = i;
    }
  else
    for (var s = 0; s < r; s++)
      n[s] = e[Math.floor(Math.random() * e.length)];
  return n;
}, No = function(e, r, n) {
  for (var a = 0, i = 0; i < r.length; i++)
    a += za("manhattan", r[i], e, n, "kMedoids");
  return a;
}, ub = function(e) {
  var r = this.cy(), n = this.nodes(), a = null, i = Ts(e), s = new Array(i.k), o = {}, u;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = Di(n, i.k, i.attributes)) : Ve(i.testCentroids) === "object" ? u = i.testCentroids : u = Di(n, i.k, i.attributes) : u = Di(n, i.k, i.attributes);
  for (var l = true, f = 0; l && f < i.maxIterations; ) {
    for (var c = 0; c < n.length; c++)
      a = n[c], o[a.id()] = Pl(a, u, i.distance, i.attributes, "kMeans");
    l = false;
    for (var v = 0; v < i.k; v++) {
      var h = Bl(v, n, o);
      if (h.length !== 0) {
        for (var d = i.attributes.length, g = u[v], b = new Array(d), p = new Array(d), m = 0; m < d; m++) {
          p[m] = 0;
          for (var y = 0; y < h.length; y++)
            a = h[y], p[m] += i.attributes[m](a);
          b[m] = p[m] / h.length, ib(b[m], g[m], i.sensitivityThreshold) || (l = true);
        }
        u[v] = b, s[v] = r.collection(h);
      }
    }
    f++;
  }
  return s;
}, lb = function(e) {
  var r = this.cy(), n = this.nodes(), a = null, i = Ts(e), s = new Array(i.k), o, u = {}, l, f = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (Ve(i.testCentroids) === "object" ? o = i.testCentroids : o = Ao(n, i.k)) : o = Ao(n, i.k);
  for (var c = true, v = 0; c && v < i.maxIterations; ) {
    for (var h = 0; h < n.length; h++)
      a = n[h], u[a.id()] = Pl(a, o, i.distance, i.attributes, "kMedoids");
    c = false;
    for (var d = 0; d < o.length; d++) {
      var g = Bl(d, n, u);
      if (g.length !== 0) {
        f[d] = No(o[d], g, i.attributes);
        for (var b = 0; b < g.length; b++)
          l = No(g[b], g, i.attributes), l < f[d] && (f[d] = l, o[d] = g[b], c = true);
        s[d] = r.collection(g);
      }
    }
    v++;
  }
  return s;
}, fb = function(e, r, n, a, i) {
  for (var s, o, u = 0; u < r.length; u++)
    for (var l = 0; l < e.length; l++)
      a[u][l] = Math.pow(n[u][l], i.m);
  for (var f = 0; f < e.length; f++)
    for (var c = 0; c < i.attributes.length; c++) {
      s = 0, o = 0;
      for (var v = 0; v < r.length; v++)
        s += a[v][f] * i.attributes[c](r[v]), o += a[v][f];
      e[f][c] = s / o;
    }
}, cb = function(e, r, n, a, i) {
  for (var s = 0; s < e.length; s++)
    r[s] = e[s].slice();
  for (var o, u, l, f = 2 / (i.m - 1), c = 0; c < n.length; c++)
    for (var v = 0; v < a.length; v++) {
      o = 0;
      for (var h = 0; h < n.length; h++)
        u = za(i.distance, a[v], n[c], i.attributes, "cmeans"), l = za(i.distance, a[v], n[h], i.attributes, "cmeans"), o += Math.pow(u / l, f);
      e[v][c] = 1 / o;
    }
}, hb = function(e, r, n, a) {
  for (var i = new Array(n.k), s = 0; s < i.length; s++)
    i[s] = [];
  for (var o, u, l = 0; l < r.length; l++) {
    o = -1 / 0, u = -1;
    for (var f = 0; f < r[0].length; f++)
      r[l][f] > o && (o = r[l][f], u = f);
    i[u].push(e[l]);
  }
  for (var c = 0; c < i.length; c++)
    i[c] = a.collection(i[c]);
  return i;
}, Mo = function(e) {
  var r = this.cy(), n = this.nodes(), a = Ts(e), i, s, o, u, l;
  u = new Array(n.length);
  for (var f = 0; f < n.length; f++)
    u[f] = new Array(a.k);
  o = new Array(n.length);
  for (var c = 0; c < n.length; c++)
    o[c] = new Array(a.k);
  for (var v = 0; v < n.length; v++) {
    for (var h = 0, d = 0; d < a.k; d++)
      o[v][d] = Math.random(), h += o[v][d];
    for (var g = 0; g < a.k; g++)
      o[v][g] = o[v][g] / h;
  }
  s = new Array(a.k);
  for (var b = 0; b < a.k; b++)
    s[b] = new Array(a.attributes.length);
  l = new Array(n.length);
  for (var p = 0; p < n.length; p++)
    l[p] = new Array(a.k);
  for (var m = true, y = 0; m && y < a.maxIterations; )
    m = false, fb(s, n, o, l, a), cb(o, u, s, n, a), sb(o, u, a.sensitivityThreshold) || (m = true), y++;
  return i = hb(n, o, a, r), {
    clusters: i,
    degreeOfMembership: o
  };
}, vb = {
  kMeans: ub,
  kMedoids: lb,
  fuzzyCMeans: Mo,
  fcm: Mo
}, db = Qe({
  distance: "euclidean",
  linkage: "min",
  mode: "threshold",
  threshold: 1 / 0,
  addDendrogram: false,
  dendrogramDepth: 0,
  attributes: []
}), gb = {
  single: "min",
  complete: "max"
}, pb = function(e) {
  var r = db(e), n = gb[r.linkage];
  return n != null && (r.linkage = n), r;
}, Oo = function(e, r, n, a, i) {
  for (var s = 0, o = 1 / 0, u, l = i.attributes, f = function(x, S) {
    return ii(i.distance, l.length, function(L) {
      return l[L](x);
    }, function(L) {
      return l[L](S);
    }, x, S);
  }, c = 0; c < e.length; c++) {
    var v = e[c].key, h = n[v][a[v]];
    h < o && (s = v, o = h);
  }
  if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
    return false;
  var d = r[s], g = r[a[s]], b;
  i.mode === "dendrogram" ? b = {
    left: d,
    right: g,
    key: d.key
  } : b = {
    value: d.value.concat(g.value),
    key: d.key
  }, e[d.index] = b, e.splice(g.index, 1), r[d.key] = b;
  for (var p = 0; p < e.length; p++) {
    var m = e[p];
    d.key === m.key ? u = 1 / 0 : i.linkage === "min" ? (u = n[d.key][m.key], n[d.key][m.key] > n[g.key][m.key] && (u = n[g.key][m.key])) : i.linkage === "max" ? (u = n[d.key][m.key], n[d.key][m.key] < n[g.key][m.key] && (u = n[g.key][m.key])) : i.linkage === "mean" ? u = (n[d.key][m.key] * d.size + n[g.key][m.key] * g.size) / (d.size + g.size) : i.mode === "dendrogram" ? u = f(m.value, d.value) : u = f(m.value[0], d.value[0]), n[d.key][m.key] = n[m.key][d.key] = u;
  }
  for (var y = 0; y < e.length; y++) {
    var E = e[y].key;
    if (a[E] === d.key || a[E] === g.key) {
      for (var C = E, D = 0; D < e.length; D++) {
        var w = e[D].key;
        n[E][w] < n[E][C] && (C = w);
      }
      a[E] = C;
    }
    e[y].index = y;
  }
  return d.key = g.key = d.index = g.index = null, true;
}, la = function t2(e, r, n) {
  !e || (e.value ? r.push(e.value) : (e.left && t2(e.left, r), e.right && t2(e.right, r)));
}, yb = function t3(e, r) {
  if (!e)
    return "";
  if (e.left && e.right) {
    var n = t3(e.left, r), a = t3(e.right, r), i = r.add({
      group: "nodes",
      data: {
        id: n + "," + a
      }
    });
    return r.add({
      group: "edges",
      data: {
        source: n,
        target: i.id()
      }
    }), r.add({
      group: "edges",
      data: {
        source: a,
        target: i.id()
      }
    }), i.id();
  } else if (e.value)
    return e.value.id();
}, mb = function t4(e, r, n) {
  if (!e)
    return [];
  var a = [], i = [], s = [];
  return r === 0 ? (e.left && la(e.left, a), e.right && la(e.right, i), s = a.concat(i), [n.collection(s)]) : r === 1 ? e.value ? [n.collection(e.value)] : (e.left && la(e.left, a), e.right && la(e.right, i), [n.collection(a), n.collection(i)]) : e.value ? [n.collection(e.value)] : (e.left && (a = t4(e.left, r - 1, n)), e.right && (i = t4(e.right, r - 1, n)), a.concat(i));
}, Io = function(e) {
  for (var r = this.cy(), n = this.nodes(), a = pb(e), i = a.attributes, s = function(y, E) {
    return ii(a.distance, i.length, function(C) {
      return i[C](y);
    }, function(C) {
      return i[C](E);
    }, y, E);
  }, o = [], u = [], l = [], f = [], c = 0; c < n.length; c++) {
    var v = {
      value: a.mode === "dendrogram" ? n[c] : [n[c]],
      key: c,
      index: c
    };
    o[c] = v, f[c] = v, u[c] = [], l[c] = 0;
  }
  for (var h = 0; h < o.length; h++)
    for (var d = 0; d <= h; d++) {
      var g = void 0;
      a.mode === "dendrogram" ? g = h === d ? 1 / 0 : s(o[h].value, o[d].value) : g = h === d ? 1 / 0 : s(o[h].value[0], o[d].value[0]), u[h][d] = g, u[d][h] = g, g < u[h][l[h]] && (l[h] = d);
    }
  for (var b = Oo(o, f, u, l, a); b; )
    b = Oo(o, f, u, l, a);
  var p;
  return a.mode === "dendrogram" ? (p = mb(o[0], a.dendrogramDepth, r), a.addDendrogram && yb(o[0], r)) : (p = new Array(o.length), o.forEach(function(m, y) {
    m.key = m.index = null, p[y] = r.collection(m.value);
  })), p;
}, bb = {
  hierarchicalClustering: Io,
  hca: Io
}, wb = Qe({
  distance: "euclidean",
  preference: "median",
  damping: 0.8,
  maxIterations: 1e3,
  minIterations: 100,
  attributes: []
}), Eb = function(e) {
  var r = e.damping, n = e.preference;
  0.5 <= r && r < 1 || Ge("Damping must range on [0.5, 1).  Got: ".concat(r));
  var a = ["median", "mean", "min", "max"];
  return a.some(function(i) {
    return i === n;
  }) || ne(n) || Ge("Preference must be one of [".concat(a.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(n)), wb(e);
}, xb = function(e, r, n, a) {
  var i = function(o, u) {
    return a[u](o);
  };
  return -ii(e, a.length, function(s) {
    return i(r, s);
  }, function(s) {
    return i(n, s);
  }, r, n);
}, Tb = function(e, r) {
  var n = null;
  return r === "median" ? n = E1(e) : r === "mean" ? n = w1(e) : r === "min" ? n = m1(e) : r === "max" ? n = b1(e) : n = r, n;
}, Cb = function(e, r, n) {
  for (var a = [], i = 0; i < e; i++)
    r[i * e + i] + n[i * e + i] > 0 && a.push(i);
  return a;
}, ko = function(e, r, n) {
  for (var a = [], i = 0; i < e; i++) {
    for (var s = -1, o = -1 / 0, u = 0; u < n.length; u++) {
      var l = n[u];
      r[i * e + l] > o && (s = l, o = r[i * e + l]);
    }
    s > 0 && a.push(s);
  }
  for (var f = 0; f < n.length; f++)
    a[n[f]] = n[f];
  return a;
}, Db = function(e, r, n) {
  for (var a = ko(e, r, n), i = 0; i < n.length; i++) {
    for (var s = [], o = 0; o < a.length; o++)
      a[o] === n[i] && s.push(o);
    for (var u = -1, l = -1 / 0, f = 0; f < s.length; f++) {
      for (var c = 0, v = 0; v < s.length; v++)
        c += r[s[v] * e + s[f]];
      c > l && (u = f, l = c);
    }
    n[i] = s[u];
  }
  return a = ko(e, r, n), a;
}, Ro = function(e) {
  for (var r = this.cy(), n = this.nodes(), a = Eb(e), i = {}, s = 0; s < n.length; s++)
    i[n[s].id()] = s;
  var o, u, l, f, c, v;
  o = n.length, u = o * o, l = new Array(u);
  for (var h = 0; h < u; h++)
    l[h] = -1 / 0;
  for (var d = 0; d < o; d++)
    for (var g = 0; g < o; g++)
      d !== g && (l[d * o + g] = xb(a.distance, n[d], n[g], a.attributes));
  f = Tb(l, a.preference);
  for (var b = 0; b < o; b++)
    l[b * o + b] = f;
  c = new Array(u);
  for (var p = 0; p < u; p++)
    c[p] = 0;
  v = new Array(u);
  for (var m = 0; m < u; m++)
    v[m] = 0;
  for (var y = new Array(o), E = new Array(o), C = new Array(o), D = 0; D < o; D++)
    y[D] = 0, E[D] = 0, C[D] = 0;
  for (var w = new Array(o * a.minIterations), T = 0; T < w.length; T++)
    w[T] = 0;
  var x;
  for (x = 0; x < a.maxIterations; x++) {
    for (var S = 0; S < o; S++) {
      for (var L = -1 / 0, A = -1 / 0, O = -1, N = 0, R = 0; R < o; R++)
        y[R] = c[S * o + R], N = v[S * o + R] + l[S * o + R], N >= L ? (A = L, L = N, O = R) : N > A && (A = N);
      for (var I = 0; I < o; I++)
        c[S * o + I] = (1 - a.damping) * (l[S * o + I] - L) + a.damping * y[I];
      c[S * o + O] = (1 - a.damping) * (l[S * o + O] - A) + a.damping * y[O];
    }
    for (var k = 0; k < o; k++) {
      for (var P = 0, B = 0; B < o; B++)
        y[B] = v[B * o + k], E[B] = Math.max(0, c[B * o + k]), P += E[B];
      P -= E[k], E[k] = c[k * o + k], P += E[k];
      for (var _ = 0; _ < o; _++)
        v[_ * o + k] = (1 - a.damping) * Math.min(0, P - E[_]) + a.damping * y[_];
      v[k * o + k] = (1 - a.damping) * (P - E[k]) + a.damping * y[k];
    }
    for (var F = 0, G = 0; G < o; G++) {
      var z = v[G * o + G] + c[G * o + G] > 0 ? 1 : 0;
      w[x % a.minIterations * o + G] = z, F += z;
    }
    if (F > 0 && (x >= a.minIterations - 1 || x == a.maxIterations - 1)) {
      for (var V = 0, U = 0; U < o; U++) {
        C[U] = 0;
        for (var Y = 0; Y < a.minIterations; Y++)
          C[U] += w[Y * o + U];
        (C[U] === 0 || C[U] === a.minIterations) && V++;
      }
      if (V === o)
        break;
    }
  }
  for (var $ = Cb(o, c, v), X = Db(o, l, $), K = {}, Z = 0; Z < $.length; Z++)
    K[$[Z]] = [];
  for (var te = 0; te < n.length; te++) {
    var ve = i[n[te].id()], de = X[ve];
    de != null && K[de].push(n[te]);
  }
  for (var re = new Array($.length), ee = 0; ee < $.length; ee++)
    re[ee] = r.collection(K[$[ee]]);
  return re;
}, Sb = {
  affinityPropagation: Ro,
  ap: Ro
}, Lb = Qe({
  root: void 0,
  directed: false
}), Ab = {
  hierholzer: function(e) {
    if (!Ce(e)) {
      var r = arguments;
      e = {
        root: r[0],
        directed: r[1]
      };
    }
    var n = Lb(e), a = n.root, i = n.directed, s = this, o = false, u, l, f;
    a && (f = le(a) ? this.filter(a)[0].id() : a[0].id());
    var c = {}, v = {};
    i ? s.forEach(function(m) {
      var y = m.id();
      if (m.isNode()) {
        var E = m.indegree(true), C = m.outdegree(true), D = E - C, w = C - E;
        D == 1 ? u ? o = true : u = y : w == 1 ? l ? o = true : l = y : (w > 1 || D > 1) && (o = true), c[y] = [], m.outgoers().forEach(function(T) {
          T.isEdge() && c[y].push(T.id());
        });
      } else
        v[y] = [void 0, m.target().id()];
    }) : s.forEach(function(m) {
      var y = m.id();
      if (m.isNode()) {
        var E = m.degree(true);
        E % 2 && (u ? l ? o = true : l = y : u = y), c[y] = [], m.connectedEdges().forEach(function(C) {
          return c[y].push(C.id());
        });
      } else
        v[y] = [m.source().id(), m.target().id()];
    });
    var h = {
      found: false,
      trail: void 0
    };
    if (o)
      return h;
    if (l && u)
      if (i) {
        if (f && l != f)
          return h;
        f = l;
      } else {
        if (f && l != f && u != f)
          return h;
        f || (f = l);
      }
    else
      f || (f = s[0].id());
    var d = function(y) {
      for (var E = y, C = [y], D, w, T; c[E].length; )
        D = c[E].shift(), w = v[D][0], T = v[D][1], E != T ? (c[T] = c[T].filter(function(x) {
          return x != D;
        }), E = T) : !i && E != w && (c[w] = c[w].filter(function(x) {
          return x != D;
        }), E = w), C.unshift(D), C.unshift(E);
      return C;
    }, g = [], b = [];
    for (b = d(f); b.length != 1; )
      c[b[0]].length == 0 ? (g.unshift(s.getElementById(b.shift())), g.unshift(s.getElementById(b.shift()))) : b = d(b.shift()).concat(b);
    g.unshift(s.getElementById(b.shift()));
    for (var p in c)
      if (c[p].length)
        return h;
    return h.found = true, h.trail = this.spawn(g, true), h;
  }
}, fa = function() {
  var e = this, r = {}, n = 0, a = 0, i = [], s = [], o = {}, u = function(v, h) {
    for (var d = s.length - 1, g = [], b = e.spawn(); s[d].x != v || s[d].y != h; )
      g.push(s.pop().edge), d--;
    g.push(s.pop().edge), g.forEach(function(p) {
      var m = p.connectedNodes().intersection(e);
      b.merge(p), m.forEach(function(y) {
        var E = y.id(), C = y.connectedEdges().intersection(e);
        b.merge(y), r[E].cutVertex ? b.merge(C.filter(function(D) {
          return D.isLoop();
        })) : b.merge(C);
      });
    }), i.push(b);
  }, l = function c(v, h, d) {
    v === d && (a += 1), r[h] = {
      id: n,
      low: n++,
      cutVertex: false
    };
    var g = e.getElementById(h).connectedEdges().intersection(e);
    if (g.size() === 0)
      i.push(e.spawn(e.getElementById(h)));
    else {
      var b, p, m, y;
      g.forEach(function(E) {
        b = E.source().id(), p = E.target().id(), m = b === h ? p : b, m !== d && (y = E.id(), o[y] || (o[y] = true, s.push({
          x: h,
          y: m,
          edge: E
        })), m in r ? r[h].low = Math.min(r[h].low, r[m].id) : (c(v, m, h), r[h].low = Math.min(r[h].low, r[m].low), r[h].id <= r[m].low && (r[h].cutVertex = true, u(h, m))));
      });
    }
  };
  e.forEach(function(c) {
    if (c.isNode()) {
      var v = c.id();
      v in r || (a = 0, l(v, v), r[v].cutVertex = a > 1);
    }
  });
  var f = Object.keys(r).filter(function(c) {
    return r[c].cutVertex;
  }).map(function(c) {
    return e.getElementById(c);
  });
  return {
    cut: e.spawn(f),
    components: i
  };
}, Nb = {
  hopcroftTarjanBiconnected: fa,
  htbc: fa,
  htb: fa,
  hopcroftTarjanBiconnectedComponents: fa
}, ca = function() {
  var e = this, r = {}, n = 0, a = [], i = [], s = e.spawn(e), o = function u(l) {
    i.push(l), r[l] = {
      index: n,
      low: n++,
      explored: false
    };
    var f = e.getElementById(l).connectedEdges().intersection(e);
    if (f.forEach(function(g) {
      var b = g.target().id();
      b !== l && (b in r || u(b), r[b].explored || (r[l].low = Math.min(r[l].low, r[b].low)));
    }), r[l].index === r[l].low) {
      for (var c = e.spawn(); ; ) {
        var v = i.pop();
        if (c.merge(e.getElementById(v)), r[v].low = r[l].index, r[v].explored = true, v === l)
          break;
      }
      var h = c.edgesWith(c), d = c.merge(h);
      a.push(d), s = s.difference(d);
    }
  };
  return e.forEach(function(u) {
    if (u.isNode()) {
      var l = u.id();
      l in r || o(l);
    }
  }), {
    cut: s,
    components: a
  };
}, Mb = {
  tarjanStronglyConnected: ca,
  tsc: ca,
  tscc: ca,
  tarjanStronglyConnectedComponents: ca
}, Fl = {};
[kn, s1, o1, l1, c1, v1, p1, z1, zr, Hr, Yi, eb, vb, bb, Sb, Ab, Nb, Mb].forEach(function(t11) {
  he(Fl, t11);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var _l = 0, $l = 1, Gl = 2, Yt = function t5(e) {
  if (!(this instanceof t5))
    return new t5(e);
  this.id = "Thenable/1.0.7", this.state = _l, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Yt.prototype = {
  fulfill: function(e) {
    return Po(this, $l, "fulfillValue", e);
  },
  reject: function(e) {
    return Po(this, Gl, "rejectReason", e);
  },
  then: function(e, r) {
    var n = this, a = new Yt();
    return n.onFulfilled.push(Fo(e, a, "fulfill")), n.onRejected.push(Fo(r, a, "reject")), zl(n), a.proxy;
  }
};
var Po = function(e, r, n, a) {
  return e.state === _l && (e.state = r, e[n] = a, zl(e)), e;
}, zl = function(e) {
  e.state === $l ? Bo(e, "onFulfilled", e.fulfillValue) : e.state === Gl && Bo(e, "onRejected", e.rejectReason);
}, Bo = function(e, r, n) {
  if (e[r].length !== 0) {
    var a = e[r];
    e[r] = [];
    var i = function() {
      for (var o = 0; o < a.length; o++)
        a[o](n);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, Fo = function(e, r, n) {
  return function(a) {
    if (typeof e != "function")
      r[n].call(r, a);
    else {
      var i;
      try {
        i = e(a);
      } catch (s) {
        r.reject(s);
        return;
      }
      Ob(r, i);
    }
  };
}, Ob = function t6(e, r) {
  if (e === r || e.proxy === r) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var n;
  if (Ve(r) === "object" && r !== null || typeof r == "function")
    try {
      n = r.then;
    } catch (i) {
      e.reject(i);
      return;
    }
  if (typeof n == "function") {
    var a = false;
    try {
      n.call(
        r,
        function(i) {
          a || (a = true, i === r ? e.reject(new TypeError("circular thenable chain")) : t6(e, i));
        },
        function(i) {
          a || (a = true, e.reject(i));
        }
      );
    } catch (i) {
      a || e.reject(i);
    }
    return;
  }
  e.fulfill(r);
};
Yt.all = function(t11) {
  return new Yt(function(e, r) {
    for (var n = new Array(t11.length), a = 0, i = function(u, l) {
      n[u] = l, a++, a === t11.length && e(n);
    }, s = 0; s < t11.length; s++)
      (function(o) {
        var u = t11[o], l = u != null && u.then != null;
        if (l)
          u.then(function(c) {
            i(o, c);
          }, function(c) {
            r(c);
          });
        else {
          var f = u;
          i(o, f);
        }
      })(s);
  });
};
Yt.resolve = function(t11) {
  return new Yt(function(e, r) {
    e(t11);
  });
};
Yt.reject = function(t11) {
  return new Yt(function(e, r) {
    r(t11);
  });
};
var jr = typeof Promise < "u" ? Promise : Yt, Ui = function(e, r, n) {
  var a = gs(e), i = !a, s = this._private = he({
    duration: 1e3
  }, r, n);
  if (s.target = e, s.style = s.style || s.css, s.started = false, s.playing = false, s.hooked = false, s.applying = false, s.progress = 0, s.completes = [], s.frames = [], s.complete && _e(s.complete) && s.completes.push(s.complete), i) {
    var o = e.position();
    s.startPosition = s.startPosition || {
      x: o.x,
      y: o.y
    }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
  }
  if (a) {
    var u = e.pan();
    s.startPan = {
      x: u.x,
      y: u.y
    }, s.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
}, wr = Ui.prototype;
he(wr, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var r, n = e.target._private.animation;
      e.queue ? r = n.queue : r = n.current, r.push(this), dt(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = true;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = true, e.started = false, e.stopped = false, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = true, e.started = false, e.stopped = false, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = false, e.started = false, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = false, e.started = false, e.stopped = true, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var r = this._private;
    return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
  },
  progress: function(e) {
    var r = this._private, n = r.playing;
    return e === void 0 ? r.progress : (n && this.pause(), r.progress = e, r.started = false, n && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, r = e.playing;
    r && this.pause(), e.progress = 1 - e.progress, e.started = false;
    var n = function(l, f) {
      var c = e[l];
      c != null && (e[l] = e[f], e[f] = c);
    };
    if (n("zoom", "startZoom"), n("pan", "startPan"), n("position", "startPosition"), e.style)
      for (var a = 0; a < e.style.length; a++) {
        var i = e.style[a], s = i.name, o = e.startStyle[s];
        e.startStyle[s] = i, e.style[a] = o;
      }
    return r && this.play(), this;
  },
  promise: function(e) {
    var r = this._private, n;
    switch (e) {
      case "frame":
        n = r.frames;
        break;
      default:
      case "complete":
      case "completed":
        n = r.completes;
    }
    return new jr(function(a, i) {
      n.push(function() {
        a();
      });
    });
  }
});
wr.complete = wr.completed;
wr.run = wr.play;
wr.running = wr.playing;
var Ib = {
  animated: function() {
    return function() {
      var r = this, n = r.length !== void 0, a = n ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return false;
      var s = a[0];
      if (s)
        return s._private.animation.current.length > 0;
    };
  },
  clearQueue: function() {
    return function() {
      var r = this, n = r.length !== void 0, a = n ? r : [r], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var s = 0; s < a.length; s++) {
        var o = a[s];
        o._private.animation.queue = [];
      }
      return this;
    };
  },
  delay: function() {
    return function(r, n) {
      var a = this._private.cy || this;
      return a.styleEnabled() ? this.animate({
        delay: r,
        duration: r,
        complete: n
      }) : this;
    };
  },
  delayAnimation: function() {
    return function(r, n) {
      var a = this._private.cy || this;
      return a.styleEnabled() ? this.animation({
        delay: r,
        duration: r,
        complete: n
      }) : this;
    };
  },
  animation: function() {
    return function(r, n) {
      var a = this, i = a.length !== void 0, s = i ? a : [a], o = this._private.cy || this, u = !i, l = !u;
      if (!o.styleEnabled())
        return this;
      var f = o.style();
      r = he({}, r, n);
      var c = Object.keys(r).length === 0;
      if (c)
        return new Ui(s[0], r);
      switch (r.duration === void 0 && (r.duration = 400), r.duration) {
        case "slow":
          r.duration = 600;
          break;
        case "fast":
          r.duration = 200;
          break;
      }
      if (l && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), l && r.renderedPosition != null) {
        var v = r.renderedPosition, h = o.pan(), d = o.zoom();
        r.position = Dl(v, d, h);
      }
      if (u && r.panBy != null) {
        var g = r.panBy, b = o.pan();
        r.pan = {
          x: b.x + g.x,
          y: b.y + g.y
        };
      }
      var p = r.center || r.centre;
      if (u && p != null) {
        var m = o.getCenterPan(p.eles, r.zoom);
        m != null && (r.pan = m);
      }
      if (u && r.fit != null) {
        var y = r.fit, E = o.getFitViewport(y.eles || y.boundingBox, y.padding);
        E != null && (r.pan = E.pan, r.zoom = E.zoom);
      }
      if (u && Ce(r.zoom)) {
        var C = o.getZoomedViewport(r.zoom);
        C != null ? (C.zoomed && (r.zoom = C.zoom), C.panned && (r.pan = C.pan)) : r.zoom = null;
      }
      return new Ui(s[0], r);
    };
  },
  animate: function() {
    return function(r, n) {
      var a = this, i = a.length !== void 0, s = i ? a : [a], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      n && (r = he({}, r, n));
      for (var u = 0; u < s.length; u++) {
        var l = s[u], f = l.animated() && (r.queue === void 0 || r.queue), c = l.animation(r, f ? {
          queue: true
        } : void 0);
        c.play();
      }
      return this;
    };
  },
  stop: function() {
    return function(r, n) {
      var a = this, i = a.length !== void 0, s = i ? a : [a], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      for (var u = 0; u < s.length; u++) {
        for (var l = s[u], f = l._private, c = f.animation.current, v = 0; v < c.length; v++) {
          var h = c[v], d = h._private;
          n && (d.duration = 0);
        }
        r && (f.animation.queue = []), n || (f.animation.current = []);
      }
      return o.notify("draw"), this;
    };
  }
}, kb = {
  data: function(e) {
    var r = {
      field: "data",
      bindingEvent: "data",
      allowBinding: false,
      allowSetting: false,
      allowGetting: false,
      settingEvent: "data",
      settingTriggersEvent: false,
      triggerFnName: "trigger",
      immutableKeys: {},
      updateStyle: false,
      beforeGet: function(a) {
      },
      beforeSet: function(a, i) {
      },
      onSet: function(a) {
      },
      canSet: function(a) {
        return true;
      }
    };
    return e = he({}, r, e), function(a, i) {
      var s = e, o = this, u = o.length !== void 0, l = u ? o : [o], f = u ? o[0] : o;
      if (le(a)) {
        var c = a.indexOf(".") !== -1, v = c && mm.default(a);
        if (s.allowGetting && i === void 0) {
          var h;
          return f && (s.beforeGet(f), v && f._private[s.field][a] === void 0 ? h = pm.default(f._private[s.field], v) : h = f._private[s.field][a]), h;
        } else if (s.allowSetting && i !== void 0) {
          var d = !s.immutableKeys[a];
          if (d) {
            var g = ll({}, a, i);
            s.beforeSet(o, g);
            for (var b = 0, p = l.length; b < p; b++) {
              var m = l[b];
              s.canSet(m) && (v && f._private[s.field][a] === void 0 ? ym.default(m._private[s.field], v, i) : m._private[s.field][a] = i);
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          }
        }
      } else if (s.allowSetting && Ce(a)) {
        var y = a, E, C, D = Object.keys(y);
        s.beforeSet(o, y);
        for (var w = 0; w < D.length; w++) {
          E = D[w], C = y[E];
          var T = !s.immutableKeys[E];
          if (T)
            for (var x = 0; x < l.length; x++) {
              var S = l[x];
              s.canSet(S) && (S._private[s.field][E] = C);
            }
        }
        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
      } else if (s.allowBinding && _e(a)) {
        var L = a;
        o.on(s.bindingEvent, L);
      } else if (s.allowGetting && a === void 0) {
        var A;
        return f && (s.beforeGet(f), A = f._private[s.field]), A;
      }
      return o;
    };
  },
  removeData: function(e) {
    var r = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: false,
      immutableKeys: {}
    };
    return e = he({}, r, e), function(a) {
      var i = e, s = this, o = s.length !== void 0, u = o ? s : [s];
      if (le(a)) {
        for (var l = a.split(/\s+/), f = l.length, c = 0; c < f; c++) {
          var v = l[c];
          if (!nr(v)) {
            var h = !i.immutableKeys[v];
            if (h)
              for (var d = 0, g = u.length; d < g; d++)
                u[d]._private[i.field][v] = void 0;
          }
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      } else if (a === void 0) {
        for (var b = 0, p = u.length; b < p; b++)
          for (var m = u[b]._private[i.field], y = Object.keys(m), E = 0; E < y.length; E++) {
            var C = y[E], D = !i.immutableKeys[C];
            D && (m[C] = void 0);
          }
        i.triggerEvent && s[i.triggerFnName](i.event);
      }
      return s;
    };
  }
}, Rb = {
  eventAliasesOn: function(e) {
    var r = e;
    r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(n, a) {
      var i = this, s = Array.prototype.slice.call(arguments, 0);
      return new jr(function(o, u) {
        var l = function(h) {
          i.off.apply(i, c), o(h);
        }, f = s.concat([l]), c = f.concat([]);
        i.on.apply(i, f);
      });
    };
  }
}, Ae = {};
[Ib, kb, Rb].forEach(function(t11) {
  he(Ae, t11);
});
var Pb = {
  animate: Ae.animate(),
  animation: Ae.animation(),
  animated: Ae.animated(),
  clearQueue: Ae.clearQueue(),
  delay: Ae.delay(),
  delayAnimation: Ae.delayAnimation(),
  stop: Ae.stop()
}, Ta = {
  classes: function(e) {
    var r = this;
    if (e === void 0) {
      var n = [];
      return r[0]._private.classes.forEach(function(d) {
        return n.push(d);
      }), n;
    } else
      ke(e) || (e = (e || "").match(/\S+/g) || []);
    for (var a = [], i = new Jr(e), s = 0; s < r.length; s++) {
      for (var o = r[s], u = o._private, l = u.classes, f = false, c = 0; c < e.length; c++) {
        var v = e[c], h = l.has(v);
        if (!h) {
          f = true;
          break;
        }
      }
      f || (f = l.size !== e.length), f && (u.classes = i, a.push(o));
    }
    return a.length > 0 && this.spawn(a).updateStyle().emit("class"), r;
  },
  addClass: function(e) {
    return this.toggleClass(e, true);
  },
  hasClass: function(e) {
    var r = this[0];
    return r != null && r._private.classes.has(e);
  },
  toggleClass: function(e, r) {
    ke(e) || (e = e.match(/\S+/g) || []);
    for (var n = this, a = r === void 0, i = [], s = 0, o = n.length; s < o; s++)
      for (var u = n[s], l = u._private.classes, f = false, c = 0; c < e.length; c++) {
        var v = e[c], h = l.has(v), d = false;
        r || a && !h ? (l.add(v), d = true) : (!r || a && h) && (l.delete(v), d = true), !f && d && (i.push(u), f = true);
      }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), n;
  },
  removeClass: function(e) {
    return this.toggleClass(e, false);
  },
  flashClass: function(e, r) {
    var n = this;
    if (r == null)
      r = 250;
    else if (r === 0)
      return n;
    return n.addClass(e), setTimeout(function() {
      n.removeClass(e);
    }, r), n;
  }
};
Ta.className = Ta.classNames = Ta.classes;
var Te = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  boolOp: "\\?|\\!|\\^",
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  number: He,
  meta: "degree|indegree|outdegree",
  separator: "\\s*,\\s*",
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Te.variable = "(?:[\\w-.]|(?:\\\\" + Te.metaChar + "))+";
Te.className = "(?:[\\w-]|(?:\\\\" + Te.metaChar + "))+";
Te.value = Te.string + "|" + Te.number;
Te.id = Te.variable;
(function() {
  var t11, e, r;
  for (t11 = Te.comparatorOp.split("|"), r = 0; r < t11.length; r++)
    e = t11[r], Te.comparatorOp += "|@" + e;
  for (t11 = Te.comparatorOp.split("|"), r = 0; r < t11.length; r++)
    e = t11[r], !(e.indexOf("!") >= 0) && e !== "=" && (Te.comparatorOp += "|\\!" + e);
})();
var Oe = function() {
  return {
    checks: []
  };
}, ie = {
  GROUP: 0,
  COLLECTION: 1,
  FILTER: 2,
  DATA_COMPARE: 3,
  DATA_EXIST: 4,
  DATA_BOOL: 5,
  META_COMPARE: 6,
  STATE: 7,
  ID: 8,
  CLASS: 9,
  UNDIRECTED_EDGE: 10,
  DIRECTED_EDGE: 11,
  NODE_SOURCE: 12,
  NODE_TARGET: 13,
  NODE_NEIGHBOR: 14,
  CHILD: 15,
  DESCENDANT: 16,
  PARENT: 17,
  ANCESTOR: 18,
  COMPOUND_SPLIT: 19,
  TRUE: 20
}, Xi = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(t11, e) {
  return $m(t11.selector, e.selector);
}), Bb = function() {
  for (var t11 = {}, e, r = 0; r < Xi.length; r++)
    e = Xi[r], t11[e.selector] = e.matches;
  return t11;
}(), Fb = function(e, r) {
  return Bb[e](r);
}, _b = "(" + Xi.map(function(t11) {
  return t11.selector;
}).join("|") + ")", Mr = function(e) {
  return e.replace(new RegExp("\\\\(" + Te.metaChar + ")", "g"), function(r, n) {
    return n;
  });
}, Kt = function(e, r, n) {
  e[e.length - 1] = n;
}, qi = [{
  name: "group",
  query: true,
  regex: "(" + Te.group + ")",
  populate: function(e, r, n) {
    var a = Gt(n, 1), i = a[0];
    r.checks.push({
      type: ie.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: true,
  regex: _b,
  populate: function(e, r, n) {
    var a = Gt(n, 1), i = a[0];
    r.checks.push({
      type: ie.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: true,
  regex: "\\#(" + Te.id + ")",
  populate: function(e, r, n) {
    var a = Gt(n, 1), i = a[0];
    r.checks.push({
      type: ie.ID,
      value: Mr(i)
    });
  }
}, {
  name: "className",
  query: true,
  regex: "\\.(" + Te.className + ")",
  populate: function(e, r, n) {
    var a = Gt(n, 1), i = a[0];
    r.checks.push({
      type: ie.CLASS,
      value: Mr(i)
    });
  }
}, {
  name: "dataExists",
  query: true,
  regex: "\\[\\s*(" + Te.variable + ")\\s*\\]",
  populate: function(e, r, n) {
    var a = Gt(n, 1), i = a[0];
    r.checks.push({
      type: ie.DATA_EXIST,
      field: Mr(i)
    });
  }
}, {
  name: "dataCompare",
  query: true,
  regex: "\\[\\s*(" + Te.variable + ")\\s*(" + Te.comparatorOp + ")\\s*(" + Te.value + ")\\s*\\]",
  populate: function(e, r, n) {
    var a = Gt(n, 3), i = a[0], s = a[1], o = a[2], u = new RegExp("^" + Te.string + "$").exec(o) != null;
    u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
      type: ie.DATA_COMPARE,
      field: Mr(i),
      operator: s,
      value: o
    });
  }
}, {
  name: "dataBool",
  query: true,
  regex: "\\[\\s*(" + Te.boolOp + ")\\s*(" + Te.variable + ")\\s*\\]",
  populate: function(e, r, n) {
    var a = Gt(n, 2), i = a[0], s = a[1];
    r.checks.push({
      type: ie.DATA_BOOL,
      field: Mr(s),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: true,
  regex: "\\[\\[\\s*(" + Te.meta + ")\\s*(" + Te.comparatorOp + ")\\s*(" + Te.number + ")\\s*\\]\\]",
  populate: function(e, r, n) {
    var a = Gt(n, 3), i = a[0], s = a[1], o = a[2];
    r.checks.push({
      type: ie.META_COMPARE,
      field: Mr(i),
      operator: s,
      value: parseFloat(o)
    });
  }
}, {
  name: "nextQuery",
  separator: true,
  regex: Te.separator,
  populate: function(e, r) {
    var n = e.currentSubject, a = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
    n != null && (s.subject = n, e.currentSubject = null), s.edgeCount = a, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var o = e[e.length++] = Oe();
    return o;
  }
}, {
  name: "directedEdge",
  separator: true,
  regex: Te.directedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var n = Oe(), a = r, i = Oe();
      return n.checks.push({
        type: ie.DIRECTED_EDGE,
        source: a,
        target: i
      }), Kt(e, r, n), e.edgeCount++, i;
    } else {
      var s = Oe(), o = r, u = Oe();
      return s.checks.push({
        type: ie.NODE_SOURCE,
        source: o,
        target: u
      }), Kt(e, r, s), e.edgeCount++, u;
    }
  }
}, {
  name: "undirectedEdge",
  separator: true,
  regex: Te.undirectedEdge,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var n = Oe(), a = r, i = Oe();
      return n.checks.push({
        type: ie.UNDIRECTED_EDGE,
        nodes: [a, i]
      }), Kt(e, r, n), e.edgeCount++, i;
    } else {
      var s = Oe(), o = r, u = Oe();
      return s.checks.push({
        type: ie.NODE_NEIGHBOR,
        node: o,
        neighbor: u
      }), Kt(e, r, s), u;
    }
  }
}, {
  name: "child",
  separator: true,
  regex: Te.child,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var n = Oe(), a = Oe(), i = e[e.length - 1];
      return n.checks.push({
        type: ie.CHILD,
        parent: i,
        child: a
      }), Kt(e, r, n), e.compoundCount++, a;
    } else if (e.currentSubject === r) {
      var s = Oe(), o = e[e.length - 1], u = Oe(), l = Oe(), f = Oe(), c = Oe();
      return s.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = r.checks, r.checks = [{
        type: ie.TRUE
      }], c.checks.push({
        type: ie.TRUE
      }), u.checks.push({
        type: ie.PARENT,
        parent: c,
        child: f
      }), Kt(e, o, s), e.currentSubject = l, e.compoundCount++, f;
    } else {
      var v = Oe(), h = Oe(), d = [{
        type: ie.PARENT,
        parent: v,
        child: h
      }];
      return v.checks = r.checks, r.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "descendant",
  separator: true,
  regex: Te.descendant,
  populate: function(e, r) {
    if (e.currentSubject == null) {
      var n = Oe(), a = Oe(), i = e[e.length - 1];
      return n.checks.push({
        type: ie.DESCENDANT,
        ancestor: i,
        descendant: a
      }), Kt(e, r, n), e.compoundCount++, a;
    } else if (e.currentSubject === r) {
      var s = Oe(), o = e[e.length - 1], u = Oe(), l = Oe(), f = Oe(), c = Oe();
      return s.checks.push({
        type: ie.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = r.checks, r.checks = [{
        type: ie.TRUE
      }], c.checks.push({
        type: ie.TRUE
      }), u.checks.push({
        type: ie.ANCESTOR,
        ancestor: c,
        descendant: f
      }), Kt(e, o, s), e.currentSubject = l, e.compoundCount++, f;
    } else {
      var v = Oe(), h = Oe(), d = [{
        type: ie.ANCESTOR,
        ancestor: v,
        descendant: h
      }];
      return v.checks = r.checks, r.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "subject",
  modifier: true,
  regex: Te.subject,
  populate: function(e, r) {
    if (e.currentSubject != null && e.currentSubject !== r)
      return Ne("Redefinition of subject in selector `" + e.toString() + "`"), false;
    e.currentSubject = r;
    var n = e[e.length - 1], a = n.checks[0], i = a == null ? null : a.type;
    i === ie.DIRECTED_EDGE ? a.type = ie.NODE_TARGET : i === ie.UNDIRECTED_EDGE && (a.type = ie.NODE_NEIGHBOR, a.node = a.nodes[1], a.neighbor = a.nodes[0], a.nodes = null);
  }
}];
qi.forEach(function(t11) {
  return t11.regexObj = new RegExp("^" + t11.regex);
});
var $b = function(e) {
  for (var r, n, a, i = 0; i < qi.length; i++) {
    var s = qi[i], o = s.name, u = e.match(s.regexObj);
    if (u != null) {
      n = u, r = s, a = o;
      var l = u[0];
      e = e.substring(l.length);
      break;
    }
  }
  return {
    expr: r,
    match: n,
    name: a,
    remaining: e
  };
}, Gb = function(e) {
  var r = e.match(/^\s+/);
  if (r) {
    var n = r[0];
    e = e.substring(n.length);
  }
  return e;
}, zb = function(e) {
  var r = this, n = r.inputText = e, a = r[0] = Oe();
  for (r.length = 1, n = Gb(n); ; ) {
    var i = $b(n);
    if (i.expr == null)
      return Ne("The selector `" + e + "`is invalid"), false;
    var s = i.match.slice(1), o = i.expr.populate(r, a, s);
    if (o === false)
      return false;
    if (o != null && (a = o), n = i.remaining, n.match(/^\s*$/))
      break;
  }
  var u = r[r.length - 1];
  r.currentSubject != null && (u.subject = r.currentSubject), u.edgeCount = r.edgeCount, u.compoundCount = r.compoundCount;
  for (var l = 0; l < r.length; l++) {
    var f = r[l];
    if (f.compoundCount > 0 && f.edgeCount > 0)
      return Ne("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), false;
    if (f.edgeCount > 1)
      return Ne("The selector `" + e + "` is invalid because it uses multiple edge selectors"), false;
    f.edgeCount === 1 && Ne("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return true;
}, Hb = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(f) {
    return f == null ? "" : f;
  }, r = function(f) {
    return le(f) ? '"' + f + '"' : e(f);
  }, n = function(f) {
    return " " + f + " ";
  }, a = function(f, c) {
    var v = f.type, h = f.value;
    switch (v) {
      case ie.GROUP: {
        var d = e(h);
        return d.substring(0, d.length - 1);
      }
      case ie.DATA_COMPARE: {
        var g = f.field, b = f.operator;
        return "[" + g + n(e(b)) + r(h) + "]";
      }
      case ie.DATA_BOOL: {
        var p = f.operator, m = f.field;
        return "[" + e(p) + m + "]";
      }
      case ie.DATA_EXIST: {
        var y = f.field;
        return "[" + y + "]";
      }
      case ie.META_COMPARE: {
        var E = f.operator, C = f.field;
        return "[[" + C + n(e(E)) + r(h) + "]]";
      }
      case ie.STATE:
        return h;
      case ie.ID:
        return "#" + h;
      case ie.CLASS:
        return "." + h;
      case ie.PARENT:
      case ie.CHILD:
        return i(f.parent, c) + n(">") + i(f.child, c);
      case ie.ANCESTOR:
      case ie.DESCENDANT:
        return i(f.ancestor, c) + " " + i(f.descendant, c);
      case ie.COMPOUND_SPLIT: {
        var D = i(f.left, c), w = i(f.subject, c), T = i(f.right, c);
        return D + (D.length > 0 ? " " : "") + w + T;
      }
      case ie.TRUE:
        return "";
    }
  }, i = function(f, c) {
    return f.checks.reduce(function(v, h, d) {
      return v + (c === f && d === 0 ? "$" : "") + a(h, c);
    }, "");
  }, s = "", o = 0; o < this.length; o++) {
    var u = this[o];
    s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
  }
  return this.toStringCache = s, s;
}, Vb = {
  parse: zb,
  toString: Hb
}, Hl = function(e, r, n) {
  var a, i = le(e), s = ne(e), o = le(n), u, l, f = false, c = false, v = false;
  switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), c = true), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = true), (i || o || f) && (u = !i && !s ? "" : "" + e, l = "" + n), f && (e = u = u.toLowerCase(), n = l = l.toLowerCase()), r) {
    case "*=":
      a = u.indexOf(l) >= 0;
      break;
    case "$=":
      a = u.indexOf(l, u.length - l.length) >= 0;
      break;
    case "^=":
      a = u.indexOf(l) === 0;
      break;
    case "=":
      a = e === n;
      break;
    case ">":
      v = true, a = e > n;
      break;
    case ">=":
      v = true, a = e >= n;
      break;
    case "<":
      v = true, a = e < n;
      break;
    case "<=":
      v = true, a = e <= n;
      break;
    default:
      a = false;
      break;
  }
  return c && (e != null || !v) && (a = !a), a;
}, Yb = function(e, r) {
  switch (r) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, Ub = function(e) {
  return e !== void 0;
}, Cs = function(e, r) {
  return e.data(r);
}, Xb = function(e, r) {
  return e[r]();
}, ze = [], Be = function(e, r) {
  return e.checks.every(function(n) {
    return ze[n.type](n, r);
  });
};
ze[ie.GROUP] = function(t11, e) {
  var r = t11.value;
  return r === "*" || r === e.group();
};
ze[ie.STATE] = function(t11, e) {
  var r = t11.value;
  return Fb(r, e);
};
ze[ie.ID] = function(t11, e) {
  var r = t11.value;
  return e.id() === r;
};
ze[ie.CLASS] = function(t11, e) {
  var r = t11.value;
  return e.hasClass(r);
};
ze[ie.META_COMPARE] = function(t11, e) {
  var r = t11.field, n = t11.operator, a = t11.value;
  return Hl(Xb(e, r), n, a);
};
ze[ie.DATA_COMPARE] = function(t11, e) {
  var r = t11.field, n = t11.operator, a = t11.value;
  return Hl(Cs(e, r), n, a);
};
ze[ie.DATA_BOOL] = function(t11, e) {
  var r = t11.field, n = t11.operator;
  return Yb(Cs(e, r), n);
};
ze[ie.DATA_EXIST] = function(t11, e) {
  var r = t11.field;
  return t11.operator, Ub(Cs(e, r));
};
ze[ie.UNDIRECTED_EDGE] = function(t11, e) {
  var r = t11.nodes[0], n = t11.nodes[1], a = e.source(), i = e.target();
  return Be(r, a) && Be(n, i) || Be(n, a) && Be(r, i);
};
ze[ie.NODE_NEIGHBOR] = function(t11, e) {
  return Be(t11.node, e) && e.neighborhood().some(function(r) {
    return r.isNode() && Be(t11.neighbor, r);
  });
};
ze[ie.DIRECTED_EDGE] = function(t11, e) {
  return Be(t11.source, e.source()) && Be(t11.target, e.target());
};
ze[ie.NODE_SOURCE] = function(t11, e) {
  return Be(t11.source, e) && e.outgoers().some(function(r) {
    return r.isNode() && Be(t11.target, r);
  });
};
ze[ie.NODE_TARGET] = function(t11, e) {
  return Be(t11.target, e) && e.incomers().some(function(r) {
    return r.isNode() && Be(t11.source, r);
  });
};
ze[ie.CHILD] = function(t11, e) {
  return Be(t11.child, e) && Be(t11.parent, e.parent());
};
ze[ie.PARENT] = function(t11, e) {
  return Be(t11.parent, e) && e.children().some(function(r) {
    return Be(t11.child, r);
  });
};
ze[ie.DESCENDANT] = function(t11, e) {
  return Be(t11.descendant, e) && e.ancestors().some(function(r) {
    return Be(t11.ancestor, r);
  });
};
ze[ie.ANCESTOR] = function(t11, e) {
  return Be(t11.ancestor, e) && e.descendants().some(function(r) {
    return Be(t11.descendant, r);
  });
};
ze[ie.COMPOUND_SPLIT] = function(t11, e) {
  return Be(t11.subject, e) && Be(t11.left, e) && Be(t11.right, e);
};
ze[ie.TRUE] = function() {
  return true;
};
ze[ie.COLLECTION] = function(t11, e) {
  var r = t11.value;
  return r.has(e);
};
ze[ie.FILTER] = function(t11, e) {
  var r = t11.value;
  return r(e);
};
var qb = function(e) {
  var r = this;
  if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === ie.ID)
    return e.getElementById(r[0].checks[0].value).collection();
  var n = function(i) {
    for (var s = 0; s < r.length; s++) {
      var o = r[s];
      if (Be(o, i))
        return true;
    }
    return false;
  };
  return r.text() == null && (n = function() {
    return true;
  }), e.filter(n);
}, Wb = function(e) {
  for (var r = this, n = 0; n < r.length; n++) {
    var a = r[n];
    if (Be(a, e))
      return true;
  }
  return false;
}, Kb = {
  matches: Wb,
  filter: qb
}, ir = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || le(e) && e.match(/^\s*$/) || (dt(e) ? this.addQuery({
    checks: [{
      type: ie.COLLECTION,
      value: e.collection()
    }]
  }) : _e(e) ? this.addQuery({
    checks: [{
      type: ie.FILTER,
      value: e
    }]
  }) : le(e) ? this.parse(e) || (this.invalid = true) : Ge("A selector must be created from a string; found "));
}, sr = ir.prototype;
[Vb, Kb].forEach(function(t11) {
  return he(sr, t11);
});
sr.text = function() {
  return this.inputText;
};
sr.size = function() {
  return this.length;
};
sr.eq = function(t11) {
  return this[t11];
};
sr.sameText = function(t11) {
  return !this.invalid && !t11.invalid && this.text() === t11.text();
};
sr.addQuery = function(t11) {
  this[this.length++] = t11;
};
sr.selector = sr.toString;
var tr = {
  allAre: function(e) {
    var r = new ir(e);
    return this.every(function(n) {
      return r.matches(n);
    });
  },
  is: function(e) {
    var r = new ir(e);
    return this.some(function(n) {
      return r.matches(n);
    });
  },
  some: function(e, r) {
    for (var n = 0; n < this.length; n++) {
      var a = r ? e.apply(r, [this[n], n, this]) : e(this[n], n, this);
      if (a)
        return true;
    }
    return false;
  },
  every: function(e, r) {
    for (var n = 0; n < this.length; n++) {
      var a = r ? e.apply(r, [this[n], n, this]) : e(this[n], n, this);
      if (!a)
        return false;
    }
    return true;
  },
  same: function(e) {
    if (this === e)
      return true;
    e = this.cy().collection(e);
    var r = this.length, n = e.length;
    return r !== n ? false : r === 1 ? this[0] === e[0] : this.every(function(a) {
      return e.hasElementWithId(a.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(r) {
      return e.hasElementWithId(r.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var r = this.neighborhood();
    return e.every(function(n) {
      return r.hasElementWithId(n.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var r = this;
    return e.every(function(n) {
      return r.hasElementWithId(n.id());
    });
  }
};
tr.allAreNeighbours = tr.allAreNeighbors;
tr.has = tr.contains;
tr.equal = tr.equals = tr.same;
var bt = function(e, r) {
  return function(a, i, s, o) {
    var u = a, l = this, f;
    if (u == null ? f = "" : dt(u) && u.length === 1 && (f = u.id()), l.length === 1 && f) {
      var c = l[0]._private, v = c.traversalCache = c.traversalCache || {}, h = v[r] = v[r] || [], d = mr(f), g = h[d];
      return g || (h[d] = e.call(l, a, i, s, o));
    } else
      return e.call(l, a, i, s, o);
  };
}, Wr = {
  parent: function(e) {
    var r = [];
    if (this.length === 1) {
      var n = this[0]._private.parent;
      if (n)
        return n;
    }
    for (var a = 0; a < this.length; a++) {
      var i = this[a], s = i._private.parent;
      s && r.push(s);
    }
    return this.spawn(r, true).filter(e);
  },
  parents: function(e) {
    for (var r = [], n = this.parent(); n.nonempty(); ) {
      for (var a = 0; a < n.length; a++) {
        var i = n[a];
        r.push(i);
      }
      n = n.parent();
    }
    return this.spawn(r, true).filter(e);
  },
  commonAncestors: function(e) {
    for (var r, n = 0; n < this.length; n++) {
      var a = this[n], i = a.parents();
      r = r || i, r = r.intersect(i);
    }
    return r.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(r) {
      return r.isChild();
    }).filter(e);
  },
  children: bt(function(t11) {
    for (var e = [], r = 0; r < this.length; r++)
      for (var n = this[r], a = n._private.children, i = 0; i < a.length; i++)
        e.push(a[i]);
    return this.spawn(e, true).filter(t11);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var r = [];
    function n(a) {
      for (var i = 0; i < a.length; i++) {
        var s = a[i];
        r.push(s), s.children().nonempty() && n(s.children());
      }
    }
    return n(this.children()), this.spawn(r, true).filter(e);
  }
};
function Ds(t11, e, r, n) {
  for (var a = [], i = new Jr(), s = t11.cy(), o = s.hasCompoundNodes(), u = 0; u < t11.length; u++) {
    var l = t11[u];
    r ? a.push(l) : o && n(a, i, l);
  }
  for (; a.length > 0; ) {
    var f = a.shift();
    e(f), i.add(f.id()), o && n(a, i, f);
  }
  return t11;
}
function Vl(t11, e, r) {
  if (r.isParent())
    for (var n = r._private.children, a = 0; a < n.length; a++) {
      var i = n[a];
      e.has(i.id()) || t11.push(i);
    }
}
Wr.forEachDown = function(t11) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Ds(this, t11, e, Vl);
};
function Yl(t11, e, r) {
  if (r.isChild()) {
    var n = r._private.parent;
    e.has(n.id()) || t11.push(n);
  }
}
Wr.forEachUp = function(t11) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Ds(this, t11, e, Yl);
};
function Zb(t11, e, r) {
  Yl(t11, e, r), Vl(t11, e, r);
}
Wr.forEachUpAndDown = function(t11) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Ds(this, t11, e, Zb);
};
Wr.ancestors = Wr.parents;
var Bn, Ul;
Bn = Ul = {
  data: Ae.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "data",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    immutableKeys: {
      id: true,
      source: true,
      target: true,
      parent: true
    },
    updateStyle: true
  }),
  removeData: Ae.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    immutableKeys: {
      id: true,
      source: true,
      target: true,
      parent: true
    },
    updateStyle: true
  }),
  scratch: Ae.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "scratch",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeScratch: Ae.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  rscratch: Ae.data({
    field: "rscratch",
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: true
  }),
  removeRscratch: Ae.removeData({
    field: "rscratch",
    triggerEvent: false
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
Bn.attr = Bn.data;
Bn.removeAttr = Bn.removeData;
var Qb = Ul, si = {};
function Si(t11) {
  return function(e) {
    var r = this;
    if (e === void 0 && (e = true), r.length !== 0)
      if (r.isNode() && !r.removed()) {
        for (var n = 0, a = r[0], i = a._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          !e && o.isLoop() || (n += t11(a, o));
        }
        return n;
      } else
        return;
  };
}
he(si, {
  degree: Si(function(t11, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: Si(function(t11, e) {
    return e.target().same(t11) ? 1 : 0;
  }),
  outdegree: Si(function(t11, e) {
    return e.source().same(t11) ? 1 : 0;
  })
});
function Or(t11, e) {
  return function(r) {
    for (var n, a = this.nodes(), i = 0; i < a.length; i++) {
      var s = a[i], o = s[t11](r);
      o !== void 0 && (n === void 0 || e(o, n)) && (n = o);
    }
    return n;
  };
}
he(si, {
  minDegree: Or("degree", function(t11, e) {
    return t11 < e;
  }),
  maxDegree: Or("degree", function(t11, e) {
    return t11 > e;
  }),
  minIndegree: Or("indegree", function(t11, e) {
    return t11 < e;
  }),
  maxIndegree: Or("indegree", function(t11, e) {
    return t11 > e;
  }),
  minOutdegree: Or("outdegree", function(t11, e) {
    return t11 < e;
  }),
  maxOutdegree: Or("outdegree", function(t11, e) {
    return t11 > e;
  })
});
he(si, {
  totalDegree: function(e) {
    for (var r = 0, n = this.nodes(), a = 0; a < n.length; a++)
      r += n[a].degree(e);
    return r;
  }
});
var At, Xl, ql = function(e, r, n) {
  for (var a = 0; a < e.length; a++) {
    var i = e[a];
    if (!i.locked()) {
      var s = i._private.position, o = {
        x: r.x != null ? r.x - s.x : 0,
        y: r.y != null ? r.y - s.y : 0
      };
      i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, n), i.dirtyBoundingBoxCache();
    }
  }
}, _o = {
  field: "position",
  bindingEvent: "position",
  allowBinding: true,
  allowSetting: true,
  settingEvent: "position",
  settingTriggersEvent: true,
  triggerFnName: "emitAndNotify",
  allowGetting: true,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, r) {
    ql(e, r, false);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
At = Xl = {
  position: Ae.data(_o),
  silentPosition: Ae.data(he({}, _o, {
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: false,
    beforeSet: function(e, r) {
      ql(e, r, true);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, r) {
    if (Ce(e))
      r ? this.silentPosition(e) : this.position(e);
    else if (_e(e)) {
      var n = e, a = this.cy();
      a.startBatch();
      for (var i = 0; i < this.length; i++) {
        var s = this[i], o = void 0;
        (o = n(s, i)) && (r ? s.silentPosition(o) : s.position(o));
      }
      a.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, true);
  },
  shift: function(e, r, n) {
    var a;
    if (Ce(e) ? (a = {
      x: ne(e.x) ? e.x : 0,
      y: ne(e.y) ? e.y : 0
    }, n = r) : le(e) && ne(r) && (a = {
      x: 0,
      y: 0
    }, a[e] = r), a != null) {
      var i = this.cy();
      i.startBatch();
      for (var s = 0; s < this.length; s++) {
        var o = this[s];
        if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
          var u = o.position(), l = {
            x: u.x + a.x,
            y: u.y + a.y
          };
          n ? o.silentPosition(l) : o.position(l);
        }
      }
      i.endBatch();
    }
    return this;
  },
  silentShift: function(e, r) {
    return Ce(e) ? this.shift(e, true) : le(e) && ne(r) && this.shift(e, r, true), this;
  },
  renderedPosition: function(e, r) {
    var n = this[0], a = this.cy(), i = a.zoom(), s = a.pan(), o = Ce(e) ? e : void 0, u = o !== void 0 || r !== void 0 && le(e);
    if (n && n.isNode())
      if (u)
        for (var l = 0; l < this.length; l++) {
          var f = this[l];
          r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(Dl(o, i, s));
        }
      else {
        var c = n.position();
        return o = ai(c, i, s), e === void 0 ? o : o[e];
      }
    else if (!u)
      return;
    return this;
  },
  relativePosition: function(e, r) {
    var n = this[0], a = this.cy(), i = Ce(e) ? e : void 0, s = i !== void 0 || r !== void 0 && le(e), o = a.hasCompoundNodes();
    if (n && n.isNode())
      if (s)
        for (var u = 0; u < this.length; u++) {
          var l = this[u], f = o ? l.parent() : null, c = f && f.length > 0, v = c;
          c && (f = f[0]);
          var h = v ? f.position() : {
            x: 0,
            y: 0
          };
          r !== void 0 ? l.position(e, r + h[e]) : i !== void 0 && l.position({
            x: i.x + h.x,
            y: i.y + h.y
          });
        }
      else {
        var d = n.position(), g = o ? n.parent() : null, b = g && g.length > 0, p = b;
        b && (g = g[0]);
        var m = p ? g.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: d.x - m.x,
          y: d.y - m.y
        }, e === void 0 ? i : i[e];
      }
    else if (!s)
      return;
    return this;
  }
};
At.modelPosition = At.point = At.position;
At.modelPositions = At.points = At.positions;
At.renderedPoint = At.renderedPosition;
At.relativePoint = At.relativePosition;
var Jb = Xl, Vr, ur;
Vr = ur = {};
ur.renderedBoundingBox = function(t11) {
  var e = this.boundingBox(t11), r = this.cy(), n = r.zoom(), a = r.pan(), i = e.x1 * n + a.x, s = e.x2 * n + a.x, o = e.y1 * n + a.y, u = e.y2 * n + a.y;
  return {
    x1: i,
    x2: s,
    y1: o,
    y2: u,
    w: s - i,
    h: u - o
  };
};
ur.dirtyCompoundBoundsCache = function() {
  var t11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
    if (r.isParent()) {
      var n = r._private;
      n.compoundBoundsClean = false, n.bbCache = null, t11 || r.emitAndNotify("bounds");
    }
  }), this);
};
ur.updateCompoundBounds = function() {
  var t11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes())
    return this;
  if (!t11 && e.batching())
    return this;
  function r(s) {
    if (!s.isParent())
      return;
    var o = s._private, u = s.children(), l = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
      width: {
        val: s.pstyle("min-width").pfValue,
        left: s.pstyle("min-width-bias-left"),
        right: s.pstyle("min-width-bias-right")
      },
      height: {
        val: s.pstyle("min-height").pfValue,
        top: s.pstyle("min-height-bias-top"),
        bottom: s.pstyle("min-height-bias-bottom")
      }
    }, c = u.boundingBox({
      includeLabels: l,
      includeOverlays: false,
      useCache: false
    }), v = o.position;
    (c.w === 0 || c.h === 0) && (c = {
      w: s.pstyle("width").pfValue,
      h: s.pstyle("height").pfValue
    }, c.x1 = v.x - c.w / 2, c.x2 = v.x + c.w / 2, c.y1 = v.y - c.h / 2, c.y2 = v.y + c.h / 2);
    function h(x, S, L) {
      var A = 0, O = 0, N = S + L;
      return x > 0 && N > 0 && (A = S / N * x, O = L / N * x), {
        biasDiff: A,
        biasComplementDiff: O
      };
    }
    function d(x, S, L, A) {
      if (L.units === "%")
        switch (A) {
          case "width":
            return x > 0 ? L.pfValue * x : 0;
          case "height":
            return S > 0 ? L.pfValue * S : 0;
          case "average":
            return x > 0 && S > 0 ? L.pfValue * (x + S) / 2 : 0;
          case "min":
            return x > 0 && S > 0 ? x > S ? L.pfValue * S : L.pfValue * x : 0;
          case "max":
            return x > 0 && S > 0 ? x > S ? L.pfValue * x : L.pfValue * S : 0;
          default:
            return 0;
        }
      else
        return L.units === "px" ? L.pfValue : 0;
    }
    var g = f.width.left.value;
    f.width.left.units === "px" && f.width.val > 0 && (g = g * 100 / f.width.val);
    var b = f.width.right.value;
    f.width.right.units === "px" && f.width.val > 0 && (b = b * 100 / f.width.val);
    var p = f.height.top.value;
    f.height.top.units === "px" && f.height.val > 0 && (p = p * 100 / f.height.val);
    var m = f.height.bottom.value;
    f.height.bottom.units === "px" && f.height.val > 0 && (m = m * 100 / f.height.val);
    var y = h(f.width.val - c.w, g, b), E = y.biasDiff, C = y.biasComplementDiff, D = h(f.height.val - c.h, p, m), w = D.biasDiff, T = D.biasComplementDiff;
    o.autoPadding = d(c.w, c.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(c.w, f.width.val), v.x = (-E + c.x1 + c.x2 + C) / 2, o.autoHeight = Math.max(c.h, f.height.val), v.y = (-w + c.y1 + c.y2 + T) / 2;
  }
  for (var n = 0; n < this.length; n++) {
    var a = this[n], i = a._private;
    (!i.compoundBoundsClean || t11) && (r(a), e.batching() || (i.compoundBoundsClean = true));
  }
  return this;
};
var mt = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, Dt = function(e, r, n, a, i) {
  a - r === 0 || i - n === 0 || r == null || n == null || a == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = a > e.x2 ? a : e.x2, e.y1 = n < e.y1 ? n : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, vr = function(e, r) {
  return r == null ? e : Dt(e, r.x1, r.y1, r.x2, r.y2);
}, cn = function(e, r, n) {
  return St(e, r, n);
}, ha = function(e, r, n) {
  if (!r.cy().headless()) {
    var a = r._private, i = a.rstyle, s = i.arrowWidth / 2, o = r.pstyle(n + "-arrow-shape").value, u, l;
    if (o !== "none") {
      n === "source" ? (u = i.srcX, l = i.srcY) : n === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
      var f = a.arrowBounds = a.arrowBounds || {}, c = f[n] = f[n] || {};
      c.x1 = u - s, c.y1 = l - s, c.x2 = u + s, c.y2 = l + s, c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, xa(c, 1), Dt(e, c.x1, c.y1, c.x2, c.y2);
    }
  }
}, Li = function(e, r, n) {
  if (!r.cy().headless()) {
    var a;
    n ? a = n + "-" : a = "";
    var i = r._private, s = i.rstyle, o = r.pstyle(a + "label").strValue;
    if (o) {
      var u = r.pstyle("text-halign"), l = r.pstyle("text-valign"), f = cn(s, "labelWidth", n), c = cn(s, "labelHeight", n), v = cn(s, "labelX", n), h = cn(s, "labelY", n), d = r.pstyle(a + "text-margin-x").pfValue, g = r.pstyle(a + "text-margin-y").pfValue, b = r.isEdge(), p = r.pstyle(a + "text-rotation"), m = r.pstyle("text-outline-width").pfValue, y = r.pstyle("text-border-width").pfValue, E = y / 2, C = r.pstyle("text-background-padding").pfValue, D = 2, w = c, T = f, x = T / 2, S = w / 2, L, A, O, N;
      if (b)
        L = v - x, A = v + x, O = h - S, N = h + S;
      else {
        switch (u.value) {
          case "left":
            L = v - T, A = v;
            break;
          case "center":
            L = v - x, A = v + x;
            break;
          case "right":
            L = v, A = v + T;
            break;
        }
        switch (l.value) {
          case "top":
            O = h - w, N = h;
            break;
          case "center":
            O = h - S, N = h + S;
            break;
          case "bottom":
            O = h, N = h + w;
            break;
        }
      }
      L += d - Math.max(m, E) - C - D, A += d + Math.max(m, E) + C + D, O += g - Math.max(m, E) - C - D, N += g + Math.max(m, E) + C + D;
      var R = n || "main", I = i.labelBounds, k = I[R] = I[R] || {};
      k.x1 = L, k.y1 = O, k.x2 = A, k.y2 = N, k.w = A - L, k.h = N - O;
      var P = b && p.strValue === "autorotate", B = p.pfValue != null && p.pfValue !== 0;
      if (P || B) {
        var _ = P ? cn(i.rstyle, "labelAngle", n) : p.pfValue, F = Math.cos(_), G = Math.sin(_), z = (L + A) / 2, V = (O + N) / 2;
        if (!b) {
          switch (u.value) {
            case "left":
              z = A;
              break;
            case "right":
              z = L;
              break;
          }
          switch (l.value) {
            case "top":
              V = N;
              break;
            case "bottom":
              V = O;
              break;
          }
        }
        var U = function(de, re) {
          return de = de - z, re = re - V, {
            x: de * F - re * G + z,
            y: de * G + re * F + V
          };
        }, Y = U(L, O), $ = U(L, N), X = U(A, O), K = U(A, N);
        L = Math.min(Y.x, $.x, X.x, K.x), A = Math.max(Y.x, $.x, X.x, K.x), O = Math.min(Y.y, $.y, X.y, K.y), N = Math.max(Y.y, $.y, X.y, K.y);
      }
      var Z = R + "Rot", te = I[Z] = I[Z] || {};
      te.x1 = L, te.y1 = O, te.x2 = A, te.y2 = N, te.w = A - L, te.h = N - O, Dt(e, L, O, A, N), Dt(i.labelBounds.all, L, O, A, N);
    }
    return e;
  }
}, jb = function(e, r) {
  var n = e._private.cy, a = n.styleEnabled(), i = n.headless(), s = ht(), o = e._private, u = e.isNode(), l = e.isEdge(), f, c, v, h, d, g, b = o.rstyle, p = u && a ? e.pstyle("bounds-expansion").pfValue : [0], m = function(fe) {
    return fe.pstyle("display").value !== "none";
  }, y = !a || m(e) && (!l || m(e.source()) && m(e.target()));
  if (y) {
    var E = 0, C = 0;
    a && r.includeOverlays && (E = e.pstyle("overlay-opacity").value, E !== 0 && (C = e.pstyle("overlay-padding").value));
    var D = 0, w = 0;
    a && r.includeUnderlays && (D = e.pstyle("underlay-opacity").value, D !== 0 && (w = e.pstyle("underlay-padding").value));
    var T = Math.max(C, w), x = 0, S = 0;
    if (a && (x = e.pstyle("width").pfValue, S = x / 2), u && r.includeNodes) {
      var L = e.position();
      d = L.x, g = L.y;
      var A = e.outerWidth(), O = A / 2, N = e.outerHeight(), R = N / 2;
      f = d - O, c = d + O, v = g - R, h = g + R, Dt(s, f, v, c, h);
    } else if (l && r.includeEdges)
      if (a && !i) {
        var I = e.pstyle("curve-style").strValue;
        if (f = Math.min(b.srcX, b.midX, b.tgtX), c = Math.max(b.srcX, b.midX, b.tgtX), v = Math.min(b.srcY, b.midY, b.tgtY), h = Math.max(b.srcY, b.midY, b.tgtY), f -= S, c += S, v -= S, h += S, Dt(s, f, v, c, h), I === "haystack") {
          var k = b.haystackPts;
          if (k && k.length === 2) {
            if (f = k[0].x, v = k[0].y, c = k[1].x, h = k[1].y, f > c) {
              var P = f;
              f = c, c = P;
            }
            if (v > h) {
              var B = v;
              v = h, h = B;
            }
            Dt(s, f - S, v - S, c + S, h + S);
          }
        } else if (I === "bezier" || I === "unbundled-bezier" || I === "segments" || I === "taxi") {
          var _;
          switch (I) {
            case "bezier":
            case "unbundled-bezier":
              _ = b.bezierPts;
              break;
            case "segments":
            case "taxi":
              _ = b.linePts;
              break;
          }
          if (_ != null)
            for (var F = 0; F < _.length; F++) {
              var G = _[F];
              f = G.x - S, c = G.x + S, v = G.y - S, h = G.y + S, Dt(s, f, v, c, h);
            }
        }
      } else {
        var z = e.source(), V = z.position(), U = e.target(), Y = U.position();
        if (f = V.x, c = Y.x, v = V.y, h = Y.y, f > c) {
          var $ = f;
          f = c, c = $;
        }
        if (v > h) {
          var X = v;
          v = h, h = X;
        }
        f -= S, c += S, v -= S, h += S, Dt(s, f, v, c, h);
      }
    if (a && r.includeEdges && l && (ha(s, e, "mid-source"), ha(s, e, "mid-target"), ha(s, e, "source"), ha(s, e, "target")), a) {
      var K = e.pstyle("ghost").value === "yes";
      if (K) {
        var Z = e.pstyle("ghost-offset-x").pfValue, te = e.pstyle("ghost-offset-y").pfValue;
        Dt(s, s.x1 + Z, s.y1 + te, s.x2 + Z, s.y2 + te);
      }
    }
    var ve = o.bodyBounds = o.bodyBounds || {};
    xo(ve, s), Ti(ve, p), xa(ve, 1), a && (f = s.x1, c = s.x2, v = s.y1, h = s.y2, Dt(s, f - T, v - T, c + T, h + T));
    var de = o.overlayBounds = o.overlayBounds || {};
    xo(de, s), Ti(de, p), xa(de, 1);
    var re = o.labelBounds = o.labelBounds || {};
    re.all != null ? S1(re.all) : re.all = ht(), a && r.includeLabels && (r.includeMainLabels && Li(s, e, null), l && (r.includeSourceLabels && Li(s, e, "source"), r.includeTargetLabels && Li(s, e, "target")));
  }
  return s.x1 = mt(s.x1), s.y1 = mt(s.y1), s.x2 = mt(s.x2), s.y2 = mt(s.y2), s.w = mt(s.x2 - s.x1), s.h = mt(s.y2 - s.y1), s.w > 0 && s.h > 0 && y && (Ti(s, p), xa(s, 1)), s;
}, Wl = function(e) {
  var r = 0, n = function(s) {
    return (s ? 1 : 0) << r++;
  }, a = 0;
  return a += n(e.incudeNodes), a += n(e.includeEdges), a += n(e.includeLabels), a += n(e.includeMainLabels), a += n(e.includeSourceLabels), a += n(e.includeTargetLabels), a += n(e.includeOverlays), a;
}, Kl = function(e) {
  if (e.isEdge()) {
    var r = e.source().position(), n = e.target().position(), a = function(s) {
      return Math.round(s);
    };
    return Wm([a(r.x), a(r.y), a(n.x), a(n.y)]);
  } else
    return 0;
}, $o = function(e, r) {
  var n = e._private, a, i = e.isEdge(), s = r == null ? Go : Wl(r), o = s === Go, u = Kl(e), l = n.bbCachePosKey === u, f = r.useCache && l, c = function(g) {
    return g._private.bbCache == null || g._private.styleDirty;
  }, v = !f || c(e) || i && c(e.source()) || c(e.target());
  if (v ? (l || e.recalculateRenderedStyle(f), a = jb(e, Fn), n.bbCache = a, n.bbCachePosKey = u) : a = n.bbCache, !o) {
    var h = e.isNode();
    a = ht(), (r.includeNodes && h || r.includeEdges && !h) && (r.includeOverlays ? vr(a, n.overlayBounds) : vr(a, n.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? vr(a, n.labelBounds.all) : (r.includeMainLabels && vr(a, n.labelBounds.mainRot), r.includeSourceLabels && vr(a, n.labelBounds.sourceRot), r.includeTargetLabels && vr(a, n.labelBounds.targetRot))), a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
  }
  return a;
}, Fn = {
  includeNodes: true,
  includeEdges: true,
  includeLabels: true,
  includeMainLabels: true,
  includeSourceLabels: true,
  includeTargetLabels: true,
  includeOverlays: true,
  includeUnderlays: true,
  useCache: true
}, Go = Wl(Fn), zo = Qe(Fn);
ur.boundingBox = function(t11) {
  var e;
  if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t11 === void 0 || t11.useCache === void 0 || t11.useCache === true))
    t11 === void 0 ? t11 = Fn : t11 = zo(t11), e = $o(this[0], t11);
  else {
    e = ht(), t11 = t11 || Fn;
    var r = zo(t11), n = this, a = n.cy(), i = a.styleEnabled();
    if (i)
      for (var s = 0; s < n.length; s++) {
        var o = n[s], u = o._private, l = Kl(o), f = u.bbCachePosKey === l, c = r.useCache && f && !u.styleDirty;
        o.recalculateRenderedStyle(c);
      }
    this.updateCompoundBounds(!t11.useCache);
    for (var v = 0; v < n.length; v++) {
      var h = n[v];
      vr(e, $o(h, r));
    }
  }
  return e.x1 = mt(e.x1), e.y1 = mt(e.y1), e.x2 = mt(e.x2), e.y2 = mt(e.y2), e.w = mt(e.x2 - e.x1), e.h = mt(e.y2 - e.y1), e;
};
ur.dirtyBoundingBoxCache = function() {
  for (var t11 = 0; t11 < this.length; t11++) {
    var e = this[t11]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
ur.boundingBoxAt = function(t11) {
  var e = this.nodes(), r = this.cy(), n = r.hasCompoundNodes(), a = r.collection();
  if (n && (a = e.filter(function(l) {
    return l.isParent();
  }), e = e.not(a)), Ce(t11)) {
    var i = t11;
    t11 = function() {
      return i;
    };
  }
  var s = function(f, c) {
    return f._private.bbAtOldPos = t11(f, c);
  }, o = function(f) {
    return f._private.bbAtOldPos;
  };
  r.startBatch(), e.forEach(s).silentPositions(t11), n && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(true));
  var u = D1(this.boundingBox({
    useCache: false
  }));
  return e.silentPositions(o), n && (a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), a.updateCompoundBounds(true)), r.endBatch(), u;
};
Vr.boundingbox = Vr.bb = Vr.boundingBox;
Vr.renderedBoundingbox = Vr.renderedBoundingBox;
var ew = ur, mn, Kn;
mn = Kn = {};
var Zl = function(e) {
  e.uppercaseName = mo(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = mo(e.outerName), mn[e.name] = function() {
    var n = this[0], a = n._private, i = a.cy, s = i._private.styleEnabled;
    if (n)
      if (s) {
        if (n.isParent())
          return n.updateCompoundBounds(), a[e.autoName] || 0;
        var o = n.pstyle(e.name);
        switch (o.strValue) {
          case "label":
            return n.recalculateRenderedStyle(), a.rstyle[e.labelName] || 0;
          default:
            return o.pfValue;
        }
      } else
        return 1;
  }, mn["outer" + e.uppercaseName] = function() {
    var n = this[0], a = n._private, i = a.cy, s = i._private.styleEnabled;
    if (n)
      if (s) {
        var o = n[e.name](), u = n.pstyle("border-width").pfValue, l = 2 * n.padding();
        return o + u + l;
      } else
        return 1;
  }, mn["rendered" + e.uppercaseName] = function() {
    var n = this[0];
    if (n) {
      var a = n[e.name]();
      return a * this.cy().zoom();
    }
  }, mn["rendered" + e.uppercaseOuterName] = function() {
    var n = this[0];
    if (n) {
      var a = n[e.outerName]();
      return a * this.cy().zoom();
    }
  };
};
Zl({
  name: "width"
});
Zl({
  name: "height"
});
Kn.padding = function() {
  var t11 = this[0], e = t11._private;
  return t11.isParent() ? (t11.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t11.pstyle("padding").pfValue) : t11.pstyle("padding").pfValue;
};
Kn.paddedHeight = function() {
  var t11 = this[0];
  return t11.height() + 2 * t11.padding();
};
Kn.paddedWidth = function() {
  var t11 = this[0];
  return t11.width() + 2 * t11.padding();
};
var tw = Kn, rw = function(e, r) {
  if (e.isEdge())
    return r(e);
}, nw = function(e, r) {
  if (e.isEdge()) {
    var n = e.cy();
    return ai(r(e), n.zoom(), n.pan());
  }
}, aw = function(e, r) {
  if (e.isEdge()) {
    var n = e.cy(), a = n.pan(), i = n.zoom();
    return r(e).map(function(s) {
      return ai(s, i, a);
    });
  }
}, iw = function(e) {
  return e.renderer().getControlPoints(e);
}, sw = function(e) {
  return e.renderer().getSegmentPoints(e);
}, ow = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, uw = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, lw = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, Ho = {
  controlPoints: {
    get: iw,
    mult: true
  },
  segmentPoints: {
    get: sw,
    mult: true
  },
  sourceEndpoint: {
    get: ow
  },
  targetEndpoint: {
    get: uw
  },
  midpoint: {
    get: lw
  }
}, fw = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, cw = Object.keys(Ho).reduce(function(t11, e) {
  var r = Ho[e], n = fw(e);
  return t11[e] = function() {
    return rw(this, r.get);
  }, r.mult ? t11[n] = function() {
    return aw(this, r.get);
  } : t11[n] = function() {
    return nw(this, r.get);
  }, t11;
}, {}), hw = he({}, Jb, ew, tw, cw);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var Ql = function(e, r) {
  this.recycle(e, r);
};
function hn() {
  return false;
}
function va() {
  return true;
}
Ql.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, r) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = hn, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? va : hn) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var n = this.position, a = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: n.x * a + i.x,
        y: n.y * a + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = va;
    var e = this.originalEvent;
    !e || e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = va;
    var e = this.originalEvent;
    !e || e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = va, this.stopPropagation();
  },
  isDefaultPrevented: hn,
  isPropagationStopped: hn,
  isImmediatePropagationStopped: hn
};
var Jl = /^([^.]+)(\.(?:[^.]+))?$/, vw = ".*", jl = {
  qualifierCompare: function(e, r) {
    return e === r;
  },
  eventMatches: function() {
    return true;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return false;
  },
  parent: function() {
    return null;
  },
  context: null
}, Vo = Object.keys(jl), dw = {};
function oi() {
  for (var t11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dw, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < Vo.length; r++) {
    var n = Vo[r];
    this[n] = t11[n] || jl[n];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var or = oi.prototype, ef = function(e, r, n, a, i, s, o) {
  _e(a) && (i = a, a = null), o && (s == null ? s = o : s = he({}, s, o));
  for (var u = ke(n) ? n : n.split(/\s+/), l = 0; l < u.length; l++) {
    var f = u[l];
    if (!nr(f)) {
      var c = f.match(Jl);
      if (c) {
        var v = c[1], h = c[2] ? c[2] : null, d = r(e, f, v, h, a, i, s);
        if (d === false)
          break;
      }
    }
  }
}, Yo = function(e, r) {
  return e.addEventFields(e.context, r), new Ql(r.type, r);
}, gw = function(e, r, n) {
  if (Am(n)) {
    r(e, n);
    return;
  } else if (Ce(n)) {
    r(e, Yo(e, n));
    return;
  }
  for (var a = ke(n) ? n : n.split(/\s+/), i = 0; i < a.length; i++) {
    var s = a[i];
    if (!nr(s)) {
      var o = s.match(Jl);
      if (o) {
        var u = o[1], l = o[2] ? o[2] : null, f = Yo(e, {
          type: u,
          namespace: l,
          target: e.context
        });
        r(e, f);
      }
    }
  }
};
or.on = or.addListener = function(t11, e, r, n, a) {
  return ef(this, function(i, s, o, u, l, f, c) {
    _e(f) && i.listeners.push({
      event: s,
      callback: f,
      type: o,
      namespace: u,
      qualifier: l,
      conf: c
    });
  }, t11, e, r, n, a), this;
};
or.one = function(t11, e, r, n) {
  return this.on(t11, e, r, n, {
    one: true
  });
};
or.removeListener = or.off = function(t11, e, r, n) {
  var a = this;
  this.emitting !== 0 && (this.listeners = jm(this.listeners));
  for (var i = this.listeners, s = function(l) {
    var f = i[l];
    ef(a, function(c, v, h, d, g, b) {
      if ((f.type === h || t11 === "*") && (!d && f.namespace !== ".*" || f.namespace === d) && (!g || c.qualifierCompare(f.qualifier, g)) && (!b || f.callback === b))
        return i.splice(l, 1), false;
    }, t11, e, r, n);
  }, o = i.length - 1; o >= 0; o--)
    s(o);
  return this;
};
or.removeAllListeners = function() {
  return this.removeListener("*");
};
or.emit = or.trigger = function(t11, e, r) {
  var n = this.listeners, a = n.length;
  return this.emitting++, ke(e) || (e = [e]), gw(this, function(i, s) {
    r != null && (n = [{
      event: s.event,
      type: s.type,
      namespace: s.namespace,
      callback: r
    }], a = n.length);
    for (var o = function(f) {
      var c = n[f];
      if (c.type === s.type && (!c.namespace || c.namespace === s.namespace || c.namespace === vw) && i.eventMatches(i.context, c, s)) {
        var v = [s];
        e != null && t1(v, e), i.beforeEmit(i.context, c, s), c.conf && c.conf.one && (i.listeners = i.listeners.filter(function(g) {
          return g !== c;
        }));
        var h = i.callbackContext(i.context, c, s), d = c.callback.apply(h, v);
        i.afterEmit(i.context, c, s), d === false && (s.stopPropagation(), s.preventDefault());
      }
    }, u = 0; u < a; u++)
      o(u);
    i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
  }, t11), this.emitting--, this;
};
var pw = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, n) {
    var a = r.qualifier;
    return a != null ? e !== n.target && qn(n.target) && a.matches(n.target) : true;
  },
  addEventFields: function(e, r) {
    r.cy = e.cy(), r.target = e;
  },
  callbackContext: function(e, r, n) {
    return r.qualifier != null ? n.target : e;
  },
  beforeEmit: function(e, r) {
    r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
  },
  bubble: function() {
    return true;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
}, da = function(e) {
  return le(e) ? new ir(e) : e;
}, tf = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e], n = r._private;
      n.emitter || (n.emitter = new oi(pw, r));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, n) {
    for (var a = da(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, a, n);
    }
    return this;
  },
  removeListener: function(e, r, n) {
    for (var a = da(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().removeListener(e, a, n);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var r = this[e];
      r.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, r, n) {
    for (var a = da(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().one(e, a, n);
    }
    return this;
  },
  once: function(e, r, n) {
    for (var a = da(r), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, a, n, {
        once: true,
        onceCollection: this
      });
    }
  },
  emit: function(e, r) {
    for (var n = 0; n < this.length; n++) {
      var a = this[n];
      a.emitter().emit(e, r);
    }
    return this;
  },
  emitAndNotify: function(e, r) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, r), this;
  }
};
Ae.eventAliasesOn(tf);
var rf = {
  nodes: function(e) {
    return this.filter(function(r) {
      return r.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(r) {
      return r.isEdge();
    }).filter(e);
  },
  byGroup: function() {
    for (var e = this.spawn(), r = this.spawn(), n = 0; n < this.length; n++) {
      var a = this[n];
      a.isNode() ? e.push(a) : r.push(a);
    }
    return {
      nodes: e,
      edges: r
    };
  },
  filter: function(e, r) {
    if (e === void 0)
      return this;
    if (le(e) || dt(e))
      return new ir(e).filter(this);
    if (_e(e)) {
      for (var n = this.spawn(), a = this, i = 0; i < a.length; i++) {
        var s = a[i], o = r ? e.apply(r, [s, i, a]) : e(s, i, a);
        o && n.push(s);
      }
      return n;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      le(e) && (e = this.filter(e));
      for (var r = this.spawn(), n = 0; n < this.length; n++) {
        var a = this[n], i = e.has(a);
        i || r.push(a);
      }
      return r;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (le(e)) {
      var r = e;
      return this.filter(r);
    }
    for (var n = this.spawn(), a = this, i = e, s = this.length < e.length, o = s ? a : i, u = s ? i : a, l = 0; l < o.length; l++) {
      var f = o[l];
      u.has(f) && n.push(f);
    }
    return n;
  },
  xor: function(e) {
    var r = this._private.cy;
    le(e) && (e = r.$(e));
    var n = this.spawn(), a = this, i = e, s = function(u, l) {
      for (var f = 0; f < u.length; f++) {
        var c = u[f], v = c._private.data.id, h = l.hasElementWithId(v);
        h || n.push(c);
      }
    };
    return s(a, i), s(i, a), n;
  },
  diff: function(e) {
    var r = this._private.cy;
    le(e) && (e = r.$(e));
    var n = this.spawn(), a = this.spawn(), i = this.spawn(), s = this, o = e, u = function(f, c, v) {
      for (var h = 0; h < f.length; h++) {
        var d = f[h], g = d._private.data.id, b = c.hasElementWithId(g);
        b ? i.merge(d) : v.push(d);
      }
    };
    return u(s, o, n), u(o, s, a), {
      left: n,
      right: a,
      both: i
    };
  },
  add: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (le(e)) {
      var n = e;
      e = r.mutableElements().filter(n);
    }
    for (var a = this.spawnSelf(), i = 0; i < e.length; i++) {
      var s = e[i], o = !this.has(s);
      o && a.push(s);
    }
    return a;
  },
  merge: function(e) {
    var r = this._private, n = r.cy;
    if (!e)
      return this;
    if (e && le(e)) {
      var a = e;
      e = n.mutableElements().filter(a);
    }
    for (var i = r.map, s = 0; s < e.length; s++) {
      var o = e[s], u = o._private.data.id, l = !i.has(u);
      if (l) {
        var f = this.length++;
        this[f] = o, i.set(u, {
          ele: o,
          index: f
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var r = this[e], n = r.id(), a = this._private, i = a.map;
    this[e] = void 0, i.delete(n);
    var s = e === this.length - 1;
    if (this.length > 1 && !s) {
      var o = this.length - 1, u = this[o], l = u._private.data.id;
      this[o] = void 0, this[e] = u, i.set(l, {
        ele: u,
        index: e
      });
    }
    return this.length--, this;
  },
  unmergeOne: function(e) {
    e = e[0];
    var r = this._private, n = e._private.data.id, a = r.map, i = a.get(n);
    if (!i)
      return this;
    var s = i.index;
    return this.unmergeAt(s), this;
  },
  unmerge: function(e) {
    var r = this._private.cy;
    if (!e)
      return this;
    if (e && le(e)) {
      var n = e;
      e = r.mutableElements().filter(n);
    }
    for (var a = 0; a < e.length; a++)
      this.unmergeOne(e[a]);
    return this;
  },
  unmergeBy: function(e) {
    for (var r = this.length - 1; r >= 0; r--) {
      var n = this[r];
      e(n) && this.unmergeAt(r);
    }
    return this;
  },
  map: function(e, r) {
    for (var n = [], a = this, i = 0; i < a.length; i++) {
      var s = a[i], o = r ? e.apply(r, [s, i, a]) : e(s, i, a);
      n.push(o);
    }
    return n;
  },
  reduce: function(e, r) {
    for (var n = r, a = this, i = 0; i < a.length; i++)
      n = e(n, a[i], i, a);
    return n;
  },
  max: function(e, r) {
    for (var n = -1 / 0, a, i = this, s = 0; s < i.length; s++) {
      var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
      u > n && (n = u, a = o);
    }
    return {
      value: n,
      ele: a
    };
  },
  min: function(e, r) {
    for (var n = 1 / 0, a, i = this, s = 0; s < i.length; s++) {
      var o = i[s], u = r ? e.apply(r, [o, s, i]) : e(o, s, i);
      u < n && (n = u, a = o);
    }
    return {
      value: n,
      ele: a
    };
  }
}, Se = rf;
Se.u = Se["|"] = Se["+"] = Se.union = Se.or = Se.add;
Se["\\"] = Se["!"] = Se["-"] = Se.difference = Se.relativeComplement = Se.subtract = Se.not;
Se.n = Se["&"] = Se["."] = Se.and = Se.intersection = Se.intersect;
Se["^"] = Se["(+)"] = Se["(-)"] = Se.symmetricDifference = Se.symdiff = Se.xor;
Se.fnFilter = Se.filterFn = Se.stdFilter = Se.filter;
Se.complement = Se.abscomp = Se.absoluteComplement;
var yw = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
}, nf = function(e, r) {
  var n = e.cy(), a = n.hasCompoundNodes();
  function i(f) {
    var c = f.pstyle("z-compound-depth");
    return c.value === "auto" ? a ? f.zDepth() : 0 : c.value === "bottom" ? -1 : c.value === "top" ? ys : 0;
  }
  var s = i(e) - i(r);
  if (s !== 0)
    return s;
  function o(f) {
    var c = f.pstyle("z-index-compare");
    return c.value === "auto" && f.isNode() ? 1 : 0;
  }
  var u = o(e) - o(r);
  if (u !== 0)
    return u;
  var l = e.pstyle("z-index").value - r.pstyle("z-index").value;
  return l !== 0 ? l : e.poolIndex() - r.poolIndex();
}, Ha = {
  forEach: function(e, r) {
    if (_e(e))
      for (var n = this.length, a = 0; a < n; a++) {
        var i = this[a], s = r ? e.apply(r, [i, a, this]) : e(i, a, this);
        if (s === false)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], r = 0; r < this.length; r++)
      e.push(this[r]);
    return e;
  },
  slice: function(e, r) {
    var n = [], a = this.length;
    r == null && (r = a), e == null && (e = 0), e < 0 && (e = a + e), r < 0 && (r = a + r);
    for (var i = e; i >= 0 && i < r && i < a; i++)
      n.push(this[i]);
    return this.spawn(n);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!_e(e))
      return this;
    var r = this.toArray().sort(e);
    return this.spawn(r);
  },
  sortByZIndex: function() {
    return this.sort(nf);
  },
  zDepth: function() {
    var e = this[0];
    if (!!e) {
      var r = e._private, n = r.group;
      if (n === "nodes") {
        var a = r.data.parent ? e.parents().size() : 0;
        return e.isParent() ? a : ys - 1;
      } else {
        var i = r.source, s = r.target, o = i.zDepth(), u = s.zDepth();
        return Math.max(o, u, 0);
      }
    }
  }
};
Ha.each = Ha.forEach;
var mw = function() {
  var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : Ve(Symbol)) != e && Ve(Symbol.iterator) != e;
  r && (Ha[Symbol.iterator] = function() {
    var n = this, a = {
      value: void 0,
      done: false
    }, i = 0, s = this.length;
    return ll({
      next: function() {
        return i < s ? a.value = n[i++] : (a.value = void 0, a.done = true), a;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
mw();
var bw = Qe({
  nodeDimensionsIncludeLabels: false
}), Ca = {
  layoutDimensions: function(e) {
    e = bw(e);
    var r;
    if (!this.takesUpSpace())
      r = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var n = this.boundingBox();
      r = {
        w: n.w,
        h: n.h
      };
    } else
      r = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
  },
  layoutPositions: function(e, r, n) {
    var a = this.nodes().filter(function(C) {
      return !C.isParent();
    }), i = this.cy(), s = r.eles, o = function(D) {
      return D.id();
    }, u = Mn(n, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var l = function(D, w, T) {
      var x = {
        x: w.x1 + w.w / 2,
        y: w.y1 + w.h / 2
      }, S = {
        x: (T.x - x.x) * D,
        y: (T.y - x.y) * D
      };
      return {
        x: x.x + S.x,
        y: x.y + S.y
      };
    }, f = r.spacingFactor && r.spacingFactor !== 1, c = function() {
      if (!f)
        return null;
      for (var D = ht(), w = 0; w < a.length; w++) {
        var T = a[w], x = u(T, w);
        A1(D, x.x, x.y);
      }
      return D;
    }, v = c(), h = Mn(function(C, D) {
      var w = u(C, D);
      if (f) {
        var T = Math.abs(r.spacingFactor);
        w = l(T, v, w);
      }
      return r.transform != null && (w = r.transform(C, w)), w;
    }, o);
    if (r.animate) {
      for (var d = 0; d < a.length; d++) {
        var g = a[d], b = h(g, d), p = r.animateFilter == null || r.animateFilter(g, d);
        if (p) {
          var m = g.animation({
            position: b,
            duration: r.animationDuration,
            easing: r.animationEasing
          });
          e.animations.push(m);
        } else
          g.position(b);
      }
      if (r.fit) {
        var y = i.animation({
          fit: {
            boundingBox: s.boundingBoxAt(h),
            padding: r.padding
          },
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(y);
      } else if (r.zoom !== void 0 && r.pan !== void 0) {
        var E = i.animation({
          zoom: r.zoom,
          pan: r.pan,
          duration: r.animationDuration,
          easing: r.animationEasing
        });
        e.animations.push(E);
      }
      e.animations.forEach(function(C) {
        return C.play();
      }), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), jr.all(e.animations.map(function(C) {
        return C.promise();
      })).then(function() {
        e.one("layoutstop", r.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      a.positions(h), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", r.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var r = this.cy();
    return r.makeLayout(he({}, e, {
      eles: this
    }));
  }
};
Ca.createLayout = Ca.makeLayout = Ca.layout;
function af(t11, e, r) {
  var n = r._private, a = n.styleCache = n.styleCache || [], i;
  return (i = a[t11]) != null || (i = a[t11] = e(r)), i;
}
function ui(t11, e) {
  return t11 = mr(t11), function(n) {
    return af(t11, e, n);
  };
}
function li(t11, e) {
  t11 = mr(t11);
  var r = function(a) {
    return e.call(a);
  };
  return function() {
    var a = this[0];
    if (a)
      return af(t11, r, a);
  };
}
var Ke = {
  recalculateRenderedStyle: function(e) {
    var r = this.cy(), n = r.renderer(), a = r.styleEnabled();
    return n && a && n.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), r = function(i) {
      return i._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var n;
      n = this.spawnSelf().merge(this.descendants()).merge(this.parents()), n.merge(n.connectedEdges()), n.forEach(r);
    } else
      this.forEach(function(a) {
        r(a), a.connectedEdges().forEach(r);
      });
    return this;
  },
  updateStyle: function(e) {
    var r = this._private.cy;
    if (!r.styleEnabled())
      return this;
    if (r.batching()) {
      var n = r._private.batchStyleEles;
      return n.merge(this), this;
    }
    var a = r.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), a && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var s = i;
    return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
      return o._private.styleDirty = true;
    }), this;
  },
  cleanStyle: function() {
    var e = this.cy();
    if (!!e.styleEnabled())
      for (var r = 0; r < this.length; r++) {
        var n = this[r];
        n._private.styleDirty && (n._private.styleDirty = false, e.style().apply(n));
      }
  },
  parsedStyle: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, n = this[0], a = n.cy();
    if (!!a.styleEnabled() && n) {
      this.cleanStyle();
      var i = n._private.style[e];
      return i != null ? i : r ? a.style().getDefaultProperty(e) : null;
    }
  },
  numericStyle: function(e) {
    var r = this[0];
    if (!!r.cy().styleEnabled() && r) {
      var n = r.pstyle(e);
      return n.pfValue !== void 0 ? n.pfValue : n.value;
    }
  },
  numericStyleUnits: function(e) {
    var r = this[0];
    if (!!r.cy().styleEnabled() && r)
      return r.pstyle(e).units;
  },
  renderedStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var n = this[0];
    if (n)
      return r.style().getRenderedStyle(n, e);
  },
  style: function(e, r) {
    var n = this.cy();
    if (!n.styleEnabled())
      return this;
    var a = false, i = n.style();
    if (Ce(e)) {
      var s = e;
      i.applyBypass(this, s, a), this.emitAndNotify("style");
    } else if (le(e))
      if (r === void 0) {
        var o = this[0];
        return o ? i.getStylePropertyValue(o, e) : void 0;
      } else
        i.applyBypass(this, e, r, a), this.emitAndNotify("style");
    else if (e === void 0) {
      var u = this[0];
      return u ? i.getRawStyle(u) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var r = this.cy();
    if (!r.styleEnabled())
      return this;
    var n = false, a = r.style(), i = this;
    if (e === void 0)
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        a.removeAllBypasses(o, n);
      }
    else {
      e = e.split(/\s+/);
      for (var u = 0; u < i.length; u++) {
        var l = i[u];
        a.removeBypasses(l, e, n);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var r = e.hasCompoundNodes(), n = this[0];
    if (n) {
      var a = n._private, i = n.pstyle("opacity").value;
      if (!r)
        return i;
      var s = a.data.parent ? n.parents() : null;
      if (s)
        for (var o = 0; o < s.length; o++) {
          var u = s[o], l = u.pstyle("opacity").value;
          i = l * i;
        }
      return i;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return false;
    var r = this[0], n = r.cy().hasCompoundNodes();
    if (r)
      return n ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return false;
    var r = this[0];
    return !!r._private.backgrounding;
  }
};
function Ai(t11, e) {
  var r = t11._private, n = r.data.parent ? t11.parents() : null;
  if (n)
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      if (!e(i))
        return false;
    }
  return true;
}
function Ss(t11) {
  var e = t11.ok, r = t11.edgeOkViaNode || t11.ok, n = t11.parentOk || t11.ok;
  return function() {
    var a = this.cy();
    if (!a.styleEnabled())
      return true;
    var i = this[0], s = a.hasCompoundNodes();
    if (i) {
      var o = i._private;
      if (!e(i))
        return false;
      if (i.isNode())
        return !s || Ai(i, n);
      var u = o.source, l = o.target;
      return r(u) && (!s || Ai(u, r)) && (u === l || r(l) && (!s || Ai(l, r)));
    }
  };
}
var en = ui("eleTakesUpSpace", function(t11) {
  return t11.pstyle("display").value === "element" && t11.width() !== 0 && (t11.isNode() ? t11.height() !== 0 : true);
});
Ke.takesUpSpace = li("takesUpSpace", Ss({
  ok: en
}));
var ww = ui("eleInteractive", function(t11) {
  return t11.pstyle("events").value === "yes" && t11.pstyle("visibility").value === "visible" && en(t11);
}), Ew = ui("parentInteractive", function(t11) {
  return t11.pstyle("visibility").value === "visible" && en(t11);
});
Ke.interactive = li("interactive", Ss({
  ok: ww,
  parentOk: Ew,
  edgeOkViaNode: en
}));
Ke.noninteractive = function() {
  var t11 = this[0];
  if (t11)
    return !t11.interactive();
};
var xw = ui("eleVisible", function(t11) {
  return t11.pstyle("visibility").value === "visible" && t11.pstyle("opacity").pfValue !== 0 && en(t11);
}), Tw = en;
Ke.visible = li("visible", Ss({
  ok: xw,
  edgeOkViaNode: Tw
}));
Ke.hidden = function() {
  var t11 = this[0];
  if (t11)
    return !t11.visible();
};
Ke.isBundledBezier = li("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : false;
});
Ke.bypass = Ke.css = Ke.style;
Ke.renderedCss = Ke.renderedStyle;
Ke.removeBypass = Ke.removeCss = Ke.removeStyle;
Ke.pstyle = Ke.parsedStyle;
var rr = {};
function Uo(t11) {
  return function() {
    var e = arguments, r = [];
    if (e.length === 2) {
      var n = e[0], a = e[1];
      this.on(t11.event, n, a);
    } else if (e.length === 1 && _e(e[0])) {
      var i = e[0];
      this.on(t11.event, i);
    } else if (e.length === 0 || e.length === 1 && ke(e[0])) {
      for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
        var u = this[o], l = !t11.ableField || u._private[t11.ableField], f = u._private[t11.field] != t11.value;
        if (t11.overrideAble) {
          var c = t11.overrideAble(u);
          if (c !== void 0 && (l = c, !c))
            return this;
        }
        l && (u._private[t11.field] = t11.value, f && r.push(u));
      }
      var v = this.spawn(r);
      v.updateStyle(), v.emit(t11.event), s && v.emit(s);
    }
    return this;
  };
}
function tn(t11) {
  rr[t11.field] = function() {
    var e = this[0];
    if (e) {
      if (t11.overrideField) {
        var r = t11.overrideField(e);
        if (r !== void 0)
          return r;
      }
      return e._private[t11.field];
    }
  }, rr[t11.on] = Uo({
    event: t11.on,
    field: t11.field,
    ableField: t11.ableField,
    overrideAble: t11.overrideAble,
    value: true
  }), rr[t11.off] = Uo({
    event: t11.off,
    field: t11.field,
    ableField: t11.ableField,
    overrideAble: t11.overrideAble,
    value: false
  });
}
tn({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? true : void 0;
  },
  on: "lock",
  off: "unlock"
});
tn({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? false : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
tn({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? false : void 0;
  },
  on: "select",
  off: "unselect"
});
tn({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? false : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
rr.deselect = rr.unselect;
rr.grabbed = function() {
  var t11 = this[0];
  if (t11)
    return t11._private.grabbed;
};
tn({
  field: "active",
  on: "activate",
  off: "unactivate"
});
tn({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
rr.inactive = function() {
  var t11 = this[0];
  if (t11)
    return !t11._private.active;
};
var rt = {}, Xo = function(e) {
  return function(n) {
    for (var a = this, i = [], s = 0; s < a.length; s++) {
      var o = a[s];
      if (!!o.isNode()) {
        for (var u = false, l = o.connectedEdges(), f = 0; f < l.length; f++) {
          var c = l[f], v = c.source(), h = c.target();
          if (e.noIncomingEdges && h === o && v !== o || e.noOutgoingEdges && v === o && h !== o) {
            u = true;
            break;
          }
        }
        u || i.push(o);
      }
    }
    return this.spawn(i, true).filter(n);
  };
}, qo = function(e) {
  return function(r) {
    for (var n = this, a = [], i = 0; i < n.length; i++) {
      var s = n[i];
      if (!!s.isNode())
        for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
          var l = o[u], f = l.source(), c = l.target();
          e.outgoing && f === s ? (a.push(l), a.push(c)) : e.incoming && c === s && (a.push(l), a.push(f));
        }
    }
    return this.spawn(a, true).filter(r);
  };
}, Wo = function(e) {
  return function(r) {
    for (var n = this, a = [], i = {}; ; ) {
      var s = e.outgoing ? n.outgoers() : n.incomers();
      if (s.length === 0)
        break;
      for (var o = false, u = 0; u < s.length; u++) {
        var l = s[u], f = l.id();
        i[f] || (i[f] = true, a.push(l), o = true);
      }
      if (!o)
        break;
      n = s;
    }
    return this.spawn(a, true).filter(r);
  };
};
rt.clearTraversalCache = function() {
  for (var t11 = 0; t11 < this.length; t11++)
    this[t11]._private.traversalCache = null;
};
he(rt, {
  roots: Xo({
    noIncomingEdges: true
  }),
  leaves: Xo({
    noOutgoingEdges: true
  }),
  outgoers: bt(qo({
    outgoing: true
  }), "outgoers"),
  successors: Wo({
    outgoing: true
  }),
  incomers: bt(qo({
    incoming: true
  }), "incomers"),
  predecessors: Wo({
    incoming: true
  })
});
he(rt, {
  neighborhood: bt(function(t11) {
    for (var e = [], r = this.nodes(), n = 0; n < r.length; n++)
      for (var a = r[n], i = a.connectedEdges(), s = 0; s < i.length; s++) {
        var o = i[s], u = o.source(), l = o.target(), f = a === u ? l : u;
        f.length > 0 && e.push(f[0]), e.push(o[0]);
      }
    return this.spawn(e, true).filter(t11);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
rt.neighbourhood = rt.neighborhood;
rt.closedNeighbourhood = rt.closedNeighborhood;
rt.openNeighbourhood = rt.openNeighborhood;
he(rt, {
  source: bt(function(e) {
    var r = this[0], n;
    return r && (n = r._private.source || r.cy().collection()), n && e ? n.filter(e) : n;
  }, "source"),
  target: bt(function(e) {
    var r = this[0], n;
    return r && (n = r._private.target || r.cy().collection()), n && e ? n.filter(e) : n;
  }, "target"),
  sources: Ko({
    attr: "source"
  }),
  targets: Ko({
    attr: "target"
  })
});
function Ko(t11) {
  return function(r) {
    for (var n = [], a = 0; a < this.length; a++) {
      var i = this[a], s = i._private[t11.attr];
      s && n.push(s);
    }
    return this.spawn(n, true).filter(r);
  };
}
he(rt, {
  edgesWith: bt(Zo(), "edgesWith"),
  edgesTo: bt(Zo({
    thisIsSrc: true
  }), "edgesTo")
});
function Zo(t11) {
  return function(r) {
    var n = [], a = this._private.cy, i = t11 || {};
    le(r) && (r = a.$(r));
    for (var s = 0; s < r.length; s++)
      for (var o = r[s]._private.edges, u = 0; u < o.length; u++) {
        var l = o[u], f = l._private.data, c = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), v = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), h = c || v;
        !h || (i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !c || i.thisIsTgt && !v) || n.push(l);
      }
    return this.spawn(n, true);
  };
}
he(rt, {
  connectedEdges: bt(function(t11) {
    for (var e = [], r = this, n = 0; n < r.length; n++) {
      var a = r[n];
      if (!!a.isNode())
        for (var i = a._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          e.push(o);
        }
    }
    return this.spawn(e, true).filter(t11);
  }, "connectedEdges"),
  connectedNodes: bt(function(t11) {
    for (var e = [], r = this, n = 0; n < r.length; n++) {
      var a = r[n];
      !a.isEdge() || (e.push(a.source()[0]), e.push(a.target()[0]));
    }
    return this.spawn(e, true).filter(t11);
  }, "connectedNodes"),
  parallelEdges: bt(Qo(), "parallelEdges"),
  codirectedEdges: bt(Qo({
    codirected: true
  }), "codirectedEdges")
});
function Qo(t11) {
  var e = {
    codirected: false
  };
  return t11 = he({}, e, t11), function(n) {
    for (var a = [], i = this.edges(), s = t11, o = 0; o < i.length; o++)
      for (var u = i[o], l = u._private, f = l.source, c = f._private.data.id, v = l.data.target, h = f._private.edges, d = 0; d < h.length; d++) {
        var g = h[d], b = g._private.data, p = b.target, m = b.source, y = p === v && m === c, E = c === p && v === m;
        (s.codirected && y || !s.codirected && (y || E)) && a.push(g);
      }
    return this.spawn(a, true).filter(n);
  };
}
he(rt, {
  components: function(e) {
    var r = this, n = r.cy(), a = n.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
    e != null && i.empty() && (i = e.sources());
    var o = function(f, c) {
      a.merge(f), i.unmerge(f), c.merge(f);
    };
    if (i.empty())
      return r.spawn();
    var u = function() {
      var f = n.collection();
      s.push(f);
      var c = i[0];
      o(c, f), r.bfs({
        directed: false,
        roots: c,
        visit: function(h) {
          return o(h, f);
        }
      }), f.forEach(function(v) {
        v.connectedEdges().forEach(function(h) {
          r.has(h) && f.has(h.source()) && f.has(h.target()) && f.merge(h);
        });
      });
    };
    do
      u();
    while (i.length > 0);
    return s;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
rt.componentsOf = rt.components;
var Ze = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (e === void 0) {
    Ge("A collection must have a reference to the core");
    return;
  }
  var i = new It(), s = false;
  if (!r)
    r = [];
  else if (r.length > 0 && Ce(r[0]) && !qn(r[0])) {
    s = true;
    for (var o = [], u = new Jr(), l = 0, f = r.length; l < f; l++) {
      var c = r[l];
      c.data == null && (c.data = {});
      var v = c.data;
      if (v.id == null)
        v.id = Tl();
      else if (e.hasElementWithId(v.id) || u.has(v.id))
        continue;
      var h = new ni(e, c, false);
      o.push(h), u.add(v.id);
    }
    r = o;
  }
  this.length = 0;
  for (var d = 0, g = r.length; d < g; d++) {
    var b = r[d][0];
    if (b != null) {
      var p = b._private.data.id;
      (!n || !i.has(p)) && (n && i.set(p, {
        index: this.length,
        ele: b
      }), this[this.length] = b, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(m) {
      this.lazyMap = m;
    },
    rebuildMap: function() {
      for (var y = this.lazyMap = new It(), E = this.eles, C = 0; C < E.length; C++) {
        var D = E[C];
        y.set(D.id(), {
          index: C,
          ele: D
        });
      }
    }
  }, n && (this._private.map = i), s && !a && this.restore();
}, Pe = ni.prototype = Ze.prototype = Object.create(Array.prototype);
Pe.instanceString = function() {
  return "collection";
};
Pe.spawn = function(t11, e) {
  return new Ze(this.cy(), t11, e);
};
Pe.spawnSelf = function() {
  return this.spawn(this);
};
Pe.cy = function() {
  return this._private.cy;
};
Pe.renderer = function() {
  return this._private.cy.renderer();
};
Pe.element = function() {
  return this[0];
};
Pe.collection = function() {
  return cl(this) ? this : new Ze(this._private.cy, [this]);
};
Pe.unique = function() {
  return new Ze(this._private.cy, this, true);
};
Pe.hasElementWithId = function(t11) {
  return t11 = "" + t11, this._private.map.has(t11);
};
Pe.getElementById = function(t11) {
  t11 = "" + t11;
  var e = this._private.cy, r = this._private.map.get(t11);
  return r ? r.ele : new Ze(e);
};
Pe.$id = Pe.getElementById;
Pe.poolIndex = function() {
  var t11 = this._private.cy, e = t11._private.elements, r = this[0]._private.data.id;
  return e._private.map.get(r).index;
};
Pe.indexOf = function(t11) {
  var e = t11[0]._private.data.id;
  return this._private.map.get(e).index;
};
Pe.indexOfId = function(t11) {
  return t11 = "" + t11, this._private.map.get(t11).index;
};
Pe.json = function(t11) {
  var e = this.element(), r = this.cy();
  if (e == null && t11)
    return this;
  if (e != null) {
    var n = e._private;
    if (Ce(t11)) {
      if (r.startBatch(), t11.data) {
        e.data(t11.data);
        var a = n.data;
        if (e.isEdge()) {
          var i = false, s = {}, o = t11.data.source, u = t11.data.target;
          o != null && o != a.source && (s.source = "" + o, i = true), u != null && u != a.target && (s.target = "" + u, i = true), i && (e = e.move(s));
        } else {
          var l = "parent" in t11.data, f = t11.data.parent;
          l && (f != null || a.parent != null) && f != a.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = e.move({
            parent: f
          }));
        }
      }
      t11.position && e.position(t11.position);
      var c = function(g, b, p) {
        var m = t11[g];
        m != null && m !== n[g] && (m ? e[b]() : e[p]());
      };
      return c("removed", "remove", "restore"), c("selected", "select", "unselect"), c("selectable", "selectify", "unselectify"), c("locked", "lock", "unlock"), c("grabbable", "grabify", "ungrabify"), c("pannable", "panify", "unpanify"), t11.classes != null && e.classes(t11.classes), r.endBatch(), this;
    } else if (t11 === void 0) {
      var v = {
        data: Ot(n.data),
        position: Ot(n.position),
        group: n.group,
        removed: n.removed,
        selected: n.selected,
        selectable: n.selectable,
        locked: n.locked,
        grabbable: n.grabbable,
        pannable: n.pannable,
        classes: null
      };
      v.classes = "";
      var h = 0;
      return n.classes.forEach(function(d) {
        return v.classes += h++ === 0 ? d : " " + d;
      }), v;
    }
  }
};
Pe.jsons = function() {
  for (var t11 = [], e = 0; e < this.length; e++) {
    var r = this[e], n = r.json();
    t11.push(n);
  }
  return t11;
};
Pe.clone = function() {
  for (var t11 = this.cy(), e = [], r = 0; r < this.length; r++) {
    var n = this[r], a = n.json(), i = new ni(t11, a, false);
    e.push(i);
  }
  return new Ze(t11, e);
};
Pe.copy = Pe.clone;
Pe.restore = function() {
  for (var t11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, r = this, n = r.cy(), a = n._private, i = [], s = [], o, u = 0, l = r.length; u < l; u++) {
    var f = r[u];
    e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
  }
  o = i.concat(s);
  var c, v = function() {
    o.splice(c, 1), c--;
  };
  for (c = 0; c < o.length; c++) {
    var h = o[c], d = h._private, g = d.data;
    if (h.clearTraversalCache(), !(!e && !d.removed)) {
      if (g.id === void 0)
        g.id = Tl();
      else if (ne(g.id))
        g.id = "" + g.id;
      else if (nr(g.id) || !le(g.id)) {
        Ge("Can not create element with invalid string ID `" + g.id + "`"), v();
        continue;
      } else if (n.hasElementWithId(g.id)) {
        Ge("Can not create second element with ID `" + g.id + "`"), v();
        continue;
      }
    }
    var b = g.id;
    if (h.isNode()) {
      var p = d.position;
      p.x == null && (p.x = 0), p.y == null && (p.y = 0);
    }
    if (h.isEdge()) {
      for (var m = h, y = ["source", "target"], E = y.length, C = false, D = 0; D < E; D++) {
        var w = y[D], T = g[w];
        ne(T) && (T = g[w] = "" + g[w]), T == null || T === "" ? (Ge("Can not create edge `" + b + "` with unspecified " + w), C = true) : n.hasElementWithId(T) || (Ge("Can not create edge `" + b + "` with nonexistant " + w + " `" + T + "`"), C = true);
      }
      if (C) {
        v();
        continue;
      }
      var x = n.getElementById(g.source), S = n.getElementById(g.target);
      x.same(S) ? x._private.edges.push(m) : (x._private.edges.push(m), S._private.edges.push(m)), m._private.source = x, m._private.target = S;
    }
    d.map = new It(), d.map.set(b, {
      ele: h,
      index: 0
    }), d.removed = false, e && n.addToPool(h);
  }
  for (var L = 0; L < i.length; L++) {
    var A = i[L], O = A._private.data;
    ne(O.parent) && (O.parent = "" + O.parent);
    var N = O.parent, R = N != null;
    if (R || A._private.parent) {
      var I = A._private.parent ? n.collection().merge(A._private.parent) : n.getElementById(N);
      if (I.empty())
        O.parent = void 0;
      else if (I[0].removed())
        Ne("Node added with missing parent, reference to parent removed"), O.parent = void 0, A._private.parent = null;
      else {
        for (var k = false, P = I; !P.empty(); ) {
          if (A.same(P)) {
            k = true, O.parent = void 0;
            break;
          }
          P = P.parent();
        }
        k || (I[0]._private.children.push(A), A._private.parent = I[0], a.hasCompoundNodes = true);
      }
    }
  }
  if (o.length > 0) {
    for (var B = o.length === r.length ? r : new Ze(n, o), _ = 0; _ < B.length; _++) {
      var F = B[_];
      F.isNode() || (F.parallelEdges().clearTraversalCache(), F.source().clearTraversalCache(), F.target().clearTraversalCache());
    }
    var G;
    a.hasCompoundNodes ? G = n.collection().merge(B).merge(B.connectedNodes()).merge(B.parent()) : G = B, G.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t11), t11 ? B.emitAndNotify("add") : e && B.emit("add");
  }
  return r;
};
Pe.removed = function() {
  var t11 = this[0];
  return t11 && t11._private.removed;
};
Pe.inside = function() {
  var t11 = this[0];
  return t11 && !t11._private.removed;
};
Pe.remove = function() {
  var t11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, r = this, n = [], a = {}, i = r._private.cy;
  function s(N) {
    for (var R = N._private.edges, I = 0; I < R.length; I++)
      u(R[I]);
  }
  function o(N) {
    for (var R = N._private.children, I = 0; I < R.length; I++)
      u(R[I]);
  }
  function u(N) {
    var R = a[N.id()];
    e && N.removed() || R || (a[N.id()] = true, N.isNode() ? (n.push(N), s(N), o(N)) : n.unshift(N));
  }
  for (var l = 0, f = r.length; l < f; l++) {
    var c = r[l];
    u(c);
  }
  function v(N, R) {
    var I = N._private.edges;
    ar(I, R), N.clearTraversalCache();
  }
  function h(N) {
    N.clearTraversalCache();
  }
  var d = [];
  d.ids = {};
  function g(N, R) {
    R = R[0], N = N[0];
    var I = N._private.children, k = N.id();
    ar(I, R), R._private.parent = null, d.ids[k] || (d.ids[k] = true, d.push(N));
  }
  r.dirtyCompoundBoundsCache(), e && i.removeFromPool(n);
  for (var b = 0; b < n.length; b++) {
    var p = n[b];
    if (p.isEdge()) {
      var m = p.source()[0], y = p.target()[0];
      v(m, p), v(y, p);
      for (var E = p.parallelEdges(), C = 0; C < E.length; C++) {
        var D = E[C];
        h(D), D.isBundledBezier() && D.dirtyBoundingBoxCache();
      }
    } else {
      var w = p.parent();
      w.length !== 0 && g(w, p);
    }
    e && (p._private.removed = true);
  }
  var T = i._private.elements;
  i._private.hasCompoundNodes = false;
  for (var x = 0; x < T.length; x++) {
    var S = T[x];
    if (S.isParent()) {
      i._private.hasCompoundNodes = true;
      break;
    }
  }
  var L = new Ze(this.cy(), n);
  L.size() > 0 && (t11 ? L.emitAndNotify("remove") : e && L.emit("remove"));
  for (var A = 0; A < d.length; A++) {
    var O = d[A];
    (!e || !O.removed()) && O.updateStyle();
  }
  return L;
};
Pe.move = function(t11) {
  var e = this._private.cy, r = this, n = false, a = false, i = function(d) {
    return d == null ? d : "" + d;
  };
  if (t11.source !== void 0 || t11.target !== void 0) {
    var s = i(t11.source), o = i(t11.target), u = s != null && e.hasElementWithId(s), l = o != null && e.hasElementWithId(o);
    (u || l) && (e.batch(function() {
      r.remove(n, a), r.emitAndNotify("moveout");
      for (var h = 0; h < r.length; h++) {
        var d = r[h], g = d._private.data;
        d.isEdge() && (u && (g.source = s), l && (g.target = o));
      }
      r.restore(n, a);
    }), r.emitAndNotify("move"));
  } else if (t11.parent !== void 0) {
    var f = i(t11.parent), c = f === null || e.hasElementWithId(f);
    if (c) {
      var v = f === null ? void 0 : f;
      e.batch(function() {
        var h = r.remove(n, a);
        h.emitAndNotify("moveout");
        for (var d = 0; d < r.length; d++) {
          var g = r[d], b = g._private.data;
          g.isNode() && (b.parent = v);
        }
        h.restore(n, a);
      }), r.emitAndNotify("move");
    }
  }
  return this;
};
[Fl, Pb, Ta, tr, Wr, Qb, si, hw, tf, rf, yw, Ha, Ca, Ke, rr, rt].forEach(function(t11) {
  he(Pe, t11);
});
var Cw = {
  add: function(e) {
    var r, n = this;
    if (dt(e)) {
      var a = e;
      if (a._private.cy === n)
        r = a.restore();
      else {
        for (var i = [], s = 0; s < a.length; s++) {
          var o = a[s];
          i.push(o.json());
        }
        r = new Ze(n, i);
      }
    } else if (ke(e)) {
      var u = e;
      r = new Ze(n, u);
    } else if (Ce(e) && (ke(e.nodes) || ke(e.edges))) {
      for (var l = e, f = [], c = ["nodes", "edges"], v = 0, h = c.length; v < h; v++) {
        var d = c[v], g = l[d];
        if (ke(g))
          for (var b = 0, p = g.length; b < p; b++) {
            var m = he({
              group: d
            }, g[b]);
            f.push(m);
          }
      }
      r = new Ze(n, f);
    } else {
      var y = e;
      r = new ni(n, y).collection();
    }
    return r;
  },
  remove: function(e) {
    if (!dt(e)) {
      if (le(e)) {
        var r = e;
        e = this.$(r);
      }
    }
    return e.remove();
  }
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function Dw(t11, e, r, n) {
  var a = 4, i = 1e-3, s = 1e-7, o = 10, u = 11, l = 1 / (u - 1), f = typeof Float32Array < "u";
  if (arguments.length !== 4)
    return false;
  for (var c = 0; c < 4; ++c)
    if (typeof arguments[c] != "number" || isNaN(arguments[c]) || !isFinite(arguments[c]))
      return false;
  t11 = Math.min(t11, 1), r = Math.min(r, 1), t11 = Math.max(t11, 0), r = Math.max(r, 0);
  var v = f ? new Float32Array(u) : new Array(u);
  function h(S, L) {
    return 1 - 3 * L + 3 * S;
  }
  function d(S, L) {
    return 3 * L - 6 * S;
  }
  function g(S) {
    return 3 * S;
  }
  function b(S, L, A) {
    return ((h(L, A) * S + d(L, A)) * S + g(L)) * S;
  }
  function p(S, L, A) {
    return 3 * h(L, A) * S * S + 2 * d(L, A) * S + g(L);
  }
  function m(S, L) {
    for (var A = 0; A < a; ++A) {
      var O = p(L, t11, r);
      if (O === 0)
        return L;
      var N = b(L, t11, r) - S;
      L -= N / O;
    }
    return L;
  }
  function y() {
    for (var S = 0; S < u; ++S)
      v[S] = b(S * l, t11, r);
  }
  function E(S, L, A) {
    var O, N, R = 0;
    do
      N = L + (A - L) / 2, O = b(N, t11, r) - S, O > 0 ? A = N : L = N;
    while (Math.abs(O) > s && ++R < o);
    return N;
  }
  function C(S) {
    for (var L = 0, A = 1, O = u - 1; A !== O && v[A] <= S; ++A)
      L += l;
    --A;
    var N = (S - v[A]) / (v[A + 1] - v[A]), R = L + N * l, I = p(R, t11, r);
    return I >= i ? m(S, R) : I === 0 ? R : E(S, L, L + l);
  }
  var D = false;
  function w() {
    D = true, (t11 !== e || r !== n) && y();
  }
  var T = function(L) {
    return D || w(), t11 === e && r === n ? L : L === 0 ? 0 : L === 1 ? 1 : b(C(L), e, n);
  };
  T.getControlPoints = function() {
    return [{
      x: t11,
      y: e
    }, {
      x: r,
      y: n
    }];
  };
  var x = "generateBezier(" + [t11, e, r, n] + ")";
  return T.toString = function() {
    return x;
  }, T;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var Sw = function() {
  function t11(n) {
    return -n.tension * n.x - n.friction * n.v;
  }
  function e(n, a, i) {
    var s = {
      x: n.x + i.dx * a,
      v: n.v + i.dv * a,
      tension: n.tension,
      friction: n.friction
    };
    return {
      dx: s.v,
      dv: t11(s)
    };
  }
  function r(n, a) {
    var i = {
      dx: n.v,
      dv: t11(n)
    }, s = e(n, a * 0.5, i), o = e(n, a * 0.5, s), u = e(n, a, o), l = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
    return n.x = n.x + l * a, n.v = n.v + f * a, n;
  }
  return function n(a, i, s) {
    var o = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, u = [0], l = 0, f = 1 / 1e4, c = 16 / 1e3, v, h, d;
    for (a = parseFloat(a) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = a, o.friction = i, v = s !== null, v ? (l = n(a, i), h = l / s * c) : h = c; d = r(d || o, h), u.push(1 + d.x), l += 16, Math.abs(d.x) > f && Math.abs(d.v) > f; )
      ;
    return v ? function(g) {
      return u[g * (u.length - 1) | 0];
    } : l;
  };
}(), Re = function(e, r, n, a) {
  var i = Dw(e, r, n, a);
  return function(s, o, u) {
    return s + (o - s) * i(u);
  };
}, Da = {
  linear: function(e, r, n) {
    return e + (r - e) * n;
  },
  ease: Re(0.25, 0.1, 0.25, 1),
  "ease-in": Re(0.42, 0, 1, 1),
  "ease-out": Re(0, 0, 0.58, 1),
  "ease-in-out": Re(0.42, 0, 0.58, 1),
  "ease-in-sine": Re(0.47, 0, 0.745, 0.715),
  "ease-out-sine": Re(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": Re(0.445, 0.05, 0.55, 0.95),
  "ease-in-quad": Re(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": Re(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": Re(0.455, 0.03, 0.515, 0.955),
  "ease-in-cubic": Re(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": Re(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": Re(0.645, 0.045, 0.355, 1),
  "ease-in-quart": Re(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": Re(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": Re(0.77, 0, 0.175, 1),
  "ease-in-quint": Re(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": Re(0.23, 1, 0.32, 1),
  "ease-in-out-quint": Re(0.86, 0, 0.07, 1),
  "ease-in-expo": Re(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": Re(0.19, 1, 0.22, 1),
  "ease-in-out-expo": Re(1, 0, 0, 1),
  "ease-in-circ": Re(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": Re(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": Re(0.785, 0.135, 0.15, 0.86),
  spring: function(e, r, n) {
    if (n === 0)
      return Da.linear;
    var a = Sw(e, r, n);
    return function(i, s, o) {
      return i + (s - i) * a(o);
    };
  },
  "cubic-bezier": Re
};
function Jo(t11, e, r, n, a) {
  if (n === 1 || e === r)
    return r;
  var i = a(e, r, n);
  return t11 == null || ((t11.roundValue || t11.color) && (i = Math.round(i)), t11.min !== void 0 && (i = Math.max(i, t11.min)), t11.max !== void 0 && (i = Math.min(i, t11.max))), i;
}
function jo(t11, e) {
  return t11.pfValue != null || t11.value != null ? t11.pfValue != null && (e == null || e.type.units !== "%") ? t11.pfValue : t11.value : t11;
}
function Ir(t11, e, r, n, a) {
  var i = a != null ? a.type : null;
  r < 0 ? r = 0 : r > 1 && (r = 1);
  var s = jo(t11, a), o = jo(e, a);
  if (ne(s) && ne(o))
    return Jo(i, s, o, r, n);
  if (ke(s) && ke(o)) {
    for (var u = [], l = 0; l < o.length; l++) {
      var f = s[l], c = o[l];
      if (f != null && c != null) {
        var v = Jo(i, f, c, r, n);
        u.push(v);
      } else
        u.push(c);
    }
    return u;
  }
}
function Lw(t11, e, r, n) {
  var a = !n, i = t11._private, s = e._private, o = s.easing, u = s.startTime, l = n ? t11 : t11.cy(), f = l.style();
  if (!s.easingImpl)
    if (o == null)
      s.easingImpl = Da.linear;
    else {
      var c;
      if (le(o)) {
        var v = f.parse("transition-timing-function", o);
        c = v.value;
      } else
        c = o;
      var h, d;
      le(c) ? (h = c, d = []) : (h = c[1], d = c.slice(2).map(function(B) {
        return +B;
      })), d.length > 0 ? (h === "spring" && d.push(s.duration), s.easingImpl = Da[h].apply(null, d)) : s.easingImpl = Da[h];
    }
  var g = s.easingImpl, b;
  if (s.duration === 0 ? b = 1 : b = (r - u) / s.duration, s.applying && (b = s.progress), b < 0 ? b = 0 : b > 1 && (b = 1), s.delay == null) {
    var p = s.startPosition, m = s.position;
    if (m && a && !t11.locked()) {
      var y = {};
      vn(p.x, m.x) && (y.x = Ir(p.x, m.x, b, g)), vn(p.y, m.y) && (y.y = Ir(p.y, m.y, b, g)), t11.position(y);
    }
    var E = s.startPan, C = s.pan, D = i.pan, w = C != null && n;
    w && (vn(E.x, C.x) && (D.x = Ir(E.x, C.x, b, g)), vn(E.y, C.y) && (D.y = Ir(E.y, C.y, b, g)), t11.emit("pan"));
    var T = s.startZoom, x = s.zoom, S = x != null && n;
    S && (vn(T, x) && (i.zoom = Rn(i.minZoom, Ir(T, x, b, g), i.maxZoom)), t11.emit("zoom")), (w || S) && t11.emit("viewport");
    var L = s.style;
    if (L && L.length > 0 && a) {
      for (var A = 0; A < L.length; A++) {
        var O = L[A], N = O.name, R = O, I = s.startStyle[N], k = f.properties[I.name], P = Ir(I, R, b, g, k);
        f.overrideBypass(t11, N, P);
      }
      t11.emit("style");
    }
  }
  return s.progress = b, b;
}
function vn(t11, e) {
  return t11 == null || e == null ? false : ne(t11) && ne(e) ? true : !!(t11 && e);
}
function Aw(t11, e, r, n) {
  var a = e._private;
  a.started = true, a.startTime = r - a.progress * a.duration;
}
function eu(t11, e) {
  var r = e._private.aniEles, n = [];
  function a(f, c) {
    var v = f._private, h = v.animation.current, d = v.animation.queue, g = false;
    if (h.length === 0) {
      var b = d.shift();
      b && h.push(b);
    }
    for (var p = function(D) {
      for (var w = D.length - 1; w >= 0; w--) {
        var T = D[w];
        T();
      }
      D.splice(0, D.length);
    }, m = h.length - 1; m >= 0; m--) {
      var y = h[m], E = y._private;
      if (E.stopped) {
        h.splice(m, 1), E.hooked = false, E.playing = false, E.started = false, p(E.frames);
        continue;
      }
      !E.playing && !E.applying || (E.playing && E.applying && (E.applying = false), E.started || Aw(f, y, t11), Lw(f, y, t11, c), E.applying && (E.applying = false), p(E.frames), E.step != null && E.step(t11), y.completed() && (h.splice(m, 1), E.hooked = false, E.playing = false, E.started = false, p(E.completes)), g = true);
    }
    return !c && h.length === 0 && d.length === 0 && n.push(f), g;
  }
  for (var i = false, s = 0; s < r.length; s++) {
    var o = r[s], u = a(o);
    i = i || u;
  }
  var l = a(e, true);
  (i || l) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(n), e.emit("step");
}
var Nw = {
  animate: Ae.animate(),
  animation: Ae.animation(),
  animated: Ae.animated(),
  clearQueue: Ae.clearQueue(),
  delay: Ae.delay(),
  delayAnimation: Ae.delayAnimation(),
  stop: Ae.stop(),
  addToAnimationPool: function(e) {
    var r = this;
    !r.styleEnabled() || r._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = false;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = true, !e.styleEnabled())
      return;
    function r() {
      !e._private.animationsRunning || $a(function(i) {
        eu(i, e), r();
      });
    }
    var n = e.renderer();
    n && n.beforeRender ? n.beforeRender(function(i, s) {
      eu(s, e);
    }, n.beforeRenderPriorities.animations) : r();
  }
}, Mw = {
  qualifierCompare: function(e, r) {
    return e == null || r == null ? e == null && r == null : e.sameText(r);
  },
  eventMatches: function(e, r, n) {
    var a = r.qualifier;
    return a != null ? e !== n.target && qn(n.target) && a.matches(n.target) : true;
  },
  addEventFields: function(e, r) {
    r.cy = e, r.target = e;
  },
  callbackContext: function(e, r, n) {
    return r.qualifier != null ? n.target : e;
  }
}, ga = function(e) {
  return le(e) ? new ir(e) : e;
}, sf = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new oi(Mw, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, r, n) {
    return this.emitter().on(e, ga(r), n), this;
  },
  removeListener: function(e, r, n) {
    return this.emitter().removeListener(e, ga(r), n), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, r, n) {
    return this.emitter().one(e, ga(r), n), this;
  },
  once: function(e, r, n) {
    return this.emitter().one(e, ga(r), n), this;
  },
  emit: function(e, r) {
    return this.emitter().emit(e, r), this;
  },
  emitAndNotify: function(e, r) {
    return this.emit(e), this.notify(e, r), this;
  }
};
Ae.eventAliasesOn(sf);
var Wi = {
  png: function(e) {
    var r = this._private.renderer;
    return e = e || {}, r.png(e);
  },
  jpg: function(e) {
    var r = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
  }
};
Wi.jpeg = Wi.jpg;
var Sa = {
  layout: function(e) {
    var r = this;
    if (e == null) {
      Ge("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      Ge("A `name` must be specified to make a layout");
      return;
    }
    var n = e.name, a = r.extension("layout", n);
    if (a == null) {
      Ge("No such layout `" + n + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    le(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
    var s = new a(he({}, e, {
      cy: r,
      eles: i
    }));
    return s;
  }
};
Sa.createLayout = Sa.makeLayout = Sa.layout;
var Ow = {
  notify: function(e, r) {
    var n = this._private;
    if (this.batching()) {
      n.batchNotifications = n.batchNotifications || {};
      var a = n.batchNotifications[e] = n.batchNotifications[e] || this.collection();
      r != null && a.merge(r);
      return;
    }
    if (!!n.notificationsEnabled) {
      var i = this.renderer();
      this.destroyed() || !i || i.notify(e, r);
    }
  },
  notifications: function(e) {
    var r = this._private;
    return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(false), e(), this.notifications(true);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var r = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(n) {
        var a = e.batchNotifications[n];
        a.empty() ? r.notify(n) : r.notify(n, a);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  batchData: function(e) {
    var r = this;
    return this.batch(function() {
      for (var n = Object.keys(e), a = 0; a < n.length; a++) {
        var i = n[a], s = e[i], o = r.getElementById(i);
        o.data(s);
      }
    });
  }
}, Iw = Qe({
  hideEdgesOnViewport: false,
  textureOnViewport: false,
  motionBlur: false,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: false,
  showFps: false
}), Ki = {
  renderTo: function(e, r, n, a) {
    var i = this._private.renderer;
    return i.renderTo(e, r, n, a), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var r = this, n = r.extension("renderer", e.name);
    if (n == null) {
      Ge("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Ne("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var a = Iw(e);
    a.cy = r, r._private.renderer = new n(a), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var r = e.container();
    if (r)
      for (r._cyreg = null; r.childNodes.length > 0; )
        r.removeChild(r.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(n) {
      var a = n._private;
      a.rscratch = {}, a.rstyle = {}, a.animation.current = [], a.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
Ki.invalidateDimensions = Ki.resize;
var La = {
  collection: function(e, r) {
    return le(e) ? this.$(e) : dt(e) ? e.collection() : ke(e) ? (r || (r = {}), new Ze(this, e, r.unique, r.removed)) : new Ze(this);
  },
  nodes: function(e) {
    var r = this.$(function(n) {
      return n.isNode();
    });
    return e ? r.filter(e) : r;
  },
  edges: function(e) {
    var r = this.$(function(n) {
      return n.isEdge();
    });
    return e ? r.filter(e) : r;
  },
  $: function(e) {
    var r = this._private.elements;
    return e ? r.filter(e) : r.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
La.elements = La.filter = La.$;
var at = {}, En = "t", kw = "f";
at.apply = function(t11) {
  for (var e = this, r = e._private, n = r.cy, a = n.collection(), i = 0; i < t11.length; i++) {
    var s = t11[i], o = e.getContextMeta(s);
    if (!o.empty) {
      var u = e.getContextStyle(o), l = e.applyContextStyle(o, u, s);
      s._private.appliedInitStyle ? e.updateTransitions(s, l.diffProps) : s._private.appliedInitStyle = true;
      var f = e.updateStyleHints(s);
      f && a.push(s);
    }
  }
  return a;
};
at.getPropertiesDiff = function(t11, e) {
  var r = this, n = r._private.propDiffs = r._private.propDiffs || {}, a = t11 + "-" + e, i = n[a];
  if (i)
    return i;
  for (var s = [], o = {}, u = 0; u < r.length; u++) {
    var l = r[u], f = t11[u] === En, c = e[u] === En, v = f !== c, h = l.mappedProperties.length > 0;
    if (v || c && h) {
      var d = void 0;
      v && h || v ? d = l.properties : h && (d = l.mappedProperties);
      for (var g = 0; g < d.length; g++) {
        for (var b = d[g], p = b.name, m = false, y = u + 1; y < r.length; y++) {
          var E = r[y], C = e[y] === En;
          if (!!C && (m = E.properties[b.name] != null, m))
            break;
        }
        !o[p] && !m && (o[p] = true, s.push(p));
      }
    }
  }
  return n[a] = s, s;
};
at.getContextMeta = function(t11) {
  for (var e = this, r = "", n, a = t11._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var s = e[i], o = s.selector && s.selector.matches(t11);
    o ? r += En : r += kw;
  }
  return n = e.getPropertiesDiff(a, r), t11._private.styleCxtKey = r, {
    key: r,
    diffPropNames: n,
    empty: n.length === 0
  };
};
at.getContextStyle = function(t11) {
  var e = t11.key, r = this, n = this._private.contextStyles = this._private.contextStyles || {};
  if (n[e])
    return n[e];
  for (var a = {
    _private: {
      key: e
    }
  }, i = 0; i < r.length; i++) {
    var s = r[i], o = e[i] === En;
    if (!!o)
      for (var u = 0; u < s.properties.length; u++) {
        var l = s.properties[u];
        a[l.name] = l;
      }
  }
  return n[e] = a, a;
};
at.applyContextStyle = function(t11, e, r) {
  for (var n = this, a = t11.diffPropNames, i = {}, s = n.types, o = 0; o < a.length; o++) {
    var u = a[o], l = e[u], f = r.pstyle(u);
    if (!l)
      if (f)
        f.bypass ? l = {
          name: u,
          deleteBypassed: true
        } : l = {
          name: u,
          delete: true
        };
      else
        continue;
    if (f !== l) {
      if (l.mapped === s.fn && f != null && f.mapping != null && f.mapping.value === l.value) {
        var c = f.mapping, v = c.fnValue = l.value(r);
        if (v === c.prevFnValue)
          continue;
      }
      var h = i[u] = {
        prev: f
      };
      n.applyParsedProperty(r, l), h.next = r.pstyle(u), h.next && h.next.bypass && (h.next = h.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
at.updateStyleHints = function(t11) {
  var e = t11._private, r = this, n = r.propertyGroupNames, a = r.propertyGroupKeys, i = function(Z, te, ve) {
    return r.getPropertiesHash(Z, te, ve);
  }, s = e.styleKey;
  if (t11.removed())
    return false;
  var o = e.group === "nodes", u = t11._private.style;
  n = Object.keys(u);
  for (var l = 0; l < a.length; l++) {
    var f = a[l];
    e.styleKeys[f] = [Br, pn];
  }
  for (var c = function(Z, te) {
    return e.styleKeys[te][0] = On(Z, e.styleKeys[te][0]);
  }, v = function(Z, te) {
    return e.styleKeys[te][1] = In(Z, e.styleKeys[te][1]);
  }, h = function(Z, te) {
    c(Z, te), v(Z, te);
  }, d = function(Z, te) {
    for (var ve = 0; ve < Z.length; ve++) {
      var de = Z.charCodeAt(ve);
      c(de, te), v(de, te);
    }
  }, g = 2e9, b = function(Z) {
    return -128 < Z && Z < 128 && Math.floor(Z) !== Z ? g - (Z * 1024 | 0) : Z;
  }, p = 0; p < n.length; p++) {
    var m = n[p], y = u[m];
    if (y != null) {
      var E = this.properties[m], C = E.type, D = E.groupKey, w = void 0;
      E.hashOverride != null ? w = E.hashOverride(t11, y) : y.pfValue != null && (w = y.pfValue);
      var T = E.enums == null ? y.value : null, x = w != null, S = T != null, L = x || S, A = y.units;
      if (C.number && L && !C.multiple) {
        var O = x ? w : T;
        h(b(O), D), !x && A != null && d(A, D);
      } else
        d(y.strValue, D);
    }
  }
  for (var N = [Br, pn], R = 0; R < a.length; R++) {
    var I = a[R], k = e.styleKeys[I];
    N[0] = On(k[0], N[0]), N[1] = In(k[1], N[1]);
  }
  e.styleKey = qm(N[0], N[1]);
  var P = e.styleKeys;
  e.labelDimsKey = Wt(P.labelDimensions);
  var B = i(t11, ["label"], P.labelDimensions);
  if (e.labelKey = Wt(B), e.labelStyleKey = Wt(sa(P.commonLabel, B)), !o) {
    var _ = i(t11, ["source-label"], P.labelDimensions);
    e.sourceLabelKey = Wt(_), e.sourceLabelStyleKey = Wt(sa(P.commonLabel, _));
    var F = i(t11, ["target-label"], P.labelDimensions);
    e.targetLabelKey = Wt(F), e.targetLabelStyleKey = Wt(sa(P.commonLabel, F));
  }
  if (o) {
    var G = e.styleKeys, z = G.nodeBody, V = G.nodeBorder, U = G.backgroundImage, Y = G.compound, $ = G.pie, X = [z, V, U, Y, $].filter(function(K) {
      return K != null;
    }).reduce(sa, [Br, pn]);
    e.nodeKey = Wt(X), e.hasPie = $ != null && $[0] !== Br && $[1] !== pn;
  }
  return s !== e.styleKey;
};
at.clearStyleHints = function(t11) {
  var e = t11._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
at.applyParsedProperty = function(t11, e) {
  var r = this, n = e, a = t11._private.style, i, s = r.types, o = r.properties[n.name].type, u = n.bypass, l = a[n.name], f = l && l.bypass, c = t11._private, v = "mapping", h = function(z) {
    return z == null ? null : z.pfValue != null ? z.pfValue : z.value;
  }, d = function() {
    var z = h(l), V = h(n);
    r.checkTriggers(t11, n.name, z, V);
  };
  if (n && n.name.substr(0, 3) === "pie" && Ne("The pie style properties are deprecated.  Create charts using background images instead."), e.name === "curve-style" && t11.isEdge() && (e.value !== "bezier" && t11.isLoop() || e.value === "haystack" && (t11.source().isParent() || t11.target().isParent())) && (n = e = this.parse(e.name, "bezier", u)), n.delete)
    return a[n.name] = void 0, d(), true;
  if (n.deleteBypassed)
    return l ? l.bypass ? (l.bypassed = void 0, d(), true) : false : (d(), true);
  if (n.deleteBypass)
    return l ? l.bypass ? (a[n.name] = l.bypassed, d(), true) : false : (d(), true);
  var g = function() {
    Ne("Do not assign mappings to elements without corresponding data (i.e. ele `" + t11.id() + "` has no mapping for property `" + n.name + "` with data field `" + n.field + "`); try a `[" + n.field + "]` selector to limit scope to elements with `" + n.field + "` defined");
  };
  switch (n.mapped) {
    case s.mapData: {
      for (var b = n.field.split("."), p = c.data, m = 0; m < b.length && p; m++) {
        var y = b[m];
        p = p[y];
      }
      if (p == null)
        return g(), false;
      var E;
      if (ne(p)) {
        var C = n.fieldMax - n.fieldMin;
        C === 0 ? E = 0 : E = (p - n.fieldMin) / C;
      } else
        return Ne("Do not use continuous mappers without specifying numeric data (i.e. `" + n.field + ": " + p + "` for `" + t11.id() + "` is non-numeric)"), false;
      if (E < 0 ? E = 0 : E > 1 && (E = 1), o.color) {
        var D = n.valueMin[0], w = n.valueMax[0], T = n.valueMin[1], x = n.valueMax[1], S = n.valueMin[2], L = n.valueMax[2], A = n.valueMin[3] == null ? 1 : n.valueMin[3], O = n.valueMax[3] == null ? 1 : n.valueMax[3], N = [Math.round(D + (w - D) * E), Math.round(T + (x - T) * E), Math.round(S + (L - S) * E), Math.round(A + (O - A) * E)];
        i = {
          bypass: n.bypass,
          name: n.name,
          value: N,
          strValue: "rgb(" + N[0] + ", " + N[1] + ", " + N[2] + ")"
        };
      } else if (o.number) {
        var R = n.valueMin + (n.valueMax - n.valueMin) * E;
        i = this.parse(n.name, R, n.bypass, v);
      } else
        return false;
      if (!i)
        return g(), false;
      i.mapping = n, n = i;
      break;
    }
    case s.data: {
      for (var I = n.field.split("."), k = c.data, P = 0; P < I.length && k; P++) {
        var B = I[P];
        k = k[B];
      }
      if (k != null && (i = this.parse(n.name, k, n.bypass, v)), !i)
        return g(), false;
      i.mapping = n, n = i;
      break;
    }
    case s.fn: {
      var _ = n.value, F = n.fnValue != null ? n.fnValue : _(t11);
      if (n.prevFnValue = F, F == null)
        return Ne("Custom function mappers may not return null (i.e. `" + n.name + "` for ele `" + t11.id() + "` is null)"), false;
      if (i = this.parse(n.name, F, n.bypass, v), !i)
        return Ne("Custom function mappers may not return invalid values for the property type (i.e. `" + n.name + "` for ele `" + t11.id() + "` is invalid)"), false;
      i.mapping = Ot(n), n = i;
      break;
    }
    case void 0:
      break;
    default:
      return false;
  }
  return u ? (f ? n.bypassed = l.bypassed : n.bypassed = l, a[n.name] = n) : f ? l.bypassed = n : a[n.name] = n, d(), true;
};
at.cleanElements = function(t11, e) {
  for (var r = 0; r < t11.length; r++) {
    var n = t11[r];
    if (this.clearStyleHints(n), n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), !e)
      n._private.style = {};
    else
      for (var a = n._private.style, i = Object.keys(a), s = 0; s < i.length; s++) {
        var o = i[s], u = a[o];
        u != null && (u.bypass ? u.bypassed = null : a[o] = null);
      }
  }
};
at.update = function() {
  var t11 = this._private.cy, e = t11.mutableElements();
  e.updateStyle();
};
at.updateTransitions = function(t11, e) {
  var r = this, n = t11._private, a = t11.pstyle("transition-property").value, i = t11.pstyle("transition-duration").pfValue, s = t11.pstyle("transition-delay").pfValue;
  if (a.length > 0 && i > 0) {
    for (var o = {}, u = false, l = 0; l < a.length; l++) {
      var f = a[l], c = t11.pstyle(f), v = e[f];
      if (!!v) {
        var h = v.prev, d = h, g = v.next != null ? v.next : c, b = false, p = void 0, m = 1e-6;
        !d || (ne(d.pfValue) && ne(g.pfValue) ? (b = g.pfValue - d.pfValue, p = d.pfValue + m * b) : ne(d.value) && ne(g.value) ? (b = g.value - d.value, p = d.value + m * b) : ke(d.value) && ke(g.value) && (b = d.value[0] !== g.value[0] || d.value[1] !== g.value[1] || d.value[2] !== g.value[2], p = d.strValue), b && (o[f] = g.strValue, this.applyBypass(t11, f, p), u = true));
      }
    }
    if (!u)
      return;
    n.transitioning = true, new jr(function(y) {
      s > 0 ? t11.delayAnimation(s).play().promise().then(y) : y();
    }).then(function() {
      return t11.animation({
        style: o,
        duration: i,
        easing: t11.pstyle("transition-timing-function").value,
        queue: false
      }).play().promise();
    }).then(function() {
      r.removeBypasses(t11, a), t11.emitAndNotify("style"), n.transitioning = false;
    });
  } else
    n.transitioning && (this.removeBypasses(t11, a), t11.emitAndNotify("style"), n.transitioning = false);
};
at.checkTrigger = function(t11, e, r, n, a, i) {
  var s = this.properties[e], o = a(s);
  o != null && o(r, n) && i(s);
};
at.checkZOrderTrigger = function(t11, e, r, n) {
  var a = this;
  this.checkTrigger(t11, e, r, n, function(i) {
    return i.triggersZOrder;
  }, function() {
    a._private.cy.notify("zorder", t11);
  });
};
at.checkBoundsTrigger = function(t11, e, r, n) {
  this.checkTrigger(t11, e, r, n, function(a) {
    return a.triggersBounds;
  }, function(a) {
    t11.dirtyCompoundBoundsCache(), t11.dirtyBoundingBoxCache(), a.triggersBoundsOfParallelBeziers && (e === "curve-style" && (r === "bezier" || n === "bezier") || e === "display" && (r === "none" || n === "none")) && t11.parallelEdges().forEach(function(i) {
      i.isBundledBezier() && i.dirtyBoundingBoxCache();
    });
  });
};
at.checkTriggers = function(t11, e, r, n) {
  t11.dirtyStyleCache(), this.checkZOrderTrigger(t11, e, r, n), this.checkBoundsTrigger(t11, e, r, n);
};
var Zn = {};
Zn.applyBypass = function(t11, e, r, n) {
  var a = this, i = [], s = true;
  if (e === "*" || e === "**") {
    if (r !== void 0)
      for (var o = 0; o < a.properties.length; o++) {
        var u = a.properties[o], l = u.name, f = this.parse(l, r, true);
        f && i.push(f);
      }
  } else if (le(e)) {
    var c = this.parse(e, r, true);
    c && i.push(c);
  } else if (Ce(e)) {
    var v = e;
    n = r;
    for (var h = Object.keys(v), d = 0; d < h.length; d++) {
      var g = h[d], b = v[g];
      if (b === void 0 && (b = v[ri(g)]), b !== void 0) {
        var p = this.parse(g, b, true);
        p && i.push(p);
      }
    }
  } else
    return false;
  if (i.length === 0)
    return false;
  for (var m = false, y = 0; y < t11.length; y++) {
    for (var E = t11[y], C = {}, D = void 0, w = 0; w < i.length; w++) {
      var T = i[w];
      if (n) {
        var x = E.pstyle(T.name);
        D = C[T.name] = {
          prev: x
        };
      }
      m = this.applyParsedProperty(E, Ot(T)) || m, n && (D.next = E.pstyle(T.name));
    }
    m && this.updateStyleHints(E), n && this.updateTransitions(E, C, s);
  }
  return m;
};
Zn.overrideBypass = function(t11, e, r) {
  e = ps(e);
  for (var n = 0; n < t11.length; n++) {
    var a = t11[n], i = a._private.style[e], s = this.properties[e].type, o = s.color, u = s.mutiple, l = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(a, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : u ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(a)), this.checkTriggers(a, e, l, r);
  }
};
Zn.removeAllBypasses = function(t11, e) {
  return this.removeBypasses(t11, this.propertyNames, e);
};
Zn.removeBypasses = function(t11, e, r) {
  for (var n = true, a = 0; a < t11.length; a++) {
    for (var i = t11[a], s = {}, o = 0; o < e.length; o++) {
      var u = e[o], l = this.properties[u], f = i.pstyle(l.name);
      if (!(!f || !f.bypass)) {
        var c = "", v = this.parse(u, c, true), h = s[l.name] = {
          prev: f
        };
        this.applyParsedProperty(i, v), h.next = i.pstyle(l.name);
      }
    }
    this.updateStyleHints(i), r && this.updateTransitions(i, s, n);
  }
};
var Ls = {};
Ls.getEmSizeInPixels = function() {
  var t11 = this.containerCss("font-size");
  return t11 != null ? parseFloat(t11) : 1;
};
Ls.containerCss = function(t11) {
  var e = this._private.cy, r = e.container();
  if (Fe && r && Fe.getComputedStyle)
    return Fe.getComputedStyle(r).getPropertyValue(t11);
};
var Rt = {};
Rt.getRenderedStyle = function(t11, e) {
  return e ? this.getStylePropertyValue(t11, e, true) : this.getRawStyle(t11, true);
};
Rt.getRawStyle = function(t11, e) {
  var r = this;
  if (t11 = t11[0], t11) {
    for (var n = {}, a = 0; a < r.properties.length; a++) {
      var i = r.properties[a], s = r.getStylePropertyValue(t11, i.name, e);
      s != null && (n[i.name] = s, n[ri(i.name)] = s);
    }
    return n;
  }
};
Rt.getIndexedStyle = function(t11, e, r, n) {
  var a = t11.pstyle(e)[r][n];
  return a != null ? a : t11.cy().style().getDefaultProperty(e)[r][0];
};
Rt.getStylePropertyValue = function(t11, e, r) {
  var n = this;
  if (t11 = t11[0], t11) {
    var a = n.properties[e];
    a.alias && (a = a.pointsTo);
    var i = a.type, s = t11.pstyle(a.name);
    if (s) {
      var o = s.value, u = s.units, l = s.strValue;
      if (r && i.number && o != null && ne(o)) {
        var f = t11.cy().zoom(), c = function(b) {
          return b * f;
        }, v = function(b, p) {
          return c(b) + p;
        }, h = ke(o), d = h ? u.every(function(g) {
          return g != null;
        }) : u != null;
        return d ? h ? o.map(function(g, b) {
          return v(g, u[b]);
        }).join(" ") : v(o, u) : h ? o.map(function(g) {
          return le(g) ? g : "" + c(g);
        }).join(" ") : "" + c(o);
      } else if (l != null)
        return l;
    }
    return null;
  }
};
Rt.getAnimationStartStyle = function(t11, e) {
  for (var r = {}, n = 0; n < e.length; n++) {
    var a = e[n], i = a.name, s = t11.pstyle(i);
    s !== void 0 && (Ce(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (r[i] = s);
  }
  return r;
};
Rt.getPropsList = function(t11) {
  var e = this, r = [], n = t11, a = e.properties;
  if (n)
    for (var i = Object.keys(n), s = 0; s < i.length; s++) {
      var o = i[s], u = n[o], l = a[o] || a[ps(o)], f = this.parse(l.name, u);
      f && r.push(f);
    }
  return r;
};
Rt.getNonDefaultPropertiesHash = function(t11, e, r) {
  var n = r.slice(), a, i, s, o, u, l;
  for (u = 0; u < e.length; u++)
    if (a = e[u], i = t11.pstyle(a, false), i != null)
      if (i.pfValue != null)
        n[0] = On(o, n[0]), n[1] = In(o, n[1]);
      else
        for (s = i.strValue, l = 0; l < s.length; l++)
          o = s.charCodeAt(l), n[0] = On(o, n[0]), n[1] = In(o, n[1]);
  return n;
};
Rt.getPropertiesHash = Rt.getNonDefaultPropertiesHash;
var fi = {};
fi.appendFromJson = function(t11) {
  for (var e = this, r = 0; r < t11.length; r++) {
    var n = t11[r], a = n.selector, i = n.style || n.css, s = Object.keys(i);
    e.selector(a);
    for (var o = 0; o < s.length; o++) {
      var u = s[o], l = i[u];
      e.css(u, l);
    }
  }
  return e;
};
fi.fromJson = function(t11) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(t11), e;
};
fi.json = function() {
  for (var t11 = [], e = this.defaultLength; e < this.length; e++) {
    for (var r = this[e], n = r.selector, a = r.properties, i = {}, s = 0; s < a.length; s++) {
      var o = a[s];
      i[o.name] = o.strValue;
    }
    t11.push({
      selector: n ? n.toString() : "core",
      style: i
    });
  }
  return t11;
};
var As = {};
As.appendFromString = function(t11) {
  var e = this, r = this, n = "" + t11, a, i, s;
  n = n.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function o() {
    n.length > a.length ? n = n.substr(a.length) : n = "";
  }
  function u() {
    i.length > s.length ? i = i.substr(s.length) : i = "";
  }
  for (; ; ) {
    var l = n.match(/^\s*$/);
    if (l)
      break;
    var f = n.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!f) {
      Ne("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + n);
      break;
    }
    a = f[0];
    var c = f[1];
    if (c !== "core") {
      var v = new ir(c);
      if (v.invalid) {
        Ne("Skipping parsing of block: Invalid selector found in string stylesheet: " + c), o();
        continue;
      }
    }
    var h = f[2], d = false;
    i = h;
    for (var g = []; ; ) {
      var b = i.match(/^\s*$/);
      if (b)
        break;
      var p = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!p) {
        Ne("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + h), d = true;
        break;
      }
      s = p[0];
      var m = p[1], y = p[2], E = e.properties[m];
      if (!E) {
        Ne("Skipping property: Invalid property name in: " + s), u();
        continue;
      }
      var C = r.parse(m, y);
      if (!C) {
        Ne("Skipping property: Invalid property definition in: " + s), u();
        continue;
      }
      g.push({
        name: m,
        val: y
      }), u();
    }
    if (d) {
      o();
      break;
    }
    r.selector(c);
    for (var D = 0; D < g.length; D++) {
      var w = g[D];
      r.css(w.name, w.val);
    }
    o();
  }
  return r;
};
As.fromString = function(t11) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(t11), e;
};
var We = {};
(function() {
  var t11 = He, e = Rm, r = Bm, n = Fm, a = _m, i = function(X) {
    return "^" + X + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, s = function(X) {
    var K = t11 + "|\\w+|" + e + "|" + r + "|" + n + "|" + a;
    return "^" + X + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t11 + ")\\s*\\,\\s*(" + t11 + ")\\s*,\\s*(" + K + ")\\s*\\,\\s*(" + K + ")\\)$";
  }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  We.types = {
    time: {
      number: true,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: true,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: true,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: true
    },
    zeroOneNumber: {
      number: true,
      min: 0,
      max: 1,
      unitless: true
    },
    zeroOneNumbers: {
      number: true,
      min: 0,
      max: 1,
      unitless: true,
      multiple: true
    },
    nOneOneNumber: {
      number: true,
      min: -1,
      max: 1,
      unitless: true
    },
    nonNegativeInt: {
      number: true,
      min: 0,
      integer: true,
      unitless: true
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: true,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: true,
      unitless: true
    },
    numbers: {
      number: true,
      unitless: true,
      multiple: true
    },
    positiveNumber: {
      number: true,
      unitless: true,
      min: 0,
      strictMin: true
    },
    size: {
      number: true,
      min: 0
    },
    bidirectionalSize: {
      number: true
    },
    bidirectionalSizeMaybePercent: {
      number: true,
      allowPercent: true
    },
    bidirectionalSizes: {
      number: true,
      multiple: true
    },
    sizeMaybePercent: {
      number: true,
      min: 0,
      allowPercent: true
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: true,
      min: 0,
      allowPercent: true,
      enums: ["auto"],
      multiple: true
    },
    bgPos: {
      number: true,
      allowPercent: true,
      multiple: true
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: true
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: true
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: true
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials"],
      multiple: true
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: true
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: true
    },
    color: {
      color: true
    },
    colors: {
      color: true,
      multiple: true
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: true
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi"]
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: true
    },
    data: {
      mapping: true,
      regex: i("data")
    },
    layoutData: {
      mapping: true,
      regex: i("layoutData")
    },
    scratch: {
      mapping: true,
      regex: i("scratch")
    },
    mapData: {
      mapping: true,
      regex: s("mapData")
    },
    mapLayoutData: {
      mapping: true,
      regex: s("mapLayoutData")
    },
    mapScratch: {
      mapping: true,
      regex: s("mapScratch")
    },
    fn: {
      mapping: true,
      fn: true
    },
    url: {
      regexes: o,
      singleRegexMatchValue: true
    },
    urls: {
      regexes: o,
      singleRegexMatchValue: true,
      multiple: true
    },
    propList: {
      propList: true
    },
    angle: {
      number: true,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: true,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: true,
      multiple: true,
      evenMultiple: true,
      min: -1,
      max: 1,
      unitless: true
    },
    edgeDistances: {
      enums: ["intersection", "node-position"]
    },
    edgeEndpoint: {
      number: true,
      multiple: true,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: true,
      validate: function(X, K) {
        switch (X.length) {
          case 2:
            return K[0] !== "deg" && K[0] !== "rad" && K[1] !== "deg" && K[1] !== "rad";
          case 1:
            return le(X[0]) || K[0] === "deg" || K[0] === "rad";
          default:
            return false;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + t11 + ")\\s*,\\s*(" + t11 + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + t11 + ")\\s*,\\s*(" + t11 + ")\\s*,\\s*(" + t11 + ")\\s*,\\s*(" + t11 + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
      ]
    },
    boundsExpansion: {
      number: true,
      multiple: true,
      min: 0,
      validate: function(X) {
        var K = X.length;
        return K === 1 || K === 2 || K === 4;
      }
    }
  };
  var u = {
    zeroNonZero: function(X, K) {
      return (X == null || K == null) && X !== K || X == 0 && K != 0 ? true : X != 0 && K == 0;
    },
    any: function(X, K) {
      return X != K;
    },
    emptyNonEmpty: function(X, K) {
      var Z = nr(X), te = nr(K);
      return Z && !te || !Z && te;
    }
  }, l = We.types, f = [{
    name: "label",
    type: l.text,
    triggersBounds: u.any,
    triggersZOrder: u.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }], c = [{
    name: "source-label",
    type: l.text,
    triggersBounds: u.any
  }, {
    name: "source-text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "source-text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "source-text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "source-text-offset",
    type: l.size,
    triggersBounds: u.any
  }], v = [{
    name: "target-label",
    type: l.text,
    triggersBounds: u.any
  }, {
    name: "target-text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "target-text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "target-text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "target-text-offset",
    type: l.size,
    triggersBounds: u.any
  }], h = [{
    name: "font-family",
    type: l.fontFamily,
    triggersBounds: u.any
  }, {
    name: "font-style",
    type: l.fontStyle,
    triggersBounds: u.any
  }, {
    name: "font-weight",
    type: l.fontWeight,
    triggersBounds: u.any
  }, {
    name: "font-size",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-transform",
    type: l.textTransform,
    triggersBounds: u.any
  }, {
    name: "text-wrap",
    type: l.textWrap,
    triggersBounds: u.any
  }, {
    name: "text-overflow-wrap",
    type: l.textOverflowWrap,
    triggersBounds: u.any
  }, {
    name: "text-max-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-outline-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "line-height",
    type: l.positiveNumber,
    triggersBounds: u.any
  }], d = [{
    name: "text-valign",
    type: l.valign,
    triggersBounds: u.any
  }, {
    name: "text-halign",
    type: l.halign,
    triggersBounds: u.any
  }, {
    name: "color",
    type: l.color
  }, {
    name: "text-outline-color",
    type: l.color
  }, {
    name: "text-outline-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-background-color",
    type: l.color
  }, {
    name: "text-background-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-border-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-border-color",
    type: l.color
  }, {
    name: "text-border-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-border-style",
    type: l.borderStyle,
    triggersBounds: u.any
  }, {
    name: "text-background-shape",
    type: l.textBackgroundShape,
    triggersBounds: u.any
  }, {
    name: "text-justification",
    type: l.justification
  }], g = [{
    name: "events",
    type: l.bool
  }, {
    name: "text-events",
    type: l.bool
  }], b = [{
    name: "display",
    type: l.display,
    triggersZOrder: u.any,
    triggersBounds: u.any,
    triggersBoundsOfParallelBeziers: true
  }, {
    name: "visibility",
    type: l.visibility,
    triggersZOrder: u.any
  }, {
    name: "opacity",
    type: l.zeroOneNumber,
    triggersZOrder: u.zeroNonZero
  }, {
    name: "text-opacity",
    type: l.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: l.size
  }, {
    name: "z-compound-depth",
    type: l.zCompoundDepth,
    triggersZOrder: u.any
  }, {
    name: "z-index-compare",
    type: l.zIndexCompare,
    triggersZOrder: u.any
  }, {
    name: "z-index",
    type: l.nonNegativeInt,
    triggersZOrder: u.any
  }], p = [{
    name: "overlay-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "overlay-color",
    type: l.color
  }, {
    name: "overlay-opacity",
    type: l.zeroOneNumber,
    triggersBounds: u.zeroNonZero
  }, {
    name: "overlay-shape",
    type: l.overlayShape,
    triggersBounds: u.any
  }], m = [{
    name: "underlay-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "underlay-color",
    type: l.color
  }, {
    name: "underlay-opacity",
    type: l.zeroOneNumber,
    triggersBounds: u.zeroNonZero
  }, {
    name: "underlay-shape",
    type: l.overlayShape,
    triggersBounds: u.any
  }], y = [{
    name: "transition-property",
    type: l.propList
  }, {
    name: "transition-duration",
    type: l.time
  }, {
    name: "transition-delay",
    type: l.time
  }, {
    name: "transition-timing-function",
    type: l.easing
  }], E = function(X, K) {
    return K.value === "label" ? -X.poolIndex() : K.pfValue;
  }, C = [{
    name: "height",
    type: l.nodeSize,
    triggersBounds: u.any,
    hashOverride: E
  }, {
    name: "width",
    type: l.nodeSize,
    triggersBounds: u.any,
    hashOverride: E
  }, {
    name: "shape",
    type: l.nodeShape,
    triggersBounds: u.any
  }, {
    name: "shape-polygon-points",
    type: l.polygonPointList,
    triggersBounds: u.any
  }, {
    name: "background-color",
    type: l.color
  }, {
    name: "background-fill",
    type: l.fill
  }, {
    name: "background-opacity",
    type: l.zeroOneNumber
  }, {
    name: "background-blacken",
    type: l.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: l.colors
  }, {
    name: "background-gradient-stop-positions",
    type: l.percentages
  }, {
    name: "background-gradient-direction",
    type: l.gradientDirection
  }, {
    name: "padding",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "padding-relative-to",
    type: l.paddingRelativeTo,
    triggersBounds: u.any
  }, {
    name: "bounds-expansion",
    type: l.boundsExpansion,
    triggersBounds: u.any
  }], D = [{
    name: "border-color",
    type: l.color
  }, {
    name: "border-opacity",
    type: l.zeroOneNumber
  }, {
    name: "border-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "border-style",
    type: l.borderStyle
  }], w = [{
    name: "background-image",
    type: l.urls
  }, {
    name: "background-image-crossorigin",
    type: l.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: l.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: l.bgContainment
  }, {
    name: "background-image-smoothing",
    type: l.bools
  }, {
    name: "background-position-x",
    type: l.bgPos
  }, {
    name: "background-position-y",
    type: l.bgPos
  }, {
    name: "background-width-relative-to",
    type: l.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: l.bgRelativeTo
  }, {
    name: "background-repeat",
    type: l.bgRepeat
  }, {
    name: "background-fit",
    type: l.bgFit
  }, {
    name: "background-clip",
    type: l.bgClip
  }, {
    name: "background-width",
    type: l.bgWH
  }, {
    name: "background-height",
    type: l.bgWH
  }, {
    name: "background-offset-x",
    type: l.bgPos
  }, {
    name: "background-offset-y",
    type: l.bgPos
  }], T = [{
    name: "position",
    type: l.position,
    triggersBounds: u.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: l.compoundIncludeLabels,
    triggersBounds: u.any
  }, {
    name: "min-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "min-width-bias-left",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-width-bias-right",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-height",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "min-height-bias-top",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-height-bias-bottom",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }], x = [{
    name: "line-style",
    type: l.lineStyle
  }, {
    name: "line-color",
    type: l.color
  }, {
    name: "line-fill",
    type: l.fill
  }, {
    name: "line-cap",
    type: l.lineCap
  }, {
    name: "line-opacity",
    type: l.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: l.numbers
  }, {
    name: "line-dash-offset",
    type: l.number
  }, {
    name: "line-gradient-stop-colors",
    type: l.colors
  }, {
    name: "line-gradient-stop-positions",
    type: l.percentages
  }, {
    name: "curve-style",
    type: l.curveStyle,
    triggersBounds: u.any,
    triggersBoundsOfParallelBeziers: true
  }, {
    name: "haystack-radius",
    type: l.zeroOneNumber,
    triggersBounds: u.any
  }, {
    name: "source-endpoint",
    type: l.edgeEndpoint,
    triggersBounds: u.any
  }, {
    name: "target-endpoint",
    type: l.edgeEndpoint,
    triggersBounds: u.any
  }, {
    name: "control-point-step-size",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "control-point-distances",
    type: l.bidirectionalSizes,
    triggersBounds: u.any
  }, {
    name: "control-point-weights",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "segment-distances",
    type: l.bidirectionalSizes,
    triggersBounds: u.any
  }, {
    name: "segment-weights",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "taxi-turn",
    type: l.bidirectionalSizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "taxi-turn-min-distance",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "taxi-direction",
    type: l.axisDirection,
    triggersBounds: u.any
  }, {
    name: "edge-distances",
    type: l.edgeDistances,
    triggersBounds: u.any
  }, {
    name: "arrow-scale",
    type: l.positiveNumber,
    triggersBounds: u.any
  }, {
    name: "loop-direction",
    type: l.angle,
    triggersBounds: u.any
  }, {
    name: "loop-sweep",
    type: l.angle,
    triggersBounds: u.any
  }, {
    name: "source-distance-from-node",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "target-distance-from-node",
    type: l.size,
    triggersBounds: u.any
  }], S = [{
    name: "ghost",
    type: l.bool,
    triggersBounds: u.any
  }, {
    name: "ghost-offset-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "ghost-offset-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "ghost-opacity",
    type: l.zeroOneNumber
  }], L = [{
    name: "selection-box-color",
    type: l.color
  }, {
    name: "selection-box-opacity",
    type: l.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: l.color
  }, {
    name: "selection-box-border-width",
    type: l.size
  }, {
    name: "active-bg-color",
    type: l.color
  }, {
    name: "active-bg-opacity",
    type: l.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: l.size
  }, {
    name: "outside-texture-bg-color",
    type: l.color
  }, {
    name: "outside-texture-bg-opacity",
    type: l.zeroOneNumber
  }], A = [];
  We.pieBackgroundN = 16, A.push({
    name: "pie-size",
    type: l.sizeMaybePercent
  });
  for (var O = 1; O <= We.pieBackgroundN; O++)
    A.push({
      name: "pie-" + O + "-background-color",
      type: l.color
    }), A.push({
      name: "pie-" + O + "-background-size",
      type: l.percent
    }), A.push({
      name: "pie-" + O + "-background-opacity",
      type: l.zeroOneNumber
    });
  var N = [], R = We.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: l.arrowShape,
    triggersBounds: u.any
  }, {
    name: "arrow-color",
    type: l.color
  }, {
    name: "arrow-fill",
    type: l.arrowFill
  }].forEach(function($) {
    R.forEach(function(X) {
      var K = X + "-" + $.name, Z = $.type, te = $.triggersBounds;
      N.push({
        name: K,
        type: Z,
        triggersBounds: te
      });
    });
  }, {});
  var I = We.properties = [].concat(g, y, b, p, m, S, d, h, f, c, v, C, D, w, A, T, x, N, L), k = We.propertyGroups = {
    behavior: g,
    transition: y,
    visibility: b,
    overlay: p,
    underlay: m,
    ghost: S,
    commonLabel: d,
    labelDimensions: h,
    mainLabel: f,
    sourceLabel: c,
    targetLabel: v,
    nodeBody: C,
    nodeBorder: D,
    backgroundImage: w,
    pie: A,
    compound: T,
    edgeLine: x,
    edgeArrow: N,
    core: L
  }, P = We.propertyGroupNames = {}, B = We.propertyGroupKeys = Object.keys(k);
  B.forEach(function($) {
    P[$] = k[$].map(function(X) {
      return X.name;
    }), k[$].forEach(function(X) {
      return X.groupKey = $;
    });
  });
  var _ = We.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  We.propertyNames = I.map(function($) {
    return $.name;
  });
  for (var F = 0; F < I.length; F++) {
    var G = I[F];
    I[G.name] = G;
  }
  for (var z = 0; z < _.length; z++) {
    var V = _[z], U = I[V.pointsTo], Y = {
      name: V.name,
      alias: true,
      pointsTo: U
    };
    I.push(Y), I[V.name] = Y;
  }
})();
We.getDefaultProperty = function(t11) {
  return this.getDefaultProperties()[t11];
};
We.getDefaultProperties = function() {
  var t11 = this._private;
  if (t11.defaultProperties != null)
    return t11.defaultProperties;
  for (var e = he({
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "bounds-expansion": 0,
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    "pie-size": "100%"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(u, l) {
    for (var f = 1; f <= We.pieBackgroundN; f++) {
      var c = l.name.replace("{{i}}", f), v = l.value;
      u[c] = v;
    }
    return u;
  }, {}), {
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "taxi-turn": "50%",
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }].reduce(function(u, l) {
    return We.arrowPrefixes.forEach(function(f) {
      var c = f + "-" + l.name, v = l.value;
      u[c] = v;
    }), u;
  }, {})), r = {}, n = 0; n < this.properties.length; n++) {
    var a = this.properties[n];
    if (!a.pointsTo) {
      var i = a.name, s = e[i], o = this.parse(i, s);
      r[i] = o;
    }
  }
  return t11.defaultProperties = r, t11.defaultProperties;
};
We.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var ci = {};
ci.parse = function(t11, e, r, n) {
  var a = this;
  if (_e(e))
    return a.parseImplWarn(t11, e, r, n);
  var i = n === "mapping" || n === true || n === false || n == null ? "dontcare" : n, s = r ? "t" : "f", o = "" + e, u = wl(t11, o, s, i), l = a.propCache = a.propCache || [], f;
  return (f = l[u]) || (f = l[u] = a.parseImplWarn(t11, e, r, n)), (r || n === "mapping") && (f = Ot(f), f && (f.value = Ot(f.value))), f;
};
ci.parseImplWarn = function(t11, e, r, n) {
  var a = this.parseImpl(t11, e, r, n);
  return !a && e != null && Ne("The style property `".concat(t11, ": ").concat(e, "` is invalid")), a && (a.name === "width" || a.name === "height") && e === "label" && Ne("The style value of `label` is deprecated for `" + a.name + "`"), a;
};
ci.parseImpl = function(t11, e, r, n) {
  var a = this;
  t11 = ps(t11);
  var i = a.properties[t11], s = e, o = a.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, t11 = i.name);
  var u = le(e);
  u && (e = e.trim());
  var l = i.type;
  if (!l)
    return null;
  if (r && (e === "" || e === null))
    return {
      name: t11,
      value: e,
      bypass: true,
      deleteBypass: true
    };
  if (_e(e))
    return {
      name: t11,
      value: e,
      strValue: "fn",
      mapped: o.fn,
      bypass: r
    };
  var f, c;
  if (!(!u || n || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (f = new RegExp(o.data.regex).exec(e))) {
      if (r)
        return false;
      var v = o.data;
      return {
        name: t11,
        value: f,
        strValue: "" + e,
        mapped: v,
        field: f[1],
        bypass: r
      };
    } else if (e.length >= 10 && e[0] === "m" && (c = new RegExp(o.mapData.regex).exec(e))) {
      if (r || l.multiple)
        return false;
      var h = o.mapData;
      if (!(l.color || l.number))
        return false;
      var d = this.parse(t11, c[4]);
      if (!d || d.mapped)
        return false;
      var g = this.parse(t11, c[5]);
      if (!g || g.mapped)
        return false;
      if (d.pfValue === g.pfValue || d.strValue === g.strValue)
        return Ne("`" + t11 + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t11 + ": " + d.strValue + "`"), this.parse(t11, d.strValue);
      if (l.color) {
        var b = d.value, p = g.value, m = b[0] === p[0] && b[1] === p[1] && b[2] === p[2] && (b[3] === p[3] || (b[3] == null || b[3] === 1) && (p[3] == null || p[3] === 1));
        if (m)
          return false;
      }
      return {
        name: t11,
        value: c,
        strValue: "" + e,
        mapped: h,
        field: c[1],
        fieldMin: parseFloat(c[2]),
        fieldMax: parseFloat(c[3]),
        valueMin: d.value,
        valueMax: g.value,
        bypass: r
      };
    }
  }
  if (l.multiple && n !== "multiple") {
    var y;
    if (u ? y = e.split(/\s+/) : ke(e) ? y = e : y = [e], l.evenMultiple && y.length % 2 !== 0)
      return null;
    for (var E = [], C = [], D = [], w = "", T = false, x = 0; x < y.length; x++) {
      var S = a.parse(t11, y[x], r, "multiple");
      T = T || le(S.value), E.push(S.value), D.push(S.pfValue != null ? S.pfValue : S.value), C.push(S.units), w += (x > 0 ? " " : "") + S.strValue;
    }
    return l.validate && !l.validate(E, C) ? null : l.singleEnum && T ? E.length === 1 && le(E[0]) ? {
      name: t11,
      value: E[0],
      strValue: E[0],
      bypass: r
    } : null : {
      name: t11,
      value: E,
      pfValue: D,
      strValue: w,
      bypass: r,
      units: C
    };
  }
  var L = function() {
    for (var K = 0; K < l.enums.length; K++) {
      var Z = l.enums[K];
      if (Z === e)
        return {
          name: t11,
          value: e,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  };
  if (l.number) {
    var A, O = "px";
    if (l.units && (A = l.units), l.implicitUnits && (O = l.implicitUnits), !l.unitless)
      if (u) {
        var N = "px|em" + (l.allowPercent ? "|\\%" : "");
        A && (N = A);
        var R = e.match("^(" + He + ")(" + N + ")?$");
        R && (e = R[1], A = R[2] || O);
      } else
        (!A || l.implicitUnits) && (A = O);
    if (e = parseFloat(e), isNaN(e) && l.enums === void 0)
      return null;
    if (isNaN(e) && l.enums !== void 0)
      return e = s, L();
    if (l.integer && !Lm(e) || l.min !== void 0 && (e < l.min || l.strictMin && e === l.min) || l.max !== void 0 && (e > l.max || l.strictMax && e === l.max))
      return null;
    var I = {
      name: t11,
      value: e,
      strValue: "" + e + (A || ""),
      units: A,
      bypass: r
    };
    return l.unitless || A !== "px" && A !== "em" ? I.pfValue = e : I.pfValue = A === "px" || !A ? e : this.getEmSizeInPixels() * e, (A === "ms" || A === "s") && (I.pfValue = A === "ms" ? e : 1e3 * e), (A === "deg" || A === "rad") && (I.pfValue = A === "rad" ? e : x1(e)), A === "%" && (I.pfValue = e / 100), I;
  } else if (l.propList) {
    var k = [], P = "" + e;
    if (P !== "none") {
      for (var B = P.split(/\s*,\s*|\s+/), _ = 0; _ < B.length; _++) {
        var F = B[_].trim();
        a.properties[F] ? k.push(F) : Ne("`" + F + "` is not a valid property name");
      }
      if (k.length === 0)
        return null;
    }
    return {
      name: t11,
      value: k,
      strValue: k.length === 0 ? "none" : k.join(" "),
      bypass: r
    };
  } else if (l.color) {
    var G = Ym(e);
    return G ? {
      name: t11,
      value: G,
      pfValue: G,
      strValue: "rgb(" + G[0] + "," + G[1] + "," + G[2] + ")",
      bypass: r
    } : null;
  } else if (l.regex || l.regexes) {
    if (l.enums) {
      var z = L();
      if (z)
        return z;
    }
    for (var V = l.regexes ? l.regexes : [l.regex], U = 0; U < V.length; U++) {
      var Y = new RegExp(V[U]), $ = Y.exec(e);
      if ($)
        return {
          name: t11,
          value: l.singleRegexMatchValue ? $[1] : $,
          strValue: "" + e,
          bypass: r
        };
    }
    return null;
  } else
    return l.string ? {
      name: t11,
      value: "" + e,
      strValue: "" + e,
      bypass: r
    } : l.enums ? L() : null;
};
var tt = function t7(e) {
  if (!(this instanceof t7))
    return new t7(e);
  if (!gs(e)) {
    Ge("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, nt = tt.prototype;
nt.instanceString = function() {
  return "style";
};
nt.clear = function() {
  for (var t11 = this._private, e = t11.cy, r = e.elements(), n = 0; n < this.length; n++)
    this[n] = void 0;
  return this.length = 0, t11.contextStyles = {}, t11.propDiffs = {}, this.cleanElements(r, true), r.forEach(function(a) {
    var i = a[0]._private;
    i.styleDirty = true, i.appliedInitStyle = false;
  }), this;
};
nt.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
nt.core = function(t11) {
  return this._private.coreStyle[t11] || this.getDefaultProperty(t11);
};
nt.selector = function(t11) {
  var e = t11 === "core" ? null : new ir(t11), r = this.length++;
  return this[r] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: r
  }, this;
};
nt.css = function() {
  var t11 = this, e = arguments;
  if (e.length === 1)
    for (var r = e[0], n = 0; n < t11.properties.length; n++) {
      var a = t11.properties[n], i = r[a.name];
      i === void 0 && (i = r[ri(a.name)]), i !== void 0 && this.cssRule(a.name, i);
    }
  else
    e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
nt.style = nt.css;
nt.cssRule = function(t11, e) {
  var r = this.parse(t11, e);
  if (r) {
    var n = this.length - 1;
    this[n].properties.push(r), this[n].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = true), r.mapped && this[n].mappedProperties.push(r);
    var a = !this[n].selector;
    a && (this._private.coreStyle[r.name] = r);
  }
  return this;
};
nt.append = function(t11) {
  return hl(t11) ? t11.appendToStyle(this) : ke(t11) ? this.appendFromJson(t11) : le(t11) && this.appendFromString(t11), this;
};
tt.fromJson = function(t11, e) {
  var r = new tt(t11);
  return r.fromJson(e), r;
};
tt.fromString = function(t11, e) {
  return new tt(t11).fromString(e);
};
[at, Zn, Ls, Rt, fi, As, We, ci].forEach(function(t11) {
  he(nt, t11);
});
tt.types = nt.types;
tt.properties = nt.properties;
tt.propertyGroups = nt.propertyGroups;
tt.propertyGroupNames = nt.propertyGroupNames;
tt.propertyGroupKeys = nt.propertyGroupKeys;
var Rw = {
  style: function(e) {
    if (e) {
      var r = this.setStyle(e);
      r.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var r = this._private;
    return hl(e) ? r.style = e.generateStyle(this) : ke(e) ? r.style = tt.fromJson(this, e) : le(e) ? r.style = tt.fromString(this, e) : r.style = tt(this), r.style;
  },
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, Pw = "single", Er = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var r = this._private;
    if (r.selectionType == null && (r.selectionType = Pw), e !== void 0)
      (e === "additive" || e === "single") && (r.selectionType = e);
    else
      return r.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, r = this._private.pan, n, a, i, s, o;
    switch (e.length) {
      case 0:
        return r;
      case 1:
        if (le(e[0]))
          return n = e[0], r[n];
        if (Ce(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], s = i.x, o = i.y, ne(s) && (r.x = s), ne(o) && (r.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        n = e[0], a = e[1], (n === "x" || n === "y") && ne(a) && (r[n] = a), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, r) {
    var n = arguments, a = this._private.pan, i, s, o, u, l;
    if (!this._private.panningEnabled)
      return this;
    switch (n.length) {
      case 1:
        Ce(e) && (o = n[0], u = o.x, l = o.y, ne(u) && (a.x += u), ne(l) && (a.y += l), this.emit("pan viewport"));
        break;
      case 2:
        i = e, s = r, (i === "x" || i === "y") && ne(s) && (a[i] += s), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  fit: function(e, r) {
    var n = this.getFitViewport(e, r);
    if (n) {
      var a = this._private;
      a.zoom = n.zoom, a.pan = n.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, r) {
    if (ne(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var n;
      if (le(e)) {
        var a = e;
        e = this.$(a);
      } else if (Mm(e)) {
        var i = e;
        n = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
      } else
        dt(e) || (e = this.mutableElements());
      if (!(dt(e) && e.empty())) {
        n = n || e.boundingBox();
        var s = this.width(), o = this.height(), u;
        if (r = ne(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(n.w) && !isNaN(n.h) && n.w > 0 && n.h > 0) {
          u = Math.min((s - 2 * r) / n.w, (o - 2 * r) / n.h), u = u > this._private.maxZoom ? this._private.maxZoom : u, u = u < this._private.minZoom ? this._private.minZoom : u;
          var l = {
            x: (s - u * (n.x1 + n.x2)) / 2,
            y: (o - u * (n.y1 + n.y2)) / 2
          };
          return {
            zoom: u,
            pan: l
          };
        }
      }
    }
  },
  zoomRange: function(e, r) {
    var n = this._private;
    if (r == null) {
      var a = e;
      e = a.min, r = a.max;
    }
    return ne(e) && ne(r) && e <= r ? (n.minZoom = e, n.maxZoom = r) : ne(e) && r === void 0 && e <= n.maxZoom ? n.minZoom = e : ne(r) && e === void 0 && r >= n.minZoom && (n.maxZoom = r), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var r = this._private, n = r.pan, a = r.zoom, i, s, o = false;
    if (r.zoomingEnabled || (o = true), ne(e) ? s = e : Ce(e) && (s = e.level, e.position != null ? i = ai(e.position, a, n) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = true)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !ne(s) || s === a || i != null && (!ne(i.x) || !ne(i.y)))
      return null;
    if (i != null) {
      var u = n, l = a, f = s, c = {
        x: -f / l * (i.x - u.x) + i.x,
        y: -f / l * (i.y - u.y) + i.y
      };
      return {
        zoomed: true,
        panned: true,
        zoom: f,
        pan: c
      };
    } else
      return {
        zoomed: true,
        panned: false,
        zoom: s,
        pan: n
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var r = this.getZoomedViewport(e), n = this._private;
    return r == null || !r.zoomed ? this : (n.zoom = r.zoom, r.panned && (n.pan.x = r.pan.x, n.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var r = this._private, n = true, a = true, i = [], s = false, o = false;
    if (!e)
      return this;
    if (ne(e.zoom) || (n = false), Ce(e.pan) || (a = false), !n && !a)
      return this;
    if (n) {
      var u = e.zoom;
      u < r.minZoom || u > r.maxZoom || !r.zoomingEnabled ? s = true : (r.zoom = u, i.push("zoom"));
    }
    if (a && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
      var l = e.pan;
      ne(l.x) && (r.pan.x = l.x, o = false), ne(l.y) && (r.pan.y = l.y, o = false), o || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var r = this.getCenterPan(e);
    return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, r) {
    if (!!this._private.panningEnabled) {
      if (le(e)) {
        var n = e;
        e = this.mutableElements().filter(n);
      } else
        dt(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var a = e.boundingBox(), i = this.width(), s = this.height();
        r = r === void 0 ? this._private.zoom : r;
        var o = {
          x: (i - r * (a.x1 + a.x2)) / 2,
          y: (s - r * (a.y1 + a.y2)) / 2
        };
        return o;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, r = e.container;
    return e.sizeCache = e.sizeCache || (r ? function() {
      var n = Fe.getComputedStyle(r), a = function(s) {
        return parseFloat(n.getPropertyValue(s));
      };
      return {
        width: r.clientWidth - a("padding-left") - a("padding-right"),
        height: r.clientHeight - a("padding-top") - a("padding-bottom")
      };
    }() : {
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, r = this._private.zoom, n = this.renderedExtent(), a = {
      x1: (n.x1 - e.x) / r,
      x2: (n.x2 - e.x) / r,
      y1: (n.y1 - e.y) / r,
      y2: (n.y2 - e.y) / r
    };
    return a.w = a.x2 - a.x1, a.h = a.y2 - a.y1, a;
  },
  renderedExtent: function() {
    var e = this.width(), r = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: r,
      w: e,
      h: r
    };
  },
  multiClickDebounceTime: function(e) {
    if (e)
      this._private.multiClickDebounceTime = e;
    else
      return this._private.multiClickDebounceTime;
    return this;
  }
};
Er.centre = Er.center;
Er.autolockNodes = Er.autolock;
Er.autoungrabifyNodes = Er.autoungrabify;
var _n = {
  data: Ae.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "data",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeData: Ae.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  }),
  scratch: Ae.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: true,
    allowSetting: true,
    settingEvent: "scratch",
    settingTriggersEvent: true,
    triggerFnName: "trigger",
    allowGetting: true,
    updateStyle: true
  }),
  removeScratch: Ae.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: true,
    updateStyle: true
  })
};
_n.attr = _n.data;
_n.removeAttr = _n.removeData;
var $n = function(e) {
  var r = this;
  e = he({}, e);
  var n = e.container;
  n && !_a(n) && _a(n[0]) && (n = n[0]);
  var a = n ? n._cyreg : null;
  a = a || {}, a && a.cy && (a.cy.destroy(), a = {});
  var i = a.readies = a.readies || [];
  n && (n._cyreg = a), a.cy = r;
  var s = Fe !== void 0 && n !== void 0 && !e.headless, o = e;
  o.layout = he({
    name: s ? "grid" : "null"
  }, o.layout), o.renderer = he({
    name: s ? "canvas" : "null"
  }, o.renderer);
  var u = function(d, g, b) {
    return g !== void 0 ? g : b !== void 0 ? b : d;
  }, l = this._private = {
    container: n,
    ready: false,
    options: o,
    elements: new Ze(this),
    listeners: [],
    aniEles: new Ze(this),
    data: o.data || {},
    scratch: {},
    layout: null,
    renderer: null,
    destroyed: false,
    notificationsEnabled: true,
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: u(true, o.zoomingEnabled),
    userZoomingEnabled: u(true, o.userZoomingEnabled),
    panningEnabled: u(true, o.panningEnabled),
    userPanningEnabled: u(true, o.userPanningEnabled),
    boxSelectionEnabled: u(true, o.boxSelectionEnabled),
    autolock: u(false, o.autolock, o.autolockNodes),
    autoungrabify: u(false, o.autoungrabify, o.autoungrabifyNodes),
    autounselectify: u(false, o.autounselectify),
    styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
    zoom: ne(o.zoom) ? o.zoom : 1,
    pan: {
      x: Ce(o.pan) && ne(o.pan.x) ? o.pan.x : 0,
      y: Ce(o.pan) && ne(o.pan.y) ? o.pan.y : 0
    },
    animation: {
      current: [],
      queue: []
    },
    hasCompoundNodes: false,
    multiClickDebounceTime: u(250, o.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
    min: o.minZoom,
    max: o.maxZoom
  });
  var f = function(d, g) {
    var b = d.some(Om);
    if (b)
      return jr.all(d).then(g);
    g(d);
  };
  l.styleEnabled && r.setStyle([]);
  var c = he({}, o, o.renderer);
  r.initRenderer(c);
  var v = function(d, g, b) {
    r.notifications(false);
    var p = r.mutableElements();
    p.length > 0 && p.remove(), d != null && (Ce(d) || ke(d)) && r.add(d), r.one("layoutready", function(y) {
      r.notifications(true), r.emit(y), r.one("load", g), r.emitAndNotify("load");
    }).one("layoutstop", function() {
      r.one("done", b), r.emit("done");
    });
    var m = he({}, r._private.options.layout);
    m.eles = r.elements(), r.layout(m).run();
  };
  f([o.style, o.elements], function(h) {
    var d = h[0], g = h[1];
    l.styleEnabled && r.style().append(d), v(g, function() {
      r.startAnimationLoop(), l.ready = true, _e(o.ready) && r.on("ready", o.ready);
      for (var b = 0; b < i.length; b++) {
        var p = i[b];
        r.on("ready", p);
      }
      a && (a.readies = []), r.emit("ready");
    }, o.done);
  });
}, Va = $n.prototype;
he(Va, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = true, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  mount: function(e) {
    if (e != null) {
      var r = this, n = r._private, a = n.options;
      return !_a(e) && _a(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), n.container = e, n.styleEnabled = true, r.invalidateSize(), r.initRenderer(he({}, a, a.renderer, {
        name: a.renderer.name === "null" ? "canvas" : a.renderer.name
      })), r.startAnimationLoop(), r.style(a.style), r.emit("mount"), r;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return Ot(this._private.options);
  },
  json: function(e) {
    var r = this, n = r._private, a = r.mutableElements(), i = function(E) {
      return r.getElementById(E.id());
    };
    if (Ce(e)) {
      if (r.startBatch(), e.elements) {
        var s = {}, o = function(E, C) {
          for (var D = [], w = [], T = 0; T < E.length; T++) {
            var x = E[T];
            if (!x.data.id) {
              Ne("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var S = "" + x.data.id, L = r.getElementById(S);
            s[S] = true, L.length !== 0 ? w.push({
              ele: L,
              json: x
            }) : (C && (x.group = C), D.push(x));
          }
          r.add(D);
          for (var A = 0; A < w.length; A++) {
            var O = w[A], N = O.ele, R = O.json;
            N.json(R);
          }
        };
        if (ke(e.elements))
          o(e.elements);
        else
          for (var u = ["nodes", "edges"], l = 0; l < u.length; l++) {
            var f = u[l], c = e.elements[f];
            ke(c) && o(c, f);
          }
        var v = r.collection();
        a.filter(function(y) {
          return !s[y.id()];
        }).forEach(function(y) {
          y.isParent() ? v.merge(y) : y.remove();
        }), v.forEach(function(y) {
          return y.children().move({
            parent: null
          });
        }), v.forEach(function(y) {
          return i(y).remove();
        });
      }
      e.style && r.style(e.style), e.zoom != null && e.zoom !== n.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== n.pan.x || e.pan.y !== n.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
      for (var h = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], d = 0; d < h.length; d++) {
        var g = h[d];
        e[g] != null && r[g](e[g]);
      }
      return r.endBatch(), this;
    } else {
      var b = !!e, p = {};
      b ? p.elements = this.elements().map(function(y) {
        return y.json();
      }) : (p.elements = {}, a.forEach(function(y) {
        var E = y.group();
        p.elements[E] || (p.elements[E] = []), p.elements[E].push(y.json());
      })), this._private.styleEnabled && (p.style = r.style().json()), p.data = Ot(r.data());
      var m = n.options;
      return p.zoomingEnabled = n.zoomingEnabled, p.userZoomingEnabled = n.userZoomingEnabled, p.zoom = n.zoom, p.minZoom = n.minZoom, p.maxZoom = n.maxZoom, p.panningEnabled = n.panningEnabled, p.userPanningEnabled = n.userPanningEnabled, p.pan = Ot(n.pan), p.boxSelectionEnabled = n.boxSelectionEnabled, p.renderer = Ot(m.renderer), p.hideEdgesOnViewport = m.hideEdgesOnViewport, p.textureOnViewport = m.textureOnViewport, p.wheelSensitivity = m.wheelSensitivity, p.motionBlur = m.motionBlur, p.multiClickDebounceTime = m.multiClickDebounceTime, p;
    }
  }
});
Va.$id = Va.getElementById;
[Cw, Nw, sf, Wi, Sa, Ow, Ki, La, Rw, Er, _n].forEach(function(t11) {
  he(Va, t11);
});
var Bw = {
  fit: true,
  directed: false,
  padding: 30,
  circle: false,
  grid: false,
  spacingFactor: 1.75,
  boundingBox: void 0,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: false,
  roots: void 0,
  maximal: false,
  depthSort: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  ready: void 0,
  stop: void 0,
  transform: function(e, r) {
    return r;
  }
}, kr = function(e) {
  return e.scratch("breadthfirst");
}, tu = function(e, r) {
  return e.scratch("breadthfirst", r);
};
function of(t11) {
  this.options = he({}, Bw, t11);
}
of.prototype.run = function() {
  var t11 = this.options, e = t11, r = t11.cy, n = e.eles, a = n.nodes().filter(function(re) {
    return !re.isParent();
  }), i = n, s = e.directed, o = e.maximal || e.maximalAdjustments > 0, u = ht(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), l;
  if (dt(e.roots))
    l = e.roots;
  else if (ke(e.roots)) {
    for (var f = [], c = 0; c < e.roots.length; c++) {
      var v = e.roots[c], h = r.getElementById(v);
      f.push(h);
    }
    l = r.collection(f);
  } else if (le(e.roots))
    l = r.$(e.roots);
  else if (s)
    l = a.roots();
  else {
    var d = n.components();
    l = r.collection();
    for (var g = function(ee) {
      var fe = d[ee], se = fe.maxDegree(false), ae = fe.filter(function(ue) {
        return ue.degree(false) === se;
      });
      l = l.add(ae);
    }, b = 0; b < d.length; b++)
      g(b);
  }
  var p = [], m = {}, y = function(ee, fe) {
    p[fe] == null && (p[fe] = []);
    var se = p[fe].length;
    p[fe].push(ee), tu(ee, {
      index: se,
      depth: fe
    });
  }, E = function(ee, fe) {
    var se = kr(ee), ae = se.depth, ue = se.index;
    p[ae][ue] = null, y(ee, fe);
  };
  i.bfs({
    roots: l,
    directed: e.directed,
    visit: function(ee, fe, se, ae, ue) {
      var Ee = ee[0], ge = Ee.id();
      y(Ee, ue), m[ge] = true;
    }
  });
  for (var C = [], D = 0; D < a.length; D++) {
    var w = a[D];
    m[w.id()] || C.push(w);
  }
  var T = function(ee) {
    for (var fe = p[ee], se = 0; se < fe.length; se++) {
      var ae = fe[se];
      if (ae == null) {
        fe.splice(se, 1), se--;
        continue;
      }
      tu(ae, {
        depth: ee,
        index: se
      });
    }
  }, x = function() {
    for (var ee = 0; ee < p.length; ee++)
      T(ee);
  }, S = function(ee, fe) {
    for (var se = kr(ee), ae = ee.incomers().filter(function(M) {
      return M.isNode() && n.has(M);
    }), ue = -1, Ee = ee.id(), ge = 0; ge < ae.length; ge++) {
      var ce = ae[ge], J = kr(ce);
      ue = Math.max(ue, J.depth);
    }
    return se.depth <= ue ? fe[Ee] ? null : (E(ee, ue + 1), fe[Ee] = true, true) : false;
  };
  if (s && o) {
    var L = [], A = {}, O = function(ee) {
      return L.push(ee);
    }, N = function() {
      return L.shift();
    };
    for (a.forEach(function(re) {
      return L.push(re);
    }); L.length > 0; ) {
      var R = N(), I = S(R, A);
      if (I)
        R.outgoers().filter(function(re) {
          return re.isNode() && n.has(re);
        }).forEach(O);
      else if (I === null) {
        Ne("Detected double maximal shift for node `" + R.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  x();
  var k = 0;
  if (e.avoidOverlap)
    for (var P = 0; P < a.length; P++) {
      var B = a[P], _ = B.layoutDimensions(e), F = _.w, G = _.h;
      k = Math.max(k, F, G);
    }
  var z = {}, V = function(ee) {
    if (z[ee.id()])
      return z[ee.id()];
    for (var fe = kr(ee).depth, se = ee.neighborhood(), ae = 0, ue = 0, Ee = 0; Ee < se.length; Ee++) {
      var ge = se[Ee];
      if (!(ge.isEdge() || ge.isParent() || !a.has(ge))) {
        var ce = kr(ge);
        if (ce != null) {
          var J = ce.index, M = ce.depth;
          if (!(J == null || M == null)) {
            var H = p[M].length;
            M < fe && (ae += J / H, ue++);
          }
        }
      }
    }
    return ue = Math.max(1, ue), ae = ae / ue, ue === 0 && (ae = 0), z[ee.id()] = ae, ae;
  }, U = function(ee, fe) {
    var se = V(ee), ae = V(fe), ue = se - ae;
    return ue === 0 ? dl(ee.id(), fe.id()) : ue;
  };
  e.depthSort !== void 0 && (U = e.depthSort);
  for (var Y = 0; Y < p.length; Y++)
    p[Y].sort(U), T(Y);
  for (var $ = [], X = 0; X < C.length; X++)
    $.push(C[X]);
  p.unshift($), x();
  for (var K = 0, Z = 0; Z < p.length; Z++)
    K = Math.max(p[Z].length, K);
  var te = {
    x: u.x1 + u.w / 2,
    y: u.x1 + u.h / 2
  }, ve = p.reduce(function(re, ee) {
    return Math.max(re, ee.length);
  }, 0), de = function(ee) {
    var fe = kr(ee), se = fe.depth, ae = fe.index, ue = p[se].length, Ee = Math.max(u.w / ((e.grid ? ve : ue) + 1), k), ge = Math.max(u.h / (p.length + 1), k), ce = Math.min(u.w / 2 / p.length, u.h / 2 / p.length);
    if (ce = Math.max(ce, k), e.circle) {
      var M = ce * se + ce - (p.length > 0 && p[0].length <= 3 ? ce / 2 : 0), H = 2 * Math.PI / p[se].length * ae;
      return se === 0 && p[0].length === 1 && (M = 1), {
        x: te.x + M * Math.cos(H),
        y: te.y + M * Math.sin(H)
      };
    } else {
      var J = {
        x: te.x + (ae + 1 - (ue + 1) / 2) * Ee,
        y: (se + 1) * ge
      };
      return J;
    }
  };
  return n.nodes().layoutPositions(this, e, de), this;
};
var Fw = {
  fit: true,
  padding: 30,
  boundingBox: void 0,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: false,
  spacingFactor: void 0,
  radius: void 0,
  startAngle: 3 / 2 * Math.PI,
  sweep: void 0,
  clockwise: true,
  sort: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  ready: void 0,
  stop: void 0,
  transform: function(e, r) {
    return r;
  }
};
function uf(t11) {
  this.options = he({}, Fw, t11);
}
uf.prototype.run = function() {
  var t11 = this.options, e = t11, r = t11.cy, n = e.eles, a = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = n.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var s = ht(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, l = u / Math.max(1, i.length - 1), f, c = 0, v = 0; v < i.length; v++) {
    var h = i[v], d = h.layoutDimensions(e), g = d.w, b = d.h;
    c = Math.max(c, g, b);
  }
  if (ne(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - c, i.length > 1 && e.avoidOverlap) {
    c *= 1.75;
    var p = Math.cos(l) - Math.cos(0), m = Math.sin(l) - Math.sin(0), y = Math.sqrt(c * c / (p * p + m * m));
    f = Math.max(y, f);
  }
  var E = function(D, w) {
    var T = e.startAngle + w * l * (a ? 1 : -1), x = f * Math.cos(T), S = f * Math.sin(T), L = {
      x: o.x + x,
      y: o.y + S
    };
    return L;
  };
  return n.nodes().layoutPositions(this, e, E), this;
};
var _w = {
  fit: true,
  padding: 30,
  startAngle: 3 / 2 * Math.PI,
  sweep: void 0,
  clockwise: true,
  equidistant: false,
  minNodeSpacing: 10,
  boundingBox: void 0,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: false,
  height: void 0,
  width: void 0,
  spacingFactor: void 0,
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  ready: void 0,
  stop: void 0,
  transform: function(e, r) {
    return r;
  }
};
function lf(t11) {
  this.options = he({}, _w, t11);
}
lf.prototype.run = function() {
  for (var t11 = this.options, e = t11, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, n = t11.cy, a = e.eles, i = a.nodes().not(":parent"), s = ht(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: n.width(),
    h: n.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = [], l = 0, f = 0; f < i.length; f++) {
    var c = i[f], v = void 0;
    v = e.concentric(c), u.push({
      value: v,
      node: c
    }), c._private.scratch.concentric = v;
  }
  i.updateStyle();
  for (var h = 0; h < i.length; h++) {
    var d = i[h], g = d.layoutDimensions(e);
    l = Math.max(l, g.w, g.h);
  }
  u.sort(function(re, ee) {
    return ee.value - re.value;
  });
  for (var b = e.levelWidth(i), p = [[]], m = p[0], y = 0; y < u.length; y++) {
    var E = u[y];
    if (m.length > 0) {
      var C = Math.abs(m[0].value - E.value);
      C >= b && (m = [], p.push(m));
    }
    m.push(E);
  }
  var D = l + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var w = p.length > 0 && p[0].length > 1, T = Math.min(s.w, s.h) / 2 - D, x = T / (p.length + w ? 1 : 0);
    D = Math.min(D, x);
  }
  for (var S = 0, L = 0; L < p.length; L++) {
    var A = p[L], O = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / A.length : e.sweep, N = A.dTheta = O / Math.max(1, A.length - 1);
    if (A.length > 1 && e.avoidOverlap) {
      var R = Math.cos(N) - Math.cos(0), I = Math.sin(N) - Math.sin(0), k = Math.sqrt(D * D / (R * R + I * I));
      S = Math.max(k, S);
    }
    A.r = S, S += D;
  }
  if (e.equidistant) {
    for (var P = 0, B = 0, _ = 0; _ < p.length; _++) {
      var F = p[_], G = F.r - B;
      P = Math.max(P, G);
    }
    B = 0;
    for (var z = 0; z < p.length; z++) {
      var V = p[z];
      z === 0 && (B = V.r), V.r = B, B += P;
    }
  }
  for (var U = {}, Y = 0; Y < p.length; Y++)
    for (var $ = p[Y], X = $.dTheta, K = $.r, Z = 0; Z < $.length; Z++) {
      var te = $[Z], ve = e.startAngle + (r ? 1 : -1) * X * Z, de = {
        x: o.x + K * Math.cos(ve),
        y: o.y + K * Math.sin(ve)
      };
      U[te.node.id()] = de;
    }
  return a.nodes().layoutPositions(this, e, function(re) {
    var ee = re.id();
    return U[ee];
  }), this;
};
var Ni, $w = {
  ready: function() {
  },
  stop: function() {
  },
  animate: true,
  animationEasing: void 0,
  animationDuration: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  animationThreshold: 250,
  refresh: 20,
  fit: true,
  padding: 30,
  boundingBox: void 0,
  nodeDimensionsIncludeLabels: false,
  randomize: false,
  componentSpacing: 40,
  nodeRepulsion: function(e) {
    return 2048;
  },
  nodeOverlap: 4,
  idealEdgeLength: function(e) {
    return 32;
  },
  edgeElasticity: function(e) {
    return 32;
  },
  nestingFactor: 1.2,
  gravity: 1,
  numIter: 1e3,
  initialTemp: 1e3,
  coolingFactor: 0.99,
  minTemp: 1
};
function hi(t11) {
  this.options = he({}, $w, t11), this.options.layout = this;
}
hi.prototype.run = function() {
  var t11 = this.options, e = t11.cy, r = this;
  r.stopped = false, (t11.animate === true || t11.animate === false) && r.emit({
    type: "layoutstart",
    layout: r
  }), t11.debug === true ? Ni = true : Ni = false;
  var n = Gw(e, r, t11);
  Ni && Vw(n), t11.randomize && Yw(n);
  var a = Ht(), i = function() {
    Uw(n, e, t11), t11.fit === true && e.fit(t11.padding);
  }, s = function(v) {
    return !(r.stopped || v >= t11.numIter || (Xw(n, t11), n.temperature = n.temperature * t11.coolingFactor, n.temperature < t11.minTemp));
  }, o = function() {
    if (t11.animate === true || t11.animate === false)
      i(), r.one("layoutstop", t11.stop), r.emit({
        type: "layoutstop",
        layout: r
      });
    else {
      var v = t11.eles.nodes(), h = ff(n, t11, v);
      v.layoutPositions(r, t11, h);
    }
  }, u = 0, l = true;
  if (t11.animate === true) {
    var f = function c() {
      for (var v = 0; l && v < t11.refresh; )
        l = s(u), u++, v++;
      if (!l)
        nu(n, t11), o();
      else {
        var h = Ht();
        h - a >= t11.animationThreshold && i(), $a(c);
      }
    };
    f();
  } else {
    for (; l; )
      l = s(u), u++;
    nu(n, t11), o();
  }
  return this;
};
hi.prototype.stop = function() {
  return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
hi.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var Gw = function(e, r, n) {
  for (var a = n.eles.edges(), i = n.eles.nodes(), s = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: a.size(),
    temperature: n.initialTemp,
    clientWidth: e.width(),
    clientHeight: e.width(),
    boundingBox: ht(n.boundingBox ? n.boundingBox : {
      x1: 0,
      y1: 0,
      w: e.width(),
      h: e.height()
    })
  }, o = n.eles.components(), u = {}, l = 0; l < o.length; l++)
    for (var f = o[l], c = 0; c < f.length; c++) {
      var v = f[c];
      u[v.id()] = l;
    }
  for (var l = 0; l < s.nodeSize; l++) {
    var h = i[l], d = h.layoutDimensions(n), g = {};
    g.isLocked = h.locked(), g.id = h.data("id"), g.parentId = h.data("parent"), g.cmptId = u[h.id()], g.children = [], g.positionX = h.position("x"), g.positionY = h.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = d.w, g.width = d.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(h.style("padding")), g.padRight = parseFloat(h.style("padding")), g.padTop = parseFloat(h.style("padding")), g.padBottom = parseFloat(h.style("padding")), g.nodeRepulsion = _e(n.nodeRepulsion) ? n.nodeRepulsion(h) : n.nodeRepulsion, s.layoutNodes.push(g), s.idToIndex[g.id] = l;
  }
  for (var b = [], p = 0, m = -1, y = [], l = 0; l < s.nodeSize; l++) {
    var h = s.layoutNodes[l], E = h.parentId;
    E != null ? s.layoutNodes[s.idToIndex[E]].children.push(h.id) : (b[++m] = h.id, y.push(h.id));
  }
  for (s.graphSet.push(y); p <= m; ) {
    var C = b[p++], D = s.idToIndex[C], v = s.layoutNodes[D], w = v.children;
    if (w.length > 0) {
      s.graphSet.push(w);
      for (var l = 0; l < w.length; l++)
        b[++m] = w[l];
    }
  }
  for (var l = 0; l < s.graphSet.length; l++)
    for (var T = s.graphSet[l], c = 0; c < T.length; c++) {
      var x = s.idToIndex[T[c]];
      s.indexToGraph[x] = l;
    }
  for (var l = 0; l < s.edgeSize; l++) {
    var S = a[l], L = {};
    L.id = S.data("id"), L.sourceId = S.data("source"), L.targetId = S.data("target");
    var A = _e(n.idealEdgeLength) ? n.idealEdgeLength(S) : n.idealEdgeLength, O = _e(n.edgeElasticity) ? n.edgeElasticity(S) : n.edgeElasticity, N = s.idToIndex[L.sourceId], R = s.idToIndex[L.targetId], I = s.indexToGraph[N], k = s.indexToGraph[R];
    if (I != k) {
      for (var P = zw(L.sourceId, L.targetId, s), B = s.graphSet[P], _ = 0, g = s.layoutNodes[N]; B.indexOf(g.id) === -1; )
        g = s.layoutNodes[s.idToIndex[g.parentId]], _++;
      for (g = s.layoutNodes[R]; B.indexOf(g.id) === -1; )
        g = s.layoutNodes[s.idToIndex[g.parentId]], _++;
      A *= _ * n.nestingFactor;
    }
    L.idealLength = A, L.elasticity = O, s.layoutEdges.push(L);
  }
  return s;
}, zw = function(e, r, n) {
  var a = Hw(e, r, 0, n);
  return 2 > a.count ? 0 : a.graph;
}, Hw = function t8(e, r, n, a) {
  var i = a.graphSet[n];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(r))
    return {
      count: 2,
      graph: n
    };
  for (var s = 0, o = 0; o < i.length; o++) {
    var u = i[o], l = a.idToIndex[u], f = a.layoutNodes[l].children;
    if (f.length !== 0) {
      var c = a.indexToGraph[a.idToIndex[f[0]]], v = t8(e, r, c, a);
      if (v.count !== 0)
        if (v.count === 1) {
          if (s++, s === 2)
            break;
        } else
          return v;
    }
  }
  return {
    count: s,
    graph: n
  };
}, Vw, Yw = function(e, r) {
  for (var n = e.clientWidth, a = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var s = e.layoutNodes[i];
    s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * n, s.positionY = Math.random() * a);
  }
}, ff = function(e, r, n) {
  var a = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return r.boundingBox && (n.forEach(function(s) {
    var o = e.layoutNodes[e.idToIndex[s.data("id")]];
    i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
    var u = e.layoutNodes[e.idToIndex[s.data("id")]];
    if (r.boundingBox) {
      var l = (u.positionX - i.x1) / i.w, f = (u.positionY - i.y1) / i.h;
      return {
        x: a.x1 + l * a.w,
        y: a.y1 + f * a.h
      };
    } else
      return {
        x: u.positionX,
        y: u.positionY
      };
  };
}, Uw = function(e, r, n) {
  var a = n.layout, i = n.eles.nodes(), s = ff(e, n, i);
  i.positions(s), e.ready !== true && (e.ready = true, a.one("layoutready", n.ready), a.emit({
    type: "layoutready",
    layout: this
  }));
}, Xw = function(e, r, n) {
  qw(e, r), Zw(e), Qw(e, r), Jw(e), jw(e);
}, qw = function(e, r) {
  for (var n = 0; n < e.graphSet.length; n++)
    for (var a = e.graphSet[n], i = a.length, s = 0; s < i; s++)
      for (var o = e.layoutNodes[e.idToIndex[a[s]]], u = s + 1; u < i; u++) {
        var l = e.layoutNodes[e.idToIndex[a[u]]];
        Ww(o, l, e, r);
      }
}, ru = function(e) {
  return -e + 2 * e * Math.random();
}, Ww = function(e, r, n, a) {
  var i = e.cmptId, s = r.cmptId;
  if (!(i !== s && !n.isCompound)) {
    var o = r.positionX - e.positionX, u = r.positionY - e.positionY, l = 1;
    o === 0 && u === 0 && (o = ru(l), u = ru(l));
    var f = Kw(e, r, o, u);
    if (f > 0)
      var c = a.nodeOverlap * f, v = Math.sqrt(o * o + u * u), h = c * o / v, d = c * u / v;
    else
      var g = Ya(e, o, u), b = Ya(r, -1 * o, -1 * u), p = b.x - g.x, m = b.y - g.y, y = p * p + m * m, v = Math.sqrt(y), c = (e.nodeRepulsion + r.nodeRepulsion) / y, h = c * p / v, d = c * m / v;
    e.isLocked || (e.offsetX -= h, e.offsetY -= d), r.isLocked || (r.offsetX += h, r.offsetY += d);
  }
}, Kw = function(e, r, n, a) {
  if (n > 0)
    var i = e.maxX - r.minX;
  else
    var i = r.maxX - e.minX;
  if (a > 0)
    var s = e.maxY - r.minY;
  else
    var s = r.maxY - e.minY;
  return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, Ya = function(e, r, n) {
  var a = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, u = n / r, l = s / o, f = {};
  return r === 0 && 0 < n || r === 0 && 0 > n ? (f.x = a, f.y = i + s / 2, f) : 0 < r && -1 * l <= u && u <= l ? (f.x = a + o / 2, f.y = i + o * n / 2 / r, f) : 0 > r && -1 * l <= u && u <= l ? (f.x = a - o / 2, f.y = i - o * n / 2 / r, f) : 0 < n && (u <= -1 * l || u >= l) ? (f.x = a + s * r / 2 / n, f.y = i + s / 2, f) : (0 > n && (u <= -1 * l || u >= l) && (f.x = a - s * r / 2 / n, f.y = i - s / 2), f);
}, Zw = function(e, r) {
  for (var n = 0; n < e.edgeSize; n++) {
    var a = e.layoutEdges[n], i = e.idToIndex[a.sourceId], s = e.layoutNodes[i], o = e.idToIndex[a.targetId], u = e.layoutNodes[o], l = u.positionX - s.positionX, f = u.positionY - s.positionY;
    if (!(l === 0 && f === 0)) {
      var c = Ya(s, l, f), v = Ya(u, -1 * l, -1 * f), h = v.x - c.x, d = v.y - c.y, g = Math.sqrt(h * h + d * d), b = Math.pow(a.idealLength - g, 2) / a.elasticity;
      if (g !== 0)
        var p = b * h / g, m = b * d / g;
      else
        var p = 0, m = 0;
      s.isLocked || (s.offsetX += p, s.offsetY += m), u.isLocked || (u.offsetX -= p, u.offsetY -= m);
    }
  }
}, Qw = function(e, r) {
  if (r.gravity !== 0)
    for (var n = 1, a = 0; a < e.graphSet.length; a++) {
      var i = e.graphSet[a], s = i.length;
      if (a === 0)
        var o = e.clientHeight / 2, u = e.clientWidth / 2;
      else
        var l = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[l.parentId]], o = f.positionX, u = f.positionY;
      for (var c = 0; c < s; c++) {
        var v = e.layoutNodes[e.idToIndex[i[c]]];
        if (!v.isLocked) {
          var h = o - v.positionX, d = u - v.positionY, g = Math.sqrt(h * h + d * d);
          if (g > n) {
            var b = r.gravity * h / g, p = r.gravity * d / g;
            v.offsetX += b, v.offsetY += p;
          }
        }
      }
    }
}, Jw = function(e, r) {
  var n = [], a = 0, i = -1;
  for (n.push.apply(n, e.graphSet[0]), i += e.graphSet[0].length; a <= i; ) {
    var s = n[a++], o = e.idToIndex[s], u = e.layoutNodes[o], l = u.children;
    if (0 < l.length && !u.isLocked) {
      for (var f = u.offsetX, c = u.offsetY, v = 0; v < l.length; v++) {
        var h = e.layoutNodes[e.idToIndex[l[v]]];
        h.offsetX += f, h.offsetY += c, n[++i] = l[v];
      }
      u.offsetX = 0, u.offsetY = 0;
    }
  }
}, jw = function(e, r) {
  for (var n = 0; n < e.nodeSize; n++) {
    var a = e.layoutNodes[n];
    0 < a.children.length && (a.maxX = void 0, a.minX = void 0, a.maxY = void 0, a.minY = void 0);
  }
  for (var n = 0; n < e.nodeSize; n++) {
    var a = e.layoutNodes[n];
    if (!(0 < a.children.length || a.isLocked)) {
      var i = eE(a.offsetX, a.offsetY, e.temperature);
      a.positionX += i.x, a.positionY += i.y, a.offsetX = 0, a.offsetY = 0, a.minX = a.positionX - a.width, a.maxX = a.positionX + a.width, a.minY = a.positionY - a.height, a.maxY = a.positionY + a.height, tE(a, e);
    }
  }
  for (var n = 0; n < e.nodeSize; n++) {
    var a = e.layoutNodes[n];
    0 < a.children.length && !a.isLocked && (a.positionX = (a.maxX + a.minX) / 2, a.positionY = (a.maxY + a.minY) / 2, a.width = a.maxX - a.minX, a.height = a.maxY - a.minY);
  }
}, eE = function(e, r, n) {
  var a = Math.sqrt(e * e + r * r);
  if (a > n)
    var i = {
      x: n * e / a,
      y: n * r / a
    };
  else
    var i = {
      x: e,
      y: r
    };
  return i;
}, tE = function t9(e, r) {
  var n = e.parentId;
  if (n != null) {
    var a = r.layoutNodes[r.idToIndex[n]], i = false;
    if ((a.maxX == null || e.maxX + a.padRight > a.maxX) && (a.maxX = e.maxX + a.padRight, i = true), (a.minX == null || e.minX - a.padLeft < a.minX) && (a.minX = e.minX - a.padLeft, i = true), (a.maxY == null || e.maxY + a.padBottom > a.maxY) && (a.maxY = e.maxY + a.padBottom, i = true), (a.minY == null || e.minY - a.padTop < a.minY) && (a.minY = e.minY - a.padTop, i = true), i)
      return t9(a, r);
  }
}, nu = function(e, r) {
  for (var n = e.layoutNodes, a = [], i = 0; i < n.length; i++) {
    var s = n[i], o = s.cmptId, u = a[o] = a[o] || [];
    u.push(s);
  }
  for (var l = 0, i = 0; i < a.length; i++) {
    var f = a[i];
    if (!!f) {
      f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
      for (var c = 0; c < f.length; c++) {
        var v = f[c];
        f.x1 = Math.min(f.x1, v.positionX - v.width / 2), f.x2 = Math.max(f.x2, v.positionX + v.width / 2), f.y1 = Math.min(f.y1, v.positionY - v.height / 2), f.y2 = Math.max(f.y2, v.positionY + v.height / 2);
      }
      f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, l += f.w * f.h;
    }
  }
  a.sort(function(m, y) {
    return y.w * y.h - m.w * m.h;
  });
  for (var h = 0, d = 0, g = 0, b = 0, p = Math.sqrt(l) * e.clientWidth / e.clientHeight, i = 0; i < a.length; i++) {
    var f = a[i];
    if (!!f) {
      for (var c = 0; c < f.length; c++) {
        var v = f[c];
        v.isLocked || (v.positionX += h - f.x1, v.positionY += d - f.y1);
      }
      h += f.w + r.componentSpacing, g += f.w + r.componentSpacing, b = Math.max(b, f.h), g > p && (d += b + r.componentSpacing, h = 0, g = 0, b = 0);
    }
  }
}, rE = {
  fit: true,
  padding: 30,
  boundingBox: void 0,
  avoidOverlap: true,
  avoidOverlapPadding: 10,
  nodeDimensionsIncludeLabels: false,
  spacingFactor: void 0,
  condense: false,
  rows: void 0,
  cols: void 0,
  position: function(e) {
  },
  sort: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  ready: void 0,
  stop: void 0,
  transform: function(e, r) {
    return r;
  }
};
function cf(t11) {
  this.options = he({}, rE, t11);
}
cf.prototype.run = function() {
  var t11 = this.options, e = t11, r = t11.cy, n = e.eles, a = n.nodes().not(":parent");
  e.sort && (a = a.sort(e.sort));
  var i = ht(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: r.width(),
    h: r.height()
  });
  if (i.h === 0 || i.w === 0)
    n.nodes().layoutPositions(this, e, function(z) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var s = a.size(), o = Math.sqrt(s * i.h / i.w), u = Math.round(o), l = Math.round(i.w / i.h * o), f = function(V) {
      if (V == null)
        return Math.min(u, l);
      var U = Math.min(u, l);
      U == u ? u = V : l = V;
    }, c = function(V) {
      if (V == null)
        return Math.max(u, l);
      var U = Math.max(u, l);
      U == u ? u = V : l = V;
    }, v = e.rows, h = e.cols != null ? e.cols : e.columns;
    if (v != null && h != null)
      u = v, l = h;
    else if (v != null && h == null)
      u = v, l = Math.ceil(s / u);
    else if (v == null && h != null)
      l = h, u = Math.ceil(s / l);
    else if (l * u > s) {
      var d = f(), g = c();
      (d - 1) * g >= s ? f(d - 1) : (g - 1) * d >= s && c(g - 1);
    } else
      for (; l * u < s; ) {
        var b = f(), p = c();
        (p + 1) * b >= s ? c(p + 1) : f(b + 1);
      }
    var m = i.w / l, y = i.h / u;
    if (e.condense && (m = 0, y = 0), e.avoidOverlap)
      for (var E = 0; E < a.length; E++) {
        var C = a[E], D = C._private.position;
        (D.x == null || D.y == null) && (D.x = 0, D.y = 0);
        var w = C.layoutDimensions(e), T = e.avoidOverlapPadding, x = w.w + T, S = w.h + T;
        m = Math.max(m, x), y = Math.max(y, S);
      }
    for (var L = {}, A = function(V, U) {
      return !!L["c-" + V + "-" + U];
    }, O = function(V, U) {
      L["c-" + V + "-" + U] = true;
    }, N = 0, R = 0, I = function() {
      R++, R >= l && (R = 0, N++);
    }, k = {}, P = 0; P < a.length; P++) {
      var B = a[P], _ = e.position(B);
      if (_ && (_.row !== void 0 || _.col !== void 0)) {
        var F = {
          row: _.row,
          col: _.col
        };
        if (F.col === void 0)
          for (F.col = 0; A(F.row, F.col); )
            F.col++;
        else if (F.row === void 0)
          for (F.row = 0; A(F.row, F.col); )
            F.row++;
        k[B.id()] = F, O(F.row, F.col);
      }
    }
    var G = function(V, U) {
      var Y, $;
      if (V.locked() || V.isParent())
        return false;
      var X = k[V.id()];
      if (X)
        Y = X.col * m + m / 2 + i.x1, $ = X.row * y + y / 2 + i.y1;
      else {
        for (; A(N, R); )
          I();
        Y = R * m + m / 2 + i.x1, $ = N * y + y / 2 + i.y1, O(N, R), I();
      }
      return {
        x: Y,
        y: $
      };
    };
    a.layoutPositions(this, e, G);
  }
  return this;
};
var nE = {
  ready: function() {
  },
  stop: function() {
  }
};
function Ns(t11) {
  this.options = he({}, nE, t11);
}
Ns.prototype.run = function() {
  var t11 = this.options, e = t11.eles, r = this;
  return t11.cy, r.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), r.one("layoutready", t11.ready), r.emit("layoutready"), r.one("layoutstop", t11.stop), r.emit("layoutstop"), this;
};
Ns.prototype.stop = function() {
  return this;
};
var aE = {
  positions: void 0,
  zoom: void 0,
  pan: void 0,
  fit: true,
  padding: 30,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  ready: void 0,
  stop: void 0,
  transform: function(e, r) {
    return r;
  }
};
function hf(t11) {
  this.options = he({}, aE, t11);
}
hf.prototype.run = function() {
  var t11 = this.options, e = t11.eles, r = e.nodes(), n = _e(t11.positions);
  function a(i) {
    if (t11.positions == null)
      return y1(i.position());
    if (n)
      return t11.positions(i);
    var s = t11.positions[i._private.data.id];
    return s == null ? null : s;
  }
  return r.layoutPositions(this, t11, function(i, s) {
    var o = a(i);
    return i.locked() || o == null ? false : o;
  }), this;
};
var iE = {
  fit: true,
  padding: 30,
  boundingBox: void 0,
  animate: false,
  animationDuration: 500,
  animationEasing: void 0,
  animateFilter: function(e, r) {
    return true;
  },
  ready: void 0,
  stop: void 0,
  transform: function(e, r) {
    return r;
  }
};
function vf(t11) {
  this.options = he({}, iE, t11);
}
vf.prototype.run = function() {
  var t11 = this.options, e = t11.cy, r = t11.eles, n = ht(t11.boundingBox ? t11.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), a = function(s, o) {
    return {
      x: n.x1 + Math.round(Math.random() * n.w),
      y: n.y1 + Math.round(Math.random() * n.h)
    };
  };
  return r.nodes().layoutPositions(this, t11, a), this;
};
var sE = [{
  name: "breadthfirst",
  impl: of
}, {
  name: "circle",
  impl: uf
}, {
  name: "concentric",
  impl: lf
}, {
  name: "cose",
  impl: hi
}, {
  name: "grid",
  impl: cf
}, {
  name: "null",
  impl: Ns
}, {
  name: "preset",
  impl: hf
}, {
  name: "random",
  impl: vf
}];
function df(t11) {
  this.options = t11, this.notifications = 0;
}
var au = function() {
}, iu = function() {
  throw new Error("A headless instance can not render images");
};
df.prototype = {
  recalculateRenderedStyle: au,
  notify: function() {
    this.notifications++;
  },
  init: au,
  isHeadless: function() {
    return true;
  },
  png: iu,
  jpg: iu
};
var Ms = {};
Ms.arrowShapeWidth = 0.3;
Ms.registerArrowShapes = function() {
  var t11 = this.arrowShapes = {}, e = this, r = function(l, f, c, v, h, d, g) {
    var b = h.x - c / 2 - g, p = h.x + c / 2 + g, m = h.y - c / 2 - g, y = h.y + c / 2 + g, E = b <= l && l <= p && m <= f && f <= y;
    return E;
  }, n = function(l, f, c, v, h) {
    var d = l * Math.cos(v) - f * Math.sin(v), g = l * Math.sin(v) + f * Math.cos(v), b = d * c, p = g * c, m = b + h.x, y = p + h.y;
    return {
      x: m,
      y
    };
  }, a = function(l, f, c, v) {
    for (var h = [], d = 0; d < l.length; d += 2) {
      var g = l[d], b = l[d + 1];
      h.push(n(g, b, f, c, v));
    }
    return h;
  }, i = function(l) {
    for (var f = [], c = 0; c < l.length; c++) {
      var v = l[c];
      f.push(v.x, v.y);
    }
    return f;
  }, s = function(l) {
    return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
  }, o = function(l, f) {
    le(f) && (f = t11[f]), t11[l] = he({
      name: l,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(v, h, d, g, b, p) {
        var m = i(a(this.points, d + 2 * p, g, b)), y = ft(v, h, m);
        return y;
      },
      roughCollide: r,
      draw: function(v, h, d, g) {
        var b = a(this.points, h, d, g);
        e.arrowShapeImpl("polygon")(v, b);
      },
      spacing: function(v) {
        return 0;
      },
      gap: s
    }, f);
  };
  o("none", {
    collide: Ga,
    roughCollide: Ga,
    draw: ms,
    spacing: wo,
    gap: wo
  }), o("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), o("arrow", "triangle"), o("triangle-backcurve", {
    points: t11.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: r,
    draw: function(l, f, c, v, h) {
      var d = a(this.points, f, c, v), g = this.controlPoint, b = n(g[0], g[1], f, c, v);
      e.arrowShapeImpl(this.name)(l, d, b);
    },
    gap: function(l) {
      return s(l) * 0.8;
    }
  }), o("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(l, f, c, v, h, d, g) {
      var b = i(a(this.points, c + 2 * g, v, h)), p = i(a(this.pointsTee, c + 2 * g, v, h)), m = ft(l, f, b) || ft(l, f, p);
      return m;
    },
    draw: function(l, f, c, v, h) {
      var d = a(this.points, f, c, v), g = a(this.pointsTee, f, c, v);
      e.arrowShapeImpl(this.name)(l, d, g);
    }
  }), o("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(l, f, c, v, h, d, g) {
      var b = h, p = Math.pow(b.x - l, 2) + Math.pow(b.y - f, 2) <= Math.pow((c + 2 * g) * this.radius, 2), m = i(a(this.points, c + 2 * g, v, h));
      return ft(l, f, m) || p;
    },
    draw: function(l, f, c, v, h) {
      var d = a(this.pointsTr, f, c, v);
      e.arrowShapeImpl(this.name)(l, d, v.x, v.y, this.radius * f);
    },
    spacing: function(l) {
      return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      -0.15,
      -0.4,
      0.15,
      -0.4,
      0.15,
      -0.4
    ],
    crossLinePts: function(l, f) {
      var c = this.baseCrossLinePts.slice(), v = f / l, h = 3, d = 5;
      return c[h] = c[h] - v, c[d] = c[d] - v, c;
    },
    collide: function(l, f, c, v, h, d, g) {
      var b = i(a(this.points, c + 2 * g, v, h)), p = i(a(this.crossLinePts(c, d), c + 2 * g, v, h)), m = ft(l, f, b) || ft(l, f, p);
      return m;
    },
    draw: function(l, f, c, v, h) {
      var d = a(this.points, f, c, v), g = a(this.crossLinePts(f, h), f, c, v);
      e.arrowShapeImpl(this.name)(l, d, g);
    }
  }), o("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(l) {
      return s(l) * 0.525;
    }
  }), o("circle", {
    radius: 0.15,
    collide: function(l, f, c, v, h, d, g) {
      var b = h, p = Math.pow(b.x - l, 2) + Math.pow(b.y - f, 2) <= Math.pow((c + 2 * g) * this.radius, 2);
      return p;
    },
    draw: function(l, f, c, v, h) {
      e.arrowShapeImpl(this.name)(l, v.x, v.y, this.radius * f);
    },
    spacing: function(l) {
      return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(l) {
      return 1;
    },
    gap: function(l) {
      return 1;
    }
  }), o("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), o("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(l) {
      return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  }), o("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(l) {
      return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  });
};
var Dr = {};
Dr.projectIntoViewport = function(t11, e) {
  var r = this.cy, n = this.findContainerClientCoords(), a = n[0], i = n[1], s = n[4], o = r.pan(), u = r.zoom(), l = ((t11 - a) / s - o.x) / u, f = ((e - i) / s - o.y) / u;
  return [l, f];
};
Dr.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var t11 = this.container, e = t11.getBoundingClientRect(), r = Fe.getComputedStyle(t11), n = function(p) {
    return parseFloat(r.getPropertyValue(p));
  }, a = {
    left: n("padding-left"),
    right: n("padding-right"),
    top: n("padding-top"),
    bottom: n("padding-bottom")
  }, i = {
    left: n("border-left-width"),
    right: n("border-right-width"),
    top: n("border-top-width"),
    bottom: n("border-bottom-width")
  }, s = t11.clientWidth, o = t11.clientHeight, u = a.left + a.right, l = a.top + a.bottom, f = i.left + i.right, c = e.width / (s + f), v = s - u, h = o - l, d = e.left + a.left + i.left, g = e.top + a.top + i.top;
  return this.containerBB = [d, g, v, h, c];
};
Dr.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
Dr.findNearestElement = function(t11, e, r, n) {
  return this.findNearestElements(t11, e, r, n)[0];
};
Dr.findNearestElements = function(t11, e, r, n) {
  var a = this, i = this, s = i.getCachedZSortedEles(), o = [], u = i.cy.zoom(), l = i.cy.hasCompoundNodes(), f = (n ? 24 : 8) / u, c = (n ? 8 : 2) / u, v = (n ? 8 : 2) / u, h = 1 / 0, d, g;
  r && (s = s.interactive);
  function b(w, T) {
    if (w.isNode()) {
      if (g)
        return;
      g = w, o.push(w);
    }
    if (w.isEdge() && (T == null || T < h))
      if (d) {
        if (d.pstyle("z-compound-depth").value === w.pstyle("z-compound-depth").value && d.pstyle("z-compound-depth").value === w.pstyle("z-compound-depth").value) {
          for (var x = 0; x < o.length; x++)
            if (o[x].isEdge()) {
              o[x] = w, d = w, h = T != null ? T : h;
              break;
            }
        }
      } else
        o.push(w), d = w, h = T != null ? T : h;
  }
  function p(w) {
    var T = w.outerWidth() + 2 * c, x = w.outerHeight() + 2 * c, S = T / 2, L = x / 2, A = w.position();
    if (A.x - S <= t11 && t11 <= A.x + S && A.y - L <= e && e <= A.y + L) {
      var O = i.nodeShapes[a.getNodeShape(w)];
      if (O.checkPoint(t11, e, 0, T, x, A.x, A.y))
        return b(w, 0), true;
    }
  }
  function m(w) {
    var T = w._private, x = T.rscratch, S = w.pstyle("width").pfValue, L = w.pstyle("arrow-scale").value, A = S / 2 + f, O = A * A, N = A * 2, P = T.source, B = T.target, R;
    if (x.edgeType === "segments" || x.edgeType === "straight" || x.edgeType === "haystack") {
      for (var I = x.allpts, k = 0; k + 3 < I.length; k += 2)
        if (M1(t11, e, I[k], I[k + 1], I[k + 2], I[k + 3], N) && O > (R = P1(t11, e, I[k], I[k + 1], I[k + 2], I[k + 3])))
          return b(w, R), true;
    } else if (x.edgeType === "bezier" || x.edgeType === "multibezier" || x.edgeType === "self" || x.edgeType === "compound") {
      for (var I = x.allpts, k = 0; k + 5 < x.allpts.length; k += 4)
        if (O1(t11, e, I[k], I[k + 1], I[k + 2], I[k + 3], I[k + 4], I[k + 5], N) && O > (R = R1(t11, e, I[k], I[k + 1], I[k + 2], I[k + 3], I[k + 4], I[k + 5])))
          return b(w, R), true;
    }
    for (var P = P || T.source, B = B || T.target, _ = a.getArrowWidth(S, L), F = [{
      name: "source",
      x: x.arrowStartX,
      y: x.arrowStartY,
      angle: x.srcArrowAngle
    }, {
      name: "target",
      x: x.arrowEndX,
      y: x.arrowEndY,
      angle: x.tgtArrowAngle
    }, {
      name: "mid-source",
      x: x.midX,
      y: x.midY,
      angle: x.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: x.midX,
      y: x.midY,
      angle: x.midtgtArrowAngle
    }], k = 0; k < F.length; k++) {
      var G = F[k], z = i.arrowShapes[w.pstyle(G.name + "-arrow-shape").value], V = w.pstyle("width").pfValue;
      if (z.roughCollide(t11, e, _, G.angle, {
        x: G.x,
        y: G.y
      }, V, f) && z.collide(t11, e, _, G.angle, {
        x: G.x,
        y: G.y
      }, V, f))
        return b(w), true;
    }
    l && o.length > 0 && (p(P), p(B));
  }
  function y(w, T, x) {
    return St(w, T, x);
  }
  function E(w, T) {
    var x = w._private, S = v, L;
    T ? L = T + "-" : L = "", w.boundingBox();
    var A = x.labelBounds[T || "main"], O = w.pstyle(L + "label").value, N = w.pstyle("text-events").strValue === "yes";
    if (!(!N || !O)) {
      var R = y(x.rscratch, "labelX", T), I = y(x.rscratch, "labelY", T), k = y(x.rscratch, "labelAngle", T), P = w.pstyle(L + "text-margin-x").pfValue, B = w.pstyle(L + "text-margin-y").pfValue, _ = A.x1 - S - P, F = A.x2 + S - P, G = A.y1 - S - B, z = A.y2 + S - B;
      if (k) {
        var V = Math.cos(k), U = Math.sin(k), Y = function(de, re) {
          return de = de - R, re = re - I, {
            x: de * V - re * U + R,
            y: de * U + re * V + I
          };
        }, $ = Y(_, G), X = Y(_, z), K = Y(F, G), Z = Y(F, z), te = [
          $.x + P,
          $.y + B,
          K.x + P,
          K.y + B,
          Z.x + P,
          Z.y + B,
          X.x + P,
          X.y + B
        ];
        if (ft(t11, e, te))
          return b(w), true;
      } else if (Xr(A, t11, e))
        return b(w), true;
    }
  }
  for (var C = s.length - 1; C >= 0; C--) {
    var D = s[C];
    D.isNode() ? p(D) || E(D) : m(D) || E(D) || E(D, "source") || E(D, "target");
  }
  return o;
};
Dr.getAllInBox = function(t11, e, r, n) {
  var a = this.getCachedZSortedEles().interactive, i = [], s = Math.min(t11, r), o = Math.max(t11, r), u = Math.min(e, n), l = Math.max(e, n);
  t11 = s, r = o, e = u, n = l;
  for (var f = ht({
    x1: t11,
    y1: e,
    x2: r,
    y2: n
  }), c = 0; c < a.length; c++) {
    var v = a[c];
    if (v.isNode()) {
      var h = v, d = h.boundingBox({
        includeNodes: true,
        includeEdges: false,
        includeLabels: false
      });
      Es(f, d) && !Ll(d, f) && i.push(h);
    } else {
      var g = v, b = g._private, p = b.rscratch;
      if (p.startX != null && p.startY != null && !Xr(f, p.startX, p.startY) || p.endX != null && p.endY != null && !Xr(f, p.endX, p.endY))
        continue;
      if (p.edgeType === "bezier" || p.edgeType === "multibezier" || p.edgeType === "self" || p.edgeType === "compound" || p.edgeType === "segments" || p.edgeType === "haystack") {
        for (var m = b.rstyle.bezierPts || b.rstyle.linePts || b.rstyle.haystackPts, y = true, E = 0; E < m.length; E++)
          if (!N1(f, m[E])) {
            y = false;
            break;
          }
        y && i.push(g);
      } else
        (p.edgeType === "haystack" || p.edgeType === "straight") && i.push(g);
    }
  }
  return i;
};
var Ua = {};
Ua.calculateArrowAngles = function(t11) {
  var e = t11._private.rscratch, r = e.edgeType === "haystack", n = e.edgeType === "bezier", a = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", u, l, f, c, v, h, p, m;
  if (r ? (f = e.haystackPts[0], c = e.haystackPts[1], v = e.haystackPts[2], h = e.haystackPts[3]) : (f = e.arrowStartX, c = e.arrowStartY, v = e.arrowEndX, h = e.arrowEndY), p = e.midX, m = e.midY, i)
    u = f - e.segpts[0], l = c - e.segpts[1];
  else if (a || s || o || n) {
    var d = e.allpts, g = Ue(d[0], d[2], d[4], 0.1), b = Ue(d[1], d[3], d[5], 0.1);
    u = f - g, l = c - b;
  } else
    u = f - p, l = c - m;
  e.srcArrowAngle = oa(u, l);
  var p = e.midX, m = e.midY;
  if (r && (p = (f + v) / 2, m = (c + h) / 2), u = v - f, l = h - c, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 === 0) {
      var y = d.length / 2, E = y - 2;
      u = d[y] - d[E], l = d[y + 1] - d[E + 1];
    } else {
      var y = d.length / 2 - 1, E = y - 2, C = y + 2;
      u = d[y] - d[E], l = d[y + 1] - d[E + 1];
    }
  } else if (a || s || o) {
    var d = e.allpts, D = e.ctrlpts, w, T, x, S;
    if (D.length / 2 % 2 === 0) {
      var L = d.length / 2 - 1, A = L + 2, O = A + 2;
      w = Ue(d[L], d[A], d[O], 0), T = Ue(d[L + 1], d[A + 1], d[O + 1], 0), x = Ue(d[L], d[A], d[O], 1e-4), S = Ue(d[L + 1], d[A + 1], d[O + 1], 1e-4);
    } else {
      var A = d.length / 2 - 1, L = A - 2, O = A + 2;
      w = Ue(d[L], d[A], d[O], 0.4999), T = Ue(d[L + 1], d[A + 1], d[O + 1], 0.4999), x = Ue(d[L], d[A], d[O], 0.5), S = Ue(d[L + 1], d[A + 1], d[O + 1], 0.5);
    }
    u = x - w, l = S - T;
  }
  if (e.midtgtArrowAngle = oa(u, l), e.midDispX = u, e.midDispY = l, u *= -1, l *= -1, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 !== 0) {
      var y = d.length / 2 - 1, C = y + 2;
      u = -(d[C] - d[y]), l = -(d[C + 1] - d[y + 1]);
    }
  }
  if (e.midsrcArrowAngle = oa(u, l), i)
    u = v - e.segpts[e.segpts.length - 2], l = h - e.segpts[e.segpts.length - 1];
  else if (a || s || o || n) {
    var d = e.allpts, N = d.length, g = Ue(d[N - 6], d[N - 4], d[N - 2], 0.9), b = Ue(d[N - 5], d[N - 3], d[N - 1], 0.9);
    u = v - g, l = h - b;
  } else
    u = v - p, l = h - m;
  e.tgtArrowAngle = oa(u, l);
};
Ua.getArrowWidth = Ua.getArrowHeight = function(t11, e) {
  var r = this.arrowWidthCache = this.arrowWidthCache || {}, n = r[t11 + ", " + e];
  return n || (n = Math.max(Math.pow(t11 * 13.37, 0.9), 29) * e, r[t11 + ", " + e] = n, n);
};
var ot = {};
ot.findHaystackPoints = function(t11) {
  for (var e = 0; e < t11.length; e++) {
    var r = t11[e], n = r._private, a = n.rscratch;
    if (!a.haystack) {
      var i = Math.random() * 2 * Math.PI;
      a.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, a.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var s = n.source, o = n.target, u = s.position(), l = o.position(), f = s.width(), c = o.width(), v = s.height(), h = o.height(), d = r.pstyle("haystack-radius").value, g = d / 2;
    a.haystackPts = a.allpts = [a.source.x * f * g + u.x, a.source.y * v * g + u.y, a.target.x * c * g + l.x, a.target.y * h * g + l.y], a.midX = (a.allpts[0] + a.allpts[2]) / 2, a.midY = (a.allpts[1] + a.allpts[3]) / 2, a.edgeType = "haystack", a.haystack = true, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
  }
};
ot.findSegmentsPoints = function(t11, e) {
  var r = t11._private.rscratch, n = e.posPts, a = e.intersectionPts, i = e.vectorNormInverse, s = t11.pstyle("edge-distances").value, o = t11.pstyle("segment-weights"), u = t11.pstyle("segment-distances"), l = Math.min(o.pfValue.length, u.pfValue.length);
  r.edgeType = "segments", r.segpts = [];
  for (var f = 0; f < l; f++) {
    var c = o.pfValue[f], v = u.pfValue[f], h = 1 - c, d = c, g = s === "node-position" ? n : a, b = {
      x: g.x1 * h + g.x2 * d,
      y: g.y1 * h + g.y2 * d
    };
    r.segpts.push(b.x + i.x * v, b.y + i.y * v);
  }
};
ot.findLoopPoints = function(t11, e, r, n) {
  var a = t11._private.rscratch, i = e.dirCounts, s = e.srcPos, o = t11.pstyle("control-point-distances"), u = o ? o.pfValue[0] : void 0, l = t11.pstyle("loop-direction").pfValue, f = t11.pstyle("loop-sweep").pfValue, c = t11.pstyle("control-point-step-size").pfValue;
  a.edgeType = "self";
  var v = r, h = c;
  n && (v = 0, h = u);
  var d = l - Math.PI / 2, g = d - f / 2, b = d + f / 2, p = String(l + "_" + f);
  v = i[p] === void 0 ? i[p] = 0 : ++i[p], a.ctrlpts = [s.x + Math.cos(g) * 1.4 * h * (v / 3 + 1), s.y + Math.sin(g) * 1.4 * h * (v / 3 + 1), s.x + Math.cos(b) * 1.4 * h * (v / 3 + 1), s.y + Math.sin(b) * 1.4 * h * (v / 3 + 1)];
};
ot.findCompoundLoopPoints = function(t11, e, r, n) {
  var a = t11._private.rscratch;
  a.edgeType = "compound";
  var i = e.srcPos, s = e.tgtPos, o = e.srcW, u = e.srcH, l = e.tgtW, f = e.tgtH, c = t11.pstyle("control-point-step-size").pfValue, v = t11.pstyle("control-point-distances"), h = v ? v.pfValue[0] : void 0, d = r, g = c;
  n && (d = 0, g = h);
  var b = 50, p = {
    x: i.x - o / 2,
    y: i.y - u / 2
  }, m = {
    x: s.x - l / 2,
    y: s.y - f / 2
  }, y = {
    x: Math.min(p.x, m.x),
    y: Math.min(p.y, m.y)
  }, E = 0.5, C = Math.max(E, Math.log(o * 0.01)), D = Math.max(E, Math.log(l * 0.01));
  a.ctrlpts = [y.x, y.y - (1 + Math.pow(b, 1.12) / 100) * g * (d / 3 + 1) * C, y.x - (1 + Math.pow(b, 1.12) / 100) * g * (d / 3 + 1) * D, y.y];
};
ot.findStraightEdgePoints = function(t11) {
  t11._private.rscratch.edgeType = "straight";
};
ot.findBezierPoints = function(t11, e, r, n, a) {
  var i = t11._private.rscratch, s = e.vectorNormInverse, o = e.posPts, u = e.intersectionPts, l = t11.pstyle("edge-distances").value, f = t11.pstyle("control-point-step-size").pfValue, c = t11.pstyle("control-point-distances"), v = t11.pstyle("control-point-weights"), h = c && v ? Math.min(c.value.length, v.value.length) : 1, d = c ? c.pfValue[0] : void 0, g = v.value[0], b = n;
  i.edgeType = b ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var p = 0; p < h; p++) {
    var m = (0.5 - e.eles.length / 2 + r) * f * (a ? -1 : 1), y = void 0, E = Sl(m);
    b && (d = c ? c.pfValue[p] : f, g = v.value[p]), n ? y = d : y = d !== void 0 ? E * d : void 0;
    var C = y !== void 0 ? y : m, D = 1 - g, w = g, T = l === "node-position" ? o : u, x = {
      x: T.x1 * D + T.x2 * w,
      y: T.y1 * D + T.y2 * w
    };
    i.ctrlpts.push(x.x + s.x * C, x.y + s.y * C);
  }
};
ot.findTaxiPoints = function(t11, e) {
  var r = t11._private.rscratch;
  r.edgeType = "segments";
  var n = "vertical", a = "horizontal", i = "leftward", s = "rightward", o = "downward", u = "upward", l = "auto", f = e.posPts, c = e.srcW, v = e.srcH, h = e.tgtW, d = e.tgtH, g = t11.pstyle("edge-distances").value, b = g !== "node-position", p = t11.pstyle("taxi-direction").value, m = p, y = t11.pstyle("taxi-turn"), E = y.units === "%", C = y.pfValue, D = C < 0, w = t11.pstyle("taxi-turn-min-distance").pfValue, T = b ? (c + h) / 2 : 0, x = b ? (v + d) / 2 : 0, S = f.x2 - f.x1, L = f.y2 - f.y1, A = function(oe, xe) {
    return oe > 0 ? Math.max(oe - xe, 0) : Math.min(oe + xe, 0);
  }, O = A(S, T), N = A(L, x), R = false;
  m === l ? p = Math.abs(O) > Math.abs(N) ? a : n : m === u || m === o ? (p = n, R = true) : (m === i || m === s) && (p = a, R = true);
  var I = p === n, k = I ? N : O, P = I ? L : S, B = Sl(P), _ = false;
  !(R && (E || D)) && (m === o && P < 0 || m === u && P > 0 || m === i && P > 0 || m === s && P < 0) && (B *= -1, k = B * Math.abs(k), _ = true);
  var F;
  if (E) {
    var G = C < 0 ? 1 + C : C;
    F = G * k;
  } else {
    var z = C < 0 ? k : 0;
    F = z + C * B;
  }
  var V = function(oe) {
    return Math.abs(oe) < w || Math.abs(oe) >= Math.abs(k);
  }, U = V(F), Y = V(Math.abs(k) - Math.abs(F)), $ = U || Y;
  if ($ && !_)
    if (I) {
      var X = Math.abs(P) <= v / 2, K = Math.abs(S) <= h / 2;
      if (X) {
        var Z = (f.x1 + f.x2) / 2, te = f.y1, ve = f.y2;
        r.segpts = [Z, te, Z, ve];
      } else if (K) {
        var de = (f.y1 + f.y2) / 2, re = f.x1, ee = f.x2;
        r.segpts = [re, de, ee, de];
      } else
        r.segpts = [f.x1, f.y2];
    } else {
      var fe = Math.abs(P) <= c / 2, se = Math.abs(L) <= d / 2;
      if (fe) {
        var ae = (f.y1 + f.y2) / 2, ue = f.x1, Ee = f.x2;
        r.segpts = [ue, ae, Ee, ae];
      } else if (se) {
        var ge = (f.x1 + f.x2) / 2, ce = f.y1, J = f.y2;
        r.segpts = [ge, ce, ge, J];
      } else
        r.segpts = [f.x2, f.y1];
    }
  else if (I) {
    var M = f.y1 + F + (b ? v / 2 * B : 0), H = f.x1, Q = f.x2;
    r.segpts = [H, M, Q, M];
  } else {
    var q = f.x1 + F + (b ? c / 2 * B : 0), W = f.y1, pe = f.y2;
    r.segpts = [q, W, q, pe];
  }
};
ot.tryToCorrectInvalidPoints = function(t11, e) {
  var r = t11._private.rscratch;
  if (r.edgeType === "bezier") {
    var n = e.srcPos, a = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, u = e.tgtH, l = e.srcShape, f = e.tgtShape, c = !ne(r.startX) || !ne(r.startY), v = !ne(r.arrowStartX) || !ne(r.arrowStartY), h = !ne(r.endX) || !ne(r.endY), d = !ne(r.arrowEndX) || !ne(r.arrowEndY), g = 3, b = this.getArrowWidth(t11.pstyle("width").pfValue, t11.pstyle("arrow-scale").value) * this.arrowShapeWidth, p = g * b, m = br({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.startX,
      y: r.startY
    }), y = m < p, E = br({
      x: r.ctrlpts[0],
      y: r.ctrlpts[1]
    }, {
      x: r.endX,
      y: r.endY
    }), C = E < p, D = false;
    if (c || v || y) {
      D = true;
      var w = {
        x: r.ctrlpts[0] - n.x,
        y: r.ctrlpts[1] - n.y
      }, T = Math.sqrt(w.x * w.x + w.y * w.y), x = {
        x: w.x / T,
        y: w.y / T
      }, S = Math.max(i, s), L = {
        x: r.ctrlpts[0] + x.x * 2 * S,
        y: r.ctrlpts[1] + x.y * 2 * S
      }, A = l.intersectLine(n.x, n.y, i, s, L.x, L.y, 0);
      y ? (r.ctrlpts[0] = r.ctrlpts[0] + x.x * (p - m), r.ctrlpts[1] = r.ctrlpts[1] + x.y * (p - m)) : (r.ctrlpts[0] = A[0] + x.x * p, r.ctrlpts[1] = A[1] + x.y * p);
    }
    if (h || d || C) {
      D = true;
      var O = {
        x: r.ctrlpts[0] - a.x,
        y: r.ctrlpts[1] - a.y
      }, N = Math.sqrt(O.x * O.x + O.y * O.y), R = {
        x: O.x / N,
        y: O.y / N
      }, I = Math.max(i, s), k = {
        x: r.ctrlpts[0] + R.x * 2 * I,
        y: r.ctrlpts[1] + R.y * 2 * I
      }, P = f.intersectLine(a.x, a.y, o, u, k.x, k.y, 0);
      C ? (r.ctrlpts[0] = r.ctrlpts[0] + R.x * (p - E), r.ctrlpts[1] = r.ctrlpts[1] + R.y * (p - E)) : (r.ctrlpts[0] = P[0] + R.x * p, r.ctrlpts[1] = P[1] + R.y * p);
    }
    D && this.findEndpoints(t11);
  }
};
ot.storeAllpts = function(t11) {
  var e = t11._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var r = 0; r + 1 < e.ctrlpts.length; r += 2)
      e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var n, a;
    e.ctrlpts.length / 2 % 2 === 0 ? (n = e.allpts.length / 2 - 1, e.midX = e.allpts[n], e.midY = e.allpts[n + 1]) : (n = e.allpts.length / 2 - 3, a = 0.5, e.midX = Ue(e.allpts[n], e.allpts[n + 2], e.allpts[n + 4], a), e.midY = Ue(e.allpts[n + 1], e.allpts[n + 3], e.allpts[n + 5], a));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments")
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.segpts.length % 4 === 0) {
      var i = e.segpts.length / 2, s = i - 2;
      e.midX = (e.segpts[s] + e.segpts[i]) / 2, e.midY = (e.segpts[s + 1] + e.segpts[i + 1]) / 2;
    } else {
      var o = e.segpts.length / 2 - 1;
      e.midX = e.segpts[o], e.midY = e.segpts[o + 1];
    }
};
ot.checkForInvalidEdgeWarning = function(t11) {
  var e = t11[0]._private.rscratch;
  e.nodesOverlap || ne(e.startX) && ne(e.startY) && ne(e.endX) && ne(e.endY) ? e.loggedErr = false : e.loggedErr || (e.loggedErr = true, Ne("Edge `" + t11.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
ot.findEdgeControlPoints = function(t11) {
  var e = this;
  if (!(!t11 || t11.length === 0)) {
    for (var r = this, n = r.cy, a = n.hasCompoundNodes(), i = {
      map: new It(),
      get: function(w) {
        var T = this.map.get(w[0]);
        return T != null ? T.get(w[1]) : null;
      },
      set: function(w, T) {
        var x = this.map.get(w[0]);
        x == null && (x = new It(), this.map.set(w[0], x)), x.set(w[1], T);
      }
    }, s = [], o = [], u = 0; u < t11.length; u++) {
      var l = t11[u], f = l._private, c = l.pstyle("curve-style").value;
      if (!(l.removed() || !l.takesUpSpace())) {
        if (c === "haystack") {
          o.push(l);
          continue;
        }
        var v = c === "unbundled-bezier" || c === "segments" || c === "straight" || c === "straight-triangle" || c === "taxi", h = c === "unbundled-bezier" || c === "bezier", d = f.source, g = f.target, b = d.poolIndex(), p = g.poolIndex(), m = [b, p].sort(), y = i.get(m);
        y == null && (y = {
          eles: []
        }, i.set(m, y), s.push(m)), y.eles.push(l), v && (y.hasUnbundled = true), h && (y.hasBezier = true);
      }
    }
    for (var E = function(w) {
      var T = s[w], x = i.get(T), S = void 0;
      if (!x.hasUnbundled) {
        var L = x.eles[0].parallelEdges().filter(function(J) {
          return J.isBundledBezier();
        });
        bs(x.eles), L.forEach(function(J) {
          return x.eles.push(J);
        }), x.eles.sort(function(J, M) {
          return J.poolIndex() - M.poolIndex();
        });
      }
      var A = x.eles[0], O = A.source(), N = A.target();
      if (O.poolIndex() > N.poolIndex()) {
        var R = O;
        O = N, N = R;
      }
      var I = x.srcPos = O.position(), k = x.tgtPos = N.position(), P = x.srcW = O.outerWidth(), B = x.srcH = O.outerHeight(), _ = x.tgtW = N.outerWidth(), F = x.tgtH = N.outerHeight(), G = x.srcShape = r.nodeShapes[e.getNodeShape(O)], z = x.tgtShape = r.nodeShapes[e.getNodeShape(N)];
      x.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var V = 0; V < x.eles.length; V++) {
        var U = x.eles[V], Y = U[0]._private.rscratch, $ = U.pstyle("curve-style").value, X = $ === "unbundled-bezier" || $ === "segments" || $ === "taxi", K = !O.same(U.source());
        if (!x.calculatedIntersection && O !== N && (x.hasBezier || x.hasUnbundled)) {
          x.calculatedIntersection = true;
          var Z = G.intersectLine(I.x, I.y, P, B, k.x, k.y, 0), te = x.srcIntn = Z, ve = z.intersectLine(k.x, k.y, _, F, I.x, I.y, 0), de = x.tgtIntn = ve, re = x.intersectionPts = {
            x1: Z[0],
            x2: ve[0],
            y1: Z[1],
            y2: ve[1]
          }, ee = x.posPts = {
            x1: I.x,
            x2: k.x,
            y1: I.y,
            y2: k.y
          }, fe = ve[1] - Z[1], se = ve[0] - Z[0], ae = Math.sqrt(se * se + fe * fe), ue = x.vector = {
            x: se,
            y: fe
          }, Ee = x.vectorNorm = {
            x: ue.x / ae,
            y: ue.y / ae
          }, ge = {
            x: -Ee.y,
            y: Ee.x
          };
          x.nodesOverlap = !ne(ae) || z.checkPoint(Z[0], Z[1], 0, _, F, k.x, k.y) || G.checkPoint(ve[0], ve[1], 0, P, B, I.x, I.y), x.vectorNormInverse = ge, S = {
            nodesOverlap: x.nodesOverlap,
            dirCounts: x.dirCounts,
            calculatedIntersection: true,
            hasBezier: x.hasBezier,
            hasUnbundled: x.hasUnbundled,
            eles: x.eles,
            srcPos: k,
            tgtPos: I,
            srcW: _,
            srcH: F,
            tgtW: P,
            tgtH: B,
            srcIntn: de,
            tgtIntn: te,
            srcShape: z,
            tgtShape: G,
            posPts: {
              x1: ee.x2,
              y1: ee.y2,
              x2: ee.x1,
              y2: ee.y1
            },
            intersectionPts: {
              x1: re.x2,
              y1: re.y2,
              x2: re.x1,
              y2: re.y1
            },
            vector: {
              x: -ue.x,
              y: -ue.y
            },
            vectorNorm: {
              x: -Ee.x,
              y: -Ee.y
            },
            vectorNormInverse: {
              x: -ge.x,
              y: -ge.y
            }
          };
        }
        var ce = K ? S : x;
        Y.nodesOverlap = ce.nodesOverlap, Y.srcIntn = ce.srcIntn, Y.tgtIntn = ce.tgtIntn, a && (O.isParent() || O.isChild() || N.isParent() || N.isChild()) && (O.parents().anySame(N) || N.parents().anySame(O) || O.same(N) && O.isParent()) ? e.findCompoundLoopPoints(U, ce, V, X) : O === N ? e.findLoopPoints(U, ce, V, X) : $ === "segments" ? e.findSegmentsPoints(U, ce) : $ === "taxi" ? e.findTaxiPoints(U, ce) : $ === "straight" || !X && x.eles.length % 2 === 1 && V === Math.floor(x.eles.length / 2) ? e.findStraightEdgePoints(U) : e.findBezierPoints(U, ce, V, X, K), e.findEndpoints(U), e.tryToCorrectInvalidPoints(U, ce), e.checkForInvalidEdgeWarning(U), e.storeAllpts(U), e.storeEdgeProjections(U), e.calculateArrowAngles(U), e.recalculateEdgeLabelProjections(U), e.calculateLabelAngles(U);
      }
    }, C = 0; C < s.length; C++)
      E(C);
    this.findHaystackPoints(o);
  }
};
function gf(t11) {
  var e = [];
  if (t11 != null) {
    for (var r = 0; r < t11.length; r += 2) {
      var n = t11[r], a = t11[r + 1];
      e.push({
        x: n,
        y: a
      });
    }
    return e;
  }
}
ot.getSegmentPoints = function(t11) {
  var e = t11[0]._private.rscratch, r = e.edgeType;
  if (r === "segments")
    return this.recalculateRenderedStyle(t11), gf(e.segpts);
};
ot.getControlPoints = function(t11) {
  var e = t11[0]._private.rscratch, r = e.edgeType;
  if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound")
    return this.recalculateRenderedStyle(t11), gf(e.ctrlpts);
};
ot.getEdgeMidpoint = function(t11) {
  var e = t11[0]._private.rscratch;
  return this.recalculateRenderedStyle(t11), {
    x: e.midX,
    y: e.midY
  };
};
var Qn = {};
Qn.manualEndptToPx = function(t11, e) {
  var r = this, n = t11.position(), a = t11.outerWidth(), i = t11.outerHeight();
  if (e.value.length === 2) {
    var s = [e.pfValue[0], e.pfValue[1]];
    return e.units[0] === "%" && (s[0] = s[0] * a), e.units[1] === "%" && (s[1] = s[1] * i), s[0] += n.x, s[1] += n.y, s;
  } else {
    var o = e.pfValue[0];
    o = -Math.PI / 2 + o;
    var u = 2 * Math.max(a, i), l = [n.x + Math.cos(o) * u, n.y + Math.sin(o) * u];
    return r.nodeShapes[this.getNodeShape(t11)].intersectLine(n.x, n.y, a, i, l[0], l[1], 0);
  }
};
Qn.findEndpoints = function(t11) {
  var e = this, r, n = t11.source()[0], a = t11.target()[0], i = n.position(), s = a.position(), o = t11.pstyle("target-arrow-shape").value, u = t11.pstyle("source-arrow-shape").value, l = t11.pstyle("target-distance-from-node").pfValue, f = t11.pstyle("source-distance-from-node").pfValue, c = t11.pstyle("curve-style").value, v = t11._private.rscratch, h = v.edgeType, d = c === "taxi", g = h === "self" || h === "compound", b = h === "bezier" || h === "multibezier" || g, p = h !== "bezier", m = h === "straight" || h === "segments", y = h === "segments", E = b || p || m, C = g || d, D = t11.pstyle("source-endpoint"), w = C ? "outside-to-node" : D.value, T = t11.pstyle("target-endpoint"), x = C ? "outside-to-node" : T.value;
  v.srcManEndpt = D, v.tgtManEndpt = T;
  var S, L, A, O;
  if (b) {
    var N = [v.ctrlpts[0], v.ctrlpts[1]], R = p ? [v.ctrlpts[v.ctrlpts.length - 2], v.ctrlpts[v.ctrlpts.length - 1]] : N;
    S = R, L = N;
  } else if (m) {
    var I = y ? v.segpts.slice(0, 2) : [s.x, s.y], k = y ? v.segpts.slice(v.segpts.length - 2) : [i.x, i.y];
    S = k, L = I;
  }
  if (x === "inside-to-node")
    r = [s.x, s.y];
  else if (T.units)
    r = this.manualEndptToPx(a, T);
  else if (x === "outside-to-line")
    r = v.tgtIntn;
  else if (x === "outside-to-node" || x === "outside-to-node-or-label" ? A = S : (x === "outside-to-line" || x === "outside-to-line-or-label") && (A = [i.x, i.y]), r = e.nodeShapes[this.getNodeShape(a)].intersectLine(s.x, s.y, a.outerWidth(), a.outerHeight(), A[0], A[1], 0), x === "outside-to-node-or-label" || x === "outside-to-line-or-label") {
    var P = a._private.rscratch, B = P.labelWidth, _ = P.labelHeight, F = P.labelX, G = P.labelY, z = B / 2, V = _ / 2, U = a.pstyle("text-valign").value;
    U === "top" ? G -= V : U === "bottom" && (G += V);
    var Y = a.pstyle("text-halign").value;
    Y === "left" ? F -= z : Y === "right" && (F += z);
    var $ = Pn(A[0], A[1], [F - z, G - V, F + z, G - V, F + z, G + V, F - z, G + V], s.x, s.y);
    if ($.length > 0) {
      var X = i, K = hr(X, Fr(r)), Z = hr(X, Fr($)), te = K;
      if (Z < K && (r = $, te = Z), $.length > 2) {
        var ve = hr(X, {
          x: $[2],
          y: $[3]
        });
        ve < te && (r = [$[2], $[3]]);
      }
    }
  }
  var de = ua(r, S, e.arrowShapes[o].spacing(t11) + l), re = ua(r, S, e.arrowShapes[o].gap(t11) + l);
  if (v.endX = re[0], v.endY = re[1], v.arrowEndX = de[0], v.arrowEndY = de[1], w === "inside-to-node")
    r = [i.x, i.y];
  else if (D.units)
    r = this.manualEndptToPx(n, D);
  else if (w === "outside-to-line")
    r = v.srcIntn;
  else if (w === "outside-to-node" || w === "outside-to-node-or-label" ? O = L : (w === "outside-to-line" || w === "outside-to-line-or-label") && (O = [s.x, s.y]), r = e.nodeShapes[this.getNodeShape(n)].intersectLine(i.x, i.y, n.outerWidth(), n.outerHeight(), O[0], O[1], 0), w === "outside-to-node-or-label" || w === "outside-to-line-or-label") {
    var ee = n._private.rscratch, fe = ee.labelWidth, se = ee.labelHeight, ae = ee.labelX, ue = ee.labelY, Ee = fe / 2, ge = se / 2, ce = n.pstyle("text-valign").value;
    ce === "top" ? ue -= ge : ce === "bottom" && (ue += ge);
    var J = n.pstyle("text-halign").value;
    J === "left" ? ae -= Ee : J === "right" && (ae += Ee);
    var M = Pn(O[0], O[1], [ae - Ee, ue - ge, ae + Ee, ue - ge, ae + Ee, ue + ge, ae - Ee, ue + ge], i.x, i.y);
    if (M.length > 0) {
      var H = s, Q = hr(H, Fr(r)), q = hr(H, Fr(M)), W = Q;
      if (q < Q && (r = [M[0], M[1]], W = q), M.length > 2) {
        var pe = hr(H, {
          x: M[2],
          y: M[3]
        });
        pe < W && (r = [M[2], M[3]]);
      }
    }
  }
  var j = ua(r, L, e.arrowShapes[u].spacing(t11) + f), oe = ua(r, L, e.arrowShapes[u].gap(t11) + f);
  v.startX = oe[0], v.startY = oe[1], v.arrowStartX = j[0], v.arrowStartY = j[1], E && (!ne(v.startX) || !ne(v.startY) || !ne(v.endX) || !ne(v.endY) ? v.badLine = true : v.badLine = false);
};
Qn.getSourceEndpoint = function(t11) {
  var e = t11[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t11), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[0],
        y: e.haystackPts[1]
      };
    default:
      return {
        x: e.arrowStartX,
        y: e.arrowStartY
      };
  }
};
Qn.getTargetEndpoint = function(t11) {
  var e = t11[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(t11), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[2],
        y: e.haystackPts[3]
      };
    default:
      return {
        x: e.arrowEndX,
        y: e.arrowEndY
      };
  }
};
var Os = {};
function oE(t11, e, r) {
  for (var n = function(l, f, c, v) {
    return Ue(l, f, c, v);
  }, a = e._private, i = a.rstyle.bezierPts, s = 0; s < t11.bezierProjPcts.length; s++) {
    var o = t11.bezierProjPcts[s];
    i.push({
      x: n(r[0], r[2], r[4], o),
      y: n(r[1], r[3], r[5], o)
    });
  }
}
Os.storeEdgeProjections = function(t11) {
  var e = t11._private, r = e.rscratch, n = r.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, n === "multibezier" || n === "bezier" || n === "self" || n === "compound") {
    e.rstyle.bezierPts = [];
    for (var a = 0; a + 5 < r.allpts.length; a += 4)
      oE(this, t11, r.allpts.slice(a, a + 6));
  } else if (n === "segments")
    for (var i = e.rstyle.linePts = [], a = 0; a + 1 < r.allpts.length; a += 2)
      i.push({
        x: r.allpts[a],
        y: r.allpts[a + 1]
      });
  else if (n === "haystack") {
    var s = r.haystackPts;
    e.rstyle.haystackPts = [{
      x: s[0],
      y: s[1]
    }, {
      x: s[2],
      y: s[3]
    }];
  }
  e.rstyle.arrowWidth = this.getArrowWidth(t11.pstyle("width").pfValue, t11.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
Os.recalculateEdgeProjections = function(t11) {
  this.findEdgeControlPoints(t11);
};
var Bt = {};
Bt.recalculateNodeLabelProjection = function(t11) {
  var e = t11.pstyle("label").strValue;
  if (!nr(e)) {
    var r, n, a = t11._private, i = t11.width(), s = t11.height(), o = t11.padding(), u = t11.position(), l = t11.pstyle("text-halign").strValue, f = t11.pstyle("text-valign").strValue, c = a.rscratch, v = a.rstyle;
    switch (l) {
      case "left":
        r = u.x - i / 2 - o;
        break;
      case "right":
        r = u.x + i / 2 + o;
        break;
      default:
        r = u.x;
    }
    switch (f) {
      case "top":
        n = u.y - s / 2 - o;
        break;
      case "bottom":
        n = u.y + s / 2 + o;
        break;
      default:
        n = u.y;
    }
    c.labelX = r, c.labelY = n, v.labelX = r, v.labelY = n, this.calculateLabelAngles(t11), this.applyLabelDimensions(t11);
  }
};
var pf = function(e, r) {
  var n = Math.atan(r / e);
  return e === 0 && n < 0 && (n = n * -1), n;
}, yf = function(e, r) {
  var n = r.x - e.x, a = r.y - e.y;
  return pf(n, a);
}, uE = function(e, r, n, a) {
  var i = Rn(0, a - 1e-3, 1), s = Rn(0, a + 1e-3, 1), o = Gr(e, r, n, i), u = Gr(e, r, n, s);
  return yf(o, u);
};
Bt.recalculateEdgeLabelProjections = function(t11) {
  var e, r = t11._private, n = r.rscratch, a = this, i = {
    mid: t11.pstyle("label").strValue,
    source: t11.pstyle("source-label").strValue,
    target: t11.pstyle("target-label").strValue
  };
  if (!!(i.mid || i.source || i.target)) {
    e = {
      x: n.midX,
      y: n.midY
    };
    var s = function(c, v, h) {
      Jt(r.rscratch, c, v, h), Jt(r.rstyle, c, v, h);
    };
    s("labelX", null, e.x), s("labelY", null, e.y);
    var o = pf(n.midDispX, n.midDispY);
    s("labelAutoAngle", null, o);
    var u = function f() {
      if (f.cache)
        return f.cache;
      for (var c = [], v = 0; v + 5 < n.allpts.length; v += 4) {
        var h = {
          x: n.allpts[v],
          y: n.allpts[v + 1]
        }, d = {
          x: n.allpts[v + 2],
          y: n.allpts[v + 3]
        }, g = {
          x: n.allpts[v + 4],
          y: n.allpts[v + 5]
        };
        c.push({
          p0: h,
          p1: d,
          p2: g,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var b = r.rstyle.bezierPts, p = a.bezierProjPcts.length;
      function m(w, T, x, S, L) {
        var A = br(T, x), O = w.segments[w.segments.length - 1], N = {
          p0: T,
          p1: x,
          t0: S,
          t1: L,
          startDist: O ? O.startDist + O.length : 0,
          length: A
        };
        w.segments.push(N), w.length += A;
      }
      for (var y = 0; y < c.length; y++) {
        var E = c[y], C = c[y - 1];
        C && (E.startDist = C.startDist + C.length), m(E, E.p0, b[y * p], 0, a.bezierProjPcts[0]);
        for (var D = 0; D < p - 1; D++)
          m(E, b[y * p + D], b[y * p + D + 1], a.bezierProjPcts[D], a.bezierProjPcts[D + 1]);
        m(E, b[y * p + p - 1], E.p2, a.bezierProjPcts[p - 1], 1);
      }
      return f.cache = c;
    }, l = function(c) {
      var v, h = c === "source";
      if (!!i[c]) {
        var d = t11.pstyle(c + "-text-offset").pfValue;
        switch (n.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var g = u(), b, p = 0, m = 0, y = 0; y < g.length; y++) {
              for (var E = g[h ? y : g.length - 1 - y], C = 0; C < E.segments.length; C++) {
                var D = E.segments[h ? C : E.segments.length - 1 - C], w = y === g.length - 1 && C === E.segments.length - 1;
                if (p = m, m += D.length, m >= d || w) {
                  b = {
                    cp: E,
                    segment: D
                  };
                  break;
                }
              }
              if (b)
                break;
            }
            var T = b.cp, x = b.segment, S = (d - p) / x.length, L = x.t1 - x.t0, A = h ? x.t0 + L * S : x.t1 - L * S;
            A = Rn(0, A, 1), e = Gr(T.p0, T.p1, T.p2, A), v = uE(T.p0, T.p1, T.p2, A);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var O = 0, N, R, I, k, P = n.allpts.length, B = 0; B + 3 < P && (h ? (I = {
              x: n.allpts[B],
              y: n.allpts[B + 1]
            }, k = {
              x: n.allpts[B + 2],
              y: n.allpts[B + 3]
            }) : (I = {
              x: n.allpts[P - 2 - B],
              y: n.allpts[P - 1 - B]
            }, k = {
              x: n.allpts[P - 4 - B],
              y: n.allpts[P - 3 - B]
            }), N = br(I, k), R = O, O += N, !(O >= d)); B += 2)
              ;
            var _ = d - R, F = _ / N;
            F = Rn(0, F, 1), e = C1(I, k, F), v = yf(I, k);
            break;
          }
        }
        s("labelX", c, e.x), s("labelY", c, e.y), s("labelAutoAngle", c, v);
      }
    };
    l("source"), l("target"), this.applyLabelDimensions(t11);
  }
};
Bt.applyLabelDimensions = function(t11) {
  this.applyPrefixedLabelDimensions(t11), t11.isEdge() && (this.applyPrefixedLabelDimensions(t11, "source"), this.applyPrefixedLabelDimensions(t11, "target"));
};
Bt.applyPrefixedLabelDimensions = function(t11, e) {
  var r = t11._private, n = this.getLabelText(t11, e), a = this.calculateLabelDimensions(t11, n), i = t11.pstyle("line-height").pfValue, s = t11.pstyle("text-wrap").strValue, o = St(r.rscratch, "labelWrapCachedLines", e) || [], u = s !== "wrap" ? 1 : Math.max(o.length, 1), l = a.height / u, f = l * i, c = a.width, v = a.height + (u - 1) * (i - 1) * l;
  Jt(r.rstyle, "labelWidth", e, c), Jt(r.rscratch, "labelWidth", e, c), Jt(r.rstyle, "labelHeight", e, v), Jt(r.rscratch, "labelHeight", e, v), Jt(r.rscratch, "labelLineHeight", e, f);
};
Bt.getLabelText = function(t11, e) {
  var r = t11._private, n = e ? e + "-" : "", a = t11.pstyle(n + "label").strValue, i = t11.pstyle("text-transform").value, s = function(_, F) {
    return F ? (Jt(r.rscratch, _, e, F), F) : St(r.rscratch, _, e);
  };
  if (!a)
    return "";
  i == "none" || (i == "uppercase" ? a = a.toUpperCase() : i == "lowercase" && (a = a.toLowerCase()));
  var o = t11.pstyle("text-wrap").value;
  if (o === "wrap") {
    var u = s("labelKey");
    if (u != null && s("labelWrapKey") === u)
      return s("labelWrapCachedText");
    for (var l = "​", f = a.split(`
`), c = t11.pstyle("text-max-width").pfValue, v = t11.pstyle("text-overflow-wrap").value, h = v === "anywhere", d = [], g = /[\s\u200b]+/, b = h ? "" : " ", p = 0; p < f.length; p++) {
      var m = f[p], y = this.calculateLabelDimensions(t11, m), E = y.width;
      if (h) {
        var C = m.split("").join(l);
        m = C;
      }
      if (E > c) {
        for (var D = m.split(g), w = "", T = 0; T < D.length; T++) {
          var x = D[T], S = w.length === 0 ? x : w + b + x, L = this.calculateLabelDimensions(t11, S), A = L.width;
          A <= c ? w += x + b : (w && d.push(w), w = x + b);
        }
        w.match(/^[\s\u200b]+$/) || d.push(w);
      } else
        d.push(m);
    }
    s("labelWrapCachedLines", d), a = s("labelWrapCachedText", d.join(`
`)), s("labelWrapKey", u);
  } else if (o === "ellipsis") {
    var O = t11.pstyle("text-max-width").pfValue, N = "", R = "…", I = false;
    if (this.calculateLabelDimensions(t11, a).width < O)
      return a;
    for (var k = 0; k < a.length; k++) {
      var P = this.calculateLabelDimensions(t11, N + a[k] + R).width;
      if (P > O)
        break;
      N += a[k], k === a.length - 1 && (I = true);
    }
    return I || (N += R), N;
  }
  return a;
};
Bt.getLabelJustification = function(t11) {
  var e = t11.pstyle("text-justification").strValue, r = t11.pstyle("text-halign").strValue;
  if (e === "auto")
    if (t11.isNode())
      switch (r) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    else
      return "center";
  else
    return e;
};
Bt.calculateLabelDimensions = function(t11, e) {
  var r = this, n = mr(e, t11._private.labelDimsKey), a = r.labelDimCache || (r.labelDimCache = []), i = a[n];
  if (i != null)
    return i;
  var s = 0, o = t11.pstyle("font-style").strValue, u = t11.pstyle("font-size").pfValue, l = t11.pstyle("font-family").strValue, f = t11.pstyle("font-weight").strValue, c = this.labelCalcCanvas, v = this.labelCalcCanvasContext;
  if (!c) {
    c = this.labelCalcCanvas = document.createElement("canvas"), v = this.labelCalcCanvasContext = c.getContext("2d");
    var h = c.style;
    h.position = "absolute", h.left = "-9999px", h.top = "-9999px", h.zIndex = "-1", h.visibility = "hidden", h.pointerEvents = "none";
  }
  v.font = "".concat(o, " ").concat(f, " ").concat(u, "px ").concat(l);
  for (var d = 0, g = 0, b = e.split(`
`), p = 0; p < b.length; p++) {
    var m = b[p], y = v.measureText(m), E = Math.ceil(y.width), C = u;
    d = Math.max(E, d), g += C;
  }
  return d += s, g += s, a[n] = {
    width: d,
    height: g
  };
};
Bt.calculateLabelAngle = function(t11, e) {
  var r = t11._private, n = r.rscratch, a = t11.isEdge(), i = e ? e + "-" : "", s = t11.pstyle(i + "text-rotation"), o = s.strValue;
  return o === "none" ? 0 : a && o === "autorotate" ? n.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
Bt.calculateLabelAngles = function(t11) {
  var e = this, r = t11.isEdge(), n = t11._private, a = n.rscratch;
  a.labelAngle = e.calculateLabelAngle(t11), r && (a.sourceLabelAngle = e.calculateLabelAngle(t11, "source"), a.targetLabelAngle = e.calculateLabelAngle(t11, "target"));
};
var mf = {}, su = 28, ou = false;
mf.getNodeShape = function(t11) {
  var e = this, r = t11.pstyle("shape").value;
  if (r === "cutrectangle" && (t11.width() < su || t11.height() < su))
    return ou || (Ne("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), ou = true), "rectangle";
  if (t11.isParent())
    return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
  if (r === "polygon") {
    var n = t11.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(n).name;
  }
  return r;
};
var vi = {};
vi.registerCalculationListeners = function() {
  var t11 = this.cy, e = t11.collection(), r = this, n = function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (e.merge(s), o)
      for (var u = 0; u < s.length; u++) {
        var l = s[u], f = l._private, c = f.rstyle;
        c.clean = false, c.cleanConnected = false;
      }
  };
  r.binder(t11).on("bounds.* dirty.*", function(s) {
    var o = s.target;
    n(o);
  }).on("style.* background.*", function(s) {
    var o = s.target;
    n(o, false);
  });
  var a = function(s) {
    if (s) {
      var o = r.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var u = 0; u < e.length; u++) {
        var l = e[u], f = l._private.rstyle;
        l.isNode() && !f.cleanConnected && (n(l.connectedEdges()), f.cleanConnected = true);
      }
      if (o)
        for (var c = 0; c < o.length; c++) {
          var v = o[c];
          v(s, e);
        }
      r.recalculateRenderedStyle(e), e = t11.collection();
    }
  };
  r.flushRenderedStyleQueue = function() {
    a(true);
  }, r.beforeRender(a, r.beforeRenderPriorities.eleCalcs);
};
vi.onUpdateEleCalcs = function(t11) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(t11);
};
vi.recalculateRenderedStyle = function(t11, e) {
  var r = function(E) {
    return E._private.rstyle.cleanConnected;
  }, n = [], a = [];
  if (!this.destroyed) {
    e === void 0 && (e = true);
    for (var i = 0; i < t11.length; i++) {
      var s = t11[i], o = s._private, u = o.rstyle;
      s.isEdge() && (!r(s.source()) || !r(s.target())) && (u.clean = false), !(e && u.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? a.push(s) : n.push(s), u.clean = true);
    }
    for (var l = 0; l < a.length; l++) {
      var f = a[l], c = f._private, v = c.rstyle, h = f.position();
      this.recalculateNodeLabelProjection(f), v.nodeX = h.x, v.nodeY = h.y, v.nodeW = f.pstyle("width").pfValue, v.nodeH = f.pstyle("height").pfValue;
    }
    this.recalculateEdgeProjections(n);
    for (var d = 0; d < n.length; d++) {
      var g = n[d], b = g._private, p = b.rstyle, m = b.rscratch;
      p.srcX = m.arrowStartX, p.srcY = m.arrowStartY, p.tgtX = m.arrowEndX, p.tgtY = m.arrowEndY, p.midX = m.midX, p.midY = m.midY, p.labelAngle = m.labelAngle, p.sourceLabelAngle = m.sourceLabelAngle, p.targetLabelAngle = m.targetLabelAngle;
    }
  }
};
var di = {};
di.updateCachedGrabbedEles = function() {
  var t11 = this.cachedZSortedEles;
  if (!!t11) {
    t11.drag = [], t11.nondrag = [];
    for (var e = [], r = 0; r < t11.length; r++) {
      var n = t11[r], a = n._private.rscratch;
      n.grabbed() && !n.isParent() ? e.push(n) : a.inDragLayer ? t11.drag.push(n) : t11.nondrag.push(n);
    }
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      t11.drag.push(n);
    }
  }
};
di.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
di.getCachedZSortedEles = function(t11) {
  if (t11 || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(nf), e.interactive = e.filter(function(r) {
      return r.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var bf = {};
[Dr, Ua, ot, Qn, Os, Bt, mf, vi, di].forEach(function(t11) {
  he(bf, t11);
});
var wf = {};
wf.getCachedImage = function(t11, e, r) {
  var n = this, a = n.imageCache = n.imageCache || {}, i = a[t11];
  if (i)
    return i.image.complete || i.image.addEventListener("load", r), i.image;
  i = a[t11] = a[t11] || {};
  var s = i.image = new Image();
  s.addEventListener("load", r), s.addEventListener("error", function() {
    s.error = true;
  });
  var o = "data:", u = t11.substring(0, o.length).toLowerCase() === o;
  return u || (s.crossOrigin = e), s.src = t11, s;
};
var rn = {};
rn.registerBinding = function(t11, e, r, n) {
  var a = Array.prototype.slice.apply(arguments, [1]), i = this.binder(t11);
  return i.on.apply(i, a);
};
rn.binder = function(t11) {
  var e = this, r = t11 === window || t11 === document || t11 === document.body || Nm(t11);
  if (e.supportsPassiveEvents == null) {
    var n = false;
    try {
      var a = Object.defineProperty({}, "passive", {
        get: function() {
          return n = true, true;
        }
      });
      window.addEventListener("test", null, a);
    } catch {
    }
    e.supportsPassiveEvents = n;
  }
  var i = function(o, u, l) {
    var f = Array.prototype.slice.call(arguments);
    return r && e.supportsPassiveEvents && (f[2] = {
      capture: l != null ? l : false,
      passive: false,
      once: false
    }), e.bindings.push({
      target: t11,
      args: f
    }), (t11.addEventListener || t11.on).apply(t11, f), this;
  };
  return {
    on: i,
    addEventListener: i,
    addListener: i,
    bind: i
  };
};
rn.nodeIsDraggable = function(t11) {
  return t11 && t11.isNode() && !t11.locked() && t11.grabbable();
};
rn.nodeIsGrabbable = function(t11) {
  return this.nodeIsDraggable(t11) && t11.interactive();
};
rn.load = function() {
  var t11 = this, e = function(M) {
    return M.selected();
  }, r = function(M, H, Q, q) {
    M == null && (M = t11.cy);
    for (var W = 0; W < H.length; W++) {
      var pe = H[W];
      M.emit({
        originalEvent: Q,
        type: pe,
        position: q
      });
    }
  }, n = function(M) {
    return M.shiftKey || M.metaKey || M.ctrlKey;
  }, a = function(M, H) {
    var Q = true;
    if (t11.cy.hasCompoundNodes() && M && M.pannable())
      for (var q = 0; H && q < H.length; q++) {
        var M = H[q];
        if (M.isNode() && M.isParent() && !M.pannable()) {
          Q = false;
          break;
        }
      }
    else
      Q = true;
    return Q;
  }, i = function(M) {
    M[0]._private.grabbed = true;
  }, s = function(M) {
    M[0]._private.grabbed = false;
  }, o = function(M) {
    M[0]._private.rscratch.inDragLayer = true;
  }, u = function(M) {
    M[0]._private.rscratch.inDragLayer = false;
  }, l = function(M) {
    M[0]._private.rscratch.isGrabTarget = true;
  }, f = function(M) {
    M[0]._private.rscratch.isGrabTarget = false;
  }, c = function(M, H) {
    var Q = H.addToList, q = Q.has(M);
    !q && M.grabbable() && !M.locked() && (Q.merge(M), i(M));
  }, v = function(M, H) {
    if (!!M.cy().hasCompoundNodes() && !(H.inDragLayer == null && H.addToList == null)) {
      var Q = M.descendants();
      H.inDragLayer && (Q.forEach(o), Q.connectedEdges().forEach(o)), H.addToList && c(Q, H);
    }
  }, h = function(M, H) {
    H = H || {};
    var Q = M.cy().hasCompoundNodes();
    H.inDragLayer && (M.forEach(o), M.neighborhood().stdFilter(function(q) {
      return !Q || q.isEdge();
    }).forEach(o)), H.addToList && M.forEach(function(q) {
      c(q, H);
    }), v(M, H), b(M, {
      inDragLayer: H.inDragLayer
    }), t11.updateCachedGrabbedEles();
  }, d = h, g = function(M) {
    !M || (t11.getCachedZSortedEles().forEach(function(H) {
      s(H), u(H), f(H);
    }), t11.updateCachedGrabbedEles());
  }, b = function(M, H) {
    if (!(H.inDragLayer == null && H.addToList == null) && !!M.cy().hasCompoundNodes()) {
      var Q = M.ancestors().orphans();
      if (!Q.same(M)) {
        var q = Q.descendants().spawnSelf().merge(Q).unmerge(M).unmerge(M.descendants()), W = q.connectedEdges();
        H.inDragLayer && (W.forEach(o), q.forEach(o)), H.addToList && q.forEach(function(pe) {
          c(pe, H);
        });
      }
    }
  }, p = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, m = typeof MutationObserver < "u", y = typeof ResizeObserver < "u";
  m ? (t11.removeObserver = new MutationObserver(function(J) {
    for (var M = 0; M < J.length; M++) {
      var H = J[M], Q = H.removedNodes;
      if (Q)
        for (var q = 0; q < Q.length; q++) {
          var W = Q[q];
          if (W === t11.container) {
            t11.destroy();
            break;
          }
        }
    }
  }), t11.container.parentNode && t11.removeObserver.observe(t11.container.parentNode, {
    childList: true
  })) : t11.registerBinding(t11.container, "DOMNodeRemoved", function(J) {
    t11.destroy();
  });
  var E = ti.default(function() {
    t11.cy.resize();
  }, 100);
  m && (t11.styleObserver = new MutationObserver(E), t11.styleObserver.observe(t11.container, {
    attributes: true
  })), t11.registerBinding(window, "resize", E), y && (t11.resizeObserver = new ResizeObserver(E), t11.resizeObserver.observe(t11.container));
  var C = function(M, H) {
    for (; M != null; )
      H(M), M = M.parentNode;
  }, D = function() {
    t11.invalidateContainerClientCoordsCache();
  };
  C(t11.container, function(J) {
    t11.registerBinding(J, "transitionend", D), t11.registerBinding(J, "animationend", D), t11.registerBinding(J, "scroll", D);
  }), t11.registerBinding(t11.container, "contextmenu", function(J) {
    J.preventDefault();
  });
  var w = function() {
    return t11.selection[4] !== 0;
  }, T = function(M) {
    for (var H = t11.findContainerClientCoords(), Q = H[0], q = H[1], W = H[2], pe = H[3], j = M.touches ? M.touches : [M], oe = false, xe = 0; xe < j.length; xe++) {
      var Me = j[xe];
      if (Q <= Me.clientX && Me.clientX <= Q + W && q <= Me.clientY && Me.clientY <= q + pe) {
        oe = true;
        break;
      }
    }
    if (!oe)
      return false;
    for (var be = t11.container, Le = M.target, ye = Le.parentNode, we = false; ye; ) {
      if (ye === be) {
        we = true;
        break;
      }
      ye = ye.parentNode;
    }
    return !!we;
  };
  t11.registerBinding(t11.container, "mousedown", function(M) {
    if (!!T(M)) {
      M.preventDefault(), p(), t11.hoverData.capture = true, t11.hoverData.which = M.which;
      var H = t11.cy, Q = [M.clientX, M.clientY], q = t11.projectIntoViewport(Q[0], Q[1]), W = t11.selection, pe = t11.findNearestElements(q[0], q[1], true, false), j = pe[0], oe = t11.dragData.possibleDragElements;
      t11.hoverData.mdownPos = q, t11.hoverData.mdownGPos = Q;
      var xe = function() {
        t11.hoverData.tapholdCancelled = false, clearTimeout(t11.hoverData.tapholdTimeout), t11.hoverData.tapholdTimeout = setTimeout(function() {
          if (!t11.hoverData.tapholdCancelled) {
            var $e = t11.hoverData.down;
            $e ? $e.emit({
              originalEvent: M,
              type: "taphold",
              position: {
                x: q[0],
                y: q[1]
              }
            }) : H.emit({
              originalEvent: M,
              type: "taphold",
              position: {
                x: q[0],
                y: q[1]
              }
            });
          }
        }, t11.tapholdDuration);
      };
      if (M.which == 3) {
        t11.hoverData.cxtStarted = true;
        var Me = {
          originalEvent: M,
          type: "cxttapstart",
          position: {
            x: q[0],
            y: q[1]
          }
        };
        j ? (j.activate(), j.emit(Me), t11.hoverData.down = j) : H.emit(Me), t11.hoverData.downTime = new Date().getTime(), t11.hoverData.cxtDragged = false;
      } else if (M.which == 1) {
        j && j.activate();
        {
          if (j != null && t11.nodeIsGrabbable(j)) {
            var be = function($e) {
              return {
                originalEvent: M,
                type: $e,
                position: {
                  x: q[0],
                  y: q[1]
                }
              };
            }, Le = function($e) {
              $e.emit(be("grab"));
            };
            if (l(j), !j.selected())
              oe = t11.dragData.possibleDragElements = H.collection(), d(j, {
                addToList: oe
              }), j.emit(be("grabon")).emit(be("grab"));
            else {
              oe = t11.dragData.possibleDragElements = H.collection();
              var ye = H.$(function(we) {
                return we.isNode() && we.selected() && t11.nodeIsGrabbable(we);
              });
              h(ye, {
                addToList: oe
              }), j.emit(be("grabon")), ye.forEach(Le);
            }
            t11.redrawHint("eles", true), t11.redrawHint("drag", true);
          }
          t11.hoverData.down = j, t11.hoverData.downs = pe, t11.hoverData.downTime = new Date().getTime();
        }
        r(j, ["mousedown", "tapstart", "vmousedown"], M, {
          x: q[0],
          y: q[1]
        }), j == null ? (W[4] = 1, t11.data.bgActivePosistion = {
          x: q[0],
          y: q[1]
        }, t11.redrawHint("select", true), t11.redraw()) : j.pannable() && (W[4] = 1), xe();
      }
      W[0] = W[2] = q[0], W[1] = W[3] = q[1];
    }
  }, false), t11.registerBinding(window, "mousemove", function(M) {
    var H = t11.hoverData.capture;
    if (!(!H && !T(M))) {
      var Q = false, q = t11.cy, W = q.zoom(), pe = [M.clientX, M.clientY], j = t11.projectIntoViewport(pe[0], pe[1]), oe = t11.hoverData.mdownPos, xe = t11.hoverData.mdownGPos, Me = t11.selection, be = null;
      !t11.hoverData.draggingEles && !t11.hoverData.dragging && !t11.hoverData.selecting && (be = t11.findNearestElement(j[0], j[1], true, false));
      var Le = t11.hoverData.last, ye = t11.hoverData.down, we = [j[0] - Me[2], j[1] - Me[3]], $e = t11.dragData.possibleDragElements, Xe;
      if (xe) {
        var Et = pe[0] - xe[0], xt = Et * Et, qe = pe[1] - xe[1], yt = qe * qe, it = xt + yt;
        t11.hoverData.isOverThresholdDrag = Xe = it >= t11.desktopTapThreshold2;
      }
      var _t = n(M);
      Xe && (t11.hoverData.tapholdCancelled = true);
      var qt = function() {
        var Mt = t11.hoverData.dragDelta = t11.hoverData.dragDelta || [];
        Mt.length === 0 ? (Mt.push(we[0]), Mt.push(we[1])) : (Mt[0] += we[0], Mt[1] += we[1]);
      };
      Q = true, r(be, ["mousemove", "vmousemove", "tapdrag"], M, {
        x: j[0],
        y: j[1]
      });
      var Lr = function() {
        t11.data.bgActivePosistion = void 0, t11.hoverData.selecting || q.emit({
          originalEvent: M,
          type: "boxstart",
          position: {
            x: j[0],
            y: j[1]
          }
        }), Me[4] = 1, t11.hoverData.selecting = true, t11.redrawHint("select", true), t11.redraw();
      };
      if (t11.hoverData.which === 3) {
        if (Xe) {
          var fr = {
            originalEvent: M,
            type: "cxtdrag",
            position: {
              x: j[0],
              y: j[1]
            }
          };
          ye ? ye.emit(fr) : q.emit(fr), t11.hoverData.cxtDragged = true, (!t11.hoverData.cxtOver || be !== t11.hoverData.cxtOver) && (t11.hoverData.cxtOver && t11.hoverData.cxtOver.emit({
            originalEvent: M,
            type: "cxtdragout",
            position: {
              x: j[0],
              y: j[1]
            }
          }), t11.hoverData.cxtOver = be, be && be.emit({
            originalEvent: M,
            type: "cxtdragover",
            position: {
              x: j[0],
              y: j[1]
            }
          }));
        }
      } else if (t11.hoverData.dragging) {
        if (Q = true, q.panningEnabled() && q.userPanningEnabled()) {
          var Ar;
          if (t11.hoverData.justStartedPan) {
            var ea = t11.hoverData.mdownPos;
            Ar = {
              x: (j[0] - ea[0]) * W,
              y: (j[1] - ea[1]) * W
            }, t11.hoverData.justStartedPan = false;
          } else
            Ar = {
              x: we[0] * W,
              y: we[1] * W
            };
          q.panBy(Ar), q.emit("dragpan"), t11.hoverData.dragged = true;
        }
        j = t11.projectIntoViewport(M.clientX, M.clientY);
      } else if (Me[4] == 1 && (ye == null || ye.pannable())) {
        if (Xe) {
          if (!t11.hoverData.dragging && q.boxSelectionEnabled() && (_t || !q.panningEnabled() || !q.userPanningEnabled()))
            Lr();
          else if (!t11.hoverData.selecting && q.panningEnabled() && q.userPanningEnabled()) {
            var cr = a(ye, t11.hoverData.downs);
            cr && (t11.hoverData.dragging = true, t11.hoverData.justStartedPan = true, Me[4] = 0, t11.data.bgActivePosistion = Fr(oe), t11.redrawHint("select", true), t11.redraw());
          }
          ye && ye.pannable() && ye.active() && ye.unactivate();
        }
      } else {
        if (ye && ye.pannable() && ye.active() && ye.unactivate(), (!ye || !ye.grabbed()) && be != Le && (Le && r(Le, ["mouseout", "tapdragout"], M, {
          x: j[0],
          y: j[1]
        }), be && r(be, ["mouseover", "tapdragover"], M, {
          x: j[0],
          y: j[1]
        }), t11.hoverData.last = be), ye)
          if (Xe) {
            if (q.boxSelectionEnabled() && _t)
              ye && ye.grabbed() && (g($e), ye.emit("freeon"), $e.emit("free"), t11.dragData.didDrag && (ye.emit("dragfreeon"), $e.emit("dragfree"))), Lr();
            else if (ye && ye.grabbed() && t11.nodeIsDraggable(ye)) {
              var ut = !t11.dragData.didDrag;
              ut && t11.redrawHint("eles", true), t11.dragData.didDrag = true, t11.hoverData.draggingEles || h($e, {
                inDragLayer: true
              });
              var je = {
                x: 0,
                y: 0
              };
              if (ne(we[0]) && ne(we[1]) && (je.x += we[0], je.y += we[1], ut)) {
                var lt = t11.hoverData.dragDelta;
                lt && ne(lt[0]) && ne(lt[1]) && (je.x += lt[0], je.y += lt[1]);
              }
              t11.hoverData.draggingEles = true, $e.silentShift(je).emit("position drag"), t11.redrawHint("drag", true), t11.redraw();
            }
          } else
            qt();
        Q = true;
      }
      if (Me[2] = j[0], Me[3] = j[1], Q)
        return M.stopPropagation && M.stopPropagation(), M.preventDefault && M.preventDefault(), false;
    }
  }, false);
  var x, S, L;
  t11.registerBinding(window, "mouseup", function(M) {
    var H = t11.hoverData.capture;
    if (!!H) {
      t11.hoverData.capture = false;
      var Q = t11.cy, q = t11.projectIntoViewport(M.clientX, M.clientY), W = t11.selection, pe = t11.findNearestElement(q[0], q[1], true, false), j = t11.dragData.possibleDragElements, oe = t11.hoverData.down, xe = n(M);
      if (t11.data.bgActivePosistion && (t11.redrawHint("select", true), t11.redraw()), t11.hoverData.tapholdCancelled = true, t11.data.bgActivePosistion = void 0, oe && oe.unactivate(), t11.hoverData.which === 3) {
        var Me = {
          originalEvent: M,
          type: "cxttapend",
          position: {
            x: q[0],
            y: q[1]
          }
        };
        if (oe ? oe.emit(Me) : Q.emit(Me), !t11.hoverData.cxtDragged) {
          var be = {
            originalEvent: M,
            type: "cxttap",
            position: {
              x: q[0],
              y: q[1]
            }
          };
          oe ? oe.emit(be) : Q.emit(be);
        }
        t11.hoverData.cxtDragged = false, t11.hoverData.which = null;
      } else if (t11.hoverData.which === 1) {
        if (r(pe, ["mouseup", "tapend", "vmouseup"], M, {
          x: q[0],
          y: q[1]
        }), !t11.dragData.didDrag && !t11.hoverData.dragged && !t11.hoverData.selecting && !t11.hoverData.isOverThresholdDrag && (r(oe, ["click", "tap", "vclick"], M, {
          x: q[0],
          y: q[1]
        }), S = false, M.timeStamp - L <= Q.multiClickDebounceTime() ? (x && clearTimeout(x), S = true, L = null, r(oe, ["dblclick", "dbltap", "vdblclick"], M, {
          x: q[0],
          y: q[1]
        })) : (x = setTimeout(function() {
          S || r(oe, ["oneclick", "onetap", "voneclick"], M, {
            x: q[0],
            y: q[1]
          });
        }, Q.multiClickDebounceTime()), L = M.timeStamp)), oe == null && !t11.dragData.didDrag && !t11.hoverData.selecting && !t11.hoverData.dragged && !n(M) && (Q.$(e).unselect(["tapunselect"]), j.length > 0 && t11.redrawHint("eles", true), t11.dragData.possibleDragElements = j = Q.collection()), pe == oe && !t11.dragData.didDrag && !t11.hoverData.selecting && pe != null && pe._private.selectable && (t11.hoverData.dragging || (Q.selectionType() === "additive" || xe ? pe.selected() ? pe.unselect(["tapunselect"]) : pe.select(["tapselect"]) : xe || (Q.$(e).unmerge(pe).unselect(["tapunselect"]), pe.select(["tapselect"]))), t11.redrawHint("eles", true)), t11.hoverData.selecting) {
          var Le = Q.collection(t11.getAllInBox(W[0], W[1], W[2], W[3]));
          t11.redrawHint("select", true), Le.length > 0 && t11.redrawHint("eles", true), Q.emit({
            type: "boxend",
            originalEvent: M,
            position: {
              x: q[0],
              y: q[1]
            }
          });
          var ye = function(Xe) {
            return Xe.selectable() && !Xe.selected();
          };
          Q.selectionType() === "additive" || xe || Q.$(e).unmerge(Le).unselect(), Le.emit("box").stdFilter(ye).select().emit("boxselect"), t11.redraw();
        }
        if (t11.hoverData.dragging && (t11.hoverData.dragging = false, t11.redrawHint("select", true), t11.redrawHint("eles", true), t11.redraw()), !W[4]) {
          t11.redrawHint("drag", true), t11.redrawHint("eles", true);
          var we = oe && oe.grabbed();
          g(j), we && (oe.emit("freeon"), j.emit("free"), t11.dragData.didDrag && (oe.emit("dragfreeon"), j.emit("dragfree")));
        }
      }
      W[4] = 0, t11.hoverData.down = null, t11.hoverData.cxtStarted = false, t11.hoverData.draggingEles = false, t11.hoverData.selecting = false, t11.hoverData.isOverThresholdDrag = false, t11.dragData.didDrag = false, t11.hoverData.dragged = false, t11.hoverData.dragDelta = [], t11.hoverData.mdownPos = null, t11.hoverData.mdownGPos = null;
    }
  }, false);
  var A = function(M) {
    if (!t11.scrollingPage) {
      var H = t11.cy, Q = H.zoom(), q = H.pan(), W = t11.projectIntoViewport(M.clientX, M.clientY), pe = [W[0] * Q + q.x, W[1] * Q + q.y];
      if (t11.hoverData.draggingEles || t11.hoverData.dragging || t11.hoverData.cxtStarted || w()) {
        M.preventDefault();
        return;
      }
      if (H.panningEnabled() && H.userPanningEnabled() && H.zoomingEnabled() && H.userZoomingEnabled()) {
        M.preventDefault(), t11.data.wheelZooming = true, clearTimeout(t11.data.wheelTimeout), t11.data.wheelTimeout = setTimeout(function() {
          t11.data.wheelZooming = false, t11.redrawHint("eles", true), t11.redraw();
        }, 150);
        var j;
        M.deltaY != null ? j = M.deltaY / -250 : M.wheelDeltaY != null ? j = M.wheelDeltaY / 1e3 : j = M.wheelDelta / 1e3, j = j * t11.wheelSensitivity;
        var oe = M.deltaMode === 1;
        oe && (j *= 33);
        var xe = H.zoom() * Math.pow(10, j);
        M.type === "gesturechange" && (xe = t11.gestureStartZoom * M.scale), H.zoom({
          level: xe,
          renderedPosition: {
            x: pe[0],
            y: pe[1]
          }
        }), H.emit(M.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
      }
    }
  };
  t11.registerBinding(t11.container, "wheel", A, true), t11.registerBinding(window, "scroll", function(M) {
    t11.scrollingPage = true, clearTimeout(t11.scrollingPageTimeout), t11.scrollingPageTimeout = setTimeout(function() {
      t11.scrollingPage = false;
    }, 250);
  }, true), t11.registerBinding(t11.container, "gesturestart", function(M) {
    t11.gestureStartZoom = t11.cy.zoom(), t11.hasTouchStarted || M.preventDefault();
  }, true), t11.registerBinding(t11.container, "gesturechange", function(J) {
    t11.hasTouchStarted || A(J);
  }, true), t11.registerBinding(t11.container, "mouseout", function(M) {
    var H = t11.projectIntoViewport(M.clientX, M.clientY);
    t11.cy.emit({
      originalEvent: M,
      type: "mouseout",
      position: {
        x: H[0],
        y: H[1]
      }
    });
  }, false), t11.registerBinding(t11.container, "mouseover", function(M) {
    var H = t11.projectIntoViewport(M.clientX, M.clientY);
    t11.cy.emit({
      originalEvent: M,
      type: "mouseover",
      position: {
        x: H[0],
        y: H[1]
      }
    });
  }, false);
  var O, N, R, I, k, P, B, _, F, G, z, V, U, Y = function(M, H, Q, q) {
    return Math.sqrt((Q - M) * (Q - M) + (q - H) * (q - H));
  }, $ = function(M, H, Q, q) {
    return (Q - M) * (Q - M) + (q - H) * (q - H);
  }, X;
  t11.registerBinding(t11.container, "touchstart", X = function(M) {
    if (t11.hasTouchStarted = true, !!T(M)) {
      p(), t11.touchData.capture = true, t11.data.bgActivePosistion = void 0;
      var H = t11.cy, Q = t11.touchData.now, q = t11.touchData.earlier;
      if (M.touches[0]) {
        var W = t11.projectIntoViewport(M.touches[0].clientX, M.touches[0].clientY);
        Q[0] = W[0], Q[1] = W[1];
      }
      if (M.touches[1]) {
        var W = t11.projectIntoViewport(M.touches[1].clientX, M.touches[1].clientY);
        Q[2] = W[0], Q[3] = W[1];
      }
      if (M.touches[2]) {
        var W = t11.projectIntoViewport(M.touches[2].clientX, M.touches[2].clientY);
        Q[4] = W[0], Q[5] = W[1];
      }
      if (M.touches[1]) {
        t11.touchData.singleTouchMoved = true, g(t11.dragData.touchDragEles);
        var pe = t11.findContainerClientCoords();
        F = pe[0], G = pe[1], z = pe[2], V = pe[3], O = M.touches[0].clientX - F, N = M.touches[0].clientY - G, R = M.touches[1].clientX - F, I = M.touches[1].clientY - G, U = 0 <= O && O <= z && 0 <= R && R <= z && 0 <= N && N <= V && 0 <= I && I <= V;
        var j = H.pan(), oe = H.zoom();
        k = Y(O, N, R, I), P = $(O, N, R, I), B = [(O + R) / 2, (N + I) / 2], _ = [(B[0] - j.x) / oe, (B[1] - j.y) / oe];
        var xe = 200, Me = xe * xe;
        if (P < Me && !M.touches[2]) {
          var be = t11.findNearestElement(Q[0], Q[1], true, true), Le = t11.findNearestElement(Q[2], Q[3], true, true);
          be && be.isNode() ? (be.activate().emit({
            originalEvent: M,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), t11.touchData.start = be) : Le && Le.isNode() ? (Le.activate().emit({
            originalEvent: M,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), t11.touchData.start = Le) : H.emit({
            originalEvent: M,
            type: "cxttapstart",
            position: {
              x: Q[0],
              y: Q[1]
            }
          }), t11.touchData.start && (t11.touchData.start._private.grabbed = false), t11.touchData.cxt = true, t11.touchData.cxtDragged = false, t11.data.bgActivePosistion = void 0, t11.redraw();
          return;
        }
      }
      if (M.touches[2])
        H.boxSelectionEnabled() && M.preventDefault();
      else if (!M.touches[1]) {
        if (M.touches[0]) {
          var ye = t11.findNearestElements(Q[0], Q[1], true, true), we = ye[0];
          if (we != null && (we.activate(), t11.touchData.start = we, t11.touchData.starts = ye, t11.nodeIsGrabbable(we))) {
            var $e = t11.dragData.touchDragEles = H.collection(), Xe = null;
            t11.redrawHint("eles", true), t11.redrawHint("drag", true), we.selected() ? (Xe = H.$(function(it) {
              return it.selected() && t11.nodeIsGrabbable(it);
            }), h(Xe, {
              addToList: $e
            })) : d(we, {
              addToList: $e
            }), l(we);
            var Et = function(_t) {
              return {
                originalEvent: M,
                type: _t,
                position: {
                  x: Q[0],
                  y: Q[1]
                }
              };
            };
            we.emit(Et("grabon")), Xe ? Xe.forEach(function(it) {
              it.emit(Et("grab"));
            }) : we.emit(Et("grab"));
          }
          r(we, ["touchstart", "tapstart", "vmousedown"], M, {
            x: Q[0],
            y: Q[1]
          }), we == null && (t11.data.bgActivePosistion = {
            x: W[0],
            y: W[1]
          }, t11.redrawHint("select", true), t11.redraw()), t11.touchData.singleTouchMoved = false, t11.touchData.singleTouchStartTime = +new Date(), clearTimeout(t11.touchData.tapholdTimeout), t11.touchData.tapholdTimeout = setTimeout(function() {
            t11.touchData.singleTouchMoved === false && !t11.pinching && !t11.touchData.selecting && r(t11.touchData.start, ["taphold"], M, {
              x: Q[0],
              y: Q[1]
            });
          }, t11.tapholdDuration);
        }
      }
      if (M.touches.length >= 1) {
        for (var xt = t11.touchData.startPosition = [], qe = 0; qe < Q.length; qe++)
          xt[qe] = q[qe] = Q[qe];
        var yt = M.touches[0];
        t11.touchData.startGPosition = [yt.clientX, yt.clientY];
      }
    }
  }, false);
  var K;
  t11.registerBinding(window, "touchmove", K = function(M) {
    var H = t11.touchData.capture;
    if (!(!H && !T(M))) {
      var Q = t11.selection, q = t11.cy, W = t11.touchData.now, pe = t11.touchData.earlier, j = q.zoom();
      if (M.touches[0]) {
        var oe = t11.projectIntoViewport(M.touches[0].clientX, M.touches[0].clientY);
        W[0] = oe[0], W[1] = oe[1];
      }
      if (M.touches[1]) {
        var oe = t11.projectIntoViewport(M.touches[1].clientX, M.touches[1].clientY);
        W[2] = oe[0], W[3] = oe[1];
      }
      if (M.touches[2]) {
        var oe = t11.projectIntoViewport(M.touches[2].clientX, M.touches[2].clientY);
        W[4] = oe[0], W[5] = oe[1];
      }
      var xe = t11.touchData.startGPosition, Me;
      if (H && M.touches[0] && xe) {
        for (var be = [], Le = 0; Le < W.length; Le++)
          be[Le] = W[Le] - pe[Le];
        var ye = M.touches[0].clientX - xe[0], we = ye * ye, $e = M.touches[0].clientY - xe[1], Xe = $e * $e, Et = we + Xe;
        Me = Et >= t11.touchTapThreshold2;
      }
      if (H && t11.touchData.cxt) {
        M.preventDefault();
        var xt = M.touches[0].clientX - F, qe = M.touches[0].clientY - G, yt = M.touches[1].clientX - F, it = M.touches[1].clientY - G, _t = $(xt, qe, yt, it), qt = _t / P, Lr = 150, fr = Lr * Lr, Ar = 1.5, ea = Ar * Ar;
        if (qt >= ea || _t >= fr) {
          t11.touchData.cxt = false, t11.data.bgActivePosistion = void 0, t11.redrawHint("select", true);
          var cr = {
            originalEvent: M,
            type: "cxttapend",
            position: {
              x: W[0],
              y: W[1]
            }
          };
          t11.touchData.start ? (t11.touchData.start.unactivate().emit(cr), t11.touchData.start = null) : q.emit(cr);
        }
      }
      if (H && t11.touchData.cxt) {
        var cr = {
          originalEvent: M,
          type: "cxtdrag",
          position: {
            x: W[0],
            y: W[1]
          }
        };
        t11.data.bgActivePosistion = void 0, t11.redrawHint("select", true), t11.touchData.start ? t11.touchData.start.emit(cr) : q.emit(cr), t11.touchData.start && (t11.touchData.start._private.grabbed = false), t11.touchData.cxtDragged = true;
        var ut = t11.findNearestElement(W[0], W[1], true, true);
        (!t11.touchData.cxtOver || ut !== t11.touchData.cxtOver) && (t11.touchData.cxtOver && t11.touchData.cxtOver.emit({
          originalEvent: M,
          type: "cxtdragout",
          position: {
            x: W[0],
            y: W[1]
          }
        }), t11.touchData.cxtOver = ut, ut && ut.emit({
          originalEvent: M,
          type: "cxtdragover",
          position: {
            x: W[0],
            y: W[1]
          }
        }));
      } else if (H && M.touches[2] && q.boxSelectionEnabled())
        M.preventDefault(), t11.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date(), t11.touchData.selecting || q.emit({
          originalEvent: M,
          type: "boxstart",
          position: {
            x: W[0],
            y: W[1]
          }
        }), t11.touchData.selecting = true, t11.touchData.didSelect = true, Q[4] = 1, !Q || Q.length === 0 || Q[0] === void 0 ? (Q[0] = (W[0] + W[2] + W[4]) / 3, Q[1] = (W[1] + W[3] + W[5]) / 3, Q[2] = (W[0] + W[2] + W[4]) / 3 + 1, Q[3] = (W[1] + W[3] + W[5]) / 3 + 1) : (Q[2] = (W[0] + W[2] + W[4]) / 3, Q[3] = (W[1] + W[3] + W[5]) / 3), t11.redrawHint("select", true), t11.redraw();
      else if (H && M.touches[1] && !t11.touchData.didSelect && q.zoomingEnabled() && q.panningEnabled() && q.userZoomingEnabled() && q.userPanningEnabled()) {
        M.preventDefault(), t11.data.bgActivePosistion = void 0, t11.redrawHint("select", true);
        var je = t11.dragData.touchDragEles;
        if (je) {
          t11.redrawHint("drag", true);
          for (var lt = 0; lt < je.length; lt++) {
            var ta = je[lt]._private;
            ta.grabbed = false, ta.rscratch.inDragLayer = false;
          }
        }
        var Mt = t11.touchData.start, xt = M.touches[0].clientX - F, qe = M.touches[0].clientY - G, yt = M.touches[1].clientX - F, it = M.touches[1].clientY - G, Rs = Y(xt, qe, yt, it), Vf = Rs / k;
        if (U) {
          var Yf = xt - O, Uf = qe - N, Xf = yt - R, qf = it - I, Wf = (Yf + Xf) / 2, Kf = (Uf + qf) / 2, sn = q.zoom(), gi = sn * Vf, ra = q.pan(), Ps = _[0] * sn + ra.x, Bs = _[1] * sn + ra.y, Zf = {
            x: -gi / sn * (Ps - ra.x - Wf) + Ps,
            y: -gi / sn * (Bs - ra.y - Kf) + Bs
          };
          if (Mt && Mt.active()) {
            var je = t11.dragData.touchDragEles;
            g(je), t11.redrawHint("drag", true), t11.redrawHint("eles", true), Mt.unactivate().emit("freeon"), je.emit("free"), t11.dragData.didDrag && (Mt.emit("dragfreeon"), je.emit("dragfree"));
          }
          q.viewport({
            zoom: gi,
            pan: Zf,
            cancelOnFailedZoom: true
          }), q.emit("pinchzoom"), k = Rs, O = xt, N = qe, R = yt, I = it, t11.pinching = true;
        }
        if (M.touches[0]) {
          var oe = t11.projectIntoViewport(M.touches[0].clientX, M.touches[0].clientY);
          W[0] = oe[0], W[1] = oe[1];
        }
        if (M.touches[1]) {
          var oe = t11.projectIntoViewport(M.touches[1].clientX, M.touches[1].clientY);
          W[2] = oe[0], W[3] = oe[1];
        }
        if (M.touches[2]) {
          var oe = t11.projectIntoViewport(M.touches[2].clientX, M.touches[2].clientY);
          W[4] = oe[0], W[5] = oe[1];
        }
      } else if (M.touches[0] && !t11.touchData.didSelect) {
        var Tt = t11.touchData.start, pi = t11.touchData.last, ut;
        if (!t11.hoverData.draggingEles && !t11.swipePanning && (ut = t11.findNearestElement(W[0], W[1], true, true)), H && Tt != null && M.preventDefault(), H && Tt != null && t11.nodeIsDraggable(Tt))
          if (Me) {
            var je = t11.dragData.touchDragEles, Fs = !t11.dragData.didDrag;
            Fs && h(je, {
              inDragLayer: true
            }), t11.dragData.didDrag = true;
            var on = {
              x: 0,
              y: 0
            };
            if (ne(be[0]) && ne(be[1]) && (on.x += be[0], on.y += be[1], Fs)) {
              t11.redrawHint("eles", true);
              var Ct = t11.touchData.dragDelta;
              Ct && ne(Ct[0]) && ne(Ct[1]) && (on.x += Ct[0], on.y += Ct[1]);
            }
            t11.hoverData.draggingEles = true, je.silentShift(on).emit("position drag"), t11.redrawHint("drag", true), t11.touchData.startPosition[0] == pe[0] && t11.touchData.startPosition[1] == pe[1] && t11.redrawHint("eles", true), t11.redraw();
          } else {
            var Ct = t11.touchData.dragDelta = t11.touchData.dragDelta || [];
            Ct.length === 0 ? (Ct.push(be[0]), Ct.push(be[1])) : (Ct[0] += be[0], Ct[1] += be[1]);
          }
        if (r(Tt || ut, ["touchmove", "tapdrag", "vmousemove"], M, {
          x: W[0],
          y: W[1]
        }), (!Tt || !Tt.grabbed()) && ut != pi && (pi && pi.emit({
          originalEvent: M,
          type: "tapdragout",
          position: {
            x: W[0],
            y: W[1]
          }
        }), ut && ut.emit({
          originalEvent: M,
          type: "tapdragover",
          position: {
            x: W[0],
            y: W[1]
          }
        })), t11.touchData.last = ut, H)
          for (var lt = 0; lt < W.length; lt++)
            W[lt] && t11.touchData.startPosition[lt] && Me && (t11.touchData.singleTouchMoved = true);
        if (H && (Tt == null || Tt.pannable()) && q.panningEnabled() && q.userPanningEnabled()) {
          var Qf = a(Tt, t11.touchData.starts);
          Qf && (M.preventDefault(), t11.data.bgActivePosistion || (t11.data.bgActivePosistion = Fr(t11.touchData.startPosition)), t11.swipePanning ? (q.panBy({
            x: be[0] * j,
            y: be[1] * j
          }), q.emit("dragpan")) : Me && (t11.swipePanning = true, q.panBy({
            x: ye * j,
            y: $e * j
          }), q.emit("dragpan"), Tt && (Tt.unactivate(), t11.redrawHint("select", true), t11.touchData.start = null)));
          var oe = t11.projectIntoViewport(M.touches[0].clientX, M.touches[0].clientY);
          W[0] = oe[0], W[1] = oe[1];
        }
      }
      for (var Le = 0; Le < W.length; Le++)
        pe[Le] = W[Le];
      H && M.touches.length > 0 && !t11.hoverData.draggingEles && !t11.swipePanning && t11.data.bgActivePosistion != null && (t11.data.bgActivePosistion = void 0, t11.redrawHint("select", true), t11.redraw());
    }
  }, false);
  var Z;
  t11.registerBinding(window, "touchcancel", Z = function(M) {
    var H = t11.touchData.start;
    t11.touchData.capture = false, H && H.unactivate();
  });
  var te, ve, de, re;
  if (t11.registerBinding(window, "touchend", te = function(M) {
    var H = t11.touchData.start, Q = t11.touchData.capture;
    if (Q)
      M.touches.length === 0 && (t11.touchData.capture = false), M.preventDefault();
    else
      return;
    var q = t11.selection;
    t11.swipePanning = false, t11.hoverData.draggingEles = false;
    var W = t11.cy, pe = W.zoom(), j = t11.touchData.now, oe = t11.touchData.earlier;
    if (M.touches[0]) {
      var xe = t11.projectIntoViewport(M.touches[0].clientX, M.touches[0].clientY);
      j[0] = xe[0], j[1] = xe[1];
    }
    if (M.touches[1]) {
      var xe = t11.projectIntoViewport(M.touches[1].clientX, M.touches[1].clientY);
      j[2] = xe[0], j[3] = xe[1];
    }
    if (M.touches[2]) {
      var xe = t11.projectIntoViewport(M.touches[2].clientX, M.touches[2].clientY);
      j[4] = xe[0], j[5] = xe[1];
    }
    H && H.unactivate();
    var Me;
    if (t11.touchData.cxt) {
      if (Me = {
        originalEvent: M,
        type: "cxttapend",
        position: {
          x: j[0],
          y: j[1]
        }
      }, H ? H.emit(Me) : W.emit(Me), !t11.touchData.cxtDragged) {
        var be = {
          originalEvent: M,
          type: "cxttap",
          position: {
            x: j[0],
            y: j[1]
          }
        };
        H ? H.emit(be) : W.emit(be);
      }
      t11.touchData.start && (t11.touchData.start._private.grabbed = false), t11.touchData.cxt = false, t11.touchData.start = null, t11.redraw();
      return;
    }
    if (!M.touches[2] && W.boxSelectionEnabled() && t11.touchData.selecting) {
      t11.touchData.selecting = false;
      var Le = W.collection(t11.getAllInBox(q[0], q[1], q[2], q[3]));
      q[0] = void 0, q[1] = void 0, q[2] = void 0, q[3] = void 0, q[4] = 0, t11.redrawHint("select", true), W.emit({
        type: "boxend",
        originalEvent: M,
        position: {
          x: j[0],
          y: j[1]
        }
      });
      var ye = function(fr) {
        return fr.selectable() && !fr.selected();
      };
      Le.emit("box").stdFilter(ye).select().emit("boxselect"), Le.nonempty() && t11.redrawHint("eles", true), t11.redraw();
    }
    if (H != null && H.unactivate(), M.touches[2])
      t11.data.bgActivePosistion = void 0, t11.redrawHint("select", true);
    else if (!M.touches[1]) {
      if (!M.touches[0]) {
        if (!M.touches[0]) {
          t11.data.bgActivePosistion = void 0, t11.redrawHint("select", true);
          var we = t11.dragData.touchDragEles;
          if (H != null) {
            var $e = H._private.grabbed;
            g(we), t11.redrawHint("drag", true), t11.redrawHint("eles", true), $e && (H.emit("freeon"), we.emit("free"), t11.dragData.didDrag && (H.emit("dragfreeon"), we.emit("dragfree"))), r(H, ["touchend", "tapend", "vmouseup", "tapdragout"], M, {
              x: j[0],
              y: j[1]
            }), H.unactivate(), t11.touchData.start = null;
          } else {
            var Xe = t11.findNearestElement(j[0], j[1], true, true);
            r(Xe, ["touchend", "tapend", "vmouseup", "tapdragout"], M, {
              x: j[0],
              y: j[1]
            });
          }
          var Et = t11.touchData.startPosition[0] - j[0], xt = Et * Et, qe = t11.touchData.startPosition[1] - j[1], yt = qe * qe, it = xt + yt, _t = it * pe * pe;
          t11.touchData.singleTouchMoved || (H || W.$(":selected").unselect(["tapunselect"]), r(H, ["tap", "vclick"], M, {
            x: j[0],
            y: j[1]
          }), ve = false, M.timeStamp - re <= W.multiClickDebounceTime() ? (de && clearTimeout(de), ve = true, re = null, r(H, ["dbltap", "vdblclick"], M, {
            x: j[0],
            y: j[1]
          })) : (de = setTimeout(function() {
            ve || r(H, ["onetap", "voneclick"], M, {
              x: j[0],
              y: j[1]
            });
          }, W.multiClickDebounceTime()), re = M.timeStamp)), H != null && !t11.dragData.didDrag && H._private.selectable && _t < t11.touchTapThreshold2 && !t11.pinching && (W.selectionType() === "single" ? (W.$(e).unmerge(H).unselect(["tapunselect"]), H.select(["tapselect"])) : H.selected() ? H.unselect(["tapunselect"]) : H.select(["tapselect"]), t11.redrawHint("eles", true)), t11.touchData.singleTouchMoved = true;
        }
      }
    }
    for (var qt = 0; qt < j.length; qt++)
      oe[qt] = j[qt];
    t11.dragData.didDrag = false, M.touches.length === 0 && (t11.touchData.dragDelta = [], t11.touchData.startPosition = null, t11.touchData.startGPosition = null, t11.touchData.didSelect = false), M.touches.length < 2 && (M.touches.length === 1 && (t11.touchData.startGPosition = [M.touches[0].clientX, M.touches[0].clientY]), t11.pinching = false, t11.redrawHint("eles", true), t11.redraw());
  }, false), typeof TouchEvent > "u") {
    var ee = [], fe = function(M) {
      return {
        clientX: M.clientX,
        clientY: M.clientY,
        force: 1,
        identifier: M.pointerId,
        pageX: M.pageX,
        pageY: M.pageY,
        radiusX: M.width / 2,
        radiusY: M.height / 2,
        screenX: M.screenX,
        screenY: M.screenY,
        target: M.target
      };
    }, se = function(M) {
      return {
        event: M,
        touch: fe(M)
      };
    }, ae = function(M) {
      ee.push(se(M));
    }, ue = function(M) {
      for (var H = 0; H < ee.length; H++) {
        var Q = ee[H];
        if (Q.event.pointerId === M.pointerId) {
          ee.splice(H, 1);
          return;
        }
      }
    }, Ee = function(M) {
      var H = ee.filter(function(Q) {
        return Q.event.pointerId === M.pointerId;
      })[0];
      H.event = M, H.touch = fe(M);
    }, ge = function(M) {
      M.touches = ee.map(function(H) {
        return H.touch;
      });
    }, ce = function(M) {
      return M.pointerType === "mouse" || M.pointerType === 4;
    };
    t11.registerBinding(t11.container, "pointerdown", function(J) {
      ce(J) || (J.preventDefault(), ae(J), ge(J), X(J));
    }), t11.registerBinding(t11.container, "pointerup", function(J) {
      ce(J) || (ue(J), ge(J), te(J));
    }), t11.registerBinding(t11.container, "pointercancel", function(J) {
      ce(J) || (ue(J), ge(J), Z(J));
    }), t11.registerBinding(t11.container, "pointermove", function(J) {
      ce(J) || (J.preventDefault(), Ee(J), ge(J), K(J));
    });
  }
};
var Ut = {};
Ut.generatePolygon = function(t11, e) {
  return this.nodeShapes[t11] = {
    renderer: this,
    name: t11,
    points: e,
    draw: function(n, a, i, s, o) {
      this.renderer.nodeShapeImpl("polygon", n, a, i, s, o, this.points);
    },
    intersectLine: function(n, a, i, s, o, u, l) {
      return Pn(o, u, this.points, n, a, i / 2, s / 2, l);
    },
    checkPoint: function(n, a, i, s, o, u, l) {
      return Vt(n, a, this.points, u, l, s, o, [0, -1], i);
    }
  };
};
Ut.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, r, n, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
    },
    intersectLine: function(e, r, n, a, i, s, o) {
      return F1(i, s, e, r, n / 2 + o, a / 2 + o);
    },
    checkPoint: function(e, r, n, a, i, s, o) {
      return gr(e, r, a, i, s, o, n);
    }
  };
};
Ut.generateRoundPolygon = function(t11, e) {
  for (var r = new Array(e.length * 2), n = 0; n < e.length / 2; n++) {
    var a = n * 2, i = void 0;
    n < e.length / 2 - 1 ? i = (n + 1) * 2 : i = 0, r[n * 4] = e[a], r[n * 4 + 1] = e[a + 1];
    var s = e[i] - e[a], o = e[i + 1] - e[a + 1], u = Math.sqrt(s * s + o * o);
    r[n * 4 + 2] = s / u, r[n * 4 + 3] = o / u;
  }
  return this.nodeShapes[t11] = {
    renderer: this,
    name: t11,
    points: r,
    draw: function(f, c, v, h, d) {
      this.renderer.nodeShapeImpl("round-polygon", f, c, v, h, d, this.points);
    },
    intersectLine: function(f, c, v, h, d, g, b) {
      return _1(d, g, this.points, f, c, v, h);
    },
    checkPoint: function(f, c, v, h, d, g, b) {
      return B1(f, c, this.points, g, b, h, d);
    }
  };
};
Ut.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: st(4, 0),
    draw: function(e, r, n, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
    },
    intersectLine: function(e, r, n, a, i, s, o) {
      return Al(i, s, e, r, n, a, o);
    },
    checkPoint: function(e, r, n, a, i, s, o) {
      var u = Wn(a, i), l = u * 2;
      return !!(Vt(e, r, this.points, s, o, a, i - l, [0, -1], n) || Vt(e, r, this.points, s, o, a - l, i, [0, -1], n) || gr(e, r, l, l, s - a / 2 + u, o - i / 2 + u, n) || gr(e, r, l, l, s + a / 2 - u, o - i / 2 + u, n) || gr(e, r, l, l, s + a / 2 - u, o + i / 2 - u, n) || gr(e, r, l, l, s - a / 2 + u, o + i / 2 - u, n));
    }
  };
};
Ut.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: Il(),
    points: st(4, 0),
    draw: function(e, r, n, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
    },
    generateCutTrianglePts: function(e, r, n, a) {
      var i = this.cornerLength, s = r / 2, o = e / 2, u = n - o, l = n + o, f = a - s, c = a + s;
      return {
        topLeft: [u, f + i, u + i, f, u + i, f + i],
        topRight: [l - i, f, l, f + i, l - i, f + i],
        bottomRight: [l, c - i, l - i, c, l - i, c - i],
        bottomLeft: [u + i, c, u, c - i, u + i, c - i]
      };
    },
    intersectLine: function(e, r, n, a, i, s, o) {
      var u = this.generateCutTrianglePts(n + 2 * o, a + 2 * o, e, r), l = [].concat.apply([], [u.topLeft.splice(0, 4), u.topRight.splice(0, 4), u.bottomRight.splice(0, 4), u.bottomLeft.splice(0, 4)]);
      return Pn(i, s, l, e, r);
    },
    checkPoint: function(e, r, n, a, i, s, o) {
      if (Vt(e, r, this.points, s, o, a, i - 2 * this.cornerLength, [0, -1], n) || Vt(e, r, this.points, s, o, a - 2 * this.cornerLength, i, [0, -1], n))
        return true;
      var u = this.generateCutTrianglePts(a, i, s, o);
      return ft(e, r, u.topLeft) || ft(e, r, u.topRight) || ft(e, r, u.bottomRight) || ft(e, r, u.bottomLeft);
    }
  };
};
Ut.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: st(4, 0),
    draw: function(e, r, n, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
    },
    intersectLine: function(e, r, n, a, i, s, o) {
      var u = 0.15, l = 0.5, f = 0.85, c = this.generateBarrelBezierPts(n + 2 * o, a + 2 * o, e, r), v = function(g) {
        var b = Gr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, u), p = Gr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, l), m = Gr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, f);
        return [g[0], g[1], b.x, b.y, p.x, p.y, m.x, m.y, g[4], g[5]];
      }, h = [].concat(v(c.topLeft), v(c.topRight), v(c.bottomRight), v(c.bottomLeft));
      return Pn(i, s, h, e, r);
    },
    generateBarrelBezierPts: function(e, r, n, a) {
      var i = r / 2, s = e / 2, o = n - s, u = n + s, l = a - i, f = a + i, c = Vi(e, r), v = c.heightOffset, h = c.widthOffset, d = c.ctrlPtOffsetPct * e, g = {
        topLeft: [o, l + v, o + d, l, o + h, l],
        topRight: [u - h, l, u - d, l, u, l + v],
        bottomRight: [u, f - v, u - d, f, u - h, f],
        bottomLeft: [o + h, f, o + d, f, o, f - v]
      };
      return g.topLeft.isTop = true, g.topRight.isTop = true, g.bottomLeft.isBottom = true, g.bottomRight.isBottom = true, g;
    },
    checkPoint: function(e, r, n, a, i, s, o) {
      var u = Vi(a, i), l = u.heightOffset, f = u.widthOffset;
      if (Vt(e, r, this.points, s, o, a, i - 2 * l, [0, -1], n) || Vt(e, r, this.points, s, o, a - 2 * f, i, [0, -1], n))
        return true;
      for (var c = this.generateBarrelBezierPts(a, i, s, o), v = function(w, T, x) {
        var S = x[4], L = x[2], A = x[0], O = x[5], N = x[1], R = Math.min(S, A), I = Math.max(S, A), k = Math.min(O, N), P = Math.max(O, N);
        if (R <= w && w <= I && k <= T && T <= P) {
          var B = $1(S, L, A), _ = I1(B[0], B[1], B[2], w), F = _.filter(function(G) {
            return 0 <= G && G <= 1;
          });
          if (F.length > 0)
            return F[0];
        }
        return null;
      }, h = Object.keys(c), d = 0; d < h.length; d++) {
        var g = h[d], b = c[g], p = v(e, r, b);
        if (p != null) {
          var m = b[5], y = b[3], E = b[1], C = Ue(m, y, E, p);
          if (b.isTop && C <= r || b.isBottom && r <= C)
            return true;
        }
      }
      return false;
    }
  };
};
Ut.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: st(4, 0),
    draw: function(e, r, n, a, i) {
      this.renderer.nodeShapeImpl(this.name, e, r, n, a, i);
    },
    intersectLine: function(e, r, n, a, i, s, o) {
      var u = e - (n / 2 + o), l = r - (a / 2 + o), f = l, c = e + (n / 2 + o), v = er(i, s, e, r, u, l, c, f, false);
      return v.length > 0 ? v : Al(i, s, e, r, n, a, o);
    },
    checkPoint: function(e, r, n, a, i, s, o) {
      var u = Wn(a, i), l = 2 * u;
      if (Vt(e, r, this.points, s, o, a, i - l, [0, -1], n) || Vt(e, r, this.points, s, o, a - l, i, [0, -1], n))
        return true;
      var f = a / 2 + 2 * n, c = i / 2 + 2 * n, v = [s - f, o - c, s - f, o, s + f, o, s + f, o - c];
      return !!(ft(e, r, v) || gr(e, r, l, l, s + a / 2 - u, o + i / 2 - u, n) || gr(e, r, l, l, s - a / 2 + u, o + i / 2 - u, n));
    }
  };
};
Ut.registerNodeShapes = function() {
  var t11 = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", st(3, 0)), this.generateRoundPolygon("round-triangle", st(3, 0)), this.generatePolygon("rectangle", st(4, 0)), t11.square = t11.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var r = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
  }
  this.generatePolygon("pentagon", st(5, 0)), this.generateRoundPolygon("round-pentagon", st(5, 0)), this.generatePolygon("hexagon", st(6, 0)), this.generateRoundPolygon("round-hexagon", st(6, 0)), this.generatePolygon("heptagon", st(7, 0)), this.generateRoundPolygon("round-heptagon", st(7, 0)), this.generatePolygon("octagon", st(8, 0)), this.generateRoundPolygon("round-octagon", st(8, 0));
  var n = new Array(20);
  {
    var a = Hi(5, 0), i = Hi(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
    s *= 1.57;
    for (var o = 0; o < i.length / 2; o++)
      i[o * 2] *= s, i[o * 2 + 1] *= s;
    for (var o = 0; o < 20 / 4; o++)
      n[o * 4] = a[o * 2], n[o * 4 + 1] = a[o * 2 + 1], n[o * 4 + 2] = i[o * 2], n[o * 4 + 3] = i[o * 2 + 1];
  }
  n = Ol(n), this.generatePolygon("star", n), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var u = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u);
  }
  t11.makePolygon = function(l) {
    var f = l.join("$"), c = "polygon-" + f, v;
    return (v = this[c]) ? v : e.generatePolygon(c, l);
  };
};
var Jn = {};
Jn.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
Jn.redraw = function(t11) {
  t11 = t11 || Cl();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = true, e.renderOptions = t11;
};
Jn.beforeRender = function(t11, e) {
  if (!this.destroyed) {
    e == null && Ge("Priority is not optional for beforeRender");
    var r = this.beforeRenderCallbacks;
    r.push({
      fn: t11,
      priority: e
    }), r.sort(function(n, a) {
      return a.priority - n.priority;
    });
  }
};
var uu = function(e, r, n) {
  for (var a = e.beforeRenderCallbacks, i = 0; i < a.length; i++)
    a[i].fn(r, n);
};
Jn.startRenderLoop = function() {
  var t11 = this, e = t11.cy;
  if (!t11.renderLoopStarted) {
    t11.renderLoopStarted = true;
    var r = function n(a) {
      if (!t11.destroyed) {
        if (!e.batching())
          if (t11.requestedFrame && !t11.skipFrame) {
            uu(t11, true, a);
            var i = Ht();
            t11.render(t11.renderOptions);
            var s = t11.lastDrawTime = Ht();
            t11.averageRedrawTime === void 0 && (t11.averageRedrawTime = s - i), t11.redrawCount === void 0 && (t11.redrawCount = 0), t11.redrawCount++, t11.redrawTotalTime === void 0 && (t11.redrawTotalTime = 0);
            var o = s - i;
            t11.redrawTotalTime += o, t11.lastRedrawTime = o, t11.averageRedrawTime = t11.averageRedrawTime / 2 + o / 2, t11.requestedFrame = false;
          } else
            uu(t11, false, a);
        t11.skipFrame = false, $a(n);
      }
    };
    $a(r);
  }
};
var lE = function(e) {
  this.init(e);
}, Ef = lE, nn = Ef.prototype;
nn.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
nn.init = function(t11) {
  var e = this;
  e.options = t11, e.cy = t11.cy;
  var r = e.container = t11.cy.container();
  if (Fe) {
    var n = Fe.document, a = n.head, i = "__________cytoscape_stylesheet", s = "__________cytoscape_container", o = n.getElementById(i) != null;
    if (r.className.indexOf(s) < 0 && (r.className = (r.className || "") + " " + s), !o) {
      var u = n.createElement("style");
      u.id = i, u.innerHTML = "." + s + " { position: relative; }", a.insertBefore(u, a.children[0]);
    }
    var l = Fe.getComputedStyle(r), f = l.getPropertyValue("position");
    f === "static" && Ne("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: false,
    initialPan: [null, null],
    capture: false
  }, e.dragData = {
    possibleDragElements: []
  }, e.touchData = {
    start: null,
    capture: false,
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: true,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, e.redraws = 0, e.showFps = t11.showFps, e.debug = t11.debug, e.hideEdgesOnViewport = t11.hideEdgesOnViewport, e.textureOnViewport = t11.textureOnViewport, e.wheelSensitivity = t11.wheelSensitivity, e.motionBlurEnabled = t11.motionBlur, e.forcedPixelRatio = ne(t11.pixelRatio) ? t11.pixelRatio : null, e.motionBlur = t11.motionBlur, e.motionBlurOpacity = t11.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = false, e.clearedForMotionBlur = [], e.desktopTapThreshold = t11.desktopTapThreshold, e.desktopTapThreshold2 = t11.desktopTapThreshold * t11.desktopTapThreshold, e.touchTapThreshold = t11.touchTapThreshold, e.touchTapThreshold2 = t11.touchTapThreshold * t11.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
nn.notify = function(t11, e) {
  var r = this, n = r.cy;
  if (!this.destroyed) {
    if (t11 === "init") {
      r.load();
      return;
    }
    if (t11 === "destroy") {
      r.destroy();
      return;
    }
    (t11 === "add" || t11 === "remove" || t11 === "move" && n.hasCompoundNodes() || t11 === "load" || t11 === "zorder" || t11 === "mount") && r.invalidateCachedZSortedEles(), t11 === "viewport" && r.redrawHint("select", true), (t11 === "load" || t11 === "resize" || t11 === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", true), r.redrawHint("drag", true), this.startRenderLoop(), this.redraw();
  }
};
nn.destroy = function() {
  var t11 = this;
  t11.destroyed = true, t11.cy.stopAnimationLoop();
  for (var e = 0; e < t11.bindings.length; e++) {
    var r = t11.bindings[e], n = r, a = n.target;
    (a.off || a.removeEventListener).apply(a, n.args);
  }
  if (t11.bindings = [], t11.beforeRenderCallbacks = [], t11.onUpdateEleCalcsFns = [], t11.removeObserver && t11.removeObserver.disconnect(), t11.styleObserver && t11.styleObserver.disconnect(), t11.resizeObserver && t11.resizeObserver.disconnect(), t11.labelCalcDiv)
    try {
      document.body.removeChild(t11.labelCalcDiv);
    } catch {
    }
};
nn.isHeadless = function() {
  return false;
};
[Ms, bf, wf, rn, Ut, Jn].forEach(function(t11) {
  he(nn, t11);
});
var Mi = 1e3 / 60, xf = {
  setupDequeueing: function(e) {
    return function() {
      var n = this, a = this.renderer;
      if (!n.dequeueingSetup) {
        n.dequeueingSetup = true;
        var i = ti.default(function() {
          a.redrawHint("eles", true), a.redrawHint("drag", true), a.redraw();
        }, e.deqRedrawThreshold), s = function(l, f) {
          var c = Ht(), v = a.averageRedrawTime, h = a.lastRedrawTime, d = [], g = a.cy.extent(), b = a.getPixelRatio();
          for (l || a.flushRenderedStyleQueue(); ; ) {
            var p = Ht(), m = p - c, y = p - f;
            if (h < Mi) {
              var E = Mi - (l ? v : 0);
              if (y >= e.deqFastCost * E)
                break;
            } else if (l) {
              if (m >= e.deqCost * h || m >= e.deqAvgCost * v)
                break;
            } else if (y >= e.deqNoDrawCost * Mi)
              break;
            var C = e.deq(n, b, g);
            if (C.length > 0)
              for (var D = 0; D < C.length; D++)
                d.push(C[D]);
            else
              break;
          }
          d.length > 0 && (e.onDeqd(n, d), !l && e.shouldRedraw(n, d, b, g) && i());
        }, o = e.priority || ms;
        a.beforeRender(s, o(n));
      }
    };
  }
}, fE = /* @__PURE__ */ function() {
  function t11(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ga;
    vs(this, t11), this.idsByKey = new It(), this.keyForId = new It(), this.cachesByLvl = new It(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
  }
  return ds(t11, [{
    key: "getIdsFor",
    value: function(r) {
      r == null && Ge("Can not get id list for null key");
      var n = this.idsByKey, a = this.idsByKey.get(r);
      return a || (a = new Jr(), n.set(r, a)), a;
    }
  }, {
    key: "addIdForKey",
    value: function(r, n) {
      r != null && this.getIdsFor(r).add(n);
    }
  }, {
    key: "deleteIdForKey",
    value: function(r, n) {
      r != null && this.getIdsFor(r).delete(n);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(r) {
      return r == null ? 0 : this.getIdsFor(r).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(r) {
      var n = r.id(), a = this.keyForId.get(n), i = this.getKey(r);
      this.deleteIdForKey(a, n), this.addIdForKey(i, n), this.keyForId.set(n, i);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(r) {
      var n = r.id(), a = this.keyForId.get(n);
      this.deleteIdForKey(a, n), this.keyForId.delete(n);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(r) {
      var n = r.id(), a = this.keyForId.get(n), i = this.getKey(r);
      return a !== i;
    }
  }, {
    key: "isInvalid",
    value: function(r) {
      return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
    }
  }, {
    key: "getCachesAt",
    value: function(r) {
      var n = this.cachesByLvl, a = this.lvls, i = n.get(r);
      return i || (i = new It(), n.set(r, i), a.push(r)), i;
    }
  }, {
    key: "getCache",
    value: function(r, n) {
      return this.getCachesAt(n).get(r);
    }
  }, {
    key: "get",
    value: function(r, n) {
      var a = this.getKey(r), i = this.getCache(a, n);
      return i != null && this.updateKeyMappingFor(r), i;
    }
  }, {
    key: "getForCachedKey",
    value: function(r, n) {
      var a = this.keyForId.get(r.id()), i = this.getCache(a, n);
      return i;
    }
  }, {
    key: "hasCache",
    value: function(r, n) {
      return this.getCachesAt(n).has(r);
    }
  }, {
    key: "has",
    value: function(r, n) {
      var a = this.getKey(r);
      return this.hasCache(a, n);
    }
  }, {
    key: "setCache",
    value: function(r, n, a) {
      a.key = r, this.getCachesAt(n).set(r, a);
    }
  }, {
    key: "set",
    value: function(r, n, a) {
      var i = this.getKey(r);
      this.setCache(i, n, a), this.updateKeyMappingFor(r);
    }
  }, {
    key: "deleteCache",
    value: function(r, n) {
      this.getCachesAt(n).delete(r);
    }
  }, {
    key: "delete",
    value: function(r, n) {
      var a = this.getKey(r);
      this.deleteCache(a, n);
    }
  }, {
    key: "invalidateKey",
    value: function(r) {
      var n = this;
      this.lvls.forEach(function(a) {
        return n.deleteCache(r, a);
      });
    }
  }, {
    key: "invalidate",
    value: function(r) {
      var n = r.id(), a = this.keyForId.get(n);
      this.deleteKeyMappingFor(r);
      var i = this.doesEleInvalidateKey(r);
      return i && this.invalidateKey(a), i || this.getNumberOfIdsForKey(a) === 0;
    }
  }]), t11;
}(), lu = 25, pa = 50, Aa = -4, Zi = 3, cE = 7.99, hE = 8, vE = 1024, dE = 1024, gE = 1024, pE = 0.2, yE = 0.8, mE = 10, bE = 0.15, wE = 0.1, EE = 0.9, xE = 0.9, TE = 100, CE = 1, _r = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, DE = Qe({
  getKey: null,
  doesEleInvalidateKey: Ga,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: El,
  allowEdgeTxrCaching: true,
  allowParentTxrCaching: true
}), bn = function(e, r) {
  var n = this;
  n.renderer = e, n.onDequeues = [];
  var a = DE(r);
  he(n, a), n.lookup = new fE(a.getKey, a.doesEleInvalidateKey), n.setupDequeueing();
}, Ye = bn.prototype;
Ye.reasons = _r;
Ye.getTextureQueue = function(t11) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t11] = e.eleImgCaches[t11] || [];
};
Ye.getRetiredTextureQueue = function(t11) {
  var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, n = r[t11] = r[t11] || [];
  return n;
};
Ye.getElementQueue = function() {
  var t11 = this, e = t11.eleCacheQueue = t11.eleCacheQueue || new Un.default(function(r, n) {
    return n.reqs - r.reqs;
  });
  return e;
};
Ye.getElementKeyToQueue = function() {
  var t11 = this, e = t11.eleKeyToCacheQueue = t11.eleKeyToCacheQueue || {};
  return e;
};
Ye.getElement = function(t11, e, r, n, a) {
  var i = this, s = this.renderer, o = s.cy.zoom(), u = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t11.visible() || t11.removed() || !i.allowEdgeTxrCaching && t11.isEdge() || !i.allowParentTxrCaching && t11.isParent())
    return null;
  if (n == null && (n = Math.ceil(ws(o * r))), n < Aa)
    n = Aa;
  else if (o >= cE || n > Zi)
    return null;
  var l = Math.pow(2, n), f = e.h * l, c = e.w * l, v = s.eleTextBiggerThanMin(t11, l);
  if (!this.isVisible(t11, v))
    return null;
  var h = u.get(t11, n);
  if (h && h.invalidated && (h.invalidated = false, h.texture.invalidatedWidth -= h.width), h)
    return h;
  var d;
  if (f <= lu ? d = lu : f <= pa ? d = pa : d = Math.ceil(f / pa) * pa, f > gE || c > dE)
    return null;
  var g = i.getTextureQueue(d), b = g[g.length - 2], p = function() {
    return i.recycleTexture(d, c) || i.addTexture(d, c);
  };
  b || (b = g[g.length - 1]), b || (b = p()), b.width - b.usedWidth < c && (b = p());
  for (var m = function(I) {
    return I && I.scaledLabelShown === v;
  }, y = a && a === _r.dequeue, E = a && a === _r.highQuality, C = a && a === _r.downscale, D, w = n + 1; w <= Zi; w++) {
    var T = u.get(t11, w);
    if (T) {
      D = T;
      break;
    }
  }
  var x = D && D.level === n + 1 ? D : null, S = function() {
    b.context.drawImage(x.texture.canvas, x.x, 0, x.width, x.height, b.usedWidth, 0, c, f);
  };
  if (b.context.setTransform(1, 0, 0, 1, 0, 0), b.context.clearRect(b.usedWidth, 0, c, d), m(x))
    S();
  else if (m(D))
    if (E) {
      for (var L = D.level; L > n; L--)
        x = i.getElement(t11, e, r, L, _r.downscale);
      S();
    } else
      return i.queueElement(t11, D.level - 1), D;
  else {
    var A;
    if (!y && !E && !C)
      for (var O = n - 1; O >= Aa; O--) {
        var N = u.get(t11, O);
        if (N) {
          A = N;
          break;
        }
      }
    if (m(A))
      return i.queueElement(t11, n), A;
    b.context.translate(b.usedWidth, 0), b.context.scale(l, l), this.drawElement(b.context, t11, e, v, false), b.context.scale(1 / l, 1 / l), b.context.translate(-b.usedWidth, 0);
  }
  return h = {
    x: b.usedWidth,
    texture: b,
    level: n,
    scale: l,
    width: c,
    height: f,
    scaledLabelShown: v
  }, b.usedWidth += Math.ceil(c + hE), b.eleCaches.push(h), u.set(t11, n, h), i.checkTextureFullness(b), h;
};
Ye.invalidateElements = function(t11) {
  for (var e = 0; e < t11.length; e++)
    this.invalidateElement(t11[e]);
};
Ye.invalidateElement = function(t11) {
  var e = this, r = e.lookup, n = [], a = r.isInvalid(t11);
  if (!!a) {
    for (var i = Aa; i <= Zi; i++) {
      var s = r.getForCachedKey(t11, i);
      s && n.push(s);
    }
    var o = r.invalidate(t11);
    if (o)
      for (var u = 0; u < n.length; u++) {
        var l = n[u], f = l.texture;
        f.invalidatedWidth += l.width, l.invalidated = true, e.checkTextureUtility(f);
      }
    e.removeFromQueue(t11);
  }
};
Ye.checkTextureUtility = function(t11) {
  t11.invalidatedWidth >= pE * t11.width && this.retireTexture(t11);
};
Ye.checkTextureFullness = function(t11) {
  var e = this, r = e.getTextureQueue(t11.height);
  t11.usedWidth / t11.width > yE && t11.fullnessChecks >= mE ? ar(r, t11) : t11.fullnessChecks++;
};
Ye.retireTexture = function(t11) {
  var e = this, r = t11.height, n = e.getTextureQueue(r), a = this.lookup;
  ar(n, t11), t11.retired = true;
  for (var i = t11.eleCaches, s = 0; s < i.length; s++) {
    var o = i[s];
    a.deleteCache(o.key, o.level);
  }
  bs(i);
  var u = e.getRetiredTextureQueue(r);
  u.push(t11);
};
Ye.addTexture = function(t11, e) {
  var r = this, n = r.getTextureQueue(t11), a = {};
  return n.push(a), a.eleCaches = [], a.height = t11, a.width = Math.max(vE, e), a.usedWidth = 0, a.invalidatedWidth = 0, a.fullnessChecks = 0, a.canvas = r.renderer.makeOffscreenCanvas(a.width, a.height), a.context = a.canvas.getContext("2d"), a;
};
Ye.recycleTexture = function(t11, e) {
  for (var r = this, n = r.getTextureQueue(t11), a = r.getRetiredTextureQueue(t11), i = 0; i < a.length; i++) {
    var s = a[i];
    if (s.width >= e)
      return s.retired = false, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, bs(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), ar(a, s), n.push(s), s;
  }
};
Ye.queueElement = function(t11, e) {
  var r = this, n = r.getElementQueue(), a = r.getElementKeyToQueue(), i = this.getKey(t11), s = a[i];
  if (s)
    s.level = Math.max(s.level, e), s.eles.merge(t11), s.reqs++, n.updateItem(s);
  else {
    var o = {
      eles: t11.spawn().merge(t11),
      level: e,
      reqs: 1,
      key: i
    };
    n.push(o), a[i] = o;
  }
};
Ye.dequeue = function(t11) {
  for (var e = this, r = e.getElementQueue(), n = e.getElementKeyToQueue(), a = [], i = e.lookup, s = 0; s < CE && r.size() > 0; s++) {
    var o = r.pop(), u = o.key, l = o.eles[0], f = i.hasCache(l, o.level);
    if (n[u] = null, f)
      continue;
    a.push(o);
    var c = e.getBoundingBox(l);
    e.getElement(l, c, t11, o.level, _r.dequeue);
  }
  return a;
};
Ye.removeFromQueue = function(t11) {
  var e = this, r = e.getElementQueue(), n = e.getElementKeyToQueue(), a = this.getKey(t11), i = n[a];
  i != null && (i.eles.length === 1 ? (i.reqs = ys, r.updateItem(i), r.pop(), n[a] = null) : i.eles.unmerge(t11));
};
Ye.onDequeue = function(t11) {
  this.onDequeues.push(t11);
};
Ye.offDequeue = function(t11) {
  ar(this.onDequeues, t11);
};
Ye.setupDequeueing = xf.setupDequeueing({
  deqRedrawThreshold: TE,
  deqCost: bE,
  deqAvgCost: wE,
  deqNoDrawCost: EE,
  deqFastCost: xE,
  deq: function(e, r, n) {
    return e.dequeue(r, n);
  },
  onDeqd: function(e, r) {
    for (var n = 0; n < e.onDequeues.length; n++) {
      var a = e.onDequeues[n];
      a(r);
    }
  },
  shouldRedraw: function(e, r, n, a) {
    for (var i = 0; i < r.length; i++)
      for (var s = r[i].eles, o = 0; o < s.length; o++) {
        var u = s[o].boundingBox();
        if (Es(u, a))
          return true;
      }
    return false;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var SE = 1, xn = -4, Xa = 2, LE = 3.99, AE = 50, NE = 50, ME = 0.15, OE = 0.1, IE = 0.9, kE = 0.9, RE = 1, fu = 250, PE = 4e3 * 4e3, BE = true, Tf = function(e) {
  var r = this, n = r.renderer = e, a = n.cy;
  r.layersByLevel = {}, r.firstGet = true, r.lastInvalidationTime = Ht() - 2 * fu, r.skipping = false, r.eleTxrDeqs = a.collection(), r.scheduleElementRefinement = ti.default(function() {
    r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
  }, NE), n.beforeRender(function(s, o) {
    o - r.lastInvalidationTime <= fu ? r.skipping = true : r.skipping = false;
  }, n.beforeRenderPriorities.lyrTxrSkip);
  var i = function(o, u) {
    return u.reqs - o.reqs;
  };
  r.layersQueue = new Un.default(i), r.setupDequeueing();
}, Je = Tf.prototype, cu = 0, FE = Math.pow(2, 53) - 1;
Je.makeLayer = function(t11, e) {
  var r = Math.pow(2, e), n = Math.ceil(t11.w * r), a = Math.ceil(t11.h * r), i = this.renderer.makeOffscreenCanvas(n, a), s = {
    id: cu = ++cu % FE,
    bb: t11,
    level: e,
    width: n,
    height: a,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, o = s.context, u = -s.bb.x1, l = -s.bb.y1;
  return o.scale(r, r), o.translate(u, l), s;
};
Je.getLayers = function(t11, e, r) {
  var n = this, a = n.renderer, i = a.cy, s = i.zoom(), o = n.firstGet;
  if (n.firstGet = false, r == null) {
    if (r = Math.ceil(ws(s * e)), r < xn)
      r = xn;
    else if (s >= LE || r > Xa)
      return null;
  }
  n.validateLayersElesOrdering(r, t11);
  var u = n.layersByLevel, l = Math.pow(2, r), f = u[r] = u[r] || [], c, v = n.levelIsComplete(r, t11), h, d = function() {
    var S = function(R) {
      if (n.validateLayersElesOrdering(R, t11), n.levelIsComplete(R, t11))
        return h = u[R], true;
    }, L = function(R) {
      if (!h)
        for (var I = r + R; xn <= I && I <= Xa && !S(I); I += R)
          ;
    };
    L(1), L(-1);
    for (var A = f.length - 1; A >= 0; A--) {
      var O = f[A];
      O.invalid && ar(f, O);
    }
  };
  if (!v)
    d();
  else
    return f;
  var g = function() {
    if (!c) {
      c = ht();
      for (var S = 0; S < t11.length; S++)
        L1(c, t11[S].boundingBox());
    }
    return c;
  }, b = function(S) {
    S = S || {};
    var L = S.after;
    g();
    var A = c.w * l * (c.h * l);
    if (A > PE)
      return null;
    var O = n.makeLayer(c, r);
    if (L != null) {
      var N = f.indexOf(L) + 1;
      f.splice(N, 0, O);
    } else
      (S.insert === void 0 || S.insert) && f.unshift(O);
    return O;
  };
  if (n.skipping && !o)
    return null;
  for (var p = null, m = t11.length / SE, y = !o, E = 0; E < t11.length; E++) {
    var C = t11[E], D = C._private.rscratch, w = D.imgLayerCaches = D.imgLayerCaches || {}, T = w[r];
    if (T) {
      p = T;
      continue;
    }
    if ((!p || p.eles.length >= m || !Ll(p.bb, C.boundingBox())) && (p = b({
      insert: true,
      after: p
    }), !p))
      return null;
    h || y ? n.queueLayer(p, C) : n.drawEleInLayer(p, C, r, e), p.eles.push(C), w[r] = p;
  }
  return h || (y ? null : f);
};
Je.getEleLevelForLayerLevel = function(t11, e) {
  return t11;
};
Je.drawEleInLayer = function(t11, e, r, n) {
  var a = this, i = this.renderer, s = t11.context, o = e.boundingBox();
  o.w === 0 || o.h === 0 || !e.visible() || (r = a.getEleLevelForLayerLevel(r, n), i.setImgSmoothing(s, false), i.drawCachedElement(s, e, null, null, r, BE), i.setImgSmoothing(s, true));
};
Je.levelIsComplete = function(t11, e) {
  var r = this, n = r.layersByLevel[t11];
  if (!n || n.length === 0)
    return false;
  for (var a = 0, i = 0; i < n.length; i++) {
    var s = n[i];
    if (s.reqs > 0 || s.invalid)
      return false;
    a += s.eles.length;
  }
  return a === e.length;
};
Je.validateLayersElesOrdering = function(t11, e) {
  var r = this.layersByLevel[t11];
  if (!!r)
    for (var n = 0; n < r.length; n++) {
      for (var a = r[n], i = -1, s = 0; s < e.length; s++)
        if (a.eles[0] === e[s]) {
          i = s;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(a);
        continue;
      }
      for (var o = i, s = 0; s < a.eles.length; s++)
        if (a.eles[s] !== e[o + s]) {
          this.invalidateLayer(a);
          break;
        }
    }
};
Je.updateElementsInLayers = function(t11, e) {
  for (var r = this, n = qn(t11[0]), a = 0; a < t11.length; a++)
    for (var i = n ? null : t11[a], s = n ? t11[a] : t11[a].ele, o = s._private.rscratch, u = o.imgLayerCaches = o.imgLayerCaches || {}, l = xn; l <= Xa; l++) {
      var f = u[l];
      !f || i && r.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i);
    }
};
Je.haveLayers = function() {
  for (var t11 = this, e = false, r = xn; r <= Xa; r++) {
    var n = t11.layersByLevel[r];
    if (n && n.length > 0) {
      e = true;
      break;
    }
  }
  return e;
};
Je.invalidateElements = function(t11) {
  var e = this;
  t11.length !== 0 && (e.lastInvalidationTime = Ht(), !(t11.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t11, function(n, a, i) {
    e.invalidateLayer(n);
  }));
};
Je.invalidateLayer = function(t11) {
  if (this.lastInvalidationTime = Ht(), !t11.invalid) {
    var e = t11.level, r = t11.eles, n = this.layersByLevel[e];
    ar(n, t11), t11.elesQueue = [], t11.invalid = true, t11.replacement && (t11.replacement.invalid = true);
    for (var a = 0; a < r.length; a++) {
      var i = r[a]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
Je.refineElementTextures = function(t11) {
  var e = this;
  e.updateElementsInLayers(t11, function(n, a, i) {
    var s = n.replacement;
    if (s || (s = n.replacement = e.makeLayer(n.bb, n.level), s.replaces = n, s.eles = n.eles), !s.reqs)
      for (var o = 0; o < s.eles.length; o++)
        e.queueLayer(s, s.eles[o]);
  });
};
Je.enqueueElementRefinement = function(t11) {
  this.eleTxrDeqs.merge(t11), this.scheduleElementRefinement();
};
Je.queueLayer = function(t11, e) {
  var r = this, n = r.layersQueue, a = t11.elesQueue, i = a.hasId = a.hasId || {};
  if (!t11.replacement) {
    if (e) {
      if (i[e.id()])
        return;
      a.push(e), i[e.id()] = true;
    }
    t11.reqs ? (t11.reqs++, n.updateItem(t11)) : (t11.reqs = 1, n.push(t11));
  }
};
Je.dequeue = function(t11) {
  for (var e = this, r = e.layersQueue, n = [], a = 0; a < RE && r.size() !== 0; ) {
    var i = r.peek();
    if (i.replacement) {
      r.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      r.pop();
      continue;
    }
    if (i.invalid) {
      r.pop();
      continue;
    }
    var s = i.elesQueue.shift();
    s && (e.drawEleInLayer(i, s, i.level, t11), a++), n.length === 0 && n.push(true), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return n;
};
Je.applyLayerReplacement = function(t11) {
  var e = this, r = e.layersByLevel[t11.level], n = t11.replaces, a = r.indexOf(n);
  if (!(a < 0 || n.invalid)) {
    r[a] = t11;
    for (var i = 0; i < t11.eles.length; i++) {
      var s = t11.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
      o && (o[t11.level] = t11);
    }
    e.requestRedraw();
  }
};
Je.requestRedraw = ti.default(function() {
  var t11 = this.renderer;
  t11.redrawHint("eles", true), t11.redrawHint("drag", true), t11.redraw();
}, 100);
Je.setupDequeueing = xf.setupDequeueing({
  deqRedrawThreshold: AE,
  deqCost: ME,
  deqAvgCost: OE,
  deqNoDrawCost: IE,
  deqFastCost: kE,
  deq: function(e, r) {
    return e.dequeue(r);
  },
  onDeqd: ms,
  shouldRedraw: El,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var Cf = {}, hu;
function _E(t11, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    t11.lineTo(n.x, n.y);
  }
}
function $E(t11, e, r) {
  for (var n, a = 0; a < e.length; a++) {
    var i = e[a];
    a === 0 && (n = i), t11.lineTo(i.x, i.y);
  }
  t11.quadraticCurveTo(r.x, r.y, n.x, n.y);
}
function vu(t11, e, r) {
  t11.beginPath && t11.beginPath();
  for (var n = e, a = 0; a < n.length; a++) {
    var i = n[a];
    t11.lineTo(i.x, i.y);
  }
  var s = r, o = r[0];
  t11.moveTo(o.x, o.y);
  for (var a = 1; a < s.length; a++) {
    var i = s[a];
    t11.lineTo(i.x, i.y);
  }
  t11.closePath && t11.closePath();
}
function GE(t11, e, r, n, a) {
  t11.beginPath && t11.beginPath(), t11.arc(r, n, a, 0, Math.PI * 2, false);
  var i = e, s = i[0];
  t11.moveTo(s.x, s.y);
  for (var o = 0; o < i.length; o++) {
    var u = i[o];
    t11.lineTo(u.x, u.y);
  }
  t11.closePath && t11.closePath();
}
function zE(t11, e, r, n) {
  t11.arc(e, r, n, 0, Math.PI * 2, false);
}
Cf.arrowShapeImpl = function(t11) {
  return (hu || (hu = {
    polygon: _E,
    "triangle-backcurve": $E,
    "triangle-tee": vu,
    "circle-triangle": GE,
    "triangle-cross": vu,
    circle: zE
  }))[t11];
};
var Ft = {};
Ft.drawElement = function(t11, e, r, n, a, i) {
  var s = this;
  e.isNode() ? s.drawNode(t11, e, r, n, a, i) : s.drawEdge(t11, e, r, n, a, i);
};
Ft.drawElementOverlay = function(t11, e) {
  var r = this;
  e.isNode() ? r.drawNodeOverlay(t11, e) : r.drawEdgeOverlay(t11, e);
};
Ft.drawElementUnderlay = function(t11, e) {
  var r = this;
  e.isNode() ? r.drawNodeUnderlay(t11, e) : r.drawEdgeUnderlay(t11, e);
};
Ft.drawCachedElementPortion = function(t11, e, r, n, a, i, s, o) {
  var u = this, l = r.getBoundingBox(e);
  if (!(l.w === 0 || l.h === 0)) {
    var f = r.getElement(e, l, n, a, i);
    if (f != null) {
      var c = o(u, e);
      if (c === 0)
        return;
      var v = s(u, e), h = l.x1, d = l.y1, g = l.w, b = l.h, p, m, y, E, C;
      if (v !== 0) {
        var D = r.getRotationPoint(e);
        y = D.x, E = D.y, t11.translate(y, E), t11.rotate(v), C = u.getImgSmoothing(t11), C || u.setImgSmoothing(t11, true);
        var w = r.getRotationOffset(e);
        p = w.x, m = w.y;
      } else
        p = h, m = d;
      var T;
      c !== 1 && (T = t11.globalAlpha, t11.globalAlpha = T * c), t11.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, p, m, g, b), c !== 1 && (t11.globalAlpha = T), v !== 0 && (t11.rotate(-v), t11.translate(-y, -E), C || u.setImgSmoothing(t11, false));
    } else
      r.drawElement(t11, e);
  }
};
var HE = function() {
  return 0;
}, VE = function(e, r) {
  return e.getTextAngle(r, null);
}, YE = function(e, r) {
  return e.getTextAngle(r, "source");
}, UE = function(e, r) {
  return e.getTextAngle(r, "target");
}, XE = function(e, r) {
  return r.effectiveOpacity();
}, Oi = function(e, r) {
  return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
};
Ft.drawCachedElement = function(t11, e, r, n, a, i) {
  var s = this, o = s.data, u = o.eleTxrCache, l = o.lblTxrCache, f = o.slbTxrCache, c = o.tlbTxrCache, v = e.boundingBox(), h = i === true ? u.reasons.highQuality : null;
  if (!(v.w === 0 || v.h === 0 || !e.visible()) && (!n || Es(v, n))) {
    var d = e.isEdge(), g = e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(t11, e), s.drawCachedElementPortion(t11, e, u, r, a, h, HE, XE), (!d || !g) && s.drawCachedElementPortion(t11, e, l, r, a, h, VE, Oi), d && !g && (s.drawCachedElementPortion(t11, e, f, r, a, h, YE, Oi), s.drawCachedElementPortion(t11, e, c, r, a, h, UE, Oi)), s.drawElementOverlay(t11, e);
  }
};
Ft.drawElements = function(t11, e) {
  for (var r = this, n = 0; n < e.length; n++) {
    var a = e[n];
    r.drawElement(t11, a);
  }
};
Ft.drawCachedElements = function(t11, e, r, n) {
  for (var a = this, i = 0; i < e.length; i++) {
    var s = e[i];
    a.drawCachedElement(t11, s, r, n);
  }
};
Ft.drawCachedNodes = function(t11, e, r, n) {
  for (var a = this, i = 0; i < e.length; i++) {
    var s = e[i];
    !s.isNode() || a.drawCachedElement(t11, s, r, n);
  }
};
Ft.drawLayeredElements = function(t11, e, r, n) {
  var a = this, i = a.data.lyrTxrCache.getLayers(e, r);
  if (i)
    for (var s = 0; s < i.length; s++) {
      var o = i[s], u = o.bb;
      u.w === 0 || u.h === 0 || t11.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
    }
  else
    a.drawCachedElements(t11, e, r, n);
};
var Xt = {};
Xt.drawEdge = function(t11, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o = e._private.rscratch;
  if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
    var u;
    r && (u = r, t11.translate(-u.x1, -u.y1));
    var l = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, c = e.pstyle("curve-style").value, v = e.pstyle("line-style").value, h = e.pstyle("width").pfValue, d = e.pstyle("line-cap").value, g = l * f, b = l * f, p = function() {
      var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
      c === "straight-triangle" ? (s.eleStrokeStyle(t11, e, A), s.drawEdgeTrianglePath(e, t11, o.allpts)) : (t11.lineWidth = h, t11.lineCap = d, s.eleStrokeStyle(t11, e, A), s.drawEdgePath(e, t11, o.allpts, v), t11.lineCap = "butt");
    }, m = function() {
      !a || s.drawEdgeOverlay(t11, e);
    }, y = function() {
      !a || s.drawEdgeUnderlay(t11, e);
    }, E = function() {
      var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b;
      s.drawArrowheads(t11, e, A);
    }, C = function() {
      s.drawElementText(t11, e, null, n);
    };
    t11.lineJoin = "round";
    var D = e.pstyle("ghost").value === "yes";
    if (D) {
      var w = e.pstyle("ghost-offset-x").pfValue, T = e.pstyle("ghost-offset-y").pfValue, x = e.pstyle("ghost-opacity").value, S = g * x;
      t11.translate(w, T), p(S), E(S), t11.translate(-w, -T);
    }
    y(), p(), E(), m(), C(), r && t11.translate(u.x1, u.y1);
  }
};
var Df = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, n) {
    if (!!n.visible()) {
      var a = n.pstyle("".concat(e, "-opacity")).value;
      if (a !== 0) {
        var i = this, s = i.usePaths(), o = n._private.rscratch, u = n.pstyle("".concat(e, "-padding")).pfValue, l = 2 * u, f = n.pstyle("".concat(e, "-color")).value;
        r.lineWidth = l, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, f[0], f[1], f[2], a), i.drawEdgePath(n, r, o.allpts, "solid");
      }
    }
  };
};
Xt.drawEdgeOverlay = Df("overlay");
Xt.drawEdgeUnderlay = Df("underlay");
Xt.drawEdgePath = function(t11, e, r, n) {
  var a = t11._private.rscratch, i = e, s, o = false, u = this.usePaths(), l = t11.pstyle("line-dash-pattern").pfValue, f = t11.pstyle("line-dash-offset").pfValue;
  if (u) {
    var c = r.join("$"), v = a.pathCacheKey && a.pathCacheKey === c;
    v ? (s = e = a.pathCache, o = true) : (s = e = new Path2D(), a.pathCacheKey = c, a.pathCache = s);
  }
  if (i.setLineDash)
    switch (n) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(l), i.lineDashOffset = f;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!o && !a.badLine)
    switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), a.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var h = 2; h + 3 < r.length; h += 4)
          e.quadraticCurveTo(r[h], r[h + 1], r[h + 2], r[h + 3]);
        break;
      case "straight":
      case "segments":
      case "haystack":
        for (var d = 2; d + 1 < r.length; d += 2)
          e.lineTo(r[d], r[d + 1]);
        break;
    }
  e = i, u ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
Xt.drawEdgeTrianglePath = function(t11, e, r) {
  e.fillStyle = e.strokeStyle;
  for (var n = t11.pstyle("width").pfValue, a = 0; a + 1 < r.length; a += 2) {
    var i = [r[a + 2] - r[a], r[a + 3] - r[a + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], u = [o[0] * n / 2, o[1] * n / 2];
    e.beginPath(), e.moveTo(r[a] - u[0], r[a + 1] - u[1]), e.lineTo(r[a] + u[0], r[a + 1] + u[1]), e.lineTo(r[a + 2], r[a + 3]), e.closePath(), e.fill();
  }
};
Xt.drawArrowheads = function(t11, e, r) {
  var n = e._private.rscratch, a = n.edgeType === "haystack";
  a || this.drawArrowhead(t11, e, "source", n.arrowStartX, n.arrowStartY, n.srcArrowAngle, r), this.drawArrowhead(t11, e, "mid-target", n.midX, n.midY, n.midtgtArrowAngle, r), this.drawArrowhead(t11, e, "mid-source", n.midX, n.midY, n.midsrcArrowAngle, r), a || this.drawArrowhead(t11, e, "target", n.arrowEndX, n.arrowEndY, n.tgtArrowAngle, r);
};
Xt.drawArrowhead = function(t11, e, r, n, a, i, s) {
  if (!(isNaN(n) || n == null || isNaN(a) || a == null || isNaN(i) || i == null)) {
    var o = this, u = e.pstyle(r + "-arrow-shape").value;
    if (u !== "none") {
      var l = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(r + "-arrow-fill").value, c = e.pstyle("width").pfValue, v = e.pstyle("opacity").value;
      s === void 0 && (s = v);
      var h = t11.globalCompositeOperation;
      (s !== 1 || f === "hollow") && (t11.globalCompositeOperation = "destination-out", o.colorFillStyle(t11, 255, 255, 255, 1), o.colorStrokeStyle(t11, 255, 255, 255, 1), o.drawArrowShape(e, t11, l, c, u, n, a, i), t11.globalCompositeOperation = h);
      var d = e.pstyle(r + "-arrow-color").value;
      o.colorFillStyle(t11, d[0], d[1], d[2], s), o.colorStrokeStyle(t11, d[0], d[1], d[2], s), o.drawArrowShape(e, t11, f, c, u, n, a, i);
    }
  }
};
Xt.drawArrowShape = function(t11, e, r, n, a, i, s, o) {
  var u = this, l = this.usePaths() && a !== "triangle-cross", f = false, c, v = e, h = {
    x: i,
    y: s
  }, d = t11.pstyle("arrow-scale").value, g = this.getArrowWidth(n, d), b = u.arrowShapes[a];
  if (l) {
    var p = u.arrowPathCache = u.arrowPathCache || [], m = mr(a), y = p[m];
    y != null ? (c = e = y, f = true) : (c = e = new Path2D(), p[m] = c);
  }
  f || (e.beginPath && e.beginPath(), l ? b.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : b.draw(e, g, o, h, n), e.closePath && e.closePath()), e = v, l && (e.translate(i, s), e.rotate(o), e.scale(g, g)), (r === "filled" || r === "both") && (l ? e.fill(c) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = (b.matchEdgeWidth ? n : 1) / (l ? g : 1), e.lineJoin = "miter", l ? e.stroke(c) : e.stroke()), l && (e.scale(1 / g, 1 / g), e.rotate(-o), e.translate(-i, -s));
};
var Is = {};
Is.safeDrawImage = function(t11, e, r, n, a, i, s, o, u, l) {
  if (!(a <= 0 || i <= 0 || u <= 0 || l <= 0))
    try {
      t11.drawImage(e, r, n, a, i, s, o, u, l);
    } catch (f) {
      Ne(f);
    }
};
Is.drawInscribedImage = function(t11, e, r, n, a) {
  var i = this, s = r.position(), o = s.x, u = s.y, l = r.cy().style(), f = l.getIndexedStyle.bind(l), c = f(r, "background-fit", "value", n), v = f(r, "background-repeat", "value", n), h = r.width(), d = r.height(), g = r.padding() * 2, b = h + (f(r, "background-width-relative-to", "value", n) === "inner" ? 0 : g), p = d + (f(r, "background-height-relative-to", "value", n) === "inner" ? 0 : g), m = r._private.rscratch, y = f(r, "background-clip", "value", n), E = y === "node", C = f(r, "background-image-opacity", "value", n) * a, D = f(r, "background-image-smoothing", "value", n), w = e.width || e.cachedW, T = e.height || e.cachedH;
  (w == null || T == null) && (document.body.appendChild(e), w = e.cachedW = e.width || e.offsetWidth, T = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var x = w, S = T;
  if (f(r, "background-width", "value", n) !== "auto" && (f(r, "background-width", "units", n) === "%" ? x = f(r, "background-width", "pfValue", n) * b : x = f(r, "background-width", "pfValue", n)), f(r, "background-height", "value", n) !== "auto" && (f(r, "background-height", "units", n) === "%" ? S = f(r, "background-height", "pfValue", n) * p : S = f(r, "background-height", "pfValue", n)), !(x === 0 || S === 0)) {
    if (c === "contain") {
      var L = Math.min(b / x, p / S);
      x *= L, S *= L;
    } else if (c === "cover") {
      var L = Math.max(b / x, p / S);
      x *= L, S *= L;
    }
    var A = o - b / 2, O = f(r, "background-position-x", "units", n), N = f(r, "background-position-x", "pfValue", n);
    O === "%" ? A += (b - x) * N : A += N;
    var R = f(r, "background-offset-x", "units", n), I = f(r, "background-offset-x", "pfValue", n);
    R === "%" ? A += (b - x) * I : A += I;
    var k = u - p / 2, P = f(r, "background-position-y", "units", n), B = f(r, "background-position-y", "pfValue", n);
    P === "%" ? k += (p - S) * B : k += B;
    var _ = f(r, "background-offset-y", "units", n), F = f(r, "background-offset-y", "pfValue", n);
    _ === "%" ? k += (p - S) * F : k += F, m.pathCache && (A -= o, k -= u, o = 0, u = 0);
    var G = t11.globalAlpha;
    t11.globalAlpha = C;
    var z = i.getImgSmoothing(t11), V = false;
    if (D === "no" && z ? (i.setImgSmoothing(t11, false), V = true) : D === "yes" && !z && (i.setImgSmoothing(t11, true), V = true), v === "no-repeat")
      E && (t11.save(), m.pathCache ? t11.clip(m.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t11, o, u, b, p), t11.clip())), i.safeDrawImage(t11, e, 0, 0, w, T, A, k, x, S), E && t11.restore();
    else {
      var U = t11.createPattern(e, v);
      t11.fillStyle = U, i.nodeShapes[i.getNodeShape(r)].draw(t11, o, u, b, p), t11.translate(A, k), t11.fill(), t11.translate(-A, -k);
    }
    t11.globalAlpha = G, V && i.setImgSmoothing(t11, z);
  }
};
var Sr = {};
Sr.eleTextBiggerThanMin = function(t11, e) {
  if (!e) {
    var r = t11.cy().zoom(), n = this.getPixelRatio(), a = Math.ceil(ws(r * n));
    e = Math.pow(2, a);
  }
  var i = t11.pstyle("font-size").pfValue * e, s = t11.pstyle("min-zoomed-font-size").pfValue;
  return !(i < s);
};
Sr.drawElementText = function(t11, e, r, n, a) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this;
  if (n == null) {
    if (i && !s.eleTextBiggerThanMin(e))
      return;
  } else if (n === false)
    return;
  if (e.isNode()) {
    var o = e.pstyle("label");
    if (!o || !o.value)
      return;
    var u = s.getLabelJustification(e);
    t11.textAlign = u, t11.textBaseline = "bottom";
  } else {
    var l = e.element()._private.rscratch.badLine, f = e.pstyle("label"), c = e.pstyle("source-label"), v = e.pstyle("target-label");
    if (l || (!f || !f.value) && (!c || !c.value) && (!v || !v.value))
      return;
    t11.textAlign = "center", t11.textBaseline = "bottom";
  }
  var h = !r, d;
  r && (d = r, t11.translate(-d.x1, -d.y1)), a == null ? (s.drawText(t11, e, null, h, i), e.isEdge() && (s.drawText(t11, e, "source", h, i), s.drawText(t11, e, "target", h, i))) : s.drawText(t11, e, a, h, i), r && t11.translate(d.x1, d.y1);
};
Sr.getFontCache = function(t11) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var r = 0; r < this.fontCaches.length; r++)
    if (e = this.fontCaches[r], e.context === t11)
      return e;
  return e = {
    context: t11
  }, this.fontCaches.push(e), e;
};
Sr.setupTextStyle = function(t11, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, n = e.pstyle("font-style").strValue, a = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, u = e.pstyle("text-outline-opacity").value * o, l = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
  t11.font = n + " " + s + " " + a + " " + i, t11.lineJoin = "round", this.colorFillStyle(t11, l[0], l[1], l[2], o), this.colorStrokeStyle(t11, f[0], f[1], f[2], u);
};
function qE(t11, e, r, n, a) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5;
  t11.beginPath(), t11.moveTo(e + i, r), t11.lineTo(e + n - i, r), t11.quadraticCurveTo(e + n, r, e + n, r + i), t11.lineTo(e + n, r + a - i), t11.quadraticCurveTo(e + n, r + a, e + n - i, r + a), t11.lineTo(e + i, r + a), t11.quadraticCurveTo(e, r + a, e, r + a - i), t11.lineTo(e, r + i), t11.quadraticCurveTo(e, r, e + i, r), t11.closePath(), t11.fill();
}
Sr.getTextAngle = function(t11, e) {
  var r, n = t11._private, a = n.rscratch, i = e ? e + "-" : "", s = t11.pstyle(i + "text-rotation"), o = St(a, "labelAngle", e);
  return s.strValue === "autorotate" ? r = t11.isEdge() ? o : 0 : s.strValue === "none" ? r = 0 : r = s.pfValue, r;
};
Sr.drawText = function(t11, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = e._private, s = i.rscratch, o = a ? e.effectiveOpacity() : 1;
  if (!(a && (o === 0 || e.pstyle("text-opacity").value === 0))) {
    r === "main" && (r = null);
    var u = St(s, "labelX", r), l = St(s, "labelY", r), f, c, v = this.getLabelText(e, r);
    if (v != null && v !== "" && !isNaN(u) && !isNaN(l)) {
      this.setupTextStyle(t11, e, a);
      var h = r ? r + "-" : "", d = St(s, "labelWidth", r), g = St(s, "labelHeight", r), b = e.pstyle(h + "text-margin-x").pfValue, p = e.pstyle(h + "text-margin-y").pfValue, m = e.isEdge(), y = e.pstyle("text-halign").value, E = e.pstyle("text-valign").value;
      m && (y = "center", E = "center"), u += b, l += p;
      var C;
      switch (n ? C = this.getTextAngle(e, r) : C = 0, C !== 0 && (f = u, c = l, t11.translate(f, c), t11.rotate(C), u = 0, l = 0), E) {
        case "top":
          break;
        case "center":
          l += g / 2;
          break;
        case "bottom":
          l += g;
          break;
      }
      var D = e.pstyle("text-background-opacity").value, w = e.pstyle("text-border-opacity").value, T = e.pstyle("text-border-width").pfValue, x = e.pstyle("text-background-padding").pfValue;
      if (D > 0 || T > 0 && w > 0) {
        var S = u - x;
        switch (y) {
          case "left":
            S -= d;
            break;
          case "center":
            S -= d / 2;
            break;
        }
        var L = l - g - x, A = d + 2 * x, O = g + 2 * x;
        if (D > 0) {
          var N = t11.fillStyle, R = e.pstyle("text-background-color").value;
          t11.fillStyle = "rgba(" + R[0] + "," + R[1] + "," + R[2] + "," + D * o + ")";
          var I = e.pstyle("text-background-shape").strValue;
          I.indexOf("round") === 0 ? qE(t11, S, L, A, O, 2) : t11.fillRect(S, L, A, O), t11.fillStyle = N;
        }
        if (T > 0 && w > 0) {
          var k = t11.strokeStyle, P = t11.lineWidth, B = e.pstyle("text-border-color").value, _ = e.pstyle("text-border-style").value;
          if (t11.strokeStyle = "rgba(" + B[0] + "," + B[1] + "," + B[2] + "," + w * o + ")", t11.lineWidth = T, t11.setLineDash)
            switch (_) {
              case "dotted":
                t11.setLineDash([1, 1]);
                break;
              case "dashed":
                t11.setLineDash([4, 2]);
                break;
              case "double":
                t11.lineWidth = T / 4, t11.setLineDash([]);
                break;
              case "solid":
                t11.setLineDash([]);
                break;
            }
          if (t11.strokeRect(S, L, A, O), _ === "double") {
            var F = T / 2;
            t11.strokeRect(S + F, L + F, A - F * 2, O - F * 2);
          }
          t11.setLineDash && t11.setLineDash([]), t11.lineWidth = P, t11.strokeStyle = k;
        }
      }
      var G = 2 * e.pstyle("text-outline-width").pfValue;
      if (G > 0 && (t11.lineWidth = G), e.pstyle("text-wrap").value === "wrap") {
        var z = St(s, "labelWrapCachedLines", r), V = St(s, "labelLineHeight", r), U = d / 2, Y = this.getLabelJustification(e);
        switch (Y === "auto" || (y === "left" ? Y === "left" ? u += -d : Y === "center" && (u += -U) : y === "center" ? Y === "left" ? u += -U : Y === "right" && (u += U) : y === "right" && (Y === "center" ? u += U : Y === "right" && (u += d))), E) {
          case "top":
            l -= (z.length - 1) * V;
            break;
          case "center":
          case "bottom":
            l -= (z.length - 1) * V;
            break;
        }
        for (var $ = 0; $ < z.length; $++)
          G > 0 && t11.strokeText(z[$], u, l), t11.fillText(z[$], u, l), l += V;
      } else
        G > 0 && t11.strokeText(v, u, l), t11.fillText(v, u, l);
      C !== 0 && (t11.rotate(-C), t11.translate(-f, -c));
    }
  }
};
var an = {};
an.drawNode = function(t11, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : true, s = this, o, u, l = e._private, f = l.rscratch, c = e.position();
  if (!(!ne(c.x) || !ne(c.y)) && !(i && !e.visible())) {
    var v = i ? e.effectiveOpacity() : 1, h = s.usePaths(), d, g = false, b = e.padding();
    o = e.width() + 2 * b, u = e.height() + 2 * b;
    var p;
    r && (p = r, t11.translate(-p.x1, -p.y1));
    for (var m = e.pstyle("background-image"), y = m.value, E = new Array(y.length), C = new Array(y.length), D = 0, w = 0; w < y.length; w++) {
      var T = y[w], x = E[w] = T != null && T !== "none";
      if (x) {
        var S = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", w);
        D++, C[w] = s.getCachedImage(T, S, function() {
          l.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var L = e.pstyle("background-blacken").value, A = e.pstyle("border-width").pfValue, O = e.pstyle("background-opacity").value * v, N = e.pstyle("border-color").value, R = e.pstyle("border-style").value, I = e.pstyle("border-opacity").value * v;
    t11.lineJoin = "miter";
    var k = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O;
      s.eleFillStyle(t11, e, ae);
    }, P = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I;
      s.colorStrokeStyle(t11, N[0], N[1], N[2], ae);
    }, B = e.pstyle("shape").strValue, _ = e.pstyle("shape-polygon-points").pfValue;
    if (h) {
      t11.translate(c.x, c.y);
      var F = s.nodePathCache = s.nodePathCache || [], G = wl(B === "polygon" ? B + "," + _.join(",") : B, "" + u, "" + o), z = F[G];
      z != null ? (d = z, g = true, f.pathCache = d) : (d = new Path2D(), F[G] = f.pathCache = d);
    }
    var V = function() {
      if (!g) {
        var ae = c;
        h && (ae = {
          x: 0,
          y: 0
        }), s.nodeShapes[s.getNodeShape(e)].draw(d || t11, ae.x, ae.y, o, u);
      }
      h ? t11.fill(d) : t11.fill();
    }, U = function() {
      for (var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v, ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, Ee = l.backgrounding, ge = 0, ce = 0; ce < C.length; ce++) {
        var J = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", ce);
        if (ue && J === "over" || !ue && J === "inside") {
          ge++;
          continue;
        }
        E[ce] && C[ce].complete && !C[ce].error && (ge++, s.drawInscribedImage(t11, C[ce], e, ce, ae));
      }
      l.backgrounding = ge !== D, Ee !== l.backgrounding && e.updateStyle(false);
    }, Y = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, ue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v;
      s.hasPie(e) && (s.drawPie(t11, e, ue), ae && (h || s.nodeShapes[s.getNodeShape(e)].draw(t11, c.x, c.y, o, u)));
    }, $ = function() {
      var ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v, ue = (L > 0 ? L : -L) * ae, Ee = L > 0 ? 0 : 255;
      L !== 0 && (s.colorFillStyle(t11, Ee, Ee, Ee, ue), h ? t11.fill(d) : t11.fill());
    }, X = function() {
      if (A > 0) {
        if (t11.lineWidth = A, t11.lineCap = "butt", t11.setLineDash)
          switch (R) {
            case "dotted":
              t11.setLineDash([1, 1]);
              break;
            case "dashed":
              t11.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              t11.setLineDash([]);
              break;
          }
        if (h ? t11.stroke(d) : t11.stroke(), R === "double") {
          t11.lineWidth = A / 3;
          var ae = t11.globalCompositeOperation;
          t11.globalCompositeOperation = "destination-out", h ? t11.stroke(d) : t11.stroke(), t11.globalCompositeOperation = ae;
        }
        t11.setLineDash && t11.setLineDash([]);
      }
    }, K = function() {
      a && s.drawNodeOverlay(t11, e, c, o, u);
    }, Z = function() {
      a && s.drawNodeUnderlay(t11, e, c, o, u);
    }, te = function() {
      s.drawElementText(t11, e, null, n);
    }, ve = e.pstyle("ghost").value === "yes";
    if (ve) {
      var de = e.pstyle("ghost-offset-x").pfValue, re = e.pstyle("ghost-offset-y").pfValue, ee = e.pstyle("ghost-opacity").value, fe = ee * v;
      t11.translate(de, re), k(ee * O), V(), U(fe, true), P(ee * I), X(), Y(L !== 0 || A !== 0), U(fe, false), $(fe), t11.translate(-de, -re);
    }
    h && t11.translate(-c.x, -c.y), Z(), h && t11.translate(c.x, c.y), k(), V(), U(v, true), P(), X(), Y(L !== 0 || A !== 0), U(v, false), $(), h && t11.translate(-c.x, -c.y), te(), K(), r && t11.translate(p.x1, p.y1);
  }
};
var Sf = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(r, n, a, i, s) {
    var o = this;
    if (!!n.visible()) {
      var u = n.pstyle("".concat(e, "-padding")).pfValue, l = n.pstyle("".concat(e, "-opacity")).value, f = n.pstyle("".concat(e, "-color")).value, c = n.pstyle("".concat(e, "-shape")).value;
      if (l > 0) {
        if (a = a || n.position(), i == null || s == null) {
          var v = n.padding();
          i = n.width() + 2 * v, s = n.height() + 2 * v;
        }
        o.colorFillStyle(r, f[0], f[1], f[2], l), o.nodeShapes[c].draw(r, a.x, a.y, i + u * 2, s + u * 2), r.fill();
      }
    }
  };
};
an.drawNodeOverlay = Sf("overlay");
an.drawNodeUnderlay = Sf("underlay");
an.hasPie = function(t11) {
  return t11 = t11[0], t11._private.hasPie;
};
an.drawPie = function(t11, e, r, n) {
  e = e[0], n = n || e.position();
  var a = e.cy().style(), i = e.pstyle("pie-size"), s = n.x, o = n.y, u = e.width(), l = e.height(), f = Math.min(u, l) / 2, c = 0, v = this.usePaths();
  v && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
  for (var h = 1; h <= a.pieBackgroundN; h++) {
    var d = e.pstyle("pie-" + h + "-background-size").value, g = e.pstyle("pie-" + h + "-background-color").value, b = e.pstyle("pie-" + h + "-background-opacity").value * r, p = d / 100;
    p + c > 1 && (p = 1 - c);
    var m = 1.5 * Math.PI + 2 * Math.PI * c, y = 2 * Math.PI * p, E = m + y;
    d === 0 || c >= 1 || c + p > 1 || (t11.beginPath(), t11.moveTo(s, o), t11.arc(s, o, f, m, E), t11.closePath(), this.colorFillStyle(t11, g[0], g[1], g[2], b), t11.fill(), c += p);
  }
};
var pt = {}, WE = 100;
pt.getPixelRatio = function() {
  var t11 = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = t11.backingStorePixelRatio || t11.webkitBackingStorePixelRatio || t11.mozBackingStorePixelRatio || t11.msBackingStorePixelRatio || t11.oBackingStorePixelRatio || t11.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / e;
};
pt.paintCache = function(t11) {
  for (var e = this.paintCaches = this.paintCaches || [], r = true, n, a = 0; a < e.length; a++)
    if (n = e[a], n.context === t11) {
      r = false;
      break;
    }
  return r && (n = {
    context: t11
  }, e.push(n)), n;
};
pt.createGradientStyleFor = function(t11, e, r, n, a) {
  var i, s = this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, u = r.pstyle(e + "-gradient-stop-positions").pfValue;
  if (n === "radial-gradient")
    if (r.isEdge()) {
      var l = r.sourceEndpoint(), f = r.targetEndpoint(), c = r.midpoint(), v = br(l, c), h = br(f, c);
      i = t11.createRadialGradient(c.x, c.y, 0, c.x, c.y, Math.max(v, h));
    } else {
      var d = s ? {
        x: 0,
        y: 0
      } : r.position(), g = r.paddedWidth(), b = r.paddedHeight();
      i = t11.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(g, b));
    }
  else if (r.isEdge()) {
    var p = r.sourceEndpoint(), m = r.targetEndpoint();
    i = t11.createLinearGradient(p.x, p.y, m.x, m.y);
  } else {
    var y = s ? {
      x: 0,
      y: 0
    } : r.position(), E = r.paddedWidth(), C = r.paddedHeight(), D = E / 2, w = C / 2, T = r.pstyle("background-gradient-direction").value;
    switch (T) {
      case "to-bottom":
        i = t11.createLinearGradient(y.x, y.y - w, y.x, y.y + w);
        break;
      case "to-top":
        i = t11.createLinearGradient(y.x, y.y + w, y.x, y.y - w);
        break;
      case "to-left":
        i = t11.createLinearGradient(y.x + D, y.y, y.x - D, y.y);
        break;
      case "to-right":
        i = t11.createLinearGradient(y.x - D, y.y, y.x + D, y.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = t11.createLinearGradient(y.x - D, y.y - w, y.x + D, y.y + w);
        break;
      case "to-top-right":
      case "to-right-top":
        i = t11.createLinearGradient(y.x - D, y.y + w, y.x + D, y.y - w);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = t11.createLinearGradient(y.x + D, y.y - w, y.x - D, y.y + w);
        break;
      case "to-top-left":
      case "to-left-top":
        i = t11.createLinearGradient(y.x + D, y.y + w, y.x - D, y.y - w);
        break;
    }
  }
  if (!i)
    return null;
  for (var x = u.length === o.length, S = o.length, L = 0; L < S; L++)
    i.addColorStop(x ? u[L] : L / (S - 1), "rgba(" + o[L][0] + "," + o[L][1] + "," + o[L][2] + "," + a + ")");
  return i;
};
pt.gradientFillStyle = function(t11, e, r, n) {
  var a = this.createGradientStyleFor(t11, "background", e, r, n);
  if (!a)
    return null;
  t11.fillStyle = a;
};
pt.colorFillStyle = function(t11, e, r, n, a) {
  t11.fillStyle = "rgba(" + e + "," + r + "," + n + "," + a + ")";
};
pt.eleFillStyle = function(t11, e, r) {
  var n = e.pstyle("background-fill").value;
  if (n === "linear-gradient" || n === "radial-gradient")
    this.gradientFillStyle(t11, e, n, r);
  else {
    var a = e.pstyle("background-color").value;
    this.colorFillStyle(t11, a[0], a[1], a[2], r);
  }
};
pt.gradientStrokeStyle = function(t11, e, r, n) {
  var a = this.createGradientStyleFor(t11, "line", e, r, n);
  if (!a)
    return null;
  t11.strokeStyle = a;
};
pt.colorStrokeStyle = function(t11, e, r, n, a) {
  t11.strokeStyle = "rgba(" + e + "," + r + "," + n + "," + a + ")";
};
pt.eleStrokeStyle = function(t11, e, r) {
  var n = e.pstyle("line-fill").value;
  if (n === "linear-gradient" || n === "radial-gradient")
    this.gradientStrokeStyle(t11, e, n, r);
  else {
    var a = e.pstyle("line-color").value;
    this.colorStrokeStyle(t11, a[0], a[1], a[2], r);
  }
};
pt.matchCanvasSize = function(t11) {
  var e = this, r = e.data, n = e.findContainerClientCoords(), a = n[2], i = n[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
  (t11 === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t11 === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
  var u = a * s, l = i * s, f;
  if (!(u === e.canvasWidth && l === e.canvasHeight)) {
    e.fontCaches = null;
    var c = r.canvasContainer;
    c.style.width = a + "px", c.style.height = i + "px";
    for (var v = 0; v < e.CANVAS_LAYERS; v++)
      f = r.canvases[v], f.width = u, f.height = l, f.style.width = a + "px", f.style.height = i + "px";
    for (var v = 0; v < e.BUFFER_COUNT; v++)
      f = r.bufferCanvases[v], f.width = u, f.height = l, f.style.width = a + "px", f.style.height = i + "px";
    e.textureMult = 1, s <= 1 && (f = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = u * e.textureMult, f.height = l * e.textureMult), e.canvasWidth = u, e.canvasHeight = l;
  }
};
pt.renderTo = function(t11, e, r, n) {
  this.render({
    forcedContext: t11,
    forcedZoom: e,
    forcedPan: r,
    drawAllLayers: true,
    forcedPxRatio: n
  });
};
pt.render = function(t11) {
  t11 = t11 || Cl();
  var e = t11.forcedContext, r = t11.drawAllLayers, n = t11.drawOnlyNodeLayer, a = t11.forcedZoom, i = t11.forcedPan, s = this, o = t11.forcedPxRatio === void 0 ? this.getPixelRatio() : t11.forcedPxRatio, u = s.cy, l = s.data, f = l.canvasNeedsRedraw, c = s.textureOnViewport && !e && (s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming), v = t11.motionBlur !== void 0 ? t11.motionBlur : s.motionBlur, h = s.motionBlurPxRatio, d = u.hasCompoundNodes(), g = s.hoverData.draggingEles, b = !!(s.hoverData.selecting || s.touchData.selecting);
  v = v && !e && s.motionBlurEnabled && !b;
  var p = v;
  e || (s.prevPxRatio !== o && (s.invalidateContainerClientCoordsCache(), s.matchCanvasSize(s.container), s.redrawHint("eles", true), s.redrawHint("drag", true)), s.prevPxRatio = o), !e && s.motionBlurTimeout && clearTimeout(s.motionBlurTimeout), v && (s.mbFrames == null && (s.mbFrames = 0), s.mbFrames++, s.mbFrames < 3 && (p = false), s.mbFrames > s.minMbLowQualFrames && (s.motionBlurPxRatio = s.mbPxRBlurry)), s.clearingMotionBlur && (s.motionBlurPxRatio = 1), s.textureDrawLastFrame && !c && (f[s.NODE] = true, f[s.SELECT_BOX] = true);
  var m = u.style(), y = u.zoom(), E = a !== void 0 ? a : y, C = u.pan(), D = {
    x: C.x,
    y: C.y
  }, w = {
    zoom: y,
    pan: {
      x: C.x,
      y: C.y
    }
  }, T = s.prevViewport, x = T === void 0 || w.zoom !== T.zoom || w.pan.x !== T.pan.x || w.pan.y !== T.pan.y;
  !x && !(g && !d) && (s.motionBlurPxRatio = 1), i && (D = i), E *= o, D.x *= o, D.y *= o;
  var S = s.getCachedZSortedEles();
  function L(re, ee, fe, se, ae) {
    var ue = re.globalCompositeOperation;
    re.globalCompositeOperation = "destination-out", s.colorFillStyle(re, 255, 255, 255, s.motionBlurTransparency), re.fillRect(ee, fe, se, ae), re.globalCompositeOperation = ue;
  }
  function A(re, ee) {
    var fe, se, ae, ue;
    !s.clearingMotionBlur && (re === l.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] || re === l.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG]) ? (fe = {
      x: C.x * h,
      y: C.y * h
    }, se = y * h, ae = s.canvasWidth * h, ue = s.canvasHeight * h) : (fe = D, se = E, ae = s.canvasWidth, ue = s.canvasHeight), re.setTransform(1, 0, 0, 1, 0, 0), ee === "motionBlur" ? L(re, 0, 0, ae, ue) : !e && (ee === void 0 || ee) && re.clearRect(0, 0, ae, ue), r || (re.translate(fe.x, fe.y), re.scale(se, se)), i && re.translate(i.x, i.y), a && re.scale(a, a);
  }
  if (c || (s.textureDrawLastFrame = false), c) {
    if (s.textureDrawLastFrame = true, !s.textureCache) {
      s.textureCache = {}, s.textureCache.bb = u.mutableElements().boundingBox(), s.textureCache.texture = s.data.bufferCanvases[s.TEXTURE_BUFFER];
      var O = s.data.bufferContexts[s.TEXTURE_BUFFER];
      O.setTransform(1, 0, 0, 1, 0, 0), O.clearRect(0, 0, s.canvasWidth * s.textureMult, s.canvasHeight * s.textureMult), s.render({
        forcedContext: O,
        drawOnlyNodeLayer: true,
        forcedPxRatio: o * s.textureMult
      });
      var w = s.textureCache.viewport = {
        zoom: u.zoom(),
        pan: u.pan(),
        width: s.canvasWidth,
        height: s.canvasHeight
      };
      w.mpan = {
        x: (0 - w.pan.x) / w.zoom,
        y: (0 - w.pan.y) / w.zoom
      };
    }
    f[s.DRAG] = false, f[s.NODE] = false;
    var N = l.contexts[s.NODE], R = s.textureCache.texture, w = s.textureCache.viewport;
    N.setTransform(1, 0, 0, 1, 0, 0), v ? L(N, 0, 0, w.width, w.height) : N.clearRect(0, 0, w.width, w.height);
    var I = m.core("outside-texture-bg-color").value, k = m.core("outside-texture-bg-opacity").value;
    s.colorFillStyle(N, I[0], I[1], I[2], k), N.fillRect(0, 0, w.width, w.height);
    var y = u.zoom();
    A(N, false), N.clearRect(w.mpan.x, w.mpan.y, w.width / w.zoom / o, w.height / w.zoom / o), N.drawImage(R, w.mpan.x, w.mpan.y, w.width / w.zoom / o, w.height / w.zoom / o);
  } else
    s.textureOnViewport && !e && (s.textureCache = null);
  var P = u.extent(), B = s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming || s.hoverData.draggingEles || s.cy.animated(), _ = s.hideEdgesOnViewport && B, F = [];
  if (F[s.NODE] = !f[s.NODE] && v && !s.clearedForMotionBlur[s.NODE] || s.clearingMotionBlur, F[s.NODE] && (s.clearedForMotionBlur[s.NODE] = true), F[s.DRAG] = !f[s.DRAG] && v && !s.clearedForMotionBlur[s.DRAG] || s.clearingMotionBlur, F[s.DRAG] && (s.clearedForMotionBlur[s.DRAG] = true), f[s.NODE] || r || n || F[s.NODE]) {
    var G = v && !F[s.NODE] && h !== 1, N = e || (G ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] : l.contexts[s.NODE]), z = v && !G ? "motionBlur" : void 0;
    A(N, z), _ ? s.drawCachedNodes(N, S.nondrag, o, P) : s.drawLayeredElements(N, S.nondrag, o, P), s.debug && s.drawDebugPoints(N, S.nondrag), !r && !v && (f[s.NODE] = false);
  }
  if (!n && (f[s.DRAG] || r || F[s.DRAG])) {
    var G = v && !F[s.DRAG] && h !== 1, N = e || (G ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG] : l.contexts[s.DRAG]);
    A(N, v && !G ? "motionBlur" : void 0), _ ? s.drawCachedNodes(N, S.drag, o, P) : s.drawCachedElements(N, S.drag, o, P), s.debug && s.drawDebugPoints(N, S.drag), !r && !v && (f[s.DRAG] = false);
  }
  if (s.showFps || !n && f[s.SELECT_BOX] && !r) {
    var N = e || l.contexts[s.SELECT_BOX];
    if (A(N), s.selection[4] == 1 && (s.hoverData.selecting || s.touchData.selecting)) {
      var y = s.cy.zoom(), V = m.core("selection-box-border-width").value / y;
      N.lineWidth = V, N.fillStyle = "rgba(" + m.core("selection-box-color").value[0] + "," + m.core("selection-box-color").value[1] + "," + m.core("selection-box-color").value[2] + "," + m.core("selection-box-opacity").value + ")", N.fillRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]), V > 0 && (N.strokeStyle = "rgba(" + m.core("selection-box-border-color").value[0] + "," + m.core("selection-box-border-color").value[1] + "," + m.core("selection-box-border-color").value[2] + "," + m.core("selection-box-opacity").value + ")", N.strokeRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]));
    }
    if (l.bgActivePosistion && !s.hoverData.selecting) {
      var y = s.cy.zoom(), U = l.bgActivePosistion;
      N.fillStyle = "rgba(" + m.core("active-bg-color").value[0] + "," + m.core("active-bg-color").value[1] + "," + m.core("active-bg-color").value[2] + "," + m.core("active-bg-opacity").value + ")", N.beginPath(), N.arc(U.x, U.y, m.core("active-bg-size").pfValue / y, 0, 2 * Math.PI), N.fill();
    }
    var Y = s.lastRedrawTime;
    if (s.showFps && Y) {
      Y = Math.round(Y);
      var $ = Math.round(1e3 / Y);
      N.setTransform(1, 0, 0, 1, 0, 0), N.fillStyle = "rgba(255, 0, 0, 0.75)", N.strokeStyle = "rgba(255, 0, 0, 0.75)", N.lineWidth = 1, N.fillText("1 frame = " + Y + " ms = " + $ + " fps", 0, 20);
      var X = 60;
      N.strokeRect(0, 30, 250, 20), N.fillRect(0, 30, 250 * Math.min($ / X, 1), 20);
    }
    r || (f[s.SELECT_BOX] = false);
  }
  if (v && h !== 1) {
    var K = l.contexts[s.NODE], Z = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_NODE], te = l.contexts[s.DRAG], ve = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_DRAG], de = function(ee, fe, se) {
      ee.setTransform(1, 0, 0, 1, 0, 0), se || !p ? ee.clearRect(0, 0, s.canvasWidth, s.canvasHeight) : L(ee, 0, 0, s.canvasWidth, s.canvasHeight);
      var ae = h;
      ee.drawImage(
        fe,
        0,
        0,
        s.canvasWidth * ae,
        s.canvasHeight * ae,
        0,
        0,
        s.canvasWidth,
        s.canvasHeight
      );
    };
    (f[s.NODE] || F[s.NODE]) && (de(K, Z, F[s.NODE]), f[s.NODE] = false), (f[s.DRAG] || F[s.DRAG]) && (de(te, ve, F[s.DRAG]), f[s.DRAG] = false);
  }
  s.prevViewport = w, s.clearingMotionBlur && (s.clearingMotionBlur = false, s.motionBlurCleared = true, s.motionBlur = true), v && (s.motionBlurTimeout = setTimeout(function() {
    s.motionBlurTimeout = null, s.clearedForMotionBlur[s.NODE] = false, s.clearedForMotionBlur[s.DRAG] = false, s.motionBlur = false, s.clearingMotionBlur = !c, s.mbFrames = 0, f[s.NODE] = true, f[s.DRAG] = true, s.redraw();
  }, WE)), e || u.emit("render");
};
var lr = {};
lr.drawPolygonPath = function(t11, e, r, n, a, i) {
  var s = n / 2, o = a / 2;
  t11.beginPath && t11.beginPath(), t11.moveTo(e + s * i[0], r + o * i[1]);
  for (var u = 1; u < i.length / 2; u++)
    t11.lineTo(e + s * i[u * 2], r + o * i[u * 2 + 1]);
  t11.closePath();
};
lr.drawRoundPolygonPath = function(t11, e, r, n, a, i) {
  var s = n / 2, o = a / 2, u = xs(n, a);
  t11.beginPath && t11.beginPath();
  for (var l = 0; l < i.length / 4; l++) {
    var f = void 0, c = void 0;
    l === 0 ? f = i.length - 2 : f = l * 4 - 2, c = l * 4 + 2;
    var v = e + s * i[l * 4], h = r + o * i[l * 4 + 1], d = -i[f] * i[c] - i[f + 1] * i[c + 1], g = u / Math.tan(Math.acos(d) / 2), b = v - g * i[f], p = h - g * i[f + 1], m = v + g * i[c], y = h + g * i[c + 1];
    l === 0 ? t11.moveTo(b, p) : t11.lineTo(b, p), t11.arcTo(v, h, m, y, u);
  }
  t11.closePath();
};
lr.drawRoundRectanglePath = function(t11, e, r, n, a) {
  var i = n / 2, s = a / 2, o = Wn(n, a);
  t11.beginPath && t11.beginPath(), t11.moveTo(e, r - s), t11.arcTo(e + i, r - s, e + i, r, o), t11.arcTo(e + i, r + s, e, r + s, o), t11.arcTo(e - i, r + s, e - i, r, o), t11.arcTo(e - i, r - s, e, r - s, o), t11.lineTo(e, r - s), t11.closePath();
};
lr.drawBottomRoundRectanglePath = function(t11, e, r, n, a) {
  var i = n / 2, s = a / 2, o = Wn(n, a);
  t11.beginPath && t11.beginPath(), t11.moveTo(e, r - s), t11.lineTo(e + i, r - s), t11.lineTo(e + i, r), t11.arcTo(e + i, r + s, e, r + s, o), t11.arcTo(e - i, r + s, e - i, r, o), t11.lineTo(e - i, r - s), t11.lineTo(e, r - s), t11.closePath();
};
lr.drawCutRectanglePath = function(t11, e, r, n, a) {
  var i = n / 2, s = a / 2, o = Il();
  t11.beginPath && t11.beginPath(), t11.moveTo(e - i + o, r - s), t11.lineTo(e + i - o, r - s), t11.lineTo(e + i, r - s + o), t11.lineTo(e + i, r + s - o), t11.lineTo(e + i - o, r + s), t11.lineTo(e - i + o, r + s), t11.lineTo(e - i, r + s - o), t11.lineTo(e - i, r - s + o), t11.closePath();
};
lr.drawBarrelPath = function(t11, e, r, n, a) {
  var i = n / 2, s = a / 2, o = e - i, u = e + i, l = r - s, f = r + s, c = Vi(n, a), v = c.widthOffset, h = c.heightOffset, d = c.ctrlPtOffsetPct * v;
  t11.beginPath && t11.beginPath(), t11.moveTo(o, l + h), t11.lineTo(o, f - h), t11.quadraticCurveTo(o + d, f, o + v, f), t11.lineTo(u - v, f), t11.quadraticCurveTo(u - d, f, u, f - h), t11.lineTo(u, l + h), t11.quadraticCurveTo(u - d, l, u - v, l), t11.lineTo(o + v, l), t11.quadraticCurveTo(o + d, l, o, l + h), t11.closePath();
};
var du = Math.sin(0), gu = Math.cos(0), Qi = {}, Ji = {}, Lf = Math.PI / 40;
for (var Rr = 0 * Math.PI; Rr < 2 * Math.PI; Rr += Lf)
  Qi[Rr] = Math.sin(Rr), Ji[Rr] = Math.cos(Rr);
lr.drawEllipsePath = function(t11, e, r, n, a) {
  if (t11.beginPath && t11.beginPath(), t11.ellipse)
    t11.ellipse(e, r, n / 2, a / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, s, o = n / 2, u = a / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += Lf)
      i = e - o * Qi[l] * du + o * Ji[l] * gu, s = r + u * Ji[l] * du + u * Qi[l] * gu, l === 0 ? t11.moveTo(i, s) : t11.lineTo(i, s);
  t11.closePath();
};
var jn = {};
jn.createBuffer = function(t11, e) {
  var r = document.createElement("canvas");
  return r.width = t11, r.height = e, [r, r.getContext("2d")];
};
jn.bufferCanvasImage = function(t11) {
  var e = this.cy, r = e.mutableElements(), n = r.boundingBox(), a = this.findContainerClientCoords(), i = t11.full ? Math.ceil(n.w) : a[2], s = t11.full ? Math.ceil(n.h) : a[3], o = ne(t11.maxWidth) || ne(t11.maxHeight), u = this.getPixelRatio(), l = 1;
  if (t11.scale !== void 0)
    i *= t11.scale, s *= t11.scale, l = t11.scale;
  else if (o) {
    var f = 1 / 0, c = 1 / 0;
    ne(t11.maxWidth) && (f = l * t11.maxWidth / i), ne(t11.maxHeight) && (c = l * t11.maxHeight / s), l = Math.min(f, c), i *= l, s *= l;
  }
  o || (i *= u, s *= u, l *= u);
  var v = document.createElement("canvas");
  v.width = i, v.height = s, v.style.width = i + "px", v.style.height = s + "px";
  var h = v.getContext("2d");
  if (i > 0 && s > 0) {
    h.clearRect(0, 0, i, s), h.globalCompositeOperation = "source-over";
    var d = this.getCachedZSortedEles();
    if (t11.full)
      h.translate(-n.x1 * l, -n.y1 * l), h.scale(l, l), this.drawElements(h, d), h.scale(1 / l, 1 / l), h.translate(n.x1 * l, n.y1 * l);
    else {
      var g = e.pan(), b = {
        x: g.x * l,
        y: g.y * l
      };
      l *= e.zoom(), h.translate(b.x, b.y), h.scale(l, l), this.drawElements(h, d), h.scale(1 / l, 1 / l), h.translate(-b.x, -b.y);
    }
    t11.bg && (h.globalCompositeOperation = "destination-over", h.fillStyle = t11.bg, h.rect(0, 0, i, s), h.fill());
  }
  return v;
};
function KE(t11, e) {
  for (var r = atob(t11), n = new ArrayBuffer(r.length), a = new Uint8Array(n), i = 0; i < r.length; i++)
    a[i] = r.charCodeAt(i);
  return new Blob([n], {
    type: e
  });
}
function pu(t11) {
  var e = t11.indexOf(",");
  return t11.substr(e + 1);
}
function Af(t11, e, r) {
  var n = function() {
    return e.toDataURL(r, t11.quality);
  };
  switch (t11.output) {
    case "blob-promise":
      return new jr(function(a, i) {
        try {
          e.toBlob(function(s) {
            s != null ? a(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, r, t11.quality);
        } catch (s) {
          i(s);
        }
      });
    case "blob":
      return KE(pu(n()), r);
    case "base64":
      return pu(n());
    case "base64uri":
    default:
      return n();
  }
}
jn.png = function(t11) {
  return Af(t11, this.bufferCanvasImage(t11), "image/png");
};
jn.jpg = function(t11) {
  return Af(t11, this.bufferCanvasImage(t11), "image/jpeg");
};
var Nf = {};
Nf.nodeShapeImpl = function(t11, e, r, n, a, i, s) {
  switch (t11) {
    case "ellipse":
      return this.drawEllipsePath(e, r, n, a, i);
    case "polygon":
      return this.drawPolygonPath(e, r, n, a, i, s);
    case "round-polygon":
      return this.drawRoundPolygonPath(e, r, n, a, i, s);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(e, r, n, a, i);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(e, r, n, a, i);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(e, r, n, a, i);
    case "barrel":
      return this.drawBarrelPath(e, r, n, a, i);
  }
};
var ZE = Mf, De = Mf.prototype;
De.CANVAS_LAYERS = 3;
De.SELECT_BOX = 0;
De.DRAG = 1;
De.NODE = 2;
De.BUFFER_COUNT = 3;
De.TEXTURE_BUFFER = 0;
De.MOTIONBLUR_BUFFER_NODE = 1;
De.MOTIONBLUR_BUFFER_DRAG = 2;
function Mf(t11) {
  var e = this;
  e.data = {
    canvases: new Array(De.CANVAS_LAYERS),
    contexts: new Array(De.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(De.CANVAS_LAYERS),
    bufferCanvases: new Array(De.BUFFER_COUNT),
    bufferContexts: new Array(De.CANVAS_LAYERS)
  };
  var r = "-webkit-tap-highlight-color", n = "rgba(0,0,0,0)";
  e.data.canvasContainer = document.createElement("div");
  var a = e.data.canvasContainer.style;
  e.data.canvasContainer.style[r] = n, a.position = "relative", a.zIndex = "0", a.overflow = "hidden";
  var i = t11.cy.container();
  i.appendChild(e.data.canvasContainer), i.style[r] = n;
  var s = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  Im() && (s["-ms-touch-action"] = "none", s["touch-action"] = "none");
  for (var o = 0; o < De.CANVAS_LAYERS; o++) {
    var u = e.data.canvases[o] = document.createElement("canvas");
    e.data.contexts[o] = u.getContext("2d"), Object.keys(s).forEach(function(Y) {
      u.style[Y] = s[Y];
    }), u.style.position = "absolute", u.setAttribute("data-id", "layer" + o), u.style.zIndex = String(De.CANVAS_LAYERS - o), e.data.canvasContainer.appendChild(u), e.data.canvasNeedsRedraw[o] = false;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[De.NODE].setAttribute("data-id", "layer" + De.NODE + "-node"), e.data.canvases[De.SELECT_BOX].setAttribute("data-id", "layer" + De.SELECT_BOX + "-selectbox"), e.data.canvases[De.DRAG].setAttribute("data-id", "layer" + De.DRAG + "-drag");
  for (var o = 0; o < De.BUFFER_COUNT; o++)
    e.data.bufferCanvases[o] = document.createElement("canvas"), e.data.bufferContexts[o] = e.data.bufferCanvases[o].getContext("2d"), e.data.bufferCanvases[o].style.position = "absolute", e.data.bufferCanvases[o].setAttribute("data-id", "buffer" + o), e.data.bufferCanvases[o].style.zIndex = String(-o - 1), e.data.bufferCanvases[o].style.visibility = "hidden";
  e.pathsEnabled = true;
  var l = ht(), f = function($) {
    return {
      x: ($.x1 + $.x2) / 2,
      y: ($.y1 + $.y2) / 2
    };
  }, c = function($) {
    return {
      x: -$.w / 2,
      y: -$.h / 2
    };
  }, v = function($) {
    var X = $[0]._private, K = X.oldBackgroundTimestamp === X.backgroundTimestamp;
    return !K;
  }, h = function($) {
    return $[0]._private.nodeKey;
  }, d = function($) {
    return $[0]._private.labelStyleKey;
  }, g = function($) {
    return $[0]._private.sourceLabelStyleKey;
  }, b = function($) {
    return $[0]._private.targetLabelStyleKey;
  }, p = function($, X, K, Z, te) {
    return e.drawElement($, X, K, false, false, te);
  }, m = function($, X, K, Z, te) {
    return e.drawElementText($, X, K, Z, "main", te);
  }, y = function($, X, K, Z, te) {
    return e.drawElementText($, X, K, Z, "source", te);
  }, E = function($, X, K, Z, te) {
    return e.drawElementText($, X, K, Z, "target", te);
  }, C = function($) {
    return $.boundingBox(), $[0]._private.bodyBounds;
  }, D = function($) {
    return $.boundingBox(), $[0]._private.labelBounds.main || l;
  }, w = function($) {
    return $.boundingBox(), $[0]._private.labelBounds.source || l;
  }, T = function($) {
    return $.boundingBox(), $[0]._private.labelBounds.target || l;
  }, x = function($, X) {
    return X;
  }, S = function($) {
    return f(C($));
  }, L = function($, X, K) {
    var Z = $ ? $ + "-" : "";
    return {
      x: X.x + K.pstyle(Z + "text-margin-x").pfValue,
      y: X.y + K.pstyle(Z + "text-margin-y").pfValue
    };
  }, A = function($, X, K) {
    var Z = $[0]._private.rscratch;
    return {
      x: Z[X],
      y: Z[K]
    };
  }, O = function($) {
    return L("", A($, "labelX", "labelY"), $);
  }, N = function($) {
    return L("source", A($, "sourceLabelX", "sourceLabelY"), $);
  }, R = function($) {
    return L("target", A($, "targetLabelX", "targetLabelY"), $);
  }, I = function($) {
    return c(C($));
  }, k = function($) {
    return c(w($));
  }, P = function($) {
    return c(T($));
  }, B = function($) {
    var X = D($), K = c(D($));
    if ($.isNode()) {
      switch ($.pstyle("text-halign").value) {
        case "left":
          K.x = -X.w;
          break;
        case "right":
          K.x = 0;
          break;
      }
      switch ($.pstyle("text-valign").value) {
        case "top":
          K.y = -X.h;
          break;
        case "bottom":
          K.y = 0;
          break;
      }
    }
    return K;
  }, _ = e.data.eleTxrCache = new bn(e, {
    getKey: h,
    doesEleInvalidateKey: v,
    drawElement: p,
    getBoundingBox: C,
    getRotationPoint: S,
    getRotationOffset: I,
    allowEdgeTxrCaching: false,
    allowParentTxrCaching: false
  }), F = e.data.lblTxrCache = new bn(e, {
    getKey: d,
    drawElement: m,
    getBoundingBox: D,
    getRotationPoint: O,
    getRotationOffset: B,
    isVisible: x
  }), G = e.data.slbTxrCache = new bn(e, {
    getKey: g,
    drawElement: y,
    getBoundingBox: w,
    getRotationPoint: N,
    getRotationOffset: k,
    isVisible: x
  }), z = e.data.tlbTxrCache = new bn(e, {
    getKey: b,
    drawElement: E,
    getBoundingBox: T,
    getRotationPoint: R,
    getRotationOffset: P,
    isVisible: x
  }), V = e.data.lyrTxrCache = new Tf(e);
  e.onUpdateEleCalcs(function($, X) {
    _.invalidateElements(X), F.invalidateElements(X), G.invalidateElements(X), z.invalidateElements(X), V.invalidateElements(X);
    for (var K = 0; K < X.length; K++) {
      var Z = X[K]._private;
      Z.oldBackgroundTimestamp = Z.backgroundTimestamp;
    }
  });
  var U = function($) {
    for (var X = 0; X < $.length; X++)
      V.enqueueElementRefinement($[X].ele);
  };
  _.onDequeue(U), F.onDequeue(U), G.onDequeue(U), z.onDequeue(U);
}
De.redrawHint = function(t11, e) {
  var r = this;
  switch (t11) {
    case "eles":
      r.data.canvasNeedsRedraw[De.NODE] = e;
      break;
    case "drag":
      r.data.canvasNeedsRedraw[De.DRAG] = e;
      break;
    case "select":
      r.data.canvasNeedsRedraw[De.SELECT_BOX] = e;
      break;
  }
};
var QE = typeof Path2D < "u";
De.path2dEnabled = function(t11) {
  if (t11 === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!t11;
};
De.usePaths = function() {
  return QE && this.pathsEnabled;
};
De.setImgSmoothing = function(t11, e) {
  t11.imageSmoothingEnabled != null ? t11.imageSmoothingEnabled = e : (t11.webkitImageSmoothingEnabled = e, t11.mozImageSmoothingEnabled = e, t11.msImageSmoothingEnabled = e);
};
De.getImgSmoothing = function(t11) {
  return t11.imageSmoothingEnabled != null ? t11.imageSmoothingEnabled : t11.webkitImageSmoothingEnabled || t11.mozImageSmoothingEnabled || t11.msImageSmoothingEnabled;
};
De.makeOffscreenCanvas = function(t11, e) {
  var r;
  return (typeof OffscreenCanvas > "u" ? "undefined" : Ve(OffscreenCanvas)) !== "undefined" ? r = new OffscreenCanvas(t11, e) : (r = document.createElement("canvas"), r.width = t11, r.height = e), r;
};
[Cf, Ft, Xt, Is, Sr, an, pt, lr, jn, Nf].forEach(function(t11) {
  he(De, t11);
});
var JE = [{
  name: "null",
  impl: df
}, {
  name: "base",
  impl: Ef
}, {
  name: "canvas",
  impl: ZE
}], jE = [{
  type: "layout",
  extensions: sE
}, {
  type: "renderer",
  extensions: JE
}], Of = {}, If = {};
function kf(t11, e, r) {
  var n = r, a = function(T) {
    Ne("Can not register `" + e + "` for `" + t11 + "` since `" + T + "` already exists in the prototype and can not be overridden");
  };
  if (t11 === "core") {
    if ($n.prototype[e])
      return a(e);
    $n.prototype[e] = r;
  } else if (t11 === "collection") {
    if (Ze.prototype[e])
      return a(e);
    Ze.prototype[e] = r;
  } else if (t11 === "layout") {
    for (var i = function(T) {
      this.options = T, r.call(this, T), Ce(this._private) || (this._private = {}), this._private.cy = T.cy, this._private.listeners = [], this.createEmitter();
    }, s = i.prototype = Object.create(r.prototype), o = [], u = 0; u < o.length; u++) {
      var l = o[u];
      s[l] = s[l] || function() {
        return this;
      };
    }
    s.start && !s.run ? s.run = function() {
      return this.start(), this;
    } : !s.start && s.run && (s.start = function() {
      return this.run(), this;
    });
    var f = r.prototype.stop;
    s.stop = function() {
      var w = this.options;
      if (w && w.animate) {
        var T = this.animations;
        if (T)
          for (var x = 0; x < T.length; x++)
            T[x].stop();
      }
      return f ? f.call(this) : this.emit("layoutstop"), this;
    }, s.destroy || (s.destroy = function() {
      return this;
    }), s.cy = function() {
      return this._private.cy;
    };
    var c = function(T) {
      return T._private.cy;
    }, v = {
      addEventFields: function(T, x) {
        x.layout = T, x.cy = c(T), x.target = T;
      },
      bubble: function() {
        return true;
      },
      parent: function(T) {
        return c(T);
      }
    };
    he(s, {
      createEmitter: function() {
        return this._private.emitter = new oi(v, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(T, x) {
        return this.emitter().on(T, x), this;
      },
      one: function(T, x) {
        return this.emitter().one(T, x), this;
      },
      once: function(T, x) {
        return this.emitter().one(T, x), this;
      },
      removeListener: function(T, x) {
        return this.emitter().removeListener(T, x), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(T, x) {
        return this.emitter().emit(T, x), this;
      }
    }), Ae.eventAliasesOn(s), n = i;
  } else if (t11 === "renderer" && e !== "null" && e !== "base") {
    var h = Rf("renderer", "base"), d = h.prototype, g = r, b = r.prototype, p = function() {
      h.apply(this, arguments), g.apply(this, arguments);
    }, m = p.prototype;
    for (var y in d) {
      var E = d[y], C = b[y] != null;
      if (C)
        return a(y);
      m[y] = E;
    }
    for (var D in b)
      m[D] = b[D];
    d.clientFunctions.forEach(function(w) {
      m[w] = m[w] || function() {
        Ge("Renderer does not implement `renderer." + w + "()` on its prototype");
      };
    }), n = p;
  } else if (t11 === "__proto__" || t11 === "constructor" || t11 === "prototype")
    return Ge(t11 + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return gl({
    map: Of,
    keys: [t11, e],
    value: n
  });
}
function Rf(t11, e) {
  return pl({
    map: Of,
    keys: [t11, e]
  });
}
function ex(t11, e, r, n, a) {
  return gl({
    map: If,
    keys: [t11, e, r, n],
    value: a
  });
}
function tx(t11, e, r, n) {
  return pl({
    map: If,
    keys: [t11, e, r, n]
  });
}
var ji = function() {
  if (arguments.length === 2)
    return Rf.apply(null, arguments);
  if (arguments.length === 3)
    return kf.apply(null, arguments);
  if (arguments.length === 4)
    return tx.apply(null, arguments);
  if (arguments.length === 5)
    return ex.apply(null, arguments);
  Ge("Invalid extension access syntax");
};
$n.prototype.extension = ji;
jE.forEach(function(t11) {
  t11.extensions.forEach(function(e) {
    kf(t11.type, e.name, e.impl);
  });
});
var Pf = function t10() {
  if (!(this instanceof t10))
    return new t10();
  this.length = 0;
}, xr = Pf.prototype;
xr.instanceString = function() {
  return "stylesheet";
};
xr.selector = function(t11) {
  var e = this.length++;
  return this[e] = {
    selector: t11,
    properties: []
  }, this;
};
xr.css = function(t11, e) {
  var r = this.length - 1;
  if (le(t11))
    this[r].properties.push({
      name: t11,
      value: e
    });
  else if (Ce(t11))
    for (var n = t11, a = Object.keys(n), i = 0; i < a.length; i++) {
      var s = a[i], o = n[s];
      if (o != null) {
        var u = tt.properties[s] || tt.properties[ri(s)];
        if (u != null) {
          var l = u.name, f = o;
          this[r].properties.push({
            name: l,
            value: f
          });
        }
      }
    }
  return this;
};
xr.style = xr.css;
xr.generateStyle = function(t11) {
  var e = new tt(t11);
  return this.appendToStyle(e);
};
xr.appendToStyle = function(t11) {
  for (var e = 0; e < this.length; e++) {
    var r = this[e], n = r.selector, a = r.properties;
    t11.selector(n);
    for (var i = 0; i < a.length; i++) {
      var s = a[i];
      t11.css(s.name, s.value);
    }
  }
  return t11;
};
var rx = "3.23.0", Tr = function(e) {
  if (e === void 0 && (e = {}), Ce(e))
    return new $n(e);
  if (le(e))
    return ji.apply(ji, arguments);
};
Tr.use = function(t11) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(Tr), t11.apply(null, e), this;
};
Tr.warnings = function(t11) {
  return xl(t11);
};
Tr.version = rx;
Tr.stylesheet = Tr.Stylesheet = Pf;
var Bf = Tr, Ff = { exports: {} }, Ii = { exports: {} }, ki = { exports: {} }, yu;
function nx() {
  return yu || (yu = 1, function(t11, e) {
    (function(n, a) {
      t11.exports = a();
    })(jt, function() {
      return function(r) {
        var n = {};
        function a(i) {
          if (n[i])
            return n[i].exports;
          var s = n[i] = {
            i,
            l: false,
            exports: {}
          };
          return r[i].call(s.exports, s, s.exports, a), s.l = true, s.exports;
        }
        return a.m = r, a.c = n, a.i = function(i) {
          return i;
        }, a.d = function(i, s, o) {
          a.o(i, s) || Object.defineProperty(i, s, {
            configurable: false,
            enumerable: true,
            get: o
          });
        }, a.n = function(i) {
          var s = i && i.__esModule ? function() {
            return i.default;
          } : function() {
            return i;
          };
          return a.d(s, "a", s), s;
        }, a.o = function(i, s) {
          return Object.prototype.hasOwnProperty.call(i, s);
        }, a.p = "", a(a.s = 26);
      }([
        function(r, n, a) {
          function i() {
          }
          i.QUALITY = 1, i.DEFAULT_CREATE_BENDS_AS_NEEDED = false, i.DEFAULT_INCREMENTAL = false, i.DEFAULT_ANIMATION_ON_LAYOUT = true, i.DEFAULT_ANIMATION_DURING_LAYOUT = false, i.DEFAULT_ANIMATION_PERIOD = 50, i.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, i.DEFAULT_GRAPH_MARGIN = 15, i.NODE_DIMENSIONS_INCLUDE_LABELS = false, i.SIMPLE_NODE_SIZE = 40, i.SIMPLE_NODE_HALF_SIZE = i.SIMPLE_NODE_SIZE / 2, i.EMPTY_COMPOUND_NODE_SIZE = 40, i.MIN_EDGE_LENGTH = 1, i.WORLD_BOUNDARY = 1e6, i.INITIAL_WORLD_BOUNDARY = i.WORLD_BOUNDARY / 1e3, i.WORLD_CENTER_X = 1200, i.WORLD_CENTER_Y = 900, r.exports = i;
        },
        function(r, n, a) {
          var i = a(2), s = a(8), o = a(9);
          function u(f, c, v) {
            i.call(this, v), this.isOverlapingSourceAndTarget = false, this.vGraphObject = v, this.bendpoints = [], this.source = f, this.target = c;
          }
          u.prototype = Object.create(i.prototype);
          for (var l in i)
            u[l] = i[l];
          u.prototype.getSource = function() {
            return this.source;
          }, u.prototype.getTarget = function() {
            return this.target;
          }, u.prototype.isInterGraph = function() {
            return this.isInterGraph;
          }, u.prototype.getLength = function() {
            return this.length;
          }, u.prototype.isOverlapingSourceAndTarget = function() {
            return this.isOverlapingSourceAndTarget;
          }, u.prototype.getBendpoints = function() {
            return this.bendpoints;
          }, u.prototype.getLca = function() {
            return this.lca;
          }, u.prototype.getSourceInLca = function() {
            return this.sourceInLca;
          }, u.prototype.getTargetInLca = function() {
            return this.targetInLca;
          }, u.prototype.getOtherEnd = function(f) {
            if (this.source === f)
              return this.target;
            if (this.target === f)
              return this.source;
            throw "Node is not incident with this edge";
          }, u.prototype.getOtherEndInGraph = function(f, c) {
            for (var v = this.getOtherEnd(f), h = c.getGraphManager().getRoot(); ; ) {
              if (v.getOwner() == c)
                return v;
              if (v.getOwner() == h)
                break;
              v = v.getOwner().getParent();
            }
            return null;
          }, u.prototype.updateLength = function() {
            var f = new Array(4);
            this.isOverlapingSourceAndTarget = s.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
          }, u.prototype.updateLengthSimple = function() {
            this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = o.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = o.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
          }, r.exports = u;
        },
        function(r, n, a) {
          function i(s) {
            this.vGraphObject = s;
          }
          r.exports = i;
        },
        function(r, n, a) {
          var i = a(2), s = a(10), o = a(13), u = a(0), l = a(16), f = a(4);
          function c(h, d, g, b) {
            g == null && b == null && (b = d), i.call(this, b), h.graphManager != null && (h = h.graphManager), this.estimatedSize = s.MIN_VALUE, this.inclusionTreeDepth = s.MAX_VALUE, this.vGraphObject = b, this.edges = [], this.graphManager = h, g != null && d != null ? this.rect = new o(d.x, d.y, g.width, g.height) : this.rect = new o();
          }
          c.prototype = Object.create(i.prototype);
          for (var v in i)
            c[v] = i[v];
          c.prototype.getEdges = function() {
            return this.edges;
          }, c.prototype.getChild = function() {
            return this.child;
          }, c.prototype.getOwner = function() {
            return this.owner;
          }, c.prototype.getWidth = function() {
            return this.rect.width;
          }, c.prototype.setWidth = function(h) {
            this.rect.width = h;
          }, c.prototype.getHeight = function() {
            return this.rect.height;
          }, c.prototype.setHeight = function(h) {
            this.rect.height = h;
          }, c.prototype.getCenterX = function() {
            return this.rect.x + this.rect.width / 2;
          }, c.prototype.getCenterY = function() {
            return this.rect.y + this.rect.height / 2;
          }, c.prototype.getCenter = function() {
            return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
          }, c.prototype.getLocation = function() {
            return new f(this.rect.x, this.rect.y);
          }, c.prototype.getRect = function() {
            return this.rect;
          }, c.prototype.getDiagonal = function() {
            return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
          }, c.prototype.getHalfTheDiagonal = function() {
            return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
          }, c.prototype.setRect = function(h, d) {
            this.rect.x = h.x, this.rect.y = h.y, this.rect.width = d.width, this.rect.height = d.height;
          }, c.prototype.setCenter = function(h, d) {
            this.rect.x = h - this.rect.width / 2, this.rect.y = d - this.rect.height / 2;
          }, c.prototype.setLocation = function(h, d) {
            this.rect.x = h, this.rect.y = d;
          }, c.prototype.moveBy = function(h, d) {
            this.rect.x += h, this.rect.y += d;
          }, c.prototype.getEdgeListToNode = function(h) {
            var d = [], g = this;
            return g.edges.forEach(function(b) {
              if (b.target == h) {
                if (b.source != g)
                  throw "Incorrect edge source!";
                d.push(b);
              }
            }), d;
          }, c.prototype.getEdgesBetween = function(h) {
            var d = [], g = this;
            return g.edges.forEach(function(b) {
              if (!(b.source == g || b.target == g))
                throw "Incorrect edge source and/or target";
              (b.target == h || b.source == h) && d.push(b);
            }), d;
          }, c.prototype.getNeighborsList = function() {
            var h = /* @__PURE__ */ new Set(), d = this;
            return d.edges.forEach(function(g) {
              if (g.source == d)
                h.add(g.target);
              else {
                if (g.target != d)
                  throw "Incorrect incidency!";
                h.add(g.source);
              }
            }), h;
          }, c.prototype.withChildren = function() {
            var h = /* @__PURE__ */ new Set(), d, g;
            if (h.add(this), this.child != null)
              for (var b = this.child.getNodes(), p = 0; p < b.length; p++)
                d = b[p], g = d.withChildren(), g.forEach(function(m) {
                  h.add(m);
                });
            return h;
          }, c.prototype.getNoOfChildren = function() {
            var h = 0, d;
            if (this.child == null)
              h = 1;
            else
              for (var g = this.child.getNodes(), b = 0; b < g.length; b++)
                d = g[b], h += d.getNoOfChildren();
            return h == 0 && (h = 1), h;
          }, c.prototype.getEstimatedSize = function() {
            if (this.estimatedSize == s.MIN_VALUE)
              throw "assert failed";
            return this.estimatedSize;
          }, c.prototype.calcEstimatedSize = function() {
            return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
          }, c.prototype.scatter = function() {
            var h, d, g = -u.INITIAL_WORLD_BOUNDARY, b = u.INITIAL_WORLD_BOUNDARY;
            h = u.WORLD_CENTER_X + l.nextDouble() * (b - g) + g;
            var p = -u.INITIAL_WORLD_BOUNDARY, m = u.INITIAL_WORLD_BOUNDARY;
            d = u.WORLD_CENTER_Y + l.nextDouble() * (m - p) + p, this.rect.x = h, this.rect.y = d;
          }, c.prototype.updateBounds = function() {
            if (this.getChild() == null)
              throw "assert failed";
            if (this.getChild().getNodes().length != 0) {
              var h = this.getChild();
              if (h.updateBounds(true), this.rect.x = h.getLeft(), this.rect.y = h.getTop(), this.setWidth(h.getRight() - h.getLeft()), this.setHeight(h.getBottom() - h.getTop()), u.NODE_DIMENSIONS_INCLUDE_LABELS) {
                var d = h.getRight() - h.getLeft(), g = h.getBottom() - h.getTop();
                this.labelWidth > d && (this.rect.x -= (this.labelWidth - d) / 2, this.setWidth(this.labelWidth)), this.labelHeight > g && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - g) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - g), this.setHeight(this.labelHeight));
              }
            }
          }, c.prototype.getInclusionTreeDepth = function() {
            if (this.inclusionTreeDepth == s.MAX_VALUE)
              throw "assert failed";
            return this.inclusionTreeDepth;
          }, c.prototype.transform = function(h) {
            var d = this.rect.x;
            d > u.WORLD_BOUNDARY ? d = u.WORLD_BOUNDARY : d < -u.WORLD_BOUNDARY && (d = -u.WORLD_BOUNDARY);
            var g = this.rect.y;
            g > u.WORLD_BOUNDARY ? g = u.WORLD_BOUNDARY : g < -u.WORLD_BOUNDARY && (g = -u.WORLD_BOUNDARY);
            var b = new f(d, g), p = h.inverseTransformPoint(b);
            this.setLocation(p.x, p.y);
          }, c.prototype.getLeft = function() {
            return this.rect.x;
          }, c.prototype.getRight = function() {
            return this.rect.x + this.rect.width;
          }, c.prototype.getTop = function() {
            return this.rect.y;
          }, c.prototype.getBottom = function() {
            return this.rect.y + this.rect.height;
          }, c.prototype.getParent = function() {
            return this.owner == null ? null : this.owner.getParent();
          }, r.exports = c;
        },
        function(r, n, a) {
          function i(s, o) {
            s == null && o == null ? (this.x = 0, this.y = 0) : (this.x = s, this.y = o);
          }
          i.prototype.getX = function() {
            return this.x;
          }, i.prototype.getY = function() {
            return this.y;
          }, i.prototype.setX = function(s) {
            this.x = s;
          }, i.prototype.setY = function(s) {
            this.y = s;
          }, i.prototype.getDifference = function(s) {
            return new DimensionD(this.x - s.x, this.y - s.y);
          }, i.prototype.getCopy = function() {
            return new i(this.x, this.y);
          }, i.prototype.translate = function(s) {
            return this.x += s.width, this.y += s.height, this;
          }, r.exports = i;
        },
        function(r, n, a) {
          var i = a(2), s = a(10), o = a(0), u = a(6), l = a(3), f = a(1), c = a(13), v = a(12), h = a(11);
          function d(b, p, m) {
            i.call(this, m), this.estimatedSize = s.MIN_VALUE, this.margin = o.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = b, p != null && p instanceof u ? this.graphManager = p : p != null && p instanceof Layout && (this.graphManager = p.graphManager);
          }
          d.prototype = Object.create(i.prototype);
          for (var g in i)
            d[g] = i[g];
          d.prototype.getNodes = function() {
            return this.nodes;
          }, d.prototype.getEdges = function() {
            return this.edges;
          }, d.prototype.getGraphManager = function() {
            return this.graphManager;
          }, d.prototype.getParent = function() {
            return this.parent;
          }, d.prototype.getLeft = function() {
            return this.left;
          }, d.prototype.getRight = function() {
            return this.right;
          }, d.prototype.getTop = function() {
            return this.top;
          }, d.prototype.getBottom = function() {
            return this.bottom;
          }, d.prototype.isConnected = function() {
            return this.isConnected;
          }, d.prototype.add = function(b, p, m) {
            if (p == null && m == null) {
              var y = b;
              if (this.graphManager == null)
                throw "Graph has no graph mgr!";
              if (this.getNodes().indexOf(y) > -1)
                throw "Node already in graph!";
              return y.owner = this, this.getNodes().push(y), y;
            } else {
              var E = b;
              if (!(this.getNodes().indexOf(p) > -1 && this.getNodes().indexOf(m) > -1))
                throw "Source or target not in graph!";
              if (!(p.owner == m.owner && p.owner == this))
                throw "Both owners must be this graph!";
              return p.owner != m.owner ? null : (E.source = p, E.target = m, E.isInterGraph = false, this.getEdges().push(E), p.edges.push(E), m != p && m.edges.push(E), E);
            }
          }, d.prototype.remove = function(b) {
            var p = b;
            if (b instanceof l) {
              if (p == null)
                throw "Node is null!";
              if (!(p.owner != null && p.owner == this))
                throw "Owner graph is invalid!";
              if (this.graphManager == null)
                throw "Owner graph manager is invalid!";
              for (var m = p.edges.slice(), y, E = m.length, C = 0; C < E; C++)
                y = m[C], y.isInterGraph ? this.graphManager.remove(y) : y.source.owner.remove(y);
              var D = this.nodes.indexOf(p);
              if (D == -1)
                throw "Node not in owner node list!";
              this.nodes.splice(D, 1);
            } else if (b instanceof f) {
              var y = b;
              if (y == null)
                throw "Edge is null!";
              if (!(y.source != null && y.target != null))
                throw "Source and/or target is null!";
              if (!(y.source.owner != null && y.target.owner != null && y.source.owner == this && y.target.owner == this))
                throw "Source and/or target owner is invalid!";
              var w = y.source.edges.indexOf(y), T = y.target.edges.indexOf(y);
              if (!(w > -1 && T > -1))
                throw "Source and/or target doesn't know this edge!";
              y.source.edges.splice(w, 1), y.target != y.source && y.target.edges.splice(T, 1);
              var D = y.source.owner.getEdges().indexOf(y);
              if (D == -1)
                throw "Not in owner's edge list!";
              y.source.owner.getEdges().splice(D, 1);
            }
          }, d.prototype.updateLeftTop = function() {
            for (var b = s.MAX_VALUE, p = s.MAX_VALUE, m, y, E, C = this.getNodes(), D = C.length, w = 0; w < D; w++) {
              var T = C[w];
              m = T.getTop(), y = T.getLeft(), b > m && (b = m), p > y && (p = y);
            }
            return b == s.MAX_VALUE ? null : (C[0].getParent().paddingLeft != null ? E = C[0].getParent().paddingLeft : E = this.margin, this.left = p - E, this.top = b - E, new v(this.left, this.top));
          }, d.prototype.updateBounds = function(b) {
            for (var p = s.MAX_VALUE, m = -s.MAX_VALUE, y = s.MAX_VALUE, E = -s.MAX_VALUE, C, D, w, T, x, S = this.nodes, L = S.length, A = 0; A < L; A++) {
              var O = S[A];
              b && O.child != null && O.updateBounds(), C = O.getLeft(), D = O.getRight(), w = O.getTop(), T = O.getBottom(), p > C && (p = C), m < D && (m = D), y > w && (y = w), E < T && (E = T);
            }
            var N = new c(p, y, m - p, E - y);
            p == s.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), S[0].getParent().paddingLeft != null ? x = S[0].getParent().paddingLeft : x = this.margin, this.left = N.x - x, this.right = N.x + N.width + x, this.top = N.y - x, this.bottom = N.y + N.height + x;
          }, d.calculateBounds = function(b) {
            for (var p = s.MAX_VALUE, m = -s.MAX_VALUE, y = s.MAX_VALUE, E = -s.MAX_VALUE, C, D, w, T, x = b.length, S = 0; S < x; S++) {
              var L = b[S];
              C = L.getLeft(), D = L.getRight(), w = L.getTop(), T = L.getBottom(), p > C && (p = C), m < D && (m = D), y > w && (y = w), E < T && (E = T);
            }
            var A = new c(p, y, m - p, E - y);
            return A;
          }, d.prototype.getInclusionTreeDepth = function() {
            return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
          }, d.prototype.getEstimatedSize = function() {
            if (this.estimatedSize == s.MIN_VALUE)
              throw "assert failed";
            return this.estimatedSize;
          }, d.prototype.calcEstimatedSize = function() {
            for (var b = 0, p = this.nodes, m = p.length, y = 0; y < m; y++) {
              var E = p[y];
              b += E.calcEstimatedSize();
            }
            return b == 0 ? this.estimatedSize = o.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = b / Math.sqrt(this.nodes.length), this.estimatedSize;
          }, d.prototype.updateConnected = function() {
            var b = this;
            if (this.nodes.length == 0) {
              this.isConnected = true;
              return;
            }
            var p = new h(), m = /* @__PURE__ */ new Set(), y = this.nodes[0], E, C, D = y.withChildren();
            for (D.forEach(function(A) {
              p.push(A), m.add(A);
            }); p.length !== 0; ) {
              y = p.shift(), E = y.getEdges();
              for (var w = E.length, T = 0; T < w; T++) {
                var x = E[T];
                if (C = x.getOtherEndInGraph(y, this), C != null && !m.has(C)) {
                  var S = C.withChildren();
                  S.forEach(function(A) {
                    p.push(A), m.add(A);
                  });
                }
              }
            }
            if (this.isConnected = false, m.size >= this.nodes.length) {
              var L = 0;
              m.forEach(function(A) {
                A.owner == b && L++;
              }), L == this.nodes.length && (this.isConnected = true);
            }
          }, r.exports = d;
        },
        function(r, n, a) {
          var i, s = a(1);
          function o(u) {
            i = a(5), this.layout = u, this.graphs = [], this.edges = [];
          }
          o.prototype.addRoot = function() {
            var u = this.layout.newGraph(), l = this.layout.newNode(null), f = this.add(u, l);
            return this.setRootGraph(f), this.rootGraph;
          }, o.prototype.add = function(u, l, f, c, v) {
            if (f == null && c == null && v == null) {
              if (u == null)
                throw "Graph is null!";
              if (l == null)
                throw "Parent node is null!";
              if (this.graphs.indexOf(u) > -1)
                throw "Graph already in this graph mgr!";
              if (this.graphs.push(u), u.parent != null)
                throw "Already has a parent!";
              if (l.child != null)
                throw "Already has a child!";
              return u.parent = l, l.child = u, u;
            } else {
              v = f, c = l, f = u;
              var h = c.getOwner(), d = v.getOwner();
              if (!(h != null && h.getGraphManager() == this))
                throw "Source not in this graph mgr!";
              if (!(d != null && d.getGraphManager() == this))
                throw "Target not in this graph mgr!";
              if (h == d)
                return f.isInterGraph = false, h.add(f, c, v);
              if (f.isInterGraph = true, f.source = c, f.target = v, this.edges.indexOf(f) > -1)
                throw "Edge already in inter-graph edge list!";
              if (this.edges.push(f), !(f.source != null && f.target != null))
                throw "Edge source and/or target is null!";
              if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                throw "Edge already in source and/or target incidency list!";
              return f.source.edges.push(f), f.target.edges.push(f), f;
            }
          }, o.prototype.remove = function(u) {
            if (u instanceof i) {
              var l = u;
              if (l.getGraphManager() != this)
                throw "Graph not in this graph mgr";
              if (!(l == this.rootGraph || l.parent != null && l.parent.graphManager == this))
                throw "Invalid parent node!";
              var f = [];
              f = f.concat(l.getEdges());
              for (var c, v = f.length, h = 0; h < v; h++)
                c = f[h], l.remove(c);
              var d = [];
              d = d.concat(l.getNodes());
              var g;
              v = d.length;
              for (var h = 0; h < v; h++)
                g = d[h], l.remove(g);
              l == this.rootGraph && this.setRootGraph(null);
              var b = this.graphs.indexOf(l);
              this.graphs.splice(b, 1), l.parent = null;
            } else if (u instanceof s) {
              if (c = u, c == null)
                throw "Edge is null!";
              if (!c.isInterGraph)
                throw "Not an inter-graph edge!";
              if (!(c.source != null && c.target != null))
                throw "Source and/or target is null!";
              if (!(c.source.edges.indexOf(c) != -1 && c.target.edges.indexOf(c) != -1))
                throw "Source and/or target doesn't know this edge!";
              var b = c.source.edges.indexOf(c);
              if (c.source.edges.splice(b, 1), b = c.target.edges.indexOf(c), c.target.edges.splice(b, 1), !(c.source.owner != null && c.source.owner.getGraphManager() != null))
                throw "Edge owner graph or owner graph manager is null!";
              if (c.source.owner.getGraphManager().edges.indexOf(c) == -1)
                throw "Not in owner graph manager's edge list!";
              var b = c.source.owner.getGraphManager().edges.indexOf(c);
              c.source.owner.getGraphManager().edges.splice(b, 1);
            }
          }, o.prototype.updateBounds = function() {
            this.rootGraph.updateBounds(true);
          }, o.prototype.getGraphs = function() {
            return this.graphs;
          }, o.prototype.getAllNodes = function() {
            if (this.allNodes == null) {
              for (var u = [], l = this.getGraphs(), f = l.length, c = 0; c < f; c++)
                u = u.concat(l[c].getNodes());
              this.allNodes = u;
            }
            return this.allNodes;
          }, o.prototype.resetAllNodes = function() {
            this.allNodes = null;
          }, o.prototype.resetAllEdges = function() {
            this.allEdges = null;
          }, o.prototype.resetAllNodesToApplyGravitation = function() {
            this.allNodesToApplyGravitation = null;
          }, o.prototype.getAllEdges = function() {
            if (this.allEdges == null) {
              var u = [], l = this.getGraphs();
              l.length;
              for (var f = 0; f < l.length; f++)
                u = u.concat(l[f].getEdges());
              u = u.concat(this.edges), this.allEdges = u;
            }
            return this.allEdges;
          }, o.prototype.getAllNodesToApplyGravitation = function() {
            return this.allNodesToApplyGravitation;
          }, o.prototype.setAllNodesToApplyGravitation = function(u) {
            if (this.allNodesToApplyGravitation != null)
              throw "assert failed";
            this.allNodesToApplyGravitation = u;
          }, o.prototype.getRoot = function() {
            return this.rootGraph;
          }, o.prototype.setRootGraph = function(u) {
            if (u.getGraphManager() != this)
              throw "Root not in this graph mgr!";
            this.rootGraph = u, u.parent == null && (u.parent = this.layout.newNode("Root node"));
          }, o.prototype.getLayout = function() {
            return this.layout;
          }, o.prototype.isOneAncestorOfOther = function(u, l) {
            if (!(u != null && l != null))
              throw "assert failed";
            if (u == l)
              return true;
            var f = u.getOwner(), c;
            do {
              if (c = f.getParent(), c == null)
                break;
              if (c == l)
                return true;
              if (f = c.getOwner(), f == null)
                break;
            } while (true);
            f = l.getOwner();
            do {
              if (c = f.getParent(), c == null)
                break;
              if (c == u)
                return true;
              if (f = c.getOwner(), f == null)
                break;
            } while (true);
            return false;
          }, o.prototype.calcLowestCommonAncestors = function() {
            for (var u, l, f, c, v, h = this.getAllEdges(), d = h.length, g = 0; g < d; g++) {
              if (u = h[g], l = u.source, f = u.target, u.lca = null, u.sourceInLca = l, u.targetInLca = f, l == f) {
                u.lca = l.getOwner();
                continue;
              }
              for (c = l.getOwner(); u.lca == null; ) {
                for (u.targetInLca = f, v = f.getOwner(); u.lca == null; ) {
                  if (v == c) {
                    u.lca = v;
                    break;
                  }
                  if (v == this.rootGraph)
                    break;
                  if (u.lca != null)
                    throw "assert failed";
                  u.targetInLca = v.getParent(), v = u.targetInLca.getOwner();
                }
                if (c == this.rootGraph)
                  break;
                u.lca == null && (u.sourceInLca = c.getParent(), c = u.sourceInLca.getOwner());
              }
              if (u.lca == null)
                throw "assert failed";
            }
          }, o.prototype.calcLowestCommonAncestor = function(u, l) {
            if (u == l)
              return u.getOwner();
            var f = u.getOwner();
            do {
              if (f == null)
                break;
              var c = l.getOwner();
              do {
                if (c == null)
                  break;
                if (c == f)
                  return c;
                c = c.getParent().getOwner();
              } while (true);
              f = f.getParent().getOwner();
            } while (true);
            return f;
          }, o.prototype.calcInclusionTreeDepths = function(u, l) {
            u == null && l == null && (u = this.rootGraph, l = 1);
            for (var f, c = u.getNodes(), v = c.length, h = 0; h < v; h++)
              f = c[h], f.inclusionTreeDepth = l, f.child != null && this.calcInclusionTreeDepths(f.child, l + 1);
          }, o.prototype.includesInvalidEdge = function() {
            for (var u, l = this.edges.length, f = 0; f < l; f++)
              if (u = this.edges[f], this.isOneAncestorOfOther(u.source, u.target))
                return true;
            return false;
          }, r.exports = o;
        },
        function(r, n, a) {
          var i = a(0);
          function s() {
          }
          for (var o in i)
            s[o] = i[o];
          s.MAX_ITERATIONS = 2500, s.DEFAULT_EDGE_LENGTH = 50, s.DEFAULT_SPRING_STRENGTH = 0.45, s.DEFAULT_REPULSION_STRENGTH = 4500, s.DEFAULT_GRAVITY_STRENGTH = 0.4, s.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, s.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, s.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, s.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, s.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, s.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, s.COOLING_ADAPTATION_FACTOR = 0.33, s.ADAPTATION_LOWER_NODE_LIMIT = 1e3, s.ADAPTATION_UPPER_NODE_LIMIT = 5e3, s.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, s.MAX_NODE_DISPLACEMENT = s.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, s.MIN_REPULSION_DIST = s.DEFAULT_EDGE_LENGTH / 10, s.CONVERGENCE_CHECK_PERIOD = 100, s.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, s.MIN_EDGE_LENGTH = 1, s.GRID_CALCULATION_CHECK_PERIOD = 10, r.exports = s;
        },
        function(r, n, a) {
          var i = a(12);
          function s() {
          }
          s.calcSeparationAmount = function(o, u, l, f) {
            if (!o.intersects(u))
              throw "assert failed";
            var c = new Array(2);
            this.decideDirectionsForOverlappingNodes(o, u, c), l[0] = Math.min(o.getRight(), u.getRight()) - Math.max(o.x, u.x), l[1] = Math.min(o.getBottom(), u.getBottom()) - Math.max(o.y, u.y), o.getX() <= u.getX() && o.getRight() >= u.getRight() ? l[0] += Math.min(u.getX() - o.getX(), o.getRight() - u.getRight()) : u.getX() <= o.getX() && u.getRight() >= o.getRight() && (l[0] += Math.min(o.getX() - u.getX(), u.getRight() - o.getRight())), o.getY() <= u.getY() && o.getBottom() >= u.getBottom() ? l[1] += Math.min(u.getY() - o.getY(), o.getBottom() - u.getBottom()) : u.getY() <= o.getY() && u.getBottom() >= o.getBottom() && (l[1] += Math.min(o.getY() - u.getY(), u.getBottom() - o.getBottom()));
            var v = Math.abs((u.getCenterY() - o.getCenterY()) / (u.getCenterX() - o.getCenterX()));
            u.getCenterY() === o.getCenterY() && u.getCenterX() === o.getCenterX() && (v = 1);
            var h = v * l[0], d = l[1] / v;
            l[0] < d ? d = l[0] : h = l[1], l[0] = -1 * c[0] * (d / 2 + f), l[1] = -1 * c[1] * (h / 2 + f);
          }, s.decideDirectionsForOverlappingNodes = function(o, u, l) {
            o.getCenterX() < u.getCenterX() ? l[0] = -1 : l[0] = 1, o.getCenterY() < u.getCenterY() ? l[1] = -1 : l[1] = 1;
          }, s.getIntersection2 = function(o, u, l) {
            var f = o.getCenterX(), c = o.getCenterY(), v = u.getCenterX(), h = u.getCenterY();
            if (o.intersects(u))
              return l[0] = f, l[1] = c, l[2] = v, l[3] = h, true;
            var d = o.getX(), g = o.getY(), b = o.getRight(), p = o.getX(), m = o.getBottom(), y = o.getRight(), E = o.getWidthHalf(), C = o.getHeightHalf(), D = u.getX(), w = u.getY(), T = u.getRight(), x = u.getX(), S = u.getBottom(), L = u.getRight(), A = u.getWidthHalf(), O = u.getHeightHalf(), N = false, R = false;
            if (f === v) {
              if (c > h)
                return l[0] = f, l[1] = g, l[2] = v, l[3] = S, false;
              if (c < h)
                return l[0] = f, l[1] = m, l[2] = v, l[3] = w, false;
            } else if (c === h) {
              if (f > v)
                return l[0] = d, l[1] = c, l[2] = T, l[3] = h, false;
              if (f < v)
                return l[0] = b, l[1] = c, l[2] = D, l[3] = h, false;
            } else {
              var I = o.height / o.width, k = u.height / u.width, P = (h - c) / (v - f), B = void 0, _ = void 0, F = void 0, G = void 0, z = void 0, V = void 0;
              if (-I === P ? f > v ? (l[0] = p, l[1] = m, N = true) : (l[0] = b, l[1] = g, N = true) : I === P && (f > v ? (l[0] = d, l[1] = g, N = true) : (l[0] = y, l[1] = m, N = true)), -k === P ? v > f ? (l[2] = x, l[3] = S, R = true) : (l[2] = T, l[3] = w, R = true) : k === P && (v > f ? (l[2] = D, l[3] = w, R = true) : (l[2] = L, l[3] = S, R = true)), N && R)
                return false;
              if (f > v ? c > h ? (B = this.getCardinalDirection(I, P, 4), _ = this.getCardinalDirection(k, P, 2)) : (B = this.getCardinalDirection(-I, P, 3), _ = this.getCardinalDirection(-k, P, 1)) : c > h ? (B = this.getCardinalDirection(-I, P, 1), _ = this.getCardinalDirection(-k, P, 3)) : (B = this.getCardinalDirection(I, P, 2), _ = this.getCardinalDirection(k, P, 4)), !N)
                switch (B) {
                  case 1:
                    G = g, F = f + -C / P, l[0] = F, l[1] = G;
                    break;
                  case 2:
                    F = y, G = c + E * P, l[0] = F, l[1] = G;
                    break;
                  case 3:
                    G = m, F = f + C / P, l[0] = F, l[1] = G;
                    break;
                  case 4:
                    F = p, G = c + -E * P, l[0] = F, l[1] = G;
                    break;
                }
              if (!R)
                switch (_) {
                  case 1:
                    V = w, z = v + -O / P, l[2] = z, l[3] = V;
                    break;
                  case 2:
                    z = L, V = h + A * P, l[2] = z, l[3] = V;
                    break;
                  case 3:
                    V = S, z = v + O / P, l[2] = z, l[3] = V;
                    break;
                  case 4:
                    z = x, V = h + -A * P, l[2] = z, l[3] = V;
                    break;
                }
            }
            return false;
          }, s.getCardinalDirection = function(o, u, l) {
            return o > u ? l : 1 + l % 4;
          }, s.getIntersection = function(o, u, l, f) {
            if (f == null)
              return this.getIntersection2(o, u, l);
            var c = o.x, v = o.y, h = u.x, d = u.y, g = l.x, b = l.y, p = f.x, m = f.y, y = void 0, E = void 0, C = void 0, D = void 0, w = void 0, T = void 0, x = void 0, S = void 0, L = void 0;
            return C = d - v, w = c - h, x = h * v - c * d, D = m - b, T = g - p, S = p * b - g * m, L = C * T - D * w, L === 0 ? null : (y = (w * S - T * x) / L, E = (D * x - C * S) / L, new i(y, E));
          }, s.angleOfVector = function(o, u, l, f) {
            var c = void 0;
            return o !== l ? (c = Math.atan((f - u) / (l - o)), l < o ? c += Math.PI : f < u && (c += this.TWO_PI)) : f < u ? c = this.ONE_AND_HALF_PI : c = this.HALF_PI, c;
          }, s.doIntersect = function(o, u, l, f) {
            var c = o.x, v = o.y, h = u.x, d = u.y, g = l.x, b = l.y, p = f.x, m = f.y, y = (h - c) * (m - b) - (p - g) * (d - v);
            if (y === 0)
              return false;
            var E = ((m - b) * (p - c) + (g - p) * (m - v)) / y, C = ((v - d) * (p - c) + (h - c) * (m - v)) / y;
            return 0 < E && E < 1 && 0 < C && C < 1;
          }, s.HALF_PI = 0.5 * Math.PI, s.ONE_AND_HALF_PI = 1.5 * Math.PI, s.TWO_PI = 2 * Math.PI, s.THREE_PI = 3 * Math.PI, r.exports = s;
        },
        function(r, n, a) {
          function i() {
          }
          i.sign = function(s) {
            return s > 0 ? 1 : s < 0 ? -1 : 0;
          }, i.floor = function(s) {
            return s < 0 ? Math.ceil(s) : Math.floor(s);
          }, i.ceil = function(s) {
            return s < 0 ? Math.floor(s) : Math.ceil(s);
          }, r.exports = i;
        },
        function(r, n, a) {
          function i() {
          }
          i.MAX_VALUE = 2147483647, i.MIN_VALUE = -2147483648, r.exports = i;
        },
        function(r, n, a) {
          var i = function() {
            function c(v, h) {
              for (var d = 0; d < h.length; d++) {
                var g = h[d];
                g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(v, g.key, g);
              }
            }
            return function(v, h, d) {
              return h && c(v.prototype, h), d && c(v, d), v;
            };
          }();
          function s(c, v) {
            if (!(c instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          var o = function(v) {
            return { value: v, next: null, prev: null };
          }, u = function(v, h, d, g) {
            return v !== null ? v.next = h : g.head = h, d !== null ? d.prev = h : g.tail = h, h.prev = v, h.next = d, g.length++, h;
          }, l = function(v, h) {
            var d = v.prev, g = v.next;
            return d !== null ? d.next = g : h.head = g, g !== null ? g.prev = d : h.tail = d, v.prev = v.next = null, h.length--, v;
          }, f = function() {
            function c(v) {
              var h = this;
              s(this, c), this.length = 0, this.head = null, this.tail = null, v != null && v.forEach(function(d) {
                return h.push(d);
              });
            }
            return i(c, [{
              key: "size",
              value: function() {
                return this.length;
              }
            }, {
              key: "insertBefore",
              value: function(h, d) {
                return u(d.prev, o(h), d, this);
              }
            }, {
              key: "insertAfter",
              value: function(h, d) {
                return u(d, o(h), d.next, this);
              }
            }, {
              key: "insertNodeBefore",
              value: function(h, d) {
                return u(d.prev, h, d, this);
              }
            }, {
              key: "insertNodeAfter",
              value: function(h, d) {
                return u(d, h, d.next, this);
              }
            }, {
              key: "push",
              value: function(h) {
                return u(this.tail, o(h), null, this);
              }
            }, {
              key: "unshift",
              value: function(h) {
                return u(null, o(h), this.head, this);
              }
            }, {
              key: "remove",
              value: function(h) {
                return l(h, this);
              }
            }, {
              key: "pop",
              value: function() {
                return l(this.tail, this).value;
              }
            }, {
              key: "popNode",
              value: function() {
                return l(this.tail, this);
              }
            }, {
              key: "shift",
              value: function() {
                return l(this.head, this).value;
              }
            }, {
              key: "shiftNode",
              value: function() {
                return l(this.head, this);
              }
            }, {
              key: "get_object_at",
              value: function(h) {
                if (h <= this.length()) {
                  for (var d = 1, g = this.head; d < h; )
                    g = g.next, d++;
                  return g.value;
                }
              }
            }, {
              key: "set_object_at",
              value: function(h, d) {
                if (h <= this.length()) {
                  for (var g = 1, b = this.head; g < h; )
                    b = b.next, g++;
                  b.value = d;
                }
              }
            }]), c;
          }();
          r.exports = f;
        },
        function(r, n, a) {
          function i(s, o, u) {
            this.x = null, this.y = null, s == null && o == null && u == null ? (this.x = 0, this.y = 0) : typeof s == "number" && typeof o == "number" && u == null ? (this.x = s, this.y = o) : s.constructor.name == "Point" && o == null && u == null && (u = s, this.x = u.x, this.y = u.y);
          }
          i.prototype.getX = function() {
            return this.x;
          }, i.prototype.getY = function() {
            return this.y;
          }, i.prototype.getLocation = function() {
            return new i(this.x, this.y);
          }, i.prototype.setLocation = function(s, o, u) {
            s.constructor.name == "Point" && o == null && u == null ? (u = s, this.setLocation(u.x, u.y)) : typeof s == "number" && typeof o == "number" && u == null && (parseInt(s) == s && parseInt(o) == o ? this.move(s, o) : (this.x = Math.floor(s + 0.5), this.y = Math.floor(o + 0.5)));
          }, i.prototype.move = function(s, o) {
            this.x = s, this.y = o;
          }, i.prototype.translate = function(s, o) {
            this.x += s, this.y += o;
          }, i.prototype.equals = function(s) {
            if (s.constructor.name == "Point") {
              var o = s;
              return this.x == o.x && this.y == o.y;
            }
            return this == s;
          }, i.prototype.toString = function() {
            return new i().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
          }, r.exports = i;
        },
        function(r, n, a) {
          function i(s, o, u, l) {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0, s != null && o != null && u != null && l != null && (this.x = s, this.y = o, this.width = u, this.height = l);
          }
          i.prototype.getX = function() {
            return this.x;
          }, i.prototype.setX = function(s) {
            this.x = s;
          }, i.prototype.getY = function() {
            return this.y;
          }, i.prototype.setY = function(s) {
            this.y = s;
          }, i.prototype.getWidth = function() {
            return this.width;
          }, i.prototype.setWidth = function(s) {
            this.width = s;
          }, i.prototype.getHeight = function() {
            return this.height;
          }, i.prototype.setHeight = function(s) {
            this.height = s;
          }, i.prototype.getRight = function() {
            return this.x + this.width;
          }, i.prototype.getBottom = function() {
            return this.y + this.height;
          }, i.prototype.intersects = function(s) {
            return !(this.getRight() < s.x || this.getBottom() < s.y || s.getRight() < this.x || s.getBottom() < this.y);
          }, i.prototype.getCenterX = function() {
            return this.x + this.width / 2;
          }, i.prototype.getMinX = function() {
            return this.getX();
          }, i.prototype.getMaxX = function() {
            return this.getX() + this.width;
          }, i.prototype.getCenterY = function() {
            return this.y + this.height / 2;
          }, i.prototype.getMinY = function() {
            return this.getY();
          }, i.prototype.getMaxY = function() {
            return this.getY() + this.height;
          }, i.prototype.getWidthHalf = function() {
            return this.width / 2;
          }, i.prototype.getHeightHalf = function() {
            return this.height / 2;
          }, r.exports = i;
        },
        function(r, n, a) {
          var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
            return typeof o;
          } : function(o) {
            return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
          };
          function s() {
          }
          s.lastID = 0, s.createID = function(o) {
            return s.isPrimitive(o) ? o : (o.uniqueID != null || (o.uniqueID = s.getString(), s.lastID++), o.uniqueID);
          }, s.getString = function(o) {
            return o == null && (o = s.lastID), "Object#" + o;
          }, s.isPrimitive = function(o) {
            var u = typeof o > "u" ? "undefined" : i(o);
            return o == null || u != "object" && u != "function";
          }, r.exports = s;
        },
        function(r, n, a) {
          function i(g) {
            if (Array.isArray(g)) {
              for (var b = 0, p = Array(g.length); b < g.length; b++)
                p[b] = g[b];
              return p;
            } else
              return Array.from(g);
          }
          var s = a(0), o = a(6), u = a(3), l = a(1), f = a(5), c = a(4), v = a(17), h = a(27);
          function d(g) {
            h.call(this), this.layoutQuality = s.QUALITY, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = s.DEFAULT_INCREMENTAL, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new o(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, g != null && (this.isRemoteUse = g);
          }
          d.RANDOM_SEED = 1, d.prototype = Object.create(h.prototype), d.prototype.getGraphManager = function() {
            return this.graphManager;
          }, d.prototype.getAllNodes = function() {
            return this.graphManager.getAllNodes();
          }, d.prototype.getAllEdges = function() {
            return this.graphManager.getAllEdges();
          }, d.prototype.getAllNodesToApplyGravitation = function() {
            return this.graphManager.getAllNodesToApplyGravitation();
          }, d.prototype.newGraphManager = function() {
            var g = new o(this);
            return this.graphManager = g, g;
          }, d.prototype.newGraph = function(g) {
            return new f(null, this.graphManager, g);
          }, d.prototype.newNode = function(g) {
            return new u(this.graphManager, g);
          }, d.prototype.newEdge = function(g) {
            return new l(null, null, g);
          }, d.prototype.checkLayoutSuccess = function() {
            return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
          }, d.prototype.runLayout = function() {
            this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
            var g;
            return this.checkLayoutSuccess() ? g = false : g = this.layout(), s.ANIMATE === "during" ? false : (g && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, g);
          }, d.prototype.doPostLayout = function() {
            this.incremental || this.transform(), this.update();
          }, d.prototype.update2 = function() {
            if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
              for (var g = this.graphManager.getAllEdges(), b = 0; b < g.length; b++)
                g[b];
              for (var p = this.graphManager.getRoot().getNodes(), b = 0; b < p.length; b++)
                p[b];
              this.update(this.graphManager.getRoot());
            }
          }, d.prototype.update = function(g) {
            if (g == null)
              this.update2();
            else if (g instanceof u) {
              var b = g;
              if (b.getChild() != null)
                for (var p = b.getChild().getNodes(), m = 0; m < p.length; m++)
                  update(p[m]);
              if (b.vGraphObject != null) {
                var y = b.vGraphObject;
                y.update(b);
              }
            } else if (g instanceof l) {
              var E = g;
              if (E.vGraphObject != null) {
                var C = E.vGraphObject;
                C.update(E);
              }
            } else if (g instanceof f) {
              var D = g;
              if (D.vGraphObject != null) {
                var w = D.vGraphObject;
                w.update(D);
              }
            }
          }, d.prototype.initParameters = function() {
            this.isSubLayout || (this.layoutQuality = s.QUALITY, this.animationDuringLayout = s.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = s.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = s.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = s.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = s.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = s.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
          }, d.prototype.transform = function(g) {
            if (g == null)
              this.transform(new c(0, 0));
            else {
              var b = new v(), p = this.graphManager.getRoot().updateLeftTop();
              if (p != null) {
                b.setWorldOrgX(g.x), b.setWorldOrgY(g.y), b.setDeviceOrgX(p.x), b.setDeviceOrgY(p.y);
                for (var m = this.getAllNodes(), y, E = 0; E < m.length; E++)
                  y = m[E], y.transform(b);
              }
            }
          }, d.prototype.positionNodesRandomly = function(g) {
            if (g == null)
              this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
            else
              for (var b, p, m = g.getNodes(), y = 0; y < m.length; y++)
                b = m[y], p = b.getChild(), p == null || p.getNodes().length == 0 ? b.scatter() : (this.positionNodesRandomly(p), b.updateBounds());
          }, d.prototype.getFlatForest = function() {
            for (var g = [], b = true, p = this.graphManager.getRoot().getNodes(), m = true, y = 0; y < p.length; y++)
              p[y].getChild() != null && (m = false);
            if (!m)
              return g;
            var E = /* @__PURE__ */ new Set(), C = [], D = /* @__PURE__ */ new Map(), w = [];
            for (w = w.concat(p); w.length > 0 && b; ) {
              for (C.push(w[0]); C.length > 0 && b; ) {
                var T = C[0];
                C.splice(0, 1), E.add(T);
                for (var x = T.getEdges(), y = 0; y < x.length; y++) {
                  var S = x[y].getOtherEnd(T);
                  if (D.get(T) != S)
                    if (!E.has(S))
                      C.push(S), D.set(S, T);
                    else {
                      b = false;
                      break;
                    }
                }
              }
              if (!b)
                g = [];
              else {
                var L = [].concat(i(E));
                g.push(L);
                for (var y = 0; y < L.length; y++) {
                  var A = L[y], O = w.indexOf(A);
                  O > -1 && w.splice(O, 1);
                }
                E = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
              }
            }
            return g;
          }, d.prototype.createDummyNodesForBendpoints = function(g) {
            for (var b = [], p = g.source, m = this.graphManager.calcLowestCommonAncestor(g.source, g.target), y = 0; y < g.bendpoints.length; y++) {
              var E = this.newNode(null);
              E.setRect(new Point(0, 0), new Dimension(1, 1)), m.add(E);
              var C = this.newEdge(null);
              this.graphManager.add(C, p, E), b.add(E), p = E;
            }
            var C = this.newEdge(null);
            return this.graphManager.add(C, p, g.target), this.edgeToDummyNodes.set(g, b), g.isInterGraph() ? this.graphManager.remove(g) : m.remove(g), b;
          }, d.prototype.createBendpointsFromDummyNodes = function() {
            var g = [];
            g = g.concat(this.graphManager.getAllEdges()), g = [].concat(i(this.edgeToDummyNodes.keys())).concat(g);
            for (var b = 0; b < g.length; b++) {
              var p = g[b];
              if (p.bendpoints.length > 0) {
                for (var m = this.edgeToDummyNodes.get(p), y = 0; y < m.length; y++) {
                  var E = m[y], C = new c(E.getCenterX(), E.getCenterY()), D = p.bendpoints.get(y);
                  D.x = C.x, D.y = C.y, E.getOwner().remove(E);
                }
                this.graphManager.add(p, p.source, p.target);
              }
            }
          }, d.transform = function(g, b, p, m) {
            if (p != null && m != null) {
              var y = b;
              if (g <= 50) {
                var E = b / p;
                y -= (b - E) / 50 * (50 - g);
              } else {
                var C = b * m;
                y += (C - b) / 50 * (g - 50);
              }
              return y;
            } else {
              var D, w;
              return g <= 50 ? (D = 9 * b / 500, w = b / 10) : (D = 9 * b / 50, w = -8 * b), D * g + w;
            }
          }, d.findCenterOfTree = function(g) {
            var b = [];
            b = b.concat(g);
            var p = [], m = /* @__PURE__ */ new Map(), y = false, E = null;
            (b.length == 1 || b.length == 2) && (y = true, E = b[0]);
            for (var C = 0; C < b.length; C++) {
              var D = b[C], w = D.getNeighborsList().size;
              m.set(D, D.getNeighborsList().size), w == 1 && p.push(D);
            }
            var T = [];
            for (T = T.concat(p); !y; ) {
              var x = [];
              x = x.concat(T), T = [];
              for (var C = 0; C < b.length; C++) {
                var D = b[C], S = b.indexOf(D);
                S >= 0 && b.splice(S, 1);
                var L = D.getNeighborsList();
                L.forEach(function(N) {
                  if (p.indexOf(N) < 0) {
                    var R = m.get(N), I = R - 1;
                    I == 1 && T.push(N), m.set(N, I);
                  }
                });
              }
              p = p.concat(T), (b.length == 1 || b.length == 2) && (y = true, E = b[0]);
            }
            return E;
          }, d.prototype.setGraphManager = function(g) {
            this.graphManager = g;
          }, r.exports = d;
        },
        function(r, n, a) {
          function i() {
          }
          i.seed = 1, i.x = 0, i.nextDouble = function() {
            return i.x = Math.sin(i.seed++) * 1e4, i.x - Math.floor(i.x);
          }, r.exports = i;
        },
        function(r, n, a) {
          var i = a(4);
          function s(o, u) {
            this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
          }
          s.prototype.getWorldOrgX = function() {
            return this.lworldOrgX;
          }, s.prototype.setWorldOrgX = function(o) {
            this.lworldOrgX = o;
          }, s.prototype.getWorldOrgY = function() {
            return this.lworldOrgY;
          }, s.prototype.setWorldOrgY = function(o) {
            this.lworldOrgY = o;
          }, s.prototype.getWorldExtX = function() {
            return this.lworldExtX;
          }, s.prototype.setWorldExtX = function(o) {
            this.lworldExtX = o;
          }, s.prototype.getWorldExtY = function() {
            return this.lworldExtY;
          }, s.prototype.setWorldExtY = function(o) {
            this.lworldExtY = o;
          }, s.prototype.getDeviceOrgX = function() {
            return this.ldeviceOrgX;
          }, s.prototype.setDeviceOrgX = function(o) {
            this.ldeviceOrgX = o;
          }, s.prototype.getDeviceOrgY = function() {
            return this.ldeviceOrgY;
          }, s.prototype.setDeviceOrgY = function(o) {
            this.ldeviceOrgY = o;
          }, s.prototype.getDeviceExtX = function() {
            return this.ldeviceExtX;
          }, s.prototype.setDeviceExtX = function(o) {
            this.ldeviceExtX = o;
          }, s.prototype.getDeviceExtY = function() {
            return this.ldeviceExtY;
          }, s.prototype.setDeviceExtY = function(o) {
            this.ldeviceExtY = o;
          }, s.prototype.transformX = function(o) {
            var u = 0, l = this.lworldExtX;
            return l != 0 && (u = this.ldeviceOrgX + (o - this.lworldOrgX) * this.ldeviceExtX / l), u;
          }, s.prototype.transformY = function(o) {
            var u = 0, l = this.lworldExtY;
            return l != 0 && (u = this.ldeviceOrgY + (o - this.lworldOrgY) * this.ldeviceExtY / l), u;
          }, s.prototype.inverseTransformX = function(o) {
            var u = 0, l = this.ldeviceExtX;
            return l != 0 && (u = this.lworldOrgX + (o - this.ldeviceOrgX) * this.lworldExtX / l), u;
          }, s.prototype.inverseTransformY = function(o) {
            var u = 0, l = this.ldeviceExtY;
            return l != 0 && (u = this.lworldOrgY + (o - this.ldeviceOrgY) * this.lworldExtY / l), u;
          }, s.prototype.inverseTransformPoint = function(o) {
            var u = new i(this.inverseTransformX(o.x), this.inverseTransformY(o.y));
            return u;
          }, r.exports = s;
        },
        function(r, n, a) {
          function i(h) {
            if (Array.isArray(h)) {
              for (var d = 0, g = Array(h.length); d < h.length; d++)
                g[d] = h[d];
              return g;
            } else
              return Array.from(h);
          }
          var s = a(15), o = a(7), u = a(0), l = a(8), f = a(9);
          function c() {
            s.call(this), this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.springConstant = o.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = o.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = o.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = o.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * o.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = o.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = o.MAX_ITERATIONS;
          }
          c.prototype = Object.create(s.prototype);
          for (var v in s)
            c[v] = s[v];
          c.prototype.initParameters = function() {
            s.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = o.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
          }, c.prototype.calcIdealEdgeLengths = function() {
            for (var h, d, g, b, p, m, y = this.getGraphManager().getAllEdges(), E = 0; E < y.length; E++)
              h = y[E], h.idealLength = this.idealEdgeLength, h.isInterGraph && (g = h.getSource(), b = h.getTarget(), p = h.getSourceInLca().getEstimatedSize(), m = h.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (h.idealLength += p + m - 2 * u.SIMPLE_NODE_SIZE), d = h.getLca().getInclusionTreeDepth(), h.idealLength += o.DEFAULT_EDGE_LENGTH * o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (g.getInclusionTreeDepth() + b.getInclusionTreeDepth() - 2 * d));
          }, c.prototype.initSpringEmbedder = function() {
            var h = this.getAllNodes().length;
            this.incremental ? (h > o.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * o.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (h - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - o.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (h > o.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(o.COOLING_ADAPTATION_FACTOR, 1 - (h - o.ADAPTATION_LOWER_NODE_LIMIT) / (o.ADAPTATION_UPPER_NODE_LIMIT - o.ADAPTATION_LOWER_NODE_LIMIT) * (1 - o.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = o.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
          }, c.prototype.calcSpringForces = function() {
            for (var h = this.getAllEdges(), d, g = 0; g < h.length; g++)
              d = h[g], this.calcSpringForce(d, d.idealLength);
          }, c.prototype.calcRepulsionForces = function() {
            var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, g, b, p, m, y = this.getAllNodes(), E;
            if (this.useFRGridVariant)
              for (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && h && this.updateGrid(), E = /* @__PURE__ */ new Set(), g = 0; g < y.length; g++)
                p = y[g], this.calculateRepulsionForceOfANode(p, E, h, d), E.add(p);
            else
              for (g = 0; g < y.length; g++)
                for (p = y[g], b = g + 1; b < y.length; b++)
                  m = y[b], p.getOwner() == m.getOwner() && this.calcRepulsionForce(p, m);
          }, c.prototype.calcGravitationalForces = function() {
            for (var h, d = this.getAllNodesToApplyGravitation(), g = 0; g < d.length; g++)
              h = d[g], this.calcGravitationalForce(h);
          }, c.prototype.moveNodes = function() {
            for (var h = this.getAllNodes(), d, g = 0; g < h.length; g++)
              d = h[g], d.move();
          }, c.prototype.calcSpringForce = function(h, d) {
            var g = h.getSource(), b = h.getTarget(), p, m, y, E;
            if (this.uniformLeafNodeSizes && g.getChild() == null && b.getChild() == null)
              h.updateLengthSimple();
            else if (h.updateLength(), h.isOverlapingSourceAndTarget)
              return;
            p = h.getLength(), p != 0 && (m = this.springConstant * (p - d), y = m * (h.lengthX / p), E = m * (h.lengthY / p), g.springForceX += y, g.springForceY += E, b.springForceX -= y, b.springForceY -= E);
          }, c.prototype.calcRepulsionForce = function(h, d) {
            var g = h.getRect(), b = d.getRect(), p = new Array(2), m = new Array(4), y, E, C, D, w, T, x;
            if (g.intersects(b)) {
              l.calcSeparationAmount(g, b, p, o.DEFAULT_EDGE_LENGTH / 2), T = 2 * p[0], x = 2 * p[1];
              var S = h.noOfChildren * d.noOfChildren / (h.noOfChildren + d.noOfChildren);
              h.repulsionForceX -= S * T, h.repulsionForceY -= S * x, d.repulsionForceX += S * T, d.repulsionForceY += S * x;
            } else
              this.uniformLeafNodeSizes && h.getChild() == null && d.getChild() == null ? (y = b.getCenterX() - g.getCenterX(), E = b.getCenterY() - g.getCenterY()) : (l.getIntersection(g, b, m), y = m[2] - m[0], E = m[3] - m[1]), Math.abs(y) < o.MIN_REPULSION_DIST && (y = f.sign(y) * o.MIN_REPULSION_DIST), Math.abs(E) < o.MIN_REPULSION_DIST && (E = f.sign(E) * o.MIN_REPULSION_DIST), C = y * y + E * E, D = Math.sqrt(C), w = this.repulsionConstant * h.noOfChildren * d.noOfChildren / C, T = w * y / D, x = w * E / D, h.repulsionForceX -= T, h.repulsionForceY -= x, d.repulsionForceX += T, d.repulsionForceY += x;
          }, c.prototype.calcGravitationalForce = function(h) {
            var d, g, b, p, m, y, E, C;
            d = h.getOwner(), g = (d.getRight() + d.getLeft()) / 2, b = (d.getTop() + d.getBottom()) / 2, p = h.getCenterX() - g, m = h.getCenterY() - b, y = Math.abs(p) + h.getWidth() / 2, E = Math.abs(m) + h.getHeight() / 2, h.getOwner() == this.graphManager.getRoot() ? (C = d.getEstimatedSize() * this.gravityRangeFactor, (y > C || E > C) && (h.gravitationForceX = -this.gravityConstant * p, h.gravitationForceY = -this.gravityConstant * m)) : (C = d.getEstimatedSize() * this.compoundGravityRangeFactor, (y > C || E > C) && (h.gravitationForceX = -this.gravityConstant * p * this.compoundGravityConstant, h.gravitationForceY = -this.gravityConstant * m * this.compoundGravityConstant));
          }, c.prototype.isConverged = function() {
            var h, d = false;
            return this.totalIterations > this.maxIterations / 3 && (d = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), h = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, h || d;
          }, c.prototype.animate = function() {
            this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
          }, c.prototype.calcNoOfChildrenForAllNodes = function() {
            for (var h, d = this.graphManager.getAllNodes(), g = 0; g < d.length; g++)
              h = d[g], h.noOfChildren = h.getNoOfChildren();
          }, c.prototype.calcGrid = function(h) {
            var d = 0, g = 0;
            d = parseInt(Math.ceil((h.getRight() - h.getLeft()) / this.repulsionRange)), g = parseInt(Math.ceil((h.getBottom() - h.getTop()) / this.repulsionRange));
            for (var b = new Array(d), p = 0; p < d; p++)
              b[p] = new Array(g);
            for (var p = 0; p < d; p++)
              for (var m = 0; m < g; m++)
                b[p][m] = new Array();
            return b;
          }, c.prototype.addNodeToGrid = function(h, d, g) {
            var b = 0, p = 0, m = 0, y = 0;
            b = parseInt(Math.floor((h.getRect().x - d) / this.repulsionRange)), p = parseInt(Math.floor((h.getRect().width + h.getRect().x - d) / this.repulsionRange)), m = parseInt(Math.floor((h.getRect().y - g) / this.repulsionRange)), y = parseInt(Math.floor((h.getRect().height + h.getRect().y - g) / this.repulsionRange));
            for (var E = b; E <= p; E++)
              for (var C = m; C <= y; C++)
                this.grid[E][C].push(h), h.setGridCoordinates(b, p, m, y);
          }, c.prototype.updateGrid = function() {
            var h, d, g = this.getAllNodes();
            for (this.grid = this.calcGrid(this.graphManager.getRoot()), h = 0; h < g.length; h++)
              d = g[h], this.addNodeToGrid(d, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
          }, c.prototype.calculateRepulsionForceOfANode = function(h, d, g, b) {
            if (this.totalIterations % o.GRID_CALCULATION_CHECK_PERIOD == 1 && g || b) {
              var p = /* @__PURE__ */ new Set();
              h.surrounding = new Array();
              for (var m, y = this.grid, E = h.startX - 1; E < h.finishX + 2; E++)
                for (var C = h.startY - 1; C < h.finishY + 2; C++)
                  if (!(E < 0 || C < 0 || E >= y.length || C >= y[0].length)) {
                    for (var D = 0; D < y[E][C].length; D++)
                      if (m = y[E][C][D], !(h.getOwner() != m.getOwner() || h == m) && !d.has(m) && !p.has(m)) {
                        var w = Math.abs(h.getCenterX() - m.getCenterX()) - (h.getWidth() / 2 + m.getWidth() / 2), T = Math.abs(h.getCenterY() - m.getCenterY()) - (h.getHeight() / 2 + m.getHeight() / 2);
                        w <= this.repulsionRange && T <= this.repulsionRange && p.add(m);
                      }
                  }
              h.surrounding = [].concat(i(p));
            }
            for (E = 0; E < h.surrounding.length; E++)
              this.calcRepulsionForce(h, h.surrounding[E]);
          }, c.prototype.calcRepulsionRange = function() {
            return 0;
          }, r.exports = c;
        },
        function(r, n, a) {
          var i = a(1), s = a(7);
          function o(l, f, c) {
            i.call(this, l, f, c), this.idealLength = s.DEFAULT_EDGE_LENGTH;
          }
          o.prototype = Object.create(i.prototype);
          for (var u in i)
            o[u] = i[u];
          r.exports = o;
        },
        function(r, n, a) {
          var i = a(3);
          function s(u, l, f, c) {
            i.call(this, u, l, f, c), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
          }
          s.prototype = Object.create(i.prototype);
          for (var o in i)
            s[o] = i[o];
          s.prototype.setGridCoordinates = function(u, l, f, c) {
            this.startX = u, this.finishX = l, this.startY = f, this.finishY = c;
          }, r.exports = s;
        },
        function(r, n, a) {
          function i(s, o) {
            this.width = 0, this.height = 0, s !== null && o !== null && (this.height = o, this.width = s);
          }
          i.prototype.getWidth = function() {
            return this.width;
          }, i.prototype.setWidth = function(s) {
            this.width = s;
          }, i.prototype.getHeight = function() {
            return this.height;
          }, i.prototype.setHeight = function(s) {
            this.height = s;
          }, r.exports = i;
        },
        function(r, n, a) {
          var i = a(14);
          function s() {
            this.map = {}, this.keys = [];
          }
          s.prototype.put = function(o, u) {
            var l = i.createID(o);
            this.contains(l) || (this.map[l] = u, this.keys.push(o));
          }, s.prototype.contains = function(o) {
            return i.createID(o), this.map[o] != null;
          }, s.prototype.get = function(o) {
            var u = i.createID(o);
            return this.map[u];
          }, s.prototype.keySet = function() {
            return this.keys;
          }, r.exports = s;
        },
        function(r, n, a) {
          var i = a(14);
          function s() {
            this.set = {};
          }
          s.prototype.add = function(o) {
            var u = i.createID(o);
            this.contains(u) || (this.set[u] = o);
          }, s.prototype.remove = function(o) {
            delete this.set[i.createID(o)];
          }, s.prototype.clear = function() {
            this.set = {};
          }, s.prototype.contains = function(o) {
            return this.set[i.createID(o)] == o;
          }, s.prototype.isEmpty = function() {
            return this.size() === 0;
          }, s.prototype.size = function() {
            return Object.keys(this.set).length;
          }, s.prototype.addAllTo = function(o) {
            for (var u = Object.keys(this.set), l = u.length, f = 0; f < l; f++)
              o.push(this.set[u[f]]);
          }, s.prototype.size = function() {
            return Object.keys(this.set).length;
          }, s.prototype.addAll = function(o) {
            for (var u = o.length, l = 0; l < u; l++) {
              var f = o[l];
              this.add(f);
            }
          }, r.exports = s;
        },
        function(r, n, a) {
          var i = function() {
            function l(f, c) {
              for (var v = 0; v < c.length; v++) {
                var h = c[v];
                h.enumerable = h.enumerable || false, h.configurable = true, "value" in h && (h.writable = true), Object.defineProperty(f, h.key, h);
              }
            }
            return function(f, c, v) {
              return c && l(f.prototype, c), v && l(f, v), f;
            };
          }();
          function s(l, f) {
            if (!(l instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          var o = a(11), u = function() {
            function l(f, c) {
              s(this, l), (c !== null || c !== void 0) && (this.compareFunction = this._defaultCompareFunction);
              var v = void 0;
              f instanceof o ? v = f.size() : v = f.length, this._quicksort(f, 0, v - 1);
            }
            return i(l, [{
              key: "_quicksort",
              value: function(c, v, h) {
                if (v < h) {
                  var d = this._partition(c, v, h);
                  this._quicksort(c, v, d), this._quicksort(c, d + 1, h);
                }
              }
            }, {
              key: "_partition",
              value: function(c, v, h) {
                for (var d = this._get(c, v), g = v, b = h; ; ) {
                  for (; this.compareFunction(d, this._get(c, b)); )
                    b--;
                  for (; this.compareFunction(this._get(c, g), d); )
                    g++;
                  if (g < b)
                    this._swap(c, g, b), g++, b--;
                  else
                    return b;
                }
              }
            }, {
              key: "_get",
              value: function(c, v) {
                return c instanceof o ? c.get_object_at(v) : c[v];
              }
            }, {
              key: "_set",
              value: function(c, v, h) {
                c instanceof o ? c.set_object_at(v, h) : c[v] = h;
              }
            }, {
              key: "_swap",
              value: function(c, v, h) {
                var d = this._get(c, v);
                this._set(c, v, this._get(c, h)), this._set(c, h, d);
              }
            }, {
              key: "_defaultCompareFunction",
              value: function(c, v) {
                return v > c;
              }
            }]), l;
          }();
          r.exports = u;
        },
        function(r, n, a) {
          var i = function() {
            function u(l, f) {
              for (var c = 0; c < f.length; c++) {
                var v = f[c];
                v.enumerable = v.enumerable || false, v.configurable = true, "value" in v && (v.writable = true), Object.defineProperty(l, v.key, v);
              }
            }
            return function(l, f, c) {
              return f && u(l.prototype, f), c && u(l, c), l;
            };
          }();
          function s(u, l) {
            if (!(u instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          var o = function() {
            function u(l, f) {
              var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
              s(this, u), this.sequence1 = l, this.sequence2 = f, this.match_score = c, this.mismatch_penalty = v, this.gap_penalty = h, this.iMax = l.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
              for (var d = 0; d < this.iMax; d++) {
                this.grid[d] = new Array(this.jMax);
                for (var g = 0; g < this.jMax; g++)
                  this.grid[d][g] = 0;
              }
              this.tracebackGrid = new Array(this.iMax);
              for (var b = 0; b < this.iMax; b++) {
                this.tracebackGrid[b] = new Array(this.jMax);
                for (var p = 0; p < this.jMax; p++)
                  this.tracebackGrid[b][p] = [null, null, null];
              }
              this.alignments = [], this.score = -1, this.computeGrids();
            }
            return i(u, [{
              key: "getScore",
              value: function() {
                return this.score;
              }
            }, {
              key: "getAlignments",
              value: function() {
                return this.alignments;
              }
            }, {
              key: "computeGrids",
              value: function() {
                for (var f = 1; f < this.jMax; f++)
                  this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [false, false, true];
                for (var c = 1; c < this.iMax; c++)
                  this.grid[c][0] = this.grid[c - 1][0] + this.gap_penalty, this.tracebackGrid[c][0] = [false, true, false];
                for (var v = 1; v < this.iMax; v++)
                  for (var h = 1; h < this.jMax; h++) {
                    var d = void 0;
                    this.sequence1[v - 1] === this.sequence2[h - 1] ? d = this.grid[v - 1][h - 1] + this.match_score : d = this.grid[v - 1][h - 1] + this.mismatch_penalty;
                    var g = this.grid[v - 1][h] + this.gap_penalty, b = this.grid[v][h - 1] + this.gap_penalty, p = [d, g, b], m = this.arrayAllMaxIndexes(p);
                    this.grid[v][h] = p[m[0]], this.tracebackGrid[v][h] = [m.includes(0), m.includes(1), m.includes(2)];
                  }
                this.score = this.grid[this.iMax - 1][this.jMax - 1];
              }
            }, {
              key: "alignmentTraceback",
              value: function() {
                var f = [];
                for (f.push({
                  pos: [this.sequence1.length, this.sequence2.length],
                  seq1: "",
                  seq2: ""
                }); f[0]; ) {
                  var c = f[0], v = this.tracebackGrid[c.pos[0]][c.pos[1]];
                  v[0] && f.push({
                    pos: [c.pos[0] - 1, c.pos[1] - 1],
                    seq1: this.sequence1[c.pos[0] - 1] + c.seq1,
                    seq2: this.sequence2[c.pos[1] - 1] + c.seq2
                  }), v[1] && f.push({
                    pos: [c.pos[0] - 1, c.pos[1]],
                    seq1: this.sequence1[c.pos[0] - 1] + c.seq1,
                    seq2: "-" + c.seq2
                  }), v[2] && f.push({
                    pos: [c.pos[0], c.pos[1] - 1],
                    seq1: "-" + c.seq1,
                    seq2: this.sequence2[c.pos[1] - 1] + c.seq2
                  }), c.pos[0] === 0 && c.pos[1] === 0 && this.alignments.push({
                    sequence1: c.seq1,
                    sequence2: c.seq2
                  }), f.shift();
                }
                return this.alignments;
              }
            }, {
              key: "getAllIndexes",
              value: function(f, c) {
                for (var v = [], h = -1; (h = f.indexOf(c, h + 1)) !== -1; )
                  v.push(h);
                return v;
              }
            }, {
              key: "arrayAllMaxIndexes",
              value: function(f) {
                return this.getAllIndexes(f, Math.max.apply(null, f));
              }
            }]), u;
          }();
          r.exports = o;
        },
        function(r, n, a) {
          var i = function() {
          };
          i.FDLayout = a(18), i.FDLayoutConstants = a(7), i.FDLayoutEdge = a(19), i.FDLayoutNode = a(20), i.DimensionD = a(21), i.HashMap = a(22), i.HashSet = a(23), i.IGeometry = a(8), i.IMath = a(9), i.Integer = a(10), i.Point = a(12), i.PointD = a(4), i.RandomSeed = a(16), i.RectangleD = a(13), i.Transform = a(17), i.UniqueIDGeneretor = a(14), i.Quicksort = a(24), i.LinkedList = a(11), i.LGraphObject = a(2), i.LGraph = a(5), i.LEdge = a(1), i.LGraphManager = a(6), i.LNode = a(3), i.Layout = a(15), i.LayoutConstants = a(0), i.NeedlemanWunsch = a(25), r.exports = i;
        },
        function(r, n, a) {
          function i() {
            this.listeners = [];
          }
          var s = i.prototype;
          s.addListener = function(o, u) {
            this.listeners.push({
              event: o,
              callback: u
            });
          }, s.removeListener = function(o, u) {
            for (var l = this.listeners.length; l >= 0; l--) {
              var f = this.listeners[l];
              f.event === o && f.callback === u && this.listeners.splice(l, 1);
            }
          }, s.emit = function(o, u) {
            for (var l = 0; l < this.listeners.length; l++) {
              var f = this.listeners[l];
              o === f.event && f.callback(u);
            }
          }, r.exports = i;
        }
      ]);
    });
  }(ki)), ki.exports;
}
var mu;
function ax() {
  return mu || (mu = 1, function(t11, e) {
    (function(n, a) {
      t11.exports = a(nx());
    })(jt, function(r) {
      return function(n) {
        var a = {};
        function i(s) {
          if (a[s])
            return a[s].exports;
          var o = a[s] = {
            i: s,
            l: false,
            exports: {}
          };
          return n[s].call(o.exports, o, o.exports, i), o.l = true, o.exports;
        }
        return i.m = n, i.c = a, i.i = function(s) {
          return s;
        }, i.d = function(s, o, u) {
          i.o(s, o) || Object.defineProperty(s, o, {
            configurable: false,
            enumerable: true,
            get: u
          });
        }, i.n = function(s) {
          var o = s && s.__esModule ? function() {
            return s.default;
          } : function() {
            return s;
          };
          return i.d(o, "a", o), o;
        }, i.o = function(s, o) {
          return Object.prototype.hasOwnProperty.call(s, o);
        }, i.p = "", i(i.s = 7);
      }([
        function(n, a) {
          n.exports = r;
        },
        function(n, a, i) {
          var s = i(0).FDLayoutConstants;
          function o() {
          }
          for (var u in s)
            o[u] = s[u];
          o.DEFAULT_USE_MULTI_LEVEL_SCALING = false, o.DEFAULT_RADIAL_SEPARATION = s.DEFAULT_EDGE_LENGTH, o.DEFAULT_COMPONENT_SEPERATION = 60, o.TILE = true, o.TILING_PADDING_VERTICAL = 10, o.TILING_PADDING_HORIZONTAL = 10, o.TREE_REDUCTION_ON_INCREMENTAL = false, n.exports = o;
        },
        function(n, a, i) {
          var s = i(0).FDLayoutEdge;
          function o(l, f, c) {
            s.call(this, l, f, c);
          }
          o.prototype = Object.create(s.prototype);
          for (var u in s)
            o[u] = s[u];
          n.exports = o;
        },
        function(n, a, i) {
          var s = i(0).LGraph;
          function o(l, f, c) {
            s.call(this, l, f, c);
          }
          o.prototype = Object.create(s.prototype);
          for (var u in s)
            o[u] = s[u];
          n.exports = o;
        },
        function(n, a, i) {
          var s = i(0).LGraphManager;
          function o(l) {
            s.call(this, l);
          }
          o.prototype = Object.create(s.prototype);
          for (var u in s)
            o[u] = s[u];
          n.exports = o;
        },
        function(n, a, i) {
          var s = i(0).FDLayoutNode, o = i(0).IMath;
          function u(f, c, v, h) {
            s.call(this, f, c, v, h);
          }
          u.prototype = Object.create(s.prototype);
          for (var l in s)
            u[l] = s[l];
          u.prototype.move = function() {
            var f = this.graphManager.getLayout();
            this.displacementX = f.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = f.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementX = f.coolingFactor * f.maxNodeDisplacement * o.sign(this.displacementX)), Math.abs(this.displacementY) > f.coolingFactor * f.maxNodeDisplacement && (this.displacementY = f.coolingFactor * f.maxNodeDisplacement * o.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), f.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
          }, u.prototype.propogateDisplacementToChildren = function(f, c) {
            for (var v = this.getChild().getNodes(), h, d = 0; d < v.length; d++)
              h = v[d], h.getChild() == null ? (h.moveBy(f, c), h.displacementX += f, h.displacementY += c) : h.propogateDisplacementToChildren(f, c);
          }, u.prototype.setPred1 = function(f) {
            this.pred1 = f;
          }, u.prototype.getPred1 = function() {
            return pred1;
          }, u.prototype.getPred2 = function() {
            return pred2;
          }, u.prototype.setNext = function(f) {
            this.next = f;
          }, u.prototype.getNext = function() {
            return next;
          }, u.prototype.setProcessed = function(f) {
            this.processed = f;
          }, u.prototype.isProcessed = function() {
            return processed;
          }, n.exports = u;
        },
        function(n, a, i) {
          var s = i(0).FDLayout, o = i(4), u = i(3), l = i(5), f = i(2), c = i(1), v = i(0).FDLayoutConstants, h = i(0).LayoutConstants, d = i(0).Point, g = i(0).PointD, b = i(0).Layout, p = i(0).Integer, m = i(0).IGeometry, y = i(0).LGraph, E = i(0).Transform;
          function C() {
            s.call(this), this.toBeTiled = {};
          }
          C.prototype = Object.create(s.prototype);
          for (var D in s)
            C[D] = s[D];
          C.prototype.newGraphManager = function() {
            var w = new o(this);
            return this.graphManager = w, w;
          }, C.prototype.newGraph = function(w) {
            return new u(null, this.graphManager, w);
          }, C.prototype.newNode = function(w) {
            return new l(this.graphManager, w);
          }, C.prototype.newEdge = function(w) {
            return new f(null, null, w);
          }, C.prototype.initParameters = function() {
            s.prototype.initParameters.call(this, arguments), this.isSubLayout || (c.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = c.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = c.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = v.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = v.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = v.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = v.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = v.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = v.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / v.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = v.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
          }, C.prototype.layout = function() {
            var w = h.DEFAULT_CREATE_BENDS_AS_NEEDED;
            return w && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
          }, C.prototype.classicLayout = function() {
            if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
              if (c.TREE_REDUCTION_ON_INCREMENTAL) {
                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                var T = new Set(this.getAllNodes()), x = this.nodesWithGravity.filter(function(A) {
                  return T.has(A);
                });
                this.graphManager.setAllNodesToApplyGravitation(x);
              }
            } else {
              var w = this.getFlatForest();
              if (w.length > 0)
                this.positionNodesRadially(w);
              else {
                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                var T = new Set(this.getAllNodes()), x = this.nodesWithGravity.filter(function(S) {
                  return T.has(S);
                });
                this.graphManager.setAllNodesToApplyGravitation(x), this.positionNodesRandomly();
              }
            }
            return this.initSpringEmbedder(), this.runSpringEmbedder(), true;
          }, C.prototype.tick = function() {
            if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
              if (this.prunedNodesAll.length > 0)
                this.isTreeGrowing = true;
              else
                return true;
            if (this.totalIterations % v.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
              if (this.isConverged())
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = true;
                else
                  return true;
              this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
            }
            if (this.isTreeGrowing) {
              if (this.growTreeIterations % 10 == 0)
                if (this.prunedNodesAll.length > 0) {
                  this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                  var w = new Set(this.getAllNodes()), T = this.nodesWithGravity.filter(function(L) {
                    return w.has(L);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(T), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = v.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                } else
                  this.isTreeGrowing = false, this.isGrowthFinished = true;
              this.growTreeIterations++;
            }
            if (this.isGrowthFinished) {
              if (this.isConverged())
                return true;
              this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = v.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
            }
            var x = !this.isTreeGrowing && !this.isGrowthFinished, S = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
            return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(x, S), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
          }, C.prototype.getPositionsData = function() {
            for (var w = this.graphManager.getAllNodes(), T = {}, x = 0; x < w.length; x++) {
              var S = w[x].rect, L = w[x].id;
              T[L] = {
                id: L,
                x: S.getCenterX(),
                y: S.getCenterY(),
                w: S.width,
                h: S.height
              };
            }
            return T;
          }, C.prototype.runSpringEmbedder = function() {
            this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
            var w = false;
            if (v.ANIMATE === "during")
              this.emit("layoutstarted");
            else {
              for (; !w; )
                w = this.tick();
              this.graphManager.updateBounds();
            }
          }, C.prototype.calculateNodesToApplyGravitationTo = function() {
            var w = [], T, x = this.graphManager.getGraphs(), S = x.length, L;
            for (L = 0; L < S; L++)
              T = x[L], T.updateConnected(), T.isConnected || (w = w.concat(T.getNodes()));
            return w;
          }, C.prototype.createBendpoints = function() {
            var w = [];
            w = w.concat(this.graphManager.getAllEdges());
            var T = /* @__PURE__ */ new Set(), x;
            for (x = 0; x < w.length; x++) {
              var S = w[x];
              if (!T.has(S)) {
                var L = S.getSource(), A = S.getTarget();
                if (L == A)
                  S.getBendpoints().push(new g()), S.getBendpoints().push(new g()), this.createDummyNodesForBendpoints(S), T.add(S);
                else {
                  var O = [];
                  if (O = O.concat(L.getEdgeListToNode(A)), O = O.concat(A.getEdgeListToNode(L)), !T.has(O[0])) {
                    if (O.length > 1) {
                      var N;
                      for (N = 0; N < O.length; N++) {
                        var R = O[N];
                        R.getBendpoints().push(new g()), this.createDummyNodesForBendpoints(R);
                      }
                    }
                    O.forEach(function(I) {
                      T.add(I);
                    });
                  }
                }
              }
              if (T.size == w.length)
                break;
            }
          }, C.prototype.positionNodesRadially = function(w) {
            for (var T = new d(0, 0), x = Math.ceil(Math.sqrt(w.length)), S = 0, L = 0, A = 0, O = new g(0, 0), N = 0; N < w.length; N++) {
              N % x == 0 && (A = 0, L = S, N != 0 && (L += c.DEFAULT_COMPONENT_SEPERATION), S = 0);
              var R = w[N], I = b.findCenterOfTree(R);
              T.x = A, T.y = L, O = C.radialLayout(R, I, T), O.y > S && (S = Math.floor(O.y)), A = Math.floor(O.x + c.DEFAULT_COMPONENT_SEPERATION);
            }
            this.transform(new g(h.WORLD_CENTER_X - O.x / 2, h.WORLD_CENTER_Y - O.y / 2));
          }, C.radialLayout = function(w, T, x) {
            var S = Math.max(this.maxDiagonalInTree(w), c.DEFAULT_RADIAL_SEPARATION);
            C.branchRadialLayout(T, null, 0, 359, 0, S);
            var L = y.calculateBounds(w), A = new E();
            A.setDeviceOrgX(L.getMinX()), A.setDeviceOrgY(L.getMinY()), A.setWorldOrgX(x.x), A.setWorldOrgY(x.y);
            for (var O = 0; O < w.length; O++) {
              var N = w[O];
              N.transform(A);
            }
            var R = new g(L.getMaxX(), L.getMaxY());
            return A.inverseTransformPoint(R);
          }, C.branchRadialLayout = function(w, T, x, S, L, A) {
            var O = (S - x + 1) / 2;
            O < 0 && (O += 180);
            var N = (O + x) % 360, R = N * m.TWO_PI / 360, I = L * Math.cos(R), k = L * Math.sin(R);
            w.setCenter(I, k);
            var P = [];
            P = P.concat(w.getEdges());
            var B = P.length;
            T != null && B--;
            for (var _ = 0, F = P.length, G, z = w.getEdgesBetween(T); z.length > 1; ) {
              var V = z[0];
              z.splice(0, 1);
              var U = P.indexOf(V);
              U >= 0 && P.splice(U, 1), F--, B--;
            }
            T != null ? G = (P.indexOf(z[0]) + 1) % F : G = 0;
            for (var Y = Math.abs(S - x) / B, $ = G; _ != B; $ = ++$ % F) {
              var X = P[$].getOtherEnd(w);
              if (X != T) {
                var K = (x + _ * Y) % 360, Z = (K + Y) % 360;
                C.branchRadialLayout(X, w, K, Z, L + A, A), _++;
              }
            }
          }, C.maxDiagonalInTree = function(w) {
            for (var T = p.MIN_VALUE, x = 0; x < w.length; x++) {
              var S = w[x], L = S.getDiagonal();
              L > T && (T = L);
            }
            return T;
          }, C.prototype.calcRepulsionRange = function() {
            return 2 * (this.level + 1) * this.idealEdgeLength;
          }, C.prototype.groupZeroDegreeMembers = function() {
            var w = this, T = {};
            this.memberGroups = {}, this.idToDummyNode = {};
            for (var x = [], S = this.graphManager.getAllNodes(), L = 0; L < S.length; L++) {
              var A = S[L], O = A.getParent();
              this.getNodeDegreeWithChildren(A) === 0 && (O.id == null || !this.getToBeTiled(O)) && x.push(A);
            }
            for (var L = 0; L < x.length; L++) {
              var A = x[L], N = A.getParent().id;
              typeof T[N] > "u" && (T[N] = []), T[N] = T[N].concat(A);
            }
            Object.keys(T).forEach(function(R) {
              if (T[R].length > 1) {
                var I = "DummyCompound_" + R;
                w.memberGroups[I] = T[R];
                var k = T[R][0].getParent(), P = new l(w.graphManager);
                P.id = I, P.paddingLeft = k.paddingLeft || 0, P.paddingRight = k.paddingRight || 0, P.paddingBottom = k.paddingBottom || 0, P.paddingTop = k.paddingTop || 0, w.idToDummyNode[I] = P;
                var B = w.getGraphManager().add(w.newGraph(), P), _ = k.getChild();
                _.add(P);
                for (var F = 0; F < T[R].length; F++) {
                  var G = T[R][F];
                  _.remove(G), B.add(G);
                }
              }
            });
          }, C.prototype.clearCompounds = function() {
            var w = {}, T = {};
            this.performDFSOnCompounds();
            for (var x = 0; x < this.compoundOrder.length; x++)
              T[this.compoundOrder[x].id] = this.compoundOrder[x], w[this.compoundOrder[x].id] = [].concat(this.compoundOrder[x].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[x].getChild()), this.compoundOrder[x].child = null;
            this.graphManager.resetAllNodes(), this.tileCompoundMembers(w, T);
          }, C.prototype.clearZeroDegreeMembers = function() {
            var w = this, T = this.tiledZeroDegreePack = [];
            Object.keys(this.memberGroups).forEach(function(x) {
              var S = w.idToDummyNode[x];
              T[x] = w.tileNodes(w.memberGroups[x], S.paddingLeft + S.paddingRight), S.rect.width = T[x].width, S.rect.height = T[x].height;
            });
          }, C.prototype.repopulateCompounds = function() {
            for (var w = this.compoundOrder.length - 1; w >= 0; w--) {
              var T = this.compoundOrder[w], x = T.id, S = T.paddingLeft, L = T.paddingTop;
              this.adjustLocations(this.tiledMemberPack[x], T.rect.x, T.rect.y, S, L);
            }
          }, C.prototype.repopulateZeroDegreeMembers = function() {
            var w = this, T = this.tiledZeroDegreePack;
            Object.keys(T).forEach(function(x) {
              var S = w.idToDummyNode[x], L = S.paddingLeft, A = S.paddingTop;
              w.adjustLocations(T[x], S.rect.x, S.rect.y, L, A);
            });
          }, C.prototype.getToBeTiled = function(w) {
            var T = w.id;
            if (this.toBeTiled[T] != null)
              return this.toBeTiled[T];
            var x = w.getChild();
            if (x == null)
              return this.toBeTiled[T] = false, false;
            for (var S = x.getNodes(), L = 0; L < S.length; L++) {
              var A = S[L];
              if (this.getNodeDegree(A) > 0)
                return this.toBeTiled[T] = false, false;
              if (A.getChild() == null) {
                this.toBeTiled[A.id] = false;
                continue;
              }
              if (!this.getToBeTiled(A))
                return this.toBeTiled[T] = false, false;
            }
            return this.toBeTiled[T] = true, true;
          }, C.prototype.getNodeDegree = function(w) {
            w.id;
            for (var T = w.getEdges(), x = 0, S = 0; S < T.length; S++) {
              var L = T[S];
              L.getSource().id !== L.getTarget().id && (x = x + 1);
            }
            return x;
          }, C.prototype.getNodeDegreeWithChildren = function(w) {
            var T = this.getNodeDegree(w);
            if (w.getChild() == null)
              return T;
            for (var x = w.getChild().getNodes(), S = 0; S < x.length; S++) {
              var L = x[S];
              T += this.getNodeDegreeWithChildren(L);
            }
            return T;
          }, C.prototype.performDFSOnCompounds = function() {
            this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
          }, C.prototype.fillCompexOrderByDFS = function(w) {
            for (var T = 0; T < w.length; T++) {
              var x = w[T];
              x.getChild() != null && this.fillCompexOrderByDFS(x.getChild().getNodes()), this.getToBeTiled(x) && this.compoundOrder.push(x);
            }
          }, C.prototype.adjustLocations = function(w, T, x, S, L) {
            T += S, x += L;
            for (var A = T, O = 0; O < w.rows.length; O++) {
              var N = w.rows[O];
              T = A;
              for (var R = 0, I = 0; I < N.length; I++) {
                var k = N[I];
                k.rect.x = T, k.rect.y = x, T += k.rect.width + w.horizontalPadding, k.rect.height > R && (R = k.rect.height);
              }
              x += R + w.verticalPadding;
            }
          }, C.prototype.tileCompoundMembers = function(w, T) {
            var x = this;
            this.tiledMemberPack = [], Object.keys(w).forEach(function(S) {
              var L = T[S];
              x.tiledMemberPack[S] = x.tileNodes(w[S], L.paddingLeft + L.paddingRight), L.rect.width = x.tiledMemberPack[S].width, L.rect.height = x.tiledMemberPack[S].height;
            });
          }, C.prototype.tileNodes = function(w, T) {
            var x = c.TILING_PADDING_VERTICAL, S = c.TILING_PADDING_HORIZONTAL, L = {
              rows: [],
              rowWidth: [],
              rowHeight: [],
              width: 0,
              height: T,
              verticalPadding: x,
              horizontalPadding: S
            };
            w.sort(function(N, R) {
              return N.rect.width * N.rect.height > R.rect.width * R.rect.height ? -1 : N.rect.width * N.rect.height < R.rect.width * R.rect.height ? 1 : 0;
            });
            for (var A = 0; A < w.length; A++) {
              var O = w[A];
              L.rows.length == 0 ? this.insertNodeToRow(L, O, 0, T) : this.canAddHorizontal(L, O.rect.width, O.rect.height) ? this.insertNodeToRow(L, O, this.getShortestRowIndex(L), T) : this.insertNodeToRow(L, O, L.rows.length, T), this.shiftToLastRow(L);
            }
            return L;
          }, C.prototype.insertNodeToRow = function(w, T, x, S) {
            var L = S;
            if (x == w.rows.length) {
              var A = [];
              w.rows.push(A), w.rowWidth.push(L), w.rowHeight.push(0);
            }
            var O = w.rowWidth[x] + T.rect.width;
            w.rows[x].length > 0 && (O += w.horizontalPadding), w.rowWidth[x] = O, w.width < O && (w.width = O);
            var N = T.rect.height;
            x > 0 && (N += w.verticalPadding);
            var R = 0;
            N > w.rowHeight[x] && (R = w.rowHeight[x], w.rowHeight[x] = N, R = w.rowHeight[x] - R), w.height += R, w.rows[x].push(T);
          }, C.prototype.getShortestRowIndex = function(w) {
            for (var T = -1, x = Number.MAX_VALUE, S = 0; S < w.rows.length; S++)
              w.rowWidth[S] < x && (T = S, x = w.rowWidth[S]);
            return T;
          }, C.prototype.getLongestRowIndex = function(w) {
            for (var T = -1, x = Number.MIN_VALUE, S = 0; S < w.rows.length; S++)
              w.rowWidth[S] > x && (T = S, x = w.rowWidth[S]);
            return T;
          }, C.prototype.canAddHorizontal = function(w, T, x) {
            var S = this.getShortestRowIndex(w);
            if (S < 0)
              return true;
            var L = w.rowWidth[S];
            if (L + w.horizontalPadding + T <= w.width)
              return true;
            var A = 0;
            w.rowHeight[S] < x && S > 0 && (A = x + w.verticalPadding - w.rowHeight[S]);
            var O;
            w.width - L >= T + w.horizontalPadding ? O = (w.height + A) / (L + T + w.horizontalPadding) : O = (w.height + A) / w.width, A = x + w.verticalPadding;
            var N;
            return w.width < T ? N = (w.height + A) / T : N = (w.height + A) / w.width, N < 1 && (N = 1 / N), O < 1 && (O = 1 / O), O < N;
          }, C.prototype.shiftToLastRow = function(w) {
            var T = this.getLongestRowIndex(w), x = w.rowWidth.length - 1, S = w.rows[T], L = S[S.length - 1], A = L.width + w.horizontalPadding;
            if (w.width - w.rowWidth[x] > A && T != x) {
              S.splice(-1, 1), w.rows[x].push(L), w.rowWidth[T] = w.rowWidth[T] - A, w.rowWidth[x] = w.rowWidth[x] + A, w.width = w.rowWidth[instance.getLongestRowIndex(w)];
              for (var O = Number.MIN_VALUE, N = 0; N < S.length; N++)
                S[N].height > O && (O = S[N].height);
              T > 0 && (O += w.verticalPadding);
              var R = w.rowHeight[T] + w.rowHeight[x];
              w.rowHeight[T] = O, w.rowHeight[x] < L.height + w.verticalPadding && (w.rowHeight[x] = L.height + w.verticalPadding);
              var I = w.rowHeight[T] + w.rowHeight[x];
              w.height += I - R, this.shiftToLastRow(w);
            }
          }, C.prototype.tilingPreLayout = function() {
            c.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
          }, C.prototype.tilingPostLayout = function() {
            c.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
          }, C.prototype.reduceTrees = function() {
            for (var w = [], T = true, x; T; ) {
              var S = this.graphManager.getAllNodes(), L = [];
              T = false;
              for (var A = 0; A < S.length; A++)
                x = S[A], x.getEdges().length == 1 && !x.getEdges()[0].isInterGraph && x.getChild() == null && (L.push([x, x.getEdges()[0], x.getOwner()]), T = true);
              if (T == true) {
                for (var O = [], N = 0; N < L.length; N++)
                  L[N][0].getEdges().length == 1 && (O.push(L[N]), L[N][0].getOwner().remove(L[N][0]));
                w.push(O), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
              }
            }
            this.prunedNodesAll = w;
          }, C.prototype.growTree = function(w) {
            for (var T = w.length, x = w[T - 1], S, L = 0; L < x.length; L++)
              S = x[L], this.findPlaceforPrunedNode(S), S[2].add(S[0]), S[2].add(S[1], S[1].source, S[1].target);
            w.splice(w.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
          }, C.prototype.findPlaceforPrunedNode = function(w) {
            var T, x, S = w[0];
            S == w[1].source ? x = w[1].target : x = w[1].source;
            var L = x.startX, A = x.finishX, O = x.startY, N = x.finishY, R = 0, I = 0, k = 0, P = 0, B = [R, k, I, P];
            if (O > 0)
              for (var _ = L; _ <= A; _++)
                B[0] += this.grid[_][O - 1].length + this.grid[_][O].length - 1;
            if (A < this.grid.length - 1)
              for (var _ = O; _ <= N; _++)
                B[1] += this.grid[A + 1][_].length + this.grid[A][_].length - 1;
            if (N < this.grid[0].length - 1)
              for (var _ = L; _ <= A; _++)
                B[2] += this.grid[_][N + 1].length + this.grid[_][N].length - 1;
            if (L > 0)
              for (var _ = O; _ <= N; _++)
                B[3] += this.grid[L - 1][_].length + this.grid[L][_].length - 1;
            for (var F = p.MAX_VALUE, G, z, V = 0; V < B.length; V++)
              B[V] < F ? (F = B[V], G = 1, z = V) : B[V] == F && G++;
            if (G == 3 && F == 0)
              B[0] == 0 && B[1] == 0 && B[2] == 0 ? T = 1 : B[0] == 0 && B[1] == 0 && B[3] == 0 ? T = 0 : B[0] == 0 && B[2] == 0 && B[3] == 0 ? T = 3 : B[1] == 0 && B[2] == 0 && B[3] == 0 && (T = 2);
            else if (G == 2 && F == 0) {
              var U = Math.floor(Math.random() * 2);
              B[0] == 0 && B[1] == 0 ? U == 0 ? T = 0 : T = 1 : B[0] == 0 && B[2] == 0 ? U == 0 ? T = 0 : T = 2 : B[0] == 0 && B[3] == 0 ? U == 0 ? T = 0 : T = 3 : B[1] == 0 && B[2] == 0 ? U == 0 ? T = 1 : T = 2 : B[1] == 0 && B[3] == 0 ? U == 0 ? T = 1 : T = 3 : U == 0 ? T = 2 : T = 3;
            } else if (G == 4 && F == 0) {
              var U = Math.floor(Math.random() * 4);
              T = U;
            } else
              T = z;
            T == 0 ? S.setCenter(x.getCenterX(), x.getCenterY() - x.getHeight() / 2 - v.DEFAULT_EDGE_LENGTH - S.getHeight() / 2) : T == 1 ? S.setCenter(x.getCenterX() + x.getWidth() / 2 + v.DEFAULT_EDGE_LENGTH + S.getWidth() / 2, x.getCenterY()) : T == 2 ? S.setCenter(x.getCenterX(), x.getCenterY() + x.getHeight() / 2 + v.DEFAULT_EDGE_LENGTH + S.getHeight() / 2) : S.setCenter(x.getCenterX() - x.getWidth() / 2 - v.DEFAULT_EDGE_LENGTH - S.getWidth() / 2, x.getCenterY());
          }, n.exports = C;
        },
        function(n, a, i) {
          var s = {};
          s.layoutBase = i(0), s.CoSEConstants = i(1), s.CoSEEdge = i(2), s.CoSEGraph = i(3), s.CoSEGraphManager = i(4), s.CoSELayout = i(6), s.CoSENode = i(5), n.exports = s;
        }
      ]);
    });
  }(Ii)), Ii.exports;
}
(function(t11, e) {
  (function(n, a) {
    t11.exports = a(ax());
  })(jt, function(r) {
    return function(n) {
      var a = {};
      function i(s) {
        if (a[s])
          return a[s].exports;
        var o = a[s] = {
          i: s,
          l: false,
          exports: {}
        };
        return n[s].call(o.exports, o, o.exports, i), o.l = true, o.exports;
      }
      return i.m = n, i.c = a, i.i = function(s) {
        return s;
      }, i.d = function(s, o, u) {
        i.o(s, o) || Object.defineProperty(s, o, {
          configurable: false,
          enumerable: true,
          get: u
        });
      }, i.n = function(s) {
        var o = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(o, "a", o), o;
      }, i.o = function(s, o) {
        return Object.prototype.hasOwnProperty.call(s, o);
      }, i.p = "", i(i.s = 1);
    }([
      function(n, a) {
        n.exports = r;
      },
      function(n, a, i) {
        var s = i(0).layoutBase.LayoutConstants, o = i(0).layoutBase.FDLayoutConstants, u = i(0).CoSEConstants, l = i(0).CoSELayout, f = i(0).CoSENode, c = i(0).layoutBase.PointD, v = i(0).layoutBase.DimensionD, h = {
          ready: function() {
          },
          stop: function() {
          },
          quality: "default",
          nodeDimensionsIncludeLabels: false,
          refresh: 30,
          fit: true,
          padding: 10,
          randomize: true,
          nodeRepulsion: 4500,
          idealEdgeLength: 50,
          edgeElasticity: 0.45,
          nestingFactor: 0.1,
          gravity: 0.25,
          numIter: 2500,
          tile: true,
          animate: "end",
          animationDuration: 500,
          tilingPaddingVertical: 10,
          tilingPaddingHorizontal: 10,
          gravityRangeCompound: 1.5,
          gravityCompound: 1,
          gravityRange: 3.8,
          initialEnergyOnIncremental: 0.5
        };
        function d(m, y) {
          var E = {};
          for (var C in m)
            E[C] = m[C];
          for (var C in y)
            E[C] = y[C];
          return E;
        }
        function g(m) {
          this.options = d(h, m), b(this.options);
        }
        var b = function(y) {
          y.nodeRepulsion != null && (u.DEFAULT_REPULSION_STRENGTH = o.DEFAULT_REPULSION_STRENGTH = y.nodeRepulsion), y.idealEdgeLength != null && (u.DEFAULT_EDGE_LENGTH = o.DEFAULT_EDGE_LENGTH = y.idealEdgeLength), y.edgeElasticity != null && (u.DEFAULT_SPRING_STRENGTH = o.DEFAULT_SPRING_STRENGTH = y.edgeElasticity), y.nestingFactor != null && (u.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = o.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = y.nestingFactor), y.gravity != null && (u.DEFAULT_GRAVITY_STRENGTH = o.DEFAULT_GRAVITY_STRENGTH = y.gravity), y.numIter != null && (u.MAX_ITERATIONS = o.MAX_ITERATIONS = y.numIter), y.gravityRange != null && (u.DEFAULT_GRAVITY_RANGE_FACTOR = o.DEFAULT_GRAVITY_RANGE_FACTOR = y.gravityRange), y.gravityCompound != null && (u.DEFAULT_COMPOUND_GRAVITY_STRENGTH = o.DEFAULT_COMPOUND_GRAVITY_STRENGTH = y.gravityCompound), y.gravityRangeCompound != null && (u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = o.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = y.gravityRangeCompound), y.initialEnergyOnIncremental != null && (u.DEFAULT_COOLING_FACTOR_INCREMENTAL = o.DEFAULT_COOLING_FACTOR_INCREMENTAL = y.initialEnergyOnIncremental), y.quality == "draft" ? s.QUALITY = 0 : y.quality == "proof" ? s.QUALITY = 2 : s.QUALITY = 1, u.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = s.NODE_DIMENSIONS_INCLUDE_LABELS = y.nodeDimensionsIncludeLabels, u.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = s.DEFAULT_INCREMENTAL = !y.randomize, u.ANIMATE = o.ANIMATE = s.ANIMATE = y.animate, u.TILE = y.tile, u.TILING_PADDING_VERTICAL = typeof y.tilingPaddingVertical == "function" ? y.tilingPaddingVertical.call() : y.tilingPaddingVertical, u.TILING_PADDING_HORIZONTAL = typeof y.tilingPaddingHorizontal == "function" ? y.tilingPaddingHorizontal.call() : y.tilingPaddingHorizontal;
        };
        g.prototype.run = function() {
          var m, y, E = this.options;
          this.idToLNode = {};
          var C = this.layout = new l(), D = this;
          D.stopped = false, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
          var w = C.newGraphManager();
          this.gm = w;
          var T = this.options.eles.nodes(), x = this.options.eles.edges();
          this.root = w.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(T), C);
          for (var S = 0; S < x.length; S++) {
            var L = x[S], A = this.idToLNode[L.data("source")], O = this.idToLNode[L.data("target")];
            if (A !== O && A.getEdgesBetween(O).length == 0) {
              var N = w.add(C.newEdge(), A, O);
              N.id = L.id();
            }
          }
          var R = function(P, B) {
            typeof P == "number" && (P = B);
            var _ = P.data("id"), F = D.idToLNode[_];
            return {
              x: F.getRect().getCenterX(),
              y: F.getRect().getCenterY()
            };
          }, I = function k() {
            for (var P = function() {
              E.fit && E.cy.fit(E.eles, E.padding), m || (m = true, D.cy.one("layoutready", E.ready), D.cy.trigger({ type: "layoutready", layout: D }));
            }, B = D.options.refresh, _, F = 0; F < B && !_; F++)
              _ = D.stopped || D.layout.tick();
            if (_) {
              C.checkLayoutSuccess() && !C.isSubLayout && C.doPostLayout(), C.tilingPostLayout && C.tilingPostLayout(), C.isLayoutFinished = true, D.options.eles.nodes().positions(R), P(), D.cy.one("layoutstop", D.options.stop), D.cy.trigger({ type: "layoutstop", layout: D }), y && cancelAnimationFrame(y), m = false;
              return;
            }
            var G = D.layout.getPositionsData();
            E.eles.nodes().positions(function(z, V) {
              if (typeof z == "number" && (z = V), !z.isParent()) {
                for (var U = z.id(), Y = G[U], $ = z; Y == null && (Y = G[$.data("parent")] || G["DummyCompound_" + $.data("parent")], G[U] = Y, $ = $.parent()[0], $ != null); )
                  ;
                return Y != null ? {
                  x: Y.x,
                  y: Y.y
                } : {
                  x: z.position("x"),
                  y: z.position("y")
                };
              }
            }), P(), y = requestAnimationFrame(k);
          };
          return C.addListener("layoutstarted", function() {
            D.options.animate === "during" && (y = requestAnimationFrame(I));
          }), C.runLayout(), this.options.animate !== "during" && (D.options.eles.nodes().not(":parent").layoutPositions(D, D.options, R), m = false), this;
        }, g.prototype.getTopMostNodes = function(m) {
          for (var y = {}, E = 0; E < m.length; E++)
            y[m[E].id()] = true;
          var C = m.filter(function(D, w) {
            typeof D == "number" && (D = w);
            for (var T = D.parent()[0]; T != null; ) {
              if (y[T.id()])
                return false;
              T = T.parent()[0];
            }
            return true;
          });
          return C;
        }, g.prototype.processChildrenList = function(m, y, E) {
          for (var C = y.length, D = 0; D < C; D++) {
            var w = y[D], T = w.children(), x, S = w.layoutDimensions({
              nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
            });
            if (w.outerWidth() != null && w.outerHeight() != null ? x = m.add(new f(E.graphManager, new c(w.position("x") - S.w / 2, w.position("y") - S.h / 2), new v(parseFloat(S.w), parseFloat(S.h)))) : x = m.add(new f(this.graphManager)), x.id = w.data("id"), x.paddingLeft = parseInt(w.css("padding")), x.paddingTop = parseInt(w.css("padding")), x.paddingRight = parseInt(w.css("padding")), x.paddingBottom = parseInt(w.css("padding")), this.options.nodeDimensionsIncludeLabels && w.isParent()) {
              var L = w.boundingBox({ includeLabels: true, includeNodes: false }).w, A = w.boundingBox({ includeLabels: true, includeNodes: false }).h, O = w.css("text-halign");
              x.labelWidth = L, x.labelHeight = A, x.labelPos = O;
            }
            if (this.idToLNode[w.data("id")] = x, isNaN(x.rect.x) && (x.rect.x = 0), isNaN(x.rect.y) && (x.rect.y = 0), T != null && T.length > 0) {
              var N;
              N = E.getGraphManager().add(E.newGraph(), x), this.processChildrenList(N, T, E);
            }
          }
        }, g.prototype.stop = function() {
          return this.stopped = true, this;
        };
        var p = function(y) {
          y("layout", "cose-bilkent", g);
        };
        typeof cytoscape < "u" && p(cytoscape), n.exports = p;
      }
    ]);
  });
})(Ff);
const ix = /* @__PURE__ */ Fd(Ff.exports);
Bf.use(ix);
function _f(t11, e, r, n) {
  Qu.drawNode(t11, e, r, n), e.children && e.children.forEach((a, i) => {
    _f(t11, a, r < 0 ? i : r, n);
  });
}
function sx(t11, e) {
  e.edges().map((r, n) => {
    const a = r.data();
    if (r[0]._private.bodyBounds) {
      const i = r[0]._private.rscratch;
      vt.trace("Edge: ", n, a), t11.insert("path").attr(
        "d",
        `M ${i.startX},${i.startY} L ${i.midX},${i.midY} L${i.endX},${i.endY} `
      ).attr("class", "edge section-edge-" + a.section + " edge-depth-" + a.depth);
    }
  });
}
function $f(t11, e, r, n) {
  e.add({
    group: "nodes",
    data: {
      id: t11.id,
      labelText: t11.descr,
      height: t11.height,
      width: t11.width,
      level: n,
      nodeId: t11.id,
      padding: t11.padding,
      type: t11.type
    },
    position: {
      x: t11.x,
      y: t11.y
    }
  }), t11.children && t11.children.forEach((a) => {
    $f(a, e, r, n + 1), e.add({
      group: "edges",
      data: {
        id: `${t11.id}_${a.id}`,
        source: t11.id,
        target: a.id,
        depth: n,
        section: a.section
      }
    });
  });
}
function ox(t11, e) {
  return new Promise((r) => {
    const n = wn("body").append("div").attr("id", "cy").attr("style", "display:none"), a = Bf({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    n.remove(), $f(t11, a, e, 0), a.nodes().forEach(function(i) {
      i.layoutDimensions = () => {
        const s = i.data();
        return { w: s.width, h: s.height };
      };
    }), a.layout({
      name: "cose-bilkent",
      quality: "proof",
      styleEnabled: false,
      animate: false
    }).run(), a.ready((i) => {
      vt.info("Ready", i), r(a);
    });
  });
}
function ux(t11) {
  t11.nodes().map((e, r) => {
    const n = e.data();
    n.x = e.position().x, n.y = e.position().y, Qu.positionNode(n);
    const a = rs(n.nodeId);
    vt.info("Id:", r, "Position: (", e.position().x, ", ", e.position().y, ")", n), a.attr(
      "transform",
      `translate(${e.position().x - n.width / 2}, ${e.position().y - n.height / 2})`
    ), a.attr("attr", `apa-${r})`);
  });
}
const lx = async (t11, e, r, n) => {
  const a = Cn();
  n.db.clear(), n.parser.parse(t11), vt.debug(`Renering info diagram
` + t11);
  const i = Cn().securityLevel;
  let s;
  i === "sandbox" && (s = wn("#i" + e));
  const u = wn(i === "sandbox" ? s.nodes()[0].contentDocument.body : "body").select("#" + e);
  u.append("g");
  const l = n.db.getMindmap(), f = u.append("g");
  f.attr("class", "mindmap-edges");
  const c = u.append("g");
  c.attr("class", "mindmap-nodes"), _f(c, l, -1, a);
  const v = await ox(l, a);
  sx(f, v), ux(v), wu(void 0, u, a.mindmap.padding, a.mindmap.useMaxWidth);
}, fx = {
  draw: lx
}, Na = {
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t11) => t11 >= 255 ? 255 : t11 < 0 ? 0 : t11,
    g: (t11) => t11 >= 255 ? 255 : t11 < 0 ? 0 : t11,
    b: (t11) => t11 >= 255 ? 255 : t11 < 0 ? 0 : t11,
    h: (t11) => t11 % 360,
    s: (t11) => t11 >= 100 ? 100 : t11 < 0 ? 0 : t11,
    l: (t11) => t11 >= 100 ? 100 : t11 < 0 ? 0 : t11,
    a: (t11) => t11 >= 1 ? 1 : t11 < 0 ? 0 : t11
  },
  toLinear: (t11) => {
    const e = t11 / 255;
    return t11 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  hue2rgb: (t11, e, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t11 + (e - t11) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t11 + (e - t11) * (2 / 3 - r) * 6 : t11),
  hsl2rgb: ({ h: t11, s: e, l: r }, n) => {
    if (!e)
      return r * 2.55;
    t11 /= 360, e /= 100, r /= 100;
    const a = r < 0.5 ? r * (1 + e) : r + e - r * e, i = 2 * r - a;
    switch (n) {
      case "r":
        return Na.hue2rgb(i, a, t11 + 1 / 3) * 255;
      case "g":
        return Na.hue2rgb(i, a, t11) * 255;
      case "b":
        return Na.hue2rgb(i, a, t11 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t11, g: e, b: r }, n) => {
    t11 /= 255, e /= 255, r /= 255;
    const a = Math.max(t11, e, r), i = Math.min(t11, e, r), s = (a + i) / 2;
    if (n === "l")
      return s * 100;
    if (a === i)
      return 0;
    const o = a - i, u = s > 0.5 ? o / (2 - a - i) : o / (a + i);
    if (n === "s")
      return u * 100;
    switch (a) {
      case t11:
        return ((e - r) / o + (e < r ? 6 : 0)) * 60;
      case e:
        return ((r - t11) / o + 2) * 60;
      case r:
        return ((t11 - e) / o + 4) * 60;
      default:
        return -1;
    }
  }
}, cx = Na, hx = {
  clamp: (t11, e, r) => e > r ? Math.min(e, Math.max(r, t11)) : Math.min(r, Math.max(e, t11)),
  round: (t11) => Math.round(t11 * 1e10) / 1e10
}, vx = hx, dx = {
  dec2hex: (t11) => {
    const e = Math.round(t11).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
}, gx = dx, px = {
  channel: cx,
  lang: vx,
  unit: gx
}, me = px, Zt = {};
for (let t11 = 0; t11 <= 255; t11++)
  Zt[t11] = me.unit.dec2hex(t11);
const et = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class yx {
  constructor() {
    this.type = et.ALL;
  }
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = et.ALL;
  }
  is(e) {
    return this.type === e;
  }
}
const mx = yx;
class bx {
  constructor(e, r) {
    this.color = r, this.changed = false, this.data = e, this.type = new mx();
  }
  set(e, r) {
    return this.color = r, this.changed = false, this.data = e, this.type.type = et.ALL, this;
  }
  _ensureHSL() {
    const e = this.data, { h: r, s: n, l: a } = e;
    r === void 0 && (e.h = me.channel.rgb2hsl(e, "h")), n === void 0 && (e.s = me.channel.rgb2hsl(e, "s")), a === void 0 && (e.l = me.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r, g: n, b: a } = e;
    r === void 0 && (e.r = me.channel.hsl2rgb(e, "r")), n === void 0 && (e.g = me.channel.hsl2rgb(e, "g")), a === void 0 && (e.b = me.channel.hsl2rgb(e, "b"));
  }
  get r() {
    const e = this.data, r = e.r;
    return !this.type.is(et.HSL) && r !== void 0 ? r : (this._ensureHSL(), me.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, r = e.g;
    return !this.type.is(et.HSL) && r !== void 0 ? r : (this._ensureHSL(), me.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, r = e.b;
    return !this.type.is(et.HSL) && r !== void 0 ? r : (this._ensureHSL(), me.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, r = e.h;
    return !this.type.is(et.RGB) && r !== void 0 ? r : (this._ensureRGB(), me.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, r = e.s;
    return !this.type.is(et.RGB) && r !== void 0 ? r : (this._ensureRGB(), me.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, r = e.l;
    return !this.type.is(et.RGB) && r !== void 0 ? r : (this._ensureRGB(), me.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  set r(e) {
    this.type.set(et.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(et.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(et.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(et.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(et.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(et.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
}
const wx = bx, Ex = new wx({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), ks = Ex, Gf = {
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  parse: (t11) => {
    if (t11.charCodeAt(0) !== 35)
      return;
    const e = t11.match(Gf.re);
    if (!e)
      return;
    const r = e[1], n = parseInt(r, 16), a = r.length, i = a % 4 === 0, s = a > 4, o = s ? 1 : 17, u = s ? 8 : 4, l = i ? 0 : -1, f = s ? 255 : 15;
    return ks.set({
      r: (n >> u * (l + 3) & f) * o,
      g: (n >> u * (l + 2) & f) * o,
      b: (n >> u * (l + 1) & f) * o,
      a: i ? (n & f) * o / 255 : 1
    }, t11);
  },
  stringify: (t11) => {
    const { r: e, g: r, b: n, a } = t11;
    return a < 1 ? `#${Zt[Math.round(e)]}${Zt[Math.round(r)]}${Zt[Math.round(n)]}${Zt[Math.round(a * 255)]}` : `#${Zt[Math.round(e)]}${Zt[Math.round(r)]}${Zt[Math.round(n)]}`;
  }
}, Tn = Gf, Ma = {
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  _hue2deg: (t11) => {
    const e = t11.match(Ma.hueRe);
    if (e) {
      const [, r, n] = e;
      switch (n) {
        case "grad":
          return me.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return me.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return me.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return me.channel.clamp.h(parseFloat(t11));
  },
  parse: (t11) => {
    const e = t11.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const r = t11.match(Ma.re);
    if (!r)
      return;
    const [, n, a, i, s, o] = r;
    return ks.set({
      h: Ma._hue2deg(n),
      s: me.channel.clamp.s(parseFloat(a)),
      l: me.channel.clamp.l(parseFloat(i)),
      a: s ? me.channel.clamp.a(o ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t11);
  },
  stringify: (t11) => {
    const { h: e, s: r, l: n, a } = t11;
    return a < 1 ? `hsla(${me.lang.round(e)}, ${me.lang.round(r)}%, ${me.lang.round(n)}%, ${a})` : `hsl(${me.lang.round(e)}, ${me.lang.round(r)}%, ${me.lang.round(n)}%)`;
  }
}, ya = Ma, Oa = {
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  parse: (t11) => {
    t11 = t11.toLowerCase();
    const e = Oa.colors[t11];
    if (!!e)
      return Tn.parse(e);
  },
  stringify: (t11) => {
    const e = Tn.stringify(t11);
    for (const r in Oa.colors)
      if (Oa.colors[r] === e)
        return r;
  }
}, bu = Oa, zf = {
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  parse: (t11) => {
    const e = t11.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const r = t11.match(zf.re);
    if (!r)
      return;
    const [, n, a, i, s, o, u, l, f] = r;
    return ks.set({
      r: me.channel.clamp.r(a ? parseFloat(n) * 2.55 : parseFloat(n)),
      g: me.channel.clamp.g(s ? parseFloat(i) * 2.55 : parseFloat(i)),
      b: me.channel.clamp.b(u ? parseFloat(o) * 2.55 : parseFloat(o)),
      a: l ? me.channel.clamp.a(f ? parseFloat(l) / 100 : parseFloat(l)) : 1
    }, t11);
  },
  stringify: (t11) => {
    const { r: e, g: r, b: n, a } = t11;
    return a < 1 ? `rgba(${me.lang.round(e)}, ${me.lang.round(r)}, ${me.lang.round(n)}, ${me.lang.round(a)})` : `rgb(${me.lang.round(e)}, ${me.lang.round(r)}, ${me.lang.round(n)})`;
  }
}, ma = zf, xx = {
  format: {
    keyword: bu,
    hex: Tn,
    rgb: ma,
    rgba: ma,
    hsl: ya,
    hsla: ya
  },
  parse: (t11) => {
    if (typeof t11 != "string")
      return t11;
    const e = Tn.parse(t11) || ma.parse(t11) || ya.parse(t11) || bu.parse(t11);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t11}"`);
  },
  stringify: (t11) => !t11.changed && t11.color ? t11.color : t11.type.is(et.HSL) || t11.data.r === void 0 ? ya.stringify(t11) : t11.a < 1 || !Number.isInteger(t11.r) || !Number.isInteger(t11.g) || !Number.isInteger(t11.b) ? ma.stringify(t11) : Tn.stringify(t11)
}, es = xx, Tx = (t11) => {
  const { r: e, g: r, b: n } = es.parse(t11), a = 0.2126 * me.channel.toLinear(e) + 0.7152 * me.channel.toLinear(r) + 0.0722 * me.channel.toLinear(n);
  return me.lang.round(a);
}, Cx = Tx, Dx = (t11) => Cx(t11) >= 0.5, Sx = Dx, Lx = (t11) => !Sx(t11), Ax = Lx, Nx = (t11, e, r) => {
  const n = es.parse(t11), a = n[e], i = me.channel.clamp[e](a + r);
  return a !== i && (n[e] = i), es.stringify(n);
}, Hf = Nx, Mx = (t11, e) => Hf(t11, "l", e), Ox = Mx, Ix = (t11, e) => Hf(t11, "l", -e), kx = Ix, Rx = (t11) => {
  let e = "";
  for (let r = 0; r < t11.THEME_COLOR_LIMIT; r++)
    t11["lineColor" + r] = t11["lineColor" + r] || t11["cScaleInv" + r], Ax(t11["lineColor" + r]) ? t11["lineColor" + r] = Ox(t11["lineColor" + r], 20) : t11["lineColor" + r] = kx(t11["lineColor" + r], 20);
  for (let r = 0; r < t11.THEME_COLOR_LIMIT; r++) {
    const n = "" + (17 - 3 * r);
    e += `
    .section-${r - 1} rect, .section-${r - 1} path, .section-${r - 1} circle, .section-${r - 1} polygon, .section-${r - 1} path  {
      fill: ${t11["cScale" + r]};
    }
    .section-${r - 1} text {
     fill: ${t11["cScaleLabel" + r]};
    }
    .node-icon-${r - 1} {
      font-size: 40px;
      color: ${t11["cScaleLabel" + r]};
    }
    .section-edge-${r - 1}{
      stroke: ${t11["cScale" + r]};
    }
    .edge-depth-${r - 1}{
      stroke-width: ${n};
    }
    .section-${r - 1} line {
      stroke: ${t11["cScaleInv" + r]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return e;
}, Px = (t11) => `
  .edge {
    stroke-width: 3;
  }
  ${Rx(t11)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t11.git0};
  }
  .section-root text {
    fill: ${t11.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
`, Bx = Px, Fx = {
  db: lc,
  renderer: fx,
  parser: Jf,
  styles: Bx,
  injectUtils: jf
};
export {
  Fx as diagram
};
