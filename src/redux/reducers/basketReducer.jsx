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

    case 'REMOVE_FROM_BASKET':
        const { itemId, size, color } = action.payload;
        const updatedItems = state.items.filter(
            (item) => {
                return item.item !== itemId && item.size !== size && item.color !== color
            }
        );
        console.log("UT", updatedItems)
        localStorage.setItem('basket', JSON.stringify(updatedItems));
        return {
            ...state,
            items: updatedItems,
        };
    
    default:
    return state;
}
};

export default basketReducer;
