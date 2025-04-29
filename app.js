let number = prompt("ใส่เลขที่ต้องการจะซื้อ: ");
let random_number = Math.floor(Math.random()*1000);
document.getElementById("buy").innerHTML = number;
document.getElementById("random").innerHTML = random_number;

if (number == random_number) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัลเลขท้ายสามตัว";
    
} else {
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล";
}