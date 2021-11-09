import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Pamphlets from '../screens/Pamphlets';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/pamphlets' element={<Pamphlets />} />
            </Routes>
        </Router>
    );
};

export default App;