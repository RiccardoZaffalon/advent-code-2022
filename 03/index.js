import { getInputString, Alphabet, sum } from '../utils.js';

const PRIORITIES = Alphabet.all;

// const input = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

const input = getInputString('./03/input.txt');

const sacks = input.split('\n');

const types = sacks.map((sack) => {
    const length = sack.length;
    const half = length / 2;

    const a = sack.slice(0, half).split('');
    const b = sack.slice(half, length).split('');

    return a.find((letter) => b.includes(letter));
});

let groups = [];

sacks.forEach((sack, index) => {
    const i = Math.floor(index / 3);
    const target = groups[i] || [];
    const group = [...target, sack];
    groups[i] = group;
});

const badges = groups.map((groupSacks) => {
    const a = groupSacks[0].split('');
    const b = groupSacks[1].split('');
    const c = groupSacks[2].split('');

    return a.find((letter) => b.includes(letter) && c.includes(letter));
});

function solve(inputs) {
    return sum(
        inputs.map((letter) => {
            return PRIORITIES.indexOf(letter) + 1;
        })
    );
}

const resultA = solve(types);
const resultB = solve(badges);

console.log(resultA);
console.log(resultB);
