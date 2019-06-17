// import { createElement } from 'react';
// import { render } from 'react-dom';

// class Hello extends React.Component {
//   render() {
//     return createElement('div', null, `Hello ${this.props.toWhat}`);
//   }
// }

// render(
//   createElement(Hello, {toWhat: 'World'}, null),
//   document.getElementById('root')
// );

import { add } from './lib/lib1';

// import moment from 'moment';
// import axios from 'axios';

const getComponent = () => {
  return import(/* webpackChunkName: "moment" */ 'moment')
    .then(({ default: _ }) => {
      console.log('### 2 LOADED:', _().format('YYYY MM DD'));
    })
    .catch(err => {
      console.log("### 3 ERROR", err);
    })
}

console.log('### 1a', add(1, 2));

// getComponent();

console.log('### 1b', add(1, 2));