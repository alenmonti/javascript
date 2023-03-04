
function backticks(){
    let backticks = "con alt+96 o ctrl+alt+} dos veces";
    document.write(`backticks, ${backticks} <br>`);
}

backticks();

class animal {
    constructor(especie, edad){
        this.especie = especie;
        this.edad = edad;
    }

    saludar(){
        document.write(`Hola, soy un ${this.especie} y tengo ${this.edad} años. <br>`);
    }
}

let gato = new animal("gato", 3);
gato.saludar();
