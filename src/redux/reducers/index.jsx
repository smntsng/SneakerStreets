import { combineReducers } from 'redux';
import basketReducer from './basketReducer';

const rootReducer = combineReducers({
    basket: basketReducer,
    // other reducers can be added here
});

export default rootReducer;
