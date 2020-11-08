import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtil';

import Product from '../Product';

const defaultProps = {product: {id: 1, title: 'cerveja brahma', images: [{url:''}], productVariants:[{price:10}]}}

const setup = (props={}) => {
    const setupProps = {...props, ...defaultProps}
    return shallow(<Product { ...setupProps } />);
}

it('Should render the component Product', () => {
    const wrapper = setup();
    const productWrapper = findByTestAttr(wrapper, 'component-product');
    console.log("searcharea: ", productWrapper);
    expect(productWrapper.length).toBe(1);
})


it('Should render an image, title and price for searching', () => {
    const wrapper = setup();
    const img = wrapper.find('img');
    expect(img.length).toBe(1);

    const h3 = wrapper.find('h3');
    expect(h3.length).toBe(1);

    const price = findByTestAttr(wrapper, 'product-price')
    expect(price.length).toBe(1);
})

})
*/
