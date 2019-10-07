import * as actionType from './actionType'

const defaultState={
    inputValue: '',
    list: []
}

export default (state=defaultState,action) => {
    // console.log(state,action)
    
    //if (action.type === 'change_input_value'){
    if (action.type === actionType.ChangeInputValue){
        /* 
            reducer可以接收state，但不可以修改state，所以深拷贝了一份
            将新的state返回给Store，由Store更新Store中的state
        */
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    // if (action.type === 'submit_input_value'){
    if (action.type === actionType.SubmitInputValue){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }

    // if (action.type === 'delete_list_item'){
    if (action.type === actionType.DeleteListItem){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        return newState;
    }

    if (action.type === actionType.InitialListItem){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.value;
        return newState;
    }

    return state;
}

