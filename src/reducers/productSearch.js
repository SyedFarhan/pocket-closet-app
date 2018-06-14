import Store from '../store/productSearch';

export const initialState = Store;

export default function productSearchReducer(state = initialState, action) {
  switch (action.type) {
    case 'BRAND_REPLACE': {
      return {
        ...state,
        brand: action.data || '',
      };
    }
    case 'BARCODE_REPLACE': {
      return {
        ...state,
        barcode: action.data || '',
      };
    }
    default:
      return state;
  }
}
