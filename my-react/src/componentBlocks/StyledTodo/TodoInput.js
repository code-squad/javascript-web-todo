import React from 'react';
import 'styled-components/macro'; // CSS prop support
import styled from 'styled-components';
import theme from '../themePalette';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.state = {
      value: '',
      wrongInput: false,
      placeholder: props.placeholder,
    };
  }

  handleInputChange(evt) {
    const defaultSetup = { placeholder: this.props.placeholder, wrongInput: false };

    this.setState({ value: evt.target.value, ...defaultSetup });
  }

  handleInputSubmit(evt) {
    evt.preventDefault();
    const { value } = this.state;

    // Alert user on form submit without input
    if (value === '') {
      this.setState({ placeholder: "Sorry, we can't create empty todo", wrongInput: true });
      return;
    }
    const { onSubmit } = this.props;
    onSubmit(value);

    this.setState({ value: '' });
  }

  render() {
    const { className } = this.props;
    return (
      <form className={className} onSubmit={this.handleInputSubmit}>
        <input
          css={this.state.wrongInput ? 'box-shadow: 0px 0px 0px 5px #f66;' : null}
          placeholder={this.state.placeholder}
          type="text"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

const StyledTodoInput = styled(TodoInput)`
  display: grid;
  grid-template-columns: auto 20%;
  grid-template-rows: 10% auto 10%;
  column-gap: 1rem;

  input[type='text'] {
    grid-column: 1;
    grid-row: 2;
    font-size: 2rem;
    padding-left: 2rem;
    border: unset;
    outline: 1px solid ${theme.color.highlight};
    &::placeholder {
      font-style: italic;
      color: #bbb;
    }
  }
  input[type='submit'] {
    grid-column: 2;
    grid-row: 2;
    background: unset;
    background-color: ${theme.color.highlight};
    border: unset;
    outline: 1px solid ${theme.color.highlightReverse};
    font-size: 2rem;
    color: white;
  }

  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

export default StyledTodoInput;
