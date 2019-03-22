This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

### 개발환경

create react app을 사용하여 개발 환경을 구성하였습니다. webpack은 기존의 react-scripts를 사용하였고 추가적으로 styled component를 사용하기 위한 모듈을 추가하였습니다. 

## 설계

Component는 세가지 있습니다. 
- TodoApp: todo list를 state로 관리하여 해당 데이터를 직접 다루는 모든 작업이 이 컴포넌트에서 이루어집니다.
- TodoInput: todo list에 새로운 item을 추가하는 작업을 위한 메서드들이 있습니다. 데이터를 직접 조작하는 것 외에 정보를 입력하고 비교하는 작업들이 포함되어있고 의존 되어있는 TodoApp에 메서드를 호출하여 데이터를 조작합니다.
- TodoList: TodoApp으로부터 props로 todo list를 받고 엘리먼트를 추가하는 작업을 합니다. 추가적으로 영역을 토글하는 기능과 list item을 제거하는 로직이 있습니다. 

### 데이터 처리

fetch Api를 이용하여 데이터를 가져왔고 에러 핸들링을 하였습니다. 

### Style 적용

styled component를 사용하여 스타일 작업을 진행하였습니다. 설계가 컴포넌트 단위로 되어있고 그 컴포넌트에 필요한 스타일을 같은 장소에서 작성한다는 것이 좋았습니다. 컴포넌트 단위의 응집성이 높아진 것처럼 느껴졌습니다. 다만 코드의 수가 길어진다는 점이 조금 불편했습니다. 
