const fs = require('fs');
const path = require('path')

fs.readFile(path.resolve(__dirname, './input.txt'), (err, data) => {
    if (err) throw err;

    const string = data.toString();

    const groups = string.split('\n\n');

    const totals = groups.map((group) => {
        let items = group.split('\n');

        return items.reduce((prev, curr) => {
            return parseInt(prev) + parseInt(curr);
        }, 0);
    });

    console.log(totals);

    totals.sort((a, b) => {
        return b - a;
    });

    console.log('Biggest: ', totals[0]);
    console.log('Top 3 total: ', totals[0] + totals[1] + totals[2]);
});

