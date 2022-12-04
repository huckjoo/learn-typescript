// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(1);
// logText('하이');
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<number>(1);

// 아래 두 개의 함수처럼 같은 로직인데 타입이 바뀌면서 불필요한 중복이 일어남
// function logText(text: string) {
//   console.log(text);
//   //   text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// union 타입을 쓰면 됨. 그러나 반환값이 string, number의 교집합이 되는 문제
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a'); // a.split('') 이런거 type에러가 뜸
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc'); // string type을 받아 쓴다고 호출할 때 정의함 - 타입이 안 맞으면 에러남
str.split('');
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false }; // <string> 부분이 없으면 에러나서 제네릭 쓰게 만듬

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }

// logTextLength(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('abc');
logTextLength({ length: 10 }); // length 라는 속성만 있다면 받아들여짐.

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');
