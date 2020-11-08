import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtil';

import SearchBox from '../SearchBox';

// const defaultProps = {setAddress: jest.fn()}

const setup = (props={}) => {
    const setupProps = {...props}
    return shallow(<SearchBox { ...setupProps } />);
}

it('Should render the component SearchBox', () => {
    const wrapper = setup();
    const searchAreaWrapper = findByTestAttr(wrapper, 'component-search-box');
    console.log("searcharea: ", searchAreaWrapper);
    expect(searchAreaWrapper.length).toBe(1);
})

it('Should render an input for searching', () => {
    const wrapper = setup();
    const input = wrapper.find('input');
    expect(input.length).toBe(1);
})


describe('The input', () => {
    let mockProps;
    beforeEach(() => {
        mockProps = {setAddress: jest.fn()};
    })

    it('Should call setAddress when enter is pressed', () => {
        const inputValue = 'meu teste';
        const wrapper = setup(mockProps);
        const input = wrapper.find('input');
        input.simulate('keydown', {key: 'Enter', target:{value: inputValue}});
        expect(mockProps.setAddress.mock.calls.length).toBe(1)
        // console.log("wrrappper: ", );
    })

    it('Should not call setAddress when enter is pressed', () => {
        const inputValue = 'meu teste';
        const wrapper = setup(mockProps);
        const input = wrapper.find('input');
        input.simulate('keydown', {key: 'A', target:{value: inputValue}});
        expect(mockProps.setAddress.mock.calls.length).toBe(0)
        // console.log("wrrappper: ", );
    })

})

