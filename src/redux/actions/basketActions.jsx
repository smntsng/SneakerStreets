export const addToBasket = (item) => ({
    type: 'ADD_TO_BASKET',
    payload: item,
});
export const removeFromBasket = (itemId, size, color) => ({
    type: 'REMOVE_FROM_BASKET',
    payload: { itemId, size, color },
});
export const updateBasketCount = (count) => ({
    type: 'UPDATE_BASKET_COUNT',
    payload: count,
});