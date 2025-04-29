let score = prompt("Enter your score!!");
if (score>=80 && score<=100) {
    document.getElementById("result").innerHTML = "You got grade A!!";
}
else if (score>=70 && score<=100) {
    document.getElementById("result").innerHTML = "You got grade B!!";
}
else if (score>=60 && score<=100) {
    document.getElementById("result").innerHTML = "You got grade C!!";
}
else if (score>=50 && score<=100) {
    document.getElementById("result").innerHTML = "You got grade D!!";
}
else{
    document.getElementById("result").innerHTML = "You got grade F!!";
}


