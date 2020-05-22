import { DAY, NIGHT } from "../actions/types"

const INITIAL_STATE= {
    mode: 'day'
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case DAY:
            return {...state, mode: 'day'};
        case NIGHT:
            return {...state, mode: 'night'};
        default:
            return {...state};
    }
    
}