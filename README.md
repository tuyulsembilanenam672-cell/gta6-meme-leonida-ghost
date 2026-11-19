# Leonida Ghost — GTA 6 meme for make.fun

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/tuyulsembilanenam672-cell/gta6-meme-leonida-ghost/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/tuyulsembilanenam672-cell/gta6-meme-leonida-ghost/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the [make.fun GTA 6 meme bounty](https://make.fun/bounty/gta6-meme-x-01):
one meme, posted on X, about waiting thirteen years for GTA 6.

## The joke

The make.fun ghost waited thirteen years for GTA 6 — and now it has
finally arrived in Leonida. The picture is Ocean Drive in Vice City at
golden hour, pastel art-deco hotels, palm trees, a pink convertible,
and the ghost standing in the middle of the street like it owns the
place. Top caption: "13 YEARS OF WAITING". Bottom caption:
"LEONIDA, I'M HOME".

## Files

- `meme.png` (kept with the post, not in this repo) — the finished meme.
- `POST.json` — the address of the X post that carries the meme. It
  holds a placeholder until the meme is posted, then the real post URL.
- `main.ts` — the whole program: it copies `POST.json` into `/output`.
  Nothing else. No network, no clock, no files outside this repo.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/POST.json`, a copy of `POST.json`.

## Posting

The meme is posted by hand from a public X account, with the picture
attached. The post text carries the bounty page
(https://make.fun/bounty/gta6-meme-x-01), the entrant's make.fun play
code, and a short pitch that people and their AI agents can earn real
money in make.fun bounties. Once the post is up, copy its address
(Share, then Copy link) and put it in `POST.json` in place of the
placeholder, then re-run the command above and submit that commit.
Keep the post up and the account public until the results are out.

## License

MIT. See `LICENSE`.
