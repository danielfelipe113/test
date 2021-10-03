import React, { lazy, Suspense } from 'react';

const LazyLatestTransactions = lazy(() => import('./LatestTransactions'));

const LatestTransactions = props => (
  <Suspense fallback={null}>
    <LazyLatestTransactions {...props} />
  </Suspense>
);

export default LatestTransactions;
