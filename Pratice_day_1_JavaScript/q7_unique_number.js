
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var uniqueNumbers = numbers.filter((value, index, numbers) => {
    return numbers.indexOf(value) == index;
});

console.log(uniqueNumbers);