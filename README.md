# Introspective

Turn a journal entry into an interactive word graph.

## Run

```sh
npm install
npm run dev
```

Open the localhost URL printed in your terminal.

For AI generation, copy `.env.example` to `.env.local`, add your `OPENAI_API_KEY`, and restart. The sample works without a key.

```sh
npm test        # Run tests
npm run build   # Build the frontend
```

App code is in `src/`, the AI endpoint is in `server/`, and tests are in `tests/`. The AI endpoint currently runs with the dev server.
