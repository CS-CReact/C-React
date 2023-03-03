import React, { useState, Suspense, lazy } from 'react';
import { Message } from 'types';
import './App.css';
import Spinner from './Spinner';
import Description from './Description';

function App(): JSX.Element {
  const [message, setMessage] = useState<Message>('');

  const updateMessageHandler = (): void => {
    fetch('/api')
      .then((response) => response.text())
      .then((newMessage) => {
        setMessage(newMessage);
      })
      .catch((error) => {
        throw error;
      });
  };

  const DummyTable = lazy(
    () => import('./DummyTable' /* webpackPrefetch: true */)
  );

  return (
    <div className="App">
      <Description />
      <button type="button" className="button" onClick={updateMessageHandler}>
        Update Message
      </button>
      {message && <p>{message}</p>}
      <h3 className="data-heading">Dummy Data</h3>
      <div className="data-grid">
        <Suspense fallback={<Spinner />}>
          <div className="table">
            <DummyTable />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
