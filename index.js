// Your Solution goes here
//console.log("Index.js load successfull");


//Función que elimina el primer y el último caracter
function removeFirstAndLastChar(a){
    if (a.length <=2) {
        console.log("La palabra tiene menos de dos caracteres"); 
    }
    else {
        var eliminado = a.slice(1,a.length-1);
        console.log(eliminado);

    }
   
}

removeFirstAndLastChar("begoña");


/* 
Función que cambia: 
'a' or 'A' with 4
'e' or 'E' with 3.
'l' with 1

*/

function moreNerdy(b){
    var palabraNueva = ""
    for (var i=0; i<b.length; i++){
        if (b[i]==="a" || b[i]==="A"){
          palabraNueva+=  "4";
        }
        else if (b[i]==="e" ||  b[i]==="E") {
            palabraNueva+=  "3";
        }

        else if(b[i] ==="l"){
            palabraNueva +=1;
        }
       else {
           palabraNueva += b[i];
       }

        }
        console.log(palabraNueva)

    }

moreNerdy("Fundamentals");

//  Esta función tiene que eliminar todas las vocales en minúsculas y mayúsculas en una cadena dada.

function noVowels(word){
    var cambioPalabra = word.toLowerCase();
    var palabraSinVocales = ""
    for (var i=0; i<cambioPalabra.length; i++){
       if(cambioPalabra[i] === "a"|| cambioPalabra[i] === "e" || cambioPalabra[i] === "i" || cambioPalabra[i] === "o" || cambioPalabra[i] === "u"  ) {
       palabraSinVocales += "";
    } else {
        palabraSinVocales += cambioPalabra[i]
    }

}
  console.log(palabraSinVocales);
}
noVowels("BeGoÑa");

//  Esta función cogerá las 3 primeras letras y las usará como apodo

function nicknameGenerator(noun){

    var apodo = "";
    
         if (noun.length<4){
           console.log("error, palabra muy corta");
        }
        else if (noun[2] == "a" || noun[2] == "e" || noun[2] == "i" || noun[2] == "o" ||noun[2] == "u" ) {
            apodo = noun.substr(0,4);
        } 
        else if (noun[2] != "a" && noun[2] != "e" && noun[2] != "i" && noun[2] != "o" &&noun[2] != "u" ){
            apodo = noun.substr(0,3);
        }
    
    console.log(apodo);
    }

nicknameGenerator("Jeannie");

// Iteración 3: nos devuelve el numero mayor y el menor, aquí busqué en google pero el método apply en sí mismo no tengo claro qué hace

function highAndLow(numbers) {
    var arrayNum =[];
    var arrayNum = numbers.split(" ");
    console.log(arrayNum);

  var arrMax = Math.max.apply(null, arrayNum);
   //console.log(arrMax);
  var arrMin = Math.min.apply(null, arrayNum);
  //console.log(arrMin);
    var valoresFinales = `${arrMax} ${arrMin}`;
    console.log(valoresFinales);

}
highAndLow("1 2 3 4 5")



// Iteración 4: invierte el orden de un string;

function reverseIt(frase) {

    var array = frase.split(" ");
    console.log(array);

    var arrayReverse = array.reverse();
    console.log(arrayReverse);

  
        for (var i=0; i<= arrayReverse.length -1; i++) {
            fraseNueva = arrayReverse.toString(",");
        }
        console.log(fraseNueva);
    }


reverseIt("hello world hola mundo")