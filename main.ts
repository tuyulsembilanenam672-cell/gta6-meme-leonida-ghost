import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");
copyFileSync(source, target);

// The copy must be exact: the house reads the post address from it.
if (!readFileSync(source).equals(readFileSync(target))) {
  throw new Error("POST.json did not copy exactly");
}
