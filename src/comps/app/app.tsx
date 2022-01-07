import Page2 from "../old/page2/page2";
import MainComponent from "../old/mainComponent/mainComponent";
import LoadingButton from "../old/loadingButton/loadingButton";
import Loader from "../old/loader/loader";
import LoadingTitle from "../old/loadingTitle/loadingTitle";
import WelcomeComp from '../old/welcomeComp/welcomeComp'
import React from "react";
import './app.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import Header from '../header/header'
import Footer from '../footer/footer'
import Authorization from '../authorization/authorization'
import store from "../../utils/store";
import MyRouter from "../../utils/router";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App: React.FC<any> = (props) => {
    return <div className="mainContainer">
        <Header/>
        <div className='content'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Authorization/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        <Footer/>
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {isLoading: state.isLoading, name: state.name}
}

export default connect(mapStateToProps)(App);