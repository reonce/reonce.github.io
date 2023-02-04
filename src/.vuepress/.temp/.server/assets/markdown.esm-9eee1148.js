function e() {
  return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
let t = { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
const n = /[&<>"']/, r = /[&<>"']/g, s = /[<>"']|&(?!#?\w+;)/, i = /[<>"']|&(?!#?\w+;)/g, l = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, a = (e2) => l[e2];
function o(e2, t2) {
  if (t2) {
    if (n.test(e2))
      return e2.replace(r, a);
  } else if (s.test(e2))
    return e2.replace(i, a);
  return e2;
}
const c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function h(e2) {
  return e2.replace(c, (e3, t2) => "colon" === (t2 = t2.toLowerCase()) ? ":" : "#" === t2.charAt(0) ? "x" === t2.charAt(1) ? String.fromCharCode(parseInt(t2.substring(2), 16)) : String.fromCharCode(+t2.substring(1)) : "");
}
const p = /(^|[^\[])\^/g;
function u(e2, t2) {
  e2 = e2.source || e2, t2 = t2 || "";
  const n2 = { replace: (t3, r2) => (r2 = (r2 = r2.source || r2).replace(p, "$1"), e2 = e2.replace(t3, r2), n2), getRegex: () => new RegExp(e2, t2) };
  return n2;
}
const g = /[^\w:]/g, d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function f(e2, t2, n2) {
  if (e2) {
    let e3;
    try {
      e3 = decodeURIComponent(h(n2)).replace(g, "").toLowerCase();
    } catch (e4) {
      return null;
    }
    if (0 === e3.indexOf("javascript:") || 0 === e3.indexOf("vbscript:") || 0 === e3.indexOf("data:"))
      return null;
  }
  t2 && !d.test(n2) && (n2 = function(e3, t3) {
    k[" " + e3] || (x.test(e3) ? k[" " + e3] = e3 + "/" : k[" " + e3] = z(e3, "/", true));
    const n3 = -1 === (e3 = k[" " + e3]).indexOf(":");
    return "//" === t3.substring(0, 2) ? n3 ? t3 : e3.replace(m, "$1") + t3 : "/" === t3.charAt(0) ? n3 ? t3 : e3.replace(b, "$1") + t3 : e3 + t3;
  }(t2, n2));
  try {
    n2 = encodeURI(n2).replace(/%25/g, "%");
  } catch (e3) {
    return null;
  }
  return n2;
}
const k = {}, x = /^[^:]+:\/*[^/]*$/, m = /^([^:]+:)[\s\S]*$/, b = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const w = { exec: function() {
} };
function _(e2) {
  let t2, n2, r2 = 1;
  for (; r2 < arguments.length; r2++)
    for (n2 in t2 = arguments[r2], t2)
      Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
  return e2;
}
function y(e2, t2) {
  const n2 = e2.replace(/\|/g, (e3, t3, n3) => {
    let r3 = false, s2 = t3;
    for (; --s2 >= 0 && "\\" === n3[s2]; )
      r3 = !r3;
    return r3 ? "|" : " |";
  }).split(/ \|/);
  let r2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !n2[n2.length - 1].trim() && n2.pop(), n2.length > t2)
    n2.splice(t2);
  else
    for (; n2.length < t2; )
      n2.push("");
  for (; r2 < n2.length; r2++)
    n2[r2] = n2[r2].trim().replace(/\\\|/g, "|");
  return n2;
}
function z(e2, t2, n2) {
  const r2 = e2.length;
  if (0 === r2)
    return "";
  let s2 = 0;
  for (; s2 < r2; ) {
    const i2 = e2.charAt(r2 - s2 - 1);
    if (i2 !== t2 || n2) {
      if (i2 === t2 || !n2)
        break;
      s2++;
    } else
      s2++;
  }
  return e2.substr(0, r2 - s2);
}
function S(e2) {
  e2 && e2.sanitize && !e2.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function $(e2, t2) {
  if (t2 < 1)
    return "";
  let n2 = "";
  for (; t2 > 1; )
    1 & t2 && (n2 += e2), t2 >>= 1, e2 += e2;
  return n2 + e2;
}
function T(e2, t2, n2, r2) {
  const s2 = t2.href, i2 = t2.title ? o(t2.title) : null, l2 = e2[1].replace(/\\([\[\]])/g, "$1");
  if ("!" !== e2[0].charAt(0)) {
    r2.state.inLink = true;
    const e3 = { type: "link", raw: n2, href: s2, title: i2, text: l2, tokens: r2.inlineTokens(l2, []) };
    return r2.state.inLink = false, e3;
  }
  return { type: "image", raw: n2, href: s2, title: i2, text: o(l2) };
}
class A {
  constructor(e2) {
    this.options = e2 || t;
  }
  space(e2) {
    const t2 = this.rules.block.newline.exec(e2);
    if (t2 && t2[0].length > 0)
      return { type: "space", raw: t2[0] };
  }
  code(e2) {
    const t2 = this.rules.block.code.exec(e2);
    if (t2) {
      const e3 = t2[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? e3 : z(e3, "\n") };
    }
  }
  fences(e2) {
    const t2 = this.rules.block.fences.exec(e2);
    if (t2) {
      const e3 = t2[0], n2 = function(e4, t3) {
        const n3 = e4.match(/^(\s+)(?:```)/);
        if (null === n3)
          return t3;
        const r2 = n3[1];
        return t3.split("\n").map((e5) => {
          const t4 = e5.match(/^\s+/);
          if (null === t4)
            return e5;
          const [n4] = t4;
          return n4.length >= r2.length ? e5.slice(r2.length) : e5;
        }).join("\n");
      }(e3, t2[3] || "");
      return { type: "code", raw: e3, lang: t2[2] ? t2[2].trim() : t2[2], text: n2 };
    }
  }
  heading(e2) {
    const t2 = this.rules.block.heading.exec(e2);
    if (t2) {
      let e3 = t2[2].trim();
      if (/#$/.test(e3)) {
        const t3 = z(e3, "#");
        this.options.pedantic ? e3 = t3.trim() : t3 && !/ $/.test(t3) || (e3 = t3.trim());
      }
      const n2 = { type: "heading", raw: t2[0], depth: t2[1].length, text: e3, tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  }
  hr(e2) {
    const t2 = this.rules.block.hr.exec(e2);
    if (t2)
      return { type: "hr", raw: t2[0] };
  }
  blockquote(e2) {
    const t2 = this.rules.block.blockquote.exec(e2);
    if (t2) {
      const e3 = t2[0].replace(/^ *> ?/gm, "");
      return { type: "blockquote", raw: t2[0], tokens: this.lexer.blockTokens(e3, []), text: e3 };
    }
  }
  list(e2) {
    let t2 = this.rules.block.list.exec(e2);
    if (t2) {
      let n2, r2, s2, i2, l2, a2, o2, c2, h2, p2, u2, g2, d2 = t2[1].trim();
      const f2 = d2.length > 1, k2 = { type: "list", raw: "", ordered: f2, start: f2 ? +d2.slice(0, -1) : "", loose: false, items: [] };
      d2 = f2 ? `\\d{1,9}\\${d2.slice(-1)}` : `\\${d2}`, this.options.pedantic && (d2 = f2 ? d2 : "[*+-]");
      const x2 = new RegExp(`^( {0,3}${d2})((?: [^\\n]*)?(?:\\n|$))`);
      for (; e2 && (g2 = false, t2 = x2.exec(e2)) && !this.rules.block.hr.test(e2); ) {
        if (n2 = t2[0], e2 = e2.substring(n2.length), c2 = t2[2].split("\n", 1)[0], h2 = e2.split("\n", 1)[0], this.options.pedantic ? (i2 = 2, u2 = c2.trimLeft()) : (i2 = t2[2].search(/[^ ]/), i2 = i2 > 4 ? 1 : i2, u2 = c2.slice(i2), i2 += t2[1].length), a2 = false, !c2 && /^ *$/.test(h2) && (n2 += h2 + "\n", e2 = e2.substring(h2.length + 1), g2 = true), !g2) {
          const t3 = new RegExp(`^ {0,${Math.min(3, i2 - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          for (; e2 && (p2 = e2.split("\n", 1)[0], c2 = p2, this.options.pedantic && (c2 = c2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !t3.test(c2)); ) {
            if (c2.search(/[^ ]/) >= i2 || !c2.trim())
              u2 += "\n" + c2.slice(i2);
            else {
              if (a2)
                break;
              u2 += "\n" + c2;
            }
            a2 || c2.trim() || (a2 = true), n2 += p2 + "\n", e2 = e2.substring(p2.length + 1);
          }
        }
        k2.loose || (o2 ? k2.loose = true : /\n *\n *$/.test(n2) && (o2 = true)), this.options.gfm && (r2 = /^\[[ xX]\] /.exec(u2), r2 && (s2 = "[ ] " !== r2[0], u2 = u2.replace(/^\[[ xX]\] +/, ""))), k2.items.push({ type: "list_item", raw: n2, task: !!r2, checked: s2, loose: false, text: u2 }), k2.raw += n2;
      }
      k2.items[k2.items.length - 1].raw = n2.trimRight(), k2.items[k2.items.length - 1].text = u2.trimRight(), k2.raw = k2.raw.trimRight();
      const m2 = k2.items.length;
      for (l2 = 0; l2 < m2; l2++) {
        this.lexer.state.top = false, k2.items[l2].tokens = this.lexer.blockTokens(k2.items[l2].text, []);
        const e3 = k2.items[l2].tokens.filter((e4) => "space" === e4.type), t3 = e3.every((e4) => {
          const t4 = e4.raw.split("");
          let n3 = 0;
          for (const e5 of t4)
            if ("\n" === e5 && (n3 += 1), n3 > 1)
              return true;
          return false;
        });
        !k2.loose && e3.length && t3 && (k2.loose = true, k2.items[l2].loose = true);
      }
      return k2;
    }
  }
  html(e2) {
    const t2 = this.rules.block.html.exec(e2);
    if (t2) {
      const e3 = { type: "html", raw: t2[0], pre: !this.options.sanitizer && ("pre" === t2[1] || "script" === t2[1] || "style" === t2[1]), text: t2[0] };
      return this.options.sanitize && (e3.type = "paragraph", e3.text = this.options.sanitizer ? this.options.sanitizer(t2[0]) : o(t2[0]), e3.tokens = [], this.lexer.inline(e3.text, e3.tokens)), e3;
    }
  }
  def(e2) {
    const t2 = this.rules.block.def.exec(e2);
    if (t2) {
      t2[3] && (t2[3] = t2[3].substring(1, t2[3].length - 1));
      return { type: "def", tag: t2[1].toLowerCase().replace(/\s+/g, " "), raw: t2[0], href: t2[2], title: t2[3] };
    }
  }
  table(e2) {
    const t2 = this.rules.block.table.exec(e2);
    if (t2) {
      const e3 = { type: "table", header: y(t2[1]).map((e4) => ({ text: e4 })), align: t2[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t2[3] && t2[3].trim() ? t2[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
      if (e3.header.length === e3.align.length) {
        e3.raw = t2[0];
        let n2, r2, s2, i2, l2 = e3.align.length;
        for (n2 = 0; n2 < l2; n2++)
          /^ *-+: *$/.test(e3.align[n2]) ? e3.align[n2] = "right" : /^ *:-+: *$/.test(e3.align[n2]) ? e3.align[n2] = "center" : /^ *:-+ *$/.test(e3.align[n2]) ? e3.align[n2] = "left" : e3.align[n2] = null;
        for (l2 = e3.rows.length, n2 = 0; n2 < l2; n2++)
          e3.rows[n2] = y(e3.rows[n2], e3.header.length).map((e4) => ({ text: e4 }));
        for (l2 = e3.header.length, r2 = 0; r2 < l2; r2++)
          e3.header[r2].tokens = [], this.lexer.inlineTokens(e3.header[r2].text, e3.header[r2].tokens);
        for (l2 = e3.rows.length, r2 = 0; r2 < l2; r2++)
          for (i2 = e3.rows[r2], s2 = 0; s2 < i2.length; s2++)
            i2[s2].tokens = [], this.lexer.inlineTokens(i2[s2].text, i2[s2].tokens);
        return e3;
      }
    }
  }
  lheading(e2) {
    const t2 = this.rules.block.lheading.exec(e2);
    if (t2) {
      const e3 = { type: "heading", raw: t2[0], depth: "=" === t2[2].charAt(0) ? 1 : 2, text: t2[1], tokens: [] };
      return this.lexer.inline(e3.text, e3.tokens), e3;
    }
  }
  paragraph(e2) {
    const t2 = this.rules.block.paragraph.exec(e2);
    if (t2) {
      const e3 = { type: "paragraph", raw: t2[0], text: "\n" === t2[1].charAt(t2[1].length - 1) ? t2[1].slice(0, -1) : t2[1], tokens: [] };
      return this.lexer.inline(e3.text, e3.tokens), e3;
    }
  }
  text(e2) {
    const t2 = this.rules.block.text.exec(e2);
    if (t2) {
      const e3 = { type: "text", raw: t2[0], text: t2[0], tokens: [] };
      return this.lexer.inline(e3.text, e3.tokens), e3;
    }
  }
  escape(e2) {
    const t2 = this.rules.inline.escape.exec(e2);
    if (t2)
      return { type: "escape", raw: t2[0], text: o(t2[1]) };
  }
  tag(e2) {
    const t2 = this.rules.inline.tag.exec(e2);
    if (t2)
      return !this.lexer.state.inLink && /^<a /i.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t2[0]) : o(t2[0]) : t2[0] };
  }
  link(e2) {
    const t2 = this.rules.inline.link.exec(e2);
    if (t2) {
      const e3 = t2[2].trim();
      if (!this.options.pedantic && /^</.test(e3)) {
        if (!/>$/.test(e3))
          return;
        const t3 = z(e3.slice(0, -1), "\\");
        if ((e3.length - t3.length) % 2 == 0)
          return;
      } else {
        const e4 = function(e5, t3) {
          if (-1 === e5.indexOf(t3[1]))
            return -1;
          const n3 = e5.length;
          let r3 = 0, s2 = 0;
          for (; s2 < n3; s2++)
            if ("\\" === e5[s2])
              s2++;
            else if (e5[s2] === t3[0])
              r3++;
            else if (e5[s2] === t3[1] && (r3--, r3 < 0))
              return s2;
          return -1;
        }(t2[2], "()");
        if (e4 > -1) {
          const n3 = (0 === t2[0].indexOf("!") ? 5 : 4) + t2[1].length + e4;
          t2[2] = t2[2].substring(0, e4), t2[0] = t2[0].substring(0, n3).trim(), t2[3] = "";
        }
      }
      let n2 = t2[2], r2 = "";
      if (this.options.pedantic) {
        const e4 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n2);
        e4 && (n2 = e4[1], r2 = e4[3]);
      } else
        r2 = t2[3] ? t2[3].slice(1, -1) : "";
      return n2 = n2.trim(), /^</.test(n2) && (n2 = this.options.pedantic && !/>$/.test(e3) ? n2.slice(1) : n2.slice(1, -1)), T(t2, { href: n2 ? n2.replace(this.rules.inline._escapes, "$1") : n2, title: r2 ? r2.replace(this.rules.inline._escapes, "$1") : r2 }, t2[0], this.lexer);
    }
  }
  reflink(e2, t2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(e2)) || (n2 = this.rules.inline.nolink.exec(e2))) {
      let e3 = (n2[2] || n2[1]).replace(/\s+/g, " ");
      if (e3 = t2[e3.toLowerCase()], !e3 || !e3.href) {
        const e4 = n2[0].charAt(0);
        return { type: "text", raw: e4, text: e4 };
      }
      return T(n2, e3, n2[0], this.lexer);
    }
  }
  emStrong(e2, t2, n2 = "") {
    let r2 = this.rules.inline.emStrong.lDelim.exec(e2);
    if (!r2)
      return;
    if (r2[3] && n2.match(/[\p{L}\p{N}]/u))
      return;
    const s2 = r2[1] || r2[2] || "";
    if (!s2 || s2 && ("" === n2 || this.rules.inline.punctuation.exec(n2))) {
      const n3 = r2[0].length - 1;
      let s3, i2, l2 = n3, a2 = 0;
      const o2 = "*" === r2[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (o2.lastIndex = 0, t2 = t2.slice(-1 * e2.length + n3); null != (r2 = o2.exec(t2)); ) {
        if (s3 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6], !s3)
          continue;
        if (i2 = s3.length, r2[3] || r2[4]) {
          l2 += i2;
          continue;
        }
        if ((r2[5] || r2[6]) && n3 % 3 && !((n3 + i2) % 3)) {
          a2 += i2;
          continue;
        }
        if (l2 -= i2, l2 > 0)
          continue;
        if (i2 = Math.min(i2, i2 + l2 + a2), Math.min(n3, i2) % 2) {
          const t4 = e2.slice(1, n3 + r2.index + i2);
          return { type: "em", raw: e2.slice(0, n3 + r2.index + i2 + 1), text: t4, tokens: this.lexer.inlineTokens(t4, []) };
        }
        const t3 = e2.slice(2, n3 + r2.index + i2 - 1);
        return { type: "strong", raw: e2.slice(0, n3 + r2.index + i2 + 1), text: t3, tokens: this.lexer.inlineTokens(t3, []) };
      }
    }
  }
  codespan(e2) {
    const t2 = this.rules.inline.code.exec(e2);
    if (t2) {
      let e3 = t2[2].replace(/\n/g, " ");
      const n2 = /[^ ]/.test(e3), r2 = /^ /.test(e3) && / $/.test(e3);
      return n2 && r2 && (e3 = e3.substring(1, e3.length - 1)), e3 = o(e3, true), { type: "codespan", raw: t2[0], text: e3 };
    }
  }
  br(e2) {
    const t2 = this.rules.inline.br.exec(e2);
    if (t2)
      return { type: "br", raw: t2[0] };
  }
  del(e2) {
    const t2 = this.rules.inline.del.exec(e2);
    if (t2)
      return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2], []) };
  }
  autolink(e2, t2) {
    const n2 = this.rules.inline.autolink.exec(e2);
    if (n2) {
      let e3, r2;
      return "@" === n2[2] ? (e3 = o(this.options.mangle ? t2(n2[1]) : n2[1]), r2 = "mailto:" + e3) : (e3 = o(n2[1]), r2 = e3), { type: "link", raw: n2[0], text: e3, href: r2, tokens: [{ type: "text", raw: e3, text: e3 }] };
    }
  }
  url(e2, t2) {
    let n2;
    if (n2 = this.rules.inline.url.exec(e2)) {
      let e3, r2;
      if ("@" === n2[2])
        e3 = o(this.options.mangle ? t2(n2[0]) : n2[0]), r2 = "mailto:" + e3;
      else {
        let t3;
        do {
          t3 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0];
        } while (t3 !== n2[0]);
        e3 = o(n2[0]), r2 = "www." === n2[1] ? "http://" + e3 : e3;
      }
      return { type: "link", raw: n2[0], text: e3, href: r2, tokens: [{ type: "text", raw: e3, text: e3 }] };
    }
  }
  inlineText(e2, t2) {
    const n2 = this.rules.inline.text.exec(e2);
    if (n2) {
      let e3;
      return e3 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n2[0]) : o(n2[0]) : n2[0] : o(this.options.smartypants ? t2(n2[0]) : n2[0]), { type: "text", raw: n2[0], text: e3 };
    }
  }
}
const R = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: w, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
R.def = u(R.def).replace("label", R._label).replace("title", R._title).getRegex(), R.bullet = /(?:[*+-]|\d{1,9}[.)])/, R.listItemStart = u(/^( *)(bull) */).replace("bull", R.bullet).getRegex(), R.list = u(R.list).replace(/bull/g, R.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + R.def.source + ")").getRegex(), R._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", R._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, R.html = u(R.html, "i").replace("comment", R._comment).replace("tag", R._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), R.paragraph = u(R._paragraph).replace("hr", R.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R._tag).getRegex(), R.blockquote = u(R.blockquote).replace("paragraph", R.paragraph).getRegex(), R.normal = _({}, R), R.gfm = _({}, R.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), R.gfm.table = u(R.gfm.table).replace("hr", R.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R._tag).getRegex(), R.gfm.paragraph = u(R._paragraph).replace("hr", R.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", R.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", R._tag).getRegex(), R.pedantic = _({}, R.normal, { html: u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", R._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: w, paragraph: u(R.normal._paragraph).replace("hr", R.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", R.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
const v = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: w, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: w, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
function E(e2) {
  return e2.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function I(e2) {
  let t2, n2, r2 = "";
  const s2 = e2.length;
  for (t2 = 0; t2 < s2; t2++)
    n2 = e2.charCodeAt(t2), Math.random() > 0.5 && (n2 = "x" + n2.toString(16)), r2 += "&#" + n2 + ";";
  return r2;
}
v._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", v.punctuation = u(v.punctuation).replace(/punctuation/g, v._punctuation).getRegex(), v.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, v.escapedEmSt = /\\\*|\\_/g, v._comment = u(R._comment).replace("(?:-->|$)", "-->").getRegex(), v.emStrong.lDelim = u(v.emStrong.lDelim).replace(/punct/g, v._punctuation).getRegex(), v.emStrong.rDelimAst = u(v.emStrong.rDelimAst, "g").replace(/punct/g, v._punctuation).getRegex(), v.emStrong.rDelimUnd = u(v.emStrong.rDelimUnd, "g").replace(/punct/g, v._punctuation).getRegex(), v._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, v._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, v._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, v.autolink = u(v.autolink).replace("scheme", v._scheme).replace("email", v._email).getRegex(), v._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, v.tag = u(v.tag).replace("comment", v._comment).replace("attribute", v._attribute).getRegex(), v._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, v._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, v.link = u(v.link).replace("label", v._label).replace("href", v._href).replace("title", v._title).getRegex(), v.reflink = u(v.reflink).replace("label", v._label).replace("ref", R._label).getRegex(), v.nolink = u(v.nolink).replace("ref", R._label).getRegex(), v.reflinkSearch = u(v.reflinkSearch, "g").replace("reflink", v.reflink).replace("nolink", v.nolink).getRegex(), v.normal = _({}, v), v.pedantic = _({}, v.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: u(/^!?\[(label)\]\((.*?)\)/).replace("label", v._label).getRegex(), reflink: u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", v._label).getRegex() }), v.gfm = _({}, v.normal, { escape: u(v.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), v.gfm.url = u(v.gfm.url, "i").replace("email", v.gfm._extended_email).getRegex(), v.breaks = _({}, v.gfm, { br: u(v.br).replace("{2,}", "*").getRegex(), text: u(v.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
class q {
  constructor(e2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e2 || t, this.options.tokenizer = this.options.tokenizer || new A(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    const n2 = { block: R.normal, inline: v.normal };
    this.options.pedantic ? (n2.block = R.pedantic, n2.inline = v.pedantic) : this.options.gfm && (n2.block = R.gfm, this.options.breaks ? n2.inline = v.breaks : n2.inline = v.gfm), this.tokenizer.rules = n2;
  }
  static get rules() {
    return { block: R, inline: v };
  }
  static lex(e2, t2) {
    return new q(t2).lex(e2);
  }
  static lexInline(e2, t2) {
    return new q(t2).inlineTokens(e2);
  }
  lex(e2) {
    let t2;
    for (e2 = e2.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e2, this.tokens); t2 = this.inlineQueue.shift(); )
      this.inlineTokens(t2.src, t2.tokens);
    return this.tokens;
  }
  blockTokens(e2, t2 = []) {
    let n2, r2, s2, i2;
    for (this.options.pedantic && (e2 = e2.replace(/^ +$/gm, "")); e2; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((r3) => !!(n2 = r3.call({ lexer: this }, e2, t2)) && (e2 = e2.substring(n2.raw.length), t2.push(n2), true))))
        if (n2 = this.tokenizer.space(e2))
          e2 = e2.substring(n2.raw.length), 1 === n2.raw.length && t2.length > 0 ? t2[t2.length - 1].raw += "\n" : t2.push(n2);
        else if (n2 = this.tokenizer.code(e2))
          e2 = e2.substring(n2.raw.length), r2 = t2[t2.length - 1], !r2 || "paragraph" !== r2.type && "text" !== r2.type ? t2.push(n2) : (r2.raw += "\n" + n2.raw, r2.text += "\n" + n2.text, this.inlineQueue[this.inlineQueue.length - 1].src = r2.text);
        else if (n2 = this.tokenizer.fences(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.heading(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.hr(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.blockquote(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.list(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.html(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.def(e2))
          e2 = e2.substring(n2.raw.length), r2 = t2[t2.length - 1], !r2 || "paragraph" !== r2.type && "text" !== r2.type ? this.tokens.links[n2.tag] || (this.tokens.links[n2.tag] = { href: n2.href, title: n2.title }) : (r2.raw += "\n" + n2.raw, r2.text += "\n" + n2.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r2.text);
        else if (n2 = this.tokenizer.table(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.lheading(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else {
          if (s2 = e2, this.options.extensions && this.options.extensions.startBlock) {
            let t3 = 1 / 0;
            const n3 = e2.slice(1);
            let r3;
            this.options.extensions.startBlock.forEach(function(e3) {
              r3 = e3.call({ lexer: this }, n3), "number" == typeof r3 && r3 >= 0 && (t3 = Math.min(t3, r3));
            }), t3 < 1 / 0 && t3 >= 0 && (s2 = e2.substring(0, t3 + 1));
          }
          if (this.state.top && (n2 = this.tokenizer.paragraph(s2)))
            r2 = t2[t2.length - 1], i2 && "paragraph" === r2.type ? (r2.raw += "\n" + n2.raw, r2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r2.text) : t2.push(n2), i2 = s2.length !== e2.length, e2 = e2.substring(n2.raw.length);
          else if (n2 = this.tokenizer.text(e2))
            e2 = e2.substring(n2.raw.length), r2 = t2[t2.length - 1], r2 && "text" === r2.type ? (r2.raw += "\n" + n2.raw, r2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r2.text) : t2.push(n2);
          else if (e2) {
            const t3 = "Infinite loop on byte: " + e2.charCodeAt(0);
            if (this.options.silent) {
              console.error(t3);
              break;
            }
            throw new Error(t3);
          }
        }
    return this.state.top = true, t2;
  }
  inline(e2, t2) {
    this.inlineQueue.push({ src: e2, tokens: t2 });
  }
  inlineTokens(e2, t2 = []) {
    let n2, r2, s2, i2, l2, a2, o2 = e2;
    if (this.tokens.links) {
      const e3 = Object.keys(this.tokens.links);
      if (e3.length > 0)
        for (; null != (i2 = this.tokenizer.rules.inline.reflinkSearch.exec(o2)); )
          e3.includes(i2[0].slice(i2[0].lastIndexOf("[") + 1, -1)) && (o2 = o2.slice(0, i2.index) + "[" + $("a", i2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; null != (i2 = this.tokenizer.rules.inline.blockSkip.exec(o2)); )
      o2 = o2.slice(0, i2.index) + "[" + $("a", i2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; null != (i2 = this.tokenizer.rules.inline.escapedEmSt.exec(o2)); )
      o2 = o2.slice(0, i2.index) + "++" + o2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; e2; )
      if (l2 || (a2 = ""), l2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((r3) => !!(n2 = r3.call({ lexer: this }, e2, t2)) && (e2 = e2.substring(n2.raw.length), t2.push(n2), true))))
        if (n2 = this.tokenizer.escape(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.tag(e2))
          e2 = e2.substring(n2.raw.length), r2 = t2[t2.length - 1], r2 && "text" === n2.type && "text" === r2.type ? (r2.raw += n2.raw, r2.text += n2.text) : t2.push(n2);
        else if (n2 = this.tokenizer.link(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.reflink(e2, this.tokens.links))
          e2 = e2.substring(n2.raw.length), r2 = t2[t2.length - 1], r2 && "text" === n2.type && "text" === r2.type ? (r2.raw += n2.raw, r2.text += n2.text) : t2.push(n2);
        else if (n2 = this.tokenizer.emStrong(e2, o2, a2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.codespan(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.br(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.del(e2))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (n2 = this.tokenizer.autolink(e2, I))
          e2 = e2.substring(n2.raw.length), t2.push(n2);
        else if (this.state.inLink || !(n2 = this.tokenizer.url(e2, I))) {
          if (s2 = e2, this.options.extensions && this.options.extensions.startInline) {
            let t3 = 1 / 0;
            const n3 = e2.slice(1);
            let r3;
            this.options.extensions.startInline.forEach(function(e3) {
              r3 = e3.call({ lexer: this }, n3), "number" == typeof r3 && r3 >= 0 && (t3 = Math.min(t3, r3));
            }), t3 < 1 / 0 && t3 >= 0 && (s2 = e2.substring(0, t3 + 1));
          }
          if (n2 = this.tokenizer.inlineText(s2, E))
            e2 = e2.substring(n2.raw.length), "_" !== n2.raw.slice(-1) && (a2 = n2.raw.slice(-1)), l2 = true, r2 = t2[t2.length - 1], r2 && "text" === r2.type ? (r2.raw += n2.raw, r2.text += n2.text) : t2.push(n2);
          else if (e2) {
            const t3 = "Infinite loop on byte: " + e2.charCodeAt(0);
            if (this.options.silent) {
              console.error(t3);
              break;
            }
            throw new Error(t3);
          }
        } else
          e2 = e2.substring(n2.raw.length), t2.push(n2);
    return t2;
  }
}
class L {
  constructor(e2) {
    this.options = e2 || t;
  }
  code(e2, t2, n2) {
    const r2 = (t2 || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const t3 = this.options.highlight(e2, r2);
      null != t3 && t3 !== e2 && (n2 = true, e2 = t3);
    }
    return e2 = e2.replace(/\n$/, "") + "\n", r2 ? '<pre><code class="' + this.options.langPrefix + o(r2, true) + '">' + (n2 ? e2 : o(e2, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? e2 : o(e2, true)) + "</code></pre>\n";
  }
  blockquote(e2) {
    return "<blockquote>\n" + e2 + "</blockquote>\n";
  }
  html(e2) {
    return e2;
  }
  heading(e2, t2, n2, r2) {
    return this.options.headerIds ? "<h" + t2 + ' id="' + this.options.headerPrefix + r2.slug(n2) + '">' + e2 + "</h" + t2 + ">\n" : "<h" + t2 + ">" + e2 + "</h" + t2 + ">\n";
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(e2, t2, n2) {
    const r2 = t2 ? "ol" : "ul";
    return "<" + r2 + (t2 && 1 !== n2 ? ' start="' + n2 + '"' : "") + ">\n" + e2 + "</" + r2 + ">\n";
  }
  listitem(e2) {
    return "<li>" + e2 + "</li>\n";
  }
  checkbox(e2) {
    return "<input " + (e2 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(e2) {
    return "<p>" + e2 + "</p>\n";
  }
  table(e2, t2) {
    return t2 && (t2 = "<tbody>" + t2 + "</tbody>"), "<table>\n<thead>\n" + e2 + "</thead>\n" + t2 + "</table>\n";
  }
  tablerow(e2) {
    return "<tr>\n" + e2 + "</tr>\n";
  }
  tablecell(e2, t2) {
    const n2 = t2.header ? "th" : "td";
    return (t2.align ? "<" + n2 + ' align="' + t2.align + '">' : "<" + n2 + ">") + e2 + "</" + n2 + ">\n";
  }
  strong(e2) {
    return "<strong>" + e2 + "</strong>";
  }
  em(e2) {
    return "<em>" + e2 + "</em>";
  }
  codespan(e2) {
    return "<code>" + e2 + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(e2) {
    return "<del>" + e2 + "</del>";
  }
  link(e2, t2, n2) {
    if (null === (e2 = f(this.options.sanitize, this.options.baseUrl, e2)))
      return n2;
    let r2 = '<a href="' + o(e2) + '"';
    return t2 && (r2 += ' title="' + t2 + '"'), r2 += ">" + n2 + "</a>", r2;
  }
  image(e2, t2, n2) {
    if (null === (e2 = f(this.options.sanitize, this.options.baseUrl, e2)))
      return n2;
    let r2 = '<img src="' + e2 + '" alt="' + n2 + '"';
    return t2 && (r2 += ' title="' + t2 + '"'), r2 += this.options.xhtml ? "/>" : ">", r2;
  }
  text(e2) {
    return e2;
  }
}
class C {
  strong(e2) {
    return e2;
  }
  em(e2) {
    return e2;
  }
  codespan(e2) {
    return e2;
  }
  del(e2) {
    return e2;
  }
  html(e2) {
    return e2;
  }
  text(e2) {
    return e2;
  }
  link(e2, t2, n2) {
    return "" + n2;
  }
  image(e2, t2, n2) {
    return "" + n2;
  }
  br() {
    return "";
  }
}
class Z {
  constructor() {
    this.seen = {};
  }
  serialize(e2) {
    return e2.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(e2, t2) {
    let n2 = e2, r2 = 0;
    if (this.seen.hasOwnProperty(n2)) {
      r2 = this.seen[e2];
      do {
        r2++, n2 = e2 + "-" + r2;
      } while (this.seen.hasOwnProperty(n2));
    }
    return t2 || (this.seen[e2] = r2, this.seen[n2] = 0), n2;
  }
  slug(e2, t2 = {}) {
    const n2 = this.serialize(e2);
    return this.getNextSafeSlug(n2, t2.dryrun);
  }
}
class O {
  constructor(e2) {
    this.options = e2 || t, this.options.renderer = this.options.renderer || new L(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new C(), this.slugger = new Z();
  }
  static parse(e2, t2) {
    return new O(t2).parse(e2);
  }
  static parseInline(e2, t2) {
    return new O(t2).parseInline(e2);
  }
  parse(e2, t2 = true) {
    let n2, r2, s2, i2, l2, a2, o2, c2, p2, u2, g2, d2, f2, k2, x2, m2, b2, w2, _2, y2 = "";
    const z2 = e2.length;
    for (n2 = 0; n2 < z2; n2++)
      if (u2 = e2[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[u2.type] && (_2 = this.options.extensions.renderers[u2.type].call({ parser: this }, u2), false !== _2 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(u2.type)))
        y2 += _2 || "";
      else
        switch (u2.type) {
          case "space":
            continue;
          case "hr":
            y2 += this.renderer.hr();
            continue;
          case "heading":
            y2 += this.renderer.heading(this.parseInline(u2.tokens), u2.depth, h(this.parseInline(u2.tokens, this.textRenderer)), this.slugger);
            continue;
          case "code":
            y2 += this.renderer.code(u2.text, u2.lang, u2.escaped);
            continue;
          case "table":
            for (c2 = "", o2 = "", i2 = u2.header.length, r2 = 0; r2 < i2; r2++)
              o2 += this.renderer.tablecell(this.parseInline(u2.header[r2].tokens), { header: true, align: u2.align[r2] });
            for (c2 += this.renderer.tablerow(o2), p2 = "", i2 = u2.rows.length, r2 = 0; r2 < i2; r2++) {
              for (a2 = u2.rows[r2], o2 = "", l2 = a2.length, s2 = 0; s2 < l2; s2++)
                o2 += this.renderer.tablecell(this.parseInline(a2[s2].tokens), { header: false, align: u2.align[s2] });
              p2 += this.renderer.tablerow(o2);
            }
            y2 += this.renderer.table(c2, p2);
            continue;
          case "blockquote":
            p2 = this.parse(u2.tokens), y2 += this.renderer.blockquote(p2);
            continue;
          case "list":
            for (g2 = u2.ordered, d2 = u2.start, f2 = u2.loose, i2 = u2.items.length, p2 = "", r2 = 0; r2 < i2; r2++)
              x2 = u2.items[r2], m2 = x2.checked, b2 = x2.task, k2 = "", x2.task && (w2 = this.renderer.checkbox(m2), f2 ? x2.tokens.length > 0 && "paragraph" === x2.tokens[0].type ? (x2.tokens[0].text = w2 + " " + x2.tokens[0].text, x2.tokens[0].tokens && x2.tokens[0].tokens.length > 0 && "text" === x2.tokens[0].tokens[0].type && (x2.tokens[0].tokens[0].text = w2 + " " + x2.tokens[0].tokens[0].text)) : x2.tokens.unshift({ type: "text", text: w2 }) : k2 += w2), k2 += this.parse(x2.tokens, f2), p2 += this.renderer.listitem(k2, b2, m2);
            y2 += this.renderer.list(p2, g2, d2);
            continue;
          case "html":
            y2 += this.renderer.html(u2.text);
            continue;
          case "paragraph":
            y2 += this.renderer.paragraph(this.parseInline(u2.tokens));
            continue;
          case "text":
            for (p2 = u2.tokens ? this.parseInline(u2.tokens) : u2.text; n2 + 1 < z2 && "text" === e2[n2 + 1].type; )
              u2 = e2[++n2], p2 += "\n" + (u2.tokens ? this.parseInline(u2.tokens) : u2.text);
            y2 += t2 ? this.renderer.paragraph(p2) : p2;
            continue;
          default: {
            const e3 = 'Token with "' + u2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(e3);
            throw new Error(e3);
          }
        }
    return y2;
  }
  parseInline(e2, t2) {
    t2 = t2 || this.renderer;
    let n2, r2, s2, i2 = "";
    const l2 = e2.length;
    for (n2 = 0; n2 < l2; n2++)
      if (r2 = e2[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r2.type] && (s2 = this.options.extensions.renderers[r2.type].call({ parser: this }, r2), false !== s2 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r2.type)))
        i2 += s2 || "";
      else
        switch (r2.type) {
          case "escape":
            i2 += t2.text(r2.text);
            break;
          case "html":
            i2 += t2.html(r2.text);
            break;
          case "link":
            i2 += t2.link(r2.href, r2.title, this.parseInline(r2.tokens, t2));
            break;
          case "image":
            i2 += t2.image(r2.href, r2.title, r2.text);
            break;
          case "strong":
            i2 += t2.strong(this.parseInline(r2.tokens, t2));
            break;
          case "em":
            i2 += t2.em(this.parseInline(r2.tokens, t2));
            break;
          case "codespan":
            i2 += t2.codespan(r2.text);
            break;
          case "br":
            i2 += t2.br();
            break;
          case "del":
            i2 += t2.del(this.parseInline(r2.tokens, t2));
            break;
          case "text":
            i2 += t2.text(r2.text);
            break;
          default: {
            const e3 = 'Token with "' + r2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(e3);
            throw new Error(e3);
          }
        }
    return i2;
  }
}
function N(e2, t2, n2) {
  if (null == e2)
    throw new Error("marked(): input parameter is undefined or null");
  if ("string" != typeof e2)
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
  if ("function" == typeof t2 && (n2 = t2, t2 = null), S(t2 = _({}, N.defaults, t2 || {})), n2) {
    const r2 = t2.highlight;
    let s2;
    try {
      s2 = q.lex(e2, t2);
    } catch (e3) {
      return n2(e3);
    }
    const i2 = function(e3) {
      let i3;
      if (!e3)
        try {
          t2.walkTokens && N.walkTokens(s2, t2.walkTokens), i3 = O.parse(s2, t2);
        } catch (t3) {
          e3 = t3;
        }
      return t2.highlight = r2, e3 ? n2(e3) : n2(null, i3);
    };
    if (!r2 || r2.length < 3)
      return i2();
    if (delete t2.highlight, !s2.length)
      return i2();
    let l2 = 0;
    return N.walkTokens(s2, function(e3) {
      "code" === e3.type && (l2++, setTimeout(() => {
        r2(e3.text, e3.lang, function(t3, n3) {
          if (t3)
            return i2(t3);
          null != n3 && n3 !== e3.text && (e3.text = n3, e3.escaped = true), l2--, 0 === l2 && i2();
        });
      }, 0));
    }), void (0 === l2 && i2());
  }
  try {
    const n3 = q.lex(e2, t2);
    return t2.walkTokens && N.walkTokens(n3, t2.walkTokens), O.parse(n3, t2);
  } catch (e3) {
    if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
      return "<p>An error occurred:</p><pre>" + o(e3.message + "", true) + "</pre>";
    throw e3;
  }
}
N.options = N.setOptions = function(e2) {
  var n2;
  return _(N.defaults, e2), n2 = N.defaults, t = n2, N;
}, N.getDefaults = e, N.defaults = t, N.use = function(...e2) {
  const t2 = _({}, ...e2), n2 = N.defaults.extensions || { renderers: {}, childTokens: {} };
  let r2;
  e2.forEach((e3) => {
    if (e3.extensions && (r2 = true, e3.extensions.forEach((e4) => {
      if (!e4.name)
        throw new Error("extension name required");
      if (e4.renderer) {
        const t3 = n2.renderers ? n2.renderers[e4.name] : null;
        n2.renderers[e4.name] = t3 ? function(...n3) {
          let r3 = e4.renderer.apply(this, n3);
          return false === r3 && (r3 = t3.apply(this, n3)), r3;
        } : e4.renderer;
      }
      if (e4.tokenizer) {
        if (!e4.level || "block" !== e4.level && "inline" !== e4.level)
          throw new Error("extension level must be 'block' or 'inline'");
        n2[e4.level] ? n2[e4.level].unshift(e4.tokenizer) : n2[e4.level] = [e4.tokenizer], e4.start && ("block" === e4.level ? n2.startBlock ? n2.startBlock.push(e4.start) : n2.startBlock = [e4.start] : "inline" === e4.level && (n2.startInline ? n2.startInline.push(e4.start) : n2.startInline = [e4.start]));
      }
      e4.childTokens && (n2.childTokens[e4.name] = e4.childTokens);
    })), e3.renderer) {
      const n3 = N.defaults.renderer || new L();
      for (const t3 in e3.renderer) {
        const r3 = n3[t3];
        n3[t3] = (...s2) => {
          let i2 = e3.renderer[t3].apply(n3, s2);
          return false === i2 && (i2 = r3.apply(n3, s2)), i2;
        };
      }
      t2.renderer = n3;
    }
    if (e3.tokenizer) {
      const n3 = N.defaults.tokenizer || new A();
      for (const t3 in e3.tokenizer) {
        const r3 = n3[t3];
        n3[t3] = (...s2) => {
          let i2 = e3.tokenizer[t3].apply(n3, s2);
          return false === i2 && (i2 = r3.apply(n3, s2)), i2;
        };
      }
      t2.tokenizer = n3;
    }
    if (e3.walkTokens) {
      const n3 = N.defaults.walkTokens;
      t2.walkTokens = function(t3) {
        e3.walkTokens.call(this, t3), n3 && n3.call(this, t3);
      };
    }
    r2 && (t2.extensions = n2), N.setOptions(t2);
  });
}, N.walkTokens = function(e2, t2) {
  for (const n2 of e2)
    switch (t2.call(N, n2), n2.type) {
      case "table":
        for (const e3 of n2.header)
          N.walkTokens(e3.tokens, t2);
        for (const e3 of n2.rows)
          for (const n3 of e3)
            N.walkTokens(n3.tokens, t2);
        break;
      case "list":
        N.walkTokens(n2.items, t2);
        break;
      default:
        N.defaults.extensions && N.defaults.extensions.childTokens && N.defaults.extensions.childTokens[n2.type] ? N.defaults.extensions.childTokens[n2.type].forEach(function(e3) {
          N.walkTokens(n2[e3], t2);
        }) : n2.tokens && N.walkTokens(n2.tokens, t2);
    }
}, N.parseInline = function(e2, t2) {
  if (null == e2)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if ("string" != typeof e2)
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
  S(t2 = _({}, N.defaults, t2 || {}));
  try {
    const n2 = q.lexInline(e2, t2);
    return t2.walkTokens && N.walkTokens(n2, t2.walkTokens), O.parseInline(n2, t2);
  } catch (e3) {
    if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t2.silent)
      return "<p>An error occurred:</p><pre>" + o(e3.message + "", true) + "</pre>";
    throw e3;
  }
}, N.Parser = O, N.parser = O.parse, N.Renderer = L, N.TextRenderer = C, N.Lexer = q, N.lexer = q.lex, N.Tokenizer = A, N.Slugger = Z, N.parse = N;
/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */
const D = /\[([\s\d,|-]*)\]/, P = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const markdown_esm = () => {
  let e2;
  function t2(e3) {
    var t3 = (e3.querySelector("[data-template]") || e3.querySelector("script") || e3).textContent, n3 = (t3 = t3.replace(new RegExp("__SCRIPT_END__", "g"), "<\/script>")).match(/^\n?(\s*)/)[1].length, r3 = t3.match(/^\n?(\t*)/)[1].length;
    return r3 > 0 ? t3 = t3.replace(new RegExp("\\n?\\t{" + r3 + "}", "g"), "\n") : n3 > 1 && (t3 = t3.replace(new RegExp("\\n? {" + n3 + "}", "g"), "\n")), t3;
  }
  function n2(e3) {
    for (var t3 = e3.attributes, n3 = [], r3 = 0, s3 = t3.length; r3 < s3; r3++) {
      var i3 = t3[r3].name, l3 = t3[r3].value;
      /data\-(markdown|separator|vertical|notes)/gi.test(i3) || (l3 ? n3.push(i3 + '="' + l3 + '"') : n3.push(i3));
    }
    return n3.join(" ");
  }
  function r2(e3) {
    return (e3 = e3 || {}).separator = e3.separator || "\r?\n---\r?\n", e3.notesSeparator = e3.notesSeparator || "notes?:", e3.attributes = e3.attributes || "", e3;
  }
  function s2(e3, t3) {
    t3 = r2(t3);
    var n3 = e3.split(new RegExp(t3.notesSeparator, "mgi"));
    return 2 === n3.length && (e3 = n3[0] + '<aside class="notes">' + N(n3[1].trim()) + "</aside>"), '<script type="text/template">' + (e3 = e3.replace(/<\/script>/g, "__SCRIPT_END__")) + "<\/script>";
  }
  function i2(e3, t3) {
    t3 = r2(t3);
    for (var n3, i3, l3, a3 = new RegExp(t3.separator + (t3.verticalSeparator ? "|" + t3.verticalSeparator : ""), "mg"), o3 = new RegExp(t3.separator), c3 = 0, h2 = true, p2 = []; n3 = a3.exec(e3); )
      !(i3 = o3.test(n3[0])) && h2 && p2.push([]), l3 = e3.substring(c3, n3.index), i3 && h2 ? p2.push(l3) : p2[p2.length - 1].push(l3), c3 = a3.lastIndex, h2 = i3;
    (h2 ? p2 : p2[p2.length - 1]).push(e3.substring(c3));
    for (var u2 = "", g2 = 0, d2 = p2.length; g2 < d2; g2++)
      p2[g2] instanceof Array ? (u2 += "<section " + t3.attributes + ">", p2[g2].forEach(function(e4) {
        u2 += "<section data-markdown>" + s2(e4, t3) + "</section>";
      }), u2 += "</section>") : u2 += "<section " + t3.attributes + " data-markdown>" + s2(p2[g2], t3) + "</section>";
    return u2;
  }
  function l2(e3) {
    return new Promise(function(r3) {
      var s3 = [];
      [].slice.call(e3.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(e4, r4) {
        e4.getAttribute("data-markdown").length ? s3.push(function(e5) {
          return new Promise(function(t3, n3) {
            var r5 = new XMLHttpRequest(), s4 = e5.getAttribute("data-markdown"), i3 = e5.getAttribute("data-charset");
            null != i3 && "" != i3 && r5.overrideMimeType("text/html; charset=" + i3), r5.onreadystatechange = function(e6, r6) {
              4 === r6.readyState && (r6.status >= 200 && r6.status < 300 || 0 === r6.status ? t3(r6, s4) : n3(r6, s4));
            }.bind(this, e5, r5), r5.open("GET", s4, true);
            try {
              r5.send();
            } catch (e6) {
              console.warn("Failed to get the Markdown file " + s4 + ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " + e6), t3(r5, s4);
            }
          });
        }(e4).then(function(t3, r5) {
          e4.outerHTML = i2(t3.responseText, { separator: e4.getAttribute("data-separator"), verticalSeparator: e4.getAttribute("data-separator-vertical"), notesSeparator: e4.getAttribute("data-separator-notes"), attributes: n2(e4) });
        }, function(t3, n3) {
          e4.outerHTML = '<section data-state="alert">ERROR: The attempt to fetch ' + n3 + " failed with HTTP status " + t3.status + ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>";
        })) : e4.outerHTML = i2(t2(e4), { separator: e4.getAttribute("data-separator"), verticalSeparator: e4.getAttribute("data-separator-vertical"), notesSeparator: e4.getAttribute("data-separator-notes"), attributes: n2(e4) });
      }), Promise.all(s3).then(r3);
    });
  }
  function a2(e3, t3, n3) {
    var r3, s3, i3 = new RegExp(n3, "mg"), l3 = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', "mg"), a3 = e3.nodeValue;
    if (r3 = i3.exec(a3)) {
      var o3 = r3[1];
      for (a3 = a3.substring(0, r3.index) + a3.substring(i3.lastIndex), e3.nodeValue = a3; s3 = l3.exec(o3); )
        s3[2] ? t3.setAttribute(s3[1], s3[2]) : t3.setAttribute(s3[3], "");
      return true;
    }
    return false;
  }
  function o2(e3, t3, n3, r3, s3) {
    if (null != t3 && null != t3.childNodes && t3.childNodes.length > 0)
      for (var i3 = t3, l3 = 0; l3 < t3.childNodes.length; l3++) {
        var c3 = t3.childNodes[l3];
        if (l3 > 0)
          for (var h2 = l3 - 1; h2 >= 0; ) {
            var p2 = t3.childNodes[h2];
            if ("function" == typeof p2.setAttribute && "BR" != p2.tagName) {
              i3 = p2;
              break;
            }
            h2 -= 1;
          }
        var u2 = e3;
        "section" == c3.nodeName && (u2 = c3, i3 = c3), "function" != typeof c3.setAttribute && c3.nodeType != Node.COMMENT_NODE || o2(u2, c3, i3, r3, s3);
      }
    t3.nodeType == Node.COMMENT_NODE && 0 == a2(t3, n3, r3) && a2(t3, e3, s3);
  }
  function c2() {
    var n3 = e2.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");
    return [].slice.call(n3).forEach(function(e3) {
      e3.setAttribute("data-markdown-parsed", true);
      var n4 = e3.querySelector("aside.notes"), r3 = t2(e3);
      e3.innerHTML = N(r3), o2(e3, e3, null, e3.getAttribute("data-element-attributes") || e3.parentNode.getAttribute("data-element-attributes") || "\\.element\\s*?(.+?)$", e3.getAttribute("data-attributes") || e3.parentNode.getAttribute("data-attributes") || "\\.slide:\\s*?(\\S.+?)$"), n4 && e3.appendChild(n4);
    }), Promise.resolve();
  }
  return { id: "markdown", init: function(t3) {
    e2 = t3;
    let { renderer: n3, animateLists: r3, ...s3 } = e2.getConfig().markdown || {};
    return n3 || (n3 = new N.Renderer(), n3.code = (e3, t4) => {
      let n4 = "";
      return D.test(t4) && (n4 = t4.match(D)[1].trim(), n4 = `data-line-numbers="${n4}"`, t4 = t4.replace(D, "").trim()), `<pre><code ${n4} class="${t4}">${e3 = e3.replace(/([&<>'"])/g, (e4) => P[e4])}</code></pre>`;
    }), true === r3 && (n3.listitem = (e3) => `<li class="fragment">${e3}</li>`), N.setOptions({ renderer: n3, ...s3 }), l2(e2.getRevealElement()).then(c2);
  }, processSlides: l2, convertSlides: c2, slidify: i2, marked: N };
};
export {
  markdown_esm as default
};
