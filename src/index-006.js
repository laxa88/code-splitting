/**
 * This expands on test 005, and demonstrates lazy loading.
 *
 * Note that lazy-lib.js contains moment.js, which is also lazy-loaded only
 * if doSomething2() was called.
 *
 * Refer:
 * https://webpack.js.org/guides/lazy-loading/
 */

const component = () => {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = 'Hello webpack';

  element.appendChild(br);
  element.appendChild(button);

  button.onclick = () => import(/* webpackChunkName: "lib-lazy" */ './lib/lib-lazy').then(lib => {
    lib.doSomething1();
    lib.default.doSomething2();
  });

  return element;
}

document.body.appendChild(component());
