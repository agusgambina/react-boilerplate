// import App from '../../src/components/app';
//
// describe('App', () => {
//   let component;
//
//   beforeEach(() => {
//     component = renderComponent(App);
//   });
//
//   it('renders something', () => {
//     expect(component).to.exist;
//   });
//
// });

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import App from '../../src/components/app';

describe('<App />', () => {
  it('should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.exist;
  });
});
