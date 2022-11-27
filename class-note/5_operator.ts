// function logMessage(value: string) {
//   console.log(value);
// }

// logMessage('heelo');

type stringOrNumber = string | number;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value;
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  //   someone.name; // 공통 속성만 제공
  // someone.skill // 접근 불가
  // someone.age // 접근 불가 - type guard 이용
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

// &: intersection type - 합집합 느낌
function askSomeone2(someone: Developer & Person) {
  //   someone.name;
  //   someone.skill;
  //   someone.age;
}
// askSomeone2({ name: '디벨로퍼', skill: '웹 개발' }); // name, skill, age를 다 포함한 객체를 넘겨야 함
// askSomeone2({ name: '캡틴', age: 100 });

let seho: string | number | boolean;
let capt: string & number & boolean; // never
