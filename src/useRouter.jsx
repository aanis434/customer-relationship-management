
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import CustomersList from './components/customers/customersList';
import CustomerCreate from './components/customers/customerCreate';

const UseRouter = () => {
    return (
        <Switch>
            <Route
              path="/customers"
              render={({ match: { url } }) => (
                <>
                  <Route path={ `${url}/`} component={CustomersList} exact/>
                  <Route path={ `${url}/create`} component={CustomerCreate}/>
                </>
              )}
            />
            <Route path='/dashboard' component={Dashboard} />
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
        </Switch>
    );
}

export default UseRouter;