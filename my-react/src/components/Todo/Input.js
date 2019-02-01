import React from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.state = {
      value: '',
    };
  }

  handleInputChange(evt) {
    this.setState({ value: evt.target.value });
  }

  handleInputSubmit(evt) {
    evt.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const { className, placeholder } = this.props;
    return (
      <form className={className} onSubmit={this.handleInputSubmit}>
        <input
          placeholder={placeholder}
          type="text"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}
