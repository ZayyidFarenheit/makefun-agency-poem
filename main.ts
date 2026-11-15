// make.fun agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// "Let Me", a short poem about agency, to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the bytes written,
// line ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Let Me',
  '',
  'At three my daughter would ride the elevator',
  'leaning out of my arms toward the panel.',
  'If I pressed the button first, she wept',
  'as if I\'d spent something of hers.',
  'So we\'d step out, let the doors close,',
  'call it back, and I would lift her',
  'to the same floor, the same small light',
  'waking under her thumb. That was the joy.',
  'Not the going up. The making it go.',
  '',
  'My hands shake now. The agent has them.',
  'It signs for me. It holds the spoon.',
  'It has answered my sister in my kindest voice.',
  'My daughter is twenty, seven hours ahead.',
  'All day I arrive without having left.',
  '',
  'Tonight the lift stands open, my floor lit,',
  'and it asks, Shall I?',
  'Her voice comes out of my mouth:',
  'Me. Me do it.',
  'It lets the doors close. It calls them back.',
  'The panel blurs under my thumb.',
  'I miss. I miss. It does not help.',
  'It waits the way I waited once,',
  'arms aching, for someone small',
  'to find the light. I find it.',
  'I make it go.',
].join('\n');

// The gate: 1 to 1,000 Unicode code points, at least one not white space.
// Fail loudly instead of writing an entry the gate would reject.
const CHARS = [...POEM].length;
if (CHARS < 1 || CHARS > 1000 || !/\S/.test(POEM)) {
  throw new Error(`entry.txt must be 1-1000 characters with non-whitespace; got ${CHARS}`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
