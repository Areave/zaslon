import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../comps/app/app';
import Page2 from "../comps/old/page2/page2";

const MyRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
        </Routes>
    </BrowserRouter>
}

export default MyRouter;