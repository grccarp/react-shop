import { SET_PRODUCTS, ADD_PRODUCT } from '../../actions';

const initialState = {
  items: [],
  isLoading: false,
};

function products(state = initialState, action) {
  
  switch (action.type) {
    case SET_PRODUCTS:
      return {  
        ...state,
        items: action.products,
        isLoading: true,
      }

    case ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.product ],
        isLoading: false,
      }
    default:
      return state
  }
}

export default products;
