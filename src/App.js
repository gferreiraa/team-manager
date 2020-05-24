import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Players from './components/Players';
import Starters from './components/Starters';
import "./styles/styles.scss";

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Github Team Manager</h1>
        <Players/>
        <Starters/>
      </main>
    </Provider>
  );
}
 
export default App;