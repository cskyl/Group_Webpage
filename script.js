/* ============================================================
   Ghadiyaram Lab — v5 · rendering + light interactions
   All content lives in data.js; this file paints it in.
   ============================================================ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const initials = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

/* Deterministic, muted avatar tint per person — subtle, academic. */
const PALETTE = [
  ["#fbeaea", "#a30000"], ["#eef1f6", "#3a5a8c"], ["#eef4ee", "#3d6b4a"],
  ["#f6f0e8", "#8a5a22"], ["#f3eef6", "#6a4a8c"], ["#fdf0e8", "#a8551f"], ["#eaf2f3", "#2f6f73"],
];
const tint = (name) => {
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return PALETTE[h % PALETTE.length];
};

/* ── Hero + brand text ────────────────────── */
function renderHero() {
  // Lab name is intentionally blank for now — fall back to the PI's name.
  const brand = SITE.name || PI.name;

  $("#heroEyebrow").textContent = SITE.eyebrow;
  const lede = $("#heroLede");
  if (SITE.name) {
    $("#heroTitle").textContent = SITE.name;
    lede.innerHTML = SITE.tagline || SITE.lede;
  } else {
    $("#heroTitle").innerHTML = SITE.lede;     // neutral headline, no invented lab name
    lede.innerHTML = SITE.tagline || "";
  }
  lede.style.display = lede.innerHTML ? "" : "none";

  // Brand in nav, footer, and the document title.
  const set = (id, txt) => { const n = $("#" + id); if (n) n.textContent = txt; };
  set("brandName", brand);
  set("footBrand", brand);
  set("footName", brand);
  document.title = brand + " — Boston University";
}

/* ── PI (hero card) ───────────────────────── */
function renderPI() {
  const p = PI;
  const photo = $("#piPhoto");
  if (p.photo) { photo.style.backgroundImage = `url("${p.photo}")`; }
  else photo.textContent = initials(p.name);

  const links = $("#piLinks");
  Object.entries(p.links).forEach(([label, url]) => {
    const a = el("a", null, label); a.href = url; a.target = "_blank"; a.rel = "noopener";
    links.appendChild(a);
  });
}

/* ── Research ─────────────────────────────── */
function renderResearch() {
  const grid = $("#research-grid");
  RESEARCH.forEach((r, i) => {
    const c = el("article", "rcard reveal");
    c.innerHTML = `<span class="rcard__n">0${i + 1}</span><h3>${r.title}</h3><p>${r.text}</p>`;
    grid.appendChild(c);
  });
}

/* ── People ───────────────────────────────── */
function personCard(p) {
  const c = el("article", "pcard reveal");
  const av = el("div", "pavatar");
  if (p.photo) { av.style.backgroundImage = `url("${p.photo}")`; }
  else {
    const [bg, fg] = tint(p.name);
    av.style.background = bg; av.style.color = fg; av.textContent = initials(p.name);
  }
  c.appendChild(av);
  c.insertAdjacentHTML("beforeend",
    `<div class="pcard__name">${p.name}</div>
     <div class="pcard__meta">${p.role}${p.years ? " · since " + p.years : ""}</div>
     ${p.note ? `<div class="pcard__note">${p.note}</div>` : ""}`);
  const links = Object.entries(p.links || {});
  if (links.length) {
    const lw = el("div", "pcard__links");
    links.forEach(([label, url]) => {
      const a = el("a", null, label); a.href = url; a.target = "_blank"; a.rel = "noopener";
      lw.appendChild(a);
    });
    c.appendChild(lw);
  }
  return c;
}
function renderPeople() {
  ["phd", "ms", "ugrad"].forEach(group =>
    (PEOPLE[group] || []).forEach(p => $("#" + group).appendChild(personCard(p))));
}

/* ── Publications (visual card grid, newest first) ─── */
function renderPubs() {
  const list = $("#pubList");
  PUBS.forEach(p => {
    const card = el("article", "pubcard reveal");
    const primary = p.links ? Object.values(p.links)[0] : p.link;
    const badge = p.badge ? `<span class="pubcard__badge">${p.badge}</span>` : "";

    let figInner;
    if (p.fig) {
      const isVid = /\.(mp4|webm)$/i.test(p.fig);
      figInner = isVid
        ? `<video class="pubcard__media" src="${p.fig}" autoplay loop muted playsinline></video>`
        : `<img class="pubcard__media" src="${p.fig}" alt="" loading="lazy">`;
    } else {
      figInner = `<span class="pubcard__ph">${p.year}</span>`;
    }
    const figHTML = `<div class="pubcard__fig${p.fig ? "" : " is-empty"}">${figInner}${badge}</div>`;

    const links = p.links
      ? `<div class="pubcard__links">` +
        Object.entries(p.links).map(([l, u]) =>
          `<a href="${u}" target="_blank" rel="noopener">${l} ↗</a>`).join("") + `</div>`
      : "";

    card.innerHTML = figHTML +
      `<div class="pubcard__body">
         <div class="pubcard__venue">${p.venue} · ${p.year}</div>
         <h3 class="pubcard__title">${primary
           ? `<a href="${primary}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</h3>
         <p class="pubcard__authors">${p.authors}</p>
         ${links}
       </div>`;
    list.appendChild(card);
  });
}

/* ── News ─────────────────────────────────── */
function renderNews() {
  const list = $("#newsList");
  NEWS.forEach(n => {
    const li = el("li", "reveal");
    li.innerHTML = `<div class="news__date">${n.date}</div><div class="news__text">${n.text}</div>`;
    list.appendChild(li);
  });
}

/* ── Interactions ─────────────────────────── */
function initUI() {
  $("#year").textContent = new Date().getFullYear();

  const nav = $("#nav"), toTop = $("#toTop");
  const onScroll = () => {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
    toTop.classList.toggle("show", window.scrollY > 600);
  };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const burger = $("#navBurger"), links = $("#navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  const sections = $$("main section[id]");
  const navMap = new Map($$("#navLinks a").map(a => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navMap.forEach(a => a.classList.remove("active"));
        navMap.get(e.target.id)?.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(n => io.observe(n));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderPI();
  renderResearch();
  renderPeople();
  renderPubs();
  renderNews();
  initUI();
});
