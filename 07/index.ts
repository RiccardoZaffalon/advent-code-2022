import { sum } from '../utils.ts';

// const input = Deno.readTextFileSync('./07/sample.txt');
const input = Deno.readTextFileSync('./07/input.txt');

const lines = input.split('\n');
let current: string[] = [];

const RULES = {
    command: /^\$ (\w\w) ?(.*)/,
    dir: /dir (.+)/,
    file: /^(\d+)/,
};

const THRESHOLD = 100000;
const DISK_SPACE = 70000000;
const UPDATE_SIZE = 30000000;

function getAction(line: string) {
    if (RULES.command.test(line)) {
        return 'command';
    }

    if (RULES.dir.test(line)) {
        return 'dir';
    }

    if (RULES.file.test(line)) {
        return 'file';
    }

    return null;
}

const weights = new Map();

function parents(weight: number, map: Map<string, number>) {
    if (current.length > 1) {
        current.pop();
        const parent = current.join('');
        const previous: number = map.get(parent) || 0;

        map.set(parent, previous + weight);

        parents(weight, map);
    }
}

lines.forEach((line) => {
    const action = getAction(line);

    if (action) {
        const output = RULES[action].exec(line);

        if (output) {
            switch (action) {
                case 'command':
                    {
                        const command = output[1];
                        const arg = output[2];

                        if (command === 'cd') {
                            if (arg === '/') {
                                current = [arg];
                            } else if (arg === '..') {
                                current.pop();
                            } else {
                                current.push(arg);
                            }
                        }
                    }

                    break;

                case 'file': {
                    const weight = parseInt(output[1]);
                    const id = current.join('');
                    const previous: number = weights.get(id) || 0;
                    const stash = [...current];

                    weights.set(id, previous + weight);

                    parents(weight, weights);

                    current = stash;

                    break;
                }
                default:
                    break;
            }
        }
    }
});

const sizes = Array.from(weights).map(([_, size]) => {
    return size;
});

const solution1 = sum(
    sizes.map((size) => {
        return size <= THRESHOLD ? size : 0;
    })
);

console.log('Solution to part 1 is: ', solution1);

const [total] = sizes;

const FREE_SPACE = DISK_SPACE - total;
const NEEDED_SPACE = UPDATE_SIZE - FREE_SPACE;

const bigEnough = sizes
    .filter((size) => {
        return size >= NEEDED_SPACE;
    })
    .sort();

console.log('Solution to part 2 is: ', bigEnough.shift());
