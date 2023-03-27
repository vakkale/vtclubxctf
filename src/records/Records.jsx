import './Records.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import SideBarLite from '../modules/SideBarLite';
import Article from '../modules/Article';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Parser from './Parser';

export default function Records() {
    const page_props = {
        title: "Records",
        subtitle: "Competition",
        background: 'https://i.imgur.com/yRhfhOL.jpg',
        yPos: "30%"
    };

    const item = {
        date: "Top Text",
        title: "Bottom Text"
    }

    const schedule = [
        {
            title: "Placeholder",
            location: "Also Placeholder"
        }
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [recordData, setRecordData] = useState([]);

    useEffect(() => {
        // Check if mobile
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }

        // Get record data
        Parser().then((data) => {
            setRecordData(data);
            console.log(recordData[1].data)
        })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const Accordion = ({ event }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>{event.name}</div>
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

    const PageContent = () => {
        return (
            <div className="page">
                {
                    recordData[1].data.map((event, index) => {
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
                    {recordData.length === 0 && <div className="loading">Loading...</div>}
                    {recordData.length > 0 && <Article className="article" article={<PageContent />}></Article>}
                </div>
            </div>
        </>
    );
}