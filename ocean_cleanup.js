const bottles = {
    item:"Plastic bottles",
    footprint:0,
    tip:"Many beverages can be purchased in glass bottles. Consider to bring reusable bottles for water and hot beverages when you are out and about."
}
const bags = {
    item:"Plastic bags",
    footprint:0,
    tip:"Bring reusable fabric totes for shopping and refuse plastic bags when offered."
}
const wrapping = {
    item:"Food wrapping",
    footprint:0,
    tip:"Consider to buy more unpackaged food at local markets."
}
const yogurt = {
    item:"Yogurt, cream, etc. containers",
    footprint:0,
    tip:"Some places offer dairy in glass containers. You could even explore recipes to make your own yogurt."
}
const boxes = {
    item:"Take-away plastic boxes",
    footprint:0,
    tip:"Cut down on take-out packaging by preparing more meals at home."
}
const cups = {
    item:"Take-away cups",
    footprint:0,
    tip:"Bring your own tumbler when ordering hot beverages to go."
}
const packages = {
    item:"Plastic-wrapped packages",
    footprint:0,
    tip:"Try to purchase more products in shops rather than online."
}
const detergent = {
    item:"Detergent & cleaning product bottles",
    footprint:0,
    tip:"Explore refill stations in your neighborhood to cut down on bottles from detergents and cleaning products."
}
const shampoo = {
    item:"Shampoo, conditioner & toiletries",
    footprint:0,
    tip:"Explore refill stations in your neighborhood to cut down on plastic waste from toiletries."
}
const toothbrushes = {
    item:"Plastic toothbrushes",
    footprint:0,
    tip:"Seriously? How often do you brush your teeth? Anyway, Did you know there are toothbrushes made from wood?"
}
const toothpaste = {
    item:"Toothpaste",
    footprint:0,
    tip:"Seriously? How much toothpaste do you use? Did you know there are plastic-free alternatives available?"
}

var object = [bottles,bags,wrapping,yogurt,boxes,cups,packages,detergent,shampoo,toothbrushes,toothpaste];

var household;

/**
 * Calculate the plastic footprint and show tips
 */
function show(){
    bottles.footprint = 0.73*52*parseFloat(document.getElementById('bottles').value);
    bags.footprint = 0.417*52*parseFloat(document.getElementById('bags').value);
    wrapping.footprint = 0.583*52*parseFloat(document.getElementById('wrapping').value);
    yogurt.footprint = 0.383*52*parseFloat(document.getElementById('yogurt').value);
    boxes.footprint = 0.383*12*parseFloat(document.getElementById('boxes').value);
    cups.footprint = 0.240*12*parseFloat(document.getElementById('cups').value);
    packages.footprint = 0.834*12*parseFloat(document.getElementById('packages').value);
    detergent.footprint = 0.120*parseFloat(document.getElementById('detergent').value);
    shampoo.footprint = 0.080*parseFloat(document.getElementById('shampoo').value);
    toothbrushes.footprint = 0.020*parseFloat(document.getElementById('toothbrushes').value);
    toothpaste.footprint = 0.015*parseFloat(document.getElementById('toothpaste').value);
    household = parseFloat(document.getElementById('size').value);
    //sum of footprint
    let sum = (bottles.footprint+bags.footprint+wrapping.footprint+yogurt.footprint+boxes.footprint+cups.footprint+packages.footprint+detergent.footprint+shampoo.footprint+toothbrushes.footprint+toothpaste.footprint)/household;
    //show estimated plastic footprint kg/year
    document.getElementById('result').innerHTML = sum.toFixed(3);
    //make an order to find the most waste
    const arr = [bottles.footprint,bags.footprint,wrapping.footprint,yogurt.footprint,boxes.footprint,cups.footprint,packages.footprint,detergent.footprint,shampoo.footprint,toothbrushes.footprint,toothpaste.footprint];
    arr.sort(function(a, b){return b - a});
    var mostWaste = arr[0];
    //find the object that is the most waste
    var result = object.find(item => item.footprint === mostWaste);

    document.getElementById('source').innerHTML = result.item;
    document.getElementById('tips').innerHTML = result.tip;
    
}
/**
 * Reset the value of form
 */
function reset(){
    document.getElementById('fp').reset();
    document.getElementById('result').innerHTML = 0;
    document.getElementById('source').innerHTML = "unknown sources.";
    document.getElementById('tips').innerHTML = "";
}
