/**
 * Ref) https://www.typescriptlang.org/docs/handbook/interfaces.html#excess-property-checks
 */

type Excess = {
  x: number,
  [key: string]: any,
}

const o: Excess = {x: 1};
o.y = 'a';
o.z = null;

// NG
//o.x = 'a';

export {}
