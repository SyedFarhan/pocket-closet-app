/* global describe, it, expect */
import React from 'react';
import renderer from 'react-test-renderer';

import SearchResult from './SearchResult';

test('renders not null when displayResult is true and searchResult exists', () => {
  const searchResult = { title: 'Test', brand: 'test', imageUrl: 'test' };
  const renderedComponent = renderer
    .create(<SearchResult isDisplayed searchResult={searchResult} onAdd={() => {}} />)
    .toJSON();

  expect(renderedComponent).toBeTruthy();
});

test('returns null when displayResult prop is false', () => {
  const renderedComponent = renderer.create(<SearchResult isDisplayed={false} />).toJSON();
  expect(renderedComponent).toBeNull();
});
