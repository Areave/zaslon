import React, {useState, useRef} from 'react'
import {connect} from 'react-redux'
import {setWelcome} from "../../../utils/store/actionCreators";
import {Types} from '../../../utils/types'
import './welcomeComp.scss'


const WelcomeComp: React.FC<Types.WelcomeCompProps> = (props) => {
    const nameInput = useRef(null);
    const setName = () => {
        props.setWelcome(nameInput.current.value)
    }
    return <div className='welcomeComp'>
        <div className="inputWrapper">
            <input ref={nameInput} type='text' onInput={setName}/>
            <div className="name">you type: {props.name}</div>
        </div>
        <a href='/page2'>go to page 2</a>
    </div>
}

const mapDispatchToProps = {setWelcome}

export default connect(null, mapDispatchToProps)(WelcomeComp)