
  let weight
  console.log(typeof weight)
  let name = "Victor"
  let age = 26
  let stars = 4.8
  let isSubscribed = true
  let student = {
      name: "Victor",
      age: 26,
      weight: 84,
      isSubscribed: true,
  }

  console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kgs.`);

  let students = []

  students = [
    student
  ]
  console.log(students)

  console.log(students[0])

  const john = {
    name: "John",
    age: 23,
    weight: 75,
    isSubscribed: true,
  }

  students[1] = john

  console.log(students)

  undefined

