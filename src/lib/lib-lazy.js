const getComponent = () => {
  return import(/* webpackChunkName: "moment" */ 'moment')
    .then(({ default: _ }) => {
      console.log('### 3 LOADED:', _().format('YYYY MM DD'));
    })
    .catch(err => {
      console.log("### 4 ERROR", err);
    })
}

console.log("This lib was lazy loaded.");

export const doSomething1 = () => { console.log('did something 1'); };

export default {
  doSomething2: () => {
    console.log('did something 2');
    getComponent();
  }
}
