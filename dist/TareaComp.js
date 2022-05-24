import { Component } from './componentes/component.js';
export class TareaComp extends Component {
    tarea;
    template;
    constructor(tarea, selector) {
        super();
        this.tarea = tarea;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let template = `
        <li>${this.tarea.name}->${this.tarea.responsable}</li>             
`;
        return template;
    }
}
