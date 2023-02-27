import './Records.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Parser from './Parser';

export default function Records() {
    const page_props = {
        title: "Records",
        subtitle: "Competition",
        background: 'hhttps://i.imgur.com/yRhfhOL.jpg',
        yPos: "30%"
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, []);

    /*

    const location = useLocation();
    const pathname = location.pathname;
    const routeName = pathname.substring(pathname.lastIndexOf('/') + 1);

    //set article as state
    const [route, setRoute] = useState(recordData[0]);

    //set article to the article that matches the url
    useEffect(() => {
        if (routeName !== '')
            setRoute(routeData.find(route => route.url === routeName));
        else
            setRoute(recordData[0]);
    }, [routeName]); */

    // Array of filters for the ArticleSorter component
    const [filters, setFilters] = useState(['title']);
    // Set the sorted articles to send to the SideBar component
    const [sortedArticles, setSortedArticles] = useState(recordData);

    // Callback function to handle sorted articles
    const handleSortedRecords = articlesSorted => {
        setSortedArticles(articlesSorted);
        if (isMobile)
            setRecordData(articlesSorted[0]);
    };

    //before doing anything, parse the data
    const [recordData, setRecordData] = useState([]);
    useEffect(() => {
        Parser().then(data => {
            setRecordData(data);
        }).then(() => {
            console.log(recordData);
        });
    }, []);

    const Accordion = (event) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="accordion" onClick={() => setIsOpen(!isOpen)}>
                <div className="accordion-title">{event.name}</div>
                {
                    isOpen &&
                    <>
                        <div className="accordion-header">
                            <div className="accordion-header-item">No.</div>
                            <div className="accordion-header-item">Meet</div>
                            <div className="accordion-header-item">Year</div>
                            <div className="accordion-header-item">Athlete</div>
                            <div className="accordion-header-item">Time</div>
                        </div>
                        {
                            event.records.map((item, index) => {
                                return (
                                    <AccordionItem key={index} item={item} />
                                )
                            })}
                    </>
                }
            </div>
        )
    }

    const AccordionItem = ({ record }) => {

        return (
            <div className="accordion-item">
                <div className="accordion-item-number">{record.number}</div>
                <div className="accordion-item-meet">{record.meet}</div>
                <div className="accordion-item-year">{record.year}</div>
                <div className="accordion-item-athlete">{record.athlete}</div>
                <div className="accordion-item-time">{record.time}</div>
            </div>
        );
    }

    const Page = () => {
        return (
            <div className="page">
                {
                    recordData.map((event, index) => {
                        return (
                            <Accordion key={index} event={event} />
                        )
                    })
                }
            </div>
        );
    }

    Parser().then(data => {
        setRecordData(data).then(() => {
            return (
                <>
                    <PageHeader
                        image={page_props.background}
                        title={page_props.title}
                        subtitle={page_props.subtitle}
                        yPos={page_props.yPos}
                    />
                    {isMobile ? <TopBar articles={recordData} filters={filters} onSort={handleSortedRecords}></TopBar>
                        : <div className="topbar-container" id='topbar'></div>}
                    <div className="bar-plus-content">
                        <div className="page-content">
                            <SideBar className="sidebar" data={recordData} size="big"></SideBar>
                            <Page></Page>
                        </div>
                    </div>
                </>
            );
        });
    });
}