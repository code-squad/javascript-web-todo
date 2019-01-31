import React from 'react';

export default function TodoList(props) {
  return {
    componentDidUpdate(prevProps) {
      if (this.props.todoData !== prevProps.todoData) {
        this.render();
      }
    },

    render() {
      if (!this.props.todoData[0]) {
        return (
          <div css="place-self: center;" className={this.props.className}>
            Loading...
          </div>
        );
      }

      return (
        <div className={this.props.className}>
          <h2>Things to Do</h2>
          <button type="button" className="foldBtn" onClick={this.props.handleClick}>
            {this.props.folded ? 'Unfold' : 'Fold'}
          </button>
          <ul>
            {this.props.todoData.map((item, idx) => (
              <props.ItemTemplate key={item.id ? item.id : idx} todoTitle={item.title} />
            ))}
          </ul>
        </div>
      );
    },
  };
}
