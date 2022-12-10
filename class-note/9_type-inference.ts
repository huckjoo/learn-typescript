// 타입 추론 기본 1
const a = 'abc';

function getB(b = 10) {
  const c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// const shoppingItem: Dropdown<string> = {
//   value: 'hi',
//   title: 'me',
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

const detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'A',
};

// Best Common Type - 가장 근접한 타입을 추론
const arr = [1, 2, true, 'string'];
