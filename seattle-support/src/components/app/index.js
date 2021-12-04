import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import localforage from 'localforage';
import Home from '../screens/Home';
import { createStore } from 'polotno/model/store';
import Pamphlets from '../screens/Pamphlets';

const store = createStore({ key: '1dhazL_sUsyRbsXfvCai' });
window.store = store;

localforage.getItem('polotno-state', function (err, json) {
  if (json) {
    store.loadJSON(json);
  }
  if (!store.pages.length) {
    store.addPage();
  }
});

store.on('change', () => {
  try {
    const json = store.toJSON();
    localforage.setItem('polotno-state', json);
  } catch (e) {}
});

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/pamphlets' element={<Pamphlets store={store} />} />
            </Routes>
        </Router>
    );
};

export default App;