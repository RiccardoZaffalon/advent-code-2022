export function sumStrings(list: string[]) {
    return sum(list.map((item) => parseInt(item)));
}
export function sum(list: number[]) {
    return list.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}

export class Alphabet {
    static get lower() {
        return 'abcdefghijklmnopqrstuvwxyz'.split('');
    }

    static get upper() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    }

    static get all() {
        return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    }
}
