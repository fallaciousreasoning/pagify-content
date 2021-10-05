"use strict";
const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        display: block;
        overflow: hidden;
        height: 100%;
    }
</style>
<div class="root"></div>
<div class="placeholder"></div>
`;
class PagifyContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const content = template.content.cloneNode(true);
        this.shadowRoot.append(content);
        this.container = this.shadowRoot.querySelector('.root');
        this.placeholder = this.shadowRoot.querySelector('.placeholder');
        this.update();
    }
    get pageCount() {
        return Math.ceil(this.scrollHeight / this.clientHeight);
    }
    get currentPage() {
        const scrollTop = this.scrollTop;
        return Math.ceil(scrollTop / this.clientHeight);
    }
    set currentPage(value) {
        this.scrollTop = this.clientHeight * value;
    }
    hasNext() { return this.currentPage !== this.pageCount - 1; }
    hasPrevious() { return this.currentPage !== 0; }
    previousPage() {
        if (!this.hasPrevious())
            return;
        this.currentPage--;
    }
    nextPage() {
        if (!this.hasNext())
            return;
        this.currentPage++;
    }
    update() {
        this.container.innerHTML = this.render();
        // Wait for the page to layout.
        setTimeout(() => {
            const placeholderHeight = (this.pageCount * this.clientHeight) - this.scrollHeight;
            this.placeholder.setAttribute("style", `height: ${placeholderHeight}px`);
        });
    }
    render() {
        return `
            <slot></slot>
        `;
    }
}
customElements.define('pagify-content', PagifyContent);
