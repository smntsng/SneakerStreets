export const getBasketItemCount = () => {
    const items = JSON.parse(localStorage.getItem('basket')) || [];
    return items.length;
};