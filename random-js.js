// 1) findMax
// Desarrollar la función findMax que recibe como parámetro un Arreglo de números y retorna el máximo.

function findMax(array){
    return array.sort((a,b) =>a-b)[array.length-1]
}

//console.log(findMax([3,5,2,8,1]))

// 2) Edades personas
// Crear una función llamada edadPersonas, donde se ingrese un Arreglo de números que representen edades de un grupo de personas.
// Imprimir cuántos son menores de 18 años, cuántos tienen 18 años o más y el promedio de edad de ambos grupos.
// Ejemplo:
// edadPersonas([82,78,5,90,23,56,10])
// Debe retornar:
// “Menores de 18 años: 2”
// “PROMEDIO - Menores de 18 años: 7.5”
// “Mayores de 18 años: 5”
// “PROMEDIO - Menores de 18 años: 65.8”

function edadPersonas(array){
    let overEighteen = array.filter(n => n>18)
    let averageOver = (overEighteen.reduce((a,b) => a+b))/overEighteen.length
    let underEighteen = array.filter(n => n<18);
    let averageUnder = (underEighteen.reduce((a,b) => a+b))/underEighteen.length

    //return averageOver
    return "Menores de 18 años: " + underEighteen.length + ". PROMEDIO - Menores de 18 años: " + averageUnder + ". Mayores de 18 años: " + overEighteen.length + ". PROMEDIO - Mayores de 18 años: " + averageOver
}

// console.log(edadPersonas([82,78,5,90,23,56,10]))

//3)
/*
Productos de tecnología

Escribí una función que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad. 
La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.

Utilizar la siguiente variable:
var ecommerce = [{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}]
Ejemplo: 
Elements(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]
*/

function brands (array,prop) {
    let newArray = []
    for (let i = 0;i<array.length;i++){
        newArray.push(array[i][prop])
    }
    return newArray
}

// console.log(brands([{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}],'nombre'))

//4)
/*
Valor Stock

Escribí una función valorStock que tome un arreglo de productos como parámetro.    La función debe devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total del stock:
Ejemplo:

var productos = [{ name: 'TV LCD', price: 100, stock: 50}, { name: 'Computadora', price: 500, stock: 50 }, { name: 'Iphone', price: 1000, stock: 10}] 
valorStock(productos) // Debe retornar [{ TV LCD: 5000 }, { Computadora: 25000 }, { Iphone: 10000 }] 
*/

function valorStock (array) {
    return array.map(({name,price,stock}) => ({[name]: [price]*[stock]}))
    // let newArray = []
    // for (let i=0;i<array.length;i++){
    //     let newObj ={}
    //     newObj[array[i]["name"]]=array[i]["price"]*array[i]["stock"]
    //     newArray.push(newObj)
    // }
    // return newArray
}

//console.log(valorStock([{ name: 'TV LCD', price: 100, stock: 50}, { name: 'Computadora', price: 500, stock: 50 }, { name: 'Iphone', price: 1000, stock: 10}]))

//5) SumArray

//Escribí una función sumArray que tome dos parámetros,
//un arreglo de números ordenados y un número. La función devolverá true,
//si cualquier combinación de dos números dentro del arreglo suman
//el número del segundo parámetro. Sino, devolverá false.

// Tu función acá:

//Tests:

// console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 13)); // true     2+11 suman 13
// console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 14)); // false

function sumArray(array,num){
    
    for (let i=0;i<array.length;i++){
        for (let y=i+1;y<array.length;y++){
            if (array[i] + array[y] == num){
                return true
            }
        }
    }
    return false

}

// console.log(sumArray([2, 5, 7, 10, 11, 15, 20], 14));

// 1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

function loopDePares (number) {
    for (let i = 0 ; i <= 100; i++) {
        console.log(i)
        let x = i + number
        if (x % 2 == 0) {
            console.log ("El número " + x + " es par")
        }
    }
}

//loopDePares(7)


// 2. Loop de impares con palabra
// Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
// Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.

function loopDeImpares (number, string) {
    for (let i = 0; i<=100; i++) {
        let x = i + number
        if (x % 2 !== 0) {
            console.log (string)
        } else {
            console.log(i)
        }
    }
}

//loopDeImpares(9,"gabi")

// 3. Sumatoria
//     Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

// Ejemplo: 
// sumattion(3) debe retornar 6 porque hace (1 +2 +3)
// sumattion(8) debe retornar 36

function summation (number) {
    let suma = 0
    for (let i = 0; i<=number; i++) {
        suma = suma + i
    }
    return suma
}

//console.log(summation (8))

// 4. Callback
// Debes crear una función llamada callback que reciba como Parámetros un número y una función. Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

// Teoría de callbacks: click aqui

// Ejemplo:
// callback(5, (num)=>{return num*10}) debe retornar 50
// callback(25, (num)=>{return num/5}) debe retornar 5

function callback (number,f) {
    return f(number)
}

//console.log(callback(5, (num)=>{return num*10}))

// 5. Nuevo Arreglo

// Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

// Ejemplo: 
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

function nuevoArreglo(number) {
    let array = []
    for (let i = 1; i<=number; i++) {
        array.push(i)
    }
    return array
}

//console.log(nuevoArreglo(6))

// 6. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original. Si no sabés cómo funciona, Google puede ayudarte.

// Importante: No podés usar el String.split()

// Ejemplo: 
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

function split (string) {
    let array = []
    for (let i = 0; i < string.length; i++) {
        array.push(string[i])
    }
    return array
}

//console.log(split("chau"))

// 7. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

function middleCharacter (string) {
    let middle = Math.floor(string.length/2)
    return string.length % 2 === 0 ? string.slice(middle-1,middle+1) 
                                   : string.slice(middle,middle+1)
    
    // let position
    // let length
    // if(string.length % 2 == 1) {
    //   position = string.length/2
    //   length = 1
    // } else {
    //   position = string.length/2-1
    //   length = 2
    // }
    //  return (string.substring(position,position+length)) 
    
  }

  //console.log(middleCharacter("gabriela"))

// 8. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

// Ejemplo: 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

function moveZeros (array) {
    let length = array.length
    for (let i = 0; i < length; i++) {
        if (array[i] === 0) {
            array.splice(array.indexOf(array[i]), 1)
            array.push(0)
        }
    }
    return array
}

//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

// 9. Manejar dos arreglos
// Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

// Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
//         Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

function arrayHandler (arrayOne,arrayTwo) {
    for (let i =0; i<arrayOne.length;i++){
        console.log("Soy " + arrayOne[i] + " y yo soy " + arrayTwo[i])
    }
}

//arrayHandler([1,2,3,4], ["h","o","l","a"])

// 10. Mezclar arreglos
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo: 
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]

function mezclarArreglos (arrayOne,arrayTwo) {
    let finalArray = []
    let longer = arrayOne.length < arrayTwo.length ? arrayTwo : arrayOne;
    for (let i = 0 ; i < longer.length ; i++) {
        if (arrayOne[i]) 
           { finalArray.push(arrayOne[i])}
        
        if (arrayTwo[i]) {
            finalArray.push(arrayTwo[i])
        }
    }
    return finalArray
}

//console.log(mezclarArreglos(["h","p"], [1,2,3,4]))

// 11. Arreglos
// Investigá los siguientes métodos de los arreglos y replicá su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: 
// 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
// 2. “pop([1,2,3,4,5])” debe retornar 5
// 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
// 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

function join (array,separator) {
    let string = ""
    for (let i = 0;i<array.length; i++) {
        string = string + array[i] + separator
    }
    return string
}

function pop (array) {
    return array[array.length-1]
}

function filter (array,fx) {
    let filtered = []
    for (let i = 0;i<array.length;i++){
        fx(array[i]) ? filtered.push(array[i]) : ""
    }
    return filtered

}

function map (array,fx) {
    let final = []
    array.forEach(element => {
        final.push(fx(element))
    })
    return final
}

// console.log(join([1,2,3,4,5], " "))
// console.log(pop([1,2,3,4,5]))
// console.log(filter([1,2,3,4,5], (e)=>{return e%2===0}))
// console.log(map([1,2,3,4,5], (e)=>{return e * 10}))

// 12. Mínima Suma
// Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

// Ejemplo: 
// minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
// minSum([1, 10, 43, 900, 20, 8]) debe retornar 9

function minSum (array) {
    let sorted = array.sort((a,b) => a - b)
    if (sorted.length >= 2) {
        return sorted [0] + sorted [1]
    } else {
        return sorted[0]
    }
}

//console.log(minSum([7, 6, 5, 4, 3, 2, 1]))
// 13. Arreglo de objetos
// Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor` y que contenga el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
// arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]

function arregloDeObjetos (number) {
    let finalArray = []
    for (let i = 1 ; i <= number ; i++) {
        finalArray.push({valor : i})
    }
    return finalArray
}

// console.log(arregloDeObjetos(6))

// 14. Arreglo de objetos 
// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4}, {hola: 5 }]
// arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}]

function arregloDeObjetos (number,prop) {
    let finalArray = []
    for (let i = 1 ; i <= number ; i++) {
        finalArray.push({[prop] : i})
    }
    return finalArray
}

// console.log(arregloDeObjetos(6, "gabi"))

// 15. Única propiedad
// Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro. 

// Ejemplo: 
//  var  arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
// oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
// oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ]

function oneProperty (array,prop) {
    return array.map(a => ({[prop]: a[prop]}));
}

//console.log(oneProperty([ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ], "name"))

// 16. Guerra de palabras
//      Utils: 
//  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

// Ejemplo:
// warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
// warWord(“love”, “friendship”) debe retornar “friendship”
function warWords (wordOne,wordTwo) {
    var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
    let sumOne = [...wordOne].map(c => abc[c] || 0).reduce((a, b) => a + b,0);
    let sumTwo = [...wordTwo].map(c => abc[c] || 0).reduce((a, b) => a + b,0);
    return (sumOne > sumTwo) ? wordOne : wordTwo
    
}



//console.log(warWords("love","friendship"))

// 17. Prefijos Telefónicos
//     Utils:
//     var prefijos = [54, 55, 56, 57, 58]
//  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

// Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo : 

// {
//     54: “Argentina”,
//     55: ”Brasil”,
//     56: ”Ecuador”,
//     57: ”Bolivia”
// }

// Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
// En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

// Ejemplo: 
// validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”


function validarPrefijo(number) {
    var prefijos = [54, 55, 56, 57, 58]
    var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
    const objPrefix = {}
    prefijos.forEach((p,index) => {
        objPrefix[p] = paises[index]
    })
    let prefix = String(number).substring(0,2)
    if (objPrefix[prefix]) {
        return "Este número pertenece a " + objPrefix[prefix]
    } else {
        return "El número no pertenece a nuestros países"
    }
}

//console.log(validarPrefijo(54465465))

// 18. {value: key} kelue: vay

// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. 
// Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.

//     Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

// var prueba = {
//     nombre: ‘santi’,
//     edad: 22,
//     nacionalidad: ‘de otro planeta’,
//     documento: 44444444
    
// }
// reverseKeys(prueba) debería devolver:
// {
// santi: ‘nombre’, 
// edad: 22,
// ‘’de otro planeta”: nacionalidad,
//  documento: 44444444
// }

let obj = {nombre: "gabi", edad: 35, provincia: "ba"}

function reverseKeys (obj) {
    if (Array.isArray(obj)) {
        return "error, input can't be an array"
    }
    if (typeof obj !== "object") {
        return "error, input can't be a " + typeof obj
    } else {
        let result = {}
        for (element in obj) {
            typeof obj[element] === "string" ? result[obj[element]] = element : result[element] = obj[element] 
        }
        // Object.keys(obj).forEach(key => {
        //     typeof obj[key] === "string" ? result[obj[key]] = key : result[key] = obj[key]
        // })
        return  result
        
    }
}


//console.log(reverseKeys(obj))


// 19. Palíndromo
// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

// Definición de palíndromo aquí.

// Ejemplo: 

// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

function palindromo (string) {
    let length = string.length
    string = string.toLowerCase()
    for (let i = 0; i < length/2; i++){
        if (string[i] !== string [length - 1 - i]) {
            return false
        } 
    }
    return true
}

//console.log(palindromo("menem"))

// 20. Rotación de arreglo a la derecha
// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.

// Ejemplo: 
// rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]

function rotar (array,number) {
        for (let i = 0; i < number; i++) {
            array.unshift(array.pop())
    
        
    }
    return array;
    }

   //console.log(rotar([1, 2, 3, 4, 5], 3)) 

// while (number > 0) {
        //     array.unshift(array.pop())
        //     number--;

// 21. Consecutivos similares
// Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
// Ejemplo: 
// consecutivosSimilares(“AAAA”) debe retornar 3
// consecutivosSimilares(“BBBBB”) debe retornar 4
// consecutivosSimilares(“ABABABAB”) debe retornar 0
// consecutivosSimilares(“BABABA”) debe retornar 0
// consecutivosSimilares(“AAABBB”) debe retornar 4

function consecutivosSimilares (string) {
    let contador = 0
    for (let i = 0; i < string.length ; i++) {
        if (string[i] == string[i+1]) {
            contador++
        }
    }
    return contador
}

//console.log(consecutivosSimilares("BBBBs"))

function miArreglo ( array )
{
    let prefix = array.splice(0,3).join("")
    let middle = array.splice(0,3).join("")
    let end = array.splice(0,4).join("")

    return "(" + prefix + ") " + middle + "-" + end 

    // let telephone = ""
    // array = array.map(String)
    // telephone += "(" + array[0] + array [1] + array [2] + ") " + array [3] + array [4] + array [5] + "-" + array [6] + array [7] + array [8] + array [9]
    // return telephone
}

//console.log(miArreglo([0,1,2,3,4,5,6,7,8,9]))
function miArregloDos ( array )
{
    

    let telephone = ""
    //array = array.map(String)
    telephone += "(" + array[0] + array [1] + array [2] + ") " + array [3] + array [4] + array [5] + "-" + array [6] + array [7] + array [8] + array [9]
    return telephone
}

// console.log(miArregloDos([0,1,2,3,4,5,6,7,8,9]))

function myFunction(string) {
return string.length
}

// console.log(myFunction("gabi"))

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = classPoints.reduce((a,b) => a+b,0)/classPoints.length
    return yourPoints > average
  }

  //console.log(betterThanAverage([4,5,3,1,6,7],9))

  function duplicateCount(text){
    let lower = text.toLowerCase()
    return lower.split('').filter((value,index,array) => {
        return array.indexOf(value) == index && array.lastIndexOf(value) !== index
    }).length
  }

  //console.log(duplicateCount("aaaaabcc22"))

  function noBe (obj){
    let hola = {}
    for (key in obj) {
       if (key !== "b"){
          hola[key]=obj[key]
       }}
    return hola
  }

  //console.log(noBe({ a: 1, b: 7, c: 3 }))

  function merge (x,y){
    let newWordsObject = {};
    //  const { b, ...rest } = y;
    // return { ...x, ...rest, d: b };
  
    Object.keys(y).forEach(key => {
    if (key === "b") {
        let newPair = { ["d"]: y["b"] };
        newWordsObject = { ...newWordsObject, ...newPair }
    } else {
        newWordsObject = { ...newWordsObject, [key]: y[key] }
    }
    
})
return {...x,...newWordsObject};
  }


  //console.log(merge({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))

  function multiplicar (a, b) {
    let newObj = {}
    for (key in a) {
    newObj[key]=a[key]*b
    }
    return newObj

    // return Object.entries(a).reduce((acc, [key, val]) => {
    //     return { ...acc, [key]: val * b };
    // }, {});
 }

 //console.log(multiplicar({a:1,b:2},3))

 function swap(obj){
    let newObj={}
    for (key in obj){
       newObj[obj[key]]=key
    }
    return newObj
 }

 //console.log(swap({z:'a',y:'b',x:'c',w:'d'}))

 function empty (obj) {
    let newObj = {} 
    Object.keys(obj).forEach(k => obj[k].trim() === ""  ? newObj[k] = null : newObj[k] = obj[k] ) 
    return newObj
 }

//  const newObj = { ...obj };
//  for (key in newObj) {
//    if (newObj[key].trim() === '') newObj[key] = null;
//  }
//  return newObj;

 //console.log(empty({ a: 'a', b: 'b', c: ' ' }))

 function find_total( my_list ) {
    let total = 0
    for (let i =0;i<my_list.lenght; i++){
    if (my_list[i] % 2 === 0 || my_list[i] === 0) {
    total + my_list[i]} else if (my_list[i] % 2 !== 0) {total - my_list[i]
    }
}
    return total
}

var paises = [
    {
        nombre: "argentina",
    continente: "sudamerica",
    poblacion: 40000000
    },
    {
        nombre: "brasil",
    continente: "sudamerica",
    poblacion: 300000000
    },
    {
        nombre: "venezuela",
    continente: "sudamerica",
    poblacion: 25000000
    },
    {
        nombre: "chile",
    continente: "sudamerica",
    poblacion: 10000000
    },
    {
        nombre: "australia",
    continente: "oceania",
    poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
    continente: "oceania",
    poblacion: 8000000
    },
    {
        nombre: "china",
    continente: "asia",
    poblacion: 1000000000
    },
    {
        nombre: "tailandia",
    continente: "asia",
    poblacion: 32000000
    },
    {
        nombre: "vietnam",
    continente: "asia",
    poblacion: 23000000
    },
    {
        nombre:"españa",
    continente: "europa",
    poblacion: 29000000
    },
    {
        nombre: "alemania",
    continente: "europa",
    poblacion: 33000000
    },
    {
        nombre: "francia",
    continente: "europa",
    poblacion: 65000000
    },
    {
        nombre: "portugal",
    continente: "europa",
    poblacion: 4000000
    },
    {
        nombre: "grecia",
    continente: "europa",
    poblacion: 12000000
    },
    ]

// function doubleFilter(array, cont, pob) {
//     // const newArray = array.filter(pais => pais["continente"] === cont && pais["poblacion"] >= pob);
//     return array.filter(pais => pais["continente"] === cont && pais["poblacion"] >= pob)
//   }

// function doubleFilter(arr, cont, pob) {
//     let newObj = arr.filter(pais => {
//     return  pais["continente"] === cont && pais["poblacion"] >= pob;
//     });
  
//     return newObj;
//   }
//   console.log(doubleFilter("paises", "sudamerica", 400000000));

//   console.log(doubleFilter(paises,"sudamerica",4000000))

//   && pais["poblacion"] >= pob

function doubleFilter(arr, cont, pob) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].continente === cont && arr[i].poblacion >= pob){
            newArr.push(arr[i])
        }
        // for (prop in arr[i]) {
        //     if (arr[i][prop] === cont) {
        //       newArr.push(arr[i]);
        //     }
        // }
    
    }
    return newArr;
  }
//   console.log(doubleFilter(paises, "sudamerica", 40000000))

var actoresPrincipales = ["Johnny Depp", "Anne Hathaway", "Susan Sarandon"]

let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
}



// let newActores = final.map(element => actoresPrincipales.push(element))
let final = Object.values(actoresPrincipalesPorPelicula)

actoresPrincipales.push(...final)

console.log(actoresPrincipales)







