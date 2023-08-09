const Officers = [
    /* {
        RIP Phil
        position: "President",
        name: "Phil Lopez",
        email: "lphilip01@vt.edu",
        image: "https://i.imgur.com/v2hYek9.jpg",
        bio: "Salutations friends. My name is Phil and I am a current Junior studying Aerospace Engineering here. I was born in North Carolina and have since lived in 5 different states all across the US. One of my biggest hobbies (other than running) is origami! I can make almost anything out of paper and it’s a ton of fun. My favorite part of the club is the close knit community that we build and seeing all the friendships that are made here. We have a ton of fun together and we definitely take the phrase “work hard, play hard” seriously. I can’t wait to meet all of you, and if you ever have any questions about anything please don’t hesitate to reach out!"
    }, */
    {
        position: "President",
        name: "Wyatt Thomas",
        email: "wyatt@vt.edu",
        image: "https://i.imgur.com/chY7M8B.jpg",
        bio: "Hey there! My name is Wyatt and I am honored to be the President of the Club XCTF team this year! A little bit about myself is that I’m a junior double majoring in physics and math, and I’m a long distance runner. I race the 5k, 1500, and 8k, and I’ve got all the quirks that distance runners have. I’m also a big fan of bad jokes. I love this club so much and I’ve met so many great people here that have become lifelong friends. I can’t wait until club starts again so I can see my friends and meet new people. I’m really excited for this upcoming year and we have a lot of fun things planned. If you have any questions, please feel free to reach out! I will happily answer any and all. I’m looking forward to meeting and training with all of you!"
    },
    {
        position: "Vice President",
        name: "Volkan Akkale",
        email: "volkanakkale@vt.edu",
        image: "https://i.imgur.com/LRQGJA6.jpg",
        bio: "Hi y'all, my name is Volkan and I’m your Vice President this year. I was webmaster last year and I made this website so I hope you enjoy. We're in the middle of a complete rewrite of the website to allow for editing from within the website itself. Exciting times. I run the 800m usually but I've also recently joined the hurdler gang. If you have any questions feel free to email myself or Wyatt. Can't wait to see you all back on the track in August!"
    },
    {
        position: "Race Coordinator",
        name: "Roman Ciulla",
        email: "romanc03@vt.edu",
        image: "https://i.imgur.com/roA0rxCl.jpg",
        bio: "Hello! My name is Roman, your race coordinator for the upcoming cross country and track seasons! My role consists of being in charge of planning our meets and arranging transportation to them. I’m majoring in Civil Engineering with a focus in transportation. Running has been a big part of my life since my sophomore year of high school, through this awesome club I’ve been able to stick with it through college! I can’t wait to see what we all do at our meets this year, but remember, at the end of day it will all be for fun!!"
    },
    {
        position: "Treasurer",
        name: "Evelyn Tipper",
        email: "etipper@vt.edu",
        image: "https://i.imgur.com/EDwsAFJl.jpg",
        bio: "Hi everyone! My name is Evelyn and I’m excited to be the club treasurer this upcoming school year. I’m from Pittsburgh, PA and run distance with my favorite events being the 1500m and steeplechase. I’m a junior majoring in Biological Systems Engineering with a minor in Environmental Science. A fun fact about me is that I’m super passionate about watersheds and all things water; I will tell you if we enter a new watershed while driving to meets. Looking forward to an awesome year of taking easy runs easy, competing, and spending time with the team!"
    },
    {
        position: "Women's Distance Captain",
        name: "Sydney Szabos",
        email: "sydneysz@vt.edu",
        image: "https://i.imgur.com/cl5eMNSl.jpg",
        bio: "WHAT’S UP GUYS, Sydney here, and I’m so excited to be your women’s distance captain for the 2023-24 season! I’m a senior majoring in computer engineering and minoring in computer science and math (but that doesn’t mean I can count my reps, unfortunately). I love a good cross country race, of course, and in track I compete mostly in the 1500 and 5k with an occasional struggle through the 800 or even 4x400. Club is where I’ve made some of my first and best friends and I’m so, so excited for this upcoming year and so honored that I get to serve in this role. I can’t wait to see everyone in the fall!!!"
    },
    {
        position: "Men's Distance Captain",
        name: "Ben Darden",
        email: "bdarden1205@vt.edu",
        image: "https://i.imgur.com/MaDBKMzl.jpg",
        bio: "Hey everyone, Ben here! I'm back for round 2 as the Men's Distance Captain. I'm a first year PhD student in Engineering Mechanics. Club has been such a big part of my life the last several years. It's such a great community of people! Feel free to message me if you have any questions regarding running, club, or just life in general. I'm looking forward to starting another great semester!"
    },
    {
        position: "Sprints Co-Captain",
        name: "Adam Defosse",
        email: "apdefosse@vt.edu",
        image: "https://i.imgur.com/jDOlOagl.jpg",
        bio: "Hello everyone, my name is Adam DeFosse and I’m one of the sprint captains this year. I’m currently a senior majoring in Marketing. Some of my interests include gaming, reading, and spending time with friends. My favorite thing about the club has been all the new people I’ve gotten to meet over the past couple of years, and I look forward to building more friendships during the remainder of my time here at Tech."
    },
    {
        position: "Sprints Co-Captain",
        name: "Riley Ophof",
        email: "oriley@vt.edu",
        image: "https://i.imgur.com/JuSUG5Kl.jpg",
        bio: "Hello everyone, my name is Riley Ophof and I’m one of the sprint captains this year. I’m a rising sophomore majoring in Chemistry. Some of my interests include gaming, crosswords, and spending time with friends. My favorite thing about the club has been all the new people I’ve gotten to meet over the past year, and I look forward to building more friendships during the rest of my time here at Tech."
    },
    {
        position: "Throws Captain",
        name: "Nyle Sheriff",
        email: "nylesheriff@vt.edu",
        image: "https://i.imgur.com/vTg3Pa7l.jpg",
        bio: "Hey everyone, my name is Nyle and I'm about to be a third year architecture student. I'm super excited to be coming back as your throws captain and can't wait to meet everyone in the fall! Our thrower family loves having a great time wherever we may be so come find us and give us a shot - we'd love to have you join us for this upcoming year!"
    },
    {
        position: "Jumps Captain",
        name: "Aidan McCrory",
        email: "amccrory@vt.edu",
        image: "https://i.imgur.com/oOBYswjl.jpg",
        bio: "Hi everyone! My name is Aidan, and I’ll be the jumps captain this year. I am a junior majoring in chemical engineering. This is will my second year being in this position and I’m very excited to say that. I compete in the long and triple jump as well as the sprint events. Looking forward to meeting everyone and having a successful year!"
    },
    {
        position: "Webmaster",
        name: "Charlotte Baxter",
        email: "cbaxter@vt.edu",
        image: "https://i.imgur.com/tNqZEuBl.jpg",
        bio: "Hi everyone! My name is Charlotte and I don't have a bio ready yet 😋."
    },
    {
        position: "Apparel Officer",
        name: "Molly Donaldson",
        email: "mollyd@vt.edu",
        image: "https://i.imgur.com/qgcgIHSl.jpg",
        bio: "Hello my favorite people!! I am Molly your apparel officer! woooo!! I am a rising junior from Delaware. I am sooo excited for this year! LETS GOOOOOOO! I'm a distance girly (6k/5k,1500,800 slay) who isn't the biggest running fan, but I love you all so now I love it tehe. I cannot wait to see you all this year and take home some Ws and epic memories. I also hope to meet some lovely new faces. <3 "
    },
    {
        position: "Social Coordinator",
        name: "Harris Naseh",
        email: "harrisn24@vt.edu",
        image: "https://i.imgur.com/T6Zkpwx.jpg",
        bio: "Hey Everyone! My name is Harris and I'm your Social Coordinator this year. I'm a senior from Charlottesville, VA majoring in Computer Science. This is my second year as Social Coordinator and I look forward to having bigger and better events. I love being involved with the club and getting to know the new faces. I race anything between the 1500 and 10k. I look forward to seeing everyone in Blacksburg! "
    },
]
export default Officers;