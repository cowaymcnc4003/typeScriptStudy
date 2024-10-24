// any
// 특정 변수의 탕비을 우리가 확실히 모를떄
let anyVar: any = 10; // 다 가능
anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => { };

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown

let unknownVar: unknown; // 활용 불가

unknownVar = "";
unknownVar = 1;
unknownVar = () => { };

if (typeof unknownVar === "number") { // 타입 정제
  num = unknownVar;
}


