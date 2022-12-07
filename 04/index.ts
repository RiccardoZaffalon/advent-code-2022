// const input = Deno.readTextFileSync('./04/sample.txt');
const input = Deno.readTextFileSync('./04/input.txt');

const couples = input.split('\n');

type Range = {
    min: number;
    max: number;
};

function getRanges(couple: string) {
    const [itemA, itemB] = couple.split(',');

    const a: Range = {
        min: parseInt(itemA.split('-')[0]),
        max: parseInt(itemA.split('-')[1]),
    };

    const b: Range = {
        min: parseInt(itemB.split('-')[0]),
        max: parseInt(itemB.split('-')[1]),
    };

    return [a, b];
}

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

function doRangesOverlap(range: Range[]) {
    const [a, b] = range;

    if (a.min >= b.min && a.min <= b.max) {
        return true;
    }

    if (b.min >= a.min && b.min <= a.max) {
        return true;
    }

    return false;
}

const full = couples.filter((couple) => {
    const [a, b] = getRanges(couple);

    return isOneRangeFullyContained([a, b]);
});

const overlap = couples.filter((couple) => {
    const [a, b] = getRanges(couple);

    return doRangesOverlap([a, b]);
});

console.log('Result Part 1: ', full.length);
console.log('Result Part 2: ', overlap.length);
