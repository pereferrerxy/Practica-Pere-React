// src/modelos/persona.js
// Definición de la clase Persona con un constructor para crear instancias de personas
class Persona {
    // Constructor de la clase Persona que recibe parámetros para inicializar propiedades
    constructor(dni, nombre, apellido, edad, nivel_educacion) {
        this.dni = dni;  // Propiedad para almacenar el DNI de la persona
        this.nombre = nombre;  // Propiedad para almacenar el nombre de la persona
        this.apellido = apellido;  // Propiedad para almacenar el apellido de la persona
        this.edad = edad;  // Propiedad para almacenar la edad de la persona
        this.nivel_educacion = nivel_educacion;  // Propiedad para almacenar el nivel de educación de la persona
    }
}

export default Persona;  // Exportar la clase Persona para su uso en otros archivos
