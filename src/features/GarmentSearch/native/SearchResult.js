import React from 'react';
import PropTypes from 'prop-types';
import GarmentSearchResultCard from './GarmentSearchResultCard';

const SearchResult = ({ isDisplayed, searchResult, onAdd }) => {
  return (
    isDisplayed ? <GarmentSearchResultCard garment={searchResult} addGarment={onAdd} /> : null
  );
};

SearchResult.defaultProps = {
  searchResult: null,
  onAdd: null,
};

SearchResult.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  searchResult: PropTypes.shape({
    title: PropTypes.string,
    brand: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  onAdd: PropTypes.func,
};

export default SearchResult;
