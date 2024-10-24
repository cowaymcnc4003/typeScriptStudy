/**
 * keyof 연산자
 */

type Person = typeof person;

function getPropertykey(person: Person, key: keyof typeof person) { // 프로펄티스 키들 union 타입으로 추출
  return person[key];
}

const person = {
  name: "이정환",
  age: 27,
}

getPropertykey(person, "name");


