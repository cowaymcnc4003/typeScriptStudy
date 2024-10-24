/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1 단꼐
// Exclude<string, boolean> |
// Exclude<booleand, boolean>

// 2 단꼐
// string |
// never

// 최종적으로
// string

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 변환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type RetrunA = ReturnType<typeof funcA>;
type RetrunB = ReturnType<typeof funcB>;