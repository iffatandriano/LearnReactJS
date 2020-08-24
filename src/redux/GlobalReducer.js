import actionType from "./GlobalActionType";
import ActionType from "./GlobalActionType";

const initState = {
    totalOrder: 0
}


//reducer
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case ActionType.MINUS_ORDER:
            if (state.totalOrder > 0) {
                return {
                    ...state,
                    totalOrder: state.totalOrder - 1
                }
            }
        default:
            return state;
    }
}

export default rootReducer;