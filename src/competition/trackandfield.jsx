import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function TrackAndField() {
  const background = "https://i.imgur.com/7h1tvnX.jpg";

  const item = {
    date: "Spring 2026",
    title: "Meet Results",
  };

  const schedule = [
    {
      title: "Jan 23-24 - Liberty Open",
      location: "Liberty University, Lynchburg, VA",
      url: "https://www.tfrrs.org/results/92677/2026_Liberty_Open"
    },
    {
      title: "Feb 14 - VMI Winter Classic",
      location: "Virginia Military Institute, Lexington, VA",
      url: "https://vmikeydets.com/documents/2026/2/16/2026_winter_classic_results.pdf"
    },
    {
        title: "Feb 28 - Club Relays",
        location: "University of Illinois, Urbana-Champaign, IL",
        url: "https://il.milesplit.com/meets/731404-illinois-club-relays-2026/results/1302595/raw"
    },
    {
      title: "Mar 21 - Hokie Invitational",
      location: "Blacksburg High School, Blacksburg, VA",
      url: "https://snapresults.snaptiming.com/meets/64341?_gl=1*1kk0vcq*_ga*MTg1MzIwMzE1MS4xNzg2OTExNjg0*_ga_CV6QCFM8SJ*czE3ODY5MTE2ODMkbzEkZzEkdDE3ODY5MTE2OTgkajU0JGwwJGgw"
    },
    {
        title: "Mar 27-28 - Jack M. Toms Invitational",
        location: "Lynchburg College, Lynchburg, VA",
        url: "https://www.tfrrs.org/results/94777/Dr_Jack_M_Toms_Alumni_Invitational"
    },
    {
        title: "Apr 11-12 - NIRCA Nationals",
        location: "University of Olivet, Olivet, MI",
        url: "https://clubrunning.org/races/race_results.php?race=1449"
    },
     {
        title: "Apr 24-25 - John Weaver Invitational",
        location: "Appalachian State University, Boone, NC",
        url: "https://www.tfrrs.org/results/93755/John_Weaver_Invitational/"
     }
     /* { No idea what yar this is maybe 2023?
            title: "Feb. 11 - Happy Valley Invitational",
            location: "Penn State University, State College, PA",
            url: "https://drive.google.com/file/d/16mPZ-8OCI3kTlnAFQ8gOAeJ_lrTu-dST/view?usp=sharing"
        },
        {
            title: "Mar. 18 - Hokie Track Invitational",
            location: "Blacksburg High School, Blacksburg, VA",
            url: "https://drive.google.com/file/d/1Oir8Pu32xVJq3xj3En1yeTC5OS0573eW/view?usp=sharing"
        },
        {
            title: "Mar. 25 - Dr. Jack M. Toms Alumni Invitational",
            location: "University of Lynchburg, Lynchburg, VA",
            url: "https://drive.google.com/file/d/1ohJvxoUKM_4eNl4DJB5y0FHNSGVBuf3i/view?usp=share_link"
        },
        {
            title: "Apr. 8 - Wildcat Track Festival",
            location: "Randolph College, Lynchburg, VA",
            url: "https://drive.google.com/file/d/1qLYDsT3Cvu48lIrLvHCSwm-EeQRzvEj4/view?usp=sharing"
        },
        {
            title: "Apr. 15-6 - NIRCA Track & Field Nationals",
            location: "Olivet College, Olivet, MI",
            url: "http://milesplit.live/meets/541522"
        },
        {
            title: "Apr. 22 - Wildcat Twilight",
            location: "Randolph College, Lynchburg, VA",
            url: "https://www.tfrrs.org/results/75515/WildCat_Twilight"
        } */
      /* { Spring 2024
      title: "Feb 10 - Happy Valley Invitational",
      location: "Penn State University, State College, PA",
      url: "https://drive.google.com/file/d/1NbU7vqtqQj7zSpfpNHjSUo0XBjr3rMZu/view?usp=sharing"
    },
    {
      title: "Mar 16 - Hokie Invite",
      location: "Blacksburg High School, Blacksburg, VA",
      url: "http://results.tfmeetpro.com/Laurence_Loesel/Hokie_Track_Invitational_31624/"
    }
      {
        title: "Mar 22-23 - Dr. Jack M. Toms Invitational",
        location: "University of Lynchburg, Lynchburg, VA",
        url: "https://www.tfrrs.org/results/82086/Dr_Jack_M_Toms_Alumni_Invitational"
    },
    {
      title: "Mar 22-23 - Doc Jopson Track & Field Invitational",
      location: "Bridgewater College, Bridgewater, VA",
      url: "https://www.tfrrs.org/results/81513/Doc_Jopson_Track__Field_Invitational"
  },
    {
        title: "Apr 4-6 - NIRCA Track & Field Nationals",
        location: "Sports Backers Stadium, Richmond, VA",
    },
    {
        title: "Apr 19-20 - Wildcat Invitational",
        location: "Randolph College, Lynchburg, VA",
    },
     {
        title: "Apr 26-27 - App State Outdoor Invitational",
        location: "Appalachian State University, Boone, NC",
     }
      */ 
    
  ];

  const pageContent = (
    <div className="article-content">
      <h3>Speed is on the Track!</h3>
      <p>
        Welcome to VT Club XCTF's Track and Field page! Spring is the season for
        Track and Field, and our team competes in a variety of events including
        sprints, distance running, hurdles, jumps, and throws.
      </p>
      <p>
        Each semester, we attend 5-6 meets indoor and outdoor, including Illnois Club Relays and the National
        Intercollegiate Running Club Association (NIRCA) National Championship.
      </p>
      {/* <p>
        Building on our success from 2022 and 2023, where our men's team brought home the
        national title and the women's team achieved their highest finish in
        club history with a 3rd place finish, we continue to strive for
        excellence in the upcoming seasons. We are determined to cement our place
        among the top teams in the nation and invite you to join us on this
        journey!
      </p> */}
      <p>
        We are a competitive club in many aspects, but we also welcome all skill
        levels and encourage members to try new events and push themselves to
        improve. Whether you're a seasoned veteran or new to the sport, we would
        love for you to join us on the track!
      </p>
      <p>
        Be sure to check this page regularly for updates on meet results and the
        schedule for upcoming meets.
      </p>
      <div className="img-container">
        <img
          src="https://i.imgur.com/K9RnIPZ.jpg"
          alt="Men's track and field team celebrating their nationals victory."
        ></img>
      </div>
      <div className="img-container">
        <img
          src="https://i.imgur.com/JibUAjg.jpg"
          alt="Women's track and field team celebrating their nationals podium finish."
        />
      </div>
    </div>
  );

  return (
    <>
      <PageHeader
        image={background}
        title={"Track & Field"}
        subtitle={"Competition"}
        yPos={"35%"}
      />
      <div className="topbar-container" id="topbar"></div>
      <div className="bar-plus-content">
        <div className="page-content">
          <SideBarLite
            className="sidebar"
            item={item}
            schedule={schedule}
            records={true}
          ></SideBarLite>
          <Article className="article" article={pageContent}></Article>
        </div>
      </div>
    </>
  );
}
