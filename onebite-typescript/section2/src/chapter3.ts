// object
let user: {
  id?: number; // optional property
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let config: {
  readonly apiKey: string; // 읽기 전용
} = {
  apiKey: 'MY API KEY',
};

// config.apiKey = "hacked";

