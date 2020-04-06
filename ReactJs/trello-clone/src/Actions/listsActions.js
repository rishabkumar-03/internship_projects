import { ACTIONS } from '../Actions';

export const addList = title => {
    return{
        type: ACTIONS.ADD_LIST ,
        payload: title
    };
};