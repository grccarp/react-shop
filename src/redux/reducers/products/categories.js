import { GET_CATEGORIES } from '../../actions';

const initialState = {
  items: [],
  isLoading: false,
};

function categories(state = initialState, action) {
  
  switch (action.type) {
    case GET_CATEGORIES:
      return {  
        ...state,
        items: action.categories,
        isLoading: true,
      }

    default:
      return state
  }
}

export default categories;
