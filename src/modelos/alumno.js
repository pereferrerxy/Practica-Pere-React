// src/modelos/alumno.js
// Importar la clase Persona para extenderla y crear la clase Alumno
import Persona from './persona';

class Alumno extends Persona {
    // Constructor de la clase Alumno que hereda de Persona
    constructor(dni, nombre, apellido, edad, nivel_educacion, nota_media) {
        super(dni, nombre, apellido, edad, nivel_educacion);  // Llamar al constructor de la clase padre (Persona)
        this.nota_media = nota_media;  // Propiedad para almacenar la nota media del alumno
    }
}

export default Alumno;  // Exportar la clase Alumno para su uso en otros archivos
