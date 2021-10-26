import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import PageNav from './components/layout/PageNav/PageNav';
import Order from './components/views/Waiter/order/Order';
import NewOrder from './components/views/Waiter/order/NewOrder';
import Events from './components/views/Tables/Events';
import Booking from './components/views/Tables/Booking';

function App() {
  return (
    <BrowserRouter >
      <MainLayout>
        <PageNav />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Events} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Events} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
          <Route path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
