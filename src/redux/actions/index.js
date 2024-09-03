// azioni per tutto lápplicativo

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_JOB_LIST = "SET_JOB_LIST";

export const addToFavouriteAction = (job) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: job
    }
    
}

export const removeFromFavouriteAction = (job) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: job
    }
    
}

export const setJobListAction = (jobs) => {
    return {
        type: SET_JOB_LIST,
        payload: jobs
    }
       
    }
