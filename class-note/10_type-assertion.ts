{
  // 타입 단언
  let a;
  a = 20;
  a = 'a';
  const b = a as string;
}

// DOM API 조작
//<div id="app">hi</div>

const div = document.querySelector('div') as HTMLDivElement;
div.innerText;
