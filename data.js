/* ============================================================
   Ghadiyaram Lab — site content  (v5 · academic edition)
   Edit this file to update people, papers, and news.
   To add a photo, set  photo: "img/firstname.jpg"  on a person.
   ============================================================ */

/* ── Hero text ───────────────────────────────────────────────
   Neutral by default — no claims about the group's focus.
   The PI can add a research tagline below when ready.
   ──────────────────────────────────────────────────────────── */
const SITE = {
  name:    "",   // ← lab name — leave blank until you choose one (falls back to the PI's name)
  eyebrow: "Boston University · Department of Computer Science",
  lede:    "Research group of Prof. Deepti Ghadiyaram.",
  tagline: "",   // ← optional research tagline shown under the title
};

const PI = {
  name: "Deepti Ghadiyaram",
  role: "Assistant Professor",
  dept: "Department of Computer Science",
  chair: "Moorman‑Simon Career Development Professorship",
  photo: "img/deepti-ghadiyaram.png",
  email: "dghadiya@bu.edu",
  links: {
    Homepage: "https://deeptigp.github.io/",
    Scholar:  "https://scholar.google.com/citations?user=NyKCrmoAAAAJ&hl=en",
    Twitter:  "https://twitter.com/deeptigp",
    LinkedIn: "https://www.linkedin.com/in/deeptigp/",
    GitHub:   "https://github.com/deeptigp",
  },
  bio: [
    "Assistant Professor of Computer Science at Boston University. Previously a Senior Research Scientist at Meta AI (FAIR); PhD from UT Austin with Alan Bovik.",
  ],
  facts: [
    ["Previously", "Meta AI &middot; FAIR"],
    ["PhD", "UT Austin, 2017"],
    ["Award", "NAIRR Deep Partnership"],
    ["Service", "Area Chair, CVPR 2026"],
  ],
  teaching: [
    ["CS 599", "Advanced Topics in Computer Vision"],
    ["CS 542", "Principles of Machine Learning"],
    ["CS 541", "Applied Machine Learning"],
  ],
};

/* Research directions — one short line each. */
const RESEARCH = [
  { title: "Concept Control &amp; Safety",          text: "Steering generative models toward &mdash; and away from &mdash; concepts at test time." },
  { title: "Interpretability",                      text: "Reading model internals with sparse autoencoders and counterfactuals." },
  { title: "Multimodal Reasoning",                  text: "How MLLMs integrate vision, audio, and text &mdash; and when to trust each." },
  { title: "Perceptual Quality &amp; Fairness",     text: "How humans perceive image and video quality; fair, bias-aware vision." },
  { title: "Robust &amp; Efficient Generation",     text: "Faster, more reliable diffusion sampling under pressure." },
];

const PEOPLE = {
  phd: [
    { name: "Dahye Kim",          role: "PhD Student", years: "2024",
      note: "Concept control &amp; interpretability in diffusion models",
      photo: "img/dahye-kim.jpg",
      links: { Web: "https://kim-dahye.github.io/", Scholar: "https://openreview.net/profile?id=~Dahye_Kim2" } },
    { name: "Tianle Chen",        role: "PhD Student", years: "2024",
      note: "Multimodal reasoning &amp; audio-visual robustness in MLLMs",
      photo: "img/tianle-chen.jpg",
      links: { Web: "https://cskyl.github.io/Personal_website/" } },
    { name: "Nicholas Ikechukwu", role: "PhD Student", years: "2024",
      note: "Co-advised with Bryan Plummer",
      photo: "img/nicholas-ikechukwu.jpg",
      links: { Web: "https://www.bu.edu/cs/profiles/nicholas-ikechukwu/" } },
    { name: "Xavier Thomas",      role: "PhD Student", years: "2025",
      note: "Generative models &amp; robustness",
      photo: "img/xavier-thomas.jpg",
      links: { Web: "https://xavierohan.github.io/" } },
    { name: "Youngsun Lim",       role: "PhD Student", years: "2025",
      note: "Trustworthy visual generation",
      photo: "img/youngsun-lim.jpg",
      links: { Web: "https://sgt-lim.github.io/" } },
    { name: "Manushree Vasu",     role: "PhD Student", years: "2025",
      note: "Computer vision &amp; reasoning",
      links: { Web: "https://manushree635.github.io/" } },
  ],
  ms: [
    { name: "Mohammed Ifreen",  role: "MS Researcher", years: "2025", note: "Master&rsquo;s researcher",
      photo: "img/mohammed-ifreen.jpg",
      links: { Web: "https://www.ifreen.com/" } },
    { name: "Chaitanya Chakka", role: "MS Researcher", years: "2025", note: "Master&rsquo;s researcher",
      photo: "img/chaitanya-chakka.jpg",
      links: { Web: "https://chaitanya-chakka-portfolio.netlify.app/" } },
  ],
  ugrad: [
    { name: "Zachary Meurer",    role: "Undergraduate", years: "Fall 2025",     note: "Undergraduate researcher",
      links: { LinkedIn: "https://www.linkedin.com/in/zachary-meurer" } },
    { name: "Jason Qiu",         role: "Undergraduate", years: "Fall 2025",     note: "Undergraduate researcher",
      links: { LinkedIn: "https://www.linkedin.com/in/jqiu1" } },
    { name: "Michael Wakeham",   role: "Undergraduate", years: "Spring 2026",   note: "Undergraduate researcher",
      links: { LinkedIn: "https://www.linkedin.com/in/mikewakeham" } },
    { name: "Ryan Gilbert",      role: "Undergraduate", years: "UROP, Spr 2025", note: "UROP researcher",
      photo: "img/ryan-gilbert.jpg",
      links: { Web: "https://ryan-j-gilbert.github.io/portfolio-cv/" } },
    { name: "Audrey Zhang",      role: "High School",   years: "RISE, Sum 2025", note: "RISE mentee", links: {} },
    { name: "Ananya Srinivasan", role: "High School",   years: "Sum 2025",       note: "High-school volunteer", links: {} },
  ],
};

/* ── Publications ────────────────────────────────────────────
   Group-era work only (the lab started Sept 2024), newest first.
   Deepti Ghadiyaram is the senior author except where noted.
   Add new papers at the top.
   ──────────────────────────────────────────────────────────── */
const PUBS = [
  { title: "Swift Sampling: Selecting Temporal Surprises via Taylor Series",
    authors: "Dahye Kim, Bhuvan Sachdeva, Karan Uppal, Naman Gupta, Vineeth N. Balasubramanian, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2026",
    fig: "img/papers/2605.22678.png",
    links: { arXiv: "https://arxiv.org/abs/2605.22678" } },
  { title: "FAGER: Factually Grounded Evaluation and Refinement of Text-to-Image Models",
    authors: "Youngsun Lim, Cusuh Ham, Pin-Yu Chen, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2026",
    fig: "img/papers/2605.19111.png",
    links: { arXiv: "https://arxiv.org/abs/2605.19111" } },
  { title: "A Systematic Study of Cross-Modal Typographic Attacks on Audio-Visual Reasoning",
    authors: "Tianle Chen, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2026",
    fig: "img/papers/2604.03995.png",
    links: { arXiv: "https://arxiv.org/abs/2604.03995" } },
  { title: "Semantic Richness or Geometric Reasoning? The Fragility of VLM&rsquo;s Visual Invariance",
    authors: "Jason Qiu, Zachary Meurer, Xavier Thomas, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2026",
    fig: "img/papers/2604.01848.png",
    links: { arXiv: "https://arxiv.org/abs/2604.01848" } },
  { title: "DDiT: Dynamic Patch Scheduling for Efficient Diffusion Transformers",
    authors: "Dahye Kim, Deepti Ghadiyaram, Raghudeep Gadde",
    venue: "CVPR 2026", year: "2026", badge: "Spotlight",
    fig: "img/papers/2602.16968.png",
    links: { arXiv: "https://arxiv.org/abs/2602.16968" } },
  { title: "Generative Action Tell-Tales: Assessing Human Motion in Synthesized Videos",
    authors: "Xavier Thomas, Youngsun Lim, Ananya Srinivasan, Audrey Zheng, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2025",
    fig: "img/papers/2512.01803.png",
    links: { arXiv: "https://arxiv.org/abs/2512.01803" } },
  { title: "Some Modalities Are More Equal Than Others: Decoding and Architecting Multimodal Integration in MLLMs",
    authors: "Tianle Chen, Chaitanya Chakka, Arjun Reddy Akula, Xavier Thomas, Deepti Ghadiyaram",
    venue: "CVPR 2026", year: "2025", badge: "Findings",
    fig: "img/papers/2511.22826.png",
    links: { arXiv: "https://arxiv.org/abs/2511.22826" } },
  { title: "Improving Physical Object State Representation in Text-to-Image Generative Systems",
    authors: "Tianle Chen, Chaitanya Chakka, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2025",
    fig: "img/papers/2505.02236.png",
    links: { arXiv: "https://arxiv.org/abs/2505.02236" } },
  { title: "Progressive Prompt Detailing for Improved Alignment in Text-to-Image Generative Models",
    authors: "Ketan Suhaas Saichandran, Xavier Thomas, Prakhar Kaushik, Deepti Ghadiyaram",
    venue: "CVPR 2025 Workshop", year: "2025",
    fig: "img/papers/2503.17794.png",
    links: { arXiv: "https://arxiv.org/abs/2503.17794" } },
  { title: "What&rsquo;s in a Latent? Leveraging Diffusion Latent Space for Domain Generalization",
    authors: "Xavier Thomas, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2025",
    fig: "img/papers/2503.06698.png",
    links: { arXiv: "https://arxiv.org/abs/2503.06698" } },
  { title: "Concept Steerers: Leveraging K-Sparse Autoencoders for Test-Time Controllable Generations",
    authors: "Dahye Kim, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2025",
    fig: "img/papers/2501.19066.png",
    links: { arXiv: "https://arxiv.org/abs/2501.19066", Project: "https://steerers.github.io/" } },
  { title: "Revelio: Interpreting and Leveraging Semantic Information in Diffusion Models",
    authors: "Dahye Kim, Xavier Thomas, Deepti Ghadiyaram",
    venue: "Preprint · arXiv", year: "2024",
    fig: "img/papers/2411.16725.jpg",
    links: { arXiv: "https://arxiv.org/abs/2411.16725" } },
];

const NEWS = [
  { date: "Apr 2026", text: "Two papers accepted at <strong>CVPR 2026</strong> &mdash; &ldquo;Some Modalities Are More Equal Than Others&rdquo; (Findings) and <strong>DDiT</strong> (Spotlight)." },
  { date: "Feb 2026", text: "The lab&rsquo;s work on <strong>AI assistants for pediatric emergency care</strong> was covered by BU News." },
  { date: "Dec 2025", text: "Prof. Ghadiyaram was interviewed by <strong>Computer Vision News</strong>." },
  { date: "2025",     text: "Prof. Ghadiyaram was awarded the <strong>NAIRR Deep Partnership</strong> program and the <strong>Moorman&ndash;Simon Interdisciplinary Career Development Professorship</strong> (2025&ndash;2028)." },
  { date: "2025",     text: "Serving as <strong>Area Chair</strong> for the CVPR 2026 Broadening Participation track; invited talks at MILA, Northeastern, NSF ENCORE, and ICCV&rsquo;25 workshops." },
  { date: "2024",     text: "The group is <strong>founded</strong> at Boston University and welcomes its first PhD cohort." },
];
