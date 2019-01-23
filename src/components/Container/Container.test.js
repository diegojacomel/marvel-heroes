// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/themes'; 

// Component
import Container from './Container';

describe('Logo', () => {
    const wrapper = shallow(<Container />);

    test('It exist', () => {
        expect(wrapper.find('#testContainer')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testContainer');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testContainer')).toHaveDisplayName('ContainerWrapper');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testContainer')).toMatchSelector('ContainerWrapper');
    })

    test('Have props', () => {
        expect(wrapper.find('#testContainer')).toHaveProp('children');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Container>
                </Container>
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})