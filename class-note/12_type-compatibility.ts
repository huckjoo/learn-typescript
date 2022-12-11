{
  // 인터페이스
  interface Developer {
    name: string;
    skill: string;
  }

  interface Person {
    name: string;
  }

  let developer: Developer;
  let person: Person;
  //   developer = person
  //   person = developer;

  // 함수
  let add = function (a: number) {
    // ...
  };

  let sum = function (a: number, b: number) {
    // ...
  };

  sum = add; // 가능
  // add = sum; // 불가능

  // 제네릭
  interface Empty<T> {
    // ...
  }

  let empty1: Empty<string>;
  let empty2: Empty<number>;
  empty1 = empty2;
  empty2 = empty1;

  interface NotEmpty<T> {
    data: T;
  }

  let notEmpty1: NotEmpty<string>;
  let notEmpty2: NotEmpty<number>;

  notEmpty1 = notEmpty2; // 구조적 타입이 달라져서 Type error
}
