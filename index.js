#!/usr/bin/env node

const owoify = require("owoify-js").default;
const readline = require("readline");

const USAGE_STRING = `Usage: owoify [-h] [level]
Levels are:
- owo (default): pretty vanilla. Not much else to say about it.
- uwu: moderately infuses the text but it gets wose and wose
- uvu: litewawwy unweadabwal`;

let level;
if (process.argv.length > 2) {
  for (let i = 2; i < process.argv.length; ++i) {
    if (["-h", "--help"].indexOf(process.argv[i]) != -1) {
      console.log(USAGE_STRING);
      process.exit(0);
    }
  }
  if (process.argv.length != 3) {
    console.log("Too many arguments.");
    console.log(USAGE_STRING);
    process.exit(2);
  }
  level = process.argv[2];
  if (["owo", "uwu", "uvu"].indexOf(level) == -1) {
    console.log("Unknown level.");
    console.log(USAGE_STRING);
    process.exit(2);
  }
} else {
  level = "owo";
}

let rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", (input) => {
  console.log(owoify(input, level));
});

rl.on("close", () => {
  process.exit(0);
});
