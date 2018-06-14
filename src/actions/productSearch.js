export function replaceBrand(brand) {
  return dispatch => dispatch({
    type: 'BRAND_REPLACE',
    data: brand,
  });
}
