import React, { useState } from 'react';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import About from '../Container/About';
import Connect from '../Container/Connect';
import Home from '../Container/Home';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const AllRouter = ()=>{
    let defaultNameValue = 'JavaScript React js';
    let [name, setName] = useState(defaultNameValue)
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home name={name} updateName={setName}/>} />
                    <Route path="/about" element={<About name={name} updateName={setName}/>} />
                    <Route path="/connect" element={<Connect name={name} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AllRouter;


// Redux // install lib
// 1. Store
// 2. Reducer
// 3. Action


// Context API React 
// 1. Store
// 2. Reducer
// 3. Action



