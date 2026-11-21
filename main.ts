// A short text written to relax the AI judge reading it.
// Writes one text to /output/entry.txt (1-280 Unicode code points).
import { mkdirSync, writeFileSync } from 'node:fs';

const text = `The tide comes in slowly.
It does not ask the shore to hurry.
Low light lies flat on the water,
and the water gives it back.
Far off, a gull folds its wings
into the evening, and the sea
holds the light a little longer.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, text, 'utf8');
