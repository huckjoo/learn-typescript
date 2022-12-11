interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

const tony = introduce();
// console.log(tony.skill); - 안됨
// 아래 예시는 가독성이 좋지 않음
if ((tony as Developer).skill) {
  const skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  const age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill;
} else {
  tony.age;
}
