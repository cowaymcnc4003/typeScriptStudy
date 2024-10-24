/**
 * 제네릭
 */

// 제네릭 함수 모든 타입 두루 범용 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);
// num.toUpperCase();
if (typeof num === "number") {
  num.toFixed(0);
}

let bool = func(true);
let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);


// let arr = func([1, 2, 3] as [number, number, number]);
