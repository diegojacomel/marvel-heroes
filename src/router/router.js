// Modules
import React from 'react';

// Router
import { HashRouter, Route } from "react-router-dom";

// Router Components
import routerComponents from './routerComponents';

function Router() {
    return (
        <HashRouter>
            <div>
                {routerComponents.map((route, indexRoute) => {
                    return <Route key={indexRoute} path={route.route} exact component={route.component} />
                })}
            </div>
        </HashRouter>
    )
}

export default Router;