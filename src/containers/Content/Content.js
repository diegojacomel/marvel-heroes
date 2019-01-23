// Modules
import React, { Fragment } from 'react';

// Router
import Router from '../../router/router';

// Containers
import Header from '../Header/Header';
import ContentRenderer from '../ContentRenderer/ContentRenderer';

function Content() {
    return (
        <Fragment>
            <Header title="Cabeçalho" flex />
            <ContentRenderer>
                <Router />
            </ContentRenderer>
        </Fragment>
    )
}

export default Content;
