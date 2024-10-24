/**
 * 클래스
 */

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요");
  }
}

let studentB = {
  name: "홍길동",
  grade: "B2",
  age: 27,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  }
}

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 매서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 => 인스턴스
// 스튜던트 인스턴스
let studentZ = new Student("이정환", "A+", 27);
console.log(studentZ);
studentZ.study();
studentZ.introduce();

class StudenDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  // 매서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그램함`);
  }
}
const studentDeveloper = new StudenDeveloper('이정환', 'B+', 27, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programming();
