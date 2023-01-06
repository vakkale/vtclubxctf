import "./TrainingPlan.scss";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function TrainingPlan({ sheetID, sheets }) {

    const today = new Date();
    const month = today.getMonth() + 1; //January is 0!
    const day = today.getDate();

    function getMonthFromString(mon) {
        //not my code but very clever, sets the month in plain english to a number
        var d = Date.parse(mon + "1, 2022");
        if (!isNaN(d)) {
            return new Date(d).getMonth() + 1;
        }
        return -1;
    }

    const [currentSheet, setCurrentSheet] = useState(
        //sets the current sheet to the first sheet in the array or the sheet that matches the current month
        (sheets.find(sheet => getMonthFromString(sheet.title) === month) !== null) ? sheets.find(sheet => getMonthFromString(sheet.title) == month) : sheets[sheetIndex]
    );
    const [sheetIndex, setSheetIndex] = useState(sheets.findIndex(sheet => getMonthFromString(sheet.title) === month));

    const API_KEY = 'AIzaSyCrhqwQnST889kf5Sj28iH3Sz9EaUHn2Hw';
    const SHEET_ID = sheetID;

    const [sheetName, setSheetName] = useState(currentSheet.title);
    /* const [sheetUrl, setSheetUrl] = useState[`${currentSheet.url}`]; */

    const [loading, setLoading] = useState(true);

    const currentPlan = useRef(null);

    const [updatingNow, setUpdatingNow] = useState(true);

    const [planMonth, setPlanMonth] = useState(getMonthFromString(currentSheet.sheetName));

    const [data, setData] = useState(null);

    useEffect(() => {
        if (sheets.find(sheet => getMonthFromString(sheet.title) === month) !== null)
            sheets.find(sheet => getMonthFromString(sheet.title) == month);
        console.log(sheetID);
    }, [sheets]);

    useEffect(() => {

        //gets the element with id topbar from the DOM
        const topbar = document.getElementById('topbar');
        const element = document.getElementById("sidebar");

        setLoading(true);
        async function fetchData() {
            const response = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${currentSheet.title}!${currentSheet.range}`,
                {
                    params: {
                        key: API_KEY,
                    },
                }
            );
            setData(response.data.values);
        }
        fetchData();

        setTimeout(() => {
            element.scrollTop = 0;
        }, 100);
        setTimeout(() => {
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: (topbar.offsetTop - topbar.offsetHeight + 4)
            });
            setLoading(false);
            setUpdatingNow(true);
        }, 800);
    }, [SHEET_ID, currentSheet, sheets]);

    useEffect(() => {
        setTimeout(() => {
            currentPlan.current = data;
            setPlanMonth(getMonthFromString(currentSheet.title));
        }, 600);
    }, [data]);

    useEffect(() => {
        setTimeout(() => {
            setCurrentSheet(sheets[sheetIndex]);
            setUpdatingNow(false);
        }, 100);
    }, [sheetIndex]);

    while (currentPlan.current === null) {
        return (
            <div className="plan-container">
                <div className={`loading-overlay ${(loading && updatingNow) ? 'loading' : 'loaded'}`}>
                    {(loading && updatingNow) && (
                        <div className="loading-spinner">
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="plan-container">
            <div className={`loading-overlay ${(loading && updatingNow) ? 'loading' : 'loaded'}`}>
                {(loading && updatingNow) && (
                    <div className="loading-spinner">
                    </div>
                )}
            </div>
            <div className="sheet-selector" id="sheet-selector">
                <button onClick={() => {
                    if (sheetIndex > 0) {
                        setSheetIndex(sheetIndex - 1);
                    }
                }}>{"<"}</button>
                <div className="sheet-name">
                    {currentSheet.title}
                </div>
                <button onClick={() => {
                    if (sheetIndex < sheets.length - 1) {
                        setSheetIndex(sheetIndex + 1);
                    }
                }}>{">"}</button>
            </div>
            <table>
                {currentPlan.current.map((row, i) => {
                    if (i === 0) {
                        return (
                            <thead key={i} className="table-header table-days">
                                <tr key={i} className="calendar-week">
                                    {row.map((cell, j) => (
                                        <th key={j}>{cell}</th>
                                    ))}
                                </tr>
                            </thead>
                        );
                    }
                    return (
                        <tbody key={i}>
                            <tr key={i} className="calendar-week">
                                {row.map((cell, j) => {
                                    if (i % 4 === 1) {
                                        return (
                                            <td key={j} className="calendar-day" style={{
                                                //opacity 0 to 1 over 1 second
                                                opacity: loading ? 0 : 1,
                                                transition: `opacity 0.3s ${(i + j) * 0.03}s`,
                                                //no pointer events until the opacity is 1
                                                pointerEvents: loading ? 'none' : 'auto',
                                            }}>
                                                <div>
                                                    {currentPlan.current.slice(i, i + 4).map((subrow, k) => {
                                                        if (k === 0) {
                                                            const [cellMonth, cellDay] = subrow[j].split('/');
                                                            return (
                                                                <div key={k} className="table-body plan-date"
                                                                    style={{
                                                                        color: cellMonth == month && cellDay == day
                                                                            ? 'darkorange'
                                                                            : planMonth != cellMonth
                                                                                ? 'darkgray'
                                                                                : 'black'
                                                                    }}
                                                                >{cellDay}</div>
                                                            );
                                                        }
                                                        else return (
                                                            <div key={k} className={`table-body ${
                                                                //set different css class for each of 3 remaining rows based on k
                                                                k === 1 ? 'plan-type' :             //type
                                                                    k === 2 ? 'plan-details' :      //details
                                                                        'plan-extra'                //extra
                                                                }`}
                                                                style={{
                                                                    //Makes the font for the mileage larger if the only description is the mileage
                                                                    fontSize: (k === 2 && subrow[j].length < 10) ? '1.4rem' : '1rem',
                                                                    //if subrow[j] includes the word 'mile', capitalize the text

                                                                    //capitalize the text for Mile
                                                                    textTransform: k === 2 ? 'capitalize' : 'none',
                                                                    //if the cell is empty, set height to what it would be if it had text
                                                                    height: subrow[j] === '' ? '1.5rem' : 'auto',
                                                                }}>{
                                                                    //if the cell is empty, return a space, otherwise return the cell
                                                                    subrow[j] === '' ? ' ' : subrow[j]
                                                                }</div>
                                                        );
                                                    })}
                                                </div>
                                            </td>
                                        );
                                    }
                                    return null;
                                })}
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div >
    );
}