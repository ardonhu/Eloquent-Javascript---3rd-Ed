const prompt = require("prompt-sync")({sigint:true});

let value = Number(prompt());

function is_even(value){
    if(value == 1){
        return false;
    }
    else if(value == 2){
        return true;
    }
    return is_even(value-2);
}

console.log(is_even(value));