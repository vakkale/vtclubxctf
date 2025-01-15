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
        return <img key={index} src={image.src} alt={image.alt} />;
      })}
    </div>
  );
}
const articles = [
  {
    title: "NATIONAL CHAMPIONS!",
    url: "national-champions-2024",
    year: "2024",
    date: "11 - 11",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/Pr2xNdZ.jpeg",
    content: (
      <div class="article-content">
        <p>
          As you all likely know by now, for the first time in club history, we
          have claimed the XC nationals title! In a nail-biting race, your men’s
          championship team edged out Cal Poly by a single point to win the race
          and bring home our first XC Nats trophy (and a giant Hershey’s bar)!
          The women’s championship team finished 5th after a very competitive
          race and cemented the fact that we are undoubtedly the most
          well-rounded team in the nation.&nbsp;
        </p>
        <p>
          In the last 3 years of national competition (track and XC, men and
          women), we’ve come in 1st place 3 times, 2nd place 2 times, 3rd place
          5 times and 5th place 2 times. And 0 times below 5th place in that
          time span. No one else does it like we do, and the culture of
          consistency, well-roundedness, and depth we have is something to
          appreciate.
        </p>
        <p>
          As we wrap up the season, take pride in what we’ve accomplished
          together and the legacy we’re building for the future. This title
          belongs to every one of you, and it’s a reflection of the hard work
          and heart you bring to this team.
        </p>
        <img src="https://i.imgur.com/ZKyZfZu.jpeg" />
        <p>Now back to the regularly scheduled programming...</p>
        <h3>🧘 Yoga Social (11/16)</h3>
        <p>
          We’re doing a yoga social with In Balance Yoga on November 16 at
          4:30pm! This is a pay as you can event (usually $5 to $10), with 100%
          of proceeds going to the club. It will last around 1 hour. There’s a
          women’s basketball game at 2pm, so you can head over right
          after.&nbsp;
        </p>
        <p>
          This is an open event so invite your friends! Make sure to bring water
          and a yoga mat if you have one. Lastly, if you have not been to In
          Balance Yoga before, complete the new student form
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.inbalanceyogastudio.com/new-students/"
          >
            here
          </a>
          before arriving.
        </p>
        <h3>👔 Last Week to Pick Up Your Semester Shirt!&nbsp;</h3>
        <p>
          If you have paid your dues and completed the IMLeagues forms, you can
          now pick up your semester shirt from Molly at practice.&nbsp;
        </p>
        <h3>🦃 Friendsgiving (11/21)</h3>
        <p>
          We'll be having our annual Friendsgiving celebration on the evening of
          Thursday, November 21 6 to 9:30pm at 212 Courtney Circle. This is a
          potluck event so sign up here to RSVP. If you don't know,
          Friendsgiving is just like Thanksgiving, except with your friends, so
          much fun will be had.&nbsp;
        </p>
        <p>
          For transportation you can take NMG from the Marron Bay to stop #1428,
          or park at the local Food Lion or Kibbles on Main and walk about a
          quarter mile.&nbsp;
        </p>
        <p>
          If you are able, please sign up and bring any food of your choice!
          Regardless of if you can bring anything, there will be a section for
          you to RSVP just so we can get a headcount.
        </p>
        <h3>❄️ Winter Formal (12/7) &amp; Planning Committee&nbsp;</h3>
        <p>
          That's right, mark your calendars! We will have our Winter Formal on
          Saturday, December 7, at the Blacksburg Community Center from 5 to
          8pm. There is no action to be taken yet on your part besides making
          sure you clear all your plans so you can attend.
        </p>
        <p>
          There is no admission fee, there will just be a signup released in a
          couple weeks so we can order the appropriate amount of food. There is
          no dress code, but most people will be dressing up as they would for a
          prom/homecoming. Plus-ones are welcome! Also have a good karaoke/Just
          Dance song in mind.&nbsp;
        </p>
        <p>
          If you’d like to be involved in the planning/set-up of the Winter
          Formal, please reach out to Kevin.
        </p>
        <p>Have a great week!</p>
        <img src="https://i.imgur.com/hDFFsf4.jpeg" />
      </div>
    ),
  },
  {
    title: "Twas the Week Before Nationals",
    url: "twas-the-week-before-nationals-2024",
    year: "2024",
    date: "11 - 4",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/cHNapZf.jpeg",
    content: (
      <div class="article-content">
        <p>
          It's championship season! Time to lock in, as the kids are saying
          these days.
        </p>
        <img src="https://i.imgur.com/7qB9lm3.jpeg" />
        <h3>
          <strong>🕟 Practice Time Moving to 4:30 (11/4)</strong>
        </h3>
        <p>Don’t be late! It gets dark earlier now.</p>
        <h3>
          <strong>🍽️ D2sday (11/5)</strong>
        </h3>
        <p>
          Come get food with the team after practice! We need to break our cup
          stacking record of 51, so we need as many people as possible. Every
          cup matters.
        </p>
        <h3>
          <strong> NIRCA Nationals Fast Facts (11/8)</strong>
        </h3>
        <p>
          If you signed up to race this weekend, you will receive an email from
          our dear race coordinator later this week with the full details.
        </p>
        <p>
          Here is some quick info:
          <strong>
            We will be meeting at 9 am on Friday, November 8, at the McComas
            parking lot
          </strong>
          .
        </p>
        <p>
          It’s a 5-hour drive to Pennslyvania, and the vans will stop for a
          quick lunch so we can get to the course before sunset for a course
          preview. The vans will then go out for dinner. We have the conference
          room of the hotel booked Friday night for movies.
        </p>
        <p>
          Please be respectful of all staff and remember that we represent the
          university as we travel. We can’t wait for Friday!
        </p>
        <h3>
          <strong>
            🥄 Jonathan Goerlich is your Fall 2024 Assassin Champion!&nbsp;
          </strong>
        </h3>
        <p>
          That's a wrap on Assassin, folks! In a last-day gambit, Jonathan took
          Ryan. Ryan had eliminated the other 2 players from the final four just
          the day before. We’ll be running it back in the Spring, so you may
          want to start planning if you’re in it to win it!&nbsp;
        </p>
        <h3>
          <strong>👔 Last Week to Pick Up Your Semester Shirt!&nbsp;</strong>
        </h3>
        <p>
          The semester shirts have arrived! If you paid your dues by September
          13th and filled out the membership survey, we have a shirt for you!
          You can pick it up at practice and wear it every day for the rest of
          eternity to show all your friends how much you love club.&nbsp;
        </p>
        <p>
          Apparel has been ordered, but has not arrived yet. We will let you
          know when it's in.
        </p>
        <h3>
          <strong>🦃 Friendsgiving (11/21)</strong>
        </h3>
        <p>
          <strong>
            We'll be having our annual Friendsgiving celebration on the evening
            of Thursday, November 21
          </strong>
          . Please be on the lookout for the signup to be sent on Wednesday in
          the GroupMe! If you don't know, Friendsgiving is just like
          Thanksgiving, except with your friends.&nbsp;&nbsp;
        </p>
        <p>
          If you are able, please sign up and bring any food of your choice!
          Regardless if you can bring anything, there will be a section for you
          to RSVP just so we can get a headcount.
        </p>
        <h3>
          <strong>❄️ Winter Formal &amp; Planning Committee</strong>
        </h3>
        <p>
          We will have our Winter Formal on Saturday, December 7 at the
          Blacksburg Community Center from 5-8pm. There is no action to be taken
          yet on your part besides making sure you clear all your plans so you
          can attend.&nbsp;&nbsp;
        </p>
        <p>
          There is no admission fee, there will just be a signup released in a
          couple weeks so we can order the appropriate amount of food. There is
          no dress code, but most people will be dressing up as they would for
          Homecoming. Plus-ones are welcome! Also have a good karaoke/Just Dance
          song in mind.&nbsp;
        </p>
        <p>
          If you’d like to be involved in the planning/set-up of the Winter
          Formal, please reach out to Kevin.&nbsp;
        </p>
        <h3>
          <strong>♻️ Trash Pickup Community Service Opportunity&nbsp;</strong>
        </h3>
        <p>
          Lambda Iota Mu is hosting trash pickup events for their community
          service week. I wanted to promote that here in case you are
          interested. There are slots for Tuesday through Thursday and you can
          sign up{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSejfSIgZGQHVtbMYKNWddP0JUDZEu9-3mKqug0rJRsa2NU99g%2Fviewform&amp;data=05%7C02%7Ctarablue%40vt.edu%7C1b2a0e1c667f4ca1345f08dcfd09cb1c%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638663465790042572%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=CEUMIvEy2epFqpqa%2BMMpGuFZm45JapV4UCmZ7YkCLA4%3D&amp;reserved=0"
          >
            here
          </a>
          .&nbsp;
        </p>
        <h3>
          <strong>🧘 Yoga Social (11/16)&nbsp;</strong>
        </h3>
        <p>
          We’re doing a yoga social with In Balance Yoga on November 16. Details
          to come!
        </p>
        <p>Good luck to everyone racing at XC Nationals!</p>
        <p>Have a great week!</p>
        <img src="https://i.imgur.com/26gcmh1.jpeg" />
      </div>
    ),
  },
  {
    title: "Happy Bye Week!",
    url: "happy-bye-week-2024",
    year: "2024",
    date: "10 - 28",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/ygbBVlr.jpeg",
    content: (
      <div class="article-content">
        <p>
          Happy Halloweek! We are enjoying our Bye Week and locking in for
          Nationals. 🔒
        </p>
        <img src="https://i.imgur.com/nop058P.jpeg" />
        <h3>🐼 Panda Express Percentage Night (10/28)</h3>
        <p>
          We will be heading over to Panda Express on Prices Fork after practice
          on Monday, October 28 for a fundraiser percentage night! 20% of the
          proceeds go to the club, so make sure to show the attached flyer or
          simply tell the cashier that you’re with the team. If you can’t make
          it after practice, the deal is in place from 10:30am to 9:30pm, so you
          can go at any point in the day!
        </p>
        <h3>🕟 Practice Time Moving to 4:30 (11/4)</h3>
        <p>
          Unfortunately, fall brings shorter days and the end of Daylight
          Savings Time, meaning practice will move to 4:30 pm starting Monday,
          November 4 to prevent us from running in the dark.
        </p>
        <h3>👔 Semester Shirts Are Here!&nbsp;</h3>
        <p>
          If you paid your dues by September 13 and filled out the membership
          survey, we have a shirt for you! You can pick it up at practice and
          wear it every day for the rest of eternity to show all your friends
          how much you love club. Apparel has been ordered, but has not arrived
          yet. We will let you know when it is in!&nbsp;
        </p>
        <h3>🗓️ Social Calendar&nbsp;</h3>
        <p>
          Check the highlight on our Instagram to see our calendar for the rest
          of the semester. Mark these dates so you don’t miss them!
        </p>
        <h3>👻 Halloween Costume Contest (10/31)</h3>
        <p>
          We'll be hosting a Halloween costume contest at practice on Thursday,
          October 31! The winners will get some extra VT Club XCTF merch we have
          laying around.&nbsp;
        </p>
        <h3>🎥 Movie Night/Poster Making Social (11/3)</h3>
        <p>
          With XC Nationals right around the corner, we want everyone to have
          all the support they can get during their race! What better way to
          support your fellow teammates than to cheer them on with posters made
          with love? Poster making is optional but having fun is not, so we will
          also have a movie for everyone on the projector. Keep an eye out for a
          GroupMe poll to pick the movie! We will meet in Durham 261 at 6pm on
          Sunday, November 3.
        </p>
        <h3>🥄 Assassin Updates&nbsp;</h3>
        <p>
          After 3 weeks of assassin, we have finally made it to the final 4!
          Here are your finalists and their elimination counts:&nbsp;
        </p>
        <ul>
          <li>
            <p>Jonathan Goerlich: 4&nbsp;</p>
          </li>
          <li>
            <p>Chatham Campbell: 3&nbsp;</p>
          </li>
          <li>
            <p>Ryan Christman: 3&nbsp;</p>
          </li>
          <li>
            <p>Wyatt Thomas: 2&nbsp;</p>
          </li>
        </ul>
        <p>
          The next deadline to get your target is Sunday, November 3 at 11:59pm!
          Place your bets now for who you think will win and if we’ll even make
          it to Nationals. Good luck to all four remaining contestants!&nbsp;
        </p>
        <h3>🏋 Lift Is Back!&nbsp;</h3>
        <p>
          Somehow, we’ve always had events on Thursdays, but we’re so back this
          week! After the costume contest and practice, head over to the Bubble
          to pump some iron with your fellow cross country and track &amp; field
          stars.
        </p>
        <p>Have a great week!</p>
        <img src="https://i.imgur.com/5ywLrDE.png" />
      </div>
    ),
  },
  {
    title: "Thomas Takeover!",
    url: "thomas-takeover-2024",
    year: "2024",
    date: "10 - 21",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/1dkQUfO.jpeg",
    content: (
      <div class="article-content">
        <p>
          Congratulations to everyone that raced this past weekend at NIRCA XC
          Regionals. We had our second ever regionals sweep thanks to the
          incredible performances by our racers. With three weeks left until
          nationals and the time trial happening this week, there’s no lack of
          excitement as we head into the tail end of the season!
        </p>
        <img src="https://i.imgur.com/X0HsllQ.jpeg" />
        <h3>
          <strong>⏱️ Time Trial &amp; Practice at BHS track (10/24</strong>)
        </h3>
        <p>
          The time trial is this Thursday! We are super excited to offer this
          opportunity to get an electronically timed race in the fall for sprint
          events as well as a 2 mile for distance all on the Blacksburg High
          School track.&nbsp;Because of this,
          <strong>practice is moving to BHS on Thursday</strong>. The events
          will start at 5:15pm, so get there early enough to warm up. The
          schedule can be found on the sign up form below.
          <strong>
            We’ve decided to extend the registration deadline until 10PM
            tonight!
          </strong>
          Make sure to sign up
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3DhGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUN0RORlQ2S1daRFJBQlIySzlDNTJLNTZDSyQlQCN0PWcu&amp;data=05%7C02%7Ctarablue%40vt.edu%7C9a8e7a538a694a9b648008dcf2105655%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638651401517360996%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=r4qSpJ2kSdY37FJv%2BLbHjL5gSOfOA5iqVuIAld5LeZA%3D&amp;reserved=0"
          >
            here
          </a>
          if you’re interested.
        </p>
        <p>
          If you are men’s or women’s distance, the workout for Thursday is to
          run the 2 mile at BHS, so please sign up!
        </p>
        <h3>
          <strong>🏆 NIRCA Nationals – Signup Closes Thursday</strong>
        </h3>
        <p>
          We made it! It’s the final race of the season and, surprise: it’s
          several races. Prepare your vocal chords because you will be cheering
          for 6 different races on Nov 9! The freshman/sophomore,
          junior/senior/grad, and championship races for both men and women will
          be happening from 10am to 4pm. You can find the full schedule on the
          sign up form
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3DhGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUOEFKTE9CTlJMNFhKUkVHMVFaQTI0V0UySCQlQCN0PWcu&amp;data=05%7C02%7Ctarablue%40vt.edu%7C9a8e7a538a694a9b648008dcf2105655%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638651401517381844%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=odRhTi5NANvx1UXGDKB0dFsemMgpyxqL0kxZnUqmnis%3D&amp;reserved=0"
          >
            here
          </a>
          . <strong>Sign-up closes this Thursday, October 24</strong>. &nbsp;
        </p>
        <p>
          We are aiming to leave at 9am on Friday to make it before dusk to
          preview the course and have time to hang out at the hotel. If you will
          miss class, make sure to note this on the form so we can get you an
          excused absence letter.&nbsp;
        </p>
        <h3>
          <strong>🍫 Important info regarding Hersheypark:</strong>&nbsp;
        </h3>
        <p>
          NIRCA is offering an opportunity to get $15 off of Hersheypark
          tickets, bringing the ticket price to $40.84. You can buy tickets
          until November 10. Use promo code 90664 to get your tickets from
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.hersheypark.com%2Fqr%2FLJU6LK2W3K%2F&amp;data=05%7C02%7Ctarablue%40vt.edu%7C9a8e7a538a694a9b648008dcf2105655%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638651401517397969%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=f68KkGcSnpSCAoQvn8CIJyZ%2FUEtCwZZryCm44BAvt2Q%3D&amp;reserved=0"
          >
            this link
          </a>
          .&nbsp;
        </p>
        <p>
          There will not be time to visit the park after Nationals and the club
          as a whole will not be staying an extra day.
          <strong>
            If you want to go, you must arrange your own transportation to and
            from Hershey, as well as lodging the night of November 9.
          </strong>
          You will still be able to stay at the club hotel on Friday, November
          8.
        </p>
        <h3>
          <strong>✏️ Mid-Semester Anonymous Feedback Survey</strong>&nbsp;
        </h3>
        <p>
          It’s never too late to give feedback! The feedback survey is open for
          another week. We’d love to hear your thoughts on everything club
          related. The survey can be found
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3DhGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUMkNNMlc4Rko1TlBFV1FHWlc1WVZPUFpBSCQlQCN0PWcu&amp;data=05%7C02%7Ctarablue%40vt.edu%7C9a8e7a538a694a9b648008dcf2105655%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638651401517413456%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=SlASpK7YEDZFiMPhTXg5eNybjY9oIZqaoP%2Fj2HzmWVg%3D&amp;reserved=0"
          >
            here
          </a>
          and is completely anonymous. Please fill it out as it’ll let us know
          how we can best run the club going forward. Thank you!&nbsp;
        </p>
        <h3>
          <strong>🐼 Panda Express Percentage Night (10/28</strong>)
        </h3>
        <p>
          It’s time to get more yummy food and support your team. We will be
          heading over to Panda Express on Prices Fork after practice on Monday,
          October 28. 20% of the proceeds go to the club, so make sure to show
          them the attached flyer next Monday. If you can’t make it after
          practice, the deal is in place from 10:30am to 9:30pm.
        </p>
        <h3>
          <strong>🥄 Assassin Updates</strong>&nbsp;
        </h3>
        <p>
          We are in the end game now! 13 players remain in assassin, and things
          are getting intense! Here is your updated kill leaderboard:&nbsp;
        </p>
        <ul>
          <li>
            <p>Jonathan Goerlich: 3&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Chatham Campbell: 2&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Noah Gibson: 2&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Jamie Short: 2&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Danielle Metzger: 2&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Volkan Akkale: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Nathan Montgomery: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Ben Darden: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Andrew Olivieri: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Sam Harvey: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Samuel Yakulis: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Harris Naseh: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Caleb Kline: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Luis Ducharne: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Bridget Fuchs: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Jackson McDreamy: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Luke Thomas: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Wyatt Thomas: 1&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Ryan Christman: 1&nbsp;</p>
          </li>
        </ul>
        <p>
          The deadline to get your target is Sunday the 27th at 11:59pm,
          otherwise you will be eliminated. Best of luck to those still alive,
          and trust nobody!&nbsp;
        </p>
        <h3>
          <strong>📸 Photo Album</strong>&nbsp;
        </h3>
        <p>
          You can find the photos from last weekend’s race and any other club
          event here:
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/:f:/s/VTClubXCTF/EiFSRjLeEyJIiO5pu6v5NJMB8t-Aiuxm2V2-ws9XEsWnig?e=BdQxdM&amp;xsdata=MDV8MDJ8dGFyYWJsdWVAdnQuZWR1fDlhOGU3YTUzOGE2OTRhOWI2NDgwMDhkY2YyMTA1NjU1fDYwOTU2ODg0MTBhZDQwZmE4NjNkNGYzMmMxZTNhMzdhfDB8MHw2Mzg2NTE0MDE1MTc0MjkwOTR8VW5rbm93bnxUV0ZwYkdac2IzZDhleUpXSWpvaU1DNHdMakF3TURBaUxDSlFJam9pVjJsdU16SWlMQ0pCVGlJNklrMWhhV3dpTENKWFZDSTZNbjA9fDB8fHw%3d&amp;sdata=UnEzbEpBdFJDUjRsLzJHcWhoWUZ5T3BaSmRxL2dXR011S1V2aCtSUUpQUT0%3d"
          >
            Photos
          </a>
          . This album will have all the photos from this year so be sure to
          check it out after each event to see if you made it!&nbsp;
        </p>
        <p>
          For the best way to view photos:&nbsp;
          <br />
          1. Click on the link to get access.&nbsp;
          <br />
          2. Download the OneDrive app or go to OneDrive on your computer.&nbsp;
          <br />
          3. Find the VT Club XCTF Photo album.&nbsp;
          <br />
          4. On the top right, you can select to view the photos as tiles,
          instead of a list. This will give you the best experience looking
          through photos. I’ve also noticed that the app tends to load
          significantly quicker than the website.
        </p>
        <p>Have a great week!</p>
        <img src="https://i.imgur.com/EZEbrZI.jpeg" />
      </div>
    ),
  },
  {
    title: "Football on a Thursday?",
    url: "football-on-a-thursday-2024",
    year: "2024",
    date: "10 - 14",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/s9lifif.jpeg",
    content: (
      <div class="article-content">
        <p>
          Regionals is so soon. It is time to reap the benefits of fitness and
          secure a sweep!
        </p>
        <img src="https://i.imgur.com/0x5fJ7k.jpeg" />
        <h3>
          <strong>🕠 Practice at 5:30 PM Starting Today&nbsp;</strong>
        </h3>
        <p>What it says above. Don’t show up 30 minutes late.</p>
        <h3>
          <strong>✏️ Mid-Semester Anonymous Feedback Survey&nbsp;</strong>
        </h3>
        <p>
          Now that we’re halfway through the semester and have some races under
          our belt, we'd love to hear your thoughts on everything club related.
          Whether it be feedback on socials, races, practice, communication,
          please let us know. The survey can be found
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FResponsePage.aspx%3Fid%3DhGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUMkNNMlc4Rko1TlBFV1FHWlc1WVZPUFpBSCQlQCN0PWcu&amp;data=05%7C02%7Ctarablue%40vt.edu%7Caf5e0df13bd2400897af08dcec892916%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638645321070081924%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=K%2BLynDIZfoJOUMgX8hbNevt4CcKEXzBhfMW%2BBArk56k%3D&amp;reserved=0"
          >
            here
          </a>
          and is completely anonymous. Please fill it out as it’ll let us know
          how we can best run the club going forward. Thank you!&nbsp;
        </p>
        <h3>
          <strong>🏆 NIRCA Regionals (10/19)</strong>
        </h3>
        <p>
          Welcome to the post-season (kinda)! It’s regionals week which means
          it’s time for our first overnight meet of the year as we travel to
          Bethlehem, PA. Signups have already closed so you will receive an
          email from Ellie later this week with info regarding travel and
          lodging. We will be traveling with 7 vans, each crafted with love by
          your officer board and staying 15 minutes away from the course. There
          will be free breakfast in the morning so you can fuel up and turn on
          the jets on the course.
        </p>
        <h3>
          <strong>
            🚫 No Practice Thursday &amp; Friday (10/17 &amp; 10/18)&nbsp;
          </strong>
        </h3>
        <p>
          There will be no practice on Thursday, October 17 due to the Boston
          College football game. There will also be no practice on Friday,
          October 18 because we will be on our way to Pennsylvania. Rec Sports
          is canceling all practices and most of campus will be shut down on
          Thursday.
        </p>
        <h3>
          <strong>🥄 Assassin Updates&nbsp;</strong>
        </h3>
        <p>
          We are a week into assassin and a lot has happened so far! 11 players
          have been eliminated and 39 players remain alive. The following
          contestants have at least 1 elimination and will proceed into the next
          round:&nbsp;
        </p>
        <ul>
          <li>
            <p>Bridget Fuchs&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Luis Ducharne&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Andrew Olivieri&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Nathan Montgomery&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Ryan Christman&nbsp;&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Noah Gibson&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Harris Naseh&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Danielle Metzger&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Luke Thomas&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Jonathan Goerlich&nbsp;</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Sam Harvey&nbsp;</p>
          </li>
        </ul>
        <p>
          If you haven’t done so already, the deadline to eliminate your first
          target is Sunday, October 20 at 11:59 PM. If you do not get your
          target by the deadline, you will be eliminated. If you have any
          questions, reach out to Kevin. Best of luck to everyone still
          alive!&nbsp;
        </p>
        <h3>
          <strong>🎽 Singlet Requirement for Racing&nbsp;</strong>
        </h3>
        <p>
          To compete in NIRCA meets, you are required to wear a VT singlet. We
          have specially licensed singlets that we purchase every year and sell
          for $40.&nbsp;
        </p>
        <p>
          You can purchase a singlet during practice from our apparel officer
          Molly. We only accept cash or check (made out to “Treasurer at
          Virginia Tech”). You only have to purchase a singlet once and you can
          reuse it every other year you compete with club.
        </p>
        <p>
          If you are only planning on racing in the Spring, you can wait till
          then to purchase one.&nbsp;
        </p>
        <h3>
          <strong>📸 Photo Album&nbsp;</strong>
        </h3>
        <p>
          You can find the photos from last weekend’s race and any other club
          event here:
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/:f:/s/VTClubXCTF/EiFSRjLeEyJIiO5pu6v5NJMB8t-Aiuxm2V2-ws9XEsWnig?e=BdQxdM&amp;xsdata=MDV8MDJ8dGFyYWJsdWVAdnQuZWR1fGFmNWUwZGYxM2JkMjQwMDg5N2FmMDhkY2VjODkyOTE2fDYwOTU2ODg0MTBhZDQwZmE4NjNkNGYzMmMxZTNhMzdhfDB8MHw2Mzg2NDUzMjEwNzAxMDE4MDJ8VW5rbm93bnxUV0ZwYkdac2IzZDhleUpXSWpvaU1DNHdMakF3TURBaUxDSlFJam9pVjJsdU16SWlMQ0pCVGlJNklrMWhhV3dpTENKWFZDSTZNbjA9fDB8fHw%3d&amp;sdata=M05hbGwrSEJHaWxOVHNxMG4xcEQ4dHJnaHk3VWd4ZHhEMU9CKy9Vc2VLRT0%3d"
          >
            Photos
          </a>
          . This album will have all the photos from this year so be sure to
          check it out after each event to see if you made it!&nbsp;
        </p>
        <p>
          For the best way to view photos: <br />
          1. Click on the link to get access. <br />
          2. Download the OneDrive app or go to OneDrive on your computer.{" "}
          <br />
          3. Find the VT Club XCTF Photo album. <br />
          4. On the top right, you can select to view the photos as tiles,
          instead of a list. This will give you the best experience looking
          through photos. I’ve also noticed that the app tends to load
          significantly quicker than the website.&nbsp;
        </p>
        <p>
          As always, the best place to get up-to-date information related to
          anything club is through GroupMe. Please join these group chats if you
          haven’t already, and ask your captains at practice to get added to the
          training group-specific chats.&nbsp;
        </p>
        <h3>
          <strong>🍽️ D2sday &amp; 5:00 PM practice Tuesday (10/15)</strong>
        </h3>
        <p>
          We heard the demand for more team dinners, so we are having another
          D2sday this Tuesday! Practice is moving to 5:00. Whoa, that's a lot of
          practice moves. To recap: practice is now at 5:30 pm except for
          tomorrow, when it is at 5:00 pm so we can go eat yummy food after.
        </p>
        <h3>
          <strong>⏱️ Time Trial (10/24)</strong>
        </h3>
        <p>
          We are pleased to announce that we will have a track time trial for
          the first time in 3 years! It will be at Blacksburg High School and
          cover the following events preliminarily:
          <br />
          <br />
          100m/110m hurdles
          <br />
          100m
          <br />2 mile
          <br />
          200m
          <br />
          400m
          <br />
          300m hurdles
        </p>
        <p>
          A full signup will be sent in the announcements chat this week but I
          just wanted to get this out there so you can mark it on your
          calendars.
        </p>
        <p>Have a great week!</p>
        <img src="https://i.imgur.com/PucRZP7.jpeg" />
      </div>
    ),
  },
  {
    title: "Waterless in Blacksburg",
    url: "waterless-in-blacksburg-oct-7-2024",
    year: "2024",
    date: "10 - 7",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/QT7tt1N.jpeg",
    content: (
      <div class="article-content">
        <p>
          Congratulations to everyone that raced this past weekend at Pole
          Green! Our women’s team got a very strong third place finish with 68
          points and our men’s team finished first with a whopping 24 points.
          Onto Regionals!
        </p>
        <img src="https://i.imgur.com/Ky0deLX.jpeg" />
        <h3>🚨 No Practice Tuesday (10/8) &amp; Friday (10/11)</h3>
        <p>
          On Tuesday, there is a mandatory hazing prevention program that all
          officers must attend, so all practices are canceled. We won’t have
          practice on Friday because of fall break.
        </p>
        <p></p>
        <h3>🕠 Practice Time Moved to 5:30pm (10/14)</h3>
        <p>
          In an effort to prevent us from running in the dark, we’re moving the
          start of practice to 5:30pm starting next Monday, 10/14. There will be
          future practice time changes as the sun sets earlier.
        </p>
        <p></p>
        <h3>🥨 NIRCA Regionals (10/19)</h3>
        <p>
          It’s almost time for regionals! It’s time to put your work to the test
          in our second to last race for NIRCA Regionals at Lehigh University in
          Bethlehem, PA. The signup for the race can be found
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/pages/responsepage.aspx?id=hGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUREY0U0VaSFVIRVNTQ1o3WVdKWjk4V01KTSQlQCN0PWcu&amp;route=shorturl"
          >
            here
          </a>
          . Please complete it by this Friday, October 11.
        </p>
        <p></p>
        <h3>
          📝 NIRCA Nationals Interest Form – MUST COMPLETE TO RACE AT NATIONALS!
        </h3>
        <p>
          Please fill out this form so we can send your eligibility information
          to NIRCA. Do this ASAP! We have to print your responses and get your
          signature at practice. Completing this form does not mean you must
          come to nationals, but you must complete this form to race. So if
          you’re even slightly interested in going to NIRCA XC Nationals this
          year, please fill out the form. We will bring the printed versions and
          get your signatures at practice throughout the week.&nbsp;
        </p>
        <p></p>
        <h3>❤️ Hurricane Helene Relief Supply Drive (10/9 &amp; 10/10)</h3>
        <p>
          In partnership with Hokies for Hurricane Relief, co-founded by one of
          our own, Durant Parker-Ashe, we’ll be holding a supply drive to help
          the recovery efforts in Asheville, NC and the surrounding area. The
          drive will take place this Wednesday and Friday at the track during
          practice. Please bring the following items if you can:&nbsp;
        </p>
        <ul>
          <li>
            <p>
              Canned goods with TAB LIDS--fruits, vegetables, tuna, spam,
              soups&nbsp;
            </p>
          </li>
          <li>
            <p>Tuna pouches, chicken salad kits, etc.&nbsp;</p>
          </li>
          <li>
            <p>Peanut butter, jellies, honey&nbsp;</p>
          </li>
          <li>
            <p>
              Trail mix, prepackaged snacks, dried fruit, applesauce, fruit
              cups&nbsp;
            </p>
          </li>
          <li>
            <p>Granola bars, protein bars, cereal bars&nbsp;</p>
          </li>
          <li>
            <p>Dehydrated meals, cup ramen, instant oatmeal&nbsp;</p>
          </li>
          <li>
            <p>Gatorade, electrolyte/sports drink powder&nbsp;</p>
          </li>
          <li>
            <p>Bottled water&nbsp;</p>
          </li>
          <li>
            <p>
              Personal hygiene items (toothpaste, toothbrushes, deodorant,
              toilet paper, etc.)&nbsp;
            </p>
          </li>
          <li>
            <p>Linens, towels, blankets, pillows&nbsp;</p>
          </li>
          <li>
            <p>Diapers, baby food/formula</p>
          </li>
        </ul>
        <p>
          They also have a GoFundMe to support organizations helping out in the
          area and purchasing supplies. The link to donate can be found
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.gofundme.com/f/support-storm-relief-for-our-appalachian-neighbors?lang=en_US"
          >
            here
          </a>
          .&nbsp;
        </p>
        <p>
          If you’d like to be involved with their relief efforts, contact Durant
          at 757-375-3590. More info can be found
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.canva.com/design/DAGS0CSt0kE/6SsEFJ1kJv8rTiQUqRbgAQ/view#1"
          >
            here
          </a>
          .&nbsp;
        </p>
        <h3>🥾 Fall Break Hike (10/11)</h3>
        <p>
          We’re going to Stiles Falls! We will meet at the McComas lot at
          10:30am. Fill out
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/pages/responsepage.aspx?id=hGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUMjkzSlFTNjFFT0VMSkM3OTJYTlc0U0hUTyQlQCN0PWcu&amp;route=shorturl"
          >
            this form
          </a>
          so we can organize rides. It is recommended that you bring a towel and
          spare socks/shoes, as there is a water crossing and you may get wet.
        </p>
        <p></p>
        <h3>🐾 Bear Tracks (10/10 &amp; 10/11)</h3>
        <p>
          It's the last week of Bear Tracks! From 8:45 to 9:15am on Thursday and
          Friday, you can come to the elementary school and run around with
          kindergartners through 5th graders. This week’s theme is “Bubble
          Track” - we will be blowing bubbles as the kids run through them. This
          is your last chance to do Bear Tracks this semester, don't miss
          it!&nbsp;
        </p>
        <p></p>
        <h3>🥄 Assassin Starts Today&nbsp;</h3>
        <p>Come to practice to get your spoons and let the games begin!</p>
        <p></p>
        <h3>🎽 Singlet Requirement for Racing&nbsp;</h3>
        <p>
          To compete in NIRCA meets (which all our meets are), you are required
          to wear a VT singlet. We have specially licensed singlets that we
          purchase every year and sell for $40 (we make no profit from
          this!)&nbsp;
        </p>
        <p>
          You can purchase a singlet during practice from our apparel officer
          Molly. We only accept cash or check (made out to “Treasurer at
          Virginia Tech”). You only have to purchase a singlet once and you can
          reuse it every other year you compete with club.
        </p>
        <p>
          If you are only planning on racing in the Spring, you can wait till
          then to purchase one.&nbsp;
        </p>
        <p></p>
        <h3>📸 Photo Album&nbsp;</h3>
        <p>
          You can find the photos from last weekend’s race and any other club
          event here:
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/sites/VTClubXCTF/Photos/Forms/AllItems.aspx?id=%2Fsites%2FVTClubXCTF%2FPhotos%2FPhotos&amp;p=true&amp;ga=1&amp;LOF=1"
          >
            Photos
          </a>
          . This album will have all the photos from this year, so be sure to
          check it out after each event!&nbsp;
        </p>
        <p>For the best way to view photos:&nbsp;</p>
        <p>1. Click on the link to get access.&nbsp;</p>
        <p>
          2. Download the OneDrive app or go to OneDrive on your computer.&nbsp;
        </p>
        <p>3. Find the VT Club XCTF Photo album.&nbsp;</p>
        <p>
          4. On the top right, you can select to view the photos as tiles,
          instead of a list. This will give you the best experience looking
          through photos. I’ve also noticed that the app tends to load
          significantly quicker than the website.&nbsp;
        </p>
        <img src="https://i.imgur.com/ALKgMn2.jpeg" />
        <p>Have a great week!</p>
      </div>
    ),
  },
  {
    title: "The Calm After the Storm",
    url: "the-calm-after-the-storm-hokie-half-2024",
    year: "2024",
    date: "9 - 30",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/bNRg7uG.jpeg",
    content: (
      <div class="article-content">
        <img src="https://i.imgur.com/YYjjgMJ.jpeg" />
        <p>
          If you volunteered for the home meet, the Hokie Half, or both, THANK
          YOU! We are incredibly grateful for your time and help. You helped
          these events run smoothly.
        </p>
        <p>
          If you borrowed a vest, please return it to Volkan at practice by
          Wednesday at the latest.&nbsp;
        </p>
        <p>
          Congratulations to both our Men’s and Women’s teams for an incredible
          race weekend. We had a 1st place sweep at the home meet with 20 points
          for the Women’s team and 18 points for the Men’s team. We can’t wait
          to race at VCU next weekend!
        </p>
        <p>
          Lastly, congratulations to everyone that ran the Hokie Half last
          weekend, with a special shoutout to our very own Colin Volpe for
          winning the race!
        </p>
        <h3>🍽️ D2sday &amp; Practice at 5:00pm for Tuesday ONLY (10/1)</h3>
        <p>
          First on-campus team dinner of the year is here. We’ll be heading over
          to D2 after practice this Tuesday, October 1 for a feast of champions.
          Practice is at 5:00pm for this day only so that we still have plenty
          of time to get food before they stop serving. Practice will be moved
          earlier to account for shorter days permanently at a later date that
          is to be announced.&nbsp;
        </p>
        <h3>🐏 VCU Meet (10/5)</h3>
        <p>
          Our last meet before regionals is this weekend in Mechanicsville, VA!
          We will be racing at Pole Green cross country course hosted by VCU.
          You will receive an email later this week with further information
          from our wonderful race coordinator Ellie, so stay tuned!
        </p>
        <h3>🐾 Bear Tracks</h3>
        <p>
          It's the second to last week of Bear Tracks! From 8:45 to 9:15am on
          Thursday and Friday, you can come out to the elementary school and run
          around with kindergartners through 5th graders. This week’s theme is
          “Wacky Track” - there will be obstacles on the track!
        </p>
        <h3>👕 Last Two Days to Buy Apparel!</h3>
        <p>
          Want to represent the club around campus and back home? We have swag
          for you! You can buy officially licensed Nike VT Club XCTF merch from
          us through this form. All selections must be made and paid for by
          October 2 at practice to our treasurer Evelyn. As with all things, we
          accept cash or check only. Checks must be made out to “Treasurer at
          Virginia Tech.”&nbsp;&nbsp;
        </p>
        <h3>🥄 Assassin Starts Next Week&nbsp;</h3>
        <p>
          We play this game every semester! Participants are given a target and
          a plastic spoon. You must find and touch your target with the spoon in
          order to “assassinate” them and move on to the next week. Once you
          kill your target, their target is now your target until there is only
          one remaining. Look out for Kevin’s message on GroupMe later today
          with full rules and instructions on how to sign up. May the best
          assassin win!
        </p>
        <h3>🎽 Singlet Requirement for Racing&nbsp;</h3>
        <p>
          To compete in NIRCA meets (all our meets are), you are required to
          wear a VT singlet. We have specially licensed singlets that we
          purchase every year and sell for $40.
        </p>
        <p>
          You can purchase a singlet during practice from our apparel officer
          Molly. We only accept cash or check (made out to “Treasurer at
          Virginia Tech”). You only have to purchase a singlet once, and you can
          reuse it every other year you compete with club.
        </p>
        <p>
          If you are only planning on racing in the Spring, you can wait until
          then to purchase one.&nbsp;
        </p>
        <h3>📸 Photo Album&nbsp;</h3>
        <p>
          You can find the photos from last weekend’s race and any other club
          event{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/:f:/s/VTClubXCTF/EiFSRjLeEyJIiO5pu6v5NJMB8t-Aiuxm2V2-ws9XEsWnig?e=BdQxdM&amp;xsdata=MDV8MDJ8dGFyYWJsdWVAdnQuZWR1fDk2MTMzNzk2ZjY4MTQ5ZjI1Njg1MDhkY2UxN2Y5ZmE4fDYwOTU2ODg0MTBhZDQwZmE4NjNkNGYzMmMxZTNhMzdhfDB8MHw2Mzg2MzMxODU0NjkzMDgzNTh8VW5rbm93bnxUV0ZwYkdac2IzZDhleUpXSWpvaU1DNHdMakF3TURBaUxDSlFJam9pVjJsdU16SWlMQ0pCVGlJNklrMWhhV3dpTENKWFZDSTZNbjA9fDB8fHw%3d&amp;sdata=OU9zSDRMbTI1ampWamUvRFVLUWxkYm1kOFY0S1FtdElkRERhL2ppT0dlMD0%3d"
          >
            here
          </a>
          . This album will have all the photos from this year, so be sure to
          check it out after each event!
        </p>
        <p>For the best way to view photos:&nbsp;</p>
        <p>1. Click on the link to get access.&nbsp;</p>
        <p>
          2. Download the OneDrive app or go to OneDrive on your computer.&nbsp;
        </p>
        <p>3. Find the VT Club XCTF Photo album.&nbsp;</p>
        <p>
          4. On the top right, you can select to view the photos as tiles,
          instead of a list. This will give you the best experience looking
          through photos. The app tends to load significantly quicker than the
          website.&nbsp;
        </p>
        <h3>
          <strong>🏋️ </strong>Team Lifts on Thursdays
        </h3>
        <p>
          Team lift is at the Bubble right next to practice! Not only will you
          become a stronger athlete, but this is the perfect opportunity to meet
          the rest of your team besides your training group.&nbsp;
        </p>
        <p>
          As always, the best place to get up-to-date information related to
          anything club is through GroupMe. Please join these group chats if you
          haven’t already, and ask your captains at practice to get added to the
          training group-specific chats.
        </p>
        <p>Good luck at Pole Green! Have a great week!</p>
        <img src="https://i.imgur.com/OPm2x7N.jpeg" />
      </div>
    ),
  },
  {
    title: "Almost Race Day! 🏃‍♂️🏃‍♀️",
    url: "almost-race-day-uva-2024",
    year: "2024",
    date: "9 - 16",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/ld9f6ld.jpeg",
    content: (
      <div class="article-content">
        <p>
          It’s race week! We have our first meet of the season at UVA this
          Saturday. With that being said, the sign up for our second meet (our
          home meet) is already here. The best place to get up-to-date
          information is through GroupMe. Please join these group chats if you
          haven’t already, and ask your captains at practice to get added to the
          training group-specific chats.&nbsp;
        </p>
        <img src="https://i.imgur.com/r38WxM5.jpeg" />
        <h3>
          <strong>⚔️ UVA Meet and Singlet Requirement (9/21)</strong>
        </h3>
        <p>
          You will get an email from our wonderful race coordinator Ellie later
          this week with specific information for the UVA meet. To compete in
          NIRCA meets, you are required to wear a VT singlet. We have specially
          licensed singlets that we purchase every year and sell for $40 (we
          make no profit from this!)
        </p>
        <p>
          You can purchase a singlet during practice from our apparel officer
          Molly. We only accept cash or check (made out to “Treasurer at
          Virginia Tech”). You only have to purchase a singlet once and you can
          use it to race each semester. If you are only planning on racing in
          the Spring, you can wait till then to purchase one.&nbsp;
        </p>
        <h3>🏠 Hokie Invite (Home Meet) Sign Up &amp; Volunteering (9/28)</h3>
        <p>
          We will be hosting our annual Hokie Invite race on Saturday, September
          28th at Blacksburg High School. You can set your alarms at a
          reasonable time for this one since it’s just a short drive from
          campus. The sign up can be found{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/pages/responsepage.aspx?id=hGiVYK0Q-kCGPU8yweOjesWALSeB089Pmst0CjSf87dUODA5MlU3NkxDUVZTUVFNRzJLMkE4VEpRTyQlQCN0PWcu&amp;route=shorturl"
          >
            here
          </a>{" "}
          and closes on Saturday, September 21st. As with all races, make sure
          to set up your NIRCA account, complete your IMLeagues forms, and pay
          your $100 racing dues.&nbsp;
        </p>
        <p>
          If you do not plan on racing this meet, please consider signing up to
          volunteer. We need volunteers to help marshal the course and make sure
          the event runs smoothly. We couldn’t do this without your help!
        </p>
        <h3>🦃 Hokie Half Volunteering (9/28 &amp; 9/29)&nbsp;</h3>
        <p>
          It’s time for our biggest volunteer opportunity of the year! The Hokie
          Half Marathon is on Sunday, September 29th and they need our help. The
          event is run by our biggest sponsor, Runabout Sports, and their
          support helps us keep dues the lowest among all sport clubs at VT. You
          will get a free Hokie Half volunteer shirt for helping, so make sure
          to sign up soon to be guaranteed a shirt your size! Please complete{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.signupgenius.com/go/10C0F49A9A628A1FAC61-51465156-hokie#/"
          >
            the sign up form
          </a>{" "}
          by this Thursday, September 19th.
        </p>
        <h3>🧑&zwj;🍳 Fall Cookout (9/22)</h3>
        <p>
          It's time for our annual Fall Cookout! We will be meeting at the
          Blacksburg Municipal Park on Sunday, September 22nd from 12pm to 3pm.
          If you are attending, regardless of whether you are bringing food,
          please RSVP{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.signupgenius.com/go/10C0948ABA92AA0FBC52-51458886-fall?useFullSite=true"
          >
            here
          </a>
          .&nbsp;
        </p>
        <p>
          This event is a potluck, so please try to bring/make food if you can!
          We'll be outside, so be sure to bring any games! If you need a ride,
          talk to one of your upperclassmen friends or ask around. You can also
          take NMP which leaves from the Maroon Bay every 30 minutes.
        </p>
        <h3>🐾 Bear Tracks</h3>
        <p>
          Bear Tracks is back! Every year, we partner with Margaret Beeks
          Elementary School to help out with their Bear Tracks program. From
          8:45am to 9:15am on Thursdays and Fridays, you can come out to the
          elementary school and run around with kindergartners through 5th
          graders. This week’s theme is “Rainbow Track” so make sure to wear
          your favorite color.
        </p>
        <h3>🏋️ Team Lifts on Thursdays&nbsp;</h3>
        <p>
          Just like last week, we’ll be having a team-wide lifting session after
          practice on Thursday at the Bubble right next to practice! Not only
          will you become a stronger and better athlete, but this is the perfect
          opportunity to meet the rest of your team besides your training
          group.&nbsp;
        </p>
        <p>
          We appreciate your help and support! Have a great week and a speedy
          race!
        </p>
        <img src="https://i.imgur.com/X9Q2AvN.jpeg" />
      </div>
    ),
  },
  {
    title: "Welcome To Club XCTF! 🎉",
    url: "welcome-to-club-xctf-fall-2024",
    year: "2024",
    date: "9 - 10",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/GqXmXlx.jpeg",
    content: (
      <div class="article-content">
        <p>
          Welcome back, everyone! If you are reading this, you survived the
          first week of practice. Once you have completed your membership
          survey, IMLeagues forms, and paid your dues, it is smooth sailing from
          here!
        </p>
        <h3>
          <strong>💬 Join Our Group Me(s)</strong>
        </h3>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://groupme.com/join_group/75589174/gJRxhuYw"
          >
            Announcements Chat
          </a>
          : This is used for time-sensitive announcements that can’t wait for
          the weekly email, like race sign up reminders and weather related
          practice cancellations.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://groupme.com/join_group/67837472/orELO6Nz"
          >
            General Chat
          </a>
          : A place for everyone to chat with each other regardless of what
          practice group they’re a part of.
        </p>
        <p>
          Practice group-specific chats: Your captains will add you to these.
          Come to practice and ask to be added if you aren’t in it already. This
          is for communication within groups.
        </p>
        <h3>
          <strong>👀 Where Do We Meet?</strong>
        </h3>
        <p>
          We have practice every weekday at 6pm at the Johnson-Miller Track
          Complex unless there is a university holiday. You can park in front of
          the track (unless there’s a game happening) or at the Chicken Hill
          lot. We understand that you are all busy college students, so
          everything we do from practice to socials to meets is optional, but we
          would still love to see you come out as often as you can!
        </p>
        <h3>
          <strong>🏃 Membership Requirements</strong>
        </h3>
        <p>
          Here are the three items you must complete in order to be an official
          member of the club.
          <strong>
            These must be completed by this Friday, September 13th
          </strong>
          .
        </p>
        <ol>
          <li>
            <p>
              <span>Complete the </span>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://forms.office.com/r/Xgm9Cn9FEP"
              >
                membership survey
              </a>
              <span>.</span>
            </p>
          </li>
          <li>
            <p>
              <span>Fill out your </span>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://connect.recsports.vt.edu/IMLeague"
              >
                IMLeagues forms
              </a>
              <span>
                . Remember, you do not have to pay the $25 intramurals fee.
                Detailed instructions for what to click can be found on the join
                page of our website{" "}
              </span>
              <Link to="/join">here</Link>
              <span>.</span>
            </p>
          </li>
          <li>
            <p>
              <span>
                Pay your dues! Dues are $30 if you are not competing this
                semester and $100 if you are.{" "}
                <mark>
                  Dues must be paid by cash or check only (checks made out to
                  “Treasurer at Virginia Tech”)!
                </mark>{" "}
                Dues cover your travel and lodging expenses as well as entry
                fees for 5 meets each semester.
              </span>
            </p>
          </li>
        </ol>
        <div className="highlighted-message">
          <p>
            <span>
              The location to pay dues has changed! Dues are now paid at the
              Sport Clubs office in War Memorial Gym. The office is on your left
              just past where you swipe to get in.{" "}
              <mark>
                They are only accepting dues payments at specific hours.
              </mark>{" "}
              The hours for this week are as follows:
            </span>
          </p>
          <ul>
            <li>
              <p>
                <span>Monday: 2:30 - 5:30 pm</span>
              </p>
            </li>
            <li>
              <p>
                <span>Tuesday: 8:30 - 11:30 am</span>
              </p>
            </li>
            <li>
              <p>
                <span>Wednesday: 8:30 - 11:30 am</span>
              </p>
            </li>
            <li>
              <p>
                <span>Thursday: 2:30 - 5:30 pm</span>
              </p>
            </li>
            <li>
              <p>
                <span>Friday: 9:30 - 11:30 am</span>
              </p>
            </li>
          </ul>
        </div>
        <p>
          <span>
            Again, everything must be completed by this Friday, September 13.
          </span>
        </p>
        <h3>
          <span>
            <strong>⚔️ Our First Race at UVA (9/21)</strong>
          </span>
        </h3>
        <p>
          <span>
            It’s only the second week of practice but we’re already signing up
            for the first meet. We are super excited to beat UVA in their home
            turf as we’ve done many, many, times before and you won’t want to
            miss this season opener tradition, so make sure to sign up{" "}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/pages/responsepage.aspx?id=hGiVYK0Q-kCGPU8yweOjenEZl5cstKNHpCUuyeCYfnpUOEhOMldJUkY0QkdHMjkyNzNYTDJaT0dBRi4u&amp;route=shorturl"
          >
            here
          </a>
          <span> by this Friday, September 13th!</span>
        </p>
        <p>
          <span>
            <mark>
              REMINDER: THERE ARE NO TRYOUTS OR CUTS. YOU CAN RACE BY SIMPLY
              SIGNING UP AND COMPLETING THE MEMBERSHIP REQUIREMENTS FOR RACING.
            </mark>
          </span>
        </p>
        <p>
          <span>
            The following is a message from our Race Coordinator, Ellie:
          </span>
        </p>
        <p>
          <span>
            If you have not raced with us before, I NEED you to fill out{" "}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/r/Ju2siwufps"
          >
            this
          </a>
          <span>
            {" "}
            form (also found in step 1 below) by
            <strong>Tuesday, September 10</strong>. This is so I can create your
            NIRCA account so that you can eventually be registered to
            race.&nbsp;
          </span>
        </p>
        <p>
          <span>Here's what you need to do:</span>
        </p>
        <ol>
          <li>
            <p>
              <span>Fill out </span>
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://forms.office.com/r/Ju2siwufps"
              >
                this
              </a>
              <span>
                {" "}
                form by 9/10/2024 (I will create your account with this info).
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                Verify your account via the email NIRCA will send you.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                NIRCA will send you an email to fill out a waiver. Try to do
                this ASAP!
              </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                Once you fill out the waiver, I can then register you for the
                race.
              </span>
            </p>
          </li>
        </ol>
        <p>
          <span>
            If you are hesitant about whether or not you want to race, we
            encourage you to watch{" "}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.youtube.com/watch?v=MlY38bTQTvA"
          >
            this video
          </a>
          <span>
            {" "}
            from one of our alumni. We think it’ll give you a good idea of what
            our competitions look like. We are taking applications for
            inflatable dinosaurs too, as Tyler graduated that year and we’ve had
            no one step up to take his place.
          </span>
        </p>
        <img src="https://i.imgur.com/RhZIges.jpeg" />
        <h3>
          <span>
            <strong>🌯 🥑 Chipotle Percentage Night (9/10)</strong>
          </span>
        </h3>
        <p>
          <span>
            It’s time for our first team dinner of the season! We will be going
            to Chipotle on Main Street after practice. 25% of the proceeds
            support the club and help us keep dues low. You must show them{" "}
            <a href="https://virginiatech.sharepoint.com/:b:/s/VTClubXCTF/EQhdL0HxVz9MkttXXJJUWNABqWjyX82SEqliP1Fo7nS5gQ?e=8JuJAq">
              this flyer
            </a>{" "}
            or tell them you're with VT Club XCTF for us to get the percentage
            from your order. Hope to see you all there!
          </span>
        </p>
        <h3>
          <span>
            <strong>⚽️ Rec Field Social (9/14)</strong>
          </span>
        </h3>
        <p>
          <span>
            Come out to the Rec Fields this
            <strong>Saturday, September 14 at noon</strong> to play games! We’ll
            have spikeball, football, frisbees, soccer, etc. If you have
            anything else you’d like to play, please bring it! This is yet
            another great opportunity to meet your teammates.
          </span>
        </p>
        <h3>
          <span>
            <strong>🏋️ Team Lifts on Thursdays</strong>
          </span>
        </h3>
        <p>
          <span>
            New this year, we’ll be having a team-wide lifting session after
            practice on Thursdays at the Bubble right next to practice! We had
            our first session last week and it was a big success. Not only will
            you become a stronger and better athlete, but this is the perfect
            opportunity to meet the rest of your team besides your training
            group.
          </span>
        </p>
        <p>
          <span>Take a look at our </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.youtube.com/watch?v=xjr1MT0Jg8g"
          >
            recap video
          </a>
          <span>
            from last year. If you like what you see, we’ve got a lot more on
            the way. Here’s to a great year, everyone!
          </span>
        </p>
        <img src="https://i.imgur.com/qTpbRUt.jpeg" />
      </div>
    ),
  },
  {
    title: "A Much Shorter Drive to Olivet",
    url: "a-much-shorter-drive-to-olivet",
    year: "2024",
    date: "4 - 9",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/rdLKoez.jpg",
    content: (
      <div class="article-content">
        <p>
          Some may say that we had a successful weekend. Our women's team placed
          3rd and our men's team placed 2nd at NIRCA Track &amp; Field Nationals
          in Richmond! For the first time in the history of the universe, a
          track meet ended ahead of schedule.
        </p>
        <img src="https://i.imgur.com/jERmYQX.jpg" />
        <p>
          Congratulations to everyone that competed! I hope that your legs are
          tired from racing and your voices are tired from cheering. Does anyone
          know where I can find photos? Never mind, I just found it right&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/sites/VTClubXCTF/Photos/Forms/AllItems.aspx?id=%2Fsites%2FVTClubXCTF%2FPhotos%2F2023%2D2024&amp;p=true&amp;ga=1"
          >
            here
          </a>
          . If you earned a PR or club record, please fill out&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/document/d/1xhKa4OfgWl1IrF61QXOsxDka3m9VyROMgIERUucdJTg/edit"
          >
            this document
          </a>
          &nbsp;so we can recognize you! The clubs records (so far, according to
          the document) are as follows:
        </p>
        <ul>
          <li>
            <p>Samuel Yakulis, 3000mSC, 9:28.97 (NIRCA meet record)</p>
          </li>
          <li>
            <p>Shannon Fisher, Shot Put, 9.93m</p>
          </li>
          <li>
            <p>Tara Blue, Half Marathon, 1:29:26</p>
          </li>
          <li>
            <p>Anna Rigby, 5000m, 17:20.06</p>
          </li>
          <li>
            <p>Chris Nunn, 5000m, 14:51.26</p>
          </li>
        </ul>
        <img src="https://i.imgur.com/O5wDKNA.jpg" />
        <p>
          Special shout out to Bella, Christian, and Tyler for competing in the
          Iron Mann challenge! Congrats to Christian for his first Iron Mann
          completion and to Bella for being the first woman in club history to
          achieve this feat! They pictured below next to Colin Mann, the first
          Iron Mann and the namesake of the challenge.
        </p>
        <img src="https://i.imgur.com/pXNpKcs.jpg" />
        <h3>
          <strong>💙💛 </strong>
          <strong>Blacksburg High School Meet Volunteering - 4/13</strong>
        </h3>
        <p>
          There is another great volunteer opportunity on&nbsp;
          <strong>Saturday, April 13 at Blacksburg High&nbsp;School</strong>.
          They are hosting a home meet that weekend and need volunteers. BHS
          helps us every year with our two home meets, and this is our
          opportunity to give back. This is the same day as the 3.2 for 32 run
          on campus so if you are running in the morning, you can come right
          after and still volunteer! The signup can be found&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSe67YXLHpdLIP4XQ6X1fHgjTi4Vm5PycaxNCU7y7EY7ahwJZA%2Fviewform%3Fvc%3D0%26c%3D0%26w%3D1%26flr%3D0&amp;data=05%7C02%7Ctarablue%40vt.edu%7Ca4ea1e6ab5404b10db8a08dc57dcc78a%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638481852955474527%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=EfRFhsIZwmojOsTqV1opjEq9WUVThmfu9hsTfx0OrDs%3D&amp;reserved=0"
          >
            here
          </a>
          &nbsp;- please consider volunteering if you can. They literally cannot
          host this meet without our help.
        </p>
        <p></p>
        <h3>
          <strong>🙀 WildCat Invitational - 4/20</strong>
        </h3>
        <p>
          While Nationals may be over, our track season surely isn't! We'll be
          traveling to Randolph College for their WildCat Invitational on
          Saturday, April 20th (with Javelin on 4/19). Yeah, this is the meet
          that formerly was our Twilight meet (and then got changed, and then
          rain made it a twilight meet anyway). You can sign up&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfcHJkSuuprMsgjtjEEbB0pqI3QeIazvT31o26jbi3h77SeZg%2Fviewform%3Fusp%3Dsf_link&amp;data=05%7C02%7Ctarablue%40vt.edu%7Ca4ea1e6ab5404b10db8a08dc57dcc78a%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638481852955481637%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=sC04HXJWBVOwmt5lCkvb7pHVN%2FTECgEQz5K%2B%2BbCRpRw%3D&amp;reserved=0"
          >
            here.
          </a>
          I think you know the drill by this point. Dues, IMLeagues, membership
          survey. Please fill out this form by{" "}
          <strong>Friday, April 12th.</strong>
        </p>
        <p></p>
        <h3>
          🐻🐾 <strong>Bear Tracks Signup</strong>
        </h3>
        <p>
          Hey what's that? A really cool opportunity to connect&nbsp;with the
          community and get some volunteer hours? Yes it is! For the second year
          in a row, we're helping Margaret Beeks Elementary School with their
          running program. This is super fun and you'll get to run around with
          and race elementary schoolers in their tiny track. If you need
          volunteer hours, this is a great way to get them, and we can sign off
          on any document you need showing you did your hours. If you have any
          free time in the morning on Wednesdays or Thursdays, please sign up on
          the form&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.signupgenius.com%2Fgo%2F10C0F49A9A628A1FAC61-48740769-bear&amp;data=05%7C02%7Ctarablue%40vt.edu%7Ca4ea1e6ab5404b10db8a08dc57dcc78a%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638481852955488733%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=1LoCj6MFihKC3Rni4Vc%2FDFevk0C5soKUZoftAuCWZgc%3D&amp;reserved=0"
          >
            here
          </a>
          . This week's theme is pajamas!
        </p>
        <p></p>
        <h3>
          <strong>🕵️ </strong>
          <strong>Scavenger Hunt - 4/14</strong>
        </h3>
        <p>
          Puzzle Master Wyatt is curating the scavenger hunt of all time for us
          to participate in on&nbsp;<strong>Sunday, April 14</strong>. Bring out
          your trench coats and magnifying glasses... put on your detective
          hats... polish your pipes... you get the idea. Your teams are your
          vans for nationals! If you didn't go to nationals, feel free to join
          any team you'd like. More info coming out at the end of the week.
        </p>
        <p></p>
        <h3>
          <strong>🏀 </strong>March Madness Update
        </h3>
        <p>March Madness has ended, so we can crown our bracket winners!</p>
        <p>Men’s Bracket Champion 🏆: Phil Lopez and Jenny Patel (tied!)</p>
        <p>
          Women’s Bracket Champion 🏆: Kevin Kiernan (this could be rigged
          because he coordinated this event.)
        </p>
        <img src="https://i.imgur.com/GaHS3dt.jpg" />
      </div>
    ),
  },
  {
    title: "The Most Wonderful Time of the Year! (NIRCA Nationals)",
    url: "the-most-wonderful-time-of-the-year",
    year: "2024",
    date: "4 - 1",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/jpKZTKx.jpg",
    content: (
      <div class="article-content">
        <p>
          NIRCA Track &amp; Field (and half marathon) Nationals are almost here!
          Ellie & Roman will send an email later this week with detailed
          information. We are bringing a record number of people to the two-day
          meet! Get excited to race, cheer, and most importantly, have a lot of
          fun this weekend.
        </p>
        <p>
          We will be leaving in two groups at 4:30pm and 5:00pm on Friday, April
          5. If you need an excused letter for Friday, let Volkan know by the
          end of the day Tuesday.
        </p>
        <img src="https://i.imgur.com/7BJXdox.jpg" />
        <h3>🐻🐾 Bear Tracks Sign Up</h3>
        <p>
          Bear Tracks starts this <strong>Wednesday at 8:40am-9:15am</strong>.
          Don't miss out on this really cool opportunity to connect&nbsp;with
          the community and get some volunteer hours. You'll get to run around
          with and race elementary schoolers on their tiny track. If you need
          volunteer hours, this is a great way to get them, and we can sign off
          on any document you need showing you did your hours. If you have any
          free time in the morning on Wednesdays or Thursdays, please sign up on
          the form&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="x_OWAAutoLink"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.signupgenius.com%2Fgo%2F10C0F49A9A628A1FAC61-48740769-bear&amp;data=05%7C02%7Ctarablue%40vt.edu%7Cad2863203a42401a2c5f08dc525f578c%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638475816676784785%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=ecjrP2PNLpAs3ZBIWp9qZ6vG%2Fep4LflOyiKefMN8kVs%3D&amp;reserved=0"
          >
            here
          </a>
          .&nbsp;
          <u>
            <i>This week's theme is color run</i>
          </u>
          , so wear your favorite color while you volunteer!
        </p>
        <h3>
          <strong>💙💛Blacksburg High School Meet Volunteering - 4/13</strong>
        </h3>
        <p>
          There is another great volunteer opportunity on
          <strong>Saturday, April 13 at Blacksburg High School</strong>. They
          are hosting a home meet that weekend and need volunteers. BHS helps us
          every year with our two home meets, and this is our opportunity to
          give back. This is the same day as the 3.2 for 32 run on campus so if
          you are running in the morning, you can come right after and still
          volunteer! The signup can be found&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="x_OWAAutoLink"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSe67YXLHpdLIP4XQ6X1fHgjTi4Vm5PycaxNCU7y7EY7ahwJZA%2Fviewform%3Fvc%3D0%26c%3D0%26w%3D1%26flr%3D0&amp;data=05%7C02%7Ctarablue%40vt.edu%7Cad2863203a42401a2c5f08dc525f578c%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638475816676797584%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=GwMRchUs9rLnO%2B7pIQMuzhXTUs136v%2FaAf0uUzHsUvs%3D&amp;reserved=0"
          >
            here
          </a>
          &nbsp;- please consider volunteering if you can.
        </p>
        <h3>🍦🥗 Practice Moved &amp; DWednesday - 4/3</h3>
        <p>
          Are you hungry? I know I am. Come out to DWednesday™ after practice on
          April 3 to get some grub with the team.
          <strong>We will be moving practice to 5pm on Wednesday</strong>
          &nbsp;to make sure we have enough time to eat before D2 closes. See
          you there!
        </p>
        <h3>
          <strong>🚫 No Practice Friday - 4/5</strong>
        </h3>
        <p>
          We are going to Nationals. Have you heard? There will be no practice
          on Friday. Don't be late to your vans. And if you're not coming with
          us this weekend, I hope you have a great weekend and make sure to
          cheer on your teammates on social media. We will have a livestream of
          the meet and keep our Instagram story updated with podium finishes and
          other shenanigans.
        </p>
        <h3>
          <strong>🕵️ Scavenger Hunt - 4/14</strong>
        </h3>
        <p>
          Puzzle Master Wyatt is curating the scavenger hunt of all time for us
          to participate in on <strong>Sunday, April 14</strong>. Bring out your
          trench coats and magnifying glasses... put on your detective hats...
          polish your pipes... you get the idea. More details to come next week
          but it'll be a lot of fun so I hope to see you there!
        </p>
        <h3>
          <strong>🗓️ April Club XCTF Calendar</strong>
        </h3>
        <p>
          "Wow, that's a lot of events to keep track of," I hear you saying.
          Well do not fret, for we have just the solution.&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="x_OWAAutoLink"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1vto6MZSd89d8Oco3nE2SiZ6kNOBus_CQIX0S4OomjXE%2Fedit%3Fusp%3Dsharing&amp;data=05%7C02%7Ctarablue%40vt.edu%7Cad2863203a42401a2c5f08dc525f578c%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638475816676805960%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=tiQ%2FJEduUfXkn0P7vnjzcbZBt7XWd8hqsKBXXEDYB0w%3D&amp;reserved=0"
          >
            Here
          </a>
          &nbsp;is the club events calendar for the month of April. This is the
          last calendar for the year - I guess time flies when you're having
          fun.
        </p>
        <h3>
          <strong>🥄 </strong>Assassin Update
        </h3>
        <p>
          We're in the final stretch now... only seven people remain in the race
          for Assassin Champion. About half of the people who were still in
          yesterday have perished to the kill deadline - better luck next time.
          Who will win? Who will take home the coveted paper plate award? Here's
          the leaderboard as it stands but remember it's not about who has the
          most kills, but about who's remaining at the end. Good luck!
        </p>
        <ul>
          <li>
            <p>Tyler Houston: 5</p>
          </li>
          <li>
            <p>Nathan Montgomery: 4</p>
          </li>
          <li>
            <p>Danielle Metzger: 1</p>
          </li>
          <li>
            <p>Volkan Akkale: 1</p>
          </li>
          <li>
            <p>Jackson McGrath: 1</p>
          </li>
          <li>
            <p>Joe Gora: 1</p>
          </li>
          <li>
            <p>Andrew Olivieri: 1</p>
          </li>
        </ul>
        <h3>
          <strong>🚐 Van Draft - 4/2</strong>
        </h3>
        <p>
          The long-awaited Van Draft™&nbsp;is finally here. This is an
          opportunity for the van drivers to choose their vans. With 121
          athletes traveling and 21 van drivers, we will have 5 rounds of picks
          and follow a&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="x_OWAAutoLink"
            href="https://nam04.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.profootballnetwork.com%2Fwhat-is-a-snake-draft-rules-how-it-works-strategies-and-more%2F&amp;data=05%7C02%7Ctarablue%40vt.edu%7Cad2863203a42401a2c5f08dc525f578c%7C6095688410ad40fa863d4f32c1e3a37a%7C0%7C0%7C638475816676813847%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&amp;sdata=cg9YfA3Q858NCce%2FC3lJ9GtkJpejnixvcG8S%2F%2FJr5c0%3D&amp;reserved=0"
          >
            snake draft
          </a>
          &nbsp;format. The draft will take place in
          <strong>Wallace 340 at 8:00pm on Tuesday, April 2</strong>. By random
          number generator, Tyler Houston &amp; Christian Crawley's van has been
          chosen to make the first overall pick. The remaining 10 driver pairs
          have also been assigned a slot from 2-11. The pairs will make two
          picks per round, and we will alternate order of picking per the rules
          of the snake draft.
        </p>
        <p>
          Following the conclusion of the initial drafts, there will be time
          given to each van to consult among themselves and offer trades to
          other vans. After a maximum of 30 minutes of deliberation, we will
          deem all vans final and share the results on GroupMe. Do not fear if
          you are not a van driver, because as soon as you are drafted to a van,
          you are able to participate in discussion within your new van about
          future picks as well as potential trades.
        </p>
        <p>
          This is the first time we're trying this as a team, so if you have any
          questions don't hesitate to email Wyatt (
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="mailto:wyatt@vt.edu"
          >
            wyatt@vt.edu
          </a>
          ). Hope to see you all there and good luck!
        </p>
        <img src="https://i.imgur.com/RYF2OUJ.jpg" />
      </div>
    ),
  },
  {
    title: "12 Hour Track Meets are BACK!",
    url: "12-hour-track-meets-are-back",
    year: "2024",
    date: "3 - 26",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/pgToJtl.jpg",
    content: (
      <div class="article-content">
        <p>
          Congratulations to our athletes who competed at Bridgewater and
          Lynchburg this past weekend!
        </p>
        <p>
          For Doc Jopson Track &amp; Field Invitational results, click&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://va.milesplit.com/meets/586718-doc-jopson-track-and-field-invitational-2024/results/1010648/raw"
          >
            here
          </a>
          .
        </p>
        <p>
          For the Dr. Jack M Toms Invitational results, click&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://va.milesplit.com/meets/586725-dr-jack-m-toms-invitational-2024/results/1010636/raw"
          >
            here
          </a>
          .&nbsp;
        </p>
        <p>We have more club records to report (all field events!):</p>
        <ul>
          <li>
            <p>Shannon Fisher, Women’s Discus: 33.09m</p>
          </li>
          <li>
            <p>Shannon Fisher, Women’s Javelin: 25.34m</p>
          </li>
          <li>
            <p>Jenny Patel, Women’s Hammer: 27.08m</p>
          </li>
          <li>
            <p>Tyler Copeland, Men’s Discus: 39.31m</p>
          </li>
          <li>
            <p>Dillon Luke, Men’s Javelin: 52.43m</p>
          </li>
          <li>
            <p>Chris Helmsen, Men’s Hammer: 42.71m</p>
          </li>
        </ul>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/sites/VTClubXCTF/Photos/Forms/AllItems.aspx?id=%2Fsites%2FVTClubXCTF%2FPhotos%2F2023%2D2024&amp;p=true&amp;ga=1"
          >
            OneDrive album
          </a>
          &nbsp;for photos from meets and socials!
        </p>
        <img src="https://i.imgur.com/TAnt4f2.jpg" />
        <h3>👌 Sign Up for Nationals</h3>
        <p>
          For three? Join us in Richmond for NIRCA Track &amp; Field Nationals
          on April 6 and 7! We will leave around 5pm on April 5 and stay
          overnight for two nights. To be eligible for competition, you must
          have completed your IMLeagues forms, membership survey, NIRCA waiver,
          and paid your $100 racing dues. You can only compete if you have done
          all of these items. Click&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/h7g9FjZMBfPUV4F78"
          >
            here
          </a>
          &nbsp;for the sign up form, which closes on Thursday, March 28.&nbsp;
        </p>
        <img src="https://i.imgur.com/89w0tW2.jpg" />
        <h3>✅ Prior Performance/Automark Form for Nationals</h3>
        <p>The following events require a performance before Nationals:</p>
        <ul>
          <li>
            <p>Shot put&nbsp;</p>
          </li>
          <li>
            <p>Discus</p>
          </li>
          <li>
            <p>Triple jump</p>
          </li>
          <li>
            <p>Steeplechase (any hurdle event counts as a prior performance)</p>
          </li>
        </ul>
        <p>
          The link to the form can be found&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4_BNDuERMnPOG86UQqNl12X-yRd_8rDLFU5WvovEBdxu7qw/viewform?c=0&amp;w=1"
          >
            here
          </a>
          &nbsp; and must be completed by March 29.
        </p>
        <img src="https://i.imgur.com/yz4nE7U.jpg" />
        <h3>🐻🐾 Bear Tracks Sign Up</h3>
        <p>
          Do you want to help elementary school students, earn volunteer hours,
          and run around a teeny tiny track? We are helping with the running
          program at Margaret Beeks Elementary School for the second year in a
          row! Please consider helping out on Wednesday or Thursday mornings.
          Click&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.signupgenius.com/go/10C0F49A9A628A1FAC61-48740769-bear#/"
          >
            here
          </a>
          &nbsp;to sign up!&nbsp;
          <br />
        </p>
        <img src="https://i.imgur.com/sAyyAoV.jpg" />
        <h3>🌯 Chipotle Percentage Night</h3>
        <p>
          Are you sick of Tazon? Of course you are! Switch up your dinner
          routine and join us at the Chipotle on Main Street from 5pm to 9pm on
          Wednesday, March 27 to raise funds for our club. If you are ordering
          in person, please show the percentage night flyer attached in Volkan’s
          email when you are checking out. If you are ordering online, use the
          code TJ62T3T.&nbsp;
        </p>
        <img src="https://i.imgur.com/kjGpQmK.jpg" />
        <h3>💙🐶 Bluey Social</h3>
        <p>
          The people have spoken! We will watch Bluey, make posters, and do
          crafts in Torgersen Hall 1060 at 7pm after practice on Friday, March
          29. Message any officer or DM our Instagram account (
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.instagram.com/vt_clubxctf/"
          >
            @vt_clubxctf
          </a>
          ) to suggest any specific episodes.
        </p>
        <img src="https://i.imgur.com/UVe3BwW.jpg" />
        <h3>
          <strong>🥄&nbsp;</strong>Assassin Update
        </h3>
        <p>
          If you haven’t found your target yet, you have until this Sunday at
          11:59pm, or else you will be eliminated! If you have any questions,
          please ask Kevin or Harris. Here is the leaderboard so far:
        </p>
        <ul>
          <li>
            <p>Tyler Houston: 3</p>
          </li>
          <li>
            <p>Jonathan Goerlich: 3</p>
          </li>
          <li>
            <p>Nathan Montgomery: 2</p>
          </li>
          <li>
            <p>Danielle Metzger: 1</p>
          </li>
          <li>
            <p>Nele Heide: 1</p>
          </li>
          <li>
            <p>Stuart Vailes: 1</p>
          </li>
        </ul>
        <img src="https://i.imgur.com/QBGKj1y.jpg" />
        <p>
          Enjoy your week off of racing! See you all in Cassel next season… 💔🏀
        </p>
      </div>
    ),
  },
  {
    title: "Festive First Meet & Spring Socials",
    url: "festive-first-meet-spring-socials",
    year: "2024",
    date: "3 - 20",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/vEGwXA3.jpg",
    content: (
      <div class="article-content">
        <div class="highlighted-message">
          <p>
            Live from Bollo's, this is your new Webmaster! This is my first time
            writing an article for the website, so please let me know if you
            have any suggestions or advice. I hope you enjoy!
          </p>
        </div>
        <img src="https://i.imgur.com/7I8oFlF.jpg" />
        <h3>🍀🏆 First meet of the season = DONE!</h3>
        <p>
          Round of applause for everyone who competed last weekend at the Hokie
          Track Invitational and for our volunteers! The weather was much better
          than last year (thank goodness). For the complete results, click&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="http://results.tfmeetpro.com/Laurence_Loesel/Hokie_Track_Invitational_31624/"
          >
            here
          </a>
          .
        </p>
        <p>There are several new club records to report:</p>
        <ul>
          <li>
            <p>
              <span>Anna Rigby, Women’s 5000m: 17:44</span>
            </p>
          </li>
          <li>
            <p>
              <span>Shannon Fisher, Women’s Shot Put: 9.82m</span>
            </p>
          </li>
          <li>
            <p>
              <span>Leanne Villante, Women’s Discus: 35.20m</span>
            </p>
          </li>
          <li>
            <p>
              <span>Zangar</span>
              <span> </span>
              <span>Smith, Men’s Discus: 41.04m</span>
            </p>
          </li>
        </ul>
        <p>
          <span>
            In an extremely unpredictable turn of events, both our women and
            men’s teams won! The women’s team scored 387 points, followed by UGA
          </span>
          <span> </span>
          <span>
            with 78 points and UNC Charlotte with 4 points. The men’s team
            scored 464 points, UGA scored 47 points, and the Georgia Knights
            scored 27 points.
          </span>
        </p>
        <p>
          <span>Check out our </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://virginiatech.sharepoint.com/sites/VTClubXCTF/Photos/Forms/AllItems.aspx?id=%2Fsites%2FVTClubXCTF%2FPhotos%2F2023%2D2024&amp;p=true&amp;ga=1"
          >
            <span>OneDrive album</span>
          </a>
          <span> for photos from our meets and social! </span>
        </p>
        <img src="https://i.imgur.com/azhQXfw.jpg" />
        <h3>
          <span>✅ Prior Performance/Automark Form for Nationals</span>
        </h3>
        <p>
          <span>
            The following events require a performance before Nationals:
          </span>
        </p>
        <ul>
          <li>
            <p>
              <span>Shot put&nbsp;</span>
            </p>
          </li>
          <li>
            <p>
              <span>Discus</span>
            </p>
          </li>
          <li>
            <p>
              <span>Triple jump</span>
            </p>
          </li>
          <li>
            <p>
              <span>
                Steeplechase (any hurdle event counts as a prior performance)
              </span>
            </p>
          </li>
        </ul>
        <p>
          <span>The link to the form can be found </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4_BNDuERMnPOG86UQqNl12X-yRd_8rDLFU5WvovEBdxu7qw/viewform?c=0&amp;w=1"
          >
            <span>here</span>
          </a>
          <span> and must be completed by March 29.</span>
        </p>
        <img src="https://i.imgur.com/hALGMs5.jpg" />
        <h3>
          <span>📚 NIRCA Eligibility Waiver</span>
        </h3>
        <p>
          <span>
            If you are interested in attending Nationals, fill out the NIRCA
            Eligibility Waiver at practice! NIRCA requires athletes to be in
            good academic standing, so this form serves as proof that you are a
            competent student AND athlete. You should have completed the form by
            now, so please speak to Roman if you still need to sign it! It is
            not a binding document. Signing it is not a commitment to compete.
          </span>
        </p>
        <img src="https://i.imgur.com/wBfQPjP.jpg" />
        <h3>
          <span>🏀 March Madness Begins!</span>
        </h3>
        <p>
          <span>
            We are having our first-ever club March Madness bracket pool
            contest! Making your picks based on mascots or team colors is
            completely valid, and often leads to high rates of success. We are
            using the ESPN website/app for the brackets and you can complete
            both brackets now. The deadline to complete your brackets are this
            Thursday and Friday at 11:30 AM for the men’s and women’s tournament
            respectively. Hit these links for the{" "}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://fantasy.espn.com/games/tournament-challenge-bracket-women-2024/group?id=147d727e-76d7-46d2-9700-6b7c8378e1f3&amp;joinKey=827be68c-c094-3e1d-90be-0b842d7ff4d2&amp;joining=true"
          >
            <span>women's bracket pool</span>
          </a>
          <span>&nbsp;and the </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://fantasy.espn.com/games/tournament-challenge-bracket-2024/group?id=bb504ab3-bbe3-4c75-8320-75305b2d5154"
          >
            <span>men's bracket pool</span>
          </a>
          <span>. </span>
        </p>
        <img src="https://i.imgur.com/M9FtSS7.jpg" />
        <h3>
          <span>🥄 Assassin Has Begun!</span>
        </h3>
        <p>
          <span>
            Targets have been sent to those who signed up to participate, and
            Harris gave spoons to these individuals at practice. Take a look at{" "}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/document/d/1pX7szwqWGRaGjy4Tsi7t7KlSglFbFOoz245GPfVeByY/edit"
          >
            <span>this document</span>
          </a>
          <span>
            &nbsp;if you need to remind yourself of the rules. If you have any
            questions, reach out to Kevin or Harris. Stay safe and be careful
            who you trust…
          </span>
        </p>
        <img src="https://i.imgur.com/aFRg9uS.jpg" />
        <h3>
          <span>💙🐶 Bluey Watch Party &amp; Crafts Social</span>
        </h3>
        <p>
          <span>
            On Friday, March 29, we will watch Bluey together as we make
            bracelets and posters for Nationals. We have not decided on a time
            for this social, and we want your input! Please fill out{" "}
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEFHF_KBq-iyOSECiBXF2RP1dumaVCK-OCfV-_E8XO00t_jA/viewform"
          >
            <span>this form</span>
          </a>
          <span> so we can choose a time that you all are available.</span>
        </p>
        <p>
          <span>
            Rest up for our meet this weekend! Best of luck to everyone who
            plans to compete!
          </span>
        </p>
        <img src="https://i.imgur.com/rJWZ3a8.jpg" />
      </div>
    ),
  },
  {
    title: "We're so back",
    url: "welcome-back-spring-24",
    year: "2024",
    date: "2 - 27",
    season: "Spring",
    category: "Announcements",
    image: "https://imgur.com/QjJYRzZ.jpg",
    content: (
      <div class="article-content">
        <h3>Its been.. ⌚👀 a few days since the last update..</h3>
        <p>
          But we're back in full force! Welcome back to the weekly newsletters
          ladies and gentlemen. I've recently been informed that some people's
          parents read this so Mr. and Mrs. Tara's Parents if you're out there,
          thank you for taking the time to read the articles, it means a lot.
        </p>
        <p>
          We have a very special soccer social recap for you at the end,
          courtesy of our Social Coordinator Harris Naseh, but first lets go
          over what's coming up for club this week right before we head to
          Spring Break.
        </p>
        <img src="https://imgur.com/pJag0g8.jpg" />
        <h3>
          <strong>Hokie Invitational Signup</strong>
        </h3>
        <p>
          That's right! It's already time to sign up for the first track meet of
          the season. We will be hosting our home meet, the Hokie Invitational,
          on Saturday, March 16th, at Blacksburg High School. This is a great
          way to open up the season, and it's always a fun time (weather
          permitting).
        </p>
        <p>
          In order to compete,
          <strong>
            you must have paid your $100 dues, filled out the membership survey,
            and completed IMLeagues
          </strong>
          (more info on the
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://vtclubxctf.org/join"
          >
            join page
          </a>
          ). You will not be allowed to compete if you haven't done any of these
          items. <strong>Signups are due March 6th.</strong> You can access the
          signup
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/r/zKmsjQbkZx"
          >
            here
          </a>
          .
        </p>
        <h3>Hokie Invitational Volunteering</h3>
        <p>
          Still want to show up to our home meet but are unable to race? Well,
          look no further, as we need volunteers to help us run this show! If
          you are interested in volunteering for the home on Saturday, March
          16th, then access the signup{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.office.com/r/2fMSNp8eBE"
          >
            here
          </a>
          . If you need a ride to the meet, please message either Wyatt or
          Roman. We really really appreciate the help.
        </p>
        <img src="https://imgur.com/ndGBPmQ.jpg" />
        <h3>Practice is still on for Friday (3/1)</h3>
        <p>
          Can you believe that March is just around the corner? We will still be
          having practice on Friday, March 1st, so if you're still in town then
          come and join us!
        </p>
        <h3>A message from Wyatt</h3>
        <p>
          It's kind of crazy that our first meet is in just a couple of weeks.
          I'll be fulfilling my presidential duty and racing the 100 right after
          I race the 5000. I have no idea what I can run in a 100. Oh, did I
          mention that I'll also be wearing khakis? I also don't know how to use
          blocks. That'll be a fun time.
        </p>
        <p>
          Your fun fact this week is going to be about very long sports
          competitions. The longest-ever recorded soccer game lasted three hours
          and 23 minutes, way back in 1946. This game had to be spread across
          two days because it got too dark and floodlights apparently weren't a
          thing yet.
        </p>
        <p>
          The longest baseball game lasted 26 innings in 1920. That's crazy. I
          hope you survive this week! You can do this. If you need to chat about
          anything or have any ideas for club, just let me know!
        </p>
        <img src="https://imgur.com/F2ecKyh.jpg" />
        <h3>
          And now for what you've all been waiting for...
          <br />
          The soccer social recap
        </h3>
        <p>
          It was a cold and rainy day in Blacksburg. Club members of all
          disciplines came together to determine the owner of the 2024 Club XCTF
          soccer title. The Sprints &amp; Field squad was looking to defend
          their title while the distance team came in with a chip on their
          shoulder after a humiliating loss last year.
        </p>
        <p>
          Distance came in rocking the classic Hokie orange and Sprints &amp;
          Field wore the VT Maroon. Captaining the two sides was Harris Naseh
          for distance and Joe Gora for sprint/field. Ben Darden put his
          loyalties aside and refereed what would be an intense game. The rules
          were simple, 11 v 11 playing 4 quarters of 10 minutes each.
        </p>
        <img src="https://imgur.com/eNYQZMN.jpg" />
        <p>
          From the beginning whistle Sprints &amp; Field were on the front foot
          with chance after chance barely allowing the ball onto their side of
          the field. The pressure was too high for Distance as Liam Haley broke
          through their defense and put his name on the scoring sheet. Sprint
          &amp; Field fans were buzzing, and it seemed like the Distance team
          was in for a long day.
        </p>
        <img src="https://imgur.com/Ytz8s5C.jpg" />
        <p>
          As the remaining minutes of the first quarter went by the Distance
          lads seemed to get going as they were mounting their attack. Just as
          the dying seconds of the first quarter were coming to an end Daniel
          Murray of Distance equalized to bring some life back into the team.
        </p>
        <p>
          Amid a storm that saw hail and wind tear at the field nonstop, the
          2024 Club XCTF soccer title drama played out with a passion and
          intensity that will go down in Blacksburg's sports history books. Even
          if the skies above were turbulent, the competition between Distance
          and Track &amp; Field on the ground was nothing short of spectacular.
        </p>
        <img src="https://imgur.com/Jab4GGW.jpg" />
        <p>
          Sprints &amp; Field took the lead with a second goal that was
          decisively scored by Liam Haley, who once again scored with the
          elegance of an experienced striker. His skill on the field was
          evident, as he made the score 2-1 and electrified the Maroon
          supporters.
        </p>
        <p>
          However, the Distance team refused to let their spirits be dampened by
          the weather or the scoreboard. Samuel Yakulis, in a moment that seemed
          to defy the gravity of his experience, scored his first-ever goal,
          equalizing for Distance and sending a clear message: they were not
          going down without a fight.
        </p>
        <p>
          The conditions on the field were brutal, but both teams soldiered on,
          their determination unwavering in the face of nature's fury. Sprints
          &amp; Field, in a move of strategic brilliance, brought on James
          Paylor as goalkeeper.
        </p>
        <img src="https://imgur.com/yVnyxpz.jpg" />
        <p>
          His introduction was a game-changer; Paylor, standing like a brick
          wall between the posts, thwarted attempt after attempt from the
          Distance attackers. Yet, the resilience of the Distance team shone
          brightly against the adversity, as Jadon Peterson broke through to
          score the third for Distance, putting them ahead for the first time in
          the match.
        </p>
        <p>
          The pendulum swung once more when Liam Haley, in a display of sheer
          will and skill, completed his hat trick, drawing Track &amp; Field
          level and pushing the game into the realm of legends.
        </p>
        <p>
          Overtime loomed with the golden goal rule in play, a crucible moment
          where heroes are forged, and tales of glory are born. It was a
          do-or-die situation, with Distance eyeing their first title and
          Sprints &amp; Field aiming for a historic repeat.
        </p>
        <img src="https://imgur.com/rrmNHO9.jpg" />
        <p>
          The physical toll was evident as players from both sides laid
          everything on the line. Harris Naseh and Chatham Campbell, in acts of
          bravery, returned to the pitch despite painful setbacks, embodying the
          spirit of their teams.
        </p>
        <p>
          As fatigue began to gnaw at the players, and a stalemate persisted, an
          unexpected twist saw Andrew Bennett, a longtime critic of Daniel
          Murray, subbed on for Murray, only to be sidelined for lack of proper
          footwear and Murray made his return to the field.
        </p>
        <img src="https://imgur.com/NI3fqjy.jpg" />
        <p>
          Fate had its script, and Murray, returning to the pitch, would become
          the architect of Distance's triumph, scoring the golden goal that
          crowned them champions.
        </p>
        <p>
          The joy that the distance runners were experiencing was evident, in
          sharp contrast to the disappointment that the Sprints &amp; Field team
          was experiencing when their heroic efforts came up short. Ultimately,
          the chilly and wet Blacksburg day witnessed a feat of soccer that
          defied the elements and destiny, with Distance winning their first
          Club XCTF soccer championship in a match that will live in memory
          forever.
        </p>
        <p>
          Final score: 4-3 Distance win.
          <br />
          MVP: James Paylor
        </p>
        <img src="https://imgur.com/rGMuwvC.jpg" />
      </div>
    ),
  },
  {
    title: "Last Week of Practice!",
    url: "last-week-of-practice",
    year: "2023",
    date: "11 - 29",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/XLhUOp6.jpg",
    content: (
      <div class="article-content">
        <p>
          Happy Last Week of Practice! We have loved running with you this
          semester. Make sure to read Wyatt's email. This is the last website
          update of the semester :(. Congrats on making it through!
        </p>
        <img src="https://i.imgur.com/SOvmDN9.jpg" />
        <h3>
          <strong>Feedback Survey</strong>
        </h3>
        <p>
          As the semester winds to an end, I'd love to get your thoughts on how
          the club did this year. You can access our final feedback survey&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdGjRmmlg3103bnaEO3nHz0rXW-ZdjqV3oQ0ZfNnmGXN_rHFw/viewform?usp=sf_link"
          >
            here
          </a>
          &nbsp;. The format is different from the rest, and only takes a minute
          or two to complete. As always, the survey is anonymous but you may
          include your name at the bottom if you'd like. I really can't stress
          how much we appreciate your feedback, because we try to take all input
          into consideration and we want to make this club as enjoyable as
          possible for you.
        </p>
        <img src="https://i.imgur.com/tjF0OHq.jpg" />
        <h3>
          <strong>Officer Intrest Meeting</strong>
        </h3>
        <p>
          Interested in running for an officer position next school year? Well,
          come join us in Wallace 340 at 2:45 pm on Sunday, December 3rd for an
          officer interest meeting. Each officer will have some slides prepared
          to discuss what they do, and we'll have a Q&amp;A session so you can
          ask any questions you have. Even if you're just thinking about running
          for a position, I highly recommend you stop by as you can learn a lot
          of information about what each officer does. Being an officer is a
          great way to be more involved in the club, as they are the reason why
          this club functions as well as it does. We have positions ranging from
          event captains to apparel officer or race coordinator.&nbsp;
        </p>
        <img src="https://i.imgur.com/Gc0cXOn.jpg" />
        <h3>
          <strong>Winter Formal </strong>
        </h3>
        <p>
          It's time for our final social of the year: our Winter Formal! Our
          dance will be on Saturday, December 2nd from 4-8 pm at the Blacksburg
          Community Center. You can access the signup&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://docs.google.com/forms/d/e/1FAIpQLSehlz3dtthQPeXyqSg53qKrVFNADtfWRvSgKm5t1kjZ_2zU-g/viewform?usp=sf_link"
          >
            here
          </a>
          . Please sign up by end of day Tuesday. There is no dress code nor an
          entrance fee. You can find more details in the&nbsp;signup regarding
          plus ones, paper plate&nbsp;awards, and more. If you are interested in
          helping, please message Harris over GroupMe as we'd really appreciate
          as many hands as we can get. I really encourage you to sign up because
          this is one of my favorite events that we host! We'll have karaoke, a
          makeshift photobooth, some food, dances, and more.
        </p>
        <p></p>
        <img src="https://i.imgur.com/d3FNSTd.jpg" />
        <h3>Have a great Week!</h3>
      </div>
    ),
  },
  {
    title: "Almost Nationals",
    url: "almost-nationals",
    year: "2023",
    date: "10 - 30",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/c2zg3L4.jpg",
    content: (
      <div class="article-content">
        <p>
          Good morning amazing people of Club Cross Country and Track and Field!
          If you have not already, read Wyatt's email, there is some important
          information in there about signing up for nationals! Hope everyone had
          a good Halloweekend and see y'all at practice this week!
        </p>
        <h3>
          <strong>NIRCA Cross Country Sign Ups</strong>
        </h3>
        <p>
          <strong>
            If you are interested in attending NIRCA Nationals, please read this
            section in its entirety.{" "}
          </strong>
          That's right, it's time for NIRCA Nats! The splendor, the drama, the
          excitement of traveling to.... Indiana? That's right, we're headed
          back to&nbsp;
          <strong>
            Shelbyville, Indiana for NIRCA Nats to race on Saturday, November
            11th. We will be leaving Friday, November 10th at 10/11 am
          </strong>
          . Please note that we are leaving during class time&nbsp;on Friday, so
          if you have a class you must be excused from, it is your
          responsibility to email/message Volkan in order to get that
          situated.&nbsp;
          <strong>Signups close this Friday, November 3rd.&nbsp;</strong>This is
          a 7-hour drive, which isn't too bad. If you went to regionals with us,
          the process will be the exact same. Because meets are expensive, if
          you sign up and later decide to drop,&nbsp;
          <strong>
            you must tell us by November 4th or you will be fined $35
          </strong>
          . If you have any questions about the meet process or any details,
          please just ask! You can sign up for the meet&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/vhYKuNY1ykwkckup8"
          >
            here
          </a>
          .
        </p>
        <img src="https://i.imgur.com/m4c6iJ8.jpg" />
        <h3>
          <strong>Halloween Costume Contest </strong>
        </h3>
        <p>
          Wanna show us your Halloween costume? Do you think you can scare us?
          Well, we'll be hosting a small Halloween costume contest at practice
          on Tuesday, October 31st, and ranking our favorite costumes! We'll be
          giving the winners some additional VT Club XCTF merch we have lying
          around. We cannot wait to see y'all's costumes.
        </p>
        <img src="https://i.imgur.com/zpo9rLU.jpg" />
        <h3>
          <strong>Movie Night Social on Friday (11/3)</strong>
        </h3>
        <p>
          Want to watch a movie with the best people ever on campus? I know that
          the answer is yes. We will be watching a movie this Friday night in
          Durham Hall, room 217 at 7:30 p.m. We'll be voting on which movie to
          watch in the GroupMe, so be on the lookout for that survey soon. I
          highly recommend you come on out! It will be a lot of fun.
        </p>
        <h3>
          <strong>Semester Shirts </strong>
        </h3>
        <p>
          That's right! Semester shirts are here! You can grab yours at
          practice. If you are not able to grab your shirt this week, make sure
          to reach out to Molly.
        </p>
        <img src="https://i.imgur.com/CCaC6wy.jpg" />
        <h3>
          <strong>Tuesday 7 a.m. lift </strong>
        </h3>
        <p>
          Do you like waking up early to lift with the best people ever? Do you
          love to strength train? Then you should join us for our morning lift!
          It is at 7 a.m. on Tuesdays in the Rec Sports Field House (the big
          bubble). Hope to see y'all there :).
        </p>
        <img src="https://i.imgur.com/z81voEx.jpg" />
        <h3>Have a great Week!</h3>
      </div>
    ),
  },
  {
    title: "Dub Train Continues",
    url: "dub-train-continues",
    year: "2023",
    date: "10 - 23",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/gRvXLGo.jpg",
    content: (
      <div class="article-content">
        <p>
          Good morning all you beautiful athletes! Hope you had a restful
          weekend following our MASSIVE DUBS at the regionals meet. Before we
          get started, remember that practice is at 5 pm now and also note that
          we will move the time once again to 4 pm after daylight savings in two
          weeks. Now time for the recap:
        </p>
        <img src="https://i.imgur.com/2laAeN9.jpg" />
        <h3>
          <strong>Regionals Recap </strong>
        </h3>
        <p>
          We had such an eventful weekend. At NIRCA Mid-Atlantic Regionals, the
          women's team placed 2nd with 54 points and great performances all
          around, and the men's team placed 1st with a dominant performance by
          racking up 17 points. Your throwers also persevered with the presence
          of wind and had a great time at their throw-off. Continue to support
          your teammates because we can only get so far on our own. And a
          special shout-out to our men's and women's podium finishers:
        </p>
        <p>
          <strong>Men's podium finishers:</strong>
        </p>
        <ul>
          <li>
            <p>Samuel Yakulis - 25:52.3</p>
          </li>
          <li>
            <p>Noah LeCain - 26:01.5</p>
          </li>
          <li>
            <p>Alec Venable - 26:03.1</p>
          </li>
          <li>
            <p>Harris Naseh - 26:21.5</p>
          </li>
          <li>
            <p>Matthew Miller - 26:33.6</p>
          </li>
          <li>
            <p>Jonathan Goerlich - 26:35.0</p>
          </li>
          <li>
            <p>Wyatt Thomas - 26:36.9</p>
          </li>
        </ul>
        <p>
          <strong>Women's podium finishers:</strong>
        </p>
        <ul>
          <li>
            <p>Anna Rigby - 22:44.4</p>
          </li>
          <li>
            <p>Jocelyn Hurst - 23:21.1</p>
          </li>
          <li>
            <p>Abby Norton - 23:29.6</p>
          </li>
        </ul>
        <h3>
          <strong>No Practice on Thursday</strong>
        </h3>
        <p>
          No praccy because we have the football game. Go out and support your
          Hokies at Lane Stadium. Hope to see you there!
        </p>
        <img src="https://i.imgur.com/jTSIeOU.jpg" />
        <h3>
          <strong>Feedback Survey #2 </strong>
        </h3>
        <p>
          It's time for our second feedback survey! You can access the form
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/YUHxkk5CQTsxK5JG8"
          >
            here
          </a>
          . We read through all of these to gauge how the meets, socials, and
          practices are going, and we want to hear your input! The officer board
          reads every entry, so please take the time to fill it out! It's just a
          quick, five-minute anonymous survey asking your thoughts on how things
          have been going this month. We really appreciate it!
        </p>
        <img src="https://i.imgur.com/6iQzRhD.jpg" />
        <h3>
          <strong>Semester Shirts </strong>
        </h3>
        <p>
          That's right! Semester shirts are here! You can grab yours at
          practice. If you are not able to grab your shirt this week, make sure
          to reach out to Molly.
        </p>
        <img src="https://i.imgur.com/YgDAja7.jpg" />
        <h3>
          <strong>Breakzone Social</strong>
        </h3>
        <p>
          Do you like to play ping-pong? Do you think that you can beat the
          officers in bowling? Do you like Mario Kart? We will be having our
          Breakzone social this Saturday 24! It will be a lot of fun. We have
          rented out the entire Breakzone, so it will be just club people. Hope
          to see y'all there.
        </p>
        <img src="https://i.imgur.com/VFVGRYr.jpg" />
        <h3>
          <strong>Tuesday 7 a.m. lift </strong>
        </h3>
        <p>
          Do you like waking up early to lift with the best people ever? Do you
          love to strength train? Then you should join us for our morning lift!
          It is at 7 a.m. on Tuesdays in the Rec Sports Field House (the big
          bubble). Hope to see y'all there :).
        </p>
        <img src="https://i.imgur.com/DoSQbTV.jpg" />
        <h3>Have a great Week!</h3>
      </div>
    ),
  },
  {
    title: "Home Meet Dubs",
    url: "home-meet-dubs",
    year: "2023",
    date: "10 - 16",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/5hGjkrT.jpg",
    content: (
      <div class="article-content">
        <p>
          Hey runners, Happy Regionals week!! Who's excited!? If you are joining
          us at Regionals in lovely Bethlehem, PA, be sure to be on the lookout
          for an email from Roman and Wyatt with more details.
        </p>
        <img src="https://i.imgur.com/lDGiqHw.jpg" />
        <h3>
          <strong>Home Meet Recap </strong>
        </h3>
        <p>
          Congrats on another win! This was yet another great home meet. Both
          our Men's and Women's teams got first place. Despite a bit of liquid
          sunshine, everyone did a great job. Thank you to everyone who helped
          volunteer, you are truly appreciated and we couldn't have done this
          without you.
        </p>
        <img src="https://i.imgur.com/StIUP4x.jpg" />
        <h3>
          <strong>Practice is moving to 5 pm </strong>
        </h3>
        <p>
          Starting today, practice will now begin at 5 pm to account for the
          loss of daylight. We will still be meeting Monday through Friday at
          the Miller-Johnson Outdoor Track, but just an hour earlier now.
          Hopefully, you are still able to come out and join us each day!
        </p>
        <img src="https://i.imgur.com/fMU8DJB.jpg" />
        <h3>
          <strong>Semester Shirts</strong>
        </h3>
        <p>
          That's right! The moment you all have been waiting for... semester
          shirts are here! If you have paid your dues and filled out the
          membership survey, then you can get a shirt! Shirts will be handed out
          at practice this week Be sure to grab yours!
        </p>
        <img src="https://i.imgur.com/AvbgNwd.jpg" />
        <h3>
          <strong>Regionals </strong>
        </h3>
        <p>
          Happy Mid-Atlantic Regions week! Regionals is on Saturday the 21st at
          Leigh University. If you signed up for regions, be sure to be on the
          lookout for an email about rooming and van lists. If you are not
          racing in regionals, be sure to wish those who are good luck.
        </p>
        <img src="https://i.imgur.com/7mVMdpT.jpg" />
        <h3>
          <strong>Tuesday 7 a.m. lift </strong>
        </h3>
        <p>
          Do you like waking up early to lift with the best people ever? Then
          you should join us for our morning lift! It is at 7 a.m. on Tuesdays
          in the Rec Sports Field House (the big bubble). Hope to see y'all
          there :).
        </p>
        <h3>Have a great Week!</h3>
        <p></p>
      </div>
    ),
  },
  {
    title: "Happy Fall 'Break!'",
    url: "happy-fall-break",
    year: "2023",
    date: "10 - 9",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/LAOiWQN.jpg",
    content: (
      <div class="article-content">
        <p>
          Happy Spooky Season! We have a really exciting week coming up. We have
          our team lift on Tuesday morning (YAY) and our home meet, the{" "}
          <em>Hokie Invitational</em>, on Saturday! Thankfully, the Homecoming
          game vs. Wake Forest is at 3:30 so we'll have plenty of time to get
          ready for the game. Hope everyone has a great week of class and
          practice as we head into the second half of the semester!
        </p>
        <img src="https://i.imgur.com/bNoPxua.jpg" />
        <h3>
          <strong>Home Meet &amp; Volunteering </strong>
        </h3>
        <p>
          The home meet this Saturday is at Blacksburg High School. The ladies'
          race starts at 9:00 am and the gentlemen will be racing at 10:00 am.
          Be on the lookout for an email from Roman regarding racing details.
        </p>
        <p>
          If you're not planning on racing and are interested in volunteering
          for this meet, make sure to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/izfgasc3Fja3FTVWA"
          >
            sign up
          </a>
          . Volunteers are very important for this meet so if you are available,
          I highly encourage you to help out! It's super fun, and takes just a
          few hours.
        </p>
        <img src="https://i.imgur.com/V614gI6.jpg" />
        <h3>
          <strong>Regionals Sign Up</strong>
        </h3>
        <p>
          <strong>
            If you are interested in going to Regionals, please read this
            section in its entirety as there is a lot of important information.
          </strong>
        </p>
        <p>
          Woah... do you hear that? That... That's right, it's the sound of your
          Mid-Atlantic defending champions coming to reclaim their first place
          trophy. We also definitely had the most fun. NIRCA Regionals will be
          held on Saturday, October 21st at Lehigh University in Bethlehem,
          Pennsylvania. <strong>Signups close this Friday, October 13th</strong>
          . Please note this is an overnight meet and we will be staying at a
          hotel. Because hotel rooms are expensive, if you sign up and later
          decide to drop the meet,{" "}
          <strong>you must let us know by Saturday, October 14th</strong>.
          Otherwise, you will be charged a $20 fine. We will be leaving for
          Lehigh on Friday between 12-2pm, so if you have class and need an
          excused absence, you must email or message Volkan with information on
          your class and the professor. You will only get an excused absence if
          you have done all the signup requirements. You can signup for the meet{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/PFpv88WHiEnSwAoX6"
          >
            here
          </a>
          .<strong> </strong>
        </p>
        <h3>
          <strong>Tuesday 7 a.m. lift </strong>
        </h3>
        <p>
          That's right! We are bringing back our 7 a.m. lifts. Yes, it is early
          BUT it is a great way to strength train and it is a lot of fun! It is
          in the Rec Sports Field House (the big bubble). Hope to see y'all
          there :).
        </p>
        <img src="https://i.imgur.com/HJnrQeP.jpg" />
        <h3>
          <strong>Team Hike </strong>
        </h3>
        <p>
          Thanks to everyone who joined us on our team hike! We hope that you
          had fun. We got to see some pretty sights and spend time with the best
          teammates ever.
        </p>
        <h3>Have a great Week! </h3>
        <p></p>
      </div>
    ),
  },
  {
    title: "Can I Pickaxe You a Question?",
    url: "can-i-pickaxe-you-a-question",
    year: "2023",
    date: "10 - 3",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/tAayNAN.jpg",
    content: (
      <div class="article-content">
        <h3>
          <strong>Charlotte Meet Recap</strong>
        </h3>
        <p>
          Congrats to everyone who raced this past weekend! While it was a
          (very) early morning, both our Men's and Women's teams came out on
          top! The men scored 23 points and the women scored a whopping 27
          points. Amazing scores for some amazing 5ks! Congrats to everyone who
          got a PR!
        </p>
        <img src="https://i.imgur.com/hxckAUc.jpg" />
        <h3>
          <strong>Home Meet Sign-Up</strong>
        </h3>
        <p>
          Its time to sign up for our next meet! We will be hosting our annual
          Hokie Invitational on Saturday, October 14th, at Blacksburg High
          School. Because this venue is only a five&nbsp;minute&nbsp;drive from
          campus, you can wake up at a reasonable time. You can access the link{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/NyuY7cVduutievqQ8"
          >
            here
          </a>
          .<strong> Signups will close on Friday, October 6th.</strong>&nbsp;
        </p>
        <p>
          Please make sure you have made your NIRCA account, done IMLeagues, and
          paid dues beforehand. If you're not planning on racing and you are
          interested in volunteering for this meet, make sure to sign up{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/TuYFpEfD14d7xosn8"
          >
            here
          </a>
          . Volunteers are very important for this meet so if you are available,
          I highly encourage you to help out! It's super fun, and just a few
          hours.
        </p>
        <img src="https://i.imgur.com/zHTwXmi.jpg" />
        <h3>
          <strong>Team Hike </strong>
        </h3>
        <p>
          If you love to hike and if you are not going home for fall break, then
          you should join us for our annual Fall hike! We will be hiking
          Sawtooth Ridge in Roanoke this Friday. If you are interested in
          attending, please sign up{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/T5rhqJexxntQgfxq7"
          >
            here
          </a>
          . We will be leaving Blacksburg at 10:15 am for this two-hour hike.
          This is a really fun opportunity to meet some new people on the team
          and see some pretty sites.
        </p>
        <img src="https://i.imgur.com/aJOsoXe.jpg" />
        <h3>
          <strong>Tuesday 7 a.m. lift </strong>
        </h3>
        <p>
          That's right! We are bringing back our 7 a.m. lifts. Yes, it is early
          BUT it is a great way to strength train and it is a lot of fun! It is
          in the Rec Sports Field House (the big bubble). Hope to see y'all
          there :&#41;.
        </p>
        <img src="https://i.imgur.com/z3TeUgF.jpg" />
        <h3>
          <strong>Mezeh Percentage Night on Wednesday 10/4</strong>
        </h3>
        <p>
          Do you like a nice meal after a great run? YES! Then you are in the
          right place. We will be having a percentage night at Mezeh (
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.google.com/maps/place/616+University+City+Blvd,+Blacksburg,+VA+24060/@37.2325749,-80.4350097,17z/data=!3m1!4b1!4m6!3m5!1s0x884d956a80e1958d:0xd1473c7ccfff4ca0!8m2!3d37.2325707!4d-80.4324348!16s%2Fg%2F11f12zv2yv?entry=ttu"
          >
            616 University City Blvd, Blacksburg, VA 24060
          </a>
          ) this Wednesday. The promotion runs from 5 pm to 10 pm but many of us
          will be heading over after practice (so you can definitely catch a
          ride). We will be getting 25% of the proceeds made, so make sure to
          come out and don't forget to mention that you are with club XCTF.
        </p>
        <h3>
          <strong>No Practice on Friday 10/6</strong>
        </h3>
        <p>
          Happy (almost) fall break! We will not have practice this Friday due
          to fall break. I hope you all have a nice day off. And please REST!!
          You deserve it.
        </p>
        <img src="https://i.imgur.com/DHmAx07.jpg" />
        <h3>
          <strong>Eligibility Forms</strong>
        </h3>
        <p>
          <strong>
            This message is VERY important for racers.&nbsp; If you are
            interested in racing Regionals on Saturday, October 21st, you must
            sign the eligibility form at practice.&nbsp;
          </strong>
          This is a form required by NIRCA to ensure everyone is a full-time
          student.
          <strong>&nbsp;</strong>
          This is NOT a binding&nbsp;document, but you MUST sign it if you do
          plan on going. If you are interested at all in going to Regionals at
          all, you must sign the form. You will be able to sign the form until
          October 4th. If you have any questions, just ask Wyatt, Roman, or
          Volkan at practice.
        </p>
        <h3>Have a great Week!</h3>
        <img src="https://i.imgur.com/ttGen9o.jpg" />
      </div>
    ),
  },
  {
    title: "Well Rested Hokies Prepare for Charlotte McAlpine",
    url: "well-rested-hokies-prepare-for-charlotte-mcalpine",
    year: "2023",
    date: "9 - 26",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/9TxkeVO.jpg",
    content: (
      <div class="article-content">
        <h3>
          <strong>Charlotte McAlpine Race </strong>
        </h3>
        <p>
          The Charlotte Race is<strong> this Saturday!</strong> Get excited,
          this is a really fun race and our only 5K of the season. If you are
          racing, you will be receiving more information about transportation
          later this week. Make sure to get a good night's sleep, it will be a
          pretty early morning as we're meeting at the McComas parking lot at{" "}
          <strong>4:15 am</strong>. There is a football game on Saturday night
          as well! It will be a long, fun-filled day.
        </p>
        <h3>
          <strong>Eligibility Forms</strong>
        </h3>
        <p>
          <strong>This message is important for racers.&nbsp;</strong>If you are
          interested in racing Regionals on Saturday, October 21st, you must
          sign the eligibility form at practice<strong>. </strong>This is a form
          required by NIRCA to ensure everyone is a full-time student.
          <strong>&nbsp;</strong>This is NOT a binding&nbsp;document, but you
          MUST sign it if you do plan on going. If you are interested at all in
          going to Regionals at all, you must sign the form. You will be able to
          sign the form until October 5th. If you have any questions, feel free
          to ask Roman or any other officer.
        </p>
        <img src="https://i.imgur.com/fkQN63o.jpg" />
        <h3>
          <strong>Singlets</strong>
        </h3>
        <p>
          If you have not had a chance to purchase a singlet yet, no worries! We
          will be selling our singlets again this week during practice for $40.
          We can only accept cash or checks made out to{" "}
          <em>Treasurer at Virginia Tech</em>. If you are planning on racing at
          all this semester, you must have a singlet. If you are only planning
          on competing in the Spring, you can wait to purchase one next
          semester.&nbsp;Feel free to talk to Molly or the other officers with
          questions regarding singlets.
        </p>
        <img src="https://i.imgur.com/sR4hU0X.jpg" />
        <h3>
          <strong>Fall Cookout</strong>
        </h3>
        <p>
          It was so nice to see everyone at the Fall Cookout! Hope you all had a
          great time. It was nice catching up with everyone while eating some
          good food and playing some fun games.
        </p>
        <h3>
          <strong>Feedback Survey</strong>
        </h3>
        <p>
          How are we doing? Are you enjoying Wyatt's jokes? How are the meets
          and practice coming along? Let us know through{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/6vgotSWo8rTNHuNz6"
          >
            this form
          </a>
          . This survey is completely anonymous and we really appreciate any
          words that you have for us! We read each and every response, so please
          take 5 minutes to complete it! We really do appreciate it.&nbsp;
        </p>
        <img src="https://i.imgur.com/r69W1if.jpg" />
        <h3>
          <strong>Assassin</strong>
        </h3>
        <p>
          It's finally that time of the year. Assassin begins next week, are you
          ready to hunt and be hunted? Harris will be sending a GroupMe
          announcement for the signup this week. Stay on the lookout for that
          message and be sure not to leak your schedule to anyone. Trust no one.
        </p>
        <img src="https://i.imgur.com/tmvBXhY.jpg" />
        <h3>Google Photos Link</h3>
        <p>
          Wanna see photos of you and your friends at practice? Want to see a
          photo of you racing? Be sure to look at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://photos.app.goo.gl/dkNL4vxsXZCzeZn99"
          >
            this Google Photos album
          </a>
          .
        </p>
        <h3>Have a great Week!</h3>
        <img src="https://i.imgur.com/ejyo3SD.jpg" />
      </div>
    ),
  },
  {
    title: "Cavalier Invitational Recap",
    url: "cavalier-invitational-recap",
    year: "2023",
    date: "9 - 22",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/wdg9OFg.jpg",
    content: (
      <div class="article-content">
        <img src="https://i.imgur.com/sWZbSMF.jpg" />
        <h3>
          <strong>Cavalier Invitational Recap</strong>
        </h3>
        <p>
          First off, congratulations to all our runners who competed this past
          weekend! Our women's team placed second with 49 points and our men won
          with a ridiculous&nbsp;19. I hope you had a fun time and are excited
          for our next meet in two weeks! Secondly, our throwers had a throw-off
          this Saturday and some biiig marks were made.{" "}
        </p>
        <p>
          Somehow Ben got on the lead car and recorded some pretty cool videos
          on a Go-Pro
        </p>
        <p>
          Be sure to congratulate the throwers during practice or salute them if
          you're running around the track. Lastly, thank you to those who
          volunteered for the Hokie Half on Sunday. And congrats to our club
          runners who ran the Hokie Half this past Sunday!
        </p>
        <img src="https://i.imgur.com/W6lm9LT.jpg" />
        <h3>
          <strong>Charlotte McAlpine Race Signups</strong>
        </h3>
        <p>
          It's already time to sign up for the next one! We will be traveling to
          Charlotte, North Carolina, and racing at the delightfully flat
          McAlpine Creek course. This is a really fun race! You can access the
          signup{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/XNSfdzxS5gHdsCP5A"
          >
            here
          </a>
          .{" "}
        </p>
        <p>
          The last day to register will be{" "}
          <strong>Friday, September 22nd</strong>. As a note, we will be taking
          vans instead of personal vehicles this time. We are also aware there
          is a home football game this day, yet the time was just posted and it
          is at 8 pm! Hope to see y'all there.
        </p>
        <h3>
          <strong>Apparel</strong>
        </h3>
        <p>
          We are selling apparel and singlets! Apparel is not required and it is
          a fun way to show your club spirit! If you plan on racing, singlets
          are required. The link to order apparel can be found{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/s3vw3rhdtssdH4Rs7"
          >
            here.
          </a>{" "}
          If you plan on getting apparel, please fill out the survey{" "}
          <strong>by September 22nd</strong>. If you buy something, please bring
          cash to practice to pay!
        </p>
        <img src="https://i.imgur.com/S4mleTo.jpg" />
        <h3>
          <strong>Fall Cookout</strong>
        </h3>
        <p>
          It's time for our annual Fall Cookout social! We will be meeting at
          the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://maps.app.goo.gl/XfbKjpCc4BurtzQcA"
          >
            Blacksburg Municipal Park
          </a>
          &nbsp;on Saturday, September 23rd, from 12 pm to 3 pm. If you are
          attending, regardless of whether you are bringing food, please RSVP{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.signupgenius.com/go/10C0D49A8A922A4FCC52-44198682-fall"
          >
            here
          </a>
          . This event is a potluck, so please try to bring/make stuff if you
          can!&nbsp;
        </p>
        <p>
          Freshmen, try to bring large bagged&nbsp;snacks if possible (I love
          hint&nbsp;of lime chips). We'll be outside so be sure to bring any
          games if you have any! If you need a ride, talk to one of your
          upperclassmen friends or ask around. You can also take MSN&nbsp;which
          leaves from Squires every 30 minutes. This event is always super fun
          and I heavily encourage you to show up!
        </p>
        <h3>Google Photos Link</h3>
        <p>
          Make sure to check out This is sort of fluid but for now, the photos
          from this semester can be found at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://photos.app.goo.gl/dkNL4vxsXZCzeZn99"
          >
            this Google Photos album
          </a>
          . In the past, we've had issues with there being too many photos in
          one album so by the end of the semester it would take a long time to
          scroll all the way down to the most recent photos.{" "}
        </p>
        <p>
          An idea I had is we could have separate albums for practice, socials,
          and each of the meets and have a page on the website that lists each
          album so you can go directly where you want and don't have to scroll
          through 7,000 photos to see the ones you want.
        </p>
        <h3>Have a good Week!</h3>
      </div>
    ),
  },
  {
    title: "Welcome Back!",
    url: "welcome-back",
    year: "2023",
    date: "9 - 6",
    season: "Fall",
    category: "Announcements",
    image: "https://i.imgur.com/1mLh3xM.jpg",
    content: (
      <div class="article-content">
        <p>
          Good afternoon you wonderful Virginia Tech Club Cross Country/Track
          &amp; Field athletes and welcome back to your favorite corner of the
          internet! It is with great pleasure that I announce the return of the
          weekly articles. I hope you've all had a fantastic first week of
          practice and Labor Day weekend!
        </p>
        <p>
          First thing first, I hope you've all read Wyatt's email from Monday
          thoroughly as to not miss anything since it contains essential
          information about membership, upcoming races, and much more. If you
          haven't gotten the email, make sure to fill out the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/4muhebpaA2ZkBEVn6"
          >
            membership survey
          </a>{" "}
          so we can add your email to our list.
        </p>
        <img src="https://i.imgur.com/tspx4fx.jpg" />
        <h3>Joining the Club</h3>
        <p>
          There are three things every member must do{" "}
          <strong>by September 8th</strong>, you can find detailed instructions
          on our join page but the gist is:
        </p>
        <ol>
          <li>
            <p>
              Complete the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://forms.gle/4muhebpaA2ZkBEVn6"
              >
                membership survey
              </a>
              .
            </p>
          </li>
          <li>
            <p>Complete your IMLeagues forms.</p>
          </li>
          <li>
            <p>
              Pay your dues at McComas Hall{" "}
              <strong>at the latest by 4:30 PM.</strong>
            </p>
          </li>
        </ol>
        <h3>
          <span>Our First Race at UVA on 9/16!</span>
        </h3>
        <p>This message is brought to you by our race coordinator, Roman:</p>
        <p>
          It is already time to start signing up for our first meet of the
          season! We're headed to UVA to outrace our biggest rivals, and you're
          not gonna want to miss it! In order to sign up, please fill out this{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/DXAhi9DeLdVkDTqL6"
          >
            Google form
          </a>
          . Additionally, if you are new to racing for the club, you must fill
          out the NIRCA registration form which I've included in the survey! And
          remember,{" "}
          <strong>you must pay your racing dues in order to go race</strong>.
        </p>
        <p>
          As a reminder, you must make a NIRCA account only if you{" "}
          <em>have not</em> raced with us before. That link can be found&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://forms.gle/8WRhqNq3QrGdFM3WA"
          >
            here
          </a>
          . If you <em>have</em>&nbsp;raced with us, please fill out the
          2023-2024 NIRCA waiver. You can access that at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="http://clubrunning.org"
          >
            clubrunning.org
          </a>
          &nbsp;and viewing your profile.
        </p>
        <img src="https://i.imgur.com/rK2QK2E.jpg" />
        <h3>Hokie Half Marathon Volunteering on 9/17</h3>
        <p>
          As Wyatt mentioned in his email, it's already that time of the year.
          Unfortunately, Hokie Half is scheduled two weeks earlier than normal
          which is the day after UVA. This is a really fun opportunity where you
          get to serve the running community of Blacksburg! If you are able to
          volunteer, please do so.
        </p>
        <p>
          There are excess slots so everyone can{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://www.signupgenius.com/go/10C0F4EACAD28A2FCCF8-hokie"
          >
            sign up
          </a>
          , but we may need all the slots depending on the cadets. In this case,
          I will unfortunately have to make this volunteer opportunity required
          if you want to race NIRCA Regionals and Nationals this season. That is
          not the case for now, but please be on the lookout. If you have any
          questions, please let us know.{" "}
          <strong>The deadline to sign up is 9/10</strong>, and we will email
          everyone with specific instructions soon after.&nbsp;
        </p>
        <h3>
          <span>
            <strong>Chipotle Percentage Night on 9/6</strong>
          </span>
        </h3>
        <p>
          Next, our first team dinner is coming up this Wednesday from 5:00 -
          9:00 pm at the North Main Chipotle (314 N Main St). We will head there
          after practice but if you can't make it, you can go anytime 5:00 -
          9:00 pm. This is a great way to support the team and meet a bunch of
          your fellow teammates. Be sure to mention you're with the Club XCTF
          team or show them
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://drive.google.com/file/d/1BShdITSnIG6p-Rb2VIZti9FvT11ZtX5_/view?usp=sharing"
          >
            {" "}
            this flyer
          </a>{" "}
          so we get a percentage of the proceeds.
        </p>
        <img src="https://i.imgur.com/AL3AwMq.jpg" />
        <h3>Where Can I See Photos Photos from Practice and Meets?</h3>
        <p>
          This is sort of fluid but for now, the photos from this semester can
          be found at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://photos.app.goo.gl/dkNL4vxsXZCzeZn99"
          >
            this Google Photos album
          </a>
          . In the past, we've had issues with there being too many photos in
          one album so by the end of the semester it would take a long time to
          scroll all the way down to the most recent photos.{" "}
        </p>
        <p>
          An idea I had is we could have separate albums for practice, socials,
          and each of the meets and have a page on the website that lists each
          album so you can go directly where you want and don't have to scroll
          through 7,000 photos to see the ones you want.
        </p>
        <img src="https://i.imgur.com/S6PnWYv.jpg" />
        <h3>Soccer Social on 9/4</h3>
        <p>
          What's really funny is that these are supposed to be out on Mondays so
          I could tell you to come to the social. Instead, it's Wednesday and
          the social has already happened but the good news is I have some
          photos from the event. Also there's been a lot of changes to how the
          website works behind the scenes so <em>Webdev Diaries </em>is also
          making a comeback soon and I can't wait to tell you all about it!
        </p>
      </div>
    ),
  },
  {
    title: "Lynchburg Part 3 A.K.A. Wildcat 'Twilight'",
    url: "lynchburg-part-3",
    year: "2023",
    date: "4 - 25",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/oBPnsIj.jpg",
    content: (
      <div className="article-content">
        <p>
          It’s almost the end of the year, and what a year it’s been… I have two
          more articles planned before the end of the year to post on the
          website, another one this week for the nationals recap and one after
          the banquet (maybe one more if I throw a Webdev Diaries in there) but
          until then, here’s some info from our future president Wyatt’s last
          email of the year and a meet recap from yours truly.
        </p>
        <Image
          src="https://i.imgur.com/zM12PxJ.jpg"
          alt="One last 4x400."
        ></Image>
        <h3>
          <strong>Wildcat “Twilight” Recap</strong>
        </h3>
        <p>
          You ever just drive 2 hours and warm up, get to the start line to race
          your first ever 3k steeple just so they can delay everything due to
          lightning? Well despite that, scrambling to move all of our wet stuff
          to hide in the vans, and periodic rain throughout the rest of the
          meet, we still went out with a bang. Five club records were broken as
          well as many PRs, and although there was no 5k under the moonlight,
          everyone had a great time.
        </p>
        <p>Records:</p>
        <li>Noah LeCain - 3k Steeple - 9:45.79</li>
        <li>
          K Crawford, E Donlon, R Ophof, J Williams - 4x100m Relay - 50.62s
        </li>
        <li>Jessica Williams - Triple Jump - 11.42m</li>
        <li>Jenny Patel - Hammer Throw - 21.93m</li>
        <li>Evan Grace - 5000m - 14:58.84</li>
        <p>Now onto the real recap:</p>
        <Image
          src="https://i.imgur.com/ZpYl7Pj.jpg"
          alt="Seniors at Wildcat Twilight."
        ></Image>
        <p>
          This one was bittersweet… Probably the first time I’ve cried at a
          track meet, and I wasn’t the only one. To our seniors: we will miss
          you. Whether you just joined this year or you’ve been with us for 4
          years, through COVID, name changes, and two national championships,
          thank you for sticking with us through the highs and lows. You all
          have been so instrumental in getting the club to where it is.{" "}
        </p>
        <p>
          As friends, mentors, and role models, your impact can’t be overstated.
          When I first joined the club last year, it was the seniors who took me
          under their wing and showed me all the club had to offer. I wouldn’t
          be here writing this if not for those acts of kindness from people
          like Jessie, Jared, and Maddie. Many of you probably don’t even know
          who I’m talking about, but I promise that you’ve felt the impact they
          and many others like them throughout the years have had on the club in
          some way.{" "}
        </p>
        <p>
          Looking at this year’s graduating class, I see the same welcoming
          energy that made this place home for me, and I know you all have done
          that for all the newcomers this year. We wish you the best wherever
          life takes you and want you to know that you all will be missed
          dearly, and you’ll always have a home here…
        </p>
        <p>
          With love, <br></br>Volkan
        </p>
        <Image
          src="https://i.imgur.com/kTQDGTE.jpg"
          alt="Nick throwing up a VT in the middle of his 400m Hurdles."
        ></Image>
        <h3>
          <strong>End of Year Banquet</strong>
        </h3>
        <p>
          It&#39;s one of the best socials of the year! We will be hosting the
          banquet{" "}
          <strong>
            Sunday, April 30th, from 5-8pm at the Blacksburg Community Center
          </strong>
          . The event is a potluck, so I encourage you to sign up to bring
          something! <strong>Please </strong>
          <strong>
            <a
              href="https://www.google.com/url?q=https://www.signupgenius.com/go/10C0D49A8A922A4FCC52-endofyear&amp;source=gmail-html&amp;ust=1682533887656000&amp;usg=AOvVaw3qkkKSlfGc-ug7lyg0owpa"
              rel="nofollow noreferrer"
              target="_blank"
            >
              RSVP
            </a>
          </strong>{" "}
          and inform us if you&#39;re bringing any dishes through the form. We
          plan on playing yard games, hanging out, and watching our end of year
          video, it&#39;s always a lot of fun! There are also paper plate
          awards, and we will see who is crowned Forever Freshman. Seniors,
          please sign up{" "}
          <strong>
            <mark>ASAP</mark>
          </strong>
          . For everyone else, the signup will close Wednesday.
        </p>
        <Image
          src="https://i.imgur.com/1YWpbFY.jpg"
          alt="One lap to go..."
        ></Image>
        <h3>
          <strong>Fun Meet</strong>
        </h3>
        <p>
          We will be hosting our annual fun meet this week on{" "}
          <strong>
            <mark>Tuesday and Thursday, 4/25 and 4/27</mark>
          </strong>
          . To provide clarification,{" "}
          <strong>this is something that happens during practice</strong>. There
          is no signup, it&#39;s just a fun meet. We will have events such as a
          literal hammer throw, a bear crawl, 200m racewalk, our always
          delightful chocolate milk mile, and much more (such as the 4x25m
          hurdles relay, why would Wyatt leave this out of the email??). Just
          show up to practice on these days and you&#39;re able to participate!
        </p>
        <h3>
          <strong>Final Feedback Survey</strong>
        </h3>
        <p>
          How did we do as officers? How was the club? Have anything to tell us?
          Please do! We would really appreciate it if you would fill out the{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/JBYNsoFmynvexoXi9&amp;source=gmail-html&amp;ust=1682533887657000&amp;usg=AOvVaw0s-kaXctf_VGQfys0zUQhR"
            rel="nofollow noreferrer"
            target="_blank"
          >
            final feedback survey
          </a>{" "}
          of the year. We read through every single submission and take your
          suggestions to heart, as we&#39;re always trying to improve as people
          and officers. If you have the time, please fill it out. We really
          appreciate all of your feedback.
        </p>
        <Image
          src="https://i.imgur.com/YYJai0S.jpg"
          alt="Evan and Harris after the 5k."
        ></Image>
        <h3>
          <strong>Bear Tracks at Margaret Beeks Elementary</strong>
        </h3>
        <p>
          Bear Tracks is still going strong! This is a before-school program
          from <strong>8:40-9:15 AM</strong> held by Margaret Beeks Elementary
          schools, encouraging their kids to run! They are looking for
          volunteers to be pacers and supervisors for the kids, and the dates
          are listed in{" "}
          <a
            href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1682533887657000&amp;usg=AOvVaw0UnsSuWiNG5fzq1jI7REn0"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this sign up survey
          </a>
          . There are still slots available for this Wednesday and Thursday as
          well as for future weeks, so if you are able to sign up please do!{" "}
        </p>
        <Image
          src="https://i.imgur.com/o5lv10i.jpg"
          alt="Charlotte cheering, she's very excited."
        ></Image>
        <p>
          <strong>Wyatt’s Corner</strong>
        </p>
        <p>
          This is the last week of practice, so Friday is our last day. This has
          been such a crazy year, but thank you all for making it worth it. I am
          so excited to be your president next year and go on all the crazy
          adventures together. Whether you showed up to one practice or every
          single one, thank you for being a part of this team. You guys are my
          family, for as chaotic as it can be.
        </p>
        <p>
          Wyatt&#39;s Fun Fact of the Week: Welcome to my last fun fact! Today
          (Editor’s note: yesterday), 33 years ago, the Hubble Space Telescope
          was launched into space. This revolutionized the field of astrophysics
          and has led to some of the most beautiful pictures being published.
          Someone also suggested that I include fun facts about myself, so
          I&#39;ll let you know that I first came to VT wanting to do
          astrophysics. I learned after my first year that astrophysics
          wasn&#39;t my thing (even though I was dead-set on it for three
          years), and instead, I switched to <i>experimental</i> condensed
          matter physics, focusing on sustainable nanotechnologies. It&#39;s
          okay to not know entirely what you want to do coming into college, and
          switching fields and exploring is totally normal. Just do whatever
          makes you happy and what you&#39;re passionate about. That is why I
          run.
        </p>
        <p>Best regards,</p>
        <p>Wyatt Thomas</p>
        <Image
          src="https://i.imgur.com/gUfNG1l.jpg"
          alt="Forever Freshman candidate Joe Gora in the kick of the 4x400m."
        ></Image>
      </div>
    ),
  },
  {
    title: "Lynchburg Part 2",
    url: "lynchburg-part-2",
    year: "2023",
    date: "4 - 10",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/Cyxgo3W.jpg",
    content: (
      <div className="article-content">
        <p>
          Good morning (it’s never morning by the time I post these, sorry
          Phil…) and happy Nationals week to those competing there! To those who
          are not going, have no fear as we have other fun things planned this
          week too!
        </p>
        <p>
          We will be having a{" "}
          <strong>
            <mark>team dinner at D2 this Thursday (4/13) at 6:00 pm</mark>
          </strong>{" "}
          before our Nationals crew heads out, and anyone is welcome to join!{" "}
          <strong>
            <mark>We will be moving practice to 5:00pm that day</mark>
          </strong>{" "}
          so that we can all head to D2 at 6:00pm for some gourmet sustenance.{" "}
        </p>
        <Image
          src="https://i.imgur.com/FZxjzVo.jpg"
          alt="Andrew's first time using blocks."
        ></Image>
        <h3>
          <strong>Wildcat Track Festival Recap</strong>
        </h3>
        <p>
          There’s some really cool photos from last weekend’s meet that Chatham
          and I took. You can find them on our{" "}
          <a
            href="https://www.google.com/url?q=https://photos.app.goo.gl/XFMPNQgvbF6czWiT6&amp;source=gmail-html&amp;ust=1681400948704000&amp;usg=AOvVaw3oVVlxCjlZlgkMlWG1pDDe"
            rel="nofollow noreferrer"
            target="_blank"
          >
            Google Photos album
          </a>{" "}
          as always and I can’t wait to do even more at Nationals this weekend.
          We have some big things planned on the media side but for now enjoy
          the photos from last weekend.
        </p>
        <h3>
          <strong>NIRCA Track Nationals</strong>
        </h3>
        <p>
          So as you know we have Nationals in Michigan this weekend! We have the
          chance to do something really special this year, so for those
          competing there be sure to use this week to prepare mentally and
          physically! Trust in your training, and don&#39;t forget to have fun
          in all that you do! Hannah will be sending out an email later this
          week with all of the information, so please be on the lookout for
          that.
        </p>
        <Image
          src="https://i.imgur.com/z4RFm2e.jpg"
          alt="The girls at Randolph."
        ></Image>
        <h3>
          <strong>Wildcat Twilight Meet- Our Last Hurrah!</strong>
        </h3>
        <p>
          It&#39;s time to sign up for our last meet of the season, where we
          once again will be traveling to Randolph College in Lynchburg, VA for
          the Wildcat Twilight! This meet is special as the last events (4x4)
          will be during nightfall under the lights! And even better, we
          don&#39;t have to get up super early to leave for this meet!
        </p>
        <p>
          Please fill{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/9HHVxKS3FupAy5w58&amp;source=gmail-html&amp;ust=1681400948704000&amp;usg=AOvVaw0JEfuyfyRSM15uAHbsC2yL"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this
          </a>{" "}
          out by{" "}
          <strong>
            <mark>Monday, April 17th</mark>
          </strong>
          , and the drop deadline for this meet is April 19th.
        </p>
        <h3>
          <strong>Bear Tracks at Margaret Beeks Elementary</strong>
        </h3>
        <p>
          The first week of Bear Tracks went super well, so thank you to
          everyone who joined for that! This is a before-school program from{" "}
          <strong>
            <mark>8:40-9:15 am</mark>
          </strong>{" "}
          held by Margaret Beeks Elementary schools, encouraging their kids to
          run! They are looking for volunteers to be pacers and supervisors for
          the kids, and the dates are listed in{" "}
          <a
            href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1681400948704000&amp;usg=AOvVaw36bBOSmmHwj-U7GSokgiSY"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this survey
          </a>
          . There are still slots available for this Wednesday and Thursday as
          well as for future weeks, so if you are able to sign up please do!
        </p>
        <Gallery
          images={[
            {
              src: "https://i.imgur.com/T1Aezwn.jpg",
              alt: "Nate looking cute af.",
            },
            {
              src: "https://i.imgur.com/5TYaZft.jpg",
              alt: "Josh looking cute af.",
            },
          ]}
        ></Gallery>
        <h3>
          <strong>Quick Administrative Update from Phil</strong>
        </h3>
        <p>
          We have 84 people traveling to Michigan this weekend which is the
          largest group this club has ever brought to Nationals before! This
          makes me extremely proud, and I cannot wait for you all to stunt on
          all these other schools by having the most fun while also competing
          the best! To everyone competing, you are going to have the full
          support of one of the largest teams in the country behind you while
          you compete!
        </p>
        <p>
          We are all here to support each other, so don&#39;t be nervous but
          rather be confident in yourself and all the work you have put in! No
          matter the outcome, as long as you try your very best I will always be
          proud of you :)
        </p>
        <Image
          src="https://i.imgur.com/unr5Ww8.jpg"
          alt="The boys at Randolph."
        ></Image>
      </div>
    ),
  },
  {
    title: "The Biggest Event of All Time",
    url: "the-biggest-event-of-all-time",
    year: "2023",
    date: "4 - 3",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/bfFkkqh.jpg",
    content: (
      <div className="article-content">
        <p>
          Good morning (?) all. There’s information regarding Nationals below so
          pay attention. Also some cute pics from the Big Event.
        </p>
        <h3>
          <strong>NIRCA Track Nationals</strong>
        </h3>
        <p>
          That&#39;s right, it&#39;s time to sign up for NIRCA track nationals
          in Olivet, Michigan on April 15th and 16th! Nationals is an incredibly
          fun time with the club and one of the main things I look forward to
          each year. It&#39;s a two day meet, being on Saturday and Sunday, and
          we leave Friday morning. If you need an excused absence or need me to
          talk to your professor about moving an exam, please email Wyatt at{" "}
          <a href="mailto:wyatt@vt.edu" target="_blank" rel="noreferrer">
            wyatt@vt.edu
          </a>
          . The drop deadline for nationals is April 7th, and anyone who drops
          after that date will be{" "}
          <strong>
            <mark>fined $50</mark>
          </strong>
          . Again, I cannot stress how fun the meet is and if you&#39;re on the
          fence about going, I highly encourage you to{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/9dQx9mJiZXy9vcHB9&amp;source=gmail-html&amp;ust=1680729584869000&amp;usg=AOvVaw1kcZ-zK9FWGB0KmVYF2poq"
            rel="nofollow noreferrer"
            target="_blank"
          >
            sign up
          </a>{" "}
          <strong>
            <mark>by April 5th</mark>
          </strong>
          .{" "}
        </p>
        <Image
          src="https://i.imgur.com/bSfH7Wc.jpg"
          alt="Big Event group pic."
        ></Image>
        <h3>
          <strong>Prior Performance and Automarks</strong>
        </h3>
        <p>
          I understand that there may be a little confusion regarding prior
          performances and automarks. To begin,{" "}
          <strong>
            <mark>there are no required times to compete at nationals</mark>
          </strong>
          . There may be a few people that have competed in our meets and have
          hit a time that guarantees them to be in the fastest heat. These times
          are just for those that have hit them so they can be placed in the
          fastest heat. Secondly, you{" "}
          <strong>
            <mark>
              must have competed in shot put, discus, triple jump, or
              steeplechase
            </mark>
          </strong>{" "}
          in a previous meet before competing in the respective events at
          nationals. Any hurdle event can also count for steeple. If you have
          hit an automark or are competing in an event that requires proof and
          prior performance, please fill out{" "}
          <a
            href="https://www.google.com/url?q=http://goo.gl/forms/mTwTjKkoaw&amp;source=gmail-html&amp;ust=1680729584869000&amp;usg=AOvVaw1Wn_P7m5tSQGeNVobMU_Me"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this form
          </a>{" "}
          <strong>
            <mark>by April 4th</mark>
          </strong>
          .
        </p>
        <Gallery
          images={[
            {
              src: "https://i.imgur.com/guGl84e.jpg",
              alt: "Roman raking leaves.",
            },
            {
              src: "https://i.imgur.com/2QZPnEn.jpg",
              alt: "Volkan posing with the cutest dog of all time, Molly",
            },
          ]}
        ></Gallery>
        <h3>
          <strong>
            Volunteer Opportunity - Bear Tracks at Margaret Beeks Elementary
          </strong>
        </h3>
        <p>
          The Club XCTF team is partnering with Margaret Beeks Elementary in
          their Bear Tracks program! This is a before-school program from{" "}
          <strong>8:40-9:15 AM</strong> held by the MBE PTO, encouraging their
          kids to run! They are looking for volunteers to be pacers and
          supervisors for the kids, and the dates are listed in the survey
          below. If you are interested, please sign up! In your signup, please
          write down in the comments if you are interested in being a pacer or
          supervisor.{" "}
          <strong>The first week of this event begins this week</strong>, so
          please
          <a
            href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1680729584869000&amp;usg=AOvVaw2f8BLWnU1sbOF2ito6cpOZ"
            rel="nofollow noreferrer"
            target="_blank"
          >
            {" "}
            sign up
          </a>{" "}
          as soon as possible.
        </p>
        <h3>
          <strong>Wildcat Track Festival</strong>
        </h3>
        <p>
          The Wildcat Track Festival is this Saturday, April 8th! If you need to
          drop from this meet after you&#39;ve signed up, please do so before
          April 4th or else you will be charged $15.{" "}
        </p>
        <Image
          src="https://i.imgur.com/ESP8pPM.jpg"
          alt="Molly posing with leaves."
        ></Image>
        <h3>
          <strong>Wyatt’s Corner</strong>
        </h3>
        <p>
          As this semester begins to wrap up, I just want to thank you all for
          the hard work you&#39;ve put into this club to make it what it is
          today. We couldn&#39;t be where we are without you (also clubs
          can&#39;t exist without members), but we genuinely appreciate all the
          hard work you do in all aspects of your student-athlete career. If we
          can ever support you in other ways, please don&#39;t hesitate to reach
          out to us.
        </p>
        <p>
          Anyway, we have a non-animal-related fun fact today. Did you know that
          the letters on a keyboard are called uppercase and lowercase because
          the capital letters were placed on the higher shelf, or upper case, of
          the printing press stand, and the smaller letters were placed on the
          bottom shelf, or lower case. Etymology is fun sometimes.
        </p>
      </div>
    ),
  },
  {
    title: "Lynchburg Part 1",
    url: "lynchburg-part-1",
    year: "2023",
    date: "3 - 27",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/1WFl2uA.jpg",
    content: (
      <div className="article-content">
        <p>
          Good morning fellow tracksars, we got some info about upcoming events
          and a meet recap for you this week. Also have you ever wanted to see
          live* assassin updates as they come in? Well you can’t quite do that
          yet but I will update our new{" "}
          <Link to="/assassin">Assassin page</Link> periodically, so you can go
          check out who got eliminated as well as our new Assassin leaderboard
          to see who has the most <s>kills</s> eliminations!
        </p>
        <h3>
          <strong>Lynchburg Meet Recap + Randolph Meet Signup</strong>
        </h3>
        <p>
          This past weekend we traveled to Lynchburg University where we
          competed against a bunch of D1-D3 schools and did extremely well! All
          meet results can be found{" "}
          <a
            href="https://www.google.com/url?q=https://drive.google.com/file/d/1ohJvxoUKM_4eNl4DJB5y0FHNSGVBuf3i/view?usp%3Dshare_link&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw16sHsSsrkEUznwuT7t2x0L"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          .. I am super proud of everyone who went out and competed!{" "}
          <strong>If you got a new PR at this meet, please fill out </strong>
          <strong>
            <a
              href="https://www.google.com/url?q=https://forms.gle/yCH4FzuzkMyQBFP18&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw2fyHSfUIrSf2FySnxsP3Ni"
              rel="nofollow noreferrer"
              target="_blank"
            >
              this form
            </a>
          </strong>{" "}
          so that we can recognize you for your achievement!
        </p>
        <Image
          src="https://i.imgur.com/aZntB0c.jpg"
          alt="4x100 relay team posing for a photo."
        ></Image>
        <p>
          There were also 6 club records broken at this meet! Your new VT Club
          XCTF record holders are:
        </p>
        <li>Chatham Campbell - 200m - 22.12s</li>
        <li>Harris Naseh - 10,000m - 31:46.28</li>
        <li>Jack Wilson - Discus - 38.14m</li>
        <li>Jack Brown - Javelin - 44.26m</li>
        <li>Nyle Sheriff - Hammer Throw - 37.12m</li>
        <li>Jessica Williams - Long Jump - 5.47m</li>
        <Gallery
          images={[
            {
              src: "https://i.imgur.com/nphqG23.jpg",
              alt: "Jessica Williams running a relay.",
            },
            {
              src: "https://i.imgur.com/YS4oaqe.jpg",
              alt: "Nyle Sheriff competing in the hammer throw.",
            },
          ]}
        />
        <p>
          Drivers who did not drive separately, please be sure to bring your gas
          receipt with the required info written on it to practice and give it
          to Sam or Evelyn. You must have filled your tank Friday night and then
          when you returned.{" "}
        </p>
        <p>
          Remember that you have until <strong>Tuesday 3/28</strong> to{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/6R1ZkaLNypTncUu16&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw28M1FYBNpzrqTo-O934LJ8"
            rel="nofollow noreferrer"
            target="_blank"
          >
            sign up
          </a>{" "}
          for our meet at Randolph college on April 8th! This is our last meet
          before Nationals, and it is always a wonderful meet. The drop deadline
          for this meet is April 4th, if you drop after this date you will
          unfortunately be fined $15.{" "}
        </p>
        <Image
          src="https://i.imgur.com/Qg5Dzen.jpg"
          alt="Sophie, Dani, and Molly posing for a pic at the Jack M. Toms Invitational"
        ></Image>
        <h3>
          <strong>
            Volunteer Opportunity - Bear Tracks at Margaret Beeks Elementary
          </strong>
        </h3>
        <p>
          The Club XCTF team is partnering with Margaret Beeks Elementary in
          their Bear Tracks program! This is a before-school program from{" "}
          <strong>8:40-9:15 am</strong> held by the MBE PTO, encouraging their
          kids to run! They are looking for volunteers to be pacers and
          supervisors for the kids, and the dates are listed in the survey
          below. If you are interested, please sign up! In your signup, please
          write down in the comments if you are interested in being a pacer or
          supervisor.
          <strong>The first week of this event begins next week</strong>, so
          please{" "}
          <a
            href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw1-hnQ0DROUd4DjTus2EwcO"
            rel="nofollow noreferrer"
            target="_blank"
          >
            sign up
          </a>{" "}
          as soon as possible.
        </p>
        <h3>
          <strong>Chipotle Percentage Night</strong>
        </h3>
        <p>
          This <strong>Wednesday 3/29 from 5-9pm</strong>, we will be having a
          percentage night at Chipotle! We will all be heading over after
          practice, but if you want to go earlier please do and please invite
          your friends!{" "}
        </p>
        <p>
          You can also use the code for online pick up if you want to swing by
          and quickly grab food while still supporting our club. We made over
          $300 from the Chipotle percentage night in the Fall, and we are hoping
          to get even more this Spring while also enjoying a team dinner! The
          flyer can be found{" "}
          <a
            href="https://www.google.com/url?q=https://drive.google.com/file/d/1UubbkNtJXCchuDJw16TSI4SwEgpUWR69/view?usp%3Dsharing&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw0MHAGbFQQlQrhe_6Yp0X4x"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <Image
          src="https://i.imgur.com/UorKZOg.jpg"
          alt="Kalen Rita running the 4x400m."
        ></Image>
        <h3>
          <strong>The Big Event</strong>
        </h3>
        <p>
          The Big Event is this <strong>Saturday Apr. 1</strong>, and is one of
          the biggest volunteer events we will be a part of! Phil will be
          attending a team captain meeting this week to learn more about the
          project we will help with as well as more specifics! We will send more
          info regarding what we will be doing once we receive it, so if you
          have signed up please be on the lookout for that coming soon! They
          extended the sign up deadline to today (Monday) at midnight, so if you
          have not signed up please do so{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/7aNPYU5Yg4bPEKRg9&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw14Uu8pDD4jh4YRsKM6Xsui"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          . (Team name is &quot;Club XCTF&quot;)
        </p>
        <Image
          src="https://i.imgur.com/o0BSLB4.jpg"
          alt="Sophie, Molly, and Dani posing at the meet."
        ></Image>
        <h3>
          <strong>Grad Cords</strong>
        </h3>
        <p>
          <mark>
            <strong>Attention seniors</strong>
          </mark>
          , if you would like a Club XCTF graduation cord, please fill out{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/mYhFNsXcBiExgL9h6&amp;source=gmail-html&amp;ust=1680036988450000&amp;usg=AOvVaw1Hn3xFMNe7bJU8D6SP6hmQ"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this other survey
          </a>{" "}
          by April 2nd for your free graduation cord!
        </p>
        <h3>
          <strong>Phil’s Corner</strong>
        </h3>
        <p>
          As we are getting deeper into racing season, I want to
          remind/encourage you all to keep taking care of yourselves, both
          physically and mentally! You are all brilliant scholars and athletes,
          but it is definitely not easy to be doing all that you do. Please take
          breaks for yourself and also don&#39;t forget to simply live! As
          always, all of our officers and I are here to support you not only as
          athletes but also as people. If there is ever anything we can do to
          support you on your journey, do not hesitate to reach out. Keep it up
          though, you are absolutely amazing!
        </p>
        <Image
          src="https://i.imgur.com/20Bka6W.jpg"
          alt="The distance boys on Friday."
        ></Image>
      </div>
    ),
  },
  {
    title: "One Down, Four to Go",
    url: "one-down-four-to-go",
    year: "2023",
    date: "3 - 20",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/7qambKv.jpg",
    content: (
      <div className="article-content">
        <p>
          Listen up people! Below, you’ll find some{" "}
          <strong>crucial information</strong> regarding meets, volunteering
          opportunities, apparel updates, and most importantly{" "}
          <mark>
            <strong>the start of Assassin!</strong>
          </mark>{" "}
          There will also be a full meet recap coming on the website in the next
          few days so stay tuned for that but in the meantime we have a mini
          recap here. And as always any photos from the meet can be found in{" "}
          <a
            href="https://photos.app.goo.gl/XFMPNQgvbF6czWiT6"
            rel="nofollow noreferrer"
          >
            our Google Photos Album
          </a>
          . One last thing: it's been brought to my attention that the meet
          schedule and socials schedule can't be accessed on mobile, this will
          be fixed this week.
        </p>
        <h3>
          <strong>Home Meet Recap</strong>
        </h3>
        <p>
          Congratulations to everyone that competed this past weekend! We had
          many club records, all-time performances, PRs, and fun races for
          everyone to enjoy! Despite the typical Blacksburg weather being
          randomly cold and windy, everyone showed up and showed out. I am so
          incredibly proud of you if you competed, no matter how you feel about
          how you did. Your support and dedication to this club is what makes it
          so special, and your effort doesn&#39;t go unnoticed.
        </p>
        <Image
          src="https://i.imgur.com/Os1laba.jpg"
          alt="Home meet relay."
        ></Image>
        <h3>
          <strong>Dr. Jack Toms Invitational Meet 3/24-3/25</strong>
        </h3>
        <p>
          Our lovely race coordinators Hannah and Roman would like to inform you
          that{" "}
          <strong>
            the deadline to drop out of the Dr. Jack Toms Invite is{" "}
          </strong>
          <strong>
            <mark>Tuesday morning at 8 am.</mark>
          </strong>
          <strong> </strong>If you are dropping, you must inform Hannah or Roman
          before that time. If you drop the meet afterward, you will be charged
          $15. If you are planning on attending the Friday events, rides will be
          coordinated as well. Running events on Friday have just been announced
          to start with the 3k steeplechase at 4:30 pm.
        </p>
        <Image
          src="https://i.imgur.com/nuc8Vlq.jpg"
          alt="Home meet high jump."
        ></Image>
        <h3>
          <strong>Assassin</strong>
        </h3>
        <p>
          This is the big one. It’s here and better than ever. Are you ready??
          The Spring edition of Club XCTF assassin begins this week.{" "}
          <strong>
            Make sure to like Harris’s message in GroupMe if you want to play!
          </strong>{" "}
          There’s also information about the rules of the game on there. He even
          wrote code for it. The rules for Assassin can be found{" "}
          <a
            href="https://www.google.com/url?q=https://docs.google.com/document/d/1IcguV4x5KCUdAfa3pgz4rXJ26-iHCmcXtdML9zKRedw/edit?usp%3Dsharing&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw098R5U-BdAyVCfdV9G-ln0"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <h3>
          <strong>Eligibility form</strong>
        </h3>
        <p>
          If you are even slightly interested in running in NIRCA Track
          Nationals on April 15th and 16th,{" "}
          <strong>you must sign the NIRCA eligibility form </strong>that Hannah
          is bringing to practice! All NIRCA athletes must sign this waiver and
          maintain a certain GPA in order to compete and this is signed by our
          university bursar&#39;s office. If you do not fill out this form, you
          cannot compete at nationals.{" "}
        </p>
        <Image
          src="https://i.imgur.com/VgLeY2U.jpg"
          alt="Home meet hurdles."
        ></Image>
        <h3>
          <strong>The Big Event</strong>
        </h3>
        <p>
          The Big Event is a student-run day of service that has grown into the
          second largest event of its kind in the nation. This year this will be
          on <strong>Saturday, April 1st</strong>, and our club will be
          participating! Our club will be assigned some form of community
          service, and as a team we will go out together and make a difference!
          We are hoping to have a lot of people for this event, so please{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/7aNPYU5Yg4bPEKRg9&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw1GLaFei_Whopc5DPP3UJIY"
            rel="nofollow noreferrer"
            target="_blank"
          >
            sign up
          </a>{" "}
          and invite your friends! To join our Big Event team, please fill out
          the form below, and in the team name{" "}
          <mark>
            <strong>
              please put &quot;Club XCTF&quot; to ensure you are a part of our
              team.
            </strong>
          </mark>{" "}
          Under the Team Captain question, please put &quot;No&quot; and not as
          an individual.
        </p>
        <h3>
          <strong>
            Volunteer Opportunity - Bear Tracks at Margaret Beeks Elementary
          </strong>
        </h3>
        <p>
          The Club XCTF team is partnering with Margaret Beeks Elementary in
          their Bear Tracks program! This is a before-school program from
          8:40-9:15 am held by the MBE PTO, encouraging their kids to run! They
          are looking for volunteers to be pacers and supervisors for the kids,
          and the dates are listed in{" "}
          <a
            href="https://www.google.com/url?q=https://www.signupgenius.com/go/20f0e4da4af2ca7f94-bear1%23/&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw1jboVfKZU2uf7EVitAdkfb"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this survey
          </a>
          . If you are interested, please sign up! In your signup, please write
          down in the comments if you are interested in being a pacer or
          supervisor. Hope to see you there!
        </p>
        <h3>
          <strong>Nationals Shirt and Grad Cords</strong>
        </h3>
        <p>
          We have some more apparel opportunities! If you are interested in
          purchasing a shirt celebrating our trip to nationals this year, then
          please fill out{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/quXsynH2KSw86mH57&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw3uqwWmnNWfs8tPkZnRPxAF"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this survey
          </a>
          ! These shirts are $15 and you must pay Sam and fill out this form by
          March 24th or else we cannot order one for you. Furthermore,{" "}
          <strong>attention seniors</strong>, if you would like a Club XCTF
          graduation cord, please fill out{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/mYhFNsXcBiExgL9h6&amp;source=gmail-html&amp;ust=1679520741592000&amp;usg=AOvVaw2117GwODUOBu709PTPE3_z"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this other survey
          </a>{" "}
          <strong>
            <mark>by April 2nd for your free graduation cord!</mark>
          </strong>
        </p>
        <h3>
          <strong>Wyatt’s Corner</strong>
        </h3>
        <p>
          Thanks again for reading to the very bottom. I wonder how many people
          actually make it this far. Well, for this week of Wyatt&#39;s Fun Fact
          of the Week, we have animal group names. Did you know:
        </p>
        <li>A group of flamingos is called a flamboyance,</li>
        <li>A group of crows is called a murder,</li>
        <li>A group of toads is called a knot, and</li>
        <li>A group of porcupines is called a prickle.</li>
        <p>
          I hope you enjoyed these fun facts. As someone studying science, I
          think it&#39;s important to not lose sight of the fun in life and have
          silly names. I hope you have a wonderful week and let me know if you
          know of any other good animal group names.
        </p>
      </div>
    ),
  },
  {
    title: "Race Season ft. Snow",
    url: "race-season-ft-snow",
    year: "2023",
    date: "3 - 13",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/t0w1PJC.jpg",
    content: (
      <div className="article-content">
        <p>
          Good “morning” Spring Breakers! I hope you all had a lovely break full
          of warm weather, and welcome back to Blacksburg where March is the new
          January!
        </p>
        <p>
          Here are all the updates as we get into racing season! There will be a
          lot of information sent out here so please be sure to read it all so
          you don&#39;t miss any deadlines or miss anything else.
        </p>
        <p>
          <strong>PSA to all Freshmen:</strong> It gets cold, don't leave your
          gloves and jackets at home please. We don't want you to freeze to
          death walking up Beamer.
        </p>
        <p>
          <strong>
            <mark>
              All practices will be moved to 6:00pm starting this week!
            </mark>
          </strong>{" "}
          The reason we move practice to 6 is because the varsity team has moved
          into their outdoor season, and will be on the track every day now. We
          have to stay out of their way unfortunately, so we will now practice
          at 6 to avoid that problem.{" "}
          <strong>
            We will also <mark>not</mark> have practice this Tuesday because we
            are having a spike night that night (more info below).
          </strong>{" "}
          It&#39;s gonna be freezing that day as well. In place of practice on
          Tuesday, we have a lifting slot available to any club member from{" "}
          <strong>7:00-8:00 am on Tuesdays</strong> at the Rec Sports Field
          House!
        </p>
        <p>
          You can also find the link to our Spring 2023 Google Photos album{" "}
          <a
            href="https://www.google.com/url?q=https://photos.app.goo.gl/XFMPNQgvbF6czWiT6&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw3R6GFXZ93HNqvmTEuAAGll"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <Image
          src="https://i.imgur.com/d7k3Jto.jpg"
          alt="Snowy practice."
        ></Image>
        <h3>
          <strong>Racing Information</strong>
        </h3>
        <p>
          Hannah will be sending out an email to all racers with more
          information regarding some important racing items to be completed, so
          if you are racing this season please be on the lookout for that! She
          will be bringing NIRCA eligibility forms to practice the next two
          weeks that must be filled out for anyone that wants to compete at
          nationals. She will also talk about the prior performance submission
          that is needed to run certain events at Nationals.
        </p>
        <p>
          Information about the home meet this upcoming Saturday will be sent
          out later this week as well! We are super excited to get to see all of
          your hard work get shown through your races!
        </p>
        <p>
          It&#39;s time to sign up for the second meet of the season. It&#39;ll
          be at the<strong> University of Lynchburg March 24-25</strong>. Please
          note the Friday events in the survey (Javelin, 3k Steeple, 10k), in
          order to plan around your class schedule. Please fill{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/MJzUBXnoWvaw7dff9&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw2di6Ph_TpUCYTaVVrxpGIP"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this
          </a>{" "}
          out by <strong>next Sunday, March 19th</strong>!
        </p>
        <h3>
          <strong>Spike Night &amp; Shoe Drive</strong>
        </h3>
        <p>
          Starting this week, we will be conducting a used shoe drive where you
          can hand us your used pairs of shoes and spikes! The used shoes will
          be donated to the MORE Foundation Group (learn more{" "}
          <a
            href="https://www.google.com/url?q=https://www.morefoundationgroup.org/&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw3mfBRcBXXINBsfdXFfPWC9"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          ) to help those in need. Any spikes you donate will be given to
          athletes at Blacksburg Middle and High School, so your donations are
          directly benefiting the running community in Blacksburg.
          <strong>
            {" "}
            Please bring your old shoes and spikes to practice to donate!
          </strong>
        </p>
        <p>
          In conjunction with this, we will also be doing a spike night at
          RunAbout sports on <strong>Tuesday, March 14th, from 5-7 pm. </strong>
          We will have the store to ourselves for two hours, and we will receive
          15% of the proceeds made during that night. This way you can donate
          your old running shoes and buy a new pair, which also benefits the
          club! It&#39;ll be a lot of fun and RunAbout sports is a great company
          that is a staple of the Blacksburg running community.
        </p>
        <Gallery
          images={[
            {
              src: "https://i.imgur.com/oLmPfNe.jpg",
              alt: "Snowy practice 2.",
            },
            {
              src: "https://i.imgur.com/bxu4dT6.jpg",
              alt: "Snowy practice 3.",
            },
          ]}
        />
        <h3>
          <strong>The Big Event</strong>
        </h3>
        <p>
          The Big Event is a student-run day of service that has grown into the
          second largest event of its kind in the nation. This year this will be
          on <strong>Saturday, April 1st</strong>, and our club will be
          participating! Our club will be assigned some form of community
          service, and as a team we will go out together and make a difference!
          We are hoping to have a lot of people for this event, so please{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/7aNPYU5Yg4bPEKRg9&amp;source=gmail-html&amp;ust=1678858425302000&amp;usg=AOvVaw24h4jM-X_v1k8Ts4B-E6tA"
            rel="nofollow noreferrer"
            target="_blank"
          >
            sign up
          </a>{" "}
          and invite your friends! To join our Big Event team, please fill out
          the form below, and in the team name please put &quot;Club XCTF&quot;
          to ensure you are a part of our team. Under the Team Captain question,
          please put &quot;No&quot; and not as an individual.
        </p>
        <h3>
          <strong>Pre-Meet Team Dinner</strong>
        </h3>
        <p>
          After practice this Thursday (3/16), we will be having a team dinner
          at West End dining hall on campus! We will all walk over after
          practice and it&#39;s gonna be a lot of fun, so look forward to that!
        </p>
        <Image
          src="https://i.imgur.com/laIGSWz.jpg"
          alt="Wyatt staring into your soul using a spyglass made from his hands."
        ></Image>
        <h3>
          <strong>How do I Join?</strong>
        </h3>
        <p>
          It&#39;s not too late to join! All membership requirements can be
          found <Link to={"/join"}>here</Link>. As the initial deadline has
          already passed to join,{" "}
          <strong>
            you must complete all of these items before you are able to attend
            practice or any club events.
          </strong>
        </p>
        <h3>Message from Phil:</h3>
        <p>
          As always, thank you all so much for reading this in its entirety!
          &quot;Watching you all compete is a testament to the power of human
          potential. Your athletic abilities and skills are truly
          remarkable.&quot; - ChatGPT 2023. In more human terms I want you all
          to know that I am always proud to be your President. Racing season is
          upon us so let&#39;s go show all these other schools what we are made
          of!
        </p>
        <p>Sincerely,</p>
        <p>Phil</p>
      </div>
    ),
  },
  {
    title: "Knock Knock, Who's There? It's your 2023-2024 Officers!",
    url: "knock-knock-whos-there-its-the-2023-2024-officers",
    year: "2023",
    date: "2 - 27",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/uaeC230.jpg",
    content: (
      <div className="article-content">
        <h3>Weekly Updates 2/27/23</h3>
        <p>
          Welcome to the Club XCTF Updates (Wyatt&#39;s Version (But also
          Volkan’s Version because I added a bunch of stuff here)). I hope you
          all had a fun time at our Breakzone Social this past weekend and
          watched the drama unfold over bowling and ping pong. Shoutout to
          Konnor for scoring 200 points in bowling!
        </p>
        <Image
          src="https://i.imgur.com/r5FIYGe.jpg"
          alt="Prez vs. VP Ping Pong"
        ></Image>
        <p>
          I've sprinkled in some pictures from our social throughout this post
          but if you want to see all of the photos we took there and throughout
          this whole semester, check out our{" "}
          <a
            href="https://photos.app.goo.gl/XFMPNQgvbF6czWiT6"
            rel="nofollow noreferrer"
          >
            Google Photos Album
          </a>
          .
        </p>
        <h3>Officer Election Results</h3>
        <p>Introducing your 2023-2024 Officer Board:</p>
        <li>
          <strong>President: </strong>
          <i>Wyatt Thomas</i>
        </li>
        <li>
          <strong>Vice President: </strong>
          <i>Volkan Akkale</i>
        </li>
        <li>
          <strong>Race Coordinator: </strong>
          <i>Roman Ciulla</i>
        </li>
        <li>
          <strong>Treasurer: </strong>
          <i>Evelyn Tipper</i>
        </li>
        <li>
          <strong>Apparel Officer: </strong>
          <i>Molly Donaldson</i>
        </li>
        <li>
          <strong>Social Coordinator: </strong>
          <i>Harris Naseh</i>
        </li>
        <li>
          <strong>Webmaster: </strong>
          <i>Charlotte Baxter</i>
        </li>
        <li>
          <strong>M Distance Captain: </strong>
          <i>Ben Darden</i>
        </li>
        <li>
          <strong>W Distance Captain: </strong>
          <i>Sydney Szabos</i>
        </li>
        <li>
          <strong>Sprint Captain: </strong>
          <i>Adam DeFosse</i>
        </li>
        <li>
          <strong>Sprint Captain: </strong>
          <i>Riley Ophof</i>
        </li>
        <li>
          <strong>Throws Captain: </strong>
          <i>Nyle Sheriff</i>
        </li>
        <li>
          <strong>Jumps Captain: </strong>
          <i>Aidan McCrory</i>
        </li>
        <h3>Home Meet Signup</h3>
        <p>
          That&#39;s right! It&#39;s finally time to start signing up for races
          again. Here is a message from our sponsor (Hannah):
        </p>
        <p>
          It&#39;s time to sign up for the first track meet of the season!! This
          will be our home meet on <strong>Saturday, March 18th</strong>, at
          Blacksburg High School with events starting at 11 am. For the first
          time, we are offering a one time only racing opportunity for ALL
          members, including our non-racing members! This would include a $25
          fee if you haven&#39;t paid racing dues this semester and more info
          can be found in the survey.
        </p>
        <p>
          Please fill{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/JQt1ixRN6Jxu33zR6&amp;source=gmail-html&amp;ust=1677626392604000&amp;usg=AOvVaw22Cv6XEv0-cfs-y1QRfHEJ"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this survey
          </a>{" "}
          out by <strong>Wednesday, March 8th</strong>, which is after we come
          back from Spring break! As always let me know if you have any
          questions.
        </p>
        <Image
          src="https://i.imgur.com/EPzGHlM.jpg"
          alt="Harris and his balls"
        ></Image>
        <h3>Officer Feedback</h3>
        <p>
          How have we been doing? Now that we&#39;re almost halfway done through
          the semester (that&#39;s wild to think about), we’d like to hear from
          you about what we&#39;ve been doing well and what we can improve upon!
        </p>
        <p>
          Please fill out{" "}
          <a
            href="https://www.google.com/url?q=https://forms.gle/Y4SPbwjsX2y4Dkkv9&amp;source=gmail-html&amp;ust=1677626392604000&amp;usg=AOvVaw2aL-wvJHOU7KNOzop4bc8G"
            rel="nofollow noreferrer"
            target="_blank"
          >
            this anonymous survey
          </a>{" "}
          and let us know your thoughts.
        </p>
        <p>
          The more people that fill it out, the more input we have, and the
          easier it is for us to become the best officer board we can be!
        </p>
        <h3>Giving Day Rewards</h3>
        <p>
          Because our club is full of so many amazing people, you all reached
          all three of our donation incentives! The most anticipated one, of
          course, is throwing a pie at an officer! That will take place{" "}
          <strong>this Tuesday at practice. </strong>
        </p>
        <p>
          We will be randomly selecting 13 individuals to throw a plate of
          whipped cream at each one of the officers at practice. If practice is
          canceled over weather, we will postpone this until a better day.{" "}
        </p>
        <p>
          We will also be bringing ice cream to practice after Spring Break. If
          you won a prize in our raffle, Suzie will be handing those out at
          practice as well.{" "}
        </p>
        <h3>Spike Night &amp; Shoe Drive</h3>
        <p>
          Normally I would announce this next week, but because of Spring Break,
          I am going to let you all know of this exciting opportunity now!
          Starting the week of <strong>March 13th</strong>, we will be
          conducting a used shoe drive where you can hand us your used pairs of
          shoes and spikes! The used shoes will be donated to the MORE
          Foundation Group (learn more{" "}
          <a
            href="https://www.google.com/url?q=https://www.morefoundationgroup.org/&amp;source=gmail-html&amp;ust=1677626392604000&amp;usg=AOvVaw2uj7YhlGd3va9B9gmhKOc4"
            rel="nofollow noreferrer"
            target="_blank"
          >
            here
          </a>
          ) to help those in need.
        </p>
        <p>
          Any spikes you donate will be given to athletes at Blacksburg Middle
          and High School, so your donations are directly benefiting the running
          community in Blacksburg, which I think is great.
        </p>
        <p>
          In conjunction with this, we will also be doing a spike night at
          RunAbout sports on <strong>Tuesday, March 14th, from 5-7 pm.</strong>{" "}
          We will have the store to ourselves for two hours, and we will receive
          15% of the proceeds made. This is a great way for you to support the
          club and the Blacksburg running community while also grabbing a sweet
          pair of shoes.
        </p>
        <Gallery
          images={[
            {
              src: "https://i.imgur.com/M4AfaZC.jpg",
              alt: "Tara Bowling",
            },
            {
              src: "https://i.imgur.com/WMml5Fn.jpg",
              alt: "Chris taking a trickshot",
            },
          ]}
        />
        <h3>Practice on March 3rd</h3>
        <p>
          Because of Spring Break starting the next week,{" "}
          <strong>we will not be having practice on Friday, March 3rd</strong>.
          Be sure to look out for unofficial practices, though, as plenty of
          people will be organizing activities. I hope you have a fun and safe
          Spring Break!
        </p>
        <h3>Fun Fact of the Week (FFOTW) - Wyatt</h3>
        <p>
          Thank you for reading to the very end. I&#39;m thinking of including a
          fun fact at the bottom of each so you can become just a little more
          enlightened each week by a useless fun fact. This week is going to be
          about otters. Did you know that otters have a favorite rock that they
          will carry with them to crack open clams? I think that is lovely.
        </p>
        <Image
          src="https://i.imgur.com/t4Pazjx.jpg"
          alt="Pool enjoyers."
        ></Image>
      </div>
    ),
  },
  {
    title: "Elections, Sports, and Even Bigger Socials!",
    url: "elections-sports-and-even-bigger-socials",
    year: "2023",
    date: "2 - 21",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/mQIXD6F.jpg",
    content: (
      <div className="article-content">
        <p>
          Thank you to everyone who came out to the WBB game vs. NC State on
          Sunday! I'll see you all in the Fall at Cassel when you inevitably
          need to scratch your newfound women's basketball itch :D. But that's
          enough about the best D1 team on campus, here's some news about the
          best club team on campus:
        </p>
        <Image
          src="https://i.imgur.com/0GBxapW.jpg"
          alt="Soccer Social"
        ></Image>
        <p>
          The soccer social on Saturday was a huge success! The sprinters
          crushed the distance team with a 5-0 win and the Freshmen/Senior team
          scored 2-1 against the Sophomore/Junior team in a heated match. Photos
          from the event and all other photos we take this semester can be found
          on our{" "}
          <a
            href="https://photos.app.goo.gl/XFMPNQgvbF6czWiT6"
            target={"_blank"}
          >
            Google Photos Album.
          </a>
        </p>
        <h3>Officer Elections!</h3>
        <p>
          Officer elections for the 2023-2024 school year are upon us, and we
          want to get your input! These candidates are all running for roles
          that are heavily involved with the members, so we want to hear what
          you think would make them good officers. Please look through{" "}
          <a href="https://forms.gle/XtNwLdtQkpLpD9DA6" target={"_blank"}>
            this form
          </a>{" "}
          and write down what you think their strengths are and why they would
          be a great candidate for an officer position!
        </p>
        <h3>Breakzone Social!</h3>
        <p>
          We are super excited to announce that we rented out the Breakzone in
          Squires <b>this Saturday (2/25) from 2:00pm-4:00pm!</b> All club
          members are welcome to join for bowling, pool, darts, foosball, ping
          pong, video games, board games, and more! It's going to be a lot of
          fun so we hope to see you there!
        </p>
        <h3>Giving Day Raffle</h3>
        <p>
          As mentioned in many many messages, Giving day was this past week and
          you all absolutely crushed it! I wanted to remind you that any club
          member who donated at least $5 is able to enter themselves into a
          raffle for some cool prizes! The link for that is{" "}
          <a href="https://forms.gle/VhaNjbj76yLUsFaJ9" target={"_blank"}>
            here,
          </a>{" "}
          and the winners will be announced at practice on Wednesday so please
          complete the form before then.
        </p>
        <h3>Message from Phil</h3>
        <p>
          Bit of a chiller week with fun stuff planned, but we are also 2 weeks
          away from Spring break! I know you all have been working super hard
          being student athletes, so you all have earned a well deserved break
          soon. Until then, keep on grinding and doing your best in everything
          that you do! I believe in all of you, and I hear a lot about the great
          things you are all involved in which makes me so very proud to be able
          to get to know all of you. <br />
          <br />
          -Phil
        </p>
      </div>
    ),
  },
  {
    title: "Giving Day 2023!",
    url: "giving-day-2023",
    year: "2023",
    date: "2 - 13",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/PUVge5r.jpg",
    content: (
      <div className="article-content">
        <h3>Giving Day Information!</h3>
        <p>
          Giving Day is{" "}
          <b>Wednesday-Thursday February 15-16 from noon to noon,</b> and it is
          a 24 hour time where all donations that are made to the club during
          that time through our{" "}
          <a
            href="https://givingday.vt.edu/amb/clubxctf"
            target="_blank"
            rel="noreferrer"
          >
            Giving Day link
          </a>{" "}
          go directly to our club. This is extremely important to our club as we
          received over $6,000 from 150+ donors last year, and we are hoping to
          up that even more this year!
        </p>
        <p>
          There is also a competition among Sport Clubs where the club with the{" "}
          <b>most donors ($5 minimum donation)</b> receives an additional $1,500
          for their club, and we are planning on winning that prize! Please
          share this link with your friends and family, as this is the biggest
          way that they can support you with our club. Please also be sure to
          donate so that we can beat all the other sport clubs and prove that we
          are indeed the best!
        </p>
        <p>
          Also, there is a raffle that any member who donates will be able to
          enter themselves in for! For every $5 that you donate, you will get 1
          raffle ticket which can then be used to enter yourself for any prize
          you want. Prizes included some nice apparel, semester shirts, an
          Instagram shoutout from the club account, Phil buys you dinner, and
          much more!
        </p>
        <p>
          Additionally, if we reach certain donor goals, then there will be
          rewards for the whole club! If we reach <b>100 donors,</b> we will let
          you all choose some of the events that we will have at our fun meet at
          the end of the year! If we reach <b>150 donors,</b> there will be ice
          cream sandwiches at practice for one day. If we receive over{" "}
          <b>200 donors,</b> all 13 officers will have a pie thrown at them at
          practice by randomly selected donors!
        </p>
        <p>
          All of this information can also be found in the extremely cool and
          slick banner above!
        </p>
        <h3>Game Night with Rec Sports!</h3>
        <p>
          Rec Sports will be having a sports club shout out night at the VT
          Women's Basketball game <b>this Sunday (2/19)!</b> Athletics has
          offered to hold a section of Cassell for sport club athletes to sit
          together for the game. During a timeout of the game, clubs will be
          honored on the video board with a recognition. Additionally, national
          championship teams will have the opportunity to be recognized on the
          court and throw out t-shirts to the crowd!
        </p>
        <p>
          If you want to attend the game and sit in the sport club section,
          please{" "}
          <a
            href="https://forms.gle/ECgCasmeETunxePt9"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?q=https://forms.gle/ECgCasmeETunxePt9&amp;source=gmail&amp;ust=1676395908605000&amp;usg=AOvVaw3JQkepiOgKMDMU072bouaN"
          >
            RSVP HERE
          </a>{" "}
          by tomorrow. You must be on our roster to attend.
        </p>
        <p>
          <b>For those who travelled to Nationals with us last year only,</b> if
          you want to be a part of the group that goes onto the court please{" "}
          <a
            href="https://forms.gle/fc5iiPUGUhyhDYSb7"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?q=https://forms.gle/fc5iiPUGUhyhDYSb7&amp;source=gmail&amp;ust=1676395908605000&amp;usg=AOvVaw364tzSAWjTQchbiiI2lJTw"
          >
            RSVP HERE
          </a>{" "}
          by tomorrow.
        </p>
        <p>
          Student tickets are free, just visit athletics’{" "}
          <a
            href="https://tickets.hokiesports.com/student/lottery/"
            target="_blank"
            rel="noreferrer"
          >
            student lottery site
          </a>{" "}
          at noon on gameday and request a free ticket.
        </p>
        <h3>Soccer Social!</h3>
        <p>
          This Saturday we will be having a soccer social where we will have
          multiple games! One will have Distance against Sprints/Field. Who is
          better? Track & Field or Distance? We will also have other games like
          Freshmen and Seniors vs Sophomores and Juniors. Come out to the{" "}
          <b>Rec Fields this Saturday at 1 pm</b> to find out!
        </p>
        <h3>Looking for Officers!</h3>
        <p>
          As we are nearing the end of the year, we are looking for new officers
          to take over the club for next year! If you are interested in being an
          officer, please fill out{" "}
          <a
            href="https://forms.gle/cse6Ms4aVnyo8kdC6"
            target="_blank"
            rel="noreferrer"
          >
            this form
          </a>{" "}
          by <b>February 17th</b> to be considered for an officer position. If
          you have any questions, please reach out to any of the current
          officers.
        </p>
        <p>
          <a
            href="https://docs.google.com/presentation/d/1nk0E9zp6DhNguJ9GTlDc5ur96L664ABSw41kxHOOYP8/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>{" "}
          are slides explaining the officer positions and what they do.
        </p>
      </div>
    ),
  },
  {
    title: "Media Week!",
    url: "media-week",
    year: "2023",
    date: "2 - 8",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/mdL6PqP.jpg",
    content: (
      <div className="article-content">
        <h3>Media Week is in full swing!</h3>
        <p>
          We've been filming clips at practice for a video that we are making,
          and day 1 of our photoshoots was a huge success, thank you to everyone
          who came out! I can't wait to show you all the final product! Our
          second day of photoshoots is tomorrow,{" "}
          <b>
            Thursday, February 9th at the Media Studio in Newman Library, Rm
            209.
          </b>{" "}
          We have access to a green screen, white background, black background,
          professional lighting setup, and nice cameras! Please come in your
          uniform and get ready to pose!
        </p>
        <h3>When can I see my photos?</h3>
        <p>
          We will be posting the unedited photos on our Google Photos albums the
          day following each photoshoot. I will also be going through and
          touching up/replacing backgrounds to get professional sports portrait
          versions of each photo that we will share as soon as it's ready. If
          you have any questions about the photoshoots, please contact{" "}
          <a href="mailto:volkanakkale@vt.edu">Volkan</a> or{" "}
          <a href="mailto:lphilip01@vt.edu">Phil</a>. You can also message us on
          GroupMe.
        </p>
        <p>
          <b>
            <a
              href="https://photos.app.goo.gl/YzHXdNZD4Vc5XS579"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tuesday Photo Album
            </a>
          </b>
        </p>
        <p>
          <b>
            <a
              href="https://photos.app.goo.gl/FJMd5GYNSvAvEJ1j6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thursday Photo Album
            </a>
          </b>
        </p>
        <h3>Giving Day!</h3>
        <p>
          Giving Day is on <b>February 15-16 from noon to noon,</b> and it is a
          24 hour time where all donations that are made to the club through the{" "}
          <a
            href="https://givingday.vt.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giving Day portal
          </a>{" "}
          go directly to our club. This is extremely important to our club as we
          received over $6,000 from 200+ donors last year, and we are hoping to
          up that even more this year!{" "}
        </p>
        <p>
          There is also a competition among Sport Clubs where the club with the
          most amount of donors receives an additional $1,500 for their club,
          and we are planning on winning that prize! We will talk about this
          more at practice and in the GroupMe, but there will be a fun raffle
          for all club members who donate, and we encourage all friends and
          family to donate as well to help support the club!
        </p>
        <h3>Singlets & Apparel!</h3>
        <p>
          For those who ordered singlets in the Fall, please be sure to get your
          singlet from Suzie at practice, we cannot hang on to your singlets for
          too long so please pick it up if you bought one!
        </p>
        <p>
          <b>
            All apparel/singlet orders and payments are due by this Friday,
            February 10th,
          </b>{" "}
          if you do not order/pay by this date, you will be charged a late fee
          for a singlet order. For an apparel order, if you do not pay on time
          your apparel will not be ordered. You can pay for these at practice
          using <b>cash or check only. Singlets are required for racing!</b>
        </p>
        <p>
          <a
            href="https://forms.gle/6sZN4dgJPQgitmaPA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uniform Survey
          </a>
        </p>
        <p>
          <a
            href="https://forms.gle/M8KkKBQPxtHaQFnc8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apparel Survey
          </a>
        </p>
        <h3>Racing Reminders</h3>
        <b>
          If you are racing with us this Spring and have not completed the
          following items, please do so ASAP.
        </b>
        <ol>
          <li>
            <p>
              <b>
                All new members, or anyone else that is new to racing with our
                club
              </b>{" "}
              need to complete{" "}
              <a href="https://forms.gle/r6rbgkNrY5viQWNK8">
                the NIRCA registration survey.
              </a>{" "}
              Once we create your account you will get 2 emails to finish
              setting up your account and complete a waiver. Please do this{" "}
              <b>asap</b> because you cannot race without this, but if you raced
              with us in the Fall you are all set.
            </p>
          </li>
          <li>
            <p>
              <b>All returning members</b> need to log into your NIRCA account{" "}
              <a href="https://clubrunning.org/">here</a> and fill out the
              waiver <b>asap</b> as you also cannot race before this is done. If
              you have done this in the Fall or have raced with us in the Fall
              you do not have to do it again.
            </p>
          </li>
        </ol>
        <div className="img-container">
          <img
            src="https://i.imgur.com/KNUpPWB.jpg"
            alt="Fun photos at the Media Day photoshoots!"
          />
        </div>
        <div className="img-container">
          <img
            src="https://i.imgur.com/GUXV0CL.jpg"
            alt="More fun photos at the Media Day photoshoots!"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Weekly Updates 1/30",
    url: "weekly-updates-1-30",
    year: "2023",
    date: "1 - 30",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/PTptR3Q.jpg",
    content: (
      <div className="article-content">
        <p>
          Hey y'all! I hope you all had a great first week of practice! Before
          we get into the weekly updates, I want to let you all know that the
          records can now be found in the competition pages. There's{" "}
          <b>a ton</b> of new information below so make sure to read it all so
          you don't miss out on any of the fun things we have planned!
        </p>
        <h3>Media Week!</h3>
        <p>
          We will be having our first ever media week next week (Starting Feb
          5th)! We will be filming clips at practice for a video that we are
          making, and what I am most excited for is our photoshoots! We will be
          taking professional athletic photos on{" "}
          <b>
            Tuesday and Thursday, February 7/9th at the Media Studio in Newman
            Library, Rm 209.
          </b>{" "}
          We have access to a green screen, white background, black background,
          professional lighting setup, and nice cameras! Please come in your
          uniform and get ready to pose!{" "}
        </p>
        <p>
          You can{" "}
          <a
            href="https://www.signupgenius.com/go/8050A4DA9AE28A2FC1-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            sign up
          </a>{" "}
          for a 20 minute time slot between 6:00-7:40pm for either day in the
          sign up genius below, and sign up with your friends if you want group
          photos! Due to the size of the studio, we will not be able to have
          groups of more than 10. If you do not have a singlet yet, the uniform
          order survey is later in this post. You will need to order and pay for
          your singlet as well as pick it up from Suzie before your time slot
          though. This is available to any member of the club, even if you do
          not have a uniform.
        </p>
        <h3>First Percentage Night and Social!</h3>
        <p>
          Our first percentage night will be this{" "}
          <b>Wednesday 2/1 at Panda Express!</b> From 10:30AM-9:30PM, if you
          order at the Panda Express on Prices Fork Road and show them{" "}
          <a
            href="https://drive.google.com/file/d/1D1QHkTz4zH-qn6n7di-BGgKyG8rTLytT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            this flyer
          </a>{" "}
          at checkout, or order online with the code 348415, our club will
          receive 20% of the profits! We will be having a team dinner there
          after practice on Wednesday, but you can also go at any time
          throughout the day! Invite your friends and don't forget to show them
          the flyer!
        </p>
        <p>
          We are also having our <b>first social event this Friday!</b> Your
          favorite Vice-President, Wyatt, will be hosting a{" "}
          <b>Jeopardy night in New Classroom Building, Room 250 at 7:00pm!</b>{" "}
          This is a great chance to meet new people from the club and get more
          connected, plus it will be a lot of fun! There is no sign up required,
          you can just show up to NCB 250 after practice!{" "}
        </p>
        <h3>New Officer Interest Meeting!</h3>
        <p>
          New officer elections are coming up fast! If you are interested in
          becoming an officer for the best club on campus, we will be having an
          interest meeting next{" "}
          <b>Sunday, February 5th at 2:00pm in Wallace 340.</b> At the meeting
          we will be going over each officer position and what they do, and also
          talking about the officer election process! There are 12 officer
          positions that you can run for: Vice-President, Treasurer, Race
          Coordinator, Apparel Officer, Social Coordinator, Webmaster, Men's
          Distance Captain, Women's Distance Captain, 2 Sprint Captains, Throws
          Captain, and Jumps Captain. You can talk to any of these officers
          about their position or if you have any questions for them, and then
          in the interest meeting they will each share more about their
          positions. If you are at all interested in becoming an officer, we
          encourage you to attend the interest meeting!
        </p>
        <h3>Order Singlets & Apparel!</h3>
        <p>
          For those who ordered singlets in the Fall, please be sure to get your
          singlet from Suzie at practice, we cannot hang on to your singlets for
          too long so please pick it up if you bought one!
        </p>
        <p>
          Our new singlet and apparel surveys are here! If you want to buy some
          really cool merch and rock an awesome singlet, these are for you. For
          those who plan on racing with us this Spring,{" "}
          <b>**a uniform singlet is required for competition**.</b> Once you buy
          a singlet, you will be able to use it for your entire time here with
          the club. Also for those who want to wear an official VT singlet for
          our upcoming media day, please be sure to fill out the survey and pay
          for your singlet before those days come.{" "}
          <b>All orders and payments are due by Friday, February 10th</b>, if
          you do not order/pay by this date, you will be charged a late fee for
          a singlet order. For an apparel order, if you do not pay on time your
          apparel will not be ordered. You can pay for these at practice using
          cash or check only, this is because we are required to turn in all of
          the money to our sports club office, and they only take cash/check.
        </p>
        <p>
          <a
            href="https://forms.gle/6sZN4dgJPQgitmaPA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uniform Survey
          </a>
        </p>
        <p>
          <a
            href="https://forms.gle/M8KkKBQPxtHaQFnc8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apparel Survey
          </a>
        </p>
        <h3>Lifting Timeslot</h3>
        <p>
          Rec Sports has given us a time slot where we will be able to lift in
          the Rec Sports Field House! We have been given Tuesday from
          7:00am-8:00am as our time slot, and any club member is able to come
          and lift with us!
        </p>
        <h3>Administrative Updates!</h3>
        <p>
          As it is a new semester, we have to quickly mention a few
          administrative things about being a club member. Every club member
          must agree to the{" "}
          <a
            href="https://drive.google.com/file/d/1spaF6IMfr2eUkN4Yq1VaN6rUx5yBX_RO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sport Club Code of Conduct
          </a>{" "}
          (this was on your IMLeague forms).Please be sure to read it again and
          understand it, as those are the rules that our club must follow and
          that we enforce. We want to remind everyone that alcohol is not
          permitted at any official club events, and that no one should be
          wearing any club apparel if they plan on drinking alcohol in a public
          environment. Each and every one of you who are official members are
          representatives of the club and by extension, Virginia Tech. Please be
          sure to make wise decisions and always represent the club well as you
          already do!
        </p>
        <h3>Spring Meet Schedule and New Racer Info</h3>
        <p>
          The meet schedules can be found on our competition pages. As you can
          see there are a couple of locations that are tbd. The first is NIRCA
          Nationals — we are still waiting for NIRCA to announce this year’s
          nationals location but as soon as I hear about it I will let you all
          know! Secondly, on April 15th we will be going to a meet, but we are
          still finalizing which meet that will be. We just wanted to give you
          all the date so that you can mark your calendars!
        </p>
        <p>
          Additionally, with a lot of the meets being later in the semester, we
          wanted to offer an additional opportunity for those of you who would
          like to race. On February 11th, the Penn State XCTF Club is hosting an
          indoor meet. **THIS IS AN UNOFFICIAL MEET** That means you are free to
          go and compete as a club athlete (you can wear your uniform), but we
          will not be traveling as a team for this. Therefore{" "}
          <b>ALL travel/lodging accommodations are up to you!</b> However, we
          will cover the entry fee. If you are interested, please fill{" "}
          <a href="https://forms.gle/rPQBMkaV8zZ9swAK7">this form</a> out by
          February 4th.
        </p>
        <b>
          Please make sure you read this whole next section if you have paid
          racing dues and want to go to meets this Spring.
        </b>
        <ol>
          <li>
            <p>
              <b>
                All new members, or anyone else that is new to racing with our
                club
              </b>{" "}
              need to complete{" "}
              <a href="https://forms.gle/r6rbgkNrY5viQWNK8">
                the NIRCA registration survey.
              </a>{" "}
              Once we create your account you will get 2 emails to finish
              setting up your account and complete a waiver. Please do this{" "}
              <b>asap</b> because you cannot race without this, but if you raced
              with us in the Fall you are all set.
            </p>
          </li>
          <li>
            <p>
              <b>All returning members</b> need to log into your NIRCA account{" "}
              <a href="https://clubrunning.org/">here</a> and fill out the
              waiver <b>asap</b> as you also cannot race before this is done. If
              you have done this in the Fall or have raced with us in the Fall
              you do not have to do it again.
            </p>
          </li>
        </ol>
        <p>
          Okay... that's everything (for now). Feel free to reach out if you
          have any questions!
        </p>
      </div>
    ),
  },
  {
    title: "New Year, New Website",
    url: "new-year-new-website",
    year: "2023",
    date: "1 - 17",
    season: "Spring",
    category: "Announcements",
    image: "https://i.imgur.com/u0b2RaB.jpg",
    content: (
      <div className="article-content">
        <p>Happy first day of classes everyone!</p>
        <p>
          It is my great honor to present to you our new club website! Several
          months and 5,427 lines of code later, it is finally here. Making this
          website has been one of the most rewarding experiences of my life and
          I hope you enjoy using it as much as I enjoyed making it!
        </p>
        <p>Anyways, here's some announcements:</p>
        <ul>
          <li>
            First Week of Practice (FWOP) starts on Monday, Jan 23. We meet at
            the Johnson-Miller Track and distance runners will meet at 4:30 PM
            whereas sprints/field events will meet at 5:00 PM.
          </li>
          <li>
            New and returning members, follow the instructions on the{" "}
            <Link to={"/join"}>join</Link> page and make sure that you have
            everything completed by Friday, Jan 27.
          </li>
        </ul>
        <h3>A message from our Race Coordinator:</h3>
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>
              All new members, or anyone else that is new to racing with our
              club
            </span>{" "}
            need to complete the{" "}
            <a
              href="https://forms.gle/r6rbgkNrY5viQWNK8"
              rel="noreferrer"
              target={"_blank"}
            >
              NIRCA registration survey
            </a>{" "}
            Once I create your account you will get 2 emails to finish setting
            up your account and complete a waiver. Please do this{" "}
            <span style={{ fontWeight: "bold" }}>ASAP</span> because you cannot
            race without this, but if you raced with us in the Fall you are all
            set.
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>All returning members</span>{" "}
            need to log into their{" "}
            <a
              href="https://clubrunning.org/"
              rel="noreferrer"
              target={"_blank"}
            >
              NIRCA account
            </a>{" "}
            and fill out the waiver{" "}
            <span style={{ fontWeight: "bold" }}>ASAP</span> as you also cannot
            race before this is done.{" "}
            <span style={{ fontWeight: "bold" }}>
              If you have done this in the Fall or have raced with us in the
              Fall you do not have to do it again.
            </span>
          </li>
          <li>
            If you are planning on racing this semester, we need you to pay your
            racing dues{" "}
            <span style={{ fontWeight: "bold" }}>as soon as possible!</span>
          </li>
        </ul>
        <h3>Indoor Meet Volunteering!</h3>
        <p>
          Virginia Tech Track & Field is hosting their Hokie Invitational{" "}
          <span style={{ fontWeight: "bold" }}>
            January 20-21st (this weekend)
          </span>{" "}
          at the Rector Field House, and they asked for our help in volunteering
          at the meet! This is a big fundraiser for the Spring semester and this
          will help send us to Nationals, so it is really important that we do
          this event. Food will be provided for the volunteers as well.{" "}
        </p>
        <p>
          Please{" "}
          <a
            href="https://www.signupgenius.com/go/8050A4DA9AE28A2FC1-2023"
            rel="noreferrer"
            target={"_blank"}
          >
            sign up
          </a>{" "}
          for whatever you can, there are not many official time slots left, but
          even if they are full you are encouraged to come to the meet and cheer
          on the team or see if anything else is needed! If you have already
          signed up, please double check that the time still works for you.{" "}
        </p>
        <h3>Singlets are in!</h3>
        <p>
          That's right, our singlets are finally in! For everyone who ordered
          singlets in the Fall, we will be handing these out shortly after
          practice starts. Please be on the lookout for updates from Suzie in
          the GroupMe in the upcoming weeks for information about uniform
          distribution! For those who are planning on racing with us in the
          Spring, have no fear, we have already ordered more singlets to avoid
          more waiting issues.
        </p>
      </div>
    ),
  },
  {
    title: "It's Alive!!!",
    url: "its-alive",
    year: "2023",
    date: "1 - 17",
    season: "Spring",
    category: "Webdev Diaries",
    image: "https://i.imgur.com/38928we.jpg",
    content: (
      <div className="article-content">
        <p>Hey, at least I don't have class tomorrow...</p>
        <p>
          Good morning fellow club members and website enjoyers. It is currently
          3:46 AM and I've been staring at this website for the past 14 hours.
          But it's ok, because as I'm writing this, the website is live on the
          proper domain and we are no longer "powered by Weebly!" :D
        </p>
        <p>
          So what's new? Well, everything. Basically, if it was on the old site,
          its here and even better. Want uniform training plans? We got it.
          Maybe you want to see the routes we run on every day? It's here. Maybe
          you wanted the webmaster's thoughts beamed straight to your eyeballs.
          Guess what? You're looking at it.
        </p>
        <p>
          That being said, I'm always open to suggestions so if you don't think
          something working the way it should or you would like to see something
          added to the website, I'm your guy. Just let me know at practice.
        </p>
        <p>
          I'm also assuming my self-appointed position as club reporter. I'll be
          posting articles here about announcements, meets, etc. so make sure to
          check this page on the regular.
        </p>
        <p>
          PS: I know I said everything is here but if you're wondering where the
          records page went, don't worry I'm working on a new system to keep
          track of records. The new records page will be up soon.
        </p>
        <div className="img-container">
          <img
            src="https://i.imgur.com/4UR0vU6.jpg"
            alt="Webmaster Volkan is incredibly happy to see his life's work functioning as intended."
          />
        </div>
      </div>
    ),
  },
  {
    title: "They Said it Couldn't Be Done",
    url: "they-said-it-couldnt-be-done",
    year: "2023",
    date: "1 - 6",
    season: "Spring",
    category: "Webdev Diaries",
    image: "https://i.imgur.com/u5FyQL2.jpg",
    content: (
      <div className="article-content">
        <p>
          Did someone call an exterminator? Cuz I've been squashing bugs like
          its nobody's business (Please ignore the bugs that are still there
          :D). Not only that but if you'd be so kind as to navigate over to our
          &#10024;Brand New&#10024; Training Page, your eyes will thank you for
          showing them the best way to see training plans yet!
        </p>
        <p style={{ fontSize: "0.9rem", paddingTop: "0", paddingBottom: "0" }}>
          I am open to critism of course.
        </p>
        <p>
          There's not much more to it but basically it took a lot of work so you
          better appreciate it. Here's a few links that take you directly there
          because if you're reading this before the site is live, the
          navigation's a bit broken atm. Enjoy!
        </p>
        <ul>
          <li>
            <Link to="/training/mens-distance/400m-800m">
              Men's Distance Winter Plans
            </Link>
          </li>
          <li>
            <Link to="/training/womens-distance/distance">
              Women's Distance Winter Plans
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "I'm Losing My Mind",
    url: "im-losing-my-mind",
    year: "2022",
    date: "12 - 23",
    season: "Spring",
    category: "Webdev Diaries",
    image: "https://i.imgur.com/KZemVBf.jpg",
    content: (
      <div className="article-content">
        <p>
          If someone tries to tell you that the hardest part about making a
          website is the code, they have no idea what they're talking about.
          Pictures are the bane of my existence and if I have to look at another
          .svg file, you might never see me again.
        </p>
        <p>
          Let me walk you through a part of what I've been doing these past two
          days.
        </p>
        <h3>Part 1:</h3>
        <p>
          So as it turns out the web host I'm using for this gives the website
          100GB/month of free bandwith. This includes data for images that have
          to be loaded (at least for the first time) on every single device that
          looks at this magnificient piece of art we like to call the club
          website.
        </p>
        <p>
          You might say "What's the problem, Volkan? That seems plenty," and it
          would be if not for the fact that the photos are BIG. And this is
          after I've made them considerably smaller compared to the gargantuan
          resolutions the camera takes them at. So I decided it's better to nip
          this in the bud while there's only around 20 pictures on the website
          and got to work.
        </p>
        <p>
          Hope you brought some snacks because we're just getting started. I
          wanted to use Imgur to host the images so the web host won't throw a
          fit over sending people some pictures. Of course it can't be as easy
          as "just put the pictures on Imgur." There happens to be a Google
          Photos album I have with around 500 of the best photos I hand-picked
          over the course of the past semester from the semester album and they
          had to all be processed and uploaded to Imgur so I didn't have to go
          through this every time I try to use a photo for the website.
        </p>
        <p>
          Luckily, Photoshop came to the rescue. It has this neat feature where
          you can just run a script to automatically go through a folder, resize
          all images, and spit them out in a different folder. So I ran this for
          about 15 minutes and then uploaded the entire thing to a private Imgur
          album.
        </p>
        <p>
          Finally, I had to go through all of the website files, delete every
          image, and when it inevitably gave an error about not being able to
          find the pictures, I went in and replaced the source with the Imgur
          link. This was much easier than going through the actual code and
          trying to figure out where every single reference to an image is. Now
          no one (me) has to worry about where the pictures are stored in the
          files and more importantly, bandwith shouldn't be an issue.
        </p>
        <h3>Part 2:</h3>
        <p>
          Never did I think when I made the logo over the summer that it would
          cause me this much frustration half a year down the line. So it all
          started when I was making the footer and I needed icons for the social
          media links. I went on a websitie and found some I liked and set them
          as the backgrounds for the links. Now, I wanted the icons to change
          color when hovered over but as it turns out, this is very hard to do
          when you set an SVG file as the background.
        </p>
        <p>
          *Technical sidenote: Some people a while ago figured out you can save
          simple images like logos as text that contains instructions on how to
          draw it instead of an actual image, this way it can be scaled up or
          down as much as you want and thus, the Scalable Vector Graphic (SVG)
          format was born. The predecessor to this actually dates back to the
          60s and was first used in graphic design. I was forced to read through
          this during my several hour long journey to fix this issue so now you
          know too!
        </p>
        <p>
          Anyways, some genius online made{" "}
          <a
            href="https://codepen.io/sosuke/pen/Pjoqqp"
            target={"_blank"}
            rel="noreferrer"
          >
            a tool
          </a>{" "}
          to generate a filter you can place over your SVG icon that, given the
          icon starts off completely black, will turn it into any other color
          you want. You can check out the link if you want to see how
          complicated a simple color change can be using this method, it's
          really cool stuff.
        </p>
        <p>
          After fixing this I had the bright idea to make the club logo into an
          SVG as well. Now I wouldn't have to use the Imgur link every time I
          wanted to display the logo, but mostly because it seemed like an
          interesting thing to do. Boy, was I wrong. I ended up spending way too
          much time trying to get it to center and size properly in the footer
          since it behaves so much differently to a normal image and I'm just
          not as familiar with it.
        </p>
        <p>
          In the end, I got it to look right by hardcoding the specific heights
          and widths associated with it so that it never looks off. It might not
          be the optimal solution but if it works, it works. So kids, the lesson
          to take away is to stay away from SVGs and you might just stay sane a
          little longer.
        </p>
      </div>
    ),
  },
  {
    title: "Humble Beginnings",
    url: "humble-beginnings",
    year: "2022",
    date: "12 - 20",
    season: "Spring",
    category: "Webdev Diaries",
    image: "https://i.imgur.com/3vF7nT0.jpg",
    content: (
      <div className="article-content">
        <p>
          Welcome y'all to your new favorite corner of the internet, my unhinged
          thoughts during the making of this website, or what I like to call
          'Webdev Diaries.'
        </p>
        <p>
          It's 2:36AM and I've been doing this for about 12 hours now but I
          finally finished the main functionality and most of the polish for the
          page you're on now. Despite how long it took, working on this page
          actually gave me a lot of confidence for how the rest of this process
          will go.
        </p>
        <p>
          Believe it or not, I had originally planned for the site to go live
          around the beginning of the Fall but it kept getting bigger and bigger
          and with school and running on top of it, I had to push it back.
          Hopefully you're as impressed with the final result as I hope to be!
        </p>
        <p>
          Anyways, have you checked out ChatGPT yet? This part of the blog will
          probably be a bit outdated by the time you see this but it's
          incredible what it can do. I'm mostly impressed by how well it can
          write and understand code. I actually asked it for help one of the
          times I was stuck making this page and it showed me how to do exactly
          what I was trying to and even gave examples.
        </p>
        <p>
          I'll leave a link to it{" "}
          <a href="https://chat.openai.com/" target={"_blank"} rel="noreferrer">
            here
          </a>{" "}
          so you can see for yourself and this is also my first time testing
          external links from articles so hopefully that worked.
        </p>
        <p>
          There's a lot of work to do tomorrow so I should probably get some
          sleep so thank you for tuning in to the first ever (weekly?) edition
          of Webdev Diaries by yours truly, Volkan, and if you're reading this
          in the future, which you will be, let me know at practice what you
          think!
        </p>
      </div>
    ),
  },
];
export default articles;
