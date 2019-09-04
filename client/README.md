
## 1. 설계 

### 1.1 컴포넌트 
1. 전체를 감쌀 컴포넌트 :TodoApp
2. 결과를 출력하는 컴포넌트 : ResultBar 
3. 할일 입력하는 컴포넌트 : inputBar 
4. 할일 목록을 감싸는 컴포넌트 : TodoList ( 해야할일 , 접기는 짜잘해서 포함시켜버림) 
5. 할일 목록  컴포넌트 : TodoItem 

### 1.2 구조 
- TodoApp
    - ResultBar
        -RadiusDisplayer (todos)
        -RadiusDisplayer (done)
    - InputBar
    - TodoList
        - TodoItem

## 2. 코드개선
### 2.1 Proptypes 를 어디에 사용할것인가
- Todoitem 
- StateProvider 

### 2.2 최적화
#### Profiler 탭 분석
- [1->2] todos fetch해올때 inputBar 리랜더 막기
- [2->3] isLoading 변경될때 resultBar , InputBar 리랜더 막기
- [6->7] InputBar의 "ADD_TODO"로 인해 todos 추가될때 TodoItem 리랜더 막기, InputBar 리랜더 막기(불가능) 

#### contextAPI 쪽 코드변경 
- TodoState.js의 Provider의 value 3개 한꺼번에 넣지말고 나눠서 넣어
isLoading, todos, dispatch 사용하면 리랜더링 방지.
- Provider를 2개로 todos,dispatch묶어서 넘겼을땐 todos가 바뀌어도 dispatch만
사용하는 resultBar가 리랜더가 일어남. 
- context 쓰면서 리랜더 막는 방법
https://github.com/facebook/react/issues/15156 컨텍스트 쪼개기
(useMemo , useCallback 안써도 이걸로 리랜더 막을 수 있음 ) 

#### useCallback, useMemo
- StateProvider 는 isLoading , todos를 가져올때 값이 바뀌지만 InputBar은 리랜더 막을 수 있고 dispatch에 useCallback , todos 에 useMemo를 사용하면된다.-> disaptch에 useCallback,useMemo사용할 수 없음. (hook안에 hook사용하게 됨)
- https://github.com/facebook/react/issues/15351 props에만 적용되는게 아님


### 2.3 아쉬운 점
- Profiler 탭에서 무엇에 의해 render 되는지 알면 더 좋을듯.. 몰라서 console찍어서 확인함
- 과제가 useCallback과 useMemo를 사용하기에 적절한 사례가 아니었던것같음.
- Profiler 탭에서 reload하고 재실행할때마다 시간이 다르게 측정되어 최적화가 됬는지 확인하기 어려웠음.