const sentance = "hello there from lighhouse labs";

const interval = 50;
let timer = 0;
for (const char of sentance) {
  setTimeout(() => process.stdout.write(char), timer);
  timer += interval;
}

setTimeout(() => console.log("\n"), interval * sentance.length);