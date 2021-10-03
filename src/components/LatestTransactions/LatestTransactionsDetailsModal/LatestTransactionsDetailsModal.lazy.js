import React, { lazy, Suspense } from 'react';

const LazyLatestTransactionsDetailsModal = lazy(() => import('./LatestTransactionsDetailsModal'));

const LatestTransactionsDetailsModal = props => (
  <Suspense fallback={null}>
    <LazyLatestTransactionsDetailsModal {...props} />
  </Suspense>
);

export default LatestTransactionsDetailsModal;
