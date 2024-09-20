const Officers = [
  /* {
        RIP Phil
        position: "President",
        name: "Phil Lopez",
        email: "lphilip01@vt.edu",
        image: "https://i.imgur.com/v2hYek9.jpg",
        bio: "Salutations friends. My name is Phil and I am a current Junior studying Aerospace Engineering here. I was born in North Carolina and have since lived in 5 different states all across the US. One of my biggest hobbies (other than running) is origami! I can make almost anything out of paper and it’s a ton of fun. My favorite part of the club is the close knit community that we build and seeing all the friendships that are made here. We have a ton of fun together and we definitely take the phrase “work hard, play hard” seriously. I can’t wait to meet all of you, and if you ever have any questions about anything please don’t hesitate to reach out!"
    }, */ /* 
    {
        RIP WYATT
        position: "President",
        name: "Wyatt Thomas",
        email: "wyatt@vt.edu",
        image: "https://i.imgur.com/chY7M8B.jpg",
        bio: "Hey there! My name is Wyatt and I am honored to be the President of the Club XCTF team this year! A little bit about myself is that I’m a junior double majoring in physics and math, and I’m a long distance runner. I race the 5k, 1500, and 8k, and I’ve got all the quirks that distance runners have. I’m also a big fan of bad jokes. I love this club so much and I’ve met so many great people here that have become lifelong friends. I can’t wait until club starts again so I can see my friends and meet new people. I’m really excited for this upcoming year and we have a lot of fun things planned. If you have any questions, please feel free to reach out! I will happily answer any and all. I’m looking forward to meeting and training with all of you!"
    }, */
  {
    position: "President",
    name: "Volkan Akkale",
    email: "volkanakkale@vt.edu",
    image: "https://i.imgur.com/LRQGJA6.jpg",
    bio: "Hi y'all, my name is Volkan and I’m honored to be your President this year. I'm a computer engineering major in my final year here at Tech and I'm a mid distance runner. I run the 800m usually but I've also recently joined the hurdlers and you might even see me throwing shot put in the Spring home meet. I was webmaster two years ago and I made this website so I hope you enjoy. If you have any questions feel free to email me. Can't wait to meet you all!",
  },
  {
    position: "Vice President",
    name: "Joe Gora",
    email: "gora2026@vt.edu",
    image: "https://i.imgur.com/HKUw7Mf.jpeg",
    bio: "Hey y'all. Joe here. I am your club XCTF vice president. For those that are new, I am a junior studying food science and technology focusing on food safety education. Outside of running, I love cooking new recipes and hiking Blacksburg's many trails. Favorite movie is any movie that includes the minions. Although I want to try out every event, my main is the 400m. Yes, I know I am a mad man. Can’t wait to meet you all!"
  },
  {
    position: "Race Coordinator",
    name: "Ellie Lo",
    email: "elizabethlo@vt.edu",
    image: "https://i.imgur.com/9Fd5CUA.jpeg",
    bio: "Hihihihi!!! My name is Ellie Lo, and I’m super excited to be your race coordinator this year. I’m a junior majoring in ecological restoration with minors in horticulture, wetland science, and jazz studies. I’m a mid distance runner in love with the 800 and 1500 - but my favorite part of the club is the people. I love all of you guys and I’m so pumped for this year <3",
  },
  {
    position: "Treasurer",
    name: "Evelyn Tipper",
    email: "etipper@vt.edu",
    image: "https://i.imgur.com/EDwsAFJl.jpg",
    bio: "Hi everyone! My name is Evelyn and I’m excited to be the club treasurer this upcoming school year. I’m from Pittsburgh, PA and run distance with my favorite events being the 1500m and steeplechase. I’m a senior majoring in Biological Systems Engineering with a focus on Ecological Engineering. A fun fact about me is that I’m super passionate about watersheds and all things water; I will tell you if we enter a new watershed while driving to meets. Looking forward to an awesome year of taking easy runs easy, competing, and spending time with the team!",
  },
  {
    position: "Women's Distance Captain",
    name: "Abby Norton",
    email: "nortonaf@vt.edu",
    image: "https://i.imgur.com/NTyEcWh.jpeg",
    bio: "Yo this is nortonaf (abby), your women’s distance captain this year 😸. I am a junior, double majoring in Criminology and Psychology. I’m from Pottstown, PA, and I loveee a good grass hill. XC is definitely my favorite race, but I enjoy the distance track events too (5k, 3k steeple, 10k). I’m so excited to meet everyone, please never hesitate to reach out <3",
  },
  {
    position: "Men's Distance Captain",
    name: "Jamie Short",
    email: "jamie04@vt.edu",
    image: "https://i.imgur.com/udNhM1z.jpeg",
    bio: "Hello. I am Jamie. I am the Men’s distance captain. I am a junior in Industrial and Systems engineering. I love club. If you ever have any questions about training, lifting, recovering, or club in general, reach out to me!",
  },
  {
    position: "Sprints Co-Captain",
    name: "Will Harrison",
    email: "willharrison@vt.edu",
    image: "https://i.groupme.com/1041x1347.jpeg.ff72bfea024142f3a9009ac058ebe39b.large",   // you can do this??
    bio: "HHello! My name is Will, I am a sophomore studying Cybersecurity with a minor in Integrated Security. I will be one of your sprint co-captains this year. My main events are the 110h and the 200m (once in a while I’ll run the 400h). I have loved being a part of the sprint squad for the past year and cannot wait to make friends with as many people as possible and take home that #1 at nattys! Please feel free to reach out with any questions! I am so excited to meet you all!",
  },
  {
    position: "Sprints Co-Captain",
    name: "Chatham Campbell",
    email: "chathamcampbell@vt.edu",
    image: "https://i.imgur.com/en2Zn8e.jpeg",
    bio: "Hello, my name is Chatham Campbell I am one of the two sprint captains. I’m a senior majoring in Aerospace Engineering. I’ve been part of the club since fall 2020. Outside of club and school, I enjoy hiking and photography I also frequently bring a camera to meets. I’m looking forward to an exciting year and hope the team can win another national championship.",
  },
  {
    position: "Throws Captain",
    name: "Nyle Sheriff",
    email: "nylesheriff@vt.edu",
    image: "https://i.imgur.com/vTg3Pa7l.jpg",
    bio: "Hey everyone, my name is Nyle and I'm a 4th year architecture student. I'm super excited to run it back as your throws captain for the 3rd year in a row! Our thrower family is definitely one of the best parts about our club and we're always looking for new people to come try out our events. If have any questions about throwing please don't hesitate to reach out, and I look forward to seeing you at practice!",
  },
  {
    position: "Jumps Captain",
    name: "Aidan McCrory",
    email: "amccrory@vt.edu",
    image: "https://i.imgur.com/oOBYswjl.jpg",
    bio: "Hi everyone! My name is Aidan, and I’ll be the jumps captain this year. I am a senior majoring in chemical engineering. This is will my third year being in this position and I’m very excited to say that. I compete in the long and triple jump as well as the sprint events. Looking forward to meeting everyone and having a successful year!",
  },
  {
    position: "Webmaster",
    name: "Tara Blue",
    email: "tarablue@vt.edu",
    image: "https://i.imgur.com/McJbi7O.jpeg",
    bio: "GOOD MORNING! My name is Tara Blue and I am thrilled to be your webmaster/Instagram overlord this year. I love racing distance (half marathon 🫵🥰) and I am currently training for a 50k on the trail. My favorite part about Club XCTF are the van playlists that we create for our road trips!",
  },
  {
    position: "Apparel Officer",
    name: "Molly Donaldson",
    email: "mollyd@vt.edu",
    image: "https://i.imgur.com/xHNnEvz.jpeg",
    bio: "Hi squad !! I’m Molly your apparel officer again !! I’m a senior (don’t remind me) and I major in advertising and minor in art. I’m super excited for this year just don’t tell me it ends for me soon ;(( I am distance girly but I love to run around to every event and learn them. LETS GOOOO VTCXCTF I LOVE YALL!!! <3",
  },
  {
    position: "Social Coordinator",
    name: "Kevin Kiernan",
    email: "kiernank@vt.edu",
    image: "https://i.imgur.com/lCnzc4u.jpeg",
    bio: "Hello Friends! My name is Kevin and I’m pumped to be your social coordinator this year! I’m a junior from Bethesda, MD majoring in accounting. I’m really looking forward to putting on some great socials and getting to know you guys this year! My favorite events to race are the 800 and 1500, but am slowly learning to like XC. I look forward to seeing you guys in Blacksburg!",
  },
];
export default Officers;
