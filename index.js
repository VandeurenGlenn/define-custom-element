const hyphenate = input => input.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
export default (klass) => {
    if (!klass.constructor)
        return console.error('constructor required');
    if (!klass.name)
        return console.error('name required');
    const tagName = hyphenate(klass.name);
    customElements.define(tagName, klass);
    return customElements.get(tagName);
};
