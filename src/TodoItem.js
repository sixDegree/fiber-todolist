import React,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this) // recommend! 节约性能
    }

    shouldComponentUpdate(nextProps,nextState){
        // if(nextProps.item!==this.props.item){
        //     return true
        // }
        return false
    }

    render(){
        // console.log("child render")
        // return <li onClick={this.handleClick}>{this.props.item}</li>

        const {item} = this.props   // 等同于 const item = this.props.item
        return <li onClick={this.handleClick}>{item}</li>
    }

    handleClick(){
        // 调用传过来的父组件方法修改父组件status（即仍然是使用父组件的方法维护父组件状态）
        // console.log(this.props);
        // this.props.deleteItem(this.props.index)

        const {deleteItem,index}=this.props
        deleteItem(index)
    }

}

// Typechecking with PropTypes
TodoItem.propTypes = {
    item: PropTypes.string.isRequired
    ,index: PropTypes.oneOfType([PropTypes.number,PropTypes.string])
    ,deleteItem: PropTypes.func
}

TodoItem.defaultProps={
    item: 'Hello World'
}

export default TodoItem

