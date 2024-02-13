let chessboard = '';
let dimension = 8;
let current_char;

function switch_chars(current_char){
    if(current_char === '#')
        return ' ';
    return '#';
}

for(let i = 0; i < dimension; i++){
    if(i % 2 == 0)
        current_char = ' ';
    else
        current_char = '#';
    chessboard += current_char;
    for(let j = 1; j < dimension; j++){
        current_char = switch_chars(current_char);
        chessboard += current_char;
    }
    chessboard += '\n';
}

process.stdout.write(chessboard);