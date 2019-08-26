
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
