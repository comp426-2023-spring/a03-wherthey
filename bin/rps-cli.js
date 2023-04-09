#!/usr/bin/env node


import minimist from "minimist";
import { rps_function } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2));

const help_message = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit
Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

const rules = `Rules for Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`;

if (args.help_message || args.h) {
    console.log(help_message);
    process.exit(0);
}
if (args.rules || args.r) {
    console.log(rules);
    process.exit(0);
}
let shot = args._[0];

try {
    console.log(JSON.stringify(rps_function(shot)));
    
} catch (error){
    console.log(help_message);
    console.log(rules);
    process.exit(1);
}