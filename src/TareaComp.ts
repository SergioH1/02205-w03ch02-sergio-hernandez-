import { Component } from './componentes/component.js';
import { iComponente } from './componentes/interfaces/icomponent.js';
import { Tarea } from './Tarea.js';

export class TareaComp extends Component implements iComponente {
    template: string;
    constructor(public tarea: Tarea, selector: string) {
        super();
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
