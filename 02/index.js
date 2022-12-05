import { getInputString, sum } from '../utils.js';

const PLAYER_MAP = new Map();

PLAYER_MAP.set('rock', 'X');
PLAYER_MAP.set('paper', 'Y');
PLAYER_MAP.set('scissors', 'Z');

const PLAYER_LIST = ['X', 'Y', 'Z'];

function play(opponent, player) {
    let result = 0;
    switch (opponent) {
        case 'A': // Rock
            if (player === 'X') {
                // Rock
                result += 3;
            }

            if (player === 'Y') {
                // Paper
                result += 6;
            }

            if (player === 'Z') {
                // Scissors
                result += 0;
            }
            break;

        case 'B': // Paper
            if (player === 'X') {
                // Rock
                result += 0;
            }

            if (player === 'Y') {
                // Paper
                result += 3;
            }

            if (player === 'Z') {
                // Scissors
                result += 6;
            }
            break;

        case 'C': // Scissors
            if (player === 'X') {
                // Rock
                result += 6;
            }

            if (player === 'Y') {
                // Paper
                result += 0;
            }

            if (player === 'Z') {
                // Scissors
                result += 3;
            }
            break;

        default:
            break;
    }

    return result + PLAYER_LIST.indexOf(player) + 1;
}

function choose(opponent, result) {
    switch (opponent) {
        case 'A': // Rock
            if (result === 'X') {
                // Lose
                return PLAYER_MAP.get('scissors');
            }

            if (result === 'Y') {
                // Draw
                return PLAYER_MAP.get('rock');
            }

            if (result === 'Z') {
                // Win
                return PLAYER_MAP.get('paper');
            }
            break;

        case 'B': // Paper
            if (result === 'X') {
                // Lose
                return PLAYER_MAP.get('rock');
            }

            if (result === 'Y') {
                // Draw
                return PLAYER_MAP.get('paper');
            }

            if (result === 'Z') {
                // Win
                return PLAYER_MAP.get('scissors');
            }
            break;

        case 'C': // Scissors
            if (result === 'X') {
                // Lose
                return PLAYER_MAP.get('paper');
            }

            if (result === 'Y') {
                // Draw
                return PLAYER_MAP.get('scissors');
            }

            if (result === 'Z') {
                // Win
                return PLAYER_MAP.get('rock');
            }
            break;

        default:
            break;
    }
}

const input = getInputString('./02/input.txt');

const matches = input.split('\n');

const resultsOne = matches.map((match) => {
    const [opponent, player] = match.split(' ');

    return play(opponent, player);
});

const resultsTwo = matches.map((match) => {
    const [opponent, result] = match.split(' ');
    const player = choose(opponent, result);

    return play(opponent, player);
});

const scoreOne = sum(resultsOne);
const scoreTwo = sum(resultsTwo);

console.log('Score Part 1: ', scoreOne);
console.log('Score Part 2: ', scoreTwo);
