import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { hot } from 'react-hot-loader/root'

const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector('#root'));