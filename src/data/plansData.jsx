const fall25sheets = [
  {
    title: "May",
    url: "may",
    range: "B2:H22",
  },
  {
    title: "June",
    url: "june",
    range: "B2:H26",
  },
  {
    title: "July",
    url: "july",
    range: "B2:H22",
  },
  {
    title: "August",
    url: "august",
    range: "B2:H22",
  }
]

const plansData = [
  {
    team: "Men's Distance",
    url: "mens-distance",
    image: "https://i.imgur.com/PSgzqgt.jpg",
    yPos: "30%",
    plans: [
      {
        calendar: true,
        title: "Lower Volume Plan",
        url: "low",
        year: "2026",
        season: "Summer",
        sheetID: "1d8Ez3_qSauB1lM011LnUrzXCVx74KOQaawDOZMWjxc0",
        sheets: fall25sheets,
      },
      {
        calendar: true,
        title: "Higher Volume Plan",
        url: "high",
        year: "2026",
        season: "Summer",
        sheetID: "1sQh9h3o1FGKboNtwWJDN-QEzXm3VZaZU_b-0ij5rxZ0",
        sheets: fall25sheets,
      },
      {
        calendar: false,
        title: "Drills",
        url: "drills",
        season: "Extras",
        content: (
          <div className="article-content">
            <div className="tables">
              <table className="distance-table">
                <tr>
                  <th colspan="2">Core Circuit</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Reps</th>
                </tr>
                <tr>
                  <td>Deadbugs</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Bicycles</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Russian Twists</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Situps</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Reverse Crunches</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Straight Leg Lifts</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Scissor Kicks</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>V-Ups</td>
                  <td>10</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Hip Drills</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <td>Steamboats</td>
                  <td>2x10e</td>
                </tr>
                <tr>
                  <td>Pistol Squats</td>
                  <td>3x5</td>
                </tr>
                <tr>
                  <td>Clamshells</td>
                  <td>3x15e</td>
                </tr>
                <tr>
                  <td>Straight Leg Hip Flexor Raises</td>
                  <td>3x10</td>
                </tr>
                <tr>
                  <td>Monster Walks</td>
                  <td>3x20 steps</td>
                </tr>
                <tr>
                  <td>Sidesteps</td>
                  <td>3x10e</td>
                </tr>
                <tr>
                  <td>Single-leg Glute Bridges</td>
                  <td>3x15s</td>
                </tr>
                <tr>
                  <td>Reverse clamshells</td>
                  <td>3x10</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Walking Drills</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <td>Toe Walks</td>
                  <td>15s</td>
                </tr>
                <tr>
                  <td>Inner Pointing Toe Walks</td>
                  <td>15s</td>
                </tr>
                <tr>
                  <td>Outer Pointing Toe Walks</td>
                  <td>15s</td>
                </tr>
                <tr>
                  <td>Heel Walks</td>
                  <td>3x15s</td>
                </tr>
                <tr>
                  <td>Side Foot Walks</td>
                  <td>3x15s</td>
                </tr>
                <tr>
                  <td>Balance in Running Form</td>
                  <td>3x30s</td>
                </tr>
                <tr>
                  <td>Fast Feet</td>
                  <td>3x15s</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Lift 1</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <td>Box Jumps</td>
                  <td>3x5</td>
                </tr>
                <tr>
                  <td>Single-leg Pogos</td>
                  <td>3x20</td>
                </tr>
                <tr>
                  <td>Bulgarian Split Squats</td>
                  <td>3x 6-8</td>
                </tr>
                <tr>
                  <td>Single-leg Calf Raises</td>
                  <td>3x 6-8</td>
                </tr>
                <tr>
                  <td>Single-leg RDL</td>
                  <td>3x 6-8</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Lift 2</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <td>Scissor Jumps (Explosive)</td>
                  <td>3x6</td>
                </tr>
                <tr>
                  <td>Clean</td>
                  <td>3x5</td>
                </tr>
                <tr>
                  <td>Goblet Squats</td>
                  <td>3x 6-8</td>
                </tr>
                <tr>
                  <td>Toe Taps</td>
                  <td>3x60s</td>
                </tr>
                <tr>
                  <td>Single-leg Hip Thrusts</td>
                  <td>3x 6-8</td>
                </tr>
              </table>
            </div>
          </div>      
        ),
      },
      {
        calendar: false,
        title: "Warmup",
        url: "warmup",
        season: "Extras",
        content: (
          <div className="article-content">
            <h3>Dynamic Warmup 1 (Short)</h3>
            <ul>
              <li>High Knees</li>
              <li>Butt Kicks</li>
              <li>A Skips</li>
              <li>B Skips</li>
              <li>Woodsons</li>
              <li>Swan Dives</li>
              <li>Swoops</li>
              <li>Frankensteins</li>
              <li>Cariocas</li>
              <li>2 Strides</li>
            </ul>
            <h3>Dynamic Warmup 2 (Mid)</h3>
            <ul>
              <li>High Knees</li>
              <li>Butt Kicks</li>
              <li>A Skips</li>
              <li>B Skips</li>
              <li>Open the Gate</li>
              <li>Close the Gate</li>
              <li>Front Lunges</li>
              <li>Swoops</li>
              <li>Swan Dives</li>
              <li>Frankensteins</li>
              <li>Knee Pulls</li>
              <li>Quad Pulls</li>
              <li>Heel to Pocket</li>
              <li>2 Strides</li>
            </ul>
            <h3>Dynamic Warmup 3 (Long)</h3>
            <ul>
              <li>Toe Walks</li>
              <li>Heel Walks</li>
              <li>Side Foot Walks</li>
              <li>March with Foot to Ankle</li>
              <li>March with Foot to Knee</li>
              <li>Knee Pulls</li>
              <li>Quad Pulls</li>
              <li>Heel to Pocket</li>
              <li>Front Lunges</li>
              <li>Side Lunges</li>
              <li>Open the Gate</li>
              <li>Close the Gate</li>
              <li>A Skips</li>
              <li>B Skips</li>
              <li>Swoops</li>
              <li>Swan Dives</li>
              <li>Frankensteins</li>
              <li>Woodsons</li>
              <li>2 Strides</li>
            </ul>
            <h3>Static Warmup</h3>
            <ul>
              <li>Ankle Rotations</li>
              <li>Knee Rotations</li>
              <li>Hip Rotations</li>
              <li>Arm Extensions</li>
              <li>Hurdle Trail Leg</li>
              <li>Side Lunges</li>
              <li>45 Degree Side Lunges</li>
              <li>Front Lunges</li>
              <li>Front Lunges w/ Twist</li>
              <li>Run in Place</li>
            </ul>
            <h3>Ebbet Foot Drills</h3>
            <ul>
              <li>Walk on outside of foot</li>
              <li>Walk on inside of foot</li>
              <li>Feet out, heel to big toe walks</li>
              <li>Heel walks</li>
              <li>Backwards calf raise walks</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    team: "Women's Distance",
    url: "womens-distance",
    image: "https://i.imgur.com/6pa8c49.jpg",
    yPos: "top",
    plans: [
      {
        calendar: true,
        title: "Lower Volume Plan",
        url: "low",
        year: "2026",
        season: "Summer",
        sheetID: "1pFxCbOYJgjqXjza7mT-1C9RHg6dNKI8UTTu6bRtX_MA",
        sheets: fall25sheets,
      },
      {
        calendar: true,
        title: "Higher Volume Plan",
        url: "high",
        year: "2026",
        season: "Summer",
        sheetID: "16bmg5ugbAkUEUeoIvj4oVVOBnMSNxrKzg2SDebZj2Ic",
        sheets: fall25sheets,
      },
      {
        calendar: false,
        title: "Warmup",
        url: "warmup",
        season: "Extras",
        content: (
          <div className="article-content">
            <h3>Dynamic Warmup</h3>
            <ul>
              <li>High Knees</li>
              <li>Butt Kicks</li>
              <li>A Skips</li>
              <li>B Skips</li>
              <li>Scoops</li>
              <li>Frankensteins</li>
              <li>Cariocas</li>
              <li>Front Lunges</li>
              <li>Quad Pulls</li>
              <li>Open the Gate</li>
              <li>Close the Gate</li>
              <li>2 Strides</li>
              <li>Toe Walks</li>
              <li>Heel Walks</li>
              <li>Figure 4</li>
            </ul>
          </div>
        ),
      },
      {
        calendar: false,
        title: "Strength",
        url: "strength",
        season: "Extras",
        image: "https://i.imgur.com/lMFZMsa.jpg",
        content: (
          <div className="article-content">
            <h3>Core and Hips</h3>
            <ul>
              <li>20 Deadbugs</li>
              <li>20 Bicycles</li>
              <li>20 Russian Twists</li>
              <li>15-20 pushups</li>
              <li>20 In n Outs</li>
              <li>20 Straight Leg Lifts</li>
              <li>1 min Plank</li>
              <li>Steamboats: 2x10e</li>
              <li>Pistol Squats 3x5</li>
              <li>Clamshells</li>
              <li>Monster walks</li>
              <li>
                <p>Side Leg Raises</p>
                <ul>
                  <li>
                    Foot Neutral, Down, Up
                  </li>
                </ul>
              </li>
              <li>Hip Circles</li>
              <li>Fire Hydrants</li>
              <li>Donkey Kicks</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    team: "Field",
    url: "field",
    image: "https://i.imgur.com/ae9cJEh.jpg",
    yPos: "top",
    plans: [
      {
        calendar: true,
        title: "Jumps",
        url: "jumps",
        year: "2024",
        season: "Fall",
        sheetID: "1hkyicpKSVDiT9BjXqvK8GBObpJ0u6S4OhwJWxdIn2KQ",
        sheets: fall25sheets,
      },
      {
        calendar: false,
        title: "Throws",
        url: "throws",
        year: "2024",
        season: "Fall",
        content: (
          <div class="article-content">
            <h3>
              <span>
                <strong>Shot Put:</strong>
              </span>
            </h3>
            <p>
              Developing Technical understanding should be a priority and then
              once you understand how the changes you make are affecting your
              throws you can translate these improvements into added
              distance.&nbsp;&nbsp;
            </p>
            <ul>
              <li>
                <p>
                  <span>The Stand Throw</span>
                </p>
                <ul>
                  <li>
                    <p>
                      The most basic way to throw the shot put is from the
                      standing throw or ‘power’ position.&nbsp;
                    </p>
                  </li>
                  <li>
                    <p>
                      No matter if you want to rotate, glide, shuffle, or just
                      throw out of power, understanding how to efficiently
                      translate force through your lower body and into the
                      release is essential.
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.youtube.com/watch?v=wM6SAweFLcg&amp;ab_channel=ThrowsUniversity"
                      >
                        https://www.youtube.com/watch?v=wM6SAweFLcg&amp;ab_channel=ThrowsUniversity
                      </a>
                      &nbsp;&nbsp;
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <span>Gliding or Shuffling</span>
                </p>
                <ul>
                  <li>
                    <p>
                      Anyone interested in the glide or shuffle techniques
                      should understand how to transfer force linearly as
                      opposed to radially.&nbsp;&nbsp;
                    </p>
                  </li>
                  <li>
                    <p>
                      The most important part of these techniques is to get out
                      of the back of the circle explosively. Going from a static
                      start to full speed is difficult given the size of the
                      circle. Working on explosivity will help greatly. One way
                      to do this in the circle is by doing the A Drill&nbsp;
                    </p>
                    <ul>
                      <li>
                        <p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="https://www.youtube.com/watch?v=BGgwlLoiJKY&amp;ab_channel=ThrowsUniversity"
                          >
                            https://www.youtube.com/watch?v=BGgwlLoiJKY&amp;ab_channel=ThrowsUniversity
                          </a>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href="https://www.youtube.com/watch?v=mFltJ9ckiiQ&amp;ab_channel=ThrowsUniversity"
                          >
                            https://www.youtube.com/watch?v=mFltJ9ckiiQ&amp;ab_channel=ThrowsUniversity
                          </a>
                          &nbsp;&nbsp;
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <span>Spinning&nbsp;</span>
                </p>
                <ul>
                  <li>
                    <p>
                      Rotational throwers need to have a good sense of
                      coordination as they take on the most technically
                      complicated way to throw the shot put. Bio-mechanically
                      speaking, the most efficient way to transfer force from
                      the key throwing muscle groups into the shot put given the
                      size of the throwing circle is to spin.&nbsp;&nbsp;
                    </p>
                  </li>
                  <li>
                    <p>
                      Spin progression series are often more complex, but each
                      step is key to a full throw.&nbsp;&nbsp;
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.youtube.com/watch?v=7P3r4EK7tn0&amp;ab_channel=JohnBowman"
                      >
                        https://www.youtube.com/watch?v=7P3r4EK7tn0&amp;ab_channel=JohnBowman
                      </a>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <p></p>
            <h3>
              <span>
                <strong>Discus:</strong>&nbsp;
              </span>
            </h3>
            <p>
              <span>
                Unlike with shot put, there is really only one technique which
                is considered mainstream for the discus: spinning. However, it
                is possible to throw out of a stand or power position
                too.&nbsp;&nbsp;
              </span>
            </p>
            <ul>
              <li>
                <p>
                  <span>Tutorials&nbsp;</span>
                </p>
                <ul>
                  <li>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.youtube.com/watch?v=_MEPoC0qq7U&amp;t=415s&amp;ab_channel=JohnBowman"
                      >
                        https://www.youtube.com/watch?v=_MEPoC0qq7U&amp;t=415s&amp;ab_channel=JohnBowman
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.youtube.com/watch?v=5atxdHaE-T8&amp;ab_channel=JohnBowman"
                      >
                        https://www.youtube.com/watch?v=5atxdHaE-T8&amp;ab_channel=JohnBowman
                      </a>
                      &nbsp;&nbsp;
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              <span>
                As you get more comfortable with the base positions, you should
                begin filming your throws and comparing them side by side with
                some of the world’s best. My personal favorite technical model
                to follow is Valarie Allman, with Gerd Kanter being a close
                second.
              </span>
            </p>
            <p></p>
            <h3>
              <span>
                <strong>BE AN ATHLETE:</strong>
              </span>
            </h3>
            <p>
              <span>
                If you want to get better at throwing you also have to become a
                better athlete. Make sure to include a dynamic warm up before
                each training session, work on plyometrics, and balance to
                ensure that the technical changes can be applied. As an athlete
                you are only as strong as your weakest link, for most throwers
                that is their endurance capacity or their core strength. Train
                your core, and make sure you do some Zone 2 Cardio throughout
                the season so that we can start sending the implements
                far.&nbsp;&nbsp;
              </span>
            </p>
            <p></p>
            <h3>
              <span>
                <strong>Getting Help</strong>:
              </span>
            </h3>
            <p>
              <span>
                When it comes to all aspects of throwing, the number one way to
                make improvements is to ask questions. If you have any questions
                about some of the terms/exercises in the videos linked above
                please reach out to me. Or if you want me to help break down a
                video of yourself or someone else, I’d be more than happy to
                point out ways that you can make improvements that are more
                specific to your style.
              </span>
            </p>
          </div>
        ),
      },
      {
        /* {
        calendar: true,
        title: "Throws",
        url: "throws",
        year: "2023",
        season: "Winter",
        sheetID: "1NqhMyFHn-Pi96LVSg_HeOQpGTfiZ9EPbfQDHazZZdDk",
        sheets: winter23sheets,
      }, */
      },
    ],
  },
  {
    team: "Sprint",
    url: "sprint",
    image: "https://i.imgur.com/WbyiBeI.jpg",
    yPos: "top",
    plans: [
      {
        calendar: true,
        title: "Fall Plan",
        url: "fall",
        year: "2025",
        season: "Fall",
        sheetID: "1Kj9BiprDtAzGIcaE0XY-kQhE0kLA0pW6oBQFysUsBZA",
        sheets: fall25sheets,
      },
      {
        calendar: false,
        title: "Warmups",
        url: "warmups",
        season: "Extras",
        content: (
          <div className="article-content"><h3><span><strong>Base everyday warmup:</strong></span></h3><ul><li><p>Jog a lap</p></li><li><p>20 squats</p></li><li><p>20 lunges</p></li><li><p>10 cycles of hip rotations</p></li><li><p>10 Iron Cross</p></li><li><p>10 scorpion</p></li><li><p>10 leg swings front-back + side to side</p></li></ul><p></p><h3><span><strong>Additions:</strong></span></h3><p><span><strong>Speed:</strong></span></p><ul><li><p><span>Lunge holds</span></p></li></ul><ul><li><p><span>Buildups with spikes</span></p></li></ul><ul><li><p><span>Lunge switch jumps</span></p></li></ul><ul><li><p><span>Hip openers</span></p></li></ul><p><span><strong>Endurance work:</strong></span></p><ul><li><p><span>Just base warmup</span></p></li></ul><p></p><h3><span><strong>Drills (every day):</strong></span></h3><ul><li><p><span>Knee pulls</span></p></li></ul><ul><li><p><span>Heel walk</span></p></li></ul><ul><li><p><span>Toe walk</span></p></li></ul><ul><li><p><span>Dives</span></p></li></ul><ul><li><p><span>Side lunges</span></p></li></ul><ul><li><p><span>Frankenstein</span></p></li></ul><ul><li><p><span>Butt kicks</span></p></li></ul><ul><li><p><span>High knees</span></p></li></ul><ul><li><p><span>A-skip</span></p></li></ul><ul><li><p><span>B-skip</span></p></li></ul><ul><li><p><span>Straight leg</span></p></li></ul><ul><li><p><span>Backwards run</span></p></li></ul><ul><li><p><span>Carioca</span></p></li></ul><ul><li><p><span>Side shuffle</span></p></li></ul><ul><li><p><span>Accelerations</span></p></li></ul><ul><li><p><span>Hurtle mobility?</span></p></li></ul><p></p><p><span><strong>Optional drills (more complex to do correctly, might not be worth the effort):&nbsp;</strong></span></p><ul><li><p><span>Ankle/shin/knee dribble</span></p></li></ul><p></p>
          </div>
        ),
      },
      {
        calendar: false,
        title: "Weights",
        url: "weights",
        season: "Extras",
        content: (
          <div className="article-content">
            <blockquote><p><span><em>Perfectly ok to just do the Thursday team lift, other days are a plan if you want more.</em></span><em>&nbsp;</em></p></blockquote><h3><span><strong>Monday:&nbsp;</strong></span></h3><ul><li><p><span>Barbell Squats 3x10 (progressive overload)&nbsp;</span></p></li><li><p><span>RDL 3x10&nbsp;</span></p></li><li><p><span>Hip thrusts 3x5&nbsp;</span></p></li></ul><h3><span><strong>Tuesday:&nbsp;</strong></span></h3><ul><li><p><span>Bench 3x10 (progressive overload)&nbsp;</span></p></li></ul><ul><li><p><span>BOR 3x10&nbsp;</span></p></li></ul><ul><li><p><span>Military Press 5x5&nbsp;</span></p></li></ul><h3><span>Wednesday:</span></h3><ul><li><p><span>Lat raises 3x12&nbsp;</span></p></li></ul><ul><li><p><span>Running arms 3x30sec&nbsp;</span></p></li></ul><ul><li><p><span>Pull-ups 3x3 (or however many you can do. If you can’t do a pullup, jump up and lower yourself as slowly as possible)&nbsp;</span></p></li></ul><ul><li><p><span>Push-ups 3x10 (or however many you can do)&nbsp;</span></p></li></ul><h3><span>Thursday (Team):&nbsp;</span></h3><ul><li><p><span>Hang power cleans 5x2&nbsp;</span></p></li></ul><ul><li><p><span>Half Squat 5x2&nbsp;</span></p></li></ul><ul><li><p><span>TB deadlift 5x5&nbsp;</span></p></li></ul><h3><span>Friday:</span></h3><ul><li><p><span>Rest or upper body work <strong>(do not go overboard, ask Will or Chatham if you have questions)</strong>&nbsp;</span></p></li></ul>
          </div>
        ),
      },
    ],
  },
];
export default plansData;
