import { add } from './lib/lib1';
import moment from 'moment';

/**
 * https://webpack.js.org/guides/tree-shaking/
 *
 * When you build this, the output includes the entire momentjs lib, which demonstrates
 * that tree-shaking did not work on momentjs even though it was unused.
 *
 * Tree-shaking relies on ES2015 static structure (import / export).
 * MomentJS uses commonJS, which is dynamic structure (require), so tree-shaking will not work.
 *
 * Read up more on tree-shaking:
 * https://bitsofco.de/what-is-tree-shaking/
 *
 * Read this page for momentjs study and alternatives:
 * https://github.com/you-dont-need/You-Dont-Need-Momentjs
 */

console.log(add(1, 2));
