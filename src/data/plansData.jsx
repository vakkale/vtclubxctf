const fall24sheets = [
  {
    title: "August",
    url: "august",
    range: "B2:H22",
  },
  {
    title: "September",
    url: "september",
    range: "B2:H22",
  },
  {
    title: "October",
    url: "october",
    range: "B2:H22",
  },
  {
    title: "November",
    url: "november",
    range: "B2:H22",
  },
  {
    title: "December",
    url: "december",
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
        title: "Fall Plan",
        url: "fall",
        year: "2024",
        season: "Fall",
        sheetID: "1mQbbB2b56Toi2eMH16BQM7PtymVwiE__8XXekq5SG5U",
        sheets: fall24sheets,
      },
      {
        calendar: false,
        title: "Strength",
        url: "strength",
        season: "Extras",
        content: (
          <div className="article-content">
            <div className="tables">
              <table className="distance-table">
                <tr>
                  <th colspan="3">Strength 1A</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                  <th>Explanation</th>
                </tr>
                <tr>
                  <th colspan="3">SS1 - Strength</th>
                </tr>
                <tr>
                  <td>Squats</td>
                  <td>3x10</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Alt DB Incline Press</td>
                  <td>3x10e</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tricep Extensions</td>
                  <td>3x10</td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">SS2 - Special Movements</th>
                </tr>
                <tr>
                  <td>Eccentric Calf Raises</td>
                  <td>3x10e</td>
                  <td></td>
                </tr>
                <tr>
                  <td>SL RDLs</td>
                  <td>3x10e</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Deadbug</td>
                  <td>3x10</td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">SS3 - Power/Plyos</th>
                </tr>
                <tr>
                  <td>Pogos</td>
                  <td>1-2x30</td>
                  <td>Keep knees straight, and pogo</td>
                </tr>
                <tr>
                  <td>MB Slam</td>
                  <td>1-2x5</td>
                  <td></td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="3">Strength 1B</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                  <th>Explanation</th>
                </tr>
                <tr>
                  <th colspan="3">SS1 - Strength</th>
                </tr>
                <tr>
                  <td>RDLs</td>
                  <td>3x10e</td>
                  <td></td>
                </tr>
                <tr>
                  <td>DB Curl → Press</td>
                  <td>3x10e</td>
                  <td>Bicep curl into overhead press</td>
                </tr>
                <tr>
                  <td>DB Rows</td>
                  <td>3x10e</td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">SS2 - Special Movements</th>
                </tr>
                <tr>
                  <td>Seated Calf Raises</td>
                  <td>3x10e</td>
                  <td></td>
                </tr>
                <tr>
                  <td>RFE Split Squats</td>
                  <td>3x10e</td>
                  <td>Rear foot elevated on bench/step</td>
                </tr>
                <tr>
                  <td>High Plank Pull Thrus</td>
                  <td>3x20</td>
                  <td>
                    In a high plank, take some weight and drag it under your
                    body. Keeping your hips as flat as possible
                  </td>
                </tr>
                <tr>
                  <th colspan="3">SS3 - Power/Plyos</th>
                </tr>
                <tr>
                  <td>Broad Jumps</td>
                  <td>1-2x5e</td>
                  <td>Off on 1 leg, land on 2</td>
                </tr>
                <tr>
                  <td>SL Lateral Pogos</td>
                  <td>1-2x30</td>
                  <td>Pogo on 1 leg side to side</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="3">Strength 2A</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                  <th>Explanation</th>
                </tr>
                <tr>
                  <th colspan="3">SS1 - Strength</th>
                </tr>
                <tr>
                  <td>Squats</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>6 reps heavy on 2AH days</td>
                </tr>
                <tr>
                  <td>Alt DB Incline Press</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>6 reps heavy on 2AH days</td>
                </tr>
                <tr>
                  <td>Tricep Extensions</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>6 reps heavy on 2AH days</td>
                </tr>
                <tr>
                  <th colspan="3">SS2 - Special Movements</th>
                </tr>
                <tr>
                  <td>Eccentric Calf Raises</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>6 reps heavy on 2AH days</td>
                </tr>
                <tr>
                  <td>SL RDLs</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>6 reps heavy on 2AH days</td>
                </tr>
                <tr>
                  <td>Deadbug</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>6 reps heavy on 2AH days</td>
                </tr>
                <tr>
                  <th colspan="3">SS3 - Power/Plyos</th>
                </tr>
                <tr>
                  <td>Pogos</td>
                  <td>2-3x30</td>
                  <td></td>
                </tr>
                <tr>
                  <td>MB Slam</td>
                  <td>2-3x5</td>
                  <td></td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="3">Strength 2B</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                  <th>Explanation</th>
                </tr>
                <tr>
                  <th colspan="3">SS1 - Strength</th>
                </tr>
                <tr>
                  <td>RDLs</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>Heavy on 2BH days</td>
                </tr>
                <tr>
                  <td>DB Curl → Press</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>Heavy on 2BH days</td>
                </tr>
                <tr>
                  <td>DB Rows</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>Heavy on 2BH days</td>
                </tr>
                <tr>
                  <th colspan="3">SS2 - Special Movements</th>
                </tr>
                <tr>
                  <td>Seated Calf Raises</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>Heavy on 2BH days</td>
                </tr>
                <tr>
                  <td>RFE Split Squats</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>Heavy on 2BH days</td>
                </tr>
                <tr>
                  <td>High Plank Pull Thrus</td>
                  <td>3x10e, 3x6e (heavy)</td>
                  <td>Heavy on 2BH days</td>
                </tr>
                <tr>
                  <th colspan="3">SS3 - Power/Plyos</th>
                </tr>
                <tr>
                  <td>Broad Jumps</td>
                  <td>2-3x5e</td>
                  <td></td>
                </tr>
                <tr>
                  <td>SL Lateral Pogos</td>
                  <td>2-3x30</td>
                  <td></td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Strength 3A</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <th colspan="2">SS1 - Strength</th>
                </tr>
                <tr>
                  <td>Weighted Squat Jumps</td>
                  <td>2x8</td>
                </tr>
                <tr>
                  <td>DB Rows</td>
                  <td>2x8e</td>
                </tr>
                <tr>
                  <th colspan="2">SS2 - Special Movements</th>
                </tr>
                <tr>
                  <td>Calf Pulses</td>
                  <td>2x20</td>
                </tr>
                <tr>
                  <td>Hip Thrust</td>
                  <td>2x6</td>
                </tr>
                <tr>
                  <th colspan="2">SS3 - Power/Plyos</th>
                </tr>
                <tr>
                  <td>Weighted Step Ups</td>
                  <td>2-3x5e</td>
                </tr>
                <tr>
                  <td>Box Jumps</td>
                  <td>2-3x5</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Strength 3B</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <th colspan="2">SS1 - Strength</th>
                </tr>
                <tr>
                  <td>RDL</td>
                  <td>2x8e</td>
                </tr>
                <tr>
                  <td>Alt Incline Press</td>
                  <td>2x8e</td>
                </tr>
                <tr>
                  <th colspan="2">SS2 - Special Movements</th>
                </tr>
                <tr>
                  <td>Reverse Lunges</td>
                  <td>2x6e</td>
                </tr>
                <tr>
                  <td>Deadbug</td>
                  <td>2x30</td>
                </tr>
                <tr>
                  <th colspan="2">SS3 - Power/Plyos</th>
                </tr>
                <tr>
                  <td>Double Broad Jump</td>
                  <td>2-3x5e</td>
                </tr>
                <tr>
                  <td>Drop Jump</td>
                  <td>2-3x5</td>
                </tr>
              </table>
              {/*  */}
              <table className="distance-table">
                <tr>
                  <th colspan="2">Bodyweight Circuit</th>
                </tr>
                <tr>
                  <th>Exercise</th>
                  <th>Sets/Reps</th>
                </tr>
                <tr>
                  <td>Push-ups</td>
                  <td>3x15</td>
                </tr>
                <tr>
                  <td>SL Glute Bridge</td>
                  <td>3x10e</td>
                </tr>
                <tr>
                  <td>Deadbug</td>
                  <td>3x20</td>
                </tr>
                <tr>
                  <td>Supermans</td>
                  <td>3x20"</td>
                </tr>
                <tr>
                  <td>Side Plank w/ Top Leg Raises</td>
                  <td>3x20"</td>
                </tr>
                <tr>
                  <td>Slow Calf Raises</td>
                  <td>3x15</td>
                </tr>
                <tr>
                  <td>Squat Jumps</td>
                  <td>3x6</td>
                </tr>
              </table>
            </div>
          </div>
        ),
      },
      {
        calendar: false,
        title: "Drills",
        url: "drills",
        season: "Extras",
        content: (
          <div className="article-content">
            <h3>Form Drills</h3>
            <ul>
              <li>Toe Walks</li>
              <li>Heel Walks</li>
              <li>A-Walks</li>
              <li>B-Walks</li>
              <li>
                <p>Seated Arm Drills</p>
                <ul>
                  <li>Switches → Constant → Max Speed</li>
                  <li>
                    Sitting on the ground, start with basic switches bringing
                    your arms all the way through ROM, progress to constant
                    swing, and them max speed. If you do it right, you should be
                    able to bounce off the ground
                  </li>
                </ul>
              </li>
              <li>
                <p>Wall Arm Swing Drill</p>
                <ul>
                  <li>
                    Stand ~1ft away from the wall, swing your arms to tap the
                    wall with your fist and drive your elbows back. Keep your
                    arms moving front to back.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Speed Drills</h3>
            <ul>
              <li>A-Skips</li>
              <li>B-Skips</li>
              <li>Straight Leg Bound</li>
              <li>Backwards Run</li>
              <li>High Knees</li>
              <li>Butt Kicks</li>
              <li>
                <p>High Knee Circles</p>
                <ul>
                  <li>
                    Act as if there is a 6x6x6 in box you want to step over and
                    not hit while doing this high knee drill. Go up and forward{" "}
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Plyo Drills</h3>
            <ul>
              <li>Bound (Distance)</li>
              <li>Bound (Height)</li>
              <li>SL Hops</li>
              <li>Pogos</li>
              <li>High Knee Switches</li>
              <li>Calf Smash Run</li>
            </ul>
            <h3>Hurdle Drills</h3>
            <ul>
              <li>Standard Walk Over</li>
              <li>Double Walk Over</li>
              <li>Backwards Walk Over</li>
              <li>2 Forward, 1 Back</li>
              <li>Kick Overs</li>
              <li>Over-Unders</li>
              <li>Side Skips</li>
            </ul>
            <h3>Steeple Drills</h3>
            <ul>
              <li>Trail Leg</li>
              <li>Lead Leg</li>
              <li>Trail Leg Strides</li>
              <li>Lead Leg Strides</li>
              <li>Full Steeple Run Thru</li>
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
        title: "Fall Plan",
        url: "fall",
        year: "2024",
        season: "Fall",
        sheetID: "1AA9FWpvcEDaef5AqaF-IfAak6hdsp4jRJPZValfldqI",
        sheets: fall24sheets,
      },
      {
        calendar: false,
        title: "Pre/Post Run",
        url: "pre-post-run",
        season: "Extras",
        content: (
          <div className="article-content">
            <ul className="training-extras">
              <li className="extras-section">
                <h3>Pre - Every Day</h3>
                <a
                  href="https://www.youtube.com/embed/GJo7_MiRLkU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>Lunge Matrix</h4>
                </a>
                <ul>
                  <li>10x forward lunges</li>
                  <li>10x lunge w/ a twist</li>
                  <li>10x side lunges</li>
                  <li>10x 135° lunges</li>
                  <li>10x backwards lunges</li>
                </ul>
                <p>Leg Swings</p>
                <ul>
                  <li>10x front-facing</li>
                  <li>10x side-facing</li>
                  <li>10x forward circles</li>
                  <li>10x backward circles</li>
                  <li>10x front-facing bent-knee</li>
                  <li>10x side-facing bent-knee</li>
                </ul>
              </li>
              <li className="extras-section">
                <h3>Post - Every Day</h3>
                <p>
                  CORE: choose an exercise, do for 45 sec, rest for 15 sec, and
                  repeat for 5-10 minutes (switch to 60 sec, 15 sec intervals
                  for a challenge) examples of exercises: plank, side plank,
                  bicycles, crunches, scissors, flutter kicks, suitcases,
                  penguins, russian twists, etc.
                </p>
              </li>
              <li className="extras-section">
                <h3>Pre - Workout/Sprints</h3>
                <p>Dynamics</p>
                <p>
                  20m: toe walks, heel walks, inside walks, outside walks,
                  scoops, quad stretch, Frankensteins, baby yodas 30m: A walks,
                  B walks, A skips, B skips, open the gate, close the gate, side
                  shuffle (each side), karaokes (each side) + any other
                  exercises you feel like adding! 3× 80m (grass) strides
                </p>
              </li>
              <li className="extras-section">
                Post - Workout/Sprints
                <a
                  href="https://www.youtube.com/embed/5-2gUAOnrco"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>SAMs:</h4>
                </a>
                <ul>
                  <li>push-ups</li>
                  <li>mountain climbers</li>
                  <li>squats</li>
                  <li>step-ups</li>
                  <li>6× [clams, reverse clams, reverse air clams]*</li>
                  <li>6× leg raises (toe up, neutral, down)*</li>
                  <li>8× donkey kicks*</li>
                  <li>8× fire hydrants*</li>
                  <li>8× leg circles*, each direction</li>
                  <li>8× donkey whips*</li>
                  <li>6× cat-cow</li>
                </ul>
                <a
                  href="https://www.runnersworld.com/uk/training/beginners/a32172701/how-to-stretch-post-run/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>Stretch:</h4>
                </a>
                <ul>
                  <li>hamstring stretch</li>
                  <li>quad stretch</li>
                  <li>hip flexor stretch</li>
                  <li>calf stretch</li>
                  <li>+ any additional stretches you'd like</li>
                </ul>
                <p>*on each side</p>
              </li>
            </ul>
          </div>
        ),
      },
      {
        calendar: false,
        title: "Lifts",
        url: "lifts",
        season: "Extras",
        image: "https://i.imgur.com/lMFZMsa.jpg",
        content: (
          <div className="article-content">
            <ul className="training-extras">
              <li className="extras-section">
                <h3>Lifts</h3>
                <a
                  href="https://www.outsideonline.com/health/training-performance/absolute-minimalists-strength-workout/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>Base Routing</h4>
                </a>
                <ul>
                  <li>3× [6x (assisted) pull-ups]</li>
                  <li>3× [8x goblet squats]</li>
                  <li>3× [16x push-ups]</li>
                  <li>3× [8x weighted lunges]</li>
                  <li>3× [8x single-leg deadlift]</li>
                </ul>
              </li>
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
        sheets: fall24sheets,
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
      // {
      //   calendar: true,
      //   title: "Summer Plan",
      //   url: "fall",
      //   year: "2024",
      //   season: "Fall",
      //   sheetID: "1cN61bZL9q0V40jn107uo6zo4T4x7QQbqOCg64HPSCgY",
      //   sheets: fall24sheets,
      // },
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
