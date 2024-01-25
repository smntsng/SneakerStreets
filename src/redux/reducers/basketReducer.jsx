const initialState = {
    items: JSON.parse(localStorage.getItem('basket')) || [],
};

const basketReducer = (state = initialState, action) => {
switch (action.type) {
    case 'ADD_TO_BASKET':
    const newItem = {
        ...action.payload,
        // You can add more properties here based on your needs
    };
    const newItems = [...state.items, newItem];
    localStorage.setItem('basket', JSON.stringify(newItems));
    return {
        ...state,
        items: newItems,
    };
    // handle other actions if needed
    default:
    return state;
}
};

export default basketReducer;
