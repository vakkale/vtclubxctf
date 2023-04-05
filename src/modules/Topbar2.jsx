import TopbarSelect from "./TopbarSelect";
import './TopbarSelect.scss';
import './Topbar2.scss';

export default function Topbar2(props) {

    return (
        <div className="topbar2" id="topbar">
            <TopbarSelect items={props.items} />
            <div className="topbar-container-2" />
        </div>
    )
}