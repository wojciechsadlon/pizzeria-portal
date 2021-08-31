import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import PageNav from './components/layout/PageNav/PageNav';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <PageNav />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
