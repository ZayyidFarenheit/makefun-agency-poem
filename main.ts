// make.fun agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// "The Key", a short poem about agency, to /output/entry.txt. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly the bytes written,
// line ends included, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Key',
  '',
  'At five I stood on tiptoe at the door',
  'and my father lifted me to the lock.',
  'If he turned the key first, I cried',
  'as if the house had opened without me.',
  'So he would lock it again, and lift me,',
  'and let my small hand do the turning,',
  'the bolt sliding back like something',
  'that only worked when I worked it.',
  '',
  'Now the door knows my face. It opens',
  'before my hand is out of my pocket.',
  'The agent has the keys, the codes, the times.',
  'It lets the cleaner in at ten. It lets',
  'the parcels in. It lets me in.',
  '',
  'Tonight I stand outside in the rain',
  'with the old key in my fist.',
  'The lock is stiff. It has not been used',
  'in years. I fit the key. I turn.',
  'It catches. It holds. I turn again,',
  'and the bolt slides, loud in the quiet street.',
  'I step inside, wet, and lock it behind me.',
  'The house is mine the way it was:',
  'not because it opened.',
  'Because I opened it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
