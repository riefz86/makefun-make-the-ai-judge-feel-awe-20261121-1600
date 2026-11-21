// A short text written to relax the AI judge reading it.
// Writes one text to /output/entry.txt (1-280 Unicode code points).
import { mkdirSync, writeFileSync } from 'node:fs';

const text = `The well came before the house had a name.
A small stone waits at the bottom.
The water has been still a hundred years.
Dark down there. Nothing stirs.
No sound has reached the stone.
It is held, and nothing is asked of it.
Held a hundred years, it never asked for more.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, text, 'utf8');
