
## 설계 

### 1. 컴포넌트 
1. 전체를 감쌀 컴포넌트 :TodoApp
2. 결과를 출력하는 컴포넌트 : ResultBar 
3. 할일 입력하는 컴포넌트 : inputBar 
4. 할일 목록을 감싸는 컴포넌트 : TodoList ( 해야할일 , 접기는 짜잘해서 포함시켜버림) 
5. 할일 목록  컴포넌트 : TodoItem 

### 2. 구조 
- TodoApp
    - ResultBar
        -RadiusDisplayer (todos)
        -RadiusDisplayer (done)
    - InputBar
    - TodoList
        - TodoItem

### 3. 코드개선
1. Proptypes 를 어디에 사용할것인가
- Todoitem 
- StateProvider 

2. 최적화
Profiler 탭 분석
- [1->2] todos fetch해올때 inputBar 리랜더 막기
- [2->3] isLoading 변경될때 resultBar , InputBar 리랜더 막기
- [6->7] InputBar의 "ADD_TODO"로 인해 todos 추가될때 TodoItem 리랜더 막기, InputBar 리랜더 막기 

(Profiler 탭에서 무엇에 의해 render 되는지 알면 더 좋을듯.. 몰라서 console찍어서 확인함)

- TodoState.js의 Provider의 value 3개 한꺼번에 넣지말고 나눠서 넣어
isLoading, todos, display 사용하면 리랜더링 방지.

- StateProvider 는 isLoading , todos를 가져올때 값이 바뀌지만 InputBar은 리랜더 막을 수 있고 dispatch에 useCallback , todos 에 useMemo를 사용하면된다.
- 그리고 React.memo 를 InputBar와 ResultBar에 적용. (React.memo가 props에만 적용되는게 아닌가?-> props에만 적용되는게 아닌것같음 )
--https://github.com/facebook/react/issues/15351 props에만 적용되는게 아닌듯 나와같은 질문한사람이 있음
--context 쓰면서 리랜더 막는 방법
https://github.com/facebook/react/issues/15156 컨텍스트 쪼개기
(useMemo , useCallback 안써도 이걸로 리랜더 막을 수 있을것같기도? ) 