import { combineReducers } from 'redux';
import Postreducer from './postReducer';
import Commentreducer from './commentReducer';
const rootreducer= combineReducers({
    posts: Postreducer,
    comments: Commentreducer
})
export default rootreducer;