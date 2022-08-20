'use strict'
function BinarioADecimal(num) {
  // tu codigo aca

// con FOR
// let numString = num.toString();
// var numero = 0;
// numString = numString.split("").reverse()
// for (let i = 0; i < numString.length; i++) {
// numero += (numString[i] * 2 ** i )
// }
// return numero;
// *****************************************************************************************
// con REDUCE
// let numero = 0
// let numString = num.toString().split("").reverse();

// numero = numString.reduce((numero,num,index) => numero += (numString[index] * 2 ** index),0)
// return numero 
// *****************************************************************************************
let numero = 0
let numString = num.split("").reverse().reduce((num, numeroBinario, index)=> {
  numero += numeroBinario * 2 ** index;},0);
return numero
}
 

function DecimalABinario(num) {
  // tu codigo aca
  let array = []
  if(num == 0) return 0;
  while (num / 2 > 0){
    array.push(num % 2) 
    //num = parseInt(num / 2)
    num = Math.floor(num / 2) 
}
     return array.reverse().join("") 
   }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}