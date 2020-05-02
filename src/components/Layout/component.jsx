import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './style.css';
import routes from '../../routes';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Navbar />
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/" to="/homepage" />
          </Switch>
        </Suspense>
      <Footer />
    </div>
  );
}

export default Layout;
