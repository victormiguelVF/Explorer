/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista deverá conter:
    - nome
    - idade
    - pese
    - altura

    Escreva uma lista contendo o nome dos pacientes
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
    }
]

let patientsNames = []

for(let patient of patients) {
   alert(`${patient.name}, ${patient.age} anos, ${patient.weight} kilos, ${patient.height} centímetros. `)

}

//alert(patientsNames)
//patientsNames.push(patient.name)


