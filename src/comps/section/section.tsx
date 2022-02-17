import React, {useState, useRef, useEffect} from "react";
import './section.scss';
import SectionOpener from '../../assets/svg/section-opener.svg'
import apiService from '../../utils/apiService'
import Thread from "../thread/thread";
import Loader from "../loader/loader";

const Section: React.FC<any> = ({data, threads, type}) => {


    const {id, name} = data;

    // console.log(id, threads)

    const [sectionOpen, setSectionOpen] = useState(false);
    const [showAll, setShowAll] = useState(false)


    const sectionName = 'Раздел ' + id + '. ' + name;

    return <div className={`forum` + `${sectionOpen ? ' open' : ''}`}>
        <div className="forum-section">
            <div className="forum-section-title">
                <div className={`forum-section-trigger` + `${sectionOpen ? ' open' : ''}`} onClick={() => {
                    setSectionOpen(!sectionOpen)
                }}>
                    <img className="forum-section-trigger-img" src={SectionOpener} alt=""/>
                </div>
                <div className="forum-section-name" onClick={() => {
                    setSectionOpen(!sectionOpen)
                }}>{sectionName}</div>
            </div>
            {type && type === 'home' && <>
                <div className="forum-section-messages-title">{sectionOpen ? 'Сообщения пользователей' : null}</div>
                <div className="forum-section-rating-title">{sectionOpen ? 'Рейтинг темы' : null}</div>
                </>}
            {type && type === 'home' && <button className="create-section-button" onClick={() => {
                console.log(id)
            }}>Создать тему/подраздел +
            </button>}
        </div>
        {sectionOpen && <div className="forum-threads">
            {sectionOpen && threads && threads.length === 0 && <div className="no-threads">Нет тем</div>}
            {sectionOpen && !threads && <Loader/>}
            {sectionOpen && threads && threads.map((thread: any, index: number) => {
                if (!showAll && index > 2) {
                    return;
                }
                return <Thread key={index} type={type} thread={thread}/>
            })}
            {threads && threads.length > 0 && <div className="show-all" onClick={() => {
                setShowAll(!showAll)
            }}>{showAll ? 'Свернуть' : 'Показать всё'}</div>}
        </div>}

    </div>
};

export default Section;