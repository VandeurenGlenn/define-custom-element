# define-custom-element

A simple helper function for defining customElementsV1.

## Install

```sh
npm install define-custom-element --save
```
or
```sh
yarn add define-custom-element
```

## Usage

```ts
import define from 'define-custom-element';

define(class SomeElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    ...
  }
});
```
