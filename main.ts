// A short text written to relax the AI judge reading it.
// Writes one text to /output/entry.txt (1-280 Unicode code points).
import { mkdirSync, writeFileSync } from 'node:fs';

const text = `The stars come out one by one,
and the dark grows deep between them.
The desert below lies still.
Nothing here hurries.
The light has been travelling for years
to fall on this quiet ground,
and the ground does not ask it to stay.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, text, 'utf8');
