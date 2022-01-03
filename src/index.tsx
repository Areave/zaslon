import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Comp1 from './comps/comp1/comp1';
import Comp2 from './comps/comp2/comp2';
import './style.scss'


console.log('new year');


const Element = () => {
    return <div className="app">React Webpack
        <Comp1/>
        <Comp2/>
    </div>
}

ReactDOM.render(<Element/>, document.getElementById('app'));

