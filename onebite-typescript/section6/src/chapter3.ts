/**
 * 인터페이스와 클래스
 */

interface Characterinterfase {
  name: string;
  moveSpeed: number;
  move(): void;
} // 인터페이스는 상항 퍼블릭

interface Characterinterfase {
  hiting: number;
}

class Character implements Characterinterfase {
  constructor(public name: string, public moveSpeed: number, private extra: string, public hiting: number) { }


  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}