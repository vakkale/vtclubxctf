import './Records.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import SideBarLite from '../modules/SideBarLite';
import Article from '../modules/Article';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Parser from './Parser';
import { async } from '@firebase/util';

export default function Records() {
    const page_props = {
        title: "Records",
        subtitle: "Competition",
        background: 'https://i.imgur.com/yRhfhOL.jpg',
        yPos: "30%"
    };

    const item = {
        date: "Men's Track and Field All-Time Top 10",
        title: "List of Events",
    }

    let schedule = [
        {
            title: "Placeholder",
            location: "Also Placeholder"
        }
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [recordData, setRecordData] = useState([]);
    /* 
        Page Indices:
        0 - Records
        1 - Men's Track and Field Top 10
        2 - Women's Track and Field Top 10
        3 - Men's Cross Country Top 10
        4 - Women's Cross Country Top 10
    */
    const [page, setPage] = useState([]);

    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        const pathArray = path.split('/');
        const pageName = pathArray[pathArray.length - 1];
        let pageIndex = 0;
        switch (pageName) {
            case 'records':
                pageIndex = 1;
                break;
            case 'mens-track-and-field':
                pageIndex = 1;
                break;
            case 'womens-track-and-field':
                pageIndex = 2;
                break;
            case 'mens-cross-country':
                pageIndex = 3;
                break;
            case 'womens-cross-country':
                pageIndex = 4;
                break;
            default:
                pageIndex = 0;
                break;
        }
        setPage(recordData[pageIndex]);
    }, [recordData]);

    useEffect(() => {
        // Check if mobile
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }

        // Get record data
        Parser().then(async (data) => {
            setRecordData(data);
        })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const Accordion = ({ event }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <div
                    className={`accordion-title ${isOpen ? "title-open" : "title-closed"}`}
                    onClick={() => setIsOpen(!isOpen)}
                    id={event.name}
                >
                    <span>{event.name}</span>
                    <span>
                        {!isOpen && <i className="material-symbols-outlined">add</i>}
                        {isOpen && <i className="material-symbols-outlined">remove</i>}
                    </span>
                </div>
                {
                    isOpen &&
                    <table className="accordion">
                        <tr className="accordion-header">
                            <th className="accordion-header-item" width="10%">No.</th>
                            <th className="accordion-header-item" width="45%">Meet</th>
                            <th className="accordion-header-item" >Year</th>
                            <th className="accordion-header-item" width="30%">Athlete</th>
                            <th className="accordion-header-item" >Time</th>
                        </tr>
                        {
                            event.records.map((item, index) => {
                                return (
                                    <AccordionItem key={index} record={item} />
                                )
                            })
                        }
                    </table>
                }
            </>
        )
    }

    const AccordionItem = ({ record }) => {
        return (
            <tr className="accordion-item">
                <td className="accordion-item-number">{record.number}</td>
                <td className="accordion-item-meet">{record.meet}</td>
                <td className="accordion-item-year">{record.year}</td>
                <td className="accordion-item-athlete">{record.athlete}</td>
                <td className="accordion-item-time">{record.time}</td>
            </tr>
        );
    }

    // Expand/Collapse all button
    const ExpandController = () => {
        return (
            <div className='title-buttons'>
                <div className="title">{page.title}</div>
                {
                    recordData.length > 0 &&
                    <div className="expand-collapse">
                        <button className="expand-collapse-button" onClick={() => {
                            // Finds all accordion titles and clicks them if they are closed
                            let acc = document.getElementsByClassName("accordion-title");
                            for (let i = 0; i < acc.length; i++) {
                                if (acc[i].classList.contains("title-closed")) {
                                    acc[i].click();
                                }
                            }
                        }}>Expand All</button>
                        <button className="expand-collapse-button" onClick={() => {
                            // Finds all accordion titles and clicks them if they are open
                            let acc = document.getElementsByClassName("accordion-title");
                            for (let i = 0; i < acc.length; i++) {
                                if (acc[i].classList.contains("title-open")) {
                                    acc[i].click();
                                }
                            }
                        }}>Collapse All</button>
                    </div>
                }
            </div>
        );
    }


    const PageContent = () => {
        return (
            <div className="page">
                {<ExpandController />}
                {
                    recordData.length > 0 &&
                    page.data.map((event, index) => {
                        return (
                            <Accordion key={index} event={event} />
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <PageHeader
                image={page_props.background}
                title={page_props.title}
                subtitle={page_props.subtitle}
                yPos={page_props.yPos}
            />
            <div className="topbar-container" id='topbar'></div>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBarLite className="sidebar" item={item} schedule={schedule}></SideBarLite>
                    {!page && <div className="loading">Loading...</div>}
                    {page &&
                        <Article className="article"
                            article={<PageContent />}
                            size={"full"}
                            image={"https://i.imgur.com/aZntB0c.jpg"}
                        ></Article>}
                </div>
            </div>
        </>
    );
}