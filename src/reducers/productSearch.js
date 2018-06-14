import Store from '../store/productSearch';

export const initialState = Store;

export default function productSearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_FORM_RESET': {
      return {
        ...state,
        brand: '',
        barcode: '',
        searchResult: {},
        searched: false,
      };
    }
    case 'BRAND_REPLACE': {
      return {
        ...state,
        brand: action.data || '',
        searched: false,
      };
    }
    case 'BARCODE_REPLACE': {
      return {
        ...state,
        barcode: action.data || '',
        searched: false,
      };
    }
    case 'SEARCH_RESULT_REPLACE': {
      return {
        ...state,
        searchResult: action.data || '',
        searched: true,
      };
    }
    default:
      return state;
  }
}
