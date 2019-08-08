import React, { Component, Fragment } from 'react';
import ToDo from './todo';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
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