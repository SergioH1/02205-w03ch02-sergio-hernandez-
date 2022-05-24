import { Tarea } from './Tarea.js';
export function crearTareas() {
    const data = [
        new Tarea('Comprar el pan', 'Sergio', false, 1),
        new Tarea('Aprender Typescrypt', 'Sergio del futuro', false, 2),
        new Tarea('No morir aprendiendo React', 'Prototype Sergio', false, 3),
        new Tarea('Añadir mas tareas', 'Sergio del presente', false, 4),
        new Tarea('Terminar el challenge de hoy', 'Sergio del presente', false, 5),
    ];
    return data;
}
