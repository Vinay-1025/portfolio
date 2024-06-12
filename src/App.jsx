import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Components/Content/Content';
import Menu from './Components/Menu/Menu';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/menu/*" element={<Menu />} />
            </Routes>
        </Router>
    );
}

export default App;
