/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoreAnimal = `${Color}-${Animal}`;

// const coloreAnimal: ColoreAnimal = ''