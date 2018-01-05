export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';

export function setProducts(products) {
  return {
    type: SET_PRODUCTS
  }
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    products: product
  }
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES
  }
}

export function addToCart(product) {
    return {
     type: ADD_TO_CART,
     product: product
    }
}

export function removeFromCart(product) {
    return {
     type: REMOVE_FROM_CART,
     product: product
    }
}

export function changeQuantity(product, increment) {
    return {
     type: CHANGE_QUANTITY,
     product: product
    }
}
