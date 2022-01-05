import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../comps/app/app'
import Comp1 from "../comps/comp1/comp1";

const MyRouter: React.FC<any> = (props) => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/comp1' element={<Comp1/>}/>
        </Routes>
    </BrowserRouter>
}

export default MyRouter