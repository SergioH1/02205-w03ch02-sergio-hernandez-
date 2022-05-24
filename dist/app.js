import { crearTareas } from './Lista.js';
import { TareaComp } from './TareaComp.js';
function app() {
    const tareas = crearTareas();
    let selector = '.chores-list';
    tareas.forEach((item) => new TareaComp(item, selector));
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
