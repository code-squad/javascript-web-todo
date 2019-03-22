import React, { Component } from 'react';

export default class TodoList extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state={
            isOpend: true
        }
    }
    componentDidMount(){
        this.createList(this.props);
    }
    createList({list}){
        if(toString.call(list) !== '[object Array]') return;
        const listItems = list.map(item => 
            <li key={item.id}>
                {item.title}
                <button type="button">X</button>
            </li>
        )
        return listItems;
    }
    toggleList(){
        this.setState(({isOpend}) => ({
            isOpend: isOpend? false: true
        }));
    }
    render(){
        const listItems = this.createList(this.props);
        let toggle = this.state.isOpend;
        return (
            <div>
                <h2>해야할 일들:</h2>
                <button>{toggle?'접기':'열기'} </button>
                <ul> 
                    {listItems}
                </ul>
            </div>
        );
    }
}