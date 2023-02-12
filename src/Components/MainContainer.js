import '../Styles/mainContainer.css';
import { NewTask } from './NewTask';
import {TaskBoard} from './TaskBoard';
export function MainContainer() {
    const name = "سعد"
    return (
        <div className='main container-sm'>

            <div className='row main-row'>

                <div className='col-sm-3 right-col'>  </div>
                <div className='col-sm-6 left-col'> </div>
            </div>


        </div>
    );
}