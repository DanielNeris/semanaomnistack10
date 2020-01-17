import React from 'react';
import PropTyes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';

export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTyes.oneOfType([PropTyes.element, PropTyes.func]).isRequired,
};
