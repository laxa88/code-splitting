import { add } from './lib/lib1';
import { square } from './lib/lib2';

// webpack should tree-shake unused "lib2".
// If it doesn't work, make sure webpack config mode is "production".

console.log(add(1, 2));