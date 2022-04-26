// Métodos estáticos del prototipo Object
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Course 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

// Let's see how the object is crafted
console.log(Object.getOwnPropertyDescriptors(juan));

// Let's define a new schema for our objects
Object.defineProperty(juan, "pruebaNASA", {
  value: () => {
    console.log("extraterrestrials")
  },
  writable: false,
  enumerable: false,
  configurable: false
})