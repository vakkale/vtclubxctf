import db from "../data/database";
import API_KEY from "../data/google_api_key";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Parser() {

    // 4 sheets in the spreadsheet
    const sheets = [
        {
            title: "Track & Field (M)",
            data: [],
        },
        {
            title: "Track & Field (W)",
            data: [],
        },
        {
            title: "Cross Country (M)",
            data: [],
        },
        {
            title: "Cross Country (W)",
            data: [],
        }
    ];

    // common range for all sheets
    const range = "B2:X";

    // records
    let all_time_records = {
        title: "All-Time Records",
        data: [
            {
                gender: "M",
                records: []
            },
            {
                gender: "W",
                records: []
            }
        ]
    };

    let events = [];

    return new Promise(async (resolve, reject) => {
        getSheetData().then(() => {
            if (sheets && events) {
                // merge the records
                console.log("merge result: ", recordsMerge());
                console.log("all time before: ", all_time_records);
                console.log("length of events: ", events.length);
                console.log("events: ", events);
                /* console.log("merge result: ", recordsMerge()); */
                sheets.unshift(all_time_records);
                resolve(sheets);
            }
            else {
                reject("Error");
            }
        });
    });

    // get the sheet data from the sheet id
    async function getSheetData() {

        const db_record = collection(db, 'records');
        const db_sheet = await getDocs(db_record);
        // Make the API request after getting the sheet id
        db_sheet.forEach(async (doc) => {
            const sheet_id = doc.data().sheet_id;
            sheets.forEach(async (currentSheet) => {
                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/${currentSheet.title}!${range}`,
                    {
                        params: {
                            key: API_KEY,
                        },
                    }
                );
                let gender = currentSheet.title.substring(currentSheet.title.length - 2, currentSheet.title.length - 1);
                currentSheet.data = parseSheetData(response.data.values, gender);
            });
        }).then(() => {
            return Promise.resolve();
        }).catch((error) => {
            console.log("Error: ", error);
            return Promise.reject();
        });
    }

    function recordsMerge() {
        let result = [];
        // for each event
        for (let i = 0; i < 31; i++) {
            let row = [];
            let mensRecord, womensRecord;
            for (let j = 0; j < all_time_records.data[0].records.length; j++) {
                if (all_time_records.data[0].records[j].name === events[i]) {
                    mensRecord = all_time_records.data[0].records[j];
                    break;
                }
            }
            for (let j = 0; j < all_time_records.data[1].records.length; j++) {
                if (all_time_records.data[1].records[j].name === events[i]) {
                    womensRecord = all_time_records.data[1].records[j];
                    break;
                }
            }
            /* console.log("mens: ", mensRecord);
            console.log("womens: ", womensRecord); */
            if (mensRecord && womensRecord) {
                row = [
                    mensRecord.meet || "",
                    mensRecord.year || "",
                    mensRecord.athlete || "",
                    mensRecord.time || "",
                    events[i],
                    womensRecord.meet || "",
                    womensRecord.year || "",
                    womensRecord.athlete || "",
                    womensRecord.time || ""
                ];
                // push each one by one to row
                /* row.push(mensRecord.meet || "");
                row.push(mensRecord.year || "");
                row.push(mensRecord.athlete || "");
                row.push(mensRecord.time || "");
                row.push(events[i]);
                row.push(womensRecord.meet || "");
                row.push(womensRecord.year || "");
                row.push(womensRecord.athlete || "");
                row.push(womensRecord.time || ""); */
            }
            result.push(row);
        }

        return result;
    }

    // parse the sheet data
    function parseSheetData(data, gender) {
        const recordIndex = (gender === "M") ? 0 : 1;
        let parsedData = [];
        const xc_ignore = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];
        // for every 13 rows, and every 6 columns, create a new event
        for (let i = 0; i < data.length; i += 13) {
            for (let j = 0; j < data[i].length; j += 6) {
                // if the event does not have 10 cells below it, skip it
                if (!data[i + 11]) {
                    break;
                }
                // define the event
                let event = {
                    name: data[i][j],
                    records: [],
                };
                // for every 10 rows below the event name, create a new record
                for (let k = i + 2; k < i + 12; k++) {
                    // if the record is empty (no time), skip it
                    if (!data[k][j + 4]) {
                        break;
                    }
                    let record = {
                        number: data[k][j],
                        meet: data[k][j + 1],
                        year: data[k][j + 2],
                        athlete: data[k][j + 3],
                        time: data[k][j + 4]
                    };
                    event.records.push(record);
                    if (
                        // if number is 1 (it's the record), push to all time records including the event name
                        data[k][j] === "1"
                        // ignore the grade specific records for xc
                        && !xc_ignore.some((grade) => data[i][j].includes(grade))
                    ) {
                        let record_name = data[i][j];
                        if (data[i][j].includes("All-Time")) {
                            record_name = (gender === "M") ? `8000m (M)` : `6000m (W)`;
                        }
                        all_time_records.data[recordIndex].records.push({
                            name: record_name,
                            meet: data[k][j + 1],
                            year: data[k][j + 2],
                            athlete: data[k][j + 3],
                            time: data[k][j + 4]
                        });
                        // if the event is not in the all events array, push it
                        if (!events.includes(record_name)) {
                            events.push(record_name);
                        }
                    }
                }
                parsedData.push(event);
            }
        }
        return parsedData;
    }
}