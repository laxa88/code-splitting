import { add } from './lib/lib1';

/**
 * This demonstrates dynamic import (momentjs).
 *
 * Note console.log sequence (1, 2, 3) when running in webpack-dev-server.
 *
 * Refer:
 * https://webpack.js.org/guides/code-splitting/
 */

const getComponent = () => {
  return import(/* webpackChunkName: "moment" */ 'moment')
    .then(({ default: _ }) => {
      console.log('### 3 LOADED:', _().format('YYYY MM DD'));
    })
    .catch(err => {
      console.log("### 4 ERROR", err);
    })
}

console.log('### 1', add(1, 2));

getComponent();

console.log('### 2', add(1, 2));