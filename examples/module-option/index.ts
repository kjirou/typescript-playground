/*
 * --module es2018 や --module commonjs でどう出力が変わるかをチェックする
 */

import foo from './foo';
import {x, y, Z} from './bar';

export default {
  Z,
  foo,
  x,
  y,
}
