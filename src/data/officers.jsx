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
    name: "Ashley Mortensen",
    email: "ashleymort05@vt.edu",
    image: "https://i.imgur.com/3XsnbZL.jpeg",
    bio: "What’s up, divas?!! My name is Ashley Mortensen, and I’m so excited to be your VT Club XCTF President this year! I’m a senior from Hershey, PA studying Biological Sciences. My favorite event has recently become the 3k steeple because of the ridiculous pictures you get out of it 🤭 Club has been one of my favorite parts of college, and I can’t wait to support everyone else’s experience while being in this position. <3",
  },
  {
    position: "Vice President",
    name: "Luke Barlow",
    email: "lukebarlow@vt.edu",
    image: "https://i.imgur.com/M6r9FOZ.jpeg",
    bio: "Hi everyone! My name is Luke, and I am your vice president for this upcoming school year. I am a junior in computer engineering, and I am from Chantilly, Virginia. My favorite track event is the 5000m, but cross country will forever have my heart. I'm excited to get to know everyone and to have an amazing year!",  },
  {
    position: "Race Coordinator",
    name: "Maria Reid",
    email: "mariar06@vt.edu",
    image: "https://i.imgur.com/r6Sqlg0.jpeg",
    bio: "OMG hi, guys!! I’m Maria, and I’m your race coordinator! I’m a junior majoring in Philosophy, Politics, and Economics, and I’m from Fairfax, Virginia. My favorite event is the 800, but you could probably catch me in the 100 or the 3K steeplechase. I can’t wait to plan some fun meets for us, and don’t forget to SIGN UP ON TIME. Go Hokies!! 🦃🧡!",
  },
  {
    position: "Treasurer",
    name: "Christopher Helmsen",
    email: "chelmsen@vt.edu",
    image: "https://i.imgur.com/IG6YKEu.jpeg",
    bio: "Hello, my name is Christopher Helmsen and I am the club’s treasurer this year. My events are discus and hammer, so feel free to visit the throws area if you need anything during practice time. Please reach out to me at chelmsen@vt.edu or through GroupMe if you have any questions.",
  },
  {
    position: "Women's Distance Captain",
    name: "Audrey Fitzpatrick",
    email: "acfitzpatrick@vt.edu",
    image: "https://i.imgur.com/aaoscTa.jpeg",
    bio: "Hi guys! My name is Audrey, and I am your women's distance captain! I am from the Boston area, and I'm currently a junior, studying clinical neuroscience and german! My fav event is the 5k, and I'm SOOO excited to run with you all this year! Please never hesitate to reach out with any questions, concerns, fears, hopes, or dreams! 😍",
  },
  {
    position: "Men's Distance Captain",
    name: "Eshaan Thakral",
    email: "ethakral@vt.edu",
    image: "https://i.imgur.com/EIRBQYR.jpeg",
    bio: "Hi everyone! My name is Eshaan Thakral and I'm hyped to be your distance captain this year! I'm a junior in mechanical engineering and I'm from San Mateo, California. My favorite event is the mile, but I'm also a known XC enjoyer. Feel free to hit my line on GroupMe or email. I'm looking forward to meeting you all and eating lots of Chicken Parm!",
  },
  {
    position: "Sprints Co-Captain",
    name: "Ryder Gatenby",
    email: "ryderg@vt.edu",
    image: "https://i.imgur.com/9csQFSK.jpeg",
    // image:
    //   "https://i.groupme.com/1041x1347.jpeg.ff72bfea024142f3a9009ac058ebe39b.large", // you can do this??
    bio: "Hi everyone! I’m Ryder and I’m excited to be the sprints co-captain this year. I’m from Fairfield, Connecticut and I’m a senior in Materials Science and Engineering. I do jumps in addition to sprints and my favorite events are the 200m and long jump. I love movies and cliff jumping. I’m so hyped for this year and I’m looking forward to meeting everyone!",
  },
  {
    position: "Sprints Co-Captain",
    name: "Luke Shao",
    email: "shaol@vt.edu",
    image: "https://i.imgur.com/QD2Co6j.jpeg",
    bio: "Hey everyone! I am running it back as one of your sprint co-cpts this year! I am a senior in HNFE: Exercise Science. I am from Dallas, Texas but also live in Cary, NC. My favorite event to run is the 100m. When I'm not running in a straight line; im snowboarding, video gaming, eating, travelling, or yapping. Feel free to reach out via email, looking forward to seeing everyone :D",
  },
  {
    position: "Throws Captain",
    name: "Shannon Fisher",
    email: "fshannon05@vt.edu",
    image: "https://i.imgur.com/5G5nt87.png",
    bio: "Hi!!! I'm Shannon and I am super excited to be throws captain this year! I am a senior from Manassas VA studying Environmental Resources Management. One of my favorite parts about clubxctf is how close knit and supportive the throws community is. If you have any interest in becoming or thrower or even just trying out one event, please feel free to reach out! -We'd love to have you :)!",
  },
  {
    position: "Jumps Captain",
    name: "Will Jenkins",
    email: "willj25@vt.edu",
    image: "https://i.imgur.com/xlecpkE.jpeg",
    bio: "My name is Will Jenkins and I am the jumps captain for VT XCT&F, I have competed in track in field since 5th grade. I have ran from the half marathon down to the 55, but my specialty is in Jumps. I am studying political science, after which I plan to attend medical school. My other interests include history, painting, and body building.",
  },
  {
    position: "Webmaster",
    name: "Madeline McKinley",
    email: "madelinemckinley@vt.edu",
    image: "https://i.imgur.com/dtjD99j.jpeg",
    bio: "Hi guys! My name is Madeline and I'm super excited to be your webmaster this year! I am a senior majoring in graphic design and minoring in visual arts and society. I am a high jumper and occasional triple jumper :D Outside of club and school I am a huge ice hockey fan (lets go rangers) and a big vinyl collector! I am looking forward to meeting new members and making more memories this year!",
  },
  {
    position: "Apparel Officer",
    name: "Rose Hopwood",
    email: "roseh23@vt.edu",
    image: "https://i.imgur.com/WeymVII.jpeg",
    bio: "Hiiii! My name is Rose Hopwood and I am so excited to be your apparel officer this year. I am a senior studying Fashion Merchandising and Design, and I am from Saint Augustine, Florida. My favorite event is either the 5K or the 10K, because I just love training for the longer distances. Club xctf is where I have met all of my bestest friends and I am so excited to welcome new people into the fam:)",
  },
  {
    position: "Social Coordinator",
    name: "Mia Williams",
    email: "mwil4542@vt.edu",
    image: "https://i.imgur.com/4SdSqhE.jpeg",
    bio: "Hiya!! My name is Mia, and I am super excited to be one of the club’s social coordinators this year. I’m a senior majoring in architecture with a minor in landscape architecture. I do sprints and jumps, but my favorite part of practice is chitchatting (don’t tell the captains). I was born in Virginia Beach, Virginia, but lived there for less than a year. I’ve lived in Germany for most of my life and that’s where my family still is. I can’t wait to get to know y’all!!",
  },
  {
    position: "Social Coordinator",
    name: "Josh Dugan",
    email: "jdugan05@vt.edu",
    image: "https://i.imgur.com/8vX2Fzq.jpeg",
    bio: "Hey everyone! My name is Josh and I’ll be one of your social coordinators this school year. I’m a senior from Fairfax, VA studying electrical engineering. My favorite race by far is the Mile or 1500m, but I love a good 4x400m and can appreciate a nice XC course. Club has been one of my favorite parts of college and I can’t wait to start racing again and meet all of you!",
  },
];
export default Officers;
