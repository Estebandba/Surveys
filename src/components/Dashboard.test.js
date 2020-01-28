import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import {findByTestAttr} from '../../test/testUtils';
import Dashboard from './Dashboard';

import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={ survey:{undefined} }, state= null) => {
    const wrapper = shallow(<Dashboard {...props} />).shallow({disableLifecycleMethods: true, 
    })
      return wrapper;
  }

test('renders component without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'dashboard-component');
    expect(component.length).toBe(1);
})  