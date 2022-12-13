import { assertEquals } from 'https://deno.land/std@0.167.0/testing/asserts.ts';

const sample = Deno.readTextFileSync('./08/sample.txt');
const expected = [21, 8];

const input = Deno.readTextFileSync('./08/input.txt');

function main(source: string) {
    const rows = source.split('\n');
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

    function canBeSeenFrom(side: 'top' | 'right' | 'bottom' | 'left', row: number, column: number, value: number) {
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

    function getVisibleTreesTo(
        dir: 'up' | 'right' | 'down' | 'left',
        row: number,
        column: number,
        value: number
    ): number {
        let trees: string[] = [];
        let visible = 0;

        switch (dir) {
            case 'left':
                trees = rows[row]
                    .split('')
                    .filter((_el: string, i: number) => i < column)
                    .reverse();
                break;

            case 'right':
                trees = rows[row].split('').filter((_el: string, i: number) => i > column);
                break;

            case 'up':
                trees = columns[column]
                    .split('')
                    .filter((_el: string, i: number) => i < row)
                    .reverse();
                break;

            case 'down':
                trees = columns[column].split('').filter((_el: string, i: number) => i > row);
                break;

            default:
                break;
        }

        for (let i = 0; i < trees.length; i++) {
            const tree = parseInt(trees[i]);

            visible++;

            if (tree >= value) {
                break;
            }
        }

        return visible;
    }

    let count = 0;
    let highestScenicScore = 0;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const trees = row.split('');

        for (let j = 0; j < trees.length; j++) {
            const tree = parseInt(trees[j]);

            const isVisible =
                canBeSeenFrom('left', i, j, tree) ||
                canBeSeenFrom('right', i, j, tree) ||
                canBeSeenFrom('top', i, j, tree) ||
                canBeSeenFrom('bottom', i, j, tree);

            const scenicScore =
                getVisibleTreesTo('left', i, j, tree) *
                getVisibleTreesTo('right', i, j, tree) *
                getVisibleTreesTo('up', i, j, tree) *
                getVisibleTreesTo('down', i, j, tree);

            if (isVisible) {
                count++;
            }

            if (scenicScore > highestScenicScore) {
                highestScenicScore = scenicScore;
            }
        }
    }

    return [count, highestScenicScore];
}

Deno.test('Test with sample data', () => {
    assertEquals(main(sample), expected);
});

const [one, two] = main(input);

console.log('Solution to part 1 is: ', one);
console.log('Solution to part 2 is: ', two);
