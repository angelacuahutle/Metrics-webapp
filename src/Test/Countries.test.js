import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Countries from '../Components/Countries/Countries';
import store from '../Redux/configStore';

test('renders missions component', () => {
  render(<Provider store={store}><Countries /></Provider>);
});
