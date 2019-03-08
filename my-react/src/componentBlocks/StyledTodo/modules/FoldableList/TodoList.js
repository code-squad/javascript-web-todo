import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import FoldBtn from './FoldBtn';
import StatusCounterBoard from './StatusCounterBoard';

import RoutedHeaderTitle from './Routed/HeaderTitle';
import RoutedFoldableUL from './Routed/FoldableUL';
import RouterLinks from './Routed/RouterLinks';

class FoldableList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFold = this.toggleFold.bind(this);
    this.handleItemStatusToggle = this.handleItemStatusToggle.bind(this);
    this.state = {
      folded: false,
    };
  }

  toggleFold() {
    this.setState(prevState => ({ folded: !prevState.folded }));
  }

  handleItemDelete(targetId) {
    const { onDelClick } = this.props;

    onDelClick(targetId);
  }

  handleItemStatusToggle(targetId, status) {
    const { updateFn } = this.props;
    const newStatus = status === 'DONE' ? 'TODO' : 'DONE';

    updateFn({
      itemID: targetId,
      status: newStatus,
    });
  }

  render() {
    const { folded } = this.state;
    const {
      todoData, className, ItemTemplate, updateFn,
    } = this.props;

    return (
      <Router basename="/javascript-web-todo">
        <section className={className}>
          <header className="listHeader">
            <div className="titleAndCount">
              <RoutedHeaderTitle />
              <div className="statusCountWrapper">
                <StatusCounterBoard todoData={todoData} className="statusCount" />
              </div>
            </div>
            <FoldBtn folded={folded} className="foldBtn" onClick={this.toggleFold} />
          </header>
          <RoutedFoldableUL
            folded={folded}
            className="foldableUL"
            todoData={todoData}
            ItemTemplate={ItemTemplate}
            updateFn={updateFn}
            handleDelete={this.handleItemDelete.bind(this)}
            handleStatusToggle={this.handleItemStatusToggle.bind(this)}
          />
          <RouterLinks className="statusFilter" />
        </section>
      </Router>
    );
  }
}

FoldableList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string.isRequired,
  onDelClick: PropTypes.func.isRequired,
  updateFn: PropTypes.func.isRequired,
  ItemTemplate: PropTypes.oneOfType([
    PropTypes.shape({ styledComponentId: PropTypes.string }).isRequired, // StyledComponent
    PropTypes.node,
  ]).isRequired,
};

const StyledTodoList = styled(FoldableList)`
  display: grid;
  grid-template-columns: 85% 15%;
  grid-template-rows: 10% 10% 80%;

  grid-column: 2 / 3;
  grid-row: 4;

  font-size: 2rem;
  max-height: 32rem;
  overflow: hidden;

  .listHeader {
    grid-column: 1 / -1;
    grid-row: 1;

    display: grid;
    grid-template-columns: 70% 15% 15%;
    .titleAndCount {
      grid-column: 1;

      .title,
      .statusCountWrapper {
        display: inline-grid;
        height: 3.6rem;
        vertical-align: bottom;
      }

      .statusCountWrapper {
        margin-left: 1.5rem;
      }
      .statusCountWrapper > .statusCount {
        display: grid;
        align-items: center;
        width: 16rem;
      }
    }
    .foldBtn {
      grid-column: 3;
    }
  }

  .foldableUL {
    grid-row: 3;
    grid-column: 1 / 3;

    margin-top: 1rem;
    border-bottom: 1px dotted black;
    width: 103%;
    overflow-y: scroll;
  }

  .statusFilter {
    grid-row: 2;
    grid-column: 1;

    display: flex;
    padding-left: 3.5rem;

    list-style: none;

    li {
      margin-right: 1rem;

      a {
        text-decoration: none;
        vertical-align: middle;
        line-height: 3.2rem;

        padding: 0 0.5rem;

        color: #0aa;
        background-color: white;

        ::before {
          content: ' || ';
        }

        &.selected {
          color: white;
          background-color: #0aa;
        }
      }
    }
  }
`;

export default StyledTodoList;
