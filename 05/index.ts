const stacks = Deno.readTextFileSync('./05/input_stacks.txt').split('\n').reverse();
const procedures = Deno.readTextFileSync('./05/input_procedures.txt').split('\n');

const moves = /move (\d+) from (\d) to (\d)/;

const layers: (string | null)[][] = [];

stacks.forEach((layer) => {
    layer.split('').forEach((item, i) => {
        const index = Math.floor(i / 4);

        if (i % 4 === 1) {
            if (item !== ' ') {
                if (layers[index]) {
                    layers[index].push(item);
                } else {
                    layers.push([item]);
                }
            }
        }
    });
});

procedures.forEach((procedure) => {
    const [, move, from, to] = moves.exec(procedure) || ['', '0', '0', '0'];

    const steps = {
        move: parseInt(move),
        from: parseInt(from) - 1,
        to: parseInt(to) - 1,
    };

    for (let index = 0; index < steps.move; index++) {
        const toMove = layers[steps.from].pop();

        if (toMove) {
            layers[steps.to].push(toMove);
        }
    }
});

const resultA = layers.map((layer) => {
    return layer.pop();
});

console.log('Part 1 result is: ', resultA.join(''));
