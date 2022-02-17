import React, {useState, useRef, useEffect} from "react";
import './threadAnswer.scss';
import SectionOpener from '../../assets/svg/section-opener.svg'
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

const ThreadAnswer: React.FC<any> = ({answer}) => {


    const navigate = useNavigate();
    const {answerId, answerAuthor, answerText, date, likes, unlikes} = answer;

    return <div className='thread-answer'>
        <div className="thread-answer__message">
            {answerText}
            {/*<div className="thread-answer__message__text"></div>*/}


        </div>
        <div className="thread-answer__footer">
            <div className="thread-answer__footer__sign">
                <div className="thread-answer__footer__sign__author">{answerAuthor}</div>
                <div className="thread-answer__footer__sign__date">{date}</div>
            </div>
            <div className="thread-answer__footer__stats">
                <div className="pencil-wrapper">
                    <img src={Pencil} alt=""/>
                </div>
                <div className="garbage-wrapper">
                    <img src={Garbage} alt=""/>
                </div>
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
};

export default ThreadAnswer;