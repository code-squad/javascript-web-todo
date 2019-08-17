
## 설계 

### 1. 컴포넌트 
1. 전체를 감쌀 컴포넌트 :TodoTable
2. 할일 입력하는 컴포넌트 : inputBar 
3. 할일 목록을 감싸는 컴포넌트 : outputTable ( 해야할일 , 접기는 짜잘해서 포함시켜버림) 
4. 할일 목록  컴포넌트 : outputRow 

### 2. 구조 
- TodoTable
    - ResultBar
        -RadiusDisplayer (todos)
        -RadiusDisplayer (done)
    - InputBar
    - OutputTable
        - OutputRow
