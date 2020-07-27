import { combineReducers } from 'redux';
import start from './start/start';
import login from './login/login';
import myActivityInfo from './myActivity/myActivity';

const rootReducer = combineReducers({
    start,
    login,
    myActivityInfo
});

export default rootReducer;