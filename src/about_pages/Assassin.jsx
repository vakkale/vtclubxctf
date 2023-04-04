import PageHeader from "../modules/PageHeader";
import SideBarLite from "../modules/SideBarLite";
import Article from "../modules/Article";

export default function Assassin() {

    const page_props = {
        title: "Assassin",
        subtitle: "You're Never Safe",
        background: 'https://i.imgur.com/sVrYtUM.png',
        yPos: "30%"
    };

    const item = {
        date: "Who Will Win? Who Will Die?",
        title: "Assassin 2023!🥄🥄"
    };

    const updated = "April 4 5:03 PM";

    const kills = [
        {
            name: "Wyatt Thomas",
            kills: 6
        },
        {
            name: "Eddie Tickle",
            kills: 1
        },
        {
            name: "James Paylor",
            kills: 1
        },
        {
            name: "Alison Henry",
            kills: 1
        },
        {
            name: "Justin Moses",
            kills: 1
        },
        {
            name: "Alec Venable",
            kills: 1
        }
    ];

    //Nate Montgomery, Ellie Lo, Konnor Rafferty, Samuel Yakulis, Joe Gora, Nele Heide, Kevin Kiernan, Andrew Oliveri, Emmy Donlon
    const dead = [
        {
            name: "The list is too long lol."
        }
    ];

    const pageContent =
        <div className="article-content">
            <h3>Leaderboard</h3>
            <table>
                <tr>
                    <th>Player</th>
                    <th>Kills</th>
                </tr>
                {kills.map((kill, index) => {
                    return (
                        <tr>
                            <td>{kill.name}</td>
                            <td>{kill.kills}</td>
                        </tr>
                    )
                })}
            </table>
            <p style={{ color: "gray" }}>Updated {updated}</p>
            <h3>Those Who Have Fallen</h3>
            <table>
                <tr>
                    <th>Player</th>
                </tr>
                {dead.map((kill, index) => {
                    return (
                        <tr>
                            <td>💀{kill.name}</td>
                        </tr>
                    )
                })}
            </table>
            <p style={{ color: "gray" }}>Updated {updated}</p>
            <br />
            <br />
            <h3>Rules of the Game</h3>
            <p>In order to play, you must like Harris’s message on the “VT Club XCTF Announcements” GroupMe chat by 8 PM on Tuesday, March 21, 2023.</p>
            <li>You will be given a target that you must &quot;unalive&quot;. The weapon will be a spoon that will be handed out at practice beginning Monday, March 20nd, and to get your target you must touch them with your spoon.</li>
            <li>When you find your target and go for the kill you must have video/photo evidence or a witness. The evidence can be sent to Harris on GroupMe.</li>
            <li>After week 1, you will be eliminated if you have not made a kill, so you&#39;ll want to be quick. That means you must get your first kill by <strong>April 2nd 11:59PM</strong>.</li>
            <li>When you kill your target you get their target. If they don’t tell you who their target is, Harris will tell you when you message him the proof of your kill. Your victim can&#39;t kill you unless you&#39;re the last 2 people in the game.</li>
            <h3>Restrictions</h3>
            <li>Restrictions on when you can kill:</li>
            <li>You cannot kill someone within 15 minutes of the hours we’re at meets, including travel time (e.g. if we leave for a meet at 8 am and get back at 6 pm, you cannot kill between 7:45 am and 6:15 pm). However, you will have a chance to get a kill at the hotel if we are at an overnight meet. </li>
            <li>You may not make an attempt at your target during ANY Club Sponsored events (i.e Big Event, meets, and team dinners/percentage nights)</li>
            <li>You may not try to end your target 15 minutes before, during, and 15 minutes after practice (no kills between 5:45 PM and 8:15 PM on practice days). </li>
            <li>You cannot kill someone DURING class.</li>
            <li> Restrictions on where you can kill:</li>
            <li>Please don’t break into anyone’s house, car, etc. Just use common sense - don’t do anything outrageously stalkery lol</li>
            <li>You also may not get your target at their place of residence (inside their house) or their workplace while they’re working. </li>
            <li>You may not go for an officer when they are in their weekly meeting. They are safe 15 minutes before and after the meeting.</li>
            <p>If any special situations crop up, message Harris and I’ll decide who lives and dies.</p>
            <p>If you have any questions email or message Harris (<a href="mailto:harrisn24@vt.edu" rel="nofollow noreferrer" target="_blank">harrisn24@vt.edu</a>).</p>
        </div >

    return (
        <>
            <PageHeader image={page_props.background} title={page_props.title} subtitle={page_props.subtitle} yPos={page_props.yPos} />
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