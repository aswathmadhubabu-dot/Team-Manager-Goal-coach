/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:41:54 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:41:54 
 */
import {SET_COMPLETED} from '../constants';

export default(state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
            const {completeGoals} = action;

            return completeGoals;
        default:
            return state;

    }
}