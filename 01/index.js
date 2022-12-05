import { getInputString, sum } from '../utils.js';

const input = getInputString('./01/input.txt');

const groups = input.split('\n\n');

const totals = groups.map((group) => {
    let items = group.split('\n');

    return sum(items);
});

totals.sort((a, b) => {
    return b - a;
});

console.log('Biggest: ', totals[0]);
console.log('Top 3 total: ', totals[0] + totals[1] + totals[2]);
