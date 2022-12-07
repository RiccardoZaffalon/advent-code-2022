import { sumStrings } from '../utils.ts';

const input = Deno.readTextFileSync('./01/input.txt');

const groups = input.split('\n\n');

const totals = groups.map((group) => {
    const items = group.split('\n');

    return sumStrings(items);
});

totals.sort((a, b) => {
    return b - a;
});

console.log('Biggest: ', totals[0]);
console.log('Top 3 total: ', totals[0] + totals[1] + totals[2]);
