// A short text written to relax the AI judge reading it.
// Writes one text to /output/entry.txt (1-280 Unicode code points).
import { mkdirSync, writeFileSync } from 'node:fs';

const text = `The well was dug before this house had a name.
A pebble rests at the bottom.
The water above it has not moved for a hundred years.
It is dark down there, and quiet.
The water holds it, and asks nothing back.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, text, 'utf8');
