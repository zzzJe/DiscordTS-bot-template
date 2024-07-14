# DiscordTS bot template
This package sets up the nessasary packages/dependencies for building discord bot.

## quick start
For new projects, just clone this repo and fill up package.json with your info.
Also LICENSE, remember to replace your name and date, or change the license into your. Don't forget to update package.json if you change license.

```bash
# test codes in dev period
npm run dev

# output transpiled code into dist/
npm run build

# run the production in dist/
bpm run start
```

## dependencies:
- discord.js
  - for discord API access
- commandkit
  - for automatically handle registration/running details by certain structure
    - `command/<command_name>.ts`
    - `event/<event_name>/<reponse_name>.ts`
    - `validation/<valid_name>.ts`
  - for detailed structure, check [CommandKit Doc](https://commandkit.js.org/guide/)
- dotenv
  - for secret information

## dev dependencies
- typescript
  - basic ts package
- @types/node
  - for nodejs package ts support
- tsx
  - for dev usage
- tsc-alias
  - for replacing path alias into real structures
