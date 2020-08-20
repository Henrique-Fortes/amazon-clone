export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic to add 
            return {
                 ...state,
                 basket: [...state.basket, action.item],
            };            
        case 'REMOVE_FROM_BASKET':
            //logic for remove
            return { state };           
        default:
            return state;
    }
};    

export default reducer;