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

function getInfo(arr, tableName) {
    let TRs = [];
    for (let i = 0; i < arr.length; i++) {
        TRs.push(renderTRs(arr[i]));
    }
    return `<table>
      <caption>${tableName} info</caption>
      ${TRs.join(``)}
      </table>`;
}

function renderTRs(arr) {
    let TDs = [];

    for (let i = 0; i < arr.length; i++) {
        TDs.push(`<td>${arr[i]}</td>`);
    }
    return `<tr>${TDs.join(``)}</tr>`;
}

document.write(getInfo(animals, `Animals`));
document.write(getInfo(food, `Food`));