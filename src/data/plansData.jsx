const plansData = [
    {
        team: "Men's Distance",
        url: "mens-distance",
        image: "https://i.imgur.com/PSgzqgt.jpg",
        yPos: "30%",
        plans: [
            {
                calendar: true,
                title: "Low Mileage",
                url: "low-mileage",
                year: "2023",
                season: "Summer",
                sheetID: "1yOSbqWBCBkYcPCUyCW7ufxPNvFI_3rmXmuYNuRQOFtY",
                sheets: [
                    {
                        title: "May",
                        url: "may",
                        range: "B2:H22"
                    },
                    {
                        title: "June",
                        url: "june",
                        range: "B2:H22"
                    },
                    {
                        title: "July",
                        url: "july",
                        range: "B2:H26"
                    },
                    {
                        title: "August",
                        url: "august",
                        range: "B2:H22"
                    }
                ]
            },
            {
                calendar: true,
                title: "High-Mileage",
                url: "high-mileage",
                year: "2023",
                season: "Summer",
                sheetID: "1rfIvWz_1tAy1OYz_3lUX16zLFb-okkWwGopwaa5EPTo",
                sheets: [
                    {
                        title: "May",
                        url: "may",
                        range: "B2:H22"
                    },
                    {
                        title: "June",
                        url: "june",
                        range: "B2:H22"
                    },
                    {
                        title: "July",
                        url: "july",
                        range: "B2:H26"
                    },
                    {
                        title: "August",
                        url: "august",
                        range: "B2:H22"
                    }
                ]
            },
            {
                calendar: false,
                title: "Strength",
                url: "strength",
                season: "Extras",
                content:
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
                                    <td>In a high plank, take some weight and drag it under your body. Keeping your hips as flat as possible</td>
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
            },
            {
                calendar: false,
                title: "Drills",
                url: "drills",
                season: "Extras",
                content:
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
                                    <li>Sitting on the ground, start with basic switches bringing your arms all the way through ROM, progress to constant swing, and them max speed. If you do it right, you should be able to bounce off the ground</li>
                                </ul>
                            </li>
                            <li>
                                <p>Wall Arm Swing Drill</p>
                                <ul>
                                    <li>Stand ~1ft away from the wall, swing your arms to tap the wall with your fist and drive your elbows back. Keep your arms moving front to back.</li>
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
                                    <li>Act as if there is a 6x6x6 in box you want to step over and not hit while doing this high knee drill. Go up and forward </li>
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
            }
            /* ,
            {
                title: "1500m/5000m",
                url: "1500m-5000m",
                year: "2023",
                season: "Spring",
                sheetID: "1B-Rh9EeygbD7pA5lw07mz_fPmRmH7Nsl4GCx7jfr9y4",
                sheets: [
                    {
                        title: "January",
                        url: "january",
                        range: "B2:H22"
                    },
                    {
                        title: "February",
                        url: "february",
                        range: "B2:H22"
                    },
                    {
                        title: "March",
                        url: "march",
                        range: "B2:H22"
                    },
                    {
                        title: "April",
                        url: "april",
                        range: "B2:H26"
                    }
                ]
            } */
        ]
    },
    {
        team: "Women's Distance",
        url: "womens-distance",
        image: "https://i.imgur.com/6pa8c49.jpg",
        yPos: "top",
        plans: [
            {
                calendar: true,
                title: "Summer Plan",
                url: "summer-plan",
                year: "2023",
                season: "Summer",
                sheetID: "1k2yvLXyfyXLmLhX5rE3K2lfyEubGBIRSeVqtoLX3mzQ",
                sheets: [
                    {
                        title: "May",
                        url: "may",
                        range: "B2:H22"
                    },
                    {
                        title: "June",
                        url: "june",
                        range: "B2:H22"
                    },
                    {
                        title: "July",
                        url: "july",
                        range: "B2:H26"
                    },
                    {
                        title: "August",
                        url: "sugust",
                        range: "B2:H22"
                    }
                ]
            },
            {
                calendar: false,
                title: "Pre/Post Run",
                url: "pre-post-run",
                season: "Extras",
                content:
                    <div className="article-content">
                        <ul className="training-extras">
                            <li className="extras-section">
                                <h3>Pre - Every Day</h3>
                                <a href="https://www.youtube.com/embed/GJo7_MiRLkU" target="_blank" rel="noreferrer"><h4>Lunge Matrix</h4></a>
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
                                <p>CORE:
                                    choose an exercise, do for 45 sec, rest for 15 sec, and repeat for 5-10 minutes (switch to 60 sec, 15 sec intervals for a challenge)
                                    examples of exercises: plank, side plank, bicycles, crunches, scissors, flutter kicks, suitcases, penguins, russian twists, etc.</p>
                            </li>
                            <li className="extras-section">
                                <h3>Pre - Workout/Sprints</h3>
                                <p>Dynamics</p>
                                <p>20m: toe walks, heel walks, inside walks, outside walks, scoops, quad stretch, Frankensteins, baby yodas
                                    30m: A walks, B walks, A skips, B skips, open the gate, close the gate, side shuffle (each side), karaokes (each side)
                                    + any other exercises you feel like adding!
                                    3× 80m (grass) strides</p>
                            </li>
                            <li className="extras-section">
                                Post - Workout/Sprints
                                <a href="https://www.youtube.com/embed/5-2gUAOnrco" target="_blank" rel="noreferrer"><h4>SAMs:</h4></a>
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
                                <a href="https://www.runnersworld.com/uk/training/beginners/a32172701/how-to-stretch-post-run/" target="_blank" rel="noreferrer"><h4>Stretch:</h4></a>
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
            },
            {
                calendar: false,
                title: "Lifts",
                url: "lifts",
                season: "Extras",
                image: "https://i.imgur.com/lMFZMsa.jpg",
                content:
                    <div className="article-content">
                        <ul className="training-extras">
                            <li className="extras-section">
                                <h3>Lifts</h3>
                                <a href="https://www.outsideonline.com/health/training-performance/absolute-minimalists-strength-workout/" target="_blank" rel="noreferrer"><h4>Base Routing</h4></a>
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
            }
            /* ,
            {
                title: "Distance",
                url: "distance",
                year: "2022",
                season: "Winter",
                sheetID: "1Z2a7_1JlIbJI0kdOzvBE9sgp514Cr8ut8PDck7qSbPA",
                sheets: [
                    {
                        title: "January",
                        url: "january",
                        range: "B2:H22"
                    },
                    {
                        title: "February",
                        url: "february",
                        range: "B2:H22"
                    },
                    {
                        title: "March",
                        url: "march",
                        range: "B2:H22"
                    },
                    {
                        title: "April",
                        url: "april",
                        range: "B2:H26"
                    }
                ]
            } */
        ]
    },
    {
        team: "Field",
        url: "field",
        image: 'https://i.imgur.com/ae9cJEh.jpg',
        yPos: "top",
        plans: [
            {
                calendar: true,
                title: "Jumps",
                url: "jumps",
                year: "2023",
                season: "Summer",
                sheetID: "17CEhrYZwJ_YuHPDeAHrSrJY97e5TExTElqa0AyKGp0A",
                sheets: [
                    {
                        title: "January",
                        url: "january",
                        range: "B2:H22"
                    },
                    {
                        title: "February",
                        url: "february",
                        range: "B2:H22"
                    },
                    {
                        title: "March",
                        url: "march",
                        range: "B2:H22"
                    },
                    {
                        title: "April",
                        url: "april",
                        range: "B2:H26"
                    },
                    {
                        title: "May",
                        url: "may",
                        range: "B2:H22"
                    }
                ]
            },
            {
                calendar: true,
                title: "Throws",
                url: "throws",
                year: "2023",
                season: "Summer",
                sheetID: "159FwOZZM8uW5XfmGg3gvE3CO1o-0iLWgW3fBmm1XFbE",
                sheets: [
                    {
                        title: "June",
                        url: "june",
                        range: "B2:H22"
                    },
                    {
                        title: "July",
                        url: "july",
                        range: "B2:H26"
                    },
                    {
                        title: "August",
                        url: "august",
                        range: "B2:H22"
                    }
                ]
            }
        ]
    },
    {
        team: "Sprint",
        url: "sprint",
        image: "https://i.imgur.com/WbyiBeI.jpg",
        yPos: "top",
        plans: [
            {
                calendar: true,
                title: "Summer Plan",
                url: "summer-plan",
                year: "2023",
                season: "Summer",
                sheetID: "1r4ANyYBYr2a82wER-HP-YPGUOuO4Ha3JuXCYLcUr-BA",
                sheets: [
                    {
                        title: "June",
                        url: "june",
                        range: "B2:H22"
                    },
                    {
                        title: "July",
                        url: "july",
                        range: "B2:H26"
                    },
                    {
                        title: "August",
                        url: "august",
                        range: "B2:H22"
                    }
                ]
            }
        ]
    }
];
export default plansData;