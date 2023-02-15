import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App'

function App1() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}