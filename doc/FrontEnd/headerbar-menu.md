# MainHeaderBar-Menu

## 기능

메뉴 목록을 보여준다.   
초기상태는 숨겨져 있는 상태, MenuButton을 클릭하면 메뉴 목록을 보여주도록 한다.  

## 구현 방안

### 방안 1 - 진행중

MainHeaderBar 단계에 위치. MenuButton이 눌린 이벤트 발생 시 MainHeaderBar에서 인지하고 해당 컴포넌트를 생성한다.  
다시한번 메뉴 버튼이 눌리거나 닫히는 것이 적절해보이는 상황이 발생 시 숨김 상태로 전환한다. (or Component 삭제)

### 방안 2

Button단계에서 이벤트 발생 시 아래에 새로운 컴포넌트 생성한다.