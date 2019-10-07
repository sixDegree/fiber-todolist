import React,{Component} from 'react'
import 'antd/dist/antd.css';
import { Input,Button,List,Icon } from 'antd';

import {connect} from 'react-redux'
import * as actionCreator from './store/actionCreator'

// 1. UI组件：

const TodoListRd = (props)=>{
    const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = props;
    return (
        <div style={{margin:'20px auto',maxWidth:'600px'}}>
            <div style={{padding:'20px 0px',textAlign:'center'}}>
                <h2>TodoList(with Antd UI):</h2>
                <Input 
                    placeholder='Enter todo item here' 
                    style={{width:'500px',marginRight:'10px'}}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <Button type="primary" onClick={handleBtnClick}>Submit</Button>
            </div>
            <List 
              bordered 
              dataSource={list}
              renderItem={(item,index) => (
                <List.Item 
                    actions={[
                        <Icon 
                            type="delete" theme="filled" 
                            onClick={()=>{
                                // console.log("del:",index,list[index])
                                handleItemDelete(index)
                            }}
                        />
                    ]}
                >
                    {item}
                </List.Item>
              )}
            />
        </div>
    )
}

// class TodoListRd extends Component{
//     render(){
//         const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = this.props;
//         return (
//             <div style={{margin:'20px auto',maxWidth:'600px'}}>
//                 <div style={{padding:'20px 0px',textAlign:'center'}}>
//                     <h2>TodoList(with Antd UI):</h2>
//                     <Input 
//                         placeholder='Enter todo item here' 
//                         style={{width:'500px',marginRight:'10px'}}
//                         value={inputValue}
//                         onChange={handleInputChange}
//                     />
//                     <Button type="primary" onClick={handleBtnClick}>Submit</Button>
//                 </div>
//                 <List 
//                   bordered 
//                   dataSource={list}
//                   renderItem={(item,index) => (
//                     <List.Item 
//                         actions={[
//                             <Icon 
//                                 type="delete" theme="filled" 
//                                 onClick={()=>{
//                                     // console.log("del:",index,list[index])
//                                     handleItemDelete(index)
//                                 }}
//                             />
//                         ]}
//                     >
//                         {item}
//                     </List.Item>
//                   )}
//                 />
//             </div>
//         )
//     }
// }


// 2. 定义连接规则

// 规则1: Map store state to Component props (将store的state映射给组件的props)
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

// 规则2: Map store dispatch to Component props (将store的dispatch方法挂载给组件的props)
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e){
            const action = actionCreator.changeInputValueAction(e.target.value) 
            dispatch(action)
        },
        handleBtnClick(){
            const action = actionCreator.submitInputValueAction()
            dispatch(action)
        },
        handleItemDelete(index){
            const action = actionCreator.deleteListItemAction(index)
            dispatch(action)
        }
    }
}

// 3. connect将UI组件与业务逻辑相结合，返回一个Container组件
export default connect(mapStateToProps,mapDispatchToProps)(TodoListRd)


