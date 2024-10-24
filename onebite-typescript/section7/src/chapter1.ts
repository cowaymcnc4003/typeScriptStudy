/**
 * 첫번째 사례
 */

function swap<C, U, A>(a: C, b: U, c: C, d: C, e: A) {
  return [b, a];
}

const [a, b] = swap("1", 2, "2", "2", false);


/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("123456");

let var3 = getLength({ length: 10 });

// let var4 = getLength(10); // length 프로퍼티스 필요