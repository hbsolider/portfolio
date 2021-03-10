import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateCompo, RoutersCompo } from './router';
import Private from 'container/Private';
export const Routers = () => {
  return (
    <Router>
      <Switch>
        {PrivateCompo.map((route) => (
          <Private key={route?.path}>
            <Route
              path={route?.path}
              exact
              component={route?.component}
            ></Route>
          </Private>
        ))}
        {RoutersCompo.map((route) => (
          <Private key={route?.path}>
            <Route
              path={route?.path}
              exact
              component={route?.component}
            ></Route>
          </Private>
        ))}
      </Switch>
    </Router>
  );
};
export default Routers;
