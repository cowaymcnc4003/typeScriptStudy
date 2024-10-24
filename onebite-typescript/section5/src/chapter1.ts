/**
 * 인터페이스의 확장
 */

type Animal = {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: number; // 확장은 원본타입의 서브타입만 가능
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
}

