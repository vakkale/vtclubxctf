import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function CrossCountry() {
    //const background = 'https://i.imgur.com/3HLHrbP.jpg';
    const background = 'https://i.imgur.com/1oHONQD.jpg';

    const item = {
        date: "Fall 2023",
        title: "Meet Schedule"
    };

    /* const schedule = [
        {
            title: "2022 NIRCA National Championship",
            url: "https://drive.google.com/file/d/1AdYu8RHwKqs0aGWytA673h1twPjUoOGu/view?usp=sharing"
        },
        {
            title: "2022 NIRCA Mid-Atlantic Regionals",
            url: "https://drive.google.com/file/d/1iCnm5SoYVpMWCabUgG2-5vEfdS5xRkPS/view?usp=sharing"
        },
        {
            title: "Hokie Invitational",
            url: "https://drive.google.com/file/d/1enowVmMkq1Q8nrKEtPYURLmTOUZIiKrS/view?usp=sharing"
        },
        {
            title: "Charlotte McAlpine Trail Race",
            url: "https://drive.google.com/file/d/1W7YMImQzqO53FdQJuBK0XZtmV29q752b/view?usp=sharing"
        },
        {
            title: "Cavalier Invitational",
            url: "https://drive.google.com/file/d/1ptyWQmHvHT-l8y0cvAq6e2CJXw5LjDRR/view?usp=sharing"
        }
    ]; */

    const schedule = [
        {
            title: "Sept. 21 - Cavalier Invitational",
            location: "Panorama Farms: Charlottesville, VA",
            url: "http://results.tfmeetpro.com/Laurence_Loesel/Cavalier_Invitational_92124/"
        },
        {
            title: "Sept. 28 - Hokie Invite",
            location: "Blacksburg High School: Blacksburg, VA",
            url: "http://results.tfmeetpro.com/Laurence_Loesel/Hokie_Invitational_92824/"
        },
        {
            title: "Oct. 5 - VCU Invite",
            location: "Pole Green Park: Mechanicsville, VA",
            url: "http://results.tfmeetpro.com/Laurence_Loesel/VCU_Run_with_the_Rams_Invitational_10524/"
        },
        {
            title: "Oct. 19 - NIRCA Mid-Atlantic Regionals",
            location: "Lehigh University: Bethlehem, PA",
            url: "https://runsignup.com/Race/Results/154924#resultSetId-501335;perpage:100"
        },
        {
            title: "Nov. 9 - NIRCA National Championship",
            location: "Hershey Parkview Cross Country Course: Hershey, PA",
            url: "https://clubrunning.org/races/race_results.php?race=1239"
        }
    ];


    const pageContent =
        <div className="article-content">
            <h3>Find Your Stride!</h3>
            <p>Welcome to VT Club XCTF's Cross Country page! Fall is the season for Cross Country and we compete in a variety of races, from 6k to 8k. Our team is dedicated to pushing ourselves to new limits and achieving success on the national level.</p>
            <p>In 2024, our men's team brought home our 1st national championship at National Intercollegiate Running Club Association (NIRCA) Nationals! Meanwhile in 2023 our women's team placed 3rd, both the highest finishes in club history. Additionally, we've swept the regional championship twice in the last 3 years, showing the .</p>
            <p>We are always looking for dedicated and enthusiastic members to join our team and help us achieve even more success in the future. Whether you're a seasoned veteran or new to the sport, we would love for you to join us on the course.</p>
            <p>Be sure to check this page regularly for updates on meet results and the schedule for upcoming meets. We look forward to seeing you at our next race!</p>
            <div className="img-container">
                <img src="https://i.imgur.com/VmgLf2v.jpg" alt="Men's track and field team celebrating their nationals victory."></img>
            </div>
            <div className="img-container">
                <img src="https://i.imgur.com/NYNi9sf.jpg" alt="Men's track and field team celebrating their nationals victory."></img>
            </div>
        </div >

    return (
        <>
            <PageHeader image={background} title={"Cross Country"} subtitle={"Competition"} yPos={"35%"} />
            <div className="topbar-container" id='topbar'></div>
            <div className="bar-plus-content">
                <div className="page-content">
                    <SideBarLite className="sidebar" item={item} schedule={schedule} records={true}></SideBarLite>
                    <Article className="article" article={pageContent}></Article>
                </div>
            </div>
        </>
    )
}