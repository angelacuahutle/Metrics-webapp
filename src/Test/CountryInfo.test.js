import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configStore';

import CountryInfo from '../Components/Countries/CountryInfo';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><CountryInfo /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
