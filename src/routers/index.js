import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import PrivateRoute from '@/components/private-route';
// 使用自定义Hook实现
import ScrollToTop from '@/components/scroll-to-top';

import lazyLoad from '@/utils/lazy-load';

const Order = lazyLoad(import('@/pages/order'));

const Query = lazyLoad(import('@/pages/query'));

const Ticket = lazyLoad(import('@/pages/ticket'));

export default function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/order" render={(props) => <Order {...props} />} />
        <Route path="/query" render={(props) => <Query {...props} />} />
        <Route path="/ticket" render={(props) => <Ticket {...props} />} />
        <Redirect to="/query" />
      </Switch>
    </Router>
  );
}
