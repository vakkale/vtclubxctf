/* Something something, the who asked of articles */

const fillerhtml =
    <div className="article-content">
        <p>This is random text.</p>
        <p>While filling big shoes left by former Alberta Golden Bears coach Terry Danyluk, Brock Davidiuk has also brought a wealth of volleyball knowledge to the university’s sideline.</p>
        <p>Davidiuk took over the head coaching reins of his former team in 2019, 13 years after graduating from the school. As a player with the Bears, he was named Championship MVP as he helped lead the team to a 2005 CIS National Championship title– a milestone he’ll be looking to re-create now that he’s behind the bench.</p>
        <p>After his time with the university, Davidiuk went to have an impressive playing career professionally overseas, and a international career with the Canadian National Team, eventually serving as the team’s captain. He helped lead the squad to a berth at the 2010 FIVB World Championship.</p>
        <p>He re-joined the Bears in 2012 as a part-time volunteer, working his way up to assistant coach, then associate coach, and now serves as the head coach. In 2016, he completed his Masters of Coaching degree.</p>
        <p>Volleyball Canada recently had a chance to talk with Davidiuk about his coaching career and some thoughts on coaching in the sport.</p>
        <p>After his time with the university, Davidiuk went to have an impressive playing career professionally overseas, and a international career with the Canadian National Team, eventually serving as the team’s captain. He helped lead the squad to a berth at the 2010 FIVB World Championship.</p>
        <p>He re-joined the Bears in 2012 as a part-time volunteer, working his way up to assistant coach, then associate coach, and now serves as the head coach. In 2016, he completed his Masters of Coaching degree.</p>
        <p>Volleyball Canada recently had a chance to talk with Davidiuk about his coaching career and some thoughts on coaching in the sport.</p>
        <p>After his time with the university, Davidiuk went to have an impressive playing career professionally overseas, and a international career with the Canadian National Team, eventually serving as the team’s captain. He helped lead the squad to a berth at the 2010 FIVB World Championship.</p>
        <p>He re-joined the Bears in 2012 as a part-time volunteer, working his way up to assistant coach, then associate coach, and now serves as the head coach. In 2016, he completed his Masters of Coaching degree.</p>
        <p>Volleyball Canada recently had a chance to talk with Davidiuk about his coaching career and some thoughts on coaching in the sport.</p>
        <p>After his time with the university, Davidiuk went to have an impressive playing career professionally overseas, and a international career with the Canadian National Team, eventually serving as the team’s captain. He helped lead the squad to a berth at the 2010 FIVB World Championship.</p>
        <p>He re-joined the Bears in 2012 as a part-time volunteer, working his way up to assistant coach, then associate coach, and now serves as the head coach. In 2016, he completed his Masters of Coaching degree.</p>
        <p>Volleyball Canada recently had a chance to talk with Davidiuk about his coaching career and some thoughts on coaching in the sport.</p>
    </div >

const articles = [
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
    },
    {
        title: "They call me Mr. Examiner the way I keep on testing",
        url: "they-call-me-mr-examiner-the-way-i-keep-on-testing",
        year: "2022",
        date: "9 - 32",
        season: "Summer",
        category: "test",
        image: 'https://i.imgur.com/qczrzqz.jpg',
        content: fillerhtml
    },
    {
        title: "Enought Tests Yet? Probably Not.",
        url: "enough-tests-yet-probably-not",
        year: "2022",
        date: "1 - 15",
        season: "Winter",
        category: "test",
        image: 'https://i.imgur.com/vAPljlf.jpg',
        content: fillerhtml
    },
    {
        title: "Yet Another Filler Post",
        url: "yet-another-filler-post",
        year: "2022",
        date: "12 - 21",
        season: "Fall",
        category: "test",
        image: 'https://i.imgur.com/UtEwbtG.jpg',
        content: fillerhtml
    },
    {
        title: "What Are We Doing Here? Does this Work?",
        url: "what-are-we-doing-here-does-this-work",
        year: "2022",
        date: "12 - 20",
        season: "Fall",
        category: "test",
        image: 'https://i.imgur.com/PYlzbrh.jpg',
        content: fillerhtml
    }
]
export default articles;