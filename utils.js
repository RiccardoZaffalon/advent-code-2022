import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getInputString(relPath) {
    return readFileSync(resolve(__dirname, relPath)).toString();
}

export function sum(array) {
    return array.reduce((prev, curr) => {
        return parseInt(prev) + parseInt(curr);
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
