import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr} from '../../test/testUtils';
import Navbar from './Navbar';


const setup = (props={}, state= null) => {
  return shallow(<Navbar />)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'navBar-component');
  expect(appComponent.length).toBe(1);
});
