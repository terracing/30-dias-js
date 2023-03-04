 const natalia = {
    name: "Natalia",
    edad: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
 };

 function Student(name, age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
 }

 Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.approvedCourses.push(nuevoCursito);
 }

 const juanita = new Student(
    "Juanita",
    15,
    ["Curso de introducción a los videojuegos","Curso de creación de videojuegos"]
 )