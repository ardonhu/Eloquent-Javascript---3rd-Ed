const prompt = require("prompt-sync")({sigint:true});
let number_rows = Number(prompt());

function draw_rows(number_rows){
    let current_line = '';
    for(let i = 0; i < number_rows; i++){
        current_line += '#';
        console.log(current_line);
    }
}

draw_rows(number_rows);