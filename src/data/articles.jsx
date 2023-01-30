/* Something something, the who asked of articles */
import { Link } from "react-router-dom";

const articles = [
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