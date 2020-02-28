import React from 'react';
import { Nerds, mapStateToProps } from './Nerds';
import { shallow } from 'enzyme';

describe('Nerds', () => {
  let wrapper = shallow(<Nerds />)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
