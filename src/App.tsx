import React from 'react';
import './assest/css/App.css';
import Ships from './pages/Ships';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Ships />
      </div>
    </Provider>
  );
}

export default App;
