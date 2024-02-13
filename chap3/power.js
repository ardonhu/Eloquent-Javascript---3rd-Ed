function non_recursive_power(base, exponent){
    let value = 1;
    for(let counter = 0; counter < exponent; counter++){
        value *= base;
    }
    return value;
}

function recursive_power(base, exponent){
    if(exponent == 0){
        return 1;
    }
    return base * recursive_power(base, exponent - 1);
}

console.log(recursive_power(2,3));