import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List,Icon } from 'antd';
import store from './store/index'
import * as actionCreator from './store/actionCreator'

class AntdTodoList extends Component {

    constructor(props){
        super(props);

        this.state=store.getState();
        
        // this.handleInputChange=this.handleInputChange.bind(this);
        // this.handleBtnClick=this.handleBtnClick.bind(this);

        this.handleStoreChange=this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <div style={{margin:'20px auto',maxWidth:'600px'}}>
                <div style={{padding:'20px 0px',textAlign:'center'}}>
                    <h2>TodoList(with Antd UI):</h2>
                    <Input 
                        placeholder='Enter todo item here' 
                        style={{width:'500px',marginRight:'10px'}}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>Submit</Button>
                </div>
                <List 
                  bordered 
                  dataSource={this.state.list}
                  renderItem={(item,index) => (
                    <List.Item 
                        actions={[
                            <Icon type="delete" theme="filled" 
                            onClick={this.handleItemDelete.bind(this,index)}/>
                        ]}
                    >
                        {item}
                    </List.Item>
                  )}
                />
            </div>
        )
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

export default AntdTodoList;

