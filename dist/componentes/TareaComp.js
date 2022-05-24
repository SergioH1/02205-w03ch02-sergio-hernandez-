import { Component } from './component.js';
export class TareaComp extends Component {
    constructor() { }
    createTemplate() {
        let template = `
        <li>${this.tarea.name}</li>             
`;
        return template;
    }
}
