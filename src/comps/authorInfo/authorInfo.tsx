import React, {useState, useRef, useEffect} from "react";
import './authorInfo.scss';
import {useNavigate} from "react-router";
import Pencil from "../../assets/svg/pencil.svg";
import Garbage from "../../assets/svg/garbage.svg";

const AuthorInfo: React.FC<any> = ({info}) => {

    const navigate = useNavigate();

    const {registrationDate, about, scills, describeAmount, themesAmount, answers} = info;

    console.log(info)

    return <div className='info-card'>
        <div className="info-card__header">
            <div className="info-card__header__date">{'Дата регистрации: ' + registrationDate}</div>
        </div>
        <div className="info-card__info">
            <div className="info-card__info__main">
                <div className="about-yourself">О себе:</div>
                <div className="text">{about}</div>
            </div>
            <div className="info-card__info__links">
                <div className="describeAmount">{'Количество подписок: ' + describeAmount}</div>
                <div className="themesAmount">{'Начатые темы: ' + themesAmount}</div>
                <div className="answers">{'Ответы: ' + answers}</div>
            </div>
            <div className="info-card__info__footer">
                <div className="info-card__info__footer__scills">Навыки:
                    {scills && scills.map((scill: any, index: number)=>{
                        return <div className='scill' key={index}>{scill}</div>
                    })}
                </div>
            </div>
        </div>

    </div>

};

export default AuthorInfo;