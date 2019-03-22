import styled, { css } from 'styled-components'

const styles = {
  StyledDivTodoMain: styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
    width: 550px;
    height: 380px; 
    border: lightgoldenrodyellow solid 4px; 
`,

  StyledDiv: styled.div`
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
    color: palevioletred;
    background: papayawhip;
    width: 500px;
    height: 50px; 
`,

  StyledButton: styled.button`
    border-radius: 3px;
    color: orangered;
    background: lightskyblue;
    padding: 3px 10px 3px 10px;
`,

  StyledButtonRemove: styled.button`
    margin-left: 10px;
    width:19px;
    height:19px;
    background: lightsteelblue;
    border-radius: 100px;
    color: white;
    font-size:10px;
`,

  StyledDivListView: styled.div`
    height: 300px;
    width: 500px;
    background: papayawhip;;
`,

  StyledDivTodoList: styled.div`
    color: lightsalmon;
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