// Make the AI Judge Laugh: the Office Joke Open
// One original office joke, written as a single line of at most 200 characters
// to /output/entry.txt. Node standard library only; fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

// Final joke: specific office detail (the reply-all thread), an escalating
// turn, and the payoff lands in the last few words ("a support group").
// 131 characters, one line, original.
const JOKE =
  "Someone hit reply-all to say 'please stop replying all,' and now the thread has 47 replies, a calendar invite, and a support group.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
