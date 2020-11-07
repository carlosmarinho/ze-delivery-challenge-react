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
// const appComponent = findByTestAttr(wrapper, 'component-app');