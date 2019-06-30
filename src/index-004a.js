import { add } from './lib/lib1';
import moment from 'moment';

/**
 * This demonstrates that by adding optimization.splitChunks.chunks config in
 * the webpack, it will split the momentjs file as a separate chunk to prevent
 * duplication.
 *
 * Reference: https://webpack.js.org/guides/code-splitting/
 */

console.log('### 1', add(1, 2));
