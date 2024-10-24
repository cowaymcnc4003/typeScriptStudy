/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

class Employee {
  //필드
  // private name: string; // 클래스 내부 파생에서도 불가
  // protected age: number; // 클래스 내부 파생 클래스에서 가능
  // position: string; // 제한없음

  // 생성자

  constructor(private name: string, protected age: number, public position: string) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`알함 ${this.name}`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //매서드

  func() {
    // this.name;
    this.age;
  }
}


const employee = new Employee("이정환", 27, "developer");
// employee.age = 30;
employee.position = "디자이너";
console.log(employee);

