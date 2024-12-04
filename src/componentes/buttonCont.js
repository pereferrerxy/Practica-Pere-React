// src/componentes/buttonCont.js
// Importar el hook 'useState' de React y otros componentes y estilos necesarios
import { useState } from 'react';
import { TablaComp } from './tablaComp';
import { datosTabla } from '../servicios/datosTabla';
import './styleButtons.css';

// Componente funcional Container que gestiona el estado y acciones relacionadas con la tabla
const Container = () => {
    // Estados para el título, configuración de la tabla, datos de la tabla, etc.
    let [titulo, setTitulo] = useState("Tabla React"); // Estado para el título de la tabla
    const [conf, setConf] = useState([]); // Estado para la configuración de la tabla
    const [datos, setDatos] = useState([]); // Estado para los datos de la tabla

    const [ordenAscendente, setOrdenAscendente] = useState(true); // Estado para controlar el orden ascendente/descendente

    const [filtroAplicado, setFiltroAplicado] = useState(false); // Estado para indicar si se aplicó un filtro

    const [sumaSueldos, setSumaSueldos] = useState(0); // Estado para almacenar la suma total de sueldos
    const [mostrarSuma, setMostrarSuma] = useState(false); // Estado para controlar la visibilidad de la suma total

    // Obtener datos iniciales de la función 'datosTabla'
    const { personas, profesores, alumnos, cabecera } = datosTabla();

    // Función para cambiar dinámicamente el título a través de una ventana de prompt
    function cambiarTitulo() {
        // Prompt para ingresar un nuevo título
        let nuevoTit = prompt("Introduce un nuevo Título:");

        // Verificar si se ingresó un título y actualizar el estado 'titulo'
        if (nuevoTit) {
            setTitulo(nuevoTit);
        }
    }

    // Funciones para mostrar diferentes conjuntos de datos en la tabla

    // Función para mostrar la cabecera en la tabla
    const mostrarCabecera = () => {
        // Actualizar el estado 'conf' con la configuración de la cabecera
        setConf(cabecera);
        // Mostrar la configuración de la cabecera en la consola
        console.log(cabecera);
    };

    // Función para mostrar personas en la tabla
    const mostrarPersonas = () => {
        // Actualizar el estado 'datos' con la combinación de datos existentes y datos de personas
        setDatos([...datos, ...personas]);
        // Mostrar los datos de personas en la consola
        console.log(personas);
    };

    // Función para mostrar profesores en la tabla
    const mostrarProfesor = () => {
        // Actualizar el estado 'datos' con la combinación de datos existentes y datos de profesores
        setDatos([...datos, ...profesores]);
        // Mostrar los datos de profesores en la consola
        console.log(profesores);
    };

    // Función para mostrar alumnos en la tabla
    const mostrarAlumno = () => {
        // Actualizar el estado 'datos' con la combinación de datos existentes y datos de alumnos
        setDatos([...datos, ...alumnos]);
        // Mostrar los datos de alumnos en la consola
        console.log(alumnos);
    };

    // Función para ordenar los datos en la tabla según la edad, ascendente o descendente
    const ordenar = () => {
        // Crear una copia de los datos y ordenarla según la edad y la dirección (ascendente o descendente)
        const datosOrdenados = [...datos].sort((a, b) => {
            // Bloque 'if' para determinar el criterio de ordenación según el estado 'ordenAscendente'
            if (ordenAscendente) {
                // Si 'ordenAscendente' es verdadero, ordenar de manera ascendente restando las edades
                return a.edad - b.edad;
            } else {
                // Si 'ordenAscendente' es falso, ordenar de manera descendente restando las edades en el orden opuesto
                return b.edad - a.edad;
            }

        });

        // Actualizar el estado 'datos' con los datos ordenados y cambiar la dirección de orden
        setDatos(datosOrdenados);
        setOrdenAscendente(!ordenAscendente);
    };

    // Función para filtrar los datos y mostrar solo aquellos con nivel de educación 'Primaria'
    const filtrar = () => {
        // Filtrar los datos para incluir solo aquellos con nivel de educación 'Primaria'
        const personasPrimaria = datos.filter(datos => datos.nivel_educacion === 'Primaria');

        // Actualizar el estado 'datos' con los datos filtrados y marcar que se ha aplicado un filtro
        setDatos(personasPrimaria);
        setFiltroAplicado(true);
    };

    // Función para calcular y mostrar la suma total de sueldos de los profesores en la tabla
    const totalizar = () => {
        // Calcular la suma total de sueldos de los profesores utilizando el método 'reduce'
        const sueldosTotales = datos.reduce((total, profesor) => {
            // Sumar el sueldo de cada profesor al total, solo si el sueldo está definido
            if (profesor.sueldo) {
                return total + profesor.sueldo;
            }
            return total;
        }, 0);

        // Actualizar el estado 'sumaSueldos' con la suma total calculada
        setSumaSueldos(sueldosTotales);

        // Alternar la visibilidad de la suma total en la tabla
        setMostrarSuma(prevMostrarSuma => !prevMostrarSuma);
    };


    // Estructura JSX del componente Container que contiene botones y la tabla
    return (
        <>
            <div>
                <h1>{titulo}</h1>
                <br />
                <button onClick={cambiarTitulo}>Cambiar título</button>
                <button onClick={mostrarCabecera}>Cabecera</button>
                <button onClick={mostrarPersonas}>Mostrar Personas</button>
                <button onClick={mostrarProfesor}>Mostrar Profesor</button>
                <button onClick={mostrarAlumno}>Mostrar Alumno</button>
                <button onClick={ordenar}>Ordenar</button>
                <button onClick={filtrar}>Filtrar</button>
                <button onClick={totalizar}>Totalizar</button>
                {mostrarSuma && (
                    <div>
                        <h2 className="suma-message">
                            Suma Total de Sueldos: <span className="suma-number">{sumaSueldos}€</span>
                        </h2>
                    </div>
                )}

                {/* Renderizar el componente TablaComp con las propiedades 'conf' y 'datos' */}
                <TablaComp conf={conf} datos={datos}></TablaComp>
            </div>
        </>
    );
};

export default Container;  // Exportar el componente Container para su uso en otros archivos
