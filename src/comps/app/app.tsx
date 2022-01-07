import Page2 from "../page2/page2";
import MainComponent from "../mainComponent/mainComponent";
import LoadingButton from "../loadingButton/loadingButton";
import Loader from "../loader/loader";
import LoadingTitle from "../loadingTitle/loadingTitle";
import WelcomeComp from '../welcomeComp/welcomeComp'
import React from "react";
import './app.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import store from "../../utils/store";

const App: React.FC<any> = (props) => {

    return <div className="app">
        <h1 className="title">React Webpack Template</h1>
        <MainComponent/>
        <LoadingButton isLoading={props.isLoading} label='loading'/>
        <LoadingTitle title='App is loading:' isLoading={props.isLoading}/>
        {props.isLoading && <Loader/>}
        <WelcomeComp name={props.name}/>
    </div>
};

const mapStateToProps = (state: Types.State) => {
    return {isLoading: state.isLoading, name: state.name}
}

export default connect(mapStateToProps)(App);