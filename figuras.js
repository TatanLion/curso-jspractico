//Códgio del cuadrado
console.group("Cuadrados")

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//Creamos una función para recibir el lado al llamar esta misma función 
function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();


//Código del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2= 6;
// const baseTriangulo = 4;
// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo+ "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base; 
}
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo (base,  altura){
    return (base * altura) / 2;
}
// console.log("El área del triangulo es de: " + areaTriangulo + "cm^2")

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

//Diametro
function diametroCirculo (radio){
    return radio * 2;
}
// console.log("El diametro del círculo es de: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es : " + PI);


//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del círculo es de: " + perimetroCirculo + "cm");

//Área
function areaCirculo (radio){
    return (radio * radio) * PI;
}
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();


//Interactuar con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    //Aquí vamos a invocar la función donde calculamos el perimetro y el paraemtro sera el numero que colocaron en el input
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    //Aquí vamos a invocar la función donde calculamos el perimetro y el paraemtro sera el numero que colocaron en el input
    const area = areaCuadrado(value);
    alert(area);
}