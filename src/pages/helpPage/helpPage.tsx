import React, {useState, useRef, useEffect} from "react";
import './helpPage.scss';
import apiService from '../../utils/apiService'
import Section from "../../comps/section/section";

const HelpPage: React.FC<any> = (props) => {

    const [forumSections, setForumSections] = useState(null);
    const [threads, setThreads] = useState(null);



    useEffect(() => {
        apiService.getHelpSections().then(forumSections => {
            setForumSections(forumSections);
            let threadsObj = {};
            forumSections.forEach((section: {id: number, name: string}) => {
                apiService.getHelpThreads(section.id).then(threadsObject => {
                    threadsObj = {...threadsObj, [section.id]: threadsObject?.threads}
                    if(Object.keys(threadsObj).length === forumSections.length) {
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
                return <Section key={index} type={'help'} data={forumSection} threads={threadsProps}/>
            }) : null
        }
    </div>
};

export default HelpPage;