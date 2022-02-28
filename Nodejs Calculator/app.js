let mateBasica = require('./mate');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const hacerOperacion = ()=>{
    return new Promise((resolve)=>{
        let resultado = ""
        let keepgoing = true

        rl.question('Select an operator: (+ - * / %) or "0" to Finish: ', operator => {
            if(operator == "0"){
                keepgoing = false
                resolve(keepgoing)
                rl.close()
                return
            }

            rl.question("Enter the first number: ", num1=>{
                rl.question("Enter the second number: ", num2=>{
                    n1 = parseInt(num1)
                    n2 = parseInt(num2)
                    switch(operator){
                        case "+":
                            resultado = mateBasica.suma(n1,n2)
                            break;
                        case "-":
                            resultado = mateBasica.resta(n1,n2)
                            break;
                        case "*":
                            resultado = mateBasica.producto(n1,n2)
                            break;
                        case "/":
                            resultado = mateBasica.division(n1,n2)
                            break;
                        case "%":
                            resultado = mateBasica.modulo(n1,n2)
                            break;
                        default:
                            console.log("Please type a valid operator")
                            break;
                    }
                    console.log(resultado)
                    resolve(keepgoing)
                })
            })
        })   
    })
}


const calculator = async () => {
    let keepgoing = true
    while (keepgoing){
        keepgoing = await hacerOperacion()
    }

}

calculator();

