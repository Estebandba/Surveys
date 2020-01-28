import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../test/testUtils';
import Footer from './Footer';


const setup = (props={}, state= null) => {
  return shallow(<Footer />)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'footer-component');
  expect(appComponent.length).toBe(1);
});
