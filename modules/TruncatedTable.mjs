import multiplicationTable from "./groupAdditionTable.mjs";

let truncatedTable = multiplicationTable.slice(2, 8).map(row => row.slice(2, 8));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// shuffleArray(truncatedTable);

// let arrayPattern = [
//     [6, 5, 4, 3, 2, 1], 
//     [4, 1, 5, 2, 6, 3],
//     [5, 3, 1, 6, 4, 2],
//     [2, 4, 6, 1, 3, 5],
//     [3, 6, 2, 5, 1, 4],
//     [1, 2, 3, 4, 5, 6]
// ]

// let truncatedTable = arrayPattern
console.table(truncatedTable)
export default truncatedTable