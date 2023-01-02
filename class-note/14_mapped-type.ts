type Heros = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heros]: number };

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};

// for in 반복문 코드
// const arr = ['a', 'b', 'c'];
// for (let key in arr) {
//   console.log(arr[key]);
// }
