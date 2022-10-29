import './loader.scss';
import Lines from '../lines/lines';

const Loader = () => {
    return (
        <>
            {/* <Lines></Lines>
            <div className='loader-container'>
                <div className="loader"></div>
            </div> */}
            <Curtain/>
        </>
    );
}
export default Loader;

const Curtain = () => {
    return (
        <>
            <div className="curtainsContainer" style={{ height: '100vh', zIndex: '9999'}}>
                <div className="curtain small"></div>
                <div className="curtain big"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big hide"></div>
                <div className="curtain big"></div>
                <div className="curtain small"></div>
            </div>
        </>
    );
}