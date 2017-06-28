/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:42:01 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:42:01 
 */
import {SET_GOALS} from '../constants.js';

export default(state = [], action) => {
    switch (action.type) {
        case SET_GOALS:
            const {goals} = action;

            return goals;
        default:
            return state;

    }
}