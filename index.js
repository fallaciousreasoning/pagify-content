"use strict";
const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        display: block;
        overflow: auto;
        height: 100%;
    }
</style>
<div class="root"></div>
`;
class PagifyContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const content = template.content.cloneNode(true);
        this.shadowRoot.append(content);
        this.container = this.shadowRoot.querySelector('.root');
        this.update();
    }
    update() {
        this.container.innerHTML = this.render();
    }
    renderStyles() {
        return `
        `;
    }
    render() {
        return `
            <slot></slot>
        `;
    }
}
customElements.define('pagify-content', PagifyContent);
