import statusMessage from './status';
import { Translations, DEFAULT_LOCALE } from '../../misc/i18n/index';
import ErrorMessages from '../../misc/constants/errors';

export default function changeLocale(locale = DEFAULT_LOCALE) {
  return dispatch => new Promise(async (resolve, reject) => {
    // Validate locale
    if (!Translations[locale]) return reject({ message: ErrorMessages.localeDoesNotExist });

    await statusMessage(dispatch, 'loading', false);

    return resolve(dispatch({
      type: 'LOCALE_REPLACE',
      locale,
    }));
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}
