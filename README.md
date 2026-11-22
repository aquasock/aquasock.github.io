# TinyTang ecosystem hub

This repository contains the static documentation hub for the TinyTang ecosystem.

## Published site

The site is published at <https://aquasock.github.io>. To preview changes locally before pushing:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

This site deliberately has no package manager, generator, or external assets. GitHub Pages can serve the tracked files directly.

## Documentation policy

This hub owns ecosystem navigation and high-level relationships. Project-specific build commands, compatibility claims, and implementation details remain authoritative in the repository that owns them.

## Logo

The logo images under `assets/brand/`, `favicon.ico` and `apple-touch-icon.png` are rendered from the master logo SVG, which is kept outside every repository, by [`tools/make_brand_pngs.py`](https://github.com/aquasock/TinyTang/blob/main/tools/make_brand_pngs.py) in TinyTang. Change the logo by re-running that script; do not edit the PNGs by hand.

The lettering is set in **Amsterdam Tangram** by Nick Curtis, used under the [1001Fonts Free For Commercial Use licence](https://www.1001fonts.com/licenses/ffc.html). That licence does not allow the font itself to be published, so it is not in this repository and the site does not load it as a webfont; only the rendered images are here.
