import React,{ Component } from 'react';
import store from './store/index'
import * as actionCreator from './store/actionCreator'
import TodoListUI from './TodoListUI'

// import axios from 'axios'

class TodoListContainer extends Component {

    constructor(props){
        super(props);

        this.state=store.getState();
        
        // this.handleInputChange=this.handleInputChange.bind(this);
        // this.handleBtnClick=this.handleBtnClick.bind(this);
        // this.handleItemDelete=this.handleItemDelete.bind(this);

        this.handleStoreChange=this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return <TodoListUI 
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    list={this.state.list}
                    handleItemDelete={this.handleItemDelete}
                />
    }

    componentDidMount(){
        // method1: 不使用中间件
        // axios.get('/todoItems.json').then((response)=>{
        //     const data = response.data;
        //     const action = actionCreator.initialListItemAction(data);
        //     store.dispatch(action)

        // });

        // method2: 使用redux-thunk时：
        // const action = actionCreator.getListItems();
        // store.dispatch(action)

        // method3: 使用redux-saga时：
        const action = actionCreator.getSagaListItems();
        store.dispatch(action)
    }

    handleInputChange(e){
        // console.log(e.target.value)
        
        // const action = {
        //     type: 'change_input_value',
        //     value: e.target.value
        // }

        const action = actionCreator.changeInputValueAction(e.target.value) 
        store.dispatch(action)
    }

    handleBtnClick(){
        // const action = {
        //     type: 'submit_input_value'
        // }
        const action = actionCreator.submitInputValueAction()
        store.dispatch(action)
    }

    handleItemDelete(index){
        // console.log(index)
        
        // const action = {
        //     type: 'delete_list_item',
        //     value: index
        // }
        const action = actionCreator.deleteListItemAction(index)
        store.dispatch(action)
    }

    handleStoreChange(){
        // console.log('store state changed')
        this.setState(store.getState())
    }

}

export default TodoListContainer;

