// Modules
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';

// Store
import store from '../../utils/store';

// Themes
import { primaryTheme } from '../../styles/themes'

// Containers
import Content from '../Content/Content';

class App extends Component {
    render() {
        return (
            <StoreProvider store={store}>
                <ThemeProvider theme={primaryTheme}>
                    <Content />
                </ThemeProvider>
            </StoreProvider>
        );
    }
}

export default App;
