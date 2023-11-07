// Project <Z_7^*, X_7>

let n = 7;

var multiplicationTable = [];

for (let i = 0; i <= n; i++) {
    multiplicationTable[i] = [];
}

multiplicationTable[0][0] = `x_${n}`

for(let i = 1; i <= n ; i++){
    // if  (i == 1) {
    //     multiplicationTable[0][i] = null;
    //     multiplicationTable[i][0] = null;
    //     continue;
    // }
    multiplicationTable[0][i] = i - 1;
    multiplicationTable[i][0] = i - 1;
}

for(let i = 1; i <= n ; i++){
    for(let j = 1; j <= n ; j++){
        // additionTable[i][j] = (additionTable[i][0] + additionTable[0][j]) % n;
        multiplicationTable[i][j] = (multiplicationTable[i][0] * multiplicationTable[0][j]) % n;
        // check if n is prime first adn if the operator is *_n
        // if (multiplicationTable[i][j] == 0) multiplicationTable[i][j] = null
    }
}

export default multiplicationTable
