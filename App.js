import React from 'react';
import { render } from '@testing-library/react';

function App(store) {
  return (
    <main className='App'>
      <header>
        <h1>
          <div className='App-list'>

          </div>
        </h1>
      </header>
    </main>
  );
}
render(<List />)

export default App;
