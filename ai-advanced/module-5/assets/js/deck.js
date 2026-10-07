/* Module 5 deck engine: navigation, scaling, TOC, notes, copy, quiz, checklists, click demos, detail panels. */
(function () {
  "use strict";

  const W = 1600, H = 900;
  const body = document.body;
  const stage = document.querySelector(".stage");
  const slides = Array.from(stage.querySelectorAll(":scope > .slide"));
  const total = slides.length;
  const deckLabel = body.dataset.deck || "";
  const deckTitle = body.dataset.deckTitle || document.title;
  const home = body.dataset.home || "index.html";
  let cur = 0;

  /* ---------- helpers ---------- */
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const titleOf = (s) => {
    if (s.dataset.title) return s.dataset.title;
    const h = s.querySelector(".t, h1, h2");
    return h ? h.textContent.replace(/\s+/g, " ").trim() : "Slide";
  };

  /* ---------- scale ---------- */
  function fit() {
    const s = Math.min(window.innerWidth / W, window.innerHeight / H);
    stage.style.setProperty("--scale", s);
  }
  window.addEventListener("resize", fit);
  fit();

  /* ---------- per-slide setup ---------- */
  slides.forEach((s, i) => {
    // stagger index for entrance animation
    const kids = s.querySelectorAll(":scope > .s-head, :scope > .s-body > *");
    kids.forEach((k, j) => k.style.setProperty("--i", j));
    if (s.classList.contains("s-cover") || s.classList.contains("s-divider")) {
      Array.from(s.children).forEach((k, j) => k.style.setProperty("--i", j));
    }
    // footer
    if (!s.classList.contains("s-cover") && !s.hasAttribute("data-nofoot")) {
      const sec = s.dataset.sec || "";
      const left = s.classList.contains("s-divider") ? `<span><b>Module 5 · ${deckLabel}</b></span>` : `<span><b>Module 5 · ${deckLabel}</b>&nbsp;&nbsp;${esc(sec)}</span>`;
      s.appendChild(el("div", "s-foot", `${left}<span class="pg">${i + 1} / ${total}</span>`));
    }
  });

  /* ---------- code blocks: header, copy, highlight ---------- */
  function highlightMd(src) {
    const lines = src.replace(/\n$/, "").split("\n");
    let front = 0; // 0 before, 1 inside frontmatter, 2 after
    return lines.map((raw, idx) => {
      let line = esc(raw);
      if (/^---\s*$/.test(raw)) {
        if (idx === 0) front = 1; else if (front === 1) front = 2;
        return `<span class="p">${line}</span>`;
      }
      if (front === 1) {
        const m = line.match(/^(\s*)([\w-]+):(.*)$/);
        if (m) return `${m[1]}<span class="k">${m[2]}</span><span class="p">:</span>${m[3]}`;
        return line;
      }
      if (/^\s*&lt;!--.*--&gt;\s*$/.test(line)) return `<span class="c">${line}</span>`;
      if (/^#{1,6}\s/.test(raw)) return `<span class="h">${line}</span>`;
      line = line.replace(/^(\s*)([-*]|\d+\.)(\s)/, '$1<span class="m">$2</span>$3');
      line = line.replace(/\*\*(.+?)\*\*/g, '<span class="p">**</span><span class="b">$1</span><span class="p">**</span>');
      line = line.replace(/`([^`]+)`/g, '<span class="q">`$1`</span>');
      line = line.replace(/(^|\s)\|(?=\s|$)/g, '$1<span class="p">|</span>');
      return line;
    }).join("\n");
  }

  document.querySelectorAll(".code").forEach((box) => {
    const pre = box.querySelector("pre");
    if (!pre) return;
    const text = pre.textContent.replace(/^\n/, "");
    pre.textContent = text;
    if (pre.dataset.lang === "md") pre.innerHTML = highlightMd(text);
    const file = box.dataset.file || "";
    const head = el("div", "code-head",
      `<span class="fn"><i class="ph ph-file-text"></i>${esc(file)}</span>`);
    const btn = el("button", "copy-btn", `<i class="ph ph-copy"></i><span>Sao chép</span>`);
    btn.type = "button";
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const ta = el("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (__) {}
        ta.remove();
      }
      btn.classList.add("done");
      btn.querySelector("span").textContent = "Đã chép";
      setTimeout(() => { btn.classList.remove("done"); btn.querySelector("span").textContent = "Sao chép"; }, 1600);
    });
    head.appendChild(btn);
    box.insertBefore(head, pre);
  });

  /* ---------- quiz ---------- */
  document.querySelectorAll(".quiz").forEach((q) => {
    const ans = q.dataset.answer;
    const fb = q.querySelector(".fb");
    q.querySelectorAll(".opt").forEach((o) => {
      o.type = "button";
      o.addEventListener("click", (e) => {
        e.stopPropagation();
        if (q.classList.contains("done")) return;
        q.classList.add("done");
        const ok = o.dataset.k === ans;
        o.classList.add(ok ? "right" : "wrong");
        if (!ok) { const r = q.querySelector(`.opt[data-k="${ans}"]`); if (r) r.classList.add("right"); }
        if (fb) { fb.textContent = ok ? fb.dataset.ok : fb.dataset.no; fb.classList.add(ok ? "ok" : "no"); }
      });
    });
    const reset = q.querySelector(".reset");
    if (reset) reset.addEventListener("click", () => {
      q.classList.remove("done");
      q.querySelectorAll(".opt").forEach((o) => o.classList.remove("right", "wrong"));
      if (fb) { fb.textContent = ""; fb.classList.remove("ok", "no"); }
    });
  });

  /* ---------- click demo: a button with data-go sets data-state on its [data-demo] box ---------- */
  document.querySelectorAll("[data-demo]").forEach((d) => {
    d.addEventListener("click", (e) => {
      const b = e.target.closest("[data-go]");
      if (!b || !d.contains(b)) return;
      e.stopPropagation();
      d.dataset.state = b.dataset.go;
    });
  });

  /* ---------- detail panel: click [data-detail] to show the matching [data-for] block ---------- */
  document.querySelectorAll("[data-details]").forEach((box) => {
    const show = (k) => {
      box.querySelectorAll("[data-for]").forEach((d) => d.classList.toggle("on", d.dataset.for === k));
      box.querySelectorAll("[data-detail]").forEach((el) => el.classList.toggle("sel", el.dataset.detail === k));
    };
    box.addEventListener("click", (e) => {
      const t = e.target.closest("[data-detail]");
      if (!t || !box.contains(t)) return;
      e.stopPropagation();
      show(t.dataset.detail);
    });
    show(box.dataset.details || "intro");
  });

  /* ---------- checker ---------- */
  document.querySelectorAll(".checker").forEach((c) => {
    const items = Array.from(c.querySelectorAll(".chk:not(.opt)"));
    // optional items (.chk.opt) can be ticked but do not count toward the verdict
    c.querySelectorAll(".chk.opt input").forEach((inp) => inp.addEventListener("change", () => inp.closest(".chk").classList.toggle("on", inp.checked)));
    const v = document.getElementById(c.dataset.verdict) || c.querySelector(".verdict");
    const midMin = parseInt(c.dataset.mid || "3", 10);
    const fullMin = parseInt(c.dataset.fullMin || String(items.length), 10);
    const update = () => {
      const n = items.filter((i) => i.querySelector("input").checked).length;
      items.forEach((i) => i.classList.toggle("on", i.querySelector("input").checked));
      if (!v) return;
      const left = items.length - n;
      let key = "none";
      if (n >= fullMin) key = "full"; else if (n >= midMin) key = "part";
      const [t, d] = (v.dataset[key] || "|").split("|");
      v.className = "verdict" + (key === "full" ? " v-ok" : key === "part" ? " v-mid" : "");
      v.innerHTML = `<b>${t.replace("{left}", left)}</b>${d.replace("{left}", left)} <span class="meter">(${n}/${items.length})</span>`;
    };
    items.forEach((i) => i.querySelector("input").addEventListener("change", update));
    update();
  });

  /* ---------- UI chrome ---------- */
  const progress = el("div", "ui-progress");
  const ctrl = el("div", "ui-ctrl", `
    <button type="button" data-a="toc" title="Mục lục (M)" aria-label="Mục lục"><i class="ph ph-list"></i></button>
    <span class="sep"></span>
    <button type="button" data-a="prev" title="Slide trước (←)" aria-label="Slide trước"><i class="ph ph-caret-left"></i></button>
    <span class="count"></span>
    <button type="button" data-a="next" title="Slide sau (→)" aria-label="Slide sau"><i class="ph ph-caret-right"></i></button>
    <span class="sep"></span>
    <button type="button" data-a="notes" title="Ghi chú giảng viên (N)" aria-label="Ghi chú giảng viên"><i class="ph ph-note"></i></button>
    <button type="button" data-a="full" title="Toàn màn hình (F)" aria-label="Toàn màn hình"><i class="ph ph-corners-out"></i></button>
    <button type="button" data-a="help" title="Phím tắt (?)" aria-label="Phím tắt"><i class="ph ph-keyboard"></i></button>`);
  const scrim = el("div", "scrim");
  const toc = el("aside", "panel toc-panel", `
    <header><a href="${home}"><i class="ph ph-arrow-left"></i>Tổng quan Module 5</a><h2>${esc(deckLabel)}: ${esc(deckTitle)}</h2></header>
    <nav class="toc-list"></nav>`);
  const notes = el("aside", "panel notes-panel", `
    <header><span><i class="ph ph-note"></i> Ghi chú giảng viên</span><button type="button" aria-label="Đóng"><i class="ph ph-x"></i></button></header>
    <div class="notes-body"></div>`);
  const help = el("div", "help", `<div class="box"><h2>Phím tắt</h2><dl>
    <dt><kbd>→</kbd> <kbd>Space</kbd> <kbd>PgDn</kbd></dt><dd>Slide sau</dd>
    <dt><kbd>←</kbd> <kbd>PgUp</kbd></dt><dd>Slide trước</dd>
    <dt><kbd>Home</kbd> <kbd>End</kbd></dt><dd>Slide đầu, slide cuối</dd>
    <dt><kbd>M</kbd></dt><dd>Mục lục</dd>
    <dt><kbd>N</kbd></dt><dd>Ghi chú giảng viên</dd>
    <dt><kbd>F</kbd></dt><dd>Toàn màn hình</dd>
    <dt><kbd>Ctrl</kbd> + <kbd>P</kbd></dt><dd>Xuất PDF (mỗi slide một trang, lề: Không)</dd>
    <dt><kbd>Esc</kbd></dt><dd>Đóng bảng</dd></dl></div>`);
  document.body.append(progress, ctrl, scrim, toc, notes, help);

  // TOC
  const list = toc.querySelector(".toc-list");
  let lastSec = null;
  slides.forEach((s, i) => {
    const sec = s.dataset.sec || "Mở đầu";
    if (sec !== lastSec) { list.appendChild(el("div", "toc-sec", esc(sec))); lastSec = sec; }
    const b = el("button", "toc-item", `<span>${i + 1}</span><span>${esc(titleOf(s))}</span>`);
    b.type = "button";
    b.addEventListener("click", () => { go(i); closePanels(); });
    list.appendChild(b);
  });
  const tocItems = list.querySelectorAll(".toc-item");

  function closePanels() {
    toc.classList.remove("open"); notes.classList.remove("open"); help.classList.remove("open"); scrim.classList.remove("open");
  }
  function togglePanel(p) {
    const open = !p.classList.contains("open");
    closePanels();
    if (open) { p.classList.add("open"); if (p === toc) scrim.classList.add("open"); }
  }
  scrim.addEventListener("click", closePanels);
  notes.querySelector("header button").addEventListener("click", closePanels);
  help.addEventListener("click", closePanels);

  ctrl.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const a = b.dataset.a;
    if (a === "prev") go(cur - 1);
    else if (a === "next") go(cur + 1);
    else if (a === "toc") togglePanel(toc);
    else if (a === "notes") togglePanel(notes);
    else if (a === "help") togglePanel(help);
    else if (a === "full") toggleFull();
  });

  function toggleFull() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    else document.exitFullscreen && document.exitFullscreen();
  }

  /* ---------- navigation ---------- */
  function go(i, fromHash) {
    i = Math.max(0, Math.min(total - 1, i));
    slides[cur].classList.remove("is-active");
    cur = i;
    const s = slides[cur];
    s.classList.add("is-active");
    progress.style.width = ((cur + 1) / total * 100) + "%";
    ctrl.querySelector(".count").textContent = `${cur + 1} / ${total}`;
    tocItems.forEach((t, j) => t.classList.toggle("on", j === cur));
    const n = s.querySelector(":scope > .notes");
    notes.querySelector(".notes-body").innerHTML = n ? n.innerHTML : "<p>Slide này không có ghi chú.</p>";
    if (!fromHash) history.replaceState(null, "", "#" + (cur + 1));
    document.title = `${cur + 1}. ${titleOf(s)} · ${deckLabel}`;
  }

  function fromHash() {
    const n = parseInt((location.hash || "").replace(/[^0-9]/g, ""), 10);
    return Number.isFinite(n) && n >= 1 ? n - 1 : 0;
  }
  window.addEventListener("hashchange", () => go(fromHash(), true));

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    const isToggle = tag === "input" && /checkbox|radio/.test(e.target.type);
    if ((tag === "input" && !isToggle) || tag === "textarea" || e.target.isContentEditable) return;
    const k = e.key;
    if (k === " " && (tag === "button" || isToggle)) return;
    if (k === "ArrowRight" || k === "PageDown" || k === " ") { e.preventDefault(); go(cur + 1); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); go(cur - 1); }
    else if (k === "Home") { e.preventDefault(); go(0); }
    else if (k === "End") { e.preventDefault(); go(total - 1); }
    else if (k === "m" || k === "M") togglePanel(toc);
    else if (k === "n" || k === "N") togglePanel(notes);
    else if (k === "f" || k === "F") toggleFull();
    else if (k === "?" || k === "h" || k === "H") togglePanel(help);
    else if (k === "Escape") closePanels();
  });

  // swipe
  let tx = null, ty = null;
  stage.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (tx == null) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
    tx = ty = null;
  }, { passive: true });

  // idle controls
  let idleT;
  const wake = () => { ctrl.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(() => ctrl.classList.add("idle"), 2600); };
  document.addEventListener("mousemove", wake);
  wake();

  go(fromHash(), true);
})();
