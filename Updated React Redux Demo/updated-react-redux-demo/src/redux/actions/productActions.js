import { ActionTypes } from "../constants/action-types"


export const setProducts = (products) => {
    return {
        tyoe: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        tyoe: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}

export const removeselectedProducts = (products) => {
    return {
        tyoe: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload: products
    }
}