import { Route, Switch, Redirect } from 'react-router-dom';
// import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
// import NotFoundPage from './pages/NotFoundPage';
import React, { Suspense } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quotes'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
