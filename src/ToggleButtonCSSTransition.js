import React,{Component,Fragment} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

class ToggleButtonCSSTransition extends Component{

    constructor(props){
        super(props)
        this.state={
            show:true
        }
        this.handleToggleBtnClick=this.handleToggleBtnClick.bind(this)
    }

    render(){
        return (
            <Fragment>
                <button onClick={this.handleToggleBtnClick}>CSSTransition</button>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='node'   // note: It's `classNames`,not `className`, for css style class prefix
                    appear={true}        // also use the animation when first load
                    unmountOnExit       // if set,the dom will be removed when hide
                    onEntered={(el)=>{el.style.color='blue'}} // hock func, trigger when enter finished
                >
                    <div>Hello World</div>
                </CSSTransition>
            </Fragment>
        )
    }

    handleToggleBtnClick(){
        this.setState(
            (preState)=>({
                show:!preState.show
            })
        );
    }
}

export default ToggleButtonCSSTransition

