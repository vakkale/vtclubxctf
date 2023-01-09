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
    const planName = pathname.substring(pathname.lastIndexOf('/') + 1);

    //set teamName to the part of the url before the last / but after the second /
    const teamName = pathname.substring(pathname.indexOf('/', 1) + 1, pathname.lastIndexOf('/'));

    //sets the team as the first team in the array
    const [team, setTeam] = useState(planData.find(team => team.url === teamName));

    //set the plan as the first plan in the array
    const [plan, setPlan] = useState(
        planName !== ''
            ? team.plans.find(plan => plan.url === planName)
            : team.plans[0]
    );

    //set plan as the plan that matches the url
    useEffect(() => {
        setTeam(planData.find(team => team.url === teamName));
        setPlan(team.plans.find(plan => plan.url === planName));
        setSortedTeams(team);
    }, [planName, teamName, team]);

    // Array of filters for the ArticleSorter component
    //MASSIVE TIME SINK, FIX LATER
    const filters = [''];
    // Set the sorted articles to send to the SideBar component
    const [sortedTeams, setSortedTeams] = useState(team);

    // Callback function to handle sorted articles
    const handleSortedTeams = plansSorted => {
        setSortedTeams(plansSorted);
    };

    useEffect(() => {
        navigate("/training/" + sortedTeams.url + "/" + sortedTeams.plans[0].url);
    }, [sortedTeams]);

    return (
        <>
            <PageHeader image={team.image} title={team.team} yPos={team.yPos} subtitle="Training" />
            <TopBar articles={planData} filters={filters} onSort={handleSortedTeams}></TopBar>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={sortedTeams.plans} size="small"></SideBar>
                    {plan ? <TrainingPlan className="plan" sheetID={plan.sheetID} sheets={plan.sheets}></TrainingPlan>
                        : <Article className="article" article={<></>} image={""}></Article>}
                </div>
            </div>
        </>
    );
}