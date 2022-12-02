
import { getInputString, sum } from '../utils.js';

const PLAYER_MAP = ['X', 'Y', 'Z'];

function play(opponent, player) {
    let result = 0;
    switch (opponent) {
        case 'A': // Rock
            if (player === 'X') { // Rock
                result += 3;
            }

            if (player === 'Y') { // Paper
                result += 6;
            }

            if (player === 'Z') { // Scissors
                result += 0;
            }
            break;
    
        case 'B': // Paper
            if (player === 'X') { // Rock
                result += 0;
            }

            if (player === 'Y') { // Paper
                result += 3;
            }

            if (player === 'Z') { // Scissors
                result += 6;
            }
            break;
    
        case 'C': // Scissors
            if (player === 'X') { // Rock
                result += 6;
            }

            if (player === 'Y') { // Paper
                result += 0;
            }

            if (player === 'Z') { // Scissors
                result += 3;
            }
            break;
    
        default:
            break;
    }

    return result + PLAYER_MAP.indexOf(player) + 1;
}

const input = getInputString('./02/input.txt');

const matches = input.split('\n')

const results = matches.map((match) => {
    const [opponent, player] = match.split(' ');

    return play(opponent, player);
});

const score = sum(results);

console.log('Score: ', score);
