// void
// void -> 공허 -> 아무것도 없다.
// void -=> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// let a: void;
// a = 1;
// b = 'hello';
// a = {};
// a = undefined;
// a = null;

// never
// never -> 존재하지 않은
// 불가능한 타입

function func3(): never {
  while (true) { }
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

// let a: never;
// a = 1;
// a = {};
// a = "";
// a = undefined;
// a = null;
// a = anyVar;