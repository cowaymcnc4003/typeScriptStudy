// 타입 별칭

type User = {
  id: number,
  name: string,
  nickname: string,
  birth: string,
  bio: string,
  location: string,
};

function func() {
  type User = {};
}


let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 익덱스 시그니처 
// ex 많은 국가 처리
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
}

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 820,
  // UnitedState: 840,
  // UnitedKingdom: 826,
}