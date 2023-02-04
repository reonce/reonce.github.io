function t() {
  return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
let e = { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
const n = /[&<>"']/, i = /[&<>"']/g, s = /[<>"']|&(?!#?\w+;)/, r = /[<>"']|&(?!#?\w+;)/g, a = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, l = (t2) => a[t2];
function o(t2, e2) {
  if (e2) {
    if (n.test(t2))
      return t2.replace(i, l);
  } else if (s.test(t2))
    return t2.replace(r, l);
  return t2;
}
const c = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function p(t2) {
  return t2.replace(c, (t3, e2) => "colon" === (e2 = e2.toLowerCase()) ? ":" : "#" === e2.charAt(0) ? "x" === e2.charAt(1) ? String.fromCharCode(parseInt(e2.substring(2), 16)) : String.fromCharCode(+e2.substring(1)) : "");
}
const u = /(^|[^\[])\^/g;
function d(t2, e2) {
  t2 = t2.source || t2, e2 = e2 || "";
  const n2 = { replace: (e3, i2) => (i2 = (i2 = i2.source || i2).replace(u, "$1"), t2 = t2.replace(e3, i2), n2), getRegex: () => new RegExp(t2, e2) };
  return n2;
}
const h = /[^\w:]/g, g = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function m(t2, e2, n2) {
  if (t2) {
    let t3;
    try {
      t3 = decodeURIComponent(p(n2)).replace(h, "").toLowerCase();
    } catch (t4) {
      return null;
    }
    if (0 === t3.indexOf("javascript:") || 0 === t3.indexOf("vbscript:") || 0 === t3.indexOf("data:"))
      return null;
  }
  e2 && !g.test(n2) && (n2 = function(t3, e3) {
    f[" " + t3] || (k.test(t3) ? f[" " + t3] = t3 + "/" : f[" " + t3] = S(t3, "/", true));
    const n3 = -1 === (t3 = f[" " + t3]).indexOf(":");
    return "//" === e3.substring(0, 2) ? n3 ? e3 : t3.replace(x, "$1") + e3 : "/" === e3.charAt(0) ? n3 ? e3 : t3.replace(w, "$1") + e3 : t3 + e3;
  }(e2, n2));
  try {
    n2 = encodeURI(n2).replace(/%25/g, "%");
  } catch (t3) {
    return null;
  }
  return n2;
}
const f = {}, k = /^[^:]+:\/*[^/]*$/, x = /^([^:]+:)[\s\S]*$/, w = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const b = { exec: function() {
} };
function y(t2) {
  let e2, n2, i2 = 1;
  for (; i2 < arguments.length; i2++)
    for (n2 in e2 = arguments[i2], e2)
      Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
  return t2;
}
function v(t2, e2) {
  const n2 = t2.replace(/\|/g, (t3, e3, n3) => {
    let i3 = false, s2 = e3;
    for (; --s2 >= 0 && "\\" === n3[s2]; )
      i3 = !i3;
    return i3 ? "|" : " |";
  }).split(/ \|/);
  let i2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !n2[n2.length - 1].trim() && n2.pop(), n2.length > e2)
    n2.splice(e2);
  else
    for (; n2.length < e2; )
      n2.push("");
  for (; i2 < n2.length; i2++)
    n2[i2] = n2[i2].trim().replace(/\\\|/g, "|");
  return n2;
}
function S(t2, e2, n2) {
  const i2 = t2.length;
  if (0 === i2)
    return "";
  let s2 = 0;
  for (; s2 < i2; ) {
    const r2 = t2.charAt(i2 - s2 - 1);
    if (r2 !== e2 || n2) {
      if (r2 === e2 || !n2)
        break;
      s2++;
    } else
      s2++;
  }
  return t2.substr(0, i2 - s2);
}
function T(t2) {
  t2 && t2.sanitize && !t2.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function _(t2, e2) {
  if (e2 < 1)
    return "";
  let n2 = "";
  for (; e2 > 1; )
    1 & e2 && (n2 += t2), e2 >>= 1, t2 += t2;
  return n2 + t2;
}
function z(t2, e2, n2, i2) {
  const s2 = e2.href, r2 = e2.title ? o(e2.title) : null, a2 = t2[1].replace(/\\([\[\]])/g, "$1");
  if ("!" !== t2[0].charAt(0)) {
    i2.state.inLink = true;
    const t3 = { type: "link", raw: n2, href: s2, title: r2, text: a2, tokens: i2.inlineTokens(a2, []) };
    return i2.state.inLink = false, t3;
  }
  return { type: "image", raw: n2, href: s2, title: r2, text: o(a2) };
}
class A {
  constructor(t2) {
    this.options = t2 || e;
  }
  space(t2) {
    const e2 = this.rules.block.newline.exec(t2);
    if (e2 && e2[0].length > 0)
      return { type: "space", raw: e2[0] };
  }
  code(t2) {
    const e2 = this.rules.block.code.exec(t2);
    if (e2) {
      const t3 = e2[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: e2[0], codeBlockStyle: "indented", text: this.options.pedantic ? t3 : S(t3, "\n") };
    }
  }
  fences(t2) {
    const e2 = this.rules.block.fences.exec(t2);
    if (e2) {
      const t3 = e2[0], n2 = function(t4, e3) {
        const n3 = t4.match(/^(\s+)(?:```)/);
        if (null === n3)
          return e3;
        const i2 = n3[1];
        return e3.split("\n").map((t5) => {
          const e4 = t5.match(/^\s+/);
          if (null === e4)
            return t5;
          const [n4] = e4;
          return n4.length >= i2.length ? t5.slice(i2.length) : t5;
        }).join("\n");
      }(t3, e2[3] || "");
      return { type: "code", raw: t3, lang: e2[2] ? e2[2].trim() : e2[2], text: n2 };
    }
  }
  heading(t2) {
    const e2 = this.rules.block.heading.exec(t2);
    if (e2) {
      let t3 = e2[2].trim();
      if (/#$/.test(t3)) {
        const e3 = S(t3, "#");
        this.options.pedantic ? t3 = e3.trim() : e3 && !/ $/.test(e3) || (t3 = e3.trim());
      }
      const n2 = { type: "heading", raw: e2[0], depth: e2[1].length, text: t3, tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  }
  hr(t2) {
    const e2 = this.rules.block.hr.exec(t2);
    if (e2)
      return { type: "hr", raw: e2[0] };
  }
  blockquote(t2) {
    const e2 = this.rules.block.blockquote.exec(t2);
    if (e2) {
      const t3 = e2[0].replace(/^ *> ?/gm, "");
      return { type: "blockquote", raw: e2[0], tokens: this.lexer.blockTokens(t3, []), text: t3 };
    }
  }
  list(t2) {
    let e2 = this.rules.block.list.exec(t2);
    if (e2) {
      let n2, i2, s2, r2, a2, l2, o2, c2, p2, u2, d2, h2, g2 = e2[1].trim();
      const m2 = g2.length > 1, f2 = { type: "list", raw: "", ordered: m2, start: m2 ? +g2.slice(0, -1) : "", loose: false, items: [] };
      g2 = m2 ? `\\d{1,9}\\${g2.slice(-1)}` : `\\${g2}`, this.options.pedantic && (g2 = m2 ? g2 : "[*+-]");
      const k2 = new RegExp(`^( {0,3}${g2})((?: [^\\n]*)?(?:\\n|$))`);
      for (; t2 && (h2 = false, e2 = k2.exec(t2)) && !this.rules.block.hr.test(t2); ) {
        if (n2 = e2[0], t2 = t2.substring(n2.length), c2 = e2[2].split("\n", 1)[0], p2 = t2.split("\n", 1)[0], this.options.pedantic ? (r2 = 2, d2 = c2.trimLeft()) : (r2 = e2[2].search(/[^ ]/), r2 = r2 > 4 ? 1 : r2, d2 = c2.slice(r2), r2 += e2[1].length), l2 = false, !c2 && /^ *$/.test(p2) && (n2 += p2 + "\n", t2 = t2.substring(p2.length + 1), h2 = true), !h2) {
          const e3 = new RegExp(`^ {0,${Math.min(3, r2 - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
          for (; t2 && (u2 = t2.split("\n", 1)[0], c2 = u2, this.options.pedantic && (c2 = c2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !e3.test(c2)); ) {
            if (c2.search(/[^ ]/) >= r2 || !c2.trim())
              d2 += "\n" + c2.slice(r2);
            else {
              if (l2)
                break;
              d2 += "\n" + c2;
            }
            l2 || c2.trim() || (l2 = true), n2 += u2 + "\n", t2 = t2.substring(u2.length + 1);
          }
        }
        f2.loose || (o2 ? f2.loose = true : /\n *\n *$/.test(n2) && (o2 = true)), this.options.gfm && (i2 = /^\[[ xX]\] /.exec(d2), i2 && (s2 = "[ ] " !== i2[0], d2 = d2.replace(/^\[[ xX]\] +/, ""))), f2.items.push({ type: "list_item", raw: n2, task: !!i2, checked: s2, loose: false, text: d2 }), f2.raw += n2;
      }
      f2.items[f2.items.length - 1].raw = n2.trimRight(), f2.items[f2.items.length - 1].text = d2.trimRight(), f2.raw = f2.raw.trimRight();
      const x2 = f2.items.length;
      for (a2 = 0; a2 < x2; a2++) {
        this.lexer.state.top = false, f2.items[a2].tokens = this.lexer.blockTokens(f2.items[a2].text, []);
        const t3 = f2.items[a2].tokens.filter((t4) => "space" === t4.type), e3 = t3.every((t4) => {
          const e4 = t4.raw.split("");
          let n3 = 0;
          for (const t5 of e4)
            if ("\n" === t5 && (n3 += 1), n3 > 1)
              return true;
          return false;
        });
        !f2.loose && t3.length && e3 && (f2.loose = true, f2.items[a2].loose = true);
      }
      return f2;
    }
  }
  html(t2) {
    const e2 = this.rules.block.html.exec(t2);
    if (e2) {
      const t3 = { type: "html", raw: e2[0], pre: !this.options.sanitizer && ("pre" === e2[1] || "script" === e2[1] || "style" === e2[1]), text: e2[0] };
      return this.options.sanitize && (t3.type = "paragraph", t3.text = this.options.sanitizer ? this.options.sanitizer(e2[0]) : o(e2[0]), t3.tokens = [], this.lexer.inline(t3.text, t3.tokens)), t3;
    }
  }
  def(t2) {
    const e2 = this.rules.block.def.exec(t2);
    if (e2) {
      e2[3] && (e2[3] = e2[3].substring(1, e2[3].length - 1));
      return { type: "def", tag: e2[1].toLowerCase().replace(/\s+/g, " "), raw: e2[0], href: e2[2], title: e2[3] };
    }
  }
  table(t2) {
    const e2 = this.rules.block.table.exec(t2);
    if (e2) {
      const t3 = { type: "table", header: v(e2[1]).map((t4) => ({ text: t4 })), align: e2[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: e2[3] && e2[3].trim() ? e2[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
      if (t3.header.length === t3.align.length) {
        t3.raw = e2[0];
        let n2, i2, s2, r2, a2 = t3.align.length;
        for (n2 = 0; n2 < a2; n2++)
          /^ *-+: *$/.test(t3.align[n2]) ? t3.align[n2] = "right" : /^ *:-+: *$/.test(t3.align[n2]) ? t3.align[n2] = "center" : /^ *:-+ *$/.test(t3.align[n2]) ? t3.align[n2] = "left" : t3.align[n2] = null;
        for (a2 = t3.rows.length, n2 = 0; n2 < a2; n2++)
          t3.rows[n2] = v(t3.rows[n2], t3.header.length).map((t4) => ({ text: t4 }));
        for (a2 = t3.header.length, i2 = 0; i2 < a2; i2++)
          t3.header[i2].tokens = [], this.lexer.inlineTokens(t3.header[i2].text, t3.header[i2].tokens);
        for (a2 = t3.rows.length, i2 = 0; i2 < a2; i2++)
          for (r2 = t3.rows[i2], s2 = 0; s2 < r2.length; s2++)
            r2[s2].tokens = [], this.lexer.inlineTokens(r2[s2].text, r2[s2].tokens);
        return t3;
      }
    }
  }
  lheading(t2) {
    const e2 = this.rules.block.lheading.exec(t2);
    if (e2) {
      const t3 = { type: "heading", raw: e2[0], depth: "=" === e2[2].charAt(0) ? 1 : 2, text: e2[1], tokens: [] };
      return this.lexer.inline(t3.text, t3.tokens), t3;
    }
  }
  paragraph(t2) {
    const e2 = this.rules.block.paragraph.exec(t2);
    if (e2) {
      const t3 = { type: "paragraph", raw: e2[0], text: "\n" === e2[1].charAt(e2[1].length - 1) ? e2[1].slice(0, -1) : e2[1], tokens: [] };
      return this.lexer.inline(t3.text, t3.tokens), t3;
    }
  }
  text(t2) {
    const e2 = this.rules.block.text.exec(t2);
    if (e2) {
      const t3 = { type: "text", raw: e2[0], text: e2[0], tokens: [] };
      return this.lexer.inline(t3.text, t3.tokens), t3;
    }
  }
  escape(t2) {
    const e2 = this.rules.inline.escape.exec(t2);
    if (e2)
      return { type: "escape", raw: e2[0], text: o(e2[1]) };
  }
  tag(t2) {
    const e2 = this.rules.inline.tag.exec(t2);
    if (e2)
      return !this.lexer.state.inLink && /^<a /i.test(e2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(e2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e2[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: e2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e2[0]) : o(e2[0]) : e2[0] };
  }
  link(t2) {
    const e2 = this.rules.inline.link.exec(t2);
    if (e2) {
      const t3 = e2[2].trim();
      if (!this.options.pedantic && /^</.test(t3)) {
        if (!/>$/.test(t3))
          return;
        const e3 = S(t3.slice(0, -1), "\\");
        if ((t3.length - e3.length) % 2 == 0)
          return;
      } else {
        const t4 = function(t5, e3) {
          if (-1 === t5.indexOf(e3[1]))
            return -1;
          const n3 = t5.length;
          let i3 = 0, s2 = 0;
          for (; s2 < n3; s2++)
            if ("\\" === t5[s2])
              s2++;
            else if (t5[s2] === e3[0])
              i3++;
            else if (t5[s2] === e3[1] && (i3--, i3 < 0))
              return s2;
          return -1;
        }(e2[2], "()");
        if (t4 > -1) {
          const n3 = (0 === e2[0].indexOf("!") ? 5 : 4) + e2[1].length + t4;
          e2[2] = e2[2].substring(0, t4), e2[0] = e2[0].substring(0, n3).trim(), e2[3] = "";
        }
      }
      let n2 = e2[2], i2 = "";
      if (this.options.pedantic) {
        const t4 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n2);
        t4 && (n2 = t4[1], i2 = t4[3]);
      } else
        i2 = e2[3] ? e2[3].slice(1, -1) : "";
      return n2 = n2.trim(), /^</.test(n2) && (n2 = this.options.pedantic && !/>$/.test(t3) ? n2.slice(1) : n2.slice(1, -1)), z(e2, { href: n2 ? n2.replace(this.rules.inline._escapes, "$1") : n2, title: i2 ? i2.replace(this.rules.inline._escapes, "$1") : i2 }, e2[0], this.lexer);
    }
  }
  reflink(t2, e2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(t2)) || (n2 = this.rules.inline.nolink.exec(t2))) {
      let t3 = (n2[2] || n2[1]).replace(/\s+/g, " ");
      if (t3 = e2[t3.toLowerCase()], !t3 || !t3.href) {
        const t4 = n2[0].charAt(0);
        return { type: "text", raw: t4, text: t4 };
      }
      return z(n2, t3, n2[0], this.lexer);
    }
  }
  emStrong(t2, e2, n2 = "") {
    let i2 = this.rules.inline.emStrong.lDelim.exec(t2);
    if (!i2)
      return;
    if (i2[3] && n2.match(/[\p{L}\p{N}]/u))
      return;
    const s2 = i2[1] || i2[2] || "";
    if (!s2 || s2 && ("" === n2 || this.rules.inline.punctuation.exec(n2))) {
      const n3 = i2[0].length - 1;
      let s3, r2, a2 = n3, l2 = 0;
      const o2 = "*" === i2[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (o2.lastIndex = 0, e2 = e2.slice(-1 * t2.length + n3); null != (i2 = o2.exec(e2)); ) {
        if (s3 = i2[1] || i2[2] || i2[3] || i2[4] || i2[5] || i2[6], !s3)
          continue;
        if (r2 = s3.length, i2[3] || i2[4]) {
          a2 += r2;
          continue;
        }
        if ((i2[5] || i2[6]) && n3 % 3 && !((n3 + r2) % 3)) {
          l2 += r2;
          continue;
        }
        if (a2 -= r2, a2 > 0)
          continue;
        if (r2 = Math.min(r2, r2 + a2 + l2), Math.min(n3, r2) % 2) {
          const e4 = t2.slice(1, n3 + i2.index + r2);
          return { type: "em", raw: t2.slice(0, n3 + i2.index + r2 + 1), text: e4, tokens: this.lexer.inlineTokens(e4, []) };
        }
        const e3 = t2.slice(2, n3 + i2.index + r2 - 1);
        return { type: "strong", raw: t2.slice(0, n3 + i2.index + r2 + 1), text: e3, tokens: this.lexer.inlineTokens(e3, []) };
      }
    }
  }
  codespan(t2) {
    const e2 = this.rules.inline.code.exec(t2);
    if (e2) {
      let t3 = e2[2].replace(/\n/g, " ");
      const n2 = /[^ ]/.test(t3), i2 = /^ /.test(t3) && / $/.test(t3);
      return n2 && i2 && (t3 = t3.substring(1, t3.length - 1)), t3 = o(t3, true), { type: "codespan", raw: e2[0], text: t3 };
    }
  }
  br(t2) {
    const e2 = this.rules.inline.br.exec(t2);
    if (e2)
      return { type: "br", raw: e2[0] };
  }
  del(t2) {
    const e2 = this.rules.inline.del.exec(t2);
    if (e2)
      return { type: "del", raw: e2[0], text: e2[2], tokens: this.lexer.inlineTokens(e2[2], []) };
  }
  autolink(t2, e2) {
    const n2 = this.rules.inline.autolink.exec(t2);
    if (n2) {
      let t3, i2;
      return "@" === n2[2] ? (t3 = o(this.options.mangle ? e2(n2[1]) : n2[1]), i2 = "mailto:" + t3) : (t3 = o(n2[1]), i2 = t3), { type: "link", raw: n2[0], text: t3, href: i2, tokens: [{ type: "text", raw: t3, text: t3 }] };
    }
  }
  url(t2, e2) {
    let n2;
    if (n2 = this.rules.inline.url.exec(t2)) {
      let t3, i2;
      if ("@" === n2[2])
        t3 = o(this.options.mangle ? e2(n2[0]) : n2[0]), i2 = "mailto:" + t3;
      else {
        let e3;
        do {
          e3 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0];
        } while (e3 !== n2[0]);
        t3 = o(n2[0]), i2 = "www." === n2[1] ? "http://" + t3 : t3;
      }
      return { type: "link", raw: n2[0], text: t3, href: i2, tokens: [{ type: "text", raw: t3, text: t3 }] };
    }
  }
  inlineText(t2, e2) {
    const n2 = this.rules.inline.text.exec(t2);
    if (n2) {
      let t3;
      return t3 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n2[0]) : o(n2[0]) : n2[0] : o(this.options.smartypants ? e2(n2[0]) : n2[0]), { type: "text", raw: n2[0], text: t3 };
    }
  }
}
const E = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: b, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
E.def = d(E.def).replace("label", E._label).replace("title", E._title).getRegex(), E.bullet = /(?:[*+-]|\d{1,9}[.)])/, E.listItemStart = d(/^( *)(bull) */).replace("bull", E.bullet).getRegex(), E.list = d(E.list).replace(/bull/g, E.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + E.def.source + ")").getRegex(), E._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", E._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, E.html = d(E.html, "i").replace("comment", E._comment).replace("tag", E._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), E.paragraph = d(E._paragraph).replace("hr", E.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", E._tag).getRegex(), E.blockquote = d(E.blockquote).replace("paragraph", E.paragraph).getRegex(), E.normal = y({}, E), E.gfm = y({}, E.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), E.gfm.table = d(E.gfm.table).replace("hr", E.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", E._tag).getRegex(), E.gfm.paragraph = d(E._paragraph).replace("hr", E.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", E.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", E._tag).getRegex(), E.pedantic = y({}, E.normal, { html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", E._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: b, paragraph: d(E.normal._paragraph).replace("hr", E.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", E.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
const $ = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: b, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: b, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
function L(t2) {
  return t2.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function R(t2) {
  let e2, n2, i2 = "";
  const s2 = t2.length;
  for (e2 = 0; e2 < s2; e2++)
    n2 = t2.charCodeAt(e2), Math.random() > 0.5 && (n2 = "x" + n2.toString(16)), i2 += "&#" + n2 + ";";
  return i2;
}
$._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", $.punctuation = d($.punctuation).replace(/punctuation/g, $._punctuation).getRegex(), $.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, $.escapedEmSt = /\\\*|\\_/g, $._comment = d(E._comment).replace("(?:-->|$)", "-->").getRegex(), $.emStrong.lDelim = d($.emStrong.lDelim).replace(/punct/g, $._punctuation).getRegex(), $.emStrong.rDelimAst = d($.emStrong.rDelimAst, "g").replace(/punct/g, $._punctuation).getRegex(), $.emStrong.rDelimUnd = d($.emStrong.rDelimUnd, "g").replace(/punct/g, $._punctuation).getRegex(), $._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, $._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, $._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, $.autolink = d($.autolink).replace("scheme", $._scheme).replace("email", $._email).getRegex(), $._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, $.tag = d($.tag).replace("comment", $._comment).replace("attribute", $._attribute).getRegex(), $._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, $._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, $._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, $.link = d($.link).replace("label", $._label).replace("href", $._href).replace("title", $._title).getRegex(), $.reflink = d($.reflink).replace("label", $._label).replace("ref", E._label).getRegex(), $.nolink = d($.nolink).replace("ref", E._label).getRegex(), $.reflinkSearch = d($.reflinkSearch, "g").replace("reflink", $.reflink).replace("nolink", $.nolink).getRegex(), $.normal = y({}, $), $.pedantic = y({}, $.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", $._label).getRegex(), reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", $._label).getRegex() }), $.gfm = y({}, $.normal, { escape: d($.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), $.gfm.url = d($.gfm.url, "i").replace("email", $.gfm._extended_email).getRegex(), $.breaks = y({}, $.gfm, { br: d($.br).replace("{2,}", "*").getRegex(), text: d($.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
class I {
  constructor(t2) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t2 || e, this.options.tokenizer = this.options.tokenizer || new A(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    const n2 = { block: E.normal, inline: $.normal };
    this.options.pedantic ? (n2.block = E.pedantic, n2.inline = $.pedantic) : this.options.gfm && (n2.block = E.gfm, this.options.breaks ? n2.inline = $.breaks : n2.inline = $.gfm), this.tokenizer.rules = n2;
  }
  static get rules() {
    return { block: E, inline: $ };
  }
  static lex(t2, e2) {
    return new I(e2).lex(t2);
  }
  static lexInline(t2, e2) {
    return new I(e2).inlineTokens(t2);
  }
  lex(t2) {
    let e2;
    for (t2 = t2.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(t2, this.tokens); e2 = this.inlineQueue.shift(); )
      this.inlineTokens(e2.src, e2.tokens);
    return this.tokens;
  }
  blockTokens(t2, e2 = []) {
    let n2, i2, s2, r2;
    for (this.options.pedantic && (t2 = t2.replace(/^ +$/gm, "")); t2; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((i3) => !!(n2 = i3.call({ lexer: this }, t2, e2)) && (t2 = t2.substring(n2.raw.length), e2.push(n2), true))))
        if (n2 = this.tokenizer.space(t2))
          t2 = t2.substring(n2.raw.length), 1 === n2.raw.length && e2.length > 0 ? e2[e2.length - 1].raw += "\n" : e2.push(n2);
        else if (n2 = this.tokenizer.code(t2))
          t2 = t2.substring(n2.raw.length), i2 = e2[e2.length - 1], !i2 || "paragraph" !== i2.type && "text" !== i2.type ? e2.push(n2) : (i2.raw += "\n" + n2.raw, i2.text += "\n" + n2.text, this.inlineQueue[this.inlineQueue.length - 1].src = i2.text);
        else if (n2 = this.tokenizer.fences(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.heading(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.hr(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.blockquote(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.list(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.html(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.def(t2))
          t2 = t2.substring(n2.raw.length), i2 = e2[e2.length - 1], !i2 || "paragraph" !== i2.type && "text" !== i2.type ? this.tokens.links[n2.tag] || (this.tokens.links[n2.tag] = { href: n2.href, title: n2.title }) : (i2.raw += "\n" + n2.raw, i2.text += "\n" + n2.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i2.text);
        else if (n2 = this.tokenizer.table(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.lheading(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else {
          if (s2 = t2, this.options.extensions && this.options.extensions.startBlock) {
            let e3 = 1 / 0;
            const n3 = t2.slice(1);
            let i3;
            this.options.extensions.startBlock.forEach(function(t3) {
              i3 = t3.call({ lexer: this }, n3), "number" == typeof i3 && i3 >= 0 && (e3 = Math.min(e3, i3));
            }), e3 < 1 / 0 && e3 >= 0 && (s2 = t2.substring(0, e3 + 1));
          }
          if (this.state.top && (n2 = this.tokenizer.paragraph(s2)))
            i2 = e2[e2.length - 1], r2 && "paragraph" === i2.type ? (i2.raw += "\n" + n2.raw, i2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i2.text) : e2.push(n2), r2 = s2.length !== t2.length, t2 = t2.substring(n2.raw.length);
          else if (n2 = this.tokenizer.text(t2))
            t2 = t2.substring(n2.raw.length), i2 = e2[e2.length - 1], i2 && "text" === i2.type ? (i2.raw += "\n" + n2.raw, i2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i2.text) : e2.push(n2);
          else if (t2) {
            const e3 = "Infinite loop on byte: " + t2.charCodeAt(0);
            if (this.options.silent) {
              console.error(e3);
              break;
            }
            throw new Error(e3);
          }
        }
    return this.state.top = true, e2;
  }
  inline(t2, e2) {
    this.inlineQueue.push({ src: t2, tokens: e2 });
  }
  inlineTokens(t2, e2 = []) {
    let n2, i2, s2, r2, a2, l2, o2 = t2;
    if (this.tokens.links) {
      const t3 = Object.keys(this.tokens.links);
      if (t3.length > 0)
        for (; null != (r2 = this.tokenizer.rules.inline.reflinkSearch.exec(o2)); )
          t3.includes(r2[0].slice(r2[0].lastIndexOf("[") + 1, -1)) && (o2 = o2.slice(0, r2.index) + "[" + _("a", r2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; null != (r2 = this.tokenizer.rules.inline.blockSkip.exec(o2)); )
      o2 = o2.slice(0, r2.index) + "[" + _("a", r2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; null != (r2 = this.tokenizer.rules.inline.escapedEmSt.exec(o2)); )
      o2 = o2.slice(0, r2.index) + "++" + o2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; t2; )
      if (a2 || (l2 = ""), a2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((i3) => !!(n2 = i3.call({ lexer: this }, t2, e2)) && (t2 = t2.substring(n2.raw.length), e2.push(n2), true))))
        if (n2 = this.tokenizer.escape(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.tag(t2))
          t2 = t2.substring(n2.raw.length), i2 = e2[e2.length - 1], i2 && "text" === n2.type && "text" === i2.type ? (i2.raw += n2.raw, i2.text += n2.text) : e2.push(n2);
        else if (n2 = this.tokenizer.link(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.reflink(t2, this.tokens.links))
          t2 = t2.substring(n2.raw.length), i2 = e2[e2.length - 1], i2 && "text" === n2.type && "text" === i2.type ? (i2.raw += n2.raw, i2.text += n2.text) : e2.push(n2);
        else if (n2 = this.tokenizer.emStrong(t2, o2, l2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.codespan(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.br(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.del(t2))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (n2 = this.tokenizer.autolink(t2, R))
          t2 = t2.substring(n2.raw.length), e2.push(n2);
        else if (this.state.inLink || !(n2 = this.tokenizer.url(t2, R))) {
          if (s2 = t2, this.options.extensions && this.options.extensions.startInline) {
            let e3 = 1 / 0;
            const n3 = t2.slice(1);
            let i3;
            this.options.extensions.startInline.forEach(function(t3) {
              i3 = t3.call({ lexer: this }, n3), "number" == typeof i3 && i3 >= 0 && (e3 = Math.min(e3, i3));
            }), e3 < 1 / 0 && e3 >= 0 && (s2 = t2.substring(0, e3 + 1));
          }
          if (n2 = this.tokenizer.inlineText(s2, L))
            t2 = t2.substring(n2.raw.length), "_" !== n2.raw.slice(-1) && (l2 = n2.raw.slice(-1)), a2 = true, i2 = e2[e2.length - 1], i2 && "text" === i2.type ? (i2.raw += n2.raw, i2.text += n2.text) : e2.push(n2);
          else if (t2) {
            const e3 = "Infinite loop on byte: " + t2.charCodeAt(0);
            if (this.options.silent) {
              console.error(e3);
              break;
            }
            throw new Error(e3);
          }
        } else
          t2 = t2.substring(n2.raw.length), e2.push(n2);
    return e2;
  }
}
class C {
  constructor(t2) {
    this.options = t2 || e;
  }
  code(t2, e2, n2) {
    const i2 = (e2 || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const e3 = this.options.highlight(t2, i2);
      null != e3 && e3 !== t2 && (n2 = true, t2 = e3);
    }
    return t2 = t2.replace(/\n$/, "") + "\n", i2 ? '<pre><code class="' + this.options.langPrefix + o(i2, true) + '">' + (n2 ? t2 : o(t2, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? t2 : o(t2, true)) + "</code></pre>\n";
  }
  blockquote(t2) {
    return "<blockquote>\n" + t2 + "</blockquote>\n";
  }
  html(t2) {
    return t2;
  }
  heading(t2, e2, n2, i2) {
    return this.options.headerIds ? "<h" + e2 + ' id="' + this.options.headerPrefix + i2.slug(n2) + '">' + t2 + "</h" + e2 + ">\n" : "<h" + e2 + ">" + t2 + "</h" + e2 + ">\n";
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(t2, e2, n2) {
    const i2 = e2 ? "ol" : "ul";
    return "<" + i2 + (e2 && 1 !== n2 ? ' start="' + n2 + '"' : "") + ">\n" + t2 + "</" + i2 + ">\n";
  }
  listitem(t2) {
    return "<li>" + t2 + "</li>\n";
  }
  checkbox(t2) {
    return "<input " + (t2 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(t2) {
    return "<p>" + t2 + "</p>\n";
  }
  table(t2, e2) {
    return e2 && (e2 = "<tbody>" + e2 + "</tbody>"), "<table>\n<thead>\n" + t2 + "</thead>\n" + e2 + "</table>\n";
  }
  tablerow(t2) {
    return "<tr>\n" + t2 + "</tr>\n";
  }
  tablecell(t2, e2) {
    const n2 = e2.header ? "th" : "td";
    return (e2.align ? "<" + n2 + ' align="' + e2.align + '">' : "<" + n2 + ">") + t2 + "</" + n2 + ">\n";
  }
  strong(t2) {
    return "<strong>" + t2 + "</strong>";
  }
  em(t2) {
    return "<em>" + t2 + "</em>";
  }
  codespan(t2) {
    return "<code>" + t2 + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(t2) {
    return "<del>" + t2 + "</del>";
  }
  link(t2, e2, n2) {
    if (null === (t2 = m(this.options.sanitize, this.options.baseUrl, t2)))
      return n2;
    let i2 = '<a href="' + o(t2) + '"';
    return e2 && (i2 += ' title="' + e2 + '"'), i2 += ">" + n2 + "</a>", i2;
  }
  image(t2, e2, n2) {
    if (null === (t2 = m(this.options.sanitize, this.options.baseUrl, t2)))
      return n2;
    let i2 = '<img src="' + t2 + '" alt="' + n2 + '"';
    return e2 && (i2 += ' title="' + e2 + '"'), i2 += this.options.xhtml ? "/>" : ">", i2;
  }
  text(t2) {
    return t2;
  }
}
class M {
  strong(t2) {
    return t2;
  }
  em(t2) {
    return t2;
  }
  codespan(t2) {
    return t2;
  }
  del(t2) {
    return t2;
  }
  html(t2) {
    return t2;
  }
  text(t2) {
    return t2;
  }
  link(t2, e2, n2) {
    return "" + n2;
  }
  image(t2, e2, n2) {
    return "" + n2;
  }
  br() {
    return "";
  }
}
class q {
  constructor() {
    this.seen = {};
  }
  serialize(t2) {
    return t2.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(t2, e2) {
    let n2 = t2, i2 = 0;
    if (this.seen.hasOwnProperty(n2)) {
      i2 = this.seen[t2];
      do {
        i2++, n2 = t2 + "-" + i2;
      } while (this.seen.hasOwnProperty(n2));
    }
    return e2 || (this.seen[t2] = i2, this.seen[n2] = 0), n2;
  }
  slug(t2, e2 = {}) {
    const n2 = this.serialize(t2);
    return this.getNextSafeSlug(n2, e2.dryrun);
  }
}
class O {
  constructor(t2) {
    this.options = t2 || e, this.options.renderer = this.options.renderer || new C(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new M(), this.slugger = new q();
  }
  static parse(t2, e2) {
    return new O(e2).parse(t2);
  }
  static parseInline(t2, e2) {
    return new O(e2).parseInline(t2);
  }
  parse(t2, e2 = true) {
    let n2, i2, s2, r2, a2, l2, o2, c2, u2, d2, h2, g2, m2, f2, k2, x2, w2, b2, y2, v2 = "";
    const S2 = t2.length;
    for (n2 = 0; n2 < S2; n2++)
      if (d2 = t2[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[d2.type] && (y2 = this.options.extensions.renderers[d2.type].call({ parser: this }, d2), false !== y2 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d2.type)))
        v2 += y2 || "";
      else
        switch (d2.type) {
          case "space":
            continue;
          case "hr":
            v2 += this.renderer.hr();
            continue;
          case "heading":
            v2 += this.renderer.heading(this.parseInline(d2.tokens), d2.depth, p(this.parseInline(d2.tokens, this.textRenderer)), this.slugger);
            continue;
          case "code":
            v2 += this.renderer.code(d2.text, d2.lang, d2.escaped);
            continue;
          case "table":
            for (c2 = "", o2 = "", r2 = d2.header.length, i2 = 0; i2 < r2; i2++)
              o2 += this.renderer.tablecell(this.parseInline(d2.header[i2].tokens), { header: true, align: d2.align[i2] });
            for (c2 += this.renderer.tablerow(o2), u2 = "", r2 = d2.rows.length, i2 = 0; i2 < r2; i2++) {
              for (l2 = d2.rows[i2], o2 = "", a2 = l2.length, s2 = 0; s2 < a2; s2++)
                o2 += this.renderer.tablecell(this.parseInline(l2[s2].tokens), { header: false, align: d2.align[s2] });
              u2 += this.renderer.tablerow(o2);
            }
            v2 += this.renderer.table(c2, u2);
            continue;
          case "blockquote":
            u2 = this.parse(d2.tokens), v2 += this.renderer.blockquote(u2);
            continue;
          case "list":
            for (h2 = d2.ordered, g2 = d2.start, m2 = d2.loose, r2 = d2.items.length, u2 = "", i2 = 0; i2 < r2; i2++)
              k2 = d2.items[i2], x2 = k2.checked, w2 = k2.task, f2 = "", k2.task && (b2 = this.renderer.checkbox(x2), m2 ? k2.tokens.length > 0 && "paragraph" === k2.tokens[0].type ? (k2.tokens[0].text = b2 + " " + k2.tokens[0].text, k2.tokens[0].tokens && k2.tokens[0].tokens.length > 0 && "text" === k2.tokens[0].tokens[0].type && (k2.tokens[0].tokens[0].text = b2 + " " + k2.tokens[0].tokens[0].text)) : k2.tokens.unshift({ type: "text", text: b2 }) : f2 += b2), f2 += this.parse(k2.tokens, m2), u2 += this.renderer.listitem(f2, w2, x2);
            v2 += this.renderer.list(u2, h2, g2);
            continue;
          case "html":
            v2 += this.renderer.html(d2.text);
            continue;
          case "paragraph":
            v2 += this.renderer.paragraph(this.parseInline(d2.tokens));
            continue;
          case "text":
            for (u2 = d2.tokens ? this.parseInline(d2.tokens) : d2.text; n2 + 1 < S2 && "text" === t2[n2 + 1].type; )
              d2 = t2[++n2], u2 += "\n" + (d2.tokens ? this.parseInline(d2.tokens) : d2.text);
            v2 += e2 ? this.renderer.paragraph(u2) : u2;
            continue;
          default: {
            const t3 = 'Token with "' + d2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(t3);
            throw new Error(t3);
          }
        }
    return v2;
  }
  parseInline(t2, e2) {
    e2 = e2 || this.renderer;
    let n2, i2, s2, r2 = "";
    const a2 = t2.length;
    for (n2 = 0; n2 < a2; n2++)
      if (i2 = t2[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i2.type] && (s2 = this.options.extensions.renderers[i2.type].call({ parser: this }, i2), false !== s2 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i2.type)))
        r2 += s2 || "";
      else
        switch (i2.type) {
          case "escape":
            r2 += e2.text(i2.text);
            break;
          case "html":
            r2 += e2.html(i2.text);
            break;
          case "link":
            r2 += e2.link(i2.href, i2.title, this.parseInline(i2.tokens, e2));
            break;
          case "image":
            r2 += e2.image(i2.href, i2.title, i2.text);
            break;
          case "strong":
            r2 += e2.strong(this.parseInline(i2.tokens, e2));
            break;
          case "em":
            r2 += e2.em(this.parseInline(i2.tokens, e2));
            break;
          case "codespan":
            r2 += e2.codespan(i2.text);
            break;
          case "br":
            r2 += e2.br();
            break;
          case "del":
            r2 += e2.del(this.parseInline(i2.tokens, e2));
            break;
          case "text":
            r2 += e2.text(i2.text);
            break;
          default: {
            const t3 = 'Token with "' + i2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(t3);
            throw new Error(t3);
          }
        }
    return r2;
  }
}
function P(t2, e2, n2) {
  if (null == t2)
    throw new Error("marked(): input parameter is undefined or null");
  if ("string" != typeof t2)
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t2) + ", string expected");
  if ("function" == typeof e2 && (n2 = e2, e2 = null), T(e2 = y({}, P.defaults, e2 || {})), n2) {
    const i2 = e2.highlight;
    let s2;
    try {
      s2 = I.lex(t2, e2);
    } catch (t3) {
      return n2(t3);
    }
    const r2 = function(t3) {
      let r3;
      if (!t3)
        try {
          e2.walkTokens && P.walkTokens(s2, e2.walkTokens), r3 = O.parse(s2, e2);
        } catch (e3) {
          t3 = e3;
        }
      return e2.highlight = i2, t3 ? n2(t3) : n2(null, r3);
    };
    if (!i2 || i2.length < 3)
      return r2();
    if (delete e2.highlight, !s2.length)
      return r2();
    let a2 = 0;
    return P.walkTokens(s2, function(t3) {
      "code" === t3.type && (a2++, setTimeout(() => {
        i2(t3.text, t3.lang, function(e3, n3) {
          if (e3)
            return r2(e3);
          null != n3 && n3 !== t3.text && (t3.text = n3, t3.escaped = true), a2--, 0 === a2 && r2();
        });
      }, 0));
    }), void (0 === a2 && r2());
  }
  try {
    const n3 = I.lex(t2, e2);
    return e2.walkTokens && P.walkTokens(n3, e2.walkTokens), O.parse(n3, e2);
  } catch (t3) {
    if (t3.message += "\nPlease report this to https://github.com/markedjs/marked.", e2.silent)
      return "<p>An error occurred:</p><pre>" + o(t3.message + "", true) + "</pre>";
    throw t3;
  }
}
P.options = P.setOptions = function(t2) {
  var n2;
  return y(P.defaults, t2), n2 = P.defaults, e = n2, P;
}, P.getDefaults = t, P.defaults = e, P.use = function(...t2) {
  const e2 = y({}, ...t2), n2 = P.defaults.extensions || { renderers: {}, childTokens: {} };
  let i2;
  t2.forEach((t3) => {
    if (t3.extensions && (i2 = true, t3.extensions.forEach((t4) => {
      if (!t4.name)
        throw new Error("extension name required");
      if (t4.renderer) {
        const e3 = n2.renderers ? n2.renderers[t4.name] : null;
        n2.renderers[t4.name] = e3 ? function(...n3) {
          let i3 = t4.renderer.apply(this, n3);
          return false === i3 && (i3 = e3.apply(this, n3)), i3;
        } : t4.renderer;
      }
      if (t4.tokenizer) {
        if (!t4.level || "block" !== t4.level && "inline" !== t4.level)
          throw new Error("extension level must be 'block' or 'inline'");
        n2[t4.level] ? n2[t4.level].unshift(t4.tokenizer) : n2[t4.level] = [t4.tokenizer], t4.start && ("block" === t4.level ? n2.startBlock ? n2.startBlock.push(t4.start) : n2.startBlock = [t4.start] : "inline" === t4.level && (n2.startInline ? n2.startInline.push(t4.start) : n2.startInline = [t4.start]));
      }
      t4.childTokens && (n2.childTokens[t4.name] = t4.childTokens);
    })), t3.renderer) {
      const n3 = P.defaults.renderer || new C();
      for (const e3 in t3.renderer) {
        const i3 = n3[e3];
        n3[e3] = (...s2) => {
          let r2 = t3.renderer[e3].apply(n3, s2);
          return false === r2 && (r2 = i3.apply(n3, s2)), r2;
        };
      }
      e2.renderer = n3;
    }
    if (t3.tokenizer) {
      const n3 = P.defaults.tokenizer || new A();
      for (const e3 in t3.tokenizer) {
        const i3 = n3[e3];
        n3[e3] = (...s2) => {
          let r2 = t3.tokenizer[e3].apply(n3, s2);
          return false === r2 && (r2 = i3.apply(n3, s2)), r2;
        };
      }
      e2.tokenizer = n3;
    }
    if (t3.walkTokens) {
      const n3 = P.defaults.walkTokens;
      e2.walkTokens = function(e3) {
        t3.walkTokens.call(this, e3), n3 && n3.call(this, e3);
      };
    }
    i2 && (e2.extensions = n2), P.setOptions(e2);
  });
}, P.walkTokens = function(t2, e2) {
  for (const n2 of t2)
    switch (e2.call(P, n2), n2.type) {
      case "table":
        for (const t3 of n2.header)
          P.walkTokens(t3.tokens, e2);
        for (const t3 of n2.rows)
          for (const n3 of t3)
            P.walkTokens(n3.tokens, e2);
        break;
      case "list":
        P.walkTokens(n2.items, e2);
        break;
      default:
        P.defaults.extensions && P.defaults.extensions.childTokens && P.defaults.extensions.childTokens[n2.type] ? P.defaults.extensions.childTokens[n2.type].forEach(function(t3) {
          P.walkTokens(n2[t3], e2);
        }) : n2.tokens && P.walkTokens(n2.tokens, e2);
    }
}, P.parseInline = function(t2, e2) {
  if (null == t2)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if ("string" != typeof t2)
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(t2) + ", string expected");
  T(e2 = y({}, P.defaults, e2 || {}));
  try {
    const n2 = I.lexInline(t2, e2);
    return e2.walkTokens && P.walkTokens(n2, e2.walkTokens), O.parseInline(n2, e2);
  } catch (t3) {
    if (t3.message += "\nPlease report this to https://github.com/markedjs/marked.", e2.silent)
      return "<p>An error occurred:</p><pre>" + o(t3.message + "", true) + "</pre>";
    throw t3;
  }
}, P.Parser = O, P.parser = O.parse, P.Renderer = C, P.TextRenderer = M, P.Lexer = I, P.lexer = I.lex, P.Tokenizer = A, P.Slugger = q, P.parse = P;
const notes_esm = () => {
  let t2, e2, n2 = null;
  function i2() {
    if (n2 && !n2.closed)
      n2.focus();
    else {
      if (n2 = window.open("about:blank", "reveal.js - Notes", "width=1100,height=700"), n2.marked = P, n2.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`), !n2)
        return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");
      !function() {
        const i3 = e2.getConfig().url, s3 = "string" == typeof i3 ? i3 : window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
        t2 = setInterval(function() {
          n2.postMessage(JSON.stringify({ namespace: "reveal-notes", type: "connect", state: e2.getState(), url: s3 }), "*");
        }, 500), window.addEventListener("message", r2);
      }();
    }
  }
  function s2(t3) {
    let i3 = e2.getCurrentSlide(), s3 = i3.querySelectorAll("aside.notes"), r3 = i3.querySelector(".current-fragment"), a3 = { namespace: "reveal-notes", type: "state", notes: "", markdown: false, whitespace: "normal", state: e2.getState() };
    if (i3.hasAttribute("data-notes") && (a3.notes = i3.getAttribute("data-notes"), a3.whitespace = "pre-wrap"), r3) {
      let t4 = r3.querySelector("aside.notes");
      t4 ? (a3.notes = t4.innerHTML, a3.markdown = "string" == typeof t4.getAttribute("data-markdown"), s3 = null) : r3.hasAttribute("data-notes") && (a3.notes = r3.getAttribute("data-notes"), a3.whitespace = "pre-wrap", s3 = null);
    }
    s3 && (a3.notes = Array.from(s3).map((t4) => t4.innerHTML).join("\n"), a3.markdown = s3[0] && "string" == typeof s3[0].getAttribute("data-markdown")), n2.postMessage(JSON.stringify(a3), "*");
  }
  function r2(i3) {
    if (function(t3) {
      try {
        return window.location.origin === t3.source.location.origin;
      } catch (t4) {
        return false;
      }
    }(i3)) {
      let s3 = JSON.parse(i3.data);
      s3 && "reveal-notes" === s3.namespace && "connected" === s3.type ? (clearInterval(t2), a2()) : s3 && "reveal-notes" === s3.namespace && "call" === s3.type && function(t3, i4, s4) {
        let r3 = e2[t3].apply(e2, i4);
        n2.postMessage(JSON.stringify({ namespace: "reveal-notes", type: "return", result: r3, callId: s4 }), "*");
      }(s3.methodName, s3.arguments, s3.callId);
    }
  }
  function a2() {
    e2.on("slidechanged", s2), e2.on("fragmentshown", s2), e2.on("fragmenthidden", s2), e2.on("overviewhidden", s2), e2.on("overviewshown", s2), e2.on("paused", s2), e2.on("resumed", s2), s2();
  }
  return { id: "notes", init: function(t3) {
    e2 = t3, /receiver/i.test(window.location.search) || (null !== window.location.search.match(/(\?|\&)notes/gi) ? i2() : window.addEventListener("message", (t4) => {
      if (!n2 && "string" == typeof t4.data) {
        let i3;
        try {
          i3 = JSON.parse(t4.data);
        } catch (t5) {
        }
        i3 && "reveal-notes" === i3.namespace && "heartbeat" === i3.type && (e3 = t4.source, n2 && !n2.closed ? n2.focus() : (n2 = e3, window.addEventListener("message", r2), a2()));
      }
      var e3;
    }), e2.addKeyBinding({ keyCode: 83, key: "S", description: "Speaker notes view" }, function() {
      i2();
    }));
  }, open: i2 };
};
export {
  notes_esm as default
};
