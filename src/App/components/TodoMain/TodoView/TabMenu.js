import React from 'react';
import { styles } from '../../styles/styles'

const { StyledLink } = styles; 
const { StyledDivTabMenu } = styles; 


const TabMenu = function (props) {
    const tabMenuPath = {
        todoPath: "/list/todo",
        completePath: "/list/complete",
        removedPath: "/list/removed"
    }

    function handleClick(event) {
        console.log(event.target.name);   
    }

    return (
        <StyledDivTabMenu>
                <StyledLink to={tabMenuPath.todoPath} onClick={handleClick} name="todo" >
                    todo
                </StyledLink>
                <StyledLink to={tabMenuPath.completePath} onClick={handleClick} name="complete" >
                    complete
                </StyledLink>
                <StyledLink to={tabMenuPath.removedPath} onClick={handleClick} name="removed" >
                    removed
                </StyledLink>
        </StyledDivTabMenu>
    );
}

export { TabMenu }