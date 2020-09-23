import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from './config/routes.js';
import './App.scss';

const App = () => {
    // Instantiate routes
    const Routes = routes.map((route, i) => {
        const { path, view: View } = route;
        return <Route key={ i }
                      exact path={ path }
                      render={() => <View />}/>;
    });

    return (
        <div>
            <main>
                { Routes }
            </main>
        </div>
    );
}

export default withRouter(App);
