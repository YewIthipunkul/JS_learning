let round = prompt("เล่นกี่รอบ?")
var sum = 0;
for (var i=0;i<round; i++) {
    var answer = prompt("หัวหรือก้อย?");
    var random_answer = "";
    if (Math.floor(Math.random() *2) == 0 ){
        random_answer = "หัว";
    }   
    else {
        random_answer = "ก้อย";
    }
    
    if (answer == random_answer) {
        alert("คุณทายถูก!!!!");
        sum += 1;
    }
    else {
        alert("คุณตอบผิด");
    }
    console.log(random_answer," : ");
    document.getElementById("game-list").innerHTML += "<p>รอบที่ " + (i + 1) + ": คุณเลือก " + answer + 
        ", คำตอบที่ถูกคือ " + random_answer + 
        ", คะแนนรวม: " + sum + "</p>";
}
