import React, { Component, Fragment } from 'react';
import ToDo from './component/todo/todo';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Beth+Ellen&display=swap');
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }
    *:focus {
        outline: none;
    }
    body {
        background-image: linear-gradient(to right, #6e97f3, #748cf4, #7f80f2, #8c72ee, #9b62e7);
        padding: 50px;
    }
`

class Index extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyles />               
                <ToDo />
            </Fragment>
        )
    }
}

export default Index;