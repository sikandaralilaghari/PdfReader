const expr = "(?<!w.w.)(?<!\b[A-Z][a-z].)(?<![A-Z].)(?<=.|?)s|\\n";

const text =
  "Mr. Smith bought cheapsite.com for 1.5 million dollars, i.e. he paid a lot for it. Did he mind? Adam Jones Jr. thinks he didn't. In any case, this isn't true... Well, with a probability of .9 it isn't.";

const r = text.split(expr);

console.log(r);
