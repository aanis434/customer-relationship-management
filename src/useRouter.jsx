
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard';
import CustomersList from './components/customers/customersList';
import CustomerCreate from './components/customers/customerCreate';
import LeadsList from './components/leads/leadslist';
import LeadCreate from './components/leads/leadCreate';

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
            <Route
              path="/leads"
              render={({ match: { url } }) => (
                <>
                  <Route path={ `${url}/`} component={LeadsList} exact/>
                  <Route path={ `${url}/create`} component={LeadCreate}/>
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