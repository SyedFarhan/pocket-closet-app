import { DEFAULT_LOCALE } from '../../misc/i18n/index';

export const initialState = DEFAULT_LOCALE;

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOCALE_REPLACE': {
      if (action.locale) {
        return action.locale;
      }
      return initialState;
    }
    default:
      return state;
  }
}
