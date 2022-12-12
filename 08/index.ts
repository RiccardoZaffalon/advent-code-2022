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

type Side = 'top' | 'right' | 'bottom' | 'left';
function canBeSeenFrom(side: Side, row: number, column: number, value: number) {
    switch (side) {
        case 'left': {
            const trees = rows[row].split('').filter((_el: string, i: number) => i < column);
            if (!trees.length) return true;

            return trees.every((tree) => parseInt(tree) < value);
        }

        case 'right': {
            const trees = rows[row].split('').filter((_el: string, i: number) => i > column);
            if (!trees.length) return true;

            return trees.every((tree) => parseInt(tree) < value);
        }

        case 'top': {
            const trees = columns[column].split('').filter((_el: string, i: number) => i < row);

            if (!trees.length) return true;

            return trees.every((tree) => parseInt(tree) < value);
        }

        case 'bottom': {
            const trees = columns[column].split('').filter((_el: string, i: number) => i > row);

            if (!trees.length) return true;

            return trees.every((tree) => parseInt(tree) < value);
        }

        default:
            return false;
    }
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
