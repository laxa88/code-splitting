import { add } from './lib/lib1';
import moment from 'moment';

/**
 * Note that index-003a.js and index-003b.js both import momentjs, but both
 * chunked builds include momentjs, which is unnecessarily duplicated.
 *
 * This demonstrates that when we use webpack to manually split code by chunks,
 * it does not prevent duplication.
 *
 * Reference: https://webpack.js.org/guides/code-splitting/
 */

console.log('### 1', add(1, 2));
