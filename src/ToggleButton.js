import React,{Component,Fragment} from 'react'
import './style.css'

class ToggleButton extends Component{

    constructor(props){
        super(props)
        this.state={
            show:false
        }
        this.handleToggleBtnClick=this.handleToggleBtnClick.bind(this)
    }


    render(){
        return (
            <Fragment>
                <button onClick={this.handleToggleBtnClick}>Toggle</button>
                <div className={this.state.show?'hideArea':'showArea'}>Hello World</div>
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

export default ToggleButton