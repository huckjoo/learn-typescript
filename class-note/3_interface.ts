interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
  age: 20,
  name: 'seho',
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 101,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 'one';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
// interface Person {
//   name: string;
//   age: number;
// }

interface Developer extends Person {
  language: string;
}

const dcron: Developer = {
  language: 'javascript',
  name: 'hyukjoo',
  age: 20,
};
