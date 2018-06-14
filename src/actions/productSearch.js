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
