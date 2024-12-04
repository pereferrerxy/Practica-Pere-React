// src/servicios/datosTabla.js

// Importar las clases de modelos necesarias
import Persona from '../modelos/persona';
import Profesor from '../modelos/profesor';
import Alumno from '../modelos/alumno';

// Definir listas de nombres y apellidos para la generación aleatoria
const nombres = ['Hugo', 'Anna', 'Joel', 'Marc', 'Lucas', 'Biel', 'Oscar', 'Mario', 'David', 'Deivid', 'Guillem', 'Hector', 'Sergio', 'Alex', 'Ferran', 'Rodirgol', 'Juan', 'Agustin', 'Selene', 'Mama'];
const apellidos = ['Alcolea', 'Cinca', 'Curado', 'Portet', 'Gomez', 'Zonrnoza', 'Gomez', 'Carts', 'Putero', 'Foking', 'Bossanova', 'Torres', 'Fonollosa', 'Diaz', 'Calzadilla', 'Dosantos', 'Delegat', 'A.K.A-Juan', 'Alarcon', 'Kounde'];

// Función para obtener un elemento aleatorio de un array
function randomElemento(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Función para generar un número entero aleatorio en un rango dado
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para obtener un nivel educativo aleatorio
function randomNivel() {
    const niveles = ["Primaria", "Secundaria"];
    const randomIndex = Math.floor(Math.random() * niveles.length);
    return niveles[randomIndex];
}

// Función para generar un número decimal aleatorio en un rango dado con cierta cantidad de decimales
function randomDecimal(min, max, decimalPlaces) {
    const random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(decimalPlaces));
}

// Función para generar un DNI aleatorio
function randomDNI() {
    const numbers = String(randomInt(10000000, 99999999));
    const letter = String.fromCharCode(randomInt(65, 90));
    return numbers + letter;
}

// Función para generar datos de la tabla
export const datosTabla = () => {
    // Definir la configuración de la cabecera de la tabla
    const cabecera = [
        { titulo: 'DNI', camp: 'dni' },
        { titulo: 'NOMBRE', camp: 'nombre' },
        { titulo: 'APELLIDO', camp: 'apellido' },
        { titulo: 'EDAD', camp: 'edad' },
        { titulo: 'NIVEL EDUCACION', camp: 'nivel_educacion' },
        { titulo: 'SUELDO', camp: 'sueldo' },
        { titulo: 'NOTA MEDIA', camp: 'nota_media' }
    ];

    // Funciones para generar instancias aleatorias de Persona, Profesor y Alumno
    const generarPersonaAleatoria = () => {
        const dni = randomDNI();
        const nombre = randomElemento(nombres);
        const apellido = randomElemento(apellidos);
        const edad = randomInt(0, 100);
        const nivelEducacion = randomNivel();

        return new Persona(dni, nombre, apellido, edad, nivelEducacion);
    };

    const generarProfesorAleatorio = () => {
        const dni = randomDNI();
        const nombre = randomElemento(nombres);
        const apellido = randomElemento(apellidos);
        const edad = randomInt(25, 65); 
        const nivelEducacion = randomNivel();
        const sueldo = randomInt(975, 5000); 

        return new Profesor(dni, nombre, apellido, edad, nivelEducacion, sueldo);
    };

    const generarAlumnoAleatorio = () => {
        const dni = randomDNI();
        const nombre = randomElemento(nombres);
        const apellido = randomElemento(apellidos);
        const edad = randomInt(3, 25); 
        const nivelEducacion = randomNivel();
        const notaMedia = randomDecimal(0, 10, 1); 

        return new Alumno(dni, nombre, apellido, edad, nivelEducacion, notaMedia);
    };

    // Generar instancias aleatorias de Persona, Profesor y Alumno
    const personas = [generarPersonaAleatoria()];
    const profesores = [generarProfesorAleatorio()];
    const alumnos = [generarAlumnoAleatorio()];

    // Devolver un objeto que contiene las instancias y la configuración de la cabecera
    return { personas, profesores, alumnos, cabecera };
};
