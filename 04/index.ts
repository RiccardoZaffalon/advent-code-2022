// const input = Deno.readTextFileSync('./04/sample.txt');
const input = Deno.readTextFileSync('./04/input.txt');

const couples = input.split('\n');

type Range = {
    min: number;
    max: number;
};

function isOneRangeFullyContained(range: Range[]) {
    const [a, b] = range;

    if (a.min >= b.min && a.max <= b.max) {
        return true;
    }

    if (b.min >= a.min && b.max <= a.max) {
        return true;
    }

    return false;
}

const full = couples.filter((couple) => {
    const [itemA, itemB] = couple.split(',');

    const a: Range = {
        min: parseInt(itemA.split('-')[0]),
        max: parseInt(itemA.split('-')[1]),
    };

    const b: Range = {
        min: parseInt(itemB.split('-')[0]),
        max: parseInt(itemB.split('-')[1]),
    };

    return isOneRangeFullyContained([a, b]);
});

console.log(full.length);
