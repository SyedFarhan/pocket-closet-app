import React from 'react';
import PropTypes from 'prop-types';
import GarmentSearchResultCard from './GarmentSearchResultCard'

const SearchResult = ({ displayResult, searchResult, onAdd }) => {
  return (
    displayResult ? <GarmentSearchResultCard garment={searchResult} addGarment={onAdd} /> : null
  );
};

SearchResult.defaultProps = {
  displayResult: false,
  searchResult: null,
  onAdd: null,
};

SearchResult.propTypes = {
  displayResult: PropTypes.bool,
  searchResult: PropTypes.shape({
    title: PropTypes.string,
    brand: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  onAdd: PropTypes.func,
};

export default SearchResult;
