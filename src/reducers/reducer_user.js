/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:42:05 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:42:05 
 */
import {SIGNED_IN} from '../constants.js';


let user = {
    email :null
}

export default (state = user,action) => {
    switch(action.type)
    {
        case SIGNED_IN :
            const {email} = action;
            user = {email}
            return user;
        default :
            return state;

    }
}