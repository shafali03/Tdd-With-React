import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr } from './../../../Utils';


const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component;
}


describe('Headline Component', () => {


  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: 'Test Header'

      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render a H1', () => {
      const h1 = findByTestAttr(wrapper, 'header')
      expect(h1.length).toBe(1)

    })

  });



});
