/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function funct(value: number | string | Date | null | Person) { // 범용
  if (typeof value === "number") { // 타입 가드
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // 타입 가드 2
    console.log(value.getTime());
  }
  else if (value && "age" in value) { // 타입 가드 3
    console.log(`${value.name}은 ${value.age}살 입니다`);

  }
}