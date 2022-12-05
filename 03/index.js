import { getInputString, Alphabet, sum } from '../utils.js';

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

const priorities = Alphabet.all;

const result = sum(
    types.map((letter) => {
        return priorities.indexOf(letter) + 1;
    })
);

console.log(result);
