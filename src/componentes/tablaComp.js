// src/componentes/tablaComp.js
// Importar la biblioteca React y el archivo de estilos para la tabla
import React from 'react';
import './styleTable.css';

// Componente funcional TablaComp que recibe propiedades 'conf' y 'datos'
export function TablaComp({ conf, datos }) {
    return (
        // Estructura de tabla HTML con encabezado y cuerpo
        <table>
            <thead>
                {/* Mapear cada elemento de 'conf' para crear las celdas de encabezado */}
                <tr>
                    {conf.map((configItem, index) => (
                        // Crear una celda de encabezado con el título y clave única
                        <th key={index}>{configItem.titulo}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Mapear cada elemento de 'datos' para crear las filas de datos */}
                {datos.map((dataObject, dataIndex) => (
                    // Crear una fila de datos con clave única
                    <tr key={dataIndex}>
                        {/* Mapear cada elemento de 'conf' para crear las celdas de datos */}
                        {conf.map((configItem, configIndex) => (
                            // Crear una celda de datos con el valor correspondiente
                            <td key={configIndex}>{dataObject[configItem.camp]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
