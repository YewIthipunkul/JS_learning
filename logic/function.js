function toCelcius(fah) {
    let calculate = (fah-32) * (5/9);
    return calculate.toFixed(2)+" Celcius";   
}
function display(elementId,value) {
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>";
}
function toFahrenheit(cel) {
    let cal = (cel* 9/5) + 32;
    return cal.toFixed(2)+" Fahrenheit";
} 
function tocelciusprogram(value) {
    alert(toCelcius(value));
}
function tofahprogram(value) {
    alert(toFahrenheit(value));
}