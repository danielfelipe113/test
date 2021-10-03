import React, { lazy, Suspense } from 'react';

const LazyOddEvenFinder = lazy(() => import('./OddEvenFinder'));

const OddEvenFinder = props => (
  <Suspense fallback={null}>
    <LazyOddEvenFinder {...props} />
  </Suspense>
);

export default OddEvenFinder;
