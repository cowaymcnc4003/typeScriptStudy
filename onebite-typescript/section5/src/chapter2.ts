/**
 * 선언 합침
 */

interface Person {
  name: string;
};

interface Person {
  name: string; // 충돌
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: "hello",
} // 모듈 보강

const lib = {
  a: 1,
  b: 2,
  c: "hello",
}