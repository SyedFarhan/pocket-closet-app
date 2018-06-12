import Store from '../store/shirts';

export const initialState = Store;

export default function shirtsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_SHIRTS': {
      const shirts = action.data;
      return {
        ...state,
        shirts,
      };
    }
    default:
      return state;
  }
}
