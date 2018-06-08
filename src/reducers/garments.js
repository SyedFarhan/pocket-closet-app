import Store from '../store/garments';

export const initialState = Store;

export default function garmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'FAVOURITES_REPLACE': {
      return {
        ...state,
        favourites: action.data || [],
      };
    }
    case 'MEALS_REPLACE': {
      return {
        ...state,
        error: null,
        loading: false,
        meals: action.data,
      };
    }
    case 'GARMENTS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'GARMENTS_REPLACE': {
      let garments = [];
      console.log('garments replace');
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        garments = action.data.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
          ingredients: item.ingredients,
          method: item.method,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        garments,
      };
    }
    case 'GARMENTS_DELETE': {
      console.log('garment remove reducer');
      const garments = state.garments.filter(garment => garment.id !== action.data);
      return {
        ...state,
        error: null,
        loading: false,
        garments,
      };
    }
    default:
      return state;
  }
}
