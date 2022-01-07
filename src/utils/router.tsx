import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../comps/app/app';
import Page2 from "../comps/page2/page2";

const MyRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/page2' element={<Page2/>}/>
        </Routes>
    </BrowserRouter>
}

export default MyRouter;