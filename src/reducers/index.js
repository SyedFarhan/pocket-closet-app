import status from './status';
import member from './member';
import garments from './garments';
import locale from './locale';
import shirts from './shirts';
import pants from './pants';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  member,
  garments,
  locale,
  shirts,
  pants
};
