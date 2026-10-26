# TinyTang ecosystem hub

This repository contains the static documentation hub for the TinyTang ecosystem.

## Review status

The repository is private and GitHub Pages is intentionally **not enabled**. Review the source here on GitHub or serve it locally:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publishing

When the site is approved:

1. Remove this review notice from the README.
2. Change the repository visibility to public.
3. In **Settings → Pages**, deploy from the `main` branch and `/ (root)` folder.
4. Verify <https://aquasock.github.io> and the custom 404 page.

This site deliberately has no package manager, generator, or external assets. GitHub Pages can serve the tracked files directly.

## Documentation policy

This hub owns ecosystem navigation and high-level relationships. Project-specific build commands, compatibility claims, and implementation details remain authoritative in the repository that owns them.
