import styled, { css } from 'styled-components'

const styles = {
  StyledDivTodoMain: styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
    width: 550px;
    height: 450px; 
    border: lightgoldenrodyellow solid 4px; 
`,

  StyledDiv: styled.div`
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
    font-size: 20px; 
    color: palevioletred;
    background: papayawhip;
    width: 500px;
    height: 50px; 
`,

  StyledButton: styled.button`
    border-radius: 3px;
    color: white;
    font-size: 15px;
    font-weight: bold; 
    background: lightcoral;
    padding: 3px 10px 3px 10px;
    border: none;
`,

  StyledButtonUpdate: styled.button`
    margin-left: 10px;
    width:19px;
    height:19px;
    background: ${
      props => props.name === "remove" ? "lightsteelblue" : 
              props.name === "done" ? "orange" : null  
    };
    border-radius: 50%;
    color: white;
    font-weight: bold; 
    font-size:5px;
    text-align: center;
    line-height:18px;
    cursor: pointer;
    border: none;
`,

  StyledDivListView: styled.div`
    height: 300px;
    width: 500px;
    background: papayawhip;;
`,

  StyledDivTodoList: styled.div`
    color: lightsalmon;
    font-size: 20px; 
`,

  StyledDivInputSection: styled.div`
    display: block;
    margin-right: 10px;
`,

  StyledInput: styled.input`
    display: inline-block;
    height: 20px;
    margin-left: 10px;
`
}

export { styles }