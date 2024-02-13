function non_recurisve_factorial(n){
    if(n == 0){
        return 1;
    }
    let value = 1;
    for(let counter = 1; counter <= n; counter++){
        value *= counter;
    }
    return value;
}

function recurisve_factorial(n){
    if(n == 0){
        return 1;
    }
    return n * recurisve(n-1);
}

console.log(recurisve(3));