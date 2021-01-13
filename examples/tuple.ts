/*
 * Ref) https://www.typescriptlang.org/docs/handbook/basic-types.html の "Tuple" セクション
 */

//
// 以下ドキュメントから
//

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

export {}
