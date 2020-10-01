# MainHeaderBar-MenuContent

## 기능

Menu를 구성하는 한 block을 의미한다.

## 사용 이유

Menu에서 바로 DOM형태의 string을 통해 render하려 했지만 안됐다.

```jsx
render() {
    const list = this.state.MenuList.map(el => {
      let string = `<div><a href="${el.MenuLink}">`;
      string += el;
      string += `</a></div>`;
      return string;
    })

    return (
      <div>
        {list}
      </div>
    );
  }
```

이런 형태로 하려고 했는데 안됐다. 하려면   
`dangerouslysetinnerhtml`  
이런 무시무시한 걸 사용해야 했다.  

## 구현 방안

### 방안 1 - 진행중

부모로부터 props로 MenuName과 MenuLink(어디에 링크 걸지) 를 받아 컴포넌트를 만들어 return 하도록 만든다.
