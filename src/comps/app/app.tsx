import Comp1 from "../comp1/comp1";
import Comp2 from "../comp2/comp2";
import LoadingButton from "../loadingButton/loadingButton";
import LoadingTitle from "../loadingTitle/loadingTitle";
import React from "react";
import './app.scss';
import {Store} from '../../utils/types'
import {connect} from 'react-redux'
import store from "../../utils/store/store";

const App: React.FC<any> = (props) => {

    return <div className="app">React Webpack
                <Comp1/>
                <Comp2/>
                <LoadingButton label='switch loading'/>;
                <LoadingTitle title = 'App is loading:' isLoading={props.isLoading}/>
                 {props.isLoading && <div>spinner</div>}
        <a href='/comp1'>link</a>
            </div>
};

const mapStateToProps = (state: Store.State) => {
    return {isLoading: state.isLoading}
}

export default connect(mapStateToProps)(App);