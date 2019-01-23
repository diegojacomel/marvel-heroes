// Modules
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

// Theme
import { primaryTheme } from '../../styles/themes'; 

// Images
import images from '../../images/images';

// Component
import Logo from './Logo';

describe('Logo', () => {
    const wrapper = shallow(<Logo />);

    test('It exist', () => {
        expect(wrapper.find('#testLogo')).toExist();
        expect(wrapper.find('#testImgLogo')).toExist();
    })

    test('At least one', () => {
        expect(wrapper).toContainMatchingElement('#testLogo');
        expect(wrapper).toContainMatchingElement('#testImgLogo');
    })

    test('Have display name', () => {
        expect(wrapper.find('#testLogo')).toHaveDisplayName('LogoWrapper');
        expect(wrapper.find('#testImgLogo')).toHaveDisplayName('ImgLogo');
    })

    test('Match selector', () => {
        expect(wrapper.find('#testLogo')).toMatchSelector('LogoWrapper');
        expect(wrapper.find('#testImgLogo')).toMatchSelector('ImgLogo');
    })

    test('Have props', () => {
        expect(wrapper.find('#testLogo')).toHaveProp('title');
        expect(wrapper.find('#testImgLogo')).toHaveProp('src');
        expect(wrapper.find('#testImgLogo')).toHaveProp('alt');
    })

    it('Render correctly', () => {
        const tree = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Logo src={images.reactLogo} alt="alt" title="title" />
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
})