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
    name: "Joe Gora",
    email: "gora2026@vt.edu",
    image: "https://i.imgur.com/HKUw7Mf.jpeg",
    bio: "Joe “Aura” here — I’m honored to serve as your president this year! For those who don’t know me, I’m a senior studying Food Science and Technology with a focus on food safety education. Outside of running, I’d love to spend more time finding new ways to cook, especially with fermentation. While I’m eager to try every event, I’ve found my calling in the 400m hurdles. I’m so excited for what this year has in store and can’t wait to meet each of you!",
  },
  {
    position: "Vice President",
    name: "Ashley Mortensen",
    email: "ashleymort05@vt.edu",
    image: "https://i.imgur.com/vGVPOue.jpeg",
    bio: "What’s up, divas?!!! I’m Ashley, and I’ll be your club XCTF Vice President this year! A little about me: I’m a junior studying Biological Sciences, and I’m from the sweetest place on earth (Hershey, PA). I’m a cross country girlie at heart, but I also love a good 5k or 3k steeple on the track. AND, club is seriously one of my favorite parts of college, so I’m super excited to be in this position and can’t wait for another amazing year of racing, getting closer with everyone, and running around the hotels at Nats <3",
  },
  {
    position: "Race Coordinator",
    name: "Kevin Kiernan",
    email: "kiernank@vt.edu",
    image: "https://i.imgur.com/ILvI0sI.jpeg",
    bio: "Hello Friends! My name is Kevin and I’m pumped to be your Race Coordinator this year! I’m a senior (somehow) from Bethesda, MD majoring in accounting. I’m really looking forward to being back on the officer board again in a different role this year, and can’t wait to plan the best XC and Track season this club has ever seen! My favorite event is the 1500M, and always love planning a great fun run Friday for everyone! I look forward to seeing you guys in Blacksburg!",
  },
  {
    position: "Treasurer",
    name: "Luke Barlow",
    email: "lukebarlow@vt.edu",
    image: "https://i.imgur.com/M6r9FOZ.jpeg",
    bio: "Hi everyone! My name is Luke, and I am your treasurer for this upcoming school year. I am a sophomore in computer engineering, and I am from Chantilly, Virginia. My favorite track event is the 1500m, but cross country will forever have my heart. I'm excited to get to know everyone and to have an amazing year!",
  },
  {
    position: "Women's Distance Captain",
    name: "Abby Norton",
    email: "nortonaf@vt.edu",
    image: "https://i.imgur.com/HFOGsAX.jpeg",
    bio: "Bello 👋 this is nortonaf (Abby). I am running it back as your women’s distance captain this year 😈. I am a senior, double majoring in Criminology and Psychology, and I'm from Pottstown, PA 👨‍🌾. I LOVE a good grass or dirt road run, so naturally XC races are my favorite, but I enjoy the distance track events too (5k, 3k steeple, 10k). I’m so so excited to meet everyone, please never hesitate to reach out if you're an incoming or returning club member <3",
  },
  {
    position: "Men's Distance Captain",
    name: "Jamie Short",
    email: "jamie04@vt.edu",
    image: "https://i.imgur.com/skG7U2L.jpeg",
    bio: "Hi. I am Jamie. I am the Men’s Distance Captain, and this is my second year in the position. Even though I make the training plans, I believe that my role is to be a resource for you to enjoy the sport of running. Expect to see lots of fun runs, goofy outfits, and silly  conversation topics! My line is almost always open too! Reach out to me through email (jamie04@vt.edu) or group me!",
  },
  {
    position: "Sprints Co-Captain",
    name: "Ryder Gatenby",
    email: "ryderg@vt.edu",
    image: "https://i.imgur.com/9csQFSK.jpeg",
    // image:
    //   "https://i.groupme.com/1041x1347.jpeg.ff72bfea024142f3a9009ac058ebe39b.large", // you can do this??
    bio: "Hi everyone! I’m Ryder and I’m excited to be the sprints co-captain this year. I’m from Fairfield, Connecticut and I’m a junior in Materials Science and Engineering. I do jumps in addition to sprints and my favorite events are the 200m and long jump. I love movies and cliff jumping. I’m so hyped for this year and I’m looking forward to meeting everyone!",
  },
  {
    position: "Sprints Co-Captain",
    name: "Luke Shao",
    email: "shaol@vt.edu",
    image: "https://i.imgur.com/pKLHe8z.jpeg",
    bio: "Howdy Hi, My name is Luke and I'll be your (hopefully uninjured) sprint co-CPT. I am a newly switched exercise science major (bye bye engineering) and in my 3rd year at VT. I am from Dallas, TX and mainly run the 100 and 200m. When I am not at the track; I am a video gaming, snowboarding, hike-enjoying D1 yapper. Fun fact about me- I've been to 25 countries in my life so far! Looking forward to meeting and to getting to know everyone! :D.",
  },
  {
    position: "Throws Captain",
    name: "Nyle Sheriff",
    email: "nylesheriff@vt.edu",
    image: "https://i.imgur.com/vTg3Pa7l.jpg",
    bio: "Hey everyone, my name is Nyle and I'm a 5th year architecture student. I'm super excited to run it back as your throws captain for the 4rd year in a row! Our thrower family is definitely one of the best parts about our club and we're always looking for new people to come try out our events. If have any questions about throwing please don't hesitate to reach out, and I look forward to seeing you at practice!",
  },
  {
    position: "Jumps Captain",
    name: "Adam Mariani",
    email: "amariani@vt.edu",
    image: "https://i.imgur.com/oOBYswjl.jpg",
    bio: "Hi everyone! My name is Adam and I also didn't send Maddie a bio yet!!! Here's a picture of the previous jumps captain instead.",
  },
  {
    position: "Webmaster",
    name: "Madeline McKinley",
    email: "madelinemckinley@vt.edu",
    image: "https://i.imgur.com/4r30Zce.jpeg",
    bio: "Hi guys! My name is Madeline and I'm super excited to be your webmaster this year! I am a junior majoring in graphic design and minoring in visual arts and society. I am a high jumper and occasional triple jumper :D Outside of club and school I am a huge ice hockey fan (lets go rangers) and a big vinyl collector! I am looking forward to meeting new members and making more memories this year!",
  },
  {
    position: "Apparel Officer",
    name: "Tara Blue",
    email: "tarablue@vt.edu",
    image: "https://i.imgur.com/PNN6TPo.jpeg",
    bio: "Good morning 🌞 I have been waiting my entire life to become the VT Club XCTF Apparel officer! I am a senior majoring in Ecological Restoration. My favorite distance is the half marathon because I am scared to do a full marathon. I am so hyped to create your semester shirts, and even more hyped to hang out with you all!",
  },
  {
    position: "Social Coordinator",
    name: "Mia Williams",
    email: "mwil4542@vt.edu",
    image: "https://i.imgur.com/4SdSqhE.jpeg",
    bio: "Hiya!! My name is Mia, and I am super excited to be the club’s social coordinator this year. I’m a junior majoring in architecture with a minor in landscape architecture. I do sprints and jumps, but my favorite part of practice is chitchatting (don’t tell the captains). I was born in Virginia Beach, Virginia, but lived there for less than a year. I’ve lived in Germany for most of my life and that’s where my family still is. I can’t wait to get to know y’all!!",
  },
];
export default Officers;
