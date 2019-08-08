import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './todo';
import { hot } from 'react-hot-loader/root';

const Hot = hot(ToDo);

ReactDOM.render(<Hot />, document.querySelector('#root'));