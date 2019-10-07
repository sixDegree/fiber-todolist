import React,{Component,Fragment} from 'react'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import './style.css'

class ToggleButtonTransitionGroup extends Component{

    constructor(props){
        super(props)
        this.state={
            list:['Hello']
        }
        this.handleToggleBtnClick=this.handleToggleBtnClick.bind(this)
    }

    render(){
        return (
            <Fragment>
                <button onClick={this.handleToggleBtnClick}>TransitionGroup</button>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition key={index} 
                                    timeout={1000} 
                                    classNames='node' 
                                    appear={true}
                                    onEntered={(el)=>{el.style.color='blue'}}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </Fragment>
        )
    }

    handleToggleBtnClick(){
        this.setState(
            (preState)=>({
                list:[...preState.list,"item"]
            })
        );
    }
}

export default ToggleButtonTransitionGroup

