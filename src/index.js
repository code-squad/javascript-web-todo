import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

const Hot = hot(Root);

ReactDOM.render(<Hot />, document.querySelector('#root'));