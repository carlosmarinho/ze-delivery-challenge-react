import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import Category, { findProducts } from '../Category';

import { findByTestAttr } from '../../../test/testUtil';

const mocks = [
{
    request: {
        query: findProducts,
        variables: {
            id: 543,
            search: "",
            categoryId: 94
        },
    },
    result: {
        data: {
            poc: {
                products: 
                [{
                    id: "8868",
                    title: "Skol 269ml - Unidade",
                    rgb: false,
                    images: [{url: 'url'}],
                    productVariants: [{price: 10}],
                }],
            }
        },
    },
},
];

const defaultProps = {}

const setup = (props={}) => {
    const setupProps = {...props, ...defaultProps}
    return renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Category { ...setupProps } />
        </MockedProvider>
    );
}


it('Should render the component Category', () => {
    const wrapper = setup();
    const tree = wrapper.toJSON();
    expect(tree.props['data-test']).toBe('component-category');
});

it('Should get the state of loading', async () => {
    const component = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Category />
        </MockedProvider>,
    );

    const tree = component.toJSON();
    expect(tree.children[0].children).toContain('Carregando...');

})