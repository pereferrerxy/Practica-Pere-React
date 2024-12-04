// src/modelos/profesor.js
// Importar la clase Persona para extenderla y crear la clase Profesor
import Persona from './persona';

class Profesor extends Persona {
    // Constructor de la clase Profesor que hereda de Persona
    constructor(dni, nombre, apellido, edad, nivel_educacion, sueldo) {
        super(dni, nombre, apellido, edad, nivel_educacion);  // Llamar al constructor de la clase padre (Persona)
        this.sueldo = sueldo;  // Propiedad para almacenar el sueldo del profesor
    }
}

export default Profesor;  // Exportar la clase Profesor para su uso en otros archivos
