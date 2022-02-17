import React, {useState, useRef, useEffect} from "react";
import './homePage.scss';
import apiService from '../../utils/apiService'
import Section from "../../comps/section/section";

const HomePage: React.FC<any> = (props) => {

    const [forumSections, setForumSections] = useState(null);
    const [threads, setThreads] = useState(null);



    useEffect(() => {
        apiService.getSections().then(forumSections => {
            setForumSections(forumSections);
            let threadsObj = {};
            // console.log(forumSections);
            forumSections.forEach((section: {id: number, name: string}) => {
                apiService.getThreads(section.id).then(threadsObject => {
                    // console.log(threadsObject?.threads);
                    threadsObj = {...threadsObj, [section.id]: threadsObject?.threads}
                    if(Object.keys(threadsObj).length === forumSections.length) {
                        // console.log(threadsObj)
                        setThreads(threadsObj);
                    }

                })
            })
        });
    }, []);


    return <div className="home-page">
        {
            forumSections ? forumSections.map((forumSection: any, index: number) => {
                const threadsProps = threads && threads[forumSection.id] ? threads[forumSection.id] : [];
                return <Section key={index} type={'home'} data={forumSection} threads={threadsProps}/>
            }) : null
        }
    </div>
};

export default HomePage;