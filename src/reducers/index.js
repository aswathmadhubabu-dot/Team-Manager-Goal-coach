/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:41:50 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:41:50 
 */
import {combineReducers} from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from './reducer_completed_goals';
export default combineReducers({user, goals, completeGoals});