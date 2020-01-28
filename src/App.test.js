import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../test/testUtils';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}, state= null) => {
  return shallow(<App />)
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
