const initialState = [];
export function addFavPersonReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PERSON':
           
            return [...state, action.payload]

        default:
            return state;
    }
}