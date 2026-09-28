# Group Website Demo

Website for Prof. Deepti Ghadiyaram's research group at Boston University.
Live demo: https://cskyl.github.io/Group_Webpage/

It's a static site (HTML/CSS/JS, no build step). Open `index.html`, or serve the folder:

```bash
python -m http.server 8000     # then visit http://localhost:8000
```

## Editing content

All content is in **`data.js`**:

| Block      | What it holds |
|------------|---------------|
| `SITE`     | Hero text. `name` is the lab name. It's blank for now, so the PI's name is used. |
| `PI`       | Name, title, photo, links |
| `RESEARCH` | Research areas, one line each |
| `PEOPLE`   | `phd`, `ms`, `ugrad` lists |
| `PUBS`     | Papers, newest first |
| `NEWS`     | Dated updates, newest first |

**Person fields:** `name`, `role`, `years` (e.g. `"2025–"`), `note` (short focus),
`coadvisor`, `photo` (`"img/first-last.jpg"`, 600×600 square), and
`links: { Web: url, Scholar: url, … }`. The first link is also used when someone
clicks the avatar. If there's no photo, the card shows the person's initials.

**Paper fields:** `title`, `authors`, `venue`, `year`, `badge` (e.g. `"Spotlight"`),
`fig` (`"img/papers/<arxiv-id>.png"`, about 1000px wide), `figFit: "top"` (for tall
figures, so the card shows the top of the figure), and `links: { arXiv: url, Project: url }`.
The first 6 papers are shown, and a "Show all" button reveals the rest.
Clicking a figure opens it full size.

## Publishing

```bash
git add -A && git commit -m "Update site" && git push
```

GitHub Pages serves the site from `main` / root.
