import hyphenate from 'hyphenate';

const shouldDefine = name => customElements.get(name) ? false : true;

export default klass => {
  if (!klass) return console.error('class undefined');
  if (!klass.constructor) return console.error('constructor required');
  if (!klass.name) return console.error('class name required');

  const name = hyphenate(klass.name, { lowercase: true });
  return shouldDefine(name) ? customElements.define(name, klass) : '';
}
