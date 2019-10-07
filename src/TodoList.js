import React,{Component,Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem'
// import axios from 'axios'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[
                'Learn English'
                ,'Learn React'
            ]
        };
    }

    render(){
        return (
            <Fragment> 
                <label htmlFor="insertArea">Input</label> {/*点击此label时，光标自动聚焦到input*/}
                <input id="insertArea"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)} // bind this: TodoList inst!!
                    ref={(input)=>{this.input=input}}
                />
                <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
                <ul ref={(ul)=>{this.ul=ul}}>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }

    // 一般将ajax请求放在componentDidMount较好
    // yarn add axios
    componentDidMount(){
        // axios.get('').then(()=>{
        //     console.log("axios - get success")
        // }).catch(()=>{
        //     console.log("axios - get error")
        // })
    }

    getTodoItem(){
        return this.state.list.map((item,index)=>{ // this: TodoList inst!!
            // return <li key={index} 
            //     onClick={this.handleItemDelete.bind(this,index)}  
            //     >{item}</li>
            
            // return <li key={index} 
            //     onClick={this.handleItemDelete.bind(this,index)}  
            //     dangerouslySetInnerHTML={{__html:item}}
            //     ></li>
            return <TodoItem
                //key={index} 
                key={item}
                item={item} index={index}
                deleteItem={this.handleItemDelete.bind(this)}
                //onClick={this.handleItemDelete.bind(this,index)} 
                />
        })
    }

    handleInputChange(event){
        // console.log(event.target) // event.target = dom: input
        // console.log(this)         // undefined !! ,need to bind when call
        // this.state.inputValue=event.target.value // need to use setState!!
        
        // 老式写法：
        // this.setState({
        //     inputValue:event.target.value
        // });

        // 函数式：
        // this.setState(()=>{
        //     return {
        //         inputValue:event.target.value
        //     }
        // });

        // 异步函数式：
        const val=event.target.value
        // const val=this.input.value //  使用了ref后，也可这样定位到input dom节点 - 但不推荐
        this.setState(
            ()=>({inputValue:val})
        );
    }

    handleBtnClick(event){
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue]
        //     ,inputValue:''
        // })

        this.setState(
            (preState)=>({      // preState = this.state
                list:[...preState.list,preState.inputValue]
                ,inputValue:''
            }),()=>{ // callback func
                // 使用了ref后,可直接定位到ul dom节点，对dom进行操作 - 不推荐
                console.log(this.ul.querySelectorAll('li').length)
            }
        );
    }

    handleItemDelete(index,event){
        // const lst=[...this.state.list]
        // lst.splice(index,1)
        // this.setState({
        //     list:lst      // list: this.state.list.splice(index,1) -- not recommend
        // });

        this.setState(
            (preState)=>{
                const list=[...preState.list]
                list.splice(index,1)
                return {list}   // 等同：return {list:list}
            }
        );
    }
}

export default TodoList;

