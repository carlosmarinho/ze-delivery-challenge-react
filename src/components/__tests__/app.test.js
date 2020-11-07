import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';
import Header from '../common/Header';
import Footer from '../common/Footer';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}) => {
    return shallow(<App {...props} />);
}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

it('Should render a Footer and a Header', () => {
    const wrapper = setup();
    const header = wrapper.find(Header);
    const footer = wrapper.find(Footer);
    expect(header.length).toBe(1);
    expect(footer.length).toBe(1);
})

it('Should have the / route', () => {
    const wrapper = setup();
    const homeRoute = findByTestAttr(wrapper, 'home-route');
    expect(homeRoute.length).toBe(1)
})

it('Should have the /products route', () => {
    const wrapper = setup();
    const productsRoute = findByTestAttr(wrapper, 'products-route');
    expect(productsRoute.length).toBe(1)
})