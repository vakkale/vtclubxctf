const Officers = [
    {
        position: "President",
        name: "Phil Lopez",
        email: "lphilip01@vt.edu",
        image: "https://i.imgur.com/v2hYek9.jpg",
        bio: "Salutations friends. My name is Phil and I am a current Junior studying Aerospace Engineering here. I was born in North Carolina and have since lived in 5 different states all across the US. One of my biggest hobbies (other than running) is origami! I can make almost anything out of paper and it’s a ton of fun. My favorite part of the club is the close knit community that we build and seeing all the friendships that are made here. We have a ton of fun together and we definitely take the phrase “work hard, play hard” seriously. I can’t wait to meet all of you, and if you ever have any questions about anything please don’t hesitate to reach out!"
    },
    {
        position: "Vice President",
        name: "Wyatt Thomas",
        email: "wyatt@vt.edu",
        image: "https://i.imgur.com/vxSWd0H.jpg",
        bio: "Hey there! My name is Wyatt and I’m the vice president of the club! A little bit about myself is that I’m a sophomore majoring in both physics and math and I’m a distance runner, so I love a good 5k and I have all the quirks that distance guys have. Being VP is a really fun and rewarding position, and I love getting to know everyone. Our club is such a fun, tight knit community that makes showing up every day with it, from the painful workouts to our bumpin’ socials. Please feel free to email me if you have any questions and I can’t wait to see you out on the track!"
    },
    {
        position: "Race Coordinator",
        name: "Hannah Cannon",
        email: "hcannon@vt.edu",
        image: "https://i.imgur.com/m8dDc1M.jpg",
        bio: "Hi everyone, my name is Hannah and I’m the race coordinator! I have the honor of getting to plan our meet schedule and travel arrangements. I love meets because they are a great way to connect with others on the club while enjoying our sport at any competition level that you’d like! A little about me: I’m a graduating senior with a major in biochemistry and minor in mathematics. I went to high school in Prince William County in Northern Virginia, but moved around my whole life because my dad was in the Air Force. Besides running, I love going to coffee shops, hiking, and spending time with friends/family!"
    },
    {
        position: "Social Coordinator",
        name: "Harris Naseh",
        email: "harrisn24@vt.edu",
        image: "https://i.imgur.com/T6Zkpwx.jpg",
        bio: "Hey, I’m Harris Naseh, your social coordinator. I’m from Charlottesville, VA and majoring in computer science. I race the 1500-8k but I’m gonna do the 800 to beat Justin Moses. I am excited to get racing and do the social events I have planned like our Jumps/Sprints/Field vs Distance soccer game!"
    },
    {
        position: "Women's Distance Captain",
        name: "Alyssa McCaffrey",
        email: "alyssam20@vt.edu",
        image: "https://i.imgur.com/AkcPTEP.jpg",
        bio: "Hi!! I’m Alyssa, the woman’s distance captain this year! I ran XC and track throughout high school and have training experience from great coaches. I typically run the 800m and 1600m but have learned to enjoy racing the 6k this past XC season. I can’t wait to train this spring with you all and help lead our women to a national title! See you all at practice and feel free to reach out to me with any questions!"
    },
    {
        position: "Men's Distance Captain",
        name: "Ben Darden",
        email: "bdarden1205@vt.edu",
        image: "https://i.imgur.com/ocdHbQG.jpg",
        bio: "Hey everyone! I'm Ben and I'm the Men's Distance Captain. I'm a 3rd year senior in Biomedical Engineering from Colorado Springs. My favorite thing about club (other than everything) is the amazing people in the club and the incredible community. Can't wait to establish the club dynasty this semester 😈 PS. If you want good jokes, ask Phil, Wyatt's jokes are terrible"
    },
    {
        position: "Sprints Co-Captain",
        name: "Emmy Donlon",
        email: "emmyd@vt.edu",
        image: "https://i.imgur.com/PLDQ2nf.jpg",
        bio: "Hey y’all, my name is Emmy and I am one of your sprint captains this year!! I am a senior from Purcellville, Va (NoVa) majoring in Civil Engineering with a minor in Green Engineering here at Tech. My favorite event is the 200m, but I also run the 100m, 400m, and all the sprint relays! I’m so excited to train with everyone in Blacksburg this spring (especially to see the gorgeous sunsets during practice time)!! I’m looking forward to having an amazing track szn! Please feel free to reach out to me with questions, comments, or just to say hi!"
    },
    {
        position: "Sprints Co-Captain",
        name: "Adam Defosse",
        email: "apdefosse@vt.edu",
        image: "https://i.imgur.com/XtL3P0D.jpg1",
        bio: "Hey everyone, my name is Adam DeFosse and I’m one of the sprint captains this year. I’m currently a junior majoring in Marketing. Some of my interests include gaming, reading, and spending time with friends. My favorite thing about the club has been all the new people I’ve gotten to meet over the past couple of years, and I look forward to building more friendships during the remainder of my time here at Tech."
    },
    {
        position: "Webmaster",
        name: "Volkan Akkale",
        email: "volkanakkale@vt.edu",
        image: "https://i.imgur.com/LRQGJA6.jpg",
        bio: "Hi y'all, my name is Volkan and I’m your webmaster for the foreseeable future :P. My favorite thing about the club is the extremely welcoming and supportive community that inspired me to spend many sleepless nights building this website from the ground up. I hope you enjoy using it as much as I enjoyed making it! A little about me: I'm a junior from Virginia Beach, VA studying Computer Engineering. In terms of running, I mainly focus on the 800m, but this season I also plan to train for the 400. See you on the track!"
    },
    {
        position: "Throws Captain",
        name: "Nyle Sheriff",
        email: "nylesheriff@vt.edu",
        image: "https://i.imgur.com/9Ggk8k8.jpg",
        bio: "Hey everyone, my name is Nyle and I’m a second year architecture student. I’m the throws captain and I particularly love throwing discus - but compete in shotput and hammer throw too. When I’m not in the studio designing buildings you’ll probably find me at the track spinning in circles or at the gym moving heavy circles. I’m excited for this upcoming spring semester and look forward to seeing how far VT Club XCTF Throws can go!"
    },
    {
        position: "Jumps Captain",
        name: "Aidan McCrory",
        email: "amccrory@vt.edu",
        image: "https://i.imgur.com/050J6au.jpg",
        bio: "Hi, I’m Aidan McCrory and I am the jumps captain for the Spring 2023 season. I am excited to get to know all of you and work to improve your jumping abilities. I am a sophomore in chemical engineering and a member of the Alpha Chi Sigma professional chemistry fraternity as well as the Chem-E-car design team. My favorite events are long and triple jump and my favorite part of this club is how friendly all the members are. Looking forward to meeting you all and winning a second national championship!"
    },
    {
        position: "Apparel Officer",
        name: "Suzie DiLorenzo",
        email: "suzied9@vt.edu",
        image: "https://i.imgur.com/9lX8vUZ.jpg?1",
        bio: "Hi everyone, my name is Suzie and I’m the apparel officer! I design the uniforms and the apparel for the club. My favorite part of club are going to meets because they are a great get to know everyone and racing is always fun! A little about me: I’m a junior majoring in Human, Nutrition, Foods, and Exercise with a concentration in Dietetics, and I’m from Leesburg, VA. Besides running, I love to cook, do puzzles, drink coffee, and go on walks."
    },
    {
        position: "Treasurer",
        name: "Sam Derasse",
        email: "samanthad@vt.edu",
        image: "https://imgur.com/yqv0fdO.jpg",
        bio: "Hello everyone, my name is Sam Derasse and I’m the club treasurer. I’m a senior in aerospace engineering from Long Island but I will be moving to Virginia once I graduate. This season I will be attempting the 3k steeple for the first time. My favorite part of club is being able to cheer on my teammates during all the different events! If you have any questions feel free to ask me."
    }
]
export default Officers;