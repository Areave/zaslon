import React from "react";
import './app.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import Header from '../../comps/header/header'
import Footer from '../../comps/footer/footer'
import AuthorizationPage from '../authorizationPage/authorizationPage'
import HomePage from "../homePage/homePage";
import store from "../../utils/store";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DiscussionPage from "../discussionPage/discussionPage";
import HelpPage from "../helpPage/helpPage";
import ProfilePage from "../profilePage/profilePage";


const App: React.FC<any> = (props) => {
    return <BrowserRouter>
        <div className="mainContainer">
            <Header/>
            <div className='content'>
                <div className="content-wrapper">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/help' element={<HelpPage/>}/>
                        <Route path='/authorization' element={<AuthorizationPage/>}/>
                        <Route path='/discussion/:id' element={<DiscussionPage/>}/>
                        <Route path='/profile/:id' element={<ProfilePage/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>

};

const mapStateToProps = (state: Types.State) => {
    return {isLoading: state.isLoading, name: state.name}
}

export default connect(mapStateToProps)(App);