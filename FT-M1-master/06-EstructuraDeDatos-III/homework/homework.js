"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
var BinarySearchTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.size = function () {
let contador = 1
if(this.left){contador += this.left.size()}
if(this.right){contador += this.right.size()}
  return contador
};

BinarySearchTree.prototype.insert = function (value) {
 let node = new BinarySearchTree(value)
 if(this.value == null){this.value = node}
  if(this.value > value){
    if(this.left){this.left.insert(value)}
      if(!this.left){this.left = node}
  } else {
    if(this.right){this.right.insert(value)}
      if(!this.right){this.right = node}
  }
};

BinarySearchTree.prototype.contains = function (valor) {
  if(this.value == valor){return true}
  if(this.left){
    if(this.left.contains(valor)){return true}}
  if(this.right){
    if(this.right.contains(valor)){return true}}
    
   return false
};
BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  switch (order) {
    case "in-order":
      if (this.left) {
        this.left.depthFirstForEach(cb, order);
      }
      cb(this.value);
      if (this.right) {
        this.right.depthFirstForEach(cb, order);
      }
      break;
    case "pre-order":
      cb(this.value);
      if (this.left) {
        this.left.depthFirstForEach(cb, order);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, order);
      }
      break;
    case "post-order":
      if (this.left) {
        this.left.depthFirstForEach(cb, order);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, order);
      }
      cb(this.value);
      break;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
cb(this.value)
if(this.left){array.push(this.left)}
if(this.right){array.push(this.right)}
if(array.length > 0){
  array.shift().breadthFirstForEach(cb,array)
}
};


//******************************************************************************** */
// var BinarySearchTree = function (value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// };

// BinarySearchTree.prototype.size = function () {
//   var contador = 1;
//   if (this.right) {
//     contador += this.right.size();
//   }
//   if (this.left) {
//     contador += this.left.size();
//   }
//   return contador;
// };

// BinarySearchTree.prototype.insert = function (value) {
//   if (value > this.value) {
//     if (this.right == null) {
//       this.right = new BinarySearchTree(value);
//     } else {
//       this.right.insert(value);
//     }
//   }
//   if (value < this.value) {
//     if (this.left == null) {
//       this.left = new BinarySearchTree(value);
//     } else {
//       this.left.insert(value);
//     }
//   }
// };

// BinarySearchTree.prototype.contains = function (valor) {
//   if (this.value == valor) return true;

//   if (this.left) { return this.left.contains(valor)}
//   //   if (this.left.contains(valor)) {
//   //     return true;
//   //   }
//   // }
//   if (this.right) {this.right.contains(valor)}
//     // if (this.right.contains(valor)) {
//     //   return true;
//     // }
//     return false;

//   }
// ;
// BinarySearchTree.prototype.depthFirstForEach = function (f, order) {
//   if (order === "post-order") {
//     // izq der nodo
//     if (this.left !== null) this.left.depthFirstForEach(f, order);
//     if (this.right !== null) this.right.depthFirstForEach(f, order);
//     f(this.value);
//   } else if (order === "pre-order") {
//     //nodo - izq - der
//     f(this.value);
//     if (this.left !== null) this.left.depthFirstForEach(f, order);
//     if (this.right !== null) this.right.depthFirstForEach(f, order);
//   } else {
//     // izq nodo der
//     if (this.left !== null) this.left.depthFirstForEach(f, order);
//     f(this.value);
//     if (this.right !== null) this.right.depthFirstForEach(f, order);
//   }
// };

// BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
//   if (this.left) {
//     array.push(this.left);
//   }

//   if (this.right) {
//     array.push(this.right);
//   }

//   cb(this.value);
//   if (array.length > 0) {
//     array.shift().breadthFirstForEach(cb, array);
//   }
// };


//********************************************************************************** */
// class BinarySearchTree{
  
//   constructor (value){
//   this.value = value
//   this.right = null
//   this.left = null
//   }
//   size(){
//   let contador = 1
//   if(this.left){contador+= this.left.size()}
//   if(this.right){contador+= this.right.size()}
//     return contador
// }
// insert (value){
//   if (this.value >= value){
//      if (this.left != null){this.left.insert(value)}
//     else 
//     if (this.left == null) {this.left = new BinarySearchTree(value)}
//   } else { 
//       if(this.right != null){this.right.insert(value)
//     } else 
//     if(this.right == null){this.right = new BinarySearchTree(value)}
//   }
// }

// contains(value){
//   if(this.value == value)return true
//   if(value < this.value){
//   if(this.left){
//     if(this.value == value){return true}
//     return this.left.contains(value)
//   } 
//   }
//   if(this.right){
//     if(this.value == value){return true}
//     return this.right.contains(value)}
//   return false
// }
// depthFirstForEach (cb,order = "in-order"){
//   // I H D
//   switch(order){
//     case "in-order":
//     if(this.left){this.left.depthFirstForEach(cb,order)}
//     cb(this.value)
//     if(this.right){this.right.depthFirstForEach(cb,order)}
//     break;
    
//     case "pre-order":
//       cb(this.value)
//       if(this.left){this.left.depthFirstForEach(cb,order)}
//       if(this.right){this.right.depthFirstForEach(cb,order)}
//     break;
      
//     case "post-order":
//       if(this.left){this.left.depthFirstForEach(cb,order)}
//       if(this.right){this.right.depthFirstForEach(cb,order)}
//       cb(this.value)
//       break;
  
//   }
// }

// }
// let arr = []
// BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
//   if(this.left){arr.push(this.left)}
//   if(this.right){arr.push(this.right)}
//   cb(arr.push(this.value))
  
//   if(arr.lenght > 0){arr.shift().breadthFirstForEach(cb,arr)}
// }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};