import './Training.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";
import planData from "../data/plansData";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import TrainingPlan from '../modules/TrainingPlan';

export default function Training() {

    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    const segments = pathname.split('/').filter(Boolean);
    const teamName = segments[1] || planData[0].url;
    const planName = segments[2] || planData[0].plans[0].url;

    const resolvedTeam = planData.find(team => team.url === teamName) || planData[0];
    const resolvedPlan = resolvedTeam.plans.find(plan => plan.url === planName) || resolvedTeam.plans[0];

    //sets the team as the first team in the array
    const [team, setTeam] = useState(resolvedTeam);

    //set the plan as the first plan in the array
    const [plan, setPlan] = useState(resolvedPlan);

    // declare calendar variable. initially set to false
    const [calendar, setCalendar] = useState(Boolean(resolvedPlan.calendar));

    //set plan as the plan that matches the url
    useEffect(() => {
        const foundTeam = planData.find(team => team.url === teamName) || planData[0];
        const foundPlan = foundTeam.plans.find(plan => plan.url === planName) || foundTeam.plans[0];

        if (!foundPlan) {
            navigate("/training/" + foundTeam.url + "/" + foundTeam.plans[0].url);
            return;
        }

        setCalendar(Boolean(foundPlan.calendar));
        setTeam(foundTeam);
        setPlan(foundPlan);
        setSortedTeams(foundTeam);
    }, [planName, teamName, navigate]);

    // Array of filters for the ArticleSorter component
    //MASSIVE TIME SINK, FIX LATER
    const filters = ['title'];
    // Set the sorted articles to send to the SideBar component
    const [sortedTeams, setSortedTeams] = useState(team);

    // Callback function to handle sorted articles
    const handleSortedTeams = plansSorted => {
        if (!plansSorted || !plansSorted[0]) return;
        navigate("/training/" + team.url + "/" + plansSorted[0].url);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    return (
        <>
            <PageHeader image={team.image} title={team.team} yPos={team.yPos} subtitle="Training" />
            {
                isMobile ?
                    <TopBar articles={sortedTeams.plans} filters={filters} onSort={handleSortedTeams}></TopBar>
                    : <div className='topbar-container' id='topbar'></div>
            }
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={sortedTeams.plans} size="small"></SideBar>
                    {(plan && calendar) ? <TrainingPlan className="plan" sheetID={plan.sheetID} sheets={plan.sheets}></TrainingPlan>
                        : (plan && !calendar) ? <Article className="article" article={plan.content} image={plan.image}></Article>
                        : <Article className="article" article={<></>} image={""}></Article>}
                </div>
            </div>
        </>
    );
}