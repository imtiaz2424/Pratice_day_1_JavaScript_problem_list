
function findBigName(friends){
    let biggestName = "friends";
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length > biggestName.length) {
            biggestName = element;
        }
    }
    return biggestName;
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigname = findBigName(friends);
console.log(bigname);