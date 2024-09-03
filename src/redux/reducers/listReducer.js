import { SET_JOB_LIST } from "../actions";

const initialState = {
    list: [],  
}



const listReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_JOB_LIST:
            return {
                ...state,
                list: action.payload
            }
      
        default:
            return state;
    }
};  

export default listReducer