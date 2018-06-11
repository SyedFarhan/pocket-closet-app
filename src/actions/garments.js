import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get this User's Favourite Recipes
  */
export function getFavourites(dispatch) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  const ref = FirebaseRef.child(`favourites/${UID}`);

  return ref.on('value', (snapshot) => {
    const favs = snapshot.val() || [];

    return dispatch({
      type: 'FAVOURITES_REPLACE',
      data: favs,
    });
  });
}

/**
  * Reset a User's Favourite Recipes in Redux (eg for logou)
  */
export function resetFavourites(dispatch) {
  return dispatch({
    type: 'FAVOURITES_REPLACE',
    data: [],
  });
}

/**
  * Update My Favourites Garment
  */
export function replaceFavourites(newFavourites) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  return () => FirebaseRef.child(`favourites/${UID}`).set(newFavourites);
}

/**
  * Get Meals
  */
export function getMeals() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise((resolve, reject) => FirebaseRef
    .child('meals').once('value')
    .then((snapshot) => {
      const meals = snapshot.val() || {};

      return resolve(dispatch({
        type: 'MEALS_REPLACE',
        data: meals,
      }));
    }).catch(reject)).catch(e => console.log(e));
}

/**
  * Set an Error Message
  */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(dispatch({
    type: 'GARMENTS_ERROR',
    data: message,
  })));
}

/**
  * Get Garments
  */
/* export function getGarments() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('garments')
    .on('value', (snapshot) => {
      const garments = snapshot.val() || {};
      return resolve(dispatch({
        type: 'GARMENTS_REPLACE',
        data: garments,
      }));
    })).catch(e => console.log(e));
} */
export function addGarment(garment) {
  return async (dispatch) => {
    function onSuccess(savedGarment) {
      dispatch({ type: 'GARMENT_ADD', data: savedGarment });
      return garment;
    }

    function onError(error) {
      dispatch({ type: 'ERROR_GENERATED', error });
      return error;
    }

    try {
      await Firebase.database().ref(`garments/${garment.id}`).set({
        author: garment.author,
        body: garment.body,
        category: garment.category,
        id: garment.id,
        image: garment.image,
        slug: garment.slug,
        title: garment.title,
      });
      return onSuccess(garment);
    } catch (e) {
      console.log(e);
      return onError(e);
    }
  };
}


export function deleteGarment(itemId) {
  console.log('delete garmnet action ', itemId);
  if (Firebase === null) return () => new Promise(resolve => resolve());
  Firebase.database().ref(`/garments/${itemId}`).remove();

  return dispatch => new Promise(resolve => resolve(dispatch({ type: 'GARMENTS_DELETE', data: itemId })));
}

export function getGarments() {
  return async (dispatch) => {
    function onSuccess(garments) {
      dispatch({ type: 'GARMENTS_REPLACE', data: garments });
      return garments;
    }

    function onError(error) {
      dispatch({ type: 'ERROR_GENERATED', error });
      return error;
    }

    try {
      const garments = [];

      // get garments reference
      const garmentsReference = await FirebaseRef.child('garments');

      const dataSnapshot = await garmentsReference.once('value');
      dataSnapshot.forEach((garmentRef) => {
        const garment = garmentRef.val();
        // If garment isn't falsey, and if id isn't falsey or not 0 then push into garments array
        if (garment && (garment.id || garment.id === 0)) {
          garments.push(garment);
        }
      });
      console.log(garments);
      return onSuccess(garments);
    } catch (error) {
      console.log(error);
      return onError(error);
    }
  };
}
