const initialState = {
    amount: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'deposit': {
            return state;
        }
        default: {
            return initialState;
        }
    }
};

export default reducer;