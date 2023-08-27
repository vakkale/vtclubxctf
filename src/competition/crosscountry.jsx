import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function CrossCountry() {
    const background = 'https://i.imgur.com/3HLHrbP.jpg';

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
            title: "Sept. 16 - Cavalier Invitational",
            location: "Panorama Farms: Charlottesville, VA",
        },
        {
            title: "Sept. 30 - Charlotte McAlpine Trail Race",
            location: "McAlpine Creek Park: Charlotte, NC",
        },
        {
            title: "Oct. 14 - Hokie Invitational",
            location: "Blacksburg High School: Blacksburg, VA",
        },
        {
            title: "Oct. 21 - NIRCA Mid-Atlantic Regionals",
            location: "Lehigh University: Bethlehem, PA",
        },
        {
            title: "Nov. 11 - NIRCA National Championship",
            location: "Blue River Cross Country Course: Shelbyville, IN"
        }
    ];


    const pageContent =
        <div className="article-content">
            <h3>Find Your Stride!</h3>
            <p>Welcome to VT Club XCTF's Cross Country page! Fall is the season for Cross Country and we compete in a variety of races, from 6k to 8k. Our team is dedicated to pushing ourselves to new limits and achieving success on the national level.</p>
            <p>In 2022, our men's team brought home 3rd place at the National Intercollegiate Running Club Association (NIRCA) National Championship while the women's team placed 5th, both the highest finish in club history. Additionally, we swept the regional championship, a historic achievement for the club.</p>
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