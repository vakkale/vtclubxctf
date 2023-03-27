import { Link } from "react-router-dom";
//shortcut for a new image, just pass in the src and alt
//ex: <Image src="https://i.imgur.com/0GBxapW.jpg" alt="Soccer Social"></Image>
function Image(props) {
    return (
        <div className="img-container">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}
function Gallery({ images }) {
    return (
        <div className="img-container">
            {images.map((image, index) => {
                return (
                    <img key={index} src={image.src} alt={image.alt} />
                );
            })}
        </div>
    );
}
const articles = [
    {
        title: "Lynchburg Part 1",
        url: "lynchburg-part-1",
        year: "2023",
        date: "3 - 27",
        season: "Spring",
        category: "Announcements",
        image: "https://i.imgur.com/1WFl2uA.jpg",
        content:
            <div className="article-content">
                <p>Good morning fellow tracksars, we got some info about upcoming events and a meet recap for you this week. Also have you ever wanted to see live* assassin updates as they come in? Well you can’t quite do that yet but I will update our new <Link to="/assassin">Assassin page</Link> periodically, so you can go check out who got eliminated as well as our new Assassin leaderboard to see who has the most <s>kills</s> eliminations!</p>
                <h3><strong>Lynchburg Meet Recap + Randolph Meet Signup</strong></h3>
                <p>This past weekend we traveled to Lynchburg University where we competed against a bunch of D1-D3 schools and did extremely well! All meet results can be found <a href="https://www.google.com/url?q=https://drive.google.com/file/d/1ohJvxoUKM_4eNl4DJB5y0FHNSGVBuf3i/view?usp%3Dshare_link&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw16sHsSsrkEUznwuT7t2x0L" rel="nofollow noreferrer" target="_blank">here</a>.. I am super proud of everyone who went out and competed! <strong>If you got a new PR at this meet, please fill out </strong><strong><a href="https://www.google.com/url?q=https://forms.gle/yCH4FzuzkMyQBFP18&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw2fyHSfUIrSf2FySnxsP3Ni" rel="nofollow noreferrer" target="_blank">this form</a></strong> so that we can recognize you for your achievement!</p>
                <Image src="https://i.imgur.com/aZntB0c.jpg" alt="4x100 relay team posing for a photo."></Image>
                <p>There were also 6 club records broken at this meet! Your new VT Club XCTF record holders are:</p>
                <li>Chatham Campbell - 200m - 22.12s</li>
                <li>Harris Naseh - 10,000m - 31:46.28</li>
                <li>Jack Wilson - Discus - 38.14m</li>
                <li>Jack Brown - Javelin - 44.26m</li>
                <li>Nyle Sheriff - Hammer Throw - 37.12m</li>
                <li>Jessica Williams - Long Jump - 5.47m</li>
                <Gallery images={[
                    { src: "https://i.imgur.com/nphqG23.jpg", alt: "Jessica Williams running a relay." },
                    { src: "https://i.imgur.com/YS4oaqe.jpg", alt: "Nyle Sheriff competing in the hammer throw." },
                ]} />
                <p>Drivers who did not drive separately, please be sure to bring your gas receipt with the required info written on it to practice and give it to Sam or Evelyn. You must have filled your tank Friday night and then when you returned. </p>
                <p>Remember that you have until <strong>Tuesday 3/28</strong> to <a href="https://www.google.com/url?q=https://forms.gle/6R1ZkaLNypTncUu16&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw28M1FYBNpzrqTo-O934LJ8" rel="nofollow noreferrer" target="_blank">sign up</a> for our meet at Randolph college on April 8th! This is our last meet before Nationals, and it is always a wonderful meet. The drop deadline for this meet is April 4th, if you drop after this date you will unfortunately be fined $15. </p>
                <Image src="https://i.imgur.com/Qg5Dzen.jpg" alt="Sophie, Dani, and Molly posing for a pic at the Jack M. Toms Invitational"></Image>
                <h3><strong>Volunteer Opportunity - Bear Tracks at Margaret Beeks Elementary</strong></h3>
                <p>The Club XCTF team is partnering with Margaret Beeks Elementary in their Bear Tracks program! This is a before-school program from <strong>8:40-9:15 am</strong> held by the MBE PTO, encouraging their kids to run! They are looking for volunteers to be pacers and supervisors for the kids, and the dates are listed in the survey below. If you are interested, please sign up! In your signup, please write down in the comments if you are interested in being a pacer or supervisor.<strong>The first week of this event begins next week</strong>, so please <a href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw1-hnQ0DROUd4DjTus2EwcO" rel="nofollow noreferrer" target="_blank">sign up</a> as soon as possible.</p>
                <h3><strong>Chipotle Percentage Night</strong></h3>
                <p>This <strong>Wednesday 3/29 from 5-9pm</strong>, we will be having a percentage night at Chipotle! We will all be heading over after practice, but if you want to go earlier please do and please invite your friends! </p>
                <p>You can also use the code for online pick up if you want to swing by and quickly grab food while still supporting our club. We made over $300 from the Chipotle percentage night in the Fall, and we are hoping to get even more this Spring while also enjoying a team dinner! The flyer can be found <a href="https://www.google.com/url?q=https://drive.google.com/file/d/1UubbkNtJXCchuDJw16TSI4SwEgpUWR69/view?usp%3Dsharing&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw0MHAGbFQQlQrhe_6Yp0X4x" rel="nofollow noreferrer" target="_blank">here</a>.</p>
                <Image src="https://i.imgur.com/UorKZOg.jpg" alt="Kalen Rita running the 4x400m."></Image>
                <h3><strong>The Big Event</strong></h3>
                <p>The Big Event is this <strong>Saturday Apr. 1</strong>, and is one of the biggest volunteer events we will be a part of! Phil will be attending a team captain meeting this week to learn more about the project we will help with as well as more specifics! We will send more info regarding what we will be doing once we receive it, so if you have signed up please be on the lookout for that coming soon! They extended the sign up deadline to today (Monday) at midnight, so if you have not signed up please do so <a href="https://www.google.com/url?q=https://forms.gle/7aNPYU5Yg4bPEKRg9&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw14Uu8pDD4jh4YRsKM6Xsui" rel="nofollow noreferrer" target="_blank">here</a>. (Team name is &quot;Club XCTF&quot;)</p>
                <Image src="https://i.imgur.com/o0BSLB4.jpg" alt="Sophie, Molly, and Dani posing at the meet."></Image>
                <h3><strong>Grad Cords</strong></h3>
                <p><mark><strong>Attention seniors</strong></mark>, if you would like a Club XCTF graduation cord, please fill out <a href="https://www.google.com/url?q=https://forms.gle/mYhFNsXcBiExgL9h6&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw1Hn3xFMNe7bJU8D6SP6hmQ" rel="nofollow noreferrer" target="_blank">this other survey</a> by April 2nd for your free graduation cord!</p>
                <h3><strong>Phil’s Corner</strong></h3>
                <p>As we are getting deeper into racing season, I want to remind/encourage you all to keep taking care of yourselves, both physically and mentally! You are all brilliant scholars and athletes, but it is definitely not easy to be doing all that you do. Please take breaks for yourself and also don&#39;t forget to simply live! As always, all of our officers and I are here to support you not only as athletes but also as people. If there is ever anything we can do to support you on your journey, do not hesitate to reach out. Keep it up though, you are absolutely amazing!</p>
                <Image src="https://i.imgur.com/20Bka6W.jpg" alt="The distance boys on Friday."></Image>
            </div>
    },
    {
        title: "One Down, Four to Go",
        url: "one-down-four-to-go",
        year: "2023",
        date: "3 - 20",
        season: "Spring",
        category: "Announcements",
        image: "https://i.imgur.com/7qambKv.jpg",
        content:
            <div className="article-content">
                <p>Listen up people! Below, you’ll find some <strong>crucial information</strong> regarding meets, volunteering opportunities, apparel updates, and most importantly <mark><strong>the start of Assassin!</strong></mark> There will also be a full meet recap coming on the website in the next few days so stay tuned for that but in the meantime we have a mini recap here. And as always any photos from the meet can be found in <a href="https://photos.app.goo.gl/XFMPNQgvbF6czWiT6" rel="nofollow noreferrer">our Google Photos Album</a>. One last thing: it's been brought to my attention that the meet schedule and socials schedule can't be accessed on mobile, this will be fixed this week.</p>
                <h3><strong>Home Meet Recap</strong></h3>
                <p>Congratulations to everyone that competed this past weekend! We had many club records, all-time performances, PRs, and fun races for everyone to enjoy! Despite the typical Blacksburg weather being randomly cold and windy, everyone showed up and showed out. I am so incredibly proud of you if you competed, no matter how you feel about how you did. Your support and dedication to this club is what makes it so special, and your effort doesn&#39;t go unnoticed.</p>
                <Image src="https://i.imgur.com/Os1laba.jpg" alt="Home meet relay."></Image>
                <h3><strong>Dr. Jack Toms Invitational Meet 3/24-3/25</strong></h3>
                <p>Our lovely race coordinators Hannah and Roman would like to inform you that <strong>the deadline to drop out of the Dr. Jack Toms Invite is </strong><strong><mark>Tuesday morning at 8 am.</mark></strong><strong> </strong>If you are dropping, you must inform Hannah or Roman before that time. If you drop the meet afterward, you will be charged $15. If you are planning on attending the Friday events, rides will be coordinated as well. Running events on Friday have just been announced to start with the 3k steeplechase at 4:30 pm.</p>
                <Image src="https://i.imgur.com/nuc8Vlq.jpg" alt="Home meet high jump."></Image>
                <h3><strong>Assassin</strong></h3>
                <p>This is the big one. It’s here and better than ever. Are you ready?? The Spring edition of Club XCTF assassin begins this week. <strong>Make sure to like Harris’s message in GroupMe if you want to play!</strong> There’s also information about the rules of the game on there. He even wrote code for it. The rules for Assassin can be found <a href="https://www.google.com/url?q=https://docs.google.com/document/d/1IcguV4x5KCUdAfa3pgz4rXJ26-iHCmcXtdML9zKRedw/edit?usp%3Dsharing&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw098R5U-BdAyVCfdV9G-ln0" rel="nofollow noreferrer" target="_blank">here</a>.</p>
                <h3><strong>Eligibility form</strong></h3>
                <p>If you are even slightly interested in running in NIRCA Track Nationals on April 15th and 16th, <strong>you must sign the NIRCA eligibility form </strong>that Hannah is bringing to practice! All NIRCA athletes must sign this waiver and maintain a certain GPA in order to compete and this is signed by our university bursar&#39;s office. If you do not fill out this form, you cannot compete at nationals. </p>
                <Image src="https://i.imgur.com/VgLeY2U.jpg" alt="Home meet hurdles."></Image>
                <h3><strong>The Big Event</strong></h3>
                <p>The Big Event is a student-run day of service that has grown into the second largest event of its kind in the nation. This year this will be on <strong>Saturday, April 1st</strong>, and our club will be participating! Our club will be assigned some form of community service, and as a team we will go out together and make a difference! We are hoping to have a lot of people for this event, so please <a href="https://www.google.com/url?q=https://forms.gle/7aNPYU5Yg4bPEKRg9&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw1GLaFei_Whopc5DPP3UJIY" rel="nofollow noreferrer" target="_blank">sign up</a> and invite your friends! To join our Big Event team, please fill out the form below, and in the team name <mark><strong>please put &quot;Club XCTF&quot; to ensure you are a part of our team.</strong></mark> Under the Team Captain question, please put &quot;No&quot; and not as an individual.</p>
                <h3><strong>Volunteer Opportunity - Bear Tracks at Margaret Beeks Elementary</strong></h3>
                <p>The Club XCTF team is partnering with Margaret Beeks Elementary in their Bear Tracks program! This is a before-school program from 8:40-9:15 am held by the MBE PTO, encouraging their kids to run! They are looking for volunteers to be pacers and supervisors for the kids, and the dates are listed in <a href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw1jboVfKZU2uf7EVitAdkfb" rel="nofollow noreferrer" target="_blank">this survey</a>. If you are interested, please sign up! In your signup, please write down in the comments if you are interested in being a pacer or supervisor. Hope to see you there!</p>
                <h3><strong>Nationals Shirt and Grad Cords</strong></h3>
                <p>We have some more apparel opportunities! If you are interested in purchasing a shirt celebrating our trip to nationals this year, then please fill out <a href="https://www.google.com/url?q=https://forms.gle/quXsynH2KSw86mH57&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw3uqwWmnNWfs8tPkZnRPxAF" rel="nofollow noreferrer" target="_blank">this survey</a>! These shirts are $15 and you must pay Sam and fill out this form by March 24th or else we cannot order one for you. Furthermore, <strong>attention seniors</strong>, if you would like a Club XCTF graduation cord, please fill out <a href="https://www.google.com/url?q=https://forms.gle/mYhFNsXcBiExgL9h6&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw2117GwODUOBu709PTPE3_z" rel="nofollow noreferrer" target="_blank">this other survey</a> <strong><mark>by April 2nd for your free graduation cord!</mark></strong></p>
                <h3><strong>Wyatt’s Corner</strong></h3>
                <p>Thanks again for reading to the very bottom. I wonder how many people actually make it this far. Well, for this week of Wyatt&#39;s Fun Fact of the Week, we have animal group names. Did you know:</p>
                <li>A group of flamingos is called a flamboyance,</li>
                <li>A group of crows is called a murder,</li>
                <li>A group of toads is called a knot, and</li>
                <li>A group of porcupines is called a prickle.</li>
                <p>I hope you enjoyed these fun facts. As someone studying science, I think it&#39;s important to not lose sight of the fun in life and have silly names. I hope you have a wonderful week and let me know if you know of any other good animal group names.</p>
            </div>
    },
    {
        title: "Race Season ft. Snow",
        url: "race-season-ft-snow",
        year: "2023",
        date: "3 - 13",
        season: "Spring",
        category: "Announcements",
        image: "https://i.imgur.com/t0w1PJC.jpg",
        content:
            <div className="article-content">
                <p>Good “morning” Spring Breakers! I hope you all had a lovely break full of warm weather, and welcome back to Blacksburg where March is the new January!</p>
                <p>Here are all the updates as we get into racing season! There will be a lot of information sent out here so please be sure to read it all so you don&#39;t miss any deadlines or miss anything else.</p>
                <p><strong>PSA to all Freshmen:</strong> It gets cold, don't leave your gloves and jackets at home please. We don't want you to freeze to death walking up Beamer.</p>
                <p><strong><mark>All practices will be moved to 6:00pm starting this week!</mark></strong> The reason we move practice to 6 is because the varsity team has moved into their outdoor season, and will be on the track every day now. We have to stay out of their way unfortunately, so we will now practice at 6 to avoid that problem. <strong>We will also <mark>not</mark> have practice this Tuesday because we are having a spike night that night (more info below).</strong> It&#39;s gonna be freezing that day as well. In place of practice on Tuesday, we have a lifting slot available to any club member from <strong>7:00-8:00 am on Tuesdays</strong> at the Rec Sports Field House!</p>
                <p>You can also find the link to our Spring 2023 Google Photos album <a href="https://www.google.com/url?q=https://photos.app.goo.gl/XFMPNQgvbF6czWiT6&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw3R6GFXZ93HNqvmTEuAAGll" rel="nofollow noreferrer" target="_blank">here</a>.</p>
                <Image src="https://i.imgur.com/d7k3Jto.jpg" alt="Snowy practice."></Image>
                <h3><strong>Racing Information</strong></h3>
                <p>Hannah will be sending out an email to all racers with more information regarding some important racing items to be completed, so if you are racing this season please be on the lookout for that! She will be bringing NIRCA eligibility forms to practice the next two weeks that must be filled out for anyone that wants to compete at nationals. She will also talk about the prior performance submission that is needed to run certain events at Nationals.</p>
                <p>Information about the home meet this upcoming Saturday will be sent out later this week as well! We are super excited to get to see all of your hard work get shown through your races!</p>
                <p>It&#39;s time to sign up for the second meet of the season. It&#39;ll be at the<strong> University of Lynchburg March 24-25</strong>. Please note the Friday events in the survey (Javelin, 3k Steeple, 10k), in order to plan around your class schedule. Please fill <a href="https://www.google.com/url?q=https://forms.gle/MJzUBXnoWvaw7dff9&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw2di6Ph_TpUCYTaVVrxpGIP" rel="nofollow noreferrer" target="_blank">this</a> out by <strong>next Sunday, March 19th</strong>!</p>
                <h3><strong>Spike Night &amp; Shoe Drive</strong></h3>
                <p>Starting this week, we will be conducting a used shoe drive where you can hand us your used pairs of shoes and spikes! The used shoes will be donated to the MORE Foundation Group (learn more <a href="https://www.google.com/url?q=https://www.morefoundationgroup.org/&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw3mfBRcBXXINBsfdXFfPWC9" rel="nofollow noreferrer" target="_blank">here</a>) to help those in need. Any spikes you donate will be given to athletes at Blacksburg Middle and High School, so your donations are directly benefiting the running community in Blacksburg.<strong> Please bring your old shoes and spikes to practice to donate!</strong></p>
                <p>In conjunction with this, we will also be doing a spike night at RunAbout sports on <strong>Tuesday, March 14th, from 5-7 pm. </strong>We will have the store to ourselves for two hours, and we will receive 15% of the proceeds made during that night. This way you can donate your old running shoes and buy a new pair, which also benefits the club! It&#39;ll be a lot of fun and RunAbout sports is a great company that is a staple of the Blacksburg running community.</p>
                <Gallery images={[
                    { src: "https://i.imgur.com/oLmPfNe.jpg", alt: "Snowy practice 2." },
                    { src: "https://i.imgur.com/bxu4dT6.jpg", alt: "Snowy practice 3." },
                ]} />
                <h3><strong>The Big Event</strong></h3>
                <p>The Big Event is a student-run day of service that has grown into the second largest event of its kind in the nation. This year this will be on <strong>Saturday, April 1st</strong>, and our club will be participating! Our club will be assigned some form of community service, and as a team we will go out together and make a difference! We are hoping to have a lot of people for this event, so please <a href="https://www.google.com/url?q=https://forms.gle/7aNPYU5Yg4bPEKRg9&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw24h4jM-X_v1k8Ts4B-E6tA" rel="nofollow noreferrer" target="_blank">sign up</a> and invite your friends! To join our Big Event team, please fill out the form below, and in the team name please put &quot;Club XCTF&quot; to ensure you are a part of our team. Under the Team Captain question, please put &quot;No&quot; and not as an individual.</p>
                <h3><strong>Pre-Meet Team Dinner</strong></h3>
                <p>After practice this Thursday (3/16), we will be having a team dinner at West End dining hall on campus! We will all walk over after practice and it&#39;s gonna be a lot of fun, so look forward to that!</p>
                <Image src="https://i.imgur.com/laIGSWz.jpg" alt="Wyatt staring into your soul using a spyglass made from his hands."></Image>
                <h3><strong>How do I Join?</strong></h3>
                <p>It&#39;s not too late to join! All membership requirements can be found <Link to={"/join"}>here</Link>. As the initial deadline has already passed to join, <strong>you must complete all of these items before you are able to attend practice or any club events.</strong></p>
                <h3>Message from Phil:</h3>
                <p>As always, thank you all so much for reading this in its entirety! &quot;Watching you all compete is a testament to the power of human potential. Your athletic abilities and skills are truly remarkable.&quot; - ChatGPT 2023. In more human terms I want you all to know that I am always proud to be your President. Racing season is upon us so let&#39;s go show all these other schools what we are made of!</p>
                <p>Sincerely,</p>
                <p>Phil</p>
            </div>
    },
    {
        title: "Knock Knock, Who's There? It's your 2023-2024 Officers!",
        url: "knock-knock-whos-there-its-the-2023-2024-officers",
        year: "2023",
        date: "2 - 27",
        season: "Spring",
        category: "Announcements",
        image: 'https://i.imgur.com/uaeC230.jpg',
        content:
            <div className="article-content">
                <h3>Weekly Updates 2/27/23</h3>
                <p>Welcome to the Club XCTF Updates (Wyatt&#39;s Version (But also Volkan’s Version because I added a bunch of stuff here)). I hope you all had a fun time at our Breakzone Social this past weekend and watched the drama unfold over bowling and ping pong. Shoutout to Konnor for scoring 200 points in bowling!</p>
                <Image src="https://i.imgur.com/r5FIYGe.jpg" alt="Prez vs. VP Ping Pong"></Image>
                <p>I've sprinkled in some pictures from our social throughout this post but if you want to see all of the photos we took there and throughout this whole semester, check out our <a href="https://photos.app.goo.gl/XFMPNQgvbF6czWiT6" rel="nofollow noreferrer">Google Photos Album</a>.</p>
                <h3>Officer Election Results</h3>
                <p>Introducing your 2023-2024 Officer Board:</p>
                <li><strong>President: </strong><i>Wyatt Thomas</i></li>
                <li><strong>Vice President: </strong><i>Volkan Akkale</i></li>
                <li><strong>Race Coordinator: </strong><i>Roman Ciulla</i></li>
                <li><strong>Treasurer: </strong><i>Evelyn Tipper</i></li>
                <li><strong>Apparel Officer: </strong><i>Molly Donaldson</i></li>
                <li><strong>Social Coordinator: </strong><i>Harris Naseh</i></li>
                <li><strong>Webmaster: </strong><i>Charlotte Baxter</i></li>
                <li><strong>M Distance Captain: </strong><i>Ben Darden</i></li>
                <li><strong>W Distance Captain: </strong><i>Sydney Szabos</i></li>
                <li><strong>Sprint Captain: </strong><i>Adam DeFosse</i></li>
                <li><strong>Sprint Captain: </strong><i>Riley Ophof</i></li>
                <li><strong>Throws Captain: </strong><i>Nyle Sheriff</i></li>
                <li><strong>Jumps Captain: </strong><i>Aidan McCrory</i></li>
                <h3>Home Meet Signup</h3>
                <p>That&#39;s right! It&#39;s finally time to start signing up for races again. Here is a message from our sponsor (Hannah):</p>
                <p>It&#39;s time to sign up for the first track meet of the season!! This will be our home meet on <strong>Saturday, March 18th</strong>, at Blacksburg High School with events starting at 11 am. For the first time, we are offering a one time only racing opportunity for ALL members, including our non-racing members! This would include a $25 fee if you haven&#39;t paid racing dues this semester and more info can be found in the survey.</p>
                <p>Please fill <a href="https://www.google.com/url?q=https://forms.gle/JQt1ixRN6Jxu33zR6&amp;source=gmail-html&amp;ust=1677626392604000&amp;usg=AOvVaw22Cv6XEv0-cfs-y1QRfHEJ" rel="nofollow noreferrer" target="_blank">this survey</a> out by <strong>Wednesday, March 8th</strong>, which is after we come back from Spring break! As always let me know if you have any questions.</p>
                <Image src="https://i.imgur.com/EPzGHlM.jpg" alt="Harris and his balls"></Image>
                <h3>Officer Feedback</h3>
                <p>How have we been doing? Now that we&#39;re almost halfway done through the semester (that&#39;s wild to think about), we’d like to hear from you about what we&#39;ve been doing well and what we can improve upon!</p>
                <p>Please fill out <a href="https://www.google.com/url?q=https://forms.gle/Y4SPbwjsX2y4Dkkv9&amp;source=gmail-html&amp;ust=1677626392604000&amp;usg=AOvVaw2aL-wvJHOU7KNOzop4bc8G" rel="nofollow noreferrer" target="_blank">this anonymous survey</a> and let us know your thoughts.</p>
                <p>The more people that fill it out, the more input we have, and the easier it is for us to become the best officer board we can be!</p>
                <h3>Giving Day Rewards</h3>
                <p>Because our club is full of so many amazing people, you all reached all three of our donation incentives! The most anticipated one, of course, is throwing a pie at an officer! That will take place <strong>this Tuesday at practice. </strong></p>
                <p>We will be randomly selecting 13 individuals to throw a plate of whipped cream at each one of the officers at practice. If practice is canceled over weather, we will postpone this until a better day. </p>
                <p>We will also be bringing ice cream to practice after Spring Break. If you won a prize in our raffle, Suzie will be handing those out at practice as well. </p>
                <h3>Spike Night &amp; Shoe Drive</h3>
                <p>Normally I would announce this next week, but because of Spring Break, I am going to let you all know of this exciting opportunity now! Starting the week of <strong>March 13th</strong>, we will be conducting a used shoe drive where you can hand us your used pairs of shoes and spikes! The used shoes will be donated to the MORE Foundation Group (learn more <a href="https://www.google.com/url?q=https://www.morefoundationgroup.org/&amp;source=gmail-html&amp;ust=1677626392604000&amp;usg=AOvVaw2uj7YhlGd3va9B9gmhKOc4" rel="nofollow noreferrer" target="_blank">here</a>) to help those in need.</p>
                <p>Any spikes you donate will be given to athletes at Blacksburg Middle and High School, so your donations are directly benefiting the running community in Blacksburg, which I think is great.</p>
                <p>In conjunction with this, we will also be doing a spike night at RunAbout sports on <strong>Tuesday, March 14th, from 5-7 pm.</strong> We will have the store to ourselves for two hours, and we will receive 15% of the proceeds made. This is a great way for you to support the club and the Blacksburg running community while also grabbing a sweet pair of shoes.</p>
                <Gallery images={[
                    {
                        src: 'https://i.imgur.com/M4AfaZC.jpg',
                        alt: 'Tara Bowling'
                    },
                    {
                        src: 'https://i.imgur.com/WMml5Fn.jpg',
                        alt: 'Chris taking a trickshot'
                    }
                ]} />
                <h3>Practice on March 3rd</h3>
                <p>Because of Spring Break starting the next week, <strong>we will not be having practice on Friday, March 3rd</strong>. Be sure to look out for unofficial practices, though, as plenty of people will be organizing activities. I hope you have a fun and safe Spring Break!</p>
                <h3>Fun Fact of the Week (FFOTW) - Wyatt</h3>
                <p>Thank you for reading to the very end. I&#39;m thinking of including a fun fact at the bottom of each so you can become just a little more enlightened each week by a useless fun fact. This week is going to be about otters. Did you know that otters have a favorite rock that they will carry with them to crack open clams? I think that is lovely.</p>
                <Image src="https://i.imgur.com/t4Pazjx.jpg" alt="Pool enjoyers."></Image>
            </div>
    },
    {
        title: "Elections, Sports, and Even Bigger Socials!",
        url: "elections-sports-and-even-bigger-socials",
        year: "2023",
        date: "2 - 21",
        season: "Spring",
        category: "Announcements",
        image: 'https://i.imgur.com/mQIXD6F.jpg',
        content:
            <div className="article-content">
                <p>Thank you to everyone who came out to the WBB game vs. NC State on Sunday! I'll see you all in the Fall at Cassel when you inevitably need to scratch your newfound women's basketball itch :D. But that's enough about the best D1 team on campus, here's some news about the best club team on campus:</p>
                <Image src="https://i.imgur.com/0GBxapW.jpg" alt="Soccer Social"></Image>
                <p>The soccer social on Saturday was a huge success! The sprinters crushed the distance team with a 5-0 win and the Freshmen/Senior team scored 2-1 against the Sophomore/Junior team in a heated match. Photos from the event and all other photos we take this semester can be found on our <a href="https://photos.app.goo.gl/XFMPNQgvbF6czWiT6" target={"_blank"}>Google Photos Album.</a></p>
                <h3>Officer Elections!</h3>
                <p>Officer elections for the 2023-2024 school year are upon us, and we want to get your input! These candidates are all running for roles that are heavily involved with the members, so we want to hear what you think would make them good officers. Please look through <a href="https://forms.gle/XtNwLdtQkpLpD9DA6" target={"_blank"}>this form</a> and write down what you think their strengths are and why they would be a great candidate for an officer position!</p>
                <h3>Breakzone Social!</h3>
                <p>We are super excited to announce that we rented out the Breakzone in Squires <b>this Saturday (2/25) from 2:00pm-4:00pm!</b> All club members are welcome to join for bowling, pool, darts, foosball, ping pong, video games, board games, and more! It's going to be a lot of fun so we hope to see you there!</p>
                <h3>Giving Day Raffle</h3>
                <p>As mentioned in many many messages, Giving day was this past week and you all absolutely crushed it! I wanted to remind you that any club member who donated at least $5 is able to enter themselves into a raffle for some cool prizes! The link for that is <a href="https://forms.gle/VhaNjbj76yLUsFaJ9" target={"_blank"}>here,</a> and the winners will be announced at practice on Wednesday so please complete the form before then.</p>
                <h3>Message from Phil</h3>
                <p>Bit of a chiller week with fun stuff planned, but we are also 2 weeks away from Spring break! I know you all have been working super hard being student athletes, so you all have earned a well deserved break soon. Until then, keep on grinding and doing your best in everything that you do! I believe in all of you, and I hear a lot about the great things you are all involved in which makes me so very proud to be able to get to know all of you. <br /><br />-Phil</p>
            </div>
    },
    {
        title: "Giving Day 2023!",
        url: "giving-day-2023",
        year: "2023",
        date: "2 - 13",
        season: "Spring",
        category: "Announcements",
        image: 'https://i.imgur.com/PUVge5r.jpg',
        content:
            <div className="article-content">
                <h3>Giving Day Information!</h3>
                <p>Giving Day is <b>Wednesday-Thursday February 15-16 from noon to noon,</b> and it is a 24 hour time where all donations that are made to the club during that time through our <a href="https://givingday.vt.edu/amb/clubxctf" target="_blank" rel="noreferrer">Giving Day link</a> go directly to our club. This is extremely important to our club as we received over $6,000 from 150+ donors last year, and we are hoping to up that even more this year!</p>
                <p>There is also a competition among Sport Clubs where the club with the <b>most donors ($5 minimum donation)</b> receives an additional $1,500 for their club, and we are planning on winning that prize! Please share this link with your friends and family, as this is the biggest way that they can support you with our club. Please also be sure to donate so that we can beat all the other sport clubs and prove that we are indeed the best!</p>
                <p>Also, there is a raffle that any member who donates will be able to enter themselves in for! For every $5 that you donate, you will get 1 raffle ticket which can then be used to enter yourself for any prize you want. Prizes included some nice apparel, semester shirts, an Instagram shoutout from the club account, Phil buys you dinner, and much more!</p>
                <p>Additionally, if we reach certain donor goals, then there will be rewards for the whole club! If we reach <b>100 donors,</b> we will let you all choose some of the events that we will have at our fun meet at the end of the year! If we reach <b>150 donors,</b> there will be ice cream sandwiches at practice for one day. If we receive over <b>200 donors,</b> all 13 officers will have a pie thrown at them at practice by randomly selected donors!</p>
                <p>All of this information can also be found in the extremely cool and slick banner above!</p>
                <h3>Game Night with Rec Sports!</h3>
                <p>Rec Sports will be having a sports club shout out night at the VT Women's Basketball game <b>this Sunday (2/19)!</b> Athletics has offered to hold a section of Cassell for sport club athletes to sit together for the game. During a timeout of the game, clubs will be honored on the video board with a recognition. Additionally, national championship teams will have the opportunity to be recognized on the court and throw out t-shirts to the crowd!</p>
                <p>If you want to attend the game and sit in the sport club section, please <a href="https://forms.gle/ECgCasmeETunxePt9" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://forms.gle/ECgCasmeETunxePt9&amp;source=gmail&amp;ust=1676395908605000&amp;usg=AOvVaw3JQkepiOgKMDMU072bouaN">RSVP HERE</a> by tomorrow. You must be on our roster to attend.</p>
                <p><b>For those who travelled to Nationals with us last year only,</b> if you want to be a part of the group that goes onto the court please <a href="https://forms.gle/fc5iiPUGUhyhDYSb7" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://forms.gle/fc5iiPUGUhyhDYSb7&amp;source=gmail&amp;ust=1676395908605000&amp;usg=AOvVaw364tzSAWjTQchbiiI2lJTw">RSVP HERE</a> by tomorrow.</p>
                <p>Student tickets are free, just visit athletics’ <a href="https://tickets.hokiesports.com/student/lottery/" target="_blank" rel="noreferrer">student lottery site</a> at noon on gameday and request a free ticket.</p>
                <h3>Soccer Social!</h3>
                <p>This Saturday we will be having a soccer social where we will have multiple games! One will have Distance against Sprints/Field. Who is better? Track & Field or Distance? We will also have other games like Freshmen and Seniors vs Sophomores and Juniors. Come out to the <b>Rec Fields this Saturday at 1 pm</b> to find out!</p>
                <h3>Looking for Officers!</h3>
                <p>As we are nearing the end of the year, we are looking for new officers to take over the club for next year! If you are interested in being an officer, please fill out <a href="https://forms.gle/cse6Ms4aVnyo8kdC6" target="_blank" rel="noreferrer">this form</a> by <b>February 17th</b> to be considered for an officer position. If you have any questions, please reach out to any of the current officers.</p>
                <p><a href="https://docs.google.com/presentation/d/1nk0E9zp6DhNguJ9GTlDc5ur96L664ABSw41kxHOOYP8/edit?usp=sharing" target="_blank" rel="noreferrer">Here</a> are slides explaining the officer positions and what they do.</p>
            </div >
    },
    {
        title: "Media Week!",
        url: "media-week",
        year: "2023",
        date: "2 - 8",
        season: "Spring",
        category: "Announcements",
        image: 'https://i.imgur.com/mdL6PqP.jpg',
        content:
            <div className="article-content">
                <h3>Media Week is in full swing!</h3>
                <p>
                    We've been filming clips at practice for a video that we are making, and day 1 of our photoshoots was a huge success, thank you to everyone who came out! I can't wait to show you all the final product! Our second day of photoshoots is tomorrow, <b>Thursday, February 9th at the Media Studio in Newman Library, Rm 209.</b> We have access to a green screen, white background, black background, professional lighting setup, and nice cameras! Please come in your uniform and get ready to pose!
                </p>
                <h3>When can I see my photos?</h3>
                <p>
                    We will be posting the unedited photos on our Google Photos albums the day following each photoshoot. I will also be going through and touching up/replacing backgrounds to get professional sports portrait versions of each photo that we will share as soon as it's ready. If you have any questions about the photoshoots, please contact <a href="mailto:volkanakkale@vt.edu">Volkan</a> or <a href="mailto:lphilip01@vt.edu">Phil</a>. You can also message us on GroupMe.
                </p>
                <p>
                    <b><a href="https://photos.app.goo.gl/YzHXdNZD4Vc5XS579" target="_blank" rel="noopener noreferrer">Tuesday Photo Album</a></b>
                </p>
                <p>
                    <b><a href="https://photos.app.goo.gl/FJMd5GYNSvAvEJ1j6" target="_blank" rel="noopener noreferrer">Thursday Photo Album</a></b>
                </p>
                <h3>Giving Day!</h3>
                <p>Giving Day is on <b>February 15-16 from noon to noon,</b> and it is a 24 hour time where all donations that are made to the club through the <a href="https://givingday.vt.edu/" target="_blank" rel="noopener noreferrer">Giving Day portal</a> go directly to our club. This is extremely important to our club as we received over $6,000 from 200+ donors last year, and we are hoping to up that even more this year! </p>
                <p>There is also a competition among Sport Clubs where the club with the most amount of donors receives an additional $1,500 for their club, and we are planning on winning that prize! We will talk about this more at practice and in the GroupMe, but there will be a fun raffle for all club members who donate, and we encourage all friends and family to donate as well to help support the club!</p>
                <h3>Singlets & Apparel!</h3>
                <p>For those who ordered singlets in the Fall, please be sure to get your singlet from Suzie at practice, we cannot hang on to your singlets for too long so please pick it up if you bought one!</p>
                <p><b>All apparel/singlet orders and payments are due by this Friday, February 10th,</b> if you do not order/pay by this date, you will be charged a late fee for a singlet order. For an apparel order, if you do not pay on time your apparel will not be ordered. You can pay for these at practice using <b>cash or check only. Singlets are required for racing!</b></p>
                <p><a href="https://forms.gle/6sZN4dgJPQgitmaPA" target="_blank" rel="noopener noreferrer">Uniform Survey</a></p>
                <p><a href="https://forms.gle/M8KkKBQPxtHaQFnc8" target="_blank" rel="noopener noreferrer">Apparel Survey</a></p>
                <h3>Racing Reminders</h3>
                <b>If you are racing with us this Spring and have not completed the following items, please do so ASAP.</b>
                <ol>
                    <li><p>
                        <b>All new members, or anyone else that is new to racing with our club</b> need to complete <a href="https://forms.gle/r6rbgkNrY5viQWNK8">the NIRCA registration survey.</a> Once we create your account you will get 2 emails to finish setting up your account and complete a waiver. Please do this <b>asap</b> because you cannot race without this, but if you raced with us in the Fall you are all set.
                    </p></li>
                    <li><p>
                        <b>All returning members</b> need to log into your NIRCA account <a href="https://clubrunning.org/">here</a> and fill out the waiver <b>asap</b> as you also cannot race before this is done. If you have done this in the Fall or have raced with us in the Fall you do not have to do it again.
                    </p></li>
                </ol>
                <div className="img-container">
                    <img src="https://i.imgur.com/KNUpPWB.jpg" alt="Fun photos at the Media Day photoshoots!" />
                </div>
                <div className="img-container">
                    <img src="https://i.imgur.com/GUXV0CL.jpg" alt="More fun photos at the Media Day photoshoots!" />
                </div>
            </div>
    },
    {
        title: "Weekly Updates 1/30",
        url: "weekly-updates-1-30",
        year: "2023",
        date: "1 - 30",
        season: "Spring",
        category: "Announcements",
        image: 'https://i.imgur.com/PTptR3Q.jpg',
        content:
            <div className="article-content">
                <p>Hey y'all! I hope you all had a great first week of practice! Before we get into the weekly updates, I want to let you all know that the records can now be found in the competition pages. There's <b>a ton</b> of new information below so make sure to read it all so you don't miss out on any of the fun things we have planned!</p>
                <h3>Media Week!</h3>
                <p>We will be having our first ever media week next week (Starting Feb 5th)! We will be filming clips at practice for a video that we are making, and what I am most excited for is our photoshoots! We will be taking professional athletic photos on <b>Tuesday and Thursday, February 7/9th at the Media Studio in Newman Library, Rm 209.</b> We have access to a green screen, white background, black background, professional lighting setup, and nice cameras! Please come in your uniform and get ready to pose! </p>
                <p>You can <a href="https://www.signupgenius.com/go/8050A4DA9AE28A2FC1-media" target="_blank" rel="noopener noreferrer">sign up</a> for a 20 minute time slot between 6:00-7:40pm for either day in the sign up genius below, and sign up with your friends if you want group photos! Due to the size of the studio, we will not be able to have groups of more than 10. If you do not have a singlet yet, the uniform order survey is later in this post. You will need to order and pay for your singlet as well as pick it up from Suzie before your time slot though. This is available to any member of the club, even if you do not have a uniform.</p>
                <h3>First Percentage Night and Social!</h3>
                <p>Our first percentage night will be this <b>Wednesday 2/1 at Panda Express!</b> From 10:30AM-9:30PM, if you order at the Panda Express on Prices Fork Road and show them <a href="https://drive.google.com/file/d/1D1QHkTz4zH-qn6n7di-BGgKyG8rTLytT/view?usp=sharing" target="_blank" rel="noopener noreferrer">this flyer</a> at checkout, or order online with the code 348415, our club will receive 20% of the profits! We will be having a team dinner there after practice on Wednesday, but you can also go at any time throughout the day! Invite your friends and don't forget to show them the flyer!</p>
                <p>We are also having our <b>first social event this Friday!</b> Your favorite Vice-President, Wyatt, will be hosting a <b>Jeopardy night in New Classroom Building, Room 250 at 7:00pm!</b> This is a great chance to meet new people from the club and get more connected, plus it will be a lot of fun! There is no sign up required, you can just show up to NCB 250 after practice! </p>
                <h3>New Officer Interest Meeting!</h3>
                <p>New officer elections are coming up fast! If you are interested in becoming an officer for the best club on campus, we will be having an interest meeting next <b>Sunday, February 5th at 2:00pm in Wallace 340.</b> At the meeting we will be going over each officer position and what they do, and also talking about the officer election process! There are 12 officer positions that you can run for: Vice-President, Treasurer, Race Coordinator, Apparel Officer, Social Coordinator, Webmaster, Men's Distance Captain, Women's Distance Captain, 2 Sprint Captains, Throws Captain, and Jumps Captain. You can talk to any of these officers about their position or if you have any questions for them, and then in the interest meeting they will each share more about their positions. If you are at all interested in becoming an officer, we encourage you to attend the interest meeting!</p>
                <h3>Order Singlets & Apparel!</h3>
                <p>For those who ordered singlets in the Fall, please be sure to get your singlet from Suzie at practice, we cannot hang on to your singlets for too long so please pick it up if you bought one!</p>
                <p>Our new singlet and apparel surveys are here! If you want to buy some really cool merch and rock an awesome singlet, these are for you. For those who plan on racing with us this Spring, <b>**a uniform singlet is required for competition**.</b> Once you buy a singlet, you will be able to use it for your entire time here with the club. Also for those who want to wear an official VT singlet for our upcoming media day, please be sure to fill out the survey and pay for your singlet before those days come. <b>All orders and payments are due by Friday, February 10th</b>, if you do not order/pay by this date, you will be charged a late fee for a singlet order. For an apparel order, if you do not pay on time your apparel will not be ordered. You can pay for these at practice using cash or check only, this is because we are required to turn in all of the money to our sports club office, and they only take cash/check.</p>
                <p><a href="https://forms.gle/6sZN4dgJPQgitmaPA" target="_blank" rel="noopener noreferrer">Uniform Survey</a></p>
                <p><a href="https://forms.gle/M8KkKBQPxtHaQFnc8" target="_blank" rel="noopener noreferrer">Apparel Survey</a></p>
                <h3>Lifting Timeslot</h3>
                <p>Rec Sports has given us a time slot where we will be able to lift in the Rec Sports Field House! We have been given Tuesday from 7:00am-8:00am as our time slot, and any club member is able to come and lift with us!</p>
                <h3>Administrative Updates!</h3>
                <p>As it is a new semester, we have to quickly mention a few administrative things about being a club member. Every club member must agree to the <a href="https://drive.google.com/file/d/1spaF6IMfr2eUkN4Yq1VaN6rUx5yBX_RO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Sport Club Code of Conduct</a> (this was on your IMLeague forms).Please be sure to read it again and understand it, as those are the rules that our club must follow and that we enforce. We want to remind everyone that alcohol is not permitted at any official club events, and that no one should be wearing any club apparel if they plan on drinking alcohol in a public environment. Each and every one of you who are official members are representatives of the club and by extension, Virginia Tech. Please be sure to make wise decisions and always represent the club well as you already do!</p>
                <h3>Spring Meet Schedule and New Racer Info</h3>
                <p>The meet schedules can be found on our competition pages. As you can see there are a couple of locations that are tbd. The first is NIRCA Nationals — we are still waiting for NIRCA to announce this year’s nationals location but as soon as I hear about it I will let you all know! Secondly, on April 15th we will be going to a meet, but we are still finalizing which meet that will be. We just wanted to give you all the date so that you can mark your calendars!</p>
                <p>Additionally, with a lot of the meets being later in the semester, we wanted to offer an additional opportunity for those of you who would like to race. On February 11th, the Penn State XCTF Club is hosting an indoor meet. **THIS IS AN UNOFFICIAL MEET** That means you are free to go and compete as a club athlete (you can wear your uniform), but we will not be traveling as a team for this. Therefore <b>ALL travel/lodging accommodations are up to you!</b> However, we will cover the entry fee. If you are interested, please fill <a href="https://forms.gle/rPQBMkaV8zZ9swAK7">this form</a> out by February 4th.</p>
                <b>Please make sure you read this whole next section if you have paid racing dues and want to go to meets this Spring.</b>
                <ol>
                    <li><p>
                        <b>All new members, or anyone else that is new to racing with our club</b> need to complete <a href="https://forms.gle/r6rbgkNrY5viQWNK8">the NIRCA registration survey.</a> Once we create your account you will get 2 emails to finish setting up your account and complete a waiver. Please do this <b>asap</b> because you cannot race without this, but if you raced with us in the Fall you are all set.
                    </p></li>
                    <li><p>
                        <b>All returning members</b> need to log into your NIRCA account <a href="https://clubrunning.org/">here</a> and fill out the waiver <b>asap</b> as you also cannot race before this is done. If you have done this in the Fall or have raced with us in the Fall you do not have to do it again.
                    </p></li>
                </ol>
                <p>Okay... that's everything (for now). Feel free to reach out if you have any questions!</p>
            </div>
    },
    {
        title: "New Year, New Website",
        url: "new-year-new-website",
        year: "2023",
        date: "1 - 17",
        season: "Spring",
        category: "Announcements",
        image: 'https://i.imgur.com/u0b2RaB.jpg',
        content:
            <div className="article-content">
                <p>Happy first day of classes everyone!</p>
                <p>It is my great honor to present to you our new club website! Several months and 5,427 lines of code later, it is finally here. Making this website has been one of the most rewarding experiences of my life and I hope you enjoy using it as much as I enjoyed making it!</p>
                <p>Anyways, here's some announcements:</p>
                <ul>
                    <li>First Week of Practice (FWOP) starts on Monday, Jan 23. We meet at the Johnson-Miller Track and distance runners will meet at 4:30 PM whereas sprints/field events will meet at 5:00 PM.</li>
                    <li>New and returning members, follow the instructions on the <Link to={"/join"}>join</Link> page and make sure that you have everything completed by Friday, Jan 27.</li>
                </ul>
                <h3>A message from our Race Coordinator:</h3>
                <ul>
                    <li><span style={{ fontWeight: "bold" }}>All new members, or anyone else that is new to racing with our club</span> need to complete the <a href="https://forms.gle/r6rbgkNrY5viQWNK8" rel="noreferrer" target={"_blank"}>NIRCA registration survey</a> Once I create your account you will get 2 emails to finish setting up your account and complete a waiver. Please do this <span style={{ fontWeight: "bold" }}>ASAP</span> because you cannot race without this, but if you raced with us in the Fall you are all set.</li>
                    <li><span style={{ fontWeight: "bold" }}>All returning members</span> need to log into their <a href="https://clubrunning.org/" rel="noreferrer" target={"_blank"}>NIRCA account</a> and fill out the waiver <span style={{ fontWeight: "bold" }}>ASAP</span> as you also cannot race before this is done. <span style={{ fontWeight: "bold" }}>If you have done this in the Fall or have raced with us in the Fall you do not have to do it again.</span></li>
                    <li>If you are planning on racing this semester, we need you to pay your racing dues <span style={{ fontWeight: "bold" }}>as soon as possible!</span></li>
                </ul>
                <h3>Indoor Meet Volunteering!</h3>
                <p>Virginia Tech Track & Field is hosting their Hokie Invitational <span style={{ fontWeight: "bold" }}>January 20-21st (this weekend)</span> at the Rector Field House, and they asked for our help in volunteering at the meet! This is a big fundraiser for the Spring semester and this will help send us to Nationals, so it is really important that we do this event. Food will be provided for the volunteers as well. </p>
                <p>Please <a href="https://www.signupgenius.com/go/8050A4DA9AE28A2FC1-2023" rel="noreferrer" target={"_blank"}>sign up</a> for whatever you can, there are not many official time slots left, but even if they are full you are encouraged to come to the meet and cheer on the team or see if anything else is needed! If you have already signed up, please double check that the time still works for you. </p>
                <h3>Singlets are in!</h3>
                <p>That's right, our singlets are finally in! For everyone who ordered singlets in the Fall, we will be handing these out shortly after practice starts. Please be on the lookout for updates from Suzie in the GroupMe in the upcoming weeks for information about uniform distribution! For those who are planning on racing with us in the Spring, have no fear, we have already ordered more singlets to avoid more waiting issues.</p>
            </div>
    },
    {
        title: "It's Alive!!!",
        url: "its-alive",
        year: "2023",
        date: "1 - 17",
        season: "Spring",
        category: "Webdev Diaries",
        image: 'https://i.imgur.com/38928we.jpg',
        content:
            <div className="article-content">
                <p>Hey, at least I don't have class tomorrow...</p>
                <p>Good morning fellow club members and website enjoyers. It is currently 3:46 AM and I've been staring at this website for the past 14 hours. But it's ok, because as I'm writing this, the website is live on the proper domain and we are no longer "powered by Weebly!" :D</p>
                <p>So what's new? Well, everything. Basically, if it was on the old site, its here and even better. Want uniform training plans? We got it. Maybe you want to see the routes we run on every day? It's here. Maybe you wanted the webmaster's thoughts beamed straight to your eyeballs. Guess what? You're looking at it.</p>
                <p>That being said, I'm always open to suggestions so if you don't think something working the way it should or you would like to see something added to the website, I'm your guy. Just let me know at practice.</p>
                <p>I'm also assuming my self-appointed position as club reporter. I'll be posting articles here about announcements, meets, etc. so make sure to check this page on the regular.</p>
                <p>PS: I know I said everything is here but if you're wondering where the records page went, don't worry I'm working on a new system to keep track of records. The new records page will be up soon.</p>
                <div className="img-container">
                    <img src="https://i.imgur.com/4UR0vU6.jpg" alt="Webmaster Volkan is incredibly happy to see his life's work functioning as intended." />
                </div>
            </div>
    },
    {
        title: "They Said it Couldn't Be Done",
        url: "they-said-it-couldnt-be-done",
        year: "2023",
        date: "1 - 6",
        season: "Spring",
        category: "Webdev Diaries",
        image: 'https://i.imgur.com/u5FyQL2.jpg',
        content:
            <div className="article-content">
                <p>Did someone call an exterminator? Cuz I've been squashing bugs like its nobody's business (Please ignore the bugs that are still there :D). Not only that but if you'd be so kind as to navigate over to our &#10024;Brand New&#10024; Training Page, your eyes will thank you for showing them the best way to see training plans yet!</p>
                <p style={{ fontSize: '0.9rem', paddingTop: '0', paddingBottom: '0' }}>I am open to critism of course.</p>
                <p>There's not much more to it but basically it took a lot of work so you better appreciate it. Here's a few links that take you directly there because if you're reading this before the site is live, the navigation's a bit broken atm. Enjoy!</p>
                <ul>
                    <li><Link to="/training/mens-distance/400m-800m" >Men's Distance Winter Plans</Link></li>
                    <li><Link to="/training/womens-distance/distance">Women's Distance Winter Plans</Link></li>
                </ul>
            </div>
    },
    {
        title: "I'm Losing My Mind",
        url: "im-losing-my-mind",
        year: "2022",
        date: "12 - 23",
        season: "Spring",
        category: "Webdev Diaries",
        image: 'https://i.imgur.com/KZemVBf.jpg',
        content:
            <div className="article-content">
                <p>If someone tries to tell you that the hardest part about making a website is the code, they have no idea what they're talking about. Pictures are the bane of my existence and if I have to look at another .svg file, you might never see me again.</p>
                <p>Let me walk you through a part of what I've been doing these past two days.</p>
                <h3>Part 1:</h3>
                <p>So as it turns out the web host I'm using for this gives the website 100GB/month of free bandwith. This includes data for images that have to be loaded (at least for the first time) on every single device that looks at this magnificient piece of art we like to call the club website.</p>
                <p>You might say "What's the problem, Volkan? That seems plenty," and it would be if not for the fact that the photos are BIG. And this is after I've made them considerably smaller compared to the gargantuan resolutions the camera takes them at. So I decided it's better to nip this in the bud while there's only around 20 pictures on the website and got to work.</p>
                <p>Hope you brought some snacks because we're just getting started. I wanted to use Imgur to host the images so the web host won't throw a fit over sending people some pictures. Of course it can't be as easy as "just put the pictures on Imgur." There happens to be a Google Photos album I have with around 500 of the best photos I hand-picked over the course of the past semester from the semester album and they had to all be processed and uploaded to Imgur so I didn't have to go through this every time I try to use a photo for the website.</p>
                <p>Luckily, Photoshop came to the rescue. It has this neat feature where you can just run a script to automatically go through a folder, resize all images, and spit them out in a different folder. So I ran this for about 15 minutes and then uploaded the entire thing to a private Imgur album.</p>
                <p>Finally, I had to go through all of the website files, delete every image, and when it inevitably gave an error about not being able to find the pictures, I went in and replaced the source with the Imgur link. This was much easier than going through the actual code and trying to figure out where every single reference to an image is. Now no one (me) has to worry about where the pictures are stored in the files and more importantly, bandwith shouldn't be an issue.</p>
                <h3>Part 2:</h3>
                <p>Never did I think when I made the logo over the summer that it would cause me this much frustration half a year down the line. So it all started when I was making the footer and I needed icons for the social media links. I went on a websitie and found some I liked and set them as the backgrounds for the links. Now, I wanted the icons to change color when hovered over but as it turns out, this is very hard to do when you set an SVG file as the background.</p>
                <p>*Technical sidenote: Some people a while ago figured out you can save simple images like logos as text that contains instructions on how to draw it instead of an actual image, this way it can be scaled up or down as much as you want and thus, the Scalable Vector Graphic (SVG) format was born. The predecessor to this actually dates back to the 60s and was first used in graphic design. I was forced to read through this during my several hour long journey to fix this issue so now you know too!</p>
                <p>Anyways, some genius online made <a href="https://codepen.io/sosuke/pen/Pjoqqp" target={"_blank"} rel="noreferrer">a tool</a> to generate a filter you can place over your SVG icon that, given the icon starts off completely black, will turn it into any other color you want. You can check out the link if you want to see how complicated a simple color change can be using this method, it's really cool stuff.</p>
                <p>After fixing this I had the bright idea to make the club logo into an SVG as well. Now I wouldn't have to use the Imgur link every time I wanted to display the logo, but mostly because it seemed like an interesting thing to do. Boy, was I wrong. I ended up spending way too much time trying to get it to center and size properly in the footer since it behaves so much differently to a normal image and I'm just not as familiar with it.</p>
                <p>In the end, I got it to look right by hardcoding the specific heights and widths associated with it so that it never looks off. It might not be the optimal solution but if it works, it works. So kids, the lesson to take away is to stay away from SVGs and you might just stay sane a little longer.</p>
            </div>
    },
    {
        title: "Humble Beginnings",
        url: "humble-beginnings",
        year: "2022",
        date: "12 - 20",
        season: "Spring",
        category: "Webdev Diaries",
        image: 'https://i.imgur.com/3vF7nT0.jpg',
        content:
            <div className="article-content">
                <p>Welcome y'all to your new favorite corner of the internet, my unhinged thoughts during the making of this website, or what I like to call 'Webdev Diaries.'</p>
                <p>It's 2:36AM and I've been doing this for about 12 hours now but I finally finished the main functionality and most of the polish for the page you're on now. Despite how long it took, working on this page actually gave me a lot of confidence for how the rest of this process will go.</p>
                <p>Believe it or not, I had originally planned for the site to go live around the beginning of the Fall but it kept getting bigger and bigger and with school and running on top of it, I had to push it back. Hopefully you're as impressed with the final result as I hope to be!</p>
                <p>Anyways, have you checked out ChatGPT yet? This part of the blog will probably be a bit outdated by the time you see this but it's incredible what it can do. I'm mostly impressed by how well it can write and understand code. I actually asked it for help one of the times I was stuck making this page and it showed me how to do exactly what I was trying to and even gave examples.</p>
                <p>I'll leave a link to it <a href="https://chat.openai.com/" target={"_blank"} rel="noreferrer">here</a> so you can see for yourself and this is also my first time testing external links from articles so hopefully that worked.</p>
                <p>There's a lot of work to do tomorrow so I should probably get some sleep so thank you for tuning in to the first ever (weekly?) edition of Webdev Diaries by yours truly, Volkan, and if you're reading this in the future, which you will be, let me know at practice what you think!</p>
            </div>
    }
]
export default articles;