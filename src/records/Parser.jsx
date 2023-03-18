import db from "../data/database";
import API_KEY from "../data/google_api_key";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";

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
        data: []
    };

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
                currentSheet.data = parseSheetData(response.data.values);
            });
        });
    }

    /* return (
        { sheets }
    ); */
    
    getSheetData();
    console.log(sheets);

    // parse the sheet data
    function parseSheetData(data) {
        let parsedData = [];
        //for every 13 rows, and every 6 columns, create a new event
        for (let i = 0; i < data.length; i += 13) {
            for (let j = 0; j < data[i].length; j += 6) {
                //if the event does not have 10 cells below it, skip it
                if (!data[i + 11]) {
                    break;
                }
                //define the event
                let event = {
                    name: data[i][j],
                    records: [],
                };
                //for every 10 rows below the event name, create a new record
                for (let k = i + 2; k < i + 12; k++) {
                    //if the record is empty (no time), skip it
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
                    //if number is 1, push to all time records including the event name
                    if (data[k][j] === "1") {
                        all_time_records.data.push({
                            name: data[i][j],
                            meet: data[k][j + 1],
                            year: data[k][j + 2],
                            athlete: data[k][j + 3],
                            time: data[k][j + 4]
                        });
                    }
                }
                parsedData.push(event);
            }
        }
        return parsedData;
    }
}