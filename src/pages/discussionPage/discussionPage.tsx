import React, {useEffect, useState} from "react";
import './discussionPage.scss';
import {useParams} from "react-router";
import apiService from "../../utils/apiService";
import Loader from "../../comps/loader/loader";
import {message} from "memfs/lib/internal/errors";
import ThreadMessage from "../../comps/threadMessage/threadMessage";

const DiscussionPage: React.FC<any> = () => {

    let id = +useParams().id;
    const [thread, setThread] = useState(null);

    useEffect(()=>{
        apiService.getThread(id).then(thread => {
            setThread(thread)
        })
    }, [])

    if (!thread) return <Loader/>

    const threadName = 'Тема ' + thread.threadNum + '. ' + thread.name;

    return <div className="discussion-page">
        <div className="discussion-page__header">
            <div className="tread-name">{threadName}</div>
            <div className="ask-question">Задать вопрос</div>
        </div>
        {thread.messages.map((message: any, index: number) => {
            return <ThreadMessage key={index} message={message}/>
        })}
    </div>
};

export default DiscussionPage;