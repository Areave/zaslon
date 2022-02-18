import React, {useEffect, useState} from "react";
import './profilePage.scss';
import {useParams} from "react-router";
import apiService from "../../utils/apiService";
import Loader from "../../comps/loader/loader";
import {message} from "memfs/lib/internal/errors";
import ThreadMessage from "../../comps/threadMessage/threadMessage";
import AuthorCard from "../../comps/authorCard/authorCard";
import AuthorInfo from "../../comps/authorInfo/authorInfo";

const ProfilePage: React.FC<any> = () => {

    let id = +useParams().id;
    const [profile, setProfile] = useState(null);

    useEffect(()=>{
        apiService.getProfileInfo(id).then(profile => {
            setProfile(profile)
        })
    }, [])

    if (!profile) return <Loader/>

    const {name, role, image, messagesAmount, reputation, registrationDate, about, scills, describeAmount, themesAmount, answers} = profile;
    const author = {id, name, role, image, messagesAmount, reputation};
    const info = {registrationDate, about, scills, themesAmount, describeAmount, answers};

    return <div className="profile-page">
        <div className="profile-page__header">
            <div className="profile-name">Профиль</div>
        </div>
        <div className="profile-page__profile">
            <div className="profile-page__profile__author-card-wrapper">
                <AuthorCard author={author}/>
            </div>
            <div className="profile-page__profile__author-info-wrapper">
                <AuthorInfo info={info}/>
            </div>



        </div>


    </div>
};

export default ProfilePage;