export default class Element {
    constructor(tag) {
        if (tag instanceof HTMLElement) {
            this.node = tag;
        } else {
            this.node = document.createElement(tag);
        }
    }
    appendTo(parent) {
        parent.node.appendChild(this.node);
        return this;
    }
    append(el) {
        this.node.appendChild(el.node);
        return this;
    }
    addClass(className) {
        this.node.classList.add(className);
        return this;
    }
    removeClass(className) {
        this.node.classList.remove(className);
        return this;
    }
    toggleClass(className) {
        this.node.classList.toggle(className);
        return this;
    }
    isContainClass(className) {
        return this.node.classList.contains(className);
    }

    getData(key) {
        return this.node.dataset[key];
    }
    setData(key, value) {
        this.node.dataset[key] = value;
        return this;
    }
    innerHTML(str) {
        this.node.innerHTML = str;
        return this;
    }
    innerText(str) {
        this.node.innerText = str;
        return this;
    }
    on(evName, callbackFn) {
        this.node.addEventListener(evName, callbackFn);
        return this;
    }
    off(evName, callbackFn) {
        this.node.removeEventListenr(evName, callbackFn);
        return this;
    }
    src(url) {
        this.node.src = url;
        return this;
    }
    remove() {
        this.node.remove();
        return this;
    }
    select(selector) {
        return new Element(this.node.querySelector(selector));
    }
    selectAll(selector) {
        return [...this.node.querySelectorAll(selector)].map(el => new Element(el));
    }
}

export const createElement = tagName => {
    return new Element(tagName);
};
