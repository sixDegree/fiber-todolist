import { takeEvery,put } from 'redux-saga/effects'
import * as actionType from './actionType'
import * as actionCreator from './actionCreator'
import axios from 'axios'

function* mySaga() {        // 必须是一个generator函数
  yield takeEvery(actionType.GetSagaListItems, getListItems);
}

function* getListItems(){
    console.log("saga: getListItems")
    try{
        // const response = yield axios.get('/todoItems.json');
        const response = yield axios.get('/api/todoItems.json');
        
        // console.log(response);
        const data = response.data;
        const action=actionCreator.initialListItemAction(data);
        yield put(action);
    }catch(err){
        const data=["Load Initial Items Fail!:"+err]
        const action=actionCreator.initialListItemAction(data);
        yield put(action);
    }
}

export default mySaga;