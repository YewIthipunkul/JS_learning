let qrt = prompt("จำนวนสินค้า");
let total = 0;
for (var i=0;i<qrt;i++) {
    let item = prompt("ราคาสินค้าชิ้นที่"+ (i+1));
    total += parseInt(item); 
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + (i+1) + ": "+item+" บาท "+"<br>";
}
document.getElementById("result").innerHTML = "ราคารวมของสินค้า: "+total+" บาท";
