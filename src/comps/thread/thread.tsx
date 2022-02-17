import React, {useState, useRef, useEffect} from "react";
import './thread.scss';
import SectionOpener from'../../assets/svg/section-opener.svg'
import apiService from '../../utils/apiService'
import Loader from "../loader/loader";
import MessagesPic from '../../assets/svg/messages.svg';
import LikePic from '../../assets/svg/like.svg';
import {useNavigate} from "react-router";

const Thread: React.FC<any> = ({thread, type}) => {



    const navigate = useNavigate();
    const {id, name, rating, messagesAmount, threadNum} = thread;

    const threadName = 'Тема ' + threadNum + '. ' + name;
    let onClickFunction;
    switch (type) {
        case 'home': onClickFunction = ()=>{navigate('/discussion/' + id)};
        break;
        case 'help': onClickFunction = ()=>{console.log('clicked', id)};
        break;
    }


    return <div className='thread'>
        <div className="thread-name" onClick={onClickFunction}>{threadName}</div>
        {type && type === 'home' && <>
            <div className="thread-messages">
                <div className="messages-amount">{messagesAmount}</div>
                <img src={MessagesPic} alt="" className="messages-ico"/>
            </div>
            <div className="thread-rating">
                <div className="rating-amount">{rating}</div>
                <img src={LikePic} alt="" className="rating-ico"/>
            </div>
            <button className="thread-subscribe-button" onClick={() => {
                console.log(name)
            }}>Подписаться</button>
        </>}
    </div>
};

export default Thread;