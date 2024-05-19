var randomNumbers = [1, 5, 9, 4, 6, 11, 15, 17, 12, 16, 2, 7, 3, 8, 10, 13, 18, 14, 19, 20];

randomNumbers.sort(function(a, b) {
    return a - b;
});

console.log(randomNumbers);
