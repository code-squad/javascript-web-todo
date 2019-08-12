import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import { hot } from 'react-hot-loader/root';

const Hot = hot(Index);

ReactDOM.render(<Hot />, document.querySelector('#root'));