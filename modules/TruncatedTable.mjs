import multiplicationTable from "./groupAdditionTable.mjs";

let truncatedTable = multiplicationTable.slice(2, 8).map(row => row.slice(2, 8));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(truncatedTable);
console.table(truncatedTable)
export default truncatedTable