import React from 'react';
import { ListView } from './ListView'

function CompleteListView(props) {
    const filteredList = props.filterByStatus(props.todoStatus);
    return <ListView filteredList={filteredList} />
}

export { CompleteListView };
