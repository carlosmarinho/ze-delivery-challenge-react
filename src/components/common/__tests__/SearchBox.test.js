import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../SearchBox';
import { TestScheduler } from 'jest';

const setup = (props={}) => {
    return shallow(<SearchBox { ...props } />);
}

it('Should render a SearchAreaWrapper', () => {
    const wrapper = setup();
    
})