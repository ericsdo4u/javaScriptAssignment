


function addNumbers(x, y){
    let result = x + y;
    return result;
}

//addNumbers(2, 3)


function evenNumbers(numbers){
    let result = numbers.filter(numbers => numbers % 2 == 0);
    return result;
}

module.exports = {addNumbers, evenNumbers};


