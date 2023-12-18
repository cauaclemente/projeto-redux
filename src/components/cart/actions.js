import cartActionType from "./action-types"

export const addProductToCart = (payload) => ({
    type: cartActionType.ADD_PRODUCT,
    payload,
})

export const removeProductFromCart = (payload) => ({
    type: cartActionType.REMOVE_PRODUCT,
    payload,
});

export const increaseProductQuantity = (payload) => ({
    type: cartActionType.INCREASE_PRODUCT_QUANTITY,
    payload,
});

export const deacreaseProductQuantity = (payload) => ({
    type: cartActionType.DECREASE_PRODUCT_QUANTITY,
    payload,
});

