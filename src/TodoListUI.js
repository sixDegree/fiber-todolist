// import React,{ Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List,Icon } from 'antd';

const TodoListUI = (props)=>{
    return (
        <div style={{margin:'20px auto',maxWidth:'600px'}}>
            <div style={{padding:'20px 0px',textAlign:'center'}}>
                <h2>TodoList(with Antd UI):</h2>
                <Input 
                    placeholder='Enter todo item here' 
                    style={{width:'500px',marginRight:'10px'}}
                    value={props.inputValue}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
            </div>
            <List 
              bordered 
              dataSource={props.list}
              renderItem={(item,index) => (
                <List.Item 
                    actions={[
                        <Icon 
                            type="delete" theme="filled" 
                            onClick={()=>{
                                // console.log("del:",index,props.list[index])
                                props.handleItemDelete(index)
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

export default TodoListUI;

// class TodoListUI extends Component{
//     render(){
//         return (
//             <div style={{margin:'20px auto',maxWidth:'600px'}}>
//                 <div style={{padding:'20px 0px',textAlign:'center'}}>
//                     <h2>TodoList(with Antd UI):</h2>
//                     <Input 
//                         placeholder='Enter todo item here' 
//                         style={{width:'500px',marginRight:'10px'}}
//                         value={this.props.inputValue}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
//                 </div>
//                 <List 
//                   bordered 
//                   dataSource={this.props.list}
//                   renderItem={(item,index) => (
//                     <List.Item 
//                         actions={[
//                             <Icon 
//                                 type="delete" theme="filled" 
//                                 // onClick={this.props.handleItemDelete.bind(this,index)}
//                                 onClick={()=>{
//                                     // console.log("del:",index,this.props.list[index])
//                                     this.props.handleItemDelete(index)
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
// 
// export default TodoListUI;
