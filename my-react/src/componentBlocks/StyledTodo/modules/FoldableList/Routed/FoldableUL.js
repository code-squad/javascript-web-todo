import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FoldableUL from '../FoldableUL';

function RoutedFoldableUL(props) {
  const {
    todoData, ItemTemplate, handleDelete, handleStatusToggle, updateFn,
  } = props;
  const filterItem = (status, item) => item.status === status;
  const createItem = item => (
    <ItemTemplate
      key={item.id}
      todoTitle={item.title}
      status={item.status}
      onDelete={() => handleDelete(item.id)}
      onStatusToggle={() => handleStatusToggle(item.id, item.status)}
      titleUpdator={newTitle => updateFn({ itemID: item.id, title: newTitle })}
    />
  );

  return (
    <Switch>
      <Route path="/:status">
        {({ match }) => {
          const givenStatus = match.params.status ? match.params.status.toUpperCase() : null;
          const filterItemWithBound = filterItem.bind(null, givenStatus);
          return (
            <FoldableUL {...props}>
              {todoData.filter(filterItemWithBound).map(createItem)}
            </FoldableUL>
          );
        }}
      </Route>
      <Route exact path="/">
        <FoldableUL {...props}>{todoData.map(createItem)}</FoldableUL>
      </Route>
    </Switch>
  );
}

export default RoutedFoldableUL;
