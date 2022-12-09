// const input = Deno.readTextFileSync('./06/sample.txt');
const input = Deno.readTextFileSync('./06/input.txt');

const symbols = input.split('');
const buffer: string[] = [];

function hasDuplicates(array: string[]) {
    const set = new Set(array);

    return set.size !== array.length;
}

function run(signal: number) {
    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];

        if (buffer.length > signal - 1 && !hasDuplicates(buffer)) {
            return i;
        }

        buffer.push(symbol);

        if (buffer.length > signal) {
            buffer.shift();
        }
    }

    return -1;
}

console.log('Solution to part 1 is: ', run(4));
console.log('Solution to part 2 is: ', run(14));
