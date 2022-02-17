import React, {useState, useRef, useEffect} from "react";
import './threadMessage.scss';
import SectionOpener from'../../assets/svg/section-opener.svg'
import apiService from '../../utils/apiService'
import Loader from "../loader/loader";
import MessagesPic from '../../assets/svg/messages.svg';
import Like from '../../assets/svg/like.svg';
import Dislike from '../../assets/svg/dislike.svg';
import Pencil from '../../assets/svg/pencil.svg';
import Clip from '../../assets/svg/clip.svg';
import Garbage from '../../assets/svg/garbage.svg';
import {useNavigate} from "react-router";
import AuthorCard from "../authorCard/authorCard";
import ThreadAnswer from "../threadAnswer/threadAnswer";

const ThreadMessage: React.FC<any> = ({message}) => {

    const navigate = useNavigate();
    const {messageId, author, messageText, date, answers, likes, unlikes} = message;

    return <div className='thread-message-wrapper'>
        <div className='thread-message'>
            <div className="author-card__wrapper">
                <AuthorCard author={author}/>
            </div>
            <div className="messages">
                <div className="messages-main">
                    <div className="messages-main__header">
                        <div className="messages-main__header__date">{date}</div>
                        <div className="messages-main__header__pencil-wrapper">
                            <img src={Pencil} alt=""/>
                        </div>
                        <div className="messages-main__header__garbage-wrapper">
                            <img src={Garbage} alt=""/>
                        </div>
                    </div>
                    <div className="messages-main__text">{messageText}</div>
                    <div className="messages-main__footer">
                        <div className="clip-wrapper">
                            <img src={Clip} alt=""/>
                        </div>
                        <div className="messages-main__footer__stats">
                            <div className="like-wrapper">
                                <div className="img-wrapper">
                                    <img src={Like} alt=""/>
                                </div>
                                <div className="stats">{likes}</div>
                            </div>
                            <div className="dislike-wrapper">
                                <div className="img-wrapper">
                                    <img src={Dislike} alt=""/>
                                </div>
                                <div className="stats">{unlikes}</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="answers">
            {answers && answers.map((answer: any, index: number) => {
                return <ThreadAnswer key={index} answer={answer}/>
            })}
        </div>
    </div>
};

export default ThreadMessage;