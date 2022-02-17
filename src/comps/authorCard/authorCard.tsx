import React, {useState, useRef, useEffect} from "react";
import './authorCard.scss';
import {useNavigate} from "react-router";
import AuthorPicture from '../../assets/stubPictures/review3.jpg';

const AuthorCard: React.FC<any> = ({author}) => {

    const navigate = useNavigate();



    const {id, name, image, role, messagesAmount, reputation} = author;

    return <div className='author-card'>
        <div className="author-card__name" onClick={()=>{navigate('/profile/' + id)}}>{name}</div>
        <div className="author-card__image-wrapper">
            <img src={AuthorPicture} alt=""/>
        </div>
        <div className="author-card__info">
            <div className="autho-card__info__role">Роль: {role}</div>
            <div className="author-card__info__messages-amount">Сообщений: {messagesAmount}</div>
            <div className="author-card__info__reputation">Репутация: {reputation}</div>
        </div>

    </div>
};

export default AuthorCard;