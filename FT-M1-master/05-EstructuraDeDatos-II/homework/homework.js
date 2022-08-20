"use strict";


/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor () {
   this.head = null
  }

  add(value){
   let node = new Node(value)
   let current = this.head
   if(current == null){
     this.head = node
      return this.head}
   while(current.next != null){
     current = current.next
   } current.next = node
     return node
  }
  remove(){
   let current = this.head;
   if (current == null){return null}
   if(current.next == null){
     let guarda = current.value
     this.head = null;
     return guarda  
   }
   while(current.next.next != null){
     current = current.next
   }  
      let nguarda = current.next.value
      current.next = null;
      return nguarda
  }
  search(value){
   let current = this.head;
   
   if(current.value == value){return value}
   if(current.next.value == value){return value}
   while (current){
     if (typeof value == "function"){
       if(value(current.value)){
         return current.value
       }
     }else
     if(current.value == value){return value}
     current = current.next
   } return null
   }
}

class Node{
 constructor(value){
   this.value = value
   this.next = null
 }
}

//                        Lista enlasada Juanjo completa
// class Nodo {
//   constructor (data){
//     this.data = data
//     this.next = null
//   }
// }


// class ListaEnlasada {
//    constructor () {
//    this.head = null
//   }
//   add (data){
//     let nodo = new Nodo(data)
//     let current = this.head
//       if (this.head == null){
//         this.head = nodo
//          return nodo
//       }
//       while(current.next != null){
//           current = current.next
//       }
//        current.next = nodo
//         return nodo
//    } 
//   size (){
//     let current = this.head
//     let acum = 0
//     if (!current){return ("esta lista tiene: "+acum+" elementos")}
//     while(current != null){
//       acum ++
//       current = current.next
//     } return ("esta lista tiene: "+acum+" elementos")
//   }
//   find (data){
//     let current = this.head
//     let contador = 0
//     if(this.head == null){return ("la lista esta vacia y no tiene ningun dato")}
//     while (current != null){
//       contador ++
//       if(current.data == data){
//         return "el dato: "+ data + " se encuentra en la posición "+contador+ " de la lista"}
//       current = current.next
//     } return ("el dato: "+ data + " no se encuentra en la lista")
//   }
//    pickup(data){
//      let current = this.head
//         if(current.data == data){
//         this.head = current.next
//         return ("se retiró de la lista el dato : "+data)
//      }
     
//       while(current.next.data != data){
//          current = current.next
//       if(current.next == null){
//          return("el dato: "+data+" no se encuentra en la lista")
//        }
     
//       }
//        if(current.next.data == data){
//          current.next = current.next.next
//          return ("se retiró de la lista el dato : "+data)
//      } 
    
//    }  
//  }

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
 - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
 - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
 - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
 - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
class HashTable{
 constructor(){
   this.array = []
   this.numBuckets = 35
 }
 hash(data){
   let sumador = 0;
 for(let i=0; i < data.length; i++){
     sumador = sumador + data.charCodeAt(i)
 } return (sumador % this.numBuckets)
 }
 set(clave, valor){
   if(typeof clave != "string"){throw new TypeError('Keys must be strings')}
   if(this.array[this.hash(clave)] === undefined ){
   this.array[this.hash(clave)] = {}
   }
   this.array[this.hash(clave)][clave] = valor 
 }
 get(clave){
   if(typeof clave != "string"){return new TypeError('Keys must be strings')}
   return this.array[this.hash(clave)][clave]}
 hasKey(clave){return this.array[this.hash(clave)].hasOwnProperty(clave)}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
 Node,
 LinkedList,
 HashTable,
};