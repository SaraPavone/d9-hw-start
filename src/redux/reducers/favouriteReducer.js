import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
    jobs: [],  
}




const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                jobs:[...state.jobs, action.payload]
                
            }

            case REMOVE_FROM_FAVOURITE:
                return {
                    ...state,
                        jobs:state.jobs.filter((job) => job !== action.payload)
                }
        default:
            return state;
    }
};

export default favouriteReducer;