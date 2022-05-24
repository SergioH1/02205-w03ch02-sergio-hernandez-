import { crearTareas } from "./Lista";

function app() {
    const tareas = crearTareas();
    let selector = '.characters-list';
    tareas.forEach((item) => new ());
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})()
