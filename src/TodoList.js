export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: true
        }
    }
    componentDidMount(){
        this.createList(this.props);
    }
    createList(props){
        if(toString.call(props.list) !== '[object Array]') return;
        const listItems = props.list.map(item => 
            <li key={item.id} onClick={this.removeItem}>
                {item.title}
                <button type="button">X</button>
            </li>
        )
        return listItems;
    }
    
}