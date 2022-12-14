import "./TopBar.scss";
import { useState } from "react";
import { useEffect } from "react";

/* https://towardsdev.com/how-to-create-an-accessible-custom-select-dropdown-in-react-9d9858415f10
USE THIS? */

function TopBar({ articles, filters, onSort }) {
    // Initialize state for dropdown menu selections
    const [selectedFilters, setSelectedFilters] = useState({});

    // Populate dropdown menus with unique values from articles array
    const filterValues = {};
    filters.forEach(filter => {
        filterValues[filter] = [...new Set(articles.map(article => article[filter]))];
    });

    // Function to handle dropdown menu selections
    const handleChange = (e, filter) => {
        setSelectedFilters({ ...selectedFilters, [filter]: e.target.value });
    };

    // Sort articles when selectedFilters changes
    useEffect(() => {
        sortArticles();
    }, [selectedFilters]);

    // Function to sort articles based on selected filters
    const sortArticles = () => {
        let articlesFiltered = articles;
        Object.keys(selectedFilters).forEach(filter => {
            if (selectedFilters[filter]) {
                articlesFiltered = articlesFiltered.filter(article => article[filter] === selectedFilters[filter]);
            }
        });
        onSort(articlesFiltered);
    };

    if (filters !== '')
        return (
            <div className="topbar-container custom-select" id="topbar">
                {filters.map(filter => (
                    <>
                        <select className="filter-dropdown" id={`${filter}-select`} onChange={e => handleChange(e, filter)}>
                            {filter !== ('title' || 'name') ?
                                <option key={filter} className="filter" value="">{
                                    //this is so simple but i feel like a genius
                                    `All ${(filter.substring(filter.length - 1) === 'y') ? `${filter.substring(0, filter.length - 1)}ies` : `${filter}s`
                                    }`}</option>
                                : <></>}
                            {filterValues[filter].map(value => (
                                <option className="filter" key={value} value={value} data-value={value}>{value}</option>
                            ))}
                        </select>
                    </>
                ))}
            </div >
        );
    else
        return (
            <div className="topbar-container" id="topbar"></div>
        );
}
export default TopBar;