import React from 'react';
import { styles } from '../../styles/styles'

const { StyledLink } = styles;
const { StyledDivTabMenu } = styles;


const TodoTabMenu = function ({ match }) {
    const tabMenuPath = {
        todoPath: "/list/todo",
        completePath: "/list/complete",
        removedPath: "/list/removed"
    }

    return (
        <StyledDivTabMenu>
            <StyledLink to={tabMenuPath.todoPath} background={match.params.id === "todo" ? "lightsalmon" : "lightsteelblue"} >
                todo
            </StyledLink>
            <StyledLink to={tabMenuPath.completePath} background={match.params.id === "complete" ? "lightsalmon" : "lightsteelblue"} >
                complete
            </StyledLink>
            <StyledLink to={tabMenuPath.removedPath} background={match.params.id === "removed" ? "lightsalmon" : "lightsteelblue"} >
                removed
            </StyledLink>
        </StyledDivTabMenu>
    );
}

export { TodoTabMenu }