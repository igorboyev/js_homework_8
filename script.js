const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];
const food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

function getInfo(arr) {
    let TDs = [];
    for (let i = 0; i < arr.length; i++) {
        TDs.push(`<td>${arr[i]}</td>`);
    }
    return `<table><tr>${TDs.join(``)}</tr></table>`;
}

function renderTablesOfArray(arr, tableNaMe) {
    let tables = [];

    tables.push(`<caption>${tableNaMe} info</caption>`)
    for (let i = 0; i < arr.length; i++) {
        tables.push(getInfo(arr[i]));
    }
    return tables.join(``);
}
document.write (renderTablesOfArray(animals, `Animals`) );

document.write( renderTablesOfArray(food, `Food`));