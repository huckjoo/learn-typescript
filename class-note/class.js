function Person(name, age) {
  console.log('함수형으로 생성되었습니다.');
  this.name = name;
  this.age = age;
}
const capt = new Person('캡틴', 100);
console.log(capt);
// 아래와 위 코드는 같은 동작을 합니다.

class Person {
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

const seho = new Person('세호', 30);
console.log(seho);
