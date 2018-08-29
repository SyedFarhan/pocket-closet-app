import { Firebase } from '../../misc/lib/firebase'


export function resetSearchForm() {
  return dispatch => dispatch({
    type: 'SEARCH_FORM_RESET',
  });
}

export function replaceBrand(brand) {
  return dispatch => dispatch({
    type: 'BRAND_REPLACE',
    data: brand,
  });
}

export function replaceBarcode(barcode) {
  return dispatch => dispatch({
    type: 'BARCODE_REPLACE',
    data: barcode,
  });
}

function backendAPICallMock(brand, barcode) {
  let mockGarment = {
    slug: '1mx-shirt',
    title: '1MX Shirt',
    brand: 'Express',
    size: 'Large',
    description: 'Classic Express  FDress Shirt',
    category: 'Jeans',
    id: '40',
    imageUrl: 'https://images.express.com/is/image/expressfashion/0020_00302144_0098?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon',
    laundryInstructions: {},
    tags: [],
  };

  return mockGarment;

}

export function initiateSearch(brand, barcode) {
  return async (dispatch) => {
    function onSuccess(searchResult) {
      dispatch({ type: 'SEARCH_RESULT_REPLACE', data: searchResult });
    }

    function onError(error) {
      dispatch({ type: 'ERROR_GENERATED', error });
      return error;
    }

    try {
      const searchResult = await backendAPICallMock(brand, barcode);
      onSuccess(searchResult);
    } catch (e) {
      onError(e);
    }
  };
}

