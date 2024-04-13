'use strict'

const separadorNumeros = () => {
    let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let pares = []
    let impares = []

    let cont = 0

    // while(cont < listaNumeros.length){
    //     const numero = listaNumeros[cont]

    //     if(numero % 2 == 0){
    //         pares.push(numero)
    //     }else{
    //         impares.push(numero)
    //     }

    //     cont++
    // }

    for (let numero of listaNumeros) {

        if (numero % 2 == 0) {
            pares.push(numero)
        } else {
            impares.push(numero)
        }
    }

    // listaNumeros.forEach( numero => {
    //     if(numero % 2 == 0){
    //         pares.push(numero)
    //     }else{
    //         impares.push(numero)
    //     }
    // })

    console.log(impares);
    console.log(pares);
}

const mestreMiag = () => {
    const listaKaratecas = [
        {
            nome: "Luizão",
            notas: [10, 9]
        },
        {
            nome: "Miguel",
            notas: [8, 9]
        },
        {
            nome: "Falcão",
            notas: [6.5, 9.5]
        }
    ]

    for (let aluno of listaKaratecas) {
        // let media = 0
        // aluno.notas.forEach(nota => media = media + nota)
        // media = media / aluno.notas.length


        let media = (aluno.notas[0] + aluno.notas[1]) / 2

        console.log(`Aluno: ${aluno.nome} \nMédia: ${media}`)
    }
}


const sortear = () => {
    let sorteio = []

    while (sorteio.length < 6) {
        let num = Math.ceil(Math.random() * 60)

        if (num) {
            sorteio.push(num)
        }
    }

    console.log(sorteio);
    document.getElementById('numeros').textContent = sorteio
}

