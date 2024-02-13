const prompt = require("prompt-sync")({sigint:true});

function count_characters(str, char_to_count){
    let char_counters = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === char_to_count)
            char_counters++;
    }
    return char_counters;
}

function countBs(str){
    return count_characters(str,'B');
}

let str = prompt();
console.log(countBs(str));