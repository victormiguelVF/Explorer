/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

    "Paciente X possui IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente

    Crie uma função para fazer o cálculo deIMC
*/

const patients = [
    {
        name: "Victor",
        age: 26,
        weight: 86,
        height: 180,
    },
    {
        name: "Karen",
        age: 30,
        weight: 55,
        height: 170,
    },
    {
        name: "Lohan",
        age: 8,
        weight: 40,
        height: 150,
    },
]

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
        Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}
    `
}

for (let patient of patients){
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}
