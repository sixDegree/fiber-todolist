import * as actionType from './actionType'
import axios from 'axios'

const changeInputValueAction = (value) => ({
    // type: "change_input_value",
    type: actionType.ChangeInputValue,
    value: value
});

const submitInputValueAction = () => ({
    // type: "submit_input_value"
    type: actionType.SubmitInputValue
});

const deleteListItemAction = (value) => ({
    // type: "delete_list_item",
    type: actionType.DeleteListItem,
    value: value
});

const initialListItemAction = (value) => ({
    type: actionType.InitialListItem,
    value: value || []
})

// for redux-thunk
const getListItems = ()=>{
    return (dispatch)=>{
        // axios.get('/todoItems.json').then((response)=>{
        axios.get('/api/todoItems.json').then((response)=>{
            const data=response.data;
            // console.log(data)
            const action=initialListItemAction(data);
            dispatch(action);
        }).catch((err)=>{
            // console.log(err);
            const data=["Load Initial Items Fail!:"+err]
            const action=initialListItemAction(data);
            dispatch(action);
        })
    }

}

// for redux-saga
const getSagaListItems=() => ({
    type: actionType.GetSagaListItems
});

export {changeInputValueAction,submitInputValueAction,deleteListItemAction,
    initialListItemAction, getListItems, getSagaListItems}



