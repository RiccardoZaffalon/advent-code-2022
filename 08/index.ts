const input = Deno.readTextFileSync('./08/sample.txt');
// const input = Deno.readTextFileSync('./08/input.txt');

const rows = input.split('\n');
const columns = [];

function invert(array: string[]) {
    return array.map((trees) => {
        return trees.split('').reverse().join('');
    });
}

// for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];
//     const trees = row.split('');

//     for (let j = 0; j < trees.length; j++) {
//         const tree = trees[j];

//         if (columns[j]) {
//             columns[j] += tree;
//         } else {
//             columns[j] = tree;
//         }
//     }
// }

// const rows_inverted = invert(rows);
// const columns_inverted = invert(columns);

// console.log({
//     rows,
//     rows_inverted,
//     columns,
//     columns_inverted,
// });

function canBeSeenFrom(row: number, column: number, side: string) {
    const value = rows[row].charAt(column);

    switch (side) {
        case 'left':
            return value;
            break;
        default:
            break;
    }

    return false;
}

for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const trees = row.split('');

    for (let j = 0; j < trees.length; j++) {
        const tree = trees[j];

        console.log(canBeSeenFrom(i, j, 'left'));
    }
}
