import './Training.scss';
import PageHeader from "../modules/PageHeader";
import TopBar from "../modules/TopBar";
import SideBar from "../modules/SideBar";
import Article from "../modules/Article";
import planData from "../data/plansData";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import TrainingPlan from '../modules/TrainingPlan';

export default function Training() {

    const location = useLocation();
    const pathname = location.pathname;
    const planName = pathname.substring(pathname.lastIndexOf('/') + 1);

    //set teamName to the part of the url before the last / but after the second /
    const teamName = pathname.substring(pathname.indexOf('/', 1) + 1, pathname.lastIndexOf('/'));

    //sets the team as the first team in the array
    const [team, setTeam] = useState(planData[0]);

    //set the plan as the first plan in the array
    const [plan, setPlan] = useState(team.plans[0]);

    //set plan as the plan that matches the url
    useEffect(() => {
        setTeam(planData.find(team => team.url === teamName));
        setPlan(team.plans.find(plan => plan.url === planName));
        setSortedPlans(team.plans);
    }, [planName, teamName, team.plans]);

    // Array of filters for the ArticleSorter component
    const filters = ['year', 'season', 'title'];
    // Set the sorted articles to send to the SideBar component
    const [sortedPlans, setSortedPlans] = useState(team.plans);

    // Callback function to handle sorted articles
    const handleSortedArticles = plansSorted => {
        setSortedPlans(plansSorted);
    };

    useEffect(() => {
        console.log(planName);
        console.log(teamName);
        console.log(plan);
    }, [plan]);

    return (
        <>
            <PageHeader image={team.image} title={team.title} subtitle="Training" />
            <TopBar articles={team.plans} filters={filters} onSort={handleSortedArticles}></TopBar>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBar className="sidebar" data={sortedPlans} size="small"></SideBar>
                    {plan ? <TrainingPlan className="plan" sheetID={plan.sheetID} sheets={plan.sheets}></TrainingPlan>
                        : <Article className="article" article={<></>} image={""}></Article>}
                </div>
            </div>
        </>
    );
}