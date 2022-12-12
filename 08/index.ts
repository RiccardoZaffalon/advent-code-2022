// const input = Deno.readTextFileSync('./08/sample.txt');
const input = Deno.readTextFileSync('./08/input.txt');

const rows = input.split('\n');
const columns: string[] = [];

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const trees = row.split('');

    for (let j = 0; j < trees.length; j++) {
        const tree = trees[j];

        if (columns[j]) {
            columns[j] += tree;
        } else {
            columns[j] = tree;
        }
    }
}

function canBeSeenFrom(side: string, row: number, column: number, value: number) {
    let trees: string[] = [];

    switch (side) {
        case 'left':
            trees = rows[row].split('').filter((_el: string, i: number) => i < column);
            break;

        case 'right':
            trees = rows[row].split('').filter((_el: string, i: number) => i > column);
            break;

        case 'top':
            trees = columns[column].split('').filter((_el: string, i: number) => i < row);
            break;

        case 'bottom':
            trees = columns[column].split('').filter((_el: string, i: number) => i > row);
            break;

        default:
            break;
    }

    if (!trees.length) return true;

    return trees.every((tree) => parseInt(tree) < value);
}

let count = 0;

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const columns = row.split('');

    for (let j = 0; j < columns.length; j++) {
        const tree = parseInt(columns[j]);

        const isVisible =
            canBeSeenFrom('left', i, j, tree) ||
            canBeSeenFrom('right', i, j, tree) ||
            canBeSeenFrom('top', i, j, tree) ||
            canBeSeenFrom('bottom', i, j, tree);

        if (isVisible) {
            count++;
        }
    }
}

console.log('Solution to part 1 is: ', count);
