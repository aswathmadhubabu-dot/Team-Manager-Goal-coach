/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:40:57 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:40:57 
 */
import {SIGNED_IN} from '../constants.js';
import {SET_GOALS} from '../constants.js';
import {SET_COMPLETED} from '../constants.js'

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completeGoals) {
  const action = {
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}