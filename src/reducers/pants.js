import Store from '../store/pants';

export const initialState = Store;

export default function shirtsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PANTS': {
      const pants = action.data;
      return {
        ...state,
        pants,
      };
    }
    default:
      return state;
  }
}
