

var result = -1;

if(result >= 0 && result<40){
    console.log("Failed");
}
else if(result >= 40 && result<50){
    console.log("You obtained C grade");
}
else if(result >= 50 && result<60){
    console.log("You obtained B grade");
}
else if(result >= 60 && result<70){
    console.log("You obtained A- grade");
}
else if(result >= 70 && result<80){
    console.log("You obtained A grade");
}
else if(result >= 80 && result<=100){
    console.log("You obtained A+ grade");
}
else{
    console.log("Result Not Found");
}