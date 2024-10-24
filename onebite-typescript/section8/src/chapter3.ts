/**
 * 맵드 타입 type에서만 사용
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in 'id' | "name" | "age"]?: User[key];
}

type BooleanUser = {
  [key in keyof User]: boolean;
}


// 한명의 유저 정보를 불러오는 기능

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

const user = fetchUser();
// user.id = 123;

function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "이정환",
  age: 25,
})