import './loader.scss';
import Lines from '../lines/lines';

const Loader = () => {
    return (
        <>
            <Lines></Lines>
            <div className='loader-container'>
                <div className="loader"></div>
            </div>
        </>
    );
}
export default Loader;