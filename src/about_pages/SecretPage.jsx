import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function SecretPage() {
    const background = 'https://i.imgur.com/pF4i12t.jpg';

    const item = {
        title: "Secret Page",
        date: ""
    };

    const pageContent =
        <div className="article-content">
            <h3>In honor of Aimee Straka, Webmaster 2021-2022</h3>
            <p>Aimee,</p>
            <p>Thank you for teaching me the ropes. Being webmaster was my first leadership role in club and I don't think I would be where I am today if not for this position. You made it seem like so much fun to be in charge of the website and gave me the confidence I needed to build my own.</p>
            <p>With your time with club coming to an end, I wanted to let you know that your impact will be remembered for years and years to come. Thank you for all of the Halloween parties. Thank you for being a cool oldhead that people can look up to. And thank you for bringing good vibes to practice. We will miss you.</p>
            <p>Best,</p>
            <p>Volkan</p>
            <h3>Records (more coming soon)!!</h3>
            <p>Midnight Mile:</p>
            <p>Matthew Miller - 4:32 - 2023</p>
            <p>Sydney Szabos - 5:27 - 2023</p>
            <p></p>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Congrats Aimee!!"} subtitle={"This Page Doesn't Exist"} yPos={"10%"} />
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