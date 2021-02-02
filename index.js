'use strict';

var hyphenate = string => {
  const firstLetter = string.charAt(0);
  string = string.replace(firstLetter, firstLetter.toLowerCase());
  const uppercases = string.match(/([A-Z])/g);

 for (const uppercase of uppercases) {
   string = string.replace(uppercase, `-${uppercase.toLowerCase()}`);
 }
 return string
};

const shouldDefine = name => customElements.get(name) ? false : true;

var index = klass => {
  if (!klass) return console.error('class undefined');
  if (!klass.constructor) return console.error('constructor required');
  if (!klass.name) return console.error('class name required');

  const name = hyphenate(klass.name);
  return shouldDefine(name) ? customElements.define(name, klass) : '';
};

module.exports = index;
