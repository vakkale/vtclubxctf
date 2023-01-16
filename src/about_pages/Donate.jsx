import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function Donate() {
    const background = 'https://i.imgur.com/YpOCN8n.jpg';

    const item = {
        title: "Donate",
        date: "Support Us"
    };

    const pageContent =
        <div className="article-content">
            <h3>We couldn't do this without your support.</h3>
            <p>As a VT Sport Club, we receive the majority of our funding through dues and donations.</p>
            <p>Thanks to your generous donations, we've been able to keep dues among the lowest in the VT Sport Club community. We've also been able to send our teams to compete at the national level, including the 2022 NIRCA Track & Field Championship, where we brought home the club's first national title.</p>
            <p>
                To continue to support the success of the club, please consider making a tax-deductible donation through our <a href="https://crowdfund.vt.edu/project/24486" target="_blank" rel="noreferrer">CrowdFund Project</a>.
            </p>
            <div className="img-container">
                <img src="https://i.imgur.com/YjqVVNA.jpg" alt="Women's XC team celebrating after winning regionals." />
            </div>
        </div>

    return (
        <>
            <PageHeader image={background} title={"Support Us"} subtitle={""} yPos={"15%"} />
            <div className="topbar-container" id='topbar'></div>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBarLite className="sidebar" item={item}></SideBarLite>
                    <Article className="article" article={pageContent}></Article>
                </div>
            </div>
        </>
    )
}