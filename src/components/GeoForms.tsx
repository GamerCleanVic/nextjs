import {Square} from './Square';
import {Circle} from './Circle';

export const GeoForms = () => {
    return(
        <div className='flex gap-2 p-3 border-2 border-blue-400 rounded m-3'>
            <Square />
            <Circle />
        </div>
    );
}
