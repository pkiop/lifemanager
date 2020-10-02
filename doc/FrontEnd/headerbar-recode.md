### 메뉴 접혔을 때 내용이 그대로 있는 문제

![201002%20TIL%207248e4274deb46be8a017f921183adca/menuExist.gif](./image/header-recode/menuExist.gif)

### 해결 방안 1 - 동작시간뒤에 component안보이게 하기

동작이 0.5s동안 일어나는데 css로는 transition이 끝났을 때 어떤 동작을 하게 하기가 힘듬

js단에서 0.5s뒤 disable시키는 class추가하도록 하면 될듯

→ 한계 : 접히고 있는 동안에는 보이게 된다.