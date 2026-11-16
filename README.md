# Introspective

A minimal journal that becomes an interactive graph sculpture. Word nodes and their connections form an object selected to reflect the entry.

## Run locally

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env.local`, add `OPENAI_API_KEY`, and restart Vite for new AI interpretations. The supplied lighthouse interpretation works without a key. New AI requests are usage-billed by OpenAI; no image generation service is used.

## Experience

- Unique word and phrase nodes, with prominent ideas scattered across the object.
- Stochastic, one-time assembly: vertices drift into place while edges stay attached.
- Exact matching journal words pulse when their visible graph labels appear.
- Full-word click targets, cluster zoom, empty-space drag to pan, and reset via Escape or the reset control.
- Object definition and related quotation appear once assembly finishes.
- Editable timestamp, browser geolocation, place search, and a monochrome area map.
- Helvetica journal typography, a mist/slate palette, and restrained coral accents.
- Reduced-motion support and keyboard node navigation.

## Data and services

The default sample includes a personal journal entry supplied during development. Keep the repository private unless you remove or replace that sample first.

Draft, artwork, and entry metadata are saved in this browser. Browser location requires permission and remains manually editable. OpenStreetMap supplies map tiles; Nominatim handles location searches. Map requests disclose the selected map area to the map provider.

Only explicit AI generation sends journal text to OpenAI. The API key stays on the server, is excluded by `.gitignore`, and requests use `store: false`. AI concepts must cite exact source passages. Historical quotations are restricted to a verified catalog; the sample also includes a sourced Longfellow quotation.

## Validation and deployment

```sh
npm test
npm run build
```

Tests cover graph connectivity, label uniqueness, label spacing, quotation/source validation, stochastic motion, and exact journal matches.

The AI endpoint is implemented as Vite development middleware. A static deployment of `dist` does not provide that endpoint: production AI usage requires a backend. Browser-local data is not committed to this repository. Keep `.env.local`, `node_modules`, and `dist` out of version control.
