// Objeto literal
const natalia = {
  name: "Natalia",
  age: 23,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso práctico de HTML y CSS",
  ],
  aprovarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
};

// Prototipo JS
function StudentPrototype(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

StudentPrototype.prototype.aprovarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const juanita = new StudentPrototype("Juanita", 30, ["Curso definitivo de HTML y CSS", "Curso práctico de HTML y CSS"])

// Clase y objeto OOP (es exactamente lo mismo que el prototipo JS)
class StudentPOO {
  constructor({ 
      name, 
      age, 
      cursosAprobados = [],
      email,
      facebook,
      instagram,
      twitter,
    }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  aprovarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

/* 
Mandando un {objeto} en el constructor, 
podemos mandar los parámetros en desorden 
y de manera opcional.
*/
const miguelito = new StudentPOO({
  age: 23,
  cursosAprobados: ["Curso Básico de JavaScript"],
  name: "Miguelito",
  email: "miguelito@gmail.com",
});
